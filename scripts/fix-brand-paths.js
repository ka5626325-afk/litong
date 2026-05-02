const fs = require('fs');
const path = require('path');

const generateScriptPath = path.join(__dirname, 'generate.js');
let content = fs.readFileSync(generateScriptPath, 'utf8');

// 修改品牌页面生成路径，从 /output/{brand}/ 改为 /output/brand/{brand}/
// 找到 generateBrandPages 函数中的 brandOutputDir 定义
const oldPattern = /const brandOutputDir = path\.join\(config\.outputDir, brand\);/;
const newPattern = `const brandOutputDir = path.join(config.outputDir, 'brand', brand);`;

if (oldPattern.test(content)) {
  content = content.replace(oldPattern, newPattern);
  fs.writeFileSync(generateScriptPath, content, 'utf8');
  console.log('✓ 已修改生成脚本：品牌页面将生成在 /brand/{brand}/ 目录下');
} else {
  console.log('⚠ 未找到需要修改的模式，可能已经被修改过');
}

console.log('\n修改完成！下次运行 npm run build 时，品牌页面将生成在 output/brand/{brandName}/ 目录下');
console.log('例如：');
console.log('  - 之前: output/funcience/index.html');
console.log('  - 之后: output/brand/funcience/index.html');
