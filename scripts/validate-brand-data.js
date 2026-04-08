#!/usr/bin/env node
/**
 * 品牌数据验证工具
 * 验证 JSON 数据是否符合 NEW_BRAND_DATA_REQUIREMENTS.md 规范
 *
 * 使用方法:
 *   npm run validate:brand [brand-name]  - 验证指定品牌
 *   npm run validate:all                 - 验证所有品牌
 */

const fs = require('fs');
const path = require('path');

const config = {
  dataDir: path.join(__dirname, '..', 'data')
};

// 颜色输出
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(level, message) {
  const color = colors[level] || colors.reset;
  console.log(`${color}${message}${colors.reset}`);
}

/**
 * 加载 JSON 文件
 */
function loadJSON(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return { error: `文件不存在: ${filePath}` };
    }
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return { error: `解析错误: ${error.message}` };
  }
}

/**
 * 验证 brand.json
 */
function validateBrandJson(brand, data) {
  const errors = [];
  const warnings = [];

  if (data.error) {
    errors.push(data.error);
    return { errors, warnings };
  }

  // 必填字段检查
  const requiredFields = [
    'name', 'displayName', 'logo', 'description', 'longDescription',
    'coreProducts', 'industries', 'certifications', 'yearFounded',
    'headquarters', 'distributorStatus', 'seoMetaTitle', 'seoMetaDescription', 'seoKeywords'
  ];

  requiredFields.forEach(field => {
    if (!(field in data)) {
      errors.push(`缺少必填字段: ${field}`);
    }
  });

  // FAQ 检查
  if (!data.faqs || !Array.isArray(data.faqs) || data.faqs.length === 0) {
    errors.push('缺少 faqs 数组或为空（about-brand FAQ 必须）');
  } else {
    if (data.faqs.length < 4) {
      warnings.push(`about-brand FAQ 数量建议至少4条，当前 ${data.faqs.length} 条`);
    }
    data.faqs.forEach((faq, index) => {
      if (!faq.question) errors.push(`faqs[${index}] 缺少 question`);
      if (!faq.answer) errors.push(`faqs[${index}] 缺少 answer`);
      if (!faq.decisionGuide) errors.push(`faqs[${index}] 缺少 decisionGuide`);
      if (!faq.keywords || !Array.isArray(faq.keywords)) {
        errors.push(`faqs[${index}] 缺少 keywords 数组`);
      }
    });
  }

  // 内容差异化检查
  if (data.description && data.description.length < 50) {
    warnings.push('description 过短，建议 100-200 字');
  }
  if (data.longDescription && data.longDescription.length < 200) {
    warnings.push('longDescription 过短，建议 500-1000 字');
  }

  return { errors, warnings };
}

/**
 * 验证 products.json
 */
