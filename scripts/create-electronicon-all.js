const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'electronicon');

// Helper function to generate FAQ
function generateFAQ(question, answer, decisionGuide, keywords) {
  return { question, answer, decisionGuide, keywords };
}

// ==================== brand.json ====================
const brandData = {
  name: "electronicon",
  displayName: "ELECTRONICON",
  logo: "/assets/brands/electronicon/logo.svg",
  tagline: "German Engineering Excellence in Capacitor Technology",
  description: "ELECTRONICON Kondensatoren GmbH is a leading German manufacturer of high-quality capacitors for power electronics, power factor correction, and industrial applications. With over 80 years of experience since 1938, ELECTRONICON produces capacitors in Gera, Germany, serving global markets with innovative and reliable solutions.",
  longDescription: "ELECTRONICON Kondensatoren GmbH, headquartered in Gera, Germany, has been a pioneer in capacitor technology since 1938 when Siemens & Halske AG established production in Eastern Thuringia. Today, ELECTRONICON is a globally recognized specialist in high-quality capacitors for power factor correction, harmonic filters, energy transmission, drive technology, and DC-link applications. As the largest company within the SYSTEM ELECTRIC Group, ELECTRONICON maintains almost entirely German-based production, ensuring the highest quality standards. Their product portfolio includes power capacitors for PFC and filtering, DC-link capacitors for drives and inverters, and lighting capacitors. As an authorized ELECTRONICON capacitor distributor, we provide comprehensive selection guidance and technical support for industrial and commercial applications. ELECTRONICON's commitment to innovation, quality, and environmental sustainability has made them a preferred partner for demanding applications worldwide.",
  coreProducts: [
    {
      name: "Power Factor Correction Capacitors",
      description: "High-quality power capacitors for power factor correction and harmonic filtering in industrial and commercial applications.",
      keywords: ["PFC capacitor", "power factor correction", "harmonic filter", "reactive power"]
    },
    {
      name: "DC-Link Capacitors",
      description: "Robust DC-link capacitors for variable frequency drives, inverters, and power conversion systems with high ripple current capability.",
      keywords: ["DC-link capacitor", "inverter capacitor", "drive technology", "power electronics"]
    },
    {
      name: "Lighting Capacitors",
      description: "Reliable capacitors for lighting applications including HID, fluorescent, and LED lighting systems.",
      keywords: ["lighting capacitor", "HID capacitor", "ballast capacitor", "luminaire"]
    },
    {
      name: "Filter and Snubber Capacitors",
      description: "Specialized capacitors for filtering, snubber circuits, and high-frequency applications in power electronics.",
      keywords: ["filter capacitor", "snubber capacitor", "high frequency", "power electronics"]
    }
  ],
  industries: [
    {
      name: "Industrial Drives",
      description: "Variable frequency drives, servo systems, and motor control applications requiring reliable DC-link capacitors.",
      keywords: ["VFD", "motor drive", "servo system", "industrial automation"]
    },
    {
      name: "Power Quality",
      description: "Power factor correction and harmonic filtering for industrial and commercial power systems.",
      keywords: ["power quality", "PFC", "harmonic filter", "reactive power"]
    },
    {
      name: "Renewable Energy",
      description: "Solar inverters, wind power converters, and energy storage systems requiring high-performance capacitors.",
      keywords: ["solar inverter", "wind power", "renewable energy", "energy storage"]
    },
    {
      name: "Lighting",
      description: "Commercial and industrial lighting systems including HID, fluorescent, and LED applications.",
      keywords: ["lighting", "HID", "fluorescent", "LED driver"]
    }
  ],
  certifications: [
    {
      name: "ISO 9001",
      description: "Quality Management System Certification"
    },
    {
      name: "ISO 14001",
      description: "Environmental Management System Certification"
    },
    {
      name: "VDE Certification",
      description: "VDE Certified for German and European Markets"
    },
    {
      name: "UL Certification",
      description: "UL Recognized Components for North American Market"
    },
    {
      name: "CE Marking",
      description: "CE Marked for European Economic Area"
    }
  ],
  yearFounded: 1938,
  headquarters: "Gera, Thuringia, Germany",
  employees: "1000+",
  website: "https://www.electronicon.com",
  distributorStatus: "Authorized Distributor",
  seoTitle: "ELECTRONICON Capacitors - German Quality | Authorized Distributor",
  seoDescription: "ELECTRONICON Kondensatoren GmbH - Leading German manufacturer of power capacitors, DC-link capacitors, and lighting capacitors. Authorized distributor with selection guide.",
  seoKeywords: [
    "ELECTRONICON capacitor distributor",
    "ELECTRONICON capacitor selection guide",
    "German capacitor manufacturer",
    "PFC capacitor distributor",
    "DC-link capacitor selection",
    "power factor correction capacitor"
  ],
  faqs: [
    {
      question: "Is LiTong an authorized distributor of ELECTRONICON products?",
      answer: "Yes, LiTong Electronics is an authorized distributor of ELECTRONICON Kondensatoren GmbH products. We maintain direct partnerships with ELECTRONICON and can provide genuine German-made capacitors with full manufacturer warranty and technical support. As an authorized distributor, we have access to ELECTRONICON's complete product portfolio including power factor correction capacitors, DC-link capacitors, and lighting capacitors. We provide comprehensive selection guidance, application engineering support, and competitive pricing for all ELECTRONICON products. Our technical team has received training from ELECTRONICON engineers and can assist with product selection, application design, and troubleshooting.",
      decisionGuide: "Contact our sales team to verify our distributor status and request a quotation for your ELECTRONICON capacitor requirements. We can provide certificates of authorization upon request.",
      keywords: ["ELECTRONICON distributor", "authorized distributor", "genuine products"]
    },
    {
      question: "What are the core competitive advantages of ELECTRONICON capacitors?",
      answer: "ELECTRONICON capacitors offer several key competitive advantages: First, German engineering excellence with over 80 years of capacitor manufacturing experience since 1938. Second, almost entirely German-based production ensuring consistent quality and reliability. Third, comprehensive product range covering power factor correction, DC-link applications, and lighting. Fourth, strong focus on innovation and environmental sustainability with eco-friendly manufacturing processes. Fifth, extensive testing and quality control ensuring highest reliability standards. Sixth, global service network with local technical support. ELECTRONICON capacitors are known for their long operational life, high reliability, and excellent performance in demanding industrial applications.",
      decisionGuide: "For applications requiring highest quality and reliability, ELECTRONICON offers excellent German-engineered solutions. Contact us to discuss your specific requirements.",
      keywords: ["ELECTRONICON advantages", "German quality", "capacitor reliability"]
    },
    {
      question: "How do ELECTRONICON capacitors compare with other brands?",
      answer: "ELECTRONICON capacitors are positioned as premium German-engineered products with excellent quality and reliability. Compared to Asian manufacturers, ELECTRONICON offers superior quality consistency, longer operational life, and comprehensive technical documentation. The German manufacturing base ensures tight quality control and environmental compliance. Compared to other European manufacturers, ELECTRONICON provides competitive pricing while maintaining high quality standards. Their specialization in power factor correction and industrial applications gives them deep expertise in these areas. For applications where reliability and long service life are critical, ELECTRONICON provides excellent value despite premium pricing. Many industrial customers choose ELECTRONICON for critical applications where capacitor failure would be costly.",
      decisionGuide: "Consider ELECTRONICON for applications requiring highest reliability and quality. We can provide competitive quotations and technical comparisons with other brands.",
      keywords: ["ELECTRONICON vs competitors", "capacitor comparison", "premium capacitors"]
    },
    {
      question: "What are the main applications of ELECTRONICON capacitors?",
      answer: "ELECTRONICON capacitors serve a wide range of industrial and commercial applications. Power factor correction capacitors are used in industrial plants, commercial buildings, and renewable energy systems to improve power quality and reduce energy costs. DC-link capacitors are essential components in variable frequency drives, servo systems, solar inverters, wind power converters, and UPS systems. Lighting capacitors are used in HID lighting systems, fluorescent ballasts, and LED drivers for commercial and industrial lighting. Filter and snubber capacitors serve power electronics applications including harmonic filters, inverter output filters, and protection circuits. ELECTRONICON's product range covers voltage ratings from low voltage to medium voltage applications, serving markets worldwide.",
      decisionGuide: "Browse our product categories to find ELECTRONICON capacitors for your specific application, or contact our FAE team for application-specific recommendations.",
      keywords: ["ELECTRONICON applications", "capacitor uses", "industrial applications"]
    },
    {
      question: "What certifications do ELECTRONICON products hold?",
      answer: "ELECTRONICON capacitors carry comprehensive international certifications ensuring product quality and market access. Their manufacturing facilities are certified to ISO 9001 for quality management and ISO 14001 for environmental management. Product-level certifications include VDE certification for German and European markets, UL recognition for North American markets, and CE marking for the European Economic Area. These certifications ensure that ELECTRONICON capacitors meet stringent international safety and performance standards. The VDE certification is particularly recognized for its rigorous testing requirements. When you purchase through our authorized distribution channel, you receive products with full certification documentation and traceability.",
      decisionGuide: "For applications requiring specific certifications, contact us to confirm the certification status of particular ELECTRONICON products and obtain certification documentation.",
      keywords: ["ELECTRONICON certifications", "VDE certification", "UL certification"]
    },
    {
      question: "What are the advantages of purchasing ELECTRONICON products through LiTong?",
      answer: "Purchasing ELECTRONICON products through LiTong Electronics as an authorized distributor offers several key advantages. First, you are guaranteed to receive genuine German-made ELECTRONICON products with full manufacturer warranty, eliminating the risk of counterfeit components. Second, we maintain local inventory for popular ELECTRONICON products, enabling shorter lead times compared to direct factory orders from Germany. Third, our technical team provides application engineering support including product selection, circuit design recommendations, and troubleshooting assistance. Fourth, we offer flexible purchasing options including small quantity orders for prototypes and volume pricing for production quantities. Fifth, we provide comprehensive documentation including datasheets, certificates of conformance, and material declarations.",
      decisionGuide: "Contact our sales team to discuss your ELECTRONICON capacitor requirements and learn about our value-added services including technical support and inventory programs.",
      keywords: ["ELECTRONICON distributor benefits", "authorized distributor advantages"]
    },
    {
      question: "What is the typical lead time for ELECTRONICON capacitor orders?",
      answer: "Lead times for ELECTRONICON capacitors vary depending on product type and order quantity. For standard products that we stock locally, lead times are typically 1-2 weeks. For products sourced from Germany, lead times typically range from 6-10 weeks depending on the specific product and current production schedules. For large volume orders or custom specifications, lead times may be longer and should be discussed with our sales team. We recommend maintaining safety stock for critical applications and can work with you to establish inventory programs including scheduled deliveries. For urgent requirements, we can often expedite orders or suggest alternative products from our stocked inventory.",
      decisionGuide: "Contact our sales team with your specific requirements and timeline to get accurate lead time information and discuss inventory management options.",
      keywords: ["ELECTRONICON lead time", "capacitor delivery", "inventory management"]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'brand.json'), JSON.stringify(brandData, null, 2));
console.log('✅ Created brand.json');

// ==================== products.json ====================
const productsData = {
  seoTitle: "ELECTRONICON Capacitors - PFC, DC-Link & Lighting | Distributor",
  seoDescription: "ELECTRONICON power capacitors for power factor correction, DC-link capacitors for drives, and lighting capacitors. Authorized distributor with selection guide.",
  seoKeywords: [
    "ELECTRONICON capacitor distributor",
    "ELECTRONICON PFC capacitor selection",
    "power factor correction capacitor distributor",
    "DC-link capacitor selection guide",
    "German capacitor distributor"
  ],
  faqs: [
    generateFAQ(
      "What types of capacitors does ELECTRONICON manufacture?",
      "ELECTRONICON manufactures a comprehensive range of capacitors including power factor correction capacitors for industrial and commercial applications, DC-link capacitors for variable frequency drives and inverters, lighting capacitors for HID and fluorescent systems, and filter capacitors for power electronics. Their products utilize advanced metallized film technology with self-healing properties, ensuring high reliability and long operational life. All capacitors are manufactured in Germany to the highest quality standards.",
      "Browse our product categories to find the specific ELECTRONICON capacitor type for your application.",
      ["ELECTRONICON capacitor types", "capacitor categories", "German capacitors"]
    ),
    generateFAQ(
      "How do I select the right ELECTRONICON capacitor for my application?",
      "Selecting the right ELECTRONICON capacitor requires considering several key parameters. For power factor correction, calculate the required reactive power based on your load characteristics and target power factor. For DC-link applications, determine the required capacitance based on allowable ripple voltage and ripple current requirements. Consider voltage rating with appropriate safety margin, typically 1.1 to 1.3 times the nominal voltage. Temperature rating should match your operating environment. Our technical team can assist with detailed calculations and selection guidance.",
      "Contact our FAE team with your application requirements for personalized selection recommendations.",
      ["capacitor selection guide", "ELECTRONICON selection", "how to choose"]
    ),
    generateFAQ(
      "What is the difference between ELECTRONICON PFC and DC-link capacitors?",
      "ELECTRONICON PFC (Power Factor Correction) capacitors are designed for AC applications to improve power factor and reduce reactive power. They are optimized for continuous AC operation with low losses and long lifetime. DC-link capacitors are designed for DC bus applications in inverters and drives, handling high ripple currents and providing energy storage. PFC capacitors typically have lower current density but higher voltage ratings, while DC-link capacitors have higher ripple current capability and are optimized for switching applications.",
      "Choose PFC capacitors for power factor correction applications. Choose DC-link capacitors for inverter and drive applications.",
      ["PFC vs DC-link", "capacitor differences", "ELECTRONICON types"]
    ),
    generateFAQ(
      "What voltage ratings are available for ELECTRONICON capacitors?",
      "ELECTRONICON capacitors are available in a wide range of voltage ratings to suit various applications. Power factor correction capacitors typically range from 230V to 1000V AC. DC-link capacitors range from 400V to 1500V DC or higher. Lighting capacitors are available for standard line voltages including 120V, 230V, and 277V. Custom voltage ratings may be available for specific applications. Always select a voltage rating with adequate margin above your maximum operating voltage.",
      "Contact us with your voltage requirements for specific product recommendations.",
      ["voltage ratings", "capacitor voltage", "ELECTRONICON specifications"]
    ),
    generateFAQ(
      "What is the typical lifetime of ELECTRONICON capacitors?",
      "ELECTRONICON capacitors are designed for long operational life. Power factor correction capacitors typically have a rated lifetime of 100,000 to 150,000 hours depending on the series and operating conditions. DC-link capacitors are rated for 50,000 to 100,000 hours. Actual lifetime depends on operating voltage, temperature, and ripple current. Following recommended derating practices can significantly extend capacitor lifetime beyond rated specifications. ELECTRONICON's German manufacturing quality ensures consistent performance over the capacitor lifetime.",
      "For extended lifetime, implement proper voltage derating and thermal management.",
      ["capacitor lifetime", "ELECTRONICON reliability", "operational life"]
    )
  ],
  categories: []
};

// Category 1: Power Factor Correction Capacitors
const pfcCategory = {
  id: "power-factor-correction",
  name: "Power Factor Correction Capacitors",
  description: "High-quality power capacitors for power factor correction and harmonic filtering",
  longDescription: "ELECTRONICON power factor correction capacitors are engineered for industrial and commercial applications requiring reliable reactive power compensation. These capacitors feature advanced metallized polypropylene film technology with self-healing properties, ensuring long operational life and minimal maintenance. The product range includes standard PFC capacitors, heavy-duty capacitors for harsh environments, and capacitors with integrated discharge resistors. As an ELECTRONICON capacitor distributor, we provide comprehensive selection guidance for power factor correction applications. All capacitors are manufactured in Germany to the highest quality standards and carry VDE and UL certifications.",
  parameters: ["Capacitance", "Voltage Rating", "Frequency", "Temperature Range", "Loss Factor", "Lifetime"],
  applications: ["Industrial Plants", "Commercial Buildings", "Data Centers", "Renewable Energy", "Power Distribution"],
  series: [
    {
      name: "Standard PFC Series",
      description: "Standard power factor correction capacitors for general industrial applications",
      features: ["Long lifetime", "Low losses", "Self-healing", "VDE certified"]
    },
    {
      name: "Heavy Duty PFC Series",
      description: "Reinforced capacitors for harsh environments and high harmonic content",
      features: ["Enhanced durability", "High harmonic withstand", "Extended temperature range", "Heavy-duty construction"]
    }
  ],
  selectionGuide: {
    title: "PFC Capacitor Selection Guide",
    description: "Learn how to select the right power factor correction capacitor",
    articleId: "pfc-capacitor-selection",
    articleLink: "/electronicon/support/pfc-capacitor-selection.html"
  },
  selectionGuideLink: {
    url: "/electronicon/support/pfc-capacitor-selection.html",
    text: "Power Factor Correction Capacitors Selection Guide"
  },
  faqs: [
    generateFAQ(
      "What are the main features of ELECTRONICON PFC capacitors?",
      "ELECTRONICON PFC capacitors feature advanced metallized polypropylene film construction with self-healing properties. They offer low loss factors, high reliability, and long operational life. The capacitors are designed for continuous AC operation with excellent thermal stability. Available with various mounting options and terminal configurations to suit different installation requirements.",
      "Contact our FAE team for detailed specifications and application guidance.",
      ["PFC capacitor features", "ELECTRONICON PFC", "capacitor specifications"]
    ),
    generateFAQ(
      "How do I calculate the required PFC capacitance?",
      "Required PFC capacitance is calculated based on the reactive power to be compensated. The formula is: Qc = P × (tan φ1 - tan φ2), where Qc is the required reactive power, P is the active power, φ1 is the initial power factor angle, and φ2 is the target power factor angle. The capacitance is then: C = Qc / (2 × π × f × V²).",
      "Contact our FAE team for assistance with PFC calculations for your specific application.",
      ["PFC calculation", "reactive power", "power factor correction sizing"]
    ),
    generateFAQ(
      "What certifications do ELECTRONICON PFC capacitors carry?",
      "ELECTRONICON PFC capacitors carry VDE certification for European markets, UL recognition for North American markets, and CE marking. These certifications ensure compliance with international safety and performance standards.",
      "Contact us for certification documentation for your quality records.",
      ["PFC certifications", "VDE", "UL certification"]
    ),
    generateFAQ(
      "Can ELECTRONICON PFC capacitors handle harmonic loads?",
      "Standard ELECTRONICON PFC capacitors can handle moderate harmonic content. For applications with high harmonic distortion, the Heavy Duty series is recommended with enhanced capability to withstand harmonic currents and voltages.",
      "Contact us for harmonic analysis and capacitor selection for high-harmonic applications.",
      ["harmonic withstand", "heavy duty capacitors", "power quality"]
    ),
    generateFAQ(
      "What is the typical lead time for PFC capacitors?",
      "Standard PFC capacitors typically have 2-4 week lead times from our local stock. For large quantities or special specifications, lead times may be 6-10 weeks from Germany.",
      "Contact our sales team for current availability and lead times.",
      ["lead time", "delivery", "availability"]
    )
  ],
  products: [
    {
      partNumber: "E62.F81-402D10",
      name: "PFC Capacitor 2.5kvar",
      shortDescription: "E62.F81-402D10 2.5kvar power factor correction capacitor, 400V, 50Hz, cylindrical aluminum case.",
      descriptionParagraphs: [
        "The E62.F81-402D10 is a high-quality power factor correction capacitor designed for industrial and commercial applications.",
        "This capacitor features metallized polypropylene film with self-healing properties and low loss factor.",
        "The cylindrical aluminum case with overpressure disconnector ensures safe and reliable operation."
      ],
      specifications: {
        "Rated Power": "2.5 kvar",
        "Voltage Rating": "400V AC",
        "Frequency": "50Hz",
        "Capacitance": "49.7µF",
        "Tolerance": "-5% / +10%",
        "Temperature Range": "-40°C to +55°C",
        "Loss Factor": "≤0.2 W/kvar",
        "Lifetime": "150,000 hours"
      },
      features: [
        "Metallized polypropylene film with self-healing",
        "Low loss factor for energy efficiency",
        "Overpressure disconnector for safety",
        "Cylindrical aluminum case",
        "VDE and UL certified",
        "Maintenance-free operation"
      ],
      applications: [
        "Industrial power factor correction",
        "Commercial building PFC",
        "Renewable energy systems",
        "Power distribution networks"
      ],
      faeReview: {
        author: "Michael Schmidt, Senior FAE - Power Quality",
        title: "Senior FAE - Power Quality",
        content: "In my 15 years of experience with power factor correction applications, I have found ELECTRONICON PFC capacitors to offer exceptional reliability and performance. The E62.F81 series provides consistent capacitance stability over temperature and long operational life. I particularly appreciate the overpressure safety feature which provides peace of mind in industrial installations. For PFC applications, I recommend maintaining at least 10% voltage margin and ensuring adequate ventilation. The low loss factor of these capacitors contributes to overall system efficiency. German engineering quality is evident in the consistent performance batch after batch.",
        highlight: "German engineering excellence with exceptional reliability and safety features"
      },
      alternativeParts: [
        {
          partNumber: "E62.F81-403D10",
          brand: "ELECTRONICON",
          specifications: {
            "Rated Power": "3.33 kvar",
            "Voltage Rating": "400V AC",
            "Capacitance": "66.3µF"
          },
          comparison: {
            "Power": "3.33kvar => 2.5kvar (+33% higher power)",
            "Voltage": "400V = 400V (same rating)",
            "Capacitance": "66.3µF => 49.7µF (+33% higher)"
          },
          reason: "Higher power rating for larger compensation requirements",
          useCase: "Larger industrial loads requiring more reactive power compensation",
          link: "/electronicon/products/power-factor-correction/e62-f81-403d10.html"
        },
        {
          partNumber: "E62.F81-401D10",
          brand: "ELECTRONICON",
          specifications: {
            "Rated Power": "1.67 kvar",
            "Voltage Rating": "400V AC",
            "Capacitance": "33.2µF"
          },
          comparison: {
            "Power": "1.67kvar <= 2.5kvar (-33% lower power)",
            "Voltage": "400V = 400V (same rating)",
            "Capacitance": "33.2µF <= 49.7µF (-33% lower)"
          },
          reason: "Lower power rating for smaller compensation requirements",
          useCase: "Smaller commercial installations or step compensation",
          link: "/electronicon/products/power-factor-correction/e62-f81-401d10.html"
        }
      ],
      companionParts: [
        {
          partNumber: "E62.F81-402D10",
          description: "Additional capacitor for parallel configuration",
          category: "Power Factor Correction",
          link: "/electronicon/products/power-factor-correction/e62-f81-402d10.html"
        },
        {
          partNumber: "Discharge Resistor",
          description: "Bleeder resistor for capacitor discharge",
          category: "PFC Accessories",
          link: "#"
        },
        {
          partNumber: "PFC Controller",
          description: "Automatic power factor correction controller",
          category: "PFC Systems",
          link: "#"
        }
      ],
      faqs: [
        generateFAQ(
          "What is the expected lifetime of the E62.F81-402D10 capacitor?",
          "The E62.F81-402D10 capacitor has a rated lifetime of 150,000 hours at rated voltage and temperature. With proper derating and thermal management, actual lifetime can exceed 200,000 hours. The self-healing metallized film technology ensures continued operation even after minor dielectric stresses.",
          "For extended lifetime, ensure adequate voltage derating and thermal management.",
          ["E62 lifetime", "capacitor reliability", "PFC capacitor life"]
        ),
        generateFAQ(
          "What safety features does the E62.F81 series have?",
          "The E62.F81 series features an overpressure disconnector that safely disconnects the capacitor in case of internal failure. The aluminum case provides excellent heat dissipation and mechanical protection. All capacitors undergo 100% testing for electrical parameters and safety.",
          "The overpressure disconnector provides important safety protection for industrial installations.",
          ["safety features", "overpressure disconnector", "E62 safety"]
        ),
        generateFAQ(
          "How do I install the E62.F81-402D10 capacitor?",
          "The E62.F81-402D10 capacitor should be mounted vertically using the M12 stud at the bottom. Ensure adequate clearance for heat dissipation. Connect using appropriate cable lugs to the M8 terminals. Always discharge the capacitor before installation or maintenance.",
          "Follow installation guidelines for proper mounting and electrical connections.",
          ["capacitor installation", "E62 mounting", "PFC installation"]
        ),
        generateFAQ(
          "What maintenance is required for E62.F81 capacitors?",
          "E62.F81 capacitors are maintenance-free under normal operating conditions. Periodic visual inspection is recommended to check for case deformation or terminal corrosion. Capacitance measurement during scheduled maintenance can verify continued performance.",
          "Regular visual inspection is sufficient; no maintenance required under normal conditions.",
          ["maintenance", "capacitor care", "PFC maintenance"]
        ),
        generateFAQ(
          "Can the E62.F81-402D10 be used outdoors?",
          "The E62.F81-402D10 is designed for indoor use. For outdoor applications, additional enclosure protection is required to prevent moisture ingress. Contact us for outdoor-rated capacitor options or protection recommendations.",
          "Use appropriate enclosure protection for outdoor installations.",
          ["outdoor use", "environmental protection", "IP rating"]
        ),
        generateFAQ(
          "What is the warranty period for E62.F81 capacitors?",
          "ELECTRONICON E62.F81 capacitors carry a 24-month warranty from date of delivery when operated within specified conditions. Extended warranty options may be available for large projects.",
          "Contact us for warranty details and extended warranty options.",
          ["warranty", "guarantee", "ELECTRONICON warranty"]
        )
      ]
    },
    {
      partNumber: "E62.F81-403D10",
      name: "PFC Capacitor 3.33kvar",
      shortDescription: "E62.F81-403D10 3.33kvar power factor correction capacitor, 400V, 50Hz, for industrial applications.",
      descriptionParagraphs: [
        "The E62.F81-403D10 is a high-power PFC capacitor designed for larger industrial compensation requirements.",
        "Featuring the same reliable construction as the E62 series with higher power rating.",
        "Ideal for industrial plants and large commercial installations requiring significant reactive power compensation."
      ],
      specifications: {
        "Rated Power": "3.33 kvar",
        "Voltage Rating": "400V AC",
        "Frequency": "50Hz",
        "Capacitance": "66.3µF",
        "Tolerance": "-5% / +10%",
        "Temperature Range": "-40°C to +55°C",
        "Loss Factor": "≤0.2 W/kvar",
        "Lifetime": "150,000 hours"
      },
      features: [
        "Higher power rating for large installations",
        "Metallized polypropylene film with self-healing",
        "Low loss factor for energy efficiency",
        "Overpressure disconnector for safety",
        "VDE and UL certified"
      ],
      applications: [
        "Large industrial PFC systems",
        "Commercial building compensation",
        "Renewable energy installations",
        "Step compensation systems"
      ],
      faeReview: {
        author: "Michael Schmidt, Senior FAE - Power Quality",
        title: "Senior FAE - Power Quality",
        content: "The E62.F81-403D10 is my go-to recommendation for medium-sized industrial PFC applications. The 3.33kvar rating is ideal for many industrial loads and allows flexible step sizing in automatic PFC systems. I have specified these capacitors in numerous industrial plants with excellent results. The reliability is outstanding - we see very few field failures even after 10+ years of operation. For large PFC banks, I recommend mixing different power steps including this 3.33kvar unit for optimal compensation accuracy.",
        highlight: "Ideal power rating for flexible industrial PFC system design"
      },
      alternativeParts: [
        {
          partNumber: "E62.F81-402D10",
          brand: "ELECTRONICON",
          specifications: { "Rated Power": "2.5 kvar", "Voltage Rating": "400V AC" },
          comparison: { "Power": "2.5kvar <= 3.33kvar (-25%)", "Voltage": "400V = 400V" },
          reason: "Lower power for smaller compensation steps",
          useCase: "Smaller loads or fine-tuning compensation",
          link: "/electronicon/products/power-factor-correction/e62-f81-402d10.html"
        },
        {
          partNumber: "E62.F81-405D10",
          brand: "ELECTRONICON",
          specifications: { "Rated Power": "5 kvar", "Voltage Rating": "400V AC" },
          comparison: { "Power": "5kvar => 3.33kvar (+50%)", "Voltage": "400V = 400V" },
          reason: "Higher power for larger compensation requirements",
          useCase: "Large industrial loads",
          link: "/electronicon/products/power-factor-correction/e62-f81-405d10.html"
        }
      ],
      companionParts: [
        { partNumber: "E62.F81-402D10", description: "Smaller capacitor for mixed steps", category: "Power Factor Correction", link: "/electronicon/products/power-factor-correction/e62-f81-402d10.html" },
        { partNumber: "PFC Contactor", description: "Contactor for capacitor switching", category: "PFC Accessories", link: "#" },
        { partNumber: "Fuse Link", description: "Protection fuse for capacitor circuit", category: "Protection", link: "#" }
      ],
      faqs: [
        generateFAQ("What is the main difference between E62.F81-403D10 and 402D10?", "The main difference is the power rating - 403D10 provides 3.33kvar compared to 2.5kvar for 402D10. This allows for larger compensation steps or fewer capacitors in large PFC systems.", "Choose 403D10 for larger compensation requirements or 402D10 for finer step control.", ["E62 comparison", "PFC sizing", "capacitor selection"]),
        generateFAQ("Can multiple E62.F81-403D10 capacitors be used in parallel?", "Yes, multiple capacitors can be connected in parallel to achieve higher total compensation. Ensure proper switching and protection for each capacitor.", "Use parallel connection for large compensation banks with proper switching.", ["parallel connection", "PFC banks", "capacitor switching"]),
        generateFAQ("What is the mounting requirement for E62.F81-403D10?", "The capacitor must be mounted vertically using the M12 mounting stud. Ensure adequate ventilation and maintain minimum clearances as specified in the datasheet.", "Follow mounting guidelines for proper installation and cooling.", ["mounting", "installation", "E62 installation"]),
        generateFAQ("How does temperature affect the lifetime of E62.F81-403D10?", "Higher operating temperatures reduce capacitor lifetime following the Arrhenius relationship. For every 10°C above rated temperature, lifetime is approximately halved.", "Ensure adequate cooling to maximize capacitor lifetime.", ["temperature derating", "lifetime", "thermal management"]),
        generateFAQ("What protection is required for E62.F81-403D10?", "Each capacitor should be protected by a suitable fuse or circuit breaker. Overpressure disconnector provides internal fault protection.", "Use appropriate external protection devices for safe operation.", ["protection", "fusing", "safety"]),
        generateFAQ("Can E62.F81-403D10 be used with harmonic filters?", "Yes, but verify the total harmonic current does not exceed capacitor ratings. For high harmonic environments, consider heavy-duty series capacitors.", "Check harmonic levels and select appropriate capacitor type.", ["harmonics", "filters", "power quality"])
      ]
    }
  ]
};

productsData.categories.push(pfcCategory);

// Category 2: DC-Link Capacitors
const dclinkCategory = {
  id: "dc-link-capacitors",
  name: "DC-Link Capacitors",
  description: "High-performance DC-link capacitors for drives, inverters, and power conversion",
  longDescription: "ELECTRONICON DC-link capacitors are engineered for demanding power electronics applications including variable frequency drives, solar inverters, and UPS systems. These capacitors feature high ripple current capability, low inductance, and excellent reliability. The product range includes cylindrical and box-type capacitors with various terminal configurations. As an ELECTRONICON capacitor distributor, we provide technical support for DC-link capacitor selection and application. German manufacturing ensures consistent quality and performance.",
  parameters: ["Capacitance", "Voltage Rating", "Ripple Current", "ESR", "Temperature Range", "Lifetime"],
  applications: ["Variable Frequency Drives", "Solar Inverters", "UPS Systems", "Wind Converters", "Power Supplies"],
  series: [
    {
      name: "E50 DC-Link Series",
      description: "Standard DC-link capacitors for general industrial applications",
      features: ["High ripple current", "Low ESR", "Long lifetime", "Compact design"]
    },
    {
      name: "E51 High Performance Series",
      description: "High-performance DC-link capacitors for demanding applications",
      features: ["Ultra-high ripple current", "Very low ESR", "Extended temperature", "High reliability"]
    }
  ],
  selectionGuide: {
    title: "DC-Link Capacitor Selection Guide",
    description: "Learn how to select the right DC-link capacitor for your inverter or drive",
    articleId: "dc-link-capacitor-selection",
    articleLink: "/electronicon/support/dc-link-capacitor-selection.html"
  },
  selectionGuideLink: {
    url: "/electronicon/support/dc-link-capacitor-selection.html",
    text: "DC-Link Capacitors Selection Guide"
  },
  faqs: [
    generateFAQ("What makes ELECTRONICON DC-link capacitors suitable for drives?", "ELECTRONICON DC-link capacitors feature high ripple current capability, low ESR, and robust construction ideal for VFD applications. German manufacturing ensures consistent quality and reliability.", "Contact our FAE team for DC-link capacitor selection assistance.", ["DC-link features", "VFD capacitors", "drive applications"]),
    generateFAQ("How do I calculate required DC-link capacitance?", "Required capacitance depends on allowable ripple voltage, DC current, and switching frequency. C = I / (2 × π × f × Vripple). Contact us for detailed calculations.", "Provide your application parameters for DC-link sizing assistance.", ["DC-link sizing", "capacitance calculation", "inverter design"]),
    generateFAQ("What ripple current can ELECTRONICON DC-link capacitors handle?", "ELECTRONICON DC-link capacitors are designed for high ripple currents, typically 20-50A depending on the model and cooling conditions. Check datasheets for specific ratings.", "Select capacitors based on your ripple current requirements with adequate margin.", ["ripple current", "current rating", "thermal design"]),
    generateFAQ("What voltage ratings are available for DC-link capacitors?", "ELECTRONICON DC-link capacitors are available from 400V to 1500V DC and higher. Select voltage rating with at least 20% margin above maximum DC bus voltage.", "Contact us for high-voltage DC-link capacitor options.", ["voltage rating", "DC bus voltage", "capacitor selection"]),
    generateFAQ("Can ELECTRONICON DC-link capacitors be used in parallel?", "Yes, multiple capacitors can be connected in parallel for higher capacitance and ripple current capability. Ensure symmetrical layout for balanced current sharing.", "Use parallel connection for high current applications with proper layout.", ["parallel connection", "current sharing", "high current"])
  ],
  products: [
    {
      partNumber: "E50.L11-474N10",
      name: "DC-Link Capacitor 470uF 1100V",
      shortDescription: "E50.L11-474N10 470µF 1100V DC-link capacitor for industrial drives and inverters.",
      descriptionParagraphs: [
        "The E50.L11-474N10 is a high-performance DC-link capacitor designed for industrial drives and power conversion applications.",
        "Features high ripple current capability and low ESR for efficient operation.",
        "The robust cylindrical aluminum case ensures reliable operation in demanding industrial environments."
      ],
      specifications: {
        "Capacitance": "470µF",
        "Voltage Rating": "1100V DC",
        "Ripple Current": "35A @ 10kHz, 45°C",
        "ESR": "≤2.0mΩ @ 10kHz",
        "Temperature Range": "-40°C to +85°C",
        "Lifetime": "100,000 hours @ 45°C"
      },
      features: [
        "High ripple current capability",
        "Low ESR for minimal losses",
        "Self-healing metallized film",
        "Cylindrical aluminum case",
        "Long operational lifetime",
        "German manufacturing quality"
      ],
      applications: [
        "Variable frequency drives",
        "Solar power inverters",
        "UPS systems",
        "Industrial power supplies"
      ],
      faeReview: {
        author: "Klaus Weber, Senior FAE - Power Electronics",
        title: "Senior FAE - Power Electronics",
        content: "The E50.L11 series is an excellent choice for industrial DC-link applications. The 1100V rating provides good margin for 690V AC drives, and the ripple current capability is impressive. In my experience with VFD designs, these capacitors provide reliable performance with minimal heating. I recommend operating at no more than 80% of rated voltage for extended lifetime. The low ESR is particularly beneficial for high-frequency switching applications. German quality is evident in the consistent performance. For thermal design, ensure adequate airflow as the aluminum case relies on convection cooling.",
        highlight: "Excellent ripple current capability with German engineering quality"
      },
      alternativeParts: [
        {
          partNumber: "E50.L11-684N10",
          brand: "ELECTRONICON",
          specifications: { "Capacitance": "680µF", "Voltage Rating": "1100V DC", "Ripple Current": "42A" },
          comparison: { "Capacitance": "680µF => 470µF (+45%)", "Voltage": "1100V = 1100V", "Ripple Current": "42A => 35A (+20%)" },
          reason: "Higher capacitance for lower ripple voltage",
          useCase: "Applications requiring lower DC bus ripple",
          link: "/electronicon/products/dc-link-capacitors/e50-l11-684n10.html"
        },
        {
          partNumber: "E50.L11-334N10",
          brand: "ELECTRONICON",
          specifications: { "Capacitance": "330µF", "Voltage Rating": "1100V DC", "Ripple Current": "28A" },
          comparison: { "Capacitance": "330µF <= 470µF (-30%)", "Voltage": "1100V = 1100V", "Ripple Current": "28A <= 35A (-20%)" },
          reason: "Lower capacitance for cost-sensitive applications",
          useCase: "Smaller drives or higher ripple tolerance",
          link: "/electronicon/products/dc-link-capacitors/e50-l11-334n10.html"
        }
      ],
      companionParts: [
        { partNumber: "E50.L11-474N10", description: "Additional capacitor for parallel", category: "DC-Link Capacitors", link: "/electronicon/products/dc-link-capacitors/e50-l11-474n10.html" },
        { partNumber: "Discharge Resistor", description: "Bleeder resistor for DC bus", category: "Safety Components", link: "#" },
        { partNumber: "IGBT Module", description: "Power semiconductor for inverter", category: "Power Electronics", link: "#" }
      ],
      faqs: [
        generateFAQ("What is the maximum ripple current for E50.L11-474N10?", "The E50.L11-474N10 is rated for 35A ripple current at 10kHz and 45°C ambient. Higher currents are possible with improved cooling or lower ambient temperature.", "For high ripple current, ensure adequate cooling or use parallel capacitors.", ["ripple current", "E50 rating", "thermal design"]),
        generateFAQ("How do I mount the E50.L11-474N10 capacitor?", "The capacitor should be mounted using the M12 threaded stud at the bottom. Ensure good electrical contact for the case connection. Maintain adequate clearance for heat dissipation.", "Mount vertically with proper clearances for cooling.", ["mounting", "installation", "E50 mounting"]),
        generateFAQ("What is the ESR of E50.L11-474N10?", "The E50.L11-474N10 has maximum ESR of 2.0mΩ at 10kHz. Low ESR minimizes power dissipation and heating during operation.", "Low ESR reduces losses and improves efficiency.", ["ESR", "equivalent series resistance", "losses"]),
        generateFAQ("Can E50.L11-474N10 be used for solar inverters?", "Yes, the E50.L11-474N10 is well-suited for solar inverter applications. The 1100V rating accommodates 1000V DC bus systems common in commercial solar installations.", "Suitable for solar inverters with 1000V DC bus voltage.", ["solar inverter", "photovoltaic", "renewable energy"]),
        generateFAQ("What is the expected lifetime of E50.L11-474N10?", "Rated lifetime is 100,000 hours at 45°C and rated voltage. With derating and proper cooling, lifetime can exceed 150,000 hours.", "Implement derating for extended operational life.", ["lifetime", "reliability", "durability"]),
        generateFAQ("Are E50.L11 capacitors suitable for parallel operation?", "Yes, multiple E50.L11 capacitors can be connected in parallel for higher capacitance and current capability. Use symmetrical layout for balanced current distribution.", "Parallel connection is suitable for high current applications.", ["parallel", "current sharing", "high power"])
      ]
    },
    {
      partNumber: "E51.L21-105N10",
      name: "DC-Link Capacitor 1000uF 800V",
      shortDescription: "E51.L21-105N10 1000µF 800V high-performance DC-link capacitor with ultra-high ripple current.",
      descriptionParagraphs: [
        "The E51.L21-105N10 is a high-performance DC-link capacitor from ELECTRONICON's premium E51 series.",
        "Designed for applications requiring maximum ripple current capability and reliability.",
        "Ideal for high-power drives, renewable energy inverters, and demanding industrial applications."
      ],
      specifications: {
        "Capacitance": "1000µF",
        "Voltage Rating": "800V DC",
        "Ripple Current": "55A @ 10kHz, 45°C",
        "ESR": "≤1.5mΩ @ 10kHz",
        "Temperature Range": "-40°C to +85°C",
        "Lifetime": "100,000 hours @ 45°C"
      },
      features: [
        "Ultra-high ripple current capability",
        "Very low ESR for minimal heating",
        "High capacitance density",
        "Premium E51 series construction",
        "Extended temperature operation",
        "German manufacturing quality"
      ],
      applications: [
        "High-power motor drives",
        "Solar and wind inverters",
        "Energy storage systems",
        "Industrial power conversion"
      ],
      faeReview: {
        author: "Klaus Weber, Senior FAE - Power Electronics",
        title: "Senior FAE - Power Electronics",
        content: "The E51.L21 series represents ELECTRONICON's premium DC-link offering. The 1000µF/800V rating with 55A ripple current is exceptional - I've used these in 250kW solar inverters with excellent results. The very low ESR means minimal self-heating even at high ripple currents. For high-power applications, this capacitor can often replace two standard units, saving space and cost. I particularly recommend this series for renewable energy applications where reliability is critical. The German quality and extensive testing give confidence for demanding applications.",
        highlight: "Premium performance with ultra-high ripple current for demanding applications"
      },
      alternativeParts: [
        { partNumber: "E50.L11-105N10", brand: "ELECTRONICON", specifications: { "Capacitance": "1000µF", "Voltage Rating": "800V DC", "Ripple Current": "45A" }, comparison: { "Capacitance": "1000µF = 1000µF", "Voltage": "800V = 800V", "Ripple Current": "45A <= 55A (-18%)" }, reason: "Standard series alternative with lower ripple current", useCase: "Cost-sensitive applications with moderate ripple", link: "/electronicon/products/dc-link-capacitors/e50-l11-105n10.html" },
        { partNumber: "E51.L21-155N10", brand: "ELECTRONICON", specifications: { "Capacitance": "1500µF", "Voltage Rating": "800V DC", "Ripple Current": "65A" }, comparison: { "Capacitance": "1500µF => 1000µF (+50%)", "Voltage": "800V = 800V", "Ripple Current": "65A => 55A (+18%)" }, reason: "Higher capacitance for larger energy storage", useCase: "Very high power applications", link: "/electronicon/products/dc-link-capacitors/e51-l21-155n10.html" }
      ],
      companionParts: [
        { partNumber: "E51.L21-105N10", description: "Additional capacitor for parallel", category: "DC-Link Capacitors", link: "/electronicon/products/dc-link-capacitors/e51-l21-105n10.html" },
        { partNumber: "Pre-charge Circuit", description: "Soft-start circuit for inrush limiting", category: "Protection", link: "#" },
        { partNumber: "Current Sensor", description: "Hall effect sensor for ripple monitoring", category: "Monitoring", link: "#" }
      ],
      faqs: [
        generateFAQ("What is the difference between E50 and E51 series?", "The E51 series offers higher ripple current capability and lower ESR compared to E50 series. E51 is designed for most demanding applications where maximum performance is required.", "Choose E51 for highest performance, E50 for cost-effective solutions.", ["E50 vs E51", "series comparison", "performance"]),
        generateFAQ("What applications benefit most from E51.L21-105N10?", "High-power motor drives, large solar inverters, and energy storage systems benefit most from the high ripple current and reliability of E51.L21-105N10.", "Ideal for high-power renewable energy and industrial applications.", ["applications", "high power", "renewable energy"]),
        generateFAQ("How does the ESR of E51 compare to E50?", "E51 series has approximately 20-30% lower ESR than E50 series, resulting in lower losses and heating at the same ripple current.", "Lower ESR improves efficiency and reduces cooling requirements.", ["ESR comparison", "efficiency", "losses"]),
        generateFAQ("What cooling is required for E51.L21-105N10?", "Natural convection is sufficient for most applications up to 45°C ambient. For higher temperatures or continuous high ripple operation, forced air cooling may be beneficial.", "Ensure adequate airflow for high-temperature or high-load operation.", ["cooling", "thermal management", "temperature"]),
        generateFAQ("Can E51.L21-105N10 replace two smaller capacitors?", "Yes, in many cases one E51.L21-105N10 can replace two standard capacitors, saving space, reducing connections, and improving reliability.", "Consolidation can save space and improve system reliability.", ["consolidation", "space saving", "reliability"]),
        generateFAQ("What is the warranty for E51 series capacitors?", "E51 series capacitors carry a 24-month standard warranty. Extended warranty options are available for large projects.", "Contact us for warranty details and extended coverage options.", ["warranty", "E51 series", "guarantee"])
      ]
    }
  ]
};

productsData.categories.push(dclinkCategory);

// Category 3: Lighting Capacitors
const lightingCategory = {
  id: "lighting-capacitors",
  name: "Lighting Capacitors",
  description: "Reliable capacitors for HID, fluorescent, and LED lighting applications",
  longDescription: "ELECTRONICON lighting capacitors are designed for reliable operation in commercial and industrial lighting systems. These capacitors are optimized for HID lamp ballasts, fluorescent lighting, and LED driver applications. The product range includes capacitors for various lamp types and wattages, with long operational life and high reliability. As an ELECTRONICON capacitor distributor, we provide selection guidance for lighting applications.",
  parameters: ["Capacitance", "Voltage Rating", "Lamp Type", "Temperature Range", "Lifetime", "Case Type"],
  applications: ["HID Lighting", "Fluorescent Lighting", "LED Drivers", "Street Lighting", "Industrial Lighting"],
  series: [
    { name: "E63 HID Series", description: "Capacitors for HID lamp ballasts including metal halide and high-pressure sodium", features: ["Long life", "High reliability", "Low dissipation", "Compact size"] },
    { name: "E64 Fluorescent Series", description: "Capacitors for fluorescent lamp ballasts and LED drivers", features: ["High efficiency", "Compact design", "Reliable starting", "Low temperature rise"] }
  ],
  selectionGuide: { title: "Lighting Capacitor Selection Guide", description: "Learn how to select the right capacitor for your lighting application", articleId: "lighting-capacitor-selection", articleLink: "/electronicon/support/lighting-capacitor-selection.html" },
  selectionGuideLink: { url: "/electronicon/support/lighting-capacitor-selection.html", text: "Lighting Capacitors Selection Guide" },
  faqs: [
    generateFAQ("What types of lighting capacitors does ELECTRONICON offer?", "ELECTRONICON offers capacitors for HID lighting (metal halide, HPS), fluorescent lighting, and LED applications. Each type is optimized for the specific requirements of the lamp technology.", "Select capacitors based on your specific lamp type and wattage.", ["lighting types", "HID capacitors", "fluorescent capacitors"]),
    generateFAQ("How do I select a capacitor for HID lighting?", "HID capacitors are selected based on lamp wattage and type. Check the lamp manufacturer's specifications for recommended capacitance value and voltage rating.", "Contact us for HID capacitor selection assistance.", ["HID selection", "lamp ballast", "lighting design"]),
    generateFAQ("What is the lifetime of ELECTRONICON lighting capacitors?", "ELECTRONICON lighting capacitors typically have a rated lifetime of 10,000 to 15,000 hours depending on the series and operating conditions.", "Proper voltage derating extends capacitor lifetime in lighting applications.", ["lighting lifetime", "reliability", "operational life"]),
    generateFAQ("Can ELECTRONICON capacitors be used for LED drivers?", "Yes, ELECTRONICON offers capacitors suitable for LED driver applications including input filtering and power factor correction.", "Contact us for LED driver capacitor recommendations.", ["LED drivers", "LED lighting", "solid state lighting"]),
    generateFAQ("What voltage rating is needed for lighting capacitors?", "Lighting capacitors should have voltage rating at least 1.5 times the peak operating voltage. For 230V systems, 400V or 450V rated capacitors are typically used.", "Select voltage rating with adequate safety margin.", ["voltage rating", "lighting voltage", "safety margin"])
  ],
  products: [
    {
      partNumber: "E63.N11-204N10",
      name: "HID Capacitor 20uF 400V",
      shortDescription: "E63.N11-204N10 20µF 400V capacitor for HID lamp ballasts, 70-150W metal halide.",
      descriptionParagraphs: [
        "The E63.N11-204N10 is a reliable capacitor designed for HID lamp ballast applications.",
        "Optimized for 70-150W metal halide and high-pressure sodium lamps.",
        "Features long operational life and reliable starting characteristics."
      ],
      specifications: { "Capacitance": "20µF", "Voltage Rating": "400V AC", "Lamp Power": "70-150W", "Tolerance": "±10%", "Temperature Range": "-25°C to +85°C", "Lifetime": "15,000 hours @ 85°C" },
      features: ["Optimized for HID lamps", "Reliable starting", "Long operational life", "Compact plastic case", "Low dissipation factor", "VDE certified" ],
      applications: ["Metal halide lamps", "High-pressure sodium", "Street lighting", "Industrial HID lighting" ],
      faeReview: { author: "Hans Mueller, FAE - Lighting Applications", title: "FAE - Lighting Applications", content: "The E63 series is my standard recommendation for HID lighting applications. The 20µF/400V rating is perfect for 70-150W metal halide lamps. I've specified these in numerous street lighting and industrial lighting projects with excellent reliability. The starting characteristics are consistent, and the long lifetime reduces maintenance costs. For outdoor applications, I recommend the 85°C rated version for extended life in high ambient temperatures. The compact size is beneficial for ballast designs with space constraints.", highlight: "Reliable performance optimized for HID lighting applications" },
      alternativeParts: [
        { partNumber: "E63.N11-254N10", brand: "ELECTRONICON", specifications: { "Capacitance": "25µF", "Voltage Rating": "400V AC", "Lamp Power": "150-250W" }, comparison: { "Capacitance": "25µF => 20µF (+25%)", "Voltage": "400V = 400V", "Lamp Power": "150-250W => 70-150W" }, reason: "Higher capacitance for larger lamps", useCase: "150-250W HID lamps", link: "/electronicon/products/lighting-capacitors/e63-n11-254n10.html" },
        { partNumber: "E63.N11-154N10", brand: "ELECTRONICON", specifications: { "Capacitance": "15µF", "Voltage Rating": "400V AC", "Lamp Power": "35-70W" }, comparison: { "Capacitance": "15µF <= 20µF (-25%)", "Voltage": "400V = 400V", "Lamp Power": "35-70W <= 70-150W" }, reason: "Lower capacitance for smaller lamps", useCase: "35-70W HID lamps", link: "/electronicon/products/lighting-capacitors/e63-n11-154n10.html" }
      ],
      companionParts: [
        { partNumber: "E63.N11-204N10", description: "Same capacitor for multi-lamp fixtures", category: "Lighting Capacitors", link: "/electronicon/products/lighting-capacitors/e63-n11-204n10.html" },
        { partNumber: "Ignitor", description: "HID lamp ignitor for starting", category: "Lighting Components", link: "#" },
        { partNumber: "Ballast", description: "Magnetic ballast for HID lamp", category: "Lighting Components", link: "#" }
      ],
      faqs: [
        generateFAQ("What lamp types is E63.N11-204N10 suitable for?", "E63.N11-204N10 is designed for 70-150W metal halide and high-pressure sodium lamps. Check lamp manufacturer specifications for compatibility.", "Verify lamp compatibility before specification.", ["lamp compatibility", "HID lamps", "metal halide"]),
        generateFAQ("How long does E63.N11-204N10 last in operation?", "Rated lifetime is 15,000 hours at 85°C. In typical outdoor lighting with lower temperatures, actual lifetime can exceed 20,000 hours.", "Lower operating temperature extends capacitor lifetime.", ["lifetime", "reliability", "HID capacitor life"]),
        generateFAQ("Can E63.N11-204N10 be used outdoors?", "Yes, with appropriate fixture protection. The capacitor is designed for outdoor lighting applications with proper enclosure.", "Use appropriate IP-rated fixtures for outdoor installations.", ["outdoor lighting", "street lighting", "IP rating"]),
        generateFAQ("What is the temperature rating of E63.N11-204N10?", "The capacitor is rated for -25°C to +85°C operation. For high-temperature environments, ensure adequate fixture ventilation.", "Ensure adequate cooling in high-temperature applications.", ["temperature rating", "thermal", "cooling"]),
        generateFAQ("How do I wire E63.N11-204N10 in a ballast circuit?", "Connect the capacitor in parallel with the lamp according to the ballast wiring diagram. Ensure proper terminal connections and insulation.", "Follow ballast manufacturer wiring diagrams for proper connection.", ["wiring", "ballast circuit", "installation"]),
        generateFAQ("What safety certifications does E63.N11-204N10 have?", "E63.N11-204N10 carries VDE certification for European markets and UL recognition for North American markets.", "Contact us for certification documentation.", ["certifications", "VDE", "UL"])
      ]
    },
    {
      partNumber: "E64.P11-334N10",
      name: "Fluorescent Capacitor 33uF 250V",
      shortDescription: "E64.P11-334N10 33µF 250V capacitor for fluorescent lamp ballasts, T8/T5 tubes.",
      descriptionParagraphs: [
        "The E64.P11-334N10 is designed for fluorescent lamp ballast applications.",
        "Suitable for T8 and T5 fluorescent tubes in commercial and industrial lighting.",
        "Features reliable starting and long operational life."
      ],
      specifications: { "Capacitance": "33µF", "Voltage Rating": "250V AC", "Lamp Type": "T8/T5 Fluorescent", "Tolerance": "±10%", "Temperature Range": "-25°C to +85°C", "Lifetime": "15,000 hours @ 85°C" },
      features: ["Optimized for fluorescent lamps", "Reliable starting", "Long lifetime", "Compact design", "Low temperature rise", "VDE certified" ],
      applications: ["T8 fluorescent tubes", "T5 fluorescent tubes", "Commercial lighting", "Office lighting" ],
      faeReview: { author: "Hans Mueller, FAE - Lighting Applications", title: "FAE - Lighting Applications", content: "The E64 series provides reliable performance for fluorescent lighting. The 33µF/250V rating is commonly used for T8 and T5 tubes in commercial installations. I appreciate the consistent quality which ensures reliable lamp starting over the capacitor lifetime. For retrofit projects, these capacitors offer good compatibility with existing ballasts. The compact size helps in space-constrained fixtures. I recommend these for office lighting, retail spaces, and other commercial applications where reliability and long life are important.", highlight: "Reliable fluorescent lighting capacitor with consistent quality" },
      alternativeParts: [
        { partNumber: "E64.P11-474N10", brand: "ELECTRONICON", specifications: { "Capacitance": "47µF", "Voltage Rating": "250V AC" }, comparison: { "Capacitance": "47µF => 33µF (+42%)", "Voltage": "250V = 250V" }, reason: "Higher capacitance for longer tubes", useCase: "Longer fluorescent tubes or higher power", link: "/electronicon/products/lighting-capacitors/e64-p11-474n10.html" },
        { partNumber: "E64.P11-224N10", brand: "ELECTRONICON", specifications: { "Capacitance": "22µF", "Voltage Rating": "250V AC" }, comparison: { "Capacitance": "22µF <= 33µF (-33%)", "Voltage": "250V = 250V" }, reason: "Lower capacitance for shorter tubes", useCase: "Shorter fluorescent tubes", link: "/electronicon/products/lighting-capacitors/e64-p11-224n10.html" }
      ],
      companionParts: [
        { partNumber: "E64.P11-334N10", description: "Same capacitor for multi-lamp fixtures", category: "Lighting Capacitors", link: "/electronicon/products/lighting-capacitors/e64-p11-334n10.html" },
        { partNumber: "Starter", description: "Fluorescent lamp starter", category: "Lighting Components", link: "#" },
        { partNumber: "Ballast", description: "Magnetic or electronic ballast", category: "Lighting Components", link: "#" }
      ],
      faqs: [
        generateFAQ("What fluorescent tubes is E64.P11-334N10 suitable for?", "E64.P11-334N10 is suitable for T8 and T5 fluorescent tubes. Check ballast specifications for correct capacitance value.", "Verify ballast compatibility for proper operation.", ["fluorescent tubes", "T8", "T5"]),
        generateFAQ("Can E64.P11-334N10 be used with electronic ballasts?", "E64.P11-334N10 is designed for magnetic ballasts. For electronic ballasts, different capacitor types may be required.", "Check electronic ballast specifications for capacitor requirements.", ["electronic ballasts", "magnetic ballasts", "compatibility"]),
        generateFAQ("What is the expected lifetime of E64.P11-334N10?", "Rated lifetime is 15,000 hours at 85°C. In typical indoor lighting, actual lifetime can be 20,000+ hours.", "Indoor applications typically achieve longer lifetime.", ["lifetime", "fluorescent", "reliability"]),
        generateFAQ("How does temperature affect E64.P11-334N10?", "Higher temperatures reduce capacitor lifetime. Ensure adequate fixture ventilation, especially in enclosed luminaires.", "Provide adequate ventilation for extended lifetime.", ["temperature", "ventilation", "thermal"]),
        generateFAQ("Can E64.P11-334N10 be used for LED retrofits?", "E64.P11-334N10 is designed for fluorescent lamps. LED retrofits typically do not require this type of capacitor.", "LED retrofits have different capacitor requirements.", ["LED retrofit", "LED lighting", "solid state"]),
        generateFAQ("What certifications does E64.P11-334N10 carry?", "E64.P11-334N10 carries VDE certification and complies with EN standards for lighting capacitors.", "Contact us for certification documentation.", ["certifications", "VDE", "EN standards"])
      ]
    }
  ]
};

productsData.categories.push(lightingCategory);

// Category 4: Filter and Snubber Capacitors
const filterCategory = {
  id: "filter-snubber-capacitors",
  name: "Filter and Snubber Capacitors",
  description: "Specialized capacitors for filtering, snubber circuits, and high-frequency applications",
  longDescription: "ELECTRONICON filter and snubber capacitors are designed for demanding power electronics applications. These capacitors feature low inductance, high dv/dt capability, and excellent high-frequency performance. The product range includes capacitors for output filters, snubber circuits, and EMI filtering. As an ELECTRONICON capacitor distributor, we provide technical support for filter capacitor selection.",
  parameters: ["Capacitance", "Voltage Rating", "dv/dt", "Inductance", "Temperature Range", "Lifetime"],
  applications: ["Output Filters", "Snubber Circuits", "EMI Filtering", "Resonant Circuits", "High Frequency"],
  series: [
    { name: "E55 Filter Series", description: "Capacitors for output filters and EMI filtering applications", features: ["Low inductance", "High dv/dt", "Low ESR", "High frequency"] },
    { name: "E56 Snubber Series", description: "Capacitors for snubber and protection circuits", features: ["High pulse current", "Low inductance", "Self-healing", "Compact"] }
  ],
  selectionGuide: { title: "Filter Capacitor Selection Guide", description: "Learn how to select the right filter or snubber capacitor", articleId: "filter-capacitor-selection", articleLink: "/electronicon/support/filter-capacitor-selection.html" },
  selectionGuideLink: { url: "/electronicon/support/filter-capacitor-selection.html", text: "Filter and Snubber Capacitors Selection Guide" },
  faqs: [
    generateFAQ("What are filter capacitors used for?", "Filter capacitors are used to reduce ripple voltage, attenuate harmonics, and suppress EMI in power electronics applications.", "Contact us for filter capacitor selection assistance.", ["filter applications", "EMI filtering", "output filters"]),
    generateFAQ("What is a snubber capacitor?", "Snubber capacitors are used to suppress voltage transients and protect power semiconductors from overvoltage stress.", "Select snubber capacitors based on dv/dt and pulse current requirements.", ["snubber capacitors", "transient suppression", "protection"]),
    generateFAQ("What is dv/dt rating?", "dv/dt is the rate of voltage change a capacitor can withstand. High dv/dt capacitors are needed for fast-switching applications.", "Select capacitors with adequate dv/dt for your switching frequency.", ["dv/dt", "voltage change rate", "switching"]),
    generateFAQ("What inductance is acceptable for filter capacitors?", "Lower inductance is better for high-frequency filtering. ELECTRONICON filter capacitors have very low ESL for optimal high-frequency performance.", "Choose low inductance capacitors for high-frequency applications.", ["inductance", "ESL", "high frequency"]),
    generateFAQ("Can filter capacitors handle pulse currents?", "Yes, ELECTRONICON filter and snubber capacitors are designed to handle high pulse currents associated with switching transients.", "Check pulse current ratings for your specific application.", ["pulse current", "transient current", "switching"])
  ],
  products: [
    {
      partNumber: "E55.M11-205N10",
      name: "Filter Capacitor 2uF 1000V",
      shortDescription: "E55.M11-205N10 2µF 1000V filter capacitor for inverter output filtering.",
      descriptionParagraphs: [
        "The E55.M11-205N10 is a high-performance filter capacitor for inverter output filtering.",
        "Features very low inductance and high dv/dt capability.",
        "Ideal for reducing EMI and improving output waveform quality."
      ],
      specifications: { "Capacitance": "2µF", "Voltage Rating": "1000V AC/DC", "dv/dt": ">1000V/µs", "Inductance": "<20nH", "Temperature Range": "-40°C to +85°C", "Lifetime": "100,000 hours" },
      features: ["Very low inductance", "High dv/dt capability", "Low ESR", "Self-healing", "Compact design", "High frequency performance" ],
      applications: ["Inverter output filters", "EMI suppression", "Motor drives", "Power supplies" ],
      faeReview: { author: "Klaus Weber, Senior FAE - Power Electronics", title: "Senior FAE - Power Electronics", content: "The E55 series is excellent for inverter output filtering. The 2µF/1000V rating with very low inductance provides effective EMI reduction. I've used these in motor drive applications where output filtering is critical for motor life. The high dv/dt capability handles fast switching edges without degradation. For high-frequency inverters above 10kHz, the low ESL is essential for effective filtering. I recommend placing these capacitors as close to the inverter output as possible for best EMI suppression.", highlight: "Excellent high-frequency performance with very low inductance" },
      alternativeParts: [
        { partNumber: "E55.M11-305N10", brand: "ELECTRONICON", specifications: { "Capacitance": "3µF", "Voltage Rating": "1000V AC/DC" }, comparison: { "Capacitance": "3µF => 2µF (+50%)", "Voltage": "1000V = 1000V" }, reason: "Higher capacitance for better filtering", useCase: "Applications requiring more filtering", link: "/electronicon/products/filter-snubber-capacitors/e55-m11-305n10.html" },
        { partNumber: "E55.M11-105N10", brand: "ELECTRONICON", specifications: { "Capacitance": "1µF", "Voltage Rating": "1000V AC/DC" }, comparison: { "Capacitance": "1µF <= 2µF (-50%)", "Voltage": "1000V = 1000V" }, reason: "Lower capacitance for high-frequency applications", useCase: "High-frequency filtering", link: "/electronicon/products/filter-snubber-capacitors/e55-m11-105n10.html" }
      ],
      companionParts: [
        { partNumber: "E55.M11-205N10", description: "Additional capacitor for multi-stage filter", category: "Filter Capacitors", link: "/electronicon/products/filter-snubber-capacitors/e55-m11-205n10.html" },
        { partNumber: "Filter Inductor", description: "Inductor for LC filter stage", category: "Filter Components", link: "#" },
        { partNumber: "Common Mode Choke", description: "CM choke for EMI filtering", category: "EMI Components", link: "#" }
      ],
      faqs: [
        generateFAQ("What is the inductance of E55.M11-205N10?", "E55.M11-205N10 has very low inductance of less than 20nH, making it ideal for high-frequency filtering applications.", "Low inductance is critical for effective high-frequency filtering.", ["inductance", "ESL", "low inductance"]),
        generateFAQ("What dv/dt can E55.M11-205N10 handle?", "E55.M11-205N10 can handle dv/dt greater than 1000V/µs, suitable for fast-switching IGBT and SiC applications.", "High dv/dt capability is essential for modern power electronics.", ["dv/dt", "switching speed", "fast switching"]),
        generateFAQ("How do I use E55.M11-205N10 for EMI filtering?", "Connect the capacitor between inverter output phases and ground or between phases. Mount as close to the inverter as possible for best EMI suppression.", "Proper placement is critical for effective EMI filtering.", ["EMI filtering", "placement", "installation"]),
        generateFAQ("Can E55.M11-205N10 be used for motor output filtering?", "Yes, E55.M11-205N10 is well-suited for motor output filtering to reduce dv/dt stress on motor windings.", "Output filtering extends motor life in VFD applications.", ["motor filtering", "dv/dt filter", "motor protection"]),
        generateFAQ("What is the temperature rating of E55.M11-205N10?", "E55.M11-205N10 is rated for -40°C to +85°C operation, suitable for industrial environments.", "Ensure adequate cooling for high-temperature applications.", ["temperature rating", "thermal", "cooling"]),
        generateFAQ("What lifetime can be expected from E55.M11-205N10?", "Rated lifetime is 100,000 hours under normal operating conditions. Proper derating extends lifetime further.", "Follow derating guidelines for extended operational life.", ["lifetime", "reliability", "durability"])
      ]
    },
    {
      partNumber: "E56.N11-104N10",
      name: "Snubber Capacitor 0.1uF 2000V",
      shortDescription: "E56.N11-104N10 0.1µF 2000V snubber capacitor for IGBT protection.",
      descriptionParagraphs: [
        "The E56.N11-104N10 is a high-voltage snubber capacitor designed for IGBT and power semiconductor protection.",
        "Features high pulse current capability and low inductance for effective transient suppression.",
        "Essential for protecting power semiconductors from overvoltage transients."
      ],
      specifications: { "Capacitance": "0.1µF", "Voltage Rating": "2000V DC", "Pulse Current": ">100A", "dv/dt": ">5000V/µs", "Inductance": "<10nH", "Temperature Range": "-40°C to +85°C" },
      features: ["High voltage rating", "High pulse current", "Very low inductance", "Self-healing", "Compact design", "High dv/dt capability" ],
      applications: ["IGBT snubber circuits", "Thyristor protection", "Power semiconductor protection", "Overvoltage suppression" ],
      faeReview: { author: "Klaus Weber, Senior FAE - Power Electronics", title: "Senior FAE - Power Electronics", content: "The E56 series is my standard choice for snubber applications. The 0.1µF/2000V rating with high pulse current capability provides excellent protection for IGBTs. I've specified these in numerous inverter designs with excellent results. The very low inductance ensures fast response to voltage transients. For high-power IGBTs, proper snubber design is critical, and these capacitors deliver reliable protection. The self-healing feature is important as snubber capacitors can experience occasional overstress. I recommend these for any application requiring reliable overvoltage protection.", highlight: "Reliable snubber capacitor with high pulse current capability" },
      alternativeParts: [
        { partNumber: "E56.N11-224N10", brand: "ELECTRONICON", specifications: { "Capacitance": "0.22µF", "Voltage Rating": "2000V DC" }, comparison: { "Capacitance": "0.22µF => 0.1µF (+120%)", "Voltage": "2000V = 2000V" }, reason: "Higher capacitance for larger snubber energy", useCase: "Higher power applications", link: "/electronicon/products/filter-snubber-capacitors/e56-n11-224n10.html" },
        { partNumber: "E56.N11-474N10", brand: "ELECTRONICON", specifications: { "Capacitance": "0.47µF", "Voltage Rating": "2000V DC" }, comparison: { "Capacitance": "0.47µF => 0.1µF (+370%)", "Voltage": "2000V = 2000V" }, reason: "Much higher capacitance for high-energy transients", useCase: "Very high power or high-energy applications", link: "/electronicon/products/filter-snubber-capacitors/e56-n11-474n10.html" }
      ],
      companionParts: [
        { partNumber: "E56.N11-104N10", description: "Additional capacitor for multi-snubber", category: "Snubber Capacitors", link: "/electronicon/products/filter-snubber-capacitors/e56-n11-104n10.html" },
        { partNumber: "Snubber Resistor", description: "Resistor for RC snubber circuit", category: "Snubber Components", link: "#" },
        { partNumber: "Diode", description: "Fast recovery diode for snubber", category: "Power Components", link: "#" }
      ],
      faqs: [
        generateFAQ("What is the pulse current rating of E56.N11-104N10?", "E56.N11-104N10 can handle pulse currents greater than 100A, suitable for IGBT snubber applications.", "High pulse current is essential for effective transient suppression.", ["pulse current", "transient", "snubber"]),
        generateFAQ("How do I size a snubber capacitor?", "Snubber capacitor value depends on circuit inductance, switching speed, and energy to be absorbed. Typical values range from 0.01µF to 1µF.", "Contact us for snubber design assistance.", ["snubber design", "capacitor sizing", "protection"]),
        generateFAQ("Where should E56.N11-104N10 be placed?", "Place the snubber capacitor as close as possible to the semiconductor terminals to minimize stray inductance.", "Minimize connection inductance for effective protection.", ["placement", "layout", "inductance"]),
        generateFAQ("Can E56.N11-104N10 be used for SiC MOSFETs?", "Yes, E56.N11-104N10 is suitable for SiC MOSFET protection with its high dv/dt capability.", "High dv/dt rating is important for fast-switching SiC devices.", ["SiC", "SiC MOSFET", "wide bandgap"]),
        generateFAQ("What resistor should be used with E56.N11-104N10?", "Snubber resistor value depends on circuit characteristics. Typical values are 1-50 ohms. Contact us for specific recommendations.", "Proper resistor selection is critical for snubber effectiveness.", ["snubber resistor", "RC snubber", "damping"]),
        generateFAQ("How long does E56.N11-104N10 last in snubber service?", "With proper design, E56.N11-104N10 can last the lifetime of the equipment. The self-healing feature handles occasional overstress.", "Proper snubber design ensures long capacitor lifetime.", ["lifetime", "reliability", "self-healing"])
      ]
    }
  ]
};

productsData.categories.push(filterCategory);

// Write products.json
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✅ Created products.json with 4 categories and 8 products');

console.log('\nProducts data structure created:');
console.log('  - Power Factor Correction Capacitors: 2 products');
console.log('  - DC-Link Capacitors: 2 products');
console.log('  - Lighting Capacitors: 2 products');
console.log('  - Filter and Snubber Capacitors: 2 products');
console.log('  - Total: 8 products with 6 FAQs each');
console.log('  - Root FAQs: 5');
console.log('  - Category FAQs: 5 each');
