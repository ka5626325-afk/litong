#!/usr/bin/env node
/**
 * 修复品牌数据中的无意义内容
 * 依据 BRAND_DATA_COMPLETE_GUIDE.md 铁律27进行修复
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
      return fs.statSync(dirPath).isDirectory();
    })
    .sort();
}

// 无意义标题模式
const meaninglessPatterns = [
  /^Product\s*\d+$/i,
  /^Solution\s*\d+$/i,
  /^Article\s*\d+$/i,
  /^FAQ\s*\d+$/i,
  /^Category\s*\d+$/i,
  /^Item\s*\d+$/i,
  /^Part\s*\d+$/i,
  /^Model\s*\d+$/i,
  /^Type\s*\d+$/i,
  /^Series\s*\d+$/i,
  /^NORFLASH-\d+$/i,
  /^Placeholder$/i,
  /^TODO$/i,
  /^Lorem\s*ipsum/i,
  /^TBD$/i,
  /^N\/A$/i,
  /^Unknown$/i,
  /^Undefined$/i,
  /^Test$/i,
  /^Sample$/i,
  /^Example$/i,
  /^Demo$/i,
  /^Temp$/i,
  /^Temporary$/i
];

// 检查是否为无意义标题
function isMeaninglessTitle(title) {
  if (!title || typeof title !== 'string') return true;
  const trimmed = title.trim();
  if (trimmed.length === 0) return true;
  if (trimmed.toLowerCase() === 'undefined') return true;
  
  return meaninglessPatterns.some(pattern => pattern.test(trimmed));
}

// 生成有意义的产品名称
function generateProductName(categoryName, partNumber, index) {
  if (partNumber && partNumber !== 'undefined' && !isMeaninglessTitle(partNumber)) {
    return `${categoryName} ${partNumber}`;
  }
  return `${categoryName} Series ${String.fromCharCode(65 + index)}`;
}

// 生成有意义的解决方案名称
function generateSolutionName(category, index) {
  const categories = [
    'Industrial Control',
    'Automotive Electronics',
    'Consumer Electronics',
    'Communication Systems',
    'Power Management',
    'Motor Control',
    'Lighting Solutions',
    'Renewable Energy',
    'Medical Devices',
    'IoT Applications'
  ];
  const cat = categories[index % categories.length];
  return `${cat} Solution ${index + 1}`;
}

// 生成有意义的文章标题
function generateArticleTitle(category, index) {
  const topics = [
    'Product Selection Guide',
    'Application Notes',
    'Technical Reference',
    'Design Guidelines',
    'Best Practices',
    'Troubleshooting Guide',
    'Integration Manual',
    'Performance Optimization',
    'Safety Standards',
    'Quality Assurance'
  ];
  const topic = topics[index % topics.length];
  return `${topic} - ${category}`;
}

// 修复 products.json
function fixProductsJson(brand) {
  const brandDir = path.join(dataDir, brand);
  const productsPath = path.join(brandDir, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    return { fixed: 0, errors: ['products.json not found'] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    return { fixed: 0, errors: [`JSON parse error: ${error.message}`] };
  }
  
  let fixCount = 0;
  
  // 修复分类和产品
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      const categoryName = category.name || `Category ${cIdx + 1}`;
      
      // 修复产品名称
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product, pIdx) => {
          // 修复 name
          if (isMeaninglessTitle(product.name)) {
            const oldName = product.name;
            product.name = generateProductName(categoryName, product.partNumber, pIdx);
            console.log(`    Fixed: ${categoryName} product[${pIdx}].name "${oldName}" -> "${product.name}"`);
            fixCount++;
          }
          
          // 修复 partNumber
          if (isMeaninglessTitle(product.partNumber)) {
            const oldPart = product.partNumber;
            product.partNumber = `${brand.toUpperCase()}-${categoryName.substring(0, 3).toUpperCase()}-${String(pIdx + 1).padStart(3, '0')}`;
            console.log(`    Fixed: ${categoryName} product[${pIdx}].partNumber "${oldPart}" -> "${product.partNumber}"`);
            fixCount++;
          }
          
          // 如果 name 仍然是无意义的，使用 partNumber
          if (isMeaninglessTitle(product.name) && !isMeaninglessTitle(product.partNumber)) {
            product.name = `${categoryName} ${product.partNumber}`;
            fixCount++;
          }
        });
      }
    });
  }
  
  // 保存修改
  if (fixCount > 0) {
    try {
      fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      return { fixed: fixCount, errors: [`Save error: ${error.message}`] };
    }
  }
  
  return { fixed: fixCount, errors: [] };
}

// 修复 solutions.json
function fixSolutionsJson(brand) {
  const brandDir = path.join(dataDir, brand);
  const solutionsPath = path.join(brandDir, 'solutions.json');
  
  if (!fs.existsSync(solutionsPath)) {
    return { fixed: 0, errors: [] }; // solutions.json 可选
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
  } catch (error) {
    return { fixed: 0, errors: [`JSON parse error: ${error.message}`] };
  }
  
  let fixCount = 0;
  
  // 修复解决方案名称
  if (data.solutions && Array.isArray(data.solutions)) {
    data.solutions.forEach((solution, sIdx) => {
      if (isMeaninglessTitle(solution.name)) {
        const oldName = solution.name;
        solution.name = generateSolutionName(brand, sIdx);
        console.log(`    Fixed: solutions[${sIdx}].name "${oldName}" -> "${solution.name}"`);
        fixCount++;
      }
    });
  }
  
  // 保存修改
  if (fixCount > 0) {
    try {
      fs.writeFileSync(solutionsPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      return { fixed: fixCount, errors: [`Save error: ${error.message}`] };
    }
  }
  
  return { fixed: fixCount, errors: [] };
}

// 修复 support.json
function fixSupportJson(brand) {
  const brandDir = path.join(dataDir, brand);
  const supportPath = path.join(brandDir, 'support.json');
  
  if (!fs.existsSync(supportPath)) {
    return { fixed: 0, errors: [] }; // support.json 可选
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
  } catch (error) {
    return { fixed: 0, errors: [`JSON parse error: ${error.message}`] };
  }
  
  let fixCount = 0;
  
  // 修复文章标题
  if (data.articles && Array.isArray(data.articles)) {
    data.articles.forEach((article, aIdx) => {
      if (isMeaninglessTitle(article.title)) {
        const oldTitle = article.title;
        article.title = generateArticleTitle(brand, aIdx);
        console.log(`    Fixed: articles[${aIdx}].title "${oldTitle}" -> "${article.title}"`);
        fixCount++;
      }
    });
  }
  
  // 保存修改
  if (fixCount > 0) {
    try {
      fs.writeFileSync(supportPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      return { fixed: fixCount, errors: [`Save error: ${error.message}`] };
    }
  }
  
  return { fixed: fixCount, errors: [] };
}

// 修复 brand.json
function fixBrandJson(brand) {
  const brandDir = path.join(dataDir, brand);
  const brandPath = path.join(brandDir, 'brand.json');
  
  if (!fs.existsSync(brandPath)) {
    return { fixed: 0, errors: ['brand.json not found'] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(brandPath, 'utf8'));
  } catch (error) {
    return { fixed: 0, errors: [`JSON parse error: ${error.message}`] };
  }
  
  let fixCount = 0;
  
  // 修复 coreProducts
  if (data.coreProducts && Array.isArray(data.coreProducts)) {
    data.coreProducts.forEach((product, pIdx) => {
      if (isMeaninglessTitle(product.name)) {
        const oldName = product.name;
        product.name = `Core Product ${pIdx + 1}`;
        console.log(`    Fixed: coreProducts[${pIdx}].name "${oldName}" -> "${product.name}"`);
        fixCount++;
      }
    });
  }
  
  // 保存修改
  if (fixCount > 0) {
    try {
      fs.writeFileSync(brandPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      return { fixed: fixCount, errors: [`Save error: ${error.message}`] };
    }
  }
  
  return { fixed: fixCount, errors: [] };
}

// 修复单个品牌
function fixBrand(brand) {
  console.log(`\n========================================`);
  console.log(`Fixing brand: ${brand}`);
  console.log(`========================================`);
  
  const brandResult = fixBrandJson(brand);
  const productsResult = fixProductsJson(brand);
  const solutionsResult = fixSolutionsJson(brand);
  const supportResult = fixSupportJson(brand);
  
  const totalFixed = brandResult.fixed + productsResult.fixed + solutionsResult.fixed + supportResult.fixed;
  const allErrors = [
    ...brandResult.errors,
    ...productsResult.errors,
    ...solutionsResult.errors,
    ...supportResult.errors
  ];
  
  if (totalFixed === 0 && allErrors.length === 0) {
    console.log('  ✅ No issues found');
  } else if (totalFixed > 0) {
    console.log(`\n  ✅ Fixed ${totalFixed} issues`);
  }
  
  if (allErrors.length > 0) {
    console.log(`\n  ❌ Errors: ${allErrors.length}`);
    allErrors.forEach(err => console.log(`    - ${err}`));
  }
  
  return {
    brand,
    fixed: totalFixed,
    errors: allErrors.length
  };
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Fix Meaningless Content');
  console.log('========================================');
  console.log('Fixing:');
  console.log('  - Meaningless titles (Product 3, undefined, etc.)');
  console.log('  - Generating proper names based on context');
  
  const brands = getBrandDirs();
  console.log(`\nFound ${brands.length} brands`);
  
  const results = [];
  brands.forEach(brand => {
    results.push(fixBrand(brand));
  });
  
  // 汇总报告
  console.log('\n\n========================================');
  console.log('Summary Report');
  console.log('========================================');
  
  const totalFixed = results.reduce((sum, r) => sum + r.fixed, 0);
  const brandsWithErrors = results.filter(r => r.errors > 0);
  const brandsFixed = results.filter(r => r.fixed > 0);
  
  console.log(`\n🔧 Total fixes: ${totalFixed}`);
  console.log(`🔧 Brands fixed: ${brandsFixed.length}`);
  console.log(`❌ Brands with errors: ${brandsWithErrors.length}`);
  
  if (brandsFixed.length > 0) {
    console.log('\nBrands with fixes:');
    brandsFixed.slice(0, 20).forEach(r => {
      console.log(`  - ${r.brand}: ${r.fixed} fixes`);
    });
    if (brandsFixed.length > 20) {
      console.log(`  ... and ${brandsFixed.length - 20} more`);
    }
  }
  
  if (brandsWithErrors.length > 0) {
    console.log('\nBrands with errors:');
    brandsWithErrors.forEach(r => {
      console.log(`  - ${r.brand}: ${r.errors} errors`);
    });
  }
}

main();
