#!/usr/bin/env node
/**
 * Check for Chinese characters in brand data files
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'ti');

console.log('🔍 Checking for Chinese content in TI brand data...\n');

const chineseRegex = /[\u4e00-\u9fff]/;
let hasChinese = false;

function checkObject(obj, path = '') {
  if (typeof obj === 'string') {
    if (chineseRegex.test(obj)) {
      console.log(`⚠️  Chinese found at ${path}:`);
      console.log(`   Content: ${obj.substring(0, 100)}...`);
      hasChinese = true;
      return true;
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      checkObject(item, `${path}[${index}]`);
    });
  } else if (typeof obj === 'object' && obj !== null) {
    for (const [key, value] of Object.entries(obj)) {
      checkObject(value, `${path}.${key}`);
    }
  }
  return false;
}

// Check products.json
console.log('📦 Checking products.json...');
const productsData = JSON.parse(fs.readFileSync(path.join(brandDir, 'products.json'), 'utf8'));
checkObject(productsData, 'products');

// Check solutions.json
console.log('\n🔧 Checking solutions.json...');
const solutionsData = JSON.parse(fs.readFileSync(path.join(brandDir, 'solutions.json'), 'utf8'));
checkObject(solutionsData, 'solutions');

// Check support.json
console.log('\n📚 Checking support.json...');
const supportData = JSON.parse(fs.readFileSync(path.join(brandDir, 'support.json'), 'utf8'));
checkObject(supportData, 'support');

if (hasChinese) {
  console.log('\n❌ Chinese content found! Please fix.');
  process.exit(1);
} else {
  console.log('\n✅ No Chinese content found. All content is in English!');
  process.exit(0);
}
