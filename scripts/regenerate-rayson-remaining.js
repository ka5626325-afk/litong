#!/usr/bin/env node
/**
 * 重新生成 Rayson 剩余的 solutions.json 和 support.json
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'rayson');

// 重新生成 solutions.json
function regenerateSolutions() {
  const solutionsPath = path.join(dataDir, 'solutions.json');
  
  const solutionsData = {
    "seoTitle": "Rayson Memory Solutions | DDR, NAND Flash, eMMC | BeiLuo",
    "seoDescription": "Explore Rayson memory solutions for consumer electronics, industrial control, and automotive applications. High-performance storage solutions with technical support.",
    "seoKeywords": [
      "Rayson solutions",
      "memory solutions",
      "DDR solution",
      "NAND Flash solution",
      "eMMC solution"
    ],
    "solutions": [
      {
        "id": "industrial-memory-solution",
        "name": "Industrial Memory Solution",
        "title": "Industrial Memory Solution",
        "subtitle": "High-reliability memory for industrial and automotive applications",
        "slug": "industrial-memory-solution",
        "description": "Complete industrial memory solution using Rayson DDR and NAND Flash products for industrial control, automation, and automotive electronics.",
        "longDescription": "This industrial memory solution leverages Rayson's high-reliability memory products to provide stable storage for industrial and automotive applications. The solution includes industrial-grade DDR memory with wide temperature ranges, SLC NAND Flash for high endurance, and eMMC for embedded storage. All components are designed to meet the stringent requirements of industrial automation, automotive electronics, and mission-critical systems.",
        "applications": [
          "Industrial Control Systems",
          "Automotive Electronics",
          "Medical Equipment",
          "Network Infrastructure",
          "IoT Devices"
        ],
        "benefits": [
          "Industrial temperature range (-40°C to +85°C)",
          "High reliability and long-term availability",
          "Comprehensive technical support",
          "Competitive pricing"
        ],
        "faeInsights": {
          "author": "BeiLuo FAE Team",
          "title": "Senior FAE - Memory Solutions",
          "insight": "Based on extensive field experience supporting industrial customers, Rayson memory products offer excellent reliability and performance for demanding applications. We have successfully deployed these solutions in numerous industrial control systems with excellent results.",
          "logic": "Rayson's focus on industrial and automotive markets ensures their products meet stringent quality requirements. The company's commitment to long-term availability is crucial for industrial customers with extended product lifecycles.",
          "decisionFramework": {
            "title": "Industrial Memory Selection Framework",
            "steps": [
              "Assess temperature range requirements for your application",
              "Determine memory capacity and performance needs",
              "Evaluate reliability and endurance requirements",
              "Consider long-term availability and supply chain stability",
              "Contact BeiLuo FAE for technical consultation"
            ]
          }
        }
      },
      {
        "id": "consumer-memory-solution",
        "name": "Consumer Electronics Memory Solution",
        "title": "Consumer Electronics Memory Solution",
        "subtitle": "Cost-effective memory for smartphones, tablets, and consumer devices",
        "slug": "consumer-memory-solution",
        "description": "High-performance, cost-effective memory solutions using Rayson LPDDR and eMMC products for consumer electronics applications.",
        "longDescription": "This consumer electronics solution provides Rayson mobile memory products optimized for smartphones, tablets, and portable devices. The solution features LPDDR4/LPDDR4X for ultra-low power consumption, high-speed eMMC for storage, and TLC NAND for cost-effective capacity. Rayson's competitive pricing and stable supply make it an excellent choice for high-volume consumer applications.",
        "applications": [
          "Smartphones",
          "Tablets",
          "Smart TVs",
          "Set-top Boxes",
          "Portable Gaming Devices"
        ],
        "benefits": [
          "Ultra-low power consumption",
          "High performance at competitive prices",
          "Stable supply chain",
          "Comprehensive technical support"
        ],
        "faeInsights": {
          "author": "BeiLuo FAE Team",
          "title": "Senior FAE - Mobile Memory",
          "insight": "Rayson mobile memory products provide excellent performance-to-price ratio for consumer electronics. We have supported many smartphone and tablet designs with these components, achieving excellent results in both performance and cost optimization.",
          "logic": "The mobile memory market demands a balance of performance, power efficiency, and cost. Rayson products deliver on all three fronts, making them competitive alternatives to established brands.",
          "decisionFramework": {
            "title": "Consumer Memory Selection Framework",
            "steps": [
              "Define performance and capacity requirements",
              "Evaluate power consumption constraints",
              "Consider cost targets and volume projections",
              "Assess supply chain and availability needs",
              "Contact BeiLuo FAE for optimization recommendations"
            ]
          }
        }
      }
    ]
  };
  
  fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2), 'utf8');
  console.log('  [SUCCESS] Regenerated rayson/solutions.json');
}

// 重新生成 support.json
function regenerateSupport() {
  const supportPath = path.join(dataDir, 'support.json');
  
  const supportData = {
    "seoTitle": "Rayson Technical Support | Memory Selection, Design Guide | BeiLuo",
    "seoDescription": "Access Rayson technical documentation, memory selection guides, and design support. Authorized distributor support for DDR, NAND Flash, and eMMC applications.",
    "seoKeywords": [
      "Rayson support",
      "memory selection guide",
      "DDR design guide",
      "NAND Flash application",
      "eMMC support"
    ],
    "articles": [
      {
        "id": "ddr-selection-guide",
        "title": "DDR Memory Selection Guide",
        "summary": "Comprehensive guide for selecting the right DDR memory for your application",
        "content": "This guide covers key parameters for DDR memory selection including capacity, speed grade, voltage, and temperature range. It provides practical advice for matching memory specifications to application requirements.",
        "category": "Technical Guide",
        "faqs": [
          {
            "question": "How do I select the right DDR memory capacity?",
            "answer": "DDR memory capacity selection depends on your processor requirements, operating system needs, and application memory footprint. Consider future expansion needs and add 20-30% headroom.",
            "keywords": ["DDR capacity", "memory sizing"]
          }
        ]
      },
      {
        "id": "nand-flash-guide",
        "title": "NAND Flash Application Guide",
        "summary": "Guide for selecting and using NAND Flash in embedded applications",
        "content": "This guide covers SLC, MLC, and TLC NAND Flash types, their characteristics, and selection criteria for different applications.",
        "category": "Application Note",
        "faqs": [
          {
            "question": "Which NAND Flash type should I choose?",
            "answer": "SLC offers highest endurance (100K cycles) for industrial use, MLC provides balanced cost/reliability, TLC is most cost-effective for consumer applications.",
            "keywords": ["NAND Flash", "SLC", "MLC", "TLC"]
          }
        ]
      },
      {
        "id": "emmc-design-guide",
        "title": "eMMC Design and Layout Guide",
        "summary": "Best practices for eMMC circuit design and PCB layout",
        "content": "This guide provides recommendations for eMMC power supply design, signal routing, and PCB layout to ensure reliable operation.",
        "category": "Design Guide",
        "faqs": [
          {
            "question": "What are the key layout considerations for eMMC?",
            "answer": "Key considerations include proper power decoupling, controlled impedance for high-speed signals, and minimizing trace length for clock and data lines.",
            "keywords": ["eMMC layout", "PCB design"]
          }
        ]
      },
      {
        "id": "memory-reliability",
        "title": "Memory Reliability and Quality",
        "summary": "Understanding memory reliability metrics and quality assurance",
        "content": "This article explains key reliability metrics including MTBF, endurance cycles, and data retention, and how to evaluate memory quality for your application.",
        "category": "Quality Guide",
        "faqs": [
          {
            "question": "What reliability metrics should I consider for memory selection?",
            "answer": "Key metrics include MTBF (Mean Time Between Failures), program/erase endurance cycles, data retention time, and operating temperature range.",
            "keywords": ["memory reliability", "MTBF", "endurance"]
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "What technical support does BeiLuo provide for Rayson products?",
        "answer": "As an authorized Rayson distributor, BeiLuo provides comprehensive technical support including memory selection guidance, design review, PCB layout recommendations, debugging assistance, and access to technical documentation. Our FAE team has extensive experience with memory applications.",
        "decisionGuide": "Contact BeiLuo FAE team for technical assistance with your Rayson memory design.",
        "keywords": ["technical support", "FAE", "design assistance"]
      },
      {
        "question": "Where can I find Rayson product specifications?",
        "answer": "Rayson product specifications, datasheets, and application notes are available through BeiLuo Electronics. We provide comprehensive documentation including electrical specifications, timing parameters, and reliability data.",
        "decisionGuide": "Contact BeiLuo for specific product documentation and reliability reports.",
        "keywords": ["datasheet", "specification", "documentation"]
      }
    ]
  };
  
  fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2), 'utf8');
  console.log('  [SUCCESS] Regenerated rayson/support.json');
}

function main() {
  console.log('========================================');
  console.log('Regenerate Rayson Solutions and Support');
  console.log('========================================');
  
  regenerateSolutions();
  regenerateSupport();
  
  console.log('\n========================================');
  console.log('Rayson solutions and support regenerated!');
  console.log('========================================');
}

main();
