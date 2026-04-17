const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'oriental', 'products.json');
let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Add remaining categories
const additionalCategories = [
  {
    "id": "igbt-discrete",
    "name": "IGBT Discrete",
    "description": "Discrete IGBT devices in standard packages for cost-effective motor drive and power supply applications.",
    "longDescription": "Oriental discrete IGBT devices provide cost-effective power switching solutions for applications up to 10kW. Available in standard through-hole and surface-mount packages including TO-247, TO-3P, and TO-220, these devices offer flexibility in circuit design and easy replacement. Voltage ratings range from 600V to 1350V with current capabilities from 10A to 100A. Oriental discrete IGBTs feature trench-gate technology for low saturation voltage and are suitable for motor drives, power supplies, welding equipment, and induction heating applications. The standard packages are compatible with existing PCB layouts and assembly processes, making them ideal for cost-sensitive consumer and industrial products. As an authorized Oriental distributor, LiTong provides comprehensive technical support for discrete IGBT selection and application design.",
    "parameters": ["Voltage Rating", "Current Rating", "Vce(sat)", "Package", "Switching Speed"],
    "applications": ["Home Appliance Motor Drives", "Power Supplies", "Welding Equipment", "Induction Heating"],
    "series": [
      {
        "name": "OIGW Series",
        "description": "High-speed IGBTs for welding and induction heating"
      },
      {
        "name": "OIG Series",
        "description": "Standard IGBTs for general-purpose applications"
      }
    ],
    "selectionGuide": {
      "title": "How to Select Oriental Discrete IGBTs",
      "description": "Consider voltage rating, current capacity, package type, and switching speed requirements for your application.",
      "articleId": "discrete-igbt-selection-guide",
      "articleLink": "/oriental/support/discrete-igbt-selection-guide.html",
      "link": "/oriental/support/discrete-igbt-selection-guide.html"
    },
    "faqs": [
      {
        "question": "When should I choose discrete IGBTs over IGBT modules?",
        "answer": "Choose Oriental discrete IGBTs for applications below 10kW where cost is a primary concern and design flexibility is important. Discrete IGBTs in TO-247 or TO-3P packages are ideal for single-phase motor drives, small appliance inverters, and power supplies. They offer lower cost per device, standard package footprints compatible with existing designs, and easy replacement for repair and maintenance. However, for applications above 10kW or requiring three-phase bridges, IGBT modules provide better thermal performance, lower parasitic inductance, and more compact designs. Discrete IGBTs also require more external wiring and have higher parasitic inductance compared to modules.",
        "decisionGuide": "Use discrete IGBTs for cost-sensitive applications below 10kW; choose modules for higher power or compact designs.",
        "keywords": ["discrete IGBT vs module", "Oriental discrete IGBT selection", "IGBT package selection"]
      },
      {
        "question": "What is the difference between TO-247 and TO-3P packages?",
        "answer": "TO-247 and TO-3P are both popular through-hole packages for discrete IGBTs with similar thermal performance. TO-247 has a metal tab with a hole for mounting to heatsink and typically 3 leads in a row. TO-3P (also called TO-247-3) is similar but with a plastic body and different lead arrangement. TO-247 offers better mechanical robustness and is more common in industrial applications. TO-3P may have slightly better isolation characteristics. Both packages can handle similar power levels (typically up to 150W with adequate cooling). The choice often depends on existing PCB layout, heatsink design, and manufacturing preferences. Oriental offers devices in both packages for design flexibility.",
        "decisionGuide": "Choose based on existing PCB layout and mechanical requirements; both offer similar electrical and thermal performance.",
        "keywords": ["TO-247 vs TO-3P", "IGBT package comparison", "discrete IGBT packages"]
      }
    ],
    "products": [
      {
        "partNumber": "OIGW40N65H",
        "name": "40A 650V IGBT TO-247",
        "shortDescription": "High-speed 40A 650V IGBT in TO-247 package for welding and induction heating applications.",
        "descriptionParagraphs": [
          "The OIGW40N65H is a high-speed 40A 650V IGBT optimized for high-frequency applications such as welding and induction heating.",
          "With fast switching characteristics and low saturation voltage of 1.6V, this device delivers excellent efficiency in hard-switching applications.",
          "The TO-247 package provides good thermal performance and is compatible with standard heatsink mounting."
        ],
        "specifications": {
          "Voltage Rating": "650V",
          "Current Rating": "40A",
          "Vce(sat)": "1.6V (typ)",
          "Package": "TO-247",
          "Switching Speed": "High"
        },
        "features": [
          "High-speed switching for HF applications",
          "Low saturation voltage",
          "Low tail current",
          "Rugged short-circuit capability",
          "TO-247 package for easy mounting"
        ],
        "applications": [
          "Welding inverters",
          "Induction heating",
          "Resonant converters",
          "Soft-switching applications"
        ],
        "faeReview": {
          "author": "James Liu",
          "title": "FAE - Industrial Power",
          "content": "The OIGW40N65H is specifically optimized for welding and induction heating applications where switching frequencies of 20-50kHz are common. In my experience, this device's fast switching characteristics significantly reduce switching losses compared to standard IGBTs. The 650V rating is well-suited for single-phase 220V input applications. For welding machines, I recommend using this device with resonant or soft-switching topologies to minimize EMI. The TO-247 package allows for easy heatsink attachment. At 40A rating, this device can handle 5-10kW welding applications with proper thermal management.",
          "highlight": "Optimized for high-frequency welding and induction heating applications"
        },
        "alternativeParts": [
          {
            "partNumber": "IKW40N65H5",
            "brand": "Infineon",
            "specifications": {
              "Voltage": "650V",
              "Current": "40A",
              "VceSat": "1.6V"
            },
            "comparison": {
              "Voltage": "650V = 650V (same)",
              "Current": "40A = 40A (same)",
              "VceSat": "1.6V = 1.6V (same)",
              "Package": "TO-247 = TO-247 (same)"
            },
            "reason": "Direct pin-compatible alternative with identical specifications",
            "useCase": "Drop-in replacement for Infineon-based welding designs",
            "link": "/infineon/products/igbt-discrete/ikw40n65h5.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "Gate Resistor Kit",
            "link": "#",
            "description": "Assorted gate resistors for switching optimization",
            "category": "Accessories"
          },
          {
            "partNumber": "Heatsink Assembly",
            "link": "#",
            "description": "TO-247 heatsink with thermal pad",
            "category": "Thermal Management"
          },
          {
            "partNumber": "Driver IC",
            "link": "#",
            "description": "Single-channel IGBT gate driver",
            "category": "Gate Driver"
          }
        ],
        "faqs": [
          {
            "question": "What is the maximum switching frequency for OIGW40N65H?",
            "answer": "The OIGW40N65H is optimized for switching frequencies up to 50kHz, making it suitable for welding and induction heating applications. At 20-30kHz, the device achieves excellent efficiency with manageable switching losses. Above 40kHz, switching losses increase significantly and may require derating of current capability. For applications requiring higher frequencies (above 50kHz), consider using SiC MOSFETs which offer superior high-frequency performance. The actual optimal frequency depends on your specific application requirements and thermal management capability.",
            "decisionGuide": "Use 20-30kHz for optimal efficiency; maximum 50kHz with appropriate derating.",
            "keywords": ["OIGW40N65H frequency", "IGBT switching frequency", "welding IGBT"]
          }
        ]
      },
      {
        "partNumber": "OIG75N120H",
        "name": "75A 1200V IGBT TO-3P",
        "shortDescription": "High-current 75A 1200V IGBT in TO-3P package for motor drives and power supplies.",
        "descriptionParagraphs": [
          "The OIG75N120H delivers 75A current capability at 1200V in a robust TO-3P package for demanding industrial applications.",
          "Featuring advanced trench-gate technology with Vce(sat) of 1.8V, this device provides excellent conduction characteristics.",
          "The high current rating makes it suitable for three-phase motor drives up to 15kW and high-power SMPS applications."
        ],
        "specifications": {
          "Voltage Rating": "1200V",
          "Current Rating": "75A",
          "Vce(sat)": "1.8V (typ)",
          "Package": "TO-3P",
          "Switching Speed": "Standard"
        },
        "features": [
          "75A high current capability",
          "1200V voltage rating for 380V systems",
          "Low saturation voltage",
          "Rugged short-circuit capability",
          "TO-3P package"
        ],
        "applications": [
          "Three-phase motor drives",
          "High-power SMPS",
          "UPS systems",
          "Solar inverters"
        ],
        "faeReview": {
          "author": "Peter Zhang",
          "title": "Senior FAE - Motor Drives",
          "content": "The OIG75N120H is an excellent choice for 380V three-phase motor drives in the 10-15kW range. The 1200V rating provides good safety margin for 380V AC systems with DC bus around 540V. In my field experience, this device provides reliable performance in industrial environments. The TO-3P package offers good thermal performance when properly mounted to a heatsink. For motor drive applications, I recommend switching frequencies of 4-8kHz to balance efficiency and audible noise. The 75A rating provides good headroom for motor starting currents and overload conditions.",
          "highlight": "Reliable high-current solution for 380V motor drives"
        },
        "alternativeParts": [
          {
            "partNumber": "IKW75N120T2",
            "brand": "Infineon",
            "specifications": {
              "Voltage": "1200V",
              "Current": "75A",
              "VceSat": "1.85V"
            },
            "comparison": {
              "Voltage": "1200V = 1200V (same)",
              "Current": "75A = 75A (same)",
              "VceSat": "1.85V ≈ 1.8V (similar)",
              "Package": "TO-247 = TO-3P (similar)"
            },
            "reason": "Equivalent performance alternative",
            "useCase": "Alternative for motor drive applications",
            "link": "/infineon/products/igbt-discrete/ikw75n120t2.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "Heatsink TO-3P",
            "link": "#",
            "description": "Aluminum heatsink for TO-3P package",
            "category": "Thermal Management"
          },
          {
            "partNumber": "Thermal Grease",
            "link": "#",
            "description": "High-performance thermal interface material",
            "category": "Thermal Management"
          },
          {
            "partNumber": "Mounting Kit",
            "link": "#",
            "description": "Screws and washers for TO-3P mounting",
            "category": "Accessories"
          }
        ],
        "faqs": [
          {
            "question": "What is the recommended heatsink size for OIG75N120H?",
            "answer": "For the OIG75N120H operating at 75A with typical conduction losses of 135W (1.8V × 75A), a substantial heatsink is required. For natural convection, a heatsink with thermal resistance of 0.5-0.7°C/W is needed to keep junction temperature below 125°C at 40°C ambient. For forced air cooling with 200-400 LFM airflow, Rth of 0.3-0.4°C/W is sufficient. The TO-3P package has thermal resistance Rth(j-c) of approximately 0.5°C/W. Always include thermal grease or thermal pad between the device and heatsink. Verify actual operating temperature during prototype testing.",
            "decisionGuide": "Use forced air cooling with 0.3-0.4°C/W heatsink for reliable operation at full load.",
            "keywords": ["OIG75N120H heatsink", "TO-3P thermal design", "IGBT cooling"]
          }
        ]
      }
    ]
  },
  {
    "id": "mosfets",
    "name": "MOSFETs",
    "description": "High-voltage and low-voltage MOSFETs for switching power supplies, motor control, and power management applications.",
    "longDescription": "Oriental MOSFET portfolio includes both high-voltage (500V-900V) and low-voltage (20V-200V) devices for diverse power electronics applications. High-voltage MOSFETs are optimized for switching power supplies, LED drivers, and PFC circuits with fast switching and low RDS(on). Low-voltage MOSFETs provide high current capability for synchronous rectification, DC-DC converters, and motor drive applications. Oriental employs advanced planar and trench technologies to achieve excellent figure-of-merit (FOM) characteristics. The product range covers current ratings from a few amps to over 200A in various packages including TO-220, TO-247, D2PAK, and surface-mount options. As an authorized Oriental distributor, LiTong provides comprehensive MOSFET selection guidance and application support.",
    "parameters": ["Voltage Rating", "Current Rating", "RDS(on)", "Package", "Qg"],
    "applications": ["Switching Power Supplies", "DC-DC Converters", "Motor Drives", "LED Drivers", "Battery Management"],
    "series": [
      {
        "name": "OSV Series",
        "description": "High-voltage super-junction MOSFETs for SMPS"
      },
      {
        "name": "OTV Series",
        "description": "Low-voltage trench MOSFETs for high-current applications"
      }
    ],
    "selectionGuide": {
      "title": "How to Select Oriental MOSFETs",
      "description": "Consider voltage rating, RDS(on), gate charge, and package for your switching application.",
      "articleId": "mosfet-selection-guide",
      "articleLink": "/oriental/support/mosfet-selection-guide.html",
      "link": "/oriental/support/mosfet-selection-guide.html"
    },
    "faqs": [
      {
        "question": "What is the difference between high-voltage and low-voltage MOSFETs?",
        "answer": "Oriental high-voltage MOSFETs (500V-900V) are designed for AC-DC power supplies, LED drivers, and PFC applications where blocking high voltages is required. They feature super-junction technology for low RDS(on) at high voltage ratings. Low-voltage MOSFETs (20V-200V) are optimized for DC-DC converters, synchronous rectification, and battery-powered applications where low RDS(on) and fast switching are critical. Low-voltage devices can achieve much lower RDS(on) (sub-milliohm) compared to high-voltage devices. Choose high-voltage MOSFETs for AC input applications; select low-voltage MOSFETs for DC-DC conversion and high-current applications.",
        "decisionGuide": "Use high-voltage MOSFETs for AC-DC applications; use low-voltage MOSFETs for DC-DC and high-current applications.",
        "keywords": ["Oriental MOSFET selection", "high voltage vs low voltage MOSFET", "MOSFET application guide"]
      }
    ],
    "products": [
      {
        "partNumber": "OSV20N65F",
        "name": "20A 650V Super-Junction MOSFET",
        "shortDescription": "High-efficiency 20A 650V super-junction MOSFET for switching power supplies and PFC applications.",
        "descriptionParagraphs": [
          "The OSV20N65F is a 650V super-junction MOSFET featuring advanced multi-epitaxial technology for excellent RDS(on) and switching performance.",
          "With RDS(on) of 0.19 ohm and low gate charge, this device delivers high efficiency in hard-switching power supply applications.",
          "The device is suitable for PFC circuits, LLC resonant converters, and flyback power supplies up to 500W."
        ],
        "specifications": {
          "Voltage Rating": "650V",
          "Current Rating": "20A",
          "RDS(on)": "0.19 ohm (max)",
          "Package": "TO-220F",
          "Qg": "28nC (typ)"
        },
        "features": [
          "Super-junction technology",
          "Low RDS(on) for reduced conduction losses",
          "Fast switching characteristics",
          "Low gate charge for reduced drive losses",
          "Avalanche rated",
          "TO-220F isolated package"
        ],
        "applications": [
          "PFC circuits",
          "LLC resonant converters",
          "Flyback power supplies",
          "LED drivers"
        ],
        "faeReview": {
          "author": "Kevin Zhao",
          "title": "FAE - Power Supplies",
          "content": "The OSV20N65F is an excellent choice for high-efficiency power supplies requiring 650V rating. The super-junction technology provides significantly lower RDS(on) compared to conventional planar MOSFETs. In my experience with PFC designs, this device achieves excellent efficiency at switching frequencies of 65-100kHz. The TO-220F package with isolated tab simplifies heatsink design and safety requirements. For LLC resonant converters, the low output capacitance enables efficient operation at high frequencies. I recommend this device for designs requiring high efficiency and compact size.",
          "highlight": "High-efficiency super-junction MOSFET for modern power supplies"
        },
        "alternativeParts": [
          {
            "partNumber": "IPW60R190C6",
            "brand": "Infineon",
            "specifications": {
              "Voltage": "650V",
              "Current": "20A",
              "RDS(on)": "0.19 ohm"
            },
            "comparison": {
              "Voltage": "650V = 650V (same)",
              "Current": "20A = 20A (same)",
              "RDS(on)": "0.19 ohm = 0.19 ohm (same)",
              "Package": "TO-247 = TO-220F (similar)"
            },
            "reason": "Equivalent super-junction alternative",
            "useCase": "Alternative for high-efficiency power supplies",
            "link": "/infineon/products/mosfets/ipw60r190c6.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "PFC Controller IC",
            "link": "#",
            "description": "CrCM PFC controller for high-efficiency designs",
            "category": "Controllers"
          },
          {
            "partNumber": "Gate Driver",
            "link": "#",
            "description": "High-speed MOSFET gate driver",
            "category": "Gate Driver"
          },
          {
            "partNumber": "Current Sense Resistor",
            "link": "#",
            "description": "Precision current sense for protection",
            "category": "Passive Components"
          }
        ],
        "faqs": [
          {
            "question": "What is the advantage of super-junction MOSFETs over planar MOSFETs?",
            "answer": "Super-junction MOSFETs like the OSV20N65F use a multi-epitaxial structure that breaks the traditional silicon limit of RDS(on) vs breakdown voltage trade-off. This technology enables significantly lower RDS(on) (typically 3-5x lower) at the same voltage rating compared to planar MOSFETs. Lower RDS(on) reduces conduction losses, improving efficiency especially at heavy loads. However, super-junction devices typically have higher output capacitance (Coss) which can increase switching losses at light loads. For applications operating at high load most of the time, super-junction MOSFETs provide superior overall efficiency.",
            "decisionGuide": "Use super-junction MOSFETs for high-efficiency applications; planar MOSFETs may be better for light-load efficiency.",
            "keywords": ["super-junction vs planar MOSFET", "OSV20N65F technology", "MOSFET efficiency"]
          }
        ]
      },
      {
        "partNumber": "OTV100N04",
        "name": "100A 40V Trench MOSFET",
        "shortDescription": "Low-voltage 100A 40V trench MOSFET with ultra-low RDS(on) for high-current DC-DC converters.",
        "descriptionParagraphs": [
          "The OTV100N04 is a 40V trench MOSFET featuring advanced trench technology for ultra-low RDS(on) of 2.8m ohm max.",
          "With 100A continuous current capability, this device is ideal for synchronous rectification in high-current DC-DC converters.",
          "The low gate charge and fast switching enable high-frequency operation for compact power designs."
        ],
        "specifications": {
          "Voltage Rating": "40V",
          "Current Rating": "100A",
          "RDS(on)": "2.8m ohm (max)",
          "Package": "TO-220",
          "Qg": "45nC (typ)"
        },
        "features": [
          "Ultra-low RDS(on) of 2.8m ohm",
          "100A high current capability",
          "Low gate charge",
          "Fast switching speed",
          "Excellent thermal performance",
          "Avalanche rated"
        ],
        "applications": [
          "Synchronous rectification",
          "High-current DC-DC converters",
          "Motor drives",
          "Battery protection circuits"
        ],
        "faeReview": {
          "author": "Alex Chen",
          "title": "FAE - DC-DC Converters",
          "content": "The OTV100N04 is an excellent choice for high-current synchronous rectification applications. The ultra-low RDS(on) of 2.8m ohm minimizes conduction losses, which is critical for high-current designs. In my experience with 12V to 5V/20A converters, using this device for synchronous rectification achieves efficiencies above 94%. The 40V rating provides adequate margin for 12V and 24V systems. For optimal performance, use a dedicated synchronous rectifier driver IC to ensure proper dead-time control. The TO-220 package allows for easy heatsink attachment for high-current applications.",
          "highlight": "Ultra-low RDS(on) ideal for high-current synchronous rectification"
        },
        "alternativeParts": [
          {
            "partNumber": "IRFB4110",
            "brand": "Infineon",
            "specifications": {
              "Voltage": "100V",
              "Current": "120A",
              "RDS(on)": "3.7m ohm"
            },
            "comparison": {
              "Voltage": "100V > 40V (higher)",
              "Current": "120A > 100A (+20%)",
              "RDS(on)": "3.7m ohm > 2.8m ohm (higher)",
              "Package": "TO-220 = TO-220 (same)"
            },
            "reason": "Higher voltage and current rating alternative",
            "useCase": "Applications requiring higher voltage margin",
            "link": "/infineon/products/mosfets/irfb4110.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "SR Driver IC",
            "link": "#",
            "description": "Synchronous rectifier driver with dead-time control",
            "category": "Controllers"
          },
          {
            "partNumber": "Heatsink",
            "link": "#",
            "description": "TO-220 heatsink for high-current applications",
            "category": "Thermal Management"
          },
          {
            "partNumber": "Current Transformer",
            "link": "#",
            "description": "Current sensing for protection circuit",
            "category": "Sensors"
          }
        ],
        "faqs": [
          {
            "question": "What is synchronous rectification and when should I use it?",
            "answer": "Synchronous rectification replaces the output diode in a DC-DC converter with a low-RDS(on) MOSFET to reduce rectification losses. The MOSFET is turned on during the diode conduction period, and its low on-resistance (e.g., 2.8m ohm for OTV100N04) creates much lower voltage drop than a diode (0.3-0.5V for Schottky). This significantly improves efficiency, especially at low output voltages and high currents. Use synchronous rectification for output voltages below 5V or currents above 5A where diode losses become significant. The efficiency improvement can be 5-10% compared to diode rectification.",
            "decisionGuide": "Use synchronous rectification for low-voltage high-current outputs to maximize efficiency.",
            "keywords": ["synchronous rectification", "OTV100N04 application", "DC-DC efficiency"]
          }
        ]
      }
    ]
  },
  {
    "id": "sic-devices",
    "name": "SiC Power Devices",
    "description": "Silicon carbide MOSFETs and Schottky diodes delivering superior efficiency and switching performance for next-generation power systems.",
    "longDescription": "Oriental SiC (Silicon Carbide) power devices represent the next generation of power semiconductor technology, offering significant performance advantages over traditional silicon IGBTs and MOSFETs. SiC MOSFETs feature ultra-low switching losses, enabling operation at much higher frequencies (50-100kHz+) with reduced cooling requirements. The wide bandgap of SiC allows higher temperature operation (up to 175-200°C junction temperature) and higher breakdown voltages. Oriental's SiC portfolio includes 650V, 1200V, and 1700V MOSFETs as well as SiC Schottky diodes for various high-efficiency applications including EV onboard chargers, solar inverters, and high-density power supplies. As an authorized Oriental distributor, LiTong provides SiC application expertise and design support.",
    "parameters": ["Voltage Rating", "Current Rating", "RDS(on)", "Package", "Temperature"],
    "applications": ["EV Onboard Chargers", "Solar Inverters", "High-Density SMPS", "Motor Drives", "Energy Storage"],
    "series": [
      {
        "name": "OSiC-M Series",
        "description": "SiC MOSFETs for high-efficiency power conversion"
      },
      {
        "name": "OSiC-D Series",
        "description": "SiC Schottky diodes for rectification applications"
      }
    ],
    "selectionGuide": {
      "title": "How to Select Oriental SiC Devices",
      "description": "Consider voltage rating, RDS(on), switching frequency, and cost-benefit analysis for SiC adoption.",
      "articleId": "sic-device-selection-guide",
      "articleLink": "/oriental/support/sic-device-selection-guide.html",
      "link": "/oriental/support/sic-device-selection-guide.html"
    },
    "faqs": [
      {
        "question": "What are the main advantages of SiC MOSFETs over silicon IGBTs?",
        "answer": "SiC MOSFETs offer several key advantages over silicon IGBTs: First, much lower switching losses - SiC devices can switch 10-100x faster, enabling higher frequencies (50-100kHz vs 5-20kHz for IGBTs). Second, lower conduction losses at light loads - SiC MOSFETs have no knee voltage like IGBTs. Third, higher temperature operation - SiC devices can operate up to 175-200°C vs 150°C for IGBTs. Fourth, smaller passive components - higher frequency operation allows smaller magnetics and capacitors. Fifth, reduced cooling requirements - lower losses mean smaller heatsinks. However, SiC devices cost 3-5x more than IGBTs, so the benefits must justify the cost premium in your application.",
        "decisionGuide": "Use SiC for high-frequency, high-efficiency, or high-temperature applications where performance benefits justify cost premium.",
        "keywords": ["SiC vs IGBT advantages", "Oriental SiC benefits", "SiC MOSFET selection"]
      }
    ],
    "products": [
      {
        "partNumber": "OSiC40M120",
        "name": "40A 1200V SiC MOSFET",
        "shortDescription": "High-performance 40A 1200V SiC MOSFET for EV chargers and high-efficiency inverters.",
        "descriptionParagraphs": [
          "The OSiC40M120 is a 1200V SiC MOSFET featuring ultra-low switching losses and high-temperature capability for next-generation power systems.",
          "With RDS(on) of 80m ohm and switching speeds 10x faster than IGBTs, this device enables high-frequency operation with reduced cooling requirements.",
          "The device is ideal for EV onboard chargers, solar inverters, and high-density power supplies requiring maximum efficiency."
        ],
        "specifications": {
          "Voltage Rating": "1200V",
          "Current Rating": "40A",
          "RDS(on)": "80m ohm (typ)",
          "Package": "TO-247-4",
          "Temperature": "175°C (max)"
        },
        "features": [
          "Ultra-low switching losses",
          "High-temperature operation to 175°C",
          "Fast switching speed",
          "Zero reverse recovery charge",
          "Low gate charge",
          "Kelvin source connection (TO-247-4)"
        ],
        "applications": [
          "EV onboard chargers",
          "Solar inverters",
          "High-density SMPS",
          "Motor drives"
        ],
        "faeReview": {
          "author": "Dr. Robert Li",
          "title": "Principal FAE - Wide Bandgap",
          "content": "The OSiC40M120 represents excellent value in the SiC MOSFET market. In EV onboard charger applications, I've measured efficiency improvements of 2-3% compared to IGBT solutions, which translates to significant energy savings and reduced cooling requirements. The Kelvin source connection in the TO-247-4 package is crucial for minimizing switching losses by isolating the gate drive loop from the power loop. For solar inverters, this device enables switching frequencies of 50-100kHz, allowing dramatic reduction in magnetic component size. The 175°C rating provides excellent design margin. While the initial cost is higher than IGBTs, the system-level benefits often justify the investment.",
          "highlight": "Excellent SiC solution for EV and solar applications with system-level efficiency benefits"
        },
        "alternativeParts": [
          {
            "partNumber": "C2M0040120D",
            "brand": "Wolfspeed",
            "specifications": {
              "Voltage": "1200V",
              "Current": "40A",
              "RDS(on)": "80m ohm"
            },
            "comparison": {
              "Voltage": "1200V = 1200V (same)",
              "Current": "40A = 40A (same)",
              "RDS(on)": "80m ohm = 80m ohm (same)",
              "Package": "TO-247 = TO-247-4 (similar)"
            },
            "reason": "Equivalent performance from leading SiC manufacturer",
            "useCase": "Alternative for high-reliability SiC designs",
            "link": "/wolfspeed/products/sic-mosfets/c2m0040120d.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "SiC Gate Driver",
            "link": "#",
            "description": "Isolated gate driver optimized for SiC MOSFETs",
            "category": "Gate Driver"
          },
          {
            "partNumber": "SiC Diode",
            "link": "#",
            "description": "1200V SiC Schottky diode for boost PFC",
            "category": "Diodes"
          },
          {
            "partNumber": "Current Sensor",
            "link": "#",
            "description": "High-bandwidth current sensor for protection",
            "category": "Sensors"
          }
        ],
        "faqs": [
          {
            "question": "What gate driver requirements are specific to SiC MOSFETs?",
            "answer": "SiC MOSFETs require special gate driver considerations due to their fast switching speed. Key requirements include: Higher gate voltage - typically +15V to +20V for turn-on (vs +15V for IGBTs) and -3V to -5V for turn-off to ensure reliable switching; Lower gate resistance - typically 1-5 ohms to achieve fast switching (but watch for EMI); Higher peak current capability - drivers must supply 2-5A peak current for fast charging of gate capacitance; Isolation - use isolated drivers with high CMTI (Common Mode Transient Immunity) of 50-100kV/us minimum; Undervoltage lockout - ensure adequate Vgs before switching to prevent excessive RDS(on). Oriental recommends dedicated SiC gate drivers designed for these requirements.",
            "decisionGuide": "Use dedicated SiC gate drivers with adequate voltage range, low Rg, and high CMTI.",
            "keywords": ["SiC gate driver", "OSiC40M120 driver", "SiC switching requirements"]
          }
        ]
      },
      {
        "partNumber": "OSiC20M650",
        "name": "20A 650V SiC MOSFET",
        "shortDescription": "650V SiC MOSFET optimized for high-frequency DC-DC converters and PFC applications.",
        "descriptionParagraphs": [
          "The OSiC20M650 is a 650V SiC MOSFET designed for high-efficiency, high-frequency power conversion applications.",
          "With RDS(on) of 45m ohm and ultra-fast switching, this device enables compact, high-density power supply designs.",
          "The 650V rating is ideal for 380-480V AC input applications including server power supplies and telecom rectifiers."
        ],
        "specifications": {
          "Voltage Rating": "650V",
          "Current Rating": "20A",
          "RDS(on)": "45m ohm (typ)",
          "Package": "TO-247-3",
          "Temperature": "175°C (max)"
        },
        "features": [
          "Ultra-low RDS(on) of 45m ohm",
          "Fast switching for high frequency",
          "175°C maximum junction temperature",
          "Zero reverse recovery",
          "Low switching losses",
          "Compatible with standard gate drivers"
        ],
        "applications": [
          "Server power supplies",
          "Telecom rectifiers",
          "PFC circuits",
          "DC-DC converters"
        ],
        "faeReview": {
          "author": "Steven Wu",
          "title": "Senior FAE - High-Density Power",
          "content": "The OSiC20M650 is an excellent choice for high-density server and telecom power supplies. The 650V rating is perfect for universal input (90-264V AC) and high-voltage DC (380V) applications. In my experience with 1kW server PSU designs, using this SiC MOSFET for the PFC stage achieves efficiency above 99% at 50% load, compared to 97-98% with silicon super-junction MOSFETs. The ability to switch at 100kHz+ allows dramatic reduction in boost inductor size. The TO-247-3 package is compatible with standard mounting and heatsink solutions. For designs where efficiency and power density are critical, this device provides excellent value.",
          "highlight": "High-efficiency solution for server and telecom power supplies"
        },
        "alternativeParts": [
          {
            "partNumber": "IPW60R045CS",
            "brand": "Infineon",
            "specifications": {
              "Voltage": "650V",
              "Current": "35A",
              "RDS(on)": "45m ohm"
            },
            "comparison": {
              "Voltage": "650V = 650V (same)",
              "Current": "35A > 20A (+75%)",
              "RDS(on)": "45m ohm = 45m ohm (same)",
              "Technology": "Silicon SJ = SiC (different)"
            },
            "reason": "Silicon super-junction alternative at lower cost",
            "useCase": "Cost-sensitive applications not requiring SiC benefits",
            "link": "/infineon/products/mosfets/ipw60r045cs.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "SiC Diode 650V",
            "link": "#",
            "description": "650V SiC Schottky for PFC boost diode",
            "category": "Diodes"
          },
          {
            "partNumber": "PFC Controller",
            "link": "#",
            "description": "Digital PFC controller for high-frequency operation",
            "category": "Controllers"
          },
          {
            "partNumber": "Gate Driver",
            "link": "#",
            "description": "High-speed isolated gate driver",
            "category": "Gate Driver"
          }
        ],
        "faqs": [
          {
            "question": "When does the cost premium of SiC MOSFETs become justified?",
            "answer": "The cost premium of SiC MOSFETs (3-5x vs silicon) becomes justified when: First, efficiency improvements translate to significant operating cost savings - in high-power continuous operation (e.g., data centers, EV chargers), 2-3% efficiency gain can save thousands in electricity costs annually. Second, reduced cooling requirements enable smaller heatsinks, fans, or elimination of liquid cooling, reducing system cost. Third, higher frequency operation allows smaller magnetics and capacitors, reducing overall system size and cost. Fourth, higher power density enables smaller enclosures or more power in the same space. Generally, SiC becomes cost-effective for systems above 5kW or where size/weight constraints are critical.",
            "decisionGuide": "Evaluate total system cost including cooling and magnetics; SiC often pays back in high-power or high-density applications.",
            "keywords": ["SiC cost justification", "OSiC20M650 value", "SiC ROI"]
          }
        ]
      }
    ]
  }
];

// Add categories to data
data.categories = data.categories.concat(additionalCategories);

// Write back
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('Added 3 more product categories to oriental/products.json');
console.log('Total categories:', data.categories.length);
