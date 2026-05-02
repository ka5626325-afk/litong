import json

with open('data/songle-relay/products.json', 'r', encoding='utf8') as f:
    data = json.load(f)

print('Categories:', len(data['categories']))
for c in data['categories']:
    print(f"  - {c['name']}: {len(c.get('products', []))} products")
