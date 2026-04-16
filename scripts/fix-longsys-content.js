#!/usr/bin/env node
/**
 * Fix Longsys support.json content format - convert object to string
 */

const fs = require('fs');
const path = require('path');

const brand = 'longsys';
const dataDir = path.join(__dirname, '..', 'data', brand);

// Fix support.json - convert content object to string
const supportPath = path.join(dataDir, 'support.json');
let support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

support.articles.forEach(article => {
  // Convert content object to string
  if (article.content && typeof article.content === 'object') {
    if (article.content.sections && Array.isArray(article.content.sections)) {
      // Convert sections to markdown string
      const contentParts = article.content.sections.map(section => {
        return `## ${section.title}\n\n${section.content}`;
      });
      article.content = contentParts.join('\n\n');
      console.log(`✅ Fixed content format for article: ${article.id}`);
    }
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('✅ Fixed support.json content format');

console.log('\n🎉 All content fixes applied successfully!');
