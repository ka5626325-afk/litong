#!/usr/bin/env node

/**
 * Fix GigaDevice category slugs to match ids
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'gigadevice');
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix slugs to match ids
productsData.categories.forEach(category => {
  if (category.slug && category.id) {
    const oldSlug = category.slug;
    category.slug = category.id;
    console.log(`✓ Fixed ${category.name}: ${oldSlug} → ${category.id}`);
  }
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ GigaDevice slug fix complete!');
