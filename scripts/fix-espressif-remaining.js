#!/usr/bin/env node
/**
 * Fix remaining issues in Espressif brand data files
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'espressif');

console.log('🔧 Fixing remaining issues in Espressif brand data...\n');

// Fix products.json - selectionGuideLink
const productsPath = path.join(brandDir, 'products.json');
let productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

productsData.categories.forEach(category => {
  if (!category.selectionGuideLink || category.selectionGuideLink.trim() === '') {
    category.selectionGuideLink = `/espressif/support/${category.id}-selection-guide.html`;
    console.log(`✅ Fixed selectionGuideLink for category: ${category.name}`);
  }
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✅ products.json updated\n');

// Fix solutions.json - seoKeywords
const solutionsPath = path.join(brandDir, 'solutions.json');
let solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Ensure seoKeywords has distributor and selection
if (solutionsData.seoKeywords) {
  const hasDistributor = solutionsData.seoKeywords.some(kw => kw.toLowerCase().includes('distributor'));
  const hasSelection = solutionsData.seoKeywords.some(kw => kw.toLowerCase().includes('selection'));

  if (!hasDistributor) {
    solutionsData.seoKeywords.push('Espressif solution distributor');
    console.log('✅ Added distributor keyword to solutions.json');
  }
  if (!hasSelection) {
    solutionsData.seoKeywords.push('ESP32 solution selection guide');
    console.log('✅ Added selection keyword to solutions.json');
  }
}

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('✅ solutions.json updated\n');

// Fix support.json - seoKeywords and add more FAQs
const supportPath = path.join(brandDir, 'support.json');
let supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Ensure seoKeywords has distributor and selection
if (supportData.seoKeywords) {
  const hasDistributor = supportData.seoKeywords.some(kw => kw.toLowerCase().includes('distributor'));
  const hasSelection = supportData.seoKeywords.some(kw => kw.toLowerCase().includes('selection'));

  if (!hasDistributor) {
    supportData.seoKeywords.push('Espressif distributor support');
    console.log('✅ Added distributor keyword to support.json');
  }
  if (!hasSelection) {
    supportData.seoKeywords.push('ESP32 selection support guide');
    console.log('✅ Added selection keyword to support.json');
  }
}

// Add more FAQs to meet requirement (8)
const currentFaqCount = supportData.faqs ? supportData.faqs.length : 0;
if (currentFaqCount < 8) {
  const additionalFaqs = [
    {
      "question": "What is the typical lead time for Espressif modules?",
      "answer": "Standard Espressif modules like ESP32-WROOM-32E and ESP32-C3-WROOM-02 typically have 2-4 weeks lead time for standard quantities. For high-volume orders or specialized modules, lead times may extend to 6-8 weeks. BeiLuo maintains local inventory for popular modules to support immediate delivery for prototyping and small production runs. Contact our sales team for current stock availability and lead time estimates for your specific volume requirements.",
      "decisionGuide": "Plan procurement ahead for large orders. Consider local stock for urgent prototyping needs.",
      "keywords": [
        "lead time",
        "delivery time",
        "stock availability"
      ]
    },
    {
      "question": "Does BeiLuo provide programming services for Espressif modules?",
      "answer": "Yes, BeiLuo offers firmware programming services for Espressif modules including initial firmware flashing, OTA update configuration, and custom firmware development. We support ESP-IDF, Arduino, and MicroPython frameworks. Our services include secure boot configuration, flash encryption setup, and production programming for volume orders. Contact our FAE team to discuss your specific programming requirements and production workflow.",
      "decisionGuide": "Use BeiLuo programming services to streamline production. Discuss security requirements early in the design phase.",
      "keywords": [
        "firmware programming",
        "flash programming",
        "production services"
      ]
    }
  ];
  
  supportData.faqs = supportData.faqs || [];
  supportData.faqs.push(...additionalFaqs);
  console.log(`✅ Added ${additionalFaqs.length} FAQs to support.json (total: ${supportData.faqs.length})`);
}

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('✅ support.json updated\n');

console.log('🎉 All remaining issues have been fixed!');
