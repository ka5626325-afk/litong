#!/usr/bin/env node
/**
 * Fix selectionGuideLink format in Espressif products.json
 * The field should be an object with url and text properties
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'espressif');

console.log('🔧 Fixing selectionGuideLink format in Espressif products.json...\n');

const productsPath = path.join(brandDir, 'products.json');
let productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

productsData.categories.forEach(category => {
  if (typeof category.selectionGuideLink === 'string') {
    const url = category.selectionGuideLink;
    category.selectionGuideLink = {
      url: url,
      text: `View ${category.name} Selection Guide`
    };
    console.log(`✅ Fixed selectionGuideLink for category: ${category.name}`);
  } else if (!category.selectionGuideLink) {
    category.selectionGuideLink = {
      url: `/espressif/support/${category.id}-selection-guide.html`,
      text: `View ${category.name} Selection Guide`
    };
    console.log(`✅ Created selectionGuideLink for category: ${category.name}`);
  }
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json updated');
console.log('\n🎉 All selectionGuideLink fields have been fixed!');
