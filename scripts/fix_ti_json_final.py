import json
import re

# Read the file as binary and decode with error handling
with open('data/ti/support.json', 'rb') as f:
    raw_content = f.read()

# Try to decode, replacing invalid characters
try:
    content = raw_content.decode('utf-8', errors='replace')
except:
    content = raw_content.decode('latin-1', errors='replace')

# Remove all control characters except standard whitespace
# Keep: space (32), tab (9), newline (10), carriage return (13)
content_clean = ''.join(char for char in content if ord(char) >= 32 or char in '\t\n\r')

# Try to parse JSON
try:
    data = json.loads(content_clean)
    print(f"Successfully parsed support.json")
    print(f"Articles: {len(data.get('articles', []))}")
    print(f"FAQs: {len(data.get('faqs', []))}")
    
    # Write clean JSON back
    with open('data/ti/support.json', 'w', encoding='utf8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print("Cleaned and saved support.json")
    
except Exception as e:
    print(f"Error parsing JSON: {e}")
    # Find the problematic area
    lines = content_clean.split('\n')
    for i, line in enumerate(lines):
        if i > 190 and i < 210:
            print(f"Line {i+1}: {line[:100]}")
