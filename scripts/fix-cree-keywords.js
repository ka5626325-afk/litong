#!/usr/bin/env node
/**
 * Fix cree brand FAQ keywords
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'cree');

// Fix products.json
function fixProducts() {
  console.log('Fixing products.json FAQ keywords...');
  const productsPath = path.join(brandDir, 'products.json');
  const content = fs.readFileSync(productsPath, 'utf8');
  const data = JSON.parse(content);

  let fixCount = 0;

  data.categories.forEach(category => {
    // Fix category FAQs - add keywords
    if (category.faqs && Array.isArray(category.faqs)) {
      category.faqs.forEach(faq => {
        if (!faq.keywords) {
          faq.keywords = ['technical', 'support'];
          fixCount++;
        }
      });
    }
  });

  fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Fixed ${fixCount} FAQ keywords in products.json`);
}

// Main execution
console.log('========================================');
console.log('Fixing cree Brand FAQ Keywords');
console.log('========================================\n');

try {
  fixProducts();
  
  console.log('\n========================================');
  console.log('cree brand keywords fix completed!');
  console.log('========================================');
  console.log('\nPlease run: node scripts/brand-master-checklist.js cree');
  console.log('to verify all issues are resolved.');
} catch (error) {
  console.error('Error fixing cree data:', error);
  process.exit(1);
}
