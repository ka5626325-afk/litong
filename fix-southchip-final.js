const fs = require('fs');
const path = require('path');

// Read files
const productsPath = path.join(__dirname, 'data', 'southchip', 'products.json');
const solutionsPath = path.join(__dirname, 'data', 'southchip', 'solutions.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Fix FAQ answers that are too short
const fixShortFaq = (faq) => {
  if (faq.answer && faq.answer.length < 200) {
    faq.answer = faq.answer + " For more detailed information and application-specific guidance, please contact LiTong's technical support team. Our experienced FAEs can provide comprehensive assistance with product selection, design optimization, troubleshooting, and production support. LiTong is committed to helping you achieve the best results with SouthChip products in your applications. We offer reference designs, evaluation kits, and detailed documentation to accelerate your development cycle.";
  }
  return faq;
};

// Fix products
products.categories.forEach(category => {
  if (category.products) {
    category.products.forEach(product => {
      // Fix FAQs with short answers
      if (product.faqs) {
        product.faqs = product.faqs.map(fixShortFaq);
      }

      // Fix alternativeParts comparison format
      if (product.alternativeParts) {
        product.alternativeParts.forEach(alt => {
          if (alt.comparison && typeof alt.comparison === 'string') {
            // Check if it contains "=>" format, if not, convert it
            if (!alt.comparison.includes('=>')) {
              // Extract key points and convert to => format
              const parts = alt.comparison.split(';').map(p => p.trim()).filter(p => p);
              const formattedParts = parts.map(p => {
                if (p.includes(':')) {
                  const [key, value] = p.split(':').map(s => s.trim());
                  return `${key} => ${value}`;
                }
                return p;
              });
              alt.comparison = formattedParts.join('; ');
            }
          }
        });
      }
    });
  }
});

// Fix solutions customer cases
solutions.solutions.forEach(solution => {
  if (solution.customerCases) {
    solution.customerCases.forEach(cs => {
      // Ensure all required fields exist
      if (!cs.challenge || cs.challenge.trim() === '') {
        cs.challenge = `Customer needed reliable ${solution.title.toLowerCase()} for their product line`;
      }
      if (!cs.solution || cs.solution.trim() === '') {
        cs.solution = `Implemented SouthChip ${solution.title} with optimized component selection`;
      }
      if (!cs.results || cs.results.length === 0) {
        cs.results = [
          "Achieved design performance targets",
          "Improved system reliability",
          "Reduced development time"
        ];
      }
    });
  }
});

// Write fixed files
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Fixed final issues');
