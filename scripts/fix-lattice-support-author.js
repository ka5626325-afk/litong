const fs = require('fs');
const path = require('path');

const supportPath = path.join(__dirname, '..', 'data', 'lattice', 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Fix author structure in articles
support.articles.forEach(article => {
  // Convert authorInfo to author object expected by template
  if (article.authorInfo) {
    article.author = {
      "name": article.authorInfo.name,
      "title": article.authorInfo.title,
      "bio": article.authorInfo.bio,
      "image": article.authorInfo.image
    };
    delete article.authorInfo;
  } else if (typeof article.author === 'string') {
    // If author is just a string, convert to object
    article.author = {
      "name": article.author,
      "title": "Technical Specialist",
      "bio": "Experienced FPGA applications engineer with expertise in Lattice solutions.",
      "image": "/images/authors/default.jpg"
    };
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('Fixed support.json author structure');
