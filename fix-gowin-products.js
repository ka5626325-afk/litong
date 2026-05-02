#!/usr/bin/env node

/**
 * Fix Gowin Data - Replace fabricated products with real FPGA products
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'gowin');
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Real Gowin FPGA products to replace fabricated ones
const realProducts = {
  // LittleBee FPGA Category - Products 3 & 4
  littlebee3: {
    partNumber: "GW1N-LV9QN48C6/I5",
    name: "GW1N-LV9 LittleBee FPGA",
    shortDescription: "9K LUT low-power FPGA with embedded flash, 48-pin QFN package for IoT and portable applications.",
    descriptionParagraphs: [
      "The GW1N-LV9 is a high-density member of the LittleBee family, offering 8,640 LUTs for complex IoT and edge computing applications.",
      "Features embedded flash configuration for instant-on operation, ultra-low static power consumption, and rich I/O capabilities.",
      "Ideal for smart home devices, industrial sensors, and battery-powered applications requiring more logic resources."
    ],
    specifications: {
      "Logic Elements": "8,640 LUTs",
      "Registers": "6,480",
      "Embedded Flash": "2.5Mbit",
      "Static Power": "<50μA",
      "I/O Count": "42",
      "Core Voltage": "1.2V",
      "I/O Voltage": "1.2V-3.3V",
      "Temperature Range": "-40°C to +85°C (Industrial)",
      "Package": "QFN-48 (6x6mm)"
    },
    features: [
      "8,640 LUT4 logic elements",
      "Embedded flash configuration memory",
      "Ultra-low static power <50μA",
      "42 user I/O pins",
      "Multi-voltage I/O support (1.2V-3.3V)",
      "Built-in oscillator and PLL",
      "DSP blocks for signal processing",
      "Instant-on configuration"
    ],
    applications: [
      "Smart home and IoT gateways",
      "Industrial sensor interfaces",
      "Motor control and drives",
      "Battery-powered devices",
      "LED display controllers"
    ],
    faqs: [
      {
        question: "What is the logic capacity of GW1N-LV9?",
        answer: "The GW1N-LV9 provides 8,640 LUT4 logic elements, 6,480 registers, and 2.5Mbit of embedded flash memory. This makes it suitable for complex IoT applications requiring significant processing capability while maintaining ultra-low power consumption.",
        decisionGuide: "Compare your design's LUT requirements against the 8,640 LUT capacity. Contact FAE for logic estimation assistance.",
        keywords: ["GW1N-LV9 capacity", "LittleBee logic elements", "FPGA resources"]
      },
      {
        question: "What package options are available for GW1N-LV9?",
        answer: "The GW1N-LV9 is available in QFN-48 (6x6mm) package. This compact package is ideal for space-constrained designs while providing 42 user I/O pins. The package supports industrial temperature range (-40°C to +85°C).",
        decisionGuide: "Verify the QFN-48 package meets your PCB manufacturing capabilities and space constraints.",
        keywords: ["GW1N-LV9 package", "QFN-48", "LittleBee footprint"]
      }
    ]
  },
  littlebee4: {
    partNumber: "GW1NR-LV9QN48PC6/I5",
    name: "GW1NR-LV9 LittleBee FPGA with SDRAM",
    shortDescription: "9K LUT FPGA with 64Mbit embedded SDRAM for video processing and buffering applications.",
    descriptionParagraphs: [
      "The GW1NR-LV9 integrates 64Mbit of embedded SDRAM with 8,640 LUTs, eliminating the need for external memory in many applications.",
      "Ideal for video frame buffering, data acquisition systems, and applications requiring on-chip memory storage.",
      "Combines the low-power advantages of LittleBee with substantial embedded memory for system-on-chip designs."
    ],
    specifications: {
      "Logic Elements": "8,640 LUTs",
      "Registers": "6,480",
      "Embedded Flash": "2.5Mbit",
      "Embedded SDRAM": "64Mbit",
      "Static Power": "<100μA",
      "I/O Count": "38",
      "Core Voltage": "1.2V",
      "I/O Voltage": "1.2V-3.3V",
      "Temperature Range": "-40°C to +85°C (Industrial)",
      "Package": "QFN-48 (6x6mm)"
    },
    features: [
      "8,640 LUT4 logic elements",
      "64Mbit embedded SDRAM",
      "2.5Mbit embedded flash",
      "38 user I/O pins",
      "Multi-voltage I/O support",
      "Built-in memory controller",
      "Ultra-low standby power",
      "Instant-on configuration"
    ],
    applications: [
      "Video frame buffering",
      "Data acquisition systems",
      "Image processing",
      "Display controllers",
      "Embedded vision"
    ],
    faqs: [
      {
        question: "What is the advantage of embedded SDRAM in GW1NR-LV9?",
        answer: "The 64Mbit embedded SDRAM eliminates the need for external memory chips, reducing BOM cost, PCB area, and power consumption. It provides sufficient memory for video frame buffering (VGA resolution) and data acquisition applications. The embedded memory operates at high speed with low latency.",
        decisionGuide: "Calculate your memory requirements. 64Mbit supports VGA@60Hz frame buffer or 8MB of data storage.",
        keywords: ["embedded SDRAM", "GW1NR-LV9 memory", "video buffer"]
      }
    ]
  },
  // Arora FPGA Category - Products 3 & 4
  arora3: {
    partNumber: "GW2A-LV18PG256C8/I7",
    name: "GW2A-LV18 Arora FPGA",
    shortDescription: "18K LUT high-performance FPGA with 256-pin BGA package for industrial and communications applications.",
    descriptionParagraphs: [
      "The GW2A-LV18 delivers 18,720 LUTs in a compact form factor, providing high-performance programmable logic for demanding applications.",
      "Features abundant DSP resources, high-speed I/O, and support for external DDR3 memory interfaces.",
      "Ideal for industrial vision, communications infrastructure, and edge AI applications requiring significant compute power."
    ],
    specifications: {
      "Logic Elements": "18,720 LUTs",
      "Registers": "14,040",
      "DSP Blocks": "24 (18x18 multipliers)",
      "Block RAM": "828Kbit",
      "I/O Count": "207",
      "Core Voltage": "1.0V",
      "I/O Voltage": "1.2V-3.3V",
      "Temperature Range": "-40°C to +85°C (Industrial)",
      "Package": "PBGA-256 (17x17mm)"
    },
    features: [
      "18,720 LUT4 logic elements",
      "24 DSP blocks for signal processing",
      "828Kbit block RAM",
      "207 user I/O pins",
      "DDR3 memory interface support",
      "High-speed transceivers",
      "PCIe Gen2 x1 support",
      "Industrial temperature range"
    ],
    applications: [
      "Industrial machine vision",
      "Communications infrastructure",
      "Video processing",
      "Edge AI inference",
      "Test and measurement"
    ],
    faqs: [
      {
        question: "What DSP capabilities does GW2A-LV18 offer?",
        answer: "The GW2A-LV18 includes 24 DSP blocks, each capable of 18x18 multiplication with 48-bit accumulator. This provides substantial signal processing capability for applications like FFT, FIR filtering, and neural network inference. The DSP blocks support pipelined operation for high throughput.",
        decisionGuide: "Calculate your DSP requirements. 24 DSP blocks support real-time processing for most industrial vision and communications applications.",
        keywords: ["GW2A-LV18 DSP", "Arora signal processing", "FPGA multiplier"]
      }
    ]
  },
  arora4: {
    partNumber: "GW2A-LV55PG484C8/I7",
    name: "GW2A-LV55 Arora FPGA",
    shortDescription: "55K LUT high-performance FPGA with 484-pin BGA for complex video processing and AI applications.",
    descriptionParagraphs: [
      "The GW2A-LV55 is the high-capacity member of the Arora family, offering 54,720 LUTs for complex designs.",
      "Features extensive DSP resources, large block RAM, and high-speed SerDes transceivers for demanding applications.",
      "Ideal for 4K video processing, multi-channel AI inference, and high-performance communications systems."
    ],
    specifications: {
      "Logic Elements": "54,720 LUTs",
      "Registers": "41,040",
      "DSP Blocks": "72 (18x18 multipliers)",
      "Block RAM": "2,484Kbit",
      "SerDes": "4 channels @ 6.6Gbps",
      "I/O Count": "338",
      "Core Voltage": "1.0V",
      "I/O Voltage": "1.2V-3.3V",
      "Temperature Range": "-40°C to +85°C (Industrial)",
      "Package": "FBGA-484 (23x23mm)"
    },
    features: [
      "54,720 LUT4 logic elements",
      "72 DSP blocks for intensive compute",
      "2.5Mbit block RAM",
      "4x 6.6Gbps SerDes transceivers",
      "338 user I/O pins",
      "PCIe Gen2 x4 support",
      "DDR3/DDR4 memory support",
      "High-speed LVDS interfaces"
    ],
    applications: [
      "4K video processing",
      "Multi-channel AI inference",
      "5G baseband processing",
      "High-performance computing",
      "Network acceleration"
    ],
    faqs: [
      {
        question: "What high-speed interfaces does GW2A-LV55 support?",
        answer: "The GW2A-LV55 features 4 SerDes transceivers supporting up to 6.6Gbps each, enabling PCIe Gen2 x4, SATA, and custom high-speed protocols. Combined with 338 I/O pins supporting LVDS at 1.2Gbps, it provides comprehensive connectivity for high-bandwidth applications.",
        decisionGuide: "Verify your interface requirements against the SerDes and LVDS capabilities. Contact FAE for detailed interface guidelines.",
        keywords: ["GW2A-LV55 SerDes", "high-speed transceivers", "PCIe FPGA"]
      }
    ]
  },
  // Tang Nano Boards Category - Products 3 & 4
  tangnano3: {
    partNumber: "Tang Nano 20K",
    name: "Tang Nano 20K Development Board",
    shortDescription: "Feature-rich development board with GW2AR-LV18 FPGA, 64Mbit SDRAM, and HDMI interface for video applications.",
    descriptionParagraphs: [
      "The Tang Nano 20K is a powerful development platform featuring the GW2AR-LV18 FPGA with 64Mbit embedded SDRAM.",
      "Includes HDMI output, USB-C programming interface, and 40-pin GPIO header for expansion.",
      "Ideal for video processing projects, retro gaming emulation, and high-resolution display applications."
    ],
    specifications: {
      "FPGA": "GW2AR-LV18 (18,720 LUTs)",
      "Embedded Memory": "64Mbit SDRAM",
      "Video Output": "HDMI (1080p60)",
      "Programming": "USB-C ( onboard programmer)",
      "GPIO": "40-pin header (2x20)",
      "Power": "USB-C 5V",
      "Dimensions": "58x22mm",
      "Temperature Range": "0°C to +70°C (Commercial)"
    },
    features: [
      "GW2AR-LV18 FPGA (18K LUTs)",
      "64Mbit embedded SDRAM",
      "HDMI output up to 1080p60",
      "USB-C programming and power",
      "40-pin GPIO expansion header",
      "Onboard oscillator and PLL",
      "Open-source toolchain support",
      "Active community support"
    ],
    applications: [
      "Video processing development",
      "Retro gaming emulation",
      "Display controller prototyping",
      "FPGA learning and education",
      "Embedded vision projects"
    ],
    faqs: [
      {
        question: "What video resolutions does Tang Nano 20K support?",
        answer: "The Tang Nano 20K supports HDMI output up to 1080p60 (1920x1080 at 60Hz). The 64Mbit embedded SDRAM provides sufficient frame buffer for high-resolution video processing. The board can drive standard HDMI monitors and TVs directly.",
        decisionGuide: "Verify your display requirements. 1080p60 is supported for most standard monitors.",
        keywords: ["Tang Nano 20K HDMI", "video resolution", "1080p FPGA"]
      }
    ]
  },
  tangnano4: {
    partNumber: "Tang Nano 138K Pro",
    name: "Tang Nano 138K Pro Development Board",
    shortDescription: "Professional development board with GW5AT-LV138 FPGA, DDR3 memory, and PCIe interface for high-performance applications.",
    descriptionParagraphs: [
      "The Tang Nano 138K Pro is Gowin's flagship development platform featuring the GW5AT-LV138 high-performance FPGA.",
      "Includes DDR3 memory, PCIe x4 interface, multiple high-speed connectors, and comprehensive debug capabilities.",
      "Designed for professional developers working on AI acceleration, video processing, and high-speed communications."
    ],
    specifications: {
      "FPGA": "GW5AT-LV138 (138,240 LUTs)",
      "External Memory": "2GB DDR3",
      "PCIe Interface": "Gen2 x4",
      "Programming": "JTAG + USB-C",
      "High-Speed I/O": "SMA connectors, FMC connector",
      "Storage": "Micro SD card slot",
      "Power": "12V DC adapter",
      "Dimensions": "120x80mm"
    },
    features: [
      "GW5AT-LV138 FPGA (138K LUTs)",
      "2GB DDR3 external memory",
      "PCIe Gen2 x4 interface",
      "FMC expansion connector",
      "Multiple SMA high-speed I/O",
      "JTAG and USB-C programming",
      "Rich debug features",
      "Reference designs included"
    ],
    applications: [
      "AI/ML acceleration development",
      "High-performance computing",
      "Video codec development",
      "Communications prototyping",
      "Research and education"
    ],
    faqs: [
      {
        question: "What makes Tang Nano 138K Pro suitable for AI development?",
        answer: "The Tang Nano 138K Pro features the GW5AT-LV138 with 138K LUTs and extensive DSP resources, providing substantial compute power for neural network inference. The 2GB DDR3 memory supports large model storage, while the PCIe x4 interface enables high-bandwidth host communication. Gowin provides AI acceleration IP cores and reference designs for popular neural network architectures.",
        decisionGuide: "Evaluate your AI model requirements against the 138K LUT capacity and DSP resources. Contact FAE for AI toolchain support.",
        keywords: ["Tang Nano 138K Pro", "AI FPGA", "neural network acceleration"]
      }
    ]
  }
};

// Find and replace fabricated products
let fixCount = 0;

productsData.categories.forEach(category => {
  if (!category.products) return;
  
  // Find fabricated products (those with -3 or -4 suffix in partNumber)
  const fabricatedIndices = [];
  category.products.forEach((product, index) => {
    if (product.partNumber && (product.partNumber.includes('-3') || product.partNumber.includes('-4'))) {
      fabricatedIndices.push(index);
    }
  });
  
  // Replace fabricated products
  fabricatedIndices.forEach(index => {
    const oldProduct = category.products[index];
    let newProduct = null;
    
    if (category.id === 'littlebee-fpga') {
      if (oldProduct.partNumber === 'LITTLEBEEFPGA-3') {
        newProduct = { ...realProducts.littlebee3 };
      } else if (oldProduct.partNumber === 'LITTLEBEEFPGA-4') {
        newProduct = { ...realProducts.littlebee4 };
      }
    } else if (category.id === 'arora-fpga') {
      if (oldProduct.partNumber === 'ARORAFPGA-3') {
        newProduct = { ...realProducts.arora3 };
      } else if (oldProduct.partNumber === 'ARORAFPGA-4') {
        newProduct = { ...realProducts.arora4 };
      }
    } else if (category.id === 'tang-nano-boards') {
      if (oldProduct.partNumber === 'TANGNANOBOARDS-3') {
        newProduct = { ...realProducts.tangnano3 };
      } else if (oldProduct.partNumber === 'TANGNANOBOARDS-4') {
        newProduct = { ...realProducts.tangnano4 };
      }
    }
    
    if (newProduct) {
      // Preserve the original product structure
      category.products[index] = {
        ...oldProduct,
        partNumber: newProduct.partNumber,
        name: newProduct.name,
        shortDescription: newProduct.shortDescription,
        descriptionParagraphs: newProduct.descriptionParagraphs,
        specifications: { ...oldProduct.specifications, ...newProduct.specifications },
        features: newProduct.features,
        applications: newProduct.applications,
        faqs: newProduct.faqs
      };
      console.log(`✓ Replaced ${oldProduct.partNumber} with ${newProduct.partNumber}`);
      fixCount++;
    }
  });
});

// Write updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log(`\n✅ Fixed ${fixCount} fabricated products in gowin`);
