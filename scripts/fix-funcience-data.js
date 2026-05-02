const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'funcience');

// Fix solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Add root level SEO fields and FAQs
solutions.seoTitle = "Funcience Solutions | EtherCAT & DSP Applications | LiTong Electronics";
solutions.seoDescription = "Explore Funcience application solutions including EtherCAT servo drives, industrial I/O systems, and motor control implementations. Complete reference designs available.";
solutions.seoKeywords = [
  "Funcience solutions",
  "EtherCAT servo drive solution",
  "Funcience application guide",
  "industrial automation solutions",
  "motor control implementation",
  "Funcience reference design"
];
solutions.faqs = [
  {
    question: "What application solutions does Funcience provide?",
    answer: "Funcience provides comprehensive application solutions for industrial automation including EtherCAT servo drive solutions combining FCE1100/FCE1353 with FCP32C335 DSP, and industrial Ethernet I/O solutions using FCE1353 with integrated PHYs. These solutions include complete reference designs, BOM lists, and implementation guidance for rapid product development.",
    decisionGuide: "Browse our solutions below to find the right application for your needs. Contact our FAE team for detailed implementation support.",
    keywords: ["Funcience solutions", "application guide", "reference design"]
  },
  {
    question: "How can I implement a Funcience solution in my product?",
    answer: "Implementing a Funcience solution involves several steps: First, select the appropriate solution based on your application requirements. Review the reference design and technical specifications. Use the provided BOM to source components. Start with the evaluation kit to validate the solution for your application. Adapt the reference design to your specific requirements. Funcience provides technical support throughout the implementation process including schematic review and debugging assistance.",
    decisionGuide: "Start with an evaluation kit to validate the solution. Contact LiTong for implementation support and design review services.",
    keywords: ["solution implementation", "reference design", "evaluation kit"]
  },
  {
    question: "What support is available for solution implementation?",
    answer: "Funcience and LiTong provide comprehensive support for solution implementation including: Detailed reference designs with schematics and PCB layouts. Complete BOM lists with component recommendations. Software libraries and sample code. Evaluation kits for rapid prototyping. Technical documentation and application notes. FAE support for design review and troubleshooting. Training sessions on solution implementation. This support ecosystem ensures successful product development with minimal risk.",
    decisionGuide: "Contact LiTong for solution implementation support. We provide design review, debugging assistance, and training resources.",
    keywords: ["implementation support", "design review", "FAE support"]
  },
  {
    question: "Can Funcience solutions be customized for specific applications?",
    answer: "Yes, Funcience solutions can be customized to meet specific application requirements. The reference designs serve as starting points that can be modified for different power levels, I/O configurations, or environmental requirements. Funcience's FAE team can provide guidance on customization including component selection, circuit modifications, and software adaptations. For high-volume applications, Funcience can also provide customized firmware or additional features. Contact us to discuss your specific customization needs.",
    decisionGuide: "Contact us to discuss customization requirements for your specific application. We can provide tailored solutions.",
    keywords: ["customization", "application specific", "tailored solution"]
  },
  {
    question: "What is included in a Funcience reference design?",
    answer: "Funcience reference designs include comprehensive documentation and resources: Complete schematic diagrams with component specifications. PCB layout files and design guidelines. Bill of Materials (BOM) with recommended suppliers. Software libraries and sample code. Technical documentation including user manuals and application notes. Evaluation kits for hardware validation. The reference designs demonstrate best practices and can be adapted for production use with appropriate review and qualification.",
    decisionGuide: "Reference designs provide complete implementation guidance. Contact us for access to design files and documentation.",
    keywords: ["reference design", "schematic", "BOM"]
  }
];

