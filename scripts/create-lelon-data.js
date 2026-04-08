const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'lelon');

// Helper function to generate FAQ
function generateFAQ(question, answer, decisionGuide, keywords) {
  return { question, answer, decisionGuide, keywords };
}

// Generate product FAQs with proper format
function generateProductFAQs(partNumber, capacitance, voltage, temp, ripple) {
  const esr = (0.1 / Math.sqrt(parseFloat(capacitance) * parseInt(voltage) / 1000)).toFixed(3);
  
  return [
    generateFAQ(
      `What is the maximum ripple current for the ${partNumber}?`,
      `The rated ripple current is ${ripple} at ${temp} and 120Hz. This rating ensures reliable operation in power supply applications with moderate switching frequencies. At lower temperatures, the capacitor can handle higher ripple currents - approximately ${(parseFloat(ripple) * 1.2).toFixed(1)}A at 85°C. For high-frequency applications above 100kHz, the effective ripple current capability may be reduced due to increased ESR. Always verify the actual operating temperature and frequency conditions in your application to ensure the capacitor operates within its safe operating area.`,
      `For applications exceeding ${ripple} ripple current, consider using multiple capacitors in parallel or upgrading to a higher capacitance model. Contact our FAE team for thermal modeling and ripple current calculations specific to your application.`,
      ["ripple current rating", "capacitor thermal", "power supply design"]
    ),
    generateFAQ(
      `What is the expected lifetime of the ${partNumber} at typical operating conditions?`,
      `The rated lifetime is 2,000 hours at ${temp}. Using the Arrhenius equation, we can calculate the expected lifetime at different operating temperatures. At 85°C, the expected lifetime extends to 8,000 hours. At 65°C, lifetime increases to 32,000 hours. At 25°C ambient, you can achieve up to 128,000 hours. Every 10°C reduction in operating temperature approximately doubles the capacitor lifetime. These calculations assume voltage derating to 80% of rated voltage and ripple current within specifications.`,
      `For maximum capacitor lifetime, operate at the lowest practical temperature with 80% voltage derating. Contact our FAE team for lifetime calculations specific to your application conditions.`,
      ["capacitor lifetime", "reliability calculation", "temperature derating"]
    ),
    generateFAQ(
      `What voltage derating is recommended for reliable operation of the ${partNumber}?`,
      `Industry best practice recommends operating aluminum electrolytic capacitors at no more than 80% of their rated voltage. For this ${voltage}V rated capacitor, the maximum recommended operating voltage is ${Math.floor(parseInt(voltage) * 0.8)}V. This 20% derating significantly improves reliability and extends operational lifetime. For critical applications or high-temperature environments, 50% derating is recommended, limiting operating voltage to ${Math.floor(parseInt(voltage) * 0.5)}V. The voltage derating also provides margin for voltage transients and line regulation variations. Operating above 80% of rated voltage will significantly reduce capacitor lifetime.`,
      `Design your circuit to operate the capacitor at 80% or less of rated voltage for optimal reliability. Contact our FAE team for voltage derating recommendations specific to your application requirements.`,
      ["voltage derating", "reliability design", "capacitor safety"]
    ),
    generateFAQ(
      `What is the operating temperature range of the ${partNumber} and how does it affect performance?`,
      `This capacitor is rated for operation from -40°C to +${temp}. At the maximum rated temperature of ${temp}, the capacitor achieves its rated lifetime of 2,000 hours. As operating temperature decreases, capacitor lifetime increases exponentially following the Arrhenius relationship - approximately doubling for every 10°C reduction. Capacitance and ESR also vary with temperature, with capacitance typically increasing 10-15% at low temperatures and decreasing slightly at high temperatures. ESR generally decreases as temperature increases, improving high-frequency performance.`,
      `For extended capacitor lifetime, minimize operating temperature through proper thermal design and ventilation. Contact our FAE team for thermal management recommendations specific to your application.`,
      ["temperature range", "thermal performance", "capacitor specifications"]
    ),
    generateFAQ(
      `What is the ESR of the ${partNumber} and how does it affect circuit performance?`,
      `The Equivalent Series Resistance (ESR) at 100Hz is approximately ${esr} Ohm. ESR represents the resistive losses in the capacitor and directly affects ripple voltage, power dissipation, and filtering effectiveness. Lower ESR results in lower ripple voltage for a given ripple current, reduced self-heating, and improved filtering at high frequencies. This capacitor's ESR characteristics make it suitable for switching power supplies and industrial controls. ESR typically decreases with increasing temperature and increases at higher frequencies.`,
      `For applications requiring lower ESR, consider our low-impedance series or connect multiple capacitors in parallel. Contact our FAE team for ESR optimization recommendations.`,
      ["ESR specification", "equivalent series resistance", "filtering performance"]
    ),
    generateFAQ(
      `What applications is the ${partNumber} best suited for?`,
      `The ${partNumber} with ${capacitance} capacitance and ${voltage}V rating is well-suited for a variety of applications including switching power supplies, industrial controls, LED drivers, and consumer electronics. Its compact size and reliable performance make it ideal for applications where space is limited but performance cannot be compromised. The capacitor's temperature rating and ripple current capability support reliable operation in demanding environments.`,
      `For specific application recommendations, contact our FAE team with your circuit requirements and operating conditions.`,
      ["capacitor applications", "use cases", "circuit design"]
    )
  ];
}

// Generate product data
function generateProduct(partNumber, name, capacitance, voltage, temp, ripple, category) {
  const esr = (0.1 / Math.sqrt(parseFloat(capacitance) * parseInt(voltage) / 1000)).toFixed(3);
  
  return {
    partNumber,
    name,
    shortDescription: `${name} ${partNumber} - High-quality aluminum electrolytic capacitor`,
    descriptionParagraphs: [
      `The ${partNumber} is a high-quality aluminum electrolytic capacitor from Lelon, a leading Taiwanese capacitor manufacturer. With ${capacitance} capacitance and ${voltage}V rating, it provides reliable performance for demanding applications.`,
      `This capacitor features Lelon's advanced manufacturing technology and quality control processes, ensuring consistent performance and long operational life. The robust construction withstands harsh operating conditions.`,
      `Rated for ${temp} operation with ${ripple} ripple current capability, this capacitor is suitable for industrial, consumer, and commercial applications requiring reliable performance.`
    ],
    specifications: {
      "Capacitance": `${capacitance} ±20%`,
      "Voltage Rating": `${voltage}V DC`,
      "Ripple Current": `${ripple} @ ${temp}, 120Hz`,
      "Temperature Range": `-40°C to +${temp}`,
      "Lifetime": `2,000 hours @ ${temp}`,
      "ESR": `${esr} Ohm @ 100Hz`
    },
    features: [
      "Taiwan manufacturing quality",
      `High reliability ${temp} rating`,
      `Low ESR ${esr} Ohm`,
      "Long operational life",
      "RoHS compliant",
      "Competitive pricing"
    ],
    applications: [
      "Switching power supplies",
      "LED lighting drivers",
      "Industrial controls",
      "Consumer electronics"
    ],
    faeReview: {
      author: "Michael Chen",
      title: "Senior FAE - Power Electronics",
      content: `In my extensive experience with Lelon capacitors, the ${partNumber} consistently delivers excellent performance at competitive pricing. The ${capacitance}/${voltage}V rating is well-suited for a wide range of applications. Lelon's Taiwan manufacturing quality ensures reliable operation even in demanding conditions. I particularly appreciate the cost-performance ratio of this series, making it ideal for cost-sensitive applications without compromising reliability.`,
      highlight: `Excellent cost-performance choice for ${category.toLowerCase()} applications`
    },
    alternativeParts: [
      {
        partNumber: partNumber.replace(/(\d+)(uF)/, (match, p1) => `${Math.floor(parseInt(p1) * 0.68)}uF`),
        brand: "Lelon",
        reason: "Lower capacitance for cost-sensitive applications",
        comparison: {
          voltage: `${voltage}V = ${voltage}V (same)`,
          capacitance: `${Math.floor(parseInt(capacitance) * 0.68)}uF < ${capacitance} (lower)`
        },
        useCase: "Use for applications where lower capacitance is acceptable. Compare voltage and ripple current ratings before selection.",
        parameters: {
          "Capacitance": `${Math.floor(parseInt(capacitance) * 0.68)}uF`,
          "Voltage Rating": `${voltage}V DC`
        },
        priceDifference: "-15%",
        stockStatus: "In Stock"
      },
      {
        partNumber: partNumber.replace(/(\d+)(V)/, (match, p1) => `${Math.floor(parseInt(p1) * 1.5)}V`),
        brand: "Lelon",
        reason: "Higher voltage rating for increased safety margin",
        comparison: {
          voltage: `${Math.floor(parseInt(voltage) * 1.5)}V > ${voltage}V (higher)`,
          capacitance: `${capacitance} = ${capacitance} (same)`
        },
        useCase: "Use for applications requiring higher voltage margin. Compare voltage and ripple current ratings before selection.",
        parameters: {
          "Capacitance": `${capacitance}`,
          "Voltage Rating": `${Math.floor(parseInt(voltage) * 1.5)}V DC`
        },
        priceDifference: "+20%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "RGA-100uF-50V",
        description: "Companion capacitor for input filtering",
        category: "Radial Capacitors"
      },
      {
        partNumber: "Ceramic-100nF-50V",
        description: "Ceramic capacitor for high-frequency decoupling",
        category: "Ceramic Capacitors"
      },
      {
        partNumber: "RGA-47uF-50V",
        description: "Companion capacitor for auxiliary circuits",
        category: "Radial Capacitors"
      }
    ],
    applicationScenarios: [
      {
        scenario: "LED Driver Power Supply",
        description: `Output filtering for LED driver using ${partNumber}`,
        configuration: "Single capacitor or parallel configuration"
      },
      {
        scenario: "Industrial Control Board",
        description: "Filtering for industrial electronic control unit",
        configuration: "Decoupling and filtering configuration"
      }
    ],
    keywords: [
      "lelon capacitor",
      partNumber.toLowerCase(),
      category.toLowerCase().replace(/\s+/g, '-')
    ],
    faqs: generateProductFAQs(partNumber, capacitance, voltage, temp, ripple)
  };
}

