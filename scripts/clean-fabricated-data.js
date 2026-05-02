#!/usr/bin/env node
/**
 * 清理JSON文件中的编造数据
 */

const fs = require('fs');
const path = require('path');

// 需要删除的编造产品partNumber模式
const fabricatedPatterns = [
  /ALUMINUMELECTROLYTIC.*-[34]/,
  /FILMCAPACITOR-[34]/,
  /SUPERCAPACITOR-[34]/,
  /HMEPSERIES-[234]/,
  /HMEHSERIES-[234]/,
  /HMEMSERIES-[34]/,
  /HMEASERIES-[34]/,
  /POWERMOSFETS-[34]/,
  /MOTORRUNCAPACITORS-[34]/,
  /DCLINKCAPACITORS-[34]/,
  /ACFILTERCAPACITORS-[34]/,
  /SNUBBERCAPACITORS-[34]/,
  /INVENTCHIP-PM00[12]/,
  /POWERMANAGEMENT-[34]/,
  /SICMOSFET-[34]/,
  /MODULE-[34]/
];

// 检查是否是编造产品
function isFabricated(partNumber) {
  return fabricatedPatterns.some(pattern => pattern.test(partNumber));
}

// 清理products.json
function cleanProductsJson(filePath) {
  console.log(`Processing: ${filePath}`);
  
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let removedCount = 0;
  
  if (data.categories) {
    data.categories.forEach(category => {
      if (category.products) {
        const originalCount = category.products.length;
        category.products = category.products.filter(product => {
          if (isFabricated(product.partNumber)) {
            console.log(`  Removing fabricated product: ${product.partNumber}`);
            removedCount++;
            return false;
          }
          return true;
        });
        
        // 更新slug如果存在
        if (category.slug && category.slug.includes(' ')) {
          category.slug = category.slug.replace(/\s+/g, '-').toLowerCase();
        }
      }
    });
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Removed ${removedCount} fabricated products`);
  return removedCount;
}

// 清理solutions.json
function cleanSolutionsJson(filePath) {
  console.log(`Processing: ${filePath}`);
  
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let removedCount = 0;
  
  if (data.solutions) {
    const originalCount = data.solutions.length;
    data.solutions = data.solutions.filter(solution => {
      // 删除consumer-electronics-solution-3或包含PROD-1/PROD-2/BOM-1/BOM-2的solution
      if (solution.id === 'consumer-electronics-solution-3' ||
          solution.slug === 'consumer-electronics-solution-3') {
        console.log(`  Removing fabricated solution: ${solution.id || solution.title}`);
        removedCount++;
        return false;
      }
      
      // 检查是否包含编造的产品引用
      if (solution.products) {
        const hasFabricatedProducts = solution.products.some(p => 
          p.partNumber === 'PROD-1' || p.partNumber === 'PROD-2' ||
          p.partNumber === 'BOM-1' || p.partNumber === 'BOM-2'
        );
        if (hasFabricatedProducts) {
          console.log(`  Removing fabricated solution: ${solution.id || solution.title}`);
          removedCount++;
          return false;
        }
      }
      
      // 检查bomList是否包含编造数据
      if (solution.bomList && Array.isArray(solution.bomList)) {
        const hasFabricatedBom = solution.bomList.some(item => 
          item.partNumber === 'BOM-1' || item.partNumber === 'BOM-2'
        );
        if (hasFabricatedBom) {
          console.log(`  Removing fabricated solution: ${solution.id || solution.title}`);
          removedCount++;
          return false;
        }
      }
      
      return true;
    });
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Removed ${removedCount} fabricated solutions`);
  return removedCount;
}

// 清理support.json
function cleanSupportJson(filePath) {
  console.log(`Processing: ${filePath}`);
  
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let removedCount = 0;
  
  if (data.articles) {
    data.articles = data.articles.filter(article => {
      // 删除migration-guide或包含编造内容的article
      if (article.id === 'migration-guide' || article.slug === 'migration-guide') {
        console.log(`  Removing fabricated article: ${article.id || article.title}`);
        removedCount++;
        return false;
      }
      
      // 删除hme-migration-guide
      if (article.id === 'hme-migration-guide' || article.slug === 'hme-migration-guide') {
        console.log(`  Removing fabricated article: ${article.id || article.title}`);
        removedCount++;
        return false;
      }
      
      // 删除design-guidelines---brandname格式的文章
      if (article.id && article.id.startsWith('design-guidelines---')) {
        console.log(`  Removing fabricated article: ${article.id || article.title}`);
        removedCount++;
        return false;
      }
      
      return true;
    });
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Removed ${removedCount} fabricated articles`);
  return removedCount;
}

// 主函数
function main() {
  const brands = ['jianghai', 'jingwei-qili', 'electronicon', 'injoinic', 'inventchip', 'ixys'];
  
  console.log('Starting to clean fabricated data...\n');
  
  brands.forEach(brand => {
    const brandDir = path.join(__dirname, '..', 'data', brand);
    
    if (!fs.existsSync(brandDir)) {
      console.log(`Brand directory not found: ${brandDir}`);
      return;
    }
    
    console.log(`\n=== Processing brand: ${brand} ===`);
    
    // 清理products.json
    const productsPath = path.join(brandDir, 'products.json');
    if (fs.existsSync(productsPath)) {
      try {
        cleanProductsJson(productsPath);
      } catch (e) {
        console.error(`  Error cleaning products.json: ${e.message}`);
      }
    }
    
    // 清理solutions.json
    const solutionsPath = path.join(brandDir, 'solutions.json');
    if (fs.existsSync(solutionsPath)) {
      try {
        cleanSolutionsJson(solutionsPath);
      } catch (e) {
        console.error(`  Error cleaning solutions.json: ${e.message}`);
      }
    }
    
    // 清理support.json
    const supportPath = path.join(brandDir, 'support.json');
    if (fs.existsSync(supportPath)) {
      try {
        cleanSupportJson(supportPath);
      } catch (e) {
        console.error(`  Error cleaning support.json: ${e.message}`);
      }
    }
  });
  
  console.log('\n=== Cleaning completed ===');
}

main();
