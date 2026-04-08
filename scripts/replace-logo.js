/**
 * 批量替换 Logo 为字体文本
 */
const fs = require('fs');
const path = require('path');

const oldLogo = `<img src="/assets/images/logo.svg" alt="LiTong Electronics" class="logo">`;
const newLogo = `<div class="logo-text">
          <span class="logo-main">LiTong</span>
          <span class="logo-sub">Electronics</span>
        </div>`;

function replaceLogo(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes(oldLogo)) {
    content = content.replace(new RegExp(oldLogo, 'g'), newLogo);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated: ${path.relative(path.join(__dirname, '..'), filePath)}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      replaceLogo(filePath);
    }
  });
}

console.log('Replacing logo with text...\n');
const outputDir = path.join(__dirname, '..', 'output');
processDirectory(outputDir);
console.log('\n✓ Logo replacement complete!');