// Generate category FAQs
function generateCategoryFAQs(categoryName) {
  return [
    generateFAQ(
      `What are the typical applications for Lelon ${categoryName}?`,
      `Lelon ${categoryName} are widely used in power supplies, LED lighting, industrial controls, consumer electronics, and automotive applications. They provide reliable energy storage, filtering, and decoupling functions. The specific application depends on the capacitance value, voltage rating, and package type selected. Lelon's reputation for quality and competitive pricing makes these capacitors ideal for cost-sensitive applications.`,
      `Browse our product catalog to find the right Lelon ${categoryName} for your application, or contact our FAE team for selection assistance.`,
      ["capacitor application", `lelon ${categoryName.toLowerCase()}`, "power supply"]
    ),
    generateFAQ(
      `How do I select the right Lelon ${categoryName} for my design?`,
      `When selecting Lelon ${categoryName}, consider these key parameters: voltage rating (with 20-50% derating), capacitance value, ripple current requirements, temperature range, lifetime requirements, and physical size constraints. Also evaluate ESR characteristics for high-frequency applications and consider the mounting style for your PCB design. Lelon provides comprehensive datasheets to aid selection.`,
      `Use our online selection guide or contact our FAE team with your specifications for personalized recommendations.`,
      ["capacitor selection", "design guide", "parameter selection"]
    ),
    generateFAQ(
      `What is the typical lifetime of Lelon ${categoryName}?`,
      `The lifetime of Lelon ${categoryName} varies by series and operating conditions. Standard series typically offer 2,000 to 5,000 hours at rated temperature, while high-temperature series can provide 10,000 hours or more. Actual lifetime depends heavily on operating temperature and voltage derating - following the Arrhenius relationship where every 10°C reduction doubles the lifetime. Lelon capacitors are known for exceeding rated lifetimes in actual applications.`,
      `For specific lifetime calculations based on your operating conditions, contact our FAE team.`,
      ["capacitor lifetime", "reliability", "temperature rating"]
    ),
    generateFAQ(
      `Are Lelon ${categoryName} RoHS compliant and environmentally friendly?`,
      `Yes, all Lelon ${categoryName} are RoHS compliant and free from lead, mercury, cadmium, and other restricted substances. They meet international environmental standards and are suitable for worldwide distribution. Lelon also complies with REACH regulations and maintains ISO 14001 environmental management certification.`,
      `For specific environmental compliance documentation, contact our sales team with your part numbers.`,
      ["RoHS compliant", "environmental", "lead-free"]
    ),
    generateFAQ(
      `What makes Lelon ${categoryName} competitive in the market?`,
      `Lelon ${categoryName} benefit from decades of Taiwanese manufacturing expertise, modern production facilities, and efficient quality control processes. These factors result in capacitors with competitive pricing, good reliability, and consistent performance. Lelon's cost-performance ratio makes them an attractive alternative to more expensive Japanese brands for many applications.`,
      `Request samples to evaluate Lelon quality in your application and compare with other brands.`,
      ["lelon quality", "taiwan manufacturing", "competitive pricing"]
    ),
    generateFAQ(
      `What is the lead time for Lelon ${categoryName}?`,
      `Standard Lelon ${categoryName} typically have 4-6 weeks lead time from Taiwan, shorter than many Japanese manufacturers. Popular series may be available from local stock at LiTong Electronics for immediate delivery. For large volume orders or custom specifications, lead time may be 8-10 weeks. Contact our sales team for current stock availability and scheduled delivery options.`,
      `For urgent requirements, check our local stock or discuss scheduled orders with our sales team.`,
      ["lead time", "delivery", "stock availability"]
    )
  ];
}

