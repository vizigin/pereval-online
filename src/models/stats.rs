use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize)]
pub struct Stats {
    pub peaks: i64,
    pub passes: i64,
    pub infrastructure: i64,
    pub glaciers: i64,
    pub nature: i64,
    pub photos: i64,
    pub reports: i64,
}

impl Stats {
    pub fn new(
        peaks: i64,
        passes: i64,
        infrastructure: i64,
        glaciers: i64,
        nature: i64,
        photos: i64,
        reports: i64,
    ) -> Self {
        Self {
            peaks,
            passes,
            infrastructure,
            glaciers,
            nature,
            photos,
            reports,
        }
    }
}

#[derive(Debug, serde::Serialize)]
pub struct RegionStat {
    pub name: String,
    pub slug: String,
    pub count: i64,
} 