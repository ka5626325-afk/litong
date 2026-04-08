const fs = require('fs');

const content = fs.readFileSync('data/power-integrations/products.json', 'utf8');
const lines = content.split('\n');

// Remove lines 1225 and 1226 (indices 1224 and 1225)
// Line 1225 is "  ]" and line 1226 is "}"
// But we need to check if they are actually extra

console.log('Line 1223:', JSON.stringify(lines[1222]));
console.log('Line 1224:', JSON.stringify(lines[1223]));
console.log('Line 1225:', JSON.stringify(lines[1224]));
console.log('Line 1226:', JSON.stringify(lines[1225]));
console.log('Line 1227:', JSON.stringify(lines[1226]));

// Check if line 1225 is "  ]" and line 1226 is "}"
if (lines[1224].trim() === ']' && lines[1225].trim() === '}') {
  console.log('Found extra lines, removing them...');
  lines.splice(1224, 2); // Remove lines 1225 and 1226
  fs.writeFileSync('data/power-integrations/products.json', lines.join('\n'));
  console.log('Fixed!');
} else {
  console.log('No extra lines found');
}
