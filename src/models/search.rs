use serde::{Deserialize, Serialize};
use sqlx::types::BigDecimal;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Region {
    pub id: String,
    pub name: String,
    pub country: String,
}

#[derive(Debug, Deserialize, Clone)]
pub struct SearchParams {
    pub name: Option<String>,
    pub type_id: Option<i16>,
    pub region_id: Option<i32>,
    pub country_code: Option<String>,
    pub has_coordinates: Option<bool>,
    pub page: Option<i32>,
    pub limit: Option<i32>,
}

impl Default for SearchParams {
    fn default() -> Self {
        Self {
            name: None,
            type_id: None,
            region_id: None,
            country_code: None,
            has_coordinates: None,
            page: Some(1),
            limit: Some(20),
        }
    }
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