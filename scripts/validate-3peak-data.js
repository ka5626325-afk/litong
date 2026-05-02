#!/usr/bin/env node
/**
 * 3peak品牌数据完整性验证脚本
 * 按照BRAND_DATA_COMPLETE_GUIDE.md的清单进行验证
 */

const fs = require('fs');
const path = require('path');

// 颜色输出
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

let errorCount = 0;
let warningCount = 0;

function logError(message) {
  console.log(`${colors.red}✗ ${message}${colors.reset}`);
  errorCount++;
}

function logSuccess(message) {
  console.log(`${colors.green}✓ ${message}${colors.reset}`);
}

function logWarning(message) {
  console.log(`${colors.yellow}⚠ ${message}${colors.reset}`);
  warningCount++;
}

function logInfo(message) {
  console.log(`${colors.blue}ℹ ${message}${colors.reset}`);
}

// 验证产品数据
function validateProduct(product, categoryId) {
  const context = `产品 ${product.partNumber} (${categoryId})`;
  
  // 基础字段
  if (!product.partNumber) logError(`${context}: 缺少 partNumber`);
  if (!product.name) logError(`${context}: 缺少 name`);
  if (!product.shortDescription) logError(`${context}: 缺少 shortDescription`);
  if (!product.descriptionParagraphs || !Array.isArray(product.descriptionParagraphs) || product.descriptionParagraphs.length === 0) {
    logError(`${context}: 缺少 descriptionParagraphs 或为空数组`);
  }
  if (!product.specifications || Object.keys(product.specifications).length === 0) {
    logError(`${context}: 缺少 specifications 或为空对象`);
  }
  if (!product.features || !Array.isArray(product.features) || product.features.length === 0) {
    logError(`${context}: 缺少 features 或为空数组`);
  }
  if (!product.applications || !Array.isArray(product.applications) || product.applications.length === 0) {
    logError(`${context}: 缺少 applications 或为空数组`);
  }
  
  // FAE评测
  if (!product.faeReview) {
    logError(`${context}: 缺少 faeReview`);
  } else {
    if (!product.faeReview.summary) logError(`${context}.faeReview: 缺少 summary`);
    if (!product.faeReview.pros || !Array.isArray(product.faeReview.pros) || product.faeReview.pros.length === 0) {
      logError(`${context}.faeReview: 缺少 pros 或为空数组`);
    }
    if (!product.faeReview.cons || !Array.isArray(product.faeReview.cons) || product.faeReview.cons.length === 0) {
      logError(`${context}.faeReview: 缺少 cons 或为空数组`);
    }
    if (!product.faeReview.recommendation) logError(`${context}.faeReview: 缺少 recommendation`);
    if (!product.faeReview.bestFor || !Array.isArray(product.faeReview.bestFor) || product.faeReview.bestFor.length === 0) {
      logError(`${context}.faeReview: 缺少 bestFor 或为空数组`);
    }
  }
  
  // 替代型号
  if (!product.alternativeParts || !Array.isArray(product.alternativeParts)) {
    logWarning(`${context}: 缺少 alternativeParts`);
  } else {
    product.alternativeParts.forEach((alt, idx) => {
      if (!alt.partNumber) logError(`${context}.alternativeParts[${idx}]: 缺少 partNumber`);
      if (!alt.manufacturer) logError(`${context}.alternativeParts[${idx}]: 缺少 manufacturer`);
      if (!alt.comparison) logError(`${context}.alternativeParts[${idx}]: 缺少 comparison`);
    });
  }
  
  // 配套型号
  if (!product.companionParts || !Array.isArray(product.companionParts)) {
    logWarning(`${context}: 缺少 companionParts`);
  } else {
    product.companionParts.forEach((comp, idx) => {
      if (!comp.partNumber) logError(`${context}.companionParts[${idx}]: 缺少 partNumber`);
      if (!comp.relationship) logError(`${context}.companionParts[${idx}]: 缺少 relationship`);
    });
  }
  
  // FAQ
  if (!product.faqs || !Array.isArray(product.faqs) || product.faqs.length === 0) {
    logError(`${context}: 缺少 faqs 或为空数组`);
  } else {
    product.faqs.forEach((faq, idx) => {
      if (!faq.question) logError(`${context}.faqs[${idx}]: 缺少 question`);
      if (!faq.answer) logError(`${context}.faqs[${idx}]: 缺少 answer`);
      if (!faq.decisionGuide) logWarning(`${context}.faqs[${idx}]: 缺少 decisionGuide`);
      if (!faq.keywords || !Array.isArray(faq.keywords) || faq.keywords.length === 0) {
        logWarning(`${context}.faqs[${idx}]: 缺少 keywords 或为空数组`);
      }
    });
  }
}

