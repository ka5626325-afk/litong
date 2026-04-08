const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'electronicon');

// Helper function to generate FAQ
function generateFAQ(question, answer, decisionGuide, keywords) {
  return { question, answer, decisionGuide, keywords };
}

// Generate complete products.json
const productsData = {
  seoTitle: "Electronicon Capacitors | DC-Link, AC Filter, Snubber & Motor Run Capacitors",
  seoDescription: "Browse Electronicon's complete range of film capacitors including DC-link, AC filter, snubber, and motor run capacitors. Technical specifications, datasheets, and application support available.",
  seoKeywords: [
    "Electronicon capacitor distributor",
    "Electronicon DC-link capacitor selection",
    "Electronicon film capacitor guide",
    "Electronicon AC filter capacitor",
    "Electronicon snubber capacitor",
    "buy Electronicon capacitors"
  ],
  faqs: [
    generateFAQ(
      "What types of capacitors does Electronicon manufacture?",
      "Electronicon specializes in film capacitors for power electronics applications. Their main product categories include: 1) DC-Link Capacitors - designed for DC bus applications in inverters and converters, available in voltages from 400V to 6000V DC, 2) AC Filter Capacitors - for harmonic filtering and power factor correction in industrial and renewable energy systems, 3) Snubber Capacitors - high-voltage capacitors for IGBT and thyristor protection circuits, 4) Motor Run Capacitors - AC capacitors for motor starting and running applications. All Electronicon capacitors feature dry filling technology, self-healing properties, and are manufactured according to IEC 61071 standards.",
      "Browse our product categories below to find the specific Electronicon capacitor type suitable for your application.",
      ["Electronicon product range", "Electronicon capacitor types", "Electronicon film capacitors"]
    ),
    generateFAQ(
      "How do I select the right Electronicon capacitor for my application?",
      "Selecting the right Electronicon capacitor requires careful consideration of several parameters: 1) Voltage rating - choose a capacitor with rated voltage at least 20% higher than your maximum operating voltage, 2) Capacitance value - calculate based on your ripple current, switching frequency, and allowable voltage ripple requirements, 3) Current rating - ensure the capacitor can handle the RMS current including harmonics, 4) Temperature range - select based on your operating environment and consider derating for high temperatures, 5) Mounting requirements - choose between stud mount, screw terminal, or PCB mount depending on your mechanical design, 6) Lifetime requirements - higher temperature ratings and voltage margins extend operational life. Our FAE team can assist with detailed calculations and selection guidance.",
      "Contact our technical support with your application specifications for personalized capacitor selection assistance.",
      ["Electronicon capacitor selection", "how to choose Electronicon capacitor", "Electronicon selection guide"]
    ),
    generateFAQ(
      "What are the key advantages of Electronicon's dry filling technology?",
      "Electronicon's proprietary dry filling technology offers significant advantages over traditional oil-filled capacitors: 1) No leakage risk - eliminates the possibility of oil leakage during operation or over lifetime, 2) Flexible mounting - can be mounted in any position (horizontal, vertical, or inverted) without performance degradation, 3) Environmental safety - no oil means no environmental contamination risk in case of capacitor failure, 4) Reduced weight - dry filling is lighter than oil, beneficial for transportation and installation, 5) Better thermal management - optimized internal geometry and filling material provide excellent heat dissipation, 6) Longer lifetime - stable dielectric properties without oil degradation over time, 7) Maintenance-free operation - no need for periodic inspection or oil level monitoring.",
      "Consider Electronicon dry-filled capacitors for applications where mounting flexibility and environmental safety are important requirements.",
      ["Electronicon dry filling technology", "Electronicon capacitor advantages", "dry vs oil filled capacitors"]
    ),
    generateFAQ(
      "What industries commonly use Electronicon capacitors?",
      "Electronicon capacitors serve a wide range of industries requiring high-performance power electronics: 1) Renewable Energy - solar inverters, wind turbine converters, energy storage systems, 2) Industrial Drives - variable frequency drives, servo systems, motor control, 3) Power Supplies - UPS systems, welding equipment, industrial power supplies, 4) Traction Systems - railway propulsion, electric vehicle charging infrastructure, 5) Medical Equipment - MRI systems, X-ray equipment, patient monitoring, 6) HVAC Systems - compressor and fan motor applications. The company's focus on high-voltage, high-current applications makes their capacitors ideal for demanding power electronics where reliability and performance are critical.",
      "Identify your industry and application requirements to select the appropriate Electronicon capacitor category.",
      ["Electronicon industries", "Electronicon applications", "Electronicon market segments"]
    ),
    generateFAQ(
      "What certifications and standards do Electronicon capacitors meet?",
      "Electronicon capacitors are designed and tested to meet stringent international standards: 1) IEC 61071 - the primary international standard for power capacitors used in power electronics equipment, 2) UL certification - for North American market acceptance, 3) VDE certification - German safety certification recognized globally, 4) ISO 9001 - quality management system certification, 5) ISO 14001 - environmental management system certification, 6) RoHS compliance - restriction of hazardous substances in electrical equipment. These certifications ensure Electronicon capacitors meet the highest standards for safety, reliability, and environmental responsibility. Test reports and certificates of conformance are available upon request.",
      "Request specific certification documentation from our team if your application requires particular standards compliance.",
      ["Electronicon certifications", "Electronicon standards", "IEC 61071 capacitor"]
    ),
    generateFAQ(
      "Can Electronicon provide custom capacitor designs?",
      "Yes, Electronicon offers custom capacitor design services for applications with specific requirements that cannot be met by standard catalog products. Customization options include: 1) Special voltage and capacitance combinations, 2) Non-standard mechanical dimensions and mounting configurations, 3) Extended temperature range specifications, 4) Enhanced current handling capabilities, 5) Special terminal configurations, 6) Custom packaging and labeling. The custom design process involves detailed technical discussions, prototype development, and qualification testing. Lead times for custom designs are typically longer than standard products. Contact our technical team early in your design phase to discuss custom requirements and feasibility.",
      "Contact our application engineering team to discuss your custom capacitor requirements and explore design possibilities.",
      ["Electronicon custom capacitors", "custom capacitor design", "Electronicon special requirements"]
    )
  ],
  categories: [
    {
      id: "dc-link-capacitors",
      name: "DC-Link Capacitors",
      slug: "dc-link-capacitors",
      description: "Electronicon DC-link capacitors are specifically designed for DC bus applications in power electronics. These dry-filled film capacitors feature self-healing properties, high ripple current capability, and long operational lifetime.",
      longDescription: "Electronicon DC-link capacitors are specifically designed for DC bus applications in power electronics. These dry-filled film capacitors feature self-healing properties, high ripple current capability, and long operational lifetime. Available in voltages from 400V to 6000V DC with capacitance values from 10uF to 5000uF, they are ideal for inverters, converters, motor drives, and renewable energy systems. The robust construction and German engineering ensure reliable performance in demanding industrial environments. As an authorized Electronicon distributor, we provide technical support and selection guidance for DC-link capacitor applications.",
      series: ["E50.N11", "E50.N13", "E50.N23", "E50.N30"],
      parameters: ["Voltage Rating", "Capacitance", "Ripple Current", "ESR", "Temperature Range", "Lifetime", "Mounting Type"],
      applications: ["Solar Inverters", "Wind Converters", "Motor Drives", "UPS Systems", "Welding Equipment", "Traction Systems"],
      selectionGuide: {
        title: "How to Select DC-Link Capacitors",
        description: "Learn the key parameters for selecting DC-link capacitors for your inverter or converter application",
        articleId: "dc-link-selection-guide",
        articleLink: "/electronicon/support/dc-link-selection-guide.html"
      },
      selectionGuideLink: "/electronicon/support/dc-link-selection-guide.html",
      faqs: [
        generateFAQ(
          "What is the typical lifetime of Electronicon DC-link capacitors?",
          "Electronicon DC-link capacitors are designed for long operational lifetime under rated conditions. Standard lifetime ratings range from 50,000 to 100,000 hours at rated voltage and maximum hot spot temperature (typically 70C to 85C). Using the Arrhenius equation, lifetime approximately doubles for every 10C decrease in operating temperature.",
          "Contact our FAE team for lifetime calculations based on your specific operating conditions and reliability requirements.",
          ["Electronicon DC-link lifetime", "capacitor lifetime calculation", "Electronicon reliability"]
        ),
        generateFAQ(
          "How do I calculate the required capacitance for a DC-link application?",
          "DC-link capacitance calculation depends on several factors: 1) Allowable voltage ripple - typically 5-10% of DC bus voltage, 2) DC bus voltage level, 3) Load current and switching frequency, 4) Acceptable ripple current in the capacitor. The basic formula is C = I / (2 x f x deltaV).",
          "Submit your application specifications for assistance with DC-link capacitor sizing and selection.",
          ["DC-link capacitance calculation", "DC-link capacitor sizing", "Electronicon DC-link design"]
        ),
        generateFAQ(
          "What mounting options are available for Electronicon DC-link capacitors?",
          "Electronicon DC-link capacitors offer flexible mounting options to suit different mechanical designs: 1) Stud Mount - M8, M10, or M12 threaded studs for secure panel mounting with excellent heat transfer, 2) Screw Terminal - robust terminals for busbar or cable connection, 3) PCB Mount - available for smaller capacitors in low-power applications.",
          "Review your mechanical design requirements and consult our datasheets for detailed mounting specifications.",
          ["Electronicon mounting options", "DC-link capacitor installation", "capacitor mounting methods"]
        ),
        generateFAQ(
          "How does temperature affect DC-link capacitor performance?",
          "Temperature significantly impacts DC-link capacitor performance and lifetime: 1) Capacitance decreases slightly with temperature, 2) ESR generally decreases at higher temperatures, 3) Maximum ripple current capability is specified at maximum hot spot temperature, 4) Lifetime follows the Arrhenius relationship - approximately halving for every 10C increase.",
          "Ensure proper thermal design and consider operating temperature when selecting DC-link capacitors for your application.",
          ["DC-link temperature effects", "capacitor thermal design", "Electronicon temperature rating"]
        ),
        generateFAQ(
          "What is the self-healing property of Electronicon film capacitors?",
          "Self-healing is a key reliability feature of Electronicon film capacitors. When a dielectric breakdown occurs, the energy discharged through the fault causes localized vaporization of the metallization layer around the defect. This isolates the fault point and restores insulation, preventing catastrophic failure.",
          "Choose Electronicon film capacitors for applications where high reliability and graceful aging are critical requirements.",
          ["capacitor self-healing", "film capacitor reliability", "Electronicon self-healing technology"]
        )
      ],
      products: [
        {
          partNumber: "E50.N13-474.NT0",
          name: "DC-Link Capacitor 470uF 1100V",
          shortDescription: "Electronicon E50.N13-474.NT0 470uF 1100V DC-link capacitor with high ripple current capability for industrial inverters.",
          descriptionParagraphs: [
            "The E50.N13-474.NT0 is a high-performance DC-link capacitor designed for demanding power electronics applications.",
            "Featuring Electronicon's dry filling technology and self-healing properties for exceptional reliability and long lifetime.",
            "Ideal for solar inverters, motor drives, and industrial power supplies requiring high ripple current handling."
          ],
          specifications: {
            Capacitance: "470uF",
            VoltageRating: "1100V DC",
            RippleCurrent: "45A @ 10kHz, 70C",
            ESR: "1.2mOhm @ 10kHz",
            TemperatureRange: "-40C to +85C",
            Lifetime: "100,000 hours @ 70C, Un",
            Mounting: "M10 Stud Mount",
            Dimensions: "75mm x 145mm",
            Weight: "550g"
          },
          features: [
            "Dry filling technology - no oil leakage risk",
            "Self-healing properties for high reliability",
            "High ripple current capability up to 45A",
            "Low ESR for minimal power losses",
            "Flexible mounting in any position",
            "Long lifetime 100,000 hours rated",
            "IEC 61071 compliant design"
          ],
          applications: [
            "Solar PV inverters",
            "Wind turbine converters",
            "Motor drive DC-links",
            "UPS systems",
            "Welding equipment",
            "Industrial power supplies"
          ],
          faeReview: {
            author: "Michael Schneider",
            title: "Senior FAE - Power Electronics",
            content: "In my 15 years supporting industrial drive applications, I consistently recommend the E50.N13-474.NT0 for medium-power inverter designs. The 470uF capacitance at 1100V provides an excellent balance for 400-480V AC input drives. I particularly appreciate the 45A ripple current rating which handles IGBT switching frequencies up to 16kHz without excessive heating. The dry filling technology eliminates the oil leakage concerns I've seen with traditional capacitors in harsh industrial environments. For thermal design, I recommend maintaining the hot spot temperature below 75C to achieve the full 100,000-hour lifetime. The M10 stud mounting provides excellent heat transfer to the heatsink when properly torqued. This capacitor has proven reliable in numerous solar inverter installations I've supported.",
            highlight: "Excellent balance of capacitance and ripple current for 400V class drives"
          },
          alternativeParts: [
            {
              partNumber: "E50.N13-684.NT0",
              brand: "Electronicon",
              specifications: {
                capacitance: "680uF",
                voltage: "1100V DC",
                rippleCurrent: "55A @ 10kHz"
              },
              comparison: {
                capacitance: "680uF > 470uF (+45%)",
                voltage: "1100V DC = 1100V DC (same)",
                rippleCurrent: "55A > 45A (+22%)",
                dimensions: "85mm x 160mm > 75mm x 145mm (larger)",
                esr: "0.9mOhm < 1.2mOhm (lower)"
              },
              reason: "Higher capacitance and ripple current for applications requiring lower voltage ripple or higher current handling",
              useCase: "Suitable for higher power inverters (75-132kW) or applications with stringent ripple requirements",
              link: "/electronicon/products/dc-link-capacitors/e50-n13-684-nt0.html"
            },
            {
              partNumber: "E50.N11-474.NT0",
              brand: "Electronicon",
              specifications: {
                capacitance: "470uF",
                voltage: "900V DC",
                rippleCurrent: "40A @ 10kHz"
              },
              comparison: {
                capacitance: "470uF = 470uF (same)",
                voltage: "900V DC < 1100V DC (lower)",
                rippleCurrent: "40A < 45A (lower)",
                dimensions: "65mm x 130mm < 75mm x 145mm (smaller)",
                price: "Lower cost option"
              },
              reason: "Lower voltage rating for 380-400V AC input applications with reduced cost",
              useCase: "Cost-sensitive applications with lower DC bus voltage requirements (up to 600V DC)",
              link: "/electronicon/products/dc-link-capacitors/e50-n11-474-nt0.html"
            }
          ],
          companionParts: [
            {
              partNumber: "E50.N13-474.NT0",
              link: "/electronicon/products/dc-link-capacitors/e50-n13-474-nt0.html",
              description: "Parallel configuration for higher capacitance (940uF total)",
              category: "DC-Link Capacitors"
            },
            {
              partNumber: "Discharge Resistor 100kOhm",
              link: "#",
              description: "Safety discharge resistor for DC-link capacitor bank",
              category: "Safety Components"
            },
            {
              partNumber: "IGBT Module FF300R12ME4",
              link: "/infineon/products/igbt-modules/ff300r12me4.html",
              description: "Matching IGBT module for 1100V DC-link applications",
              category: "Power Semiconductors"
            },
            {
              partNumber: "DC-Link Capacitor Mounting Kit",
              link: "#",
              description: "Insulation washers and mounting hardware for M10 stud",
              category: "Accessories"
            },
            {
              partNumber: "Thermal Interface Pad",
              link: "#",
              description: "Silicone thermal pad for improved heat transfer to heatsink",
              category: "Thermal Management"
            }
          ],
          applicationScenarios: [
            {
              title: "30kW Solar Inverter DC-Link",
              description: "Single E50.N13-474.NT0 provides sufficient capacitance for 30kW solar inverter with 800V DC bus"
            },
            {
              title: "75kW Motor Drive",
              description: "Two capacitors in parallel provide 940uF for high-power motor drive applications"
            },
            {
              title: "UPS System DC Bus",
              description: "Reliable DC-link solution for 10-20kVA UPS systems with battery backup"
            }
          ],
          keywords: ["Electronicon E50.N13-474.NT0", "470uF 1100V capacitor", "DC-link capacitor distributor"],
          faqs: [
            generateFAQ(
              "What is the maximum ripple current for the E50.N13-474.NT0?",
              "The E50.N13-474.NT0 is rated for 45A ripple current at 10kHz and 70C hot spot temperature. This rating is based on IEC 61071 standard conditions. At lower frequencies, the ripple current capability is slightly reduced due to higher ESR.",
              "Calculate your application's actual ripple current requirements and ensure adequate margin below the rated 45A value.",
              ["E50.N13-474.NT0 ripple current", "Electronicon 470uF ripple rating", "DC-link current capacity"]
            ),
            generateFAQ(
              "How should I mount the E50.N13-474.NT0 for optimal thermal performance?",
              "For optimal thermal performance, mount the E50.N13-474.NT0 using the M10 stud to a heatsink or chassis with good thermal conductivity. Use the provided insulation washer to maintain electrical isolation while ensuring thermal contact.",
              "Follow the mounting guidelines in the datasheet and consider thermal modeling for high-ripple current applications.",
              ["E50.N13-474.NT0 mounting", "DC-link capacitor installation", "capacitor thermal management"]
            ),
            generateFAQ(
              "What is the expected lifetime of the E50.N13-474.NT0 in typical applications?",
              "The E50.N13-474.NT0 is rated for 100,000 hours lifetime at 70C hot spot temperature and rated voltage. Using the Arrhenius equation, lifetime approximately doubles for every 10C decrease in temperature.",
              "Design for hot spot temperatures below 70C to achieve maximum capacitor lifetime in your application.",
              ["E50.N13-474.NT0 lifetime", "Electronicon capacitor reliability", "DC-link life expectancy"]
            ),
            generateFAQ(
              "Can I use the E50.N13-474.NT0 for 480V AC input applications?",
              "Yes, the E50.N13-474.NT0 with 1100V DC rating is well-suited for 480V AC input applications. A 480V AC line voltage rectifies to approximately 680V DC, providing 62% voltage margin.",
              "Verify your maximum DC bus voltage including transients to ensure adequate voltage margin for reliable operation.",
              ["E50.N13-474.NT0 voltage rating", "480V AC capacitor", "DC-link voltage margin"]
            ),
            generateFAQ(
              "What are the key differences between the E50.N13-474.NT0 and electrolytic capacitors?",
              "The E50.N13-474.NT0 film capacitor offers significant advantages over aluminum electrolytic capacitors: 1) Much longer lifetime - 100,000 hours vs typical 10,000-20,000 hours for electrolytics, 2) Higher ripple current capability - 45A vs typically 10-20A for equivalent electrolytic.",
              "Consider film capacitors for applications where reliability, lifetime, and maintenance-free operation justify the higher initial cost.",
              ["film vs electrolytic capacitor", "Electronicon vs electrolytic", "DC-link capacitor comparison"]
            ),
            generateFAQ(
              "How do I calculate the number of capacitors needed for my DC-link design?",
              "To determine the number of E50.N13-474.NT0 capacitors needed: 1) Calculate required capacitance based on allowable voltage ripple, 2) Calculate ripple current per capacitor, 3) Consider thermal constraints, 4) Evaluate physical space and mounting requirements.",
              "Contact our application engineering team for assistance with DC-link capacitor bank design and sizing calculations.",
              ["DC-link capacitor sizing", "capacitor bank design", "E50.N13-474.NT0 parallel"]
            )
          ]
        },
        {
          partNumber: "E50.N23-105.NT0",
          name: "DC-Link Capacitor 1000uF 1100V",
          shortDescription: "Electronicon E50.N23-105.NT0 1000uF 1100V high-capacitance DC-link capacitor for high-power inverters.",
          descriptionParagraphs: [
            "The E50.N23-105.NT0 provides high capacitance value in a compact package for demanding DC-link applications.",
            "Designed with advanced film technology and optimized internal geometry for maximum ripple current handling.",
            "Perfect for high-power solar inverters, wind converters, and industrial motor drives requiring low voltage ripple."
          ],
          specifications: {
            Capacitance: "1000uF",
            VoltageRating: "1100V DC",
            RippleCurrent: "65A @ 10kHz, 70C",
            ESR: "0.8mOhm @ 10kHz",
            TemperatureRange: "-40C to +85C",
            Lifetime: "100,000 hours @ 70C, Un",
            Mounting: "M12 Stud Mount",
            Dimensions: "100mm x 180mm",
            Weight: "850g"
          },
          features: [
            "High capacitance 1000uF for low ripple voltage",
            "High ripple current 65A capability",
            "Ultra-low ESR 0.8mOhm for minimal losses",
            "Dry filling technology",
            "Self-healing properties",
            "M12 stud mount for high-current applications",
            "IEC 61071 compliant"
          ],
          applications: [
            "High-power solar inverters (100kW+)",
            "Wind turbine converters",
            "Large motor drives (150kW+)",
            "Industrial UPS systems",
            "Traction inverters",
            "Energy storage systems"
          ],
          faeReview: {
            author: "Michael Schneider",
            title: "Senior FAE - Power Electronics",
            content: "The E50.N23-105.NT0 is my go-to recommendation for high-power applications requiring significant energy storage. The 1000uF capacitance at 1100V provides excellent filtering for 100kW+ inverters with minimal voltage ripple. I've deployed this capacitor in numerous wind converter projects where reliability over 20+ years is critical. The 65A ripple current rating handles high-frequency IGBT switching without excessive heating. The M12 stud provides robust mounting for the 850g weight and ensures good thermal contact. I recommend using two capacitors in parallel for 200kW+ applications, providing 2000uF total with 130A ripple capability. The low ESR of 0.8mOhm minimizes power losses and heating. This capacitor represents excellent value for high-reliability renewable energy applications.",
            highlight: "High capacitance and ripple current for demanding high-power applications"
          },
          alternativeParts: [
            {
              partNumber: "E50.N23-155.NT0",
              brand: "Electronicon",
              specifications: {
                capacitance: "1500uF",
                voltage: "1100V DC",
                rippleCurrent: "80A @ 10kHz"
              },
              comparison: {
                capacitance: "1500uF > 1000uF (+50%)",
                voltage: "1100V DC = 1100V DC (same)",
                rippleCurrent: "80A > 65A (+23%)",
                dimensions: "116mm x 200mm > 100mm x 180mm (larger)",
                weight: "1100g > 850g (heavier)"
              },
              reason: "Higher capacitance for applications requiring very low voltage ripple or high energy storage",
              useCase: "Large wind converters (500kW+) or applications with stringent DC bus stability requirements",
              link: "/electronicon/products/dc-link-capacitors/e50-n23-155-nt0.html"
            },
            {
              partNumber: "E50.N13-474.NT0",
              brand: "Electronicon",
              specifications: {
                capacitance: "470uF",
                voltage: "1100V DC",
                rippleCurrent: "45A @ 10kHz"
              },
              comparison: {
                capacitance: "470uF < 1000uF (-53%)",
                voltage: "1100V DC = 1100V DC (same)",
                rippleCurrent: "45A < 65A (-31%)",
                dimensions: "75mm x 145mm < 100mm x 180mm (smaller)",
                price: "Lower cost option"
              },
              reason: "Lower capacitance for cost-sensitive medium-power applications",
              useCase: "30-75kW applications where 470uF provides sufficient filtering",
              link: "/electronicon/products/dc-link-capacitors/e50-n13-474-nt0.html"
            }
          ],
          companionParts: [
            {
              partNumber: "E50.N23-105.NT0",
              link: "/electronicon/products/dc-link-capacitors/e50-n23-105-nt0.html",
              description: "Parallel configuration for 2000uF total capacitance",
              category: "DC-Link Capacitors"
            },
            {
              partNumber: "Pre-charge Circuit Module",
              link: "#",
              description: "Soft-start module for DC-link capacitor charging",
              category: "Power Management"
            },
            {
              partNumber: "IGBT Module FF600R12ME4",
              link: "/infineon/products/igbt-modules/ff600r12me4.html",
              description: "High-power IGBT module for 1100V DC-link systems",
              category: "Power Semiconductors"
            },
            {
              partNumber: "DC-Link Fuse 700A",
              link: "#",
              description: "Semiconductor fuse for DC-link protection",
              category: "Circuit Protection"
            },
            {
              partNumber: "M12 Mounting Hardware Kit",
              link: "#",
              description: "Complete mounting kit with insulation and hardware",
              category: "Accessories"
            }
          ],
          applicationScenarios: [
            {
              title: "150kW Solar Inverter",
              description: "Single E50.N23-105.NT0 provides excellent DC-link filtering for commercial solar inverters"
            },
            {
              title: "Wind Converter DC Bus",
              description: "Multiple capacitors in parallel for MW-class wind turbine converters"
            },
            {
              title: "Traction Inverter",
              description: "Reliable DC-link solution for railway and EV charging applications"
            }
          ],
          keywords: ["Electronicon E50.N23-105.NT0", "1000uF 1100V capacitor", "high power DC-link capacitor"],
          faqs: [
            generateFAQ(
              "What applications benefit most from the E50.N23-105.NT0's high capacitance?",
              "The E50.N23-105.NT0 with 1000uF capacitance is ideal for applications requiring significant energy storage and low voltage ripple: 1) High-power solar inverters (100-150kW) where DC bus stability affects MPPT efficiency, 2) Wind turbine converters where gusts cause rapid power changes requiring energy buffering.",
              "Evaluate your application's voltage ripple requirements and energy storage needs to determine if 1000uF is the right choice.",
              ["E50.N23-105.NT0 applications", "1000uF capacitor uses", "high capacitance DC-link"]
            ),
            generateFAQ(
              "How does the E50.N23-105.NT0 handle high ripple current applications?",
              "The E50.N23-105.NT0 is designed for high ripple current with 65A rating at 10kHz. The capacitor's low ESR of 0.8mOhm minimizes power dissipation, resulting in only 3.4W heat generation at rated current.",
              "Ensure proper thermal management and consider parallel configurations for ripple currents exceeding 65A.",
              ["E50.N23-105.NT0 ripple current", "high current DC-link", "capacitor thermal design"]
            ),
            generateFAQ(
              "What is the voltage derating recommendation for the E50.N23-105.NT0?",
              "The E50.N23-105.NT0 has a rated voltage of 1100V DC. For optimal lifetime and reliability, we recommend operating at no more than 80% of rated voltage (880V DC) under normal conditions.",
              "Apply appropriate voltage derating based on your reliability requirements and operating conditions.",
              ["E50.N23-105.NT0 voltage derating", "capacitor voltage margin", "DC-link voltage rating"]
            ),
            generateFAQ(
              "Can the E50.N23-105.NT0 be used in series for higher voltage applications?",
              "Yes, the E50.N23-105.NT0 can be used in series configurations for higher voltage applications, such as 1500V or 3000V DC systems. When connecting capacitors in series: 1) Use balancing resistors to ensure equal voltage distribution, 2) The total capacitance is reduced.",
              "Consult our FAE team for assistance with series capacitor bank design including balancing and protection considerations.",
              ["capacitor series connection", "high voltage DC-link", "E50.N23-105.NT0 series"]
            ),
            generateFAQ(
              "What maintenance is required for the E50.N23-105.NT0?",
              "The E50.N23-105.NT0 requires minimal maintenance due to its dry filling technology and self-healing properties. Recommended practices include: 1) Periodic visual inspection for physical damage, loose connections, or swelling, 2) Annual capacitance measurement to track aging.",
              "Implement a simple annual inspection and measurement program to track capacitor health over its lifetime.",
              ["E50.N23-105.NT0 maintenance", "film capacitor care", "capacitor monitoring"]
            ),
            generateFAQ(
              "How do I select between the E50.N23-105.NT0 and multiple smaller capacitors?",
              "The choice between one E50.N23-105.NT0 (1000uF) and multiple smaller capacitors depends on several factors: 1) Cost - single large capacitor often more cost-effective than multiple smaller ones, 2) Ripple current - multiple capacitors in parallel provide higher total ripple capability.",
              "Evaluate cost, performance, reliability, and mechanical constraints to determine the optimal configuration for your design.",
              ["capacitor selection guide", "single vs parallel capacitors", "DC-link design trade-offs"]
            )
          ]
        }
      ]
    }
  ]
};

// Write products.json
fs.writeFileSync(path.join(brandDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('Created products.json with 1 category (DC-Link Capacitors)');
console.log('Note: To add more categories (AC Filter, Snubber, Motor Run), please extend this script.');
