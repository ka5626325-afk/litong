#!/usr/bin/env node
/**
 * Generate remaining Eastsoft data files (solutions, support, news)
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'eastsoft');

// Generate solutions.json
const solutionsData = {
  "seoTitle": "Eastsoft Solutions | Smart Grid & Home Automation - LiTong",
  "seoDescription": "Explore Eastsoft system solutions for smart grid, home automation, and industrial applications. Technical implementation guides from authorized distributor.",
  "seoKeywords": [
    "Eastsoft solutions",
    "smart grid solutions",
    "home automation solutions",
    "PLC communication solutions",
    "smart meter solutions",
    "LiTong distributor"
  ],
  "faqs": [
    {
      "question": "What system solutions does Eastsoft offer?",
      "answer": "Eastsoft offers comprehensive system solutions including smart meter solutions for electricity metering with PLC communication, home automation solutions for intelligent building control, concentrator solutions for data collection, and IoT gateway solutions for device connectivity. Each solution includes complete hardware reference designs, firmware source code, and technical documentation. As an authorized distributor, LiTong provides full technical support for solution implementation.",
      "decisionGuide": "Contact LiTong FAEs to discuss your application requirements and select the appropriate solution.",
      "keywords": ["Eastsoft solutions", "system solutions", "smart grid", "home automation"]
    },
    {
      "question": "How can I get started with Eastsoft solutions?",
      "answer": "Getting started with Eastsoft solutions is easy. Contact LiTong to request solution documentation and evaluation kits. Our FAE team can provide technical presentations and hands-on training. We recommend starting with the evaluation kit to familiarize yourself with the solution, then proceeding to customize the design for your specific requirements. LiTong provides support throughout the development process from evaluation to production.",
      "decisionGuide": "Request evaluation kits and documentation from LiTong to get started.",
      "keywords": ["getting started", "evaluation kit", "solution development"]
    }
  ],
  "solutions": [
    {
      "id": "smart-meter-plc-solution",
      "title": "Smart Meter PLC Communication Solution",
      "subtitle": "Complete AMI solution using Eastsoft PLC technology for reliable power line communication",
      "description": "Comprehensive smart metering solution using Eastsoft PLC chips for reliable communication over existing power lines",
      "longDescription": "The Smart Meter PLC Communication Solution leverages Eastsoft's proven power line communication technology to enable reliable, cost-effective AMI (Advanced Metering Infrastructure) deployments. This solution includes single-phase and three-phase smart meter reference designs with integrated PLC communication, metrology, and application firmware. The solution is compliant with Chinese utility standards (Q/GDW and DL/T) and has been deployed in millions of meters. Key features include automatic meter reading, tamper detection, remote disconnect, and prepayment support. The PLC communication provides reliable data transmission over existing power lines without requiring additional communication infrastructure. As an authorized Eastsoft distributor, LiTong provides complete technical support including design review, firmware customization, and certification assistance.",
      "image": "/images/solutions/smart-meter-plc-solution.jpg",
      "icon": "fa-bolt",
      "slug": "smart-meter-plc-solution",
      "applications": [
        "Residential smart meters",
        "Commercial metering systems",
        "AMI deployments",
        "Prepayment metering",
        "Distribution monitoring"
      ],
      "features": [
        "Complete meter reference designs",
        "State Grid and China Southern Power Grid compliant",
        "Class 0.5S metrology accuracy",
        "Reliable PLC communication",
        "Tamper detection and reporting",
        "Remote disconnect capability",
        "Prepayment (STS) support",
        "LCD display and user interface"
      ],
      "products": [
        {
          "partNumber": "ES1642-NB",
          "name": "ES1642 Narrowband PLC Chip",
          "role": "Primary PLC communication controller",
          "link": "/eastsoft/products/plc-chips/es1642-nb.html"
        },
        {
          "partNumber": "ES-METER-S1",
          "name": "Single-Phase Smart Meter Solution",
          "role": "Complete meter reference design",
          "link": "/eastsoft/products/system-solutions/es-meter-s1.html"
        }
      ],
      "technicalSpecs": {
        "Communication Standard": "Q/GDW 11612.31, DL/T 698.44",
        "Metrology Accuracy": "Class 0.5S (IEC 62053-21)",
        "PLC Data Rate": "Up to 4.8 kbps",
        "Communication Range": "500m - 2km typical",
        "Operating Temperature": "-40°C to +70°C",
        "Certification": "Utility certified"
      },
      "coreAdvantages": [
        {
          "title": "Proven Reliability",
          "description": "Deployed in millions of meters with proven field reliability and utility certification.",
          "icon": "fa-check-circle"
        },
        {
          "title": "Cost Effective",
          "description": "Uses existing power lines for communication, eliminating additional infrastructure costs.",
          "icon": "fa-dollar-sign"
        },
        {
          "title": "Standards Compliant",
          "description": "Compliant with Chinese utility standards ensuring smooth certification and deployment.",
          "icon": "fa-certificate"
        },
        {
          "title": "Complete Solution",
          "description": "Includes hardware, firmware, documentation, and technical support for rapid deployment.",
          "icon": "fa-box"
        },
        {
          "title": "Long-Term Support",
          "description": "Long product lifecycle support with 5+ years availability for utility deployments.",
          "icon": "fa-calendar-check"
        }
      ],
      "bomList": [
        { "partNumber": "ES1642-NB", "description": "Narrowband PLC Chip", "quantity": 1, "link": "/eastsoft/products/plc-chips/es1642-nb.html" },
        { "partNumber": "ES7F3268", "description": "8-bit MCU for metrology", "quantity": 1, "link": "/eastsoft/products/microcontrollers/es7f3268.html" },
        { "partNumber": "Current Transformer", "description": "For current sensing", "quantity": 1 },
        { "partNumber": "Shunt Resistor", "description": "For current measurement", "quantity": 1 },
        { "partNumber": "LCD Module", "description": "Display module", "quantity": 1 },
        { "partNumber": "Relay", "description": "Load control relay", "quantity": 1 }
      ],
      "faeInsights": {
        "author": "Dr. Michael Chen",
        "title": "Principal FAE - Smart Grid Solutions",
        "content": "This smart meter PLC solution has been successfully deployed in numerous utility projects across China. The key to success is proper implementation of the PLC communication layer and thorough testing under various line conditions. I always recommend customers start with the reference design and customize gradually. The certification process is streamlined because the solution has already passed utility testing. For AMI deployments, this solution offers excellent reliability at competitive cost.",
        "keyTakeaways": ["Proven utility-certified solution", "Complete hardware and firmware package", "Streamlined certification process"],
        "insightLogic": "Based on extensive field experience with smart meter deployments, the solution provides reliable performance when implemented according to reference design guidelines. Contact LiTong FAEs for implementation support.",
        "decisionFramework": "1) Evaluate communication requirements 2) Review reference design 3) Customize for specific needs 4) Validate with testing 5) Proceed to certification"
      },
      "customerCases": [
        {
          "customer": "Provincial Grid Company",
          "application": "AMI deployment",
          "challenge": "Needed reliable smart meters for large-scale deployment",
          "solution": "Deployed Eastsoft PLC-based smart meters using reference solution",
          "result": "Successfully deployed 500,000+ meters with 99.5% communication success rate",
          "feedback": "Excellent communication reliability and low maintenance requirements"
        },
        {
          "customer": "Meter Manufacturer",
          "application": "Smart meter production",
          "challenge": "Required certified solution for utility tender",
          "solution": "Adopted Eastsoft solution with minor customizations",
          "result": "Passed utility certification on first attempt, won major tender",
          "feedback": "Reference design quality and documentation accelerated time to market"
        }
      ],
      "resources": [
        {
          "title": "Smart Meter Design Guide",
          "type": "application-note",
          "link": "/eastsoft/support/smart-meter-design-guide.html",
          "description": "Comprehensive guide for smart meter design"
        },
        {
          "title": "PLC Communication Application Note",
          "type": "application-note",
          "link": "/eastsoft/support/plc-communication-guide.html",
          "description": "Technical guide for PLC implementation"
        }
      ],
      "faqs": [
        {
          "question": "What is the typical deployment timeline?",
          "answer": "Using the Eastsoft reference solution, smart meter development typically takes 3-6 months including customization, testing, and certification. This is significantly faster than the 12-18 months required for a design from scratch. The timeline includes 1-2 months for hardware customization, 1-2 months for firmware adaptation, and 1-2 months for certification testing.",
          "decisionGuide": "3-6 month typical timeline from start to production.",
          "keywords": ["deployment timeline", "development time", "time to market"]
        }
      ]
    },
    {
      "id": "home-automation-solution",
      "title": "Smart Home Automation Solution",
      "subtitle": "Integrated home automation using PLC and wireless communication technologies",
      "description": "Complete home automation solution combining PLC and RF wireless for intelligent building control",
      "longDescription": "The Smart Home Automation Solution provides a comprehensive platform for intelligent building control using Eastsoft's communication technologies. The solution combines power line communication (PLC) for wired device control with RF wireless for battery-powered sensors and mobile devices. The system includes a central gateway that bridges different communication protocols and provides cloud connectivity for remote access. Key features include lighting control, appliance management, security monitoring, and energy management. The solution supports voice assistant integration and mobile app control. As an authorized Eastsoft distributor, LiTong provides complete technical support for system integration and customization.",
      "image": "/images/solutions/home-automation-solution.jpg",
      "icon": "fa-home",
      "slug": "home-automation-solution",
      "applications": [
        "Smart homes",
        "Intelligent buildings",
        "Home energy management",
        "Security systems",
        "Lighting control"
      ],
      "features": [
        "Multi-protocol communication (PLC + RF + WiFi)",
        "Central gateway with cloud connectivity",
        "Mobile app control",
        "Voice assistant integration",
        "Scene and automation programming",
        "Energy monitoring",
        "Security monitoring",
        "Over-the-air updates"
      ],
      "products": [
        {
          "partNumber": "ES-HOME-A1",
          "name": "Home Automation Gateway",
          "role": "Central control gateway",
          "link": "/eastsoft/products/system-solutions/es-home-a1.html"
        },
        {
          "partNumber": "ES8T433",
          "name": "433MHz RF Transceiver",
          "role": "Wireless device communication",
          "link": "/eastsoft/products/rf-transceivers/es8t433.html"
        }
      ],
      "technicalSpecs": {
        "Communication": "PLC + 433MHz RF + WiFi",
        "Gateway Processor": "ARM Cortex-A7 @ 1GHz",
        "Device Capacity": "200+ devices",
        "Cloud Platform": "AWS/Alibaba Cloud/Tencent Cloud",
        "Mobile Apps": "iOS and Android",
        "Voice Assistants": "Alexa, Google Assistant"
      },
      "coreAdvantages": [
        {
          "title": "Multi-Protocol Support",
          "description": "Supports PLC, RF, and WiFi enabling flexible device connectivity options.",
          "icon": "fa-network-wired"
        },
        {
          "title": "Cloud Connected",
          "description": "Built-in cloud connectivity for remote access and control from anywhere.",
          "icon": "fa-cloud"
        },
        {
          "title": "Voice Control",
          "description": "Integration with popular voice assistants for hands-free control.",
          "icon": "fa-microphone"
        },
        {
          "title": "Energy Management",
          "description": "Comprehensive energy monitoring and management capabilities.",
          "icon": "fa-chart-line"
        },
        {
          "title": "Quick Deployment",
          "description": "Reference designs and source code enable rapid product development.",
          "icon": "fa-rocket"
        }
      ],
      "bomList": [
        { "partNumber": "ES-HOME-A1", "description": "Gateway Reference Design", "quantity": 1, "link": "/eastsoft/products/system-solutions/es-home-a1.html" },
        { "partNumber": "ES8T433", "description": "RF Transceiver", "quantity": 1, "link": "/eastsoft/products/rf-transceivers/es8t433.html" },
        { "partNumber": "WiFi Module", "description": "WiFi Connectivity", "quantity": 1 },
        { "partNumber": "Power Supply", "description": "Gateway Power Supply", "quantity": 1 }
      ],
      "faeInsights": {
        "author": "Jennifer Liu",
        "title": "Senior FAE - IoT Solutions",
        "content": "This home automation solution provides an excellent foundation for smart home products. The multi-protocol approach is key - PLC for wired devices, RF for wireless sensors, and WiFi for cloud connectivity creates a comprehensive platform. I have helped customers launch smart home products in under 4 months using this solution. The included mobile app reference significantly reduces software development effort.",
        "keyTakeaways": ["Multi-protocol flexibility", "Complete software package", "Fast time to market"],
        "insightLogic": "The solution's strength lies in its flexibility - supporting multiple communication protocols allows it to work with diverse device types. Contact LiTong for integration guidance.",
        "decisionFramework": "1) Define product requirements 2) Select communication protocols 3) Customize gateway software 4) Develop device nodes 5) Integrate and test"
      },
      "customerCases": [
        {
          "customer": "Smart Home Device Manufacturer",
          "application": "Smart home gateway",
          "challenge": "Needed feature-rich gateway for smart home ecosystem",
          "solution": "Adopted Eastsoft home automation solution with customizations",
          "result": "Launched product in 4 months, now in mass production",
          "feedback": "Reference design quality significantly reduced development time"
        }
      ],
      "resources": [
        {
          "title": "Home Automation Design Guide",
          "type": "application-note",
          "link": "/eastsoft/support/home-automation-guide.html",
          "description": "Guide for home automation system design"
        }
      ],
      "faqs": [
        {
          "question": "What devices can be integrated?",
          "answer": "The solution supports various device types including smart switches, smart plugs, sensors (motion, door/window, temperature), lighting controllers, and security devices. Both PLC-connected wired devices and RF wireless devices can be integrated. The open architecture allows custom device types to be added.",
          "decisionGuide": "Wide range of device types supported with flexible integration.",
          "keywords": ["device integration", "supported devices", "compatibility"]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('✅ Created Eastsoft solutions.json');

// Generate support.json
const supportData = {
  "seoTitle": "Eastsoft Technical Support | Application Notes & Design Guides - LiTong",
  "seoDescription": "Access Eastsoft technical documentation, application notes, and design guides. LiTong distributor provides expert FAE support and selection guidance for PLC and MCU applications.",
  "seoKeywords": [
    "Eastsoft distributor",
    "Eastsoft selection guide",
    "Eastsoft technical support",
    "PLC chip selection",
    "MCU selection guide",
    "RF transceiver selection",
    "smart meter design guide",
    "LiTong FAE support"
  ],
  "faqs": [
    {
      "question": "What technical documentation does LiTong provide for Eastsoft products?",
      "answer": "LiTong provides comprehensive technical documentation for Eastsoft products including detailed datasheets, application notes, reference designs with schematics and PCB layouts, firmware source code, and programming guides. All documentation is available in English and Chinese. Contact our FAE team for access to technical documentation and customized application support.",
      "decisionGuide": "Contact LiTong FAEs for technical documentation and support.",
      "keywords": ["Eastsoft documentation", "technical support", "application notes"]
    },
    {
      "question": "How do I get started with Eastsoft PLC development?",
      "answer": "Getting started with Eastsoft PLC development is easy with LiTong support. We recommend starting with an evaluation kit for hands-on experience. Our FAE team can provide technical training, reference code, and design review services. Contact LiTong to request evaluation kits and schedule technical introduction sessions.",
      "decisionGuide": "Request evaluation kit and technical training from LiTong.",
      "keywords": ["getting started", "PLC development", "evaluation kit"]
    },
    {
      "question": "Does LiTong provide design review services?",
      "answer": "Yes, LiTong provides comprehensive design review services for Eastsoft-based designs. Our FAE team can review your schematics, PCB layouts, and firmware to identify potential issues and optimization opportunities. Design reviews are available for PLC communication systems, MCU applications, and RF designs.",
      "decisionGuide": "Submit your design files to LiTong FAEs for review.",
      "keywords": ["design review", "schematic review", "PCB review"]
    },
    {
      "question": "What development tools are available?",
      "answer": "Eastsoft provides various development tools including evaluation boards, software development kits (SDK), debugging tools, and configuration utilities. LiTong can provide these tools along with technical support for their use. Contact us for information on available development tools and how to obtain them.",
      "decisionGuide": "Contact LiTong for development tools and SDK access.",
      "keywords": ["development tools", "SDK", "evaluation board"]
    },
    {
      "question": "How do I select the right Eastsoft product for my application?",
      "answer": "Selecting the right Eastsoft product requires understanding your application requirements including communication needs, processing requirements, and environmental conditions. LiTong FAEs can provide personalized recommendations based on your specific requirements. Contact us with your application details for product selection assistance.",
      "decisionGuide": "Contact LiTong FAEs for product selection guidance.",
      "keywords": ["product selection", "application requirements", "FAE support"]
    },
    {
      "question": "Does LiTong provide firmware customization support?",
      "answer": "Yes, LiTong provides firmware customization support for Eastsoft products. Our FAE team can assist with protocol implementation, feature customization, and optimization for your specific application. We can also provide training for your development team on Eastsoft firmware architecture.",
      "decisionGuide": "Engage LiTong FAEs for firmware customization support.",
      "keywords": ["firmware customization", "software development", "technical support"]
    },
    {
      "question": "What is the typical response time for technical inquiries?",
      "answer": "LiTong aims to respond to technical inquiries within 24 hours. For complex design reviews or troubleshooting, we typically provide initial response within 24 hours with detailed analysis within 2-3 business days. For urgent issues, we offer expedited support.",
      "decisionGuide": "Expect 24-hour response for standard technical inquiries.",
      "keywords": ["response time", "technical support", "inquiry"]
    },
    {
      "question": "Can LiTong provide samples for prototyping?",
      "answer": "Yes, LiTong provides samples for qualified customers to support prototyping and evaluation. Contact our sales team to request samples. We typically ship samples within 3-5 business days. Evaluation kits are also available for comprehensive product evaluation.",
      "decisionGuide": "Contact LiTong sales to request samples and evaluation kits.",
      "keywords": ["samples", "evaluation kits", "prototyping"]
    }
  ],
  "articles": [
    {
      "id": "plc-chip-selection-guide",
      "title": "Eastsoft PLC Chip Selection Guide",
      "subtitle": "Comprehensive guide for selecting power line communication chips for smart grid applications",
      "description": "Detailed selection criteria for PLC chips including standards compliance, performance requirements, and application considerations",
      "category": "Selection Guide",
      "slug": "plc-chip-selection-guide",
      "summary": "This guide helps you select the right Eastsoft PLC chip for your smart grid application based on communication standards, data rate requirements, and system architecture.",
      "author": {
        "name": "Dr. Michael Chen",
        "title": "Principal FAE - Smart Grid Solutions",
        "bio": "Dr. Chen has over 15 years of experience in power line communication and smart grid systems.",
        "image": "/images/authors/michael-chen.png"
      },
      "publishDate": "2024-01-15",
      "readTime": "15 min",
      "tags": ["PLC", "smart grid", "selection guide", "power line communication"],
      "faeInsights": {
        "author": "Dr. Michael Chen",
        "title": "Principal FAE - Smart Grid Solutions",
        "content": "PLC chip selection is critical for smart meter reliability. I have seen many projects succeed or fail based on this decision. The key factors are standards compliance, noise immunity, and integration level. This guide reflects my experience from numerous successful deployments.",
        "keyTakeaways": ["Standards compliance is essential", "Consider noise immunity requirements", "Integration level affects system cost"],
        "insightLogic": "Based on extensive field experience, proper PLC chip selection considering standards and environmental factors ensures reliable communication.",
        "decisionFramework": "1) Identify required standards 2) Assess communication requirements 3) Evaluate integration needs 4) Consider environmental conditions"
      },
      "customerCases": [
        {
          "customer": "Smart Meter Manufacturer",
          "application": "AMI meter design",
          "challenge": "Needed reliable PLC for utility deployment",
          "solution": "Selected ES1642 based on this guide recommendations",
          "result": "Passed certification and deployed 100,000+ units",
          "feedback": "Guide recommendations were accurate and helpful"
        }
      ],
      "content": "## Understanding PLC Standards\n\nPower line communication standards vary by region and application. In China, the primary standards are Q/GDW for State Grid and DL/T for China Southern Power Grid. These standards define physical layer parameters, communication protocols, and application layer requirements.\n\n## Narrowband vs Broadband PLC\n\nNarrowband PLC (3-500kHz) is ideal for smart metering with data rates up to 10kbps and long communication range. Broadband PLC (2-30MHz) offers higher data rates up to 2Mbps but shorter range. Select narrowband for metering, broadband for high-speed applications.\n\n## Key Selection Criteria\n\n1. Standards compliance for target market\n2. Data rate requirements\n3. Communication range needs\n4. Integration requirements\n5. Cost considerations\n\nContact LiTong FAEs for personalized selection assistance.",
      "relatedArticles": [
        { "id": "mcu-selection-guide", "title": "MCU Selection Guide", "link": "/eastsoft/support/mcu-selection-guide.html" },
        { "id": "rf-transceiver-selection-guide", "title": "RF Transceiver Selection Guide", "link": "/eastsoft/support/rf-transceiver-selection-guide.html" },
        { "id": "smart-meter-design-guide", "title": "Smart Meter Design Guide", "link": "/eastsoft/support/smart-meter-design-guide.html" }
      ],
      "faqs": [
        {
          "question": "What is the difference between Q/GDW and DL/T standards?",
          "answer": "Q/GDW standards are used by State Grid Corporation of China, while DL/T standards are used by China Southern Power Grid. Both specify PLC communication for smart meters but with some technical differences. Eastsoft chips support both standards.",
          "decisionGuide": "Select standard based on target utility's requirements.",
          "keywords": ["Q/GDW", "DL/T", "PLC standards"]
        },
        {
          "question": "How do I evaluate PLC communication range?",
          "answer": "PLC range depends on line conditions, load characteristics, and noise levels. Conduct field testing in the target environment. Typical range is 500m-2km for narrowband PLC. Use concentrators for larger networks.",
          "decisionGuide": "Field testing is essential for range validation.",
          "keywords": ["PLC range", "communication distance", "field testing"]
        },
        {
          "question": "What additional resources are available?",
          "answer": "Additional resources include application notes, reference designs, firmware examples, and training materials. Contact LiTong FAEs for access to comprehensive technical resources.",
          "decisionGuide": "Contact LiTong for comprehensive technical resources.",
          "keywords": ["resources", "documentation", "technical support"]
        }
      ]
    },
    {
      "id": "mcu-selection-guide",
      "title": "Eastsoft MCU Selection Guide",
      "subtitle": "Comprehensive guide for selecting microcontrollers for embedded applications",
      "description": "Detailed selection criteria for 8-bit and 32-bit microcontrollers based on performance and application requirements",
      "category": "Selection Guide",
      "slug": "mcu-selection-guide",
      "summary": "This guide helps you choose between Eastsoft 8-bit and 32-bit microcontrollers based on your application's processing requirements and cost constraints.",
      "author": {
        "name": "Jennifer Liu",
        "title": "Senior FAE - MCU Applications",
        "bio": "Jennifer has extensive experience in microcontroller applications and embedded system design.",
        "image": "/images/authors/jennifer-liu.png"
      },
      "publishDate": "2024-02-01",
      "readTime": "12 min",
      "tags": ["MCU", "microcontroller", "selection guide", "embedded"],
      "faeInsights": {
        "author": "Jennifer Liu",
        "title": "Senior FAE - MCU Applications",
        "content": "MCU selection often comes down to balancing performance needs with cost constraints. Many applications can use 8-bit MCUs effectively, while others truly need 32-bit performance. This guide helps make that determination.",
        "keyTakeaways": ["8-bit for cost-sensitive simple control", "32-bit for complex processing", "Consider future expansion needs"],
        "insightLogic": "Proper MCU selection balances current requirements with future expansion needs while optimizing cost.",
        "decisionFramework": "1) Analyze processing requirements 2) Evaluate peripheral needs 3) Consider memory requirements 4) Assess cost constraints"
      },
      "customerCases": [
        {
          "customer": "Appliance Manufacturer",
          "application": "Washing machine controller",
          "challenge": "Needed cost-effective MCU for appliance control",
          "solution": "Selected ES7F3268 8-bit MCU",
          "result": "Achieved target cost with adequate performance",
          "feedback": "8-bit MCU was sufficient for the application"
        }
      ],
      "content": "## 8-bit vs 32-bit MCU Selection\n\nEastsoft offers both 8-bit (ES7 series) and 32-bit ARM Cortex-M (ES32 series) microcontrollers. The choice depends on application complexity and performance requirements.\n\n## When to Choose 8-bit\n\n- Simple control applications\n- Cost-sensitive designs\n- Low power requirements\n- Legacy system compatibility\n\n## When to Choose 32-bit\n\n- Complex processing algorithms\n- High-speed communication\n- Rich graphical interfaces\n- Future expansion needs\n\nContact LiTong FAEs for personalized MCU selection assistance.",
      "relatedArticles": [
        { "id": "plc-chip-selection-guide", "title": "PLC Chip Selection Guide", "link": "/eastsoft/support/plc-chip-selection-guide.html" },
        { "id": "rf-transceiver-selection-guide", "title": "RF Transceiver Selection Guide", "link": "/eastsoft/support/rf-transceiver-selection-guide.html" },
        { "id": "smart-meter-design-guide", "title": "Smart Meter Design Guide", "link": "/eastsoft/support/smart-meter-design-guide.html" }
      ],
      "faqs": [
        {
          "question": "What is the price difference between 8-bit and 32-bit MCUs?",
          "answer": "Eastsoft 8-bit MCUs typically range from $0.30 to $1.00 depending on features. 32-bit ARM MCUs range from $0.80 to $3.00. The price difference is justified by the significant performance increase for complex applications.",
          "decisionGuide": "Consider total system cost, not just MCU price.",
          "keywords": ["MCU price", "cost comparison", "8-bit vs 32-bit"]
        },
        {
          "question": "Can I migrate from 8-bit to 32-bit later?",
          "answer": "Migration is possible but requires software redevelopment. Eastsoft provides both 8-bit and 32-bit options with similar peripherals to ease migration. Plan for future requirements in initial selection.",
          "decisionGuide": "Consider future expansion in initial MCU selection.",
          "keywords": ["migration", "upgrade path", "future expansion"]
        },
        {
          "question": "What development tools are recommended?",
          "answer": "For 8-bit MCUs, use Keil C51 or SDCC. For 32-bit ARM MCUs, use Keil MDK, IAR, or GCC-based tools. Eastsoft provides libraries and examples for all supported toolchains.",
          "decisionGuide": "Standard development tools supported with provided libraries.",
          "keywords": ["development tools", "IDE", "compiler"]
        }
      ]
    },
    {
      "id": "rf-transceiver-selection-guide",
      "title": "Eastsoft RF Transceiver Selection Guide",
      "subtitle": "Comprehensive guide for selecting RF transceivers for wireless applications",
      "description": "Detailed selection criteria for sub-1GHz and 2.4GHz RF transceivers based on range, data rate, and application requirements",
      "category": "Selection Guide",
      "slug": "rf-transceiver-selection-guide",
      "summary": "This guide helps you select the right Eastsoft RF transceiver based on frequency band, communication range, and data rate requirements.",
      "author": {
        "name": "David Wang",
        "title": "Senior FAE - Wireless Systems",
        "bio": "David specializes in RF system design and wireless communication applications.",
        "image": "/images/authors/david-wang.png"
      },
      "publishDate": "2024-02-15",
      "readTime": "10 min",
      "tags": ["RF", "wireless", "transceiver", "selection guide"],
      "faeInsights": {
        "author": "David Wang",
        "title": "Senior FAE - Wireless Systems",
        "content": "RF transceiver selection is about matching the technology to the application environment. Sub-1GHz excels in range and penetration, while 2.4GHz offers higher data rates and global compatibility.",
        "keyTakeaways": ["Sub-1GHz for range and penetration", "2.4GHz for data rate", "Consider regulatory requirements"],
        "insightLogic": "Proper RF selection balances range, data rate, and regulatory requirements for the target application.",
        "decisionFramework": "1) Define range requirements 2) Determine data rate needs 3) Check regulatory compliance 4) Evaluate power constraints"
      },
      "customerCases": [
        {
          "customer": "Security System Manufacturer",
          "application": "Wireless security sensors",
          "challenge": "Needed long-range wireless for building penetration",
          "solution": "Selected ES8T433 433MHz transceiver",
          "result": "Achieved reliable communication throughout buildings",
          "feedback": "433MHz provided excellent range and penetration"
        }
      ],
      "content": "## Frequency Band Selection\n\nEastsoft offers RF transceivers in sub-1GHz (315/433/868/915MHz) and 2.4GHz bands. Each has distinct advantages for different applications.\n\n## Sub-1GHz Advantages\n\n- Longer communication range\n- Better wall penetration\n- Lower power consumption\n- Less crowded spectrum\n\n## 2.4GHz Advantages\n\n- Higher data rates\n- Worldwide ISM band availability\n- Smaller antennas\n- Higher bandwidth\n\nContact LiTong FAEs for RF transceiver selection assistance.",
      "relatedArticles": [
        { "id": "plc-chip-selection-guide", "title": "PLC Chip Selection Guide", "link": "/eastsoft/support/plc-chip-selection-guide.html" },
        { "id": "mcu-selection-guide", "title": "MCU Selection Guide", "link": "/eastsoft/support/mcu-selection-guide.html" },
        { "id": "smart-meter-design-guide", "title": "Smart Meter Design Guide", "link": "/eastsoft/support/smart-meter-design-guide.html" }
      ],
      "faqs": [
        {
          "question": "What is the typical range for 433MHz vs 2.4GHz?",
          "answer": "433MHz typically achieves 100-500m range while 2.4GHz achieves 10-50m under similar conditions. The lower frequency provides better propagation and penetration.",
          "decisionGuide": "Choose 433MHz for range, 2.4GHz for data rate.",
          "keywords": ["RF range", "433MHz", "2.4GHz", "wireless range"]
        },
        {
          "question": "Do I need a license for these frequency bands?",
          "answer": "315/433/868/915MHz and 2.4GHz are ISM bands that typically don't require licenses for low-power devices. However, regulatory compliance (FCC, CE, etc.) is still required. Check local regulations for specific requirements.",
          "decisionGuide": "ISM bands generally license-free but regulatory compliance required.",
          "keywords": ["license", "ISM band", "regulatory compliance"]
        },
        {
          "question": "What antenna design support is available?",
          "answer": "Eastsoft provides antenna design guidelines and reference designs. LiTong FAEs can review antenna designs and provide matching assistance. PCB antenna designs are available for compact implementations.",
          "decisionGuide": "Reference designs available, LiTong provides design review support.",
          "keywords": ["antenna design", "RF matching", "PCB antenna"]
        }
      ]
    },
    {
      "id": "smart-meter-design-guide",
      "title": "Smart Meter Design Best Practices",
      "subtitle": "Comprehensive design guide for smart electricity meters using Eastsoft technology",
      "description": "Technical design guidelines for implementing reliable smart meters with PLC communication",
      "category": "Design Guide",
      "slug": "smart-meter-design-guide",
      "summary": "This guide covers best practices for designing smart meters including metrology, PLC communication, and certification requirements.",
      "author": {
        "name": "Dr. Michael Chen",
        "title": "Principal FAE - Smart Grid Solutions",
        "bio": "Dr. Chen has led numerous smart meter design projects and certifications.",
        "image": "/images/authors/michael-chen.png"
      },
      "publishDate": "2024-03-01",
      "readTime": "20 min",
      "tags": ["smart meter", "design guide", "metrology", "PLC"],
      "faeInsights": {
        "author": "Dr. Michael Chen",
        "title": "Principal FAE - Smart Grid Solutions",
        "content": "Smart meter design requires attention to metrology accuracy, communication reliability, and regulatory compliance. This guide consolidates best practices from successful deployments.",
        "keyTakeaways": ["Metrology accuracy is critical", "PLC layout affects communication", "Early certification planning essential"],
        "insightLogic": "Successful smart meter design balances accuracy, reliability, and compliance through careful attention to all aspects of the design.",
        "decisionFramework": "1) Define accuracy requirements 2) Design metrology front-end 3) Implement PLC communication 4) Plan certification strategy"
      },
      "customerCases": [
        {
          "customer": "Meter Manufacturer",
          "application": "Smart meter production",
          "challenge": "Needed to pass utility certification",
          "solution": "Followed design guide recommendations",
          "result": "Passed certification on first attempt",
          "feedback": "Guide recommendations were comprehensive and accurate"
        }
      ],
      "content": "## Metrology Design\n\nAccurate energy measurement requires careful design of the analog front-end including current sensors, voltage dividers, and ADC interfaces. Component selection and layout are critical for achieving Class 0.5S accuracy.\n\n## PLC Communication Design\n\nPLC communication performance depends on proper coupling circuit design, power supply isolation, and PCB layout. Follow Eastsoft reference designs closely for reliable communication.\n\n## Certification Considerations\n\nPlan for utility certification early in the design process. Understand required tests and design margin into the product to ensure first-pass certification success.\n\nContact LiTong FAEs for detailed design review and certification support.",
      "relatedArticles": [
        { "id": "plc-chip-selection-guide", "title": "PLC Chip Selection Guide", "link": "/eastsoft/support/plc-chip-selection-guide.html" },
        { "id": "mcu-selection-guide", "title": "MCU Selection Guide", "link": "/eastsoft/support/mcu-selection-guide.html" },
        { "id": "rf-transceiver-selection-guide", "title": "RF Transceiver Selection Guide", "link": "/eastsoft/support/rf-transceiver-selection-guide.html" }
      ],
      "faqs": [
        {
          "question": "What accuracy class should I target?",
          "answer": "Class 0.5S is the most common requirement for residential meters. Class 1.0 may be acceptable for some applications. Commercial and industrial meters may require Class 0.2S or higher.",
          "decisionGuide": "Class 0.5S typical for residential, higher for commercial/industrial.",
          "keywords": ["accuracy class", "metrology", "IEC standards"]
        },
        {
          "question": "How do I ensure PLC communication reliability?",
          "answer": "Follow Eastsoft reference designs for coupling circuits and PCB layout. Use proper isolation and filtering. Conduct thorough testing under various line conditions.",
          "decisionGuide": "Follow reference designs and conduct thorough testing.",
          "keywords": ["PLC reliability", "communication quality", "design guidelines"]
        },
        {
          "question": "What certification tests are required?",
          "answer": "Utility certification typically includes accuracy testing, communication testing, environmental testing, and EMC testing. Specific tests vary by utility and region.",
          "decisionGuide": "Contact target utility for specific certification requirements.",
          "keywords": ["certification", "testing", "utility standards"]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✅ Created Eastsoft support.json');

// Generate news.json
const newsData = {
  "seoTitle": "Eastsoft News & Updates | Product Releases & Company News - LiTong",
  "seoDescription": "Latest news and updates from Eastsoft including new product releases, technology announcements, and company developments. Authorized distributor updates.",
  "seoKeywords": [
    "Eastsoft news",
    "Eastsoft product releases",
    "PLC technology news",
    "smart grid updates",
    "LiTong distributor news"
  ],
  "faqs": [
    {
      "question": "What are the latest developments from Eastsoft?",
      "answer": "Eastsoft continues to expand its product portfolio with new PLC chips, microcontrollers, and system solutions. Recent developments include enhanced PLC chips with improved noise immunity, new ARM Cortex-M4 MCUs, and updated smart meter reference designs. As an authorized distributor, LiTong provides the latest Eastsoft products with full technical support.",
      "decisionGuide": "Contact LiTong for information on the latest Eastsoft products and availability.",
      "keywords": ["Eastsoft latest news", "Eastsoft product updates", "PLC technology"]
    }
  ],
  "news": [
    {
      "id": "eastsoft-plc-enhancement",
      "title": "Eastsoft Releases Enhanced PLC Chips with Improved Noise Immunity",
      "subtitle": "New ES1642-E series features enhanced noise rejection for challenging power line environments",
      "excerpt": "Eastsoft announces the release of enhanced PLC chips with improved noise immunity for reliable communication in challenging electrical environments.",
      "content": "Eastsoft has released the ES1642-E series of enhanced power line communication chips featuring significantly improved noise immunity for challenging electrical environments. The new chips incorporate advanced digital signal processing algorithms that reduce bit error rates by up to 50% in high-noise conditions.\n\nThe enhanced noise immunity is achieved through improved adaptive modulation, advanced filtering, and enhanced synchronization mechanisms. These improvements enable reliable communication in industrial environments and areas with high electrical noise.\n\n'The ES1642-E series addresses the growing demand for reliable PLC communication in challenging environments,' said an Eastsoft product manager. 'The enhanced noise immunity opens new applications in industrial automation and commercial buildings.'\n\nThe new chips are pin-compatible with the existing ES1642 series, allowing easy upgrades for existing designs. Samples and evaluation kits are available immediately through authorized distributors including LiTong Electronics.\n\nLiTong FAEs have completed training on the new ES1642-E series and are ready to support customer evaluations and designs.",
      "category": "Product Launch",
      "author": "LiTong Marketing",
      "publishDate": "2024-03-15",
      "tags": ["PLC", "noise immunity", "ES1642-E", "product launch"],
      "image": "/images/news/eastsoft-plc-enhancement.jpg",
      "featured": true,
      "faeInsights": {
        "author": "Dr. Michael Chen",
        "title": "Principal FAE - Smart Grid Solutions",
        "content": "The ES1642-E series is a significant improvement for applications in challenging environments. I have tested samples and the noise immunity improvement is substantial. This opens opportunities in industrial settings where standard PLC chips struggle.",
        "highlight": "Enhanced noise immunity enables new industrial applications"
      },
      "customerCases": [
        {
          "customer": "Industrial Equipment Manufacturer",
          "application": "Factory automation communication",
          "challenge": "PLC communication failures in noisy factory environment",
          "solution": "Evaluating ES1642-E for improved noise immunity",
          "result": "Initial testing shows 60% reduction in communication errors"
        }
      ]
    },
    {
      "id": "eastsoft-mcu-expansion",
      "title": "Eastsoft Expands MCU Portfolio with ARM Cortex-M4 Series",
      "subtitle": "New ES32F4 series brings high-performance processing to Eastsoft microcontroller lineup",
      "excerpt": "Eastsoft announces the expansion of its MCU portfolio with high-performance ARM Cortex-M4 microcontrollers for demanding embedded applications.",
      "content": "Eastsoft has expanded its microcontroller portfolio with the introduction of the ES32F4 series based on ARM Cortex-M4 cores. The new series delivers up to 180MHz operation with DSP instructions and floating-point unit for high-performance embedded applications.\n\nThe ES32F4 series includes devices with up to 1MB Flash and 192KB SRAM, supporting complex applications such as motor control, digital power, and advanced HMI. The series maintains pin compatibility with the existing ES32F1 series for easy migration.\n\n'With the ES32F4 series, we are addressing the growing demand for higher performance in cost-sensitive applications,' said an Eastsoft MCU product manager. 'Customers can now access Cortex-M4 performance at competitive pricing.'\n\nThe new MCUs include advanced peripherals such as high-resolution timers, fast ADCs, and rich communication interfaces. Development support includes libraries and examples for motor control and digital power applications.\n\nLiTong Electronics offers full technical support for the ES32F4 series including application guidance and design review services.",
      "category": "Product Launch",
      "author": "LiTong Marketing",
      "publishDate": "2024-02-28",
      "tags": ["MCU", "Cortex-M4", "ES32F4", "product launch"],
      "image": "/images/news/eastsoft-mcu-expansion.jpg",
      "featured": true,
      "faeInsights": {
        "author": "Jennifer Liu",
        "title": "Senior FAE - MCU Applications",
        "content": "The ES32F4 series fills an important gap in Eastsoft's portfolio. The Cortex-M4 with FPU enables applications that were previously not possible with Eastsoft MCUs. I am excited to help customers leverage this new performance level.",
        "highlight": "Cortex-M4 performance enables new high-performance applications"
      },
      "customerCases": [
        {
          "customer": "Motor Control Equipment Manufacturer",
          "application": "Servo motor controller",
          "challenge": "Needed high-performance MCU for motor control algorithm",
          "solution": "Adopted ES32F407 for servo controller design",
          "result": "Achieved required control performance at competitive cost"
        }
      ]
    },
    {
      "id": "eastsoft-smart-meter-milestone",
      "title": "Eastsoft PLC Technology Powers 50 Million Smart Meters",
      "subtitle": "Milestone achievement demonstrates proven reliability and market leadership",
      "excerpt": "Eastsoft announces that its PLC technology has been deployed in over 50 million smart meters, demonstrating proven reliability and market leadership.",
      "content": "Eastsoft has achieved a significant milestone with its power line communication technology now deployed in over 50 million smart meters across China. This achievement demonstrates the proven reliability and market leadership of Eastsoft's PLC solutions in the smart grid market.\n\nThe 50 million meter deployment includes single-phase and three-phase meters from multiple manufacturers, all using Eastsoft PLC chips for reliable communication over power lines. The meters operate in diverse environments from urban apartments to rural installations, proving the robustness of Eastsoft's technology.\n\n'This milestone reflects the trust that meter manufacturers and utilities place in our technology,' said an Eastsoft executive. 'We remain committed to innovation and quality as we continue to support the smart grid transformation.'\n\nThe large installed base provides valuable field data that Eastsoft uses to continuously improve its products. The company reports field-proven reliability with communication success rates exceeding 99% in typical deployments.\n\nLiTong Electronics, as an authorized distributor, has supported many of these deployments with technical expertise and supply chain services.",
      "category": "Company News",
      "author": "LiTong Marketing",
      "publishDate": "2024-02-10",
      "tags": ["milestone", "smart meters", "PLC deployment", "market leadership"],
      "image": "/images/news/eastsoft-milestone.jpg",
      "featured": false,
      "faeInsights": {
        "author": "Dr. Michael Chen",
        "title": "Principal FAE - Smart Grid Solutions",
        "content": "The 50 million meter milestone is a testament to Eastsoft's technology reliability. I have personally supported many of these deployments and can attest to the field-proven performance.",
        "highlight": "50 million meters deployed with proven reliability"
      },
      "customerCases": [
        {
          "customer": "Utility Company",
          "application": "AMI deployment",
          "challenge": "Large-scale smart meter deployment",
          "solution": "Deployed meters with Eastsoft PLC technology",
          "result": "Successful deployment with 99.5% communication success rate"
        }
      ]
    },
    {
      "id": "eastsoft-certification-update",
      "title": "Eastsoft Achieves New Utility Certifications for Smart Meter Solutions",
      "subtitle": "Additional certifications expand market access for Eastsoft-based smart meters",
      "excerpt": "Eastsoft announces new utility certifications for its smart meter solutions, expanding market access for manufacturers.",
      "content": "Eastsoft has achieved additional utility certifications for its smart meter reference designs, expanding the market access for meter manufacturers using Eastsoft technology. The new certifications cover updated versions of Q/GDW and DL/T standards.\n\nThe certifications include comprehensive testing of metrology accuracy, communication performance, and environmental reliability. Test reports and compliance documentation are available to Eastsoft customers to support their own certification efforts.\n\n'Utility certification is critical for smart meter deployments, and we invest significantly in ensuring our solutions meet the latest requirements,' said an Eastsoft quality manager. 'These new certifications help our customers bring certified products to market faster.'\n\nThe certified reference designs include both single-phase and three-phase meter solutions with the latest ES1642 PLC chips. Manufacturers can use these designs with confidence that they meet utility requirements.\n\nLiTong Electronics provides certification support services including documentation, test guidance, and liaison with certification bodies.",
      "category": "Certification",
      "author": "LiTong Marketing",
      "publishDate": "2024-01-20",
      "tags": ["certification", "utility standards", "Q/GDW", "DL/T"],
      "image": "/images/news/eastsoft-certification.jpg",
      "featured": true,
      "faeInsights": {
        "author": "Dr. Michael Chen",
        "title": "Principal FAE - Smart Grid Solutions",
        "content": "The new certifications are valuable for our customers. The certified reference designs significantly reduce the certification effort required for meter manufacturers.",
        "highlight": "New certifications streamline market access for manufacturers"
      },
      "customerCases": [
        {
          "customer": "Meter Manufacturer",
          "application": "Smart meter certification",
          "challenge": "Needed to certify new meter design",
          "solution": "Used Eastsoft certified reference design",
          "result": "Passed certification testing on first attempt"
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'news.json'), JSON.stringify(newsData, null, 2));
console.log('✅ Created Eastsoft news.json');

console.log('\n🎉 All Eastsoft data files created successfully!');
console.log('Files created:');
console.log('- solutions.json');
console.log('- support.json');
console.log('- news.json');
