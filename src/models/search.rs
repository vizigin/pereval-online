use serde::{Deserialize, Serialize};
use sqlx::types::BigDecimal;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Region {
    pub id: String,
    pub name: String,
    pub country: String,
}

#[derive(Debug, Serialize, Deserialize, Clone, Default)]
#[serde(default)]
pub struct SearchParams {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub name: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub object_type: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub region: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub country: Option<String>,
    #[serde(with = "bigdecimal_serde", skip_serializing_if = "Option::is_none")]
    pub distance_to_border_min: Option<BigDecimal>,
    #[serde(with = "bigdecimal_serde", skip_serializing_if = "Option::is_none")]
    pub distance_to_border_max: Option<BigDecimal>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub has_coordinates: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub has_photos: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub has_reports: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub page: Option<i64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub per_page: Option<i64>,
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