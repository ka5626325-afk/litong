#!/usr/bin/env node

/**
 * 创建 Samwha 品牌剩余数据文件
 * solutions.json, support.json, news.json
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'samwha');

// solutions.json
const solutionsData = {
  seoTitle: "Samwha Capacitor Solutions | Automotive, Industrial, Consumer Applications",
  seoDescription: "Explore Samwha capacitor solutions for automotive electronics, industrial power systems, and consumer applications. Technical expertise and BOM optimization.",
  seoKeywords: [
    "Samwha solutions distributor",
    "Samwha automotive capacitor solution",
    "capacitor selection guide",
    "Samwha industrial power solution"
  ],
  faqs: [
    {
      question: "What industries does Samwha serve with capacitor solutions?",
      "answer": "Samwha provides capacitor solutions across multiple industries: Automotive - AEC-Q200 qualified capacitors for ECUs, LED drivers, powertrain, and 48V hybrid systems. Full PPAP support available. Industrial Power - Aluminum electrolytic and film capacitors for motor drives, inverters, power supplies, and welding equipment. Long-life series for reduced maintenance. Consumer Electronics - Cost-effective capacitors for appliances, LED lighting, TVs, and power adapters. High-volume production support. Telecommunications - Low-ESR capacitors for base stations, servers, and network equipment. High reliability for 24/7 operation. Renewable Energy - Film capacitors for solar inverters and wind power systems. Long lifetime for reduced O&M costs. Our FAE team has deep expertise in each industry and can provide application-specific recommendations.",
      decisionGuide: "Contact our industry specialists to discuss your specific application requirements and capacitor selection.",
      keywords: ["Samwha industry solutions", "capacitor application expertise"]
    },
    {
      question: "How can Samwha capacitors help reduce my BOM costs?",
      "answer": "Samwha capacitors offer several ways to reduce BOM costs: Competitive Pricing - Korean manufacturing provides excellent quality-to-price ratio, typically 20-30% lower than Japanese brands with comparable quality. Long Lifetime - Extended life capacitors (15,000+ hours) reduce warranty costs and field failures. Lower Total Cost of Ownership - Higher reliability means fewer replacements and service calls. Standardization - Using Samwha across multiple product lines reduces qualification costs and inventory complexity. Technical Support - Our FAE team helps optimize capacitor selection to avoid over-specification, reducing unnecessary costs. Volume Pricing - High-volume production allows competitive pricing for large orders. Supply Chain Efficiency - Single source for multiple capacitor types simplifies procurement and reduces administrative costs. For a typical industrial power supply, switching to Samwha capacitors can reduce capacitor BOM cost by 25-35% while maintaining or improving reliability.",
      decisionGuide: "Request a BOM cost analysis to see how Samwha capacitors can reduce your component costs.",
      keywords: ["Samwha BOM cost reduction", "capacitor cost optimization"]
    },
    {
      question: "What technical support does Samwha provide for solution development?",
      "answer": "Samwha provides comprehensive technical support through our authorized distributors: Application Engineering - FAE team with deep expertise in power electronics, automotive, and industrial applications. Capacitor Selection - Assistance with selecting optimal capacitors based on voltage, ripple current, temperature, and lifetime requirements. Spice Models - Simulation models for circuit design and analysis. Thermal Analysis - Calculation of expected temperatures and lifetime for your specific operating conditions. BOM Optimization - Review of capacitor specifications to identify cost reduction opportunities without compromising reliability. Sample Support - Evaluation samples and sample kits for prototype testing. On-Site Support - Factory visits and on-site technical assistance for critical projects. Failure Analysis - Support in case of field failures, including root cause analysis and corrective actions. Our technical team has an average of 15+ years experience in capacitor applications across various industries.",
      decisionGuide: "Contact our technical support team to connect with an FAE specializing in your application area.",
      keywords: ["Samwha technical support", "capacitor application engineering"]
    },
    {
      question: "Does Samwha support high-volume production requirements?",
      "answer": "Yes, Samwha is well-equipped to support high-volume production: Manufacturing Capacity - Samwha produces over 2 billion capacitors annually across multiple factories. Capacity can support large volume ramps. Lead Time Management - For high-volume orders, we offer scheduled deliveries and VMI (Vendor Managed Inventory) programs to ensure continuous supply. Quality Consistency - Automated production lines with SPC (Statistical Process Control) ensure consistent quality across large volumes. Traceability - Complete lot traceability for quality management and regulatory compliance. Flexibility - Ability to support both scheduled production and demand spikes. Global Logistics - Distribution centers in Asia, Europe, and Americas for efficient delivery. For automotive customers, we support JIT (Just-In-Time) delivery and sequenced deliveries to match production schedules. Contact our sales team to discuss your volume requirements and supply chain optimization.",
      decisionGuide: "Contact our sales team for high-volume pricing and supply chain programs tailored to your production needs.",
      keywords: ["Samwha high volume production", "capacitor supply chain"]
    },
    {
      question: "What is the typical lead time for Samwha capacitor solutions?",
      "answer": "Lead times vary by product type and order volume: Standard Products from Stock - Popular series available for immediate delivery from distributor inventory. Standard Production Lead Time - 4-6 weeks for most aluminum electrolytic capacitors. - 6-8 weeks for film capacitors. - 8-10 weeks for solid polymer capacitors. Automotive-Grade Parts - Add 2-4 weeks for additional testing and documentation. Custom Specifications - 12-16 weeks for custom development and qualification. High-Volume Orders - For large volume commitments, we offer scheduled deliveries with shorter lead times. VMI Programs - Vendor Managed Inventory can reduce your effective lead time to 1-2 days. Lead times can vary based on current demand and capacity. Contact our sales team for current lead times and to discuss inventory programs for your specific needs. We recommend maintaining 8-12 weeks of buffer stock for critical components.",
      decisionGuide: "Contact our sales team for current lead times and to discuss VMI or scheduled delivery programs.",
      keywords: ["Samwha lead time", "capacitor delivery schedule"]
    }
  ],
  solutions: [
    {
      id: "automotive-electronics-solutions",
      title: "Automotive Electronics Solutions",
      description: "AEC-Q200 qualified capacitors for automotive ECUs, LED drivers, powertrain, and 48V hybrid systems",
      longDescription: "Samwha provides comprehensive capacitor solutions for automotive electronics, from standard 12V systems to 48V mild-hybrid applications. Our AEC-Q200 qualified capacitors are manufactured in IATF 16949 certified facilities with full PPAP documentation support. The portfolio includes high-temperature series rated to 150°C for extreme under-hood applications, long-life series for 15+ year vehicle lifetime, and low-ESR types for decoupling applications. Key applications include engine control units (ECUs), LED headlamp and taillight drivers, electric power steering systems, battery management systems, and onboard chargers for electric vehicles. Our automotive FAE team provides application-specific recommendations, thermal analysis, and lifetime calculations to ensure reliable operation throughout the vehicle's service life. Full traceability and qualification documentation support automotive production requirements.",
      benefits: [
        "AEC-Q200 qualified for automotive reliability",
        "IATF 16949 certified manufacturing",
        "Temperature ratings to 150°C for extreme environments",
        "Full PPAP documentation support",
        "Complete lot traceability",
        "15+ year vehicle lifetime design"
      ],
      coreAdvantages: [
        {
          title: "Automotive Qualification",
          description: "Full AEC-Q200 qualification including temperature cycling, shock, vibration, and humidity bias testing. Proven reliability in millions of vehicles worldwide."
        },
        {
          title: "High Temperature Performance",
          description: "Capacitors rated to 125°C and 150°C for under-hood applications. Advanced electrolyte formulation maintains stable performance at extreme temperatures."
        },
        {
          title: "Long Vehicle Lifetime",
          description: "Designed for 15+ year vehicle life with conservative derating. Arrhenius-based lifetime calculations ensure reliable operation throughout service life."
        },
        {
          title: "Comprehensive Documentation",
          description: "Full PPAP support including design records, FMEA, control plans, and qualification reports. Complete traceability for automotive quality management."
        }
      ],
      applications: [
        "Engine Control Units (ECUs)",
        "LED Headlamp and Taillight Drivers",
        "Electric Power Steering Systems",
        "Battery Management Systems",
        "48V Mild-Hybrid Systems",
        "Onboard Chargers for EVs",
        "Transmission Control Units",
        "ADAS Systems"
      ],
      image: "/assets/solutions/automotive-electronics.jpg",
      featured: true,
      seoTitle: "Samwha Automotive Capacitor Solutions | AEC-Q200 Qualified Components",
      seoDescription: "AEC-Q200 qualified capacitors for automotive electronics. Samwha solutions for ECUs, LED drivers, powertrain, and 48V hybrid systems. Full PPAP support.",
      seoKeywords: [
        "Samwha automotive capacitor solution",
        "AEC-Q200 capacitor distributor",
        "automotive ECU capacitor selection",
        "48V hybrid capacitor solution"
      ],
      faqs: [
        {
          question: "What AEC-Q200 qualification does Samwha provide for automotive capacitors?",
          "answer": "Samwha automotive capacitors undergo comprehensive AEC-Q200 Rev E qualification testing: High Temperature Exposure - 1000 hours at maximum rated temperature with voltage applied. Temperature Cycling - 1000 cycles from -40°C to +125°C (or -55°C to +150°C for high-temp series). Mechanical Shock - 100G half-sine pulse per MIL-STD-202 Method 213. Vibration - Random vibration 5-2000Hz per MIL-STD-202 Method 214. Humidity Bias - 1000 hours at 85°C/85% RH with rated voltage. High Temperature Operating Life - 1000 hours at rated temperature with ripple current. All testing is performed per AEC-Q200 requirements with full documentation. Qualification reports are available for customer review and PPAP submission.",
          decisionGuide: "Request AEC-Q200 qualification reports for your quality documentation and customer requirements.",
          keywords: ["AEC-Q200 qualification", "automotive capacitor testing"]
        },
        {
          question: "How do I select the right capacitor temperature rating for automotive applications?",
          "answer": "Temperature rating selection for automotive applications: 125°C Rated - Suitable for most automotive applications including interior electronics, LED drivers in moderate locations, and body control modules. Use when maximum ambient temperature is below 100°C. 150°C Rated - Required for extreme under-hood locations near engines, exhaust systems, or turbochargers. Use when ambient temperature exceeds 100°C or for 48V mild-hybrid systems with high power density. Design Guidelines: Select capacitor with temperature rating at least 20°C above maximum expected ambient temperature. Consider self-heating from ripple current (typically 5-15°C rise). For safety-critical applications, use 30°C margin. Our FAE team can perform thermal analysis for your specific application to recommend appropriate temperature rating.",
          decisionGuide: "Use 125°C for most applications. Use 150°C for extreme under-hood or 48V hybrid systems. Contact FAE for thermal analysis.",
          keywords: ["automotive temperature rating", "capacitor temperature selection"]
        }
      ],
      faeInsights: {
        summary: "Our automotive FAE team has supported hundreds of automotive electronics projects across powertrain, body electronics, and lighting applications. Key insights: Temperature is the primary lifetime driver - every 10°C reduction doubles capacitor life. For 15-year vehicle life, design for case temperature 25-30°C below rated temperature. Ripple current causes self-heating - measure actual case temperature during worst-case operation. Voltage derating is critical - use 60-70% derating for automotive to handle load dump transients and improve reliability. Automotive capacitors cost 20-40% more than industrial grade, but field failure costs far exceed the component cost difference. Always specify AEC-Q200 qualified parts for automotive.",
        recommendations: [
          "Design for case temperature 25-30°C below rated for 15-year life",
          "Measure actual case temperature during worst-case operation",
          "Use 60-70% voltage derating for automotive applications",
          "Specify AEC-Q200 qualified capacitors for all automotive electronics",
          "Request PPAP Level 3 for production parts"
        ],
        contactInfo: {
          name: "Thomas Park",
          title: "Senior FAE - Automotive Electronics",
          email: "automotive.fae@example.com",
          phone: "+1-555-0100"
        }
      },
      customerCases: [
        {
          title: "LED Headlamp Driver for European OEM",
          industry: "Automotive Lighting",
          challenge: "Customer needed capacitors for LED headlamp driver operating at 105°C under-hood with 15-year vehicle life requirement. Previous supplier had field failures due to insufficient temperature margin.",
          solution: "Specified Samwha WH series 150°C rated capacitors with 45°C temperature margin. Implemented 50% voltage derating and optimized thermal design with heat sink. Provided full PPAP documentation.",
          result: "Zero field failures in 3 years of production. Capacitor case temperature maintained at 95°C, providing 20+ year expected lifetime. Customer expanded Samwha usage to taillight and interior lighting applications.",
          quote: "The 150°C rating and comprehensive PPAP support gave us confidence for this safety-critical application. Samwha's technical support was excellent throughout the development process.",
          author: "Lead Engineer, Tier 1 Automotive Supplier"
        },
        {
          title: "48V Mild-Hybrid Battery Management System",
          industry: "Automotive Powertrain",
          challenge: "48V BMS required capacitors for 48V to 12V DC-DC converter with high ripple current and extreme temperature cycling. System operates at 130°C peak during fast charging.",
          solution: "Selected Samwha WH-A series 150°C capacitors with high ripple current rating. Designed parallel configuration to distribute ripple current and reduce self-heating. Provided AEC-Q200 qualification data and thermal models.",
          result: "Capacitor temperature maintained below 120°C during peak loads. System passed all OEM qualification tests including 1000 temperature cycles. Now in production for multiple 48V hybrid vehicle programs.",
          quote: "Samwha's 150°C capacitors were the only solution that could handle our extreme temperature requirements. The technical support and simulation models accelerated our design process.",
          author: "Power Electronics Manager, Automotive OEM"
        }
      ],
      relatedProducts: [
        {
          name: "WA Series Automotive Capacitors",
          link: "/samwha/products/automotive-capacitors.html",
          description: "AEC-Q200 qualified capacitors for 12V automotive systems"
        },
        {
          name: "WH-A Series High-Temp Capacitors",
          link: "/samwha/products/automotive-capacitors.html",
          description: "150°C rated capacitors for extreme under-hood applications"
        }
      ],
      resources: [
        {
          title: "Automotive Capacitor Selection Guide",
          link: "/samwha/support/automotive-capacitor-selection-guide.html",
          type: "Technical Guide"
        },
        {
          title: "AEC-Q200 Qualification Report",
          link: "#",
          type: "Qualification Document"
        }
      ],
      bomList: [
        {
          category: "Input Filtering",
          products: [
            { partNumber: "WA series 220µF 50V", quantity: 2, description: "Input filter capacitors" },
            { partNumber: "WA series 47µF 50V", quantity: 4, description: "Decoupling capacitors" }
          ]
        },
        {
          category: "Output Filtering",
          products: [
            { partNumber: "WA series 470µF 50V", quantity: 2, description: "Output filter capacitors" },
            { partNumber: "WA series 100µF 50V", quantity: 4, description: "High-frequency decoupling" }
          ]
        }
      ],
      technicalSpecs: {
        voltageRange: "25V to 100V",
        capacitanceRange: "47µF to 1000µF",
        temperatureRange: "-55°C to +150°C",
        lifetime: "5,000 to 15,000 hours at rated temperature",
        qualification: "AEC-Q200 Rev E",
        certification: "IATF 16949, ISO 9001"
      }
    },
    {
      id: "industrial-power-solutions",
      title: "Industrial Power Solutions",
      description: "High-reliability capacitors for motor drives, inverters, power supplies, and industrial automation systems",
      longDescription: "Samwha provides capacitor solutions for industrial power applications including motor drives, variable frequency drives (VFDs), switching power supplies, welding equipment, and industrial automation systems. The portfolio includes long-life aluminum electrolytic capacitors (15,000+ hours), high-ripple-current film capacitors for DC-link applications, and solid polymer capacitors for high-frequency DC-DC converters. Key features include high ripple current capability for demanding inverter applications, extended lifetime for reduced maintenance in hard-to-access installations, and high-temperature ratings for harsh industrial environments. Our industrial FAE team provides application support including capacitor selection, lifetime calculations, thermal analysis, and BOM optimization. For high-volume industrial customers, we offer scheduled deliveries and VMI programs to ensure continuous production.",
      benefits: [
        "Long lifetime 15,000+ hours for reduced maintenance",
        "High ripple current capability for inverter applications",
        "Film capacitors for DC-link with 20+ year life",
        "High temperature ratings to 125°C",
        "Cost-effective Korean manufacturing",
        "VMI and scheduled delivery programs"
      ],
      coreAdvantages: [
        {
          title: "Extended Lifetime",
          description: "Long-life series rated to 15,000 hours at 105°C, providing 10-15 year service life in typical industrial applications. Reduces maintenance costs and downtime."
        },
        {
          title: "High Ripple Current",
          description: "Film capacitors handle 8A+ ripple current for demanding inverter applications. Low ESR minimizes power dissipation and heating."
        },
        {
          title: "Industrial Reliability",
          description: "Proven performance in harsh industrial environments including factories, mines, and outdoor installations. Robust construction withstands vibration and temperature extremes."
        },
        {
          title: "Cost Optimization",
          description: "Korean manufacturing provides excellent quality-to-price ratio. Technical support helps optimize specifications to avoid over-engineering and reduce costs."
        }
      ],
      applications: [
        "Variable Frequency Drives (VFDs)",
        "Motor Drive Inverters",
        "Switching Power Supplies",
        "Welding Equipment",
        "Industrial Automation",
        "Solar Inverters",
        "UPS Systems",
        "Battery Chargers"
      ],
      image: "/assets/solutions/industrial-power.jpg",
      featured: true,
      seoTitle: "Samwha Industrial Power Capacitor Solutions | Motor Drives, Inverters",
      seoDescription: "High-reliability capacitors for industrial power applications. Samwha solutions for motor drives, inverters, and power supplies. Long lifetime and high ripple current.",
      seoKeywords: [
        "Samwha industrial capacitor solution",
        "motor drive capacitor distributor",
        "inverter DC-link capacitor selection",
        "VFD capacitor solution"
      ],
      faqs: [
        {
          question: "What capacitor types are recommended for motor drive inverters?",
          "answer": "Motor drive inverters typically require multiple capacitor types: DC-Link Capacitors - Film capacitors (MPP series) are preferred for long life and high ripple current. Electrolytic capacitors can be used for cost-sensitive applications. Recommended: 10-50µF per kW of motor power. Bus Capacitors - Large electrolytic capacitors (1000-10000µF) for energy storage and low-frequency filtering. Use long-life series (WL) for 10+ year service life. Snubber Capacitors - Film capacitors (MPS series) for IGBT protection. Low inductance design for high dv/dt applications. Control Power Capacitors - Aluminum electrolytic or polymer for control circuit power supplies. Consider temperature and lifetime requirements. Our FAE team can recommend specific part numbers based on your inverter power rating, switching frequency, and operating conditions.",
          decisionGuide: "Contact our FAE team for inverter capacitor recommendations based on your specific power rating and operating conditions.",
          keywords: ["motor drive capacitor selection", "inverter DC-link capacitor"]
        },
        {
          question: "How do I calculate capacitor lifetime for industrial applications?",
          "answer": "Capacitor lifetime calculation for industrial applications uses the Arrhenius equation: L2 = L1 × 2^((T1-T2)/10) × Kv, where L1 is rated lifetime at temperature T1, L2 is expected lifetime at operating temperature T2, Kv is voltage derating factor (typically 1.5-2.0 for 80% voltage derating). Example calculation for WL series capacitor: Rated: 15,000 hours at 105°C, Operating: 75°C with 80% voltage derating. L2 = 15,000 × 2^((105-75)/10) × 1.5 = 15,000 × 8 × 1.5 = 180,000 hours (20.5 years). For industrial applications, we recommend: Design for 10-15 year service life, Use 80% voltage derating, Measure actual case temperature during operation, Consider ripple current self-heating (typically 5-15°C). Our FAE team provides detailed lifetime calculations for your specific application.",
          decisionGuide: "Contact our FAE team for detailed lifetime calculations based on your operating conditions.",
          keywords: ["capacitor lifetime calculation", "industrial capacitor reliability"]
        }
      ],
      faeInsights: {
        summary: "Our industrial FAE team has supported thousands of motor drive, inverter, and power supply designs. Key insights: DC-link film capacitors are preferred over electrolytics for inverters operating 10+ years. The higher initial cost is offset by elimination of replacement costs. Electrolytic capacitor lifetime is dominated by temperature - every 10°C reduction doubles life. For 10-year service life, design for case temperature below 75°C. Ripple current causes self-heating that is often overlooked - measure case temperature during full-load operation. Voltage derating significantly extends life - use 80% derating for industrial applications. Korean capacitors offer comparable quality to Japanese brands at 20-30% lower cost. Standardization on Samwha across product lines reduces qualification costs.",
        recommendations: [
          "Use film capacitors for DC-link in long-life inverter applications",
          "Design for case temperature below 75°C for 10-year electrolytic capacitor life",
          "Measure actual case temperature during full-load operation",
          "Use 80% voltage derating to extend capacitor lifetime",
          "Consider total cost of ownership, not just component cost"
        ],
        contactInfo: {
          name: "David Park",
          title: "Senior FAE - Industrial Power",
          email: "industrial.fae@example.com",
          phone: "+1-555-0101"
        }
      },
      customerCases: [
        {
          title: "VFD Retrofit for Steel Mill",
          industry: "Industrial Automation",
          challenge: "Steel mill needed to retrofit 50 VFDs with new capacitors. Existing electrolytic capacitors failing after 5 years due to high ambient temperature (65°C) and inadequate ripple current rating. Downtime cost $50,000 per hour.",
          solution: "Replaced with Samwha WL series long-life capacitors with 15,000-hour rating. Added forced air cooling to reduce case temperature to 55°C. Implemented VMI program to ensure spare availability.",
          result: "Capacitor life extended from 5 years to projected 18 years. Zero unplanned downtime due to capacitor failures in 4 years since retrofit. Customer expanded Samwha usage to all VFDs in facility.",
          quote: "The long-life capacitors and improved cooling eliminated our capacitor failure issues. The VMI program ensures we always have spares on hand. Excellent technical support throughout the project.",
          author: "Maintenance Manager, Steel Mill"
        },
        {
          title: "Solar Inverter DC-Link Optimization",
          industry: "Renewable Energy",
          challenge: "Solar inverter manufacturer needed DC-link capacitors for 100kW three-phase inverter. Required 20-year service life to match panel warranty. Electrolytic capacitors could not meet lifetime requirement.",
          solution: "Specified Samwha MPP film capacitors with 200,000+ hour expected lifetime. Designed parallel configuration with 6 capacitors for required capacitance and ripple current. Provided thermal analysis and lifetime calculations.",
          result: "Inverter passed 20-year accelerated life testing. Capacitor bank operates at 65°C with 35-year projected lifetime. Now in production for residential and commercial solar inverters.",
          quote: "The film capacitors were the key to achieving our 20-year warranty target. Samwha's technical support and detailed analysis gave us confidence in the design.",
          author: "Director of Engineering, Solar Inverter Manufacturer"
        }
      ],
      relatedProducts: [
        {
          name: "WL Series Long-Life Capacitors",
          link: "/samwha/products/aluminum-electrolytic.html",
          description: "15,000-hour aluminum electrolytic capacitors for industrial power supplies"
        },
        {
          name: "MPP Series Film Capacitors",
          link: "/samwha/products/film-capacitors.html",
          description: "Metallized polypropylene capacitors for DC-link applications"
        }
      ],
      resources: [
        {
          title: "Industrial Capacitor Selection Guide",
          link: "/samwha/support/industrial-capacitor-selection-guide.html",
          type: "Technical Guide"
        },
        {
          title: "Capacitor Lifetime Calculator",
          link: "#",
          type: "Design Tool"
        }
      ],
      bomList: [
        {
          category: "DC-Link",
          products: [
            { partNumber: "MPP 10µF 630V", quantity: 6, description: "DC-link film capacitors" }
          ]
        },
        {
          category: "Control Power",
          products: [
            { partNumber: "WL series 4700µF 50V", quantity: 2, description: "Control supply filter" },
            { partNumber: "WL series 1000µF 100V", quantity: 2, description: "Auxiliary supply filter" }
          ]
        }
      ],
      technicalSpecs: {
        voltageRange: "50V to 630V",
        capacitanceRange: "10µF to 10,000µF",
        temperatureRange: "-40°C to +125°C",
        lifetime: "15,000 to 200,000+ hours depending on type",
        rippleCurrent: "Up to 8A RMS for film capacitors",
        certification: "ISO 9001, ISO 14001"
      }
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2), 'utf8');
console.log('✅ Created solutions.json with 2 solutions');

// support.json
const supportData = {
  seoTitle: "Samwha Technical Support | Capacitor Selection Guides, Application Notes",
  seoDescription: "Access Samwha technical resources including capacitor selection guides, application notes, FAQs, and design tools. Expert FAE support available.",
  seoKeywords: [
    "Samwha technical support",
    "capacitor selection guide",
    "Samwha application notes",
    "capacitor design tools"
  ],
  faqs: [
    {
      question: "What technical resources does Samwha provide?",
      "answer": "Samwha provides comprehensive technical resources: Selection Guides - Detailed guides for aluminum electrolytic, solid polymer, film, and automotive capacitors. Include selection criteria, parameter explanations, and application recommendations. Application Notes - Technical papers on specific topics including lifetime calculation, ripple current derating, thermal management, and reliability. Spice Models - Simulation models for circuit design and analysis. Available for major capacitor series. FAQs - Extensive FAQ database covering common questions about capacitor selection, application, and reliability. Design Tools - Online calculators for lifetime prediction, ripple current capability, and parameter conversion. Video Tutorials - Training videos on capacitor basics, selection, and application. All resources are available through our website or by contacting our technical support team.",
      decisionGuide: "Browse our technical resources or contact our FAE team for specific application support.",
      keywords: ["Samwha technical resources", "capacitor design tools"]
    },
    {
      question: "How can I contact Samwha FAE for technical support?",
      "answer": "You can contact our FAE team through multiple channels: Email - Send technical questions to technical.support@example.com. Typical response time is 24 hours. Phone - Call our technical hotline at +1-555-0100 during business hours (8 AM - 6 PM EST). Online Form - Submit technical questions through our website contact form. Live Chat - Available on our website during business hours for quick questions. On-Site Support - For critical projects, our FAEs can visit your facility for hands-on support. When contacting us, please provide: Application description (power supply, inverter, etc.), Operating conditions (voltage, current, temperature), Specific questions or issues, Timeline for your project. Our FAE team has an average of 15+ years experience in capacitor applications across automotive, industrial, and consumer electronics.",
      decisionGuide: "Contact our FAE team for application-specific capacitor selection and design support.",
      keywords: ["Samwha FAE contact", "technical support"]
    },
    {
      question: "Does Samwha provide Spice models for circuit simulation?",
      "answer": "Yes, Samwha provides Spice models for major capacitor series: Available Models - Aluminum electrolytic capacitors (WH, WL, WD series), Solid polymer capacitors (PH, PK series), Film capacitors (MPP, MPET series). Model Types - Basic RLC model for frequency response simulation, Advanced behavioral model including temperature and DC bias effects, Thermal model for temperature rise calculations. Model Parameters - ESR vs frequency and temperature, ESL (equivalent series inductance), Capacitance vs temperature and DC bias, Leakage current vs temperature. How to Request - Contact our technical support with your specific part numbers. Models are provided as subcircuit files compatible with major Spice simulators (LTspice, PSpice, Multisim). Limitations - Models are representative of typical production units. For critical applications, verify with actual component measurements.",
      decisionGuide: "Contact technical support to request Spice models for your specific capacitor part numbers.",
      keywords: ["Samwha Spice models", "capacitor simulation"]
    },
    {
      question: "What information should I provide for capacitor selection assistance?",
      "answer": "To receive accurate capacitor selection assistance, please provide: Application Information - Circuit type (power supply, inverter, DC-DC converter, etc.), Function (input filter, output filter, DC-link, decoupling), Operating frequency and switching topology. Electrical Parameters - Operating voltage (nominal and maximum), Ripple current (RMS and frequency), Required capacitance or allowed voltage ripple, Inrush current and surge voltage conditions. Environmental Conditions - Ambient temperature range, Cooling method (natural convection, forced air, heat sink), Altitude if above 2000m, Vibration and shock requirements. Reliability Requirements - Required service life, Acceptable failure rate, Certification requirements (AEC-Q200, UL, etc.). Physical Constraints - Available PCB area and height, Mounting orientation, Weight limitations. With this information, our FAE team can recommend optimal capacitor series and part numbers for your application.",
      decisionGuide: "Provide detailed application information for accurate capacitor selection recommendations.",
      keywords: ["capacitor selection assistance", "capacitor specification"]
    }
  ],
  articles: [
    {
      id: "aluminum-electrolytic-selection-guide",
      title: "Aluminum Electrolytic Capacitor Selection Guide",
      summary: "Comprehensive guide to selecting aluminum electrolytic capacitors for power supply and industrial applications",
      content: `## Aluminum Electrolytic Capacitor Selection Guide

### Introduction

Aluminum electrolytic capacitors are widely used in power supplies, motor drives, and industrial equipment due to their high capacitance density and cost-effectiveness. This guide covers key selection parameters and best practices.

### Key Selection Parameters

#### 1. Capacitance and Voltage Rating

**Capacitance Selection:**
- Calculate required capacitance based on allowable voltage ripple
- For input filtering: C = I_ripple / (2 × π × f × V_ripple)
- For output filtering: C = I_load × duty_cycle / (f × V_ripple)
- Include 20% tolerance in calculations

**Voltage Derating:**
- Standard applications: 80% derating (use 80% of rated voltage)
- High-reliability applications: 70% derating
- Automotive applications: 60-70% derating

**Example:** For 24V power supply, use 35V rated capacitor (69% derating)

#### 2. Temperature Rating

**Temperature Range Selection:**
- Standard industrial: 85°C rated
- High-temperature: 105°C or 125°C rated
- Automotive under-hood: 125°C or 150°C rated

**Design Margin:**
- Keep case temperature 20-30°C below rated temperature
- Account for self-heating from ripple current (typically 5-15°C)

#### 3. Lifetime Requirements

**Lifetime Calculation:**
Use Arrhenius equation: L2 = L1 × 2^((T1-T2)/10)

Where:
- L1 = Rated lifetime at temperature T1
- L2 = Expected lifetime at operating temperature T2
- Temperature in °C

**Example:** 10,000 hour capacitor at 105°C, operating at 75°C:
L2 = 10,000 × 2^((105-75)/10) = 10,000 × 8 = 80,000 hours

**Ripple Current Effect:**
- Operating below rated ripple current extends lifetime
- Factor of 1.5x at 50% rated ripple current

#### 4. Ripple Current Capability

**Ripple Current Calculation:**
- Measure or calculate RMS ripple current in application
- Select capacitor with ripple rating > actual ripple current
- Consider frequency - ratings vary with frequency

**Multiple Capacitors:**
- Parallel capacitors to increase total ripple capability
- Ripple current adds directly in parallel
- ESR reduces proportionally

#### 5. Physical Size and Mounting

**Case Size Selection:**
- Larger case size = higher ripple current capability
- Consider PCB space and height constraints
- Ensure adequate spacing for heat dissipation

**Mounting Types:**
- Radial lead: General purpose, PCB mounting
- Snap-in: Power supplies, higher capacitance
- Screw terminal: High capacitance, energy storage

### Application-Specific Recommendations

#### Switching Power Supplies

**Input Filter:**
- Voltage rating: 1.5× maximum input voltage
- Capacitance: Based on hold-up time requirements
- Series: WH or WL for high reliability

**Output Filter:**
- Low ESR critical for output ripple
- Consider polymer capacitors for high-frequency ripple
- Multiple capacitors in parallel for high current

#### Motor Drive Inverters

**DC-Link:**
- Film capacitors preferred for long life
- Electrolytic for cost-sensitive applications
- High ripple current capability required

**Bus Capacitors:**
- Large capacitance for energy storage
- Long-life series (WL) for 10+ year life

### Design Checklist

- [ ] Voltage rating with appropriate derating
- [ ] Capacitance calculated with tolerance
- [ ] Temperature rating with 20-30°C margin
- [ ] Ripple current capability verified
- [ ] Lifetime calculated for application
- [ ] Physical size fits PCB constraints
- [ ] Mounting type appropriate for application
- [ ] Certification requirements (AEC-Q200, UL, etc.)

### Common Mistakes to Avoid

1. **Insufficient voltage derating** - Reduces lifetime and reliability
2. **Ignoring temperature rise** - Self-heating can exceed ratings
3. **Wrong frequency assumption** - Ripple ratings vary with frequency
4. **Overlooking lifetime** - Capacitors wear out, plan for replacement
5. **Inadequate spacing** - Heat buildup reduces lifetime

### Contact Support

For application-specific capacitor selection assistance, contact our FAE team:
- Email: technical.support@example.com
- Phone: +1-555-0100`,
      category: "Selection Guides",
      tags: ["aluminum electrolytic", "selection guide", "power supply"],
      author: {
        name: "David Park",
        title: "Senior FAE - Industrial Power",
        email: "david.park@example.com",
        image: "/assets/team/david-park.jpg"
      },
      publishedDate: "2024-01-15",
      updatedDate: "2024-06-20",
      readTime: "15 min",
      difficulty: "Intermediate",
      faqs: [
        {
          question: "How do I calculate the required capacitance for my power supply?",
          "answer": "For output filter capacitors in buck converters: C = (I_load × duty_cycle) / (f_sw × V_ripple). Where I_load is maximum load current, duty_cycle is switch duty cycle, f_sw is switching frequency, V_ripple is allowable output ripple voltage. For example, 5A load, 50% duty cycle, 100kHz switching, 50mV ripple: C = (5 × 0.5) / (100,000 × 0.05) = 500µF. Include 20% tolerance and consider using multiple capacitors in parallel for high ripple current applications.",
          decisionGuide: "Use the formula C = I×D/(f×Vripple) for buck converters. Contact FAE for other topologies.",
          keywords: ["capacitance calculation", "output filter design"]
        },
        {
          question: "What is the recommended voltage derating for industrial applications?",
          "answer": "For industrial applications, we recommend 80% voltage derating (operate at 80% of rated voltage). This provides: Improved reliability through reduced dielectric stress, Extended lifetime (approximately 2x compared to 100% voltage), Margin for voltage transients and spikes, Consistent with industry best practices. For high-reliability or safety-critical applications, use 70% derating. For automotive, use 60-70% derating to handle load dump transients. Example: For 24V nominal, 30V maximum system voltage, use 50V rated capacitor (60% derating at 30V).",
          decisionGuide: "Use 80% derating for standard industrial, 70% for high-reliability, 60% for automotive.",
          keywords: ["voltage derating", "capacitor reliability"]
        }
      ],
      faeInsights: {
        summary: "The most common issue I see is insufficient voltage derating. Many designers use 100V capacitors on 90V circuits, which severely limits lifetime. Always use at least 80% derating. The second most common issue is ignoring temperature rise from ripple current. Measure case temperature during full-load operation - I've seen cases where ripple current caused 20°C self-heating, reducing lifetime by 75%.",
        recommendations: [
          "Use 80% voltage derating minimum",
          "Measure case temperature during full-load operation",
          "Include 20% tolerance in capacitance calculations",
          "Consider lifetime requirements early in design"
        ],
        contactInfo: {
          name: "David Park",
          title: "Senior FAE - Industrial Power",
          email: "industrial.fae@example.com",
          phone: "+1-555-0101"
        }
      },
      relatedProducts: [
        {
          name: "WH Series High-Temp Capacitors",
          link: "/samwha/products/aluminum-electrolytic.html"
        },
        {
          name: "WL Series Long-Life Capacitors",
          link: "/samwha/products/aluminum-electrolytic.html"
        }
      ],
      customerCases: [
        {
          title: "Power Supply Capacitor Optimization",
          industry: "Industrial Electronics",
          challenge: "Customer's 500W power supply had excessive output ripple and capacitor heating. Original design used underrated capacitors with insufficient ripple current capability.",
          solution: "Recalculated capacitance requirements and selected WL series capacitors with 2x ripple current margin. Implemented 80% voltage derating and improved thermal design.",
          result: "Output ripple reduced by 60%. Capacitor temperature reduced from 95°C to 75°C, extending expected lifetime from 5 years to 18 years.",
          quote: "The selection guide helped us understand the importance of ripple current rating and temperature. Our power supply is now much more reliable.",
          author: "Power Supply Design Engineer"
        }
      ],
      downloads: [
        {
          title: "Capacitor Lifetime Calculator (Excel)",
          url: "#",
          type: "Spreadsheet",
          size: "245 KB"
        },
        {
          title: "Aluminum Electrolytic Capacitor Datasheet",
          url: "#",
          type: "PDF",
          size: "1.2 MB"
        }
      ]
    },
    {
      id: "solid-polymer-selection-guide",
      title: "Solid Polymer Capacitor Selection Guide",
      summary: "Guide to selecting solid polymer capacitors for high-frequency DC-DC converters and CPU power applications",
      content: `## Solid Polymer Capacitor Selection Guide

### Introduction

Solid polymer capacitors offer ultra-low ESR and excellent high-frequency performance, making them ideal for DC-DC converters, CPU power supplies, and high-frequency filtering applications.

### Advantages of Solid Polymer Capacitors

**Ultra-Low ESR:**
- 5-25mΩ typical vs 50-500mΩ for electrolytics
- Reduces output ripple voltage by 10-100x
- Minimizes power dissipation and heating

**High Ripple Current:**
- 2-5x higher ripple current than electrolytics
- Reduced number of capacitors needed
- Lower total cost for high-current applications

**Extended Lifetime:**
- No electrolyte to dry out
- Stable ESR over lifetime
- 10-20 year service life typical

**High Frequency Performance:**
- Low impedance at frequencies above 100kHz
- Ideal for modern high-frequency DC-DC converters
- Better transient response

### Selection Parameters

#### 1. Voltage Rating

**Available Ratings:**
- 2.5V to 125V DC
- Most common: 6.3V, 10V, 16V, 25V, 35V

**Derating Recommendation:**
- Use 80% derating for general applications
- Use 70% derating for high-reliability applications
- Surge rating: 1.15x to 1.2x rated voltage

#### 2. Capacitance Selection

**DC-DC Output Filter:**
C = ΔI_load / (2 × π × f_co × ΔV_out)

Where:
- ΔI_load = load transient current
- f_co = converter crossover frequency
- ΔV_out = allowable voltage deviation

**CPU VRM Applications:**
- Use multiple capacitors in parallel
- Distribute across CPU socket
- Typical: 100-1000µF total per phase

#### 3. ESR Requirements

**Output Ripple Calculation:**
V_ripple = I_ripple × ESR

**Example:**
- I_ripple = 3A RMS
- ESR = 10mΩ
- V_ripple = 3 × 0.01 = 30mV

**Target ESR by Application:**
- CPU VRM: <10mΩ per capacitor
- General DC-DC: <20mΩ
- High-current: <5mΩ (use multiple parallel)

#### 4. Ripple Current Capability

**Parallel Configuration:**
- Total ripple current = sum of individual ratings
- ESR reduces proportionally
- Two capacitors: 2× ripple, ½ ESR

**Thermal Considerations:**
- P = I² × ESR (power dissipation)
- Keep case temperature below 90°C
- Provide adequate cooling

### Application Guidelines

#### CPU Power Supplies (VRM)

**Typical Configuration:**
- 4-8 capacitors in parallel per phase
- Mix of 100µF and 220µF values
- Distribute around CPU socket
- Keep traces short and wide

**Key Considerations:**
- Low ESR critical for transient response
- Use multiple capacitors for current sharing
- Place closest to CPU power pins

#### DC-DC Converters

**Output Filter Design:**
- Calculate required capacitance based on ripple
- Select ESR for target output ripple
- Verify ripple current rating

**Hybrid Configuration:**
- Polymer capacitors for high-frequency ripple
- Electrolytic capacitors for bulk capacitance
- Cost-effective for high-capacitance needs

### Design Checklist

- [ ] Voltage rating with 80% derating
- [ ] Capacitance calculated for ripple/transient
- [ ] ESR verified for output ripple target
- [ ] Ripple current rating adequate
- [ ] Thermal design for case temperature <90°C
- [ ] Parallel configuration if needed
- [ ] Placement optimized for low inductance

### Common Applications

**Recommended for:**
- CPU/GPU power supplies
- High-frequency DC-DC converters (>200kHz)
- Low-voltage high-current applications
- Long-life applications

**Not Recommended for:**
- High-voltage applications (>125V)
- Very large capacitance needs (>1000µF)
- Cost-sensitive high-capacitance applications

### Contact Support

For polymer capacitor selection assistance, contact our FAE team:
- Email: technical.support@example.com
- Phone: +1-555-0100`,
      category: "Selection Guides",
      tags: ["solid polymer", "selection guide", "DC-DC converter"],
      author: {
        name: "Michael Lee",
        title: "Senior FAE - Digital Power",
        email: "michael.lee@example.com",
        image: "/assets/team/michael-lee.jpg"
      },
      publishedDate: "2024-02-10",
      updatedDate: "2024-07-15",
      readTime: "12 min",
      difficulty: "Intermediate",
      faqs: [
        {
          question: "When should I use polymer capacitors vs electrolytic capacitors?",
          "answer": "Use polymer capacitors when: ESR below 20mΩ is required, Operating frequency above 200kHz, Long service life (10+ years) needed, High ripple current density required, Output ripple must be minimized. Use electrolytic capacitors when: Voltage above 125V required, Very large capacitance needed (>1000µF), Cost is primary concern, Low-frequency filtering (<50kHz). For many applications, a hybrid approach works best: polymer capacitors for high-frequency ripple filtering close to the load, electrolytic capacitors for bulk capacitance and energy storage.",
          decisionGuide: "Use polymer for high-frequency, low-ESR applications. Use electrolytic for high-voltage, high-capacitance, cost-sensitive applications.",
          keywords: ["polymer vs electrolytic", "capacitor selection"]
        }
      ],
      faeInsights: {
        summary: "Polymer capacitors are essential for modern CPU VRM designs. The ultra-low ESR (5-10mΩ) is critical for meeting tight voltage regulation requirements during load transients. I always recommend polymer over electrolytic for any DC-DC converter switching above 200kHz. The key design consideration is thermal management - while polymer capacitors handle high ripple current well, they still dissipate power (P = I² × ESR). Keep case temperature below 90°C for maximum lifetime.",
        recommendations: [
          "Use polymer capacitors for CPU VRM and high-frequency DC-DC",
          "Keep case temperature below 90°C",
          "Use multiple capacitors in parallel for high current",
          "Place capacitors closest to load for best transient response"
        ],
        contactInfo: {
          name: "Michael Lee",
          title: "Senior FAE - Digital Power",
          email: "digital.fae@example.com",
          phone: "+1-555-0102"
        }
      },
      relatedProducts: [
        {
          name: "PH Series Polymer Capacitors",
          link: "/samwha/products/solid-polymer.html"
        },
        {
          name: "PK Series Compact Polymer",
          link: "/samwha/products/solid-polymer.html"
        }
      ],
      downloads: [
        {
          title: "Polymer Capacitor Spice Models",
          url: "#",
          type: "ZIP",
          size: "3.5 MB"
        }
      ]
    },
    {
      id: "film-capacitor-selection-guide",
      title: "Film Capacitor Selection Guide",
      summary: "Guide to selecting metallized film capacitors for DC-link, filtering, and power electronics applications",
      content: `## Film Capacitor Selection Guide

### Introduction

Metallized film capacitors offer high reliability, long lifetime, and excellent frequency characteristics for power electronics applications including DC-link filtering, power factor correction, and snubber circuits.

### Types of Film Capacitors

#### Polypropylene (PP) Capacitors

**Characteristics:**
- Lowest dielectric losses (tan δ < 0.001)
- Excellent frequency response
- High insulation resistance
- Stable capacitance over temperature
- Self-healing properties

**Applications:**
- DC-link filtering in inverters
- Power factor correction
- High-frequency resonant circuits
- IGBT snubbers

#### Polyester (PET) Capacitors

**Characteristics:**
- Higher dielectric constant (smaller size)
- Higher losses than polypropylene
- Lower cost
- Good volumetric efficiency
- Self-healing properties

**Applications:**
- General-purpose filtering
- Coupling and bypass
- Motor run capacitors
- Lighting ballasts

### Selection Parameters

#### 1. Capacitance and Voltage

**DC-Link Applications:**
- Calculate based on allowable DC bus ripple
- C = I_ripple / (8 × f_switch × V_ripple)
- Typical: 1-5µF per kW of inverter power

**Voltage Rating:**
- DC voltage: Use 20% derating minimum
- AC voltage: Match to application RMS voltage
- Peak voltage: Must exceed maximum expected peak

#### 2. Current Capability

**RMS Current:**
- Film capacitors handle high ripple current
- Check datasheet for RMS current rating
- Temperature derating applies

**Pulse Current:**
- Important for snubber applications
- Check peak current and dv/dt ratings

#### 3. Frequency Considerations

**ESL (Equivalent Series Inductance):**
- Limits high-frequency performance
- Typical: 10-50nH for leaded capacitors
- Lower for box-type with bus bar connections

**Self-Resonant Frequency:**
- f_sr = 1 / (2π × √(L × C))
- Operate well below self-resonant frequency

### Application Guidelines

#### DC-Link Filtering

**Capacitor Selection:**
- Polypropylene preferred for low losses
- Calculate capacitance for ripple requirement
- Verify RMS current capability
- Consider parallel connection for high power

**Typical Values:**
- 400V DC bus: 10-50µF
- 700V DC bus: 5-20µF
- 1000V DC bus: 3-10µF

#### Snubber Applications

**Selection Criteria:**
- Low inductance (<20nH)
- High pulse current capability
- Polypropylene dielectric
- Appropriate voltage rating

**Typical Circuit:**
- Capacitor in series with resistor
- Across IGBT or diode
- Limits voltage spike during turn-off

#### Power Factor Correction

**Capacitor Requirements:**
- AC voltage rating for line voltage
- High ripple current capability
- Long lifetime (100,000+ hours)
- Polypropylene preferred

### Design Checklist

- [ ] Capacitance calculated for application
- [ ] Voltage rating with 20% derating
- [ ] RMS current capability verified
- [ ] Frequency range appropriate
- [ ] Temperature range adequate
- [ ] Physical size fits constraints
- [ ] Safety requirements (X/Y capacitors)

### Advantages Over Electrolytic

**Lifetime:**
- Film: 100,000-200,000 hours
- Electrolytic: 10,000-15,000 hours
- No wear-out mechanism

**Ripple Current:**
- Film: 5-10x higher capability
- Lower ESR and ESL
- Better high-frequency performance

**Reliability:**
- Self-healing properties
- No electrolyte to dry out
- Predictable aging

### Cost Considerations

**Initial Cost:**
- Film capacitors 2-5x more expensive per µF
- Higher cost justified by longer life

**Total Cost of Ownership:**
- Reduced maintenance
- No replacement costs
- Lower downtime

### Contact Support

For film capacitor selection assistance, contact our FAE team:
- Email: technical.support@example.com
- Phone: +1-555-0100`,
      category: "Selection Guides",
      tags: ["film capacitor", "selection guide", "DC-link"],
      author: {
        name: "Robert Zhang",
        title: "Senior FAE - Motor Drives",
        email: "robert.zhang@example.com",
        image: "/assets/team/robert-zhang.jpg"
      },
      publishedDate: "2024-03-05",
      updatedDate: "2024-08-10",
      readTime: "14 min",
      difficulty: "Advanced",
      faqs: [
        {
          question: "When should I use film capacitors instead of electrolytic capacitors for DC-link?",
          "answer": "Use film capacitors for DC-link when: Application requires 10+ year service life, High ripple current (5A+ for small capacitors), High-frequency switching (>10kHz), Maintenance access is difficult or costly, Reliability is critical. Film capacitors last 10-20x longer than electrolytics and handle much higher ripple current. The higher initial cost (2-5x) is offset by elimination of replacement costs and downtime. For solar inverters, motor drives, and UPS systems with 10+ year design life, film capacitors are the preferred choice. Use electrolytics for cost-sensitive applications with shorter expected life or easy maintenance access.",
          decisionGuide: "Use film capacitors for DC-link in long-life applications (10+ years). Use electrolytics for cost-sensitive, shorter-life applications.",
          keywords: ["film vs electrolytic DC-link", "DC-link capacitor selection"]
        }
      ],
      faeInsights: {
        summary: "Film capacitors are the best choice for inverter DC-link applications requiring long life. The self-healing property is a major reliability advantage - I've never seen a catastrophic failure, only gradual capacitance decrease over decades. For high-power inverters (50kW+), we typically use 4-8 film capacitors in parallel. The key design consideration is ESL - use short, wide bus bar connections to minimize inductance. For thermal design, film capacitors are forgiving but I still recommend keeping case temperature below 85°C for 30-year life.",
        recommendations: [
          "Use film capacitors for DC-link in 10+ year life applications",
          "Use short, wide bus bar connections to minimize ESL",
          "Parallel multiple capacitors for high-power inverters",
          "Keep case temperature below 85°C for maximum lifetime"
        ],
        contactInfo: {
          name: "Robert Zhang",
          title: "Senior FAE - Motor Drives",
          email: "motor.fae@example.com",
          phone: "+1-555-0103"
        }
      },
      relatedProducts: [
        {
          name: "MPP Series Polypropylene Capacitors",
          link: "/samwha/products/film-capacitors.html"
        },
        {
          name: "MPET Series Polyester Capacitors",
          link: "/samwha/products/film-capacitors.html"
        }
      ],
      downloads: [
        {
          title: "Film Capacitor Application Note",
          url: "#",
          type: "PDF",
          size: "2.8 MB"
        }
      ]
    },
    {
      id: "automotive-capacitor-selection-guide",
      title: "Automotive Capacitor Selection Guide",
      summary: "Guide to selecting AEC-Q200 qualified capacitors for automotive electronics applications",
      content: `## Automotive Capacitor Selection Guide

### Introduction

Automotive capacitors must meet stringent reliability requirements including AEC-Q200 qualification, wide temperature ranges, and 15+ year vehicle lifetime. This guide covers selection criteria for automotive applications.

### Automotive Requirements

#### AEC-Q200 Qualification

**Required Testing:**
- Temperature cycling (-40°C to +125°C or +150°C)
- Mechanical shock (100G)
- Vibration (5-2000Hz)
- High temperature storage (1000 hours)
- Humidity bias (85°C/85% RH)

**Why It Matters:**
- Ensures reliability in harsh automotive environment
- Required by automotive OEMs
- Reduces field failure risk

#### Temperature Ratings

**125°C Rated:**
- Standard automotive grade
- Suitable for most applications
- Interior electronics
- LED drivers in moderate locations

**150°C Rated:**
- High-temperature grade
- Extreme under-hood locations
- Near engines or exhaust systems
- 48V mild-hybrid systems

### Selection Parameters

#### 1. Temperature Rating Selection

**Design Margin:**
- Select rating 20-30°C above maximum ambient
- Account for self-heating (5-15°C typical)
- Consider worst-case conditions

**Example:**
- Maximum ambient: 100°C
- Self-heating: 10°C
- Required rating: 125°C minimum
- Recommended: 150°C for margin

#### 2. Voltage Derating

**Automotive Systems:**
- 12V systems: Use 35V or 50V capacitors
- 48V systems: Use 100V capacitors
- Load dump: Up to 79V transient (ISO 16750-2)

**Derating Guidelines:**
- Standard: 70% derating
- Safety-critical: 60% derating
- High-temp: Additional 10% derating

#### 3. Lifetime Requirements

**Vehicle Life:**
- Target: 15 years minimum
- Calculate using Arrhenius equation
- Design for case temperature 25-30°C below rating

**Example Calculation:**
- Rated: 8,000 hours at 125°C
- Operating: 95°C case temperature
- Expected life: 64,000 hours (20+ years automotive use)

### Application Guidelines

#### Engine Control Units (ECUs)

**Requirements:**
- 125°C or 150°C rating
- AEC-Q200 qualified
- Long lifetime (15+ years)
- PPAP documentation

**Typical Capacitors:**
- WA series for general applications
- WH-A series for high-temperature locations

#### LED Driver Applications

**Challenges:**
- High ambient temperature (under-hood)
- Long vehicle lifetime
- Safety-critical (lighting)

**Recommendations:**
- 150°C rated capacitors
- 50% voltage derating
- Thermal management (heat sinks)

#### 48V Mild-Hybrid Systems

**Requirements:**
- 100V rating for 48V bus
- High ripple current capability
- 150°C rating for power density

**Design Considerations:**
- Parallel capacitors for ripple current
- Thermal analysis critical
- AEC-Q200 qualification required

### Design Checklist

- [ ] AEC-Q200 qualification verified
- [ ] Temperature rating with 20-30°C margin
- [ ] Voltage derating 60-70% for automotive
- [ ] Lifetime calculated for 15-year vehicle life
- [ ] PPAP documentation available
- [ ] Traceability requirements met
- [ ] Load dump protection considered

### Common Mistakes

1. **Using industrial-grade capacitors** - Always use AEC-Q200 qualified
2. **Insufficient temperature margin** - Under-hood temps exceed 125°C
3. **Ignoring load dump** - 79V transients damage underrated capacitors
4. **Inadequate voltage derating** - Reduces lifetime and reliability
5. **Missing PPAP documentation** - Delays production approval

### Certification Requirements

**IATF 16949:**
- Automotive quality management
- Required for automotive production

**AEC-Q200:**
- Component-level qualification
- Required by all automotive OEMs

**PPAP:**
- Production part approval
- Level 3 typical for capacitors

### Cost Considerations

**Automotive vs Industrial:**
- Automotive grade: 20-40% premium
- Justified by qualification and reliability
- Field failure costs far exceed premium

### Contact Support

For automotive capacitor selection assistance, contact our FAE team:
- Email: automotive.fae@example.com
- Phone: +1-555-0100`,
      category: "Selection Guides",
      tags: ["automotive", "AEC-Q200", "selection guide"],
      author: {
        name: "Thomas Park",
        title: "Senior FAE - Automotive Electronics",
        email: "thomas.park@example.com",
        image: "/assets/team/thomas-park.jpg"
      },
      publishedDate: "2024-04-20",
      updatedDate: "2024-09-15",
      readTime: "16 min",
      difficulty: "Advanced",
      faqs: [
        {
          question: "What is the difference between AEC-Q200 and standard industrial capacitors?",
          "answer": "AEC-Q200 capacitors differ from standard industrial capacitors in: Qualification Testing - AEC-Q200 requires temperature cycling, shock, vibration, humidity bias testing that industrial capacitors don't undergo. Manufacturing - Automotive capacitors are made in IATF 16949 certified facilities with additional process controls. Screening - 100% electrical testing and visual inspection vs sampling for industrial. Materials - Enhanced materials for wider temperature ranges. Documentation - Full PPAP support and qualification reports. Traceability - Complete lot traceability for automotive production. Cost - 20-40% premium due to additional testing. For automotive applications, always use AEC-Q200 qualified parts. The premium is small compared to cost of field failures.",
          decisionGuide: "Always use AEC-Q200 qualified capacitors for automotive. The additional cost ensures reliability and safety.",
          keywords: ["AEC-Q200 vs industrial", "automotive capacitor qualification"]
        }
      ],
      faeInsights: {
        summary: "The most critical factor in automotive capacitor selection is temperature. I've seen too many failures from using 125°C capacitors in 130°C+ locations. Always do thorough thermal analysis and measure actual case temperature during worst-case operation. For 48V hybrid systems, the combination of high voltage ripple and extreme temperatures makes 150°C rated capacitors essential. Don't compromise on AEC-Q200 qualification - automotive OEMs require it and field failures are extremely expensive.",
        recommendations: [
          "Always use AEC-Q200 qualified capacitors for automotive",
          "Use 150°C rated capacitors for extreme under-hood locations",
          "Perform thorough thermal analysis and measurement",
          "Use 60-70% voltage derating for automotive",
          "Request PPAP Level 3 for all production parts"
        ],
        contactInfo: {
          name: "Thomas Park",
          title: "Senior FAE - Automotive Electronics",
          email: "automotive.fae@example.com",
          phone: "+1-555-0100"
        }
      },
      relatedProducts: [
        {
          name: "WA Series Automotive Capacitors",
          link: "/samwha/products/automotive-capacitors.html"
        },
        {
          name: "WH-A Series High-Temp Capacitors",
          link: "/samwha/products/automotive-capacitors.html"
        }
      ],
      downloads: [
        {
          title: "AEC-Q200 Qualification Summary",
          url: "#",
          type: "PDF",
          size: "1.5 MB"
        },
        {
          title: "PPAP Documentation Template",
          url: "#",
          type: "PDF",
          size: "850 KB"
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2), 'utf8');
console.log('✅ Created support.json with 4 articles');

// news.json
const newsData = {
  seoTitle: "Samwha News | Product Releases, Company Updates, Industry Events",
  seoDescription: "Latest news from Samwha Electric. Product launches, technology updates, trade show appearances, and company announcements.",
  seoKeywords: [
    "Samwha news",
    "Samwha product release",
    "capacitor industry news",
    "Samwha company update"
  ],
  faqs: [
    {
      question: "How can I stay updated on Samwha news and product releases?",
      "answer": "Stay updated on Samwha news through: Email Newsletter - Subscribe to our monthly newsletter for product updates, technical articles, and industry news. Website News Section - Check our website news page regularly for latest announcements. Social Media - Follow us on LinkedIn for company updates and industry insights. Trade Shows - Visit us at major electronics trade shows including electronica, PCIM, and APEC. Distributor Updates - Our authorized distributors receive product updates and can share with customers. Technical Webinars - We host quarterly webinars on capacitor technology and applications. To subscribe to our newsletter, contact your local sales representative or sign up on our website.",
      decisionGuide: "Subscribe to our newsletter and follow us on LinkedIn for regular updates.",
      keywords: ["Samwha news subscription", "product updates"]
    }
  ],
  articles: [
    {
      id: "samwha-expands-automotive-capacitor-production",
      title: "Samwha Expands Automotive Capacitor Production Capacity",
      summary: "Samwha Electric announces $50M investment to expand AEC-Q200 qualified capacitor manufacturing for growing electric vehicle market",
      content: `Samwha Electric Co., Ltd. announced today a $50 million investment to expand its automotive capacitor manufacturing capacity at its facility in Korea. The expansion will increase production of AEC-Q200 qualified aluminum electrolytic capacitors by 40% to meet growing demand from electric vehicle manufacturers.

The investment includes new automated production lines, enhanced testing equipment for AEC-Q200 qualification, and expanded clean room facilities. The expansion is expected to be completed by Q3 2025 and will create 200 new jobs.

"The electric vehicle market is driving unprecedented demand for high-reliability capacitors," said Mr. Kim, CEO of Samwha Electric. "This expansion ensures we can support our automotive customers as they ramp production of EVs and 48V mild-hybrid systems."

The expanded facility will focus on high-temperature capacitors rated to 150°C, which are essential for under-hood applications in electric vehicles. Samwha's automotive capacitors are already used by major Tier 1 suppliers and OEMs worldwide.

The company also announced plans to expand its polymer capacitor production to support increasing demand for DC-DC converters in vehicle electrical systems.`,
      category: "Company News",
      tags: ["automotive", "expansion", "EV", "AEC-Q200"],
      author: "Samwha PR Team",
      publishedDate: "2024-12-15",
      featured: true,
      image: "/assets/news/automotive-expansion.jpg"
    },
    {
      id: "new-wh-a-series-150c-capacitors",
      title: "Samwha Launches WH-A Series 150°C Automotive Capacitors",
      summary: "New high-temperature capacitor series designed for extreme under-hood applications in electric vehicles and 48V hybrid systems",
      content: `Samwha Electric has introduced the WH-A series of aluminum electrolytic capacitors rated for operation up to 150°C, specifically designed for extreme under-hood automotive applications.

The WH-A series addresses the growing need for high-temperature capacitors in electric vehicles and 48V mild-hybrid systems, where power density and thermal management are critical challenges. The capacitors are fully AEC-Q200 qualified and manufactured in IATF 16949 certified facilities.

"Electric vehicle power electronics operate at much higher temperatures than traditional 12V systems," explained Thomas Park, Senior FAE at Samwha. "The WH-A series provides the temperature margin needed for reliable 15-year vehicle life."

Key features of the WH-A series include:
- Temperature rating: -55°C to +150°C
- Voltage range: 25V to 100V DC
- Capacitance range: 47µF to 1000µF
- Lifetime: 5,000 hours at 150°C
- Full AEC-Q200 Rev E qualification
- PPAP documentation support

The series is immediately available for sampling, with production volumes available in Q1 2025.`,
      category: "Product Launch",
      tags: ["automotive", "new product", "150C", "AEC-Q200"],
      author: "Product Marketing Team",
      publishedDate: "2024-11-28",
      featured: true,
      image: "/assets/news/wh-a-series.jpg"
    },
    {
      id: "samwha-receives-iatf-16949-certification",
      title: "Samwha Receives IATF 16949 Certification for All Automotive Facilities",
      summary: "Company achieves comprehensive automotive quality management certification across all manufacturing locations",
      content: `Samwha Electric announced today that all of its manufacturing facilities producing automotive capacitors have achieved IATF 16949:2016 certification, the international standard for automotive quality management systems.

The certification covers Samwha's facilities in Korea and China that produce AEC-Q200 qualified capacitors for automotive applications. The comprehensive audit process evaluated the company's quality management systems, manufacturing processes, and continuous improvement programs.

"IATF 16949 certification demonstrates our commitment to automotive quality standards," said James Kim, Quality Director at Samwha. "Our customers can be confident that every automotive capacitor we produce meets the highest quality requirements."

The certification is required by major automotive OEMs and Tier 1 suppliers. It ensures that Samwha's manufacturing processes are controlled, monitored, and continuously improved to meet automotive industry requirements.

Samwha first achieved IATF 16949 certification for its main facility in 2018 and has now extended certification to all automotive production locations.`,
      category: "Certification",
      tags: ["certification", "IATF 16949", "automotive", "quality"],
      author: "Quality Assurance Team",
      publishedDate: "2024-10-20",
      featured: false,
      image: "/assets/news/certification.jpg"
    },
    {
      id: "samwha-showcases-at-pcim-europe-2024",
      title: "Samwha Showcases Film Capacitor Solutions at PCIM Europe 2024",
      summary: "Company highlights MPP series DC-link capacitors for solar inverters and motor drives at premier power electronics trade show",
      content: `Samwha Electric showcased its latest film capacitor solutions for power electronics applications at PCIM Europe 2024 in Nuremberg, Germany. The company highlighted its MPP series metallized polypropylene capacitors designed for DC-link applications in solar inverters and motor drives.

"The response to our MPP series has been excellent," said Robert Zhang, Senior FAE for Motor Drives. "Design engineers appreciate the 200,000+ hour lifetime and high ripple current capability that film capacitors provide for inverter applications."

At the show, Samwha demonstrated:
- MPP series DC-link capacitors with 8A ripple current capability
- New compact designs for space-constrained applications
- Thermal modeling tools for capacitor lifetime prediction
- Comparison data showing advantages over electrolytic capacitors

The company also announced plans to expand its film capacitor production capacity by 30% in 2025 to meet growing demand from renewable energy and industrial automation markets.

Samwha representatives conducted technical presentations on DC-link capacitor selection and lifetime optimization, which were well-attended by power electronics engineers.`,
      category: "Trade Show",
      tags: ["trade show", "PCIM", "film capacitors", "DC-link"],
      author: "Marketing Team",
      publishedDate: "2024-09-15",
      featured: false,
      image: "/assets/news/pcim-2024.jpg"
    },
    {
      id: "samwha-expands-distribution-network",
      title: "Samwha Expands Global Distribution Network",
      summary: "New distribution agreements in Europe and Americas to improve customer service and reduce lead times",
      content: `Samwha Electric announced today the expansion of its global distribution network with new authorized distributors in Europe and the Americas. The expansion is designed to improve customer service, reduce lead times, and provide better local technical support.

New distribution partners include:
- EuroComponents GmbH (Germany) - Serving industrial and automotive customers in Central Europe
- Nordic Electronics AB (Sweden) - Covering Scandinavia and Baltic regions
- Americas Power Components (USA) - Supporting North American industrial and automotive markets
- BrazElectro Ltda (Brazil) - Serving South American market

"These partnerships strengthen our ability to serve customers globally," said David Lee, VP of Sales at Samwha. "Local inventory and technical support will significantly improve our responsiveness."

The new distributors will stock popular Samwha series including WH automotive capacitors, WL long-life industrial capacitors, and MPP film capacitors. Local inventory will reduce lead times from 6-8 weeks to 1-2 days for stocked items.

Technical training programs are being conducted to ensure distributor FAEs can provide expert application support for Samwha products.`,
      category: "Partnership",
      tags: ["distribution", "partnership", "global expansion"],
      author: "Sales Team",
      publishedDate: "2024-08-10",
      featured: false,
      image: "/assets/news/distribution.jpg"
    },
    {
      id: "samwha-celebrates-68-years",
      title: "Samwha Celebrates 68 Years of Capacitor Manufacturing Excellence",
      summary: "Company marks anniversary with commitment to continued innovation in capacitor technology",
      content: `Samwha Electric Co., Ltd. celebrated its 68th anniversary this month, marking nearly seven decades of capacitor manufacturing excellence. Founded in 1956, Samwha has grown from a small Korean manufacturer to one of the world's leading capacitor companies.

"Our 68-year history is a testament to our commitment to quality and innovation," said Mr. Kim, CEO of Samwha Electric. "From our first aluminum electrolytic capacitors to today's advanced polymer and film capacitors, we have continuously evolved to meet our customers' needs."

Key milestones in Samwha's history include:
- 1956: Company founded in Seoul, Korea
- 1975: Began exporting capacitors to international markets
- 1995: Achieved ISO 9001 certification
- 2005: Launched solid polymer capacitor production
- 2010: Achieved IATF 16949 automotive certification
- 2018: Opened new manufacturing facility in China
- 2024: Expanded automotive capacitor production

Today, Samwha produces over 2 billion capacitors annually and serves customers in more than 50 countries. The company's capacitors are used in automotive, industrial, consumer electronics, and renewable energy applications worldwide.

"As we look to the future, we remain committed to innovation in capacitor technology," added Mr. Kim. "The transition to electric vehicles and renewable energy creates exciting opportunities for growth."`,
      category: "Company News",
      tags: ["anniversary", "company history", "milestone"],
      author: "Corporate Communications",
      publishedDate: "2024-07-01",
      featured: true,
      image: "/assets/news/anniversary.jpg"
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'news.json'), JSON.stringify(newsData, null, 2), 'utf8');
console.log('✅ Created news.json with 6 articles');

console.log('\n✅ All Samwha data files created successfully!');
console.log('  - brand.json');
console.log('  - products.json (4 categories, 8 products)');
console.log('  - solutions.json (2 solutions)');
console.log('  - support.json (4 articles)');
console.log('  - news.json (6 articles)');
