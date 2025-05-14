use actix_web::{HttpResponse, ResponseError};
use derive_more::Display;
use thiserror::Error;

#[derive(Debug, Display, Error)]
pub enum AppError {
    #[display(fmt = "Internal server error: {}", _0)]
    InternalServerError(String),

    #[display(fmt = "Not found: {}", _0)]
    NotFound(String),

    #[display(fmt = "Bad request: {}", _0)]
    BadRequest(String),
}

impl ResponseError for AppError {
    fn error_response(&self) -> HttpResponse {
        match self {
            AppError::InternalServerError(_) => {
                HttpResponse::InternalServerError().json("Internal Server Error")
            }
            AppError::NotFound(msg) => HttpResponse::NotFound().json(msg),
            AppError::BadRequest(msg) => HttpResponse::BadRequest().json(msg),
        }
    }
}

impl From<anyhow::Error> for AppError {
    fn from(error: anyhow::Error) -> Self {
        AppError::InternalServerError(error.to_string())
    }
}

impl From<sqlx::Error> for AppError {
    fn from(error: sqlx::Error) -> Self {
        match error {
            sqlx::Error::RowNotFound => AppError::NotFound("Object not found".into()),
            _ => AppError::InternalServerError(error.to_string()),
        }
    }
} 