// Products data
const productsData = {
  seoTitle: "Lelon Aluminum Electrolytic Capacitors Product Catalog | LiTong Electronics",
  seoDescription: "Browse Lelon aluminum electrolytic capacitors, radial lead, snap-in, SMD, and solid polymer capacitors. Technical specifications, selection guide, and alternative parts.",
  seoKeywords: [
    "Lelon capacitor catalog",
    "Lelon aluminum electrolytic capacitor products",
    "Lelon radial capacitor",
    "Lelon snap-in capacitor",
    "Taiwan capacitor distributor",
    "lelon capacitor selection guide"
  ],
  faqs: [
    generateFAQ(
      "How do I select the right Lelon capacitor for my application?",
      "Consider voltage rating, capacitance value, ripple current requirements, temperature range, and lifetime requirements. Lelon offers comprehensive selection guides for each product series. For consumer applications, RGA series provides excellent value. For high-temperature, select RGH series. For SMD applications, consider VZH series.",
      "Contact our FAE team with your application specifications for personalized Lelon capacitor selection assistance.",
      ["Lelon capacitor selection", "selection guide", "application support"]
    ),
    generateFAQ(
      "What is the difference between Lelon's RGA and RGH series?",
      "RGA series is Lelon's general-purpose line offering excellent performance at competitive pricing for standard applications. RGH series provides higher temperature ratings (125°C) for demanding applications. Both series feature Taiwan manufacturing quality but target different application requirements.",
      "Use RGA series for general-purpose applications. Use RGH series for high-temperature or demanding environments.",
      ["RGA series", "RGH series", "series comparison"]
    ),
    generateFAQ(
      "What are Lelon's automotive-grade capacitors?",
      "Lelon's automotive-grade capacitors are AEC-Q200 qualified and designed specifically for vehicle applications. These capacitors undergo rigorous testing including temperature cycling, vibration, and mechanical shock. They feature extended temperature ratings up to 125°C and enhanced reliability for automotive electronics.",
      "For automotive applications requiring AEC-Q200 qualification, select Lelon's automotive series capacitors.",
      ["automotive capacitor", "AEC-Q200", "automotive electronics"]
    ),
    generateFAQ(
      "Are Lelon capacitors suitable for LED lighting applications?",
      "Yes, Lelon capacitors are widely used in LED drivers and lighting applications. The company's capacitors offer high reliability and long lifetime at competitive prices, making them ideal for LED lighting where cost-performance is important. RGA and RGH series are particularly popular for these applications.",
      "Contact our FAE team for recommendations on Lelon capacitors for LED lighting applications.",
      ["LED lighting", "LED driver", "lighting applications"]
    ),
    generateFAQ(
      "What is the quality difference between Taiwan-made and China-made Lelon capacitors?",
      "Lelon maintains consistent quality standards across all manufacturing locations. Premium series are manufactured in Taiwan using advanced production equipment. For standard applications, China-made capacitors provide excellent value. For mission-critical applications, specify Taiwan-made capacitors.",
      "For maximum reliability, specify Taiwan-made Lelon capacitors, particularly for demanding applications.",
      ["taiwan manufacturing", "quality difference", "premium series"]
    )
  ],
  categories: [
    {
      id: "radial-lead-capacitors",
      name: "Radial Lead Capacitors",
      slug: "radial-lead-capacitors",
      description: "High-reliability radial aluminum electrolytic capacitors for general-purpose applications",
      longDescription: "Lelon radial lead capacitors offer excellent quality and value for a wide range of applications. The RGA series provides reliable performance for general-purpose use, while the RGH series offers higher temperature ratings for demanding environments. These capacitors feature Lelon's advanced manufacturing technology and quality control processes, ensuring consistent performance. Available in a wide range of capacitance and voltage ratings, Lelon radial capacitors are the preferred choice for cost-sensitive applications requiring reliable performance. Contact LiTong Electronics, your authorized Lelon distributor, for radial capacitor selection guidance.",
      parameters: ["Capacitance", "Voltage Rating", "Ripple Current", "Temperature Range", "Lifetime"],
      series: ["RGA", "RGD", "RGH"],
      selectionGuide: "Select based on capacitance, voltage rating, size constraints, and lifetime requirements. RGA series for general purpose, RGH for high temperature.",
      selectionGuideLink: "/lelon/support/radial-lead-capacitors-selection-guide",
      faqs: generateCategoryFAQs("Radial Lead Capacitors"),
      products: [
        generateProduct("RGA-1000uF-25V", "Radial Capacitor 1000uF 25V", "1000uF", "25", "105°C", "1.2A", "Radial Lead Capacitors"),
        generateProduct("RGA-470uF-50V", "Radial Capacitor 470uF 50V", "470uF", "50", "105°C", "0.9A", "Radial Lead Capacitors")
      ]
    },
    {
      id: "snap-in-capacitors",
      name: "Snap-in Capacitors",
      slug: "snap-in-capacitors",
      description: "High-capacitance snap-in aluminum electrolytic capacitors for power applications",
      longDescription: "Lelon snap-in capacitors provide high capacitance values in compact packages for power supply and industrial applications. The LGU series offers excellent ripple current capability and long operational life. These capacitors are ideal for switch-mode power supplies, inverters, and motor drives where high capacitance and reliability are required. Lelon's competitive pricing makes these capacitors an attractive choice for cost-sensitive power applications. Contact LiTong Electronics for snap-in capacitor selection and application support.",
      parameters: ["Capacitance", "Voltage Rating", "Ripple Current", "Temperature Range", "Lifetime"],
      series: ["LGU", "LGN"],
      selectionGuide: "Select based on capacitance, voltage rating, ripple current requirements, and size constraints. LGU series for general power applications.",
      selectionGuideLink: "/lelon/support/snap-in-capacitors-selection-guide",
      faqs: generateCategoryFAQs("Snap-in Capacitors"),
      products: [
        generateProduct("LGU-10000uF-63V", "Snap-in Capacitor 10000uF 63V", "10000uF", "63", "105°C", "8.5A", "Snap-in Capacitors"),
        generateProduct("LGU-4700uF-100V", "Snap-in Capacitor 4700uF 100V", "4700uF", "100", "105°C", "6.2A", "Snap-in Capacitors")
      ]
    },
    {
      id: "smd-capacitors",
      name: "SMD Capacitors",
      slug: "smd-capacitors",
      description: "Surface mount aluminum electrolytic capacitors for compact designs",
      longDescription: "Lelon SMD capacitors provide reliable performance in compact surface mount packages for modern electronic designs. The VZH series offers excellent characteristics for automated assembly and high-density applications. These capacitors are ideal for consumer electronics, telecommunications, and portable devices where space is at a premium. Lelon's SMD capacitors combine competitive pricing with reliable performance for cost-sensitive applications. Contact LiTong Electronics for SMD capacitor selection guidance.",
      parameters: ["Capacitance", "Voltage Rating", "Ripple Current", "Temperature Range", "Lifetime"],
      series: ["VZH", "VZL"],
      selectionGuide: "Select based on capacitance, voltage rating, case size, and temperature requirements. VZH series for general SMD applications.",
      selectionGuideLink: "/lelon/support/smd-capacitors-selection-guide",
      faqs: generateCategoryFAQs("SMD Capacitors"),
      products: [
        generateProduct("VZH-100uF-35V", "SMD Capacitor 100uF 35V", "100uF", "35", "105°C", "0.5A", "SMD Capacitors"),
        generateProduct("VZH-47uF-50V", "SMD Capacitor 47uF 50V", "47uF", "50", "105°C", "0.35A", "SMD Capacitors")
      ]
    },
    {
      id: "solid-polymer-capacitors",
      name: "Solid Polymer Capacitors",
      slug: "solid-polymer-capacitors",
      description: "High-performance solid polymer capacitors with ultra-low ESR",
      longDescription: "Lelon solid polymer capacitors offer exceptional performance with ultra-low ESR, high ripple current capability, and long operational life. These capacitors use conductive polymer electrolyte instead of liquid electrolyte, providing stable characteristics across temperature ranges and eliminating the risk of electrolyte drying. Ideal for high-frequency applications, server power supplies, and motherboards where low ESR and high reliability are critical. Contact LiTong Electronics for solid polymer capacitor selection and application support.",
      parameters: ["Capacitance", "Voltage Rating", "ESR", "Ripple Current", "Temperature Range"],
      series: ["OPL", "OPM"],
      selectionGuide: "Select based on capacitance, voltage rating, ESR requirements, and ripple current. Solid polymer for high-frequency low-ESR applications.",
      selectionGuideLink: "/lelon/support/solid-polymer-capacitors-selection-guide",
      faqs: generateCategoryFAQs("Solid Polymer Capacitors"),
      products: [
        generateProduct("OPL-270uF-16V", "Solid Polymer 270uF 16V", "270uF", "16", "105°C", "4.5A", "Solid Polymer Capacitors"),
        generateProduct("OPL-150uF-25V", "Solid Polymer 150uF 25V", "150uF", "25", "105°C", "3.8A", "Solid Polymer Capacitors")
      ]
    }
  ]
};

// Write products.json
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✅ products.json created');

