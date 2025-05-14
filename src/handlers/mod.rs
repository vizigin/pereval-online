use actix_web::{web, HttpResponse, Responder};
use crate::db::repository::ObjectRepository;
use crate::models::{Object, CreateObject, UpdateObject, SearchParams};
use crate::models::search::Region;
use crate::error::AppError;
use serde_json::json;

pub async fn search_objects(
    repo: web::Data<ObjectRepository>,
    params: web::Query<SearchParams>,
) -> impl Responder {
    match repo.search(params.into_inner()).await {
        Ok((objects, total)) => HttpResponse::Ok().json(json!({
            "objects": objects,
            "total": total
        })),
        Err(e) => {
            eprintln!("Error searching objects: {}", e);
            HttpResponse::InternalServerError().finish()
        }
    }
}

pub async fn create_object(
    repo: web::Data<ObjectRepository>,
    object: web::Json<CreateObject>,
) -> impl Responder {
    match repo.create(object.into_inner()).await {
        Ok(object) => HttpResponse::Created().json(object),
        Err(e) => {
            eprintln!("Error creating object: {}", e);
            HttpResponse::InternalServerError().finish()
        }
    }
}

pub async fn update_object(
    repo: web::Data<ObjectRepository>,
    id: web::Path<i32>,
    object: web::Json<UpdateObject>,
) -> impl Responder {
    match repo.update(id.into_inner(), object.into_inner()).await {
        Ok(Some(object)) => HttpResponse::Ok().json(object),
        Ok(None) => HttpResponse::NotFound().finish(),
        Err(e) => {
            eprintln!("Error updating object: {}", e);
            HttpResponse::InternalServerError().finish()
        }
    }
}

pub async fn delete_object(
    repo: web::Data<ObjectRepository>,
    id: web::Path<i32>,
) -> impl Responder {
    match repo.delete(id.into_inner()).await {
        Ok(true) => HttpResponse::NoContent().finish(),
        Ok(false) => HttpResponse::NotFound().finish(),
        Err(e) => {
            eprintln!("Error deleting object: {}", e);
            HttpResponse::InternalServerError().finish()
        }
    }
}

pub async fn get_regions() -> impl Responder {
    let regions = vec![
        Region { id: "1".to_string(), name: "Кавказ".to_string(), country: "Россия".to_string() },
        Region { id: "2".to_string(), name: "Памир и Памиро-Алай".to_string(), country: "Таджикистан".to_string() },
        Region { id: "3".to_string(), name: "Тянь-Шань".to_string(), country: "Киргизия".to_string() },
        Region { id: "4".to_string(), name: "Прибайкалье и Забайкалье".to_string(), country: "Россия".to_string() },
        Region { id: "5".to_string(), name: "Саяны".to_string(), country: "Россия".to_string() },
        Region { id: "6".to_string(), name: "Алтай".to_string(), country: "Россия".to_string() },
        Region { id: "7".to_string(), name: "Джунгарский Алатау".to_string(), country: "Казахстан".to_string() },
        Region { id: "8".to_string(), name: "Крым".to_string(), country: "Россия".to_string() },
        Region { id: "9".to_string(), name: "Дальний Восток".to_string(), country: "Россия".to_string() },
        Region { id: "10".to_string(), name: "Гималаи".to_string(), country: "Непал".to_string() },
        Region { id: "11".to_string(), name: "Альпы".to_string(), country: "Швейцария".to_string() },
        Region { id: "12".to_string(), name: "Урал".to_string(), country: "Россия".to_string() },
        Region { id: "13".to_string(), name: "Северо-Запад России".to_string(), country: "Россия".to_string() },
        Region { id: "14".to_string(), name: "Средняя Сибирь".to_string(), country: "Россия".to_string() },
        Region { id: "15".to_string(), name: "Тавр".to_string(), country: "Турция".to_string() },
        Region { id: "16".to_string(), name: "Высокий Атлас".to_string(), country: "Марокко".to_string() },
        Region { id: "17".to_string(), name: "Карпаты".to_string(), country: "Украина".to_string() },
        Region { id: "18".to_string(), name: "Северо-Восточная Сибирь".to_string(), country: "Россия".to_string() },
        Region { id: "19".to_string(), name: "Кузнецкий Алатау".to_string(), country: "Россия".to_string() },
        Region { id: "20".to_string(), name: "Островная Арктика".to_string(), country: "Россия".to_string() },
        Region { id: "21".to_string(), name: "Восточно-Европейская равнина".to_string(), country: "Россия".to_string() },
        Region { id: "22".to_string(), name: "Западная Сибирь".to_string(), country: "Россия".to_string() },
        Region { id: "23".to_string(), name: "Горы Южной Сибири".to_string(), country: "Россия".to_string() },
        Region { id: "24".to_string(), name: "Тыва".to_string(), country: "Россия".to_string() },
        Region { id: "25".to_string(), name: "Средняя Азия".to_string(), country: "Узбекистан".to_string() },
    ];

    HttpResponse::Ok().json(regions)
} 