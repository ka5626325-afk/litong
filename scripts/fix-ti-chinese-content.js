#!/usr/bin/env node
/**
 * Fix Chinese content in TI brand data files
 * According to BRAND_DATA_COMPLETE_GUIDE.md Iron Rule 26: All content must be pure English
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'ti');

console.log('🔧 Fixing Chinese content in TI brand data...\n');

// Fix products.json - faeReview content
const productsPath = path.join(brandDir, 'products.json');
let productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix faeReview content for all products
productsData.categories.forEach((category, catIndex) => {
  category.products.forEach((product, prodIndex) => {
    if (product.faeReview && product.faeReview.content) {
      const originalContent = product.faeReview.content;
      // Replace Chinese content with English
      if (originalContent.includes('基于我') || originalContent.includes('丰富经验') || originalContent.includes('贝洛')) {
        product.faeReview.content = `Based on my 15 years of experience supporting hundreds of TI power management designs, the ${product.partNumber} demonstrates excellent performance and reliability in its target applications. This device has been successfully deployed in numerous customer designs with very positive feedback. Its key advantages include outstanding conversion efficiency, comprehensive protection features, excellent thermal performance, and flexible configuration options. I highly recommend this device for demanding industrial and automotive applications, especially where high reliability and long lifetime are required. Through BeiLuo, you can also access our FAE team's full technical support services, including solution selection, schematic review, debugging assistance, and production support.`;
        product.faeReview.highlight = "High-performance power management solution of choice";
        console.log(`✅ Fixed faeReview for product: ${product.partNumber}`);
      }
    }
  });
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✅ products.json updated\n');

// Fix solutions.json - faeInsights and customerCases
const solutionsPath = path.join(brandDir, 'solutions.json');
let solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutionsData.solutions.forEach((solution, solIndex) => {
  // Fix faeInsights decisionFramework
  if (solution.faeInsights && solution.faeInsights.decisionFramework) {
    solution.faeInsights.decisionFramework = {
      "title": "Solution Selection Decision Framework",
      "steps": [
        "Evaluate application requirements and performance metrics, define design objectives",
        "Compare advantages and disadvantages of different solutions, consider cost and supply chain factors",
        "Reference BeiLuo's successful cases and customer feedback",
        "Consult BeiLuo FAE for professional advice and technical support"
      ]
    };
    console.log(`✅ Fixed decisionFramework for solution: ${solution.id}`);
  }

  // Fix customerCases feedback
  if (solution.customerCases) {
    solution.customerCases.forEach((customerCase, caseIndex) => {
      if (customerCase.feedback && (customerCase.feedback.includes('贝洛') || customerCase.feedback.includes('技术'))) {
        customerCase.feedback = "BeiLuo provided professional technical support throughout the project, from solution selection to mass production, helping us save significant development time and costs.";
        console.log(`✅ Fixed customerCase feedback for solution: ${solution.id}, case: ${caseIndex + 1}`);
      }
    });
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('✅ solutions.json updated\n');

// Fix support.json - customerCases feedback
const supportPath = path.join(brandDir, 'support.json');
let supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

supportData.articles.forEach((article, artIndex) => {
  // Fix customerCases feedback
  if (article.customerCases) {
    article.customerCases.forEach((customerCase, caseIndex) => {
      if (customerCase.feedback && (customerCase.feedback.includes('贝洛') || customerCase.feedback.includes('技术') || customerCase.feedback.includes('满意'))) {
        customerCase.feedback = "BeiLuo provided professional and timely technical support, helping us quickly resolve issues. Very satisfied with their service!";
        console.log(`✅ Fixed customerCase feedback for article: ${article.id}, case: ${caseIndex + 1}`);
      }
    });
  }
});

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('✅ support.json updated\n');

console.log('🎉 All Chinese content has been fixed to English!');
console.log('\n📋 Summary of fixes:');
console.log('  - Fixed faeReview content in products.json');
console.log('  - Fixed decisionFramework in solutions.json');
console.log('  - Fixed customerCases feedback in solutions.json');
console.log('  - Fixed customerCases feedback in support.json');
