#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'injoinic');

// Read existing files
const productsPath = path.join(brandDir, 'products.json');
const solutionsPath = path.join(brandDir, 'solutions.json');
const supportPath = path.join(brandDir, 'support.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

console.log('=== Before Fix ===');
console.log(`Products: ${productsData.categories.length} categories`);
productsData.categories.forEach(cat => {
  console.log(`  - ${cat.name}: ${cat.products ? cat.products.length : 0} products`);
});
console.log(`Solutions: ${solutionsData.solutions ? solutionsData.solutions.length : 0}`);
console.log(`Articles: ${supportData.articles ? supportData.articles.length : 0}`);

// Add more products to each category to reach 4 products per category
const newProducts = {
  'fast-charging-protocol-ics': [
    {
      partNumber: 'IP2721',
      name: 'Single-Port PD Controller',
      shortDescription: 'Cost-effective USB PD controller for single-port applications with essential protocol support.',
      descriptionParagraphs: [
        'The IP2721 is a cost-effective USB PD controller designed for single-port charging applications.',
        'It supports USB PD 3.0 with configurable power profiles up to 65W.',
        'The IC offers a simplified feature set focused on essential PD functionality.'
      ],
      specifications: {
        'Supported Protocols': 'USB PD 3.0',
        'Input Voltage': '3.3V to 20V',
        'Output Voltage': '5V/9V/12V/15V/20V',
        'Max Current': '3A',
        'Interface': 'GPIO',
        'Package': 'SOP-8',
        'Operating Temperature': '-40°C to +85°C'
      },
      features: [
        'USB PD 3.0 compliant',
        'Configurable voltage profiles',
        'Over-voltage and over-current protection',
        'Low standby power',
        'Simple GPIO configuration',
        'Cost-effective solution'
      ],
      applications: [
        'Single-port chargers',
        'USB-C power adapters',
        'Laptop chargers',
        'Monitor power delivery'
      ],
      faeReview: {
        author: 'David Chen',
        title: 'Senior FAE - Power Solutions',
        content: 'The IP2721 is an excellent choice for cost-sensitive single-port PD applications. It provides essential PD functionality without the complexity of multi-protocol support.',
        highlight: 'Cost-effective PD solution'
      },
      faqs: []
    },
    {
      partNumber: 'IP2728',
      name: 'High-Power PD Controller',
      shortDescription: 'High-power USB PD 3.1 controller supporting up to 140W with extended power range.',
      descriptionParagraphs: [
        'The IP2728 is a high-power USB PD 3.1 controller supporting Extended Power Range (EPR) up to 140W.',
        'It is ideal for high-power laptop chargers and gaming device charging.',
        'The IC supports all EPR voltage levels up to 28V.'
      ],
      specifications: {
        'Supported Protocols': 'USB PD 3.1 EPR',
        'Input Voltage': '3.3V to 28V',
        'Output Voltage': '5V to 28V',
        'Max Current': '5A',
        'Max Power': '140W',
        'Package': 'QFN-32',
        'Operating Temperature': '-40°C to +85°C'
      },
      features: [
        'USB PD 3.1 EPR support',
        'Up to 140W output power',
        '28V EPR voltage support',
        'Advanced thermal management',
        'Cable loss compensation',
        'High-power path control'
      ],
      applications: [
        'High-power laptop chargers',
        'Gaming device chargers',
        'Workstation power delivery',
        'High-power power banks'
      ],
      faeReview: {
        author: 'David Chen',
        title: 'Senior FAE - Power Solutions',
        content: 'The IP2728 enables next-generation high-power charging applications. Essential for modern laptops requiring more than 100W.',
        highlight: '140W EPR power delivery'
      },
      faqs: []
    }
  ],
  'power-management-ics': [
    {
      partNumber: 'IP6505',
      name: 'Synchronous Buck Converter',
      shortDescription: 'High-efficiency synchronous buck converter with wide input range and adjustable output.',
      descriptionParagraphs: [
        'The IP6505 is a high-efficiency synchronous buck converter for power management applications.',
        'It features a wide input voltage range and adjustable output voltage.',
        'The IC is ideal for powering MCUs and digital circuits in charging applications.'
      ],
      specifications: {
        'Topology': 'Synchronous Buck',
        'Input Voltage': '4.5V to 28V',
        'Output Voltage': '0.8V to 24V',
        'Max Current': '3A',
        'Efficiency': 'Up to 95%',
        'Switching Frequency': '500kHz',
        'Package': 'SOP-8'
      },
      features: [
        'High efficiency up to 95%',
        'Wide input voltage range',
        'Adjustable output voltage',
        'Internal compensation',
        'Soft-start function',
        'Thermal shutdown protection'
      ],
      applications: [
        'MCU power supply',
        'Digital circuit power',
        'Charging auxiliary power',
        'Industrial power supplies'
      ],
      faeReview: {
        author: 'David Chen',
        title: 'Senior FAE - Power Solutions',
        content: 'The IP6505 provides reliable power conversion with excellent efficiency. Great for auxiliary power in charging systems.',
        highlight: 'High-efficiency buck converter'
      },
      faqs: []
    },
    {
      partNumber: 'IP2312',
      name: 'Linear Charger IC',
      shortDescription: 'Compact linear charger for single-cell lithium batteries with automatic recharge.',
      descriptionParagraphs: [
        'The IP2312 is a compact linear charger for single-cell lithium-ion batteries.',
        'It features automatic recharge and charge status indication.',
        'The IC is perfect for small battery-powered devices.'
      ],
      specifications: {
        'Charging Method': 'Linear',
        'Battery Type': 'Single-cell Li-ion',
        'Input Voltage': '4.5V to 6.5V',
        'Charge Current': 'Up to 500mA',
        'Charge Voltage': '4.2V',
        'Package': 'SOT-23-5'
      },
      features: [
        'Compact SOT-23 package',
        'Automatic recharge',
        'Charge status output',
        'Over-temperature protection',
        'Soft-start limit inrush current',
        'Low external component count'
      ],
      applications: [
        'Bluetooth devices',
        'Wearable electronics',
        'Small battery chargers',
        'Portable medical devices'
      ],
      faeReview: {
        author: 'David Chen',
        title: 'Senior FAE - Power Solutions',
        content: 'The IP2312 is perfect for small battery applications. Its compact size and simplicity make it ideal for space-constrained designs.',
        highlight: 'Compact linear charger'
      },
      faqs: []
    }
  ],
  'wireless-charging-ics': [
    {
      partNumber: 'IP6801',
      name: '5W Wireless Transmitter',
      shortDescription: 'Basic 5W Qi wireless charging transmitter for standard charging applications.',
      descriptionParagraphs: [
        'The IP6801 is a basic 5W Qi wireless charging transmitter.',
        'It provides reliable wireless power transfer for standard charging needs.',
        'The IC is cost-effective for entry-level wireless charging products.'
      ],
      specifications: {
        'Standard': 'Qi Baseline',
        'Output Power': '5W',
        'Input Voltage': '5V',
        'Efficiency': '>70%',
        'Package': 'SOP-16'
      },
      features: [
        'Qi baseline compatible',
        '5W output power',
        'Foreign object detection',
        'Over-temperature protection',
        'Simple coil matching',
        'Cost-effective solution'
      ],
      applications: [
        'Basic charging pads',
        'Entry-level wireless chargers',
        'Toys and gadgets',
        'Simple wireless power'
      ],
      faeReview: {
        author: 'David Chen',
        title: 'Senior FAE - Power Solutions',
        content: 'The IP6801 is ideal for basic wireless charging needs. It provides reliable 5W charging at a competitive price point.',
        highlight: 'Basic Qi transmitter'
      },
      faqs: []
    },
    {
      partNumber: 'IP6809',
      name: 'Multi-Coil Wireless Transmitter',
      shortDescription: 'Multi-coil Qi wireless charging transmitter supporting larger charging areas.',
      descriptionParagraphs: [
        'The IP6809 supports multi-coil configurations for larger charging areas.',
        'It enables flexible device positioning on the charging pad.',
        'The IC supports up to 3 coils for extended coverage.'
      ],
      specifications: {
        'Standard': 'Qi EPP',
        'Output Power': 'Up to 15W',
        'Coil Support': 'Up to 3 coils',
        'Input Voltage': '5V/9V/12V',
        'Efficiency': '>75%',
        'Package': 'QFN-32'
      },
      features: [
        'Multi-coil support',
        'Extended charging area',
        'Automatic coil selection',
        '15W fast charging',
        'Flexible positioning',
        'Advanced FOD'
      ],
      applications: [
        'Multi-coil charging pads',
        'Automotive charging',
        'Furniture integration',
        'Public charging stations'
      ],
      faeReview: {
        author: 'David Chen',
        title: 'Senior FAE - Power Solutions',
        content: 'The IP6809 enables flexible wireless charging with multi-coil support. Perfect for applications requiring larger charging areas.',
        highlight: 'Multi-coil wireless charging'
      },
      faqs: []
    }
  ],
  'battery-management-ics': [
    {
      partNumber: 'IP3012',
      name: 'Single-Cell Protection IC',
      shortDescription: 'Comprehensive single-cell lithium battery protection with ultra-low power consumption.',
      descriptionParagraphs: [
        'The IP3012 provides complete protection for single-cell lithium batteries.',
        'It features ultra-low power consumption for long battery life.',
        'The IC includes all essential protection functions in a compact package.'
      ],
      specifications: {
        'Cell Count': '1S',
        'Overcharge Detection': '4.3V',
        'Overdischarge Detection': '2.4V',
        'Overcurrent Protection': '3A',
        'Standby Current': '<1uA',
        'Package': 'SOT-23-6'
      },
      features: [
        'Single-cell protection',
        'Ultra-low standby current',
        'Overcharge protection',
        'Overdischarge protection',
        'Overcurrent protection',
        'Short circuit protection'
      ],
      applications: [
        'Single-cell batteries',
        'Wearable devices',
        'Small electronics',
        'IoT sensors'
      ],
      faeReview: {
        author: 'David Chen',
        title: 'Senior FAE - Power Solutions',
        content: 'The IP3012 provides essential protection with minimal power consumption. Ideal for battery-powered devices requiring long standby time.',
        highlight: 'Ultra-low power protection'
      },
      faqs: []
    },
    {
      partNumber: 'IP3020',
      name: 'Fuel Gauge IC',
      shortDescription: 'High-precision battery fuel gauge with impedance tracking for accurate capacity estimation.',
      descriptionParagraphs: [
        'The IP3020 is a high-precision battery fuel gauge with impedance tracking.',
        'It provides accurate battery capacity estimation under various conditions.',
        'The IC supports multiple battery chemistries and configurations.'
      ],
      specifications: {
        'Cell Count': '1S-4S',
        'Accuracy': '±1%',
        'Interface': 'I2C',
        'Features': 'Impedance Track',
        'Package': 'QFN-24'
      },
      features: [
        'High accuracy fuel gauge',
        'Impedance tracking',
        'Multi-chemistry support',
        'Cycle count tracking',
        'Health monitoring',
        'I2C communication'
      ],
      applications: [
        'Smartphones',
        'Tablets',
        'Power banks',
        'Battery-powered equipment'
      ],
      faeReview: {
        author: 'David Chen',
        title: 'Senior FAE - Power Solutions',
        content: 'The IP3020 provides accurate battery monitoring essential for user experience. The impedance tracking ensures accuracy across battery lifetime.',
        highlight: 'Precise fuel gauging'
      },
      faqs: []
    }
  ]
};

// Add products to each category
productsData.categories.forEach(category => {
  if (!category.products) {
    category.products = [];
  }
  
  const needed = 4 - category.products.length;
  if (needed > 0 && newProducts[category.id]) {
    const productsToAdd = newProducts[category.id].slice(0, needed);
    category.products.push(...productsToAdd);
    console.log(`Added ${productsToAdd.length} products to ${category.name}`);
  }
});

// Add 5th article to support
const newArticle = {
  id: 'charger-thermal-design',
  title: 'Thermal Design Guidelines for Fast Chargers',
  slug: 'injoinic-charger-thermal-design',
  category: 'Application Design',
  tags: ['thermal design', 'fast charging', 'heat dissipation', 'charger design'],
  summary: 'Comprehensive thermal design guidelines for high-power fast chargers using Injoinic ICs, including heat sink selection and thermal management strategies.',
  author: {
    name: 'Michael Zhang',
    title: 'Thermal Design Engineer',
    bio: 'Michael specializes in thermal management for power electronics with over 10 years of experience in charger and adapter design.'
  },
  publishDate: '2024-05-20',
  lastUpdated: '2024-05-20',
  readTime: '12 min',
  content: {
    introduction: 'Thermal management is critical in high-power fast chargers. This guide covers thermal design principles and practical implementation.',
    sections: [
      {
        title: 'Heat Sources in Fast Chargers',
        content: 'Primary heat sources include: switching losses in power MOSFETs, conduction losses in traces and components, and core losses in magnetics.'
      },
      {
        title: 'Thermal Design Strategies',
        content: 'Key strategies include: optimizing PCB copper area for heat spreading, selecting appropriate heat sinks, and implementing thermal vias.'
      },
      {
        title: 'Component Placement',
        content: 'Place hot components away from temperature-sensitive parts. Use thermal isolation techniques when necessary.'
      }
    ],
    conclusion: 'Proper thermal design ensures reliable operation and long product lifetime. Always validate with thermal testing.'
  },
  faeInsights: {
    painPoints: 'Many designs fail thermal testing due to inadequate heat sinking or poor component placement',
    commonMistakes: 'Insufficient copper area, wrong heat sink selection, ignoring ambient temperature effects',
    keyConsiderations: 'Always design for worst-case conditions including maximum ambient temperature and minimum airflow',
    recommendations: 'Use thermal simulation tools early in design. Plan for thermal management from the start.'
  },
  customerCases: [
    {
      customer: 'Power Adapter Manufacturer',
      industry: 'Consumer Electronics',
      challenge: '65W charger exceeding temperature limits in compact enclosure',
      solution: 'Redesigned with optimized copper pours and added thermal interface material',
      feedback: 'Temperature reduced by 15°C, meeting all safety requirements'
    }
  ],
  faqs: [
    {
      question: 'How do I calculate required heat sink size?',
      answer: 'Calculate thermal resistance needed based on power dissipation, ambient temperature, and maximum allowed junction temperature.',
      decisionGuide: 'Use thermal resistance calculations or consult with thermal engineers for complex designs.',
      keywords: ['heat sink', 'thermal resistance', 'calculator']
    }
  ]
};

if (!supportData.articles) {
  supportData.articles = [];
}

if (supportData.articles.length < 5) {
  supportData.articles.push(newArticle);
  console.log('Added 1 new article to support');
}

// Save updated files
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));

console.log('\n=== After Fix ===');
console.log(`Products: ${productsData.categories.length} categories`);
productsData.categories.forEach(cat => {
  console.log(`  - ${cat.name}: ${cat.products ? cat.products.length : 0} products`);
});
console.log(`Solutions: ${solutionsData.solutions ? solutionsData.solutions.length : 0}`);
console.log(`Articles: ${supportData.articles ? supportData.articles.length : 0}`);
console.log('\nFix complete!');
