#!/usr/bin/env node
/**
 * Generate complete ZLG Power brand data
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'zlg-power');

// Ensure directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Generate complete products.json
function generateProductsJson() {
  const productsData = {
    seoTitle: "ZLG Power Modules | DC-DC AC-DC Distributor | LiTong",
    seoDescription: "Browse ZLG Power isolated DC-DC converters, AC-DC power supplies, and POL converters. Technical specifications, selection guides, and FAE support from authorized distributor.",
    seoKeywords: ["ZLG Power distributor", "DC-DC converter selection", "AC-DC power supply distributor", "power module selection guide", "isolated power module distributor", "ZLG Power selection"],
    faqs: [
      {
        question: "What types of power modules does ZLG Power offer?",
        answer: "ZLG Power offers a comprehensive range of power conversion products including isolated DC-DC converters (1W to 100W), AC-DC power supplies (5W to 500W), non-isolated POL converters, and custom power solutions. Their products cover input voltages from 3.3V to 380V AC/DC and output voltages from 1.2V to 48V DC, serving diverse applications in industrial automation, telecommunications, medical equipment, and transportation.",
        decisionGuide: "Explore our product categories to find the right ZLG Power module for your application, or contact our FAE team for personalized recommendations.",
        keywords: ["ZLG Power product types", "power module categories", "DC-DC converter types"]
      },
      {
        question: "How do I choose between isolated and non-isolated DC-DC converters?",
        answer: "Isolated DC-DC converters provide galvanic isolation between input and output (typically 1500V to 3000V isolation), making them essential for safety-critical applications, medical equipment, and systems where ground loops must be eliminated. Non-isolated POL (Point-of-Load) converters are more compact, lower cost, and higher efficiency, ideal for board-level power distribution where isolation is not required. Choose isolated converters when: safety certification is needed, ground isolation is required, or noise immunity is critical. Choose non-isolated when: space is limited, cost is primary concern, or input/output share common ground.",
        decisionGuide: "Contact our FAE team to discuss your isolation requirements, safety standards, and system grounding for guidance on selecting the appropriate converter type.",
        keywords: ["isolated vs non-isolated", "DC-DC converter selection", "galvanic isolation"]
      },
      {
        question: "What input voltage ranges are available for ZLG Power DC-DC converters?",
        answer: "ZLG Power DC-DC converters support a wide range of input voltages: Fixed input models: 3.3V, 5V, 12V, 15V, 24V for regulated bus applications; Wide input models: 4.5-9V, 9-18V, 18-36V, 36-75V for battery and industrial bus applications; Ultra-wide input models: 85-264V AC or 100-370V DC for universal power applications. The wide input range models are particularly useful for battery-powered applications where input voltage varies with charge state, and industrial systems with unregulated bus voltages.",
        decisionGuide: "Provide your input voltage source (regulated DC, battery, or AC) and voltage range to our FAE team for specific module recommendations.",
        keywords: ["input voltage range", "wide input", "DC-DC input voltage"]
      },
      {
        question: "What is the difference between SIP, DIP, and SMD packages for power modules?",
        answer: "ZLG Power modules are available in three main package types: SIP (Single In-line Package) - Through-hole mounting with pins in a single row, easy for prototyping and repair, good for low-density boards; DIP (Dual In-line Package) - Through-hole with pins on two rows, more compact than SIP, widely used for 1W-10W modules; SMD (Surface Mount Device) - Direct solder to PCB surface, smallest footprint, best for automated assembly and high-density designs. Package selection depends on: manufacturing process (hand assembly vs automated), board space constraints, thermal requirements, and serviceability needs.",
        decisionGuide: "Consider your manufacturing process, board space, and thermal requirements when selecting package type. Contact FAE for package recommendations.",
        keywords: ["SIP package", "DIP package", "SMD package", "power module package"]
      },
      {
        question: "Does ZLG Power offer automotive-qualified power modules?",
        answer: "Yes, ZLG Power offers power modules qualified to automotive standards including AEC-Q100 for integrated circuits and IATF 16949 for manufacturing processes. Automotive-grade modules feature enhanced temperature ranges (-40C to +105C or +125C), vibration resistance, and extended reliability screening. These modules are used in electric vehicles, charging infrastructure, battery management systems, and automotive electronics. Contact LiTong Electronics for automotive qualification documentation and PPAP support.",
        decisionGuide: "For automotive applications, specify AEC-Q qualified modules and request automotive qualification documentation.",
        keywords: ["automotive power module", "AEC-Q100", "automotive qualified"]
      }
    ],
    categories: [
      // Category 1: Isolated DC-DC Converters
      {
        id: "isolated-dc-dc",
        name: "Isolated DC-DC Converters",
        slug: "isolated-dc-dc",
        description: "High-isolation DC-DC power modules for industrial and medical applications",
        longDescription: "ZLG Power isolated DC-DC converters provide galvanic isolation between input and output, essential for safety-critical applications and noise-sensitive systems. Featuring isolation voltages from 1500V to 3000V, these modules protect sensitive circuits from high-voltage transients and eliminate ground loop issues. Available in power ratings from 1W to 100W with various input voltage ranges (fixed 5V/12V/24V or wide 4:1 input), these converters serve industrial automation, medical equipment, telecommunications, and transportation applications. As your authorized ZLG Power distributor, LiTong Electronics provides comprehensive technical support, selection guidance, and competitive pricing. Our FAE team offers expert assistance in power module selection for your specific application requirements.",
        image: "/assets/brands/zlg-power/isolated-dc-dc.jpg",
        icon: "fa-bolt",
        productCount: 2,
        series: [
          { name: "E_UHB-1W", description: "1W ultra-wide input isolated DC-DC converter", power: "1W", isolation: "3000V" },
          { name: "B_S-1W", description: "1W SIP isolated DC-DC converter with fixed input", power: "1W", isolation: "1500V" }
        ],
        parameters: ["Input Voltage", "Output Voltage", "Power Rating", "Isolation Voltage", "Efficiency"],
        selectionGuide: {
          title: "How to Select ZLG Power Isolated DC-DC Converters",
          description: "Comprehensive guide for selecting isolated DC-DC converters based on isolation requirements, input voltage, and power rating",
          articleId: "isolated-dc-dc-selection-guide",
          articleLink: "/zlg-power/support/isolated-dc-dc-selection-guide.html",
          link: "/zlg-power/support/isolated-dc-dc-selection-guide.html",
          selectionGuideLink: "/zlg-power/support/isolated-dc-dc-selection-guide.html"
        },
        selectionGuideLink: "/zlg-power/support/isolated-dc-dc-selection-guide.html",
        specifications: { powerRange: "1W - 100W", inputVoltage: "3.3V - 75V DC", outputVoltage: "3.3V - 48V DC", isolationVoltage: "1500V - 3000V DC", efficiency: "Up to 88%", packages: "SIP, DIP, SMD" },
        applications: ["Industrial automation", "Medical equipment", "Telecommunications", "Transportation", "Test equipment"],
        faqs: [
          { question: "What isolation voltage do ZLG Power isolated converters provide?", answer: "ZLG Power isolated DC-DC converters offer various isolation voltage levels: Standard isolation: 1500V DC (1 minute) for general industrial applications;