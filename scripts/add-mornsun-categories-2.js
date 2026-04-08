const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'mornsun');

console.log('Adding DIN Rail and Gate Driver categories to products.json...');
let productsData = JSON.parse(fs.readFileSync(path.join(brandDir, 'products.json'), 'utf8'));

// Define additional categories
const additionalCategories = [
  {
    "id": "din-rail-power-supplies",
    "slug": "din-rail-power-supplies",
    "name": "DIN Rail Power Supplies",
    "description": "Industrial DIN rail mount power supplies for control panel and automation applications with robust design and wide temperature range.",
    "longDescription": "Mornsun DIN rail power supplies are designed for industrial control panel applications, providing reliable DC power for PLCs, sensors, actuators, and control systems. These power supplies feature DIN rail mounting for easy installation in electrical panels, wide AC input range (85-264VAC), and high efficiency up to 94%. They include active power factor correction (PFC), comprehensive protection features, and wide operating temperature range. The rugged metal housing and screw terminal connections ensure reliable operation in industrial environments. As an authorized distributor, we provide technical support for panel design and power supply selection.",
    "parameters": ["Input Voltage", "Output Power", "Output Voltage", "Efficiency", "Operating Temperature", "PFC"],
    "applications": ["Industrial Control Panels", "Factory Automation", "Process Control", "Building Automation", "Machine Control"],
    "series": [
      {
        "name": "LI Series",
        "description": "Compact DIN rail power supplies for control panels with high efficiency",
        "powerRange": "30W to 480W",
        "features": "DIN rail mount, wide temperature, active PFC"
      },
      {
        "name": "LIF Series",
        "description": "High-power DIN rail power supplies with active PFC and parallel capability",
        "powerRange": "120W to 960W",
        "features": "Active PFC, parallel operation, DC OK signal"
      }
    ],
    "selectionGuide": {
      "title": "DIN Rail Power Supply Selection Guide",
      "description": "Learn how to select the right DIN rail power supply for your control panel including power calculation, PFC requirements, and panel layout considerations.",
      "articleId": "mornsun-din-rail-selection-guide",
      "articleLink": "/mornsun/support/mornsun-din-rail-selection-guide.html"
    },
    "selectionGuideLink": "/mornsun/support/mornsun-din-rail-selection-guide.html",
    "faqs": [
      {
        "question": "What is DIN rail mounting and why is it used?",
        "answer": "DIN rail is a standardized metal rail (35mm top-hat profile) used for mounting electrical components in panels. Benefits include quick installation without screws, easy maintenance and replacement, organized layout, space efficiency, and flexibility to add or reposition components. DIN rail mounting is preferred by panel builders for its efficiency and professional appearance in control panels, electrical distribution panels, and building automation systems.",
        "decisionGuide": "Use DIN rail power supplies for control panel applications. Ensures professional installation and easy maintenance.",
        "keywords": ["DIN rail", "panel mounting", "industrial control"]
      },
      {
        "question": "What is Power Factor Correction (PFC) and when is it needed?",
        "answer": "Power Factor Correction improves the ratio of real power to apparent power. Active PFC provides power factor >0.95, reducing input current and harmonic distortion. PFC is required for power supplies above 75W in EU (IEC 61000-3-2) and above 250W in many commercial applications. PFC also reduces energy costs and wiring losses. Mornsun DIN rail supplies include active PFC for high-power models.",
        "decisionGuide": "Choose active PFC for supplies above 75W or when utility requires it. Passive PFC acceptable for lower power applications.",
        "keywords": ["PFC", "power factor correction", "active PFC"]
      },
      {
        "question": "How do I calculate power supply size for a control panel?",
        "answer": "Calculate total power by summing all loads: PLC CPU, I/O modules, communication modules, HMI, sensors, and actuators. Add 20-30% safety margin for future expansion and 20% for temperature derating if panel temperature exceeds 50°C. Consider simultaneous operation factors. Example: PLC (10W) + I/O (15W) + HMI (8W) + Sensors (12W) = 45W. With 30% margin: 58.5W. Select 60W or higher supply.",
        "decisionGuide": "Calculate total load plus 30-50% margin for reliable operation. Contact us for panel power supply sizing assistance.",
        "keywords": ["panel sizing", "power calculation", "PLC power supply"]
      },
      {
        "question": "What is the DC OK contact used for?",
        "answer": "The DC OK contact is a relay output that closes when output voltage is within regulation (typically >90% of nominal). It can be used for power fail detection connected to PLC inputs, alarm indication, sequencing startup of downstream equipment, data protection triggers, and redundancy monitoring. Connect COM to PLC common and NO to PLC input for power status monitoring.",
        "decisionGuide": "Use DC OK contact for power monitoring and sequencing. Connect to PLC or monitoring system for power status indication.",
        "keywords": ["DC OK contact", "power monitoring", "relay output"]
      },
      {
        "question": "Can DIN rail power supplies be used in parallel?",
        "answer": "Many Mornsun DIN rail supplies support parallel operation for increased power or redundancy. Active current sharing balances load between units. N+1 redundancy provides backup for critical applications. Use identical models for parallel operation and ensure equal length wiring to minimize voltage drop differences. Some models support hot-swappable replacement for maintenance without system shutdown.",
        "decisionGuide": "For high-power or redundant applications, select models with parallel capability. Contact us for parallel operation guidance.",
        "keywords": ["parallel operation", "redundancy", "current sharing"]
      }
    ],
    "products": [
      {
        "id": "li120-20b24",
        "partNumber": "LI120-20B24",
        "model": "LI120-20B24",
        "name": "LI120-20B24 DIN Rail Power Supply",
        "shortDescription": "120W 24V DIN rail power supply with active PFC, universal input (85-264VAC), and 92% efficiency.",
        "description": "120W 24V DIN rail power supply with active PFC and wide temperature range",
        "longDescription": "The LI120-20B24 is a 120W DIN rail mount power supply providing 24VDC output at 5A. It features universal AC input (85-264VAC), active power factor correction (PFC), and high efficiency up to 92%. This power supply is designed for industrial control panel applications with -25°C to +70°C operating temperature range and robust metal housing.",
        "descriptionParagraphs": [
          "The LI120-20B24 is an excellent choice for industrial control panels requiring reliable 24V power. The 120W capacity supports multiple PLCs, sensors, and actuators.",
          "Active PFC ensures compliance with European harmonic current regulations and reduces input current draw. 92% efficiency keeps heat generation low in enclosed panels.",
          "The DC OK contact provides power status monitoring capability. Parallel operation capability allows flexibility for higher power or redundant configurations."
        ],
        "status": "Active",
        "popularity": 5,
        "category": "DIN Rail Power Supplies",
        "subcategory": "Single Phase DIN Rail",
        "series": "LI Series",
        "image": "/assets/brands/mornsun/products/li120-20b24.jpg",
        "datasheet": "/assets/brands/mornsun/datasheets/li120-20b24.pdf",
        "specifications": {
          "Input Voltage": "85-264VAC / 120-373VDC",
          "Output Power": "120W",
          "Output Voltage": "24VDC",
          "Output Current": "5A",
          "Efficiency": "Up to 92%",
          "PFC": "Active PFC >0.95",
          "Operating Temperature": "-25°C to +70°C",
          "Dimensions": "105 x 97 x 55mm",
          "Mounting": "DIN rail 35mm",
          "Protection": "OVP, OCP, OTP, SCP",
          "Safety Standards": "IEC/EN/UL 62368-1, EN 61000-3-2",
          "MTBF": ">300,000 hours"
        },
        "features": [
          "Universal AC input 85-264VAC",
          "Active PFC with power factor >0.95",
          "High efficiency up to 92%",
          "DIN rail 35mm mounting",
          "Wide operating temperature -25°C to +70°C",
          "DC OK relay contact",
          "Parallel operation capability",
          "Robust metal housing"
        ],
        "applications": [
          "Industrial control panels",
          "PLC systems",
          "Factory automation",
          "Process control systems",
          "Building automation",
          "Machine control"
        ],
        "compliance": ["CE", "UL", "CB", "RoHS"],
        "package": "DIN Rail",
        "mounting": "DIN rail 35mm",
        "stock": {
          "level": "In Stock",
          "quantity": 400,
          "minOrderQty": 1,
          "leadTime": "Same day shipping"
        },
        "pricing": {
          "currency": "USD",
          "unit": 45.00,
          "volumeDiscounts": [
            {"quantity": 5, "price": 42.00},
            {"quantity": 20, "price": 39.00},
            {"quantity": 50, "price": 36.00}
          ]
        },
        "faeReview": {
          "rating": 4.8,
          "review": "The LI120-20B24 is an excellent DIN rail power supply for industrial control panels. The active PFC ensures compliance with European harmonic current regulations and reduces input current draw. 92% efficiency keeps heat generation low in enclosed panels. I have used this in numerous PLC panels with excellent reliability. The DC OK contact is useful for monitoring power status in the control system. Parallel operation capability provides flexibility for higher power or redundant configurations. The -25°C rating handles most industrial environments. The compact 105mm width saves valuable DIN rail space.",
          "pros": ["Active PFC", "High efficiency", "DC OK contact"],
          "cons": ["No remote sense terminals", "Fixed output voltage"],
          "recommendedApplications": ["PLC panels", "Control systems", "Factory automation"],
          "alternativeModels": ["LI120-20B12", "LI240-20B24"],
          "date": "2024-12-12"
        },
        "alternativeParts": [
          {
            "model": "Mean Well DR-120-24",
            "manufacturer": "Mean Well",
            "comparison": {
              "Output Power": "120W = 120W",
              "Output Voltage": "24V = 24V",
              "Efficiency": "90% < 92%",
              "PFC": "Passive < Active",
              "Temperature Range": "-10°C to +60°C > -25°C to +70°C",
              "Price": "$38 < $45"
            },
            "recommendation": "Mean Well is lower cost but has passive PFC and narrower temperature range. Choose Mornsun for active PFC and wider temperature operation."
          },
          {
            "model": "Phoenix Contact QUINT4-PS/1AC/24DC/10",
            "manufacturer": "Phoenix Contact",
            "comparison": {
              "Output Power": "240W > 120W",
              "Output Voltage": "24V = 24V",
              "Efficiency": "93% > 92%",
              "PFC": "Active = Active",
              "Temperature Range": "-25°C to +70°C = -25°C to +70°C",
              "Price": "$180 > $45"
            },
            "recommendation": "Phoenix Contact is premium quality but much higher cost. Mornsun offers excellent value for standard industrial applications."
          }
        ],
        "companionParts": [
          {
            "model": "URB2412YMD-20WR3",
            "category": "DC/DC Converters",
            "relationship": "Secondary conversion",
            "description": "Convert 24V to 12V for sensors and control devices"
          },
          {
            "model": "K7805-2000R3",
            "category": "DC/DC Converters",
            "relationship": "Point of load",
            "description": "Generate 5V for microcontroller and HMI modules"
          },
          {
            "model": "LM150-23B24",
            "category": "AC/DC Switching Power Supplies",
            "relationship": "Alternative mounting",
            "description": "Chassis mount version for non-DIN rail applications"
          },
          {
            "model": "LI60-20B24",
            "category": "DIN Rail Power Supplies",
            "relationship": "Lower power",
            "description": "60W version for smaller control panels"
          }
        ],
        "faqs": [
          {
            "question": "What wire gauge should I use for output connections?",
            "answer": "For 5A output at 24V, use 18 AWG (0.75mm²) minimum, 16 AWG (1.0mm²) recommended. Voltage drop is approximately 0.1V per 10ft at 5A with 18 AWG. Use copper wire rated for 75°C or higher. Keep wire runs short and use ferrules on stranded wire for reliable connections.",
            "decisionGuide": "Use 16-18 AWG for typical installations. Use larger gauge for long runs or when voltage drop is critical.",
            "keywords": ["wire gauge", "output wiring", "voltage drop"]
          },
          {
            "question": "Can this supply be used outdoors?",
            "answer": "The LI120-20B24 has -25°C to +70°C operating range suitable for many outdoor applications. However, it requires protection from direct moisture and dust. For harsh outdoor environments, consider using an enclosure with appropriate IP rating. The metal housing provides good durability for industrial environments.",
            "decisionGuide": "Suitable for outdoor use with proper enclosure protection. Verify temperature range for your climate.",
            "keywords": ["outdoor use", "environmental protection", "temperature range"]
          },
          {
            "question": "What is the inrush current?",
            "answer": "Inrush current is typically 30A peak at 230VAC for less than 3ms. This is standard for 120W class power supplies with active PFC. Use appropriate circuit breakers (C or D curve) and fuses rated for inrush current. Stagger turn-on of multiple supplies to reduce combined inrush.",
            "decisionGuide": "Standard inrush for this power class. Use appropriate input protection devices.",
            "keywords": ["inrush current", "input protection", "circuit breaker"]
          },
          {
            "question": "How do I connect the DC OK contact?",
            "answer": "The DC OK contact is a SPDT relay (Form C) rated for 30VDC/1A. Connect COM to your monitoring circuit common, NO to the monitoring input for power-good indication. When output is within regulation, the contact closes. Use for PLC inputs, alarm indicators, or sequencing signals.",
            "decisionGuide": "Connect to PLC input or monitoring system. Use for power status indication and sequencing.",
            "keywords": ["DC OK", "wiring", "monitoring"]
          },
          {
            "question": "Is this supply suitable for LED lighting?",
            "answer": "Yes, the 24V constant voltage output is suitable for 24V LED strips and modules. The 5A capacity supports up to 120W of LED load. Ensure total LED power does not exceed 100W for safety margin. Consider inrush current for large LED arrays. Not suitable for direct driving of constant-current LEDs without additional drivers.",
            "decisionGuide": "Suitable for 24V constant voltage LED applications. Ensure proper power margin.",
            "keywords": ["LED power supply", "LED lighting", "24V LED"]
          }
        ]
      },
      {
        "id": "li60-20b12",
        "partNumber": "LI60-20B12",
        "model": "LI60-20B12",
        "name": "LI60-20B12 DIN Rail Power Supply",
        "shortDescription": "60W 12V DIN rail power supply for small control panels, universal input, 90% efficiency.",
        "description": "60W 12V DIN rail power supply for small control panels and distributed power",
        "longDescription": "The LI60-20B12 is a 60W DIN rail mount power supply providing 12VDC output at 5A. It features universal AC input (85-264VAC), compact design, and high efficiency up to 90%. This power supply is ideal for small control panels, distributed power systems, and 12V industrial applications.",
        "descriptionParagraphs": [
          "The LI60-20B12 is a compact and cost-effective DIN rail supply for 12V applications. The 60W capacity is suitable for small PLC systems, sensor networks, and 12V control circuits.",
          "The compact 70mm width saves DIN rail space in crowded panels. 90% efficiency is good for this power class.",
          "The passive PFC is acceptable for 60W power level. The -20°C lower limit handles indoor applications well."
        ],
        "status": "Active",
        "popularity": 4,
        "category": "DIN Rail Power Supplies",
        "subcategory": "Single Phase DIN Rail",
        "series": "LI Series",
        "image": "/assets/brands/mornsun/products/li60-20b12.jpg",
        "datasheet": "/assets/brands/mornsun/datasheets/li60-20b12.pdf",
        "specifications": {
          "Input Voltage": "85-264VAC / 120-373VDC",
          "Output Power": "60W",
          "Output Voltage": "12VDC",
          "Output Current": "5A",
          "Efficiency": "Up to 90%",
          "PFC": "Passive PFC",
          "Operating Temperature": "-20°C to +60°C",
          "Dimensions": "70 x 90 x 55mm",
          "Mounting": "DIN rail 35mm",
          "Protection": "OVP, OCP, OTP, SCP",
          "Safety Standards": "IEC/EN/UL 62368-1",
          "MTBF": ">300,000 hours"
        },
        "features": [
          "Universal AC input 85-264VAC",
          "12V output at 5A",
          "Compact DIN rail design",
          "High efficiency up to 90%",
          "Wide operating temperature -20°C to +60°C",
          "LED power indicator",
          "Screw terminal connections",
          "Robust metal housing"
        ],
        "applications": [
          "Small control panels",
          "12V industrial systems",
          "Sensor power distribution",
          "Security systems",
          "Building automation",
          "LED lighting systems"
        ],
        "compliance": ["CE", "UL", "CB", "RoHS"],
        "package": "DIN Rail",
        "mounting": "DIN rail 35mm",
        "stock": {
          "level": "In Stock",
          "quantity": 600,
          "minOrderQty": 1,
          "leadTime": "Same day shipping"
        },
        "pricing": {
          "currency": "USD",
          "unit": 28.00,
          "volumeDiscounts": [
            {"quantity": 10, "price": 26.00},
            {"quantity": 50, "price": 24.00},
            {"quantity": 100, "price": 22.00}
          ]
        },
        "faeReview": {
          "rating": 4.6,
          "review": "The LI60-20B12 is a compact and cost-effective DIN rail supply for 12V applications. The 60W capacity is suitable for small PLC systems, sensor networks, and 12V control circuits. The compact 70mm width saves DIN rail space in crowded panels. 90% efficiency is good for this power class. I have used this for security systems and building automation projects with good results. The passive PFC is acceptable for 60W power level. The -20°C lower limit handles indoor applications but may need consideration for outdoor installations in cold climates. Overall a good value for small panel applications.",
          "pros": ["Compact size", "Cost-effective", "Good efficiency"],
          "cons": ["Passive PFC only", "-20°C lower limit"],
          "recommendedApplications": ["Small panels", "12V systems", "Security systems"],
          "alternativeModels": ["LI60-20B24", "LI120-20B12"],
          "date": "2024-12-08"
        },
        "alternativeParts": [
          {
            "model": "Mean Well DR-60-12",
            "manufacturer": "Mean Well",
            "comparison": {
              "Output Power": "60W = 60W",
              "Output Voltage": "12V = 12V",
              "Efficiency": "88% < 90%",
              "Temperature Range": "-10°C to +60°C > -20°C to +60°C",
              "Dimensions": "78 x 93 x 56mm > 70 x 90 x 55mm",
              "Price": "$24 < $28"
            },
            "recommendation": "Mean Well is slightly lower cost but larger and lower efficiency. Mornsun offers more compact design and better efficiency."
          },
          {
            "model": "Siemens SITOP PSU100C 12V/6.5A",
            "manufacturer": "Siemens",
            "comparison": {
              "Output Power": "78W > 60W",
              "Output Voltage": "12V = 12V",
              "Efficiency": "89% < 90%",
              "Temperature Range": "-25°C to +70°C > -20°C to +60°C",
              "Features": "More diagnostics > Basic",
              "Price": "$120 > $28"
            },
            "recommendation": "Siemens has more features and wider temperature range but much higher cost. Mornsun is excellent value for standard applications."
          }
        ],
        "companionParts": [
          {
            "model": "URB1212YMD-10WR3",
            "category": "DC/DC Converters",
            "relationship": "Voltage isolation",
            "description": "Isolated 12V converter for noise-sensitive circuits"
          },
          {
            "model": "K7805-2000R3",
            "category": "DC/DC Converters",
            "relationship": "Voltage regulation",
            "description": "Generate 5V from 12V for mixed-voltage systems"
          },
          {
            "model": "LM100-23B12",
            "category": "AC/DC Switching Power Supplies",
            "relationship": "Alternative mounting",
            "description": "Chassis mount version for non-DIN rail applications"
          },
          {
            "model": "LI120-20B12",
            "category": "DIN Rail Power Supplies",
            "relationship": "Higher power",
            "description": "120W version for larger 12V systems"
          }
        ],
        "faqs": [
          {
            "question": "Is LI60-20B12 suitable for LED lighting systems?",
            "answer": "Yes, this power supply is suitable for 12V LED lighting systems. The 12V at 5A output supports up to 60W of LED load. 90% efficiency minimizes power consumption and heat generation. For LED applications, ensure total LED power does not exceed 50W for safety margin and consider inrush current for large LED arrays.",
            "decisionGuide": "Excellent for 12V LED lighting systems up to 50W. Ensure proper power margin.",
            "keywords": ["LED power supply", "12V LED", "lighting system"]
          },
          {
            "question": "What is the difference between LI60 and LI120 series?",
            "answer": "The main differences are power capacity and features. LI60 provides 60W with passive PFC, suitable for small panels. LI120 provides 120W with active PFC, DC OK contact, and parallel capability. Choose LI60 for cost-sensitive small applications, LI120 for larger systems requiring advanced features.",
            "decisionGuide": "Choose LI60 for small, cost-sensitive applications. Choose LI120 for larger systems needing active PFC and monitoring.",
            "keywords": ["LI60 vs LI120", "series comparison", "selection"]
          },
          {
            "question": "Can I use this supply in parallel with another?",
            "answer": "The LI60-20B12 does not support parallel operation. For higher power requirements, use the LI120 series which supports parallel operation with current sharing, or use separate supplies for different loads.",
            "decisionGuide": "Not suitable for parallel operation. Use LI120 for parallel capability or distribute loads among separate supplies.",
            "keywords": ["parallel operation", "higher power", "current sharing"]
          },
          {
            "question": "What is the hold-up time?",
            "answer": "Hold-up time is typically 20ms at 115VAC and 80ms at 230VAC at full load. This provides adequate ride-through for brief power interruptions. For longer hold-up requirements, consider adding external capacitors or using a UPS.",
            "decisionGuide": "Standard hold-up time suitable for most applications. Add external capacitors or UPS for longer hold-up needs.",
            "keywords": ["hold-up time", "ride-through", "power failure"]
          },
          {
            "question": "What fuse should I use on the input?",
            "answer": "Use a 2A slow-blow fuse for 115VAC input or 1A slow-blow for 230VAC input. The fuse should be rated for the inrush current. Time-delay (T) or high-inrush (TT) fuses are recommended. Place fuse in series with the L (line) wire.",
            "decisionGuide": "Use slow-blow fuse rated for inrush current. Contact us for specific fuse recommendations.",
            "keywords": ["input fuse", "protection", "sizing"]
          }
        ]
      }
    ]
  }
];

// Add categories to productsData
productsData.categories.push(...additionalCategories);

fs.writeFileSync(path.join(brandDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✓ Added DIN Rail Power Supplies category with 2 products');
console.log('✓ Total categories now: ' + productsData.categories.length);
