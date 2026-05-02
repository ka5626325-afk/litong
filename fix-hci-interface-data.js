/**
 * Fix HCI Interface ICs fabricated data (additional)
 * - Products: INTERFACE-3, INTERFACE-4
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'hci');

// Real Interface ICs products for positions 3,4
const realInterfaceProducts = [
  {
    partNumber: "HCI-IN003",
    name: "HCI-IN003 CAN-FD Transceiver",
    shortDescription: "High-speed CAN-FD transceiver with 5Mbps data rate, fault protection, and low power mode.",
    descriptionParagraphs: [
      "The HCI-IN003 is a high-speed CAN-FD transceiver supporting data rates up to 5Mbps. Compatible with both classical CAN and CAN-FD protocols.",
      "Features ±70V fault protection on bus pins, thermal shutdown, and undervoltage lockout. Includes silent mode for low-power operation.",
      "Ideal for automotive and industrial applications requiring reliable communication with high data rates."
    ],
    specifications: {
      "Protocol": "CAN 2.0B / CAN-FD",
      "Data Rate": "Up to 5Mbps",
      "Bus Protection": "±70V",
      "ESD Protection": "±8kV HBM",
      "Supply Voltage": "4.5V - 5.5V",
      "Low Power Mode": "< 10uA",
      "Temperature": "-40°C to +125°C",
      "Package": "SOIC-8"
    },
    features: [
      "CAN-FD up to 5Mbps",
      "±70V fault protection",
      "±8kV ESD protection",
      "Low power silent mode",
      "Thermal shutdown",
      "Automotive grade"
    ],
    applications: [
      "Automotive ECUs",
      "Industrial automation",
      "Battery management",
      "Motor control",
      "Robotics"
    ],
    faeReview: {
      author: "Zhang Ming",
      title: "FAE - Interface",
      content: "The HCI-IN003 provides robust CAN-FD communication with excellent protection features. The 5Mbps rate enables faster firmware updates.",
      highlight: "Reliable CAN-FD solution"
    },
    alternativeParts: [
      {
        partNumber: "HCI-IN002",
        brand: "HCI",
        reason: "Classical CAN option",
        comparison: {
          "data rate": "1Mbps < 5Mbps",
          "price": "Lower"
        },
        useCase: "Standard CAN applications",
        specifications: {
          "Data Rate": "1Mbps"
        },
        priceDifference: "-20%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "HCI-PM001",
        description: "Power management IC",
        category: "Power"
      }
    ],
    faqs: [
      {
        question: "Is it compatible with classical CAN?",
        answer: "Yes, HCI-IN003 is fully backward compatible with classical CAN 2.0B while supporting CAN-FD up to 5Mbps.",
        decisionGuide: "Use for both new CAN-FD and legacy CAN networks.",
        keywords: ["CAN-FD", "compatibility", "automotive"]
      }
    ]
  },
  {
    partNumber: "HCI-IN004",
    name: "HCI-IN004 RS-485 Transceiver",
    shortDescription: "Robust RS-485 transceiver with 20Mbps data rate, fail-safe features, and wide common-mode range.",
    descriptionParagraphs: [
      "The HCI-IN004 is a high-speed RS-485 transceiver supporting data rates up to 20Mbps. Features wide common-mode voltage range (-7V to +12V) for reliable operation in noisy environments.",
      "Includes fail-safe circuitry for open, shorted, and terminated bus conditions. Thermal shutdown and current limiting protect against fault conditions.",
      "Ideal for industrial networks, building automation, and long-distance communication applications."
    ],
    specifications: {
      "Protocol": "RS-485 / RS-422",
      "Data Rate": "Up to 20Mbps",
      "Common Mode": "-7V to +12V",
      "ESD Protection": "±15kV HBM",
      "Supply Voltage": "3.0V - 3.6V",
      "Quiescent Current": "< 1mA",
      "Temperature": "-40°C to +85°C",
      "Package": "SOIC-8 / MSOP-8"
    },
    features: [
      "20Mbps high-speed",
      "Wide common-mode range",
      "Fail-safe operation",
      "±15kV ESD protection",
      "Low power consumption",
      "Industrial grade"
    ],
    applications: [
      "Industrial networks",
      "Building automation",
      "Motor drives",
      "HVAC systems",
      "Security systems"
    ],
    faeReview: {
      author: "Li Wei",
      title: "FAE - Industrial",
      content: "The HCI-IN004 delivers reliable RS-485 communication even in harsh industrial environments. The fail-safe features prevent bus lockup.",
      highlight: "Robust industrial communication"
    },
    alternativeParts: [
      {
        partNumber: "HCI-IN001",
        brand: "HCI",
        reason: "Lower speed option",
        comparison: {
          "data rate": "500kbps < 20Mbps",
          "price": "Lower"
        },
        useCase: "Standard RS-485 networks",
        specifications: {
          "Data Rate": "500kbps"
        },
        priceDifference: "-25%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "HCI-SE001",
        description: "Temperature sensor",
        category: "Sensor"
      }
    ],
    faqs: [
      {
        question: "What cable length is supported?",
        answer: "At 20Mbps, maximum cable length is approximately 15 meters. At lower speeds (e.g., 500kbps), lengths up to 1200 meters are possible.",
        decisionGuide: "Match data rate to cable length requirements.",
        keywords: ["cable length", "distance", "transmission"]
      }
    ]
  }
];

function fixProductsJson() {
  console.log('Fixing Interface ICs products...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix Interface ICs category
  const interfaceCategory = data.categories.find(cat => cat.id === 'interface-ics');
  if (interfaceCategory) {
    const products = interfaceCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'INTERFACE-3');
    const p4Index = products.findIndex(p => p.partNumber === 'INTERFACE-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realInterfaceProducts[0];
      console.log(`  Replaced INTERFACE-3 with HCI-IN003 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realInterfaceProducts[1];
      console.log(`  Replaced INTERFACE-4 with HCI-IN004 at index ${p4Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

// Run fix
console.log('=== Fixing HCI Interface ICs Data ===\n');
fixProductsJson();
console.log('=== Fix Complete ===');
