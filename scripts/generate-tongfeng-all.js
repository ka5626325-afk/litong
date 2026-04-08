const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'tongfeng');

// Helper function
function generateFAQ(question, answer, decisionGuide, keywords) {
  return { question, answer, decisionGuide, keywords };
}

// Read existing products.json and add more categories
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

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
          specifications: { "Capacitance": "680uF", "Voltage Rating": "800V DC", "Ripple Current": "30A @ 10kHz" },
          comparison: { "Capacitance": "680uF > 470uF (+45%)", "Voltage": "800V = 800V", "Ripple Current": "30A > 25A (+20%)" },
          reason: "Higher capacitance for lower ripple voltage or higher power applications",
          useCase: "Higher power inverters or applications requiring lower DC bus ripple voltage",
          link: "/tongfeng/products/power-electronics-capacitors/tf-dc-800v-680uf.html"
        },
        {
          partNumber: "TF-DC-1000V-330uF",
          brand: "Tongfeng",
          specifications: { "Capacitance": "330uF", "Voltage Rating": "1000V DC", "Ripple Current": "22A @ 10kHz" },
          comparison: { "Capacitance": "330uF < 470uF (-30%)", "Voltage": "1000V > 800V (+25%)", "Ripple Current": "22A < 25A (-12%)" },
          reason: "Higher voltage rating for applications with higher DC bus voltage or voltage transients",
          useCase: "Three-phase 690V AC input applications or systems with high voltage transients",
          link: "/tongfeng/products/power-electronics-capacitors/tf-dc-1000v-330uf.html"
        }
      ],
      companionParts: [
        { partNumber: "TF-DC-800V-470uF", description: "Additional capacitor for parallel configuration", category: "Power Electronics Capacitors", link: "/tongfeng/products/power-electronics-capacitors/tf-dc-800v-470uf.html" },
        { partNumber: "Discharge Resistor", description: "Bleeder resistor for DC bus discharge safety", category: "Safety Components", link: "#" },
        { partNumber: "IGBT Module", description: "Power semiconductor for inverter switching", category: "Power Semiconductors", link: "#" }
      ],
      faqs: [
        generateFAQ("What is the maximum ripple current for the TF-DC-800V-470uF capacitor?", "The TF-DC-800V-470uF capacitor is rated for 25A ripple current at 10kHz frequency and 45C ambient temperature. This rating is based on the thermal limit of the capacitor, where the internal temperature rise due to ESR losses must not exceed the maximum allowable temperature. At higher frequencies, the ripple current capability may be slightly reduced due to increased ESR at very high frequencies. At lower ambient temperatures, the ripple current capability increases - approximately 30A at 25C ambient.", "For applications exceeding 25A ripple current, use multiple capacitors in parallel or select a higher capacitance model. Contact our FAE team for thermal modeling assistance.", ["ripple current rating", "DC-link capacitor thermal", "inverter design"]),
        generateFAQ("How do I calculate the required DC-link capacitance for my inverter?", "The required DC-link capacitance depends on several factors including DC bus voltage, allowable ripple voltage, load current, and switching frequency. A common formula is C = I / (2 × π × f × Vripple), where I is the DC current, f is the switching frequency, and Vripple is the allowable peak-to-peak ripple voltage. For a typical 400V DC bus with 5% ripple allowance (20V peak-to-peak), 10kHz switching frequency, and 20A DC current, the calculation gives approximately 160uF.", "Provide your DC bus voltage, switching frequency, output power, and allowable ripple voltage to our FAE team for detailed DC-link capacitor sizing calculations.", ["DC-link sizing", "inverter capacitor calculation", "DC bus design"]),
        generateFAQ("What is the ESR of the TF-DC-800V-470uF and why is it important?", "The TF-DC-800V-470uF capacitor has a maximum ESR (Equivalent Series Resistance) of 2.5mΩ at 10kHz. ESR is a critical parameter for DC-link capacitors because it determines the power dissipation (heat generation) due to ripple current. The power dissipation is calculated as P = I² × ESR, where I is the ripple current. Lower ESR means less heat generation for the same ripple current, resulting in longer capacitor lifetime.", "For high ripple current applications, prioritize capacitors with low ESR specifications. The TF-DC series offers excellent ESR performance for demanding inverter applications.", ["capacitor ESR", "equivalent series resistance", "power dissipation"]),
        generateFAQ("How does temperature affect the lifetime of DC-link capacitors?", "Temperature has a significant impact on DC-link capacitor lifetime, following the Arrhenius relationship. The TF-DC-800V-470uF is rated for 100,000 hours lifetime at 45C ambient temperature and rated voltage. For every 10C increase in temperature, the lifetime is approximately halved. Conversely, for every 10C decrease, the lifetime approximately doubles.", "Implement proper thermal management including adequate ventilation, heat sinking if necessary, and voltage derating to maximize capacitor lifetime. Contact us for thermal design assistance.", ["capacitor temperature derating", "lifetime calculation", "thermal management"]),
        generateFAQ("Can I use multiple capacitors in parallel for higher ripple current?", "Yes, using multiple DC-link capacitors in parallel is a common practice to achieve higher ripple current capability and lower effective ESR. When connecting capacitors in parallel, the total capacitance is the sum of individual capacitances, and the total ripple current capability is approximately the sum of individual ratings. However, proper current sharing is essential to avoid overloading individual capacitors.", "For high ripple current applications, consider using multiple capacitors in parallel with symmetrical layout. Contact our FAE team for PCB layout recommendations.", ["parallel capacitors", "current sharing", "high ripple current design"]),
        generateFAQ("What safety considerations apply to DC-link capacitors?", "DC-link capacitors store significant energy and can present safety hazards if not properly handled. Key safety considerations include: Energy storage - a 470uF capacitor charged to 800V stores approximately 150 joules of energy, which can cause electric shock or arc flash. Always discharge capacitors before handling using a properly rated discharge resistor or bleeder circuit.", "Implement proper discharge circuits, overvoltage protection, and secure mounting in your design. Contact us for safety-related application guidance.", ["capacitor safety", "DC-link safety", "discharge circuit"])
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
        content: "Having worked extensively on EV onboard charger designs, I can recommend the TF-DC-1100V-220uF as a reliable choice for high voltage DC-link applications. The 1100V rating provides good margin for 800V battery systems, which are becoming standard in modern EVs. The 105C temperature rating is particularly valuable for automotive applications where under-hood temperatures can be extreme. I have successfully used these capacitors in several OBC designs with excellent results. The AEC-Q200 qualification gives confidence for automotive production.",
        highlight: "AEC-Q200 qualified with 1100V rating makes this ideal for modern EV onboard charger applications"
      },
      alternativeParts: [
        {
          partNumber: "TF-DC-1100V-330uF",
          brand: "Tongfeng",
          specifications: { "Capacitance": "330uF", "Voltage Rating": "1100V DC", "Ripple Current": "22A @ 10kHz" },
          comparison: { "Capacitance": "330uF > 220uF (+50%)", "Voltage": "1100V = 1100V", "Ripple Current": "22A > 18A (+22%)" },
          reason: "Higher capacitance for lower ripple voltage or higher power OBC designs",
          useCase: "11kW OBC designs or applications requiring lower DC bus ripple",
          link: "/tongfeng/products/power-electronics-capacitors/tf-dc-1100v-330uf.html"
        },
        {
          partNumber: "TF-DC-800V-470uF",
          brand: "Tongfeng",
          specifications: { "Capacitance": "470uF", "Voltage Rating": "800V DC", "Ripple Current": "25A @ 10kHz" },
          comparison: { "Capacitance": "470uF > 220uF (+114%)", "Voltage": "800V < 1100V (-27%)", "Ripple Current": "25A > 18A (+39%)" },
          reason: "Lower voltage but higher capacitance for 400V battery systems",
          useCase: "400V EV systems or industrial applications with lower voltage requirements",
          link: "/tongfeng/products/power-electronics-capacitors/tf-dc-800v-470uf.html"
        }
      ],
      companionParts: [
        { partNumber: "TF-DC-1100V-220uF", description: "Additional capacitor for parallel configuration", category: "Power Electronics Capacitors", link: "/tongfeng/products/power-electronics-capacitors/tf-dc-1100v-220uf.html" },
        { partNumber: "Pre-charge Circuit", description: "Pre-charge resistor and relay for inrush current limiting", category: "Protection Circuits", link: "#" },
        { partNumber: "Gate Driver", description: "Isolated gate driver for power semiconductor control", category: "Power Electronics", link: "#" }
      ],
      faqs: [
        generateFAQ("Is the TF-DC-1100V-220uF suitable for 800V EV battery systems?", "Yes, the TF-DC-1100V-220uF is well-suited for 800V EV battery systems. The 1100V DC rating provides approximately 37% voltage margin above the nominal 800V battery voltage, which is within typical design practice of 20-30% margin. This margin accommodates battery voltage variations during charging and voltage transients during switching.", "The TF-DC-1100V-220uF is suitable for 800V EV systems with good voltage margin. Contact us for detailed application support for your OBC design.", ["EV capacitor", "800V system", "AEC-Q200 capacitor"]),
        generateFAQ("What is the significance of AEC-Q200 qualification?", "AEC-Q200 is the global standard for passive electronic components used in automotive applications. This qualification ensures that components meet stringent requirements for reliability, quality, and consistency required by the automotive industry. The qualification includes extensive testing such as high temperature storage, temperature cycling, mechanical shock and vibration testing.", "Choose AEC-Q200 qualified capacitors for all automotive applications to ensure reliability and meet OEM requirements. Contact us for AEC-Q200 certification documentation.", ["AEC-Q200", "automotive qualification", "EV capacitor standards"]),
        generateFAQ("How do I size the DC-link capacitor for an EV onboard charger?", "Sizing the DC-link capacitor for an EV onboard charger (OBC) involves several considerations. The capacitance must be sufficient to limit DC bus ripple voltage to acceptable levels (typically 5-10% of nominal voltage). The ripple current capability must handle the high-frequency switching current plus the second harmonic from the AC input.", "Contact our FAE team with your OBC specifications including power rating, battery voltage, and switching frequency for detailed DC-link capacitor sizing recommendations.", ["OBC design", "onboard charger capacitor", "EV charging system"]),
        generateFAQ("What thermal management is required for high temperature applications?", "For high temperature applications such as EV onboard chargers, proper thermal management is essential to ensure capacitor reliability and lifetime. The TF-DC-1100V-220uF is rated to 105C, but for extended lifetime, aim to keep the capacitor case temperature below 85C.", "Implement comprehensive thermal management including proper placement, airflow, and monitoring. Contact us for thermal modeling support for your specific application.", ["thermal management", "high temperature capacitor", "EV thermal design"]),
        generateFAQ("What is the expected lifetime in EV applications?", "The expected lifetime of the TF-DC-1100V-220uF in EV applications depends on operating conditions. The rated lifetime is 100,000 hours at 45C and rated voltage. In EV onboard charger applications, actual operating conditions vary significantly. During charging, the capacitor operates at full load, but this is typically only a few hours per day.", "With proper thermal management and voltage derating, the TF-DC capacitors are designed to exceed the typical 15-year vehicle lifetime requirement for EV applications.", ["EV capacitor lifetime", "onboard charger reliability", "automotive lifetime"]),
        generateFAQ("What are the key differences between industrial and automotive grade capacitors?", "Automotive grade capacitors like the TF-DC-1100V-220uF differ from industrial grade capacitors in several key aspects: Temperature range - automotive capacitors typically have wider temperature ratings (-40C to +105C or +125C) compared to industrial grades. Qualification testing - automotive capacitors must pass AEC-Q200 testing including extended temperature cycling, vibration, and mechanical shock tests.", "Choose automotive grade capacitors for EV and automotive applications requiring AEC-Q200 qualification. For industrial applications, industrial grade capacitors may provide cost-effective alternatives.", ["automotive grade capacitor", "AEC-Q200 vs industrial", "capacitor grades"])
      ]
    }
  ]
};

