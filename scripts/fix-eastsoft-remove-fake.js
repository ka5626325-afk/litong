#!/usr/bin/env node
/**
 * 删除eastsoft品牌中编造的产品和solution
 * 只保留真实的产品（第1、2个），删除编造的第3、4个
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 修复products.json - 删除编造的产品
function fixProducts() {
  console.log('========================================');
  console.log('Remove EASTSOFT Fake Products');
  console.log('========================================');
  
  const productsPath = path.join(dataDir, 'eastsoft', 'products.json');
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    console.log(`❌ JSON parse error: ${error.message}`);
    return 0;
  }
  
  let removedCount = 0;
  
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      console.log(`\nCategory: ${category.name}`);
      
      if (category.products && Array.isArray(category.products)) {
        const originalCount = category.products.length;
        
        // 只保留前2个真实产品，删除第3、4个（如果存在）
        if (category.products.length > 2) {
          const removed = category.products.splice(2, category.products.length - 2);
          removedCount += removed.length;
          console.log(`  - Removed ${removed.length} fake products`);
          console.log(`  - Remaining: ${category.products.length} real products`);
        } else {
          console.log(`  - Already has ${category.products.length} products (no removal needed)`);
        }
      }
    });
  }
  
  if (removedCount > 0) {
    try {
      fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`\n✅ Removed ${removedCount} fake products total`);
    } catch (error) {
      console.log(`\n❌ Save error: ${error.message}`);
    }
  } else {
    console.log('\n✅ No fake products to remove');
  }
  
  return removedCount;
}

// 修复solutions.json - 删除编造的solution
function fixSolutions() {
  console.log('\n========================================');
  console.log('Remove EASTSOFT Fake Solution');
  console.log('========================================');
  
  const solutionsPath = path.join(dataDir, 'eastsoft', 'solutions.json');
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
  } catch (error) {
    console.log(`❌ JSON parse error: ${error.message}`);
    return 0;
  }
  
  let removedCount = 0;
  
  if (data.solutions && Array.isArray(data.solutions)) {
    const originalCount = data.solutions.length;
    
    // 只保留前2个真实solutions，删除第3个（如果存在）
    if (data.solutions.length > 2) {
      const removed = data.solutions.splice(2, data.solutions.length - 2);
      removedCount += removed.length;
      console.log(`  - Removed ${removed.length} fake solution(s)`);
      console.log(`  - Remaining: ${data.solutions.length} real solutions`);
    } else {
      console.log(`  - Already has ${data.solutions.length} solutions (no removal needed)`);
    }
  }
  
  if (removedCount > 0) {
    try {
      fs.writeFileSync(solutionsPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`\n✅ Removed ${removedCount} fake solution(s) total`);
    } catch (error) {
      console.log(`\n❌ Save error: ${error.message}`);
    }
  } else {
    console.log('\n✅ No fake solutions to remove');
  }
  
  return removedCount;
}

// 主函数
function main() {
  const productsRemoved = fixProducts();
  const solutionsRemoved = fixSolutions();
  
  console.log('\n========================================');
  console.log('Summary');
  console.log('========================================');
  console.log(`Products removed: ${productsRemoved}`);
  console.log(`Solutions removed: ${solutionsRemoved}`);
  console.log(`Total removed: ${productsRemoved + solutionsRemoved}`);
}

main();
