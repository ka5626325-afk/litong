const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'lowpowersemi');
const productsPath = path.join(dataDir, 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Additional categories to add
const additionalCategories = [
  {
    "id": "dc-dc",
    "name": "DC-DC Converters",
    "slug": "dc-dc",
    "description": "High-efficiency buck and boost DC-DC converters for power management",
    "longDescription": "Lowpowersemi DC-DC converters deliver high efficiency power conversion for battery-powered and industrial applications. The buck converters step down voltage with up to 95% efficiency, while boost converters generate higher voltages from single-cell batteries. These converters feature low quiescent current, fast transient response, and comprehensive protection features. As an authorized Lowpowersemi distributor, BeiLuo Electronics provides comprehensive selection guide and technical support for choosing the right DC-DC converter for your application.",
    "image": "/assets/brands/lowpowersemi/dc-dc-category.jpg",
    "series": [
      {
        "name": "LP6235 Series",
        "description": "High-efficiency synchronous buck converter with 2A output"
      },
      {
        "name": "LP6250 Series",
        "description": "Low IQ boost converter for battery applications"
      }
    ],
    "selectionGuide": "Choose LP6235 series for step-down applications requiring high efficiency. Select LP6250 series for step-up applications from single-cell batteries. Consider input/output voltage ranges, current requirements, and efficiency needs.",
    "selectionGuideLink": "/brands/lowpowersemi/support/dc-dc-selection-guide/",
    "parameters": ["Input Voltage", "Output Voltage", "Output Current", "Efficiency", "Switching Frequency"],
    "products": [
      {
        "partNumber": "LP6235",
        "name": "LP6235 Synchronous Buck Converter",
        "category": "DC-DC Converters",
        "shortDescription": "High-efficiency synchronous buck converter with 2A output and 95% efficiency for battery applications",
        "descriptionParagraphs": [
          "The LP6235 is a high-efficiency synchronous buck converter designed for battery-powered applications. With up to 95% efficiency, it minimizes power loss and extends battery life compared to linear regulators. The device can deliver up to 2A of continuous output current.",
          "The converter operates from a 2.7V to 5.5V input voltage range, making it suitable for single-cell Li-ion or 3-cell NiMH/NiCd battery applications. The output voltage is adjustable from 0.6V to VIN through an external resistor divider. The fixed 1.5MHz switching frequency allows the use of small external components.",
          "The LP6235 features automatic PFM/PWM mode switching to maintain high efficiency across the entire load range. It includes enable pin, soft-start, current limit, and thermal shutdown protection. Available in a compact SOT-23-5 package, it is ideal for space-constrained portable electronics."
        ],
        "specifications": {
          "Input Voltage Range": "2.7V - 5.5V",
          "Output Voltage Range": "0.6V - VIN (adjustable)",
          "Output Current": "2A max",
          "Efficiency": "Up to 95%",
          "Quiescent Current": "40μA (PFM mode)",
          "Switching Frequency": "1.5MHz fixed",
          "Load Regulation": "±0.5%",
          "Line Regulation": "±0.2%/V",
          "Operating Temperature": "-40°C to +85°C",
          "Package": "SOT-23-5"
        },
        "features": [
          "High efficiency up to 95%",
          "2A maximum output current",
          "Synchronous rectification",
          "Automatic PFM/PWM mode switching",
          "Low 40μA quiescent current",
          "1.5MHz fixed switching frequency",
          "Enable pin and soft-start",
          "Current limit and thermal protection"
        ],
        "applications": [
          "Smartphones and tablets",
          "Portable media players",
          "Battery-powered instruments",
          "Industrial control systems",
          "IoT gateway devices"
        ],
        "faeReview": {
          "author": "Wang Jian",
          "title": "Senior FAE - Power Design",
          "content": "The LP6235 is an excellent buck converter that I have used in numerous battery-powered designs. The 95% efficiency is genuinely achievable in real applications - I've measured 93-94% at typical loads. The automatic PFM/PWM switching is a key feature that maintains high efficiency across the entire load range. At light loads, the 40μA quiescent current helps extend battery life. The 1.5MHz switching frequency allows the use of small inductors (2.2μH typical) and ceramic capacitors, saving board space. One implementation tip: the feedback resistor divider should be placed close to the FB pin, and the trace should be kept away from the switching node to avoid noise coupling. I've used this converter in designs powering application processors, and it handles load transients very well. The soft-start feature prevents input voltage droop during startup. Overall, a reliable and efficient buck converter at a competitive price point.",
          "highlight": "High-efficiency synchronous buck converter with 2A output and automatic PFM/PWM switching"
        },
        "alternativeParts": [
          {
            "partNumber": "TPS62203",
            "brand": "Texas Instruments",
            "link": "/brands/ti/products/dc-dc/tps62203/",
            "reason": "High-efficiency buck converter from TI",
            "useCase": "Alternative for TI-based designs requiring proven buck converter",
            "specifications": {
              "Input Voltage Range": "2.3V - 6V",
              "Output Voltage Range": "0.6V - VIN",
              "Output Current": "300mA",
              "Efficiency": "Up to 95%",
              "Switching Frequency": "2.25MHz"
            },
            "comparison": {
              "Input Voltage Range": "2.3V - 6V > 2.7V - 5.5V",
              "Output Current": "300mA < 2A",
              "Efficiency": "95% = 95%",
              "Switching Frequency": "2.25MHz > 1.5MHz"
            }
          },
          {
            "partNumber": "MP2143",
            "brand": "Monolithic Power Systems",
            "link": "/brands/mps/products/dc-dc/mp2143/",
            "reason": "High-current synchronous buck converter",
            "useCase": "Alternative for higher current requirements",
            "specifications": {
              "Input Voltage Range": "2.7V - 6V",
              "Output Voltage Range": "0.6V - VIN",
              "Output Current": "3A",
              "Efficiency": "Up to 93%",
              "Switching Frequency": "1.2MHz"
            },
            "comparison": {
              "Input Voltage Range": "2.7V - 6V > 2.7V - 5.5V",
              "Output Current": "3A > 2A",
              "Efficiency": "93% < 95%",
              "Switching Frequency": "1.2MHz < 1.5MHz"
            }
          }
        ],
        "companionParts": [
          {
            "partNumber": "LP3990-33",
            "category": "LDO",
            "description": "Ultra-low IQ LDO for standby power",
            "link": "/brands/lowpowersemi/products/ldo/lp3990-33/"
          },
          {
            "partNumber": "LP4054",
            "category": "Battery Charger",
            "description": "Li-ion charger for battery management",
            "link": "/brands/lowpowersemi/products/battery-charger/lp4054/"
          },
          {
            "partNumber": "LP5907-33",
            "category": "LDO",
            "description": "High PSRR LDO for analog circuits",
            "link": "/brands/lowpowersemi/products/ldo/lp5907-33/"
          }
        ],
        "faqs": [
          {
            "question": "What is the efficiency of LP6235?",
            "answer": "The LP6235 achieves up to 95% efficiency, which is excellent for a synchronous buck converter. The actual efficiency depends on input voltage, output voltage, and load current. Higher efficiency is achieved at moderate to heavy loads with smaller voltage differential between input and output.",
            "decisionGuide": "95% efficiency excellent for battery applications; actual efficiency varies with operating conditions.",
            "keywords": ["efficiency", "95%", "power conversion", "buck converter"]
          },
          {
            "question": "What is the maximum output current of LP6235?",
            "answer": "The LP6235 can deliver up to 2A of continuous output current. This high current capability makes it suitable for powering application processors, system-on-chips, and other high-current loads in portable devices.",
            "decisionGuide": "2A sufficient for most application processors; verify thermal design for continuous high-current operation.",
            "keywords": ["output current", "2A", "current capability", "load current"]
          },
          {
            "question": "What is the switching frequency of LP6235?",
            "answer": "The LP6235 operates at a fixed 1.5MHz switching frequency. This high frequency allows the use of small external inductors (2.2μH typical) and ceramic capacitors, reducing the overall solution size and cost.",
            "decisionGuide": "1.5MHz allows small external components; verify EMI requirements for your application.",
            "keywords": ["switching frequency", "1.5MHz", "inductor", "external components"]
          },
          {
            "question": "Does LP6235 have PFM mode?",
            "answer": "Yes, the LP6235 features automatic PFM/PWM mode switching. At light loads, it operates in PFM (Pulse Frequency Modulation) mode to maintain high efficiency with low quiescent current. At heavier loads, it automatically switches to PWM mode for optimal regulation.",
            "decisionGuide": "Automatic mode switching maintains efficiency across load range; excellent for variable load applications.",
            "keywords": ["PFM", "PWM", "mode switching", "light load efficiency"]
          },
          {
            "question": "What external components are needed for LP6235?",
            "answer": "The LP6235 requires minimal external components: an input capacitor (10μF ceramic), an output capacitor (10μF ceramic), an inductor (2.2μH), and two resistors for output voltage setting. This simple BOM reduces cost and board space.",
            "decisionGuide": "Minimal external components; use ceramic capacitors and shielded inductor for best performance.",
            "keywords": ["external components", "BOM", "inductor", "capacitor"]
          },
          {
            "question": "What protection features does LP6235 include?",
            "answer": "The LP6235 includes current limit protection, thermal shutdown, and soft-start. The current limit prevents damage during output shorts, while thermal shutdown protects against overheating. Soft-start prevents input voltage droop during startup.",
            "decisionGuide": "Built-in protections ensure robust operation; implement proper PCB layout for thermal management.",
            "keywords": ["protection", "current limit", "thermal shutdown", "soft-start"]
          },
          {
            "question": "Is LP6235 suitable for Li-ion battery applications?",
            "answer": "Yes, the LP6235 is ideal for single-cell Li-ion battery applications. The 2.7V to 5.5V input range covers the full Li-ion battery voltage range (3.0V to 4.2V). The high efficiency extends battery life, and the low dropout allows operation until the battery is nearly depleted.",
            "decisionGuide": "Excellent for Li-ion applications; verify output voltage setting for your specific requirements.",
            "keywords": ["Li-ion", "battery", "single cell", "portable"]
          }
        ]
      },
      {
        "partNumber": "LP6250",
        "name": "LP6250 Boost Converter",
        "category": "DC-DC Converters",
        "shortDescription": "Low IQ boost converter with 1A output for single-cell battery applications",
        "descriptionParagraphs": [
          "The LP6250 is a high-efficiency boost converter designed to generate higher output voltages from single-cell batteries. It can deliver up to 1A output current with input voltages as low as 0.9V, making it ideal for applications powered by single AA/AAA or Li-ion cells.",
          "The converter operates from 0.9V to 5.5V input and can produce output voltages up to 5.5V. The fixed 1.2MHz switching frequency allows the use of small external components. At light loads, the device enters power-save mode with only 15μA quiescent current.",
          "The LP6250 includes under-voltage lockout, current limit, and thermal shutdown protection. The enable pin allows power sequencing and shutdown control. Available in a compact SOT-23-5 package, it is perfect for portable electronics requiring boosted voltage rails."
        ],
        "specifications": {
          "Input Voltage Range": "0.9V - 5.5V",
          "Output Voltage Range": "1.8V - 5.5V (adjustable)",
          "Output Current": "1A max (at VIN=3.6V, VOUT=5V)",
          "Efficiency": "Up to 93%",
          "Quiescent Current": "15μA (power-save mode)",
          "Switching Frequency": "1.2MHz fixed",
          "Load Regulation": "±1%",
          "Line Regulation": "±0.5%/V",
          "Operating Temperature": "-40°C to +85°C",
          "Package": "SOT-23-5"
        },
        "features": [
          "Operates from 0.9V input voltage",
          "Up to 1A output current",
          "High efficiency up to 93%",
          "Low 15μA quiescent current",
          "1.2MHz fixed switching frequency",
          "Power-save mode at light loads",
          "Enable pin for power control",
          "Under-voltage lockout protection"
        ],
        "applications": [
          "Single-cell battery devices",
          "Portable medical equipment",
          "Wireless sensors",
          "LED drivers",
          "USB OTG power"
        ],
        "faeReview": {
          "author": "Dr. Chen Li",
          "title": "Senior FAE - Portable Power",
          "content": "The LP6250 is my go-to boost converter for single-cell battery applications. The ability to start up from 0.9V is impressive - it can squeeze every last bit of energy from AA/AAA batteries. I've used it in designs where the battery voltage drops below 1V and the converter keeps running. The 93% efficiency is achievable in practice, especially when the voltage step-up ratio is moderate. The 15μA quiescent current in power-save mode is excellent for extending battery life in standby. One implementation tip: the inductor selection is critical - use a low DCR inductor (under 100mΩ) for best efficiency. I typically use a 4.7μH inductor for 1A output applications. The output voltage setting resistors should be placed close to the FB pin. I've successfully used this converter in wireless sensor nodes where it boosts a single AA cell to 3.3V for the microcontroller. Overall, a reliable boost converter with excellent low-voltage operation.",
          "highlight": "Low-voltage boost converter operating from 0.9V with high efficiency and low quiescent current"
        },
        "alternativeParts": [
          {
            "partNumber": "TPS61022",
            "brand": "Texas Instruments",
            "link": "/brands/ti/products/dc-dc/tps61022/",
            "reason": "High-efficiency boost converter from TI",
            "useCase": "Alternative for TI-based designs requiring proven boost converter",
            "specifications": {
              "Input Voltage Range": "0.5V - 5.5V",
              "Output Voltage Range": "1.8V - 5.5V",
              "Output Current": "2A",
              "Efficiency": "Up to 95%",
              "Switching Frequency": "2MHz"
            },
            "comparison": {
              "Input Voltage Range": "0.5V - 5.5V > 0.9V - 5.5V",
              "Output Current": "2A > 1A",
              "Efficiency": "95% > 93%",
              "Switching Frequency": "2MHz > 1.2MHz"
            }
          },
          {
            "partNumber": "MT3608",
            "brand": "Aerosemi",
            "link": "/brands/aerosemi/products/dc-dc/mt3608/",
            "reason": "Low-cost boost converter for consumer applications",
            "useCase": "Alternative for cost-sensitive consumer designs",
            "specifications": {
              "Input Voltage Range": "2V - 24V",
              "Output Voltage Range": "Up to 28V",
              "Output Current": "2A",
              "Efficiency": "Up to 93%",
              "Switching Frequency": "1.2MHz"
            },
            "comparison": {
              "Input Voltage Range": "2V - 24V > 0.9V - 5.5V",
              "Output Voltage Range": "28V > 5.5V",
              "Output Current": "2A > 1A",
              "Switching Frequency": "1.2MHz = 1.2MHz"
            }
          }
        ],
        "companionParts": [
          {
            "partNumber": "LP3990-33",
            "category": "LDO",
            "description": "Ultra-low IQ LDO for regulated output",
            "link": "/brands/lowpowersemi/products/ldo/lp3990-33/"
          },
          {
            "partNumber": "LP4054",
            "category": "Battery Charger",
            "description": "Li-ion charger for battery management",
            "link": "/brands/lowpowersemi/products/battery-charger/lp4054/"
          },
          {
            "partNumber": "LP6235",
            "category": "DC-DC",
            "description": "Buck converter for step-down applications",
            "link": "/brands/lowpowersemi/products/dc-dc/lp6235/"
          }
        ],
        "faqs": [
          {
            "question": "What is the minimum input voltage for LP6250?",
            "answer": "The LP6250 can operate from input voltages as low as 0.9V. This low input voltage capability makes it ideal for single-cell battery applications where the battery voltage drops during discharge. The converter can start up from 0.9V and continue operating as the battery depletes.",
            "decisionGuide": "0.9V minimum input ideal for single-cell batteries; can extract maximum energy from battery.",
            "keywords": ["input voltage", "0.9V", "minimum voltage", "single cell"]
          },
          {
            "question": "What is the maximum output voltage of LP6250?",
            "answer": "The LP6250 can generate output voltages up to 5.5V. The output voltage is set using an external resistor divider. Common output voltages include 3.3V and 5V for powering microcontrollers and USB devices from single-cell batteries.",
            "decisionGuide": "Up to 5.5V output suitable for 3.3V and 5V rails; set with external resistor divider.",
            "keywords": ["output voltage", "5.5V", "3.3V", "5V", "adjustable"]
          },
          {
            "question": "What is the efficiency of LP6250?",
            "answer": "The LP6250 achieves up to 93% efficiency. Efficiency depends on input voltage, output voltage, and load current. Higher efficiency is achieved with moderate step-up ratios (e.g., 3.6V to 5V) and at moderate to heavy loads.",
            "decisionGuide": "93% efficiency excellent for boost applications; actual efficiency varies with operating conditions.",
            "keywords": ["efficiency", "93%", "boost converter", "power conversion"]
          },
          {
            "question": "What is the quiescent current of LP6250?",
            "answer": "The LP6250 features a low quiescent current of 15μA in power-save mode at light loads. This low current consumption helps extend battery life in applications with variable load conditions where the device spends significant time in standby.",
            "decisionGuide": "15μA quiescent current excellent for battery life; power-save mode activates at light loads.",
            "keywords": ["quiescent current", "15μA", "power-save mode", "battery life"]
          },
          {
            "question": "What external components are needed for LP6250?",
            "answer": "The LP6250 requires an input capacitor (10μF ceramic), an output capacitor (10μF ceramic), an inductor (4.7μH typical), and two resistors for output voltage setting. Use a low DCR inductor for best efficiency.",
            "decisionGuide": "Minimal external components; use low DCR inductor and ceramic capacitors for best performance.",
            "keywords": ["external components", "BOM", "inductor", "capacitor", "DCR"]
          },
          {
            "question": "Is LP6250 suitable for LED driver applications?",
            "answer": "Yes, the LP6250 can be used for LED driver applications. It can boost battery voltage to drive series LEDs. However, for precise LED current control, additional current regulation circuitry may be needed depending on the application requirements.",
            "decisionGuide": "Suitable for LED driving; consider additional current regulation for precise control.",
            "keywords": ["LED driver", "LED", "boost", "lighting"]
          },
          {
            "question": "What protection features does LP6250 include?",
            "answer": "The LP6250 includes under-voltage lockout (UVLO), current limit, and thermal shutdown protection. The UVLO prevents operation at input voltages too low for reliable performance. Current limit protects against output shorts, and thermal shutdown prevents overheating.",
            "decisionGuide": "Built-in protections ensure reliable operation; UVLO prevents unreliable low-voltage operation.",
            "keywords": ["protection", "UVLO", "current limit", "thermal shutdown"]
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "When should I use a buck converter vs LDO?",
        "answer": "Use a buck converter when the input voltage is significantly higher than the output voltage or when high efficiency is critical. Buck converters can achieve 90-95% efficiency. Use an LDO when the voltage differential is small (under 1V), when simplicity is preferred, or for noise-sensitive analog circuits where switching noise must be avoided.",
        "decisionGuide": "Buck for high efficiency and large voltage drops; LDO for small drops and noise-sensitive circuits.",
        "keywords": ["buck converter", "LDO", "efficiency", "selection"]
      },
      {
        "question": "When should I use a boost converter?",
        "answer": "Use a boost converter when you need to generate a higher output voltage from a lower input voltage. Common applications include generating 3.3V or 5V from single-cell batteries (AA, AAA, or Li-ion). Boost converters are essential when the required output voltage exceeds the available input voltage.",
        "decisionGuide": "Boost converter needed when output voltage > input voltage; essential for single-cell to 3.3V/5V conversion.",
        "keywords": ["boost converter", "step-up", "voltage conversion", "single cell"]
      },
      {
        "question": "What is the difference between synchronous and non-synchronous buck converters?",
        "answer": "Synchronous buck converters use a MOSFET instead of a diode for the low-side switch, improving efficiency by eliminating diode forward voltage drop. Non-synchronous converters use a diode, which is simpler but less efficient. LP6235 is synchronous for highest efficiency.",
        "decisionGuide": "Synchronous for highest efficiency; non-synchronous for simpler design and lower cost.",
        "keywords": ["synchronous", "non-synchronous", "buck converter", "efficiency"]
      },
      {
        "question": "What switching frequency should I choose?",
        "answer": "Higher switching frequencies (1-2MHz) allow smaller inductors and capacitors, reducing solution size and cost. However, higher frequencies may increase switching losses and EMI. Lower frequencies (300-500kHz) offer better efficiency but require larger components. LP6235 uses 1.5MHz for good balance.",
        "decisionGuide": "Higher frequency for smaller size; lower frequency for better efficiency; 1-2MHz typical for portable devices.",
        "keywords": ["switching frequency", "inductor size", "EMI", "efficiency"]
      },
      {
        "question": "What is PFM mode and when is it used?",
        "answer": "PFM (Pulse Frequency Modulation) is a light-load operating mode that reduces switching frequency to maintain high efficiency at low output currents. At light loads, PFM mode reduces switching losses and quiescent current. LP6235 automatically switches between PFM and PWM modes based on load.",
        "decisionGuide": "PFM mode improves light-load efficiency; automatic switching ensures optimal efficiency across load range.",
        "keywords": ["PFM", "pulse frequency modulation", "light load", "efficiency"]
      }
    ]
  },
  {
    "id": "battery-charger",
    "name": "Battery Chargers",
    "slug": "battery-charger",
    "description": "Li-ion and Li-Polymer battery charging solutions with high integration",
    "longDescription": "Lowpowersemi battery chargers provide complete charging solutions for single-cell Li-ion and Li-Polymer batteries. These highly integrated chargers require minimal external components and include safety features such as over-voltage protection, thermal regulation, and charge termination. With programmable charge currents and automatic recharge, they are ideal for portable electronics, IoT devices, and wearable products. As an authorized Lowpowersemi distributor, BeiLuo Electronics provides comprehensive selection guide and technical support for choosing the right battery charger for your application.",
    "image": "/assets/brands/lowpowersemi/battery-charger-category.jpg",
    "series": [
      {
        "name": "LP4054 Series",
        "description": "Standalone linear Li-ion charger with 800mA capability"
      },
      {
        "name": "LP4056 Series",
        "description": "Complete charge management with power path control"
      }
    ],
    "selectionGuide": "Choose LP4054 for simple standalone charging applications. Select LP4056 for systems requiring power path management and system power prioritization. Consider charge current requirements and system architecture.",
    "selectionGuideLink": "/brands/lowpowersemi/support/battery-charger-selection-guide/",
    "parameters": ["Input Voltage", "Charge Current", "Battery Type", "Charge Voltage", "Features"],
    "products": [
      {
        "partNumber": "LP4054",
        "name": "LP4054 Li-ion Battery Charger",
        "category": "Battery Chargers",
        "shortDescription": "Standalone linear Li-ion battery charger with 800mA programmable charge current",
        "descriptionParagraphs": [
          "The LP4054 is a complete constant-current/constant-voltage linear charger for single-cell Li-ion and Li-Polymer batteries. It requires minimal external components - only a single external resistor is needed to set the charge current. The device can deliver up to 800mA charge current.",
          "The charger operates from a 4.5V to 6.5V input and provides a regulated 4.2V charge voltage with ±1% accuracy. It automatically pre-conditions deeply discharged batteries with a trickle charge, then transitions to fast charge, and finally to constant-voltage mode. Charge termination occurs when charge current drops to 1/10 of the programmed value.",
          "The LP4054 includes safety features such as thermal regulation, reverse current protection, and charge status indicator. When input power is removed, the device automatically enters low-power sleep mode with less than 2μA battery drain. Available in a compact SOT-23-5 package, it is ideal for portable electronics."
        ],
        "specifications": {
          "Input Voltage Range": "4.5V - 6.5V",
          "Charge Voltage": "4.2V (±1% accuracy)",
          "Charge Current": "Up to 800mA (programmable)",
          "Trickle Charge Current": "10% of fast charge",
          "Charge Termination": "C/10 threshold",
          "Sleep Mode Current": "<2μA",
          "Thermal Regulation": "120°C junction temperature",
          "Charge Status Output": "Open-drain indicator",
          "Operating Temperature": "-40°C to +85°C",
          "Package": "SOT-23-5"
        },
        "features": [
          "Complete standalone charger",
          "Up to 800mA programmable charge current",
          "±1% charge voltage accuracy",
          "Automatic trickle, fast, and CV charging",
          "C/10 charge termination",
          "Thermal regulation protection",
          "Low <2μA sleep mode current",
          "Charge status indicator output"
        ],
        "applications": [
          "Portable media players",
          "Bluetooth headsets",
          "GPS devices",
          "Digital cameras",
          "Handheld instruments"
        ],
        "faeReview": {
          "author": "Zhang Wei",
          "title": "Senior FAE - Battery Management",
          "content": "The LP4054 is a reliable and simple Li-ion charger that I've used in many portable product designs. The minimal external component count (just one resistor for current setting) makes it very cost-effective. The ±1% charge voltage accuracy ensures safe and complete charging without overcharging the battery. I particularly like the thermal regulation feature - it automatically reduces charge current if the die temperature exceeds 120°C, preventing thermal shutdown during high-temperature charging. The charge status pin is useful for driving an LED indicator. One implementation tip: the charge current programming resistor should be placed close to the IC, and the PROG pin should be bypassed with a small capacitor (100pF) for noise immunity. The 2μA sleep mode current is excellent - it won't drain the battery when USB power is disconnected. I've used this charger in everything from Bluetooth headsets to GPS devices with excellent reliability. Overall, a solid, no-frills Li-ion charger at a great price point.",
          "highlight": "Simple standalone Li-ion charger with minimal external components and reliable operation"
        },
        "alternativeParts": [
          {
            "partNumber": "MCP73831",
            "brand": "Microchip",
            "link": "/brands/microchip/products/battery-charger/mcp73831/",
            "reason": "Popular standalone Li-ion charger from Microchip",
            "useCase": "Alternative for Microchip-based designs",
            "specifications": {
              "Input Voltage Range": "3.75V - 6V",
              "Charge Voltage": "4.2V",
              "Charge Current": "Up to 500mA",
              "Package": "SOT-23-5"
            },
            "comparison": {
              "Input Voltage Range": "3.75V - 6V > 4.5V - 6.5V",
              "Charge Current": "500mA < 800mA",
              "Charge Voltage": "4.2V = 4.2V",
              "Package": "SOT-23-5 = SOT-23-5"
            }
          },
          {
            "partNumber": "TP4054",
            "brand": "NanJing TopPower",
            "link": "/brands/toppower/products/battery-charger/tp4054/",
            "reason": "Low-cost Li-ion charger compatible with popular designs",
            "useCase": "Alternative for cost-sensitive consumer applications",
            "specifications": {
              "Input Voltage Range": "4V - 8V",
              "Charge Voltage": "4.2V",
              "Charge Current": "Up to 600mA",
              "Package": "SOT-23-5"
            },
            "comparison": {
              "Input Voltage Range": "4V - 8V > 4.5V - 6.5V",
              "Charge Current": "600mA < 800mA",
              "Charge Voltage": "4.2V = 4.2V",
              "Package": "SOT-23-5 = SOT-23-5"
            }
          }
        ],
        "companionParts": [
          {
            "partNumber": "LP3990-33",
            "category": "LDO",
            "description": "Ultra-low IQ LDO for system power",
            "link": "/brands/lowpowersemi/products/ldo/lp3990-33/"
          },
          {
            "partNumber": "LP6235",
            "category": "DC-DC",
            "description": "Buck converter for system power management",
            "link": "/brands/lowpowersemi/products/dc-dc/lp6235/"
          },
          {
            "partNumber": "LP5907-33",
            "category": "LDO",
            "description": "High PSRR LDO for analog circuits",
            "link": "/brands/lowpowersemi/products/ldo/lp5907-33/"
          }
        ],
        "faqs": [
          {
            "question": "What is the maximum charge current of LP4054?",
            "answer": "The LP4054 can deliver up to 800mA of charge current. The charge current is programmed using a single external resistor connected to the PROG pin. The resistor value is calculated as R_PROG = 1000V / I_CHG. For example, use 1kΩ for 1A (limited to 800mA max), or 2kΩ for 500mA.",
            "decisionGuide": "Up to 800mA programmable charge current; set with external resistor R_PROG = 1000V / I_CHG.",
            "keywords": ["charge current", "800mA", "programmable", "PROG pin"]
          },
          {
            "question": "What is the charge voltage accuracy of LP4054?",
            "answer": "The LP4054 provides a regulated 4.2V charge voltage with ±1% accuracy. This high accuracy ensures safe charging without overcharging the battery, which is critical for battery safety and longevity. The tight voltage regulation prevents the battery voltage from exceeding safe limits.",
            "decisionGuide": "±1% accuracy ensures safe charging; important for battery safety and cycle life.",
            "keywords": ["charge voltage", "4.2V", "accuracy", "regulation"]
          },
          {
            "question": "How does LP4054 charge a deeply discharged battery?",
            "answer": "LP4054 automatically implements a three-stage charging algorithm. For deeply discharged batteries (voltage below 2.9V), it starts with trickle charge at 10% of the programmed current. Once the battery voltage reaches 2.9V, it switches to fast charge (constant current). When the battery approaches 4.2V, it transitions to constant voltage mode until charge termination.",
            "decisionGuide": "Automatic three-stage charging ensures safe recovery of deeply discharged batteries.",
            "keywords": ["trickle charge", "fast charge", "charging stages", "deep discharge"]
          },
          {
            "question": "When does LP4054 terminate charging?",
            "answer": "LP4054 terminates charging when the charge current drops to 1/10 (C/10) of the programmed fast charge current during constant voltage mode. This indicates the battery is fully charged. After termination, the charger monitors the battery voltage and automatically restarts charging if the voltage drops by approximately 100mV.",
            "decisionGuide": "C/10 termination ensures full charge; automatic recharge maintains battery capacity.",
            "keywords": ["charge termination", "C/10", "automatic recharge", "full charge"]
          },
          {
            "question": "What is the sleep mode current of LP4054?",
            "answer": "When input power is removed, LP4054 automatically enters sleep mode with less than 2μA current drain from the battery. This ultra-low sleep current prevents battery drain when the device is stored or not connected to power, extending shelf life.",
            "decisionGuide": "<2μA sleep mode current prevents battery drain during storage or when unplugged.",
            "keywords": ["sleep mode", "quiescent current", "battery drain", "storage"]
          },
          {
            "question": "What external components are needed for LP4054?",
            "answer": "LP4054 requires minimal external components: a programming resistor (typically 1-2kΩ) to set charge current, an input bypass capacitor (4.7μF or 10μF ceramic), and optionally a charge status LED with current limiting resistor. This minimal BOM reduces cost and board space.",
            "decisionGuide": "Minimal external components; programming resistor, input capacitor, optional status LED.",
            "keywords": ["external components", "BOM", "programming resistor", "capacitor"]
          },
          {
            "question": "Does LP4054 have thermal protection?",
            "answer": "Yes, LP4054 includes thermal regulation that automatically reduces charge current if the die temperature exceeds 120°C. This feature prevents thermal shutdown and allows charging to continue at a reduced rate in high-temperature environments, improving reliability.",
            "decisionGuide": "Thermal regulation prevents overheating; charging continues at reduced rate if needed.",
            "keywords": ["thermal protection", "thermal regulation", "temperature", "safety"]
          }
        ]
      },
      {
        "partNumber": "LP4056",
        "name": "LP4056 Power Path Charger",
        "category": "Battery Chargers",
        "shortDescription": "Complete charge management IC with power path control for simultaneous charging and system operation",
        "descriptionParagraphs": [
          "The LP4056 is a complete power path management and battery charger IC for single-cell Li-ion and Li-Polymer batteries. It provides power path control that allows simultaneous charging of the battery while powering the system, with automatic power source selection.",
          "The device can deliver up to 1A charge current while supporting system loads up to 2A. When input power is available, the system is powered directly from the input while charging the battery. If system load exceeds input capacity, the battery supplements the input power. When input is removed, the system seamlessly switches to battery power.",
          "The LP4056 includes input current limiting, charge status indicators, thermal regulation, and safety timers. It supports USB charging with programmable input current limits (100mA/500mA for USB, or higher for adapter). Available in a compact QFN-16 package, it is ideal for smartphones, tablets, and portable media devices."
        ],
        "specifications": {
          "Input Voltage Range": "4.5V - 6.5V",
          "Charge Voltage": "4.2V (±0.5% accuracy)",
          "Charge Current": "Up to 1A (programmable)",
          "System Current": "Up to 2A",
          "Input Current Limit": "100mA/500mA/1A/1.5A (selectable)",
          "Sleep Mode Current": "<5μA",
          "Charge Status Outputs": "Dual open-drain indicators",
          "Safety Timer": "7-hour charge termination",
          "Operating Temperature": "-40°C to +85°C",
          "Package": "QFN-16 (3mm x 3mm)"
        },
        "features": [
          "Complete power path management",
          "Simultaneous charge and system power",
          "Up to 1A charge current",
          "Up to 2A system current",
          "Automatic power source selection",
          "USB-compliant input current limits",
          "Dual charge status indicators",
          "7-hour safety timer"
        ],
        "applications": [
          "Smartphones",
          "Tablets",
          "Portable media players",
          "Handheld gaming devices",
          "Mobile internet devices"
        ],
        "faeReview": {
          "author": "Li Ming",
          "title": "Senior FAE - System Power",
          "content": "The LP4056 is an excellent power path management IC that I have used in several smartphone and tablet designs. The key advantage is the power path architecture - the system can operate directly from input power while charging the battery, eliminating the charge/discharge cycling that reduces battery life. The automatic power source selection works seamlessly - when you unplug the charger, the system switches to battery power without any interruption. The input current limiting is crucial for USB compliance - you can set 100mA for unconfigured USB, 500mA for standard USB, or higher for AC adapters. I particularly like the dual status outputs that indicate charging and power good states separately. The 7-hour safety timer prevents overcharging in fault conditions. One implementation tip: the input and output capacitors should be sized based on your system load transients. I typically use 10μF ceramic on both input and output. The QFN package requires good PCB layout for thermal management - use thermal vias to spread heat. Overall, a feature-rich power management IC at a competitive price.",
          "highlight": "Power path charger with simultaneous charging and system operation for smartphones and tablets"
        },
        "alternativeParts": [
          {
            "partNumber": "BQ24075",
            "brand": "Texas Instruments",
            "link": "/brands/ti/products/battery-charger/bq24075/",
            "reason": "Power path charger with I2C control from TI",
            "useCase": "Alternative for TI-based designs requiring I2C control",
            "specifications": {
              "Input Voltage Range": "4.2V - 10V",
              "Charge Current": "Up to 1.5A",
              "System Current": "Up to 2A",
              "Input Current Limit": "Programmable via I2C",
              "Package": "QFN-16"
            },
            "comparison": {
              "Input Voltage Range": "4.2V - 10V > 4.5V - 6.5V",
              "Charge Current": "1.5A > 1A",
              "System Current": "2A = 2A",
              "Package": "QFN-16 = QFN-16"
            }
          },
          {
            "partNumber": "ISL9237",
            "brand": "Renesas",
            "link": "/brands/renesas/products/battery-charger/isl9237/",
            "reason": "High-performance power path charger",
            "useCase": "Alternative for high-end tablet and laptop applications",
            "specifications": {
              "Input Voltage Range": "3.8V - 23V",
              "Charge Current": "Up to 3A",
              "System Current": "Up to 6A",
              "Input Current Limit": "Programmable",
              "Package": "QFN-32"
            },
            "comparison": {
              "Input Voltage Range": "3.8V - 23V > 4.5V - 6.5V",
              "Charge Current": "3A > 1A",
              "System Current": "6A > 2A",
              "Package": "QFN-32 > QFN-16"
            }
          }
        ],
        "companionParts": [
          {
            "partNumber": "LP6235",
            "category": "DC-DC",
            "description": "Buck converter for system power regulation",
            "link": "/brands/lowpowersemi/products/dc-dc/lp6235/"
          },
          {
            "partNumber": "LP5907-33",
            "category": "LDO",
            "description": "High PSRR LDO for sensitive analog circuits",
            "link": "/brands/lowpowersemi/products/ldo/lp5907-33/"
          },
          {
            "partNumber": "LP3990-33",
            "category": "LDO",
            "description": "Ultra-low IQ LDO for always-on circuits",
            "link": "/brands/lowpowersemi/products/ldo/lp3990-33/"
          }
        ],
        "faqs": [
          {
            "question": "What is power path management?",
            "answer": "Power path management allows the system to operate directly from input power while simultaneously charging the battery. The IC automatically manages power flow between input, battery, and system load. When input power is available, the system runs from input while charging. When input is removed, the system seamlessly switches to battery power.",
            "decisionGuide": "Power path eliminates charge/discharge cycling, extending battery life; essential for devices used while charging.",
            "keywords": ["power path", "power management", "simultaneous charge", "system operation"]
          },
          {
            "question": "What is the difference between LP4054 and LP4056?",
            "answer": "LP4054 is a simple standalone charger that charges the battery which then powers the system. LP4056 includes power path management, allowing simultaneous charging and system operation with automatic power source selection. LP4056 is better for devices that need to operate while charging.",
            "decisionGuide": "LP4054 for simple charging; LP4056 for devices requiring simultaneous operation and charging.",
            "keywords": ["LP4054", "LP4056", "comparison", "power path"]
          },
          {
            "question": "What input current limits does LP4056 support?",
            "answer": "LP4056 supports programmable input current limits of 100mA, 500mA, 1A, and 1.5A. The 100mA and 500mA settings are USB-compliant for standard USB ports. Higher settings can be used with AC adapters. This allows the device to charge from various power sources without overloading them.",
            "decisionGuide": "Select input current limit based on power source capability; 100mA/500mA for USB, higher for adapters.",
            "keywords": ["input current limit", "USB charging", "100mA", "500mA"]
          },
          {
            "question": "Can LP4056 power the system while charging?",
            "answer": "Yes, LP4056 is specifically designed to power the system while charging the battery. It can deliver up to 2A to the system while charging the battery at up to 1A. If the system load exceeds the input capacity, the battery automatically supplements the power.",
            "decisionGuide": "Yes, simultaneous operation supported; battery supplements power if system load exceeds input capacity.",
            "keywords": ["simultaneous operation", "system power", "charging", "supplement"]
          },
          {
            "question": "What happens when input power is removed?",
            "answer": "When input power is removed, LP4056 automatically and seamlessly switches the system to battery power without interruption. The switchover happens in microseconds, ensuring continuous system operation. The charger enters sleep mode with less than 5μA current draw.",
            "decisionGuide": "Automatic seamless switchover to battery; no system interruption when unplugging charger.",
            "keywords": ["switchover", "battery power", "seamless", "automatic"]
          },
          {
            "question": "What safety features does LP4056 include?",
            "answer": "LP4056 includes multiple safety features: input current limiting prevents overloading power sources, thermal regulation prevents overheating, a 7-hour safety timer prevents overcharging, and reverse current protection prevents battery drain. These features ensure safe and reliable charging.",
            "decisionGuide": "Multiple safety features ensure reliable operation; safety timer prevents overcharging in fault conditions.",
            "keywords": ["safety", "protection", "thermal regulation", "safety timer"]
          },
          {
            "question": "What do the status outputs indicate?",
            "answer": "LP4056 provides dual open-drain status outputs. One indicates charging status (active low when charging), and the other indicates power good (active low when valid input power is present). These can drive LEDs or connect to a microcontroller for monitoring.",
            "decisionGuide": "Dual status outputs for charging and power good; connect to LEDs or microcontroller for monitoring.",
            "keywords": ["status output", "charge indicator", "power good", "LED"]
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between linear and switching chargers?",
        "answer": "Linear chargers (like LP4054) are simple, low-cost, and generate minimal EMI, but have lower efficiency (power dissipation = (VIN - VBAT) × ICHARGE). Switching chargers are more efficient but more complex and generate switching noise. Linear chargers are preferred for low-cost, low-current applications.",
        "decisionGuide": "Linear for simple low-cost designs; switching for high-current or thermally constrained applications.",
        "keywords": ["linear charger", "switching charger", "efficiency", "comparison"]
      },
      {
        "question": "When should I use power path management?",
        "answer": "Use power path management (LP4056) when your device needs to operate while charging. This eliminates battery charge/discharge cycling, extending battery life. It's essential for smartphones, tablets, and other devices that are frequently used while plugged in.",
        "decisionGuide": "Power path for devices used while charging; simple charger for devices charged while off.",
        "keywords": ["power path", "LP4056", "battery life", "simultaneous operation"]
      },
      {
        "question": "What is the standard Li-ion charge profile?",
        "answer": "Li-ion charging follows a three-stage profile: 1) Trickle charge for deeply discharged batteries (below 2.9V) at ~0.1C, 2) Constant current (CC) fast charge at up to 1C until voltage reaches 4.2V, 3) Constant voltage (CV) charge at 4.2V until current drops to C/10, then termination.",
        "decisionGuide": "Three-stage charging ensures safe and complete charging; all Lowpowersemi chargers implement this profile.",
        "keywords": ["charge profile", "CCCV", "trickle charge", "fast charge"]
      },
      {
        "question": "How do I set the charge current?",
        "answer": "For LP4054, connect a resistor from PROG pin to ground: R_PROG = 1000V / I_CHG. For example, 1kΩ for 1A (limited to 800mA max), or 2kΩ for 500mA. For LP4056, charge current is set via external resistor or programming interface depending on the variant.",
        "decisionGuide": "Use R_PROG = 1000V / I_CHG for LP4054; verify maximum current rating of your battery.",
        "keywords": ["charge current", "programming", "PROG pin", "resistor"]
      },
      {
        "question": "What input voltage should I use for charging?",
        "answer": "Use 5V input for most Li-ion charging applications. This provides adequate headroom for the 4.2V charge voltage while minimizing power dissipation in linear chargers. LP4054 and LP4056 accept 4.5V to 6.5V input, making them compatible with 5V USB and adapters.",
        "decisionGuide": "5V input standard for Li-ion charging; 4.5V-6.5V range accepts USB and adapter power.",
        "keywords": ["input voltage", "5V", "USB", "adapter"]
      }
    ]
  },
  {
    "id": "load-switch",
    "name": "Load Switches",
    "slug": "load-switch",
    "description": "Power distribution and load switching solutions with low on-resistance",
    "longDescription": "Lowpowersemi load switches provide controlled power distribution for multi-rail systems. These switches feature low on-resistance to minimize voltage drop and power loss, fast turn-on/off times for power sequencing, and slew rate control to limit inrush current. With enable pins for software control and fault protection features, they are ideal for power management in portable electronics, IoT devices, and industrial systems. As an authorized Lowpowersemi distributor, BeiLuo Electronics provides comprehensive selection guide and technical support for choosing the right load switch for your application.",
    "image": "/assets/brands/lowpowersemi/load-switch-category.jpg",
    "series": [
      {
        "name": "LP5240 Series",
        "description": "Low on-resistance load switch with enable control"
      },
      {
        "name": "LP5241 Series",
        "description": "Load switch with slew rate control and fault protection"
      }
    ],
    "selectionGuide": "Choose LP5240 for simple on/off switching applications. Select LP5241 for applications requiring slew rate control to limit inrush current. Consider current requirements, on-resistance, and protection features for your specific application.",
    "selectionGuideLink": "/brands/lowpowersemi/support/load-switch-selection-guide/",
    "parameters": ["Input Voltage", "Current Rating", "On-Resistance", "Slew Rate", "Protection"],
    "products": [
      {
        "partNumber": "LP5240",
        "name": "LP5240 Load Switch",
        "category": "Load Switches",
        "shortDescription": "Low on-resistance load switch with enable control for power distribution applications",
        "descriptionParagraphs": [
          "The LP5240 is a low on-resistance load switch designed for power distribution and power sequencing applications. It features an N-channel MOSFET with typical on-resistance of 60mΩ, minimizing voltage drop and power loss even at high currents.",
          "The device operates from 1.8V to 5.5V input voltage and can support continuous currents up to 2A. The active-high enable pin allows software control of power rails, making it ideal for power sequencing in multi-rail systems and for turning off unused circuits to save power.",
          "The LP5240 includes thermal shutdown protection and reverse current blocking. The fast turn-on and turn-off times (microseconds) enable quick power switching. Available in a compact SOT-23-5 package, it is perfect for space-constrained portable electronics and IoT devices."
        ],
        "specifications": {
          "Input Voltage Range": "1.8V - 5.5V",
          "Current Rating": "2A continuous",
          "On-Resistance": "60mΩ typical",
          "Quiescent Current": "0.5μA (disabled)",
          "Turn-On Time": "100μs typical",
          "Turn-Off Time": "10μs typical",
          "Enable Threshold": "1.2V typical",
          "Thermal Shutdown": "150°C",
          "Operating Temperature": "-40°C to +85°C",
          "Package": "SOT-23-5"
        },
        "features": [
          "Low 60mΩ on-resistance",
          "2A continuous current capability",
          "1.8V to 5.5V input voltage range",
          "Active-high enable pin",
          "Fast 100μs turn-on time",
          "Ultra-low 0.5μA disabled current",
          "Thermal shutdown protection",
          "Reverse current blocking"
        ],
        "applications": [
          "Power distribution",
          "Power sequencing",
          "Battery-powered devices",
          "IoT sensors",
          "Portable electronics"
        ],
        "faeReview": {
          "author": "Dr. Wang Li",
          "title": "Senior FAE - Power Distribution",
          "content": "The LP5240 is a reliable load switch that I use frequently for power distribution in multi-rail systems. The 60mΩ on-resistance is excellent for the price point - at 1A current, you only get 60mV drop, which is negligible for most digital circuits. The 0.5μA disabled current is crucial for battery-powered devices where you need to completely shut off unused circuits. I've used this switch in IoT sensor designs where different sensors are powered on only when needed, significantly extending battery life. The enable pin has a 1.2V threshold, making it compatible with 1.8V and 3.3V logic. One implementation tip: place a small capacitor (0.1μF) near the input pin to suppress transients during switching. The thermal shutdown is a nice safety feature - I've seen it protect designs during fault conditions. The SOT-23-5 package is easy to handle and requires minimal board space. Overall, a solid load switch for power management applications.",
          "highlight": "Low on-resistance load switch with enable control for power distribution and sequencing"
        },
        "alternativeParts": [
          {
            "partNumber": "TPS22919",
            "brand": "Texas Instruments",
            "link": "/brands/ti/products/load-switch/tps22919/",
            "reason": "Low on-resistance load switch from TI",
            "useCase": "Alternative for TI-based designs",
            "specifications": {
              "Input Voltage Range": "1V - 5.5V",
              "Current Rating": "2A",
              "On-Resistance": "45mΩ",
              "Package": "SOT-23"
            },
            "comparison": {
              "Input Voltage Range": "1V - 5.5V > 1.8V - 5.5V",
              "Current Rating": "2A = 2A",
              "On-Resistance": "45mΩ < 60mΩ",
              "Package": "SOT-23 = SOT-23-5"
            }
          },
          {
            "partNumber": "FPF2195",
            "brand": "ON Semiconductor",
            "link": "/brands/onsemi/products/load-switch/fpf2195/",
            "reason": "Load switch with current limiting",
            "useCase": "Alternative for applications requiring current limiting",
            "specifications": {
              "Input Voltage Range": "1.5V - 5.5V",
              "Current Rating": "1.5A",
              "On-Resistance": "80mΩ",
              "Package": "MLP"
            },
            "comparison": {
              "Input Voltage Range": "1.5V - 5.5V < 1.8V - 5.5V",
              "Current Rating": "1.5A < 2A",
              "On-Resistance": "80mΩ > 60mΩ",
              "Package": "MLP < SOT-23-5"
            }
          }
        ],
        "companionParts": [
          {
            "partNumber": "LP3990-33",
            "category": "LDO",
            "description": "Ultra-low IQ LDO for regulated power",
            "link": "/brands/lowpowersemi/products/ldo/lp3990-33/"
          },
          {
            "partNumber": "LP6235",
            "category": "DC-DC",
            "description": "Buck converter for main system power",
            "link": "/brands/lowpowersemi/products/dc-dc/lp6235/"
          },
          {
            "partNumber": "LP5241",
            "category": "Load Switch",
            "description": "Load switch with slew rate control",
            "link": "/brands/lowpowersemi/products/load-switch/lp5241/"
          }
        ],
        "faqs": [
          {
            "question": "What is the on-resistance of LP5240?",
            "answer": "The LP5240 features a low on-resistance of 60mΩ typical. This low resistance minimizes voltage drop and power loss when the switch is on. At 1A current, the voltage drop is only 60mV, which is negligible for most digital circuits.",
            "decisionGuide": "60mΩ on-resistance excellent for price point; minimizes voltage drop and power loss.",
            "keywords": ["on-resistance", "60mΩ", "Rds(on)", "voltage drop"]
          },
          {
            "question": "What is the maximum current of LP5240?",
            "answer": "The LP5240 can support continuous currents up to 2A. This current capability is sufficient for most sub-systems in portable devices, including sensors, memory, and peripheral circuits. Ensure adequate PCB copper area for heat dissipation at high currents.",
            "decisionGuide": "2A sufficient for most sub-systems; verify thermal design for continuous high-current operation.",
            "keywords": ["current rating", "2A", "continuous current", "load current"]
          },
          {
            "question": "How do I control LP5240?",
            "answer": "LP5240 is controlled via an active-high enable pin. Drive the enable pin high (above 1.2V threshold) to turn the switch on. Drive it low or leave floating to turn the switch off. The enable pin is compatible with 1.8V and 3.3V logic levels.",
            "decisionGuide": "Active-high enable; drive high to turn on, low to turn off; compatible with standard logic levels.",
            "keywords": ["enable", "control", "active high", "logic level"]
          },
          {
            "question": "What is the disabled current of LP5240?",
            "answer": "When disabled, LP5240 draws only 0.5μA typical current. This ultra-low disabled current makes it ideal for battery-powered applications where you need to completely shut off unused circuits to maximize battery life.",
            "decisionGuide": "0.5μA disabled current excellent for battery life; use to power-gate unused circuits.",
            "keywords": ["disabled current", "0.5μA", "quiescent current", "power gating"]
          },
          {
            "question": "How fast does LP5240 switch?",
            "answer": "LP5240 has a turn-on time of 100μs typical and turn-off time of 10μs typical. This fast switching enables quick power sequencing and rapid response to enable signals. The fast turn-off is particularly useful for quickly disconnecting faulted loads.",
            "decisionGuide": "Fast switching suitable for power sequencing; 10μs turn-off quickly disconnects faulted loads.",
            "keywords": ["switching time", "turn-on", "turn-off", "speed"]
          },
          {
            "question": "What protection features does LP5240 include?",
            "answer": "LP5240 includes thermal shutdown protection that turns off the switch if the die temperature exceeds 150°C. It also features reverse current blocking that prevents current flow from output to input when the switch is off.",
            "decisionGuide": "Thermal shutdown protects against overheating; reverse blocking prevents back-feeding.",
            "keywords": ["protection", "thermal shutdown", "reverse blocking", "safety"]
          },
          {
            "question": "What applications are suitable for LP5240?",
            "answer": "LP5240 is ideal for power distribution in multi-rail systems, power sequencing, turning off unused circuits to save power, and protecting sensitive circuits from power supply transients. It is commonly used in IoT devices, portable electronics, and battery-powered instruments.",
            "decisionGuide": "Use for power distribution, sequencing, and power gating in battery-powered and multi-rail systems.",
            "keywords": ["applications", "power distribution", "sequencing", "power gating"]
          }
        ]
      },
      {
        "partNumber": "LP5241",
        "name": "LP5241 Load Switch with Slew Rate Control",
        "category": "Load Switches",
        "shortDescription": "Load switch with programmable slew rate control to limit inrush current during turn-on",
        "descriptionParagraphs": [
          "The LP5241 is an advanced load switch featuring programmable slew rate control to limit inrush current during turn-on. This feature is essential for powering capacitive loads and preventing voltage droop on the power rail when switching large loads.",
          "The device operates from 1.8V to 5.5V and supports continuous currents up to 1.5A. The on-resistance is 80mΩ typical. An external capacitor connected to the CT pin sets the turn-on slew rate, allowing customization of the turn-on time from microseconds to milliseconds.",
          "The LP5241 includes fault protection features such as over-current protection and thermal shutdown. The active-high enable pin with internal pull-down ensures the switch is off by default. Available in a compact SOT-23-6 package, it is ideal for powering sensitive circuits and large capacitive loads."
        ],
        "specifications": {
          "Input Voltage Range": "1.8V - 5.5V",
          "Current Rating": "1.5A continuous",
          "On-Resistance": "80mΩ typical",
          "Quiescent Current": "1μA (disabled)",
          "Turn-On Time": "Programmable (100μs to 10ms)",
          "Turn-Off Time": "10μs typical",
          "Slew Rate Control": "External capacitor",
          "Over-Current Protection": "1.8A typical",
          "Operating Temperature": "-40°C to +85°C",
          "Package": "SOT-23-6"
        },
        "features": [
          "Programmable slew rate control",
          "Limits inrush current",
          "1.5A continuous current",
          "80mΩ on-resistance",
          "Over-current protection",
          "Adjustable turn-on time",
          "Active-high enable",
          "Thermal shutdown protection"
        ],
        "applications": [
          "Capacitive load switching",
          "Power sequencing",
          "Sensitive circuit protection",
          "Large load switching",
          "Inrush current limiting"
        ],
        "faeReview": {
          "author": "Chen Ming",
          "title": "Senior FAE - System Protection",
          "content": "The LP5241 is my go-to load switch when I need to control inrush current. The programmable slew rate is a game-changer - you can set the turn-on time from fast (100μs) to slow (10ms) depending on your load. This is essential when powering circuits with large input capacitors or when you need to prevent voltage droop on a shared power rail. I recently used it in a design powering a WiFi module with 100μF of input capacitance. Without slew rate control, the inrush current caused the system voltage to droop and reset the processor. With LP5241 and a 10nF CT capacitor, the turn-on was smooth and problem-free. The over-current protection is also useful - it limits current to about 1.8A during faults. One implementation tip: the CT capacitor should be a good quality ceramic (X7R) for stable timing. The SOT-23-6 package is still compact but provides the extra pin for CT. Overall, an excellent load switch for applications requiring controlled turn-on.",
          "highlight": "Load switch with programmable slew rate control for inrush current limiting"
        },
        "alternativeParts": [
          {
            "partNumber": "TPS22918",
            "brand": "Texas Instruments",
            "link": "/brands/ti/products/load-switch/tps22918/",
            "reason": "Load switch with slew rate control from TI",
            "useCase": "Alternative for TI-based designs",
            "specifications": {
              "Input Voltage Range": "1V - 5.5V",
              "Current Rating": "2A",
              "On-Resistance": "60mΩ",
              "Slew Rate Control": "Fixed"
            },
            "comparison": {
              "Input Voltage Range": "1V - 5.5V > 1.8V - 5.5V",
              "Current Rating": "2A > 1.5A",
              "On-Resistance": "60mΩ < 80mΩ",
              "Slew Rate Control": "Fixed < Programmable"
            }
          },
          {
            "partNumber": "FPF2165",
            "brand": "ON Semiconductor",
            "link": "/brands/onsemi/products/load-switch/fpf2165/",
            "reason": "Load switch with current limiting and slew rate control",
            "useCase": "Alternative for applications requiring both features",
            "specifications": {
              "Input Voltage Range": "1.5V - 5.5V",
              "Current Rating": "1.5A",
              "On-Resistance": "85mΩ",
              "Slew Rate Control": "Fixed"
            },
            "comparison": {
              "Input Voltage Range": "1.5V - 5.5V < 1.8V - 5.5V",
              "Current Rating": "1.5A = 1.5A",
              "On-Resistance": "85mΩ > 80mΩ",
              "Slew Rate Control": "Fixed < Programmable"
            }
          }
        ],
        "companionParts": [
          {
            "partNumber": "LP5240",
            "category": "Load Switch",
            "description": "Simple load switch for basic on/off control",
            "link": "/brands/lowpowersemi/products/load-switch/lp5240/"
          },
          {
            "partNumber": "LP3990-33",
            "category": "LDO",
            "description": "Ultra-low IQ LDO for regulated power",
            "link": "/brands/lowpowersemi/products/ldo/lp3990-33/"
          },
          {
            "partNumber": "LP6235",
            "category": "DC-DC",
            "description": "Buck converter for main system power",
            "link": "/brands/lowpowersemi/products/dc-dc/lp6235/"
          }
        ],
        "faqs": [
          {
            "question": "What is slew rate control and why is it important?",
            "answer": "Slew rate control limits how fast the output voltage rises during turn-on. This limits the inrush current when charging capacitive loads, preventing voltage droop on the power rail and avoiding system resets. LP5241 allows programmable slew rate via an external capacitor.",
            "decisionGuide": "Use slew rate control for capacitive loads >10μF or when sharing power rails; prevents voltage droop.",
            "keywords": ["slew rate", "inrush current", "turn-on", "capacitive load"]
          },
          {
            "question": "How do I set the turn-on time of LP5241?",
            "answer": "Connect an external capacitor from the CT pin to ground to set the turn-on time. Larger capacitors result in slower turn-on. Typical values range from 100pF (fast turn-on, ~100μs) to 100nF (slow turn-on, ~10ms). The formula is approximately T_ON = CT × 100μs/nF.",
            "decisionGuide": "Use 100pF-1nF for fast turn-on; 10nF-100nF for slow turn-on with large capacitive loads.",
            "keywords": ["turn-on time", "CT capacitor", "slew rate", "programmable"]
          },
          {
            "question": "What is the on-resistance of LP5241?",
            "answer": "The LP5241 has an on-resistance of 80mΩ typical. While slightly higher than LP5240, this is still excellent for most applications. At 1A current, the voltage drop is 80mV. The slightly higher resistance is due to the additional slew rate control circuitry.",
            "decisionGuide": "80mΩ on-resistance suitable for most applications; trade-off for slew rate control feature.",
            "keywords": ["on-resistance", "80mΩ", "Rds(on)", "voltage drop"]
          },
          {
            "question": "Does LP5241 have over-current protection?",
            "answer": "Yes, LP5241 includes over-current protection that limits current to approximately 1.8A typical. If the load current exceeds this threshold, the switch limits the current to protect both the switch and the power source. This feature is useful for fault protection.",
            "decisionGuide": "Over-current protection provides fault tolerance; useful for protecting against short circuits.",
            "keywords": ["over-current protection", "current limit", "fault protection", "short circuit"]
          },
          {
            "question": "When should I use LP5241 vs LP5240?",
            "answer": "Use LP5241 when you need to control inrush current for capacitive loads or when powering large loads on shared power rails. Use LP5240 for simple on/off switching where inrush current is not a concern. LP5240 has lower on-resistance (60mΩ vs 80mΩ).",
            "decisionGuide": "LP5241 for inrush control; LP5240 for simple switching with lower on-resistance.",
            "keywords": ["LP5241", "LP5240", "comparison", "selection"]
          },
          {
            "question": "What capacitive loads require slew rate control?",
            "answer": "Consider slew rate control when switching loads with input capacitance greater than 10μF. Large capacitive loads can cause significant inrush current (I = C × dV/dt) and voltage droop. Common examples include powering WiFi modules, motor drivers, or subsystems with bulk capacitance.",
            "decisionGuide": "Use slew rate control for loads >10μF capacitance; prevents inrush current issues.",
            "keywords": ["capacitive load", "inrush current", "bulk capacitance", "voltage droop"]
          },
          {
            "question": "What is the disabled current of LP5241?",
            "answer": "When disabled, LP5241 draws only 1μA typical current. This low disabled current makes it suitable for battery-powered applications where circuits need to be completely powered down to maximize battery life.",
            "decisionGuide": "1μA disabled current suitable for battery applications; use for power-gating unused circuits.",
            "keywords": ["disabled current", "1μA", "quiescent current", "power gating"]
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "When should I use a load switch vs a DC-DC converter?",
        "answer": "Use a load switch when you need simple on/off control of a power rail without voltage conversion. Load switches are simpler, lower cost, and generate no noise. Use a DC-DC converter when you need to step up or step down voltage, or when high efficiency is required for voltage conversion.",
        "decisionGuide": "Load switch for simple on/off control; DC-DC for voltage conversion or high efficiency.",
        "keywords": ["load switch", "DC-DC converter", "comparison", "selection"]
      },
      {
        "question": "What is on-resistance and why does it matter?",
        "answer": "On-resistance (Rds(on)) is the resistance of the switch when turned on. Lower on-resistance means less voltage drop and power loss (P = I² × R). For example, at 1A current, 60mΩ causes 60mV drop and 60mW loss. Choose lower on-resistance for higher current applications.",
        "decisionGuide": "Lower on-resistance better for high currents; calculate voltage drop and power loss for your application.",
        "keywords": ["on-resistance", "Rds(on)", "voltage drop", "power loss"]
      },
      {
        "question": "What is inrush current and how do I control it?",
        "answer": "Inrush current is the surge of current when charging capacitive loads during turn-on. It can be calculated as I = C × dV/dt. Control it using slew rate limiting (LP5241), which slows the voltage rise and reduces peak current. This prevents voltage droop on shared power rails.",
        "decisionGuide": "Use slew rate control for capacitive loads; LP5241 programmable slew rate ideal for this purpose.",
        "keywords": ["inrush current", "slew rate", "capacitive load", "turn-on"]
      },
      {
        "question": "How do I calculate power dissipation in a load switch?",
        "answer": "Power dissipation in a load switch is calculated as P = I² × Rds(on), where I is the load current and Rds(on) is the on-resistance. For example, with 1A current and 60mΩ on-resistance, dissipation is 60mW. Ensure this is within the thermal capabilities of your package and PCB.",
        "decisionGuide": "Calculate P = I² × R; verify thermal design can handle dissipation at max current.",
        "keywords": ["power dissipation", "thermal", "Rds(on)", "calculation"]
      },
      {
        "question": "Can I parallel load switches for higher current?",
        "answer": "Paralleling load switches is generally not recommended due to potential current imbalance. Instead, select a load switch with higher current rating or use a DC-DC converter for high-current applications. If paralleling is necessary, ensure careful PCB layout for current sharing.",
        "decisionGuide": "Avoid paralleling; select higher current rated switch or use DC-DC converter instead.",
        "keywords": ["paralleling", "current sharing", "high current", "alternative"]
      }
    ]
  }
];

// Add the new categories
products.categories = [...products.categories, ...additionalCategories];

// Write back
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log("✅ Added 3 new categories to products.json:");
console.log("  - DC-DC Converters (2 products)");
console.log("  - Battery Chargers (2 products)");
console.log("  - Load Switches (2 products)");
console.log("Total categories:", products.categories.length);
