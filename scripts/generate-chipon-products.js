#!/usr/bin/env node
/**
 * Generate ChipON products data
 */

const fs = require('fs');
const path = require('path');

const brand = 'chipon';
const dataDir = path.join(__dirname, '..', 'data', brand);

// Ensure directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const productsData = {
  "seoTitle": "ChipON Products | Automotive MCU & Power Management | LiTong",
  "seoDescription": "Browse ChipON automotive MCUs, power management ICs, motor drivers, and industrial microcontrollers. Technical specifications and selection guide available.",
  "seoKeywords": [
    "ChipON products",
    "ChipON automotive MCU",
    "ChipON power management",
    "automotive MCU distributor",
    "AEC-Q100 microcontroller selection",
    "motor driver IC distributor",
    "industrial MCU selection guide"
  ],
  "faqs": [
    {
      "question": "What product categories does ChipON offer?",
      "answer": "ChipON offers four main product categories: automotive MCUs for car electronics applications, power management ICs for voltage regulation and LED driving, motor control ICs for various motor types, and industrial MCUs for automation and control systems. Each category includes multiple product families optimized for different application requirements and qualification levels. As an authorized distributor, LiTong provides comprehensive product selection guidance and technical support across all ChipON product lines.",
      "decisionGuide": "Browse the product categories below or contact LiTong FAEs for personalized product recommendations based on your application.",
      "keywords": ["ChipON products", "product categories", "automotive MCU"]
    },
    {
      "question": "How do I choose the right ChipON product for my application?",
      "answer": "Selecting the right ChipON product requires understanding your application requirements including processing needs, memory requirements, operating temperature range, qualification level (AEC-Q100 for automotive), and specific features like communication interfaces or analog peripherals. LiTong FAEs can guide you through the selection process by analyzing your specifications and recommending suitable products from ChipON's portfolio. We provide reference designs, application notes, and evaluation support to help you make informed decisions.",
      "decisionGuide": "Contact LiTong with your application specifications for expert product selection assistance.",
      "keywords": ["product selection", "application requirements", "selection guide"]
    },
    {
      "question": "What is AEC-Q100 qualification and why is it important?",
      "answer": "AEC-Q100 is the Automotive Electronics Council qualification standard for integrated circuits used in automotive applications. It defines stress test qualifications for ICs to ensure reliability in harsh automotive environments including extreme temperatures (-40°C to +150°C), humidity, vibration, and electromagnetic interference. Different grades exist: Grade 0 (-40 to +150°C), Grade 1 (-40 to +125°C), and Grade 2 (-40 to +105°C). AEC-Q100 qualification is essential for automotive electronics to ensure long-term reliability and safety. ChipON's automotive MCUs are fully AEC-Q100 qualified.",
      "decisionGuide": "For automotive applications, select AEC-Q100 qualified products. Contact LiTong for qualification guidance.",
      "keywords": ["AEC-Q100", "automotive qualification", "reliability standards"]
    },
    {
      "question": "Does ChipON offer products for functional safety applications?",
      "answer": "Yes, ChipON provides products suitable for functional safety applications requiring ISO 26262 compliance. Their automotive MCUs include features such as dual-core lockstep processing, error correction code (ECC) memory, built-in self-test (BIST), and comprehensive diagnostic capabilities. These features support ASIL (Automotive Safety Integrity Level) compliance up to ASIL-D for safety-critical applications. ChipON also provides safety documentation and support for safety system development.",
      "decisionGuide": "For functional safety applications, contact LiTong to discuss ChipON's safety-compliant product offerings.",
      "keywords": ["functional safety", "ISO 26262", "ASIL compliance"]
    },
    {
      "question": "What technical documentation is available for ChipON products?",
      "answer": "ChipON provides comprehensive technical documentation including datasheets, reference manuals, application notes, reference designs, and evaluation board documentation. Software resources include peripheral libraries, example code, and development tool guides. LiTong maintains a complete library of ChipON technical resources and can provide additional application support including design reviews, code optimization, and debugging assistance. For complex applications, our FAE team can provide customized application guidance.",
      "decisionGuide": "Contact LiTong to request technical documentation or application support for your ChipON-based designs.",
      "keywords": ["technical documentation", "datasheet", "application note"]
    }
  ],
  "categories": []
};

