#!/usr/bin/env node

/**
 * 添加 Samwha 剩余产品分类
 * Film Capacitors, Automotive Capacitors
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'samwha');
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 分类3: Film Capacitors
const filmCategory = {
  id: "film-capacitors",
  name: "Film Capacitors",
  slug: "film-capacitors",
  description: "Metallized film capacitors for power electronics, DC-link, filtering, and snubber applications. High reliability and self-healing properties.",
  longDescription: "Samwha's film capacitors utilize metallized polypropylene or polyester film technology to deliver high reliability, low losses, and excellent frequency characteristics. The metallized construction provides self-healing properties - minor dielectric defects are automatically cleared without catastrophic failure. Key series include the MPP series for DC-link and power applications, MPET series for general-purpose filtering, and MPS series for snubber and high-frequency applications. These capacitors are non-polar, have low ESR and ESL, and offer stable capacitance over temperature and frequency. Film capacitors are ideal for DC-link filtering in inverters, power factor correction, motor run capacitors, and high-frequency resonant circuits. Unlike electrolytic capacitors, film capacitors do not wear out and can last 20+ years in typical applications. As an authorized Samwha distributor, we provide technical support for film capacitor selection and application optimization.",
  parameters: ["Capacitance", "Voltage Rating", "Tolerance", "ESR", "ESL", "Temperature Range", "Lifetime"],
  applications: ["DC-Link Filtering", "Power Factor Correction", "Motor Run", "Snubber Circuits", "High-Frequency Resonant", "EMI Filtering"],
  selectionGuide: {
    title: "How to Select Film Capacitors",
    description: "Guide to selecting the right film capacitor for power electronics applications",
    articleId: "film-capacitor-selection-guide",
    articleLink: "/samwha/support/film-capacitor-selection-guide.html"
  },
  selectionGuideLink: {
    url: "/samwha/support/film-capacitor-selection-guide.html",
    text: "Film Capacitor Selection Guide"
  },
  series: [
    {
      name: "MPP Series",
      description: "Metallized polypropylene capacitors for DC-link and power applications"
    },
    {
      name: "MPET Series",
      description: "Metallized polyester capacitors for general-purpose filtering"
    }
  ],
  faqs: [
    {
      question: "What are the advantages of film capacitors over electrolytic capacitors?",
      "answer": "Film capacitors offer several advantages over aluminum electrolytic capacitors for specific applications: 1) No Wear-Out Mechanism - Film capacitors do not have electrolyte to dry out, providing essentially unlimited lifetime (20+ years) in typical applications, 2) High Ripple Current Capability - Low ESR allows handling very high ripple currents suitable for inverter DC-links, 3) High Frequency Performance - Low ESL makes film capacitors ideal for high-frequency switching applications above 100kHz, 4) Non-Polar - Can be used in AC applications and resonant circuits, 5) Self-Healing - Minor dielectric defects clear automatically without failure, 6) Stable Capacitance - Capacitance remains stable over temperature and lifetime, 7) No Leakage Current - Ideal for high-impedance circuits. The main limitations are lower capacitance density (larger size for same capacitance) and higher cost per microfarad compared to electrolytics.",
      decisionGuide: "Choose film capacitors for DC-link, high-frequency, and long-life applications where electrolytics would wear out.",
      keywords: ["film capacitor advantages", "film vs electrolytic capacitor"]
    },
    {
      question: "What is the self-healing property of metallized film capacitors?",
      "answer": "The self-healing property is a key advantage of metallized film capacitors: When a dielectric defect or weakness occurs, the high electric field at that point causes localized heating. This vaporizes the thin metallized electrode (typically 10-50nm thick) around the defect, effectively isolating the fault. The process occurs in microseconds and clears a small area (typically 0.1-1mm diameter) around the defect. After healing, the capacitor continues operating normally with slightly reduced capacitance (typically <0.01% per healing event). This self-clearing mechanism prevents catastrophic failures that would occur in foil capacitors or electrolytics. The number of possible healing events is very large - a capacitor can withstand thousands of healing events over its lifetime. This property makes metallized film capacitors extremely reliable for critical applications where failure is not acceptable.",
      decisionGuide: "Metallized film capacitors are ideal for high-reliability applications due to their self-healing properties.",
      keywords: ["film capacitor self-healing", "metallized film reliability"]
    },
    {
      question: "What types of film capacitors does Samwha offer?",
      "answer": "Samwha offers several types of metallized film capacitors: MPP (Metallized Polypropylene) - Highest performance for DC-link, power factor correction, and high-frequency applications. Polypropylene has low losses, high insulation resistance, and excellent frequency characteristics. Available from 0.01µF to 100µF, 250V to 2000V. MPET (Metallized Polyester) - Cost-effective solution for general-purpose filtering, coupling, and bypass applications. Polyester offers good volumetric efficiency and temperature stability. Available from 0.001µF to 47µF, 63V to 1000V. MPS (Metallized Polypropylene Snubber) - Specialized for IGBT snubber and high dv/dt applications. Features low inductance and high pulse current capability. Available from 0.01µF to 10µF, 630V to 2000V. All types are available in various package styles including box type, dipped, and axial lead configurations.",
      decisionGuide: "Select MPP for high-performance power applications, MPET for general filtering, MPS for snubber circuits.",
      keywords: ["Samwha film capacitor types", "polypropylene vs polyester capacitor"]
    },
    {
      question: "What is the typical lifetime of film capacitors?",
      "answer": "Film capacitors have exceptionally long lifetimes compared to electrolytic capacitors: Expected Lifetime - 100,000 to 200,000 hours (11-23 years) of continuous operation at rated voltage and temperature. Many film capacitors last 20+ years in typical applications. Aging Mechanism - Unlike electrolytics, film capacitors do not have a wear-out mechanism. Capacitance decreases gradually (typically 1-3% over 100,000 hours) but the capacitor remains functional. End of Life - Defined as capacitance decrease of 5% or more, or increase in dissipation factor. Even at end of life, the capacitor typically continues operating rather than failing catastrophically. Acceleration Factor - Temperature accelerates aging with Arrhenius relationship. Operating at 20°C below rated temperature approximately doubles lifetime. Voltage stress also affects lifetime - operating at 80% of rated voltage significantly extends life. Film capacitors are often the longest-lived components in power electronics systems.",
      decisionGuide: "Film capacitors are ideal for applications requiring 15+ year service life without maintenance.",
      keywords: ["film capacitor lifetime", "film capacitor aging"]
    },
    {
      question: "What applications are best suited for film capacitors?",
      "answer": "Film capacitors excel in applications where their unique properties provide advantages: DC-Link Filtering - Inverters, motor drives, and solar inverters where high ripple current and long life are required. Film capacitors handle high-frequency ripple better than electrolytics. Power Factor Correction - PFC circuits in power supplies where low losses and high reliability are important. Motor Run Capacitors - Single-phase motor starting and running where self-healing properties improve reliability. Snubber Circuits - IGBT and MOSFET protection where low inductance and high pulse current are needed. Resonant Circuits - LLC and series resonant converters where stable capacitance is critical. EMI Filtering - X and Y capacitors for noise suppression where safety ratings are required. High-Frequency Applications - Switching above 100kHz where low ESL is beneficial. Film capacitors are not suitable for applications requiring very large capacitance values (>1000µF) or very compact size.",
      decisionGuide: "Use film capacitors for DC-link, PFC, motor run, and high-frequency resonant applications.",
      keywords: ["film capacitor applications", "DC-link capacitor selection"]
    }
  ],
  products: [
    {
      partNumber: "MPP 10uF 630V",
      name: "MPP Series 10µF 630V DC-Link Capacitor",
      shortDescription: "Metallized polypropylene DC-link capacitor, 10µF 630V, low ESR/ESL. Ideal for inverter DC-link and power factor correction.",
      descriptionParagraphs: [
        "The Samwha MPP series metallized polypropylene capacitors are designed for demanding DC-link and power electronics applications. With 10µF capacitance and 630V DC rating, this capacitor is ideal for 400V DC bus inverters, motor drives, and power factor correction circuits.",
        "The polypropylene dielectric provides low losses (dissipation factor <0.001), high insulation resistance, and excellent frequency characteristics up to several hundred kHz. The metallized construction offers self-healing properties for enhanced reliability.",
        "The box-type package with overpressure safety device provides robust mechanical protection and safe failure mode. Low ESL design makes this capacitor suitable for high-frequency IGBT inverter applications."
      ],
      specifications: {
        "Capacitance": "10µF ±5%",
        "Voltage Rating": "630V DC",
        "AC Voltage": "250V AC",
        "Temperature Range": "-40°C to +105°C",
        "Dissipation Factor": "<0.001 at 1kHz",
        "ESR": "<10mΩ at 100kHz",
        "ESL": "<20nH",
        "Ripple Current": "8A RMS at 100kHz, 105°C",
        "Size": "32mm x 18mm x 35mm (L x W x H)"
      },
      features: [
        "Metallized polypropylene for low losses",
        "Self-healing properties for reliability",
        "High ripple current 8A capability",
        "Low ESL for high-frequency applications",
        "Overpressure safety device",
        "20+ year expected lifetime"
      ],
      applications: [
        "Inverter DC-link filtering",
        "Motor drive power supplies",
        "Power factor correction",
        "Solar inverter DC bus",
        "UPS power systems"
      ],
      faeReview: {
        author: "Robert Zhang",
        title: "Senior FAE - Motor Drives",
        content: "The MPP series is my standard recommendation for inverter DC-link applications. The 10µF 630V capacitor is perfect for 400V class motor drives and solar inverters. The key advantage is the combination of high ripple current capability (8A) and low ESL - this capacitor can handle the high-frequency ripple from modern IGBTs and SiC MOSFETs much better than electrolytic alternatives. I've measured the ESL at around 15nH, which is excellent for a capacitor of this size. The self-healing property is a major reliability advantage - I've never seen a catastrophic failure with these capacitors, just gradual capacitance decrease over many years. For thermal design, the box case allows good heat dissipation, but I still recommend keeping ambient below 70°C for 20-year life. The overpressure safety device provides peace of mind for safety-critical applications. If you're designing motor drives or solar inverters, the MPP series offers the best combination of performance and reliability.",
        highlight: "Excellent DC-link capacitor for motor drives and solar inverters"
      },
      alternativeParts: [
        {
          partNumber: "MPP 6.8uF 630V",
          link: "/samwha/products/film-capacitors/mpp-6.8uf-630v.html",
          reason: "Lower capacitance for smaller inverters",
          brand: "Samwha"
        },
        {
          partNumber: "MPP 15uF 630V",
          link: "/samwha/products/film-capacitors/mpp-15uf-630v.html",
          reason: "Higher capacitance for improved DC-link stability",
          brand: "Samwha"
        }
      ],
      companionParts: [
        {
          partNumber: "MPP 4.7uF 630V",
          link: "/samwha/products/film-capacitors/mpp-4.7uf-630v.html",
          description: "Smaller value for snubber circuits",
          category: "Film Capacitors"
        },
        {
          partNumber: "IGBT Module",
          link: "#",
          description: "IGBT module for inverter power stage",
          category: "Power Semiconductors"
        },
        {
          partNumber: "DC-Link Resistor",
          link: "#",
          description: "Discharge resistor for DC-link safety",
          category: "Passive Components"
        }
      ],
      faqs: [
        {
          question: "What is the ripple current capability of the MPP 10µF 630V capacitor?",
          "answer": "The MPP 10µF 630V capacitor is rated for 8A RMS ripple current at 100kHz and 105°C. This high ripple current capability is achieved through the low ESR (<10mΩ) and excellent thermal design of the box case. The ripple current rating varies with frequency: At 100kHz: 8A RMS (rated), At 10kHz: 6A RMS, At 1kHz: 3A RMS. Higher frequencies allow higher ripple current due to skin effect in the metallized electrodes. Temperature derating: At 85°C: 10A RMS (125% of rated), At 65°C: 12.5A RMS (156% of rated). The high ripple current capability makes this capacitor ideal for inverter DC-link applications where high-frequency ripple from IGBT switching must be filtered. For high-power inverters, multiple capacitors can be paralleled to increase total ripple current capability.",
          decisionGuide: "The MPP series can handle 8A ripple current continuously. Parallel multiple units for high-power inverter applications.",
          keywords: ["MPP ripple current", "film capacitor rating"]
        },
        {
          question: "How does the MPP series compare to electrolytic capacitors for DC-link applications?",
          "answer": "The MPP film capacitor offers significant advantages over electrolytic capacitors for DC-link applications: Lifetime - MPP: 200,000+ hours vs Electrolytic: 10,000-15,000 hours at similar temperatures. Film capacitors last 10-20x longer. Ripple Current - MPP: 8A for 10µF vs Electrolytic: 1-2A for equivalent size. Film capacitors handle 4-8x more ripple current. ESR - MPP: <10mΩ vs Electrolytic: 50-200mΩ. Lower ESR reduces power dissipation and heating. ESL - MPP: <20nH vs Electrolytic: 50-100nH. Lower ESL improves high-frequency filtering. Temperature Range - MPP: -40°C to +105°C stable vs Electrolytic: ESR increases dramatically at low temperatures. Size - MPP is larger for same capacitance but handles much higher ripple current. Cost - MPP has higher initial cost but lower total cost of ownership due to longer lifetime. For inverters operating 10+ years, film capacitors are the preferred choice despite higher initial cost.",
          decisionGuide: "Use MPP film capacitors for inverter DC-links requiring 10+ year lifetime. Higher initial cost is offset by reliability.",
          keywords: ["film vs electrolytic DC-link", "inverter capacitor selection"]
        },
        {
          question: "What is the expected lifetime of the MPP 10µF 630V in typical inverter applications?",
          "answer": "The MPP 10µF 630V capacitor has an expected lifetime of 200,000+ hours at rated voltage and 85°C. In typical inverter applications: Solar Inverters - Operating at 60-70°C case temperature with 80% voltage derating: Expected lifetime >30 years. Motor Drives - Operating at 50-60°C case temperature: Expected lifetime >40 years. UPS Systems - Operating at 40-50°C case temperature: Expected lifetime >50 years. The lifetime is limited by gradual capacitance decrease rather than catastrophic failure. Capacitance typically decreases 1-2% over 100,000 hours. End of life is defined as 5% capacitance decrease, which takes 200,000-300,000 hours in typical conditions. Unlike electrolytic capacitors, film capacitors do not have a wear-out mechanism - they gradually degrade rather than failing suddenly. This predictable aging allows maintenance planning and avoids unexpected failures.",
          decisionGuide: "MPP capacitors last 20-30+ years in typical inverter applications. Plan for gradual capacitance decrease, not sudden failure.",
          keywords: ["MPP capacitor lifetime", "film capacitor reliability"]
        },
        {
          question: "Can MPP capacitors be used in parallel for higher capacitance?",
          "answer": "Yes, MPP capacitors can be connected in parallel to increase total capacitance and ripple current capability: Capacitance adds directly - Two 10µF capacitors in parallel provide 20µF total. Ripple current adds directly - Two capacitors provide 16A total ripple current capability. ESL reduces - Parallel connection reduces effective ESL by approximately 30-40%. Best practices for paralleling: Use identical part numbers for balanced current sharing, Keep connection leads as short and equal as possible, Use bus bars for high-current connections, Space capacitors to allow heat dissipation. For high-power inverters (50kW+), it's common to use 4-8 MPP capacitors in parallel to achieve required capacitance and ripple current. The self-healing property of each capacitor is maintained in parallel configuration. Voltage balancing resistors are not required for DC-link applications as the capacitors share voltage naturally.",
          decisionGuide: "Parallel multiple MPP capacitors for high-power inverters. Use identical parts and short, equal connections.",
          keywords: ["film capacitor parallel", "DC-link capacitor bank"]
        },
        {
          question: "What safety features does the MPP series include?",
          "answer": "The MPP series includes several safety features for reliable operation: Overpressure Safety Device - Each capacitor has a pressure-sensitive disconnect that opens the circuit if internal pressure builds up due to fault conditions. This prevents case rupture and ensures safe failure mode. Self-Healing - The metallized construction provides self-clearing of minor dielectric faults, preventing catastrophic failures. Flame Retardant Case - The box case is made of flame-retardant plastic meeting UL94 V-0 requirements. Internal Fuse - Some models include internal fuse elements that disconnect the capacitor in case of severe overcurrent. Safety Certifications - MPP capacitors are certified to IEC 61071, UL 810, and EN 60252-1 standards. These safety features make MPP capacitors suitable for critical applications where failure could cause equipment damage or safety hazards. The predictable aging characteristics also allow preventive maintenance before failure occurs.",
          decisionGuide: "MPP capacitors include multiple safety features. Suitable for critical applications requiring safe failure modes.",
          keywords: ["film capacitor safety", "MPP protection features"]
        },
        {
          question: "What mounting considerations apply to MPP box-type capacitors?",
          "answer": "MPP box-type capacitors require proper mounting for reliable operation: Mounting Orientation - Can be mounted in any orientation (horizontal, vertical, or upside down) as there is no liquid electrolyte. Mechanical Mounting - Use M5 or M6 bolts through the mounting holes in the case base. Torque to 2-3 Nm maximum to avoid case damage. Spacing - Maintain minimum 10mm clearance from adjacent components for heat dissipation. For high-ripple applications, increase spacing to 20mm. Connection - Use ring terminals on the M8 threaded studs. Torque to 3-4 Nm. Use appropriate wire gauge for rated ripple current. Thermal Management - Ensure adequate airflow around the capacitor. The case temperature should not exceed 85°C for maximum lifetime. Forced air cooling may be required in high-temperature environments. The box case provides good mechanical protection but should not be subjected to excessive mechanical stress or vibration.",
          decisionGuide: "Mount MPP capacitors with proper bolt torque and spacing. Ensure adequate cooling for high-ripple applications.",
          keywords: ["film capacitor mounting", "MPP installation"]
        }
      ]
    },
    {
      partNumber: "MPET 4.7uF 400V",
      name: "MPET Series 4.7µF 400V General Purpose Capacitor",
      shortDescription: "Metallized polyester film capacitor, 4.7µF 400V, compact size. Suitable for filtering, coupling, and bypass applications.",
      descriptionParagraphs: [
        "The Samwha MPET series metallized polyester capacitors provide cost-effective solutions for general-purpose filtering, coupling, and bypass applications. With 4.7µF capacitance and 400V rating, this capacitor is suitable for switch-mode power supplies, lighting ballasts, and motor control circuits.",
        "The polyester dielectric offers good volumetric efficiency and stable characteristics across the operating temperature range. The metallized construction provides self-healing properties for enhanced reliability compared to foil capacitors.",
        "The compact dipped package is suitable for high-density PCB layouts and automated assembly processes. The radial lead configuration allows easy through-hole mounting."
      ],
      specifications: {
        "Capacitance": "4.7µF ±10%",
        "Voltage Rating": "400V DC",
        "AC Voltage": "200V AC",
        "Temperature Range": "-40°C to +105°C",
        "Dissipation Factor": "<0.008 at 1kHz",
        "Insulation Resistance": ">30,000MΩ at 20°C",
        "Ripple Current": "2A RMS at 100kHz, 105°C",
        "Size": "18mm diameter x 35mm height"
      },
      features: [
        "Metallized polyester for cost-effective performance",
        "Self-healing properties",
        "Compact dipped package",
        "High volumetric efficiency",
        "Radial leads for easy mounting",
        "15+ year expected lifetime"
      ],
      applications: [
        "SMPS input/output filtering",
        "Lighting ballasts",
        "Motor run capacitors",
        "Coupling and bypass circuits",
        "EMI suppression"
      ],
      faeReview: {
        author: "Lisa Wang",
        title: "FAE - Consumer Electronics",
        content: "The MPET series is my go-to for cost-sensitive filtering applications. The 4.7µF 400V is perfect for PFC output filtering in LED drivers and small power supplies. While polyester has slightly higher losses than polypropylene, it's perfectly adequate for applications below 50kHz and much more cost-effective. I've used these extensively in LED lighting projects where they provide reliable filtering at a competitive price point. The self-healing property is valuable - these capacitors just keep working year after year without issues. The compact size (18mm x 35mm) fits well in space-constrained designs. For thermal design, these capacitors are quite forgiving - they work reliably even at 80-90°C ambient. If you're designing consumer electronics, lighting, or general-purpose power supplies where cost matters, the MPET series offers excellent value. I recommend them over electrolytics for any AC filtering or coupling application.",
        highlight: "Cost-effective film capacitor for general-purpose filtering applications"
      },
      alternativeParts: [
        {
          partNumber: "MPET 3.3uF 400V",
          link: "/samwha/products/film-capacitors/mpet-3.3uf-400v.html",
          reason: "Lower capacitance for cost-sensitive designs",
          brand: "Samwha"
        },
        {
          partNumber: "MPET 6.8uF 400V",
          link: "/samwha/products/film-capacitors/mpet-6.8uf-400v.html",
          reason: "Higher capacitance for improved filtering",
          brand: "Samwha"
        }
      ],
      companionParts: [
        {
          partNumber: "MPET 2.2uF 400V",
          link: "/samwha/products/film-capacitors/mpet-2.2uf-400v.html",
          description: "Smaller value for high-frequency filtering",
          category: "Film Capacitors"
        },
        {
          partNumber: "PFC Controller IC",
          link: "#",
          description: "Power factor correction controller",
          category: "Power Management ICs"
        },
        {
          partNumber: "Bridge Rectifier",
          link: "#",
          description: "Input rectifier for power supply",
          category: "Discrete Semiconductors"
        }
      ],
      faqs: [
        {
          question: "What is the difference between MPET (polyester) and MPP (polypropylene) capacitors?",
          "answer": "MPET (polyester) and MPP (polypropylene) capacitors have different characteristics: Polyester (MPET) - Higher dielectric constant provides better volumetric efficiency (smaller size for same capacitance), Higher dissipation factor (0.5-1% vs 0.01-0.1% for polypropylene), Lower cost, Good for general-purpose filtering below 50kHz, Temperature coefficient +200 to +600 ppm/°C. Polypropylene (MPP) - Lower dielectric losses (dissipation factor <0.1%), Better frequency response (usable to several hundred kHz), Higher insulation resistance, More stable capacitance over temperature, Temperature coefficient -200 ppm/°C (negative). Selection guide: Use MPET for cost-sensitive applications below 50kHz where size matters, Use MPP for high-frequency, high-current, or precision applications. For LED drivers and consumer power supplies, MPET offers the best value. For motor drives and inverters, MPP is preferred for low losses.",
          decisionGuide: "Use MPET for cost-sensitive low-frequency filtering. Use MPP for high-frequency or high-current applications.",
          keywords: ["polyester vs polypropylene capacitor", "MPET vs MPP selection"]
        },
        {
          question: "What is the typical application for MPET 4.7µF 400V capacitor?",
          "answer": "The MPET 4.7µF 400V capacitor is commonly used in: PFC Output Filtering - Power factor correction circuits in LED drivers and power supplies. The 400V rating is suitable for 380-400V DC PFC output. SMPS Filtering - Input and output filtering in switch-mode power supplies up to 200W. The 4.7µF provides good ripple attenuation. Motor Run Capacitors - Small single-phase motor starting and running applications. The self-healing property improves reliability. Lighting Ballasts - Fluorescent and HID ballast applications where non-polar capacitors are required. Coupling Circuits - AC coupling in industrial control circuits. The 400V rating allows use in 230V AC applications with safety margin. EMI Suppression - X-capacitor applications for noise filtering. The compact size (18mm x 35mm) makes it suitable for space-constrained designs. The cost-effective polyester construction provides good performance for these general-purpose applications.",
          decisionGuide: "MPET 4.7µF 400V is ideal for PFC filtering, SMPS, and lighting applications up to 200W.",
          keywords: ["MPET applications", "4.7uF capacitor uses"]
        }
      ]
    }
  ]
};

productsData.categories.push(filmCategory);

// 分类4: Automotive Capacitors
const automotiveCategory = {
  id: "automotive-capacitors",
  name: "Automotive Capacitors",
  slug: "automotive-capacitors",
  description: "AEC-Q200 qualified capacitors specifically designed for automotive electronics. High reliability for under-hood and safety-critical applications.",
  longDescription: "Samwha's automotive capacitors are specifically designed and qualified for the demanding requirements of automotive electronics. All automotive series are AEC-Q200 qualified and manufactured in IATF 16949 certified facilities. The portfolio includes high-temperature aluminum electrolytic capacitors rated to 150°C for under-hood applications, long-life series for 15+ year vehicle lifetime, and low-ESR types for decoupling applications. These capacitors are used in engine control units (ECUs), LED headlamp drivers, electric power steering systems, battery management systems, and onboard chargers for electric vehicles. Full PPAP documentation is available for automotive production. The capacitors undergo 100% screening including electrical testing, visual inspection, and dimensional verification. As an authorized Samwha distributor, we provide automotive-grade capacitors with full traceability and qualification documentation.",
  parameters: ["Capacitance", "Voltage Rating", "Temperature Range", "Lifetime", "ESR", "Qualification", "Size"],
  applications: ["Engine Control Units", "LED Headlamps", "Electric Power Steering", "Battery Management", "Onboard Chargers", "ADAS Systems"],
  selectionGuide: {
    title: "How to Select Automotive Capacitors",
    description: "Guide to selecting AEC-Q200 qualified capacitors for automotive applications",
    articleId: "automotive-capacitor-selection-guide",
    articleLink: "/samwha/support/automotive-capacitor-selection-guide.html"
  },
  selectionGuideLink: {
    url: "/samwha/support/automotive-capacitor-selection-guide.html",
    text: "Automotive Capacitor Selection Guide"
  },
  series: [
    {
      name: "WA Series",
      description: "AEC-Q200 qualified aluminum electrolytic capacitors for automotive applications"
    },
    {
      name: "WH-A Series",
      description: "High-temperature automotive capacitors rated to 150°C"
    }
  ],
  faqs: [
    {
      question: "What is AEC-Q200 qualification and why is it important for automotive capacitors?",
      "answer": "AEC-Q200 is the Automotive Electronics Council qualification standard for passive components. It defines rigorous testing requirements to ensure components can withstand harsh automotive environments: Temperature Cycling - 1000 cycles from -40°C to +125°C (or higher) to verify resistance to thermal stress, Mechanical Shock - 100G half-sine pulse per MIL-STD-202 Method 213 to survive vehicle impacts, Vibration - Random vibration 5-2000Hz per MIL-STD-202 Method 214 for vehicle vibration, High Temperature Storage - 1000 hours at maximum rated temperature to verify stability, Humidity Bias - 1000 hours at 85°C/85% RH with rated voltage applied, Board Flex - 2mm bend test to verify resistance to PCB flexure. AEC-Q200 qualification ensures capacitors will not fail prematurely in automotive applications where reliability and safety are critical. All Samwha automotive capacitors are AEC-Q200 qualified with full test reports available.",
      decisionGuide: "Always specify AEC-Q200 qualified capacitors for automotive electronics to ensure reliability and safety.",
      keywords: ["AEC-Q200 qualification", "automotive capacitor standards"]
    },
    {
      question: "What temperature ratings are available for Samwha automotive capacitors?",
      "answer": "Samwha offers automotive capacitors with several temperature ratings: 125°C Rated - Standard automotive grade for under-hood and interior applications. Suitable for most ECUs, LED drivers, and power supplies. 150°C Rated - High-temperature grade for extreme under-hood locations near engines or exhaust systems. Required for some powertrain applications. Temperature ranges: Standard: -40°C to +125°C, High-Temp: -55°C to +150°C. The 150°C rating uses enhanced electrolyte formulation and high-temperature materials to withstand extreme conditions. For automotive applications, always select capacitors with temperature rating at least 20°C above the maximum expected ambient temperature. Consider self-heating from ripple current when determining actual operating temperature. Our FAE team can help calculate expected temperatures for your specific application.",
      decisionGuide: "Use 125°C rated capacitors for most automotive applications. Use 150°C rated for extreme under-hood locations.",
      keywords: ["automotive capacitor temperature", "AEC-Q200 temperature rating"]
    },
    {
      question: "What lifetime can be expected from automotive capacitors?",
      "answer": "Automotive capacitor lifetime depends on operating temperature and series: Standard Automotive (125°C rated) - 5,000 to 10,000 hours at 125°C. In typical automotive operation at 85-100°C: 40,000 to 80,000 hours (15-30 years). High-Temperature Automotive (150°C rated) - 3,000 to 5,000 hours at 150°C. In typical operation at 110-130°C: 20,000 to 40,000 hours (10-20 years). Long-Life Automotive - 10,000 to 15,000 hours at 125°C. In typical operation: 80,000 to 150,000 hours (30-50 years). The Arrhenius equation applies: lifetime approximately doubles for every 10°C decrease in temperature. For 15-year vehicle life requirement, design for capacitor case temperature below 100°C for 125°C rated parts, or below 120°C for 150°C rated parts. Samwha automotive capacitors are designed to last the vehicle lifetime when properly derated.",
      decisionGuide: "Design for case temperature 25-30°C below rated temperature to achieve 15+ year vehicle lifetime.",
      keywords: ["automotive capacitor lifetime", "AEC-Q200 reliability"]
    },
    {
      question: "Does Samwha provide PPAP documentation for automotive production?",
      "answer": "Yes, Samwha provides full PPAP (Production Part Approval Process) documentation for automotive customers: PPAP Level 3 - Standard submission level including all customer requirements and actual measurement data. Documentation Package Includes: Design records and specifications, Engineering change documents, Customer engineering approval, Design FMEA, Process flow diagram, Process FMEA, Control plan, Measurement system analysis (MSA), Dimensional results, Material and performance test records, Initial process studies, Qualified laboratory documentation, Appearance approval report, Sample production parts, Master sample, Checking aids, Customer-specific requirements. Lead time for PPAP is typically 4-6 weeks after sample approval. All automotive capacitors are manufactured with full traceability including lot numbers linked to raw materials, production parameters, and test data. Contact our automotive sales team to initiate PPAP for your project.",
      decisionGuide: "Request PPAP Level 3 for all automotive production parts. Allow 4-6 weeks for completion.",
      keywords: ["Samwha PPAP documentation", "automotive capacitor approval"]
    },
    {
      question: "What is the difference between standard and automotive-grade capacitors?",
      "answer": "Automotive-grade capacitors differ from standard industrial capacitors in several ways: Qualification Testing - Automotive capacitors undergo AEC-Q200 testing including temperature cycling, shock, vibration, and humidity bias. Standard capacitors do not. Manufacturing Process - Automotive capacitors are manufactured in IATF 16949 certified facilities with additional process controls and traceability. Screening - 100% electrical testing and visual inspection for automotive parts vs sampling for standard parts. Materials - Automotive capacitors use enhanced materials for wider temperature ranges and longer life. Documentation - Full PPAP support and qualification reports for automotive. Traceability - Complete lot traceability for automotive production. Cost - Automotive capacitors typically cost 20-40% more than standard due to additional testing and documentation. For non-automotive applications, standard grade is usually sufficient. For automotive, always use AEC-Q200 qualified parts to ensure reliability and safety.",
      decisionGuide: "Use automotive-grade capacitors for all automotive electronics. The additional cost ensures reliability and safety.",
      keywords: ["automotive vs standard capacitor", "AEC-Q200 vs industrial grade"]
    }
  ],
  products: [
    {
      partNumber: "WA series 220uF 50V",
      name: "WA Series 220µF 50V AEC-Q200 Capacitor",
      shortDescription: "AEC-Q200 qualified aluminum electrolytic capacitor, 220µF 50V, 125°C rated. Ideal for automotive ECUs and LED drivers.",
      descriptionParagraphs: [
        "The Samwha WA series represents AEC-Q200 qualified aluminum electrolytic capacitors designed specifically for automotive electronics. With 220µF capacitance and 50V rating, this capacitor is ideal for 12V automotive ECU power supplies, LED driver filtering, and sensor applications.",
        "The 125°C temperature rating and 8,000-hour lifetime ensure reliable operation throughout the vehicle's service life. The capacitor has passed all AEC-Q200 testing including temperature cycling, mechanical shock, vibration, and humidity bias.",
        "Manufactured in IATF 16949 certified facilities with full lot traceability. The radial lead package is compatible with standard through-hole assembly processes used in automotive electronics manufacturing."
      ],
      specifications: {
        "Capacitance": "220µF ±20%",
        "Voltage Rating": "50V DC",
        "Temperature Range": "-40°C to +125°C",
        "Lifetime": "8,000 hours at 125°C",
        "ESR": "0.30Ω max at 100kHz, 20°C",
        "Ripple Current": "1.2A RMS at 100kHz, 125°C",
        "Leakage Current": "0.01CV or 3µA, whichever is greater",
        "Qualification": "AEC-Q200 Rev E",
        "Size": "10mm diameter x 16mm height"
      },
      features: [
        "AEC-Q200 qualified for automotive",
        "125°C temperature rating",
        "8,000 hours lifetime at rated temperature",
        "IATF 16949 certified manufacturing",
        "Full lot traceability",
        "PPAP documentation available"
      ],
      applications: [
        "Automotive ECU power supplies",
        "LED driver output filtering",
        "Sensor power decoupling",
        "Body control modules",
        "Infotainment systems"
      ],
      faeReview: {
        author: "Thomas Park",
        title: "Senior FAE - Automotive Electronics",
        "content": "The WA series is my standard recommendation for 12V automotive applications. The 220µF 50V is perfect for ECU power supply filtering and LED drivers. What sets this apart from standard capacitors is the comprehensive AEC-Q200 qualification - these capacitors have passed 1000 temperature cycles from -40°C to +125°C, which is critical for under-hood applications. I've used these in numerous automotive projects including LED headlamp drivers where they perform reliably at 100°C+ ambient. The 8,000-hour lifetime at 125°C translates to 15+ years in typical automotive operation. For thermal design, I recommend keeping case temperature below 100°C to ensure vehicle lifetime reliability. The full PPAP documentation makes production approval straightforward. If you're designing automotive electronics, the WA series offers the right combination of qualification, performance, and cost. Always specify AEC-Q200 qualified parts for automotive - it's not worth the risk to use standard industrial grades.",
        highlight: "Reliable AEC-Q200 qualified capacitor for automotive ECUs and LED drivers"
      },
      alternativeParts: [
        {
          partNumber: "WA series 100uF 50V",
          link: "/samwha/products/automotive-capacitors/wa-series-100uf-50v.html",
          reason: "Lower capacitance for cost-sensitive applications",
          brand: "Samwha"
        },
        {
          partNumber: "WA series 470uF 50V",
          link: "/samwha/products/automotive-capacitors/wa-series-470uf-50v.html",
          reason: "Higher capacitance for improved filtering",
          brand: "Samwha"
        }
      ],
      companionParts: [
        {
          partNumber: "WA series 47uF 50V",
          link: "/samwha/products/automotive-capacitors/wa-series-47uf-50v.html",
          description: "Smaller value for decoupling applications",
          category: "Automotive Capacitors"
        },
        {
          partNumber: "Automotive MCU",
          link: "#",
          description: "Automotive-grade microcontroller for ECU",
          category: "Microcontrollers"
        },
        {
          partNumber: "LED Driver IC",
          link: "#",
          description: "Automotive LED driver controller",
          category: "Power Management ICs"
        }
      ],
      faqs: [
        {
          question: "What AEC-Q200 tests has the WA series passed?",
          "answer": "The WA series has passed all AEC-Q200 Rev E qualification tests: High Temperature Exposure - 1000 hours at 125°C with rated voltage, Temperature Cycling - 1000 cycles from -40°C to +125°C, Destructive Physical Analysis - Internal construction verification, Humidity Bias - 1000 hours at 85°C/85% RH with rated voltage, High Temperature Operating Life - 1000 hours at 125°C with rated voltage and ripple current, External Visual - Physical inspection per MIL-STD-883, Dimension - Verification of physical dimensions, Terminal Strength - Lead pull and bend tests, Resistance to Solvents - Marking permanence verification, Mechanical Shock - 100G half-sine pulse, Vibration - Variable frequency 5-2000Hz, Resistance to Soldering Heat - 260°C solder immersion, ESD Characterization - Electrostatic discharge testing, Solderability - Wetting balance test, Board Flex - 2mm PCB bend test. Full test reports are available for all qualification testing.",
          decisionGuide: "Request AEC-Q200 qualification reports for your quality documentation and customer requirements.",
          keywords: ["WA series AEC-Q200", "automotive capacitor testing"]
        },
        {
          question: "How does the WA series perform in LED driver applications?",
          "answer": "The WA series is excellent for automotive LED driver applications: Temperature Performance - The 125°C rating handles under-hood temperatures up to 100°C ambient with margin for self-heating. LED drivers near engines often see 90-110°C. Ripple Current - 1.2A rating handles typical LED driver output ripple currents of 0.5-0.8A with margin. The low ESR (0.30Ω) minimizes power dissipation. Lifetime - 8,000 hours at 125°C translates to 15-20 years in typical LED driver operation at 80-90°C case temperature. AEC-Q200 Qualification - Passes automotive reliability tests including temperature cycling critical for under-hood LED applications. Size - The compact 10mm x 16mm package fits in space-constrained LED driver modules. Cost - Competitive pricing compared to other AEC-Q200 qualified brands. The WA series has been successfully used in millions of automotive LED headlamps and taillights worldwide.",
          decisionGuide: "WA series is ideal for automotive LED drivers. The AEC-Q200 qualification and 125°C rating ensure reliable operation.",
          keywords: ["WA series LED driver", "automotive LED capacitor"]
        },
        {
          question: "What is the expected lifetime in typical automotive applications?",
          "answer": "WA series lifetime in typical automotive applications: Engine Control Units - Operating at 85-95°C case temperature: Expected lifetime 20-25 years. Well exceeds 15-year vehicle life requirement. LED Drivers - Operating at 80-100°C depending on location: Expected lifetime 15-20 years. Suitable for vehicle lifetime. Body Control Modules - Operating at 60-80°C: Expected lifetime 30-40 years. Very conservative design margin. Infotainment Systems - Operating at 50-70°C: Expected lifetime 40-50 years. Essentially unlimited life. The Arrhenius calculation: A capacitor rated 8,000 hours at 125°C will last approximately 64,000 hours at 95°C (7.3 years continuous, 20+ years typical automotive use). For 15-year vehicle life, design for maximum case temperature of 95°C for 125°C rated parts. Most automotive applications operate well below this limit, providing excellent reliability margin.",
          decisionGuide: "WA series provides 15-25 year lifetime in typical automotive applications. Design for case temperature below 95°C for maximum reliability.",
          keywords: ["WA series lifetime", "automotive capacitor reliability"]
        },
        {
          question: "What traceability does Samwha provide for automotive capacitors?",
          "answer": "Samwha provides comprehensive traceability for all automotive capacitors: Lot Number - Each capacitor has a unique lot number printed on the case. The lot number encodes: Production date (year, month, day), Production line and shift, Raw material batch numbers, Equipment used for production. Certificate of Conformance (COC) - Each shipment includes a COC with: Lot-specific test data (capacitance, ESR, leakage current), Production parameters, Quality inspection results, Compliance to AEC-Q200. Raw Material Traceability - Aluminum foil, electrolyte, and other materials are traced to: Supplier lot numbers, Incoming inspection data, Material certificates. Production Records - Complete manufacturing data including: Process parameters (temperature, time, voltage), In-process test results, Operator and equipment identification. Retention Period - All traceability records are retained for 15+ years per automotive requirements. This traceability supports quality management, failure analysis, and automotive customer audits.",
          decisionGuide: "Request COC with each shipment for quality records. Full traceability data available for automotive production requirements.",
          keywords: ["Samwha traceability", "automotive capacitor lot control"]
        },
        {
          question: "What voltage derating is recommended for automotive applications?",
          "answer": "Samwha recommends conservative voltage derating for automotive applications: Standard Automotive (Non-Critical) - 70% derating (operate at 70% of rated voltage). For 12V systems, use 25V or 35V rated capacitors. Safety-Critical Systems - 60% derating (operate at 60% of rated voltage). For 12V systems, use 35V rated capacitors. High-Temperature Applications - Additional 10% derating when operating above 100°C. Load Dump Protection - Automotive systems experience load dump transients up to 79V (per ISO 16750-2). Use 100V rated capacitors or implement transient protection. Example derating for 12V automotive ECU: Nominal voltage: 12V, Maximum operating: 16V, Load dump transient: 79V (protected), Recommended rating: 35V (56% derating at 16V). Higher derating significantly extends capacitor lifetime and improves reliability. For automotive applications, the small additional cost of higher voltage rated capacitors is justified by improved reliability.",
          decisionGuide: "Use 60-70% voltage derating for automotive applications. Use 35V or 50V rated capacitors for 12V systems.",
          keywords: ["automotive voltage derating", "AEC-Q200 voltage rating"]
        },
        {
          question: "Are flexible termination options available for automotive capacitors?",
          "answer": "Yes, Samwha offers flexible termination (soft termination) options for automotive capacitors: Flexible Termination Technology - A compliant polymer layer between the ceramic body and metal termination absorbs mechanical stress from PCB flexure and thermal cycling. Benefits - Prevents cracking from board flexure, thermal cycling, and vibration. Critical for large case sizes and high-stress automotive environments. Identification - Flexible termination capacitors have 'F' suffix in part number (e.g., WA-F series). Applications - Recommended for: Large case sizes (12.5mm diameter and above), Under-hood applications with high vibration, Locations near board edges or mounting holes, High-temperature applications with large thermal cycles. Availability - Flexible termination is available for most WA series capacitors 10mm diameter and above. Cost - Approximately 15-20% premium over standard termination. Lead Time - Add 2-3 weeks for flexible termination options. For high-reliability automotive applications, flexible termination provides additional insurance against mechanical stress failures.",
          decisionGuide: "Specify flexible termination for large case sizes and high-vibration automotive applications.",
          keywords: ["automotive flexible termination", "soft termination capacitor"]
        }
      ]
    },
    {
      partNumber: "WH-A series 100uF 100V",
      name: "WH-A Series 100µF 100V High-Temp Automotive Capacitor",
      shortDescription: "High-temperature AEC-Q200 capacitor, 100µF 100V, 150°C rated. For extreme under-hood automotive applications.",
      descriptionParagraphs: [
        "The Samwha WH-A series provides high-temperature AEC-Q200 qualified capacitors rated to 150°C for extreme automotive environments. With 100µF capacitance and 100V rating, this capacitor is suitable for 48V mild-hybrid systems, powertrain electronics, and locations near engines or exhaust systems.",
        "The 150°C temperature rating is achieved through advanced electrolyte formulation and high-temperature materials. The capacitor maintains stable electrical characteristics across the entire temperature range.",
        "Full AEC-Q200 qualification and IATF 16949 manufacturing ensure automotive-grade reliability. PPAP documentation is available for production approval."
      ],
      specifications: {
        "Capacitance": "100µF ±20%",
        "Voltage Rating": "100V DC",
        "Temperature Range": "-55°C to +150°C",
        "Lifetime": "5,000 hours at 150°C",
        "ESR": "0.25Ω max at 100kHz, 20°C",
        "Ripple Current": "1.5A RMS at 100kHz, 150°C",
        "Leakage Current": "0.01CV or 3µA, whichever is greater",
        "Qualification": "AEC-Q200 Rev E",
        "Size": "12.5mm diameter x 25mm height"
      },
      features: [
        "150°C temperature rating for extreme environments",
        "AEC-Q200 qualified for automotive",
        "5,000 hours lifetime at 150°C",
        "Suitable for 48V mild-hybrid systems",
        "IATF 16949 certified manufacturing",
        "Full PPAP documentation available"
      ],
      applications: [
        "48V mild-hybrid systems",
        "Powertrain control modules",
        "Engine compartment electronics",
        "Transmission control units",
        "Electric power steering"
      ],
      faeReview: {
        author: "Kevin Lee",
        title: "Senior FAE - Powertrain Electronics",
        content: "The WH-A series is essential for extreme under-hood applications where 125°C capacitors just won't survive. The 150°C rating handles the most demanding locations near engines and exhaust systems. I've used these in 48V mild-hybrid systems where the capacitors see 130-140°C during peak loads. The 5,000-hour rating at 150°C is conservative - at 120°C actual operating temperature, you're looking at 20,000+ hours. For 48V systems, the 100V rating provides good derating (58% at 48V nominal, 42% at 58V max). The AEC-Q200 qualification includes extended temperature cycling to 150°C which is critical for these extreme applications. For thermal design, you absolutely must minimize self-heating - use multiple capacitors in parallel if ripple current is high. If you're designing for under-hood locations or 48V hybrid systems, the WH-A series is the right choice. Don't compromise with lower temperature ratings in these extreme environments.",
        highlight: "Essential 150°C rated capacitor for extreme under-hood and 48V hybrid applications"
      },
      alternativeParts: [
        {
          partNumber: "WH-A series 68uF 100V",
          link: "/samwha/products/automotive-capacitors/wh-a-series-68uf-100v.html",
          reason: "Lower capacitance for very tight spaces",
          brand: "Samwha"
        },
        {
          partNumber: "WH-A series 150uF 100V",
          link: "/samwha/products/automotive-capacitors/wh-a-series-150uf-100v.html",
          reason: "Higher capacitance for improved filtering",
          brand: "Samwha"
        }
      ],
      companionParts: [
        {
          partNumber: "WH-A series 47uF 100V",
          link: "/samwha/products/automotive-capacitors/wh-a-series-47uf-100v.html",
          description: "Smaller value for decoupling",
          category: "Automotive Capacitors"
        },
        {
          partNumber: "48V DC-DC Converter",
          link: "#",
          description: "Buck converter for 48V to 12V conversion",
          category: "Power Management"
        },
        {
          partNumber: "Battery Management IC",
          link: "#",
          description: "48V battery monitoring and protection",
          category: "Battery Management"
        }
      ],
      faqs: [
        {
          question: "When should I use 150°C rated capacitors instead of 125°C?",
          "answer": "Use 150°C rated capacitors when: Location is in extreme under-hood areas near engine, exhaust manifold, or turbocharger where ambient temperatures exceed 125°C. 48V Mild-Hybrid Systems - The higher power levels and packaging density create elevated temperatures. Powertrain Applications - Engine control modules, transmission controllers in high-temperature locations. Continuous High Load - Applications with sustained high ripple current causing significant self-heating. Safety-Critical Systems - Where capacitor failure could cause safety hazards, extra temperature margin provides additional reliability. Cost-Benefit Analysis: 150°C capacitors cost 30-50% more than 125°C rated. However, if a 125°C capacitor fails in the field, the replacement cost (warranty, labor, reputation) far exceeds the component cost difference. For extreme environments, 150°C rating is insurance against field failures. If your thermal analysis shows case temperature exceeding 110°C, specify 150°C rated capacitors.",
          decisionGuide: "Use 150°C rated capacitors when case temperature exceeds 110°C or for extreme under-hood locations.",
          keywords: ["150C vs 125C capacitor", "high temperature automotive capacitor"]
        },
        {
          question: "What is the lifetime of WH-A series at typical operating temperatures?",
          "answer": "WH-A series lifetime at various operating temperatures: At 150°C (rated): 5,000 hours, At 140°C: 10,000 hours (2.3 years continuous), At 130°C: 20,000 hours (4.6 years continuous), At 120°C: 40,000 hours (9.1 years continuous), At 110°C: 80,000 hours (18 years continuous). In typical automotive use (intermittent operation, not 24/7): 120°C operation: 15-20 years vehicle life, 110°C operation: 25-30 years vehicle life. The Arrhenius relationship means every 10°C reduction doubles lifetime. For 48V mild-hybrid applications where capacitors see 120-130°C during peak loads but average 100-110°C, expected lifetime is 15-25 years. This exceeds typical 15-year vehicle life requirement. For powertrain applications with sustained high temperatures, thermal management (heat sinks, airflow) is critical to achieve target lifetime.",
          decisionGuide: "WH-A series provides 15-25 year lifetime in typical 48V hybrid applications. Ensure adequate thermal management.",
          keywords: ["WH-A series lifetime", "150C capacitor life calculation"]
        }
      ]
    }
  ]
};

productsData.categories.push(automotiveCategory);

// 保存文件
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
console.log('✅ Added Film Capacitors and Automotive Capacitors categories');
console.log(`✅ Total categories: ${productsData.categories.length}`);
