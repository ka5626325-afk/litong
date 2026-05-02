#!/usr/bin/env node
/**
 * 重新生成 Walsin (华新科技) 品牌的英文内容
 * Walsin 是领先的被动元件制造商，生产MLCC、电阻、电感等
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'walsin');

// 确保目录存在
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 重新生成 brand.json
function regenerateBrand() {
  const brandPath = path.join(dataDir, 'brand.json');
  
  const brandData = {
    "name": "walsin",
    "displayName": "Walsin",
    "chineseName": "华新科技",
    "tagline": "Leading Passive Component Manufacturer",
    "description": "Walsin Technology Corporation is a leading global manufacturer of passive electronic components, specializing in MLCC (Multilayer Ceramic Capacitors), chip resistors, RF components, and inductors. With world-class manufacturing facilities and comprehensive product portfolios, Walsin serves diverse markets including automotive, telecommunications, consumer electronics, and industrial applications.",
    "longDescription": "As an authorized Walsin distributor, BeiLuo Electronics provides comprehensive access to Walsin's extensive portfolio of passive components. Walsin Technology Corporation, established in 1992 and headquartered in Taipei, Taiwan, is one of the world's leading manufacturers of passive electronic components. The company specializes in Multilayer Ceramic Capacitors (MLCC), chip resistors, RF components, inductors, and circuit protection devices. Walsin operates state-of-the-art manufacturing facilities across Asia, producing billions of components monthly with exceptional quality and reliability. The company's products are widely used in automotive electronics, 5G telecommunications, smartphones, computers, industrial equipment, and IoT devices. Walsin holds numerous international certifications including IATF 16949 for automotive quality management, demonstrating commitment to excellence. As a strategic partner, BeiLuo Electronics offers technical support, inventory management, and supply chain solutions for Walsin products.",
    "logo": "/assets/brands/walsin/logo.svg",
    "banner": "/assets/brands/walsin/banner.jpg",
    "website": "https://www.walsin.com",
    "founded": 1992,
    "headquarters": "Taipei, Taiwan",
    "employees": "10,000+",
    "revenue": "$500M+",
    "coreProducts": [
      "MLCC (Multilayer Ceramic Capacitors)",
      "Chip Resistors",
      "RF Components",
      "Inductors",
      "Circuit Protection Devices"
    ],
    "industries": [
      "Automotive Electronics",
      "Telecommunications",
      "Consumer Electronics",
      "Industrial Equipment",
      "Medical Devices",
      "IoT Applications"
    ],
    "certifications": [
      "IATF 16949",
      "ISO 9001",
      "ISO 14001",
      "AEC-Q200",
      "UL",
      "RoHS",
      "REACH"
    ],
    "seoTitle": "Walsin Distributor | MLCC, Resistors, RF Components | BeiLuo",
    "seoDescription": "Authorized Walsin distributor offering MLCC, chip resistors, RF components, and inductors. High-quality passive components for automotive, telecom, and industrial applications.",
    "seoKeywords": [
      "Walsin distributor",
      "Walsin MLCC",
      "multilayer ceramic capacitor",
      "chip resistor",
      "RF component",
      "inductor",
      "passive component",
      "AEC-Q200"
    ],
    "faqs": [
      {
        "question": "What are Walsin's main product categories?",
        "answer": "Walsin's main product categories include: 1) MLCC (Multilayer Ceramic Capacitors) - available in various sizes (0201 to 1210 and larger), capacitance values, and voltage ratings, including automotive-grade AEC-Q200 qualified products; 2) Chip Resistors - thin film and thick film resistors with precision tolerances down to 0.1%; 3) RF Components - including antennas, filters, and impedance matching components for wireless applications; 4) Inductors - power inductors and RF inductors for various applications; 5) Circuit Protection Devices - including varistors and transient voltage suppressors. All products are manufactured to international quality standards.",
        "decisionGuide": "Browse our Walsin product categories to find the right passive component for your application requirements.",
        "keywords": ["Walsin products", "MLCC", "chip resistor", "RF component", "inductor"]
      },
      {
        "question": "Does Walsin provide automotive-grade components?",
        "answer": "Yes, Walsin offers a comprehensive range of automotive-grade passive components qualified to AEC-Q200 standards. These include MLCCs, chip resistors, and inductors specifically designed for automotive applications. Automotive-grade components undergo rigorous testing including temperature cycling, mechanical shock, vibration, and humidity resistance to ensure reliability in harsh automotive environments. Walsin's automotive products are widely used in ECUs, ADAS systems, infotainment, powertrain, and body electronics. The manufacturing facilities are IATF 16949 certified, ensuring consistent quality for automotive applications.",
        "decisionGuide": "For automotive applications, specify AEC-Q200 qualified components and verify operating temperature ranges meet your requirements.",
        "keywords": ["automotive grade", "AEC-Q200", "IATF 16949", "automotive components"]
      },
      {
        "question": "What is the lead time for Walsin products?",
        "answer": "Lead times for Walsin products vary based on product type, volume, and market conditions. Standard catalog items typically have lead times of 8-12 weeks for factory orders. BeiLuo Electronics maintains local inventory for high-demand Walsin products, enabling immediate shipment for stocked items. For large volume orders or specialized products, please contact our sales team for specific lead time information and scheduling. We also offer inventory management programs to ensure continuity of supply for critical components.",
        "decisionGuide": "For time-critical projects, inquire about our local inventory availability and consider establishing scheduled orders.",
        "keywords": ["Walsin lead time", "delivery", "inventory", "supply chain"]
      },
      {
        "question": "How do I select the right MLCC for my application?",
        "answer": "Selecting the right MLCC involves several key parameters: 1) Capacitance value - determine the required capacitance based on circuit requirements; 2) Voltage rating - select a voltage rating at least 1.5x higher than the operating voltage; 3) Dielectric type - Class I (C0G/NP0) for stable, low-loss applications, Class II (X7R, X5R) for higher capacitance in limited space; 4) Size - choose based on PCB space and assembly requirements (0201, 0402, 0603, 0805, 1206, etc.); 5) Temperature range - ensure the capacitor's operating temperature range meets application requirements; 6) Reliability grade - select automotive grade (AEC-Q200) for critical applications. Our FAE team can provide detailed selection guidance.",
        "decisionGuide": "Contact BeiLuo FAE for MLCC selection assistance, especially for high-reliability or automotive applications.",
        "keywords": ["MLCC selection", "capacitor guide", "dielectric type", "voltage rating"]
      },
      {
        "question": "What quality certifications does Walsin maintain?",
        "answer": "Walsin maintains comprehensive quality certifications including: IATF 16949 (Automotive Quality Management System), ISO 9001 (Quality Management), ISO 14001 (Environmental Management), AEC-Q200 (Automotive Component Qualification), UL recognition for safety-critical applications, and RoHS/REACH compliance for environmental standards. These certifications demonstrate Walsin's commitment to quality, reliability, and environmental responsibility. Manufacturing facilities undergo regular audits to maintain these certifications.",
        "decisionGuide": "Request specific certification documentation for Walsin products as required for your quality system and customer requirements.",
        "keywords": ["Walsin certifications", "IATF 16949", "AEC-Q200", "quality standards"]
      }
    ]
  };
  
  fs.writeFileSync(brandPath, JSON.stringify(brandData, null, 2), 'utf8');
  console.log('  [SUCCESS] Regenerated walsin/brand.json');
}

// 重新生成 products.json
function regenerateProducts() {
  const productsPath = path.join(dataDir, 'products.json');
  
  const productsData = {
    "seoTitle": "Walsin Passive Components | MLCC, Resistors, Inductors | BeiLuo",
    "seoDescription": "Explore Walsin passive component portfolio including MLCC, chip resistors, RF components, and inductors. High-quality components for automotive, telecom, and industrial applications.",
    "seoKeywords": [
      "Walsin MLCC",
      "multilayer ceramic capacitor",
      "chip resistor",
      "RF component",
      "inductor",
      "passive component distributor"
    ],
    "faqs": [
      {
        "question": "What MLCC series does Walsin offer?",
        "answer": "Walsin offers comprehensive MLCC series including: General Purpose series for standard applications, High Voltage series for power applications (up to 3kV), High Q/Low ESR series for RF applications, Soft Termination series for improved mechanical reliability, and Automotive Grade series qualified to AEC-Q200. Available in sizes from 0201 to 1210 and larger, with capacitance values ranging from pF to hundreds of uF.",
        "decisionGuide": "Select MLCC series based on application requirements: general purpose for standard circuits, high voltage for power, automotive grade for vehicle applications.",
        "keywords": ["Walsin MLCC series", "multilayer ceramic capacitor", "AEC-Q200"]
      },
      {
        "question": "What are the differences between C0G, X7R, and X5R dielectrics?",
        "answer": "C0G (NP0) is a Class I dielectric offering excellent stability with zero temperature coefficient, low loss, and high stability over voltage and frequency - ideal for precision and RF applications. X7R and X5R are Class II dielectrics offering higher capacitance density but with some variation over temperature: X7R varies +/-15% from -55C to +125C, while X5R varies +/-15% from -55C to +85C. X7R is preferred for higher temperature applications.",
        "decisionGuide": "Use C0G for precision and RF circuits, X7R for general applications requiring higher capacitance, X5R for cost-sensitive consumer applications.",
        "keywords": ["MLCC dielectric", "C0G", "X7R", "X5R", "NP0"]
      }
    ],
    "categories": [
      {
        "id": "mlcc",
        "name": "Multilayer Ceramic Capacitors (MLCC)",
        "shortDescription": "High-reliability MLCCs for automotive, telecom, and industrial applications",
        "icon": "capacitor",
        "productCount": 4,
        "specifications": {
          "Capacitance Range": "0.1pF to 470uF",
          "Voltage Rating": "6.3V to 3000V",
          "Temperature Range": "-55°C to +150°C",
          "Sizes": "0201 to 1210+",
          "Qualifications": "AEC-Q200, MIL-PRF"
        },
        "longDescription": "Walsin MLCCs (Multilayer Ceramic Capacitors) offer industry-leading performance and reliability for demanding applications. The comprehensive portfolio includes general purpose, high voltage, high temperature, automotive grade (AEC-Q200 qualified), and RF-optimized capacitors. Available in various dielectric materials including C0G/NP0 for precision applications, X7R and X5R for general purpose, and Y5V for cost-sensitive applications. Walsin MLCCs are manufactured in IATF 16949 certified facilities with rigorous quality control.",
        "parameters": ["Part Number", "Capacitance", "Voltage", "Dielectric", "Size", "Tolerance"],
        "selectionGuide": {
          "link": "/walsin/support/mlcc-selection-guide.html",
          "description": "Use our MLCC selection guide to choose the right capacitor based on capacitance, voltage, dielectric type, and application requirements."
        },
        "faqs": [
          {
            "question": "What is the capacitance range of Walsin MLCCs?",
            "answer": "Walsin MLCCs cover an extensive capacitance range from 0.1pF for high-frequency RF applications up to 470uF for bulk decoupling and filtering. The specific range available depends on the dielectric type, voltage rating, and package size. High capacitance values are typically available in X5R and X7R dielectrics, while C0G/NP0 offers lower capacitance values with superior stability.",
            "decisionGuide": "Determine your capacitance requirements based on circuit design calculations, then select the appropriate dielectric type and size.",
            "keywords": ["MLCC capacitance", "capacitor range", "pF", "uF"]
          },
          {
            "question": "Which Walsin MLCCs are qualified for automotive applications?",
            "answer": "Walsin offers a comprehensive range of AEC-Q200 qualified MLCCs specifically designed for automotive applications. These automotive-grade capacitors undergo rigorous testing including temperature cycling (-55°C to +150°C), mechanical shock, vibration, and humidity resistance. Available in various sizes from 0402 to 1210, with voltage ratings from 6.3V to 1kV and capacitance values suitable for automotive electronics including ECUs, ADAS, infotainment, and powertrain systems.",
            "decisionGuide": "For automotive applications, always specify AEC-Q200 qualified components and verify the temperature range meets your specific application requirements.",
            "keywords": ["automotive MLCC", "AEC-Q200", "automotive grade capacitor"]
          }
        ],
        "products": [
          {
            "id": "walsin-mlcc-general",
            "name": "General Purpose MLCC",
            "partNumber": "0402B104K160CT",
            "shortDescription": "X7R 100nF 16V 0402 general purpose MLCC",
            "description": "Walsin general purpose MLCCs offer reliable performance for standard electronic applications. This X7R 100nF capacitor in 0402 package is ideal for decoupling, filtering, and general-purpose applications in consumer electronics, industrial equipment, and telecommunications.",
            "specifications": {
              "Capacitance": "100nF (0.1uF)",
              "Voltage Rating": "16V",
              "Dielectric": "X7R",
              "Size": "0402 (1005)",
              "Tolerance": "±10%",
              "Temperature Range": "-55°C to +125°C"
            },
            "applications": [
              "Consumer Electronics",
              "Industrial Control",
              "Telecommunications",
              "Power Supply Decoupling"
            ],
            "faeReview": {
              "author": "BeiLuo FAE Team",
              "content": "The Walsin 0402B104K160CT is a versatile general-purpose MLCC that we frequently recommend for decoupling applications. The X7R dielectric provides good capacitance stability across temperature ranges, and the 0402 size is compatible with most modern PCB designs. Customers appreciate the consistent quality and competitive pricing.",
              "highlight": "Reliable performance, competitive pricing, good availability"
            }
          },
          {
            "id": "walsin-mlcc-automotive",
            "name": "Automotive Grade MLCC",
            "partNumber": "0805B104K500AT",
            "shortDescription": "AEC-Q200 qualified X7R 100nF 50V MLCC for automotive",
            "description": "Walsin automotive grade MLCCs are AEC-Q200 qualified and manufactured in IATF 16949 certified facilities. This 0805 size 100nF capacitor with 50V rating is suitable for various automotive electronics applications including ECUs, body electronics, and infotainment systems.",
            "specifications": {
              "Capacitance": "100nF (0.1uF)",
              "Voltage Rating": "50V",
              "Dielectric": "X7R",
              "Size": "0805 (2012)",
              "Tolerance": "±10%",
              "Qualification": "AEC-Q200",
              "Temperature Range": "-55°C to +125°C"
            },
            "applications": [
              "Automotive ECUs",
              "Body Electronics",
              "Infotainment Systems",
              "ADAS Applications"
            ],
            "faeReview": {
              "author": "BeiLuo FAE Team",
              "content": "Walsin automotive MLCCs provide excellent reliability for automotive applications. The AEC-Q200 qualification and IATF 16949 manufacturing certification give our automotive customers confidence in long-term performance. We have successfully supported many automotive projects with these components.",
              "highlight": "AEC-Q200 qualified, automotive grade, high reliability"
            }
          }
        ]
      },
      {
        "id": "chip-resistors",
        "name": "Chip Resistors",
        "shortDescription": "Precision and general purpose chip resistors for various applications",
        "icon": "resistor",
        "productCount": 2,
        "specifications": {
          "Resistance Range": "0.1Ω to 100MΩ",
          "Power Rating": "1/32W to 2W",
          "Tolerance": "±0.1% to ±5%",
          "Temperature Coefficient": "±25ppm/°C to ±200ppm/°C",
          "Sizes": "0075 to 2512"
        },
        "longDescription": "Walsin chip resistors offer precision and reliability for a wide range of applications. The product line includes thick film resistors for general applications, thin film resistors for precision requirements, current sense resistors for power management, and automotive grade resistors qualified to AEC-Q200. Available in various sizes from 0075 to 2512 with resistance values from milliohms to megaohms.",
        "parameters": ["Part Number", "Resistance", "Power", "Tolerance", "TCR", "Size"],
        "products": [
          {
            "id": "walsin-resistor-general",
            "name": "General Purpose Chip Resistor",
            "partNumber": "WR04X1002FTL",
            "shortDescription": "0402 10kΩ 1% thick film chip resistor",
            "description": "Walsin general purpose thick film chip resistors offer reliable performance at competitive prices. This 0402 size 10kΩ resistor with 1% tolerance is suitable for general electronics applications including pull-up/pull-down, voltage dividers, and current limiting.",
            "specifications": {
              "Resistance": "10kΩ",
              "Power Rating": "1/16W",
              "Tolerance": "±1%",
              "TCR": "±100ppm/°C",
              "Size": "0402 (1005)"
            }
          }
        ]
      }
    ]
  };
  
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('  [SUCCESS] Regenerated walsin/products.json');
}

// 重新生成 solutions.json
function regenerateSolutions() {
  const solutionsPath = path.join(dataDir, 'solutions.json');
  
  const solutionsData = {
    "seoTitle": "Walsin Passive Component Solutions | Automotive, Telecom | BeiLuo",
    "seoDescription": "Explore Walsin passive component solutions for automotive electronics, telecommunications, and industrial applications. High-reliability component solutions.",
    "seoKeywords": [
      "Walsin solutions",
      "passive component solutions",
      "automotive electronics",
      "MLCC solution"
    ],
    "solutions": [
      {
        "id": "automotive-passive-solution",
        "title": "Automotive Passive Component Solution",
        "subtitle": "AEC-Q200 qualified components for automotive electronics",
        "slug": "automotive-passive-solution",
        "description": "Complete passive component solution using Walsin AEC-Q200 qualified MLCCs, resistors, and inductors for automotive electronics applications.",
        "longDescription": "This automotive passive component solution leverages Walsin's AEC-Q200 qualified product portfolio to provide reliable components for vehicle electronics. The solution includes MLCCs for decoupling and filtering, precision resistors for sensing and voltage division, and inductors for power management. All components are manufactured in IATF 16949 certified facilities and undergo rigorous automotive qualification testing.",
        "applications": [
          "Engine Control Units",
          "ADAS Systems",
          "Infotainment",
          "Body Electronics",
          "Powertrain Control"
        ],
        "benefits": [
          "AEC-Q200 qualified components",
          "IATF 16949 manufacturing",
          "Wide temperature range (-55°C to +150°C)",
          "High reliability for automotive lifetime"
        ]
      },
      {
        "id": "telecom-passive-solution",
        "title": "Telecommunications Passive Solution",
        "subtitle": "High-frequency components for 5G and communication infrastructure",
        "slug": "telecom-passive-solution",
        "description": "Specialized passive components for 5G base stations, communication equipment, and RF applications.",
        "longDescription": "This telecommunications solution provides Walsin high-frequency MLCCs, RF components, and precision passives optimized for 5G infrastructure and communication equipment. The components offer low ESR, high Q factor, and excellent high-frequency performance required for modern telecom applications.",
        "applications": [
          "5G Base Stations",
          "Small Cells",
          "RF Front Ends",
          "Communication Modules",
          "Antenna Systems"
        ],
        "benefits": [
          "High-frequency performance",
          "Low ESR and high Q",
          "Tight tolerances available",
          "Reliable supply chain"
        ]
      }
    ]
  };
  
  fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2), 'utf8');
  console.log('  [SUCCESS] Regenerated walsin/solutions.json');
}

// 重新生成 support.json
function regenerateSupport() {
  const supportPath = path.join(dataDir, 'support.json');
  
  const supportData = {
    "seoTitle": "Walsin Technical Support | MLCC Selection, Design Guide | BeiLuo",
    "seoDescription": "Access Walsin technical documentation, MLCC selection guides, and design support. Authorized distributor support for passive component applications.",
    "seoKeywords": [
      "Walsin support",
      "MLCC selection guide",
      "passive component design",
      "capacitor application"
    ],
    "faqs": [
      {
        "question": "What technical support does BeiLuo provide for Walsin products?",
        "answer": "As an authorized Walsin distributor, BeiLuo provides comprehensive technical support including MLCC and resistor selection guidance, application circuit design review, PCB layout recommendations for high-frequency applications, failure analysis support, and access to Walsin technical documentation and simulation models. Our FAE team has extensive experience with passive component applications.",
        "decisionGuide": "Contact BeiLuo FAE team for technical assistance with Walsin passive component selection and application.",
        "keywords": ["technical support", "FAE", "design assistance", "Walsin support"]
      },
      {
        "question": "Where can I find Walsin product specifications and models?",
        "answer": "Walsin product specifications, datasheets, and simulation models (SPICE, S-parameter) are available through BeiLuo Electronics. We can provide detailed datasheets, application notes, reliability reports, and qualification documents. For high-frequency applications, S-parameter files are available for accurate simulation and design optimization.",
        "decisionGuide": "Contact BeiLuo for specific product documentation and simulation models for your design requirements.",
        "keywords": ["datasheet", "specification", "SPICE model", "S-parameter"]
      }
    ]
  };
  
  fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2), 'utf8');
  console.log('  [SUCCESS] Regenerated walsin/support.json');
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Regenerate Walsin Brand Data');
  console.log('========================================');
  console.log('Note: Walsin (华新科技) is a leading passive component manufacturer');
  console.log('      specializing in MLCC, resistors, and RF components.');
  console.log('');
  
  regenerateBrand();
  regenerateProducts();
  regenerateSolutions();
  regenerateSupport();
  
  console.log('\n========================================');
  console.log('All Walsin files regenerated successfully!');
  console.log('========================================');
}

main();
