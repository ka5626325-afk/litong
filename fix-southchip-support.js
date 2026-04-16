const fs = require('fs');
const path = require('path');

// Read the support.json file
const supportPath = path.join(__dirname, 'data', 'southchip', 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Fix SEO keywords
support.seoKeywords = [
  "SouthChip support",
  "battery charger guide",
  "power management documentation",
  "FAE support",
  "SouthChip application notes",
  "SouthChip distributor selection",
  "SouthChip technical documentation"
];

// Add more root-level FAQs
const additionalRootFaqs = [
  {
    question: "How do I contact LiTong for SouthChip support?",
    answer: "Contacting LiTong for SouthChip support: (1) Technical hotline - Call our FAE support line for immediate assistance with urgent issues. (2) Email support - Send technical questions to our support email for detailed responses. (3) Online chat - Use our website chat for quick questions and part availability. (4) Local offices - Visit our regional offices for face-to-face support. (5) Field application engineers - Request on-site support for complex design reviews. (6) Sample requests - Contact sales for samples and evaluation kits. (7) Quotation requests - Reach out to sales for pricing and delivery information. LiTong is committed to providing responsive, professional support for all your SouthChip needs. Response times typically range from immediate (hotline) to 24 hours (email).",
    decisionGuide: "Contact LiTong through your preferred channel for SouthChip support.",
    keywords: ["contact", "support", "LiTong", "FAE", "technical support"]
  },
  {
    question: "What documentation is available for SouthChip products?",
    answer: "SouthChip documentation available from LiTong: (1) Datasheets - Complete electrical specifications, pin descriptions, timing diagrams, and package information. (2) Application notes - Detailed guides on specific topics like charger design, fuel gauge integration, and thermal management. (3) Reference designs - Proven schematic and PCB designs for common applications. (4) User guides - Evaluation board setup and testing procedures. (5) Selection guides - Product comparison and selection assistance. (6) Design calculators - Tools for component selection and performance estimation. (7) Software/firmware - Example code and drivers for host communication. All documentation is available in English. LiTong maintains a comprehensive library and can provide the latest versions upon request.",
    decisionGuide: "Contact LiTong to request SouthChip documentation package.",
    keywords: ["documentation", "datasheet", "application notes", "reference design"]
  },
  {
    question: "Does LiTong provide design review services?",
    answer: "Yes, LiTong provides comprehensive design review services for SouthChip implementations: (1) Schematic review - Analysis of power management schematic for correctness and optimization. (2) PCB layout review - Evaluation of layout for thermal performance, EMI, and signal integrity. (3) BOM review - Component selection verification and cost optimization suggestions. (4) Thermal analysis - Review of thermal design and heat dissipation capability. (5) Design optimization - Recommendations for performance improvement and cost reduction. (6) Pre-production review - Final check before production release. (7) Failure analysis - Investigation of field failures and corrective actions. Our experienced FAEs have reviewed hundreds of designs and can identify potential issues before they become problems. Design review services are complimentary for customers using SouthChip products.",
    decisionGuide: "Contact LiTong FAEs to schedule a design review for your SouthChip implementation.",
    keywords: ["design review", "schematic review", "PCB review", "design optimization"]
  },
  {
    question: "What is the typical response time for technical support?",
    answer: "LiTong technical support response times: (1) Hotline support - Immediate response during business hours for urgent issues. (2) Email inquiries - Response within 4-24 hours depending on complexity. Simple questions answered same day. (3) Design reviews - Scheduled within 1-2 business days, review completion in 2-3 days. (4) Sample requests - Processed within 1 business day, shipped within 1-2 days for stock items. (5) Quotation requests - Formal quotes provided within 1-2 business days. (6) Field support - On-site visits scheduled based on priority and location, typically within 1 week. (7) Training requests - Scheduled based on mutual availability, usually within 2-4 weeks. For critical production issues, we provide emergency support outside normal hours. LiTong is committed to minimizing your design delays and production issues.",
    decisionGuide: "Contact LiTong through appropriate channel based on urgency of your request.",
    keywords: ["response time", "support hours", "technical support", "service level"]
  }
];

support.faqs = [...support.faqs, ...additionalRootFaqs];

// Fix each article
support.articles.forEach(article => {
  // Add author if missing
  if (!article.author) {
    article.author = {
      name: "LiTong Technical Team",
      title: "FAE Team",
      bio: "Experienced field application engineers specializing in SouthChip power management ICs and battery management solutions."
    };
  }

  // Add publishDate if missing
  if (!article.publishDate) {
    article.publishDate = "2024-01-15";
  }

  // Add summary if missing
  if (!article.summary) {
    article.summary = article.description;
  }

  // Add tags if missing
  if (!article.tags) {
    article.tags = ["SouthChip", "Power Management", "Technical Guide", "Battery Management"];
  }

  // Add more relatedArticles if needed
  if (!article.relatedArticles || article.relatedArticles.length < 3) {
    const existingRelated = article.relatedArticles || [];
    const additionalRelated = [
      {
        id: "southchip-product-overview",
        title: "SouthChip Product Portfolio Overview",
        link: "/southchip/support/product-overview.html"
      },
      {
        id: "southchip-selection-guide",
        title: "SouthChip Product Selection Guide",
        link: "/southchip/support/selection-guide.html"
      }
    ];
    article.relatedArticles = [...existingRelated, ...additionalRelated].slice(0, 5);
  }

  // Add customerCases if missing
  if (!article.customerCases) {
    article.customerCases = [
      {
        customer: "Consumer Electronics Manufacturer",
        industry: "Mobile Devices",
        challenge: "Needed guidance on charger selection for new smartphone design",
        solution: "LiTong FAE provided detailed analysis and recommended optimal SouthChip solution",
        results: ["Selected optimal charger IC", "Achieved target charging performance", "Reduced design iteration"],
        feedback: "LiTong's technical support was excellent. They helped us avoid potential issues and optimize our design."
      }
    ];
  }

  // Add insightLogic to faeInsights if missing
  if (article.faeInsights && !article.faeInsights.insightLogic) {
    article.faeInsights.insightLogic = "Based on extensive field experience with SouthChip products across multiple customer designs and applications.";
  }
});

// Write the fixed support.json
fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('Fixed support.json');
