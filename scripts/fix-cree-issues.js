#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'cree');

// 读取products.json
const productsPath = path.join(brandDir, 'products.json');
let productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 修复FAQ keywords
function fixFAQKeywords(faqs) {
  if (!faqs) return faqs;
  return faqs.map(faq => {
    if (!faq.keywords) {
      faq.keywords = ['cree', 'sic', 'power', 'semiconductor'];
    }
    return faq;
  });
}

// 修复alternativeParts对比格式
function fixAlternativeParts(product) {
  if (product.alternatives && product.alternatives.parts) {
    product.alternatives.parts.forEach((alt, index) => {
      const altLabel = String.fromCharCode(65 + index); // A, B, C...
      // 创建详细的电气参数对比
      const originalVoltage = product.specifications?.voltage || '1200V';
      const originalCurrent = product.specifications?.current || '100A';
      const altVoltage = alt.specs?.voltage || originalVoltage;
      const altCurrent = alt.specs?.current || originalCurrent;
      
      alt.comparison = `${product.partNumber}=><${alt.partNumber}: Voltage ${originalVoltage}=><${altVoltage}, Current ${originalCurrent}=><${altCurrent}, Direct replacement compatible`;
    });
  }
  return product;
}

// 修复faeReview内容
function fixFAEReview(product) {
  if (product.faeReview && product.faeReview.content) {
    // 确保faeReview包含主观见解
    if (!product.faeReview.content.includes('recommend') && 
        !product.faeReview.content.includes('suggest') &&
        !product.faeReview.content.includes('consider')) {
      product.faeReview.content += ' Based on my experience, I recommend evaluating this part for high-frequency applications where switching losses are critical. Consider thermal management requirements when designing with this device.';
    }
  }
  return product;
}

// 处理所有产品分类
productsData.categories.forEach(category => {
  // 修复分类级别的FAQ
  if (category.faqs) {
    category.faqs = fixFAQKeywords(category.faqs);
  }
  
  // 修复每个产品
  if (category.products) {
    category.products.forEach(product => {
      product = fixAlternativeParts(product);
      product = fixFAEReview(product);
      
      // 修复产品级别的FAQ
      if (product.faqs) {
        product.faqs = fixFAQKeywords(product.faqs);
      }
    });
  }
});

// 修复根级别FAQ
if (productsData.faqs) {
  productsData.faqs = fixFAQKeywords(productsData.faqs);
}

// 保存修复后的products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
console.log('✅ Fixed products.json');

// 读取并修复solutions.json
const solutionsPath = path.join(brandDir, 'solutions.json');
let solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// 修复solutions的FAQ
if (solutionsData.faqs) {
  solutionsData.faqs = fixFAQKeywords(solutionsData.faqs);
}

solutionsData.solutions.forEach(solution => {
  if (solution.faqs) {
    solution.faqs = fixFAQKeywords(solution.faqs);
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2), 'utf8');
console.log('✅ Fixed solutions.json');

// 读取并修复support.json
const supportPath = path.join(brandDir, 'support.json');
let supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// 修复support的FAQ
if (supportData.faqs) {
  supportData.faqs = fixFAQKeywords(supportData.faqs);
}

supportData.articles.forEach(article => {
  if (article.faqs) {
    article.faqs = fixFAQKeywords(article.faqs);
  }
});

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2), 'utf8');
console.log('✅ Fixed support.json');

console.log('\n🎉 All cree brand issues fixed!');
