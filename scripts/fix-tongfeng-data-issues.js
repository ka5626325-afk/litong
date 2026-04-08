const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'tongfeng');

// Fix 1: Update support.json - change 'link' to 'url' in relatedArticles
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

support.articles.forEach(article => {
  if (article.relatedArticles) {
    article.relatedArticles.forEach(related => {
      if (related.link && !related.url) {
        related.url = related.link;
        delete related.link;
      }
    });
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('✅ Fixed support.json - relatedArticles link -> url');

// Fix 2: Update solutions.json - ensure all fields have proper content
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutions.solutions.forEach(solution => {
  // Ensure coreAdvantages have proper content (not just empty strings)
  if (solution.coreAdvantages) {
    solution.coreAdvantages = solution.coreAdvantages.map((adv, index) => {
      if (typeof adv === 'string') {
        return {
          title: `Advantage ${index + 1}`,
          description: adv,
          icon: "check-circle"
        };
      }
      return adv;
    });
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✅ Fixed solutions.json - coreAdvantages structure');

console.log('\n============================================================');
console.log('✅ All data issues fixed!');
console.log('============================================================');
console.log('\nNext step: Regenerate website');
console.log('  npm run generate:brand tongfeng');
