use sqlx::{PgPool, Row, postgres::PgArguments};
use sqlx::Arguments;
use crate::models::{Object, CreateObject, UpdateObject, SearchParams};
use anyhow::Result;

pub struct ObjectRepository {
    pool: PgPool,
}

impl ObjectRepository {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn search(&self, params: SearchParams) -> Result<(Vec<Object>, i64)> {
        let mut query = String::from("SELECT * FROM objects WHERE 1=1");
        let mut count_query = String::from("SELECT COUNT(*) FROM objects WHERE 1=1");
        let mut conditions = Vec::new();
        let mut args = PgArguments::default();
        let mut count_args = PgArguments::default();
        let mut param_index = 1;

        if let Some(name) = params.name {
            conditions.push(format!("name ILIKE ${}", param_index));
            args.add(format!("%{}%", name));
            count_args.add(format!("%{}%", name));
            param_index += 1;
        }

        if let Some(object_type) = params.object_type {
            conditions.push(format!("object_type ILIKE ${}", param_index));
            args.add(format!("%{}%", object_type));
            count_args.add(format!("%{}%", object_type));
            param_index += 1;
        }

        if let Some(region) = params.region {
            conditions.push(format!("region ILIKE ${}", param_index));
            args.add(format!("%{}%", region));
            count_args.add(format!("%{}%", region));
            param_index += 1;
        }

        if let Some(country) = params.country {
            conditions.push(format!("country ILIKE ${}", param_index));
            args.add(format!("%{}%", country));
            count_args.add(format!("%{}%", country));
            param_index += 1;
        }

        if let Some(distance_min) = &params.distance_to_border_min {
            conditions.push(format!("distance_to_border >= ${}", param_index));
            args.add(distance_min);
            count_args.add(distance_min);
            param_index += 1;
        }

        if let Some(distance_max) = &params.distance_to_border_max {
            conditions.push(format!("distance_to_border <= ${}", param_index));
            args.add(distance_max);
            count_args.add(distance_max);
            param_index += 1;
        }

        if let Some(has_coordinates) = params.has_coordinates {
            conditions.push(format!("has_coordinates = ${}", param_index));
            args.add(has_coordinates);
            count_args.add(has_coordinates);
            param_index += 1;
        }

        if let Some(has_photos) = params.has_photos {
            conditions.push(format!("has_photos = ${}", param_index));
            args.add(has_photos);
            count_args.add(has_photos);
            param_index += 1;
        }

        if let Some(has_reports) = params.has_reports {
            conditions.push(format!("has_reports = ${}", param_index));
            args.add(has_reports);
            count_args.add(has_reports);
            param_index += 1;
        }

        if !conditions.is_empty() {
            let conditions_str = conditions.join(" AND ");
            query.push_str(" AND ");
            query.push_str(&conditions_str);
            count_query.push_str(" AND ");
            count_query.push_str(&conditions_str);
        }

        // Get total count first
        let total: i64 = sqlx::query_scalar_with(&count_query, count_args)
            .fetch_one(&self.pool)
            .await?;

        let page = params.page.unwrap_or(1);
        let per_page = params.per_page.unwrap_or(20);
        let offset = (page - 1) * per_page;

        query.push_str(&format!(" ORDER BY id LIMIT {} OFFSET {}", per_page, offset));

        let objects = sqlx::query_as_with::<_, Object, _>(&query, args)
            .fetch_all(&self.pool)
            .await?;

        Ok((objects, total))
    }

    pub async fn create(&self, object: CreateObject) -> Result<Object> {
        let row = sqlx::query_as!(
            Object,
            r#"
            INSERT INTO objects (
                name, object_type, region, country, distance_to_border,
                has_coordinates, has_photos, has_reports
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *
            "#,
            object.name,
            object.object_type,
            object.region,
            object.country,
            object.distance_to_border,
            object.has_coordinates,
            object.has_photos,
            object.has_reports
        )
        .fetch_one(&self.pool)
        .await?;

        Ok(row)
    }

    pub async fn update(&self, id: i32, object: UpdateObject) -> Result<Option<Object>> {
        let mut query = String::from("UPDATE objects SET");
        let mut args_str: Vec<String> = Vec::new();
        let mut args: Vec<sqlx::types::BigDecimal> = Vec::new();
        let mut updates = Vec::new();
        let mut param_index = 1;

        if let Some(name) = object.name {
            updates.push(format!("name = ${}", param_index));
            args_str.push(name);
            param_index += 1;
        }

        if let Some(object_type) = object.object_type {
            updates.push(format!("object_type = ${}", param_index));
            args_str.push(object_type);
            param_index += 1;
        }

        if let Some(region) = object.region {
            updates.push(format!("region = ${}", param_index));
            args_str.push(region);
            param_index += 1;
        }

        if let Some(country) = object.country {
            updates.push(format!("country = ${}", param_index));
            args_str.push(country);
            param_index += 1;
        }

        if let Some(distance) = object.distance_to_border {
            updates.push(format!("distance_to_border = ${}", param_index));
            args.push(distance);
            param_index += 1;
        }

        if let Some(has_coordinates) = object.has_coordinates {
            updates.push(format!("has_coordinates = ${}", param_index));
            args_str.push(has_coordinates.to_string());
            param_index += 1;
        }

        if let Some(has_photos) = object.has_photos {
            updates.push(format!("has_photos = ${}", param_index));
            args_str.push(has_photos.to_string());
            param_index += 1;
        }

        if let Some(has_reports) = object.has_reports {
            updates.push(format!("has_reports = ${}", param_index));
            args_str.push(has_reports.to_string());
            param_index += 1;
        }

        if updates.is_empty() {
            return Ok(None);
        }

        query.push_str(&format!(" {} WHERE id = ${}", updates.join(", "), param_index));
        args_str.push(id.to_string());

        let mut query_builder = sqlx::query(&query);
        for arg in args_str {
            query_builder = query_builder.bind(arg);
        }

        for arg in args {
            query_builder = query_builder.bind(arg);
        }

        let row = query_builder
            .fetch_optional(&self.pool)
            .await?;

        Ok(row.map(|r| Object {
            id: r.get("id"),
            name: r.get("name"),
            object_type: r.get("object_type"),
            region: r.get("region"),
            country: r.get("country"),
            distance_to_border: r.get("distance_to_border"),
            has_coordinates: r.get("has_coordinates"),
            has_photos: r.get("has_photos"),
            has_reports: r.get("has_reports"),
            created_at: r.get("created_at"),
            updated_at: r.get("updated_at"),
        }))
    }

    pub async fn delete(&self, id: i32) -> Result<bool> {
        let result = sqlx::query!(
            "DELETE FROM objects WHERE id = $1",
            id
        )
        .execute(&self.pool)
        .await?;

        Ok(result.rows_affected() > 0)
    }
} 