function validateProductsJson(brand, data) {
  const errors = [];
  const warnings = [];

  if (data.error) {
    errors.push(data.error);
    return { errors, warnings };
  }

  // 检查 categories
  if (!data.categories || !Array.isArray(data.categories) || data.categories.length === 0) {
    errors.push('缺少 categories 数组或为空');
    return { errors, warnings };
  }

  // products-list FAQ 检查
  if (!data.faqs || !Array.isArray(data.faqs) || data.faqs.length === 0) {
    errors.push('缺少 products-list FAQ（faqs 数组）');
  } else if (data.faqs.length < 8) {
    warnings.push(`products-list FAQ 建议至少8条，当前 ${data.faqs.length} 条`);
  }

  // 遍历每个分类
  data.categories.forEach((category, catIndex) => {
    const catPrefix = `categories[${catIndex}](${category.id || 'unknown'})`;

    // 必填字段
    if (!category.id) errors.push(`${catPrefix} 缺少 id`);
    if (!category.name) errors.push(`${catPrefix} 缺少 name`);
    if (!category.description) errors.push(`${catPrefix} 缺少 description`);
    if (!category.longDescription) errors.push(`${catPrefix} 缺少 longDescription`);

    // 选型指南检查
    if (!category.selectionGuide) {
      errors.push(`${catPrefix} 缺少 selectionGuide（选型指南入口必须）`);
    } else {
      if (!category.selectionGuide.title) errors.push(`${catPrefix}.selectionGuide 缺少 title`);
      if (!category.selectionGuide.description) errors.push(`${catPrefix}.selectionGuide 缺少 description`);
      if (!category.selectionGuide.articleId) errors.push(`${catPrefix}.selectionGuide 缺少 articleId`);
      if (!category.selectionGuide.articleLink) errors.push(`${catPrefix}.selectionGuide 缺少 articleLink`);
    }

    // SEO 关键词检查
    if (!category.seoKeywords) {
      warnings.push(`${catPrefix} 缺少 seoKeywords（建议包含"品牌名+产品名+distributor/选型"）`);
    }

    // 分类 FAQ 检查
    if (!category.faqs || !Array.isArray(category.faqs) || category.faqs.length === 0) {
      errors.push(`${catPrefix} 缺少 faqs 数组（product-category FAQ 必须）`);
    } else if (category.faqs.length < 10) {
      warnings.push(`${catPrefix} FAQ 建议至少10条，当前 ${category.faqs.length} 条`);
    }

    // 产品检查
    if (!category.products || !Array.isArray(category.products) || category.products.length === 0) {
      errors.push(`${catPrefix} 缺少 products 数组或为空`);
    } else {
      if (category.products.length < 2) {
        warnings.push(`${catPrefix} 产品数量建议至少2个，当前 ${category.products.length} 个`);
      }

      category.products.forEach((product, prodIndex) => {
        const prodPrefix = `${catPrefix}.products[${prodIndex}](${product.partNumber || 'unknown'})`;

        // 必填字段
        if (!product.partNumber) errors.push(`${prodPrefix} 缺少 partNumber`);
        if (!product.description) errors.push(`${prodPrefix} 缺少 description`);

        // 三层级描述检查
        if (!product.shortDescription) {
          errors.push(`${prodPrefix} 缺少 shortDescription（80-120字符）`);
        } else if (product.shortDescription.length < 50 || product.shortDescription.length > 150) {
          warnings.push(`${prodPrefix} shortDescription 长度建议80-120字符，当前 ${product.shortDescription.length} 字符`);
        }

        if (!product.descriptionParagraphs || !Array.isArray(product.descriptionParagraphs)) {
          errors.push(`${prodPrefix} 缺少 descriptionParagraphs 数组`);
        } else {
          if (product.descriptionParagraphs.length !== 3) {
            warnings.push(`${prodPrefix} descriptionParagraphs 建议3段，当前 ${product.descriptionParagraphs.length} 段`);
          }
          product.descriptionParagraphs.forEach((para, pIdx) => {
            if (para.length > 150) {
              warnings.push(`${prodPrefix}.descriptionParagraphs[${pIdx}] 过长（建议每段100字符内），当前 ${para.length} 字符`);
            }
          });
        }

        // FAE 点评检查
        if (!product.faeReview) {
          errors.push(`${prodPrefix} 缺少 faeReview（FAE代理商点评必须）`);
        } else {
          if (!product.faeReview.author) errors.push(`${prodPrefix}.faeReview 缺少 author`);
          if (!product.faeReview.title) errors.push(`${prodPrefix}.faeReview 缺少 title`);
          if (!product.faeReview.content) errors.push(`${prodPrefix}.faeReview 缺少 content`);
          if (!product.faeReview.highlight) errors.push(`${prodPrefix}.faeReview 缺少 highlight`);
          if (product.faeReview.content && product.faeReview.content.length < 100) {
            warnings.push(`${prodPrefix}.faeReview.content 建议200-300字，当前约 ${product.faeReview.content.length} 字`);
          }
        }

        // 替代料号检查
        if (!product.alternativeParts || !Array.isArray(product.alternativeParts)) {
          errors.push(`${prodPrefix} 缺少 alternativeParts 数组（替代料号必须）`);
        } else if (product.alternativeParts.length < 1) {
          errors.push(`${prodPrefix} alternativeParts 至少1个替代选项`);
        }

        // 配套料号检查
        if (!product.companionParts || !Array.isArray(product.companionParts)) {
          errors.push(`${prodPrefix} 缺少 companionParts 数组（配套料号必须）`);
        } else if (product.companionParts.length < 2) {
          errors.push(`${prodPrefix} companionParts 至少2个配套产品`);
        }

        // 产品 FAQ 检查
        if (!product.faqs || !Array.isArray(product.faqs) || product.faqs.length === 0) {
          errors.push(`${prodPrefix} 缺少 faqs 数组（product-detail FAQ 必须）`);
        } else if (product.faqs.length < 3) {
          warnings.push(`${prodPrefix} FAQ 建议3-6条，当前 ${product.faqs.length} 条`);
        }

        // 产品参数类型检查（必须是简单类型）
        const forbiddenFields = ['technicalSpecs', 'orderingInfo', 'alternatives', 'matchingProducts'];
        forbiddenFields.forEach(field => {
          if (field in product && typeof product[field] === 'object' && !Array.isArray(product[field])) {
            errors.push(`${prodPrefix} 包含对象类型字段 ${field}（必须是简单类型）`);
          }
        });
      });
    }
  });

  return { errors, warnings };
}

