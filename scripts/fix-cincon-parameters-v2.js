const fs = require('fs');
const path = require('path');

function readJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const cinconDir = path.join(__dirname, '..', 'data', 'cincon');

// Fix products.json - parameters should be a string array, not object array
const productsPath = path.join(cinconDir, 'products.json');
const productsData = readJSON(productsPath);

// Parameters should be simple strings that the generator can process
const parametersList = [
  "Output Power",
  "Input Voltage", 
  "Output Voltage",
  "Isolation Voltage",
  "Package Type",
  "Efficiency",
  "Operating Temperature"
];

productsData.categories.forEach(cat => {
  // Replace object parameters with string array
  cat.parameters = parametersList;
  
  // Also ensure selectionGuideLink is a direct property
  if (!cat.selectionGuideLink && cat.selectionGuide) {
    cat.selectionGuideLink = cat.selectionGuide.link;
  }
});

writeJSON(productsPath, productsData);
console.log('Fixed products.json - parameters are now string array');
