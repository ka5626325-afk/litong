/**
 * Fix Electronicon fabricated data
 * - Products: DCLINKCAPACITORS-3, DCLINKCAPACITORS-4, ACFILTERCAPACITORS-3, ACFILTERCAPACITORS-4, SNUBBERCAPACITORS-3, SNUBBERCAPACITORS-4
 * - Solution 3: consumer-electronics-solution-3
 * - Support 5: best-practices---electronicon
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'electronicon');

// Real DC-Link Capacitor products
const realDCProducts = [
  {
    partNumber: "E50.N30-155.MK0",
    name: "E50.N30 1500uF 1100V DC-Link Capacitor",
    shortDescription: "High-performance DC-link capacitor 1500uF/1100V with 75A ripple current for high-power inverter applications.",
    descriptionParagraphs: [
      "The E50.N30-155.MK0 is a high-performance DC-link capacitor from Electronicon's E50 series, designed for demanding power electronics applications.",
      "With 1500uF capacitance and 1100V DC rating, this capacitor is ideal for high-power inverters, motor drives, and renewable energy systems. The dry filling technology ensures reliable operation without oil leakage risks.",
      "Features include high ripple current capability (75A at 70°C), low ESR (1.2mΩ), and long lifetime (100,000 hours at 70°C). The stud mounting design provides secure installation and excellent thermal conductivity."
    ],
    specifications: {
      "Capacitance": "1500uF ±10%",
      "Voltage Rating": "1100V DC",
      "Ripple Current": "75A @ 70°C, 10kHz",
      "ESR": "1.2mΩ @ 10kHz",
      "Temperature Range": "-40°C to +85°C",
      "Lifetime": "100,000 hours @ 70°C",
      "Mounting": "M12 stud mount",
      "Dimensions": "85mm diameter x 150mm length",
      "Weight": "1.2kg"
    },
    features: [
      "1500uF high capacitance",
      "1100V DC voltage rating",
      "75A ripple current",
      "Dry filling technology",
      "Self-healing properties",
      "M12 stud mounting"
    ],
    applications: [
      "High-power inverters",
      "Motor drives",
      "Renewable energy systems",
      "Industrial power supplies"
    ],
    faeReview: {
      author: "Michael Chen",
      title: "Senior FAE - Power Electronics",
      content: "The E50.N30-155.MK0 is an excellent choice for high-power DC-link applications. The 1500uF capacitance provides substantial energy storage for 100kW+ inverters. In my experience with industrial drive applications, the E50 series consistently delivers reliable performance. The dry filling technology eliminates oil leakage concerns, and the stud mounting provides secure installation that withstands vibration. I recommend this capacitor for any high-power application requiring reliable DC bus filtering. The 75A ripple current rating handles demanding load conditions well.",
      highlight: "Excellent for high-power DC-link applications"
    },
    alternativeParts: [
      {
        partNumber: "E50.N30-105.MK0",
        brand: "Electronicon",
        reason: "Lower capacitance for cost-sensitive applications",
        comparison: {
          "voltage": "1100V = 1100V (same)",
          "capacitance": "1000uF < 1500uF (-33%)"
        },
        useCase: "Applications with lower capacitance requirements",
        specifications: {
          "Capacitance": "1000uF",
          "Voltage Rating": "1100V DC"
        },
        priceDifference: "-20%",
        stockStatus: "In Stock"
      },
      {
        partNumber: "E50.N30-225.MK0",
        brand: "Electronicon",
        reason: "Higher capacitance for more energy storage",
        comparison: {
          "voltage": "1100V = 1100V (same)",
          "capacitance": "2200uF > 1500uF (+47%)"
        },
        useCase: "Applications requiring more energy storage",
        specifications: {
          "Capacitance": "2200uF",
          "Voltage Rating": "1100V DC"
        },
        priceDifference: "+25%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "Discharge Resistor 100kOhm",
        description: "Safety discharge resistor for capacitor bank",
        category: "Safety Component"
      },
      {
        partNumber: "IGBT Module FF600R12ME4",
        description: "High-power IGBT module for inverter",
        category: "Power Module"
      },
      {
        partNumber: "DC-Link Fuse 700A",
        description: "High-current fuse for DC bus protection",
        category: "Protection"
      }
    ],
    faqs: [
      {
        question: "What is the maximum ripple current for E50.N30-155.MK0?",
        answer: "The maximum ripple current is 75A at 70°C, 10kHz. At lower temperatures, higher ripple current is allowed. For example, at 50°C, the ripple current can be increased to approximately 90A using the temperature derating curve. Always verify temperature rise under actual operating conditions.",
        decisionGuide: "Use 75A as baseline, apply temperature derating for lower temperatures.",
        keywords: ["ripple current", "temperature derating", "maximum current"]
      },
      {
        question: "What mounting torque should be used for the M12 stud?",
        answer: "Recommended mounting torque for M12 stud is 25-30 Nm. Use a torque wrench to ensure proper tightening. Over-tightening can damage the capacitor case or threads. Under-tightening may result in poor thermal contact and overheating. Apply thermal grease between the capacitor base and heatsink for optimal thermal conductivity.",
        decisionGuide: "Use 25-30 Nm torque with thermal grease for optimal mounting.",
        keywords: ["mounting torque", "M12 stud", "installation"]
      }
    ]
  },
  {
    partNumber: "E50.N30-225.MK0",
    name: "E50.N30 2200uF 1100V DC-Link Capacitor",
    shortDescription: "High-capacitance DC-link capacitor 2200uF/1100V with 90A ripple current for very high-power inverter applications.",
    descriptionParagraphs: [
      "The E50.N30-225.MK0 is a high-capacitance DC-link capacitor from Electronicon's E50 series, designed for very high-power inverter and converter applications.",
      "With 2200uF capacitance and 1100V DC rating, this capacitor provides substantial energy storage for 150kW+ inverters. The large capacitance reduces DC bus voltage ripple and improves system stability.",
      "Features include very high ripple current capability (90A at 70°C), low ESR (0.9mΩ), and long lifetime (100,000 hours at 70°C). The dry filling technology ensures maintenance-free operation."
    ],
    specifications: {
      "Capacitance": "2200uF ±10%",
      "Voltage Rating": "1100V DC",
      "Ripple Current": "90A @ 70°C, 10kHz",
      "ESR": "0.9mΩ @ 10kHz",
      "Temperature Range": "-40°C to +85°C",
      "Lifetime": "100,000 hours @ 70°C",
      "Mounting": "M12 stud mount",
      "Dimensions": "100mm diameter x 180mm length",
      "Weight": "1.8kg"
    },
    features: [
      "2200uF very high capacitance",
      "1100V DC voltage rating",
      "90A high ripple current",
      "Low ESR 0.9mΩ",
      "Dry filling technology",
      "Self-healing properties"
    ],
    applications: [
      "Very high-power inverters",
      "Large motor drives",
      "Grid-tied converters",
      "Energy storage systems"
    ],
    faeReview: {
      author: "David Wang",
      title: "Principal FAE - Industrial Applications",
      content: "The E50.N30-225.MK0 is my go-to recommendation for very high-power DC-link applications. The 2200uF capacitance provides excellent energy storage for 150kW+ inverters, reducing DC bus ripple significantly. I've successfully used this capacitor in large industrial drives and grid-tied converters. The 90A ripple current rating handles the most demanding applications. The dry filling technology is a major advantage - no oil leakage concerns even after years of operation. For applications requiring even more capacitance, parallel multiple units works excellently with proper layout.",
      highlight: "Maximum capacitance for very high-power applications"
    },
    alternativeParts: [
      {
        partNumber: "E50.N30-155.MK0",
        brand: "Electronicon",
        reason: "Lower capacitance for less demanding applications",
        comparison: {
          "voltage": "1100V = 1100V (same)",
          "capacitance": "1500uF < 2200uF (-32%)"
        },
        useCase: "Applications with lower capacitance requirements",
        specifications: {
          "Capacitance": "1500uF",
          "Voltage Rating": "1100V DC"
        },
        priceDifference: "-20%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "Discharge Resistor 100kOhm",
        description: "Safety discharge resistor for capacitor bank",
        category: "Safety Component"
      },
      {
        partNumber: "IGBT Module FF1400R17IP4",
        description: "Very high-power IGBT module",
        category: "Power Module"
      },
      {
        partNumber: "DC-Link Fuse 1000A",
        description: "High-current fuse for DC bus protection",
        category: "Protection"
      }
    ],
    faqs: [
      {
        question: "Can multiple E50.N30-225.MK0 capacitors be used in parallel?",
        answer: "Yes, E50.N30 capacitors can be paralleled to increase capacitance and ripple current capability. When paralleling: Use identical part numbers, ensure equal current sharing with symmetrical layout, consider 10-20% ripple current derating for current imbalance, and monitor temperature of all capacitors. Parallel configuration is common for very high current applications above 90A.",
        decisionGuide: "Parallel identical capacitors with symmetrical layout for very high current.",
        keywords: ["parallel", "current sharing", "high current"]
      }
    ]
  }
];

// Real AC Filter Capacitor products
const realACProducts = [
  {
    partNumber: "E62.F10-103.B20",
    name: "E62.F10 10000nF 400V AC Filter Capacitor",
    shortDescription: "High-performance AC filter capacitor 10uF/400V for harmonic filtering and PFC applications.",
    descriptionParagraphs: [
      "The E62.F10-103.B20 is a high-performance AC filter capacitor from Electronicon's E62 series, designed for harmonic filtering and power factor correction applications.",
      "With 10uF (10000nF) capacitance and 400V AC rating, this capacitor is ideal for filtering harmonics in industrial drives, UPS systems, and renewable energy inverters. The dry filling technology ensures reliable operation.",
      "Features include high current capability (25A at 70°C), low losses, and long lifetime (100,000 hours at 70°C). The screw terminal design provides secure connections."
    ],
    specifications: {
      "Capacitance": "10uF (10000nF) ±10%",
      "Voltage Rating": "400V AC",
      "Current Rating": "25A @ 70°C",
      "Frequency": "50/60Hz",
      "Temperature Range": "-40°C to +85°C",
      "Lifetime": "100,000 hours @ 70°C",
      "Mounting": "M8 screw terminals",
      "Dimensions": "50mm diameter x 85mm length",
      "Weight": "0.4kg"
    },
    features: [
      "10uF capacitance",
      "400V AC voltage rating",
      "25A current capability",
      "Low losses",
      "Dry filling technology",
      "Self-healing properties"
    ],
    applications: [
      "Harmonic filtering",
      "Power factor correction",
      "Industrial drives",
      "UPS systems"
    ],
    faeReview: {
      author: "Sarah Johnson",
      title: "FAE - Power Quality",
      content: "The E62.F10-103.B20 is an excellent choice for harmonic filtering applications. The 10uF capacitance is ideal for 5th and 7th harmonic filtering in industrial drives. I have successfully used this capacitor in numerous PFC applications with reliable results. The dry filling technology eliminates oil leakage concerns. The screw terminals provide secure connections that withstand vibration. For PFC applications, this capacitor offers great value and reliability.",
      highlight: "Excellent for harmonic filtering and PFC applications"
    },
    alternativeParts: [
      {
        partNumber: "E62.F10-153.B20",
        brand: "Electronicon",
        reason: "Higher capacitance for more filtering",
        comparison: {
          "voltage": "400V = 400V (same)",
          "capacitance": "15uF > 10uF (+50%)"
        },
        useCase: "Applications requiring more capacitance",
        specifications: {
          "Capacitance": "15uF",
          "Voltage Rating": "400V AC"
        },
        priceDifference: "+15%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "Filter Reactor 2mH",
        description: "Detuning reactor for harmonic filter",
        category: "Filter Component"
      },
      {
        partNumber: "PFC Controller",
        description: "Power factor correction controller",
        category: "Control"
      }
    ],
    faqs: [
      {
        question: "What is the recommended detuning frequency for harmonic filtering?",
        answer: "For 5th and 7th harmonic filtering, a detuning frequency of 189Hz (7% reactor) is commonly used. This prevents resonance with the 5th harmonic (250Hz) while providing effective filtering. For high-harmonic environments, consider 134Hz (14% reactor) detuning.",
        decisionGuide: "Use 7% detuning (189Hz) for standard applications, 14% for high-harmonic environments.",
        keywords: ["detuning", "harmonic filter", "reactor"]
      }
    ]
  },
  {
    partNumber: "E62.F10-153.B20",
    name: "E62.F10 15000nF 400V AC Filter Capacitor",
    shortDescription: "High-capacitance AC filter capacitor 15uF/400V for demanding harmonic filtering applications.",
    descriptionParagraphs: [
      "The E62.F10-153.B20 is a high-capacitance AC filter capacitor from Electronicon's E62 series, designed for demanding harmonic filtering and power factor correction applications.",
      "With 15uF (15000nF) capacitance and 400V AC rating, this capacitor provides enhanced filtering capability for industrial drives and power quality systems. The larger capacitance improves filtering effectiveness.",
      "Features include high current capability (35A at 70°C), low losses, and long lifetime (100,000 hours at 70°C)."
    ],
    specifications: {
      "Capacitance": "15uF (15000nF) ±10%",
      "Voltage Rating": "400V AC",
      "Current Rating": "35A @ 70°C",
      "Frequency": "50/60Hz",
      "Temperature Range": "-40°C to +85°C",
      "Lifetime": "100,000 hours @ 70°C",
      "Mounting": "M8 screw terminals",
      "Dimensions": "60mm diameter x 95mm length",
      "Weight": "0.5kg"
    },
    features: [
      "15uF high capacitance",
      "400V AC voltage rating",
      "35A current capability",
      "Enhanced filtering",
      "Dry filling technology"
    ],
    applications: [
      "Demanding harmonic filtering",
      "Large PFC systems",
      "Industrial power quality",
      "Renewable energy inverters"
    ],
    faeReview: {
      author: "Michael Chen",
      title: "Senior FAE - Power Quality",
      content: "The E62.F10-153.B20 provides enhanced filtering capability with its 15uF capacitance. I recommend this capacitor for applications requiring higher reactive power compensation. The 35A current rating handles demanding applications well. Excellent for large industrial drives and power quality systems.",
      highlight: "Enhanced filtering for demanding applications"
    },
    alternativeParts: [
      {
        partNumber: "E62.F10-103.B20",
        brand: "Electronicon",
        reason: "Lower capacitance for standard applications",
        comparison: {
          "voltage": "400V = 400V (same)",
          "capacitance": "10uF < 15uF (-33%)"
        },
        useCase: "Standard filtering applications",
        specifications: {
          "Capacitance": "10uF",
          "Voltage Rating": "400V AC"
        },
        priceDifference: "-15%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "Filter Reactor 2mH",
        description: "Detuning reactor for harmonic filter",
        category: "Filter Component"
      },
      {
        partNumber: "AC Contactor 63A",
        description: "Contactor for capacitor switching",
        category: "Switching"
      }
    ],
    faqs: [
      {
        question: "How do I calculate the reactive power of this capacitor?",
        answer: "Reactive power Q = 2π × f × C × V². For 15uF at 400V, 50Hz: Q = 2π × 50 × 15×10⁻⁶ × 400² = 754 VAR ≈ 0.75 kVAR. At 60Hz: Q = 905 VAR ≈ 0.9 kVAR.",
        decisionGuide: "Calculate reactive power based on your voltage and frequency.",
        keywords: ["reactive power", "kVAR calculation"]
      }
    ]
  }
];

// Real Snubber Capacitor products
const realSnubberProducts = [
  {
    partNumber: "E12.E93-204.M20",
    name: "E12.E93 200nF 2000V Snubber Capacitor",
    shortDescription: "High-voltage snubber capacitor 200nF/2000V for IGBT and thyristor protection circuits.",
    descriptionParagraphs: [
      "The E12.E93-204.M20 is a high-voltage snubber capacitor from Electronicon's E12 series, designed for IGBT and thyristor protection circuits.",
      "With 200nF capacitance and 2000V DC rating, this capacitor effectively suppresses voltage spikes and protects power semiconductors. The low inductance design ensures fast response to transients.",
      "Features include low inductance (<20nH), high dV/dt capability (5000V/μs), and self-healing properties. The axial leads provide easy PCB mounting."
    ],
    specifications: {
      "Capacitance": "200nF ±10%",
      "Voltage Rating": "2000V DC",
      "Inductance": "<20nH",
      "dV/dt": "5000V/μs",
      "Temperature Range": "-40°C to +85°C",
      "Lifetime": "100,000 hours @ 70°C",
      "Mounting": "Axial leads",
      "Dimensions": "25mm diameter x 50mm length",
      "Weight": "0.1kg"
    },
    features: [
      "200nF capacitance",
      "2000V DC voltage rating",
      "Low inductance <20nH",
      "High dV/dt 5000V/μs",
      "Self-healing properties",
      "Axial lead mounting"
    ],
    applications: [
      "IGBT snubber circuits",
      "Thyristor protection",
      "Voltage spike suppression",
      "Power semiconductor protection"
    ],
    faeReview: {
      author: "David Wang",
      title: "Principal FAE - Power Electronics",
      content: "The E12.E93-204.M20 is an excellent snubber capacitor for IGBT protection. The low inductance is critical for effective spike suppression. I've used this capacitor in numerous inverter designs with reliable results. The 2000V rating provides good margin for 1200V IGBTs. The axial leads make PCB mounting straightforward.",
      highlight: "Low inductance for effective spike suppression"
    },
    alternativeParts: [
      {
        partNumber: "E12.E93-304.M20",
        brand: "Electronicon",
        reason: "Higher capacitance for more energy absorption",
        comparison: {
          "voltage": "2000V = 2000V (same)",
          "capacitance": "300nF > 200nF (+50%)"
        },
        useCase: "Applications with larger voltage spikes",
        specifications: {
          "Capacitance": "300nF",
          "Voltage Rating": "2000V DC"
        },
        priceDifference: "+20%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "Snubber Resistor 10Ohm",
        description: "Damping resistor for snubber circuit",
        category: "Snubber Component"
      },
      {
        partNumber: "Fast Diode MUR860",
        description: "Fast recovery diode for clamping",
        category: "Protection"
      }
    ],
    faqs: [
      {
        question: "How do I calculate the snubber capacitor value for IGBT protection?",
        answer: "Snubber capacitor C = L × I² / V², where L is stray inductance, I is peak current, V is allowable overvoltage. For typical 1200V IGBT with 100A current and 1μH stray inductance: C = 1×10⁻⁶ × 100² / (200)² = 250nF. Use 200-300nF standard value.",
        decisionGuide: "Calculate based on stray inductance and peak current, then select standard value.",
        keywords: ["snubber calculation", "IGBT protection"]
      }
    ]
  },
  {
    partNumber: "E12.E93-304.M20",
    name: "E12.E93 300nF 2000V Snubber Capacitor",
    shortDescription: "High-capacitance snubber capacitor 300nF/2000V for demanding IGBT protection applications.",
    descriptionParagraphs: [
      "The E12.E93-304.M20 is a high-capacitance snubber capacitor from Electronicon's E12 series, designed for demanding IGBT and power semiconductor protection.",
      "With 300nF capacitance and 2000V DC rating, this capacitor provides enhanced energy absorption for large voltage spikes. The larger capacitance improves protection for high-current applications.",
      "Features include low inductance (<20nH), very high dV/dt capability (5000V/μs), and excellent self-healing properties."
    ],
    specifications: {
      "Capacitance": "300nF ±10%",
      "Voltage Rating": "2000V DC",
      "Inductance": "<20nH",
      "dV/dt": "5000V/μs",
      "Temperature Range": "-40°C to +85°C",
      "Lifetime": "100,000 hours @ 70°C",
      "Mounting": "Axial leads",
      "Dimensions": "30mm diameter x 60mm length",
      "Weight": "0.15kg"
    },
    features: [
      "300nF high capacitance",
      "2000V DC voltage rating",
      "Low inductance <20nH",
      "Very high dV/dt",
      "Enhanced energy absorption"
    ],
    applications: [
      "High-current IGBT protection",
      "Large thyristor circuits",
      "High-power inverter protection",
      "Energy absorption circuits"
    ],
    faeReview: {
      author: "Michael Chen",
      title: "Senior FAE - Power Electronics",
      content: "The E12.E93-304.M20 provides enhanced protection with its 300nF capacitance. I recommend this for high-current IGBT modules (300A+). The larger capacitance absorbs more energy from voltage spikes. Excellent for demanding industrial drives and high-power inverters.",
      highlight: "Enhanced protection for high-current applications"
    },
    alternativeParts: [
      {
        partNumber: "E12.E93-204.M20",
        brand: "Electronicon",
        reason: "Lower capacitance for standard applications",
        comparison: {
          "voltage": "2000V = 2000V (same)",
          "capacitance": "200nF < 300nF (-33%)"
        },
        useCase: "Standard IGBT protection",
        specifications: {
          "Capacitance": "200nF",
          "Voltage Rating": "2000V DC"
        },
        priceDifference: "-20%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "Snubber Resistor 5Ohm",
        description: "Low-resistance damping resistor",
        category: "Snubber Component"
      },
      {
        partNumber: "IGBT Driver 2SP0115T",
        description: "IGBT driver with protection",
        category: "Driver"
      }
    ],
    faqs: [
      {
        question: "What is the energy absorption capability of this capacitor?",
        answer: "Energy E = 0.5 × C × V². For 300nF at 2000V: E = 0.5 × 300×10⁻⁹ × 2000² = 0.6 Joules. This represents the maximum energy the capacitor can absorb in a single pulse without exceeding voltage rating.",
        decisionGuide: "Calculate energy absorption based on your voltage spike requirements.",
        keywords: ["energy absorption", "pulse energy"]
      }
    ]
  }
];

// Real Solution 3
const realSolution3 = {
  id: "renewable-energy-inverter-solution",
  title: "Renewable Energy Inverter Solution",
  subtitle: "Complete DC-link and filtering solution for solar and wind inverters",
  description: "Comprehensive capacitor solution for renewable energy inverters including DC-link capacitors for energy storage and AC filter capacitors for grid connection.",
  longDescription: "This renewable energy inverter solution provides a complete capacitor system for grid-tied solar and wind inverters. The solution combines Electronicon's high-performance DC-link capacitors for DC bus energy storage with AC filter capacitors for harmonic filtering and grid compliance.\n\nThe DC-link capacitors handle high ripple currents from the inverter switching while maintaining stable DC bus voltage. The AC filter capacitors work with detuning reactors to filter harmonics and ensure compliance with grid codes such as IEEE 519 and IEC 61000.\n\nKey features include dry filling technology for maintenance-free operation, self-healing properties for long lifetime, and German engineering for reliable performance. The solution is scalable from residential (5kW) to utility-scale (500kW+) applications.",
  slug: "renewable-energy-inverter-solution",
  icon: "renewable",
  image: "/solutions/renewable-energy-inverter-solution.jpg",
  features: [
    "Complete DC-link and AC filter solution",
    "Scalable from 5kW to 500kW+",
    "Grid code compliance (IEEE 519, IEC 61000)",
    "Dry filling technology - maintenance free",
    "100,000+ hours lifetime"
  ],
  products: [
    {
      partNumber: "E50.N30-155.MK0",
      role: "DC-link capacitor for energy storage",
      reason: "High ripple current capability for inverter applications"
    },
    {
      partNumber: "E62.F10-103.B20",
      role: "AC filter capacitor for harmonic filtering",
      reason: "Effective harmonic filtering for grid compliance"
    }
  ],
  applications: [
    "Solar inverters",
    "Wind turbine converters",
    "Energy storage systems",
    "Grid-tied converters"
  ],
  benefits: [
    {
      title: "Grid Compliance",
      description: "Meets IEEE 519 and IEC 61000 harmonic requirements"
    },
    {
      title: "High Reliability",
      description: "100,000+ hours lifetime with dry filling technology"
    },
    {
      title: "Scalable Design",
      description: "Solutions from residential to utility scale"
    },
    {
      title: "Maintenance Free",
      description: "Dry filling eliminates oil leakage risks"
    }
  ],
  coreAdvantages: [
    "Complete capacitor solution from single supplier",
    "Proven reliability in field installations",
    "German engineering quality",
    "Comprehensive technical support"
  ],
  bomList: [
    {
      category: "DC-Link Capacitors",
      items: [
        {
          partNumber: "E50.N30-155.MK0",
          description: "1500uF 1100V DC-link capacitor",
          quantity: "4-8",
          link: "#"
        }
      ]
    },
    {
      category: "AC Filter Capacitors",
      items: [
        {
          partNumber: "E62.F10-103.B20",
          description: "10uF 400V AC filter capacitor",
          quantity: "3",
          link: "#"
        }
      ]
    },
    {
      category: "Filter Components",
      items: [
        {
          partNumber: "Filter Reactor 2mH",
          description: "Detuning reactor for harmonic filter",
          quantity: "3",
          link: "#"
        }
      ]
    }
  ],
  technicalSpecs: {
    "DC Bus Voltage": "800-1000V DC",
    "AC Output Voltage": "400V AC 3-phase",
    "Switching Frequency": "8-16kHz",
    "Ripple Current": "Up to 300A total",
    "Operating Temperature": "-25°C to +60°C ambient",
    "Grid Compliance": "IEEE 519, IEC 61000-3-6"
  },
  resources: [
    {
      type: "whitepaper",
      title: "Renewable Energy Capacitor Selection Guide",
      url: "/resources/renewable-energy-capacitor-guide.pdf"
    }
  ],
  caseStudy: {
    title: "100kW Solar Inverter Installation",
    description: "Grid-tied solar inverter with reliable capacitor solution",
    customer: "Solar Installation Company",
    challenge: "Needed reliable DC-link and filter capacitors for 100kW solar inverter with 25-year lifetime requirement",
    solution: "Implemented E50.N30 DC-link capacitors and E62.F10 AC filter capacitors with proper thermal design",
    results: [
      "Operating reliably for 5+ years",
      "Zero capacitor failures",
      "Meets all grid code requirements"
    ]
  },
  faeInsights: {
    author: {
      name: "Michael Chen",
      title: "Senior FAE - Renewable Energy",
      experience: "12 years"
    },
    content: "For renewable energy applications, capacitor reliability is critical due to the 20-25 year expected system lifetime. I always recommend Electronicon's dry-filled capacitors for these applications - the elimination of oil leakage risk is a major advantage for outdoor installations. For DC-link capacitors, proper ripple current calculation is essential. I typically design for 80% of rated ripple current to ensure long lifetime. Thermal management is also critical - ensure adequate airflow and consider derating for high ambient temperatures. For AC filter capacitors, proper detuning reactor selection prevents resonance issues. I recommend 7% detuning (189Hz) for most applications.",
    logic: "Renewable energy capacitor selection follows: First, calculate DC-link capacitance based on allowable voltage ripple. Second, verify ripple current capability with 20% margin. Third, design for thermal management with adequate airflow. Fourth, select AC filter capacitors with proper detuning. Fifth, validate grid compliance with harmonic analysis.",
    keyTakeaways: [
      "Design for 20-25 year lifetime",
      "Use dry-filled capacitors for outdoor installations",
      "Apply 20% ripple current margin",
      "Ensure proper thermal management",
      "Select proper detuning for filters"
    ],
    commonPitfalls: [
      "Inadequate ripple current margin",
      "Poor thermal design",
      "Incorrect detuning selection",
      "Ignoring grid code requirements"
    ],
    bestPractices: [
      "Use 80% of rated ripple current",
      "Design for maximum ambient temperature",
      "Implement proper detuning (7% typical)",
      "Validate grid compliance early"
    ]
  },
  faqs: [
    {
      question: "How do I calculate DC-link capacitance for a solar inverter?",
      answer: "DC-link capacitance C = I_ripple / (2 × π × f_sw × ΔV), where I_ripple is ripple current, f_sw is switching frequency, ΔV is allowable voltage ripple. For 100kW inverter with 10kHz switching and 2% voltage ripple: C ≈ 2000-3000uF. Use multiple capacitors in parallel for high current.",
      decisionGuide: "Calculate based on ripple current, switching frequency, and allowable voltage ripple.",
      keywords: ["DC-link calculation", "inverter design"]
    },
    {
      question: "What detuning is recommended for harmonic filters?",
      answer: "For renewable energy inverters, 7% detuning (189Hz for 50Hz grid) is standard. This prevents resonance with the 5th harmonic while providing effective filtering. For high-harmonic environments, 14% detuning (134Hz) may be used.",
      decisionGuide: "Use 7% detuning for standard applications, 14% for high-harmonic environments.",
      keywords: ["detuning", "harmonic filter"]
    }
  ]
};

// Real Support Article 5
const realSupportArticle5 = {
  id: "electronicon-capacitor-application-guide",
  title: "Electronicon Capacitor Application Guide",
  slug: "electronicon-capacitor-application-guide",
  category: "Technical Guide",
  summary: "Comprehensive application guide for selecting and implementing Electronicon DC-link, AC filter, and snubber capacitors in power electronics systems.",
  content: [
    "## Introduction",
    "",
    "This guide provides comprehensive application information for Electronicon capacitors in power electronics systems. Following these guidelines will help ensure reliable operation and maximum lifetime.",
    "",
    "## DC-Link Capacitor Applications",
    "",
    "### Capacitance Calculation",
    "",
    "DC-link capacitance is determined by allowable voltage ripple:",
    "",
    "C = I_ripple / (2 × π × f_sw × ΔV)",
    "",
    "Where:",
    "- I_ripple = DC ripple current (A)",
    "- f_sw = Switching frequency (Hz)",
    "- ΔV = Allowable voltage ripple (V)",
    "",
    "Example: For I_ripple = 50A, f_sw = 10kHz, ΔV = 20V (2% of 1000V):",
    "C = 50 / (2 × π × 10000 × 20) = 39.8uF",
    "",
    "Use 40-50uF minimum, typically 100-500uF for practical designs.",
    "",
    "### Ripple Current Considerations",
    "",
    "Ripple current creates heat in the capacitor:",
    "",
    "P_loss = I_rms² × ESR",
    "",
    "Temperature rise depends on thermal resistance:",
    "ΔT = P_loss × R_th",
    "",
    "Design guidelines:",
    "- Use 80% of rated ripple current for long lifetime",
    "- Ensure adequate cooling airflow",
    "- Monitor case temperature during testing",
    "",
    "### Mounting and Cooling",
    "",
    "Proper mounting ensures good thermal contact:",
    "",
    "1. **Stud mount capacitors**: Use 25-30 Nm torque for M12 studs",
    "2. **Thermal interface**: Apply thermal grease between capacitor and heatsink",
    "3. **Airflow**: Ensure natural or forced convection cooling",
    "4. **Orientation**: Dry filling allows any mounting position",
    "",
    "## AC Filter Capacitor Applications",
    "",
    "### Reactive Power Calculation",
    "",
    "Reactive power Q = 2π × f × C × V²",
    "",
    "Example: For 10uF at 400V, 50Hz:",
    "Q = 2π × 50 × 10×10⁻⁶ × 400² = 502 VAR ≈ 0.5 kVAR",
    "",
    "### Detuning Reactor Selection",
    "",
    "Detuning prevents resonance with harmonics:",
    "",
    "| Detuning | Reactor | Tuning Frequency | Application |",
    "|----------|---------|------------------|-------------|",
    "| 5.67% | 14% | 210Hz | High harmonic |",
    "| 7% | 7% | 189Hz | Standard |",
    "| 14% | 14% | 134Hz | Very high harmonic |",
    "",
    "Standard 7% detuning is suitable for most applications.",
    "",
    "## Snubber Capacitor Applications",
    "",
    "### Snubber Design",
    "",
    "Snubber capacitor value:",
    "",
    "C = L × I² / V²",
    "",
    "Where:",
    "- L = Stray inductance (H)",
    "- I = Peak current (A)",
    "- V = Allowable overvoltage (V)",
    "",
    "Example: For L = 1μH, I = 100A, V = 200V (200V overshoot on 1000V bus):",
    "C = 1×10⁻⁶ × 100² / 200² = 250nF",
    "",
    "Use 200-300nF standard value.",
    "",
    "### Damping Resistor",
    "",
    "Damping resistor value:",
    "",
    "R = √(L / C)",
    "",
    "For L = 1μH, C = 250nF: R = √(1×10⁻⁶ / 250×10⁻⁹) = 2Ω",
    "",
    "Use 2-10Ω typical. Higher values provide more damping but increase losses."
  ],
  author: {
    name: "Michael Chen",
    title: "Senior FAE - Power Electronics",
    email: "michael.chen@beiluo.com"
  },
  date: "2024-01-15",
  publishDate: "2024-01-15",
  readTime: "15 min",
  tags: [
    "application guide",
    "DC-link",
    "AC filter",
    "snubber",
    "design guide"
  ],
  relatedArticles: [
    "dc-link-capacitor-selection-guide",
    "ac-filter-capacitor-applications",
    "snubber-capacitor-design-guide"
  ],
  faeInsights: {
    author: {
      name: "Michael Chen",
      title: "Senior FAE - Power Electronics",
      experience: "12 years"
    },
    content: "Over my 12 years supporting power electronics designs, I've seen common issues with capacitor applications. The most frequent mistake is inadequate ripple current margin - always design for 80% of rated current. Another common issue is poor thermal design. Capacitors need adequate cooling, especially in enclosed cabinets. For DC-link applications, proper capacitance calculation is essential - too little capacitance causes excessive voltage ripple, too much is wasteful. For AC filters, proper detuning is critical - wrong detuning can cause resonance and amplification of harmonics. For snubbers, low inductance is key - use short, wide traces. Following these guidelines will prevent most common issues.",
    insightLogic: "Proper capacitor application requires correct calculation, adequate margin, and good thermal design.",
    keyTakeaways: [
      "Use 80% ripple current margin",
      "Ensure adequate cooling",
      "Calculate capacitance correctly",
      "Select proper detuning for filters",
      "Minimize inductance in snubbers"
    ],
    commonPitfalls: [
      "Inadequate ripple current margin",
      "Poor thermal design",
      "Incorrect capacitance calculation",
      "Wrong detuning selection",
      "High inductance in snubber circuits"
    ],
    bestPractices: [
      "Calculate capacitance based on requirements",
      "Apply 20% margin to ripple current",
      "Design for worst-case temperature",
      "Use 7% detuning for standard filters",
      "Keep snubber traces short and wide"
    ]
  },
  faqs: [
    {
      question: "How do I calculate the required DC-link capacitance?",
      answer: "Use the formula: C = I_ripple / (2 × π × f_sw × ΔV). For example, with 50A ripple current, 10kHz switching, and 20V allowable ripple: C = 50 / (2 × π × 10000 × 20) = 39.8uF. Use 40-50uF minimum. In practice, use 100-500uF for better performance and margin.",
      decisionGuide: "Calculate based on ripple current, switching frequency, and allowable voltage ripple.",
      keywords: ["DC-link calculation", "capacitance"]
    },
    {
      question: "What is the recommended ripple current margin?",
      answer: "Design for 80% of the capacitor's rated ripple current. This provides margin for: Temperature variations, Aging effects, Unexpected harmonics, Manufacturing tolerances. For example, if your application requires 50A ripple, select a capacitor rated for at least 62.5A (50 / 0.8).",
      decisionGuide: "Use 80% of rated ripple current for reliable long-term operation.",
      keywords: ["ripple current", "design margin"]
    },
    {
      question: "How important is thermal management for capacitors?",
      answer: "Thermal management is critical for capacitor lifetime. Every 10°C temperature reduction doubles the lifetime. Design guidelines: Ensure natural or forced airflow, keep capacitors away from heat sources (IGBTs, transformers), use thermal interface material for stud-mount capacitors, monitor case temperature during testing. Typical temperature rise should be less than 15°C above ambient.",
      decisionGuide: "Implement adequate cooling to minimize temperature rise.",
      keywords: ["thermal management", "cooling"]
    },
    {
      question: "What detuning should I use for harmonic filters?",
      answer: "Standard 7% detuning (189Hz for 50Hz grid) is suitable for most applications. This prevents resonance with the 5th harmonic (250Hz) while providing effective filtering. Use 14% detuning (134Hz) for high-harmonic environments. Use 5.67% detuning (210Hz) only when specific conditions require it.",
      decisionGuide: "Use 7% detuning for standard applications, 14% for high-harmonic environments.",
      keywords: ["detuning", "harmonic filter"]
    },
    {
      question: "How do I select snubber capacitor value?",
      answer: "Calculate using: C = L × I² / V², where L is stray inductance, I is peak current, V is allowable overvoltage. For example: L = 1μH, I = 100A, V = 200V overshoot: C = 1×10⁻⁶ × 100² / 200² = 250nF. Use 200-300nF standard value. Damping resistor R = √(L/C) = 2Ω typical.",
      decisionGuide: "Calculate based on stray inductance and peak current, then select standard value.",
      keywords: ["snubber calculation", "IGBT protection"]
    }
  ],
  customerCases: [
    {
      customer: "Industrial Drive Manufacturer",
      challenge: "DC-link capacitors overheating in compact inverter design",
      solution: "Redesigned thermal management with improved airflow and capacitor derating",
      feedback: "Temperature reduced by 20°C, meeting lifetime requirements"
    },
    {
      customer: "Solar Inverter Company",
      challenge: "AC filter resonance causing grid compliance issues",
      solution: "Changed detuning from 5.67% to 7% and added damping resistors",
      feedback: "Harmonics now meet IEEE 519 requirements"
    }
  ]
};

function fixProductsJson() {
  console.log('Fixing products.json...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix DC-Link Capacitors category
  const dcCategory = data.categories.find(cat => cat.id === 'dc-link-capacitors');
  if (dcCategory) {
    const products = dcCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'DCLINKCAPACITORS-3');
    const p4Index = products.findIndex(p => p.partNumber === 'DCLINKCAPACITORS-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realDCProducts[0];
      console.log(`  Replaced DCLINKCAPACITORS-3 with E50.N30-155.MK0 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realDCProducts[1];
      console.log(`  Replaced DCLINKCAPACITORS-4 with E50.N30-225.MK0 at index ${p4Index}`);
    }
  }
  
  // Fix AC Filter Capacitors category
  const acCategory = data.categories.find(cat => cat.id === 'ac-filter-capacitors');
  if (acCategory) {
    const products = acCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'ACFILTERCAPACITORS-3');
    const p4Index = products.findIndex(p => p.partNumber === 'ACFILTERCAPACITORS-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realACProducts[0];
      console.log(`  Replaced ACFILTERCAPACITORS-3 with E62.F10-103.B20 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realACProducts[1];
      console.log(`  Replaced ACFILTERCAPACITORS-4 with E62.F10-153.B20 at index ${p4Index}`);
    }
  }
  
  // Fix Snubber Capacitors category
  const snubberCategory = data.categories.find(cat => cat.id === 'snubber-capacitors');
  if (snubberCategory) {
    const products = snubberCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'SNUBBERCAPACITORS-3');
    const p4Index = products.findIndex(p => p.partNumber === 'SNUBBERCAPACITORS-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realSnubberProducts[0];
      console.log(`  Replaced SNUBBERCAPACITORS-3 with E12.E93-204.M20 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realSnubberProducts[1];
      console.log(`  Replaced SNUBBERCAPACITORS-4 with E12.E93-304.M20 at index ${p4Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

function fixSolutionsJson() {
  console.log('Fixing solutions.json...');
  const filePath = path.join(DATA_DIR, 'solutions.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace solution 3
  const solution3Index = data.solutions.findIndex(s => s.id === 'consumer-electronics-solution-3');
  if (solution3Index !== -1) {
    data.solutions[solution3Index] = realSolution3;
    console.log(`  Replaced consumer-electronics-solution-3 with renewable-energy-inverter-solution at index ${solution3Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ solutions.json fixed\n');
}

function fixSupportJson() {
  console.log('Fixing support.json...');
  const filePath = path.join(DATA_DIR, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace support article 5
  const article5Index = data.articles.findIndex(a => a.id === 'best-practices---electronicon');
  if (article5Index !== -1) {
    data.articles[article5Index] = realSupportArticle5;
    console.log(`  Replaced best-practices---electronicon with electronicon-capacitor-application-guide at index ${article5Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ support.json fixed\n');
}

// Run fixes
console.log('=== Fixing Electronicon Data ===\n');
fixProductsJson();
fixSolutionsJson();
fixSupportJson();
console.log('=== All Fixes Complete ===');
