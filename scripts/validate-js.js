const fs = require('fs');
const c = fs.readFileSync('output/semikron/support/index.html', 'utf8');

// 提取 script 内容
const match = c.match(/<script>([\s\S]*?)<\/script>/);
if (match) {
  try {
    new Function(match[1]);
    console.log('✓ JavaScript is valid');
  } catch (e) {
    console.log('✗ JavaScript Error:', e.message);
  }
} else {
  console.log('No script found');
}
