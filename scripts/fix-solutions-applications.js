// Fix solutions.json - add applications field
const fs = require('fs');
const path = require('path');

const solutionsPath = path.join(__dirname, '..', 'data', 'sindachip', 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Add applications field to each solution
solutionsData.solutions.forEach(solution => {
  if (!solution.applications) {
    if (solution.id === 'precision-sensor-interface') {
      solution.applications = [
        "Industrial Weighing Scales",
        "Temperature Measurement Systems",
        "Pressure Sensors",
        "Load Cell Interfaces",
        "Medical Instrumentation",
        "Strain Gauge Amplifiers"
      ];
    } else if (solution.id === 'portable-power-management') {
      solution.applications = [
        "Smartphones and Tablets",
        "Portable Medical Devices",
        "IoT Sensor Nodes",
        "Wearable Electronics",
        "Wireless Communication Devices",
        "Battery-Powered Instruments"
      ];
    }
  }
});

// Write back to file
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('✓ Added applications field to solutions');
