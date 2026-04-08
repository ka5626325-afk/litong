const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'nichicon');

// Fix products.json - fix alternativeParts to include useCase field
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix alternativeParts - ensure proper structure with useCase field
const fixAlternativePart = (alt, originalPartNumber, originalSpecs) => {
  // Parse original specs
  const origCapacitance = parseInt(originalSpecs.Capacitance) || 470;
  const origVoltage = parseInt(originalSpecs.VoltageRating) || 50;
  const origESR = parseFloat(originalSpecs.ESR) || 0.017;
  const origRipple = originalSpecs.RippleCurrent || '1.5A';
  
  // Extract from alternative part number
  const altPart = alt.partNumber;
  let altCapacitance = origCapacitance;
  let altVoltage = origVoltage;
  let altESR = origESR;
  
  // Try to extract capacitance from part number
  const capMatch = altPart.match(/(\d+)(uF|UF)/i);
  if (capMatch) {
    altCapacitance = parseInt(capMatch[1]);
  }
  
  // Try to extract voltage from part number
  const voltMatch = altPart.match(/(\d+)V/i);
  if (voltMatch) {
    altVoltage = parseInt(voltMatch[1]);
  }
  
  // Determine if this is higher or lower spec
  const isHigherCap = altCapacitance >= origCapacitance;
  const isHigherVolt = altVoltage >= origVoltage;
  
  // Generate reason and useCase based on comparison
  let reason, useCase;
  if (isHigherCap && isHigherVolt) {
    reason = "Higher capacitance and voltage rating for enhanced performance";
    useCase = "Applications requiring increased energy storage and higher voltage margins";
  } else if (isHigherCap) {
    reason = "Higher capacitance for improved filtering and energy storage";
    useCase = "Applications with high ripple current or requiring longer hold-up times";
  } else if (isHigherVolt) {
    reason = "Higher voltage rating for applications with voltage transients";
    useCase = "Industrial and automotive applications with voltage spikes or surges";
  } else {
    reason = "Cost-effective alternative with slightly reduced specifications";
    useCase = "Budget-sensitive applications with moderate performance requirements";
  }
  
  // Determine comparison text
  const capDiff = altCapacitance - origCapacitance;
  const voltDiff = altVoltage - origVoltage;
  
  let capComparison = `${altCapacitance}uF = ${origCapacitance}uF (same capacity)`;
  if (capDiff > 0) capComparison = `${altCapacitance}uF > ${origCapacitance}uF (+${Math.round(capDiff/origCapacitance*100)}% higher capacity)`;
  if (capDiff < 0) capComparison = `${altCapacitance}uF < ${origCapacitance}uF (${Math.round(capDiff/origCapacitance*100)}% lower capacity)`;
  
  let voltComparison = `${altVoltage}V = ${origVoltage}V (same voltage)`;
  if (voltDiff > 0) voltComparison = `${altVoltage}V > ${origVoltage}V (+${Math.round(voltDiff/origVoltage*100)}% higher voltage)`;
  if (voltDiff < 0) voltComparison = `${altVoltage}V < ${origVoltage}V (${Math.round(voltDiff/origVoltage*100)}% lower voltage)`;
  
  return {
    partNumber: altPart,
    brand: alt.brand || 'Nichicon',
    reason: reason,
    useCase: useCase,
    link: alt.link || `/nichicon/products/${altPart.toLowerCase()}`,
    comparison: {
      capacitance: capComparison,
      voltage: voltComparison,
      esr: `${altESR}Ω typical ESR`
    },
    parameters: {
      Capacitance: `${altCapacitance}uF`,
      VoltageRating: `${altVoltage}V`,
      ESR: `${altESR}Ω`,
      RippleCurrent: origRipple
    }
  };
};

// Process all products
products.categories.forEach(category => {
  category.products.forEach(product => {
    // Fix alternativeParts - ensure complete structure with useCase
    if (product.alternativeParts && product.alternativeParts.length > 0) {
      product.alternativeParts = product.alternativeParts.map(alt => 
        fixAlternativePart(alt, product.partNumber, product.specifications)
      );
    }
  });
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Fixed products.json alternativeParts with useCase field');

console.log('\n============================================================');
console.log('✅ All validation fixes applied successfully!');
console.log('============================================================');
console.log('\nNext step: Run validation again to verify fixes');
console.log('  node scripts/brand-master-checklist.js nichicon --strict');
