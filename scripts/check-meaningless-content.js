#!/usr/bin/env node
/**
 * 检查品牌数据中的无意义内容
 * 依据 BRAND_DATA_COMPLETE_GUIDE.md 铁律27进行检查
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

// 检查是否为无意义标题
function isMeaninglessTitle(title) {
  if (!title || typeof title !== 'string') return true;
  const trimmed = title.trim();
  if (trimmed.length === 0) return true;
  
  return meaninglessPatterns.some(pattern => pattern.test(trimmed));
}

// 检查是否包含中文
function containsChinese(text) {
  if (!text || typeof text !== 'string') return false;
  return chinesePattern.test(text);
}

// 检查 brand.json
function checkBrandJson(brand) {
  const issues = [];
  const brandDir = path.join(dataDir, brand);
  const brandPath = path.join(brandDir, 'brand.json');
  
  if (!fs.existsSync(brandPath)) {
    return { issues: [{ type: 'error', message: 'brand.json not found' }] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(brandPath, 'utf8'));
  } catch (error) {
    return { issues: [{ type: 'error', message: `JSON parse error: ${error.message}` }] };
  }
  
  // 检查品牌名称
  if (isMeaninglessTitle(data.displayName)) {
    issues.push({ type: 'meaningless', field: 'displayName', value: data.displayName });
  }
  if (containsChinese(data.displayName)) {
    issues.push({ type: 'chinese', field: 'displayName', value: data.displayName });
  }
  
  // 检查描述
  if (containsChinese(data.description)) {
    issues.push({ type: 'chinese', field: 'description', snippet: data.description?.substring(0, 50) });
  }
  if (containsChinese(data.longDescription)) {
    issues.push({ type: 'chinese', field: 'longDescription' });
  }
  
  // 检查 coreProducts
  if (data.coreProducts && Array.isArray(data.coreProducts)) {
    data.coreProducts.forEach((product, idx) => {
      // 字符串数组形式（如 ["Product 1", "Product 2"]）- 有效，无需检查
      if (typeof product === 'string') {
        return;
      }
      // 对象数组形式（如 [{name: "xxx", description: "xxx"}]）
      if (typeof product === 'object' && product !== null) {
        if (isMeaninglessTitle(product.name)) {
          issues.push({ type: 'meaningless', field: `coreProducts[${idx}].name`, value: product.name });
        }
        if (containsChinese(product.name)) {
          issues.push({ type: 'chinese', field: `coreProducts[${idx}].name`, value: product.name });
        }
        if (containsChinese(product.description)) {
          issues.push({ type: 'chinese', field: `coreProducts[${idx}].description` });
        }
      }
    });
  }
  
  // 检查 FAQs
  if (data.faqs && Array.isArray(data.faqs)) {
    data.faqs.forEach((faq, idx) => {
      if (containsChinese(faq.question)) {
        issues.push({ type: 'chinese', field: `faqs[${idx}].question` });
      }
      if (containsChinese(faq.answer)) {
        issues.push({ type: 'chinese', field: `faqs[${idx}].answer` });
      }
    });
  }
  
  return { issues };
}

// 检查 products.json
function checkProductsJson(brand) {
  const issues = [];
  const brandDir = path.join(dataDir, brand);
  const productsPath = path.join(brandDir, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    return { issues: [{ type: 'error', message: 'products.json not found' }] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'))
  } catch (error) {
    return { issues: [{ type: 'error', message: `JSON parse error: ${error.message}` }] };
  }
  
  // 检查 SEO 字段
  if (containsChinese(data.seoTitle)) {
    issues.push({ type: 'chinese', field: 'seoTitle' });
  }
  if (containsChinese(data.seoDescription)) {
    issues.push({ type: 'chinese', field: 'seoDescription' });
  }
  
  // 检查分类
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      if (isMeaninglessTitle(category.name)) {
        issues.push({ type: 'meaningless', field: `categories[${cIdx}].name`, value: category.name });
      }
      if (containsChinese(category.name)) {
        issues.push({ type: 'chinese', field: `categories[${cIdx}].name`, value: category.name });
      }
      if (containsChinese(category.description)) {
        issues.push({ type: 'chinese', field: `categories[${cIdx}].description` });
      }
      
      // 检查产品
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product, pIdx) => {
          if (isMeaninglessTitle(product.name)) {
            issues.push({ type: 'meaningless', field: `categories[${cIdx}].products[${pIdx}].name`, value: product.name });
          }
          if (isMeaninglessTitle(product.partNumber)) {
            issues.push({ type: 'meaningless', field: `categories[${cIdx}].products[${pIdx}].partNumber`, value: product.partNumber });
          }
          if (containsChinese(product.name)) {
            issues.push({ type: 'chinese', field: `categories[${cIdx}].products[${pIdx}].name`, value: product.name });
          }
          if (containsChinese(product.shortDescription)) {
            issues.push({ type: 'chinese', field: `categories[${cIdx}].products[${pIdx}].shortDescription` });
          }
          if (containsChinese(product.description)) {
            issues.push({ type: 'chinese', field: `categories[${cIdx}].products[${pIdx}].description` });
          }
          
          // 检查 FAE Review
          if (product.faeReview) {
            if (containsChinese(product.faeReview.content)) {
              issues.push({ type: 'chinese', field: `categories[${cIdx}].products[${pIdx}].faeReview.content` });
            }
          }
          
          // 检查 FAQs
          if (product.faqs && Array.isArray(product.faqs)) {
            product.faqs.forEach((faq, fIdx) => {
              if (containsChinese(faq.question)) {
                issues.push({ type: 'chinese', field: `categories[${cIdx}].products[${pIdx}].faqs[${fIdx}].question` });
              }
              if (containsChinese(faq.answer)) {
                issues.push({ type: 'chinese', field: `categories[${cIdx}].products[${pIdx}].faqs[${fIdx}].answer` });
              }
            });
          }
        });
      }
      
      // 检查分类 FAQs
      if (category.faqs && Array.isArray(category.faqs)) {
        category.faqs.forEach((faq, fIdx) => {
          if (containsChinese(faq.question)) {
            issues.push({ type: 'chinese', field: `categories[${cIdx}].faqs[${fIdx}].question` });
          }
          if (containsChinese(faq.answer)) {
            issues.push({ type: 'chinese', field: `categories[${cIdx}].faqs[${fIdx}].answer` });
          }
        });
      }
    });
  }
  
  // 检查根级别 FAQs
  if (data.faqs && Array.isArray(data.faqs)) {
    data.faqs.forEach((faq, idx) => {
      if (containsChinese(faq.question)) {
        issues.push({ type: 'chinese', field: `faqs[${idx}].question` });
      }
      if (containsChinese(faq.answer)) {
        issues.push({ type: 'chinese', field: `faqs[${idx}].answer` });
      }
    });
  }
  
  return { issues };
}

// 检查 solutions.json
function checkSolutionsJson(brand) {
  const issues = [];
  const brandDir = path.join(dataDir, brand);
  const solutionsPath = path.join(brandDir, 'solutions.json');
  
  if (!fs.existsSync(solutionsPath)) {
    return { issues: [] }; // solutions.json 可选
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
  } catch (error) {
    return { issues: [{ type: 'error', message: `JSON parse error: ${error.message}` }] };
  }
  
  // 检查解决方案
  if (data.solutions && Array.isArray(data.solutions)) {
    data.solutions.forEach((solution, sIdx) => {
      if (isMeaninglessTitle(solution.name)) {
        issues.push({ type: 'meaningless', field: `solutions[${sIdx}].name`, value: solution.name });
      }
      if (containsChinese(solution.name)) {
        issues.push({ type: 'chinese', field: `solutions[${sIdx}].name`, value: solution.name });
      }
      if (containsChinese(solution.description)) {
        issues.push({ type: 'chinese', field: `solutions[${sIdx}].description` });
      }
      
      // 检查 FAE Insights
      if (solution.faeInsights) {
        if (containsChinese(solution.faeInsights.insight)) {
          issues.push({ type: 'chinese', field: `solutions[${sIdx}].faeInsights.insight` });
        }
        if (containsChinese(solution.faeInsights.logic)) {
          issues.push({ type: 'chinese', field: `solutions[${sIdx}].faeInsights.logic` });
        }
      }
      
      // 检查 FAQs
      if (solution.faqs && Array.isArray(solution.faqs)) {
        solution.faqs.forEach((faq, fIdx) => {
          if (containsChinese(faq.question)) {
            issues.push({ type: 'chinese', field: `solutions[${sIdx}].faqs[${fIdx}].question` });
          }
          if (containsChinese(faq.answer)) {
            issues.push({ type: 'chinese', field: `solutions[${sIdx}].faqs[${fIdx}].answer` });
          }
        });
      }
    });
  }
  
  // 检查根级别 FAQs
  if (data.faqs && Array.isArray(data.faqs)) {
    data.faqs.forEach((faq, idx) => {
      if (containsChinese(faq.question)) {
        issues.push({ type: 'chinese', field: `faqs[${idx}].question` });
      }
      if (containsChinese(faq.answer)) {
        issues.push({ type: 'chinese', field: `faqs[${idx}].answer` });
      }
    });
  }
  
  return { issues };
}

// 检查 support.json
function checkSupportJson(brand) {
  const issues = [];
  const brandDir = path.join(dataDir, brand);
  const supportPath = path.join(brandDir, 'support.json');
  
  if (!fs.existsSync(supportPath)) {
    return { issues: [] }; // support.json 可选
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
  } catch (error) {
    return { issues: [{ type: 'error', message: `JSON parse error: ${error.message}` }] };
  }
  
  // 检查文章
  if (data.articles && Array.isArray(data.articles)) {
    data.articles.forEach((article, aIdx) => {
      if (isMeaninglessTitle(article.title)) {
        issues.push({ type: 'meaningless', field: `articles[${aIdx}].title`, value: article.title });
      }
      if (containsChinese(article.title)) {
        issues.push({ type: 'chinese', field: `articles[${aIdx}].title`, value: article.title });
      }
      if (containsChinese(article.summary)) {
        issues.push({ type: 'chinese', field: `articles[${aIdx}].summary` });
      }
      if (containsChinese(article.content)) {
        issues.push({ type: 'chinese', field: `articles[${aIdx}].content` });
      }
      
      // 检查 FAE Insights
      if (article.faeInsights) {
        if (containsChinese(article.faeInsights.insight)) {
          issues.push({ type: 'chinese', field: `articles[${aIdx}].faeInsights.insight` });
        }
        if (containsChinese(article.faeInsights.logic)) {
          issues.push({ type: 'chinese', field: `articles[${aIdx}].faeInsights.logic` });
        }
      }
      
      // 检查 FAQs
      if (article.faqs && Array.isArray(article.faqs)) {
        article.faqs.forEach((faq, fIdx) => {
          if (containsChinese(faq.question)) {
            issues.push({ type: 'chinese', field: `articles[${aIdx}].faqs[${fIdx}].question` });
          }
          if (containsChinese(faq.answer)) {
            issues.push({ type: 'chinese', field: `articles[${aIdx}].faqs[${fIdx}].answer` });
          }
        });
      }
    });
  }
  
  // 检查根级别 FAQs
  if (data.faqs && Array.isArray(data.faqs)) {
    data.faqs.forEach((faq, idx) => {
      if (containsChinese(faq.question)) {
        issues.push({ type: 'chinese', field: `faqs[${idx}].question` });
      }
      if (containsChinese(faq.answer)) {
        issues.push({ type: 'chinese', field: `faqs[${idx}].answer` });
      }
    });
  }
  
  return { issues };
}

// 检查单个品牌
function checkBrand(brand) {
  console.log(`\n========================================`);
  console.log(`Checking brand: ${brand}`);
  console.log(`========================================`);
  
  const brandResult = checkBrandJson(brand);
  const productsResult = checkProductsJson(brand);
  const solutionsResult = checkSolutionsJson(brand);
  const supportResult = checkSupportJson(brand);
  
  const allIssues = [
    ...brandResult.issues.map(i => ({ ...i, file: 'brand.json' })),
    ...productsResult.issues.map(i => ({ ...i, file: 'products.json' })),
    ...solutionsResult.issues.map(i => ({ ...i, file: 'solutions.json' })),
    ...supportResult.issues.map(i => ({ ...i, file: 'support.json' }))
  ];
  
  const meaninglessIssues = allIssues.filter(i => i.type === 'meaningless');
  const chineseIssues = allIssues.filter(i => i.type === 'chinese');
  const errorIssues = allIssues.filter(i => i.type === 'error');
  
  if (meaninglessIssues.length > 0) {
    console.log(`\n  ❌ Meaningless titles (${meaninglessIssues.length}):`);
    meaninglessIssues.forEach(issue => {
      console.log(`    - ${issue.file}: ${issue.field} = "${issue.value}"`);
    });
  }
  
  if (chineseIssues.length > 0) {
    console.log(`\n  ⚠️  Chinese content (${chineseIssues.length}):`);
    chineseIssues.slice(0, 5).forEach(issue => {
      console.log(`    - ${issue.file}: ${issue.field}${issue.value ? ` = "${issue.value.substring(0, 30)}..."` : ''}`);
    });
    if (chineseIssues.length > 5) {
      console.log(`    ... and ${chineseIssues.length - 5} more`);
    }
  }
  
  if (errorIssues.length > 0) {
    console.log(`\n  ❌ Errors (${errorIssues.length}):`);
    errorIssues.forEach(issue => {
      console.log(`    - ${issue.file}: ${issue.message}`);
    });
  }
  
  if (allIssues.length === 0) {
    console.log(`  ✅ All checks passed`);
  }
  
  return {
    brand,
    meaningless: meaninglessIssues.length,
    chinese: chineseIssues.length,
    errors: errorIssues.length,
    total: allIssues.length
  };
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Check Meaningless Content');
  console.log('========================================');
  console.log('Checking for:');
  console.log('  - Meaningless titles (Product 3, Solution 5, etc.)');
  console.log('  - Chinese content (violates iron rule 26)');
  console.log('  - JSON errors');
  
  const brands = getBrandDirs();
  console.log(`\nFound ${brands.length} brands`);
  
  const results = [];
  brands.forEach(brand => {
    results.push(checkBrand(brand));
  });
  
  // 汇总报告
  console.log('\n\n========================================');
  console.log('Summary Report');
  console.log('========================================');
  
  const brandsWithMeaningless = results.filter(r => r.meaningless > 0);
  const brandsWithChinese = results.filter(r => r.chinese > 0);
  const brandsWithErrors = results.filter(r => r.errors > 0);
  const cleanBrands = results.filter(r => r.total === 0);
  
  console.log(`\n✅ Clean brands: ${cleanBrands.length}`);
  console.log(`❌ Brands with meaningless titles: ${brandsWithMeaningless.length}`);
  console.log(`⚠️  Brands with Chinese content: ${brandsWithChinese.length}`);
  console.log(`❌ Brands with JSON errors: ${brandsWithErrors.length}`);
  
  if (brandsWithMeaningless.length > 0) {
    console.log('\nBrands with meaningless titles:');
    brandsWithMeaningless.forEach(r => {
      console.log(`  - ${r.brand}: ${r.meaningless} issues`);
    });
  }
  
  if (brandsWithChinese.length > 0) {
    console.log('\nBrands with Chinese content:');
    brandsWithChinese.slice(0, 10).forEach(r => {
      console.log(`  - ${r.brand}: ${r.chinese} issues`);
    });
    if (brandsWithChinese.length > 10) {
      console.log(`  ... and ${brandsWithChinese.length - 10} more`);
    }
  }
  
  if (brandsWithErrors.length > 0) {
    console.log('\nBrands with JSON errors:');
    brandsWithErrors.forEach(r => {
      console.log(`  - ${r.brand}: ${r.errors} errors`);
    });
  }
  
  // 保存详细报告
  const reportPath = path.join(__dirname, '..', 'meaningless-content-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    summary: {
      total: brands.length,
      clean: cleanBrands.length,
      withMeaningless: brandsWithMeaningless.length,
      withChinese: brandsWithChinese.length,
      withErrors: brandsWithErrors.length
    },
    brandsWithIssues: results.filter(r => r.total > 0)
  }, null, 2));
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
}

main();
