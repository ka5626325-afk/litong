#!/usr/bin/env node
/**
 * Fix all Chinese content in TI brand data files
 * According to BRAND_DATA_COMPLETE_GUIDE.md Iron Rule 26: All content must be pure English
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'ti');

console.log('🔧 Fixing all Chinese content in TI brand data...\n');

// Fix products.json
const productsPath = path.join(brandDir, 'products.json');
let productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix categories
productsData.categories.forEach((category, index) => {
  // Fix longDescription - remove Chinese parts
  if (category.longDescription && category.longDescription.includes('作为TI')) {
    const englishOnly = category.longDescription.split('作为TI')[0].trim();
    category.longDescription = englishOnly;
    console.log(`✅ Fixed longDescription for category: ${category.name}`);
  }

  // Fix selectionGuideLink description
  if (category.selectionGuideLink && category.selectionGuideLink.description) {
    category.selectionGuideLink.description = `Professional ${category.name} selection guide to help you choose the most suitable TI products`;
    console.log(`✅ Fixed selectionGuideLink for category: ${category.name}`);
  }
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✅ products.json updated\n');

// Fix solutions.json
const solutionsPath = path.join(brandDir, 'solutions.json');
let solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Fix SEO keywords
if (solutionsData.seoKeywords) {
  solutionsData.seoKeywords = solutionsData.seoKeywords.filter(kw => !/[\u4e00-\u9fff]/.test(kw));
  // Add English replacements if needed
  if (!solutionsData.seoKeywords.includes('TI solution distributor')) {
    solutionsData.seoKeywords.push('TI solution distributor');
  }
  if (!solutionsData.seoKeywords.includes('Texas Instruments application support')) {
    solutionsData.seoKeywords.push('Texas Instruments application support');
  }
  console.log('✅ Fixed seoKeywords in solutions.json');
}

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('✅ solutions.json updated\n');

// Fix support.json
const supportPath = path.join(brandDir, 'support.json');
let supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Fix SEO keywords
if (supportData.seoKeywords) {
  supportData.seoKeywords = supportData.seoKeywords.filter(kw => !/[\u4e00-\u9fff]/.test(kw));
  // Add English replacements if needed
  if (!supportData.seoKeywords.includes('TI selection support')) {
    supportData.seoKeywords.push('TI selection support');
  }
  if (!supportData.seoKeywords.includes('BeiLuo distributor')) {
    supportData.seoKeywords.push('BeiLuo distributor');
  }
  console.log('✅ Fixed seoKeywords in support.json');
}

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('✅ support.json updated\n');

console.log('🎉 All Chinese content has been fixed to English!');
console.log('\n📋 Summary of fixes:');
console.log('  - Fixed longDescription in products.json categories');
console.log('  - Fixed selectionGuideLink descriptions in products.json');
console.log('  - Fixed seoKeywords in solutions.json');
console.log('  - Fixed seoKeywords in support.json');
