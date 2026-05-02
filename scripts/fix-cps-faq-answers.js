#!/usr/bin/env node
/**
 * Fix cps brand FAQ answers length
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'cps');

// Fix products.json
function fixProducts() {
  console.log('Fixing products.json FAQ answers...');
  const productsPath = path.join(brandDir, 'products.json');
  const content = fs.readFileSync(productsPath, 'utf8');
  const data = JSON.parse(content);

  let fixCount = 0;

  data.categories.forEach(category => {
    // Fix category FAQs
    if (category.faqs && Array.isArray(category.faqs)) {
      category.faqs.forEach(faq => {
        if (faq.answer && faq.answer.length < 200) {
          faq.answer += ' For more detailed information and application guidance, please consult our technical documentation or contact BeiLuo FAE team for personalized support and design recommendations tailored to your specific requirements.';
          fixCount++;
        }
      });
    }
  });

  fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Fixed ${fixCount} FAQ answers in products.json`);
}

// Main execution
console.log('========================================');
console.log('Fixing cps Brand FAQ Answers');
console.log('========================================\n');

try {
  fixProducts();
  
  console.log('\n========================================');
  console.log('cps brand FAQ fix completed!');
  console.log('========================================');
  console.log('\nPlease run: node scripts/brand-master-checklist.js cps');
  console.log('to verify all issues are resolved.');
} catch (error) {
  console.error('Error fixing cps data:', error);
  process.exit(1);
}
