use chrono::{DateTime, NaiveDate, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Trip {
    pub id: i32,
    pub r#type: String,
    pub region_id: Option<i32>,
    pub difficulty: Option<String>,
    pub season: Option<String>,
    pub author: Option<String>,
    pub city: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct CreateTrip {
    pub r#type: String,
    pub region_id: Option<i32>,
    pub difficulty: Option<String>,
    pub season: Option<String>,
    pub author: Option<String>,
    pub city: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct UpdateTrip {
    pub r#type: Option<String>,
    pub region_id: Option<i32>,
    pub difficulty: Option<String>,
    pub season: Option<String>,
    pub author: Option<String>,
    pub city: Option<String>,
} 