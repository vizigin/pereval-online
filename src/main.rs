mod config;
mod db;
mod error;
mod handlers;
mod models;

use actix_web::{web, App, HttpServer, HttpResponse, Responder};
use actix_web::middleware::Logger;
use actix_files as files;
use dotenv::dotenv;
use std::io;

async fn index() -> impl Responder {
    HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(include_str!("../static/index.html"))
}

#[actix_web::main]
async fn main() -> io::Result<()> {
    dotenv().ok();
    env_logger::init();

    let config = config::Config::from_env().expect("Failed to load configuration");
    let pool = db::create_pool(&config.database_url)
        .await
        .expect("Failed to create database pool");

    let repository = web::Data::new(db::repository::ObjectRepository::new(pool));

    println!("Server running at http://{}:{}", config.host, config.port);

    HttpServer::new(move || {
        App::new()
            .wrap(Logger::default())
            .app_data(repository.clone())
            // Главная страница
            .service(web::resource("/").to(index))
            // Статические файлы
            .service(files::Files::new("/static", "static").show_files_listing())
            // API endpoints
            .service(
                web::scope("/api")
                    .service(
                        web::resource("/objects")
                            .route(web::get().to(handlers::search_objects))
                            .route(web::post().to(handlers::create_object)),
                    )
                    .service(
                        web::resource("/objects/{id}")
                            .route(web::put().to(handlers::update_object))
                            .route(web::delete().to(handlers::delete_object)),
                    )
                    .service(web::resource("/region/list").route(web::get().to(handlers::get_regions))),
            )
    })
    .bind((config.host, config.port))?
    .run()
    .await
}
