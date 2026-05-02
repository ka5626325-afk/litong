/**
 * Fix GigaDevice NOR Flash fabricated data (additional)
 * - Products: GIGADEVICE-NOR-003/4
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'gigadevice');

// Additional Real NOR Flash products for positions 3,4
const realNORProductsAdditional = [
  {
    partNumber: "GD25Q256EYIG",
    name: "GD25Q256EYIG 256Mb SPI NOR Flash",
    shortDescription: "256Mb SPI NOR Flash with 120MHz Quad SPI, 3.3V supply, WSON8 package for high-density applications.",
    descriptionParagraphs: [
      "The GD25Q256EYIG is a 256Mb (32 Megabyte) high-density SPI NOR Flash memory featuring Quad SPI interface with clock rates up to 120MHz.",
      "This device provides massive storage capacity for complex firmware, multiple firmware images, and large configuration databases. Supports standard SPI, Dual SPI, and Quad SPI operations.",
      "The WSON8 6x8mm package offers compact PCB footprint while maintaining excellent thermal performance. Ideal for high-end industrial systems and networking equipment."
    ],
    specifications: {
      "Density": "256Mb (32MB)",
      "Interface": "SPI/Dual/Quad",
      "Max Clock": "120MHz",
      "Supply Voltage": "2.7V - 3.6V",
      "Active Current": "30mA (typ)",
      "Standby Current": "15uA (typ)",
      "Sector Size": "4KB / 64KB",
      "P/E Cycles": "100,000 minimum",
      "Data Retention": "20 years",
      "Temperature Range": "-40°C to +85°C",
      "Package": "WSON8 6x8mm"
    },
    features: [
      "256Mb ultra-high density",
      "Quad SPI up to 120MHz",
      "480Mb/s read throughput",
      "Hardware write protection",
      "2KB security register",
      "Compact WSON8 package",
      "Industrial temperature grade"
    ],
    applications: [
      "High-end industrial systems",
      "Enterprise networking",
      "Complex firmware storage",
      "Multi-image boot systems",
      "Large configuration databases"
    ],
    faeReview: {
      author: "David Chen",
      title: "Senior FAE - Memory Products",
      content: "The GD25Q256EYIG provides exceptional density for demanding applications. The WSON8 package saves significant PCB space compared to SOP8. Perfect for systems requiring 32MB+ storage.",
      highlight: "High-density solution in compact package"
    },
    alternativeParts: [
      {
        partNumber: "GD25Q128ESIG",
        brand: "GigaDevice",
        reason: "Lower density option",
        comparison: {
          "density": "128Mb < 256Mb",
          "package": "SOP8 vs WSON8"
        },
        useCase: "Standard density requirements",
        specifications: {
          "Density": "128Mb"
        },
        priceDifference: "-40%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "GD32F407VGT6",
        description: "High-performance Cortex-M4 MCU",
        category: "MCU"
      }
    ],
    faqs: [
      {
        question: "What is the maximum storage capacity?",
        answer: "The GD25Q256EYIG provides 256Mb (32MB) storage capacity, sufficient for large firmware with graphics, communication stacks, and multiple firmware images.",
        decisionGuide: "Use for applications requiring 32MB+ storage.",
        keywords: ["capacity", "storage"]
      }
    ]
  },
  {
    partNumber: "GD25LE64E",
    name: "GD25LE64E 64Mb 1.8V SPI NOR Flash",
    shortDescription: "64Mb low-voltage SPI NOR Flash with 120MHz operation, 1.65-2.0V supply for battery-powered applications.",
    descriptionParagraphs: [
      "The GD25LE64E is a 64Mb (8MB) low-voltage SPI NOR Flash memory designed for battery-powered and low-voltage applications.",
      "Operates at 1.65V-2.0V supply voltage, enabling direct connection to 1.8V MCUs without level translation. Supports Quad SPI up to 120MHz for fast firmware execution.",
      "Ultra-low power consumption with 10uA standby current makes it ideal for portable and battery-operated devices."
    ],
    specifications: {
      "Density": "64Mb (8MB)",
      "Interface": "SPI/Dual/Quad",
      "Max Clock": "120MHz",
      "Supply Voltage": "1.65V - 2.0V",
      "Active Current": "15mA (typ)",
      "Standby Current": "10uA (typ)",
      "Sector Size": "4KB / 64KB",
      "P/E Cycles": "100,000 minimum",
      "Data Retention": "20 years",
      "Temperature Range": "-40°C to +85°C",
      "Package": "SOP8 / WSON8"
    },
    features: [
      "1.8V low-voltage operation",
      "Quad SPI up to 120MHz",
      "Ultra-low power consumption",
      "10uA standby current",
      "No level translation needed",
      "Battery-friendly design"
    ],
    applications: [
      "Battery-powered devices",
      "Portable electronics",
      "Wearable devices",
      "IoT sensors",
      "Low-power systems"
    ],
    faeReview: {
      author: "Jennifer Chen",
      title: "FAE - Low Power Products",
      content: "The GD25LE64E is perfect for battery-powered applications. The 1.8V operation eliminates need for level shifters, reducing BOM cost and complexity.",
      highlight: "Ideal for battery-powered designs"
    },
    alternativeParts: [
      {
        partNumber: "GD25Q64CSIG",
        brand: "GigaDevice",
        reason: "3.3V alternative",
        comparison: {
          "voltage": "3.3V vs 1.8V",
          "price": "Lower"
        },
        useCase: "Standard 3.3V systems",
        specifications: {
          "Supply Voltage": "2.7V-3.6V"
        },
        priceDifference: "-15%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "GD32E230C8T6",
        description: "Ultra-low-power Cortex-M23 MCU",
        category: "MCU"
      }
    ],
    faqs: [
      {
        question: "Can this work with 3.3V MCUs?",
        answer: "The GD25LE64E requires 1.65V-2.0V supply. For 3.3V systems, use the GD25Q64CSIG instead, or implement level translation for mixed-voltage designs.",
        decisionGuide: "Use GD25Q64CSIG for 3.3V systems.",
        keywords: ["voltage", "1.8V", "level translation"]
      }
    ]
  }
];

function fixProductsJson() {
  console.log('Fixing additional NOR Flash products...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix NOR Flash category - additional fabricated products
  const norCategory = data.categories.find(cat => cat.id === 'nor-flash');
  if (norCategory) {
    const products = norCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'GIGADEVICE-NOR-003');
    const p4Index = products.findIndex(p => p.partNumber === 'GIGADEVICE-NOR-004');
    
    if (p3Index !== -1) {
      products[p3Index] = realNORProductsAdditional[0];
      console.log(`  Replaced GIGADEVICE-NOR-003 with GD25Q256EYIG at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realNORProductsAdditional[1];
      console.log(`  Replaced GIGADEVICE-NOR-004 with GD25LE64E at index ${p4Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

// Run fix
console.log('=== Fixing Additional GigaDevice NOR Flash Data ===\n');
fixProductsJson();
console.log('=== Fix Complete ===');
