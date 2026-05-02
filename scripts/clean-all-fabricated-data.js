#!/usr/bin/env node
/**
 * 清理所有品牌JSON文件中的编造数据
 */

const fs = require('fs');
const path = require('path');

// 需要删除的编造产品partNumber模式
const fabricatedPatterns = [
  // 通用编造产品模式
  /-[234]$/,  // 以-2, -3, -4结尾的产品型号
  /SERIES-[234]$/,  // SERIES-2, SERIES-3, SERIES-4
  /CAPACITORS-[34]/,
  /MOSFETS-[34]/,
  /PRODUCT-[12]/,
  /PROD-[12]/,
  /BOM-[12]/,
  /ALT-[234]-[A-Z]/,
  /COMP-[123]/,
  /FPGA-[12]/,
  /MODULE-[34]/,
  /SOLUTION-3/,
  // 品牌特定编造模式
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
  if (!partNumber) return false;
  return fabricatedPatterns.some(pattern => pattern.test(partNumber));
}

// 清理products.json
function cleanProductsJson(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let removedCount = 0;
  
  if (data.categories) {
    data.categories.forEach(category => {
      if (category.products) {
        const originalCount = category.products.length;
        category.products = category.products.filter(product => {
          if (isFabricated(product.partNumber)) {
            console.log(`    Removing fabricated product: ${product.partNumber}`);
            removedCount++;
            return false;
          }
          return true;
        });
      }
    });
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  return removedCount;
}

// 清理solutions.json
function cleanSolutionsJson(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let removedCount = 0;
  
  if (data.solutions) {
    data.solutions = data.solutions.filter(solution => {
      // 删除consumer-electronics-solution-3或包含PROD-1/PROD-2/BOM-1/BOM-2的solution
      if (solution.id === 'consumer-electronics-solution-3' ||
          solution.slug === 'consumer-electronics-solution-3') {
        console.log(`    Removing fabricated solution: ${solution.id || solution.title}`);
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
          console.log(`    Removing fabricated solution: ${solution.id || solution.title}`);
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
          console.log(`    Removing fabricated solution: ${solution.id || solution.title}`);
          removedCount++;
          return false;
        }
      }
      
      return true;
    });
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  return removedCount;
}

// 清理support.json
function cleanSupportJson(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let removedCount = 0;
  
  if (data.articles) {
    data.articles = data.articles.filter(article => {
      // 删除migration-guide或包含编造内容的article
      if (article.id === 'migration-guide' || article.slug === 'migration-guide') {
        console.log(`    Removing fabricated article: ${article.id || article.title}`);
        removedCount++;
        return false;
      }
      
      // 删除hme-migration-guide
      if (article.id === 'hme-migration-guide' || article.slug === 'hme-migration-guide') {
        console.log(`    Removing fabricated article: ${article.id || article.title}`);
        removedCount++;
        return false;
      }
      
      // 删除design-guidelines---brandname格式的文章
      if (article.id && article.id.startsWith('design-guidelines---')) {
        console.log(`    Removing fabricated article: ${article.id || article.title}`);
        removedCount++;
        return false;
      }
      
      return true;
    });
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  return removedCount;
}

// 获取所有品牌目录
function getAllBrands() {
  const dataDir = path.join(__dirname, '..', 'data');
  return fs.readdirSync(dataDir).filter(item => {
    const itemPath = path.join(dataDir, item);
    return fs.statSync(itemPath).isDirectory();
  }).sort(); // 按字母顺序排序
}

// 主函数
function main() {
  const brands = getAllBrands();
  
  console.log(`Found ${brands.length} brands to process\n`);
  
  let totalProductsRemoved = 0;
  let totalSolutionsRemoved = 0;
  let totalArticlesRemoved = 0;
  
  brands.forEach((brand, index) => {
    const brandDir = path.join(__dirname, '..', 'data', brand);
    
    if (!fs.existsSync(brandDir)) {
      return;
    }
    
    console.log(`[${index + 1}/${brands.length}] Processing brand: ${brand}`);
    
    // 清理products.json
    const productsPath = path.join(brandDir, 'products.json');
    if (fs.existsSync(productsPath)) {
      try {
        const count = cleanProductsJson(productsPath);
        if (count > 0) {
          console.log(`    Removed ${count} fabricated products`);
          totalProductsRemoved += count;
        }
      } catch (e) {
        console.error(`    Error cleaning products.json: ${e.message}`);
      }
    }
    
    // 清理solutions.json
    const solutionsPath = path.join(brandDir, 'solutions.json');
    if (fs.existsSync(solutionsPath)) {
      try {
        const count = cleanSolutionsJson(solutionsPath);
        if (count > 0) {
          console.log(`    Removed ${count} fabricated solutions`);
          totalSolutionsRemoved += count;
        }
      } catch (e) {
        console.error(`    Error cleaning solutions.json: ${e.message}`);
      }
    }
    
    // 清理support.json
    const supportPath = path.join(brandDir, 'support.json');
    if (fs.existsSync(supportPath)) {
      try {
        const count = cleanSupportJson(supportPath);
        if (count > 0) {
          console.log(`    Removed ${count} fabricated articles`);
          totalArticlesRemoved += count;
        }
      } catch (e) {
        console.error(`    Error cleaning support.json: ${e.message}`);
      }
    }
  });
  
  console.log('\n=== Cleaning Summary ===');
  console.log(`Total fabricated products removed: ${totalProductsRemoved}`);
  console.log(`Total fabricated solutions removed: ${totalSolutionsRemoved}`);
  console.log(`Total fabricated articles removed: ${totalArticlesRemoved}`);
  console.log('\nCleaning completed!');
}

main();