// Category 1: Automotive MCUs
const automotiveMCUsCategory = {
  "id": "automotive-mcus",
  "name": "Automotive MCUs",
  "slug": "automotive-mcus",
  "description": "AEC-Q100 qualified 8-bit and 32-bit microcontrollers for automotive body electronics, powertrain, and safety systems with high reliability and wide temperature range.",
  "longDescription": "ChipON automotive MCUs provide comprehensive solutions for automotive electronics applications requiring high reliability and AEC-Q100 qualification. The portfolio includes 8-bit MCUs for cost-sensitive body electronics and 32-bit MCUs for complex powertrain and safety applications. All automotive MCUs feature wide operating temperature ranges (-40°C to +125°C or +150°C), robust EMC performance, and comprehensive peripheral sets including CAN/LIN interfaces, ADCs, and motor control PWM. These MCUs are designed to meet stringent automotive quality standards and support functional safety requirements. As an authorized ChipON distributor, LiTong provides complete technical support including selection guidance, software development support, and application troubleshooting for automotive MCU designs.",
  "parameters": ["Core", "Flash", "RAM", "Temperature Range", "Package"],
  "series": [
    {
      "name": "KF Series",
      "description": "8-bit automotive MCUs for body electronics and control applications",
      "applications": ["Body control modules", "Door modules", "HVAC control"]
    },
    {
      "name": "KF32 Series",
      "description": "32-bit automotive MCUs for powertrain and safety applications",
      "applications": ["Engine control", "Battery management", "Motor control"]
    }
  ],
  "selectionGuide": "Automotive MCU Selection Guide",
  "selectionGuideLink": "/chipon/support/automotive-mcu-selection-guide.html",
  "faqs": [
    {
      "question": "How do I select the right ChipON automotive MCU for my application?",
      "answer": "Selecting the right automotive MCU requires considering processing requirements (8-bit for simple control, 32-bit for complex algorithms), memory needs (Flash and RAM), peripheral requirements (CAN/LIN, ADC, PWM), temperature grade (Grade 0/1/2), package type, and functional safety requirements. For body electronics, KF series 8-bit MCUs offer cost-effective solutions. For powertrain and safety applications, KF32 series 32-bit MCUs provide enhanced performance and safety features. LiTong FAEs can help analyze your specific requirements and recommend optimal solutions.",
      "decisionGuide": "Provide your application specifications to LiTong for personalized automotive MCU recommendations.",
      "keywords": ["automotive MCU selection", "application requirements", "AEC-Q100"]
    },
    {
      "question": "What communication interfaces are available on ChipON automotive MCUs?",
      "answer": "ChipON automotive MCUs support comprehensive communication interfaces including CAN (Controller Area Network) for vehicle networking, LIN (Local Interconnect Network) for low-cost body electronics, UART/USART for serial communication, SPI for high-speed peripheral connection, and I2C for sensor interfacing. Advanced MCUs may also support CAN FD (Flexible Data-rate) for higher bandwidth applications. These interfaces enable seamless integration with other vehicle systems and sensors. The specific interfaces available depend on the MCU series and package selected.",
      "decisionGuide": "Select MCU based on required communication interfaces. Contact LiTong for interface compatibility guidance.",
      "keywords": ["CAN bus", "LIN bus", "communication interfaces"]
    },
    {
      "question": "What is the difference between AEC-Q100 Grade 0, 1, and 2?",
      "answer": "AEC-Q100 grades define different temperature ranges for automotive applications: Grade 0 (-40°C to +150°C) for under-hood and extreme environments, Grade 1 (-40°C to +125°C) for passenger compartment and general automotive use, and Grade 2 (-40°C to +105°C) for less demanding applications. Higher grades require more stringent testing and typically cost more. Most automotive body electronics use Grade 1, while powertrain applications may require Grade 0. ChipON offers products qualified to all three grades to meet different application requirements.",
      "decisionGuide": "Select grade based on operating environment. Contact LiTong for grade selection guidance.",
      "keywords": ["AEC-Q100 grades", "temperature range", "automotive qualification"]
    },
    {
      "question": "How do I develop software for ChipON automotive MCUs?",
      "answer": "ChipON provides comprehensive software development tools including integrated development environments (IDE), C compilers, debuggers, and in-circuit emulators. Their software ecosystem includes peripheral driver libraries, middleware stacks (CAN, LIN), and application examples. Development boards and evaluation kits are available for major product families. LiTong can provide software development support including code reviews, optimization guidance, and debugging assistance. For automotive applications, follow proper software development processes including requirements management, coding standards (MISRA C), and verification testing.",
      "decisionGuide": "Contact LiTong for development tools and software support for ChipON automotive MCUs.",
      "keywords": ["software development", "IDE", "debugging tools"]
    },
    {
      "question": "What motor control features are available in ChipON MCUs?",
      "answer": "ChipON automotive MCUs include advanced motor control features such as high-resolution PWM timers (up to 16-bit), complementary PWM outputs with dead-time insertion, hardware fault protection, and synchronized ADC triggering. These features support various motor types including brushed DC, brushless DC (BLDC), and stepper motors. Some MCUs include dedicated motor control peripherals for sensorless BLDC control. The motor control capabilities are suitable for automotive applications such as HVAC blowers, cooling fans, and electric power steering systems.",
      "decisionGuide": "For motor control applications, select MCUs with dedicated motor control peripherals. Contact LiTong for motor control design support.",
      "keywords": ["motor control", "PWM", "BLDC control"]
    }
  ],
  "products": [
    {
      "partNumber": "KF8A100",
      "name": "8-bit Automotive MCU",
      "shortDescription": "AEC-Q100 Grade 1 8-bit MCU with 64KB Flash and CAN interface for automotive body electronics",
      "descriptionParagraphs": [
        "The KF8A100 is a high-performance 8-bit automotive microcontroller designed for body electronics applications. It features AEC-Q100 Grade 1 qualification (-40°C to +125°C) and robust EMC performance for automotive environments.",
        "This MCU includes 64KB Flash memory, 4KB RAM, and comprehensive peripherals including CAN 2.0B, LIN, UART, SPI, and I2C interfaces. The integrated 12-bit ADC and PWM timers support various sensor and control applications.",
        "Built-in safety features include watchdog timer, brown-out detection, and clock monitoring. The KF8A100 is suitable for body control modules, door modules, HVAC control, and other automotive electronics."
      ],
      "specifications": {
        "Core": "8-bit",
        "Flash": "64KB",
        "RAM": "4KB",
        "EEPROM": "1KB",
        "Operating Voltage": "2.7V-5.5V",
        "Temperature Range": "-40°C to +125°C (Grade 1)",
        "Package": "LQFP-48"
      },
      "features": [
        "AEC-Q100 Grade 1 qualified",
        "CAN 2.0B interface",
        "LIN master/slave support",
        "12-bit ADC with 16 channels",
        "16-bit PWM timers",
        "Hardware watchdog timer"
      ],
      "applications": [
        "Body control modules",
        "Door control modules",
        "HVAC control systems",
        "Seat control modules",
        "Lighting control"
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - Automotive Electronics",
        "content": "The KF8A100 is an excellent choice for cost-sensitive automotive body electronics applications. In my experience supporting automotive Tier-1 suppliers, this MCU provides the right balance of features and cost for body control modules. The integrated CAN and LIN interfaces simplify vehicle networking, while the robust EMC performance ensures reliable operation in harsh automotive environments. I particularly appreciate the comprehensive peripheral set which reduces the need for external components. The AEC-Q100 Grade 1 qualification meets requirements for most passenger compartment applications. For development, ChipON provides good software libraries and example code that accelerate time-to-market.",
        "highlight": "Cost-effective automotive MCU with comprehensive peripherals for body electronics"
      },
      "alternativeParts": [
        {
          "partNumber": "KF8A200",
          "brand": "ChipON",
          "specifications": {
            "core": "8-bit",
            "flash": "128KB",
            "ram": "8KB",
            "temperature": "-40°C to +125°C"
          },
          "comparison": {
            "flash": "128KB > 64KB (+100% more memory)",
            "ram": "8KB > 4KB (+100% more RAM)",
            "core": "8-bit = 8-bit (same)",
            "temperature": "-40°C to +125°C = -40°C to +125°C (same)",
            "package": "LQFP-48 = LQFP-48 (same)"
          },
          "reason": "Higher memory capacity for complex applications",
          "useCase": "Complex body control modules requiring more memory",
          "link": "#"
        },
        {
          "partNumber": "NXP S9KEA",
          "brand": "NXP",
          "specifications": {
            "core": "ARM Cortex-M0+",
            "flash": "64KB",
            "ram": "8KB",
            "temperature": "-40°C to +125°C"
          },
          "comparison": {
            "core": "ARM Cortex-M0+ > 8-bit (32-bit architecture)",
            "flash": "64KB = 64KB (same)",
            "ram": "8KB > 4KB (+100% more RAM)",
            "temperature": "-40°C to +125°C = -40°C to +125°C (same)",
            "price": "Higher cost"
          },
          "reason": "Alternative with 32-bit architecture for future migration",
          "useCase": "Applications requiring 32-bit processing capability",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "KF501A",
          "link": "#",
          "description": "CAN transceiver for vehicle network interface",
          "category": "Interface"
        },
        {
          "partNumber": "KF502A",
          "link": "#",
          "description": "LIN transceiver for low-cost networking",
          "category": "Interface"
        },
        {
          "partNumber": "Evaluation Board",
          "link": "#",
          "description": "KF8A100 evaluation board with debugging interface",
          "category": "Development Tools"
        }
      ],
      "faqs": [
        {
          "question": "What is the maximum operating frequency of KF8A100?",
          "answer": "The KF8A100 operates at maximum CPU frequency of 32MHz. This frequency provides adequate processing power for typical body electronics applications while maintaining low power consumption. The MCU includes programmable clock dividers to reduce frequency for power-sensitive applications. At 32MHz, the KF8A100 can execute most control algorithms efficiently while leaving headroom for communication protocol handling and interrupt servicing.",
          "decisionGuide": "For applications requiring higher processing power, consider KF32 series 32-bit MCUs. Contact LiTong for performance analysis.",
          "keywords": ["operating frequency", "CPU speed", "performance"]
        },
        {
          "question": "How do I program and debug the KF8A100?",
          "answer": "The KF8A100 supports in-circuit programming and debugging through a standard debug interface. ChipON provides dedicated debuggers and programmers that connect to the IDE. The programming voltage is 5V or 3.3V compatible. Flash programming can be done via the debug interface or through bootloader for in-field updates. The IDE includes comprehensive debugging features such as breakpoints, single-stepping, and variable inspection. LiTong can provide debug tools and training for development teams.",
          "decisionGuide": "Contact LiTong for debug tools and programming equipment recommendations.",
          "keywords": ["programming", "debugging", "development tools"]
        },
        {
          "question": "What power consumption can I expect with KF8A100?",
          "answer": "The KF8A100 features low power consumption suitable for automotive applications. Typical active mode current is 5-8mA at 32MHz with all peripherals enabled. Sleep mode consumption is less than 50μA with watchdog running. The MCU includes multiple low-power modes that can be configured based on application requirements. Power consumption scales with operating frequency and number of active peripherals. For battery-backed applications, the low sleep current ensures minimal battery drain during standby periods.",
          "decisionGuide": "For ultra-low power applications, contact LiTong for power optimization guidance.",
          "keywords": ["power consumption", "low power mode", "current draw"]
        },
        {
          "question": "Can KF8A100 be used for safety-critical applications?",
          "answer": "The KF8A100 includes basic safety features such as watchdog timer, brown-out detection, and clock monitoring. However, for safety-critical applications requiring ASIL compliance, ChipON recommends using KF32 series MCUs with enhanced safety features including dual-core lockstep, ECC memory, and comprehensive diagnostic capabilities. The KF8A100 is suitable for QM (Quality Management) level applications such as body electronics where functional safety requirements are less stringent.",
          "decisionGuide": "For safety-critical applications, contact LiTong to discuss KF32 series safety-compliant MCUs.",
          "keywords": ["functional safety", "ASIL", "safety-critical"]
        },
        {
          "question": "What is the Flash endurance and data retention for KF8A100?",
          "answer": "The KF8A100 Flash memory provides minimum 100,000 program/erase cycles endurance and 20-year data retention at 85°C. These specifications meet automotive requirements for parameter storage and firmware updates over the vehicle lifetime. The Flash can be programmed in pages or individually by word. Error correction is not implemented in the KF8A100, so critical data should include software-based error checking. For applications requiring higher endurance, consider external EEPROM or using wear-leveling techniques.",
          "decisionGuide": "For high-endurance storage requirements, contact LiTong for external memory solutions.",
          "keywords": ["Flash endurance", "data retention", "memory specifications"]
        }
      ]
    },
    {
      "partNumber": "KF32A150",
      "name": "32-bit Automotive MCU",
      "shortDescription": "AEC-Q100 Grade 0 32-bit ARM Cortex-M4 MCU with 256KB Flash and advanced safety features for powertrain applications",
      "descriptionParagraphs": [
        "The KF32A150 is a high-performance 32-bit automotive microcontroller based on ARM Cortex-M4 core with DSP and FPU. It features AEC-Q100 Grade 0 qualification (-40°C to +150°C) for under-hood applications.",
        "This MCU includes 256KB Flash memory, 32KB RAM with ECC, and comprehensive peripherals including dual CAN FD, LIN, and Ethernet interfaces. The advanced motor control unit supports complex algorithms for powertrain applications.",
        "Safety features include dual-core lockstep, memory protection unit, and comprehensive BIST. The KF32A150 is suitable for engine control, battery management, and safety-critical automotive systems."
      ],
      "specifications": {
        "Core": "ARM Cortex-M4",
        "Flash": "256KB",
        "RAM": "32KB with ECC",
        "Operating Voltage": "3.3V",
        "Temperature Range": "-40°C to +150°C (Grade 0)",
        "Package": "LQFP-100"
      },
      "features": [
        "AEC-Q100 Grade 0 qualified",
        "ARM Cortex-M4 with DSP/FPU",
        "Dual CAN FD interfaces",
        "Memory ECC protection",
        "Dual-core lockstep option",
        "Advanced motor control unit"
      ],
      "applications": [
        "Engine control units",
        "Battery management systems",
        "Motor control systems",
        "Transmission control",
        "Safety systems"
      ],
      "faeReview": {
        "author": "David Wang",
        "title": "Principal FAE - Powertrain Systems",
        "content": "The KF32A150 is my go-to recommendation for automotive powertrain and safety applications. The ARM Cortex-M4 core with FPU provides excellent processing power for complex control algorithms, while the Grade 0 qualification ensures reliable operation in harsh under-hood environments. In my experience with multiple Tier-1 powertrain projects, the dual CAN FD interfaces handle high-bandwidth vehicle networking requirements effectively. The memory ECC and safety features are essential for ASIL-compliant designs. I particularly appreciate the comprehensive motor control peripherals which simplify hardware design for electric motor applications. For safety-critical systems, the dual-core lockstep option provides the redundancy needed for high ASIL levels.",
        "highlight": "High-performance 32-bit MCU with Grade 0 qualification for powertrain applications"
      },
      "alternativeParts": [
        {
          "partNumber": "KF32A250",
          "brand": "ChipON",
          "specifications": {
            "core": "ARM Cortex-M4",
            "flash": "512KB",
            "ram": "64KB with ECC",
            "temperature": "-40°C to +150°C"
          },
          "comparison": {
            "flash": "512KB > 256KB (+100% more memory)",
            "ram": "64KB > 32KB (+100% more RAM)",
            "core": "ARM Cortex-M4 = ARM Cortex-M4 (same)",
            "temperature": "-40°C to +150°C = -40°C to +150°C (same)",
            "package": "LQFP-100 = LQFP-100 (same)"
          },
          "reason": "Higher memory capacity for complex powertrain algorithms",
          "useCase": "Complex engine control and battery management systems",
          "link": "#"
        },
        {
          "partNumber": "Infineon TC233",
          "brand": "Infineon",
          "specifications": {
            "core": "TriCore",
            "flash": "256KB",
            "ram": "24KB",
            "temperature": "-40°C to +150°C"
          },
          "comparison": {
            "core": "TriCore > ARM Cortex-M4 (different architecture)",
            "flash": "256KB = 256KB (same)",
            "ram": "24KB < 32KB (-25% less RAM)",
            "temperature": "-40°C to +150°C = -40°C to +150°C (same)",
            "price": "Higher cost"
          },
          "reason": "Alternative with proven automotive track record",
          "useCase": "Applications requiring TriCore architecture compatibility",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "KF503A",
          "link": "#",
          "description": "CAN FD transceiver for high-speed vehicle networking",
          "category": "Interface"
        },
        {
          "partNumber": "KF504A",
          "link": "#",
          "description": "High-side driver for actuator control",
          "category": "Power Driver"
        },
        {
          "partNumber": "Development Kit",
          "link": "#",
          "description": "KF32A150 development kit with debugger and software",
          "category": "Development Tools"
        }
      ],
      "faqs": [
        {
          "question": "What is the processing performance of KF32A150?",
          "answer": "The KF32A150 features an ARM Cortex-M4 core running at up to 120MHz with DSP instruction set and single-precision FPU. This provides approximately 150 DMIPS processing performance, suitable for complex control algorithms in powertrain applications. The DSP capabilities enable efficient implementation of digital filters and FFT operations. The FPU accelerates floating-point calculations for mathematical models. Real-time performance is enhanced by the nested vectored interrupt controller (NVIC) with up to 240 interrupt priorities.",
          "decisionGuide": "For higher processing requirements, consider KF32A250 with same core at higher frequency. Contact LiTong for performance analysis.",
          "keywords": ["processing performance", "Cortex-M4", "DSP"]
        },
        {
          "question": "How does the dual-core lockstep feature work?",
          "answer": "The dual-core lockstep feature runs two identical ARM Cortex-M4 cores in parallel, executing the same instructions simultaneously. The outputs of both cores are compared cycle-by-cycle to detect any discrepancies that might indicate a hardware fault. If a mismatch is detected, the system can enter a safe state. This redundancy is essential for achieving high ASIL levels (ASIL-C/D) in safety-critical applications. The lockstep operation is transparent to software, requiring no special coding techniques. Diagnostic coverage includes CPU, memory interface, and bus systems.",
          "decisionGuide": "For safety-critical applications requiring ASIL-C/D, select lockstep option. Contact LiTong for functional safety design support.",
          "keywords": ["dual-core lockstep", "functional safety", "ASIL"]
        },
        {
          "question": "What motor control capabilities does KF32A150 offer?",
          "answer": "The KF32A150 includes an advanced motor control unit with high-resolution PWM timers (up to 150ps resolution), synchronized ADC triggering, and hardware encoder interface. These features support complex motor control algorithms including field-oriented control (FOC) for PMSM motors and trapezoidal control for BLDC motors. The DSP capabilities enable efficient implementation of Clarke/Park transformations and PI controllers. Multiple PWM outputs with dead-time insertion support 3-phase motor drive. The motor control unit is suitable for electric power steering, HVAC compressors, and cooling fan applications.",
          "decisionGuide": "For motor control applications, request motor control software libraries from LiTong.",
          "keywords": ["motor control", "FOC", "PWM"]
        },
        {
          "question": "Can KF32A150 support functional safety certification?",
          "answer": "Yes, the KF32A150 is designed to support functional safety certification up to ASIL-D when configured with dual-core lockstep. The device includes comprehensive safety features: memory ECC, clock monitoring, voltage monitoring, temperature sensors, and built-in self-test (BIST) capabilities. ChipON provides safety documentation including safety manuals, FMEDA (Failure Modes, Effects, and Diagnostic Analysis), and application notes for safety system development. LiTong can provide guidance on functional safety design and certification processes.",
          "decisionGuide": "For functional safety projects, contact LiTong for safety documentation and design support.",
          "keywords": ["functional safety", "ASIL-D", "safety certification"]
        },
        {
          "question": "What development tools are available for KF32A150?",
          "answer": "ChipON provides comprehensive development tools for KF32A150 including ChipON IDE based on Eclipse, GCC compiler, and debuggers supporting JTAG and SWD interfaces. The software ecosystem includes peripheral driver libraries, middleware stacks (CAN FD, TCP/IP), RTOS support, and motor control libraries. Evaluation boards with debugging interfaces are available for hardware development. Third-party tools from Keil and IAR are also supported. LiTong provides development tool training and technical support for software development.",
          "decisionGuide": "Contact LiTong for development tools, evaluation kits, and software development support.",
          "keywords": ["development tools", "IDE", "debugger"]
        }
      ]
    }
  ]
};

productsData.categories.push(automotiveMCUsCategory);

// Save initial file
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✅ Created initial products.json with Automotive MCUs category');
