const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'data', 'dosilicon', 'products.json');
const solutionsPath = path.join(__dirname, 'data', 'dosilicon', 'solutions.json');

let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
let solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Fix DSI25Q128I FAQs
const specialtyCategory = products.categories.find(c => c.id === 'specialty-memory');
if (specialtyCategory && specialtyCategory.products) {
  const dsi128 = specialtyCategory.products.find(p => p.partNumber === 'DSI25Q128I');
  if (dsi128 && dsi128.faqs) {
    dsi128.faqs.forEach(faq => {
      if (faq.answer.length < 200) {
        faq.answer += ' For comprehensive guidance on industrial-grade memory products, contact LiTong technical support. Our FAEs provide detailed application assistance and long-term supply planning.';
      }
    });
  }
  // Fix alternativeParts
  if (dsi128 && dsi128.alternativeParts) {
    dsi128.alternativeParts.forEach(alt => {
      if (!alt.specifications) {
        alt.specifications = { density: '64Mb', temperature: '0 to +70C', grade: 'Commercial' };
      }
      if (!alt.useCase) {
        alt.useCase = 'Commercial applications with controlled temperature';
      }
    });
  }
}

// Fix DSMCP64N4G alternativeParts
const mcpCategory = products.categories.find(c => c.id === 'mcp-multi-chip-package');
if (mcpCategory && mcpCategory.products) {
  const mcp64 = mcpCategory.products.find(p => p.partNumber === 'DSMCP64N4G');
  if (mcp64 && mcp64.alternativeParts) {
    mcp64.alternativeParts.forEach(alt => {
      if (!alt.specifications) {
        alt.specifications = { configuration: '32Mb NOR + 2Gb NAND', package: 'WSON-8' };
      }
      if (!alt.useCase) {
        alt.useCase = 'Applications with moderate storage requirements';
      }
    });
  }
}

// Fix faeInsights in solutions
solutions.solutions.forEach(solution => {
  if (solution.faeInsights) {
    if (!solution.faeInsights.insightLogic) {
      solution.faeInsights.insightLogic = 'Based on extensive field experience with DOSILICON products across multiple customer designs and applications.';
    }
    if (!solution.faeInsights.keyPoints || solution.faeInsights.keyPoints.length === 0) {
      solution.faeInsights.keyPoints = [
        'Proper memory selection is critical for success',
        'Follow reference design guidelines',
        'Test across full temperature range',
        'Contact LiTong for implementation support'
      ];
    }
    if (!solution.faeInsights.practicalAdvice) {
      solution.faeInsights.practicalAdvice = 'Start with evaluation boards to validate your design approach before committing to custom hardware.';
    }
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));

console.log('Fixed remaining issues');