/**
 * 验证 solutions.json
 */
function validateSolutionsJson(brand, data) {
  const errors = [];
  const warnings = [];

  if (data.error) {
    errors.push(data.error);
    return { errors, warnings };
  }

  // solutions-list FAQ 检查
  if (!data.faqs || !Array.isArray(data.faqs) || data.faqs.length === 0) {
    errors.push('缺少 solutions-list FAQ（faqs 数组）');
  } else if (data.faqs.length < 8) {
    warnings.push(`solutions-list FAQ 建议至少8条，当前 ${data.faqs.length} 条`);
  }

  // 检查 solutions
  if (!data.solutions || !Array.isArray(data.solutions) || data.solutions.length === 0) {
    errors.push('缺少 solutions 数组或为空');
    return { errors, warnings };
  }

  data.solutions.forEach((solution, idx) => {
    const solPrefix = `solutions[${idx}](${solution.id || 'unknown'})`;

    // 必填字段
    if (!solution.id) errors.push(`${solPrefix} 缺少 id`);
    if (!solution.name) errors.push(`${solPrefix} 缺少 name`);
    if (!solution.description) errors.push(`${solPrefix} 缺少 description`);
    if (!solution.longDescription) errors.push(`${solPrefix} 缺少 longDescription`);

    // coreAdvantages 检查
    if (!solution.coreAdvantages || !Array.isArray(solution.coreAdvantages) || solution.coreAdvantages.length === 0) {
      errors.push(`${solPrefix} 缺少 coreAdvantages 数组`);
    }

    // bomList 检查
    if (!solution.bomList || !Array.isArray(solution.bomList) || solution.bomList.length === 0) {
      errors.push(`${solPrefix} 缺少 bomList 数组`);
    } else if (solution.bomList.length < 2) {
      warnings.push(`${solPrefix} BOM 建议至少2个产品，当前 ${solution.bomList.length} 个`);
    }

    // technicalSpecs 检查
    if (!solution.technicalSpecs || typeof solution.technicalSpecs !== 'object') {
      errors.push(`${solPrefix} 缺少 technicalSpecs 对象`);
    }

    // 解决方案 FAQ 检查
    if (!solution.faqs || !Array.isArray(solution.faqs) || solution.faqs.length === 0) {
      errors.push(`${solPrefix} 缺少 faqs 数组（solution-detail FAQ 必须）`);
    } else if (solution.faqs.length < 3) {
      warnings.push(`${solPrefix} FAQ 建议3-6条，当前 ${solution.faqs.length} 条`);
    }

    // customerCases 检查（新增必须）
    if (!solution.customerCases || !Array.isArray(solution.customerCases) || solution.customerCases.length === 0) {
      errors.push(`${solPrefix} 缺少 customerCases 数组（客户案例必须，至少1个）`);
    } else {
      solution.customerCases.forEach((cs, csIdx) => {
        if (!cs.customerName) errors.push(`${solPrefix}.customerCases[${csIdx}] 缺少 customerName`);
        if (!cs.industry) errors.push(`${solPrefix}.customerCases[${csIdx}] 缺少 industry`);
        if (!cs.application) errors.push(`${solPrefix}.customerCases[${csIdx}] 缺少 application`);
        if (!cs.challenge) errors.push(`${solPrefix}.customerCases[${csIdx}] 缺少 challenge`);
        if (!cs.solution) errors.push(`${solPrefix}.customerCases[${csIdx}] 缺少 solution`);
        if (!cs.results) errors.push(`${solPrefix}.customerCases[${csIdx}] 缺少 results`);
        if (!cs.products || !Array.isArray(cs.products)) {
          errors.push(`${solPrefix}.customerCases[${csIdx}] 缺少 products 数组`);
        }
      });
    }

    // faeInsights 检查（新增必须）
    if (!solution.faeInsights) {
      errors.push(`${solPrefix} 缺少 faeInsights 对象（FAE专业见解必须）`);
    } else {
      if (!solution.faeInsights.author) errors.push(`${solPrefix}.faeInsights 缺少 author`);
      if (!solution.faeInsights.insight) errors.push(`${solPrefix}.faeInsights 缺少 insight`);
      if (!solution.faeInsights.logic) errors.push(`${solPrefix}.faeInsights 缺少 logic`);
      if (!solution.faeInsights.keyTakeaways || !Array.isArray(solution.faeInsights.keyTakeaways)) {
        errors.push(`${solPrefix}.faeInsights 缺少 keyTakeaways 数组`);
      }
      if (!solution.faeInsights.commonPitfalls || !Array.isArray(solution.faeInsights.commonPitfalls)) {
        errors.push(`${solPrefix}.faeInsights 缺少 commonPitfalls 数组`);
      }
      if (!solution.faeInsights.bestPractices || !Array.isArray(solution.faeInsights.bestPractices)) {
        errors.push(`${solPrefix}.faeInsights 缺少 bestPractices 数组`);
      }
    }
  });

  return { errors, warnings };
}

