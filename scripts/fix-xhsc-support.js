const fs = require('fs');
const path = require('path');

const brandName = 'xhsc';
const dataDir = path.join(__dirname, '..', 'data', brandName);

console.log(`🔧 修复 ${brandName} support.json...\n`);

const supportPath = path.join(dataDir, 'support.json');
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// 修复每篇文章的 relatedArticles，确保至少有3个
const articleIds = supportData.articles.map(a => a.id);

supportData.articles.forEach((article, index) => {
  if (!article.relatedArticles || article.relatedArticles.length < 3) {
    // 获取其他文章的ID
    const otherArticles = supportData.articles
      .filter((a, i) => i !== index)
      .slice(0, 3)
      .map(a => ({
        id: a.id,
        title: a.title,
        slug: a.slug
      }));
    
    article.relatedArticles = otherArticles;
    console.log(`✅ 修复文章: ${article.title} - 添加 ${otherArticles.length} 个相关文章`);
  }
});

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('\n🎉 support.json 修复完成！');