productsData.categories.push(powerElectronicsCategory);

// Category 3: Metallized Films
const metallizedFilmsCategory = {
  id: "metallized-films",
  name: "Metallized Films",
  description: "High-quality polypropylene and polyester metallized films for capacitor manufacturing",
  longDescription: "Tongfeng metallized films are high-quality capacitor-grade films with aluminum metallization and self-healing properties. These films are used for manufacturing film capacitors and are available in various thicknesses, widths, and metallization patterns. With annual production capacity exceeding 20,000 tons, Tongfeng is one of the world's largest producers of capacitor-grade polypropylene films. As a Tongfeng capacitor distributor, we provide comprehensive selection guidance for film requirements. The films feature excellent electrical properties, high mechanical strength, and consistent quality for reliable capacitor performance. Our capacitor selection guide helps engineers choose the optimal film specifications for their specific capacitor manufacturing requirements.",
  parameters: ["Film Thickness", "Film Width", "Metallization", "Margin", "Roll Diameter"],
  applications: ["Film Capacitors", "Power Capacitors", "Motor Capacitors", "Industrial Capacitors", "Automotive Capacitors"],
  selectionGuide: {
    title: "Metallized Film Selection Guide",
    description: "Learn how to select the right metallized film for your capacitor manufacturing",
    articleId: "metallized-film-selection",
    articleLink: "/tongfeng/support/metallized-film-selection.html"
  },
  products: [
    {
      partNumber: "TF-BOPP-6um-100mm",
      name: "BOPP Metallized Film",
      shortDescription: "TF-BOPP-6um-100mm biaxially oriented polypropylene metallized film for capacitor manufacturing with heavy edge metallization.",
      descriptionParagraphs: [
        "The TF-BOPP-6um-100mm is a high-quality biaxially oriented polypropylene (BOPP) film with aluminum metallization for film capacitor manufacturing.",
        "This film features heavy edge metallization for improved current handling and self-healing properties for enhanced reliability.",
        "The 6um thickness provides excellent electrical insulation with high dielectric strength for compact capacitor designs."
      ],
      specifications: {
        "Film Material": "Biaxially Oriented Polypropylene (BOPP)",
        "Film Thickness": "6um",
        "Film Width": "100mm",
        "Metallization": "Aluminum, heavy edge",
        "Margin": "2.5mm standard",
        "Roll Length": "2000-4000m",
        "Dielectric Strength": "≥400V/um"
      },
      features: [
        "High purity BOPP material with consistent properties",
        "Heavy edge metallization for improved current handling",
        "Self-healing properties for reliable operation",
        "High dielectric strength for compact designs",
        "Low dissipation factor for efficient capacitors",
        "Excellent mechanical strength for winding"
      ],
      applications: [
        "AC motor capacitors",
        "Power electronics capacitors",
        "Lighting capacitors",
        "Industrial capacitors",
        "Automotive capacitors"
      ],
      faeReview: {
        author: "James Wu, Senior FAE - Capacitor Manufacturing",
        title: "Senior FAE - Capacitor Manufacturing",
        content: "Having worked with numerous capacitor manufacturers, I can attest to the consistent quality of Tongfeng's metallized films. The TF-BOPP-6um-100mm film offers excellent winding characteristics and consistent metallization thickness, which is critical for achieving tight capacitance tolerances in finished capacitors. The heavy edge design provides better current handling at the spray contact area, reducing ESR and improving reliability. I particularly appreciate the film's mechanical strength - it withstands high-speed winding without stretching or tearing. For capacitor manufacturers, the consistent quality from batch to batch means less process adjustment and higher yield. The self-healing properties are excellent - we see clean clearing without excessive carbon buildup. Overall, this is a cost-effective alternative to European and Japanese films with comparable performance.",
        highlight: "Consistent quality and excellent winding characteristics make this ideal for high-volume capacitor manufacturing"
      },
      alternativeParts: [
        {
          partNumber: "TF-BOPP-8um-100mm",
          brand: "Tongfeng",
          specifications: { "Film Thickness": "8um", "Film Width": "100mm", "Dielectric Strength": "≥380V/um" },
          comparison: { "Thickness": "8um > 6um (+33% thicker)", "Dielectric Strength": "380V/um vs 400V/um (similar)", "Voltage Rating": "Higher voltage capability" },
          reason: "Thicker film for higher voltage capacitors or increased safety margin",
          useCase: "High voltage capacitors or applications requiring additional dielectric margin",
          link: "/tongfeng/products/metallized-films/tf-bopp-8um-100mm.html"
        },
        {
          partNumber: "TF-BOPP-6um-150mm",
          brand: "Tongfeng",
          specifications: { "Film Thickness": "6um", "Film Width": "150mm", "Dielectric Strength": "≥400V/um" },
          comparison: { "Thickness": "6um = 6um (same)", "Width": "150mm > 100mm (+50% wider)", "Dielectric Strength": "400V/um = 400V/um" },
          reason: "Wider film for larger capacitors or reduced winding layers",
          useCase: "Large can capacitors or applications requiring fewer winding layers",
          link: "/tongfeng/products/metallized-films/tf-bopp-6um-150mm.html"
        }
      ],
      companionParts: [
        { partNumber: "TF-PET-6um-100mm", description: "Polyester metallized film for higher temperature applications", category: "Metallized Films", link: "/tongfeng/products/metallized-films/tf-pet-6um-100mm.html" },
        { partNumber: "Winding Machine", description: "Automatic capacitor winding equipment", category: "Manufacturing Equipment", link: "#" },
        { partNumber: "Metal Spray", description: "Zinc/aluminum spray for end contact", category: "Capacitor Materials", link: "#" }
      ],
      faqs: [
        generateFAQ("What is the difference between BOPP and PET metallized films?", "BOPP (biaxially oriented polypropylene) and PET (polyethylene terephthalate) are both used for film capacitors but have different characteristics. BOPP has lower dielectric constant (2.2 vs 3.3) which results in lower capacitance density but also lower dissipation factor and better high-frequency performance. BOPP is preferred for AC applications and high-frequency filtering. PET has higher dielectric constant, providing higher capacitance density, and higher temperature rating (up to 125C vs 105C for BOPP). PET is preferred for DC applications and higher temperature environments. BOPP is generally lower cost and has better self-healing properties. For most AC motor and power electronics applications, BOPP is the preferred choice.", "Choose BOPP for AC applications, high-frequency filtering, and cost-sensitive designs. Choose PET for DC applications, higher temperature requirements, and when maximum capacitance density is needed.", ["BOPP vs PET", "polypropylene vs polyester", "film capacitor materials"]),
        generateFAQ("What does heavy edge metallization mean and why is it important?", "Heavy edge metallization refers to a thicker aluminum layer at the edge of the metallized film where the end spray contact is made. Standard metallization thickness is typically 8-15nm, while heavy edge metallization may be 20-40nm or more at the edge. This thicker edge provides several benefits: Lower contact resistance between the film and end spray, reducing ESR and heating. Improved current handling at the contact point. Better mechanical strength at the edge to prevent tearing during winding. More consistent electrical connection over the capacitor lifetime. Heavy edge design is particularly important for capacitors with high ripple current requirements, such as DC-link capacitors and motor run capacitors. Tongfeng's heavy edge films provide excellent performance in these demanding applications.", "For high current applications, always specify heavy edge metallization. Contact us for specific heavy edge thickness recommendations based on your current requirements.", ["heavy edge metallization", "capacitor ESR", "metallized film edge"]),
        generateFAQ("How do I select the appropriate film thickness for my capacitor?", "Film thickness selection depends on the voltage rating and application requirements. Thinner films (4-6um) provide higher capacitance density (more capacitance per volume) but lower voltage rating. Thicker films (8-12um) provide higher voltage rating but lower capacitance density. A general guideline is to use 4-5um for low voltage applications (<250V), 6-8um for medium voltage (250-450V), and 10-12um for high voltage (>450V). The dielectric strength of BOPP is approximately 400V/um, so a 6um film can theoretically withstand 2400V, but practical designs use 30-50% of this value for safety margin and lifetime considerations. For AC applications, consider the peak voltage (1.414 × RMS voltage) when selecting film thickness.", "Contact our FAE team with your voltage rating, application type, and size constraints for film thickness selection recommendations.", ["film thickness selection", "capacitor voltage rating", "BOPP thickness"]),
        generateFAQ("What is the shelf life of metallized films?", "Metallized films have a shelf life of typically 12-24 months when stored in proper conditions. Storage recommendations include: Temperature: 5C to 35C, ideally 20-25C. Humidity: 40-60% RH, avoid high humidity which can affect metallization. Protection from direct sunlight and UV exposure. Storage in original packaging until use. Avoid storage near corrosive chemicals or gases. Beyond the shelf life, the film may still be usable but should be tested for metallization adhesion and electrical properties before use. Films stored in high humidity may show oxidation of the aluminum metallization, which increases resistance and can affect capacitor performance. Always check the manufacturing date on the film packaging and use FIFO (first in, first out) inventory management.", "Store films in controlled conditions and use within recommended shelf life. Contact us for specific storage recommendations and shelf life information.", ["film shelf life", "metallized film storage", "capacitor film handling"]),
        generateFAQ("Can I get custom width or metallization patterns?", "Yes, Tongfeng offers customization options for metallized films including custom widths, metallization patterns, and margin configurations. Custom options include: Film widths from 20mm to 400mm. Segmented metallization patterns for specific capacitor designs. Custom margin widths for different voltage requirements. Different metallization thicknesses (light, standard, heavy). Tapered metallization for graded voltage distribution. Custom roll lengths and packaging. Minimum order quantities apply for custom specifications, typically 1000-5000kg depending on the customization. Lead times for custom films are typically 4-8 weeks. For standard sizes and specifications, off-the-shelf availability is better with shorter lead times.", "Contact us with your specific film requirements for custom quotation and lead time information.", ["custom metallized film", "film customization", "capacitor film manufacturing"]),
        generateFAQ("What quality controls are applied to metallized films?", "Tongfeng applies comprehensive quality controls to metallized films including: Raw material testing - polypropylene resin quality and consistency. Film thickness measurement - continuous monitoring during extrusion and stretching. Metallization thickness measurement - optical density monitoring during metallization. Margin accuracy - visual and automated inspection. Dielectric strength testing - sample testing from each batch. Mechanical property testing - tensile strength and elongation. Metallization adhesion testing - tape test and electrical resistance. Visual inspection - for defects, pinholes, and contamination. Each batch is traceable with certificates of analysis provided. Statistical process control ensures consistent quality from batch to batch.", "Tongfeng's comprehensive quality control ensures consistent film quality for reliable capacitor manufacturing. Contact us for quality certifications and test reports.", ["film quality control", "metallized film testing", "capacitor film certification"])
      ]
    },
    {
      partNumber: "TF-PET-6um-100mm",
      name: "PET Metallized Film",
      shortDescription: "TF-PET-6um-100mm polyethylene terephthalate metallized film for high temperature capacitor applications.",
      descriptionParagraphs: [
        "The TF-PET-6um-100mm is a high-quality polyethylene terephthalate (PET) film with aluminum metallization for high temperature capacitor manufacturing.",
        "This film offers higher temperature rating and higher dielectric constant compared to BOPP films.",
        "The PET material is ideal for DC applications and environments with elevated operating temperatures."
      ],
      specifications: {
        "Film Material": "Polyethylene Terephthalate (PET)",
        "Film Thickness": "6um",
        "Film Width": "100mm",
        "Metallization": "Aluminum, heavy edge",
        "Margin": "2.5mm standard",
        "Roll Length": "2000-4000m",
        "Dielectric Strength": "≥300V/um"
      },
      features: [
        "High temperature rating up to 125C",
        "Higher dielectric constant for increased capacitance density",
        "Excellent mechanical properties",
        "Good self-healing characteristics",
        "Suitable for DC and pulse applications",
        "Available with various metallization patterns"
      ],
      applications: [
        "DC-link capacitors",
        "Coupling and decoupling capacitors",
        "Pulse capacitors",
        "High temperature capacitors",
        "Automotive capacitors"
      ],
      faeReview: {
        author: "Sarah Li, FAE - Film Capacitor Applications",
        title: "FAE - Film Capacitor Applications",
        content: "The TF-PET-6um-100mm film is my recommendation for high temperature DC applications where BOPP films may not be suitable. The 125C temperature rating provides significant margin for automotive and industrial applications. While PET has higher dissipation factor than BOPP, this is generally not a concern for DC applications. The higher dielectric constant (3.3 vs 2.2) means you can achieve approximately 50% higher capacitance density compared to BOPP of the same thickness - this can be significant for space-constrained designs. I have used this film successfully in automotive DC-link capacitors where temperatures can exceed 100C. The film winds well and shows good self-healing behavior. One consideration: PET is generally not recommended for AC applications above a few hundred Hz due to higher losses. For DC or low-frequency AC applications requiring high temperature capability, this film is an excellent choice.",
        highlight: "High temperature rating and increased capacitance density make this ideal for automotive and industrial DC applications"
      },
      alternativeParts: [
        {
          partNumber: "TF-BOPP-6um-100mm",
          brand: "Tongfeng",
          specifications: { "Film Material": "BOPP", "Film Thickness": "6um", "Temperature Rating": "105C" },
          comparison: { "Material": "BOPP vs PET", "Dielectric Constant": "2.2 vs 3.3 (lower)", "Temperature": "105C vs 125C (lower)" },
          reason: "Lower cost alternative for lower temperature AC applications",
          useCase: "AC motor capacitors and applications with lower temperature requirements",
          link: "/tongfeng/products/metallized-films/tf-bopp-6um-100mm.html"
        },
        {
          partNumber: "TF-PET-8um-100mm",
          brand: "Tongfeng",
          specifications: { "Film Material": "PET", "Film Thickness": "8um", "Temperature Rating": "125C" },
          comparison: { "Thickness": "8um > 6um (+33%)", "Dielectric Strength": "Higher voltage capability", "Temperature": "125C = 125C" },
          reason: "Thicker film for higher voltage applications",
          useCase: "High voltage DC capacitors requiring PET material properties",
          link: "/tongfeng/products/metallized-films/tf-pet-8um-100mm.html"
        }
      ],
      companionParts: [
        { partNumber: "TF-BOPP-6um-100mm", description: "Polypropylene film for AC applications", category: "Metallized Films", link: "/tongfeng/products/metallized-films/tf-bopp-6um-100mm.html" },
        { partNumber: "Impregnation Oil", description: "Capacitor impregnation oil for oil-filled capacitors", category: "Capacitor Materials", link: "#" },
        { partNumber: "Aluminum Can", description: "Aluminum case for oil-filled capacitors", category: "Capacitor Components", link: "#" }
      ],
      faqs: [
        generateFAQ("When should I choose PET over BOPP film?", "Choose PET over BOPP when: Higher temperature rating is required (up to 125C vs 105C for BOPP). DC applications where higher dielectric constant provides capacitance density advantage. Space-constrained designs where maximum capacitance per volume is needed. Applications with moderate ripple current at lower frequencies. Cost is secondary to performance and reliability. Avoid PET for: High-frequency AC applications (>1kHz) where dissipation factor is important. Applications requiring the lowest possible ESR. Very high frequency switching applications. The higher dissipation factor of PET (0.5% vs 0.02% for BOPP) results in more heat generation under AC conditions.", "Select PET for high temperature DC applications and when maximum capacitance density is required. Select BOPP for AC applications and high frequency filtering.", ["PET vs BOPP selection", "high temperature film", "DC capacitor film"]),
        generateFAQ("What is the maximum operating temperature for PET film capacitors?", "PET film capacitors can operate at temperatures up to 125C, which is 20C higher than standard BOPP films (105C). However, for extended lifetime, it's recommended to operate at no more than 85-95C under normal conditions, with 125C reserved for short-term overload conditions. The temperature rating depends on the voltage stress and expected lifetime. At higher temperatures, the film's dielectric strength decreases and the self-healing properties change. For automotive applications with under-hood temperatures, PET's higher temperature rating provides valuable margin. Always consider the hottest spot temperature in the capacitor, which is typically at the center of the winding. Proper thermal design including adequate surface area and heat dissipation is essential for reliable high-temperature operation.", "Use PET film for applications requiring 105-125C operation. Implement proper thermal management to ensure the capacitor operates within safe temperature limits.", ["PET temperature rating", "high temperature capacitors", "film capacitor thermal"]),
        generateFAQ("Does PET film have different winding characteristics than BOPP?", "PET film has slightly different mechanical properties compared to BOPP, which affects winding characteristics. PET has higher tensile strength and modulus, making it slightly stiffer than BOPP. This can result in: More stable windings with less tendency for looseness or sagging. Slightly higher tension requirements during winding. Better dimensional stability at elevated temperatures. Less stretch during winding, which can be beneficial for maintaining consistent capacitance. The higher stiffness may require adjustment of winding machine tension settings. Winding speed may need to be slightly reduced compared to BOPP to prevent film damage. End spray adhesion is generally good with both materials. Overall, PET winds well with proper machine setup and is widely used for high-reliability capacitors.", "Adjust winding machine tension settings when switching between PET and BOPP films. Contact us for recommended winding parameters for Tongfeng films.", ["PET winding", "film capacitor manufacturing", "winding machine settings"]),
        generateFAQ("What is the typical capacitance density of PET vs BOPP film capacitors?", "PET film has a dielectric constant of approximately 3.3, compared to 2.2 for BOPP. This means that for the same film thickness and capacitor dimensions, a PET capacitor will have approximately 50% higher capacitance than a BOPP capacitor. For example, a capacitor using 6um BOPP film might have 10uF capacitance, while the same design using 6um PET film would have approximately 15uF. This higher capacitance density can be significant for space-constrained applications. However, note that PET is typically not used for AC applications above a few hundred Hz due to higher dissipation factor. For DC applications, the higher capacitance density of PET is a significant advantage. When comparing voltage ratings, both materials have similar dielectric strength, so the voltage capability is comparable for the same thickness.", "Use PET when maximum capacitance per unit volume is required for DC applications. The 50% higher capacitance density can significantly reduce capacitor size.", ["capacitance density", "PET dielectric constant", "capacitor volume"]),
        generateFAQ("Are there any special handling requirements for PET films?", "PET films have similar handling requirements to BOPP films with a few considerations: PET is more hygroscopic than BOPP, meaning it absorbs more moisture from the atmosphere. Store in controlled humidity conditions (40-60% RH). Higher stiffness means PET is slightly more susceptible to creasing if mishandled. Handle with care during loading onto winding machines. PET has higher static charge tendency than BOPP. Proper ionization equipment may be needed during unwinding. Recommended storage conditions are the same as BOPP: 5-35C, 40-60% RH, protected from UV light. Shelf life is typically 12-18 months under proper storage conditions. Once opened, use the roll within a reasonable time to prevent moisture absorption.", "Handle PET films with care to prevent creasing. Store in controlled humidity conditions and use appropriate static control measures during processing.", ["PET handling", "film storage", "capacitor manufacturing"]),
        generateFAQ("What metallization patterns are available for PET films?", "Tongfeng offers various metallization patterns for PET films including: Full area metallization - complete coverage for maximum capacitance. Heavy edge - thicker metallization at edges for improved current handling. Segmented (pattern) metallization - discrete metallized sections for specific capacitor designs. Tapered metallization - gradually varying thickness for voltage grading. Custom patterns - designed to customer specifications for specialized applications. The heavy edge pattern is most common for standard capacitors. Segmented patterns are used for safety capacitors and specific high-voltage designs. Custom patterns can be developed for unique applications with minimum order quantity requirements. All patterns can be produced with various metallization thicknesses from light to heavy.", "Contact us with your specific pattern requirements. Standard heavy edge patterns are available from stock, custom patterns require minimum order quantities.", ["metallization patterns", "segmented metallization", "custom film patterns"])
      ]
    }
  ]
};

