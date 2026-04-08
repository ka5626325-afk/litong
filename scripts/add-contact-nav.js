const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'output');
const files = [
  'index.html',
  '404.html',
  'about/index.html',
  'news/index.html',
  'brands/index.html'
];

files.forEach(file => {
  const filePath = path.join(outputDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // 添加 Contact 链接到导航栏
    content = content.replace(
      /<a href="\/about\/" class="nav-item">About Us<\/a>/,
      '<a href="/about/" class="nav-item">About Us</a><a href="/about/contact/" class="nav-item">Contact</a>'
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated: ${file}`);
  }
});

console.log('\n✓ Navigation update complete!');
