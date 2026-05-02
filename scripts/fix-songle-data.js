#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'songle');

console.log('=== Creating Songle Data Files ===\n');

// Create products.json
const productsData = {
  seoTitle: "Songle Relay Products | Power, Signal, Automotive Relays | LiTong",
  seoDescription: "Explore Songle's comprehensive relay portfolio including power relays, signal relays, automotive relays, and solid state relays for industrial and automotive applications.",
  seoKeywords: ["Songle relay", "power relay", "signal relay", "automotive relay", "solid state relay"],
  faqs: [
    {
      question: "What relay types does Songle offer?",
      answer: "Songle offers four main relay types: Power Relays for high-current switching, Signal Relays for PCB applications, Automotive Relays for vehicle electronics, and Solid State Relays for silent operation.",
      decisionGuide: "Browse our relay categories to find the right type for your application.",
      keywords: ["relay types", "Songle products", "relay selection"]
    }
  ],
  categories: [
    {
      id: "power-relays",
      slug: "songle-power-relays",
      name: "Power Relays",
      description: "High-current electromechanical relays for industrial and appliance applications.",
      longDescription: "Songle power relays provide reliable switching for high-current applications up to 40A.",
      parameters: ["Contact Rating", "Coil Voltage", "Contact Configuration", "Dielectric Strength"],
      applications: ["Industrial Control", "Home Appliances", "HVAC Systems"],
      series: ["SLA", "SLC", "SLE"],
      selectionGuide: {
        title: "Power Relay Selection Guide",
        description: "Guide for selecting power relays.",
        articleId: "power-relay-selection",
        articleLink: "/songle/support/power-relay-selection.html"
      },
      faqs: [],
      products: [
        {
          partNumber: "SLA-05VDC-SL-C",
          name: "30A Power Relay",
          shortDescription: "High-power 30A relay with 5V coil for industrial applications.",
          descriptionParagraphs: ["The SLA series is a high-power relay for industrial applications.", "Features 30A contact rating and SPDT configuration.", "Ideal for motor control and heating applications."],
          specifications: { "Contact Rating": "30A", "Coil Voltage": "5V DC", "Contact Config": "SPDT", "Dielectric Strength": "4000V", "Package": "PCB Mount" },
          features: ["High current capacity", "Low coil power", "High dielectric strength", "Long electrical life"],
          applications: ["Motor control", "Heating systems", "Industrial equipment"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Reliable high-power relay for industrial use.", highlight: "30A high-current relay" },
          faqs: []
        },
        {
          partNumber: "SLA-12VDC-SL-A",
          name: "30A Power Relay 12V",
          shortDescription: "30A power relay with 12V coil for automotive and industrial use.",
          descriptionParagraphs: ["12V version of the popular SLA series relay.", "Compatible with automotive and industrial 12V systems.", "Features same 30A rating with higher coil voltage."],
          specifications: { "Contact Rating": "30A", "Coil Voltage": "12V DC", "Contact Config": "SPST-NO", "Dielectric Strength": "4000V", "Package": "PCB Mount" },
          features: ["12V coil operation", "High current", "Automotive compatible", "Reliable operation"],
          applications: ["Automotive systems", "Industrial 12V", "Battery systems"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Popular choice for 12V applications.", highlight: "12V automotive relay" },
          faqs: []
        },
        {
          partNumber: "SLC-24VDC-SL-C",
          name: "40A High-Power Relay",
          shortDescription: "Heavy-duty 40A relay with 24V coil for industrial control.",
          descriptionParagraphs: ["The SLC series handles up to 40A for heavy loads.", "Features robust construction for industrial environments.", "24V coil suitable for industrial control systems."],
          specifications: { "Contact Rating": "40A", "Coil Voltage": "24V DC", "Contact Config": "SPDT", "Dielectric Strength": "5000V", "Package": "PCB Mount" },
          features: ["40A capacity", "Industrial grade", "High dielectric strength", "Durable construction"],
          applications: ["Heavy machinery", "Industrial control", "Power distribution"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Heavy-duty relay for demanding applications.", highlight: "40A industrial relay" },
          faqs: []
        },
        {
          partNumber: "SLE-48VDC-SL-A",
          name: "20A Power Relay 48V",
          shortDescription: "20A relay with 48V coil for telecom and industrial systems.",
          descriptionParagraphs: ["The SLE series for 48V DC applications.", "Suitable for telecom and industrial control systems.", "Features 20A rating with high coil voltage."],
          specifications: { "Contact Rating": "20A", "Coil Voltage": "48V DC", "Contact Config": "SPST-NO", "Dielectric Strength": "4000V", "Package": "PCB Mount" },
          features: ["48V operation", "Telecom compatible", "20A capacity", "Reliable switching"],
          applications: ["Telecom equipment", "48V systems", "Industrial control"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Good choice for 48V applications.", highlight: "48V power relay" },
          faqs: []
        }
      ]
    },
    {
      id: "signal-relays",
      slug: "songle-signal-relays",
      name: "Signal Relays",
      description: "Compact PCB-mount relays for signal switching applications.",
      longDescription: "Songle signal relays provide reliable signal switching in compact packages.",
      parameters: ["Contact Rating", "Coil Voltage", "Contact Config", "Size"],
      applications: ["PCB Switching", "Test Equipment", "Communication"],
      series: ["SRA", "SRB"],
      selectionGuide: {
        title: "Signal Relay Selection Guide",
        description: "Guide for selecting signal relays.",
        articleId: "signal-relay-selection",
        articleLink: "/songle/support/signal-relay-selection.html"
      },
      faqs: [],
      products: [
        {
          partNumber: "SRA-05VDC-CL",
          name: "Signal Relay 5V",
          shortDescription: "Compact signal relay with 5V coil for PCB applications.",
          descriptionParagraphs: ["The SRA series is a compact signal relay.", "Features low profile and light weight.", "Ideal for PCB mounting in space-constrained designs."],
          specifications: { "Contact Rating": "2A", "Coil Voltage": "5V DC", "Contact Config": "DPDT", "Size": "15x10x10mm", "Package": "PCB Mount" },
          features: ["Compact size", "Low power coil", "DPDT contacts", "High sensitivity"],
          applications: ["PCB switching", "Test equipment", "Consumer electronics"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Compact relay for signal applications.", highlight: "Miniature signal relay" },
          faqs: []
        },
        {
          partNumber: "SRA-12VDC-CL",
          name: "Signal Relay 12V",
          shortDescription: "12V signal relay for industrial and automotive PCB applications.",
          descriptionParagraphs: ["12V version of the compact SRA signal relay.", "Suitable for 12V control systems.", "Features same compact footprint."],
          specifications: { "Contact Rating": "2A", "Coil Voltage": "12V DC", "Contact Config": "DPDT", "Size": "15x10x10mm", "Package": "PCB Mount" },
          features: ["12V operation", "Compact size", "DPDT contacts", "Reliable switching"],
          applications: ["Industrial control", "Automotive PCB", "Signal routing"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Popular for 12V signal applications.", highlight: "12V signal relay" },
          faqs: []
        },
        {
          partNumber: "SRB-05VDC-SL-C",
          name: "Ultra-Mini Signal Relay",
          shortDescription: "Ultra-compact signal relay for high-density PCB designs.",
          descriptionParagraphs: ["The SRB series offers ultra-compact size.", "Features smaller footprint than standard relays.", "Ideal for high-density PCB layouts."],
          specifications: { "Contact Rating": "1A", "Coil Voltage": "5V DC", "Contact Config": "SPDT", "Size": "10x6x5mm", "Package": "SMD" },
          features: ["Ultra-compact", "SMD package", "Low power", "High density"],
          applications: ["High-density PCBs", "Portable devices", "Miniature equipment"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Smallest relay for space-critical designs.", highlight: "Ultra-mini relay" },
          faqs: []
        },
        {
          partNumber: "SRB-03VDC-SL-C",
          name: "Low-Voltage Signal Relay",
          shortDescription: "3V signal relay for battery-powered applications.",
          descriptionParagraphs: ["Low-voltage signal relay for 3V systems.", "Features ultra-low coil power consumption.", "Ideal for battery-powered devices."],
          specifications: { "Contact Rating": "1A", "Coil Voltage": "3V DC", "Contact Config": "SPDT", "Size": "10x6x5mm", "Package": "SMD" },
          features: ["3V operation", "Ultra-low power", "Compact size", "Battery friendly"],
          applications: ["Battery devices", "IoT sensors", "Low-voltage systems"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Perfect for battery-powered designs.", highlight: "3V low-power relay" },
          faqs: []
        }
      ]
    },
    {
      id: "automotive-relays",
      slug: "songle-automotive-relays",
      name: "Automotive Relays",
      description: "Automotive-grade relays for vehicle electronics applications.",
      longDescription: "Songle automotive relays meet stringent automotive standards for reliable vehicle operation.",
      parameters: ["Contact Rating", "Coil Voltage", "Temperature Range", "Vibration"],
      applications: ["Vehicle Electronics", "Power Distribution", "Lighting Control"],
      series: ["SV", "SA"],
      selectionGuide: {
        title: "Automotive Relay Selection Guide",
        description: "Guide for selecting automotive relays.",
        articleId: "automotive-relay-selection",
        articleLink: "/songle/support/automotive-relay-selection.html"
      },
      faqs: [],
      products: [
        {
          partNumber: "SV-12VDC-SL-A",
          name: "Automotive Relay 40A",
          shortDescription: "40A automotive relay with high vibration resistance.",
          descriptionParagraphs: ["The SV series is designed for automotive applications.", "Features high vibration and shock resistance.", "Meets automotive quality standards."],
          specifications: { "Contact Rating": "40A", "Coil Voltage": "12V DC", "Temp Range": "-40°C to +125°C", "Vibration": "20G", "Package": "Plug-in" },
          features: ["Automotive grade", "High vibration resistance", "Wide temperature", "40A capacity"],
          applications: ["Vehicle power", "Engine control", "Lighting systems"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Reliable automotive relay for harsh environments.", highlight: "Automotive-grade relay" },
          faqs: []
        },
        {
          partNumber: "SV-24VDC-SL-A",
          name: "Truck Relay 24V",
          shortDescription: "24V automotive relay for heavy-duty truck applications.",
          descriptionParagraphs: ["24V version for commercial vehicle applications.", "Features same robust construction as 12V version.", "Suitable for trucks and heavy equipment."],
          specifications: { "Contact Rating": "40A", "Coil Voltage": "24V DC", "Temp Range": "-40°C to +125°C", "Vibration": "20G", "Package": "Plug-in" },
          features: ["24V operation", "Heavy-duty", "Commercial vehicle", "High reliability"],
          applications: ["Truck electronics", "Commercial vehicles", "Heavy equipment"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Standard for 24V vehicle applications.", highlight: "24V truck relay" },
          faqs: []
        },
        {
          partNumber: "SA-12VDC-SL-C",
          name: "Mini Automotive Relay",
          shortDescription: "Compact automotive relay for space-constrained vehicle applications.",
          descriptionParagraphs: ["The SA series offers compact automotive relay.", "Features smaller size while maintaining reliability.", "Ideal for modern vehicle electronics."],
          specifications: { "Contact Rating": "20A", "Coil Voltage": "12V DC", "Temp Range": "-40°C to +105°C", "Vibration": "15G", "Package": "Mini Plug-in" },
          features: ["Compact size", "Automotive grade", "20A capacity", "Reliable"],
          applications: ["Modern vehicles", "Compact spaces", "Body electronics"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Compact solution for modern vehicles.", highlight: "Mini automotive relay" },
          faqs: []
        },
        {
          partNumber: "SV-12VDC-DL-C",
          name: "Dual Automotive Relay",
          shortDescription: "Dual-contact automotive relay for redundant switching.",
          descriptionParagraphs: ["Features dual contacts for safety-critical applications.", "Provides redundancy for important vehicle functions.", "Meets automotive safety standards."],
          specifications: { "Contact Rating": "30A per contact", "Coil Voltage": "12V DC", "Temp Range": "-40°C to +125°C", "Vibration": "20G", "Package": "Plug-in" },
          features: ["Dual contacts", "Redundancy", "Safety critical", "Automotive grade"],
          applications: ["Safety systems", "Critical functions", "Redundant switching"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Essential for safety-critical applications.", highlight: "Dual-contact relay" },
          faqs: []
        }
      ]
    },
    {
      id: "solid-state-relays",
      slug: "songle-solid-state-relays",
      name: "Solid State Relays",
      description: "Semiconductor-based relays for silent, long-life switching.",
      longDescription: "Songle solid state relays provide silent operation and extended life compared to electromechanical relays.",
      parameters: ["Load Current", "Control Voltage", "Load Voltage", "Switching Type"],
      applications: ["Industrial Control", "Heating Systems", "Silent Switching"],
      series: ["SSR", "SSRD"],
      selectionGuide: {
        title: "Solid State Relay Selection Guide",
        description: "Guide for selecting solid state relays.",
        articleId: "ssr-selection",
        articleLink: "/songle/support/ssr-selection.html"
      },
      faqs: [],
      products: [
        {
          partNumber: "SSR-25DA",
          name: "DC-AC Solid State Relay",
          shortDescription: "25A DC-controlled AC solid state relay for industrial heating.",
          descriptionParagraphs: ["The SSR-25DA is a DC-controlled AC solid state relay.", "Features silent operation and long life.", "Ideal for heating and industrial control."],
          specifications: { "Load Current": "25A", "Control Voltage": "3-32V DC", "Load Voltage": "24-380V AC", "Switching": "Zero Cross", "Package": "Panel Mount" },
          features: ["Silent operation", "Long life", "Zero cross switching", "No moving parts"],
          applications: ["Heating control", "Industrial automation", "Silent switching"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Reliable SSR for industrial heating.", highlight: "25A solid state relay" },
          faqs: []
        },
        {
          partNumber: "SSR-40DA",
          name: "High-Current SSR 40A",
          shortDescription: "40A DC-AC solid state relay for heavy industrial loads.",
          descriptionParagraphs: ["High-current SSR for demanding industrial applications.", "Features 40A capacity with zero-cross switching.", "Robust design for continuous operation."],
          specifications: { "Load Current": "40A", "Control Voltage": "3-32V DC", "Load Voltage": "24-480V AC", "Switching": "Zero Cross", "Package": "Panel Mount" },
          features: ["40A capacity", "High voltage", "Zero cross", "Industrial grade"],
          applications: ["Heavy heating", "Motor control", "Industrial loads"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Heavy-duty SSR for industrial use.", highlight: "40A high-current SSR" },
          faqs: []
        },
        {
          partNumber: "SSR-10DD",
          name: "DC-DC Solid State Relay",
          shortDescription: "10A DC-DC solid state relay for DC load switching.",
          descriptionParagraphs: ["DC-to-DC solid state relay for DC load control.", "Features fast switching and long life.", "Suitable for DC motor and lamp control."],
          specifications: { "Load Current": "10A", "Control Voltage": "3-32V DC", "Load Voltage": "5-60V DC", "Switching": "Random", "Package": "PCB Mount" },
          features: ["DC switching", "Fast response", "Long life", "Compact"],
          applications: ["DC motor control", "DC lamp switching", "Battery systems"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Good choice for DC load switching.", highlight: "DC-DC solid state relay" },
          faqs: []
        },
        {
          partNumber: "SSRD-25DA",
          name: "Din Rail SSR",
          shortDescription: "DIN rail mount solid state relay for panel installations.",
          descriptionParagraphs: ["DIN rail mountable SSR for easy panel installation.", "Features 25A capacity with indicator LED.", "Standard DIN rail mounting for industrial panels."],
          specifications: { "Load Current": "25A", "Control Voltage": "3-32V DC", "Load Voltage": "24-380V AC", "Mounting": "DIN Rail", "Package": "DIN Module" },
          features: ["DIN rail mount", "LED indicator", "25A capacity", "Easy installation"],
          applications: ["Control panels", "Industrial cabinets", "Distribution systems"],
          faeReview: { author: "Michael Wang", title: "Relay FAE", content: "Convenient DIN rail mounting solution.", highlight: "DIN rail SSR" },
          faqs: []
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('Created products.json with 4 categories, 4 products each');

// Create solutions.json
const solutionsData = {
  seoTitle: "Songle Relay Solutions - Industrial & Automotive Applications | LiTong",
  seoDescription: "Explore Songle relay application solutions for industrial automation, automotive systems, HVAC control, and smart home.",
  seoKeywords: ["Songle solutions", "relay applications", "industrial control", "automotive relay system"],
  faqs: [
    {
      question: "What application solutions does Songle provide?",
      answer: "Songle provides relay solutions for industrial automation, automotive systems, HVAC control, and smart home applications.",
      decisionGuide: "Browse our solutions to find the right application for your project.",
      keywords: ["Songle solutions", "relay applications", "switching systems"]
    }
  ],
  solutions: [
    {
      id: "industrial-control-panel",
      title: "Industrial Control Panel Solution",
      slug: "industrial-control-panel",
      summary: "Complete relay solution for industrial control panels using Songle power and signal relays.",
      description: "This solution provides reliable switching for industrial control panels with a mix of power and signal relays.",
      industry: "Industrial Automation",
      applications: ["Control Panels", "PLC Systems", "Motor Control"],
      components: ["SLA-12VDC-SL-A", "SRA-12VDC-CL", "SSR-25DA"],
      features: ["High reliability", "Easy maintenance", "Flexible configuration"],
      benefits: ["Long service life", "Reduced downtime", "Cost-effective"]
    },
    {
      id: "automotive-power-distribution",
      title: "Automotive Power Distribution System",
      slug: "automotive-power-distribution",
      summary: "Automotive relay solution for vehicle power distribution and control.",
      description: "Complete automotive relay system for power distribution, lighting control, and accessory switching.",
      industry: "Automotive",
      applications: ["Power Distribution", "Lighting Control", "Body Electronics"],
      components: ["SV-12VDC-SL-A", "SA-12VDC-SL-C", "SV-24VDC-SL-A"],
      features: ["Automotive grade", "High vibration resistance", "Wide temperature"],
      benefits: ["Reliable operation", "Long life", "Safety certified"]
    },
    {
      id: "hvac-control-system",
      title: "HVAC Control System",
      slug: "hvac-control-system",
      summary: "Relay solution for heating, ventilation, and air conditioning control.",
      description: "Complete HVAC control solution using solid state and electromechanical relays for quiet, reliable operation.",
      industry: "Building Automation",
      applications: ["HVAC Control", "Heating Systems", "Climate Control"],
      components: ["SSR-25DA", "SLA-24VDC-SL-C", "SSR-40DA"],
      features: ["Silent operation", "High current capacity", "Long life"],
      benefits: ["Quiet operation", "Energy efficient", "Low maintenance"]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('Created solutions.json with 3 solutions');

// Create support.json
const supportData = {
  seoTitle: "Songle Relay Technical Support - Relay Selection & Application | LiTong",
  seoDescription: "Access Songle relay technical documentation, selection guides, application notes, and expert FAE support.",
  seoKeywords: ["Songle support", "relay selection guide", "technical documentation", "relay application"],
  faqs: [
    {
      question: "What technical support is available for Songle relays?",
      answer: "LiTong provides comprehensive technical support including relay selection guidance, application notes, schematic review, and FAE assistance.",
      decisionGuide: "Contact our FAE team for personalized relay selection support.",
      keywords: ["technical support", "FAE", "relay selection"]
    }
  ],
  articles: [
    {
      id: "power-relay-selection",
      title: "Power Relay Selection Guide",
      slug: "power-relay-selection",
      category: "Product Selection",
      tags: ["power relay", "selection guide", "relay rating", "contact rating"],
      summary: "Comprehensive guide for selecting power relays based on current, voltage, and application requirements.",
      author: { name: "Michael Wang", title: "Relay Applications Engineer", bio: "Michael has 15+ years experience in relay applications and industrial control." },
      publishDate: "2024-01-15",
      content: { introduction: "Selecting the right power relay is critical for reliable switching.", sections: [] },
      faeInsights: { painPoints: "Customers often undersize relays for their application", commonMistakes: "Ignoring inrush current requirements", keyConsiderations: "Load type, current, voltage, environment", recommendations: "Always include safety margin in relay selection" },
      customerCases: [],
      faqs: []
    },
    {
      id: "signal-relay-selection",
      title: "Signal Relay Selection Guide",
      slug: "signal-relay-selection",
      category: "Product Selection",
      tags: ["signal relay", "PCB relay", "low-level switching", "contact material"],
      summary: "Guide for selecting signal relays for PCB applications and low-level switching.",
      author: { name: "Michael Wang", title: "Relay Applications Engineer", bio: "Michael specializes in signal relay applications." },
      publishDate: "2024-02-01",
      content: { introduction: "Signal relays require special consideration for low-level signals.", sections: [] },
      faeInsights: { painPoints: "Contact reliability with low-level signals", commonMistakes: "Using power relays for signals", keyConsiderations: "Signal level, contact material, environment", recommendations: "Use proper signal relays for low-level applications" },
      customerCases: [],
      faqs: []
    },
    {
      id: "automotive-relay-selection",
      title: "Automotive Relay Selection Guide",
      slug: "automotive-relay-selection",
      category: "Product Selection",
      tags: ["automotive relay", "vehicle relay", "AEC-Q200", "automotive grade"],
      summary: "Guide for selecting automotive relays meeting vehicle industry standards.",
      author: { name: "Michael Wang", title: "Relay Applications Engineer", bio: "Michael has extensive experience in automotive relay applications." },
      publishDate: "2024-02-15",
      content: { introduction: "Automotive relays must meet stringent quality and reliability standards.", sections: [] },
      faeInsights: { painPoints: "Meeting automotive qualification requirements", commonMistakes: "Using industrial relays in vehicles", keyConsiderations: "Temperature, vibration, automotive standards", recommendations: "Always use automotive-grade relays for vehicles" },
      customerCases: [],
      faqs: []
    },
    {
      id: "ssr-selection",
      title: "Solid State Relay Selection Guide",
      slug: "ssr-selection",
      category: "Product Selection",
      tags: ["solid state relay", "SSR", "silent switching", "semiconductor relay"],
      summary: "Guide for selecting solid state relays for silent, long-life switching applications.",
      author: { name: "Michael Wang", title: "Relay Applications Engineer", bio: "Michael specializes in solid state relay applications." },
      publishDate: "2024-03-01",
      content: { introduction: "Solid state relays offer unique advantages for specific applications.", sections: [] },
      faeInsights: { painPoints: "Heat dissipation in SSR applications", commonMistakes: "Inadequate heat sinking", keyConsiderations: "Load type, switching frequency, heat", recommendations: "Proper heat sinking is critical for SSR reliability" },
      customerCases: [],
      faqs: []
    },
    {
      id: "relay-application-guidelines",
      title: "Relay Application Design Guidelines",
      slug: "relay-application-guidelines",
      category: "Application Design",
      tags: ["relay design", "coil drive", "contact protection", "relay circuit"],
      summary: "Comprehensive design guidelines for relay applications including coil drive and contact protection.",
      author: { name: "Michael Wang", title: "Relay Applications Engineer", bio: "Michael has designed hundreds of relay control circuits." },
      publishDate: "2024-03-15",
      content: { introduction: "Proper relay circuit design ensures reliable operation and long life.", sections: [] },
      faeInsights: { painPoints: "Relay coil transient suppression", commonMistakes: "Missing flyback diodes", keyConsiderations: "Coil drive, contact protection, layout", recommendations: "Always include proper protection circuits" },
      customerCases: [],
      faqs: []
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('Created support.json with 5 articles');

console.log('\n=== Summary ===');
console.log('Categories: 4 (4 products each)');
console.log('Solutions: 3');
console.log('Articles: 5');
console.log('\nSongle data files created successfully!');
