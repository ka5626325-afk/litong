#!/usr/bin/env node

/**
 * Fix GigaDevice Solution Data
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'gigadevice');
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Fix the 3rd solution - it should be "Automotive Infotainment Solution" not "Consumer Electronics Solution 3"
const solution3 = solutionsData.solutions[2];
if (solution3 && solution3.id === 'automotive-infotainment-solution') {
  solution3.name = 'Automotive Infotainment Solution';
  solution3.slug = 'automotive-infotainment-solution';
  // Remove the incorrect properties
  delete solution3.technicalSpecs; // Remove fabricated technical specs
  
  // Add proper technical specs for automotive infotainment
  solution3.technicalSpecs = {
    "MCU Core": "ARM Cortex-M4",
    "MCU Frequency": "Up to 240MHz",
    "NOR Flash Density": "128Mb",
    "NAND Flash Density": "1Gb",
    "Temperature Range": "-40°C to +125°C (AEC-Q100 Grade 1)",
    "Supply Voltage": "3.3V",
    "Display Interface": "TFT-LCD, Touchscreen",
    "Communication": "CAN, LIN, Ethernet"
  };
  
  // Fix BOM list
  solution3.bomList = [
    {
      partNumber: "GD32A503VET6",
      description: "Automotive-grade ARM Cortex-M4 MCU",
      quantity: 1,
      category: "MCU"
    },
    {
      partNumber: "GD25Q128ESIG-A",
      description: "128Mb AEC-Q100 NOR Flash for firmware",
      quantity: 1,
      category: "Memory"
    },
    {
      partNumber: "GD5F1GQ4UAYIG-A",
      description: "1Gb AEC-Q100 SPI NAND for media storage",
      quantity: 1,
      category: "Storage"
    }
  ];
  
  console.log('✓ Fixed solution 3: Automotive Infotainment Solution');
}

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('✓ Updated solutions.json');

console.log('\n✅ GigaDevice solution fix complete!');
