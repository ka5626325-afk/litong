const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'gowin', 'products.json');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Original length:', content.length);

// Trim whitespace from end
content = content.trimEnd();
console.log('After trim length:', content.length);

// Check if it ends with just }
if (content.endsWith('}')) {
  console.log('File ends with }');
} else {
  console.log('File does NOT end with }');
  console.log('Last 50 chars:', content.slice(-50));
}

// Try to find where valid JSON ends
let testContent = content;
while (testContent.length > 0) {
  try {
    JSON.parse(testContent);
    console.log('Valid JSON found at length:', testContent.length);
    fs.writeFileSync(filePath, testContent, 'utf8');
    console.log('File fixed!');
    break;
  } catch (err) {
    testContent = testContent.slice(0, -1);
  }
}
