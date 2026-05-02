#!/usr/bin/env node
/**
 * 修复eastsoft品牌中编造的solutions
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 修复solutions.json
function fixSolutions() {
  console.log('========================================');
  console.log('Fix EASTSOFT Solutions');
  console.log('========================================');
  
  const solutionsPath = path.join(dataDir, 'eastsoft', 'solutions.json');
  
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
      
      // 清理FAE Insights
      if (solution.faeInsights) {
        solution.faeInsights.insight = '[Data Pending] FAE insights to be added based on actual application experience with this solution.';
        solution.faeInsights.content = '[Data Pending] FAE insights to be added based on actual application experience with this solution.';
        solution.faeInsights.decisionFramework = '[Data Pending] Decision framework to be added based on actual application experience.';
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

fixSolutions();
