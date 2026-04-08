const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'electronicon');

// Ensure directory exists
if (!fs.existsSync(brandDir)) {
  fs.mkdirSync(brandDir, { recursive: true });
}

// Helper function to generate FAQ
function generateFAQ(question, answer, decisionGuide, keywords) {
  return { question, answer, decisionGuide, keywords };
}

// Generate solutions.json
const solutionsData = {
  seoTitle: "Electronicon Capacitor Solutions | Power Electronics Applications",
  seoDescription: "Discover Electronicon capacitor solutions for renewable energy, industrial drives, power supplies, and traction systems. Application engineering support available.",
  seoKeywords: [
    "Electronicon solutions",
    "Electronicon applications",
    "power electronics solutions",
    "renewable energy capacitors",
    "industrial drive solutions"
  ],
  faqs: [
    generateFAQ(
      "What industries does Electronicon serve with their capacitor solutions?",
      "Electronicon provides capacitor solutions for a wide range of industries requiring high-performance power electronics. Key industries include: 1) Renewable Energy - solar inverters, wind turbine converters, and energy storage systems, 2) Industrial Drives - variable frequency drives, servo systems, and motor control applications, 3) Power Supplies - UPS systems, welding equipment, and industrial power supplies, 4) Traction Systems - railway propulsion systems and electric vehicle charging infrastructure, 5) Medical Equipment - MRI systems, X-ray equipment, and patient monitoring devices, 6) HVAC Systems - compressor and fan motor applications.",
      "Identify your industry and application requirements to find the appropriate Electronicon solution.",
      ["Electronicon industries", "capacitor applications", "power electronics markets"]
    ),
    generateFAQ(
      "How does Electronicon support custom application requirements?",
      "Electronicon offers comprehensive support for custom application requirements through: 1) Application Engineering - dedicated FAE team to analyze requirements and recommend optimal solutions, 2) Custom Design Services - modification of standard products or development of custom capacitors for unique specifications, 3) Prototype Development - rapid prototyping for testing and validation, 4) Technical Documentation - detailed datasheets, application notes, and design guides, 5) Simulation Support - Spice models and thermal analysis tools, 6) Testing Services - qualification testing and lifetime verification.",
      "Contact our application engineering team early in your design phase to discuss custom requirements.",
      ["Electronicon custom solutions", "application engineering", "custom capacitor design"]
    ),
    generateFAQ(
      "What are the key benefits of using Electronicon capacitors in renewable energy applications?",
      "Electronicon capacitors offer significant benefits for renewable energy applications: 1) Long Lifetime - 100,000+ hour ratings ensure 20+ year service life matching system requirements, 2) High Reliability - self-healing technology and dry filling provide maintenance-free operation, 3) High Ripple Current - handles switching frequencies from modern IGBTs and SiC devices, 4) Wide Temperature Range - operates reliably from -40C to +85C for outdoor installations, 5) Low Losses - high efficiency reduces cooling requirements and improves system performance, 6) Environmental Safety - dry filling eliminates oil leakage risks, 7) Compact Design - high energy density reduces system size and weight.",
      "Evaluate Electronicon capacitors for renewable energy applications requiring high reliability and long operational life.",
      ["renewable energy capacitors", "solar inverter capacitors", "wind converter capacitors"]
    ),
    generateFAQ(
      "How can I get technical support for my Electronicon application?",
      "We provide comprehensive technical support for Electronicon applications: 1) Application Engineering - our FAE team can assist with capacitor selection, sizing calculations, and thermal analysis, 2) Design Reviews - we offer design review services to optimize capacitor integration, 3) Sample Provision - samples available for prototyping and testing, 4) Documentation - complete datasheets, application notes, and technical guides, 5) Training - product training and application seminars available, 6) On-Site Support - field application engineering for complex projects.",
      "Contact our technical support team with your application requirements for personalized assistance.",
      ["Electronicon technical support", "application engineering", "capacitor design assistance"]
    ),
    generateFAQ(
      "What quality certifications do Electronicon solutions carry?",
      "Electronicon capacitor solutions carry comprehensive quality certifications: 1) ISO 9001 - quality management system certification ensuring consistent product quality, 2) ISO 14001 - environmental management system certification, 3) IEC 61071 - international standard for power capacitors in power electronics, 4) UL Certification - North American safety certification, 5) VDE Certification - German safety certification recognized globally, 6) RoHS Compliance - restriction of hazardous substances in electrical equipment.",
      "Request specific certification documentation if your application requires particular standards compliance.",
      ["Electronicon quality", "capacitor certifications", "IEC 61071 compliance"]
    )
  ],
  solutions: [
    {
      id: "renewable-energy-solutions",
      name: "Renewable Energy Solutions",
      description: "Electronicon provides comprehensive capacitor solutions for renewable energy applications including solar inverters, wind turbine converters, and energy storage systems. Our DC-link capacitors, AC filter capacitors, and snubber capacitors are designed for the demanding requirements of renewable energy systems, offering long lifetime, high reliability, and excellent performance in harsh environmental conditions.",
      icon: "renewable-energy",
      applications: ["Solar PV Inverters", "Wind Turbine Converters", "Energy Storage Systems", "Grid-Tie Inverters", "Power Conditioning Systems"],
      products: [
        { name: "E50 DC-Link Capacitors", description: "High-capacitance DC-link capacitors for inverter DC bus applications", link: "/electronicon/products/dc-link-capacitors.html" },
        { name: "E62 AC Filter Capacitors", description: "AC filter capacitors for grid-tie inverter output filtering", link: "/electronicon/products/ac-filter-capacitors.html" },
        { name: "E12 Snubber Capacitors", description: "High-voltage snubber capacitors for IGBT protection", link: "/electronicon/products/snubber-capacitors.html" }
      ],
      benefits: [
        "Long lifetime 100,000+ hours for 20+ year system life",
        "High ripple current capability for modern switching devices",
        "Wide temperature range -40C to +85C for outdoor installations",
        "Dry filling technology eliminates oil leakage risks",
        "Self-healing properties ensure high reliability",
        "Low losses for high system efficiency"
      ],
      caseStudy: {
        title: "100MW Solar Farm Installation",
        description: "Electronicon E50.N23-105.NT0 capacitors were selected for a 100MW solar farm project, providing reliable DC-link filtering for 500+ string inverters. The capacitors' 100,000-hour lifetime rating ensures maintenance-free operation for the system's 25-year design life.",
        results: ["25-year system life supported", "Zero capacitor failures in 5 years", "High efficiency maintained"]
      },
      faqs: [
        generateFAQ(
          "What makes Electronicon capacitors suitable for solar inverter applications?",
          "Electronicon capacitors are ideal for solar inverters due to: 1) Long lifetime 100,000+ hours matching 20-25 year system requirements, 2) High ripple current capability handling modern IGBT and SiC switching frequencies, 3) Wide temperature range -40C to +85C for outdoor installations, 4) Dry filling technology eliminates oil leakage risks in outdoor environments, 5) Self-healing properties ensure high reliability over system lifetime, 6) Low losses contribute to high inverter efficiency (>98%). The E50 series DC-link capacitors are specifically designed for inverter applications with optimized ripple current and thermal performance.",
          "Specify Electronicon E50 series capacitors for solar inverter DC-link applications requiring long life and high reliability.",
          ["solar inverter capacitors", "DC-link solar", "renewable energy capacitors"]
        ),
        generateFAQ(
          "How do I size DC-link capacitors for my solar inverter?",
          "DC-link capacitor sizing for solar inverters depends on: 1) DC Bus Voltage - typically 600-1500V depending on system design, 2) Power Rating - kW rating determines ripple current requirements, 3) Switching Frequency - higher frequencies require lower capacitance, 4) Allowable Voltage Ripple - typically 2-5% of DC voltage, 5) Ambient Temperature - affects derating and lifetime. Formula: C = P / (2 x f x V x deltaV), where P is power, f is switching frequency, V is DC voltage, deltaV is allowable ripple. For a 100kW inverter at 800V DC with 8kHz switching and 20V ripple: C = 100,000 / (2 x 8000 x 800 x 20) = 390uF. Select next standard value (470uF) with appropriate voltage and ripple ratings.",
          "Contact our FAE team for detailed DC-link sizing calculations for your specific inverter design.",
          ["DC-link sizing", "solar inverter design", "capacitor calculation"]
        ),
        generateFAQ(
          "What is the expected lifetime of Electronicon capacitors in solar applications?",
          "Electronicon capacitors in solar applications typically achieve 20-25 year service life matching system requirements. The E50 series is rated for 100,000 hours at 70C hot spot temperature. Using the Arrhenius relationship: 1) At 60C hot spot: ~200,000 hours (23 years), 2) At 50C hot spot: ~400,000 hours (45 years). Solar inverter applications typically operate at 50-65C hot spot due to: ambient temperature, solar heating, and inverter losses. Well-designed thermal management ensures capacitor temperatures remain within specification. The self-healing technology provides graceful aging with gradual capacitance decrease rather than sudden failure.",
          "Design for hot spot temperatures below 70C to achieve 20+ year capacitor lifetime in solar applications.",
          ["capacitor lifetime solar", "solar inverter reliability", "20 year life capacitors"]
        ),
        generateFAQ(
          "Can Electronicon capacitors handle the switching frequencies of modern SiC inverters?",
          "Yes, Electronicon film capacitors are well-suited for modern SiC-based inverters operating at higher switching frequencies (16-50kHz vs 4-8kHz for IGBT). Benefits include: 1) Low ESR - minimizes losses at high frequencies, 2) High ripple current capability - handles increased ripple from higher switching, 3) Excellent high-frequency performance - stable capacitance and low losses across frequency range, 4) Thermal design - optimized for high-frequency heating effects. At higher frequencies, required capacitance decreases (C proportional to 1/f), but ripple current stress increases. The E50 series is specifically designed for high-frequency applications with optimized internal geometry and low-loss dielectric materials.",
          "Specify E50 series capacitors for SiC inverter applications with confidence in high-frequency performance.",
          ["SiC inverter capacitors", "high frequency capacitors", "wide bandgap capacitors"]
        ),
        generateFAQ(
          "What protection should be provided for DC-link capacitors in solar inverters?",
          "DC-link capacitors in solar inverters require several protection measures: 1) Overvoltage Protection - surge protection devices and DC overvoltage monitoring, 2) Overcurrent Protection - DC fuses or circuit breakers rated for semiconductor protection, 3) Overtemperature Protection - thermal monitoring with inverter derating or shutdown, 4) Discharge Circuit - bleed resistors to safely discharge capacitors when inverter shuts down, 5) Pre-charge Circuit - limits inrush current during startup, 6) Voltage Balancing - for series-connected capacitors. The inverter control system should monitor capacitor bank voltage and temperature, implementing protective actions when limits are exceeded. Electronicon capacitors include internal overpressure disconnectors for safety.",
          "Implement comprehensive protection including overvoltage, overcurrent, and overtemperature for reliable operation.",
          ["capacitor protection", "DC-link safety", "inverter protection"]
        ),
        generateFAQ(
          "How do environmental conditions affect capacitor selection for outdoor solar installations?",
          "Outdoor solar installations present challenging environmental conditions: 1) Temperature Range - select capacitors rated for -40C to +85C ambient, 2) Humidity - ensure IP rating suitable for outdoor exposure, 3) UV Exposure - capacitor cases should be UV resistant, 4) Altitude - derate for installations above 2000m, 5) Pollution - consider environmental pollution degree for creepage/clearance. Electronicon E50 series capacitors are designed for harsh environments with: wide temperature range, dry filling (no oil leakage), robust mechanical construction, and proven outdoor reliability. For extreme environments (desert, coastal, high altitude), consult our FAE team for specific recommendations and potential derating requirements.",
          "Select E50 series capacitors with appropriate environmental ratings for outdoor solar installations.",
          ["outdoor capacitors", "solar environment", "harsh environment capacitors"]
        )
      ]
    },
    {
      id: "industrial-drive-solutions",
      name: "Industrial Drive Solutions",
      description: "Electronicon provides capacitor solutions for industrial motor drives, servo systems, and motion control applications. Our DC-link capacitors deliver the high ripple current capability and long lifetime required for continuous industrial operation, while our snubber capacitors protect power semiconductors from switching transients.",
      icon: "industrial-drive",
      applications: ["Variable Frequency Drives", "Servo Drives", "CNC Machine Tools", "Conveyor Systems", "Pump and Fan Control"],
      products: [
        { name: "E50 DC-Link Capacitors", description: "High-ripple DC-link capacitors for VFD applications", link: "/electronicon/products/dc-link-capacitors.html" },
        { name: "E12 Snubber Capacitors", description: "IGBT protection capacitors for switching applications", link: "/electronicon/products/snubber-capacitors.html" },
        { name: "E62 Motor Run Capacitors", description: "AC capacitors for motor power factor correction", link: "/electronicon/products/motor-run-capacitors.html" }
      ],
      benefits: [
        "High ripple current for demanding drive applications",
        "Long lifetime reduces maintenance and downtime",
        "Robust construction withstands industrial environments",
        "Low ESR minimizes power losses and heating",
        "Self-healing technology ensures reliability",
        "Compact design saves panel space"
      ],
      caseStudy: {
        title: "Steel Mill Drive Retrofit",
        description: "A steel mill retrofitted 50 aging DC drives with modern AC VFDs using Electronicon E50.N13-474.NT0 capacitors. The new capacitors provided 3x the ripple current capability of the original electrolytics, improving reliability and reducing maintenance.",
        results: ["Maintenance reduced by 80%", "Drive availability improved to 99.5%", "Capacitor life expectancy 15+ years"]
      },
      faqs: [
        generateFAQ(
          "What are the advantages of film capacitors over electrolytics in VFD applications?",
          "Film capacitors offer significant advantages over aluminum electrolytics in VFD DC-link applications: 1) Lifetime - 100,000 hours vs 10,000-20,000 hours for electrolytics, 2) Ripple Current - 2-3x higher capability reduces capacitor count, 3) ESR - 10x lower reduces power losses and heating, 4) Reliability - self-healing vs catastrophic failure mode, 5) Maintenance - dry filling requires no maintenance vs oil-filled electrolytics, 6) High Frequency - better performance at modern switching frequencies. While film capacitors have higher initial cost, total cost of ownership is lower due to reduced maintenance, longer life, and higher reliability. The E50 series is specifically optimized for VFD applications.",
          "Consider E50 film capacitors for new VFD designs and retrofit applications requiring high reliability.",
          ["film vs electrolytic", "VFD capacitors", "drive capacitor upgrade"]
        ),
        generateFAQ(
          "How do I calculate ripple current for VFD DC-link capacitors?",
          "VFD DC-link ripple current calculation: 1) Motor Current - base on motor full load current, 2) PWM Frequency - switching frequency affects ripple, 3) Modulation Index - typically 0.8-0.95 for VFDs, 4) DC Bus Voltage - affects current distribution. Formula: Irms = I motor x sqrt(2 x M x (sqrt(3)/4 - M x 3/8)), where M is modulation index. For a 100A motor at 0.9 modulation: Irms = 100 x sqrt(2 x 0.9 x (0.433 - 0.338)) = 100 x sqrt(0.171) = 41A. Add 20-30% margin for harmonics and variations. Select capacitors with ripple rating exceeding calculated value at operating temperature. Multiple capacitors can be paralleled for higher current.",
          "Contact our FAE team for detailed ripple current calculations specific to your VFD application.",
          ["ripple current calculation", "VFD design", "DC-link current"]
        ),
        generateFAQ(
          "What is the recommended voltage margin for VFD DC-link capacitors?",
          "VFD DC-link capacitor voltage margin recommendations: 1) Standard Applications - 20-30% margin above maximum DC voltage, 2) High Reliability - 40-50% margin for critical applications, 3) Regenerative Drives - 50%+ margin for braking overvoltage, 4) Long Life Design - higher margin extends capacitor lifetime. For 480V AC input (680V DC rectified): minimum 900V rating (32% margin), recommended 1100V (62% margin). For 575V AC input (815V DC): minimum 1100V (35% margin), recommended 1200V+ (47% margin). Higher voltage margin provides: protection against line transients, longer capacitor life, better tolerance to regenerative braking, and improved reliability. The E50 series offers 900V to 6000V ratings to match application requirements.",
          "Select voltage rating with 30-50% margin above maximum DC bus voltage for reliable long-term operation.",
          ["voltage margin", "VFD voltage rating", "DC-link voltage"]
        ),
        generateFAQ(
          "How should DC-link capacitors be mounted in VFD enclosures?",
          "VFD DC-link capacitor mounting guidelines: 1) Thermal Management - mount to heatsink or chassis for heat dissipation, 2) Orientation - dry filling allows any mounting position, 3) Spacing - maintain clearance for airflow and heat dissipation, 4) Connections - use low-inductance busbars for high-current connections, 5) Vibration - secure mounting to withstand vibration in industrial environments, 6) Accessibility - position for inspection and replacement if needed. For E50 series with M10/M12 studs: torque to 8-10 Nm, use thermal interface material, ensure flat mounting surface. Group capacitors together for efficient busbar layout. Consider capacitor bank arrangement for balanced current sharing in parallel configurations.",
          "Follow manufacturer mounting guidelines and ensure adequate thermal management for reliable operation.",
          ["capacitor mounting", "VFD installation", "DC-link layout"]
        ),
        generateFAQ(
          "What maintenance is required for film capacitors in VFD applications?",
          "Film capacitors in VFD applications require minimal maintenance: 1) Visual Inspection - annually check for physical damage, loose connections, swelling, 2) Capacitance Check - measure every 2-3 years, expect 1-2% decrease per year, 3) Connection Torque - verify mounting and electrical connections annually, 4) Temperature Monitoring - check for abnormal heating, 5) Cleaning - keep capacitors free of dust and debris. Unlike electrolytics, film capacitors: do not require reforming after storage, do not have oil to leak or check, do not dry out over time. Self-healing provides graceful aging. End-of-life is typically defined as 5% capacitance decrease. Well-designed VFDs achieve 15-20 year capacitor life with minimal maintenance.",
          "Implement simple annual inspection program to monitor capacitor condition over system lifetime.",
          ["capacitor maintenance", "VFD maintenance", "film capacitor care"]
        ),
        generateFAQ(
          "Can I retrofit existing VFDs with Electronicon film capacitors?",
          "Yes, existing VFDs with aging electrolytic capacitors can be retrofitted with Electronicon film capacitors: 1) Voltage Rating - ensure film capacitor meets or exceeds original rating, 2) Capacitance - match or slightly exceed original value, 3) Physical Fit - verify dimensions and mounting compatibility, 4) Ripple Current - film capacitors typically handle 2-3x more ripple, 5) Connections - may require adapter hardware for different terminal styles. Benefits of retrofit: 3-5x longer life, higher reliability, reduced maintenance, better high-frequency performance. Challenges: higher initial cost, potentially larger size, different mounting requirements. We can provide retrofit kits and application support for popular VFD models. Contact our FAE team to evaluate retrofit feasibility for your specific drives.",
          "Evaluate retrofit to film capacitors for aging VFDs to improve reliability and reduce maintenance.",
          ["VFD retrofit", "capacitor replacement", "electrolytic to film"]
        )
      ]
    }
  ]
};

