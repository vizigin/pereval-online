use actix_web::{web, HttpResponse, Responder};
use crate::db::repository::ObjectRepository;
use crate::models::{Object, CreateObject, UpdateObject, SearchParams};
use serde_json::json;

pub async fn search(
    repo: web::Data<ObjectRepository>,
    params: web::Query<SearchParams>,
) -> impl Responder {
    let params_inner = params.clone().into_inner();
    match repo.search(params_inner).await {
        Ok((objects, total)) => {
            HttpResponse::Ok().json(json!({
                "data": objects,
                "pagination": {
                    "total": total,
                    "page": params.page.unwrap_or(1),
                    "limit": params.limit.unwrap_or(10)
                }
            }))
        }
        Err(e) => {
            log::error!("Error searching objects: {}", e);
            HttpResponse::InternalServerError().json(json!({
                "error": "Failed to search objects"
            }))
        }
    }
}

pub async fn create(
    repo: web::Data<ObjectRepository>,
    object: web::Json<CreateObject>,
) -> impl Responder {
    match repo.create(object.into_inner()).await {
        Ok(object) => HttpResponse::Created().json(object),
        Err(e) => {
            log::error!("Error creating object: {}", e);
            HttpResponse::InternalServerError().json(json!({
                "error": "Failed to create object"
            }))
        }
    }
}

pub async fn update(
    repo: web::Data<ObjectRepository>,
    id: web::Path<i32>,
    object: web::Json<UpdateObject>,
) -> impl Responder {
    match repo.update(*id, object.into_inner()).await {
        Ok(Some(object)) => HttpResponse::Ok().json(object),
        Ok(None) => HttpResponse::NotFound().json(json!({
            "error": "Object not found"
        })),
        Err(e) => {
            log::error!("Error updating object: {}", e);
            HttpResponse::InternalServerError().json(json!({
                "error": "Failed to update object"
            }))
        }
    }
}

pub async fn delete(
    repo: web::Data<ObjectRepository>,
    id: web::Path<i32>,
) -> impl Responder {
    match repo.delete(*id).await {
        Ok(true) => HttpResponse::NoContent().finish(),
        Ok(false) => HttpResponse::NotFound().json(json!({
            "error": "Object not found"
        })),
        Err(e) => {
            log::error!("Error deleting object: {}", e);
            HttpResponse::InternalServerError().json(json!({
                "error": "Failed to delete object"
            }))
        }
    }
} 