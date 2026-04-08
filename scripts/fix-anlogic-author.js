const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'anlogic');
const supportData = JSON.parse(fs.readFileSync(path.join(dataDir, 'support.json'), 'utf8'));

// Fix author format in articles
supportData.articles.forEach(article => {
  // Convert string author to object format
  if (typeof article.author === 'string') {
    article.author = {
      name: article.author,
      title: article.authorTitle || "高级工程师",
      image: article.authorImage || "/assets/team/fae-engineer.jpg"
    };
  }
  
  // Ensure author object has all fields
  if (!article.author.name) article.author.name = "LiTong FAE Team";
  if (!article.author.title) article.author.title = "高级工程师";
  if (!article.author.image) article.author.image = "/assets/team/fae-engineer.jpg";
  
  // Remove old fields
  delete article.authorTitle;
  delete article.authorImage;
});

fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('Fixed author format in support.json');
