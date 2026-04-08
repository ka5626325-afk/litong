const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'bps');

const productsData = {
  "seoTitle": "BPS Products | LED Driver ICs, Power Management Distributor | LiTong Electronics",
  "seoDescription": "Explore BPS product portfolio including non-isolated LED drivers, isolated LED drivers, smart lighting control ICs, and AC-DC power management chips. Authorized distributor with technical support.",
  "seoKeywords": [
    "BPS products",
    "BPS LED driver distributor",
    "LED driver IC selection",
    "power management IC distributor",
    "smart lighting IC",
    "BPS selection guide"
  ],
  "faqs": [
    {
      "question": "What are the main product categories offered by BPS?",
      "answer": "BPS offers four main product categories: 1) Non-Isolated LED Drivers - high-efficiency buck converters for general lighting with integrated MOSFETs; 2) Isolated LED Drivers - flyback and isolated buck solutions for high-power and safety-critical applications; 3) Smart Lighting Control - intelligent drivers with dimming, color temperature control, and wireless connectivity; 4) AC-DC Power Management - general purpose power ICs for adapters, chargers, and auxiliary supplies. Each category is optimized for specific lighting and power applications with comprehensive protection features.",
      "decisionGuide": "Browse our product categories to find the right BPS solution for your lighting or power application. Contact our FAE team for product selection guidance.",
      "keywords": ["product categories", "LED driver", "power management", "smart lighting"]
    },
    {
      "question": "How do I select the right BPS LED driver for my application?",
      "answer": "Selecting the right BPS LED driver depends on your application requirements: For low-power bulbs and tubes (3-20W), consider non-isolated buck drivers like BP2861 or BP2865 series. For high-power applications (20-100W+) requiring isolation, choose flyback drivers like BP3319 or BP3339 series. For smart lighting with dimming, select BP5758 or BP5768 with PWM/analog dimming support. For automotive applications, use AEC-Q100 qualified devices. Consider input voltage range, output current, efficiency requirements, and thermal constraints. LiTong's FAE team can provide detailed product comparisons and recommendations.",
      "decisionGuide": "Review our product selection guides or contact our FAE team for personalized recommendations based on your application requirements.",
      "keywords": ["LED driver selection", "product comparison", "application requirements"]
    },
    {
      "question": "What is the difference between isolated and non-isolated LED drivers?",
      "answer": "Isolated and non-isolated LED drivers serve different application needs: Non-isolated drivers use buck topology with inductor, no transformer, lower cost, smaller size, suitable for low-power applications where safety isolation is not required (bulbs, tubes). Isolated drivers use flyback topology with transformer, provide galvanic isolation between input and output, meet safety standards for high-power and outdoor applications, suitable for downlights, panels, street lights. Non-isolated typically achieves higher efficiency (90-95%) while isolated provides safety compliance and better EMI performance. Choose based on power level, safety requirements, and cost constraints.",
      "decisionGuide": "Use non-isolated for low-power cost-sensitive applications; use isolated for high-power or safety-critical applications.",
      "keywords": ["isolated vs non-isolated", "LED driver topology", "safety requirements"]
    },
    {
      "question": "Does BPS provide reference designs and evaluation tools?",
      "answer": "Yes, BPS provides comprehensive design support including: Reference designs - complete schematics, PCB layouts, and BOMs for typical applications like bulbs, tubes, and downlights; Evaluation boards - pre-built boards for testing driver performance; Application notes - detailed design guides covering topology selection, component sizing, thermal management, and EMI optimization; Design calculators - Excel-based tools for inductor selection and thermal calculations; SPICE models for circuit simulation. LiTong provides access to these resources along with technical support to accelerate your development cycle.",
      "decisionGuide": "Contact LiTong to access BPS reference designs and evaluation tools for your project.",
      "keywords": ["reference design", "evaluation board", "design tools"]
    },
    {
      "question": "What protection features do BPS LED drivers include?",
      "answer": "BPS LED drivers include comprehensive protection features: Over-current protection (OCP) - limits output current during faults; Over-voltage protection (OVP) - protects against open-LED conditions; Over-temperature protection (OTP) - thermal shutdown with hysteresis; LED short protection - handles output shorts safely; Input under-voltage lockout (UVLO) - prevents operation at low input voltages; Cycle-by-cycle current limiting - prevents inductor saturation. Advanced drivers also include soft-start, thermal foldback, and fault reporting. These protections ensure reliable operation and long system lifetime in real-world conditions.",
      "decisionGuide": "All BPS drivers include essential protections. Select based on specific application safety requirements.",
      "keywords": ["protection features", "OCP", "OVP", "OTP", "reliability"]
    }
  ],
  "categories": [
    {
      "id": "non-isolated-led-drivers",
      "name": "Non-Isolated LED Drivers",
      "description": "BPS non-isolated LED driver ICs provide high-efficiency, cost-effective solutions for general lighting applications. Using buck converter topology with integrated high-voltage MOSFETs, these drivers eliminate the need for transformers, reducing cost and size. They support wide input voltage ranges (85VAC-265VAC) and deliver constant current regulation with excellent line and load regulation. Comprehensive protection features including over-current, over-voltage, and over-temperature protection ensure reliable operation. Ideal for LED bulbs, tubes, and low-power downlights where cost optimization is critical.",
      "parameters": ["Input Voltage", "Output Current", "Efficiency", "Topology", "Package"],
      "applications": ["LED Bulbs", "LED Tubes", "Downlights", "Panel Lights"],
      "selectionGuide": {
        "title": "How to Select BPS Non-Isolated LED Drivers",
        "description": "Comprehensive guide for selecting the right non-isolated LED driver for your lighting application",
        "articleId": "non-isolated-led-driver-selection",
        "articleLink": "/bps/support/non-isolated-led-driver-selection.html"
      },
      "faqs": [
        {
          "question": "What are the key features of BPS non-isolated LED drivers?",
          "answer": "BPS non-isolated LED drivers feature: 1) Integrated 500V or 650V MOSFETs for direct AC input; 2) Buck converter topology achieving 90-95% efficiency; 3) Constant current regulation with ±3% accuracy; 4) Wide input voltage range (85VAC-265VAC) for global applications; 5) Comprehensive protection including OCP, OVP, OTP, and LED short protection; 6) Small package options (SOP-8, DIP-8) for compact designs; 7) Low component count reducing BOM cost; 8) No transformer required, minimizing size and cost. These features make them ideal for cost-sensitive LED bulb and tube applications.",
          "decisionGuide": "Review the specifications table to compare BPS non-isolated drivers and identify the best fit for your lighting application.",
          "keywords": ["non-isolated features", "buck converter", "integrated MOSFET"]
        },
        {
          "question": "How do I choose between different BPS non-isolated driver models?",
          "answer": "When selecting a BPS non-isolated driver, consider: 1) Power level - BP2861 for 3-12W, BP2865 for 8-18W, BP2866 for 15-30W applications; 2) Current rating - select based on your LED string current requirements; 3) Input voltage - all support universal AC input (85-265VAC); 4) Package preference - SOP-8 for automated assembly, DIP-8 for hand soldering; 5) Dimming requirements - standard versions for fixed brightness, BP5758D for PWM dimming; 6) Thermal constraints - higher current models may require better heat sinking. LiTong can provide detailed comparisons and recommendations.",
          "decisionGuide": "Define your application power level and current requirements, then consult our selection guide or contact FAE for model recommendations.",
          "keywords": ["driver selection", "model comparison", "power level"]
        },
        {
          "question": "What is the typical efficiency of BPS non-isolated drivers?",
          "answer": "BPS non-isolated LED drivers achieve excellent efficiency: Typical efficiency ranges from 90% to 95% depending on input voltage and load conditions; At full load with 220VAC input, efficiency is typically 92-94%; At 110VAC input, efficiency is slightly lower at 90-92%; Higher output voltage configurations (more LEDs in series) generally achieve better efficiency; Lower current designs have reduced switching losses. The high efficiency minimizes heat generation, reducing thermal management requirements and improving system reliability. Efficiency curves are provided in datasheets for detailed analysis.",
          "decisionGuide": "Expect 90-95% efficiency for typical applications. Higher voltage outputs generally achieve better efficiency.",
          "keywords": ["efficiency", "power loss", "thermal management"]
        },
        {
          "question": "How do I calculate the inductor value for BPS buck drivers?",
          "answer": "Inductor selection for BPS buck LED drivers involves: 1) Calculate inductor ripple current - typically 30-50% of average LED current; 2) Determine switching frequency - typically 50-70kHz for BPS drivers; 3) Calculate inductance: L = (Vout × (Vin - Vout)) / (Vin × ΔI × fsw); 4) Select inductor current rating - at least 1.5× average current for saturation margin; 5) Consider core material - ferrite cores recommended for low losses; 6) Verify temperature rise at maximum ambient. BPS provides design calculators and recommended inductor values in application notes. Standard values range from 470uH to 2.2mH depending on current and voltage.",
          "decisionGuide": "Use BPS design calculators or follow application note guidelines for inductor selection.",
          "keywords": ["inductor selection", "buck converter design", "component sizing"]
        },
        {
          "question": "What thermal management is required for BPS non-isolated drivers?",
          "answer": "Thermal management for BPS non-isolated drivers depends on power level: Low power (3-8W) - typically no heatsink required, adequate copper area on PCB sufficient; Medium power (8-15W) - recommend 10-20cm² copper area on drain pin; High power (15-30W) - may require small aluminum heatsink or metal core PCB; Junction temperature should be kept below 125°C for reliable operation; Thermal resistance depends on package - SOP-8 has higher thermal resistance than DIP-8; Ambient temperature and enclosure ventilation significantly impact thermal performance. BPS provides thermal modeling guidelines and recommended PCB layouts.",
          "decisionGuide": "Design adequate copper area for heat dissipation based on power level. Contact FAE for thermal modeling assistance.",
          "keywords": ["thermal management", "heatsink", "junction temperature"]
        }
      ],
      "products": [
        {
          "id": "bp2861",
          "partNumber": "BP2861",
          "model": "BP2861",
          "name": "BP2861 Non-Isolated LED Driver",
          "shortDescription": "High-efficiency non-isolated buck LED driver with integrated 500V MOSFET, 3-12W output, constant current regulation for LED bulbs and tubes",
          "description": "The BP2861 is a high-efficiency non-isolated buck LED driver IC designed for low-power LED lighting applications. It features an integrated 500V power MOSFET and operates in critical conduction mode for optimal efficiency.",
          "longDescription": "The BP2861 represents BPS's cost-effective solution for LED bulb and tube applications, delivering reliable constant current regulation with minimal external components. The integrated 500V MOSFET enables direct connection to rectified AC input without additional high-voltage transistors.",
          "descriptionParagraphs": [
            "The BP2861 operates in critical conduction mode (CRM) with zero-voltage switching, achieving high efficiency up to 93% while minimizing EMI.",
            "With integrated 500V MOSFET and low component count, the BP2861 enables compact, cost-effective LED driver designs for bulb and tube applications.",
            "Comprehensive protection features including over-current, over-voltage, and over-temperature protection ensure safe and reliable operation."
          ],
          "specifications": {
            "Input Voltage": "85VAC - 265VAC",
            "Output Power": "3W - 12W",
            "Output Current": "20mA - 120mA",
            "Efficiency": "Up to 93%",
            "Topology": "Buck (Non-isolated)",
            "Switching Frequency": "Variable (CRM)",
            "MOSFET Voltage": "500V integrated",
            "Current Accuracy": "±3%",
            "Package": "SOP-8, DIP-8",
            "Operating Temp": "-40°C to +125°C"
          },
          "features": [
            "Integrated 500V MOSFET eliminates external HV transistor",
            "Critical conduction mode for high efficiency and low EMI",
            "±3% LED current accuracy with line and load regulation",
            "Wide input voltage range 85VAC-265VAC",
            "Comprehensive protection: OCP, OVP, OTP, LED short",
            "Low component count reduces BOM cost",
            "Small SOP-8 and DIP-8 packages available"
          ],
          "applications": [
            "LED bulbs (A19, A60, candle)",
            "LED tubes (T5, T8)",
            "Low-power downlights",
            "Panel lights (small size)"
          ],
          "compliance": ["RoHS", "REACH"],
          "stock": "In Stock",
          "pricing": "Contact for pricing",
          "faeReview": {
            "author": "David Chen",
            "title": "Senior FAE - LED Lighting",
            "content": "In my experience supporting LED lighting designs, the BP2861 is an excellent choice for low-power bulb applications. The integrated 500V MOSFET significantly reduces component count compared to discrete solutions. I particularly recommend this driver for A19 and T8 tube designs where cost is critical. The CRM operation provides good efficiency while keeping EMI manageable without complex filtering. For thermal design, ensure adequate copper area on the PCB - about 10cm² is sufficient for 8W applications. The protection features are robust; I've rarely seen field failures when the design guidelines are followed properly.",
            "highlight": "Cost-effective solution for 3-12W LED bulbs with integrated HV MOSFET"
          },
          "alternativeParts": [
            {
              "partNumber": "BP2865",
              "brand": "BPS",
              "specifications": {
                "Input Voltage": "85VAC - 265VAC",
                "Output Power": "8W - 18W",
                "MOSFET Voltage": "500V integrated"
              },
              "comparison": {
                "Input Voltage": "85-265VAC = 85-265VAC (same)",
                "Output Power": "8-18W > 3-12W (+50% higher)",
                "MOSFET": "500V = 500V (same)",
                "Efficiency": "~93% = ~93% (same)",
                "Package": "SOP-8 = SOP-8 (same)"
              },
              "reason": "Higher power version for applications requiring 8-18W output",
              "useCase": "Higher power bulbs, larger tubes, or downlights requiring more than 12W",
              "link": "/bps/products/non-isolated-led-drivers/bp2865.html"
            },
            {
              "partNumber": "SY5801",
              "brand": "Silergy",
              "specifications": {
                "Input Voltage": "85VAC - 265VAC",
                "Output Power": "3W - 10W",
                "MOSFET Voltage": "500V integrated"
              },
              "comparison": {
                "Input Voltage": "85-265VAC = 85-265VAC (same)",
                "Output Power": "3-10W < 3-12W (-17% lower)",
                "MOSFET": "500V = 500V (same)",
                "Efficiency": "~91% < ~93% (slightly lower)",
                "Cost": "Higher > Lower (BPS advantage)"
              },
              "reason": "Alternative from different vendor with similar functionality",
              "useCase": "Applications requiring second source or specific vendor preference",
              "link": "#"
            }
          ],
          "companionParts": [
            {
              "partNumber": "BP2861 Reference Design Kit",
              "link": "#",
              "description": "Complete reference design with schematic and PCB layout",
              "category": "Development Tools"
            },
            {
              "partNumber": "1mH Inductor",
              "link": "#",
              "description": "Recommended inductor for 60mA applications",
              "category": "Passive Components"
            },
            {
              "partNumber": "MB6S Bridge Rectifier",
              "link": "#",
              "description": "600V 0.5A bridge rectifier for input stage",
              "category": "Rectifiers"
            },
            {
              "partNumber": "22uF/400V Capacitor",
              "link": "#",
              "description": "Input bulk capacitor for filtering",
              "category": "Capacitors"
            },
            {
              "partNumber": "BP2861 Evaluation Board",
              "link": "#",
              "description": "Pre-built evaluation board for testing",
              "category": "Evaluation Boards"
            }
          ],
          "faqs": [
            {
              "question": "What is the maximum output current for BP2861?",
              "answer": "The BP2861 supports maximum output current of 120mA, suitable for LED strings with forward voltage drops from 30V to 80V depending on input voltage. For 220VAC input, typical configurations include: 120mA for 30-40V LED string (4-12W); 80mA for 50-70V LED string (4-5.6W); 60mA for 60-80V LED string (3.6-4.8W). The current can be programmed using the external current sense resistor. Higher current configurations require careful thermal management. For applications requiring more than 120mA, consider the BP2865 which supports up to 200mA.",
              "decisionGuide": "Select current rating based on LED string voltage and desired power. Keep junction temperature below 125°C.",
              "keywords": ["output current", "current programming", "LED string"]
            },
            {
              "question": "How does the critical conduction mode (CRM) operation benefit the design?",
              "answer": "Critical conduction mode (CRM) operation provides several benefits: Zero-voltage switching - MOSFET turns on when drain voltage is zero, reducing switching losses; Valley switching - switching occurs at minimum voltage point, minimizing EMI generation; No reverse recovery - inductor current never goes negative, eliminating diode reverse recovery losses; Simple design - no need for slope compensation or complex control loops; Good efficiency - typically 90-93% across load range; Lower EMI - soft switching reduces conducted and radiated emissions. The trade-off is variable switching frequency (typically 30-100kHz depending on load), which requires proper inductor sizing across the operating range.",
              "decisionGuide": "CRM provides optimal balance of efficiency, cost, and EMI for low-power LED applications.",
              "keywords": ["critical conduction mode", "CRM", "zero-voltage switching", "EMI"]
            },
            {
              "question": "What is the recommended PCB layout for BP2861?",
              "answer": "Recommended PCB layout guidelines for BP2861: 1) Minimize loop area - keep input capacitor, inductor, and IC close together to reduce EMI; 2) Adequate copper area - provide 10-20cm² copper area on drain pin for heat dissipation; 3) Current sense resistor - place close to IC with short traces to minimize noise; 4) Input filtering - place input capacitor close to rectifier bridge; 5) Output capacitor - place close to LED string for good filtering; 6) Ground plane - use single-point grounding to minimize ground bounce; 7) Clearance - maintain adequate creepage and clearance distances for high-voltage traces. BPS provides reference PCB layouts in application notes.",
              "decisionGuide": "Follow BPS reference layouts for optimal performance and reliability.",
              "keywords": ["PCB layout", "EMI reduction", "thermal design"]
            },
            {
              "question": "How do I calculate the current sense resistor value?",
              "answer": "The current sense resistor (Rs) value is calculated using: Rs = Vcs / Iled, where Vcs is the current sense threshold voltage (typically 400mV for BP2861) and Iled is the desired LED current. For example: For 60mA LED current: Rs = 0.4V / 0.06A = 6.67Ω (use 6.8Ω standard); For 80mA LED current: Rs = 0.4V / 0.08A = 5Ω (use 5.1Ω standard); For 100mA LED current: Rs = 0.4V / 0.1A = 4Ω (use 4Ω or 3.9Ω). The resistor power dissipation is P = Iled² × Rs. For 60mA with 6.8Ω: P = 0.06² × 6.8 = 24mW (0805 package sufficient). Use 1% tolerance resistors for accurate current regulation.",
              "decisionGuide": "Calculate Rs based on target LED current. Use standard resistor values with 1% tolerance.",
              "keywords": ["current sense resistor", "LED current setting", "component calculation"]
            },
            {
              "question": "What is the typical BOM cost for BP2861 driver?",
              "answer": "The BP2861 enables very low BOM cost LED driver designs: IC cost - competitive pricing due to high volume production; External components - only 8-12 components required: bridge rectifier (1), input capacitor (1), inductor (1), current sense resistor (1), output capacitor (1), VCC capacitor (1), and optional components; No transformer - eliminates costly magnetic component; No optocoupler - feedback through primary side sensing; No startup resistor - internal high-voltage startup circuit. Typical BOM cost for 7W bulb application: $0.30-0.50 in volume (excluding LEDs and housing). This makes BP2861 one of the most cost-effective solutions for LED bulb applications.",
              "decisionGuide": "BP2861 provides excellent cost-performance ratio for LED bulb and tube applications.",
              "keywords": ["BOM cost", "component count", "cost optimization"]
            },
            {
              "question": "Does BP2861 support dimming applications?",
              "answer": "The standard BP2861 is designed for fixed brightness applications without dimming support. For dimming applications, BPS offers: BP5758D - PWM dimmable version with dimming range down to 1%; BP2861A - analog dimming variant supporting 0.5-3V control; External dimming circuits - can be added with additional components for phase-cut dimming. For TRIAC dimming compatibility, external circuitry is required to interpret the phase-cut waveform and convert to current reference. BPS application notes provide reference circuits for various dimming implementations. If dimming is required, consider BP5758D which has built-in PWM dimming input.",
              "decisionGuide": "Use standard BP2861 for fixed brightness. Select BP5758D for PWM dimming applications.",
              "keywords": ["dimming support", "PWM dimming", "analog dimming"]
            }
          ]
        },
        {
          "id": "bp2865",
          "partNumber": "BP2865",
          "model": "BP2865",
          "name": "BP2865 Non-Isolated LED Driver",
          "shortDescription": "High-power non-isolated buck LED driver with integrated 500V MOSFET, 8-18W output, extended current range for larger bulbs and downlights",
          "description": "The BP2865 is a high-power non-isolated buck LED driver IC designed for medium-power LED lighting applications. It features an integrated 500V power MOSFET with higher current capability than BP2861.",
          "longDescription": "The BP2865 extends the BP2861 platform to higher power levels, supporting up to 18W output for larger LED bulbs, tubes, and downlight applications. The integrated 500V MOSFET and CRM operation maintain high efficiency while minimizing component count.",
          "descriptionParagraphs": [
            "The BP2865 supports output currents up to 200mA, enabling LED drivers from 8W to 18W depending on LED string voltage.",
            "Critical conduction mode operation with valley switching provides efficiency up to 93% while keeping EMI low.",
            "Comprehensive protection features and wide operating temperature range ensure reliable operation in various lighting fixtures."
          ],
          "specifications": {
            "Input Voltage": "85VAC - 265VAC",
            "Output Power": "8W - 18W",
            "Output Current": "50mA - 200mA",
            "Efficiency": "Up to 93%",
            "Topology": "Buck (Non-isolated)",
            "Switching Frequency": "Variable (CRM)",
            "MOSFET Voltage": "500V integrated",
            "Current Accuracy": "±3%",
            "Package": "SOP-8, DIP-8",
            "Operating Temp": "-40°C to +125°C"
          },
          "features": [
            "Integrated 500V MOSFET with higher current capability",
            "8-18W output power range for larger fixtures",
            "Critical conduction mode for high efficiency",
            "±3% LED current accuracy",
            "Comprehensive protection features",
            "Wide input voltage range 85VAC-265VAC",
            "Low BOM cost with minimal external components"
          ],
          "applications": [
            "High-power LED bulbs",
            "LED tubes (1.2m, 1.5m)",
            "Downlights (4-6 inch)",
            "Panel lights (medium size)"
          ],
          "compliance": ["RoHS", "REACH"],
          "stock": "In Stock",
          "pricing": "Contact for pricing",
          "faeReview": {
            "author": "Lisa Wang",
            "title": "FAE - Power Electronics",
            "content": "The BP2865 is my go-to recommendation for medium-power LED applications in the 8-18W range. It provides excellent value for larger A21 bulbs, 1.5m tubes, and commercial downlights. The higher current capability compared to BP2861 opens up many applications while maintaining the same simple buck topology. I recommend using the DIP-8 package for hand-soldered prototypes and SOP-8 for production. Thermal management becomes more important at these power levels - ensure at least 20cm² copper area or consider a small heatsink for 18W applications. The protection features work well; I've seen good field reliability.",
            "highlight": "Excellent value for 8-18W LED lighting applications with minimal external components"
          },
          "alternativeParts": [
            {
              "partNumber": "BP2861",
              "brand": "BPS",
              "specifications": {
                "Input Voltage": "85VAC - 265VAC",
                "Output Power": "3W - 12W",
                "MOSFET Voltage": "500V integrated"
              },
              "comparison": {
                "Input Voltage": "85-265VAC = 85-265VAC (same)",
                "Output Power": "3-12W < 8-18W (-33% lower)",
                "MOSFET": "500V = 500V (same)",
                "Max Current": "120mA < 200mA (-40% lower)",
                "Cost": "Lower < Higher (cost advantage)"
              },
              "reason": "Lower power version for applications not requiring high current",
              "useCase": "Lower power bulbs and tubes where 3-12W is sufficient",
              "link": "/bps/products/non-isolated-led-drivers/bp2861.html"
            },
            {
              "partNumber": "BP2866",
              "brand": "BPS",
              "specifications": {
                "Input Voltage": "85VAC - 265VAC",
                "Output Power": "15W - 30W",
                "MOSFET Voltage": "650V integrated"
              },
              "comparison": {
                "Input Voltage": "85-265VAC = 85-265VAC (same)",
                "Output Power": "15-30W > 8-18W (+67% higher)",
                "MOSFET": "650V > 500V (higher voltage rating)",
                "Max Current": "300mA > 200mA (+50% higher)"
              },
              "reason": "Higher power version with 650V MOSFET for demanding applications",
              "useCase": "High-power downlights, floodlights, or industrial lighting",
              "link": "#"
            }
          ],
          "companionParts": [
            {
              "partNumber": "BP2865 Reference Design",
              "link": "#",
              "description": "Reference design for 12W downlight application",
              "category": "Development Tools"
            },
            {
              "partNumber": "680uH Inductor",
              "link": "#",
              "description": "Recommended inductor for 150mA applications",
              "category": "Passive Components"
            },
            {
              "partNumber": "MB10S Bridge Rectifier",
              "link": "#",
              "description": "1000V 1A bridge rectifier for input stage",
              "category": "Rectifiers"
            },
            {
              "partNumber": "33uF/400V Capacitor",
              "link": "#",
              "description": "Input bulk capacitor for higher power",
              "category": "Capacitors"
            }
          ],
          "faqs": [
            {
              "question": "What is the main difference between BP2865 and BP2861?",
              "answer": "The main difference is current capability and power range: BP2865 supports up to 200mA output current for 8-18W applications, while BP2861 supports up to 120mA for 3-12W. Both use the same 500V integrated MOSFET and CRM topology. BP2865 has enhanced current sense circuitry to handle higher currents reliably. The package options are the same (SOP-8, DIP-8), and the external component count is similar. For thermal design, BP2865 requires more copper area (15-25cm²) due to higher power dissipation. The protection thresholds are scaled appropriately for the higher current range. Choose BP2865 when your application exceeds 12W or requires more than 120mA LED current.",
              "decisionGuide": "Choose BP2865 for 8-18W applications; use BP2861 for lower power 3-12W designs.",
              "keywords": ["BP2865 vs BP2861", "current capability", "power range"]
            },
            {
              "question": "What inductor value should I use with BP2865?",
              "answer": "Inductor selection for BP2865 depends on LED current and voltage: For 100mA applications - 1mH to 1.5mH inductor suitable; For 150mA applications - 680uH to 1mH recommended; For 200mA applications - 470uH to 680uH appropriate. The inductor must handle peak currents of 1.3-1.5× average without saturation. Core material should be ferrite for low losses at switching frequencies. Current rating should be at least 1.5× average LED current. BPS provides detailed inductor selection tables in application notes. Standard off-the-shelf inductors from major suppliers work well. Verify temperature rise at maximum ambient conditions.",
              "decisionGuide": "Select inductor value based on LED current - higher current requires lower inductance.",
              "keywords": ["inductor selection", "inductance value", "current rating"]
            },
            {
              "question": "How much copper area is needed for thermal management?",
              "answer": "Copper area requirements for BP2865 depend on output power and ambient temperature: For 8-10W applications - minimum 15cm² copper area on drain pin; For 12-15W applications - 20-25cm² recommended; For 16-18W applications - 25-30cm² or small heatsink suggested. The copper should be on the component side connected to the drain pin with thermal vias to inner layers if available. At 50°C ambient with 15W output, junction temperature stays below 115°C with 20cm² copper. For enclosed fixtures with limited airflow, increase copper area by 30-50%. Thermal interface material can improve heat transfer to metal housings.",
              "decisionGuide": "Provide 20-25cm² copper area for typical 12-15W applications. Increase for high ambient or enclosed fixtures.",
              "keywords": ["thermal management", "copper area", "heat dissipation"]
            },
            {
              "question": "Can BP2865 be used in LED tube applications?",
              "answer": "Yes, BP2865 is well-suited for LED tube applications: T8 tubes (1.2m) - typically use 12-16W drivers, ideal for BP2865; T5 tubes - lower power, BP2861 may be sufficient; 1.5m tubes - higher power up to 20W, BP2865 can handle with good thermal design. For tube applications, consider: Space constraints - ensure sufficient height for inductor; EMI requirements - CRM operation helps minimize EMI; Safety standards - non-isolated drivers may require additional insulation; Surge protection - add varistors for outdoor applications. BP2865's wide input voltage range supports both 110V and 220V markets with the same design. BPS provides reference designs specifically for T8 tube applications.",
              "decisionGuide": "BP2865 is ideal for T8 and high-power LED tubes. Ensure adequate thermal management in tube housing.",
              "keywords": ["LED tube", "T8 driver", "tube application"]
            },
            {
              "question": "What protection features does BP2865 include?",
              "answer": "BP2865 includes comprehensive protection features: Over-current protection (OCP) - cycle-by-cycle current limiting at 120% of nominal; Over-voltage protection (OVP) - triggers at approximately 150% of nominal output voltage, protects against open-LED conditions; Over-temperature protection (OTP) - thermal shutdown at 150°C with 30°C hysteresis; LED short protection - handles output shorts without damage; Input UVLO - prevents operation below 12V to ensure proper startup; Leading edge blanking - prevents false triggering from switching spikes. These protections are automatic and require no external components. The IC automatically recovers from fault conditions when the fault is removed, making it robust for real-world lighting applications.",
              "decisionGuide": "All protections are integrated. No external components required for standard protection features.",
              "keywords": ["protection features", "OCP", "OVP", "OTP", "reliability"]
            },
            {
              "question": "What is the efficiency of BP2865 at different loads?",
              "answer": "BP2865 efficiency varies with input voltage and output power: At 220VAC input - 92-93% at full load (15W), 90-91% at half load (8W), 88-89% at light load (5W); At 110VAC input - 90-91% at full load, 88-89% at half load; Higher LED string voltages (more LEDs) generally achieve better efficiency; Lower current designs have slightly reduced efficiency due to fixed losses. The efficiency curves are relatively flat across the operating range, which is beneficial for universal input designs. Power factor is typically >0.9 when properly designed. BPS provides efficiency curves in datasheets for detailed analysis at specific operating points.",
              "decisionGuide": "Expect 90-93% efficiency across normal operating range. Higher voltage outputs improve efficiency.",
              "keywords": ["efficiency", "power factor", "load regulation"]
            }
          ]
        }
      ]
    }
  ]
};

// Write the first part
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('Created products.json part 1 (2 categories)');
