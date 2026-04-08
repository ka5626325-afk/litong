const fs = require('fs');
const c = fs.readFileSync('output/semikron/support/index.html', 'utf8');

// 查找所有 script 标签
const scripts = c.match(/<script>([\s\S]*?)<\/script>/g);
if (scripts) {
  console.log('Found', scripts.length, 'script tags');
  scripts.forEach((s, i) => {
    console.log('\n--- Script', i+1, '---');
    console.log(s.substring(0, 300));
  });
}
