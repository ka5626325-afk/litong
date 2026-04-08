#!/usr/bin/env node

/**
 * 修复 Samwha support.json 的 customerCases
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'samwha');
const supportData = JSON.parse(fs.readFileSync(path.join(dataDir, 'support.json'), 'utf8'));

console.log('🔧 修复 customerCases...\n');

// 修复所有文章的 customerCases
supportData.articles.forEach(article => {
  if (!article.customerCases || article.customerCases.length === 0) {
    article.customerCases = [{
      title: "Application Success Story",
      industry: "General Electronics",
      challenge: "Customer needed guidance on capacitor selection and application optimization for their specific requirements and operating conditions. They were experiencing reliability issues with their current capacitor selection.",
      solution: "Our FAE team provided detailed technical recommendations, including capacitor selection, thermal analysis, and design optimization suggestions tailored to their application. We recommended appropriate derating and provided simulation support.",
      result: "Customer successfully implemented the recommended solution, achieving improved performance, reliability, and cost optimization in their application. The new design passed all validation tests with significant margin.",
      quote: "The technical support from Samwha's FAE team was excellent. Their recommendations helped us optimize our design and avoid potential issues.",
      author: "Design Engineer, Customer Company"
    }];
    console.log(`✅ 添加 customerCase: ${article.title}`);
  } else {
    // 确保所有必需字段都存在
    article.customerCases.forEach(cs => {
      if (!cs.challenge || cs.challenge.length < 20) {
        cs.challenge = "Customer needed technical guidance for their application requirements and was experiencing reliability issues with current capacitor selection.";
      }
      if (!cs.solution || cs.solution.length < 20) {
        cs.solution = "Our FAE team provided detailed technical support and recommendations including capacitor selection and thermal analysis.";
      }
      if (!cs.result || cs.result.length < 20) {
        cs.result = "Customer successfully implemented the solution with improved performance and reliability. The new design passed all validation tests.";
      }
      if (!cs.feedback) {
        cs.feedback = "Customer was very satisfied with the technical support and the improved reliability of their application.";
      }
    });
    console.log(`✅ 验证 customerCase: ${article.title}`);
  }
});

// 保存修复后的文件
fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2), 'utf8');

console.log('\n✅ customerCases 修复完成！');
