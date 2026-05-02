#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'chipown');

// Fix solutions.json FAQs
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Extend solutions.json root FAQs
solutions.faqs = solutions.faqs.map((faq, index) => {
  const extendedAnswers = [
    "Chipown provides comprehensive reference designs for AC/DC adapters, LED drivers, motor drivers, and DC/DC converters. Each design includes complete schematics, detailed BOM, PCB layout guidelines, Gerber files, and comprehensive test reports. Reference designs are validated for performance, efficiency, and EMC compliance. Engineers can use these designs as starting points and customize them for specific application requirements, significantly reducing development time and risk.",
    "Evaluation boards are available through our authorized distribution channel for most Chipown product families. To request evaluation boards, contact our sales team with your specific product interests and target applications. Evaluation kits include the populated PCB, documentation, and quick start guide. Sample lead time is typically 1-2 weeks for standard products. For high-volume or custom evaluation needs, please discuss with your local sales representative.",
    "As an authorized Chipown distributor, we provide comprehensive design support services including schematic review, PCB layout guidance, thermal analysis, and troubleshooting assistance. Our FAE team has extensive experience with power management designs across consumer, industrial, and automotive applications. We can help optimize your design for efficiency, cost, and reliability. Contact us early in your design cycle for best results.",
    "Development timeline depends on design complexity and your team's experience. With Chipown's reference designs and our technical support, a typical single-output adapter design can be completed in 4-6 weeks including prototyping and initial testing. Multi-output or more complex designs may take 8-12 weeks. We recommend starting with our reference designs and modifying them for your specific requirements to accelerate development.",
    "Yes, Chipown ICs are designed to meet international safety standards including IEC/EN 62368-1, IEC/EN 60950-1, and UL standards. Our reference designs include safety considerations and guidelines for meeting clearance/creepage requirements, isolation, and protection. For specific safety certifications, please consult with our FAE team to ensure your design meets all applicable requirements for your target markets."
  ];
  
  return {
    ...faq,
    answer: extendedAnswers[index] || faq.answer
  };
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✓ Fixed solutions.json FAQs');

// Fix support.json FAQs
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Extend support.json root FAQs
const extendedSupportAnswers = [
  "All Chipown datasheets, application notes, reference designs, and technical documentation are available through our technical support portal. Registered customers can access the complete document library including detailed datasheets with electrical characteristics, application notes with design guidance, reference schematics, PCB layout examples, and simulation models. Contact our FAE team to set up portal access or request specific documents for your project needs.",
  "Our FAE team provides comprehensive design support throughout your product development cycle. Services include initial product selection guidance, schematic review and optimization, PCB layout recommendations, thermal analysis, efficiency optimization, and EMC troubleshooting. For complex designs, we can provide on-site support or detailed design reviews. Submit your design requirements through our support portal or contact your local sales representative to engage with our technical team.",
  "Evaluation boards and demonstration kits are available for most Chipown product families. These evaluation tools include fully populated PCBs with reference designs, documentation, and quick start guides. They allow you to evaluate device performance, test key features, and accelerate your development. Contact our sales team with your specific product interests to request evaluation boards. Standard lead time is 1-2 weeks.",
  "Technical issues can be reported through our support portal, by email to technical support, or directly to your assigned FAE. Please provide detailed information including the specific device, application circuit, operating conditions, and a clear description of the issue. For feature requests or custom solution inquiries, contact our applications engineering team with your specific requirements and volume projections.",
  "Behavioral models and simulation support are available for many Chipown products to help with system-level design and verification. These models can be used with popular simulation tools for loop stability analysis, transient response evaluation, and efficiency estimation. Contact our technical support team for access to simulation models and guidance on their proper use in your design environment.",
  "Samples can be requested through our website or by contacting your local sales representative. Standard sample lead time is 1-2 weeks depending on inventory status. For first-time customers, a sample request form and brief application description may be required. We recommend requesting samples early in your design phase to allow adequate time for evaluation and testing before committing to production.",
  "Our product qualification process includes comprehensive electrical testing, environmental stress testing, and long-term reliability evaluation. We provide detailed qualification reports including test conditions, results, and failure analysis if applicable. For automotive or other high-reliability applications, additional qualification testing can be arranged. Contact our quality team for specific qualification requirements.",
  "Failure analysis services are available for devices that fail during application or testing. Submit the failed device along with detailed information about the application circuit, operating conditions, failure symptoms, and any relevant test data. Our failure analysis team will investigate the root cause and provide a detailed report with findings and recommendations for preventing similar issues in the future."
];

support.faqs = support.faqs.map((faq, index) => ({
  ...faq,
  answer: extendedSupportAnswers[index] || faq.answer
}));

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('✓ Fixed support.json FAQs');

console.log('\n✅ Chipown FAQ fixes completed!');
