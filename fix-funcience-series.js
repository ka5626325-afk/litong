#!/usr/bin/env node

/**
 * Fix Funcience - Add series to categories
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'funcience');
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add series field to each category
const categorySeries = {
  'ethercat-controllers': [
    { name: 'FCE1100 Series', description: '2-port EtherCAT slave controller' },
    { name: 'FCE1353 Series', description: '3-port EtherCAT with integrated PHYs' }
  ],
  'dsp-processors': [
    { name: 'FCP32C335 Series', description: 'High-performance DSP for motor control' },
    { name: 'FCP32C334 Series', description: 'Cost-effective DSP for general purpose' }
  ],
  'industrial-phy': [
    { name: 'FCPHY100 Series', description: '100Mbps industrial Ethernet PHY' },
    { name: 'FEP1000 Series', description: 'Gigabit industrial Ethernet PHY' }
  ],
  'development-tools': [
    { name: 'EVK Series', description: 'Evaluation kits for rapid prototyping' },
    { name: 'Debug Tools', description: 'Programming and debugging accessories' }
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
console.log('\n✅ Funcience series fix complete!');