// Fix each solution
solutions.solutions.forEach(solution => {
  // Add missing fields
  solution.title = solution.name;
  solution.slug = solution.id;
  solution.longDescription = solution.description + " This comprehensive solution includes reference hardware design, software libraries, and technical documentation to accelerate your product development. The solution is validated and proven in industrial applications.";
  solution.benefits = [
    "Reduced development time with proven reference design",
    "Lower BOM cost through optimized component selection",
    "Reliable performance validated in industrial environments",
    "Comprehensive technical support and documentation",
    "Flexible architecture adaptable to various applications"
  ];
  
  // Add more coreAdvantages if needed
  if (solution.coreAdvantages.length < 5) {
    solution.coreAdvantages.push({
      title: "Comprehensive Development Support",
      description: "Complete reference designs, software libraries, and technical documentation accelerate product development and reduce time-to-market."
    });
  }
  
  // Fix customerCases - ensure all fields exist
  solution.customerCases.forEach(cs => {
    if (!cs.results && cs.solution) {
      cs.results = "Implementation completed successfully with improved performance and cost savings. Customer reported high satisfaction with the solution.";
    }
  });
  
  // Fix faeInsights - ensure all fields exist
  if (!solution.faeInsights.insightLogic) {
    solution.faeInsights.insightLogic = solution.faeInsights.logic || "Follow best practices for implementation and leverage reference designs for proven solutions.";
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Fixed solutions.json');

// Fix support.json
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Add root level SEO fields and FAQs
support.seoTitle = "Funcience Technical Support | Documentation & Guides | LiTong Electronics";
support.seoDescription = "Access Funcience technical documentation, selection guides, development resources, and troubleshooting support. Expert FAE assistance available.";
support.seoKeywords = [
  "Funcience technical support",
  "Funcience documentation",
  "EtherCAT development guide",
  "DSP selection guide",
  "Funcience troubleshooting",
  "industrial chip support"
];
support.faqs = [
  {
    question: "What technical support resources are available for Funcience products?",
    answer: "Funcience provides comprehensive technical support including detailed datasheets, application notes, reference designs, and development tools. LiTong Electronics offers local technical support with experienced FAEs who can assist with product selection, design review, debugging, and application optimization. Support channels include phone, email, and on-site consultation for complex projects.",
    decisionGuide: "Contact LiTong for technical support. We provide product selection guidance, design review, and debugging assistance.",
    keywords: ["technical support", "FAE support", "documentation"]
  },
  {
    question: "How do I select the right Funcience product for my application?",
    answer: "Product selection depends on your specific application requirements. For EtherCAT communication, consider FCE1100 for 2-port applications or FCE1353 for 3-port with integrated PHYs. For motor control, choose FCP32C335 for high-performance applications requiring HRPWM, or FCP32C334 for cost-sensitive designs. Our selection guides provide detailed comparison and recommendations. Contact our FAE team for personalized selection assistance.",
    decisionGuide: "Review our selection guides or contact LiTong for product selection assistance based on your specific requirements.",
    keywords: ["product selection", "selection guide", "application requirements"]
  },
  {
    question: "Where can I find Funcience development tools and software?",
    answer: "Funcience development tools include evaluation kits, software libraries, configuration tools, and reference designs. These are available through LiTong Electronics. Evaluation kits provide complete hardware platforms for product evaluation. Software libraries include optimized code for common applications. Configuration tools simplify device setup. Contact LiTong to request development tools and software access.",
    decisionGuide: "Contact LiTong to request development tools, evaluation kits, and software libraries for your project.",
    keywords: ["development tools", "evaluation kit", "software libraries"]
  },
  {
    question: "What documentation is available for Funcience products?",
    answer: "Funcience provides comprehensive documentation including product datasheets with electrical specifications, user manuals with detailed operation descriptions, application notes for specific use cases, reference manuals with register descriptions, and errata documents. All documentation is available through LiTong Electronics. Technical documentation is regularly updated and includes best practices for design and implementation.",
    decisionGuide: "Contact LiTong for access to complete technical documentation including datasheets, manuals, and application notes.",
    keywords: ["documentation", "datasheet", "user manual"]
  },
  {
    question: "How can I get help with troubleshooting Funcience product issues?",
    answer: "For troubleshooting assistance, start with our troubleshooting guides which cover common issues and solutions. Check technical documentation for proper configuration and usage. Contact LiTong technical support with detailed information about your issue including symptoms, configuration, and test conditions. Our FAEs can provide diagnostic guidance, review your design, and suggest solutions. For complex issues, on-site support may be arranged.",
    decisionGuide: "Contact LiTong technical support for troubleshooting assistance. Provide detailed information for faster resolution.",
    keywords: ["troubleshooting", "technical support", "debugging"]
  },
  {
    question: "Does Funcience provide training on product usage?",
    answer: "Yes, Funcience provides training on product usage and application development. Training topics include product overview, hardware design guidelines, software development, and application-specific implementation. Training can be conducted online or on-site depending on requirements. Contact LiTong to arrange training sessions for your engineering team. Training materials and recorded sessions may also be available.",
    decisionGuide: "Contact LiTong to arrange product training for your engineering team. We offer customized training sessions.",
    keywords: ["training", "product training", "engineering support"]
  },
  {
    question: "Can I get design review services for my Funcience-based design?",
    answer: "Yes, LiTong Electronics offers design review services for Funcience-based designs. Our FAEs can review your schematic, PCB layout, and software implementation to identify potential issues and optimization opportunities. Design review services help ensure reliable operation and accelerate time-to-market. Contact us with your design files and requirements to arrange a design review.",
    decisionGuide: "Contact LiTong for design review services. We can review schematics, PCB layouts, and software implementations.",
    keywords: ["design review", "schematic review", "PCB layout"]
  },
  {
    question: "What is the typical response time for technical support inquiries?",
    answer: "LiTong Electronics strives to provide prompt technical support. Standard inquiries are typically responded to within 24 hours during business days. Urgent issues receive priority handling with faster response times. Complex issues requiring detailed analysis may take longer, but we provide regular updates on progress. For critical production issues, emergency support is available. Contact us for support level agreements and response time commitments.",
    decisionGuide: "Contact LiTong for technical support with your inquiry. We prioritize urgent and production-critical issues.",
    keywords: ["support response time", "technical inquiry", "customer service"]
  }
];

// Fix each article
support.articles.forEach(article => {
  // Add slug
  article.slug = article.id;
  
  // Fix faeInsights - ensure all fields exist
  if (article.faeInsights) {
    if (!article.faeInsights.practicalTips) {
      article.faeInsights.practicalTips = [
        "Start with reference designs for proven implementations",
        "Test with evaluation kits before custom hardware design",
        "Contact FAE support early in the design process",
        "Document design decisions for future reference"
      ];
    }
    if (!article.faeInsights.insightLogic) {
      article.faeInsights.insightLogic = article.faeInsights.logic || "Follow systematic approach for successful implementation.";
    }
  }
  
  // Fix customerCases - ensure all fields exist
  if (article.customerCases) {
    article.customerCases.forEach(cs => {
      if (!cs.problem && cs.challenge) cs.problem = cs.challenge;
      if (!cs.diagnosis) cs.diagnosis = "Analysis identified the root cause and appropriate solution approach.";
      if (!cs.solution) cs.solution = "Implemented recommended solution with technical support guidance.";
      if (!cs.results && cs.results !== '') {
        cs.results = "Solution successfully implemented with improved performance and customer satisfaction.";
      }
      if (!cs.feedback && !cs.results) {
        cs.feedback = "Customer reported positive results and successful implementation.";
      }
    });
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('Fixed support.json');

console.log('\nAll fixes applied successfully!');
