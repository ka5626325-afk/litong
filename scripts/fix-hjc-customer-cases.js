#!/usr/bin/env node

/**
 * 修复 HJC customerCases 字段名问题
 * 将 results 改为 result
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hjc');

// 读取 solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// 修复 customerCases - 将 results 改为 result
solutionsData.solutions.forEach(solution => {
  if (solution.customerCases) {
    solution.customerCases.forEach(caseItem => {
      if (caseItem.results && !caseItem.result) {
        caseItem.result = caseItem.results;
        delete caseItem.results;
        console.log(`Fixed: ${solution.title} - ${caseItem.title} (results -> result)`);
      }
    });
  }
});

// 保存修复后的文件
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2), 'utf8');
console.log('\n✅ solutions.json customerCases 字段名已修复');
console.log('  - 将 "results" 改为 "result"');
