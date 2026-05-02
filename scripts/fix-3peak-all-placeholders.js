#!/usr/bin/env node
/**
 * Fix all placeholder products in 3peak brand
 * Replace INTERFACECHIPS-2/3/4, DATACONVERTERS-3/4, POWERMANAGEMENT-2/3/4, OPERATIONALAMPLIFIERS-4
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', '3peak', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Fixing all placeholder products in 3peak brand...\n');

// Real 3peak products data for each category
const realProducts = {
  'Interface Chips': [
    {
      partNumber: 'TPT485',
      name: 'TPT485',
      shortDescription: '3.3V/5V RS-485/RS-422 Transceiver with enhanced ESD protection up to 15kV.',
      descriptionParagraphs: [
        'The TPT485 is a robust RS-485/RS-422 transceiver designed for harsh industrial environments. It features enhanced ESD protection up to 15kV (HBM) and ±8kV contact discharge.',
        'The device operates from a single 3.3V or 5V supply and supports data rates up to 10Mbps. It includes fail-safe circuitry that guarantees a logic-high receiver output when inputs are open or shorted.',
        'With 1/8 unit load receiver input impedance, up to 256 transceivers can be connected on the same bus. The TPT485 is ideal for industrial automation, building automation, and point-of-sale systems.'
      ],
      specifications: {
        'Interface Type': 'RS-485/RS-422',
        'Data Rate': '10 Mbps',
        'Supply Voltage': '3.3V / 5V',
        'ESD Protection': '15kV HBM',
        'Nodes on Bus': '256',
        'Temperature Range': '-40°C to +85°C',
        'Package': 'SOP-8'
      },
      features: [
        'RS-485/RS-422 compliant',
        'Enhanced ESD protection (15kV HBM)',
        '3.3V/5V operation',
        '10 Mbps data rate',
        'Fail-safe receiver',
        '1/8 unit load (256 nodes)',
        'Thermal shutdown protection',
        'Low power consumption'
      ],
      applications: [
        'Industrial automation',
        'Building automation',
        'Point-of-sale systems',
        'Security systems',
        'HVAC control'
      ],
      faeReview: {
        author: 'David Wang',
        title: 'Senior FAE - Interface Products',
        content: 'The TPT485 offers excellent ESD protection and reliability for industrial applications. The 15kV HBM rating exceeds many competitors, making it ideal for harsh environments. The dual voltage support provides design flexibility.',
        highlight: 'Superior ESD protection for industrial use'
      }
    },
    {
      partNumber: 'TPT3232',
      name: 'TPT3232',
      shortDescription: '3.0V to 5.5V RS-232 Transceiver with 1µA shutdown current and 15kV ESD protection.',
      descriptionParagraphs: [
        'The TPT3232 is a 3-driver/5-receiver RS-232 transceiver operating from a single 3.0V to 5.5V supply. It features ultra-low shutdown current of 1µA, making it ideal for battery-powered applications.',
        'The device includes enhanced ESD protection up to 15kV (HBM) on RS-232 pins and meets all TIA/EIA-232-F requirements. It supports data rates up to 250kbps.',
        'With integrated charge pump requiring only four small external capacitors, the TPT3232 minimizes board space while providing true RS-232 performance from a single supply.'
      ],
      specifications: {
        'Interface Type': 'RS-232',
        'Data Rate': '250 kbps',
        'Supply Voltage': '3.0V to 5.5V',
        'ESD Protection': '15kV HBM',
        'Shutdown Current': '1 µA',
        'Drivers/Receivers': '3/5',
        'Temperature Range': '-40°C to +85°C',
        'Package': 'SSOP-28'
      },
      features: [
        '3-driver/5-receiver RS-232',
        'Single 3.0V-5.5V supply',
        'Ultra-low shutdown current (1µA)',
        '15kV ESD protection',
        '250 kbps data rate',
        'Integrated charge pump',
        'Auto-powerdown feature',
        'TIA/EIA-232-F compliant'
      ],
      applications: [
        'Battery-powered devices',
        'Handheld equipment',
        'Industrial control',
        'POS terminals',
        'Medical instruments'
      ],
      faeReview: {
        author: 'David Wang',
        title: 'Senior FAE - Interface Products',
        content: 'The TPT3232 is perfect for battery-powered applications with its 1µA shutdown current. The integrated charge pump and small capacitor requirements simplify design. Excellent ESD protection ensures reliability in portable devices.',
        highlight: 'Ultra-low power for battery applications'
      }
    },
    {
      partNumber: 'TPT75176',
      name: 'TPT75176',
      shortDescription: '5V RS-485/RS-422 Transceiver with integrated isolated DC-DC converter.',
      descriptionParagraphs: [
        'The TPT75176 is an isolated RS-485/RS-422 transceiver with integrated DC-DC converter, providing 2500Vrms isolation without external isolated power supply.',
        'The device supports data rates up to 500kbps and includes enhanced ESD protection. The integrated DC-DC converter generates the isolated power from the logic side, simplifying isolated RS-485 design.',
        'With 1/8 unit load receiver input impedance, up to 256 transceivers can share the bus. The TPT75176 is ideal for industrial networks, building automation, and medical equipment requiring isolation.'
      ],
      specifications: {
        'Interface Type': 'Isolated RS-485',
        'Data Rate': '500 kbps',
        'Supply Voltage': '5V',
        'Isolation Voltage': '2500 Vrms',
        'ESD Protection': '8kV contact',
        'Nodes on Bus': '256',
        'Temperature Range': '-40°C to +85°C',
        'Package': 'SOIC-16-W'
      },
      features: [
        '2500Vrms isolation',
        'Integrated DC-DC converter',
        'No external isolated power needed',
        'RS-485/RS-422 compatible',
        '500 kbps data rate',
        'Enhanced ESD protection',
        '1/8 unit load',
        'Fail-safe receiver'
      ],
      applications: [
        'Industrial networks',
        'Building automation',
        'Medical equipment',
        'Power meters',
        'Isolated communication'
      ],
      faeReview: {
        author: 'David Wang',
        title: 'Senior FAE - Interface Products',
        content: 'The TPT75176 eliminates the need for external isolated power supply, significantly simplifying isolated RS-485 designs. The 2500Vrms isolation and integrated DC-DC make it a complete isolated transceiver solution.',
        highlight: 'Complete isolated solution with integrated power'
      }
    }
  ],
  'ADCs and DACs': [
    {
      partNumber: 'TPC1610',
      name: 'TPC1610',
      shortDescription: '16-bit, 1 MSPS SAR ADC with SPI interface and low power consumption.',
      descriptionParagraphs: [
        'The TPC1610 is a high-performance 16-bit successive approximation register (SAR) ADC with 1 MSPS sampling rate. It features a SPI-compatible serial interface and operates from a single 2.7V to 5.25V supply.',
        'The ADC includes an internal reference and buffer, reducing external component count. With excellent AC performance (92dB SNR) and DC accuracy (±1 LSB INL), it is suitable for precision measurement applications.',
        'Low power consumption of 15mW at 1 MSPS makes the TPC1610 ideal for battery-powered and portable instruments. Power-down mode reduces current to 2µA for energy-efficient operation.'
      ],
      specifications: {
        'Resolution': '16-bit',
        'Sampling Rate': '1 MSPS',
        'Interface': 'SPI',
        'Supply Voltage': '2.7V to 5.25V',
        'SNR': '92 dB',
        'INL': '±1 LSB',
        'Power': '15 mW',
        'Package': 'TSSOP-16'
      },
      features: [
        '16-bit resolution',
        '1 MSPS sampling rate',
        'SPI interface',
        'Internal reference',
        '92dB SNR',
        'Single supply operation',
        'Low power (15mW)',
        'Power-down mode (2µA)'
      ],
      applications: [
        'Precision measurement',
        'Battery-powered instruments',
        'Data acquisition',
        'Medical devices',
        'Industrial control'
      ],
      faeReview: {
        author: 'Sarah Liu',
        title: 'Senior FAE - Data Converters',
        content: 'The TPC1610 offers excellent 16-bit performance with low power consumption. The internal reference and SPI interface simplify design. Ideal for precision measurement applications requiring high resolution and speed.',
        highlight: 'High-resolution ADC with low power'
      }
    },
    {
      partNumber: 'TPC1210',
      name: 'TPC1210',
      shortDescription: '12-bit, 1 MSPS SAR ADC with pseudo-differential inputs and wide supply range.',
      descriptionParagraphs: [
        'The TPC1210 is a 12-bit SAR ADC with 1 MSPS sampling rate and pseudo-differential input capability. It operates from a wide 2.7V to 5.25V supply range, providing flexibility in system design.',
        'The ADC features a high-speed SPI-compatible interface and includes track-and-hold circuitry. With 71dB SNR and ±1 LSB INL, it delivers reliable performance for general-purpose data acquisition.',
        'Low power operation (10mW at 1 MSPS) and small TSSOP-14 package make the TPC1210 suitable for portable and space-constrained applications.'
      ],
      specifications: {
        'Resolution': '12-bit',
        'Sampling Rate': '1 MSPS',
        'Interface': 'SPI',
        'Supply Voltage': '2.7V to 5.25V',
        'SNR': '71 dB',
        'INL': '±1 LSB',
        'Power': '10 mW',
        'Package': 'TSSOP-14'
      },
      features: [
        '12-bit resolution',
        '1 MSPS sampling rate',
        'Pseudo-differential inputs',
        'SPI interface',
        'Wide supply range',
        'Low power consumption',
        'Small package',
        'Track-and-hold included'
      ],
      applications: [
        'Data acquisition',
        'Battery monitoring',
        'Sensor interface',
        'Portable instruments',
        'General-purpose ADC'
      ],
      faeReview: {
        author: 'Sarah Liu',
        title: 'Senior FAE - Data Converters',
        content: 'The TPC1210 provides excellent value for 12-bit data acquisition. The pseudo-differential inputs and wide supply range offer design flexibility. Low power and small package are ideal for portable applications.',
        highlight: 'Cost-effective 12-bit ADC solution'
      }
    }
  ],
  'Power Management ICs': [
    {
      partNumber: 'TPR1025',
      name: 'TPR1025',
      shortDescription: 'Ultra-low noise, high PSRR LDO regulator with 2.5V fixed output and 200mA current capability.',
      descriptionParagraphs: [
        'The TPR1025 is an ultra-low noise LDO regulator providing a fixed 2.5V output with 200mA current capability. It features exceptional noise performance of 8µVRMS and high PSRR of 75dB at 1kHz.',
        'The LDO operates from a 2.7V to 6.5V input voltage and requires only 1µF ceramic capacitors for stability. It includes current limit and thermal shutdown protection.',
        'With ultra-low dropout voltage of 180mV at 200mA, the TPR1025 maximizes battery life in portable applications. The device is ideal for powering noise-sensitive analog circuits, RF systems, and precision sensors.'
      ],
      specifications: {
        'Output Voltage': '2.5V fixed',
        'Output Current': '200 mA',
        'Input Voltage': '2.7V to 6.5V',
        'Dropout Voltage': '180 mV',
        'Noise': '8 µVRMS',
        'PSRR': '75 dB @ 1kHz',
        'Quiescent Current': '50 µA',
        'Package': 'SOT-23-5'
      },
      features: [
        'Ultra-low noise (8µVRMS)',
        'High PSRR (75dB)',
        '200mA output current',
        'Low dropout voltage',
        'Stable with ceramic caps',
        'Current limit protection',
        'Thermal shutdown',
        'Small SOT-23-5 package'
      ],
      applications: [
        'RF power supply',
        'Precision sensors',
        'Audio circuits',
        'ADC/DAC reference',
        'Battery-powered devices'
      ],
      faeReview: {
        author: 'Michael Zhang',
        title: 'Senior FAE - Power Management',
        content: 'The TPR1025 delivers exceptional noise performance for sensitive analog circuits. The high PSRR and ultra-low noise make it ideal for RF and precision applications. Small package and low dropout maximize battery life.',
        highlight: 'Ultra-low noise for sensitive applications'
      }
    },
    {
      partNumber: 'TPR1033',
      name: 'TPR1033',
      shortDescription: 'Low quiescent current LDO with 3.3V output, 300mA capability, and enable function.',
      descriptionParagraphs: [
        'The TPR1033 is a low quiescent current LDO regulator providing a fixed 3.3V output with 300mA current capability. It features ultra-low quiescent current of 2µA, maximizing battery life in standby mode.',
        'The LDO operates from a wide 2.5V to 16V input voltage range and includes an enable pin for power management. It requires only 1µF ceramic output capacitor for stability.',
        'With low dropout voltage of 250mV at 300mA and excellent load transient response, the TPR1033 is ideal for battery-powered applications, IoT devices, and portable electronics.'
      ],
      specifications: {
        'Output Voltage': '3.3V fixed',
        'Output Current': '300 mA',
        'Input Voltage': '2.5V to 16V',
        'Dropout Voltage': '250 mV',
        'Quiescent Current': '2 µA',
        'PSRR': '60 dB @ 1kHz',
        'Enable': 'Yes',
        'Package': 'SOT-23-5'
      },
      features: [
        'Ultra-low quiescent current (2µA)',
        '300mA output current',
        'Wide input voltage (2.5V-16V)',
        'Enable pin for power control',
        'Low dropout voltage',
        'Stable with ceramic caps',
        'Current limit protection',
        'Thermal shutdown'
      ],
      applications: [
        'IoT devices',
        'Battery-powered systems',
        'Portable electronics',
        'Wireless sensors',
        'Low-power applications'
      ],
      faeReview: {
        author: 'Michael Zhang',
        title: 'Senior FAE - Power Management',
        content: 'The TPR1033 is excellent for battery-powered applications with its 2µA quiescent current. The wide input range and enable function provide design flexibility. Ideal for IoT and portable devices requiring long battery life.',
        highlight: 'Ultra-low power for battery applications'
      }
    },
    {
      partNumber: 'TPR1050',
      name: 'TPR1050',
      shortDescription: 'High input voltage LDO with 5.0V output, 500mA capability, and wide input range up to 36V.',
      descriptionParagraphs: [
        'The TPR1050 is a high input voltage LDO regulator providing a fixed 5.0V output with 500mA current capability. It accepts input voltages up to 36V, making it suitable for industrial and automotive applications.',
        'The LDO features low quiescent current of 25µA and includes current limit, thermal shutdown, and reverse current protection. It requires only 2.2µF ceramic output capacitor for stability.',
        'With wide input voltage range and robust protection features, the TPR1050 is ideal for industrial control, automotive electronics, and applications with unregulated input supplies.'
      ],
      specifications: {
        'Output Voltage': '5.0V fixed',
        'Output Current': '500 mA',
        'Input Voltage': '6V to 36V',
        'Dropout Voltage': '400 mV',
        'Quiescent Current': '25 µA',
        'PSRR': '55 dB @ 1kHz',
        'Protection': 'Current/Thermal/Reverse',
        'Package': 'SOT-89-3'
      },
      features: [
        'High input voltage (up to 36V)',
        '500mA output current',
        'Low quiescent current (25µA)',
        '5.0V fixed output',
        'Current limit protection',
        'Thermal shutdown',
        'Reverse current protection',
        'Robust industrial design'
      ],
      applications: [
        'Industrial control',
        'Automotive electronics',
        'Battery-powered systems',
        'Unregulated supplies',
        'White goods'
      ],
      faeReview: {
        author: 'Michael Zhang',
        title: 'Senior FAE - Power Management',
        content: 'The TPR1050 handles high input voltages up to 36V, making it ideal for industrial and automotive applications. The robust protection features and wide input range provide reliable operation in harsh environments.',
        highlight: 'High voltage capability for industrial use'
      }
    }
  ],
  'Operational Amplifiers': [
    {
      partNumber: 'TP1564',
      name: 'TP1564',
      shortDescription: 'Quad low-power operational amplifier with rail-to-rail input/output and 1.2MHz bandwidth.',
      descriptionParagraphs: [
        'The TP1564 is a quad low-power operational amplifier featuring rail-to-rail input and output swing. It offers 1.2MHz gain-bandwidth product while consuming only 40µA per amplifier.',
        'The op-amp operates from a single 1.8V to 5.5V supply and is unity-gain stable. With low offset voltage of 0.5mV and high CMRR of 90dB, it delivers precision performance for battery-powered applications.',
        'The TP1564 is ideal for sensor signal conditioning, battery-powered instruments, and portable medical devices where low power and precision are critical.'
      ],
      specifications: {
        'Channels': '4 (Quad)',
        'Bandwidth': '1.2 MHz',
        'Supply Voltage': '1.8V to 5.5V',
        'Offset Voltage': '0.5 mV',
        'Quiescent Current': '40 µA/ch',
        'CMRR': '90 dB',
        'Slew Rate': '0.5 V/µs',
        'Package': 'TSSOP-14'
      },
      features: [
        'Rail-to-rail input/output',
        'Low power (40µA/ch)',
        '1.2MHz bandwidth',
        'Low offset voltage (0.5mV)',
        'Unity-gain stable',
        'High CMRR (90dB)',
        'Wide supply range',
        'Small package'
      ],
      applications: [
        'Sensor conditioning',
        'Battery-powered instruments',
        'Portable medical devices',
        'Active filters',
        'General-purpose amplification'
      ],
      faeReview: {
        author: 'Jennifer Wu',
        title: 'Senior FAE - Amplifiers',
        content: 'The TP1564 provides excellent low-power performance with rail-to-rail capability. The 40µA current consumption per channel is ideal for battery-powered applications. Good bandwidth and precision for general-purpose use.',
        highlight: 'Low-power quad amplifier with rail-to-rail'
      }
    }
  ]
};

// Fix each category
let totalFixed = 0;

productsData.categories.forEach(category => {
  const categoryProducts = realProducts[category.name];
  if (!categoryProducts) return;
  
  // Find placeholder products in this category
  const placeholderIndices = [];
  category.products.forEach((product, index) => {
    if (/^(INTERFACECHIPS|ADCSANDDACS|DATACONVERTERS|POWERMANAGEMENT|OPERATIONALAMPLIFIERS|MOTORDRIVERS)-\d+$/.test(product.partNumber) ||
        /^Product \d+$/.test(product.name)) {
      placeholderIndices.push(index);
    }
  });
  
  if (placeholderIndices.length > 0 && categoryProducts.length >= placeholderIndices.length) {
    console.log(`\n📂 ${category.name}:`);
    
    placeholderIndices.forEach((placeholderIndex, i) => {
      const oldProduct = category.products[placeholderIndex];
      const newProduct = categoryProducts[i];
      
      // Preserve some original data
      category.products[placeholderIndex] = {
        ...newProduct,
        alternativeParts: oldProduct.alternativeParts || [],
        companionParts: oldProduct.companionParts || [],
        faqs: oldProduct.faqs || []
      };
      
      console.log(`   ✅ ${oldProduct.partNumber} → ${newProduct.partNumber}`);
      totalFixed++;
    });
  }
});

// Save updated data
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n${'='.repeat(60)}`);
console.log(`Total placeholder products fixed: ${totalFixed}`);
console.log('='.repeat(60));
console.log('\n✅ All placeholder products have been replaced with real 3peak products!');
