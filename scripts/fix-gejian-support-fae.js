#!/usr/bin/env node
/**
 * Fix gejian-semi support.json faeInsights - add author field
 */

const fs = require('fs');
const path = require('path');

const brand = 'gejian-semi';
const dataDir = path.join(__dirname, '..', 'data', brand);

function fixSupportFaeInsights() {
  console.log('Fixing support.json faeInsights author field...');
  const filePath = path.join(dataDir, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  data.articles.forEach((article, index) => {
    if (article.faeInsights) {
      // Add author field if missing (copy from article author)
      if (!article.faeInsights.author && article.author) {
        article.faeInsights.author = article.author;
      }
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('✓ support.json faeInsights author field fixed');
}

// Main
console.log(`\n========================================`);
console.log(`Fixing ${brand} support.json faeInsights`);
console.log(`========================================\n`);

try {
  fixSupportFaeInsights();
  
  console.log('\n========================================');
  console.log('Fix applied successfully!');
  console.log('========================================\n');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
