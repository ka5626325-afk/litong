#!/usr/bin/env node
/**
 * Add 1 more product to each category to reach 4 products per category
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'aurasemi');
const productsJson = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

console.log('Adding 4th product to each category...\n');

// 1. Add 4th product to Power Management
console.log('1. Adding 4th product to Power Management...');
const powerCategory = productsJson.categories.find(c => c.id === 'power-management');
if (powerCategory && powerCategory.products.length < 4) {
  powerCategory.products.push({
    partNumber: "AU8030",
    name: "Dual-Phase Power Stage Driver",
    shortDescription: "High-performance power stage driver with integrated MOSFETs and current sensing for VRM applications.",
    descriptionParagraphs: [
      "The AU8030 is a dual-phase power stage driver designed for high-current VRM applications. It integrates low-side and high-side MOSFETs with drivers and current sensing in a compact package.",
      "With support for switching frequencies up to 2MHz, the AU8030 enables high-bandwidth transient response for processor power delivery. The integrated current sensing eliminates the need for external sense resistors.",
      "The device is designed to work with the AU8020 VRM controller to provide complete multi-phase power solutions. It supports various control interfaces including PWM and SVID."
    ],
    specifications: {
      "Input Voltage": "4.5V to 16V",
      "Output Current": "60A per phase",
      "Switching Frequency": "Up to 2MHz",
      "Efficiency": "Up to 95%",
      "Current Sense": "Integrated",
      "Package": "PQFN-56"
    },
    features: [
      "Dual-phase power stage",
      "Integrated MOSFETs and drivers",
      "Built-in current sensing",
      "High-frequency operation",
      "Compatible with AU8020 controller",
      "Thermal monitoring"
    ],
    applications: [
      "Server CPU power",
      "GPU power delivery",
      "FPGA core power",
      "High-current DC-DC",
      "Telecom power systems"
    ],
    faeReview: {
      author: "David Liu",
      title: "Principal FAE - Power Electronics",
      content: "The AU8030 is an excellent power stage for high-current VRM designs. The integration level is impressive - MOSFETs, drivers, and current sense all in one package. I've used it with the AU8020 controller in server designs delivering 120A+ with excellent results. The current sensing accuracy is good, typically within 5% of actual current. Thermal performance is solid with proper PCB copper area. The 2MHz switching capability allows for smaller inductors and faster transient response. One tip: use plenty of vias to inner ground planes for best thermal performance. Overall, a great power stage solution.",
      highlight: "Highly integrated dual-phase power stage with current sensing"
    },
    alternativeParts: [
      {
        partNumber: "IR3555",
        brand: "Infineon",
        specifications: { "Current": "60A", "Frequency": "1MHz" },
        comparison: { "Frequency": "1MHz < 2MHz (Aurasemi higher)", "Price": "Higher > Lower" },
        reason: "Lower frequency, higher cost",
        useCase: "Applications requiring Infineon parts"
      },
      {
        partNumber: "TDA21490",
        brand: "Infineon",
        specifications: { "Current": "90A", "Frequency": "1.5MHz" },
        comparison: { "Current": "90A > 60A", "Integration": "Lower < Higher" },
        reason: "Higher current but less integrated",
        useCase: "Very high current applications"
      }
    ],
    companionParts: [
      { partNumber: "AU8020", link: "/aurasemi/products/power-management/au8020.html", description: "VRM controller for multi-phase operation", category: "Power Management" },
      { partNumber: "AU8110", link: "/aurasemi/products/power-management/au8110.html", description: "Buck converter for auxiliary rails", category: "Power Management" },
      { partNumber: "AU8015", link: "/aurasemi/products/power-management/au8015.html", description: "LDO for clean analog supply", category: "Power Management" }
    ],
    faqs: [
      { question: "How do I parallel multiple AU8030 devices?", answer: "The AU8030 supports multi-phase operation when used with the AU8020 controller. Each AU8030 operates as an independent phase with current balancing managed by the controller. Connect the PWM outputs from the AU8020 to each AU8030, and tie the current sense outputs together. The controller automatically balances current between phases.", decisionGuide: "Use AU8020 controller to manage multiple AU8030 phases with automatic current balancing.", keywords: ["multi-phase", "current balancing", "parallel operation"] },
      { question: "What is the thermal performance?", answer: "Thermal performance depends on operating conditions: (1) At 30A per phase with 500kHz switching - approximately 60°C temperature rise; (2) At 60A per phase - approximately 85°C temperature rise; (3) Use 1000mm²+ copper area for best thermal performance; (4) Implement thermal vias to inner ground planes. The device includes thermal monitoring with shutdown protection at 150°C junction temperature.", decisionGuide: "Use 1000mm²+ copper and thermal vias; expect 60-85°C rise depending on load.", keywords: ["thermal performance", "temperature rise", "heat dissipation"] },
      { question: "Can I use the AU8030 without the AU8020 controller?", answer: "The AU8030 is designed to work with the AU8020 controller for optimal performance. While it can operate with other PWM controllers, some features like current balancing and protection may not function properly. For best results and full feature support, use the AU8030 with the AU8020 controller.", decisionGuide: "Use with AU8020 controller for full feature support and optimal performance.", keywords: ["controller compatibility", "AU8020", "PWM control"] }
    ]
  });
}

// 2. Add 4th product to Sensor Interface
console.log('2. Adding 4th product to Sensor Interface...');
const sensorCategory = productsJson.categories.find(c => c.id === 'sensor-interface');
if (sensorCategory && sensorCategory.products.length < 4) {
  sensorCategory.products.push({
    partNumber: "AU6050",
    name: "Precision Voltage Reference and ADC",
    shortDescription: "Ultra-stable voltage reference with integrated 24-bit ADC for precision measurement applications.",
    descriptionParagraphs: [
      "The AU6050 combines an ultra-stable voltage reference with a high-resolution 24-bit ADC for precision measurement applications. It provides a stable 2.5V or 4.096V reference with ±0.02% accuracy.",
      "The integrated 24-bit delta-sigma ADC achieves 22 noise-free bits with programmable gain from 1x to 128x. It supports differential and single-ended input configurations.",
      "With low drift (±2ppm/°C) and low noise (1μVp-p), the AU6050 is ideal for precision sensor interfaces, data acquisition systems, and test equipment."
    ],
    specifications: {
      "Reference Voltage": "2.5V or 4.096V",
      "Reference Accuracy": "±0.02%",
      "Temperature Drift": "±2ppm/°C",
      "ADC Resolution": "24-bit",
      "Noise-Free Bits": "22",
      "Gain Range": "1x to 128x",
      "Package": "MSOP-10"
    },
    features: [
      "Ultra-stable voltage reference",
      "24-bit high-resolution ADC",
      "Low temperature drift",
      "Programmable gain amplifier",
      "Differential and single-ended inputs",
      "Low power consumption"
    ],
    applications: [
      "Precision sensor interfaces",
      "Data acquisition systems",
      "Test and measurement equipment",
      "Medical instrumentation",
      "Industrial process control"
    ],
    faeReview: {
      author: "Michael Zhang",
      title: "Senior FAE - Precision Measurement",
      content: "The AU6050 is an excellent choice for precision measurement applications. The integrated reference and ADC saves board space and eliminates reference-to-ADC matching issues. The 2ppm/°C drift is impressive for this price point. I've used it in precision weighing applications with excellent results. The noise performance is good - 22 noise-free bits is achievable with proper layout. The programmable gain is handy for sensors with different output ranges. One tip: use the recommended input RC filter to achieve the best noise performance. Overall, a great integrated solution for precision measurement.",
      highlight: "Integrated precision reference and ADC with excellent stability"
    },
    alternativeParts: [
      {
        partNumber: "REF5025 + ADS1256",
        brand: "Texas Instruments",
        specifications: { "Ref Accuracy": "±0.05%", "ADC Resolution": "24-bit" },
        comparison: { "Integration": "Discrete < Integrated (Aurasemi simpler)", "Price": "Higher > Lower" },
        reason: "Discrete solution, higher cost",
        useCase: "Applications requiring TI components"
      },
      {
        partNumber: "ADR4525 + LTC2983",
        brand: "Analog Devices",
        specifications: { "Ref Accuracy": "±0.02%", "ADC Resolution": "24-bit" },
        comparison: { "Integration": "Discrete < Integrated", "Price": "Much higher > Lower" },
        reason: "Discrete solution, much higher cost",
        useCase: "High-end precision applications"
      }
    ],
    companionParts: [
      { partNumber: "AU6020", link: "/aurasemi/products/sensor-interface/au6020.html", description: "RTD interface for temperature sensing", category: "Sensor Interface" },
      { partNumber: "AU6030", link: "/aurasemi/products/sensor-interface/au6030.html", description: "TC interface for multi-channel systems", category: "Sensor Interface" },
      { partNumber: "AU6040", link: "/aurasemi/products/sensor-interface/au6040.html", description: "Bridge sensor interface", category: "Sensor Interface" }
    ],
    faqs: [
      { question: "What is the actual accuracy?", answer: "The AU6050 achieves excellent accuracy: (1) Initial accuracy - ±0.02% at 25°C; (2) Temperature drift - ±2ppm/°C (±0.0002%/°C); (3) Long-term drift - <50ppm/1000 hours; (4) Total error over -40°C to +85°C - typically <0.05%. For highest accuracy, allow the device to warm up for 10 minutes after power-on.", decisionGuide: "±0.02% initial accuracy with ±2ppm/°C drift for precision applications.", keywords: ["accuracy", "temperature drift", "precision measurement"] },
      { question: "How do I minimize noise?", answer: "To achieve the best noise performance: (1) Use the recommended input RC filter (typically 100Ω + 0.1μF); (2) Connect analog and digital grounds at a single point; (3) Use a clean power supply with <10mV ripple; (4) Keep input traces short and shielded if possible; (5) Enable the internal digital filter with appropriate settling time. Following these guidelines achieves 22 noise-free bits.", decisionGuide: "Use input filtering, single-point grounding, and clean supply for best noise performance.", keywords: ["noise reduction", "input filtering", "grounding"] },
      { question: "Can I use external reference with the ADC?", answer: "Yes, the AU6050 ADC can use an external reference if higher accuracy is required. Connect the external reference to the REFIN pin and disable the internal reference. The external reference should have low noise and good stability. However, for most applications, the integrated reference provides sufficient accuracy and simplifies the design.", decisionGuide: "Can use external reference, but integrated reference is sufficient for most applications.", keywords: ["external reference", "ADC reference", "precision reference"] }
    ]
  });
}

// 3. Add 4th product to Wireless Transceivers
console.log('3. Adding 4th product to Wireless Transceivers...');
const wirelessCategory = productsJson.categories.find(c => c.id === 'wireless-transceiver');
if (wirelessCategory && wirelessCategory.products.length < 4) {
  wirelessCategory.products.push({
    partNumber: "AU7160",
    name: "Low-Power BLE 5.2 SoC",
    shortDescription: "Ultra-low-power Bluetooth 5.2 SoC with integrated ARM Cortex-M4 and 2.4GHz transceiver for IoT applications.",
    descriptionParagraphs: [
      "The AU7160 is a highly integrated Bluetooth 5.2 SoC designed for ultra-low-power IoT applications. It combines a 2.4GHz BLE transceiver with an ARM Cortex-M4 processor in a single chip.",
      "With receive current of only 4.5mA and transmit current of 5.5mA at 0dBm, the AU7160 enables multi-year battery life on coin cells. The deep sleep mode consumes <1μA with RAM retention.",
      "The integrated ARM Cortex-M4 processor runs at up to 64MHz with 256KB Flash and 64KB RAM, eliminating the need for an external MCU. It supports BLE 5.2 features including LE Audio, Direction Finding, and Long Range."
    ],
    specifications: {
      "Protocol": "Bluetooth 5.2",
      "Frequency": "2.4GHz ISM",
      "Output Power": "+8dBm max",
      "Sensitivity": "-97dBm",
      "RX Current": "4.5mA",
      "TX Current": "5.5mA (0dBm)",
      "Sleep Current": "<1μA",
      "Processor": "ARM Cortex-M4 @ 64MHz",
      "Memory": "256KB Flash, 64KB RAM",
      "Package": "QFN-48"
    },
    features: [
      "Bluetooth 5.2 certified",
      "Integrated ARM Cortex-M4",
      "Ultra-low power consumption",
      "LE Audio support",
      "Direction Finding",
      "Long Range mode"
    ],
    applications: [
      "IoT sensors and devices",
      "Wearable devices",
      "Smart home products",
      "Wireless HID devices",
      "Asset tracking tags",
      "Health monitoring devices"
    ],
    faeReview: {
      author: "Lisa Wang",
      title: "RF Applications Engineer",
      content: "The AU7160 is a game-changer for BLE IoT applications. The integration level is incredible - MCU, BLE radio, and memory all in one chip. Power consumption is excellent; I've measured 4.5mA in RX which is competitive with leading BLE solutions. The 1μA sleep current with RAM retention is key for long battery life. The integrated Cortex-M4 is powerful enough for most IoT applications, eliminating the need for a separate MCU. BLE 5.2 features like LE Audio and Direction Finding open up new application possibilities. Development is straightforward with the provided SDK and examples. Overall, an excellent BLE SoC for cost-sensitive IoT applications.",
      highlight: "Highly integrated BLE 5.2 SoC with ultra-low power consumption"
    },
    alternativeParts: [
      {
        partNumber: "nRF52840",
        brand: "Nordic",
        specifications: { "Protocol": "BLE 5.0", "Core": "Cortex-M4", "Flash": "1MB" },
        comparison: { "BLE Version": "5.0 < 5.2 (Aurasemi newer)", "Flash": "1MB > 256KB" },
        reason: "Older BLE version, more Flash",
        useCase: "Applications requiring more Flash memory"
      },
      {
        partNumber: "CC2640R2F",
        brand: "Texas Instruments",
        specifications: { "Protocol": "BLE 4.2", "Core": "Cortex-M3", "Flash": "128KB" },
        comparison: { "BLE Version": "4.2 < 5.2 (Aurasemi newer)", "Core": "M3 < M4" },
        reason: "Older BLE version, less powerful core",
        useCase: "Basic BLE applications"
      }
    ],
    companionParts: [
      { partNumber: "AU7140", link: "/aurasemi/products/wireless-transceiver/au7140.html", description: "BLE 5.0 transceiver for simpler applications", category: "Wireless Transceiver" },
      { partNumber: "AU7040", link: "/aurasemi/products/wireless-transceiver/au7040.html", description: "Sub-GHz for dual-band systems", category: "Wireless Transceiver" },
      { partNumber: "AU8015", link: "/aurasemi/products/power-management/au8015.html", description: "LDO for clean supply", category: "Power Management" }
    ],
    faqs: [
      { question: "What is the actual battery life?", answer: "Battery life depends on duty cycle and battery capacity: (1) CR2032 coin cell (225mAh) with 1 connection per hour - 3-5 years; (2) 2xAAA batteries (1200mAh) with 1 connection per minute - 2-3 years; (3) Continuous advertising - 1-2 months on CR2032. The key to long battery life is minimizing time in active mode and using deep sleep between transmissions.", decisionGuide: "3-5 years on CR2032 with 1 connection/hour; maximize sleep time for best battery life.", keywords: ["battery life", "coin cell", "power consumption"] },
      { question: "How much Flash and RAM is available for my application?", answer: "After the BLE protocol stack, approximately 200KB Flash and 48KB RAM are available for application code. This is sufficient for most IoT applications. For larger applications, consider using external Flash or the AU7160-M variant with 512KB Flash. The SDK includes memory optimization options to minimize stack footprint.", decisionGuide: "~200KB Flash and 48KB RAM available for applications after BLE stack.", keywords: ["Flash memory", "RAM", "application code"] },
      { question: "Does it support Over-The-Air (OTA) updates?", answer: "Yes, the AU7160 supports OTA firmware updates via BLE. The bootloader occupies the first 32KB of Flash, leaving the remaining Flash for application code and OTA storage. The SDK includes OTA examples and tools for secure firmware updates. OTA updates can be performed using a smartphone app or central device.", decisionGuide: "Yes, OTA updates supported with 32KB bootloader and remaining Flash for application/storage.", keywords: ["OTA update", "firmware update", "bootloader"] }
    ]
  });
}

// Save updated products.json
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsJson, null, 2));

console.log('\n✅ Products added successfully!');
console.log('\nCurrent product counts per category:');
productsJson.categories.forEach(cat => {
  console.log(`- ${cat.name}: ${cat.products.length} products`);
});
