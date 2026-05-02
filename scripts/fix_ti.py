import json
import re

# Read the support.json file
with open('data/ti/support.json', 'r', encoding='utf8') as f:
    content = f.read()

# Remove control characters except for standard whitespace
content_clean = re.sub(r'[^\x20-\x7E\s]', '', content)

try:
    data = json.loads(content_clean)
    print(f"Loaded successfully. Articles: {len(data['articles'])}")
    
    # Add new article
    new_article = {
        'id': 'ti-design-tools-guide',
        'title': 'TI Design Tools and Resources Guide',
        'slug': 'ti-design-tools-guide',
        'category': 'Design Resources',
        'tags': ['TI tools', 'WEBENCH', 'PSpice', 'design resources'],
        'summary': 'Comprehensive guide to TI design tools including WEBENCH Power Designer and PSpice models.',
        'author': {
            'name': 'Robert Taylor',
            'title': 'Senior Applications Engineer',
            'bio': 'Robert has 18 years of experience with TI products and design tools.'
        },
        'publishDate': '2024-04-01',
        'lastUpdated': '2024-04-01',
        'readTime': '10 min',
        'content': 'TI provides comprehensive design tools to accelerate product development. WEBENCH Power Designer enables quick power supply design. PSpice models allow accurate simulation.',
        'faeInsights': {
            'painPoints': 'Customers often not aware of available design tools',
            'commonMistakes': 'Designing without simulation',
            'keyConsiderations': 'Tool availability, model accuracy',
            'recommendations': 'Use WEBENCH for power designs'
        },
        'customerCases': [],
        'faqs': []
    }
    
    data['articles'].append(new_article)
    
    # Write back
    with open('data/ti/support.json', 'w', encoding='utf8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"Added new article. Total: {len(data['articles'])}")
except Exception as e:
    print(f"Error: {e}")
