-- Drop all objects in the database
DO $$ 
DECLARE 
    r RECORD;
BEGIN
    -- Disable triggers temporarily
    SET session_replication_role = 'replica';

    -- Drop all tables, views, materialized views, sequences, functions, and types
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
    END LOOP;

    -- Drop all sequences
    FOR r IN (SELECT sequence_name FROM information_schema.sequences WHERE sequence_schema = 'public') LOOP
        EXECUTE 'DROP SEQUENCE IF EXISTS ' || quote_ident(r.sequence_name) || ' CASCADE';
    END LOOP;

    -- Drop all views
    FOR r IN (SELECT table_name FROM information_schema.views WHERE table_schema = 'public') LOOP
        EXECUTE 'DROP VIEW IF EXISTS ' || quote_ident(r.table_name) || ' CASCADE';
    END LOOP;

    -- Drop all materialized views
    FOR r IN (SELECT matviewname FROM pg_matviews WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP MATERIALIZED VIEW IF EXISTS ' || quote_ident(r.matviewname) || ' CASCADE';
    END LOOP;

    -- Drop all functions
    FOR r IN (SELECT ns.nspname, p.proname, pg_get_function_identity_arguments(p.oid) AS args
              FROM pg_proc p JOIN pg_namespace ns ON p.pronamespace = ns.oid
              WHERE ns.nspname = 'public') LOOP
        EXECUTE 'DROP FUNCTION IF EXISTS ' || quote_ident(r.nspname) || '.' || 
                quote_ident(r.proname) || '(' || r.args || ') CASCADE';
    END LOOP;

    -- Drop all types
    FOR r IN (SELECT typname FROM pg_type t JOIN pg_namespace ns ON t.typnamespace = ns.oid WHERE ns.nspname = 'public') LOOP
        EXECUTE 'DROP TYPE IF EXISTS ' || quote_ident(r.typname) || ' CASCADE';
    END LOOP;

    -- Re-enable triggers
    SET session_replication_role = 'origin';
END $$; 

-- Удаление всех данных с учётом зависимостей
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'trip_route') THEN
        DELETE FROM trip_route;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'photos') THEN
        DELETE FROM photos;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'trips') THEN
        DELETE FROM trips;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'objects') THEN
        DELETE FROM objects;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'regions') THEN
        DELETE FROM regions;
    END IF;
END $$;

-- Альтернативно, если нужно полностью удалить таблицы (DROPs)
DROP TABLE IF EXISTS trip_route CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS trips CASCADE;
DROP TABLE IF EXISTS objects CASCADE;
DROP TABLE IF EXISTS regions CASCADE; 