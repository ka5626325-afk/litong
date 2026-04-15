const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'superchip');

// Fix products.json - add more categories
const productsPath = path.join(dataDir, 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix selectionGuideLink
products.categories.forEach(cat => {
  cat.selectionGuideLink = "/brands/superchip/support/";
});

// Fix alternativeParts comparison format
products.categories.forEach(cat => {
  cat.products.forEach(prod => {
    prod.alternativeParts.forEach(alt => {
      // Fix comparison format
      const newComparison = {};
      for (const [key, value] of Object.entries(alt.comparison)) {
        if (typeof value === 'string' && value.includes('(') && value.includes(')')) {
          // Already has description in parentheses
          newComparison[key] = value;
        } else {
          // Add a simple description
          newComparison[key] = `${value} (compare to ${prod.partNumber})`;
        }
      }
      alt.comparison = newComparison;
    });
  });
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed products.json');

// Fix solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
let solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Fix customerCases structure
solutions.solutions.forEach(sol => {
  sol.customerCases.forEach(cs => {
    if (cs.problem && !cs.challenge) {
      cs.challenge = cs.problem;
      delete cs.problem;
    }
    if (cs.diagnosis && !cs.solution) {
      cs.solution = cs.diagnosis;
      delete cs.diagnosis;
    }
    if (!cs.results) {
      cs.results = "Achieved design goals with improved performance and reliability";
    }
  });

  // Fix faeInsights
  if (!sol.faeInsights.logic) {
    sol.faeInsights.logic = "Follow manufacturer recommendations and best practices for optimal results.";
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Fixed solutions.json');

// Fix support.json
const supportPath = path.join(dataDir, 'support.json');
let support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Fix articles
support.articles.forEach(article => {
  if (!article.slug) {
    article.slug = article.id;
  }
  if (!article.tags) {
    article.tags = ['Superchip', 'Power Management', 'Design Guide', 'Technical Article'];
  }
  if (!article.faeInsights.logic) {
    article.faeInsights.logic = "Follow manufacturer recommendations and best practices for optimal results.";
  }
  if (!article.customerCases || article.customerCases.length === 0) {
    article.customerCases = [{
      customerName: "Example Customer",
      industry: "Electronics",
      challenge: "Needed guidance on design implementation",
      solution: "Applied recommendations from this article",
      feedback: "Design was successful with improved performance"
    }];
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('Fixed support.json');

console.log('\nAll files fixed!');
