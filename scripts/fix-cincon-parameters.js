const fs = require('fs');
const path = require('path');

function readJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const cinconDir = path.join(__dirname, '..', 'data', 'cincon');

// Fix products.json - add parameters field to categories
const productsPath = path.join(cinconDir, 'products.json');
const productsData = readJSON(productsPath);

const parametersTemplate = [
  {
    "name": "outputPower",
    "label": "Output Power",
    "type": "range",
    "unit": "W",
    "min": 1,
    "max": 60,
    "description": "Maximum output power rating"
  },
  {
    "name": "inputVoltage",
    "label": "Input Voltage",
    "type": "select",
    "options": ["4.5-5.5V", "9-18V", "18-36V", "36-72V", "9-36V", "18-75V", "14.4-154VDC"],
    "description": "Input voltage range"
  },
  {
    "name": "outputVoltage",
    "label": "Output Voltage",
    "type": "select",
    "options": ["3.3V", "5V", "9V", "12V", "15V", "24V", "48V"],
    "description": "Output voltage"
  },
  {
    "name": "isolation",
    "label": "Isolation Voltage",
    "type": "select",
    "options": ["1000VDC", "1500VDC", "3000VDC", "5000VAC", "6000VDC"],
    "description": "Input to output isolation voltage"
  },
  {
    "name": "package",
    "label": "Package Type",
    "type": "select",
    "options": ["SIP7", "SIP8", "DIP8", "DIP16", "DIP24", "SMD", "Encapsulated", "Open Frame"],
    "description": "Physical package type"
  }
];

productsData.categories.forEach(cat => {
  // Add parameters if missing
  if (!cat.parameters) {
    cat.parameters = parametersTemplate;
  }
  
  // Also ensure selectionGuideLink is a direct property
  if (!cat.selectionGuideLink && cat.selectionGuide) {
    cat.selectionGuideLink = cat.selectionGuide.link;
  }
});

writeJSON(productsPath, productsData);
console.log('Fixed products.json - added parameters to categories');
