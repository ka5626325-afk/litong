#!/usr/bin/env node
/**
 * 为joulwatt products.json添加产品到正确的分类
 */

const fs = require('fs');
const path = require('path');

// 读取文件
const productsPath = path.join(__dirname, '..', 'data', 'joulwatt', 'products.json');
const data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 要添加的新产品
const newProducts = {
  'ac-dc': [
    {
      partNumber: 'JW1515',
      name: 'JW1515 High-Voltage Buck Converter',
      category: 'AC-DC Converters',
      shortDescription: 'Non-isolated high-voltage buck converter with integrated 700V MOSFET for direct AC-DC conversion up to 15W',
      descriptionParagraphs: [
        'The JW1515 is a non-isolated high-voltage buck converter with integrated 700V power MOSFET, designed for direct AC-DC conversion without transformer. It supports output power up to 15W with excellent efficiency and minimal external components.',
        'The device operates in boundary conduction mode (BCM) with valley switching to minimize switching losses and EMI. The integrated high-voltage startup circuit eliminates external startup resistors, reducing standby power consumption to less than 30mW.',
        'Comprehensive protection features include over-voltage protection, over-current protection, overload protection with hiccup mode, and thermal shutdown. The JW1515 is ideal for non-isolated auxiliary power supplies, smart home devices, and IoT applications.'
      ],
      specifications: {
        'Input Voltage Range': '85VAC - 305VAC',
        'Output Power': 'Up to 15W',
        'Integrated MOSFET': '700V, 1.5A',
        'Efficiency': 'Up to 92%',
        'Switching Frequency': 'Variable up to 100kHz',
        'Standby Power': '<30mW',
        'Operating Temperature': '-40°C to +85°C',
        'Package': 'SOP-7'
      },
      features: [
        'Integrated 700V power MOSFET',
        'Non-isolated buck topology',
        'Boundary conduction mode with valley switching',
        'Integrated high-voltage startup',
        'Low standby power <30mW',
        'Comprehensive protection features',
        'Minimal external components',
        'Compact SOP-7 package'
      ],
      applications: [
        'Non-isolated auxiliary power supplies',
        'Smart home devices',
        'IoT applications',
        'Home appliances standby power',
        'LED drivers'
      ],
      faeReview: {
        author: 'Dr. Michael Chen',
        title: 'Senior FAE - Power Systems',
        content: 'The JW1515 is an excellent choice for non-isolated AC-DC applications where transformer cost and size are concerns. The integrated 700V MOSFET and high-voltage startup circuit minimize external component count significantly.',
        highlight: 'Non-isolated high-voltage buck with integrated 700V MOSFET'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: []
    },
    {
      partNumber: 'JW1560',
      name: 'JW1560 Active Clamp Flyback Controller',
      category: 'AC-DC Converters',
      shortDescription: 'High-efficiency active clamp flyback controller with integrated high-side driver for power supplies up to 100W',
      descriptionParagraphs: [
        'The JW1560 is a high-performance active clamp flyback controller designed for high-efficiency offline power supplies up to 100W.',
        'The device includes integrated high-side and low-side gate drivers for the main and clamp MOSFETs.',
        'Comprehensive protection features include over-voltage protection, over-current protection with cycle-by-cycle limiting, overload protection, and thermal shutdown.'
      ],
      specifications: {
        'Input Voltage Range': '90VAC - 264VAC',
        'Output Power': 'Up to 100W',
        'Switching Frequency': '100kHz - 500kHz programmable',
        'Efficiency': 'Up to 94%',
        'Standby Power': '<100mW',
        'Operating Temperature': '-40°C to +125°C',
        'Package': 'SOIC-16'
      },
      features: [
        'Active clamp reset for high efficiency',
        'Integrated high-side and low-side drivers',
        'Adaptive dead-time control',
        'CCM and DCM operation modes',
        'Frequency dithering for EMI reduction'
      ],
      applications: [
        'High-efficiency power adapters',
        'Gaming power supplies',
        'Industrial auxiliary power',
        'Telecom power supplies'
      ],
      faeReview: {
        author: 'Dr. Michael Chen',
        title: 'Senior FAE - Power Systems',
        content: 'The JW1560 represents advanced AC-DC controller technology for high-power applications.',
        highlight: 'Advanced active clamp flyback controller'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: []
    }
  ],
  'dc-dc': [
    {
      partNumber: 'JW5040',
      name: 'JW5040 Wide Input Buck Converter',
      category: 'DC-DC Converters',
      shortDescription: '4A synchronous buck converter with 4.5V-36V input for industrial and automotive applications',
      descriptionParagraphs: [
        'The JW5040 is a high-efficiency synchronous buck converter with wide input voltage range from 4.5V to 36V.',
        'The device features peak current mode control for fast transient response and simple loop compensation.',
        'Protection features include input UVLO, output OVP, cycle-by-cycle current limit, short-circuit protection with hiccup mode, and thermal shutdown.'
      ],
      specifications: {
        'Input Voltage Range': '4.5V - 36V',
        'Output Voltage Range': '0.8V - 32V',
        'Output Current': '4A max',
        'Efficiency': 'Up to 95%',
        'Switching Frequency': '200kHz - 2MHz',
        'Operating Temperature': '-40°C to +125°C',
        'Package': 'QFN-20 EP'
      },
      features: [
        'Wide 4.5V to 36V input range',
        '4A continuous output current',
        'Peak current mode control',
        'Programmable 200kHz-2MHz frequency'
      ],
      applications: [
        'Industrial control systems',
        'Automotive electronics',
        'Battery-powered equipment'
      ],
      faeReview: {
        author: 'Steven Wang',
        title: 'FAE - Power Management',
        content: 'The JW5040 is an excellent general-purpose buck converter for industrial applications.',
        highlight: 'Wide input range buck converter with 4A output'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: []
    },
    {
      partNumber: 'JW5070',
      name: 'JW5070 Synchronous Boost Converter',
      category: 'DC-DC Converters',
      shortDescription: '5A synchronous boost converter with 2.5V-24V input for battery-powered applications',
      descriptionParagraphs: [
        'The JW5070 is a high-efficiency synchronous boost converter designed for battery-powered applications.',
        'The device features current-mode control for excellent transient response.',
        'Protection features include input UVLO, output OVP, cycle-by-cycle current limit, thermal shutdown, and true shutdown mode.'
      ],
      specifications: {
        'Input Voltage Range': '2.5V - 24V',
        'Output Voltage Range': 'Up to 28V',
        'Switch Current': '5A max',
        'Efficiency': 'Up to 96%',
        'Quiescent Current': '<1µA in shutdown',
        'Operating Temperature': '-40°C to +125°C',
        'Package': 'QFN-20 EP'
      },
      features: [
        'Wide 2.5V to 24V input range',
        '5A switch current capability',
        'Synchronous rectification',
        'True shutdown mode <1µA'
      ],
      applications: [
        'Battery-powered devices',
        'Portable electronics',
        'LED backlight drivers'
      ],
      faeReview: {
        author: 'Steven Wang',
        title: 'FAE - Power Management',
        content: 'The JW5070 is a versatile boost converter for battery-powered applications.',
        highlight: 'High-efficiency boost converter with 5A switch current'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: []
    }
  ],
  'ldo': [
    {
      partNumber: 'JW5250',
      name: 'JW5250 Ultra-Low Noise LDO',
      category: 'LDO Regulators',
      shortDescription: 'Ultra-low noise LDO with 500mA output, 6µVRMS noise, and high PSRR',
      descriptionParagraphs: [
        'The JW5250 is an ultra-low noise LDO regulator designed for noise-sensitive applications.',
        'The device features excellent PSRR of 90dB at 1kHz and 70dB at 1MHz.',
        'The LDO includes current limit protection, thermal shutdown, and reverse current protection.'
      ],
      specifications: {
        'Input Voltage Range': '2.2V - 5.5V',
        'Output Voltage': '1.0V - 3.6V',
        'Output Current': '500mA max',
        'Dropout Voltage': '200mV @ 500mA',
        'Output Noise': '6µVRMS',
        'PSRR': '90dB @ 1kHz',
        'Quiescent Current': '50µA'
      },
      features: [
        'Ultra-low 6µVRMS output noise',
        'Excellent 90dB PSRR',
        '500mA output current',
        'Low 200mV dropout voltage'
      ],
      applications: [
        'RF and wireless circuits',
        'Precision ADC/DAC power',
        'Clock generators'
      ],
      faeReview: {
        author: 'Dr. Sarah Chen',
        title: 'Senior FAE - Analog Power',
        content: 'The JW5250 is an exceptional LDO for noise-sensitive applications.',
        highlight: 'Ultra-low noise LDO with 6µVRMS noise'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: []
    },
    {
      partNumber: 'JW5210',
      name: 'JW5210 Ultra-Low Iq LDO',
      category: 'LDO Regulators',
      shortDescription: 'Ultra-low quiescent current LDO with 200mA output and 1µA Iq',
      descriptionParagraphs: [
        'The JW5210 is an ultra-low quiescent current LDO designed for battery-powered applications.',
        'It consumes only 1µA quiescent current while delivering up to 200mA output current.',
        'Protection features include current limit, thermal shutdown, and reverse battery protection.'
      ],
      specifications: {
        'Input Voltage Range': '2V - 5.5V',
        'Output Voltage': '1.2V - 3.3V',
        'Output Current': '200mA max',
        'Dropout Voltage': '250mV @ 200mA',
        'Quiescent Current': '1µA',
        'Shutdown Current': '<0.1µA'
      },
      features: [
        'Ultra-low 1µA quiescent current',
        '200mA output current',
        'True shutdown mode',
        'Reverse battery protection'
      ],
      applications: [
        'Battery-powered devices',
        'IoT sensors',
        'Wearable electronics'
      ],
      faeReview: {
        author: 'Dr. Sarah Chen',
        title: 'Senior FAE - Analog Power',
        content: 'The JW5210 is an excellent choice for battery-powered applications.',
        highlight: 'Ultra-low 1µA quiescent current LDO'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: []
    }
  ],
  'gate-driver': [
    {
      partNumber: 'JW5130',
      name: 'JW5130 Dual Low-Side Driver',
      category: 'Gate Drivers',
      shortDescription: 'Dual channel low-side gate driver with 6A peak current for synchronous buck converters',
      descriptionParagraphs: [
        'The JW5130 is a dual channel low-side gate driver designed for synchronous buck converters.',
        'It provides 6A peak source and sink current per channel.',
        'The driver features independent inputs with excellent propagation delay matching.'
      ],
      specifications: {
        'Peak Source Current': '6A per channel',
        'Peak Sink Current': '6A per channel',
        'Supply Voltage Range': '4.5V - 20V',
        'Propagation Delay': '20ns',
        'Delay Matching': '5ns between channels'
      },
      features: [
        'Dual independent channels',
        '6A peak source/sink current',
        'Excellent delay matching',
        'Fast propagation delay'
      ],
      applications: [
        'Synchronous buck converters',
        'Dual switch forward converters',
        'Motor drive H-bridges'
      ],
      faeReview: {
        author: 'Steven Wang',
        title: 'FAE - Power Management',
        content: 'The JW5130 is an excellent dual gate driver for synchronous buck applications.',
        highlight: 'Dual 6A gate driver with excellent delay matching'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: []
    },
    {
      partNumber: 'JW5140',
      name: 'JW5140 High-Speed MOSFET Driver',
      category: 'Gate Drivers',
      shortDescription: 'High-speed single channel MOSFET driver with 9A peak current',
      descriptionParagraphs: [
        'The JW5140 is a high-speed single channel MOSFET driver for high-power applications.',
        'It provides 9A peak source and sink current.',
        'The driver features fast propagation delay and enable function.'
      ],
      specifications: {
        'Peak Source Current': '9A',
        'Peak Sink Current': '9A',
        'Supply Voltage Range': '4.5V - 20V',
        'Propagation Delay': '15ns',
        'Enable Input': 'Active high'
      },
      features: [
        'High 9A peak current',
        'Ultra-fast 15ns delay',
        'Enable pin for power control',
        'Split outputs for speed control'
      ],
      applications: [
        'High-power DC-DC converters',
        'Motor drives',
        'Welding equipment'
      ],
      faeReview: {
        author: 'Steven Wang',
        title: 'FAE - Power Management',
        content: 'The JW5140 is a powerhouse gate driver for high-power applications.',
        highlight: 'High-current 9A gate driver'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: []
    }
  ]
};

// 为每个分类添加新产品
data.categories.forEach(cat => {
  const productsToAdd = newProducts[cat.id];
  if (productsToAdd && productsToAdd.length > 0) {
    console.log(`Adding ${productsToAdd.length} products to ${cat.id}`);
    cat.products.push(...productsToAdd);
    console.log(`  ${cat.id} now has ${cat.products.length} products`);
  }
});

// 写回文件
fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
console.log('\nProducts added successfully!');
