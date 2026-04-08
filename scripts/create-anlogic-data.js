const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'anlogic');

// Ensure directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Create products.json
const productsData = {
  seoTitle: "Anlogic FPGA Products - ELF/EAGLE/CPLD Series | LiTong Distributor",
  seoDescription: "Browse Anlogic FPGA devices, CPLD devices, development kits, and IP cores. Technical specifications, pricing, and availability from authorized distributor.",
  seoKeywords: ["Anlogic products", "Anlogic FPGA", "ELF series", "EAGLE series", "CPLD", "development kits", "IP cores", "Anlogic distributor"],
  faqs: [
    {
      question: "What FPGA series does Anlogic offer?",
      answer: "Anlogic offers ELF Series for low-power applications and EAGLE Series for high-performance applications.",
      decisionGuide: "Choose ELF for cost-sensitive apps, EAGLE for high-performance apps.",
      keywords: ["FPGA series", "ELF", "EAGLE"]
    },
    {
      question: "What is the difference between ELF and EAGLE series?",
      answer: "ELF series offers 1K-10K LUTs with embedded Flash for low-power apps. EAGLE series offers 10K-100K+ LUTs with high-speed transceivers for demanding apps.",
      decisionGuide: "ELF for simple designs, EAGLE for complex high-speed designs.",
      keywords: ["ELF vs EAGLE", "LUTs", "comparison"]
    },
    {
      question: "Does Anlogic provide development kits?",
      answer: "Yes, Anlogic provides comprehensive development kits including FPGA boards, programmers, and example designs.",
      decisionGuide: "Get a development kit for evaluation and prototyping.",
      keywords: ["development kits", "evaluation boards"]
    },
    {
      question: "What IP cores are available from Anlogic?",
      answer: "Anlogic provides various IP cores including communication interfaces, video processing, and DSP functions.",
      decisionGuide: "Check IP catalog for available cores for your application.",
      keywords: ["IP cores", "intellectual property"]
    },
    {
      question: "How do I select the right Anlogic device?",
      answer: "Consider logic capacity (LUTs), I/O requirements, power budget, and interface needs when selecting an Anlogic device.",
      decisionGuide: "Contact FAE for device selection assistance.",
      keywords: ["device selection", "FPGA selection"]
    }
  ],
  categories: [
    {
      id: "fpga-devices",
      name: "FPGA Devices",
      slug: "fpga-devices",
      description: "Anlogic FPGA devices including ELF and EAGLE series for various applications",
      shortDescription: "FPGA devices with 1K-100K+ LUTs for industrial and consumer applications",
      icon: "fpga",
      parameters: ["Logic Capacity", "I/O Count", "Memory", "DSP Blocks", "Package"],
      selectionGuideLink: { url: "/anlogic/support/fpga-selection-guide.html", text: "FPGA Selection Guide" },
      series: [
        { name: "ELF Series", description: "Low-cost, low-power FPGAs", features: ["1K-10K LUTs", "Embedded Flash", "Low power"] },
        { name: "EAGLE Series", description: "High-performance FPGAs", features: ["10K-100K+ LUTs", "High-speed transceivers", "Rich DSP"] }
      ],
      selectionGuide: { title: "FPGA Selection Guide", description: "How to select the right Anlogic FPGA", articleId: "fpga-selection", articleLink: "/anlogic/support/fpga-selection-guide.html" },
      faqs: [
        { question: "What LUT capacity do I need?", answer: "Small designs need 1K-5K LUTs, medium designs 5K-20K, large designs 20K+.", decisionGuide: "Estimate logic requirements before selecting device.", keywords: ["LUTs", "logic capacity"] },
        { question: "What packages are available?", answer: "Anlogic FPGAs come in QFN, BGA, and CSP packages.", decisionGuide: "Choose package based on PCB space and I/O requirements.", keywords: ["packages", "QFN", "BGA"] },
        { question: "Do Anlogic FPGAs have embedded Flash?", answer: "ELF series has embedded Flash for configuration storage.", decisionGuide: "ELF series eliminates need for external config memory.", keywords: ["embedded Flash", "configuration"] },
        { question: "What I/O standards are supported?", answer: "LVCMOS, LVTTL, LVDS, MIPI, SSTL, HSTL and more.", decisionGuide: "Check datasheet for specific I/O standard support.", keywords: ["I/O standards", "LVDS", "MIPI"] },
        { question: "Are Anlogic FPGAs pin-compatible with other brands?", answer: "Some devices are pin-compatible with Xilinx/Intel devices.", decisionGuide: "Contact FAE for migration compatibility information.", keywords: ["pin compatibility", "migration"] }
      ],
      products: [
        {
          partNumber: "ELF2L45B",
          name: "ELF2 Series 4.5K LUT FPGA",
          description: "ELF2 series FPGA with 4,480 LUTs, embedded Flash, and rich I/O resources in low-cost BGA package",
          shortDescription: "4.5K LUT FPGA with embedded Flash for industrial applications",
          features: ["4,480 LUTs", "Embedded Flash", "276 I/Os", "18 DSP blocks", "BGA-256 package"],
          specifications: { "LUTs": "4,480", "Flip-Flops": "8,960", "DSP Blocks": "18", "I/O Count": "276", "Embedded Flash": "Yes", "Package": "BGA-256" },
          applications: ["Industrial control", "Communication interfaces", "Consumer electronics", "IoT gateways"],
          faqs: [
            { question: "What is the logic capacity of ELF2L45B?", answer: "ELF2L45B provides 4,480 LUTs and 8,960 flip-flops.", decisionGuide: "Suitable for medium-complexity designs.", keywords: ["4,480 LUTs", "logic capacity"] },
            { question: "Does it require external configuration memory?", answer: "No, embedded Flash stores configuration internally.", decisionGuide: "Reduces BOM cost and board space.", keywords: ["embedded Flash", "configuration"] },
            { question: "What is the I/O voltage range?", answer: "Supports 1.2V to 3.3V I/O standards.", decisionGuide: "Flexible I/O for mixed-voltage systems.", keywords: ["I/O voltage", "standards"] },
            { question: "Is it suitable for industrial temperature?", answer: "Yes, industrial grade supports -40°C to +85°C.", decisionGuide: "Suitable for harsh industrial environments.", keywords: ["industrial temperature", "reliability"] },
            { question: "What development tools are supported?", answer: "Supported by Tang Dynasty (TD) software.", decisionGuide: "Free software download from Anlogic website.", keywords: ["Tang Dynasty", "development tools"] }
          ],
          faeReview: { author: "LiTong FAE Team", content: "The ELF2L45B is an excellent choice for cost-sensitive industrial applications. The embedded Flash eliminates external configuration memory, reducing BOM cost. We've successfully used this device in multiple PLC and communication interface projects. The 4.5K LUT capacity handles most medium-complexity designs, and the rich I/O resources provide flexibility. Power consumption is lower than competing devices, making it ideal for energy-efficient designs.", highlight: "Cost-effective, embedded Flash, low power" },
          alternativeParts: [
            { partNumber: "ELF2L15B", comparison: "ELF2L15B has 1,500 LUTs vs 4,480 LUTs", reason: "Lower capacity alternative", useCase: "Simple designs with lower logic requirements" },
            { partNumber: "ELF2L90B", comparison: "ELF2L90B has 9,000 LUTs vs 4,480 LUTs", reason: "Higher capacity option", useCase: "More complex designs requiring additional logic" }
          ],
          companionParts: [
            { partNumber: "ELF2-DK", relationship: "Development Kit", description: "Development kit for ELF2 series evaluation" },
            { partNumber: "AL-DP-RAM", relationship: "IP Core", description: "Dual-port RAM IP core for data buffering" }
          ]
        },
        {
          partNumber: "ELF2L90B",
          name: "ELF2 Series 9K LUT FPGA",
          description: "ELF2 series FPGA with 9,000 LUTs, embedded Flash, and high I/O count for complex applications",
          shortDescription: "9K LUT FPGA with rich I/O for complex industrial designs",
          features: ["9,000 LUTs", "Embedded Flash", "376 I/Os", "36 DSP blocks", "BGA-400 package"],
          specifications: { "LUTs": "9,000", "Flip-Flops": "18,000", "DSP Blocks": "36", "I/O Count": "376", "Embedded Flash": "Yes", "Package": "BGA-400" },
          applications: ["Complex industrial control", "Video processing", "Communication systems", "Multi-interface designs"],
          faqs: [
            { question: "What is the logic capacity of ELF2L90B?", answer: "ELF2L90B provides 9,000 LUTs and 18,000 flip-flops.", decisionGuide: "Suitable for complex designs requiring significant logic resources.", keywords: ["9,000 LUTs", "high capacity"] },
            { question: "How many DSP blocks does it have?", answer: "36 DSP blocks for signal processing applications.", decisionGuide: "Good for designs requiring DSP functionality.", keywords: ["DSP blocks", "signal processing"] },
            { question: "What is the maximum I/O count?", answer: "Up to 376 user I/O pins available.", decisionGuide: "Excellent for designs with many external interfaces.", keywords: ["I/O count", "pins"] },
            { question: "Is it suitable for video processing?", answer: "Yes, sufficient logic and I/O for basic video processing.", decisionGuide: "Consider EAGLE series for advanced video applications.", keywords: ["video processing", "applications"] },
            { question: "What package options are available?", answer: "Available in BGA-400 and larger packages.", decisionGuide: "Choose package based on I/O and PCB requirements.", keywords: ["BGA-400", "package options"] }
          ],
          faeReview: { author: "LiTong FAE Team", content: "The ELF2L90B is the flagship of the ELF2 series, offering maximum capacity in the low-power lineup. We've used this device successfully in multi-axis motor control and complex communication gateway applications. The 9K LUTs provide ample resources for sophisticated designs, while maintaining the cost advantages and low power of the ELF series. The 376 I/Os support complex board designs with multiple interfaces.", highlight: "High capacity, rich I/O, cost-effective" },
          alternativeParts: [
            { partNumber: "ELF2L45B", comparison: "ELF2L45B has 4,480 LUTs vs 9,000 LUTs", reason: "Lower cost alternative", useCase: "Designs with lower logic requirements" },
            { partNumber: "EG4S20BG256", comparison: "EG4S20 has 20K LUTs vs 9K LUTs with SerDes", reason: "Higher performance option", useCase: "High-speed interface requirements" }
          ],
          companionParts: [
            { partNumber: "ELF2-DK-ADV", relationship: "Development Kit", description: "Advanced development kit for ELF2L90B" },
            { partNumber: "AL-PCIe-IP", relationship: "IP Core", description: "PCIe interface IP core" }
          ]
        }
      ]
    },
    {
      id: "cpld-devices",
      name: "CPLD Devices",
      slug: "cpld-devices",
      description: "Anlogic CPLD devices for simple logic and glue logic applications",
      shortDescription: "Low-cost CPLD devices for simple logic applications",
      icon: "cpld",
      parameters: ["Macrocells", "I/O Count", "Voltage", "Package"],
      selectionGuideLink: { url: "/anlogic/support/cpld-selection-guide.html", text: "CPLD Selection Guide" },
      series: [
        { name: "AL Series CPLD", description: "Low-cost CPLDs", features: ["32-256 macrocells", "Low power", "Instant-on"] }
      ],
      selectionGuide: { title: "CPLD Selection Guide", description: "How to select the right Anlogic CPLD", articleId: "cpld-selection", articleLink: "/anlogic/support/cpld-selection-guide.html" },
      faqs: [
        { question: "When should I use a CPLD instead of FPGA?", answer: "Use CPLD for simple glue logic, instant-on requirements, or very low power needs.", decisionGuide: "CPLD for simple designs, FPGA for complex designs.", keywords: ["CPLD vs FPGA", "glue logic"] },
        { question: "What is instant-on capability?", answer: "CPLDs are active immediately at power-up without configuration delay.", decisionGuide: "Essential for power sequencing and boot management.", keywords: ["instant-on", "power-up"] },
        { question: "How many macrocells do I need?", answer: "Simple designs need 32-64 macrocells, complex designs up to 256.", decisionGuide: "Estimate logic requirements before selecting.", keywords: ["macrocells", "logic capacity"] },
        { question: "Are CPLDs reprogrammable?", answer: "Yes, Anlogic CPLDs are in-system programmable.", decisionGuide: "Allows design updates in the field.", keywords: ["ISP", "reprogrammable"] },
        { question: "What voltage levels are supported?", answer: "1.8V, 2.5V, and 3.3V operation supported.", decisionGuide: "Choose based on system voltage requirements.", keywords: ["voltage", "levels"] }
      ],
      products: [
        {
          partNumber: "AL3A10B",
          name: "AL3A Series 128 Macrocell CPLD",
          description: "AL3A series CPLD with 128 macrocells, low power consumption, and instant-on capability",
          shortDescription: "128 macrocell CPLD for glue logic and simple control",
          features: ["128 macrocells", "100 I/Os", "1.8V-3.3V operation", "Instant-on", "TQFP-100 package"],
          specifications: { "Macrocells": "128", "I/O Count": "100", "Voltage": "1.8V-3.3V", "Standby Current": "<100uA", "Package": "TQFP-100" },
          applications: ["Glue logic", "Bus interface", "Power sequencing", "Configuration management"],
          faqs: [
            { question: "How many macrocells does AL3A10B have?", answer: "AL3A10B provides 128 macrocells.", decisionGuide: "Suitable for medium-complexity glue logic.", keywords: ["128 macrocells", "capacity"] },
            { question: "What is the standby power consumption?", answer: "Ultra-low standby current less than 100uA.", decisionGuide: "Excellent for battery-powered applications.", keywords: ["low power", "standby current"] },
            { question: "Does it support in-system programming?", answer: "Yes, JTAG interface for in-system programming.", decisionGuide: "Allows field updates and debugging.", keywords: ["ISP", "JTAG", "programming"] },
            { question: "What is instant-on capability?", answer: "Device is active immediately at power-up.", decisionGuide: "Critical for power management and boot sequencing.", keywords: ["instant-on", "power-up"] },
            { question: "Is it pin-compatible with other CPLDs?", answer: "Pin-compatible with common industry-standard CPLDs.", decisionGuide: "Easy migration from other vendors.", keywords: ["pin compatible", "migration"] }
          ],
          faeReview: { author: "LiTong FAE Team", content: "The AL3A10B is an excellent CPLD for glue logic and interface applications. We've used it extensively for power sequencing, configuration management, and bus interface designs. The instant-on capability is crucial for power management circuits, and the low standby power makes it suitable for battery-operated equipment. The 128 macrocells provide ample resources for most glue logic needs, and the TQFP package is easy to work with for prototyping and production.", highlight: "Instant-on, low power, easy to use" },
          alternativeParts: [
            { partNumber: "AL3A05B", comparison: "AL3A05B has 64 macrocells vs 128", reason: "Lower capacity option", useCase: "Simple glue logic applications" },
            { partNumber: "ELF2L15B", comparison: "ELF2L15B is FPGA with 1.5K LUTs", reason: "Upgrade path to FPGA", useCase: "Future expansion needs" }
          ],
          companionParts: [
            { partNumber: "AL3A-DK", relationship: "Development Kit", description: "CPLD development and programming kit" },
            { partNumber: "ELF2L45B", relationship: "FPGA Companion", description: "FPGA for main logic with CPLD for configuration" }
          ]
        },
        {
          partNumber: "AL3A05B",
          name: "AL3A Series 64 Macrocell CPLD",
          description: "AL3A series CPLD with 64 macrocells for simple glue logic applications",
          shortDescription: "64 macrocell CPLD for simple glue logic",
          features: ["64 macrocells", "54 I/Os", "1.8V-3.3V operation", "Instant-on", "TQFP-64 package"],
          specifications: { "Macrocells": "64", "I/O Count": "54", "Voltage": "1.8V-3.3V", "Standby Current": "<50uA", "Package": "TQFP-64" },
          applications: ["Simple glue logic", "Level translation", "Signal buffering", "Basic control"],
          faqs: [
            { question: "What is the macrocell count?", answer: "AL3A05B provides 64 macrocells.", decisionGuide: "Ideal for simple glue logic designs.", keywords: ["64 macrocells", "simple logic"] },
            { question: "How many I/O pins are available?", answer: "54 user I/O pins available.", decisionGuide: "Sufficient for small interface designs.", keywords: ["54 I/Os", "pins"] },
            { question: "What is the power consumption?", answer: "Very low power, standby current <50uA.", decisionGuide: "Excellent for power-sensitive applications.", keywords: ["low power", "50uA"] },
            { question: "Is programming software free?", answer: "Yes, included in Tang Dynasty software.", decisionGuide: "No additional software cost.", keywords: ["free software", "Tang Dynasty"] },
            { question: "Can it replace discrete logic?", answer: "Yes, replaces multiple TTL/CMOS devices.", decisionGuide: "Reduces board space and improves reliability.", keywords: ["discrete logic", "integration"] }
          ],
          faeReview: { author: "LiTong FAE Team", content: "The AL3A05B is perfect for simple glue logic and discrete logic replacement. We've used it to replace multiple 74-series logic chips, reducing board space and improving reliability. The 64 macrocells handle basic decoding, level shifting, and signal conditioning tasks. The ultra-low power consumption and instant-on make it ideal for portable and battery-powered equipment. The small TQFP-64 package fits well in compact designs.", highlight: "Ultra-low power, compact, cost-effective" },
          alternativeParts: [
            { partNumber: "AL3A10B", comparison: "AL3A10B has 128 macrocells vs 64", reason: "Higher capacity option", useCase: "More complex glue logic needs" },
            { partNumber: "ELF2L15B", comparison: "ELF2L15B FPGA with more resources", reason: "FPGA alternative", useCase: "Future expansion requirements" }
          ],
          companionParts: [
            { partNumber: "AL3A-DK", relationship: "Development Kit", description: "CPLD development kit" },
            { partNumber: "ELF2L45B", relationship: "System Companion", description: "FPGA for complex logic in same system" }
          ]
        }
      ]
    }
  ]
};

