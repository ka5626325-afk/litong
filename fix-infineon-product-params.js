/**
 * Fix Infineon product parameters to match category.parameter definitions
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'infineon');

function fixProductsJson() {
  console.log('Fixing infineon products.json parameters...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  data.categories.forEach(category => {
    if (category.products && category.parameters) {
      console.log(`\nCategory: ${category.id}`);
      console.log(`  Parameters: ${category.parameters.join(', ')}`);
      
      category.products.forEach(product => {
        // Map common parameter names
        const paramMapping = {
          'Voltage Rating': ['voltage', 'VDS', 'Vce', 'Collector-Emitter Voltage'],
          'Current Rating': ['current', 'ID', 'Ic', 'Collector Current'],
          'Temperature Range': ['temperature', 'Temperature Range', 'Tj'],
          'Power Rating': ['power', 'Power Dissipation'],
          'Frequency': ['frequency', 'Switching Frequency'],
          'RDS(on)': ['rdsOn', 'RDS(on)'],
          'VGS(th)': ['vgsTh', 'VGS(th)'],
          'Package': ['package', 'Package']
        };
        
        category.parameters.forEach(param => {
          const possibleKeys = paramMapping[param] || [param];
          
          // Check if product already has this parameter
          if (!product[param]) {
            // Try to find matching field
            for (const key of possibleKeys) {
              if (product[key]) {
                product[param] = product[key];
                console.log(`    ${product.partNumber}: ${param} = ${product[key]}`);
                break;
              }
            }
          }
        });
      });
    }
  });
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('\n✓ products.json fixed\n');
}

// Run fix
console.log('=== Fixing Infineon Product Parameters ===\n');
fixProductsJson();
console.log('=== Fix Complete ===');
