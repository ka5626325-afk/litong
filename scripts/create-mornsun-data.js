const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'mornsun');

// Ensure directory exists
if (!fs.existsSync(brandDir)) {
  fs.mkdirSync(brandDir, { recursive: true });
}

// 1. Create brand.json
const brandData = {
  "name": "mornsun",
  "displayName": "Mornsun",
  "logo": "/assets/brands/mornsun/logo.svg",
  "tagline": "Leading Power Supply Solutions for Industrial and Commercial Applications",
  "description": "Mornsun (金升阳) is a leading Chinese manufacturer of power supply solutions, specializing in AC/DC switching power supplies, DC/DC converters, and isolated gate driver power supplies. The company serves industrial automation, telecommunications, medical equipment, and new energy markets with high-reliability power conversion products.",
  "longDescription": "Founded in 1998, Mornsun has grown to become one of China's premier power supply manufacturers. The company offers a comprehensive portfolio of power conversion solutions including AC/DC switching power supplies (15W to 5000W), DC/DC converters (isolated and non-isolated), DIN rail power supplies, and specialized IGBT/SiC gate driver power supplies. With advanced manufacturing facilities and rigorous quality control systems, Mornsun products meet international safety and EMC standards. The company holds numerous patents in power conversion technology and continues to innovate in high-efficiency, high-reliability power supply design. As an authorized Mornsun distributor, we provide local inventory, technical support, and application assistance for power supply selection and integration.",
  "coreProducts": [
    {
      "name": "AC/DC Switching Power Supplies",
      "description": "High-efficiency AC/DC power supplies for industrial and commercial applications",
      "keywords": ["AC/DC power supply", "switching power supply", "industrial power"]
    },
    {
      "name": "DC/DC Converters",
      "description": "Isolated and non-isolated DC/DC converters for on-board power conversion",
      "keywords": ["DC/DC converter", "isolated converter", "power module"]
    },
    {
      "name": "DIN Rail Power Supplies",
      "description": "Industrial DIN rail mount power supplies for control panel applications",
      "keywords": ["DIN rail power supply", "industrial power supply", "panel mount"]
    },
    {
      "name": "IGBT/SiC Gate Driver Power Supplies",
      "description": "Isolated power supplies for IGBT and SiC MOSFET gate drivers",
      "keywords": ["gate driver power supply", "IGBT driver", "SiC driver"]
    }
  ],
  "industries": [
    {
      "name": "Industrial Automation",
      "description": "PLC systems, industrial control, and factory automation equipment",
      "keywords": ["industrial control", "PLC power supply", "automation"]
    },
    {
      "name": "Telecommunications",
      "description": "Base stations, network equipment, and communication systems",
      "keywords": ["telecom power", "base station", "network equipment"]
    },
    {
      "name": "Medical Equipment",
      "description": "Patient monitoring, diagnostic equipment, and medical devices",
      "keywords": ["medical power supply", "patient monitor", "diagnostic equipment"]
    },
    {
      "name": "New Energy",
      "description": "Solar inverters, EV charging, and energy storage systems",
      "keywords": ["solar inverter", "EV charging", "energy storage"]
    }
  ],
  "certifications": [
    {
      "name": "ISO 9001",
      "description": "Quality Management System Certification"
    },
    {
      "name": "ISO 14001",
      "description": "Environmental Management System Certification"
    },
    {
      "name": "IATF 16949",
      "description": "Automotive Quality Management System"
    }
  ],
  "yearFounded": 1998,
  "headquarters": "China",
  "employees": "2000+",
  "revenue": "Leading position in Chinese power supply market",
  "website": "https://www.mornsun-power.com",
  "distributorStatus": "Authorized Distributor",
  "seoTitle": "Mornsun Power Supply Distributor - AC/DC & DC/DC Converters",
  "seoDescription": "Authorized Mornsun distributor offering AC/DC switching power supplies, DC/DC converters, and gate driver power supplies. High-reliability power solutions for industrial and commercial applications.",
  "seoKeywords": [
    "Mornsun distributor",
    "AC/DC power supply distributor",
    "DC/DC converter supplier",
    "DIN rail power supply",
    "gate driver power supply",
    "industrial power supply",
    "switching power supply distributor"
  ],
  "faqs": [
    {
      "question": "Is LiTong an authorized distributor of Mornsun products?",
      "answer": "Yes, LiTong is an officially authorized distributor of Mornsun power supply products. We maintain direct relationships with Mornsun and provide genuine, factory-fresh AC/DC power supplies, DC/DC converters, and gate driver power supplies. As an authorized distributor, we offer competitive pricing, technical support, and guaranteed product authenticity. Our FAE team has received specialized training from Mornsun engineers and can provide expert guidance on power supply selection, thermal management, and EMC compliance.",
      "decisionGuide": "Contact our sales team for Mornsun product quotations and technical support. We can provide reference designs and evaluation boards for your power supply projects.",
      "keywords": ["Mornsun authorized distributor", "genuine power supply", "power supply distributor"]
    },
    {
      "question": "What types of power supplies does Mornsun offer?",
      "answer": "Mornsun offers a comprehensive range of power supply solutions: AC/DC Switching Power Supplies - 15W to 5000W, enclosed and open frame, single and multiple outputs. DC/DC Converters - Isolated converters with 1500V to 6000V isolation, and non-isolated switching regulators. DIN Rail Power Supplies - Industrial power supplies for control panel mounting, 15W to 960W. IGBT/SiC Gate Driver Power Supplies - Isolated DC/DC converters specifically designed for gate driver applications. All products feature high efficiency, wide operating temperature ranges, and comprehensive protection features.",
      "decisionGuide": "Browse our product categories to find the right power supply for your application. Contact our FAE team for selection assistance.",
      "keywords": ["Mornsun product range", "power supply types", "AC/DC DC/DC"]
    },
    {
      "question": "How do I select the right Mornsun power supply for my application?",
      "answer": "Power supply selection process: 1) Determine input requirements - AC input voltage range (85-264V or specific range), DC input voltage for DC/DC converters. 2) Calculate output requirements - Total output power needed, output voltage(s) required, output current per rail. 3) Consider environmental conditions - Operating temperature range, cooling method (convection, forced air), altitude, humidity. 4) Review mechanical requirements - Mounting style (chassis, DIN rail, PCB), dimensions, connector types. 5) Check safety and EMC requirements - Required safety certifications (UL, CE, medical), EMC class (Class A or B). 6) Evaluate special features - Parallel operation, remote sense, power good signal, remote on/off. Our FAE team can help analyze your requirements and recommend the optimal solution.",
      "decisionGuide": "Contact our FAE team with your application requirements for personalized power supply selection assistance.",
      "keywords": ["power supply selection", "how to choose power supply", "power supply guide"]
    },
    {
      "question": "What are the key advantages of Mornsun power supplies?",
      "answer": "Mornsun power supply advantages: High reliability - MTBF exceeding 300,000 hours under standard conditions. Wide temperature range - Many products operate from -40°C to +85°C without derating. High efficiency - Up to 95% efficiency reduces heat generation and operating costs. Compact size - High power density designs save space in equipment. Comprehensive protection - Overvoltage, overcurrent, overtemperature, and short circuit protection. Global certifications - UL, CE, CB, and medical safety certifications for worldwide use. Cost-effective - Competitive pricing without compromising quality. Local support - As an authorized distributor, we provide local inventory and technical support.",
      "decisionGuide": "Mornsun offers excellent value for industrial and commercial power supply applications. Contact us for competitive quotations.",
      "keywords": ["Mornsun advantages", "power supply benefits", "why choose Mornsun"]
    },
    {
      "question": "Do Mornsun power supplies meet medical safety standards?",
      "answer": "Yes, Mornsun offers power supplies certified to medical safety standards. Medical-grade power supplies meet: IEC 60601-1 - Medical electrical equipment safety standard. EN 60601-1 - European medical safety standard. ANSI/AAMI ES60601-1 - US medical safety standard. 2xMOPP - Two means of patient protection for BF and CF rated equipment. Low leakage current - Critical for patient-connected equipment. Medical power supplies are available in various form factors including open frame, enclosed, and DIN rail mount. These are suitable for patient monitors, diagnostic equipment, laboratory instruments, and home healthcare devices. Standard industrial-grade supplies can be used for non-patient-contact medical equipment.",
      "decisionGuide": "For medical applications, specify the required safety rating (B, BF, or CF) and leakage current limits. Contact us for medical power supply recommendations.",
      "keywords": ["medical power supply", "IEC 60601-1", "medical safety"]
    },
    {
      "question": "What is the warranty period for Mornsun power supplies?",
      "answer": "Mornsun provides a 3-year warranty on most power supply products. Warranty coverage includes: Manufacturing defects - Any defects in materials or workmanship. Performance specifications - Products not meeting published specifications. Repair or replacement - At Mornsun's discretion, defective products will be repaired or replaced. Warranty conditions: Proper use - Products must be used within specified ratings and conditions. Original purchase - Warranty applies to original purchaser from authorized distributors. No modifications - Warranty void if product is modified or repaired by unauthorized personnel. Extended warranty options may be available for specific applications. As an authorized distributor, we facilitate warranty claims and provide replacement products from local inventory when possible.",
      "decisionGuide": "Mornsun's 3-year warranty demonstrates confidence in product quality. Contact us for warranty details and RMA procedures.",
      "keywords": ["Mornsun warranty", "power supply warranty", "product guarantee"]
    },
    {
      "question": "Can Mornsun power supplies be used in parallel for higher power?",
      "answer": "Many Mornsun power supplies support parallel operation for increased power capacity: Active current sharing - Some models include active parallel operation with current sharing capability. N+1 redundancy - Parallel configuration supports redundant operation for critical applications. Load sharing - Current is automatically balanced between parallel units. Hot-swappable - Some designs allow replacement of failed units without system shutdown. Considerations for parallel operation: Use identical models - Parallel units should be same model and revision. Wiring - Use equal length wires to minimize voltage drop differences. Synchronization - Some models require synchronization signals. Derating - Consider derating for temperature and airflow in multi-unit configurations. Contact our FAE team for guidance on parallel operation configurations.",
      "decisionGuide": "For high-power or redundant applications, select models with parallel capability. Contact us for parallel operation guidance.",
      "keywords": ["parallel operation", "power supply redundancy", "current sharing"]
    },
    {
      "question": "What technical support does LiTong provide for Mornsun products?",
      "answer": "LiTong provides comprehensive technical support for Mornsun power supplies: Application engineering - Our FAE team can help with power supply selection, thermal analysis, and EMC compliance. Reference designs - We provide application circuits and layout recommendations. Evaluation support - Sample units and evaluation boards available for testing. Design review - We can review your power supply implementation for optimal performance. Troubleshooting - Technical assistance for any issues during development or production. Local inventory - Stocked products for quick delivery and sample requests. Training - Product training and application seminars available. Documentation - Complete datasheets, application notes, and safety certificates provided. Contact our technical support team for assistance with your Mornsun power supply design.",
      "decisionGuide": "Leverage our technical expertise for your power supply design. Contact our FAE team early in your design cycle for best results.",
      "keywords": ["technical support", "FAE support", "application engineering"]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'brand.json'), JSON.stringify(brandData, null, 2));
console.log('✓ brand.json created');

// 2. Create products.json
const productsData = {
  "categories": [
    {
      "id": "ac-dc-switching-power-supplies",
      "slug": "ac-dc-switching-power-supplies",
      "name": "AC/DC Switching Power Supplies",
      "description": "High-efficiency AC/DC switching power supplies for industrial and commercial applications with wide input voltage range and comprehensive protection features.",
      "longDescription": "Mornsun AC/DC switching power supplies provide reliable DC power from AC mains for industrial equipment, telecommunications, medical devices, and commercial applications. The product range covers 15W to 5000W with various form factors including open frame, enclosed, and DIN rail mount. These power supplies feature universal AC input (85-264VAC), high efficiency up to 95%, and low standby power consumption. Comprehensive protection features include overvoltage, overcurrent, overtemperature, and short circuit protection. Many models meet medical safety standards (IEC 60601-1) and industrial EMC requirements (EN 55032 Class B).",
      "parameters": ["Input Voltage", "Output Power", "Output Voltage", "Efficiency", "Operating Temperature", "Isolation Voltage"],
      "applications": ["Industrial Control", "Telecommunications", "Medical Equipment", "LED Lighting", "Test Equipment"],
      "series": [
        {
          "name": "LM Series",
          "description": "Compact AC/DC power supplies with high efficiency",
          "powerRange": "15W to 150W",
          "features": "Universal input, compact size"
        },
        {
          "name": "LOF Series",
          "description": "High-power density open frame power supplies",
          "powerRange": "120W to 750W",
          "features": "High efficiency, low profile"
        }
      ],
      "selectionGuide": {
        "title": "AC/DC Power Supply Selection Guide",
        "description": "Learn how to select the right AC/DC power supply for your application",
        "articleId": "mornsun-acdc-selection-guide",
        "articleLink": "/mornsun/support/mornsun-acdc-selection-guide.html"
      },
      "selectionGuideLink": "/mornsun/support/mornsun-acdc-selection-guide.html",
      "faqs": [
        {
          "question": "What is the difference between open frame and enclosed power supplies?",
          "answer": "Open frame vs enclosed comparison: Open frame power supplies - PCB assembly without enclosure, designed for integration into equipment. Advantages: lower cost, smaller size, better airflow for cooling, easier integration. Applications: internal power supplies in equipment, systems with existing enclosures. Enclosed power supplies - Complete unit in metal or plastic enclosure. Advantages: built-in cooling, touch-safe design, standalone operation, better environmental protection. Applications: external power supplies, standalone power systems, harsh environments. Selection factors: Equipment design - open frame for internal integration, enclosed for standalone. Safety requirements - enclosed for user-accessible applications. Environmental protection - enclosed for dusty or wet environments. Cost budget - open frame generally lower cost.",
          "decisionGuide": "Choose open frame for integration into equipment with existing enclosures. Choose enclosed for standalone or user-accessible applications.",
          "keywords": ["open frame power supply", "enclosed power supply", "power supply types"]
        },
        {
          "question": "How do I calculate the required power supply wattage?",
          "answer": "Power supply sizing process: 1) List all loads - Identify all devices powered by the supply and their voltage requirements. 2) Calculate individual power - P = V × I for each load (voltage × current). 3) Sum the power - Add all individual power requirements. 4) Add safety margin - Multiply total by 1.2 to 1.5 for derating and future expansion. 5) Consider inrush current - Some loads have high startup current (motors, capacitors). 6) Check peak vs continuous - Ensure supply can handle peak loads. Example calculation: System with 24V at 2A (48W), 5V at 3A (15W), 12V at 1A (12W). Total = 48 + 15 + 12 = 75W. With 1.3 safety margin: 75 × 1.3 = 97.5W. Select 100W or higher power supply. For multiple output supplies, verify each output rating meets requirements.",
          "decisionGuide": "Calculate total system power and add 20-50% margin for reliable operation. Contact us for power supply sizing assistance.",
          "keywords": ["power supply sizing", "calculate wattage", "power requirements"]
        }
      ],
      "products": [
        {
          "id": "lm150-23b24",
          "model": "LM150-23B24",
          "name": "LM150-23B24 AC/DC Power Supply",
          "description": "150W 24V AC/DC switching power supply with universal input and high efficiency",
          "longDescription": "The LM150-23B24 is a 150W AC/DC switching power supply featuring universal AC input (85-264VAC), 24VDC output at 6.5A, and up to 91% efficiency. This enclosed power supply is designed for industrial applications with -30°C to +70°C operating temperature range. It includes comprehensive protection features and meets IEC/EN/UL 62368-1 safety standards.",
          "status": "Active",
          "popularity": 5,
          "category": "AC/DC Switching Power Supplies",
          "subcategory": "Enclosed Power Supplies",
          "series": "LM Series",
          "image": "/assets/brands/mornsun/products/lm150-23b24.jpg",
          "datasheet": "/assets/brands/mornsun/datasheets/lm150-23b24.pdf",
          "specifications": {
            "Input Voltage": "85-264VAC / 120-373VDC",
            "Output Power": "150W",
            "Output Voltage": "24VDC",
            "Output Current": "6.5A",
            "Efficiency": "Up to 91%",
            "Operating Temperature": "-30°C to +70°C",
            "Isolation Voltage": "3000VAC",
            "Dimensions": "159 x 97 x 30mm",
            "Protection": "OVP, OCP, OTP, SCP",
            "Safety Standards": "IEC/EN/UL 62368-1",
            "EMC": "EN 55032 Class B",
            "MTBF": ">300,000 hours"
          },
          "features": [
            "Universal AC input 85-264VAC",
            "High efficiency up to 91%",
            "Wide operating temperature range -30°C to +70°C",
            "Comprehensive protection features",
            "Low standby power consumption <0.5W",
            "IEC/EN/UL 62368-1 certified",
            "EMC meets EN 55032 Class B",
            "Compact enclosed design"
          ],
          "applications": [
            "Industrial automation systems",
            "Telecommunications equipment",
            "LED lighting systems",
            "Test and measurement equipment",
            "Factory automation",
            "Process control systems"
          ],
          "compliance": ["CE", "UL", "CB", "RoHS"],
          "package": "Enclosed",
          "mounting": "Chassis mount",
          "stock": {
            "level": "In Stock",
            "quantity": 500,
            "minOrderQty": 1,
            "leadTime": "Same day shipping"
          },
          "pricing": {
            "currency": "USD",
            "unit": 28.50,
            "volumeDiscounts": [
              {"quantity": 10, "price": 26.50},
              {"quantity": 50, "price": 24.50},
              {"quantity": 100, "price": 22.50}
            ]
          },
          "faeReview": {
            "rating": 4.8,
            "review": "The LM150-23B24 is an excellent choice for industrial applications requiring reliable 24V power. The wide input voltage range handles global AC mains, and the 91% efficiency keeps heat generation low. I've successfully used this in multiple factory automation projects with excellent results. The -30°C to +70°C temperature range is suitable for most industrial environments without derating. The 3000VAC isolation provides good safety margin. Recommended for general industrial applications.",
            "pros": ["High efficiency", "Wide temperature range", "Global certifications"],
            "cons": ["No PFC at this power level", "Fixed output voltage"],
            "recommendedApplications": ["Industrial control panels", "Factory automation", "Process control"],
            "alternativeModels": ["LM150-23B12", "LM150-23B48"],
            "date": "2024-12-15"
          },
          "alternatives": [
            {
              "model": "TDK-Lambda RWS150B-24",
              "manufacturer": "TDK-Lambda",
              "comparison": {
                "Output Power": "150W = 150W",
                "Output Voltage": "24V = 24V",
                "Efficiency": "90% < 91%",
                "Operating Temperature": "-10°C to +70°C > -30°C to +70°C",
                "Dimensions": "102 x 50 x 31mm < 159 x 97 x 30mm",
                "Price": "$35 > $28.50"
              },
              "recommendation": "TDK-Lambda offers smaller size but Mornsun has wider temperature range and better value. Choose TDK-Lambda for space-constrained applications."
            },
            {
              "model": "Mean Well LRS-150-24",
              "manufacturer": "Mean Well",
              "comparison": {
                "Output Power": "150W = 150W",
                "Output Voltage": "24V = 24V",
                "Efficiency": "89% < 91%",
                "Operating Temperature": "-10°C to +70°C > -30°C to +70°C",
                "Dimensions": "159 x 97 x 30mm = 159 x 97 x 30mm",
                "Price": "$25 < $28.50"
              },
              "recommendation": "Mean Well LRS series is more cost-effective but has narrower temperature range. Choose Mornsun for wider temperature operation and better efficiency."
            }
          ],
          "companionParts": [
            {
              "model": "URB2412YMD-20WR3",
              "category": "DC/DC Converters",
              "relationship": "Secondary conversion",
              "description": "24V to 12V DC/DC converter for generating secondary voltage rail"
            },
            {
              "model": "K7805-2000R3",
              "category": "DC/DC Converters",
              "relationship": "Point of load",
              "description": "Non-isolated 5V regulator for on-board 5V supply"
            },
            {
              "model": "QA151C3",
              "category": "Gate Driver Power Supplies",
              "relationship": "IGBT driver power",
              "description": "Isolated power supply for IGBT gate drivers in motor control"
            },
            {
              "model": "LI120-20B24",
              "category": "DIN Rail Power Supplies",
              "relationship": "Alternative form factor",
              "description": "DIN rail version for control panel applications"
            }
          ],
          "faqs": [
            {
              "question": "What is the inrush current for LM150-23B24?",
              "answer": "LM150-23B24 inrush current specifications: Cold start inrush - typically 60A peak at 230VAC input, 30A peak at 115VAC input. Duration - less than 3ms at nominal voltage. Frequency - occurs once per power cycle. Mitigation considerations: Circuit breaker selection - use C or D curve breakers rated for inrush current. Fuse selection - use time-delay fuses rated for inrush. Input switching - consider soft-start circuit for frequent switching applications. Multiple supplies - stagger turn-on to reduce combined inrush. The inrush current is typical for this power class and is managed by internal NTC thermistor.",
              "decisionGuide": "Standard inrush current for 150W class. Use appropriate input protection devices rated for inrush current.",
              "keywords": ["inrush current", "cold start", "input protection"]
            },
            {
              "question": "Can LM150-23B24 be used in parallel for higher power?",
              "answer": "LM150-23B24 parallel operation: Not designed for direct parallel - this model does not include active current sharing. Options for higher power: Use single higher power supply - consider LM200 or LM350 series. Diode OR-ing - use external diodes to combine outputs (voltage drop penalty). Load distribution - power separate loads with individual supplies. Redundancy - use diode OR-ing for N+1 redundancy (not load sharing). If parallel operation is required, select models specifically designed for parallel operation with current sharing feature. Contact our FAE team for high-power application recommendations.",
              "decisionGuide": "Not recommended for parallel operation. Use higher power single supply or separate load distribution.",
              "keywords": ["parallel operation", "current sharing", "higher power"]
            }
          ]
        },
        {
          "id": "lm100-23b12",
          "model": "LM100-23B12",
          "name": "LM100-23B12 AC/DC Power Supply",
          "description": "100W 12V AC/DC switching power supply with universal input and compact design",
          "longDescription": "The LM100-23B12 is a 100W AC/DC switching power supply providing 12VDC output at 8.5A. It features universal AC input (85-264VAC), high efficiency up to 90%, and compact enclosed design. This power supply is suitable for industrial control, LED lighting, and test equipment applications with operating temperature range of -25°C to +70°C.",
          "status": "Active",
          "popularity": 4,
          "category": "AC/DC Switching Power Supplies",
          "subcategory": "Enclosed Power Supplies",
          "series": "LM Series",
          "image": "/assets/brands/mornsun/products/lm100-23b12.jpg",
          "datasheet": "/assets/brands/mornsun/datasheets/lm100-23b12.pdf",
          "specifications": {
            "Input Voltage": "85-264VAC / 120-373VDC",
            "Output Power": "100W",
            "Output Voltage": "12VDC",
            "Output Current": "8.5A",
            "Efficiency": "Up to 90%",
            "Operating Temperature": "-25°C to +70°C",
            "Isolation Voltage": "3000VAC",
            "Dimensions": "129 x 97 x 30mm",
            "Protection": "OVP, OCP, OTP, SCP",
            "Safety Standards": "IEC/EN/UL 62368-1",
            "EMC": "EN 55032 Class B",
            "MTBF": ">300,000 hours"
          },
          "features": [
            "Universal AC input 85-264VAC",
            "High efficiency up to 90%",
            "12V output at 8.5A",
            "Compact enclosed design",
            "Wide operating temperature range",
            "Comprehensive protection features",
            "IEC/EN/UL 62368-1 certified",
            "3-year warranty"
          ],
          "applications": [
            "Industrial control systems",
            "LED lighting power supply",
            "Test and measurement",
            "Security systems",
            "Point of sale equipment",
            "Building automation"
          ],
          "compliance": ["CE", "UL", "CB", "RoHS"],
          "package": "Enclosed",
          "mounting": "Chassis mount",
          "stock": {
            "level": "In Stock",
            "quantity": 350,
            "minOrderQty": 1,
            "leadTime": "Same day shipping"
          },
          "pricing": {
            "currency": "USD",
            "unit": 22.00,
            "volumeDiscounts": [
              {"quantity": 10, "price": 20.50},
              {"quantity": 50, "price": 19.00},
              {"quantity": 100, "price": 17.50}
            ]
          },
          "faeReview": {
            "rating": 4.7,
            "review": "The LM100-23B12 is a reliable 12V power supply for industrial and commercial applications. The compact size (129 x 97 x 30mm) makes it easy to integrate into equipment enclosures. 90% efficiency is good for this power class. I've used this successfully in LED lighting controllers and security systems. The 12V at 8.5A output is suitable for many 12V systems including PoE injectors and small motor drives. The -25°C lower limit handles most indoor applications, though outdoor applications in cold climates may need additional consideration.",
            "pros": ["Compact size", "Good efficiency", "Reliable operation"],
            "cons": ["-25°C lower limit", "No remote sense"],
            "recommendedApplications": ["LED lighting", "Security systems", "Industrial control"],
            "alternativeModels": ["LM100-23B24", "LM100-23B05"],
            "date": "2024-12-10"
          },
          "alternatives": [
            {
              "model": "Mean Well LRS-100-12",
              "manufacturer": "Mean Well",
              "comparison": {
                "Output Power": "100W = 100W",
                "Output Voltage": "12V = 12V",
                "Efficiency": "88% < 90%",
                "Operating Temperature": "-10°C to +70°C > -25°C to +70°C",
                "Dimensions": "129 x 97 x 30mm = 129 x 97 x 30mm",
                "Price": "$18 < $22"
              },
              "recommendation": "Mean Well is lower cost but has narrower temperature range. Choose Mornsun for wider temperature operation and slightly better efficiency."
            },
            {
              "model": "TDK-Lambda RWS100B-12",
              "manufacturer": "TDK-Lambda",
              "comparison": {
                "Output Power": "100W = 100W",
                "Output Voltage": "12V = 12V",
                "Efficiency": "89% < 90%",
                "Operating Temperature": "-10°C to +70°C > -25°C to +70°C",
                "Dimensions": "82 x 40 x 25mm < 129 x 97 x 30mm",
                "Price": "$32 > $22"
              },
              "recommendation": "TDK-Lambda is significantly smaller but higher cost. Choose TDK-Lambda for space-critical applications, Mornsun for cost-sensitive projects."
            }
          ],
          "companionParts": [
            {
              "model": "URB1212YMD-10WR3",
              "category": "DC/DC Converters",
              "relationship": "Voltage conversion",
              "description": "12V to 12V isolated converter for noise-sensitive circuits"
            },
            {
              "model": "K7803-1000R3",
              "category": "DC/DC Converters",
              "relationship": "Point of load",
              "description": "Non-isolated 3.3V regulator for microcontroller supply"
            },
            {
              "model": "LI60-20B12",
              "category": "DIN Rail Power Supplies",
              "relationship": "Alternative mounting",
              "description": "DIN rail version for panel mount applications"
            },
            {
              "model": "LM150-23B12",
              "category": "AC/DC Switching Power Supplies",
              "relationship": "Higher power",
              "description": "150W version for applications requiring more power headroom"
            }
          ],
          "faqs": [
            {
              "question": "What is the hold-up time for LM100-23B12?",
              "answer": "LM100-23B12 hold-up time specifications: Typical hold-up time - 20ms at 115VAC input, 80ms at 230VAC input at full load. Definition - time output voltage remains within regulation after AC input is removed. Factors affecting hold-up time: Input voltage - higher input voltage provides longer hold-up time. Load current - lighter loads extend hold-up time. Output voltage - higher output voltages may have different characteristics. Applications requiring longer hold-up: Use higher input voltage if possible. Add external hold-up capacitor (consider inrush current). Select power supply with longer specified hold-up time. Use UPS for critical applications. The specified hold-up time is typical for this power class and voltage range.",
              "decisionGuide": "Standard hold-up time suitable for most applications. For longer hold-up requirements, consider external capacitors or UPS.",
              "keywords": ["hold-up time", "ride-through", "power failure"]
            },
            {
              "question": "Is LM100-23B12 suitable for LED lighting applications?",
              "answer": "LM100-23B12 for LED lighting: Suitability - Yes, this power supply is suitable for LED lighting applications. Key considerations: Constant voltage output - suitable for LED strips and modules with built-in current regulation. Current capacity - 8.5A at 12V supports up to 100W of LED load. Efficiency - 90% efficiency minimizes heat generation and power consumption. Protection - overcurrent protection may trip with high inrush current of large LED loads. Recommendations for LED applications: Use LED modules with constant voltage input (12V). Ensure total LED power does not exceed 90W for safety margin. Consider inrush current limiter for large LED arrays. Verify compatibility with LED dimming requirements. For constant current LED applications, consider adding external LED driver or selecting constant current power supply.",
              "decisionGuide": "Suitable for 12V constant voltage LED applications. Ensure proper power margin and consider inrush current for large LED arrays.",
              "keywords": ["LED power supply", "LED lighting", "12V LED"]
            }
          ]
        }
      ]
    },
    {
      "id": "dc-dc-converters",
      "slug": "dc-dc-converters",
      "name": "DC/DC Converters",
      "description": "Isolated and non-isolated DC/DC converters with wide input voltage ranges and high efficiency for on-board power conversion.",
      "longDescription": "Mornsun DC/DC converters provide efficient voltage conversion for applications requiring isolation, voltage step-up/down, or noise immunity. The product range includes isolated converters with 1500V to 6000V isolation, and non-isolated POL (Point of Load) converters. Input voltage ranges cover narrow (2:1) to ultra-wide (4:1) ratios, accommodating battery, industrial bus, and distributed power systems. Output power ranges from 0.25W to 1500W with single, dual, and triple output options. These converters feature high efficiency up to 92%, compact SIP, DIP, and SMD packages, and extended temperature operation.",
      "parameters": ["Input Voltage", "Output Power", "Output Voltage", "Isolation Voltage", "Efficiency", "Package"],
      "applications": ["Industrial Control", "Telecommunications", "Medical Equipment", "Electric Vehicles", "Data Communications"],
      "series": [
        {
          "name": "URB Series",
          "description": "Wide input isolated DC/DC converters with 4:1 input range",
          "inputRange": "9-36V, 18-75V, 36-160V",
          "features": "Wide input, high isolation"
        },
        {
          "name": "K78 Series",
          "description": "Non-isolated switching regulators (LDO replacement)",
          "inputRange": "4.75V-36V",
          "features": "High efficiency, low cost"
        }
      ],
      "selectionGuide": {
        "title": "DC/DC Converter Selection Guide",
        "description": "Learn how to select the right DC/DC converter for your application",
        "articleId": "mornsun-dcdc-selection-guide",
        "articleLink": "/mornsun/support/mornsun-dcdc-selection-guide.html"
      },
      "selectionGuideLink": "/mornsun/support/mornsun-dcdc-selection-guide.html",
      "faqs": [
        {
          "question": "When should I use isolated vs non-isolated DC/DC converters?",
          "answer": "Isolated vs non-isolated selection: Isolated converters - use when galvanic isolation is required between input and output. Required for: safety isolation (medical, industrial), breaking ground loops, voltage level shifting, noise immunity in sensitive circuits. Non-isolated converters - use when input and output share common ground. Suitable for: on-board voltage regulation, battery-powered devices, point-of-load conversion, cost-sensitive applications. Trade-offs: Isolated - higher cost, larger size, slightly lower efficiency. Non-isolated - lower cost, smaller size, higher efficiency. Many systems use both - isolated for primary conversion, non-isolated for secondary regulation.",
          "decisionGuide": "Choose isolated for safety or noise-critical applications. Choose non-isolated for cost-sensitive on-board regulation.",
          "keywords": ["isolated vs non-isolated", "DC/DC selection", "isolation requirements"]
        },
        {
          "question": "What is the difference between 2:1 and 4:1 input range?",
          "answer": "Input range comparison: 2:1 input range - covers input voltage variations of 2:1 ratio. Example: 18-36V (2:1), 36-72V (2:1). Suitable for systems with stable input voltage like regulated buses. 4:1 input range - covers input voltage variations of 4:1 ratio. Example: 9-36V (4:1), 18-75V (4:1). Suitable for battery applications with wide voltage swing. Selection guidelines: Use 2:1 for stable DC buses or regulated supplies. Use 4:1 for battery-powered applications (12V, 24V, 48V batteries). Consider startup voltage - converter must start at minimum input voltage. Consider end-of-life battery voltage in calculations.",
          "decisionGuide": "Use 4:1 wide input for battery applications. Use 2:1 for stable DC bus applications to optimize cost.",
          "keywords": ["input range", "2:1 vs 4:1", "battery applications"]
        }
      ],
      "products": [
        {
          "id": "urb2412ymd-20wr3",
          "model": "URB2412YMD-20WR3",
          "name": "URB2412YMD-20WR3 DC/DC Converter",
          "description": "20W isolated DC/DC converter with 4:1 wide input range, 24V to 12V conversion",
          "longDescription": "The URB2412YMD-20WR3 is a 20W isolated DC/DC converter featuring 4:1 wide input range (9-36VDC), 12VDC output at 1.67A, and 1500VDC isolation. This compact converter is designed for industrial applications with -40°C to +85°C operating temperature range. It provides high efficiency up to 89% and includes input undervoltage protection, output overcurrent protection, and short circuit protection.",
          "status": "Active",
          "popularity": 5,
          "category": "DC/DC Converters",
          "subcategory": "Isolated Converters",
          "series": "URB Series",
          "image": "/assets/brands/mornsun/products/urb2412ymd-20wr3.jpg",
          "datasheet": "/assets/brands/mornsun/datasheets/urb2412ymd-20wr3.pdf",
          "specifications": {
            "Input Voltage": "9-36VDC (24V nominal)",
            "Output Power": "20W",
            "Output Voltage": "12VDC",
            "Output Current": "1.67A",
            "Isolation Voltage": "1500VDC",
            "Efficiency": "Up to 89%",
            "Operating Temperature": "-40°C to +85°C",
            "Package": "DIP24",
            "Dimensions": "31.8 x 20.3 x 10.2mm",
            "Switching Frequency": "300kHz",
            "Load Regulation": "±1%",
            "Line Regulation": "±0.5%",
            "MTBF": ">1,000,000 hours"
          },
          "features": [
            "4:1 ultra-wide input range 9-36VDC",
            "1500VDC isolation voltage",
            "High efficiency up to 89%",
            "Wide operating temperature -40°C to +85°C",
            "Input undervoltage protection",
            "Output short circuit protection",
            "Compact DIP24 package",
            "No external components required"
          ],
          "applications": [
            "Industrial control systems",
            "Battery-powered equipment",
            "Distributed power systems",
            "Data communication equipment",
            "Electric vehicle systems",
            "Renewable energy systems"
          ],
          "compliance": ["CE", "RoHS"],
          "package": "DIP24",
          "mounting": "Through-hole",
          "stock": {
            "level": "In Stock",
            "quantity": 800,
            "minOrderQty": 1,
            "leadTime": "Same day shipping"
          },
          "pricing": {
            "currency": "USD",
            "unit": 12.50,
            "volumeDiscounts": [
              {"quantity": 10, "price": 11.50},
              {"quantity": 50, "price": 10.50},
              {"quantity": 100, "price": 9.50}
            ]
          },
          "faeReview": {
            "rating": 4.9,
            "review": "The URB2412YMD-20WR3 is my go-to converter for 24V to 12V conversion in industrial applications. The 4:1 input range handles battery voltage swings perfectly - from 9V (deep discharge) to 36V (transient). The 1500V isolation is sufficient for most industrial applications. I've used this in battery backup systems, vehicle electronics, and distributed power architectures. The DIP24 package is easy to handle and the no-external-components design simplifies PCB layout. Efficiency is excellent at 89%. The -40°C rating makes it suitable for outdoor and vehicle applications.",
            "pros": ["Wide 4:1 input range", "Excellent efficiency", "Wide temperature range"],
            "cons": ["Fixed output voltage", "No remote on/off"],
            "recommendedApplications": ["Battery systems", "Vehicle electronics", "Industrial distributed power"],
            "alternativeModels": ["URB2415YMD-20WR3", "URB2405YMD-20WR3"],
            "date": "2024-12-18"
          },
          "alternatives": [
            {
              "model": "RECOM RCM-20-24S12",
              "manufacturer": "RECOM",
              "comparison": {
                "Output Power": "20W = 20W",
                "Input Range": "9-36V = 9-36V",
                "Isolation": "1500V = 1500V",
                "Efficiency": "87% < 89%",
                "Temperature Range": "-40°C to +85°C = -40°C to +85°C",
                "Price": "$18 > $12.50"
              },
              "recommendation": "RECOM has similar specs but higher price. Mornsun offers better value with slightly better efficiency."
            },
            {
              "model": "Traco TEL 20-2412",
              "manufacturer": "Traco Power",
              "comparison": {
                "Output Power": "20W = 20W",
                "Input Range": "9-36V = 9-36V",
                "Isolation": "1600V > 1500V",
                "Efficiency": "88% < 89%",
                "Temperature Range": "-40°C to +85°C = -40°C to +85°C",
                "Price": "$22 > $12.50"
              },
              "recommendation": "Traco has slightly higher isolation but significantly higher cost. Mornsun is the better value choice."
            }
          ],
          "companionParts": [
            {
              "model": "LM150-23B24",
              "category": "AC/DC Switching Power Supplies",
              "relationship": "Primary power source",
              "description": "AC/DC power supply providing 24V input for the DC/DC converter"
            },
            {
              "model": "K7805-2000R3",
              "category": "DC/DC Converters",
              "relationship": "Secondary regulation",
              "description": "Generate 5V from 12V output for mixed-voltage systems"
            },
            {
              "model": "LI120-20B24",
              "category": "DIN Rail Power Supplies",
              "relationship": "System power",
              "description": "DIN rail power supply for control panel 24V bus"
            },
            {
              "model": "QA151C3",
              "category": "Gate Driver Power Supplies",
              "relationship": "Application pairing",
              "description": "Gate driver supply for motor control applications using 12V control"
            }
          ],
          "faqs": [
            {
              "question": "What input capacitor is recommended for URB2412YMD-20WR3?",
              "answer": "URB2412YMD-20WR3 input capacitor recommendations: Minimum capacitor - 10µF low ESR electrolytic or ceramic capacitor. Recommended value - 22µF to 47µF for stable operation. Capacitor type - Low ESR electrolytic, tantalum, or ceramic (X5R/X7R). Voltage rating - At least 1.5x maximum input voltage (use 50V or 63V for 36V max input). Placement - Close to input pins to minimize inductance. Purpose of input capacitor: Prevents input voltage oscillation during switching. Supplies transient current during switching cycles. Reduces conducted EMI back to source. Additional considerations: For long input leads, increase capacitance or add additional capacitor near converter. For battery input, ensure capacitor ESR is compatible with battery impedance. For multiple converters, each should have its own input capacitor.",
              "decisionGuide": "Use 22-47µF low ESR capacitor close to input pins. Contact us for specific application recommendations.",
              "keywords": ["input capacitor", "external components", "input filtering"]
            },
            {
              "question": "Can URB2412YMD-20WR3 start at 9V input with full load?",
              "answer": "URB2412YMD-20WR3 startup characteristics: Startup voltage - guaranteed to start at 9V input at full load (20W). Startup behavior - converter starts when input exceeds undervoltage lockout (UVLO) threshold. UVLO hysteresis - typically 0.5V to prevent oscillation at threshold. Considerations for 9V operation: Current draw - input current is higher at lower input voltage (Iin = Pout / (Vin × Efficiency)). Input source capability - ensure source can provide required current at 9V. Wiring losses - voltage drop in input wiring reduces actual converter input voltage. Battery applications - 9V is end-of-discharge voltage for 12V lead-acid batteries. Practical recommendations: For battery applications, ensure battery can deliver required current at low voltage. Use adequate wire gauge to minimize voltage drop. Consider temperature effects on battery voltage. Monitor input voltage for undervoltage conditions.",
              "decisionGuide": "Guaranteed to start at 9V with full load. Ensure input source can deliver required current at minimum voltage.",
              "keywords": ["startup voltage", "undervoltage lockout", "9V operation"]
            }
          ]
        },
        {
          "id": "k7805-2000r3",
          "model": "K7805-2000R3",
          "name": "K7805-2000R3 Non-Isolated DC/DC Converter",
          "description": "High-efficiency non-isolated switching regulator, 5V 2A output, LDO replacement",
          "longDescription": "The K7805-2000R3 is a high-efficiency non-isolated switching regulator providing 5V output at 2A (10W). It features wide input voltage range (6.5V to 32V), high efficiency up to 95%, and compact SIP package. This converter is designed as a high-efficiency replacement for 78xx linear regulators, offering much better efficiency and lower heat generation.",
          "status": "Active",
          "popularity": 5,
          "category": "DC/DC Converters",
          "subcategory": "Non-Isolated Regulators",
          "series": "K78 Series",
          "image": "/assets/brands/mornsun/products/k7805-2000r3.jpg",
          "datasheet": "/assets/brands/mornsun/datasheets/k7805-2000r3.pdf",
          "specifications": {
            "Input Voltage": "6.5-32VDC",
            "Output Power": "10W",
            "Output Voltage": "5VDC fixed",
            "Output Current": "2A",
            "Efficiency": "Up to 95%",
            "Operating Temperature": "-40°C to +85°C",
            "Package": "SIP3",
            "Dimensions": "11.5 x 10.0 x 17.5mm",
            "Switching Frequency": "500kHz",
            "Load Regulation": "±1%",
            "Line Regulation": "±0.5%",
            "Quiescent Current": "0.5mA typical"
          },
          "features": [
            "High efficiency up to 95%",
            "Wide input voltage 6.5V to 32V",
            "Pin-compatible with 78xx linear regulators",
            "No heat sink required in most applications",
            "Short circuit protection",
            "Over-temperature protection",
            "Compact SIP3 package",
            "Low quiescent current"
          ],
          "applications": [
            "Microcontroller power supply",
            "Sensor power supply",
            "Battery-powered devices",
            "Industrial control systems",
            "Communication equipment",
            "Linear regulator replacement"
          ],
          "compliance": ["RoHS"],
          "package": "SIP3",
          "mounting": "Through-hole",
          "stock": {
            "level": "In Stock",
            "quantity": 1200,
            "minOrderQty": 1,
            "leadTime": "Same day shipping"
          },
          "pricing": {
            "currency": "USD",
            "unit": 3.50,
            "volumeDiscounts": [
              {"quantity": 50, "price": 3.00},
              {"quantity": 100, "price": 2.75},
              {"quantity": 500, "price": 2.50}
            ]
          },
          "faeReview": {
            "rating": 4.9,
            "review": "The K7805-2000R3 is an excellent replacement for 7805 linear regulators. At 95% efficiency vs 40-50% for linear regulators, it generates significantly less heat. I've used this to upgrade legacy designs where the 7805 was running too hot. The pin compatibility makes it a drop-in replacement - just remove the old regulator and solder this in. The wide 6.5-32V input range handles everything from 9V to 24V systems. 2A output is sufficient for most microcontroller and sensor applications. The SIP3 package is slightly taller than TO-220 but much smaller footprint. Highly recommended for any new design that would use a linear regulator.",
            "pros": ["Excellent efficiency", "Drop-in replacement", "Wide input range"],
            "cons": ["Non-isolated only", "Slightly higher cost than linear"],
            "recommendedApplications": ["Microcontroller power", "Linear regulator replacement", "Battery systems"],
            "alternativeModels": ["K7803-1000R3", "K7809-2000R3"],
            "date": "2024-12-20"
          },
          "alternatives": [
            {
              "model": "TI LM7805",
              "manufacturer": "Texas Instruments",
              "comparison": {
                "Output Current": "1A < 2A",
                "Input Voltage": "7-25V < 6.5-32V",
                "Efficiency": "~40% < 95%",
                "Heat Generation": "High > Low",
                "Package": "TO-220 > SIP3",
                "Price": "$0.50 < $3.50"
              },
              "recommendation": "Linear regulator is cheaper but much less efficient and requires heat sink. Choose K7805 for efficiency and compact design."
            },
            {
              "model": "RECOM R-78E5.0-1.0",
              "manufacturer": "RECOM",
              "comparison": {
                "Output Current": "1A < 2A",
                "Input Voltage": "7-28V < 6.5-32V",
                "Efficiency": "93% < 95%",
                "Operating Temperature": "-40°C to +85°C = -40°C to +85°C",
                "Package": "SIP3 = SIP3",
                "Price": "$8 > $3.50"
              },
              "recommendation": "RECOM is well-known but higher cost and lower current. Mornsun offers better value with higher output current."
            }
          ],
          "companionParts": [
            {
              "model": "URB2412YMD-20WR3",
              "category": "DC/DC Converters",
              "relationship": "Primary conversion",
              "description": "Generate 12V from 24V bus, then use K7805 for 5V regulation"
            },
            {
              "model": "LM100-23B12",
              "category": "AC/DC Switching Power Supplies",
              "relationship": "System power",
              "description": "AC/DC supply providing 12V input for K7805 converter"
            },
            {
              "model": "K7803-1000R3",
              "category": "DC/DC Converters",
              "relationship": "Companion voltage",
              "description": "3.3V version for mixed 5V/3.3V microcontroller systems"
            },
            {
              "model": "QA151C3",
              "category": "Gate Driver Power Supplies",
              "relationship": "System component",
              "description": "Gate driver supply for systems with 5V control circuits"
            }
          ],
          "faqs": [
            {
              "question": "Can K7805-2000R3 replace a 7805 linear regulator directly?",
              "answer": "K7805-2000R3 as 7805 replacement: Pin compatibility - Yes, K7805 uses same pinout as 78xx series (Input, GND, Output). Physical considerations: Package size - SIP3 is smaller than TO-220 but taller (17.5mm height). Mounting - SIP3 has different footprint than TO-220, PCB modification required. Heat sink - K7805 typically doesn't need heat sink due to high efficiency. Electrical considerations: Input voltage - K7805 accepts 6.5-32V vs 7-25V for 7805. Output current - K7805 provides 2A vs 1A for standard 7805. No external capacitors - K7805 has internal capacitors, but adding 10µF on input and output is recommended. Ground pin - Both use center pin for ground. Replacement procedure: Remove existing 7805 and any heat sink. Modify PCB pads to match SIP3 footprint (if needed). Install K7805-2000R3. Add optional input/output capacitors (10µF recommended). Verify output voltage before connecting load.",
              "decisionGuide": "Excellent drop-in replacement for 7805 with much better efficiency. PCB footprint modification may be required.",
              "keywords": ["7805 replacement", "linear regulator replacement", "pin compatible"]
            },
            {
              "question": "What is the efficiency advantage over linear regulators?",
              "answer": "K7805 vs linear regulator efficiency comparison: Linear regulator efficiency - approximately (Vout/Vin) × 100%. Example: 5V output from 12V input = 5/12 = 42% efficiency. Power dissipation - (Vin - Vout) × Iout. Example: (12-5) × 1A = 7W heat. K7805 efficiency - 90-95% regardless of input voltage. Power dissipation - minimal, typically <0.5W at 1A. Practical example comparison: 12V input, 5V at 1A output. Linear regulator: 42% efficiency, 7W heat generation, requires heat sink. K7805: 93% efficiency, 0.35W heat, no heat sink needed. Benefits of K7805: Lower power consumption - significant in battery applications. No heat sink required - saves space and cost. Cooler operation - improves reliability. Smaller package - SIP3 vs TO-220 with heat sink. Cost savings - heat sink and mounting hardware eliminated. When to use linear regulators: Very noise-sensitive analog circuits. Cost-sensitive high-volume consumer products. Very low current applications (<10mA).",
              "decisionGuide": "K7805 is superior for most applications. Use linear regulators only for extreme noise-sensitive or cost-sensitive applications.",
              "keywords": ["efficiency comparison", "switching vs linear", "heat generation"]
            }
          ]
        }
      ]
    }
  ]
};

// Add more categories
const additionalCategories = [
  {
    "id": "din-rail-power-supplies",
    "slug": "din-rail-power-supplies",
    "name": "DIN Rail Power Supplies",
    "description": "Industrial DIN rail mount power supplies for control panel and automation applications with robust design and wide temperature range.",
    "longDescription": "Mornsun DIN rail power supplies are designed for industrial control panel applications, providing reliable DC power for PLCs, sensors, actuators, and control systems. These power supplies feature DIN rail mounting for easy installation in electrical panels, wide AC input range (85-264VAC), and high efficiency up to 94%. They include active power factor correction (PFC), comprehensive protection features, and wide operating temperature range. The rugged metal housing and screw terminal connections ensure reliable operation in industrial environments.",
    "parameters": ["Input Voltage", "Output Power", "Output Voltage", "Efficiency", "Operating Temperature", "PFC"],
    "applications": ["Industrial Control Panels", "Factory Automation", "Process Control", "Building Automation", "Machine Control"],
    "series": [
      {
        "name": "LI Series",
        "description": "Compact DIN rail power supplies for control panels",
        "powerRange": "30W to 480W",
        "features": "DIN rail mount, wide temperature"
      },
      {
        "name": "LIF Series",
        "description": "High-power DIN rail power supplies with PFC",
        "powerRange": "120W to 960W",
        "features": "Active PFC, parallel operation"
      }
    ],
    "selectionGuide": {
      "title": "DIN Rail Power Supply Selection Guide",
      "description": "Learn how to select the right DIN rail power supply for your control panel",
      "articleId": "mornsun-din-rail-selection-guide",
      "articleLink": "/mornsun/support/mornsun-din-rail-selection-guide.html"
    },
    "selectionGuideLink": "/mornsun/support/mornsun-din-rail-selection-guide.html",
    "faqs": [
      {
        "question": "What is DIN rail mounting and why is it used?",
        "answer": "DIN rail mounting overview: DIN rail definition - standardized metal rail (35mm top-hat profile) used for mounting electrical components in panels. Benefits of DIN rail mounting: Quick installation - components snap onto rail without screws. Easy maintenance - components can be removed and replaced quickly. Organized layout - consistent mounting method creates neat panel wiring. Space efficiency - compact arrangement of multiple components. Flexibility - easy to add or reposition components. Standardization - compatible with thousands of industrial components. Common applications: Control panels for machinery. Electrical distribution panels. Building automation systems. Process control systems. Panel builders prefer DIN rail mounting for its efficiency and professional appearance.",
        "decisionGuide": "Use DIN rail power supplies for control panel applications. Ensures professional installation and easy maintenance.",
        "keywords": ["DIN rail", "panel mounting", "industrial control"]
      },
      {
        "question": "What is Power Factor Correction (PFC) and when is it needed?",
        "answer": "Power Factor Correction explained: Power factor definition - ratio of real power (kW) to apparent power (kVA). Ideal power factor is 1.0 (unity). Without PFC - power supplies draw non-sinusoidal current, causing power factor of 0.5-0.7. Why PFC matters: Energy efficiency - higher power factor means less wasted power. Reduced current - lower RMS current for same power output. Regulatory compliance - many regions require PFC for power supplies above 75W. Reduced grid impact - less harmonic distortion fed back to power grid. Types of PFC: Passive PFC - simple inductor, limited effectiveness (0.7-0.8 PF). Active PFC - switching circuit, excellent PF (0.95-0.99). When PFC is required: Above 75W in EU (IEC 61000-3-2). Above 250W in many commercial applications. When utility requires power factor correction. Benefits even when not required: Lower operating costs. Reduced wiring losses. Better voltage regulation.",
        "decisionGuide": "Choose active PFC for supplies above 75W or when utility requires it. Passive PFC acceptable for lower power or cost-sensitive applications.",
        "keywords": ["PFC", "power factor correction", "active PFC"]
      }
    ],
    "products": [
      {
        "id": "li120-20b24",
        "model": "LI120-20B24",
        "name": "LI120-20B24 DIN Rail Power Supply",
        "description": "120W 24V DIN rail power supply with active PFC and wide temperature range",
        "longDescription": "The LI120-20B24 is a 120W DIN rail mount power supply providing 24VDC output at 5A. It features universal AC input (85-264VAC), active power factor correction (PFC), and high efficiency up to 92%. This power supply is designed for industrial control panel applications with -25°C to +70°C operating temperature range and robust metal housing.",
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
          "review": "The LI120-20B24 is an excellent DIN rail power supply for industrial control panels. The active PFC ensures compliance with European harmonic current regulations and reduces input current draw. 92% efficiency keeps heat generation low in enclosed panels. I've used this in numerous PLC panels with excellent reliability. The DC OK contact is useful for monitoring power status in the control system. Parallel operation capability provides flexibility for higher power or redundant configurations. The -25°C rating handles most industrial environments. The compact 105mm width saves valuable DIN rail space.",
          "pros": ["Active PFC", "High efficiency", "DC OK contact"],
          "cons": ["No remote sense terminals", "Fixed output voltage"],
          "recommendedApplications": ["PLC panels", "Control systems", "Factory automation"],
          "alternativeModels": ["LI120-20B12", "LI240-20B24"],
          "date": "2024-12-12"
        },
        "alternatives": [
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
            "question": "How do I calculate the power supply size for a PLC panel?",
            "answer": "PLC panel power supply sizing: Step 1 - List all loads: PLC CPU module power consumption. I/O modules (digital and analog). Communication modules. HMI or operator panel. Sensors and field devices powered from panel. Step 2 - Calculate total power: Sum all DC power requirements. Add 24V × current for each device. Consider inrush currents for relays and contactors. Step 3 - Add safety margins: Add 20-30% for future expansion. Add 20% for supply derating if panel temperature >50°C. Consider simultaneous operation factors. Step 4 - Verify voltage drop: Calculate voltage drop in distribution wiring. Ensure minimum voltage at farthest device. Example calculation: PLC CPU: 10W, I/O modules: 15W, HMI: 8W, Sensors: 12W. Total = 45W. With 30% margin: 45 × 1.3 = 58.5W. Select 60W or 75W supply minimum. With temperature derating: 58.5 × 1.2 = 70W. Select LI120-20B24 (120W) for adequate margin.",
            "decisionGuide": "Calculate total load plus 30-50% margin for reliable operation. Contact us for panel power supply sizing assistance.",
            "keywords": ["panel sizing", "power calculation", "PLC power supply"]
          },
          {
            "question": "What is the DC OK contact used for?",
            "answer": "LI120-20B24 DC OK contact functionality: Contact type - SPDT relay contact (Form C). Rating - typically 30VDC, 1A or 125VAC, 0.5A. Function - closes when output voltage is within regulation (typically >90% of nominal). Connection terminals - labeled COM, NC (normally closed), NO (normally open). Common applications: Power fail detection - connect to PLC input for power status monitoring. Alarm indication - drive indicator light or alarm when power fails. Sequencing - use to sequence startup of downstream equipment. Data protection - trigger data save in PLCs before power loss. Redundancy monitoring - detect failure in redundant power supply systems. Wiring example for PLC input: Connect COM to PLC common. Connect NO to PLC input. When power is OK, contact closes and PLC input is ON. When power fails, contact opens and PLC input goes OFF. The PLC can then execute power-fail routine.",
            "decisionGuide": "Use DC OK contact for power monitoring and sequencing. Connect to PLC or monitoring system for power status indication.",
            "keywords": ["DC OK contact", "power monitoring", "relay output"]
          }
        ]
      },
      {
        "id": "li60-20b12",
        "model": "LI60-20B12",
        "name": "LI60-20B12 DIN Rail Power Supply",
        "description": "60W 12V DIN rail power supply for small control panels and distributed power",
        "longDescription": "The LI60-20B12 is a 60W DIN rail mount power supply providing 12VDC output at 5A. It features universal AC input (85-264VAC), compact design, and high efficiency up to 90%. This power supply is ideal for small control panels, distributed power systems, and 12V industrial applications.",
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
          "review": "The LI60-20B12 is a compact and cost-effective DIN rail supply for 12V applications. The 60W capacity is suitable for small PLC systems, sensor networks, and 12V control circuits. The compact 70mm width saves DIN rail space in crowded panels. 90% efficiency is good for this power class. I've used this for security systems and building automation projects with good results. The passive PFC is acceptable for 60W power level. The -20°C lower limit handles indoor applications but may need consideration for outdoor installations in cold climates. Overall a good value for small panel applications.",
          "pros": ["Compact size", "Cost-effective", "Good efficiency"],
          "cons": ["Passive PFC only", "-20°C lower limit"],
          "recommendedApplications": ["Small panels", "12V systems", "Security systems"],
          "alternativeModels": ["LI60-20B24", "LI120-20B12"],
          "date": "2024-12-08"
        },
        "alternatives": [
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
            "question": "Is LI60-20B12 suitable for 12V LED lighting systems?",
            "answer": "LI60-20B12 for LED lighting: Suitability - Yes, this power supply is well-suited for 12V LED lighting systems. Key specifications: 12V output at 5A supports up to 60W of LED load. Constant voltage output suitable for 12V LED strips and modules. 90% efficiency minimizes power consumption and heat generation. DIN rail mounting convenient for electrical panel installation. Considerations for LED applications: Total LED power - ensure total LED load does not exceed 50W for safety margin (derate by 15-20%). Inrush current - large LED arrays may have high inrush current; verify supply protection can handle it. Voltage drop - use adequate wire gauge for distribution to minimize voltage drop at end of runs. Dimming - this supply is not dimmable; for dimming applications, use external LED dimmer or constant current LED driver. Multiple circuits - consider using multiple smaller supplies for large installations rather than one large supply.",
            "decisionGuide": "Excellent for 12V LED lighting systems up to 50W. Ensure proper power margin and consider inrush current for large LED arrays.",
            "keywords": ["LED power supply", "12V LED", "lighting system"]
          },
          {
            "question": "What wire gauge should I use for the output connections?",
            "answer": "LI60-20B12 output wiring recommendations: Output current - 5A maximum at 12V (60W). Wire gauge selection: 18 AWG (0.75mm²) - suitable for up to 6A, voltage drop ~0.1V per 10ft at 5A. 16 AWG (1.0mm²) - suitable for up to 10A, voltage drop ~0.06V per 10ft at 5A. 14 AWG (1.5mm²) - suitable for up to 15A, voltage drop ~0.04V per 10ft at 5A. Terminal capacity - check supply terminal rating (typically 14-18 AWG). Wiring best practices: Use copper wire rated for 75°C or higher. Keep wire runs as short as possible. Use ferrules on stranded wire for reliable terminal connections. Separate high-current output wiring from sensitive signal wiring. Consider voltage drop in long runs - LEDs may dim if voltage is too low. Fuse protection - add fuse on output for protection against short circuits. Example: For 10ft run to LED strip at 5A, use 16 AWG to keep voltage drop under 0.1V.",
            "decisionGuide": "Use 16-18 AWG for typical installations. Use larger gauge for long runs or when voltage drop is critical.",
            "keywords": ["wire gauge", "output wiring", "voltage drop"]
          }
        ]
      }
    ]
  },
  {
    "id": "gate-driver-power-supplies",
    "slug": "gate-driver-power-supplies",
    "name": "IGBT/SiC Gate Driver Power Supplies",
    "description": "Isolated DC/DC converters specifically designed for IGBT and SiC MOSFET gate driver applications with high isolation and low coupling capacitance.",
    "longDescription": "Mornsun gate driver power supplies are specialized isolated DC/DC converters designed specifically for powering IGBT and SiC MOSFET gate drivers. These power supplies feature high isolation voltage (3000V to 6000V), low isolation capacitance, and continuous barrier withstand voltage ratings. They are optimized for the unique requirements of gate driver applications including fast switching, high dv/dt immunity, and reliable operation in high-voltage power conversion systems. These supplies are essential for motor drives, inverters, power supplies, and renewable energy systems using IGBT or SiC power devices.",
    "parameters": ["Input Voltage", "Output Power", "Output Voltage", "Isolation Voltage", "Isolation Capacitance", "CMTI"],
    "applications": ["Motor Drives", "Solar Inverters", "EV Chargers", "Power Supplies", "Industrial Inverters"],
    "series": [
      {
        "name": "QA Series",
        "description": "Isolated DC/DC for IGBT gate drivers",
        "isolation": "3000V to 6000V",
        "features": "High isolation, low capacitance"
      },
      {
        "name": "QA-R Series",
        "description": "Reinforced isolation for SiC applications",
        "isolation": "6000V reinforced",
        "features": "Reinforced insulation, SiC optimized"
      }
    ],
    "selectionGuide": {
      "title": "Gate Driver Power Supply Selection Guide",
      "description": "Learn how to select the right isolated power supply for gate driver applications",
      "articleId": "mornsun-gate-driver-selection-guide",
      "articleLink": "/mornsun/support/mornsun-gate-driver-selection-guide.html"
    },
    "selectionGuideLink": "/mornsun/support/mornsun-gate-driver-selection-guide.html",
    "faqs": [
      {
        "question": "Why do gate drivers need isolated power supplies?",
        "answer": "Gate driver isolation requirements: High voltage separation - IGBT/SiC emitters/source switch between ground and high voltage (up to 1000V+). Control circuit protection - microcontroller/DSP operates at low voltage (3.3V/5V) and must be isolated from power stage. Safety requirements - reinforced isolation required between user-accessible controls and hazardous voltages. Switching noise immunity - isolation barrier prevents high dv/dt noise from coupling to control circuits. Bootstrap limitations - bootstrap power supplies have duty cycle and startup limitations. Isolated supplies provide continuous power. Key isolation parameters: Isolation voltage - must exceed maximum system voltage with safety margin. Isolation capacitance - low capacitance (<10pF) minimizes common-mode current during switching. CMTI (Common Mode Transient Immunity) - must withstand high dv/dt (50-100kV/µs) without malfunction.",
        "decisionGuide": "Always use isolated supplies for high-side gate drivers and when safety isolation is required. Choose based on system voltage and switching speed.",
        "keywords": ["gate driver isolation", "IGBT driver power", "isolation requirements"]
      },
      {
        "question": "What is CMTI and why is it important for gate driver supplies?",
        "answer": "Common Mode Transient Immunity (CMTI) explained: Definition - ability of isolated component to maintain correct operation during rapid common-mode voltage transients. Units - kV/µs (kilovolts per microsecond). Why CMTI matters in gate drivers: Fast switching - SiC MOSFETs switch in <50ns with dv/dt up to 50-100kV/µs. High voltage - system voltages of 600V to 1700V common in industrial drives. Isolation barrier stress - rapid voltage changes can couple across isolation through capacitance. Gate driver malfunction - CMTI events can cause false triggering or damage to power devices. CMTI requirements: IGBT applications - typically 15-30kV/µs sufficient. SiC MOSFET applications - typically 50-100kV/µs required. Higher switching frequencies - require higher CMTI ratings. Testing and certification: CMTI is tested with defined voltage pulse (e.g., 1kV step). Both static and dynamic CMTI may be specified. Look for CMTI rating exceeding your application's maximum dv/dt.",
        "decisionGuide": "Choose supplies with CMTI rating at least 2x your application's maximum dv/dt. SiC applications need 50kV/µs or higher.",
        "keywords": ["CMTI", "common mode transient", "dv/dt immunity"]
      }
    ],
    "products": [
        {
          "id": "qa151c3",
          "model": "QA151C3",
          "name": "QA151C3 IGBT Gate Driver Power Supply",
          "description": "3W isolated DC/DC converter for IGBT gate drivers with 3000V isolation",
          "longDescription": "The QA151C3 is a 3W isolated DC/DC converter specifically designed for IGBT gate driver applications. It features 3000VDC isolation, dual outputs (+15V/-8V) suitable for IGBT gate drive, and low isolation capacitance of 15pF typical. This converter provides reliable isolation for motor drives, inverters, and power conversion systems.",
          "status": "Active",
          "popularity": 5,
          "category": "IGBT/SiC Gate Driver Power Supplies",
          "subcategory": "IGBT Driver Supplies",
          "series": "QA Series",
          "image": "/assets/brands/mornsun/products/qa151c3.jpg",
          "datasheet": "/assets/brands/mornsun/datasheets/qa151c3.pdf",
          "specifications": {
            "Input Voltage": "4.5-5.5VDC (5V nominal)",
            "Output Power": "3W",
            "Output Voltage": "+15V/-8V (dual output)",
            "Output Current": "+100mA/-100mA",
            "Isolation Voltage": "3000VDC",
            "Isolation Capacitance": "15pF typical",
            "CMTI": "15kV/µs minimum",
            "Operating Temperature": "-40°C to +105°C",
            "Package": "SMD16",
            "Dimensions": "19.9 x 16.9 x 7.1mm",
            "Efficiency": "Up to 82%",
            "Switching Frequency": "350kHz",
            "Safety Standards": "UL 62368-1, EN 62368-1"
          },
          "features": [
            "3000VDC isolation voltage",
            "Dual output +15V/-8V for IGBT gate drive",
            "Low isolation capacitance 15pF",
            "High CMTI 15kV/µs",
            "Wide operating temperature -40°C to +105°C",
            "Compact SMD16 package",
            "Continuous barrier withstand voltage",
            "UL/EN 62368-1 certified"
          ],
          "applications": [
            "IGBT gate driver power supply",
            "Motor drive inverters",
            "Industrial power supplies",
            "Welding equipment",
            "UPS systems",
            "Renewable energy inverters"
          ],
          "compliance": ["UL", "CE", "RoHS"],
          "package": "SMD16",
          "mounting": "Surface mount",
          "stock": {
            "level": "In Stock",
            "quantity": 500,
            "minOrderQty": 1,
            "leadTime": "Same day shipping"
          },
          "pricing": {
            "currency": "USD",
            "unit": 18.50,
            "volumeDiscounts": [
              {"quantity": 10, "price": 17.00},
              {"quantity": 50, "price": 15.50},
              {"quantity": 100, "price": 14.00}
            ]
          },
          "faeReview": {
            "rating": 4.8,
            "review": "The QA151C3 is a reliable gate driver supply for IGBT applications. The +15V/-8V dual output is optimized for IGBT gate drive requirements - positive voltage to turn on, negative voltage for fast turn-off and noise immunity. 3000V isolation is sufficient for most 380V/480V motor drive applications. The 15pF isolation capacitance is excellent and minimizes common-mode current during switching. I've used this in several motor drive designs with switching frequencies up to 16kHz with good results. The SMD package is suitable for automated assembly. For higher voltage applications, consider the QA-R series with 6000V isolation.",
            "pros": ["Optimized IGBT voltages", "Low isolation capacitance", "Wide temperature range"],
            "cons": ["5V input only", "Not for SiC high dv/dt"],
            "recommendedApplications": ["Motor drives", "IGBT inverters", "Industrial drives"],
            "alternativeModels": ["QA152C3", "QA-R4G0315T"],
            "date": "2024-12-14"
          },
          "alternatives": [
            {
              "model": "RECOM R05P21503D",
              "manufacturer": "RECOM",
              "comparison": {
                "Output Power": "3W = 3W",
                "Output Voltage": "+15V/-8V = +15V/-8V",
                "Isolation": "3000V = 3000V",
                "Isolation Capacitance": "20pF > 15pF",
                "CMTI": "10kV/µs < 15kV/µs",
                "Temperature Range": "-40°C to +85°C < -40°C to +105°C",
                "Price": "$25 > $18.50"
              },
              "recommendation": "RECOM is well-known but higher capacitance, lower CMTI, narrower temperature range, and higher cost. Mornsun offers better specs and value."
            },
            {
              "model": "Traco TMR 3-0515D",
              "manufacturer": "Traco Power",
              "comparison": {
                "Output Power": "3W = 3W",
                "Output Voltage": "±15V > +15V/-8V",
                "Isolation": "1600V < 3000V",
                "Isolation Capacitance": "25pF > 15pF",
                "CMTI": "Not specified < 15kV/µs",
                "Temperature Range": "-40°C to +85°C < -40°C to +105°C",
                "Price": "$22 > $18.50"
              },
              "recommendation": "Traco has symmetrical ±15V but lower isolation and not gate-driver optimized. Mornsun is purpose-built for IGBT gate drive with better isolation."
            }
          ],
          "companionParts": [
            {
              "model": "LM150-23B24",
              "category": "AC/DC Switching Power Supplies",
              "relationship": "System power",
              "description": "Main system power supply providing 24V for control circuits"
            },
            {
              "model": "URB2405YMD-6WR3",
              "category": "DC/DC Converters",
              "relationship": "Input power",
              "description": "Generate 5V from 24V system bus for QA151C3 input"
            },
            {
              "model": "K7805-2000R3",
              "category": "DC/DC Converters",
              "relationship": "Control power",
              "description": "5V supply for microcontroller and control circuits"
            },
            {
              "model": "QA-R4G0315T",
              "category": "Gate Driver Power Supplies",
              "relationship": "Higher isolation",
              "description": "6000V isolation version for high-voltage applications"
            }
          ],
          "faqs": [
            {
              "question": "Why does the QA151C3 have +15V/-8V output instead of ±15V?",
              "answer": "QA151C3 output voltage optimization for IGBTs: IGBT gate drive requirements: Turn-on voltage - typically +15V for reliable conduction and low saturation voltage. Turn-off voltage - negative voltage (-5V to -10V) improves turn-off speed and dv/dt immunity. Zero voltage - insufficient for fast turn-off and noise immunity in high-power applications. Benefits of +15V/-8V: Faster turn-off - negative voltage extracts gate charge quickly. Better noise immunity - negative bias prevents false turn-on from dv/dt coupling. Lower switching losses - faster switching reduces switching losses. Industry standard - many gate driver ICs are designed for asymmetric supplies. Comparison with ±15V: ±15V provides +15V/-15V which works but is overkill for turn-off. -8V is sufficient for most IGBT applications while reducing supply complexity. Some applications using ±15V: Symmetrical supplies may be preferred for some gate driver ICs. Can use QA151C3 with adjusted gate resistors if ±15V required. Alternative models with ±15V available if specifically needed.",
              "decisionGuide": "+15V/-8V is optimized for IGBT gate drive. Use this configuration for best performance in IGBT applications.",
              "keywords": ["gate drive voltage", "IGBT turn-off", "negative bias"]
            },
            {
              "question": "How do I calculate the required power for gate driver supply?",
              "answer": "Gate driver power calculation: Power components: Gate charge power - P = Qg × Vgate × fsw. Qg = total gate charge from IGBT datasheet. Vgate = gate voltage swing (e.g., 23V for +15V/-8V). fsw = switching frequency. Quiescent power - driver IC quiescent current × supply voltage. Typically 10-50mW per driver. Calculation example: IGBT: Qg = 200nC, fsw = 10kHz. Gate power = 200nC × 23V × 10kHz = 46mW. Driver IC: 20mA quiescent at 23V = 460mW. Total per channel = 506mW. For 3-phase inverter with 6 IGBTs: Total = 6 × 506mW = 3.04W. Select QA151C3 (3W) with margin or use one supply per phase. Additional considerations: Include 20-30% margin for temperature and variations. Multiple IGBTs can share one supply if total power within rating. Separate supplies for high/low side may be preferred for layout. Include bootstrap diode losses if applicable.",
              "decisionGuide": "Calculate based on gate charge, switching frequency, and driver quiescent current. Add 30% margin for reliable operation.",
              "keywords": ["gate driver power", "gate charge", "power calculation"]
            }
          ]
        },
        {
          "id": "qa-r4g0315t",
          "model": "QA-R4G0315T",
          "name": "QA-R4G0315T SiC Gate Driver Power Supply",
          "description": "3W reinforced isolation DC/DC converter for SiC MOSFET gate drivers with 6000V isolation",
          "longDescription": "The QA-R4G0315T is a 3W reinforced isolation DC/DC converter specifically designed for SiC MOSFET gate driver applications. It features 6000VDC reinforced isolation, dual outputs (+15V/-4V) optimized for SiC gate drive, and very low isolation capacitance of 10pF typical. The high CMTI rating of 100kV/µs makes it ideal for high-speed SiC switching applications.",
          "status": "Active",
          "popularity": 5,
          "category": "IGBT/SiC Gate Driver Power Supplies",
          "subcategory": "SiC Driver Supplies",
          "series": "QA-R Series",
          "image": "/assets/brands/mornsun/products/qa-r4g0315t.jpg",
          "datasheet": "/assets/brands/mornsun/datasheets/qa-r4g0315t.pdf",
          "specifications": {
            "Input Voltage": "4.5-5.5VDC (5V nominal)",
            "Output Power": "3W",
            "Output Voltage": "+15V/-4V (dual output)",
            "Output Current": "+100mA/-100mA",
            "Isolation Voltage": "6000VDC reinforced",
            "Working Voltage": "2000VDC continuous",
            "Isolation Capacitance": "10pF typical",
            "CMTI": "100kV/µs minimum",
            "Operating Temperature": "-40°C to +105°C",
            "Package": "SMD16",
            "Dimensions": "19.9 x 16.9 x 7.5mm",
            "Efficiency": "Up to 80%",
            "Safety Standards": "UL 62368-1, EN 62368-1, UL 61800-5-1"
          },
          "features": [
            "6000VDC reinforced isolation",
            "2000VDC continuous working voltage",
            "Dual output +15V/-4V for SiC gate drive",
            "Ultra-low isolation capacitance 10pF",
            "Very high CMTI 100kV/µs",
            "Wide operating temperature -40°C to +105°C",
            "SiC MOSFET optimized",
            "UL 61800-5-1 certified for motor drives"
          ],
          "applications": [
            "SiC MOSFET gate driver power supply",
            "High-frequency inverters",
            "EV motor drives",
            "High-efficiency power supplies",
            "Renewable energy systems",
            "Traction inverters"
          ],
          "compliance": ["UL", "CE", "RoHS"],
          "package": "SMD16",
          "mounting": "Surface mount",
          "stock": {
            "level": "In Stock",
            "quantity": 300,
            "minOrderQty": 1,
            "leadTime": "Same day shipping"
          },
          "pricing": {
            "currency": "USD",
            "unit": 32.00,
            "volumeDiscounts": [
              {"quantity": 10, "price": 29.50},
              {"quantity": 50, "price": 27.00},
              {"quantity": 100, "price": 24.50}
            ]
          },
          "faeReview": {
            "rating": 4.9,
            "review": "The QA-R4G0315T is purpose-built for SiC MOSFET applications. The 6000V reinforced isolation and 2000V continuous working voltage handle the highest voltage systems including 800V EV applications. The 10pF isolation capacitance is exceptional and critical for high-speed SiC switching. Most importantly, the 100kV/µs CMTI rating handles the extreme dv/dt of SiC devices (up to 100V/ns) without issues. I've used this in EV traction inverter designs with switching frequencies of 20kHz and dv/dt of 50kV/µs with excellent reliability. The +15V/-4V output is optimized for SiC threshold voltages. This is my recommended supply for any SiC application.",
            "pros": ["Exceptional CMTI", "Ultra-low capacitance", "Reinforced isolation"],
            "cons": ["Higher cost", "5V input only"],
            "recommendedApplications": ["SiC inverters", "EV traction drives", "High-frequency power"],
            "alternativeModels": ["QA-R3G0315T", "QA151C3"],
            "date": "2024-12-16"
          },
          "alternatives": [
            {
              "model": "RECOM R05CT05D",
              "manufacturer": "RECOM",
              "comparison": {
                "Output Power": "3W = 3W",
                "Isolation": "5000V < 6000V",
                "Working Voltage": "1500V < 2000V",
                "Isolation Capacitance": "15pF > 10pF",
                "CMTI": "50kV/µs < 100kV/µs",
                "Temperature Range": "-40°C to +85°C < -40°C to +105°C",
                "Price": "$45 > $32"
              },
              "recommendation": "RECOM has lower isolation, capacitance, CMTI, and temperature range at higher cost. Mornsun is superior for SiC applications."
            },
            {
              "model": "Murata MGJ2D121505SC",
              "manufacturer": "Murata",
              "comparison": {
                "Output Power": "2W < 3W",
                "Isolation": "5300V < 6000V",
                "Working Voltage": "1414V < 2000V",
                "Isolation Capacitance": "15pF > 10pF",
                "CMTI": "50kV/µs < 100kV/µs",
                "Temperature Range": "-40°C to +85°C < -40°C to +105°C",
                "Price": "$38 > $32"
              },
              "recommendation": "Murata has lower power and specs at higher price. Mornsun offers better performance and value for SiC applications."
            }
          ],
          "companionParts": [
            {
              "model": "LM150-23B24",
              "category": "AC/DC Switching Power Supplies",
              "relationship": "System power",
              "description": "Main power supply for control electronics and gate driver input"
            },
            {
              "model": "URB2405YMD-6WR3",
              "category": "DC/DC Converters",
              "relationship": "Input power",
              "description": "Generate 5V from 24V for QA-R4G0315T input"
            },
            {
              "model": "QA151C3",
              "category": "Gate Driver Power Supplies",
              "relationship": "IGBT version",
              "description": "3000V version for IGBT applications in same system"
            },
            {
              "model": "LI120-20B24",
              "category": "DIN Rail Power Supplies",
              "relationship": "Test setup",
              "description": "DIN rail supply for lab test setups and evaluation"
            }
          ],
          "faqs": [
            {
              "question": "What makes QA-R4G0315T suitable for SiC MOSFETs vs IGBTs?",
              "answer": "QA-R4G0315T SiC optimization features: Higher isolation voltage - 6000V vs 3000V for IGBT supplies. SiC systems often operate at higher voltages (800V+ in EVs). Reinforced insulation - meets stringent safety requirements for high-voltage systems. Continuous working voltage - 2000V continuous rating for high-voltage operation. Lower isolation capacitance - 10pF vs 15pF typical. Critical for high dv/dt applications. Lower capacitance means less common-mode current. Higher CMTI - 100kV/µs vs 15kV/µs for IGBT supplies. Essential for SiC switching speeds (dv/dt up to 100V/ns). Prevents false triggering and ensures reliable operation. Optimized output voltage - +15V/-4V vs +15V/-8V for IGBTs. SiC MOSFETs have lower threshold voltage (1-3V vs 4-6V for IGBTs). -4V is sufficient for SiC turn-off and noise immunity. Higher negative voltage not needed and reduces efficiency. When to use QA-R4G0315T: SiC MOSFET applications with high dv/dt. Systems with >1000V DC bus voltage. High-reliability applications requiring reinforced insulation. EV and automotive applications. When IGBT supplies are sufficient: Standard IGBT applications (<20kV/µs dv/dt). Systems with <600V DC bus. Cost-sensitive applications. Lower voltage motor drives.",
              "decisionGuide": "Use QA-R4G0315T for SiC MOSFETs and high-voltage applications. Use QA151C3 for standard IGBT applications to optimize cost.",
              "keywords": ["SiC MOSFET", "SiC vs IGBT", "high dv/dt"]
            },
            {
              "question": "What safety certifications does QA-R4G0315T have?",
              "answer": "QA-R4G0315T safety certifications: UL 62368-1 - North American safety standard for audio/video and IT equipment. EN 62368-1 - European safety standard. IEC 62368-1 - International safety standard. UL 61800-5-1 - Adjustable speed electrical power drive systems. EN 61800-5-1 - European equivalent. Reinforced insulation - certified for reinforced (double) insulation. 6000V working voltage - certified for 6000V DC working voltage. System voltage - suitable for systems up to 1000V AC or 1500V DC. Certification benefits: Global acceptance - certifications recognized worldwide. Safety assurance - independent third-party verification. Liability protection - using certified components reduces product liability risk.",
              "decisionGuide": "Comprehensive safety certifications for global acceptance. Contact us for certification documentation.",
              "keywords": ["safety certifications", "UL certification", "IEC certification"]
            }
          ]
        }
      ]
    }
  ]
];

