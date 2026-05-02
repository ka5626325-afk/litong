#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'cps');

// Fix products.json
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add decisionGuide and keywords to category FAQs
products.categories[0].faqs = products.categories[0].faqs.map(faq => ({
  ...faq,
  decisionGuide: "Contact FAE for detailed application guidance and product recommendations.",
  keywords: ["MOSFET", "application", "technical"]
}));

// Add decisionGuide and keywords to product FAQs
products.categories[0].products[0].faqs = products.categories[0].products[0].faqs.map(faq => ({
  ...faq,
  decisionGuide: "Refer to datasheet and application notes. Contact FAE for specific design questions.",
  keywords: ["CS20N65", "MOSFET", "application"]
}));

// Fix alternativeParts
products.categories[0].products[0].alternativeParts = [
  {
    partNumber: "CS25N65",
    comparison: "Higher current version (25A) with similar voltage rating, lower Rds(on) of 0.15Ω vs 0.19Ω"
  },
  {
    partNumber: "IPA60R190C6",
    comparison: "Infineon CoolMOS alternative with similar 650V/20A specs, comparable Rds(on)"
  }
];

// Add more categories
const additionalCategories = [
  {
    "id": "igbts",
    "name": "IGBTs",
    "slug": "igbts",
    "description": "High-performance IGBTs for power conversion and motor drive applications",
    "longDescription": "CPS IGBT portfolio includes trench-gate field-stop technology devices for high-efficiency power conversion. These IGBTs offer low Vce(sat), fast switching, and excellent short-circuit capability. Available in voltage ratings from 600V to 1700V for applications including inverters, welders, and motor drives. As an authorized distributor, we provide comprehensive technical support for IGBT selection and application.",
    "series": [
      {
        "name": "600V IGBTs",
        "description": "Low-loss IGBTs for consumer and industrial applications"
      },
      {
        "name": "1200V IGBTs",
        "description": "High-voltage IGBTs for industrial and automotive applications"
      }
    ],
    "selectionGuide": "IGBT Selection Guide",
    "selectionGuideLink": {
      "text": "View IGBTs Selection Guide",
      "url": "/cps/support/igbts-selection-guide.html"
    },
    "faqs": [
      {
        "question": "When should I use IGBT instead of MOSFET?",
        "answer": "IGBTs are preferred for high-voltage (>300V) and high-current applications where conduction losses dominate. MOSFETs are better for lower voltages and high switching frequencies.",
        "decisionGuide": "Consider voltage, current, and switching frequency. IGBTs for high voltage/current, MOSFETs for high frequency/low voltage.",
        "keywords": ["IGBT", "MOSFET", "selection"]
      },
      {
        "question": "What is the maximum junction temperature?",
        "answer": "CPS IGBTs typically have maximum junction temperature of 150°C or 175°C. Always check datasheet for specific ratings.",
        "decisionGuide": "Design for Tj < 125°C under normal operation for reliability. Verify thermal design under worst-case conditions.",
        "keywords": ["temperature", "thermal", "reliability"]
      },
      {
        "question": "How do I calculate IGBT losses?",
        "answer": "Total loss = conduction loss (Vce(sat) × Ic × D) + switching loss (Eon + Eoff) × fsw. Use datasheet values at operating temperature.",
        "decisionGuide": "Calculate both conduction and switching losses. Verify thermal performance using junction-to-case thermal resistance.",
        "keywords": ["losses", "conduction", "switching"]
      },
      {
        "question": "What gate drive voltage should I use?",
        "answer": "Standard IGBTs use +15V turn-on and -5 to -8V turn-off for best performance and noise immunity.",
        "decisionGuide": "Use +15V/-5V gate drive for optimal performance. Ensure gate drive can provide sufficient peak current.",
        "keywords": ["gate drive", "voltage", "drive circuit"]
      },
      {
        "question": "Can I parallel IGBTs?",
        "answer": "Yes, but current sharing depends on Vce(sat) matching and thermal coupling. Use matched devices from same lot for best results.",
        "decisionGuide": "Use devices with closely matched Vce(sat). Ensure symmetrical layout and thermal coupling. Verify current sharing.",
        "keywords": ["parallel", "current sharing", "matching"]
      }
    ],
    "products": [
      {
        "partNumber": "CS40T65",
        "shortDescription": "650V 40A IGBT with trench-gate technology for inverter applications",
        "descriptionParagraphs": [
          "The CS40T65 is a 650V trench-gate field-stop IGBT designed for high-efficiency power conversion applications. It features low Vce(sat) of 1.7V and fast switching characteristics.",
          "The device includes an integrated fast recovery diode suitable for half-bridge applications. The TO-247 package provides excellent thermal performance.",
          "Ideal for motor drives, inverters, welders, and induction heating applications."
        ],
        "keyFeatures": [
          "650V voltage rating",
          "40A continuous current",
          "1.7V Vce(sat)",
          "Trench-gate technology",
          "Fast switching",
          "Integrated diode",
          "TO-247 package"
        ],
        "specifications": {
          "VCE": "650V",
          "IC": "40A",
          "Vce(sat)": "1.7V",
          "Eon": "1.2mJ",
          "Eoff": "0.8mJ",
          "Package": "TO-247"
        },
        "applications": [
          "Motor drives",
          "Inverters",
          "Welders",
          "Induction heating",
          "UPS systems"
        ],
        "faeReview": "The CS40T65 offers excellent performance for 650V applications. The trench-gate technology provides low conduction losses while maintaining good switching speed. I've used this device in numerous inverter designs with excellent results. Key considerations: 1) Use proper gate drive with +15V/-5V for optimal performance. 2) Include adequate dead time to prevent shoot-through. 3) Thermal design is critical - use sufficient heatsinking. 4) The integrated diode simplifies half-bridge designs.",
        "alternativeParts": [
          {
            "partNumber": "CS50T65",
            "comparison": "Higher current version (50A) with similar voltage rating"
          },
          {
            "partNumber": "IKW40N65H5",
            "comparison": "Infineon alternative with similar specs"
          }
        ],
        "companionParts": [
          "CPS Gate Driver ICs",
          "Current Sense Resistors",
          "Snubber Capacitors"
        ],
        "faqs": [
          {
            "question": "What is the switching frequency limit?",
            "answer": "The CS40T65 is optimized for 5-20kHz switching. Higher frequencies are possible but switching losses increase significantly."
          },
          {
            "question": "How much heatsink do I need?",
            "answer": "Calculate using RθJA = (Tj_max - Ta) / Pd. For 100W dissipation at 50°C ambient with 125°C junction target, need 0.75°C/W total thermal resistance."
          },
          {
            "question": "What is the short-circuit capability?",
            "answer": "The CS40T65 can withstand 10μs short-circuit at rated conditions. Protection circuits should detect and shut down within this time."
          },
          {
            "question": "Can I use this for automotive applications?",
            "answer": "Check for AEC-Q101 qualified versions. Standard industrial grade may not meet automotive reliability requirements."
          },
          {
            "question": "What is the recommended gate resistor?",
            "answer": "Typical gate resistors range from 10Ω to 50Ω. Lower values for faster switching, higher values for reduced EMI. Start with 22Ω."
          }
        ]
      }
    ]
  },
  {
    "id": "power-management-ics",
    "name": "Power Management ICs",
    "slug": "power-management-ics",
    "description": "Power management ICs for AC/DC and DC/DC conversion applications",
    "longDescription": "CPS power management IC portfolio includes AC/DC controllers, DC/DC converters, and LED drivers. These ICs feature high integration, low standby power, and comprehensive protection. Suitable for adapters, chargers, lighting, and industrial power supplies. As an authorized distributor, we provide design support and application guidance.",
    "series": [
      {
        "name": "AC/DC Controllers",
        "description": "Flyback and forward controllers for adapter applications"
      },
      {
        "name": "DC/DC Converters",
        "description": "Buck and boost converters for point-of-load applications"
      }
    ],
    "selectionGuide": "Power Management IC Selection Guide",
    "selectionGuideLink": {
      "text": "View Power Management ICs Selection Guide",
      "url": "/cps/support/power-management-ics-selection-guide.html"
    },
    "faqs": [
      {
        "question": "What topology should I use for my application?",
        "answer": "Flyback for isolated low-power (<150W), forward for medium power, LLC for high efficiency >100W, buck for non-isolated step-down.",
        "decisionGuide": "Consider power level, isolation requirement, efficiency target, and cost. Contact FAE for topology recommendations.",
        "keywords": ["topology", "flyback", "forward", "LLC"]
      },
      {
        "question": "How do I achieve low standby power?",
        "answer": "Use burst mode at light load, minimize snubber losses, optimize transformer design. Target <75mW for modern standards.",
        "decisionGuide": "Select controllers with burst mode. Optimize transformer and minimize losses. Verify with actual measurements.",
        "keywords": ["standby power", "burst mode", "efficiency"]
      },
      {
        "question": "What is EMI and how do I reduce it?",
        "answer": "EMI is electromagnetic interference. Reduce by proper filtering, shielding, layout, and soft switching techniques.",
        "decisionGuide": "Follow EMI design guidelines. Use proper input filters, minimize loop areas, consider shielding if needed.",
        "keywords": ["EMI", "filtering", "layout", "shielding"]
      },
      {
        "question": "How do I select transformer?",
        "answer": "Based on power level, frequency, and voltage requirements. Core size increases with power. Ferrite cores for high frequency.",
        "decisionGuide": "Calculate required inductance and turns. Select core based on power and frequency. Verify thermal performance.",
        "keywords": ["transformer", "core", "inductance"]
      },
      {
        "question": "What protections are needed?",
        "answer": "OVP, OCP, OTP, and short-circuit protection are standard. Additional protections may be needed for specific applications.",
        "decisionGuide": "Implement standard protections. Add application-specific protections based on safety requirements and failure modes.",
        "keywords": ["protection", "OVP", "OCP", "OTP"]
      }
    ],
    "products": [
      {
        "partNumber": "CS7710",
        "shortDescription": "High-efficiency flyback controller with 700V MOSFET for 12-24W adapters",
        "descriptionParagraphs": [
          "The CS7710 is a highly integrated flyback controller with built-in 700V power MOSFET for 12-24W adapter applications. Features QR operation for high efficiency.",
          "Includes comprehensive protection features and burst mode for <75mW standby power. SOP-7 package minimizes PCB area.",
          "Ideal for mobile chargers, power adapters, and auxiliary power supplies."
        ],
        "keyFeatures": [
          "Built-in 700V MOSFET",
          "QR operation",
          "Burst mode",
          "Comprehensive protection",
          "SOP-7 package"
        ],
        "specifications": {
          "Input": "85-265VAC",
          "Power": "12-24W",
          "MOSFET": "700V",
          "Standby": "<75mW",
          "Package": "SOP-7"
        },
        "applications": [
          "Mobile chargers",
          "Power adapters",
          "Auxiliary supplies"
        ],
        "faeReview": "The CS7710 is a cost-effective solution for adapter applications. The integrated MOSFET reduces component count. QR operation provides good efficiency. Key points: 1) Follow reference design for transformer. 2) Proper snubber design is important. 3) Thermal design for the integrated MOSFET.",
        "alternativeParts": [
          {
            "partNumber": "CS7715",
            "comparison": "Higher power version (up to 36W)"
          }
        ],
        "companionParts": [
          "SR Controller",
          "Optocoupler",
          "TL431"
        ],
        "faqs": [
          {
            "question": "What is the maximum power?",
            "answer": "Up to 24W with adequate heatsinking. Typical applications are 12-18W."
          },
          {
            "question": "Can it meet efficiency regulations?",
            "answer": "Yes, properly designed can meet DoE Level VI and CoC Tier 2 requirements."
          },
          {
            "question": "What transformer is recommended?",
            "answer": "EE19 core for typical 18W applications. Primary inductance around 1.5mH."
          },
          {
            "question": "Is synchronous rectification supported?",
            "answer": "Yes, can be used with external SR controller for improved efficiency at 5V output."
          },
          {
            "question": "What is the switching frequency?",
            "answer": "65kHz nominal with frequency dithering for EMI reduction."
          }
        ]
      }
    ]
  },
  {
    "id": "led-drivers",
    "name": "LED Drivers",
    "slug": "led-drivers",
    "description": "LED driver ICs for lighting applications with various dimming options",
    "longDescription": "CPS LED driver portfolio includes primary-side controlled and secondary-side controlled solutions for various LED lighting applications. These drivers feature high efficiency, accurate current regulation, and support for multiple dimming methods. Suitable for bulbs, downlights, panels, and street lighting. As an authorized distributor, we provide design support for LED driver applications.",
    "series": [
      {
        "name": "Primary-Side Control",
        "description": "PSR LED drivers eliminating optocoupler for cost-effective designs"
      },
      {
        "name": "Secondary-Side Control",
        "description": "High-accuracy LED drivers with optocoupler feedback"
      }
    ],
    "selectionGuide": "LED Driver Selection Guide",
    "selectionGuideLink": {
      "text": "View LED Drivers Selection Guide",
      "url": "/cps/support/led-drivers-selection-guide.html"
    },
    "faqs": [
      {
        "question": "What is primary-side regulation?",
        "answer": "PSR eliminates optocoupler by sensing output through auxiliary winding. Reduces cost and improves reliability but may have slightly lower accuracy.",
        "decisionGuide": "Use PSR for cost-sensitive applications. Use secondary-side control if higher accuracy is required.",
        "keywords": ["PSR", "primary-side", "optocoupler"]
      },
      {
        "question": "What dimming methods are supported?",
        "answer": "PWM dimming, analog dimming, and TRIAC dimming are common. Different drivers support different methods.",
        "decisionGuide": "Select driver based on required dimming method. Consider compatibility with existing dimming infrastructure.",
        "keywords": ["dimming", "PWM", "TRIAC", "analog"]
      },
      {
        "question": "How do I prevent LED flicker?",
        "answer": "Ensure adequate output capacitance, proper feedback compensation, and stable current regulation. Check for low-frequency ripple.",
        "decisionGuide": "Size output capacitors properly. Verify loop stability. Test under all operating conditions including dimming.",
        "keywords": ["flicker", "ripple", "stability"]
      },
      {
        "question": "What is current regulation accuracy?",
        "answer": "PSR drivers typically achieve ±3-5% accuracy. Secondary-side control can achieve ±1-2% accuracy.",
        "decisionGuide": "Select accuracy level based on application requirements. Higher accuracy may be needed for high-quality lighting.",
        "keywords": ["accuracy", "regulation", "current"]
      },
      {
        "question": "Can LED drivers be used outdoors?",
        "answer": "Yes with proper enclosure and thermal design. Check operating temperature range and IP rating requirements.",
        "decisionGuide": "Select drivers with adequate temperature range. Ensure proper enclosure rating for outdoor use.",
        "keywords": ["outdoor", "temperature", "IP rating"]
      }
    ],
    "products": [
      {
        "partNumber": "CS8316",
        "shortDescription": "Primary-side regulated LED driver with 650V MOSFET for 3-15W applications",
        "descriptionParagraphs": [
          "The CS8316 is a primary-side regulated LED driver with integrated 650V MOSFET. It provides accurate constant current regulation without optocoupler.",
          "Supports PWM and analog dimming. Built-in protections include LED open/short and over-temperature protection.",
          "Ideal for LED bulbs, downlights, and panel lights."
        ],
        "keyFeatures": [
          "Primary-side regulation",
          "650V integrated MOSFET",
          "±3% current accuracy",
          "PWM/analog dimming",
          "Built-in protections"
        ],
        "specifications": {
          "Input": "90-264VAC",
          "Power": "3-15W",
          "Current": "300mA",
          "Accuracy": "±3%",
          "Dimming": "PWM/Analog"
        },
        "applications": [
          "LED bulbs",
          "Downlights",
          "Panel lights",
          "Street lights"
        ],
        "faeReview": "The CS8316 is a cost-effective LED driver solution. PSR eliminates optocoupler reducing BOM cost. Good accuracy for general lighting. Key points: 1) Transformer design critical for accuracy. 2) Adequate output capacitance for low ripple. 3) Thermal design for enclosed fixtures.",
        "alternativeParts": [
          {
            "partNumber": "CS8320",
            "comparison": "Higher power version (up to 25W)"
          }
        ],
        "companionParts": [
          "Bridge Rectifier",
          "Input Capacitor",
          "Output Capacitor"
        ],
        "faqs": [
          {
            "question": "What is the current accuracy?",
            "answer": "±3% typical under normal operating conditions."
          },
          {
            "question": "What dimming range is supported?",
            "answer": "PWM dimming from 1-100%, analog dimming from 10-100%."
          },
          {
            "question": "Can it be used for outdoor lighting?",
            "answer": "Yes with proper enclosure. Operating temperature is -40°C to +125°C."
          },
          {
            "question": "What transformer is recommended?",
            "answer": "EE16 or EE19 core depending on power level. Follow reference design."
          },
          {
            "question": "Is flicker-free operation possible?",
            "answer": "Yes with proper output capacitance and design. Verify with measurements."
          }
        ]
      }
    ]
  }
];

