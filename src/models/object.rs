use serde::{Deserialize, Serialize};
use chrono::{DateTime, Utc};
use sqlx::types::BigDecimal;

#[derive(Debug, Serialize, Deserialize, Clone, sqlx::FromRow)]
pub struct Object {
    pub id: i32,
    pub name: String,
    pub object_type: String,
    pub region: String,
    pub country: String,
    #[serde(with = "bigdecimal_serde")]
    pub distance_to_border: Option<BigDecimal>,
    pub has_coordinates: bool,
    pub has_photos: bool,
    pub has_reports: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct CreateObject {
    pub name: String,
    pub object_type: String,
    pub region: String,
    pub country: String,
    #[serde(with = "bigdecimal_serde")]
    pub distance_to_border: Option<BigDecimal>,
    pub has_coordinates: bool,
    pub has_photos: bool,
    pub has_reports: bool,
}

#[derive(Debug, Serialize, Deserialize, Clone, Default)]
pub struct UpdateObject {
    pub name: Option<String>,
    pub object_type: Option<String>,
    pub region: Option<String>,
    pub country: Option<String>,
    #[serde(with = "bigdecimal_serde")]
    pub distance_to_border: Option<BigDecimal>,
    pub has_coordinates: Option<bool>,
    pub has_photos: Option<bool>,
    pub has_reports: Option<bool>,
}

mod bigdecimal_serde {
    use serde::{Deserialize, Deserializer, Serializer};
    use sqlx::types::BigDecimal;
    use std::str::FromStr;

    pub fn serialize<S>(value: &Option<BigDecimal>, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        match value {
            Some(v) => serializer.serialize_str(&v.to_string()),
            None => serializer.serialize_none(),
        }
    }

    pub fn deserialize<'de, D>(deserializer: D) -> Result<Option<BigDecimal>, D::Error>
    where
        D: Deserializer<'de>,
    {
        let s: Option<String> = Option::deserialize(deserializer)?;
        match s {
            Some(s) => BigDecimal::from_str(&s)
                .map(Some)
                .map_err(serde::de::Error::custom),
            None => Ok(None),
        }
    }
} 