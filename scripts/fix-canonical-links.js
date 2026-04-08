const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'output');

function fixCanonicalLinks(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixCanonicalLinks(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // 获取当前文件所在的品牌目录
      const relativePath = path.relative(outputDir, filePath);
      const pathParts = relativePath.split(path.sep);
      const brandName = pathParts[0];
      
      // 修复 canonical 链接 - 将错误的品牌名替换为正确的品牌名
      if (brandName === 'infineon' || brandName === 'semikron') {
        const correctBrand = brandName;
        const wrongBrand = correctBrand === 'infineon' ? 'semikron' : 'infineon';
        
        // 匹配 canonical 链接中的错误品牌名
        const canonicalRegex = new RegExp(`(link rel="canonical" href="https://www\.elec-distributor\.com/)${wrongBrand}(/[^"]*)"`, 'g');
        
        if (canonicalRegex.test(content)) {
          content = content.replace(canonicalRegex, `$1${correctBrand}$2"`);
          modified = true;
          console.log(`✓ Fixed canonical: ${relativePath}`);
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
      }
    }
  });
}

console.log('Fixing canonical links...\n');
fixCanonicalLinks(outputDir);
console.log('\n✓ Canonical links fixed!');
