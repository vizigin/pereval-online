mod config;
mod db;
mod error;
mod handlers;
mod models;

use axum::Router;
use sqlx::postgres::PgPoolOptions;
use std::net::SocketAddr;
use tower_http::trace::TraceLayer;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};
use dotenv;
use tower_http::services::ServeDir;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenv::dotenv().ok();
    // Initialize tracing
    tracing_subscriber::registry()
        .with(tracing_subscriber::EnvFilter::new(
            std::env::var("RUST_LOG").unwrap_or_else(|_| "info".into()),
        ))
        .with(tracing_subscriber::fmt::layer())
        .init();

    // Load configuration
    let config = config::Config::from_env()?;

    // Set up database connection
    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&config.database_url)
        .await?;

    // Run migrations
    // sqlx::migrate!("./migrations")
    //     .run(&pool)
    //     .await?;

    // Build application with routes
    let app = Router::new()
        .merge(handlers::router())
        .nest_service("/css", ServeDir::new("static/css"))
        .nest_service("/js", ServeDir::new("static/js"))
        .nest_service("/img", ServeDir::new("static/img"))
        .nest_service("/fonts", ServeDir::new("static/fonts"))
        .nest_service("/static", ServeDir::new("static"))
        .layer(TraceLayer::new_for_http())
        .with_state(pool);

    // Run server
    let addr = SocketAddr::from(([127, 0, 0, 1], config.server_port));
    tracing::info!("listening on {}", addr);
    let listener = tokio::net::TcpListener::bind(addr).await?;
    axum::serve(listener, app).await?;

    Ok(())
}
