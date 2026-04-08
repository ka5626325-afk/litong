// Fix escape sequences in JSON files
const fs = require('fs');
const path = require('path');

function fixEscapeSequences(filePath) {
  console.log(`Fixing ${path.basename(filePath)}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // The issue is that we have raw newlines inside JSON strings
  // We need to find strings that contain unescaped newlines and fix them
  
  // This is a complex problem - we need to parse the JSON structure
  // For now, let's try a different approach: rebuild the JSON from parsed data
  
  try {
    // First, try to fix common issues
    // Replace any standalone backslash followed by n that's not properly escaped
    // But this is risky - let's instead try to parse and rebuild
    
    // Use a more lenient parser or manually fix
    const data = eval('(' + content + ')'); // Using eval as a lenient parser
    
    // Write back properly formatted JSON
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    
    console.log('  ✓ Fixed and saved');
    return true;
  } catch (e) {
    console.log(`  ✗ Could not fix: ${e.message}`);
    return false;
  }
}

// Alternative approach: manually fix the problematic strings
function manualFix(filePath) {
  console.log(`\nManual fix for ${path.basename(filePath)}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find and log the problematic area
  const problematicPos = 19193; // From error message
  console.log(`Content around position ${problematicPos}:`);
  console.log(content.substring(problematicPos - 100, problematicPos + 100));
  
  return false;
}

const dataDir = path.join(__dirname, '..', 'data', 'aowei');

// Try manual inspection first
manualFix(path.join(dataDir, 'support.json'));
