const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'anlogic');

// Read all JSON files
const brandData = JSON.parse(fs.readFileSync(path.join(dataDir, 'brand.json'), 'utf8'));
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'solutions.json'), 'utf8'));
const supportData = JSON.parse(fs.readFileSync(path.join(dataDir, 'support.json'), 'utf8'));

// Update brand.json - already mostly English, just update Chinese fields
brandData.chineseName = "Anlogic Technology";
brandData.seoTitle = "Anlogic FPGA - Programmable Logic Solutions | LiTong Distributor";
brandData.seoDescription = "Anlogic FPGA and CPLD devices for industrial, communication, and consumer applications. High-performance programmable logic solutions from authorized distributor.";
brandData.seoKeywords = [
  "Anlogic FPGA",
  "Anlogic CPLD",
  "programmable logic",
  "FPGA solutions",
  "industrial FPGA",
  "communication FPGA",
  "Anlogic distributor",
  "Anlogic selection"
];

// Update FAQs to English
brandData.faqs = [
  {
    "question": "What are the main product families of Anlogic?",
    "answer": "Anlogic's main product families include: 1) ELF Series - Low-cost, low-power FPGAs for consumer and industrial applications, featuring 1K-10K LUTs, embedded Flash, and rich I/O resources; 2) EAGLE Series - High-performance FPGAs for communication and video processing, featuring 10K-100K+ LUTs, high-speed transceivers, and DSP blocks; 3) PHOENIX Series - High-end FPGAs for AI acceleration and high-performance computing; 4) CPLD Series - Complex Programmable Logic Devices for simple logic applications; 5) Tang Dynasty EDA Software - Complete design environment for FPGA development including synthesis, placement, routing, and debugging tools. All products are supported by comprehensive development kits and technical documentation.",
    "decisionGuide": "Contact our FAE team to discuss which Anlogic product family best fits your application requirements.",
    "keywords": ["Anlogic products", "ELF series", "EAGLE series", "FPGA families"]
  },
  {
    "question": "What are the key features of Anlogic ELF Series FPGAs?",
    "answer": "Anlogic ELF Series FPGAs feature: 1) Low power consumption - optimized for battery-powered and portable applications; 2) Embedded Flash - non-volatile configuration storage eliminates external configuration memory; 3) Rich I/O resources - support for various I/O standards including LVDS, MIPI, and DDR; 4) DSP blocks - dedicated hardware multipliers for signal processing applications; 5) Small form factors - available in QFN, BGA, and CSP packages; 6) Cost-effective pricing - competitive pricing for high-volume applications. The ELF series is ideal for industrial control, consumer electronics, IoT devices, and communication interfaces. LUT capacity ranges from 1,000 to 10,000, suitable for medium-complexity designs.",
    "decisionGuide": "Choose ELF series for cost-sensitive, low-power applications requiring 1K-10K LUTs.",
    "keywords": ["ELF series", "low power FPGA", "embedded Flash", "cost-effective"]
  },
  {
    "question": "What are the key features of Anlogic EAGLE Series FPGAs?",
    "answer": "Anlogic EAGLE Series FPGAs feature: 1) High performance - advanced architecture with 10K-100K+ LUTs for complex designs; 2) High-speed transceivers - multi-gigabit SerDes for high-speed communication; 3) Rich DSP resources - dedicated DSP slices for high-performance signal processing; 4) Large memory blocks - embedded RAM blocks for data buffering and storage; 5) PCIe support - integrated PCIe hard IP for high-speed connectivity; 6) Video processing - dedicated video processing engines for 4K/8K video applications. The EAGLE series is ideal for communication infrastructure, video processing, AI acceleration, and high-performance industrial control. Advanced packages support high-speed interfaces and large-scale designs.",
    "decisionGuide": "Choose EAGLE series for high-performance applications requiring 10K+ LUTs and high-speed interfaces.",
    "keywords": ["EAGLE series", "high performance FPGA", "SerDes", "DSP", "PCIe"]
  },
  {
    "question": "What is Tang Dynasty EDA Software?",
    "answer": "Tang Dynasty (TD) is Anlogic's proprietary EDA software suite for FPGA design and development. Key features include: 1) Complete design flow - supports design entry, synthesis, placement, routing, and bitstream generation; 2) Multiple input formats - supports Verilog, VHDL, and schematic entry; 3) IP integration - includes library of commonly used IP cores; 4) Timing analysis - static timing analysis with detailed reports; 5) Power analysis - power estimation and optimization tools; 6) Debug capabilities - integrated logic analyzer for in-system debugging; 7) Device support - supports all Anlogic FPGA and CPLD devices. The software is free to download and use, with comprehensive documentation and tutorials. TD software provides a familiar design environment for engineers experienced with other FPGA vendors' tools.",
    "decisionGuide": "Download Tang Dynasty software from Anlogic website for free FPGA development.",
    "keywords": ["Tang Dynasty", "EDA software", "FPGA design", "development tools"]
  },
  {
    "question": "How do Anlogic FPGAs compare to Xilinx and Intel FPGAs?",
    "answer": "Anlogic FPGAs offer competitive advantages compared to Xilinx and Intel: 1) Cost - Anlogic FPGAs are typically 30-50% lower cost than equivalent Xilinx/Intel devices; 2) Power consumption - optimized architecture provides lower static and dynamic power; 3) Embedded Flash - many Anlogic devices include non-volatile configuration memory; 4) Local support - strong technical support in China with fast response times; 5) Supply chain - secure domestic supply chain for Chinese customers; 6) Pin compatibility - some Anlogic devices are pin-compatible with popular Xilinx/Intel devices for easy migration. Performance-wise, Anlogic FPGAs are competitive for most industrial, consumer, and communication applications. For cutting-edge applications requiring the highest performance or largest devices, Xilinx/Intel may still be preferred.",
    "decisionGuide": "Consider Anlogic for cost-sensitive, medium-performance applications. Contact FAE for migration assessment.",
    "keywords": ["Xilinx comparison", "Intel comparison", "FPGA alternatives", "cost advantage"]
  },
  {
    "question": "What development kits does Anlogic offer?",
    "answer": "Anlogic offers comprehensive development kits for rapid prototyping and evaluation: 1) ELF Development Kits - include ELF FPGA device, USB programmer, example designs, and documentation; 2) EAGLE Development Kits - high-performance kits with EAGLE FPGA, DDR memory, high-speed interfaces, and expansion connectors; 3) Application-specific kits - video processing kits, communication kits, and industrial control kits; 4) All kits include: FPGA development board, USB programming cable, power supply, example projects, user manual, and technical support access. Development kits are available through LiTong and authorized distributors. Custom development board design services are also available for volume customers.",
    "decisionGuide": "Choose development kit based on your target FPGA series and application requirements.",
    "keywords": ["development kits", "evaluation boards", "FPGA prototyping"]
  },
  {
    "question": "What are the typical applications of Anlogic FPGAs?",
    "answer": "Anlogic FPGAs are used in diverse applications: 1) Industrial control - PLC, motion control, machine vision, industrial communication protocols; 2) Communication - baseband processing, protocol conversion, network acceleration, 5G small cells; 3) Consumer electronics - video processing, image enhancement, display interfaces, IoT gateways; 4) Automotive electronics - ADAS, infotainment, CAN/LIN interfaces, sensor fusion; 5) AI acceleration - neural network inference, edge AI processing, machine learning; 6) Video processing - 4K/8K video encoding/decoding, image processing, display control; 7) Medical equipment - ultrasound imaging, patient monitoring, diagnostic equipment. Anlogic provides reference designs and IP cores for many of these applications.",
    "decisionGuide": "Anlogic FPGAs suit most programmable logic applications. Contact FAE for application-specific recommendations.",
    "keywords": ["applications", "industrial control", "communication", "video processing", "AI"]
  },
  {
    "question": "What technical support does Anlogic provide?",
    "answer": "Anlogic provides comprehensive technical support: 1) Documentation - complete datasheets, user guides, application notes, and reference designs; 2) Software support - free Tang Dynasty EDA software with updates and technical support; 3) Training - online tutorials, webinars, and hands-on training courses; 4) FAE support - field application engineers for design consultation and troubleshooting; 5) Community support - active user forums and knowledge base; 6) Customization services - IP core customization and reference design modification; 7) Quality support - failure analysis and quality documentation. LiTong, as an authorized distributor, provides local technical support, design services, and supply chain management for Anlogic products.",
    "decisionGuide": "Leverage Anlogic and LiTong technical support for successful FPGA implementation.",
    "keywords": ["technical support", "FAE", "training", "documentation"]
  }
];

