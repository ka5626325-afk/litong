// Fix faeInsights format for Aowei solutions.json
const fs = require('fs');
const path = require('path');

const solutionsPath = path.join(__dirname, '..', 'data', 'aowei', 'solutions.json');
let solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

console.log('Fixing faeInsights format for solutions...\n');

solutionsData.solutions.forEach((solution, index) => {
  console.log(`Fixing solution ${index + 1}: ${solution.title}`);
  
  // Convert old format to new format
  if (solution.faeInsights) {
    const oldInsights = solution.faeInsights;
    
    // Create new format
    solution.faeInsights = {
      author: "LiTong FAE Team",
      content: `${oldInsights.keyConsiderations || ''} ${oldInsights.commonPitfalls || ''} ${oldInsights.bestPractices || ''} ${oldInsights.designTips || ''}`.trim(),
      keyTakeaways: [
        oldInsights.keyConsiderations || "Ensure proper system design and thermal management",
        oldInsights.bestPractices || "Follow recommended implementation guidelines",
        oldInsights.designTips || "Optimize placement and connections for best performance"
      ],
      decisionFramework: {
        steps: [
          "Analyze application power and energy requirements",
          "Select appropriate supercapacitor module configuration",
          "Design charging and protection circuits",
          "Implement thermal management solution",
          "Validate system performance under all operating conditions"
        ],
        decisionPoints: [
          "Voltage rating vs system requirements",
          "Capacitance sizing for backup time",
          "Thermal management approach",
          "Monitoring and protection features"
        ]
      }
    };
    
    console.log(`  - Converted faeInsights to new format`);
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('\n✅ Fixed faeInsights format for all solutions!');
