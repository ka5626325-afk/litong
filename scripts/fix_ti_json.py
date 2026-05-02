import json
import re

# Read the file
with open('data/ti/support.json', 'r', encoding='utf8') as f:
    content = f.read()

# Remove control characters except for standard whitespace
content_clean = re.sub(r'[^\x20-\x7E\s]', '', content)

# Parse and re-save to ensure valid JSON
try:
    data = json.loads(content_clean)
    print(f"Successfully parsed. Articles: {len(data['articles'])}")
    
    # Save clean JSON
    with open('data/ti/support.json', 'w', encoding='utf8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print("File saved successfully")
except Exception as e:
    print(f"Error: {e}")
