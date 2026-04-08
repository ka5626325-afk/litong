// Clean and validate JSON files
const fs = require('fs');
const path = require('path');

function cleanAndValidate(filePath) {
  console.log(`Processing ${path.basename(filePath)}...`);
  
  try {
    // Read file as buffer first
    const buffer = fs.readFileSync(filePath);
    
    // Convert to string, replacing invalid UTF-8 sequences
    let content = buffer.toString('utf8');
    
    // Remove all control characters except tab, newline, and carriage return
    content = content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '');
    
    // Try to parse as JSON
    const data = JSON.parse(content);
    
    // Write back clean JSON
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    
    console.log(`  ✓ Valid JSON, cleaned and saved`);
    return true;
  } catch (error) {
    console.log(`  ✗ Error: ${error.message}`);
    
    // Try to find the problematic character
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      for (let i = 0; i < content.length; i++) {
        const char = content.charCodeAt(i);
        if (char < 32 && char !== 9 && char !== 10 && char !== 13) {
          console.log(`  Found control character at position ${i}: char code ${char}`);
          console.log(`  Context: ...${content.substring(Math.max(0, i-20), i)}[CHAR]${content.substring(i+1, Math.min(content.length, i+20))}...`);
        }
      }
    } catch (e) {
      console.log(`  Could not analyze file: ${e.message}`);
    }
    
    return false;
  }
}

const dataDir = path.join(__dirname, '..', 'data', 'aowei');

const files = ['support.json', 'news.json'];

let allValid = true;
files.forEach(file => {
  const valid = cleanAndValidate(path.join(dataDir, file));
  allValid = allValid && valid;
});

if (allValid) {
  console.log('\n✅ All JSON files are valid!');
} else {
  console.log('\n⚠️ Some JSON files have issues');
  process.exit(1);
}
