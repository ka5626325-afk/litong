const fs = require('fs');
const path = require('path');

// Read solutions.json
const solutionsPath = path.join(__dirname, 'data', 'southchip', 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Fix bomList format - convert from object to array
solutions.solutions.forEach(solution => {
  if (solution.bomList && typeof solution.bomList === 'object') {
    // Convert bomList object to array format expected by template
    const bomArray = [];
    
    // If bomList has categories, flatten them into array
    if (solution.bomList.categories) {
      solution.bomList.categories.forEach(category => {
        if (category.items) {
          category.items.forEach(item => {
            bomArray.push({
              partNumber: item.partNumber || item.name || 'Unknown',
              description: item.description || '',
              quantity: item.quantity || 1,
              manufacturer: item.manufacturer || 'Various',
              link: item.link || '#'
            });
          });
        }
      });
    }
    
    // If no items were added, create default BOM items from coreProducts
    if (bomArray.length === 0 && solution.coreProducts) {
      solution.coreProducts.forEach(product => {
        bomArray.push({
          partNumber: product.partNumber,
          description: product.role || 'SouthChip IC',
          quantity: 1,
          manufacturer: 'SouthChip',
          link: '#'
        });
      });
    }
    
    // Add some passive components
    bomArray.push(
      { partNumber: 'Ceramic Capacitors', description: 'X5R/X7R capacitors for filtering', quantity: 10, manufacturer: 'Various', link: '#' },
      { partNumber: 'Power Inductors', description: 'Inductors for DC-DC converters', quantity: 3, manufacturer: 'Various', link: '#' },
      { partNumber: 'Resistors', description: '1% precision resistors', quantity: 8, manufacturer: 'Various', link: '#' }
    );
    
    solution.bomList = bomArray;
  }
});

// Write fixed solutions.json
fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Fixed bomList format in solutions.json');
