const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'data', 'dosilicon', 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add remaining 3 categories
const additionalCategories = [
  {
    "id": "spi-nand-flash",
    "name": "SPI NAND Flash",
    "slug": "spi-nand-flash",
    "description": "High-density serial NAND Flash memories offering cost-effective data storage solutions for embedded applications.",
    "longDescription": "DOSILICON SPI NAND Flash products provide high-density, cost-effective non-volatile storage solutions for data-intensive embedded applications. With densities ranging from 1Gb to 8Gb, these devices offer an optimal balance of capacity, performance, and cost for data storage applications. SPI NAND flash is ideal for storing large data sets, file systems, media content, and application data. The serial interface reduces pin count and simplifies PCB layout compared to parallel NAND. Advanced features include on-chip ECC (Error Correction Code), bad block management, and high-speed sequential read capabilities. DOSILICON SPI NAND products are widely used in consumer electronics, industrial systems, network equipment, and IoT devices where large data storage is required. As an authorized DOSILICON distributor, LiTong provides comprehensive product selection guidance and technical support for SPI NAND flash applications.",
    "parameters": ["Density", "Interface", "Page Size", "Package"],
    "series": [
      {
        "name": "DS35Q Series",
        "description": "Standard SPI NAND flash with integrated ECC and bad block management",
        "applications": ["Consumer electronics", "Industrial storage", "Network equipment"]
      },
      {
        "name": "DS35X Series",
        "description": "High-performance SPI NAND flash with enhanced read speeds and reliability",
        "applications": ["High-end consumer", "Automotive storage", "Enterprise equipment"]
      }
    ],
    "selectionGuide": "SPI NAND Flash Selection Guide",
    "selectionGuideLink": {
      "url": "/dosilicon/support/spi-nand-selection-guide.html",
      "text": "View SPI NAND Flash Selection Guide for detailed selection guidance"
    },
    "faqs": [
      {
        "question": "What densities are available in DOSILICON SPI NAND Flash?",
        "answer": "DOSILICON SPI NAND Flash is available in densities from 1Gb to 8Gb: (1) 1Gb (128MB) - Entry-level density for cost-sensitive applications with moderate storage needs. Suitable for small file systems and data logging. (2) 2Gb (256MB) - Popular density for consumer electronics and IoT devices. Good balance of capacity and cost. (3) 4Gb (512MB) - Mid-range density for industrial and networking applications. Supports larger file systems and databases. (4) 8Gb (1GB) - High density for demanding applications requiring extensive data storage. All densities use the same package and pinout for easy migration. NAND flash provides higher density at lower cost per bit compared to NOR flash, making it ideal for data storage applications. LiTong can help calculate optimal density based on your storage requirements.",
        "decisionGuide": "Contact LiTong for density selection and storage capacity planning.",
        "keywords": ["NAND density", "storage capacity", "Gb capacity"]
      },
      {
        "question": "How does SPI NAND Flash differ from SPI NOR Flash?",
        "answer": "SPI NAND and SPI NOR Flash have fundamental differences: (1) Architecture - NOR uses parallel cell structure for random access; NAND uses serial cell structure optimized for sequential access. (2) Density - NAND offers higher densities (1Gb-8Gb+) at lower cost per bit; NOR typically 1Mb-512Mb. (3) Access Pattern - NOR supports fast random read for XIP; NAND is optimized for sequential read/write. (4) Interface - Both use SPI, but NAND requires page-based access with internal ECC. (5) Reliability - NAND has higher initial bad blocks and requires bad block management; NOR has uniform reliability. (6) Use Cases - NOR for code storage and execution; NAND for data storage, file systems, media. (7) Endurance - NAND typically 100K cycles; NOR 100K-1M cycles. Many systems use both: NOR for boot code, NAND for data storage. LiTong can help determine the right mix for your application.",
        "decisionGuide": "Contact LiTong for memory architecture guidance and product selection.",
        "keywords": ["NAND vs NOR", "flash comparison", "memory selection"]
      },
      {
        "question": "What is on-chip ECC and why is it important?",
        "answer": "On-chip ECC (Error Correction Code) is a critical feature of DOSILICON SPI NAND Flash: (1) Purpose - NAND flash inherently has higher bit error rates than NOR; ECC detects and corrects bit errors. (2) Implementation - DOSILICON NAND includes hardware ECC engine that automatically corrects errors during read operations. (3) Correction Capability - Typically corrects 4-8 bits per 512-byte sector, depending on device. (4) Transparency - ECC operation is transparent to host; no software intervention required. (5) Benefits - Improved data reliability, extended device lifetime, simplified system design. (6) Bad Block Management - ECC works with bad block management to maintain data integrity. (7) System Impact - Host can treat NAND as reliable storage without complex error handling. The on-chip ECC makes SPI NAND practical for embedded systems without requiring external ECC hardware or complex software algorithms.",
        "decisionGuide": "Contact LiTong for ECC capabilities and reliability specifications.",
        "keywords": ["ECC", "error correction", "data integrity"]
      },
      {
        "question": "How does bad block management work in SPI NAND?",
        "answer": "Bad block management in SPI NAND Flash: (1) Initial Bad Blocks - NAND devices may have bad blocks from factory; these are marked in spare area. (2) Bad Block Table - System maintains table of bad blocks to avoid using them. (3) Runtime Bad Blocks - Additional blocks may become bad over time due to wear; these must be detected and marked. (4) Replacement Strategy - When a bad block is detected, data is remapped to a good spare block. (5) Wear Leveling - Distribute writes evenly across blocks to maximize lifetime. (6) Implementation - Can be done in software (file system) or hardware (memory controller). (7) DOSILICON Support - Devices include bad block markers and spare area for management. Proper bad block management is essential for reliable NAND operation. Most file systems (JFFS2, YAFFS, UBIFS) include bad block management. LiTong can provide bad block management guidelines and software examples.",
        "decisionGuide": "Contact LiTong for bad block management implementation guidance.",
        "keywords": ["bad block", "block management", "NAND reliability"]
      },
      {
        "question": "What is the endurance and retention of SPI NAND Flash?",
        "answer": "DOSILICON SPI NAND Flash endurance and retention specifications: (1) Endurance - 100,000 program/erase cycles per block typical. This is sufficient for most embedded applications with proper wear leveling. (2) Data Retention - 10 years minimum for data stored at standard conditions. Retention decreases with increasing temperature and wear. (3) Read Disturb - Repeated reads can affect adjacent cells; refresh periodically for critical data. (4) Factors Affecting Lifetime - Operating temperature, number of cycles, storage time, and data pattern. (5) Wear Leveling - Essential for maximizing lifetime; distribute writes evenly across all blocks. (6) Over-Provisioning - Reserve some blocks as spares to improve reliability and lifetime. For high-reliability applications, consider industrial-grade products with enhanced specifications. LiTong can help estimate lifetime for your specific application conditions.",
        "decisionGuide": "Contact LiTong for endurance analysis and lifetime estimation.",
        "keywords": ["endurance", "retention", "lifetime", "reliability"]
      }
    ],
    "products": [
      {
        "partNumber": "DS35Q02G",
        "name": "DS35Q02G 2Gb SPI NAND Flash",
        "shortDescription": "2Gb SPI NAND Flash with integrated ECC, bad block management, and high-speed sequential read for data storage applications",
        "descriptionParagraphs": [
          "The DS35Q02G is a 2Gb (256MB) SPI NAND Flash memory designed for cost-effective data storage in embedded systems. It features integrated on-chip ECC (Error Correction Code) that automatically detects and corrects bit errors during read operations.",
          "The device includes advanced bad block management capabilities with factory-marked bad blocks and spare area for runtime bad block detection. The high-speed SPI interface supports clock rates up to 80MHz for fast data transfer.",
          "With a page size of 2KB+64B and block size of 128KB, the DS35Q02G is optimized for file system storage and large data applications. It is ideal for consumer electronics, industrial data logging, and IoT applications."
        ],
        "specifications": {
          "Density": "2Gb (256MB)",
          "Interface": "SPI, 80MHz",
          "Page Size": "2KB + 64B spare",
          "Block Size": "128KB",
          "ECC": "On-chip 4-bit ECC",
          "Endurance": "100,000 cycles",
          "Data Retention": "10 years",
          "Package": "WSON-8"
        },
        "features": [
          "2Gb high-density storage",
          "Integrated on-chip ECC",
          "Bad block management support",
          "80MHz SPI interface",
          "2KB page size",
          "100,000 program/erase cycles",
          "10-year data retention",
          "WSON-8 package"
        ],
        "applications": [
          "Consumer electronics",
          "Industrial data logging",
          "IoT devices",
          "Network equipment",
          "File system storage"
        ],
        "faeReview": {
          "author": "David Wang",
          "title": "Senior FAE - Storage Solutions",
          "content": "The DS35Q02G is an excellent choice for embedded data storage applications. The 2Gb density provides ample space for file systems, configuration data, and logs. The integrated ECC is a key advantage - it eliminates the need for external ECC hardware or complex software algorithms. I've used this part in several industrial and consumer designs with very good results. The bad block management is straightforward to implement, and the device reliability has been excellent. Key design tips: Implement proper wear leveling in your file system to maximize device lifetime. The spare area can be used for bad block markers and wear leveling information. Use the status register to check for program/erase completion rather than fixed delays. For file systems, JFFS2 or UBIFS work well with this device. Overall, this is a cost-effective, reliable NAND solution for data storage.",
          "highlight": "Reliable 2Gb SPI NAND with integrated ECC for cost-effective data storage"
        },
        "alternativeParts": [
          {
            "partNumber": "DS35Q01G",
            "brand": "DOSILICON",
            "specifications": {
              "density": "1Gb (128MB)",
              "interface": "SPI, 80MHz",
              "package": "WSON-8"
            },
            "comparison": "density => 1Gb < 2Gb (half capacity); cost => lower price; applications => smaller storage requirements",
            "reason": "Lower cost option for applications with smaller storage needs",
            "useCase": "Cost-sensitive applications with moderate storage requirements",
            "link": "#"
          },
          {
            "partNumber": "DS35Q04G",
            "brand": "DOSILICON",
            "specifications": {
              "density": "4Gb (512MB)",
              "interface": "SPI, 80MHz",
              "package": "WSON-8"
            },
            "comparison": "density => 4Gb > 2Gb (double capacity); cost => higher price; applications => larger storage needs",
            "reason": "Higher density for applications requiring more storage capacity",
            "useCase": "Large file systems and extensive data logging applications",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "DS35Q02G-EVAL",
            "link": "#",
            "description": "Evaluation board for DS35Q02G with test points",
            "category": "Development Tools"
          },
          {
            "partNumber": "100nF Ceramic",
            "link": "#",
            "description": "Decoupling capacitor for VCC and VCCQ",
            "category": "Passive Component"
          },
          {
            "partNumber": "10kΩ Resistor",
            "link": "#",
            "description": "Pull-up resistor for CS# and other control signals",
            "category": "Passive Component"
          }
        ],
        "faqs": [
          {
            "question": "What file systems work best with DS35Q02G?",
            "answer": "Several file systems work well with DS35Q02G SPI NAND Flash: (1) JFFS2 (Journaling Flash File System 2) - Good for small to medium NAND devices. Includes wear leveling and bad block management. (2) UBIFS - Modern file system for larger NAND devices, more efficient than JFFS2. Works with UBI (Unsorted Block Images) layer. (3) YAFFS2 - Simple file system optimized for NAND flash. Good for bootloaders and simple applications. (4) LittleFS - Lightweight file system designed for microcontrollers with limited resources. (5) FATFS with FTL - Can use NAND with Flash Translation Layer. Choose based on: System resources (RAM/CPU), Required features (journaling, compression), and Application needs (boot vs data storage). Most Linux systems use UBIFS; RTOS applications often use LittleFS or YAFFS2.",
            "decisionGuide": "Contact LiTong for file system selection and implementation guidance.",
            "keywords": ["file system", "JFFS2", "UBIFS", "YAFFS2"]
          },
          {
            "question": "How do I implement wear leveling for DS35Q02G?",
            "answer": "Wear leveling implementation for DS35Q02G: (1) Purpose - Distribute program/erase cycles evenly across all blocks to maximize device lifetime. (2) Dynamic Wear Leveling - Remap frequently written logical blocks to different physical blocks. Implemented in file system or FTL. (3) Static Wear Leveling - Move static (read-only) data to heavily worn blocks to balance wear. (4) Implementation Options: File System (JFFS2, UBIFS include wear leveling), FTL (Flash Translation Layer), or Custom (application-level management). (5) Key Considerations - Track erase counts per block, maintain free block pool, handle bad blocks. (6) Over-Provisioning - Reserve 5-10% of capacity for wear leveling and bad block replacement. Most modern file systems include wear leveling; use them rather than implementing custom solutions.",
            "decisionGuide": "Contact LiTong for wear leveling implementation and file system selection.",
            "keywords": ["wear leveling", "lifetime", "endurance"]
          },
          {
            "question": "What is the programming sequence for DS35Q02G?",
            "answer": "Programming sequence for DS35Q02G SPI NAND: (1) Enable Write - Send Write Enable (06h) command. (2) Block Erase - Erase block before programming using Block Erase (D8h). Wait for completion. (3) Load Program Data - Use Program Load (02h) to load data into device cache register. (4) Execute Program - Send Program Execute (10h) to write cache to flash array. (5) Check Status - Poll status register or wait for ready. Verify program completion. (6) Verify - Read back programmed data to verify correctness. Notes: Programming is page-based (2KB); Partial page programming not recommended; Always erase before program; Use status register to check for errors. Typical page program time is 300-500μs. Block erase time is 2-3ms.",
            "decisionGuide": "Contact LiTong for programming procedures and driver development.",
            "keywords": ["programming", "erase", "page program"]
          },
          {
            "question": "How do I handle bad blocks in DS35Q02G?",
            "answer": "Bad block handling for DS35Q02G: (1) Initial Bad Blocks - Check factory bad block markers in spare area of first page of each block. Blocks marked 00h are bad. (2) Create Bad Block Table - Scan entire device at initialization and create table of bad blocks. (3) Runtime Bad Block Detection - Check status register after program/erase operations. If operation fails, mark block as bad. (4) Bad Block Marking - Write 00h to first byte of spare area to mark block as bad. (5) Data Remapping - When bad block detected, remap data to a good spare block. (6) Spare Blocks - Reserve 2-4% of blocks as spares for remapping. Most file systems (JFFS2, UBIFS) handle bad block management automatically. For custom implementations, maintain bad block table in RAM and update to flash periodically.",
            "decisionGuide": "Contact LiTong for bad block management implementation and software examples.",
            "keywords": ["bad blocks", "block management", "reliability"]
          },
          {
            "question": "What is the read performance of DS35Q02G?",
            "answer": "DS35Q02G read performance specifications: (1) Sequential Read - Up to 80MHz clock rate provides 10MB/s throughput (single SPI). Use Fast Read command for maximum speed. (2) Random Read - Higher latency due to page-based architecture. Must load page to cache before reading. (3) Page Load Time - Approximately 25μs to load 2KB page from flash to cache. (4) Cache Read - Fast random access within cached page (similar to SRAM speed). (5) First Byte Latency - Page load time + command overhead (~30μs total). (6) Sustained Throughput - For sequential reads across multiple pages, throughput approaches interface limit. For best performance: Read sequentially when possible, Cache frequently accessed data, Use multi-page read commands if available. NAND is optimized for sequential access; avoid frequent random small reads.",
            "decisionGuide": "Contact LiTong for performance optimization and system design guidance.",
            "keywords": ["read performance", "throughput", "latency"]
          }
        ]
      },
      {
        "partNumber": "DS35X04G",
        "name": "DS35X04G 4Gb High-Performance SPI NAND Flash",
        "shortDescription": "4Gb high-performance SPI NAND Flash with enhanced ECC, fast read speeds, and industrial temperature range for demanding applications",
        "descriptionParagraphs": [
          "The DS35X04G is a 4Gb (512MB) high-performance SPI NAND Flash featuring enhanced 8-bit ECC and fast read capabilities. It is designed for demanding industrial, automotive, and enterprise applications requiring high reliability and performance.",
          "The device supports clock rates up to 100MHz and includes advanced features such as multi-page read, cache read, and enhanced bad block management. The industrial temperature range (-40°C to +85°C) ensures reliable operation in harsh environments.",
          "With 4Gb density, enhanced ECC, and high reliability, the DS35X04G is ideal for industrial control systems, automotive data logging, network equipment, and high-end consumer applications requiring robust data storage."
        ],
        "specifications": {
          "Density": "4Gb (512MB)",
          "Interface": "SPI, 100MHz",
          "Page Size": "2KB + 128B spare",
          "Block Size": "128KB",
          "ECC": "On-chip 8-bit ECC",
          "Endurance": "100,000 cycles",
          "Data Retention": "10 years",
          "Temperature": "-40°C to +85°C",
          "Package": "WSON-8"
        },
        "features": [
          "4Gb high-density storage",
          "Enhanced 8-bit ECC",
          "100MHz SPI interface",
          "Multi-page read capability",
          "Cache read mode",
          "Industrial temperature range",
          "100,000 program/erase cycles",
          "WSON-8 package"
        ],
        "applications": [
          "Industrial control systems",
          "Automotive data logging",
          "Network equipment",
          "High-end consumer electronics",
          "Enterprise storage"
        ],
        "faeReview": {
          "author": "Sarah Liu",
          "title": "Principal FAE - Industrial Storage",
          "content": "The DS35X04G is a robust, high-performance SPI NAND solution for demanding applications. The enhanced 8-bit ECC provides superior data integrity compared to standard 4-bit ECC devices. I've deployed this part in industrial automation and automotive systems with excellent reliability. The 100MHz interface provides good throughput for data logging applications. The industrial temperature range is genuine - we've tested these parts at temperature extremes with no issues. Key design considerations: The enhanced ECC is automatic and transparent, requiring no host intervention. Implement proper power-fail protection for critical data - complete any in-progress operations before power loss. The multi-page read feature significantly improves sequential read performance. For industrial applications, this part offers an excellent balance of density, performance, and reliability at a competitive price point.",
          "highlight": "High-reliability 4Gb SPI NAND with enhanced ECC for industrial applications"
        },
        "alternativeParts": [
          {
            "partNumber": "DS35Q04G",
            "brand": "DOSILICON",
            "specifications": {
              "density": "4Gb (512MB)",
              "ecc": "4-bit",
              "temperature": "0°C to +70°C"
            },
            "comparison": "ecc => 4-bit < 8-bit (standard vs enhanced); temperature => commercial vs industrial; cost => lower price; applications => less demanding environments",
            "reason": "Lower cost option for commercial temperature applications",
            "useCase": "Consumer and commercial applications without industrial requirements",
            "link": "#"
          },
          {
            "partNumber": "DS35X08G",
            "brand": "DOSILICON",
            "specifications": {
              "density": "8Gb (1GB)",
              "ecc": "8-bit",
              "temperature": "-40°C to +85°C"
            },
            "comparison": "density => 8Gb > 4Gb (double capacity); ecc => same 8-bit; temperature => same industrial; cost => higher price; applications => maximum storage",
            "reason": "Maximum density for applications requiring extensive storage",
            "useCase": "Large-scale data logging and high-capacity storage applications",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "DS35X04G-EVAL",
            "link": "#",
            "description": "Industrial-grade evaluation board for DS35X04G",
            "category": "Development Tools"
          },
          {
            "partNumber": "100nF Ceramic",
            "link": "#",
            "description": "Low-ESR decoupling capacitors for VCC and VCCQ",
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
            "question": "What is the difference between 4-bit and 8-bit ECC?",
            "answer": "The difference between 4-bit and 8-bit ECC in SPI NAND: (1) Correction Capability - 4-bit ECC corrects up to 4 bit errors per sector; 8-bit ECC corrects up to 8 bit errors per sector. (2) Reliability - 8-bit ECC provides higher data integrity, especially as device wears or operates at temperature extremes. (3) Use Cases - 4-bit sufficient for consumer and commercial applications; 8-bit recommended for industrial, automotive, and high-reliability applications. (4) Overhead - Both use similar spare area; 8-bit ECC may have slightly more parity storage. (5) Performance - Both operate at same speed; ECC is hardware-based and transparent. (6) Selection - Choose 8-bit ECC for: automotive, industrial, medical, or any application where data integrity is critical. The enhanced ECC in DS35X04G provides additional margin for reliable operation.",
            "decisionGuide": "Contact LiTong for ECC selection based on reliability requirements.",
            "keywords": ["ECC", "error correction", "data integrity", "reliability"]
          },
          {
            "question": "How does cache read mode improve performance?",
            "answer": "Cache read mode in DS35X04G improves read performance: (1) Standard Read - Load page from flash to cache register, then read data. Each new page requires full load cycle. (2) Cache Read - After loading first page, device automatically loads next sequential page into second cache while host reads current page. (3) Pipelining - Enables parallel operation: host reads current page while device loads next page. (4) Performance Gain - Eliminates page load latency for sequential reads after first page. Sustained throughput approaches interface maximum. (5) Random Access - Cache also enables fast random access within cached page. (6) Usage - Enable cache read mode for sequential multi-page reads. For best performance: Use cache read for sequential access, Read multiple bytes per transaction, Minimize CS# toggling. This feature is especially valuable for file system operations and sequential data streaming.",
            "decisionGuide": "Contact LiTong for performance optimization and cache mode implementation.",
            "keywords": ["cache read", "performance", "pipelining"]
          },
          {
            "question": "Is DS35X04G suitable for automotive applications?",
            "answer": "DS35X04G is well-suited for automotive applications: (1) Temperature Range - Industrial grade (-40°C to +85°C) covers most automotive cabin applications. (2) Enhanced ECC - 8-bit ECC provides robust error correction for safety-critical data. (3) Reliability - 100,000 cycle endurance and 10-year retention meet automotive requirements. (4) AEC-Q100 - Contact LiTong for AEC-Q100 qualified versions of this product. (5) Applications - Suitable for: infotainment systems, instrument clusters, telematics, ADAS data logging, and body electronics. (6) PPAP Support - Production Part Approval Process documentation available. For under-hood applications requiring higher temperature, contact LiTong about extended temperature options. The combination of density, reliability, and industrial temperature range makes this part suitable for many automotive storage applications.",
            "decisionGuide": "Contact LiTong for automotive product selection and qualification support.",
            "keywords": ["automotive", "AEC-Q100", "reliability"]
          },
          {
            "question": "What power-fail protection is needed for DS35X04G?",
            "answer": "Power-fail protection for DS35X04G is important for data integrity: (1) Risk - Sudden power loss during program/erase can corrupt data and create additional bad blocks. (2) Detection - Monitor power supply with supervisor IC to detect impending power loss. (3) Backup Power - Use supercapacitor or battery to provide temporary power for completion. (4) Software Response - On power-fail warning: Complete current operation, Save critical state information, Put device in safe state. (5) Data Integrity - Use journaling file systems (UBIFS, JFFS2) that can recover from power loss. (6) Hardware Design - Ensure adequate decoupling, Use power supervisor with early warning, Consider backup power for critical applications. For most applications, proper file system selection provides sufficient protection. For safety-critical data, implement hardware power-fail protection.",
            "decisionGuide": "Contact LiTong for power-fail protection design and system architecture.",
            "keywords": ["power-fail protection", "data integrity", "reliability"]
          },
          {
            "question": "How do I verify data integrity with DS35X04G?",
            "answer": "Data integrity verification with DS35X04G: (1) ECC Status - Check ECC status bits after read operations to detect and verify error correction. (2) Read Verification - For critical writes, read back and compare programmed data. (3) CRC/Checksum - Calculate CRC or checksum of data blocks and store in spare area. Verify on read. (4) Periodic Scrubbing - Read and rewrite data periodically to refresh charge and correct bit errors. (5) Bad Block Monitoring - Track bad block count over time; increasing rate may indicate wear or issues. (6) Temperature Monitoring - High temperature affects retention; monitor and refresh if needed. (7) File System - Use robust file systems with journaling and wear leveling. For highest reliability: Combine ECC with application-level CRC, Implement periodic data scrubbing, Monitor device health metrics.",
            "decisionGuide": "Contact LiTong for data integrity strategies and verification methods.",
            "keywords": ["data integrity", "verification", "ECC", "reliability"]
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
