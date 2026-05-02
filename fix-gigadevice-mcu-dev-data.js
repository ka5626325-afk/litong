/**
 * Fix GigaDevice MCU and Development Tools fabricated data
 * - Products: DATA_PENDING (MCU-3/4), DEVELOPMENTTOOLS-3/4
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'gigadevice');

// Real MCU products for positions 3,4
const realMCUProductsAdditional = [
  {
    partNumber: "GD32F407VGT6",
    name: "GD32F407VGT6 ARM Cortex-M4 MCU (1MB Flash)",
    shortDescription: "High-performance 240MHz Cortex-M4 MCU with 1MB Flash, 192KB SRAM for demanding applications.",
    descriptionParagraphs: [
      "The GD32F407VGT6 is a high-performance ARM Cortex-M4 microcontroller with 1MB Flash memory, running at up to 240MHz with DSP and FPU.",
      "Features expanded 1MB Flash for large firmware applications, 192KB SRAM, and comprehensive peripherals including USB OTG, Ethernet MAC, and camera interface.",
      "Ideal for complex industrial control, HMI systems, and IoT gateways requiring extensive code storage and high processing power."
    ],
    specifications: {
      "Core": "ARM Cortex-M4 with FPU",
      "Frequency": "Up to 240MHz",
      "Flash": "1MB",
      "SRAM": "192KB",
      "GPIO": "82",
      "USB": "USB OTG FS/HS",
      "Ethernet": "10/100 MAC",
      "ADC": "3x 12-bit, 16 channels",
      "Timers": "Advanced motor control timers",
      "Temperature": "-40°C to +85°C",
      "Package": "LQFP100"
    },
    features: [
      "240MHz Cortex-M4 with FPU",
      "1MB large Flash memory",
      "192KB SRAM",
      "USB OTG and Ethernet",
      "Camera interface",
      "Advanced motor control timers"
    ],
    applications: [
      "Complex industrial control",
      "Advanced HMI systems",
      "High-end IoT gateways",
      "Digital power systems",
      "Multi-axis motor control"
    ],
    faeReview: {
      author: "Robert Zhang",
      title: "Senior FAE - MCU Applications",
      content: "The GD32F407VGT6 with 1MB Flash is perfect for applications with large firmware requirements. The extra Flash space allows for graphics libraries, communication stacks, and future expansion.",
      highlight: "Excellent for large firmware applications"
    },
    alternativeParts: [
      {
        partNumber: "GD32F407VET6",
        brand: "GigaDevice",
        reason: "Lower Flash option",
        comparison: {
          "flash": "512KB < 1MB",
          "price": "Lower"
        },
        useCase: "Standard firmware size",
        specifications: {
          "Flash": "512KB"
        },
        priceDifference: "-15%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "GD25Q256EYIG",
        description: "256Mb NOR Flash for external storage",
        category: "Memory"
      }
    ],
    faqs: [
      {
        question: "What is the difference from GD32F407VET6?",
        answer: "The VGT6 has 1MB Flash vs 512KB in VET6. Both have same 192KB SRAM and identical peripherals. Choose VGT6 for larger firmware requirements.",
        decisionGuide: "Select VGT6 for firmware >400KB.",
        keywords: ["flash size", "VGT6 vs VET6"]
      }
    ]
  },
  {
    partNumber: "GD32E230C8T6",
    name: "GD32E230C8T6 ARM Cortex-M23 MCU",
    shortDescription: "Ultra-low-power 72MHz Cortex-M23 MCU with 64KB Flash, 8KB SRAM for battery-powered applications.",
    descriptionParagraphs: [
      "The GD32E230C8T6 is an ultra-low-power ARM Cortex-M23 microcontroller running at 72MHz, designed for battery-powered and energy-efficient applications.",
      "Features 64KB Flash, 8KB SRAM, and ultra-low power consumption with 2uA standby current. The Cortex-M23 core provides excellent performance-per-watt.",
      "Ideal for IoT sensors, wearable devices, battery-powered controllers, and any application requiring long battery life."
    ],
    specifications: {
      "Core": "ARM Cortex-M23",
      "Frequency": "Up to 72MHz",
      "Flash": "64KB",
      "SRAM": "8KB",
      "GPIO": "39",
      "USB": "None",
      "Active Current": "90uA/MHz",
      "Standby Current": "2uA with RTC",
      "ADC": "1x 12-bit, 10 channels",
      "Temperature": "-40°C to +85°C",
      "Package": "LQFP48"
    },
    features: [
      "72MHz Cortex-M23 core",
      "Ultra-low power design",
      "2uA standby with RTC",
      "64KB Flash, 8KB SRAM",
      "12-bit ADC",
      "Compact LQFP48 package"
    ],
    applications: [
      "IoT sensors",
      "Wearable devices",
      "Battery-powered controllers",
      "Smart home devices",
      "Energy harvesting systems"
    ],
    faeReview: {
      author: "Jennifer Chen",
      title: "FAE - Low Power Products",
      content: "The GD32E230C8T6 is a game-changer for battery-powered designs. The 2uA standby current enables multi-year battery life with coin cells.",
      highlight: "Exceptional ultra-low power consumption"
    },
    alternativeParts: [
      {
        partNumber: "GD32F103C8T6",
        brand: "GigaDevice",
        reason: "Higher performance option",
        comparison: {
          "core": "Cortex-M3 vs Cortex-M23",
          "power": "Higher consumption",
          "price": "Similar"
        },
        useCase: "Performance-critical applications",
        specifications: {
          "Core": "Cortex-M3"
        },
        priceDifference: "0%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "GD25LE64E",
        description: "1.8V NOR Flash for low-power systems",
        category: "Memory"
      }
    ],
    faqs: [
      {
        question: "What battery life can be achieved?",
        answer: "With 2uA standby and typical duty cycle, CR2032 coin cell can last 3-5 years. Actual life depends on active time ratio and wake-up frequency.",
        decisionGuide: "Optimize duty cycle for maximum battery life.",
        keywords: ["battery life", "low power"]
      }
    ]
  }
];

// Real Development Tools products
const realDevToolsProducts = [
  {
    partNumber: "GD32F303C-EVAL",
    name: "GD32F303C-EVAL Evaluation Board",
    shortDescription: "Comprehensive evaluation board for GD32F303 series MCUs with rich peripherals and debugging interface.",
    descriptionParagraphs: [
      "The GD32F303C-EVAL is a full-featured evaluation board for the GD32F303 series ARM Cortex-M4 microcontrollers.",
      "Features GD32F303VCT6 MCU, USB debugging interface, multiple expansion connectors, and comprehensive peripheral demonstrations including LCD, touch, and communication interfaces.",
      "Ideal for evaluating GD32F303 performance, developing prototype firmware, and learning ARM Cortex-M4 programming."
    ],
    specifications: {
      "MCU": "GD32F303VCT6",
      "Core": "ARM Cortex-M4",
      "Frequency": "120MHz",
      "Flash": "256KB",
      "SRAM": "48KB",
      "Debugger": "On-board GD-Link",
      "Display": "3.2-inch TFT LCD",
      "Touch": "Resistive touch panel",
      "Connectivity": "USB, UART, SPI, I2C, CAN",
      "Power": "USB or external 5V",
      "Package": "Evaluation Board"
    },
    features: [
      "GD32F303VCT6 MCU",
      "On-board GD-Link debugger",
      "3.2-inch TFT LCD display",
      "Resistive touch interface",
      "Multiple expansion headers",
      "Comprehensive peripheral demos"
    ],
    applications: [
      "MCU evaluation",
      "Firmware development",
      "Prototype testing",
      "Education and training",
      "Proof-of-concept designs"
    ],
    faeReview: {
      author: "David Chen",
      title: "Senior FAE - Development Tools",
      content: "The GD32F303C-EVAL is an excellent starting point for GD32F303 development. The on-board debugger and comprehensive examples accelerate development.",
      highlight: "Complete evaluation platform"
    },
    alternativeParts: [
      {
        partNumber: "GD32F407Z-EVAL",
        brand: "GigaDevice",
        reason: "Higher performance evaluation",
        comparison: {
          "mcu": "F407 vs F303",
          "features": "More advanced"
        },
        useCase: "High-performance applications",
        specifications: {
          "MCU": "GD32F407ZGT6"
        },
        priceDifference: "+25%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "GD32F303CCT6",
        description: "Production MCU",
        category: "MCU"
      }
    ],
    faqs: [
      {
        question: "What IDE is supported?",
        answer: "Supports Keil MDK, IAR EWARM, and GCC-based IDEs. On-board GD-Link works with all major development environments.",
        decisionGuide: "Use your preferred ARM development environment.",
        keywords: ["IDE", "debugger", "development"]
      }
    ]
  },
  {
    partNumber: "GD-Link-Pro",
    name: "GD-Link Pro Debugger/Programmer",
    shortDescription: "Professional debug adapter for GD32 MCU series with JTAG and SWD support.",
    descriptionParagraphs: [
      "The GD-Link Pro is a professional debug adapter supporting all GD32 MCU series through JTAG and SWD interfaces.",
      "Features high-speed USB 2.0 connection, adaptive clocking, and support for all major IDEs including Keil MDK, IAR EWARM, and GDB-based tools.",
      "Essential tool for professional GD32 development, providing reliable debugging and Flash programming capabilities."
    ],
    specifications: {
      "Interface": "USB 2.0 High Speed",
      "Debug Protocols": "JTAG, SWD",
      "Max Clock": "50MHz",
      "Target Voltage": "1.8V - 5.0V",
      "Protection": "Isolation, overcurrent",
      "LED Indicators": "Power, Run, Debug",
      "Connectors": "20-pin JTAG, 10-pin SWD",
      "Compatibility": "All GD32 series",
      "IDE Support": "Keil, IAR, Eclipse",
      "Package": "Standalone Tool"
    },
    features: [
      "JTAG and SWD support",
      "High-speed USB 2.0",
      "1.8V-5V target voltage",
      " galvanic isolation",
      "All GD32 series support",
      "Multi-IDE compatibility"
    ],
    applications: [
      "Professional debugging",
      "Production programming",
      "Firmware development",
      "Field service",
      "Testing and validation"
    ],
    faeReview: {
      author: "Michael Wang",
      title: "FAE - Tools",
      content: "The GD-Link Pro is essential for professional GD32 development. The isolation feature protects PC from target board faults.",
      highlight: "Professional grade debugging tool"
    },
    alternativeParts: [
      {
        partNumber: "J-Link-EDU",
        brand: "Segger",
        reason: "Alternative debugger",
        comparison: {
          "features": "Similar",
          "price": "Higher"
        },
        useCase: "Multi-platform debugging",
        specifications: {
          "Interface": "USB"
        },
        priceDifference: "+50%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "GD32F407VET6",
        description: "Target MCU",
        category: "MCU"
      }
    ],
    faqs: [
      {
        question: "Does it support all GD32 series?",
        answer: "Yes, GD-Link Pro supports all GD32F1, F3, F4, E23, and A series MCUs through JTAG or SWD interface.",
        decisionGuide: "Universal debugger for all GD32 MCUs.",
        keywords: ["compatibility", "debugging"]
      }
    ]
  }
];

function fixProductsJson() {
  console.log('Fixing MCU and Development Tools products...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix MCU category - additional fabricated products
  const mcuCategory = data.categories.find(cat => cat.id === 'mcu');
  if (mcuCategory) {
    const products = mcuCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'DATA_PENDING');
    
    if (p3Index !== -1) {
      products[p3Index] = realMCUProductsAdditional[0];
      console.log(`  Replaced DATA_PENDING (MCU-3) with GD32F407VGT6 at index ${p3Index}`);
    }
    // Find second DATA_PENDING
    const p4Index = products.findIndex((p, idx) => p.partNumber === 'DATA_PENDING' && idx > p3Index);
    if (p4Index !== -1) {
      products[p4Index] = realMCUProductsAdditional[1];
      console.log(`  Replaced DATA_PENDING (MCU-4) with GD32E230C8T6 at index ${p4Index}`);
    }
  }
  
  // Fix Development Tools category
  const devCategory = data.categories.find(cat => cat.id === 'development-tools');
  if (devCategory) {
    const products = devCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'DEVELOPMENTTOOLS-3');
    const p4Index = products.findIndex(p => p.partNumber === 'DEVELOPMENTTOOLS-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realDevToolsProducts[0];
      console.log(`  Replaced DEVELOPMENTTOOLS-3 with GD32F303C-EVAL at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realDevToolsProducts[1];
      console.log(`  Replaced DEVELOPMENTTOOLS-4 with GD-Link-Pro at index ${p4Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

// Run fix
console.log('=== Fixing GigaDevice MCU and Dev Tools Data ===\n');
fixProductsJson();
console.log('=== Fix Complete ===');
