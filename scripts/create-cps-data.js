#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'cps');

// Create products.json
const productsData = {
  "seoTitle": "CPS Power Semiconductors - MOSFET IGBT PMIC Products",
  "seoDescription": "Browse CPS power semiconductor products including MOSFETs, IGBTs, power management ICs, and LED drivers. Complete specifications and technical support.",
  "seoKeywords": [
    "CPS products",
    "power MOSFET distributor",
    "IGBT selection guide",
    "power management IC",
    "LED driver IC"
  ],
  "faqs": [
    {
      "question": "How do I select between MOSFET and IGBT for my application?",
      "answer": "MOSFETs are generally preferred for applications below 200V and high switching frequencies due to lower switching losses. IGBTs are better suited for high-voltage (>300V) and high-current applications where conduction losses dominate. For voltages between 200-300V, both technologies may be suitable depending on switching frequency and current requirements.",
      "keywords": ["MOSFET", "IGBT", "selection", "comparison"],
      "decisionGuide": "Consider voltage rating, current rating, switching frequency, and efficiency requirements. MOSFETs for high frequency/low voltage, IGBTs for high voltage/high current."
    },
    {
      "question": "What is the difference between planar and super-junction MOSFETs?",
      "answer": "Planar MOSFETs use a traditional vertical structure suitable for lower voltage applications. Super-junction MOSFETs use a charge compensation structure that significantly reduces Rds(on) for the same die size, offering lower conduction losses for high-voltage applications (>500V). Super-junction devices are ideal for power supplies and lighting applications.",
      "keywords": ["planar", "super-junction", "MOSFET", "Rds(on)"],
      "decisionGuide": "Use planar MOSFETs for cost-sensitive low-voltage applications. Use super-junction MOSFETs for high-voltage applications where efficiency is critical."
    },
    {
      "question": "How do I calculate power dissipation in MOSFETs?",
      "answer": "Total power dissipation is the sum of conduction losses (Pcond = I² × Rds(on) × D) and switching losses (Psw = 0.5 × V × I × (tr + tf) × fsw). For high-frequency applications, switching losses may dominate. Always include thermal resistance calculations to ensure junction temperature stays within safe limits under worst-case conditions.",
      "keywords": ["power dissipation", "conduction loss", "switching loss", "thermal"],
      "decisionGuide": "Calculate both conduction and switching losses. Verify thermal performance using junction-to-case and case-to-ambient thermal resistances."
    },
    {
      "question": "What gate drive voltage should I use for CPS MOSFETs?",
      "answer": "Most CPS MOSFETs are fully enhanced at Vgs = 10V. Logic-level devices can operate at Vgs = 4.5V. Using the recommended gate voltage ensures lowest Rds(on) and minimizes conduction losses. Higher gate voltages generally provide better performance but ensure gate voltage ratings are not exceeded.",
      "keywords": ["gate drive", "Vgs", "logic level", "drive voltage"],
      "decisionGuide": "Use 10V gate drive for standard MOSFETs, 4.5V for logic-level devices. Ensure gate drive circuit can provide sufficient current for fast switching."
    },
    {
      "question": "How do I parallel MOSFETs for higher current applications?",
      "answer": "When paralleling MOSFETs, use individual gate resistors (typically 1-10Ω) to prevent oscillations. Ensure symmetrical PCB layout with equal trace lengths to each device. Current sharing depends on Rds(on) matching and temperature. Thermal coupling helps improve current sharing. Always verify thermal performance under worst-case conditions.",
      "keywords": ["parallel", "current sharing", "gate resistor", "thermal"],
      "decisionGuide": "Use individual gate resistors, symmetrical layout, and thermal coupling. Verify current sharing and thermal performance during testing."
    }
  ],
  "categories": [
    {
      "id": "power-mosfets",
      "name": "Power MOSFETs",
      "slug": "power-mosfets",
      "description": "High-performance power MOSFETs for switching and power conversion applications",
      "longDescription": "CPS power MOSFET portfolio includes low-voltage (<100V), high-voltage (100-900V), and super-junction MOSFETs for diverse applications. These devices feature low Rds(on), fast switching characteristics, and excellent thermal performance. Available in various packages from small-signal SOT-23 to high-power TO-247 and modules. Applications include power supplies, motor drives, DC/DC converters, and automotive systems. As an authorized distributor, we provide comprehensive technical support including device selection, thermal analysis, and application guidance.",
      "series": [
        {
          "name": "Low-Voltage MOSFETs",
          "description": "20-100V MOSFETs for DC/DC converters and motor drives"
        },
        {
          "name": "High-Voltage MOSFETs",
          "description": "200-900V MOSFETs for power supplies and lighting"
        },
        {
          "name": "Super-Junction MOSFETs",
          "description": "500-900V super-junction technology for high-efficiency applications"
        }
      ],
      "selectionGuide": "Power MOSFET Selection Guide",
      "selectionGuideLink": {
        "text": "View Power MOSFETs Selection Guide",
        "url": "/cps/support/power-mosfets-selection-guide.html"
      },
      "faqs": [
        {
          "question": "What is the maximum junction temperature for CPS MOSFETs?",
          "answer": "Most CPS MOSFETs have a maximum junction temperature of 150°C or 175°C depending on the specific series. Always refer to the datasheet for exact ratings. For reliable operation, designs should target maximum junction temperatures below 125°C under normal operating conditions."
        },
        {
          "question": "How do I read CPS MOSFET part numbers?",
          "answer": "CPS MOSFET part numbers typically indicate voltage rating, current capability, and package type. For example, CSxxN65 indicates a 650V N-channel MOSFET in the CS series. Contact our FAE team for detailed part number decoding assistance."
        },
        {
          "question": "What is the difference between N-channel and P-channel MOSFETs?",
          "answer": "N-channel MOSFETs have lower Rds(on) for the same die size and are generally preferred for high-current applications. P-channel MOSFETs are used when high-side switching with simple gate drive is required, but have higher conduction losses. N-channel devices are more common in power applications."
        },
        {
          "question": "How do I protect MOSFETs from ESD damage?",
          "answer": "Always handle MOSFETs in ESD-controlled environments. Use proper grounding, ESD mats, and wrist straps. During PCB assembly, ensure proper ESD protection measures. Some MOSFETs include internal ESD protection, but external protection may be needed for harsh environments."
        },
        {
          "question": "Can CPS MOSFETs be used in automotive applications?",
          "answer": "Yes, CPS offers AEC-Q101 qualified MOSFETs specifically for automotive applications. These devices meet stringent automotive reliability requirements including extended temperature ranges and enhanced quality standards. Look for automotive-grade part numbers or contact our FAE team for recommendations."
        }
      ],
      "products": [
        {
          "partNumber": "CS20N65",
          "shortDescription": "650V 20A N-channel super-junction MOSFET with low Rds(on) of 0.19Ω in TO-220 package",
          "descriptionParagraphs": [
            "The CS20N65 is a 650V super-junction N-channel power MOSFET featuring advanced charge compensation technology for ultra-low on-resistance. With Rds(on) of just 0.19Ω and current rating of 20A, it delivers excellent efficiency for high-voltage switching applications.",
            "The device features fast switching characteristics with low gate charge (Qg), reducing switching losses and enabling high-frequency operation. The TO-220 package provides excellent thermal performance for power dissipation up to 150W with proper heatsinking.",
            "Ideal for power factor correction (PFC), power supplies, lighting, and motor drive applications where high efficiency and reliability are critical."
          ],
          "keyFeatures": [
            "650V voltage rating",
            "20A continuous current",
            "0.19Ω Rds(on) at Vgs=10V",
            "Super-junction technology",
            "Low gate charge",
            "Fast switching speed",
            "TO-220 package"
          ],
          "specifications": {
            "VDS": "650V",
            "ID": "20A",
            "Rds(on)": "0.19Ω",
            "Qg": "35nC",
            "VGS(th)": "3-5V",
            "Package": "TO-220"
          },
          "applications": [
            "Power factor correction (PFC)",
            "Switching power supplies",
            "LED lighting drivers",
            "Motor drives",
            "DC/DC converters"
          ],
          "faeReview": "The CS20N65 is an excellent choice for high-voltage power applications requiring efficiency and reliability. The super-junction technology provides significantly lower Rds(on) compared to traditional planar MOSFETs, reducing conduction losses. I've used this device in numerous PFC and LLC designs with excellent results. Key design considerations: 1) Use proper gate drive (10V recommended) to ensure full enhancement. 2) Include snubber circuits to manage switching transients. 3) Ensure adequate heatsinking - the TO-220 can handle significant power but thermal management is critical. 4) For high-frequency applications (>100kHz), pay attention to switching losses and consider gate resistor optimization.",
          "alternativeParts": [
            {
              "partNumber": "CS25N65",
              "comparison": "Higher current version (25A) with similar voltage rating, lower Rds(on) of 0.15Ω"
            },
            {
              "partNumber": "IPA60R190C6",
              "comparison": "Infineon CoolMOS alternative with similar specs, slightly different switching characteristics"
            }
          ],
          "companionParts": [
            "CPS Gate Driver ICs",
            "CPS Rectifier Diodes",
            "Current Sense Resistors"
          ],
          "faqs": [
            {
              "question": "What is the maximum switching frequency for CS20N65?",
              "answer": "The CS20N65 can operate at switching frequencies up to 300kHz depending on the application. At higher frequencies, switching losses become significant. For optimal efficiency, most designs operate between 50-150kHz."
            },
            {
              "question": "What gate resistor value should I use?",
              "answer": "Gate resistor selection depends on switching frequency and EMI requirements. Typical values range from 5Ω to 50Ω. Lower values provide faster switching but may increase EMI. Start with 10Ω and adjust based on efficiency and EMI testing."
            },
            {
              "question": "How much heatsink do I need?",
              "answer": "Required heatsink depends on power dissipation and ambient temperature. Calculate using RθJA = (Tj_max - Ta) / Pd. For example, at 20W dissipation and 50°C ambient with 125°C junction target, you need total thermal resistance of 3.75°C/W or less."
            },
            {
              "question": "Can I parallel multiple CS20N65 devices?",
              "answer": "Yes, but use individual gate resistors (5-10Ω) for each device to prevent oscillations. Ensure symmetrical layout and thermal coupling. Current sharing depends on Rds(on) matching, which is typically within 10% for devices from the same production lot."
            },
            {
              "question": "What is the avalanche rating?",
              "answer": "The CS20N65 has an avalanche energy rating of 500mJ. While the device can withstand occasional avalanche conditions, sustained operation in avalanche should be avoided. Use proper snubber circuits to limit voltage spikes."
            }
          ]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✓ Created products.json');

// Create solutions.json
const solutionsData = {
  "seoTitle": "CPS Power Semiconductor Solutions - Reference Designs",
  "seoDescription": "Explore CPS power semiconductor solutions including motor drives, power supplies, and LED lighting applications. Complete BOMs and technical specifications.",
  "seoKeywords": [
    "CPS solutions",
    "power semiconductor design",
    "motor drive solution distributor",
    "power supply reference design selection",
    "LED driver solution"
  ],
  "faqs": [
    {
      "question": "What reference designs does CPS provide?",
      "answer": "CPS provides comprehensive reference designs for motor drives, power supplies, LED lighting, and automotive applications. Each design includes schematics, BOM, PCB layout, and test data. These designs serve as excellent starting points for customer applications.",
      "keywords": ["reference design", "motor drive", "power supply", "LED"],
      "decisionGuide": "Select reference designs based on your application requirements. Modify as needed for your specific voltage, current, and efficiency targets."
    },
    {
      "question": "How can I get evaluation boards?",
      "answer": "Evaluation boards are available through our distribution channel. Contact our sales team with your specific requirements. Evaluation kits include the board, documentation, and quick start guide to accelerate your development.",
      "keywords": ["evaluation board", "EVB", "testing", "development"],
      "decisionGuide": "Request evaluation boards early in the design phase. Test under your actual operating conditions before committing to production."
    },
    {
      "question": "Does CPS provide simulation models?",
      "answer": "Yes, SPICE models are available for many CPS power devices. These models can be used with popular circuit simulation tools for design verification and optimization. Contact our technical support for access to simulation models.",
      "keywords": ["simulation", "SPICE", "model", "design verification"],
      "decisionGuide": "Use simulation models to verify circuit operation before building prototypes. Validate critical parameters like switching losses and thermal performance."
    },
    {
      "question": "What design support is available?",
      "answer": "Our FAE team provides design support including device selection, thermal analysis, PCB layout review, and troubleshooting. We can help optimize your design for efficiency, cost, and reliability. Contact us early in your design cycle.",
      "keywords": ["design support", "FAE", "technical assistance", "optimization"],
      "decisionGuide": "Engage with FAE during the concept phase for complex designs. Provide detailed requirements including electrical specs, thermal environment, and cost targets."
    },
    {
      "question": "Can CPS products meet automotive requirements?",
      "answer": "Yes, CPS offers AEC-Q101 qualified products for automotive applications. These devices meet stringent automotive reliability standards. We can provide PPAP documentation and support automotive qualification processes.",
      "keywords": ["automotive", "AEC-Q101", "PPAP", "qualification"],
      "decisionGuide": "For automotive applications, specify AEC-Q101 qualified devices. Plan for qualification testing and documentation requirements early in the project."
    }
  ],
  "solutions": [
    {
      "id": "motor-drive-solution",
      "title": "3-Phase Motor Drive Solution",
      "slug": "motor-drive-solution",
      "description": "Complete 3-phase motor drive solution using CPS MOSFETs and gate drivers",
      "longDescription": "This reference design provides a complete 3-phase motor drive solution for brushless DC (BLDC) and permanent magnet synchronous motors (PMSM). The design uses CPS power MOSFETs and gate drivers to deliver up to 1kW output power. Features include sensorless FOC control, overcurrent protection, and thermal management.",
      "benefits": [
        "High efficiency >95%",
        "Sensorless FOC control",
        "Comprehensive protection",
        "Compact design",
        "Cost-effective solution"
      ],
      "coreAdvantages": [
        "Low Rds(on) MOSFETs minimize conduction losses",
        "Fast switching reduces switching losses",
        "Integrated protection features",
        "Optimized thermal design",
        "Proven reference design"
      ],
      "bomList": [
        {
          "category": "Power Devices",
          "items": [
            {
              "partNumber": "CS75N75",
              "description": "75V 75A N-channel MOSFET (6 pieces)",
              "quantity": 6
            },
            {
              "partNumber": "CPS Gate Driver",
              "description": "3-Phase Gate Driver IC",
              "quantity": 1
            }
          ]
        }
      ],
      "technicalSpecs": {
        "Input Voltage": "48-72V DC",
        "Output Power": "Up to 1kW",
        "Switching Frequency": "20kHz",
        "Efficiency": ">95%",
        "Control": "Sensorless FOC"
      },
      "customerCases": [
        {
          "customer": "Electric Vehicle OEM",
          "challenge": "Needed high-efficiency motor drive for e-bike application with cost constraints",
          "solution": "Implemented CPS MOSFET-based 3-phase drive with optimized gate drive",
          "result": "Achieved 96% efficiency at rated load. Cost reduced by 20% compared to previous solution. Passed all reliability tests."
        },
        {
          "customer": "Industrial Automation Company",
          "challenge": "Required reliable motor drive for conveyor system in harsh environment",
          "solution": "Designed CPS-based motor drive with enhanced thermal management and protection",
          "result": "System operating reliably for 2+ years in factory environment. Maintenance-free operation achieved."
        }
      ],
      "faeInsights": {
        "author": {
          "name": "David Wang",
          "title": "Principal FAE - Power Applications",
          "experience": "15 years",
          "expertise": ["Motor drives", "Power electronics", "Thermal design"]
        },
        "content": "Motor drive design requires careful attention to switching characteristics, thermal management, and protection. The CPS MOSFETs in this design offer excellent Rds(on) and switching performance for motor applications. Key design considerations: 1) Gate drive design is critical - use proper gate resistors to control switching speed and manage EMI. 2) Dead time must be carefully set to prevent shoot-through while minimizing distortion. 3) Current sensing accuracy affects control performance. 4) Thermal design must account for worst-case operating conditions including stall current. 5) PCB layout should minimize parasitic inductance in the power loop.",
        "keyTakeaways": [
          "Gate drive design significantly affects performance and reliability",
          "Proper dead time setting prevents shoot-through",
          "Current sensing accuracy is critical for FOC control",
          "Thermal design must handle stall conditions",
          "PCB layout affects switching behavior and EMI"
        ],
        "decisionFramework": {
          "steps": [
            "确定电机参数和负载特性",
            "选择适当的MOSFET和驱动IC",
            "设计栅极驱动和保护电路",
            "完成PCB布局和热设计",
            "进行系统测试和优化"
          ]
        },
        "insightLogic": "选择CPS MOSFET是因为其优异的Rds(on)和开关特性，能够在成本和性能之间达到最佳平衡。该解决方案提供了完整的电机驱动功能，适用于从电动工具到工业自动化的广泛应用。"
      },
      "faqs": [
        {
          "question": "What motor types are supported?",
          "answer": "The solution supports BLDC and PMSM motors. The sensorless FOC algorithm can work with most 3-phase permanent magnet motors. For induction motors, modifications to the control algorithm would be required."
        },
        {
          "question": "How do I tune the FOC parameters?",
          "answer": "FOC tuning requires setting current loop PI gains and speed loop PI gains. Start with conservative values and increase gradually while monitoring stability. The motor parameters (Ld, Lq, Ke) are needed for proper tuning."
        },
        {
          "question": "What protection features are included?",
          "answer": "The design includes overcurrent protection, overvoltage protection, undervoltage lockout, and overtemperature protection. Additional protections can be added based on application requirements."
        },
        {
          "question": "Can I modify the design for different voltage levels?",
          "answer": "Yes, the design can be scaled for different voltages by selecting appropriate MOSFETs and adjusting the gate drive voltage. Contact our FAE team for guidance on voltage scaling."
        },
        {
          "question": "What is the maximum switching frequency?",
          "answer": "The design is optimized for 20kHz switching frequency, which provides a good balance between efficiency and audible noise. Higher frequencies up to 40kHz are possible with appropriate MOSFET selection and thermal design."
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('✓ Created solutions.json');

// Create support.json
const supportData = {
  "seoTitle": "CPS Technical Support - Documentation & Design Resources",
  "seoDescription": "Access CPS technical documentation, datasheets, application notes, and design resources. Get expert support for power semiconductor designs.",
  "seoKeywords": [
    "CPS support",
    "technical documentation distributor",
    "datasheet selection",
    "application note distributor",
    "design guide"
  ],
  "faqs": [
    {
      "question": "Where can I find CPS datasheets?",
      "answer": "CPS datasheets are available through our technical support portal or by contacting our sales team. Datasheets include complete electrical characteristics, mechanical dimensions, and application information. Always use the latest revision for new designs.",
      "keywords": ["datasheet", "documentation", "specifications"],
      "decisionGuide": "Download the latest datasheet revision from our portal. Check for errata and application notes related to your specific device."
    },
    {
      "question": "How do I get design support?",
      "answer": "Our FAE team provides comprehensive design support including device selection, schematic review, PCB layout guidance, and troubleshooting. Contact us through the support portal or your local sales representative.",
      "keywords": ["design support", "FAE", "technical assistance"],
      "decisionGuide": "Contact FAE early in the design phase with your requirements. Provide detailed specifications for accurate recommendations."
    },
    {
      "question": "Are SPICE models available?",
      "answer": "SPICE models are available for many CPS power devices. These models can be used with popular simulation tools for circuit verification. Contact technical support for access to simulation models and application guidance.",
      "keywords": ["SPICE", "simulation", "model", "design verification"],
      "decisionGuide": "Request simulation models for your selected devices. Validate critical circuit behaviors before building prototypes."
    },
    {
      "question": "What application notes are available?",
      "answer": "CPS provides application notes covering device selection, thermal design, PCB layout, and specific application circuits. These documents provide detailed guidance for optimizing designs with CPS products.",
      "keywords": ["application note", "design guide", "application"],
      "decisionGuide": "Review relevant application notes before starting your design. Follow recommended practices for optimal performance and reliability."
    },
    {
      "question": "How do I request samples?",
      "answer": "Samples can be requested through our website or sales team. Standard lead time is 1-2 weeks. For high-volume or special requirements, please contact sales to discuss allocation.",
      "keywords": ["samples", "evaluation", "request"],
      "decisionGuide": "Request samples early in the design phase. Order sufficient quantities for thorough evaluation and qualification."
    },
    {
      "question": "Does CPS provide failure analysis?",
      "answer": "Failure analysis services are available for devices that fail in application. Submit the failed device with detailed application information including circuit schematic, operating conditions, and failure symptoms.",
      "keywords": ["failure analysis", "FA", "reliability"],
      "decisionGuide": "Document failure conditions thoroughly. Include all relevant application information to facilitate root cause analysis."
    },
    {
      "question": "What is the qualification process?",
      "answer": "CPS products undergo comprehensive qualification testing including electrical characterization, environmental stress testing, and reliability evaluation. Automotive products follow AEC-Q101 requirements.",
      "keywords": ["qualification", "reliability", "testing", "AEC-Q101"],
      "decisionGuide": "For automotive or high-reliability applications, review qualification reports and plan any additional testing required for your specific application."
    },
    {
      "question": "Can I get custom specifications?",
      "answer": "Custom specifications may be available for high-volume applications. Contact our sales team to discuss your specific requirements and volume projections. Custom options may include special testing, marking, or packaging.",
      "keywords": ["custom", "special requirements", "OEM"],
      "decisionGuide": "For volumes above 100K units annually, discuss custom options with sales. Evaluate cost-benefit of customization versus standard products."
    }
  ],
  "articles": [
    {
      "id": "mosfet-selection-guide",
      "title": "CPS Power MOSFET Selection Guide",
      "slug": "power-mosfet-selection-guide",
      "author": {
        "name": "Michael Chen",
        "title": "Senior FAE - Power Applications",
        "bio": "Michael has 12 years of experience in power semiconductor applications with expertise in MOSFET and IGBT design."
      },
      "publishDate": "2024-01-15",
      "lastUpdated": "2024-06-20",
      "category": "Selection Guide",
      "tags": ["MOSFET", "Selection", "Power", "Design Guide"],
      "summary": "Comprehensive guide for selecting CPS power MOSFETs including voltage rating, current capability, and package selection.",
      "content": "This selection guide covers CPS power MOSFET portfolio and provides systematic approach to device selection...",
      "faeInsights": {
        "author": {
          "name": "Michael Chen",
          "title": "Senior FAE - Power Applications",
          "experience": "12 years",
          "expertise": ["MOSFET design", "Power applications", "Thermal management"]
        },
        "content": "MOSFET selection is critical for power supply performance and reliability. The key parameters are voltage rating, current rating, Rds(on), and switching characteristics. For voltage rating, select at least 20% margin above maximum operating voltage. For current, consider both RMS and peak currents. Lower Rds(on) reduces conduction losses but may increase cost and gate charge. Super-junction MOSFETs offer excellent performance for high-voltage applications but require careful attention to switching behavior.",
        "keyTakeaways": [
          "Voltage rating needs 20% safety margin",
          "Rds(on) directly affects conduction losses",
          "Gate charge affects switching losses and drive requirements",
          "Package selection depends on thermal requirements",
          "Super-junction devices excel in high-voltage applications"
        ],
        "practicalTips": [
          "Use selection tools to narrow down options",
          "Consider both cost and performance trade-offs",
          "Evaluate thermal performance early in design",
          "Test actual switching behavior in your circuit",
          "Contact FAE for complex applications"
        ],
        "insightLogic": "MOSFET selection follows a systematic process: define electrical requirements, calculate losses, evaluate thermal performance, and verify switching behavior. CPS offers devices optimized for different applications from low-voltage DC/DC to high-voltage power supplies."
      },
      "customerCases": [
        {
          "customer": "Power Supply Manufacturer",
          "challenge": "Needed to optimize MOSFET selection for high-efficiency server power supply",
          "solution": "Used selection guide to evaluate super-junction options and selected optimal device",
          "feedback": "Efficiency improved by 2% and thermal performance met requirements. Selection guide saved significant evaluation time."
        }
      ],
      "relatedArticles": [
        "thermal-design-guide",
        "pcb-layout-guidelines"
      ],
      "faqs": [
        {
          "question": "What is the difference between planar and super-junction MOSFETs?",
          "answer": "Planar MOSFETs use traditional vertical structure suitable for lower voltages. Super-junction MOSFETs use charge compensation to achieve much lower Rds(on) for the same die size, making them ideal for high-voltage high-efficiency applications."
        },
        {
          "question": "How do I calculate conduction losses?",
          "answer": "Conduction loss Pcond = I² × Rds(on) × D, where I is RMS current and D is duty cycle. Use maximum Rds(on) at operating temperature for worst-case calculation."
        },
        {
          "question": "What affects switching losses?",
          "answer": "Switching losses depend on switching frequency, voltage, current, and switching speed. Faster switching reduces switching time but may increase EMI and voltage spikes."
        },
        {
          "question": "How do I select the right package?",
          "answer": "Package selection depends on power dissipation, thermal requirements, and PCB space. Higher power requires packages with lower thermal resistance like D2PAK or TO-247."
        },
        {
          "question": "Can I use logic-level MOSFETs for all applications?",
          "answer": "Logic-level MOSFETs (Vgs=4.5V) are convenient for low-voltage drive but may have higher Rds(on) than standard MOSFETs driven at 10V. Use standard MOSFETs for best performance when 10V drive is available."
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✓ Created support.json');

// Create news.json
const newsData = {
  "seoTitle": "CPS News & Updates - Latest Product Releases",
  "seoDescription": "Stay updated with the latest CPS news, product announcements, and technical updates.",
  "seoKeywords": [
    "CPS news",
    "product updates",
    "new releases",
    "technical announcements"
  ],
  "articles": [
    {
      "id": "cps-expands-mosfet-portfolio",
      "title": "CPS Expands Super-Junction MOSFET Portfolio",
      "slug": "cps-expands-mosfet-portfolio",
      "date": "2024-06-15",
      "category": "Product News",
      "summary": "CPS announces new super-junction MOSFET series with improved efficiency and reduced Rds(on) for power supply applications.",
      "content": "CPS has expanded its super-junction MOSFET portfolio with new devices featuring improved charge compensation technology. The new series offers up to 15% lower Rds(on) compared to previous generations while maintaining excellent switching performance."
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'news.json'), JSON.stringify(newsData, null, 2));
console.log('✓ Created news.json');

console.log('\n✅ CPS brand data created successfully!');
