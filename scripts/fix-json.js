const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'gowin', 'products.json');
const content = fs.readFileSync(filePath, 'utf8');

// Find the position of the last closing brace
const lastBrace = content.lastIndexOf('}');
if (lastBrace === -1) {
  console.error('No closing brace found');
  process.exit(1);
}

// Extract content up to and including the last brace
const fixedContent = content.substring(0, lastBrace + 1);

// Verify it's valid JSON
try {
  JSON.parse(fixedContent);
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log('JSON file fixed successfully');
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