// Update products.json to English
productsData.seoTitle = "Anlogic FPGA Products - ELF/EAGLE/CPLD Series | LiTong Distributor";
productsData.seoDescription = "Browse Anlogic FPGA devices, CPLD devices, development kits, and IP cores. Technical specifications, pricing, and availability from authorized distributor.";
productsData.seoKeywords = ["Anlogic products", "Anlogic FPGA", "ELF series", "EAGLE series", "CPLD", "development kits", "IP cores", "Anlogic distributor"];

productsData.faqs = [
  {
    "question": "What FPGA series does Anlogic offer?",
    "answer": "Anlogic offers ELF Series for low-power applications and EAGLE Series for high-performance applications. ELF series features 1K-10K LUTs with embedded Flash, while EAGLE series offers 10K-100K+ LUTs with high-speed SerDes transceivers.",
    "decisionGuide": "Choose ELF for cost-sensitive applications, EAGLE for high-performance applications.",
    "keywords": ["FPGA series", "ELF", "EAGLE"]
  },
  {
    "question": "What is the difference between ELF and EAGLE series?",
    "answer": "ELF series offers 1K-10K LUTs with embedded Flash for low-power applications. EAGLE series offers 10K-100K+ LUTs with high-speed transceivers for demanding applications requiring PCIe, 10G Ethernet, or DDR4 interfaces.",
    "decisionGuide": "ELF for simple designs, EAGLE for complex high-speed designs.",
    "keywords": ["ELF vs EAGLE", "LUTs", "comparison"]
  },
  {
    "question": "Does Anlogic provide development kits?",
    "answer": "Yes, Anlogic provides comprehensive development kits including FPGA boards, programmers, and example designs for rapid prototyping and evaluation.",
    "decisionGuide": "Get a development kit for evaluation and prototyping.",
    "keywords": ["development kits", "evaluation boards"]
  },
  {
    "question": "What IP cores are available from Anlogic?",
    "answer": "Anlogic provides various IP cores including communication interfaces (PCIe, Ethernet, DDR), video processing, DSP functions, and security algorithms.",
    "decisionGuide": "Check IP catalog for available cores for your application.",
    "keywords": ["IP cores", "intellectual property"]
  },
  {
    "question": "How do I select the right Anlogic device?",
    "answer": "Consider logic capacity (LUTs), I/O requirements, power budget, and interface needs when selecting an Anlogic device. Contact FAE for device selection assistance.",
    "decisionGuide": "Contact FAE for device selection assistance.",
    "keywords": ["device selection", "FPGA selection"]
  }
];