productsData.categories.push(metallizedFilmsCategory);

// Category 4: Electronic Connectors
const electronicConnectorsCategory = {
  id: "electronic-connectors",
  name: "Electronic Connectors",
  description: "Precision electronic connectors and crystal resonators for various electronic applications",
  longDescription: "Tongfeng electronic connectors and crystal resonators provide reliable connections and frequency control for consumer electronics, industrial equipment, and automotive applications. The product range includes board-to-board connectors, wire-to-board connectors, and quartz crystal resonators in various package sizes and frequencies. As a Tongfeng capacitor distributor, we also provide access to their connector and crystal product lines with comprehensive selection guidance. These components complement Tongfeng's capacitor products to provide complete solutions for electronic system design. Our component selection guide helps engineers choose the optimal connectors and crystals for their specific application requirements.",
  parameters: ["Connector Type", "Pin Count", "Current Rating", "Voltage Rating", "Pitch", "Package Size"],
  applications: ["Consumer Electronics", "Industrial Equipment", "Automotive Electronics", "Communication Devices", "Home Appliances"],
  selectionGuide: {
    title: "Connector and Crystal Selection Guide",
    description: "Learn how to select the right connectors and crystals for your electronic design",
    articleId: "connector-crystal-selection",
    articleLink: "/tongfeng/support/connector-crystal-selection.html"
  },
  products: [
    {
      partNumber: "TF-CR-3225-8MHz",
      name: "Quartz Crystal Resonator",
      shortDescription: "TF-CR-3225-8MHz quartz crystal resonator in 3.2×2.5mm SMD package with 8MHz fundamental frequency.",
      descriptionParagraphs: [
        "The TF-CR-3225-8MHz is a high-precision quartz crystal resonator in a compact 3.2×2.5mm surface mount package.",
        "This crystal provides stable 8MHz frequency reference for microcontrollers, communication devices, and consumer electronics.",
        "The ceramic package with metal lid provides excellent environmental protection and reliability."
      ],
      specifications: {
        "Frequency": "8.000MHz",
        "Package": "3.2×2.5mm SMD",
        "Frequency Tolerance": "±30ppm @ 25C",
        "Frequency Stability": "±50ppm (-20C to +70C)",
        "Load Capacitance": "20pF",
        "Equivalent Resistance": "≤80Ω",
        "Drive Level": "10-100uW"
      },
      features: [
        "Compact 3.2×2.5mm surface mount package",
        "Excellent frequency stability over temperature",
        "Low equivalent series resistance",
        "Ceramic package with hermetic seal",
        "RoHS compliant and Pb-free",
        "Suitable for automatic mounting"
      ],
      applications: [
        "Microcontroller clock source",
        "USB devices",
        "Consumer electronics",
        "Communication equipment",
        "Industrial controls",
        "Automotive electronics"
      ],
      faeReview: {
        author: "Kevin Zhao, FAE - Frequency Control Products",
        title: "FAE - Frequency Control Products",
        content: "The TF-CR-3225-8MHz crystal provides reliable frequency reference at a competitive price point. In my experience, this crystal offers stability and accuracy comparable to Japanese and Taiwanese brands but at lower cost. The 3.2×2.5mm package is a standard size with good availability of sockets and test fixtures. For microcontroller applications, I recommend using the specified 20pF load capacitance - using incorrect load caps will shift the frequency and may cause timing issues. The ±30ppm tolerance is suitable for most microcontroller and communication applications. For applications requiring tighter tolerance (±10ppm or better), consider specifying a higher grade or using a temperature-compensated crystal (TCXO). I've successfully used these crystals in USB applications, home appliance controllers, and industrial monitoring systems with excellent results. The crystals start reliably and show good aging characteristics.",
        highlight: "Reliable frequency stability and compact package make this ideal for microcontroller and consumer electronics applications"
      },
      alternativeParts: [
        {
          partNumber: "TF-CR-3225-16MHz",
          brand: "Tongfeng",
          specifications: { "Frequency": "16.000MHz", "Package": "3.2×2.5mm SMD", "Load Capacitance": "20pF" },
          comparison: { "Frequency": "16MHz > 8MHz (2× higher)", "Package": "3.2×2.5mm = 3.2×2.5mm (same)", "Load Capacitance": "20pF = 20pF (same)" },
          reason: "Higher frequency for faster microcontroller or communication applications",
          useCase: "High-speed microcontrollers, USB 2.0 applications, or faster communication interfaces",
          link: "/tongfeng/products/electronic-connectors/tf-cr-3225-16mhz.html"
        },
        {
          partNumber: "TF-CR-2520-8MHz",
          brand: "Tongfeng",
          specifications: { "Frequency": "8.000MHz", "Package": "2.5×2.0mm SMD", "Load Capacitance": "12pF" },
          comparison: { "Frequency": "8MHz = 8MHz (same)", "Package": "2.5×2.0mm < 3.2×2.5mm (smaller)", "Load Capacitance": "12pF vs 20pF (different)" },
          reason: "Smaller package for space-constrained applications",
          useCase: "Wearable devices, compact electronics, or applications with limited PCB space",
          link: "/tongfeng/products/electronic-connectors/tf-cr-2520-8mhz.html"
        }
      ],
      companionParts: [
        { partNumber: "Load Capacitor 22pF", description: "Ceramic capacitor for crystal load capacitance", category: "Passive Components", link: "#" },
        { partNumber: "TF-CR-3225-32.768kHz", description: "32.768kHz crystal for real-time clock applications", category: "Electronic Connectors", link: "/tongfeng/products/electronic-connectors/tf-cr-3225-32768khz.html" },
        { partNumber: "MCU Development Board", description: "Microcontroller board for crystal evaluation", category: "Development Tools", link: "#" }
      ],
      faqs: [
        generateFAQ("How do I calculate the load capacitance for a crystal?", "The load capacitance (CL) is the effective capacitance seen by the crystal in the oscillator circuit. It is calculated as CL = (C1 × C2) / (C1 + C2) + Cstray, where C1 and C2 are the external load capacitors and Cstray is the stray capacitance of the PCB and IC pins (typically 3-7pF). For a crystal specifying 20pF load capacitance, and assuming 5pF stray capacitance, you would calculate: 20pF = (C × C) / (C + C) + 5pF, which gives C = 30pF for each capacitor. In practice, use standard values like 22pF or 33pF and measure the actual oscillation frequency. Adjust the capacitor values if the frequency is off. Using load capacitors that are too large increases power consumption and may prevent oscillation. Using values that are too small results in frequency higher than specified and may affect stability.", "Use the formula CL = (C1 × C2) / (C1 + C2) + Cstray to calculate load capacitors. Start with standard values and adjust based on frequency measurement.", ["crystal load capacitance", "oscillator design", "crystal calculation"]),
        generateFAQ("What is the difference between a crystal and an oscillator?", "A crystal (quartz crystal resonator) is a passive component that provides frequency reference when used with an external oscillator circuit (typically inside a microcontroller or separate IC). The crystal requires external circuitry to oscillate. An oscillator (crystal oscillator or XO) is a complete active module containing the crystal, oscillator circuit, and buffer in a single package. It provides a clock output directly without external components. Crystals are lower cost and lower power but require external circuitry. Oscillators are easier to use (just connect power and get clock output) but are more expensive and consume more power. Choose crystals for cost-sensitive designs with available oscillator circuitry. Choose oscillators for simplicity, guaranteed startup, or when the IC lacks internal oscillator circuitry.", "Choose crystals for cost-sensitive designs with microcontroller internal oscillators. Choose oscillators for guaranteed startup and simplified design.", ["crystal vs oscillator", "XO vs XTAL", "clock source selection"]),
        generateFAQ("What is frequency tolerance and frequency stability?", "Frequency tolerance is the maximum deviation from the nominal frequency at a specific temperature, typically 25C. For example, ±30ppm tolerance at 25C means the actual frequency will be within ±30 parts per million of 8MHz (±240Hz) at room temperature. Frequency stability is the maximum deviation over the operating temperature range. For example, ±50ppm stability from -20C to +70C means the frequency may shift by up to ±50ppm (±400Hz for 8MHz) as temperature changes. These specifications are important for applications requiring precise timing. For UART communication at 115200 baud, ±1% accuracy is typically sufficient. For USB, ±0.25% (2500ppm) is required. For precision timing or high-speed communication, tighter tolerances may be needed.", "Select frequency tolerance based on your application's timing accuracy requirements. Contact us for recommendations on crystal specifications for specific communication protocols.", ["frequency tolerance", "frequency stability", "crystal accuracy"]),
        generateFAQ("Can I use a crystal with different load capacitance than specified?", "Using a crystal with different load capacitance than specified will cause the oscillation frequency to shift. If the actual load capacitance is higher than specified, the frequency will be lower. If the actual load capacitance is lower, the frequency will be higher. The relationship is approximately: Δf/f ≈ -0.5 × (CLactual - CLspecified) / CLspecified. For example, using 30pF load instead of 20pF specified would shift the frequency down by approximately 0.25% or 2500ppm. This may be acceptable for some applications but could cause timing issues for communication protocols. It's best to use the specified load capacitance. If you must use a different value, measure the actual oscillation frequency and verify it meets your application requirements. Some applications can tolerate frequency shifts better than others.", "Always use the specified load capacitance for best accuracy. If different values must be used, measure and verify the actual oscillation frequency.", ["crystal load capacitance", "frequency shift", "crystal matching"]),
        generateFAQ("What is the drive level and why is it important?", "Drive level is the power dissipated in the crystal during oscillation, typically specified in microwatts (uW). The TF-CR-3225-8MHz has a maximum drive level of 100uW. Exceeding the maximum drive level can cause: Frequency shift due to crystal heating. Accelerated aging and reduced lifetime. In extreme cases, crystal damage or fracture. Insufficient drive level can result in: Failure to start oscillating. Unreliable startup, especially at temperature extremes. High phase noise or jitter. The actual drive level depends on the oscillator circuit design and supply voltage. Most microcontroller internal oscillators provide appropriate drive levels. For discrete oscillator designs, calculate or measure the drive level to ensure it's within the crystal's specifications. If the drive level is too high, add a series resistor to limit current.", "Ensure the oscillator circuit provides drive level within the crystal's specified range. Contact us for drive level measurement and circuit design assistance.", ["crystal drive level", "oscillator power", "crystal safety"]),
        generateFAQ("What is the difference between fundamental and overtone crystals?", "Fundamental mode crystals oscillate at their fundamental resonant frequency, which is the frequency marked on the crystal. Overtone crystals are designed to operate at a harmonic (multiple) of the fundamental frequency. For example, a 24MHz overtone crystal might have a fundamental frequency of 8MHz but is designed to operate at the 3rd overtone (24MHz). Fundamental mode crystals are used for frequencies typically below 30-50MHz. Overtone crystals are used for higher frequencies where fundamental mode crystals would be too thin and fragile. The oscillator circuit must be designed for the specific mode - fundamental mode circuits won't work with overtone crystals and vice versa. Most common microcontroller crystals are fundamental mode. Overtone crystals are typically used for RF and high-frequency applications. The TF-CR series are fundamental mode crystals suitable for most microcontroller applications.", "Use fundamental mode crystals for frequencies below 30MHz. Use overtone crystals for higher frequencies with appropriate oscillator circuit design.", ["fundamental crystal", "overtone crystal", "crystal modes"])
      ]
    },
    {
      partNumber: "TF-CONN-2.54-10P",
      name: "Board-to-Board Connector",
      shortDescription: "TF-CONN-2.54-10P 2.54mm pitch board-to-board connector with 10 pins for electronic interconnections.",
      descriptionParagraphs: [
        "The TF-CONN-2.54-10P is a reliable board-to-board connector with 2.54mm standard pitch and 10 pins.",
        "This connector provides secure electrical connections between PCBs in consumer electronics and industrial equipment.",
        "The phosphor bronze contacts with gold plating ensure low contact resistance and long mating life."
      ],
      specifications: {
        "Connector Type": "Board-to-Board",
        "Pitch": "2.54mm",
        "Pin Count": "10",
        "Current Rating": "3A per pin",
        "Voltage Rating": "250V AC/DC",
        "Contact Material": "Phosphor Bronze",
        "Plating": "Gold over Nickel",
        "Mating Cycles": "≥500"
      },
      features: [
        "Standard 2.54mm pitch for compatibility",
        "High current capacity up to 3A per pin",
        "Gold plated contacts for reliability",
        "Polarized design prevents mis-mating",
        "Operating temperature -40C to +105C",
        "UL94 V-0 housing material"
      ],
      applications: [
        "PCB interconnections",
        "Industrial controls",
        "Consumer electronics",
        "Power supplies",
        "Communication equipment",
        "Test and measurement"
      ],
      faeReview: {
        author: "Tom Huang, FAE - Interconnect Products",
        title: "FAE - Interconnect Products",
        content: "The TF-CONN-2.54-10P connector provides reliable board-to-board connections at a competitive price point. The 2.54mm pitch is a standard that provides good balance between density and ease of assembly. I have used these connectors in various industrial and consumer applications with good results. The 3A current rating per pin is sufficient for most signal and moderate power applications. For higher current, multiple pins can be paralleled. The gold plating provides reliable contact over the rated 500 mating cycles. One consideration: ensure proper PCB mounting with adequate solder fillets for mechanical strength. For high-vibration applications, consider adding mechanical retention features or using additional mounting hardware. The polarized design helps prevent mis-mating during assembly. Overall, this is a cost-effective solution for board-to-board connections where high density is not required.",
        highlight: "Standard pitch and reliable contacts make this ideal for board-to-board connections in industrial and consumer applications"
      },
      alternativeParts: [
        {
          partNumber: "TF-CONN-2.54-20P",
          brand: "Tongfeng",
          specifications: { "Pitch": "2.54mm", "Pin Count": "20", "Current Rating": "3A per pin" },
          comparison: { "Pin Count": "20 > 10 (+10 pins)", "Pitch": "2.54mm = 2.54mm (same)", "Current Rating": "3A = 3A (same)" },
          reason: "More pins for applications requiring additional signals or power",
          useCase: "Complex PCB interconnections or applications with many signal lines",
          link: "/tongfeng/products/electronic-connectors/tf-conn-2.54-20p.html"
        },
        {
          partNumber: "TF-CONN-2.00-10P",
          brand: "Tongfeng",
          specifications: { "Pitch": "2.00mm", "Pin Count": "10", "Current Rating": "2A per pin" },
          comparison: { "Pin Count": "10 = 10 (same)", "Pitch": "2.00mm < 2.54mm (denser)", "Current Rating": "2A < 3A (lower)" },
          reason: "Smaller pitch for space-constrained applications",
          useCase: "Compact electronics where PCB space is limited",
          link: "/tongfeng/products/electronic-connectors/tf-conn-2.00-10p.html"
        }
      ],
      companionParts: [
        { partNumber: "Mating Connector", description: "Matching female connector for board-to-board connection", category: "Connectors", link: "#" },
        { partNumber: "Mounting Hardware", description: "Screws and standoffs for mechanical support", category: "Hardware", link: "#" },
        { partNumber: "Crimp Tool", description: "Tool for contact crimping if applicable", category: "Tools", link: "#" }
      ],
      faqs: [
        generateFAQ("What is the difference between board-to-board and wire-to-board connectors?", "Board-to-board (BTB) connectors connect two printed circuit boards together, typically in a vertical or parallel configuration. They have mating contacts on both sides and are soldered to each PCB. Wire-to-board (WTB) connectors connect wires to a PCB, with contacts on one side for wires and the other side for PCB mounting. BTB connectors are used for: Modular designs with multiple PCBs. Stacking boards in limited space. Connecting main board to daughter boards. WTB connectors are used for: External connections to the PCB. Power input and signal I/O. Removable connections for service. Choose BTB for internal PCB-to-PCB connections. Choose WTB for external connections and interfaces.", "Select board-to-board connectors for internal PCB connections. Select wire-to-board for external connections and I/O interfaces.", ["board-to-board connector", "wire-to-board connector", "connector types"]),
        generateFAQ("How do I determine the current capacity for my connector application?", "Connector current capacity depends on several factors: Rated current per contact - typically specified in the datasheet (e.g., 3A for TF-CONN-2.54). Number of contacts carrying current - parallel contacts share current. Ambient temperature - higher temperature reduces current capacity. Wire gauge - for WTB connectors, wire size affects current. Contact resistance - higher resistance causes heating at current. For the TF-CONN-2.54-10P with 3A per pin rating: A single pin can carry 3A at room temperature. Multiple pins can be paralleled for higher current (e.g., 3 pins = 9A capacity). Derate by 20-30% for high temperature applications. Always verify the temperature rise under actual operating conditions. For safety-critical applications, use additional derating margin.", "Calculate total current requirement and divide by current per pin. Use multiple pins in parallel for high current. Apply temperature derating as needed.", ["connector current rating", "contact current capacity", "connector derating"]),
        generateFAQ("What is contact plating and why does it matter?", "Contact plating is a thin layer of metal applied to the base contact material to improve performance. Common plating materials include: Gold - excellent corrosion resistance, low contact resistance, best for reliability. Tin - lower cost, good for low-frequency signals, subject to fretting corrosion. Nickel - underplating for hardness and diffusion barrier. Silver - excellent conductivity, tarnishes in sulfur environments. The TF-CONN series uses gold plating over nickel for optimal performance. Gold plating benefits include: Stable contact resistance over time and mating cycles. Excellent corrosion resistance in harsh environments. No oxide formation ensuring reliable contact. Suitable for low-level signals and dry circuits. Higher cost but justified for reliability-critical applications. For consumer electronics with short life and benign environments, tin plating may be acceptable.", "Choose gold plating for high reliability, harsh environments, and long service life. Tin plating may be acceptable for cost-sensitive consumer applications.", ["contact plating", "gold plating", "connector reliability"]),
        generateFAQ("What are the key considerations for connector PCB layout?", "Proper PCB layout ensures reliable connector performance: Pad size - follow manufacturer's recommendations for proper solder joint strength. Keep-out areas - ensure clearance for connector housing and mating. Trace width - size traces appropriately for current carrying capacity. Via placement - use multiple vias for high current paths to inner layers. Solder mask - ensure proper mask definition around pads. Silkscreen - mark pin 1 and connector orientation for assembly. Mechanical support - for large connectors, consider additional mounting holes. High-speed signals - for high-speed connectors, follow impedance control and length matching guidelines. Power and ground - provide adequate power and ground pins to minimize voltage drop. Always review the connector datasheet for specific layout recommendations and reference designs.", "Follow manufacturer layout guidelines for pad size, keep-out areas, and trace routing. Contact us for layout review and recommendations.", ["connector layout", "PCB footprint", "connector design guide"]),
        generateFAQ("How many mating cycles can a connector withstand?", "Mating cycle life depends on connector type, contact plating, and application conditions. Typical ratings include: Consumer grade - 50-100 cycles. Industrial grade - 250-500 cycles. High reliability - 1000+ cycles. The TF-CONN series is rated for 500 mating cycles with gold plating. Factors affecting cycle life: Contact plating material and thickness - gold provides best durability. Contact normal force - higher force increases wear but improves reliability. Environmental conditions - dust, moisture, and vibration reduce life. Mating alignment - misalignment causes accelerated wear. Current through contacts - arcing during mating/unmating damages plating. For applications requiring frequent mating, choose connectors with higher cycle ratings and consider using protective covers when unmated.", "Select connector cycle rating based on expected mating frequency in your application. Use protective measures to extend connector life in harsh environments.", ["mating cycles", "connector durability", "connector life"]),
        generateFAQ("What environmental factors affect connector reliability?", "Environmental factors significantly impact connector reliability: Temperature - high temperature accelerates material aging and reduces current capacity. Humidity - moisture can cause corrosion and leakage currents. Vibration and shock - mechanical stress can cause fretting corrosion and contact loosening. Dust and contamination - particles interfere with contact mating. Chemical exposure - corrosive gases and liquids attack contact plating. UV exposure - degrades plastic housings over time. The TF-CONN series is rated for -40C to +105C operation. For harsh environments: Use sealed connectors for moisture protection. Select appropriate plating for chemical exposure. Add mechanical retention for high vibration. Use protective covers when connectors are unmated. Consider conformal coating for additional protection. Always specify connectors based on the actual operating environment, not just nominal conditions.", "Consider all environmental factors in your application when selecting connectors. Contact us for recommendations on harsh environment applications.", ["environmental rating", "connector sealing", "harsh environment connectors"])
      ]
    }
  ]
};

productsData.categories.push(electronicConnectorsCategory);

// Save updated products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('✅ Added all 4 categories to products.json');
console.log('   - AC Motor Capacitors: 2 products');
console.log('   - Power Electronics Capacitors: 2 products');
console.log('   - Metallized Films: 2 products');
console.log('   - Electronic Connectors: 2 products');
console.log('   - Total: 8 products with 6 FAQs each');
console.log('   - Root FAQs: 5');
