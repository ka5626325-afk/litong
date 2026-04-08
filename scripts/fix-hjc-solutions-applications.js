#!/usr/bin/env node

/**
 * 修复 HJC solutions.json - 添加 applications 字段
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hjc');
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// 为每个解决方案添加 applications 字段
solutionsData.solutions.forEach(solution => {
  if (!solution.applications) {
    if (solution.id === 'automotive-electronics-solutions') {
      solution.applications = [
        'EV Powertrain Systems',
        'ADAS Camera Modules',
        'Battery Management Systems',
        'On-board Chargers',
        'LED Headlamps',
        'Infotainment Systems',
        'Engine Control Units',
        'Transmission Control'
      ];
    } else if (solution.id === 'industrial-automation-solutions') {
      solution.applications = [
        'Motor Drive Systems',
        'Variable Frequency Drives',
        'PLC Control Systems',
        'Industrial Power Supplies',
        'Servo Motor Controllers',
        'HMI Panels',
        'Sensor Systems',
        'Communication Modules'
      ];
    }
    console.log(`Added applications to: ${solution.title}`);
  }
});

// 保存文件
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2), 'utf8');
console.log('\n✅ solutions.json applications 字段已添加');
