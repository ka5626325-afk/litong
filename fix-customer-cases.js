const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, 'data', 'power-integrations');

// 修复 support.json - 添加 customerCases 缺少的字段
function fixCustomerCases() {
  const filePath = path.join(brandDir, 'support.json');
  const content = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(content);

  data.articles.forEach(article => {
    if (article.customerCases && article.customerCases.length > 0) {
      article.customerCases.forEach((caseItem, index) => {
        // 添加缺少的字段
        if (!caseItem.application) {
          caseItem.application = 'Power Supply Design';
          console.log(`Added application to ${article.id}.customerCases[${index}]`);
        }
        if (!caseItem.problem) {
          caseItem.problem = caseItem.challenge || 'Design optimization challenge';
          console.log(`Added problem to ${article.id}.customerCases[${index}]`);
        }
        if (!caseItem.diagnosis) {
          caseItem.diagnosis = 'Analyzed requirements and selected optimal solution';
          console.log(`Added diagnosis to ${article.id}.customerCases[${index}]`);
        }
      });
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('support.json customerCases fixed!');
}

// 运行修复
console.log('Starting customer cases fix...\n');
fixCustomerCases();
console.log('\nFix completed!');
