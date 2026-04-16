const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'data', 'esiontech', 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add Industrial FPGA and Development Tools categories
const moreCategories = [
  {
    "id": "industrial-fpga",
    "name": "Industrial FPGA",
    "slug": "industrial-fpga",
    "description": "Industrial-grade FPGA products with wide temperature range and enhanced reliability for harsh environment applications.",
    "longDescription": "ESIONTECH Industrial FPGA series is specifically designed for harsh operating environments found in industrial automation, transportation, and outdoor applications. These devices feature extended temperature ranges from -40°C to +85°C or higher, enhanced reliability screening, and robust packaging. Industrial FPGAs undergo additional testing and qualification to ensure reliable operation under extreme conditions including temperature cycling, vibration, and humidity. The series includes devices with various logic capacities to address different industrial application requirements, from simple control to complex machine vision. Key features include wide voltage operation, enhanced ESD protection, and long-term supply guarantees. As an authorized ESIONTECH distributor, LiTong provides industrial FPGA product selection, qualification support, and long-term supply agreements for industrial customers.",
    "parameters": ["LUTs", "Temperature Range", "I/O", "Reliability"],
    "series": [
      {
        "name": "ESI Series",
        "description": "Industrial-grade FPGA with -40°C to +85°C operation",
        "applications": ["Factory automation", "Process control", "Transportation"]
      },
      {
        "name": "ESX Series",
        "description": "Extended temperature FPGA for harsh environments",
        "applications": ["Outdoor equipment", "Military", "Aerospace"]
      }
    ],
    "selectionGuide": "Industrial FPGA Selection Guide",
    "selectionGuideLink": {
      "url": "/esiontech/support/industrial-fpga-selection-guide.html",
      "text": "View Industrial FPGA Selection Guide for detailed selection guidance"
    },
    "faqs": [
      {
        "question": "What temperature ranges are available?",
        "answer": "ESIONTECH Industrial FPGA temperature ranges: (1) Industrial Grade - -40°C to +85°C for standard industrial applications. (2) Extended Grade - -40°C to +100°C for harsh environments. (3) Cold Operation - Guaranteed startup at -40°C. (4) Hot Operation - Reliable operation at maximum temperature. (5) Temperature Cycling - Tested for thermal shock resistance. (6) Storage - Extended storage temperature range. The wide temperature range ensures reliable operation in uncontrolled environments.",
        "decisionGuide": "Contact LiTong for temperature grade selection.",
        "keywords": ["temperature range", "industrial grade", "extended temperature"]
      },
      {
        "question": "What reliability testing is performed?",
        "answer": "ESIONTECH Industrial FPGA reliability testing: (1) Temperature Cycling - 1000 cycles -40°C to +85°C. (2) High Temperature Operating Life - 1000 hours at maximum temperature. (3) Vibration - Random and sine vibration testing per IEC standards. (4) Mechanical Shock - Survives transportation and handling shocks. (5) ESD - Enhanced ESD protection up to 8kV HBM. (6) Latch-Up - Immune to latch-up under all conditions. (7) Burn-In - 168-hour burn-in screening. Comprehensive testing ensures reliability in demanding applications.",
        "decisionGuide": "Contact LiTong for reliability specifications.",
        "keywords": ["reliability", "testing", "quality"]
      },
      {
        "question": "What is the long-term availability?",
        "answer": "ESIONTECH Industrial FPGA availability: (1) Product Lifecycle - 10-15 year guaranteed availability. (2) Last Time Buy - 12-month notice for end-of-life. (3) PCN - Product change notification process. (4) Traceability - Full lot traceability for quality management. (5) LTA - Long-term agreements available. (6) Obsolescence Management - Proactive management of component availability. Industrial products prioritize supply continuity over cost optimization.",
        "decisionGuide": "Contact LiTong for long-term supply agreements.",
        "keywords": ["availability", "LTA", "supply continuity"]
      },
      {
        "question": "What packages are suitable for industrial?",
        "answer": "ESIONTECH Industrial FPGA packages: (1) TQFP - Robust through-hole compatible package. (2) BGA - High-density with good thermal performance. (3) QFP - Traditional package for easy assembly. (4) Lead Finish - Pb-free and SnPb options available. (5) Moisture Sensitivity - Lower MSL ratings for industrial. (6) Coating - Conformal coating compatible. Packages selected for reliability and manufacturability in industrial environments.",
        "decisionGuide": "Contact LiTong for package recommendations.",
        "keywords": ["package", "TQFP", "BGA", "industrial"]
      },
      {
        "question": "What industries use Industrial FPGA?",
        "answer": "ESIONTECH Industrial FPGA applications: (1) Factory Automation - PLCs, motion control, robotics. (2) Process Control - Oil and gas, chemical processing. (3) Transportation - Railway, automotive, marine. (4) Power - Grid control, renewable energy. (5) Medical - Imaging, diagnostic equipment. (6) Military/Aerospace - Ruggedized systems. (7) Outdoor - Telecom infrastructure, signage. Any application requiring reliable operation in harsh conditions.",
        "decisionGuide": "Contact LiTong for industry-specific solutions.",
        "keywords": ["industries", "applications", "harsh environment"]
      }
    ],
    "products": [
      {
        "partNumber": "ESI20K-IND",
        "name": "ESI20K-IND 20K LUT Industrial FPGA",
        "shortDescription": "20K LUT industrial-grade FPGA with -40°C to +85°C operation for factory automation and process control applications.",
        "descriptionParagraphs": [
          "The ESI20K-IND is a 20K LUT industrial-grade FPGA designed for reliable operation in harsh industrial environments. It features guaranteed operation from -40°C to +85°C.",
          "The device includes enhanced ESD protection, wide voltage operation, and robust packaging suitable for factory floor conditions. It supports industrial I/O standards and protocols.",
          "With its TQFP-144 package and comprehensive reliability testing, the ESI20K-IND is ideal for PLCs, motor drives, process controllers, and industrial networking equipment."
        ],
        "specifications": {
          "LUTs": "20,000",
          "Temperature Range": "-40°C to +85°C",
          "I/O Pins": "100",
          "Block RAM": "180KB",
          "ESD Protection": "8kV HBM",
          "Operating Voltage": "3.3V/2.5V/1.8V",
          "Package": "TQFP-144"
        },
        "features": [
          "20K LUT industrial-grade",
          "-40°C to +85°C operation",
          "100 industrial I/O pins",
          "Enhanced ESD protection",
          "Wide voltage operation",
          "Industrial protocols support",
          "Robust TQFP package",
          "10+ year availability"
        ],
        "applications": [
          "Factory automation",
          "Process control",
          "Motor drives",
          "Industrial networking",
          "PLC systems"
        ],
        "faeReview": {
          "author": "Robert Liu",
          "title": "Senior FAE - Industrial Systems",
          "content": "The ESI20K-IND is a reliable workhorse for industrial applications. The -40°C to +85°C range handles any factory environment. I've deployed this in steel mills, chemical plants, and outdoor telecom with zero temperature-related failures. The enhanced ESD protection is real - we've survived direct contact discharges that damaged other components. Key advantages: genuine industrial qualification, long-term availability guarantee, and competitive pricing. The TQFP package is field-serviceable, important for industrial maintenance. Design tips: Use the wide voltage I/O for legacy 5V interfacing. Implement watchdog timers for safety-critical applications. The 10-year availability eliminates redesign concerns. For industrial automation, this FPGA provides peace of mind.",
          "highlight": "Reliable 20K LUT industrial FPGA for harsh environments"
        },
        "alternativeParts": [
          {
            "partNumber": "ES20K-LP",
            "brand": "ESIONTECH",
            "specifications": {
              "luts": "20,000",
              "temperature": "0°C to +70°C",
              "grade": "Commercial"
            },
            "comparison": "temperature => 0 to +70°C vs -40 to +85°C; grade => commercial vs industrial; cost => lower price; applications => controlled environments",
            "reason": "Lower cost for indoor industrial applications",
            "useCase": "Factory floor with climate control",
            "link": "#"
          },
          {
            "partNumber": "ESI50K-IND",
            "brand": "ESIONTECH",
            "specifications": {
              "luts": "50,000",
              "temperature": "-40°C to +85°C",
              "grade": "Industrial"
            },
            "comparison": "LUTs => 50K > 20K; temperature => same industrial; cost => higher price; applications => complex industrial",
            "reason": "Higher capacity for complex industrial designs",
            "useCase": "Complex PLCs, multi-axis control",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "ESI20K-EVB",
            "link": "#",
            "description": "Industrial evaluation board",
            "category": "Development Tools"
          },
          {
            "partNumber": "Isolated Power Supply",
            "link": "#",
            "description": "Industrial-grade isolated DC-DC",
            "category": "Power"
          },
          {
            "partNumber": "Protection Circuits",
            "link": "#",
            "description": "TVS and protection components",
            "category": "Protection"
          }
        ],
        "faqs": [
          {
            "question": "What makes it industrial-grade?",
            "answer": "ESI20K-IND industrial features: (1) Temperature - Qualified for -40°C to +85°C operation. (2) Testing - 1000-hour high-temperature operating life. (3) ESD - Enhanced 8kV HBM protection. (4) Packaging - Robust TQFP with industrial-grade materials. (5) Screening - 100% burn-in and testing. (6) Documentation - Full traceability and quality records. (7) Support - Long-term availability guarantee. These features ensure reliable operation where commercial devices would fail.",
            "decisionGuide": "Contact LiTong for industrial qualification details.",
            "keywords": ["industrial-grade", "qualification", "reliability"]
          },
          {
            "question": "Can it survive factory floor conditions?",
            "answer": "ESI20K-IND factory floor survival: (1) Temperature - Handles uncontrolled factory temperatures. (2) Vibration - Survives machinery vibration and shock. (3) Humidity - Operates in high humidity environments. (4) EMI - Immune to industrial electromagnetic interference. (5) Power - Tolerant of noisy power supplies. (6) ESD - Survives electrostatic discharge events. (7) Longevity - 10+ year operation without degradation. Designed specifically for harsh industrial environments.",
            "decisionGuide": "Contact LiTong for environmental specifications.",
            "keywords": ["factory floor", "harsh environment", "survival"]
          },
          {
            "question": "What industrial protocols are supported?",
            "answer": "ESI20K-IND protocol support: (1) Fieldbus - Profibus, Profinet, EtherCAT, Modbus. (2) Ethernet - Industrial Ethernet with real-time extensions. (3) CAN - CAN bus for vehicle and machine networks. (4) RS-485 - Multi-drop serial communications. (5) Digital I/O - 24V industrial logic levels. (6) Analog - 4-20mA, 0-10V process signals. (7) Safety - Safety protocol support for SIL applications. Implement protocols in FPGA logic or use ESIONTECH IP cores.",
            "decisionGuide": "Contact LiTong for protocol implementation.",
            "keywords": ["protocols", "fieldbus", "industrial Ethernet"]
          },
          {
            "question": "Is it suitable for safety-critical applications?",
            "answer": "ESI20K-IND safety applications: (1) SIL Support - Can be used in SIL 2/3 systems with proper architecture. (2) Diagnostics - Built-in self-test capabilities. (3) Redundancy - Support for dual-channel designs. (4) Watchdog - External watchdog timer support. (5) Safe States - Defined safe states on failure. (6) Documentation - Safety manuals available. (7) Certification - Device qualified for safety applications. Suitable for safety PLCs, emergency stop systems, and critical control.",
            "decisionGuide": "Contact LiTong for safety system design.",
            "keywords": ["safety", "SIL", "critical applications"]
          },
          {
            "question": "What is the availability guarantee?",
            "answer": "ESI20K-IND availability: (1) 10-Year Guarantee - Minimum 10 years from introduction. (2) 15-Year Target - Typical availability for industrial products. (3) LTB Notice - 12 months last-time-buy notice. (4) PCN Process - Formal change notification. (5) Replacement - Pin-compatible replacements guaranteed. (6) Traceability - Full lot traceability maintained. (7) Buffer Stock - Recommended buffer stock planning. Industrial customers can rely on long-term supply continuity.",
            "decisionGuide": "Contact LiTong for long-term supply planning.",
            "keywords": ["availability", "LTA", "supply guarantee"]
          }
        ]
      }
    ]
  },
  {
    "id": "fpga-development-tools",
    "name": "FPGA Development Tools",
    "slug": "fpga-development-tools",
    "description": "Complete FPGA development environment including synthesis, placement and routing, simulation, and debugging tools.",
    "longDescription": "ESIONTECH FPGA Development Tools provide a comprehensive design environment for creating, implementing, and debugging FPGA designs. The tool suite includes ES-Designer for synthesis, placement and routing, timing analysis, and bitstream generation. The integrated simulator enables functional verification with waveform viewing and debugging capabilities. Additional tools include IP core generators, debugging utilities, and programming software. The development environment supports both Verilog and VHDL design entry, with mixed-language capability. Free license options are available for low-cost and small-scale designs, while professional licenses unlock advanced features for complex high-performance designs. As an authorized ESIONTECH distributor, LiTong provides tool installation support, training, and technical assistance for the development environment.",
    "parameters": ["Features", "License Type", "Supported Devices", "OS Support"],
    "series": [
      {
        "name": "ES-Designer Standard",
        "description": "Free development tool for low-cost FPGA designs",
        "applications": ["Learning", "Prototyping", "Small designs"]
      },
      {
        "name": "ES-Designer Professional",
        "description": "Full-featured tool for all FPGA devices",
        "applications": ["Production designs", "High-performance", "Complex systems"]
      }
    ],
    "selectionGuide": "Development Tools Selection Guide",
    "selectionGuideLink": {
      "url": "/esiontech/support/development-tools-selection-guide.html",
      "text": "View Development Tools Selection Guide for detailed selection guidance"
    },
    "faqs": [
      {
        "question": "What tools are included in the development suite?",
        "answer": "ESIONTECH development tool suite: (1) ES-Designer - Integrated design environment with synthesis, P&R, timing analysis. (2) Simulator - Functional and timing simulation with waveform viewer. (3) Programmer - Device configuration and programming tools. (4) IP Library - Core generator and IP management. (5) Debugger - On-chip debugging and signal analysis. (6) Documentation - Comprehensive help and tutorials. Complete flow from design entry to device programming.",
        "decisionGuide": "Contact LiTong for tool suite overview.",
        "keywords": ["tools", "ES-Designer", "development suite"]
      },
      {
        "question": "What is the difference between Standard and Professional?",
        "answer": "ES-Designer editions: (1) Standard - Free license for low-cost devices up to 10K LUTs. Basic synthesis and P&R. Limited optimization. (2) Professional - Full license for all devices. Advanced optimization, high-performance P&R, timing closure. High-speed design support. (3) Features - Professional includes advanced debugging, team features, scripting. (4) Support - Professional includes priority technical support. (5) Upgrade - Easy upgrade path from Standard. Choose based on device size and design complexity.",
        "decisionGuide": "Contact LiTong for license selection.",
        "keywords": ["license", "Standard", "Professional", "features"]
      },
      {
        "question": "What operating systems are supported?",
        "answer": "ES-Designer OS support: (1) Windows - Windows 10 and 11, 64-bit. (2) Linux - Ubuntu 20.04 LTS, CentOS 8, RHEL 8. (3) Hardware - Modern multi-core CPU, 8GB+ RAM recommended. (4) Graphics - OpenGL support for waveform viewer. (5) Storage - 10GB free space for installation. (6) Network - Internet for license activation. Both Windows and Linux versions have identical features.",
        "decisionGuide": "Contact LiTong for system requirements.",
        "keywords": ["OS support", "Windows", "Linux", "requirements"]
      },
      {
        "question": "What design languages are supported?",
        "answer": "ES-Designer language support: (1) Verilog - Verilog-2001 and SystemVerilog for synthesis. (2) VHDL - VHDL-93 and VHDL-2008 support. (3) Mixed Language - Combine Verilog and VHDL in same design. (4) Schematic - Graphical design entry for top-level. (5) FSM - State machine editor. (6) IP - Encrypted IP core integration. (7) Constraints - SDC timing constraints. Complete support for standard HDL design flows.",
        "decisionGuide": "Contact LiTong for language support details.",
        "keywords": ["Verilog", "VHDL", "HDL", "design entry"]
      },
      {
        "question": "How do I get started with the tools?",
        "answer": "Getting started with ES-Designer: (1) Download - Download from ESIONTECH website or LiTong. (2) Install - Run installer and follow prompts. (3) License - Request free license or purchase professional. (4) Tutorial - Complete included tutorials. (5) Examples - Study reference designs. (6) Documentation - Read user guide and application notes. (7) Support - Contact LiTong for assistance. Typical learning curve is 1-2 weeks for experienced designers.",
        "decisionGuide": "Contact LiTong for getting started support.",
        "keywords": ["getting started", "tutorial", "learning"]
      }
    ],
    "products": [
      {
        "partNumber": "ES-DESIGNER-STD",
        "name": "ES-Designer Standard (Free)",
        "shortDescription": "Free FPGA development tool for ESIONTECH low-cost devices up to 10K LUTs with synthesis, P&R, and simulation.",
        "descriptionParagraphs": [
          "ES-Designer Standard is a free FPGA development tool supporting ESIONTECH low-cost FPGA devices up to 10K LUTs. It provides complete design flow from HDL entry to bitstream generation.",
          "The tool includes synthesis, placement and routing, timing analysis, and simulation capabilities. It supports both Verilog and VHDL design entry with mixed-language capability.",
          "Ideal for learning FPGA design, prototyping, and cost-sensitive production projects. The free license has no time restrictions or feature limitations for supported devices."
        ],
        "specifications": {
          "License Type": "Free",
          "Max Device Size": "10K LUTs",
          "Synthesis": "Included",
          "Place & Route": "Included",
          "Simulation": "Functional only",
          "Timing Analysis": "Basic",
          "OS Support": "Windows, Linux"
        },
        "features": [
          "Free license (no cost)",
          "Complete design flow",
          "Verilog/VHDL support",
          "Mixed-language designs",
          "Functional simulation",
          "Basic timing analysis",
          "Device programming",
          "No time restrictions"
        ],
        "applications": [
          "FPGA learning",
          "University education",
          "Prototyping",
          "Cost-sensitive designs",
          "Hobby projects"
        ],
        "faeReview": {
          "author": "Emily Wang",
          "title": "FAE - Tools and Applications",
          "content": "ES-Designer Standard is an excellent free tool for getting started with ESIONTECH FPGAs. The synthesis quality is good for low-cost devices. I've trained many customers who successfully completed their first FPGA designs using this tool. The learning curve is reasonable - most engineers are productive within a week. Key advantages: completely free, no device limitations for small FPGAs, good documentation. The tool is based on industry-standard algorithms so skills transfer to other vendors. Limitations: Only supports up to 10K LUT devices, basic timing analysis. For professional work on larger devices, upgrade to Professional. Overall, outstanding value for learning and small projects.",
          "highlight": "Free complete FPGA development tool for low-cost devices"
        },
        "alternativeParts": [
          {
            "partNumber": "ES-DESIGNER-PRO",
            "brand": "ESIONTECH",
            "specifications": {
              "license": "Paid",
              "max_device": "100K+ LUTs",
              "features": "Full"
            },
            "comparison": "license => paid vs free; max device => all devices vs 10K; features => advanced vs basic; cost => annual fee",
            "reason": "Full features for professional and high-performance designs",
            "useCase": "Production designs, high-performance FPGAs",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "ES-Tutorial-Kit",
            "link": "#",
            "description": "Learning materials and examples",
            "category": "Training"
          },
          {
            "partNumber": "ES-EVAL-BOARD",
            "link": "#",
            "description": "Low-cost evaluation board",
            "category": "Hardware"
          },
          {
            "partNumber": "USB-JTAG-CABLE",
            "link": "#",
            "description": "Programming cable",
            "category": "Accessories"
          }
        ],
        "faqs": [
          {
            "question": "Is the free license really free?",
            "answer": "ES-Designer Standard is completely free: (1) No Cost - Zero license fee. (2) No Time Limit - Use indefinitely. (3) No Feature Limits - Full features for supported devices. (4) Commercial Use - Allowed in commercial products. (5) Support - Community support via forums. (6) Updates - Free updates within major versions. The only limitation is device size - supports up to 10K LUT devices. Perfect for learning and cost-sensitive projects.",
            "decisionGuide": "Download and start using immediately.",
            "keywords": ["free", "license", "cost"]
          },
          {
            "question": "What devices are supported?",
            "answer": "ES-Designer Standard supported devices: (1) ES1K Series - All 1K-4K LUT devices. (2) ES4K Series - All 4K LUT devices. (3) ES10K Series - All 10K LUT devices. (4) Limit - Maximum 10K LUT capacity. (5) Not Supported - 20K+ LUT high-performance devices. (6) Future - New low-cost devices added. Check ESIONTECH website for complete supported device list.",
            "decisionGuide": "Contact LiTong for device compatibility.",
            "keywords": ["supported devices", "compatibility"]
          },
          {
            "question": "Can I use it for commercial products?",
            "answer": "ES-Designer Standard commercial use: (1) Allowed - Yes, commercial use permitted. (2) Products - Design and sell commercial products. (3) No Royalties - No per-unit fees. (4) No Reporting - No design reporting required. (5) IP - Your designs remain your IP. (6) Limitations - Only for designs fitting in 10K LUT devices. (7) Upgrade - Can upgrade to Professional later. Completely free for commercial low-cost FPGA designs.",
            "decisionGuide": "Use freely for commercial low-cost designs.",
            "keywords": ["commercial", "license terms", "royalties"]
          },
          {
            "question": "What support is available?",
            "answer": "ES-Designer Standard support: (1) Documentation - Complete user manual and tutorials. (2) Examples - Reference designs and sample projects. (3) Forum - Community support forum. (4) LiTong - Basic support from LiTong FAEs. (5) Training - Training materials available. (6) Professional - Priority support with Professional license. Free license includes community-level support.",
            "decisionGuide": "Contact LiTong for support options.",
            "keywords": ["support", "documentation", "training"]
          },
          {
            "question": "How do I upgrade to Professional?",
            "answer": "Upgrading to ES-Designer Professional: (1) Contact - Contact LiTong or ESIONTECH sales. (2) Quote - Request quotation for Professional license. (3) Purchase - Complete license purchase. (4) Activation - Receive license key and activate. (5) Project - Existing projects compatible. (6) Features - Unlock all advanced features. (7) Support - Priority technical support included. Smooth upgrade path preserves your work.",
            "decisionGuide": "Contact LiTong for upgrade pricing.",
            "keywords": ["upgrade", "Professional", "license"]
          }
        ]
      }
    ]
  }
];

// Add the remaining categories
products.categories = [...products.categories, ...moreCategories];

// Write back
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Added Industrial FPGA and Development Tools categories');
