const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

if (!filePath) {
  console.log('Usage: node fix-json-control-chars.js <filepath>');
  process.exit(1);
}

console.log(`Reading ${filePath}...`);
let content = fs.readFileSync(filePath, 'utf8');

// Remove control characters except for valid whitespace (tab, newline, carriage return)
content = content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

// Try to parse to verify it's valid JSON
try {
  const data = JSON.parse(content);
  console.log('JSON is valid after cleaning');
  
  // Write back
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✅ Fixed and saved ${filePath}`);
} catch (e) {
  console.error('Error parsing JSON:', e.message);
  process.exit(1);
}
