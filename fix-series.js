const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, 'data', 'power-integrations');

// 修复 products.json - 添加 series 字段到每个分类
function fixSeries() {
  const filePath = path.join(brandDir, 'products.json');
  const content = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(content);

  const seriesData = {
    'ac-dc-converters': [
      { name: 'InnoSwitch', description: 'High-efficiency with synchronous rectification' },
      { name: 'LinkSwitch', description: 'Cost-effective low-power solutions' },
      { name: 'TOPSwitch', description: 'Higher power up to 250W' },
      { name: 'Hiper', description: 'High-power LLC resonant' }
    ],
    'led-drivers': [
      { name: 'LYTSwitch', description: 'Excellent dimming performance' },
      { name: 'LinkSwitch-PH', description: 'Single-stage high-PF' },
      { name: 'HiperPLC', description: 'High-power commercial' }
    ],
    'motor-drivers': [
      { name: 'BridgeSwitch', description: 'Integrated BLDC motor drivers' }
    ],
    'gate-drivers': [
      { name: 'SCALE-iDriver', description: 'Isolated gate drivers' }
    ]
  };

  data.categories.forEach(cat => {
    if (!cat.series && seriesData[cat.id]) {
      cat.series = seriesData[cat.id];
      console.log(`Added series to ${cat.id}`);
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('products.json series fixed!');
}

// 修复 solutions.json - 添加 applications 字段到每个解决方案
function fixApplications() {
  const filePath = path.join(brandDir, 'solutions.json');
  const content = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(content);

  const applicationsData = {
    'high-efficiency-adapter': ['Mobile Chargers', 'USB-C PD Adapters', 'Laptop Power', 'Consumer Electronics'],
    'led-commercial-lighting': ['Panel Lights', 'Downlights', 'Street Lighting', 'High-bay Lighting']
  };

  data.solutions.forEach(sol => {
    if (!sol.applications && applicationsData[sol.id]) {
      sol.applications = applicationsData[sol.id];
      console.log(`Added applications to ${sol.id}`);
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('solutions.json applications fixed!');
}

// 运行所有修复
console.log('Starting fixes...\n');
fixSeries();
console.log('');
fixApplications();
console.log('\nAll fixes completed!');
