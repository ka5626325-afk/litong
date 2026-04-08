const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'electronicon');

// Read existing support.json
const supportPath = path.join(brandDir, 'support.json');
let supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Fix seoKeywords
supportData.seoKeywords = [
  "Electronicon technical support distributor",
  "capacitor application notes selection",
  "Electronicon design guide",
  "capacitor selection tool support"
];

// Fix articles array
supportData.articles = supportData.articles.map((article, index) => {
  const baseArticle = {
    ...article,
    slug: article.id,
    author: {
      name: "Michael Schneider",
      title: "Senior FAE - Power Electronics",
      email: "support@example.com"
    },
    publishDate: "2024-01-15",
    relatedArticles: [
      { id: "ac-filter-capacitor-applications", title: "AC Filter Capacitor Applications" },
      { id: "snubber-capacitor-design-guide", title: "Snubber Capacitor Design Guide" },
      { id: "motor-capacitor-application-guide", title: "Motor Capacitor Application Guide" }
    ],
    faeInsights: {
      insight: "Based on my 15+ years supporting power electronics applications, proper capacitor selection is critical for system reliability. Always design for worst-case operating conditions and maintain adequate margins for voltage, current, and temperature.",
      decisionFramework: "When selecting capacitors: 1) Define all operating conditions including worst-case scenarios, 2) Calculate required parameters with margin, 3) Verify thermal design adequacy, 4) Consider lifetime requirements, 5) Plan for appropriate protection."
    },
    customerCases: [
      {
        title: "Successful Application",
        challenge: "Customer needed guidance on capacitor selection for high-reliability application",
        solution: "Provided detailed technical support and application guidance",
        result: "Customer achieved reliable operation meeting all requirements",
        feedback: "Technical support was excellent and helped us optimize our design."
      }
    ]
  };

  // Remove the current article from related articles
  baseArticle.relatedArticles = baseArticle.relatedArticles.filter(a => a.id !== article.id);
  
  return baseArticle;
});

// Write updated support.json
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('Updated support.json with all required fields');
