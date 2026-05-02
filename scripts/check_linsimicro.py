import json

# Check products
with open('data/linsimicro/products.json', 'r', encoding='utf8') as f:
    data = json.load(f)

print('=== Linsimicro Products ===')
print('Categories:', len(data['categories']))
for cat in data['categories']:
    print(f"  - {cat['name']}: {len(cat.get('products', []))} products")
