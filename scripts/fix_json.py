import json

# Read and parse the JSON file
with open('data/injoinic/products.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Try to parse as JSON
try:
    data = json.loads(content)
    print("JSON is valid!")
    print(f"Categories: {len(data['categories'])}")
    for cat in data['categories']:
        print(f"  - {cat['name']}: {len(cat.get('products', []))} products")
except Exception as e:
    print(f"Error: {e}")
    # Try to find where JSON ends
    bracket_count = 0
    in_string = False
    escape = False
    for i, c in enumerate(content):
        if escape:
            escape = False
            continue
        if c == '\\':
            escape = True
            continue
        if c == '"' and not in_string:
            in_string = True
            continue
        if c == '"' and in_string:
            in_string = False
            continue
        if not in_string:
            if c == '{' or c == '[':
                bracket_count += 1
            if c == '}' or c == ']':
                bracket_count -= 1
                if bracket_count == 0:
                    print(f"JSON ends at position {i}")
                    print(f"Remaining content: {repr(content[i+1:])}")
                    # Truncate and save
                    fixed_content = content[:i+1]
                    with open('data/injoinic/products.json', 'w', encoding='utf-8') as f:
                        f.write(fixed_content)
                    print("Fixed and saved!")
                    break