// Update category names and descriptions to English
productsData.categories.forEach(cat => {
  if (cat.id === "elf-series-fpga") {
    cat.name = "ELF Series Low-Power FPGA";
    cat.description = "ELF series are low-power, low-cost FPGAs with 1K-10K LUTs and embedded Flash, ideal for industrial control, consumer electronics, and communication interfaces.";
    cat.shortDescription = "ELF series low-power FPGA, 1K-10K LUTs, embedded Flash, ideal for industrial and consumer applications";
  } else if (cat.id === "eagle-series-fpga") {
    cat.name = "EAGLE Series High-Performance FPGA";
    cat.description = "EAGLE series are high-performance FPGAs with 10K-100K+ LUTs, high-speed SerDes, PCIe Gen3, and DDR4 support for communication infrastructure and AI acceleration.";
    cat.shortDescription = "EAGLE series high-performance FPGA, 10K-100K+ LUTs, high-speed SerDes, PCIe Gen3 support";
  } else if (cat.id === "cpld-devices") {
    cat.name = "CPLD Programmable Logic Devices";
    cat.description = "AL series CPLDs are low-power, instant-on programmable logic devices for glue logic, level translation, and configuration management applications.";
    cat.shortDescription = "AL series CPLD, low-power, instant-on, ideal for glue logic and simple control applications";
  } else if (cat.id === "development-kits") {
    cat.name = "FPGA Development Kits";
    cat.description = "Anlogic provides complete FPGA development kits including development boards, USB programmers, power adapters, example projects, and documentation for rapid prototyping.";
    cat.shortDescription = "Anlogic FPGA development kits with boards, programmers, and example projects for quick start";
  }
});

// Write updated files
fs.writeFileSync(path.join(dataDir, 'brand.json'), JSON.stringify(brandData, null, 2));
console.log('Updated brand.json to English');

fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('Updated products.json to English');

console.log('\nBrand and Products files updated to English!');
console.log('Solutions and Support files need manual translation or additional script.');
