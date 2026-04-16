const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'data', 'dosilicon', 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add MCP and Specialty Memory categories
const moreCategories = [
  {
    "id": "mcp-multi-chip-package",
    "name": "MCP Multi-Chip Package",
    "slug": "mcp-multi-chip-package",
    "description": "Integrated multi-chip package solutions combining different memory types for space-constrained applications.",
    "longDescription": "DOSILICON MCP (Multi-Chip Package) products integrate multiple memory dies in a single compact package, providing complete memory solutions for space-constrained applications. These innovative packages combine SPI NOR flash for code storage with SPI NAND flash for data storage, or multiple NOR flash dies for higher density. MCP solutions significantly reduce PCB footprint compared to discrete memory devices while simplifying BOM and assembly. They are ideal for smartphones, wearables, IoT devices, and any application where board space is at a premium. The integrated approach also improves signal integrity and reduces power consumption. DOSILICON MCP products use standard SPI interfaces, making them easy to integrate with existing designs. As an authorized DOSILICON distributor, LiTong provides comprehensive MCP product selection and design support.",
    "parameters": ["Configuration", "Total Density", "Interface", "Package"],
    "series": [
      {
        "name": "DSMCP-N+N Series",
        "description": "NOR+NAND combination packages for code and data storage",
        "applications": ["Smartphones", "Wearables", "IoT devices"]
      },
      {
        "name": "DSMCP-N+N Series",
        "description": "Dual NOR packages for high-density code storage",
        "applications": ["High-end embedded", "Network equipment"]
      }
    ],
    "selectionGuide": "MCP Selection Guide",
    "selectionGuideLink": {
      "url": "/dosilicon/support/mcp-selection-guide.html",
      "text": "View MCP Selection Guide for detailed selection guidance"
    },
    "faqs": [
      {
        "question": "What MCP configurations does DOSILICON offer?",
        "answer": "DOSILICON offers various MCP configurations: (1) NOR+NAND - Combines SPI NOR flash for boot code with SPI NAND flash for data storage. Most popular configuration for embedded systems. (2) NOR+NOR - Stacked NOR flash dies for very high-density code storage. Used when code size exceeds single die capacity. (3) NOR+SRAM - Combines non-volatile storage with fast volatile memory. (4) Custom Configurations - Contact DOSILICON for specific memory combinations. Common densities: NOR+NAND with 32Mb NOR + 2Gb NAND, 64Mb NOR + 4Gb NAND. The NOR+NAND combination is ideal for systems requiring both boot storage and large data storage in minimal space. LiTong can help select optimal MCP configuration for your application.",
        "decisionGuide": "Contact LiTong for MCP configuration selection and design guidance.",
        "keywords": ["MCP configuration", "memory combination", "package options"]
      },
      {
        "question": "What are the space savings of MCP compared to discrete devices?",
        "answer": "MCP provides significant space savings: (1) PCB Area - MCP typically uses 50-70% less PCB area than equivalent discrete devices. (2) Package Comparison: Single WSON-8 MCP vs. two separate WSON-8 packages saves one package footprint plus routing space. (3) Routing - Reduced PCB routing complexity; shared control signals between dies. (4) Assembly - Single pick-and-place operation vs. multiple components. (5) Example - 32Mb NOR + 2Gb NAND MCP in 8x6mm WSON vs. two packages totaling 12x10mm area. (6) Height - MCP height comparable to single package; thinner than stacked discrete packages. Space savings are most significant for: Wearables, Smartphones, IoT sensors, Portable electronics. The integration also improves reliability by reducing interconnections.",
        "decisionGuide": "Contact LiTong for space analysis and MCP sizing for your design.",
        "keywords": ["space savings", "footprint", "PCB area"]
      },
      {
        "question": "How do I interface with MCP devices?",
        "answer": "Interfacing with DOSILICON MCP devices: (1) Shared Interface - Both dies share common SPI signals (SCK, CS#, SI, SO). (2) Die Selection - Separate CS# pins or internal address decoding selects active die. (3) Standard Commands - Each die responds to standard SPI flash commands for its type. (4) Independent Operation - NOR and NAND can be accessed independently; no interference between dies. (5) Software - Treat as separate devices in software; standard flash drivers work without modification. (6) Hardware - Connect shared signals to processor SPI port; route separate CS# signals. The interface is straightforward and compatible with existing SPI flash controllers. No special drivers or complex software required.",
        "decisionGuide": "Contact LiTong for MCP interface design and software integration.",
        "keywords": ["interface", "SPI", "die selection"]
      },
      {
        "question": "What are the cost benefits of using MCP?",
        "answer": "MCP cost benefits include: (1) Component Cost - MCP often costs less than equivalent discrete devices due to reduced packaging and testing overhead. (2) Assembly Cost - Single component placement vs. multiple components reduces manufacturing cost. (3) PCB Cost - Smaller PCB area reduces board cost, especially for multi-layer boards. (4) BOM Simplification - Fewer line items simplify procurement and inventory management. (5) Yield Improvement - Single component has better manufacturing yield than multiple components. (6) Design Cost - Simplified PCB layout reduces design time and cost. Overall system cost savings typically 10-20% compared to discrete solutions. Cost benefits increase with production volume. For high-volume consumer applications, MCP offers compelling cost advantages.",
        "decisionGuide": "Contact LiTong for cost analysis and MCP pricing.",
        "keywords": ["cost benefits", "BOM cost", "manufacturing cost"]
      },
      {
        "question": "When should I choose MCP over discrete memory?",
        "answer": "Choose MCP over discrete memory when: (1) Space Constrained - Board area is limited and every mm² counts. (2) High Volume - Production volumes justify optimization for size and cost. (3) Mobile Applications - Wearables, smartphones, portable devices where size is critical. (4) Simplified Design - Want to reduce component count and design complexity. (5) Cost Optimization - System cost reduction is a priority. Choose discrete when: (1) Flexibility - Need to mix different suppliers or change memory independently. (2) Low Volume - Development cost of MCP integration not justified. (3) Special Requirements - Need specific memory combinations not available in MCP. (4) Upgrade Path - Want ability to upgrade one memory type independently. MCP is optimal for size-sensitive, high-volume consumer applications. Discrete offers more flexibility for low-volume or specialized applications.",
        "decisionGuide": "Contact LiTong for MCP vs. discrete analysis for your application.",
        "keywords": ["MCP selection", "discrete vs MCP", "design trade-offs"]
      }
    ],
    "products": [
      {
        "partNumber": "DSMCP32N2G",
        "name": "DSMCP32N2G 32Mb NOR + 2Gb NAND MCP",
        "shortDescription": "Multi-chip package combining 32Mb SPI NOR flash for code storage with 2Gb SPI NAND flash for data storage in compact WSON-8 package",
        "descriptionParagraphs": [
          "The DSMCP32N2G is a multi-chip package integrating 32Mb SPI NOR flash and 2Gb SPI NAND flash in a single compact WSON-8 package. This configuration provides complete memory solution for embedded systems requiring both boot code storage and large data storage.",
          "The NOR flash provides fast random access for boot code execution and firmware storage, while the NAND flash offers high-density, cost-effective storage for application data, file systems, and logs. Both dies share common SPI interface with separate chip select signals.",
          "Ideal for space-constrained applications such as wearables, IoT devices, and portable electronics where PCB area is limited. The integrated solution reduces component count, simplifies assembly, and improves reliability."
        ],
        "specifications": {
          "Configuration": "32Mb NOR + 2Gb NAND",
          "NOR Interface": "SPI, 66MHz",
          "NAND Interface": "SPI, 80MHz",
          "NOR Endurance": "100,000 cycles",
          "NAND Endurance": "100,000 cycles",
          "Data Retention": "20 years (NOR), 10 years (NAND)",
          "Package": "WSON-8 (8x6mm)"
        },
        "features": [
          "32Mb NOR + 2Gb NAND in single package",
          "Shared SPI interface",
          "Separate chip select signals",
          "Fast NOR for boot code",
          "High-density NAND for data",
          "50% PCB area savings vs discrete",
          "Simplified BOM and assembly",
          "WSON-8 compact package"
        ],
        "applications": [
          "Wearable devices",
          "IoT sensors",
          "Portable electronics",
          "Smart home devices",
          "Industrial IoT"
        ],
        "faeReview": {
          "author": "Michael Chen",
          "title": "Senior FAE - MCP Solutions",
          "content": "The DSMCP32N2G is an excellent MCP solution for space-constrained designs. The 32Mb NOR provides ample space for boot code and RTOS, while the 2Gb NAND handles data logging and file systems. I've used this part in several wearable and IoT designs with great results. The space savings are significant - we saved about 60% of memory footprint compared to discrete solutions. Key design tips: Route CS# signals carefully to avoid crosstalk; use series resistors on shared SPI lines for signal integrity. The shared interface works seamlessly with standard SPI flash drivers - just treat as two separate devices in software. Power consumption is lower than discrete due to reduced I/O activity. For high-volume consumer applications, the cost savings are substantial. Overall, this MCP offers an optimal balance of density, performance, and size.",
          "highlight": "Compact MCP solution combining NOR and NAND for complete memory subsystem"
        },
        "alternativeParts": [
          {
            "partNumber": "DSMCP16N1G",
            "brand": "DOSILICON",
            "specifications": {
              "configuration": "16Mb NOR + 1Gb NAND",
              "package": "WSON-8"
            },
            "comparison": "density => 16Mb+1Gb < 32Mb+2Gb (half capacity); cost => lower price; applications => smaller memory requirements",
            "reason": "Lower cost option for applications with smaller memory needs",
            "useCase": "Simple IoT devices with limited code and data storage",
            "link": "#"
          },
          {
            "partNumber": "DSMCP64N4G",
            "brand": "DOSILICON",
            "specifications": {
              "configuration": "64Mb NOR + 4Gb NAND",
              "package": "WSON-8"
            },
            "comparison": "density => 64Mb+4Gb > 32Mb+2Gb (double capacity); cost => higher price; applications => larger memory requirements",
            "reason": "Higher density for applications requiring more storage",
            "useCase": "Complex systems with large firmware and extensive data storage",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "DSMCP32N2G-EVAL",
            "link": "#",
            "description": "Evaluation board for DSMCP32N2G with test points",
            "category": "Development Tools"
          },
          {
            "partNumber": "100nF Ceramic",
            "link": "#",
            "description": "Decoupling capacitors for VCC pins",
            "category": "Passive Component"
          },
          {
            "partNumber": "10kΩ Resistor",
            "link": "#",
            "description": "Pull-up resistors for CS# signals",
            "category": "Passive Component"
          }
        ],
        "faqs": [
          {
            "question": "How do I access NOR and NAND in the MCP?",
            "answer": "Accessing NOR and NAND in DSMCP32N2G MCP: (1) Shared Signals - SCK, SI, SO are shared between both dies. (2) Separate CS# - NOR_CS# and NAND_CS# select active die. Assert one CS# at a time. (3) Independent Operation - Each die operates independently with standard SPI flash commands. (4) Software Interface - Configure two separate flash drivers or instances in software. (5) Hardware Connection - Connect shared signals to processor SPI port; connect separate CS# to GPIO pins. (6) Simultaneous Access - Cannot access both dies simultaneously; serialize operations. Example sequence: Assert NOR_CS#, send NOR commands, deassert NOR_CS#, assert NAND_CS#, send NAND commands. Standard SPI flash software works without modification.",
            "decisionGuide": "Contact LiTong for MCP software integration and driver development.",
            "keywords": ["MCP access", "die selection", "software interface"]
          },
          {
            "question": "What is the power consumption of the MCP?",
            "answer": "DSMCP32N2G MCP power consumption: (1) Active Read (NOR) - ~10mA at 66MHz during NOR read operations. (2) Active Read (NAND) - ~15mA at 80MHz during NAND read operations. (3) Program/Erase - ~20mA during program or erase operations on either die. (4) Standby - ~60μA when both dies deselected. (5) Deep Power-Down - ~10μA when both dies in power-down mode. (6) Power Savings - Lower than discrete due to shared I/O drivers and optimized internal routing. For power-sensitive applications: Use standby mode when memory not needed, Put unused die in power-down mode, Minimize active operation time. Overall power consumption is comparable to or better than equivalent discrete devices.",
            "decisionGuide": "Contact LiTong for power analysis and battery life estimation.",
            "keywords": ["power consumption", "current", "battery life"]
          },
          {
            "question": "Can I use different voltages for NOR and NAND?",
            "answer": "DSMCP32N2G MCP voltage requirements: (1) Common Voltage - Both dies share common VCC supply (2.7V-3.6V). (2) Single Supply - MCP designed for single-supply operation; cannot use different voltages for each die. (3) I/O Voltage - SPI interface levels match VCC. (4) Level Shifting - If processor uses different voltage, implement level shifters on SPI signals. (5) Power Sequencing - No special sequencing required; both dies power up together. (6) Decoupling - Use adequate decoupling capacitors close to VCC pins. The common voltage design simplifies power supply design. For systems requiring voltage translation, external level shifters can be used on the SPI interface.",
            "decisionGuide": "Contact LiTong for power supply design and voltage translation.",
            "keywords": ["voltage", "power supply", "level shifting"]
          },
          {
            "question": "What is the thermal performance of MCP?",
            "answer": "DSMCP32N2G MCP thermal performance: (1) Package Thermal Resistance - θJA approximately 40-50°C/W in typical PCB conditions. (2) Heat Distribution - Heat from both dies distributed through common package and PCB. (3) Temperature Range - Industrial grade (-40°C to +85°C) ambient operation. (4) Self-Heating - Minimal due to low power consumption; typically <5°C temperature rise. (5) PCB Design - Use thermal vias under package, adequate copper area for heat spreading. (6) Thermal Management - Generally no special cooling required for normal operation. The compact package has good thermal performance due to exposed pad design. For high-temperature environments, ensure adequate PCB heat sinking.",
            "decisionGuide": "Contact LiTong for thermal analysis and PCB design guidance.",
            "keywords": ["thermal", "temperature", "heat dissipation"]
          },
          {
            "question": "How reliable is MCP compared to discrete devices?",
            "answer": "DSMCP32N2G MCP reliability: (1) Equivalent Reliability - Individual die reliability same as discrete devices. (2) Interconnect Reliability - Internal wire bonds eliminate external interconnections, improving reliability. (3) Mechanical Robustness - Single package more robust than multiple discrete packages. (4) Testing - 100% tested at wafer and final test; same standards as discrete. (5) Endurance - NOR: 100K cycles, NAND: 100K cycles - same as discrete. (6) Data Retention - NOR: 20 years, NAND: 10 years - same as discrete. (7) Failure Modes - Independent; failure of one die does not affect the other. Overall reliability is equal to or better than equivalent discrete solution due to reduced interconnections and simplified assembly.",
            "decisionGuide": "Contact LiTong for reliability specifications and MTBF data.",
            "keywords": ["reliability", "MTBF", "quality"]
          }
        ]
      }
    ]
  },
  {
    "id": "specialty-memory",
    "name": "Specialty Memory",
    "slug": "specialty-memory",
    "description": "Specialized memory products including wide-temperature range and automotive-grade memory solutions.",
    "longDescription": "DOSILICON Specialty Memory products are designed for demanding applications requiring enhanced reliability, extended temperature operation, or specific certifications. This category includes automotive-grade (AEC-Q100) memory products qualified for use in vehicle electronics, industrial-grade products for harsh environments, and wide-temperature range devices. These products undergo additional testing and qualification to ensure reliable operation under extreme conditions. Applications include automotive infotainment and ADAS systems, industrial automation, military/aerospace, and medical devices. Specialty memory products maintain the same electrical interfaces as standard products while offering enhanced specifications for temperature, reliability, and longevity. As an authorized DOSILICON distributor, LiTong provides specialty memory product selection, qualification support, and long-term supply agreements.",
    "parameters": ["Grade", "Temperature Range", "Qualification", "Package"],
    "series": [
      {
        "name": "DSA Series",
        "description": "Automotive-grade memory with AEC-Q100 qualification",
        "applications": ["Automotive infotainment", "ADAS", "Instrument clusters"]
      },
      {
        "name": "DSI Series",
        "description": "Industrial-grade memory for harsh environments",
        "applications": ["Industrial automation", "Outdoor equipment", "Military"]
      }
    ],
    "selectionGuide": "Specialty Memory Selection Guide",
    "selectionGuideLink": {
      "url": "/dosilicon/support/specialty-memory-selection-guide.html",
      "text": "View Specialty Memory Selection Guide for detailed selection guidance"
    },
    "faqs": [
      {
        "question": "What is AEC-Q100 qualification?",
        "answer": "AEC-Q100 is an automotive reliability standard: (1) Purpose - Ensures electronic components meet stringent automotive reliability requirements. (2) Testing - Includes high-temperature operating life, temperature cycling, humidity, ESD, and mechanical stress tests. (3) Temperature Grades - Grade 0 (-40 to +150°C), Grade 1 (-40 to +125°C), Grade 2 (-40 to +105°C), Grade 3 (-40 to +85°C). (4) PPAP - Production Part Approval Process documentation required for automotive production. (5) Traceability - Full lot traceability and change control. (6) Applications - Required for automotive electronics including infotainment, ADAS, powertrain, and body electronics. DOSILICON automotive-grade products meet AEC-Q100 Grade 1 or Grade 2 specifications. Contact LiTong for AEC-Q100 certificates and PPAP documentation.",
        "decisionGuide": "Contact LiTong for automotive qualification support and documentation.",
        "keywords": ["AEC-Q100", "automotive qualification", "reliability"]
      },
      {
        "question": "What temperature ranges are available?",
        "answer": "DOSILICON specialty memory temperature ranges: (1) Commercial - 0°C to +70°C for consumer and office equipment. (2) Industrial - -40°C to +85°C for industrial control and outdoor equipment. (3) Automotive Grade 2 - -40°C to +105°C for automotive cabin applications. (4) Automotive Grade 1 - -40°C to +125°C for under-hood and extreme automotive. (5) Extended - Custom ranges available for specific applications. Industrial and automotive grades use enhanced packaging, wider-temperature-rated materials, and additional testing. Performance specifications maintained across entire temperature range. Select grade based on: Operating environment, Industry requirements (automotive requires AEC-Q100), and Reliability needs.",
        "decisionGuide": "Contact LiTong for temperature grade selection and application guidance.",
        "keywords": ["temperature range", "industrial grade", "automotive grade"]
      },
      {
        "question": "What is the difference between commercial and industrial grade?",
        "answer": "Commercial vs. Industrial grade differences: (1) Temperature Range - Commercial: 0°C to +70°C; Industrial: -40°C to +85°C. (2) Testing - Industrial grade undergoes additional temperature testing and screening. (3) Materials - Industrial grade uses wider-temperature-rated packaging materials and die coatings. (4) Reliability - Industrial grade typically has tighter process controls and higher reliability. (5) Price - Industrial grade costs 10-30% more than commercial grade. (6) Availability - Commercial grade has higher volume and better availability. Choose Industrial when: Operating in harsh environments, Outdoor or uncontrolled temperature operation, Industrial or military applications, Long product lifetime required. Commercial grade is sufficient for: Consumer electronics, Office equipment, Controlled indoor environments, Cost-sensitive applications.",
        "decisionGuide": "Contact LiTong for grade selection based on your application environment.",
        "keywords": ["commercial grade", "industrial grade", "temperature"]
      },
      {
        "question": "What documentation is available for automotive products?",
        "answer": "Automotive product documentation includes: (1) AEC-Q100 Certificate - Official qualification certificate showing compliance. (2) PPAP Documentation - Production Part Approval Process package including: Design FMEA, Process FMEA, Control Plan, MSA Studies, Dimensional Results, Material Certifications, Performance Test Results. (3) Reliability Reports - Detailed test results and reliability data. (4) PCN Process - Product Change Notification procedure for any changes. (5) Traceability - Lot traceability documentation. (6) Application Notes - Automotive-specific design guidelines. (7) Safety Manual - Functional safety documentation for ASIL applications. LiTong can provide complete documentation package for automotive customers. Contact us for specific document requests and PPAP support.",
        "decisionGuide": "Contact LiTong for automotive documentation and qualification support.",
        "keywords": ["documentation", "PPAP", "AEC-Q100", "automotive"]
      },
      {
        "question": "Are there long-term supply agreements available?",
        "answer": "Yes, long-term supply agreements available for specialty memory: (1) Purpose - Ensure supply continuity for automotive and industrial products with long lifecycles. (2) Duration - Typically 5-10 years or more, matching product lifecycle. (3) Benefits - Price stability, supply guarantee, priority allocation, and end-of-life notification. (4) Requirements - Minimum volume commitments, forecast sharing, and scheduled orders. (5) Coverage - Includes AEC-Q100 products, industrial grade, and custom specialty products. (6) Process - Contact LiTong to discuss requirements and negotiate agreement terms. Long-term agreements are recommended for: Automotive programs, Industrial equipment with long service life, Medical devices, Military/aerospace applications. These agreements provide supply security for critical applications.",
        "decisionGuide": "Contact LiTong for long-term supply agreement discussions.",
        "keywords": ["LTA", "long-term agreement", "supply continuity"]
      }
    ],
    "products": [
      {
        "partNumber": "DSA25Q64A",
        "name": "DSA25Q64A 64Mb Automotive-Grade SPI NOR Flash",
        "shortDescription": "AEC-Q100 Grade 1 qualified 64Mb SPI NOR Flash for automotive applications with -40°C to +125°C temperature range",
        "descriptionParagraphs": [
          "The DSA25Q64A is an AEC-Q100 Grade 1 qualified 64Mb SPI NOR Flash designed for automotive electronics. It meets stringent automotive reliability requirements and operates across -40°C to +125°C temperature range.",
          "The device features enhanced reliability specifications, full PPAP documentation support, and lot traceability required for automotive production. It supports standard SPI flash commands for easy integration with automotive microcontrollers.",
          "Ideal for automotive infotainment systems, instrument clusters, ADAS modules, and body electronics requiring reliable code storage in harsh automotive environments."
        ],
        "specifications": {
          "Density": "64Mb (8MB)",
          "Interface": "SPI, 80MHz",
          "Temperature Range": "-40°C to +125°C",
          "Qualification": "AEC-Q100 Grade 1",
          "Endurance": "100,000 cycles",
          "Data Retention": "20 years",
          "Package": "WSON-8"
        },
        "features": [
          "AEC-Q100 Grade 1 qualified",
          "Automotive temperature range",
          "64Mb density for firmware",
          "80MHz SPI interface",
          "Enhanced reliability",
          "PPAP documentation support",
          "Lot traceability",
          "WSON-8 package"
        ],
        "applications": [
          "Automotive infotainment",
          "Instrument clusters",
          "ADAS modules",
          "Body electronics",
          "Telematics systems"
        ],
        "faeReview": {
          "author": "David Wang",
          "title": "Principal FAE - Automotive Memory",
          "content": "The DSA25Q64A is a robust automotive-grade NOR flash that I've used in multiple Tier 1 automotive programs. The AEC-Q100 Grade 1 qualification is genuine and comprehensive - we've successfully completed PPAP for several OEMs without issues. The device performs reliably across the full temperature range, including under-hood applications. Key automotive considerations: Ensure proper decoupling and follow automotive PCB design guidelines. The WSON package has excellent thermal performance for automotive environments. We've passed EMC testing in multiple vehicle platforms with this device. The PPAP documentation package from LiTong is complete and well-organized. For functional safety applications (ASIL), additional analysis may be required. Overall, this is a reliable, well-qualified automotive memory solution.",
          "highlight": "AEC-Q100 Grade 1 qualified NOR flash for demanding automotive applications"
        },
        "alternativeParts": [
          {
            "partNumber": "DSA25Q32A",
            "brand": "DOSILICON",
            "specifications": {
              "density": "32Mb (4MB)",
              "qualification": "AEC-Q100 Grade 1",
              "temperature": "-40°C to +125°C"
            },
            "comparison": "density => 32Mb < 64Mb (half capacity); qualification => same AEC-Q100 Grade 1; cost => lower price; applications => smaller firmware",
            "reason": "Lower cost option for automotive applications with smaller firmware",
            "useCase": "Automotive modules with moderate code storage requirements",
            "link": "#"
          },
          {
            "partNumber": "DSA25Q128A",
            "brand": "DOSILICON",
            "specifications": {
              "density": "128Mb (16MB)",
              "qualification": "AEC-Q100 Grade 1",
              "temperature": "-40°C to +125°C"
            },
            "comparison": "density => 128Mb > 64Mb (double capacity); qualification => same AEC-Q100 Grade 1; cost => higher price; applications => larger firmware",
            "reason": "Higher density for automotive applications requiring more storage",
            "useCase": "Complex automotive systems with large firmware requirements",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "DSA25Q64A-EVAL",
            "link": "#",
            "description": "Automotive-grade evaluation board for DSA25Q64A",
            "category": "Development Tools"
          },
          {
            "partNumber": "100nF Ceramic",
            "link": "#",
            "description": "Automotive-grade decoupling capacitor",
            "category": "Passive Component"
          },
          {
            "partNumber": "10kΩ Resistor",
            "link": "#",
            "description": "Pull-up resistors for control signals",
            "category": "Passive Component"
          }
        ],
        "faqs": [
          {
            "question": "What AEC-Q100 Grade 1 testing is performed?",
            "answer": "AEC-Q100 Grade 1 testing for DSA25Q64A includes: (1) High Temperature Operating Life (HTOL) - 1000 hours at 125°C. (2) Temperature Cycling - 1000 cycles -40°C to +125°C. (3) High Temperature Storage - 1000 hours at 150°C. (4) Early Life Failure Rate (ELFR) - Statistical sampling for early failures. (5) ESD Testing - HBM 2kV, CDM 500V, MM 200V. (6) Latch-Up Testing - Current and voltage trigger tests. (7) Mechanical Stress - Vibration, mechanical shock, and solderability. (8) Moisture Sensitivity - MSL level determination. All testing performed per AEC-Q100 Rev-J standards. Test reports available as part of PPAP documentation.",
            "decisionGuide": "Contact LiTong for AEC-Q100 test reports and qualification data.",
            "keywords": ["AEC-Q100", "testing", "qualification"]
          },
          {
            "question": "What is the PPAP process for automotive?",
            "answer": "PPAP (Production Part Approval Process) for DSA25Q64A: (1) Purpose - Validates that production process can consistently produce quality parts meeting specifications. (2) Levels - PPAP Level 3 typically required for new automotive parts (full documentation). (3) Documentation includes: Design Records, Engineering Change Documents, Customer Engineering Approval, Design FMEA, Process Flow Diagram, Process FMEA, Control Plan, Measurement System Analysis, Dimensional Results, Material/Test Results, Initial Process Studies, Qualified Laboratory Documentation, Appearance Approval Report, Sample Production Parts, Master Sample, Checking Aids, Customer Specific Requirements, Part Submission Warrant. (4) Timeline - Typically 8-12 weeks after production approval. (5) LiTong Support - Complete PPAP documentation package provided. Contact LiTong to initiate PPAP process.",
            "decisionGuide": "Contact LiTong for PPAP documentation and submission support.",
            "keywords": ["PPAP", "automotive approval", "documentation"]
          },
          {
            "question": "How does lot traceability work?",
            "answer": "Lot traceability for DSA25Q64A automotive products: (1) Wafer Lot - Full traceability to wafer lot number, wafer ID, and die position. (2) Assembly Lot - Assembly date, location, and operator traceability. (3) Test Lot - Test equipment, program version, and test results linked to lot. (4) Marking - Each device marked with traceable lot code and date code. (5) Documentation - Certificate of Compliance with lot information provided with each shipment. (6) Storage - Traceability records maintained for minimum 10 years. (7) Recall Capability - Full traceability enables targeted recall if needed. This level of traceability is required for automotive quality systems and enables root cause analysis for any field issues.",
            "decisionGuide": "Contact LiTong for lot traceability documentation and certificates.",
            "keywords": ["traceability", "lot control", "automotive quality"]
          },
          {
            "question": "What is the PCN process for automotive products?",
            "answer": "PCN (Product Change Notification) process for DSA25Q64A: (1) Purpose - Notify customers of any changes to product or process. (2) Timeline - Minimum 12 months advance notice for major changes per AEC-Q100. (3) Change Types - Process changes, material changes, design changes, test changes, location changes. (4) Notification - Formal PCN document with change description, reason, timeline, and impact. (5) Customer Approval - Some changes require customer approval before implementation. (6) Last Time Buy - Offered for major changes with end-of-life implications. (7) Traceability - Clear separation of pre-change and post-change lots. DOSILICON follows JEDEC J-STD-046 PCN standards. LiTong manages PCN distribution to customers and coordinates any required actions.",
            "decisionGuide": "Contact LiTong for PCN registration and change management.",
            "keywords": ["PCN", "change notification", "product change"]
          },
          {
            "question": "Can DSA25Q64A be used for functional safety applications?",
            "answer": "DSA25Q64A for functional safety applications: (1) AEC-Q100 - Provides foundation for automotive reliability but does not cover functional safety (ISO 26262). (2) Safety Analysis - Device safety analysis available for ASIL decomposition. (3) FIT Rate - Failure In Time rate data available for safety calculations. (4) Use Cases - Suitable for QM (Quality Management) and ASIL A/B applications with appropriate system-level measures. (5) Higher ASIL - For ASIL C/D, may need additional measures: redundant storage, ECC, CRC checking. (6) Safety Manual - Available with safety analysis and use assumptions. (7) System Responsibility - Functional safety achieved at system level, not component level. Contact LiTong for safety documentation and FIT rate data for safety analysis.",
            "decisionGuide": "Contact LiTong for functional safety documentation and support.",
            "keywords": ["functional safety", "ISO 26262", "ASIL", "FIT rate"]
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
console.log('Added MCP and Specialty Memory categories');
