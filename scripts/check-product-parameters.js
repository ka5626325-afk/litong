#!/usr/bin/env node
/**
 * 检查品牌产品分类页表格参数配置
 * 检查每个品牌的 products.json 中的 parameters 是否与实际产品数据匹配
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 获取所有品牌目录
function getBrandDirs() {
  if (!fs.existsSync(dataDir)) {
    console.error('Data directory not found:', dataDir);
    return [];
  }
  
  return fs.readdirSync(dataDir)
    .filter(dir => {
      const dirPath = path.join(dataDir, dir);
      return fs.statSync(dirPath).isDirectory() && 
             fs.existsSync(path.join(dirPath, 'products.json'));
    })
    .sort();
}

// 检查单个品牌
function checkBrand(brand) {
  const brandDir = path.join(dataDir, brand);
  const productsPath = path.join(brandDir, 'products.json');
  
  console.log(`\n========================================`);
  console.log(`Checking brand: ${brand}`);
  console.log(`========================================`);
  
  let productsData;
  try {
    const content = fs.readFileSync(productsPath, 'utf8');
    productsData = JSON.parse(content);
  } catch (error) {
    console.error(`  ❌ Error reading products.json: ${error.message}`);
    return { brand, status: 'error', error: error.message };
  }
  
  if (!productsData.categories || !Array.isArray(productsData.categories)) {
    console.error(`  ❌ No categories found`);
    return { brand, status: 'error', error: 'No categories' };
  }
  
  let hasIssues = false;
  const categoryReports = [];
  
  productsData.categories.forEach((category, idx) => {
    console.log(`\n  Category ${idx + 1}: ${category.name || category.id || 'unnamed'}`);
    
    // 检查 parameters
    if (!category.parameters || !Array.isArray(category.parameters) || category.parameters.length === 0) {
      console.log(`    ⚠️  No parameters defined`);
      hasIssues = true;
    } else {
      console.log(`    ✅ Parameters: ${category.parameters.join(', ')}`);
    }
    
    // 检查 products
    if (!category.products || !Array.isArray(category.products) || category.products.length === 0) {
      console.log(`    ❌ No products found`);
      hasIssues = true;
    } else {
      console.log(`    ✅ Products: ${category.products.length} items`);
      
      // 检查产品字段与parameters的匹配
      if (category.parameters && category.products.length > 0) {
        const sampleProduct = category.products[0];
        const productFields = Object.keys(sampleProduct);
        
        console.log(`    📋 Product fields: ${productFields.join(', ')}`);
        
        // 检查每个parameter是否能在产品中找到对应字段
        const missingFields = [];
        category.parameters.forEach(param => {
          const paramKey = param.toLowerCase().replace(/[^a-z0-9]/g, '');
          
          // 检查直接匹配
          const hasDirectMatch = productFields.some(field => 
            field.toLowerCase().replace(/[^a-z0-9]/g, '') === paramKey
          );
          
          // 检查specifications中的匹配
          let hasSpecMatch = false;
          if (sampleProduct.specifications) {
            const specFields = Object.keys(sampleProduct.specifications);
            hasSpecMatch = specFields.some(field => 
              field.toLowerCase().replace(/[^a-z0-9]/g, '') === paramKey
            );
          }
          
          if (!hasDirectMatch && !hasSpecMatch) {
            missingFields.push(param);
          }
        });
        
        if (missingFields.length > 0) {
          console.log(`    ⚠️  Parameters without matching product fields: ${missingFields.join(', ')}`);
          hasIssues = true;
        }
      }
    }
    
    // 检查FAQs
    const faqCount = category.faqs ? category.faqs.length : 0;
    console.log(`    📊 FAQs: ${faqCount}`);
    if (faqCount < 5) {
      console.log(`    ⚠️  Less than 5 FAQs (current: ${faqCount})`);
    }
  });
  
  return {
    brand,
    status: hasIssues ? 'issues' : 'ok',
    categories: productsData.categories.length
  };
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Product Category Parameters Check');
  console.log('========================================');
  
  const brands = getBrandDirs();
  console.log(`\nFound ${brands.length} brands with products.json`);
  
  const results = {
    ok: [],
    issues: [],
    error: []
  };
  
  brands.forEach(brand => {
    const result = checkBrand(brand);
    results[result.status].push(result);
  });
  
  // 汇总报告
  console.log('\n\n========================================');
  console.log('Summary Report');
  console.log('========================================');
  console.log(`\n✅ OK: ${results.ok.length} brands`);
  console.log(`⚠️  Issues: ${results.issues.length} brands`);
  console.log(`❌ Error: ${results.error.length} brands`);
  
  if (results.issues.length > 0) {
    console.log('\nBrands with issues:');
    results.issues.forEach(r => console.log(`  - ${r.brand}`));
  }
  
  if (results.error.length > 0) {
    console.log('\nBrands with errors:');
    results.error.forEach(r => console.log(`  - ${r.brand}: ${r.error}`));
  }
}

main();
