const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'mornsun');

console.log('Adding missing product categories to products.json...');
let productsData = JSON.parse(fs.readFileSync(path.join(brandDir, 'products.json'), 'utf8'));

// Define additional categories
const additionalCategories = [
  {
    "id": "dc-dc-converters",
    "slug": "dc-dc-converters",
    "name": "DC/DC Converters",
    "description": "Isolated and non-isolated DC/DC converters with wide input voltage ranges and high efficiency for on-board power conversion.",
    "longDescription": "Mornsun DC/DC converters provide efficient voltage conversion for applications requiring isolation, voltage step-up/down, or noise immunity. The product range includes isolated converters with 1500V to 6000V isolation, and non-isolated POL (Point of Load) converters. Input voltage ranges cover narrow (2:1) to ultra-wide (4:1) ratios, accommodating battery, industrial bus, and distributed power systems. Output power ranges from 0.25W to 1500W with single, dual, and triple output options. These converters feature high efficiency up to 92%, compact SIP, DIP, and SMD packages, and extended temperature operation. As an authorized distributor, we provide technical support for converter selection and integration.",
    "parameters": ["Input Voltage", "Output Power", "Output Voltage", "Isolation Voltage", "Efficiency", "Package"],
    "applications": ["Industrial Control", "Telecommunications", "Medical Equipment", "Electric Vehicles", "Data Communications"],
    "series": [
      {
        "name": "URB Series",
        "description": "Wide input isolated DC/DC converters with 4:1 input range for industrial applications",
        "inputRange": "9-36V, 18-75V, 36-160V",
        "features": "Wide input, high isolation, compact package"
      },
      {
        "name": "K78 Series",
        "description": "Non-isolated switching regulators as high-efficiency LDO replacement",
        "inputRange": "4.75V-36V",
        "features": "High efficiency, low cost, pin-compatible with 78xx"
      }
    ],
    "selectionGuide": {
      "title": "DC/DC Converter Selection Guide",
      "description": "Learn how to select the right DC/DC converter for your application including isolated vs non-isolated selection, input range considerations, and output requirements.",
      "articleId": "mornsun-dcdc-selection-guide",
      "articleLink": "/mornsun/support/mornsun-dcdc-selection-guide.html"
    },
    "selectionGuideLink": "/mornsun/support/mornsun-dcdc-selection-guide.html",
    "faqs": [
      {
        "question": "When should I use isolated vs non-isolated DC/DC converters?",
        "answer": "Isolated DC/DC converters provide galvanic isolation between input and output, which is required for safety isolation, breaking ground loops, voltage level shifting, and noise immunity in sensitive circuits. Non-isolated converters are used when input and output share common ground, suitable for on-board voltage regulation, battery-powered devices, and cost-sensitive applications. Isolated converters offer higher safety and noise immunity but at higher cost and slightly lower efficiency. Non-isolated converters are more compact and efficient but lack isolation.",
        "decisionGuide": "Choose isolated converters for safety-critical applications or when noise immunity is required. Choose non-isolated for cost-sensitive on-board regulation where common ground is acceptable.",
        "keywords": ["isolated converter", "non-isolated converter", "DC/DC selection"]
      },
      {
        "question": "What is the difference between 2:1 and 4:1 input range?",
        "answer": "2:1 input range covers input voltage variations of 2:1 ratio, such as 18-36V or 36-72V, suitable for systems with stable input voltage like regulated buses. 4:1 input range covers variations of 4:1 ratio, such as 9-36V or 18-75V, suitable for battery applications with wide voltage swing. Use 2:1 for stable DC buses or regulated supplies to optimize cost. Use 4:1 for battery-powered applications where voltage varies significantly during charge and discharge cycles.",
        "decisionGuide": "Use 4:1 wide input for battery applications. Use 2:1 for stable DC bus applications to optimize cost.",
        "keywords": ["input range", "2:1 vs 4:1", "battery applications"]
      },
      {
        "question": "What isolation voltage do I need for my application?",
        "answer": "Isolation voltage requirements depend on your application: 1500V isolation is sufficient for most industrial control applications with 24V or 48V systems. 3000V isolation is recommended for higher voltage industrial systems and medical equipment. 6000V isolation is required for high-voltage motor drives, EV applications, and medical equipment with patient contact. Always check safety standards for your specific application.",
        "decisionGuide": "Choose 1500V for standard industrial, 3000V for high-voltage industrial/medical, 6000V for EV and high-voltage medical.",
        "keywords": ["isolation voltage", "safety isolation", "isolation requirements"]
      },
      {
        "question": "How do I select the right package type?",
        "answer": "Package selection depends on your application: SIP (Single In-line Package) is compact and suitable for space-constrained applications. DIP (Dual In-line Package) offers easy through-hole mounting and good for prototyping. SMD (Surface Mount Device) is ideal for automated assembly and high-volume production. Consider mounting requirements, thermal considerations, and manufacturing process when selecting package type.",
        "decisionGuide": "Choose SIP for compact designs, DIP for prototyping, SMD for high-volume automated assembly.",
        "keywords": ["package type", "SIP", "DIP", "SMD"]
      },
      {
        "question": "What efficiency can I expect from Mornsun DC/DC converters?",
        "answer": "Mornsun DC/DC converters offer high efficiency ranging from 85% to 92% depending on the model and load conditions. Isolated converters typically have slightly lower efficiency (85-89%) due to transformer losses. Non-isolated converters can achieve up to 92% efficiency. Higher efficiency means less heat generation, lower operating costs, and reduced cooling requirements. Efficiency is typically specified at nominal input voltage and full load.",
        "decisionGuide": "Choose higher efficiency models for battery-powered or thermally constrained applications.",
        "keywords": ["efficiency", "power consumption", "heat generation"]
      }
    ],
    "products": [
      {
        "id": "urb2412ymd-20wr3",
        "partNumber": "URB2412YMD-20WR3",
        "model": "URB2412YMD-20WR3",
        "name": "URB2412YMD-20WR3 DC/DC Converter",
        "shortDescription": "20W isolated DC/DC converter with 4:1 wide input (9-36V), 24V to 12V conversion, 1500V isolation.",
        "description": "20W isolated DC/DC converter with 4:1 wide input range, 24V to 12V conversion",
        "longDescription": "The URB2412YMD-20WR3 is a 20W isolated DC/DC converter featuring 4:1 wide input range (9-36VDC), 12VDC output at 1.67A, and 1500VDC isolation. This compact converter is designed for industrial applications with -40°C to +85°C operating temperature range. It provides high efficiency up to 89% and includes input undervoltage protection, output overcurrent protection, and short circuit protection.",
        "descriptionParagraphs": [
          "The URB2412YMD-20WR3 provides reliable isolated power conversion for industrial applications. With its 4:1 ultra-wide input range of 9-36VDC, this converter can operate from 24V battery systems, industrial buses, or other variable DC sources.",
          "Featuring 1500VDC isolation, this converter provides excellent noise immunity and safety separation between input and output circuits. The compact DIP24 package allows easy integration into space-constrained designs.",
          "High efficiency of up to 89% minimizes heat generation and extends battery life in portable applications. Comprehensive protection features ensure reliable operation in demanding industrial environments."
        ],
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
          "review": "The URB2412YMD-20WR3 is my go-to converter for 24V to 12V conversion in industrial applications. The 4:1 input range handles battery voltage swings perfectly - from 9V (deep discharge) to 36V (transient). The 1500V isolation is sufficient for most industrial applications. I have used this in battery backup systems, vehicle electronics, and distributed power architectures with excellent results. The DIP24 package is easy to handle and the no-external-components design simplifies PCB layout. Efficiency is excellent at 89%. The -40°C rating makes it suitable for outdoor and vehicle applications.",
          "pros": ["Wide 4:1 input range", "Excellent efficiency", "Wide temperature range"],
          "cons": ["Fixed output voltage", "No remote on/off"],
          "recommendedApplications": ["Battery systems", "Vehicle electronics", "Industrial distributed power"],
          "alternativeModels": ["URB2415YMD-20WR3", "URB2405YMD-20WR3"],
          "date": "2024-12-18"
        },
        "alternativeParts": [
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
            "answer": "URB2412YMD-20WR3 input capacitor recommendations: Minimum capacitor is 10µF low ESR electrolytic or ceramic capacitor. Recommended value is 22µF to 47µF for stable operation. Capacitor type should be Low ESR electrolytic, tantalum, or ceramic (X5R/X7R). Voltage rating should be at least 1.5x maximum input voltage (use 50V or 63V for 36V max input). Place capacitor close to input pins to minimize inductance.",
            "decisionGuide": "Use 22-47µF low ESR capacitor close to input pins. Contact us for specific application recommendations.",
            "keywords": ["input capacitor", "external components", "input filtering"]
          },
          {
            "question": "Can URB2412YMD-20WR3 start at 9V input with full load?",
            "answer": "URB2412YMD-20WR3 is guaranteed to start at 9V input at full load (20W). The converter starts when input exceeds undervoltage lockout (UVLO) threshold. UVLO hysteresis is typically 0.5V to prevent oscillation at threshold. For battery applications, ensure battery can deliver required current at low voltage and use adequate wire gauge to minimize voltage drop.",
            "decisionGuide": "Guaranteed to start at 9V with full load. Ensure input source can deliver required current at minimum voltage.",
            "keywords": ["startup voltage", "undervoltage lockout", "9V operation"]
          },
          {
            "question": "What is the ripple and noise specification?",
            "answer": "The URB2412YMD-20WR3 has typical output ripple of 50mV peak-to-peak at nominal input and full load. Ripple varies with input voltage and load conditions. For applications requiring lower ripple, add external output capacitors or use LC filters. The switching frequency is 300kHz which helps minimize ripple while maintaining efficiency.",
            "decisionGuide": "Standard ripple suitable for most applications. Add external filtering for noise-sensitive circuits.",
            "keywords": ["ripple", "noise", "output filtering"]
          },
          {
            "question": "Can I use multiple converters in parallel?",
            "answer": "URB2412YMD-20WR3 is not designed for direct parallel operation as it does not include active current sharing. For higher power requirements, use a single higher power converter or distribute loads among multiple converters. Each converter should have its own input and output capacitors.",
            "decisionGuide": "Not recommended for parallel operation. Use higher power single converter or separate load distribution.",
            "keywords": ["parallel operation", "current sharing", "higher power"]
          },
          {
            "question": "What is the isolation capacitance?",
            "answer": "The URB2412YMD-20WR3 has typical isolation capacitance of 20pF. Low isolation capacitance is important for applications with high dv/dt on the input side to minimize common-mode current coupling through the isolation barrier. This makes the converter suitable for noisy industrial environments.",
            "decisionGuide": "Low isolation capacitance suitable for noisy environments. Contact us for applications with specific isolation requirements.",
            "keywords": ["isolation capacitance", "common mode", "noise immunity"]
          }
        ]
      },
      {
        "id": "k7805-2000r3",
        "partNumber": "K7805-2000R3",
        "model": "K7805-2000R3",
        "name": "K7805-2000R3 Non-Isolated DC/DC Converter",
        "shortDescription": "High-efficiency non-isolated switching regulator, 5V 2A output, pin-compatible with 7805 linear regulator.",
        "description": "High-efficiency non-isolated switching regulator providing 5V output at 2A, LDO replacement",
        "longDescription": "The K7805-2000R3 is a high-efficiency non-isolated switching regulator providing 5V output at 2A (10W). It features wide input voltage range (6.5V to 32V), high efficiency up to 95%, and compact SIP package. This converter is designed as a high-efficiency replacement for 78xx linear regulators, offering much better efficiency and lower heat generation.",
        "descriptionParagraphs": [
          "The K7805-2000R3 is an excellent replacement for 7805 linear regulators. At 95% efficiency versus 40-50% for linear regulators, it generates significantly less heat and reduces power consumption.",
          "The pin compatibility with 78xx series makes it a drop-in replacement in many applications. Simply remove the old linear regulator and install the K7805 for immediate efficiency improvement.",
          "The wide 6.5-32V input range handles everything from 9V to 24V systems. 2A output current is sufficient for most microcontroller and sensor applications."
        ],
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
          "review": "The K7805-2000R3 is an excellent replacement for 7805 linear regulators. At 95% efficiency versus 40-50% for linear regulators, it generates significantly less heat. I have used this to upgrade legacy designs where the 7805 was running too hot. The pin compatibility makes it a drop-in replacement - just remove the old regulator and solder this in. The wide 6.5-32V input range handles everything from 9V to 24V systems. 2A output is sufficient for most microcontroller and sensor applications. Highly recommended for any new design that would use a linear regulator.",
          "pros": ["Excellent efficiency", "Drop-in replacement", "Wide input range"],
          "cons": ["Non-isolated only", "Slightly higher cost than linear"],
          "recommendedApplications": ["Microcontroller power", "Linear regulator replacement", "Battery systems"],
          "alternativeModels": ["K7803-1000R3", "K7809-2000R3"],
          "date": "2024-12-20"
        },
        "alternativeParts": [
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
            "answer": "Yes, K7805 uses same pinout as 78xx series (Input, GND, Output). The SIP3 package is smaller than TO-220 but taller. No heat sink is typically needed due to high efficiency. Add optional 10µF capacitors on input and output for best performance. The wide input voltage range and higher output current make it superior to standard 7805.",
            "decisionGuide": "Excellent drop-in replacement for 7805 with much better efficiency. PCB footprint modification may be required.",
            "keywords": ["7805 replacement", "linear regulator replacement", "pin compatible"]
          },
          {
            "question": "What is the efficiency advantage over linear regulators?",
            "answer": "Linear regulator efficiency is approximately (Vout/Vin) × 100%. For 5V output from 12V input, efficiency is only 42%. K7805 provides 93% efficiency regardless of input voltage. This means linear regulator wastes 7W as heat at 1A load, while K7805 wastes only 0.35W. Benefits include lower power consumption, no heat sink required, cooler operation, and smaller size.",
            "decisionGuide": "K7805 is superior for most applications. Use linear regulators only for extreme noise-sensitive or cost-sensitive applications.",
            "keywords": ["efficiency comparison", "switching vs linear", "heat generation"]
          },
          {
            "question": "Do I need a heat sink with K7805-2000R3?",
            "answer": "In most applications, no heat sink is required due to the high 95% efficiency. At 2A output with 12V input, power dissipation is only about 0.5W. The SIP3 package can handle this without additional cooling. For high ambient temperatures or continuous full-load operation, ensure adequate airflow.",
            "decisionGuide": "No heat sink needed for most applications. Ensure adequate airflow for high temperature environments.",
            "keywords": ["heat sink", "thermal", "cooling"]
          },
          {
            "question": "What is the dropout voltage?",
            "answer": "K7805-2000R3 is a switching regulator, not linear, so it does not have dropout voltage in the traditional sense. It can regulate 5V output from input voltage as low as 6.5V. The minimum input voltage is determined by the converter's operating range, not dropout. This is a significant advantage over linear regulators which require input voltage at least 2-3V above output.",
            "decisionGuide": "Can operate with input only 1.5V above output. Much better than linear regulators for low headroom applications.",
            "keywords": ["dropout voltage", "minimum input", "headroom"]
          },
          {
            "question": "Is the output voltage adjustable?",
            "answer": "K7805-2000R3 has fixed 5V output and is not adjustable. For other output voltages, consider other K78 series products: K7803 for 3.3V, K7809 for 9V, K7812 for 12V, K7815 for 15V. Each provides fixed output voltage with same high efficiency and pin compatibility.",
            "decisionGuide": "Fixed output only. Choose appropriate K78 model for required voltage or use adjustable DC/DC for variable output.",
            "keywords": ["fixed output", "adjustable", "output voltage"]
          }
        ]
      }
    ]
  }
];

// Add categories to productsData
productsData.categories.push(...additionalCategories);

fs.writeFileSync(path.join(brandDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✓ Added DC/DC Converters category with 2 products');
console.log('✓ products.json updated successfully');
console.log('Total categories now: ' + productsData.categories.length);
