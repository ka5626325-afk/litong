#!/usr/bin/env node

/**
 * Fix Giantec Solutions - Add coreAdvantages to solutions 1 and 2
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'giantec');
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Add coreAdvantages to solution 1 (configuration-storage)
if (solutionsData.solutions[0] && !solutionsData.solutions[0].coreAdvantages) {
  solutionsData.solutions[0].coreAdvantages = [
    {
      title: "High Endurance",
      description: "1M to 4M write cycles for frequent parameter updates"
    },
    {
      title: "Long Retention",
      description: "40+ year data retention ensures configuration persistence"
    },
    {
      title: "Wide Voltage Range",
      description: "1.7V-5.5V operation supports various system voltages"
    },
    {
      title: "Byte-Level Access",
      description: "Individual byte write capability for efficient updates"
    }
  ];
  console.log('✓ Added coreAdvantages to solution 1 (Configuration Storage)');
}

// Add coreAdvantages to solution 2 (firmware-storage)
if (solutionsData.solutions[1] && !solutionsData.solutions[1].coreAdvantages) {
  solutionsData.solutions[1].coreAdvantages = [
    {
      title: "Execute-In-Place",
      description: "XIP capability allows direct code execution from Flash"
    },
    {
      title: "Fast Read Speed",
      description: "50MHz SPI with dual/quad mode for quick firmware loading"
    },
    {
      title: "Flexible Sectors",
      description: "4KB/32KB/64KB sectors optimize erase operations"
    },
    {
      title: "High Reliability",
      description: "100K cycles and 20-year retention for long product life"
    }
  ];
  console.log('✓ Added coreAdvantages to solution 2 (Firmware Storage)');
}

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('✓ Updated solutions.json');

console.log('\n✅ Giantec solutions fix complete!');
