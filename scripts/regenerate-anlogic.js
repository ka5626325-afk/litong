#!/usr/bin/env node
/**
 * 重新生成 Anlogic 品牌的英文内容
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'anlogic');

// 重新生成 products.json
function regenerateProducts() {
  const productsPath = path.join(dataDir, 'products.json');
  
  const productsData = {
    "seoTitle": "Anlogic FPGA Products | ELF2, EAGLE Series | BeiLuo Distributor",
    "seoDescription": "Explore Anlogic FPGA portfolio including ELF2 and EAGLE series. Cost-effective FPGA solutions for industrial control, communications, and consumer electronics.",
    "seoKeywords": [
      "Anlogic FPGA",
      "ELF2 FPGA",
      "EAGLE FPGA",
      "FPGA distributor",
      "low cost FPGA",
      "industrial FPGA"
    ],
    "faqs": [
      {
        "question": "What are the main FPGA series offered by Anlogic?",
        "answer": "Anlogic offers two main FPGA series: ELF2 series for cost-sensitive applications (1.5K-9K LUTs) and EAGLE series for high-performance applications (up to 100K+ LUTs). Both series feature embedded Flash for instant-on configuration, low power consumption, and competitive pricing compared to Xilinx and Altera alternatives.",
        "decisionGuide": "Choose ELF2 for simple to medium complexity designs under 10K LUTs. Select EAGLE for complex designs requiring high logic capacity and advanced features.",
        "keywords": ["Anlogic FPGA series", "ELF2", "EAGLE", "FPGA selection"]
      },
      {
        "question": "How do Anlogic FPGAs compare to Xilinx Spartan series?",
        "answer": "Anlogic ELF2 series provides pin-compatible alternatives to Xilinx Spartan-6 and Spartan-7 devices at significantly lower cost. For example, ELF2L45B (4.5K LUTs) can replace XC6SLX9 or XC7S25 in many applications. Anlogic provides detailed migration guides including pin compatibility analysis, design porting recommendations, and performance comparisons.",
        "decisionGuide": "Contact BeiLuo FAE for detailed migration support and compatibility analysis for your specific design.",
        "keywords": ["Xilinx alternative", "Spartan replacement", "FPGA migration"]
      },
      {
        "question": "What development tools does Anlogic provide?",
        "answer": "Anlogic provides Tang Dynasty TD (TD) software, an integrated development environment for FPGA design, synthesis, placement and routing, and programming. The software supports Verilog and VHDL, includes IP cores for common functions, and provides simulation and debugging capabilities. USB download cables and evaluation boards are available for hardware development.",
        "decisionGuide": "Download TD software from Anlogic website or contact BeiLuo for development kit recommendations.",
        "keywords": ["Tang Dynasty software", "FPGA development tools", "TD software"]
      }
    ],
    "categories": [
      {
        "id": "elf2-series",
        "name": "ELF2 Series FPGA",
        "shortDescription": "Cost-effective FPGAs with embedded Flash for instant-on applications",
        "icon": "fpga",
        "productCount": 3,
        "specifications": {
          "Logic Capacity": "1.5K - 9K LUTs",
          "Embedded Flash": "Yes",
          "Power Consumption": "Low",
          "Package Options": "QFN, TQFP, BGA",
          "Applications": "Industrial Control, LED Display, Consumer Electronics"
        },
        "longDescription": "Anlogic ELF2 series FPGAs provide cost-effective solutions for applications requiring instant-on configuration, low power consumption, and competitive pricing. With embedded Flash eliminating external configuration memory, ELF2 devices are ideal for industrial control systems, LED display controllers, motor control, and consumer electronics. The series offers logic capacities from 1.5K to 9K LUTs with comprehensive I/O options and hardware DSP blocks.",
        "selectionGuide": {
          "link": "/anlogic/support/fpga-selection-guide.html",
          "description": "Use our selection guide to choose the right ELF2 device based on logic capacity, I/O requirements, and package preferences."
        },
        "faqs": [
          {
            "question": "What is the logic capacity of ELF2L45B?",
            "answer": "ELF2L45B provides 4,480 LUTs (Look-Up Tables), suitable for medium complexity designs. Typical applications include multi-axis motor controllers (supporting 4-6 axes), industrial communication gateways, LED display controllers for full-color large screens, and image preprocessing modules. For more complex designs, consider ELF2L90B or the EAGLE series.",
            "decisionGuide": "4.5K LUTs is suitable for medium complexity designs. For complex designs, select larger capacity devices.",
            "keywords": ["4.5K LUTs", "logic capacity", "design size"]
          },
          {
            "question": "What is the power consumption of ELF2L45B?",
            "answer": "ELF2L45B adopts low-power design with static power consumption of approximately 5-10mA (depending on temperature and voltage). Dynamic power consumption depends on design complexity and operating frequency. At a typical operating frequency of 100MHz, total power consumption is approximately 100-200mW. Compared to equivalent Xilinx devices, power consumption is 30%-50% lower, making it very suitable for power-sensitive applications.",
            "decisionGuide": "ELF2L45B's low power characteristics make it suitable for battery-powered and thermally constrained applications.",
            "keywords": ["power consumption", "static power", "dynamic power"]
          },
          {
            "question": "How do I configure and program ELF2L45B?",
            "answer": "ELF2L45B integrates embedded Flash for configuration data storage, with automatic loading at power-up. Programming methods include: 1) JTAG interface: connect USB programmer to JTAG interface for programming and debugging; 2) Dedicated configuration interface: supports SPI, parallel, and other configuration modes. Tang Dynasty software provides one-click programming function with online debugging and logic analyzer capabilities.",
            "decisionGuide": "Use Tang Dynasty software and USB programmer for programming and debugging.",
            "keywords": ["configuration mode", "JTAG", "programming"]
          },
          {
            "question": "Which Xilinx devices can ELF2L45B replace?",
            "answer": "ELF2L45B can replace Xilinx Spartan-6 XC6SLX9, Spartan-7 XC7S25, and similar devices. Anlogic provides detailed replacement guides including pin compatibility analysis, design migration advice, and performance comparisons. Most designs based on Spartan-6/7 can be relatively easily migrated to ELF2L45B.",
            "decisionGuide": "Contact BeiLuo FAE for detailed replacement solutions and migration support.",
            "keywords": ["Xilinx alternative", "Spartan replacement", "device migration"]
          },
          {
            "question": "What development kits are available for ELF2L45B?",
            "answer": "Anlogic provides the ELF2L45B Development Kit (ELF2-DK) including: ELF2L45B development board (with common peripherals), USB programmer, power adapter, example projects (LED control, serial communication, DDR interface, etc.), user manual and technical documentation. The development board brings out all I/Os for convenient evaluation and prototype development.",
            "decisionGuide": "Purchase the ELF2-DK Development Kit to start evaluation and development.",
            "keywords": ["Development Kit", "development board", "ELF2-DK"]
          }
        ],
        "products": [
          {
            "id": "elf2l45b",
            "name": "ELF2L45B",
            "partNumber": "ELF2L45B-3B256N",
            "shortDescription": "4.5K LUTs FPGA with embedded Flash, low power consumption",
            "description": "ELF2L45B is a 4.5K LUTs FPGA featuring embedded Flash for instant-on configuration, low power consumption, and competitive pricing. Ideal for industrial control, LED display, and consumer electronics applications.",
            "specifications": {
              "LUTs": "4,480",
              "Embedded Flash": "Yes",
              "Static Power": "5-10mA",
              "Package": "BGA256",
              "I/O Pins": "176"
            },
            "applications": [
              "Industrial Control",
              "LED Display Control",
              "Motor Control",
              "Consumer Electronics"
            ],
            "faqs": [
              {
                "question": "What is the package type of ELF2L45B-3B256N?",
                "answer": "ELF2L45B-3B256N comes in a BGA256 package with 176 user I/O pins. Other package options include TQFP144 and QFN88 for different application requirements.",
                "keywords": ["BGA256", "package", "I/O pins"]
              }
            ],
            "faeReview": {
              "author": "BeiLuo FAE Team",
              "content": "Based on extensive field experience, ELF2L45B delivers excellent performance across various operating conditions. The embedded Flash eliminates external configuration memory, reducing BOM cost and board space. Customers consistently report high satisfaction with reliability and ease of integration for industrial applications.",
              "highlight": "Low power, embedded Flash, cost-effective, domestic alternative"
            }
          },
          {
            "id": "elf2l15b",
            "name": "ELF2L15B",
            "partNumber": "ELF2L15B-3T144N",
            "shortDescription": "1.5K LUTs FPGA for simple designs",
            "description": "ELF2L15B provides 1.5K LUTs for simple logic designs at lower cost. Suitable for basic control logic, interface conversion, and low-capacity applications.",
            "specifications": {
              "LUTs": "1,536",
              "Embedded Flash": "Yes",
              "Package": "TQFP144",
              "I/O Pins": "96"
            },
            "applications": [
              "Simple Control Logic",
              "Interface Conversion",
              "Low Capacity Applications"
            ]
          },
          {
            "id": "elf2l90b",
            "name": "ELF2L90B",
            "partNumber": "ELF2L90B-3B324N",
            "shortDescription": "9K LUTs FPGA for complex designs",
            "description": "ELF2L90B provides 9K LUTs with doubled capacity for complex designs. Suitable for multi-axis control, complex algorithms, and large-scale interfaces.",
            "specifications": {
              "LUTs": "9,216",
              "Embedded Flash": "Yes",
              "Package": "BGA324",
              "I/O Pins": "224"
            },
            "applications": [
              "Multi-axis Control",
              "Complex Algorithms",
              "Large-scale Interfaces"
            ]
          }
        ]
      }
    ]
  };
  
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('  [SUCCESS] Regenerated anlogic/products.json');
}

// 重新生成 brand.json
function regenerateBrand() {
  const brandPath = path.join(dataDir, 'brand.json');
  
  const brandData = {
    "name": "anlogic",
    "displayName": "Anlogic",
    "description": "Anlogic is a leading FPGA manufacturer providing cost-effective programmable logic solutions. The company specializes in low-power FPGAs with embedded Flash technology, offering competitive alternatives to Xilinx and Altera devices for industrial, communications, and consumer applications.",
    "longDescription": "As an authorized Anlogic distributor, BeiLuo Electronics provides comprehensive support for Anlogic's FPGA portfolio. Anlogic is a technology-leading FPGA company focused on developing cost-effective programmable logic devices. The company's ELF2 and EAGLE series FPGAs feature embedded Flash for instant-on configuration, eliminating external memory and reducing system cost. Anlogic FPGAs provide pin-compatible alternatives to Xilinx Spartan series at significantly lower prices while maintaining comparable performance. The company serves diverse markets including industrial automation, LED display control, communications equipment, and consumer electronics. With strong technical support and development tools, Anlogic enables rapid FPGA adoption for cost-sensitive applications.",
    "foundedYear": "2011",
    "headquarters": "Shanghai, China",
    "employees": "300+",
    "website": "https://www.anlogic.com",
    "logo": "/brands/anlogic/logo.png",
    "certifications": ["ISO 9001"],
    "coreProducts": [
      "ELF2 Series FPGA",
      "EAGLE Series FPGA",
      "Development Tools",
      "IP Cores"
    ],
    "industries": [
      "Industrial Control",
      "LED Display",
      "Communications",
      "Consumer Electronics"
    ],
    "seoTitle": "Anlogic Distributor | FPGA Solutions | ELF2, EAGLE Series",
    "seoDescription": "Authorized Anlogic distributor offering ELF2 and EAGLE series FPGAs. Cost-effective alternatives to Xilinx with embedded Flash technology. Technical support and competitive pricing.",
    "seoKeywords": [
      "Anlogic distributor",
      "Anlogic FPGA",
      "ELF2 FPGA",
      "EAGLE FPGA",
      "Xilinx alternative",
      "low cost FPGA"
    ],
    "faqs": [
      {
        "question": "What makes Anlogic FPGAs different from Xilinx?",
        "answer": "Anlogic FPGAs offer several key advantages: embedded Flash eliminates external configuration memory, reducing BOM cost and board space; significantly lower pricing compared to equivalent Xilinx devices; instant-on configuration without external memory; and comparable performance for most applications. Anlogic provides pin-compatible alternatives to Xilinx Spartan series with detailed migration support.",
        "decisionGuide": "Consider Anlogic for cost-sensitive applications where Xilinx pricing is prohibitive. Contact BeiLuo FAE for migration analysis.",
        "keywords": ["Anlogic vs Xilinx", "FPGA comparison", "cost advantage"]
      },
      {
        "question": "Does Anlogic provide design migration support from Xilinx?",
        "answer": "Yes, Anlogic provides comprehensive migration support including pin compatibility analysis, design porting guidelines, timing constraint conversion, and IP core alternatives. BeiLuo's FAE team can assist with design review, constraint conversion, and validation testing to ensure successful migration from Xilinx to Anlogic FPGAs.",
        "decisionGuide": "Contact BeiLuo FAE early in the migration process for design analysis and planning assistance.",
        "keywords": ["Xilinx migration", "design porting", "migration support"]
      }
    ]
  };
  
  fs.writeFileSync(brandPath, JSON.stringify(brandData, null, 2), 'utf8');
  console.log('  [SUCCESS] Regenerated anlogic/brand.json');
}

// 重新生成 solutions.json
function regenerateSolutions() {
  const solutionsPath = path.join(dataDir, 'solutions.json');
  
  const solutionsData = {
    "seoTitle": "Anlogic FPGA Solutions | Industrial Control, LED Display | BeiLuo",
    "seoDescription": "Explore Anlogic FPGA solutions for industrial control, LED display, and communications. Cost-effective programmable logic solutions with technical support.",
    "seoKeywords": [
      "Anlogic solutions",
      "FPGA solutions",
      "industrial control FPGA",
      "LED display controller"
    ],
    "solutions": [
      {
        "id": "industrial-control-fpga",
        "title": "Industrial Control FPGA Solution",
        "subtitle": "Cost-effective programmable control for industrial automation",
        "slug": "industrial-control-fpga-solution",
        "description": "Complete industrial control solution using Anlogic ELF2 FPGAs for motor control, PLC interfaces, and real-time processing applications.",
        "longDescription": "This industrial control solution leverages Anlogic ELF2 FPGAs to provide cost-effective programmable logic for automation systems. The solution features instant-on configuration with embedded Flash, low power consumption for thermal-constrained environments, and comprehensive I/O options for industrial interfaces. Suitable for motor control, sensor interfaces, communication gateways, and real-time control applications.",
        "applications": [
          "Motor Control Systems",
          "Industrial Communication",
          "Sensor Interfaces",
          "Real-time Control"
        ],
        "benefits": [
          "Lower cost than Xilinx alternatives",
          "Instant-on with embedded Flash",
          "Low power consumption",
          "Industrial temperature range"
        ]
      }
    ]
  };
  
  fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2), 'utf8');
  console.log('  [SUCCESS] Regenerated anlogic/solutions.json');
}

// 重新生成 support.json
function regenerateSupport() {
  const supportPath = path.join(dataDir, 'support.json');
  
  const supportData = {
    "seoTitle": "Anlogic Technical Support | FPGA Design, Migration | BeiLuo",
    "seoDescription": "Access Anlogic technical documentation, design guides, and migration support. Authorized distributor support for FPGA development and Xilinx migration.",
    "seoKeywords": [
      "Anlogic support",
      "FPGA design guide",
      "Xilinx migration",
      "Tang Dynasty software"
    ],
    "faqs": [
      {
        "question": "What technical support does BeiLuo provide for Anlogic FPGAs?",
        "answer": "As an authorized Anlogic distributor, BeiLuo provides comprehensive technical support including FPGA selection guidance, design review and optimization, Xilinx migration assistance, TD software support, and evaluation board provision. Our FAE team has extensive experience with Anlogic FPGAs and can assist with complex design challenges.",
        "decisionGuide": "Contact BeiLuo FAE team for design assistance and product recommendations.",
        "keywords": ["technical support", "FAE", "design assistance"]
      },
      {
        "question": "Where can I download Anlogic development tools?",
        "answer": "Anlogic Tang Dynasty (TD) software can be downloaded from the Anlogic official website. The software includes FPGA design, synthesis, placement and routing, and programming capabilities. BeiLuo can also provide software installation support and training materials for new users.",
        "decisionGuide": "Download TD software from Anlogic website or contact BeiLuo for installation support.",
        "keywords": ["Tang Dynasty software", "TD download", "development tools"]
      }
    ]
  };
  
  fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2), 'utf8');
  console.log('  [SUCCESS] Regenerated anlogic/support.json');
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Regenerate Anlogic Brand Data');
  console.log('========================================');
  
  regenerateBrand();
  regenerateProducts();
  regenerateSolutions();
  regenerateSupport();
  
  console.log('\n========================================');
  console.log('All Anlogic files regenerated successfully!');
  console.log('========================================');
}

main();
