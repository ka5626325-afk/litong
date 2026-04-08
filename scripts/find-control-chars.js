// Find control characters in JSON files
const fs = require('fs');
const path = require('path');

function findControlChars(filePath) {
  console.log(`Analyzing ${path.basename(filePath)}...\n`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  let found = false;
  for (let i = 0; i < content.length; i++) {
    const charCode = content.charCodeAt(i);
    
    // Check for control characters (0-31 except tab(9), LF(10), CR(13))
    if (charCode < 32 && charCode !== 9 && charCode !== 10 && charCode !== 13) {
      found = true;
      console.log(`Position ${i} (line ~${content.substring(0, i).split('\n').length}):`);
      console.log(`  Char code: ${charCode} (0x${charCode.toString(16)})`);
      console.log(`  Context: "${content.substring(Math.max(0, i-30), i)}[HERE]${content.substring(i+1, Math.min(content.length, i+30))}"`);
      console.log();
      
      // Only show first 5 instances
      if (i > 5) break;
    }
    
    // Also check for high Unicode control characters
    if (charCode >= 0x7F && charCode <= 0x9F) {
      found = true;
      console.log(`Position ${i} (line ~${content.substring(0, i).split('\n').length}):`);
      console.log(`  Char code: ${charCode} (0x${charCode.toString(16)}) - High Unicode control`);
      console.log(`  Context: "${content.substring(Math.max(0, i-30), i)}[HERE]${content.substring(i+1, Math.min(content.length, i+30))}"`);
      console.log();
    }
  }
  
  if (!found) {
    console.log('No control characters found in the checked ranges.');
    
    // Try to parse and see where it fails
    console.log('\nAttempting to parse JSON...');
    try {
      JSON.parse(content);
      console.log('JSON parsed successfully!');
    } catch (e) {
      console.log(`Parse error: ${e.message}`);
      
      // Extract position from error message
      const match = e.message.match(/position (\d+)/);
      if (match) {
        const pos = parseInt(match[1]);
        console.log(`\nError location (position ${pos}):`);
        console.log(`Context: "${content.substring(Math.max(0, pos-50), pos)}[ERROR]${content.substring(pos, Math.min(content.length, pos+50))}"`);
        
        // Show character codes around error
        console.log('\nCharacter codes around error:');
        for (let i = Math.max(0, pos-10); i < Math.min(content.length, pos+10); i++) {
          const code = content.charCodeAt(i);
          const char = content[i];
          console.log(`  ${i}: ${code} (0x${code.toString(16)}) = "${char === '\n' ? '\\n' : char === '\t' ? '\\t' : char}"`);
        }
      }
    }
  }
}

const dataDir = path.join(__dirname, '..', 'data', 'aowei');

console.log('=== support.json ===');
findControlChars(path.join(dataDir, 'support.json'));

console.log('\n=== news.json ===');
findControlChars(path.join(dataDir, 'news.json'));
