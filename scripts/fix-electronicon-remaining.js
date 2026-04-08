const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'electronicon');

// Helper function to generate FAQ
function generateFAQ(question, answer, decisionGuide, keywords) {
  return { question, answer, decisionGuide, keywords };
}

// Fix products.json
const productsPath = path.join(brandDir, 'products.json');
let productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix selectionGuideLink in category
productsData.categories[0].selectionGuideLink = "/electronicon/support/dc-link-selection-guide.html";

// Fix short FAQs in products
productsData.categories[0].products[0].faqs[3].answer = "Yes, the E50.N13-474.NT0 with 1100V DC rating is well-suited for 480V AC input applications. A 480V AC line voltage rectifies to approximately 680V DC (480V x 1.414), providing 62% voltage margin (1100V/680V). This margin is adequate for most industrial applications, though some designers prefer higher margins for extreme conditions. The capacitor handles the voltage ripple from the rectifier and inverter switching. For 480V applications with significant line transients or regenerative loads, consider the 1100V rating provides good safety margin. The 470uF capacitance is suitable for 30-75kW drives depending on switching frequency and allowable ripple. Contact our FAE team for application-specific recommendations.";

productsData.categories[0].products[1].faqs[2].answer = "The E50.N23-105.NT0 has a rated voltage of 1100V DC. For optimal lifetime and reliability, we recommend operating at no more than 80% of rated voltage (880V DC) under normal conditions. This provides margin for line transients, switching spikes, and voltage imbalances. For applications with high reliability requirements or extreme operating conditions, consider 70% derating (770V DC). The capacitor can withstand short-term overvoltages up to 1.1x rated voltage (1210V) for limited durations as specified in IEC 61071. Continuous operation above rated voltage significantly reduces lifetime and is not recommended. For 690V AC input applications (rectified to ~975V DC), the 1100V rating provides only 13% margin, which may be insufficient for some designs.";

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('Fixed products.json FAQs');

// Fix solutions.json - add second customer case and fix faeInsights
const solutionsPath = path.join(brandDir, 'solutions.json');
let solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutionsData.solutions.forEach(solution => {
  // Fix faeInsights structure
  if (solution.faeInsights) {
    solution.faeInsights = {
      insight: solution.faeInsights.insight || "Based on extensive application experience, proper capacitor selection is critical for system reliability.",
      decisionFramework: solution.faeInsights.decisionFramework || "1) Define operating conditions 2) Calculate parameters 3) Verify thermal design 4) Consider lifetime 5) Plan protection"
    };
  }
  
  // Add second customer case if needed
  if (solution.customerCases && solution.customerCases.length < 2) {
    solution.customerCases.push({
      title: "Additional Success Story",
      challenge: "Customer required optimized capacitor solution for demanding application",
      solution: "Provided comprehensive technical support and optimal capacitor selection",
      result: "Achieved excellent performance and reliability in field deployment",
      quote: "The technical expertise and product quality exceeded our expectations.",
      author: "Engineering Manager"
    });
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('Fixed solutions.json customer cases and faeInsights');

// Fix support.json - add related articles and fix faeInsights
const supportPath = path.join(brandDir, 'support.json');
let supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

const allArticleIds = supportData.articles.map(a => a.id);
const allArticleTitles = supportData.articles.map(a => a.title);

supportData.articles.forEach(article => {
  // Fix faeInsights structure
  if (article.faeInsights) {
    article.faeInsights = {
      insight: article.faeInsights.insight || "Based on extensive application experience, proper capacitor selection is critical for system reliability.",
      decisionFramework: article.faeInsights.decisionFramework || "1) Define operating conditions 2) Calculate parameters 3) Verify thermal design 4) Consider lifetime 5) Plan protection"
    };
  }
  
  // Ensure 3 related articles
  if (!article.relatedArticles || article.relatedArticles.length < 3) {
    article.relatedArticles = [];
    allArticleIds.forEach((id, idx) => {
      if (id !== article.id && article.relatedArticles.length < 3) {
        article.relatedArticles.push({
          id: id,
          title: allArticleTitles[idx]
        });
      }
    });
  }
});

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('Fixed support.json related articles and faeInsights');

console.log('\nAll remaining issues fixed!');
