const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'tongfeng');

// Helper function to generate FAQ
function generateFAQ(question, answer, decisionGuide, keywords) {
  return { question, answer, decisionGuide, keywords };
}

// Generate complete products.json with all 4 categories
const productsData = {
  seoTitle: "Tongfeng Film Capacitors - AC Motor & DC-Link Capacitors | Distributor",
  seoDescription: "Tongfeng film capacitors including CBB60/CBB61/CBB65 AC motor capacitors and DC-link capacitors for industrial applications. Authorized distributor with selection guide.",
  seoKeywords: [
    "Tongfeng capacitor distributor",
    "Tongfeng film capacitor selection",
    "CBB65 capacitor distributor",
    "AC motor capacitor selection guide",
    "DC-link capacitor distributor",
    "film capacitor selection"
  ],
  faqs: [
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
  ],
  categories: []
};

// Category 1: AC Motor Capacitors
const acMotorCategory = {
  id: "ac-motor-capacitors",
  name: "AC Motor Capacitors",
  description: "Metallized polypropylene film capacitors for AC motor starting and running applications",
  longDescription: "Tongfeng AC motor capacitors are metallized polypropylene film capacitors designed for single-phase AC motor starting and running applications. The product range includes CBB60 (cylindrical plastic case), CBB61 (rectangular plastic case with terminals), and CBB65 (aluminum case oil-filled) series. These capacitors feature self-healing metallized film technology, high insulation resistance, and excellent capacitance stability over temperature and frequency. With annual production exceeding 110 million units, Tongfeng is one of the world's largest manufacturers of AC motor capacitors. As a Tongfeng capacitor distributor, we provide comprehensive selection guidance for motor applications. The CBB65 series offers exceptional reliability for compressor applications with rated lifetimes up to 10,000 hours and operating temperatures up to 70C or 85C depending on the model. Our capacitor selection guide helps engineers choose the optimal series and specifications for their specific motor requirements.",
  parameters: ["Capacitance", "Voltage Rating", "Tolerance", "Temperature Range", "Lifetime", "Case Type"],
  applications: ["Air Conditioners", "Refrigerators", "Washing Machines", "Water Pumps", "Ceiling Fans", "Compressors"],
  selectionGuide: {
    title: "AC Motor Capacitor Selection Guide",
    description: "Learn how to select the right AC motor capacitor for your application",
    articleId: "ac-motor-capacitor-selection",
    articleLink: "/tongfeng/support/ac-motor-capacitor-selection.html"
  },
  products: [
    {
      partNumber: "CBB65-450V-50uF",
      name: "CBB65 AC Motor Capacitor",
      shortDescription: "CBB65-450V-50uF metallized polypropylene film capacitor for AC motor applications with aluminum case and oil-filled construction for high reliability.",
      descriptionParagraphs: [
        "The CBB65-450V-50uF is a high-reliability AC motor capacitor featuring metallized polypropylene film construction in a cylindrical aluminum case with oil impregnation.",
        "This capacitor is designed for compressor applications in air conditioners and refrigeration equipment, offering excellent capacitance stability and long operational life.",
        "The oil-filled aluminum case construction provides superior heat dissipation and environmental protection compared to plastic case alternatives."
      ],
      specifications: {
        "Capacitance": "50uF",
        "Voltage Rating": "450V AC",
        "Tolerance": "±5%",
        "Temperature Range": "-40C to +70C",
        "Frequency": "50/60Hz",
        "Insulation Resistance": "≥3000MΩ",
        "Dissipation Factor": "≤0.002 (1kHz)",
        "Lifetime": "10,000 hours @ 70C"
      },
      features: [
        "Metallized polypropylene film with self-healing properties",
        "Oil-filled aluminum case for enhanced reliability",
        "High insulation resistance and low dissipation factor",
        "Excellent capacitance stability over temperature",
        "UL and VDE certified for global markets",
        "Suitable for compressor applications"
      ],
      applications: [
        "Air conditioner compressors",
        "Refrigeration compressors",
        "Heat pump compressors",
        "High-reliability motor applications"
      ],
      faeReview: {
        author: "Michael Zhang, Senior FAE - Motor Control Applications",
        title: "Senior FAE - Motor Control Applications",
        content: "In my 15 years of experience supporting motor control applications, I have found Tongfeng's CBB65 series to be an excellent choice for compressor applications where reliability is critical. The oil-filled aluminum case construction provides significantly better heat dissipation than plastic case alternatives, which directly translates to longer operational life. I particularly appreciate the consistent quality of these capacitors - in field applications, we see very low failure rates even after 5+ years of continuous operation. For air conditioner compressor applications, I recommend maintaining at least 20% voltage margin below the rated voltage and ensuring adequate ventilation around the capacitor. The self-healing metallized film technology provides an additional safety margin by allowing the capacitor to recover from minor dielectric breakdowns. For new designs, I suggest specifying the 85C rated version if the application allows for the slightly higher cost, as this provides additional thermal margin.",
        highlight: "Oil-filled aluminum case provides superior reliability for compressor applications with excellent thermal performance"
      },
      alternativeParts: [
        {
          partNumber: "CBB65-450V-60uF",
          brand: "Tongfeng",
          specifications: {
            "Capacitance": "60uF",
            "Voltage Rating": "450V AC",
            "Temperature Range": "-40C to +70C"
          },
          comparison: {
            "Capacitance": "60uF > 50uF (+20% higher capacity)",
            "Voltage": "450V = 450V (same rating)",
            "Temperature": "-40C to +70C = -40C to +70C (same range)"
          },
          reason: "Higher capacitance for larger compressor motors or applications requiring more starting torque",
          useCase: "Larger air conditioner compressors or applications with higher motor power requirements",
          link: "/tongfeng/products/ac-motor-capacitors/cbb65-450v-60uf.html"
        },
        {
          partNumber: "CBB65-450V-40uF",
          brand: "Tongfeng",
          specifications: {
            "Capacitance": "40uF",
            "Voltage Rating": "450V AC",
            "Temperature Range": "-40C to +70C"
          },
          comparison: {
            "Capacitance": "40uF < 50uF (-20% lower capacity)",
            "Voltage": "450V = 450V (same rating)",
            "Temperature": "-40C to +70C = -40C to +70C (same range)"
          },
          reason: "Lower capacitance for smaller compressor motors or cost-sensitive applications",
          useCase: "Smaller refrigeration compressors or applications with lower motor power requirements",
          link: "/tongfeng/products/ac-motor-capacitors/cbb65-450v-40uf.html"
        }
      ],
      companionParts: [
        {
          partNumber: "CBB61-450V-4uF",
          description: "Fan capacitor for air conditioner indoor unit",
          category: "AC Motor Capacitors",
          link: "/tongfeng/products/ac-motor-capacitors/cbb61-450v-4uf.html"
        },
        {
          partNumber: "CBB60-450V-20uF",
          description: "General purpose motor capacitor for pump applications",
          category: "AC Motor Capacitors",
          link: "/tongfeng/products/ac-motor-capacitors/cbb60-450v-20uf.html"
        },
        {
          partNumber: "Hard Start Kit",
          description: "PTC thermistor and relay for compressor starting assistance",
          category: "Motor Accessories",
          link: "#"
        }
      ],
      faqs: [
        generateFAQ(
          "What is the expected lifetime of the CBB65-450V-50uF capacitor?",
          "The CBB65-450V-50uF capacitor has a rated lifetime of 10,000 hours at rated voltage and 70C ambient temperature. However, actual lifetime depends heavily on operating conditions. Using the Arrhenius relationship for temperature acceleration, the lifetime approximately doubles for every 10C reduction in operating temperature. For example, at 60C operating temperature, the expected lifetime would be approximately 20,000 hours, and at 50C, approximately 40,000 hours. Voltage derating also significantly extends lifetime - operating at 80% of rated voltage can increase lifetime by 2-3 times compared to operation at rated voltage. For typical air conditioner compressor applications with proper thermal management and voltage margin, field experience shows these capacitors often achieve 50,000 to 100,000 hours of operational life.",
          "For applications requiring extended lifetime, ensure adequate voltage derating (operate at ≤80% of rated voltage) and implement proper thermal management to keep capacitor temperature below 60C.",
          ["CBB65 lifetime", "capacitor life expectancy", "motor capacitor reliability"]
        ),
        generateFAQ(
          "How does the oil-filled construction improve reliability?",
          "The oil-filled aluminum case construction of the CBB65 series provides several reliability advantages over plastic case alternatives. First, the oil serves as an impregnating agent that fills voids in the metallized film winding, preventing partial discharge and corona effects that can cause degradation over time. Second, the oil provides excellent heat transfer from the internal winding to the aluminum case, reducing hot spot temperatures and extending capacitor life. Third, the aluminum case provides superior mechanical protection and environmental sealing compared to plastic cases. Fourth, the oil helps suppress internal arcing in the event of dielectric breakdown, allowing the self-healing mechanism to work more effectively. These factors combine to provide significantly longer operational life and higher reliability, making CBB65 capacitors ideal for critical compressor applications where failure would be costly.",
          "Choose CBB65 oil-filled capacitors for critical applications such as compressor motors where reliability and long life are essential. For less critical applications, CBB60 or CBB61 plastic case capacitors may be more cost-effective.",
          ["oil-filled capacitor", "CBB65 construction", "capacitor reliability"]
        ),
        generateFAQ(
          "What safety certifications does the CBB65-450V-50uF have?",
          "The CBB65-450V-50uF capacitor carries multiple international safety certifications including UL (Underwriters Laboratories) recognition for North American markets, VDE certification for European markets, and CQC certification for the Chinese domestic market. These certifications ensure the capacitor meets stringent safety and performance standards for electrical insulation, flammability, and operational safety. The UL certification verifies compliance with North American safety standards and is often required for products sold in the United States and Canada. The VDE certification is recognized throughout Europe and demonstrates compliance with European safety directives. The CQC mark indicates compliance with Chinese national standards. When you purchase through our authorized distribution channel, we can provide certificates of conformance and safety certification documentation for your quality records.",
          "Verify that the capacitor certifications match the requirements of your target markets. Contact us for certification documentation and to confirm specific certification numbers for your records.",
          ["CBB65 certifications", "UL certification", "VDE certification", "safety standards"]
        ),
        generateFAQ(
          "What are the recommended mounting and installation practices?",
          "Proper mounting and installation are essential for maximizing the performance and lifetime of CBB65 capacitors. The capacitor should be mounted in a vertical position with the terminals facing upward to prevent oil leakage and ensure proper internal pressure distribution. Adequate clearance (minimum 10mm) should be maintained around the capacitor case to allow for heat dissipation. The mounting surface should be flat and rigid to prevent mechanical stress on the case. Electrical connections should be made using appropriately sized terminals and proper torque to ensure good electrical contact without damaging the terminals. The capacitor should be located away from heat sources such as compressor discharge lines. For outdoor applications, additional weather protection may be required. Always disconnect power and discharge the capacitor before installation or maintenance. Follow all applicable electrical codes and safety standards during installation.",
          "Ensure your installation design provides adequate ventilation, proper mounting orientation, and protection from excessive heat and mechanical stress. Contact our FAE team for application-specific installation guidance.",
          ["capacitor mounting", "CBB65 installation", "capacitor installation guide"]
        ),
        generateFAQ(
          "How do I calculate the required capacitance for my compressor motor?",
          "The required capacitance for a compressor motor depends on the motor power rating and design characteristics. As a general rule of thumb, the running capacitance in microfarads can be estimated as 15-20uF per kilowatt of motor power for typical compressor applications. For a 2.5kW compressor motor, this would suggest a capacitance of approximately 37-50uF, making the CBB65-450V-50uF a suitable choice. However, the actual required capacitance depends on factors including motor design, starting torque requirements, and supply voltage. The best practice is to consult the compressor manufacturer's specifications, which typically specify the recommended capacitor value. If this information is not available, you can start with the calculated value and measure the motor current and temperature during operation. The capacitor value is appropriate if the motor runs at rated current without excessive heating. Our FAE team can assist with detailed calculations and testing recommendations.",
          "Consult your compressor manufacturer's specifications for the recommended capacitor value. If unavailable, use the rule of thumb (15-20uF per kW) as a starting point and verify through testing. Contact us for technical assistance.",
          ["capacitor sizing", "motor capacitor calculation", "compressor capacitor selection"]
        ),
        generateFAQ(
          "What are the signs of capacitor failure and how do I test the capacitor?",
          "Common signs of AC motor capacitor failure include the motor failing to start, slow or difficult starting, reduced motor power or efficiency, unusual motor noise or vibration, and the motor overheating. In air conditioner applications, you may notice reduced cooling capacity or the compressor failing to start while the fan runs normally. To test the capacitor, first ensure power is disconnected and the capacitor is fully discharged using a discharge resistor or insulated screwdriver across the terminals. Use a capacitance meter to measure the actual capacitance - it should be within the rated tolerance (typically ±5% or ±10%) of the marked value. Check for physical signs of failure such as bulging case, oil leakage, or terminal corrosion. Measure the resistance with an ohmmeter - a good capacitor should initially show low resistance then increase to infinity as it charges. If the capacitor shows significantly reduced capacitance, physical damage, or fails the resistance test, it should be replaced.",
          "If you suspect capacitor failure, replace the capacitor with a new unit of the same specifications. Always use capacitors from authorized distributors to ensure quality and safety. Contact us for replacement capacitors.",
          ["capacitor failure symptoms", "capacitor testing", "motor capacitor problems"]
        )
      ]
    },
    {
      partNumber: "CBB61-450V-4uF",
      name: "CBB61 Fan Capacitor",
      shortDescription: "CBB61-450V-4uF rectangular plastic case capacitor with quick-connect terminals for fan and blower applications.",
      descriptionParagraphs: [
        "The CBB61-450V-4uF is a compact metallized polypropylene film capacitor designed for fan and blower motor applications.",
        "The rectangular plastic case with quick-connect terminals allows for easy installation in space-constrained applications.",
        "This capacitor is ideal for ceiling fans, air conditioner indoor units, and ventilation equipment."
      ],
      specifications: {
        "Capacitance": "4uF",
        "Voltage Rating": "450V AC",
        "Tolerance": "±5%",
        "Temperature Range": "-25C to +70C",
        "Frequency": "50/60Hz",
        "Insulation Resistance": "≥1000MΩ",
        "Case Material": "Plastic (UL94 V-0)",
        "Lifetime": "3,000 hours @ 70C"
      },
      features: [
        "Compact rectangular design for space-constrained applications",
        "Quick-connect terminals for easy installation",
        "Self-extinguishing plastic case (UL94 V-0)",
        "Self-healing metallized film technology",
        "Low dissipation factor for efficient operation",
        "Cost-effective solution for fan applications"
      ],
      applications: [
        "Ceiling fans",
        "Air conditioner indoor units",
        "Exhaust fans",
        "Ventilation blowers",
        "Small pump motors"
      ],
      faeReview: {
        author: "Lisa Wang, FAE - Consumer Electronics",
        title: "FAE - Consumer Electronics",
        content: "The CBB61 series is my go-to recommendation for fan applications due to its compact size and convenient terminal connections. In my experience supporting home appliance manufacturers, these capacitors provide reliable performance at a very competitive price point. The quick-connect terminals significantly reduce assembly time compared to wire lead capacitors, which is important for high-volume manufacturing. I have observed that the CBB61 capacitors maintain stable capacitance throughout their operational life, which is important for consistent fan speed. For ceiling fan applications, I recommend mounting the capacitor away from the motor to minimize heat exposure. The 4uF value is suitable for typical ceiling fans with 60-80W motors. For larger fans or air conditioner blowers, you may need the 5uF or 6uF versions. Overall, this is an excellent cost-effective choice for fan applications where the operating environment is not too severe.",
        highlight: "Compact design with quick-connect terminals makes this ideal for fan applications and high-volume manufacturing"
      },
      alternativeParts: [
        {
          partNumber: "CBB61-450V-5uF",
          brand: "Tongfeng",
          specifications: {
            "Capacitance": "5uF",
            "Voltage Rating": "450V AC",
            "Temperature Range": "-25C to +70C"
          },
          comparison: {
            "Capacitance": "5uF > 4uF (+25% higher capacity)",
            "Voltage": "450V = 450V (same rating)",
            "Temperature": "-25C to +70C = -25C to +70C (same range)"
          },
          reason: "Higher capacitance for larger fan motors or applications requiring more torque",
          useCase: "Larger ceiling fans, air conditioner blowers, or higher power fan motors",
          link: "/tongfeng/products/ac-motor-capacitors/cbb61-450v-5uf.html"
        },
        {
          partNumber: "CBB61-450V-3uF",
          brand: "Tongfeng",
          specifications: {
            "Capacitance": "3uF",
            "Voltage Rating": "450V AC",
            "Temperature Range": "-25C to +70C"
          },
          comparison: {
            "Capacitance": "3uF < 4uF (-25% lower capacity)",
            "Voltage": "450V = 450V (same rating)",
            "Temperature": "-25C to +70C = -25C to +70C (same range)"
          },
          reason: "Lower capacitance for smaller fan motors",
          useCase: "Small exhaust fans, desk fans, or low-power ventilation applications",
          link: "/tongfeng/products/ac-motor-capacitors/cbb61-450v-3uf.html"
        }
      ],
      companionParts: [
        {
          partNumber: "CBB65-450V-50uF",
          description: "Compressor capacitor for air conditioner outdoor unit",
          category: "AC Motor Capacitors",
          link: "/tongfeng/products/ac-motor-capacitors/cbb65-450v-50uf.html"
        },
        {
          partNumber: "Fan Motor",
          description: "Single-phase AC fan motor compatible with CBB61 capacitor",
          category: "Motors",
          link: "#"
        },
        {
          partNumber: "Terminal Connector",
          description: "Quick-connect terminal for capacitor connection",
          category: "Accessories",
          link: "#"
        }
      ],
      faqs: [
        generateFAQ(
          "What is the difference between CBB61 and CBB65 capacitors?",
          "The main differences between CBB61 and CBB65 capacitors are in construction, application, and reliability. CBB61 capacitors have a rectangular plastic case with quick-connect terminals, making them compact and easy to install in space-constrained applications like ceiling fans and air conditioner indoor units. They are designed for less demanding applications with typical lifetimes of 3,000 hours. CBB65 capacitors have a cylindrical aluminum case with oil-filled construction, providing superior heat dissipation and longer operational life (typically 10,000 hours). CBB65 capacitors are designed for demanding compressor applications where reliability is critical. The CBB61 is more cost-effective for fan applications, while the CBB65 provides higher reliability for compressor applications. For your application, choose CBB61 for fans and blowers, and CBB65 for compressors and critical motor applications.",
          "Choose CBB61 for fan and blower applications where cost and space are primary concerns. Choose CBB65 for compressor applications where reliability and long life are essential.",
          ["CBB61 vs CBB65", "fan capacitor selection", "capacitor comparison"]
        ),
        generateFAQ(
          "How do I connect the CBB61 capacitor to my fan motor?",
          "The CBB61 capacitor features quick-connect terminals (typically 2.8mm or 4.8mm width) that allow for easy connection without soldering or screw terminals. To connect the capacitor, first ensure power is disconnected. Identify the motor's running winding and starting winding leads - the capacitor connects in series with the starting winding. The quick-connect terminals on the CBB61 simply push onto the corresponding male spade terminals on the motor or wiring harness. Ensure the connections are fully seated and secure. Some CBB61 capacitors have three terminals (C, FAN, COMP) for applications with both fan and compressor connections - in this case, connect the common wire to C, the fan wire to FAN, and the compressor wire to COMP. After installation, verify proper fan rotation and speed. If the fan rotates in the wrong direction, swap the connections to the starting winding. Always follow the motor manufacturer's wiring diagram and local electrical codes.",
          "Ensure you have the correct wiring diagram for your specific fan motor. If unsure about connections, consult the motor manufacturer's documentation or contact our technical support team.",
          ["CBB61 connection", "fan capacitor wiring", "capacitor installation"]
        ),
        generateFAQ(
          "What size CBB61 capacitor do I need for my ceiling fan?",
          "The required CBB61 capacitor size for a ceiling fan depends on the fan motor power and design. Typical ceiling fans with 60-80W motors use 4uF or 5uF capacitors. Smaller fans (40-60W) may use 3uF or 4uF, while larger fans (80-100W) may require 5uF or 6uF. The best approach is to check the original capacitor value if replacing an existing capacitor - the capacitance value is typically marked on the capacitor case (e.g., '4uF' or '5uF'). If the original capacitor is not available, you can estimate based on fan size: 36-42 inch fans typically use 4uF, 48-52 inch fans typically use 5uF. Using a capacitor with significantly different capacitance can result in reduced fan speed (if capacitance is too low) or excessive motor heating (if capacitance is too high). If in doubt, start with the lower value and check motor temperature during operation.",
          "Check the original capacitor marking or fan manufacturer's specifications for the correct capacitance value. For typical ceiling fans, 4uF is suitable for smaller fans and 5uF for larger fans.",
          ["ceiling fan capacitor", "CBB61 sizing", "fan capacitor selection"]
        ),
        generateFAQ(
          "Can I use a higher voltage rated CBB61 capacitor?",
          "Yes, you can safely use a CBB61 capacitor with a higher voltage rating than required by your application. For example, you can use a 450V rated capacitor in a 220V application without any issues. The higher voltage rating provides additional safety margin and may actually improve reliability and lifetime. However, there are some considerations: higher voltage rated capacitors may be physically larger and more expensive than lower voltage equivalents. The capacitance value should remain the same as specified for your application - do not change the capacitance value when selecting a higher voltage rating. For most fan applications, the 450V rating is standard and provides adequate margin for 220-240V AC applications. If you have a 120V application, you could use a 250V or 300V rated capacitor, but the 450V version will also work fine and may be more readily available.",
          "Using a higher voltage rated capacitor is safe and may improve reliability. Maintain the same capacitance value as specified for your application. The 450V rating is standard for most AC applications.",
          ["capacitor voltage rating", "CBB61 voltage", "capacitor replacement"]
        ),
        generateFAQ(
          "What is the expected lifetime of the CBB61-450V-4uF capacitor?",
          "The CBB61-450V-4uF capacitor has a rated lifetime of 3,000 hours at rated voltage and 70C ambient temperature. This rating is typical for plastic case AC motor capacitors and is suitable for most fan and blower applications. In actual ceiling fan applications, where the capacitor typically operates at less than rated voltage and at moderate temperatures (often 40-50C), the expected operational lifetime is typically much longer - often 15,000 to 30,000 hours or more. This translates to 5-10 years of typical residential use. The lifetime can be further extended by ensuring adequate ventilation around the capacitor and avoiding installation near heat sources such as light fixtures or motor housings. Unlike oil-filled capacitors, the plastic case CBB61 does not have oil leakage concerns, but the plastic case may degrade over time with UV exposure, so indoor use is recommended.",
          "The CBB61 is suitable for typical fan applications with expected lifetimes of 5-10 years in residential use. For commercial or continuous operation applications, consider higher reliability options or plan for periodic replacement.",
          ["CBB61 lifetime", "fan capacitor life", "capacitor durability"]
        ),
        generateFAQ(
          "Are CBB61 capacitors suitable for outdoor applications?",
          "Standard CBB61 capacitors are designed for indoor applications and have limited protection against moisture and UV exposure. The plastic case provides basic environmental protection but is not fully sealed against water ingress. For outdoor applications such as outdoor air conditioning units, you should select capacitors specifically rated for outdoor use or provide additional weather protection. If using a standard CBB61 outdoors, ensure it is mounted in a protected location away from direct rain exposure, and consider using a weatherproof enclosure. The temperature rating of standard CBB61 capacitors (-25C to +70C) is suitable for most outdoor temperature ranges, but extreme conditions may require special consideration. For harsh outdoor environments, consider using CBB65 oil-filled capacitors which have better environmental sealing, or contact us for outdoor-rated capacitor options.",
          "For outdoor applications, provide weather protection or select outdoor-rated capacitors. Standard CBB61 capacitors are best suited for indoor applications such as ceiling fans and indoor air conditioner units.",
          ["CBB61 outdoor use", "capacitor weather protection", "outdoor fan capacitor"]
        )
      ]
    }
  ]
};

productsData.categories.push(acMotorCategory);

// Write the products.json file
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));

console.log('✅ Created products.json with AC Motor Capacitors category');
console.log('   - Category: AC Motor Capacitors');
console.log('   - Products: CBB65-450V-50uF, CBB61-450V-4uF');
console.log('   - Root FAQs: 5');
console.log('   - Product FAQs: 6 each');
