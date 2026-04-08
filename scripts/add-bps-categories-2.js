const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'bps');
const productsFile = path.join(dataDir, 'products.json');

// Read existing products.json
let productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Add remaining 2 categories
const additionalCategories = [
  {
    "id": "smart-lighting-control",
    "name": "Smart Lighting Control",
    "description": "BPS smart lighting control ICs enable intelligent LED lighting with dimming, color temperature adjustment, and wireless connectivity. These drivers support analog dimming, PWM dimming, and digital control interfaces for smart home and IoT applications. Features include smooth dimming curves, wide dimming range (1-100%), and compatibility with various control protocols. The integrated control logic reduces external component count while providing advanced lighting features. Ideal for smart bulbs, connected downlights, and intelligent lighting systems.",
    "parameters": ["Input Voltage", "Dimming Range", "Control Interface", "Power Range", "Features"],
    "applications": ["Smart Bulbs", "Connected Downlights", "CCT Lighting", "IoT Lighting"],
    "selectionGuide": {
      "title": "How to Select BPS Smart Lighting Control ICs",
      "description": "Comprehensive guide for selecting the right smart lighting control IC for your intelligent lighting application",
      "articleId": "smart-lighting-selection",
      "articleLink": "/bps/support/smart-lighting-selection.html"
    },
    "faqs": [
      {
        "question": "What dimming methods do BPS smart lighting ICs support?",
        "answer": "BPS smart lighting ICs support multiple dimming methods: Analog dimming - 0-3V or 0-10V control voltage adjusts output current; PWM dimming - digital PWM signal (1kHz-10kHz) controls brightness; Digital dimming - I2C or UART interface for precise control; Phase-cut dimming - compatible with TRIAC dimmers (requires external circuit); Wireless control - ready for Zigbee, Bluetooth, or WiFi modules. The dimming range is typically 1-100% with smooth, flicker-free operation. Different models support different combinations - BP5758D supports PWM and analog, BP5768 adds digital interface. Select based on your control system requirements.",
        "decisionGuide": "Choose dimming method based on your control system. PWM is most common for smart lighting.",
        "keywords": ["dimming methods", "PWM dimming", "analog dimming", "digital control"]
      },
      {
        "question": "How do I implement color temperature (CCT) control?",
        "answer": "BPS CCT control ICs enable tunable white lighting: Dual channel output - separate warm white and cool white LED control; Independent dimming - each channel dimmable 1-100%; Color mixing - ratio of warm/cool sets color temperature (2700K-6500K); Control interface - analog voltage or digital command sets CCT; Preset modes - some ICs support preset color temperatures; Smooth transition - gradual CCT change without flicker. Implementation requires: Dual output driver (BP5768 or similar); Warm white LED string (2700K-3000K); Cool white LED string (5000K-6500K); Control circuit (MCU or wireless module). The driver maintains constant total luminous flux while adjusting CCT.",
        "decisionGuide": "Use dual-channel CCT drivers for tunable white applications. Select LED strings with appropriate CCT ranges.",
        "keywords": ["CCT control", "tunable white", "color temperature", "dual channel"]
      },
      {
        "question": "What is the minimum dimming level achievable?",
        "answer": "BPS smart lighting ICs achieve excellent dimming performance: Minimum brightness - typically 1% of full brightness (some models to 0.1%); Dimming curve - logarithmic or linear options for natural perception; Flicker-free - high-frequency PWM (>1kHz) eliminates visible flicker; Smooth startup - soft-start to full brightness; Memory function - some ICs remember last dimming level. Factors affecting minimum dimming: LED characteristics - some LEDs don't perform well at very low current; Driver design - proper compensation for stable operation; Control signal quality - clean PWM or analog signal required. For deep dimming applications, select ICs specifically designed for wide dimming range and follow BPS application guidelines.",
        "decisionGuide": "Expect 1% minimum dimming for most applications. Select specialized ICs for deeper dimming requirements.",
        "keywords": ["minimum dimming", "deep dimming", "flicker-free", "dimming curve"]
      },
      {
        "question": "How do I integrate BPS drivers with wireless control modules?",
        "answer": "Integrating BPS smart lighting drivers with wireless modules: Interface selection - PWM input (most common), analog input, or digital (I2C/UART); Level shifting - ensure voltage compatibility between MCU and driver; Power supply - provide clean 3.3V or 5V for wireless module; Isolation - maintain safety isolation between HV and control circuits; Firmware - implement proper dimming algorithms and fade effects; Testing - verify EMI compliance with wireless operation. Popular wireless modules: Zigbee - TI CC2530, Silicon Labs EFR32; Bluetooth - Nordic nRF52 series; WiFi - ESP8266, ESP32. BPS provides reference designs showing wireless module integration. The driver's fast response enables smooth real-time control from wireless commands.",
        "decisionGuide": "Select driver with appropriate control interface for your wireless module. Follow BPS integration guidelines.",
        "keywords": ["wireless integration", "Zigbee", "Bluetooth", "smart home"]
      },
      {
        "question": "What protection features are included in smart lighting ICs?",
        "answer": "BPS smart lighting ICs include comprehensive protection: Over-current protection - limits LED current during faults; Over-voltage protection - protects against open-LED or loose connections; Over-temperature protection - thermal shutdown with hysteresis; LED short protection - handles output shorts safely; Control pin protection - ESD protection on dimming inputs; Under-voltage lockout - prevents operation at low input voltage; Soft-start - gradual brightness increase reduces inrush. Additional features: Open/short LED detection - reports fault conditions; Thermal foldback - reduces current at high temperature; Watchdog timer - resets if control signal lost. These protections ensure reliable operation in smart lighting applications where remote control and unattended operation are common.",
        "decisionGuide": "Smart lighting ICs include all standard protections plus features for reliable remote operation.",
        "keywords": ["protection features", "smart lighting", "reliability", "fault detection"]
      }
    ],
    "products": [
      {
        "id": "bp5758d",
        "partNumber": "BP5758D",
        "model": "BP5758D",
        "name": "BP5758D PWM Dimmable LED Driver",
        "shortDescription": "High-efficiency PWM dimmable LED driver with 1-100% dimming range, analog and PWM control inputs for smart lighting applications",
        "description": "The BP5758D is a high-efficiency dimmable LED driver IC designed for smart lighting applications. It supports both PWM and analog dimming with wide dimming range and smooth operation.",
        "longDescription": "The BP5758D brings dimming capability to LED lighting with flexible control options. The wide dimming range and smooth operation make it ideal for smart bulbs and connected lighting fixtures.",
        "descriptionParagraphs": [
          "The BP5758D supports 1-100% PWM dimming with high-frequency operation to eliminate flicker.",
          "Dual control inputs allow both PWM and analog dimming methods for maximum flexibility.",
          "Integrated high-voltage MOSFET and comprehensive protection features ensure reliable operation."
        ],
        "specifications": {
          "Input Voltage": "85VAC - 265VAC",
          "Output Power": "3W - 15W",
          "Dimming Range": "1% - 100%",
          "PWM Frequency": "1kHz - 10kHz",
          "Control Interface": "PWM + Analog (0-3V)",
          "Efficiency": "Up to 92%",
          "MOSFET Voltage": "500V integrated",
          "Current Accuracy": "±3%",
          "Package": "SOP-8",
          "Features": "Smooth dimming curve"
        },
        "features": [
          "1-100% PWM dimming range",
          "Dual control inputs (PWM + Analog)",
          "Flicker-free high-frequency operation",
          "Smooth logarithmic dimming curve",
          "Integrated 500V MOSFET",
          "Comprehensive protection features",
          "Wide input voltage range"
        ],
        "applications": [
          "Smart LED bulbs",
          "Dimmable downlights",
          "Connected lighting fixtures",
          "IoT lighting systems"
        ],
        "compliance": ["RoHS", "REACH"],
        "stock": "In Stock",
        "pricing": "Contact for pricing",
        "faeReview": {
          "author": "Sarah Chen",
          "title": "FAE - Smart Lighting",
          "content": "In my experience with smart lighting designs, the BP5758D is an excellent choice for dimmable applications. The 1-100% dimming range with smooth operation rivals much more expensive drivers. I particularly like the dual control inputs - you can use PWM from a microcontroller or analog from a potentiometer. The high-frequency PWM (>1kHz) eliminates visible flicker even at low brightness levels. For smart bulb applications, I recommend adding a small MCU with wireless module - the interface is straightforward. The dimming curve is well-tuned for natural perception. I've used this in Zigbee and Bluetooth bulb designs with excellent results.",
          "highlight": "Excellent dimming performance with wide range and smooth operation for smart lighting"
        },
        "alternativeParts": [
          {
            "partNumber": "BP5768",
            "brand": "BPS",
            "specifications": {
              "Input Voltage": "85VAC - 265VAC",
              "Output Power": "5W - 20W",
              "Control Interface": "PWM + Analog + I2C"
            },
            "comparison": {
              "Input Voltage": "85-265VAC = 85-265VAC (same)",
              "Output Power": "5-20W > 3-15W (+33% higher)",
              "Control": "I2C > PWM only (more options)",
              "Dimming": "1-100% = 1-100% (same)",
              "Cost": "Higher > Lower (BP5758D advantage)"
            },
            "reason": "Higher power with digital I2C interface for advanced control",
            "useCase": "Higher power smart lighting requiring digital control",
            "link": "/bps/products/smart-lighting-control/bp5768.html"
          },
          {
            "partNumber": "iW3616",
            "brand": "Dialog",
            "specifications": {
              "Input Voltage": "90VAC - 277VAC",
              "Dimming Range": "1-100%",
              "Control": "PWM"
            },
            "comparison": {
              "Input Voltage": "90-277VAC > 85-265VAC (wider)",
              "Dimming": "1-100% = 1-100% (same)",
              "Cost": "Higher > Lower (BPS advantage)",
              "Features": "Similar = Similar"
            },
            "reason": "Alternative dimmable driver with similar performance",
            "useCase": "Applications requiring Dialog ecosystem compatibility",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "BP5758D Reference Design",
            "link": "#",
            "description": "Smart bulb reference design with dimming circuit",
            "category": "Development Tools"
          },
          {
            "partNumber": "CC2530 Zigbee Module",
            "link": "#",
            "description": "Wireless control module for smart lighting",
            "category": "Wireless Modules"
          },
          {
            "partNumber": "1mH Inductor",
            "link": "#",
            "description": "Recommended inductor for dimmable applications",
            "category": "Passive Components"
          }
        ],
        "faqs": [
          {
            "question": "What PWM frequency should I use for dimming?",
            "answer": "BP5758D supports PWM dimming frequencies from 1kHz to 10kHz. Recommended frequencies: 1-2kHz - minimum to avoid visible flicker, suitable for most applications; 2-5kHz - good balance of flicker-free operation and EMI; 5-10kHz - best for photography/video applications where flicker must be eliminated. Higher frequencies have trade-offs: Advantages - less visible flicker, smoother dimming; Disadvantages - higher switching losses, more EMI, may cause audible noise in inductor. For general lighting, 1-2kHz is sufficient. For professional photography or broadcast lighting, use 5kHz or higher. The driver's fast response enables smooth dimming at any supported frequency.",
            "decisionGuide": "Use 1-2kHz for general lighting, 5-10kHz for professional applications requiring no flicker.",
            "keywords": ["PWM frequency", "flicker-free", "dimming performance"]
          },
          {
            "question": "How do I implement smooth fade-on and fade-off effects?",
            "answer": "Smooth fade effects with BP5758D require external control: MCU implementation - gradually change PWM duty cycle over time; Fade rate - typically 0.5-2 seconds for comfortable perception; Dimming curve - use logarithmic scale for natural brightness perception; Steps - 100-200 steps for smooth transition; Synchronization - match fade rate across multiple fixtures. Example implementation: Start at 1% brightness, increase duty cycle by 1% every 10ms for 1-second fade-on; Use lookup table for logarithmic dimming curve; Implement gamma correction (typically 2.2) for natural perception. The BP5758D's fast response (<100us) enables smooth fades without visible stepping. Some MCUs have built-in LED fade libraries that work well with this driver.",
            "decisionGuide": "Use MCU with gradual PWM changes and logarithmic dimming curve for smooth fades.",
            "keywords": ["fade effects", "smooth dimming", "gamma correction"]
          },
          {
            "question": "Can BP5758D be used with standard wall dimmers?",
            "answer": "BP5758D can work with standard TRIAC wall dimmers but requires additional circuitry: Phase-cut detection - circuit to detect dimmer phase angle; Conversion - phase angle to PWM or analog voltage; Isolation - maintain safety isolation from AC line; Compatibility - not all TRIAC dimmers work well with LED loads. The BP5758D itself doesn't directly accept TRIAC phase-cut input. You need: External phase-cut detection circuit; Microcontroller to interpret phase angle and generate PWM; Proper filtering to handle dimmer noise and instability. Some BPS drivers have built-in TRIAC compatibility - check BP5618 or similar if direct TRIAC dimming is required. For new smart lighting designs, digital control (Zigbee, Bluetooth) is recommended over TRIAC.",
            "decisionGuide": "BP5758D requires external circuit for TRIAC compatibility. Consider BP5618 for direct TRIAC dimming.",
            "keywords": ["TRIAC dimmer", "phase-cut", "wall dimmer compatibility"]
          },
          {
            "question": "What is the control input impedance and voltage range?",
            "answer": "BP5758D control input specifications: PWM input - high impedance (>100kΩ), accepts 3.3V or 5V logic levels, threshold ~1.4V; Analog input - high impedance, 0-3V range, linear response; Input protection - ESD protection on control pins; Response time - <100us from control change to output response; Pull-down - internal weak pull-down to ensure defined state when open. Interface considerations: MCU drive capability - ensure sufficient current to charge input capacitance; Noise immunity - keep control traces away from switching nodes; Level shifting - use if control voltage differs from driver requirements; Isolation - maintain safety isolation if control circuit is user-accessible. The high input impedance minimizes loading on control circuits.",
            "decisionGuide": "Control inputs are 3.3V/5V compatible with high impedance. Simple interface to MCUs.",
            "keywords": ["control input", "PWM interface", "logic levels"]
          },
          {
            "question": "How do I prevent audible noise during dimming?",
            "answer": "Audible noise prevention in dimmable LED drivers: Inductor selection - use inductors with proper core material and construction; Potting - potted or sealed inductors reduce acoustic noise; Frequency selection - avoid frequencies in most sensitive human hearing range (2-4kHz); Mounting - secure inductor mounting prevents mechanical vibration; Damping - add damping materials if needed; Current ripple - minimize ripple current through inductor. BP5758D considerations: Switching frequency varies with load in CRM operation; At low brightness, frequency drops into audible range; Select inductor with low magnetostriction core material; Consider fixed-frequency dimmable drivers if noise is critical. BPS application notes provide inductor selection guidelines for quiet operation.",
            "decisionGuide": "Select quality inductors with proper mounting. Consider fixed-frequency drivers if audible noise is critical.",
            "keywords": ["audible noise", "inductor selection", "acoustic noise"]
          },
          {
            "question": "What is the dimming curve and why is it important?",
            "answer": "The dimming curve defines how perceived brightness relates to control input: Linear curve - brightness proportional to PWM duty cycle (not ideal for human perception); Logarithmic curve - matches human eye response, looks more natural; BP5758D uses logarithmic curve for natural dimming perception. Human eye response: Perception is approximately logarithmic to light intensity; Linear dimming appears to change quickly at low brightness and slowly at high brightness; Logarithmic curve provides smooth, even perceived changes across range. Importance: User experience - natural, comfortable dimming; Aesthetics - professional appearance in lighting fixtures; Consistency - matches user expectations from other dimmable lights. BP5758D's built-in logarithmic curve eliminates need for complex MCU algorithms.",
            "decisionGuide": "BP5758D's logarithmic dimming curve provides natural perception without complex processing.",
            "keywords": ["dimming curve", "logarithmic", "human perception", "brightness"]
          }
        ]
      },
      {
        "id": "bp5768",
        "partNumber": "BP5768",
        "model": "BP5768",
        "name": "BP5768 Dual-Channel CCT LED Driver",
        "shortDescription": "Dual-channel tunable white LED driver with independent warm/cool white control, I2C interface, and smooth CCT adjustment for intelligent lighting",
        "description": "The BP5768 is a dual-channel CCT LED driver IC designed for tunable white lighting applications. It provides independent control of warm white and cool white LED strings with digital I2C interface.",
        "longDescription": "The BP5768 enables intelligent tunable white lighting with smooth color temperature adjustment from warm white (2700K) to cool white (6500K). The dual-channel architecture maintains constant total brightness while adjusting CCT.",
        "descriptionParagraphs": [
          "The BP5768 provides two independently controllable channels for warm white and cool white LED strings.",
          "I2C digital interface enables precise CCT control and integration with smart home systems.",
          "Constant total flux mode maintains consistent brightness while adjusting color temperature."
        ],
        "specifications": {
          "Input Voltage": "85VAC - 265VAC",
          "Output Power": "5W - 20W",
          "Channels": "2 (Warm + Cool White)",
          "CCT Range": "2700K - 6500K",
          "Control Interface": "I2C + PWM",
          "Dimming Range": "1% - 100% per channel",
          "Efficiency": "Up to 91%",
          "MOSFET Voltage": "500V integrated",
          "Package": "SOP-16",
          "Features": "Constant total flux"
        },
        "features": [
          "Dual-channel independent control",
          "Tunable white 2700K-6500K",
          "I2C digital interface",
          "Constant total brightness mode",
          "1-100% dimming per channel",
          "Integrated 500V MOSFETs",
          "Smooth CCT transitions"
        ],
        "applications": [
          "Tunable white bulbs",
          "Circadian lighting systems",
          "Smart downlights",
          "Human-centric lighting"
        ],
        "compliance": ["RoHS", "REACH"],
        "stock": "In Stock",
        "pricing": "Contact for pricing",
        "faeReview": {
          "author": "Jennifer Liu",
          "title": "Senior FAE - Smart Lighting Solutions",
          "content": "The BP5768 is my top recommendation for tunable white lighting projects. The dual-channel architecture with independent control gives you full flexibility in color temperature mixing. I particularly like the constant total flux feature - as you adjust from warm to cool, the overall brightness stays consistent, which is important for user experience. The I2C interface makes integration with smart home platforms straightforward. I've used this in circadian lighting systems where CCT changes throughout the day. The smooth transitions (no visible steps) are impressive. For best results, select LED strings with good CCT separation (2700K and 5000K+ work well).",
          "highlight": "Excellent CCT control with constant brightness for tunable white applications"
        },
        "alternativeParts": [
          {
            "partNumber": "BP5758D",
            "brand": "BPS",
            "specifications": {
              "Input Voltage": "85VAC - 265VAC",
              "Output Power": "3W - 15W",
              "Channels": "1 (Single)"
            },
            "comparison": {
              "Input Voltage": "85-265VAC = 85-265VAC (same)",
              "Output Power": "3-15W < 5-20W (-25% lower)",
              "Channels": "1 < 2 (no CCT)",
              "Control": "PWM < I2C (simpler)",
              "Cost": "Lower < Higher (cost advantage)"
            },
            "reason": "Single-channel dimmable driver without CCT capability",
            "useCase": "Single-color dimmable applications not requiring CCT",
            "link": "/bps/products/smart-lighting-control/bp5758d.html"
          },
          {
            "partNumber": "iW3696",
            "brand": "Dialog",
            "specifications": {
              "Input Voltage": "90VAC - 277VAC",
              "Channels": "2",
              "Control": "I2C"
            },
            "comparison": {
              "Input Voltage": "90-277VAC > 85-265VAC (wider)",
              "Channels": "2 = 2 (same)",
              "Control": "I2C = I2C (same)",
              "Cost": "Higher > Lower (BPS advantage)"
            },
            "reason": "Alternative CCT driver with similar dual-channel architecture",
            "useCase": "Applications requiring Dialog ecosystem compatibility",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "BP5768 Reference Design",
            "link": "#",
            "description": "CCT bulb reference design with I2C control",
            "category": "Development Tools"
          },
          {
            "partNumber": "STM32 MCU",
            "link": "#",
            "description": "Microcontroller for I2C control implementation",
            "category": "Controllers"
          },
          {
            "partNumber": "2700K LED String",
            "link": "#",
            "description": "Warm white LED string for CCT mixing",
            "category": "LEDs"
          },
          {
            "partNumber": "5000K LED String",
            "link": "#",
            "description": "Cool white LED string for CCT mixing",
            "category": "LEDs"
          }
        ],
        "faqs": [
          {
            "question": "How does the constant total flux mode work?",
            "answer": "BP5768 constant total flux mode maintains consistent overall brightness: Principle - as one channel increases, the other decreases proportionally; Implementation - driver automatically adjusts channel currents to maintain constant sum; Benefits - CCT changes don't affect perceived brightness; User experience - natural, comfortable lighting adjustments. Example: 100% warm (2700K) + 0% cool = 2700K at full brightness; 50% warm + 50% cool = mixed CCT at same brightness; 0% warm + 100% cool (6500K) = 6500K at same brightness. The mode can be disabled if independent channel control is needed. This feature is particularly important for circadian lighting where CCT changes throughout the day without brightness variations.",
            "decisionGuide": "Enable constant flux mode for consistent brightness during CCT changes. Disable for independent channel control.",
            "keywords": ["constant flux", "total brightness", "CCT mixing"]
          },
          {
            "question": "What I2C commands are used to control BP5768?",
            "answer": "BP5768 I2C command set includes: Write commands - set channel currents, configure modes, enable/disable outputs; Read commands - read status, fault conditions, temperature; Address - 7-bit I2C address (configurable); Clock - supports up to 400kHz (Fast Mode); Protocol - standard I2C read/write with register addressing. Common registers: Channel 1 current (0x01) - 8-bit value 0-255; Channel 2 current (0x02) - 8-bit value 0-255; Mode register (0x03) - constant flux, independent, etc.; Status register (0x04) - fault flags, thermal status. Example sequence: Start condition, device address + write, register address, data byte, stop condition. BPS provides detailed I2C protocol documentation and example code.",
            "decisionGuide": "I2C interface provides flexible digital control. BPS provides protocol documentation and example code.",
            "keywords": ["I2C commands", "digital control", "register map"]
          },
          {
            "question": "How do I calculate the CCT for given channel ratios?",
            "answer": "CCT calculation for BP5768 dual-channel mixing: Linear approximation - CCT = (CCT_warm × I_warm + CCT_cool × I_cool) / (I_warm + I_cool); Where CCT_warm is typically 2700K and CCT_cool is 5000K-6500K; I_warm and I_cool are channel currents (0-100%). Example calculations: 100% warm, 0% cool: CCT = 2700K; 50% warm, 50% cool: CCT = (2700×0.5 + 5000×0.5) = 3850K; 0% warm, 100% cool: CCT = 5000K. Non-linear mixing - actual CCT may differ from linear calculation due to LED spectral characteristics; Use lookup table based on measured values for accuracy; BPS provides CCT calibration guidelines. Color rendering - maintain good CRI across CCT range by selecting quality LEDs.",
            "decisionGuide": "Use linear approximation for estimation, lookup table for accuracy. Measure actual CCT for calibration.",
            "keywords": ["CCT calculation", "color temperature", "channel ratio"]
          },
          {
            "question": "What LED CCT combinations work best with BP5768?",
            "answer": "Recommended LED CCT combinations for BP5768: Standard range - 2700K (warm) + 5000K (cool) = 2700K-5000K range; Extended range - 2700K + 6500K = 2700K-6500K range; Residential - 2700K + 4000K for comfortable home lighting; Commercial - 3000K + 5000K for office flexibility; Circadian - 2700K + 6500K for maximum range. LED selection considerations: CRI - both LEDs should have CRI >80, preferably >90; Flux matching - similar lumen output at rated current for smooth mixing; Binning - tight color binning for consistency; Forward voltage - similar Vf for balanced channel operation. Avoid extreme combinations (e.g., 2200K + 8000K) as intermediate CCTs may look unnatural. Test actual mixing results before finalizing LED selection.",
            "decisionGuide": "2700K + 5000K is standard. 2700K + 6500K for maximum range. Test mixing results.",
            "keywords": ["LED selection", "CCT combination", "color mixing"]
          },
          {
            "question": "Can BP5768 implement circadian lighting schedules?",
            "answer": "Yes, BP5768 is excellent for circadian lighting implementations: CCT range - 2700K-6500K covers typical circadian needs; Smooth transitions - gradual CCT changes without visible steps; Independent dimming - adjust brightness separately from CCT; I2C control - easy integration with real-time clocks and schedulers; Constant flux - maintains brightness during CCT changes. Typical circadian schedule: Morning (6-9 AM) - 5000K-6500K to promote alertness; Midday (9 AM-4 PM) - 4000K-5000K for productivity; Evening (4-8 PM) - 2700K-3000K to prepare for sleep; Night (8 PM-6 AM) - 2700K or dimmed. Implementation requires: MCU with real-time clock; I2C interface to BP5768; Lookup table for CCT vs time; Smooth transition algorithm. BPS provides reference code for circadian lighting applications.",
            "decisionGuide": "BP5768 is ideal for circadian lighting with wide CCT range and smooth transitions.",
            "keywords": ["circadian lighting", "human-centric lighting", "CCT scheduling"]
          },
          {
            "question": "What is the minimum power for each channel?",
            "answer": "BP5768 channel power specifications: Minimum power - approximately 1W per channel (depending on LED configuration); Minimum current - typically 10mA per channel for stable operation; Dimming range - 1-100% of channel maximum; Balance - channels can operate at different power levels independently; Total power - sum of both channels limited to 20W maximum. Practical considerations: Very low power operation may have reduced accuracy; LED characteristics affect minimum stable current; Thermal management easier at lower power; Efficiency may be slightly lower at extreme dimming levels. For very low power applications (e.g., night light mode), consider disabling one channel rather than dimming both to very low levels.",
            "decisionGuide": "Minimum ~1W per channel for stable operation. Can operate channels independently at different power levels.",
            "keywords": ["minimum power", "channel operation", "low power mode"]
          }
        ]
      }
    ]
  },
  {
    "id": "ac-dc-power-management",
    "name": "AC-DC Power Management",
    "description": "BPS AC-DC power management ICs provide efficient power conversion for adapters, chargers, and auxiliary power supplies. These ICs support various topologies including flyback, buck, and buck-boost for applications requiring isolated or non-isolated power. Features include high integration, low standby power, comprehensive protection, and wide input voltage range. Ideal for mobile chargers, power adapters, auxiliary supplies, and IoT device power.",
    "parameters": ["Input Voltage", "Output Power", "Topology", "Standby Power", "Efficiency"],
    "applications": ["Mobile Chargers", "Power Adapters", "Auxiliary Supplies", "IoT Power"],
    "selectionGuide": {
      "title": "How to Select BPS AC-DC Power Management ICs",
      "description": "Comprehensive guide for selecting the right AC-DC power IC for your application",
      "articleId": "ac-dc-power-selection",
      "articleLink": "/bps/support/ac-dc-power-selection.html"
    },
    "faqs": [
      {
        "question": "What AC-DC topologies does BPS offer?",
        "answer": "BPS offers AC-DC ICs for various topologies: Flyback - most common for isolated applications, 5W-100W+ range, good for multiple outputs; Buck - non-isolated for low voltage outputs, simple and cost-effective, 3W-30W range; Buck-boost - for output voltage that can be higher or lower than input, useful for wide input range; Primary-side regulated flyback - eliminates optocoupler, reduces cost, good for single output. Selection criteria: Isolation required - use flyback; Non-isolated, low voltage - use buck; Wide input/output range - consider buck-boost; Cost sensitive - primary-side regulation. BPS provides ICs optimized for each topology with appropriate protection and control features.",
        "decisionGuide": "Choose topology based on isolation needs, power level, and output requirements.",
        "keywords": ["AC-DC topology", "flyback", "buck", "topology selection"]
      },
      {
        "question": "What is the typical standby power consumption?",
        "answer": "BPS AC-DC ICs achieve low standby power: No-load power - typically <30mW for modern designs; Standby power - <100mW for most applications; Active mode - high efficiency at rated load; Burst mode - intermittent operation at light load saves power. Meeting efficiency standards: DoE Level VI - requires <100mW no-load power; EU CoC Tier 2 - <75mW no-load power; Energy Star - various requirements by product category. Design considerations: IC selection - choose IC with burst mode and frequency foldback; Transformer design - minimize magnetizing current; Startup circuit - efficient high-voltage startup; Feedback - low-power feedback network. BPS ICs like BP8718 are designed specifically for low standby power applications.",
        "decisionGuide": "Select ICs with burst mode for <100mW standby. Optimize transformer and feedback for lowest no-load power.",
        "keywords": ["standby power", "no-load power", "efficiency standards"]
      },
      {
        "question": "How do I meet EMI requirements for AC-DC supplies?",
        "answer": "Meeting EMI requirements for AC-DC power supplies: Input filtering - X-capacitor, common-mode choke, Y-capacitors; PCB layout - minimize loop areas, proper grounding, keep switching nodes away from sensitive circuits; Snubbers - RC snubbers on primary and secondary to reduce ringing; Shielding - copper shield or foil around transformer if needed; Frequency jitter - spread spectrum reduces peak emissions; Soft switching - reduces dv/dt and di/dt noise. EMI standards: Conducted emissions - CISPR 32/EN 55032 Class B; Radiated emissions - CISPR 32/EN 55032 Class B. Design process: Early planning - consider EMI in initial design; Pre-compliance testing - identify issues early; Iterative improvement - adjust filtering and layout as needed. BPS provides EMI design guides and reference designs that meet standards.",
        "decisionGuide": "Plan EMI design early. Use proper filtering, layout, and snubbers. Test early and iterate.",
        "keywords": ["EMI compliance", "EMC design", "input filter"]
      },
      {
        "question": "What protection features are important for AC-DC supplies?",
        "answer": "Essential protection features for AC-DC power supplies: Over-voltage protection (OVP) - protects load from excessive voltage; Over-current protection (OCP) - limits output current during overload; Short-circuit protection (SCP) - handles output shorts safely; Over-temperature protection (OTP) - thermal shutdown prevents damage; Input under-voltage lockout (UVLO) - prevents operation at low input; Over-power protection (OPP) - limits maximum output power. Additional protections: Input surge - withstand line transients with varistors; ESD protection - on user-accessible ports; Brownout protection - handles input voltage dips. BPS ICs integrate most protections, reducing external component count. For safety-critical applications, verify all required protections are implemented and tested.",
        "decisionGuide": "Ensure OVP, OCP, SCP, and OTP are implemented. Add surge protection for outdoor or industrial use.",
        "keywords": ["protection features", "OVP", "OCP", "safety"]
      },
      {
        "question": "How do I select the right power level for my application?",
        "answer": "Selecting AC-DC power level involves: Load analysis - determine maximum and typical power requirements; Margin - add 20-30% margin for reliability and future expansion; Efficiency - higher power often means better efficiency at light load; Thermal - ensure manageable heat dissipation; Cost - optimize for actual needs without over-specifying. Common power levels: 5-10W - small adapters, IoT devices; 12-24W - mobile chargers, small electronics; 30-65W - laptop adapters, larger electronics; 100W+ - high-power applications, fast charging. BPS IC selection by power: BP8718 - 5-18W optimized for chargers; BP8719 - 15-65W for larger adapters; BP8720 - 60W+ for high-power applications. Select IC with appropriate power rating and features for your application.",
        "decisionGuide": "Size for maximum load plus 20-30% margin. Select IC with appropriate power rating.",
        "keywords": ["power selection", "sizing", "power rating"]
      }
    ],
    "products": [
      {
        "id": "bp8718",
        "partNumber": "BP8718",
        "model": "BP8718",
        "name": "BP8718 Low-Power Flyback Controller",
        "shortDescription": "High-efficiency flyback controller with integrated 700V MOSFET, 5-18W output, low standby power for chargers and adapters",
        "description": "The BP8718 is a high-efficiency flyback controller IC designed for low-power AC-DC applications. It features an integrated 700V MOSFET and optimized burst mode for low standby power.",
        "longDescription": "The BP8718 provides cost-effective power conversion for mobile chargers, small adapters, and auxiliary supplies. The integrated high-voltage MOSFET and primary-side regulation eliminate optocoupler while maintaining good regulation.",
        "descriptionParagraphs": [
          "The BP8718 operates in quasi-resonant mode with frequency foldback for high efficiency across load range.",
          "Burst mode operation achieves <30mW no-load power consumption, meeting latest efficiency standards.",
          "Comprehensive protection features and wide operating range ensure reliable operation in consumer applications."
        ],
        "specifications": {
          "Input Voltage": "85VAC - 265VAC",
          "Output Power": "5W - 18W",
          "MOSFET Voltage": "700V integrated",
          "Standby Power": "<30mW",
          "Efficiency": "Up to 88%",
          "Topology": "Flyback (PSR)",
          "Switching Frequency": "QR Mode (40-100kHz)",
          "Regulation": "Primary-side (±5%)",
          "Package": "SOP-7",
          "Protection": "OVP, OCP, OTP, SCP"
        },
        "features": [
          "Integrated 700V MOSFET",
          "Primary-side regulation eliminates optocoupler",
          "<30mW standby power",
          "Quasi-resonant operation",
          "Frequency foldback and burst mode",
          "Comprehensive protection",
          "Low component count"
        ],
        "applications": [
          "Mobile phone chargers",
          "Small power adapters",
          "Auxiliary power supplies",
          "IoT device power"
        ],
        "compliance": ["RoHS", "REACH", "DoE Level VI", "CoC Tier 2"],
        "stock": "In Stock",
        "pricing": "Contact for pricing",
        "faeReview": {
          "author": "Kevin Zhang",
          "title": "Senior FAE - Power Supplies",
          "content": "The BP8718 is my go-to controller for low-power charger applications. The <30mW standby power easily meets DoE Level VI requirements without complex external circuits. The integrated 700V MOSFET and PSR save significant BOM cost compared to traditional optocoupler feedback designs. I've used this in numerous 5V/2A and 5V/3A charger designs with excellent results. The burst mode operation at light load is smooth without audible noise. For transformer design, follow BPS guidelines closely - the PSR requires good coupling between primary and auxiliary windings. Overall, this is a cost-effective solution for charger applications where every cent matters.",
          "highlight": "Cost-effective flyback controller with low standby power for charger applications"
        },
        "alternativeParts": [
          {
            "partNumber": "BP8719",
            "brand": "BPS",
            "specifications": {
              "Input Voltage": "85VAC - 265VAC",
              "Output Power": "15W - 65W",
              "MOSFET Voltage": "650V integrated"
            },
            "comparison": {
              "Input Voltage": "85-265VAC = 85-265VAC (same)",
              "Output Power": "15-65W > 5-18W (+260% higher)",
              "MOSFET": "650V < 700V (lower)",
              "Standby": "<50mW > <30mW (higher)",
              "Cost": "Higher > Lower (cost advantage)"
            },
            "reason": "Higher power version for larger adapters and chargers",
            "useCase": "Larger chargers, laptop adapters, higher power applications",
            "link": "/bps/products/ac-dc-power-management/bp8719.html"
          },
          {
            "partNumber": "iW1702",
            "brand": "Dialog",
            "specifications": {
              "Input Voltage": "90VAC - 277VAC",
              "Output Power": "5W - 15W",
              "Standby Power": "<20mW"
            },
            "comparison": {
              "Input Voltage": "90-277VAC > 85-265VAC (wider)",
              "Output Power": "5-15W = 5-18W (similar)",
              "Standby": "<20mW < <30mW (better)",
              "Cost": "Higher > Lower (BPS advantage)"
            },
            "reason": "Alternative with slightly better standby power",
            "useCase": "Applications requiring <20mW standby or Dialog ecosystem",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "BP8718 Reference Design",
            "link": "#",
            "description": "5V/2A charger reference design",
            "category": "Development Tools"
          },
          {
            "partNumber": "EE13 Transformer",
            "link": "#",
            "description": "Recommended transformer for 10W applications",
            "category": "Magnetics"
          },
          {
            "partNumber": "MB10S Bridge",
            "link": "#",
            "description": "1000V 1A bridge rectifier",
            "category": "Rectifiers"
          },
          {
            "partNumber": "10uF/400V Capacitor",
            "link": "#",
            "description": "Input bulk capacitor",
            "category": "Capacitors"
          }
        ],
        "faqs": [
          {
            "question": "What is primary-side regulation (PSR) and how does it work?",
            "answer": "Primary-side regulation (PSR) eliminates need for optocoupler feedback: Principle - output voltage is sensed through auxiliary winding during flyback period; Sampling - IC samples auxiliary voltage when secondary current reaches zero; Regulation - error amplifier adjusts switching to maintain constant output; Accuracy - typically ±3-5% regulation, sufficient for most applications. Advantages: Cost - eliminates optocoupler and TL431; Reliability - removes optocoupler aging concern; Simplicity - fewer components; Safety - no feedback path across isolation barrier. Limitations: Accuracy - not as precise as secondary-side feedback; Load regulation - may have slightly poorer cross-regulation in multi-output designs; Transient - slower transient response. BP8718 uses PSR for cost-effective single-output designs.",
            "decisionGuide": "PSR provides cost-effective regulation for single-output designs. Use secondary feedback if <3% accuracy required.",
            "keywords": ["primary-side regulation", "PSR", "optocoupler-less"]
          },
          {
            "question": "How do I achieve <30mW standby power?",
            "answer": "Achieving <30mW standby power with BP8718: IC features - burst mode operation, frequency foldback, low startup current; Transformer - minimize magnetizing inductance and core losses; Startup circuit - use high-efficiency startup, disable after startup; Feedback - low-power feedback network; Snubbers - optimize to minimize losses; Input filter - appropriate X-capacitor without excessive discharge resistors. Design tips: Transformer - use gapped core to reduce magnetizing current; Burst mode - enable at light load (<10% rated); Frequency - reduce switching frequency at light load; VCC supply - efficient auxiliary winding design. Measurement: Use true RMS power meter; Measure at rated input voltage; Ensure all outputs at no-load; Allow 5-minute warm-up. BPS reference designs demonstrate <30mW performance.",
            "decisionGuide": "Enable burst mode, optimize transformer, minimize startup and feedback losses.",
            "keywords": ["standby power", "no-load power", "burst mode"]
          },
          {
            "question": "What transformer design is recommended for BP8718?",
            "answer": "BP8718 transformer design guidelines: Core selection - EE13, EE16, or RM8 for 5-18W range; Core material - PC40 or equivalent ferrite for low losses; Magnetizing inductance - 1mH to 2.5mH depending on power level; Turns ratio - Np:Ns typically 10:1 to 15:1 for 5V output; Auxiliary winding - 2-3 turns for VCC supply, referenced to primary ground; Safety - reinforced insulation for primary-secondary, basic for primary-auxiliary. PSR considerations: Good coupling - tight coupling between primary and auxiliary for accurate sensing; Winding arrangement - interleaved or split bobbin for low leakage; Snubber design - proper snubber to control voltage spikes. Design process: Calculate turns based on output voltage and diode drop; Size wire for current and thermal requirements; Verify saturation margin at max current; Test regulation accuracy across line and load.",
            "decisionGuide": "Follow BPS transformer guidelines. Ensure good primary-auxiliary coupling for PSR accuracy.",
            "keywords": ["transformer design", "PSR transformer", "magnetics"]
          },
          {
            "question": "Can BP8718 be used for multiple output voltages?",
            "answer": "BP8718 can support multiple outputs with considerations: Cross-regulation - PSR regulates only one output directly; Other outputs - will have load-dependent voltage variation; Typical variation - ±10% or more on unregulated outputs; Loading - minimum load may be required on main output. Implementation: Main output - regulated output (typically highest power); Secondary outputs - additional windings with rectifiers; Post-regulation - LDOs for critical secondary outputs if needed; Stacking - series connection of outputs possible. Limitations: PSR accuracy - best for single-output or outputs with similar voltages; Load range - cross-regulation degrades with wide load variations; Efficiency - post-regulation reduces overall efficiency. For precise multi-output regulation, consider secondary-side feedback or separate DC-DC converters for secondary outputs.",
            "decisionGuide": "BP8718 works best for single output. Multi-output possible with degraded cross-regulation.",
            "keywords": ["multiple outputs", "cross-regulation", "multi-output design"]
          },
          {
            "question": "What is the typical efficiency of BP8718?",
            "answer": "BP8718 efficiency depends on operating conditions: Typical efficiency - 85-88% for well-designed 5V/2A charger; At full load - 87-88% at 220VAC input; At 110VAC - 85-86% due to higher primary currents; Light load - 80-82% at 25% load; Standby - burst mode maintains efficiency at no-load. Efficiency factors: MOSFET - integrated 700V MOSFET with moderate Rds(on); Transformer - copper and core losses; Diode - Schottky recommended for 5V output; Snubber - losses in RC snubber; Frequency - QR operation optimizes switching losses. Improving efficiency: Transformer - optimize wire sizing and core selection; Diode - use low-Vf Schottky or synchronous rectification; Snubber - minimize while maintaining EMI; PCB - proper layout reduces losses. BPS reference designs demonstrate typical efficiency performance.",
            "decisionGuide": "Expect 85-88% efficiency for typical applications. Optimize transformer and use Schottky diodes.",
            "keywords": ["efficiency", "power loss", "charger efficiency"]
          },
          {
            "question": "Does BP8718 meet DoE Level VI efficiency standards?",
            "answer": "Yes, BP8718 can meet DoE Level VI requirements with proper design: Average efficiency - >87.6% for 5V/2A charger (required >85.34%); No-load power - <100mW required, BP8718 achieves <30mW; Test conditions - 25%, 50%, 75%, 100% load points. Design considerations: Transformer - optimize for efficiency at 50-75% load; Diode - low-Vf Schottky for output rectification; Snubber - minimize losses while controlling EMI; Feedback - low-power network; Burst mode - properly tuned for light load efficiency. Certification testing: Use certified test lab for official results; Pre-test with power analyzer to verify compliance; Test at 115VAC and 230VAC; Document all test conditions and results. BPS provides reference designs that meet DoE Level VI and can provide test reports. Contact LiTong for certification support.",
            "decisionGuide": "BP8718 can meet DoE Level VI with proper design. BPS provides reference designs and test support.",
            "keywords": ["DoE Level VI", "efficiency standards", "certification"]
          }
        ]
      },
      {
        "id": "bp8719",
        "partNumber": "BP8719",
        "model": "BP8719",
        "name": "BP8719 Mid-Power Flyback Controller",
        "shortDescription": "High-efficiency flyback controller with integrated 650V MOSFET, 15-65W output, optimized for larger adapters and power supplies",
        "description": "The BP8719 is a high-efficiency flyback controller IC designed for medium-power AC-DC applications. It features an integrated 650V MOSFET and advanced control for high efficiency across load range.",
        "longDescription": "The BP8719 extends BPS's AC-DC portfolio to higher power levels, supporting up to 65W for laptop adapters, larger chargers, and power supplies. The advanced control algorithms maintain high efficiency across wide load range.",
        "descriptionParagraphs": [
          "The BP8719 supports output power from 15W to 65W with quasi-resonant operation and frequency modulation.",
          "Integrated 650V MOSFET and primary-side regulation provide cost-effective isolated power conversion.",
          "Advanced burst mode and frequency foldback maintain high efficiency from full load to standby."
        ],
        "specifications": {
          "Input Voltage": "85VAC - 265VAC",
          "Output Power": "15W - 65W",
          "MOSFET Voltage": "650V integrated",
          "Standby Power": "<50mW",
          "Efficiency": "Up to 90%",
          "Topology": "Flyback (PSR)",
          "Switching Frequency": "QR Mode (30-80kHz)",
          "Regulation": "Primary-side (±5%)",
          "Package": "SOP-8",
          "Protection": "OVP, OCP, OTP, SCP, OPP"
        },
        "features": [
          "Integrated 650V MOSFET for 65W applications",
          "Primary-side regulation eliminates optocoupler",
          "<50mW standby power",
          "Quasi-resonant with valley switching",
          "Advanced burst mode for light load",
          "Over-power protection (OPP)",
          "Wide operating range"
        ],
        "applications": [
          "Laptop adapters",
          "Fast chargers",
          "Power tool chargers",
          "Industrial power supplies"
        ],
        "compliance": ["RoHS", "REACH", "DoE Level VI", "CoC Tier 2"],
        "stock": "In Stock",
        "pricing": "Contact for pricing",
        "faeReview": {
          "author": "Michael Wang",
          "title": "Principal FAE - AC-DC Power",
          "content": "The BP8719 is an excellent choice for medium-power adapter applications. I've used this in 45W and 65W laptop adapter designs with very good results. The efficiency is consistently above 88% at full load, and the standby power is well under 50mW. The integrated OPP (over-power protection) is a nice feature that protects against overload conditions. For thermal design at 65W, you'll need adequate heatsinking - I recommend a small aluminum plate or thermal pad to the case. Transformer design is critical - follow BPS guidelines for the larger core sizes (EE25 or PQ26). Overall, this provides a cost-effective solution for adapters up to 65W.",
          "highlight": "Cost-effective solution for 15-65W adapters with high efficiency and good protection"
        },
        "alternativeParts": [
          {
            "partNumber": "BP8718",
            "brand": "BPS",
            "specifications": {
              "Input Voltage": "85VAC - 265VAC",
              "Output Power": "5W - 18W",
              "MOSFET Voltage": "700V integrated"
            },
            "comparison": {
              "Input Voltage": "85-265VAC = 85-265VAC (same)",
              "Output Power": "5-18W < 15-65W (-72% lower)",
              "MOSFET": "700V > 650V (higher)",
              "Standby": "<30mW < <50mW (better)",
              "Cost": "Lower < Higher (cost advantage)"
            },
            "reason": "Lower power version for small chargers and adapters",
            "useCase": "Mobile chargers, small adapters where 5-18W is sufficient",
            "link": "/bps/products/ac-dc-power-management/bp8718.html"
          },
          {
            "partNumber": "TEA19361",
            "brand": "NXP",
            "specifications": {
              "Input Voltage": "90VAC - 277VAC",
              "Output Power": "30W - 90W",
              "Topology": "Flyback"
            },
            "comparison": {
              "Input Voltage": "90-277VAC > 85-265VAC (wider)",
              "Output Power": "30-90W > 15-65W (+38% higher)",
              "Topology": "Flyback = Flyback (same)",
              "Cost": "Higher > Lower (BPS advantage)"
            },
            "reason": "Higher power alternative with broader portfolio",
            "useCase": "Applications requiring >65W or NXP ecosystem",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "BP8719 Reference Design",
            "link": "#",
            "description": "45W laptop adapter reference design",
            "category": "Development Tools"
          },
          {
            "partNumber": "EE25 Transformer",
            "link": "#",
            "description": "Recommended transformer for 45W applications",
            "category": "Magnetics"
          },
          {
            "partNumber": "KBU6K Bridge",
            "link": "#",
            "description": "600V 6A bridge rectifier",
            "category": "Rectifiers"
          },
          {
            "partNumber": "68uF/400V Capacitor",
            "link": "#",
            "description": "High-value input capacitor",
            "category": "Capacitors"
          }
        ],
        "faqs": [
          {
            "question": "What is the main difference between BP8719 and BP8718?",
            "answer": "BP8719 and BP8718 are both PSR flyback controllers with key differences: Power range - BP8719 supports 15-65W while BP8718 supports 5-18W; MOSFET - BP8719 has 650V/4Ω MOSFET for higher current, BP8718 has 700V/8Ω for lower power; Package - BP8719 is SOP-8, BP8718 is SOP-7; Features - BP8719 adds OPP (over-power protection); Standby - BP8719 has <50mW, BP8718 has <30mW; Applications - BP8719 for laptop adapters and larger supplies, BP8718 for mobile chargers. Choose BP8719 for higher power applications requiring 15W or more. Choose BP8718 for cost-sensitive low-power chargers. Both offer similar PSR accuracy and protection features.",
            "decisionGuide": "Choose BP8719 for 15-65W applications. Use BP8718 for 5-18W cost-sensitive designs.",
            "keywords": ["BP8719 vs BP8718", "power range", "application selection"]
          },
          {
            "question": "What transformer size is needed for 65W operation?",
            "answer": "Transformer sizing for BP8719 65W applications: Core selection - EE25, PQ26/25, or RM10 for 45-65W range; Core material - PC40 or PC95 ferrite for low core losses; Magnetizing inductance - 400uH to 800uH depending on design; Turns ratio - Np:Ns typically 3:1 to 5:1 for 19V output; Wire sizing - primary 0.35-0.45mm, secondary 0.5-0.7mm based on current; Thermal design - core losses < 1.5W, winding losses < 2W at 65W. Design considerations: Window area - ensure sufficient space for windings and insulation; Bobbin - use appropriate bobbin for selected core; Safety - maintain creepage and clearance for reinforced isolation; Coupling - good coupling for PSR accuracy. BPS provides transformer design guidelines and can recommend qualified magnetics vendors.",
            "decisionGuide": "Use EE25 or PQ26 cores for 45-65W. Follow BPS transformer guidelines.",
            "keywords": ["transformer sizing", "core selection", "65W design"]
          },
          {
            "question": "How does the over-power protection (OPP) work?",
            "answer": "BP8719 over-power protection (OPP) prevents overload damage: Function - limits maximum output power to safe level; Implementation - monitors primary current and input voltage; Calculation - determines output power from switching parameters; Threshold - typically 110-120% of rated power; Response - reduces output or shuts down when threshold exceeded; Recovery - automatic restart after fault clears. Benefits: Safety - prevents overheating during overload; Reliability - protects components from stress; Compliance - helps meet safety agency requirements; Flexibility - allows brief overloads while protecting sustained overloads. OPP works in conjunction with OCP (over-current) which limits peak current cycle-by-cycle. Together they provide comprehensive overload protection. The OPP threshold can be adjusted with external components if needed.",
            "decisionGuide": "OPP provides automatic power limiting. Adjust threshold if specific requirements needed.",
            "keywords": ["over-power protection", "OPP", "overload protection"]
          },
          {
            "question": "What thermal management is required for 65W adapters?",
            "answer": "Thermal management for BP8719 65W adapters: Heat sources - MOSFET (3-4W), transformer (2-3W), diode (1-2W), total ~8W losses; Heatsinking - thermal pad or small heatsink for MOSFET; Enclosure - metal case or plastic with thermal design; Airflow - natural convection typically sufficient; Ambient - design for 40-50°C ambient. Design practices: Metal core PCB - for LED adapters, can share heatsink; Thermal interface - pad or grease between IC and heatsink; Spacing - adequate clearance for airflow; Components - keep electrolytic capacitors away from heat sources. Temperature targets: MOSFET junction < 110°C; Transformer < 100°C; Ambient inside enclosure < 70°C. BPS provides thermal design guidelines and can assist with modeling.",
            "decisionGuide": "Provide adequate heatsinking for MOSFET. Design for 40-50°C ambient with margin.",
            "keywords": ["thermal management", "heatsink", "65W adapter"]
          },
          {
            "question": "Can BP8719 be used for USB-PD applications?",
            "answer": "BP8719 can be used for USB-PD applications with external controller: Power stage - BP8719 provides isolated power conversion; PD controller - external IC (Cypress, Richtek, etc.) handles PD protocol; Feedback - PD controller adjusts output voltage via optocoupler or feedback network; Voltage range - BP8719 supports 3.3V to 24V output with proper transformer design; Current - up to 3A at 20V (60W) within BP8719 capability. Implementation: Secondary-side PD controller monitors VBUS and negotiates with device; Controller adjusts reference voltage for desired output; Optocoupler transmits feedback across isolation; BP8719 regulates based on feedback signal. Limitations: BP8719 alone doesn't support PD - requires external controller; Voltage range - limited by transformer turns ratio; Efficiency - may be lower at low output voltages. For dedicated USB-PD solutions, consider specialized PD controller ICs.",
            "decisionGuide": "BP8719 can be used with external PD controller. Consider dedicated PD ICs for simpler designs.",
            "keywords": ["USB-PD", "USB Power Delivery", "fast charging"]
          },
          {
            "question": "What is the typical efficiency at light load?",
            "answer": "BP8719 efficiency at light load with burst mode: 75% load - ~89% efficiency; 50% load - ~88% efficiency; 25% load - ~85% efficiency; 10% load - ~80% efficiency (burst mode active); Standby - <50mW power consumption. Burst mode operation: Activation - typically below 15-20% load; Operation - intermittent switching with idle periods; Benefits - maintains efficiency at very light loads; Trade-off - slightly higher output ripple during burst. Improving light load efficiency: Transformer - minimize magnetizing current; Snubber - optimize for low losses; Diode - Schottky for low forward voltage; Feedback - low-power network. BPS reference designs demonstrate good light load efficiency meeting efficiency standards. For applications with significant light load operation, verify efficiency at 10% and 25% load points.",
            "decisionGuide": "Burst mode maintains good efficiency at light load. Expect ~80% at 10% load.",
            "keywords": ["light load efficiency", "burst mode", "efficiency standards"]
          }
        ]
      }
    ]
  }
];

// Add the new categories
productsData.categories = productsData.categories.concat(additionalCategories);

// Write back
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));
console.log('Added 2 more categories to products.json');
console.log('Total categories:', productsData.categories.length);
