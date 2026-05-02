const fs = require('fs');
const path = require('path');

// Read support.json
const supportPath = path.join(__dirname, '..', 'data', 'vanchip', 'support.json');
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Add tags to each article
const tagsMap = {
  'vanchip-pa-selection-guide': ['PA Selection', 'RF Design', 'Power Amplifier', 'Design Guide'],
  'vanchip-matching-guide': ['Matching Network', 'Load Pull', 'RF Design', 'Design Guide'],
  'vanchip-layout-guide': ['PCB Layout', 'RF Design', 'Thermal Management', 'Design Guide'],
  'vanchip-troubleshooting': ['Troubleshooting', 'Debugging', 'RF Design', 'Technical Support']
};

supportData.articles = supportData.articles.map(article => {
  if (!article.tags && tagsMap[article.id]) {
    article.tags = tagsMap[article.id];
  }
  return article;
});

// Write back
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('Fixed vanchip support.json - added tags to articles');
