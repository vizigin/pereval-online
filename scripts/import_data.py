#!/usr/bin/env python3
import os
import re
from bs4 import BeautifulSoup
from datetime import datetime
import json
from pathlib import Path
import logging
from typing import Dict, List, Optional, Tuple
import glob
import argparse

# Настройка логирования
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('import.log'),
        logging.StreamHandler()
    ]
)

# Новый фиксированный список корневых регионов по названию
ROOT_REGION_NAMES = [
    "Кавказ",
    "Памир и Памиро-Алай",
    "Тянь-Шань",
    "Прибайкалье и Забайкалье",
    "Саяны",
    "Алтай",
    "Джунгарский Алатау",
    "Крым",
    "Дальний Восток",
    "Гималаи",
    "Альпы",
    "Урал",
    "Северо-Запад России",
    "Средняя Сибирь",
    "Тавр",
    "Высокий Атлас",
    "Карпаты",
    "Северо-Восточная Сибирь",
    "Кузнецкий Алатау",
    "Островная Арктика",
    "Восточно-Европейская равнина",
    "Западная Сибирь",
    "Горы Южной Сибири",
    "Тыва",
    "Средняя Азия",
]

def is_root_region_name(name):
    return name in ROOT_REGION_NAMES

# --- Вынесенная функция парсинга высоты ---
def parse_height(text: str) -> Optional[int]:
    if not text:
        return None
    # Clean up the text
    text = re.sub(r'\s+', ' ', text.strip().lower())
    # Убираем пробелы внутри числа (например, '3 923' -> '3923')
    text = re.sub(r'(\d)\s+(\d)', r'\1\2', text)
    # Try different height formats
    patterns = [
        (r'(\d+)\s*м(?:\s*над\s*у\.?\s*м\.?)?', 1),  # 5000 м над у.м.
        (r'высота:\s*(\d+)(?:\s*м)?', 1),  # высота: 5000
        (r'(\d+)\s*метров(?:\s*над\s*у\.?\s*м\.?)?', 1),  # 5000 метров
        (r'(\d+)\s*над\s*у\.?\s*м\.?', 1),  # 5000 над у.м.
        (r'(\d+)\s*м\.?\s*н\.?\s*у\.?\s*м\.?', 1),  # 5000 м.н.у.м.
        (r'(\d+)\s*м\.?\s*над\s*уровнем\s*моря', 1)  # 5000 м над уровнем моря
    ]
    for pattern, multiplier in patterns:
        match = re.search(pattern, text)
        if match:
            try:
                height = int(match.group(1)) * multiplier
                if 0 <= height <= 9000:  # Reasonable height range
                    return height
            except ValueError:
                continue
    return None

