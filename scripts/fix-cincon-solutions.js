const fs = require('fs');
const path = require('path');

function readJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const cinconDir = path.join(__dirname, '..', 'data', 'cincon');

// Fix solutions.json - add applications field to solutions
const solutionsPath = path.join(cinconDir, 'solutions.json');
const solutionsData = readJSON(solutionsPath);

solutionsData.solutions.forEach(sol => {
  // Add applications if missing
  if (!sol.applications) {
    if (sol.id === 'industrial-automation-power') {
      sol.applications = [
        'Factory automation systems',
        'Process control equipment',
        'Industrial I/O modules',
        'PLC and HMI systems',
        'Motor drives and controls',
        'Building automation',
        'Test and measurement equipment',
        'Robotics and motion control'
      ];
    } else if (sol.id === 'medical-device-power') {
      sol.applications = [
        'Patient monitoring systems',
        'Diagnostic equipment',
        'Therapeutic devices',
        'Infusion pumps',
        'Pulse oximeters',
        'Blood pressure monitors',
        'Home healthcare devices',
        'Portable medical instruments'
      ];
    } else {
      sol.applications = [
        'Industrial equipment',
        'Commercial systems',
        'Power supplies',
        'Control systems'
      ];
    }
  }
});

writeJSON(solutionsPath, solutionsData);
console.log('Fixed solutions.json - added applications to solutions');
