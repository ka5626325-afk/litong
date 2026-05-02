import json

# Check products.json
with open('data/injoinic/products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

print("=== Injoinic Products ===")
print(f"Categories: {len(products['categories'])}")
for cat in products['categories']:
    print(f"  - {cat['name']}: {len(cat.get('products', []))} products")

# Check solutions.json
with open('data/injoinic/solutions.json', 'r', encoding='utf-8') as f:
    solutions = json.load(f)

print("\n=== Injoinic Solutions ===")
print(f"Solutions: {len(solutions.get('solutions', []))}")
for sol in solutions.get('solutions', []):
    print(f"  - {sol['title']}")

# Check support.json
with open('data/injoinic/support.json', 'r', encoding='utf-8') as f:
    support = json.load(f)

print("\n=== Injoinic Support ===")
print(f"Articles: {len(support.get('articles', []))}")
for art in support.get('articles', []):
    print(f"  - {art['title']}")
