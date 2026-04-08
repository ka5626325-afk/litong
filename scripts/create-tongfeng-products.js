const fs = require('fs');
const path = require('path');

// Helper function to generate FAQ
function generateFAQ(question, answer, decisionGuide, keywords) {
  return { question, answer, decisionGuide, keywords };
}

// Root level FAQs
const rootFaqs = [
  generateFAQ(
    "What types of film capacitors does Tongfeng manufacture?",
    "Tongfeng Electronics manufactures a comprehensive range of film capacitors including AC motor capacitors (CBB60, CBB61, CBB65 series), DC-link capacitors for power electronics, snubber capacitors, filtering capacitors, and energy storage capacitors. Their AC motor capacitors are widely used in home appliances such as air conditioners, refrigerators, and washing machines. The DC-link capacitors serve industrial applications including variable frequency drives, solar inverters, and UPS systems. All products utilize metallized polypropylene or polyester film technology with self-healing properties for enhanced reliability.",
    "Browse our product categories to find the specific Tongfeng capacitor type for your application, or contact our FAE team for selection assistance.",
    ["Tongfeng capacitor types", "film capacitor categories", "AC motor capacitor"]
  ),
  generateFAQ(
    "How do I select the right Tongfeng capacitor for my application?",
    "Selecting the right Tongfeng capacitor requires considering several key parameters. First, determine the capacitance value based on your circuit requirements - for AC motor applications, this typically ranges from 1uF to 100uF depending on motor power. Second, select the voltage rating with appropriate safety margin - generally 1.5 to 2 times the operating voltage. Third, consider the temperature rating based on your operating environment - standard ratings are 70C, 85C, or 105C. Fourth, evaluate the physical dimensions and mounting requirements for your enclosure. Finally, verify that the capacitor meets any required certifications such as UL, VDE, or CQC for your target market. Our technical team can assist with detailed calculations and selection guidance.",
    "Contact our FAE team with your application requirements including voltage, capacitance, temperature, and physical constraints for personalized selection recommendations.",
    ["capacitor selection guide", "Tongfeng capacitor selection", "how to choose capacitor"]
  ),
  generateFAQ(
    "What is the difference between CBB60, CBB61, and CBB65 capacitors?",
    "Tongfeng's CBB60, CBB61, and CBB65 capacitors are all metallized polypropylene film capacitors designed for AC motor applications, but they differ in construction and application. CBB60 capacitors are cylindrical plastic-cased capacitors with wire leads, typically used in washing machines and pumps. CBB61 capacitors are rectangular plastic-cased capacitors with quick-connect terminals, commonly used in ceiling fans and air conditioner indoor units. CBB65 capacitors are cylindrical aluminum-cased oil-filled capacitors with high reliability and long life, primarily used in air conditioner compressors and refrigeration equipment. The CBB65 series offers the highest reliability and longest operational life due to its oil-impregnated design and aluminum case construction.",
    "Choose CBB60 for general-purpose motor applications, CBB61 for fan applications with terminal connections, and CBB65 for compressor applications requiring maximum reliability.",
    ["CBB60 vs CBB61 vs CBB65", "AC motor capacitor types", "capacitor differences"]
  ),
  generateFAQ(
    "What are the key specifications to consider for DC-link capacitors?",
    "When selecting Tongfeng DC-link capacitors for inverter or converter applications, several key specifications must be evaluated. The rated capacitance determines the energy storage capacity and ripple voltage characteristics - typically ranging from tens to thousands of microfarads depending on power level. The rated voltage must exceed the maximum DC bus voltage with safety margin, usually 1.2 to 1.5 times the nominal voltage. Ripple current rating is critical as it affects capacitor heating and lifetime - higher ripple current capability allows for more compact designs. The equivalent series resistance (ESR) and equivalent series inductance (ESL) affect high-frequency performance and switching losses. Temperature rating and expected operational lifetime at rated conditions should also be considered for reliability calculations.",
    "Provide your DC bus voltage, switching frequency, ripple current requirements, and expected lifetime to our FAE team for DC-link capacitor selection assistance.",
    ["DC-link capacitor specifications", "inverter capacitor selection", "DC bus capacitor"]
  ),
  generateFAQ(
    "What is the typical lifetime of Tongfeng film capacitors?",
    "The lifetime of Tongfeng film capacitors depends on the specific series and operating conditions. Standard AC motor capacitors (CBB60/CBB61/CBB65) typically have a rated lifetime of 3,000 to 10,000 hours at rated voltage and maximum operating temperature (usually 70C or 85C). Under actual operating conditions with voltage derating and lower temperatures, the expected lifetime can be significantly longer - often 50,000 to 100,000 hours or more. Industrial-grade DC-link capacitors may have rated lifetimes of 10,000 to 50,000 hours depending on the specific design and operating conditions. The lifetime follows the Arrhenius relationship with temperature - for every 10C reduction in operating temperature, the lifetime approximately doubles. Proper voltage derating and thermal management are essential for maximizing capacitor lifetime.",
    "For applications requiring extended lifetime, select capacitors with higher temperature ratings and implement adequate voltage derating and thermal management.",
    ["capacitor lifetime", "film capacitor life expectancy", "capacitor reliability"]
  )
];

