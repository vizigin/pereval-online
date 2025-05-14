use anyhow::{Context, Result};
use scraper::{Html, Selector};
use sqlx::PgPool;
use std::path::Path;
use tokio;
use sqlx::types::BigDecimal;
use num_traits::FromPrimitive;
use std::time::Duration;
use tokio::time::sleep;
use walkdir::WalkDir;
use tokio::io::AsyncReadExt;

const BATCH_SIZE: usize = 50; // Увеличиваем размер пакета для более эффективной обработки
const BATCH_DELAY_MS: u64 = 100; // Уменьшаем задержку между пакетами
const FILE_READ_BUFFER_SIZE: usize = 32768; // Увеличиваем размер буфера для чтения файлов
const MAX_RETRIES: u32 = 3; // Максимальное количество попыток для обработки файла

#[derive(Debug)]
struct Object {
    id: i32,
    name: String,
    object_type: String,
    region: String,
    country: Option<String>,
    distance_to_border: Option<BigDecimal>,
    has_coordinates: bool,
    has_photos: bool,
    has_reports: bool,
}

#[derive(Debug)]
struct ProcessingStats {
    total_files: usize,
    processed_files: usize,
    successful_files: usize,
    failed_files: usize,
    current_batch: usize,
    total_batches: usize,
}

impl ProcessingStats {
    fn new(total_files: usize) -> Self {
        Self {
            total_files,
            processed_files: 0,
            successful_files: 0,
            failed_files: 0,
            current_batch: 0,
            total_batches: (total_files + BATCH_SIZE - 1) / BATCH_SIZE,
        }
    }

    fn update(&mut self, success: bool) {
        self.processed_files += 1;
        if success {
            self.successful_files += 1;
        } else {
            self.failed_files += 1;
        }
    }

    fn print_progress(&self) {
        println!(
            "Progress: {}/{} files ({}%), Batch: {}/{}, Success: {}, Failed: {}",
            self.processed_files,
            self.total_files,
            (self.processed_files * 100) / self.total_files,
            self.current_batch,
            self.total_batches,
            self.successful_files,
            self.failed_files
        );
    }
}

#[tokio::main]
async fn main() -> Result<()> {
    // Load environment variables
    dotenv::dotenv().ok();
    
    // Initialize logger
    env_logger::init();

    // Get database URL from environment
    let database_url = std::env::var("DATABASE_URL")
        .context("DATABASE_URL must be set")?;

    // Create database connection pool
    let pool = PgPool::connect(&database_url)
        .await
        .context("Failed to connect to database")?;

    // Path to the data directory
    let data_dir = Path::new("../_recepient/pereval.online/object");

    // Подсчитываем общее количество файлов заранее
    let total_files = WalkDir::new(data_dir)
        .into_iter()
        .filter_map(|e| e.ok())
        .filter(|e| e.path().is_file() && e.path().extension().and_then(|s| s.to_str()) == Some("html"))
        .count();

    let mut stats = ProcessingStats::new(total_files);
    let mut current_batch = Vec::with_capacity(BATCH_SIZE);
    
    // Обрабатываем файлы потоково
    for entry in WalkDir::new(data_dir)
        .into_iter()
        .filter_map(|e| e.ok())
        .filter(|e| e.path().is_file() && e.path().extension().and_then(|s| s.to_str()) == Some("html"))
    {
        current_batch.push(entry.path().to_path_buf());
        
        if current_batch.len() == BATCH_SIZE {
            stats.current_batch += 1;
            println!("\nProcessing batch {}/{}", stats.current_batch, stats.total_batches);
            
            let mut batch_objects = Vec::with_capacity(BATCH_SIZE * 10); // Предполагаем ~10 объектов на файл

            for file_path in &current_batch {
                match process_html_file(file_path).await {
                    Ok(objects) => {
                        batch_objects.extend(objects);
                        stats.update(true);
                    }
                    Err(e) => {
                        eprintln!("Error processing {}: {}", file_path.display(), e);
                        stats.update(false);
                    }
                }
                stats.print_progress();
            }

            if !batch_objects.is_empty() {
                if let Err(e) = save_objects_batch(&pool, &batch_objects).await {
                    eprintln!("Error saving batch: {}", e);
                }
            }

            // Очищаем память
            batch_objects.clear();
            drop(batch_objects);
            current_batch.clear();
            
            // Принудительно вызываем сборщик мусора
            #[cfg(debug_assertions)]
            {
                println!("Requesting garbage collection...");
                std::thread::sleep(Duration::from_millis(100));
            }

            sleep(Duration::from_millis(BATCH_DELAY_MS)).await;
        }
    }

    // Обрабатываем оставшиеся файлы
    if !current_batch.is_empty() {
        stats.current_batch += 1;
        println!("\nProcessing final batch {}/{}", stats.current_batch, stats.total_batches);
        
        let mut batch_objects = Vec::new();
        for file_path in &current_batch {
            match process_html_file(file_path).await {
                Ok(objects) => {
                    batch_objects.extend(objects);
                    stats.update(true);
                }
                Err(e) => {
                    eprintln!("Error processing {}: {}", file_path.display(), e);
                    stats.update(false);
                }
            }
            stats.print_progress();
        }

        if !batch_objects.is_empty() {
            if let Err(e) = save_objects_batch(&pool, &batch_objects).await {
                eprintln!("Error saving final batch: {}", e);
            }
        }
    }

    println!("\nImport completed!");
    println!("Total files processed: {}", stats.processed_files);
    println!("Successful: {}, Failed: {}", stats.successful_files, stats.failed_files);
    Ok(())
}

