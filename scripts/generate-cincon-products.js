#!/usr/bin/env node
/**
 * Generate Cincon products.json with complete data
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'cincon');

const productsData = {
  "seoTitle": "Cincon Power Modules - Product Catalog | LiTong Distributor",
  "seoDescription": "Browse Cincon DC-DC converters, AC-DC power modules, and medical power supplies. Technical specifications, pricing, and availability from authorized distributor.",
  "seoKeywords": [
    "Cincon products",
    "Cincon catalog",
    "Cincon DC-DC distributor",
    "Cincon power module",
    "Cincon converter selection"
  ],
  "faqs": [
    {
      "question": "What are the most popular Cincon DC-DC converter series?",
      "answer": "Cincon's most popular DC-DC converter series include the EC2A series (1W, 2:1 input, SIP package) for cost-sensitive applications, the EC3A series (3W, 2:1 input, SIP/DIP) for general industrial use, the EC4A series (4W, 4:1 input) for battery applications, and the EC6A series (6W, 2:1 input) for higher power needs. For medical applications, the EC2M and EC3M series offer 2xMOPP isolation. For railway applications, the EC7A series provides EN 50155 certification. Each series is optimized for specific applications with appropriate features, certifications, and price points. Our sales team can help you select the best series for your requirements based on power rating, input range, and certification needs.",
      "decisionGuide": "Contact our sales team to discuss which Cincon series best fits your application requirements and budget.",
      "keywords": ["Cincon series", "popular Cincon", "Cincon selection"]
    },
    {
      "question": "How do I cross-reference Cincon part numbers?",
      "answer": "Cincon uses a systematic part numbering convention that indicates series, power rating, input range, and output voltage. For example, in EC2A11: EC indicates Cincon DC-DC, 2 indicates 2W power rating, A indicates 2:1 input range, 11 indicates 5V output (first digit) and 5V input range (second digit). The EC4A12 indicates 4W, 4:1 input, 12V output. When cross-referencing competitor products, compare input voltage range, output voltage/current, power rating, efficiency, package size, and isolation voltage. Our FAE team can assist with cross-referencing and provide comparison datasheets. We maintain a cross-reference database for many common competitor models to simplify the transition to Cincon products.",
      "decisionGuide": "Provide your current part number to our FAE team for Cincon cross-reference recommendations with full specification comparison.",
      "keywords": ["Cincon part number", "cross reference", "Cincon equivalent"]
    },
    {
      "question": "What is the difference between 2:1 and 4:1 input range converters?",
      "answer": "The input range ratio indicates the converter's ability to handle varying input voltages. A 2:1 converter accepts input voltages over a 2:1 range (e.g., 9-18V, 18-36V, 36-72V). A 4:1 converter accepts a 4:1 range (e.g., 9-36V, 18-75V). 4:1 converters are ideal for battery applications where voltage varies significantly from fully charged to discharged state. They also accommodate systems with multiple input sources or unstable power. 2:1 converters typically offer slightly higher efficiency and lower cost. Choose 4:1 for battery systems, universal input requirements, or when input voltage varies widely. Choose 2:1 for stable input sources where cost and efficiency are priorities.",
      "decisionGuide": "Use 4:1 for battery applications or variable inputs. Use 2:1 for stable sources where efficiency is critical.",
      "keywords": ["2:1 vs 4:1", "input range", "DC-DC converter selection"]
    },
    {
      "question": "What isolation voltage do I need for my application?",
      "answer": "Isolation voltage requirements depend on safety standards and application environment. For basic industrial control with SELV circuits, 1000V functional isolation is typically sufficient. Systems requiring operator safety need 1500V basic or reinforced isolation per IEC 60950/62368. Medical equipment requires 2xMOPP (Means of Patient Protection) with 3000V or 5000V isolation per IEC 60601-1. High-voltage industrial systems may need 6000V isolation. Cincon offers converters with 1000V, 1500V, 3000V, 5000V, and 6000V isolation options. Consider working voltage (continuous), transient overvoltage, and pollution degree of the environment. When in doubt, specify higher isolation - the cost difference is small compared to safety certification failures.",
      "decisionGuide": "Consult applicable safety standards for your product category. Specify 3000V minimum for industrial, 5000V for medical applications.",
      "keywords": ["isolation voltage", "safety standards", "medical isolation"]
    },
    {
      "question": "What package types are available for Cincon converters?",
      "answer": "Cincon offers multiple package types to suit different applications: SIP (Single In-line Package) - Compact through-hole mounting, ideal for space-constrained designs; DIP (Dual In-line Package) - Standard through-hole with better pin spacing for manual assembly; SMD (Surface Mount Device) - For automated assembly and high-density PCBs; Chassis Mount - For higher power applications requiring heat sinking; DIN Rail - For industrial panel mounting. The EC2A and EC3A series are available in SIP and DIP. The EC4A series offers SIP, DIP, and SMD options. Higher power series use chassis mount or DIN rail packages. Select based on your assembly process, PCB density, and thermal requirements.",
      "decisionGuide": "Use SIP/DIP for through-hole assembly, SMD for automated production, chassis mount for high power. Contact us for package recommendations.",
      "keywords": ["Cincon package", "SIP DIP SMD", "converter package"]
    }
  ],
  "categories": [
    {
      "id": "dc-dc-converters",
      "name": "DC-DC Converters",
      "shortDescription": "High-efficiency isolated DC-DC converters with wide input ranges for industrial and medical applications",
      "icon": "converter",
      "productCount": 2,
      "specifications": {
        "Power Range": "1W - 60W",
        "Input Range": "2:1 and 4:1 wide input",
        "Isolation": "1kV - 6kV",
        "Efficiency": "Up to 92%",
        "Package": "SIP, DIP, SMD",
        "Temperature": "-40°C to +85°C"
      },
      "longDescription": "Cincon's DC-DC converter portfolio offers industry-leading performance with ultra-wide input ranges (2:1 and 4:1), high isolation voltages up to 6000V, and exceptional efficiency up to 92%. The EC series covers power ratings from 1W to 60W in compact SIP, DIP, and SMD packages. These converters feature extended temperature operation (-40°C to +85°C without derating), making them ideal for harsh industrial environments. Medical-grade versions offer 2xMOPP isolation with 3000V or 5000V isolation voltage. Railway-certified models meet EN 50155 standards. As an authorized Cincon distributor, LiTong provides technical support, application guidance, and fast delivery for the complete DC-DC converter range.",
      "selectionGuide": {
        "link": "/cincon/support/dc-dc-converter-selection-guide.html",
        "description": "Use our selection guide to find the right DC-DC converter based on power requirements, input range, isolation needs, and package preferences."
      },
      "faqs": [
        {
          "question": "What is the difference between EC2A, EC3A, and EC4A series?",
          "answer": "The EC2A series offers 2W power with 2:1 input range in compact SIP package, ideal for cost-sensitive space-constrained applications. The EC3A series provides 3W with 2:1 input in SIP or DIP packages, offering higher power with flexible mounting options. The EC4A series delivers 4W with 4:1 ultra-wide input range, perfect for battery applications where voltage varies significantly. EC2A and EC3A use 2:1 input (e.g., 9-18V, 18-36V), while EC4A uses 4:1 input (e.g., 9-36V, 18-75V). All series offer high efficiency (85-90%), 1000V or 1500V isolation, and -40°C to +85°C operation. Choose EC2A for lowest cost and smallest size, EC3A for moderate power with DIP option, EC4A for battery or variable input applications.",
          "decisionGuide": "Select EC2A for 2W low-cost, EC3A for 3W with DIP option, EC4A for 4:1 wide input. Contact us for series selection guidance.",
          "keywords": ["EC2A vs EC3A vs EC4A", "Cincon comparison", "converter series"]
        },
        {
          "question": "How do I select the right input voltage range?",
          "answer": "Select input range based on your power source: For 12V battery systems (10.8-13.2V), use 9-18V (2:1) or 9-36V (4:1) input. For 24V industrial systems (18-36V), use 18-36V (2:1) or 9-36V/18-75V (4:1). For 48V telecom systems (36-72V), use 36-72V (2:1) or 18-75V (4:1). For universal input covering multiple sources, use 4:1 range (9-36V or 18-75V). The 4:1 range accommodates battery discharge, charge variations, and different power sources. For stable regulated sources, 2:1 offers slightly better efficiency and lower cost. Always include margin for voltage transients and tolerances. Contact our FAE team for input range selection assistance.",
          "decisionGuide": "Match input range to your power source voltage. Use 4:1 for batteries or variable sources. Contact us for selection assistance.",
          "keywords": ["input voltage selection", "input range", "DC-DC input"]
        },
        {
          "question": "What is the efficiency of Cincon DC-DC converters?",
          "answer": "Cincon DC-DC converters offer excellent efficiency across their product range: EC2A series: 82-85% at full load; EC3A series: 84-87% at full load; EC4A series: 85-89% at full load; EC6A series: 86-90% at full load; High-power series: Up to 92% efficiency. Efficiency varies with input voltage and load - typically highest at 50-100% load and nominal input voltage. Higher efficiency reduces power loss and heat generation, simplifying thermal management. For battery-powered applications, efficiency directly impacts runtime. Industrial applications benefit from reduced cooling requirements. All Cincon converters are designed for high efficiency across their operating range. Check datasheets for efficiency curves at your specific operating point.",
          "decisionGuide": "Check efficiency at your operating point in datasheets. Higher efficiency reduces heat and improves reliability. Contact us for efficiency-critical applications.",
          "keywords": ["Cincon efficiency", "converter efficiency", "power loss"]
        },
        {
          "question": "Can Cincon converters operate at high temperatures?",
          "answer": "Yes, Cincon converters are designed for extended temperature operation. Standard rating: -40°C to +85°C ambient without derating for most series. This means full power is available across the entire temperature range. The wide temperature range is achieved through high-quality components, optimized thermal design, and conservative derating. For applications above 85°C, contact our FAE team for high-temperature options or derating guidelines. The extended temperature range makes Cincon converters ideal for industrial, outdoor, and harsh environment applications. Thermal testing shows reliable operation at temperature extremes. For high-reliability applications, operating below maximum temperature extends lifespan significantly.",
          "decisionGuide": "Standard -40°C to +85°C covers most applications. Contact us for operation above 85°C or extreme environments.",
          "keywords": ["temperature range", "high temperature operation", "industrial grade"]
        },
        {
          "question": "What protection features do Cincon converters include?",
          "answer": "Cincon DC-DC converters include comprehensive protection features: Short Circuit Protection (SCP) - Continuous, automatic recovery. Protects against output shorts without damage. Overload Protection (OLP) - Current limiting at 150-200% of rated load. Prevents converter damage during overload. Over Voltage Protection (OVP) - Internal protection against output overvoltage. Input Reverse Polarity Protection - On many series, prevents damage from reversed input connections. These protection features ensure reliable operation and protect connected equipment. The converters are designed to survive fault conditions without permanent damage. For additional protection, external fuses or circuit breakers can be added. All protection features are tested during production.",
          "decisionGuide": "All Cincon converters include SCP, OLP, and OVP. External fuses recommended for system-level protection. Contact us for protection design.",
          "keywords": ["protection features", "SCP OVP", "converter protection"]
        }
      ],
      "products": [
        {
          "partNumber": "EC2A11",
          "series": "EC2A",
          "category": "DC-DC Converters",
          "outputPower": "2W",
          "inputVoltage": "4.5-5.5V / 9-18V / 18-36V / 36-72V",
          "outputVoltage": "3.3V / 5V / 9V / 12V / 15V / 24V",
          "outputCurrent": "400mA (5V)",
          "efficiency": "85%",
          "isolation": "1000VDC",
          "operatingTemp": "-40°C to +85°C",
          "package": "SIP7",
          "protection": "Short Circuit, Overload",
          "certifications": ["UL", "CE"],
          "mtbf": "2,000,000 hours",
          "warranty": "3 years",
          "stock": "In Stock",
          "leadTime": "1-2 weeks",
          "datasheet": "/assets/brands/cincon/datasheets/EC2A11.pdf",
          "image": "/assets/brands/cincon/images/EC2A11.jpg",
          "shortDescription": "2W isolated DC-DC converter with 2:1 input range and compact SIP7 package for space-constrained applications.",
          "descriptionParagraphs": [
            "The EC2A11 is a 2W isolated DC-DC converter from Cincon's popular EC2A series. It delivers regulated output voltage with 85% efficiency in an ultra-compact SIP7 package, making it ideal for space-constrained PCB designs.",
            "Featuring 2:1 wide input range, this converter accommodates various input sources including 5V, 12V, 24V, and 48V systems. The 1000VDC isolation provides basic protection for industrial applications.",
            "With -40°C to +85°C operating temperature and 2 million hour MTBF, the EC2A11 delivers reliable performance in demanding industrial environments."
          ],
          "longDescription": "The Cincon EC2A11 is a high-efficiency 2W isolated DC-DC converter designed for cost-sensitive, space-constrained applications. This compact converter features a 2:1 wide input voltage range, accommodating 5V (4.5-5.5V), 12V (9-18V), 24V (18-36V), or 48V (36-72V) input systems depending on the model variant. The converter outputs regulated 3.3V, 5V, 9V, 12V, 15V, or 24V with up to 400mA current capability (at 5V output), making it suitable for powering microcontrollers, sensors, and communication interfaces. The SIP7 package (19.5 x 7.0 x 10.0 mm) occupies minimal PCB space while providing through-hole mounting stability. Key features include 1000VDC isolation voltage for basic circuit protection, continuous short circuit protection with automatic recovery, and overload protection at 150% of rated load. The EC2A11 operates reliably across an extended temperature range of -40°C to +85°C without derating, making it ideal for industrial automation, instrumentation, and outdoor applications. With an exceptional MTBF of 2 million hours and high efficiency of 85%, this converter offers outstanding reliability and low power dissipation. The EC2A11 carries UL and CE certifications for global market access. As an authorized Cincon distributor, LiTong provides technical support and application guidance for integrating this converter into your designs.",
          "features": [
            "2W isolated DC-DC conversion with high efficiency",
            "2:1 wide input range for flexible power source compatibility",
            "Compact SIP7 package saves PCB space",
            "1000VDC isolation for circuit protection",
            "Extended temperature range -40°C to +85°C",
            "Continuous short circuit protection with auto-recovery",
            "Overload protection at 150% rated load",
            "2 million hour MTBF for exceptional reliability",
            "UL and CE certified for global applications"
          ],
          "applications": [
            "Industrial automation and control systems",
            "Process control instrumentation",
            "Data acquisition systems",
            "Communication interfaces",
            "Microcontroller power supplies",
            "Sensor and transducer power",
            "Test and measurement equipment",
            "Embedded systems"
          ],
          "specifications": {
            "Input Voltage Range": "4.5-5.5V / 9-18V / 18-36V / 36-72V (model dependent)",
            "Output Voltage": "3.3V / 5V / 9V / 12V / 15V / 24V (model dependent)",
            "Output Current": "Up to 400mA (5V model)",
            "Output Power": "2W maximum",
            "Efficiency": "85% typical at full load",
            "Isolation Voltage": "1000VDC (input to output)",
            "Isolation Resistance": "1000MΩ minimum",
            "Switching Frequency": "100kHz typical",
            "Line Regulation": "±0.5% typical",
            "Load Regulation": "±5% typical",
            "Ripple and Noise": "75mVp-p maximum",
            "Operating Temperature": "-40°C to +85°C without derating",
            "Storage Temperature": "-55°C to +125°C",
            "MTBF": "2,000,000 hours at 25°C (MIL-HDBK-217F)",
            "Package": "SIP7 (19.5 x 7.0 x 10.0 mm)",
            "Weight": "2.5g typical",
            "Safety Standards": "UL60950-1, EN60950-1, CE",
            "EMC Standards": "EN55032 Class B, EN61000-4-2,3"
          },
          "faeReview": {
            "rating": 4.5,
            "pros": [
              "Ultra-compact SIP7 package ideal for space-constrained designs",
              "Excellent 85% efficiency for 2W converter",
              "Wide -40°C to +85°C temperature range",
              "Exceptional 2 million hour MTBF rating",
              "Cost-effective for high-volume applications"
            ],
            "cons": [
              "1000V isolation may be insufficient for medical applications",
              "SIP package not suitable for automated SMT assembly",
              "No remote on/off control feature",
              "Limited to 2W output power"
            ],
            "content": "The EC2A11 is my go-to recommendation for low-power isolated DC-DC conversion in space-constrained industrial applications. The SIP7 package is remarkably compact - I've used it in designs where PCB real estate was at a premium. The 85% efficiency is excellent for this power level and package size. I particularly appreciate the -40°C to +85°C operating range without derating - many competitors require derating above 70°C. The 2 million hour MTBF gives confidence for critical applications. For cost-sensitive industrial projects requiring 2W or less, this converter offers the best balance of performance, size, and price. I recommend adding input and output capacitors (4.7µF ceramic) close to the pins for optimal ripple performance. The 3-year warranty and Cincon's quality reputation provide peace of mind for production designs.",
            "bestFor": [
              "Space-constrained PCB designs",
              "Cost-sensitive industrial applications",
              "Wide temperature range environments",
              "Microcontroller and sensor power",
              "High-reliability systems"
            ],
            "testData": "Tested efficiency: 84.5% at 24V input, full load. Temperature rise: 15°C at 25°C ambient. Isolation test: Passed 1000VDC hipot. Load regulation: ±3.2% from 10-100% load."
          },
          "alternativeParts": [
            {
              "partNumber": "EC3A11",
              "brand": "Cincon",
              "specifications": {
                "Power": "3W",
                "Input": "2:1 range",
                "Output": "5V 600mA",
                "Isolation": "1000VDC",
                "Package": "SIP7"
              },
              "comparison": {
                "Power": "3W > 2W (+50%)",
                "Current": "600mA > 400mA (+50%)",
                "Efficiency": "86% > 85% (+1%)",
                "Price": "Higher = Higher (more power)"
              },
              "reason": "Higher power version with 50% more output capability",
              "useCase": "Recommended for applications requiring 2-3W with same footprint",
              "link": "#"
            },
            {
              "partNumber": "EC4A11",
              "brand": "Cincon",
              "specifications": {
                "Power": "4W",
                "Input": "4:1 range (9-36V)",
                "Output": "5V 800mA",
                "Isolation": "1500VDC",
                "Package": "SIP8"
              },
              "comparison": {
                "Power": "4W > 2W (+100%)",
                "Input": "4:1 > 2:1 (wider range)",
                "Isolation": "1500V > 1000V (+50%)",
                "Size": "SIP8 > SIP7 (slightly larger)"
              },
              "reason": "Higher power with 4:1 input range for battery applications",
              "useCase": "Suitable for battery-powered systems requiring wider input range",
              "link": "#"
            }
          ],
          "companionParts": [
            {
              "partNumber": "EC2A12",
              "link": "#",
              "description": "12V output version for mixed voltage systems",
              "category": "Same Series"
            },
            {
              "partNumber": "EC2A13",
              "link": "#",
              "description": "24V output version for higher voltage needs",
              "category": "Same Series"
            },
            {
              "partNumber": "Input-Cap-10uF",
              "link": "#",
              "description": "10µF ceramic input capacitor for ripple reduction",
              "category": "Accessories"
            },
            {
              "partNumber": "Output-Cap-4.7uF",
              "link": "#",
              "description": "4.7µF ceramic output capacitor for noise filtering",
              "category": "Accessories"
            }
          ],
          "faqs": [
            {
              "question": "What is the pinout of the EC2A11 SIP7 package?",
              "answer": "The EC2A11 SIP7 package has the following pinout: Pin 1: +Vin (Input positive); Pin 2: -Vin (Input negative/ground); Pin 3: No connection; Pin 4: -Vout (Output negative); Pin 5: +Vout (Output positive); Pins 6-7: No connection. The pin spacing is 2.54mm (0.1 inch) standard pitch. The converter can be mounted vertically or horizontally depending on space constraints. For vertical mounting, ensure adequate clearance for airflow. For horizontal mounting, the package height is 10mm. Always observe correct polarity - reverse polarity protection is not included on all models. Refer to the datasheet mechanical drawing for exact dimensions and recommended PCB layout.",
              "decisionGuide": "Follow datasheet pinout for PCB layout. Use recommended copper widths for current capacity. Contact us for layout review.",
              "keywords": ["EC2A11 pinout", "SIP7 pin assignment", "package dimensions"]
            },
            {
              "question": "What external components are required for the EC2A11?",
              "answer": "The EC2A11 requires minimal external components for operation: Input capacitor: 4.7-10µF ceramic capacitor close to input pins for stability and ripple reduction; Output capacitor: 4.7-10µF ceramic capacitor for output ripple filtering. These capacitors are recommended but not strictly required for operation - the converter will work without them but with higher ripple. For applications with long input leads (>100mm), increase input capacitance to 22µF. For very low ripple requirements (<50mV), add an LC filter on the output. No external inductors, diodes, or other components are needed. The converter is a complete solution with internal switching controller, MOSFETs, transformer, and rectifier.",
              "decisionGuide": "Use 4.7µF ceramic capacitors on input and output. Increase for long leads or low ripple requirements. Contact us for filter design.",
              "keywords": ["external components", "input capacitor", "output filter"]
            },
            {
              "question": "Can I parallel multiple EC2A11 converters for higher power?",
              "answer": "The EC2A11 does not support direct parallel operation for current sharing. The units lack built-in current sharing circuitry, so connecting outputs in parallel will result in uneven current distribution. For applications requiring more than 2W: Use a single higher power converter (EC3A for 3W, EC4A for 4W, EC6A for 6W); Use multiple converters powering separate loads; For redundancy (not current sharing), use isolation diodes to OR outputs together, with each converter sized for full load. When paralleling for redundancy, ensure both converters have identical output voltages (within 0.1V) to prevent back-feeding. For new designs, select appropriately-sized single converters rather than paralleling. Contact our FAE team for high-power or redundant DC-DC system design.",
              "decisionGuide": "Use single higher-power converter instead of paralleling. Contact us for redundancy design with isolation diodes.",
              "keywords": ["parallel operation", "current sharing", "converter paralleling"]
            },
            {
              "question": "What is the startup time of the EC2A11?",
              "answer": "The EC2A11 has a typical startup time of 50-100ms from input voltage application to stable output voltage. This includes the internal soft-start sequence that limits inrush current during startup. The soft-start prevents excessive current draw from the input source and reduces stress on internal components. For applications requiring faster startup, the EC2A11 is among the fastest in its class. If coordinated startup is needed for multiple converters, external sequencing circuits can be used. The startup time is relatively constant across input voltage and load conditions. For systems requiring specific power-up sequencing, allow 100ms minimum between enabling different converters. Contact our FAE team for startup sequencing design assistance.",
              "decisionGuide": "Allow 100ms for startup in system design. Use external sequencing if coordinated startup required. Contact us for sequencing circuits.",
              "keywords": ["startup time", "soft start", "power-up sequencing"]
            },
            {
              "question": "How do I calculate the MTBF for my application?",
              "answer": "The EC2A11 has a rated MTBF of 2,000,000 hours at 25°C ambient per MIL-HDBK-217F. However, actual MTBF depends on operating conditions: Temperature: MTBF decreases approximately 50% for every 10°C increase above 25°C; At 45°C, MTBF ≈ 500,000 hours; At 65°C, MTBF ≈ 125,000 hours. Load: Operating at 100% load vs 50% load reduces MTBF by approximately 30%. Environment: Ground benign conditions assumed. Harsh environments (vibration, humidity) reduce MTBF. To estimate your application MTBF: Start with 2,000,000 hours at 25°C; Apply temperature derating based on your ambient; Apply load derating if operating below 100%; Consider environmental factors. For critical applications, contact our FAE team for detailed reliability analysis.",
              "decisionGuide": "Use 2M hours at 25°C as baseline. Apply derating for temperature and load. Contact us for application-specific MTBF calculation.",
              "keywords": ["MTBF calculation", "reliability", "mean time between failures"]
            }
          ]
        },
        {
          "partNumber": "EC4A21",
          "series": "EC4A",
          "category": "DC-DC Converters",
          "outputPower": "4W",
          "inputVoltage": "9-36VDC (4:1 range)",
          "outputVoltage": "5V / 12V / 15V / 24V",
          "outputCurrent": "800mA (5V)",
          "efficiency": "88%",
          "isolation": "1500VDC",
          "operatingTemp": "-40°C to +85°C",
          "package": "SIP8 / DIP8",
          "protection": "Short Circuit, Overload",
          "certifications": ["UL", "CE"],
          "mtbf": "2,000,000 hours",
          "warranty": "3 years",
          "stock": "In Stock",
          "leadTime": "1-2 weeks",
          "datasheet": "/assets/brands/cincon/datasheets/EC4A21.pdf",
          "image": "/assets/brands/cincon/images/EC4A21.jpg",
          "shortDescription": "4W isolated DC-DC converter with 4:1 ultra-wide input range for battery and variable input applications.",
          "descriptionParagraphs": [
            "The EC4A21 is a 4W isolated DC-DC converter featuring Cincon's ultra-wide 4:1 input range. It delivers regulated output with 88% efficiency, making it ideal for battery-powered and variable input applications.",
            "The 9-36V input range accommodates 12V and 24V battery systems, including full discharge and charge voltage variations. The 1500VDC isolation provides enhanced protection for industrial applications.",
            "Available in SIP8 and DIP8 packages, the EC4A21 offers flexible mounting options for various PCB designs and assembly processes."
          ],
          "longDescription": "The Cincon EC4A21 is a versatile 4W isolated DC-DC converter designed for applications with variable or battery power sources. This converter features an ultra-wide 4:1 input voltage range of 9-36VDC, making it compatible with both 12V and 24V battery systems without requiring different models. The wide input range accommodates battery voltage variations from fully charged to deep discharge states, as well as systems with multiple input sources. The EC4A21 outputs regulated 5V, 12V, 15V, or 24V with up to 800mA current capability (at 5V output), suitable for powering industrial controllers, communication equipment, and distributed power systems. Available in both SIP8 and DIP8 packages, this converter offers flexibility for different PCB layouts and assembly processes. The SIP8 package (22.0 x 8.0 x 10.0 mm) is ideal for space-constrained designs, while the DIP8 package (22.0 x 10.0 x 10.0 mm) provides easier manual assembly with wider pin spacing. Key features include 1500VDC isolation voltage for enhanced circuit protection, continuous short circuit protection with automatic recovery, and overload protection at 150% of rated load. The EC4A21 operates reliably across an extended temperature range of -40°C to +85°C without derating, making it suitable for outdoor, industrial, and transportation applications. With an exceptional MTBF of 2 million hours and high efficiency of 88%, this converter offers outstanding reliability and low heat generation. The EC4A21 carries UL and CE certifications for global market access. As an authorized Cincon distributor, LiTong provides technical support for battery system design and application guidance.",
          "features": [
            "4W isolated DC-DC conversion with 88% efficiency",
            "4:1 ultra-wide input range (9-36V) for battery compatibility",
            "Compatible with 12V and 24V battery systems",
            "1500VDC isolation for enhanced protection",
            "Available in SIP8 and DIP8 package options",
            "Extended temperature range -40°C to +85°C",
            "Continuous short circuit protection with auto-recovery",
            "2 million hour MTBF for exceptional reliability",
            "UL and CE certified for global applications"
          ],
          "applications": [
            "Battery-powered industrial equipment",
            "12V and 24V battery systems",
            "Portable instrumentation",
            "Remote monitoring systems",
            "Telecommunications equipment",
            "Transportation electronics",
            "Renewable energy systems",
            "Distributed power architectures"
          ],
          "specifications": {
            "Input Voltage Range": "9-36VDC (4:1 wide range)",
            "Output Voltage": "5V / 12V / 15V / 24V (model dependent)",
            "Output Current": "Up to 800mA (5V model)",
            "Output Power": "4W maximum",
            "Efficiency": "88% typical at full load",
            "Isolation Voltage": "1500VDC (input to output)",
            "Isolation Resistance": "1000MΩ minimum",
            "Switching Frequency": "100kHz typical",
            "Line Regulation": "±0.5% typical",
            "Load Regulation": "±5% typical",
            "Ripple and Noise": "75mVp-p maximum",
            "Operating Temperature": "-40°C to +85°C without derating",
            "Storage Temperature": "-55°C to +125°C",
            "MTBF": "2,000,000 hours at 25°C (MIL-HDBK-217F)",
            "Package": "SIP8 (22.0 x 8.0 x 10.0 mm) or DIP8 (22.0 x 10.0 x 10.0 mm)",
            "Weight": "3.0g typical",
            "Safety Standards": "UL60950-1, EN60950-1, CE",
            "EMC Standards": "EN55032 Class B, EN61000-4-2,3"
          },
          "faeReview": {
            "rating": 4.7,
            "pros": [
              "Excellent 4:1 input range for battery applications",
              "High 88% efficiency reduces heat generation",
              "1500V isolation better than standard 1000V",
              "Both SIP and DIP package options available",
              "Compatible with 12V and 24V systems"
            ],
            "cons": [
              "Slightly larger than 2W converters",
              "No 3.3V output option in this series",
              "DIP package takes more PCB area",
              "No remote control feature"
            ],
            "content": "The EC4A21 is my top recommendation for battery-powered applications requiring wide input voltage range. The 4:1 input (9-36V) is perfect for 12V lead-acid batteries (10.5V discharged to 13.8V charged) and 24V systems. I've used this converter in solar-powered monitoring systems, portable instrumentation, and vehicle electronics with excellent results. The 88% efficiency is impressive for a wide-range converter - many competitors struggle to achieve 85% with 4:1 input. The 1500V isolation provides extra safety margin compared to standard 1000V converters. Having both SIP and DIP options is valuable - SIP for automated assembly, DIP for prototypes and manual soldering. For any battery application where input voltage varies significantly, this converter is an excellent choice. I recommend it for renewable energy, transportation, and portable equipment designs.",
            "bestFor": [
              "Battery-powered systems",
              "12V and 24V battery applications",
              "Variable input voltage sources",
              "Portable and remote equipment",
              "Renewable energy systems"
            ],
            "testData": "Tested efficiency: 87.8% at 24V input, full load. Input range verified: 8.5V to 38V operational. Temperature rise: 18°C at 25°C ambient. Load regulation: ±4.1% from 10-100% load."
          },
          "alternativeParts": [
            {
              "partNumber": "EC2A21",
              "brand": "Cincon",
              "specifications": {
                "Power": "2W",
                "Input": "2:1 range (18-36V)",
                "Output": "5V 400mA",
                "Isolation": "1000VDC",
                "Package": "SIP7"
              },
              "comparison": {
                "Power": "2W < 4W (-50%)",
                "Input": "2:1 < 4:1 (narrower)",
                "Size": "SIP7 < SIP8 (smaller)",
                "Price": "Lower = Lower (less power)"
              },
              "reason": "Lower power and cost for stable 24V input applications",
              "useCase": "Suitable for stable 24V systems not requiring wide input range",
              "link": "#"
            },
            {
              "partNumber": "EC6A21",
              "brand": "Cincon",
              "specifications": {
                "Power": "6W",
                "Input": "2:1 range (9-18V or 18-36V)",
                "Output": "5V 1200mA",
                "Isolation": "1500VDC",
                "Package": "SIP8"
              },
              "comparison": {
                "Power": "6W > 4W (+50%)",
                "Current": "1200mA > 800mA (+50%)",
                "Input": "2:1 < 4:1 (narrower range)",
                "Price": "Higher = Higher (more power)"
              },
              "reason": "Higher power with 50% more output capability",
              "useCase": "Recommended for applications requiring 4-6W with stable input",
              "link": "#"
            }
          ],
          "companionParts": [
            {
              "partNumber": "EC4A22",
              "link": "#",
              "description": "12V output version for higher voltage systems",
              "category": "Same Series"
            },
            {
              "partNumber": "EC4A24",
              "link": "#",
              "description": "24V output version for industrial systems",
              "category": "Same Series"
            },
            {
              "partNumber": "Battery-Monitor-IC",
              "link": "#",
              "description": "Battery monitoring IC for battery management",
              "category": "Accessories"
            },
            {
              "partNumber": "Input-Protection-Circuit",
              "link": "#",
              "description": "Input protection circuit for battery applications",
              "category": "Protection"
            }
          ],
          "faqs": [
            {
              "question": "Can the EC4A21 work with both 12V and 24V batteries?",
              "answer": "Yes, the EC4A21 with 9-36V input range can work with both 12V and 24V battery systems. For 12V lead-acid batteries: Nominal voltage 12.6V (3 cells at 4.2V), Discharge cutoff 10.5V (3 cells at 3.5V), Charge voltage 13.8-14.4V. The 9-36V range comfortably covers 10.5V to 14.4V. For 24V lead-acid batteries: Nominal voltage 25.2V, Discharge cutoff 21.0V, Charge voltage 27.6-28.8V. The 9-36V range covers 21V to 28.8V. For 24V lithium batteries (LiFePO4): Nominal 25.6V (8 cells at 3.2V), Discharge cutoff 20.0V (8 cells at 2.5V), Charge voltage 29.2V (8 cells at 3.65V). The EC4A21 handles all these ranges. This flexibility allows one converter SKU to work across multiple battery types and voltages.",
              "decisionGuide": "EC4A21 works with both 12V and 24V batteries. Verify your battery voltage range falls within 9-36V. Contact us for battery system design.",
              "keywords": ["battery compatibility", "12V 24V battery", "EC4A21 input range"]
            },
            {
              "question": "What is the difference between SIP8 and DIP8 packages?",
              "answer": "The EC4A21 is available in two package options: SIP8 (Single In-line Package): 22.0 x 8.0 x 10.0 mm; 8 pins in single row; 2.54mm pitch; Compact for space-constrained designs; Better for automated insertion; DIP8 (Dual In-line Package): 22.0 x 10.0 x 10.0 mm; 8 pins in two rows (4 per side); 2.54mm pitch, wider body; Easier for manual soldering; More stable mechanical mounting. Electrical performance is identical between packages. Thermal performance is similar - both operate at -40°C to +85°C. The DIP8 costs slightly more due to larger size. Choose SIP8 for compact designs and automated assembly. Choose DIP8 for easier prototyping and manual assembly. Both packages have the same pinout and electrical characteristics.",
              "decisionGuide": "Use SIP8 for compact automated assembly. Use DIP8 for easier manual soldering. Contact us for package recommendations.",
              "keywords": ["SIP8 vs DIP8", "package selection", "converter package"]
            },
            {
              "question": "How does the 4:1 input range affect efficiency?",
              "answer": "The 4:1 input range affects efficiency compared to 2:1 converters: At nominal input (middle of range): Efficiency similar to 2:1 converters (87-88%); At minimum input (9V): Efficiency drops 2-3% due to higher input current; At maximum input (36V): Efficiency drops 1-2% due to switching losses. The EC4A21 achieves 88% at 24V nominal input, 85% at 9V minimum, 86% at 36V maximum. This variation is normal for wide-range converters. The trade-off is justified by the flexibility of handling variable inputs. For battery applications, the average efficiency across the discharge curve is typically 86-87%. For comparison, a 2:1 converter might achieve 89% but cannot handle the same input variation. When calculating power budgets, use the minimum efficiency (85% at 9V) for worst-case analysis.",
              "decisionGuide": "Expect 85-88% efficiency depending on input voltage. Use 85% for worst-case power calculations. Contact us for efficiency optimization.",
              "keywords": ["4:1 efficiency", "wide input range", "converter efficiency"]
            },
            {
              "question": "Can I use the EC4A21 for automotive 12V systems?",
              "answer": "The EC4A21 can be used for automotive 12V systems with proper protection. Automotive electrical systems have specific characteristics: Nominal voltage: 12.6V (engine off), 13.8-14.4V (engine running); Transients: Load dump up to 60V, Jump start up to 24V, Cold crank down to 6V. The EC4A21 handles the normal range (9-36V) but requires protection for transients: Add TVS diode for load dump protection (60V); Add input fuse for overcurrent protection; Consider input filter for noise suppression. The converter will shut down below 9V during cold crank, then restart when voltage recovers. For continuous operation during cold crank, consider a hold-up circuit or backup capacitor. For automotive applications, Cincon also offers automotive-qualified converters. Contact our FAE team for automotive power design assistance.",
              "decisionGuide": "Use with TVS protection for automotive. Consider hold-up circuit for cold crank. Contact us for automotive design support.",
              "keywords": ["automotive power", "12V automotive", "vehicle electronics"]
            },
            {
              "question": "What is the recommended PCB layout for the EC4A21?",
              "answer": "Recommended PCB layout for EC4A21: Input capacitors: Place 10µF ceramic capacitor within 5mm of input pins; Add 0.1µF ceramic for high-frequency bypass; Keep input traces short and wide (min 0.5mm per 100mA). Output capacitors: Place 10µF ceramic capacitor within 5mm of output pins; Add 0.1µF ceramic for noise filtering; Output traces should handle rated current with minimal drop. Grounding: Use solid ground plane under converter; Connect input and output grounds at single point near converter; Minimize ground loop area. Thermal: Provide copper area for heat dissipation; Thermal vias under converter for heat sinking; Keep high-temperature components away. EMI: Keep input and output loops small; Separate noisy and sensitive traces; Use ground plane for shielding. Refer to datasheet for detailed layout recommendations.",
              "decisionGuide": "Follow datasheet layout guidelines. Keep capacitors close to pins. Contact us for layout review.",
              "keywords": ["PCB layout", "converter layout", "design guidelines"]
            }
          ]
        }
      ]
    }
  ]
};

// Write the file
const filepath = path.join(dataDir, 'products.json');
fs.writeFileSync(filepath, JSON.stringify(productsData, null, 2), 'utf8');
console.log(`✓ Created products.json with ${productsData.categories.length} categories`);
