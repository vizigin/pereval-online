use axum::{
    extract::{Path, Query, State},
    http::StatusCode,
    response::IntoResponse,
    routing::{get, post},
    Json, Router,
};
use serde::{Deserialize, Serialize};
use sqlx::{PgPool, types::BigDecimal};
use tower_http::services::ServeFile;
use askama::Template;
use axum::response::Html;
use num_traits::ToPrimitive;
use std::str::FromStr;
use std::collections::HashMap;

use crate::{
    error::AppError,
    models::{
        region::{CreateRegion, Region, UpdateRegion},
        object::{CreateObject, Object, UpdateObject},
        trip::{CreateTrip, Trip, UpdateTrip},
        photo::{CreatePhoto, Photo, UpdatePhoto},
        trip::TripRoute,
    },
};

#[derive(Debug, Deserialize)]
pub struct ListParams {
    limit: Option<i64>,
    offset: Option<i64>,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Stats {
    vertices: i64,
    passes: i64,
    infrastructure: i64,
    glaciers: i64,
    nature: i64,
    photos: i64,
    trips: i64,
}

#[derive(Template)]
#[template(path = "index.html")]
pub struct IndexTemplate {
    pub regions: Vec<RegionInfo>,
    pub stats: Stats,
}

#[derive(Template)]
#[template(path = "regions.html")]
pub struct RegionsTemplate {
    pub regions: Vec<RegionInfo>,
}

#[derive(Template)]
#[template(path = "search.html")]
pub struct SearchTemplate {
    pub regions: Vec<RegionInfo>,
    pub objects: Vec<ObjectInfo>,
}

#[derive(Debug, serde::Serialize)]
pub struct RegionInfo {
    pub id: i32,
    pub name: String,
    pub count: i64,
}

#[derive(Template)]
#[template(path = "region.html")]
pub struct RegionPageTemplate {
    pub region: RegionInfo,
    pub stats: RegionStats,
    pub subregions: Vec<SubregionInfo>,
    pub active_type: String,
    pub regions: Vec<RegionInfo>,
    pub region_breadcrumbs: Vec<RegionBreadcrumb>,
    pub passes: Vec<ObjectInfo>,
    pub vertices: Vec<ObjectInfo>,
    pub glaciers: Vec<ObjectInfo>,
    pub infrastructure: Vec<ObjectInfo>,
    pub nature: Vec<ObjectInfo>,
    pub heightest_peaks: Vec<ObjectInfo>,
    pub heightest_passes: Vec<ObjectInfo>,
    pub trips_tabs: ObjectTripsTabs,
    pub trips_stats: RegionTripsStats,
}

#[derive(Debug, serde::Serialize)]
pub struct RegionStats {
    pub passes: i64,
    pub vertices: i64,
    pub glaciers: i64,
    pub infrastructure: i64,
    pub nature: i64,
}

#[derive(Debug, serde::Serialize)]
pub struct SubregionInfo {
    pub id: i32,
    pub name: String,
    pub count: i64,
}

#[derive(Debug, serde::Serialize)]
pub struct ObjectInfo {
    pub id: i32,
    pub name: String,
    pub object_type: Option<String>,
    pub height: Option<i32>,
    pub category: Option<String>,
    pub latitude: Option<f64>,
    pub longitude: Option<f64>,
    pub reports_count: i64,
    pub distance: Option<f64>,
}

#[derive(Debug, Serialize)]
pub struct ObjectTripsTabs {
    pub total_count: usize,
    pub by_type: std::collections::BTreeMap<&'static str, Vec<TripWithRoute>>,
    pub by_type_preview: std::collections::BTreeMap<&'static str, Vec<(Trip, Vec<RoutePointPreview>)>>,
}

#[derive(Template)]
#[template(path = "object.html")]
pub struct ObjectTemplate {
    pub object: ObjectTemplateData,
    pub regions: Vec<RegionInfo>,
    pub trips_tabs: ObjectTripsTabs,
    pub nearest_peaks: Vec<ObjectInfo>,
    pub nearest_passes: Vec<ObjectInfo>,
    pub nearest_glaciers: Vec<ObjectInfo>,
}

#[derive(Debug, Serialize)]
pub struct RegionBreadcrumb {
    pub id: i32,
    pub name: String,
}

#[derive(Debug, Serialize)]
pub struct ObjectTemplateData {
    pub id: i32,
    pub name: String,
    pub r_type: String,
    pub region_name: Option<String>,
    pub height: Option<i32>,
    pub lat: Option<String>,
    pub lng: Option<String>,
    pub description: Option<String>,
    pub alt_names: Option<String>,
    pub full_address: Option<String>,
    pub border_distance: Option<f64>,
    pub region_breadcrumbs: Vec<RegionBreadcrumb>,
    pub info_source: Option<String>,
    pub updated_at: Option<String>,
    pub category: Option<String>,
    pub slope_type: Option<String>,
    pub country_code: Option<String>,
    pub country_full: Option<String>,
}

#[derive(Debug, Serialize)]
pub struct TripTemplateData {
    pub id: i32,
    pub r_type: String,
    pub difficulty: Option<String>,
    pub region_name: Option<String>,
    pub season: Option<String>,
    pub author: Option<String>,
    pub city: Option<String>,
    pub region_breadcrumbs: Vec<RegionBreadcrumb>,
    pub title_text: String,
    pub route: Vec<TripRoute>,
    pub tlib_url: Option<String>,
    pub polyline_coords: Vec<(f64, f64)>,
    pub bounds: Option<((f64, f64), (f64, f64))>,
    pub polyline_object_ids: Vec<i32>,
}

#[derive(Template)]
#[template(path = "trip.html")]
pub struct TripTemplate {
    pub trip: TripTemplateData,
    pub regions: Vec<RegionInfo>,
}

#[derive(Debug, Serialize)]
pub struct TripWithRoute {
    pub trip: Trip,
    pub route: Vec<TripRoute>,
}

#[derive(Debug, Serialize)]
pub struct RegionTripsStats {
    pub total: i64,
    pub by_type: std::collections::BTreeMap<String, i64>,
}

#[derive(Template)]
#[template(path = "about.html")]
pub struct AboutTemplate {
    pub regions: Vec<RegionInfo>,
}

#[derive(Template)]
#[template(path = "contacts.html")]
pub struct ContactsTemplate {
    pub regions: Vec<RegionInfo>,
}

#[derive(Debug, Serialize)]
pub struct RoutePointPreview {
    pub id: i32,
    pub name: Option<String>,
    pub is_active: bool,
    pub is_near_active: bool,
}

// Кастомный фильтр для форматирования числа с пробелами между тысячами
pub fn format_number(value: &i32) -> String {
    let s = value.to_string();
    let mut out = String::new();
    let chars = s.chars().rev().collect::<Vec<_>>();
    for (i, c) in chars.iter().enumerate() {
        if i > 0 && i % 3 == 0 {
            out.push(' ');
        }
        out.push(*c);
    }
    out.chars().rev().collect()
}

// НОВАЯ ОБЩАЯ ФУНКЦИЯ
fn build_region_breadcrumbs_common(region_id: Option<i32>, regions: &[(i32, String, Option<i32>)]) -> Vec<RegionBreadcrumb> {
    let mut breadcrumbs = Vec::new();
    let mut current_id = region_id;
    while let Some(rid) = current_id {
        if let Some((id, name, parent_id)) = regions.iter().find(|(r_id, _, _)| *r_id == rid) {
            breadcrumbs.push(RegionBreadcrumb { id: *id, name: name.clone() });
            current_id = *parent_id;
        } else {
            // Если регион не найден, прерываемся.
            // Можно добавить логирование, если нужно отследить такой случай.
            // println!("[DEBUG] build_region_breadcrumbs_common: Region with id {:?} not found in provided list.", rid);
            break;
        }
    }
    breadcrumbs.reverse();
    breadcrumbs
}

pub fn router() -> Router<PgPool> {
    Router::new()
        .route("/", get(index_handler))
        .route("/regions", get(regions_handler))
        .route("/search", get(search_handler))
        .route("/about", get(about_handler))
        .route("/contacts", get(contacts_handler))
        .route("/stats", get(get_stats))
        .route("/api/regions", get(list_regions).post(create_region))
        .route("/regions/:id", get(get_region))
        .route("/objects", get(list_objects).post(create_object))
        .route("/objects/:id", get(get_object))
        .route("/trips", get(list_trips).post(create_trip))
        .route("/trips/:id", get(get_trip))
        .route("/photos", get(list_photos).post(create_photo))
        .route("/photos/:id", get(get_photo))
}

async fn get_regions_with_count(pool: &PgPool) -> Vec<RegionInfo> {
    let rows = sqlx::query!(
        r#"
        SELECT r.id, r.name, c.count
        FROM regions r
        LEFT JOIN LATERAL (
            WITH RECURSIVE subregions AS (
                SELECT id FROM regions WHERE id = r.id
                UNION ALL
                SELECT cr.id FROM regions cr JOIN subregions sr ON cr.parent_id = sr.id
            )
            SELECT COUNT(*) FROM objects WHERE region_id IN (SELECT id FROM subregions)
        ) c(count) ON TRUE
        WHERE r.name IN (
            'Кавказ',
            'Памир и Памиро-Алай',
            'Тянь-Шань',
            'Прибайкалье и Забайкалье',
            'Саяны',
            'Алтай',
            'Джунгарский Алатау',
            'Крым',
            'Дальний Восток',
            'Гималаи',
            'Альпы',
            'Урал',
            'Северо-Запад России',
            'Средняя Сибирь',
            'Тавр',
            'Высокий Атлас',
            'Карпаты',
            'Северо-Восточная Сибирь',
            'Кузнецкий Алатау',
            'Островная Арктика',
            'Восточно-Европейская равнина',
            'Западная Сибирь',
            'Горы Южной Сибири',
            'Тыва',
            'Средняя Азия'
        )
        ORDER BY c.count DESC, r.name
        "#
    )
    .fetch_all(pool)
    .await
    .unwrap_or_default();

    // DEBUG: Вывод результатов из базы
    for row in &rows {
        // println!('[DEBUG get_regions_with_count] Region: {}, Count: {:?}', row.name, row.count);
    }

    rows.into_iter().map(|row| RegionInfo {
        id: row.id,
        name: row.name,
        count: row.count.unwrap_or(0),
    }).collect()
}

async fn index_handler(State(pool): State<PgPool>) -> Html<String> {
    let regions = get_regions_with_count(&pool).await;
    let stats_row = sqlx::query!(
        r#"
        WITH object_counts AS (
            SELECT
                COUNT(*) FILTER (WHERE LOWER(type) = 'вершина') as vertices,
                COUNT(*) FILTER (WHERE LOWER(type) = 'перевал') as passes,
                COUNT(*) FILTER (WHERE LOWER(type) = 'инфраструктура') as infrastructure,
                COUNT(*) FILTER (WHERE LOWER(type) = 'ледник') as glaciers,
                COUNT(*) FILTER (WHERE LOWER(type) = 'природа') as nature
            FROM objects
        ),
        photo_count AS (
            SELECT COUNT(*) as count FROM photos
        ),
        trip_count AS (
            SELECT COUNT(*) as count FROM trips
        )
        SELECT
            oc.vertices,
            oc.passes,
            oc.infrastructure,
            oc.glaciers,
            oc.nature,
            pc.count as photos,
            tc.count as trips
        FROM object_counts oc
        CROSS JOIN photo_count pc
        CROSS JOIN trip_count tc
        "#
    )
    .fetch_one(&pool)
    .await
    .unwrap();
    let stats = Stats {
        vertices: stats_row.vertices.unwrap_or(0),
        passes: stats_row.passes.unwrap_or(0),
        infrastructure: stats_row.infrastructure.unwrap_or(0),
        glaciers: stats_row.glaciers.unwrap_or(0),
        nature: stats_row.nature.unwrap_or(0),
        photos: stats_row.photos.unwrap_or(0),
        trips: stats_row.trips.unwrap_or(0),
    };
    Html(IndexTemplate { regions, stats }.render().unwrap())
}

async fn regions_handler(State(pool): State<PgPool>) -> Result<Html<String>, axum::http::StatusCode> {
    let regions = get_regions_with_count(&pool).await;
    Ok(Html(RegionsTemplate { regions }.render().unwrap()))
}

async fn search_handler(State(pool): State<PgPool>) -> Html<String> {
    let regions = get_regions_with_count(&pool).await;
    let objects = sqlx::query!(
        r#"SELECT o.id, o.name, o.type, o.height, o.category, o.latitude, o.longitude
            FROM objects o
            ORDER BY o.name
            LIMIT 24"#
    )
    .fetch_all(&pool)
    .await
    .unwrap_or_default()
    .into_iter()
    .map(|row| ObjectInfo {
        id: row.id,
        name: row.name,
        object_type: row.r#type.map(|s| s.to_string()),
        height: row.height.map(|h| h as i32),
        category: row.category.map(|s| s.to_string()),
        latitude: row.latitude.and_then(|v| v.to_f64()),
        longitude: row.longitude.and_then(|v| v.to_f64()),
        reports_count: 0i64,
        distance: None,
    })
    .collect();
    Html(SearchTemplate { regions, objects }.render().unwrap())
}

async fn get_stats(
    State(pool): State<PgPool>,
) -> Result<impl IntoResponse, AppError> {
    let stats = sqlx::query!(
        r#"
        WITH object_counts AS (
            SELECT
                COUNT(*) FILTER (WHERE LOWER(type) = 'вершина') as vertices,
                COUNT(*) FILTER (WHERE LOWER(type) = 'перевал') as passes,
                COUNT(*) FILTER (WHERE LOWER(type) = 'инфраструктура') as infrastructure,
                COUNT(*) FILTER (WHERE LOWER(type) = 'ледник') as glaciers,
                COUNT(*) FILTER (WHERE LOWER(type) = 'природа') as nature
            FROM objects
        ),
        photo_count AS (
            SELECT COUNT(*) as count FROM photos
        ),
        trip_count AS (
            SELECT COUNT(*) as count FROM trips
        )
        SELECT
            oc.vertices,
            oc.passes,
            oc.infrastructure,
            oc.glaciers,
            oc.nature,
            pc.count as photos,
            tc.count as trips
        FROM object_counts oc
        CROSS JOIN photo_count pc
        CROSS JOIN trip_count tc
        "#
    )
    .fetch_one(&pool)
    .await?;

    Ok(Json(Stats {
        vertices: stats.vertices.unwrap_or(0),
        passes: stats.passes.unwrap_or(0),
        infrastructure: stats.infrastructure.unwrap_or(0),
        glaciers: stats.glaciers.unwrap_or(0),
        nature: stats.nature.unwrap_or(0),
        photos: stats.photos.unwrap_or(0),
        trips: stats.trips.unwrap_or(0),
    }))
}

async fn list_regions(
    State(pool): State<PgPool>,
    Query(params): Query<ListParams>,
) -> Result<impl IntoResponse, AppError> {
    let regions = sqlx::query_as!(
        Region,
        r#"
        SELECT id, name, parent_id, root_region_id
        FROM regions
        ORDER BY name
        LIMIT $1
        OFFSET $2
        "#,
        params.limit.unwrap_or(100) as i64,
        params.offset.unwrap_or(0) as i64
    )
    .fetch_all(&pool)
    .await?;

    Ok(Json(regions))
}

async fn get_region(
    State(pool): State<PgPool>,
    Path(id): Path<i32>,
    Query(params): Query<std::collections::HashMap<String, String>>,
) -> Result<Html<String>, axum::http::StatusCode> {
    // Получаем инфо о регионе
    let region = sqlx::query!(
        "SELECT id, name FROM regions WHERE id = $1",
        id
    )
    .fetch_optional(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?
    .ok_or(axum::http::StatusCode::NOT_FOUND)?;

    // Получаем id всех подрегионов (рекурсивно)
    let subregion_ids: Vec<i32> = sqlx::query_scalar!(
        r#"
        WITH RECURSIVE subregions AS (
            SELECT id FROM regions WHERE id = $1
            UNION ALL
            SELECT r.id FROM regions r JOIN subregions sr ON r.parent_id = sr.id
        )
        SELECT id FROM subregions
        "#,
        id
    )
    .fetch_all(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?
    .into_iter()
    .filter_map(|x| x)
    .collect();

    // Получаем статистику по типам объектов с учётом всех дочерних регионов
    let stats_row = sqlx::query!(
        r#"
        SELECT
            COUNT(*) FILTER (WHERE LOWER(type) = 'перевал') as passes,
            COUNT(*) FILTER (WHERE LOWER(type) = 'вершина') as vertices,
            COUNT(*) FILTER (WHERE LOWER(type) = 'ледник') as glaciers,
            COUNT(*) FILTER (WHERE LOWER(type) = 'инфраструктура') as infrastructure,
            COUNT(*) FILTER (WHERE LOWER(type) = 'природа') as nature
        FROM objects WHERE region_id = ANY($1)
        "#,
        &subregion_ids
    )
    .fetch_one(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?;

    let stats = RegionStats {
        passes: stats_row.passes.unwrap_or(0),
        vertices: stats_row.vertices.unwrap_or(0),
        glaciers: stats_row.glaciers.unwrap_or(0),
        infrastructure: stats_row.infrastructure.unwrap_or(0),
        nature: stats_row.nature.unwrap_or(0),
    };

    // Получаем подрайоны (дочерние регионы) с рекурсивным подсчётом объектов
    let subregions = sqlx::query!(
        r#"
        SELECT r.id, r.name, c.count
        FROM regions r
        LEFT JOIN LATERAL (
            WITH RECURSIVE subregions AS (
                SELECT id FROM regions WHERE id = r.id
                UNION ALL
                SELECT cr.id FROM regions cr JOIN subregions sr ON cr.parent_id = sr.id
            )
            SELECT COUNT(*) FROM objects WHERE region_id IN (SELECT id FROM subregions)
        ) c(count) ON TRUE
        WHERE r.parent_id = $1
        ORDER BY c.count DESC, r.name
        "#,
        id
    )
    .fetch_all(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?
    .into_iter()
    .map(|row| SubregionInfo {
        id: row.id,
        name: row.name,
        count: row.count.unwrap_or(0),
    })
    .collect();

    // Фильтр по типу объекта
    let active_type = params.get("type").cloned().unwrap_or_else(|| "all".to_string());
    let type_filter = match active_type.as_str() {
        "pass" => Some("Перевал"),
        "vertex" => Some("Вершина"),
        "glacier" => Some("Ледник"),
        "infrastructure" => Some("Инфраструктура"),
        "nature" => Some("Природа"),
        _ => None,
    };

    // Получаем объекты по типам с лимитом 24 из всех подрегионов
    let passes = sqlx::query!(
        r#"SELECT o.id, o.name, o.type, o.height, o.category, o.latitude, o.longitude, COUNT(t.id) as reports_count
            FROM objects o
            LEFT JOIN trip_route tr ON tr.object_id = o.id
            LEFT JOIN trips t ON t.id = tr.trip_id
            WHERE o.region_id = ANY($1) AND LOWER(o.type) = 'перевал'
            GROUP BY o.id, o.name, o.type, o.height, o.category, o.latitude, o.longitude
            ORDER BY o.name
            LIMIT 24"#,
        &subregion_ids
    )
    .fetch_all(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?
    .into_iter()
    .map(|row| ObjectInfo {
        id: row.id,
        name: row.name,
        object_type: row.r#type,
        height: row.height,
        category: row.category,
        latitude: row.latitude.and_then(|v| v.to_f64()),
        longitude: row.longitude.and_then(|v| v.to_f64()),
        reports_count: row.reports_count.unwrap_or(0),
        distance: None,
    })
    .collect();
    let vertices = sqlx::query!(
        r#"SELECT o.id, o.name, o.type, o.height, o.latitude, o.longitude, COUNT(t.id) as reports_count
            FROM objects o
            LEFT JOIN trip_route tr ON tr.object_id = o.id
            LEFT JOIN trips t ON t.id = tr.trip_id
            WHERE o.region_id = ANY($1) AND LOWER(o.type) = 'вершина'
            GROUP BY o.id, o.name, o.type, o.height, o.latitude, o.longitude
            ORDER BY o.name
            LIMIT 24"#,
        &subregion_ids
    )
    .fetch_all(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?
    .into_iter()
    .map(|row| ObjectInfo {
        id: row.id,
        name: row.name,
        object_type: row.r#type,
        height: row.height,
        category: None,
        latitude: row.latitude.and_then(|v| v.to_f64()),
        longitude: row.longitude.and_then(|v| v.to_f64()),
        reports_count: row.reports_count.unwrap_or(0),
        distance: None,
    })
    .collect();
    let glaciers = sqlx::query!(
        "SELECT id, name, type, height, latitude, longitude FROM objects WHERE region_id = ANY($1) AND LOWER(type) = 'ледник' ORDER BY name LIMIT 24",
        &subregion_ids
    )
    .fetch_all(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?
    .into_iter()
    .map(|row| ObjectInfo {
        id: row.id,
        name: row.name,
        object_type: row.r#type,
        height: row.height,
        category: None,
        latitude: row.latitude.and_then(|v| v.to_f64()),
        longitude: row.longitude.and_then(|v| v.to_f64()),
        reports_count: 0i64,
        distance: None,
    })
    .collect();
    let infrastructure = sqlx::query!(
        "SELECT id, name, type, height, latitude, longitude FROM objects WHERE region_id = ANY($1) AND LOWER(type) = 'инфраструктура' ORDER BY name LIMIT 24",
        &subregion_ids
    )
    .fetch_all(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?
    .into_iter()
    .map(|row| ObjectInfo {
        id: row.id,
        name: row.name,
        object_type: row.r#type,
        height: row.height,
        category: None,
        latitude: row.latitude.and_then(|v| v.to_f64()),
        longitude: row.longitude.and_then(|v| v.to_f64()),
        reports_count: 0i64,
        distance: None,
    })
    .collect();
    let nature = sqlx::query!(
        "SELECT id, name, type, height, latitude, longitude FROM objects WHERE region_id = ANY($1) AND LOWER(type) = 'природа' ORDER BY name LIMIT 24",
        &subregion_ids
    )
    .fetch_all(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?
    .into_iter()
    .map(|row| ObjectInfo {
        id: row.id,
        name: row.name,
        object_type: row.r#type,
        height: row.height,
        category: None,
        latitude: row.latitude.and_then(|v| v.to_f64()),
        longitude: row.longitude.and_then(|v| v.to_f64()),
        reports_count: 0i64,
        distance: None,
    })
    .collect();

    // Получаем рекурсивно все подрегионы и считаем объекты
    let count_row = sqlx::query!(
        r#"
        WITH RECURSIVE subregions AS (
            SELECT id FROM regions WHERE id = $1
            UNION ALL
            SELECT regions.id FROM regions JOIN subregions ON regions.parent_id = subregions.id
        )
        SELECT COUNT(*) as count FROM objects WHERE region_id IN (SELECT id FROM subregions)
        "#,
        region.id
    )
    .fetch_one(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?;
    let region_info = RegionInfo {
        id: region.id,
        name: region.name,
        count: count_row.count.unwrap_or(0),
    };

    // Получаем список всех регионов для aside
    let regions = get_regions_with_count(&pool).await;

    // Получаем список всех регионов с parent_id для построения breadcrumbs
    let all_regions: Vec<(i32, String, Option<i32>)> = sqlx::query_as!(
        RegionWithParent,
        "SELECT id, name, parent_id FROM regions"
    )
    .fetch_all(&pool)
    .await
    .map(|v| v.into_iter().map(|r| (r.id, r.name, r.parent_id)).collect())
    .unwrap_or_default();
    let region_breadcrumbs = build_region_breadcrumbs_common(Some(region.id), &all_regions);

    // Получаем высочайшие вершины (limit 21, по убыванию высоты)
    let heightest_peaks = sqlx::query!(
        r#"SELECT o.id, o.name, o.type, o.height, o.latitude, o.longitude, COUNT(t.id) as reports_count
            FROM objects o
            LEFT JOIN trip_route tr ON tr.object_id = o.id
            LEFT JOIN trips t ON t.id = tr.trip_id
            WHERE o.region_id = ANY($1) AND LOWER(o.type) = 'вершина' AND o.height IS NOT NULL
            GROUP BY o.id, o.name, o.type, o.height, o.latitude, o.longitude
            ORDER BY o.height DESC
            LIMIT 21"#,
        &subregion_ids
    )
    .fetch_all(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?
    .into_iter()
    .map(|row| ObjectInfo {
        id: row.id,
        name: row.name,
        object_type: row.r#type,
        height: row.height,
        category: None,
        latitude: row.latitude.and_then(|v| v.to_f64()),
        longitude: row.longitude.and_then(|v| v.to_f64()),
        reports_count: row.reports_count.unwrap_or(0),
        distance: None,
    })
    .collect();
    // Получаем высочайшие перевалы (limit 21, по убыванию высоты)
    let heightest_passes = sqlx::query!(
        r#"SELECT o.id, o.name, o.type, o.height, o.category, o.latitude, o.longitude, COUNT(t.id) as reports_count
            FROM objects o
            LEFT JOIN trip_route tr ON tr.object_id = o.id
            LEFT JOIN trips t ON t.id = tr.trip_id
            WHERE o.region_id = ANY($1) AND LOWER(o.type) = 'перевал' AND o.height IS NOT NULL
            GROUP BY o.id, o.name, o.type, o.height, o.category, o.latitude, o.longitude
            ORDER BY o.height DESC
            LIMIT 21"#,
        &subregion_ids
    )
    .fetch_all(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?
    .into_iter()
    .map(|row| ObjectInfo {
        id: row.id,
        name: row.name,
        object_type: row.r#type,
        height: row.height,
        category: row.category,
        latitude: row.latitude.and_then(|v| v.to_f64()),
        longitude: row.longitude.and_then(|v| v.to_f64()),
        reports_count: row.reports_count.unwrap_or(0),
        distance: None,
    })
    .collect();

    // Получаем все trips по региону и подрегионам (Горный и Пеший)
    let gorniy_trips = get_trips_by_type(&pool, &subregion_ids, "Горный", 12).await?;
    let peshiy_trips = get_trips_by_type(&pool, &subregion_ids, "Пеший", 12).await?;
    let velotrips = get_trips_by_type(&pool, &subregion_ids, "Велосипедный", 12).await?;
    let lyzhniy_trips = get_trips_by_type(&pool, &subregion_ids, "Лыжный", 12).await?;
    let gornopeshiy_trips = get_trips_by_type(&pool, &subregion_ids, "Горно-пеший", 12).await?;
    let mut by_type = std::collections::BTreeMap::new();
    by_type.insert("Горный", gorniy_trips);
    by_type.insert("Пеший", peshiy_trips);
    by_type.insert("Велосипедный", velotrips);
    by_type.insert("Лыжный", lyzhniy_trips);
    by_type.insert("Горно-пеший", gornopeshiy_trips);
    let total_count = by_type.values().map(|v| v.len()).sum();
    let region_trips_tabs = ObjectTripsTabs { total_count, by_type, by_type_preview: std::collections::BTreeMap::new() };

    // --- Считаем статистику по походам (trips) ---
    let trips_total_row = sqlx::query_scalar!(
        "SELECT COUNT(*) FROM trips WHERE region_id = ANY($1)",
        &subregion_ids
    )
    .fetch_one(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?;
    let trips_total = trips_total_row.unwrap_or(0);

    let trips_by_type_rows = sqlx::query!(
        "SELECT type, COUNT(*) as count FROM trips WHERE region_id = ANY($1) GROUP BY type",
        &subregion_ids
    )
    .fetch_all(&pool)
    .await
    .map_err(|_| axum::http::StatusCode::INTERNAL_SERVER_ERROR)?;
    let mut trips_by_type = std::collections::BTreeMap::new();
    for row in trips_by_type_rows {
        let t = row.r#type.unwrap_or_default();
        let key = match t.trim() {
            "Горный" | "Горный поход" => "Горный",
            "Пеший" | "Пеший поход" => "Пеший",
            "Велосипедный" | "Велосипедный поход" => "Велосипедный",
            "Лыжный" | "Лыжный поход" => "Лыжный",
            "Горно-пеший" | "Горно-пеший поход" | "Горно" => "Горно-пеший",
            other => other,
        };
        *trips_by_type.entry(key.to_string()).or_insert(0) += row.count.unwrap_or(0);
    }
    for key in ["Горный", "Пеший", "Велосипедный", "Лыжный", "Горно-пеший"] {
        trips_by_type.entry(key.to_string()).or_insert(0);
    }
    let trips_stats = RegionTripsStats { total: trips_total, by_type: trips_by_type };

    Ok(Html(RegionPageTemplate {
        region: region_info,
        stats,
        subregions,
        active_type,
        regions,
        region_breadcrumbs,
        passes,
        vertices,
        glaciers,
        infrastructure,
        nature,
        heightest_peaks,
        heightest_passes,
        trips_tabs: region_trips_tabs,
        trips_stats,
    }.render().unwrap()))
}

async fn create_region(
    State(pool): State<PgPool>,
    Json(region): Json<CreateRegion>,
) -> Result<impl IntoResponse, AppError> {
    let result = sqlx::query_as!(
        Region,
        r#"
        INSERT INTO regions (name, parent_id, root_region_id)
        VALUES ($1, $2, $3)
        RETURNING id, name, parent_id, root_region_id
        "#,
        region.name,
        region.parent_id,
        region.root_region_id
    )
    .fetch_one(&pool)
    .await?;

    Ok((StatusCode::CREATED, Json(result)))
}

async fn list_objects(
    State(pool): State<PgPool>,
    Query(params): Query<ListParams>,
) -> Result<impl IntoResponse, AppError> {
    let objects = sqlx::query_as!(
        Object,
        r#"
        SELECT id, name, type as "type?", region_id, parent_id, height, 
               latitude, longitude, description,
               NULL as category, NULL as slope_type
        FROM objects
        ORDER BY name
        LIMIT $1
        OFFSET $2
        "#,
        params.limit.unwrap_or(100) as i64,
        params.offset.unwrap_or(0) as i64
    )
    .fetch_all(&pool)
    .await?;

    Ok(Json(objects))
}

async fn get_object(
    State(pool): State<PgPool>,
    Path(id): Path<i32>,
) -> Result<impl IntoResponse, AppError> {
    let object = sqlx::query!(
        r#"
        SELECT o.id, o.name, o.type as "type?", o.region_id as "region_id?", o.parent_id, o.height,
               o.latitude, o.longitude, o.description, r.name as region_name, o.country_code, o.country_full, o.border_distance, o.info_source, o.updated_at,
               o.category, o.slope_type
        FROM objects o
        LEFT JOIN regions r ON o.region_id = r.id
        WHERE o.id = $1
        "#,
        id
    )
    .fetch_optional(&pool)
    .await?
    .ok_or_else(|| AppError::NotFound(format!("Object {} not found", id)))?;

    let lat = format_coord(&object.latitude);
    let lng = format_coord(&object.longitude);

    // Получаем все регионы с parent_id
    let regions: Vec<(i32, String, Option<i32>)> = sqlx::query_as!(
        RegionWithParent,
        "SELECT id, name, parent_id FROM regions"
    )
    .fetch_all(&pool)
    .await?
    .into_iter()
    .map(|r| (r.id, r.name, r.parent_id))
    .collect();

    let region_breadcrumbs = build_region_breadcrumbs_common(object.region_id, &regions);

    let data = ObjectTemplateData {
        id: object.id,
        name: object.name,
        r_type: object.r#type.unwrap_or_default(),
        region_name: Some(object.region_name),
        height: object.height,
        lat,
        lng,
        description: object.description,
        alt_names: None,
        full_address: object.country_full.clone(),
        border_distance: object.border_distance.and_then(|v| v.to_f64()),
        region_breadcrumbs,
        info_source: object.info_source,
        updated_at: object.updated_at,
        category: object.category,
        slope_type: object.slope_type,
        country_code: object.country_code.clone().or_else(|| object.country_full.as_ref().and_then(|s| country_code_from_full(s))),
        country_full: object.country_full.clone(),
    };

    let regions_for_aside = get_regions_with_count(&pool).await;

    // Получаем все trips, связанные с объектом через trip_route
    let trip_rows = sqlx::query_as!(
        Trip,
        r#"
        SELECT t.id, t.type as "type?", t.region_id, r.name as "region_name?", t.difficulty, t.season, t.author, t.city, t.tlib_url
        FROM trips t
        JOIN trip_route tr ON tr.trip_id = t.id
        LEFT JOIN regions r ON t.region_id = r.id
        WHERE tr.object_id = $1
        GROUP BY t.id, r.name
        ORDER BY t.id DESC
        "#,
        id
    )
    .fetch_all(&pool)
    .await?;

    // Группируем по нужным типам маршрутов
    let mut by_type: std::collections::BTreeMap<&'static str, Vec<TripWithRoute>> = std::collections::BTreeMap::new();
    let mut by_type_preview: std::collections::BTreeMap<&'static str, Vec<(Trip, Vec<RoutePointPreview>)>> = std::collections::BTreeMap::new();
    let mut total_count = 0;
    for trip in trip_rows {
        let ttype = match trip.r#type.as_deref().map(str::trim) {
            Some("Горный") | Some("Горный поход") => "Горный",
            Some("Пеший") | Some("Пеший поход") => "Пеший",
            Some("Лыжный") | Some("Лыжный поход") => "Лыжный",
            Some("Велосипедный") | Some("Велосипедный поход") => "Велосипедный",
            Some("Горно-пеший") | Some("Горно-пеший поход") | Some("Горно") => "Горно-пеший",
            _ => continue,
        };
        // Для каждого похода выбираем маршрут
        let route = sqlx::query_as!(
            TripRoute,
            r#"
            SELECT tr.id, tr.trip_id, tr.order_num, tr.object_id, tr.name,
                   o.type as object_type, o.height,
                   o.category,
                   o.latitude::DOUBLE PRECISION as latitude, o.longitude::DOUBLE PRECISION as longitude,
                   (
                     SELECT COUNT(DISTINCT tr2.trip_id)
                     FROM trip_route tr2
                     WHERE tr2.object_id = tr.object_id
                   ) as trip_count
            FROM trip_route tr
            LEFT JOIN objects o ON tr.object_id = o.id
            WHERE tr.trip_id = $1
            ORDER BY tr.order_num
            "#,
            trip.id
        )
        .fetch_all(&pool)
        .await?;
        by_type.entry(ttype).or_default().push(TripWithRoute { trip: trip.clone(), route: route.clone() });
        by_type_preview.entry(ttype).or_default().push((trip, build_route_preview(&route, object.id)));
        total_count += 1;
    }
    let trips_tabs = ObjectTripsTabs { total_count, by_type, by_type_preview };
    // DEBUG: печатаем, что реально попало в by_type
    for (k, v) in &trips_tabs.by_type {
        // println!('[DEBUG] by_type: {} -> {}', k, v.len());
    }
    // println!('[DEBUG] total_count: {}', trips_tabs.total_count);

    // --- Новый код: ближайшие объекты ---
    let (latitude, longitude) = match (&object.latitude, &object.longitude) {
        (Some(lat), Some(lng)) => (lat.to_f64().unwrap_or(0.0), lng.to_f64().unwrap_or(0.0)),
        _ => (0.0, 0.0),
    };
    let latitude_bd = BigDecimal::from_str(&latitude.to_string()).unwrap();
    let longitude_bd = BigDecimal::from_str(&longitude.to_string()).unwrap();
    let nearest_rows = sqlx::query!(
        r#"
        SELECT o.id, o.name, o.type, o.height, o.latitude, o.longitude,
               sqrt(power((o.latitude - $2) * 111.32, 2) + power((o.longitude - $3) * 71.5, 2)) as distance,
               COUNT(DISTINCT tr.trip_id) as reports_count
        FROM objects o
        LEFT JOIN trip_route tr ON tr.object_id = o.id
        WHERE o.id != $1
          AND o.latitude IS NOT NULL AND o.longitude IS NOT NULL
          AND sqrt(power((o.latitude - $2) * 111.32, 2) + power((o.longitude - $3) * 71.5, 2)) <= 10
        GROUP BY o.id, o.name, o.type, o.height, o.latitude, o.longitude
        ORDER BY distance
        LIMIT 100
        "#,
        id, latitude_bd, longitude_bd
    )
    .fetch_all(&pool)
    .await?;
    let mut nearest_peaks = Vec::new();
    let mut nearest_passes = Vec::new();
    let mut nearest_glaciers = Vec::new();
    for row in nearest_rows {
        let info = ObjectInfo {
            id: row.id,
            name: row.name.clone(),
            object_type: row.r#type.clone(),
            height: row.height,
            category: None,
            latitude: row.latitude.and_then(|v| v.to_f64()),
            longitude: row.longitude.and_then(|v| v.to_f64()),
            reports_count: row.reports_count.unwrap_or(0),
            distance: row.distance.and_then(|d| d.to_f64()).map(|d| (d * 10.0).round() / 10.0),
        };
        let name_lower = row.name.to_lowercase();
        if name_lower.contains("верш") || name_lower.contains("пик") {
            nearest_peaks.push(info);
        } else if name_lower.contains("перевал") || name_lower.contains("пер.") {
            nearest_passes.push(info);
        } else if name_lower.contains("ледник") || name_lower.contains("лед.") {
            nearest_glaciers.push(info);
        }
    }

    Ok(Html(ObjectTemplate {
        object: data,
        regions: regions_for_aside,
        trips_tabs,
        nearest_peaks,
        nearest_passes,
        nearest_glaciers,
    }.render().unwrap()))
}

// Для sqlx::query_as!
#[derive(sqlx::FromRow)]
struct RegionWithParent {
    id: i32,
    name: String,
    parent_id: Option<i32>,
}

async fn create_object(
    State(pool): State<PgPool>,
    Json(object): Json<CreateObject>,
) -> Result<impl IntoResponse, AppError> {
    let result = sqlx::query_as!(
        Object,
        r#"
        INSERT INTO objects (name, type, region_id, parent_id, height, latitude, longitude, description)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id, name, type as "type?", region_id, parent_id, height,
                  latitude, longitude, description,
                  NULL as category, NULL as slope_type
        "#,
        object.name,
        object.r#type,
        object.region_id,
        object.parent_id,
        object.height,
        object.latitude,
        object.longitude,
        object.description
    )
    .fetch_one(&pool)
    .await?;

    Ok((StatusCode::CREATED, Json(result)))
}

async fn list_trips(
    State(pool): State<PgPool>,
    Query(params): Query<ListParams>,
) -> Result<impl IntoResponse, AppError> {
    let trips = sqlx::query_as!(
        Trip,
        r#"
        SELECT id, type as "type?", region_id, NULL as "region_name?", difficulty, season, author, city, tlib_url
        FROM trips
        ORDER BY id DESC
        LIMIT $1
        OFFSET $2
        "#,
        params.limit.unwrap_or(100) as i64,
        params.offset.unwrap_or(0) as i64
    )
    .fetch_all(&pool)
    .await?;

    Ok(Json(trips))
}

async fn get_trip(
    State(pool): State<PgPool>,
    Path(id): Path<i32>,
) -> Result<impl IntoResponse, AppError> {
    // 1. ЗАГРУЗКА ДАННЫХ О ПОХОДЕ (TRIP)
    // ВРЕМЕННЫЙ УПРОЩЕННЫЙ ЗАПРОС ДЛЯ ДИАГНОСТИКИ region_id
    let trip_check = sqlx::query!(
        r#"
        SELECT id, region_id
        FROM trips
        WHERE id = $1
        "#,
        id
    )
    .fetch_optional(&pool)
    .await?;

    // Оригинальная загрузка trip оставлена пока как есть, 
    // но теперь мы будем знать, что приходит в trip_check.region_id
    let trip = sqlx::query_as!(
        Trip,
        r#"
        SELECT id, type as "type?", region_id, NULL as "region_name?", difficulty, season, author, city, tlib_url
        FROM trips
        WHERE id = $1
        "#,
        id
    )
    .fetch_optional(&pool)
    .await?
    .ok_or_else(|| AppError::NotFound(format!("Trip {} not found", id)))?;

    // Получаем все регионы с parent_id
    let regions: Vec<(i32, String, Option<i32>)> = sqlx::query_as!(
        RegionWithParent,
        "SELECT id, name, parent_id FROM regions"
    )
    .fetch_all(&pool)
    .await?
    .into_iter()
    .map(|r| (r.id, r.name, r.parent_id))
    .collect();

    // Получаем список всех регионов с parent_id для построения breadcrumbs
    let all_regions: Vec<(i32, String, Option<i32>)> = sqlx::query_as!(
        RegionWithParent,
        "SELECT id, name, parent_id FROM regions"
    )
    .fetch_all(&pool)
    .await?
    .into_iter()
    .map(|r| (r.id, r.name, r.parent_id))
    .collect();
    let region_breadcrumbs = build_region_breadcrumbs_common(trip.region_id, &all_regions);
    // DEBUG: выводим результат построения хлебных крошек
    // println!('[DEBUG] region_breadcrumbs for trip {}: {:?}', trip.id, region_breadcrumbs);

    let region_name = region_breadcrumbs.last().map(|r| r.name.clone());
    let mut parts = vec![];
    if let Some(ref t) = trip.r#type { parts.push(t.clone()); }
    if let Some(ref d) = trip.difficulty { parts.push(d.clone()); }
    if let Some(ref region) = region_name { parts.push(region.clone()); }
    if let Some(ref season) = trip.season { parts.push(season.clone()); }
    let mut title_text = parts.join(", ");
    if let Some(ref author) = trip.author {
        title_text.push_str(&format!(" ({})", author));
    }

    let route = sqlx::query_as!(
        TripRoute,
        r#"
        SELECT tr.id, tr.trip_id, tr.order_num, tr.object_id, tr.name,
               o.type as object_type, o.height,
               o.category,
               o.latitude::DOUBLE PRECISION as latitude, o.longitude::DOUBLE PRECISION as longitude,
               (
                 SELECT COUNT(DISTINCT tr2.trip_id)
                 FROM trip_route tr2
                 WHERE tr2.object_id = tr.object_id
               ) as trip_count
        FROM trip_route tr
        LEFT JOIN objects o ON tr.object_id = o.id
        WHERE tr.trip_id = $1
        ORDER BY tr.order_num
        "#,
        id
    )
    .fetch_all(&pool)
    .await?;

    // --- Новое: вычисляем polyline и bounds ---
    let mut polyline_coords = Vec::new();
    let mut polyline_object_ids = Vec::new();
    for pt in &route {
        if let (Some(lat), Some(lng)) = (pt.latitude, pt.longitude) {
            polyline_coords.push((lat, lng));
            if let Some(obj_id) = pt.object_id {
                polyline_object_ids.push(obj_id);
            } else {
                polyline_object_ids.push(0); // или None, если нужно, но для JS проще 0
            }
        }
    }
    let bounds = if !polyline_coords.is_empty() {
        let (min_lat, max_lat) = polyline_coords.iter().map(|(lat, _)| *lat).fold((f64::MAX, f64::MIN), |(min, max), v| (min.min(v), max.max(v)));
        let (min_lng, max_lng) = polyline_coords.iter().map(|(_, lng)| *lng).fold((f64::MAX, f64::MIN), |(min, max), v| (min.min(v), max.max(v)));
        Some(((min_lat, min_lng), (max_lat, max_lng)))
    } else {
        None
    };
    // --- конец нового ---

    let trip_data = TripTemplateData {
        id: trip.id,
        r_type: trip.r#type.unwrap_or_default(),
        difficulty: trip.difficulty,
        region_name,
        season: trip.season,
        author: trip.author,
        city: trip.city,
        region_breadcrumbs,
        title_text,
        route,
        tlib_url: trip.tlib_url,
        polyline_coords,
        bounds,
        polyline_object_ids,
    };

    let regions_for_aside = get_regions_with_count(&pool).await;
    Ok(Html(TripTemplate { trip: trip_data, regions: regions_for_aside }.render().unwrap()))
}

async fn create_trip(
    State(pool): State<PgPool>,
    Json(trip): Json<CreateTrip>,
) -> Result<impl IntoResponse, AppError> {
    let result = sqlx::query_as!(
        Trip,
        r#"
        INSERT INTO trips (type, region_id, difficulty, season, author, city, tlib_url)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, type as "type?", region_id, NULL as "region_name?", difficulty, season, author, city, tlib_url
        "#,
        trip.r#type,
        trip.region_id,
        trip.difficulty,
        trip.season,
        trip.author,
        trip.city,
        trip.tlib_url
    )
    .fetch_one(&pool)
    .await?;

    Ok((StatusCode::CREATED, Json(result)))
}

async fn list_photos(
    State(pool): State<PgPool>,
    Query(params): Query<ListParams>,
) -> Result<impl IntoResponse, AppError> {
    let photos = sqlx::query_as!(
        Photo,
        r#"
        SELECT id, url, title, description, object_id, trip_id, taken_at
        FROM photos
        ORDER BY taken_at DESC NULLS LAST
        LIMIT $1
        OFFSET $2
        "#,
        params.limit.unwrap_or(100) as i64,
        params.offset.unwrap_or(0) as i64
    )
    .fetch_all(&pool)
    .await?;

    Ok(Json(photos))
}

async fn get_photo(
    State(pool): State<PgPool>,
    Path(id): Path<i32>,
) -> Result<impl IntoResponse, AppError> {
    let photo = sqlx::query_as!(
        Photo,
        r#"
        SELECT id, url, title, description, object_id, trip_id, taken_at
        FROM photos
        WHERE id = $1
        "#,
        id
    )
    .fetch_optional(&pool)
    .await?
    .ok_or_else(|| AppError::NotFound(format!("Photo {} not found", id)))?;

    Ok(Json(photo))
}

async fn create_photo(
    State(pool): State<PgPool>,
    Json(photo): Json<CreatePhoto>,
) -> Result<impl IntoResponse, AppError> {
    let result = sqlx::query_as!(
        Photo,
        r#"
        INSERT INTO photos (url, title, description, object_id, trip_id, taken_at)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id, url, title, description, object_id, trip_id, taken_at
        "#,
        photo.url,
        photo.title,
        photo.description,
        photo.object_id,
        photo.trip_id,
        photo.taken_at
    )
    .fetch_one(&pool)
    .await?;

    Ok((StatusCode::CREATED, Json(result)))
}

// Добавить вспомогательную функцию для country_code_from_full
fn country_code_from_full(full: &str) -> Option<String> {
    let map = [
        ("Россия", "ru"), ("Russian Federation", "ru"), ("Russia", "ru"),
        ("Казахстан", "kz"), ("Kazakhstan", "kz"),
        ("Киргизия", "kg"), ("Кыргызстан", "kg"), ("Kyrgyzstan", "kg"),
        ("Грузия", "ge"), ("Georgia", "ge"),
        ("Таджикистан", "tj"), ("Tajikistan", "tj"),
        ("Узбекистан", "uz"), ("Uzbekistan", "uz"),
        ("Монголия", "mn"), ("Mongolia", "mn"),
        ("Китай", "cn"), ("China", "cn"),
        ("Абхазия", "ge"), ("Abkhazia", "ge"),
        ("Армения", "am"), ("Armenia", "am"),
        ("Турция", "tr"), ("Turkey", "tr"),
        ("Азербайджан", "az"), ("Azerbaijan", "az"),
        ("Иран", "ir"), ("Iran", "ir"),
        ("Афганистан", "af"), ("Afghanistan", "af"),
        ("Пакистан", "pk"), ("Pakistan", "pk"),
        ("Индия", "in"), ("India", "in"),
    ];
    for (name, code) in map.iter() {
        if full.to_lowercase().contains(&name.to_lowercase()) {
            return Some(code.to_string());
        }
    }
    None
}

// Вынесенная функция для выборки trips по типу
async fn get_trips_by_type(
    pool: &PgPool,
    subregion_ids: &[i32],
    trip_type: &str,
    limit: i64,
) -> Result<Vec<TripWithRoute>, StatusCode> {
    let mut types = vec![trip_type.to_string(), format!("{} поход", trip_type)];
    if trip_type == "Горно-пеший" {
        types.push("Горно".to_string());
    }
    let trip_rows = sqlx::query_as!(
        Trip,
        r#"
        SELECT t.id, t.type as "type?", t.region_id, r.name as "region_name?", t.difficulty, t.season, t.author, t.city, t.tlib_url
        FROM trips t
        LEFT JOIN regions r ON t.region_id = r.id
        WHERE t.region_id = ANY($1) AND t.type = ANY($2)
        ORDER BY t.id DESC
        LIMIT $3
        "#,
        subregion_ids,
        &types,
        limit
    )
    .fetch_all(pool)
    .await
    .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    let mut trips_with_route = Vec::new();
    for trip in trip_rows {
        let route = sqlx::query_as!(
            TripRoute,
            r#"
            SELECT tr.id, tr.trip_id, tr.order_num, tr.object_id, tr.name,
                   o.type as object_type, o.height,
                   o.category,
                   o.latitude::DOUBLE PRECISION as latitude, o.longitude::DOUBLE PRECISION as longitude,
                   (
                     SELECT COUNT(DISTINCT tr2.trip_id)
                     FROM trip_route tr2
                     WHERE tr2.object_id = tr.object_id
                   ) as trip_count
            FROM trip_route tr
            LEFT JOIN objects o ON tr.object_id = o.id
            WHERE tr.trip_id = $1
            ORDER BY tr.order_num
            "#,
            trip.id
        )
        .fetch_all(pool)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
        trips_with_route.push(TripWithRoute { trip, route });
    }
    Ok(trips_with_route)
}

async fn about_handler(State(pool): State<PgPool>) -> Html<String> {
    let regions = get_regions_with_count(&pool).await;
    Html(AboutTemplate { regions }.render().unwrap())
}

async fn contacts_handler(State(pool): State<PgPool>) -> Html<String> {
    let regions = get_regions_with_count(&pool).await;
    Html(ContactsTemplate { regions }.render().unwrap())
}

fn build_route_preview(route: &[TripRoute], current_object_id: i32) -> Vec<RoutePointPreview> {
    let mut result = Vec::with_capacity(route.len());
    for (i, point) in route.iter().enumerate() {
        let is_active = point.object_id == Some(current_object_id);
        let is_near_active =
            (!is_active && i > 0 && route[i - 1].object_id == Some(current_object_id)) ||
            (!is_active && i + 1 < route.len() && route[i + 1].object_id == Some(current_object_id));
        result.push(RoutePointPreview {
            id: point.object_id.unwrap_or(0),
            name: point.name.clone(),
            is_active,
            is_near_active,
        });
    }
    result
}

fn format_coord(val: &Option<BigDecimal>) -> Option<String> {
    val.as_ref().map(|v| format!("{:.5}", v.to_f64().unwrap_or(0.0)))
}

// --- Фильтр для склонения русских существительных по числу ---
pub fn pluralize_ru(value: &i64, one: &str, few: &str, many: &str) -> String {
    let n = *value;
    let n_mod10 = n % 10;
    let n_mod100 = n % 100;
    let form = if n_mod10 == 1 && n_mod100 != 11 {
        one
    } else if (2..=4).contains(&n_mod10) && !(12..=14).contains(&n_mod100) {
        few
    } else {
        many
    };
    form.to_string()
} 