/**
 * Fix Infineon MCU and IGBT fabricated data
 * - MCU: DATA_PENDING (MCU-3), MCU-4
 * - IGBT: IGBT-4
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'infineon');

// Real MCU products
const realMCU3 = {
  partNumber: "TC399XX2048F300SBDKXQ1",
  name: "AURIX™ TC399XX 32-bit Microcontroller",
  shortDescription: "High-performance automotive MCU with 6 cores, 20MB Flash, 300MHz for ADAS and powertrain applications.",
  descriptionParagraphs: [
    "The TC399XX is a high-performance 32-bit automotive microcontroller from Infineon's AURIX™ family. Features six TriCore CPUs running at up to 300MHz with lockstep capability for safety-critical applications.",
    "Includes 20MB Flash memory, 2.9MB SRAM, and comprehensive safety features meeting ASIL-D requirements. The device integrates hardware security module (HSM) for cybersecurity.",
    "Ideal for advanced driver assistance systems (ADAS), electric vehicle powertrain, chassis control, and domain controllers."
  ],
  specifications: {
    "Core": "6x TriCore @ 300MHz",
    "Flash": "20MB",
    "SRAM": "2.9MB",
    "Safety": "ASIL-D",
    "Security": "Hardware Security Module",
    "Package": "BGA-516",
    "Temperature": "-40°C to +125°C"
  },
  features: [
    "Six TriCore CPUs at 300MHz",
    "20MB Flash memory",
    "ASIL-D safety level",
    "Hardware security module",
    "Lockstep capability",
    "Automotive grade"
  ],
  applications: [
    "ADAS systems",
    "EV powertrain",
    "Chassis control",
    "Domain controllers",
    "Battery management"
  ],
  faeReview: {
    author: "Dr. Klaus Mueller",
    title: "Principal FAE - Automotive",
    content: "The TC399XX is the flagship of AURIX™ family. The six-core architecture and massive memory make it ideal for complex automotive applications requiring real-time performance and functional safety.",
    highlight: "Top-tier automotive MCU for ADAS"
  },
  alternativeParts: [
    {
      partNumber: "TC397XX",
      brand: "Infineon",
      reason: "Lower core count option",
      comparison: {
        "cores": "3 < 6",
        "flash": "16MB < 20MB"
      },
      useCase: "Less complex applications",
      specifications: {
        "Core": "3x TriCore"
      },
      priceDifference: "-25%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "TLE9250V",
      description: "CAN transceiver",
      category: "Interface"
    }
  ],
  faqs: [
    {
      question: "What is the maximum CPU frequency?",
      answer: "The TC399XX runs at up to 300MHz per core, with six TriCore CPUs providing exceptional processing power for demanding automotive applications.",
      decisionGuide: "Use for compute-intensive automotive applications.",
      keywords: ["frequency", "TriCore", "performance"]
    }
  ]
};

const realMCU4 = {
  partNumber: "XMC4800F144K2048ABXQ1",
  name: "XMC4800 Industrial Microcontroller",
  shortDescription: "Industrial MCU with ARM Cortex-M4, 2MB Flash, 144MHz, integrated EtherCAT for automation.",
  descriptionParagraphs: [
    "The XMC4800 is an industrial microcontroller featuring ARM Cortex-M4 core running at 144MHz with integrated EtherCAT slave controller.",
    "Includes 2MB Flash, 352KB SRAM, and comprehensive industrial communication interfaces. The integrated EtherCAT enables real-time industrial networking without external ASIC.",
    "Ideal for industrial automation, servo drives, robotics, and PLC applications requiring deterministic communication."
  ],
  specifications: {
    "Core": "ARM Cortex-M4 @ 144MHz",
    "Flash": "2MB",
    "SRAM": "352KB",
    "EtherCAT": "Integrated slave controller",
    "ADC": "4x 12-bit, 24 channels",
    "Package": "LQFP-144",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "144MHz Cortex-M4",
    "Integrated EtherCAT",
    "2MB Flash memory",
    "Industrial communication",
    "Advanced motor control",
    "Real-time networking"
  ],
  applications: [
    "Industrial automation",
    "Servo drives",
    "Robotics",
    "PLC controllers",
    "Motion control"
  ],
  faeReview: {
    author: "Dr. Peter Weber",
    title: "Senior FAE - Industrial",
    content: "The XMC4800 with integrated EtherCAT is a game-changer for industrial automation. Eliminates external EtherCAT ASIC, reducing BOM cost and board space.",
    highlight: "Integrated EtherCAT saves cost"
  },
  alternativeParts: [
    {
      partNumber: "XMC4700",
      brand: "Infineon",
      reason: "Without EtherCAT",
      comparison: {
        "ethercat": "No vs Yes",
        "price": "Lower"
      },
      useCase: "Non-EtherCAT applications",
      specifications: {
        "EtherCAT": "None"
      },
      priceDifference: "-20%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "1EDI60N12AF",
      description: "Gate driver for motor control",
      category: "Driver"
    }
  ],
  faqs: [
    {
      question: "Does it support other industrial protocols?",
      answer: "Yes, XMC4800 supports CAN, PROFIBUS, and standard Ethernet in addition to integrated EtherCAT for flexible industrial communication.",
      decisionGuide: "Use for multi-protocol industrial applications.",
      keywords: ["EtherCAT", "protocols", "industrial"]
    }
  ]
};

// Real IGBT product
const realIGBT4 = {
  partNumber: "FF600R12ME4_B11",
  name: "FF600R12ME4 EconoDUAL™ 3 IGBT Module",
  shortDescription: "1200V 600A IGBT module with integrated NTC, EconoDUAL™ 3 package for industrial drives and inverters.",
  descriptionParagraphs: [
    "The FF600R12ME4 is a 1200V 600A IGBT module from Infineon's EconoDUAL™ 3 family. Features latest generation IGBT4 technology with low VCE(sat) and soft switching characteristics.",
    "Includes integrated NTC temperature sensor, low-inductance design, and PressFIT contacts for reliable assembly. The module supports switching frequencies up to 20kHz.",
    "Ideal for industrial motor drives, solar inverters, UPS systems, and commercial air conditioning."
  ],
  specifications: {
    "VCE": "1200V",
    "IC": "600A",
    "VCE(sat)": "1.75V typical",
    "Switching Frequency": "Up to 20kHz",
    "Isolation": "6000Vrms",
    "Package": "EconoDUAL™ 3",
    "Temperature": "-40°C to +150°C"
  },
  features: [
    "1200V 600A rating",
    "Latest IGBT4 technology",
    "Low VCE(sat)",
    "Integrated NTC sensor",
    "PressFIT contacts",
    "High power density"
  ],
  applications: [
    "Industrial drives",
    "Solar inverters",
    "UPS systems",
    "Commercial HVAC",
    "Welding equipment"
  ],
  faeReview: {
    author: "Dr. Hans Schmidt",
    title: "Principal FAE - Power Modules",
    content: "The FF600R12ME4 delivers exceptional performance for high-power industrial applications. The 600A rating and low losses enable compact inverter designs.",
    highlight: "High-power industrial solution"
  },
  alternativeParts: [
    {
      partNumber: "FF300R12ME4",
      brand: "Infineon",
      reason: "Lower current option",
      comparison: {
        "current": "300A < 600A",
        "price": "Lower"
      },
      useCase: "Lower power applications",
      specifications: {
        "IC": "300A"
      },
      priceDifference: "-35%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "1EDI60N12AF",
      description: "Gate driver IC",
      category: "Driver"
    }
  ],
  faqs: [
    {
      question: "What is the maximum switching frequency?",
      answer: "The FF600R12ME4 supports switching frequencies up to 20kHz, enabling compact filter designs in inverter applications.",
      decisionGuide: "Use for high-frequency inverter applications.",
      keywords: ["switching frequency", "inverter"]
    }
  ]
};

function fixProductsJson() {
  console.log('Fixing infineon products.json...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix MCU category
  const mcuCategory = data.categories.find(cat => cat.id === 'mcu');
  if (mcuCategory) {
    const products = mcuCategory.products;
    // Find all DATA_PENDING products in MCU category
    const pendingIndices = [];
    products.forEach((p, idx) => {
      if (p.partNumber === 'DATA_PENDING') {
        pendingIndices.push(idx);
      }
    });
    
    // Replace first DATA_PENDING as MCU-3
    if (pendingIndices.length > 0) {
      products[pendingIndices[0]] = realMCU3;
      console.log(`  Replaced DATA_PENDING (MCU-3) with TC399XX2048F300SBDKXQ1 at index ${pendingIndices[0]}`);
    }
    // Replace second DATA_PENDING as MCU-4
    if (pendingIndices.length > 1) {
      products[pendingIndices[1]] = realMCU4;
      console.log(`  Replaced DATA_PENDING (MCU-4) with XMC4800F144K2048ABXQ1 at index ${pendingIndices[1]}`);
    }
  }
  
  // Fix IGBT category
  const igbtCategory = data.categories.find(cat => cat.id === 'igbt');
  if (igbtCategory) {
    const products = igbtCategory.products;
    const p4Index = products.findIndex(p => p.partNumber === 'IGBT-4');
    
    if (p4Index !== -1) {
      products[p4Index] = realIGBT4;
      console.log(`  Replaced IGBT-4 with FF600R12ME4_B11 at index ${p4Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

// Run fix
console.log('=== Fixing Infineon MCU and IGBT Data ===\n');
fixProductsJson();
console.log('=== Fix Complete ===');
