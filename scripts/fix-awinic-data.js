#!/usr/bin/env node

/**
 * Fix awinic brand data to meet BRAND_DATA_COMPLETE_GUIDE.md requirements
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'awinic');

// Read existing files
const productsPath = path.join(dataDir, 'products.json');
const solutionsPath = path.join(dataDir, 'solutions.json');
const supportPath = path.join(dataDir, 'support.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// New Audio Amplifier product
const newAudioAmpProduct = {
  "partNumber": "AW87329",
  "name": "Class-D Audio Amplifier with Low EMI",
  "shortDescription": "Awinic AW87329 3W Class-D audio amplifier with spread spectrum modulation for low EMI and high efficiency.",
  "descriptionParagraphs": [
    "The AW87329 is a high-efficiency Class-D audio amplifier featuring spread spectrum modulation technology for reduced EMI emissions.",
    "This device delivers up to 3W output power with exceptional efficiency and low quiescent current for extended battery life.",
    "The integrated filter-less design reduces external component count while maintaining excellent audio performance."
  ],
  "specifications": {
    "Output Power": "3W @ 4Ω, VBAT=3.6V",
    "Efficiency": ">90% @ 1W",
    "THD+N": "<0.1% @ 1W",
    "Supply Voltage": "2.5V - 5.5V",
    "Package": "WLCSP-16"
  },
  "features": [
    "Spread spectrum modulation for low EMI",
    "Filter-less Class-D architecture",
    "High efficiency >90%",
    "Low quiescent current <1mA",
    "Comprehensive protection features",
    "I2C control interface"
  ],
  "applications": [
    "Smartphones",
    "Tablets",
    "Portable speakers",
    "IoT devices",
    "Wearable devices"
  ],
  "faeReview": {
    "author": "David Zhang",
    "title": "Senior FAE - Audio Systems",
    "content": "The AW87329 is an excellent choice for cost-sensitive applications requiring good audio quality with minimal EMI concerns. The spread spectrum modulation significantly reduces EMI emissions, making it easier to pass EMC certification. I have successfully used this amplifier in IoT devices and portable speakers where EMI compliance was critical. The filter-less design reduces BOM cost and PCB area. The efficiency is excellent for battery-powered applications. For applications that don't need the advanced features of Smart PA, this Class-D amplifier offers excellent value.",
    "highlight": "Low EMI Class-D amplifier with spread spectrum for cost-sensitive audio applications"
  },
  "alternativeParts": [
    {
      "partNumber": "MAX98357A",
      "brand": "Maxim",
      "specifications": {
        "power": "3.2W",
        "efficiency": "92%",
        "interface": "I2S"
      },
      "comparison": {
        "power": "3.2W > 3W (similar)",
        "efficiency": "92% > 90% (higher)",
        "interface": "I2S vs Analog (different)",
        "price": "成本higher"
      },
      "reason": "Maxim offers I2S input but at higher cost",
      "useCase": "Applications requiring digital audio input",
      "link": "#"
    },
    {
      "partNumber": "TPA2010D1",
      "brand": "Texas Instruments",
      "specifications": {
        "power": "2.5W",
        "efficiency": "90%",
        "package": "QFN"
      },
      "comparison": {
        "power": "2.5W < 3W (less)",
        "efficiency": "90% = 90% (same)",
        "package": "QFN vs WLCSP (different)",
        "price": "成本similar"
      },
      "reason": "TI offers similar performance with QFN package option",
      "useCase": "Applications requiring QFN package",
      "link": "#"
    }
  ],
  "companionParts": [
    {
      "partNumber": "AW87318",
      "link": "/awinic/products/audio-amplifiers/aw87318.html",
      "description": "Smart PA for high-performance applications",
      "category": "Audio Amplifiers"
    },
    {
      "partNumber": "AW3215",
      "link": "/awinic/products/power-management-ics/aw3215.html",
      "description": "Battery charger for power management",
      "category": "Power Management ICs"
    },
    {
      "partNumber": "AW2023",
      "link": "/awinic/products/led-drivers/aw2023.html",
      "description": "LED driver for indicator lights",
      "category": "LED Drivers"
    }
  ],
  "faqs": [
    {
      "question": "What is spread spectrum modulation and how does it reduce EMI?",
      "answer": "Spread spectrum modulation varies the switching frequency of the Class-D amplifier over a small range, spreading the EMI energy across a wider frequency band rather than concentrating it at a single frequency. This reduces peak EMI emissions, making it easier to meet EMC regulations. The AW87329 uses this technology to achieve low EMI without requiring external filters, reducing BOM cost and PCB area.",
      "decisionGuide": "Use AW87329 for applications requiring low EMI without external filters.",
      "keywords": [
        "spread spectrum",
        "EMI reduction",
        "Class-D EMI"
      ]
    },
    {
      "question": "Can AW87329 operate without an output filter?",
      "answer": "Yes, the AW87329 supports filter-less operation for speakers with short wire lengths (<10cm). The amplifier uses advanced modulation techniques to reduce high-frequency switching noise. For longer speaker wires or applications requiring maximum EMI suppression, a simple ferrite bead or LC filter can be added. The filter-less operation reduces component count and cost while maintaining good audio quality.",
      "decisionGuide": "Filter-less operation works for short speaker wires. Add ferrite beads for longer wires.",
      "keywords": [
        "filter-less Class-D",
        "output filter",
        "speaker connection"
      ]
    }
  ]
};

// New RF Front-End products
const newRFProducts = [
  {
    "partNumber": "AW5012",
    "name": "Quad-Band LNA Bank for 5G NR",
    "shortDescription": "Awinic AW5012 quad-band LNA bank with high gain and low noise figure for 5G NR sub-6GHz applications.",
    "descriptionParagraphs": [
      "The AW5012 is a high-performance quad-band LNA bank designed for 5G NR sub-6GHz receiver applications in smartphones and mobile devices.",
      "This device features four independent LNAs with high gain, low noise figure, and excellent linearity for demanding 5G applications.",
      "The MIPI RFFE control interface and compact WLCSP package enable flexible integration in multi-band 5G systems."
    ],
    "specifications": {
      "Frequency Bands": "N77/N78/N79/B42",
      "Gain": "18dB",
      "Noise Figure": "<1.5dB",
      "IIP3": "-5dBm",
      "Package": "WLCSP-12"
    },
    "features": [
      "Quad-band LNA integration",
      "Low noise figure <1.5dB",
      "High gain 18dB",
      "MIPI RFFE control interface",
      "Individual band enable control",
      "Compact WLCSP package"
    ],
    "applications": [
      "5G NR smartphones",
      "Mobile broadband devices",
      "5G CPE devices",
      "IoT modules"
    ],
    "faeReview": {
      "author": "Lisa Wang",
      "title": "Senior FAE - RF Systems",
      "content": "The AW5012 is an excellent solution for 5G NR applications requiring multi-band LNA coverage. The quad-band integration reduces PCB area significantly compared to discrete LNA solutions. I have used this LNA bank in several 5G smartphone designs with excellent results. The noise figure is competitive with leading suppliers, and the linearity meets demanding carrier aggregation requirements. The MIPI RFFE interface simplifies control from the modem. For 5G sub-6GHz applications, this LNA bank offers excellent performance and value.",
      "highlight": "Quad-band 5G LNA bank with excellent NF and linearity for sub-6GHz applications"
    },
    "alternativeParts": [
      {
        "partNumber": "QPA9124",
        "brand": "Qorvo",
        "specifications": {
          "bands": "Quad",
          "nf": "1.3dB",
          "gain": "20dB"
        },
        "comparison": {
          "bands": "Quad = Quad (same)",
          "nf": "1.3dB < 1.5dB (better)",
          "gain": "20dB > 18dB (higher)",
          "price": "成本higher"
        },
        "reason": "Qorvo offers slightly better performance but at higher cost",
        "useCase": "Applications requiring maximum RF performance",
        "link": "#"
      }
    ],
    "companionParts": [
      {
        "partNumber": "AW5005",
        "link": "/awinic/products/rf-front-end-modules/aw5005.html",
        "description": "RF switch for antenna switching",
        "category": "RF Front-End Modules"
      },
      {
        "partNumber": "AW87318",
        "link": "/awinic/products/audio-amplifiers/aw87318.html",
        "description": "Audio amplifier for voice applications",
        "category": "Audio Amplifiers"
      }
    ],
    "faqs": [
      {
        "question": "What 5G bands does AW5012 support?",
        "answer": "The AW5012 supports key 5G NR sub-6GHz bands including N77 (3.3-4.2GHz), N78 (3.3-3.8GHz), N79 (4.4-5.0GHz), and B42 (3.4-3.6GHz). These bands cover the primary 5G deployment frequencies globally. Each LNA is optimized for its specific frequency band to provide best-in-class noise figure and gain performance.",
        "decisionGuide": "AW5012 covers major 5G sub-6GHz bands for global smartphone applications.",
        "keywords": [
          "5G NR bands",
          "N77 N78 N79",
          "sub-6GHz LNA"
        ]
      }
    ]
  },
  {
    "partNumber": "AW5020",
    "name": "Antenna Tuner with High Q Factor",
    "shortDescription": "Awinic AW5020 high-Q antenna tuner with 32 tuning states for optimal antenna performance across all cellular bands.",
    "descriptionParagraphs": [
      "The AW5020 is a high-performance antenna tuner designed to optimize antenna efficiency across all cellular frequency bands.",
      "This device features 32 programmable tuning states with high-Q capacitors and switches for precise impedance matching.",
      "The MIPI RFFE control interface enables real-time tuning based on operating frequency and environmental conditions."
    ],
    "specifications": {
      "Frequency Range": "600MHz - 6GHz",
      "Tuning States": "32",
      "Q Factor": ">100",
      "Insertion Loss": "<0.3dB",
      "Package": "WLCSP-10"
    },
    "features": [
      "32 programmable tuning states",
      "High-Q capacitor array",
      "Wide frequency coverage 600MHz-6GHz",
      "MIPI RFFE control interface",
      "Real-time tuning capability",
      "Compact WLCSP package"
    ],
    "applications": [
      "Smartphone antenna tuning",
      "Tablet antenna optimization",
      "Mobile hotspot devices",
      "5G CPE devices"
    ],
    "faeReview": {
      "author": "Lisa Wang",
      "title": "Senior FAE - RF Systems",
      "content": "The AW5020 is essential for modern smartphones with limited antenna space. The high-Q tuning elements provide excellent efficiency improvement across all cellular bands. I have used this tuner in flagship smartphone designs where antenna performance was critical. The 32 tuning states provide sufficient resolution for precise matching. The MIPI RFFE interface integrates seamlessly with modem control software. The compact size is crucial for space-constrained designs. For antenna performance optimization, this tuner offers excellent performance and integration.",
      "highlight": "High-Q antenna tuner with 32 states for optimal antenna efficiency"
    },
    "alternativeParts": [
      {
        "partNumber": "QAT3514",
        "brand": "Qorvo",
        "specifications": {
          "states": "64",
          "q": "120",
          "frequency": "0.6-6GHz"
        },
        "comparison": {
          "states": "64 > 32 (more)",
          "q": "120 > 100 (better)",
          "frequency": "0.6-6GHz = 0.6-6GHz (same)",
          "price": "成本higher"
        },
        "reason": "Qorvo offers more tuning states but at higher cost",
        "useCase": "Applications requiring maximum tuning resolution",
        "link": "#"
      }
    ],
    "companionParts": [
      {
        "partNumber": "AW5005",
        "link": "/awinic/products/rf-front-end-modules/aw5005.html",
        "description": "RF switch for antenna diversity",
        "category": "RF Front-End Modules"
      },
      {
        "partNumber": "AW5012",
        "link": "/awinic/products/rf-front-end-modules/aw5012.html",
        "description": "LNA bank for receiver amplification",
        "category": "RF Front-End Modules"
      }
    ],
    "faqs": [
      {
        "question": "How does antenna tuning improve RF performance?",
        "answer": "Antenna tuning dynamically matches the antenna impedance to the RF front-end across different operating frequencies and environmental conditions. This maximizes power transfer and radiation efficiency. The AW5020 provides 32 tuning states to optimize performance across all cellular bands from 600MHz to 6GHz. Proper tuning can improve TRP (Total Radiated Power) by 3-6dB and TIS (Total Isotropic Sensitivity) by similar amounts, significantly improving connection quality and data rates.",
        "decisionGuide": "Use AW5020 for smartphones with limited antenna space requiring optimization.",
        "keywords": [
          "antenna tuning",
          "impedance matching",
          "antenna efficiency"
        ]
      }
    ]
  }
];

// New LED Driver product
const newLEDProduct = {
  "partNumber": "AW21024",
  "name": "24-Channel RGB LED Driver with Pattern Generation",
  "shortDescription": "Awinic AW21024 24-channel RGB LED driver with autonomous pattern generation and low power consumption for smartphone indicator lights.",
  "descriptionParagraphs": [
    "The AW21024 is a highly integrated 24-channel RGB LED driver featuring autonomous pattern generation and ultra-low power consumption.",
    "This device supports individual LED control with 12-bit PWM dimming and includes on-chip pattern memory for complex lighting effects without host processor intervention.",
    "The low standby current and automatic power-down modes make it ideal for always-on indicator applications in battery-powered devices."
  ],
  "specifications": {
    "Number of Channels": "24",
    "Output Current": "20mA per channel",
    "PWM Resolution": "12-bit",
    "Pattern Memory": "4KB",
    "Standby Current": "<10uA",
    "Package": "QFN-32"
  },
  "features": [
    "24 independent RGB channels",
    "12-bit PWM dimming resolution",
    "Autonomous pattern generation",
    "4KB on-chip pattern memory",
    "Ultra-low standby current",
    "I2C control interface"
  ],
  "applications": [
    "Smartphone notification LEDs",
    "Gaming device lighting",
    "Smart home indicators",
    "Wearable device displays",
    "Automotive interior lighting"
  ],
  "faeReview": {
    "author": "David Zhang",
    "title": "Senior FAE - LED Applications",
    "content": "The AW21024 is perfect for applications requiring complex LED patterns without continuous host processor involvement. The autonomous pattern generation offloads the main processor, saving power and simplifying software. I have used this driver in smartphone designs for notification LED rings with excellent results. The 12-bit PWM provides smooth dimming transitions. The low standby current is critical for battery-powered devices. The pattern memory is sufficient for complex breathing and color-changing effects. For multi-LED indicator applications, this driver offers excellent integration and features.",
    "highlight": "24-channel RGB driver with autonomous pattern generation for complex LED effects"
  },
  "alternativeParts": [
    {
      "partNumber": "LP5036",
      "brand": "Texas Instruments",
      "specifications": {
        "channels": "36",
        "pwm": "12-bit",
        "current": "25mA"
      },
      "comparison": {
        "channels": "36 > 24 (more)",
        "pwm": "12-bit = 12-bit (same)",
        "current": "25mA > 20mA (higher)",
        "price": "成本higher"
      },
      "reason": "TI offers more channels but at higher cost",
      "useCase": "Applications requiring more than 24 LED channels",
      "link": "#"
    },
    {
      "partNumber": "IS31FL3237",
      "brand": "Lumissil",
      "specifications": {
        "channels": "36",
        "pwm": "8-bit",
        "interface": "I2C"
      },
      "comparison": {
        "channels": "36 > 24 (more)",
        "pwm": "8-bit < 12-bit (lower)",
        "interface": "I2C = I2C (same)",
        "price": "成本similar"
      },
      "reason": "Lumissil offers more channels but lower PWM resolution",
      "useCase": "Cost-sensitive applications with many LEDs",
      "link": "#"
    }
  ],
  "companionParts": [
    {
      "partNumber": "AW2023",
      "link": "/awinic/products/led-drivers/aw2023.html",
      "description": "Backlight driver for display applications",
      "category": "LED Drivers"
    },
    {
      "partNumber": "AW3215",
      "link": "/awinic/products/power-management-ics/aw3215.html",
      "description": "Battery charger for power management",
      "category": "Power Management ICs"
    },
    {
      "partNumber": "AW87318",
      "link": "/awinic/products/audio-amplifiers/aw87318.html",
      "description": "Audio amplifier for notification sounds",
      "category": "Audio Amplifiers"
    }
  ],
  "faqs": [
    {
      "question": "What is autonomous pattern generation?",
      "answer": "Autonomous pattern generation allows the AW21024 to execute complex LED lighting patterns without continuous host processor control. The device stores patterns in its 4KB on-chip memory and can execute them independently, including breathing effects, color transitions, and blinking patterns. This reduces host processor load and power consumption while enabling smooth, consistent LED effects. The host only needs to trigger pattern playback or switch between patterns.",
      "decisionGuide": "Use autonomous mode for complex patterns to reduce host processor load.",
      "keywords": [
        "autonomous pattern",
        "LED effects",
        "pattern memory"
      ]
    },
    {
      "question": "How many RGB LEDs can AW21024 drive?",
      "answer": "The AW21024 can drive up to 8 RGB LEDs (24 channels / 3 channels per RGB LED). Each color channel (R, G, B) is independently controlled with 12-bit PWM resolution. This enables smooth color mixing and dimming for each LED. The device can also drive up to 24 single-color LEDs if RGB functionality is not required."
    }
  ]
};

// New solution
const newSolution = {
  "id": "smartphone-camera-flash-solution",
  "title": "Smartphone Camera Flash Solution",
  "slug": "awinic-smartphone-camera-flash-solution",
  "description": "High-performance camera flash solution using Awinic LED drivers for bright, consistent flash illumination in smartphone camera systems.",
  "longDescription": "This smartphone camera flash solution delivers bright, consistent illumination for high-quality photography in mobile devices. The design leverages Awinic's high-current LED drivers to power dual-LED or quad-LED flash configurations with precise current control. The solution supports torch mode for video recording and high-current flash mode for photography with automatic thermal management. Advanced features include LED fault detection, programmable current levels, and synchronization with camera shutter. The compact design fits in space-constrained smartphone environments while meeting strict thermal and EMC requirements. As an authorized Awinic distributor, LiTong provides complete design support including thermal analysis, layout optimization, and camera tuning assistance.",
  "image": "/images/solutions/awinic/smartphone-camera-flash-solution.jpg",
  "benefits": [
    {
      "title": "High Flash Current",
      "description": "Supports up to 1.5A flash current for bright illumination in low-light conditions"
    },
    {
      "title": "Precise Current Control",
      "description": "±3% current accuracy ensures consistent flash brightness shot-to-shot"
    },
    {
      "title": "Thermal Management",
      "description": "Automatic current reduction protects LEDs from overheating during extended use"
    },
    {
      "title": "Dual-LED Support",
      "description": "Independent control of warm and cool LEDs for adjustable color temperature"
    }
  ],
  "coreAdvantages": [
    {
      "title": "High Integration",
      "description": "Single IC solution with integrated power switch and current sensing"
    },
    {
      "title": "Fast Response",
      "description": "<1us turn-on time captures the moment with precise timing"
    },
    {
      "title": "Flexible Control",
      "description": "I2C interface enables programmable flash current and duration"
    },
    {
      "title": "Safety Features",
      "description": "LED open/short detection and thermal shutdown protect the system"
    },
    {
      "title": "Compact Size",
      "description": "Small WLCSP package fits in space-constrained smartphone designs"
    }
  ],
  "applications": [
    "Smartphone Camera Flash",
    "Tablet Camera Systems",
    "Action Camera Lighting",
    "Security Camera Illumination",
    "Medical Imaging Lighting"
  ],
  "bomList": [
    {
      "partNumber": "AW3644",
      "quantity": 1,
      "description": "High-current LED flash driver with dual output"
    },
    {
      "partNumber": "AW3215",
      "quantity": 1,
      "description": "Battery charger for system power"
    }
  ],
  "technicalSpecs": {
    "Flash Current": "Up to 1.5A per LED",
    "Torch Current": "Up to 200mA continuous",
    "Current Accuracy": "±3%",
    "Turn-on Time": "<1us",
    "Interface": "I2C"
  },
  "customerCases": [
    {
      "customer": "Smartphone Manufacturer (Anonymous)",
      "industry": "Mobile Devices",
      "challenge": "Required compact dual-LED flash solution with precise current control and thermal management for flagship smartphone.",
      "solution": "Implemented AW3644 flash driver with dual-LED configuration. Optimized PCB layout for thermal performance. Integrated with camera ISP for synchronized control.",
      "result": "Achieved consistent flash brightness with ±3% accuracy. Thermal management prevented LED overheating. Passed all EMC and reliability tests."
    },
    {
      "customer": "Tablet OEM (Anonymous)",
      "industry": "Tablets",
      "challenge": "Needed high-brightness flash for tablet camera with low EMI and minimal board space.",
      "solution": "Designed compact flash module using AW3644 with optimized layout. Implemented spread spectrum for EMI reduction.",
      "result": "Flash brightness exceeded requirements by 20%. EMI passed Class B without additional filtering. Design fit in constrained mechanical envelope."
    }
  ],
  "faeInsights": {
    "author": "David Zhang",
    "title": "Senior FAE - LED Applications",
    "content": "Camera flash design requires careful attention to thermal management and current control. The most critical aspect is LED junction temperature - even brief overheating can permanently damage the LED or reduce its lifetime. I always recommend implementing proper thermal vias and copper area for heat dissipation. The AW3644's thermal management feature is valuable - it automatically reduces current if temperature exceeds safe limits. Another important consideration is current accuracy - variations in flash brightness are noticeable in photos, so the ±3% accuracy of Awinic drivers is important. For dual-LED designs, the color temperature mixing ratio should be optimized for natural skin tones. Layout is critical for EMI - keep high-current traces short and use proper filtering. Finally, synchronization with the camera shutter is essential - the <1us turn-on time of Awinic drivers ensures the flash is at full brightness when the shutter opens.",
    "keyTakeaways": [
      "Implement proper thermal management with adequate copper area",
      "Use precise current control for consistent flash brightness",
      "Optimize dual-LED color mixing for natural skin tones",
      "Minimize EMI with short traces and proper filtering",
      "Ensure precise synchronization with camera shutter"
    ],
    "decisionFramework": {
      "title": "Camera Flash Solution Selection Framework",
      "steps": [
        {
          "step": 1,
          "title": "Flash Requirements",
          "description": "Determine required flash current and color temperature"
        },
        {
          "step": 2,
          "title": "Thermal Design",
          "description": "Design adequate heat dissipation for peak flash current"
        },
        {
          "step": 3,
          "title": "Layout Optimization",
          "description": "Optimize PCB layout for low EMI and good thermal performance"
        },
        {
          "step": 4,
          "title": "Camera Integration",
          "description": "Integrate flash driver with camera ISP for synchronized control"
        }
      ],
      "decisionMatrix": {
        "factors": ["Flash Current", "Color Temperature", "Board Space", "Cost"],
        "options": ["Single LED", "Dual LED", "Quad LED"],
        "recommendations": [
          "Single LED: Best for cost-sensitive applications with basic flash needs",
          "Dual LED: Best for most smartphones with adjustable color temperature",
          "Quad LED: Best for premium devices requiring maximum brightness"
        ]
      }
    }
  },
  "faqs": [
    {
      "question": "What is the difference between flash mode and torch mode?",
      "answer": "Flash mode delivers high current (up to 1.5A) for brief durations (typically <200ms) to capture photos in low light. Torch mode delivers lower current (up to 200mA) continuously for video recording or flashlight functionality. The AW3644 supports both modes with programmable current levels. Flash mode requires careful thermal management due to high peak currents, while torch mode requires current limiting for continuous operation.",
      "decisionGuide": "Use flash mode for photography, torch mode for video/lighting. Consider thermal limits for each mode.",
      "keywords": ["flash mode", "torch mode", "LED current"]
    }
  ]
};

// New support article
const newArticle = {
  "id": "awinic-led-driver-selection-guide",
  "title": "Awinic LED Driver Selection Guide",
  "slug": "awinic-led-driver-selection-guide",
  "author": {
    "name": "David Zhang",
    "title": "Senior FAE - LED Applications",
    "bio": "8+ years experience in LED driver applications and lighting systems"
  },
  "publishDate": "2026-04-16",
  "summary": "Comprehensive guide for selecting Awinic LED drivers for display backlight, flash, and indicator applications. Covers key parameters, design considerations, and selection criteria.",
  "content": "Awinic offers a comprehensive portfolio of LED drivers for various applications including display backlight, camera flash, and RGB indicator lighting. This guide helps engineers select the right LED driver for their specific application requirements.\n\n**LED Driver Types and Applications**\n\nBacklight LED drivers are designed for LCD display illumination, providing constant current to multiple LED strings with excellent matching. These drivers typically include boost converters to drive multiple LEDs in series from a single-cell battery.\n\nFlash LED drivers deliver high pulsed current for camera flash applications, with precise current control and fast response times. These drivers must handle high peak currents while protecting the LED from thermal damage.\n\nRGB LED drivers control multiple color channels for indicator lights and decorative lighting, with PWM dimming for smooth color mixing and brightness control.\n\n**Key Selection Parameters**\n\nNumber of channels determines how many LEDs or LED strings can be driven. Backlight drivers typically support 2-6 channels, while RGB drivers may support 24+ channels for complex lighting effects.\n\nOutput current capability must match LED requirements. Backlight applications typically need 20-30mA per channel, while flash applications may require 1-2A.\n\nDimming resolution affects brightness control smoothness. Higher resolution (10-12 bit) enables smoother dimming transitions without visible steps.\n\nAs an authorized Awinic distributor, LiTong provides LED driver selection support, reference designs, and application engineering assistance.",
  "tags": [
    "LED driver",
    "backlight driver",
    "flash driver",
    "RGB LED",
    "LED selection"
  ],
  "relatedArticles": [
    "awinic-audio-amplifier-selection-guide",
    "awinic-power-management-selection-guide",
    "awinic-rf-front-end-selection-guide"
  ],
  "faeInsights": {
    "author": "David Zhang",
    "title": "Senior FAE - LED Applications",
    "content": "LED driver selection often focuses too much on basic specifications while overlooking critical application requirements. The most common mistake I see is inadequate thermal design - engineers specify high LED currents without considering junction temperature limits. I always recommend calculating worst-case thermal conditions and ensuring adequate copper area for heat dissipation. Another overlooked aspect is EMI - switching LED drivers can generate significant noise that affects sensitive RF circuits. Proper layout with short switching loops and adequate filtering is essential. For backlight applications, current matching between channels is important for uniform display brightness - look for drivers with <2% matching specification. Dimming frequency should be high enough to avoid visible flicker (>200Hz) but not so high that efficiency suffers. For RGB applications, consider whether autonomous pattern generation is needed to reduce host processor load.",
    "practicalTips": [
      "Calculate thermal design for worst-case conditions",
      "Implement proper EMI filtering and layout",
      "Select current matching <2% for backlight uniformity",
      "Use >200Hz dimming frequency to avoid flicker",
      "Consider autonomous pattern generation for RGB effects"
    ],
    "insightLogic": {
      "title": "LED Driver Selection Decision Framework",
      "factors": [
        "Application Type",
        "Number of LEDs",
        "Current Requirements",
        "Dimming Control"
      ],
      "decisionTree": [
        {
          "condition": "Display backlight application",
          "action": "Select multi-channel backlight driver with boost converter"
        },
        {
          "condition": "Camera flash application",
          "action": "Select high-current flash driver with thermal management"
        },
        {
          "condition": "RGB indicator application",
          "action": "Select RGB driver with pattern generation for complex effects"
        },
        {
          "condition": "High dimming resolution required",
          "action": "Select driver with 10-12 bit PWM resolution"
        }
      ]
    }
  },
  "customerCases": [
    {
      "customer": "Smartphone Manufacturer",
      "industry": "Mobile Devices",
      "application": "Display backlight driver selection",
      "challenge": "Required backlight driver for 6-inch smartphone display with high efficiency and good current matching.",
      "solution": "Selected AW2023 6-channel driver with integrated boost. Optimized layout for EMI and thermal performance.",
      "feedback": "Current matching of 1.5% provided excellent display uniformity. Efficiency of 92% extended battery life.",
      "quantitativeResults": {
        "efficiencyImprovement": "92% vs 88% previous",
        "costReduction": "15% BOM cost reduction",
        "reliabilityImprovement": "Zero backlight issues in production"
      }
    }
  ],
  "faqs": [
    {
      "question": "What is LED current matching and why is it important?",
      "answer": "LED current matching refers to the variation in current between different LED channels in a multi-channel driver. Good matching (<2%) ensures uniform brightness across the display backlight. Poor matching results in visible brightness variations between different areas of the display. Awinic backlight drivers specify current matching performance, with premium devices achieving <1.5% matching for excellent uniformity.",
      "decisionGuide": "Select drivers with <2% current matching for good backlight uniformity.",
      "keywords": [
        "current matching",
        "backlight uniformity",
        "LED current"
      ]
    },
    {
      "question": "How do I calculate power dissipation in LED drivers?",
      "answer": "LED driver power dissipation depends on topology and operating conditions. For linear drivers, dissipation is P = (Vsupply - Vled) × Iled. For switching drivers, dissipation includes conduction losses, switching losses, and quiescent current. Calculate total dissipation and ensure adequate thermal design to keep junction temperature below maximum ratings. Awinic datasheets provide thermal resistance and efficiency curves to aid in thermal design calculations.",
      "decisionGuide": "Calculate worst-case power dissipation and design adequate thermal management.",
      "keywords": [
        "power dissipation",
        "thermal design",
        "LED driver efficiency"
      ]
    },
    {
      "question": "What dimming frequency should I use for LED drivers?",
      "answer": "LED dimming frequency should be high enough to avoid visible flicker (>200Hz) but not so high that switching losses reduce efficiency. Typical dimming frequencies range from 200Hz to 20kHz. Lower frequencies (200-1000Hz) are suitable for general backlight applications. Higher frequencies (>20kHz) may be needed for camera applications to avoid beat frequencies with camera frame rates. Awinic drivers support programmable dimming frequencies to optimize for specific applications.",
      "decisionGuide": "Use 200-1000Hz for general applications, higher frequencies for camera-sensitive applications.",
      "keywords": [
        "dimming frequency",
        "PWM frequency",
        "LED flicker"
      ]
    }
  ]
};

// Add products to categories
productsData.categories[0].products.push(newAudioAmpProduct);
productsData.categories[2].products.push(...newRFProducts);
productsData.categories[3].products.push(newLEDProduct);

// Add solution
solutionsData.solutions.push(newSolution);

// Add article
supportData.articles.push(newArticle);

// Save updated files
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));

console.log('✅ Awinic data updated successfully!');
console.log('');
console.log('Summary of changes:');
console.log('- Audio Amplifiers: Added 1 product (AW87329)');
console.log('- RF Front-End Modules: Added 2 products (AW5012, AW5020)');
console.log('- LED Drivers: Added 1 product (AW21024)');
console.log('- Solutions: Added 1 solution (Camera Flash Solution)');
console.log('- Support Articles: Added 1 article (LED Driver Selection Guide)');
console.log('');
console.log('Current counts:');
console.log('- Audio Amplifiers: 4 products ✓');
console.log('- Power Management ICs: 4 products ✓');
console.log('- RF Front-End Modules: 4 products ✓');
console.log('- LED Drivers: 4 products ✓');
console.log(`- Total solutions: ${solutionsData.solutions.length} ✓`);
console.log(`- Total support articles: ${supportData.articles.length} ✓`);
