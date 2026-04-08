#!/usr/bin/env node

/**
 * 品牌创建完整检查清单
 * 使用方法: node scripts/brand-creation-checklist.js [brandName]
 * 
 * 此脚本用于确保新增品牌时不遗漏任何要求
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFileExists(filePath) {
  return fs.existsSync(filePath);
}

function loadJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
}

// 检查清单项
const checklist = {
  // 文件存在性检查
  files: {
    title: '📁 文件完整性检查',
    items: [
      { name: 'brand.json', check: (brand) => checkFileExists(`data/${brand}/brand.json`) },
      { name: 'products.json', check: (brand) => checkFileExists(`data/${brand}/products.json`) },
      { name: 'solutions.json', check: (brand) => checkFileExists(`data/${brand}/solutions.json`) },
      { name: 'support.json', check: (brand) => checkFileExists(`data/${brand}/support.json`) },
      { name: 'news.json', check: (brand) => checkFileExists(`data/${brand}/news.json`), optional: true }
    ]
  },

  // brand.json 检查
  brand: {
    title: '🏢 brand.json 内容检查',
    items: [
      { name: 'name (小写品牌名)', field: 'name', required: true },
      { name: 'displayName (显示名称)', field: 'displayName', required: true },
      { name: 'description (描述)', field: 'description', required: true, minLength: 100 },
      { name: 'longDescription (长描述)', field: 'longDescription', required: true, minLength: 300 },
      { name: 'coreProducts (核心产品)', field: 'coreProducts', required: true, minItems: 4 },
      { name: 'industries (行业)', field: 'industries', required: true, minItems: 3 },
      { name: 'seoTitle', field: 'seoTitle', required: true },
      { name: 'seoDescription', field: 'seoDescription', required: true },
      { name: 'seoKeywords (含distributor/选型)', field: 'seoKeywords', required: true, checkKeywords: true },
      { name: 'FAQs (至少3个)', field: 'faqs', required: true, minItems: 3 }
    ]
  },

  // products.json 检查
  products: {
    title: '📦 products.json 内容检查',
    items: [
      { name: 'seoTitle', field: 'seoTitle', required: true },
      { name: 'seoDescription', field: 'seoDescription', required: true },
      { name: 'seoKeywords (含distributor/选型)', field: 'seoKeywords', required: true, checkKeywords: true },
      { name: 'FAQs (至少3个)', field: 'faqs', required: true, minItems: 3 },
      { name: '分类数量 (至少4个)', field: 'categories', required: true, minItems: 4 }
    ]
  },

  // 产品分类检查
  productCategory: {
    title: '📂 每个产品分类检查',
    items: [
      { name: 'id', field: 'id', required: true },
      { name: 'name', field: 'name', required: true },
      { name: 'slug', field: 'slug', required: true },
      { name: 'description', field: 'description', required: true },
      { name: 'longDescription (含distributor/选型关键词)', field: 'longDescription', required: true, checkDistributor: true },
      { name: 'series (系列信息)', field: 'series', required: true, minItems: 2 },
      { name: 'selectionGuide (选型指南)', field: 'selectionGuide', required: true },
      { name: 'selectionGuideLink (选型指南链接)', field: 'selectionGuideLink', required: true },
      { name: 'products (至少2个产品)', field: 'products', required: true, minItems: 2 }
    ]
  },

  // 产品详情检查
  productDetail: {
    title: '🔧 每个产品详情检查',
    items: [
      { name: 'partNumber', field: 'partNumber', required: true },
      { name: 'shortDescription', field: 'shortDescription', required: true, minLength: 80, maxLength: 120 },
      { name: 'descriptionParagraphs (3段)', field: 'descriptionParagraphs', required: true, minItems: 3 },
      { name: 'faeReview (FAE点评)', field: 'faeReview', required: true, checkFaeReview: true },
      { name: 'alternativeParts (≥2个替代料号)', field: 'alternativeParts', required: true, minItems: 2, checkAlternativeParts: true },
      { name: 'companionParts (≥3个配套料号)', field: 'companionParts', required: true, minItems: 3 }
    ]
  },

  // solutions.json 检查
  solutions: {
    title: '💡 solutions.json 内容检查',
    items: [
      { name: 'seoTitle', field: 'seoTitle', required: true },
      { name: 'seoDescription', field: 'seoDescription', required: true },
      { name: 'seoKeywords (含distributor/选型)', field: 'seoKeywords', required: true, checkKeywords: true },
      { name: 'FAQs (至少3个)', field: 'faqs', required: true, minItems: 3 },
      { name: 'solutions (至少2个方案)', field: 'solutions', required: true, minItems: 2 }
    ]
  },

  // 解决方案详情检查
  solutionDetail: {
    title: '🎯 每个解决方案详情检查',
    items: [
      { name: 'id', field: 'id', required: true },
      { name: 'title', field: 'title', required: true },
      { name: 'slug', field: 'slug', required: true },
      { name: 'description', field: 'description', required: true },
      { name: 'longDescription', field: 'longDescription', required: true },
      { name: 'benefits (至少4个)', field: 'benefits', required: true, minItems: 4 },
      { name: 'coreAdvantages (至少5个)', field: 'coreAdvantages', required: true, minItems: 5 },
      { name: 'bomList (BOM清单)', field: 'bomList', required: true, minItems: 2 },
      { name: 'technicalSpecs (技术规格)', field: 'technicalSpecs', required: true },
      { name: 'customerCases (至少2个客户案例)', field: 'customerCases', required: true, minItems: 2 },
      { name: 'faeInsights (FAE见解)', field: 'faeInsights', required: true, checkFaeInsights: true }
    ]
  },

  // support.json 检查
  support: {
    title: '📚 support.json 内容检查',
    items: [
      { name: 'seoTitle', field: 'seoTitle', required: true },
      { name: 'seoDescription', field: 'seoDescription', required: true },
      { name: 'seoKeywords (含distributor/选型)', field: 'seoKeywords', required: true, checkKeywords: true },
      { name: 'FAQs (至少3个)', field: 'faqs', required: true, minItems: 3 },
      { name: 'articles (至少4篇文章)', field: 'articles', required: true, minItems: 4 }
    ]
  },

  // 技术支持文章检查
  supportArticle: {
    title: '📝 每篇技术支持文章检查',
    items: [
      { name: 'id', field: 'id', required: true },
      { name: 'title', field: 'title', required: true },
      { name: 'slug', field: 'slug', required: true },
      { name: 'author (作者信息)', field: 'author', required: true, checkAuthor: true },
      { name: 'publishDate (发布日期)', field: 'publishDate', required: true },
      { name: 'summary (摘要)', field: 'summary', required: true },
      { name: 'tags (标签)', field: 'tags', required: true, minItems: 3 },
      { name: 'relatedArticles (相关文章)', field: 'relatedArticles', required: true, minItems: 3 },
      { name: 'faeInsights (FAE见解)', field: 'faeInsights', required: true },
      { name: 'customerCases (客户案例)', field: 'customerCases', required: true, minItems: 1 }
    ]
  }
};

// 执行检查
function runChecklist(brand) {
  log(`\n${'='.repeat(60)}`, 'cyan');
  log(`🔍 品牌创建完整检查清单: ${brand}`, 'cyan');
  log(`${'='.repeat(60)}\n`, 'cyan');

  let totalChecks = 0;
  let passedChecks = 0;
  let failedChecks = 0;
  let warnings = 0;

  // 1. 文件存在性检查
  log(checklist.files.title, 'magenta');
  checklist.files.items.forEach(item => {
    totalChecks++;
    const exists = item.check(brand);
    if (exists) {
      log(`  ✅ ${item.name}`, 'green');
      passedChecks++;
    } else if (item.optional) {
      log(`  ⚠️  ${item.name} (可选)`, 'yellow');
      warnings++;
    } else {
      log(`  ❌ ${item.name} (必需)`, 'red');
      failedChecks++;
    }
  });

  // 2. brand.json 检查
  const brandData = loadJSON(`data/${brand}/brand.json`);
  if (brandData) {
    log(`\n${checklist.brand.title}`, 'magenta');
    checklist.brand.items.forEach(item => {
      totalChecks++;
      const value = brandData[item.field];
      
      if (!value && item.required) {
        log(`  ❌ ${item.name} - 缺失`, 'red');
        failedChecks++;
        return;
      }

      if (item.minLength && value && value.length < item.minLength) {
        log(`  ❌ ${item.name} - 长度不足 (${value.length} < ${item.minLength})`, 'red');
        failedChecks++;
        return;
      }

      if (item.minItems && Array.isArray(value) && value.length < item.minItems) {
        log(`  ❌ ${item.name} - 数量不足 (${value.length} < ${item.minItems})`, 'red');
        failedChecks++;
        return;
      }

      if (item.checkKeywords && Array.isArray(value)) {
        const hasDistributor = value.some(k => k.toLowerCase().includes('distributor'));
        const hasXuanXing = value.some(k => k.includes('选型'));
        if (!hasDistributor || !hasXuanXing) {
          log(`  ❌ ${item.name} - 缺少distributor或选型关键词`, 'red');
          failedChecks++;
          return;
        }
      }

      log(`  ✅ ${item.name}`, 'green');
      passedChecks++;
    });
  }

  // 3. products.json 检查
  const productsData = loadJSON(`data/${brand}/products.json`);
  if (productsData) {
    log(`\n${checklist.products.title}`, 'magenta');
    checklist.products.items.forEach(item => {
      totalChecks++;
      const value = productsData[item.field];
      
      if (!value && item.required) {
        log(`  ❌ ${item.name} - 缺失`, 'red');
        failedChecks++;
        return;
      }

      if (item.minItems && Array.isArray(value) && value.length < item.minItems) {
        log(`  ❌ ${item.name} - 数量不足 (${value.length} < ${item.minItems})`, 'red');
        failedChecks++;
        return;
      }

      if (item.checkKeywords && Array.isArray(value)) {
        const hasDistributor = value.some(k => k.toLowerCase().includes('distributor'));
        const hasXuanXing = value.some(k => k.includes('选型'));
        if (!hasDistributor || !hasXuanXing) {
          log(`  ❌ ${item.name} - 缺少distributor或选型关键词`, 'red');
          failedChecks++;
          return;
        }
      }

      log(`  ✅ ${item.name}`, 'green');
      passedChecks++;
    });

    // 4. 产品分类检查
    if (productsData.categories) {
      productsData.categories.forEach((category, idx) => {
        log(`\n${checklist.productCategory.title} - ${category.name || `分类${idx + 1}`}`, 'magenta');
        checklist.productCategory.items.forEach(item => {
          totalChecks++;
          const value = category[item.field];
          
          if (!value && item.required) {
            log(`  ❌ ${item.name} - 缺失`, 'red');
            failedChecks++;
            return;
          }

          if (item.minItems && Array.isArray(value) && value.length < item.minItems) {
            log(`  ❌ ${item.name} - 数量不足 (${value.length} < ${item.minItems})`, 'red');
            failedChecks++;
            return;
          }

          if (item.checkDistributor && typeof value === 'string') {
            const hasDistributor = value.toLowerCase().includes('distributor');
            const hasXuanXing = value.includes('选型');
            if (!hasDistributor || !hasXuanXing) {
              log(`  ❌ ${item.name} - 缺少distributor或选型关键词`, 'red');
              failedChecks++;
              return;
            }
          }

          log(`  ✅ ${item.name}`, 'green');
          passedChecks++;
        });

        // 5. 产品详情检查
        if (category.products) {
          category.products.forEach((product, pIdx) => {
            log(`\n${checklist.productDetail.title} - ${product.partNumber || `产品${pIdx + 1}`}`, 'magenta');
            checklist.productDetail.items.forEach(item => {
              totalChecks++;
              const value = product[item.field];
              
              if (!value && item.required) {
                log(`  ❌ ${item.name} - 缺失`, 'red');
                failedChecks++;
                return;
              }

              if (item.minLength && typeof value === 'string' && value.length < item.minLength) {
                log(`  ❌ ${item.name} - 长度不足 (${value.length} < ${item.minLength})`, 'red');
                failedChecks++;
                return;
              }

              if (item.maxLength && typeof value === 'string' && value.length > item.maxLength) {
                log(`  ❌ ${item.name} - 长度超限 (${value.length} > ${item.maxLength})`, 'red');
                failedChecks++;
                return;
              }

              if (item.minItems && Array.isArray(value) && value.length < item.minItems) {
                log(`  ❌ ${item.name} - 数量不足 (${value.length} < ${item.minItems})`, 'red');
                failedChecks++;
                return;
              }

              if (item.checkFaeReview && value) {
                if (!value.author || !value.content || !value.highlight) {
                  log(`  ❌ ${item.name} - FAE Review字段不完整`, 'red');
                  failedChecks++;
                  return;
                }
              }

              if (item.checkAlternativeParts && Array.isArray(value)) {
                for (const alt of value) {
                  if (!alt.comparison || !alt.reason || !alt.useCase) {
                    log(`  ❌ ${item.name} - 替代料号${alt.partNumber || ''}信息不完整`, 'red');
                    failedChecks++;
                    return;
                  }
                }
              }

              log(`  ✅ ${item.name}`, 'green');
              passedChecks++;
            });
          });
        }
      });
    }
  }

  // 6. solutions.json 检查
  const solutionsData = loadJSON(`data/${brand}/solutions.json`);
  if (solutionsData) {
    log(`\n${checklist.solutions.title}`, 'magenta');
    checklist.solutions.items.forEach(item => {
      totalChecks++;
      const value = solutionsData[item.field];
      
      if (!value && item.required) {
        log(`  ❌ ${item.name} - 缺失`, 'red');
        failedChecks++;
        return;
      }

      if (item.minItems && Array.isArray(value) && value.length < item.minItems) {
        log(`  ❌ ${item.name} - 数量不足 (${value.length} < ${item.minItems})`, 'red');
        failedChecks++;
        return;
      }

      if (item.checkKeywords && Array.isArray(value)) {
        const hasDistributor = value.some(k => k.toLowerCase().includes('distributor'));
        const hasXuanXing = value.some(k => k.includes('选型'));
        if (!hasDistributor || !hasXuanXing) {
          log(`  ❌ ${item.name} - 缺少distributor或选型关键词`, 'red');
          failedChecks++;
          return;
        }
      }

      log(`  ✅ ${item.name}`, 'green');
      passedChecks++;
    });

    // 7. 解决方案详情检查
    if (solutionsData.solutions) {
      solutionsData.solutions.forEach((solution, idx) => {
        log(`\n${checklist.solutionDetail.title} - ${solution.title || `方案${idx + 1}`}`, 'magenta');
        checklist.solutionDetail.items.forEach(item => {
          totalChecks++;
          const value = solution[item.field];
          
          if (!value && item.required) {
            log(`  ❌ ${item.name} - 缺失`, 'red');
            failedChecks++;
            return;
          }

          if (item.minItems && Array.isArray(value) && value.length < item.minItems) {
            log(`  ❌ ${item.name} - 数量不足 (${value.length} < ${item.minItems})`, 'red');
            failedChecks++;
            return;
          }

          if (item.checkFaeInsights && value) {
            if (!value.author || !value.content || !value.keyTakeaways) {
              log(`  ❌ ${item.name} - FAE Insights字段不完整`, 'red');
              failedChecks++;
              return;
            }
          }

          log(`  ✅ ${item.name}`, 'green');
          passedChecks++;
        });
      });
    }
  }

  // 8. support.json 检查
  const supportData = loadJSON(`data/${brand}/support.json`);
  if (supportData) {
    log(`\n${checklist.support.title}`, 'magenta');
    checklist.support.items.forEach(item => {
      totalChecks++;
      const value = supportData[item.field];
      
      if (!value && item.required) {
        log(`  ❌ ${item.name} - 缺失`, 'red');
        failedChecks++;
        return;
      }

      if (item.minItems && Array.isArray(value) && value.length < item.minItems) {
        log(`  ❌ ${item.name} - 数量不足 (${value.length} < ${item.minItems})`, 'red');
        failedChecks++;
        return;
      }

      if (item.checkKeywords && Array.isArray(value)) {
        const hasDistributor = value.some(k => k.toLowerCase().includes('distributor'));
        const hasXuanXing = value.some(k => k.includes('选型'));
        if (!hasDistributor || !hasXuanXing) {
          log(`  ❌ ${item.name} - 缺少distributor或选型关键词`, 'red');
          failedChecks++;
          return;
        }
      }

      log(`  ✅ ${item.name}`, 'green');
      passedChecks++;
    });

    // 9. 技术支持文章检查
    if (supportData.articles) {
      supportData.articles.forEach((article, idx) => {
        log(`\n${checklist.supportArticle.title} - ${article.title || `文章${idx + 1}`}`, 'magenta');
        checklist.supportArticle.items.forEach(item => {
          totalChecks++;
          const value = article[item.field];
          
          if (!value && item.required) {
            log(`  ❌ ${item.name} - 缺失`, 'red');
            failedChecks++;
            return;
          }

          if (item.minItems && Array.isArray(value) && value.length < item.minItems) {
            log(`  ❌ ${item.name} - 数量不足 (${value.length} < ${item.minItems})`, 'red');
            failedChecks++;
            return;
          }

          if (item.checkAuthor && value) {
            if (!value.name || !value.title) {
              log(`  ❌ ${item.name} - 作者信息不完整`, 'red');
              failedChecks++;
              return;
            }
          }

          log(`  ✅ ${item.name}`, 'green');
          passedChecks++;
        });
      });
    }
  }

  // 总结
  log(`\n${'='.repeat(60)}`, 'cyan');
  log('📊 检查结果总结', 'cyan');
  log(`${'='.repeat(60)}`, 'cyan');
  log(`总检查项: ${totalChecks}`, 'blue');
  log(`✅ 通过: ${passedChecks}`, 'green');
  log(`❌ 失败: ${failedChecks}`, failedChecks > 0 ? 'red' : 'green');
  log(`⚠️  警告: ${warnings}`, warnings > 0 ? 'yellow' : 'green');

  if (failedChecks === 0) {
    log(`\n🎉 恭喜！所有检查项通过，可以生成网站！`, 'green');
    return 0;
  } else {
    log(`\n⚠️  请修复上述 ${failedChecks} 个问题后再生成网站`, 'red');
    return 1;
  }
}

// 主函数
function main() {
  const brand = process.argv[2];
  
  if (!brand) {
    log('使用方法: node scripts/brand-creation-checklist.js [brandName]', 'yellow');
    log('示例: node scripts/creation-checklist.js macmic', 'yellow');
    process.exit(1);
  }

  const exitCode = runChecklist(brand);
  process.exit(exitCode);
}

main();
