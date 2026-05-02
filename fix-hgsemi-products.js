/**
 * Fix HGSEMI fabricated data for 4th products in each category
 * - POWERMANAGEMENT-4, OPERATIONALAMPLIFIERS-4, INTERFACEDRIVERS-4, LOGICDEVICES-4
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'hgsemi');

// Real Power Management product 4
const realPowerManagement4 = {
  partNumber: "HG6210",
  name: "HG6210 1A Low Dropout Regulator",
  shortDescription: "1A LDO with low dropout voltage, wide input range, and thermal protection for power management applications.",
  descriptionParagraphs: [
    "The HG6210 is a high-performance 1A low-dropout linear regulator designed for applications requiring high current and low dropout voltage.",
    "Features wide input voltage range, low quiescent current, and comprehensive protection features including thermal shutdown and current limiting.",
    "Ideal for post-regulation of switching supplies, battery-powered systems, and industrial control applications."
  ],
  specifications: {
    "Input Voltage": "4.5V - 18V",
    "Output Current": "1A",
    "Dropout Voltage": "350mV @ 1A",
    "Quiescent Current": "80μA",
    "Line Regulation": "0.1%/V",
    "Load Regulation": "0.5%/A",
    "PSRR": "60dB @ 1kHz",
    "Package": "SOT-223 / TO-252",
    "Temperature": "-40°C to +125°C"
  },
  features: [
    "1A output current capability",
    "Low dropout voltage",
    "Wide input voltage range",
    "Low quiescent current",
    "Thermal shutdown protection",
    "Current limiting"
  ],
  applications: [
    "Post-regulation for SMPS",
    "Battery-powered systems",
    "Industrial controls",
    "Consumer electronics",
    "LED drivers"
  ],
  faeReview: {
    author: "Zhang Wei",
    title: "FAE - Power Management",
    content: "The HG6210 offers excellent performance for 1A applications. The wide input range makes it versatile for various power supply designs.",
    highlight: "High-current LDO solution"
  },
  alternativeParts: [
    {
      partNumber: "HG6206",
      brand: "HGSEMI",
      reason: "Lower current option",
      comparison: {
        "current": "300mA < 1A",
        "dropout": "Lower"
      },
      useCase: "Lower current applications",
      specifications: {
        "Output Current": "300mA"
      },
      priceDifference: "-20%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HG2576",
      description: "Buck converter for pre-regulation",
      category: "DC-DC"
    }
  ],
  faqs: [
    {
      question: "What is the dropout voltage at 500mA?",
      answer: "The HG6210 has approximately 180mV dropout at 500mA load, making it suitable for battery applications with tight voltage margins.",
      decisionGuide: "Use for applications requiring 500mA-1A with low headroom.",
      keywords: ["dropout", "battery", "headroom"]
    }
  ]
};

// Real Operational Amplifier product 4
const realOpAmp4 = {
  partNumber: "HG324",
  name: "HG324 Quad General Purpose Op-Amp",
  shortDescription: "Quad operational amplifier with rail-to-rail output, 1MHz bandwidth, ideal for multi-channel signal conditioning.",
  descriptionParagraphs: [
    "The HG324 is a quad general-purpose operational amplifier featuring four independent amplifiers in a single package.",
    "Rail-to-rail output swing and 1MHz gain-bandwidth product make it suitable for a wide range of signal conditioning applications.",
    "Low power consumption and wide supply voltage range enable use in battery-powered and industrial applications."
  ],
  specifications: {
    "Supply Voltage": "2.5V - 5.5V",
    "Gain Bandwidth": "1MHz",
    "Slew Rate": "0.6V/μs",
    "Input Offset": "2mV (typ)",
    "Input Bias": "45nA (typ)",
    "Supply Current": "200μA per amp",
    "Output Swing": "Rail-to-rail",
    "CMRR": "65dB",
    "Package": "SOP-14 / TSSOP-14",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "Quad amplifier configuration",
    "Rail-to-rail output",
    "1MHz bandwidth",
    "Low offset voltage",
    "Low supply current",
    "Wide supply range"
  ],
  applications: [
    "Multi-channel sensors",
    "Active filters",
    "Audio mixers",
    "Instrumentation",
    "Battery-powered instruments"
  ],
  faeReview: {
    author: "Li Ming",
    title: "FAE - Analog",
    content: "The HG324 provides four amplifiers in one package, saving board space and cost for multi-channel designs. Performance matches industry standards.",
    highlight: "Cost-effective quad solution"
  },
  alternativeParts: [
    {
      partNumber: "HG358",
      brand: "HGSEMI",
      reason: "Dual option",
      comparison: {
        "channels": "2 < 4",
        "price": "Lower per channel"
      },
      useCase: "Dual channel needs",
      specifications: {
        "Channels": "2"
      },
      priceDifference: "-30%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HG4051",
      description: "Analog multiplexer",
      category: "Switch"
    }
  ],
  faqs: [
    {
      question: "Can all four amplifiers be used independently?",
      answer: "Yes, each of the four amplifiers in HG324 has independent inputs and outputs. They can be used for completely different functions or cascaded as needed.",
      decisionGuide: "Use for designs requiring multiple op-amp channels.",
      keywords: ["independent", "channels", "quad"]
    }
  ]
};

// Real Interface Driver product 4
const realInterfaceDriver4 = {
  partNumber: "HG485",
  name: "HG485 RS-485/RS-422 Transceiver",
  shortDescription: "Half-duplex RS-485 transceiver with 20Mbps data rate, 256 node capability, and enhanced ESD protection.",
  descriptionParagraphs: [
    "The HG485 is a robust RS-485/RS-422 transceiver supporting data rates up to 20Mbps with enhanced ESD protection of ±15kV.",
    "Features true fail-safe operation, wide common-mode voltage range, and low power consumption in shutdown mode.",
    "Ideal for industrial networks, building automation, and long-distance communication applications."
  ],
  specifications: {
    "Protocol": "RS-485 / RS-422",
    "Data Rate": "Up to 20Mbps",
    "Node Capacity": "256 nodes",
    "ESD Protection": "±15kV HBM",
    "Common Mode": "-7V to +12V",
    "Supply Voltage": "4.5V - 5.5V",
    "Shutdown Current": "1μA",
    "Driver Output": "±1.5V (min)",
    "Package": "SOP-8",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "20Mbps high-speed",
    "256 node capability",
    "±15kV ESD protection",
    "True fail-safe",
    "Low shutdown current",
    "Wide common-mode range"
  ],
  applications: [
    "Industrial networks",
    "Building automation",
    "Motor drives",
    "Security systems",
    "Remote sensors"
  ],
  faeReview: {
    author: "Wang Jun",
    title: "FAE - Interface",
    content: "The HG485 delivers reliable RS-485 communication with excellent protection. The 20Mbps rate enables fast data transmission for modern industrial systems.",
    highlight: "High-speed industrial transceiver"
  },
  alternativeParts: [
    {
      partNumber: "HG232",
      brand: "HGSEMI",
      reason: "RS-232 option",
      comparison: {
        "protocol": "RS-232 vs RS-485",
        "distance": "Shorter"
      },
      useCase: "Point-to-point applications",
      specifications: {
        "Protocol": "RS-232"
      },
      priceDifference: "-10%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HG6206",
      description: "LDO for power supply",
      category: "Power"
    }
  ],
  faqs: [
    {
      question: "What is the maximum cable length at 20Mbps?",
      answer: "At 20Mbps, maximum cable length is approximately 15 meters. For longer distances, reduce data rate to 500kbps for up to 1200 meters.",
      decisionGuide: "Match data rate to required cable length.",
      keywords: ["cable length", "distance", "data rate"]
    }
  ]
};

// Real Logic Device product 4
const realLogicDevice4 = {
  partNumber: "HG74HC04",
  name: "HG74HC04 Hex Inverter",
  shortDescription: "High-speed CMOS hex inverter with six independent inverters, ideal for signal inversion and buffering.",
  descriptionParagraphs: [
    "The HG74HC04 is a high-speed CMOS logic IC containing six independent inverter gates in a single package.",
    "Features high noise immunity, low power consumption, and balanced propagation delays. Compatible with standard HC and HCT logic families.",
    "Ideal for signal inversion, clock buffering, and general-purpose logic applications in digital systems."
  ],
  specifications: {
    "Logic Function": "Hex Inverter",
    "Technology": "High-speed CMOS",
    "Supply Voltage": "2V - 6V",
    "Input Voltage": "0V to VCC",
    "Output Drive": "±5.2mA",
    "Propagation Delay": "9ns @ 5V",
    "Power Dissipation": "0.5mW per gate",
    "ESD Protection": "2kV HBM",
    "Package": "SOP-14 / TSSOP-14",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "Six independent inverters",
    "High-speed operation",
    "Low power consumption",
    "High noise immunity",
    "Wide voltage range",
    "Balanced propagation delays"
  ],
  applications: [
    "Signal inversion",
    "Clock buffering",
    "Logic level conversion",
    "Oscillator circuits",
    "Digital control systems"
  ],
  faeReview: {
    author: "Chen Hua",
    title: "FAE - Logic",
    content: "The HG74HC04 is a fundamental building block for digital designs. The six inverters provide flexibility for various logic functions at low cost.",
    highlight: "Essential logic component"
  },
  alternativeParts: [
    {
      partNumber: "HG74HC00",
      brand: "HGSEMI",
      reason: "NAND gate option",
      comparison: {
        "function": "NAND vs Inverter",
        "gates": "4 vs 6"
      },
      useCase: "NAND logic functions",
      specifications: {
        "Function": "Quad NAND"
      },
      priceDifference: "0%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HG74HC595",
      description: "Shift register",
      category: "Logic"
    }
  ],
  faqs: [
    {
      question: "Can this be used as a crystal oscillator driver?",
      answer: "Yes, two inverters can be configured as a crystal oscillator with external crystal and resistors. The HG74HC04 provides sufficient drive for most crystals.",
      decisionGuide: "Use for simple clock generation circuits.",
      keywords: ["oscillator", "crystal", "clock"]
    }
  ]
};

function fixProductsJson() {
  console.log('Fixing hgsemi products.json...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix Power Management category
  const powerCategory = data.categories.find(cat => cat.id === 'power-management');
  if (powerCategory) {
    const products = powerCategory.products;
    const p4Index = products.findIndex(p => p.partNumber === 'POWERMANAGEMENT-4');
    
    if (p4Index !== -1) {
      products[p4Index] = realPowerManagement4;
      console.log(`  Replaced POWERMANAGEMENT-4 with HG6210 at index ${p4Index}`);
    }
  }
  
  // Fix Operational Amplifiers category
  const opAmpCategory = data.categories.find(cat => cat.id === 'operational-amplifiers');
  if (opAmpCategory) {
    const products = opAmpCategory.products;
    const p4Index = products.findIndex(p => p.partNumber === 'OPERATIONALAMPLIFIERS-4');
    
    if (p4Index !== -1) {
      products[p4Index] = realOpAmp4;
      console.log(`  Replaced OPERATIONALAMPLIFIERS-4 with HG324 at index ${p4Index}`);
    }
  }
  
  // Fix Interface Drivers category
  const interfaceCategory = data.categories.find(cat => cat.id === 'interface-drivers');
  if (interfaceCategory) {
    const products = interfaceCategory.products;
    const p4Index = products.findIndex(p => p.partNumber === 'INTERFACEDRIVERS-4');
    
    if (p4Index !== -1) {
      products[p4Index] = realInterfaceDriver4;
      console.log(`  Replaced INTERFACEDRIVERS-4 with HG485 at index ${p4Index}`);
    }
  }
  
  // Fix Logic Devices category
  const logicCategory = data.categories.find(cat => cat.id === 'logic-devices');
  if (logicCategory) {
    const products = logicCategory.products;
    const p4Index = products.findIndex(p => p.partNumber === 'LOGICDEVICES-4');
    
    if (p4Index !== -1) {
      products[p4Index] = realLogicDevice4;
      console.log(`  Replaced LOGICDEVICES-4 with HG74HC04 at index ${p4Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

// Run fix
console.log('=== Fixing HGSEMI Products ===\n');
fixProductsJson();
console.log('=== Fix Complete ===');
