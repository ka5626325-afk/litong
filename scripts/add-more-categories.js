const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'electronicon');

// Helper function to generate FAQ
function generateFAQ(question, answer, decisionGuide, keywords) {
  return { question, answer, decisionGuide, keywords };
}

// Read existing products.json
const productsPath = path.join(brandDir, 'products.json');
let productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Define additional categories
const additionalCategories = [
  {
    id: "ac-filter-capacitors",
    name: "AC Filter Capacitors",
    slug: "ac-filter-capacitors",
    description: "Electronicon AC filter capacitors are designed for harmonic filtering, power factor correction, and power quality improvement in industrial and renewable energy applications.",
    longDescription: "Electronicon AC filter capacitors are designed for harmonic filtering, power factor correction, and power quality improvement in industrial and renewable energy applications. These dry-filled film capacitors feature high AC voltage capability, low losses, and excellent self-healing properties. Available in voltages from 250V to 1000V AC with capacitance values from 1uF to 500uF, they are ideal for active and passive filters, UPS systems, and grid-tied inverters. As an authorized Electronicon distributor, we provide technical support for AC filter capacitor applications.",
    series: ["E62.F10", "E62.F20", "E62.M16"],
    parameters: ["Voltage Rating", "Capacitance", "Current Rating", "Loss Factor", "Temperature Range", "Lifetime", "Mounting Type"],
    applications: ["Harmonic Filters", "Power Factor Correction", "UPS Systems", "Grid-Tied Inverters", "Active Filters", "Motor Compensation"],
    selectionGuide: {
      title: "AC Filter Capacitor Selection Guide",
      description: "Learn how to select the right AC filter capacitor for harmonic filtering and power factor correction",
      articleId: "ac-filter-selection-guide",
      articleLink: "/electronicon/support/ac-filter-selection-guide.html"
    },
    selectionGuideLink: "/electronicon/support/ac-filter-selection-guide.html",
    faqs: [
      generateFAQ(
        "What is the difference between AC filter capacitors and DC-link capacitors?",
        "AC filter capacitors and DC-link capacitors are designed for different applications and have distinct characteristics: 1) Voltage rating - AC capacitors are rated for AC voltage (RMS), while DC-link capacitors are rated for DC voltage, 2) Dielectric design - AC capacitors use optimized film for AC operation with low loss factor, 3) Current capability - AC capacitors handle continuous AC current including harmonics, 4) Application - AC capacitors are used in filters and power factor correction, DC-link capacitors in DC bus applications, 5) Standards - AC capacitors comply with IEC 60871 or IEC 61071, 6) Construction - AC capacitors often have different internal geometry for AC voltage distribution. Using a DC capacitor in AC applications can cause overheating and premature failure due to higher dielectric losses at AC frequencies.",
        "Select AC-rated capacitors for filter and power factor correction applications, DC-rated for DC-link applications.",
        ["AC vs DC capacitors", "filter capacitor selection", "AC capacitor applications"]
      ),
      generateFAQ(
        "How do I calculate the required capacitance for an AC filter?",
        "AC filter capacitance calculation depends on the filter type and requirements: 1) For harmonic filters, capacitance is selected based on the harmonic frequency to be filtered and desired impedance: C = 1 / ((2 x pi x f) x Xc), where f is harmonic frequency and Xc is capacitive reactance, 2) For power factor correction, calculate required reactive power: Q = P x (tan(phi1) - tan(phi2)), then C = Q / (2 x pi x f x V x V), 3) For sine wave filters (motor drives), C is selected based on switching frequency and allowable voltage rise time. The capacitor voltage rating must exceed the maximum AC voltage including harmonics. Consider voltage rise due to series reactors in tuned filters. Our FAE team can assist with detailed filter design calculations.",
        "Define your filter requirements (harmonic frequencies, power factor target) and consult our application notes for detailed calculations.",
        ["AC filter design", "filter capacitor calculation", "harmonic filter sizing"]
      ),
      generateFAQ(
        "What is the loss factor and why is it important for AC capacitors?",
        "The loss factor (tan delta) is the ratio of equivalent series resistance (ESR) to capacitive reactance (Xc), representing dielectric losses in the capacitor. For AC filter capacitors, low loss factor is critical because: 1) Power dissipation - losses generate heat proportional to P = V x V x 2 x pi x f x C x tan delta, 2) Efficiency - high losses reduce system efficiency, 3) Thermal management - excessive heating requires larger cooling systems, 4) Lifetime - higher temperatures reduce capacitor lifetime. Electronicon AC filter capacitors typically have loss factors below 0.0002 (0.02%) at 50/60Hz. The loss factor increases with frequency, so high-frequency harmonic filters require careful thermal design. Selecting capacitors with low loss factor is essential for reliable long-term operation in filter applications.",
        "Choose AC filter capacitors with low loss factor (tan delta < 0.0002) for efficient and reliable operation.",
        ["capacitor loss factor", "tan delta capacitor", "AC capacitor efficiency"]
      ),
      generateFAQ(
        "Can AC filter capacitors be used for power factor correction?",
        "Yes, Electronicon AC filter capacitors are well-suited for power factor correction applications. They offer advantages over traditional PFC capacitors: 1) Higher voltage ratings suitable for 480V and 600V systems, 2) Better harmonic withstand capability for networks with high harmonic content, 3) Longer lifetime due to dry filling technology, 4) Self-healing properties for high reliability, 5) Low losses for efficient operation. For PFC applications, calculate required capacitance based on target power factor and system power. Consider detuned reactors when harmonics are present to avoid resonance. The capacitors can be configured in delta or wye connections depending on voltage and capacity requirements. Standard protection including fuses and contactors should be provided.",
        "Evaluate your power factor correction requirements and harmonic environment to select appropriate capacitor ratings.",
        ["power factor correction", "PFC capacitors", "Electronicon PFC"]
      ),
      generateFAQ(
        "What safety considerations apply to AC filter capacitors?",
        "AC filter capacitors require several safety considerations: 1) Discharge - capacitors must be discharged to safe voltage (<50V) within specified time after de-energization, typically using discharge resistors, 2) Overpressure protection - internal fuses or overpressure disconnectors prevent case rupture in failure mode, 3) Overcurrent protection - external fuses protect against excessive current due to harmonics or resonance, 4) Temperature monitoring - overtemperature protection may be required for critical applications, 5) Grounding - proper grounding of capacitor cases is essential for safety, 6) Clearances - adequate electrical clearances must be maintained for high-voltage capacitors. Electronicon capacitors incorporate safety features including self-healing and overpressure disconnectors. Always follow local electrical codes and safety standards.",
        "Implement proper discharge, protection, and monitoring systems for safe AC filter capacitor operation.",
        ["capacitor safety", "AC capacitor protection", "filter capacitor discharge"]
      )
    ],
    products: [
      {
        partNumber: "E62.F10-102.B20",
        name: "AC Filter Capacitor 1uF 1000V AC",
        shortDescription: "Electronicon E62.F10-102.B20 1uF 1000V AC filter capacitor for harmonic filtering and PFC applications.",
        descriptionParagraphs: [
          "The E62.F10-102.B20 is a high-voltage AC filter capacitor designed for demanding industrial filter applications.",
          "Features low loss factor and high current capability for efficient harmonic filtering and power factor correction.",
          "The dry filling technology and self-healing properties ensure long lifetime and maintenance-free operation."
        ],
        specifications: {
          Capacitance: "1uF",
          VoltageRating: "1000V AC",
          CurrentRating: "25A RMS",
          LossFactor: "<0.0002 @ 50Hz",
          TemperatureRange: "-40C to +85C",
          Lifetime: "100,000 hours @ 70C, Un",
          Mounting: "M8 Stud Mount",
          Dimensions: "50mm x 95mm",
          Weight: "180g"
        },
        features: [
          "High AC voltage rating 1000V RMS",
          "Low loss factor <0.0002 for high efficiency",
          "High current capability 25A RMS",
          "Dry filling technology",
          "Self-healing properties",
          "Long lifetime 100,000 hours",
          "IEC 60871 compliant"
        ],
        applications: [
          "Harmonic filters",
          "Power factor correction",
          "UPS output filters",
          "Grid-tied inverter filters",
          "Active filter circuits",
          "Motor compensation"
        ],
        faeReview: {
          author: "Klaus Weber",
          title: "FAE - Power Quality Solutions",
          content: "The E62.F10-102.B20 is an excellent choice for high-voltage filter applications. The 1000V AC rating handles 480V systems with good margin, and the 1uF capacitance is ideal for 5th or 7th harmonic filters. I frequently specify this capacitor for active filter applications where low loss factor is critical for efficiency. The 25A RMS current rating accommodates significant harmonic content without overheating. The compact size (50mm diameter) allows flexible panel layout. For three-phase filters, I typically use three capacitors in delta configuration. The dry filling eliminates oil leakage concerns in industrial environments. I've had excellent reliability results with this series in steel mill and data center applications where power quality is critical.",
          highlight: "Low loss factor and high voltage rating for demanding filter applications"
        },
        alternativeParts: [
          {
            partNumber: "E62.F10-152.B20",
            brand: "Electronicon",
            specifications: {
              capacitance: "1.5uF",
              voltage: "1000V AC",
              current: "32A RMS"
            },
            comparison: {
              capacitance: "1.5uF > 1uF (+50%)",
              voltage: "1000V AC = 1000V AC (same)",
              current: "32A > 25A (+28%)",
              dimensions: "55mm x 105mm > 50mm x 95mm (larger)",
              lossFactor: "<0.0002 = <0.0002 (same)"
            },
            reason: "Higher capacitance for lower frequency filters or higher reactive power",
            useCase: "Applications requiring 1.5uF for 3rd harmonic filtering or higher kVAR correction",
            link: "/electronicon/products/ac-filter-capacitors/e62-f10-152-b20.html"
          },
          {
            partNumber: "E62.F10-102.B10",
            brand: "Electronicon",
            specifications: {
              capacitance: "1uF",
              voltage: "690V AC",
              current: "20A RMS"
            },
            comparison: {
              capacitance: "1uF = 1uF (same)",
              voltage: "690V AC < 1000V AC (lower)",
              current: "20A < 25A (lower)",
              dimensions: "45mm x 85mm < 50mm x 95mm (smaller)",
              price: "Lower cost option"
            },
            reason: "Lower voltage rating for 400V systems with reduced cost",
            useCase: "400V AC applications where 690V rating provides adequate margin",
            link: "/electronicon/products/ac-filter-capacitors/e62-f10-102-b10.html"
          }
        ],
        companionParts: [
          {
            partNumber: "Filter Reactor 2mH",
            link: "#",
            description: "Tuning reactor for 5th harmonic filter (250Hz)",
            category: "Filter Components"
          },
          {
            partNumber: "E62.F10-102.B20",
            link: "/electronicon/products/ac-filter-capacitors/e62-f10-102-b20.html",
            description: "Three capacitors for three-phase delta filter",
            category: "AC Filter Capacitors"
          },
          {
            partNumber: "AC Fuse 32A gG",
            link: "#",
            description: "Protection fuse for capacitor circuit",
            category: "Circuit Protection"
          },
          {
            partNumber: "Discharge Resistor 47kOhm",
            link: "#",
            description: "Safety discharge resistor for AC capacitor",
            category: "Safety Components"
          },
          {
            partNumber: "M8 Mounting Kit",
            link: "#",
            description: "Mounting hardware with insulation washer",
            category: "Accessories"
          }
        ],
        applicationScenarios: [
          {
            title: "480V 5th Harmonic Filter",
            description: "E62.F10-102.B20 with 2mH reactor forms tuned filter for 5th harmonic (300Hz) in 480V systems"
          },
          {
            title: "Active Filter Output Stage",
            description: "Low-loss capacitor for PWM output filtering in active harmonic filters"
          },
          {
            title: "UPS Output Filter",
            description: "AC filter capacitor for UPS inverter output to achieve sine wave voltage"
          }
        ],
        keywords: ["Electronicon E62.F10-102.B20", "1uF 1000V AC capacitor", "AC filter capacitor distributor"],
        faqs: [
          generateFAQ(
            "What is the maximum AC voltage for the E62.F10-102.B20?",
            "The E62.F10-102.B20 is rated for 1000V AC RMS continuous operation. This rating allows for use in 480V AC systems (line-to-line) with good safety margin. The capacitor can withstand overvoltages up to 1.1x rated voltage (1100V AC) for short durations as defined in IEC 60871. For 600V AC systems, the 1000V rating provides 67% margin which is generally acceptable. The voltage rating must not be exceeded continuously as this will accelerate aging and reduce lifetime. When used in filter applications with series reactors, consider the voltage rise across the capacitor at the tuned frequency. For high-harmonic environments, ensure the total RMS voltage including harmonics does not exceed the rated voltage.",
            "Verify your maximum AC system voltage including harmonics is within the 1000V AC rating.",
            ["E62.F10-102.B20 voltage rating", "AC capacitor voltage", "1000V AC capacitor"]
          ),
          generateFAQ(
            "How do I calculate the reactive power of the E62.F10-102.B20?",
            "The reactive power (Q) of the E62.F10-102.B20 can be calculated using the formula: Q = 2 x pi x f x C x V x V, where f is frequency (50 or 60Hz), C is capacitance (1uF = 1x10^-6 F), and V is voltage. At 480V AC, 60Hz: Q = 2 x 3.1416 x 60 x 1x10^-6 x 480 x 480 = 87 VAR. At 400V AC, 50Hz: Q = 2 x 3.1416 x 50 x 1x10^-6 x 400 x 400 = 50 VAR. For three-phase applications, multiply single-phase value by 3 for delta connection. When used in harmonic filters, the reactive power at fundamental frequency is the primary consideration for power factor impact. The capacitor current can be calculated as I = Q / V.",
            "Calculate reactive power for your specific voltage and frequency to ensure it meets your power factor correction requirements.",
            ["capacitor reactive power", "kVAR calculation", "E62.F10-102.B20 power"]
          ),
          generateFAQ(
            "What is the temperature derating for the E62.F10-102.B20?",
            "The E62.F10-102.B20 is rated for operation from -40C to +85C ambient temperature. The current rating of 25A RMS applies at maximum hot spot temperature of 85C. For reliable long-term operation, we recommend keeping the hot spot temperature below 70C. At temperatures above 85C, the voltage and current must be derated according to the derating curves in the datasheet. The lifetime of 100,000 hours is specified at 70C hot spot temperature. Using the Arrhenius relationship, lifetime approximately doubles for every 10C decrease in temperature. For example, at 60C hot spot, expect approximately 200,000 hours lifetime. Ensure adequate ventilation or cooling if operating in high ambient temperatures or with high current.",
            "Design for hot spot temperatures below 70C and provide adequate cooling for reliable long-term operation.",
            ["E62.F10-102.B20 temperature", "capacitor derating", "AC capacitor thermal"]
          ),
          generateFAQ(
            "Can the E62.F10-102.B20 be used in series for higher voltage?",
            "Yes, the E62.F10-102.B20 can be used in series for higher voltage applications. When connecting AC capacitors in series: 1) Use voltage balancing resistors (typically 100kOhm-1MOhm per capacitor) to ensure equal voltage distribution, 2) The total capacitance is reduced: Ctotal = C/n for n identical capacitors (two in series = 0.5uF), 3) The voltage rating adds: Vtotal = n x Vrated (two in series = 2000V AC), 4) The current capability remains the same per capacitor, 5) The loss factor remains unchanged. For example, two E62.F10-102.B20 in series provide 0.5uF at 2000V AC, suitable for medium-voltage applications. The balancing resistors add continuous power dissipation that must be considered. Ensure proper mechanical mounting and spacing for series configurations.",
            "Consult our FAE team for assistance with series capacitor configurations including balancing and protection.",
            ["AC capacitor series", "high voltage AC filter", "capacitor voltage balancing"]
          ),
          generateFAQ(
            "How do I select the right capacitor for a tuned harmonic filter?",
            "For a tuned harmonic filter using the E62.F10-102.B20: 1) Determine the harmonic frequency to filter (e.g., 5th harmonic = 300Hz for 60Hz system), 2) Calculate required capacitive reactance: Xc = 1 / (2 x pi x f x C) = 1 / (2 x 3.1416 x 300 x 1x10^-6) = 530 ohms, 3) Calculate series inductance for tuning: L = 1 / ((2 x pi x f) x (2 x pi x f) x C) = 0.28mH, 4) Verify voltage rating accounts for fundamental plus harmonic voltage, 5) Ensure current rating handles fundamental plus harmonic current. The quality factor (Q) of the filter affects bandwidth and losses. Typical Q values range from 30-100. Our FAE team can assist with complete filter design including reactor selection and tuning.",
            "Define your harmonic filter requirements and consult our application notes or FAE team for detailed design assistance.",
            ["tuned harmonic filter", "filter capacitor selection", "harmonic filter design"]
          ),
          generateFAQ(
            "What maintenance does the E62.F10-102.B20 require?",
            "The E62.F10-102.B20 requires minimal maintenance due to its dry filling technology and self-healing properties. Recommended maintenance includes: 1) Annual visual inspection for physical damage, loose connections, or case swelling, 2) Capacitance measurement every 2-3 years to track aging - expect gradual decrease of 1-2% per year, 3) Check mounting torque annually, 4) Verify discharge resistor functionality, 5) Inspect safety devices (fuses, contactors) for proper operation. Unlike oil-filled capacitors, no oil level checks are needed. The self-healing mechanism automatically addresses minor dielectric issues. Replace the capacitor when capacitance drops below 95% of initial value or if case swelling is observed. Typical service life exceeds 15 years in normal operating conditions.",
            "Implement a periodic inspection and measurement program to monitor capacitor condition over time.",
            ["E62.F10-102.B20 maintenance", "AC capacitor care", "filter capacitor monitoring"]
          )
        ]
      },
      {
        partNumber: "E62.F10-502.B20",
        name: "AC Filter Capacitor 5uF 1000V AC",
        shortDescription: "Electronicon E62.F10-502.B20 5uF 1000V AC high-capacitance filter capacitor for PFC applications.",
        descriptionParagraphs: [
          "The E62.F10-502.B20 provides high capacitance value for demanding power factor correction and filter applications.",
          "Designed with optimized film technology for high current capability and minimal losses at AC frequencies.",
          "Ideal for industrial power factor correction banks, large harmonic filters, and high-power UPS systems."
        ],
        specifications: {
          Capacitance: "5uF",
          VoltageRating: "1000V AC",
          CurrentRating: "55A RMS",
          LossFactor: "<0.0002 @ 50Hz",
          TemperatureRange: "-40C to +85C",
          Lifetime: "100,000 hours @ 70C, Un",
          Mounting: "M10 Stud Mount",
          Dimensions: "75mm x 140mm",
          Weight: "420g"
        },
        features: [
          "High capacitance 5uF for high reactive power",
          "High current capability 55A RMS",
          "Low loss factor <0.0002",
          "1000V AC voltage rating",
          "Dry filling technology",
          "Self-healing properties",
          "Long lifetime design"
        ],
        applications: [
          "Power factor correction banks",
          "Large harmonic filters",
          "High-power UPS filters",
          "Grid-tied inverters",
          "Motor compensation",
          "Industrial PFC systems"
        ],
        faeReview: {
          author: "Klaus Weber",
          title: "FAE - Power Quality Solutions",
          content: "The E62.F10-502.B20 is my preferred choice for industrial power factor correction applications. The 5uF capacitance provides 440 VAR at 480V 60Hz, making it efficient for building PFC banks. The 55A RMS current rating handles significant harmonic content common in industrial environments. I particularly value the 1000V rating which provides good margin for 480V systems with voltage fluctuations. The low loss factor ensures efficient operation with minimal heating. For a 100kVAR PFC bank at 480V, I typically use 15 capacitors in delta configuration (5 per phase). The dry filling eliminates oil leakage risks in industrial settings. I've specified this capacitor in numerous steel mill and manufacturing plant PFC installations with excellent reliability.",
          highlight: "High capacitance and current rating for industrial PFC applications"
        },
        alternativeParts: [
          {
            partNumber: "E62.F10-752.B20",
            brand: "Electronicon",
            specifications: {
              capacitance: "7.5uF",
              voltage: "1000V AC",
              current: "70A RMS"
            },
            comparison: {
              capacitance: "7.5uF > 5uF (+50%)",
              voltage: "1000V AC = 1000V AC (same)",
              current: "70A > 55A (+27%)",
              dimensions: "85mm x 155mm > 75mm x 140mm (larger)",
              weight: "550g > 420g (heavier)"
            },
            reason: "Higher capacitance for larger PFC banks or higher reactive power requirements",
            useCase: "Large industrial PFC systems requiring 7.5uF per step",
            link: "/electronicon/products/ac-filter-capacitors/e62-f10-752-b20.html"
          },
          {
            partNumber: "E62.F10-502.B10",
            brand: "Electronicon",
            specifications: {
              capacitance: "5uF",
              voltage: "690V AC",
              current: "45A RMS"
            },
            comparison: {
              capacitance: "5uF = 5uF (same)",
              voltage: "690V AC < 1000V AC (lower)",
              current: "45A < 55A (lower)",
              dimensions: "65mm x 125mm < 75mm x 140mm (smaller)",
              price: "Lower cost option"
            },
            reason: "Lower voltage rating for 400V systems with reduced cost",
            useCase: "400V AC PFC applications where 690V provides adequate margin",
            link: "/electronicon/products/ac-filter-capacitors/e62-f10-502-b10.html"
          }
        ],
        companionParts: [
          {
            partNumber: "E62.F10-502.B20",
            link: "/electronicon/products/ac-filter-capacitors/e62-f10-502-b20.html",
            description: "Multiple capacitors for large PFC bank",
            category: "AC Filter Capacitors"
          },
          {
            partNumber: "PFC Controller",
            link: "#",
            description: "Automatic power factor correction controller",
            category: "PFC Equipment"
          },
          {
            partNumber: "Detuning Reactor 7%",
            link: "#",
            description: "7% detuning reactor for harmonic-rich networks",
            category: "Filter Components"
          },
          {
            partNumber: "AC Contactor 63A",
            link: "#",
            description: "Capacitor switching contactor with pre-charge",
            category: "Switching Equipment"
          },
          {
            partNumber: "M10 Mounting Hardware",
            link: "#",
            description: "Complete mounting kit for secure installation",
            category: "Accessories"
          }
        ],
        applicationScenarios: [
          {
            title: "100kVAR PFC Bank",
            description: "15 E62.F10-502.B20 capacitors in delta configuration provide 100kVAR at 480V"
          },
          {
            title: "3rd Harmonic Filter",
            description: "5uF capacitors with appropriate reactors for 180Hz tuned filters"
          },
          {
            title: "Large UPS Output Filter",
            description: "High-capacitance filter for 500kVA+ UPS inverter output"
          }
        ],
        keywords: ["Electronicon E62.F10-502.B20", "5uF 1000V AC capacitor", "PFC capacitor distributor"],
        faqs: [
          generateFAQ(
            "What reactive power does the E62.F10-502.B20 provide?",
            "The E62.F10-502.B20 provides reactive power calculated by Q = 2 x pi x f x C x V x V. At 480V AC, 60Hz: Q = 2 x 3.1416 x 60 x 5x10^-6 x 480 x 480 = 434 VAR (0.434 kVAR). At 400V AC, 50Hz: Q = 2 x 3.1416 x 50 x 5x10^-6 x 400 x 400 = 251 VAR (0.251 kVAR). For three-phase delta connection, multiply by 3: 1.3 kVAR at 480V or 0.75 kVAR at 400V. This makes the E62.F10-502.B20 efficient for building PFC banks. For example, 23 capacitors provide approximately 10 kVAR at 480V. The actual reactive power varies with the square of voltage, so voltage fluctuations affect PFC performance.",
            "Calculate the number of capacitors needed based on your target kVAR and system voltage.",
            ["E62.F10-502.B20 reactive power", "5uF capacitor kVAR", "PFC capacitor sizing"]
          ),
          generateFAQ(
            "How many capacitors do I need for a specific kVAR rating?",
            "To determine the number of E62.F10-502.B20 capacitors needed: 1) Calculate reactive power per capacitor at your voltage (434 VAR at 480V 60Hz), 2) Divide target kVAR by per-capacitor VAR: Number = Target kVAR x 1000 / VAR per capacitor, 3) Round up to nearest practical number. Examples: For 10 kVAR at 480V: 10,000 / 434 = 23 capacitors, For 25 kVAR at 480V: 25,000 / 434 = 58 capacitors, For 50 kVAR at 480V: 50,000 / 434 = 115 capacitors. For three-phase systems, use multiples of 3 for balanced delta connection. Consider using multiple steps (e.g., 5kVAR, 10kVAR, 25kVAR) for automatic PFC controllers. Our FAE team can assist with complete PFC bank design including controller selection and step sizing.",
            "Define your target power factor and system parameters, then calculate required capacitor quantity or consult our FAE team.",
            ["PFC bank sizing", "kVAR calculation", "capacitor bank design"]
          ),
          generateFAQ(
            "What is the inrush current when switching the E62.F10-502.B20?",
            "The inrush current when switching the E62.F10-502.B20 depends on system voltage, source impedance, and switching instant. Peak inrush can reach 100-200 times rated current for microseconds. For 480V system: Ipeak = Vpeak / Zsource, where Zsource includes transformer and cable impedance. With typical source impedance of 0.1 ohm: Ipeak = 480 x 1.414 / 0.1 = 6,800A. This high current stresses contacts and can cause nuisance tripping. Mitigation methods include: 1) Pre-charge resistors to limit current, 2) Zero-crossing switching to minimize voltage differential, 3) Special capacitor contactors with pre-charge contacts, 4) Current-limiting reactors. Always use contactors rated for capacitor switching with proper current derating.",
            "Use proper switching equipment with pre-charge or zero-crossing control to manage inrush current.",
            ["capacitor inrush current", "PFC switching", "capacitor contactor"]
          ),
          generateFAQ(
            "Do I need detuning reactors with the E62.F10-502.B20?",
            "Detuning reactors are recommended with the E62.F10-502.B20 when: 1) The electrical network has significant harmonic content (THD-V > 5%), 2) Non-linear loads such as VFDs, rectifiers, or UPS systems are present, 3) Capacitor bank capacity exceeds 15% of transformer rating, 4) Resonance conditions may occur. Detuning reactors (typically 7% or 14% impedance) shift the resonance frequency below dominant harmonics (usually 5th, 7th), preventing amplification. The 7% detuning is most common, providing protection against 5th harmonic resonance while maintaining good PFC performance. 14% detuning is used in severe harmonic environments. The reactors add cost and losses but protect capacitors from harmonic overload and prevent resonance issues.",
            "Assess your network harmonic content and consider detuning reactors if harmonics are present or capacitor bank is large.",
            ["detuning reactors", "harmonic resonance", "PFC protection"]
          ),
          generateFAQ(
            "How do I wire multiple E62.F10-502.B20 capacitors for three-phase PFC?",
            "For three-phase PFC using multiple E62.F10-502.B20 capacitors: 1) Delta Connection - connect capacitors between phases (L1-L2, L2-L3, L3-L1), use equal number per phase for balance, multiply single-phase kVAR by 3 for total, 2) Wye Connection - connect capacitor banks between each phase and neutral, provides lower voltage stress per capacitor, 3) Multiple Steps - divide total kVAR into steps (e.g., 5, 10, 20 kVAR) controlled by PFC controller, 4) Protection - provide fuses or breakers for each step, use contactors rated for capacitor switching, include discharge resistors. For automatic PFC, the controller switches steps based on measured power factor. Ensure adequate spacing between capacitors for heat dissipation and proper ventilation.",
            "Choose delta or wye connection based on voltage requirements and consult our FAE team for complete PFC bank design.",
            ["three-phase PFC", "capacitor bank wiring", "PFC connection"]
          ),
          generateFAQ(
            "What safety devices are required for PFC installations with E62.F10-502.B20?",
            "PFC installations with E62.F10-502.B20 require several safety devices: 1) Overcurrent Protection - fuses or circuit breakers sized at 1.5-1.8x rated capacitor current, 2) Discharge Device - resistors or reactors to discharge capacitors to <50V within 60 seconds (3 minutes for >1kV), 3) Contactors - capacitor duty contactors with pre-charge or damping resistors, 4) Overtemperature Protection - thermal sensors for large banks or high-temperature environments, 5) Short Circuit Protection - upstream breaker for fault protection, 6) Discharge Indicators - voltage indicators to confirm safe discharge before maintenance. The E62.F10-502.B20 includes internal overpressure disconnector for safety. Follow local electrical codes (NEC, IEC) and standards (IEEE 18, IEC 60871) for PFC installation requirements.",
            "Implement comprehensive protection including discharge, overcurrent, and overtemperature for safe PFC operation.",
            ["PFC safety", "capacitor protection", "PFC installation requirements"]
          )
        ]
      }
    ]
  }
];

// Add the new categories
productsData.categories = [...productsData.categories, ...additionalCategories];

// Write updated products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('Added AC Filter Capacitors category to products.json');
console.log('Total categories now: ' + productsData.categories.length);
console.log('Categories: ' + productsData.categories.map(c => c.name).join(', '));
