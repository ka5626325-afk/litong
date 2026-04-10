const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace LiTong with BeiLuo
    content = content.replace(/LiTong/g, 'BeiLuo');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
      return true;
    }
    return false;
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
    return false;
  }
}

function walkDir(dir, extensions) {
  const results = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      results.push(...walkDir(fullPath, extensions));
    } else if (stat.isFile()) {
      const ext = path.extname(fullPath).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  
  return results;
}

// Process HTML files
console.log('Processing HTML files...');
const htmlFiles = walkDir('.', ['.html']);
let htmlUpdated = 0;
for (const file of htmlFiles) {
  if (replaceInFile(file)) htmlUpdated++;
}
console.log(`Updated ${htmlUpdated} HTML files`);

// Process JSON files
console.log('\nProcessing JSON files...');
const jsonFiles = walkDir('.', ['.json']);
let jsonUpdated = 0;
for (const file of jsonFiles) {
  if (replaceInFile(file)) jsonUpdated++;
}
console.log(`Updated ${jsonUpdated} JSON files`);

console.log('\nDone!');
