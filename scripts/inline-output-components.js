/**
 * 内联组件脚本 - 将 output 目录中的 SSI include 替换为实际内容
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const outputDir = path.join(rootDir, 'output');
const componentsDir = path.join(rootDir, 'templates', 'components');

// 读取所有组件
const components = {};
['navbar', 'footer', 'breadcrumb', 'floating-contact'].forEach(name => {
  const filePath = path.join(componentsDir, `${name}.html`);
  if (fs.existsSync(filePath)) {
    components[name] = fs.readFileSync(filePath, 'utf8');
  }
});

// 处理 HTML 文件
function processFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // 替换所有 include 语句
  Object.keys(components).forEach(name => {
    const regex = new RegExp(`<!--#include virtual="/templates/components/${name}.html" -->`, 'g');
    content = content.replace(regex, components[name]);
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Processed: ${path.relative(rootDir, filePath)}`);
}

// 处理目录
function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      processFile(filePath);
    }
  });
}

console.log('Inlining components in output directory...\n');
processDirectory(outputDir);
console.log('\n✓ Component inlining complete!');
