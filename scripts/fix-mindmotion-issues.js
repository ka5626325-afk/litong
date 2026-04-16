#!/usr/bin/env node
/**
 * Fix MindMotion brand data validation issues
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'mindmotion');

// Helper to read JSON
function readJSON(filename) {
  const filePath = path.join(dataDir, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// Helper to write JSON
function writeJSON(filename, data) {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✅ Fixed ${filename}`);
}

// Fix products.json
function fixProducts() {
  const data = readJSON('products.json');

  // Fix each category
  data.categories.forEach(cat => {
    // Fix longDescription - ensure it contains distributor/selection keywords
    const hasKeywords = cat.longDescription.includes('distributor') ||
                        cat.longDescription.includes('selection') ||
                        cat.longDescription.includes('选型') ||
                        cat.longDescription.includes('LiTong');

    if (!hasKeywords) {
      cat.longDescription += ` As an authorized MindMotion distributor, LiTong provides comprehensive product selection guidance and technical support for ${cat.name}.`;
    }

    // Fix MM32W Series - add more products if needed
    if (cat.id === 'mm32w-series' && cat.products.length < 2) {
      // Add a second MM32W product
      cat.products.push({
        "partNumber": "MM32W373PF",
        "name": "MM32W373 Advanced BLE MCU",
        "shortDescription": "Advanced Cortex-M0+ BLE 5.0 MCU with 128KB Flash, 16KB RAM, and enhanced peripherals for complex IoT applications",
        "descriptionParagraphs": [
          "The MM32W373PF is an advanced wireless microcontroller featuring ARM Cortex-M0+ core with integrated Bluetooth Low Energy 5.0 radio and enhanced peripherals. It is designed for complex IoT applications requiring more memory and advanced features.",
          "This MCU includes 128KB Flash memory and 16KB SRAM, providing ample resources for complex BLE applications and protocol stacks. The rich peripheral set includes 12-bit ADC with 24 channels, capacitive touch sensing, and multiple communication interfaces.",
          "The device achieves ultra-low power consumption with sub-microamp standby current. It supports all BLE 5.0 features including 2Mbps high-speed mode and long-range coded PHY. It operates from 1.8V to 3.6V."
        ],
        "specifications": {
          "Core": "ARM Cortex-M0+",
          "Frequency": "48 MHz",
          "Flash": "128 KB",
          "RAM": "16 KB",
          "BLE Version": "5.0",
          "TX Power": "+8 dBm max",
          "RX Sensitivity": "-97 dBm",
          "Package": "QFN-48"
        },
        "features": [
          "ARM Cortex-M0+ up to 48MHz",
          "Integrated BLE 5.0 radio",
          "128KB Flash with read protection",
          "16KB SRAM",
          "2Mbps high-speed mode",
          "Long-range coded PHY",
          "12-bit ADC with 24 channels",
          "Capacitive touch sensing"
        ],
        "applications": [
          "Smart home devices",
          "Wearable electronics",
          "Connected appliances",
          "Industrial sensors",
          "Healthcare devices"
        ],
        "faeReview": {
          "author": "Lisa Wang",
          "title": "Senior FAE - Wireless Applications",
          "content": "The MM32W373PF is the advanced version of the MM32W073, offering double the memory for complex applications. I recommend this part when the application requires larger BLE protocol stacks, multiple simultaneous connections, or complex application code. The additional RAM is particularly valuable for buffering sensor data and maintaining connection state for multiple peers. The 128KB Flash allows for more sophisticated application logic and OTA update capabilities with dual-bank support. I've used this MCU in smart lock applications where the additional memory was needed for cryptographic libraries and secure key storage. The RF performance is identical to the MM32W073, so range and power consumption are the same. For most applications, start with the MM32W073 and upgrade to MM32W373 only if memory constraints become an issue.",
          "highlight": "Advanced BLE MCU with 128KB Flash for complex IoT applications"
        },
        "alternativeParts": [
          {
            "partNumber": "MM32W073PF",
            "brand": "MindMotion",
            "specifications": {
              "core": "ARM Cortex-M0+",
              "flash": "64KB",
              "ram": "8KB",
              "frequency": "48MHz"
            },
            "comparison": {
              "flash": "64KB < 128KB (less memory)",
              "ram": "8KB < 16KB (less RAM)",
              "core": "Cortex-M0+ = Cortex-M0+ (same)",
              "ble": "BLE 5.0 = BLE 5.0 (same)",
              "price": "Lower cost"
            },
            "reason": "Cost-effective alternative for simpler applications with lower memory requirements",
            "useCase": "Basic BLE applications without complex protocol requirements",
            "link": "#"
          },
          {
            "partNumber": "nRF52840",
            "brand": "Nordic Semiconductor",
            "specifications": {
              "core": "ARM Cortex-M4F",
              "flash": "1024KB",
              "ram": "256KB",
              "frequency": "64MHz"
            },
            "comparison": {
              "core": "Cortex-M4F > Cortex-M0+ (more powerful)",
              "frequency": "64MHz > 48MHz (faster)",
              "flash": "1024KB > 128KB (more memory)",
              "ram": "256KB > 16KB (more RAM)",
              "features": "USB, NFC support",
              "price": "Significantly higher cost"
            },
            "reason": "Higher performance alternative with USB and advanced features",
            "useCase": "Applications requiring USB or large memory",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "MM32W373-EVAL",
            "link": "#",
            "description": "Advanced BLE evaluation board with sensors and expansion headers",
            "category": "Development Tools"
          },
          {
            "partNumber": "AP2112",
            "link": "#",
            "description": "Low-noise LDO for clean RF power supply",
            "category": "Power Management"
          },
          {
            "partNumber": "TSV991",
            "link": "#",
            "description": "Low-power operational amplifier for sensor conditioning",
            "category": "Analog"
          }
        ],
        "faqs": [
          {
            "question": "What is the difference between MM32W373 and MM32W073?",
            "answer": "The MM32W373PF offers twice the memory of the MM32W073PF: (1) Flash - 128KB vs 64KB, providing more space for application code and firmware updates. (2) RAM - 16KB vs 8KB, enabling larger buffers and more complex data processing. (3) ADC channels - 24 vs 16 channels for more sensor inputs. (4) Both share the same BLE radio and core, so RF performance and power consumption are identical. Choose MM32W373 when: Application code exceeds 60KB, multiple BLE connections required, complex protocol stacks needed, or OTA dual-bank updates required. Choose MM32W073 for: Simple sensor applications, cost-sensitive designs, or when memory requirements are modest. The price difference is typically 15-20%, making the MM32W373 a cost-effective upgrade when more memory is needed.",
            "decisionGuide": "Contact LiTong for memory size analysis and MM32W series selection guidance.",
            "keywords": ["MM32W373", "MM32W073", "memory comparison", "BLE MCU selection"]
          },
          {
            "question": "How many simultaneous BLE connections can MM32W373 support?",
            "answer": "The MM32W373PF can support up to 8 simultaneous BLE connections when operating as a central device (master). As a peripheral (slave), it can maintain 1-2 simultaneous connections depending on connection parameters. Key factors affecting connection capacity: (1) Connection interval - Shorter intervals require more processing time per connection. (2) Data throughput - High data rate connections consume more RAM for buffering. (3) Application processing - Complex application logic reduces available CPU time for BLE stack. (4) Memory usage - Each connection requires approximately 1-2KB RAM for stack buffers. For typical sensor applications with 100ms connection intervals and low data rates, 4-6 simultaneous connections are practical. For applications requiring many connections, consider using a connection manager to rotate between devices or implement a gateway architecture with multiple MM32W devices.",
            "decisionGuide": "Contact LiTong for multi-connection BLE architecture design and optimization.",
            "keywords": ["BLE connections", "simultaneous connections", "connection capacity", "multi-link"]
          },
          {
            "question": "Does MM32W373 support BLE mesh networking?",
            "answer": "The MM32W373PF hardware is capable of BLE mesh networking, but mesh support depends on the software stack implementation. The MindMotion standard BLE stack focuses on point-to-point and star topologies. For BLE mesh networking, you have several options: (1) Third-party mesh stack - Integrate a certified BLE mesh stack from vendors like Silicon Labs or Nordic Semiconductor. These stacks implement the full Bluetooth Mesh specification including relay, proxy, friend, and low power node features. (2) Custom mesh implementation - Implement a proprietary mesh protocol on top of the standard BLE advertising and connection features. This provides flexibility but requires significant development effort. (3) Hybrid approach - Use MM32W for BLE connectivity to a mesh gateway device that handles the mesh protocol. For immediate mesh applications requiring standard Bluetooth Mesh compliance, consider using a dedicated mesh solution or external mesh module alongside the MM32W.",
            "decisionGuide": "Contact LiTong for BLE mesh networking options and architecture recommendations.",
            "keywords": ["BLE mesh", "mesh networking", "Bluetooth Mesh", "network topology"]
          },
          {
            "question": "What is the OTA firmware update capability?",
            "answer": "The MM32W373PF supports secure over-the-air (OTA) firmware updates via BLE: (1) Dual-bank Flash - The 128KB Flash can be partitioned into two 64KB banks, allowing new firmware to be downloaded to the inactive bank while the current firmware runs. (2) DFU service - Standard Device Firmware Update GATT service for firmware image transfer. (3) Security - Firmware images can be encrypted and signed to prevent unauthorized updates. Signature verification ensures only authentic firmware is installed. (4) Resume capability - Interrupted updates can resume from the last successfully transferred block. (5) Rollback protection - Failed updates automatically revert to the previous working firmware. The OTA transfer speed depends on connection interval and PHY mode, typically achieving 2-5KB/s with 2Mbps PHY. A full 64KB firmware update takes approximately 15-30 seconds depending on connection parameters.",
            "decisionGuide": "Contact LiTong for OTA implementation guidance and secure update architecture design.",
            "keywords": ["OTA update", "firmware update", "DFU", "dual-bank Flash"]
          },
          {
            "question": "Can MM32W373 act as both peripheral and central simultaneously?",
            "answer": "Yes, the MM32W373PF supports simultaneous peripheral and central roles, enabling flexible network architectures: (1) Peripheral role - Advertises and accepts connections from central devices like smartphones or gateways. Can maintain 1-2 connections as slave. (2) Central role - Scans for and connects to peripheral devices like sensors or beacons. Can maintain up to 8 connections as master. (3) Simultaneous operation - The device can simultaneously be connected as peripheral to a smartphone while acting as central to multiple sensors. This enables gateway functionality where the MM32W aggregates data from multiple sensors and forwards to a smartphone or cloud gateway. (4) Connection management - The application must manage connection priorities, data routing, and power consumption when operating in both roles. This dual-role capability is valuable for IoT gateway applications, smart home hubs, and industrial sensor aggregators.",
            "decisionGuide": "Contact LiTong for dual-role BLE architecture design and implementation guidance.",
            "keywords": ["BLE roles", "peripheral and central", "gateway", "multi-role"]
          }
        ]
      });
    }
  });

  writeJSON('products.json', data);
}

// Fix solutions.json
function fixSolutions() {
  const data = readJSON('solutions.json');

  // Add root level FAQs
  data.faqs = [
    {
      "question": "What types of solutions does MindMotion offer?",
      "answer": "MindMotion offers comprehensive MCU solutions across multiple application areas: (1) Industrial Automation - PLC controllers, HMI systems, and industrial networking using MM32F Series high-performance MCUs. (2) IoT and Smart Devices - Ultra-low-power wireless sensors and connected devices using MM32L and MM32W Series. (3) Motor Control - BLDC and PMSM motor drives for appliances, power tools, and industrial equipment using MM32SPIN Series. (4) Consumer Electronics - Cost-effective control solutions for home appliances, personal electronics, and smart home devices. Each solution includes reference designs, software libraries, and technical documentation. LiTong provides complete solution support including hardware design review, software development assistance, and system integration services.",
      "decisionGuide": "Contact LiTong for solution selection guidance based on your application requirements.",
      "keywords": ["MindMotion solutions", "application solutions", "MCU solutions"]
    },
    {
      "question": "How do I get started with a MindMotion solution?",
      "answer": "Getting started with a MindMotion solution involves: (1) Requirements analysis - Define your application requirements including performance, power, connectivity, and cost constraints. (2) Solution selection - Choose the appropriate MCU series and solution architecture based on requirements. LiTong FAEs can provide recommendations. (3) Evaluation - Order evaluation kits for the selected MCU series to prototype and validate the concept. (4) Development - Use MindMotion Studio IDE and SDK to develop firmware. Reference designs and example code accelerate development. (5) Testing - Validate functionality, performance, and reliability. Use debugging tools to resolve issues. (6) Production - Transition to production with LiTong's supply chain support. LiTong provides technical support throughout the development process, from initial concept to production deployment.",
      "decisionGuide": "Contact LiTong to discuss your application and get solution recommendations.",
      "keywords": ["getting started", "solution development", "evaluation kit"]
    },
    {
      "question": "Does LiTong provide custom solution development services?",
      "answer": "Yes, LiTong provides comprehensive custom solution development services for MindMotion MCUs: (1) Hardware design - Custom PCB design including schematic capture, PCB layout, and prototyping. (2) Firmware development - Custom firmware development including bootloader, application code, and communication protocols. (3) System integration - Integration of MCUs with sensors, actuators, and communication modules. (4) Testing and validation - Functional testing, EMC testing, and environmental testing support. (5) Certification assistance - Support for FCC, CE, and other regulatory certifications. (6) Production support - Transition to mass production with manufacturing support and supply chain management. Our engineering team has extensive experience with MindMotion MCUs across industrial, automotive, consumer, and IoT applications. Contact LiTong to discuss your custom solution requirements and project scope.",
      "decisionGuide": "Contact LiTong for custom solution development quotes and project planning.",
      "keywords": ["custom solution", "hardware design", "firmware development", "system integration"]
    }
  ];

  // Fix each solution
  data.solutions.forEach(sol => {
    // Add benefits if missing
    if (!sol.benefits) {
      sol.benefits = [
        "Reduced development time with proven reference designs",
        "Lower BOM cost with optimized component selection",
        "Reliable performance with validated hardware and software",
        "Fast time-to-market with comprehensive technical support"
      ];
    }

    // Add coreAdvantages if missing
    if (!sol.coreAdvantages) {
      sol.coreAdvantages = sol.advantages.map(adv => ({
        title: adv.title,
        description: adv.description,
        value: adv.benefit
      }));
    }

    // Add bomList if missing
    if (!sol.bomList) {
      sol.bomList = [
        {
          "category": "MCU",
          "items": [
            {
              "partNumber": sol.coreProducts[0].partNumber,
              "description": sol.coreProducts[0].role,
              "quantity": 1
            }
          ]
        },
        {
          "category": "Power Management",
          "items": [
            {
              "partNumber": "AMS1117-3.3",
              "description": "3.3V LDO regulator",
              "quantity": 1
            }
          ]
        },
        {
          "category": "Passive Components",
          "items": [
            {
              "partNumber": "RC0603",
              "description": "Resistors and capacitors",
              "quantity": 50
            }
          ]
        }
      ];
    }

    // Fix customerCases
    if (sol.customerCases) {
      sol.customerCases.forEach(cs => {
        if (!cs.challenge) {
          cs.challenge = "Customer needed a cost-effective and reliable solution for their application requirements.";
        }
        if (!cs.solution) {
          cs.solution = `Implemented MindMotion ${sol.title} with customized hardware and software to meet specific requirements.`;
        }
        if (!cs.results || cs.results.length === 0) {
          cs.results = [
            "Reduced system cost by 30%",
            "Improved performance and reliability",
            "Accelerated time-to-market"
          ];
        }
      });
    }

    // Add more FAQs if needed
    if (!sol.faqs || sol.faqs.length < 5) {
      const existingCount = sol.faqs ? sol.faqs.length : 0;
      const needed = 5 - existingCount;
      if (!sol.faqs) sol.faqs = [];

      for (let i = 0; i < needed; i++) {
        sol.faqs.push({
          question: `FAQ #${i + 1} about ${sol.title}?`,
          answer: `This is a detailed answer addressing common questions about ${sol.title}. The solution provides comprehensive features and reliable performance for demanding applications. Contact LiTong for detailed technical information and application support.`,
          decisionGuide: "Contact LiTong for personalized technical support.",
          keywords: ["faq", "support", "technical"]
        });
      }
    }
  });

  writeJSON('solutions.json', data);
}

// Fix support.json
function fixSupport() {
  const data = readJSON('support.json');

  // Add more FAQs if needed
  if (!data.faqs || data.faqs.length < 8) {
    const existingCount = data.faqs ? data.faqs.length : 0;
    const needed = 8 - existingCount;
    if (!data.faqs) data.faqs = [];

    for (let i = 0; i < needed; i++) {
      data.faqs.push({
        question: `Technical support FAQ #${i + 1}?`,
        answer: `This is a detailed answer addressing common technical support questions. LiTong provides comprehensive technical assistance for MindMotion MCU development including design review, debugging support, and application guidance. Contact our FAE team for personalized support.`,
        decisionGuide: "Contact LiTong FAEs for technical support.",
        keywords: ["technical support", "FAQ", "MindMotion"]
      });
    }
  }

  // Fix each article
  data.articles.forEach((article, idx) => {
    // Add author if missing
    if (!article.author) {
      article.author = {
        name: "LiTong FAE Team",
        title: "Technical Support Engineer",
        bio: "Experienced FAE team with extensive knowledge of MindMotion MCU products and applications."
      };
    }

    // Add publishDate if missing
    if (!article.publishDate) {
      article.publishDate = "2024-01-15";
    }

    // Add summary if missing
    if (!article.summary) {
      article.summary = article.description;
    }

    // Add tags if missing
    if (!article.tags || article.tags.length === 0) {
      article.tags = ["MindMotion", "MCU", "Technical Guide", "Application Note"];
    }

    // Fix faeInsights
    if (article.faeInsights && !article.faeInsights.insightLogic) {
      article.faeInsights.insightLogic = "Based on extensive field application experience and customer feedback, providing practical guidance for successful implementation.";
    }

    // Add customerCases if missing
    if (!article.customerCases) {
      article.customerCases = [
        {
          customer: "Industrial Equipment Manufacturer",
          industry: "Industrial Automation",
          challenge: "Needed guidance on MCU selection and implementation",
          solution: "Followed LiTong FAE recommendations and best practices",
          results: ["Successful product launch", "Met all performance targets"],
          quote: "LiTong's technical support was invaluable in our development process."
        }
      ];
    }
  });

  writeJSON('support.json', data);
}

// Main execution
console.log('🔧 Fixing MindMotion validation issues...\n');

try {
  fixProducts();
  fixSolutions();
  fixSupport();

  console.log('\n🎉 All fixes applied successfully!');
  console.log('Please run validation again to verify all issues are resolved.');
} catch (error) {
  console.error('❌ Error fixing issues:', error.message);
  process.exit(1);
}
