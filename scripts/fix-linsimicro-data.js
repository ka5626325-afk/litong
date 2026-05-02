#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'linsimicro');

// Read existing products
const productsPath = path.join(brandDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('=== Before Fix ===');
console.log(`Categories: ${productsData.categories.length}`);
productsData.categories.forEach(cat => {
  console.log(`  - ${cat.name}: ${cat.products ? cat.products.length : 0} products`);
});

// Add 2 more categories
const newCategories = [
  {
    id: 'sensor-interfaces',
    slug: 'sensor-interfaces',
    name: 'Sensor Interfaces',
    description: 'Precision operational amplifiers and instrumentation amplifiers for sensor signal conditioning and measurement applications.',
    longDescription: 'Linsimicro sensor interface ICs include precision operational amplifiers, instrumentation amplifiers, and comparators designed for accurate sensor signal conditioning. These devices offer low offset voltage, low noise, and high CMRR for reliable measurement in industrial and automotive environments.',
    parameters: ['Offset Voltage', 'Bandwidth', 'CMRR', 'Noise', 'Supply Range'],
    applications: ['Sensor Conditioning', 'Bridge Amplifiers', 'Current Sensing', 'Precision Measurement'],
    series: ['LSAxx', 'LSIxx', 'LSCxx'],
    selectionGuide: {
      title: 'Sensor Interface Selection Guide',
      description: 'Guide for selecting operational amplifiers and instrumentation amplifiers.',
      articleId: 'sensor-interface-selection',
      articleLink: '/linsimicro/support/sensor-interface-selection.html',
      link: '/linsimicro/support/sensor-interface-selection.html'
    },
    selectionGuideLink: {
      url: '/linsimicro/support/sensor-interface-selection.html',
      text: 'Sensor Interface Selection Guide'
    },
    faqs: [],
    products: [
      {
        partNumber: 'LSA8552',
        name: 'Precision Operational Amplifier',
        shortDescription: 'Low-noise precision op-amp with 5μV offset and wide bandwidth for sensor applications.',
        descriptionParagraphs: [
          'The LSA8552 is a precision operational amplifier designed for sensor signal conditioning.',
          'It features ultra-low offset voltage of 5μV and low noise density of 8nV/√Hz.',
          'The device operates from single or dual supplies and is ideal for bridge sensor applications.'
        ],
        specifications: {
          'Offset Voltage': '5μV (max)',
          'Bandwidth': '2.5MHz',
          'CMRR': '120dB',
          'Noise': '8nV/√Hz',
          'Supply Range': '2.7V to 5.5V',
          'Temperature Range': '-40°C to +125°C',
          'Package': 'SOT-23-5, MSOP-8'
        },
        features: ['Ultra-low offset voltage', 'Low noise', 'High CMRR', 'Rail-to-rail output', 'Low power consumption'],
        applications: ['Bridge sensors', 'Temperature sensors', 'Pressure sensors', 'Current sensing'],
        faeReview: { author: 'Michael Wang', title: 'FAE Manager', content: 'Excellent precision amplifier for sensor applications.', highlight: 'Ultra-low offset voltage' },
        faqs: []
      },
      {
        partNumber: 'LSI8221',
        name: 'Instrumentation Amplifier',
        shortDescription: 'High-precision instrumentation amplifier with programmable gain for differential sensor measurement.',
        descriptionParagraphs: [
          'The LSI8221 is a precision instrumentation amplifier optimized for differential sensor measurement.',
          'It offers programmable gain from 1 to 1000 and excellent CMRR of 120dB.',
          'The device is ideal for strain gauge, thermocouple, and bridge sensor applications.'
        ],
        specifications: {
          'Gain Range': '1 to 1000',
          'CMRR': '120dB',
          'Offset Voltage': '25μV',
          'Bandwidth': '1MHz (G=1)',
          'Supply Range': '2.7V to 36V',
          'Package': 'MSOP-8, SOIC-8'
        },
        features: ['Programmable gain', 'High CMRR', 'Low offset', 'Wide supply range', 'Low noise'],
        applications: ['Strain gauges', 'Thermocouples', 'Bridge sensors', 'Medical instruments'],
        faeReview: { author: 'Michael Wang', title: 'FAE Manager', content: 'Excellent instrumentation amplifier for precision measurement.', highlight: 'High CMRR instrumentation amp' },
        faqs: []
      },
      {
        partNumber: 'LSA321',
        name: 'Low-Power Op-Amp',
        shortDescription: 'Ultra-low power operational amplifier for battery-powered sensor applications.',
        descriptionParagraphs: [
          'The LSA321 is an ultra-low power operational amplifier designed for battery-powered applications.',
          'It consumes only 10μA supply current while maintaining good AC performance.',
          'The device is perfect for portable sensor systems and IoT devices.'
        ],
        specifications: {
          'Supply Current': '10μA',
          'Bandwidth': '350kHz',
          'Offset Voltage': '2mV',
          'CMRR': '80dB',
          'Supply Range': '1.8V to 5.5V',
          'Package': 'SOT-23-5, SC-70-5'
        },
        features: ['Ultra-low power', 'Low voltage operation', 'Rail-to-rail input/output', 'Small package'],
        applications: ['Battery-powered sensors', 'IoT devices', 'Portable instruments', 'Wearable devices'],
        faeReview: { author: 'Michael Wang', title: 'FAE Manager', content: 'Perfect for battery-powered applications requiring long life.', highlight: 'Ultra-low power consumption' },
        faqs: []
      },
      {
        partNumber: 'LSC339',
        name: 'High-Speed Comparator',
        shortDescription: 'Fast response comparator with 50ns propagation delay for high-speed signal detection.',
        descriptionParagraphs: [
          'The LSC339 is a high-speed comparator designed for fast signal detection applications.',
          'It features 50ns propagation delay and low power consumption.',
          'The device is ideal for zero-crossing detection, level sensing, and pulse shaping.'
        ],
        specifications: {
          'Propagation Delay': '50ns',
          'Supply Current': '200μA',
          'Input Offset': '5mV',
          'Output Type': 'Push-pull',
          'Supply Range': '2.7V to 5.5V',
          'Package': 'SOT-23-5, SC-70-5'
        },
        features: ['Fast response', 'Low power', 'Rail-to-rail input', 'Push-pull output', 'Small package'],
        applications: ['Zero-crossing detection', 'Level sensing', 'Pulse shaping', 'Window comparators'],
        faeReview: { author: 'Michael Wang', title: 'FAE Manager', content: 'Fast comparator for time-critical applications.', highlight: '50ns fast response' },
        faqs: []
      }
    ]
  },
  {
    id: 'interface-ics',
    slug: 'interface-ics',
    name: 'Interface ICs',
    description: 'Robust RS-485, CAN, and LIN transceivers for industrial and automotive communication networks.',
    longDescription: 'Linsimicro interface ICs provide reliable communication solutions for industrial and automotive networks. The portfolio includes RS-485/RS-422 transceivers for long-distance communication, CAN transceivers for automotive and industrial bus systems, and LIN transceivers for low-cost automotive networks.',
    parameters: ['Data Rate', 'ESD Protection', 'Isolation', 'Fault Protection', 'Temperature Range'],
    applications: ['Industrial Networks', 'Automotive Bus', 'Building Automation', 'Process Control'],
    series: ['LRSxx', 'LCNxx', 'LLNxx'],
    selectionGuide: {
      title: 'Interface IC Selection Guide',
      description: 'Guide for selecting RS-485, CAN, and LIN transceivers.',
      articleId: 'interface-ic-selection',
      articleLink: '/linsimicro/support/interface-ic-selection.html',
      link: '/linsimicro/support/interface-ic-selection.html'
    },
    selectionGuideLink: {
      url: '/linsimicro/support/interface-ic-selection.html',
      text: 'Interface IC Selection Guide'
    },
    faqs: [],
    products: [
      {
        partNumber: 'LRS485',
        name: 'RS-485 Transceiver',
        shortDescription: 'Half-duplex RS-485 transceiver with 20Mbps data rate and ±15kV ESD protection.',
        descriptionParagraphs: [
          'The LRS485 is a robust RS-485 transceiver designed for industrial communication networks.',
          'It supports data rates up to 20Mbps and features ±15kV ESD protection.',
          'The device includes fail-safe circuitry and thermal shutdown protection.'
        ],
        specifications: {
          'Data Rate': '20Mbps',
          'ESD Protection': '±15kV HBM',
          'Supply Voltage': '3.3V or 5V',
          'Bus Pins': '±7V fault protection',
          'Temperature Range': '-40°C to +125°C',
          'Package': 'SOIC-8, MSOP-8'
        },
        features: ['High data rate', 'Strong ESD protection', 'Fail-safe receiver', 'Thermal shutdown', 'Low power'],
        applications: ['Industrial networks', 'Building automation', 'Process control', 'Motor drives'],
        faeReview: { author: 'Michael Wang', title: 'FAE Manager', content: 'Reliable RS-485 transceiver for harsh industrial environments.', highlight: 'Robust ESD protection' },
        faqs: []
      },
      {
        partNumber: 'LCN1050',
        name: 'CAN Transceiver',
        shortDescription: 'ISO 11898-2 compliant CAN transceiver with 5Mbps FD support and low EMI.',
        descriptionParagraphs: [
          'The LCN1050 is a high-performance CAN transceiver supporting both classic CAN and CAN FD.',
          'It offers data rates up to 5Mbps for CAN FD applications.',
          'The device features excellent EMI performance and bus fault protection.'
        ],
        specifications: {
          'CAN Standard': 'ISO 11898-2',
          'Data Rate': '5Mbps (CAN FD)',
          'Supply Voltage': '5V',
          'Bus Fault': '±58V protection',
          'Temperature Range': '-40°C to +150°C',
          'Package': 'SOIC-8, DFN-8'
        },
        features: ['CAN FD support', 'High bus fault protection', 'Low EMI', 'AEC-Q100 qualified', 'Standby mode'],
        applications: ['Automotive networks', 'Industrial CAN bus', 'EV charging', 'Battery management'],
        faeReview: { author: 'Michael Wang', title: 'FAE Manager', content: 'Excellent CAN transceiver for automotive applications.', highlight: 'CAN FD with high fault protection' },
        faqs: []
      },
      {
        partNumber: 'LLN1021',
        name: 'LIN Transceiver',
        shortDescription: 'LIN 2.2A/SAE J2602 compliant transceiver for automotive body electronics.',
        descriptionParagraphs: [
          'The LLN1021 is a LIN transceiver compliant with LIN 2.2A and SAE J2602 standards.',
          'It is designed for low-cost automotive body electronics applications.',
          'The device features low power consumption and excellent EMC performance.'
        ],
        specifications: {
          'LIN Standard': 'LIN 2.2A, SAE J2602',
          'Data Rate': '20kbps',
          'Supply Voltage': '5V to 27V',
          'Sleep Current': '10μA',
          'Temperature Range': '-40°C to +150°C',
          'Package': 'SOIC-8, DFN-8'
        },
        features: ['LIN 2.2A compliant', 'Low power sleep mode', 'AEC-Q100 qualified', 'High EMC immunity', 'Overtemperature protection'],
        applications: ['Door modules', 'Seat control', 'Lighting control', 'Climate control'],
        faeReview: { author: 'Michael Wang', title: 'FAE Manager', content: 'Cost-effective LIN solution for automotive body electronics.', highlight: 'Low-cost LIN transceiver' },
        faqs: []
      },
      {
        partNumber: 'LRS422',
        name: 'RS-422 Transceiver',
        shortDescription: 'Full-duplex RS-422 transceiver with 10Mbps data rate for point-to-point communication.',
        descriptionParagraphs: [
          'The LRS422 is a full-duplex RS-422 transceiver for high-speed point-to-point communication.',
          'It supports data rates up to 10Mbps with long cable runs.',
          'The device is ideal for industrial control and data acquisition systems.'
        ],
        specifications: {
          'Data Rate': '10Mbps',
          'ESD Protection': '±8kV HBM',
          'Supply Voltage': '5V',
          'Driver Output': '±2V min',
          'Temperature Range': '-40°C to +85°C',
          'Package': 'SOIC-8, DIP-8'
        },
        features: ['Full-duplex operation', 'High data rate', 'Long cable support', 'Fail-safe receiver', 'Low power'],
        applications: ['Data acquisition', 'Industrial control', 'Point-to-point links', 'Clock distribution'],
        faeReview: { author: 'Michael Wang', title: 'FAE Manager', content: 'Reliable RS-422 transceiver for high-speed communication.', highlight: 'Full-duplex high-speed' },
        faqs: []
      }
    ]
  }
];

productsData.categories.push(...newCategories);

// Save updated products
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log(`\nAdded 2 new categories`);

// Create solutions.json
const solutionsData = {
  seoTitle: 'Linsimicro Solutions - Industrial & Automotive Applications | LiTong',
  seoDescription: 'Explore Linsimicro application solutions for industrial automation, automotive electronics, sensor systems, and communication networks.',
  seoKeywords: ['Linsimicro solutions', 'industrial automation', 'automotive electronics', 'sensor systems'],
  faqs: [
    {
      question: 'What application solutions does Linsimicro provide?',
      answer: 'Linsimicro provides solutions for industrial automation, automotive electronics, sensor systems, and communication networks.',
      decisionGuide: 'Browse our solution categories to find the right application for your project.',
      keywords: ['solutions', 'applications', 'industrial', 'automotive']
    }
  ],
  solutions: [
    {
      id: 'industrial-data-acquisition',
      title: 'Industrial Data Acquisition System',
      slug: 'industrial-data-acquisition',
      summary: 'Complete data acquisition solution using Linsimicro high-precision ADCs and signal conditioning for industrial monitoring.',
      description: 'This solution demonstrates a multi-channel industrial data acquisition system using Linsimicro precision ADCs and instrumentation amplifiers.',
      industry: 'Industrial Automation',
      applications: ['Process Monitoring', 'Quality Control', 'Equipment Health'],
      components: ['LSC1604', 'LSI8221', 'LSA8552'],
      features: ['16-bit precision', 'Multi-channel', 'Isolated inputs'],
      benefits: ['High accuracy', 'Reliable operation', 'Easy integration']
    },
    {
      id: 'automotive-battery-management',
      title: 'Automotive Battery Management System',
      slug: 'automotive-battery-management',
      summary: 'AEC-Q100 qualified BMS solution for electric vehicles using Linsimicro data converters and interface ICs.',
      description: 'Complete battery management solution for EV applications with cell monitoring, balancing, and communication.',
      industry: 'Automotive Electronics',
      applications: ['EV Battery Packs', 'Hybrid Vehicles', 'Energy Storage'],
      components: ['LSC1604', 'LCN1050', 'LSA321'],
      features: ['AEC-Q100 qualified', 'High voltage monitoring', 'CAN communication'],
      benefits: ['Automotive grade', 'High reliability', 'ISO 26262 ready']
    },
    {
      id: 'industrial-communication-network',
      title: 'Industrial Communication Network',
      slug: 'industrial-communication-network',
      summary: 'Robust RS-485 and CAN network solution for factory automation and process control.',
      description: 'Industrial communication solution featuring robust transceivers for reliable data transmission in harsh environments.',
      industry: 'Industrial Automation',
      applications: ['Factory Automation', 'Process Control', 'Building Management'],
      components: ['LRS485', 'LCN1050', 'LRS422'],
      features: ['High EMC immunity', 'Long distance', 'Multi-node support'],
      benefits: ['Reliable communication', 'Easy installation', 'Low maintenance']
    }
  ]
};

const solutionsPath = path.join(brandDir, 'solutions.json');
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('Created solutions.json with 3 solutions');

// Create support.json
const supportData = {
  seoTitle: 'Linsimicro Technical Support - Analog & Mixed-Signal Resources | LiTong',
  seoDescription: 'Access Linsimicro technical documentation, application notes, selection guides, and expert FAE support.',
  seoKeywords: ['Linsimicro support', 'technical documentation', 'application notes', 'FAE support'],
  faqs: [
    {
      question: 'What technical support does LiTong provide for Linsimicro products?',
      answer: 'LiTong provides comprehensive technical support including reference designs, application notes, schematic review, and FAE assistance.',
      decisionGuide: 'Contact our FAE team for personalized technical support.',
      keywords: ['technical support', 'FAE', 'design assistance']
    }
  ],
  articles: [
    {
      id: 'data-converter-selection',
      title: 'Data Converter Selection Guide',
      slug: 'data-converter-selection',
      category: 'Product Selection',
      tags: ['ADC', 'DAC', 'selection guide', 'data converter'],
      summary: 'Comprehensive guide for selecting the right data converter based on resolution, speed, and application requirements.',
      author: { name: 'Michael Wang', title: 'FAE Manager', bio: 'Michael has extensive experience in analog and mixed-signal design.' },
      publishDate: '2024-01-15',
      content: { introduction: 'Selecting the right data converter is critical for system performance.', sections: [] },
      faeInsights: { painPoints: 'Customers often struggle with ADC/DAC selection', commonMistakes: 'Choosing wrong architecture for application', keyConsiderations: 'Resolution, speed, and power requirements', recommendations: 'Define requirements before selection' },
      customerCases: [],
      faqs: []
    },
    {
      id: 'power-management-design',
      title: 'Power Management Design Guide',
      slug: 'power-management-design',
      category: 'Application Design',
      tags: ['power management', 'DC-DC', 'LDO', 'design guide'],
      summary: 'Practical guide for designing efficient power management systems using Linsimicro DC-DC converters and LDOs.',
      author: { name: 'David Chen', title: 'Power Applications Engineer', bio: 'David specializes in power electronics design.' },
      publishDate: '2024-02-01',
      content: { introduction: 'Proper power management design ensures system reliability.', sections: [] },
      faeInsights: { painPoints: 'Thermal management in compact designs', commonMistakes: 'Inadequate input/output capacitance', keyConsiderations: 'Efficiency, thermal, and EMI requirements', recommendations: 'Follow reference designs closely' },
      customerCases: [],
      faqs: []
    },
    {
      id: 'sensor-interface-selection',
      title: 'Sensor Interface Selection Guide',
      slug: 'sensor-interface-selection',
      category: 'Product Selection',
      tags: ['sensor', 'op-amp', 'instrumentation amplifier', 'signal conditioning'],
      summary: 'Guide for selecting operational amplifiers and instrumentation amplifiers for sensor signal conditioning.',
      author: { name: 'Michael Wang', title: 'FAE Manager', bio: 'Michael has extensive experience in analog design.' },
      publishDate: '2024-02-15',
      content: { introduction: 'Proper sensor interface selection ensures accurate measurement.', sections: [] },
      faeInsights: { painPoints: 'Offset and noise in precision applications', commonMistakes: 'Ignoring CMRR requirements', keyConsiderations: 'Offset, noise, and bandwidth', recommendations: 'Match amplifier to sensor type' },
      customerCases: [],
      faqs: []
    },
    {
      id: 'interface-ic-selection',
      title: 'Interface IC Selection Guide',
      slug: 'interface-ic-selection',
      category: 'Product Selection',
      tags: ['RS-485', 'CAN', 'LIN', 'interface', 'transceiver'],
      summary: 'Guide for selecting RS-485, CAN, and LIN transceivers for industrial and automotive communication.',
      author: { name: 'Michael Wang', title: 'FAE Manager', bio: 'Michael has extensive experience in industrial communication.' },
      publishDate: '2024-03-01',
      content: { introduction: 'Selecting the right interface IC ensures reliable communication.', sections: [] },
      faeInsights: { painPoints: 'EMC issues in industrial environments', commonMistakes: 'Insufficient ESD protection', keyConsiderations: 'Data rate, distance, and environment', recommendations: 'Choose based on application requirements' },
      customerCases: [],
      faqs: []
    },
    {
      id: 'automotive-design-guidelines',
      title: 'Automotive Design Guidelines',
      slug: 'automotive-design-guidelines',
      category: 'Application Design',
      tags: ['automotive', 'AEC-Q100', 'design guidelines', 'reliability'],
      summary: 'Comprehensive guidelines for designing automotive electronics using AEC-Q100 qualified Linsimicro components.',
      author: { name: 'David Chen', title: 'Automotive Applications Engineer', bio: 'David specializes in automotive electronics design.' },
      publishDate: '2024-03-15',
      content: { introduction: 'Automotive design requires special consideration for reliability and safety.', sections: [] },
      faeInsights: { painPoints: 'Meeting automotive qualification requirements', commonMistakes: 'Ignoring temperature derating', keyConsiderations: 'AEC-Q100, ISO 26262, and reliability', recommendations: 'Use qualified components and follow standards' },
      customerCases: [],
      faqs: []
    }
  ]
};

const supportPath = path.join(brandDir, 'support.json');
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('Created support.json with 5 articles');

console.log('\n=== After Fix ===');
console.log(`Categories: ${productsData.categories.length}`);
productsData.categories.forEach(cat => {
  console.log(`  - ${cat.name}: ${cat.products ? cat.products.length : 0} products`);
});
console.log(`Solutions: ${solutionsData.solutions.length}`);
console.log(`Articles: ${supportData.articles.length}`);
console.log('\nFix complete!');
