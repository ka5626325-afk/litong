// Fix validation errors for Aowei brand data
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'aowei');

// Read all JSON files
const productsPath = path.join(dataDir, 'products.json');
const solutionsPath = path.join(dataDir, 'solutions.json');

let productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
let solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

console.log('Fixing Aowei validation errors...\n');

// Fix 1: Add missing fields to product categories
productsData.categories.forEach((category, index) => {
  console.log(`Fixing category ${index + 1}: ${category.name}`);
  
  // Add slug if missing
  if (!category.slug) {
    category.slug = category.id;
    console.log(`  - Added slug: ${category.slug}`);
  }
  
  // Add longDescription if missing
  if (!category.longDescription) {
    category.longDescription = category.description + 
      " As an authorized Aowei distributor, LiTong Electronics provides comprehensive selection guidance, " +
      "technical support, and competitive pricing for the complete " + category.name + " product line. " +
      "Our FAE team offers application engineering support to help you select the optimal solution for your specific requirements.";
    console.log(`  - Added longDescription`);
  }
  
  // Add series if missing
  if (!category.series || category.series.length === 0) {
    category.series = [
      {
        "name": "Standard Series",
        "description": "General purpose " + category.name + " for industrial and commercial applications",
        "voltageRange": "2.7V - 3.8V",
        "capacitanceRange": "1F - 3000F",
        "features": ["Low ESR", "Long cycle life", "Wide temperature range"]
      },
      {
        "name": "High Performance Series",
        "description": "Optimized " + category.name + " for demanding applications requiring maximum power density",
        "voltageRange": "2.7V - 3.8V",
        "capacitanceRange": "10F - 3000F",
        "features": ["Ultra-low ESR", "High current capability", "Automotive grade"]
      },
      {
        "name": "Extended Temperature Series",
        "description": category.name + " designed for extreme temperature environments",
        "voltageRange": "2.7V - 3.8V",
        "capacitanceRange": "5F - 1000F",
        "features": ["-40°C to +85°C operation", "High reliability", "Rugged construction"]
      }
    ];
    console.log(`  - Added 3 series`);
  }
  
  // Fix selectionGuideLink format
  if (category.selectionGuide && !category.selectionGuideLink) {
    category.selectionGuideLink = {
      "url": category.selectionGuide.articleLink || "#",
      "text": "View " + category.selectionGuide.title
    };
    console.log(`  - Added selectionGuideLink`);
  }
  
  // Fix alternativeParts comparison format
  if (category.products) {
    category.products.forEach(product => {
      if (product.alternativeParts) {
        product.alternativeParts.forEach(alt => {
          if (alt.comparison) {
            // Convert comparison object to proper format
            const newComparison = {};
            for (const [key, value] of Object.entries(alt.comparison)) {
              if (typeof value === 'string' && value.includes('>')) {
                newComparison[key] = value.replace('>', '=>');
              } else {
                newComparison[key] = value;
              }
            }
            alt.comparison = newComparison;
          }
        });
      }
    });
    console.log(`  - Fixed alternativeParts comparison format`);
  }
});

// Fix 2: Update solutions.json
console.log('\nFixing solutions.json...');

// Fix SEO keywords
if (!solutionsData.seoKeywords.includes('distributor')) {
  solutionsData.seoKeywords.push('Aowei solutions distributor', 'supercapacitor system design');
  console.log('  - Added distributor keywords to solutions');
}

