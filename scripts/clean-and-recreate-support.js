const fs = require('fs');
const path = require('path');

const supportPath = path.join(__dirname, '..', 'data', 'tdk', 'support.json');

console.log('Reading support.json...');
let content = fs.readFileSync(supportPath, 'utf8');

// Replace common problematic Unicode characters
content = content
  .replace(/²/g, '^2')  // Superscript 2
  .replace(/³/g, '^3')  // Superscript 3
  .replace(/[\u2018\u2019]/g, "'")  // Smart quotes
  .replace(/[\u201C\u201D]/g, '"')  // Smart double quotes
  .replace(/[\u2013\u2014]/g, '-')  // En/em dashes
  .replace(/[\u00A0]/g, ' ')  // Non-breaking space
  .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');  // Control chars

// Try to parse
try {
  const data = JSON.parse(content);
  console.log('JSON is valid after cleaning');
  
  // Write back
  fs.writeFileSync(supportPath, JSON.stringify(data, null, 2), 'utf8');
  console.log('✅ Fixed and saved support.json');
} catch (e) {
  console.error('Error:', e.message);
  console.log('Attempting to identify problematic section...');
  
  // Try to find the problematic area
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    try {
      JSON.parse(lines.slice(0, i + 1).join('\n') + ']}');
    } catch (e2) {
      if (e2.message.includes('position')) {
        console.log(`Issue around line ${i + 1}`);
        console.log(lines[i].substring(0, 100));
        break;
      }
    }
  }
}