// 验证技术支持文章
function validateSupportArticle(article) {
  const context = `技术支持文章 ${article.id}`;
  
  // 基础字段
  if (!article.id) logError(`${context}: 缺少 id`);
  if (!article.title) logError(`${context}: 缺少 title`);
  if (!article.slug) logError(`${context}: 缺少 slug`);
  if (!article.category) logError(`${context}: 缺少 category`);
  if (!article.summary) logError(`${context}: 缺少 summary`);
  if (!article.content || !Array.isArray(article.content) || article.content.length === 0) {
    logError(`${context}: 缺少 content 或为空数组`);
  }
  
  // 元数据
  if (!article.author) {
    logError(`${context}: 缺少 author`);
  } else {
    if (!article.author.name) logError(`${context}.author: 缺少 name`);
    if (!article.author.title) logError(`${context}.author: 缺少 title`);
    if (!article.author.department) logError(`${context}.author: 缺少 department`);
    if (!article.author.bio) logError(`${context}.author: 缺少 bio`);
  }
  
  if (!article.date) logError(`${context}: 缺少 date`);
  if (!article.publishDate) logError(`${context}: 缺少 publishDate`);
  if (!article.lastUpdated) logError(`${context}: 缺少 lastUpdated`);
  if (!article.readTime) logError(`${context}: 缺少 readTime`);
  
  // 关联数据
  if (!article.relatedProducts || !Array.isArray(article.relatedProducts)) {
    logWarning(`${context}: 缺少 relatedProducts`);
  }
  if (!article.relatedArticles || !Array.isArray(article.relatedArticles)) {
    logWarning(`${context}: 缺少 relatedArticles`);
  }
  if (!article.attachments || !Array.isArray(article.attachments)) {
    logWarning(`${context}: 缺少 attachments`);
  }
  
  // FAE洞察
  if (!article.faeInsights) {
    logError(`${context}: 缺少 faeInsights`);
  } else {
    if (!article.faeInsights.summary) logError(`${context}.faeInsights: 缺少 summary`);
    if (!article.faeInsights.decisionLogic) logError(`${context}.faeInsights: 缺少 decisionLogic`);
    if (!article.faeInsights.keyConsiderations) logError(`${context}.faeInsights: 缺少 keyConsiderations`);
    if (!article.faeInsights.commonPitfalls || !Array.isArray(article.faeInsights.commonPitfalls)) {
      logError(`${context}.faeInsights: 缺少 commonPitfalls 或不是数组`);
    }
  }
  
  // 客户案例
  if (!article.customerCases || !Array.isArray(article.customerCases) || article.customerCases.length === 0) {
    logWarning(`${context}: 缺少 customerCases 或为空数组`);
  } else {
    article.customerCases.forEach((cs, idx) => {
      if (!cs.customer) logError(`${context}.customerCases[${idx}]: 缺少 customer`);
      if (!cs.challenge) logError(`${context}.customerCases[${idx}]: 缺少 challenge`);
      if (!cs.solution) logError(`${context}.customerCases[${idx}]: 缺少 solution`);
      if (!cs.feedback) logError(`${context}.customerCases[${idx}]: 缺少 feedback`);
      if (!cs.results || !Array.isArray(cs.results)) logError(`${context}.customerCases[${idx}]: 缺少 results 或不是数组`);
    });
  }
  
  // FAQ
  if (!article.faqs || !Array.isArray(article.faqs) || article.faqs.length === 0) {
    logError(`${context}: 缺少 faqs 或为空数组`);
  } else {
    article.faqs.forEach((faq, idx) => {
      if (!faq.question) logError(`${context}.faqs[${idx}]: 缺少 question`);
      if (!faq.answer) logError(`${context}.faqs[${idx}]: 缺少 answer`);
      if (!faq.decisionGuide) logWarning(`${context}.faqs[${idx}]: 缺少 decisionGuide`);
      if (!faq.keywords || !Array.isArray(faq.keywords)) {
        logWarning(`${context}.faqs[${idx}]: 缺少 keywords 或不是数组`);
      }
    });
  }
}