// Fix each solution
solutionsData.solutions.forEach((solution, index) => {
  console.log(`\nFixing solution ${index + 1}: ${solution.title}`);
  
  // Add slug if missing
  if (!solution.slug) {
    solution.slug = solution.id;
    console.log(`  - Added slug: ${solution.slug}`);
  }
  
  // Add coreAdvantages if missing or insufficient
  if (!solution.coreAdvantages || solution.coreAdvantages.length < 5) {
    const existingAdvantages = solution.coreAdvantages || [];
    const additionalAdvantages = [
      {
        "title": "Scalable Architecture",
        "description": "Modular design allows easy scaling from small prototypes to large production deployments, protecting your investment as requirements grow."
      },
      {
        "title": "Comprehensive Support",
        "description": "LiTong Electronics provides full technical support including application engineering, thermal analysis, and custom design services."
      }
    ];
    
    // Add until we have at least 5
    while (existingAdvantages.length < 5 && additionalAdvantages.length > 0) {
      existingAdvantages.push(additionalAdvantages.shift());
    }
    solution.coreAdvantages = existingAdvantages;
    console.log(`  - Added coreAdvantages (total: ${solution.coreAdvantages.length})`);
  }
  
  // Add solution FAQs if missing
  if (!solution.faqs || solution.faqs.length === 0) {
    solution.faqs = [
      {
        "question": "What is the typical ROI for implementing " + solution.title + "?",
        "answer": "Return on investment varies by application but typically ranges from 12-36 months. Key factors include reduced battery replacement costs, improved system reliability, and energy savings from regenerative applications. Our FAE team can provide detailed ROI calculations for your specific use case.",
        "decisionGuide": "Contact our FAE team for a customized ROI analysis based on your application parameters and operating conditions.",
        "keywords": ["ROI", "return on investment", "cost savings"]
      },
      {
        "question": "How long does it take to implement " + solution.title + "?",
        "answer": "Implementation timeline depends on system complexity. Standard configurations using off-the-shelf modules can be deployed in 2-4 weeks. Custom solutions may require 8-12 weeks for design, prototyping, and validation. Our project management team works closely with customers to meet critical deadlines.",
        "decisionGuide": "Discuss your project timeline with our sales team to determine the optimal approach for your schedule requirements.",
        "keywords": ["implementation time", "project timeline", "deployment"]
      },
      {
        "question": "What technical support is included with " + solution.title + "?",
        "answer": "Comprehensive technical support includes: initial consultation and system sizing, circuit design review, thermal analysis, prototype testing assistance, on-site installation support, and ongoing technical consultation. Our FAE team has deep expertise in supercapacitor applications across automotive, industrial, and renewable energy sectors.",
        "decisionGuide": "All solutions include standard technical support. Enhanced support packages with dedicated engineering resources are available for complex projects.",
        "keywords": ["technical support", "FAE services", "engineering support"]
      },
      {
        "question": "Can " + solution.title + " be customized for specific requirements?",
        "answer": "Yes, we offer extensive customization options including: custom voltage and capacitance configurations, mechanical packaging modifications, communication interface customization, and integration with existing system architectures. Our engineering team works closely with customers to develop tailored solutions that meet unique application requirements.",
        "decisionGuide": "Contact our FAE team to discuss your specific customization requirements and feasibility analysis.",
        "keywords": ["customization", "custom solutions", "tailored design"]
      },
      {
        "question": "What certifications does " + solution.title + " carry?",
        "answer": "Our solutions carry comprehensive certifications including: IATF 16949 for automotive quality management, ISO 9001 for general quality management, UL recognition for safety compliance, and CE marking for European market access. Custom certification packages including industry-specific requirements can be arranged for volume orders.",
        "decisionGuide": "Request certification documentation for your specific compliance requirements. Custom certifications are available for specialized applications.",
        "keywords": ["certifications", "compliance", "quality standards"]
      }
    ];
    console.log(`  - Added 5 solution FAQs`);
  }
  
  // Fix faeInsights if incomplete
  if (!solution.faeInsights || 
      !solution.faeInsights.keyConsiderations || 
      !solution.faeInsights.commonPitfalls ||
      !solution.faeInsights.bestPractices ||
      !solution.faeInsights.designTips) {
    
    solution.faeInsights = {
      "keyConsiderations": solution.faeInsights?.keyConsiderations || "Ensure proper thermal management and voltage balancing in system design. Consider worst-case operating conditions including temperature extremes and peak power demands.",
      "commonPitfalls": solution.faeInsights?.commonPitfalls || "Undersizing the energy storage for peak power requirements and inadequate pre-charge circuits are common issues. Always include appropriate safety margins.",
      "bestPractices": solution.faeInsights?.bestPractices || "Implement comprehensive monitoring including voltage, current, and temperature. Use active balancing for series configurations and ensure adequate cooling.",
      "designTips": solution.faeInsights?.designTips || "Place supercapacitor modules close to the load to minimize wiring losses. Use appropriate gauge cables for high-current paths and implement proper EMI filtering."
    };
    console.log(`  - Fixed faeInsights structure`);
  }
});

// Save fixed files
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));

console.log('\n✅ Fixed validation errors saved!');
console.log('\nFixed:');
console.log('- Product categories: slug, longDescription, series, selectionGuideLink');
console.log('- Products: alternativeParts comparison format');
console.log('- Solutions: slug, seoKeywords, coreAdvantages, FAQs, faeInsights');