async fn process_html_file(file_path: &Path) -> Result<Vec<Object>> {
    let mut retries = MAX_RETRIES;
    while retries > 0 {
        match try_process_html_file(file_path).await {
            Ok(objects) => return Ok(objects),
            Err(e) => {
                eprintln!("Error processing {} (attempts left: {}): {}", file_path.display(), retries - 1, e);
                retries -= 1;
                if retries > 0 {
                    tokio::time::sleep(Duration::from_secs(1)).await;
                    continue;
                }
                return Err(e);
            }
        }
    }
    Err(anyhow::anyhow!("Failed to process file after {} attempts", MAX_RETRIES))
}

async fn try_process_html_file(file_path: &Path) -> Result<Vec<Object>> {
    let mut content = String::with_capacity(FILE_READ_BUFFER_SIZE);
    let file = tokio::fs::File::open(file_path).await
        .with_context(|| format!("Failed to open file: {}", file_path.display()))?;
    
    let mut buffer = vec![0u8; FILE_READ_BUFFER_SIZE];
    let mut reader = tokio::io::BufReader::with_capacity(FILE_READ_BUFFER_SIZE, file);
    
    loop {
        let bytes_read = reader.read(&mut buffer).await?;
        if bytes_read == 0 {
            break;
        }
        // Используем lossy UTF-8 декодирование для пропуска некорректных символов
        content.push_str(&String::from_utf8_lossy(&buffer[..bytes_read]));
    }

    // Parse HTML
    let document = Html::parse_document(&content);

    // Create selectors
    let object_selector = Selector::parse("div.sobject").unwrap();
    let link_selector = Selector::parse("a.sobject__link").unwrap();
    let params_selector = Selector::parse("span.sobject__params").unwrap();
    let photo_selector = Selector::parse("div.sobject__photos").unwrap();
    let report_selector = Selector::parse("div.sobject__reports").unwrap();

    // Extract region from path
    let region = file_path
        .parent()
        .and_then(|p| p.file_name())
        .and_then(|n| n.to_str())
        .unwrap_or("Unknown");

    let mut objects = Vec::new();
    let mut processed_ids = std::collections::HashSet::new();

    // Find all objects
    for element in document.select(&object_selector) {
        // Extract object ID
        let id = match element
            .value()
            .attr("data-id")
            .and_then(|s| s.parse::<i32>().ok()) {
                Some(id) => {
                    if processed_ids.contains(&id) {
                        continue; // Пропускаем дубликаты
                    }
                    processed_ids.insert(id);
                    id
                },
                None => continue, // Пропускаем объекты без ID
            };

        // Extract name
        let name = match element
            .select(&link_selector)
            .next()
            .and_then(|e| e.text().next()) {
                Some(name) => name.trim().to_string(),
                None => continue, // Пропускаем объекты без имени
            };

        // Extract parameters
        let params = element
            .select(&params_selector)
            .next()
            .and_then(|e| e.text().next())
            .map(|s| s.trim().to_string());

        // Check for photos and reports
        let has_photos = element.select(&photo_selector).next().is_some();
        let has_reports = element.select(&report_selector).next().is_some();

        // Create object
        let object = Object {
            id,
            name,
            object_type: determine_object_type(&params),
            region: region.to_string(),
            country: determine_country(region),
            distance_to_border: extract_distance_to_border(&params),
            has_coordinates: element.value().attr("data-latlng").map_or(false, |s| s != ","),
            has_photos,
            has_reports,
        };

        objects.push(object);
    }

    // Очищаем память
    drop(document);
    drop(content);
    drop(buffer);
    drop(reader);

    Ok(objects)
}

