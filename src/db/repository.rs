use sqlx::{PgPool, types::BigDecimal};
use crate::models::{Object, CreateObject, UpdateObject};

pub async fn get_object(pool: &PgPool, id: i32) -> Result<Option<Object>, sqlx::Error> {
    sqlx::query_as!(
        Object,
        r#"
        SELECT id, name, type as "type?", region_id, parent_id, height,
               latitude, longitude, description,
               NULL as category, NULL as slope_type
        FROM objects
        WHERE id = $1
        "#,
        id
    )
    .fetch_optional(pool)
    .await
}

pub async fn list_objects(
    pool: &PgPool,
    limit: Option<i64>,
    offset: Option<i64>,
) -> Result<Vec<Object>, sqlx::Error> {
    sqlx::query_as!(
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
        limit.unwrap_or(100) as i64,
        offset.unwrap_or(0) as i64
    )
    .fetch_all(pool)
    .await
}

pub async fn create_object(pool: &PgPool, object: CreateObject) -> Result<Object, sqlx::Error> {
    sqlx::query_as!(
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
    .fetch_one(pool)
    .await
}

pub async fn update_object(pool: &PgPool, id: i32, object: UpdateObject) -> Result<Option<Object>, sqlx::Error> {
    let mut query = String::from(
        r#"
        UPDATE objects
        SET "#,
    );
    let mut params: Vec<String> = Vec::new();
    let mut param_index = 1;

    if let Some(ref v) = object.name {
        params.push(format!("name = ${}", param_index));
        param_index += 1;
    }
    if let Some(ref v) = object.r#type {
        params.push(format!("type = ${}", param_index));
        param_index += 1;
    }
    if let Some(ref v) = object.region_id {
        params.push(format!("region_id = ${}", param_index));
        param_index += 1;
    }
    if let Some(ref v) = object.parent_id {
        params.push(format!("parent_id = ${}", param_index));
        param_index += 1;
    }
    if let Some(ref v) = object.height {
        params.push(format!("height = ${}", param_index));
        param_index += 1;
    }
    if let Some(ref v) = object.latitude {
        params.push(format!("latitude = ${}", param_index));
        param_index += 1;
    }
    if let Some(ref v) = object.longitude {
        params.push(format!("longitude = ${}", param_index));
        param_index += 1;
    }
    if let Some(ref v) = object.description {
        params.push(format!("description = ${}", param_index));
        param_index += 1;
    }

    if params.is_empty() {
        return get_object(pool, id).await;
    }

    query.push_str(&params.join(", "));
    query.push_str(&format!(
        r#"
        WHERE id = ${}
        RETURNING id, name, type as "type?", region_id, parent_id, height,
                  latitude, longitude, description"#,
        param_index
    ));

    let mut q = sqlx::query_as::<_, Object>(&query);
    
    // Bind parameters in order
    if let Some(ref v) = object.name {
        q = q.bind(v);
    }
    if let Some(ref v) = object.r#type {
        q = q.bind(v);
    }
    if let Some(ref v) = object.region_id {
        q = q.bind(v);
    }
    if let Some(ref v) = object.parent_id {
        q = q.bind(v);
    }
    if let Some(ref v) = object.height {
        q = q.bind(v);
    }
    if let Some(ref v) = object.latitude {
        q = q.bind(v);
    }
    if let Some(ref v) = object.longitude {
        q = q.bind(v);
    }
    if let Some(ref v) = object.description {
        q = q.bind(v);
    }
    
    q = q.bind(id);
    q.fetch_optional(pool).await
}

pub async fn delete_object(pool: &PgPool, id: i32) -> Result<bool, sqlx::Error> {
    let result = sqlx::query!(
        r#"
        DELETE FROM objects
        WHERE id = $1
        "#,
        id
    )
    .execute(pool)
    .await?;
    Ok(result.rows_affected() > 0)
} 