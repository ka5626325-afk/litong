#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'ti');

console.log('=== Fixing TI Data Files ===\n');

// Read support.json
const supportPath = path.join(brandDir, 'support.json');
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

console.log('Before fix:');
console.log(`Articles: ${supportData.articles ? supportData.articles.length : 0}`);

// Add 5th article
const newArticle = {
  id: "ti-design-tools-guide",
  title: "TI Design Tools and Resources Guide",
  slug: "ti-design-tools-guide",
  category: "Design Resources",
  tags: ["TI tools", "WEBENCH", "PSpice", "design resources", "evaluation modules"],
  summary: "Comprehensive guide to TI's design tools including WEBENCH Power Designer, PSpice models, and evaluation modules for accelerated product development.",
  author: {
    name: "Robert Taylor",
    title: "Senior Applications Engineer",
    bio: "Robert has 18 years of experience with TI products and design tools, helping customers optimize their designs using TI's ecosystem."
  },
  publishDate: "2024-04-01",
  lastUpdated: "2024-04-01",
  readTime: "10 min",
  content: {
    introduction: "TI provides comprehensive design tools to accelerate product development and optimize designs.",
    sections: [
      {
        title: "WEBENCH Power Designer",
        content: "WEBENCH is TI's online power design tool that enables quick power supply design and optimization."
      },
      {
        title: "PSpice Simulation",
        content: "TI provides accurate PSpice models for analog and power products to verify designs before prototyping."
      },
      {
        title: "Evaluation Modules",
        content: "TI's EVMs provide proven reference designs that can be used as starting points for custom designs."
      }
    ],
    conclusion: "Leveraging TI's design tools can significantly reduce development time and improve design reliability."
  },
  faeInsights: {
    painPoints: "Customers often not aware of available design tools and resources",
    commonMistakes: "Designing without simulation, skipping reference design review",
    keyConsiderations: "Tool availability, model accuracy, design optimization",
    recommendations: "Use WEBENCH for power designs, simulate before building"
  },
  customerCases: [
    {
      customer: "Industrial Equipment Manufacturer",
      industry: "Industrial Automation",
      challenge: "Needed to optimize power supply design for new product line",
      solution: "Used WEBENCH to optimize component selection and thermal design",
      feedback: "Reduced design iteration time by 50% and achieved optimal efficiency"
    }
  ],
  faqs: [
    {
      question: "What design tools does TI offer?",
      answer: "TI offers WEBENCH for power design, PSpice for simulation, and various calculation tools for component selection and thermal analysis.",
      decisionGuide: "Start with WEBENCH for power designs and use PSpice for detailed simulation.",
      keywords: ["TI tools", "WEBENCH", "PSpice", "design software"]
    }
  ]
};

if (!supportData.articles) {
  supportData.articles = [];
}

supportData.articles.push(newArticle);

// Save updated support.json
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log(`\nAdded 1 new article`);

console.log('\n=== After Fix ===');
console.log(`Articles: ${supportData.articles.length}`);
console.log('\nFix complete!');