// Write products.json
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('Created products.json');

// Create solutions.json
const solutionsData = {
  seoTitle: "Anlogic FPGA Solutions - Industrial/Communication/Video | LiTong",
  seoDescription: "Anlogic FPGA solutions for industrial control, communication, video processing, and AI acceleration. Complete design solutions and technical support.",
  seoKeywords: ["Anlogic solutions", "FPGA solutions", "industrial control", "communication FPGA", "video processing"],
  faqs: [
    {
      question: "What solutions does Anlogic provide?",
      answer: "Anlogic provides solutions for industrial control, communication, video processing, and AI acceleration.",
      decisionGuide: "Contact FAE for solution recommendations.",
      keywords: ["solutions", "applications"]
    },
    {
      question: "Are reference designs available?",
      answer: "Yes, Anlogic provides reference designs for common applications.",
      decisionGuide: "Reference designs accelerate product development.",
      keywords: ["reference designs", "examples"]
    },
    {
      question: "Does Anlogic offer customization services?",
      answer: "Yes, IP core customization and design services are available.",
      decisionGuide: "Contact FAE for customization requirements.",
      keywords: ["customization", "services"]
    },
    {
      question: "What technical support is available?",
      answer: "FAE support, documentation, training, and community forums.",
      decisionGuide: "Leverage comprehensive technical support.",
      keywords: ["technical support", "FAE"]
    },
    {
      question: "How do I get started with Anlogic solutions?",
      answer: "Get a development kit and download Tang Dynasty software.",
      decisionGuide: "Start with evaluation kit for proof of concept.",
      keywords: ["getting started", "development kit"]
    }
  ],
  solutions: [
    {
      id: "industrial-control-fpga",
      title: "Industrial Control FPGA Solution",
      slug: "industrial-control-fpga",
      description: "Complete FPGA solution for PLC, motion control, and industrial communication",
      shortDescription: "Industrial control solution with FPGA-based processing",
      longDescription: "The Industrial Control FPGA Solution provides a complete hardware and software platform for industrial automation applications. Based on Anlogic ELF2 series FPGAs, this solution enables high-performance control algorithms, multi-axis motion control, and industrial communication protocols. The solution includes reference designs for PLC functionality, motor control, and fieldbus interfaces. Key features include deterministic real-time processing, rich I/O interfaces for sensors and actuators, and support for industrial Ethernet protocols. The solution is ideal for factory automation, process control, and machine control applications.",
      icon: "industrial",
      industry: "Industrial Automation",
      applications: ["PLC controllers", "Motion control", "Industrial gateways", "Machine control"],
      features: ["Real-time processing", "Multi-axis control", "Protocol support", "Rich I/O"],
      coreAdvantages: ["Deterministic performance", "Flexible configuration", "Cost-effective", "Reliable operation"],
      components: [
        { type: "Main FPGA", productId: "ELF2L45B", description: "Main processing FPGA for control algorithms" },
        { type: "Interface FPGA", productId: "AL3A10B", description: "CPLD for I/O expansion and management" }
      ],
      bomList: [
        { item: "ELF2L45B", quantity: 1, description: "Main control FPGA" },
        { item: "AL3A10B", quantity: 1, description: "I/O management CPLD" },
        { item: "ELF2-DK", quantity: 1, description: "Development kit" }
      ],
      benefits: ["Reduced development time", "Proven architecture", "Scalable design", "Technical support"],
      specifications: { "Processing": "Real-time", "I/O Count": "300+", "Protocols": "EtherCAT, Profinet", "Temperature": "-40 to +85°C" },
      technicalSpecs: { "Clock Speed": "100MHz", "Response Time": "<1us", "Position Resolution": "32-bit", "Update Rate": "10kHz" },
      customerCases: [
        { customer: "Industrial Automation Company", challenge: "Needed cost-effective PLC solution", solution: "Implemented ELF2L45B based PLC", result: "40% cost reduction, faster response" }
      ],
      faqs: [
        { question: "What protocols are supported?", answer: "EtherCAT, Profinet, Modbus, CANopen supported.", decisionGuide: "Check specific protocol requirements.", keywords: ["protocols", "EtherCAT"] },
        { question: "How many axes can be controlled?", answer: "Up to 16 axes with single FPGA.", decisionGuide: "Sufficient for most machine control.", keywords: ["motion control", "axes"] },
        { question: "Is functional safety supported?", answer: "Architecture supports SIL2/SIL3 implementations.", decisionGuide: "Additional safety certification required.", keywords: ["functional safety", "SIL"] },
        { question: "What development tools are needed?", answer: "Tang Dynasty software and development kit.", decisionGuide: "Free software download available.", keywords: ["development tools", "Tang Dynasty"] },
        { question: "Can it replace existing PLC?", answer: "Yes, compatible with standard PLC programming.", decisionGuide: "Migration support available.", keywords: ["PLC replacement", "migration"] }
      ],
      faeInsights: { author: "LiTong FAE Team", content: "This industrial control solution has been successfully deployed in multiple factory automation projects. The ELF2L45B provides excellent performance for control algorithms while maintaining cost advantages. Key success factors include deterministic real-time performance and rich industrial interface support.", keyTakeaways: ["Proven in production", "Cost-effective", "Reliable performance"], decisionFramework: { steps: ["Define requirements", "Select components", "Develop firmware", "Test and validate"] } },
      seoTitle: "Industrial Control FPGA Solution - Anlogic | LiTong",
      seoDescription: "Industrial control FPGA solution for PLC and motion control. Real-time processing with Anlogic FPGAs.",
      seoKeywords: ["industrial control", "FPGA PLC", "motion control", "factory automation"]
    },
    {
      id: "communication-interface-fpga",
      title: "Communication Interface FPGA Solution",
      slug: "communication-interface-fpga",
      description: "FPGA solution for protocol conversion, network acceleration, and communication interfaces",
      shortDescription: "Communication interface solution with protocol flexibility",
      longDescription: "The Communication Interface FPGA Solution enables flexible protocol handling and network acceleration for communication equipment. Based on Anlogic EAGLE series FPGAs with high-speed transceivers, this solution supports multiple communication standards including Ethernet, PCIe, and custom protocols. The solution includes reference designs for protocol conversion gateways, network interface cards, and communication accelerators. Key features include multi-gigabit data rates, flexible protocol processing, and low-latency operation. Ideal for telecom equipment, network appliances, and industrial communication systems.",
      icon: "communication",
      industry: "Communication",
      applications: ["Protocol conversion", "Network acceleration", "Interface cards", "Gateway devices"],
      features: ["High-speed interfaces", "Protocol flexibility", "Low latency", "Scalable bandwidth"],
      coreAdvantages: ["Multi-protocol support", "High performance", "Flexible architecture", "Cost optimization"],
      components: [
        { type: "Main FPGA", productId: "EG4S20BG256", description: "High-performance FPGA with SerDes" },
        { type: "Configuration", productId: "AL3A05B", description: "CPLD for system configuration" }
      ],
      bomList: [
        { item: "EG4S20BG256", quantity: 1, description: "Main FPGA with transceivers" },
        { item: "AL3A05B", quantity: 1, description: "Configuration CPLD" },
        { item: "EAGLE-DK", quantity: 1, description: "Development kit" }
      ],
      benefits: ["Protocol flexibility", "High throughput", "Reduced time-to-market", "Lower cost"],
      specifications: { "Data Rate": "10Gbps", "Latency": "<1us", "Protocols": "Ethernet, PCIe", "Interfaces": "SFP+, RJ45" },
      technicalSpecs: { "SerDes Rate": "10.3125Gbps", "PCIe Gen": "Gen3 x4", "Ethernet": "10GbE", "Switching": "<500ns" },
      customerCases: [
        { customer: "Telecom Equipment Maker", challenge: "Needed flexible protocol gateway", solution: "Implemented EAGLE-based gateway", result: "50% cost reduction, faster deployment" }
      ],
      faqs: [
        { question: "What data rates are supported?", answer: "Up to 10Gbps per channel with SerDes.", decisionGuide: "Sufficient for most communication apps.", keywords: ["data rate", "10Gbps"] },
        { question: "Which protocols can be implemented?", answer: "Ethernet, PCIe, SATA, custom protocols.", decisionGuide: "Flexible protocol implementation.", keywords: ["protocols", "Ethernet", "PCIe"] },
        { question: "What is the latency performance?", answer: "Sub-microsecond latency achievable.", decisionGuide: "Excellent for low-latency apps.", keywords: ["latency", "performance"] },
        { question: "Are reference designs available?", answer: "Yes, for common protocol implementations.", decisionGuide: "Accelerates development.", keywords: ["reference designs", "examples"] },
        { question: "Can it replace ASSP devices?", answer: "Yes, with greater flexibility.", decisionGuide: "FPGA vs ASSP trade-off analysis.", keywords: ["ASSP replacement", "flexibility"] }
      ],
      faeInsights: { author: "LiTong FAE Team", content: "This communication solution addresses the need for flexible, high-performance interfaces. The EAGLE series SerDes performance rivals international competitors at significantly lower cost. Successful deployments include 5G small cells and industrial gateways.", keyTakeaways: ["High performance", "Protocol flexibility", "Cost advantage"], decisionFramework: { steps: ["Define interface requirements", "Select FPGA", "Implement protocols", "Validate performance"] } },
      seoTitle: "Communication Interface FPGA Solution - Anlogic | LiTong",
      seoDescription: "Communication interface FPGA solution for protocol conversion and network acceleration. High-speed transceivers.",
      seoKeywords: ["communication FPGA", "protocol conversion", "network acceleration", "high-speed interfaces"]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('Created solutions.json');

// Create support.json
const supportData = {
  seoTitle: "Anlogic Technical Support - Documentation/Tools/Training | LiTong",
  seoDescription: "Anlogic technical support resources including documentation, EDA tools, training materials, and FAE support.",
  seoKeywords: ["Anlogic support", "technical documentation", "Tang Dynasty", "FPGA training"],
  faqs: [
    {
      question: "What support resources are available?",
      answer: "Documentation, software tools, training, and FAE support available.",
      decisionGuide: "Multiple support channels available.",
      keywords: ["support resources", "documentation"]
    },
    {
      question: "Is Tang Dynasty software free?",
      answer: "Yes, free download from Anlogic website.",
      decisionGuide: "No cost for development software.",
      keywords: ["Tang Dynasty", "free software"]
    },
    {
      question: "Are training courses available?",
      answer: "Online tutorials and hands-on training available.",
      decisionGuide: "Training accelerates learning curve.",
      keywords: ["training", "tutorials"]
    },
    {
      question: "How do I contact FAE support?",
      answer: "Contact LiTong for local FAE support.",
      decisionGuide: "FAE support for design assistance.",
      keywords: ["FAE", "technical support"]
    }
  ],
  articles: [
    {
      id: "fpga-selection-guide",
      title: "Anlogic FPGA Selection Guide",
      slug: "fpga-selection-guide",
      category: "Design Guide",
      description: "Comprehensive guide for selecting the right Anlogic FPGA for your application",
      shortDescription: "How to choose the right Anlogic FPGA device",
      contentSections: [
        { heading: "Understanding Logic Requirements", content: "Estimate your design's logic requirements by counting registers, combinational logic, and state machines. Small designs (<5K LUTs) can use ELF2 series, medium designs (5K-20K) need larger ELF2 or small EAGLE, large designs (>20K) require EAGLE series. Consider future expansion needs when selecting device size." },
        { heading: "I/O Requirements Analysis", content: "Count required I/O pins including data, control, clock, and debug signals. Consider voltage levels and I/O standards needed. High-speed interfaces like DDR, PCIe, or Ethernet require specific I/O capabilities. Check device pinout for bank organization and voltage compatibility." },
        { heading: "Memory and DSP Requirements", content: "Calculate on-chip memory needs for buffers, FIFOs, and lookup tables. DSP requirements depend on signal processing complexity. Check available block RAM and DSP slice count. Consider external memory interfaces for large memory requirements." },
        { heading: "Power and Thermal Considerations", content: "Estimate power consumption using power calculator tools. Consider thermal design for high-power devices. Check power supply requirements and sequencing. Industrial temperature range may require specific device grades." }
      ],
      faqs: [
        { question: "How do I estimate LUT requirements?", answer: "Start with similar reference designs or use estimation tools. Add 20-30% margin for future expansion.", decisionGuide: "Better to over-estimate than under-estimate.", keywords: ["LUT estimation", "sizing"] },
        { question: "What if my design grows beyond selected device?", answer: "Anlogic offers pin-compatible upgrades within series. Migration path to larger devices available.", decisionGuide: "Plan for growth in initial selection.", keywords: ["migration", "upgrade"] },
        { question: "Are development kits recommended?", answer: "Yes, essential for evaluation and software learning.", decisionGuide: "Get development kit before committing to design.", keywords: ["development kit", "evaluation"] }
      ],
      author: "LiTong FAE Team",
      publishDate: "2024-01-15",
      readTime: "15 min",
      relatedArticles: ["tang-dynasty-tutorial", "fpga-design-best-practices"],
      faeInsights: { author: "LiTong FAE Team", content: "Device selection is critical for project success. Common mistakes include under-sizing logic capacity and overlooking I/O voltage requirements. Always use development kits for proof of concept before finalizing device selection.", keyTakeaways: ["Size for growth", "Check I/O compatibility", "Use dev kits"], relatedProducts: ["ELF2L45B", "ELF2L90B", "EG4S20BG256"] },
      seoTitle: "Anlogic FPGA Selection Guide - Device Selection | LiTong",
      seoDescription: "Comprehensive guide for selecting Anlogic FPGA devices. Logic capacity, I/O, memory, and power considerations.",
      seoKeywords: ["FPGA selection", "device selection", "Anlogic guide"]
    },
    {
      id: "tang-dynasty-tutorial",
      title: "Tang Dynasty Software Tutorial",
      slug: "tang-dynasty-tutorial",
      category: "Software Guide",
      description: "Step-by-step tutorial for using Tang Dynasty EDA software for FPGA development",
      shortDescription: "Getting started with Tang Dynasty FPGA design software",
      contentSections: [
        { heading: "Installation and Setup", content: "Download Tang Dynasty software from Anlogic website. Install on Windows PC with recommended specifications. Configure license settings for free use. Set up device support packages for target FPGAs." },
        { heading: "Creating a New Project", content: "Start TD software and create new project. Select target device family and specific part number. Configure project settings and directories. Add source files (Verilog/VHDL) to project." },
        { heading: "Design Entry and Synthesis", content: "Enter design using HDL editor or schematic capture. Run synthesis to convert HDL to gate-level netlist. Review synthesis reports for resource utilization and timing. Fix any synthesis warnings or errors." },
        { heading: "Implementation and Bitstream Generation", content: "Run placement and routing to map design to FPGA resources. Analyze timing reports to verify performance requirements. Generate bitstream file for FPGA configuration. Program FPGA using USB programmer." }
      ],
      faqs: [
        { question: "Is Tang Dynasty free to use?", answer: "Yes, free download with full functionality.", decisionGuide: "No license cost for development.", keywords: ["free", "license"] },
        { question: "What file formats are supported?", answer: "Verilog, VHDL, EDIF, and schematic entry.", decisionGuide: "Flexible design entry options.", keywords: ["Verilog", "VHDL", "file formats"] },
        { question: "How do I debug my design?", content: "Use integrated logic analyzer and simulation tools.", decisionGuide: "Built-in debugging capabilities.", keywords: ["debug", "logic analyzer"] }
      ],
      author: "LiTong FAE Team",
      publishDate: "2024-01-20",
      readTime: "20 min",
      relatedArticles: ["fpga-selection-guide", "fpga-design-best-practices"],
      faeInsights: { author: "LiTong FAE Team", content: "Tang Dynasty provides a familiar environment for FPGA designers. The workflow is similar to Xilinx ISE/Vivado and Intel Quartus. Most engineers become productive within a few days of using the software.", keyTakeaways: ["Familiar workflow", "Free to use", "Good documentation"], relatedProducts: ["ELF2-DK", "EAGLE-DK"] },
      seoTitle: "Tang Dynasty Tutorial - FPGA Design Software | LiTong",
      seoDescription: "Tang Dynasty EDA software tutorial for Anlogic FPGA development. Step-by-step guide.",
      seoKeywords: ["Tang Dynasty tutorial", "FPGA software", "EDA tools"]
    },
    {
      id: "fpga-design-best-practices",
      title: "FPGA Design Best Practices",
      slug: "fpga-design-best-practices",
      category: "Design Guide",
      description: "Best practices for designing with Anlogic FPGAs including coding guidelines and optimization techniques",
      shortDescription: "Best practices for efficient FPGA design",
      contentSections: [
        { heading: "Coding Guidelines", content: "Use synchronous design practices with clocked registers. Avoid combinational loops and latches. Use meaningful signal names and comments. Follow industry-standard coding styles for maintainability." },
        { heading: "Clocking Strategies", content: "Minimize clock domains to simplify timing closure. Use clock enables instead of gated clocks. Consider PLL usage for frequency synthesis. Plan clock distribution for skew minimization." },
        { heading: "Resource Optimization", content: "Share resources like multipliers and memory when possible. Use vendor-specific primitives for critical functions. Balance speed vs. area trade-offs appropriately. Consider power consumption in resource selection." },
        { heading: "Timing Closure", content: "Set realistic timing constraints based on requirements. Use timing analysis reports to identify critical paths. Apply appropriate constraints for I/O timing. Consider pipelining for high-speed designs." }
      ],
      faqs: [
        { question: "What coding style is recommended?", answer: "Synchronous, readable, well-commented code.", decisionGuide: "Maintainability is as important as functionality.", keywords: ["coding style", "guidelines"] },
        { question: "How do I achieve timing closure?", content: "Proper constraints, pipelining, and optimization.", decisionGuide: "Start with good constraints, iterate as needed.", keywords: ["timing closure", "constraints"] },
        { question: "What about power optimization?", answer: "Clock gating, efficient coding, proper device selection.", decisionGuide: "Consider power from the start of design.", keywords: ["power optimization", "low power"] }
      ],
      author: "LiTong FAE Team",
      publishDate: "2024-02-01",
      readTime: "18 min",
      relatedArticles: ["fpga-selection-guide", "tang-dynasty-tutorial"],
      faeInsights: { author: "LiTong FAE Team", content: "Following best practices from the start saves significant debug time. Most design issues stem from poor coding practices or inadequate timing constraints. Invest time in proper design methodology.", keyTakeaways: ["Synchronous design", "Proper constraints", "Code quality"], relatedProducts: ["ELF2L45B", "EG4S20BG256"] },
      seoTitle: "FPGA Design Best Practices - Anlogic | LiTong",
      seoDescription: "FPGA design best practices for Anlogic devices. Coding guidelines, timing closure, and optimization.",
      seoKeywords: ["FPGA design", "best practices", "coding guidelines", "timing closure"]
    },
    {
      id: "industrial-fpga-applications",
      title: "Industrial FPGA Applications",
      slug: "industrial-fpga-applications",
      category: "Application Note",
      description: "Application note for using Anlogic FPGAs in industrial control and automation systems",
      shortDescription: "Industrial control applications with Anlogic FPG