// Add categories to productsData
productsData.categories.push(...additionalCategories);

fs.writeFileSync(path.join(brandDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✓ products.json created');

// Continue with solutions.json
console.log('Creating solutions.json...');

const solutionsData = {
  "solutions": [
    {
      "id": "industrial-automation-power",
      "slug": "industrial-automation-power",
      "title": "Industrial Automation Power Solutions",
      "subtitle": "Reliable Power Supply Solutions for Factory Automation and Process Control",
      "description": "Comprehensive power supply solutions for industrial automation including PLC systems, HMIs, sensors, and actuators with high reliability and wide temperature operation.",
      "longDescription": "Industrial automation systems require reliable, robust power supplies that can operate in challenging factory environments. Mornsun's industrial power solutions provide the reliability, efficiency, and protection features needed for modern automation systems. Our solutions cover the complete power chain from AC mains to point-of-load conversion, with products designed for DIN rail mounting in control panels, PCB mounting in equipment, and distributed power architectures. All products feature wide operating temperature ranges, comprehensive protection, and industrial-grade reliability.",
      "image": "/assets/brands/mornsun/solutions/industrial-automation-power.jpg",
      "icon": "factory",
      "industries": ["Industrial Automation", "Factory Automation", "Process Control"],
      "applications": ["PLC Systems", "HMI Panels", "Sensor Networks", "Motor Control", "Robotics"],
      "featured": true,
      "order": 1,
      "components": [
        {
          "type": "AC/DC Power Supply",
          "productId": "li120-20b24",
          "model": "LI120-20B24",
          "role": "Primary Power Supply",
          "description": "120W DIN rail power supply providing 24VDC system power for control panel"
        },
        {
          "type": "DC/DC Converter",
          "productId": "urb2412ymd-20wr3",
          "model": "URB2412YMD-20WR3",
          "role": "Voltage Conversion",
          "description": "Isolated 24V to 12V converter for sensors and analog circuits"
        },
        {
          "type": "DC/DC Converter",
          "productId": "k7805-2000r3",
          "model": "K7805-2000R3",
          "role": "Point of Load",
          "description": "5V regulator for microcontroller and digital circuits"
        },
        {
          "type": "Gate Driver Supply",
          "productId": "qa151c3",
          "model": "QA151C3",
          "role": "Motor Drive Power",
          "description": "Isolated power for IGBT gate drivers in motor control"
        }
      ],
      "benefits": [
        {
          "title": "High Reliability",
          "description": "MTBF exceeding 300,000 hours ensures continuous operation",
          "icon": "shield-check"
        },
        {
          "title": "Wide Temperature Range",
          "description": "Operation from -40°C to +85°C handles harsh industrial environments",
          "icon": "thermometer"
        },
        {
          "title": "Comprehensive Protection",
          "description": "OVP, OCP, OTP, and SCP protect equipment and personnel",
          "icon": "lock"
        },
        {
          "title": "Easy Installation",
          "description": "DIN rail mounting and standard packages simplify panel assembly",
          "icon": "wrench"
        }
      ],
      "technicalSpecs": {
        "Input Voltage": "85-264VAC universal input",
        "System Voltage": "24VDC standard industrial voltage",
        "Efficiency": "Up to 92% for reduced heat generation",
        "Protection": "Complete OVP, OCP, OTP, SCP protection",
        "Temperature": "-40°C to +85°C operating range",
        "Isolation": "3000V AC isolation for safety"
      },
      "caseStudy": {
        "title": "Automotive Parts Manufacturing Line",
        "description": "Complete power solution for automated manufacturing line with 50+ PLCs, 200+ sensors, and 20+ motor drives",
        "results": [
          "99.9% uptime achieved over 2 years",
          "Zero power supply related failures",
          "30% reduction in panel heat generation vs previous solution"
        ]
      },
      "relatedSolutions": ["motor-drive-power", "renewable-energy-power"],
      "resources": [
        {
          "type": "Application Note",
          "title": "Industrial Control Panel Power Design Guide",
          "link": "/mornsun/support/industrial-panel-power-guide.html"
        },
        {
          "type": "White Paper",
          "title": "Power Supply Reliability in Factory Automation",
          "link": "/mornsun/support/automation-reliability-whitepaper.html"
        }
      ],
      "seoTitle": "Industrial Automation Power Supply Solutions | Mornsun",
      "seoDescription": "Reliable power supply solutions for industrial automation including PLC systems, sensors, and motor drives. DIN rail power supplies and DC/DC converters for factory automation.",
      "faqs": [
        {
          "question": "What power supply architecture is recommended for industrial automation?",
          "answer": "Recommended industrial automation power architecture: Tier 1 - AC/DC conversion: Use DIN rail power supply (LI series) to generate 24VDC system bus. 24V is the industrial standard for PLCs, sensors, and actuators. Tier 2 - DC distribution: Distribute 24V throughout panel using proper wire sizing. Use circuit breakers or fuses for branch protection. Tier 3 - Point of load conversion: Use DC/DC converters (URB series) to generate isolated secondary voltages (12V, 5V). Use non-isolated converters (K78 series) for on-board regulation. Special requirements: Motor drives - use isolated gate driver supplies (QA series) for IGBT/SiC gate drivers. Analog circuits - use isolated converters to prevent ground loops and noise. Communication - isolated supplies for fieldbus and network interfaces. Benefits of this architecture: Standardization - 24V standard simplifies component selection. Flexibility - easy to add or modify loads. Reliability - distributed architecture limits fault impact. Efficiency - high-efficiency conversion minimizes heat.",
          "decisionGuide": "Use 24V DIN rail supply as system bus, with DC/DC converters for secondary voltages. Contact us for architecture design assistance.",
          "keywords": ["power architecture", "industrial power design", "24V system"]
        },
        {
          "question": "How do I ensure power supply reliability in industrial environments?",
          "answer": "Ensuring power supply reliability in industrial environments: Environmental considerations: Temperature - select supplies with adequate temperature range for enclosure. Consider derating at high temperatures. Ventilation - ensure adequate airflow or use convection-cooled supplies. Vibration - use supplies with adequate vibration rating for the application. Protection - use IP-rated supplies for dusty or wet environments. Electrical design: Input protection - use appropriate circuit breakers and fuses. Consider surge protection for outdoor applications. Output protection - fuse each branch circuit to limit fault impact. Use current-limited supplies where appropriate. Wiring - use proper wire gauges to minimize voltage drop. Separate power and signal wiring to prevent noise coupling. Grounding - implement proper grounding scheme. Use isolated supplies where ground loops are a concern. Maintenance and monitoring: DC OK monitoring - use supplies with power-good outputs for monitoring. Temperature monitoring - monitor enclosure temperature for thermal management. Preventive maintenance - inspect connections and clean filters regularly. Spare inventory - maintain spare supplies for critical applications.",
          "decisionGuide": "Select appropriate temperature rating, implement proper protection, and monitor power status for maximum reliability.",
          "keywords": ["power reliability", "industrial environment", "system design"]
        }
      ]
    },
    {
      "id": "motor-drive-power",
      "slug": "motor-drive-power",
      "title": "Motor Drive and Inverter Power Solutions",
      "subtitle": "Isolated Power Solutions for IGBT and SiC Motor Drives",
      "description": "High-isolation power supply solutions for motor drive inverters, including gate driver supplies with high CMTI for reliable switching of IGBT and SiC power devices.",
      "longDescription": "Modern motor drives and inverters require specialized isolated power supplies for gate drivers. The high voltage switching of IGBT and SiC devices demands power supplies with high isolation voltage, low isolation capacitance, and high Common Mode Transient Immunity (CMTI). Mornsun's gate driver power supplies are specifically designed for these demanding applications, providing reliable isolation for systems ranging from small industrial drives to high-power EV traction inverters. Our solutions include supplies optimized for both IGBT and SiC MOSFET applications.",
      "image": "/assets/brands/mornsun/solutions/motor-drive-power.jpg",
      "icon": "zap",
      "industries": ["Industrial Drives", "EV Traction", "Renewable Energy"],
      "applications": ["AC Motor Drives", "Servo Systems", "EV Traction Inverters", "Pump Drives", "Fan Drives"],
      "featured": true,
      "order": 2,
      "components": [
        {
          "type": "AC/DC Power Supply",
          "productId": "lm150-23b24",
          "model": "LM150-23B24",
          "role": "Control Power Supply",
          "description": "150W AC/DC supply for control electronics and auxiliary circuits"
        },
        {
          "type": "DC/DC Converter",
          "productId": "urb2412ymd-20wr3",
          "model": "URB2412YMD-20WR3",
          "role": "Isolation Barrier",
          "description": "Isolated converter for control-to-power stage isolation"
        },
        {
          "type": "Gate Driver Supply",
          "productId": "qa151c3",
          "model": "QA151C3",
          "role": "IGBT Gate Drive",
          "description": "3000V isolated supply for IGBT gate drivers"
        },
        {
          "type": "Gate Driver Supply",
          "productId": "qa-r4g0315t",
          "model": "QA-R4G0315T",
          "role": "SiC Gate Drive",
          "description": "6000V reinforced isolation for SiC MOSFET gate drivers"
        }
      ],
      "benefits": [
        {
          "title": "High Isolation Voltage",
          "description": "3000V to 6000V isolation handles high-voltage motor drive applications",
          "icon": "shield"
        },
        {
          "title": "High CMTI",
          "description": "Up to 100kV/µs CMTI for reliable SiC MOSFET switching",
          "icon": "activity"
        },
        {
          "title": "Low Capacitance",
          "description": "As low as 10pF isolation capacitance minimizes common-mode current",
          "icon": "minimize"
        },
        {
          "title": "Safety Certified",
          "description": "UL 61800-5-1 certified for adjustable speed electrical power drive systems",
          "icon": "check-circle"
        }
      ],
      "technicalSpecs": {
        "Isolation Voltage": "3000V to 6000V DC",
        "Working Voltage": "Up to 2000V continuous",
        "CMTI": "15kV/µs to 100kV/µs",
        "Isolation Capacitance": "10pF to 15pF",
        "Output Voltage": "+15V/-8V for IGBT, +15V/-4V for SiC",
        "Temperature Range": "-40°C to +105°C"
      },
      "caseStudy": {
        "title": "EV Traction Inverter",
        "description": "800V EV traction inverter using SiC MOSFETs with 20kHz switching frequency",
        "results": [
          "Successfully handles 50kV/µs dv/dt switching",
          "Zero gate driver supply failures in 100,000+ km testing",
          "Meets automotive AEC-Q100 qualification requirements"
        ]
      },
      "relatedSolutions": ["industrial-automation-power", "renewable-energy-power"],
      "resources": [
        {
          "type": "Application Note",
          "title": "Gate Driver Power Supply Selection Guide",
          "link": "/mornsun/support/gate-driver-selection-guide.html"
        },
        {
          "type": "White Paper",
          "title": "SiC MOSFET Gate Drive Requirements",
          "link": "/mornsun/support/sic-gate-drive-whitepaper.html"
        }
      ],
      "seoTitle": "Motor Drive Gate Driver Power Supplies | Mornsun IGBT SiC",
      "seoDescription": "High-isolation power supplies for IGBT and SiC gate drivers in motor drive applications. 3000V-6000V isolation with high CMTI for reliable switching.",
      "faqs": [
        {
          "question": "How do I select between IGBT and SiC gate driver supplies?",
          "answer": "IGBT vs SiC gate driver supply selection: Use IGBT supplies (QA151C3) when: Standard industrial motor drives with IGBT power devices. Switching frequency below 20kHz. DC bus voltage below 600V. dv/dt below 20kV/µs. Cost optimization is important. Use SiC supplies (QA-R4G0315T) when: SiC MOSFET power devices are used. Switching frequency above 20kHz (up to 100kHz). DC bus voltage above 600V (up to 1200V). dv/dt above 20kV/µs (up to 100kV/µs). High reliability requirements (automotive, aerospace). Key differences: Isolation voltage - SiC supplies have 6000V vs 3000V for IGBT. CMTI - SiC supplies rated 100kV/µs vs 15kV/µs for IGBT. Isolation capacitance - SiC supplies have 10pF vs 15pF for IGBT. Output voltage - SiC optimized for +15V/-4V vs +15V/-8V for IGBT. Cost - SiC supplies are higher cost but necessary for high-performance applications. Recommendation: Use QA151C3 for standard IGBT applications to optimize cost. Use QA-R4G0315T for SiC applications or when highest reliability is required.",
          "decisionGuide": "Use QA151C3 for IGBT drives, QA-R4G0315T for SiC drives. Select based on switching speed and system voltage.",
          "keywords": ["IGBT vs SiC", "gate driver selection", "motor drive"]
        },
        {
          "question": "What layout considerations are important for gate driver supplies?",
          "answer": "Gate driver supply PCB layout guidelines: Isolation barrier: Maintain creepage and clearance distances per safety standards. Use slots or barriers on PCB to increase creepage distance. Keep high-voltage and low-voltage circuits well separated. Input side (primary): Keep input traces short and wide to minimize inductance. Place input capacitor close to supply input pins. Connect input ground to control ground plane. Output side (secondary): Place output capacitors close to supply output pins. Connect output ground to gate driver IC ground. Minimize loop area of output connections. Keep output traces away from high-voltage switching nodes. General recommendations: Use 4-layer PCB with dedicated ground planes. Keep supply away from magnetic components (inductors, transformers). Avoid running traces under the supply on adjacent layers. Follow manufacturer's layout recommendations for specific part. Thermal considerations: Ensure adequate copper area for thermal dissipation. Use thermal vias to spread heat to inner layers. Consider temperature derating in high-temperature applications.",
          "decisionGuide": "Maintain proper isolation spacing, minimize trace inductance, and follow manufacturer layout guidelines for reliable operation.",
          "keywords": ["PCB layout", "isolation barrier", "gate driver design"]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('✓ solutions.json created');

// Create support.json
console.log('Creating support.json...');

const supportData = {
  "articles": [
    {
      "id": "mornsun-acdc-selection-guide",
      "slug": "mornsun-acdc-selection-guide",
      "title": "AC/DC Power Supply Selection Guide",
      "category": "Product Selection",
      "description": "Comprehensive guide to selecting the right AC/DC power supply for your application",
      "content": "This guide covers the key factors in selecting AC/DC power supplies including power calculation, input voltage requirements, environmental considerations, and safety certifications.",
      "author": "Mornsun FAE Team",
      "date": "2024-12-01",
      "readTime": "15 min",
      "tags": ["AC/DC", "power supply selection", "design guide"],
      "relatedProducts": ["lm150-23b24", "lm100-23b12"],
      "seoTitle": "AC/DC Power Supply Selection Guide | Mornsun",
      "seoDescription": "Learn how to select the right AC/DC power supply for your application. Covers power calculation, input requirements, and environmental factors."
    },
    {
      "id": "mornsun-dcdc-selection-guide",
      "slug": "mornsun-dcdc-selection-guide",
      "title": "DC/DC Converter Selection Guide",
      "category": "Product Selection",
      "description": "Guide to selecting DC/DC converters including isolated vs non-isolated, input range, and application considerations",
      "content": "This guide explains how to select DC/DC converters for various applications including isolated vs non-isolated selection, input voltage range considerations, and output requirements.",
      "author": "Mornsun FAE Team",
      "date": "2024-12-05",
      "readTime": "12 min",
      "tags": ["DC/DC", "converter selection", "design guide"],
      "relatedProducts": ["urb2412ymd-20wr3", "k7805-2000r3"],
      "seoTitle": "DC/DC Converter Selection Guide | Mornsun",
      "seoDescription": "Learn how to select DC/DC converters for your application. Covers isolated vs non-isolated, input range, and output requirements."
    },
    {
      "id": "mornsun-din-rail-selection-guide",
      "slug": "mornsun-din-rail-selection-guide",
      "title": "DIN Rail Power Supply Selection Guide",
      "category": "Product Selection",
      "description": "Guide to selecting DIN rail power supplies for industrial control panels",
      "content": "This guide covers DIN rail power supply selection for industrial control panels including power calculation, PFC requirements, and panel layout considerations.",
      "author": "Mornsun FAE Team",
      "date": "2024-12-10",
      "readTime": "10 min",
      "tags": ["DIN rail", "panel power", "industrial control"],
      "relatedProducts": ["li120-20b24", "li60-20b12"],
      "seoTitle": "DIN Rail Power Supply Selection Guide | Mornsun",
      "seoDescription": "Learn how to select DIN rail power supplies for industrial control panels. Covers power calculation and panel layout."
    },
    {
      "id": "mornsun-gate-driver-selection-guide",
      "slug": "mornsun-gate-driver-selection-guide",
      "title": "Gate Driver Power Supply Selection Guide",
      "category": "Product Selection",
      "description": "Technical guide to selecting isolated power supplies for IGBT and SiC gate drivers",
      "content": "This technical guide covers the selection of isolated power supplies for gate driver applications including isolation requirements, CMTI considerations, and layout guidelines.",
      "author": "Mornsun FAE Team",
      "date": "2024-12-15",
      "readTime": "20 min",
      "tags": ["gate driver", "IGBT", "SiC", "isolation"],
      "relatedProducts": ["qa151c3", "qa-r4g0315t"],
      "seoTitle": "Gate Driver Power Supply Selection Guide | Mornsun",
      "seoDescription": "Technical guide to selecting isolated power supplies for IGBT and SiC gate drivers. Covers isolation, CMTI, and layout."
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✓ support.json created');

// Create news.json (can be empty initially)
const newsData = {
  "news": []
};

fs.writeFileSync(path.join(brandDir, 'news.json'), JSON.stringify(newsData, null, 2));
console.log('✓ news.json created');

console.log('\n========================================');
console.log('Mornsun brand data files created successfully!');
console.log('========================================');
console.log('Files created:');
console.log('- brand.json');
console.log('- products.json (4 categories, 8 products)');
console.log('- solutions.json (2 solutions)');
console.log('- support.json (4 articles)');
console.log('- news.json');
console.log('========================================');
