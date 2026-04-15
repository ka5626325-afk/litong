const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'silicontent');

// List of files to update
const files = ['products.json', 'solutions.json', 'support.json', 'news.json'];

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all occurrences of xinzhou with silicontent
    // Use regex with 'g' flag for global replacement
    content = content.replace(/xinzhou/g, 'silicontent');
    content = content.replace(/Xinzhou/g, 'Silicontent');
    content = content.replace(/XINZHOU/g, 'SILICONTENT');
    
    // Update SEO keywords and titles
    content = content.replace(/Xinzhou Technology/g, 'Silicontent');
    content = content.replace(/Xinzhou power/g, 'Silicontent power');
    content = content.replace(/Xinzhou distributor/g, 'Silicontent distributor');
    content = content.replace(/Xinzhou selection/g, 'Silicontent selection');
    
    // Update image paths
    content = content.replace(/\/assets\/brands\/xinzhou\//g, '/assets/brands/silicontent/');
    
    // Update links
    content = content.replace(/\/brands\/xinzhou\//g, '/brands/silicontent/');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log('\nAll files updated successfully!');
