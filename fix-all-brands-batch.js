#!/usr/bin/env node
/**
 * 批量修复品牌编造数据
 * 从chipon开始，按字母顺序修复每个品牌
 * 修复内容：
 * - 每个产品分类的第3、4个产品
 * - solutions第3个
 * - support第5个
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DATA_DIR = path.join(__dirname, 'data');
const OUTPUT_DIR = path.join(__dirname, 'output');

// 获取所有品牌并按字母排序
function getAllBrands() {
  const brands = fs.readdirSync(DATA_DIR)
    .filter(dir => fs.statSync(path.join(DATA_DIR, dir)).isDirectory())
    .sort();
  return brands;
}

// 检查产品是否是编造的
function isFabricatedProduct(product) {
  if (!product.partNumber) return false;
  const pn = product.partNumber.toLowerCase();
  return pn.includes('-3') || pn.includes('-4') || 
         pn.includes('product-3') || pn.includes('product-4') ||
         pn.includes('fab-') || pn.startsWith('xyz-') ||
         (product.descriptionParagraphs && 
          product.descriptionParagraphs.some(p => 
            p.includes('high-performance component designed for') ||
            p.includes('This product features excellent')
          ));
}

// 检查文章是否是编造的
function isFabricatedArticle(article) {
  if (!article.content) return false;
  const content = Array.isArray(article.content) ? article.content.join(' ') : article.content;
  return content.includes('This technical reference document provides detailed information') &&
         content.includes('Electrical characteristics are specified over the operating temperature range');
}

// 扫描品牌问题
function scanBrandIssues(brand) {
  const issues = {
    brand,
    fabricatedProducts: [],
    fabricatedSolutions: [],
    fabricatedSupport: []
  };
  
  const brandDir = path.join(DATA_DIR, brand);
  
  // 检查产品
  const productsPath = path.join(brandDir, 'products.json');
  if (fs.existsSync(productsPath)) {
    try {
      const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
      if (products.categories) {
        products.categories.forEach((cat, catIndex) => {
          if (cat.products && cat.products.length >= 4) {
            // 检查第3和第4个产品
            const p3 = cat.products[2];
            const p4 = cat.products[3];
            if (isFabricatedProduct(p3)) {
              issues.fabricatedProducts.push({
                category: cat.id || cat.name,
                categoryIndex: catIndex,
                productIndex: 2,
                partNumber: p3.partNumber
              });
            }
            if (isFabricatedProduct(p4)) {
              issues.fabricatedProducts.push({
                category: cat.id || cat.name,
                categoryIndex: catIndex,
                productIndex: 3,
                partNumber: p4.partNumber
              });
            }
          }
        });
      }
    } catch (e) {
      console.error(`Error reading ${brand} products:`, e.message);
    }
  }
  
  // 检查solutions
  const solutionsPath = path.join(brandDir, 'solutions.json');
  if (fs.existsSync(solutionsPath)) {
    try {
      const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
      if (solutions.solutions && solutions.solutions.length >= 3) {
        const s3 = solutions.solutions[2];
        if (isFabricatedArticle(s3)) {
          issues.fabricatedSolutions.push({
            index: 2,
            id: s3.id,
            title: s3.title
          });
        }
      }
    } catch (e) {
      console.error(`Error reading ${brand} solutions:`, e.message);
    }
  }
  
  // 检查support
  const supportPath = path.join(brandDir, 'support.json');
  if (fs.existsSync(supportPath)) {
    try {
      const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
      if (support.articles && support.articles.length >= 5) {
        const s5 = support.articles[4];
        if (isFabricatedArticle(s5)) {
          issues.fabricatedSupport.push({
            index: 4,
            id: s5.id,
            title: s5.title
          });
        }
      }
    } catch (e) {
      console.error(`Error reading ${brand} support:`, e.message);
    }
  }
  
  return issues;
}

// 主函数
function main() {
  console.log('=== Scanning All Brands for Fabricated Data ===\n');
  
  const allBrands = getAllBrands();
  console.log(`Found ${allBrands.length} brands total\n`);
  
  // 找到chipon的位置
  const chiponIndex = allBrands.indexOf('chipon');
  if (chiponIndex === -1) {
    console.error('chipon brand not found!');
    process.exit(1);
  }
  
  // 从chipon开始的品牌
  const brandsFromChipon = allBrands.slice(chiponIndex);
  console.log(`Processing ${brandsFromChipon.length} brands from chipon onwards:\n`);
  console.log(brandsFromChipon.join(', '));
  console.log('\n');
  
  // 扫描每个品牌
  const allIssues = [];
  for (const brand of brandsFromChipon) {
    const issues = scanBrandIssues(brand);
    const hasIssues = issues.fabricatedProducts.length > 0 || 
                      issues.fabricatedSolutions.length > 0 || 
                      issues.fabricatedSupport.length > 0;
    
    if (hasIssues) {
      allIssues.push(issues);
      console.log(`\n[${brand}] FOUND ISSUES:`);
      if (issues.fabricatedProducts.length > 0) {
        console.log(`  Products: ${issues.fabricatedProducts.length} fabricated`);
        issues.fabricatedProducts.forEach(p => {
          console.log(`    - ${p.partNumber} (cat: ${p.category})`);
        });
      }
      if (issues.fabricatedSolutions.length > 0) {
        console.log(`  Solutions: ${issues.fabricatedSolutions.length} fabricated`);
      }
      if (issues.fabricatedSupport.length > 0) {
        console.log(`  Support: ${issues.fabricatedSupport.length} fabricated`);
      }
    } else {
      console.log(`[${brand}] OK - No fabricated data found`);
    }
  }
  
  console.log(`\n\n=== Summary ===`);
  console.log(`Brands with issues: ${allIssues.length}`);
  console.log(`Total fabricated products: ${allIssues.reduce((sum, i) => sum + i.fabricatedProducts.length, 0)}`);
  console.log(`Total fabricated solutions: ${allIssues.reduce((sum, i) => sum + i.fabricatedSolutions.length, 0)}`);
  console.log(`Total fabricated support: ${allIssues.reduce((sum, i) => sum + i.fabricatedSupport.length, 0)}`);
  
  // 保存扫描结果
  const scanResultPath = path.join(__dirname, 'brand-scan-results.json');
  fs.writeFileSync(scanResultPath, JSON.stringify(allIssues, null, 2));
  console.log(`\nScan results saved to: ${scanResultPath}`);
  
  return allIssues;
}

// 运行
const issues = main();
process.exit(0);
