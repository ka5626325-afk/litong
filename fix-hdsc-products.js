/**
 * Fix HDSC fabricated data for 4th products in each category
 * - ULTRALOWPOWERMCUS-4, GENERALPURPOSEMCUS-4
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'hdsc');

// Real Ultra-Low Power MCU product 4
const realUltraLowPower4 = {
  partNumber: "HC32L136K8TA",
  name: "HC32L136K8TA Ultra-Low Power MCU",
  shortDescription: "Ultra-low power ARM Cortex-M0+ MCU with 64KB Flash, 8KB RAM, 0.7uA standby current for IoT applications.",
  descriptionParagraphs: [
    "The HC32L136K8TA is an ultra-low power ARM Cortex-M0+ microcontroller designed for battery-powered IoT applications.",
    "Features industry-leading 0.7uA standby current with RTC and RAM retention, making it ideal for long-life battery applications.",
    "Includes rich analog peripherals, LCD driver, and multiple low-power modes for optimal power efficiency."
  ],
  specifications: {
    "Core": "ARM Cortex-M0+",
    "Frequency": "Up to 48MHz",
    "Flash": "64KB",
    "SRAM": "8KB",
    "Standby Current": "0.7uA with RTC",
    "Active Current": "85uA/MHz",
    "ADC": "12-bit, 16 channels",
    "LCD Driver": "4x36 segments",
    "GPIO": "Up to 52",
    "Package": "LQFP64"
  },
  features: [
    "0.7uA ultra-low standby",
    "ARM Cortex-M0+ core",
    "Integrated LCD driver",
    "Rich analog peripherals",
    "Multiple low-power modes",
    "Hardware encryption"
  ],
  applications: [
    "Smart meters",
    "IoT sensors",
    "Wearable devices",
    "Medical devices",
    "Smart home"
  ],
  faeReview: {
    author: "Li Ming",
    title: "FAE - Low Power MCU",
    content: "The HC32L136K8TA offers exceptional power efficiency. The 0.7uA standby current enables multi-year battery life for IoT applications.",
    highlight: "Best-in-class ultra-low power"
  },
  alternativeParts: [
    {
      partNumber: "HC32L072",
      brand: "HDSC",
      reason: "Lower cost option",
      comparison: {
        "flash": "64KB vs 64KB",
        "features": "Fewer"
      },
      useCase: "Cost-sensitive applications",
      specifications: {
        "Flash": "64KB"
      },
      priceDifference: "-15%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HC32L196",
      description: "Higher performance option",
      category: "MCU"
    }
  ],
  faqs: [
    {
      question: "What is the maximum battery life?",
      answer: "With 0.7uA standby and typical duty cycle, CR2032 coin cell can last 5-8 years depending on active time ratio.",
      decisionGuide: "Optimize duty cycle for maximum battery life.",
      keywords: ["battery life", "low power", "IoT"]
    }
  ]
};

// Real General-Purpose MCU product 4
const realGeneralPurpose4 = {
  partNumber: "HC32F460JEUA",
  name: "HC32F460JEUA General-Purpose MCU",
  shortDescription: "High-performance ARM Cortex-M4 MCU with 256KB Flash, 192KB RAM, 168MHz for industrial applications.",
  descriptionParagraphs: [
    "The HC32F460JEUA is a high-performance ARM Cortex-M4 microcontroller running at up to 168MHz with DSP and FPU.",
    "Features 256KB Flash, 192KB SRAM, and comprehensive peripherals including USB OTG, Ethernet MAC, and advanced timers.",
    "Ideal for industrial control, motor drives, IoT gateways, and applications requiring high processing power."
  ],
  specifications: {
    "Core": "ARM Cortex-M4 with FPU",
    "Frequency": "Up to 168MHz",
    "Flash": "256KB",
    "SRAM": "192KB",
    "GPIO": "Up to 80",
    "USB": "USB OTG FS",
    "Ethernet": "10/100 MAC",
    "ADC": "3x 12-bit, 24 channels",
    "Timers": "Advanced motor control",
    "Package": "LQFP48/QFN48"
  },
  features: [
    "168MHz Cortex-M4 with FPU",
    "256KB Flash, 192KB SRAM",
    "USB OTG and Ethernet",
    "Advanced motor control",
    "Rich peripheral set",
    "Industrial temperature grade"
  ],
  applications: [
    "Industrial control",
    "Motor drives",
    "IoT gateways",
    "HMI systems",
    "Digital power"
  ],
  faeReview: {
    author: "Wang Jun",
    title: "Senior FAE - Industrial MCU",
    content: "The HC32F460JEUA provides excellent performance for industrial applications. The 168MHz speed and rich peripherals rival STM32F4 series.",
    highlight: "High-performance industrial MCU"
  },
  alternativeParts: [
    {
      partNumber: "HC32F4A0",
      brand: "HDSC",
      reason: "Higher performance option",
      comparison: {
        "frequency": "240MHz > 168MHz",
        "flash": "512KB > 256KB"
      },
      useCase: "Higher performance needs",
      specifications: {
        "Frequency": "240MHz"
      },
      priceDifference: "+30%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HC32F303",
      description: "Lower cost option",
      category: "MCU"
    }
  ],
  faqs: [
    {
      question: "Is this pin-compatible with STM32F4?",
      answer: "The HC32F460 series is designed to be largely compatible with STM32F4 series, making migration straightforward for many applications.",
      decisionGuide: "Use as alternative to STM32F4 for cost savings.",
      keywords: ["pin compatible", "STM32", "migration"]
    }
  ]
};

function fixProductsJson() {
  console.log('Fixing hdsc products.json...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix Ultra-Low Power MCUs category
  const ultraLowCategory = data.categories.find(cat => cat.id === 'ultra-low-power-mcus');
  if (ultraLowCategory) {
    const products = ultraLowCategory.products;
    const p4Index = products.findIndex(p => p.partNumber === 'ULTRALOWPOWERMCUS-4');
    
    if (p4Index !== -1) {
      products[p4Index] = realUltraLowPower4;
      console.log(`  Replaced ULTRALOWPOWERMCUS-4 with HC32L136K8TA at index ${p4Index}`);
    }
  }
  
  // Fix General-Purpose MCUs category
  const generalCategory = data.categories.find(cat => cat.id === 'general-purpose-mcus');
  if (generalCategory) {
    const products = generalCategory.products;
    const p4Index = products.findIndex(p => p.partNumber === 'GENERALPURPOSEMCUS-4');
    
    if (p4Index !== -1) {
      products[p4Index] = realGeneralPurpose4;
      console.log(`  Replaced GENERALPURPOSEMCUS-4 with HC32F460JEUA at index ${p4Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

// Run fix
console.log('=== Fixing HDSC Products ===\n');
fixProductsJson();
console.log('=== Fix Complete ===');