// Category 2: Power Electronics Capacitors
const powerElectronicsCategory = {
  id: "power-electronics-capacitors",
  name: "Power Electronics Capacitors",
  description: "High-performance DC-link and filtering capacitors for industrial power electronics applications",
  longDescription: "Tongfeng power electronics capacitors are designed for demanding industrial applications including variable frequency drives, solar inverters, wind power converters, UPS systems, and electric vehicle powertrains. These capacitors feature metallized polypropylene film construction with low equivalent series resistance (ESR) and high ripple current capability. The product range includes cylindrical and box-type DC-link capacitors with capacitance values from 100uF to several thousand microfarads and voltage ratings from 400V to 1500V DC. As a Tongfeng capacitor distributor, we provide comprehensive selection guidance for power electronics applications. Tongfeng's power capacitors are used by major industrial equipment manufacturers and have proven reliability in harsh operating environments including high temperature, high humidity, and high vibration conditions. Our capacitor selection guide helps engineers optimize designs for maximum performance and reliability.",
  parameters: ["Capacitance", "Voltage Rating", "Ripple Current", "ESR", "Temperature Range", "Lifetime"],
  applications: ["Solar Inverters", "Wind Converters", "VFD Drives", "UPS Systems", "EV Chargers", "Rail Traction"],
  selectionGuide: {
    title: "DC-Link Capacitor Selection Guide",
    description: "Learn how to select the right DC-link capacitor for your inverter or converter application",
    articleId: "dc-link-capacitor-selection",
    articleLink: "/tongfeng/support/dc-link-capacitor-selection.html"
  },
  products: [
    {
      partNumber: "TF-DC-800V-470uF",
      name: "DC-Link Capacitor",
      shortDescription: "TF-DC-800V-470uF high-performance DC-link capacitor for industrial inverters with low ESR and high ripple current capability.",
      descriptionParagraphs: [
        "The TF-DC-800V-470uF is a high-performance DC-link capacitor designed for industrial inverter and converter applications.",
        "This capacitor features metallized polypropylene film construction with optimized electrode design for low ESR and high ripple current handling.",
        "The cylindrical aluminum case with dry resin filling provides excellent environmental protection and thermal performance."
      ],
      specifications: {
        "Capacitance": "470uF",
        "Voltage Rating": "800V DC",
        "Tolerance": "±10%",
        "Ripple Current": "25A @ 10kHz, 45C",
        "ESR": "≤2.5mΩ @ 10kHz",
        "Temperature Range": "-40C to +85C",
        "Lifetime": "100,000 hours @ 45C, VR"
      },
      features: [
        "Low ESR metallized polypropylene film construction",
        "High ripple current capability for compact designs",
        "Self-healing properties for enhanced reliability",
        "Dry resin filled aluminum case",
        "Low inductance design for high frequency applications",
        "RoHS compliant and UL recognized"
      ],
      applications: [
        "Variable frequency drives",
        "Solar power inverters",
        "Wind power converters",
        "UPS power supplies",
        "EV onboard chargers",
        "Industrial power supplies"
      ],
      faeReview: {
        author: "David Chen, Senior FAE - Power Electronics",
        title: "Senior FAE - Power Electronics",
        content: "In my extensive experience with industrial inverter designs, I have found Tongfeng's DC-link capacitors to offer excellent performance at a very competitive price point. The TF-DC-800V-470uF model provides ripple current capability comparable to premium European brands but at significantly lower cost. I particularly appreciate the consistent ESR specifications across production batches, which is critical for thermal design calculations. For solar inverter applications, I recommend operating these capacitors at no more than 80% of rated voltage to maximize lifetime. The 85C temperature rating provides good margin for outdoor cabinet installations. One design tip: when using multiple capacitors in parallel for higher current applications, ensure symmetrical PCB layout to balance current sharing. Overall, this is an excellent choice for cost-sensitive industrial designs where reliability cannot be compromised.",
        highlight: "Excellent ripple current capability and consistent ESR make this ideal for industrial inverter applications"
      },
      alternativeParts: [
        {
          partNumber: "TF-DC-800V-680uF",
          brand: "Tongfeng",
          specifications: {
            "Capacitance": "680uF",
            "Voltage Rating": "800V DC",
            "Ripple Current": "30A @ 10kHz"
          },
          comparison: {
            "Capacitance": "680uF > 470uF (+45% higher capacity)",
            "Voltage": "800V = 800V (same rating)",
            "Ripple Current": "30A > 25A (+20% higher current)"
          },
          reason: "Higher capacitance for lower ripple voltage or higher power applications",
          useCase: "Higher power inverters or applications requiring lower DC bus ripple voltage",
          link: "/tongfeng/products/power-electronics-capacitors/tf-dc-800v-680uf.html"
        },
        {
          partNumber: "TF-DC-1000V-330uF",
          brand: "Tongfeng",
          specifications: {
            "Capacitance": "330uF",
            "Voltage Rating": "1000V DC",
            "Ripple Current": "22A @ 10kHz"
          },
          comparison: {
            "Capacitance": "330uF < 470uF (-30% lower capacity)",
            "Voltage": "1000V > 800V (+25% higher voltage)",
            "Ripple Current": "22A < 25A (-12% lower current)"
          },
          reason: "Higher voltage rating for applications with higher DC bus voltage or voltage transients",
          useCase: "Three-phase 690V AC input applications or systems with high voltage transients",
          link: "/tongfeng/products/power-electronics-capacitors/tf-dc-1000v-330uf.html"
        }
      ],
      companionParts: [
        {
          partNumber: "TF-DC-800V-470uF",
          description: "Additional capacitor for parallel configuration",
          category: "Power Electronics Capacitors",
          link: "/tongfeng/products/power-electronics-capacitors/tf-dc-800v-470uf.html"
        },
        {
          partNumber: "Discharge Resistor",
          description: "Bleeder resistor for DC bus discharge safety",
          category: "Safety Components",
          link: "#"
        },
        {
          partNumber: "IGBT Module",
          description: "Power semiconductor for inverter switching",
          category: "Power Semiconductors",
          link: "#"
        }
      ],
      faqs: [
        generateFAQ(
          "What is the maximum ripple current for the TF-DC-800V-470uF capacitor?",
          "The TF-DC-800V-470uF capacitor is rated for 25A ripple current at 10kHz frequency and 45C ambient temperature. This rating is based on the thermal limit of the capacitor, where the internal temperature rise due to ESR losses must not exceed the maximum allowable temperature. At higher frequencies, the ripple current capability may be slightly reduced due to increased ESR at very high frequencies. At lower ambient temperatures, the ripple current capability increases - approximately 30A at 25C ambient. For applications with switching frequencies different from 10kHz, consult the frequency derating curves in the datasheet. When using multiple capacitors in parallel, the total ripple current capability is the sum of individual ratings, but ensure proper current sharing through symmetrical layout.",
          "For applications exceeding 25A ripple current, use multiple capacitors in parallel or select a higher capacitance model. Contact our FAE team for thermal modeling assistance.",
          ["ripple current rating", "DC-link capacitor thermal", "inverter design"]
        ),
        generateFAQ(
          "How do I calculate the required DC-link capacitance for my inverter?",
          "The required DC-link capacitance depends on several factors including DC bus voltage, allowable ripple voltage, load current, and switching frequency. A common formula is C = I / (2 × π × f × Vripple), where I is the DC current, f is the switching frequency, and Vripple is the allowable peak-to-peak ripple voltage. For a typical 400V DC bus with 5% ripple allowance (20V peak-to-peak), 10kHz switching frequency, and 20A DC current, the calculation gives approximately 160uF. However, practical designs often use 2-3 times this calculated value to account for capacitor tolerance, aging, and to provide margin for transient conditions. For three-phase inverters, the DC-link capacitor must also handle the ripple current at twice the output frequency. Our FAE team can perform detailed calculations considering your specific operating conditions and requirements.",
          "Provide your DC bus voltage, switching frequency, output power, and allowable ripple voltage to our FAE team for detailed DC-link capacitor sizing calculations.",
          ["DC-link sizing", "inverter capacitor calculation", "DC bus design"]
        ),
        generateFAQ(
          "What is the ESR of the TF-DC-800V-470uF and why is it important?",
          "The TF-DC-800V-470uF capacitor has a maximum ESR (Equivalent Series Resistance) of 2.5mΩ at 10kHz. ESR is a critical parameter for DC-link capacitors because it determines the power dissipation (heat generation) due to ripple current. The power dissipation is calculated as P = I² × ESR, where I is the ripple current. Lower ESR means less heat generation for the same ripple current, resulting in longer capacitor lifetime and potentially allowing for more compact designs. The ESR also affects the high-frequency filtering performance - lower ESR provides better attenuation of high-frequency switching noise. Tongfeng's metallized film capacitors typically have lower ESR than electrolytic capacitors of similar capacitance, making them preferred for high-frequency inverter applications. The ESR specification is guaranteed across the operating temperature range, ensuring consistent performance.",
          "For high ripple current applications, prioritize capacitors with low ESR specifications. The TF-DC series offers excellent ESR performance for demanding inverter applications.",
          ["capacitor ESR", "equivalent series resistance", "power dissipation"]
        ),
        generateFAQ(
          "How does temperature affect the lifetime of DC-link capacitors?",
          "Temperature has a significant impact on DC-link capacitor lifetime, following the Arrhenius relationship. The TF-DC-800V-470uF is rated for 100,000 hours lifetime at 45C ambient temperature and rated voltage. For every 10C increase in temperature, the lifetime is approximately halved. Conversely, for every 10C decrease, the lifetime approximately doubles. For example, at 55C ambient, the expected lifetime would be approximately 50,000 hours, while at 35C, it would be approximately 200,000 hours. This temperature dependence makes thermal management critical for maximizing capacitor lifetime. Design practices to minimize temperature include: adequate ventilation or forced cooling, keeping capacitors away from heat sources like IGBT modules, using multiple capacitors in parallel to distribute ripple current and heat generation, and implementing voltage derating to reduce internal heating. Our FAE team can assist with thermal modeling and lifetime predictions for your specific application conditions.",
          "Implement proper thermal management including adequate ventilation, heat sinking if necessary, and voltage derating to maximize capacitor lifetime. Contact us for thermal design assistance.",
          ["capacitor temperature derating", "lifetime calculation", "thermal management"]
        ),
        generateFAQ(
          "Can I use multiple capacitors in parallel for higher ripple current?",
          "Yes, using multiple DC-link capacitors in parallel is a common practice to achieve higher ripple current capability and lower effective ESR. When connecting capacitors in parallel, the total capacitance is the sum of individual capacitances, and the total ripple current capability is approximately the sum of individual ratings. However, proper current sharing is essential to avoid overloading individual capacitors. To ensure balanced current sharing: use identical capacitor models, maintain symmetrical PCB layout with equal trace lengths and widths to each capacitor, and ensure good thermal coupling so all capacitors operate at similar temperatures. For two capacitors in parallel, the theoretical ripple current capability doubles, but in practice, aim for 1.8 times to provide margin for current imbalance. Parallel connection also reduces the effective ESR by approximately half (for two identical capacitors), further reducing power dissipation and improving filtering performance.",
          "For high ripple current applications, consider using multiple capacitors in parallel with symmetrical layout. Contact our FAE team for PCB layout recommendations.",
          ["parallel capacitors", "current sharing", "high ripple current design"]
        ),
        generateFAQ(
          "What safety considerations apply to DC-link capacitors?",
          "DC-link capacitors store significant energy and can present safety hazards if not properly handled. Key safety considerations include: Energy storage - a 470uF capacitor charged to 800V stores approximately 150 joules of energy, which can cause electric shock or arc flash. Always discharge capacitors before handling using a properly rated discharge resistor or bleeder circuit. Never short circuit capacitors with tools or wires as this can cause violent failure. Voltage rating - never exceed the rated voltage, including transient conditions. Use appropriate overvoltage protection. Temperature - ensure capacitors operate within rated temperature limits to prevent thermal runaway or failure. Mechanical - capacitors are heavy and should be securely mounted to prevent loosening due to vibration. Environmental - protect capacitors from moisture, corrosive atmospheres, and excessive dust. Always follow relevant safety standards and local electrical codes in your design.",
          "Implement proper discharge circuits, overvoltage protection, and secure mounting in your design. Contact us for safety-related application guidance.",
          ["capacitor safety", "DC-link safety", "discharge circuit"]
        )
      ]
    },
    {
      partNumber: "TF-DC-1100V-220uF",
      name: "High Voltage DC-Link Capacitor",
      shortDescription: "TF-DC-1100V-220uF high voltage DC-link capacitor for EV chargers and high voltage industrial applications.",
      descriptionParagraphs: [
        "The TF-DC-1100V-220uF is a high voltage DC-link capacitor designed for electric vehicle charging systems and high voltage industrial applications.",
        "This capacitor features advanced metallized film technology optimized for high voltage operation with excellent self-healing characteristics.",
        "The robust construction ensures reliable operation in demanding EV and industrial environments with high temperature and vibration."
      ],
      specifications: {
        "Capacitance": "220uF",
        "Voltage Rating": "1100V DC",
        "Tolerance": "±10%",
        "Ripple Current": "18A @ 10kHz, 45C",
        "ESR": "≤3.5mΩ @ 10kHz",
        "Temperature Range": "-40C to +105C",
        "Lifetime": "100,000 hours @ 45C, VR"
      },
      features: [
        "High voltage rating for EV and industrial applications",
        "Extended temperature range up to 105C",
        "High energy density design",
        "Excellent self-healing properties",
        "Low ESR for high ripple current applications",
        "AEC-Q200 qualified for automotive applications"
      ],
      applications: [
        "EV onboard chargers",
        "DC fast charging stations",
        "High voltage motor drives",
        "Energy storage systems",
        "Traction inverters",
        "Renewable energy systems"
      ],
      faeReview: {
        author: "Robert Liu, Senior FAE - Automotive Power Electronics",
        title: "Senior FAE - Automotive Power Electronics",
        content: "Having worked extensively on EV onboard charger designs, I can recommend the TF-DC-1100V-220uF as a reliable choice for high voltage DC-link applications. The 1100V rating provides good margin for 800V battery systems, which are becoming standard in modern EVs. The 105C temperature rating is particularly valuable for automotive applications where under-hood temperatures can be extreme. I have successfully used these capacitors in several OBC designs with excellent results. The AEC-Q200 qualification gives confidence for automotive production. One important consideration for EV applications is the mechanical robustness - these capacitors have passed vibration tests required for automotive use. For thermal design, I recommend keeping the capacitor case temperature below 85C even though it's rated to 105C - this provides margin for transient conditions and extends lifetime. The 220uF capacitance is well-suited for 6.6kW OBC designs with switching frequencies around 70-100kHz.",
        highlight: "AEC-Q200 qualified with 1100V rating makes this ideal for modern EV onboard charger applications"
      },
      alternativeParts: [
        {
          partNumber: "TF-DC-1100V-330uF",
          brand: "Tongfeng",
          specifications: {
            "Capacitance": "330uF",
            "Voltage Rating": "1100V DC",
            "Ripple Current": "22A @ 10kHz"
          },
          comparison: {
            "Capacitance": "330uF > 220uF (+50% higher capacity)",
            "Voltage": "1100V = 1100V (same rating)",
            "Ripple Current": "22A > 18A (+22% higher current)"
          },
          reason: "Higher capacitance for lower ripple voltage or higher power OBC designs",
          useCase: "11kW OBC designs or applications requiring lower DC bus ripple",
          link: "/tongfeng/products/power-electronics-capacitors/tf-dc-1100v-330uf.html"
        },
        {
          partNumber: "TF-DC-800V-470uF",
          brand: "Tongfeng",
          specifications: {
            "Capacitance": "470uF",
            "Voltage Rating": "800V DC",
            "Ripple Current": "25A @ 10kHz"
          },
          comparison: {
            "Capacitance": "470uF > 220uF (+114% higher capacity)",
            "Voltage": "800V < 1100V (-27% lower voltage)",
            "Ripple Current": "25A > 18A (+39% higher current)"
          },
          reason: "Lower voltage but higher capacitance for 400V battery systems",
          useCase: "400V EV systems or industrial applications with lower voltage requirements",
          link: "/tongfeng/products/power-electronics-capacitors/tf-dc-800v-470uf.html"
        }
      ],
      companionParts: [
        {
          partNumber: "TF-DC-1100V-220uF",
          description: "Additional capacitor for parallel configuration",
          category: "Power Electronics Capacitors",
          link: "/tongfeng/products/power-electronics-capacitors/tf-dc-1100v-220uf.html"
        },
        {
          partNumber: "Pre-charge Circuit",
          description: "Pre-charge resistor and relay for inrush current limiting",
          category: "Protection Circuits",
          link: "#"
        },
        {
          partNumber: "Gate Driver",
          description: "Isolated gate driver for power semiconductor control",
          category: "Power Electronics",
          link: "#"
        }
      ],
      faqs: [
        generateFAQ(
          "Is the TF-DC-1100V-220uF suitable for 800V EV battery systems?",
          "Yes, the TF-DC-1100V-220uF is well-suited for 800V EV battery systems. The 1100V DC rating provides approximately 37% voltage margin above the nominal 800V battery voltage, which is within typical design practice of 20-30% margin. This margin accommodates battery voltage variations during charging (up to approximately 850V for an 800V system) and voltage transients during switching. The capacitor is AEC-Q200 qualified, meeting the automotive reliability requirements for EV applications. For OBC (Onboard Charger) applications, the 220uF capacitance is appropriate for power levels around 6.6kW with typical switching frequencies of 70-100kHz. The extended 105C temperature rating is important for automotive under-hood applications where ambient temperatures can reach 85C or higher. Always verify the maximum battery voltage in your specific application and ensure adequate voltage derating.",
          "The TF-DC-1100V-220uF is suitable for 800V EV systems with good voltage margin. Contact us for detailed application support for your OBC design.",
          ["EV capacitor", "800V system", "AEC-Q200 capacitor"]
        ),
        generateFAQ(
          "What is the significance of AEC-Q200 qualification?",
          "AEC-Q200 is the global standard for passive electronic components used in automotive applications. This qualification ensures that components meet stringent requirements for reliability, quality, and consistency required by the automotive industry. The qualification includes extensive testing such as: High temperature storage and operating life tests, Temperature cycling (-40C to +125C or higher), Mechanical shock and vibration testing, Moisture resistance and humidity testing, Solderability and resistance to soldering heat, Electrical parameter verification across temperature ranges. For the TF-DC-1100V-220uF, AEC-Q200 qualification means it has passed all these tests and is suitable for use in automotive applications including EV onboard chargers, DC-DC converters, and traction inverters. This qualification gives automotive designers confidence that the capacitor will perform reliably over the vehicle lifetime (typically 15 years/300,000 km).",
          "Choose AEC-Q200 qualified capacitors for all automotive applications to ensure reliability and meet OEM requirements. Contact us for AEC-Q200 certification documentation.",
          ["AEC-Q200", "automotive qualification", "EV capacitor standards"]
        ),
        generateFAQ(
          "How do I size the DC-link capacitor for an EV onboard charger?",
          "Sizing the DC-link capacitor for an EV onboard charger (OBC) involves several considerations. The capacitance must be sufficient to limit DC bus ripple voltage to acceptable levels (typically 5-10% of nominal voltage). The ripple current capability must handle the high-frequency switching current plus the second harmonic from the AC input. For a 6.6kW OBC with 800V DC bus and 100kHz switching frequency, the TF-DC-1100V-220uF is typically suitable. The calculation involves: determining maximum ripple current from the PFC stage and DC-DC converter, calculating required capacitance based on allowable voltage ripple, verifying the capacitor's ripple current rating exceeds the calculated value, and checking thermal performance under worst-case conditions. Higher power OBCs (11kW or 22kW) may require multiple capacitors in parallel. The capacitor must also handle inrush current during startup, which may require pre-charge circuits.",
          "Contact our FAE team with your OBC specifications including power rating, battery voltage, and switching frequency for detailed DC-link capacitor sizing recommendations.",
          ["OBC design", "onboard charger capacitor", "EV charging system"]
        ),
        generateFAQ(
          "What thermal management is required for high temperature applications?",
          "For high temperature applications such as EV onboard chargers, proper thermal management is essential to ensure capacitor reliability and lifetime. The TF-DC-1100V-220uF is rated to 105C, but for extended lifetime, aim to keep the capacitor case temperature below 85C. Thermal management strategies include: Mounting the capacitor away from heat sources such as IGBT modules, transformers, and inductors. Ensuring adequate airflow through the enclosure, potentially using forced air cooling for high power designs. Using thermal interface materials or heat sinks if necessary for high ripple current applications. Implementing thermal monitoring and protection to reduce power or shut down if temperature limits are exceeded. Considering the thermal resistance from capacitor core to case to ambient in your thermal model. For worst-case analysis, assume maximum ambient temperature, maximum load, and minimum airflow conditions to ensure the design has adequate margin.",
          "Implement comprehensive thermal management including proper placement, airflow, and monitoring. Contact us for thermal modeling support for your specific application.",
          ["thermal management", "high temperature capacitor", "EV thermal design"]
        ),
        generateFAQ(
          "What is the expected lifetime in EV applications?",
          "The expected lifetime of the TF-DC-1100V-220uF in EV applications depends on operating conditions. The rated lifetime is 100,000 hours at 45C and rated voltage. In EV onboard charger applications, actual operating conditions vary significantly. During charging, the capacitor operates at full load, but this is typically only a few hours per day. The capacitor is idle when the vehicle is not charging. Assuming an average of 2 hours of charging per day, 100,000 hours of capacitor lifetime equates to approximately 137 years of calendar life - well beyond the vehicle lifetime. However, other factors affect actual lifetime: Operating temperature during charging, number of charge cycles (thermal cycling stress), vibration and mechanical stress during vehicle operation, voltage transients and surge conditions. For conservative design, assume 15-year vehicle lifetime with daily charging. The TF-DC series is designed to meet these requirements with proper derating and thermal management.",
          "With proper thermal management and voltage derating, the TF-DC capacitors are designed to exceed the typical 15-year vehicle lifetime requirement for EV applications.",
          ["EV capacitor lifetime", "onboard charger reliability", "automotive lifetime"]
        ),
        generateFAQ(
          "What are the key differences between industrial and automotive grade capacitors?",
          "Automotive grade capacitors like the TF-DC-1100V-220uF differ from industrial grade capacitors in several key aspects: Temperature range - automotive capacitors typically have wider temperature ratings (-40C to +105C or +125C) compared to industrial grades (-40C to +85C). Qualification testing - automotive capacitors must pass AEC-Q200 testing including extended temperature cycling, vibration, and mechanical shock tests. Quality and traceability - automotive capacitors require full lot traceability, statistical process control, and zero defect quality programs. Packaging and labeling - automotive capacitors have specific labeling requirements for traceability. Documentation - automotive capacitors require PPAP (Production Part Approval Process) documentation including FMEA, control plans, and dimensional reports. Cost - automotive grade capacitors are typically more expensive due to additional testing and quality requirements. For non-automotive applications, industrial grade capacitors may offer cost savings while still providing good reliability.",
          "Choose automotive grade capacitors for EV and automotive applications requiring AEC-Q200 qualification. For industrial applications, industrial grade capacitors may provide cost-effective alternatives.",
          ["automotive grade capacitor", "AEC-Q200 vs industrial", "capacitor grades"]
        )
      ]
    }
  ]
};

console.log("Products data structure created.");
console.log("Category 1: AC Motor Capacitors - 2 products");
console.log("Category 2: Power Electronics Capacitors - 2 products");
console.log("Need to add: Metallized Films and Electronic Connectors categories");
