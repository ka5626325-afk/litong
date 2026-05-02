#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'bpsemi');

// Fix products.json - longDescription
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

products.categories.forEach(cat => {
  // Fix longDescription - add distributor keywords
  if (cat.longDescription && !cat.longDescription.includes('distributor') && !cat.longDescription.includes('选型')) {
    cat.longDescription += ` Complete ${cat.name} solutions from BPSemi with technical support from BeiLuo Electronics, your authorized distributor.`;
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✓ Fixed products.json longDescription');

console.log('\n✅ BPSemi brand final fixes completed!');
