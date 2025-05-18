use serde::{Deserialize, Serialize};
use sqlx::types::BigDecimal;
use sqlx::FromRow;

// Constants for object types
pub const TYPE_PEAK: i16 = 1;
pub const TYPE_PASS: i16 = 2;
pub const TYPE_INFRASTRUCTURE: i16 = 3;
pub const TYPE_GLACIER: i16 = 4;
pub const TYPE_NATURE: i16 = 5;

// Функция для преобразования type_id в текстовое представление
pub fn type_id_to_string(type_id: i16) -> Option<&'static str> {
    match type_id {
        TYPE_PEAK => Some("вершина"),
        TYPE_PASS => Some("перевал"),
        TYPE_INFRASTRUCTURE => Some("объект инфраструктуры"),
        TYPE_GLACIER => Some("ледник"),
        TYPE_NATURE => Some("объект природы"),
        _ => None,
    }
}

// Функция для преобразования текстового представления в type_id
pub fn string_to_type_id(type_str: &str) -> Option<i16> {
    match type_str {
        "вершина" => Some(TYPE_PEAK),
        "перевал" => Some(TYPE_PASS),
        "объект инфраструктуры" => Some(TYPE_INFRASTRUCTURE),
        "ледник" => Some(TYPE_GLACIER),
        "объект природы" => Some(TYPE_NATURE),
        _ => None,
    }
}

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Object {
    pub id: i32,
    pub name: String,
    pub r#type: String,
    pub region_id: Option<i32>,
    pub parent_id: Option<i32>,
    pub height: Option<i32>,
    #[serde(with = "crate::models::object::bigdecimal_serde")]
    pub latitude: Option<BigDecimal>,
    #[serde(with = "crate::models::object::bigdecimal_serde")]
    pub longitude: Option<BigDecimal>,
    pub description: Option<String>,
}

impl Object {
    pub fn r#type(&self) -> Option<&str> {
        type_id_to_string(self.r#type.parse::<i16>().unwrap())
    }

    pub fn has_coordinates(&self) -> bool {
        self.latitude.is_some() && self.longitude.is_some()
    }

    pub fn has_photos(&self) -> bool {
        // TODO: Implement when photos are added
        false
    }

    pub fn has_reports(&self) -> bool {
        // TODO: Implement when reports are added
        false
    }
}

#[derive(Debug, Deserialize)]
pub struct CreateObject {
    pub name: String,
    pub r#type: String,
    pub region_id: Option<i32>,
    pub parent_id: Option<i32>,
    pub height: Option<i32>,
    #[serde(with = "crate::models::object::bigdecimal_serde")]
    pub latitude: Option<BigDecimal>,
    #[serde(with = "crate::models::object::bigdecimal_serde")]
    pub longitude: Option<BigDecimal>,
    pub description: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct UpdateObject {
    pub name: Option<String>,
    pub r#type: Option<String>,
    pub region_id: Option<i32>,
    pub parent_id: Option<i32>,
    pub height: Option<i32>,
    #[serde(with = "crate::models::object::bigdecimal_serde")]
    pub latitude: Option<BigDecimal>,
    #[serde(with = "crate::models::object::bigdecimal_serde")]
    pub longitude: Option<BigDecimal>,
    pub description: Option<String>,
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