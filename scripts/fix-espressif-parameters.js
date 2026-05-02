#!/usr/bin/env node
/**
 * Fix parameter mismatch in Espressif products
 * Align category.parameters with product.specifications
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'espressif', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Fixing parameter mismatch in Espressif products...\n');

// Category 1: Wi-Fi SoCs - parameters already match, no fix needed

// Category 2: Bluetooth SoCs - fix parameters to match actual specs
productsData.categories[1].parameters = ['Processor', 'Wi-Fi', 'Bluetooth', 'GPIO', 'Flash'];

// Update Bluetooth SoCs product specifications to be consistent
productsData.categories[1].products.forEach((product, index) => {
  if (index === 0) { // ESP32-C3-MINI-1
    product.specifications = {
      'Processor': 'Single-core RISC-V @ 160MHz',
      'Wi-Fi': '802.11 b/g/n 2.4GHz',
      'Bluetooth': 'BLE 5.0',
      'GPIO': '22 programmable',
      'Flash': '4 MB',
      'Package': 'SMD-16 (13.2x16.6mm)'
    };
  } else if (index === 1) { // ESP32-C6-WROOM-1
    product.specifications = {
      'Processor': 'Single-core RISC-V @ 160MHz',
      'Wi-Fi': '802.11 ax/b/g/n 2.4GHz (Wi-Fi 6)',
      'Bluetooth': 'BLE 5.0 + 802.15.4',
      'GPIO': '22 programmable',
      'Flash': '4 MB',
      'Package': 'SMD-19 (18x20mm)'
    };
  } else if (index === 2) { // ESP32-H2-MINI-1
    product.specifications = {
      'Processor': 'Single-core RISC-V @ 96MHz',
      'Wi-Fi': 'N/A (BLE + 802.15.4 only)',
      'Bluetooth': 'BLE 5.3 + 802.15.4',
      'GPIO': '19 programmable',
      'Flash': '2 MB',
      'Package': 'SMD-16 (13.2x16.6mm)'
    };
  } else if (index === 3) { // ESP32-C2-MINI-1
    product.specifications = {
      'Processor': 'Single-core RISC-V @ 120MHz',
      'Wi-Fi': '802.11 b/g/n 2.4GHz',
      'Bluetooth': 'BLE 5.0',
      'GPIO': '14 programmable',
      'Flash': '2 MB',
      'Package': 'SMD-16 (13.2x16.6mm)'
    };
  }
  console.log(`✅ Fixed specifications for ${product.partNumber}`);
});

// Category 3: Combo Modules - fix parameters
productsData.categories[2].parameters = ['Processor', 'Wi-Fi', 'Bluetooth', 'Flash', 'PSRAM'];

// Update Combo Modules product specifications
productsData.categories[2].products.forEach((product, index) => {
  if (index === 0) { // ESP32-WROVER-E
    product.specifications = {
      'Processor': 'Dual-core Xtensa LX6 @ 240MHz',
      'Wi-Fi': '802.11 b/g/n 2.4GHz',
      'Bluetooth': 'BLE 4.2 + Classic',
      'Flash': '4 MB',
      'PSRAM': '8 MB',
      'Package': 'SMD-38 (18x25.5mm)'
    };
  } else if (index === 1) { // ESP32-S2-WROOM
    product.specifications = {
      'Processor': 'Single-core Xtensa LX7 @ 240MHz',
      'Wi-Fi': '802.11 b/g/n 2.4GHz',
      'Bluetooth': 'N/A (Wi-Fi only)',
      'Flash': '4 MB',
      'PSRAM': 'N/A',
      'Package': 'SMD-38 (18x25.5mm)'
    };
  } else if (index === 2) { // ESP32-S3-WROOM-1U
    product.specifications = {
      'Processor': 'Dual-core Xtensa LX7 @ 240MHz',
      'Wi-Fi': '802.11 b/g/n 2.4GHz',
      'Bluetooth': 'BLE 5.0',
      'Flash': '8 MB',
      'PSRAM': '8 MB',
      'Package': 'SMD-38 (18x25.5mm)'
    };
  } else if (index === 3) { // ESP32-C6-MINI-1
    product.specifications = {
      'Processor': 'Single-core RISC-V @ 160MHz',
      'Wi-Fi': '802.11 ax/b/g/n 2.4GHz (Wi-Fi 6)',
      'Bluetooth': 'BLE 5.0 + 802.15.4',
      'Flash': '4 MB',
      'PSRAM': 'N/A',
      'Package': 'SMD-16 (13.2x16.6mm)'
    };
  }
  console.log(`✅ Fixed specifications for ${product.partNumber}`);
});

// Category 4: Development Boards - fix parameters
productsData.categories[3].parameters = ['Module', 'Processor', 'Flash', 'USB', 'GPIO'];

// Update Development Boards product specifications
productsData.categories[3].products.forEach((product, index) => {
  if (index === 0) { // ESP32-DevKitC-VE
    product.specifications = {
      'Module': 'ESP32-WROVER-E',
      'Processor': 'Dual-core Xtensa LX6 @ 240MHz',
      'Flash': '4 MB (module)',
      'USB': 'USB-to-UART bridge',
      'GPIO': '38 accessible',
      'Package': 'Development Board (50x75mm)'
    };
  } else if (index === 1) { // ESP32-S3-DevKitC-1
    product.specifications = {
      'Module': 'ESP32-S3-WROOM-1',
      'Processor': 'Dual-core Xtensa LX7 @ 240MHz',
      'Flash': '8 MB (module)',
      'USB': 'USB OTG + UART',
      'GPIO': '36 accessible',
      'Package': 'Development Board (50x75mm)'
    };
  } else if (index === 2) { // ESP32-C3-DevKitM-1
    product.specifications = {
      'Module': 'ESP32-C3-MINI-1',
      'Processor': 'Single-core RISC-V @ 160MHz',
      'Flash': '4 MB (module)',
      'USB': 'USB-to-UART bridge',
      'GPIO': '22 accessible',
      'Package': 'Compact Board (35x55mm)'
    };
  } else if (index === 3) { // ESP32-C6-DevKitC-1
    product.specifications = {
      'Module': 'ESP32-C6-WROOM-1',
      'Processor': 'Single-core RISC-V @ 160MHz',
      'Flash': '4 MB (module)',
      'USB': 'USB-to-UART bridge',
      'GPIO': '22 accessible',
      'Package': 'Development Board (50x75mm)'
    };
  }
  console.log(`✅ Fixed specifications for ${product.partNumber}`);
});

// Save updated data
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('\n✅ All parameter mismatches have been fixed!');
console.log('\n📋 Summary of changes:');
console.log('  - Category 1 (Wi-Fi SoCs): No changes needed');
console.log('  - Category 2 (Bluetooth SoCs): Updated parameters and all product specs');
console.log('  - Category 3 (Combo Modules): Updated parameters and all product specs');
console.log('  - Category 4 (Development Boards): Updated parameters and all product specs');
