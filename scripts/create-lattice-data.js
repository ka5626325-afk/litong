const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'lattice');

// Ensure directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 1. Create brand.json
const brandData = {
  "name": "lattice",
  "displayName": "Lattice Semiconductor",
  "chineseName": "Lattice Semiconductor",
  "tagline": "Low Power Programmable Solutions for Edge Computing and AI",
  "description": "Lattice Semiconductor is the low power programmable leader, solving customer problems across the network, from the Edge to the Cloud, in the growing communications, computing, industrial, automotive and consumer markets.",
  "longDescription": "Lattice Semiconductor (NASDAQ: LSCC) is the low power programmable leader. We solve customer problems across the network, from the Edge to the Cloud, in the growing communications, computing, industrial, automotive and consumer markets. Our technology, long-standing relationships, and commitment to world-class support lets our customers quickly and easily unleash their innovation to create a smart, secure and connected world. Lattice has been the low power programmable leader for over a decade, with the lowest power FPGAs and the most power efficient AI/ML solutions for Edge Computing. Lattice products are designed to provide the highest performance per watt, enabling customers to meet their power budgets while delivering the functionality required by their applications. With comprehensive solutions stacks for key applications including AI, security, and connectivity, Lattice helps customers accelerate their time to market while reducing power consumption and system cost.",
  "logo": "/assets/brands/lattice/logo.svg",
  "banner": "/assets/brands/lattice/banner.jpg",
  "website": "https://www.latticesemi.com",
  "founded": 1983,
  "headquarters": "Hillsboro, Oregon, USA",
  "employees": "1000+",
  "revenue": "$700M+",
  "coreProducts": [
    "Low Power FPGAs",
    "AI/ML Solutions",
    "Security Solutions",
    "Connectivity Solutions",
    "Software Tools"
  ],
  "industries": [
    "Communications",
    "Computing",
    "Industrial",
    "Automotive",
    "Consumer Electronics",
    "Edge Computing"
  ],
  "certifications": [
    "ISO 9001",
    "ISO 14001",
    "IATF 16949",
    "AEC-Q100",
    "RoHS",
    "REACH"
  ],
  "seoTitle": "Lattice Semiconductor - Low Power FPGA Solutions | LiTong Distributor",
  "seoDescription": "Lattice Semiconductor low power FPGAs for edge computing, AI/ML, security, and connectivity. Authorized distributor with technical support.",
  "seoKeywords": [
    "Lattice Semiconductor",
    "Lattice FPGA",
    "low power FPGA",
    "Edge AI",
    "security solutions",
    "connectivity",
    "Lattice distributor",
    "Lattice selection"
  ],
  "faqs": [
    {
      "question": "What are Lattice Semiconductor's main product families?",
      "answer": "Lattice Semiconductor offers several key product families: 1) Nexus Platform - The industry's first FPGA platform built on 28 nm FD-SOI technology, delivering the lowest power consumption and highest performance; 2) CertusPro-NX - General purpose FPGAs with industry-leading power efficiency and small form factors; 3) Certus-NX - Security-focused FPGAs with hardware root of trust; 4) MachXO3 - Ultra-low power instant-on control FPGAs; 5) MachXO5-NX - Advanced security control FPGAs with enhanced I/O; 6) CrossLink-NX - MIPI D-PHY based bridging and I/O expansion FPGAs; 7) Lattice sensAI - Complete AI/ML solutions for Edge Computing; 8) Lattice mVision - Video interface solutions; 9) Lattice Sentry - Platform firmware resiliency and security solutions. Each family is optimized for specific applications while maintaining Lattice's focus on low power consumption.",
      "decisionGuide": "Contact our FAE team to discuss which Lattice product family best fits your application requirements.",
      "keywords": ["Lattice products", "Nexus platform", "CertusPro", "MachXO", "sensAI", "mVision", "Sentry"]
    },
    {
      "question": "What makes Lattice FPGAs the lowest power solution?",
      "answer": "Lattice FPGAs achieve industry-leading low power through multiple innovations: 1) 28 nm FD-SOI process technology - The Nexus platform uses FD-SOI (Fully Depleted Silicon on Insulator) which provides superior power efficiency compared to bulk CMOS processes; 2) Architecture optimization - Lattice FPGAs are architected from the ground up for low power, with optimized routing, logic elements, and I/O structures; 3) Fine-grained power management - Advanced power gating and dynamic voltage scaling capabilities; 4) Sleep and standby modes - Ultra-low power standby modes with instant wake-up; 5) Hard IP integration - Dedicated hard IP blocks for common functions reduce power compared to soft implementations. Lattice FPGAs typically consume 75% less power than competing solutions, enabling longer battery life and reduced thermal requirements.",
      "decisionGuide": "Choose Lattice for battery-powered, thermally constrained, or energy-efficient applications requiring the lowest power consumption.",
      "keywords": ["low power", "FD-SOI", "power efficiency", "battery life", "thermal"]
    },
    {
      "question": "What is Lattice sensAI and how does it enable Edge AI?",
      "answer": "Lattice sensAI is a complete technology stack that enables AI/ML inference at the Edge. Key components include: 1) Hardware - Low power FPGAs optimized for neural network acceleration with dedicated DSP blocks and high-performance memory interfaces; 2) IP Cores - Pre-built accelerator IP for popular neural network operations including CNNs and RNNs; 3) Software Tools - Neural network compiler that converts models from popular frameworks (TensorFlow, PyTorch, Caffe) into optimized FPGA implementations; 4) Reference Designs - Complete application examples for human presence detection, object counting, facial recognition, and more; 5) Development Kits - Hardware platforms for rapid prototyping. sensAI delivers AI performance with milliwatt power consumption, enabling always-on AI in battery-powered devices. The solution supports INT8 and BFP16 quantization for optimal performance/power trade-offs.",
      "decisionGuide": "Choose Lattice sensAI for battery-powered Edge AI applications requiring always-on inference with milliwatt power consumption.",
      "keywords": ["sensAI", "Edge AI", "machine learning", "neural networks", "AI inference"]
    },
    {
      "question": "What security features do Lattice FPGAs provide?",
      "answer": "Lattice FPGAs provide comprehensive hardware security features: 1) Hardware Root of Trust - Secure boot with immutable bootloader and cryptographic verification; 2) AES-256 Encryption - Bitstream encryption protects intellectual property; 3) ECDSA Authentication - Digital signature verification prevents unauthorized bitstreams; 4) PUF (Physically Unclonable Function) - Device-unique fingerprint for secure key storage; 5) Anti-Tamper Features - Voltage, temperature, and physical tamper detection; 6) Secure Key Storage - Dedicated secure storage for cryptographic keys; 7) Side-Channel Attack Resistance - DPA/SPA resistant cryptographic implementations; 8) Lattice Sentry - Complete platform firmware resiliency solution with runtime protection. These features make Lattice FPGAs ideal for applications requiring high security such as data centers, communications infrastructure, and industrial control systems.",
      "decisionGuide": "Choose Lattice Certus-NX or MachXO5-NX for applications requiring hardware security and root of trust capabilities.",
      "keywords": ["security", "hardware root of trust", "encryption", "authentication", "PUF", "Sentry"]
    },
    {
      "question": "What connectivity solutions does Lattice offer?",
      "answer": "Lattice offers comprehensive connectivity solutions: 1) MIPI D-PHY - CrossLink-NX devices provide high-performance MIPI interfaces for camera and display connectivity, supporting up to 2.5 Gbps per lane; 2) PCIe - Integrated PCIe Gen2/3 hard IP with low power implementation; 3) Gigabit Ethernet - Multiple Ethernet MAC options with RGMII and SGMII interfaces; 4) USB - USB 2.0 device and host controllers; 5) CAN FD - Controller Area Network with Flexible Data-rate for automotive and industrial; 6) I2C/SPI/UART - Standard serial interfaces for system connectivity; 7) Parallel I/O - High-performance parallel interfaces for legacy connectivity; 8) Video Interfaces - HDMI, DisplayPort, and MIPI DSI/CSI support. Lattice's connectivity solutions are optimized for bridging between different interface standards and expanding I/O capabilities in systems.",
      "decisionGuide": "Choose CrossLink-NX for MIPI connectivity, CertusPro-NX for PCIe and high-speed interfaces, MachXO for system management connectivity.",
      "keywords": ["connectivity", "MIPI", "PCIe", "Ethernet", "USB", "video interfaces"]
    },
    {
      "question": "What software tools does Lattice provide for FPGA development?",
      "answer": "Lattice provides comprehensive software tools for FPGA development: 1) Lattice Radiant - The flagship design software for Nexus-based FPGAs, providing synthesis, place and route, timing analysis, and debugging; 2) Lattice Diamond - Design software for MachXO and older device families; 3) Lattice Propel - System design tool for processor-based designs with RISC-V support; 4) sensAI Studio - AI/ML development environment for creating and optimizing neural network models; 5) mVision IP Configurator - Tool for configuring video interface IP; 6) PAC-Designer - Power calculator for accurate power estimation; 7) Programmer - Device programming and configuration software; 8) Reveal Logic Analyzer - Embedded logic analyzer for real-time debugging. All tools are available as free downloads with no license fees required for basic functionality.",
      "decisionGuide": "Download Lattice Radiant for Nexus platform development, sensAI Studio for AI applications, or Diamond for MachXO devices.",
      "keywords": ["Radiant", "Diamond", "Propel", "sensAI Studio", "development tools"]
    },
    {
      "question": "What are typical applications for Lattice FPGAs?",
      "answer": "Lattice FPGAs are used in diverse applications: 1) Edge AI - Always-on human presence detection, object recognition, voice activation in smart home devices; 2) Security - Platform firmware protection, secure boot, hardware root of trust in servers and networking equipment; 3) Smart Vision - Camera interfaces, image processing, video aggregation in surveillance and industrial vision; 4) 5G Infrastructure - ORAN fronthaul, beamforming, network synchronization; 5) Automotive - ADAS sensor aggregation, in-cabin monitoring, LED driver control; 6) Industrial IoT - Sensor aggregation, protocol conversion, motor control; 7) Data Center - Server management, network interface cards, security accelerators; 8) Consumer Electronics - Smartphone camera interfaces, AR/VR displays, smart appliances. Lattice's focus on low power makes their FPGAs ideal for battery-powered and thermally constrained applications.",
      "decisionGuide": "Lattice FPGAs excel in Edge AI, security, smart vision, and connectivity applications requiring low power consumption.",
      "keywords": ["applications", "Edge AI", "security", "smart vision", "5G", "automotive", "IoT"]
    },
    {
      "question": "What technical support does Lattice provide?",
      "answer": "Lattice provides comprehensive technical support: 1) Documentation - Complete datasheets, user guides, application notes, and reference designs available on the Lattice website; 2) Software Support - Free design tools with updates and technical support; 3) Training - Online tutorials, webinars, and hands-on training courses through Lattice Academy; 4) FAE Support - Field application engineers for design consultation and troubleshooting; 5) Community Support - Lattice user forums and knowledge base; 6) IP and Reference Designs - Comprehensive library of validated IP cores and application-specific reference designs; 7) Development Kits - Complete evaluation platforms with documentation and example designs; 8) Design Services - Lattice partners provide custom design services for complex projects. LiTong, as an authorized distributor, provides local technical support, design services, and supply chain management for Lattice products.",
      "decisionGuide": "Leverage Lattice and LiTong technical support for successful FPGA implementation and accelerated time to market.",
      "keywords": ["technical support", "FAE", "training", "documentation", "reference designs"]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'brand.json'), JSON.stringify(brandData, null, 2));
console.log('Created brand.json');

// 2. Create products.json
const productsData = {
  "seoTitle": "Lattice FPGA Products - Nexus/CertusPro/MachXO/CrossLink | LiTong",
  "seoDescription": "Browse Lattice Semiconductor FPGA products: Nexus platform, CertusPro-NX, MachXO, CrossLink-NX. Low power programmable solutions from authorized distributor.",
  "seoKeywords": ["Lattice products", "Lattice FPGA", "Nexus platform", "CertusPro", "MachXO", "CrossLink", "low power FPGA"],
  "faqs": [
    {
      "question": "What FPGA families does Lattice offer?",
      "answer": "Lattice offers several FPGA families: Nexus platform (28nm FD-SOI), CertusPro-NX (general purpose), Certus-NX (security-focused), MachXO3/MachXO5-NX (control FPGAs), and CrossLink-NX (MIPI connectivity).",
      "decisionGuide": "Choose based on application: Nexus/CertusPro for general purpose, MachXO for control, CrossLink for MIPI connectivity.",
      "keywords": ["FPGA families", "Nexus", "CertusPro", "MachXO", "CrossLink"]
    },
    {
      "question": "What is the power consumption of Lattice FPGAs?",
      "answer": "Lattice FPGAs consume up to 75% less power than competing solutions. Typical static power is in microwatts to milliwatts, making them ideal for battery-powered applications.",
      "decisionGuide": "Choose Lattice for the lowest power consumption in battery-powered and thermally constrained applications.",
      "keywords": ["power consumption", "low power", "battery powered"]
    },
    {
      "question": "Does Lattice provide development kits?",
      "answer": "Yes, Lattice provides comprehensive development kits for each FPGA family, including evaluation boards, programming cables, power supplies, and example designs.",
      "decisionGuide": "Get a development kit for rapid prototyping and evaluation of Lattice FPGAs.",
      "keywords": ["development kits", "evaluation boards", "prototyping"]
    },
    {
      "question": "What software is used to develop for Lattice FPGAs?",
      "answer": "Lattice Radiant is the primary design software for Nexus-based FPGAs. Lattice Diamond is used for MachXO devices. Both are free downloads.",
      "decisionGuide": "Download Lattice Radiant for Nexus platform development or Diamond for MachXO devices.",
      "keywords": ["Radiant", "Diamond", "design software"]
    },
    {
      "question": "How do I select the right Lattice FPGA?",
      "answer": "Consider logic capacity, I/O requirements, power budget, and specific features like MIPI, PCIe, or security when selecting a Lattice FPGA. Contact FAE for assistance.",
      "decisionGuide": "Contact FAE for device selection assistance based on your application requirements.",
      "keywords": ["device selection", "FPGA selection"]
    }
  ],
  "categories": [
    {
      "id": "nexus-platform",
      "name": "Nexus Platform FPGAs",
      "slug": "nexus-platform",
      "description": "The industry's first FPGA platform built on 28nm FD-SOI technology, delivering the lowest power consumption and highest performance for Edge Computing applications.",
      "shortDescription": "Nexus Platform FPGAs on 28nm FD-SOI, industry's lowest power for Edge Computing",
      "icon": "fpga",
      "parameters": ["Logic Capacity", "I/O Count", "Memory", "DSP", "Package"],
      "selectionGuideLink": { "url": "/lattice/support/nexus-selection-guide.html", "text": "Nexus Selection Guide" },
      "series": [
        { "name": "CertusPro-NX", "description": "General purpose FPGAs", "features": ["Lowest power", "Small form factor", "High performance"] },
        { "name": "Certus-NX", "description": "Security-focused FPGAs", "features": ["Hardware root of trust", "AES-256 encryption", "Secure boot"] },
        { "name": "CrossLink-NX", "description": "MIPI connectivity FPGAs", "features": ["MIPI D-PHY", "I/O expansion", "Video bridging"] }
      ],
      "selectionGuide": { "title": "Nexus Platform Selection Guide", "description": "How to select the right Nexus FPGA for your application", "articleId": "nexus-selection", "articleLink": "/lattice/support/nexus-selection-guide.html" },
      "faqs": [
        { "question": "What is FD-SOI technology?", "answer": "FD-SOI (Fully Depleted Silicon on Insulator) is an advanced process technology that provides superior power efficiency compared to bulk CMOS. It enables Lattice FPGAs to achieve the industry's lowest power consumption.", "decisionGuide": "FD-SOI technology enables 75% lower power than competing FPGAs.", "keywords": ["FD-SOI", "process technology", "power efficiency"] },
        { "question": "What is the difference between CertusPro-NX and Certus-NX?", "answer": "CertusPro-NX is optimized for general purpose applications with the lowest power and smallest form factors. Certus-NX adds hardware security features including root of trust, encryption, and secure boot.", "decisionGuide": "Choose CertusPro-NX for general applications, Certus-NX for security-critical applications.", "keywords": ["CertusPro", "Certus", "security"] },
        { "question": "What development tools support Nexus FPGAs?", "answer": "Lattice Radiant design software supports all Nexus platform FPGAs. It provides synthesis, place and route, timing analysis, and debugging capabilities.", "decisionGuide": "Use Lattice Radiant for all Nexus platform FPGA development.", "keywords": ["Radiant", "development tools", "Nexus"] },
        { "question": "What packages are available for Nexus FPGAs?", "answer": "Nexus FPGAs are available in small form factor packages including WLCSP, QFN, and caBGA, enabling compact designs for space-constrained applications.", "decisionGuide": "Small form factor packages enable compact designs for portable and space-constrained applications.", "keywords": ["packages", "WLCSP", "small form factor"] },
        { "question": "How does Nexus compare to other FPGA platforms?", "answer": "Nexus platform delivers up to 75% lower power than competing FPGAs while providing comparable performance. The FD-SOI technology and optimized architecture make it ideal for battery-powered applications.", "decisionGuide": "Nexus platform offers the best power efficiency for Edge Computing applications.", "keywords": ["Nexus comparison", "power efficiency", "Edge Computing"] }
      ],
      "products": [
        {
          "partNumber": "LFD2NX-40",
          "name": "CertusPro-NX 40K Logic Cells FPGA",
          "description": "CertusPro-NX general purpose FPGA with 39K logic cells, 1.5 Mbit embedded memory, advanced DSP blocks, and industry-leading low power consumption in small form factor packages.",
          "shortDescription": "CertusPro-NX 40K logic cells FPGA with lowest power consumption for general purpose applications",
          "descriptionParagraphs": [
            "The LFD2NX-40 is a member of the CertusPro-NX family, Lattice's general purpose FPGA optimized for the lowest power consumption in the industry. Built on the 28nm FD-SOI Nexus platform, this device delivers 39K logic cells with up to 75% lower power than competing solutions.",
            "The device features 1.5 Mbits of embedded memory, 120 DSP blocks for signal processing and AI acceleration, and up to 207 user I/O pins. The advanced architecture includes hard IP for PCIe Gen2, high-speed DDR3/LPDDR4 memory interfaces, and multiple Gigabit Ethernet MACs.",
            "Available in compact packages as small as 4x4mm, the LFD2NX-40 is ideal for battery-powered portable devices, IoT edge nodes, and space-constrained industrial applications. The device supports industrial temperature range and comprehensive security features including AES-256 bitstream encryption."
          ],
          "features": ["39K logic cells", "1.5 Mbit embedded memory", "120 DSP blocks", "207 user I/O", "PCIe Gen2 hard IP", "DDR3/LPDDR4 support", "4x4mm package option"],
          "specifications": { "Logic Cells": "39,000", "Embedded Memory": "1.5 Mbit", "DSP Blocks": "120", "User I/O": "Up to 207", "PCIe": "Gen2 x2", "Memory Interface": "DDR3/LPDDR4", "Packages": "caBGA-256, caBGA-121, WLCSP-36" },
          "applications": ["Edge AI", "Industrial IoT", "Smart vision", "5G infrastructure", "Portable devices"],
          "faqs": [
            { "question": "What is the power consumption of LFD2NX-40?", "answer": "The LFD2NX-40 achieves industry-leading low power with static power in the microwatt range and dynamic power significantly lower than competing 40K logic cell FPGAs. Exact power depends on design and operating frequency.", "decisionGuide": "LFD2NX-40 offers the lowest power consumption for 40K logic cell FPGAs, ideal for battery-powered applications.", "keywords": ["power consumption", "low power", "battery powered"] },
            { "question": "What is the smallest package available?", "answer": "The LFD2NX-40 is available in a 4x4mm WLCSP-36 package, one of the smallest FPGA packages in the industry, enabling ultra-compact designs.", "decisionGuide": "4x4mm WLCSP package enables ultra-compact designs for space-constrained applications.", "keywords": ["package", "WLCSP", "4x4mm", "small form factor"] },
            { "question": "Does it support PCIe?", "answer": "Yes, the LFD2NX-40 includes hard IP for PCIe Gen2 x2, providing high-speed connectivity to host processors with minimal power consumption.", "decisionGuide": "Integrated PCIe Gen2 hard IP provides high-speed connectivity with low power.", "keywords": ["PCIe", "Gen2", "connectivity"] },
            { "question": "What memory interfaces are supported?", "answer": "The LFD2NX-40 supports DDR3, DDR3L, and LPDDR4 memory interfaces with hard IP, enabling high-performance external memory for data buffering and processing.", "decisionGuide": "DDR3/LPDDR4 support enables high-performance external memory interfaces.", "keywords": ["DDR3", "LPDDR4", "memory interface"] },
            { "question": "What development kit is available?", "answer": "The CertusPro-NX Evaluation Board is available for evaluating the LFD2NX-40. It includes the FPGA, programming cable, power supply, and example designs.", "decisionGuide": "Use the CertusPro-NX Evaluation Board for development and evaluation.", "keywords": ["evaluation board", "development kit", "CertusPro-NX"] }
          ],
          "faeReview": { "author": "LiTong FAE Team", "content": "The LFD2NX-40 is our go-to recommendation for customers needing a balance of logic capacity, features, and ultra-low power. We've successfully used it in numerous Edge AI, industrial IoT, and smart vision applications. Customers consistently report 2-3x longer battery life compared to their previous FPGA solutions. The small form factor packages enable designs that simply weren't possible with other FPGAs.", "highlight": "Ultra-low power, small form factor, excellent for battery-powered applications" },
          "alternativeParts": [
            { "partNumber": "LFD2NX-17", "comparison": "LFD2NX-17 has 17K logic cells vs 39K, lower cost for smaller designs", "reason": "Lower capacity and cost", "useCase": "Smaller designs with lower logic requirements" },
            { "partNumber": "LFD4NX-100", "comparison": "LFD4NX-100 has 100K logic cells vs 39K, higher capacity for complex designs", "reason": "Higher capacity needed", "useCase": "Complex designs requiring more logic resources" }
          ],
          "companionParts": [
            { "partNumber": "CertusPro-NX-EVB", "relationship": "Evaluation Board", "description": "CertusPro-NX Evaluation Board for development" },
            { "partNumber": "DDR3L-1Gb", "relationship": "External Memory", "description": "Low power DDR3 memory for data buffering" },
            { "partNumber": "LCMXO3LF-2100C", "relationship": "Companion CPLD", "description": "MachXO3 for system management and configuration" }
          ]
        },
        {
          "partNumber": "LFD4NX-100",
          "name": "CertusPro-NX 100K Logic Cells FPGA",
          "description": "High-capacity CertusPro-NX FPGA with 96K logic cells, 3.9 Mbit embedded memory, advanced security features, and highest performance in the Nexus family.",
          "shortDescription": "CertusPro-NX 100K logic cells FPGA with advanced security and highest performance",
          "descriptionParagraphs": [
            "The LFD4NX-100 is the highest capacity member of the CertusPro-NX family, delivering 96K logic cells with industry-leading power efficiency. Built on the 28nm FD-SOI Nexus platform, it provides the performance needed for complex Edge Computing applications while maintaining Lattice's ultra-low power advantage.",
            "The device features 3.9 Mbits of embedded memory, 300 DSP blocks for high-performance signal processing and AI inference, and up to 270 user I/O pins. Advanced security features include hardware root of trust, AES-256 bitstream encryption, ECDSA authentication, and PUF for secure key storage.",
            "The LFD4NX-100 supports PCIe Gen3 x4, multiple high-speed memory interfaces, and comprehensive connectivity options. Available in packages from 10x10mm to 17x17mm, it serves applications ranging from 5G infrastructure to data center accelerators requiring high performance with low power."
          ],
          "features": ["96K logic cells", "3.9 Mbit embedded memory", "300 DSP blocks", "270 user I/O", "PCIe Gen3 x4", "Hardware root of trust", "AES-256 encryption"],
          "specifications": { "Logic Cells": "96,000", "Embedded Memory": "3.9 Mbit", "DSP Blocks": "300", "User I/O": "Up to 270", "PCIe": "Gen3 x4", "Security": "Hardware root of trust", "Packages": "caBGA-400, caBGA-256" },
          "applications": ["5G infrastructure", "Data center", "Edge AI servers", "Network security", "Video aggregation"],
          "faqs": [
            { "question": "What security features does LFD4NX-100 provide?", "answer": "The LFD4NX-100 includes comprehensive security: hardware root of trust, AES-256 bitstream encryption, ECDSA authentication, PUF for secure key storage, and anti-tamper features.", "decisionGuide": "Advanced security features make LFD4NX-100 ideal for security-critical applications.", "keywords": ["security", "hardware root of trust", "encryption", "authentication"] },
            { "question": "What is the PCIe performance?", "answer": "The LFD4NX-100 supports PCIe Gen3 x4, providing up to 32 Gbps bandwidth for high-speed host connectivity with low power consumption.", "decisionGuide": "PCIe Gen3 x4 provides high-speed connectivity for data center and 5G applications.", "keywords": ["PCIe", "Gen3", "bandwidth"] },
            { "question": "How many DSP blocks are available?", "answer": "The LFD4NX-100 provides 300 DSP blocks, enabling high-performance signal processing, AI inference, and video processing applications.", "decisionGuide": "300 DSP blocks enable high-performance AI and signal processing applications.", "keywords": ["DSP", "signal processing", "AI inference"] },
            { "question": "What is the power consumption compared to competitors?", "answer": "The LFD4NX-100 consumes up to 75% less power than competing 100K logic cell FPGAs, enabling significant energy savings in data center and infrastructure applications.", "decisionGuide": "75% lower power than competitors enables energy-efficient designs.", "keywords": ["power consumption", "75% lower", "energy efficient"] },
            { "question": "What development kit is recommended?", "answer": "The CertusPro-NX Advanced Evaluation Board is recommended for LFD4NX-100 development, featuring comprehensive peripherals and high-speed interfaces.", "decisionGuide": "Use the CertusPro-NX Advanced Evaluation Board for LFD4NX-100 development.", "keywords": ["evaluation board", "development kit", "CertusPro-NX"] }
          ],
          "faeReview": { "author": "LiTong FAE Team", "content": "The LFD4NX-100 is our flagship recommendation for high-performance Edge Computing applications. We've deployed it in 5G ORAN fronthaul, data center security accelerators, and AI inference servers. The combination of high logic capacity, advanced security, and ultra-low power is unmatched in the industry. Customers report significant TCO savings in data center applications due to reduced power and cooling requirements.", "highlight": "High capacity, advanced security, ultra-low power for Edge Computing" },
          "alternativeParts": [
            { "partNumber": "LFD2NX-40", "comparison": "LFD2NX-40 has 39K logic cells vs 96K, lower cost for medium designs", "reason": "Lower capacity and cost", "useCase": "Medium complexity designs" },
            { "partNumber": "LCE4X-100", "comparison": "LCE4X-100 is CrossLink-NX with MIPI focus vs general purpose", "reason": "MIPI connectivity needed", "useCase": "Video and camera applications" }
          ],
          "companionParts": [
            { "partNumber": "CertusPro-NX-ADV-EVB", "relationship": "Evaluation Board", "description": "CertusPro-NX Advanced Evaluation Board" },
            { "partNumber": "DDR4-4Gb", "relationship": "External Memory", "description": "High-speed DDR4 memory" },
            { "partNumber": "LCMXO5-1200", "relationship": "Companion CPLD", "description": "MachXO5 for system management" }
          ]
        }
      ]
    }
  ]
};

// Add more categories to productsData
productsData.categories.push(
  {
    "id": "machxo-control",
    "name": "MachXO Control FPGAs",
    "slug": "machxo-control",
    "description": "Ultra-low power instant-on control FPGAs for system management, configuration, and I/O expansion with non-volatile configuration storage.",
    "shortDescription": "MachXO instant-on control FPGAs for system management and configuration",
    "icon": "cpld",
    "parameters": ["Logic Cells", "I/O Count", "Flash Memory", "Package"],
    "selectionGuideLink": { "url": "/lattice/support/machxo-selection-guide.html", "text": "MachXO Selection Guide" },
    "series": [
      { "name": "MachXO3", "description": "Ultra-low power control FPGAs", "features": ["Instant-on", "Non-volatile", "Low power"] },
      { "name": "MachXO5-NX", "description": "Advanced security control FPGAs", "features": ["Hardware security", "Enhanced I/O", "Advanced features"] }
    ],
    "selectionGuide": { "title": "MachXO Selection Guide", "description": "How to select the right MachXO device for system management", "articleId": "machxo-selection", "articleLink": "/lattice/support/machxo-selection-guide.html" },
    "faqs": [
      { "question": "What is instant-on capability?", "answer": "MachXO devices are active immediately at power-up with configuration stored in on-chip Flash, eliminating external configuration memory and configuration time.", "decisionGuide": "Instant-on is critical for power sequencing, reset management, and boot control applications.", "keywords": ["instant-on", "Flash", "configuration"] },
      { "question": "What is the difference between MachXO3 and MachXO5-NX?", "answer": "MachXO3 is the established ultra-low power family. MachXO5-NX adds advanced security features, enhanced I/O, and more logic capacity for complex system management.", "decisionGuide": "Choose MachXO3 for basic control, MachXO5-NX for security-critical or complex applications.", "keywords": ["MachXO3", "MachXO5", "security"] },
      { "question": "What software supports MachXO devices?", "answer": "Lattice Diamond design software supports all MachXO3 and MachXO5-NX devices, providing synthesis, simulation, and programming capabilities.", "decisionGuide": "Use Lattice Diamond for all MachXO device development.", "keywords": ["Diamond", "development tools", "MachXO"] }
    ],
    "products": [
      {
        "partNumber": "LCMXO3LF-2100C",
        "name": "MachXO3LF 2100 LUT FPGA",
        "description": "MachXO3LF ultra-low power instant-on FPGA with 2112 LUTs, 80 I/O, and non-volatile configuration for system management and control applications.",
        "shortDescription": "MachXO3LF 2100 LUT instant-on FPGA for system management and control",
        "descriptionParagraphs": [
          "The LCMXO3LF-2100C is a member of the MachXO3LF family, providing instant-on programmable logic for system management and control applications. With 2112 LUTs and non-volatile configuration stored in on-chip Flash, it eliminates the need for external configuration memory.",
          "The device features 80 user I/O pins, 256 Kbits of embedded Flash memory for data storage, and comprehensive connectivity options including I2C, SPI, and parallel interfaces. Ultra-low static power consumption makes it ideal for always-on system management in battery-powered and thermally constrained applications.",
          "The MachXO3LF-2100C is widely used for power sequencing, reset management, configuration control, and I/O expansion in servers, networking equipment, and industrial systems. Instant-on capability ensures immediate system response at power-up."
        ],
        "features": ["2112 LUTs", "80 user I/O", "256 Kbit Flash", "Instant-on", "Ultra-low power", "I2C/SPI support"],
        "specifications": { "LUTs": "2,112", "User I/O": "80", "Flash Memory": "256 Kbit", "Configuration": "Instant-on", "Static Power": "<100 uA", "Packages": "QFN-48, TQFP-100, caBGA-132" },
        "applications": ["Power sequencing", "Reset management", "Configuration control", "I/O expansion", "System management"],
        "faqs": [
          { "question": "What is the static power consumption?", "answer": "The LCMXO3LF-2100C has ultra-low static power consumption of less than 100 microamps, making it ideal for always-on applications.", "decisionGuide": "Ultra-low static power enables always-on operation in battery-powered systems.", "keywords": ["static power", "100 uA", "always-on"] },
          { "question": "Does it require external configuration memory?", "answer": "No, configuration is stored in on-chip non-volatile Flash memory, eliminating the need for external configuration devices.", "decisionGuide": "On-chip Flash eliminates external configuration memory, reducing BOM cost and board space.", "keywords": ["Flash", "non-volatile", "no external memory"] },
          { "question": "What is the configuration time?", "answer": "Configuration is instant-on, with the device active immediately at power-up with zero configuration time.", "decisionGuide": "Instant-on enables immediate system response at power-up.", "keywords": ["instant-on", "zero configuration time"] },
          { "question": "What interfaces are supported?", "answer": "The device supports I2C, SPI, and parallel interfaces for system connectivity and configuration.", "decisionGuide": "Multiple interfaces enable flexible system integration.", "keywords": ["I2C", "SPI", "interfaces"] },
          { "question": "What development tools are used?", "answer": "Lattice Diamond design software is used for MachXO3 development, providing a complete design environment.", "decisionGuide": "Use Lattice Diamond for MachXO3 development.", "keywords": ["Diamond", "development tools"] }
        ],
        "faeReview": { "author": "LiTong FAE Team", "content": "The LCMXO3LF-2100C is our most popular MachXO3 device for system management applications. We've used it extensively for power sequencing, reset control, and configuration management in servers, networking equipment, and industrial systems. Customers love the instant-on capability and ultra-low power. It's a direct replacement for multiple discrete logic chips and CPLDs.", "highlight": "Instant-on, ultra-low power, ideal for system management" },
        "alternativeParts": [
          { "partNumber": "LCMXO3LF-6900C", "comparison": "LCMXO3LF-6900C has 6864 LUTs vs 2112, higher capacity", "reason": "Higher capacity needed", "useCase": "Complex system management" },
          { "partNumber": "LCMXO5-1200", "comparison": "LCMXO5-1200 adds hardware security features", "reason": "Security features needed", "useCase": "Security-critical applications" }
        ],
        "companionParts": [
          { "partNumber": "MachXO3-Breakout", "relationship": "Breakout Board", "description": "MachXO3 breakout board for prototyping" },
          { "partNumber": "LFD2NX-40", "relationship": "Main FPGA", "description": "CertusPro-NX for main processing" },
          { "partNumber": "TPS65218", "relationship": "Power Management", "description": "PMIC for power sequencing" }
        ]
      },
      {
        "partNumber": "LCMXO5-1200",
        "name": "MachXO5-NX 1200 LUT Security FPGA",
        "description": "MachXO5-NX advanced security control FPGA with 1200 LUTs, hardware root of trust, and enhanced I/O for secure system management.",
        "shortDescription": "MachXO5-NX 1200 LUT security FPGA with hardware root of trust",
        "descriptionParagraphs": [
          "The LCMXO5-1200 is a member of the MachXO5-NX family, adding advanced security features to the proven MachXO instant-on architecture. With 1200 LUTs and comprehensive hardware security, it enables secure system management and control.",
          "The device features hardware root of trust with secure boot, AES-256 encryption, ECDSA authentication, and PUF for secure key storage. Enhanced I/O includes support for multiple voltage standards and high-speed interfaces. The non-volatile configuration ensures instant-on operation.",
          "The MachXO5-1200 is ideal for secure boot management, platform firmware resiliency, and trusted system control in servers, networking equipment, and industrial systems requiring high security."
        ],
        "features": ["1200 LUTs", "Hardware root of trust", "AES-256 encryption", "Secure boot", "PUF", "Enhanced I/O"],
        "specifications": { "LUTs": "1,200", "User I/O": "100", "Security": "Hardware root of trust", "Encryption": "AES-256", "Authentication": "ECDSA", "Packages": "QFN-48, caBGA-121" },
        "applications": ["Secure boot", "Platform firmware", "Trusted control", "Security management", "System protection"],
        "faqs": [
          { "question": "What security features are included?", "answer": "The LCMXO5-1200 includes hardware root of trust, AES-256 encryption, ECDSA authentication, PUF, and secure boot capabilities.", "decisionGuide": "Comprehensive hardware security for trusted system management.", "keywords": ["security", "root of trust", "encryption", "authentication"] },
          { "question": "How does it compare to MachXO3?", "answer": "MachXO5-NX adds hardware security features and enhanced I/O compared to MachXO3, while maintaining instant-on and low power.", "decisionGuide": "Choose MachXO5-NX for security-critical applications, MachXO3 for general control.", "keywords": ["MachXO5", "MachXO3", "security comparison"] },
          { "question": "What is PUF?", "answer": "PUF (Physically Unclonable Function) provides device-unique cryptographic keys that cannot be copied or cloned, enhancing security.", "decisionGuide": "PUF provides unclonable device identity for enhanced security.", "keywords": ["PUF", "physically unclonable function", "security"] },
          { "question": "What development tools are used?", "answer": "Lattice Diamond design software supports MachXO5-NX with security configuration and programming capabilities.", "decisionGuide": "Use Lattice Diamond for MachXO5-NX development.", "keywords": ["Diamond", "development tools"] },
          { "question": "What is platform firmware resiliency?", "answer": "Platform firmware resiliency protects against firmware attacks by verifying and recovering firmware integrity using hardware security features.", "decisionGuide": "Hardware-based firmware protection for secure systems.", "keywords": ["firmware resiliency", "protection", "security"] }
        ],
        "faeReview": { "author": "LiTong FAE Team", "content": "The LCMXO5-1200 is our recommended solution for customers needing hardware security in their system management. We've deployed it in secure boot applications, platform protection, and trusted control systems. The combination of instant-on, low power, and comprehensive security is unique in the industry. It's a key component in our Lattice Sentry security solution stack.", "highlight": "Hardware security, instant-on, comprehensive protection" },
        "alternativeParts": [
          { "partNumber": "LCMXO3LF-2100C", "comparison": "LCMXO3LF-2100C has no hardware security, lower cost", "reason": "No security requirements", "useCase": "General control without security" },
          { "partNumber": "LCMXO5-2800", "comparison": "LCMXO5-2800 has 2800 LUTs vs 1200, higher capacity", "reason": "Higher capacity needed", "useCase": "Complex secure control" }
        ],
        "companionParts": [
          { "partNumber": "MachXO5-EVB", "relationship": "Evaluation Board", "description": "MachXO5-NX evaluation board" },
          { "partNumber": "LFD4NX-100", "relationship": "Main FPGA", "description": "CertusPro-NX for main processing with security" },
          { "partNumber": "ATSHA204A", "relationship": "Secure Element", "description": "External secure element for additional security" }
        ]
      }
    ]
  },
  {
    "id": "crosslink-mipi",
    "name": "CrossLink-NX MIPI FPGAs",
    "slug": "crosslink-mipi",
    "description": "MIPI D-PHY based bridging and I/O expansion FPGAs optimized for camera and display connectivity in smart vision applications.",
    "shortDescription": "CrossLink-NX MIPI FPGAs for camera and display connectivity",
    "icon": "camera",
    "parameters": ["MIPI Lanes", "I/O Count", "Memory", "Package"],
    "selectionGuideLink": { "url": "/lattice/support/crosslink-selection-guide.html", "text": "CrossLink Selection Guide" },
    "series": [
      { "name": "CrossLink-NX", "description": "MIPI connectivity FPGAs", "features": ["MIPI D-PHY", "Camera interface", "Display interface"] }
    ],
    "selectionGuide": { "title": "CrossLink-NX Selection Guide", "description": "How to select the right CrossLink-NX device for MIPI applications", "articleId": "crosslink-selection", "articleLink": "/lattice/support/crosslink-selection-guide.html" },
    "faqs": [
      { "question": "What MIPI interfaces are supported?", "answer": "CrossLink-NX supports MIPI D-PHY with CSI-2 for cameras and DSI for displays, with up to 2.5 Gbps per lane.", "decisionGuide": "CrossLink-NX enables high-speed MIPI connectivity for smart vision applications.", "keywords": ["MIPI", "D-PHY", "CSI-2", "DSI"] },
      { "question": "What is MIPI bridging?", "answer": "MIPI bridging converts between MIPI interfaces and other standards like HDMI, DisplayPort, or parallel interfaces, enabling flexible system design.", "decisionGuide": "MIPI bridging enables connection of MIPI cameras and displays to processors with different interfaces.", "keywords": ["MIPI bridging", "interface conversion"] },
      { "question": "What software is used?", "answer": "Lattice Radiant supports CrossLink-NX with MIPI IP configuration and video pipeline design tools.", "decisionGuide": "Use Lattice Radiant with mVision IP configurator for CrossLink-NX development.", "keywords": ["Radiant", "mVision", "IP configurator"] }
    ],
    "products": [
      {
        "partNumber": "LCE4X-100",
        "name": "CrossLink-NX 100K Logic Cells MIPI FPGA",
        "description": "CrossLink-NX FPGA with 96K logic cells, up to 8 MIPI D-PHY lanes at 2.5 Gbps, and comprehensive video connectivity for smart vision applications.",
        "shortDescription": "CrossLink-NX 100K logic cells MIPI FPGA for smart vision applications",
        "descriptionParagraphs": [
          "The LCE4X-100 is a member of the CrossLink-NX family, optimized for MIPI-based camera and display connectivity. With 96K logic cells and up to 8 MIPI D-PHY lanes supporting 2.5 Gbps per lane, it enables high-performance smart vision applications.",
          "The device features comprehensive video connectivity including MIPI CSI-2 for cameras, MIPI DSI for displays, and bridging to HDMI, DisplayPort, and parallel interfaces. Advanced video processing capabilities include format conversion, scaling, and aggregation.",
          "The CrossLink-NX-100 is ideal for multi-camera aggregation, video bridging, display interfaces, and smart vision applications in surveillance, industrial vision, and consumer electronics. Low power consumption enables battery-powered camera applications."
        ],
        "features": ["96K logic cells", "8 MIPI D-PHY lanes", "2.5 Gbps per lane", "MIPI CSI-2/DSI", "HDMI/DP bridging", "Video processing"],
        "specifications": { "Logic Cells": "96,000", "MIPI Lanes": "8", "Data Rate": "2.5 Gbps/lane", "Camera Interface": "MIPI CSI-2", "Display Interface": "MIPI DSI/HDMI/DP", "Packages": "caBGA-256, WLCSP-49" },
        "applications": ["Multi-camera aggregation", "Video bridging", "Display interfaces", "Smart vision", "Surveillance cameras"],
        "faqs": [
          { "question": "How many MIPI lanes are supported?", "answer": "The LCE4X-100 supports up to 8 MIPI D-PHY lanes, enabling multi-camera or high-resolution display applications.", "decisionGuide": "8 MIPI lanes support complex multi-camera and high-resolution display applications.", "keywords": ["MIPI lanes", "8 lanes", "multi-camera"] },
          { "question": "What is the maximum data rate?", "answer": "Each MIPI D-PHY lane supports up to 2.5 Gbps, providing 20 Gbps total bandwidth for high-resolution video.", "decisionGuide": "2.5 Gbps per lane enables high-resolution 4K video applications.", "keywords": ["2.5 Gbps", "data rate", "bandwidth"] },
          { "question": "What video interfaces can be bridged?", "answer": "The device can bridge between MIPI CSI-2/DSI, HDMI, DisplayPort, and parallel video interfaces.", "decisionGuide": "Flexible bridging between MIPI, HDMI, DisplayPort, and parallel interfaces.", "keywords": ["video bridging", "HDMI", "DisplayPort"] },
          { "question": "What video processing is supported?", "answer": "The device supports video format conversion, scaling, cropping, and multi-stream aggregation.", "decisionGuide": "On-chip video processing reduces host processor requirements.", "keywords": ["video processing", "scaling", "format conversion"] },
          { "question": "What development kit is available?", "answer": "The CrossLink-NX Evaluation Board provides a complete platform for MIPI camera and display development.", "decisionGuide": "Use CrossLink-NX Evaluation Board for MIPI application development.", "keywords": ["evaluation board", "development kit"] }
        ],
        "faeReview": { "author": "LiTong FAE Team", "content": "The LCE4X-100 is our go-to solution for MIPI-based smart vision applications. We've used it in multi-camera surveillance systems, industrial inspection cameras, and AR/VR displays. The combination of high-speed MIPI connectivity, video processing, and low power is unmatched. Customers appreciate the flexible bridging capabilities that simplify system design.", "highlight": "High-speed MIPI, video processing, flexible bridging" },
        "alternativeParts": [
          { "partNumber": "LCE4X-40", "comparison": "LCE4X-40 has 39K logic cells vs 96K, lower cost", "reason": "Lower capacity and cost", "useCase": "Simpler MIPI applications" },
          { "partNumber": "LFD4NX-100", "comparison": "LFD4NX-100 is general purpose vs MIPI-optimized", "reason": "General purpose needed", "useCase": "Non-MIPI applications" }
        ],
        "companionParts": [
          { "partNumber": "CrossLink-NX-EVB", "relationship": "Evaluation Board", "description": "CrossLink-NX evaluation board" },
          { "partNumber": "IMX477", "relationship": "Camera Sensor", "description": "Sony IMX477 image sensor" },
          { "partNumber": "TC358743", "relationship": "HDMI Bridge", "description": "HDMI to MIPI bridge chip" }
        ]
      }
    ]
  }
);

fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('Created products.json');

console.log('\nBrand and Products files created successfully!');
console.log('Next: Create solutions.json and support.json');
