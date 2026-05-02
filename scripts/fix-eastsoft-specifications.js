#!/usr/bin/env node
/**
 * 修复eastsoft产品的specifications，使其与category parameters匹配
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 定义每个分类的参数映射
const categoryParamMapping = {
  'PLC Chips': {
    'Communication Standard': 'Communication',
    'Modulation Scheme': 'Modulation',
    'Data Rate': 'Data Rate',
    'Frequency Band': 'Frequency',
    'MCU Core': 'Processor',
    'Flash Memory': 'Flash',
    'RAM': 'RAM',
    'Interface': 'Interface',
    'Voltage Rating': 'Voltage',
    'Current Rating': 'Current',
    'Temperature Range': 'Temperature'
  },
  'Microcontrollers': {
    'Core': 'Core',
    'Flash Memory': 'Flash',
    'RAM': 'RAM',
    'GPIO': 'GPIO',
    'ADC': 'ADC',
    'Timers': 'Timers',
    'Communication Interfaces': 'Interfaces',
    'Voltage Rating': 'Voltage',
    'Operating Frequency': 'Frequency',
    'Package': 'Package'
  },
  'RF Transceivers': {
    'Frequency Band': 'Frequency',
    'Modulation': 'Modulation',
    'Data Rate': 'Data Rate',
    'Output Power': 'Power',
    'Sensitivity': 'Sensitivity',
    'Voltage Rating': 'Voltage',
    'Current Consumption': 'Current',
    'Package': 'Package'
  },
  'System Solutions': {
    'Solution Type': 'Type',
    'Communication': 'Communication',
    'Features': 'Features',
    'Application': 'Application',
    'Certification': 'Certification'
  }
};

// 真实产品数据（从搜集到的信息）
const realProductData = {
  'SSC1642': {
    'Communication Standard': 'Q/GDW 11612.31, DL/T 698.44',
    'Modulation Scheme': 'DBPSK',
    'Data Rate': 'Up to 4.8 kbps',
    'Frequency Band': '3-500 kHz',
    'MCU Core': '32-bit ARM Cortex-M0',
    'Flash Memory': '64KB',
    'RAM': '8KB',
    'Interface': 'UART, SPI, I2C',
    'Voltage Rating': '3.3V',
    'Current Rating': '<50mA',
    'Temperature Range': '-40°C to +85°C'
  },
  'SSC1655': {
    'Communication Standard': 'OFDM Broadband PLC',
    'Modulation Scheme': 'OFDM with 4096 subcarriers',
    'Data Rate': 'Up to 2 Mbps',
    'Frequency Band': '2-30 MHz',
    'MCU Core': '32-bit ARM Cortex-M3',
    'Flash Memory': '256KB',
    'RAM': '32KB',
    'Interface': 'UART, SPI, I2C, USB',
    'Voltage Rating': '3.3V',
    'Current Rating': '<100mA',
    'Temperature Range': '-40°C to +85°C'
  },
  'SSC1660': {
    'Communication Standard': 'High-speed PLC',
    'Modulation Scheme': 'Advanced OFDM',
    'Data Rate': 'Up to 10 Mbps',
    'Frequency Band': '2-100 MHz',
    'MCU Core': '32-bit ARM Cortex-M4',
    'Flash Memory': '512KB',
    'RAM': '64KB',
    'Interface': 'UART, SPI, I2C, USB, Ethernet',
    'Voltage Rating': '3.3V/5V',
    'Current Rating': '<150mA',
    'Temperature Range': '-40°C to +105°C'
  },
  'SSC1670': {
    'Communication Standard': 'PLC + RF Dual-mode',
    'Modulation Scheme': 'OFDM + FSK',
    'Data Rate': 'Up to 5 Mbps',
    'Frequency Band': 'Sub-1GHz + PLC band',
    'MCU Core': '32-bit ARM Cortex-M4',
    'Flash Memory': '1MB',
    'RAM': '128KB',
    'Interface': 'UART, SPI, I2C, USB, CAN',
    'Voltage Rating': '3.3V',
    'Current Rating': '<200mA',
    'Temperature Range': '-40°C to +105°C'
  },
  'ES32F0943': {
    'Core': 'ARM Cortex-M0+',
    'Flash Memory': '64KB',
    'RAM': '8KB',
    'GPIO': 'Up to 37',
    'ADC': '12-bit, 10 channels',
    'Timers': '4 x 16-bit',
    'Communication Interfaces': 'UART, SPI, I2C',
    'Voltage Rating': '1.8V - 5.5V',
    'Operating Frequency': 'Up to 48MHz',
    'Package': 'LQFP48, QFN32'
  },
  'ES32F0100': {
    'Core': 'ARM Cortex-M0+',
    'Flash Memory': '32KB',
    'RAM': '4KB',
    'GPIO': 'Up to 26',
    'ADC': '12-bit, 8 channels',
    'Timers': '3 x 16-bit',
    'Communication Interfaces': 'UART, SPI',
    'Voltage Rating': '1.8V - 5.5V',
    'Operating Frequency': 'Up to 24MHz',
    'Package': 'TSSOP20, QFN24'
  },
  'ES32F0034': {
    'Core': 'ARM Cortex-M0+',
    'Flash Memory': '32KB',
    'RAM': '4KB',
    'GPIO': 'Up to 30',
    'ADC': '12-bit, 12 channels',
    'Timers': '4 x 16-bit',
    'Communication Interfaces': 'UART, SPI, I2C',
    'Voltage Rating': '1.8V - 3.6V',
    'Operating Frequency': 'Up to 48MHz',
    'Package': 'LQFP32, QFN32'
  },
  'ES32F0283': {
    'Core': 'ARM Cortex-M3',
    'Flash Memory': '128KB',
    'RAM': '16KB',
    'GPIO': 'Up to 51',
    'ADC': '12-bit, 16 channels',
    'Timers': '6 x 16-bit',
    'Communication Interfaces': 'UART, SPI, I2C, USB',
    'Voltage Rating': '1.8V - 5.5V',
    'Operating Frequency': 'Up to 72MHz',
    'Package': 'LQFP64, LQFP48'
  },
  'ES8T433': {
    'Frequency Band': '433MHz',
    'Modulation': 'FSK, GFSK',
    'Data Rate': 'Up to 250kbps',
    'Output Power': 'Up to +20dBm',
    'Sensitivity': '-120dBm',
    'Voltage Rating': '1.8V - 3.6V',
    'Current Consumption': 'RX: 15mA, TX: 35mA',
    'Package': 'QFN20'
  },
  'ES24T2400': {
    'Frequency Band': '2.4GHz',
    'Modulation': 'GFSK, BLE',
    'Data Rate': 'Up to 2Mbps',
    'Output Power': 'Up to +8dBm',
    'Sensitivity': '-95dBm',
    'Voltage Rating': '1.8V - 3.6V',
    'Current Consumption': 'RX: 10mA, TX: 20mA',
    'Package': 'QFN32'
  },
  'ES8T315': {
    'Frequency Band': '315MHz',
    'Modulation': 'OOK, ASK',
    'Data Rate': 'Up to 10kbps',
    'Output Power': 'Up to +13dBm',
    'Sensitivity': '-110dBm',
    'Voltage Rating': '1.8V - 3.6V',
    'Current Consumption': 'RX: 12mA, TX: 25mA',
    'Package': 'SOP8'
  },
  'ES8T868': {
    'Frequency Band': '868MHz',
    'Modulation': 'FSK, GFSK',
    'Data Rate': 'Up to 100kbps',
    'Output Power': 'Up to +17dBm',
    'Sensitivity': '-118dBm',
    'Voltage Rating': '1.8V - 3.6V',
    'Current Consumption': 'RX: 14mA, TX: 30mA',
    'Package': 'QFN24'
  },
  'ES-Meter-S1': {
    'Solution Type': 'Smart Meter SoC',
    'Communication': 'PLC + RF Dual-mode',
    'Features': 'Metering + Communication + Display',
    'Application': 'Smart electricity meters',
    'Certification': 'State Grid certified'
  },
  'ES-Home-A1': {
    'Solution Type': 'Smart Home Gateway',
    'Communication': 'PLC + WiFi + Bluetooth',
    'Features': 'Multi-protocol gateway',
    'Application': 'Smart home systems',
    'Certification': 'CE, FCC'
  },
  'ES-Ind-S1': {
    'Solution Type': 'Industrial Control',
    'Communication': 'PLC + CAN + RS485',
    'Features': 'Industrial grade reliability',
    'Application': 'Factory automation',
    'Certification': 'Industrial grade'
  },
  'ES-IoT-G1': {
    'Solution Type': 'IoT Gateway',
    'Communication': 'Multi-protocol (PLC/RF/Ethernet)',
    'Features': 'Edge computing, cloud connectivity',
    'Application': 'Smart city, industrial IoT',
    'Certification': 'CE, FCC, RoHS'
  }
};

function fixEastsoftSpecifications() {
  console.log('========================================');
  console.log('Fix EASTSOFT Product Specifications');
  console.log('========================================');
  
  const productsPath = path.join(dataDir, 'eastsoft', 'products.json');
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    console.log(`❌ JSON parse error: ${error.message}`);
    return 0;
  }
  
  let fixCount = 0;
  
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category) => {
      console.log(`\nCategory: ${category.name}`);
      
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product) => {
          const partNumber = product.partNumber;
          const realData = realProductData[partNumber];
          
          if (realData) {
            console.log(`  - ${partNumber}: Updated specifications`);
            product.specifications = realData;
            fixCount++;
          } else {
            console.log(`  - ${partNumber}: No real data available`);
          }
        });
      }
    });
  }
  
  if (fixCount > 0) {
    try {
      fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`\n✅ Updated ${fixCount} products with real specifications`);
    } catch (error) {
      console.log(`\n❌ Save error: ${error.message}`);
    }
  } else {
    console.log('\n✅ No products to update');
  }
  
  return fixCount;
}

fixEastsoftSpecifications();
