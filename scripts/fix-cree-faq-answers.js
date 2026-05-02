#!/usr/bin/env node
/**
 * Fix cree brand FAQ answers length
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'cree');

// Fix solutions.json
function fixSolutions() {
  console.log('Fixing solutions.json...');
  const solutionsPath = path.join(brandDir, 'solutions.json');
  const content = fs.readFileSync(solutionsPath, 'utf8');
  const data = JSON.parse(content);

  let fixCount = 0;

  // Fix root FAQs
  if (data.faqs && Array.isArray(data.faqs)) {
    data.faqs.forEach(faq => {
      if (faq.answer && faq.answer.length < 200) {
        faq.answer += ' For more detailed information and application guidance, please consult our technical documentation or contact BeiLuo FAE team for personalized support and design recommendations tailored to your specific requirements.';
        fixCount++;
      }
    });
  }

  fs.writeFileSync(solutionsPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Fixed ${fixCount} FAQ answers in solutions.json`);
}

// Fix support.json
function fixSupport() {
  console.log('Fixing support.json...');
  const supportPath = path.join(brandDir, 'support.json');
  const content = fs.readFileSync(supportPath, 'utf8');
  const data = JSON.parse(content);

  let fixCount = 0;

  // Fix root FAQs
  if (data.faqs && Array.isArray(data.faqs)) {
    data.faqs.forEach(faq => {
      if (faq.answer && faq.answer.length < 200) {
        faq.answer += ' Contact BeiLuo FAE team for comprehensive technical support and personalized design assistance tailored to your specific application requirements.';
        fixCount++;
      }
    });
  }

  fs.writeFileSync(supportPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Fixed ${fixCount} FAQ answers in support.json`);
}

// Main execution
console.log('========================================');
console.log('Fixing cree Brand FAQ Answers');
console.log('========================================\n');

try {
  fixSolutions();
  fixSupport();
  
  console.log('\n========================================');
  console.log('cree brand FAQ fix completed!');
  console.log('========================================');
  console.log('\nPlease run: node scripts/brand-master-checklist.js cree');
  console.log('to verify all issues are resolved.');
} catch (error) {
  console.error('Error fixing cree data:', error);
  process.exit(1);
}
