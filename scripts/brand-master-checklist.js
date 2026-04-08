#!/usr/bin/env node

/**
 * 统一品牌数据检查清单（主控工具）
 * 合并了：brand-creation-checklist.js + faq-validator.js
 * 
 * 功能：
 *   1. 文件完整性检查
 *   2. 字段完整性检查
 *   3. FAQ完整性检查（3级：文件级、分类级、产品级）
 *   4. SEO关键词检查（distributor/选型）
 *   5. 产品数据检查（alternativeParts/companionParts）
 *   6. 解决方案检查（customerCases/faeInsights）
 *   7. 技术支持文章检查
 * 
 * 使用方法: node scripts/brand-master-checklist.js [brandName] [options]
 * 
 * 选项:
 *   --quick      快速检查（只检查关键项）
 *   --faq-only   只检查FAQ
 *   --strict     严格模式（所有警告视为错误）
 * 
 * 示例:
 *   node scripts/brand-master-checklist.js macmic
 *   node scripts/brand-master-checklist.js macmic --strict
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

// ==================== FAQ 验证配置 ====================
// 与 docs/BRAND_DATA_COMPLETE_GUIDE.md 保持一致
const FAQ_REQUIREMENTS = {
  // 文件级别的 FAQ 数量要求 (铁律12-14, 16, 18)
  fileLevel: {
    'brand.json': { min: 7, location: 'root.faqs', description: 'brand-about页面' },
    'products.json': { min: 5, location: 'root.faqs', description: 'products-list页面' },
    'solutions.json': { min: 5, location: 'root.faqs', description: 'solutions-list页面' },
    'support.json': { min: 8, location: 'root.faqs', description: 'support-list页面' }
  },
  // 分类级别的 FAQ 数量要求 (铁律14)
  categoryLevel: {
    'products.json': { min: 5, location: 'eachCategory.faqs', description: 'product-category页面' }
  },
  // 产品级别的 FAQ 数量要求 (铁律15: 5-8个)
  productLevel: {
    'products.json': { min: 5, max: 8, location: 'eachProduct.faqs', description: 'product-detail页面' }
  },
  // 解决方案级别的 FAQ 数量要求 (铁律17: 5-6个)
  solutionLevel: {
    'solutions.json': { min: 5, max: 6, location: 'eachSolution.faqs', description: 'solution-detail页面' }
  },
  // 文章级别的 FAQ 数量要求 (铁律19: 5-8个)
  articleLevel: {
    'support.json': { min: 5, max: 8, location: 'eachArticle.faqs', description: 'support-detail页面' }
  },
  // FAQ 字段要求 (铁律20)
  requiredFields: ['question', 'answer', 'decisionGuide', 'keywords'],
  // 内容长度要求
  contentRequirements: {
    question: { min: 15, max: 100, description: '15-35字自然问题' },
    answer: { min: 200, max: 500, description: '200-500字专业回答' },
    decisionGuide: { min: 30, max: 150, description: '1-2句决策引导' },
    keywords: { min: 2, max: 3, description: '2-3个长尾关键词' }
  }
};

// ==================== 检查清单配置 ====================
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
      { name: 'description (描述≥100字)', field: 'description', required: true, minLength: 100 },
      { name: 'longDescription (长描述≥300字)', field: 'longDescription', required: true, minLength: 300 },
      { name: 'coreProducts (≥4个)', field: 'coreProducts', required: true, minItems: 4 },
      { name: 'industries (≥3个)', field: 'industries', required: true, minItems: 3 },
      { name: 'seoTitle', field: 'seoTitle', required: true },
      { name: 'seoDescription', field: 'seoDescription', required: true },
      { name: 'seoKeywords (含distributor/选型)', field: 'seoKeywords', required: true, checkKeywords: true },
      { name: 'FAQs (≥7个, 铁律12)', field: 'faqs', required: true, minItems: 7 }
    ]
  },

  // products.json 检查
  products: {
    title: '📦 products.json 内容检查',
    items: [
      { name: 'seoTitle', field: 'seoTitle', required: true },
      { name: 'seoDescription', field: 'seoDescription', required: true },
      { name: 'seoKeywords (含distributor/选型)', field: 'seoKeywords', required: true, checkKeywords: true },
      { name: '根级别FAQs (≥5个, 铁律13)', field: 'faqs', required: true, minItems: 5 },
      { name: '分类数量 (≥4个)', field: 'categories', required: true, minItems: 4 }
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
      // longDescription要求：详细介绍分类特点、主要系列、核心优势、应用领域，含distributor/选型关键词，至少300字
      { name: 'longDescription (≥300字,含distributor/选型/系列/优势/应用)', field: 'longDescription', required: true, minLength: 300, checkDistributor: true },
      { name: 'series (≥2个系列)', field: 'series', required: true, minItems: 2 },
      { name: 'selectionGuide (选型指南)', field: 'selectionGuide', required: true },
      // selectionGuideLink要求：指向选型指南文章，帮助用户选型
      { name: 'selectionGuideLink (选型指南链接)', field: 'selectionGuideLink', required: true, checkSelectionGuideLink: true },
      { name: '分类FAQs (≥5个, 铁律14)', field: 'faqs', required: true, minItems: 5 },
      { name: 'products (≥2个产品)', field: 'products', required: true, minItems: 2 }
    ]
  },

  // 产品详情检查
  productDetail: {
    title: '🔧 每个产品详情检查',
    items: [
      { name: 'partNumber', field: 'partNumber', required: true },
      { name: 'shortDescription (80-120字)', field: 'shortDescription', required: true, minLength: 80, maxLength: 120 },
      { name: 'descriptionParagraphs (3段)', field: 'descriptionParagraphs', required: true, minItems: 3 },
      // faeReview要求：带有主观色彩的FAE点评/应用解读，200-300字
      { name: 'faeReview (FAE点评-主观色彩≥200字)', field: 'faeReview', required: true, checkFaeReview: true, checkFaeReviewLength: true },
      // alternativeParts要求：≥2个替代料号，电气参数≥原型号，详细对比
      { name: 'alternativeParts (≥2个,参数≥原型号,详细对比)', field: 'alternativeParts', required: true, minItems: 2, checkAlternativeParts: true, checkAlternativeComparison: true },
      { name: 'companionParts (≥3个配套料号)', field: 'companionParts', required: true, minItems: 3 },
      { name: '产品FAQs (5-8个, 铁律15)', field: 'faqs', required: true, minItems: 5, maxItems: 8 }
    ]
  },

  // solutions.json 检查
  solutions: {
    title: '💡 solutions.json 内容检查',
    items: [
      { name: 'seoTitle', field: 'seoTitle', required: true },
      { name: 'seoDescription', field: 'seoDescription', required: true },
      { name: 'seoKeywords (含distributor/选型)', field: 'seoKeywords', required: true, checkKeywords: true },
      { name: '根级别FAQs (≥5个, 铁律16)', field: 'faqs', required: true, minItems: 5 },
      { name: 'solutions (≥2个方案)', field: 'solutions', required: true, minItems: 2 }
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
      { name: 'benefits (≥4个)', field: 'benefits', required: true, minItems: 4 },
      { name: 'coreAdvantages (≥5个)', field: 'coreAdvantages', required: true, minItems: 5 },
      { name: 'bomList (BOM清单)', field: 'bomList', required: true, minItems: 2 },
      { name: 'technicalSpecs (技术规格)', field: 'technicalSpecs', required: true },
      // customerCases要求：≥2个客户案例，包含挑战/解决方案/量化结果
      { name: 'customerCases (≥2个,含挑战/方案/量化结果)', field: 'customerCases', required: true, minItems: 2, checkCustomerCases: true },
      // faeInsights要求：FAE见解，包含见解逻辑/决策框架
      { name: 'faeInsights (FAE见解-含见解逻辑/决策框架)', field: 'faeInsights', required: true, checkFaeInsights: true, checkFaeDecisionFramework: true },
      { name: '方案FAQs (5-6个, 铁律17)', field: 'faqs', required: true, minItems: 5, maxItems: 6 }
    ]
  },

  // support.json 检查
  support: {
    title: '📚 support.json 内容检查',
    items: [
      { name: 'seoTitle', field: 'seoTitle', required: true },
      { name: 'seoDescription', field: 'seoDescription', required: true },
      { name: 'seoKeywords (含distributor/选型)', field: 'seoKeywords', required: true, checkKeywords: true },
      { name: '根级别FAQs (≥8个, 铁律18)', field: 'faqs', required: true, minItems: 8 },
      { name: 'articles (≥4篇文章)', field: 'articles', required: true, minItems: 4 }
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
      { name: 'tags (≥3个标签)', field: 'tags', required: true, minItems: 3 },
      { name: 'relatedArticles (≥3篇)', field: 'relatedArticles', required: true, minItems: 3 },
      // faeInsights要求：FAE见解，包含见解逻辑
      { name: 'faeInsights (FAE见解-含见解逻辑)', field: 'faeInsights', required: true, checkFaeInsightsDetail: true },
      // customerCases要求：≥1个客户案例，包含挑战/解决方案/反馈
      { name: 'customerCases (≥1个,含挑战/方案/反馈)', field: 'customerCases', required: true, minItems: 1, checkSupportCustomerCases: true },
      { name: '文章FAQs (5-8个, 铁律19)', field: 'faqs', required: true, minItems: 5, maxItems: 8 }
    ]
  }
};

// ==================== FAQ 验证函数 ====================

function validateFAQ(faq, context) {
  const errors = [];
  
  FAQ_REQUIREMENTS.requiredFields.forEach(field => {
    if (!faq[field]) {
      errors.push(`缺少字段: ${field}`);
    }
  });
  
  if (errors.length > 0) return errors;
  
  if (faq.question) {
    const len = faq.question.length;
    if (len < FAQ_REQUIREMENTS.contentRequirements.question.min) {
      errors.push(`question太短(${len}<${FAQ_REQUIREMENTS.contentRequirements.question.min})`);
    }
  }
  
  if (faq.answer) {
    const len = faq.answer.length;
    if (len < FAQ_REQUIREMENTS.contentRequirements.answer.min) {
      errors.push(`answer太短(${len}<${FAQ_REQUIREMENTS.contentRequirements.answer.min})`);
    }
  }
  
  if (faq.decisionGuide) {
    const len = faq.decisionGuide.length;
    if (len < FAQ_REQUIREMENTS.contentRequirements.decisionGuide.min) {
      errors.push(`decisionGuide太短(${len}<${FAQ_REQUIREMENTS.contentRequirements.decisionGuide.min})`);
    }
  }
  
  if (faq.keywords) {
    if (!Array.isArray(faq.keywords)) {
      errors.push('keywords必须是数组');
    }
  }
  
  return errors;
}

function validateFileLevelFAQ(data, fileName, requirements) {
  const errors = [];
  const faqs = data.faqs;
  
  if (!faqs) {
    errors.push(`${fileName}: 缺少根级别faqs`);
    return errors;
  }
  
  if (!Array.isArray(faqs)) {
    errors.push(`${fileName}: faqs必须是数组`);
    return errors;
  }
  
  if (faqs.length < requirements.min) {
    errors.push(`${fileName}: faqs数量不足(${faqs.length}<${requirements.min})`);
  }
  
  faqs.forEach((faq, idx) => {
    const faqErrors = validateFAQ(faq, `${fileName}[${idx}]`);
    if (faqErrors.length > 0) {
      errors.push(`${fileName} FAQ#${idx+1}: ${faqErrors.join(', ')}`);
    }
  });
  
  return errors;
}

function validateCategoryLevelFAQ(data, fileName) {
  const errors = [];
  
  if (!data.categories) return errors;
  
  data.categories.forEach((category, idx) => {
    const faqs = category.faqs;
    const categoryName = category.name || `分类${idx+1}`;
    
    if (!faqs) {
      errors.push(`${fileName} ${categoryName}: 缺少分类级别faqs`);
      return;
    }
    
    if (!Array.isArray(faqs)) {
      errors.push(`${fileName} ${categoryName}: faqs必须是数组`);
      return;
    }
    
    const req = FAQ_REQUIREMENTS.categoryLevel[fileName];
    if (faqs.length < req.min) {
      errors.push(`${fileName} ${categoryName}: faqs数量不足(${faqs.length}<${req.min})`);
    }
    
    faqs.forEach((faq, fIdx) => {
      const faqErrors = validateFAQ(faq, `${fileName}.${categoryName}[${fIdx}]`);
      if (faqErrors.length > 0) {
        errors.push(`${fileName} ${categoryName} FAQ#${fIdx+1}: ${faqErrors.join(', ')}`);
      }
    });
  });
  
  return errors;
}

function validateProductLevelFAQ(data, fileName) {
  const errors = [];
  
  if (!data.categories) return errors;
  
  data.categories.forEach((category, cIdx) => {
    if (!category.products) return;
    
    const categoryName = category.name || `分类${cIdx+1}`;
    
    category.products.forEach((product, pIdx) => {
      const faqs = product.faqs;
      const productName = product.partNumber || `产品${pIdx+1}`;
      
      if (!faqs) {
        errors.push(`${fileName} ${categoryName}.${productName}: 缺少产品级别faqs`);
        return;
      }
      
      if (!Array.isArray(faqs)) {
        errors.push(`${fileName} ${categoryName}.${productName}: faqs必须是数组`);
        return;
      }
      
      const req = FAQ_REQUIREMENTS.productLevel[fileName];
      if (faqs.length < req.min) {
        errors.push(`${fileName} ${categoryName}.${productName}: faqs数量不足(${faqs.length}<${req.min})`);
      }
      
      faqs.forEach((faq, fIdx) => {
        const faqErrors = validateFAQ(faq, `${fileName}.${categoryName}.${productName}[${fIdx}]`);
        if (faqErrors.length > 0) {
          errors.push(`${fileName} ${categoryName}.${productName} FAQ#${fIdx+1}: ${faqErrors.join(', ')}`);
        }
      });
    });
  });
  
  return errors;
}

// ==================== 主检查函数 ====================

function runChecklist(brand, options = {}) {
  const { quick = false, faqOnly = false, strict = false } = options;
  
  log(`\n${'='.repeat(70)}`, 'cyan');
  log(`🔍 统一品牌数据检查清单: ${brand}`, 'cyan');
  log(`${'='.repeat(70)}\n`, 'cyan');

  let totalChecks = 0;
  let passedChecks = 0;
  let failedChecks = 0;
  let warnings = 0;
  let totalFAQs = 0;

  // ========== 1. 文件存在性检查 ==========
  if (!faqOnly) {
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
  }

  // ========== 2. brand.json 检查 ==========
  const brandData = loadJSON(`data/${brand}/brand.json`);
  if (brandData && !faqOnly) {
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
        log(`  ❌ ${item.name} - 长度不足(${value.length}<${item.minLength})`, 'red');
        failedChecks++;
        return;
      }

      if (item.minItems && Array.isArray(value) && value.length < item.minItems) {
        log(`  ❌ ${item.name} - 数量不足(${value.length}<${item.minItems})`, 'red');
        failedChecks++;
        return;
      }

      if (item.checkKeywords && Array.isArray(value)) {
        const hasDistributor = value.some(k => k.toLowerCase().includes('distributor'));
        const hasSelection = value.some(k => k.toLowerCase().includes('selection') || k.includes('选型'));
        if (!hasDistributor || !hasSelection) {
          log(`  ❌ ${item.name} - 缺少distributor或selection/选型`, 'red');
          failedChecks++;
          return;
        }
      }

      log(`  ✅ ${item.name}`, 'green');
      passedChecks++;
    });

    // 验证 brand.json 的 FAQ
    const brandFAQErrors = validateFileLevelFAQ(brandData, 'brand.json', FAQ_REQUIREMENTS.fileLevel['brand.json']);
    if (brandFAQErrors.length > 0) {
      log(`\n  📋 brand.json FAQ检查:`, 'blue');
      brandFAQErrors.forEach(err => {
        log(`    ❌ ${err}`, 'red');
        failedChecks++;
      });
    } else {
      totalFAQs += brandData.faqs ? brandData.faqs.length : 0;
    }
  }

  // ========== 3. products.json 检查 ==========
  const productsData = loadJSON(`data/${brand}/products.json`);
  if (productsData) {
    if (!faqOnly) {
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
          log(`  ❌ ${item.name} - 数量不足(${value.length}<${item.minItems})`, 'red');
          failedChecks++;
          return;
        }

        if (item.checkKeywords && Array.isArray(value)) {
          const hasDistributor = value.some(k => k.toLowerCase().includes('distributor'));
          const hasSelection = value.some(k => k.toLowerCase().includes('selection') || k.includes('选型'));
          if (!hasDistributor || !hasSelection) {
            log(`  ❌ ${item.name} - 缺少distributor或selection/选型`, 'red');
            failedChecks++;
            return;
          }
        }

        log(`  ✅ ${item.name}`, 'green');
        passedChecks++;
      });
    }

    // 验证 products.json 的 FAQ（3级）
    log(`\n📋 products.json FAQ检查:`, 'blue');
    
    const fileReq = FAQ_REQUIREMENTS.fileLevel['products.json'];
    const fileErrors = validateFileLevelFAQ(productsData, 'products.json', fileReq);
    if (fileErrors.length > 0) {
      fileErrors.forEach(err => log(`  ❌ ${err}`, 'red'));
      failedChecks += fileErrors.length;
    } else {
      totalFAQs += productsData.faqs ? productsData.faqs.length : 0;
      log(`  ✅ 根级别FAQ: ${productsData.faqs ? productsData.faqs.length : 0}个`, 'green');
    }

    const catErrors = validateCategoryLevelFAQ(productsData, 'products.json');
    if (catErrors.length > 0) {
      catErrors.forEach(err => log(`  ❌ ${err}`, 'red'));
      failedChecks += catErrors.length;
    } else if (productsData.categories) {
      let catFAQCount = 0;
      productsData.categories.forEach(cat => {
        if (cat.faqs) catFAQCount += cat.faqs.length;
      });
      totalFAQs += catFAQCount;
      log(`  ✅ 分类级别FAQ: ${catFAQCount}个`, 'green');
    }

    const prodErrors = validateProductLevelFAQ(productsData, 'products.json');
    if (prodErrors.length > 0) {
      prodErrors.forEach(err => log(`  ❌ ${err}`, 'red'));
      failedChecks += prodErrors.length;
    } else if (productsData.categories) {
      let prodFAQCount = 0;
      productsData.categories.forEach(cat => {
        if (cat.products) {
          cat.products.forEach(prod => {
            if (prod.faqs) prodFAQCount += prod.faqs.length;
          });
        }
      });
      totalFAQs += prodFAQCount;
      log(`  ✅ 产品级别FAQ: ${prodFAQCount}个`, 'green');
    }

    // 产品分类和产品详情检查
    if (!faqOnly && productsData.categories) {
      productsData.categories.forEach((category, idx) => {
        log(`\n${checklist.productCategory.title} - ${category.name || `分类${idx+1}`}`, 'magenta');
        checklist.productCategory.items.forEach(item => {
          totalChecks++;
          const value = category[item.field];
          
          if (!value && item.required) {
            log(`  ❌ ${item.name} - 缺失`, 'red');
            failedChecks++;
            return;
          }

          if (item.minItems && Array.isArray(value) && value.length < item.minItems) {
            log(`  ❌ ${item.name} - 数量不足(${value.length}<${item.minItems})`, 'red');
            failedChecks++;
            return;
          }

          if (item.minLength && typeof value === 'string' && value.length < item.minLength) {
            log(`  ❌ ${item.name} - 长度不足(${value.length}<${item.minLength})`, 'red');
            failedChecks++;
            return;
          }

          if (item.checkDistributor && typeof value === 'string') {
            const hasDistributor = value.toLowerCase().includes('distributor');
            const hasSelection = value.toLowerCase().includes('selection') || value.includes('选型');
            if (!hasDistributor || !hasSelection) {
              log(`  ❌ ${item.name} - 缺少distributor或selection/选型关键词`, 'red');
              failedChecks++;
              return;
            }
          }

          if (item.checkSelectionGuideLink && value) {
            if (!value.url || !value.text) {
              log(`  ❌ ${item.name} - 选型指南链接信息不完整`, 'red');
              failedChecks++;
              return;
            }
            // 检查链接是否指向技术支持文章
            if (!value.url.includes('/support/') && !value.text.includes('选择')) {
              log(`  ⚠️  ${item.name} - 建议链接指向选型指南文章`, 'yellow');
            }
          }

          log(`  ✅ ${item.name}`, 'green');
          passedChecks++;
        });

        // 产品详情检查
        if (category.products) {
          category.products.forEach((product, pIdx) => {
            log(`\n${checklist.productDetail.title} - ${product.partNumber || `产品${pIdx+1}`}`, 'magenta');
            checklist.productDetail.items.forEach(item => {
              totalChecks++;
              const value = product[item.field];
              
              if (!value && item.required) {
                log(`  ❌ ${item.name} - 缺失`, 'red');
                failedChecks++;
                return;
              }

              if (item.minLength && typeof value === 'string' && value.length < item.minLength) {
                log(`  ❌ ${item.name} - 长度不足(${value.length}<${item.minLength})`, 'red');
                failedChecks++;
                return;
              }

              if (item.maxLength && typeof value === 'string' && value.length > item.maxLength) {
                log(`  ❌ ${item.name} - 长度超限(${value.length}>${item.maxLength})`, 'red');
                failedChecks++;
                return;
              }

              if (item.minItems && Array.isArray(value) && value.length < item.minItems) {
                log(`  ❌ ${item.name} - 数量不足(${value.length}<${item.minItems})`, 'red');
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

              // 检查FAE点评长度（要求≥200字）
              if (item.checkFaeReviewLength && value && value.content) {
                if (value.content.length < 200) {
                  log(`  ❌ ${item.name} - FAE点评长度不足(${value.content.length}<200字)`, 'red');
                  failedChecks++;
                  return;
                }
                // 检查是否带有主观色彩（检查是否包含主观词汇）
                const subjectiveWords = ['建议', '推荐', '认为', '经验', '发现', '注意'];
                const hasSubjective = subjectiveWords.some(word => value.content.includes(word));
                if (!hasSubjective) {
                  log(`  ⚠️  ${item.name} - FAE点评建议包含更多主观见解`, 'yellow');
                }
              }

              if (item.checkAlternativeParts && Array.isArray(value)) {
                for (const alt of value) {
                  if (!alt.comparison || !alt.reason || !alt.useCase) {
                    log(`  ❌ ${item.name} - 替代料号${alt.partNumber||''}信息不完整`, 'red');
                    failedChecks++;
                    return;
                  }
                }
              }

              // 检查替代料号电气参数对比格式
              if (item.checkAlternativeComparison && Array.isArray(value)) {
                for (const alt of value) {
                  if (alt.comparison) {
                    // 检查是否包含 = > < 格式的对比
                    const hasComparisonFormat = /[=><]/.test(alt.comparison);
                    if (!hasComparisonFormat) {
                      log(`  ⚠️  ${item.name} - 替代料号${alt.partNumber||''}对比建议使用=><格式`, 'yellow');
                    }
                    // 检查是否满足电压≥原型号，电流≥原型号
                    if (alt.comparison && typeof alt.comparison === 'object') {
                      const comparisonStr = JSON.stringify(alt.comparison).toLowerCase();
                      const voltageOk = comparisonStr.includes('voltage') && 
                                       (comparisonStr.includes('>') || comparisonStr.includes('='));
                      const currentOk = comparisonStr.includes('current') && 
                                       (comparisonStr.includes('>') || comparisonStr.includes('='));
                      if (!voltageOk || !currentOk) {
                        log(`  ⚠️  ${item.name} - 替代料号${alt.partNumber||''}建议明确电压/电流对比`, 'yellow');
                      }
                    }
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

  // ========== 4. solutions.json 检查 ==========
  const solutionsData = loadJSON(`data/${brand}/solutions.json`);
  if (solutionsData) {
    if (!faqOnly) {
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
          log(`  ❌ ${item.name} - 数量不足(${value.length}<${item.minItems})`, 'red');
          failedChecks++;
          return;
        }

        if (item.checkKeywords && Array.isArray(value)) {
          const hasDistributor = value.some(k => k.toLowerCase().includes('distributor'));
          const hasSelection = value.some(k => k.toLowerCase().includes('selection') || k.includes('选型'));
          if (!hasDistributor || !hasSelection) {
            log(`  ❌ ${item.name} - 缺少distributor或selection/选型`, 'red');
            failedChecks++;
            return;
          }
        }

        log(`  ✅ ${item.name}`, 'green');
        passedChecks++;
      });
    }

    // 验证 solutions.json 的 FAQ
    log(`\n📋 solutions.json FAQ检查:`, 'blue');
    const solFileReq = FAQ_REQUIREMENTS.fileLevel['solutions.json'];
    const solFileErrors = validateFileLevelFAQ(solutionsData, 'solutions.json', solFileReq);
    if (solFileErrors.length > 0) {
      solFileErrors.forEach(err => log(`  ❌ ${err}`, 'red'));
      failedChecks += solFileErrors.length;
    } else {
      totalFAQs += solutionsData.faqs ? solutionsData.faqs.length : 0;
      log(`  ✅ 根级别FAQ: ${solutionsData.faqs ? solutionsData.faqs.length : 0}个`, 'green');
    }

    // 解决方案详情检查
    if (!faqOnly && solutionsData.solutions) {
      solutionsData.solutions.forEach((solution, idx) => {
        log(`\n${checklist.solutionDetail.title} - ${solution.title || `方案${idx+1}`}`, 'magenta');
        checklist.solutionDetail.items.forEach(item => {
          totalChecks++;
          const value = solution[item.field];
          
          if (!value && item.required) {
            log(`  ❌ ${item.name} - 缺失`, 'red');
            failedChecks++;
            return;
          }

          if (item.minItems && Array.isArray(value) && value.length < item.minItems) {
            log(`  ❌ ${item.name} - 数量不足(${value.length}<${item.minItems})`, 'red');
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

          // 检查FAE见解是否包含决策框架
          if (item.checkFaeDecisionFramework && value) {
            if (!value.decisionFramework || !value.decisionFramework.steps) {
              log(`  ⚠️  ${item.name} - 建议添加decisionFramework决策框架`, 'yellow');
            }
            // 检查内容长度（要求≥300字）
            if (value.content && value.content.length < 300) {
              log(`  ❌ ${item.name} - FAE见解长度不足(${value.content.length}<300字)`, 'red');
              failedChecks++;
              return;
            }
          }

          // 检查客户案例完整性
          if (item.checkCustomerCases && Array.isArray(value)) {
            for (const caseItem of value) {
              if (!caseItem.challenge || !caseItem.solution || !caseItem.result) {
                log(`  ❌ ${item.name} - 客户案例${caseItem.customer||''}信息不完整(需challenge/solution/result)`, 'red');
                failedChecks++;
                return;
              }
              // 检查结果是否包含量化数据
              if (!/\d+%?|\d+\.?\d*/.test(caseItem.result)) {
                log(`  ⚠️  ${item.name} - 客户案例${caseItem.customer||''}结果建议包含量化数据`, 'yellow');
              }
            }
          }

          log(`  ✅ ${item.name}`, 'green');
          passedChecks++;
        });
      });
    }
  }

  // ========== 5. support.json 检查 ==========
  const supportData = loadJSON(`data/${brand}/support.json`);
  if (supportData) {
    if (!faqOnly) {
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
          log(`  ❌ ${item.name} - 数量不足(${value.length}<${item.minItems})`, 'red');
          failedChecks++;
          return;
        }

        if (item.checkKeywords && Array.isArray(value)) {
          const hasDistributor = value.some(k => k.toLowerCase().includes('distributor'));
          const hasSelection = value.some(k => k.toLowerCase().includes('selection') || k.includes('选型'));
          if (!hasDistributor || !hasSelection) {
            log(`  ❌ ${item.name} - 缺少distributor或selection/选型`, 'red');
            failedChecks++;
            return;
          }
        }

        log(`  ✅ ${item.name}`, 'green');
        passedChecks++;
      });
    }

    // 验证 support.json 的 FAQ
    log(`\n📋 support.json FAQ检查:`, 'blue');
    const supFileReq = FAQ_REQUIREMENTS.fileLevel['support.json'];
    const supFileErrors = validateFileLevelFAQ(supportData, 'support.json', supFileReq);
    if (supFileErrors.length > 0) {
      supFileErrors.forEach(err => log(`  ❌ ${err}`, 'red'));
      failedChecks += supFileErrors.length;
    } else {
      totalFAQs += supportData.faqs ? supportData.faqs.length : 0;
      log(`  ✅ 根级别FAQ: ${supportData.faqs ? supportData.faqs.length : 0}个`, 'green');
    }

    // 技术支持文章检查
    if (!faqOnly && supportData.articles) {
      supportData.articles.forEach((article, idx) => {
        log(`\n${checklist.supportArticle.title} - ${article.title || `文章${idx+1}`}`, 'magenta');
        checklist.supportArticle.items.forEach(item => {
          totalChecks++;
          const value = article[item.field];
          
          if (!value && item.required) {
            log(`  ❌ ${item.name} - 缺失`, 'red');
            failedChecks++;
            return;
          }

          if (item.minItems && Array.isArray(value) && value.length < item.minItems) {
            log(`  ❌ ${item.name} - 数量不足(${value.length}<${item.minItems})`, 'red');
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

          // 检查技术支持文章的FAE见解
          if (item.checkFaeInsightsDetail && value) {
            if (!value.author || !value.content) {
              log(`  ❌ ${item.name} - FAE见解字段不完整`, 'red');
              failedChecks++;
              return;
            }
            // 检查内容长度（要求≥200字）
            if (value.content.length < 200) {
              log(`  ❌ ${item.name} - FAE见解长度不足(${value.content.length}<200字)`, 'red');
              failedChecks++;
              return;
            }
            // 检查是否包含见解逻辑
            if (!value.insightLogic) {
              log(`  ⚠️  ${item.name} - 建议添加insightLogic见解逻辑`, 'yellow');
            }
          }

          // 检查技术支持文章的客户案例
          if (item.checkSupportCustomerCases && Array.isArray(value)) {
            for (const caseItem of value) {
              if (!caseItem.challenge || !caseItem.solution || !caseItem.feedback) {
                log(`  ❌ ${item.name} - 客户案例${caseItem.customer||''}信息不完整(需challenge/solution/feedback)`, 'red');
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
  }

  // ========== 总结 ==========
  log(`\n${'='.repeat(70)}`, 'cyan');
  log('📊 检查结果总结', 'cyan');
  log(`${'='.repeat(70)}`, 'cyan');
  log(`总检查项: ${totalChecks}`, 'blue');
  log(`总FAQ数: ${totalFAQs}`, 'blue');
  log(`✅ 通过: ${passedChecks}`, 'green');
  log(`❌ 失败: ${failedChecks}`, failedChecks > 0 ? 'red' : 'green');
  log(`⚠️  警告: ${warnings}`, warnings > 0 ? 'yellow' : 'green');

  if (strict && warnings > 0) {
    log(`\n⚠️  严格模式: ${warnings}个警告被视为错误`, 'red');
    failedChecks += warnings;
  }

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
  const options = process.argv.slice(3);
  
  if (!brand) {
    log('使用方法: node scripts/brand-master-checklist.js [brandName] [options]', 'yellow');
    log('选项:', 'yellow');
    log('  --quick      快速检查（只检查关键项）', 'yellow');
    log('  --faq-only   只检查FAQ', 'yellow');
    log('  --strict     严格模式（所有警告视为错误）', 'yellow');
    log('\n示例:', 'yellow');
    log('  node scripts/brand-master-checklist.js macmic', 'cyan');
    log('  node scripts/brand-master-checklist.js macmic --strict', 'cyan');
    process.exit(1);
  }

  const checkOptions = {
    quick: options.includes('--quick'),
    faqOnly: options.includes('--faq-only'),
    strict: options.includes('--strict')
  };

  const exitCode = runChecklist(brand, checkOptions);
  process.exit(exitCode);
}

main();
