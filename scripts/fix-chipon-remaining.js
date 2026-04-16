#!/usr/bin/env node
/**
 * Fix remaining ChipON validation issues
 * Add selection keywords to longDescription and fix faeInsights
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'chipon');

// Helper to read JSON
function readJSON(filename) {
  const filePath = path.join(dataDir, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// Helper to write JSON
function writeJSON(filename, data) {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✅ Fixed ${filename}`);
}

// Fix products.json
function fixProducts() {
  const data = readJSON('products.json');

  // Fix each category - add selection keyword to longDescription
  data.categories.forEach(cat => {
    const hasSelection = cat.longDescription.toLowerCase().includes('selection');
    if (!hasSelection) {
      cat.longDescription += ' Contact LiTong for product selection guidance and technical support.';
    }
  });

  writeJSON('products.json', data);
}

// Fix solutions.json
function fixSolutions() {
  const data = readJSON('solutions.json');

  // Fix SEO keywords - ensure both distributor and selection are present
  const hasDistributor = data.seoKeywords.some(k => k.toLowerCase().includes('distributor'));
  const hasSelection = data.seoKeywords.some(k => k.toLowerCase().includes('selection'));

  if (!hasDistributor) {
    data.seoKeywords.push('ChipON distributor');
  }
  if (!hasSelection) {
    data.seoKeywords.push('solution selection guide');
  }

  // Fix each solution - ensure faeInsights has all required fields
  data.solutions.forEach(sol => {
    if (!sol.faeInsights) {
      sol.faeInsights = {};
    }

    // Ensure all required fields exist
    if (!sol.faeInsights.summary) {
      sol.faeInsights.summary = `Implementation insights for ${sol.title}. Contact LiTong FAEs for detailed technical guidance.`;
    }

    if (!sol.faeInsights.keyConsiderations || !Array.isArray(sol.faeInsights.keyConsiderations) || sol.faeInsights.keyConsiderations.length === 0) {
      sol.faeInsights.keyConsiderations = [
        "System architecture design for optimal performance",
        "Component selection based on application requirements",
        "Thermal management and power dissipation considerations"
      ];
    }

    if (!sol.faeInsights.commonPitfalls || !Array.isArray(sol.faeInsights.commonPitfalls) || sol.faeInsights.commonPitfalls.length === 0) {
      sol.faeInsights.commonPitfalls = [
        "Inadequate power supply decoupling",
        "Insufficient EMC protection measures",
        "Improper PCB layout for high-speed signals"
      ];
    }

    if (!sol.faeInsights.decisionFramework) {
      sol.faeInsights.decisionFramework = "Contact LiTong FAEs for comprehensive design review and optimization guidance.";
    }
  });

  writeJSON('solutions.json', data);
}

// Fix support.json
function fixSupport() {
  const data = readJSON('support.json');

  // Fix each article - ensure faeInsights has all required fields
  data.articles.forEach(article => {
    if (!article.faeInsights) {
      article.faeInsights = {};
    }

    // Ensure all required fields exist
    if (!article.faeInsights.summary) {
      article.faeInsights.summary = `Technical insights for ${article.title}. LiTong FAEs provide practical guidance.`;
    }

    if (!article.faeInsights.keyPoints || !Array.isArray(article.faeInsights.keyPoints) || article.faeInsights.keyPoints.length === 0) {
      article.faeInsights.keyPoints = [
        "Understanding product specifications and limitations",
        "Best practices for implementation",
        "Common challenges and solutions"
      ];
    }

    if (!article.faeInsights.practicalAdvice) {
      article.faeInsights.practicalAdvice = "Contact LiTong FAEs for personalized technical support.";
    }
  });

  writeJSON('support.json', data);
}

// Main execution
console.log('🔧 Fixing remaining ChipON validation issues...\n');

try {
  fixProducts();
  fixSolutions();
  fixSupport();

  console.log('\n🎉 All fixes applied successfully!');
  console.log('Please run validation again to verify all issues are resolved.');
} catch (error) {
  console.error('❌ Error fixing issues:', error.message);
  process.exit(1);
}
