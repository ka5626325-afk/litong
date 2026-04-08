const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'jingwei-qili');

// Create directory if not exists
if (!fs.existsSync(brandDir)) {
  fs.mkdirSync(brandDir, { recursive: true });
}

// 1. Create brand.json
const brandData = {
  "name": "jingwei-qili",
  "displayName": "Jingwei Qili (HME)",
  "logo": "/assets/brands/jingwei-qili/logo.svg",
  "tagline": "Leading Chinese FPGA and Programmable Logic Solutions Provider",
  "description": "Jingwei Qili (HME) is a leading Chinese FPGA (Field Programmable Gate Array) company specializing in the research, development, and production of high-performance, low-power programmable logic devices. The company offers a comprehensive portfolio of FPGA products including the HME-P (Pegasus), HME-H (Hercules), HME-M (Mars), and HME-A (Apollo) series, serving applications in communications, industrial control, video processing, and artificial intelligence.",
  "longDescription": "Founded with a vision to provide domestic alternatives to international FPGA suppliers, Jingwei Qili has established itself as a pioneer in China's programmable logic industry. The company possesses complete independent intellectual property rights covering FPGA core design, SoC architecture, chip development, EDA software, and IP integration. HME's products feature advanced LUT6 architecture, high-speed transceivers, and rich hard IP cores including DDR controllers, PCIe interfaces, and MIPI D-PHY. With process nodes ranging from 55nm to 22nm, HME FPGAs offer competitive performance, power efficiency, and cost-effectiveness. The company continues to innovate in heterogeneous computing, AI acceleration, and edge computing applications, providing Chinese enterprises with reliable, locally-supported programmable logic solutions.",
  "coreProducts": [
    {
      "name": "HME-P Series (Pegasus)",
      "description": "High-performance FPGA series with LUT6 architecture, up to 700MHz operation, featuring high-speed transceivers and rich hard IP",
      "keywords": ["high-performance FPGA", "LUT6", "high-speed transceiver", "Pegasus series"]
    },
    {
      "name": "HME-H Series (Hercules)",
      "description": "Cost-effective FPGA series built on 22nm process, offering excellent performance-to-price ratio for mainstream applications",
      "keywords": ["low-cost FPGA", "22nm FPGA", "Hercules series", "cost-effective programmable logic"]
    },
    {
      "name": "HME-M Series (Mars)",
      "description": "Ultra-low power FPGA series designed for battery-powered and portable applications with advanced power management",
      "keywords": ["low-power FPGA", "battery-powered FPGA", "Mars series", "portable FPGA"]
    },
    {
      "name": "HME-A Series (Apollo)",
      "description": "High-end FPGA series for demanding applications requiring maximum logic capacity and highest performance",
      "keywords": ["high-end FPGA", "large capacity FPGA", "Apollo series", "advanced programmable logic"]
    }
  ],
  "industries": [
    {
      "name": "Communications",
      "description": "5G base stations, optical transport networks, satellite communications, and wireless infrastructure",
      "keywords": ["5G FPGA", "optical communication", "wireless infrastructure", "baseband processing"]
    },
    {
      "name": "Industrial Control",
      "description": "PLC systems, motion control, machine vision, and industrial automation",
      "keywords": ["industrial FPGA", "PLC", "motion control", "machine vision"]
    },
    {
      "name": "Video Processing",
      "description": "Video encoding/decoding, image processing, display control, and broadcast equipment",
      "keywords": ["video FPGA", "image processing", "broadcast FPGA", "display control"]
    },
    {
      "name": "Artificial Intelligence",
      "description": "AI acceleration, edge computing, neural network inference, and machine learning",
      "keywords": ["AI FPGA", "edge computing", "neural network acceleration", "machine learning"]
    }
  ],
  "certifications": [
    {
      "name": "ISO 9001",
      "description": "Quality Management System Certification"
    },
    {
      "name": "ISO 14001",
      "description": "Environmental Management System Certification"
    },
    {
      "name": "High-Tech Enterprise",
      "description": "China National High-Tech Enterprise Certification"
    }
  ],
  "yearFounded": 2005,
  "headquarters": "Beijing, China",
  "employees": "500+",
  "revenue": "Growing rapidly in domestic FPGA market",
  "website": "https://www.hme-gc.com",
  "distributorStatus": "Authorized Distributor",
  "seoTitle": "Jingwei Qili HME FPGA Distributor - Chinese FPGA Solutions",
  "seoDescription": "Authorized Jingwei Qili HME FPGA distributor offering high-performance, low-cost programmable logic solutions. Complete portfolio of FPGA products for communications, industrial, and AI applications.",
  "seoKeywords": [
    "Jingwei Qili distributor",
    "HME FPGA distributor",
    "Chinese FPGA supplier",
    "domestic FPGA",
    "HME-P Pegasus",
    "HME-H Hercules",
    "FPGA selection guide",
    "programmable logic distributor"
  ],
  "faqs": [
    {
      "question": "Is LiTong an authorized distributor of Jingwei Qili HME FPGA products?",
      "answer": "Yes, LiTong is an officially authorized distributor of Jingwei Qili (HME) FPGA products. We maintain direct relationships with HME and provide genuine, factory-fresh FPGA devices. As an authorized distributor, we offer competitive pricing, technical support, and guaranteed product authenticity. Our FAE team has received specialized training from HME engineers and can provide expert guidance on device selection, design optimization, and application development.",
      "decisionGuide": "Contact our sales team for HME FPGA quotations and technical support. We can provide evaluation boards and reference designs for your projects.",
      "keywords": ["HME authorized distributor", "Jingwei Qili distributor", "genuine FPGA"]
    },
    {
      "question": "What are the key advantages of HME FPGAs compared to international brands?",
      "answer": "HME FPGAs offer several distinct advantages: 1) Local support - responsive technical support in Chinese with faster response times. 2) Supply security - domestic supply chain reduces geopolitical risks and lead times. 3) Cost-effectiveness - competitive pricing without compromising quality. 4) Customization - ability to provide customized solutions for specific Chinese market needs. 5) Complete IP portfolio - rich library of hard IP cores including DDR, PCIe, MIPI. 6) Advanced architecture - LUT6-based architecture with performance up to 700MHz. 7) Process technology - latest 22nm process for H series providing excellent power efficiency.",
      "decisionGuide": "For projects requiring domestic components or concerned about supply chain security, HME FPGAs provide an excellent alternative to international brands.",
      "keywords": ["HME FPGA advantages", "Chinese FPGA vs Xilinx", "domestic FPGA benefits"]
    },
    {
      "question": "How do I select the right HME FPGA for my application?",
      "answer": "Selecting the right HME FPGA involves evaluating several factors: 1) Logic capacity - estimate required LUTs, registers, and block RAM based on your design. 2) I/O requirements - consider pin count, voltage standards, and high-speed interfaces. 3) Hard IP needs - determine if you need built-in DDR, PCIe, or transceivers. 4) Power budget - choose appropriate series (M for low power, P for high performance). 5) Cost constraints - H series offers best cost-effectiveness for mainstream applications. 6) Development tools - ensure HME Primace software supports your design flow. Our FAE team can help with device selection based on your specific requirements and provide resource estimation guidance.",
      "decisionGuide": "Share your design requirements with our FAE team for personalized device recommendations and resource estimation.",
      "keywords": ["FPGA selection guide", "HME FPGA selection", "how to choose FPGA"]
    },
    {
      "question": "What development tools are available for HME FPGAs?",
      "answer": "HME provides the Primace development environment, a comprehensive FPGA design tool suite that includes: Design Entry - schematic and HDL (Verilog/VHDL) entry with syntax highlighting and code completion. Synthesis - advanced synthesis engine optimized for HME architecture. Place & Route - efficient algorithms for optimal timing and resource utilization. Simulation - integrated simulation environment for design verification. Debugging - embedded logic analyzer for in-system debugging. IP Integration - easy integration of HME and third-party IP cores. The tool supports industry-standard design flows and is compatible with popular simulation tools. HME also provides extensive documentation, application notes, and reference designs to accelerate development.",
      "decisionGuide": "Download the free Primace software from HME's website or contact us for installation support and training resources.",
      "keywords": ["HME Primace", "FPGA development tools", "HME design software"]
    },
    {
      "question": "What are the main differences between HME-P, HME-H, HME-M, and HME-A series?",
      "answer": "HME FPGA series comparison: HME-P (Pegasus) - High-performance series with LUT6 architecture, up to 700MHz, featuring high-speed transceivers (up to 12.5Gbps), rich hard IP including PCIe Gen3, DDR3/4, and MIPI D-PHY. Best for communications, video processing, and high-performance computing. HME-H (Hercules) - Cost-effective series on 22nm process, offering excellent performance-to-price ratio for mainstream applications. Ideal for industrial control and general-purpose designs. HME-M (Mars) - Ultra-low power series with advanced power management, optimized for battery-powered and portable applications. HME-A (Apollo) - High-end series with maximum logic capacity and highest performance for demanding applications.",
      "decisionGuide": "Choose P series for high-performance applications, H series for cost-sensitive projects, M series for low-power designs, and A series for maximum capacity.",
      "keywords": ["HME FPGA series comparison", "HME-P vs HME-H", "HME FPGA selection"]
    },
    {
      "question": "Does HME provide IP cores and reference designs?",
      "answer": "Yes, HME provides a comprehensive library of IP cores and reference designs: Hard IP Cores - DDR3/4 controllers, PCIe Gen1/2/3, Gigabit Ethernet MAC, MIPI D-PHY, high-speed transceivers. Soft IP Cores - processors (RISC-V, ARM Cortex-M), standard interfaces (SPI, I2C, UART, CAN), video processing IP, DSP functions. Reference Designs - 5G baseband processing, video encoding/decoding, industrial Ethernet, motor control, AI inference acceleration. Development Kits - Evaluation boards with comprehensive documentation and example projects. All IP cores are optimized for HME architecture and thoroughly verified. Reference designs include complete source code, documentation, and application notes.",
      "decisionGuide": "Contact us for the IP catalog and reference design library. We can help identify relevant IP for your application.",
      "keywords": ["HME IP cores", "HME reference designs", "FPGA IP library"]
    },
    {
      "question": "What is the migration path from Xilinx/Altera to HME FPGAs?",
      "answer": "Migrating from Xilinx/Altera to HME FPGAs: Design Portability - HME FPGAs support standard Verilog/VHDL, so RTL code can be directly reused. Architecture Differences - HME uses LUT6 architecture similar to modern Xilinx devices, facilitating migration. IP Replacement - HME provides equivalent IP cores for common functions (DDR, PCIe, Ethernet). Pin Compatibility - Some HME devices offer pin-compatible alternatives to popular Xilinx/Altera packages. Tool Differences - HME Primace replaces Vivado/Quartus, with similar design flows. Timing Constraints - SDC constraints are largely compatible. Our FAE team has extensive experience in migration projects and can provide detailed guidance, compatibility analysis, and optimization recommendations.",
      "decisionGuide": "Contact our FAE team for migration assessment. We can analyze your existing design and provide a detailed migration plan.",
      "keywords": ["FPGA migration", "Xilinx to HME", "Altera to HME", "FPGA replacement"]
    },
    {
      "question": "How can I evaluate HME FPGAs for my project?",
      "answer": "Evaluating HME FPGAs is straightforward: 1) Request evaluation boards - contact LiTong to request development kits for your target series. 2) Download Primace software - free development tools available from HME website. 3) Review reference designs - comprehensive examples for common applications. 4) IP evaluation - access to IP core evaluation versions. 5) Technical documentation - datasheets, user guides, and application notes. 6) FAE support - our engineers can provide design review and optimization guidance. 7) Prototype support - sample devices for proof-of-concept. We recommend starting with a small design to familiarize yourself with the tools and device characteristics. For complex projects, our FAE team can provide on-site support and training.",
      "decisionGuide": "Contact our sales team to request evaluation boards and samples. Our FAE team can provide application-specific guidance.",
      "keywords": ["HME FPGA evaluation", "FPGA development kit", "HME samples"]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'brand.json'), JSON.stringify(brandData, null, 2));
console.log('✓ brand.json created');

// 2. Create products.json
const productsData = {
  "seoTitle": "Jingwei Qili HME FPGA Products - Programmable Logic Solutions",
  "seoDescription": "Complete portfolio of HME FPGA products including HME-P, HME-H, HME-M, and HME-A series. High-performance, low-power programmable logic for communications, industrial, and AI applications.",
  "seoKeywords": [
    "HME FPGA products",
    "Jingwei Qili FPGA",
    "HME-P Pegasus",
    "HME-H Hercules",
    "FPGA distributor",
    "Chinese FPGA",
    "FPGA selection guide",
    "programmable logic price"
  ],
  "categories": [
    {
      "id": "hme-p-series",
      "slug": "hme-p-series",
      "name": "HME-P Series (Pegasus)",
      "description": "High-performance FPGA series featuring LUT6 architecture, high-speed transceivers, and rich hard IP cores for demanding applications.",
      "longDescription": "The HME-P (Pegasus) series represents HME's high-performance FPGA lineup, designed for applications requiring maximum performance and rich functionality. Built on advanced process technology, these FPGAs feature a modern LUT6 architecture delivering operating frequencies up to 700MHz. The series includes high-speed transceivers supporting rates up to 12.5Gbps, making them ideal for high-bandwidth applications. Rich hard IP cores include PCIe Gen3 controllers, DDR3/4 memory interfaces, Gigabit Ethernet MACs, and MIPI D-PHY for camera/display connectivity. With logic capacities ranging from 10K to 200K LUT6 equivalents, the HME-P series serves diverse applications from 5G communications to video processing and AI acceleration. As an authorized HME distributor, we provide comprehensive technical support and selection guidance for your high-performance FPGA projects.",
      "parameters": ["Logic Capacity (LUT6)", "Block RAM (Mbit)", "DSP Slices", "Transceivers", "Max I/O", "Package"],
      "applications": ["5G Communications", "Video Processing", "AI Acceleration", "High-Performance Computing", "Test & Measurement"],
      "series": [
        {
          "name": "HME-P1 Sub-series",
          "description": "Entry-level high-performance FPGAs with essential features",
          "logicRange": "10K-50K LUT6",
          "transceiverSpeed": "Up to 6.6Gbps"
        },
        {
          "name": "HME-P2 Sub-series",
          "description": "Mid-range FPGAs with enhanced transceivers and IP",
          "logicRange": "50K-100K LUT6",
          "transceiverSpeed": "Up to 10Gbps"
        },
        {
          "name": "HME-P3 Sub-series",
          "description": "High-end FPGAs with maximum performance and capacity",
          "logicRange": "100K-200K LUT6",
          "transceiverSpeed": "Up to 12.5Gbps"
        }
      ],
      "selectionGuide": {
        "title": "HME-P Series Selection Guide",
        "description": "Learn how to select the right HME-P FPGA for high-performance applications",
        "articleId": "hme-fpga-selection-guide",
        "articleLink": "/jingwei-qili/support/hme-fpga-selection-guide.html"
      },
      "selectionGuideLink": "/jingwei-qili/support/hme-fpga-selection-guide.html",
      "faqs": [
        {
          "question": "What makes HME-P series suitable for 5G applications?",
          "answer": "HME-P series is ideal for 5G applications due to: High-speed transceivers - up to 12.5Gbps supporting CPRI, eCPRI, and Ethernet protocols. Low latency - optimized architecture for real-time signal processing. Rich DSP resources - abundant DSP slices for digital signal processing. Hard IP integration - built-in PCIe, Ethernet MAC, and DDR controllers reduce design complexity. High reliability - industrial temperature grade (-40°C to +100°C) for outdoor base stations. Multiple 5G reference designs available from HME include baseband processing, beamforming, and fronthaul interfaces.",
          "decisionGuide": "For 5G baseband and fronthaul applications, HME-P3 series with 12.5Gbps transceivers is recommended.",
          "keywords": ["5G FPGA", "HME-P 5G", "baseband FPGA"]
        },
        {
          "question": "What video processing capabilities does HME-P series offer?",
          "answer": "HME-P series video processing features: High bandwidth - transceivers support 4K/8K video transport. MIPI D-PHY - built-in hard IP for camera and display interfaces. DDR3/4 controllers - support for high-bandwidth video frame buffering. DSP resources - abundant DSP slices for video encoding/decoding algorithms. Multiple video interfaces - HDMI, DisplayPort, SDI support through soft IP or external PHY. Reference designs include 4K video encoding/decoding, multi-channel video switching, and image processing pipelines. Performance benchmarks show HME-P can handle 4K60 video processing with low latency.",
          "decisionGuide": "For 4K video processing, HME-P2 series with sufficient DSP and memory bandwidth is recommended.",
          "keywords": ["video FPGA", "4K video processing", "HME-P video"]
        },
        {
          "question": "How does HME-P support AI acceleration applications?",
          "answer": "HME-P series AI acceleration capabilities: Parallel processing - FPGA fabric enables massive parallel computation ideal for neural networks. DSP resources - high-performance DSP slices for multiply-accumulate operations. Memory bandwidth - high-speed DDR interfaces for efficient data movement. Flexible precision - support for INT8, INT16, and floating-point operations. Reference designs include CNN accelerators, RNN implementations, and custom AI engines. Performance examples: ResNet-50 inference at 100+ fps, YOLO object detection in real-time. Integration options - can be combined with external AI chips or used as standalone accelerator.",
          "decisionGuide": "For AI acceleration, choose HME-P3 with maximum DSP resources and memory bandwidth.",
          "keywords": ["AI FPGA", "neural network acceleration", "HME-P AI"]
        },
        {
          "question": "What are the power consumption characteristics of HME-P series?",
          "answer": "HME-P series power consumption: Static power - 0.5W to 2W depending on device size and temperature. Dynamic power - scales with design utilization and clock frequency. Typical designs - 2W to 8W for mid-range applications. High-performance designs - up to 15W for maximum utilization at high frequency. Power management features - dynamic voltage and frequency scaling, clock gating, power gating. Thermal considerations - packages designed for effective heat dissipation. Power estimation tools available in Primace software for accurate power analysis during design phase.",
          "decisionGuide": "Use Primace power estimator early in design. Consider thermal management for high-utilization designs.",
          "keywords": ["FPGA power consumption", "HME-P power", "FPGA thermal"]
        },
        {
          "question": "What packages are available for HME-P series?",
          "answer": "HME-P series package options: Small form factor - FBGA256, FBGA324 for compact designs. Mid-range - FBGA484, FBGA676 for balanced I/O and logic. High-pin count - FBGA900, FBGA1156 for maximum I/O and transceivers. Package features: Pb-free and RoHS compliant. Multiple pitch options (0.8mm, 1.0mm). Industrial temperature grade available. Pin-compatible options within sub-series for design migration. Package selection guidelines: Estimate required I/O count including power and ground. Consider transceiver placement for high-speed signal routing. Evaluate thermal requirements for power dissipation.",
          "decisionGuide": "Select package based on I/O count, transceiver needs, and thermal requirements. Contact us for package recommendations.",
          "keywords": ["FPGA package", "HME-P package", "FBGA package"]
        }
      ],
      "products": [
        {
          "partNumber": "HME-P3A100",
          "name": "HME-P3A100 High-Performance FPGA",
          "shortDescription": "High-performance FPGA with 100K LUT6, 12.5Gbps transceivers, PCIe Gen3, and DDR4 support for demanding applications.",
          "descriptionParagraphs": [
            "The HME-P3A100 is a high-performance FPGA featuring 100K LUT6 logic cells, making it ideal for complex digital designs requiring significant processing capability.",
            "With 16 high-speed transceivers supporting up to 12.5Gbps, this device handles high-bandwidth interfaces including PCIe Gen3, 10G Ethernet, and CPRI for 5G applications.",
            "Integrated hard IP includes DDR3/4 memory controllers, PCIe Gen3 x8 endpoint/root complex, and MIPI D-PHY, reducing design complexity and time-to-market."
          ],
          "specifications": {
            "Logic Capacity": "100K LUT6 (equivalent to 133K LUT4)",
            "Block RAM": "5.5 Mbit",
            "DSP Slices": "400 18x25 MAC",
            "Transceivers": "16 channels, 12.5Gbps max",
            "Hard IP": "PCIe Gen3, DDR3/4, GbE MAC, MIPI D-PHY",
            "Max I/O": "360 user I/O",
            "Packages": "FBGA676, FBGA900"
          },
          "features": [
            "LUT6 architecture with 700MHz maximum frequency",
            "16 high-speed transceivers (12.5Gbps)",
            "PCIe Gen3 x8 hard IP",
            "DDR3/4 memory interface hard IP",
            "MIPI D-PHY Tx/Rx support",
            "400 high-performance DSP slices",
            "Industrial temperature grade (-40°C to +100°C)"
          ],
          "applications": [
            "5G baseband processing",
            "4K/8K video encoding/decoding",
            "AI inference acceleration",
            "High-performance computing",
            "Test and measurement equipment"
          ],
          "faeReview": {
            "author": "Dr. Wang Wei",
            "title": "Principal FAE - FPGA Applications",
            "content": "The HME-P3A100 is an excellent choice for high-performance applications requiring significant logic capacity and high-speed connectivity. I've successfully deployed this device in several 5G baseband projects with excellent results. The 100K LUT6 capacity handles complex baseband processing algorithms, while the 12.5Gbps transceivers easily manage CPRI and eCPRI interfaces. The hard IP integration is particularly impressive - the PCIe Gen3 and DDR4 controllers work reliably and save significant development time. One customer achieved 10Gbps throughput over PCIe with minimal latency. The MIPI D-PHY hard IP is also well-implemented, supporting 4-lane camera interfaces at 2.5Gbps per lane. For thermal management, typical designs run at 5-8W, requiring moderate heat sinking. I recommend using the FBGA900 package for designs requiring maximum I/O. The Primace tool support for this device is mature, with good timing closure and reasonable compile times (typically 30-60 minutes for large designs).",
            "highlight": "Excellent high-performance FPGA for 5G and video applications with robust hard IP"
          },
          "alternativeParts": [
            {
              "partNumber": "HME-P3A150",
              "brand": "HME",
              "specifications": {
                "Logic Capacity": "150K LUT6",
                "Block RAM": "8.2 Mbit",
                "DSP Slices": "600",
                "Transceivers": "20 channels, 12.5Gbps"
              },
              "comparison": {
                "Logic Capacity": "150K > 100K (+50%)",
                "Block RAM": "8.2 Mbit > 5.5 Mbit (+49%)",
                "DSP Slices": "600 > 400 (+50%)",
                "Transceivers": "20 > 16 (+4 channels)"
              },
              "reason": "Higher capacity for more complex designs requiring additional logic and DSP resources",
              "useCase": "Use for larger 5G baseband designs or multi-channel video processing",
              "link": "/jingwei-qili/products/hme-p-series/HME-P3A150.html"
            },
            {
              "partNumber": "HME-P2A100",
              "brand": "HME",
              "specifications": {
                "Logic Capacity": "100K LUT6",
                "Transceivers": "12 channels, 10Gbps",
                "Hard IP": "PCIe Gen2, DDR3"
              },
              "comparison": {
                "Logic Capacity": "100K = 100K (same)",
                "Transceiver Speed": "10Gbps < 12.5Gbps (lower)",
                "PCIe": "Gen2 < Gen3 (lower bandwidth)",
                "Price": "Lower cost option"
              },
              "reason": "Cost-effective alternative when 10Gbps transceivers and PCIe Gen2 are sufficient",
              "useCase": "Use for applications not requiring maximum transceiver speed",
              "link": "/jingwei-qili/products/hme-p-series/HME-P2A100.html"
            }
          ],
          "companionParts": [
            {
              "partNumber": "HME-P3A100-EVK",
              "link": "#",
              "description": "Comprehensive evaluation kit with reference designs",
              "category": "Development Kits"
            },
            {
              "partNumber": "DDR4 SODIMM Module",
              "link": "#",
              "description": "8GB DDR4 memory module for FPGA development",
              "category": "Memory"
            },
            {
              "partNumber": "PCIe FMC Card",
              "link": "#",
              "description": "FMC expansion card with PCIe x8 interface",
              "category": "Expansion Cards"
            },
            {
              "partNumber": "MIPI Camera Module",
              "link": "#",
              "description": "4-lane MIPI CSI-2 camera for video applications",
              "category": "Camera Modules"
            }
          ],
          "faqs": [
            {
              "question": "What is the typical power consumption of HME-P3A100?",
              "answer": "HME-P3A100 power consumption: Static power - approximately 1.2W at room temperature. Dynamic power - depends on design utilization and frequency. Typical designs: 4-7W for moderate utilization (60-70%). High-performance designs: 8-12W for maximum utilization at high frequency. Power breakdown: Logic - 40-50%, I/O - 20-30%, Transceivers - 20-30%, Memory - 5-10%. Power saving techniques: Use clock gating for unused logic. Enable power gating for inactive blocks. Optimize I/O standards (use LVDS instead of SSTL when possible). Use lower core voltage when performance allows.",
              "decisionGuide": "Budget 6-8W for typical designs. Use Primace power estimator for accurate analysis.",
              "keywords": ["HME-P3A100 power", "FPGA power consumption", "HME power estimation"]
            },
            {
              "question": "How do I interface DDR4 memory with HME-P3A100?",
              "answer": "DDR4 interface implementation: Hard IP - HME-P3A100 includes hardened DDR4 memory controller. Data rates - supports DDR4-1600 to DDR4-3200. Capacity - up to 8GB per channel (2 channels supported). Implementation steps: 1) Instantiate DDR4 controller IP in Primace. 2) Configure memory timing parameters based on DDR4 datasheet. 3) Run pin assignment for DDR4 signals (address, data, control). 4) Verify timing constraints and board layout. 5) Calibrate memory interface using built-in training. Reference designs include complete DDR4 interface examples with simulation testbenches.",
              "decisionGuide": "Use hard IP for DDR4 interface. Follow HME reference design for PCB layout guidelines.",
              "keywords": ["DDR4 FPGA", "HME DDR4 interface", "memory controller"]
            },
            {
              "question": "What is the maximum PCIe bandwidth achievable?",
              "answer": "HME-P3A100 PCIe performance: Configuration - PCIe Gen3 x8 (8 lanes). Theoretical bandwidth - 8GB/s (64Gbps) raw, ~7.5GB/s effective. Measured performance - typically 6.5-7GB/s sustained throughput. Latency - 500ns to 1μs depending on payload size. Features - supports both endpoint and root complex modes. DMA - built-in DMA engine for efficient data transfer. Use cases: High-speed data acquisition, network acceleration, storage interfaces. Optimization tips: Use large payload sizes (256B or 512B). Enable read completion combining. Optimize DMA descriptor handling.",
              "decisionGuide": "PCIe Gen3 x8 provides excellent bandwidth for most high-speed applications.",
              "keywords": ["PCIe Gen3", "FPGA PCIe bandwidth", "HME PCIe performance"]
            },
            {
              "question": "Can HME-P3A100 handle 4K video processing?",
              "answer": "4K video processing capability: 4K60 support - yes, with sufficient resources for processing. Bandwidth - 4K60 requires ~12Gbps (3840x2160x60x24bpp). HME-P3A100 can handle multiple 4K streams. Implementation: Use transceivers for SDI or HDMI 2.0 interfaces. Utilize DDR4 for frame buffering. Employ DSP slices for color space conversion and filtering. Reference designs include 4K video pipeline examples. Performance metrics: 4K60 encoding: ~60% logic utilization. 4K60 decoding: ~50% logic utilization. Multi-channel processing: up to 4x 4K30 streams possible.",
              "decisionGuide": "HME-P3A100 is well-suited for 4K video applications with headroom for processing.",
              "keywords": ["4K video FPGA", "video processing", "HME video"]
            },
            {
              "question": "What debug capabilities are available?",
              "answer": "HME-P3A100 debug features: Embedded Logic Analyzer (ELA) - integrated signal capture and triggering. Trace buffer - up to 128K samples depth. Trigger options - complex trigger conditions including state machines. JTAG - standard JTAG interface for boundary scan and debugging. Probe points - abundant probe points throughout fabric. Software support - Primace includes integrated debugging environment. Advanced features: Cross-triggering between multiple ELAs. Real-time signal viewing during operation. Export captured data for offline analysis. Third-party support: Compatible with popular logic analyzers. GDB support for soft processor debugging.",
              "decisionGuide": "Use integrated ELA for most debugging needs. Add debug logic early in design cycle.",
              "keywords": ["FPGA debugging", "HME debug tools", "embedded logic analyzer"]
            }
          ]
        }
      ]
    }
  ]
};

// Add more categories and products to meet requirements
const additionalCategories = [
  // HME-H Series
  {
    "id": "hme-h-series",
    "slug": "hme-h-series",
    "name": "HME-H Series (Hercules)",
    "description": "Cost-effective 22nm FPGA series offering excellent performance-to-price ratio for mainstream applications.",
    "longDescription": "The HME-H (Hercules) series is built on advanced 22nm process technology, delivering an exceptional balance of performance, power efficiency, and cost-effectiveness. These FPGAs are ideal for cost-sensitive applications that still require modern FPGA capabilities. The series features LUT6 architecture with operating frequencies up to 500MHz, sufficient for most industrial and consumer applications. With logic capacities from 6K to 60K LUT6 equivalents, HME-H devices serve a wide range of applications including industrial control, motor drives, display interfaces, and communication equipment. The 22nm process provides significant power savings compared to older generations, making these devices suitable for thermally constrained designs. As your HME distributor, we provide cost-optimized solutions and technical support for Hercules series deployments.",
    "parameters": ["Logic Capacity (LUT6)", "Block RAM (Kbit)", "DSP Slices", "Max I/O", "Package", "Process"],
    "applications": ["Industrial Control", "Motor Drives", "Display Interfaces", "Communication Equipment", "Consumer Electronics"],
    "series": [
      {
        "name": "HME-H1 Sub-series",
        "description": "Entry-level cost-optimized FPGAs",
        "logicRange": "6K-20K LUT6",
        "process": "22nm"
      },
      {
        "name": "HME-H2 Sub-series",
        "description": "Mid-range FPGAs with enhanced features",
        "logicRange": "20K-40K LUT6",
        "process": "22nm"
      },
      {
        "name": "HME-H3 Sub-series",
        "description": "High-capacity cost-effective FPGAs",
        "logicRange": "40K-60K LUT6",
        "process": "22nm"
      }
    ],
    "selectionGuide": {
      "title": "HME-H Series Selection Guide",
      "description": "Learn how to select the right HME-H FPGA for cost-sensitive applications",
      "articleId": "hme-fpga-selection-guide",
      "articleLink": "/jingwei-qili/support/hme-fpga-selection-guide.html"
    },
    "selectionGuideLink": "/jingwei-qili/support/hme-fpga-selection-guide.html",
    "faqs": [
      {
        "question": "What makes HME-H series cost-effective?",
        "answer": "HME-H cost advantages: 22nm process - smaller die size reduces manufacturing cost. Optimized architecture - efficient LUT6 design maximizes logic per area. Selective hard IP - includes essential IP without unnecessary complexity. Package options - cost-optimized packages for high-volume production. Volume pricing - attractive pricing for production quantities. Total cost of ownership - low power reduces system cooling costs. Comparison: Typically 30-50% lower cost than equivalent performance FPGAs from international vendors. Best for: High-volume applications, cost-sensitive designs, replacement of older generation FPGAs.",
        "decisionGuide": "Choose HME-H when cost is a primary concern without compromising essential features.",
        "keywords": ["low-cost FPGA", "HME-H price", "cost-effective programmable logic"]
      },
      {
        "question": "What is the power consumption advantage of 22nm process?",
        "answer": "22nm power benefits: Static power - 50-60% lower than 40nm/55nm FPGAs. Dynamic power - 20-30% improvement in power efficiency. Total power - typical designs consume 1-3W vs 3-6W on older processes. Thermal benefits - reduced heat dissipation simplifies thermal design. Battery applications - extended operation time for portable devices. Power features: Programmable power modes for unused blocks. Dynamic voltage scaling capability. Fine-grained clock gating. Comparison with competitors: Competitive with Xilinx Artix-7 (28nm) and Intel MAX 10 (55nm) in power efficiency.",
        "decisionGuide": "22nm process provides significant power savings, ideal for thermally constrained designs.",
        "keywords": ["22nm FPGA", "low-power FPGA", "HME-H power"]
      },
      {
        "question": "Is HME-H suitable for industrial applications?",
        "answer": "Industrial suitability: Temperature range - industrial grade (-40°C to +85°C) available. Reliability - designed for 10+ year operation in harsh environments. Features for industrial use: Robust I/O with high ESD protection. Glitch-free clock switching. SEU (Single Event Upset) mitigation features. Long-term supply commitment - 10+ year product lifecycle. Certifications: IEC 61000-4-x for EMC. IEC 61508 for functional safety (with appropriate design). Applications: PLCs, motor drives, industrial Ethernet, HMI displays. Reference designs include industrial communication protocols (Modbus, Profinet, EtherCAT).",
        "decisionGuide": "HME-H is well-suited for industrial applications with appropriate temperature grade selection.",
        "keywords": ["industrial FPGA", "HME-H industrial", "PLC FPGA"]
      },
      {
        "question": "What development tools support HME-H series?",
        "answer": "HME-H tool support: Primace software - full support for HME-H series with optimized algorithms. Design entry - schematic and HDL entry with HME-H-specific templates. Synthesis - area and timing optimization for 22nm architecture. Simulation - integrated simulation with HME-H device models. Debugging - JTAG debugging and embedded logic analyzer support. IP cores - complete library of soft IP optimized for HME-H. Reference designs - extensive collection of application examples. Training - tutorials and workshops specifically for HME-H series. Migration support - tools to help migrate from other vendors' devices.",
        "decisionGuide": "Primace provides comprehensive support for HME-H with optimized tools and IP.",
        "keywords": ["HME-H tools", "Primace software", "FPGA development"]
      },
      {
        "question": "What are common applications for HME-H series?",
        "answer": "Typical HME-H applications: Industrial control - PLCs, I/O modules, motor controllers. Display interfaces - LCD controllers, touch panel interfaces, video scalers. Communication - protocol converters, gateways, industrial Ethernet. Consumer electronics - set-top boxes, digital signage, gaming peripherals. Automotive - infotainment, instrument clusters (non-safety). Medical - diagnostic equipment, patient monitors. Test equipment - portable testers, data loggers. Advantages in these applications: Cost-effectiveness for price-sensitive markets. Sufficient performance for mainstream applications. Low power for portable/thermal-constrained designs. Local support for quick time-to-market.",
        "decisionGuide": "HME-H is ideal for cost-sensitive, mainstream applications across multiple industries.",
        "keywords": ["HME-H applications", "FPGA use cases", "industrial FPGA"]
      }
    ],
    "products": [
      {
        "partNumber": "HME-H3C08",
        "name": "HME-H3C08 Cost-Effective FPGA",
        "shortDescription": "22nm cost-effective FPGA with 8K LUT6, low power consumption, and rich I/O for industrial and consumer applications.",
        "descriptionParagraphs": [
          "The HME-H3C08 is a cost-effective FPGA built on 22nm process technology, featuring 8K LUT6 logic cells (equivalent to 11K LUT4) and operating at up to 250MHz.",
          "This device offers an excellent balance of performance, power efficiency, and cost, making it ideal for price-sensitive applications in industrial control, consumer electronics, and communication equipment.",
          "With 36 user I/O pins and support for multiple I/O standards including LVCMOS, LVDS, and SSTL, the HME-H3C08 provides flexible interfacing options for various peripherals and memory types."
        ],
        "specifications": {
          "Logic Capacity": "8K LUT6 (11K LUT4 equivalent)",
          "Block RAM": "216 Kbit",
          "DSP Slices": "16 18x18 MAC",
          "Max Frequency": "250 MHz",
          "User I/O": "36 pins",
          "I/O Standards": "LVCMOS 3.3/2.5/1.8V, LVDS, SSTL",
          "Packages": "QFN48, LQFP64"
        },
        "features": [
          "Advanced 22nm low-power process",
          "LUT6 architecture with 250MHz performance",
          "Low static power consumption (<100μA typical)",
          "Rich I/O standards support",
          "Embedded 18x18 multipliers",
          "Flexible clock management",
          "Industrial temperature grade available"
        ],
        "applications": [
          "Industrial control and automation",
          "Motor drive controllers",
          "LCD display interfaces",
          "Protocol converters",
          "Sensor interfacing",
          "LED display control"
        ],
        "faeReview": {
          "author": "Li Ming",
          "title": "Senior FAE - Industrial Applications",
          "content": "The HME-H3C08 is my go-to recommendation for cost-sensitive industrial applications. The 22nm process really delivers on power efficiency - I've measured static power as low as 80μA in sleep mode, which is exceptional for an FPGA. For a recent motor controller project, this device replaced a competitor's FPGA at 40% lower cost while providing equivalent functionality. The 8K LUT6 capacity is sufficient for most PLC and control applications I've encountered. I particularly appreciate the flexible I/O - the ability to mix 3.3V and 1.8V I/O on the same device simplifies interfacing to various sensors and actuators. One customer used this in a battery-powered data logger, achieving 6-month operation on a single charge thanks to the low power consumption. The QFN48 package is compact and easy to assemble. Primace tool support is solid, with synthesis typically completing in under 5 minutes for designs this size. For thermal design, most applications don't even need a heatsink - the device runs cool even at full utilization.",
          "highlight": "Excellent cost-effective FPGA with outstanding power efficiency for industrial applications"
        },
        "alternativeParts": [
          {
            "partNumber": "HME-H3C16",
            "brand": "HME",
            "specifications": {
              "Logic Capacity": "16K LUT6",
              "Block RAM": "432 Kbit",
              "DSP Slices": "32",
              "User I/O": "54 pins"
            },
            "comparison": {
              "Logic Capacity": "16K > 8K (+100%)",
              "Block RAM": "432 Kbit > 216 Kbit (+100%)",
              "DSP Slices": "32 > 16 (+100%)",
              "User I/O": "54 > 36 (+50%)"
            },
            "reason": "Double the logic capacity for more complex control algorithms or additional features",
            "useCase": "Use for multi-axis motor control or complex PLC applications",
            "link": "/jingwei-qili/products/hme-h-series/HME-H3C16.html"
          },
          {
            "partNumber": "HME-H2C08",
            "brand": "HME",
            "specifications": {
              "Logic Capacity": "8K LUT6",
              "Process": "40nm",
              "Power": "Higher consumption"
            },
            "comparison": {
              "Logic Capacity": "8K = 8K (same)",
              "Process": "40nm vs 22nm",
              "Power": "2-3x higher",
              "Price": "Lower cost"
            },
            "reason": "Lower cost option when power consumption is not critical",
            "useCase": "Use for cost-sensitive mains-powered applications",
            "link": "/jingwei-qili/products/hme-h-series/HME-H2C08.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "HME-H3C08-EVK",
            "link": "#",
            "description": "Evaluation kit with USB programmer and example designs",
            "category": "Development Kits"
          },
          {
            "partNumber": "SPI Flash W25Q128",
            "link": "#",
            "description": "128Mbit SPI flash for FPGA configuration storage",
            "category": "Memory"
          },
          {
            "partNumber": "LDO Regulator",
            "link": "#",
            "description": "Low-dropout regulator for 1.2V core supply",
            "category": "Power Management"
          },
          {
            "partNumber": "RS-485 Transceiver",
            "link": "#",
            "description": "Industrial communication interface chip",
            "category": "Interface ICs"
          }
        ],
        "faqs": [
          {
            "question": "What is the configuration method for HME-H3C08?",
            "answer": "HME-H3C08 configuration options: SPI Master - reads configuration from external SPI flash (most common). SPI Slave - configuration loaded by external master (MCU or processor). JTAG - direct configuration through JTAG interface for debugging. Configuration details: SPI flash support - standard SPI flashes from 8Mbit to 128Mbit. Configuration time - typically 50-200ms depending on design size. Security - bitstream encryption available to protect IP. Multi-boot - support for fallback configuration images. Recommended practice: Use 16Mbit or larger SPI flash for future expansion. Connect PROGRAM_B pin to pull-up for automatic configuration at power-up.",
            "decisionGuide": "Use SPI master mode with external flash for standalone operation.",
            "keywords": ["FPGA configuration", "SPI flash", "HME-H configuration"]
          },
          {
            "question": "How do I estimate power consumption for my design?",
            "answer": "Power estimation for HME-H3C08: Static power - 80-120μA typical at room temperature. Dynamic power calculation: P = C × V² × f × α. Where C = capacitance, V = voltage, f = frequency, α = activity factor. Typical design examples: Simple control logic: 10-30mW. Motor controller: 50-100mW. Display interface: 30-80mW. Measurement method: Use Primace power estimator for pre-design analysis. Measure actual current with ammeter during operation. Consider worst-case conditions (max temperature, max frequency). Power optimization: Reduce clock frequency where possible. Use clock gating for idle logic. Minimize I/O switching activity.",
            "decisionGuide": "Budget 50-100mW for typical designs. Use Primace estimator for accurate prediction.",
            "keywords": ["FPGA power estimation", "HME-H power", "low-power design"]
          },
          {
            "question": "What clock frequencies can HME-H3C08 support?",
            "answer": "HME-H3C08 clock capabilities: Internal clock - up to 250MHz for logic fabric. I/O performance - DDR interfaces up to 200Mbps. Clock inputs - 4 dedicated clock input pins. Clock management - 2 PLLs for frequency synthesis. PLL features: Input frequency - 10MHz to 200MHz. Output frequency - 10MHz to 500MHz. Multiple output clocks per PLL. Phase shifting capability. Clock distribution: Global clock networks with low skew. Regional clocks for localized logic. Clock gating for power saving. Typical applications: 50-100MHz for control logic. 100-200MHz for data processing. 200-250MHz for high-speed interfaces.",
            "decisionGuide": "250MHz maximum is sufficient for most industrial and consumer applications.",
            "keywords": ["FPGA clock", "HME-H frequency", "PLL configuration"]
          },
          {
            "question": "Can HME-H3C08 replace microcontrollers in my design?",
            "answer": "FPGA vs MCU trade-offs: When FPGA is better: Parallel processing - multiple operations simultaneously. Custom interfaces - non-standard or multiple protocols. Real-time requirements - deterministic response times. Flexibility - reconfigurable hardware for future upgrades. When MCU is better: Sequential processing - single-threaded algorithms. Code size - large program memory requirements. Cost - very low-cost simple applications. Power - ultra-low power sleep modes. Hybrid approach: Use soft processor core in FPGA for control tasks. Combine FPGA logic with external MCU for best of both. HME-H3C08 includes RISC-V soft core option. Migration considerations: Porting C code to FPGA requires RTL design. Consider development time vs. performance benefits.",
            "decisionGuide": "Evaluate based on parallelism needs, interface requirements, and flexibility requirements.",
            "keywords": ["FPGA vs MCU", "soft processor", "RISC-V FPGA"]
          },
          {
            "question": "What is the recommended PCB layout for HME-H3C08?",
            "answer": "HME-H3C08 layout guidelines: Power supply: Use 1.2V ±5% for core voltage. Provide adequate decoupling - 0.1μF and 10μF capacitors near each power pin. Use separate power planes for VCCINT, VCCIO, and GND. Clock routing: Route clock signals first with shortest paths. Use differential pairs for LVDS clocks. Keep clock away from switching signals. I/O considerations: Group I/O by voltage bank. Match trace lengths for bus signals. Use series termination for long traces. Configuration pins: Connect PROGRAM_B to pull-up resistor. Route SPI flash close to FPGA. Provide JTAG header for debugging. Thermal design: QFN48 typically doesn't need heatsink. Ensure adequate copper area for heat dissipation.",
            "decisionGuide": "Follow HME reference design for optimal layout. Contact us for layout review.",
            "keywords": ["FPGA PCB layout", "HME-H layout", "QFN48 footprint"]
          }
        ]
      }
    ]
  }
];

productsData.categories = [...productsData.categories, ...additionalCategories];

fs.writeFileSync(path.join(brandDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✓ products.json created');

// 3. Create solutions.json
const solutionsData = {
  "seoTitle": "Jingwei Qili HME FPGA Solutions - Application Solutions",
  "seoDescription": "Complete FPGA solutions for communications, industrial control, video processing, and AI applications using HME programmable logic devices.",
  "seoKeywords": [
    "HME FPGA solutions",
    "FPGA application solutions",
    "5G FPGA design",
    "industrial FPGA solution",
    "video processing FPGA",
    "AI acceleration FPGA"
  ],
  "faqs": [
    {
      "question": "What types of solutions does HME provide?",
      "answer": "HME solution categories: Communication solutions - 5G baseband, optical transport, satellite communications. Industrial solutions - PLC systems, motor control, machine vision. Video solutions - encoding/decoding, image processing, display control. AI solutions - edge inference, neural network acceleration. Reference designs - complete working systems with source code. Application notes - detailed implementation guides. IP libraries - reusable functional blocks. Custom solutions - tailored designs for specific customer needs.",
      "decisionGuide": "Browse our solution library or contact us for custom solution development.",
      "keywords": ["HME solutions", "FPGA reference designs", "FPGA applications"]
    },
    {
      "question": "How can I get started with an HME solution?",
      "answer": "Getting started with HME solutions: 1) Review solution documentation - understand architecture and features. 2) Obtain evaluation kit - hardware platform for testing. 3) Download reference design - source code and project files. 4) Study application notes - implementation guidelines. 5) Contact FAE support - technical guidance and optimization. 6) Customize for your needs - modify reference design as required. 7) Prototype and validate - test in your application environment. Support available: Online documentation and tutorials. Video training materials. FAE consultation and design review.",
      "decisionGuide": "Start with evaluation kit and reference design, then customize for your specific requirements.",
      "keywords": ["HME getting started", "FPGA evaluation", "reference design"]
    }
  ],
  "solutions": [
    {
      "id": "5g-baseband-processing",
      "slug": "5g-baseband-processing",
      "title": "5G Baseband Processing Solution",
      "subtitle": "High-performance FPGA-based 5G NR baseband processing platform",
      "description": "Complete 5G baseband processing solution using HME-P series FPGAs, supporting both gNodeB and UE implementations with high throughput and low latency.",
      "longDescription": "This comprehensive 5G baseband processing solution leverages the high-performance capabilities of HME-P series FPGAs to implement complete 5G NR physical layer processing. The solution supports both sub-6GHz and mmWave frequency bands, with configurable bandwidths from 5MHz to 100MHz. Key components include channel estimation, equalization, modulation/demodulation, and forward error correction. The FPGA-based implementation provides flexibility for protocol updates and customization while delivering the performance required for commercial 5G deployments. With HME-P3 series devices, the solution achieves throughputs exceeding 10Gbps with latency under 1ms, meeting the stringent requirements of 5G networks. The modular architecture allows scaling from small cells to macro base stations.",
      "benefits": [
        "Complete 5G NR physical layer implementation",
        "Support for sub-6GHz and mmWave bands",
        "Scalable architecture from small cell to macro",
        "Low latency (<1ms) for URLLC applications",
        "Flexible software-defined radio approach",
        "Local technical support and customization"
      ],
      "coreAdvantages": [
        {
          "title": "High Throughput",
          "description": "Supports 10Gbps+ data rates with efficient parallel processing architecture",
          "icon": "speed"
        },
        {
          "title": "Low Latency",
          "description": "Sub-millisecond processing latency meets 5G URLLC requirements",
          "icon": "timer"
        },
        {
          "title": "Flexible Architecture",
          "description": "Software-defined approach enables protocol updates and customization",
          "icon": "settings"
        },
        {
          "title": "Cost Effective",
          "description": "Domestic solution reduces cost and supply chain risks",
          "icon": "savings"
        }
      ],
      "bomList": {
        "title": "5G Baseband Processing BOM",
        "description": "Key components for 5G baseband implementation",
        "items": [
          {
            "category": "FPGA",
            "items": [
              {
                "partNumber": "HME-P3A100",
                "description": "Main processing FPGA for baseband",
                "quantity": 1,
                "alternatives": ["HME-P3A150"]
              }
            ]
          },
          {
            "category": "Memory",
            "items": [
              {
                "partNumber": "DDR4-3200 8GB",
                "description": "High-speed data buffer",
                "quantity": 2
              }
            ]
          },
          {
            "category": "Interface",
            "items": [
              {
                "partNumber": "25G Ethernet PHY",
                "description": "Fronthaul interface",
                "quantity": 2
              }
            ]
          }
        ]
      },
      "technicalSpecs": {
        "title": "Technical Specifications",
        "specs": [
          {
            "name": "Supported Bands",
            "value": "Sub-6GHz (n77/n78/n79), mmWave (n257/n258/n261)"
          },
          {
            "name": "Channel Bandwidth",
            "value": "5/10/15/20/25/30/40/50/60/80/100 MHz"
          },
          {
            "name": "MIMO Configuration",
            "value": "Up to 64x64 MIMO"
          },
          {
            "name": "Throughput",
            "value": "10 Gbps (DL), 5 Gbps (UL)"
          },
          {
            "name": "Processing Latency",
            "value": "< 1ms"
          },
          {
            "name": "Power Consumption",
            "value": "25-40W (depending on configuration)"
          }
        ]
      },
      "customerCases": [
        {
          "title": "5G Small Cell Deployment",
          "customer": "Major Telecom Equipment Vendor",
          "challenge": "Needed cost-effective 5G small cell solution with local support",
          "solution": "Implemented HME-P3A100 based 5G baseband processing unit",
          "results": [
            "Achieved 20% cost reduction compared to international FPGA solution",
            "Met all 3GPP performance requirements",
            "Reduced time-to-market with local FAE support"
          ]
        }
      ],
      "faeInsights": {
        "overview": "Our FAE team has extensive experience in 5G baseband implementations using HME FPGAs. The key to success is proper system partitioning between hardware accelerators and software control.",
        "keyPoints": [
          "Partition computationally intensive functions (FFT, FEC) to FPGA hardware",
          "Use HME hard IP for DDR and PCIe interfaces to save logic resources",
          "Implement timing-critical functions in dedicated FPGA logic",
          "Leverage HME reference designs as starting point for customization"
        ],
        "decisionGuide": "Start with HME reference design and customize based on your specific bandwidth and MIMO requirements. Our FAE team can assist with system architecture and optimization.",
        "contactInfo": "Contact our 5G specialist FAE team for architecture review and implementation support."
      },
      "faqs": [
        {
          "question": "What 5G features are supported by this solution?",
          "answer": "Supported 5G features: 5G NR Release 15 and 16 features. Channel bandwidth: 5-100MHz. Subcarrier spacing: 15/30/60/120kHz. Modulation: QPSK, 16QAM, 64QAM, 256QAM. MIMO: Up to 64x64. Waveforms: CP-OFDM, DFT-s-OFDM. Duplex modes: TDD and FDD. Notable features: Massive MIMO beamforming. LDPC and Polar coding. Dynamic spectrum sharing. Network slicing support. Roadmap: Release 17 features in development. mmWave enhancements planned.",
          "decisionGuide": "Contact us for detailed feature list and roadmap information.",
          "keywords": ["5G NR features", "5G FPGA support", "5G implementation"]
        },
        {
          "question": "How does this compare to ASIC solutions?",
          "answer": "FPGA vs ASIC for 5G: FPGA advantages: Flexibility - protocol updates and customization. Time-to-market - faster development cycle. Lower NRE - no mask costs for low volumes. Scalability - same hardware for different configurations. ASIC advantages: Lower cost - significantly cheaper at high volumes. Lower power - optimized for specific function. Smaller size - higher integration. Recommendation: Use FPGA for development, early deployment, and low-volume products. Transition to ASIC for high-volume mature products. Hybrid approach - FPGA for flexible functions, ASIC for fixed high-volume blocks.",
          "decisionGuide": "FPGA is ideal for development and flexible deployment. Evaluate ASIC for high-volume production.",
          "keywords": ["5G FPGA vs ASIC", "baseband implementation", "5G hardware"]
        }
      ]
    },
    {
      "id": "industrial-machine-vision",
      "slug": "industrial-machine-vision",
      "title": "Industrial Machine Vision Solution",
      "subtitle": "High-speed image processing and inspection system using HME FPGAs",
      "description": "Complete machine vision solution for industrial inspection, measurement, and quality control applications with real-time processing capabilities.",
      "longDescription": "This industrial machine vision solution leverages HME FPGA capabilities to deliver high-speed, real-time image processing for manufacturing quality control. The system supports multiple camera interfaces including GigE Vision, USB3 Vision, and Camera Link, with the ability to process 4K video streams at 60fps. Key processing functions include image preprocessing, feature extraction, defect detection, and measurement algorithms. The FPGA-based implementation provides deterministic processing latency essential for high-speed production lines. With HME-P2 series devices, the solution can process up to 8 camera streams simultaneously, making it suitable for comprehensive inspection systems. The modular design allows customization for specific inspection requirements.",
      "benefits": [
        "Real-time 4K60 image processing",
        "Support for multiple camera interfaces",
        "Deterministic low-latency processing",
        "Scalable multi-camera architecture",
        "Customizable inspection algorithms",
        "Industrial temperature grade reliability"
      ],
      "coreAdvantages": [
        {
          "title": "High Throughput",
          "description": "Process multiple 4K streams simultaneously with parallel FPGA architecture",
          "icon": "camera"
        },
        {
          "title": "Low Latency",
          "description": "Deterministic processing ensures real-time response for high-speed lines",
          "icon": "timer"
        },
        {
          "title": "Flexible Interface",
          "description": "Support for GigE Vision, USB3 Vision, Camera Link, and MIPI cameras",
          "icon": "cable"
        },
        {
          "title": "Customizable",
          "description": "FPGA flexibility enables custom algorithms for specific inspection needs",
          "icon": "settings"
        }
      ],
      "bomList": {
        "title": "Machine Vision System BOM",
        "description": "Key components for machine vision implementation",
        "items": [
          {
            "category": "FPGA",
            "items": [
              {
                "partNumber": "HME-P2A100",
                "description": "Image processing FPGA",
                "quantity": 1,
                "alternatives": ["HME-P3A100"]
              }
            ]
          },
          {
            "category": "Interface",
            "items": [
              {
                "partNumber": "GigE PHY",
                "description": "Gigabit Ethernet for camera interface",
                "quantity": 4
              }
            ]
          },
          {
            "category": "Memory",
            "items": [
              {
                "partNumber": "DDR3 2GB",
                "description": "Frame buffer memory",
                "quantity": 1
              }
            ]
          }
        ]
      },
      "technicalSpecs": {
        "title": "Technical Specifications",
        "specs": [
          {
            "name": "Camera Interfaces",
            "value": "GigE Vision, USB3 Vision, Camera Link, MIPI CSI-2"
          },
          {
            "name": "Max Resolution",
            "value": "4K (3840x2160) at 60fps"
          },
          {
            "name": "Multi-camera Support",
            "value": "Up to 8 cameras simultaneously"
          },
          {
            "name": "Processing Latency",
            "value": "< 5ms (frame grab to result)"
          },
          {
            "name": "Algorithms",
            "value": "Edge detection, blob analysis, pattern matching, measurement"
          },
          {
            "name": "Operating Temperature",
            "value": "-20°C to +60°C (industrial grade)"
          }
        ]
      },
      "customerCases": [
        {
          "title": "PCB Inspection System",
          "customer": "Electronics Manufacturer",
          "challenge": "Required high-speed AOI system for PCB defect detection",
          "solution": "Deployed HME-P2 based 4-camera inspection system",
          "results": [
            "Achieved 99.5% defect detection rate",
            "Processing speed increased by 40%",
            "System cost reduced by 25% compared to imported solution"
          ]
        }
      ],
      "faeInsights": {
        "overview": "Machine vision applications require careful balance between processing capability and latency. Our FAE team specializes in optimizing FPGA architectures for vision applications.",
        "keyPoints": [
          "Use HME hard MIPI D-PHY for direct camera connection",
          "Implement pipeline architecture for streaming processing",
          "Leverage DSP slices for convolution and filtering operations",
          "Use DDR memory for multi-frame buffering and analysis"
        ],
        "decisionGuide": "Start with single-camera setup and scale to multi-camera as needed. Our FAE team can help optimize algorithms for your specific inspection requirements.",
        "contactInfo": "Contact our machine vision specialist FAE for system architecture consultation."
      },
      "faqs": [
        {
          "question": "What image processing functions are included?",
          "answer": "Included image processing functions: Preprocessing - color space conversion, noise reduction, histogram equalization. Filtering - Gaussian, median, Sobel, Laplacian filters. Analysis - edge detection, blob analysis, contour extraction. Measurement - distance, angle, area calculations. Pattern matching - template matching, feature correlation. Defect detection - scratch, stain, dimensional checks. Custom algorithms - FPGA flexibility allows custom implementations. Performance: Most functions execute in single clock cycle per pixel. Complex algorithms complete within 1-2 frame periods.",
          "decisionGuide": "Reference design includes common functions. Custom algorithms can be added based on specific requirements.",
          "keywords": ["image processing", "machine vision algorithms", "FPGA vision"]
        },
        {
          "question": "How many cameras can the system support?",
          "answer": "Camera support capacity: Single FPGA - up to 4 cameras with HME-P2A100. Up to 8 cameras with HME-P3A100. Interface limitations: GigE Vision - limited by Ethernet bandwidth. USB3 Vision - limited by USB controller. Camera Link - limited by FPGA I/O count. MIPI CSI-2 - up to 4 lanes per camera. Processing considerations: Total bandwidth must not exceed FPGA processing capacity. DDR memory bandwidth limits concurrent processing. Recommendations: For 4K cameras, limit to 2-4 cameras per FPGA. For HD cameras, up to 8 cameras possible. Multi-FPGA architecture for larger systems.",
          "decisionGuide": "Contact us for multi-camera system architecture based on your resolution and frame rate requirements.",
          "keywords": ["multi-camera", "machine vision system", "FPGA camera interface"]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('✓ solutions.json created');

// 4. Create support.json
const supportData = {
  "seoTitle": "Jingwei Qili HME FPGA Support - Technical Resources",
  "seoDescription": "Comprehensive technical support for HME FPGAs including application guides, design documentation, and FAE assistance.",
  "seoKeywords": [
    "HME FPGA support",
    "Jingwei Qili documentation",
    "FPGA application guide",
    "HME design guide",
    "FPGA technical support"
  ],
  "faqs": [
    {
      "question": "What technical resources are available for HME FPGAs?",
      "answer": "Available technical resources: Documentation - datasheets, user manuals, application notes. Design tools - Primace software with free license. Reference designs - complete working examples. IP libraries - verified functional blocks. Training materials - tutorials, videos, workshops. FAE support - direct technical assistance. Community - user forums and knowledge base. Evaluation resources - development kits and samples.",
      "decisionGuide": "Start with documentation and reference designs. Contact FAE for specific technical questions.",
      "keywords": ["HME resources", "FPGA documentation", "technical support"]
    },
    {
      "question": "How can I get technical support for my HME FPGA project?",
      "answer": "Technical support channels: Online resources - documentation, FAQs, knowledge base. Email support - technical questions answered within 24 hours. Phone support - direct access to FAE engineers. On-site support - available for complex projects. Design review - FAE can review your design and provide recommendations. Training - workshops and customized training sessions. Community - user forums for peer support. Contact your local distributor (LiTong) for immediate assistance.",
      "decisionGuide": "Contact LiTong FAE team for all technical support needs. We provide comprehensive assistance throughout your project.",
      "keywords": ["HME support", "FAE assistance", "technical help"]
    }
  ],
  "articles": [
    {
      "id": "hme-fpga-selection-guide",
      "title": "HME FPGA Selection Guide - Choosing the Right Device",
      "slug": "hme-fpga-selection-guide",
      "author": {
        "name": "Dr. Wang Wei",
        "title": "Principal FAE",
        "bio": "Dr. Wang has 15+ years of FPGA application experience and has supported hundreds of successful HME FPGA designs across various industries.",
        "image": "/assets/team/wang-wei.jpg"
      },
      "publishDate": "2024-01-15",
      "category": "Design Guide",
      "tags": ["FPGA Selection", "HME", "Design Guide", "Getting Started"],
      "summary": "Comprehensive guide to selecting the right HME FPGA device for your application, covering series comparison, resource estimation, and selection criteria.",
      "content": "## Introduction\n\nSelecting the right FPGA is crucial for project success. This guide provides a systematic approach to choosing the optimal HME FPGA device...",
      "relatedArticles": ["hme-development-guide", "hme-power-estimation", "hme-migration-guide"],
      "faeInsights": {
        "overview": "The most common mistake in FPGA selection is over-specifying the device. I recommend starting with a conservative estimate and using HME's scalability within series.",
        "keyPoints": [
          "Estimate logic requirements using historical data from similar designs",
          "Consider future expansion needs but avoid excessive headroom",
          "Factor in hard IP requirements when selecting device family",
          "Evaluate total cost including power and thermal management"
        ],
        "commonMistakes": [
          "Over-specifying logic capacity 'just to be safe'",
          "Ignoring hard IP requirements until late in design",
          "Not considering power consumption in device selection",
          "Choosing package before verifying I/O requirements"
        ]
      },
      "customerCases": [
        {
          "title": "Communication Equipment Selection",
          "challenge": "Customer needed to select FPGA for 5G small cell baseband",
          "approach": "Analyzed processing requirements, interface needs, and power budget",
          "result": "Selected HME-P3A100, achieving optimal cost-performance balance"
        }
      ],
      "faqs": [
        {
          "question": "How do I estimate logic capacity requirements?",
          "answer": "Logic estimation methods: Historical data - use previous similar designs as baseline. Synthesis trials - synthesize critical modules to estimate resource usage. Rule of thumb: Control logic - 500-1000 LUTs per state machine. Data path - depends on width and complexity. Interfaces - check IP core documentation for resource usage. Buffering - estimate memory requirements separately. Margin - add 20-30% margin for future expansion. Tools: Use Primace resource estimator. Consult HME FAE for complex designs.",
          "decisionGuide": "Start with estimation, then verify with actual synthesis of critical modules.",
          "keywords": ["FPGA resource estimation", "logic capacity", "design sizing"]
        }
      ]
    },
    {
      "id": "hme-development-guide",
      "title": "HME FPGA Development Getting Started Guide",
      "slug": "hme-development-guide",
      "author": {
        "name": "Li Ming",
        "title": "Senior FAE",
        "bio": "Li Ming specializes in industrial FPGA applications and has helped numerous customers successfully deploy HME FPGAs in automation and control systems.",
        "image": "/assets/team/li-ming.jpg"
      },
      "publishDate": "2024-02-01",
      "category": "Tutorial",
      "tags": ["Development", "Primace", "Tutorial", "Getting Started"],
      "summary": "Step-by-step guide to getting started with HME FPGA development, from tool installation to first successful design implementation.",
      "content": "## Development Environment Setup\n\nThis guide walks you through setting up the HME FPGA development environment...",
      "relatedArticles": ["hme-fpga-selection-guide", "hme-debug-guide", "hme-ip-integration"],
      "faeInsights": {
        "overview": "The key to successful FPGA development is understanding the tool flow and following best practices from the start.",
        "keyPoints": [
          "Install latest Primace version for best device support",
          "Start with reference designs to understand tool flow",
          "Use version control for your FPGA projects",
          "Establish coding standards for team development"
        ],
        "commonMistakes": [
          "Not reading tool documentation before starting",
          "Skipping simulation and going straight to hardware",
          "Not constraining timing from the beginning",
          "Ignoring warning messages during synthesis"
        ]
      },
      "customerCases": [
        {
          "title": "Industrial Controller Development",
          "challenge": "Customer new to HME FPGAs needed to develop motor controller",
          "approach": "Followed getting started guide with FAE mentoring",
          "result": "Successful prototype within 4 weeks"
        }
      ],
      "faqs": [
        {
          "question": "What are the system requirements for Primace?",
          "answer": "Primace system requirements: Operating System - Windows 10/11 (64-bit), Linux RHEL/CentOS 7+. CPU - Intel Core i5 or better, multi-core recommended. Memory - 16GB RAM minimum, 32GB recommended for large designs. Storage - 50GB free space for installation. Display - 1920x1080 or higher resolution. Additional: USB port for programming cable. Internet connection for license activation and updates. Virtual machines - supported with proper USB passthrough.",
          "decisionGuide": "Use recommended specifications for best experience with large designs.",
          "keywords": ["Primace requirements", "FPGA tools", "development environment"]
        }
      ]
    },
    {
      "id": "hme-power-estimation",
      "title": "Power Estimation and Thermal Design for HME FPGAs",
      "slug": "hme-power-estimation",
      "author": {
        "name": "Zhang Hua",
        "title": "Power Management Specialist",
        "bio": "Zhang Hua has extensive experience in FPGA power analysis and thermal design, helping customers optimize power consumption in their designs.",
        "image": "/assets/team/zhang-hua.jpg"
      },
      "publishDate": "2024-02-15",
      "category": "Technical Guide",
      "tags": ["Power", "Thermal", "Design Guide", "Optimization"],
      "summary": "Comprehensive guide to power estimation, thermal analysis, and power optimization techniques for HME FPGA designs.",
      "content": "## Power Fundamentals\n\nUnderstanding FPGA power consumption is essential for reliable system design...",
      "relatedArticles": ["hme-fpga-selection-guide", "hme-pcb-design", "hme-development-guide"],
      "faeInsights": {
        "overview": "Power estimation should be done early in the design cycle. I've seen too many designs require hardware changes due to inadequate power analysis.",
        "keyPoints": [
          "Use Primace power estimator for early analysis",
          "Measure actual power during prototype validation",
          "Consider worst-case conditions (temperature, voltage, process)",
          "Plan thermal management early in mechanical design"
        ],
        "commonMistakes": [
          "Ignoring static power in battery-powered designs",
          "Not considering temperature effects on power",
          "Inadequate decoupling capacitor placement",
          "Undersizing power supply for peak demands"
        ]
      },
      "customerCases": [
        {
          "title": "Battery-Powered Device Optimization",
          "challenge": "Customer needed to minimize power for portable equipment",
          "approach": "Implemented power optimization techniques from this guide",
          "result": "Achieved 60% power reduction, extending battery life"
        }
      ],
      "faqs": [
        {
          "question": "How accurate is the Primace power estimator?",
          "answer": "Power estimator accuracy: Typical accuracy - ±20% for most designs. Factors affecting accuracy: Clock frequency assumptions. Toggle rate estimates. I/O activity predictions. Temperature assumptions. Best practices: Use realistic activity rates (not 100%). Include margin for design changes. Validate with actual measurements. Update estimates as design matures. For critical applications: Add 30% margin to estimated power. Measure actual power on prototype. Characterize across temperature range.",
          "decisionGuide": "Use estimator for planning, but always validate with actual measurements.",
          "keywords": ["power estimation", "FPGA power", "Primace estimator"]
        }
      ]
    },
    {
      "id": "hme-migration-guide",
      "title": "Migrating from Xilinx/Altera to HME FPGAs",
      "slug": "hme-migration-guide",
      "author": {
        "name": "Dr. Wang Wei",
        "title": "Principal FAE",
        "bio": "Dr. Wang has led numerous successful migration projects, helping customers transition from international FPGA vendors to HME solutions.",
        "image": "/assets/team/wang-wei.jpg"
      },
      "publishDate": "2024-03-01",
      "category": "Migration Guide",
      "tags": ["Migration", "Xilinx", "Altera", "Porting"],
      "summary": "Comprehensive guide to migrating FPGA designs from Xilinx and Altera devices to HME FPGAs, covering methodology, common issues, and best practices.",
      "content": "## Migration Overview\n\nMigrating from established FPGA vendors to HME requires careful planning and execution...",
      "relatedArticles": ["hme-fpga-selection-guide", "hme-development-guide", "hme-ip-integration"],
      "faeInsights": {
        "overview": "Successful migration requires understanding architectural differences and planning for IP replacement. Most RTL code ports directly with minimal changes.",
        "keyPoints": [
          "Start with architectural comparison and device mapping",
          "Identify and plan for IP core replacements",
          "Port RTL code incrementally, module by module",
          "Validate functionality at each stage before proceeding"
        ],
        "commonMistakes": [
          "Attempting to port entire design at once",
          "Not accounting for timing differences",
          "Ignoring IP licensing and replacement costs",
          "Insufficient testing of ported modules"
        ]
      },
      "customerCases": [
        {
          "title": "Industrial Controller Migration",
          "challenge": "Customer needed to migrate from Xilinx Spartan-6 to HME",
          "approach": "Systematic module-by-module migration with FAE support",
          "result": "Successful migration with 15% cost reduction and improved performance"
        }
      ],
      "faqs": [
        {
          "question": "How much RTL code modification is typically required?",
          "answer": "RTL modification requirements: Synthesizable RTL - typically 90-95% portable without changes. Vendor-specific primitives - require replacement (5-10% of code). IP cores - need HME equivalent or custom implementation. Constraints - timing constraints need format conversion. Common changes: Clocking primitives (MMCM/PLL instantiation). I/O standards and constraints. Memory instantiation (if using vendor-specific RAM). DSP slice usage (if using vendor-specific DSP). Recommendation: Start with pure RTL modules. Identify vendor-specific components. Plan replacements using HME equivalents.",
          "decisionGuide": "Most designs require minimal RTL changes. Focus on identifying vendor-specific components early.",
          "keywords": ["FPGA migration", "RTL porting", "Xilinx to HME"]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✓ support.json created');

// 5. Create news.json
const newsData = {
  "news": []
};

fs.writeFileSync(path.join(brandDir, 'news.json'), JSON.stringify(newsData, null, 2));
console.log('✓ news.json created');

console.log('\n✅ All Jingwei Qili (HME) FPGA brand data files have been created successfully!');
console.log('\nNext step: Run validation to verify data integrity');
