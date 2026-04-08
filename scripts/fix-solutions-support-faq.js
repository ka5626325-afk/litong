/**
 * 补充 solutions 和 support 页面的 FAQ
 * 确保符合文档要求：
 * - solutions-list: 8-14条FAQ
 * - solution-detail: 3-6条FAQ (已有，不处理)
 * - support-list: 12-18条FAQ
 * - support-detail: 4-8条FAQ (已有，不处理)
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const brands = ['st', 'macmic', 'semikron', 'infineon', 'crrc'];

// Solutions-list FAQ 模板（8条）
const solutionsListFAQs = [
  {
    question: "What types of solutions does {brand} offer?",
    answer: "{brand} provides comprehensive solutions across multiple application areas including motor control, power conversion, renewable energy, and industrial automation. Each solution is designed to address specific industry challenges with optimized component selection, reference designs, and technical support. Our solutions combine {brand}'s advanced semiconductor technologies with proven system architectures to deliver reliable, efficient performance.",
    decisionGuide: "Browse our solution categories below or contact our FAE team to discuss your specific application requirements.",
    keywords: ["{brand} solutions", "application solutions", "system solutions"]
  },
  {
    question: "How do I choose the right solution for my application?",
    answer: "Selecting the right solution involves several key considerations: (1) Application type - identify your specific use case such as motor drive, power supply, or renewable energy. (2) Power requirements - determine voltage and current levels needed for your system. (3) Performance specifications - consider efficiency, switching frequency, and control precision requirements. (4) Environmental conditions - account for temperature range, cooling options, and physical constraints. (5) Certification needs - consider industry standards and safety requirements. Our FAE team can help you evaluate these factors and recommend the optimal solution.",
    decisionGuide: "Contact our FAE team for personalized solution recommendations based on your project specifications.",
    keywords: ["solution selection", "application matching", "system design"]
  },
  {
    question: "What is included in a complete solution offering?",
    answer: "Our complete solution offerings typically include: (1) Optimized bill of materials (BOM) with carefully selected components. (2) Reference schematics and PCB layout designs. (3) Software libraries and firmware examples. (4) Application notes and technical documentation. (5) Evaluation kits for prototyping and testing. (6) FAE support for design review and optimization. (7) Training materials and workshops. This comprehensive approach ensures you have everything needed for successful implementation.",
    decisionGuide: "Request detailed documentation for any solution or schedule a technical consultation.",
    keywords: ["solution components", "reference design", "evaluation kit"]
  },
  {
    question: "Can solutions be customized for specific requirements?",
    answer: "Yes, our solutions can be adapted to meet specific customer requirements. Customization options include: (1) Component selection - choosing alternative parts based on availability or cost considerations. (2) Power level scaling - adjusting designs for different voltage and current requirements. (3) Feature modifications - adding or removing functionality to match application needs. (4) Form factor changes - adapting designs for specific mechanical constraints. (5) Integration support - helping incorporate the solution into your larger system. Contact our FAE team to discuss customization possibilities.",
    decisionGuide: "Contact our FAE team to discuss your specific customization requirements.",
    keywords: ["custom solution", "design modification", "application customization"]
  },
  {
    question: "What technical support is available for solution implementation?",
    answer: "We provide comprehensive technical support throughout your implementation: (1) Pre-design consultation - helping select the right solution and components. (2) Design review - evaluating your schematics and PCB layouts. (3) Debugging assistance - troubleshooting issues during bring-up and testing. (4) Optimization guidance - improving performance, efficiency, or reliability. (5) Production support - ensuring smooth transition to manufacturing. Our FAE team has deep expertise with {brand} products and applications.",
    decisionGuide: "Submit a technical inquiry to get personalized support from our FAE team.",
    keywords: ["technical support", "FAE services", "implementation assistance"]
  },
  {
    question: "How long does it typically take to implement a solution?",
    answer: "Implementation timelines vary based on project complexity: (1) Simple adaptations - 2-4 weeks for minor modifications to reference designs. (2) Standard implementations - 1-3 months for typical applications using evaluation kits. (3) Complex customizations - 3-6 months for extensive modifications or new architectures. (4) Production readiness - additional 1-2 months for testing and validation. Using our reference designs and evaluation kits can significantly accelerate development. Our FAE team can provide more accurate timelines based on your specific requirements.",
    decisionGuide: "Contact our FAE team for a project timeline estimate based on your specific requirements.",
    keywords: ["implementation time", "development schedule", "project timeline"]
  },
  {
    question: "What industries are these solutions designed for?",
    answer: "Our solutions serve a wide range of industries including: (1) Industrial automation - motor drives, PLCs, robotics, and factory automation. (2) Renewable energy - solar inverters, wind power converters, and energy storage systems. (3) Transportation - electric vehicles, rail systems, and charging infrastructure. (4) Consumer electronics - power supplies, home appliances, and white goods. (5) Medical equipment - imaging systems, patient monitoring, and therapeutic devices. (6) Telecommunications - base stations, data centers, and network infrastructure. Each solution is optimized for the specific requirements of its target industry.",
    decisionGuide: "Explore solutions by industry or contact us for industry-specific recommendations.",
    keywords: ["target industries", "application sectors", "market segments"]
  },
  {
    question: "Are there evaluation kits available for these solutions?",
    answer: "Yes, we offer evaluation kits for most solutions to accelerate your development: (1) Hardware kits include PCBs with key components, connectors, and documentation. (2) Software packages provide firmware examples, libraries, and configuration tools. (3) Test reports include efficiency measurements, thermal data, and EMI results. (4) User guides explain setup procedures and testing methodologies. Evaluation kits allow you to validate performance in your application before committing to full development. Contact our sales team to request evaluation kits.",
    decisionGuide: "Request an evaluation kit through our website or contact our sales team.",
    keywords: ["evaluation kit", "development kit", "reference design"]
  }
];

// Support-list FAQ 模板（12条）
const supportListFAQs = [
  { q: "Is LiTong an authorized distributor for {brand}?", a: "Yes, LiTong Electronics is an authorized distributor for {brand}. We have direct relationships with the manufacturer and provide genuine products with full warranty support.", d: "Contact us to verify our authorization or request a quotation.", k: ["authorized distributor", "{brand} distributor"] },
  { q: "What is the typical lead time for {brand} products?", a: "Lead times vary by product type and availability. Standard products typically have 8-12 week lead times. We maintain strategic inventory for high-demand products. Contact us for current lead times on specific part numbers.", d: "Submit your RFQ for accurate lead time and availability information.", k: ["lead time", "delivery", "availability"] },
  { q: "How can I request samples of {brand} products?", a: "We provide sample support for qualified projects. Submit your sample request with project details, estimated annual usage, and timeline. Our team will review and arrange samples accordingly.", d: "Submit your sample request through our online form.", k: ["samples", "evaluation parts", "sample request"] },
  { q: "What technical support does LiTong provide?", a: "We offer comprehensive technical support including: application circuit design review, firmware development guidance, debugging assistance, and reference design recommendations. Our FAE team has hands-on experience with {brand} products.", d: "Submit your technical inquiry for personalized assistance.", k: ["technical support", "FAE services", "design support"] },
  { q: "How do I verify product authenticity?", a: "All products from LiTong are guaranteed genuine. We source directly from {brand} or authorized channels. Certificates of authenticity and traceability documentation are available upon request.", d: "Contact us for authenticity verification or documentation.", k: ["authenticity", "genuine products", "counterfeit prevention"] },
  { q: "What are your payment terms?", a: "We offer flexible payment terms for qualified customers. Standard terms are Net 30 for approved accounts.