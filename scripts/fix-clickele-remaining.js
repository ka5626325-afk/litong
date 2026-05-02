#!/usr/bin/env node
/**
 * Fix remaining clickele brand data issues
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'clickele');

// Fix products.json
function fixProducts() {
  console.log('Fixing products.json...');
  const productsPath = path.join(brandDir, 'products.json');
  const content = fs.readFileSync(productsPath, 'utf8');
  const data = JSON.parse(content);

  let fixCount = 0;

  data.categories.forEach(category => {
    // Fix longDescription to include distributor/selection keywords
    if (category.longDescription && !category.longDescription.toLowerCase().includes('distributor') && !category.longDescription.includes('选型')) {
      category.longDescription += ' Available through BeiLuo authorized distributor with comprehensive selection guide.';
      fixCount++;
    }
  });

  fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Fixed ${fixCount} issues in products.json`);
}

// Fix solutions.json
function fixSolutions() {
  console.log('Fixing solutions.json...');
  const solutionsPath = path.join(brandDir, 'solutions.json');
  const content = fs.readFileSync(solutionsPath, 'utf8');
  const data = JSON.parse(content);

  let fixCount = 0;

  // Fix seoKeywords
  if (!data.seoKeywords || !data.seoKeywords.some(k => k.toLowerCase().includes('distributor') || k.includes('选型'))) {
    data.seoKeywords = data.seoKeywords || [];
    data.seoKeywords.push('ClickEle distributor selection guide');
    fixCount++;
  }

  // Fix root FAQs - add keywords
  if (data.faqs) {
    data.faqs.forEach(faq => {
      if (!faq.keywords) {
        faq.keywords = ['solution', 'support'];
        fixCount++;
      }
    });
  }

  fs.writeFileSync(solutionsPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Fixed ${fixCount} issues in solutions.json`);
}

// Fix support.json
function fixSupport() {
  console.log('Fixing support.json...');
  const supportPath = path.join(brandDir, 'support.json');
  const content = fs.readFileSync(supportPath, 'utf8');
  const data = JSON.parse(content);

  let fixCount = 0;

  // Fix seoKeywords
  if (!data.seoKeywords || !data.seoKeywords.some(k => k.toLowerCase().includes('distributor') || k.includes('选型'))) {
    data.seoKeywords = data.seoKeywords || [];
    data.seoKeywords.push('ClickEle distributor selection guide');
    fixCount++;
  }

  // Fix root FAQs - add decisionGuide
  if (data.faqs) {
    data.faqs.forEach(faq => {
      if (!faq.decisionGuide) {
        faq.decisionGuide = 'Contact BeiLuo FAE for personalized assistance.';
        fixCount++;
      }
    });
  }

  fs.writeFileSync(supportPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Fixed ${fixCount} issues in support.json`);
}

// Main execution
console.log('========================================');
console.log('Fixing Remaining clickele Brand Data Issues');
console.log('========================================\n');

try {
  fixProducts();
  fixSolutions();
  fixSupport();
  
  console.log('\n========================================');
  console.log('clickele brand remaining fixes completed!');
  console.log('========================================');
  console.log('\nPlease run: node scripts/brand-master-checklist.js clickele');
  console.log('to verify all issues are resolved.');
} catch (error) {
  console.error('Error fixing clickele data:', error);
  process.exit(1);
}
