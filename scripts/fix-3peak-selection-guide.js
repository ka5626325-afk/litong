#!/usr/bin/env node
/**
 * Fix 3peak selectionGuideLink format
 * Convert string to object with url and text fields
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', '3peak');

// Fix products.json
function fixProducts() {
  console.log('Fixing products.json selectionGuideLink...');
  const productsPath = path.join(brandDir, 'products.json');
  const content = fs.readFileSync(productsPath, 'utf8');
  const data = JSON.parse(content);

  let fixCount = 0;

  data.categories.forEach(category => {
    // Fix selectionGuideLink - convert string to object
    if (category.selectionGuideLink && typeof category.selectionGuideLink === 'string') {
      const url = category.selectionGuideLink;
      category.selectionGuideLink = {
        url: url,
        text: `View ${category.name} Selection Guide`
      };
      fixCount++;
    } else if (!category.selectionGuideLink) {
      // Create if missing
      category.selectionGuideLink = {
        url: `/brands/3peak/support/${category.id}-selection-guide.html`,
        text: `View ${category.name} Selection Guide`
      };
      fixCount++;
    }
  });

  fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Fixed ${fixCount} selectionGuideLink entries`);
}

// Main execution
console.log('========================================');
console.log('Fixing 3peak selectionGuideLink Format');
console.log('========================================\n');

try {
  fixProducts();
  
  console.log('\n========================================');
  console.log('3peak selectionGuideLink fix completed!');
  console.log('========================================');
  console.log('\nPlease run: node scripts/brand-master-checklist.js 3peak');
  console.log('to verify all issues are resolved.');
} catch (error) {
  console.error('Error fixing 3peak data:', error);
  process.exit(1);
}
