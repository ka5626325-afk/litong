#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'silergy');

console.log('=== Creating Silergy Data Files ===\n');

// Create products.json
const productsData = {
  seoTitle: "Silergy Products | DC-DC Converters, LED Drivers & USB PD | LiTong",
  seoDescription: "Explore Silergy's comprehensive product portfolio including high-efficiency DC-DC converters, AC-DC controllers, LED drivers, and USB PD solutions.",
  seoKeywords: ["Silergy products", "DC-DC converter", "LED driver", "USB PD controller", "power management IC"],
  faqs: [
    {
      question: "What product categories does Silergy offer?",
      answer: "Silergy offers four main product categories: DC-DC Converters including buck, boost, and buck-boost converters; AC-DC Controllers for offline power supplies; LED Drivers for lighting applications; and USB Power Delivery solutions for fast charging.",
      decisionGuide: "Browse our product categories to find the right solution for your application.",
      keywords: ["Silergy categories", "product portfolio", "power management"]
    }
  ],
  categories: [
    {
      id: "dc-dc-converters",
      slug: "silergy-dc-dc-converters",
      name: "DC-DC Converters",
      description: "High-efficiency DC-DC converters for portable and industrial applications.",
      longDescription: "Silergy DC-DC converters offer industry-leading efficiency and reliability for demanding applications.",
      parameters: ["Input Voltage", "Output Voltage", "Output Current", "Efficiency", "Switching Frequency"],
      applications: ["Portable Electronics", "Industrial Equipment", "Communication Systems"],
      series: ["SY8", "SY7", "SY6"],
      selectionGuide: {
        title: "DC-DC Converter Selection Guide",
        description: "Guide for selecting DC-DC converters.",
        articleId: "dc-dc-selection",
        articleLink: "/silergy/support/dc-dc-selection.html"
      },
      faqs: [],
      products: [
        {
          partNumber: "SY8088",
          name: "1A Synchronous Buck Converter",
          shortDescription: "High-efficiency 1A synchronous buck converter with 2.5-5.5V input range.",
          descriptionParagraphs: ["The SY8088 is a high-efficiency synchronous buck converter.", "It features internal power switches and compensation.", "Ideal for portable electronics applications."],
          specifications: { "Input Voltage": "2.5V-5.5V", "Output Current": "1A", "Efficiency": "Up to 95%", "Switching Frequency": "1MHz", "Package": "SOT-23-5" },
          features: ["High efficiency", "Internal compensation", "Small footprint", "Low ripple"],
          applications: ["Smartphones", "Tablets", "Portable devices"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Excellent efficiency in a small package.", highlight: "High-efficiency buck converter" },
          faqs: []
        },
        {
          partNumber: "SY8089",
          name: "2A Synchronous Buck Converter",
          shortDescription: "High-efficiency 2A synchronous buck converter for higher power applications.",
          descriptionParagraphs: ["The SY8089 delivers 2A output current with high efficiency.", "Features internal switches and comprehensive protection.", "Suitable for tablets and industrial applications."],
          specifications: { "Input Voltage": "2.5V-5.5V", "Output Current": "2A", "Efficiency": "Up to 94%", "Switching Frequency": "1MHz", "Package": "SOT-23-5" },
          features: ["2A output current", "High efficiency", "Current limit protection", "Thermal shutdown"],
          applications: ["Tablets", "Set-top boxes", "Industrial equipment"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Reliable 2A converter with good thermal performance.", highlight: "2A high-efficiency converter" },
          faqs: []
        },
        {
          partNumber: "SY7152",
          name: "3A Synchronous Buck Converter",
          shortDescription: "High-current 3A synchronous buck converter with adjustable output.",
          descriptionParagraphs: ["The SY7152 provides 3A output current for demanding loads.", "Features adjustable output voltage and excellent load regulation.", "Ideal for high-power portable applications."],
          specifications: { "Input Voltage": "2.7V-5.5V", "Output Current": "3A", "Efficiency": "Up to 93%", "Switching Frequency": "1.5MHz", "Package": "DFN-10" },
          features: ["3A output capability", "Adjustable output", "Excellent transient response", "Power good indicator"],
          applications: ["High-power tablets", "Industrial controllers", "Gaming devices"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Powerful 3A converter with excellent performance.", highlight: "3A high-current capability" },
          faqs: []
        },
        {
          partNumber: "SY7208",
          name: "Boost Converter",
          shortDescription: "High-efficiency boost converter for battery-powered applications.",
          descriptionParagraphs: ["The SY7208 is a synchronous boost converter.", "Ideal for generating higher voltages from battery sources.", "Features low quiescent current for battery life."],
          specifications: { "Input Voltage": "0.9V-5V", "Output Voltage": "5V", "Output Current": "1A", "Efficiency": "Up to 92%", "Package": "SOT-23-6" },
          features: ["Low input voltage operation", "High efficiency", "Low quiescent current", "True shutdown"],
          applications: ["Battery boost", "LED drivers", "USB OTG"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Excellent boost converter for battery apps.", highlight: "Low-voltage boost capability" },
          faqs: []
        }
      ]
    },
    {
      id: "ac-dc-controllers",
      slug: "silergy-ac-dc-controllers",
      name: "AC-DC Controllers",
      description: "High-efficiency offline controllers for power adapters and chargers.",
      longDescription: "Silergy AC-DC controllers provide efficient power conversion for offline applications.",
      parameters: ["Input Voltage", "Output Power", "Topology", "Efficiency", "Standby Power"],
      applications: ["Power Adapters", "Chargers", "Appliance Power"],
      series: ["SY5", "SY6"],
      selectionGuide: {
        title: "AC-DC Controller Selection Guide",
        description: "Guide for selecting AC-DC controllers.",
        articleId: "ac-dc-selection",
        articleLink: "/silergy/support/ac-dc-selection.html"
      },
      faqs: [],
      products: [
        {
          partNumber: "SY50133",
          name: "PWM Controller",
          shortDescription: "High-efficiency PWM controller for flyback converters up to 65W.",
          descriptionParagraphs: ["The SY50133 is a high-performance PWM controller.", "Features green mode operation for low standby power.", "Suitable for adapters up to 65W."],
          specifications: { "Input Voltage": "85V-265V AC", "Max Power": "65W", "Switching Frequency": "65kHz", "Standby Power": "<75mW", "Package": "SOP-8" },
          features: ["Green mode operation", "Low standby power", "Built-in protections", "Frequency jitter"],
          applications: ["Power adapters", "Chargers", "Auxiliary supplies"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Reliable PWM controller with good efficiency.", highlight: "Low standby power" },
          faqs: []
        },
        {
          partNumber: "SY50282",
          name: "Primary-Side Controller",
          shortDescription: "Primary-side regulation controller eliminating optocoupler need.",
          descriptionParagraphs: ["The SY50282 provides primary-side regulation.", "Eliminates need for optocoupler and secondary feedback.", "Reduces BOM cost and improves reliability."],
          specifications: { "Input Voltage": "85V-265V AC", "Max Power": "12W", "CC/CV Control": "Yes", "Efficiency": ">85%", "Package": "SOP-7" },
          features: ["Primary-side regulation", "No optocoupler needed", "Built-in CC/CV", "Low BOM cost"],
          applications: ["Chargers", "Adapters", "LED drivers"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Cost-effective solution without optocoupler.", highlight: "Primary-side regulation" },
          faqs: []
        },
        {
          partNumber: "SY50103",
          name: "QR Flyback Controller",
          shortDescription: "Quasi-resonant flyback controller for high-efficiency adapters.",
          descriptionParagraphs: ["The SY50103 uses quasi-resonant switching.", "Reduces switching losses and EMI.", "Ideal for high-efficiency power supplies."],
          specifications: { "Input Voltage": "85V-265V AC", "Max Power": "45W", "Topology": "QR Flyback", "Efficiency": ">90%", "Package": "SOP-8" },
          features: ["Quasi-resonant operation", "Low EMI", "High efficiency", " valley switching"],
          applications: ["High-efficiency adapters", "LED drivers", "Industrial power"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Excellent efficiency with QR operation.", highlight: "Quasi-resonant switching" },
          faqs: []
        },
        {
          partNumber: "SY5018",
          name: "Sync Rectifier Controller",
          shortDescription: "Synchronous rectifier controller for high-efficiency secondary side.",
          descriptionParagraphs: ["The SY5018 controls external MOSFET for synchronous rectification.", "Replaces diode rectifier for higher efficiency.", "Supports multiple topologies."],
          specifications: { "Output Voltage": "5V-20V", "Switching Frequency": "Up to 200kHz", "Turn-on Delay": "<50ns", "Package": "SOT-23-6" },
          features: ["High efficiency", "Fast switching", "Low EMI", "Universal application"],
          applications: ["High-efficiency adapters", "Power supplies", "Chargers"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Great SR controller for efficiency improvement.", highlight: "Synchronous rectification" },
          faqs: []
        }
      ]
    },
    {
      id: "led-drivers",
      slug: "silergy-led-drivers",
      name: "LED Drivers",
      description: "High-efficiency LED drivers for backlighting and general lighting.",
      longDescription: "Silergy LED drivers provide efficient and reliable power for LED applications.",
      parameters: ["Input Voltage", "LED Current", "LED Voltage", "Efficiency", "Dimming"],
      applications: ["LCD Backlight", "General Lighting", "Automotive Lighting"],
      series: ["SY7", "SY8"],
      selectionGuide: {
        title: "LED Driver Selection Guide",
        description: "Guide for selecting LED drivers.",
        articleId: "led-driver-selection",
        articleLink: "/silergy/support/led-driver-selection.html"
      },
      faqs: [],
      products: [
        {
          partNumber: "SY7201",
          name: "LED Backlight Driver",
          shortDescription: "High-efficiency WLED backlight driver for LCD displays.",
          descriptionParagraphs: ["The SY7201 drives series-connected WLEDs.", "Features high efficiency and PWM dimming.", "Ideal for smartphone and tablet displays."],
          specifications: { "Input Voltage": "2.7V-5.5V", "LED Current": "30mA", "Output Voltage": "Up to 40V", "Efficiency": "Up to 90%", "Package": "SOT-23-6" },
          features: ["High voltage output", "PWM dimming", "High efficiency", "Small package"],
          applications: ["Smartphone backlight", "Tablet displays", "Portable LCDs"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Reliable backlight driver with good dimming.", highlight: "High-voltage LED driver" },
          faqs: []
        },
        {
          partNumber: "SY7310",
          name: "Multi-String LED Driver",
          shortDescription: "Multi-string LED driver for large display backlighting.",
          descriptionParagraphs: ["The SY7310 drives multiple LED strings.", "Features current matching and fault protection.", "Suitable for TV and monitor backlighting."],
          specifications: { "Input Voltage": "9V-28V", "Channels": "4", "Current per Channel": "120mA", "Matching": "±2%", "Package": "QFN-24" },
          features: ["4-channel output", "Current matching", "Fault protection", "High brightness"],
          applications: ["TV backlight", "Monitor backlight", "Digital signage"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Good multi-channel driver for large displays.", highlight: "Multi-string LED driver" },
          faqs: []
        },
        {
          partNumber: "SY7585",
          name: "Buck LED Driver",
          shortDescription: "High-efficiency buck LED driver for general lighting.",
          descriptionParagraphs: ["The SY7585 is a buck topology LED driver.", "Features analog and PWM dimming.", "Ideal for general lighting applications."],
          specifications: { "Input Voltage": "6V-60V", "LED Current": "1A", "Efficiency": "Up to 95%", "Dimming": "Analog/PWM", "Package": "SOP-8" },
          features: ["Wide input range", "High efficiency", "Flexible dimming", "Robust protection"],
          applications: ["General lighting", "Street lights", "Industrial lighting"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Versatile LED driver for lighting apps.", highlight: "High-voltage LED driver" },
          faqs: []
        },
        {
          partNumber: "SY7590",
          name: "Linear LED Driver",
          shortDescription: "Low-cost linear LED driver for simple applications.",
          descriptionParagraphs: ["The SY7590 provides simple linear LED driving.", "Features current regulation and thermal foldback.", "Cost-effective for low-power applications."],
          specifications: { "Input Voltage": "3V-40V", "LED Current": "100mA", "Dropout": "500mV", "Package": "SOT-89" },
          features: ["Simple design", "Low cost", "Thermal protection", "Small package"],
          applications: ["Indicator LEDs", "Low-power lighting", "Automotive indicators"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Simple and cost-effective LED driver.", highlight: "Low-cost linear driver" },
          faqs: []
        }
      ]
    },
    {
      id: "usb-pd",
      slug: "silergy-usb-pd",
      name: "USB Power Delivery",
      description: "USB PD controllers and power switches for fast charging.",
      longDescription: "Silergy USB PD solutions enable fast charging for modern devices.",
      parameters: ["PD Version", "Max Power", "Port Count", "Protocols", "Protection"],
      applications: ["Fast Chargers", "Power Banks", "USB-C Hubs"],
      series: ["SY9"],
      selectionGuide: {
        title: "USB PD Selection Guide",
        description: "Guide for selecting USB PD solutions.",
        articleId: "usb-pd-selection",
        articleLink: "/silergy/support/usb-pd-selection.html"
      },
      faqs: [],
      products: [
        {
          partNumber: "SY9303",
          name: "USB PD Controller",
          shortDescription: "USB PD 3.0 controller with PPS support for fast charging.",
          descriptionParagraphs: ["The SY9303 is a USB PD 3.0 controller.", "Supports PPS for precise voltage control.", "Ideal for fast chargers up to 65W."],
          specifications: { "PD Version": "3.0", "Max Power": "65W", "PPS": "Yes", "Protocols": "PD/QC/AFC", "Package": "QFN-16" },
          features: ["PD 3.0 compliant", "PPS support", "Multi-protocol", "High power"],
          applications: ["Fast chargers", "Power banks", "USB-C docks"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Excellent PD controller with PPS.", highlight: "PD 3.0 with PPS" },
          faqs: []
        },
        {
          partNumber: "SY9305",
          name: "Dual-Port PD Controller",
          shortDescription: "Dual-port USB PD controller with intelligent power sharing.",
          descriptionParagraphs: ["The SY9305 controls two independent PD ports.", "Features intelligent power allocation between ports.", "Supports simultaneous fast charging."],
          specifications: { "PD Version": "3.0", "Ports": "2", "Total Power": "65W", "Power Share": "Intelligent", "Package": "QFN-24" },
          features: ["Dual-port control", "Smart power share", "Independent ports", "High integration"],
          applications: ["Multi-port chargers", "Charging stations", "USB hubs"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Great dual-port solution with smart sharing.", highlight: "Dual-port PD controller" },
          faqs: []
        },
        {
          partNumber: "SY9101",
          name: "Load Switch",
          shortDescription: "Low-resistance load switch for USB power path control.",
          descriptionParagraphs: ["The SY9101 provides power path switching.", "Features low on-resistance and soft start.", "Protects against shorts and overloads."],
          specifications: { "Input Voltage": "2.5V-5.5V", "Current": "3A", "On-Resistance": "30mΩ", "Soft Start": "Yes", "Package": "SOT-23-5" },
          features: ["Low resistance", "Soft start", "Short protection", "Small package"],
          applications: ["Power path control", "Load switching", "Port protection"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Reliable load switch with low resistance.", highlight: "Low-Rds load switch" },
          faqs: []
        },
        {
          partNumber: "SY9201",
          name: "Power MUX",
          shortDescription: "Power multiplexer for seamless source switching.",
          descriptionParagraphs: ["The SY9201 multiplexes between power sources.", "Features break-before-make switching.", "Ideal for power bank applications."],
          specifications: { "Input Voltage": "2.5V-5.5V", "Current": "3A", "Switch Time": "<100μs", "Package": "QFN-12" },
          features: ["Seamless switching", "Low loss", "Fast transition", "Compact size"],
          applications: ["Power banks", "Source switching", "Backup power"],
          faeReview: { author: "David Chen", title: "Power FAE", content: "Effective power mux for multi-source apps.", highlight: "Power multiplexer" },
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
  seoTitle: "Silergy Solutions - Power Management Applications | LiTong",
  seoDescription: "Explore Silergy application solutions for consumer electronics, industrial power, LED lighting, and USB charging.",
  seoKeywords: ["Silergy solutions", "power management design", "LED driver application", "USB PD solution"],
  faqs: [
    {
      question: "What application solutions does Silergy provide?",
      answer: "Silergy provides solutions for consumer electronics power, industrial power systems, LED lighting, and USB charging applications.",
      decisionGuide: "Browse our solutions to find the right application for your project.",
      keywords: ["Silergy solutions", "applications", "power design"]
    }
  ],
  solutions: [
    {
      id: "smartphone-power",
      title: "Smartphone Power Management Solution",
      slug: "smartphone-power",
      summary: "Complete power solution for smartphones using Silergy DC-DC converters and USB PD.",
      description: "This solution provides efficient power management for smartphones with multiple buck converters and USB PD support.",
      industry: "Consumer Electronics",
      applications: ["Smartphones", "Mobile Devices"],
      components: ["SY8088", "SY8089", "SY9303"],
      features: ["High efficiency", "Small footprint", "Fast charging"],
      benefits: ["Long battery life", "Compact design", "Quick charging"]
    },
    {
      id: "led-lighting-system",
      title: "LED Lighting Power Solution",
      slug: "led-lighting-system",
      summary: "High-efficiency LED driver solution for general lighting applications.",
      description: "Complete LED lighting solution with AC-DC conversion and LED driver for efficient illumination.",
      industry: "Lighting",
      applications: ["General Lighting", "Commercial Lighting"],
      components: ["SY50133", "SY7585"],
      features: ["High efficiency", "Dimming support", "Long lifetime"],
      benefits: ["Energy savings", "Reliable operation", "Flexible control"]
    },
    {
      id: "fast-charger",
      title: "65W Fast Charger Solution",
      slug: "fast-charger",
      summary: "High-efficiency 65W USB PD fast charger using Silergy AC-DC and PD controller.",
      description: "Complete fast charger solution supporting USB PD 3.0 with PPS for optimal charging performance.",
      industry: "Consumer Electronics",
      applications: ["Fast Chargers", "Power Adapters"],
      components: ["SY50133", "SY9303", "SY5018"],
      features: ["USB PD 3.0", "PPS support", "High efficiency"],
      benefits: ["Fast charging", "Universal compatibility", "Compact size"]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('Created solutions.json with 3 solutions');

// Create support.json
const supportData = {
  seoTitle: "Silergy Technical Support - Power Management Resources | LiTong",
  seoDescription: "Access Silergy technical documentation, application notes, selection guides, and expert FAE support.",
  seoKeywords: ["Silergy support", "technical documentation", "application notes", "power design guide"],
  faqs: [
    {
      question: "What technical support is available for Silergy products?",
      answer: "LiTong provides comprehensive technical support including reference designs, application notes, schematic review, and FAE assistance.",
      decisionGuide: "Contact our FAE team for personalized technical support.",
      keywords: ["technical support", "FAE", "design assistance"]
    }
  ],
  articles: [
    {
      id: "dc-dc-selection",
      title: "DC-DC Converter Selection Guide",
      slug: "dc-dc-selection",
      category: "Product Selection",
      tags: ["DC-DC", "buck converter", "selection guide", "power management"],
      summary: "Comprehensive guide for selecting DC-DC converters based on input/output requirements and efficiency needs.",
      author: { name: "David Chen", title: "Power Applications Engineer", bio: "David specializes in power electronics design with 10+ years experience." },
      publishDate: "2024-01-15",
      content: { introduction: "Selecting the right DC-DC converter is critical for power system performance.", sections: [] },
      faeInsights: { painPoints: "Customers often struggle with efficiency vs size trade-offs", commonMistakes: "Ignoring thermal considerations", keyConsiderations: "Input range, output current, efficiency", recommendations: "Use selection tools and reference designs" },
      customerCases: [],
      faqs: []
    },
    {
      id: "ac-dc-selection",
      title: "AC-DC Controller Selection Guide",
      slug: "ac-dc-selection",
      category: "Product Selection",
      tags: ["AC-DC", "flyback", "controller", "power supply"],
      summary: "Guide for selecting AC-DC controllers for offline power supply applications.",
      author: { name: "David Chen", title: "Power Applications Engineer", bio: "David specializes in offline power supply design." },
      publishDate: "2024-02-01",
      content: { introduction: "AC-DC controller selection affects efficiency, EMI, and cost.", sections: [] },
      faeInsights: { painPoints: "EMI compliance challenges", commonMistakes: "Inadequate snubber design", keyConsiderations: "Power level, topology, efficiency", recommendations: "Follow reference designs for EMI compliance" },
      customerCases: [],
      faqs: []
    },
    {
      id: "led-driver-selection",
      title: "LED Driver Selection Guide",
      slug: "led-driver-selection",
      category: "Product Selection",
      tags: ["LED driver", "lighting", "backlight", "selection"],
      summary: "Guide for selecting LED drivers for backlighting and general lighting applications.",
      author: { name: "David Chen", title: "Power Applications Engineer", bio: "David has extensive experience in LED driver design." },
      publishDate: "2024-02-15",
      content: { introduction: "LED driver selection impacts light quality and system efficiency.", sections: [] },
      faeInsights: { painPoints: "Flicker and dimming performance", commonMistakes: "Incorrect current setting", keyConsiderations: "LED current, voltage, dimming", recommendations: "Test with actual LED loads" },
      customerCases: [],
      faqs: []
    },
    {
      id: "usb-pd-selection",
      title: "USB PD Solution Selection Guide",
      slug: "usb-pd-selection",
      category: "Product Selection",
      tags: ["USB PD", "fast charging", "Type-C", "power delivery"],
      summary: "Guide for selecting USB PD controllers for fast charging applications.",
      author: { name: "David Chen", title: "Power Applications Engineer", bio: "David specializes in USB PD applications." },
      publishDate: "2024-03-01",
      content: { introduction: "USB PD enables fast and flexible charging for modern devices.", sections: [] },
      faeInsights: { painPoints: "Protocol compatibility issues", commonMistakes: "Insufficient power path design", keyConsiderations: "PD version, power level, protocols", recommendations: "Test with multiple device types" },
      customerCases: [],
      faqs: []
    },
    {
      id: "power-design-guidelines",
      title: "Power Management Design Guidelines",
      slug: "power-design-guidelines",
      category: "Application Design",
      tags: ["power design", "guidelines", "layout", "thermal"],
      summary: "Comprehensive design guidelines for power management circuits including layout and thermal considerations.",
      author: { name: "David Chen", title: "Power Applications Engineer", bio: "David has designed hundreds of power supply solutions." },
      publishDate: "2024-03-15",
      content: { introduction: "Good power supply design requires attention to layout, thermal, and component selection.", sections: [] },
      faeInsights: { painPoints: "Thermal management in compact designs", commonMistakes: "Poor layout causing noise", keyConsiderations: "Layout, thermal, component selection", recommendations: "Follow manufacturer guidelines closely" },
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
console.log('\nSilergy data files created successfully!');
