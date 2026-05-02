#!/usr/bin/env python3
import json

with open('data/funcience/products.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Find industrial-phy category (correct ID)
for cat in data['categories']:
    if cat['id'] == 'industrial-phy':
        print(f"Found category: {cat['id']}")
        print(f"Current products: {len(cat.get('products', []))}")
        if len(cat.get('products', [])) < 4:
            # Add 2 more products
            new_products = [
                {
                    'partNumber': 'FEP1000',
                    'shortDescription': 'Industrial-grade 10/100Mbps Ethernet PHY with enhanced EMC performance and wide temperature range for harsh environments.',
                    'descriptionParagraphs': [
                        'The FEP1000 is an industrial-grade Ethernet PHY designed for reliable operation in harsh industrial environments.',
                        'This PHY supports 10/100Mbps operation with auto-negotiation and provides robust performance in electrically noisy environments.',
                        'The FEP1000 is ideal for industrial automation equipment and process control systems.'
                    ],
                    'specs': {'Speed': '10/100Mbps', 'Interface': 'MII/RMII', 'Temperature': '-40C to +85C'},
                    'applications': ['Industrial Automation', 'Process Control'],
                    'faqs': [
                        {'id': 'FAQ-PHY-3-1', 'question': 'What is FEP1000?', 'answer': 'Industrial Ethernet PHY.', 'relatedProducts': ['FEP1000']}
                    ],
                    'faeReview': {'content': 'Excellent performance in industrial applications.', 'author': 'FAE Team', 'rating': 4.5},
                    'alternativeParts': [{'partNumber': 'DP83848', 'manufacturer': 'TI', 'comparison': 'Similar specs'}],
                    'companionParts': [{'partNumber': 'FCE1100', 'relationship': 'Companion'}]
                },
                {
                    'partNumber': 'FEP1000-G',
                    'shortDescription': 'Gigabit Ethernet PHY for industrial applications with 10/100/1000Mbps support.',
                    'descriptionParagraphs': [
                        'The FEP1000-G is a gigabit-capable Ethernet PHY for high-bandwidth industrial applications.',
                        'Supports 10/100/1000Mbps operation with auto-negotiation and advanced power management.',
                        'Enables high-speed data acquisition and vision systems.'
                    ],
                    'specs': {'Speed': '10/100/1000Mbps', 'Interface': 'RGMII', 'Temperature': '-40C to +85C'},
                    'applications': ['Vision Systems', 'Data Acquisition'],
                    'faqs': [
                        {'id': 'FAQ-PHY-4-1', 'question': 'What speeds?', 'answer': '10/100/1000Mbps.', 'relatedProducts': ['FEP1000-G']}
                    ],
                    'faeReview': {'content': 'Excellent gigabit performance.', 'author': 'FAE Team', 'rating': 4.5},
                    'alternativeParts': [{'partNumber': 'DP83867', 'manufacturer': 'TI', 'comparison': 'Similar specs'}],
                    'companionParts': [{'partNumber': 'FCE1353', 'relationship': 'Companion'}]
                }
            ]
            if 'products' not in cat:
                cat['products'] = []
            cat['products'].extend(new_products)
            print(f"Added 2 products, now has {len(cat['products'])}")

with open('data/funcience/products.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print('Done!')
