use chrono::{DateTime, NaiveDate, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Trip {
    pub id: i32,
    pub r#type: Option<String>,
    pub region_id: Option<i32>,
    pub region_name: Option<String>,
    pub difficulty: Option<String>,
    pub season: Option<String>,
    pub author: Option<String>,
    pub city: Option<String>,
    pub tlib_url: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct CreateTrip {
    pub r#type: Option<String>,
    pub region_id: Option<i32>,
    pub difficulty: Option<String>,
    pub season: Option<String>,
    pub author: Option<String>,
    pub city: Option<String>,
    pub tlib_url: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct UpdateTrip {
    pub r#type: Option<String>,
    pub region_id: Option<i32>,
    pub difficulty: Option<String>,
    pub season: Option<String>,
    pub author: Option<String>,
    pub city: Option<String>,
    pub tlib_url: Option<String>,
} 

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct TripRoute {
    pub id: i32,
    pub trip_id: i32,
    pub order_num: i32,
    pub object_id: Option<i32>,
    pub name: Option<String>,
    pub object_type: Option<String>,
    pub height: Option<i32>,
    pub category: Option<String>,
    pub latitude: Option<f64>,
    pub longitude: Option<f64>,
    pub trip_count: Option<i64>,
} 