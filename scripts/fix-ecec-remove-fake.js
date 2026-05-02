#!/usr/bin/env node
/**
 * 删除ecec品牌中编造的产品（第3、4个）
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 修复ecec的products.json
function fixEcecProducts() {
  console.log('========================================');
  console.log('Remove ECEC Fake Products');
  console.log('========================================');
  
  const productsPath = path.join(dataDir, 'ecec', 'products.json');
  
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

// 修复ecec的solutions.json
function fixEcecSolutions() {
  console.log('\n========================================');
  console.log('Remove ECEC Fake Solutions');
  console.log('========================================');
  
  const solutionsPath = path.join(dataDir, 'ecec', 'solutions.json');
  
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
    console.log(`  - Original solutions: ${originalCount}`);
    
    // 只保留前2个真实solutions，删除第3个（如果存在）
    if (data.solutions.length > 2) {
      const removed = data.solutions.splice(2, data.solutions.length - 2);
      removedCount += removed.length;
      console.log(`  - Removed ${removed.length} fake solution(s): ${removed.map(s => s.id).join(', ')}`);
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

// 修复ecec的support.json
function fixEcecSupport() {
  console.log('\n========================================');
  console.log('Remove ECEC Fake Support Articles');
  console.log('========================================');
  
  const supportPath = path.join(dataDir, 'ecec', 'support.json');
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
  } catch (error) {
    console.log(`❌ JSON parse error: ${error.message}`);
    return 0;
  }
  
  let removedCount = 0;
  
  if (data.articles && Array.isArray(data.articles)) {
    const originalCount = data.articles.length;
    console.log(`  - Original articles: ${originalCount}`);
    
    // 只保留前4个真实文章，删除第5个（如果存在）
    if (data.articles.length > 4) {
      const removed = data.articles.splice(4, data.articles.length - 4);
      removedCount += removed.length;
      console.log(`  - Removed ${removed.length} fake article(s): ${removed.map(a => a.id).join(', ')}`);
      console.log(`  - Remaining: ${data.articles.length} real articles`);
    } else {
      console.log(`  - Already has ${data.articles.length} articles (no removal needed)`);
    }
  }
  
  if (removedCount > 0) {
    try {
      fs.writeFileSync(supportPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`\n✅ Removed ${removedCount} fake article(s) total`);
    } catch (error) {
      console.log(`\n❌ Save error: ${error.message}`);
    }
  } else {
    console.log('\n✅ No fake articles to remove');
  }
  
  return removedCount;
}

// 主函数
function main() {
  const productsRemoved = fixEcecProducts();
  const solutionsRemoved = fixEcecSolutions();
  const supportRemoved = fixEcecSupport();
  
  console.log('\n========================================');
  console.log('Summary');
  console.log('========================================');
  console.log(`Products removed: ${productsRemoved}`);
  console.log(`Solutions removed: ${solutionsRemoved}`);
  console.log(`Support articles removed: ${supportRemoved}`);
  console.log(`Total removed: ${productsRemoved + solutionsRemoved + supportRemoved}`);
}

main();
