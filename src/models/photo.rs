use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Photo {
    pub id: i32,
    pub url: String,
    pub title: Option<String>,
    pub description: Option<String>,
    pub object_id: Option<i32>,
    pub trip_id: Option<i32>,
    pub taken_at: Option<DateTime<Utc>>,
}

#[derive(Debug, Deserialize)]
pub struct CreatePhoto {
    pub url: String,
    pub title: Option<String>,
    pub description: Option<String>,
    pub object_id: Option<i32>,
    pub trip_id: Option<i32>,
    pub taken_at: Option<DateTime<Utc>>,
}

#[derive(Debug, Deserialize)]
pub struct UpdatePhoto {
    pub url: Option<String>,
    pub title: Option<String>,
    pub description: Option<String>,
    pub object_id: Option<i32>,
    pub trip_id: Option<i32>,
    pub taken_at: Option<DateTime<Utc>>,
} 