#!/usr/bin/env node
/**
 * Fix cincon selectionGuideLink format
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'cincon');

// Fix products.json
function fixProducts() {
  console.log('Fixing products.json selectionGuideLink...');
  const productsPath = path.join(brandDir, 'products.json');
  const content = fs.readFileSync(productsPath, 'utf8');
  const data = JSON.parse(content);

  let fixCount = 0;

  data.categories.forEach(category => {
    // Fix selectionGuideLink - convert string to object if needed
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
        url: `/brands/cincon/support/${category.id}-selection-guide.html`,
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
console.log('Fixing cincon selectionGuideLink Format');
console.log('========================================\n');

try {
  fixProducts();
  
  console.log('\n========================================');
  console.log('cincon selectionGuideLink fix completed!');
  console.log('========================================');
  console.log('\nPlease run: node scripts/brand-master-checklist.js cincon');
  console.log('to verify all issues are resolved.');
} catch (error) {
  console.error('Error fixing cincon data:', error);
  process.exit(1);
}
