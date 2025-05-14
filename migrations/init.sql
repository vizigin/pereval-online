-- Create database if not exists
CREATE DATABASE pereval;

-- Connect to the database
\c pereval;

-- Create objects table
CREATE TABLE IF NOT EXISTS objects (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    object_type VARCHAR(50) NOT NULL,
    region VARCHAR(100) NOT NULL,
    country VARCHAR(100),
    distance_to_border DECIMAL(10, 2),
    has_coordinates BOOLEAN NOT NULL DEFAULT false,
    has_photos BOOLEAN NOT NULL DEFAULT false,
    has_reports BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create index for search
CREATE INDEX IF NOT EXISTS idx_objects_search ON objects (name, object_type, region, country);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_objects_updated_at
    BEFORE UPDATE ON objects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 