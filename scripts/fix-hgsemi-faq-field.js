#!/usr/bin/env node
/**
 * Fix FAQ field name in support.json articles
 * Change 'faq' to 'faqs' to match checklist requirements
 */

const fs = require('fs');
const path = require('path');

const supportPath = path.join(__dirname, '..', 'data', 'hgsemi', 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Fix FAQ field name in articles
support.articles.forEach(article => {
  if (article.faq && !article.faqs) {
    article.faqs = article.faq;
    delete article.faq;
  }
});

// Save file
fs.writeFileSync(supportPath, JSON.stringify(support, null, 2), 'utf8');

console.log('✅ Fixed FAQ field name:');
console.log('  - Changed faq to faqs in all articles');