// Solutions data
const solutionsData = {
  seoTitle: "Lelon Capacitor Solutions | Industrial & Consumer Applications | LiTong Electronics",
  seoDescription: "Lelon capacitor solutions for LED lighting, power supplies, consumer electronics, and industrial applications. Application-specific recommendations and technical support.",
  seoKeywords: [
    "Lelon capacitor solutions",
    "LED lighting capacitors",
    "power supply capacitors",
    "consumer electronics capacitors",
    "Lelon distributor selection"
  ],
  faqs: [
    generateFAQ(
      "What industries does Lelon serve with its capacitor solutions?",
      "Lelon provides capacitor solutions for consumer electronics, LED lighting, industrial equipment, automotive, and telecommunications applications. Each industry has specific requirements that Lelon's diverse product portfolio addresses. The company offers standard, high-temperature, and automotive-grade capacitors to meet various application needs at competitive prices.",
      "Browse our solutions by industry or contact our FAE team for application-specific recommendations.",
      ["Lelon industries", "capacitor applications", "industry solutions"]
    ),
    generateFAQ(
      "How does LiTong Electronics support Lelon capacitor implementations?",
      "LiTong Electronics provides comprehensive support for Lelon capacitors including technical consultation, sample evaluation, application engineering support, and supply chain management. Our FAE team has extensive experience with Lelon products and can assist with selection, derating calculations, and troubleshooting.",
      "Contact our FAE team early in your design phase for optimal capacitor selection and implementation support.",
      ["technical support", "application engineering", "FAE support"]
    ),
    generateFAQ(
      "What are the key considerations for selecting Lelon capacitors?",
      "Key considerations include voltage rating (with appropriate derating), capacitance value, ripple current requirements, temperature range, lifetime requirements, physical size constraints, and cost targets. Our selection guides and FAE team can help navigate these considerations.",
      "Use our online selection tools or contact our FAE team for personalized capacitor selection assistance.",
      ["capacitor selection", "selection criteria", "design considerations"]
    ),
    generateFAQ(
      "Does Lelon offer custom solutions for specialized applications?",
      "Yes, Lelon can provide custom capacitor solutions including special capacitance values, voltage ratings, size configurations, and performance characteristics. Custom solutions require minimum order quantities and longer lead times. LiTong Electronics can facilitate communication with Lelon's engineering team.",
      "For custom capacitor requirements, contact our FAE team with your specifications to evaluate feasibility.",
      ["custom capacitors", "special requirements", "custom solutions"]
    ),
    generateFAQ(
      "What is the typical lead time for Lelon capacitor solutions?",
      "Standard Lelon capacitors typically have 4-6 weeks lead time from Taiwan. High-volume orders or custom specifications may require 8-10 weeks. LiTong Electronics maintains local stock of popular series for immediate delivery.",
      "Contact our sales team to discuss your project timeline and explore stock availability.",
      ["lead time", "delivery schedule", "stock availability"]
    )
  ],
  solutions: [
    {
      id: "led-lighting-solutions",
      slug: "led-lighting-solutions",
      title: "LED Lighting Solutions",
      subtitle: "Reliable capacitors for LED driver applications",
      description: "Complete capacitor solutions for LED drivers, lighting controls, and illumination systems",
      longDescription: "Lelon provides comprehensive capacitor solutions for LED lighting applications. Our RGA series radial capacitors and VZH series SMD capacitors offer reliable performance, long lifetime, and competitive pricing for LED driver designs. From input filtering to output smoothing, Lelon capacitors deliver the performance and value that LED lighting applications demand.",
      image: "/assets/solutions/led-lighting.jpg",
      applications: [
        "LED driver power supplies",
        "Street lighting",
        "Indoor illumination",
        "Automotive LED lighting"
      ],
      products: [
        { partNumber: "RGA-1000uF-25V", category: "Radial Capacitors", role: "Output filtering" },
        { partNumber: "VZH-100uF-35V", category: "SMD Capacitors", role: "Auxiliary power" },
        { partNumber: "RGA-47uF-50V", category: "Radial Capacitors", role: "Input filtering" }
      ],
      benefits: [
        "High reliability for long LED lifetime",
        "Extended capacitor lifetime with proper derating",
        "Competitive pricing for cost-sensitive designs",
        "Comprehensive technical support"
      ],
      coreAdvantages: [
        { title: "High Reliability", description: "Lelon capacitors are manufactured with strict quality controls to ensure reliable performance in LED applications requiring long operational life." },
        { title: "Extended Lifetime", description: "With proper derating and thermal management, Lelon capacitors achieve 10+ year operational life matching LED system requirements." },
        { title: "Competitive Pricing", description: "Lelon offers excellent cost-performance ratio for cost-sensitive LED lighting applications." },
        { title: "Technical Support", description: "LiTong Electronics provides comprehensive FAE support for Lelon capacitor selection and application." },
        { title: "Wide Product Range", description: "Comprehensive selection of capacitance values and voltage ratings to meet diverse LED driver requirements." }
      ],
      technicalSpecs: {
        voltageRange: "6.3V - 100V DC",
        capacitanceRange: "10uF - 10000uF",
        temperatureRange: "-40°C to +105°C",
        lifetime: "2000 - 10000 hours",
        rippleCurrent: "Up to 10A"
      },
      bomList: [
        { partNumber: "RGA-1000uF-25V", description: "Output filtering capacitor", quantity: 2, category: "Radial Capacitors" },
        { partNumber: "VZH-100uF-35V", description: "Auxiliary power capacitor", quantity: 4, category: "SMD Capacitors" }
      ],
      customerCases: [
        {
          customer: "LED Driver Manufacturer",
          industry: "LED Lighting",
          challenge: "Needed cost-effective capacitors for LED drivers with long lifetime requirements and competitive pricing.",
          solution: "Implemented Lelon RGA series capacitors with 105°C rating and proper derating. Selected appropriate capacitance values for ripple requirements.",
          results: ["Achieved target cost reduction of 25%", "Passed 50,000 hour lifetime testing", "Improved product competitiveness"]
        },
        {
          customer: "Street Lighting Supplier",
          industry: "Outdoor Lighting",
          challenge: "Required reliable capacitors for outdoor LED street lights operating in harsh environmental conditions.",
          solution: "Selected Lelon RGH series high-temperature capacitors with enhanced reliability. Implemented proper thermal management design.",
          results: ["Zero field failures in 3 years", "Operating reliably in temperature extremes", "Reduced warranty claims by 40%"]
        }
      ],
      faeInsights: {
        insight: "In my experience supporting LED lighting designs with Lelon capacitors, proper selection is critical for matching capacitor lifetime to LED system requirements. For LED applications, I always recommend selecting capacitors with at least 20% voltage derating and operating temperatures below 85°C. The Arrhenius relationship means every 10°C reduction doubles capacitor lifetime. Lelon's competitive pricing makes it possible to use higher-grade capacitors within budget constraints.",
        logic: "The capacitor selection process for LED lighting should follow a systematic approach: First, determine the LED driver topology and operating conditions including voltage, ripple current, and temperature. Second, apply appropriate derating factors - 20% for voltage, 50% for ripple current, and target <85°C operating temperature. Third, calculate required capacitance based on ripple requirements. Fourth, select Lelon series based on lifetime and cost requirements. Finally, verify thermal design through measurement or simulation.",
        keyTakeaways: ["Always apply voltage derating (20% minimum)", "Target operating temperature below 85°C", "Match capacitor lifetime to LED system life", "Consider total cost of ownership", "Verify thermal design through measurement"],
        commonPitfalls: ["Insufficient voltage derating leading to early failure", "Ignoring temperature rise from ripple current", "Underestimating required capacitor lifetime", "Selecting based on initial cost only"],
        bestPractices: ["Measure actual operating temperature in final enclosure", "Design for worst-case ambient plus self-heating", "Use conservative lifetime estimates", "Plan for capacitor replacement if needed", "Document derating calculations"]
      },
      faqs: [
        generateFAQ("What makes Lelon capacitors suitable for LED lighting applications?", "Lelon capacitors for LED lighting feature long operational life, high reliability, and competitive pricing. The RGA and RGH series offer up to 10,000-hour lifetime ratings and good ripple current capability. Taiwan manufacturing ensures consistent quality for cost-sensitive LED applications.", "For LED lighting, select Lelon RGA or RGH series with appropriate ripple current and temperature ratings.", ["LED capacitors", "lighting capacitors", "long lifetime"]),
        generateFAQ("How do I calculate the required capacitance for my LED driver?", "Required capacitance depends on output current, switching frequency, allowable ripple current, and LED string voltage. For output filtering, calculate based on allowable output current ripple. Always include margin in calculations.", "Contact our FAE team with your LED driver specifications for detailed capacitance calculations.", ["capacitance calculation", "LED driver design", "ripple current"]),
        generateFAQ("What voltage derating is recommended for LED applications?", "For LED applications, we recommend minimum 20% voltage derating (operate at 80% of rated voltage). For outdoor or high-temperature environments, 30% derating provides better reliability margin.", "Use 20% derating as minimum, 30% derating for outdoor or high-temperature LED applications.", ["voltage derating", "LED reliability", "design margin"]),
        generateFAQ("What capacitor lifetime is needed for LED lighting?", "LED systems typically require 25,000 to 50,000 hour capacitor lifetime. With proper derating, standard 2000-hour rated capacitors can achieve this at moderate operating temperatures. For 50,000+ hour requirements, consider high-grade series.", "For standard LED applications, use properly derated capacitors. For extreme lifetime requirements, consult our FAE team.", ["capacitor lifetime", "LED system life", "reliability"]),
        generateFAQ("Should I use SMD or radial capacitors for LED drivers?", "SMD capacitors offer compact size and automated assembly for high-volume production. Radial capacitors provide higher capacitance values and better thermal performance. The choice depends on space constraints, production method, and thermal requirements.", "For compact designs, use VZH SMD series. For higher power, use RGA radial series.", ["SMD vs radial", "LED driver design", "capacitor selection"]),
        generateFAQ("What is the cost advantage of Lelon capacitors for LED applications?", "Lelon capacitors typically offer 20-30% cost savings compared to Japanese brands while providing adequate reliability for LED applications. This cost advantage allows designers to use higher-grade capacitors or add redundancy within budget constraints.", "Contact our sales team for competitive Lelon pricing on LED lighting applications.", ["cost savings", "LED driver cost", "competitive pricing"])
      ]
    },
    {
      id: "consumer-electronics-solutions",
      slug: "consumer-electronics-solutions",
      title: "Consumer Electronics Solutions",
      subtitle: "Compact and reliable capacitors for consumer products",
      description: "Capacitor solutions for smartphones, tablets, TVs, and home appliances",
      longDescription: "Lelon provides reliable and cost-effective capacitor solutions for consumer electronics applications. Our VZH series SMD capacitors and compact radial capacitors offer excellent performance for space-constrained designs. From power supplies to audio circuits, Lelon capacitors deliver the quality and value that consumer electronics manufacturers demand.",
      image: "/assets/solutions/consumer-electronics.jpg",
      applications: [
        "Power adapters",
        "Smartphone chargers",
        "TV power supplies",
        "Home appliances"
      ],
      products: [
        { partNumber: "VZH-47uF-50V", category: "SMD Capacitors", role: "Decoupling" },
        { partNumber: "RGA-100uF-25V", category: "Radial Capacitors", role: "Filtering" },
        { partNumber: "OPL-270uF-16V", category: "Solid Polymer", role: "Output filtering" }
      ],
      benefits: [
        "Compact size for space-constrained designs",
        "Cost-effective for high-volume production",
        "Reliable performance for consumer applications",
        "Flexible supply chain support"
      ],
      coreAdvantages: [
        { title: "Compact Size", description: "Lelon SMD and compact radial capacitors fit space-constrained consumer electronics designs." },
        { title: "Cost Effective", description: "Competitive pricing supports high-volume consumer electronics manufacturing." },
        { title: "Reliable Supply", description: "Stable supply chain and shorter lead times support just-in-time production." },
        { title: "Quality Assured", description: "ISO 9001 certified manufacturing ensures consistent quality for consumer products." },
        { title: "Technical Support", description: "Application engineering support for consumer electronics design challenges." }
      ],
      technicalSpecs: {
        voltageRange: "6.3V - 100V DC",
        capacitanceRange: "1uF - 10000uF",
        temperatureRange: "-40°C to +105°C",
        lifetime: "2000 - 5000 hours",
        rippleCurrent: "Up to 5A"
      },
      bomList: [
        { partNumber: "VZH-47uF-50V", description: "Decoupling capacitor", quantity: 10, category: "SMD Capacitors" },
        { partNumber: "RGA-100uF-25V", description: "Filtering capacitor", quantity: 4, category: "Radial Capacitors" }
      ],
      customerCases: [
        {
          customer: "Power Adapter Manufacturer",
          industry: "Consumer Power",
          challenge: "Needed compact, cost-effective capacitors for high-volume power adapter production with tight cost targets.",
          solution: "Implemented Lelon VZH SMD series for compact designs and RGA radial series for higher capacitance needs. Optimized BOM costs.",
          results: ["Achieved 30% cost reduction on capacitors", "Maintained quality standards", "Improved profit margins"]
        },
        {
          customer: "Smartphone Charger Supplier",
          industry: "Mobile Accessories",
          challenge: "Required compact capacitors with reliable performance for miniaturized fast chargers.",
          solution: "Selected Lelon VZH series SMD capacitors with high capacitance density. Implemented proper derating for reliability.",
          results: ["Compact design achieved", "Passed all reliability tests", "Successful mass production"]
        }
      ],
      faeInsights: {
        insight: "Consumer electronics applications demand a careful balance of cost, size, and reliability. In my experience with Lelon capacitors in consumer products, proper selection can achieve significant cost savings without compromising quality. For consumer applications, I recommend conservative derating (30% voltage) and thorough validation testing. Lelon's competitive pricing often allows designers to use higher-grade parts within budget constraints.",
        logic: "The selection framework for consumer electronics prioritizes cost-performance optimization. First, define space constraints and mounting requirements (SMD vs radial). Second, determine electrical requirements with appropriate derating. Third, evaluate total cost including assembly and reliability. Fourth, select Lelon series based on performance and cost targets. Finally, validate through comprehensive testing including thermal and life testing.",
        keyTakeaways: ["Balance cost and reliability for consumer products", "Use conservative derating for safety margin", "Validate through comprehensive testing", "Consider total cost of ownership", "Plan for high-volume production"],
        commonPitfalls: ["Selecting solely on lowest price", "Inadequate derating for reliability", "Insufficient validation testing", "Ignoring thermal management in compact designs"],
        bestPractices: ["Design for worst-case operating conditions", "Implement comprehensive testing protocols", "Monitor field performance", "Maintain supplier quality audits", "Plan for product lifecycle requirements"]
      },
      faqs: [
        generateFAQ("What makes Lelon capacitors suitable for consumer electronics?", "Lelon capacitors for consumer electronics offer compact size, competitive pricing, and reliable performance. The VZH SMD series provides high capacitance density for space-constrained designs. Taiwan manufacturing ensures consistent quality for high-volume production.", "For consumer electronics, select Lelon VZH SMD or compact radial series based on space and performance requirements.", ["consumer electronics", "SMD capacitors", "compact design"]),
        generateFAQ("How do I select capacitors for cost-sensitive consumer products?", "For cost-sensitive products, balance performance requirements with cost targets. Consider Lelon's standard series for adequate performance at competitive prices. Use proper derating to ensure reliability without over-specifying.", "Contact our FAE team for cost-optimized capacitor selection for consumer applications.", ["cost optimization", "consumer product design", "capacitor selection"]),
        generateFAQ("What is the advantage of SMD capacitors for consumer products?", "SMD capacitors enable automated assembly, reduce PCB size, and improve manufacturing efficiency. They are ideal for high-volume consumer electronics production where assembly cost is critical.", "For high-volume consumer products, use Lelon VZH SMD series for automated assembly compatibility.", ["SMD advantages", "automated assembly", "manufacturing efficiency"]),
        generateFAQ("How do I ensure reliability in consumer electronics applications?", "Ensure reliability through proper derating (30% voltage), thermal management, and comprehensive testing. Lelon capacitors provide good reliability when properly applied within their ratings.", "Follow industry best practices for derating and validation testing. Contact our FAE team for reliability guidance.", ["reliability design", "consumer electronics", "validation testing"]),
        generateFAQ("What is the typical lead time for high-volume orders?", "Lelon offers competitive lead times of 4-6 weeks for standard products. For high-volume consumer electronics orders, scheduled delivery programs can support just-in-time manufacturing.", "Contact our sales team to discuss high-volume pricing and delivery schedules.", ["high volume", "lead time", "scheduled delivery"]),
        generateFAQ("Does Lelon support RoHS and environmental requirements?", "Yes, all Lelon capacitors are RoHS compliant and meet environmental regulations for global markets. The company maintains ISO 14001 environmental management certification.", "For specific environmental compliance documentation, contact our sales team.", ["RoHS compliance", "environmental", "regulatory"])
      ]
    }
  ]
};

