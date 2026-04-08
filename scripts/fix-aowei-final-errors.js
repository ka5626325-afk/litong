// Fix final validation errors for Aowei brand data
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'aowei');

// Read solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
let solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

console.log('Fixing final Aowei validation errors...\n');

// Fix 1: solutions.json seoKeywords
console.log('Fixing solutions.json seoKeywords...');
const hasDistributor = solutionsData.seoKeywords.some(k => 
  k.toLowerCase().includes('distributor') || k.toLowerCase().includes('代理')
);
const hasSelection = solutionsData.seoKeywords.some(k => 
  k.toLowerCase().includes('selection') || k.toLowerCase().includes('选型')
);

if (!hasDistributor) {
  solutionsData.seoKeywords.push('Aowei solutions distributor');
  console.log('  - Added distributor keyword');
}

if (!hasSelection) {
  solutionsData.seoKeywords.push('supercapacitor system selection');
  console.log('  - Added selection keyword');
}

// Fix 2: Fix faeInsights for Industrial Energy Storage Solutions
console.log('\nFixing faeInsights for Industrial Energy Storage Solutions...');

const industrialSolution = solutionsData.solutions.find(s => 
  s.id === 'industrial-energy-storage'
);

if (industrialSolution) {
  // Ensure faeInsights has all required fields
  industrialSolution.faeInsights = {
    "keyConsiderations": industrialSolution.faeInsights?.keyConsiderations || 
      "Industrial applications often require coordination with existing control systems. Ensure proper isolation and compatibility with PLC I/O levels. Consider electromagnetic compatibility (EMC) requirements and implement appropriate filtering.",
    "commonPitfalls": industrialSolution.faeInsights?.commonPitfalls || 
      "Inadequate pre-charge circuits can cause nuisance tripping of upstream breakers. Always implement soft-start for high-capacitance banks. Undersizing thermal management for continuous duty applications is another common issue.",
    "bestPractices": industrialSolution.faeInsights?.bestPractices || 
      "Monitor supercapacitor health through regular capacitance and ESR measurements. Implement predictive maintenance alerts based on degradation trends. Use industrial-grade connectors and enclosures for harsh environments.",
    "designTips": industrialSolution.faeInsights?.designTips || 
      "Size for the worst-case power interruption duration plus margin. Consider paralleling modules for redundancy in critical applications. Place modules in accessible locations for maintenance while ensuring adequate cooling airflow."
  };
  console.log('  - Fixed faeInsights structure with all required fields');
}

// Save fixed file
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));

console.log('\n✅ Final validation errors fixed!');
console.log('\nFixed:');
console.log('- solutions.json seoKeywords (added distributor/selection)');
console.log('- Industrial solution faeInsights (completed all fields)');
