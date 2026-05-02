#!/usr/bin/env node

/**
 * Fix Gainsil - Add series to categories
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'gainsil');
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add series field to each category
const categorySeries = {
  'operational-amplifiers': [
    { name: 'GS85xx Series', description: 'Precision op-amps with low offset' },
    { name: 'GS86xx Series', description: 'Low power op-amps for battery applications' }
  ],
  'comparators': [
    { name: 'GS874x Series', description: 'High-speed comparators' },
    { name: 'GS39x Series', description: 'General purpose comparators' }
  ],
  'analog-switches': [
    { name: 'GS4157 Series', description: 'Low R-on SPDT switches' },
    { name: 'GS3005 Series', description: 'Ultra-low voltage switches' }
  ],
  'voltage-references': [
    { name: 'GS431 Series', description: 'Shunt voltage references' },
    { name: 'GS432 Series', description: 'Precision voltage references' }
  ]
};

// Fix categories
productsData.categories.forEach(category => {
  if (!category.series || category.series.length === 0) {
    category.series = categorySeries[category.id] || [];
    console.log(`✓ Added series to ${category.id}`);
  }
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ Gainsil series fix complete!');
