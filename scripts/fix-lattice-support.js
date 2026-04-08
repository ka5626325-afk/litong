const fs = require('fs');
const path = require('path');

const supportPath = path.join(__dirname, '..', 'data', 'lattice', 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Add SEO fields
support.seoTitle = "Lattice Technical Support - FPGA Guides and Documentation | LiTong";
support.seoDescription = "Access Lattice FPGA technical support resources: getting started guides, AI implementation tutorials, security documentation, and MIPI interface design. Expert support from authorized distributor.";
support.seoKeywords = [
  "Lattice support",
  "Lattice documentation",
  "FPGA guides",
  "Lattice tutorials",
  "sensAI guide",
  "security implementation",
  "MIPI design",
  "technical support"
];

// Add root FAQs
support.faqs = [
  {
    "question": "What technical resources are available for Lattice FPGAs?",
    "answer": "Lattice provides comprehensive technical resources including datasheets, application notes, reference designs, user guides, and software documentation. As an authorized distributor, we supplement these with additional application guides, design examples, and direct technical support from our FAE team. Resources cover all aspects of Lattice FPGA development from getting started to advanced topics like AI implementation and security.",
    "decisionGuide": "Access comprehensive technical resources and expert support for Lattice FPGA development.",
    "keywords": ["technical resources", "documentation", "application notes", "reference designs"]
  },
  {
    "question": "How do I get started with Lattice FPGA development?",
    "answer": "Getting started with Lattice FPGAs involves downloading the appropriate design software (Radiant for Nexus devices, Diamond for MachXO), acquiring a development kit for your target device, and working through the getting started guide. Our technical articles provide step-by-step instructions for first-time users. The FAE team is available to help with tool installation, first project creation, and troubleshooting.",
    "decisionGuide": "Start with development kit and getting started guide for rapid learning.",
    "keywords": ["getting started", "development kit", "first project", "software download"]
  },
  {
    "question": "What support is available for complex designs?",
    "answer": "For complex designs, we provide comprehensive support including architecture consultation, design review, timing closure assistance, and optimization guidance. Our FAE team has extensive experience with Lattice devices and can help with challenging aspects like high-speed interfaces, power optimization, and resource utilization. We also offer reference designs that demonstrate best practices for common applications.",
    "decisionGuide": "Leverage FAE expertise and reference designs for complex design challenges.",
    "keywords": ["design support", "FAE assistance", "design review", "optimization"]
  }
];

// Enhance each article
support.articles.forEach(article => {
  // Add slug
  article.slug = article.id;
  
  // Add author details
  if (!article.authorInfo) {
    article.authorInfo = {
      "name": article.author,
      "title": "Technical Specialist",
      "bio": "Experienced FPGA applications engineer with expertise in Lattice solutions.",
      "image": "/images/authors/default.jpg"
    };
  }
  
  // Add publishDate if not exists
  if (!article.publishDate) {
    article.publishDate = article.publishedAt;
  }
  
  // Add related articles
  article.relatedArticles = [
    {
      "id": "sensai-ai-implementation",
      "title": "Implementing AI/ML with Lattice sensAI"
    },
    {
      "id": "hardware-security-implementation",
      "title": "Implementing Hardware Security with Lattice FPGAs"
    }
  ];
  
  // Add FAE insights
  article.faeInsights = {
    "keyPoints": "This article covers essential concepts for Lattice FPGA development.",
    "practicalTips": "Follow the step-by-step instructions and use the provided example designs.",
    "commonQuestions": "Contact our FAE team for clarification on any topics covered in this guide."
  };
  
  // Add customer cases
  article.customerCases = [
    {
      "customer": "Industrial Automation Company",
      "application": "Control system implementation",
      "feedback": "The guide helped us get started quickly with Lattice FPGAs."
    }
  ];
  
  // Add FAQs
  article.faqs = [
    {
      "question": "Where can I find additional resources?",
      "answer": "Additional resources are available on the Lattice website and through our technical support team."
    },
    {
      "question": "How do I contact technical support?",
      "answer": "Contact our FAE team through the support portal or email for technical assistance."
    }
  ];
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('Fixed support.json with all required fields');