async fn save_objects_batch(pool: &PgPool, objects: &[Object]) -> Result<()> {
    if objects.is_empty() {
        return Ok(());
    }

    let mut retries = MAX_RETRIES;
    while retries > 0 {
        match pool.begin().await {
            Ok(mut transaction) => {
                // Сначала проверяем существующие ID
                let existing_ids: Vec<i32> = sqlx::query_scalar!(
                    "SELECT id FROM objects WHERE id = ANY($1)",
                    &objects.iter().map(|o| o.id).collect::<Vec<i32>>()
                )
                .fetch_all(&mut *transaction)
                .await?;

                let existing_ids_set: std::collections::HashSet<i32> = existing_ids.into_iter().collect();

                for object in objects {
                    if let Err(e) = sqlx::query!(
                        r#"
                        INSERT INTO objects (
                            id, name, object_type, region, country,
                            distance_to_border, has_coordinates, has_photos, has_reports
                        )
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                        ON CONFLICT (id) DO UPDATE SET
                            name = EXCLUDED.name,
                            object_type = EXCLUDED.object_type,
                            region = EXCLUDED.region,
                            country = EXCLUDED.country,
                            distance_to_border = EXCLUDED.distance_to_border,
                            has_coordinates = EXCLUDED.has_coordinates,
                            has_photos = EXCLUDED.has_photos,
                            has_reports = EXCLUDED.has_reports,
                            updated_at = CURRENT_TIMESTAMP
                        "#,
                        object.id,
                        object.name,
                        object.object_type,
                        object.region,
                        object.country,
                        object.distance_to_border,
                        object.has_coordinates,
                        object.has_photos,
                        object.has_reports,
                    )
                    .execute(&mut *transaction)
                    .await {
                        eprintln!("Error saving object {}: {}", object.id, e);
                        continue;
                    }
                }

                if let Err(e) = transaction.commit().await {
                    eprintln!("Error committing transaction: {}", e);
                    retries -= 1;
                    if retries > 0 {
                        tokio::time::sleep(Duration::from_secs(1)).await;
                        continue;
                    }
                    return Err(e.into());
                }
                return Ok(());
            }
            Err(e) => {
                eprintln!("Error starting transaction: {}", e);
                retries -= 1;
                if retries > 0 {
                    tokio::time::sleep(Duration::from_secs(1)).await;
                    continue;
                }
                return Err(e.into());
            }
        }
    }
    Ok(())
}

fn determine_object_type(params: &Option<String>) -> String {
    let params = match params {
        Some(p) => p,
        None => return "перевал".to_string(),
    };

    // Определяем тип объекта по параметрам
    if params.contains("пер.") {
        "перевал".to_string()
    } else if params.contains("г.") {
        "вершина".to_string()
    } else if params.contains("лед.") {
        "ледник".to_string()
    } else if params.contains("инфраструктура") {
        "объект инфраструктуры".to_string()
    } else if params.contains("природа") {
        "объект природы".to_string()
    } else {
        // По умолчанию считаем перевалом
        "перевал".to_string()
    }
}

fn determine_country(region: &str) -> Option<String> {
    // Маппинг регионов к странам
    let region_to_country: &[(&str, &str)] = &[
        ("1", "Россия"),    // Кавказ
        ("2", "Таджикистан"), // Памир
        ("3", "Киргизия"),  // Тянь-Шань
        ("4", "Россия"),    // Прибайкалье
        ("5", "Россия"),    // Саяны
        ("6", "Россия"),    // Алтай
        ("7", "Казахстан"), // Джунгарский Алатау
        ("8", "Россия"),    // Крым
        ("9", "Россия"),    // Дальний Восток
        ("10", "Непал"),    // Гималаи
        ("11", "Швейцария"), // Альпы
        ("12", "Россия"),   // Урал
        ("13", "Россия"),   // Северо-Запад
        ("14", "Россия"),   // Средняя Сибирь
        ("15", "Турция"),   // Тавр
        ("16", "Марокко"),  // Высокий Атлас
        ("17", "Украина"),  // Карпаты
        ("18", "Россия"),   // Северо-Восточная Сибирь
        ("19", "Россия"),   // Кузнецкий Алатау
        ("20", "Россия"),   // Островная Арктика
        ("21", "Россия"),   // Восточно-Европейская равнина
        ("22", "Россия"),   // Западная Сибирь
        ("23", "Россия"),   // Горы Южной Сибири
        ("24", "Россия"),   // Тыва
        ("25", "Узбекистан"), // Средняя Азия
    ];

    Some(
        region_to_country
            .iter()
            .find(|(r, _)| *r == region)
            .map(|(_, country)| country.to_string())
            .unwrap_or_else(|| "Россия".to_string())
    )
}

fn extract_distance_to_border(params: &Option<String>) -> Option<BigDecimal> {
    let params = match params {
        Some(p) => p,
        None => return None,
    };

    // Ищем упоминания расстояния до границы
    let distance = if params.contains("более 20 км") {
        Some(25.0)
    } else if params.contains("от 10 до 20 км") {
        Some(15.0)
    } else if params.contains("от 5 до 10 км") {
        Some(7.5)
    } else if params.contains("от 1 до 5 км") {
        Some(3.0)
    } else if params.contains("от 100 м до 1 км") {
        Some(0.5)
    } else if params.contains("менее 100 м") {
        Some(0.05)
    } else {
        None
    };

    distance.and_then(|d| BigDecimal::from_f64(d))
} 