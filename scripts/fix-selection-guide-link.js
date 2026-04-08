const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'electronicon');

// Fix products.json
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix selectionGuideLink for all categories - convert to object format
products.categories.forEach(category => {
  if (category.selectionGuide && category.selectionGuide.articleLink) {
    category.selectionGuideLink = {
      url: category.selectionGuide.articleLink,
      text: category.selectionGuide.title || "Selection Guide"
    };
    console.log(`✅ Fixed selectionGuideLink for ${category.name}`);
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Updated products.json\n');
