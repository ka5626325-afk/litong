#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'bps');

// Fix products.json - selectionGuideLink
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

products.categories.forEach(cat => {
  if (!cat.selectionGuideLink || typeof cat.selectionGuideLink !== 'object') {
    cat.selectionGuideLink = {
      text: `View ${cat.name} Selection Guide`,
      url: `/bps/support/${cat.slug}-selection-guide.html`
    };
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✓ Fixed products.json selectionGuideLink');

// Fix solutions.json - seoKeywords
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutions.seoKeywords = [
  "BPS LED driver solution",
  "BPS lighting solution distributor",
  "LED driver design guide",
  "smart lighting control system",
  "BPS distributor selection"
];

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✓ Fixed solutions.json seoKeywords');

// Fix support.json - seoKeywords
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

support.seoKeywords = [
  "BPS support",
  "LED driver design guide distributor",
  "technical documentation",
  "BPS distributor support",
  "BPS selection guide"
];

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('✓ Fixed support.json seoKeywords');

console.log('\n✅ BPS brand data fixes completed!');
