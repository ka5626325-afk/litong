#!/usr/bin/env node
/**
 * Add parameters field to BPSemi product categories
 */

const fs = require('fs');
const path = require('path');

const brand = 'bpsemi';
const dataDir = path.join(__dirname, '..', 'data', brand);
const productsPath = path.join(dataDir, 'products.json');

let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add parameters field to each category
products.categories.forEach(cat => {
  if (cat.id === 'led-lighting-drivers') {
    cat.parameters = ['Input Voltage', 'Output Power', 'Power Factor', 'Package'];
  } else if (cat.id === 'acdc-power-management') {
    cat.parameters = ['Input Voltage', 'Output Power', 'Switching Frequency', 'Package'];
  } else if (cat.id === 'dcdc-converters') {
    cat.parameters = ['Input Voltage', 'Output Current', 'Switching Frequency', 'Package'];
  } else if (cat.id === 'motor-drivers') {
    cat.parameters = ['Motor Voltage', 'Peak Current', 'Control Interface', 'Package'];
  }
  console.log(`✅ Added parameters for ${cat.name}`);
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('\n🎉 Parameters added successfully!');