products.categories = [...products.categories, ...additionalCategories];

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✓ Fixed products.json');

// Fix solutions.json - add more solutions
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Add more BOM items to existing solution
solutions.solutions[0].bomList.push({
  "category": "Protection Components",
  "items": [
    {
      "partNumber": "NTC Thermistor",
      "description": "10kΩ NTC for temperature monitoring",
      "quantity": 1
    },
    {
      "partNumber": "TVS Diode",
      "description": "Transient voltage suppression",
      "quantity": 3
    }
  ]
});

// Add a second solution
const newSolution = {
  "id": "led-power-supply",
  "title": "LED Power Supply Solution",
  "slug": "led-power-supply",
  "description": "High-efficiency LED power supply using CPS LED driver ICs",
  "longDescription": "This reference design provides a complete LED power supply solution for 12W LED lighting applications. Uses CPS CS8316 primary-side regulated LED driver for cost-effective design with high efficiency and accurate current regulation.",
  "benefits": [
    "High efficiency >90%",
    "Primary-side regulation eliminates optocoupler",
    "±3% current accuracy",
    "Low BOM cost",
    "Compact design"
  ],
  "coreAdvantages": [
    "PSR technology reduces component count",
    "Built-in protections enhance reliability",
    "Supports PWM and analog dimming",
    "Wide input voltage range",
    "Proven reference design"
  ],
  "bomList": [
    {
      "category": "Controller ICs",
      "items": [
        {
          "partNumber": "CS8316",
          "description": "PSR LED Driver with 650V MOSFET",
          "quantity": 1
        }
      ]
    },
    {
      "category": "Passive Components",
      "items": [
        {
          "partNumber": "Transformer",
          "description": "EE16 Custom Transformer",
          "quantity": 1
        },
        {
          "partNumber": "Output Caps",
          "description": "100μF/50V Low ESR Capacitors",
          "quantity": 2
        }
      ]
    }
  ],
  "technicalSpecs": {
    "Input Voltage": "90-264VAC",
    "Output Current": "300mA",
    "Output Voltage": "30-40V",
    "Max Power": "12W",
    "Efficiency": ">90%",
    "Dimming": "PWM/Analog"
  },
  "customerCases": [
    {
      "customer": "LED Lighting Manufacturer",
      "challenge": "Needed cost-effective LED driver for downlight application with dimming",
      "solution": "Implemented CS8316-based PSR design with TRIAC dimming",
      "result": "Achieved 92% efficiency and smooth dimming. BOM cost reduced by 25% compared to previous design."
    },
    {
      "customer": "Commercial Lighting OEM",
      "challenge": "Required flicker-free operation for office panel lights",
      "solution": "Designed CS8316 solution with optimized output filter",
      "result": "Flicker-free operation verified. Passed all EMC and safety certifications."
    }
  ],
  "faeInsights": {
    "author": {
      "name": "Sarah Liu",
      "title": "Senior FAE - LED Applications",
      "experience": "10 years",
      "expertise": ["LED driver", "Lighting", "Power electronics"]
    },
    "content": "The CS8316 PSR LED driver offers an excellent balance of cost and performance for general lighting applications. The elimination of optocoupler