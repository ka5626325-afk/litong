#!/usr/bin/env node
/**
 * 修复 Cosel 品牌数据中的中文内容
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'cosel');

// 英文 FAE Review 内容模板
const englishFaeReview = {
  content: "Our FAE team has extensive experience with this product in real projects and highly recommends it for customers requiring high-reliability power supplies. In actual testing, this product exceeded our expectations in performance. We particularly appreciate its robust construction and comprehensive protection features, ensuring long-term stable operation. The datasheet efficiency specifications are actually quite conservative - our actual measurements often show performance 2-3% better than specified. While the initial price is at the high end compared to some competitors, the total cost of ownership proves very favorable due to low maintenance requirements and extremely high reliability. Our customers consistently report extremely high satisfaction with this series, with very low field failure rates. Technical documentation is comprehensive and well-organized, making integration straightforward. Factory technical support is responsive and knowledgeable when rare issues arise. For critical applications where downtime is costly, this is absolutely our top recommendation. We have deployed hundreds of these units across various industries with excellent results.",
  highlight: "High reliability, excellent performance, low failure rate"
};

// 英文替代料号文本
const englishAlternativeText = {
  comparison: "See datasheet for voltage/current specifications comparison",
  reason: "Alternative option meeting same application requirements",
  useCase: "Suitable for cost-sensitive applications requiring reliability",
  recommendation: "Compare specifications in datasheet and select based on application requirements."
};

function fixProducts() {
  const productsPath = path.join(dataDir, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    console.log('  [ERROR] products.json not found');
    return;
  }
  
  let content = fs.readFileSync(productsPath, 'utf8');
  let fixCount = 0;
  
  // 修复 SEO 关键词
  content = content.replace(/Cosel选型/g, 'Cosel Selection Guide');
  content = content.replace(/AC-DC Enclosed Power Supplies选型指南/g, 'AC-DC Enclosed Power Supplies Selection Guide');
  content = content.replace(/AC-DC DIN Rail Power Supplies选型指南/g, 'AC-DC DIN Rail Power Supplies Selection Guide');
  content = content.replace(/Medical Power Supplies选型指南/g, 'Medical Power Supplies Selection Guide');
  content = content.replace(/EMI Filters选型指南/g, 'EMI Filters Selection Guide');
  
  // 修复 FAE Review 中文内容
  const chineseFaePattern = /"content": "我们的FAE团队在实际项目中有丰富的[^"]*应用经验，强烈推荐这款产品给需要高可靠性电源的客户。在实际测试中，这款产品的性能表现超出了我们的预期。我们特别欣赏其坚固的结构设计和全面的保护功能，确保了长期稳定运行。数据手册中的效率规格实际上是相当保守的——我们的实际测量经常显示性能超出规格2-3%。虽然初始价格相比某些竞争对手处于高端，但由于维护需求低和可靠性极高，总拥有成本证明非常有利。我们的客户对这款系列 consistently 报告极高的满意度，现场故障率非常低。技术文档全面且组织良好，使集成变得简单。工厂技术支持在罕见问题出现时反应迅速且知识渊博。对于停机成本高的关键应用，这绝对是我们的首选推荐。我们在各个行业部署了数百台这种设备，效果出色。"/g;
  
  content = content.replace(chineseFaePattern, `"content": "${englishFaeReview.content}"`);
  
  // 修复 highlight 中文
  content = content.replace(/"highlight": "高可靠性、优异性能、低故障率"/g, `"highlight": "${englishFaeReview.highlight}"`);
  
  // 修复替代料号中文
  content = content.replace(/PBA300F-12=>PBA300F-24: 电压\/电流规格对比，详见datasheet/g, englishAlternativeText.comparison);
  content = content.replace(/作为替代方案，满足Same应用需求/g, englishAlternativeText.reason);
  content = content.replace(/适用于对成本敏感但仍需可靠性的应用/g, englishAlternativeText.useCase);
  content = content.replace(/替代料号[^，]*，详见datasheet。根据应用需求选择合适规格。/g, englishAlternativeText.recommendation);
  
  // 写入文件
  fs.writeFileSync(productsPath, content, 'utf8');
  console.log('  [SUCCESS] Fixed Chinese content in cosel/products.json');
}

function main() {
  console.log('========================================');
  console.log('Fix Cosel Chinese Content');
  console.log('========================================');
  
  fixProducts();
  
  console.log('\n========================================');
  console.log('Cosel Chinese content fixed!');
  console.log('========================================');
}

main();
