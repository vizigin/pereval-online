import os
import re
from bs4 import BeautifulSoup

BASE_DIRS = [
    os.path.join(os.path.dirname(__file__), '../../_recepient/pereval.online/object'),
    os.path.join(os.path.dirname(__file__), '../../_recepient/pereval.online/trip'),
]
regions = set()

def parse_breadcrumbs(base_dir):
    for obj_id in os.listdir(base_dir):
        obj_path = os.path.join(base_dir, obj_id, 'index.html')
        if not os.path.isfile(obj_path):
            continue
        try:
            with open(obj_path, encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')
                breadcrumb = soup.find('div', class_='breadcrumb')
                if breadcrumb:
                    links = breadcrumb.find_all('a')
                    for link in links:
                        href = link.get('href', '')
                        m = re.search(r'/region/(\d+)', href)
                        if m:
                            region_id = int(m.group(1))
                            region_name = link.get_text(strip=True)
                            regions.add((region_id, region_name))
        except Exception as e:
            print(f'Ошибка в {obj_path}: {e}')

for base_dir in BASE_DIRS:
    parse_breadcrumbs(base_dir)

print('Уникальные регионы (id, название):')
for region_id, region_name in sorted(regions):
    print(f'{region_id}: {region_name}')
print(f'Всего уникальных регионов: {len(regions)}') 