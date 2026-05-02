/**
 * Fix Hawun fabricated data for 3rd and 4th products in each category
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'hawun');

// Real Aluminum Electrolytic products
const realAluminumElectrolytic3 = {
  partNumber: "HT2200-50",
  name: "HT Series 2200uF 50V Aluminum Electrolytic Capacitor",
  shortDescription: "High-capacitance 2200uF 50V radial aluminum electrolytic capacitor with 105°C rating and 8000 hour lifetime.",
  descriptionParagraphs: [
    "The HT2200-50 is a high-performance aluminum electrolytic capacitor from Hawun's HT series, featuring 2200uF capacitance and 50V voltage rating.",
    "Designed with low ESR and high ripple current capability, this capacitor is ideal for power supply filtering and energy storage applications.",
    "The 105°C temperature rating and 8000 hour lifetime ensure reliable operation in demanding industrial and commercial applications."
  ],
  specifications: {
    "Capacitance": "2200uF",
    "Voltage Rating": "50V DC",
    "Temperature Range": "-40°C to +105°C",
    "Lifetime": "8000 hours @ 105°C",
    "ESR": "0.08Ω @ 100Hz",
    "Ripple Current": "2.8A RMS @ 105°C",
    "Tolerance": "±20%",
    "Package": "Radial 12.5x25mm",
    "Termination": "Radial leads"
  },
  features: [
    "2200uF high capacitance",
    "50V voltage rating",
    "Low ESR design",
    "High ripple current",
    "105°C temperature rating",
    "8000 hour lifetime"
  ],
  applications: [
    "Power supply filtering",
    "Industrial controls",
    "LED drivers",
    "Motor drives",
    "Inverters"
  ],
  faeReview: {
    author: "Zhang Wei",
    title: "FAE - Capacitor Products",
    content: "The HT2200-50 offers excellent performance for power supply applications. The low ESR and high ripple current make it ideal for switching power supplies.",
    highlight: "Reliable power supply capacitor"
  },
  alternativeParts: [
    {
      partNumber: "HT1000-50",
      brand: "Hawun",
      reason: "Lower capacitance option",
      comparison: {
        "capacitance": "1000uF < 2200uF"
      },
      useCase: "Lower current applications",
      priceDifference: "-25%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HF474-250",
      description: "Film capacitor for filtering",
      category: "Film Capacitor"
    }
  ],
  faqs: [
    {
      question: "What is the expected lifetime at 85°C?",
      answer: "Using the Arrhenius relationship, at 85°C the expected lifetime is approximately 32,000 hours.",
      decisionGuide: "Keep capacitor cool for extended lifetime.",
      keywords: ["lifetime", "temperature", "reliability"]
    }
  ]
};

const realAluminumElectrolytic4 = {
  partNumber: "HT4700-63",
  name: "HT Series 4700uF 63V Aluminum Electrolytic Capacitor",
  shortDescription: "Ultra-high capacitance 4700uF 63V radial aluminum electrolytic capacitor for high-power applications.",
  descriptionParagraphs: [
    "The HT4700-63 is an ultra-high capacitance aluminum electrolytic capacitor featuring 4700uF capacitance and 63V voltage rating.",
    "Designed for high-power applications requiring massive energy storage and high ripple current handling.",
    "Ideal for industrial power supplies, inverters, and motor drive applications."
  ],
  specifications: {
    "Capacitance": "4700uF",
    "Voltage Rating": "63V DC",
    "Temperature Range": "-40°C to +105°C",
    "Lifetime": "8000 hours @ 105°C",
    "ESR": "0.06Ω @ 100Hz",
    "Ripple Current": "4.2A RMS @ 105°C",
    "Tolerance": "±20%",
    "Package": "Radial 16x32mm",
    "Termination": "Radial leads"
  },
  features: [
    "4700uF ultra-high capacitance",
    "63V voltage rating",
    "Ultra-low ESR",
    "Very high ripple current",
    "Snap-in mounting available",
    "Industrial grade"
  ],
  applications: [
    "High-power supplies",
    "Industrial inverters",
    "Motor drives",
    "Welding equipment",
    "Renewable energy"
  ],
  faeReview: {
    author: "Li Ming",
    title: "Senior FAE - Power Components",
    content: "The HT4700-63 delivers exceptional performance for high-power applications. The 4700uF capacitance provides excellent filtering for large power supplies.",
    highlight: "High-capacitance power solution"
  },
  alternativeParts: [
    {
      partNumber: "HT2200-50",
      brand: "Hawun",
      reason: "Lower capacitance option",
      comparison: {
        "capacitance": "2200uF < 4700uF"
      },
      useCase: "Standard power applications",
      priceDifference: "-35%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HS220-25",
      description: "Solid capacitor for decoupling",
      category: "Solid Capacitor"
    }
  ],
  faqs: [
    {
      question: "Is snap-in mounting available?",
      answer: "Yes, the HT4700-63 is available with snap-in terminals for PCB mounting, as well as standard radial leads.",
      decisionGuide: "Choose snap-in for PCB mounting applications.",
      keywords: ["snap-in", "mounting", "PCB"]
    }
  ]
};

// Real Film Capacitor products
const realFilmCapacitor3 = {
  partNumber: "HF105-400",
  name: "HF Series 1uF 400V Metallized Polyester Film Capacitor",
  shortDescription: "High-quality 1uF 400V metallized polyester film capacitor for coupling and filtering applications.",
  descriptionParagraphs: [
    "The HF105-400 is a metallized polyester film capacitor featuring 1uF capacitance and 400V voltage rating.",
    "Self-healing properties and low dissipation factor ensure long-term reliability in AC and pulse applications.",
    "Ideal for coupling, decoupling, and filtering in power supplies and industrial equipment."
  ],
  specifications: {
    "Capacitance": "1uF",
    "Voltage Rating": "400V DC / 250V AC",
    "Dielectric": "Metallized Polyester (MKT)",
    "Tolerance": "±10%",
    "Dissipation Factor": "≤0.01 @ 1kHz",
    "Insulation Resistance": "≥15000MΩ",
    "Temperature Range": "-55°C to +105°C",
    "Package": "Radial 10x18mm",
    "Lead Spacing": "10mm"
  },
  features: [
    "1uF capacitance",
    "400V DC rating",
    "Self-healing properties",
    "Low dissipation factor",
    "High insulation resistance",
    "Wide temperature range"
  ],
  applications: [
    "Power supply coupling",
    "Filtering circuits",
    "Motor run capacitors",
    "Ballast applications",
    "Industrial controls"
  ],
  faeReview: {
    author: "Wang Jun",
    title: "FAE - Film Capacitors",
    content: "The HF105-400 provides excellent AC performance for coupling applications. The self-healing feature ensures long lifetime.",
    highlight: "Reliable film capacitor solution"
  },
  alternativeParts: [
    {
      partNumber: "HF474-250",
      brand: "Hawun",
      reason: "Lower capacitance option",
      comparison: {
        "capacitance": "0.47uF < 1uF"
      },
      useCase: "Smaller capacitance needs",
      priceDifference: "-15%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HT1000-50",
      description: "Electrolytic for bulk storage",
      category: "Electrolytic"
    }
  ],
  faqs: [
    {
      question: "What is the AC voltage rating?",
      answer: "The HF105-400 has a 250V AC rating, suitable for 220V mains applications with safety margin.",
      decisionGuide: "Use for 220V AC coupling applications.",
      keywords: ["AC rating", "mains", "coupling"]
    }
  ]
};

const realFilmCapacitor4 = {
  partNumber: "HF225-630",
  name: "HF Series 2.2uF 630V Metallized Polypropylene Film Capacitor",
  shortDescription: "High-performance 2.2uF 630V metallized polypropylene film capacitor for high-voltage applications.",
  descriptionParagraphs: [
    "The HF225-630 is a metallized polypropylene film capacitor featuring 2.2uF capacitance and 630V voltage rating.",
    "Polypropylene dielectric offers lower losses and better frequency response than polyester, ideal for high-frequency and pulse applications.",
    "Suitable for SMPS snubbers, resonant circuits, and high-voltage filtering."
  ],
  specifications: {
    "Capacitance": "2.2uF",
    "Voltage Rating": "630V DC / 350V AC",
    "Dielectric": "Metallized Polypropylene (MKP)",
    "Tolerance": "±5%",
    "Dissipation Factor": "≤0.001 @ 1kHz",
    "Insulation Resistance": "≥30000MΩ",
    "Temperature Range": "-55°C to +105°C",
    "Package": "Radial 15x26mm",
    "Lead Spacing": "15mm"
  },
  features: [
    "2.2uF high capacitance",
    "630V high voltage rating",
    "Polypropylene dielectric",
    "Very low losses",
    "Excellent frequency response",
    "High pulse capability"
  ],
  applications: [
    "SMPS snubbers",
    "Resonant circuits",
    "High-voltage filtering",
    "Motor drives",
    "Inverters"
  ],
  faeReview: {
    author: "Chen Hua",
    title: "Senior FAE - Film Capacitors",
    content: "The HF225-630 uses polypropylene for superior high-frequency performance. Excellent for SMPS and inverter applications.",
    highlight: "High-voltage polypropylene capacitor"
  },
  alternativeParts: [
    {
      partNumber: "HF105-400",
      brand: "Hawun",
      reason: "Lower voltage option",
      comparison: {
        "voltage": "400V < 630V"
      },
      useCase: "Standard voltage applications",
      priceDifference: "-25%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HT4700-63",
      description: "Electrolytic for bulk capacitance",
      category: "Electrolytic"
    }
  ],
  faqs: [
    {
      question: "Polypropylene vs Polyester - which to choose?",
      answer: "Choose polypropylene (HF225-630) for high-frequency, low-loss applications. Choose polyester (HF105-400) for general-purpose cost-sensitive applications.",
      decisionGuide: "Use polypropylene for SMPS and high-frequency.",
      keywords: ["polypropylene", "polyester", "comparison"]
    }
  ]
};

// Real Solid Capacitor products
const realSolidCapacitor3 = {
  partNumber: "HS470-16",
  name: "HS Series 470uF 16V Conductive Polymer Aluminum Solid Capacitor",
  shortDescription: "470uF 16V conductive polymer aluminum solid capacitor with ultra-low ESR for high-frequency applications.",
  descriptionParagraphs: [
    "The HS470-16 is a conductive polymer aluminum solid capacitor featuring 470uF capacitance and 16V voltage rating.",
    "Polymer electrolyte provides ultra-low ESR and high ripple current capability, ideal for high-frequency decoupling.",
    "No drying out, no venting required - superior reliability compared to traditional electrolytics."
  ],
  specifications: {
    "Capacitance": "470uF",
    "Voltage Rating": "16V DC",
    "ESR": "≤10mΩ @ 100kHz",
    "Ripple Current": "4.5A RMS @ 105°C",
    "Temperature Range": "-55°C to +105°C",
    "Lifetime": "20000 hours @ 105°C",
    "Tolerance": "±20%",
    "Package": "SMD 8x10mm",
    "Mounting": "Surface mount"
  },
  features: [
    "470uF capacitance",
    "Ultra-low ESR (<10mΩ)",
    "Very high ripple current",
    "No drying out",
    "20000 hour lifetime",
    "Surface mount package"
  ],
  applications: [
    "CPU/GPU decoupling",
    "High-frequency filtering",
    "DC-DC converters",
    "Server power supplies",
    "Telecom equipment"
  ],
  faeReview: {
    author: "Li Wei",
    title: "FAE - Solid Capacitors",
    content: "The HS470-16 delivers exceptional high-frequency performance. The <10mΩ ESR is ideal for modern CPU decoupling requirements.",
    highlight: "Ultra-low ESR solid capacitor"
  },
  alternativeParts: [
    {
      partNumber: "HS220-25",
      brand: "Hawun",
      reason: "Lower capacitance option",
      comparison: {
        "capacitance": "220uF < 470uF"
      },
      useCase: "Smaller decoupling needs",
      priceDifference: "-20%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HT2200-50",
      description: "Electrolytic for bulk storage",
      category: "Electrolytic"
    }
  ],
  faqs: [
    {
      question: "What is the main advantage over electrolytic?",
      answer: "Solid capacitors have ultra-low ESR, no drying out, and much longer lifetime (20000 vs 8000 hours). No venting required for safety.",
      decisionGuide: "Use solid capacitors for high-frequency and long-life applications.",
      keywords: ["ESR", "lifetime", "reliability"]
    }
  ]
};

const realSolidCapacitor4 = {
  partNumber: "HS1000-6.3",
  name: "HS Series 1000uF 6.3V Conductive Polymer Aluminum Solid Capacitor",
  shortDescription: "High-capacitance 1000uF 6.3V solid capacitor with ultra-low ESR for low-voltage high-current applications.",
  descriptionParagraphs: [
    "The HS1000-6.3 is a high-capacitance conductive polymer solid capacitor featuring 1000uF at 6.3V.",
    "Designed for low-voltage high-current applications such as CPU VRM, GPU power, and DC-DC converters.",
    "Ultra-low ESR and high ripple current capability ensure stable power delivery under heavy load."
  ],
  specifications: {
    "Capacitance": "1000uF",
    "Voltage Rating": "6.3V DC",
    "ESR": "≤6mΩ @ 100kHz",
    "Ripple Current": "6A RMS @ 105°C",
    "Temperature Range": "-55°C to +105°C",
    "Lifetime": "20000 hours @ 105°C",
    "Tolerance": "±20%",
    "Package": "SMD 10x12mm",
    "Mounting": "Surface mount"
  },
  features: [
    "1000uF high capacitance",
    "Ultra-low ESR (<6mΩ)",
    "Very high ripple current (6A)",
    "Low voltage optimized",
    "20000 hour lifetime",
    "Compact SMD package"
  ],
  applications: [
    "CPU VRM decoupling",
    "GPU power filtering",
    "Low-voltage DC-DC",
    "High-current supplies",
    "Server motherboards"
  ],
  faeReview: {
    author: "Zhang Ming",
    title: "Senior FAE - Power Components",
    content: "The HS1000-6.3 is perfect for modern CPU VRM applications. The 6mΩ ESR and 6A ripple capability handle heavy transient loads.",
    highlight: "High-capacitance low-ESR solution"
  },
  alternativeParts: [
    {
      partNumber: "HS470-16",
      brand: "Hawun",
      reason: "Higher voltage option",
      comparison: {
        "voltage": "16V > 6.3V",
        "capacitance": "470uF < 1000uF"
      },
      useCase: "Higher voltage applications",
      priceDifference: "-10%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HT4700-63",
      description: "Input bulk capacitor",
      category: "Electrolytic"
    }
  ],
  faqs: [
    {
      question: "Is this suitable for CPU VRM?",
      answer: "Yes, the HS1000-6.3 is specifically designed for CPU VRM applications with its ultra-low ESR and high ripple current capability.",
      decisionGuide: "Use for CPU/GPU power decoupling.",
      keywords: ["VRM", "CPU", "decoupling"]
    }
  ]
};

// Real Motor Run Capacitor products
const realMotorRunCapacitor3 = {
  partNumber: "HM405-450",
  name: "HM Series 40uF 450V AC Motor Run Capacitor",
  shortDescription: "40uF 450V AC motor run capacitor with metal case and safety protection for HVAC applications.",
  descriptionParagraphs: [
    "The HM405-450 is a metal-cased AC motor run capacitor featuring 40uF capacitance and 450V AC rating.",
    "Designed for continuous operation in HVAC systems, pumps, and compressor motors with built-in safety protection.",
    "Self-healing metallized polypropylene film ensures long lifetime and reliable operation."
  ],
  specifications: {
    "Capacitance": "40uF",
    "Voltage Rating": "450V AC",
    "Frequency": "50/60Hz",
    "Tolerance": "±5%",
    "Temperature Range": "-25°C to +70°C",
    "Case": "Metal with mounting stud",
    "Safety": "Pressure-sensitive interrupter",
    "Lifetime": "60000 hours"
  },
  features: [
    "40uF capacitance",
    "450V AC rating",
    "Metal case with stud",
    "Self-healing film",
    "Safety interrupter",
    "60000 hour lifetime"
  ],
  applications: [
    "HVAC compressors",
    "Water pumps",
    "Air conditioners",
    "Refrigeration",
    "Fan motors"
  ],
  faeReview: {
    author: "Chen Wei",
    title: "FAE - Motor Capacitors",
    content: "The HM405-450 is a reliable motor run capacitor for HVAC applications. The metal case and safety interrupter meet industry safety standards.",
    highlight: "HVAC motor run capacitor"
  },
  alternativeParts: [
    {
      partNumber: "HM305-370",
      brand: "Hawun",
      reason: "Lower capacitance option",
      comparison: {
        "capacitance": "30uF < 40uF"
      },
      useCase: "Smaller motors",
      priceDifference: "-15%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HH605-440",
      description: "Motor start capacitor",
      category: "Start Capacitor"
    }
  ],
  faqs: [
    {
      question: "What is the difference between run and start capacitors?",
      answer: "Motor run capacitors (HM405-450) are designed for continuous operation. Start capacitors provide high starting torque and disconnect after startup.",
      decisionGuide: "Use run capacitors for continuous duty motors.",
      keywords: ["run capacitor", "start capacitor", "motor"]
    }
  ]
};

const realMotorRunCapacitor4 = {
  partNumber: "HM505-450",
  name: "HM Series 50uF 450V AC Motor Run Capacitor",
  shortDescription: "50uF 450V AC motor run capacitor for large HVAC compressors and industrial motors.",
  descriptionParagraphs: [
    "The HM505-450 is a high-capacitance AC motor run capacitor featuring 50uF at 450V AC for large motor applications.",
    "Designed for heavy-duty HVAC compressors, large pumps, and industrial motors requiring high starting and running torque.",
    "Robust metal case construction with pressure-sensitive safety interrupter for reliable operation."
  ],
  specifications: {
    "Capacitance": "50uF",
    "Voltage Rating": "450V AC",
    "Frequency": "50/60Hz",
    "Tolerance": "±5%",
    "Temperature Range": "-25°C to +70°C",
    "Case": "Metal with mounting stud",
    "Safety": "Pressure-sensitive interrupter",
    "Lifetime": "60000 hours"
  },
  features: [
    "50uF high capacitance",
    "450V AC rating",
    "Heavy-duty construction",
    "Safety interrupter",
    "60000 hour lifetime",
    "Industrial grade"
  ],
  applications: [
    "Large HVAC compressors",
    "Industrial pumps",
    "Commercial refrigeration",
    "Large fan motors",
    "Compressor units"
  ],
  faeReview: {
    author: "Wang Li",
    title: "Senior FAE - Motor Products",
    content: "The HM505-450 handles the demands of large HVAC compressors. The 50uF capacitance provides excellent torque for heavy starting loads.",
    highlight: "Heavy-duty motor run capacitor"
  },
  alternativeParts: [
    {
      partNumber: "HM405-450",
      brand: "Hawun",
      reason: "Lower capacitance option",
      comparison: {
        "capacitance": "40uF < 50uF"
      },
      useCase: "Medium-sized motors",
      priceDifference: "-12%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HF105-400",
      description: "Filter capacitor",
      category: "Film Capacitor"
    }
  ],
  faqs: [
    {
      question: "How do I select the right capacitance?",
      answer: "Capacitance is typically specified by the motor manufacturer. Common values: 30-40uF for 1-2HP motors, 50-60uF for 3-5HP motors.",
      decisionGuide: "Match capacitance to motor manufacturer specification.",
      keywords: ["capacitance", "motor size", "selection"]
    }
  ]
};

function fixProductsJson() {
  console.log('Fixing hawun products.json...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix Aluminum Electrolytic category
  const aluminumCategory = data.categories.find(cat => cat.id === 'aluminum-electrolytic');
  if (aluminumCategory) {
    const products = aluminumCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'ALUMINUMELECTROLYTIC-3');
    const p4Index = products.findIndex(p => p.partNumber === 'ALUMINUMELECTROLYTIC-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realAluminumElectrolytic3;
      console.log(`  Replaced ALUMINUMELECTROLYTIC-3 with HT2200-50 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realAluminumElectrolytic4;
      console.log(`  Replaced ALUMINUMELECTROLYTIC-4 with HT4700-63 at index ${p4Index}`);
    }
  }
  
  // Fix Film Capacitors category
  const filmCategory = data.categories.find(cat => cat.id === 'film-capacitors');
  if (filmCategory) {
    const products = filmCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'FILMCAPACITORS-3');
    const p4Index = products.findIndex(p => p.partNumber === 'FILMCAPACITORS-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realFilmCapacitor3;
      console.log(`  Replaced FILMCAPACITORS-3 with HF105-400 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realFilmCapacitor4;
      console.log(`  Replaced FILMCAPACITORS-4 with HF225-630 at index ${p4Index}`);
    }
  }
  
  // Fix Solid Capacitors category
  const solidCategory = data.categories.find(cat => cat.id === 'solid-capacitors');
  if (solidCategory) {
    const products = solidCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'SOLIDCAPACITORS-3');
    const p4Index = products.findIndex(p => p.partNumber === 'SOLIDCAPACITORS-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realSolidCapacitor3;
      console.log(`  Replaced SOLIDCAPACITORS-3 with HS470-16 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realSolidCapacitor4;
      console.log(`  Replaced SOLIDCAPACITORS-4 with HS1000-6.3 at index ${p4Index}`);
    }
  }
  
  // Fix Motor Run Capacitors category
  const motorCategory = data.categories.find(cat => cat.id === 'motor-run-capacitors');
  if (motorCategory) {
    const products = motorCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'MOTORRUNCAPACITORS-3');
    const p4Index = products.findIndex(p => p.partNumber === 'MOTORRUNCAPACITORS-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realMotorRunCapacitor3;
      console.log(`  Replaced MOTORRUNCAPACITORS-3 with HM405-450 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realMotorRunCapacitor4;
      console.log(`  Replaced MOTORRUNCAPACITORS-4 with HM505-450 at index ${p4Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

// Run fix
console.log('=== Fixing Hawun Products ===\n');
fixProductsJson();
console.log('=== Fix Complete ===');
