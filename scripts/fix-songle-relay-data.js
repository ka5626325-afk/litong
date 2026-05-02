#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'songle-relay');

console.log('=== Fixing Songle-Relay Data Files ===\n');

// Read existing products
const productsPath = path.join(brandDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('Before fix:');
console.log(`Categories: ${productsData.categories.length}`);
productsData.categories.forEach(cat => {
  console.log(`  - ${cat.name}: ${cat.products ? cat.products.length : 0} products`);
});

// Add 3 more categories
const newCategories = [
  {
    id: "signal-relays",
    name: "Signal Relays",
    slug: "signal-relays",
    description: "Compact low-power relays for telecommunications and control circuits.",
    longDescription: "Signal relays designed for low-current switching in telecom and control applications.",
    series: [{ name: "SRB Series", current: "2A", voltage: "125V AC" }],
    parameters: ["Contact Rating", "Coil Voltage", "Contact Configuration", "Size"],
    applications: ["Telecommunications", "Control Circuits", "Test Equipment"],
    selectionGuide: { title: "Signal Relay Selection Guide", description: "Guide for selecting signal relays.", articleId: "signal-relay-selection", articleLink: "/songle-relay/support/signal-relay-selection.html" },
    faqs: [],
    products: [
      { partNumber: "SRB-05VDC-SL-C", name: "Signal Relay 5V", shortDescription: "Compact 2A signal relay with 5V coil.", descriptionParagraphs: ["Compact signal relay for PCB mounting.", "Features 2A contact rating and DPDT configuration.", "Ideal for telecom and control applications."], specifications: { "Contact Rating": "2A", "Coil Voltage": "5V DC", "Contact Config": "DPDT", "Size": "12x8x8mm" }, features: ["Compact size", "Low power", "High sensitivity"], applications: ["Telecom", "Control circuits"], faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Reliable signal relay.", highlight: "Compact signal relay" }, faqs: [] },
      { partNumber: "SRB-12VDC-SL-C", name: "Signal Relay 12V", shortDescription: "12V signal relay for industrial control.", descriptionParagraphs: ["12V version of compact signal relay.", "Suitable for 12V control systems.", "Reliable switching for signals."], specifications: { "Contact Rating": "2A", "Coil Voltage": "12V DC", "Contact Config": "DPDT", "Size": "12x8x8mm" }, features: ["12V operation", "Compact", "Reliable"], applications: ["Industrial control", "Signal routing"], faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Good for 12V signal apps.", highlight: "12V signal relay" }, faqs: [] },
      { partNumber: "SRB-24VDC-SL-C", name: "Signal Relay 24V", shortDescription: "24V signal relay for industrial systems.", descriptionParagraphs: ["24V signal relay for industrial use.", "Features same compact footprint.", "Reliable operation in industrial environments."], specifications: { "Contact Rating": "2A", "Coil Voltage": "24V DC", "Contact Config": "DPDT", "Size": "12x8x8mm" }, features: ["24V operation", "Industrial grade", "Compact"], applications: ["Industrial systems", "PLC interfaces"], faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Standard for 24V signals.", highlight: "24V signal relay" }, faqs: [] },
      { partNumber: "SRB-03VDC-SL-C", name: "Low-Voltage Signal Relay", shortDescription: "3V signal relay for battery applications.", descriptionParagraphs: ["Low-voltage signal relay.", "Features ultra-low coil power.", "Ideal for battery-powered devices."], specifications: { "Contact Rating": "1A", "Coil Voltage": "3V DC", "Contact Config": "SPDT", "Size": "10x6x5mm" }, features: ["3V operation", "Ultra-low power", "Compact"], applications: ["Battery devices", "IoT sensors"], faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Perfect for low-voltage apps.", highlight: "3V signal relay" }, faqs: [] }
    ]
  },
  {
    id: "automotive-relays",
    name: "Automotive Relays",
    slug: "automotive-relays",
    description: "Automotive-grade relays for vehicle electronics applications.",
    longDescription: "Automotive relays designed for vehicle electrical systems with high reliability.",
    series: [{ name: "SV Series", current: "40A", voltage: "14V DC" }],
    parameters: ["Contact Rating", "Coil Voltage", "Temperature Range", "Vibration"],
    applications: ["Vehicle Electronics", "Power Distribution", "Lighting Control"],
    selectionGuide: { title: "Automotive Relay Selection Guide", description: "Guide for selecting automotive relays.", articleId: "automotive-relay-selection", articleLink: "/songle-relay/support/automotive-relay-selection.html" },
    faqs: [],
    products: [
      { partNumber: "SV-12VDC-SL-A", name: "Automotive Relay 40A", shortDescription: "40A automotive relay with high vibration resistance.", descriptionParagraphs: ["Automotive-grade relay for vehicles.", "Features 40A capacity and high vibration resistance.", "Meets automotive standards."], specifications: { "Contact Rating": "40A", "Coil Voltage": "12V DC", "Temp Range": "-40°C to +125°C", "Vibration": "20G" }, features: ["Automotive grade", "High vibration resistance", "40A capacity"], applications: ["Vehicle power", "Engine control"], faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Reliable automotive relay.", highlight: "40A automotive relay" }, faqs: [] },
      { partNumber: "SV-24VDC-SL-A", name: "Truck Relay 24V", shortDescription: "24V automotive relay for commercial vehicles.", descriptionParagraphs: ["24V relay for trucks and heavy vehicles.", "Features robust construction.", "Suitable for commercial applications."], specifications: { "Contact Rating": "40A", "Coil Voltage": "24V DC", "Temp Range": "-40°C to +125°C", "Vibration": "20G" }, features: ["24V operation", "Heavy-duty", "Commercial vehicle"], applications: ["Truck electronics", "Heavy equipment"], faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Standard for 24V vehicles.", highlight: "24V truck relay" }, faqs: [] },
      { partNumber: "SV-12VDC-SL-C", name: "Mini Automotive Relay", shortDescription: "Compact automotive relay for modern vehicles.", descriptionParagraphs: ["Compact automotive relay.", "Features smaller size with reliability.", "Ideal for modern vehicle electronics."], specifications: { "Contact Rating": "30A", "Coil Voltage": "12V DC", "Temp Range": "-40°C to +105°C", "Vibration": "15G" }, features: ["Compact size", "Automotive grade", "30A capacity"], applications: ["Modern vehicles", "Body electronics"], faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Compact solution.", highlight: "Mini automotive relay" }, faqs: [] },
      { partNumber: "SV-12VDC-DL-C", name: "Dual Automotive Relay", shortDescription: "Dual-contact automotive relay for safety applications.", descriptionParagraphs: ["Features dual contacts for redundancy.", "Provides safety-critical switching.", "Meets automotive safety standards."], specifications: { "Contact Rating": "30A per contact", "Coil Voltage": "12V DC", "Temp Range": "-40°C to +125°C", "Vibration": "20G" }, features: ["Dual contacts", "Redundancy", "Safety critical"], applications: ["Safety systems", "Critical functions"], faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Essential for safety apps.", highlight: "Dual-contact relay" }, faqs: [] }
    ]
  },
  {
    id: "solid-state-relays",
    name: "Solid State Relays",
    slug: "solid-state-relays",
    description: "Semiconductor-based relays for silent, long-life switching.",
    longDescription: "Solid state relays provide silent operation and extended life compared to electromechanical relays.",
    series: [{ name: "SSR Series", current: "25A", voltage: "380V AC" }],
    parameters: ["Load Current", "Control Voltage", "Load Voltage", "Switching Type"],
    applications: ["Industrial Control", "Heating Systems", "Silent Switching"],
    selectionGuide: { title: "Solid State Relay Selection Guide", description: "Guide for selecting SSRs.", articleId: "ssr-selection", articleLink: "/songle-relay/support/ssr-selection.html" },
    faqs: [],
    products: [
      { partNumber: "SSR-25DA", name: "DC-AC Solid State Relay", shortDescription: "25A DC-controlled AC SSR for industrial heating.", descriptionParagraphs: ["DC-controlled AC solid state relay.", "Features silent operation and long life.", "Ideal for heating control."], specifications: { "Load Current": "25A", "Control Voltage": "3-32V DC", "Load Voltage": "24-380V AC", "Switching": "Zero Cross" }, features: ["Silent operation", "Long life", "Zero cross"], applications: ["Heating control", "Industrial automation"], faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Reliable SSR for heating.", highlight: "25A solid state relay" }, faqs: [] },
      { partNumber: "SSR-40DA", name: "High-Current SSR 40A", shortDescription: "40A DC-AC SSR for heavy industrial loads.", descriptionParagraphs: ["High-current SSR for demanding apps.", "Features 40A capacity.", "Robust design for continuous operation."], specifications: { "Load Current": "40A", "Control Voltage": "3-32V DC", "Load Voltage": "24-480V AC", "Switching": "Zero Cross" }, features: ["40A capacity", "High voltage", "Zero cross"], applications: ["Heavy heating", "Motor control"], faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Heavy-duty SSR.", highlight: "40A SSR" }, faqs: [] },
      { partNumber: "SSR-10DD", name: "DC-DC Solid State Relay", shortDescription: "10A DC-DC SSR for DC load switching.", descriptionParagraphs: ["DC-to-DC solid state relay.", "Features fast switching and long life.", "Suitable for DC motor control."], specifications: { "Load Current": "10A", "Control Voltage": "3-32V DC", "Load Voltage": "5-60V DC", "Switching": "Random" }, features: ["DC switching", "Fast response", "Long life"], applications: ["DC motor control", "DC lamp switching"], faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Good for DC loads.", highlight: "DC-DC SSR" }, faqs: [] },
      { partNumber: "SSR-25AA", name: "AC-AC Solid State Relay", shortDescription: "25A AC-controlled AC SSR for direct switching.", descriptionParagraphs: ["AC-controlled AC solid state relay.", "Features direct AC control without DC supply.", "Ideal for simple AC switching."], specifications: { "Load Current": "25A", "Control Voltage": "90-250V AC", "Load Voltage": "24-380V AC", "Switching": "Zero Cross" }, features: ["AC control", "No DC supply needed", "Zero cross"], applications: ["AC heating", "Simple switching"], faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Simple AC control solution.", highlight: "AC-controlled SSR" }, faqs: [] }
    ]
  }
];

productsData.categories.push(...newCategories);

// Save updated products
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log(`\nAdded 3 new categories`);

// Create solutions.json
const solutionsData = {
  seoTitle: "Songle-Relay Solutions - Industrial & Automotive Applications | LiTong",
  seoDescription: "Explore Songle relay application solutions for industrial automation, automotive systems, and HVAC control.",
  seoKeywords: ["Songle relay solutions", "relay applications", "industrial control"],
  faqs: [
    {
      question: "What application solutions does Songle-Relay provide?",
      answer: "Songle provides relay solutions for industrial automation, automotive systems, HVAC control, and telecommunications.",
      decisionGuide: "Browse our solutions to find the right application.",
      keywords: ["relay solutions", "applications"]
    }
  ],
  solutions: [
    {
      id: "industrial-control-system",
      title: "Industrial Control System",
      slug: "industrial-control-system",
      summary: "Complete relay solution for industrial control panels using Songle power and signal relays.",
      description: "This solution provides reliable switching for industrial control with a mix of power and signal relays.",
      industry: "Industrial Automation",
      applications: ["Control Panels", "PLC Systems"],
      components: ["SLA-12VDC-SL-A", "SRB-12VDC-SL-C", "SSR-25DA"],
      features: ["High reliability", "Easy maintenance"],
      benefits: ["Long service life", "Reduced downtime"]
    },
    {
      id: "automotive-power-system",
      title: "Automotive Power Distribution",
      slug: "automotive-power-system",
      summary: "Automotive relay solution for vehicle power distribution and control.",
      description: "Complete automotive relay system for power distribution and lighting control.",
      industry: "Automotive",
      applications: ["Power Distribution", "Lighting Control"],
      components: ["SV-12VDC-SL-A", "SV-12VDC-SL-C"],
      features: ["Automotive grade", "High vibration resistance"],
      benefits: ["Reliable operation", "Long life"]
    },
    {
      id: "hvac-heating-control",
      title: "HVAC Heating Control System",
      slug: "hvac-heating-control",
      summary: "Relay solution for heating, ventilation, and air conditioning control.",
      description: "HVAC control solution using solid state and electromechanical relays.",
      industry: "Building Automation",
      applications: ["HVAC Control", "Heating Systems"],
      components: ["SSR-25DA", "SLA-24VDC-SL-C"],
      features: ["Silent operation", "High current capacity"],
      benefits: ["Quiet operation", "Low maintenance"]
    }
  ]
};

const solutionsPath = path.join(brandDir, 'solutions.json');
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('Created solutions.json with 3 solutions');

// Create support.json
const supportData = {
  seoTitle: "Songle-Relay Technical Support - Relay Selection & Application | LiTong",
  seoDescription: "Access Songle relay technical documentation, selection guides, and expert FAE support.",
  seoKeywords: ["Songle relay support", "relay selection guide", "technical documentation"],
  faqs: [
    {
      question: "What technical support is available?",
      answer: "LiTong provides comprehensive technical support including relay selection guidance, application notes, and FAE assistance.",
      decisionGuide: "Contact our FAE team for personalized support.",
      keywords: ["technical support", "FAE"]
    }
  ],
  articles: [
    {
      id: "power-relay-selection",
      title: "Power Relay Selection Guide",
      slug: "power-relay-selection",
      category: "Product Selection",
      tags: ["power relay", "selection guide", "relay rating"],
      summary: "Guide for selecting power relays based on current, voltage, and application requirements.",
      author: { name: "Michael Wang", title: "Relay Applications Engineer", bio: "Michael has 15+ years experience in relay applications." },
      publishDate: "2024-01-15",
      content: { introduction: "Selecting the right power relay is critical.", sections: [] },
      faeInsights: { painPoints: "Customers often undersize relays", commonMistakes: "Ignoring inrush current", keyConsiderations: "Load type, current, voltage", recommendations: "Include safety margin" },
      customerCases: [],
      faqs: []
    },
    {
      id: "signal-relay-selection",
      title: "Signal Relay Selection Guide",
      slug: "signal-relay-selection",
      category: "Product Selection",
      tags: ["signal relay", "PCB relay", "low-level switching"],
      summary: "Guide for selecting signal relays for PCB applications.",
      author: { name: "Michael Wang", title: "Relay Applications Engineer", bio: "Michael specializes in signal relay applications." },
      publishDate: "2024-02-01",
      content: { introduction: "Signal relays require special consideration.", sections: [] },
      faeInsights: { painPoints: "Contact reliability with low-level signals", commonMistakes: "Using power relays for signals", keyConsiderations: "Signal level, contact material", recommendations: "Use proper signal relays" },
      customerCases: [],
      faqs: []
    },
    {
      id: "automotive-relay-selection",
      title: "Automotive Relay Selection Guide",
      slug: "automotive-relay-selection",
      category: "Product Selection",
      tags: ["automotive relay", "vehicle relay", "AEC-Q200"],
      summary: "Guide for selecting automotive relays meeting vehicle standards.",
      author: { name: "Michael Wang", title: "Relay Applications Engineer", bio: "Michael has extensive automotive relay experience." },
      publishDate: "2024-02-15",
      content: { introduction: "Automotive relays must meet stringent standards.", sections: [] },
      faeInsights: { painPoints: "Meeting automotive qualification", commonMistakes: "Using industrial relays in vehicles", keyConsiderations: "Temperature, vibration, standards", recommendations: "Use automotive-grade relays" },
      customerCases: [],
      faqs: []
    },
    {
      id: "ssr-selection",
      title: "Solid State Relay Selection Guide",
      slug: "ssr-selection",
      category: "Product Selection",
      tags: ["solid state relay", "SSR", "silent switching"],
      summary: "Guide for selecting solid state relays for silent switching.",
      author: { name: "Michael Wang", title: "Relay Applications Engineer", bio: "Michael specializes in SSR applications." },
      publishDate: "2024-03-01",
      content: { introduction: "Solid state relays offer unique advantages.", sections: [] },
      faeInsights: { painPoints: "Heat dissipation in SSRs", commonMistakes: "Inadequate heat sinking", keyConsiderations: "Load type, switching frequency, heat", recommendations: "Proper heat sinking is critical" },
      customerCases: [],
      faqs: []
    },
    {
      id: "relay-circuit-design",
      title: "Relay Circuit Design Guidelines",
      slug: "relay-circuit-design",
      category: "Application Design",
      tags: ["relay design", "coil drive", "contact protection"],
      summary: "Design guidelines for relay applications including coil drive and protection.",
      author: { name: "Michael Wang", title: "Relay Applications Engineer", bio: "Michael has designed hundreds of relay circuits." },
      publishDate: "2024-03-15",
      content: { introduction: "Proper relay circuit design ensures reliability.", sections: [] },
      faeInsights: { painPoints: "Relay coil transient suppression", commonMistakes: "Missing flyback diodes", keyConsiderations: "Coil drive, contact protection", recommendations: "Include protection circuits" },
      customerCases: [],
      faqs: []
    }
  ]
};

const supportPath = path.join(brandDir, 'support.json');
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('Created support.json with 5 articles');

console.log('\n=== After Fix ===');
console.log(`Categories: ${productsData.categories.length}`);
productsData.categories.forEach(cat => {
  console.log(`  - ${cat.name}: ${cat.products ? cat.products.length : 0} products`);
});
console.log(`Solutions: ${solutionsData.solutions.length}`);
console.log(`Articles: ${supportData.articles.length}`);
console.log('\nFix complete!');
