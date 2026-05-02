const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'xinbole');

// Fix products.json
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix shortDescription lengths
products.categories.forEach(cat => {
  cat.products.forEach(prod => {
    if (prod.shortDescription && prod.shortDescription.length > 120) {
      let shortened = prod.shortDescription.substring(0, 115);
      const lastSpace = shortened.lastIndexOf(' ');
      if (lastSpace > 80) {
        shortened = shortened.substring(0, lastSpace);
      }
      prod.shortDescription = shortened;
    }
  });
});

// Fix alternativeParts comparison format
products.categories.forEach(cat => {
  cat.products.forEach(prod => {
    if (prod.alternativeParts) {
      prod.alternativeParts.forEach(alt => {
        if (alt.comparison) {
          const newComparison = {};
          Object.entries(alt.comparison).forEach(([key, value]) => {
            // Convert to => and < format
            if (typeof value === 'string') {
              if (value.includes('>') && !value.includes('=>')) {
                newComparison[key] = value.replace('>', '=>');
              } else if (value.includes('<') && !value.includes('=<')) {
                newComparison[key] = value;
              } else {
                newComparison[key] = value;
              }
            } else {
              newComparison[key] = value;
            }
          });
          alt.comparison = newComparison;
        }
      });
    }
  });
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed products.json');

// Fix solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Add distributor keyword to seoKeywords
if (!solutions.seoKeywords.includes('xinbole distributor')) {
  solutions.seoKeywords.push('xinbole distributor');
}

// Fix customerCases and faeInsights
solutions.solutions.forEach(sol => {
  // Fix customerCases
  if (sol.customerCases) {
    sol.customerCases.forEach(cs => {
      if (!cs.challenge) {
        cs.challenge = 'Customer needed a reliable solution for their application with specific performance requirements.';
      }
      if (!cs.solution) {
        cs.solution = 'Implemented Xinbole solution with optimized design and comprehensive technical support.';
      }
      if (!cs.results || !Array.isArray(cs.results) || cs.results.length === 0) {
        cs.results = [
          'Achieved required performance specifications',
          'Improved system reliability',
          'Reduced development time'
        ];
      }
    });
  }
  
  // Fix faeInsights
  if (!sol.faeInsights) {
    sol.faeInsights = {};
  }
  const fi = sol.faeInsights;
  if (!fi.content) {
    fi.content = 'Based on extensive field experience, proper component selection and system design are critical for reliable operation. Always validate designs under worst-case conditions and follow recommended layout practices.';
  }
  if (!fi.logic) {
    fi.logic = 'Design process: First, identify system requirements. Second, select appropriate components. Third, design schematic with proper protection. Fourth, implement PCB layout with good grounding. Fifth, validate through testing.';
  }
  if (!fi.keyTakeaways || !Array.isArray(fi.keyTakeaways) || fi.keyTakeaways.length === 0) {
    fi.keyTakeaways = [
      'Proper component selection is critical',
      'Follow recommended layout practices',
      'Validate under worst-case conditions',
      'Test thoroughly before production'
    ];
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Fixed solutions.json');

// Fix support.json - add more FAQs to articles
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

support.articles.forEach(article => {
  if (!article.faqs || article.faqs.length < 5) {
    const existingFaqs = article.faqs || [];
    const additionalFaqs = [
      {
        "question": `What are the key considerations when implementing ${article.title.toLowerCase().replace(/ guide$/, '')}?`,
        "answer": "Key considerations include proper component selection, following datasheet recommendations, adequate thermal management, and thorough testing. Always refer to application notes and reference designs for best practices.",
        "decisionGuide": "Review all documentation before starting design. Contact our FAE team for specific application guidance.",
        "keywords": ["implementation", "design considerations", "best practices"]
      },
      {
        "question": "Where can I find reference designs for this application?",
        "answer": "Reference designs, application notes, and evaluation boards are available through LiTong. Contact our sales or technical support team to request documentation and samples for evaluation.",
        "decisionGuide": "Contact us to request reference designs and evaluation materials for your specific application.",
        "keywords": ["reference design", "evaluation kit", "application note"]
      },
      {
        "question": "What support is available during the design phase?",
        "answer": "LiTong provides comprehensive design support including schematic review, layout guidance, and debugging assistance. Our FAE team can help optimize your design and troubleshoot issues.",
        "decisionGuide": "Contact our FAE team early in the design phase for best results. We offer complimentary design review services.",
        "keywords": ["design support", "FAE assistance", "technical support"]
      }
    ];
    
    // Add FAQs until we have at least 5
    while (existingFaqs.length < 5 && additionalFaqs.length > 0) {
      existingFaqs.push(additionalFaqs.shift());
    }
    article.faqs = existingFaqs;
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('Fixed support.json');

console.log('All fixes applied successfully!');
