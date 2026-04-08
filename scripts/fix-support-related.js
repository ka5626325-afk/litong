const fs = require('fs');

// 读取模板文件
let content = fs.readFileSync('templates/brands/support-detail.html', 'utf8');

// 替换乱码行
content = content.replace(
  /<p>Read more[\s\S]*?<\/p>/g,
  '<p>Read more →</p>'
);

// 写回文件
fs.writeFileSync('templates/brands/support-detail.html', content, 'utf8');

console.log('✅ Fixed support-detail.html');

// 验证修复
const check = fs.readFileSync('templates/brands/support-detail.html', 'utf8');
const matches = check.match(/<p>Read more.*?<\/p>/g);
if (matches) {
  console.log('Found:', matches[0]);
} else {
  console.log('❌ Not found');
}
