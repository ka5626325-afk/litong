const fs = require('fs');
const path = require('path');

// Read the solutions.json file
const solutionsPath = path.join(__dirname, 'data', 'southchip', 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Add root-level FAQs
solutions.faqs = [
  {
    question: "What power management solutions does SouthChip offer?",
    answer: "SouthChip offers comprehensive power management solutions: (1) Smartphone Power Management - Complete power subsystem with fast charging, fuel gauging, and multi-rail DC-DC conversion. (2) Power Bank BMS - Bidirectional charging/discharging with high efficiency and accurate capacity indication. (3) Tablet Power Solutions - High-current charging and multi-rail power for larger tablets. (4) IoT Power Solutions - Ultra-low power management for battery-operated devices. (5) Industrial Power Solutions - Robust power management for harsh environments. Each solution is built from SouthChip's portfolio of battery chargers, fuel gauges, DC-DC converters, and power path management ICs. As an authorized SouthChip distributor, LiTong provides complete solution support including reference designs and technical assistance.",
    decisionGuide: "Contact LiTong for solution selection based on your application requirements.",
    keywords: ["power management solutions", "SouthChip solutions", "battery management", "power system"]
  },
  {
    question: "How do I select the right SouthChip solution?",
    answer: "Selecting the right SouthChip solution involves: (1) Define requirements - Charge current, system rails, battery capacity, size constraints. (2) Identify key components - Charger, fuel gauge, DC-DC converters, power management. (3) Evaluate solutions - Review existing solutions or design custom architecture. (4) Reference designs - Start with SouthChip reference designs for faster development. (5) Prototype - Build and test prototype with evaluation boards. (6) Optimization - Fine-tune for your specific requirements. LiTong FAEs can help analyze your requirements and recommend optimal SouthChip solutions. We provide schematic review, PCB layout guidance, and debugging support throughout your design cycle.",
    decisionGuide: "Contact LiTong FAEs for solution selection and design support.",
    keywords: ["solution selection", "design guidance", "reference design", "LiTong support"]
  },
  {
    question: "What support does LiTong provide for SouthChip solutions?",
    answer: "LiTong provides comprehensive support for SouthChip solutions: (1) Solution consultation - Help select optimal SouthChip architecture for your application. (2) Reference designs - Access to proven reference designs and evaluation boards. (3) Schematic review - Expert review of your power management schematic. (4) PCB layout guidance - Recommendations for optimal layout and thermal design. (5) Debugging assistance - Help resolve issues during bring-up and testing. (6) Component sourcing - Supply all SouthChip components and companion parts. (7) Training - Product training and application workshops. (8) Documentation - Datasheets, application notes, and design guides. LiTong's experienced FAE team has implemented SouthChip solutions across consumer, automotive, and industrial applications.",
    decisionGuide: "Contact LiTong for comprehensive SouthChip solution support.",
    keywords: ["technical support", "FAE support", "design review", "debugging"]
  }
];

// Fix each solution
solutions.solutions.forEach(solution => {
  // Add benefits if missing
  if (!solution.benefits) {
    solution.benefits = [
      "Reduced BOM cost through high integration",
      "Faster time-to-market with proven reference designs",
      "Optimized performance with validated configurations",
      "Comprehensive technical support from LiTong FAEs",
      "Reliable supply chain through authorized distribution"
    ];
  }

  // Add coreAdvantages if missing
  if (!solution.coreAdvantages) {
    solution.coreAdvantages = [
      "High integration reduces component count and PCB area",
      "Industry-leading efficiency minimizes power loss and heat",
      "Comprehensive protection features ensure safe operation",
      "Flexible architecture supports various application requirements",
      "Proven designs accelerate product development"
    ];
  }

  // Add bomList if missing
  if (!solution.bomList) {
    solution.bomList = {
      "description": "Complete BOM for " + solution.title,
      "totalComponents": 25,
      "categories": [
        {
          "name": "SouthChip ICs",
          "items": solution.coreProducts.map(p => ({
            "partNumber": p.partNumber,
            "description": p.role,
            "quantity": 1,
            "manufacturer": "SouthChip"
          }))
        },
        {
          "name": "Passive Components",
          "items": [
            { "partNumber": "Inductors", "description": "Power inductors for DC-DC converters", "quantity": 3 },
            { "partNumber": "Ceramic Capacitors", "description": "X5R/X7R capacitors for filtering", "quantity": 10 },
            { "partNumber": "Resistors", "description": "1% precision resistors", "quantity": 8 }
          ]
        },
        {
          "name": "Other Components",
          "items": [
            { "partNumber": "USB Connector", "description": "USB-C or Micro-USB connector", "quantity": 1 },
            { "partNumber": "Battery Connector", "description": "Battery connection header", "quantity": 1 }
          ]
        }
      ]
    };
  }

  // Add more customer cases if needed
  if (!solution.customerCases || solution.customerCases.length < 2) {
    solution.customerCases = solution.customerCases || [];
    solution.customerCases.push({
      customer: "Electronics Design House",
      industry: "ODM/OEM",
      challenge: "Needed reliable power management solution for multiple smartphone projects",
      solution: "Standardized on SouthChip power management platform across product lines",
      results: [
        "Reduced design cycle time by 30%",
        "Improved supply chain efficiency",
        "Consistent performance across products",
        "Lower technical support burden"
      ],
      feedback: "SouthChip solutions provide the right balance of features, performance, and cost. LiTong's support has been excellent."
    });
  }

  // Add more FAQs if needed
  if (!solution.faqs || solution.faqs.length < 5) {
    const existingFaqs = solution.faqs || [];
    const additionalFaqs = [
      {
        question: `What is the development timeline for ${solution.title}?`,
        answer: `Development timeline for ${solution.title}: (1) Evaluation phase - 1-2 weeks to evaluate reference design and test key features. (2) Schematic design - 1-2 weeks to adapt reference design to your requirements. (3) PCB layout - 1-2 weeks for layout and review. (4) Prototype build - 1-2 weeks for PCB fabrication and assembly. (5) Bring-up and debug - 2-3 weeks for initial testing and issue resolution. (6) Optimization - 1-2 weeks for performance tuning. Total timeline typically 7-13 weeks from start to working prototype. LiTong can accelerate this with reference designs, schematic review, and debugging support. Contact us for project planning assistance.`,
        decisionGuide: "Contact LiTong for project planning and accelerated development support.",
        keywords: ["development timeline", "project schedule", "prototype", "design cycle"]
      },
      {
        question: `What testing is required for ${solution.title}?`,
        answer: `Testing requirements for ${solution.title}: (1) Functional testing - Verify all power rails, charging, and protection features. (2) Performance testing - Measure efficiency, transient response, and ripple. (3) Thermal testing - Verify operation across temperature range and thermal limits. (4) Safety testing - Validate all protection features (OVP, OCP, OTP). (5) EMC testing - Conducted and radiated emissions testing. (6) Reliability testing - Long-term operation and environmental stress testing. (7) Compatibility testing - USB charging compatibility with various adapters and devices. LiTong can provide test procedures and support for validation testing. Reference designs include recommended test points and procedures.`,
        decisionGuide: "Contact LiTong for test procedures and validation support.",
        keywords: ["testing", "validation", "performance testing", "safety testing"]
      },
      {
        question: `Can ${solution.title} be customized?`,
        answer: `${solution.title} can be customized for specific requirements: (1) Charge current - Programmable charge current to match battery specifications. (2) System rails - Adjustable output voltages for different processor requirements. (3) Protection thresholds - Configurable protection limits for specific applications. (4) Communication interface - I2C configuration for host control and monitoring. (5) Size optimization - Component selection and layout optimization for space constraints. (6) Cost optimization - Alternative component selection for cost-sensitive applications. (7) Feature addition - Additional features like wireless charging, multiple USB ports. LiTong FAEs can help customize the solution while maintaining reliability and performance. Contact us for customization requirements.`,
        decisionGuide: "Contact LiTong for solution customization and optimization.",
        keywords: ["customization", "optimization", "configuration", "adaptation"]
      }
    ];
    solution.faqs = [...existingFaqs, ...additionalFaqs].slice(0, 8);
  }
});

// Write the fixed solutions.json
fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Fixed solutions.json');
