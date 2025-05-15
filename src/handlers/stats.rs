use actix_web::{web, HttpResponse, Responder};
use sqlx::{PgPool, Row};
use serde_json::json;
use std::collections::HashMap;
use crate::models::object::{type_id_to_string, TYPE_PEAK, TYPE_PASS, TYPE_GLACIER};

#[derive(Debug, serde::Serialize)]
pub struct Stats {
    total: i64,
    by_type: HashMap<String, i64>,
    by_region: Vec<RegionStat>,
    with_coordinates: i64,
}

#[derive(Debug, serde::Serialize)]
pub struct RegionStat {
    region_id: i32,
    region_name: String,
    count: i64,
}

pub async fn get_stats(pool: web::Data<PgPool>) -> impl Responder {
    match get_stats_from_db(&pool).await {
        Ok(stats) => HttpResponse::Ok().json(stats),
        Err(e) => {
            log::error!("Error getting stats: {}", e);
            HttpResponse::InternalServerError().json(json!({
                "error": "Failed to get statistics"
            }))
        }
    }
}

async fn get_stats_from_db(pool: &PgPool) -> Result<Stats, sqlx::Error> {
    let query = r#"
    WITH type_counts AS (
        SELECT 
            type_id,
            COUNT(*) as count
        FROM object
        GROUP BY type_id
    ),
    region_counts AS (
        SELECT 
            r.id as region_id,
            r.name as region_name,
            COUNT(o.id) as count
        FROM region r
        LEFT JOIN object o ON r.id = o.region_id
        GROUP BY r.id, r.name
        ORDER BY count DESC
    ),
    total_counts AS (
        SELECT 
            COUNT(*) as total,
            COUNT(CASE WHEN latitude IS NOT NULL AND longitude IS NOT NULL THEN 1 END) as with_coordinates
        FROM object
    )
    SELECT 
        tc.type_id,
        tc.count as type_count,
        rc.region_id,
        rc.region_name,
        rc.count as region_count,
        t.total,
        t.with_coordinates
    FROM type_counts tc
    CROSS JOIN region_counts rc
    CROSS JOIN total_counts t
    ORDER BY rc.count DESC
    "#;

    let rows = sqlx::query(query)
        .fetch_all(pool)
        .await?;

    let mut by_type = HashMap::new();
    let mut by_region = Vec::new();
    let mut total = 0;
    let mut with_coordinates = 0;

    for row in rows {
        let type_id: i16 = row.get("type_id");
        let type_count: i64 = row.get("type_count");
        let region_id: i32 = row.get("region_id");
        let region_name: String = row.get("region_name");
        let region_count: i64 = row.get("region_count");
        total = row.get("total");
        with_coordinates = row.get("with_coordinates");

        if let Some(type_name) = type_id_to_string(type_id) {
            by_type.insert(type_name.to_string(), type_count);
        }

        by_region.push(RegionStat {
            region_id,
            region_name,
            count: region_count,
        });
    }

    Ok(Stats {
        total,
        by_type,
        by_region,
        with_coordinates,
    })
}

pub async fn get_region_stats(pool: web::Data<PgPool>) -> impl Responder {
    log::info!("Handling /api/region_stats request");
    match get_region_stats_from_db(&pool).await {
        Ok(stats) => {
            log::info!("Successfully retrieved region stats: {:?}", stats);
            HttpResponse::Ok().json(stats)
        },
        Err(e) => {
            log::error!("Error getting region stats: {}", e);
            HttpResponse::InternalServerError().json(json!({
                "error": "Failed to get region statistics"
            }))
        }
    }
}

async fn get_region_stats_from_db(pool: &PgPool) -> Result<Vec<RegionStat>, sqlx::Error> {
    log::info!("Executing region stats query");
    let query = r#"
    SELECT 
        r.id as region_id,
        r.name as region_name,
        COUNT(o.id) as count
    FROM region r
    LEFT JOIN object o ON r.id = o.region_id
    GROUP BY r.id, r.name
    ORDER BY count DESC
    "#;

    let rows = sqlx::query(query)
        .fetch_all(pool)
        .await?;

    log::info!("Query returned {} rows", rows.len());
    let mut stats = Vec::new();

    for row in rows {
        let region_id: i32 = row.get("region_id");
        let region_name: String = row.get("region_name");
        let count: i64 = row.get("count");
        log::info!("Region: id={}, name={}, count={}", region_id, region_name, count);

        stats.push(RegionStat {
            region_id,
            region_name,
            count,
        });
    }

    Ok(stats)
}

fn slugify(name: &str) -> String {
    // Примитивный слаг: латиница, нижний регистр, пробелы и спецсимволы в '-'
    name.to_lowercase()
        .replace(' ', "-")
        .replace('ё', "e")
        .replace('й', "i")
        .replace('ц', "ts")
        .replace('у', "u")
        .replace('к', "k")
        .replace('е', "e")
        .replace('н', "n")
        .replace('г', "g")
        .replace('ш', "sh")
        .replace('щ', "sch")
        .replace('з', "z")
        .replace('х', "h")
        .replace('ъ', "")
        .replace('ф', "f")
        .replace('ы', "y")
        .replace('в', "v")
        .replace('а', "a")
        .replace('п', "p")
        .replace('р', "r")
        .replace('о', "o")
        .replace('л', "l")
        .replace('д', "d")
        .replace('ж', "zh")
        .replace('э', "e")
        .replace('я', "ya")
        .replace('ч', "ch")
        .replace('с', "s")
        .replace('м', "m")
        .replace('и', "i")
        .replace('т', "t")
        .replace('ь', "")
        .replace('б', "b")
        .replace('ю', "yu")
        .replace(|c: char| !c.is_ascii_alphanumeric() && c != '-', "-")
        .replace("--", "-")
        .trim_matches('-')
        .to_string()
} 