#!/usr/bin/env node
/**
 * 检测内容质量
 * 包括：无意义内容、字数不足、重复内容、占位符内容
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 无意义内容模式
const meaninglessContentPatterns = [
  /lorem\s*ipsum/i,
  /placeholder/i,
  /todo/i,
  /tbd/i,
  /^n\/a$/i,  // 只有N/A
  /^undefined$/i,  // 只有undefined
  /^null$/i,  // 只有null
  /content\s*here/i,
  /sample\s*text/i,
  /example\s*content/i,
  /this\s*is\s*a\s*(sample|example|placeholder)/i,
  /^\[object\s+Object\]$/i,  // 只有[object Object]
];

// 检查内容是否无意义
function isMeaninglessContent(content) {
  if (!content || typeof content !== 'string') return true;
  const trimmed = content.trim();
  if (trimmed.length === 0) return true;
  if (trimmed.length < 50) return true; // 内容太短
  
  return meaninglessContentPatterns.some(pattern => pattern.test(trimmed));
}

// 检查内容是否重复（简单检查）
function isRepetitiveContent(content) {
  if (!content || typeof content !== 'string') return false;
  
  // 检查是否有大量重复的句子
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 20);
  const uniqueSentences = new Set(sentences.map(s => s.trim().toLowerCase()));
  
  // 如果唯一句子数少于总句子数的50%，认为是重复内容
  if (sentences.length > 0 && uniqueSentences.size / sentences.length < 0.5) {
    return true;
  }
  
  return false;
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

// 检查 support.json 内容质量
function checkSupportContent(brand) {
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
  
  if (data.articles && Array.isArray(data.articles)) {
    data.articles.forEach((article, idx) => {
      // 检查 content
      if (article.content) {
        const contentText = Array.isArray(article.content) 
          ? article.content.join(' ') 
          : article.content;
        
        if (isMeaninglessContent(contentText)) {
          issues.push({
            type: 'meaningless_content',
            field: `articles[${idx}].content`,
            brand,
            article: article.title || article.id,
            length: contentText.length,
            sample: String(contentText).substring(0, 100)
          });
        } else if (contentText.length < 800) {
          issues.push({
            type: 'content_too_short',
            field: `articles[${idx}].content`,
            brand,
            article: article.title || article.id,
            length: contentText.length,
            required: 800
          });
        }
      }
      
      // 检查 summary
      if (article.summary && isMeaninglessContent(article.summary)) {
        issues.push({
          type: 'meaningless_summary',
          field: `articles[${idx}].summary`,
          brand,
          article: article.title || article.id,
          value: article.summary
        });
      }
      
      // 检查 FAQs
      if (article.faqs && Array.isArray(article.faqs)) {
        article.faqs.forEach((faq, fIdx) => {
          if (faq.answer && isMeaninglessContent(faq.answer)) {
            issues.push({
              type: 'meaningless_faq_answer',
              field: `articles[${idx}].faqs[${fIdx}].answer`,
              brand,
              article: article.title || article.id,
              question: faq.question,
              length: faq.answer.length
            });
          }
        });
      }
    });
  }
  
  return { issues, errors: [] };
}

// 检查 solutions.json 内容质量
function checkSolutionsContent(brand) {
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
  
  if (data.solutions && Array.isArray(data.solutions)) {
    data.solutions.forEach((solution, idx) => {
      // 检查 description
      if (solution.description && isMeaninglessContent(solution.description)) {
        issues.push({
          type: 'meaningless_description',
          field: `solutions[${idx}].description`,
          brand,
          solution: solution.name || solution.id,
          length: solution.description.length
        });
      }
      
      // 检查 longDescription
      if (solution.longDescription) {
        if (isMeaninglessContent(solution.longDescription)) {
          issues.push({
            type: 'meaningless_longDescription',
            field: `solutions[${idx}].longDescription`,
            brand,
            solution: solution.name || solution.id,
            length: solution.longDescription.length
          });
        } else if (solution.longDescription.length < 1000) {
          issues.push({
            type: 'longDescription_too_short',
            field: `solutions[${idx}].longDescription`,
            brand,
            solution: solution.name || solution.id,
            length: solution.longDescription.length,
            required: 1000
          });
        }
      }
      
      // 检查 faeInsights
      if (solution.faeInsights) {
        const insight = solution.faeInsights.content || solution.faeInsights.insight;
        if (insight && isMeaninglessContent(insight)) {
          issues.push({
            type: 'meaningless_faeInsight',
            field: `solutions[${idx}].faeInsights`,
            brand,
            solution: solution.name || solution.id,
            length: insight.length
          });
        }
      }
      
      // 检查 customerCases
      if (solution.customerCases && Array.isArray(solution.customerCases)) {
        solution.customerCases.forEach((caseItem, cIdx) => {
          if (caseItem.challenge && isMeaninglessContent(caseItem.challenge)) {
            issues.push({
              type: 'meaningless_case_challenge',
              field: `solutions[${idx}].customerCases[${cIdx}].challenge`,
              brand,
              solution: solution.name || solution.id
            });
          }
        });
      }
    });
  }
  
  return { issues, errors: [] };
}

// 检查 products.json 内容质量
function checkProductsContent(brand) {
  const brandDir = path.join(dataDir, brand);
  const productsPath = path.join(brandDir, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    return { issues: [], errors: [] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    return { issues: [], errors: [`JSON parse error: ${error.message}`] };
  }
  
  const issues = [];
  
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product, pIdx) => {
          // 检查 shortDescription
          if (product.shortDescription && isMeaninglessContent(product.shortDescription)) {
            issues.push({
              type: 'meaningless_shortDescription',
              field: `categories[${cIdx}].products[${pIdx}].shortDescription`,
              brand,
              product: product.name || product.partNumber,
              value: product.shortDescription
            });
          }
          
          // 检查 descriptionParagraphs
          if (product.descriptionParagraphs && Array.isArray(product.descriptionParagraphs)) {
            const fullText = product.descriptionParagraphs.join(' ');
            if (isMeaninglessContent(fullText)) {
              issues.push({
                type: 'meaningless_descriptionParagraphs',
                field: `categories[${cIdx}].products[${pIdx}].descriptionParagraphs`,
                brand,
                product: product.name || product.partNumber
              });
            }
          }
          
          // 检查 faeReview
          if (product.faeReview) {
            const review = product.faeReview.content || product.faeReview.review;
            if (review && isMeaninglessContent(review)) {
              issues.push({
                type: 'meaningless_faeReview',
                field: `categories[${cIdx}].products[${pIdx}].faeReview`,
                brand,
                product: product.name || product.partNumber
              });
            }
          }
        });
      }
    });
  }
  
  return { issues, errors: [] };
}

// 检测单个品牌
function checkBrand(brand) {
  console.log(`\n========================================`);
  console.log(`Checking brand: ${brand}`);
  console.log(`========================================`);
  
  const supportResult = checkSupportContent(brand);
  const solutionsResult = checkSolutionsContent(brand);
  const productsResult = checkProductsContent(brand);
  
  const allIssues = [
    ...supportResult.issues,
    ...solutionsResult.issues,
    ...productsResult.issues
  ];
  
  const allErrors = [
    ...supportResult.errors,
    ...solutionsResult.errors,
    ...productsResult.errors
  ];
  
  if (allIssues.length > 0) {
    console.log(`\n  ⚠️  Found ${allIssues.length} issues:`);
    allIssues.forEach(issue => {
      console.log(`    - ${issue.type}: ${issue.field}`);
      if (issue.length) console.log(`      Length: ${issue.length} chars`);
      if (issue.sample) console.log(`      Sample: ${issue.sample}...`);
    });
  } else if (allErrors.length === 0) {
    console.log('  ✅ No content quality issues found');
  }
  
  if (allErrors.length > 0) {
    console.log(`\n  ❌ Errors:`);
    allErrors.forEach(err => console.log(`    - ${err}`));
  }
  
  return {
    brand,
    issues: allIssues,
    errors: allErrors
  };
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Check Content Quality');
  console.log('========================================');
  console.log('Checking for:');
  console.log('  - Meaningless content (Lorem ipsum, placeholder, etc.)');
  console.log('  - Content too short (support <800 chars, solutions <1000 chars)');
  console.log('  - Repetitive content');
  console.log('  - Missing or placeholder descriptions');
  
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
  
  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
  const brandsWithIssues = results.filter(r => r.issues.length > 0);
  const brandsWithErrors = results.filter(r => r.errors.length > 0);
  
  console.log(`\n⚠️  Total issues found: ${totalIssues}`);
  console.log(`⚠️  Brands with issues: ${brandsWithIssues.length}`);
  console.log(`❌ Brands with errors: ${brandsWithErrors.length}`);
  
  if (brandsWithIssues.length > 0) {
    console.log('\nBrands with content quality issues:');
    brandsWithIssues.forEach(r => {
      console.log(`  - ${r.brand}: ${r.issues.length} issues`);
    });
  }
  
  // 按问题类型统计
  const issueTypes = {};
  results.forEach(r => {
    r.issues.forEach(issue => {
      issueTypes[issue.type] = (issueTypes[issue.type] || 0) + 1;
    });
  });
  
  if (Object.keys(issueTypes).length > 0) {
    console.log('\nIssue types:');
    Object.entries(issueTypes)
      .sort((a, b) => b[1] - a[1])
      .forEach(([type, count]) => {
        console.log(`  - ${type}: ${count}`);
      });
  }
  
  // 保存详细报告
  const reportPath = path.join(__dirname, '..', 'brand-content-quality-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    summary: {
      total: brands.length,
      totalIssues,
      brandsWithIssues: brandsWithIssues.length,
      brandsWithErrors: brandsWithErrors.length,
      issueTypes
    },
    details: results.filter(r => r.issues.length > 0 || r.errors.length > 0)
  }, null, 2));
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
}

main();