// 验证解决方案
function validateSolution(solution) {
  const context = `解决方案 ${solution.id}`;
  
  // 基础字段
  if (!solution.id) logError(`${context}: 缺少 id`);
  if (!solution.title) logError(`${context}: 缺少 title`);
  if (!solution.subtitle) logError(`${context}: 缺少 subtitle`);
  if (!solution.slug) logError(`${context}: 缺少 slug`);
  if (!solution.description) logError(`${context}: 缺少 description`);
  if (!solution.longDescription) logError(`${context}: 缺少 longDescription`);
  
  // 特性数据
  if (!solution.features || !Array.isArray(solution.features) || solution.features.length === 0) {
    logError(`${context}: 缺少 features 或为空数组`);
  }
  if (!solution.products || !Array.isArray(solution.products) || solution.products.length === 0) {
    logError(`${context}: 缺少 products 或为空数组`);
  }
  if (!solution.applications || !Array.isArray(solution.applications) || solution.applications.length === 0) {
    logError(`${context}: 缺少 applications 或为空数组`);
  }
  
  // 优势数据
  if (!solution.benefits || !Array.isArray(solution.benefits) || solution.benefits.length === 0) {
    logError(`${context}: 缺少 benefits 或为空数组`);
  } else {
    solution.benefits.forEach((ben, idx) => {
      if (!ben.title) logError(`${context}.benefits[${idx}]: 缺少 title`);
      if (!ben.description) logError(`${context}.benefits[${idx}]: 缺少 description`);
    });
  }
  
  if (!solution.coreAdvantages || !Array.isArray(solution.coreAdvantages) || solution.coreAdvantages.length === 0) {
    logError(`${context}: 缺少 coreAdvantages 或为空数组`);
  }
  
  // BOM清单
  if (!solution.bomList || !Array.isArray(solution.bomList) || solution.bomList.length === 0) {
    logError(`${context}: 缺少 bomList 或为空数组`);
  } else {
    solution.bomList.forEach((bom, idx) => {
      if (!bom.component) logError(`${context}.bomList[${idx}]: 缺少 component`);
      if (!bom.quantity) logError(`${context}.bomList[${idx}]: 缺少 quantity`);
      if (!bom.description) logError(`${context}.bomList[${idx}]: 缺少 description`);
    });
  }
  
  // 技术规格
  if (!solution.technicalSpecs || Object.keys(solution.technicalSpecs).length === 0) {
    logError(`${context}: 缺少 technicalSpecs 或为空对象`);
  }
  
  // 资源链接
  if (!solution.resources || !Array.isArray(solution.resources)) {
    logWarning(`${context}: 缺少 resources`);
  } else {
    solution.resources.forEach((res, idx) => {
      if (!res.type) logError(`${context}.resources[${idx}]: 缺少 type`);
      if (!res.title) logError(`${context}.resources[${idx}]: 缺少 title`);
      if (!res.url) logError(`${context}.resources[${idx}]: 缺少 url`);
    });
  }
  
  // 案例研究
  if (!solution.caseStudy) {
    logError(`${context}: 缺少 caseStudy`);
  } else {
    if (!solution.caseStudy.title) logError(`${context}.caseStudy: 缺少 title`);
    if (!solution.caseStudy.description) logError(`${context}.caseStudy: 缺少 description`);
    if (!solution.caseStudy.customer) logError(`${context}.caseStudy: 缺少 customer`);
    if (!solution.caseStudy.challenge) logError(`${context}.caseStudy: 缺少 challenge`);
    if (!solution.caseStudy.solution) logError(`${context}.caseStudy: 缺少 solution`);
    if (!solution.caseStudy.results || !Array.isArray(solution.caseStudy.results)) {
      logError(`${context}.caseStudy: 缺少 results 或不是数组`);
    }
  }
  
  // FAE洞察
  if (!solution.faeInsights) {
    logError(`${context}: 缺少 faeInsights`);
  } else {
    if (!solution.faeInsights.summary) logError(`${context}.faeInsights: 缺少 summary`);
    if (!solution.faeInsights.decisionLogic) logError(`${context}.faeInsights: 缺少 decisionLogic`);
    if (!solution.faeInsights.keyConsiderations) logError(`${context}.faeInsights: 缺少 keyConsiderations`);
    if (!solution.faeInsights.commonPitfalls || !Array.isArray(solution.faeInsights.commonPitfalls)) {
      logError(`${context}.faeInsights: 缺少 commonPitfalls 或不是数组`);
    }
    if (!solution.faeInsights.recommendation) logError(`${context}.faeInsights: 缺少 recommendation`);
  }
  
  // 客户案例
  if (!solution.customerCases || !Array.isArray(solution.customerCases) || solution.customerCases.length === 0) {
    logWarning(`${context}: 缺少 customerCases 或为空数组`);
  } else {
    solution.customerCases.forEach((cs, idx) => {
      if (!cs.customer) logError(`${context}.customerCases[${idx}]: 缺少 customer`);
      if (!cs.challenge) logError(`${context}.customerCases[${idx}]: 缺少 challenge`);
      if (!cs.solution) logError(`${context}.customerCases[${idx}]: 缺少 solution`);
      if (!cs.feedback) logError(`${context}.customerCases[${idx}]: 缺少 feedback`);
      if (!cs.results || !Array.isArray(cs.results)) logError(`${context}.customerCases[${idx}]: 缺少 results 或不是数组`);
    });
  }
  
  // FAQ
  if (!solution.faqs || !Array.isArray(solution.faqs) || solution.faqs.length === 0) {
    logError(`${context}: 缺少 faqs 或为空数组`);
  } else {
    solution.faqs.forEach((faq, idx) => {
      if (!faq.question) logError(`${context}.faqs[${idx}]: 缺少 question`);
      if (!faq.answer) logError(`${context}.faqs[${idx}]: 缺少 answer`);
      if (!faq.decisionGuide) logWarning(`${context}.faqs[${idx}]: 缺少 decisionGuide`);
      if (!faq.keywords || !Array.isArray(faq.keywords)) {
        logWarning(`${context}.faqs[${idx}]: 缺少 keywords 或不是数组`);
      }
    });
  }
}

