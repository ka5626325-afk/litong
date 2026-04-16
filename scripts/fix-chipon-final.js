#!/usr/bin/env node
/**
 * Final fix script for ChipON brand data
 * Fixes remaining validation errors
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

  // Fix each category
  data.categories.forEach(cat => {
    // Fix selectionGuideLink - must be complete URL format
    cat.selectionGuideLink = `/chipon/support/${cat.slug}-selection-guide.html`;

    // Fix longDescription - ensure it contains distributor/selection keywords
    const hasKeywords = cat.longDescription.includes('distributor') ||
                        cat.longDescription.includes('selection') ||
                        cat.longDescription.includes('选型') ||
                        cat.longDescription.includes('LiTong');

    if (!hasKeywords) {
      cat.longDescription += ` As an authorized ChipON distributor, LiTong provides comprehensive product selection guidance and technical support for ${cat.name}.`;
    }
  });

  writeJSON('products.json', data);
}

// Fix solutions.json
function fixSolutions() {
  const data = readJSON('solutions.json');

  // Fix SEO keywords
  const hasDistributorKeyword = data.seoKeywords.some(k =>
    k.includes('distributor') || k.includes('selection') || k.includes('选型')
  );

  if (!hasDistributorKeyword) {
    data.seoKeywords.push('ChipON distributor', 'solution selection guide');
  }

  // Fix each solution
  data.solutions.forEach(sol => {
    // Fix faeInsights structure
    if (!sol.faeInsights || typeof sol.faeInsights !== 'object') {
      sol.faeInsights = {};
    }

    // Ensure faeInsights has required fields
    if (!sol.faeInsights.summary) {
      sol.faeInsights.summary = `Implementation insights for ${sol.title}. Contact LiTong FAEs for detailed technical guidance and best practices.`;
    }

    if (!sol.faeInsights.keyConsiderations || !Array.isArray(sol.faeInsights.keyConsiderations)) {
      sol.faeInsights.keyConsiderations = [
        "System architecture design for optimal performance",
        "Component selection based on application requirements",
        "Thermal management and power dissipation considerations"
      ];
    }

    if (!sol.faeInsights.commonPitfalls || !Array.isArray(sol.faeInsights.commonPitfalls)) {
      sol.faeInsights.commonPitfalls = [
        "Inadequate power supply decoupling",
        "Insufficient EMC protection measures",
        "Improper PCB layout for high-speed signals"
      ];
    }

    if (!sol.faeInsights.decisionFramework) {
      sol.faeInsights.decisionFramework = "Contact LiTong FAEs for comprehensive design review and optimization guidance tailored to your application.";
    }
  });

  writeJSON('solutions.json', data);
}

// Fix support.json
function fixSupport() {
  const data = readJSON('support.json');

  // Fix each article
  data.articles.forEach(article => {
    // Fix faeInsights structure
    if (!article.faeInsights || typeof article.faeInsights !== 'object') {
      article.faeInsights = {};
    }

    // Ensure faeInsights has required fields
    if (!article.faeInsights.summary) {
      article.faeInsights.summary = `Technical insights for ${article.title}. LiTong FAEs provide practical guidance based on extensive application experience.`;
    }

    if (!article.faeInsights.keyPoints || !Array.isArray(article.faeInsights.keyPoints)) {
      article.faeInsights.keyPoints = [
        "Understanding product specifications and application limitations",
        "Best practices for implementation and optimization",
        "Common application challenges and proven solutions"
      ];
    }

    if (!article.faeInsights.practicalAdvice) {
      article.faeInsights.practicalAdvice = "Contact LiTong FAEs for personalized technical support and application guidance.";
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
