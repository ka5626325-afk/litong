const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const dataDir = path.join(__dirname, '..', 'data', 'infineon');
const templatePath = path.join(__dirname, '..', 'templates', 'brands', 'support.html');
const outputPath = path.join(__dirname, '..', 'output', 'infineon', 'support', 'index.html');

// 加载数据
const support = JSON.parse(fs.readFileSync(path.join(dataDir, 'support.json'), 'utf8'));
const brand = JSON.parse(fs.readFileSync(path.join(dataDir, 'brand.json'), 'utf8'));

// 渲染模板
const template = fs.readFileSync(templatePath, 'utf8');
const html = ejs.render(template, { support, brand });

// 写入文件
fs.writeFileSync(outputPath, html, 'utf8');
console.log('✓ Generated: output/infineon/support/index.html');
