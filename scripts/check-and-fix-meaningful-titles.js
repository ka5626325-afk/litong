#!/usr/bin/env node
/**
 * 按品牌次序依次检测并修复无意义标题和内容
 * 检测 products, solutions, support 列表页
 * 包括：Product 1, Solution 3, IGBT Module 1, Technical Article 2 等模式
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 无意义标题模式 - 扩展版本
const meaninglessPatterns = [
  // 基础数字序号模式
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
  
  // 产品分类+数字序号模式
  /^(IGBT|IGBTs|MOSFET|MOSFETs|Capacitor|Capacitors|Resistor|Resistors|Diode|Diodes|IC|ICs|MCU|MCUs|Sensor|Sensors|Module|Modules|Device|Devices|Component|Components|Chip|Chips)\s*\d+$/i,
  /^(Power|Voltage|Current|Signal|Logic|Analog|Digital|Memory|Storage|Battery|LED|LCD|Display|Connector|Relay|Switch|Transistor|Thyristor|Triac)\s*\d+$/i,
  /^(Aluminum|Ceramic|Film|Tantalum|Electrolytic|Solid|Polymer)\s+\w+\s*\d+$/i,
  
  // Technical Article/Document + 数字
  /^Technical\s+(Article|Document|Paper|Guide|Note|Reference)\s*\d+$/i,
  /^Tech\s+(Article|Doc|Note|Guide)\s*\d+$/i,
  
  // 占位符和测试内容
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
  /^Temporary$/i,
  /^Draft$/i,
  /^Untitled$/i,
  /^No\s*Title$/i,
  /^New\s*(Product|Solution|Article)$/i,
  
  // 中文模式（任何包含中文的标题）
  /[\u4e00-\u9fff]/
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
  if (trimmed.toLowerCase() === 'null') return true;
  
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
function generateSolutionName(brand, index) {
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
function generateArticleTitle(brand, index) {
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
  return `${topic} - ${brand}`;
}

// 检测 products.json 中的问题
function checkProductsJson(brand) {
  const brandDir = path.join(dataDir, brand);
  const productsPath = path.join(brandDir, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    return { issues: [], errors: ['products.json not found'] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    return { issues: [], errors: [`JSON parse error: ${error.message}`] };
  }
  
  const issues = [];
  
  // 检查分类和产品
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      const categoryName = category.name || `Category ${cIdx + 1}`;
      
      // 检查分类名称
      if (isMeaninglessTitle(category.name)) {
        issues.push({
          type: 'meaningless',
          field: `categories[${cIdx}].name`,
          value: category.name,
          suggestion: `Product Category ${cIdx + 1}`
        });
      }
      
      // 检查产品
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product, pIdx) => {
          // 检查 name
          if (isMeaninglessTitle(product.name)) {
            issues.push({
              type: 'meaningless',
              field: `categories[${cIdx}].products[${pIdx}].name`,
              value: product.name,
              suggestion: generateProductName(categoryName, product.partNumber, pIdx)
            });
          }
          
          // 检查 partNumber
          if (isMeaninglessTitle(product.partNumber)) {
            issues.push({
              type: 'meaningless',
              field: `categories[${cIdx}].products[${pIdx}].partNumber`,
              value: product.partNumber,
              suggestion: `${brand.toUpperCase()}-${categoryName.substring(0, 3).toUpperCase()}-${String(pIdx + 1).padStart(3, '0')}`
            });
          }
          
          // 检查 shortDescription
          if (isMeaninglessTitle(product.shortDescription)) {
            issues.push({
              type: 'meaningless',
              field: `categories[${cIdx}].products[${pIdx}].shortDescription`,
              value: product.shortDescription,
              suggestion: 'Need meaningful description'
            });
          }
        });
      }
    });
  }
  
  return { issues, errors: [] };
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

// 检测 solutions.json 中的问题
function checkSolutionsJson(brand) {
  const brandDir = path.join(dataDir, brand);
  const solutionsPath = path.join(brandDir, 'solutions.json');
  
  if (!fs.existsSync(solutionsPath)) {
    return { issues: [], errors: [] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
  } catch (error) {
    return { issues: [], errors: [`JSON parse error: ${error.message}`] };
  }
  
  const issues = [];
  
  // 检查解决方案
  if (data.solutions && Array.isArray(data.solutions)) {
    data.solutions.forEach((solution, sIdx) => {
      const title = solution.name || solution.title;
      if (isMeaninglessTitle(title)) {
        issues.push({
          type: 'meaningless',
          field: `solutions[${sIdx}].name/title`,
          value: title,
          suggestion: generateSolutionName(brand, sIdx)
        });
      }
    });
  }
  
  return { issues, errors: [] };
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
      const title = solution.name || solution.title;
      if (isMeaninglessTitle(title)) {
        const oldName = title;
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

// 检测 support.json 中的问题
function checkSupportJson(brand) {
  const brandDir = path.join(dataDir, brand);
  const supportPath = path.join(brandDir, 'support.json');
  
  if (!fs.existsSync(supportPath)) {
    return { issues: [], errors: [] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
  } catch (error) {
    return { issues: [], errors: [`JSON parse error: ${error.message}`] };
  }
  
  const issues = [];
  
  // 检查文章
  if (data.articles && Array.isArray(data.articles)) {
    data.articles.forEach((article, aIdx) => {
      if (isMeaninglessTitle(article.title)) {
        issues.push({
          type: 'meaningless',
          field: `articles[${aIdx}].title`,
          value: article.title,
          suggestion: generateArticleTitle(brand, aIdx)
        });
      }
    });
  }
  
  return { issues, errors: [] };
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
function checkAndFixBrand(brand, fixMode = false) {
  console.log(`\n========================================`);
  console.log(`Processing brand: ${brand}`);
  console.log(`========================================`);
  
  let productsResult, solutionsResult, supportResult;
  
  if (fixMode) {
    productsResult = fixProductsJson(brand);
    solutionsResult = fixSolutionsJson(brand);
    supportResult = fixSupportJson(brand);
  } else {
    productsResult = checkProductsJson(brand);
    solutionsResult = checkSolutionsJson(brand);
    supportResult = checkSupportJson(brand);
  }
  
  const totalIssues = productsResult.issues?.length || productsResult.fixed || 0;
  const totalFixed = productsResult.fixed + solutionsResult.fixed + supportResult.fixed;
  const allErrors = [
    ...(productsResult.errors || []),
    ...(solutionsResult.errors || []),
    ...(supportResult.errors || [])
  ];
  const allFixes = [
    ...(productsResult.fixes || []),
    ...(solutionsResult.fixes || []),
    ...(supportResult.fixes || [])
  ];
  
  // 显示检测到的issues（非修复模式）
  if (!fixMode) {
    const allIssues = [
      ...(productsResult.issues || []),
      ...(solutionsResult.issues || []),
      ...(supportResult.issues || [])
    ];
    
    if (allIssues.length > 0) {
      console.log(`\n  ⚠️  Found ${allIssues.length} issues:`);
      allIssues.forEach(issue => {
        console.log(`    - ${issue.field}: "${issue.value}" -> Suggest: "${issue.suggestion}"`);
      });
    }
  }
  
  // 显示修复结果
  if (totalFixed === 0 && allErrors.length === 0 && (!productsResult.issues || productsResult.issues.length === 0)) {
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
    fixes: allFixes,
    issues: !fixMode ? [
      ...(productsResult.issues || []),
      ...(solutionsResult.issues || []),
      ...(supportResult.issues || [])
    ] : []
  };
}

// 主函数
function main() {
  const args = process.argv.slice(2);
  const fixMode = args.includes('--fix');
  
  console.log('========================================');
  console.log('Check and Fix Meaningful Titles by Brand Order');
  console.log('========================================');
  console.log(`Mode: ${fixMode ? 'FIX' : 'CHECK ONLY'}`);
  console.log('Checking patterns:');
  console.log('  - Product 1, Product 2, ...');
  console.log('  - Solution 1, Solution 2, ...');
  console.log('  - IGBT Module 1, Capacitor 3, ...');
  console.log('  - Technical Article 1, ...');
  console.log('  - Any Chinese content');
  
  const brands = getBrandDirs();
  console.log(`\nFound ${brands.length} brands`);
  
  const results = [];
  brands.forEach(brand => {
    results.push(checkAndFixBrand(brand, fixMode));
  });
  
  // 汇总报告
  console.log('\n\n========================================');
  console.log('Summary Report');
  console.log('========================================');
  
  const totalFixed = results.reduce((sum, r) => sum + r.fixed, 0);
  const totalIssues = results.reduce((sum, r) => sum + (r.issues?.length || 0), 0);
  const brandsWithErrors = results.filter(r => r.errors > 0);
  const brandsFixed = results.filter(r => r.fixed > 0);
  const brandsWithIssues = results.filter(r => r.issues && r.issues.length > 0);
  
  if (fixMode) {
    console.log(`\n🔧 Total fixes: ${totalFixed}`);
    console.log(`🔧 Brands fixed: ${brandsFixed.length}`);
  } else {
    console.log(`\n⚠️  Total issues found: ${totalIssues}`);
    console.log(`⚠️  Brands with issues: ${brandsWithIssues.length}`);
  }
  console.log(`❌ Brands with errors: ${brandsWithErrors.length}`);
  
  if (brandsFixed.length > 0) {
    console.log('\nBrands with fixes:');
    brandsFixed.forEach(r => {
      console.log(`  - ${r.brand}: ${r.fixed} fixes`);
    });
  }
  
  if (!fixMode && brandsWithIssues.length > 0) {
    console.log('\nBrands with issues:');
    brandsWithIssues.forEach(r => {
      console.log(`  - ${r.brand}: ${r.issues.length} issues`);
    });
  }
  
  if (brandsWithErrors.length > 0) {
    console.log('\nBrands with errors:');
    brandsWithErrors.forEach(r => {
      console.log(`  - ${r.brand}: ${r.errors} errors`);
    });
  }
  
  // 保存详细报告
  const reportPath = path.join(__dirname, '..', 'brand-meaningful-titles-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    summary: {
      total: brands.length,
      totalFixed,
      totalIssues,
      brandsFixed: brandsFixed.length,
      brandsWithIssues: brandsWithIssues.length,
      brandsWithErrors: brandsWithErrors.length
    },
    details: results.filter(r => r.fixed > 0 || r.errors > 0 || (r.issues && r.issues.length > 0))
  }, null, 2));
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  
  if (!fixMode && totalIssues > 0) {
    console.log(`\n💡 Run with --fix flag to auto-fix issues:`);
    console.log(`   node scripts/check-and-fix-meaningful-titles.js --fix`);
  }
}

main();
