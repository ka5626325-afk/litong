/**
 * 批量替换模板中的硬编码品牌路径
 * 将 /infineon/ 替换为动态的 <%= brand.name.toLowerCase() %>/
 */

const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '..', 'templates', 'brands');
const files = fs.readdirSync(templatesDir);

let totalReplacements = 0;

files.forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(templatesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    const beforeCount = (content.match(/href="\/infineon/g) || []).length;
    
    // 替换所有 /infineon/ 路径
    content = content.replace(/href="\/infineon\//g, 'href="/<%= brand.name.toLowerCase() %>/');
    content = content.replace(/href="\/infineon"/g, 'href="/<%= brand.name.toLowerCase() %>"');
    content = content.replace(/url: '\/infineon\//g, "url: '/<%= brand.name.toLowerCase() %>/");
    content = content.replace(/url: "\/infineon\//g, 'url: "/<%= brand.name.toLowerCase() %>/');
    
    const afterCount = (content.match(/<%= brand\.name\.toLowerCase\(\) %>/g) || []).length;
    const replaced = beforeCount;
    
    if (replaced > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ ${file}: Replaced ${replaced} occurrences`);
      totalReplacements += replaced;
    } else {
      console.log(`  ${file}: No changes needed`);
    }
  }
});

console.log(`\n========================================`);
console.log(`Total replacements: ${totalReplacements}`);
console.log(`========================================`);
