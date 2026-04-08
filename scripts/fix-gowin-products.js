const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'gowin', 'products.json');
let content = fs.readFileSync(productsPath, 'utf8');

// Trim any whitespace at the end
content = content.trim();

// Try to parse and re-stringify to fix any issues
try {
  const data = JSON.parse(content);
  const fixedContent = JSON.stringify(data, null, 2);
  fs.writeFileSync(productsPath, fixedContent, 'utf8');
  console.log('products.json has been fixed and saved.');
} catch (err) {
  console.error('Error parsing products.json:', err.message);
  process.exit(1);
}
