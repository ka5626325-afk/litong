#!/usr/bin/env node
/**
 * 按品牌次序依次检测并修复无意义标题和内容
 * 检测 products, solutions, support 列表页
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

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

// 中文检测正则
const chinesePattern = /[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]/;

// 获取所有品牌目录（按字母顺序）
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

// 检查是否为无意义标题
function isMeaninglessTitle(title) {
  if (!title || typeof title !== 'string') return true;
  const trimmed = title.trim();
  if (trimmed.length === 0) return true;
  if (trimmed.toLowerCase() === 'undefined') return true;
  
  return meaninglessPatterns.some(pattern => pattern.test(trimmed));
}

// 检查是否包含中文
function containsChinese(text) {
  if (!text || typeof text !== 'string') return false;
  return chinesePattern.test(text);
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
  const fixes = [];
  
  // 修复分类和产品
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      const categoryName = category.name || `Category ${cIdx + 1}`;
      
      // 修复分类名称
      if (isMeaninglessTitle(category.name)) {
        const oldName = category.name;
        category.name = `Product Category ${cIdx + 1}`;
        fixes.push(`Category[${cIdx}].name: "${oldName}" -> "${category.name}"`);
        fixCount++;
      }
      
      // 修复产品
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product, pIdx) => {
          // 修复 name
          if (isMeaninglessTitle(product.name)) {
            const oldName = product.name;
            product.name = generateProductName(categoryName, product.partNumber, pIdx);
            fixes.push(`Category[${cIdx}].products[${pIdx}].name: "${oldName}" -> "${product.name}"`);
            fixCount++;
          }
          
          // 修复 partNumber
          if (isMeaninglessTitle(product.partNumber)) {
            const oldPart = product.partNumber;
            product.partNumber = `${brand.toUpperCase()}-${categoryName.substring(0, 3).toUpperCase()}-${String(pIdx + 1).padStart(3, '0')}`;
            fixes.push(`Category[${cIdx}].products[${pIdx}].partNumber: "${oldPart}" -> "${product.partNumber}"`);
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
      return { fixed: fixCount, errors: [`Save error: ${error.message}`], fixes };
    }
  }
  
  return { fixed: fixCount, errors: [], fixes };
}

// 修复 solutions.json
function fixSolutionsJson(brand) {
  const brandDir = path.join(dataDir, brand);
  const solutionsPath = path.join(brandDir, 'solutions.json');
  
  if (!fs.existsSync(solutionsPath)) {
    return { fixed: 0, errors: [] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
  } catch (error) {
    return { fixed: 0, errors: [`JSON parse error: ${error.message}`] };
  }
  
  let fixCount = 0;
  const fixes = [];
  
  // 修复解决方案
  if (data.solutions && Array.isArray(data.solutions)) {
    data.solutions.forEach((solution, sIdx) => {
      if (isMeaninglessTitle(solution.name) || isMeaninglessTitle(solution.title)) {
        const oldName = solution.name || solution.title;
        const newName = generateSolutionName(brand, sIdx);
        solution.name = newName;
        solution.title = newName;
        fixes.push(`solutions[${sIdx}].name/title: "${oldName}" -> "${newName}"`);
        fixCount++;
      }
    });
  }
  
  // 保存修改
  if (fixCount > 0) {
    try {
      fs.writeFileSync(solutionsPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      return { fixed: fixCount, errors: [`Save error: ${error.message}`], fixes };
    }
  }
  
  return { fixed: fixCount, errors: [], fixes };
}

// 修复 support.json
function fixSupportJson(brand) {
  const brandDir = path.join(dataDir, brand);
  const supportPath = path.join(brandDir, 'support.json');
  
  if (!fs.existsSync(supportPath)) {
    return { fixed: 0, errors: [] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
  } catch (error) {
    return { fixed: 0, errors: [`JSON parse error: ${error.message}`] };
  }
  
  let fixCount = 0;
  const fixes = [];
  
  // 修复文章
  if (data.articles && Array.isArray(data.articles)) {
    data.articles.forEach((article, aIdx) => {
      if (isMeaninglessTitle(article.title)) {
        const oldTitle = article.title;
        article.title = generateArticleTitle(brand, aIdx);
        fixes.push(`articles[${aIdx}].title: "${oldTitle}" -> "${article.title}"`);
        fixCount++;
      }
    });
  }
  
  // 保存修改
  if (fixCount > 0) {
    try {
      fs.writeFileSync(supportPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      return { fixed: fixCount, errors: [`Save error: ${error.message}`], fixes };
    }
  }
  
  return { fixed: fixCount, errors: [], fixes };
}

// 检测并修复单个品牌
function checkAndFixBrand(brand) {
  console.log(`\n========================================`);
  console.log(`Processing brand: ${brand}`);
  console.log(`========================================`);
  
  const productsResult = fixProductsJson(brand);
  const solutionsResult = fixSolutionsJson(brand);
  const supportResult = fixSupportJson(brand);
  
  const totalFixed = productsResult.fixed + solutionsResult.fixed + supportResult.fixed;
  const allErrors = [
    ...productsResult.errors,
    ...solutionsResult.errors,
    ...supportResult.errors
  ];
  const allFixes = [
    ...(productsResult.fixes || []),
    ...(solutionsResult.fixes || []),
    ...(supportResult.fixes || [])
  ];
  
  if (totalFixed === 0 && allErrors.length === 0) {
    console.log('  ✅ No issues found');
  } else {
    if (allFixes.length > 0) {
      console.log(`\n  🔧 Fixed ${totalFixed} issues:`);
      allFixes.forEach(fix => console.log(`    - ${fix}`));
    }
    
    if (allErrors.length > 0) {
      console.log(`\n  ❌ Errors:`);
      allErrors.forEach(err => console.log(`    - ${err}`));
    }
  }
  
  return {
    brand,
    fixed: totalFixed,
    errors: allErrors.length,
    fixes: allFixes
  };
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Check and Fix by Brand Order');
  console.log('========================================');
  console.log('Checking and fixing:');
  console.log('  - Products (categories, products)');
  console.log('  - Solutions (solution names)');
  console.log('  - Support (article titles)');
  
  const brands = getBrandDirs();
  console.log(`\nFound ${brands.length} brands`);
  
  const results = [];
  brands.forEach(brand => {
    results.push(checkAndFixBrand(brand));
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
    brandsFixed.forEach(r => {
      console.log(`  - ${r.brand}: ${r.fixed} fixes`);
    });
  }
  
  if (brandsWithErrors.length > 0) {
    console.log('\nBrands with errors:');
    brandsWithErrors.forEach(r => {
      console.log(`  - ${r.brand}: ${r.errors} errors`);
    });
  }
  
  // 保存详细报告
  const reportPath = path.join(__dirname, '..', 'brand-fix-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    summary: {
      total: brands.length,
      totalFixed,
      brandsFixed: brandsFixed.length,
      brandsWithErrors: brandsWithErrors.length
    },
    details: results.filter(r => r.fixed > 0 || r.errors > 0)
  }, null, 2));
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
}

main();