class DataImporter:
    MAIN_REGIONS = {
        33, 144, 336, 290, 314, 1, 28, 442, 506, 27, 25, 434, 484, 496, 325, 26, 472, 501, 324, 476, 485, 491, 492, 495, 514
    }

    # Mapping of object types to IDs
    object_types = {
        'Перевал': 1,
        'Вершина': 2,
        'Озеро': 3,
        'Река': 4,
        'Ледник': 5,
        'Пещера': 6,
        'Водопад': 7,
        'Каньон': 8,
        'Ущелье': 9,
        'Долина': 10,
        'Хребет': 11,
        'Массив': 12,
        'Плато': 13,
        'Курган': 14,
        'Скала': 15,
        'Остров': 16,
        'Мыс': 17,
        'Бухта': 18,
        'Залив': 19,
        'Пролив': 20,
        'Архипелаг': 21,
        'Гора': 22,
        'Сопка': 23,
        'Вулкан': 24,
        'Кратер': 25,
        'Кальдера': 26,
        'Гейзер': 27,
        'Источник': 28,
        'Родник': 29,
        'Ручей': 30,
        'Ручей': 31,
        'Ручей': 32,
        'Ручей': 33,
        'Ручей': 34,
        'Ручей': 35,
        'Ручей': 36,
        'Ручей': 37,
        'Ручей': 38,
        'Ручей': 39,
        'Ручей': 40,
        'Ручей': 41,
        'Ручей': 42,
        'Ручей': 43,
        'Ручей': 44,
        'Ручей': 45,
        'Ручей': 46,
        'Ручей': 47,
        'Ручей': 48,
        'Ручей': 49,
        'Ручей': 50
    }
    
    def __init__(self, base_dir: Path):
        """Initialize importer with base directory"""
        self.base_dir = base_dir
        self.regions = {}  # type: Dict[int, Dict]
        self.objects = {}  # type: Dict[int, Dict]
        self.trips = {}  # type: Dict[int, Dict]
        self.photos = []  # type: List[Dict]

    def parse_region(self, html_content, html_path=None):
        """Parse region data from HTML content"""
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Always extract region_id from path
        region_id = None
        if html_path is not None:
            try:
                region_id = int(Path(html_path).parent.name)
            except Exception:
                pass
        if not region_id:
            print(f"Warning: Could not extract region ID")
            return None
        
        # Extract region name
        name_elem = soup.find('h1')
        if not name_elem:
            print(f"Warning: Could not find region name for ID {region_id}")
            return None
            
        name = name_elem.text.strip()
        
        # Extract parent region from breadcrumb
        parent_id = None
        breadcrumb = soup.find('div', class_='breadcrumb')
        if breadcrumb:
            # Find all links in breadcrumb
            links = breadcrumb.find_all('a')
            # Skip the first link (usually "Все районы")
            for link in links[1:]:
                href = link.get('href', '')
                if href.startswith('/region/'):
                    parent_url_match = re.search(r'/region/(\d+)', href)
                    if parent_url_match:
                        parent_id = int(parent_url_match.group(1))
                        # For regions that should have a parent, ensure we found one
                        if region_id not in self.MAIN_REGIONS and not parent_id:
                            print(f"Warning: Could not find parent_id for region {name} (ID: {region_id})")
                        break
        
        # country_code убираем из регионов
        region_data = {
            'id': region_id,
            'name': name,
            'parent_id': parent_id,
            'root_region_id': None  # Will be set after all regions are parsed
        }
        
        print(f"Parsed region: {name} (ID: {region_id}, Parent: {parent_id})")  # Debug output
        return region_data

    def parse_object(self, html_path: Path) -> Optional[Dict]:
        """Parse object data from HTML file."""
        try:
            # Always extract object_id from path
            try:
                object_id = int(html_path.parent.name)
                if object_id <= 0:
                    logging.error(f"Invalid object ID in path: {html_path}")
                    return None
            except ValueError as e:
                logging.error(f"Could not extract object ID from path: {html_path} ({e})")
                return None

            with open(html_path, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f.read(), 'html.parser')

            # --- Извлечение имени объекта ---
            # Основываясь на том, что структура <h1><span class="title-text">...</span></h1> однозначна,
            # и настоящее имя объекта находится *только* в <span class="title-text">.
            object_name = None
            title_span = soup.find('span', class_='title-text')
            
            if title_span and title_span.text: # Проверяем наличие текста перед strip()
                temp_name = title_span.text.strip()
                if temp_name: # Убеждаемся, что очищенный текст не пустой
                    object_name = temp_name
                    logging.info(f"[DEBUG] object_id={object_id} Имя из <span class='title-text'>: '{object_name}'")
                else:
                    logging.warning(f"[DEBUG] object_id={object_id} <span class='title-text'> найден, но его очищенный текст пуст.")
            else:
                logging.warning(f"[DEBUG] object_id={object_id} <span class='title-text'> не найден или не имеет текстового содержимого.")

            # Этот лог покажет имя, которое мы считаем окончательным *до* выполнения промежуточного кода.
            logging.info(f"[DEBUG] object_id={object_id} object_name ПЕРЕД промежуточным кодом: '{object_name}'")
            
            if not object_name:
                logging.error(f"КРИТИЧНО: object_id={object_id} Не удалось извлечь имя объекта из <span class='title-text'>. Пропускаем объект.")
                return None # Пропускаем объект, если имя не найдено

            # Improved object type detection
            type_indicators = {
                1: {  # Pass
                    'keywords': ['перевал', 'пер.', 'перевальный', 'перевальный маршрут'],
                    'patterns': [r'перевал\s+[а-яА-ЯёЁ]+', r'пер\.\s+[а-яА-ЯёЁ]+'],
                    'priority': 1
                },
                2: {  # Peak
                    'keywords': ['вершина', 'г.', 'пик', 'гора', 'верш.'],
                    'patterns': [r'вершина\s+[а-яА-ЯёЁ]+', r'г\.\s+[а-яА-ЯёЁ]+', r'пик\s+[а-яА-ЯёЁ]+'],
                    'priority': 2
                },
                3: {  # Glacier
                    'keywords': ['ледник', 'ледн.', 'ледниковый'],
                    'patterns': [r'ледник\s+[а-яА-ЯёЁ]+', r'ледн\.\s+[а-яА-ЯёЁ]+'],
                    'priority': 3
                },
                4: {  # Infrastructure
                    'keywords': ['приют', 'база', 'лагерь', 'хижина', 'приют'],
                    'patterns': [r'приют\s+[а-яА-ЯёЁ]+', r'база\s+[а-яА-ЯёЁ]+', r'лагерь\s+[а-яА-ЯёЁ]+'],
                    'priority': 4
                },
                5: {  # Nature
                    'keywords': ['озеро', 'река', 'водопад', 'пещера', 'ущелье'],
                    'patterns': [r'озеро\s+[а-яА-ЯёЁ]+', r'река\s+[а-яА-ЯёЁ]+', r'водопад\s+[а-яА-ЯёЁ]+'],
                    'priority': 5
                }
            }

            # Try to determine type using multiple methods
            object_type = None
            type_scores = {type_id: 0 for type_id in type_indicators.keys()}
            
            # Method 1: Check URL path
            url_path = str(html_path).lower()
            for type_id, type_info in type_indicators.items():
                if any(keyword in url_path for keyword in type_info['keywords']):
                    type_scores[type_id] += 2 * type_info['priority']
                for pattern in type_info['patterns']:
                    if re.search(pattern, url_path):
                        type_scores[type_id] += 3 * type_info['priority']

            # Method 2: Check content
            content = soup.get_text().lower()
            for type_id, type_info in type_indicators.items():
                if any(keyword in content for keyword in type_info['keywords']):
                    type_scores[type_id] += type_info['priority']
                for pattern in type_info['patterns']:
                    if re.search(pattern, content):
                        type_scores[type_id] += 2 * type_info['priority']

            # Method 3: Check headers
            headers = [h.text.lower() for h in soup.find_all(['h1', 'h2', 'h3'])]
            for type_id, type_info in type_indicators.items():
                if any(keyword in ' '.join(headers) for keyword in type_info['keywords']):
                    type_scores[type_id] += 2 * type_info['priority']
                for pattern in type_info['patterns']:
                    if re.search(pattern, ' '.join(headers)):
                        type_scores[type_id] += 3 * type_info['priority']

            # Select type with highest score
            if type_scores:
                max_score = max(type_scores.values())
                if max_score > 0:
                    object_type = max(type_scores.items(), key=lambda x: x[1])[0]

            if not object_type:
                logging.warning(f"Could not determine object type for {html_path}, defaulting to pass type")
                object_type = 1  # Default to pass type

            # Improved coordinate parsing
            def parse_coordinates(text: str) -> Tuple[Optional[float], Optional[float]]:
                if not text:
                    return None, None
                
                # Clean up the text
                text = re.sub(r'\s+', ' ', text.strip())
                
                # Try different coordinate formats
                patterns = [
                    # Format: 42°30'00"N 43°30'00"E
                    (r'(\d+)°(\d+)\'(\d+)\"([NS])\s+(\d+)°(\d+)\'(\d+)\"([EW])', lambda m: (
                        float(m.group(1)) + float(m.group(2))/60 + float(m.group(3))/3600,
                        float(m.group(5)) + float(m.group(6))/60 + float(m.group(7))/3600,
                        m.group(4), m.group(9)
                    )),
                    # Format: 42.5000°N 43.5000°E
                    (r'(\d+\.?\d*)°([NS])\s+(\d+\.?\d*)°([EW])', lambda m: (
                        float(m.group(1)), float(m.group(3)), m.group(2), m.group(4)
                    )),
                    # Format: 42.5000, 43.5000
                    (r'(\d+\.?\d*),\s*(\d+\.?\d*)', lambda m: (
                        float(m.group(1)), float(m.group(2)), 'N', 'E'
                    )),
                    # Format: N42.5000 E43.5000
                    (r'([NS])(\d+\.?\d*)\s+([EW])(\d+\.?\d*)', lambda m: (
                        float(m.group(2)), float(m.group(4)), m.group(1), m.group(3)
                    )),
                    # Format: 42°30.000'N 43°30.000'E
                    (r'(\d+)°(\d+\.\d+)\'([NS])\s+(\d+)°(\d+\.\d+)\'([EW])', lambda m: (
                        float(m.group(1)) + float(m.group(2))/60,
                        float(m.group(4)) + float(m.group(5))/60,
                        m.group(3), m.group(6)
                    ))
                ]
                
                for pattern, converter in patterns:
                    match = re.search(pattern, text)
                    if match:
                        try:
                            lat, lon, lat_dir, lon_dir = converter(match)
                            # Apply direction
                            if lat_dir == 'S': lat = -lat
                            if lon_dir == 'W': lon = -lon
                            
                            # Validate coordinates
                            if -90 <= lat <= 90 and -180 <= lon <= 180:
                                return lat, lon
                        except (ValueError, IndexError) as e:
                            logging.warning(f"Error parsing coordinates '{text}': {e}")
                            continue
                
                return None, None

            # Extract coordinates with improved search
            coords_text = None
            # First try dedicated coordinate table
            coords_table = soup.find('table', class_='coords')
            if coords_table:
                coords_text = coords_table.get_text()
            else:
                # Try to find coordinates in text with context
                for p in soup.find_all(['p', 'div']):
                    text = p.get_text()
                    if '°' in text and ('N' in text or 'S' in text or 'E' in text or 'W' in text):
                        # Check if this paragraph is likely to contain coordinates
                        if any(word in text.lower() for word in ['координаты', 'широта', 'долгота', 'местоположение']):
                            coords_text = text
                            break
                        # If no context words found, use the first paragraph with coordinates
                        elif not coords_text:
                            coords_text = text

            lat, lon = parse_coordinates(coords_text) if coords_text else (None, None)
            # Ограничиваем координаты до 5 знаков после запятой
            if lat is not None:
                lat = round(lat, 5)
            if lon is not None:
                lon = round(lon, 5)

            # Extract height with a prioritized search order
            height = None

            # 1. Try specific 'object__params' block first (most reliable)
            params_div = soup.find('div', class_='object__params')
            category = None
            slope_type = None
            if params_div:
                for param in params_div.find_all('div', class_='object__param'):
                    title_span = param.find('span', class_='object__param-title')
                    value_span = param.find('span', class_='object__param-value')
                    if title_span and value_span:
                        title = title_span.get_text(strip=True).lower()
                        value = value_span.get_text(strip=True)
                        if 'высота' in title:
                            h_candidate = parse_height(value)
                            if h_candidate is not None:
                                height = h_candidate
                        if 'категор' in title:
                            # Оставляем только значения 1А, 2Б, 3А, 4Б, 5А, 6Б и т.п. в любом месте строки
                            m = re.search(r'([1-6][АБ])', value.upper())
                            if m:
                                category = m.group(1)
                            else:
                                category = None
                        if 'тип склона' in title:
                            slope_type = value
            
            # 2. If not found in object__params, try 'table.height'
            if height is None:
                height_table = soup.find('table', class_='height')
                if height_table:
                    h_candidate = parse_height(height_table.get_text())
                    if h_candidate is not None:
                        height = h_candidate

            # 3. If still not found, try generic p/div search as a last resort
            if height is None:
                for p_tag in soup.find_all(['p', 'div']):
                    text_content = p_tag.get_text()
                    if 'м' in text_content or 'метров' in text_content or 'высота' in text_content.lower():
                        h_candidate = parse_height(text_content)
                        if h_candidate is not None:
                            height = h_candidate
                            break # Found height in generic search

            # Extract area with improved search
            area = None
            area_table = soup.find('table', class_='area')
            if area_table:
                area = parse_area(area_table.get_text())
            else:
                # Try to find area in text with context
                for p in soup.find_all(['p', 'div']):
                    text = p.get_text()
                    if 'км²' in text or 'кв. км' in text or 'площадь' in text.lower():
                        area = parse_area(text)
                        if area:
                            break

            # Extract description with improved cleaning
            description = None
            desc_div = soup.find('div', class_='description')
            if desc_div:
                # Remove unwanted elements
                for element in desc_div.find_all(['table', 'ul', 'ol', 'script', 'style', 'iframe', 'form']):
                    element.decompose()
                
                # Clean up the text
                description = desc_div.get_text()
                description = re.sub(r'\s+', ' ', description)  # Normalize whitespace
                description = re.sub(r'\n\s*\n', '\n', description)  # Remove multiple newlines
                description = description.strip()
                
                # Remove common boilerplate text
                boilerplate = [
                    r'Последнее обновление:.*$',
                    r'Автор:.*$',
                    r'Источник:.*$',
                    r'©.*$'
                ]
                for pattern in boilerplate:
                    description = re.sub(pattern, '', description, flags=re.MULTILINE)
                
                description = description.strip()
                if not description:
                    description = None

            # Extract region with improved search
            region = None
            region_id = None
            # --- Парсинг страны из блока object__country ---
            country_code = None
            country_full = None
            country_div = soup.find('div', class_='object__country')
            if country_div:
                country_text = country_div.get_text(separator=' ', strip=True)
                # Форматируем: убираем пробелы вокруг запятых
                country_text = re.sub(r'\s*,\s*', ', ', country_text)
                country_full = country_text  # Сохраняем полный текст
                country_name = country_text.split(',')[0].strip()
                country_map = {
                    'Россия': 'RU', 'Russian Federation': 'RU', 'Russia': 'RU',
                    'Казахстан': 'KZ', 'Kazakhstan': 'KZ',
                    'Киргизия': 'KG', 'Кыргызстан': 'KG', 'Kyrgyzstan': 'KG',
                    'Грузия': 'GE', 'Georgia': 'GE',
                    'Таджикистан': 'TJ', 'Tajikistan': 'TJ',
                    'Узбекистан': 'UZ', 'Uzbekistan': 'UZ',
                    'Монголия': 'MN', 'Mongolia': 'MN',
                    'Китай': 'CN', 'China': 'CN',
                    'Абхазия': 'GE', 'Abkhazia': 'GE',
                    'Армения': 'AM', 'Armenia': 'AM',
                    'Турция': 'TR', 'Turkey': 'TR',
                    'Азербайджан': 'AZ', 'Azerbaijan': 'AZ',
                    'Иран': 'IR', 'Iran': 'IR',
                    'Афганистан': 'AF', 'Afghanistan': 'AF',
                    'Пакистан': 'PK', 'Pakistan': 'PK',
                    'Индия': 'IN', 'India': 'IN',
                }
                code = country_map.get(country_name)
                if code:
                    country_code = code
                else:
                    country_code = country_name
            # --- Конец парсинга страны ---
            # Try breadcrumbs first
            breadcrumbs = soup.find('div', class_='breadcrumb')
            if breadcrumbs:
                region_links = [a for a in breadcrumbs.find_all('a') if '/region/' in a.get('href', '')]
                if region_links:
                    region = region_links[-1].text.strip()
                    # Try to find region ID
                    for rid, rdata in self.regions.items():
                        if rdata['name'] == region:
                            region_id = rid
                            break
            # If not found in breadcrumbs, try content
            if not region:
                for p in soup.find_all(['p', 'div']):
                    text = p.get_text().lower()
                    if 'расположен' in text or 'находится' in text:
                        for rid, rdata in self.regions.items():
                            if rdata['name'].lower() in text:
                                region = rdata['name']
                                region_id = rid
                                break
                        if region:
                            break

            if object_id == 1069:
                print(f"DEBUG 1069: region_id={region_id}, region='{region}'")

            # --- Новые поля из HTML ---
            # Источник информации
            info_source = None
            prev_next_div = soup.find('div', class_='object__prev-next')
            if prev_next_div:
                info_source = prev_next_div.get_text(strip=True)
            # Дата обновления
            updated_at = None
            updated_div = soup.find('div', class_='object__updated')
            if updated_div:
                updated_at = updated_div.get_text(strip=True)

            # --- Новые поля ---
            # Альтернативные названия
            alt_names = None
            alt_names_elem = soup.find('div', class_='alt-names')
            if alt_names_elem:
                alt_names = alt_names_elem.get_text(strip=True)
            else:
                # Пробуем искать в тексте
                for p in soup.find_all(['p', 'div']):
                    text = p.get_text().lower()
                    if 'другое название' in text or 'также известен' in text or 'альтернативное название' in text:
                        alt_names = text
                        break

            # Что соединяет (для перевалов)
            connects = None
            if object_type == 1:
                for p in soup.find_all(['p', 'div']):
                    text = p.get_text().lower()
                    if 'соединяет' in text:
                        m = re.search(r'соединяет[:\s]*([\w\d\-, ]+)', text)
                        if m:
                            connects = m.group(1)
                            break

            # Сложность (для перевалов)
            complexity = None
            if object_type == 1:
                for p in soup.find_all(['p', 'div']):
                    text = p.get_text().lower()
                    if 'сложность' in text:
                        m = re.search(r'сложность[:\s]*([\w\d\- ]+)', text)
                        if m:
                            complexity = m.group(1)
                            break

            # Расстояние до границы (ищем по ключевым словам)
            border_distance = None
            for p in soup.find_all(['p', 'div']):
                text = p.get_text().lower()
                if 'граница' in text and ('расстояние' in text or 'до границы' in text):
                    # Ищем формулировки типа 'менее 3.2 км', 'менее 250 м', 'до границы менее 3.2 км'
                    m = re.search(r'менее\s*([\d\.,]+)\s*км', text)
                    if m:
                        try:
                            border_distance = float(m.group(1).replace(',', '.'))
                        except ValueError:
                            pass
                        break
                    m = re.search(r'менее\s*([\d\.,]+)\s*м', text)
                    if m:
                        try:
                            border_distance = float(m.group(1).replace(',', '.')) / 1000.0
                        except ValueError:
                            pass
                        break
                    # Старый вариант (оставляем для совместимости)
                    m = re.search(r'расстояние до границы[:\s]*([\d\.,]+)', text)
                    if m:
                        try:
                            border_distance = float(m.group(1).replace(',', '.'))
                        except ValueError:
                            pass
                        break

            # История ледника (для ледников)
            glacier_history = None
            if object_type == 5:  # Ледник
                for p in soup.find_all(['p', 'div']):
                    text = p.get_text().lower()
                    if 'история' in text and 'ледник' in text:
                        glacier_history = text
                        break

            logging.info(f"[DEBUG] PRE-RESULT object_id={object_id} object_name='{object_name}' category='{category}' slope_type='{slope_type}'")

            # Collect results with validation
            result = {
                'id': object_id,
                'name': object_name,
                'type_id': object_type,
                'region': region,
                'region_id': region_id,
                'country_code': country_code,
                'country_full': country_full,
                'latitude': lat,
                'longitude': lon,
                'height': height,
                'area': area,
                'description': description,
                'is_verified': False,  # Default to False, can be updated later,
                'complexity': complexity,
                'slope_type': slope_type,
                'border_distance': border_distance,
                'alt_names': alt_names,
                'category': category,
                'connects': connects,
                'glacier_history': glacier_history,
                'info_source': info_source,
                'updated_at': updated_at
            }

            # Validate required fields
            if not result['name'] or not result['type_id']:
                logging.error(f"Missing required fields in {html_path}")
                return None

            # Log warnings for missing important data
            if not result['latitude'] or not result['longitude']:
                logging.warning(f"Missing coordinates for {html_path}")
            if not result['height'] and result['type_id'] in [1, 2]:  # Pass or Peak
                logging.warning(f"Missing height for {html_path}")
            if not result['region']:
                logging.warning(f"Missing region for {html_path}")

            logging.info(f"[OBJECT FINAL] id={result['id']} name={result['name']} height={result['height']}")
            if not result['height']:
                logging.warning(f"[DEBUG] HEIGHT NOT FOUND for id={result['id']} name={result['name']} in {html_path}")
            return result

        except Exception as e:
            logging.error(f"Error parsing object {html_path}: {str(e)}")
            return None

    def parse_trip(self, html_path: Path) -> Optional[Dict]:
        """Парсинг информации о походе из HTML файла."""
        try:
            # Always extract trip_id from path
            if isinstance(html_path, str):
                html_path = Path(html_path)
            try:
                trip_id = int(html_path.parent.name)
            except (ValueError, AttributeError) as e:
                logging.error(f"Could not extract trip ID from path {html_path}: {e}")
                return None
            
            with open(html_path, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f.read(), 'html.parser')
            
            # --- Поиск типа похода как строки ---
            trip_type = None
            meta_type = soup.find('meta', attrs={'name': 'trip_type'})
            if meta_type:
                trip_type = meta_type.get('content')
            if not trip_type:
                title = soup.find('title')
                title_text = title.text.lower() if title else ''
                t = title.text.strip() if title else ''
                t_candidate = re.split(r'[-\(]', t)[0].strip() if t else ''
                m = re.search(r'([А-Яа-яA-Za-z\- ]+поход)', t_candidate)
                if m:
                    trip_type = m.group(1).strip()
                else:
                    trip_type = t_candidate
            
            # Получаем категорию сложности (difficulty)
            difficulty = None
            meta_difficulty = soup.find('meta', attrs={'name': 'difficulty'})
            if meta_difficulty:
                difficulty = meta_difficulty.get('content')
            else:
                match = re.search(r'(\d+\s*к\.с\.)', soup.text)
                if match:
                    difficulty = match.group(1)
            
            # Получаем сезон
            season = None
            meta_season = soup.find('meta', attrs={'name': 'season'})
            if meta_season:
                season = meta_season.get('content')
            else:
                match = re.search(r'(январ[ья]|феврал[ья]|март[а]?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|август[а]?|сентябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])\s*\d{4}', soup.text, re.IGNORECASE)
                if match:
                    season = match.group(0)
            
            # Получаем регион
            region_id = None
            meta_region = soup.find('meta', attrs={'name': 'region'})
            region_name = None
            if meta_region:
                region_name = meta_region.get('content')
            else:
                breadcrumb = soup.find('div', class_='breadcrumb')
                if breadcrumb:
                    region_links = [a for a in breadcrumb.find_all('a') if '/region/' in a.get('href', '')]
                    if region_links:
                        region_name = region_links[-1].text.strip()
            if region_name:
                for rid, rdata in self.regions.items():
                    if rdata['name'] == region_name:
                        region_id = rid
                        break
            
            # Получаем автора
            author = None
            meta_author = soup.find('meta', attrs={'name': 'author'})
            if meta_author:
                author = meta_author.get('content')
            if not author:
                # Улучшенная регулярка: ищет Фамилия И.О. или Фамилия И. О.
                author_match = re.search(r'Автор[:\s]+([А-Яа-яЁёA-Za-z\-]+\s[А-ЯЁA-Z]\.[А-ЯЁA-Z]\.|[А-Яа-яЁёA-Za-z\-]+\s[А-ЯЁA-Z]\.)', soup.text)
                if author_match:
                    author = author_match.group(1).strip()
                else:
                    # fallback: ищем "Автор: ..." до конца строки
                    author_match = re.search(r'Автор[:\s]+([^\n\r]+)', soup.text)
                    if author_match:
                        author = author_match.group(1).strip()

            # Получаем город автора
            city = None
            meta_city = soup.find('meta', attrs={'name': 'author_city'})
            if meta_city:
                city = meta_city.get('content')
            if not city:
                # Пытаемся найти город в тексте рядом с автором
                city_match = re.search(r'(?:г\.|город)\s*([А-Яа-яA-Za-z\- ]+)', soup.text)
                if city_match:
                    city = city_match.group(1).strip()
            if not city:
                # Новый способ: ищем div.trip__param > strong: 'Город:' (точное совпадение)
                for param in soup.find_all('div', class_='trip__param'):
                    strong = param.find('strong')
                    debug_text = param.get_text(separator=' ', strip=True)
                    if trip_id == 6422:
                        logging.info(f"[DEBUG][trip_id=6422] trip__param raw: '{debug_text}'")
                        if strong:
                            logging.info(f"[DEBUG][trip_id=6422] strong: '{strong.get_text(strip=True)}'")
                    if strong and strong.get_text(strip=True).lower() == 'город:':
                        # Берём текст после strong
                        strong.extract()
                        text = param.get_text(separator=' ', strip=True)
                        city = text.strip()
                        logging.info(f"[DEBUG][trip_id=6422] Город после extract: '{city}'")
                        break

            # Парсим маршрут
            route = []
            for i, sitem in enumerate(soup.select('.trip__path-sitem')):
                link = sitem.find('a', href=re.compile(r'object/\d+'))
                if link:
                    m = re.search(r'object/(\d+)', link['href'])
                    if m:
                        object_id = int(m.group(1))
                        # Явно проверяем, что object_id есть среди self.objects
                        if object_id not in self.objects:
                            object_id = None
                    else:
                        object_id = None
                    name = link.text.strip()
                else:
                    object_id = None
                    # Удаляем все <i> (иконки с числами) из DOM
                    for tag in sitem.find_all('i'):
                        tag.decompose()
                    name = sitem.get_text(strip=True)
                    # Попробовать найти объект по имени, если это sobject
                    name_norm = name.lower().replace('ё', 'е').strip()
                    # Удаляем тип объекта в начале (оз., пер., р., лед. и т.д.)
                    name_main = re.sub(r'^(оз\.|пер\.|р\.|лед\.|г\.|пик|дол\.|ур\.|пос\.|ст\.|с\.|вдп\.|хр\.|пл\.|влк\.|пл\.|плато|урочище|д\.|б\.|м\.|\s)+', '', name_norm).strip()
                    # Удаляем в конце: (1Б, 3 400 м)2232 или (1Б, 3 400 м) и/или просто id
                    name_main = re.sub(r'\(.*?\)\d{3,6}$', '', name_main).strip()
                    name_main = re.sub(r'\(.*?\)$', '', name_main).strip()
                    name_main = re.sub(r'\d{3,6}$', '', name_main).strip()
                    for obj in self.objects.values():
                        obj_name_norm = obj['name'].lower().replace('ё', 'е').strip()
                        obj_name_main = re.sub(r'^(оз\.|пер\.|р\.|лед\.|г\.|пик|дол\.|ур\.|пос\.|ст\.|с\.|вдп\.|хр\.|пл\.|влк\.|пл\.|плато|урочище|д\.|б\.|м\.|\s)+', '', obj_name_norm).strip()
                        obj_name_main = re.sub(r'\(.*?\)\d{3,6}$', '', obj_name_main).strip()
                        obj_name_main = re.sub(r'\(.*?\)$', '', obj_name_main).strip()
                        obj_name_main = re.sub(r'\d{3,6}$', '', obj_name_main).strip()
                        if name_main == obj_name_main:
                            object_id = obj['id']
                            break
                route.append({'order_num': i, 'object_id': object_id, 'name': name})
            
            # --- Парсим ссылку на tlib ---
            tlib_url = None
            # Ищем любую ссылку на tlib.ru
            for a in soup.find_all('a', href=True):
                href = a['href']
                if 'tlib.ru' in href:
                    if href.startswith('http'):  # уже полная ссылка
                        tlib_url = href
                    else:
                        tlib_url = 'http://' + href.lstrip('/')
                    break

            return {
                'id': trip_id,
                'r_type': trip_type,
                'difficulty': difficulty,
                'season': season,
                'region_id': region_id,
                'author': author,
                'city': city,
                'route': route,
                'tlib_url': tlib_url
            }
        except Exception as e:
            logging.error(f"Error parsing trip {html_path}: {e}")
            return None

    def parse_photo(self, html_content):
        """Parse photo data from HTML content"""
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Extract photo URL
        img_elem = soup.find('img', class_='photo')
        if not img_elem:
            print(f"Warning: Could not find photo image")
            return None
            
        url = img_elem.get('src')
        if not url:
            print(f"Warning: Could not find photo URL")
            return None
        
        # Extract photo title
        title_elem = soup.find('h1')
        if not title_elem:
            print(f"Warning: Could not find photo title")
            return None
            
        title = title_elem.text.strip()
        
        # Extract description
        description_elem = soup.find('div', class_='description')
        description = description_elem.text.strip() if description_elem else None
        
        # Extract object and trip IDs if they exist
        object_id = None
        trip_id = None
        
        # Look for object link
        object_link = soup.find('a', href=re.compile(r'/object/\d+'))
        if object_link:
            object_url_match = re.search(r'/object/(\d+)', object_link['href'])
            if object_url_match:
                object_id = int(object_url_match.group(1))
        
        # Look for trip link
        trip_link = soup.find('a', href=re.compile(r'/trip/\d+'))
        if trip_link:
            trip_url_match = re.search(r'/trip/(\d+)', trip_link['href'])
            if trip_url_match:
                trip_id = int(trip_url_match.group(1))
        
        # Create photo data
        photo_data = {
            'url': url,
            'title': title,
            'description': description,
            'object_id': object_id,
            'trip_id': trip_id
        }
        
        print(f"Parsed photo: {title} (Object: {object_id}, Trip: {trip_id})")  # Debug output
        return photo_data

    def get_root_region_id(self, region_id: Optional[int]) -> Optional[int]:
        """Идём вверх по parent_id, пока не встретим основной регион или пока не закончится цепочка."""
        if not region_id:
            return None
        current_id = region_id
        visited = set()
        while current_id and current_id not in visited:
            visited.add(current_id)
            if current_id in self.MAIN_REGIONS:
                return current_id
            region = self.regions.get(current_id)
            if not region:
                break
            current_id = region.get('parent_id')
        return None

    def parse_regions_from_breadcrumbs(self, directory):
        """Собрать все уникальные регионы и их иерархию из breadcrumbs объектов и походов."""
        region_map = {}  # name -> id
        next_id = 1
        parent_map = {}  # id -> parent_id
        # Сначала объекты
        object_files = glob.glob(os.path.join(directory, 'object', '*', 'index.html'))
        for object_file in object_files:
            with open(object_file, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f.read(), 'html.parser')
            breadcrumbs = soup.find('div', class_='breadcrumb')
            if breadcrumbs:
                parent_id = None
                for a in breadcrumbs.find_all('a'):
                    href = a.get('href', '')
                    if '/region/' in href:
                        name = a.text.strip()
                        if name not in region_map:
                            region_map[name] = next_id
                            self.regions[next_id] = {'id': next_id, 'name': name, 'parent_id': parent_id, 'root_region_id': None}
                            parent_map[next_id] = parent_id
                            parent_id = next_id
                            next_id += 1
                        else:
                            parent_id = region_map[name]
        # Теперь походы
        trip_files = glob.glob(os.path.join(directory, 'trip', '*', 'index.html'))
        for trip_file in trip_files:
            with open(trip_file, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f.read(), 'html.parser')
            breadcrumbs = soup.find('div', class_='breadcrumb')
            if breadcrumbs:
                parent_id = None
                for a in breadcrumbs.find_all('a'):
                    href = a.get('href', '')
                    if '/region/' in href:
                        name = a.text.strip()
                        if name not in region_map:
                            region_map[name] = next_id
                            self.regions[next_id] = {'id': next_id, 'name': name, 'parent_id': parent_id, 'root_region_id': None}
                            parent_map[next_id] = parent_id
                            parent_id = next_id
                            next_id += 1
                        else:
                            parent_id = region_map[name]

    def scan_directory(self, directory):
        print(f"Scanning directory: {directory}")  # Debug output
        # Удаляем парсинг regions
        # Сначала собираем регионы из breadcrumbs
        self.parse_regions_from_breadcrumbs(directory)
        print(f"Parsed {len(self.regions)} regions from breadcrumbs")
        # Далее всё как раньше: объекты, trips, фото
        object_files = glob.glob(os.path.join(directory, 'object', '*', 'index.html'))
        print(f"Found {len(object_files)} object files")  # Debug output
        object_ids = []
        for object_file in object_files:
            print(f"Processing object file: {object_file}")  # Debug output
            object_path = Path(object_file)
            object_data = self.parse_object(object_path)
            if object_data:
                object_ids.append(object_data['id'])
                if object_data['id'] == 1069:
                    logging.info(f"[OBJECT_STORE_DEBUG] id=1069 name='{object_data['name']}' height={object_data['height']} from='{object_path}' (before store)")
                if object_data['id'] in self.objects:
                    logging.info(f"[OBJECT_OVERWRITE_DEBUG] id={object_data['id']} name={object_data['name']} height={object_data['height']} from='{object_path}' (overwriting existing object)")
                self.objects[object_data['id']] = object_data
                print(f"Added object: {object_data['name']} (ID: {object_data['id']})")  # Debug output
        print(f"Imported object IDs: {object_ids}")  # Debug output
        # Process trips
        trip_files = glob.glob(os.path.join(directory, 'trip', '*', 'index.html'))
        print(f"Found {len(trip_files)} trip files")  # Debug output
        for trip_file in trip_files:
            print(f"Processing trip file: {trip_file}")  # Debug output
            with open(trip_file, 'r', encoding='utf-8') as f:
                trip_data = self.parse_trip(trip_file)
                if trip_data:
                    self.trips[trip_data['id']] = trip_data
                    print(f"Added trip: {trip_data['id']}")  # Debug output
        # Process photos
        photo_files = glob.glob(os.path.join(directory, 'photo', '*', 'index.html'))
        print(f"Found {len(photo_files)} photo files")  # Debug output
        for photo_file in photo_files:
            print(f"Processing photo file: {photo_file}")  # Debug output
            with open(photo_file, 'r', encoding='utf-8') as f:
                photo_data = self.parse_photo(f.read())
                if photo_data:
                    self.photos.append(photo_data)
                    print(f"Added photo: {photo_data['title']}")  # Debug output

    def sql_value(self, val):
        """Безопасное преобразование значения для SQL."""
        if val is None or val == 'None' or val == 'none' or val == '':
            return 'NULL'
        if isinstance(val, str):
            # Escape single quotes and backslashes
            val = val.replace('\\', '\\\\').replace("'", "''")
            return f"'{val}'"
        if isinstance(val, (int, float)):
            return str(val)
        if isinstance(val, datetime):
            return f"'{val.isoformat()}'"
        return 'NULL'  # Default to NULL for unknown types

    def generate_sql(self):
        """Generate SQL statements for all parsed data"""
        sql = []
        
        # First, insert all regions with NULL parent_id and root_region_id
        for region in self.regions.values():
            sql.append(f"""INSERT INTO regions (id, name, parent_id, root_region_id)
                VALUES ({region['id']}, {self.sql_value(region['name'])}, NULL, NULL);""")
            print(f"Generated initial SQL for region: {region['name']}")  # Debug output
        
        # Then update parent relationships in a separate transaction
        sql.append("\n-- Update parent relationships")
        for region in self.regions.values():
            if region.get('parent_id'):
                sql.append(f"""UPDATE regions 
                    SET parent_id = {region['parent_id']},
                        root_region_id = (
                            WITH RECURSIVE region_hierarchy AS (
                                SELECT id, parent_id, id as root_id
                                FROM regions
                                WHERE id = {region['parent_id']}
                                UNION ALL
                                SELECT r.id, r.parent_id, rh.root_id
                                FROM regions r
                                JOIN region_hierarchy rh ON r.id = rh.parent_id
                            )
                            SELECT root_id FROM region_hierarchy 
                            WHERE parent_id IS NULL
                            LIMIT 1
                        )
                    WHERE id = {region['id']};""")
                print(f"Generated update SQL for region: {region['name']} (parent: {region['parent_id']})")  # Debug output
        
        # Add objects
        for obj in self.objects.values():
            type_str = self.object_types.get(obj['type_id'], None)
            logging.info(f"[SQL GENERATE] id={obj['id']} name={obj['name']} height={obj.get('height')}")
            sql.append(f"""INSERT INTO objects (id, name, type, region_id, country_code, country_full, parent_id, height, \
                latitude, longitude, description, border_distance, info_source, updated_at, category, slope_type)
                VALUES ({obj['id']}, {self.sql_value(obj['name'])}, {self.sql_value(type_str)}, {self.sql_value(obj['region_id'])}, {self.sql_value(obj.get('country_code'))}, {self.sql_value(obj.get('country_full'))}, \
                {self.sql_value(obj.get('parent_id'))}, {self.sql_value(obj.get('height'))}, \
                {self.sql_value(obj.get('latitude'))}, {self.sql_value(obj.get('longitude'))}, \
                {self.sql_value(obj.get('description'))}, {self.sql_value(obj.get('border_distance'))}, \
                {self.sql_value(obj.get('info_source'))}, {self.sql_value(obj.get('updated_at'))},
                {self.sql_value(obj.get('category'))}, {self.sql_value(obj.get('slope_type'))});""")
            print(f"Generated SQL for object: {obj['name']}")  # Debug output
        
        # Add trips
        for trip in self.trips.values():
            type_str = trip['r_type']
            sql.append(f"""INSERT INTO trips (id, type, region_id, difficulty, season, author, city, tlib_url)
                VALUES ({trip['id']}, {self.sql_value(type_str)}, {self.sql_value(trip['region_id'])}, 
                {self.sql_value(trip.get('difficulty'))}, {self.sql_value(trip.get('season'))}, {self.sql_value(trip.get('author'))}, {self.sql_value(trip.get('city'))}, {self.sql_value(trip.get('tlib_url'))});""")
            print(f"Generated SQL for trip: {trip['id']}")  # Debug output
            # Добавляем маршрут
            for point in trip.get('route', []):
                sql.append(f"INSERT INTO trip_route (trip_id, order_num, object_id, name) VALUES ({trip['id']}, {point['order_num']}, {point['object_id'] if point['object_id'] is not None else 'NULL'}, {self.sql_value(point['name'])});")
                print(f"Generated SQL for trip_route: trip_id={trip['id']} order={point['order_num']} name={point['name']}")
        
        # Add photos
        for photo in self.photos:
            sql.append(f"""INSERT INTO photos (url, title, description, object_id, trip_id, taken_at)
                VALUES ({self.sql_value(photo['url'])}, {self.sql_value(photo['title'])}, 
                {self.sql_value(photo.get('description'))}, {self.sql_value(photo.get('object_id'))}, 
                {self.sql_value(photo.get('trip_id'))}, {self.sql_value(datetime.now().isoformat())});""")
            print(f"Generated SQL for photo: {photo['title']}")  # Debug output
        
        return '\n'.join(sql)

def main():
    parser = argparse.ArgumentParser(description='Import data from HTML files into PostgreSQL database')
    parser.add_argument('--dir', type=str, required=True, help='Base directory containing HTML files')
    args = parser.parse_args()
    
    base_dir = Path(args.dir)
    if not base_dir.exists():
        print(f"Error: Directory {base_dir} does not exist")
        exit(1)
    
    # Create importer and scan directory
    importer = DataImporter(base_dir)
    importer.scan_directory(str(base_dir))
    
    # Generate SQL
    sql = importer.generate_sql()
    
    # Write SQL to file
    output_file = Path('backend/migrations/002_import_data.sql')
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(sql)
    
    print(f"Generated SQL file: {output_file}")
    print(f"Imported {len(importer.regions)} regions")
    print(f"Imported {len(importer.objects)} objects")
    print(f"Imported {len(importer.trips)} trips")
    print(f"Imported {len(importer.photos)} photos")

if __name__ == '__main__':
    main() 