/**
 * 验证 support.json
 */
function validateSupportJson(brand, data) {
  const errors = [];
  const warnings = [];

  if (data.error) {
    errors.push(data.error);
    return { errors, warnings };
  }

  // support-list FAQ 检查
  if (!data.faqs || !Array.isArray(data.faqs) || data.faqs.length === 0) {
    errors.push('缺少 support-list FAQ（faqs 数组）');
  } else if (data.faqs.length < 12) {
    warnings.push(`support-list FAQ 建议至少12条，当前 ${data.faqs.length} 条`);
  }

  // 检查 articles
  if (!data.articles || !Array.isArray(data.articles) || data.articles.length === 0) {
    errors.push('缺少 articles 数组或为空');
    return { errors, warnings };
  }

  data.articles.forEach((article, idx) => {
    const artPrefix = `articles[${idx}](${article.id || 'unknown'})`;

    // 必填字段
    if (!article.id) errors.push(`${artPrefix} 缺少 id`);
    if (!article.title) errors.push(`${artPrefix} 缺少 title`);
    if (!article.summary) errors.push(`${artPrefix} 缺少 summary`);
    if (!article.content) errors.push(`${artPrefix} 缺少 content`);
    if (!article.category) errors.push(`${artPrefix} 缺少 category`);
    if (!article.tags || !Array.isArray(article.tags)) errors.push(`${artPrefix} 缺少 tags 数组`);
    if (!article.date) errors.push(`${artPrefix} 缺少 date`);
    if (!article.publishDate) errors.push(`${artPrefix} 缺少 publishDate（新增必须）`);

    // author 检查（新增必须）
    if (!article.author) {
      errors.push(`${artPrefix} 缺少 author 对象`);
    } else {
      if (!article.author.name) errors.push(`${artPrefix}.author 缺少 name`);
      if (!article.author.title) errors.push(`${artPrefix}.author 缺少 title`);
      if (!article.author.experience) errors.push(`${artPrefix}.author 缺少 experience`);
      if (!article.author.expertise || !Array.isArray(article.author.expertise)) {
        errors.push(`${artPrefix}.author 缺少 expertise 数组`);
      }
    }

    // relatedArticles 检查（新增必须）
    if (!article.relatedArticles || !Array.isArray(article.relatedArticles)) {
      errors.push(`${artPrefix} 缺少 relatedArticles 数组`);
    } else if (article.relatedArticles.length < 3) {
      errors.push(`${artPrefix} relatedArticles 至少3个相关文章`);
    }

    // faeInsights 检查（新增必须）
    if (!article.faeInsights) {
      errors.push(`${artPrefix} 缺少 faeInsights 对象`);
    } else {
      if (!article.faeInsights.insight) errors.push(`${artPrefix}.faeInsights 缺少 insight`);
      if (!article.faeInsights.logic) errors.push(`${artPrefix}.faeInsights 缺少 logic`);
      if (!article.faeInsights.keyTakeaways || !Array.isArray(article.faeInsights.keyTakeaways)) {
        errors.push(`${artPrefix}.faeInsights 缺少 keyTakeaways 数组`);
      }
      if (!article.faeInsights.commonPitfalls || !Array.isArray(article.faeInsights.commonPitfalls)) {
        errors.push(`${artPrefix}.faeInsights 缺少 commonPitfalls 数组`);
      }
      if (!article.faeInsights.bestPractices || !Array.isArray(article.faeInsights.bestPractices)) {
        errors.push(`${artPrefix}.faeInsights 缺少 bestPractices 数组`);
      }
      if (!article.faeInsights.troubleshootingTips || !Array.isArray(article.faeInsights.troubleshootingTips)) {
        errors.push(`${artPrefix}.faeInsights 缺少 troubleshootingTips 数组`);
      }
    }

    // customerCases 检查（新增必须）
    if (!article.customerCases || !Array.isArray(article.customerCases) || article.customerCases.length === 0) {
      errors.push(`${artPrefix} 缺少 customerCases 数组（至少1个案例）`);
    } else {
      article.customerCases.forEach((cs, csIdx) => {
        if (!cs.customerName) errors.push(`${artPrefix}.customerCases[${csIdx}] 缺少 customerName`);
        if (!cs.industry) errors.push(`${artPrefix}.customerCases[${csIdx}] 缺少 industry`);
        if (!cs.application) errors.push(`${artPrefix}.customerCases[${csIdx}] 缺少 application`);
        if (!cs.problem) errors.push(`${artPrefix}.customerCases[${csIdx}] 缺少 problem`);
        if (!cs.diagnosis) errors.push(`${artPrefix}.customerCases[${csIdx}] 缺少 diagnosis`);
        if (!cs.solution) errors.push(`${artPrefix}.customerCases[${csIdx}] 缺少 solution`);
        if (!cs.results) errors.push(`${artPrefix}.customerCases[${csIdx}] 缺少 results`);
      });
    }
  });

  return { errors, warnings };
}

