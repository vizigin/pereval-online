use serde::Deserialize;
use std::env;

#[derive(Debug, Deserialize)]
pub struct Config {
    pub database_url: String,
    pub server_host: String,
    pub server_port: u16,
    pub jwt_secret: String,
}

impl Config {
    pub fn from_env() -> Result<Self, env::VarError> {
        Ok(Config {
            database_url: env::var("DATABASE_URL")?,
            server_host: env::var("SERVER_HOST").unwrap_or_else(|_| "127.0.0.1".to_string()),
            server_port: env::var("SERVER_PORT")
                .unwrap_or_else(|_| "8080".to_string())
                .parse()
                .unwrap_or(8080),
            jwt_secret: env::var("JWT_SECRET")?,
        })
    }
}

impl Default for Config {
    fn default() -> Self {
        Self {
            database_url: "postgres://postgres:postgres@localhost:5432/pereval".to_string(),
            server_host: "127.0.0.1".to_string(),
            server_port: 8080,
            jwt_secret: "your-secret-key".to_string(),
        }
    }
} 