// 主验证流程
function main() {
  console.log(`${colors.blue}========================================${colors.reset}`);
  console.log(`${colors.blue}  3peak品牌数据完整性验证${colors.reset}`);
  console.log(`${colors.blue}========================================${colors.reset}\n`);
  
  // 验证产品数据
  logInfo("验证产品数据...");
  const productsPath = path.join(__dirname, '..', 'data', '3peak', 'products.json');
  if (fs.existsSync(productsPath)) {
    const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    if (productsData.categories) {
      productsData.categories.forEach(category => {
        if (category.products) {
          category.products.forEach(product => {
            validateProduct(product, category.id);
          });
        }
      });
    }
    logSuccess("产品数据验证完成");
  } else {
    logError("products.json 文件不存在");
  }
  
  console.log('');
  
  // 验证技术支持数据
  logInfo("验证技术支持数据...");
  const supportPath = path.join(__dirname, '..', 'data', '3peak', 'support.json');
  if (fs.existsSync(supportPath)) {
    const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
    if (supportData.articles) {
      supportData.articles.forEach(article => {
        validateSupportArticle(article);
      });
    }
    logSuccess("技术支持数据验证完成");
  } else {
    logError("support.json 文件不存在");
  }
  
  console.log('');
  
  // 验证解决方案数据
  logInfo("验证解决方案数据...");
  const solutionsPath = path.join(__dirname, '..', 'data', '3peak', 'solutions.json');
  if (fs.existsSync(solutionsPath)) {
    const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
    if (solutionsData.solutions) {
      solutionsData.solutions.forEach(solution => {
        validateSolution(solution);
      });
    }
    logSuccess("解决方案数据验证完成");
  } else {
    logError("solutions.json 文件不存在");
  }
  
  console.log('');
  console.log(`${colors.blue}========================================${colors.reset}`);
  console.log(`${colors.blue}  验证结果汇总${colors.reset}`);
  console.log(`${colors.blue}========================================${colors.reset}`);
  
  if (errorCount === 0 && warningCount === 0) {
    console.log(`${colors.green}✓ 所有数据验证通过！${colors.reset}`);
  } else {
    if (errorCount > 0) {
      console.log(`${colors.red}✗ 发现 ${errorCount} 个错误${colors.reset}`);
    }
    if (warningCount > 0) {
      console.log(`${colors.yellow}⚠ 发现 ${warningCount} 个警告${colors.reset}`);
    }
    process.exit(1);
  }
}

main();
