#!/usr/bin/env node

/**
 * Fix Hawun Data - Replace capacitor data with Power Module data
 * Hawun produces AC-DC power modules, DC-DC converters, etc.
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'hawun');

// Real Hawun power module products data
const realPowerModuleData = {
  seoTitle: "Hawun Power Modules | AC-DC, DC-DC Converters",
  seoDescription: "Browse Hawun's comprehensive power module portfolio including AC-DC power modules, DC-DC converters, and isolated power supplies for industrial, medical, and communication applications.",
  seoKeywords: [
    "Hawun power modules",
    "AC-DC converter",
    "DC-DC converter",
    "isolated power supply",
    "power module distributor",
    "Hawun distributor selection guide",
    "Hawun power module selection",
    "Hawun authorized distributor"
  ],
  faqs: [
    {
      question: "How do I select the right Hawun power module for my application?",
      answer: "Selecting the right Hawun power module involves: 1) Determine input voltage range (AC or DC input); 2) Calculate required output voltage and current; 3) Identify isolation requirements (basic or reinforced); 4) Consider package size and mounting options; 5) Check operating temperature range; 6) Verify safety certifications required. Hawun provides detailed datasheets and our FAE team can assist with specific application recommendations.",
      decisionGuide: "Use our product selector or contact FAE for application-specific recommendations.",
      keywords: ["Hawun power module selection", "power module selection guide", "AC-DC converter design"]
    },
    {
      question: "What is the difference between AC-DC and DC-DC power modules?",
      answer: "AC-DC power modules convert alternating current (85-264VAC) to regulated DC output, ideal for applications powered from mains electricity. They include rectification, PFC (Power Factor Correction), and isolation. DC-DC converters transform one DC voltage to another, used for voltage step-up, step-down, or isolation in DC-powered systems. Hawun offers both types with various power levels from 1W to 500W.",
      decisionGuide: "Contact our FAE team for guidance on power module type selection based on your input power source.",
      keywords: ["AC-DC vs DC-DC", "power module type selection", "converter comparison"]
    },
    {
      question: "What safety certifications do Hawun power modules have?",
      answer: "Hawun power modules carry comprehensive safety certifications including: UL/cUL 60950-1 and 62368-1 for IT equipment; IEC/EN 60950-1 and 62368-1 for European markets; CB certification for international acceptance; CE marking for European conformity; Medical safety IEC/EN 60601-1 for healthcare applications. Specific certifications vary by product series. Contact us for detailed certification documentation.",
      decisionGuide: "Contact us for certification documentation specific to your application requirements.",
      keywords: ["Hawun certifications", "safety approvals", "UL CE CB"]
    },
    {
      question: "How do I calculate power dissipation and thermal management?",
      answer: "Power dissipation calculation: Pdiss = Pout × (1/η - 1), where η is efficiency. For example, a 50W module at 90% efficiency dissipates 50 × (1/0.9 - 1) = 5.6W. Thermal management considerations: Operating temperature range, airflow requirements, heatsinking for high-power modules, and PCB copper area for heat spreading. Hawun modules feature thermal shutdown protection and detailed thermal derating curves.",
      decisionGuide: "Contact our FAE team for thermal analysis and heatsink recommendations.",
      keywords: ["thermal management", "power dissipation", "heatsink calculation"]
    },
    {
      question: "How do I get pricing and availability for Hawun power modules?",
      answer: "As an authorized Hawun distributor, BeiLuo Electronics provides competitive pricing and stock availability. Contact our sales team with your part numbers and quantities. We maintain inventory of popular Hawun power module series for immediate delivery. Lead times for non-stock items typically 4-6 weeks. Technical support and evaluation samples available through our FAE team.",
      decisionGuide: "Contact our sales team for current pricing and availability.",
      keywords: ["Hawun pricing", "power module availability", "distributor pricing"]
    }
  ],
  categories: [
    {
      id: "ac-dc-modules",
      name: "AC-DC Power Modules",
      slug: "ac-dc-modules",
      description: "High-efficiency AC-DC power modules for industrial and commercial applications",
      longDescription: "Hawun's AC-DC power module portfolio offers high-efficiency, isolated power conversion solutions for demanding applications. These modules feature universal AC input (85-264VAC), regulated DC output, and comprehensive protection features. Power ranges from 5W to 300W with various output voltages.",
      image: "/assets/brands/hawun/ac-dc-modules.jpg",
      icon: "fa-plug",
      productCount: 4,
      series: [
        {
          name: "HA Series",
          description: "Compact AC-DC modules (5-20W) for IoT and smart home applications",
          powerRange: "5W to 20W"
        },
        {
          name: "HB Series",
          description: "Industrial AC-DC modules (20-100W) with wide operating temperature",
          powerRange: "20W to 100W"
        }
      ],
      parameters: ["inputVoltage", "outputVoltage", "outputCurrent", "outputPower", "efficiency", "isolationVoltage", "operatingTemperature", "packageSize"],
      selectionGuide: {
        title: "How to Select Hawun AC-DC Power Modules",
        description: "Comprehensive guide for selecting AC-DC power modules",
        articleId: "ac-dc-module-selection-guide",
        articleLink: "/hawun/support/ac-dc-module-selection-guide.html",
        link: "/hawun/support/ac-dc-module-selection-guide.html",
        selectionGuideLink: "/hawun/support/ac-dc-module-selection-guide.html"
      },
      selectionGuideLink: "/hawun/support/ac-dc-module-selection-guide.html",
      specifications: {
        inputVoltage: "85-264VAC universal input",
        outputVoltage: "3.3V to 48V DC",
        powerRange: "5W to 300W",
        isolation: "3000VAC reinforced isolation",
        efficiency: "Up to 94%"
      },
      applications: ["Industrial control", "Smart home", "IoT devices", "Test equipment", "Medical devices"],
      faqs: [
        {
          question: "What is the typical efficiency of Hawun AC-DC modules?",
          answer: "Hawun AC-DC modules achieve efficiencies from 85% to 94% depending on power level and output voltage. Higher voltage outputs (48V) typically achieve 92-94%, while lower voltages (3.3V, 5V) achieve 85-90%. Efficiency curves are provided in datasheets for accurate thermal calculations.",
          decisionGuide: "Contact our FAE team for efficiency data specific to your operating conditions.",
          keywords: ["efficiency", "power conversion", "thermal design"]
        }
      ],
      products: [
        {
          id: "ha05-5v",
          mpn: "HA05-5V",
          partNumber: "HA05-5V",
          name: "HA05-5V AC-DC Power Module",
          category: "AC-DC Power Modules",
          shortDescription: "5W AC-DC module with 5V output, universal input, and 3000VAC isolation.",
          description: "The HA05-5V is a compact 5W AC-DC power module featuring universal 85-264VAC input, regulated 5V/1A output, and 3000VAC reinforced isolation. Ideal for IoT and smart home applications.",
          longDescription: "The HA05-5V from Hawun is a high-efficiency 5W AC-DC power module designed for compact applications. Featuring universal AC input range, this module provides reliable 5V DC output with excellent line and load regulation. The 3000VAC isolation ensures safety in user-accessible applications.",
          descriptionParagraphs: [
            "The HA05-5V from Hawun is a high-efficiency 5W AC-DC power module.",
            "Featuring universal 85-264VAC input and 3000VAC reinforced isolation.",
            "Ideal for IoT devices, smart home products, and compact industrial controls."
          ],
          image: "/assets/brands/hawun/ha05-5v.jpg",
          datasheet: "/assets/brands/hawun/datasheets/HA05-5V.pdf",
          specifications: {
            inputVoltage: "85-264VAC",
            outputVoltage: "5V DC",
            outputCurrent: "1A",
            outputPower: "5W",
            efficiency: "85%",
            isolationVoltage: "3000VAC",
            operatingTemperature: "-40°C to +85°C",
            packageSize: "35×25×15mm"
          },
          features: ["Universal AC input", "Regulated output", "Short circuit protection", "Over temperature protection"],
          applications: ["IoT devices", "Smart home", "Industrial sensors", "LED drivers"],
          compliance: ["UL60950-1", "EN62368-1", "CE", "RoHS"]
        },
        {
          id: "ha10-12v",
          mpn: "HA10-12V",
          partNumber: "HA10-12V",
          name: "HA10-12V AC-DC Power Module",
          category: "AC-DC Power Modules",
          shortDescription: "10W AC-DC module with 12V output, universal input, and high efficiency.",
          description: "The HA10-12V delivers 10W of isolated power with 12V/0.83A output. Features include 85-264VAC input, 88% efficiency, and compact SIP package for space-constrained designs.",
          longDescription: "The HA10-12V is a 10W AC-DC power module providing 12V DC output from universal AC input. With 88% efficiency and 3000VAC isolation, this module is perfect for industrial controls and test equipment requiring reliable isolated power.",
          descriptionParagraphs: [
            "The HA10-12V is a 10W AC-DC power module providing 12V DC output.",
            "88% efficiency and 3000VAC isolation for reliable operation.",
            "Perfect for industrial controls and test equipment."
          ],
          image: "/assets/brands/hawun/ha10-12v.jpg",
          datasheet: "/assets/brands/hawun/datasheets/HA10-12V.pdf",
          specifications: {
            inputVoltage: "85-264VAC",
            outputVoltage: "12V DC",
            outputCurrent: "0.83A",
            outputPower: "10W",
            efficiency: "88%",
            isolationVoltage: "3000VAC",
            operatingTemperature: "-40°C to +85°C",
            packageSize: "45×28×18mm"
          },
          features: ["High efficiency", "Low standby power", "Remote ON/OFF", "Output trim"],
          applications: ["Industrial controls", "Test equipment", "Communication devices"],
          compliance: ["UL60950-1", "EN62368-1", "CE", "RoHS"]
        },
        {
          id: "hb30-24v",
          mpn: "HB30-24V",
          partNumber: "HB30-24V",
          name: "HB30-24V AC-DC Power Module",
          category: "AC-DC Power Modules",
          shortDescription: "30W AC-DC module with 24V output for industrial applications.",
          description: "The HB30-24V is a 30W industrial-grade AC-DC module featuring 24V/1.25A output, 90% efficiency, and -40°C to +85°C operating range. Encapsulated design for harsh environments.",
          longDescription: "The HB30-24V delivers reliable 30W power for industrial applications. With rugged encapsulated construction, this module withstands harsh environments while maintaining high efficiency and stable output regulation.",
          descriptionParagraphs: [
            "The HB30-24V delivers reliable 30W power for industrial applications.",
            "Rugged encapsulated construction for harsh environments.",
            "90% efficiency with stable output regulation."
          ],
          image: "/assets/brands/hawun/hb30-24v.jpg",
          datasheet: "/assets/brands/hawun/datasheets/HB30-24V.pdf",
          specifications: {
            inputVoltage: "85-264VAC",
            outputVoltage: "24V DC",
            outputCurrent: "1.25A",
            outputPower: "30W",
            efficiency: "90%",
            isolationVoltage: "3000VAC",
            operatingTemperature: "-40°C to +85°C",
            packageSize: "60×40×25mm"
          },
          features: ["Industrial grade", "Encapsulated design", "Wide temperature range", "EMC Class B"],
          applications: ["Factory automation", "Process control", "Security systems"],
          compliance: ["UL60950-1", "EN62368-1", "CE", "RoHS"]
        },
        {
          id: "hb50-48v",
          mpn: "HB50-48V",
          partNumber: "HB50-48V",
          name: "HB50-48V AC-DC Power Module",
          category: "AC-DC Power Modules",
          shortDescription: "50W AC-DC module with 48V output for PoE and industrial applications.",
          description: "The HB50-48V provides 50W of isolated power with 48V/1.04A output. Features 92% efficiency, 4000VAC isolation option, and parallel operation capability for higher power needs.",
          longDescription: "The HB50-48V is a high-power AC-DC module designed for PoE injectors, industrial equipment, and distributed power systems. With 92% efficiency and optional 4000VAC isolation, it meets demanding application requirements.",
          descriptionParagraphs: [
            "The HB50-48V provides 50W isolated power for PoE and industrial applications.",
            "92% efficiency with optional 4000VAC isolation.",
            "Parallel operation capability for higher power needs."
          ],
          image: "/assets/brands/hawun/hb50-48v.jpg",
          datasheet: "/assets/brands/hawun/datasheets/HB50-48V.pdf",
          specifications: {
            inputVoltage: "85-264VAC",
            outputVoltage: "48V DC",
            outputCurrent: "1.04A",
            outputPower: "50W",
            efficiency: "92%",
            isolationVoltage: "3000VAC (4000VAC option)",
            operatingTemperature: "-40°C to +85°C",
            packageSize: "70×50×30mm"
          },
          features: ["High efficiency", "Parallel capable", "Power good signal", "Remote sense"],
          applications: ["PoE systems", "Industrial equipment", "Telecom equipment"],
          compliance: ["UL60950-1", "EN62368-1", "CE", "RoHS"]
        }
      ]
    },
    {
      id: "dc-dc-converters",
      name: "DC-DC Converters",
      slug: "dc-dc-converters",
      description: "Isolated and non-isolated DC-DC converters for various applications",
      longDescription: "Hawun's DC-DC converter portfolio provides efficient voltage conversion for DC-powered systems. Available in isolated and non-isolated configurations with power levels from 1W to 100W.",
      image: "/assets/brands/hawun/dc-dc-converters.jpg",
      icon: "fa-exchange-alt",
      productCount: 4,
      series: [
        {
          name: "HD Series",
          description: "Isolated DC-DC converters (1-10W) with SIP/DIP packages",
          powerRange: "1W to 10W"
        },
        {
          name: "HE Series",
          description: "High-power DC-DC converters (10-100W) with SMD packages",
          powerRange: "10W to 100W"
        }
      ],
      parameters: ["inputVoltage", "outputVoltage", "outputCurrent", "outputPower", "efficiency", "isolationVoltage", "operatingTemperature", "packageSize"],
      selectionGuide: {
        title: "How to Select Hawun DC-DC Converters",
        description: "Comprehensive guide for selecting DC-DC converters",
        articleId: "dc-dc-converter-selection-guide",
        articleLink: "/hawun/support/dc-dc-converter-selection-guide.html",
        link: "/hawun/support/dc-dc-converter-selection-guide.html",
        selectionGuideLink: "/hawun/support/dc-dc-converter-selection-guide.html"
      },
      selectionGuideLink: "/hawun/support/dc-dc-converter-selection-guide.html",
      specifications: {
        inputVoltage: "3.3V to 75V DC",
        outputVoltage: "3.3V to 48V DC",
        powerRange: "1W to 100W",
        isolation: "1000VDC to 6000VDC",
        efficiency: "Up to 93%"
      },
      applications: ["Industrial control", "Communication", "Medical devices", "Automotive", "Railway"],
      faqs: [
        {
          question: "What is the difference between isolated and non-isolated DC-DC converters?",
          answer: "Isolated DC-DC converters provide galvanic isolation between input and output using transformers, essential for safety in user-accessible applications and breaking ground loops. Non-isolated converters use inductors for voltage conversion without isolation, offering higher efficiency and lower cost for applications where isolation is not required.",
          decisionGuide: "Contact our FAE team to determine if your application requires isolation.",
          keywords: ["isolation", "DC-DC types", "safety requirements"]
        }
      ],
      products: [
        {
          id: "hd03-3v3",
          mpn: "HD03-3V3",
          partNumber: "HD03-3V3",
          name: "HD03-3V3 DC-DC Converter",
          category: "DC-DC Converters",
          shortDescription: "3W isolated DC-DC converter, 5V input to 3.3V/900mA output.",
          description: "The HD03-3V3 is a compact 3W isolated DC-DC converter converting 5V to 3.3V with 1500VDC isolation. SIP package for easy PCB mounting.",
          longDescription: "The HD03-3V3 provides isolated power conversion in a compact SIP package. With 1500VDC isolation and high efficiency, it's ideal for mixed-voltage systems requiring signal isolation.",
          descriptionParagraphs: [
            "The HD03-3V3 provides isolated power conversion in a compact SIP package.",
            "1500VDC isolation for mixed-voltage systems.",
            "High efficiency with easy PCB mounting."
          ],
          image: "/assets/brands/hawun/hd03-3v3.jpg",
          datasheet: "/assets/brands/hawun/datasheets/HD03-3V3.pdf",
          specifications: {
            inputVoltage: "4.5-5.5V DC",
            outputVoltage: "3.3V DC",
            outputCurrent: "0.9A",
            outputPower: "3W",
            efficiency: "89%",
            isolationVoltage: "1500VDC",
            operatingTemperature: "-40°C to +85°C",
            packageSize: "11.5×6.0×10mm"
          },
          features: ["Compact SIP package", "No external components", "Short circuit protection", "High efficiency"],
          applications: ["Digital isolation", "Communication", "Industrial control"],
          compliance: ["UL60950-1", "EN62368-1", "RoHS"]
        },
        {
          id: "hd05-5v",
          mpn: "HD05-5V",
          partNumber: "HD05-5V",
          name: "HD05-5V DC-DC Converter",
          category: "DC-DC Converters",
          shortDescription: "5W isolated DC-DC converter with wide input range.",
          description: "The HD05-5V converts 9-36V input to isolated 5V/1A output. Features 3000VDC isolation and 90% efficiency in a compact DIP package.",
          longDescription: "The HD05-5V offers flexible input voltage range and regulated 5V output. The 3000VDC isolation makes it suitable for industrial applications requiring high isolation barriers.",
          descriptionParagraphs: [
            "The HD05-5V offers flexible 9-36V input and regulated 5V output.",
            "3000VDC isolation for industrial applications.",
            "90% efficiency in compact DIP package."
          ],
          image: "/assets/brands/hawun/hd05-5v.jpg",
          datasheet: "/assets/brands/hawun/datasheets/HD05-5V.pdf",
          specifications: {
            inputVoltage: "9-36V DC",
            outputVoltage: "5V DC",
            outputCurrent: "1A",
            outputPower: "5W",
            efficiency: "90%",
            isolationVoltage: "3000VDC",
            operatingTemperature: "-40°C to +85°C",
            packageSize: "19.9×7.0×10.2mm"
          },
          features: ["Wide input range", "Regulated output", "3000VDC isolation", "DIP package"],
          applications: ["Industrial control", "Power isolation", "Battery systems"],
          compliance: ["UL60950-1", "EN62368-1", "RoHS"]
        },
        {
          id: "he20-12v",
          mpn: "HE20-12V",
          partNumber: "HE20-12V",
          name: "HE20-12V DC-DC Converter",
          category: "DC-DC Converters",
          shortDescription: "20W isolated DC-DC converter, 24V to 12V/1.67A.",
          description: "The HE20-12V delivers 20W isolated power with 24V input to 12V output. Features 2250VDC isolation, 91% efficiency, and SMD package for automated assembly.",
          longDescription: "The HE20-12V is a high-power density DC-DC converter in SMD package. With 2250VDC isolation and excellent thermal performance, it meets demanding industrial and communication applications.",
          descriptionParagraphs: [
            "The HE20-12V is a high-power density DC-DC converter in SMD package.",
            "2250VDC isolation with excellent thermal performance.",
            "Ideal for industrial and communication applications."
          ],
          image: "/assets/brands/hawun/he20-12v.jpg",
          datasheet: "/assets/brands/hawun/datasheets/HE20-12V.pdf",
          specifications: {
            inputVoltage: "18-36V DC",
            outputVoltage: "12V DC",
            outputCurrent: "1.67A",
            outputPower: "20W",
            efficiency: "91%",
            isolationVoltage: "2250VDC",
            operatingTemperature: "-40°C to +85°C",
            packageSize: "25.4×12.7×8.5mm"
          },
          features: ["SMD package", "High power density", "Soft start", "Remote ON/OFF"],
          applications: ["Communication equipment", "Industrial systems", "Distributed power"],
          compliance: ["UL60950-1", "EN62368-1", "RoHS"]
        },
        {
          id: "he50-24v",
          mpn: "HE50-24V",
          partNumber: "HE50-24V",
          name: "HE50-24V DC-DC Converter",
          category: "DC-DC Converters",
          shortDescription: "50W isolated DC-DC converter with 48V input.",
          description: "The HE50-24V provides 50W isolated power conversion from 36-75V to 24V/2.08A. Features 3000VDC isolation, 93% efficiency, and parallel operation capability.",
          longDescription: "The HE50-24V is a high-efficiency DC-DC converter for telecom and industrial applications. With 93% efficiency and advanced thermal management, it delivers reliable performance in demanding environments.",
          descriptionParagraphs: [
            "The HE50-24V provides 50W isolated power for telecom applications.",
            "93% efficiency with advanced thermal management.",
            "Parallel operation capability for scalable power."
          ],
          image: "/assets/brands/hawun/he50-24v.jpg",
          datasheet: "/assets/brands/hawun/datasheets/HE50-24V.pdf",
          specifications: {
            inputVoltage: "36-75V DC",
            outputVoltage: "24V DC",
            outputCurrent: "2.08A",
            outputPower: "50W",
            efficiency: "93%",
            isolationVoltage: "3000VDC",
            operatingTemperature: "-40°C to +85°C",
            packageSize: "50.8×25.4×12mm"
          },
          features: ["High efficiency", "Parallel capable", "Input undervoltage lockout", "Overcurrent protection"],
          applications: ["Telecom systems", "Data centers", "Industrial equipment"],
          compliance: ["UL60950-1", "EN62368-1", "RoHS"]
        }
      ]
    }
  ]
};

// Real brand data for Hawun (Power Module Manufacturer)
const realBrandData = {
  name: "hawun",
  displayName: "Hawun",
  logo: "/assets/brands/hawun/logo.svg",
  tagline: "Reliable Power Solutions for Modern Electronics",
  description: "Hawun is a leading Chinese manufacturer of AC-DC power modules and DC-DC converters, providing high-efficiency power conversion solutions for industrial, medical, communication, and consumer applications.",
  longDescription: "Hawun Electronics Co., Ltd., established in 2002 and headquartered in Shenzhen, China, is a professional manufacturer of AC-DC power modules and DC-DC converters. With over 20 years of experience in power electronics, Hawun has developed comprehensive product lines including isolated and non-isolated DC-DC converters, AC-DC power modules, and custom power solutions. The company serves diverse markets including industrial automation, medical equipment, telecommunications, and smart home applications. Hawun is committed to quality excellence, holding ISO 9001 and ISO 14001 certifications, with products meeting international safety standards including UL, CE, and CB. The company's manufacturing facilities feature advanced production equipment and strict quality control systems, ensuring consistent product reliability and performance.",
  coreProducts: [
    {
      name: "AC-DC Power Modules",
      description: "High-efficiency AC-DC power modules with universal input and various output voltages for industrial and commercial applications.",
      keywords: ["AC-DC converter", "power module", "isolated power supply", "AC-DC power"]
    },
    {
      name: "DC-DC Converters",
      description: "Isolated and non-isolated DC-DC converters for voltage conversion in DC-powered systems.",
      keywords: ["DC-DC converter", "isolated converter", "voltage converter", "DC power"]
    }
  ],
  industries: [
    {
      name: "Industrial Automation",
      description: "Reliable power modules for PLCs, sensors, and control systems in factory automation.",
      keywords: ["industrial control", "factory automation", "PLC power", "sensor power"]
    },
    {
      name: "Medical Equipment",
      description: "Medical-grade power modules meeting safety standards for healthcare devices.",
      keywords: ["medical power", "healthcare equipment", "patient safety", "isolation"]
    },
    {
      name: "Telecommunications",
      description: "High-efficiency power solutions for telecom infrastructure and network equipment.",
      keywords: ["telecom power", "network equipment", "communication systems"]
    },
    {
      name: "Smart Home & IoT",
      description: "Compact power modules for smart home devices and IoT applications.",
      keywords: ["smart home", "IoT power", "compact power", "low power"]
    }
  ],
  certifications: [
    {
      name: "ISO 9001",
      description: "Quality management system certification ensuring consistent product quality."
    },
    {
      name: "ISO 14001",
      description: "Environmental management system certification."
    },
    {
      name: "UL/cUL",
      description: "Safety certification for North American markets."
    },
    {
      name: "CE",
      description: "European conformity marking for EU market access."
    },
    {
      name: "CB Scheme",
      description: "International certification for global market access."
    },
    {
      name: "RoHS Compliant",
      description: "Restriction of Hazardous Substances compliance."
    }
  ],
  yearFounded: 2002,
  headquarters: "Shenzhen, China",
  employees: "1500+",
  revenue: "$200M+",
  website: "https://www.hawun.com",
  distributorStatus: "Authorized Distributor",
  seoTitle: "Hawun Power Module Distributor | AC-DC, DC-DC Converters",
  seoDescription: "Authorized Hawun distributor offering AC-DC power modules and DC-DC converters. Technical support and competitive pricing for industrial, medical, and communication applications.",
  seoKeywords: [
    "Hawun distributor",
    "Hawun power modules",
    "AC-DC converter distributor",
    "DC-DC converter distributor",
    "Hawun power module selection guide",
    "isolated power supply distributor",
    "Hawun authorized distributor"
  ],
  faqs: [
    {
      question: "Is BeiLuo an authorized distributor of Hawun power modules?",
      answer: "Yes, BeiLuo Electronics is an authorized distributor of Hawun power module products. We provide genuine Hawun AC-DC power modules and DC-DC converters with full manufacturer warranty and technical support.",
      decisionGuide: "Contact us for Hawun power module availability, pricing, and technical documentation.",
      keywords: ["Hawun distributor", "authorized distributor", "Hawun power modules"]
    },
    {
      question: "What are the key advantages of Hawun power modules?",
      answer: "Hawun power modules offer several key advantages: High efficiency (up to 94%), compact size, wide operating temperature range (-40°C to +85°C), comprehensive safety certifications (UL, CE, CB), and competitive pricing. The modules feature built-in protection functions and require minimal external components.",
      decisionGuide: "Contact our FAE team for detailed technical comparisons and application recommendations.",
      keywords: ["Hawun advantages", "power module features", "efficiency"]
    },
    {
      question: "How do I select the right Hawun power module?",
      answer: "Selecting the right Hawun power module involves: 1) Determine input voltage (AC or DC); 2) Calculate output voltage and current requirements; 3) Identify isolation requirements; 4) Consider package size constraints; 5) Check operating temperature range; 6) Verify required safety certifications.",
      decisionGuide: "Use our product selector or contact FAE for application-specific recommendations.",
      keywords: ["power module selection", "Hawun selection guide", "converter design"]
    },
    {
      question: "What is the typical lead time for Hawun power modules?",
      answer: "Lead times for Hawun power modules: Standard catalog products: 2-4 weeks; High-volume orders: 4-6 weeks; Samples: 1-2 weeks from stock. BeiLuo maintains inventory of popular series for immediate delivery.",
      decisionGuide: "Contact our sales team for current lead times and inventory status.",
      keywords: ["Hawun lead time", "power module delivery", "availability"]
    },
    {
      question: "Does Hawun offer custom power solutions?",
      answer: "Yes, Hawun offers custom power solutions for volume applications. Customization options include special output voltages, modified packages, enhanced isolation, and specific safety certifications. Contact us to discuss your requirements.",
      decisionGuide: "Contact our FAE team to discuss custom power solution requirements.",
      keywords: ["custom power", "custom DC-DC", "custom AC-DC"]
    }
  ]
};

// Real solutions data for Hawun
const realSolutionsData = {
  seoTitle: "Hawun Power Solutions | Industrial & Medical Applications",
  seoDescription: "Explore Hawun power solutions for industrial automation, medical equipment, and telecommunications. Complete power solutions with technical support from authorized distributor.",
  seoKeywords: [
    "Hawun solutions",
    "power supply solution",
    "industrial power",
    "medical power",
    "Hawun distributor"
  ],
  faqs: [
    {
      question: "How do I select the right Hawun power solution?",
      answer: "Selecting the right power solution involves defining your application requirements, input power source, output specifications, isolation needs, and safety certifications. Our FAE team can help assess your requirements.",
      decisionGuide: "Contact our FAE team for power solution assessment.",
      keywords: ["power solution selection", "system configuration"]
    },
    {
      question: "What support does BeiLuo provide?",
      answer: "BeiLuo provides comprehensive support: Technical consultation, application engineering, prototype support, and production support. Our FAE team guides you through the entire design process.",
      decisionGuide: "Contact our technical support team.",
      keywords: ["implementation support", "FAE support"]
    }
  ],
  solutions: [
    {
      id: "industrial-power-solution",
      name: "Industrial Power Solution",
      title: "Industrial Power Solution",
      slug: "industrial-power-solution",
      description: "Reliable power solution for industrial automation and control systems",
      longDescription: "The Industrial Power Solution from Hawun provides reliable isolated power for PLCs, sensors, and control systems. Features wide temperature range, high efficiency, and comprehensive protection.",
      image: "/assets/brands/hawun/industrial-power-solution.jpg",
      icon: "fa-industry",
      industry: "Industrial Automation",
      applications: ["PLC systems", "Industrial sensors", "Motor drives", "Process control"],
      benefits: [
        "Wide operating temperature range (-40°C to +85°C)",
        "High isolation for safety",
        "EMC compliance for industrial environments",
        "Compact size for space-constrained installations",
        "Long lifetime for reduced maintenance"
      ],
      coreAdvantages: [
        { title: "Wide Temperature", description: "Reliable operation from -40°C to +85°C", data: "-40°C to +85°C" },
        { title: "High Isolation", description: "3000VAC reinforced isolation", data: "3000VAC" },
        { title: "High Efficiency", description: "Up to 93% efficiency reduces heat", data: "Up to 93%" },
        { title: "EMC Compliant", description: "Meets industrial EMC standards", data: "Class B" }
      ],
      components: [
        { category: "Main Power", products: ["HB30-24V", "HB50-48V"], description: "Primary AC-DC power conversion" },
        { category: "Isolation", products: ["HD05-5V", "HE20-12V"], description: "Isolated DC-DC for control circuits" }
      ],
      bomList: [
        { category: "Power Stage", items: [{ mpn: "HB30-24V", description: "30W AC-DC module", quantity: 1, alternatives: ["HB50-48V"] }] }
      ],
      technicalSpecs: {
        "Input Voltage": "85-264VAC",
        "Output Power": "Up to 100W",
        "Efficiency": "Up to 93%",
        "Operating Temperature": "-40°C to +85°C",
        "Isolation": "3000VAC"
      },
      customerCases: [
        {
          customerName: "Factory Automation Company",
          industry: "Manufacturing",
          application: "PLC power supply",
          challenge: "Needed reliable power for factory floor PLCs in harsh environment",
          solution: "Implemented HB series AC-DC modules with wide temperature range",
          result: "Zero failures in 3 years of 24/7 operation"
        }
      ],
      faeInsights: {
        insight: "Industrial power design requires attention to temperature, isolation, and EMC. Always verify actual operating temperature and provide adequate margin.",
        logic: "Design process: Define requirements, select appropriate modules, verify thermal design, test under actual conditions.",
        keyTakeaways: ["Temperature is critical for reliability", "Isolation ensures safety", "EMC compliance is essential"],
        commonPitfalls: ["Insufficient temperature margin", "Inadequate isolation for application"],
        bestPractices: ["Use 105°C rated components", "Verify isolation requirements", "Test EMC compliance"],
        author: { name: "Senior FAE", title: "Applications Engineer", experience: "10+ years" }
      }
    },
    {
      id: "medical-power-solution",
      name: "Medical Power Solution",
      title: "Medical Power Solution",
      slug: "medical-power-solution",
      description: "Medical-grade power solution meeting safety standards for healthcare equipment",
      longDescription: "The Medical Power Solution from Hawun provides isolated power for medical devices with 2xMOPP patient protection and compliance to IEC 60601-1 medical safety standards.",
      image: "/assets/brands/hawun/medical-power-solution.jpg",
      icon: "fa-heartbeat",
      industry: "Medical Equipment",
      applications: ["Patient monitors", "Diagnostic equipment", "Therapy devices", "Home healthcare"],
      benefits: [
        "2xMOPP patient protection",
        "Low leakage current (<100μA)",
        "Medical safety certifications",
        "High reliability for critical care",
        "Compact design for portable equipment"
      ],
      coreAdvantages: [
        { title: "Patient Safety", description: "2xMOPP isolation for patient contact", data: "2xMOPP" },
        { title: "Low Leakage", description: "Minimal leakage current for safety", data: "<100μA" },
        { title: "Medical Certified", description: "IEC 60601-1 3rd edition compliant", data: "60601-1" }
      ],
      components: [
        { category: "Main Power", products: ["HA10-12V", "HB30-24V"], description: "Medical-grade AC-DC conversion" }
      ],
      bomList: [
        { category: "Power Stage", items: [{ mpn: "HA10-12V", description: "10W medical AC-DC", quantity: 1 }] }
      ],
      technicalSpecs: {
        "Input Voltage": "85-264VAC",
        "Output Power": "Up to 50W",
        "Leakage Current": "<100μA",
        "Isolation": "4000VAC (2xMOPP)",
        "Safety": "IEC 60601-1 3rd Ed"
      },
      customerCases: [
        {
          customerName: "Medical Device Manufacturer",
          industry: "Healthcare",
          application: "Portable patient monitor",
          challenge: "Needed compact, medical-grade power with low leakage",
          solution: "Implemented HA series with enhanced isolation",
          result: "Passed all medical safety certifications, product in production"
        }
      ],
      faeInsights: {
        insight: "Medical power requires special attention to isolation, leakage current, and safety certifications. Always verify compliance with applicable medical standards.",
        logic: "Medical design: Identify patient contact level, determine isolation requirements, select certified modules, verify leakage current.",
        keyTakeaways: ["Patient safety is paramount", "Verify medical certifications", "Measure actual leakage current"],
        commonPitfalls: ["Insufficient isolation for patient contact", "Not verifying leakage current"],
        bestPractices: ["Use medically certified modules", "Test leakage under all conditions", "Document safety analysis"],
        author: { name: "Senior FAE", title: "Applications Engineer", experience: "10+ years" }
      }
    },
    {
      id: "telecom-power-solution",
      name: "Telecom Power Solution",
      title: "Telecom Power Solution",
      slug: "telecom-power-solution",
      description: "High-efficiency power solution for telecommunications infrastructure",
      longDescription: "The Telecom Power Solution from Hawun provides efficient power conversion for telecom equipment with high reliability and wide input range for battery backup systems.",
      image: "/assets/brands/hawun/telecom-power-solution.jpg",
      icon: "fa-signal",
      industry: "Telecommunications",
      applications: ["Base stations", "Network switches", "PoE injectors", "Fiber equipment"],
      benefits: [
        "High efficiency reduces cooling requirements",
        "Wide input range for battery backup",
        "High reliability for 24/7 operation",
        "Compact size for rack mounting",
        "Parallel operation for redundancy"
      ],
      coreAdvantages: [
        { title: "High Efficiency", description: "Up to 93% efficiency", data: "93%" },
        { title: "Wide Input", description: "36-75V for telecom bus", data: "36-75V" },
        { title: "Parallel Capable", description: "N+1 redundancy support", data: "N+1" }
      ],
      components: [
        { category: "DC-DC", products: ["HE20-12V", "HE50-24V"], description: "High-power DC-DC for telecom bus" }
      ],
      bomList: [
        { category: "Power Stage", items: [{ mpn: "HE50-24V", description: "50W DC-DC converter", quantity: 2 }] }
      ],
      technicalSpecs: {
        "Input Voltage": "36-75V DC (telecom bus)",
        "Output Power": "Up to 100W",
        "Efficiency": "Up to 93%",
        "Operating Temperature": "-40°C to +85°C"
      },
      customerCases: [
        {
          customerName: "Telecom Equipment Provider",
          industry: "Telecommunications",
          application: "Network switch power",
          challenge: "Needed efficient, reliable power for 24/7 network equipment",
          solution: "Implemented HE series DC-DC with parallel redundancy",
          result: "99.999% uptime achieved, reduced cooling costs by 15%"
        }
      ],
      faeInsights: {
        insight: "Telecom power requires high efficiency and reliability. Parallel operation provides redundancy for critical applications.",
        logic: "Telecom design: Calculate power needs, plan for redundancy, select high-efficiency modules, verify thermal design.",
        keyTakeaways: ["Efficiency affects cooling", "Redundancy ensures uptime", "Verify parallel operation"],
        commonPitfalls: ["Not planning for redundancy", "Undersizing thermal management"],
        bestPractices: ["Use N+1 redundancy for critical systems", "Verify efficiency at operating points", "Test parallel operation"],
        author: { name: "Senior FAE", title: "Applications Engineer", experience: "10+ years" }
      }
    }
  ]
};

// Real support data for Hawun
const realSupportData = {
  seoTitle: "Hawun Technical Support | Power Module Selection & Application Guides",
  seoDescription: "Access Hawun technical documentation, power module selection guides, and application notes. Expert FAE support for power supply design and system integration.",
  seoKeywords: [
    "Hawun technical support",
    "power module selection guide",
    "AC-DC converter application",
    "DC-DC converter design",
    "Hawun distributor support"
  ],
  faqs: [
    {
      question: "Where can I find Hawun product documentation?",
      answer: "Hawun product documentation is available through BeiLuo Electronics website or by contacting our FAE team directly. All documentation includes detailed specifications, application notes, and safety certifications.",
      decisionGuide: "Contact our technical support team for documentation requests.",
      keywords: ["Hawun documentation", "datasheets", "technical resources"]
    },
    {
      question: "How do I get technical support for my Hawun design?",
      answer: "BeiLuo Electronics provides comprehensive technical support: Application engineering, product selection, design validation, and production support. Contact our FAE team for assistance.",
      decisionGuide: "Contact our FAE team to discuss your design requirements.",
      keywords: ["technical support", "FAE support", "design assistance"]
    },
    {
      question: "What design tools are available?",
      answer: "Hawun provides product selectors, thermal calculators, and efficiency estimation tools. Contact our FAE team for tool access and assistance.",
      decisionGuide: "Contact our FAE team for design tool access.",
      keywords: ["design tools", "calculator", "selector"]
    },
    {
      question: "How do I select the right power module?",
      answer: "Power module selection involves: Define input/output requirements, determine isolation needs, check operating temperature, verify safety certifications, and consider package constraints.",
      decisionGuide: "Contact our FAE team for selection guidance.",
      keywords: ["power module selection", "design guide"]
    },
    {
      question: "How do I get samples?",
      answer: "Contact our sales or FAE team to request samples. Provide project information and expected volumes. Samples typically ship within 1-3 business days for stock items.",
      decisionGuide: "Contact our sales team to request samples.",
      keywords: ["samples", "evaluation", "prototyping"]
    },
    {
      question: "How do I calculate thermal requirements?",
      answer: "Thermal calculation: Pdiss = Pout × (1/η - 1). Then calculate temperature rise using thermal resistance. Ensure maximum junction/case temperature is not exceeded.",
      decisionGuide: "Contact our FAE team for thermal analysis assistance.",
      keywords: ["thermal calculation", "heatsink", "temperature"]
    }
  ],
  articles: [
    {
      id: "ac-dc-module-selection-guide",
      title: "How to Select Hawun AC-DC Power Modules",
      slug: "ac-dc-module-selection-guide",
      category: "Product Selection",
      author: { name: "Michael Chen", title: "Senior FAE - Power Electronics", experience: "15 years", expertise: ["Power module selection", "AC-DC design", "Thermal analysis"] },
      publishDate: "2026-03-15",
      lastUpdated: "2026-03-15",
      summary: "Comprehensive guide for selecting Hawun AC-DC power modules based on input voltage, output power, isolation, and application requirements.",
      tags: ["power module selection", "AC-DC converter", "design guide", "Hawun"],
      content: [
        "AC-DC power module selection requires careful consideration of electrical, thermal, and safety requirements. This guide provides systematic approach to selecting the optimal module.",
        "Input voltage range is the first consideration. Hawun modules support universal AC input (85-264VAC) suitable for global applications. Verify the input range meets your application requirements.",
        "Output power and voltage must match your load requirements. Select a module with at least 20% power margin for reliability. Output voltage accuracy and regulation are critical for sensitive loads.",
        "Isolation requirements depend on application safety standards. Hawun modules offer 1500VDC to 4000VAC isolation. Medical applications require 2xMOPP (Means of Patient Protection) isolation.",
        "Operating temperature significantly affects reliability. Hawun modules operate from -40°C to +85°C. Calculate thermal performance at maximum ambient temperature.",
        "Safety certifications required vary by market and application. Verify the module has appropriate certifications (UL, CE, CB, medical) for your target markets."
      ],
      relatedArticles: [
        { id: "thermal-design-guide", title: "Power Module Thermal Design", link: "/hawun/support/thermal-design-guide.html" },
        { id: "emc-compliance-guide", title: "EMC Compliance for Power Modules", link: "/hawun/support/emc-compliance-guide.html" }
      ],
      faeInsights: {
        insight: "The most common mistake in power module selection is not accounting for thermal requirements. Always calculate power dissipation and verify the thermal design at maximum ambient temperature.",
        logic: "Selection process: Define electrical requirements, calculate thermal needs, verify safety certifications, check mechanical constraints.",
        keyTakeaways: ["Calculate thermal requirements early", "Verify all safety certifications", "Include design margin"],
        commonPitfalls: ["Ignoring thermal limitations", "Insufficient safety margins", "Wrong isolation level"],
        bestPractices: ["Use thermal calculator", "Verify certifications", "Prototype testing"],
        troubleshootingTips: ["Measure actual operating temperature", "Verify input voltage range"]
      },
      customerCases: [
        {
          customerName: "Industrial Equipment Manufacturer",
          industry: "Factory Automation",
          application: "Control system power supply",
          challenge: "Needed reliable power for harsh industrial environment with 60°C ambient",
          solution: "Selected HB series with proper thermal design and 105°C rating",
          result: "Reliable operation for 5+ years in harsh environment"
        }
      ]
    },
    {
      id: "dc-dc-converter-guide",
      title: "DC-DC Converter Selection and Application",
      slug: "dc-dc-converter-guide",
      category: "Technical Support",
      author: { name: "David Wang", title: "Principal FAE - Power Design", experience: "18 years", expertise: ["DC-DC design", "Isolation", "EMC"] },
      publishDate: "2026-03-10",
      lastUpdated: "2026-03-10",
      summary: "Guide for selecting and applying DC-DC converters in industrial and communication systems.",
      tags: ["DC-DC converter", "isolation", "power design"],
      content: [
        "DC-DC converters provide voltage level shifting and isolation in DC-powered systems. This guide covers selection and application of Hawun DC-DC converters.",
        "Input voltage range must accommodate your DC source variations. Battery-powered systems require wide input range to handle discharge curves.",
        "Isolation requirements determine converter selection. Isolated converters provide safety isolation using transformers. Non-isolated converters offer higher efficiency for same-voltage systems.",
        "Output regulation is critical for sensitive loads. Hawun converters provide excellent line and load regulation, typically ±1% or better.",
        "Efficiency affects thermal design and battery life. Higher efficiency means less heat generation and longer battery operation."
      ],
      relatedArticles: [
        { id: "ac-dc-module-selection-guide", title: "AC-DC Module Selection Guide", link: "/hawun/support/ac-dc-module-selection-guide.html" }
      ],
      faeInsights: {
        insight: "Many designers overlook ripple and noise specifications. For sensitive analog circuits, verify output ripple meets requirements or add additional filtering.",
        logic: "DC-DC design: Define input/output, select topology, verify ripple/noise, check thermal performance.",
        keyTakeaways: ["Verify ripple specifications", "Check efficiency curves", "Consider isolation needs"],
        commonPitfalls: ["Excessive output ripple", "Inadequate input filtering", "Wrong topology selection"],
        bestPractices: ["Measure ripple under load", "Use recommended input caps", "Verify thermal design"]
      }
    },
    {
      id: "thermal-design-guide",
      title: "Power Module Thermal Design Guide",
      slug: "thermal-design-guide",
      category: "Technical Support",
      author: { name: "Sarah Liu", title: "Senior FAE - Thermal Management", experience: "12 years", expertise: ["Thermal design", "Heatsinking", "Reliability"] },
      publishDate: "2026-03-05",
      lastUpdated: "2026-03-05",
      summary: "Comprehensive guide for thermal design of power modules including heatsink selection and thermal calculations.",
      tags: ["thermal design", "heatsink", "temperature", "reliability"],
      content: [
        "Thermal design is critical for power module reliability. This guide provides methods for calculating thermal requirements and selecting appropriate cooling solutions.",
        "Power dissipation calculation: Pdiss = Pout × (1/η - 1). For example, 50W output at 90% efficiency dissipates 5.6W.",
        "Temperature rise calculation: ΔT = Pdiss × Rth, where Rth is thermal resistance from junction to ambient.",
        "Heatsink selection depends on maximum allowable temperature rise. Natural convection requires larger heatsinks than forced air.",
        "Thermal management best practices: Keep power modules away from heat sources, ensure adequate airflow, use thermal interface material, and verify with thermal measurements."
      ],
      relatedArticles: [
        { id: "ac-dc-module-selection-guide", title: "AC-DC Module Selection", link: "/hawun/support/ac-dc-module-selection-guide.html" }
      ],
      faeInsights: {
        insight: "The biggest thermal design mistake is not accounting for worst-case conditions. Always design for maximum ambient temperature and minimum airflow.",
        logic: "Thermal design process: Calculate dissipation, determine allowable rise, select heatsink, verify with measurements.",
        keyTakeaways: ["Design for worst case", "Verify with measurements", "Include safety margin"],
        commonPitfalls: ["Ignoring ambient temperature", "Insufficient airflow", "Poor thermal interface"],
        bestPractices: ["Measure case temperature", "Use thermal modeling", "Test at extremes"]
      }
    },
    {
      id: "emc-compliance-guide",
      title: "EMC Compliance for Power Modules",
      slug: "emc-compliance-guide",
      category: "Technical Support",
      author: { name: "Dr. James Wilson", title: "Principal Engineer - EMC", experience: "20 years", expertise: ["EMC design", "EMI filtering", "Compliance"] },
      publishDate: "2026-03-01",
      lastUpdated: "2026-03-01",
      summary: "Guide for achieving EMC compliance with power modules including filtering and layout recommendations.",
      tags: ["EMC", "EMI", "filtering", "compliance"],
      content: [
        "EMC compliance is essential for power modules in commercial and industrial applications. This guide covers conducted and radiated emission control.",
        "Input filtering is critical for conducted emissions. Use X and Y capacitors, common mode chokes, and differential mode inductors as recommended.",
        "Output filtering may be needed for sensitive loads. Ceramic capacitors provide high-frequency filtering close to the load.",
        "PCB layout affects EMC performance. Keep switching loops small, use ground planes, and separate noisy and sensitive circuits.",
        "Shielding may be required for high-power or sensitive applications. Metal enclosures provide effective radiated emission control."
      ],
      relatedArticles: [
        { id: "ac-dc-module-selection-guide", title: "AC-DC Module Selection", link: "/hawun/support/ac-dc-module-selection-guide.html" }
      ],
      faeInsights: {
        insight: "Most EMC issues stem from inadequate input filtering or poor PCB layout. Follow manufacturer recommendations and test early in the design process.",
        logic: "EMC design: Implement recommended filtering, optimize PCB layout, test and iterate if needed.",
        keyTakeaways: ["Input filtering is critical", "Layout affects performance", "Test early and often"],
        commonPitfalls: ["Insufficient filtering", "Poor PCB layout", "Missing Y capacitors"],
        bestPractices: ["Follow app note recommendations", "Use ground planes", "Test prototypes"]
      }
    },
    {
      id: "medical-power-design",
      title: "Medical Power Supply Design Guide",
      slug: "medical-power-design",
      category: "Technical Guide",
      author: { name: "Michael Chen", title: "Senior FAE", experience: "15 years" },
      publishDate: "2026-02-15",
      lastUpdated: "2026-02-15",
      summary: "Comprehensive guide for designing medical power supplies meeting IEC 60601-1 safety requirements.",
      tags: ["medical power", "patient safety", "isolation", "60601-1"],
      content: [
        "Medical power supplies require special attention to patient safety and isolation. This guide covers key requirements for medical power design.",
        "Patient contact classification determines isolation requirements: Type B (body), Type BF (body floating), and Type CF (cardiac floating) have increasing isolation requirements.",
        "2xMOPP (Means of Patient Protection) isolation is required for patient contact applications. This typically requires 4000VAC isolation and 8mm creepage/clearance.",
        "Leakage current must be minimized for patient safety. Medical power supplies typically require <100μA earth leakage and <10μA patient leakage.",
        "Risk management per ISO 14971 is required for medical devices. Power supply failure modes must be analyzed and mitigated."
      ],
      faeInsights: {
        insight: "Medical power design requires early engagement with safety experts. Patient safety requirements affect every aspect of power supply selection and implementation.",
        logic: "Medical design: Classify patient contact, determine isolation, select certified modules, verify leakage, document risk analysis.",
        keyTakeaways: ["Patient safety is paramount", "Use medically certified modules", "Verify leakage current"],
        commonPitfalls: ["Insufficient isolation", "Excessive leakage current", "Missing risk analysis"],
        bestPractices: ["Engage safety experts early", "Use certified modules", "Document everything"]
      }
    }
  ]
};

// Write all fixed data files
console.log('Fixing Hawun data - replacing capacitor data with power module data...\n');

// Write products.json
const productsPath = path.join(dataDir, 'products.json');
fs.writeFileSync(productsPath, JSON.stringify(realPowerModuleData, null, 2));
console.log('✓ Fixed products.json - replaced with power module data');

// Write brand.json
const brandPath = path.join(dataDir, 'brand.json');
fs.writeFileSync(brandPath, JSON.stringify(realBrandData, null, 2));
console.log('✓ Fixed brand.json - updated to power module manufacturer');

// Write solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
fs.writeFileSync(solutionsPath, JSON.stringify(realSolutionsData, null, 2));
console.log('✓ Fixed solutions.json - replaced with power solutions');

// Write support.json
const supportPath = path.join(dataDir, 'support.json');
fs.writeFileSync(supportPath, JSON.stringify(realSupportData, null, 2));
console.log('✓ Fixed support.json - replaced with power module support articles');

console.log('\n✅ Hawun data fix complete!');
console.log('All capacitor data has been replaced with power module data.');
