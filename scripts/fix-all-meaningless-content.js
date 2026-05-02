#!/usr/bin/env node
/**
 * 全面检测并修复无意义标题、ID、slug
 * 包括：Product X, Solution X, Article X, Technical Article X 等
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 无意义模式 - 更全面的检测
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
  
  // ID/Slug模式
  /^article-\d+$/i,
  /^solution-\d+$/i,
  /^product-\d+$/i,
  /^category-\d+$/i,
  
  // 产品分类+数字序号模式
  /^(IGBT|IGBTs|MOSFET|MOSFETs|Capacitor|Capacitors|Resistor|Resistors|Diode|Diodes|IC|ICs|MCU|MCUs|Sensor|Sensors|Module|Modules|Device|Devices|Component|Components|Chip|Chips|Power|PowerModules|Power Modules)\s*\d+$/i,
  
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

// 检查是否为无意义标题/ID
function isMeaningless(value) {
  if (!value || typeof value !== 'string') return true;
  const trimmed = value.trim();
  if (trimmed.length === 0) return true;
  if (trimmed.toLowerCase() === 'undefined') return true;
  if (trimmed.toLowerCase() === 'null') return true;
  
  return meaninglessPatterns.some(pattern => pattern.test(trimmed));
}

// 生成有意义的slug
function generateSlug(title, brand, type, index) {
  // 如果标题有意义，从标题生成slug
  if (title && !isMeaningless(title)) {
    return title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50);
  }
  
  // 否则基于类型生成
  const typeMap = {
    'article': 'technical-guide',
    'solution': 'application-solution',
    'product': 'product-model'
  };
  
  return `${typeMap[type] || type}-${index + 1}`;
}

// 生成有意义的标题
function generateTitle(brand, type, index) {
  const topics = {
    'article': [
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
    ],
    'solution': [
      'Industrial Control Solution',
      'Automotive Electronics Solution',
      'Consumer Electronics Solution',
      'Communication Systems Solution',
      'Power Management Solution',
      'Motor Control Solution',
      'Lighting Solutions',
      'Renewable Energy Solution',
      'Medical Devices Solution',
      'IoT Applications Solution'
    ]
  };
  
  const list = topics[type] || topics['article'];
  const topic = list[index % list.length];
  return `${topic} - ${brand}`;
}

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
  
  if (data.articles && Array.isArray(data.articles)) {
    data.articles.forEach((article, idx) => {
      // 修复 title
      if (isMeaningless(article.title)) {
        const oldTitle = article.title;
        article.title = generateTitle(brand, 'article', idx);
        fixes.push(`articles[${idx}].title: "${oldTitle}" -> "${article.title}"`);
        fixCount++;
      }
      
      // 修复 id
      if (isMeaningless(article.id)) {
        const oldId = article.id;
        article.id = generateSlug(article.title, brand, 'article', idx);
        fixes.push(`articles[${idx}].id: "${oldId}" -> "${article.id}"`);
        fixCount++;
      }
      
      // 修复 slug
      if (isMeaningless(article.slug)) {
        const oldSlug = article.slug;
        article.slug = article.id || generateSlug(article.title, brand, 'article', idx);
        fixes.push(`articles[${idx}].slug: "${oldSlug}" -> "${article.slug}"`);
        fixCount++;
      }
    });
  }
  
  if (fixCount > 0) {
    try {
      fs.writeFileSync(supportPath, JSON.stringify(data, null, 2), 'utf8');
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
  
  if (data.solutions && Array.isArray(data.solutions)) {
    data.solutions.forEach((solution, idx) => {
      // 修复 name/title
      const title = solution.name || solution.title;
      if (isMeaningless(title)) {
        const oldTitle = title;
        const newTitle = generateTitle(brand, 'solution', idx);
        solution.name = newTitle;
        solution.title = newTitle;
        fixes.push(`solutions[${idx}].name/title: "${oldTitle}" -> "${newTitle}"`);
        fixCount++;
      }
      
      // 修复 id
      if (isMeaningless(solution.id)) {
        const oldId = solution.id;
        solution.id = generateSlug(solution.name || solution.title, brand, 'solution', idx);
        fixes.push(`solutions[${idx}].id: "${oldId}" -> "${solution.id}"`);
        fixCount++;
      }
      
      // 修复 slug
      if (isMeaningless(solution.slug)) {
        const oldSlug = solution.slug;
        solution.slug = solution.id || generateSlug(solution.name || solution.title, brand, 'solution', idx);
        fixes.push(`solutions[${idx}].slug: "${oldSlug}" -> "${solution.slug}"`);
        fixCount++;
      }
    });
  }
  
  if (fixCount > 0) {
    try {
      fs.writeFileSync(solutionsPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      return { fixed: fixCount, errors: [`Save error: ${error.message}`], fixes };
    }
  }
  
  return { fixed: fixCount, errors: [], fixes };
}

// 修复 products.json
function fixProductsJson(brand) {
  const brandDir = path.join(dataDir, brand);
  const productsPath = path.join(brandDir, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    return { fixed: 0, errors: [] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    return { fixed: 0, errors: [`JSON parse error: ${error.message}`] };
  }
  
  let fixCount = 0;
  const fixes = [];
  
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      const categoryName = category.name || `Category ${cIdx + 1}`;
      
      // 修复分类名称
      if (isMeaningless(category.name)) {
        const oldName = category.name;
        category.name = `Product Category ${cIdx + 1}`;
        fixes.push(`Category[${cIdx}].name: "${oldName}" -> "${category.name}"`);
        fixCount++;
      }
      
      // 修复分类id
      if (isMeaningless(category.id)) {
        const oldId = category.id;
        category.id = category.name.toLowerCase().replace(/\s+/g, '-');
        fixes.push(`Category[${cIdx}].id: "${oldId}" -> "${category.id}"`);
        fixCount++;
      }
      
      // 修复产品
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product, pIdx) => {
          // 修复 name
          if (isMeaningless(product.name)) {
            const oldName = product.name;
            if (product.partNumber && !isMeaningless(product.partNumber)) {
              product.name = `${categoryName} ${product.partNumber}`;
            } else {
              product.name = `${categoryName} Series ${String.fromCharCode(65 + pIdx)}`;
            }
            fixes.push(`Category[${cIdx}].products[${pIdx}].name: "${oldName}" -> "${product.name}"`);
            fixCount++;
          }
          
          // 修复 partNumber
          if (isMeaningless(product.partNumber)) {
            const oldPart = product.partNumber;
            product.partNumber = `${brand.toUpperCase()}-${categoryName.substring(0, 3).toUpperCase()}-${String(pIdx + 1).padStart(3, '0')}`;
            fixes.push(`Category[${cIdx}].products[${pIdx}].partNumber: "${oldPart}" -> "${product.partNumber}"`);
            fixCount++;
          }
        });
      }
    });
  }
  
  if (fixCount > 0) {
    try {
      fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      return { fixed: fixCount, errors: [`Save error: ${error.message}`], fixes };
    }
  }
  
  return { fixed: fixCount, errors: [], fixes };
}

// 检测并修复单个品牌
function processBrand(brand) {
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
  console.log('Fix All Meaningless Content');
  console.log('========================================');
  console.log('Fixing:');
  console.log('  - Title: Product 1, Solution 3, Article 5, etc.');
  console.log('  - ID: article-5, solution-3, product-2, etc.');
  console.log('  - Slug: article-5, solution-3, etc.');
  console.log('  - Category + Number: IGBT Module 1, Capacitor 3, etc.');
  
  const brands = getBrandDirs();
  console.log(`\nFound ${brands.length} brands`);
  
  const results = [];
  brands.forEach(brand => {
    results.push(processBrand(brand));
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
  const reportPath = path.join(__dirname, '..', 'brand-fix-all-report.json');
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
