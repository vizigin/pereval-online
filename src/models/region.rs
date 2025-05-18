use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Region {
    pub id: i32,
    pub name: String,
    pub parent_id: Option<i32>,
    pub root_region_id: Option<i32>,
}

#[derive(Debug, Deserialize)]
pub struct CreateRegion {
    pub name: String,
    pub parent_id: Option<i32>,
    pub root_region_id: Option<i32>,
}

#[derive(Debug, Deserialize)]
pub struct UpdateRegion {
    pub name: Option<String>,
    pub parent_id: Option<i32>,
    pub root_region_id: Option<i32>,
} 