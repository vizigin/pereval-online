# Pereval.online Backend

Бэкенд часть проекта Pereval.online - сервиса для поиска и просмотра информации о перевалах, вершинах и других географических объектах.

## Технологии

- Rust 1.75+
- Actix-web
- PostgreSQL
- SQLx
- Docker (опционально)

## Требования

- Rust (установите через [rustup](https://rustup.rs/))
- PostgreSQL 14+
- SQLx CLI (для миграций)

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/yourusername/pereval-backend.git
cd pereval-backend
```

2. Создайте файл `.env` в корневой директории проекта:
```env
DATABASE_URL=postgres://username:password@localhost:5432/pereval
RUST_LOG=debug
```

3. Установите зависимости и запустите миграции:
```bash
cargo install sqlx-cli
sqlx database create
sqlx migrate run
```

4. Запустите сервер:
```bash
cargo run --release
```

Сервер будет доступен по адресу http://localhost:8080

## API Endpoints

### Поиск объектов
```
GET /api/objects
```

Параметры запроса:
- `name` - поиск по названию
- `object_type` - тип объекта (перевал, вершина, ледник и т.д.)
- `region` - регион
- `country` - страна
- `distance_to_border_min` - минимальное расстояние до границы (км)
- `distance_to_border_max` - максимальное расстояние до границы (км)
- `has_coordinates` - наличие координат
- `has_photos` - наличие фотографий
- `has_reports` - наличие отчетов
- `page` - номер страницы (по умолчанию 1)
- `per_page` - количество объектов на странице (по умолчанию 100)

### Получение объекта по ID
```
GET /api/objects/{id}
```

## Лицензия

MIT 