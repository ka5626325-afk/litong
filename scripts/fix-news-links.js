const fs = require('fs');
const path = require('path');

const newsDir = path.join(__dirname, '..', 'output', 'news');
const filePath = path.join(newsDir, 'index.html');

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\/infineon\/news\//g, '/news/');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✓ Updated: output/news/index.html');
} else {
  console.log('File not found: output/news/index.html');
}
