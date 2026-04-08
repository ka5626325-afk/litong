const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'electronicon');

// Fix solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutions.solutions.forEach(solution => {
  // Convert coreAdvantages from string array to object array
  if (solution.coreAdvantages && Array.isArray(solution.coreAdvantages)) {
    const advantageTexts = solution.coreAdvantages;
    solution.coreAdvantages = advantageTexts.map((text, index) => {
      // Extract a title from the text (first part before any dash or comma)
      let title = text;
      let description = '';
      
      if (text.includes(' - ')) {
        const parts = text.split(' - ');
        title = parts[0].trim();
        description = parts.slice(1).join(' - ').trim();
      } else if (text.includes(' for ')) {
        const idx = text.indexOf(' for ');
        title = text.substring(0, idx).trim();
        description = text.substring(idx + 5).trim();
      } else if (text.includes(' ensure')) {
        const idx = text.indexOf(' ensure');
        title = text.substring(0, idx).trim();
        description = 'Ensure' + text.substring(idx + 7).trim();
      } else if (text.includes(' contribute')) {
        const idx = text.indexOf(' contribute');
        title = text.substring(0, idx).trim();
        description = 'Contribute' + text.substring(idx + 11).trim();
      } else {
        // If no clear separator, use first sentence as title, rest as description
        const sentences = text.split(/[.!?]+/);
        if (sentences.length > 1) {
          title = sentences[0].trim();
          description = sentences.slice(1).join('. ').trim();
        } else {
          title = text;
          description = '';
        }
      }
      
      return {
        title: title,
        description: description || title
      };
    });
    console.log(`✅ Fixed coreAdvantages for solution: ${solution.title}`);
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✅ Updated solutions.json\n');