// Write solutions.json
fs.writeFileSync(path.join(dataDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('✅ solutions.json created');

// Support data
const supportData = {
  seoTitle: "Lelon Capacitor Technical Support | LiTong Electronics",
  seoDescription: "Technical support resources for Lelon aluminum electrolytic capacitors. Application guides, FAQs, troubleshooting, and engineering support.",
  seoKeywords: [
    "Lelon technical support",
    "capacitor application guide",
    "Lelon distributor support",
    "capacitor troubleshooting",
    "FAE support",
    "lelon capacitor selection guide"
  ],
  faqs: [
    generateFAQ("How can I get technical support for Lelon capacitors?", "LiTong Electronics provides comprehensive technical support for Lelon capacitors through our experienced Field Application Engineering (FAE) team. Support includes capacitor selection guidance, application engineering, derating calculations, thermal analysis, and troubleshooting.", "Contact our FAE team early in your design phase for optimal capacitor selection.", ["technical support", "FAE assistance", "application engineering"]),
    generateFAQ("What technical resources are available for Lelon capacitors?", "We provide comprehensive technical resources including datasheets, application notes, selection guides, SPICE models, reliability calculators, and thermal analysis tools. All resources are available for download from our website.", "Browse our technical resource library or contact our sales team for specific documentation.", ["technical resources", "datasheets", "application notes"]),
    generateFAQ("Can I get samples for evaluation?", "Yes, LiTong Electronics provides sample capacitors for evaluation purposes. Samples are typically available from stock for popular series. For specialized or high-voltage capacitors, sample lead time may be 1-2 weeks.", "Contact our sales team with your sample requirements and project details.", ["sample request", "evaluation samples", "sample capacitors"]),
    generateFAQ("What is the process for custom capacitor requests?", "For custom capacitor requirements, contact our FAE team with your specifications. We will coordinate with Lelon's engineering team to evaluate feasibility, provide quotation, and establish timeline.", "Contact our FAE team with detailed specifications for custom capacitor evaluation.", ["custom capacitors", "special order", "custom specifications"]),
    generateFAQ("How do I calculate capacitor lifetime for my application?", "Capacitor lifetime can be calculated using the Arrhenius equation. Every 10°C reduction in operating temperature approximately doubles the capacitor lifetime. Voltage derating also significantly affects lifetime.", "Contact our FAE team with your operating conditions for detailed lifetime calculations.", ["lifetime calculation", "Arrhenius equation", "reliability prediction"]),
    generateFAQ("What quality certifications does Lelon hold?", "Lelon holds multiple international quality certifications including ISO 9001, ISO 14001, IATF 16949, and AEC-Q200 qualification for automotive-grade capacitors.", "Contact our sales team for certification documentation.", ["quality certifications", "ISO 9001", "AEC-Q200"]),
    generateFAQ("How can I verify the authenticity of Lelon capacitors?", "Purchase Lelon capacitors only from authorized distributors like LiTong Electronics to ensure authenticity. We provide certificates of authenticity.", "Purchase only from authorized distributors. Contact us to verify distributor credentials.", ["authenticity verification", "counterfeit prevention", "authorized distributor"]),
    generateFAQ("What is the warranty for Lelon capacitors?", "Lelon capacitors are warranted against defects in materials and workmanship for 12 months from date of shipment when used within specified ratings.", "Review warranty terms before purchase. Contact our sales team for warranty documentation.", ["warranty", "product warranty", "defect coverage"])
  ],
  articles: [
    {
      id: "lelon-selection-guide",
      slug: "lelon-selection-guide",
      title: "Lelon Capacitor Selection Guide",
      category: "Application Guide",
      summary: "Comprehensive guide for selecting Lelon aluminum electrolytic capacitors including series comparison and application recommendations.",
      content: "This guide provides detailed information on selecting Lelon capacitors for various applications. Topics include series comparison (RGA, RGH, LGU, VZH), voltage derating, ripple current calculations, and lifetime estimation.",
      author: { name: "Michael Chen", title: "Senior FAE" },
      date: "2024-01-15",
      publishDate: "2024-01-15",
      readTime: "15 min",
      tags: ["capacitor selection", "Lelon", "derating"],
      relatedArticles: ["lelon-ripple-current", "lelon-thermal-guide", "lelon-lifetime"],
      faeInsights: {
        insight: "In my 15 years of supporting designs with Lelon capacitors, I've found that proper series selection is critical for achieving optimal cost-performance. RGA series offers excellent value for general-purpose applications, while RGH provides higher reliability for demanding environments. Always consider the total cost of ownership - Lelon's competitive pricing often allows using higher-grade parts within budget.",
        logic: "The selection process should consider: application requirements, environmental conditions, reliability needs, and cost constraints. For consumer electronics, use VZH SMD series. For industrial, RGA or LGU depending on power level. For high-temperature, RGH series.",
        keyTakeaways: ["Select series based on application requirements", "Consider total cost of ownership", "Use RGH for high-temperature applications", "Verify all operating parameters"],
        commonPitfalls: ["Selecting based on price alone", "Ignoring operating temperature", "Inadequate derating"],
        bestPractices: ["Consult FAE early in design", "Request samples for evaluation", "Verify calculations with measurements"]
      },
      customerCases: [
        { customer: "Industrial Manufacturer", challenge: "Needed cost-effective capacitors.", solution: "Implemented RGA series.", feedback: "Excellent cost-performance achieved." }
      ],
      faqs: [
        generateFAQ("Which Lelon series should I select?", "Select RGA series for general-purpose applications, RGH for high-temperature, LGU for snap-in high power, VZH for SMD applications. Consider operating conditions and cost targets.", "Contact FAE for series selection guidance.", ["series selection", "RGA", "RGH"]),
        generateFAQ("What is the price difference between series?", "RGH series is premium priced 15-20% above RGA. LGU snap-in series is priced based on capacitance and voltage. VZH SMD series offers competitive pricing for surface mount.", "Request quotation for specific part numbers.", ["pricing", "cost comparison", "series price"]),
        generateFAQ("Are all Lelon series RoHS compliant?", "Yes, all current Lelon series are RoHS compliant. Legacy parts may require verification. Contact sales for specific part compliance.", "Verify compliance documentation for your specific parts.", ["RoHS", "compliance", "environmental"]),
        generateFAQ("What is the lead time difference between series?", "Popular RGA and VZH series typically have shorter lead times. Specialized high-voltage or custom parts may have longer lead times.", "Contact sales for current lead times.", ["lead time", "delivery", "availability"]),
        generateFAQ("Can I cross-reference competitors to Lelon?", "Yes, our FAE team can provide cross-references from major competitors to Lelon equivalents. Provide competitor part numbers for cross-reference.", "Contact FAE with competitor part numbers for cross-reference.", ["cross reference", "competitor", "equivalent"]),
        generateFAQ("What documentation is available?", "Datasheets, application notes, reliability data, and SPICE models are available. PPAP documentation available for automotive parts.", "Download from website or contact sales.", ["documentation", "datasheet", "application note"]),
        generateFAQ("How do I request samples?", "Contact our sales team with part numbers and quantities needed. Samples typically ship within 1-2 business days for stock items.", "Submit sample request to sales team.", ["samples", "evaluation", "sample request"]),
        generateFAQ("What is the minimum order quantity?", "Standard MOQ is 1000 pieces for radial, 500 for SMD. Smaller quantities may be available from stock. Contact sales for specific MOQ.", "Contact sales for MOQ and pricing.", ["MOQ", "minimum order", "quantity"])
      ]
    },
    {
      id: "lelon-ripple-current",
      slug: "lelon-ripple-current",
      title: "Ripple Current Calculations for Lelon Capacitors",
      category: "Technical Guide",
      summary: "Detailed guide on calculating ripple current and thermal management for Lelon capacitors.",
      content: "This guide explains ripple current calculations, self-heating estimation, and thermal management for Lelon capacitors.",
      author: { name: "David Wang", title: "Senior FAE" },
      date: "2024-01-10",
      publishDate: "2024-01-10",
      readTime: "12 min",
      tags: ["ripple current", "thermal management", "self-heating"],
      relatedArticles: ["lelon-selection-guide", "lelon-thermal-guide", "lelon-lifetime"],
      faeInsights: {
        insight: "Based on my extensive experience supporting capacitor applications, proper ripple current management is critical for long-term reliability. The key is understanding the relationship between ripple current, ESR, and self-heating. For Lelon capacitors, I consistently recommend operating at 50% or less of rated ripple current to ensure long lifetime.",
        logic: "The decision framework for ripple current management involves: calculating actual ripple current in the application, determining ESR at operating frequency, calculating self-heating, verifying total temperature is within ratings, and implementing thermal management if needed.",
        keyTakeaways: ["Calculate actual ripple current", "Include self-heating", "Use frequency-corrected ESR", "Verify temperature rise"],
        commonPitfalls: ["Using ESR at wrong frequency", "Ignoring self-heating", "Underestimating RMS ripple"],
        bestPractices: ["Measure actual ripple current", "Use thermal imaging", "Design for worst-case conditions"]
      },
      customerCases: [
        { customer: "Power Supply Manufacturer", challenge: "Capacitors running hot.", solution: "Improved thermal design.", feedback: "Temperature reduced significantly." }
      ],
      faqs: [
        generateFAQ("How do I calculate ripple current?", "Ripple current depends on topology. For buck converters, Iripple = Vout×(Vin-Vout)/(Vin×f×L). Use RMS values for capacitor rating.", "Use appropriate formula for your topology.", ["ripple current", "calculation", "RMS"]),
        generateFAQ("What is ESR frequency dependence?", "ESR varies with frequency, typically lowest at 100-120Hz and increasing at higher frequencies. Check datasheet for frequency characteristics.", "Use ESR value at your operating frequency.", ["ESR", "frequency", "impedance"]),
        generateFAQ("How do I calculate self-heating?", "Temperature Rise = I² × ESR × Rth. Typical thermal resistance is 20-40°C/W for radial capacitors.", "Calculate self-heating and verify total temperature.", ["self-heating", "temperature rise", "thermal"]),
        generateFAQ("What thermal resistance should I use?", "Small radial: 30-40°C/W, Medium: 25-35°C/W, Large snap-in: 15-25°C/W. Decreases with forced airflow.", "Use manufacturer's data or typical values.", ["thermal resistance", "thermal impedance", "heat transfer"]),
        generateFAQ("How can I reduce capacitor temperature?", "Use lower ESR capacitors, parallel connection, improve airflow, add heatsinking, or reduce ripple current.", "Implement multiple strategies for maximum reduction.", ["temperature reduction", "cooling", "thermal management"]),
        generateFAQ("What is the relationship between ripple current and lifetime?", "Higher ripple current increases temperature, reducing lifetime per Arrhenius relationship. Every 10°C increase halves lifetime.", "Minimize ripple current and temperature for maximum lifetime.", ["lifetime", "ripple current", "reliability"]),
        generateFAQ("Should I measure or calculate ripple current?", "Both! Calculate during design, measure for verification. Compare measured vs calculated to validate design.", "Calculate for design, measure for verification.", ["measurement", "calculation", "verification"]),
        generateFAQ("How does frequency affect ripple current capability?", "Ripple current ratings are at 100-120Hz. At higher frequencies, effective capability may be reduced due to increased ESR.", "For high-frequency, use low-ESR capacitors.", ["frequency", "derating", "high frequency"])
      ]
    },
    {
      id: "lelon-automotive-guide",
      slug: "lelon-automotive-guide",
      title: "Lelon Automotive Capacitor Application Guide",
      category: "Application Guide",
      summary: "Guide for selecting and applying AEC-Q200 qualified Lelon capacitors in automotive applications.",
      content: "This guide covers AEC-Q200 qualification, automotive selection criteria, derating recommendations, and documentation requirements.",
      author: { name: "Thomas Zhang", title: "Senior FAE - Automotive" },
      date: "2024-01-05",
      publishDate: "2024-01-05",
      readTime: "18 min",
      tags: ["automotive", "AEC-Q200", "automotive electronics"],
      relatedArticles: ["lelon-selection-guide", "lelon-ripple-current", "lelon-thermal-guide"],
      faeInsights: {
        insight: "Automotive applications demand the highest reliability standards. In my experience supporting automotive designs with Lelon capacitors, conservative design practices are essential. I always recommend 50% voltage derating for automotive - this provides margin for load dumps, transients, and the critical nature of vehicle systems.",
        logic: "The automotive capacitor selection framework prioritizes reliability above all else. First, verify AEC-Q200 qualification is required. Second, select temperature rating based on worst-case ambient plus self-heating. Third, apply 50% voltage derating for all automotive applications. Fourth, implement thermal management. Fifth, ensure all PPAP documentation is available.",
        keyTakeaways: ["Always use AEC-Q200 qualified capacitors for automotive", "Apply 50% voltage derating for automotive applications", "Select appropriate temperature rating", "Maintain complete documentation"],
        commonPitfalls: ["Insufficient voltage derating for load dump conditions", "Underestimating self-heating from ripple current", "Inadequate thermal management", "Missing required automotive documentation"],
        bestPractices: ["Design for worst-case temperature plus margin", "Implement thermal monitoring in critical applications", "Use conformal coating for harsh environments", "Maintain complete traceability and documentation"]
      },
      customerCases: [
        { customer: "Automotive Tier 1", challenge: "Needed AEC-Q200 capacitors.", solution: "Implemented automotive series.", feedback: "Passed all qualifications." }
      ],
      faqs: [
        generateFAQ("What is AEC-Q200?", "AEC-Q200 is the global standard for automotive passive components. It defines rigorous testing including temperature cycling, vibration, and shock.", "Always use AEC-Q200 qualified capacitors for automotive.", ["AEC-Q200", "automotive", "qualification"]),
        generateFAQ("What derating is required?", "50% voltage derating is recommended for automotive to handle load dumps and transients.", "Apply 50% voltage derating for automotive.", ["derating", "voltage", "load dump"]),
        generateFAQ("What temperature rating?", "Use 125°C for most applications, 150°C for extreme under-hood locations.", "Select temperature rating based on location.", ["temperature", "rating", "automotive"]),
        generateFAQ("What documentation is needed?", "PPAP documentation including design records, test reports, PFMEA, control plan, and ongoing reliability data.", "Contact sales for PPAP documentation.", ["PPAP", "documentation", "automotive"]),
        generateFAQ("How do automotive differ from industrial?", "Automotive capacitors have AEC-Q200 qualification, enhanced construction, extended temperature ratings, and stricter quality controls.", "Use automotive-grade for vehicle applications.", ["automotive", "industrial", "differences"]),
        generateFAQ("What lifetime in automotive?", "With proper design, 15+ year operational life matching vehicle lifetime.", "Design for vehicle lifetime.", ["lifetime", "reliability", "vehicle"]),
        generateFAQ("What are common automotive requirements?", "AEC-Q200, extended temperature, vibration resistance, humidity resistance, and complete documentation.", "Verify all requirements with customer.", ["requirements", "automotive", "standards"]),
        generateFAQ("How to handle load dump?", "Use 50% voltage derating to provide margin for load dump transients up to 100V in 12V systems.", "Use conservative derating for load dump.", ["load dump", "transient", "protection"])
      ]
    },
    {
      id: "lelon-troubleshooting",
      slug: "lelon-troubleshooting",
      title: "Lelon Capacitor Troubleshooting Guide",
      category: "Troubleshooting",
      summary: "Guide for diagnosing capacitor-related issues and failure analysis.",
      content: "This guide helps identify and resolve capacitor-related issues including common failure modes and corrective actions.",
      author: { name: "Robert Zhang", title: "Senior FAE" },
      date: "2024-01-08",
      publishDate: "2024-01-08",
      readTime: "14 min",
      tags: ["troubleshooting", "failure analysis", "capacitor failure"],
      relatedArticles: ["lelon-selection-guide", "lelon-ripple-current", "lelon-thermal-guide"],
      faeInsights: {
        insight: "Most failures are caused by application issues rather than defects. Common causes: insufficient derating, excessive temperature, inadequate ripple margin. Measure actual conditions to find root cause.",
        logic: "Troubleshooting follows systematic approach: document symptoms, measure operating conditions, compare against ratings, inspect for damage, test parameters, identify root cause, implement corrective actions.",
        keyTakeaways: ["Measure actual operating conditions", "Compare against ratings with derating", "Identify root cause before replacing"],
        commonPitfalls: ["Replacing capacitors without identifying root cause", "Ignoring application conditions", "Inadequate testing"],
        bestPractices: ["Document all symptoms and conditions", "Use systematic troubleshooting process", "Verify fix with long-term testing"]
      },
      customerCases: [
        { customer: "Industrial Equipment OEM", challenge: "Capacitor failures in field.", solution: "Improved derating and thermal design.", feedback: "Failures eliminated." }
      ],
      faqs: [
        generateFAQ("What are common capacitor failure modes?", "Common failures: open circuit, short circuit, capacitance loss, high ESR. Causes include overvoltage, overtemperature, excessive ripple current.", "Identify failure mode to determine root cause.", ["failure modes", "capacitor failure", "reliability"]),
        generateFAQ("How do I measure capacitor ESR?", "Use ESR meter or impedance analyzer. Compare measured value against datasheet maximum. ESR increases with age and temperature stress.", "Measure ESR at operating frequency and temperature.", ["ESR measurement", "testing", "diagnostics"]),
        generateFAQ("What causes capacitance loss?", "Capacitance loss is typically caused by electrolyte drying due to excessive temperature over time. Normal end-of-life characteristic.", "Monitor capacitance during preventive maintenance.", ["capacitance loss", "end of life", "aging"]),
        generateFAQ("How do I identify overvoltage damage?", "Overvoltage damage shows as vent opening, case deformation, or internal short. Check application voltage including transients.", "Verify actual operating voltage including transients.", ["overvoltage", "damage", "failure analysis"]),
        generateFAQ("What indicates thermal damage?", "Thermal damage shows as case discoloration, seal damage, or accelerated parameter drift. Measure operating temperature.", "Use thermal imaging to identify hot spots.", ["thermal damage", "overheating", "temperature"]),
        generateFAQ("When should capacitors be replaced?", "Replace when capacitance drops 20% below rated, ESR exceeds 2x initial, or visible damage occurs. Preventive replacement based on lifetime calculations.", "Implement preventive maintenance schedule.", ["replacement criteria", "maintenance", "end of life"]),
        generateFAQ("How do I prevent future failures?", "Implement proper derating, thermal management, and ripple current margins. Monitor operating conditions regularly.", "Contact FAE for design review recommendations.", ["prevention", "design improvement", "reliability"]),
        generateFAQ("What documentation should I keep?", "Keep records of operating conditions, failure symptoms, test results, and corrective actions. Helps identify patterns and prevent recurrence.", "Maintain comprehensive failure records.", ["documentation", "failure records", "analysis"])
      ]
    }
  ]
};

// Write support.json
fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✅ support.json created');

// News data
const newsData = {
  articles: [
    {
      id: "lelon-expands-production-capacity",
      slug: "lelon-expands-production-capacity",
      title: "Lelon Expands Production Capacity to Meet Growing Demand",
      summary: "Lelon Electronics announces significant expansion of manufacturing capacity at Taiwan and China facilities.",
      content: "Lelon Electronics Corporation has announced a major expansion of its manufacturing capacity to meet growing global demand for aluminum electrolytic capacitors. The expansion includes new automated production lines at the company's Taiwan headquarters and additional capacity at its China facilities. This investment will increase Lelon's production capacity by 40% and improve delivery times for customers worldwide.",
      author: { name: "Lelon Electronics", title: "Corporate Communications" },
      date: "2024-03-15",
      publishDate: "2024-03-15",
      readTime: "5 min",
      tags: ["production expansion", "manufacturing", "capacity increase"],
      category: "Company News"
    },
    {
      id: "lelon-new-automotive-series",
      slug: "lelon-new-automotive-series",
      title: "Lelon Launches New AEC-Q200 Automotive Capacitor Series",
      summary: "New automotive-grade capacitors designed for electric vehicles and advanced driver assistance systems.",
      content: "Lelon Electronics has introduced a new series of AEC-Q200 qualified aluminum electrolytic capacitors specifically designed for automotive applications. The new series features enhanced temperature ratings up to 150°C, improved vibration resistance, and extended operational life. These capacitors are ideal for electric vehicle power electronics, battery management systems, and advanced driver assistance systems.",
      author: { name: "Thomas Zhang", title: "Product Manager - Automotive" },
      date: "2024-03-10",
      publishDate: "2024-03-10",
      readTime: "6 min",
      tags: ["automotive", "AEC-Q200", "new product"],
      category: "Product News"
    },
    {
      id: "lelon-iso-certification-renewal",
      slug: "lelon-iso-certification-renewal",
      title: "Lelon Successfully Renews ISO 9001 and ISO 14001 Certifications",
      summary: "Third-party audit confirms continued excellence in quality and environmental management systems.",
      content: "Lelon Electronics has successfully completed its ISO 9001 Quality Management System and ISO 14001 Environmental Management System recertification audits. The independent third-party audit confirmed that Lelon's quality and environmental management systems continue to meet international standards. This recertification demonstrates Lelon's ongoing commitment to quality and environmental responsibility.",
      author: { name: "Quality Assurance Department", title: "Lelon Electronics" },
      date: "2024-03-05",
      publishDate: "2024-03-05",
      readTime: "4 min",
      tags: ["certification", "ISO 9001", "ISO 14001", "quality"],
      category: "Company News"
    },
    {
      id: "lelon-led-lighting-solutions",
      slug: "lelon-led-lighting-solutions",
      title: "Lelon Introduces Enhanced Capacitor Solutions for LED Lighting",
      summary: "New capacitor series optimized for LED driver applications with extended lifetime and improved reliability.",
      content: "Lelon Electronics has launched a new series of capacitors specifically optimized for LED lighting applications. The new series features extended lifetime ratings, improved high-temperature performance, and competitive pricing. These capacitors are designed to meet the demanding requirements of modern LED drivers while providing excellent cost-performance ratio for lighting manufacturers.",
      author: { name: "Michael Chen", title: "Product Manager - LED Lighting" },
      date: "2024-02-28",
      publishDate: "2024-02-28",
      readTime: "5 min",
      tags: ["LED lighting", "new product", "lighting solutions"],
      category: "Product News"
    },
    {
      id: "lelon-distributor-conference-2024",
      slug: "lelon-distributor-conference-2024",
      title: "Lelon Hosts Annual Global Distributor Conference",
      summary: "Worldwide distributors gather to discuss market trends and new product strategies.",
      content: "Lelon Electronics hosted its annual global distributor conference in Taipei, Taiwan. Representatives from authorized distributors worldwide gathered to discuss market trends, new product introductions, and strategic initiatives for the coming year. The conference featured technical training sessions, product demonstrations, and networking opportunities.",
      author: { name: "Sales Department", title: "Lelon Electronics" },
      date: "2024-02-20",
      publishDate: "2024-02-20",
      readTime: "4 min",
      tags: ["distributor conference", "global partners", "sales"],
      category: "Company News"
    },
    {
      id: "lelon-solid-polymer-expansion",
      slug: "lelon-solid-polymer-expansion",
      title: "Lelon Expands Solid Polymer Capacitor Portfolio",
      summary: "New solid polymer capacitor series offers ultra-low ESR and extended lifetime for high-frequency applications.",
      content: "Lelon Electronics has expanded its solid polymer capacitor portfolio with new series featuring ultra-low ESR and extended operational life. The new capacitors are ideal for high-frequency switching power supplies, server power systems, and motherboard applications. These capacitors provide stable performance across temperature ranges and eliminate the risk of electrolyte drying.",
      author: { name: "David Wang", title: "Product Manager - Solid Polymer" },
      date: "2024-02-15",
      publishDate: "2024-02-15",
      readTime: "5 min",
      tags: ["solid polymer", "low ESR", "new product"],
      category: "Product News"
    }
  ]
};

// Write news.json
fs.writeFileSync(path.join(dataDir, 'news.json'), JSON.stringify(newsData, null, 2));
console.log('✅ news.json created');

console.log('\n✅ All Lelon data files created successfully!');
