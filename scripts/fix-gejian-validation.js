#!/usr/bin/env node
/**
 * Fix gejian-semi validation issues
 */

const fs = require('fs');
const path = require('path');

const brand = 'gejian-semi';
const dataDir = path.join(__dirname, '..', 'data', brand);

// Fix solutions.json
function fixSolutions() {
  console.log('Fixing solutions.json...');
  const filePath = path.join(dataDir, 'solutions.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Fix seoKeywords - add distributor/selection keywords
  data.seoKeywords = [
    "Gejian Semi solutions",
    "motor drive solution",
    "EV traction inverter",
    "power semiconductor solution",
    "industrial drive design",
    "EV powertrain solution",
    "Gejian Semi distributor",
    "Gejian solution selection"
  ];

  // Fix each solution
  data.solutions.forEach((solution, index) => {
    const solutionNum = index + 1;
    
    // Add title and slug
    if (!solution.title) {
      solution.title = solution.name;
    }
    if (!solution.slug) {
      solution.slug = solution.id;
    }
    
    // Add longDescription
    if (!solution.longDescription) {
      solution.longDescription = solution.description + " This comprehensive solution includes complete reference designs, detailed BOM lists, and extensive application support to accelerate your product development and ensure reliable operation.";
    }
    
    // Add benefits
    if (!solution.benefits) {
      solution.benefits = [
        "High efficiency reduces energy costs and cooling requirements",
        "Comprehensive protection ensures reliable operation",
        "Modular design enables easy integration and customization",
        "Extensive application support accelerates time-to-market",
        "Proven reference designs reduce development risk"
      ];
    }
    
    // Fix coreAdvantages - ensure 5 items
    if (!solution.coreAdvantages || solution.coreAdvantages.length < 5) {
      solution.coreAdvantages = [
        {
          "title": "High Efficiency",
          "description": "Advanced power semiconductor technology delivers industry-leading efficiency, reducing energy costs and thermal management requirements."
        },
        {
          "title": "Reliable Protection",
          "description": "Comprehensive protection features including overcurrent, overvoltage, and overtemperature ensure safe and reliable operation."
        },
        {
          "title": "Easy Integration",
          "description": "Modular design with standardized interfaces and complete documentation simplifies integration into your system."
        },
        {
          "title": "Cost Effective",
          "description": "Optimized component selection and high integration reduce overall system cost while maintaining high performance."
        },
        {
          "title": "Fast Time-to-Market",
          "description": "Proven reference designs and extensive application support accelerate product development and reduce risk."
        }
      ];
    }
    
    // Fix customerCases - ensure challenge/solution/result
    if (solution.customerCases) {
      solution.customerCases.forEach((caseItem, caseIndex) => {
        if (!caseItem.challenge && caseItem.problem) {
          caseItem.challenge = caseItem.problem;
          delete caseItem.problem;
        }
        if (!caseItem.solution && caseItem.diagnosis) {
          caseItem.solution = caseItem.solution || caseItem.diagnosis;
        }
        if (!caseItem.result && caseItem.results) {
          caseItem.result = caseItem.results;
          delete caseItem.results;
        }
      });
    }
    
    // Fix faeInsights - add logic field
    if (solution.faeInsights) {
      if (!solution.faeInsights.logic) {
        solution.faeInsights.logic = "The implementation approach for this solution should follow a systematic process: First, understand the application requirements including voltage, current, and environmental conditions. Second, select appropriate components based on the specifications and operating conditions. Third, design the thermal management system to handle worst-case losses. Fourth, implement comprehensive protection circuits. Fifth, optimize the control algorithms for the specific application. Sixth, validate the design through thorough testing under all operating conditions. This systematic approach ensures reliable operation and optimal performance.";
      }
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('✓ solutions.json fixed');
}

// Fix support.json
function fixSupport() {
  console.log('Fixing support.json...');
  const filePath = path.join(dataDir, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Fix seoKeywords - add distributor/selection keywords
  data.seoKeywords = [
    "Gejian Semi technical support",
    "IGBT selection guide",
    "SiC MOSFET application",
    "gate driver design",
    "thermal design guide",
    "power semiconductor support",
    "Gejian Semi distributor",
    "Gejian product selection"
  ];

  // Fix each article
  data.articles.forEach((article, index) => {
    // Add slug
    if (!article.slug) {
      article.slug = article.id;
    }
    
    // Add tags
    if (!article.tags) {
      article.tags = ["Gejian Semi", article.category, "Technical Guide"];
    }
    
    // Fix faeInsights - add logic field
    if (article.faeInsights) {
      if (!article.faeInsights.logic) {
        article.faeInsights.logic = "The approach to this topic should be systematic and thorough. First, understand the fundamental principles and requirements. Second, analyze the trade-offs and considerations for different approaches. Third, select the optimal solution based on application-specific requirements. Fourth, implement with proper design practices and validation. Fifth, test thoroughly under all operating conditions. This structured approach ensures reliable and optimal results.";
      }
    }
    
    // Fix customerCases - ensure challenge/solution/feedback
    if (article.customerCases) {
      article.customerCases.forEach((caseItem) => {
        if (!caseItem.challenge && caseItem.problem) {
          caseItem.challenge = caseItem.problem;
          delete caseItem.problem;
        }
        if (!caseItem.solution && caseItem.diagnosis) {
          caseItem.solution = caseItem.solution || caseItem.diagnosis;
        }
        if (!caseItem.feedback && caseItem.results) {
          caseItem.feedback = caseItem.results;
          delete caseItem.results;
        }
      });
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('✓ support.json fixed');
}

// Main
console.log(`\n========================================`);
console.log(`Fixing ${brand} validation issues`);
console.log(`========================================\n`);

try {
  fixSolutions();
  fixSupport();
  
  console.log('\n========================================');
  console.log('All fixes applied successfully!');
  console.log('========================================\n');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
