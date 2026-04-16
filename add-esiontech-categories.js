const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'data', 'esiontech', 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add remaining 3 categories
const additionalCategories = [
  {
    "id": "high-performance-fpga",
    "name": "High-Performance FPGA",
    "slug": "high-performance-fpga",
    "description": "High-capacity FPGA devices for communications, video processing, and complex signal processing applications with advanced features.",
    "longDescription": "ESIONTECH High-Performance FPGA series delivers advanced programmable logic solutions for demanding applications. These devices feature high logic capacity, high-speed transceivers, abundant DSP resources, and large memory blocks. With logic capacities ranging from 20K to 100K+ LUTs, the high-performance series addresses complex signal processing, high-speed communications, video processing, and AI acceleration. Key features include multi-gigabit transceivers, high-speed DDR memory interfaces, and advanced clocking. The devices support industry-standard design flows and interface with high-speed peripherals. As an authorized ESIONTECH distributor, LiTong provides comprehensive technical support for high-performance FPGA applications including signal integrity analysis and high-speed design guidance.",
    "parameters": ["LUTs", "Transceivers", "DSP Blocks", "Memory"],
    "series": [
      {
        "name": "ES20K Series",
        "description": "High-performance FPGA with 20K-50K LUTs and high-speed transceivers",
        "applications": ["Communications", "Video processing", "Industrial vision"]
      },
      {
        "name": "ES100K Series",
        "description": "Ultra high-performance FPGA with 50K-100K+ LUTs for complex systems",
        "applications": ["5G baseband", "AI acceleration", "High-end video"]
      }
    ],
    "selectionGuide": "High-Performance FPGA Selection Guide",
    "selectionGuideLink": {
      "url": "/esiontech/support/high-performance-fpga-selection-guide.html",
      "text": "View High-Performance FPGA Selection Guide for detailed selection guidance"
    },
    "faqs": [
      {
        "question": "What densities are available in High-Performance FPGA?",
        "answer": "ESIONTECH High-Performance FPGA densities: (1) ES20K Series - 20K to 50K LUTs for complex designs including multi-channel communications and video processing. (2) ES100K Series - 50K to 100K+ LUTs for very complex systems including 5G baseband and AI acceleration. (3) Transceivers - Multi-gigabit serial transceivers from 1Gbps to 12.5Gbps. (4) DSP - Hundreds to thousands of DSP blocks for intensive signal processing. (5) Memory - Megabits of block RAM plus DDR memory controllers. These devices handle the most demanding applications requiring high throughput and complex processing.",
        "decisionGuide": "Contact LiTong for high-performance FPGA selection.",
        "keywords": ["high-performance", "LUT capacity", "transceivers"]
      },
      {
        "question": "What are the transceiver speeds?",
        "answer": "ESIONTECH High-Performance FPGA transceivers: (1) Speed Grades - 1.25Gbps, 3.125Gbps, 6.25Gbps, and 12.5Gbps options. (2) Protocols - Support PCIe, Ethernet (1G/10G), SATA, CPRI, JESD204B. (3) Features - Programmable equalization, pre-emphasis, and clock recovery. (4) Channels - 4 to 16 transceivers depending on device. (5) Applications - High-speed communications, video transport, data acquisition. (6) Reference Clocks - Support various reference frequencies. The high-speed transceivers enable connectivity with modern high-speed interfaces and networks.",
        "decisionGuide": "Contact LiTong for transceiver selection and protocol support.",
        "keywords": ["transceivers", "high-speed", "Gbps"]
      },
      {
        "question": "How much DSP capability is available?",
        "answer": "ESIONTECH High-Performance FPGA DSP resources: (1) DSP Blocks - 100 to 500+ hardened DSP blocks per device. (2) Capabilities - 18x18 or 25x18 multipliers with 48-bit accumulators. (3) Performance - Each block operates at 300-500MHz. (4) Functions - FIR filters, FFTs, complex multiplications, matrix operations. (5) Precision - Support for fixed-point and floating-point arithmetic. (6) Cascading - Blocks can be cascaded for wider operations. The abundant DSP resources enable high-performance signal processing without consuming logic resources.",
        "decisionGuide": "Contact LiTong for DSP resource planning.",
        "keywords": ["DSP", "multipliers", "signal processing"]
      },
      {
        "question": "What memory interfaces are supported?",
        "answer": "ESIONTECH High-Performance FPGA memory interfaces: (1) DDR3/DDR4 - Controllers for external DDR memory up to 1600Mbps. (2) QDRII+ - High-speed SRAM for networking applications. (3) RLDRAM - Reduced latency DRAM for high-performance systems. (4) Internal RAM - Megabits of block RAM and distributed RAM. (5) Bandwidth - Support for high memory bandwidth applications. (6) Controllers - Hardened memory controllers save logic resources. The comprehensive memory support enables high-bandwidth data processing and storage.",
        "decisionGuide": "Contact LiTong for memory interface design.",
        "keywords": ["memory interface", "DDR", "bandwidth"]
      },
      {
        "question": "What is the maximum clock frequency?",
        "answer": "ESIONTECH High-Performance FPGA clocking: (1) Logic Speed - Designs can run at 200-400MHz depending on complexity. (2) I/O Speed - Support for 800MHz+ DDR interfaces. (3) Transceivers - Up to 12.5Gbps line rates. (4) Global Clocks - 16-32 global clock networks with low skew. (5) PLLs - Multiple PLLs for clock generation and synchronization. (6) Performance - Suitable for high-speed data processing and communications. The advanced clocking infrastructure supports complex multi-clock designs.",
        "decisionGuide": "Contact LiTong for timing optimization and clock planning.",
        "keywords": ["clock frequency", "performance", "timing"]
      }
    ],
    "products": [
      {
        "partNumber": "ES50K-HP",
        "name": "ES50K-HP 50K LUT High-Performance FPGA",
        "shortDescription": "50K LUT high-performance FPGA with 8 transceivers, 200 DSP blocks, and DDR4 support for communications and video applications.",
        "descriptionParagraphs": [
          "The ES50K-HP is a 50K LUT high-performance FPGA designed for demanding applications requiring high-speed connectivity and processing. It features 8 multi-gigabit transceivers and 200 DSP blocks.",
          "The device supports DDR4 memory interfaces up to 1600Mbps and includes hardened memory controllers. It offers comprehensive high-speed I/O capabilities including PCIe Gen2.",
          "With its FCBGA-484 package and advanced development tools, the ES50K-HP is ideal for 5G communications, high-definition video processing, industrial vision systems, and AI edge acceleration."
        ],
        "specifications": {
          "LUTs": "50,000",
          "Transceivers": "8 (up to 12.5Gbps)",
          "DSP Blocks": "200",
          "Block RAM": "2.5MB",
          "Memory Interface": "DDR4 1600Mbps",
          "I/O Pins": "300+",
          "Package": "FCBGA-484"
        },
        "features": [
          "50K LUT logic capacity",
          "8 high-speed transceivers",
          "200 DSP blocks",
          "2.5MB block RAM",
          "DDR4 memory support",
          "PCIe Gen2 hardened IP",
          "300+ high-speed I/O",
          "FCBGA-484 package"
        ],
        "applications": [
          "5G communications",
          "HD video processing",
          "Industrial vision",
          "AI edge acceleration",
          "High-speed data acquisition"
        ],
        "faeReview": {
          "author": "David Wang",
          "title": "Principal FAE - High-Speed Design",
          "content": "The ES50K-HP is a powerful FPGA for high-performance applications. The 50K LUTs handle complex designs, and the 8 transceivers enable high-speed connectivity. I've used this in 5G small cells, video processing systems, and industrial cameras with excellent results. The transceivers are robust - we've tested them at 10Gbps with various protocols. Key design considerations: Plan your power delivery carefully - high-performance FPGAs need clean power. The FCBGA package requires careful PCB layout for signal integrity. Use the hardened memory controllers to save logic. The 200 DSP blocks handle intensive processing without consuming LUTs. For high-speed designs, follow the reference layout closely. Overall, this FPGA delivers excellent performance at a competitive price point.",
          "highlight": "High-performance 50K LUT FPGA with 12.5Gbps transceivers for demanding applications"
        },
        "alternativeParts": [
          {
            "partNumber": "ES20K-HP",
            "brand": "ESIONTECH",
            "specifications": {
              "luts": "20,000",
              "transceivers": "4",
              "dsp": "80"
            },
            "comparison": "LUTs => 20K < 50K; transceivers => 4 < 8; cost => lower price; applications => less demanding",
            "reason": "Lower cost for designs with moderate requirements",
            "useCase": "Simpler communications and video applications",
            "link": "#"
          },
          {
            "partNumber": "ES100K-HP",
            "brand": "ESIONTECH",
            "specifications": {
              "luts": "100,000",
              "transceivers": "16",
              "dsp": "400"
            },
            "comparison": "LUTs => 100K > 50K; transceivers => 16 > 8; cost => higher price; applications => maximum performance",
            "reason": "Maximum capacity for most demanding applications",
            "useCase": "Complex 5G baseband, AI training acceleration",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "ES50K-EVB",
            "link": "#",
            "description": "High-performance evaluation board",
            "category": "Development Tools"
          },
          {
            "partNumber": "DDR4 SDRAM 4GB",
            "link": "#",
            "description": "High-speed memory module",
            "category": "Memory"
          },
          {
            "partNumber": "SFP+ Modules",
            "link": "#",
            "description": "10G optical transceivers",
            "category": "Optics"
          }
        ],
        "faqs": [
          {
            "question": "What protocols do the transceivers support?",
            "answer": "ES50K-HP transceiver protocols: (1) Ethernet - 1GbE, 10GbE (with external PHY). (2) PCIe - Gen1 and Gen2 support. (3) CPRI - For wireless base stations. (4) SATA - Storage interface support. (5) JESD204B - High-speed data converter interface. (6) Custom - Programmable for proprietary protocols. The transceivers include physical coding sublayer (PCS) support for these protocols. Reference designs and IP cores available from ESIONTECH.",
            "decisionGuide": "Contact LiTong for protocol implementation support.",
            "keywords": ["protocols", "Ethernet", "PCIe", "CPRI"]
          },
          {
            "question": "How do I design the power supply?",
            "answer": "ES50K-HP power supply design: (1) Core Voltage - 0.9V or 1.0V at 10-30A depending on utilization. (2) I/O Voltage - 1.2V, 1.5V, 1.8V, 2.5V, 3.3V banks. (3) Transceiver - 1.0V and 1.8V supplies. (4) Sequencing - Follow recommended power-up sequence. (5) Decoupling - Extensive ceramic capacitors near device. (6) Regulation - Use low-noise DC-DC converters. (7) Monitoring - Include voltage and current monitoring. High-performance FPGAs require careful power design for reliable operation.",
            "decisionGuide": "Contact LiTong for power supply design guidance.",
            "keywords": ["power supply", "voltage", "current"]
          },
          {
            "question": "What PCB layout considerations apply?",
            "answer": "ES50K-HP PCB layout: (1) Stackup - Use 8+ layer board with proper plane allocation. (2) Power - Dedicated planes for core, I/O, and transceiver supplies. (3) Decoupling - Capacitors within 2mm of each power pin. (4) Transceivers - Controlled impedance differential pairs, length matched. (5) Memory - Length-matched address/data lines to DDR. (6) Thermal - Thermal vias under device, adequate copper area. (7) Signal Integrity - Simulate high-speed interfaces. High-performance FPGA layout requires careful attention to signal integrity and power delivery.",
            "decisionGuide": "Contact LiTong for PCB layout review and SI analysis.",
            "keywords": ["PCB layout", "signal integrity", "high-speed"]
          },
          {
            "question": "Can I implement a PCIe interface?",
            "answer": "ES50K-HP PCIe implementation: (1) Hardened IP - PCIe Gen2 hardened controller included. (2) Lanes - Support for x1, x2, x4 configurations. (3) Bandwidth - Up to 5GT/s per lane. (4) Software - Driver support for Linux and Windows. (5) Reference Design - Complete PCIe reference design available. (6) Applications - Connect to host processors, NVMe storage, network cards. The hardened PCIe IP saves significant logic resources and ensures protocol compliance.",
            "decisionGuide": "Contact LiTong for PCIe implementation guidance.",
            "keywords": ["PCIe", "interface", "connectivity"]
          },
          {
            "question": "What AI acceleration can I implement?",
            "answer": "ES50K-HP AI acceleration: (1) CNN Inference - Implement convolutional layers using DSP blocks. (2) Matrix Operations - Parallel matrix multiplication for neural networks. (3) Performance - 100-500 GOPS depending on precision and model. (4) Precision - Support for INT8, INT16, FP16 calculations. (5) Models - Optimized for ResNet, MobileNet, YOLO. (6) Tools - AI optimization tools from ESIONTECH. Good for edge AI inference in vision and signal processing applications. Training requires external resources.",
            "decisionGuide": "Contact LiTong for AI acceleration design.",
            "keywords": ["AI", "machine learning", "neural networks"]
          }
        ]
      },
      {
        "partNumber": "ES100K-HP",
        "name": "ES100K-HP 100K LUT Ultra High-Performance FPGA",
        "shortDescription": "100K LUT ultra high-performance FPGA with 16 transceivers, 400 DSP blocks for complex 5G and AI applications.",
        "descriptionParagraphs": [
          "The ES100K-HP is ESIONTECH's flagship 100K LUT ultra high-performance FPGA for the most demanding applications. It features 16 multi-gigabit transceivers and 400 DSP blocks for massive parallel processing.",
          "The device supports advanced memory interfaces including DDR4 and HBM2 for extreme bandwidth applications. It includes hardened IP for PCIe Gen3 and 100G Ethernet.",
          "With its FCBGA-900 package and comprehensive development ecosystem, the ES100K-HP is ideal for 5G baseband processing, AI training acceleration, 8K video processing, and high-performance computing."
        ],
        "specifications": {
          "LUTs": "100,000",
          "Transceivers": "16 (up to 12.5Gbps)",
          "DSP Blocks": "400",
          "Block RAM": "5MB",
          "Memory Interface": "DDR4/HBM2",
          "I/O Pins": "500+",
          "Package": "FCBGA-900"
        },
        "features": [
          "100K LUT maximum capacity",
          "16 high-speed transceivers",
          "400 DSP blocks",
          "5MB block RAM",
          "HBM2 memory support",
          "PCIe Gen3 hardened IP",
          "100G Ethernet support",
          "FCBGA-900 package"
        ],
        "applications": [
          "5G baseband processing",
          "AI training acceleration",
          "8K video processing",
          "High-performance computing",
          "Network processing"
        ],
        "faeReview": {
          "author": "Dr. James Zhang",
          "title": "Senior FAE - Advanced Systems",
          "content": "The ES100K-HP represents the pinnacle of ESIONTECH's FPGA technology. The 100K LUTs and 400 DSP blocks enable incredibly complex designs. I've supported customers implementing 5G NR baseband, AI inference engines, and 8K video codecs - all in a single device. The 16 transceivers provide massive I/O bandwidth. Key insights: This device requires professional PCB design - don't underestimate the complexity. Thermal management is critical - plan for heatsinks and airflow. The HBM2 interface provides unprecedented memory bandwidth for AI applications. Use the hardened IP blocks to preserve logic for your unique functions. The price-performance ratio is excellent compared to alternatives. For cutting-edge applications, this FPGA delivers exceptional capability.",
          "highlight": "Ultra high-performance 100K LUT FPGA for most demanding applications"
        },
        "alternativeParts": [
          {
            "partNumber": "ES50K-HP",
            "brand": "ESIONTECH",
            "specifications": {
              "luts": "50,000",
              "transceivers": "8",
              "dsp": "200"
            },
            "comparison": "LUTs => 50K < 100K; transceivers => 8 < 16; cost => significantly lower; applications => less complex",
            "reason": "Lower cost for designs not requiring maximum capacity",
            "useCase": "Complex but smaller designs",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "ES100K-EVB",
            "link": "#",
            "description": "Ultra high-performance evaluation board",
            "category": "Development Tools"
          },
          {
            "partNumber": "HBM2 Memory",
            "link": "#",
            "description": "High-bandwidth memory stack",
            "category": "Memory"
          },
          {
            "partNumber": "QSFP28 Modules",
            "link": "#",
            "description": "100G optical transceivers",
            "category": "Optics"
          }
        ],
        "faqs": [
          {
            "question": "What is the maximum AI performance?",
            "answer": "ES100K-HP AI performance: (1) INT8 Inference - Up to 10 TOPS for quantized neural networks. (2) FP16 - Up to 5 TFLOPS for mixed-precision training. (3) Parallelism - 400 DSP blocks enable massive parallel computation. (4) Memory Bandwidth - HBM2 provides terabytes-per-second bandwidth. (5) Efficiency - Optimized data flow for CNNs and transformers. (6) Frameworks - Support for TensorFlow, PyTorch, ONNX models. This performance level enables complex AI at the edge and small-scale training.",
            "decisionGuide": "Contact LiTong for AI performance optimization.",
            "keywords": ["AI performance", "TOPS", "machine learning"]
          },
          {
            "question": "How do I manage thermal design?",
            "answer": "ES100K-HP thermal management: (1) Power Dissipation - 20-50W typical, up to 100W worst case. (2) Heatsink Required - Active cooling with heatsink and fan. (3) Thermal Interface - Use high-quality thermal paste or pad. (4) Airflow - Ensure adequate airflow across device. (5) Monitoring - Use on-chip temperature sensors. (6) Throttling - Implement thermal throttling in design. (7) PCB - Thermal vias and copper planes for heat spreading. Proper thermal design is essential for reliable operation.",
            "decisionGuide": "Contact LiTong for thermal design and analysis.",
            "keywords": ["thermal", "heatsink", "cooling"]
          },
          {
            "question": "What is the development cost?",
            "answer": "ES100K-HP development costs: (1) Device Cost - Higher than mid-range FPGAs but competitive for capacity. (2) Tools - Professional license required for full features. (3) Board - Multi-layer PCB with high-speed design. (4) Power - Robust power supply system. (5) Cooling - Heatsink and fan assembly. (6) Total - Significant investment but justified for high-performance applications. (7) ROI - Excellent price-performance compared to alternatives. Contact LiTong for detailed pricing and volume discounts.",
            "decisionGuide": "Contact LiTong for pricing and cost analysis.",
            "keywords": ["cost", "pricing", "development"]
          },
          {
            "question": "Can I do 5G baseband processing?",
            "answer": "ES100K-HP 5G baseband capabilities: (1) NR Processing - Supports 5G NR physical layer processing. (2) Bandwidth - Handle 100MHz carrier bandwidth. (3) MIMO - Support for 4x4 and 8x8 MIMO configurations. (4) Throughput - Process multiple Gbps of baseband data. (5) Standards - Compliant with 3GPP specifications. (6) Integration - Combine with RF front-end for complete system. Suitable for small cell and massive MIMO applications. Macro base stations may need multiple devices.",
            "decisionGuide": "Contact LiTong for 5G baseband design support.",
            "keywords": ["5G", "baseband", "wireless"]
          },
          {
            "question": "What support is available for complex designs?",
            "answer": "ES100K-HP design support: (1) FAE Support - Dedicated support from LiTong and ESIONTECH. (2) Reference Designs - Complete reference designs for common applications. (3) IP Cores - Extensive library of verified IP. (4) Training - Advanced training on high-speed design. (5) Signal Integrity - SI analysis and consulting. (6) PCB Review - Expert PCB layout review. (7) Debug Support - On-site debugging assistance. Comprehensive support ensures successful complex designs.",
            "decisionGuide": "Contact LiTong for comprehensive design support.",
            "keywords": ["support", "design assistance", "FAE"]
          }
        ]
      }
    ]
  }
];

// Add the remaining categories
products.categories = [...products.categories, ...additionalCategories];

// Write back
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Added remaining 3 product categories');