/**
 * 验证 news.json
 */
function validateNewsJson(brand, data) {
  const errors = [];
  const warnings = [];

  if (data.error) {
    errors.push(data.error);
    return { errors, warnings };
  }

  if (!data.articles || !Array.isArray(data.articles)) {
    warnings.push('缺少 articles 数组');
  }

  return { errors, warnings };
}

/**
 * 验证单个品牌
 */
function validateBrand(brand) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`验证品牌: ${brand}`);
  console.log('='.repeat(60));

  const brandDir = path.join(config.dataDir, brand);
  if (!fs.existsSync(brandDir)) {
    log('red', `错误: 品牌目录不存在 ${brandDir}`);
    return false;
  }

  let totalErrors = 0;
  let totalWarnings = 0;

  // 验证各个 JSON 文件
  const files = [
    { name: 'brand.json', validator: validateBrandJson },
    { name: 'products.json', validator: validateProductsJson },
    { name: 'solutions.json', validator: validateSolutionsJson },
    { name: 'support.json', validator: validateSupportJson },
    { name: 'news.json', validator: validateNewsJson }
  ];

  files.forEach(({ name, validator }) => {
    console.log(`\n📄 ${name}`);
    const filePath = path.join(brandDir, name);
    const data = loadJSON(filePath);
    const result = validator(brand, data);

    if (result.errors.length > 0) {
      log('red', `  ❌ 错误 (${result.errors.length}):`);
      result.errors.forEach(err => log('red', `    - ${err}`));
      totalErrors += result.errors.length;
    }

    if (result.warnings.length > 0) {
      log('yellow', `  ⚠️  警告 (${result.warnings.length}):`);
      result.warnings.forEach(warn => log('yellow', `    - ${warn}`));
      totalWarnings += result.warnings.length;
    }

    if (result.errors.length === 0 && result.warnings.length === 0) {
      log('green', '  ✅ 通过');
    }
  });

  // 总结
  console.log(`\n${'='.repeat(60)}`);
  if (totalErrors === 0 && totalWarnings === 0) {
    log('green', '✅ 所有检查通过！');
  } else {
    if (totalErrors > 0) {
      log('red', `❌ 共 ${totalErrors} 个错误需要修复`);
    }
    if (totalWarnings > 0) {
      log('yellow', `⚠️  共 ${totalWarnings} 个警告建议优化`);
    }
  }
  console.log('='.repeat(60));

  return totalErrors === 0;
}

