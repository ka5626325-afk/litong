#!/usr/bin/env node
/**
 * 修复ecec品牌中编造的solutions和support内容
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 修复solutions.json
function fixSolutions() {
  console.log('========================================');
  console.log('Fix ECEC Solutions');
  console.log('========================================');
  
  const solutionsPath = path.join(dataDir, 'ecec', 'solutions.json');
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
  } catch (error) {
    console.log(`❌ JSON parse error: ${error.message}`);
    return 0;
  }
  
  let fixCount = 0;
  
  if (data.solutions && Array.isArray(data.solutions)) {
    // 检查第3个solution（索引2）
    const solution = data.solutions[2];
    if (solution && solution.id === 'consumer-electronics-solution-3') {
      console.log(`  - solutions[2]: "${solution.id}" -> "DATA_PENDING"`);
      
      solution.id = 'data-pending-solution';
      solution.title = 'Solution (Data Pending)';
      solution.subtitle = '[Data Pending] Solution details to be added from official source';
      solution.description = '[Data Pending] Solution description to be added from official manufacturer documentation.';
      solution.longDescription = '[Data Pending] Complete solution description to be added from official source. This includes technical details, implementation guidelines, and application information.';
      
      // 清理编造的客户案例
      if (solution.customerCases) {
        solution.customerCases.forEach((caseItem, idx) => {
          console.log(`    - customerCases[${idx}]: marked as data pending`);
          caseItem.customer = '[Data Pending]';
          caseItem.industry = '[Data Pending]';
          caseItem.challenge = '[Data Pending] Customer challenge to be documented from actual project experience.';
          caseItem.solution = '[Data Pending] Solution details to be added based on actual implementation.';
          caseItem.results = ['[Data Pending] Results to be verified with customer.'];
          caseItem.result = '[Data Pending] Results to be verified with customer.';
        });
      }
      
      // 清理编造的产品引用
      if (solution.products) {
        solution.products = [];
      }
      
      fixCount++;
    }
  }
  
  if (fixCount > 0) {
    try {
      fs.writeFileSync(solutionsPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`\n✅ Fixed ${fixCount} solution`);
    } catch (error) {
      console.log(`\n❌ Save error: ${error.message}`);
    }
  } else {
    console.log('\n✅ No fake solutions found');
  }
  
  return fixCount;
}

// 修复support.json
function fixSupport() {
  console.log('\n========================================');
  console.log('Fix ECEC Support');
  console.log('========================================');
  
  const supportPath = path.join(dataDir, 'ecec', 'support.json');
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
  } catch (error) {
    console.log(`❌ JSON parse error: ${error.message}`);
    return 0;
  }
  
  let fixCount = 0;
  
  if (data.articles && Array.isArray(data.articles)) {
    // 检查第5篇文章（索引4）
    const article = data.articles[4];
    if (article) {
      console.log(`  - articles[4]: "${article.id}" checking content...`);
      
      // 检查内容是否是编造的
      if (article.content && Array.isArray(article.content)) {
        const contentText = article.content.join(' ');
        if (contentText.includes('This technical reference document provides detailed information') ||
            contentText.includes('Electrical characteristics are specified over the operating temperature range')) {
          console.log(`    -> Content is fabricated, marking as data pending`);
          
          article.title = 'Technical Article (Data Pending)';
          article.summary = '[Data Pending] Article content to be added from official technical documentation.';
          article.description = '[Data Pending] Article description to be added from official source.';
          article.content = [
            '[Data Pending] Article content to be added from official technical documentation.',
            '[Data Pending] Technical details to be verified with manufacturer.',
            '[Data Pending] Application guidelines to be confirmed by FAE team.'
          ];
          
          fixCount++;
        }
      }
    }
  }
  
  if (fixCount > 0) {
    try {
      fs.writeFileSync(supportPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`\n✅ Fixed ${fixCount} article`);
    } catch (error) {
      console.log(`\n❌ Save error: ${error.message}`);
    }
  } else {
    console.log('\n✅ No fake articles found');
  }
  
  return fixCount;
}

// 主函数
function main() {
  const solutionsFixed = fixSolutions();
  const supportFixed = fixSupport();
  
  console.log('\n========================================');
  console.log('Summary');
  console.log('========================================');
  console.log(`Solutions fixed: ${solutionsFixed}`);
  console.log(`Support articles fixed: ${supportFixed}`);
  console.log(`Total fixed: ${solutionsFixed + supportFixed}`);
}

main();
