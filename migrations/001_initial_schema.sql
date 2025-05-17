-- Create regions table
CREATE TABLE regions (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    parent_id INTEGER,
    country_code TEXT,
    root_region_id INTEGER,
    FOREIGN KEY (parent_id) REFERENCES regions(id),
    FOREIGN KEY (root_region_id) REFERENCES regions(id)
);

-- Create objects table
CREATE TABLE objects (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    region_id INTEGER NOT NULL,
    country_code TEXT,
    country_full TEXT,
    parent_id INTEGER,
    height INTEGER,
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    description TEXT,
    area DECIMAL(9,3),
    complexity TEXT,
    slope_type TEXT,
    border_distance DECIMAL(9,3),
    alt_names TEXT,
    category TEXT,
    connects TEXT,
    glacier_history TEXT,
    FOREIGN KEY (region_id) REFERENCES regions(id),
    FOREIGN KEY (parent_id) REFERENCES objects(id)
);

-- Create trips table
CREATE TABLE trips (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    region_id INTEGER,
    start_date DATE,
    end_date DATE,
    description TEXT,
    FOREIGN KEY (region_id) REFERENCES regions(id)
);

-- Create photos table
CREATE TABLE photos (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    url TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    object_id INTEGER,
    trip_id INTEGER,
    taken_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (object_id) REFERENCES objects(id),
    FOREIGN KEY (trip_id) REFERENCES trips(id)
);

-- Create indexes for better query performance
CREATE INDEX idx_regions_parent_id ON regions(parent_id);
CREATE INDEX idx_regions_root_region_id ON regions(root_region_id);
CREATE INDEX idx_objects_region_id ON objects(region_id);
CREATE INDEX idx_objects_parent_id ON objects(parent_id);
CREATE INDEX idx_objects_type ON objects(type);
CREATE INDEX idx_objects_coordinates ON objects(latitude, longitude);
CREATE INDEX idx_trips_region_id ON trips(region_id);
CREATE INDEX idx_trips_type ON trips(type);
CREATE INDEX idx_trips_dates ON trips(start_date, end_date);
CREATE INDEX idx_photos_object_id ON photos(object_id);
CREATE INDEX idx_photos_trip_id ON photos(trip_id);
CREATE INDEX idx_photos_taken_at ON photos(taken_at);
