#!/usr/bin/env node
/**
 * 检查所有品牌的数据完整性
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const brands = fs.readdirSync(dataDir).filter(item => {
  return fs.statSync(path.join(dataDir, item)).isDirectory();
}).sort();

console.log(`Checking ${brands.length} brands...\n`);

brands.forEach((brand, index) => {
  const brandDir = path.join(dataDir, brand);
  
  // 检查products
  const productsPath = path.join(brandDir, 'products.json');
  let productCategories = 0;
  let productsPerCategory = [];
  if (fs.existsSync(productsPath)) {
    try {
      const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
      if (products.categories) {
        productCategories = products.categories.length;
        productsPerCategory = products.categories.map(c => ({
          id: c.id,
          count: c.products ? c.products.length : 0
        }));
      }
    } catch (e) {
      console.log(`  ${brand}: Error reading products.json`);
    }
  }
  
  // 检查solutions
  const solutionsPath = path.join(brandDir, 'solutions.json');
  let solutionsCount = 0;
  if (fs.existsSync(solutionsPath)) {
    try {
      const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
      solutionsCount = solutions.solutions ? solutions.solutions.length : 0;
    } catch (e) {}
  }
  
  // 检查support
  const supportPath = path.join(brandDir, 'support.json');
  let supportCount = 0;
  if (fs.existsSync(supportPath)) {
    try {
      const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
      supportCount = support.articles ? support.articles.length : 0;
    } catch (e) {}
  }
  
  // 检查是否符合要求
  const needsProducts = productsPerCategory.some(p => p.count < 4);
  const needsSolutions = solutionsCount < 3;
  const needsSupport = supportCount < 5;
  
  if (needsProducts || needsSolutions || needsSupport) {
    console.log(`[${index + 1}] ${brand}:`);
    console.log(`  Categories: ${productCategories}`);
    productsPerCategory.forEach(p => {
      const status = p.count >= 4 ? '✓' : '✗';
      console.log(`    ${status} ${p.id}: ${p.count} products`);
    });
    console.log(`  Solutions: ${solutionsCount}/3 ${solutionsCount >= 3 ? '✓' : '✗'}`);
    console.log(`  Support: ${supportCount}/5 ${supportCount >= 5 ? '✓' : '✗'}`);
    console.log();
  }
});
