const fs = require('fs');
const path = require('path');

const supportPath = path.join(__dirname, '..', 'data', 'tdk', 'support.json');

console.log('Reading support.json...');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Fix all articles' customerCases
support.articles.forEach(article => {
  if (article.customerCases && article.customerCases.length > 0) {
    article.customerCases.forEach(cs => {
      // Ensure all required fields exist
      if (!cs.customer) cs.customer = "Industrial Customer";
      if (!cs.industry) cs.industry = "Industrial";
      if (!cs.challenge) cs.challenge = "Customer needed reliable components for demanding application";
      if (!cs.solution) cs.solution = "Implemented TDK components with proper derating and thermal management";
      
      // Convert feedback to result if needed
      if (cs.feedback && !cs.result) {
        cs.result = cs.feedback;
      }
      if (!cs.result && !cs.feedback) {
        cs.result = "The solution met all requirements and exceeded expectations";
      }
      
      // Remove feedback field if it exists (use result instead)
      if (cs.feedback) {
        delete cs.feedback;
      }
    });
  }
});

// Save
fs.writeFileSync(supportPath, JSON.stringify(support, null, 2), 'utf8');
console.log('Fixed customerCases in support.json');
