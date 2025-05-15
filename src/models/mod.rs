pub mod region;
pub mod object;
pub mod trip;
pub mod photo;

// Re-export types
pub use region::{Region, CreateRegion, UpdateRegion};
pub use object::{Object, CreateObject, UpdateObject};
pub use trip::{Trip, CreateTrip, UpdateTrip};
pub use photo::{Photo, CreatePhoto, UpdatePhoto}; 