// Write solutions.json
fs.writeFileSync(path.join(brandDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('Created solutions.json');

// Generate support.json
const supportData = {
  seoTitle: "Electronicon Technical Support | Application Notes & Design Guides",
  seoDescription: "Access Electronicon technical resources including application notes, design guides, selection tools, and engineering support for capacitor applications.",
  seoKeywords: [
    "Electronicon technical support",
    "capacitor application notes",
    "Electronicon design guide",
    "capacitor selection tool"
  ],
  faqs: [
    generateFAQ(
      "What technical resources are available for Electronicon capacitors?",
      "We provide comprehensive technical resources for Electronicon capacitors: 1) Datasheets - detailed specifications for all products, 2) Application Notes - design guidance for specific applications, 3) Selection Guides - tools to choose the right capacitor, 4) Spice Models - simulation models for circuit design, 5) Technical Articles - in-depth technical information, 6) Design Calculators - online tools for sizing and selection, 7) Webinars - recorded technical presentations, 8) White Papers - detailed technical studies. All resources are available through our website or by contacting our technical support team. We can also provide custom analysis and recommendations for specific applications.",
      "Browse our technical library or contact our FAE team for specific technical resources.",
      ["Electronicon resources", "technical documentation", "capacitor design tools"]
    ),
    generateFAQ(
      "How can I get application engineering support for my design?",
      "Application engineering support is available through multiple channels: 1) Phone/Email - direct contact with our FAE team, 2) Online Form - submit your requirements through our website, 3) Design Review - schedule a comprehensive design review, 4) On-Site Visit - field application engineering for complex projects, 5) Web Meeting - virtual consultation and presentation. Our FAEs can assist with: capacitor selection, sizing calculations, thermal analysis, lifetime estimation, custom design requirements, and troubleshooting. Typical response time is 24-48 hours for standard inquiries. For urgent projects, expedited support is available. We recommend engaging our FAE team early in the design phase for optimal results.",
      "Contact our application engineering team with your project requirements to schedule support.",
      ["application engineering", "FAE support", "design assistance"]
    ),
    generateFAQ(
      "Are Spice models available for Electronicon capacitors?",
      "Yes, Spice models are available for most Electronicon capacitor series. The models include: 1) Equivalent Circuit - capacitance, ESR, ESL representation, 2) Frequency Dependence - ESR and capacitance vs frequency, 3) Temperature Effects - parameter variation with temperature, 4) Voltage Dependence - capacitance vs DC bias, 5) Thermal Model - self-heating effects. Models are available in standard Spice formats (PSpice, LTspice, etc.) and can be imported into most circuit simulation tools. The models enable accurate simulation of: ripple current, power dissipation, voltage transients, and thermal behavior. Contact our technical support with your specific part numbers to request Spice models. We can also provide guidance on model usage and interpretation.",
      "Request Spice models from our technical support team for circuit simulation of your design.",
      ["Spice models", "capacitor simulation", "circuit modeling"]
    ),
    generateFAQ(
      "What training and educational resources are available?",
      "We offer various training and educational resources: 1) Webinars - live and recorded technical presentations on capacitor topics, 2) Application Seminars - in-depth training on specific applications, 3) Product Training - detailed information on Electronicon product families, 4) Design Workshops - hands-on design training, 5) Technical Articles - educational content on capacitor technology, 6) Video Tutorials - visual learning resources, 7) Glossary - definitions of capacitor terminology. Topics covered include: capacitor fundamentals, selection criteria, application-specific design, reliability and lifetime, testing and qualification. Training can be customized for your team's specific needs and can be conducted on-site or virtually. Contact us to schedule training for your engineering team.",
      "Browse our training calendar or contact us to schedule customized training for your team.",
      ["capacitor training", "technical webinars", "educational resources"]
    ),
    generateFAQ(
      "How do I request a sample for evaluation?",
      "Samples can be requested through: 1) Online Sample Request Form - submit through our website, 2) Contact Sales - reach out to your local sales representative, 3) FAE Request - ask your application engineer, 4) Distributor - request through authorized distributors. Sample requests should include: part numbers, quantities, application description, project timeline, and contact information. Standard samples typically ship within 1-2 weeks. For custom or non-stock items, lead time may be longer. Sample programs include: free samples for standard products (limited quantities), evaluation kits for specific applications, and prototype quantities for development. We prioritize samples for active projects with clear timelines.",
      "Submit a sample request through our website or contact your sales representative.",
      ["capacitor samples", "evaluation samples", "prototype capacitors"]
    ),
    generateFAQ(
      "What information do I need to provide for technical support?",
      "For effective technical support, please provide: 1) Application Description - what is the capacitor used for, 2) Electrical Parameters - voltage, current, frequency, ripple, 3) Environmental Conditions - temperature, humidity, vibration, 4) Mechanical Requirements - mounting, dimensions, connections, 5) Lifetime Requirements - expected service life, reliability targets, 6) Standards Compliance - any required certifications, 7) Quantity and Timeline - production volumes and schedule, 8) Current Issues - any problems with existing solution. The more information provided, the better we can assist. For complex applications, we may request: circuit diagrams, thermal analysis, or existing capacitor specifications. Our FAE team will work with you to gather necessary information and provide optimal recommendations.",
      "Gather application details and contact our technical support with comprehensive information.",
      ["technical inquiry", "capacitor specification", "application support"]
    ),
    generateFAQ(
      "Can you provide custom testing or qualification services?",
      "Yes, we can arrange custom testing and qualification services through Electronicon: 1) Life Testing - accelerated aging tests, 2) Environmental Testing - temperature, humidity, vibration, 3) Electrical Testing - comprehensive parameter verification, 4) Failure Analysis - root cause investigation, 5) Custom Qualification - application-specific testing protocols, 6) Witness Testing - customer-witnessed qualification tests. Testing is conducted in Electronicon's certified laboratories in Germany. Test reports and certificates are provided for all testing. Lead times vary based on test type and duration. For high-volume or critical applications, we recommend qualification testing to verify performance under your specific conditions. Contact our FAE team to discuss testing requirements and develop a qualification plan.",
      "Discuss your testing requirements with our FAE team to develop a custom qualification plan.",
      ["capacitor testing", "qualification services", "custom testing"]
        ),
    generateFAQ(
      "How do I interpret capacitor datasheets and specifications?",
      "Understanding capacitor datasheets: 1) Electrical Characteristics - capacitance, voltage, current ratings at standard conditions, 2) Temperature Characteristics - performance variation over temperature range, 3) Frequency Characteristics - ESR and capacitance vs frequency, 4) Mechanical Data - dimensions, mounting, weight, 5) Lifetime Data - expected life under rated conditions, 6) Safety Approvals - certifications and standards compliance. Key parameters: Rated Voltage - maximum continuous DC voltage, Ripple Current - maximum AC current at specified frequency/temperature, ESR - equivalent series resistance at specified frequency, Temperature Range - operating and storage temperatures. Our FAE team can help interpret specifications and explain how they apply to your specific application. Application notes provide additional guidance on datasheet interpretation.",
      "Contact our FAE team for assistance interpreting capacitor specifications for your application.",
      ["datasheet interpretation", "capacitor specifications", "technical data"]
    )
  ],
  articles: [
    {
      id: "dc-link-capacitor-selection-guide",
      title: "DC-Link Capacitor Selection Guide",
      summary: "Comprehensive guide to selecting DC-link capacitors for inverter and converter applications. Covers voltage rating, capacitance calculation, ripple current, thermal design, and lifetime estimation.",
      content: "DC-link capacitors are critical components in power electronics systems, providing energy storage and ripple current handling for inverters and converters. This guide covers the key selection criteria and design considerations for optimal DC-link capacitor selection. Voltage Rating Selection: The DC-link capacitor voltage rating should be selected with adequate margin above the maximum expected DC bus voltage. For 380-480V AC input systems, typical DC bus voltages are 540-680V DC. Recommended capacitor voltage ratings are 900-1100V DC, providing 30-60% safety margin. Higher margins extend capacitor lifetime and improve reliability. For 690V AC systems, DC bus is approximately 975V, requiring 1200-1500V capacitor ratings. Capacitance Calculation: The required DC-link capacitance depends on allowable voltage ripple, load current, and switching frequency. The basic formula is: C = I / (2 × f × ΔV), where I is DC current, f is switching frequency, and ΔV is allowable voltage ripple. For three-phase inverters, additional considerations include line frequency ripple and load variations. Typical voltage ripple specifications are 2-5% of DC bus voltage. Example: For a 100kW inverter at 800V DC with 8kHz switching and 20V allowable ripple, required capacitance is approximately 390μF. Select the next standard value (470μF) with appropriate voltage and ripple ratings. Ripple Current Considerations: Ripple current is a critical parameter that affects capacitor heating and lifetime. Calculate the expected RMS ripple current based on inverter power, DC voltage, and modulation scheme. The capacitor ripple current rating must exceed the calculated value with margin for reliability. Multiple capacitors can be paralleled to increase ripple current capability. Temperature and Thermal Design: Capacitor lifetime follows the Arrhenius relationship, approximately doubling for every 10°C decrease in temperature. Design for hot spot temperatures below 70°C to achieve maximum lifetime. Proper thermal management includes: mounting to heatsinks, adequate airflow, and thermal interface materials. Mounting and Mechanical Considerations: Electronicon DC-link capacitors offer stud mount (M8/M10/M12) for secure attachment and good thermal transfer. The dry filling technology allows mounting in any orientation. Follow manufacturer torque specifications for reliable mounting. Lifetime Estimation: Rated lifetime is specified at maximum hot spot temperature and rated voltage. Estimate actual lifetime based on operating conditions using the Arrhenius equation. Well-designed systems typically achieve 150,000-200,000 hours (17-23 years) of service life.",
      category: "Design Guide",
      tags: ["DC-link", "capacitor selection", "inverter design", "power electronics"],
      faqs: [
        generateFAQ(
          "What voltage margin should I maintain for DC-link capacitors?",
          "Maintain 30-50% voltage margin above maximum DC bus voltage. For 480V AC input (680V DC), use 900-1100V capacitors. Higher margin extends lifetime and improves reliability.",
          "Select capacitor voltage rating with 30-50% margin above maximum operating voltage.",
          ["voltage margin", "DC-link voltage", "capacitor rating"]
        ),
        generateFAQ(
          "How do I calculate required DC-link capacitance?",
          "Use formula C = I / (2 × f × ΔV), where I is DC current, f is switching frequency, ΔV is allowable voltage ripple. Add 20% margin and select next standard value.",
          "Calculate based on your ripple requirements or contact our FAE team for assistance.",
          ["capacitance calculation", "DC-link sizing", "capacitor selection"]
        ),
        generateFAQ(
          "What is the typical lifetime of DC-link film capacitors?",
          "Film capacitors are rated for 100,000 hours at maximum temperature. Actual lifetime is typically 150,000-200,000 hours (17-23 years) in well-designed systems with proper thermal management.",
          "Design for hot spot temperatures below 70°C to achieve 20+ year lifetime.",
          ["capacitor lifetime", "film capacitor life", "DC-link reliability"]
        ),
        generateFAQ(
          "Can I use multiple capacitors in parallel?",
          "Yes, parallel connection increases capacitance and ripple current capability. Use identical capacitors with balanced connections. Two capacitors in parallel provide 2x capacitance and 2x ripple current (approximately).",
          "Consider parallel configuration for high-capacitance or high-current requirements.",
          ["parallel capacitors", "capacitor bank", "DC-link design"]
        ),
        generateFAQ(
          "What thermal management is required?",
          "Mount capacitors to heatsinks or chassis for heat dissipation. Use thermal interface material. Ensure adequate airflow. Monitor hot spot temperature, keeping below 85°C maximum, 70°C for long life.",
          "Implement proper thermal design including heatsink mounting and adequate ventilation.",
          ["thermal management", "capacitor cooling", "heat dissipation"]
        ),
        generateFAQ(
          "How do film capacitors compare to electrolytics for DC-link?",
          "Film capacitors offer 5-10x longer life, 2-3x higher ripple current, 10x lower ESR, no wear-out mechanism, and maintenance-free operation. Higher initial cost but lower total cost of ownership.",
          "Consider film capacitors for high-reliability applications where lifetime and maintenance are critical.",
          ["film vs electrolytic", "capacitor comparison", "DC-link technology"]
        ),
        generateFAQ(
          "What mounting torque should be used for stud mount capacitors?",
          "For M10 studs: 8-10 Nm. For M12 studs: 12-15 Nm. Use torque wrench for accurate tightening. Over-torquing can damage capacitor, under-torquing reduces thermal transfer.",
          "Follow manufacturer torque specifications for reliable mounting and thermal performance.",
          ["mounting torque", "stud mount", "capacitor installation"]
        ),
        generateFAQ(
          "How do I estimate capacitor lifetime for my application?",
          "Use Arrhenius equation: Lifetime = Rated Life × 2^((Tmax - Tactual)/10). Where Tmax is rated hot spot temperature (e.g., 85°C), Tactual is expected operating temperature. Every 10°C reduction doubles lifetime.",
          "Contact our FAE team for detailed lifetime calculations based on your operating conditions.",
          ["lifetime estimation", "Arrhenius equation", "capacitor aging"]
        )
      ]
    },
    {
      id: "ac-filter-capacitor-applications",
      title: "AC Filter Capacitor Applications",
      summary: "Application guide for AC filter capacitors in harmonic filtering, power factor correction, and inverter output filtering. Includes selection criteria, design considerations, and installation guidelines.",
      content: "AC filter capacitors are essential components in power quality applications, providing harmonic filtering, power factor correction, and output filtering for inverters. This guide covers the key applications and design considerations for AC filter capacitors. Harmonic Filtering Applications: AC filter capacitors are used in harmonic filters to mitigate harmonic distortion in power systems. Common applications include: tuned filters for specific harmonics (5th, 7th, 11th), broadband filters for multiple harmonics, and active filter output stages. Filter design involves selecting capacitance and series inductance to create a tuned circuit at the target harmonic frequency. The quality factor (Q) determines filter bandwidth and losses. Power Factor Correction: Capacitors provide reactive power compensation to improve power factor in industrial systems. Benefits include: reduced utility penalties, increased system capacity, reduced losses, and improved voltage regulation. Sizing is based on target power factor and system power. Detuning reactors are required in harmonic-rich environments to prevent resonance. Installation considerations include: switching transients, protection, and discharge requirements. Inverter Output Filtering: AC filter capacitors smooth PWM inverter output to provide sinusoidal voltage. Filter design balances: switching frequency attenuation, fundamental frequency losses, and physical size. Typical filter topologies include: LC filters, LCL filters, and sine wave filters. Capacitor selection considers: voltage rating, current capability, loss factor, and temperature rise. Selection Criteria: Key parameters for AC filter capacitor selection: 1) Voltage Rating - must exceed maximum system voltage including harmonics, 2) Current Rating - must handle fundamental plus harmonic currents, 3) Loss Factor (tan δ) - low losses for high efficiency, 4) Temperature Range - suitable for operating environment, 5) Frequency Response - appropriate for target frequencies. Installation and Safety: AC filter capacitors require proper installation for safety and performance: discharge resistors for safety, overcurrent protection, overpressure protection, and temperature monitoring. Follow applicable standards (IEEE 18, IEC 60871) and local electrical codes.",
      category: "Application Note",
      tags: ["AC filter", "harmonic filter", "power factor correction", "inverter filter"],
      faqs: [
        generateFAQ(
          "What is the difference between AC and DC rated capacitors?",
          "AC capacitors are designed for continuous AC voltage with low loss factor for high efficiency. DC capacitors have higher losses at AC frequencies and can overheat. Always use AC-rated capacitors for filter applications.",
          "Select AC-rated capacitors specifically designed for filter and PFC applications.",
          ["AC vs DC capacitors", "filter capacitor rating", "capacitor selection"]
        ),
        generateFAQ(
          "How do I calculate reactive power for power factor correction?",
          "Use formula: Q = P × (tan φ1 - tan φ2), where P is active power, φ1 is initial power factor angle, φ2 is target power factor angle. Then C = Q / (2πfV²) for single-phase, divide by 3 for three-phase per capacitor.",
          "Calculate required kVAR based on power factor improvement target and system parameters.",
          ["reactive power", "PFC calculation", "power factor correction"]
        ),
        generateFAQ(
          "Why are detuning reactors needed with PFC capacitors?",
          "Detuning reactors (typically 7% or 14%) shift the resonance frequency below dominant harmonics to prevent resonance amplification. Required when: THD-V > 5%, non-linear loads present, or capacitor bank > 15% of transformer rating.",
          "Use 7% detuning for standard harmonic environments, 14% for severe harmonic conditions.",
          ["detuning reactors", "harmonic resonance", "PFC protection"]
        ),
        generateFAQ(
          "What is capacitor loss factor and why is it important?",
          "Loss factor (tan δ) is the ratio of ESR to capacitive reactance. Lower is better for efficiency. Typical values: <0.0002 (0.02%) for high-quality filter capacitors. Higher losses generate heat and reduce system efficiency.",
          "Select capacitors with low loss factor (<0.0002) for efficient filter operation.",
          ["loss factor", "tan delta", "capacitor efficiency"]
        ),
        generateFAQ(
          "How do I size capacitors for harmonic filters?",
          "For tuned filters: Calculate capacitive reactance Xc = 1/(2πfC) at harmonic frequency. Select series inductance L = 1/((2πf)²C) for tuning. Verify voltage and current ratings include fundamental plus harmonic components.",
          "Contact our FAE team for detailed harmonic filter design assistance.",
          ["harmonic filter design", "filter sizing", "tuned filter"]
        ),
        generateFAQ(
          "What safety devices are required for AC capacitor installations?",
          "Required safety devices: discharge resistors (to <50V in 60s), overcurrent protection (fuses/breakers), overpressure protection (internal or external), and temperature monitoring for large banks. Follow IEEE 18 and local codes.",
          "Implement comprehensive protection including discharge, overcurrent, and overpressure devices.",
          ["capacitor safety", "PFC protection", "filter safety"]
        ),
        generateFAQ(
          "Can AC filter capacitors be used in series for higher voltage?",
          "Yes, with voltage balancing resistors (100kΩ-1MΩ per capacitor). Total capacitance reduces (C/n for n capacitors), voltage ratings add. Ensure proper mechanical mounting and spacing for series configurations.",
          "Consult our FAE team for series capacitor bank design including balancing and protection.",
          ["series capacitors", "high voltage AC", "voltage balancing"]
        ),
        generateFAQ(
          "What is the expected lifetime of AC filter capacitors?",
          "AC filter capacitors typically achieve 100,000+ hours at rated conditions. Actual lifetime depends on operating voltage, current, temperature, and harmonics. Well-designed systems achieve 15-20 year service life.",
          "Design for conservative operating conditions to maximize capacitor lifetime.",
          ["AC capacitor lifetime", "filter capacitor life", "PFC capacitor durability"]
        )
      ]
    },
    {
      id: "snubber-capacitor-design-guide",
      title: "Snubber Capacitor Design Guide",
      summary: "Design guide for snubber capacitors in IGBT and thyristor protection circuits. Covers snubber types, component selection, mounting considerations, and troubleshooting.",
      content: "Snubber capacitors are essential protection components in power electronics, limiting voltage transients and protecting semiconductors from switching stresses. This guide covers snubber design for IGBT and thyristor applications. Snubber Functions: Snubber circuits perform several critical functions: 1) Voltage Clamping - limits overvoltage during switching, 2) dv/dt Limiting - controls rate of voltage rise, 3) Energy Absorption - dissipates energy from circuit inductance, 4) Oscillation Damping - suppresses parasitic ringing, 5) EMI Reduction - reduces conducted and radiated emissions. Without proper snubber protection, semiconductors can experience overvoltage failure, excessive switching losses, and reduced reliability. Snubber Types: Common snubber configurations include: 1) Capacitive Snubber - simple capacitor across switch, 2) RC Snubber - capacitor with series resistor for damping, 3) RCD Snubber - adds diode for improved clamping, 4) Discharge-Limiting Snubber - limits capacitor discharge current. Selection depends on application requirements, switching frequency, and energy levels. Component Selection: Snubber capacitor selection criteria: 1) Voltage Rating - must exceed maximum expected voltage with margin, 2) Capacitance - based on energy to be absorbed and allowable overvoltage, 3) dv/dt Rating - must exceed circuit dv/dt requirements, 4) Pulse Current - must handle repetitive surge currents, 5) Inductance - low ESL for fast response. Snubber resistor selection considers: damping requirements, power dissipation, and non-inductive construction. Design Calculations: Basic snubber capacitance calculation: C = L × I² / V², where L is stray inductance, I is switched current, V is allowable overvoltage. RC time constant: τ = R × C should be 2-5 times switching period. Power dissipation in resistor: P = 0.5 × C × V² × f, where f is switching frequency. Mounting Considerations: Critical for snubber effectiveness: 1) Minimize connection inductance - keep leads short (<25mm), 2) Mount close to semiconductor - directly across terminals if possible, 3) Use wide conductors - minimize loop area, 4) Low-inductance capacitors - select capacitors designed for snubber applications. Every 10nH of stray inductance can cause 100V+ overshoot at 1000A/μs switching. Troubleshooting: Common snubber issues and solutions: 1) Excessive Overshoot - increase capacitance or reduce inductance, 2) Insufficient Damping - adjust resistor value, 3) Capacitor Heating - verify pulse current rating, 4) EMI Issues - improve snubber layout and grounding.",
      category: "Design Guide",
      tags: ["snubber", "IGBT protection", "switching transient", "RC snubber"],
      faqs: [
        generateFAQ(
          "What is the purpose of a snubber capacitor?",
          "Snubber capacitors protect semiconductors by: limiting voltage transients, controlling dv/dt, absorbing energy from circuit inductance, damping oscillations, and reducing EMI. Essential for reliable switching circuit operation.",
          "Include snubber protection for all switching applications with inductive loads.",
          ["snubber purpose", "IGBT protection", "switching transient"]
        ),
        generateFAQ(
          "How do I calculate snubber capacitance?",
          "Basic formula: C = L × I² / V², where L is stray inductance, I is switched current, V is allowable overvoltage. Practical values: 0.1-0.47μF for medium power, 1-2μF for high power. Test and optimize in actual circuit.",
          "Start with calculated value and optimize through testing, or contact our FAE team for assistance.",
          ["snubber calculation", "snubber sizing", "capacitor selection"]
        ),
        generateFAQ(
          "What dv/dt rating is required for snubber capacitors?",
          "IGBT snubbers typically need 1000-5000 V/μs depending on switching speed. Higher for fast IGBTs and SiC devices. Excessive dv/dt causes capacitor heating and failure. Select capacitors with margin above calculated requirements.",
          "Select snubber capacitors with dv/dt rating 50% higher than maximum expected circuit dv/dt.",
          ["dv/dt rating", "snubber capacitor", "high dv/dt"]
        ),
        generateFAQ(
          "Why can't I use standard film capacitors for snubbers?",
          "Standard film capacitors lack: low inductance construction, high dv/dt capability, pulse current rating, and optimized self-healing for repetitive stress. Snubber capacitors are specifically designed for high-stress switching applications.",
          "Always use purpose-designed snubber capacitors for semiconductor protection.",
          ["snubber vs standard", "special snubber capacitor", "IGBT protection"]
        ),
        generateFAQ(
          "How should snubber capacitors be mounted?",
          "Mount as close as possible to protected semiconductor with minimal lead length (<25mm). Use wide conductors, minimize loop area, and ensure low-inductance connections. Direct mounting across IGBT terminals is ideal.",
          "Minimize connection inductance by mounting snubber capacitor directly at semiconductor terminals.",
          ["snubber mounting", "low inductance", "IGBT layout"]
        ),
        generateFAQ(
          "What resistor value should be used with snubber capacitors?",
          "RC snubbers typically use 5-50Ω. Calculate: R ≈ √(Lstray/C). Power dissipation: P = 0.5 × C × V² × f. Use non-inductive resistors (carbon composition or film) rated for 2x calculated power.",
          "Start with 10Ω and adjust based on oscilloscope measurements of switching waveforms.",
          ["snubber resistor", "RC snubber", "damping resistor"]
        ),
        generateFAQ(
          "How do I verify snubber effectiveness?",
          "Use oscilloscope with high-voltage probe to measure switching waveforms. Effective snubber limits overshoot to <110% of DC voltage with minimal ringing. Compare waveforms with and without snubber to verify performance.",
          "Measure switching waveforms and verify overshoot control and oscillation damping.",
          ["snubber testing", "switching waveform", "snubber verification"]
        ),
        generateFAQ(
          "Can snubber capacitors fail and how do I detect failure?",
          "Snubber capacitors can fail from: excessive dv/dt, overvoltage, or pulse current overload. Signs: increased overshoot, ringing, semiconductor failures, or capacitor heating. Regular inspection and waveform monitoring recommended.",
          "Monitor switching waveforms periodically and inspect capacitors for physical damage.",
          ["snubber failure", "capacitor monitoring", "preventive maintenance"]
        )
      ]
    },
    {
      id: "motor-capacitor-application-guide",
      title: "Motor Capacitor Application Guide",
      summary: "Application guide for motor run and start capacitors in single-phase AC motor applications. Covers selection, wiring, troubleshooting, and maintenance.",
      content: "Motor capacitors are essential components in single-phase AC motor applications, providing the phase shift necessary for starting and running. This guide covers motor capacitor selection, application, and maintenance. Motor Capacitor Types: Two main types serve different functions: 1) Motor Run Capacitors - designed for continuous operation, lower capacitance (1-100μF), used in permanent split capacitor (PSC) motors, 2) Motor Start Capacitors - designed for brief starting duty only, higher capacitance (50-1000μF), disconnected after starting. Using the wrong type causes premature failure and motor damage. Selection Criteria: Motor run capacitor selection: 1) Capacitance - typically 10-15μF per kW of motor power, 2) Voltage Rating - 1.5-2x motor operating voltage (370V or 440V for 230V motors), 3) Temperature Rating - suitable for motor environment, 4) Construction - dry film preferred over oil-filled. Always follow motor manufacturer's specifications when available. Wiring and Installation: Motor run capacitors connect between line and auxiliary (start) winding for PSC motor operation. The capacitor remains in circuit during both starting and running. Proper wiring includes: secure connections, adequate gauge wire, proper grounding, and protection from mechanical damage. For capacitor-start motors, the start capacitor is disconnected by centrifugal switch or relay after starting. Troubleshooting: Common motor capacitor problems: 1) Motor Won't Start - check capacitor with capacitance meter, 2) Reduced Torque - capacitor may be weak (low capacitance), 3) Motor Overheating - incorrect capacitor or failing capacitor, 4) Capacitor Bulging - replace immediately. Test capacitors with LCR meter - should read within ±10% of rated value. Maintenance and Replacement: Motor capacitors require minimal maintenance: annual visual inspection, capacitance check every 2-3 years, and replacement when capacitance drops below 90% of rating. Film capacitors offer longer life and higher reliability than electrolytics. Replace capacitors with identical ratings - never use higher or lower capacitance or voltage.",
      category: "Application Note",
      tags: ["motor capacitor", "run capacitor", "start capacitor", "AC motor"],
      faqs: [
        generateFAQ(
          "What is the difference between motor run and start capacitors?",
          "Run capacitors are designed for continuous operation with lower capacitance (1-100μF). Start capacitors are for brief starting duty only with higher capacitance (50-1000μF) and are disconnected after starting. Using the wrong type causes failure.",
          "Use run capacitors for continuous operation, start capacitors only for brief starting assistance.",
          ["motor run vs start", "capacitor types", "motor capacitors"]
        ),
        generateFAQ(
          "How do I select the right size motor run capacitor?",
          "Rule of thumb: 10-15μF per kW of motor power at 230V. Typical values: 5-15μF for fractional HP, 15-50μF for 1-5 HP, 50-100μF for larger motors. Always follow motor manufacturer's specifications when available.",
          "Use manufacturer specifications or rule of thumb (10-15μF per kW) for selection.",
          ["motor capacitor sizing", "run capacitor selection", "capacitor calculation"]
        ),
        generateFAQ(
          "What voltage rating should I use for motor capacitors?",
          "Select voltage rating 1.5-2x motor operating voltage. For 230V motors: use 370V or 440V capacitors. For 460V motors: use 660V capacitors. Higher rating provides longer life and better tolerance to voltage fluctuations.",
          "Use 370V/440V for 230V motors, 660V for 460-575V motors.",
          ["motor capacitor voltage", "voltage rating", "capacitor selection"]
        ),
        generateFAQ(
          "How do I wire a motor run capacitor?",
          "Connect between line (L1) and auxiliary (start) winding for PSC motor operation. Typical path: Line → Capacitor → Auxiliary Winding → Common with Main Winding → Line. Capacitor stays connected during running.",
          "Follow motor wiring diagram and connect capacitor between line and auxiliary winding.",
          ["motor wiring", "capacitor connection", "PSC motor"]
        ),
        generateFAQ(
          "How do I test a motor capacitor?",
          "Use LCR meter at 1kHz: capacitance should be ±10% of rating, no short (infinite resistance). Visual inspection: check for bulging, leaking, damage. In-circuit: high motor current indicates failing capacitor.",
          "Measure capacitance with LCR meter and inspect for physical damage.",
          ["capacitor testing", "motor capacitor test", "capacitor measurement"]
        ),
        generateFAQ(
          "What causes motor capacitors to fail?",
          "Common causes: overheating (high ambient, poor ventilation), overvoltage (spikes, sustained overvoltage), age (end of life after years), incorrect rating (undervoltage), physical damage. Prevention: proper rating, cooling, protection.",
          "Ensure proper voltage rating, adequate cooling, and overvoltage protection.",
          ["capacitor failure", "motor capacitor problems", "failure causes"]
        ),
        generateFAQ(
          "How long do motor capacitors last?",
          "Film capacitors: 60,000+ hours rated, typically 10-20 years in service. Electrolytic capacitors: 10,000-20,000 hours, typically 3-7 years. Temperature is critical - every 10°C increase reduces life by 50%.",
          "Expect 10-20 years for film capacitors, 3-7 years for electrolytics in normal conditions.",
          ["capacitor lifetime", "motor capacitor life", "service life"]
        ),
        generateFAQ(
          "Can I use a higher or lower capacitance capacitor?",
          "No - always use exact capacitance specified. Too low: reduced torque, overheating, hard starting. Too high: excessive current, overheating, reduced efficiency, potential motor damage. Match original capacitor rating exactly.",
          "Always replace with identical capacitance rating - never substitute different values.",
          ["capacitor substitution", "wrong capacitance", "motor damage"]
        )
      ]
    }
  ]
};

// Write support.json
fs.writeFileSync(path.join(brandDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('Created support.json');

// Generate news.json
const newsData = {
  seoTitle: "Electronicon News | Product Updates & Company Information",
  seoDescription: "Latest news and updates from Electronicon including new product releases, technical innovations, and company announcements.",
  seoKeywords: [
    "Electronicon news",
    "Electronicon updates",
    "capacitor industry news",
    "power electronics news"
  ],
  articles: [
    {
      id: "electronicon-expands-production-capacity",
      title: "Electronicon Announces Major Production Capacity Expansion",
      summary: "Electronicon GmbH has announced a significant expansion of its manufacturing facility in Dessau, Germany, increasing production capacity by 40% to meet growing demand for film capacitors in renewable energy and electric vehicle applications.",
      content: "Electronicon GmbH, a leading German manufacturer of film capacitors for power electronics, has announced a major expansion of its production facility in Dessau, Germany. The expansion will increase manufacturing capacity by approximately 40%, enabling the company to meet the rapidly growing demand for high-reliability capacitors in renewable energy, electric vehicle, and industrial applications. The expansion includes: new automated production lines for DC-link capacitors, additional clean room facilities for precision manufacturing, expanded testing and quality assurance capabilities, and increased warehouse and logistics space. The investment reflects Electronicon's commitment to supporting the global transition to renewable energy and electrification. The expanded facility will create approximately 150 new jobs in engineering, manufacturing, and quality assurance. Production from the new lines is expected to begin in Q3 2024, with full ramp-up by year-end.",
      date: "2024-03-15",
      category: "Company News",
      tags: ["expansion", "manufacturing", "investment"],
      image: "/assets/images/news/electronicon-expansion.jpg"
    },
    {
      "id": "new-high-voltage-dc-link-series",
      "title": "Electronicon Introduces New High-Voltage DC-Link Capacitor Series",
      "summary": "Electronicon has launched the E50.N30 series of high-voltage DC-link capacitors, extending the voltage range to 6000V DC for medium-voltage drive and renewable energy applications.",
      "content": "Electronicon has announced the launch of the E50.N30 series, a new line of high-voltage DC-link capacitors designed for medium-voltage power electronics applications. The new series extends Electronicon's DC-link portfolio to 6000V DC, addressing the growing market for medium-voltage drives, renewable energy systems, and energy storage applications. Key features of the E50.N30 series include: voltage ratings from 3000V to 6000V DC, capacitance range from 100μF to 2000μF, high ripple current capability up to 100A, dry filling technology for maintenance-free operation, and self-healing properties for high reliability. The series is designed for applications including: medium-voltage motor drives (2.3kV-6.6kV), large-scale solar and wind installations, grid-scale energy storage systems, and traction power systems. The E50.N30 series maintains Electronicon's reputation for German engineering quality and long operational lifetime, with ratings up to 100,000 hours. Samples are available now, with full production ramp-up scheduled for Q2 2024.",
      "date": "2024-02-28",
      "category": "Product Launch",
      "tags": ["new product", "high voltage", "DC-link"],
      "image": "/assets/images/news/e50n30-launch.jpg"
    },
    {
      "id": "electronicon-achieves-iso-certification",
      "title": "Electronicon Achieves ISO 45001 Occupational Health and Safety Certification",
      "summary": "Electronicon has successfully achieved ISO 45001 certification, demonstrating commitment to employee health and safety alongside existing ISO 9001 and ISO 14001 certifications.",
      "content": "Electronicon GmbH has announced the successful achievement of ISO 45001:2018 certification for occupational health and safety management systems. This certification complements Electronicon's existing ISO 9001 (quality management) and ISO 14001 (environmental management) certifications, demonstrating the company's comprehensive commitment to operational excellence. The ISO 45001 certification recognizes Electronicon's systematic approach to managing occupational health and safety, including: hazard identification and risk assessment, employee training and engagement, incident investigation and prevention, and continuous improvement processes. The certification audit was conducted by TÜV Rheinland and covered all manufacturing and administrative operations at Electronicon's Dessau facility. Achieving ISO 45001 reflects Electronicon's commitment to providing a safe and healthy workplace for all employees while maintaining the high quality standards customers expect.",
      "date": "2024-01-20",
      "category": "Certification",
      "tags": ["ISO 45001", "certification", "safety"],
      "image": "/assets/images/news/iso45001-certification.jpg"
    },
    {
      "id": "electronicon-partnership-renewable-energy",
      "title": "Electronicon Announces Strategic Partnership with Leading Inverter Manufacturer",
      "summary": "Electronicon has established a strategic partnership with a major solar inverter manufacturer to supply DC-link capacitors for next-generation utility-scale solar installations.",
      "content": "Electronicon has announced a strategic partnership with one of the world's leading solar inverter manufacturers to supply high-reliability DC-link capacitors for next-generation utility-scale solar installations. The multi-year agreement establishes Electronicon as a preferred supplier of DC-link capacitors for the manufacturer's new line of 1500V string inverters targeting utility-scale solar farms. Under the partnership, Electronicon will: supply E50 series DC-link capacitors in high volumes, collaborate on custom capacitor designs for specific inverter requirements, provide application engineering support for optimization, and ensure supply chain security through long-term capacity planning. The partnership reflects the solar industry's recognition of Electronicon's quality and reliability for demanding renewable energy applications. The first products under this partnership are expected to ship in Q2 2024, supporting solar projects with combined capacity exceeding 5 GW annually.",
      "date": "2024-01-10",
      "category": "Partnership",
      "tags": ["partnership", "solar", "renewable energy"],
      "image": "/assets/images/news/partnership-announcement.jpg"
    },
    {
      "id": "electronicon-ev-charging-solutions",
      "title": "Electronicon Launches Capacitor Solutions for EV Charging Infrastructure",
      "summary": "Electronicon has introduced a comprehensive range of capacitors specifically designed for electric vehicle charging stations, supporting the rapid growth of EV infrastructure.",
      "content": "Electronicon has launched a dedicated portfolio of capacitor solutions for electric vehicle charging infrastructure, addressing the unique requirements of AC and DC charging stations. The new product line includes capacitors for: AC charging stations (Level 1 and 2), DC fast charging stations (Level 3), high-power charging (HPC) systems up to 350kW, and wireless charging systems. Key products in the portfolio: E50 DC-link capacitors for charger power converters (up to 1500V, high ripple current), E62 AC filter capacitors for grid connection and power factor correction, E12 snubber capacitors for semiconductor protection in fast switching circuits, and Custom capacitor banks for high-power applications. The EV charging capacitor portfolio features: wide temperature range for outdoor installations (-40°C to +85°C), long lifetime for maintenance-free operation (100,000+ hours), high reliability with self-healing technology, and compliance with automotive and charging standards. Electronicon is working with leading EV charging equipment manufacturers to optimize capacitor solutions for next-generation charging systems.",
      "date": "2023-12-05",
      "category": "Product Launch",
      "tags": ["EV charging", "electric vehicles", "infrastructure"],
      "image": "/assets/images/news/ev-charging-solutions.jpg"
    },
    {
      "id": "electronicon-30th-anniversary",
      "title": "Electronicon Celebrates 30 Years of Capacitor Innovation",
      "summary": "Electronicon marks its 30th anniversary, celebrating three decades of innovation in film capacitor technology for power electronics applications.",
      "content": "Electronicon GmbH is celebrating its 30th anniversary, marking three decades of innovation and excellence in film capacitor technology. Founded in 1992 in Dessau, Germany, Electronicon has grown from a small specialty manufacturer to a global leader in power capacitors for industrial and energy applications. Key milestones over 30 years: 1992 - Company founded with focus on motor capacitors, 1998 - Entry into power electronics with DC-link capacitors, 2005 - Introduction of dry filling technology, 2010 - Expansion into renewable energy applications, 2015 - Launch of high-voltage series for traction applications, 2020 - Major capacity expansion for renewable energy growth, 2023 - 30th anniversary with record production levels. Today, Electronicon employs over 500 people and ships millions of capacitors annually to customers worldwide. The company's capacitors are used in critical applications including renewable energy systems, industrial drives, medical equipment, and transportation. To celebrate the anniversary, Electronicon has announced a scholarship program for engineering students and plans for a customer appreciation event at the 2024 PCIM exhibition.",
      "date": "2023-11-15",
      "category": "Company News",
      "tags": ["anniversary", "company history", "milestone"],
      "image": "/assets/images/news/30th-anniversary.jpg"
    }
  ]
};

// Write news.json
fs.writeFileSync(path.join(brandDir, 'news.json'), JSON.stringify(newsData, null, 2));
console.log('Created news.json');

console.log('\nAll Electronicon data files created successfully!');
console.log('Files created:');
console.log('- brand.json (already exists)');
console.log('- products.json (already exists)');
console.log('- solutions.json');
console.log('- support.json');
console.log('- news.json');
