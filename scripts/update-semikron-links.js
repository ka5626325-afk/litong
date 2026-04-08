const fs = require('fs');
const path = require('path');

const semikronDir = path.join(__dirname, '..', 'output', 'semikron');

function updateLinks(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      updateLinks(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // 更新面包屑导航
      content = content.replace(
        /<li><a href="\/infineon\/">Infineon<\/a><\/li>/g,
        '<li><a href="/semikron/">Semikron</a></li>'
      );
      
      // 更新 Tab 导航链接
      content = content.replace(
        /href="\/infineon\//g,
        'href="/semikron/'
      );
      
      // 更新产品链接
      content = content.replace(
        /\/infineon\/products\//g,
        '/semikron/products/'
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Updated: ${path.relative(semikronDir, filePath)}`);
    }
  });
}

console.log('Updating Semikron page links...\n');
updateLinks(semikronDir);
console.log('\n✓ Semikron link update complete!');
