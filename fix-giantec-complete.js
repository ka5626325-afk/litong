#!/usr/bin/env node

/**
 * Complete Fix for Giantec Data
 * - Add series to categories
 * - Remove fabricated products
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'giantec');
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add series field to each category
const categorySeries = {
  'eeprom': [
    { name: 'GT24C Series', description: 'I2C EEPROM (1Kbit-1Mbit)', powerRange: '1Kbit-1Mbit' },
    { name: 'GT25C Series', description: 'SPI EEPROM (1Kbit-1Mbit)', powerRange: '1Kbit-1Mbit' }
  ],
  'nor-flash': [
    { name: 'GT25Q Series', description: 'SPI NOR Flash (1Mb-128Mb)', powerRange: '1Mb-128Mb' }
  ]
};

// Fix categories
productsData.categories.forEach(category => {
  // Add series if missing
  if (!category.series || category.series.length === 0) {
    category.series = categorySeries[category.id] || [];
    console.log(`✓ Added series to ${category.id}`);
  }
  
  // Remove fabricated products (those with -3 or -4 suffix or containing 'eeprom-' or 'giantec-nor-')
  if (category.products) {
    const originalCount = category.products.length;
    category.products = category.products.filter(product => {
      const pn = product.partNumber || '';
      const isFabricated = pn.includes('-3') || pn.includes('-4') || 
                           pn.match(/^eeprom-/i) || pn.match(/^giantec-nor-/i);
      if (isFabricated) {
        console.log(`✓ Removed fabricated product: ${pn}`);
      }
      return !isFabricated;
    });
    if (category.products.length < originalCount) {
      console.log(`✓ Removed ${originalCount - category.products.length} fabricated products from ${category.id}`);
    }
  }
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ Giantec products data fix complete!');
