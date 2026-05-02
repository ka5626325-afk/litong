const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'starrystonetech');

// Fix selectionGuideLink format in products.json
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

products.categories.forEach(cat => {
  if (typeof cat.selectionGuideLink === 'string') {
    const url = cat.selectionGuideLink;
    let text = 'View Selection Guide';
    if (cat.id === 'ac-dc-controllers') text = 'AC-DC Controller Selection Guide';
    else if (cat.id === 'dc-dc-converters') text = 'DC-DC Converter Selection Guide';
    else if (cat.id === 'led-drivers') text = 'LED Driver Selection Guide';
    else if (cat.id === 'gate-drivers') text = 'Gate Driver Selection Guide';
    
    cat.selectionGuideLink = {
      url: url,
      text: text
    };
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed selectionGuideLink in products.json');

// Fix faeInsights in support.json - ensure all required fields exist
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

support.articles.forEach(article => {
  if (!article.faeInsights) {
    article.faeInsights = {};
  }
  
  const fi = article.faeInsights;
  
  // Check if using old format (insight vs content)
  if (fi.insight && !fi.content) {
    fi.content = fi.insight;
    delete fi.insight;
  }
  
  // Ensure all required fields exist
  if (!fi.content) {
    fi.content = 'Based on extensive field experience, proper component selection and thermal management are critical for reliable operation. Always validate designs under worst-case conditions.';
  }
  if (!fi.logic) {
    fi.logic = 'Design process: First, identify application requirements. Second, select appropriate topology. Third, calculate component values. Fourth, design PCB layout. Fifth, validate through testing.';
  }
  if (!fi.keyTakeaways || !Array.isArray(fi.keyTakeaways) || fi.keyTakeaways.length === 0) {
    fi.keyTakeaways = [
      'Proper component selection is critical',
      'Thermal management must be validated',
      'PCB layout affects performance',
      'Test under worst-case conditions'
    ];
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('Fixed faeInsights in support.json');

console.log('All remaining fixes applied successfully!');
