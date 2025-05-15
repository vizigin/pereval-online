use chrono::{DateTime, NaiveDate, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Trip {
    pub id: i32,
    pub name: String,
    pub r#type: String,
    pub region_id: Option<i32>,
    pub start_date: Option<NaiveDate>,
    pub end_date: Option<NaiveDate>,
    pub description: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct CreateTrip {
    pub name: String,
    pub r#type: String,
    pub region_id: Option<i32>,
    pub start_date: Option<NaiveDate>,
    pub end_date: Option<NaiveDate>,
    pub description: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct UpdateTrip {
    pub name: Option<String>,
    pub r#type: Option<String>,
    pub region_id: Option<i32>,
    pub start_date: Option<NaiveDate>,
    pub end_date: Option<NaiveDate>,
    pub description: Option<String>,
} 