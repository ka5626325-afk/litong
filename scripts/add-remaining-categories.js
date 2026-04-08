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

// Define remaining categories
const remainingCategories = [
  {
    id: "snubber-capacitors",
    name: "Snubber Capacitors",
    slug: "snubber-capacitors",
    description: "Electronicon snubber capacitors are designed for protection circuits in power electronics, specifically for IGBT and thyristor applications.",
    longDescription: "Electronicon snubber capacitors are designed for protection circuits in power electronics, specifically for IGBT and thyristor applications. These high-voltage film capacitors feature low inductance, high pulse current capability, and excellent self-healing properties. Available in voltages from 1000V to 6000V DC with capacitance values from 0.01uF to 10uF, they are essential for suppressing voltage transients, reducing switching losses, and protecting semiconductor devices. As an authorized Electronicon distributor, we provide technical support for snubber capacitor applications.",
    series: ["E12.E93", "E12.E63"],
    parameters: ["Voltage Rating", "Capacitance", "Pulse Current", "Inductance", "dv/dt Rating", "Temperature Range", "Mounting Type"],
    applications: ["IGBT Snubbers", "Thyristor Protection", "Voltage Clamping", "Switching Power Supplies", "Inverter Protection", "Crowbar Circuits"],
    selectionGuide: {
      title: "Snubber Capacitor Selection Guide",
      description: "Learn how to select the right snubber capacitor for IGBT and thyristor protection",
      articleId: "snubber-capacitor-selection",
      articleLink: "/electronicon/support/snubber-capacitor-selection.html"
    },
    selectionGuideLink: "/electronicon/support/snubber-capacitor-selection.html",
    faqs: [
      generateFAQ(
        "What is the purpose of a snubber capacitor?",
        "Snubber capacitors serve critical protection functions in power electronics circuits: 1) Voltage Transient Suppression - absorb energy from inductive spikes during switching, preventing overvoltage damage to semiconductors, 2) dv/dt Limiting - slow the rate of voltage rise across switching devices to prevent false triggering or damage, 3) Switching Loss Reduction - shape voltage and current waveforms to reduce switching losses and EMI, 4) Oscillation Damping - suppress parasitic oscillations caused by circuit inductance and device capacitance, 5) EMI Reduction - reduce high-frequency noise generated during switching. Snubber capacitors work in conjunction with snubber resistors to dissipate energy and control damping. Proper snubber design is essential for reliable operation of IGBTs, MOSFETs, and thyristors in high-power applications.",
        "Include snubber capacitors in your design for semiconductor protection when switching inductive loads or operating at high frequencies.",
        ["snubber capacitor purpose", "IGBT protection", "switching transient suppression"]
      ),
      generateFAQ(
        "How do I calculate the required snubber capacitance?",
        "Snubber capacitance calculation depends on the application and circuit parameters: 1) For IGBT snubbers, typical values range from 0.1uF to 2uF depending on switching energy and frequency, 2) Basic formula for capacitive snubber: C = L x (I^2) / (V^2), where L is stray inductance, I is switched current, V is allowable overvoltage, 3) For RC snubbers, the time constant (R x C) should be 2-5 times the switching period, 4) Practical approach - start with 0.1-0.47uF for medium power IGBTs (100-300A), 1-2uF for high power (400A+). The capacitor must have adequate pulse current rating and low inductance. Test and optimize in the actual circuit, as parasitic elements significantly affect snubber performance. Our FAE team can assist with detailed snubber design calculations.",
        "Start with typical values for your power level and optimize through testing, or consult our FAE team for detailed calculations.",
        ["snubber capacitor calculation", "snubber design", "IGBT snubber sizing"]
      ),
      generateFAQ(
        "What dv/dt rating is required for snubber capacitors?",
        "The dv/dt rating indicates how fast voltage can change across the capacitor without damage. For snubber applications: 1) IGBT Snubbers - typically require 1000-5000 V/us depending on switching speed and circuit inductance, 2) Thyristor Snubbers - usually 100-1000 V/us for phase control applications, 3) High-Frequency Inverters - may require >5000 V/us for fast-switching applications. The dv/dt stress depends on: switching device characteristics, circuit stray inductance, operating current, and snubber resistor value. Excessive dv/dt can cause capacitor failure through dielectric heating. Electronicon snubber capacitors are designed with low inductance construction and optimized film for high dv/dt applications. Always select capacitors with dv/dt margin above calculated requirements.",
        "Select snubber capacitors with dv/dt rating at least 50% higher than your application's maximum expected dv/dt.",
        ["snubber dv/dt rating", "capacitor dv/dt", "high dv/dt capacitor"]
      ),
      generateFAQ(
        "What is the difference between snubber capacitors and standard film capacitors?",
        "Snubber capacitors are specially designed for high-stress switching applications: 1) Low Inductance - special internal construction minimizes ESL for high-frequency pulse handling, 2) High dv/dt Rating - optimized dielectric for rapid voltage changes, 3) High Pulse Current - designed for repetitive high-peak current pulses, 4) Self-Healing - critical for reliability under overvoltage stress, 5) Compact Design - optimized for low inductance and high energy density, 6) Termination - low-inductance terminals or busbar connections. Standard film capacitors may fail quickly in snubber applications due to high dv/dt and pulse current stress. Snubber capacitors typically cost more but provide essential reliability in protection circuits. Using standard capacitors as snubbers often leads to premature failure and semiconductor damage.",
        "Always use purpose-designed snubber capacitors for IGBT and thyristor protection, not standard film capacitors.",
        ["snubber vs standard capacitor", "special snubber capacitor", "IGBT snubber requirements"]
      ),
      generateFAQ(
        "How do I mount snubber capacitors for minimum inductance?",
        "Minimizing inductance in snubber capacitor mounting is critical for effective protection: 1) Short Connections - keep leads/traces as short as possible, ideally <50mm, 2) Wide Conductors - use wide copper traces or busbars to reduce inductance, 3) Close to Device - mount capacitor directly across the semiconductor terminals, 4) Kelvin Connection - separate current paths for switching and snubber circuits, 5) Low-Inductance Capacitors - select capacitors with low ESL design, 6) Parallel Capacitors - use multiple smaller capacitors in parallel instead of one large capacitor to reduce ESL. Every 10nH of stray inductance can cause 100V+ overshoot at 1000A/us switching. Use laminated busbar structures for high-power applications. The goal is to minimize the loop area formed by the snubber capacitor and protected device.",
        "Mount snubber capacitors as close as possible to the protected semiconductor with minimal connection inductance.",
        ["snubber mounting", "low inductance mounting", "snubber capacitor installation"]
      )
    ],
    products: [
      {
        partNumber: "E12.E93-403.M20",
        name: "Snubber Capacitor 0.4uF 2000V DC",
        shortDescription: "Electronicon E12.E93-403.M20 0.4uF 2000V DC low-inductance snubber capacitor for IGBT protection.",
        descriptionParagraphs: [
          "The E12.E93-403.M20 is a high-performance snubber capacitor designed for IGBT and thyristor protection applications.",
          "Features ultra-low inductance construction and high dv/dt capability for effective switching transient suppression.",
          "The compact axial lead design allows close mounting to semiconductors for minimum circuit inductance."
        ],
        specifications: {
          Capacitance: "0.4uF",
          VoltageRating: "2000V DC",
          PulseCurrent: "1200A peak",
          Inductance: "<20nH",
          dvdtRating: "3000 V/us",
          TemperatureRange: "-40C to +105C",
          Lifetime: "100,000 hours @ 85C",
          Mounting: "Axial Leads",
          Dimensions: "26mm x 50mm",
          Weight: "35g"
        },
        features: [
          "Ultra-low inductance <20nH",
          "High dv/dt rating 3000 V/us",
          "High pulse current 1200A peak",
          "2000V DC voltage rating",
          "Self-healing properties",
          "Axial lead for low-inductance mounting",
          "High temperature 105C rating"
        ],
        applications: [
          "IGBT snubber circuits",
          "Thyristor protection",
          "Voltage clamping",
          "Switching power supplies",
          "Inverter protection",
          "Crowbar circuits"
        ],
        faeReview: {
          author: "Dieter Hoffman",
          title: "FAE - High Power Electronics",
          content: "The E12.E93-403.M20 is my standard recommendation for IGBT snubber applications up to 1700V devices. The 0.4uF capacitance provides effective energy absorption for medium-power IGBTs (200-400A), while the <20nH inductance ensures fast response to voltage transients. I've used this capacitor extensively in motor drive and inverter applications. The 3000 V/us dv/dt rating handles modern fast-switching IGBTs without stress. The axial lead design allows direct mounting across IGBT terminals with minimal lead length. For high-power modules, I typically use two or three in parallel for higher pulse current capability. The 2000V rating provides good margin for 1200V IGBTs. This capacitor has proven very reliable in industrial environments with high switching frequencies.",
          highlight: "Low inductance and high dv/dt rating for effective IGBT protection"
        },
        alternativeParts: [
          {
            partNumber: "E12.E93-683.M20",
            brand: "Electronicon",
            specifications: {
              capacitance: "0.68uF",
              voltage: "2000V DC",
              pulseCurrent: "1600A peak"
            },
            comparison: {
              capacitance: "0.68uF > 0.4uF (+70%)",
              voltage: "2000V DC = 2000V DC (same)",
              pulseCurrent: "1600A > 1200A (+33%)",
              dimensions: "30mm x 58mm > 26mm x 50mm (larger)",
              dvdt: "3000 V/us = 3000 V/us (same)"
            },
            reason: "Higher capacitance for larger IGBTs or higher energy absorption requirements",
            useCase: "High-power IGBTs (400-600A) or applications with high stray inductance",
            link: "/electronicon/products/snubber-capacitors/e12-e93-683-m20.html"
          },
          {
            partNumber: "E12.E93-403.M10",
            brand: "Electronicon",
            specifications: {
              capacitance: "0.4uF",
              voltage: "1000V DC",
              pulseCurrent: "1000A peak"
            },
            comparison: {
              capacitance: "0.4uF = 0.4uF (same)",
              voltage: "1000V DC < 2000V DC (lower)",
              pulseCurrent: "1000A < 1200A (lower)",
              dimensions: "22mm x 42mm < 26mm x 50mm (smaller)",
              price: "Lower cost option"
            },
            reason: "Lower voltage rating for 600V IGBT applications with reduced cost",
            useCase: "600V class IGBT modules and lower voltage applications",
            link: "/electronicon/products/snubber-capacitors/e12-e93-403-m10.html"
          }
        ],
        companionParts: [
          {
            partNumber: "Snubber Resistor 10 Ohm",
            link: "#",
            description: "10 ohm non-inductive resistor for RC snubber",
            category: "Snubber Components"
          },
          {
            partNumber: "E12.E93-403.M20",
            link: "/electronicon/products/snubber-capacitors/e12-e93-403-m20.html",
            description: "Parallel configuration for 0.8uF total",
            category: "Snubber Capacitors"
          },
          {
            partNumber: "IGBT Module FF200R12KT4",
            link: "/infineon/products/igbt-modules/ff200r12kt4.html",
            description: "1200V IGBT module for snubber protection",
            category: "Power Semiconductors"
          },
          {
            partNumber: "Fast Recovery Diode",
            link: "#",
            description: "Fast diode for freewheeling protection",
            category: "Power Semiconductors"
          },
          {
            partNumber: "Mounting Clip",
            link: "#",
            description: "Clip for axial capacitor mounting to heatsink",
            category: "Accessories"
          }
        ],
        applicationScenarios: [
          {
            title: "IGBT Module Snubber",
            description: "Direct mounting across 1200V IGBT module terminals for switching protection"
          },
          {
            title: "Thyristor Protection",
            description: "RC snubber for thyristor commutation protection in phase control"
          },
          {
            title: "Inverter Output Filter",
            description: "Snubber for inverter output stage protection against load transients"
          }
        ],
        keywords: ["Electronicon E12.E93-403.M20", "0.4uF snubber capacitor", "IGBT snubber distributor"],
        faqs: [
          generateFAQ(
            "What is the pulse current rating of the E12.E93-403.M20?",
            "The E12.E93-403.M20 is rated for 1200A peak pulse current. This rating represents the maximum non-repetitive surge current the capacitor can withstand without damage. For repetitive operation, the current should be derated based on duty cycle and frequency. At 10kHz switching with 50% duty cycle, the effective repetitive current should not exceed approximately 200A RMS. The pulse current capability depends on the capacitor's internal construction, connection inductance, and thermal design. The low inductance (<20nH) design ensures the capacitor can respond quickly to fast voltage transients. For applications requiring higher pulse current, use multiple capacitors in parallel.",
            "Ensure your application's peak and repetitive currents are within the capacitor ratings.",
            ["E12.E93-403.M20 pulse current", "snubber current rating", "capacitor surge current"]
          ),
          generateFAQ(
            "How close should I mount the E12.E93-403.M20 to the IGBT?",
            "For effective snubber action, mount the E12.E93-403.M20 as close as possible to the IGBT terminals. Target lead lengths of less than 25mm (1 inch) between capacitor and semiconductor. The total loop inductance (capacitor ESL + connection inductance) should be minimized to allow fast energy transfer during switching transients. Every 10mm of wire adds approximately 10nH of inductance, which can significantly reduce snubber effectiveness. Use wide, flat conductors or busbars for connections. Mount the capacitor directly across the IGBT's collector and emitter terminals if possible. For modules with screw terminals, use the shortest possible wire leads. The axial lead design of the E12.E93-403.M20 facilitates close mounting.",
            "Minimize connection length and inductance by mounting the snubber capacitor directly at the IGBT terminals.",
            ["snubber mounting distance", "IGBT snubber placement", "low inductance mounting"]
          ),
          generateFAQ(
            "What resistor value should I use with the E12.E93-403.M20?",
            "For RC snubber circuits using the E12.E93-403.M20, the resistor value depends on circuit parameters: 1) Typical Range - 5 to 50 ohms for most IGBT applications, 2) Damping Consideration - R should be approximately equal to the characteristic impedance: R = sqrt(Lstray/C), where Lstray is circuit stray inductance and C is snubber capacitance (0.4uF), 3) Power Dissipation - calculate power in resistor: P = 0.5 x C x V^2 x f, where V is clamp voltage and f is switching frequency, 4) Starting Point - try 10 ohms for medium-power IGBTs (200-400A). For example, with 1000V overshoot and 10kHz switching: P = 0.5 x 0.4x10^-6 x 1000^2 x 10000 = 2W. Use non-inductive resistors (carbon composition or film) rated for at least 2x calculated power.",
            "Start with 10 ohms and adjust based on oscilloscope measurements of switching waveforms.",
            ["snubber resistor value", "RC snubber design", "snubber damping resistor"]
          ),
          generateFAQ(
            "Can the E12.E93-403.M20 be used for 1700V IGBT protection?",
            "The E12.E93-403.M20 with 2000V DC rating can be used for 1700V IGBT protection, but with limited margin. The 2000V rating provides 15% margin above 1700V, which may be insufficient for applications with high voltage overshoots or transients. For 1700V IGBTs, we typically recommend capacitors with 3000V or higher rating to provide adequate safety margin (30-50% above device rating). The E12 series offers higher voltage options up to 6000V. If using the E12.E93-403.M20 with 1700V IGBTs, ensure: 1) Snubber is properly sized to limit overshoot, 2) Operating voltage has sufficient margin, 3) Temperature derating is applied, 4) Regular inspection for capacitor health. For critical applications, select a higher voltage rated snubber capacitor.",
            "Consider higher voltage rated snubber capacitors (3000V+) for 1700V IGBT applications for better safety margin.",
            ["1700V IGBT snubber", "high voltage snubber", "snubber voltage rating"]
          ),
          generateFAQ(
            "What is the self-healing mechanism in the E12.E93-403.M20?",
            "The E12.E93-403.M20 features self-healing film technology that enhances reliability under overvoltage stress. When a dielectric defect or overvoltage causes localized breakdown, the energy discharged vaporizes the thin metallization layer around the fault site. This creates a small insulated area, effectively isolating the defect and restoring the capacitor's integrity. The process occurs in microseconds without external intervention. The result is a minor, gradual reduction in capacitance rather than catastrophic failure. The E12.E93-403.M20 uses segmented metallization patterns to control the self-healing process and minimize capacitance loss. This technology is especially important for snubber applications where the capacitor regularly experiences high-voltage transients and pulse stresses.",
            "The self-healing feature makes the E12.E93-403.M20 highly reliable for demanding snubber applications.",
            ["self-healing capacitor", "snubber reliability", "E12.E93-403.M20 technology"]
          ),
          generateFAQ(
            "How do I test the effectiveness of my snubber circuit?",
            "To verify snubber effectiveness with the E12.E93-403.M20: 1) Oscilloscope Measurement - use high-voltage differential probe to measure IGBT collector-emitter voltage during switching, 2) Look For - voltage overshoot magnitude, ringing frequency and damping, dv/dt rate, 3) Effective Snubber - should limit overshoot to <110% of DC bus voltage with minimal ringing, 4) Without Snubber - expect significant overshoot (150-200%) and sustained oscillation, 5) Adjust Values - increase capacitance if overshoot is excessive, adjust resistance for optimal damping, 6) Temperature Check - monitor snubber capacitor temperature during operation. Typical snubber effectiveness: reduces overshoot by 30-50%, damps oscillations within 2-3 cycles, reduces EMI by 10-20dB. Document waveforms with and without snubber for comparison.",
            "Use oscilloscope measurements to verify snubber performance and optimize component values if needed.",
            ["snubber testing", "IGBT switching waveform", "snubber effectiveness"]
          )
        ]
      },
      {
        partNumber: "E12.E93-104.M50",
        name: "Snubber Capacitor 0.1uF 5000V DC",
        shortDescription: "Electronicon E12.E93-104.M50 0.1uF 5000V DC high-voltage snubber capacitor for high-power IGBT protection.",
        descriptionParagraphs: [
          "The E12.E93-104.M50 is a high-voltage snubber capacitor designed for demanding protection applications.",
          "Features 5000V DC rating and high dv/dt capability for effective transient suppression in high-voltage circuits.",
          "Ideal for 3300V IGBT modules, high-voltage thyristors, and medium-voltage drive applications."
        ],
        specifications: {
          Capacitance: "0.1uF",
          VoltageRating: "5000V DC",
          PulseCurrent: "800A peak",
          Inductance: "<25nH",
          dvdtRating: "5000 V/us",
          TemperatureRange: "-40C to +105C",
          Lifetime: "100,000 hours @ 85C",
          Mounting: "Axial Leads",
          Dimensions: "35mm x 75mm",
          Weight: "85g"
        },
        features: [
          "High voltage rating 5000V DC",
          "High dv/dt 5000 V/us",
          "Low inductance <25nH",
          "High pulse current 800A",
          "Self-healing properties",
          "Axial lead construction",
          "High temperature 105C rating"
        ],
        applications: [
          "3300V IGBT protection",
          "High-voltage thyristor snubbers",
          "Medium-voltage drives",
          "HVDC applications",
          "High-power inverters",
          "Crowbar circuits"
        ],
        faeReview: {
          author: "Dieter Hoffman",
          title: "FAE - High Power Electronics",
          content: "The E12.E93-104.M50 is essential for high-voltage IGBT applications where standard snubber capacitors cannot withstand the voltage stress. The 5000V rating provides excellent margin for 3300V IGBT modules commonly used in medium-voltage drives and traction applications. The 5000 V/us dv/dt rating handles the extremely fast switching of modern IGBTs. I've specified this capacitor for mining drives, marine propulsion, and railway traction systems. The 0.1uF capacitance is appropriate for high-voltage applications where energy storage requirements are lower due to higher impedance levels. The axial lead design allows flexible mounting arrangements. For very high power modules, use multiple capacitors in parallel. This capacitor has proven reliable in harsh industrial environments.",
          highlight: "High voltage rating for demanding medium-voltage IGBT applications"
        },
        alternativeParts: [
          {
            partNumber: "E12.E93-224.M50",
            brand: "Electronicon",
            specifications: {
              capacitance: "0.22uF",
              voltage: "5000V DC",
              pulseCurrent: "1200A peak"
            },
            comparison: {
              capacitance: "0.22uF > 0.1uF (+120%)",
              voltage: "5000V DC = 5000V DC (same)",
              pulseCurrent: "1200A > 800A (+50%)",
              dimensions: "42mm x 88mm > 35mm x 75mm (larger)",
              weight: "120g > 85g (heavier)"
            },
            reason: "Higher capacitance for larger high-voltage IGBTs or higher energy absorption",
            useCase: "Large 3300V IGBT modules or applications with high stray inductance",
            link: "/electronicon/products/snubber-capacitors/e12-e93-224-m50.html"
          },
          {
            partNumber: "E12.E93-104.M30",
            brand: "Electronicon",
            specifications: {
              capacitance: "0.1uF",
              voltage: "3000V DC",
              pulseCurrent: "700A peak"
            },
            comparison: {
              capacitance: "0.1uF = 0.1uF (same)",
              voltage: "3000V DC < 5000V DC (lower)",
              pulseCurrent: "700A < 800A (lower)",
              dimensions: "28mm x 62mm < 35mm x 75mm (smaller)",
              price: "Lower cost option"
            },
            reason: "Lower voltage rating for 1700V IGBT applications with reduced cost",
            useCase: "1700V class IGBT modules where 3000V provides adequate margin",
            link: "/electronicon/products/snubber-capacitors/e12-e93-104-m30.html"
          }
        ],
        companionParts: [
          {
            partNumber: "High Voltage Snubber Resistor",
            link: "#",
            description: "20 ohm high-voltage non-inductive resistor",
            category: "Snubber Components"
          },
          {
            partNumber: "E12.E93-104.M50",
            link: "/electronicon/products/snubber-capacitors/e12-e93-104-m50.html",
            description: "Parallel for 0.2uF total capacitance",
            category: "Snubber Capacitors"
          },
          {
            partNumber: "IGBT Module FF1400R17IP4",
            link: "/infineon/products/igbt-modules/ff1400r17ip4.html",
            description: "3300V IGBT module for high-voltage applications",
            category: "Power Semiconductors"
          },
          {
            partNumber: "High Voltage Diode",
            link: "#",
            description: "Fast recovery diode for 3300V circuits",
            category: "Power Semiconductors"
          },
          {
            partNumber: "HV Mounting Hardware",
            link: "#",
            description: "High-voltage rated mounting and insulation kit",
            category: "Accessories"
          }
        ],
        applicationScenarios: [
          {
            title: "3300V IGBT Protection",
            description: "Snubber capacitor for high-voltage IGBT modules in medium-voltage drives"
          },
          {
            title: "Thyristor Commutation",
            description: "RC snubber for high-power thyristor protection in phase control"
          },
          {
            title: "HVDC Snubber",
            description: "High-voltage snubber for HVDC converter protection"
          }
        ],
        keywords: ["Electronicon E12.E93-104.M50", "0.1uF 5000V snubber", "high voltage snubber capacitor"],
        faqs: [
          generateFAQ(
            "What IGBT voltage class is the E12.E93-104.M50 suitable for?",
            "The E12.E93-104.M50 with 5000V DC rating is primarily designed for 3300V IGBT modules. The 5000V rating provides 52% margin above 3300V, which is appropriate for high-voltage applications where voltage overshoot must be controlled. For 1700V IGBTs, this capacitor provides excessive margin (194%) which is acceptable but may not be cost-effective. For 6500V IGBTs, the 5000V rating is insufficient. The capacitor can also be used for high-voltage thyristors, GTOs, and IGCTs with voltage ratings up to approximately 4000V. Always ensure the snubber capacitor voltage rating exceeds the maximum expected voltage including overshoot and transients.",
            "Select the E12.E93-104.M50 for 3300V IGBT applications or other high-voltage semiconductors up to 4000V.",
            ["E12.E93-104.M50 voltage", "3300V IGBT snubber", "high voltage snubber selection"]
          ),
          generateFAQ(
            "How does the high dv/dt rating benefit high-voltage applications?",
            "The E12.E93-104.M50's 5000 V/us dv/dt rating is critical for high-voltage applications: 1) Fast Response - can track rapid voltage changes during IGBT switching, 2) Effective Clamping - quickly absorbs energy before voltage overshoot damages the semiconductor, 3) Low ESL Design - the high dv/dt capability indicates low internal inductance for fast current transfer, 4) Reduced Stress - prevents localized heating in the dielectric from high-frequency components, 5) Wide Bandwidth - effective across the frequency spectrum of switching transients. In high-voltage applications, even small stray inductances cause significant overshoot (V = L x di/dt). The capacitor must respond faster than the voltage rise to be effective. The 5000 V/us rating ensures effectiveness even with modern fast-switching IGBTs.",
            "The high dv/dt rating ensures effective protection against fast transients in high-voltage switching circuits.",
            ["high dv/dt snubber", "E12.E93-104.M50 dv/dt", "fast switching protection"]
          ),
          generateFAQ(
            "What safety clearances are needed for the E12.E93-104.M50?",
            "The E12.E93-104.M50 requires appropriate safety clearances for 5000V operation: 1) Creepage Distance - minimum 50mm between terminals and to ground for pollution degree 2, 2) Clearance - minimum 25mm in air for 5000V peak in dry conditions, 3) Mounting - use high-voltage rated mounting hardware and insulators, 4) Enclosure - ensure adequate spacing from conductive surfaces, 5) Terminations - use high-voltage rated connectors and insulation. For industrial applications, we recommend increasing clearances by 50% for safety margin. The axial lead design provides natural spacing when mounted properly. Always follow IEC 60664 or local standards for clearance and creepage requirements. Proper clearances prevent arcing and ensure safe, reliable operation.",
            "Follow high-voltage safety standards and provide adequate clearances for 5000V operation.",
            ["high voltage clearance", "snubber safety", "E12.E93-104.M50 mounting"]
          ),
          generateFAQ(
            "Can multiple E12.E93-104.M50 capacitors be used in parallel?",
            "Yes, multiple E12.E93-104.M50 capacitors can be connected in parallel for higher pulse current capability or capacitance: 1) Pulse Current - two in parallel provide 1600A peak capability, 2) Capacitance - two in parallel provide 0.2uF total, 3) Mounting - maintain symmetry for equal current sharing, 4) Connections - use low-inductance busbars for parallel connections, 5) Layout - position capacitors equidistant from the protected IGBT. Parallel configuration is useful for very high-power IGBT modules where single capacitor current rating is insufficient. Ensure all capacitors have the same voltage rating and similar characteristics. The total inductance of parallel capacitors is reduced, improving high-frequency performance. Use identical lead lengths for balanced current distribution.",
            "Use parallel configuration for high-current applications, ensuring symmetric layout for equal current sharing.",
            ["snubber parallel connection", "high current snubber", "E12.E93-104.M50 parallel"]
          ),
          generateFAQ(
            "What is the temperature derating for the E12.E93-104.M50?",
            "The E12.E93-104.M50 is rated for -40C to +105C ambient temperature with hot spot temperature up to 105C. The voltage and pulse current ratings apply at maximum temperature. For optimal lifetime: 1) Recommended Operating - keep hot spot temperature below 85C for 100,000 hour lifetime, 2) Derating Above 85C - reduce voltage to 90% at 95C, 80% at 105C, 3) High-Frequency Operation - additional derating may be needed for high repetitive pulse applications, 4) Thermal Design - ensure adequate heat dissipation from capacitor body. The Arrhenius relationship applies: lifetime approximately doubles for every 10C decrease. At 75C hot spot, expect approximately 200,000 hours. Monitor capacitor temperature during commissioning to verify thermal design adequacy.",
            "Design for hot spot temperatures below 85C and provide adequate cooling for reliable long-term operation.",
            ["E12.E93-104.M50 temperature", "high voltage capacitor thermal", "snubber derating"]
          ),
          generateFAQ(
            "How do I verify the E12.E93-104.M50 is functioning properly?",
            "To verify E12.E93-104.M50 functionality: 1) Visual Inspection - check for case swelling, terminal damage, or arcing marks, 2) Capacitance Test - measure with LCR meter at 1kHz, should be within +/-10% of 0.1uF, 3) Insulation Resistance - measure with megohmmeter at 500V DC, should be >10,000 MOhm, 4) Oscilloscope Check - verify switching waveforms show proper damping and overshoot control, 5) Temperature Monitoring - check capacitor runs cool during operation. A failed snubber capacitor typically shows: reduced capacitance from self-healing activity, increased losses causing heating, or short circuit in catastrophic failure. Regular inspection is recommended for critical applications. Replace capacitor if capacitance drops below 90% of nominal or if physical damage is observed.",
            "Perform periodic electrical testing and visual inspection to monitor snubber capacitor condition.",
            ["snubber capacitor testing", "E12.E93-104.M50 verification", "capacitor health check"]
          )
        ]
      }
    ]
  },
  {
    id: "motor-run-capacitors",
    name: "Motor Run Capacitors",
    slug: "motor-run-capacitors",
    description: "Electronicon motor run capacitors are designed for continuous operation in AC motor applications, providing the phase shift necessary for single-phase motor starting and running.",
    longDescription: "Electronicon motor run capacitors are designed for continuous operation in AC motor applications, providing the phase shift necessary for single-phase motor starting and running. These dry-filled film capacitors feature high AC voltage capability, low losses, and long operational lifetime. Available in voltages from 250V to 660V AC with capacitance values from 1uF to 100uF, they are ideal for compressor motors, pump motors, fan motors, and general industrial motor applications. As an authorized Electronicon distributor, we provide technical support for motor capacitor applications.",
    series: ["E62.M16"],
    parameters: ["Voltage Rating", "Capacitance", "Current Rating", "Loss Factor", "Temperature Range", "Lifetime", "Mounting Type"],
    applications: ["Compressor Motors", "Pump Motors", "Fan Motors", "HVAC Systems", "Industrial Motors", "Agricultural Equipment"],
    selectionGuide: {
      title: "Motor Run Capacitor Selection Guide",
      description: "Learn how to select the right motor run capacitor for your AC motor application",
      articleId: "motor-capacitor-selection",
      articleLink: "/electronicon/support/motor-capacitor-selection.html"
    },
    selectionGuideLink: "/electronicon/support/motor-capacitor-selection.html",
    faqs: [
      generateFAQ(
        "What is the difference between motor run and motor start capacitors?",
        "Motor run and start capacitors serve different purposes in AC motor applications: 1) Motor Run Capacitors - designed for continuous operation, typically 1-100uF, oil-filled or dry film construction, lower capacitance values, connected during entire operation, used for permanent split capacitor (PSC) motors, 2) Motor Start Capacitors - designed for intermittent duty (seconds only), typically 50-1000uF, electrolytic construction, higher capacitance values, disconnected by centrifugal switch or relay, used for capacitor-start motors. Electronicon motor run capacitors are dry-filled film capacitors designed for continuous operation. Using a start capacitor for run duty will cause rapid failure. Run capacitors improve motor efficiency and torque characteristics during operation.",
        "Use motor run capacitors for continuous operation, motor start capacitors only for brief starting assistance.",
        ["motor run vs start capacitor", "run capacitor selection", "AC motor capacitors"]
      ),
      generateFAQ(
        "How do I calculate the required capacitance for a motor run capacitor?",
        "Motor run capacitor selection depends on motor design and application: 1) Rule of Thumb - approximately 10-15uF per kW of motor power for 230V motors, 2) Manufacturer Specification - always follow motor manufacturer's recommended capacitance value, 3) Voltage Rating - typically 1.5-2x motor operating voltage (e.g., 370V or 440V for 230V motor), 4) Typical Values - 5-15uF for fractional HP motors, 15-50uF for 1-5 HP motors, 50-100uF for larger motors. Incorrect capacitance causes: too low - reduced torque and efficiency, overheating; too high - excessive current, overheating, reduced efficiency. For replacement applications, match the original capacitor's uF rating and voltage. When in doubt, consult the motor nameplate or manufacturer specifications.",
        "Follow motor manufacturer's specifications or use rule of thumb (10-15uF per kW) for motor run capacitor selection.",
        ["motor capacitor calculation", "run capacitor sizing", "motor capacitor selection"]
      ),
      generateFAQ(
        "What voltage rating should I select for a motor run capacitor?",
        "Motor run capacitor voltage rating selection: 1) Standard Ratings - 250V, 370V, 440V, 480V, 660V AC, 2) Selection Rule - capacitor voltage rating should be 1.5 to 2 times the motor operating voltage, 3) Common Applications - 370V for 208-230V motors, 440V for 230-460V motors, 660V for 575V motors, 4) Safety Margin - higher voltage rating provides longer life and better tolerance to voltage fluctuations. Examples: 115V motor -> 250V capacitor, 230V motor -> 370V or 440V capacitor, 460V motor -> 660V capacitor. Using underrated capacitors leads to premature failure. Electronicon motor run capacitors offer various voltage ratings to match application requirements. Always select voltage rating based on actual motor operating voltage, not nominal system voltage.",
        "Select capacitor voltage rating 1.5-2x motor operating voltage for reliable long-term operation.",
        ["motor capacitor voltage", "run capacitor voltage rating", "capacitor voltage selection"]
      ),
      generateFAQ(
        "How long do motor run capacitors typically last?",
        "Motor run capacitor lifetime depends on operating conditions: 1) Rated Lifetime - Electronicon motor run capacitors are rated for 30,000 to 60,000 hours depending on series, 2) Temperature Impact - every 10C increase reduces lifetime by approximately 50%, 3) Voltage Impact - operating above rated voltage accelerates aging, 4) Duty Cycle - intermittent operation extends life vs continuous, 5) Environment - clean, dry conditions extend life. Signs of aging: reduced motor starting torque, increased running current, motor overheating, capacitor bulging. The self-healing technology in Electronicon capacitors provides graceful aging with gradual capacitance reduction rather than sudden failure. Regular testing can identify capacitors approaching end of life.",
        "Expect 5-15 year service life and monitor for signs of aging such as reduced motor performance.",
        ["motor capacitor lifetime", "run capacitor life expectancy", "capacitor aging"]
      ),
      generateFAQ(
        "What causes motor run capacitor failure?",
        "Common causes of motor run capacitor failure: 1) Overheating - high ambient temperature, poor ventilation, blocked cooling, 2) Overvoltage - voltage spikes, sustained overvoltage from power system issues, 3) Age - normal end-of-life after years of service, 4) Incorrect Rating - undervoltage or undercapacitance causing overstress, 5) Manufacturing Defects - rare with quality manufacturers like Electronicon, 6) Physical Damage - impact, vibration, moisture ingress. Symptoms of failure: motor won't start, reduced torque, overheating, unusual noise, capacitor bulging or leaking. Prevention: proper voltage rating, adequate cooling, regular inspection, replace before complete failure. Electronicon's dry-filled design eliminates oil leakage common in traditional motor run capacitors.",
        "Ensure proper rating, adequate cooling, and protection from overvoltage to maximize capacitor lifetime.",
        ["motor capacitor failure", "capacitor failure causes", "run capacitor problems"]
      )
    ],
    products: [
      {
        partNumber: "E62.M16-473.M20",
        name: "Motor Run Capacitor 47uF 450V AC",
        shortDescription: "Electronicon E62.M16-473.M20 47uF 450V AC motor run capacitor for compressor and pump motor applications.",
        descriptionParagraphs: [
          "The E62.M16-473.M20 is a high-reliability motor run capacitor designed for continuous operation in AC motor applications.",
          "Features dry filling technology and self-healing properties for long lifetime and maintenance-free operation.",
          "Ideal for HVAC compressor motors, pump motors, and industrial motor applications requiring 47uF capacitance."
        ],
        specifications: {
          Capacitance: "47uF",
          VoltageRating: "450V AC",
          CurrentRating: "8A RMS",
          LossFactor: "<0.001 @ 50Hz",
          TemperatureRange: "-25C to +85C",
          Lifetime: "60,000 hours @ 70C",
          Mounting: "M8 Stud Mount",
          Dimensions: "50mm x 95mm",
          Weight: "180g"
        },
        features: [
          "47uF capacitance for 2-5 HP motors",
          "450V AC voltage rating",
          "Dry filling technology - no oil leakage",
          "Self-healing properties",
          "Low loss factor <0.001",
          "60,000 hour rated lifetime",
          "M8 stud mount for secure installation"
        ],
        applications: [
          "HVAC compressor motors",
          "Water pump motors",
          "Fan motors",
          "Industrial motors",
          "Agricultural equipment",
          "Commercial refrigeration"
        ],
        faeReview: {
          author: "Hans Mueller",
          title: "FAE - Motor Applications",
          content: "The E62.M16-473.M20 is a reliable choice for medium-power motor applications. The 47uF capacitance is ideal for 3-5 HP compressor motors commonly found in commercial HVAC systems. I particularly appreciate the dry filling technology which eliminates the oil leakage issues I've seen with traditional motor run capacitors. The 450V rating provides good margin for 230V motors and adequate safety for 208V applications. The self-healing feature ensures the capacitor fails gracefully rather than catastrophically. For installation, I recommend ensuring adequate ventilation as motor run capacitors can run warm during continuous operation. The M8 stud mount provides secure mechanical attachment. This capacitor has proven reliable in numerous HVAC and pump applications I've supported.",
          highlight: "Reliable dry-filled design eliminates oil leakage concerns"
        },
        alternativeParts: [
          {
            partNumber: "E62.M16-683.M20",
            brand: "Electronicon",
            specifications: {
              capacitance: "68uF",
              voltage: "450V AC",
              current: "10A RMS"
            },
            comparison: {
              capacitance: "68uF > 47uF (+45%)",
              voltage: "450V AC = 450V AC (same)",
              current: "10A > 8A (+25%)",
              dimensions: "55mm x 105mm > 50mm x 95mm (larger)",
              weight: "220g > 180g (heavier)"
            },
            reason: "Higher capacitance for larger motors (5-7.5 HP)",
            useCase: "Larger compressor or pump motors requiring 68uF",
            link: "/electronicon/products/motor-run-capacitors/e62-m16-683-m20.html"
          },
          {
            partNumber: "E62.M16-333.M20",
            brand: "Electronicon",
            specifications: {
              capacitance: "33uF",
              voltage: "450V AC",
              current: "6A RMS"
            },
            comparison: {
              capacitance: "33uF < 47uF (-30%)",
              voltage: "450V AC = 450V AC (same)",
              current: "6A < 8A (-25%)",
              dimensions: "45mm x 85mm < 50mm x 95mm (smaller)",
              weight: "150g < 180g (lighter)"
            },
            reason: "Lower capacitance for smaller motors (1.5-3 HP)",
            useCase: "Smaller fan or pump motors requiring 33uF",
            link: "/electronicon/products/motor-run-capacitors/e62-m16-333-m20.html"
          }
        ],
        companionParts: [
          {
            partNumber: "Motor Protector",
            link: "#",
            description: "Thermal overload protector for motor protection",
            category: "Motor Protection"
          },
          {
            partNumber: "Start Capacitor 189-227uF",
            link: "#",
            description: "Motor start capacitor for capacitor-start motors",
            category: "Motor Capacitors"
          },
          {
            partNumber: "Centrifugal Switch",
            link: "#",
            description: "Switch to disconnect start capacitor",
            category: "Motor Controls"
          },
          {
            partNumber: "M8 Mounting Kit",
            link: "#",
            description: "Mounting hardware for capacitor installation",
            category: "Accessories"
          },
          {
            partNumber: "Wiring Terminal Block",
            link: "#",
            description: "Terminal block for motor capacitor connections",
            category: "Electrical Components"
          }
        ],
        applicationScenarios: [
          {
            title: "5 HP HVAC Compressor",
            description: "E62.M16-473.M20 provides phase shift for efficient 5 HP compressor motor operation"
          },
          {
            title: "Irrigation Pump Motor",
            description: "Reliable motor run capacitor for continuous duty agricultural pump applications"
          },
          {
            title: "Industrial Fan Motor",
            description: "Motor run capacitor for ventilation fan motors in industrial environments"
          }
        ],
        keywords: ["Electronicon E62.M16-473.M20", "47uF motor capacitor", "motor run capacitor distributor"],
        faqs: [
          generateFAQ(
            "What size motor is the E62.M16-473.M20 suitable for?",
            "The E62.M16-473.M20 with 47uF capacitance is typically suitable for 3-5 HP (2.2-3.7 kW) single-phase AC motors at 230V. The exact motor size depends on motor design and application: 1) HVAC Compressors - typically 3-4 HP, 2) Pump Motors - 3-5 HP depending on pump type, 3) Fan Motors - 3-5 HP, 4) General Industrial - 2-5 HP. Always verify against motor manufacturer's specification. Using incorrect capacitance causes performance issues: too low - reduced torque, overheating, hard starting; too high - excessive current, overheating, reduced efficiency. The 47uF value is a common standard size for medium-power single-phase motors. For replacement applications, match the original capacitor's uF rating exactly.",
            "Verify your motor's specifications to confirm 47uF is the correct capacitance for your application.",
            ["E62.M16-473.M20 motor size", "47uF capacitor application", "motor capacitor sizing"]
          ),
          generateFAQ(
            "How do I wire the E62.M16-473.M20 in a motor circuit?",
            "The E62.M16-473.M20 is wired in parallel with the motor's auxiliary (start) winding for permanent split capacitor (PSC) motor operation: 1) Connection - one terminal to line (L1), other terminal to auxiliary winding, 2) Typical Wiring - Line (L1) -> Capacitor -> Auxiliary Winding -> Common with Main Winding -> Line (L2), 3) Dual Voltage Motors - capacitor connects to appropriate tap for voltage (high or low), 4) Safety - ensure power is disconnected before wiring, discharge capacitor before handling, 5) Mounting - secure capacitor with M8 stud, ensure adequate ventilation. The capacitor remains connected during both starting and running. For capacitor-start motors, a separate start capacitor and switch are also required. Always follow the motor wiring diagram and local electrical codes.",
            "Follow motor wiring diagram and connect capacitor between line and auxiliary winding for PSC motor operation.",
            ["motor capacitor wiring", "E62.M16-473.M20 connection", "PSC motor wiring"]
          ),
          generateFAQ(
            "What is the expected lifetime of the E62.M16-473.M20?",
            "The E62.M16-473.M20 is rated for 60,000 hours lifetime at 70C hot spot temperature. This translates to approximately 7 years of continuous operation or 15-20 years in typical intermittent duty motor applications. Actual lifetime depends on operating conditions: 1) Temperature - every 10C increase reduces lifetime by 50%, 2) Voltage - sustained overvoltage accelerates aging, 3) Duty Cycle - intermittent operation extends life vs continuous, 4) Environment - clean, dry conditions extend life. The self-healing technology provides graceful aging with gradual capacitance reduction. Monitor for signs of aging: reduced motor torque, increased current, overheating. Regular testing of capacitance can predict replacement needs. The dry-filled design eliminates oil leakage common in traditional capacitors.",
            "Expect 10-20 year service life in normal conditions and monitor for signs of aging.",
            ["E62.M16-473.M20 lifetime", "motor capacitor life expectancy", "run capacitor durability"]
          ),
          generateFAQ(
            "How do I test the E62.M16-473.M20 to verify it's working?",
            "To test the E62.M16-473.M20: 1) Safety First - disconnect power and discharge capacitor with insulated resistor, 2) Visual Inspection - check for bulging, leaking, or damage, 3) Capacitance Test - use LCR meter at 1kHz, should read 42.3-51.7uF (+/-10%), 4) Resistance Test - should show infinite resistance after charging (no short), 5) ESR Test - if meter capable, ESR should be low (<1 ohm), 6) In-Circuit Test - measure motor current and compare to nameplate, high current indicates failing capacitor. Signs of failure: capacitance <40uF, physical damage, motor won't start or runs hot. Replace if capacitance is outside +/-10% range or if physical damage is present. Regular testing can identify capacitors before complete failure.",
            "Use capacitance meter to verify value within +/-10% and inspect for physical damage.",
            ["motor capacitor testing", "E62.M16-473.M20 test", "capacitor measurement"]
          ),
          generateFAQ(
            "Can the E62.M16-473.M20 be used for both 50Hz and 60Hz systems?",
            "Yes, the E62.M16-473.M20 can be used in both 50Hz and 60Hz power systems. The capacitor's performance is similar at both frequencies: 1) Capacitance - remains 47uF at both frequencies, 2) Reactive Power - slightly higher at 60Hz: Q60 = 377 VAR vs Q50 = 314 VAR at 230V, 3) Current - slightly higher at 60Hz: I60 = 4.1A vs I50 = 3.4A, 4) Loss Factor - similar at both frequencies (<0.001), 5) Motor Performance - motor manufacturer accounts for frequency in their specifications. The 450V voltage rating is appropriate for both 50Hz and 60Hz systems. When replacing capacitors, use the same uF rating regardless of system frequency. The motor's design determines the required capacitance, not the supply frequency. Electronicon motor run capacitors are tested and rated for worldwide use at 50/60Hz.",
            "The E62.M16-473.M20 is suitable for both 50Hz and 60Hz applications with the same 47uF rating.",
            ["50Hz vs 60Hz capacitor", "motor capacitor frequency", "E62.M16-473.M20 frequency"]
          ),
          generateFAQ(
            "What temperature will the E62.M16-473.M20 reach during operation?",
            "The E62.M16-473.M20 operating temperature depends on several factors: 1) Ambient Temperature - starting point for capacitor temperature, 2) Motor Current - higher current causes more heating in capacitor, 3) Duty Cycle - continuous operation runs hotter than intermittent, 4) Ventilation - airflow around capacitor affects cooling. Typical operating temperatures: 1) Ambient 25C - capacitor 40-50C, 2) Ambient 40C - capacitor 55-70C, 3) Ambient 60C - capacitor 75-85C. The maximum rated hot spot temperature is 85C. Ensure adequate clearance around capacitor for heat dissipation. Hotter operation reduces lifetime according to Arrhenius relationship. If capacitor feels excessively hot (>70C) during operation, check for proper rating, excessive motor current, or ventilation issues.",
            "Ensure adequate ventilation and monitor temperature to keep hot spot below 85C for maximum lifetime.",
            ["motor capacitor temperature", "E62.M16-473.M20 thermal", "capacitor operating temperature"]
          )
        ]
      },
      {
        partNumber: "E62.M16-104.M30",
        name: "Motor Run Capacitor 100uF 660V AC",
        shortDescription: "Electronicon E62.M16-104.M30 100uF 660V AC high-capacitance motor run capacitor for large industrial motors.",
        descriptionParagraphs: [
          "The E62.M16-104.M30 provides high capacitance value for large single-phase motor applications.",
          "Features 660V AC rating suitable for 460-575V motor systems and high-voltage industrial applications.",
          "The dry filling technology and self-healing properties ensure reliable long-term operation."
        ],
        specifications: {
          Capacitance: "100uF",
          VoltageRating: "660V AC",
          CurrentRating: "15A RMS",
          LossFactor: "<0.001 @ 50Hz",
          TemperatureRange: "-25C to +85C",
          Lifetime: "60,000 hours @ 70C",
          Mounting: "M10 Stud Mount",
          Dimensions: "75mm x 140mm",
          Weight: "420g"
        },
        features: [
          "High capacitance 100uF for large motors",
          "660V AC voltage rating",
          "Suitable for 460-575V motors",
          "Dry filling technology",
          "Self-healing properties",
          "Low loss factor <0.001",
          "M10 stud mount"
        ],
        applications: [
          "Large industrial motors (10-15 HP)",
          "575V motor systems",
          "Commercial HVAC compressors",
          "Large pump motors",
          "Industrial fans",
          "Agricultural equipment"
        ],
        faeReview: {
          author: "Hans Mueller",
          title: "FAE - Motor Applications",
          content: "The E62.M16-104.M30 is the go-to choice for high-capacitance motor run applications. The 100uF capacitance at 660V AC rating makes it ideal for large industrial motors (10-15 HP) and 575V motor systems. I've specified this capacitor for numerous large HVAC installations and heavy industrial applications. The 660V rating provides excellent safety margin for 460V and 575V systems. The dry filling technology ensures no oil leakage concerns even in challenging industrial environments. The self-healing property is particularly valuable for continuous duty motor applications. I recommend proper thermal management including adequate ventilation for these high-capacitance units as they generate more heat. The M10 stud mount ensures secure installation. This capacitor has proven reliable in continuous duty applications like water treatment plants and large manufacturing facilities.",
          highlight: "High capacitance for large industrial motors and high-voltage applications"
        },
        alternativeParts: [
          {
            partNumber: "E62.M16-124.M30",
            brand: "Electronicon",
            specifications: {
              capacitance: "120uF",
              voltage: "660V AC",
              current: "18A RMS"
            },
            comparison: {
              capacitance: "120uF > 100uF (+20%)",
              voltage: "660V AC = 660V AC (same)",
              current: "18A > 15A (+20%)",
              dimensions: "85mm x 160mm > 75mm x 140mm (larger)",
              weight: "520g > 420g (heavier)"
            },
            reason: "Higher capacitance for larger motors (15-20 HP)",
            useCase: "Very large industrial motors requiring 120uF",
            link: "/electronicon/products/motor-run-capacitors/e62-m16-124-m30.html"
          },
          {
            partNumber: "E62.M16-104.M20",
            brand: "Electronicon",
            specifications: {
              capacitance: "100uF",
              voltage: "450V AC",
              current: "12A RMS"
            },
            comparison: {
              capacitance: "100uF = 100uF (same)",
              voltage: "450V AC < 660V AC (lower)",
              current: "12A < 15A (lower)",
              dimensions: "65mm x 125mm < 75mm x 140mm (smaller)",
              price: "Lower cost option"
            },
            reason: "Lower voltage rating for 230-380V motor applications",
            useCase: "460V and lower motor systems where 450V rating is acceptable",
            link: "/electronicon/products/motor-run-capacitors/e62-m16-104-m20.html"
          }
        ],
        companionParts: [
          {
            partNumber: "Motor Protector 20A",
            link: "#",
            description: "Thermal overload protector for large motor protection",
            category: "Motor Protection"
          },
          {
            partNumber: "E62.M16-104.M30",
            link: "/electronicon/products/motor-run-capacitors/e62-m16-104-m30.html",
            description: "Multiple capacitors for very large motor banks",
            category: "Motor Run Capacitors"
          },
          {
            partNumber: "Start Capacitor 250-300uF",
            link: "#",
            description: "Motor start capacitor for large capacitor-start motors",
            category: "Motor Capacitors"
          },
          {
            partNumber: "M10 Mounting Hardware",
            link: "#",
            description: "Complete mounting kit for secure installation",
            category: "Accessories"
          },
          {
            partNumber: "Wiring Terminal Block 25A",
            link: "#",
            description: "Terminal block for high-current motor connections",
            category: "Electrical Components"
          }
        ],
        applicationScenarios: [
          {
            title: "15 HP Industrial Motor",
            description: "E62.M16-104.M30 provides phase shift for efficient 15 HP industrial motor operation"
          },
          {
            title: "575V Compressor Motor",
            description: "High-voltage motor run capacitor for 575V compressor applications"
          },
          {
            title: "Large Water Pump",
            description: "Reliable motor run capacitor for continuous duty water treatment pumps"
          }
        ],
        keywords: ["Electronicon E62.M16-104.M30", "100uF motor capacitor", "660V motor run capacitor"],
        faqs: [
          generateFAQ(
            "What size motor is the E62.M16-104.M30 suitable for?",
            "The E62.M16-104.M30 with 100uF capacitance is suitable for 10-15 HP (7.5-11 kW) single-phase AC motors at 460-575V. The exact motor size depends on motor design and voltage: at 460V, typically 10-12 HP; at 575V, up to 15 HP. Always verify against motor manufacturer specifications. Using incorrect capacitance causes performance issues: too low - reduced torque, overheating, hard starting; too high - excessive current, overheating, reduced efficiency. The 660V rating provides excellent margin for 575V applications. For replacement applications, match the original capacitor's uF rating exactly. Consult motor nameplate or manufacturer if unsure.",
            "Verify your motor's voltage and power rating to confirm 100uF and 660V are appropriate for your application.",
            ["E62.M16-104.M30 motor size", "100uF motor application", "large motor capacitor"]
          ),
          generateFAQ(
            "How do I wire the E62.M16-104.M30 in a high-voltage motor circuit?",
            "The E62.M16-104.M30 wiring follows standard motor run capacitor connections: 1) Connection - connect between line (L1) and motor auxiliary winding, 2) High Voltage Safety - use proper voltage-rated wiring and enclosures for 575V systems, 3) Protection - include overload protection sized for motor full load current, 4) Grounding - ensure motor frame is properly grounded, 5) Disconnect - provide lockable disconnect switch for maintenance. For 575V systems, ensure all components (switches, contactors, wire) are rated for the voltage. Use appropriately sized conductors per NEC or local code. The M10 stud provides secure mounting. Always follow motor wiring diagram and local electrical codes.",
            "Follow motor wiring diagram with proper voltage-rated components for safe 575V motor installation.",
            ["575V motor wiring", "high voltage capacitor", "E62.M16-104.M30 installation"]
          ),
          generateFAQ(
            "What is the expected lifetime of the E62.M16-104.M30?",
            "The E62.M16-104.M30 is rated for 60,000 hours lifetime at 70C hot spot temperature. For large motor run capacitors, this translates to approximately 7 years continuous or 15-20 years in typical intermittent duty. Lifetime depends on: 1) Temperature - every 10C increase reduces lifetime by 50%, 2) Voltage - sustained overvoltage accelerates aging, 3) Current - excessive current causes additional heating. The self-healing technology provides graceful aging with gradual capacitance reduction. Monitor for signs of aging: reduced motor torque, increased current, overheating. The dry-filled design eliminates oil leakage. For critical applications, implement capacitance monitoring to predict replacement needs.",
            "Expect 10-20 year service life and implement monitoring for critical motor applications.",
            ["E62.M16-104.M30 lifetime", "motor capacitor life", "run capacitor durability"]
          ),
          generateFAQ(
            "What thermal considerations apply to the E62.M16-104.M30?",
            "Thermal management is critical for the E62.M16-104.M30: 1) Heat Generation - 100uF at high voltage generates more heat than smaller capacitors, 2) Ventilation - ensure adequate airflow around capacitor, 3) Mounting - M10 stud mount allows heat transfer to grounded chassis, 4) Ambient - keep ambient temperature below 50C for reliable operation, 5) Monitoring - consider temperature monitoring for critical applications. Typical operating temperatures: 40-50C at 25C ambient, 60-75C at 40C ambient. If capacitor exceeds 85C hot spot temperature, reduce loading or improve cooling. The dry filling technology handles heat well but long-term exposure to high temperatures reduces lifetime.",
            "Ensure adequate ventilation and thermal management to keep capacitor below 85C hot spot temperature.",
            ["motor capacitor thermal", "E62.M16-104.M30 temperature", "capacitor cooling"]
          ),
          generateFAQ(
            "Can the E62.M16-104.M30 be used for 480V systems?",
            "Yes, the E62.M16-104.M30 with 660V AC rating is excellent for 480V systems. The 660V rating provides 37% margin above 480V, which is well above the typical 1.5-2x requirement. This margin accommodates voltage transients, starting surges, and provides long capacitor life. The 100uF capacitance is appropriate for 10-15 HP motors at 480V. For 480V systems, the 660V rating is the preferred choice over 450V-rated capacitors as it provides better reliability and longer life. The higher rating handles voltage spikes and brownout conditions better. For 480V motors requiring 100uF, this is an excellent, reliable choice.",
            "The E62.M16-104.M30 is an excellent choice for 480V systems with generous voltage margin.",
            ["480V motor capacitor", "E62.M16-104.M30 480V", "high voltage margin"]
          ),
          generateFAQ(
            "How do I test the E62.M16-104.M30?",
            "Testing the E62.M16-104.M30: 1) Safety - disconnect power, discharge capacitor with 100kOhm resistor for 30 seconds minimum, 2) Visual - check for swelling, damage, or oil signs (dry filled so none), 3) Capacitance - measure with LCR meter at 1kHz, should be 90-110uF (+/-10%), 4) ESR - measure equivalent series resistance, should be low (<0.5 ohm), 5) Insulation - check insulation resistance to case >10,000 MOhm. Capacitance below 90uF indicates aging. For in-service testing, measure motor current - high current indicates failing capacitor. Document test results for comparison over time.",
            "Use capacitance meter to verify 100uF value and inspect for physical condition.",
            ["E62.M16-104.M30 testing", "motor capacitor test", "capacitor verification"]
          )
        ]
      }
    ]
  }
];

// Add the remaining categories
productsData.categories = [...productsData.categories, ...remainingCategories];

// Write updated products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('Added Snubber Capacitors and Motor Run Capacitors categories');
console.log('Total categories now: ' + productsData.categories.length);
console.log('Categories: ' + productsData.categories.map(c => c.name).join(', '));
