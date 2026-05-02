#!/usr/bin/env node
/**
 * Find all placeholder products in 3peak brand
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', '3peak', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔍 Finding placeholder products in 3peak brand...\n');

const placeholderPatterns = [
  /^INTERFACECHIPS-\d+$/,
  /^ADCSANDDACS-\d+$/,
  /^DATACONVERTERS-\d+$/,
  /^POWERMANAGEMENT-\d+$/,
  /^OPERATIONALAMPLIFIERS-\d+$/,
  /^MOTORDRIVERS-\d+$/,
  /^Product \d+$/
];

let totalPlaceholders = 0;

productsData.categories.forEach(category => {
  const placeholders = category.products.filter(product => {
    return placeholderPatterns.some(pattern => 
      pattern.test(product.partNumber) || pattern.test(product.name)
    );
  });
  
  if (placeholders.length > 0) {
    console.log(`\n📂 ${category.name}:`);
    placeholders.forEach(p => {
      console.log(`   ❌ ${p.partNumber} (${p.name})`);
      totalPlaceholders++;
    });
  }
});

console.log(`\n${'='.repeat(60)}`);
console.log(`Total placeholder products found: ${totalPlaceholders}`);
console.log('='.repeat(60));