/**
 * 验证所有品牌
 */
function validateAllBrands() {
  console.log('='.repeat(60));
  console.log('验证所有品牌数据');
  console.log('='.repeat(60));

  if (!fs.existsSync(config.dataDir)) {
    log('red', `错误: 数据目录不存在 ${config.dataDir}`);
    process.exit(1);
  }

  const brands = fs.readdirSync(config.dataDir).filter(item => {
    const itemPath = path.join(config.dataDir, item);
    return fs.statSync(itemPath).isDirectory();
  });

  if (brands.length === 0) {
    log('yellow', '警告: 没有找到品牌目录');
    process.exit(0);
  }

  let allPassed = true;
  brands.forEach(brand => {
    const passed = validateBrand(brand);
    if (!passed) allPassed = false;
  });

  console.log(`\n${'='.repeat(60)}`);
  if (allPassed) {
    log('green', '✅ 所有品牌验证通过！');
  } else {
    log('red', '❌ 部分品牌存在错误，请修复后再生成页面');
    process.exit(1);
  }
  console.log('='.repeat(60));
}

/**
 * 显示帮助
 */
function showHelp() {
  console.log(`
品牌数据验证工具

用法:
  npm run validate:brand [brand-name]  - 验证指定品牌
  npm run validate:all                 - 验证所有品牌

示例:
  npm run validate:brand semikron
  npm run validate:brand infineon
  npm run validate:all
`);
}

/**
 * 主函数
 */
function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case '--brand':
      const brand = args[1];
      if (!brand) {
        log('red', '错误: 请指定品牌名称');
        showHelp();
        process.exit(1);
      }
      const passed = validateBrand(brand);
      process.exit(passed ? 0 : 1);
      break;

    case '--all':
      validateAllBrands();
      break;

    default:
      showHelp();
      process.exit(0);
  }
}

main();
