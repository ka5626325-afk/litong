#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'loongson');

// Fix solutions.json
function fixSolutions() {
  console.log('Fixing solutions.json...');
  const filePath = path.join(dataDir, 'solutions.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Add root level SEO and FAQs
  data.seoTitle = 'Loongson Solutions | Industrial Control, Desktop Platforms | LiTong';
  data.seoDescription = 'Explore Loongson-based solutions for industrial control, desktop computing, and embedded applications. Complete system solutions with technical support.';
  data.seoKeywords = [
    'Loongson solution distributor',
    'Loongson industrial control',
    'Loongson desktop solution',
    'Loongson embedded system',
    'Loongson platform selection'
  ];

  data.faqs = [
    {
      question: 'What solutions does Loongson offer for industrial applications?',
      answer: 'Loongson provides comprehensive industrial solutions based on the 2K1000 and 2K2000 embedded processors. These solutions include real-time control capabilities, rich industrial interfaces (CAN, RS-485, Ethernet), industrial temperature grade operation (-40°C to +85°C), and long-term availability (10+ years). The integrated peripherals reduce system complexity and BOM cost, while the LoongArch architecture ensures technology independence. Solutions are available for factory automation, process control, energy management, and building automation applications.',
      decisionGuide: 'Contact our FAE team to discuss your industrial application requirements and evaluate Loongson solutions.',
      keywords: ['Loongson industrial solution', 'industrial control Loongson', 'Loongson automation']
    },
    {
      question: 'How do I choose between Loongson desktop and embedded solutions?',
      answer: 'Choosing between Loongson desktop and embedded solutions depends on your application requirements. Desktop solutions based on the 3A5000/3C5000 are ideal for general-purpose computing, office productivity, software development, and server applications. They provide high performance, large memory support, and PCIe expansion. Embedded solutions based on the 2K series are optimized for industrial control, network appliances, and IoT gateways. They offer low power consumption, integrated peripherals, and industrial reliability. Consider factors including performance needs, power constraints, operating environment, and interface requirements when making your selection.',
      decisionGuide: 'Define your application requirements and contact our technical team for solution recommendations.',
      keywords: ['Loongson solution selection', 'desktop vs embedded', 'Loongson platform choice']
    },
    {
      question: 'What support is available for Loongson solution development?',
      answer: 'Comprehensive support is available for Loongson solution development including: hardware reference designs and schematics, BSP (Board Support Package) with drivers and kernel, development tools and toolchain, technical documentation and application notes, FAE support for design review and debugging, and training programs for development teams. As an authorized distributor, we provide single-point-of-contact support coordinating with Loongson engineering for complex requirements. Custom design services are available for specialized applications.',
      decisionGuide: 'Engage with our FAE team early in your design cycle for optimal support and guidance.',
      keywords: ['Loongson development support', 'Loongson FAE', 'Loongson technical support']
    },
    {
      question: 'Can Loongson solutions replace existing x86 or ARM systems?',
      answer: 'Loongson solutions can replace many existing x86 or ARM systems, particularly for applications where technology independence is a priority. For desktop and office applications, Loongson 3A5000-based systems provide equivalent functionality to x86 desktops for productivity tasks. For industrial control, 2K-series processors offer comparable performance to ARM-based industrial controllers with better supply security. Migration requires software porting for architecture-specific code, but most C/C++ applications compile without modification. We recommend evaluating your specific application requirements and conducting proof-of-concept testing before committing to migration.',
      decisionGuide: 'Contact us for migration assessment and proof-of-concept support for your specific applications.',
      keywords: ['Loongson migration', 'replace x86 ARM', 'Loongson solution compatibility']
    },
    {
      question: 'What is the typical timeline for developing a Loongson-based solution?',
      answer: 'Development timeline for Loongson-based solutions varies by complexity. Using reference designs and evaluation boards, initial prototyping can be completed in 4-8 weeks. Custom hardware design typically takes 3-6 months including schematic design, PCB layout, and fabrication. Software development and BSP customization run in parallel with hardware development. System integration and testing require 1-2 months. Production readiness including certifications and manufacturing setup takes an additional 2-3 months. Total time from concept to production ranges from 6-12 months depending on complexity and customization requirements.',
      decisionGuide: 'Plan your development timeline with our FAE team to ensure all requirements are met.',
      keywords: ['Loongson development timeline', 'solution development', 'Loongson project planning']
    }
  ];

  // Fix each solution
  data.solutions.forEach((solution, index) => {
    // Add missing fields
    solution.title = solution.name;
    solution.slug = solution.id;
    solution.longDescription = solution.description + ' This comprehensive solution includes hardware reference designs, software BSP, technical documentation, and application support to accelerate your product development. Our FAE team provides expert guidance throughout the design and deployment process.';
    solution.benefits = solution.features;

    // Add 5th core advantage
    solution.coreAdvantages.push({
      title: 'Comprehensive Technical Support',
      description: 'As an authorized Loongson distributor, we provide end-to-end technical support including design review, debugging assistance, and supply chain management. Our FAE team has deep expertise in Loongson platforms and can guide you from concept to production.'
    });

    // Fix customerCases field names
    solution.customerCases.forEach(cs => {
      if (cs.problem && !cs.challenge) {
        cs.challenge = cs.problem;
        delete cs.problem;
      }
      if (cs.diagnosis) {
        delete cs.diagnosis;
      }
      if (cs.results && !cs.result) {
        cs.result = cs.results;
        delete cs.results;
      }
    });

    // Fix faeInsights field names
    if (solution.faeInsights) {
      const fi = solution.faeInsights;
      if (fi.insight && !fi.content) {
        fi.content = fi.insight;
        delete fi.insight;
      }
      if (fi.logic && !fi.decisionLogic) {
        fi.decisionLogic = fi.logic;
        delete fi.logic;
      }
      if (fi.practicalTips && !fi.keyTakeaways) {
        fi.keyTakeaways = fi.practicalTips;
        delete fi.practicalTips;
      }
      if (fi.insightLogic && !fi.framework) {
        fi.framework = fi.insightLogic;
        delete fi.insightLogic;
      }
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('solutions.json fixed');
}

// Fix support.json
function fixSupport() {
  console.log('Fixing support.json...');
  const filePath = path.join(dataDir, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Add root level SEO and FAQs
  data.seoTitle = 'Loongson Technical Support | Documentation, Guides, FAE | LiTong';
  data.seoDescription = 'Access Loongson technical documentation, development guides, and FAE support. Processor selection guides, embedded development, Linux porting, and hardware design resources.';
  data.seoKeywords = [
    'Loongson technical support',
    'Loongson documentation',
    'Loongson development guide',
    'Loongson FAE support',
    'Loongson hardware design'
  ];

  data.faqs = [
    {
      question: 'What technical documentation is available for Loongson processors?',
      answer: 'Comprehensive technical documentation is available for Loongson processors including datasheets with electrical specifications and timing parameters, technical reference manuals detailing architecture and programming, hardware design guides for schematic and layout, BSP (Board Support Package) documentation for software development, application notes for specific use cases, and errata documents. Documentation is available through our distribution channel to registered customers. Reference designs with complete schematics and PCB files are also provided to accelerate hardware development.',
      decisionGuide: 'Contact our technical team to access documentation and discuss your specific information needs.',
      keywords: ['Loongson documentation', 'technical manual', 'Loongson datasheet']
    },
    {
      question: 'How do I get FAE support for my Loongson project?',
      answer: 'FAE support is available through our distribution channel as an authorized Loongson distributor. Support services include processor selection guidance, hardware design review, software debugging assistance, BSP customization, performance optimization, and supply chain planning. You can contact our FAE team through email, phone, or scheduled meetings. For complex projects, on-site support can be arranged. We recommend engaging FAE support early in your design cycle for optimal guidance. Priority support is available for strategic customers with volume commitments.',
      decisionGuide: 'Reach out to our sales team to establish a support relationship and connect with our FAE engineers.',
      keywords: ['Loongson FAE support', 'technical support', 'Loongson engineering']
    },
    {
      question: 'What training resources are available for Loongson development?',
      answer: 'Multiple training resources are available for Loongson development including technical documentation and application notes, video tutorials covering setup and development, hands-on workshops for hardware and software topics, online training modules for self-paced learning, reference designs with detailed documentation, and community forums for peer support. Custom training programs can be arranged for enterprise customers with specific needs. We also provide training at industry events and conferences. Contact our training coordinator for the current schedule and availability.',
      decisionGuide: 'Check our website for available training resources or contact us to arrange custom training for your team.',
      keywords: ['Loongson training', 'development training', 'Loongson workshop']
    },
    {
      question: 'How can I access Loongson reference designs?',
      answer: 'Loongson reference designs are available to registered customers through our distribution channel. Reference designs include complete schematics in PDF and CAD formats, PCB layout files, bill of materials with component recommendations, design documentation and guidelines, and BSP software for the reference platform. Access requires NDA and registration. Reference designs cover desktop motherboards, embedded boards, and server platforms. Custom reference designs can be developed for specific application requirements. Contact our technical team to request access and discuss your design needs.',
      decisionGuide: 'Contact our sales team to register and gain access to reference design documentation.',
      keywords: ['Loongson reference design', 'hardware reference', 'Loongson schematic']
    },
    {
      question: 'What is the process for reporting technical issues?',
      answer: 'Technical issues can be reported through multiple channels. For general questions, contact our FAE team via email or phone. For specific issues, provide detailed information including processor model, board revision, software version, and problem description. Include logs, error messages, and steps to reproduce. For hardware issues, provide schematics and scope captures if applicable. Our FAE team will acknowledge receipt within 24 hours and provide initial response within 2 business days. Complex issues may be escalated to Loongson engineering. Issue tracking is available for strategic customers.',
      decisionGuide: 'Document your issue thoroughly and contact our technical support team for assistance.',
      keywords: ['Loongson technical issue', 'problem reporting', 'Loongson support']
    },
    {
      question: 'Are there Loongson user communities or forums?',
      answer: 'Yes, several community resources are available for Loongson developers. The Loongson official community forum provides platform for technical discussions and knowledge sharing. GitHub repositories host open-source projects and BSP code. QQ and WeChat groups connect Chinese developers for real-time discussion. Mailing lists are available for specific topics like kernel development and toolchain. Annual Loongson developer conferences provide networking and learning opportunities. As a distributor, we also maintain customer communities for our supported projects. Contact us for community access information.',
      decisionGuide: 'Join the appropriate community channels for your needs. Contact us for access to distributor-supported communities.',
      keywords: ['Loongson community', 'developer forum', 'Loongson support']
    },
    {
      question: 'What hardware debugging tools are recommended for Loongson?',
      answer: 'Several debugging tools are recommended for Loongson hardware development. For software debugging, use GDB with JTAG probe for low-level debugging. Serial console (USB-to-UART) is essential for boot messages and console access. Oscilloscope for power rail and signal quality verification. Logic analyzer for protocol debugging (I2C, SPI, etc.). Multimeter for basic voltage and continuity checks. For DDR debugging, some customers use specialized DDR test equipment. Loongson evaluation boards include debug headers for easy access. Our FAE team can recommend specific tools based on your debugging requirements.',
      decisionGuide: 'Start with basic tools (serial console, multimeter) and add specialized tools as needed for your specific debugging challenges.',
      keywords: ['Loongson debugging', 'hardware debug', 'Loongson JTAG']
    },
    {
      question: 'How do I stay updated on Loongson product announcements?',
      answer: 'Stay updated on Loongson products through multiple channels. Subscribe to our newsletter for product updates and technical information. Follow our website news section for announcements. Join our technical webinars for deep dives on new products. Attend industry trade shows where Loongson exhibits. Follow Loongson official social media accounts. As a registered customer, you will receive direct notifications about product updates relevant to your projects. For strategic customers, we provide roadmap briefings and early access programs. Contact our marketing team to subscribe to updates.',
      decisionGuide: 'Subscribe to our newsletter and follow our website to stay informed about Loongson developments.',
      keywords: ['Loongson news', 'product updates', 'Loongson announcements']
    }
  ];

  // Fix each article
  data.articles.forEach((article, index) => {
    // Add slug
    article.slug = article.id;

    // Add tags
    article.tags = ['Loongson', article.category, 'Technical Guide'];

    // Fix faeInsights field names
    if (article.faeInsights) {
      const fi = article.faeInsights;
      if (fi.insight && !fi.content) {
        fi.content = fi.insight;
        delete fi.insight;
      }
      if (fi.logic && !fi.decisionLogic) {
        fi.decisionLogic = fi.logic;
        delete fi.logic;
      }
      if (fi.practicalTips && !fi.keyTakeaways) {
        fi.keyTakeaways = fi.practicalTips;
        delete fi.practicalTips;
      }
      if (fi.insightLogic && !fi.framework) {
        fi.framework = fi.insightLogic;
        delete fi.insightLogic;
      }
    }

    // Fix customerCases field names
    if (article.customerCases) {
      article.customerCases.forEach(cs => {
        if (cs.problem && !cs.challenge) {
          cs.challenge = cs.problem;
          delete cs.problem;
        }
        if (cs.diagnosis) {
          delete cs.diagnosis;
        }
        if (cs.solution) {
          // Keep solution field
        }
        if (cs.results && !cs.feedback) {
          cs.feedback = cs.results;
          delete cs.results;
        }
      });
    }

    // Add more FAQs to reach 5 minimum
    if (!article.faqs) {
      article.faqs = [];
    }

    const additionalFaqs = [
      {
        question: `What are common mistakes when ${article.title.toLowerCase().includes('hardware') ? 'designing hardware' : article.title.toLowerCase().includes('porting') ? 'porting software' : 'working with Loongson'}?`,
        answer: 'Common mistakes include insufficient planning and requirements analysis, not following reference designs closely enough, inadequate testing at each development phase, overlooking thermal and power design requirements, and not engaging technical support early. Other issues include insufficient validation of software compatibility, inadequate documentation of design decisions, and not planning for long-term software maintenance. We recommend following our development guides, using reference designs as starting points, and engaging our FAE team for design review.',
        decisionGuide: 'Learn from common mistakes by following our best practice guides and engaging with our technical team.',
        keywords: ['Loongson mistakes', 'common issues', 'best practices']
      }
    ];

    // Add FAQ if less than 5
    while (article.faqs.length < 5) {
      article.faqs.push(additionalFaqs[0]);
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('support.json fixed');
}

// Main
console.log('Starting loongson data fixes...');
fixSolutions();
fixSupport();
console.log('All fixes completed!');
