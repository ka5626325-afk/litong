const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'gowin', 'products.json');
const content = fs.readFileSync(filePath, 'utf8');

console.log('File length:', content.length);
console.log('Position 136990-137000:', JSON.stringify(content.substring(136990, 137000)));
console.log('Last 20 chars:', JSON.stringify(content.slice(-20)));
