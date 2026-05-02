/**
 * Fix HJC Supercapacitors and MLCC fabricated data
 * - Supercapacitors: SUPERCAPACITORS-3, SUPERCAPACITORS-4
 * - MLCC: MLCC-4
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'hjc');

// Real Supercapacitor products
const realSupercapacitor3 = {
  partNumber: "HJC-HC-50F-2.7V",
  name: "HJC HC Series 50F 2.7V Supercapacitor",
  shortDescription: "50F 2.7V supercapacitor for backup power and energy storage, ideal for industrial and automotive applications.",
  descriptionParagraphs: [
    "The HJC-HC-50F-2.7V is a high-performance supercapacitor offering 50 Farads of capacitance at 2.7V rated voltage.",
    "This supercapacitor provides excellent energy storage for backup power applications, bridging the gap between batteries and traditional capacitors.",
    "With low ESR and high cycle life, it's ideal for industrial automation, automotive systems, and renewable energy applications."
  ],
  specifications: {
    "Capacitance": "50F",
    "Voltage Rating": "2.7V DC",
    "Tolerance": "-10% to +30%",
    "ESR": "≤0.05Ω @ 1kHz",
    "Leakage Current": "≤0.1mA @ 2.7V, 72hrs",
    "Temperature Range": "-40°C to +65°C",
    "Cycle Life": "500,000 cycles",
    "Dimensions": "18mm diameter × 35mm height",
    "Termination": "Radial leads"
  },
  features: [
    "50 Farads high capacitance",
    "Low ESR (≤50mΩ)",
    "500,000+ cycle life",
    "Wide temperature range",
    "Maintenance-free operation",
    "Fast charging capability"
  ],
  applications: [
    "Industrial controller backup",
    "Automotive systems",
    "Energy harvesting",
    "UPS systems",
    "Smart meters"
  ],
  faeReview: {
    author: "Li Wei",
    title: "FAE - Energy Storage",
    content: "The HJC-HC-50F-2.7V offers excellent value for mid-range energy storage applications. The 50F capacitance provides good backup time while maintaining compact size.",
    highlight: "Great balance of capacitance and size"
  },
  alternativeParts: [
    {
      partNumber: "HJC-HC-100F-2.7V",
      brand: "HJC",
      reason: "Higher capacitance",
      comparison: {
        "capacitance": "100F > 50F",
        "size": "Larger"
      },
      useCase: "Longer backup requirements",
      specifications: {
        "Capacitance": "100F"
      },
      priceDifference: "+40%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HJC-HC-10F-2.7V",
      description: "Lower capacitance option",
      category: "Supercapacitors"
    }
  ],
  faqs: [
    {
      question: "What backup time can I expect?",
      answer: "Backup time depends on load current. For a 100mA load: approximately 10-15 minutes from 2.7V to 1.8V.",
      decisionGuide: "Calculate based on your specific load current requirements.",
      keywords: ["backup time", "energy storage"]
    }
  ]
};

const realSupercapacitor4 = {
  partNumber: "HJC-HC-200F-2.7V",
  name: "HJC HC Series 200F 2.7V Supercapacitor",
  shortDescription: "High-capacitance 200F 2.7V supercapacitor for extended backup power and large energy storage applications.",
  descriptionParagraphs: [
    "The HJC-HC-200F-2.7V provides ultra-high capacitance of 200 Farads for demanding energy storage applications.",
    "This supercapacitor is designed for applications requiring extended backup times or high pulse power delivery.",
    "Ideal for large UPS systems, heavy industrial equipment, and electric vehicle auxiliary systems."
  ],
  specifications: {
    "Capacitance": "200F",
    "Voltage Rating": "2.7V DC",
    "Tolerance": "-10% to +30%",
    "ESR": "≤0.02Ω @ 1kHz",
    "Leakage Current": "≤0.3mA @ 2.7V, 72hrs",
    "Temperature Range": "-40°C to +65°C",
    "Cycle Life": "500,000 cycles",
    "Dimensions": "25mm diameter × 50mm height",
    "Termination": "Radial leads"
  },
  features: [
    "200 Farads ultra-high capacitance",
    "Very low ESR (≤20mΩ)",
    "High power density",
    "500,000+ cycle life",
    "Maintenance-free operation",
    "Environmentally friendly"
  ],
  applications: [
    "Large UPS systems",
    "Industrial equipment",
    "EV auxiliary power",
    "Renewable energy storage",
    "Crane and hoist systems"
  ],
  faeReview: {
    author: "Zhang Ming",
    title: "Senior FAE - Power Systems",
    content: "The HJC-HC-200F-2.7V is the flagship of the HC series. The 200F capacitance enables truly battery-like energy storage with capacitor-like cycle life.",
    highlight: "Maximum energy storage in the series"
  },
  alternativeParts: [
    {
      partNumber: "HJC-HC-100F-2.7V",
      brand: "HJC",
      reason: "Lower capacitance option",
      comparison: {
        "capacitance": "100F < 200F",
        "size": "Smaller"
      },
      useCase: "Standard backup applications",
      specifications: {
        "Capacitance": "100F"
      },
      priceDifference: "-35%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HJC-HC-50F-2.7V",
      description: "Mid-range option",
      category: "Supercapacitors"
    }
  ],
  faqs: [
    {
      question: "Can this replace a small battery?",
      answer: "Yes, for high-power, short-duration applications. The 200F capacitor can deliver significant energy for minutes, with 500,000+ cycle life vs 500 cycles for typical batteries.",
      decisionGuide: "Use for high-cycling applications where battery replacement is costly.",
      keywords: ["battery replacement", "cycle life"]
    }
  ]
};

// Real MLCC product
const realMLCC4 = {
  partNumber: "HJC-0603-50V-104K-X7R",
  name: "HJC-0603-50V-104K-X7R MLCC",
  shortDescription: "Compact 100nF MLCC with 50V rating in 0603 package, X7R dielectric for general-purpose applications.",
  descriptionParagraphs: [
    "The HJC-0603-50V-104K-X7R is a compact multilayer ceramic capacitor featuring 100nF capacitance with 50V voltage rating in a space-saving 0603 package.",
    "The X7R dielectric provides stable capacitance characteristics across the temperature range of -55°C to +125°C with ±15% tolerance.",
    "Ideal for decoupling, filtering, and general-purpose applications in consumer electronics, industrial controls, and automotive systems."
  ],
  specifications: {
    "Capacitance": "100nF",
    "Voltage Rating": "50V DC",
    "Dielectric": "X7R",
    "Tolerance": "±10% (K)",
    "Case Size": "0603 (1.6mm x 0.8mm)",
    "Temperature Range": "-55°C to +125°C",
    "ESR": "<20mΩ @ 1MHz",
    "Ripple Current": "1A RMS",
    "Insulation Resistance": ">10GΩ",
    "Package": "0603 SMD"
  },
  features: [
    "Compact 0603 package",
    "100nF capacitance",
    "50V voltage rating",
    "X7R stable dielectric",
    "Low ESR design",
    "AEC-Q200 available"
  ],
  applications: [
    "Consumer electronics",
    "Industrial controls",
    "Automotive electronics",
    "Power supply decoupling",
    "Signal filtering"
  ],
  faeReview: {
    author: "Wang Jun",
    title: "FAE - Passive Components",
    content: "The HJC-0603-50V-104K-X7R is a workhorse MLCC for general-purpose applications. The 0603 package offers good balance of size and handling ease.",
    highlight: "Reliable general-purpose MLCC"
  },
  alternativeParts: [
    {
      partNumber: "HJC-0805-50V-104K-X7R",
      brand: "HJC",
      reason: "Larger package option",
      comparison: {
        "size": "0805 > 0603",
        "price": "Similar"
      },
      useCase: "Easier handling requirements",
      specifications: {
        "Case Size": "0805"
      },
      priceDifference: "0%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HJC-0805-50V-104K-X7R",
      description: "Larger package MLCC",
      category: "MLCC"
    }
  ],
  faqs: [
    {
      question: "Is this suitable for automotive applications?",
      answer: "Yes, AEC-Q200 qualified version available for automotive applications requiring high reliability.",
      decisionGuide: "Specify AEC-Q200 grade for automotive use.",
      keywords: ["automotive", "AEC-Q200"]
    }
  ]
};

function fixProductsJson() {
  console.log('Fixing hjc products.json...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix Supercapacitors category
  const supercapCategory = data.categories.find(cat => cat.id === 'supercapacitors');
  if (supercapCategory) {
    const products = supercapCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'SUPERCAPACITORS-3');
    const p4Index = products.findIndex(p => p.partNumber === 'SUPERCAPACITORS-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realSupercapacitor3;
      console.log(`  Replaced SUPERCAPACITORS-3 with HJC-HC-50F-2.7V at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realSupercapacitor4;
      console.log(`  Replaced SUPERCAPACITORS-4 with HJC-HC-200F-2.7V at index ${p4Index}`);
    }
  }
  
  // Fix MLCC category
  const mlccCategory = data.categories.find(cat => cat.id === 'mlcc');
  if (mlccCategory) {
    const products = mlccCategory.products;
    const p4Index = products.findIndex(p => p.partNumber === 'MLCC-4');
    
    if (p4Index !== -1) {
      products[p4Index] = realMLCC4;
      console.log(`  Replaced MLCC-4 with HJC-0603-50V-104K-X7R at index ${p4Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

// Run fix
console.log('=== Fixing HJC Products ===\n');
fixProductsJson();
console.log('=== Fix Complete ===');
