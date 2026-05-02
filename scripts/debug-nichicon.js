#!/usr/bin/env node
/**
 * 调试nichicon产品检测
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 无意义内容模式
const meaninglessContentPatterns = [
  /lorem\s*ipsum/i,
  /placeholder/i,
  /todo/i,
  /tbd/i,
  /n\/a/i,
  /undefined/i,
  /null/i,
  /content\s*here/i,
  /sample\s*text/i,
  /example\s*content/i,
  /this\s*is\s*a\s*(sample|example|placeholder)/i,
  /^\[object\s+Object\]$/i,
];

// 检查内容是否无意义
function isMeaninglessContent(content) {
  if (!content || typeof content !== 'string') {
    console.log('    - Content is null/undefined or not a string');
    return true;
  }
  const trimmed = content.trim();
  if (trimmed.length === 0) {
    console.log('    - Content is empty after trim');
    return true;
  }
  if (trimmed.length < 50) {
    console.log(`    - Content too short: ${trimmed.length} chars`);
    return true;
  }
  
  for (const pattern of meaninglessContentPatterns) {
    if (pattern.test(trimmed)) {
      console.log(`    - Matched pattern: ${pattern}`);
      return true;
    }
  }
  
  return false;
}

function debugNichicon() {
  console.log('========================================');
  console.log('Debug Nichicon Products');
  console.log('========================================');
  
  const productsPath = path.join(dataDir, 'nichicon', 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    console.log('❌ products.json not found');
    return;
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    console.log(`❌ JSON parse error: ${error.message}`);
    return;
  }
  
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      console.log(`\nCategory ${cIdx}: ${category.name}`);
      
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product, pIdx) => {
          console.log(`\n  Product ${pIdx}: ${product.partNumber}`);
          
          if (product.descriptionParagraphs && Array.isArray(product.descriptionParagraphs)) {
            const fullText = product.descriptionParagraphs.join(' ');
            console.log(`    - descriptionParagraphs length: ${fullText.length} chars`);
            console.log(`    - First 100 chars: "${fullText.substring(0, 100)}..."`);
            
            const isMeaningless = isMeaninglessContent(fullText);
            console.log(`    - isMeaningless: ${isMeaningless}`);
          } else {
            console.log('    - No descriptionParagraphs');
          }
        });
      }
    });
  }
}

debugNichicon();
