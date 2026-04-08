#!/usr/bin/env node

/**
 * FAQ 专用验证工具
 * 确保所有 FAQ 符合要求
 * 
 * 使用方法: node scripts/faq-validator.js [brandName]
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

function loadJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
}

// FAQ 要求配置
const FAQ_REQUIREMENTS = {
  // 文件级别的 FAQ 数量要求
  fileLevel: {
    'brand.json': { min: 3, location: 'root.faqs' },
    'products.json': { min: 3, location: 'root.faqs' },
    'solutions.json': { min: 3, location: 'root.faqs' },
    'support.json': { min: 3, location: 'root.faqs' }
  },
  
  // 分类级别的 FAQ 数量要求
  categoryLevel: {
    'products.json': { min: 3, location: 'eachCategory.faqs' }
  },
  
  // 产品级别的 FAQ 数量要求
  productLevel: {
    'products.json': { min: 3, location: 'eachProduct.faqs' }
  },
  
  // FAQ 字段要求
  requiredFields: ['question', 'answer', 'decisionGuide', 'keywords'],
  
  // 内容长度要求
  contentRequirements: {
    question: { min: 10, max: 200 },
    answer: { min: 50, max: 1000 },
    decisionGuide: { min: 20, max: 200 },
    keywords: { min: 1, max: 10 }
  }
};

// 验证单个 FAQ
function validateFAQ(faq, context) {
  const errors = [];
  
  // 检查必需字段
  FAQ_REQUIREMENTS.requiredFields.forEach(field => {
    if (!faq[field]) {
      errors.push(`缺少必需字段: ${field}`);
    }
  });
  
  if (errors.length > 0) return errors;
  
  // 检查内容长度
  if (faq.question) {
    const len = faq.question.length;
    if (len < FAQ_REQUIREMENTS.contentRequirements.question.min) {
      errors.push(`question 太短 (${len} < ${FAQ_REQUIREMENTS.contentRequirements.question.min})`);
    }
    if (len > FAQ_REQUIREMENTS.contentRequirements.question.max) {
      errors.push(`question 太长 (${len} > ${FAQ_REQUIREMENTS.contentRequirements.question.max})`);
    }
  }
  
  if (faq.answer) {
    const len = faq.answer.length;
    if (len < FAQ_REQUIREMENTS.contentRequirements.answer.min) {
      errors.push(`answer 太短 (${len} < ${FAQ_REQUIREMENTS.contentRequirements.answer.min})`);
    }
    if (len > FAQ_REQUIREMENTS.contentRequirements.answer.max) {
      errors.push(`answer 太长 (${len} > ${FAQ_REQUIREMENTS.contentRequirements.answer.max})`);
    }
  }
  
  if (faq.decisionGuide) {
    const len = faq.decisionGuide.length;
    if (len < FAQ_REQUIREMENTS.contentRequirements.decisionGuide.min) {
      errors.push(`decisionGuide 太短 (${len} < ${FAQ_REQUIREMENTS.contentRequirements.decisionGuide.min})`);
    }
    if (len > FAQ_REQUIREMENTS.contentRequirements.decisionGuide.max) {
      errors.push(`decisionGuide 太长 (${len} > ${FAQ_REQUIREMENTS.contentRequirements.decisionGuide.max})`);
    }
  }
  
  if (faq.keywords) {
    if (!Array.isArray(faq.keywords)) {
      errors.push('keywords 必须是数组');
    } else {
      const len = faq.keywords.length;
      if (len < FAQ_REQUIREMENTS.contentRequirements.keywords.min) {
        errors.push(`keywords 数量不足 (${len} < ${FAQ_REQUIREMENTS.contentRequirements.keywords.min})`);
      }
      if (len > FAQ_REQUIREMENTS.contentRequirements.keywords.max) {
        errors.push(`keywords 数量过多 (${len} > ${FAQ_REQUIREMENTS.contentRequirements.keywords.max})`);
      }
    }
  }
  
  return errors;
}

// 验证文件级别的 FAQ
function validateFileLevelFAQ(data, fileName, requirements) {
  const errors = [];
  const faqs = data.faqs;
  
  if (!faqs) {
    errors.push(`${fileName}: 缺少根级别 faqs`);
    return errors;
  }
  
  if (!Array.isArray(faqs)) {
    errors.push(`${fileName}: faqs 必须是数组`);
    return errors;
  }
  
  if (faqs.length < requirements.min) {
    errors.push(`${fileName}: faqs 数量不足 (${faqs.length} < ${requirements.min})`);
  }
  
  faqs.forEach((faq, idx) => {
    const faqErrors = validateFAQ(faq, `${fileName}[${idx}]`);
    if (faqErrors.length > 0) {
      errors.push(`${fileName} FAQ #${idx + 1}: ${faqErrors.join(', ')}`);
    }
  });
  
  return errors;
}

// 验证分类级别的 FAQ
function validateCategoryLevelFAQ(data, fileName) {
  const errors = [];
  
  if (!data.categories) {
    return errors; // 没有分类就不检查
  }
  
  data.categories.forEach((category, idx) => {
    const faqs = category.faqs;
    const categoryName = category.name || `分类${idx + 1}`;
    
    if (!faqs) {
      errors.push(`${fileName} ${categoryName}: 缺少分类级别 faqs`);
      return;
    }
    
    if (!Array.isArray(faqs)) {
      errors.push(`${fileName} ${categoryName}: faqs 必须是数组`);
      return;
    }
    
    const req = FAQ_REQUIREMENTS.categoryLevel[fileName];
    if (faqs.length < req.min) {
      errors.push(`${fileName} ${categoryName}: faqs 数量不足 (${faqs.length} < ${req.min})`);
    }
    
    faqs.forEach((faq, fIdx) => {
      const faqErrors = validateFAQ(faq, `${fileName}.${categoryName}[${fIdx}]`);
      if (faqErrors.length > 0) {
        errors.push(`${fileName} ${categoryName} FAQ #${fIdx + 1}: ${faqErrors.join(', ')}`);
      }
    });
  });
  
  return errors;
}

// 验证产品级别的 FAQ
function validateProductLevelFAQ(data, fileName) {
  const errors = [];
  
  if (!data.categories) {
    return errors;
  }
  
  data.categories.forEach((category, cIdx) => {
    if (!category.products) return;
    
    const categoryName = category.name || `分类${cIdx + 1}`;
    
    category.products.forEach((product, pIdx) => {
      const faqs = product.faqs;
      const productName = product.partNumber || `产品${pIdx + 1}`;
      
      if (!faqs) {
        errors.push(`${fileName} ${categoryName}.${productName}: 缺少产品级别 faqs`);
        return;
      }
      
      if (!Array.isArray(faqs)) {
        errors.push(`${fileName} ${categoryName}.${productName}: faqs 必须是数组`);
        return;
      }
      
      const req = FAQ_REQUIREMENTS.productLevel[fileName];
      if (faqs.length < req.min) {
        errors.push(`${fileName} ${categoryName}.${productName}: faqs 数量不足 (${faqs.length} < ${req.min})`);
      }
      
      faqs.forEach((faq, fIdx) => {
        const faqErrors = validateFAQ(faq, `${fileName}.${categoryName}.${productName}[${fIdx}]`);
        if (faqErrors.length > 0) {
          errors.push(`${fileName} ${categoryName}.${productName} FAQ #${fIdx + 1}: ${faqErrors.join(', ')}`);
        }
      });
    });
  });
  
  return errors;
}

// 主验证函数
function validateBrandFAQs(brand) {
  log(`\n${'='.repeat(70)}`, 'cyan');
  log(`🔍 FAQ 完整验证: ${brand}`, 'cyan');
  log(`${'='.repeat(70)}\n`, 'cyan');
  
  let totalErrors = 0;
  let totalWarnings = 0;
  let totalFAQs = 0;
  
  // 检查每个文件
  Object.keys(FAQ_REQUIREMENTS.fileLevel).forEach(fileName => {
    const filePath = `data/${brand}/${fileName}`;
    
    if (!fs.existsSync(filePath)) {
      log(`❌ ${fileName}: 文件不存在`, 'red');
      totalErrors++;
      return;
    }
    
    const data = loadJSON(filePath);
    if (!data) {
      log(`❌ ${fileName}: JSON 解析失败`, 'red');
      totalErrors++;
      return;
    }
    
    log(`📄 检查 ${fileName}...`, 'blue');
    
    // 验证文件级别的 FAQ
    const fileReq = FAQ_REQUIREMENTS.fileLevel[fileName];
    const fileErrors = validateFileLevelFAQ(data, fileName, fileReq);
    
    if (fileErrors.length > 0) {
      fileErrors.forEach(err => {
        log(`  ❌ ${err}`, 'red');
        totalErrors++;
      });
    } else {
      const faqCount = data.faqs ? data.faqs.length : 0;
      totalFAQs += faqCount;
      log(`  ✅ 根级别 FAQ: ${faqCount} 个`, 'green');
    }
    
    // 验证分类级别的 FAQ
    if (FAQ_REQUIREMENTS.categoryLevel[fileName]) {
      const catErrors = validateCategoryLevelFAQ(data, fileName);
      if (catErrors.length > 0) {
        catErrors.forEach(err => {
          log(`  ❌ ${err}`, 'red');
          totalErrors++;
        });
      } else if (data.categories) {
        let catFAQCount = 0;
        data.categories.forEach(cat => {
          if (cat.faqs) catFAQCount += cat.faqs.length;
        });
        totalFAQs += catFAQCount;
        log(`  ✅ 分类级别 FAQ: ${catFAQCount} 个`, 'green');
      }
    }
    
    // 验证产品级别的 FAQ
    if (FAQ_REQUIREMENTS.productLevel[fileName]) {
      const prodErrors = validateProductLevelFAQ(data, fileName);
      if (prodErrors.length > 0) {
        prodErrors.forEach(err => {
          log(`  ❌ ${err}`, 'red');
          totalErrors++;
        });
      } else if (data.categories) {
        let prodFAQCount = 0;
        data.categories.forEach(cat => {
          if (cat.products) {
            cat.products.forEach(prod => {
              if (prod.faqs) prodFAQCount += prod.faqs.length;
            });
          }
        });
        totalFAQs += prodFAQCount;
        log(`  ✅ 产品级别 FAQ: ${prodFAQCount} 个`, 'green');
      }
    }
  });
  
  // 总结
  log(`\n${'='.repeat(70)}`, 'cyan');
  log('📊 FAQ 验证总结', 'cyan');
  log(`${'='.repeat(70)}`, 'cyan');
  log(`总 FAQ 数量: ${totalFAQs}`, 'blue');
  log(`错误数量: ${totalErrors}`, totalErrors > 0 ? 'red' : 'green');
  log(`警告数量: ${totalWarnings}`, totalWarnings > 0 ? 'yellow' : 'green');
  
  if (totalErrors === 0) {
    log(`\n🎉 恭喜！所有 FAQ 符合要求！`, 'green');
    return 0;
  } else {
    log(`\n⚠️  请修复上述 ${totalErrors} 个 FAQ 问题`, 'red');
    return 1;
  }
}

// 主函数
function main() {
  const brand = process.argv[2];
  
  if (!brand) {
    log('使用方法: node scripts/faq-validator.js [brandName]', 'yellow');
    log('示例: node scripts/faq-validator.js macmic', 'yellow');
    process.exit(1);
  }
  
  const exitCode = validateBrandFAQs(brand);
  process.exit(exitCode);
}

main();
