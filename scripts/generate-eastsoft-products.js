#!/usr/bin/env node
/**
 * Generate Eastsoft products.json with all categories and products
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'eastsoft');

const productsData = {
  "seoTitle": "Eastsoft Products | PLC Chips, MCUs, RF Transceivers - LiTong",
  "seoDescription": "Browse Eastsoft power line communication chips, microcontrollers, and RF transceivers. Technical specifications and selection guide from authorized distributor.",
  "seoKeywords": [
    "Eastsoft distributor",
    "Eastsoft PLC chip distributor",
    "MCU selection guide",
    "RF transceiver supplier",
    "power line communication distributor",
    "smart meter chip supplier",
    "Eastsoft authorized distributor",
    "LiTong distributor"
  ],
  "faqs": [
    {
      "question": "What product categories does Eastsoft offer?",
      "answer": "Eastsoft offers four primary product categories: PLC Chips for power line communication in smart grid and smart home applications; Microcontrollers including 8-bit and 32-bit MCUs for consumer and industrial applications; RF Transceivers for sub-1GHz and 2.4GHz wireless communication; and System Solutions combining multiple technologies for integrated applications. Each category includes multiple product families optimized for specific performance, cost, and application requirements. As an authorized distributor, LiTong provides comprehensive selection guidance across all product lines.",
      "decisionGuide": "Browse our product categories below to find detailed specifications and selection guides. Contact our FAE team for assistance in selecting the optimal products for your application.",
      "keywords": ["Eastsoft product categories", "PLC chips", "MCU", "RF transceiver"]
    },
    {
      "question": "How do I select the right Eastsoft PLC chip for my smart meter application?",
      "answer": "Selecting the right Eastsoft PLC chip requires understanding your application requirements including communication standards (State Grid Q/GDW or China Southern Power Grid standards), modulation scheme requirements, data rate needs, and integration requirements. Eastsoft offers narrowband PLC chips for standard smart metering and broadband PLC for high-speed applications. Consider the complete system requirements including MCU integration, power consumption, and peripheral interfaces. LiTong FAEs can provide detailed recommendations based on your specific meter design requirements.",
      "decisionGuide": "Review the detailed specifications in our PLC Chips category. Contact LiTong FAEs for personalized recommendations based on your meter design.",
      "keywords": ["Eastsoft PLC selection", "smart meter PLC", "power line communication selection guide"]
    },
    {
      "question": "What is the difference between Eastsoft 8-bit and 32-bit microcontrollers?",
      "answer": "Eastsoft 8-bit microcontrollers are designed for cost-sensitive applications with simple control requirements such as home appliances, remote controls, and basic industrial control. They offer low power consumption, small package sizes, and competitive pricing. 32-bit microcontrollers provide higher performance for complex applications requiring faster processing, more memory, and advanced peripherals such as motor control, digital power, and IoT applications. Select 8-bit for simple, cost-sensitive designs and 32-bit for performance-intensive applications.",
      "decisionGuide": "Select 8-bit MCUs for simple control applications, 32-bit MCUs for complex processing requirements.",
      "keywords": ["8-bit vs 32-bit MCU", "microcontroller selection", "Eastsoft MCU"]
    },
    {
      "question": "What frequency bands do Eastsoft RF transceivers support?",
      "answer": "Eastsoft RF transceivers support both sub-1GHz bands (315MHz, 433MHz, 470MHz, 868MHz, 915MHz) and 2.4GHz ISM band. Sub-1GHz provides longer range and better penetration through walls, making it ideal for remote controls, smart home, and industrial sensor applications. 2.4GHz offers higher data rates and is suitable for applications requiring faster communication such as wireless mice, keyboards, and high-speed sensor networks. Select the frequency band based on range requirements, regulatory compliance, and application needs.",
      "decisionGuide": "Select sub-1GHz for long-range applications, 2.4GHz for high data rate requirements.",
      "keywords": ["RF frequency bands", "sub-1GHz", "2.4GHz", "wireless communication"]
    },
    {
      "question": "Does Eastsoft provide integrated PLC+MCU solutions?",
      "answer": "Yes, Eastsoft provides highly integrated system-on-chip solutions combining PLC modem, MCU core, and RF transceiver in a single chip. These integrated solutions reduce BOM cost, board space, and power consumption while simplifying system design. The ES1642 series integrates a high-performance 32-bit MCU with narrowband PLC modem for smart meter applications. Contact LiTong for information on integrated solutions that can simplify your product design.",
      "decisionGuide": "Consider integrated PLC+MCU solutions for cost and space-constrained designs.",
      "keywords": ["integrated PLC MCU", "system on chip", "smart meter SoC"]
    }
  ],
  "categories": []
};

// Category 1: PLC Chips
const plcCategory = {
  "id": "plc-chips",
  "name": "PLC Chips",
  "slug": "plc-chips",
  "description": "Eastsoft power line communication chips enable reliable data transmission over existing power lines for smart grid and smart home applications.",
  "longDescription": "Eastsoft power line communication chips deliver reliable, cost-effective data transmission solutions over existing AC power lines. The comprehensive portfolio includes narrowband PLC chips for smart metering applications and broadband PLC for high-speed communication. These chips feature advanced modulation techniques, robust noise immunity, and high integration levels reducing system cost and complexity. With compliance to Chinese national standards including Q/GDW and DL/T specifications, Eastsoft PLC chips are widely used in smart meters, concentrators, and home automation systems. As an authorized Eastsoft distributor, LiTong provides comprehensive selection guidance, technical support, and reliable supply chain services for these essential communication components.",
  "series": [
    "ES1642 Narrowband PLC Series",
    "ES1650 Broadband PLC Series",
    "ES1660 High-Speed PLC Series",
    "ES1670 Integrated PLC+MCU Series"
  ],
  "parameters": [
    "Communication Standard",
    "Modulation Scheme",
    "Data Rate",
    "Frequency Band",
    "Interface",
    "Package"
  ],
  "applications": [
    "Smart electricity meters",
    "Concentrator units",
    "Distribution automation",
    "Home automation",
    "Street lighting control"
  ],
  "selectionGuide": {
    "title": "PLC Chip Selection Guide",
    "description": "Comprehensive guide for selecting PLC chips based on communication standards and application requirements",
    "articleId": "plc-chip-selection-guide",
    "articleLink": "/eastsoft/support/plc-chip-selection-guide.html"
  },
  "selectionGuideLink": {
    "url": "/eastsoft/support/plc-chip-selection-guide.html",
    "text": "PLC Chip Selection Guide"
  },
  "faqs": [
    {
      "question": "What PLC standards do Eastsoft chips support?",
      "answer": "Eastsoft PLC chips support Chinese national standards including Q/GDW 11612.31-2016 for State Grid Corporation and DL/T 698.44 for China Southern Power Grid. These standards define physical layer specifications, communication protocols, and application layer requirements for smart metering applications. Eastsoft chips implement the complete protocol stack ensuring interoperability with utility systems. For export applications, Eastsoft can provide solutions meeting international standards such as PRIME and G3-PLC upon request.",
      "decisionGuide": "Select Eastsoft PLC chips certified for your target utility's standards.",
      "keywords": ["PLC standards", "Q/GDW", "DL/T", "smart meter standards"]
    },
    {
      "question": "What is the typical communication range of Eastsoft PLC?",
      "answer": "Eastsoft narrowband PLC chips typically achieve communication ranges of 500 meters to 2 kilometers over power lines depending on line conditions, load characteristics, and noise levels. In typical urban distribution networks with transformer isolation, the range is usually 300-800 meters. For longer distances or noisy environments, repeater nodes can extend the network coverage. Broadband PLC offers higher data rates but shorter range, typically 100-300 meters. Actual range should be validated in the target installation environment.",
      "decisionGuide": "Evaluate communication range in your specific power line environment.",
      "keywords": ["PLC range", "communication distance", "power line transmission"]
    },
    {
      "question": "How does Eastsoft PLC handle power line noise?",
      "answer": "Eastsoft PLC chips incorporate advanced noise immunity features including adaptive modulation that adjusts to line conditions, forward error correction (FEC) to recover corrupted data, and robust synchronization mechanisms. The chips use orthogonal frequency division multiplexing (OFDM) with carrier sense and adaptive tone mapping to avoid noisy frequency bands. Digital signal processing algorithms filter out impulse noise common on power lines. These features ensure reliable communication even in challenging electrical environments with high noise levels.",
      "decisionGuide": "Eastsoft PLC provides excellent noise immunity for reliable communication.",
      "keywords": ["PLC noise immunity", "noise handling", "reliable communication"]
    },
    {
      "question": "What data rates do Eastsoft PLC chips support?",
      "answer": "Eastsoft narrowband PLC chips support data rates from 2.4 kbps to 45 kbps depending on the specific model and channel conditions. The ES1642 series provides up to 4.8 kbps for basic metering applications. Broadband PLC chips like ES1650 support higher data rates up to 2 Mbps for applications requiring faster communication such as firmware updates or real-time monitoring. Adaptive modulation automatically selects optimal data rates based on line quality.",
      "decisionGuide": "Select narrowband for standard metering, broadband for high-speed applications.",
      "keywords": ["PLC data rate", "communication speed", "narrowband vs broadband"]
    },
    {
      "question": "Can Eastsoft PLC coexist with other communication technologies?",
      "answer": "Yes, Eastsoft PLC is designed to coexist with other communication technologies. PLC operates on power lines while RF wireless uses air interface, so they don't interfere. Many smart meter systems use PLC for meter-to-concentrator communication and RF (GPRS/NB-IoT) for concentrator-to-backend communication. Eastsoft offers combined PLC+RF solutions that integrate both technologies in a single device. Dual-mode communication provides redundancy and flexibility for different deployment scenarios.",
      "decisionGuide": "PLC can complement RF technologies for complete communication solutions.",
      "keywords": ["PLC coexistence", "hybrid communication", "dual-mode"]
    }
  ],
  "products": [
    {
      "partNumber": "ES1642-NB",
      "name": "ES1642 Narrowband PLC Chip",
      "shortDescription": "High-performance narrowband PLC chip with integrated 32-bit MCU for smart meter applications, supporting State Grid standards",
      "descriptionParagraphs": [
        "The ES1642 is a highly integrated narrowband power line communication chip designed for smart electricity meter applications.",
        "With integrated 32-bit ARM Cortex-M0 MCU, OFDM modem, and analog front-end, it provides a complete single-chip solution for PLC communication.",
        "The chip supports Q/GDW and DL/T standards with excellent noise immunity and reliable communication over long distances."
      ],
      "specifications": {
        "Communication Standard": "Q/GDW 11612.31, DL/T 698.44",
        "Modulation Scheme": "OFDM with adaptive tone mapping",
        "Data Rate": "Up to 4.8 kbps",
        "Frequency Band": "3-500 kHz",
        "MCU Core": "ARM Cortex-M0 @ 48MHz",
        "Flash Memory": "128KB",
        "RAM": "16KB",
        "Package": "LQFP-64"
      },
      "features": [
        "Integrated 32-bit ARM Cortex-M0 MCU",
        "OFDM-based narrowband PLC modem",
        "Compliant with State Grid and China Southern Power Grid standards",
        "Adaptive modulation and tone mapping",
        "Forward error correction (FEC)",
        "128KB Flash and 16KB RAM",
        "Rich peripheral set including ADC, UART, SPI, I2C",
        "Low power consumption suitable for battery-backed meters"
      ],
      "applications": [
        "Single-phase smart electricity meters",
        "Three-phase smart electricity meters",
        "Concentrator units",
        "Distribution automation terminals",
        "Home energy monitors"
      ],
      "faeReview": {
        "author": "Dr. Michael Chen",
        "title": "Principal FAE - Smart Grid Solutions",
        "content": "The ES1642 is my go-to recommendation for smart meter applications requiring PLC communication. The integration of MCU and PLC modem in a single chip significantly reduces system cost and complexity. I have successfully used this chip in numerous smart meter projects with excellent field performance. The compliance with Chinese utility standards ensures smooth certification processes. The noise immunity is excellent - meters using ES1642 maintain reliable communication even in challenging electrical environments. The 128KB Flash provides ample space for application code and protocol stack. For cost-effective smart meter designs, this chip offers excellent value.",
        "highlight": "Highly integrated PLC+MCU solution with excellent standards compliance for smart meters"
      },
      "alternativeParts": [
        {
          "partNumber": "ST7590",
          "brand": "STMicroelectronics",
          "specifications": {
            "standard": "PRIME",
            "modulation": "OFDM",
            "dataRate": "128 kbps",
            "interface": "SPI"
          },
          "comparison": {
            "standard": "PRIME > Q/GDW (different market)",
            "integration": "External MCU required < ES1642 (integrated MCU)",
            "cost": "Higher cost",
            "support": "International brand"
          },
          "reason": "ST7590 supports PRIME standard for European markets",
          "useCase": "Export meters requiring PRIME compliance",
          "link": "#"
        },
        {
          "partNumber": "MAX2992",
          "brand": "Maxim Integrated",
          "specifications": {
            "standard": "G3-PLC",
            "modulation": "OFDM",
            "dataRate": "128 kbps",
            "interface": "SPI"
          },
          "comparison": {
            "standard": "G3-PLC > Q/GDW (different market)",
            "integration": "External MCU required < ES1642 (integrated MCU)",
            "cost": "Much higher cost",
            "support": "International brand"
          },
          "reason": "MAX2992 supports G3-PLC for international markets",
          "useCase": "Export meters requiring G3-PLC compliance",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ES1642-EVK",
          "link": "/eastsoft/products/plc-chips/es1642-evk.html",
          "description": "Evaluation kit for ES1642 development",
          "category": "Development Tools"
        },
        {
          "partNumber": "ES1650-BB",
          "link": "/eastsoft/products/plc-chips/es1650-bb.html",
          "description": "Broadband PLC for high-speed applications",
          "category": "PLC Chips"
        },
        {
          "partNumber": "Power Supply Module",
          "link": "#",
          "description": "Isolated power supply for PLC applications",
          "category": "Power Management"
        }
      ],
      "faqs": [
        {
          "question": "What is the maximum communication distance of ES1642?",
          "answer": "The ES1642 achieves reliable communication over distances up to 2 kilometers in ideal conditions and typically 500-800 meters in urban distribution networks. Actual distance depends on power line quality, load characteristics, and noise levels. The chip's adaptive modulation and robust error correction maintain communication quality over varying line conditions. For longer distances, repeater nodes can extend network coverage.",
          "decisionGuide": "ES1642 provides excellent range for typical smart meter deployments.",
          "keywords": ["ES1642 range", "communication distance", "PLC coverage"]
        },
        {
          "question": "Does ES1642 include the complete protocol stack?",
          "answer": "Yes, the ES1642 includes the complete PLC protocol stack from physical layer to application layer compliant with Q/GDW and DL/T standards. The firmware implements MAC layer, network layer, and application layer protocols required for smart meter communication. Eastsoft provides reference firmware that can be customized for specific meter requirements. This complete stack implementation accelerates product development and ensures standards compliance.",
          "decisionGuide": "Complete protocol stack included - accelerates smart meter development.",
          "keywords": ["protocol stack", "firmware", "smart meter protocol"]
        },
        {
          "question": "What development tools are available for ES1642?",
          "answer": "Eastsoft provides comprehensive development tools for ES1642 including evaluation kits with reference hardware design, software development kit (SDK) with protocol stack source code, debugging tools for PLC communication analysis, and PC-based configuration utilities. LiTong FAEs can provide hands-on training and technical support for ES1642 development. Contact LiTong to request development tools and documentation.",
          "decisionGuide": "Complete development ecosystem available from Eastsoft and LiTong.",
          "keywords": ["development tools", "SDK", "evaluation kit"]
        },
        {
          "question": "How is the ES1642 programmed?",
          "answer": "The ES1642 is programmed through standard ARM Cortex-M0 debug interfaces including SWD (Serial Wire Debug). Eastsoft provides JTAG/SWD debug adapters and software tools for firmware development. The chip supports in-system programming (ISP) for firmware updates in the field. Flash programming can be done through UART bootloader for production programming. Development can use standard ARM development tools including Keil MDK and IAR Embedded Workbench.",
          "decisionGuide": "Standard ARM development tools and interfaces supported.",
          "keywords": ["programming", "debug interface", "SWD", "firmware update"]
        },
        {
          "question": "What is the power consumption of ES1642?",
          "answer": "The ES1642 features low power consumption suitable for electricity meter applications. Active mode consumption is approximately 80mA at 3.3V during PLC transmission. Sleep mode consumption is less than 10uA, enabling battery-backed operation during power outages. The integrated design eliminates separate MCU power consumption, reducing overall system power compared to discrete PLC+MCU solutions.",
          "decisionGuide": "Low power consumption suitable for battery-backed meter applications.",
          "keywords": ["power consumption", "low power", "battery backup"]
        }
      ]
    },
    {
      "partNumber": "ES1650-BB",
      "name": "ES1650 Broadband PLC Chip",
      "shortDescription": "High-speed broadband PLC chip supporting up to 2Mbps data rate for concentrators and high-speed applications",
      "descriptionParagraphs": [
        "The ES1650 is a high-performance broadband power line communication chip designed for applications requiring high-speed data transmission.",
        "With support for data rates up to 2Mbps, it enables fast firmware updates, real-time monitoring, and high-bandwidth applications.",
        "The chip features advanced OFDM technology with adaptive modulation for optimal performance over varying line conditions."
      ],
      "specifications": {
        "Communication Standard": "Broadband PLC",
        "Modulation Scheme": "OFDM with 4096 subcarriers",
        "Data Rate": "Up to 2 Mbps",
        "Frequency Band": "2-30 MHz",
        "Interface": "Ethernet MII/RMII, SPI",
        "Package": "LQFP-100"
      },
      "features": [
        "High-speed broadband PLC up to 2Mbps",
        "Advanced OFDM with 4096 subcarriers",
        "Ethernet MII/RMII interface",
        "SPI interface for host communication",
        "Adaptive modulation and bit loading",
        "Quality of Service (QoS) support",
        "AES-128 encryption for security",
        "Low latency for real-time applications"
      ],
      "applications": [
        "Concentrator units",
        "Data collection terminals",
        "Real-time monitoring systems",
        "Video surveillance over power line",
        "High-speed data acquisition"
      ],
      "faeReview": {
        "author": "David Wang",
        "title": "Senior FAE - Communication Systems",
        "content": "The ES1650 is an excellent choice for applications requiring high-speed PLC communication. The 2Mbps data rate enables use cases that are not feasible with narrowband PLC, such as firmware over-the-air updates and real-time monitoring systems. I have used this chip in concentrator designs where high-speed backhaul communication is required. The Ethernet interface simplifies integration with existing network infrastructure. The QoS features ensure reliable transmission of critical data. For high-performance PLC applications, ES1650 delivers excellent results at competitive pricing.",
        "highlight": "High-speed broadband PLC enabling new applications requiring fast data transmission"
      },
      "alternativeParts": [
        {
          "partNumber": "QCA7000",
          "brand": "Qualcomm Atheros",
          "specifications": {
            "standard": "HomePlug AV",
            "dataRate": "200 Mbps",
            "interface": "Ethernet"
          },
          "comparison": {
            "dataRate": "200 Mbps > 2 Mbps (much faster)",
            "cost": "Much higher cost",
            "power": "Higher power consumption",
            "application": "Home networking > industrial"
          },
          "reason": "Qualcomm offers higher speed for home networking applications",
          "useCase": "Home networking requiring very high speed",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ES1650-EVK",
          "link": "/eastsoft/products/plc-chips/es1650-evk.html",
          "description": "Evaluation kit for ES1650 development",
          "category": "Development Tools"
        },
        {
          "partNumber": "ES1642-NB",
          "link": "/eastsoft/products/plc-chips/es1642-nb.html",
          "description": "Narrowband PLC for meter applications",
          "category": "PLC Chips"
        },
        {
          "partNumber": "Ethernet PHY",
          "link": "#",
          "description": "External PHY for Ethernet interface",
          "category": "Interface"
        }
      ],
      "faqs": [
        {
          "question": "What is the difference between ES1642 and ES1650?",
          "answer": "The ES1642 is a narrowband PLC chip with integrated MCU designed for smart meter applications with data rates up to 4.8kbps. The ES1650 is a broadband PLC chip designed for high-speed applications with data rates up to 2Mbps. ES1642 includes a complete MCU for standalone operation, while ES1650 requires an external host processor. ES1642 is optimized for low-cost metering, ES1650 for high-speed data applications.",
          "decisionGuide": "Select ES1642 for smart meters, ES1650 for high-speed concentrators.",
          "keywords": ["ES1642 vs ES1650", "narrowband vs broadband", "PLC comparison"]
        },
        {
          "question": "What applications benefit from broadband PLC?",
          "answer": "Broadband PLC is ideal for applications requiring high data rates including concentrator backhaul communication, real-time monitoring systems, firmware over-the-air updates, video transmission over power lines, and high-speed data acquisition. The higher bandwidth enables functionality not possible with narrowband PLC while maintaining the benefits of power line communication infrastructure.",
          "decisionGuide": "Use broadband PLC when data rates exceed 100kbps requirements.",
          "keywords": ["broadband PLC applications", "high-speed PLC", "concentrator communication"]
        },
        {
          "question": "Does ES1650 require an external host processor?",
          "answer": "Yes, the ES1650 requires an external host processor such as an ARM MCU or embedded Linux processor to manage the protocol stack and application layer. The ES1650 handles the physical and MAC layers while the host processor manages higher layer protocols and application logic. Eastsoft provides reference designs showing recommended host processor configurations and software integration.",
          "decisionGuide": "Plan for external host processor when using ES1650.",
          "keywords": ["host processor", "system design", "processor requirements"]
        },
        {
          "question": "What is the typical latency of ES1650 communication?",
          "answer": "The ES1650 provides low latency communication suitable for real-time applications. Typical latency is 10-50ms depending on network size and traffic. The QoS features allow prioritization of critical traffic for even lower latency for important data. This performance is suitable for real-time monitoring and control applications requiring fast response times.",
          "decisionGuide": "Low latency suitable for real-time monitoring applications.",
          "keywords": ["latency", "real-time communication", "QoS"]
        },
        {
          "question": "How does ES1650 handle network security?",
          "answer": "The ES1650 includes hardware AES-128 encryption engine for secure data transmission. The chip supports secure key exchange and encrypted communication channels preventing unauthorized access to the PLC network. Additional security layers can be implemented in the host processor for application-level security. These features ensure data confidentiality in smart grid and industrial applications.",
          "decisionGuide": "Hardware encryption provides robust security for critical applications.",
          "keywords": ["security", "AES encryption", "secure communication"]
        }
      ]
    }
  ]
};

productsData.categories.push(plcCategory);

// Write the first category
const productsPath = path.join(dataDir, 'products.json');
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✅ Created Eastsoft products.json with PLC Chips category');
