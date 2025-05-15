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
    
    # Mapping of trip types to IDs
    trip_types = {
        'Пеший поход': 1,
        'Горный поход': 2,
        'Водный поход': 3,
        'Велосипедный поход': 4,
        'Лыжный поход': 5,
        'Комбинированный поход': 6,
        'Экспедиция': 7,
        'Восхождение': 8,
        'Спуск': 9,
        'Траверс': 10,
        'Радиальный выход': 11,
        'Экскурсия': 12,
        'Прогулка': 13,
        'Пробежка': 14,
        'Пробежка': 15,
        'Пробежка': 16,
        'Пробежка': 17,
        'Пробежка': 18,
        'Пробежка': 19,
        'Пробежка': 20,
        'Пробежка': 21,
        'Пробежка': 22,
        'Пробежка': 23,
        'Пробежка': 24,
        'Пробежка': 25,
        'Пробежка': 26,
        'Пробежка': 27,
        'Пробежка': 28,
        'Пробежка': 29,
        'Пробежка': 30,
        'Пробежка': 31,
        'Пробежка': 32,
        'Пробежка': 33,
        'Пробежка': 34,
        'Пробежка': 35,
        'Пробежка': 36,
        'Пробежка': 37,
        'Пробежка': 38,
        'Пробежка': 39,
        'Пробежка': 40,
        'Пробежка': 41,
        'Пробежка': 42,
        'Пробежка': 43,
        'Пробежка': 44,
        'Пробежка': 45,
        'Пробежка': 46,
        'Пробежка': 47,
        'Пробежка': 48,
        'Пробежка': 49,
        'Пробежка': 50
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
        
        # Extract country code
        country_elem = soup.find('div', class_='country')
        country_code = None
        if country_elem:
            country_code = country_elem.text.strip()
        
        # Create region data
        region_data = {
            'id': region_id,
            'name': name,
            'parent_id': parent_id,
            'country_code': country_code,
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

            # Extract title with improved validation
            title = None
            title_elem = soup.find('h1')
            if title_elem:
                title = title_elem.text.strip()
                # Remove common prefixes/suffixes that might be in the title
                title = re.sub(r'^(Перевал|Вершина|Ледник|Приют|База|Лагерь|Хижина|Озеро|Река|Водопад|Пещера)\s+', '', title)
                title = re.sub(r'\s*-\s*[^-]+$', '', title)  # Remove everything after last dash
            if not title:
                logging.error(f"Missing or invalid title in {html_path}")
                return None

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

            # Improved height parsing
            def parse_height(text: str) -> Optional[int]:
                if not text:
                    return None
                
                # Clean up the text
                text = re.sub(r'\s+', ' ', text.strip().lower())
                
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

            # Improved area parsing
            def parse_area(text: str) -> Optional[float]:
                if not text:
                    return None
                
                # Clean up the text
                text = re.sub(r'\s+', ' ', text.strip().lower())
                
                # Try different area formats
                patterns = [
                    (r'(\d+\.?\d*)\s*км²', 1.0),  # 10.5 км²
                    (r'(\d+\.?\d*)\s*кв\.?\s*км', 1.0),  # 10.5 кв. км
                    (r'площадь:\s*(\d+\.?\d*)(?:\s*км²)?', 1.0),  # площадь: 10.5
                    (r'(\d+\.?\d*)\s*квадратных\s*километров', 1.0),  # 10.5 квадратных километров
                    (r'(\d+\.?\d*)\s*га', 0.01)  # 10.5 га (convert to km²)
                ]
                
                for pattern, multiplier in patterns:
                    match = re.search(pattern, text)
                    if match:
                        try:
                            area = float(match.group(1)) * multiplier
                            if 0 <= area <= 10000:  # Reasonable area range
                                return area
                        except ValueError:
                            continue
                
                return None

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

            # Extract height with improved search
            height = None
            height_table = soup.find('table', class_='height')
            if height_table:
                height = parse_height(height_table.get_text())
            else:
                # Try to find height in text with context
                for p in soup.find_all(['p', 'div']):
                    text = p.get_text()
                    if 'м' in text or 'метров' in text or 'высота' in text.lower():
                        height = parse_height(text)
                        if height:
                            break

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
            country_code = None
            # Try breadcrumbs first
            breadcrumbs = soup.find('div', class_='breadcrumb')
            if breadcrumbs:
                region_links = breadcrumbs.find_all('a')
                if len(region_links) >= 2:  # Usually second link is region
                    region = region_links[1].text.strip()
                    # Try to find region ID and country code
                    for rid, rdata in self.regions.items():
                        if rdata['name'] == region:
                            region_id = rid
                            country_code = rdata.get('country_code')
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
                                country_code = rdata.get('country_code')
                                break
                        if region:
                            break

            # Try to get country code from meta tags if not found from region
            if not country_code:
                meta_country = soup.find('meta', attrs={'name': 'country'})
                if meta_country:
                    country_code = meta_country.get('content')

            # Collect results with validation
            result = {
                'id': object_id,
                'name': title,
                'type_id': object_type,
                'region': region,
                'region_id': region_id,
                'country_code': country_code,
                'latitude': lat,
                'longitude': lon,
                'height': height,
                'area': area,
                'description': description,
                'is_verified': False,  # Default to False, can be updated later
                'complexity': None,
                'slope_type': None,
                'border_distance': None
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
            
            # Получаем название похода
            title = soup.find('title')
            if not title:
                return None
            
            name = title.text.split(' - ')[0].strip()
            
            # Определяем тип похода
            type_id = None
            meta_type = soup.find('meta', attrs={'name': 'trip_type'})
            if meta_type:
                type_name = meta_type.get('content')
                type_id = self.trip_types.get(type_name)
            
            # Если не найдено явно, пробуем по ключевым словам в title/description
            if type_id is None:
                # Словарь ключевых слов и соответствующих type_id
                type_keywords = [
                    (['горный поход', 'горный'], 1),
                    (['пеший поход', 'пеший'], 2),
                    (['лыжный поход', 'лыжный'], 3),
                    (['велосипедный поход', 'велосипедный'], 4),
                    (['горно-пеший поход', 'горно-пеший'], 6),
                ]
                # Проверяем title
                title_text = title.text.lower() if title else ''
                for keywords, tid in type_keywords:
                    if any(kw in title_text for kw in keywords):
                        type_id = tid
                        break
                # Если не найдено, проверяем meta description
                if type_id is None:
                    meta_desc = soup.find('meta', attrs={'name': 'description'})
                    desc_text = meta_desc.get('content', '').lower() if meta_desc else ''
                    for keywords, tid in type_keywords:
                        if any(kw in desc_text for kw in keywords):
                            type_id = tid
                            break
            
            # Получаем категорию
            category = None
            meta_category = soup.find('meta', attrs={'name': 'category'})
            if meta_category:
                category = int(meta_category.get('content'))
            
            # Получаем регион
            region_id = None
            meta_region = soup.find('meta', attrs={'name': 'region'})
            if meta_region:
                region_name = meta_region.get('content')
                # Найдем ID региона по имени
                for rid, rdata in self.regions.items():
                    if rdata['name'] == region_name:
                        region_id = rid
                        break
            
            # Получаем год и месяц
            year = None
            month = None
            meta_date = soup.find('meta', attrs={'name': 'date'})
            if meta_date:
                date_str = meta_date.get('content')
                try:
                    date = datetime.strptime(date_str, '%Y-%m')
                    year = date.year
                    month = date.month - 1  # Преобразуем в 0-based месяц
                except ValueError:
                    pass
            
            # Получаем автора
            author = None
            meta_author = soup.find('meta', attrs={'name': 'author'})
            if meta_author:
                author = meta_author.get('content')
            
            # Получаем город автора
            author_city = None
            meta_city = soup.find('meta', attrs={'name': 'author_city'})
            if meta_city:
                author_city = meta_city.get('content')
            
            # Получаем содержание
            content = None
            article = soup.find('article')
            if article:
                content = article.get_text(strip=True)
            
            return {
                'id': trip_id,
                'title': name,
                'type_id': type_id,
                'category': category,
                'region_id': region_id,
                'year': year,
                'month': month,
                'author': author,
                'author_city': author_city,
                'content': content
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

    def scan_directory(self, directory):
        """Scan directory for HTML files and parse them"""
        print(f"Scanning directory: {directory}")  # Debug output
        
        # Process regions
        region_files = glob.glob(os.path.join(directory, 'region', '*', 'index.html'))
        print(f"Found {len(region_files)} region files")  # Debug output
        
        for region_file in region_files:
            print(f"Processing region file: {region_file}")  # Debug output
            with open(region_file, 'r', encoding='utf-8') as f:
                region_data = self.parse_region(f.read(), region_file)
                if region_data:
                    self.regions[region_data['id']] = region_data
                    print(f"Added region: {region_data['name']} (ID: {region_data['id']})")  # Debug output
        
        # Process objects
        object_files = glob.glob(os.path.join(directory, 'object', '*', 'index.html'))
        print(f"Found {len(object_files)} object files")  # Debug output
        
        # Limit to first 50 objects
        object_files = object_files[:50]
        print(f"Processing first 50 object files")  # Debug output
        
        for object_file in object_files:
            print(f"Processing object file: {object_file}")  # Debug output
            # Convert string path to Path object
            object_path = Path(object_file)
            object_data = self.parse_object(object_path)
            if object_data:
                self.objects[object_data['id']] = object_data
                print(f"Added object: {object_data['name']} (ID: {object_data['id']})")  # Debug output
        
        # Process trips
        trip_files = glob.glob(os.path.join(directory, 'trip', '*', 'index.html'))
        print(f"Found {len(trip_files)} trip files")  # Debug output
        
        # Limit to first 50 trips
        trip_files = trip_files[:50]
        print(f"Processing first 50 trip files")  # Debug output
        
        for trip_file in trip_files:
            print(f"Processing trip file: {trip_file}")  # Debug output
            with open(trip_file, 'r', encoding='utf-8') as f:
                trip_data = self.parse_trip(trip_file)
                if trip_data:
                    self.trips[trip_data['id']] = trip_data
                    print(f"Added trip: {trip_data['title']} (ID: {trip_data['id']})")  # Debug output
        
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
        
        # Обратные маппинги для ENUM
        object_type_reverse = {v: k for k, v in self.object_types.items()}
        trip_type_reverse = {v: k for k, v in self.trip_types.items()}
        
        # First, insert all regions with NULL parent_id and root_region_id
        for region in self.regions.values():
            sql.append(f"""INSERT INTO regions (id, name, parent_id, country_code, root_region_id)
                VALUES ({region['id']}, {self.sql_value(region['name'])}, NULL, 
                {self.sql_value(region['country_code'])}, NULL);""")
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
            type_str = object_type_reverse.get(obj['type_id'], None)
            sql.append(f"""INSERT INTO objects (id, name, type, region_id, parent_id, height, 
                latitude, longitude, description)
                VALUES ({obj['id']}, {self.sql_value(obj['name'])}, {self.sql_value(type_str)}, {self.sql_value(obj['region_id'])}, 
                {self.sql_value(obj.get('parent_id'))}, {self.sql_value(obj.get('height'))}, 
                {self.sql_value(obj.get('latitude'))}, {self.sql_value(obj.get('longitude'))}, 
                {self.sql_value(obj.get('description'))});""")
            print(f"Generated SQL for object: {obj['name']}")  # Debug output
        
        # Add trips
        for trip in self.trips.values():
            type_str = trip_type_reverse.get(trip['type_id'], None)
            sql.append(f"""INSERT INTO trips (id, name, type, region_id, start_date, end_date, description)
                VALUES ({trip['id']}, {self.sql_value(trip['title'])}, {self.sql_value(type_str)}, {self.sql_value(trip['region_id'])}, 
                {self.sql_value(trip.get('year'))}, {self.sql_value(trip.get('month'))}, 
                {self.sql_value(trip.get('content'))});""")
            print(f"Generated SQL for trip: {trip['title']}")  # Debug output
        
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
    output_file = Path('migrations/002_import_data.sql')
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(sql)
    
    print(f"Generated SQL file: {output_file}")
    print(f"Imported {len(importer.regions)} regions")
    print(f"Imported {len(importer.objects)} objects")
    print(f"Imported {len(importer.trips)} trips")
    print(f"Imported {len(importer.photos)} photos")

if __name__ == '__main__':
    main() 