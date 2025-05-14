-- Seed data for objects table
INSERT INTO objects (name, object_type, region, country, distance_to_border, has_coordinates, has_photos, has_reports) VALUES
    ('Эльбрус', 'гора', 'Кавказ', 'Россия', 20.50, true, true, true),
    ('Казбек', 'гора', 'Кавказ', 'Россия', 15.30, true, true, true),
    ('Дыхтау', 'гора', 'Кавказ', 'Россия', 25.10, true, true, false),
    ('Белуха', 'гора', 'Алтай', 'Россия', 30.00, true, true, true),
    ('Мунку-Сардык', 'гора', 'Саяны', 'Россия', 5.20, true, false, true),
    ('Перевал Донгуз-Орун', 'перевал', 'Кавказ', 'Россия', 12.40, true, true, true),
    ('Перевал Бечо', 'перевал', 'Кавказ', 'Россия', 8.70, true, true, false),
    ('Ледник Безенги', 'ледник', 'Кавказ', 'Россия', 18.90, true, true, true),
    ('Ледник Караугом', 'ледник', 'Кавказ', 'Россия', 22.30, true, false, true),
    ('Приют 11', 'объект инфраструктуры', 'Кавказ', 'Россия', 3.50, true, true, true); 