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

use crate::{
    error::AppError,
    models::{
        region::{CreateRegion, Region, UpdateRegion},
        object::{CreateObject, Object, UpdateObject},
        trip::{CreateTrip, Trip, UpdateTrip},
        photo::{CreatePhoto, Photo, UpdatePhoto},
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
}

#[derive(Debug, serde::Serialize)]
pub struct RegionInfo {
    pub id: i32,
    pub name: String,
    pub count: i64,
}

pub fn router() -> Router<PgPool> {
    Router::new()
        .route("/", get(index_handler))
        .route("/regions", get(regions_handler))
        .route("/search", get(search_handler))
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
        SELECT r.id, r.name, COUNT(o.id) as count
        FROM regions r
        LEFT JOIN objects o ON o.region_id = r.id
        WHERE r.id IN (33, 144, 336, 290, 314, 1, 28, 442, 506, 27, 25, 434, 484, 496, 325, 26, 472, 501, 324, 476, 485, 491, 492, 495, 514)
        GROUP BY r.id, r.name
        ORDER BY count DESC, r.name
        "#
    )
    .fetch_all(pool)
    .await
    .unwrap_or_default();

    rows.into_iter().map(|row| RegionInfo {
        id: row.id,
        name: row.name,
        count: row.count.unwrap_or(0),
    }).collect()
}

async fn index_handler(State(pool): State<PgPool>) -> Html<String> {
    let regions = get_regions_with_count(&pool).await;
    Html(IndexTemplate { regions }.render().unwrap())
}

async fn regions_handler(State(pool): State<PgPool>) -> Result<Html<String>, axum::http::StatusCode> {
    let regions = get_regions_with_count(&pool).await;
    Ok(Html(RegionsTemplate { regions }.render().unwrap()))
}

async fn search_handler(State(pool): State<PgPool>) -> Html<String> {
    let regions = get_regions_with_count(&pool).await;
    Html(SearchTemplate { regions }.render().unwrap())
}

async fn get_stats(
    State(pool): State<PgPool>,
) -> Result<impl IntoResponse, AppError> {
    let stats = sqlx::query!(
        r#"
        WITH object_counts AS (
            SELECT
                COUNT(*) FILTER (WHERE type = 'Вершина') as vertices,
                COUNT(*) FILTER (WHERE type = 'Перевал') as passes,
                COUNT(*) FILTER (WHERE type = 'Инфраструктура') as infrastructure,
                COUNT(*) FILTER (WHERE type = 'Ледник') as glaciers,
                COUNT(*) FILTER (WHERE type = 'Озеро') as nature
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
        SELECT id, name, parent_id, country_code, root_region_id
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
) -> Result<impl IntoResponse, AppError> {
    let region = sqlx::query_as!(
        Region,
        r#"
        SELECT id, name, parent_id, country_code, root_region_id
        FROM regions
        WHERE id = $1
        "#,
        id
    )
    .fetch_optional(&pool)
    .await?
    .ok_or_else(|| AppError::NotFound(format!("Region {} not found", id)))?;

    Ok(Json(region))
}

async fn create_region(
    State(pool): State<PgPool>,
    Json(region): Json<CreateRegion>,
) -> Result<impl IntoResponse, AppError> {
    let result = sqlx::query_as!(
        Region,
        r#"
        INSERT INTO regions (name, parent_id, country_code, root_region_id)
        VALUES ($1, $2, $3, $4)
        RETURNING id, name, parent_id, country_code, root_region_id
        "#,
        region.name,
        region.parent_id,
        region.country_code,
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
        SELECT id, name, type as "type!", region_id, parent_id, height, 
               latitude, longitude, description
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
    let object = sqlx::query_as!(
        Object,
        r#"
        SELECT id, name, type as "type!", region_id, parent_id, height,
               latitude, longitude, description
        FROM objects
        WHERE id = $1
        "#,
        id
    )
    .fetch_optional(&pool)
    .await?
    .ok_or_else(|| AppError::NotFound(format!("Object {} not found", id)))?;

    Ok(Json(object))
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
        RETURNING id, name, type as "type!", region_id, parent_id, height,
                  latitude, longitude, description
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
        SELECT id, name, type as "type!", region_id, start_date, end_date, description
        FROM trips
        ORDER BY start_date DESC NULLS LAST
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
    let trip = sqlx::query_as!(
        Trip,
        r#"
        SELECT id, name, type as "type!", region_id, start_date, end_date, description
        FROM trips
        WHERE id = $1
        "#,
        id
    )
    .fetch_optional(&pool)
    .await?
    .ok_or_else(|| AppError::NotFound(format!("Trip {} not found", id)))?;

    Ok(Json(trip))
}

async fn create_trip(
    State(pool): State<PgPool>,
    Json(trip): Json<CreateTrip>,
) -> Result<impl IntoResponse, AppError> {
    let result = sqlx::query_as!(
        Trip,
        r#"
        INSERT INTO trips (name, type, region_id, start_date, end_date, description)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id, name, type as "type!", region_id, start_date, end_date, description
        "#,
        trip.name,
        trip.r#type,
        trip.region_id,
        trip.start_date,
        trip.end_date,
        trip.description
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