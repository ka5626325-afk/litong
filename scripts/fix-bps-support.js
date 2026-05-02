#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'bps');

// Fix support.json - faeInsights author
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

const authorMap = {
  'led-driver-selection-guide': {
    name: 'Michael Chen',
    title: 'Senior FAE - Lighting Applications',
    experience: '12 years',
    expertise: ['LED driver design', 'Lighting systems', 'Power electronics']
  },
  'led-driver-layout-guidelines': {
    name: 'David Wang',
    title: 'Principal FAE - Power Electronics',
    experience: '15 years',
    expertise: ['PCB layout', 'EMC design', 'Power supply design']
  },
  'dimming-application-note': {
    name: 'Sarah Liu',
    title: 'Principal FAE - Smart Lighting',
    experience: '10 years',
    expertise: ['Dimming control', 'Smart lighting', 'Control protocols']
  },
  'thermal-design-guide': {
    name: 'Robert Zhang',
    title: 'Senior FAE - Thermal Management',
    experience: '14 years',
    expertise: ['Thermal design', 'Reliability engineering', 'Power electronics']
  }
};

support.articles.forEach(article => {
  if (article.faeInsights && !article.faeInsights.author) {
    article.faeInsights.author = authorMap[article.slug] || {
      name: 'Michael Chen',
      title: 'Senior FAE - Lighting Applications',
      experience: '12 years',
      expertise: ['LED driver design', 'Lighting systems', 'Power electronics']
    };
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('✓ Fixed support.json faeInsights author');

console.log('\n✅ BPS support articles fixed!');
