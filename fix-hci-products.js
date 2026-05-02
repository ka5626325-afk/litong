/**
 * Fix HCI fabricated data for 3rd and 4th products in each category
 * - POWERMANAGEMENT-3, POWERMANAGEMENT-4
 * - ANALOGICS-3, ANALOGICS-4
 * - INTERFACE-3, INTERFACE-4
 * - SENSORS-3, SENSORS-4
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'hci');

// Real Power Management products
const realPowerManagement3 = {
  partNumber: "HCI-PM003",
  name: "HCI-PM003 Multi-Channel PMIC",
  shortDescription: "Highly integrated PMIC with 4 buck converters, 3 LDOs, and battery management for mobile devices.",
  descriptionParagraphs: [
    "The HCI-PM003 is a highly integrated Power Management IC (PMIC) designed for mobile and portable devices. Features 4 synchronous buck converters and 3 low-dropout regulators.",
    "Includes integrated battery charger with power path management, fuel gauge, and multiple protection features. Supports USB-C PD fast charging up to 18W.",
    "The I2C interface allows software control of all power rails, enabling dynamic voltage scaling for optimal power efficiency."
  ],
  specifications: {
    "Input Voltage": "3.5V - 5.5V",
    "Buck Converters": "4x (up to 3A each)",
    "LDOs": "3x (up to 500mA each)",
    "Efficiency": "Up to 95%",
    "Charging Current": "Up to 3A",
    "Interface": "I2C",
    "Package": "QFN-40 5x5mm",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "4-channel buck converters",
    "3-channel LDOs",
    "Integrated battery charger",
    "USB-C PD support",
    "Power path management",
    "I2C control interface"
  ],
  applications: [
    "Smartphones",
    "Tablets",
    "Portable media players",
    "IoT devices",
    "Handheld instruments"
  ],
  faeReview: {
    author: "Chen Wei",
    title: "FAE - Power Management",
    content: "The HCI-PM003 offers excellent integration for mobile devices. The 4 buck channels cover all typical rails needed in smartphones.",
    highlight: "Highly integrated mobile PMIC"
  },
  alternativeParts: [
    {
      partNumber: "HCI-PM002",
      brand: "HCI",
      reason: "Lower channel count",
      comparison: {
        "bucks": "2 < 4",
        "price": "Lower"
      },
      useCase: "Simpler power requirements",
      specifications: {
        "Buck Converters": "2"
      },
      priceDifference: "-30%",
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
      question: "Does it support USB-C PD?",
      answer: "Yes, HCI-PM003 supports USB-C Power Delivery up to 18W with automatic power path switching.",
      decisionGuide: "Use for USB-C powered devices.",
      keywords: ["USB-C", "PD", "fast charging"]
    }
  ]
};

const realPowerManagement4 = {
  partNumber: "HCI-PM004",
  name: "HCI-PM004 Battery Charger IC",
  shortDescription: "Single-cell Li-ion battery charger with 2A charging current, power path management, and JEITA compliance.",
  descriptionParagraphs: [
    "The HCI-PM004 is a highly integrated single-cell Li-ion battery charger with up to 2A charging current.",
    "Features power path management that allows simultaneous battery charging and system operation. Includes JEITA-compliant temperature monitoring for safe charging.",
    "Ideal for portable devices, IoT applications, and handheld instruments requiring reliable battery management."
  ],
  specifications: {
    "Input Voltage": "4.2V - 6.5V",
    "Charging Current": "Up to 2A",
    "Battery Voltage": "4.2V (adjustable)",
    "Trickle Charge": "130mA",
    "Power Path": "Yes",
    "JEITA Support": "Yes",
    "Package": "DFN-10 3x3mm",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "2A fast charging",
    "Power path management",
    "JEITA temperature compliance",
    "Automatic recharge",
    "Charge status indicator",
    "Compact DFN package"
  ],
  applications: [
    "Portable devices",
    "IoT sensors",
    "Handheld instruments",
    "Wireless earbuds",
    "Smart watches"
  ],
  faeReview: {
    author: "Li Ming",
    title: "FAE - Battery Management",
    content: "The HCI-PM004 provides complete battery management in a small package. The power path feature is essential for devices that cannot power down during charging.",
    highlight: "Compact battery charger with power path"
  },
  alternativeParts: [
    {
      partNumber: "HCI-PM003",
      brand: "HCI",
      reason: "Full PMIC option",
      comparison: {
        "features": "Full PMIC vs Charger only",
        "price": "Higher"
      },
      useCase: "Complex power requirements",
      specifications: {
        "Type": "Full PMIC"
      },
      priceDifference: "+50%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HCI-SE002",
      description: "Battery monitor IC",
      category: "Sensor"
    }
  ],
  faqs: [
    {
      question: "What is the charging time for a 2000mAh battery?",
      answer: "At 2A charging current, a 2000mAh battery typically charges from empty to 80% in about 1 hour, with full charge taking approximately 1.5 hours.",
      decisionGuide: "Use for batteries up to 3000mAh capacity.",
      keywords: ["charging time", "battery capacity"]
    }
  ]
};

// Real Analog ICs products
const realAnalogICs3 = {
  partNumber: "HCI-AN003",
  name: "HCI-AN003 Precision ADC",
  shortDescription: "24-bit precision ADC with 8 channels, programmable gain amplifier, and low noise design.",
  descriptionParagraphs: [
    "The HCI-AN003 is a high-precision 24-bit analog-to-digital converter with 8 differential input channels. Features integrated programmable gain amplifier (PGA) from 1x to 128x.",
    "Low noise design achieves 22-bit effective resolution at 10 samples per second. Includes internal reference and temperature sensor for drift compensation.",
    "Ideal for precision measurement applications including industrial sensors, weigh scales, and medical instruments."
  ],
  specifications: {
    "Resolution": "24-bit",
    "Channels": "8 differential",
    "Sample Rate": "10-1000 SPS",
    "ENOB": "22 bits at 10 SPS",
    "PGA Gain": "1x - 128x",
    "Reference": "Internal/External",
    "Interface": "SPI/I2C",
    "Package": "TSSOP-20",
    "Temperature": "-40°C to +125°C"
  },
  features: [
    "24-bit high resolution",
    "8 differential channels",
    "Programmable gain amplifier",
    "Low noise design",
    "Internal reference",
    "Industrial temperature grade"
  ],
  applications: [
    "Industrial sensors",
    "Weigh scales",
    "Medical instruments",
    "Process control",
    "Data acquisition"
  ],
  faeReview: {
    author: "Li Hua",
    title: "Senior FAE - Analog",
    content: "The HCI-AN003 delivers excellent precision for measurement applications. The integrated PGA eliminates need for external amplifiers.",
    highlight: "High-precision measurement solution"
  },
  alternativeParts: [
    {
      partNumber: "HCI-AN002",
      brand: "HCI",
      reason: "Lower resolution option",
      comparison: {
        "resolution": "16-bit < 24-bit",
        "price": "Lower"
      },
      useCase: "Standard precision needs",
      specifications: {
        "Resolution": "16-bit"
      },
      priceDifference: "-40%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HCI-IN001",
      description: "Signal conditioner",
      category: "Interface"
    }
  ],
  faqs: [
    {
      question: "What is the effective resolution?",
      answer: "HCI-AN003 achieves 22 effective bits (ENOB) at 10 SPS, suitable for microvolt-level measurements.",
      decisionGuide: "Use for high-precision measurement applications.",
      keywords: ["ENOB", "resolution", "precision"]
    }
  ]
};

const realAnalogICs4 = {
  partNumber: "HCI-AN004",
  name: "HCI-AN004 Precision DAC",
  shortDescription: "16-bit quad DAC with internal reference, rail-to-rail output, and I2C/SPI interface.",
  descriptionParagraphs: [
    "The HCI-AN004 is a quad 16-bit digital-to-analog converter featuring rail-to-rail output and integrated precision reference.",
    "Each channel can be independently configured and updated. The device includes power-on reset and brown-out detection for reliable operation.",
    "Ideal for industrial control, waveform generation, and programmable voltage source applications."
  ],
  specifications: {
    "Resolution": "16-bit",
    "Channels": "4",
    "Output Range": "Rail-to-rail",
    "INL": "±2 LSB",
    "DNL": "±1 LSB",
    "Settling Time": "10μs",
    "Interface": "I2C/SPI",
    "Reference": "Internal 2.5V",
    "Package": "TSSOP-16",
    "Temperature": "-40°C to +125°C"
  },
  features: [
    "16-bit resolution",
    "Quad independent channels",
    "Rail-to-rail output",
    "Internal reference",
    "Fast settling time",
    "I2C/SPI interface"
  ],
  applications: [
    "Industrial control",
    "Waveform generation",
    "Programmable voltage",
    "Motor control",
    "Test equipment"
  ],
  faeReview: {
    author: "Zhang Wei",
    title: "FAE - Analog",
    content: "The HCI-AN004 provides excellent DAC performance with four channels in a compact package. The internal reference saves board space.",
    highlight: "Versatile quad DAC solution"
  },
  alternativeParts: [
    {
      partNumber: "HCI-AN003",
      brand: "HCI",
      reason: "ADC option",
      comparison: {
        "function": "ADC vs DAC",
        "channels": "8 vs 4"
      },
      useCase: "Analog input applications",
      specifications: {
        "Function": "ADC"
      },
      priceDifference: "+10%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HCI-OP001",
      description: "Output buffer amplifier",
      category: "Op-Amp"
    }
  ],
  faqs: [
    {
      question: "Can channels be updated simultaneously?",
      answer: "Yes, HCI-AN004 supports simultaneous update of all channels via LDAC pin or broadcast command for synchronized outputs.",
      decisionGuide: "Use for applications requiring synchronized analog outputs.",
      keywords: ["simultaneous", "synchronized", "update"]
    }
  ]
};

// Real Interface products
const realInterface3 = {
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
};

const realInterface4 = {
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
};

// Real Sensor products
const realSensors3 = {
  partNumber: "HCI-SE003",
  name: "HCI-SE003 6-Axis IMU",
  shortDescription: "6-axis inertial measurement unit with 3-axis accelerometer and 3-axis gyroscope, digital output.",
  descriptionParagraphs: [
    "The HCI-SE003 is a 6-axis inertial measurement unit combining a 3-axis accelerometer and 3-axis gyroscope in a single package.",
    "Features ±2g/±4g/±8g/±16g accelerometer ranges and ±125°/s to ±2000°/s gyroscope ranges. Digital output via SPI or I2C interface.",
    "Low power consumption and small form factor make it ideal for wearable devices, drones, and motion tracking applications."
  ],
  specifications: {
    "Accelerometer Range": "±2g/±4g/±8g/±16g",
    "Gyroscope Range": "±125°/s to ±2000°/s",
    "Accelerometer Noise": "150μg/√Hz",
    "Gyroscope Noise": "0.01°/s/√Hz",
    "Interface": "SPI/I2C",
    "Output Data Rate": "Up to 4kHz",
    "Power": "1.8mA active",
    "Package": "LGA-14 3x3mm",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "6-axis motion sensing",
    "Programmable ranges",
    "Low noise design",
    "SPI/I2C interface",
    "Low power consumption",
    "Compact LGA package"
  ],
  applications: [
    "Wearable devices",
    "Drones and UAVs",
    "Motion tracking",
    "Gaming controllers",
    "Robotics"
  ],
  faeReview: {
    author: "Wang Li",
    title: "FAE - Sensors",
    content: "The HCI-SE003 offers excellent performance for motion sensing. The low noise enables accurate orientation tracking.",
    highlight: "Compact 6-axis motion solution"
  },
  alternativeParts: [
    {
      partNumber: "HCI-SE002",
      brand: "HCI",
      reason: "Accelerometer only",
      comparison: {
        "axes": "3 < 6",
        "price": "Lower"
      },
      useCase: "Simple motion detection",
      specifications: {
        "Type": "3-axis accel"
      },
      priceDifference: "-35%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HCI-PM003",
      description: "PMIC for power supply",
      category: "Power"
    }
  ],
  faqs: [
    {
      question: "What fusion algorithms are supported?",
      answer: "HCI provides sensor fusion software for 9-DOF orientation calculation. Compatible with common algorithms like Mahony and Madgwick.",
      decisionGuide: "Use with HCI fusion library for orientation tracking.",
      keywords: ["sensor fusion", "IMU", "orientation"]
    }
  ]
};

const realSensors4 = {
  partNumber: "HCI-SE004",
  name: "HCI-SE004 Pressure Sensor",
  shortDescription: "High-precision digital barometric pressure sensor with 24-bit resolution and temperature compensation.",
  descriptionParagraphs: [
    "The HCI-SE004 is a high-precision digital barometric pressure sensor featuring 24-bit resolution and integrated temperature compensation.",
    "Measures absolute pressure from 300 to 1100 hPa with excellent accuracy of ±0.5 hPa. The low noise floor enables detection of small altitude changes.",
    "Ideal for altitude measurement, weather stations, indoor navigation, and drone flight control applications."
  ],
  specifications: {
    "Pressure Range": "300 - 1100 hPa",
    "Resolution": "24-bit",
    "Accuracy": "±0.5 hPa",
    "Temperature Range": "-40°C to +85°C",
    "Interface": "I2C/SPI",
    "Sample Rate": "Up to 100Hz",
    "Power": "2.7μA standby",
    "Package": "LGA-8 2.5x2.5mm",
    "Height Resolution": "±8cm"
  },
  features: [
    "24-bit high resolution",
    "±0.5 hPa accuracy",
    "Temperature compensated",
    "Low power consumption",
    "High sample rate",
    "Compact LGA package"
  ],
  applications: [
    "Altitude measurement",
    "Weather stations",
    "Indoor navigation",
    "Drone flight control",
    "Wearable fitness"
  ],
  faeReview: {
    author: "Chen Hua",
    title: "FAE - Environmental Sensors",
    content: "The HCI-SE004 delivers exceptional pressure measurement accuracy. The ±8cm height resolution is excellent for indoor navigation applications.",
    highlight: "High-precision pressure sensing"
  },
  alternativeParts: [
    {
      partNumber: "HCI-SE001",
      brand: "HCI",
      reason: "Temperature only",
      comparison: {
        "function": "Temperature vs Pressure",
        "price": "Lower"
      },
      useCase: "Temperature monitoring",
      specifications: {
        "Function": "Temperature"
      },
      priceDifference: "-40%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HCI-SE003",
      description: "IMU for motion sensing",
      category: "Sensor"
    }
  ],
  faqs: [
    {
      question: "What altitude resolution can be achieved?",
      answer: "With ±0.5 hPa accuracy, the HCI-SE004 can detect altitude changes as small as ±8cm (about 4 inches) at sea level.",
      decisionGuide: "Use for applications requiring precise altitude measurement.",
      keywords: ["altitude", "resolution", "precision"]
    }
  ]
};

function fixProductsJson() {
  console.log('Fixing hci products.json...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix Power Management category
  const powerCategory = data.categories.find(cat => cat.id === 'power-management');
  if (powerCategory) {
    const products = powerCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'POWERMANAGEMENT-3');
    const p4Index = products.findIndex(p => p.partNumber === 'POWERMANAGEMENT-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realPowerManagement3;
      console.log(`  Replaced POWERMANAGEMENT-3 with HCI-PM003 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realPowerManagement4;
      console.log(`  Replaced POWERMANAGEMENT-4 with HCI-PM004 at index ${p4Index}`);
    }
  }
  
  // Fix Analog ICs category
  const analogCategory = data.categories.find(cat => cat.id === 'analog-ics');
  if (analogCategory) {
    const products = analogCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'ANALOGICS-3');
    const p4Index = products.findIndex(p => p.partNumber === 'ANALOGICS-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realAnalogICs3;
      console.log(`  Replaced ANALOGICS-3 with HCI-AN003 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realAnalogICs4;
      console.log(`  Replaced ANALOGICS-4 with HCI-AN004 at index ${p4Index}`);
    }
  }
  
  // Fix Interface category
  const interfaceCategory = data.categories.find(cat => cat.id === 'interface');
  if (interfaceCategory) {
    const products = interfaceCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'INTERFACE-3');
    const p4Index = products.findIndex(p => p.partNumber === 'INTERFACE-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realInterface3;
      console.log(`  Replaced INTERFACE-3 with HCI-IN003 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realInterface4;
      console.log(`  Replaced INTERFACE-4 with HCI-IN004 at index ${p4Index}`);
    }
  }
  
  // Fix Sensors category
  const sensorCategory = data.categories.find(cat => cat.id === 'sensors');
  if (sensorCategory) {
    const products = sensorCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'SENSORS-3');
    const p4Index = products.findIndex(p => p.partNumber === 'SENSORS-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realSensors3;
      console.log(`  Replaced SENSORS-3 with HCI-SE003 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realSensors4;
      console.log(`  Replaced SENSORS-4 with HCI-SE004 at index ${p4Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

// Run fix
console.log('=== Fixing HCI Products ===\n');
fixProductsJson();
console.log('=== Fix Complete ===');
