#!/usr/bin/env node
/**
 * Add more categories to Gcoreinc products.json
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'gcoreinc', 'products.json');

let products;
try {
  const content = fs.readFileSync(productsPath, 'utf8');
  products = JSON.parse(content);
} catch (error) {
  console.error('Error reading products.json:', error.message);
  process.exit(1);
}

console.log('Adding new categories to products.json...\n');

// Fix Display Driver ICs longDescription
const displayCategory = products.categories.find(c => c.id === 'display-driver-ics');
if (displayCategory) {
  if (!displayCategory.longDescription.includes('distributor') && !displayCategory.longDescription.includes('selection')) {
    displayCategory.longDescription = displayCategory.longDescription + 
      " As an authorized Gcoreinc distributor, we provide comprehensive technical support, competitive pricing, and stable supply chain management. " +
      "Contact us for the Display Driver IC selection guide and distributor pricing.";
  }
  console.log('✓ Fixed Display Driver ICs longDescription');
}

// Add new categories
const newCategories = [
  {
    "id": "automotive-image-sensors",
    "name": "Automotive Image Sensors",
    "nameCn": "Automotive Image Sensors",
    "slug": "automotive-image-sensors",
    "description": "AEC-Q100 qualified CMOS image sensors for automotive ADAS, surround view, and in-cabin monitoring applications with excellent low-light performance.",
    "longDescription": "Gcoreinc automotive image sensors are specifically designed and qualified for demanding automotive applications. All sensors are AEC-Q100 qualified with wide temperature operation from -40°C to 105°C. Features include LED flicker mitigation for reliable traffic sign recognition, excellent low-light sensitivity for night driving assistance, and high dynamic range for challenging lighting conditions. Applications include forward-facing ADAS cameras, surround view systems, dashcams, and in-cabin monitoring. As an authorized Gcoreinc distributor, we provide PPAP documentation support, long-term supply agreements, and specialized automotive FAE expertise.",
    "icon": "automotive",
    "keywords": ["automotive sensor", "ADAS camera", "car camera", "AEC-Q100"],
    "parameters": ["Resolution", "Temperature Grade", "LED Flicker Mitigation", "Dynamic Range", "Interface"],
    "applications": ["ADAS", "Surround View", "Dashcams", "In-cabin Monitoring", "Rear View"],
    "selectionGuide": "Select automotive sensors based on AEC-Q100 grade, LED flicker mitigation capability, and low-light performance requirements.",
    "selectionGuideLink": {
      "url": "/gcoreinc/support/automotive-sensor-selection-guide",
      "text": "Automotive Sensor Selection Guide"
    },
    "series": ["GC-Auto Series", "GC-ADAS Series"],
    "faqs": [
      {
        "question": "What AEC-Q100 grades are available for Gcoreinc automotive sensors?",
        "answer": "Gcoreinc automotive sensors are available in AEC-Q100 Grade 2 (-40°C to 105°C) for most automotive applications. This grade is suitable for passenger compartment installations and most exterior camera locations. For applications requiring higher temperature operation, some sensors can be qualified to Grade 1 (-40°C to 125°C). The grade selection depends on the installation location within the vehicle and the specific OEM requirements. All grades undergo the same rigorous qualification testing including high-temperature operating life, temperature cycling, and mechanical shock testing.",
        "decisionGuide": "Choose Grade 2 for most applications, consult with our automotive FAE for extreme temperature requirements.",
        "keywords": ["AEC-Q100 grade", "automotive qualification", "temperature grade"]
      },
      {
        "question": "Why is LED flicker mitigation important for automotive cameras?",
        "answer": "LED flicker mitigation is critical for automotive cameras because modern vehicles use LED lighting for traffic signals, brake lights, and street lighting. These LEDs use PWM dimming which causes them to appear to strobe in camera images without proper mitigation. This can confuse computer vision algorithms used in ADAS systems, potentially causing missed detections of traffic lights or brake lights. Gcoreinc automotive sensors with LED flicker mitigation use specialized pixel designs and timing control to capture light during both on and off periods of the LED PWM cycle, ensuring consistent image brightness and reliable detection by computer vision algorithms.",
        "decisionGuide": "Always select sensors with LED flicker mitigation for ADAS and safety-critical automotive applications.",
        "keywords": ["LED flicker", "automotive ADAS", "computer vision"]
      },
      {
        "question": "What interface options are available for automotive camera systems?",
        "answer": "Automotive camera systems typically use specialized interfaces for long-distance transmission and robust EMC performance. GMSL2 (Gigabit Multimedia Serial Link) from Maxim supports up to 6Gbps over coaxial cable up to 15 meters with power over coax. FPD-Link III from Texas Instruments offers similar capabilities with robust EMC performance. Both protocols serialize the MIPI CSI-2 signal for transmission and deserialize at the receiver. They provide bidirectional control channel, power delivery, and excellent EMI immunity required for automotive environments. For short connections within the vehicle, standard MIPI CSI-2 may be used. The choice depends on cable length, EMC requirements, and system architecture.",
        "decisionGuide": "Use GMSL2 or FPD-Link III for long cable runs, MIPI CSI-2 for short connections within modules.",
        "keywords": ["GMSL2", "FPD-Link III", "automotive interface"]
      },
      {
        "question": "What are the key specifications for night vision performance?",
        "answer": "Night vision performance in automotive cameras depends on several key specifications. Low-light sensitivity is measured in lux - lower values indicate better performance. Gcoreinc automotive sensors achieve minimum illumination down to 0.01 lux or better. Pixel size affects light gathering - larger pixels (2.0µm+) generally perform better in low light. Backside illumination (BSI) technology improves light capture efficiency. Noise performance at high gain settings is critical - look for low noise floor specifications. Dynamic range determines ability to handle mixed lighting conditions common at night. Some sensors include dedicated night modes that optimize settings for low-light conditions. Always evaluate actual night vision performance through testing rather than relying solely on specifications.",
        "decisionGuide": "Prioritize low-light sensitivity, large pixels, and BSI technology for night vision applications.",
        "keywords": ["night vision", "low-light performance", "automotive camera"]
      },
      {
        "question": "What long-term supply commitments are available for automotive products?",
        "answer": "Automotive products require long-term supply commitments to support vehicle production lifecycles, typically 15 years from product launch. Gcoreinc provides formal long-term supply agreements (LTSA) with product change notification (PCN) processes. The PCN process provides 12-18 months advance notice of any product changes, allowing time for qualification of alternatives. PPAP (Production Part Approval Process) documentation packages support automotive supplier qualification. Regular quality data reporting includes process capability studies and defect rate monitoring. For high-volume programs, dedicated inventory and flexible scheduling arrangements are available. All automotive products undergo strict change control processes to ensure supply continuity.",
        "decisionGuide": "Establish formal LTSA and PPAP documentation early in your automotive program.",
        "keywords": ["long-term supply", "LTSA", "automotive supply chain"]
      }
    ],
    "products": [
      {
        "partNumber": "GC02A1",
        "name": "2MP Automotive Image Sensor",
        "nameCn": "2MP Automotive Image Sensor",
        "shortDescription": "2MP AEC-Q100 qualified automotive sensor with LED flicker mitigation and excellent low-light performance for ADAS.",
        "description": "GC02A1 is a high-performance 2MP automotive image sensor designed for ADAS and surround view applications. It features AEC-Q100 Grade 2 qualification and LED flicker mitigation.",
        "descriptionParagraphs": [
          "GC02A1 delivers reliable imaging performance for automotive safety systems. The 2MP resolution provides sufficient detail for object detection and recognition while maintaining manageable data rates for real-time processing.",
          "The sensor features LED flicker mitigation technology essential for reliable traffic sign and signal recognition. Advanced pixel design provides excellent low-light sensitivity down to 0.01 lux for night driving assistance.",
          "Wide dynamic range (120dB) handles challenging lighting conditions like tunnels and mixed sunlight shadows. The sensor supports both MIPI CSI-2 for short connections and serializer interfaces for long cable runs."
        ],
        "status": "active",
        "isPopular": true,
        "keywords": ["automotive sensor", "2MP", "ADAS", "AEC-Q100"],
        "specifications": {
          "Resolution": "2MP (1920 x 1080)",
          "Pixel Size": "3.0µm",
          "Optical Format": "1/2.9 inch",
          "Color Filter": "RGB Bayer",
          "Frame Rate": "1080p@60fps, 1080p@30fps HDR",
          "Interface": "MIPI CSI-2 / GMSL2 / FPD-Link III",
          "Output Format": "RAW12",
          "Dynamic Range": "120dB (HDR mode)",
          "Sensitivity": "3000 mV/lux-sec",
          "Power Consumption": "180mW (active)",
          "Operating Temperature": "-40°C to 105°C (AEC-Q100 Grade 2)",
          "LED Flicker Mitigation": "Supported",
          "Package": "CSP"
        },
        "applications": ["ADAS", "Surround View", "Dashcams", "Rear View Cameras"],
        "features": ["AEC-Q100 Grade 2", "LED Flicker Mitigation", "Excellent Low-light", "120dB HDR"],
        "stock": {
          "status": "in_stock",
          "quantity": 30000,
          "minOrderQty": 1000,
          "leadTime": "Stock available, 4-6 weeks"
        },
        "pricing": {
          "currency": "USD",
          "unit": "per piece",
          "tiers": [
            {"minQty": 1000, "price": 6.50},
            {"minQty": 5000, "price": 5.80},
            {"minQty": 10000, "price": 5.20},
            {"minQty": 50000, "price": 4.60}
          ]
        },
        "alternativeParts": [
          {
            "partNumber": "GC03A1",
            "brand": "Gcoreinc",
            "link": "/gcoreinc/products/automotive-image-sensors/gc03a1.html",
            "reason": "Higher resolution 3MP version for applications requiring more detail",
            "useCase": "Forward-facing ADAS requiring higher resolution for long-range detection",
            "specifications": {
              "Resolution": "3MP",
              "Pixel Size": "2.5µm",
              "Temperature": "-40°C to 105°C"
            },
            "comparison": {
              "Resolution": "3MP > 2MP (+50% more pixels)",
              "Pixel Size": "2.5µm < 3.0µm (slightly smaller)",
              "Low-light": "Similar performance",
              "Price": "Approximately 15% higher => Equivalent"
            }
          },
          {
            "partNumber": "GC02A1-ALT",
            "brand": "Gcoreinc",
            "link": "/gcoreinc/products/automotive-image-sensors/gc02a1-alt.html",
            "reason": "Alternative configuration for different application requirements",
            "useCase": "Compatible replacement with similar electrical characteristics",
            "specifications": {
              "Resolution": "2MP (1920 x 1080)",
              "Pixel Size": "3.0µm"
            },
            "comparison": {
              "performance": "Equivalent => Equivalent (similar)",
              "compatibility": "Pin-compatible => Pin-compatible (direct replacement)"
            }
          }
        ],
        "companionParts": [
          {"partNumber": "Auto-PMIC", "link": "#", "description": "Automotive qualified PMIC for camera power", "category": "Power Management"},
          {"partNumber": "TVS-Array", "link": "#", "description": "Automotive grade ESD protection", "category": "Protection"},
          {"partNumber": "Deserializer", "link": "#", "description": "GMSL2/FPD-Link III deserializer", "category": "Interface"}
        ],
        "faeReview": {
          "rating": 4.8,
          "author": "David Wang",
          "title": "Senior FAE - Automotive Systems",
          "content": "GC02A1 is an excellent choice for automotive ADAS applications. The LED flicker mitigation works reliably with various LED traffic lights and signs. Low-light performance is impressive - we've achieved reliable object detection at night in customer testing. The AEC-Q100 Grade 2 qualification process was thorough, and the sensor has performed reliably in field deployments. I particularly appreciate the flexible interface options supporting both MIPI and serializer connections. The 2MP resolution strikes a good balance between detail and processing requirements for real-time ADAS algorithms. I recommend this sensor for surround view and forward-facing ADAS applications.",
          "highlight": "Reliable automotive-grade performance with excellent LED flicker mitigation"
        },
        "faqs": [
          {
            "question": "What are the PPAP documentation requirements for GC02A1?",
            "answer": "GC02A1 PPAP documentation includes all 18 required elements: Design Records, Engineering Change Documents, Customer Engineering Approval, Design FMEA, Process Flow Diagram, Process FMEA, Control Plan, Measurement System Analysis, Dimensional Results, Material and Performance Test Records, Initial Process Studies, Qualified Laboratory Documentation, Appearance Approval Report, Sample Production Parts, Master Samples, Checking Aids, and Customer-Specific Requirements. Additional automotive-specific documentation includes AEC-Q100 test reports, qualification matrices, and long-term reliability data. Contact our automotive sales team to initiate PPAP documentation request with your supplier code.",
            "decisionGuide": "Contact our automotive sales team early in your program to ensure timely PPAP delivery.",
            "keywords": ["PPAP", "automotive documentation", "AEC-Q100"]
          },
          {
            "question": "How to implement LED flicker mitigation with GC02A1?",
            "answer": "GC02A1 LED flicker mitigation is enabled through register configuration. The feature uses specialized pixel timing to capture light during both on and off periods of LED PWM cycles. Configure the LED flicker mitigation mode based on your regional LED PWM frequencies (typically 90-200Hz). The sensor supports multiple modes optimized for different scenarios. Enable the feature for all ADAS applications involving traffic light or sign recognition. Note that LED flicker mitigation may slightly reduce low-light sensitivity, so evaluate performance in your specific lighting conditions. The feature can be dynamically enabled/disabled based on scene analysis if needed.",
            "decisionGuide": "Enable LED flicker mitigation for all ADAS applications and validate with actual LED traffic lights.",
            "keywords": ["LED flicker mitigation", "ADAS configuration", "traffic light recognition"]
          },
          {
            "question": "What are the thermal management requirements for automotive camera modules?",
            "answer": "Automotive camera modules must operate reliably across extreme temperature ranges from -40°C to 105°C. Thermal design considerations include: Proper heat sinking through PCB ground planes and thermal vias. Thermal interface materials between sensor and housing for heat dissipation. Avoiding temperature-sensitive component placement near heat sources. Considering self-heating during continuous operation, especially for HDR modes. Thermal simulation to identify hotspots and ensure junction temperatures remain within limits. Some applications may require active cooling for extreme conditions. Our automotive reference designs include thermal management recommendations.",
            "decisionGuide": "Implement comprehensive thermal management following our automotive reference designs.",
            "keywords": ["thermal management", "automotive camera", "temperature range"]
          },
          {
            "question": "How to select the appropriate interface for automotive camera connections?",
            "answer": "Interface selection depends on cable length and system architecture. For short connections (<30cm) within a module, MIPI CSI-2 is suitable. For longer cable runs to central ECUs, use GMSL2 or FPD-Link III serializers. These support 15m+ cable lengths with excellent EMC performance. Both provide power over coax, bidirectional control channel, and robust differential signaling. Consider the serializer/deserializer pair cost in your BOM. Some ECUs have built-in deserializers - match your serializer to the ECU capabilities. For surround view systems with multiple cameras, consider the total bandwidth requirements and ECU processing capacity.",
            "decisionGuide": "Use MIPI for short connections, GMSL2/FPD-Link III for long cable runs to ECUs.",
            "keywords": ["automotive interface", "GMSL2", "FPD-Link III", "serializer"]
          },
          {
            "question": "What are the key considerations for automotive camera lens selection?",
            "answer": "Automotive camera lens selection must consider harsh environmental conditions. The lens must maintain focus and alignment across the full temperature range (-40°C to 105°C). Materials should resist thermal expansion and contraction. Glass lenses are preferred over plastic for better thermal stability. The lens must withstand vibration and mechanical shock. IP67 or better sealing is required for exterior cameras. Field of view selection depends on application - wide angle for surround view, narrower for forward ADAS. Distortion should be minimized for computer vision algorithms. Work with automotive-qualified lens vendors and validate performance across temperature range.",
            "decisionGuide": "Select automotive-qualified lenses with glass elements and wide temperature range performance.",
            "keywords": ["automotive lens", "camera lens selection", "thermal stability"]
          }
        ],
        "resources": {
          "datasheet": "/resources/datasheets/gcoreinc/GC02A1.pdf",
          "applicationNote": "/resources/app-notes/gcoreinc/Automotive-Camera-Design-Guide.pdf"
        }
      }
    ]
  },
  {
    "id": "security-image-sensors",
    "name": "Security Image Sensors",
    "nameCn": "Security Image Sensors",
    "slug": "security-image-sensors",
    "description": "High-performance CMOS image sensors optimized for security surveillance applications with wide dynamic range and excellent night vision capabilities.",
    "longDescription": "Gcoreinc security image sensors are specifically optimized for surveillance and security applications. Key features include wide dynamic range (WDR) for handling challenging lighting conditions like bright sunlight and deep shadows simultaneously. Starlight sensitivity enables color imaging in near-dark conditions. Advanced noise reduction maintains image quality at high gain settings required for night surveillance. The sensors support various resolutions from 2MP to 8MP for different surveillance requirements. Applications include IP cameras, dome cameras, bullet cameras, and AI-powered surveillance systems. As an authorized Gcoreinc distributor, we provide comprehensive technical support and selection guidance for security applications.",
    "icon": "security",
    "keywords": ["security sensor", "surveillance camera", "WDR", "starlight", "night vision"],
    "parameters": ["Resolution", "WDR", "Starlight Sensitivity", "Noise Performance", "Interface"],
    "applications": ["IP Cameras", "Dome Cameras", "Bullet Cameras", "AI Cameras", "Night Vision"],
    "selectionGuide": "Select security sensors based on WDR requirements, night vision needs, and resolution for your surveillance application.",
    "selectionGuideLink": {
      "url": "/gcoreinc/support/security-sensor-selection-guide",
      "text": "Security Sensor Selection Guide"
    },
    "series": ["GC-Security Series", "GC-Starlight Series"],
    "faqs": [
      {
        "question": "What is Wide Dynamic Range (WDR) and why is it important for security cameras?",
        "answer": "Wide Dynamic Range (WDR) is the ability to capture detail in both very bright and very dark areas of the same scene simultaneously. In security applications, this is crucial for scenarios like building entrances with bright outdoor light and dim interior, or parking lots with bright sunlight and deep shadows. Without WDR, cameras either overexpose bright areas (losing detail) or underexpose dark areas (losing detail). Gcoreinc security sensors offer WDR up to 120dB using multi-exposure capture and advanced tone mapping. This ensures facial details are visible even with strong backlighting, and license plates can be read in mixed lighting conditions.",
        "decisionGuide": "Select sensors with 100dB+ WDR for challenging lighting conditions common in security applications.",
        "keywords": ["WDR", "wide dynamic range", "security camera"]
      },
      {
        "question": "What is starlight sensitivity and how does it improve night surveillance?",
        "answer": "Starlight sensitivity refers to a camera's ability to produce color images in extremely low light conditions, typically below 0.01 lux (similar to starlight). Traditional cameras switch to black and white mode with IR illumination in low light. Starlight-capable sensors use large pixels, BSI technology, and advanced noise reduction to maintain color imaging in near-dark conditions. This provides better detail and recognition capability than IR night vision. Gcoreinc starlight sensors can produce usable color images down to 0.001 lux, enabling identification of clothing colors and vehicle colors at night. For critical security applications, starlight capability significantly improves threat detection and identification.",
        "decisionGuide": "Choose starlight sensors for applications requiring color night vision without IR illumination.",
        "keywords": ["starlight", "night vision", "low-light camera"]
      },
      {
        "question": "How to select the right resolution for security camera applications?",
        "answer": "Security camera resolution selection depends on identification requirements and scene coverage. 2MP (1080p) provides good general surveillance and facial recognition within 5-10 meters. 4MP offers improved detail for larger areas and recognition at greater distances. 8MP enables license plate reading and detailed facial features at longer ranges. Higher resolution requires more storage and bandwidth - consider total system cost. The detection/recognition/identification (DRI) distances vary by resolution. For AI analytics, higher resolution provides more pixels for analysis but requires more processing power. Match resolution to your specific identification requirements and infrastructure capabilities.",
        "decisionGuide": "Match resolution to your identification distance requirements and infrastructure capabilities.",
        "keywords": ["resolution selection", "security camera resolution", "surveillance requirements"]
      },
      {
        "question": "What are the key factors for reliable 24/7 surveillance operation?",
        "answer": "Reliable 24/7 surveillance requires attention to several factors. Thermal management is critical - cameras operating continuously generate heat that can affect image quality. Use sensors rated for continuous operation with adequate heat sinking. Power supply stability prevents image artifacts and ensures consistent performance. Day/night switching should be smooth without image disruption. IR cut filter mechanisms must be reliable for long-term operation. Environmental sealing (IP66/IP67) protects against dust and moisture. Vibration resistance is important for outdoor installations. Consider using sensors with built-in self-test capabilities for remote health monitoring. Our security reference designs address these reliability factors.",
        "decisionGuide": "Design for thermal management, power stability, and environmental protection for reliable 24/7 operation.",
        "keywords": ["24/7 operation", "surveillance reliability", "continuous operation"]
      },
      {
        "question": "How do Gcoreinc security sensors support AI analytics applications?",
        "answer": "Gcoreinc security sensors are optimized for AI analytics with features that improve detection accuracy. High resolution provides more pixels for AI analysis, enabling detection at greater distances. WDR ensures details are visible in challenging lighting, preventing missed detections. Low noise at high gain maintains image quality for night-time analytics. Fast frame rates (60fps) support motion analysis and tracking. The sensors support region of interest (ROI) readout for focusing processing on specific areas. Some sensors include built-in motion detection to trigger AI processing only when needed. For edge AI cameras, consider sensors with low latency and efficient interface options. Our FAE team can advise on sensor selection for specific AI applications.",
        "decisionGuide": "Select sensors with high resolution, WDR, and low noise to maximize AI analytics accuracy.",
        "keywords": ["AI analytics", "smart camera", "video analytics"]
      }
    ],
    "products": [
      {
        "partNumber": "GC2083",
        "name": "2MP Starlight Security Sensor",
        "nameCn": "2MP Starlight Security Sensor",
        "shortDescription": "2MP security sensor with 120dB WDR and starlight sensitivity down to 0.001 lux for 24/7 surveillance.",
        "description": "GC2083 is a high-performance 2MP security image sensor featuring advanced WDR and starlight technology for reliable surveillance in any lighting condition.",
        "descriptionParagraphs": [
          "GC2083 delivers exceptional image quality for security applications with its 120dB WDR capability. The sensor captures detail in both bright sunlight and deep shadows simultaneously, critical for entrance monitoring and mixed lighting scenarios.",
          "Starlight technology enables color imaging down to 0.001 lux, providing superior night vision compared to traditional IR cameras. Large 3.0µm pixels with BSI technology maximize light capture for clean, noise-free night images.",
          "Advanced noise reduction maintains image quality at high gain settings required for night surveillance. The sensor supports both standard and AI-optimized output modes for smart security applications."
        ],
        "status": "active",
        "isPopular": true,
        "keywords": ["security sensor", "2MP", "WDR", "starlight", "night vision"],
        "specifications": {
          "Resolution": "2MP (1920 x 1080)",
          "Pixel Size": "3.0µm",
          "Optical Format": "1/2.8 inch",
          "Color Filter": "RGB Bayer",
          "Frame Rate": "1080p@60fps, 1080p@30fps WDR",
          "Interface": "MIPI CSI-2 / DVP",
          "Output Format": "RAW12",
          "Dynamic Range": "120dB (WDR mode)",
          "Sensitivity": "3500 mV/lux-sec",
          "Min Illumination": "0.001 lux (starlight)",
          "Power Consumption": "200mW (active)",
          "Operating Temperature": "-40°C to +85°C",
          "Package": "CSP"
        },
        "applications": ["IP Cameras", "Dome Cameras", "Bullet Cameras", "AI Security Cameras"],
        "features": ["120dB WDR", "Starlight 0.001 lux", "Advanced NR", "60fps"],
        "stock": {
          "status": "in_stock",
          "quantity": 50000,
          "minOrderQty": 1000,
          "leadTime": "Stock available, 2-4 weeks"
        },
        "pricing": {
          "currency": "USD",
          "unit": "per piece",
          "tiers": [
            {"minQty": 1000, "price": 4.50},
            {"minQty": 5000, "price": 4.00},
            {"minQty": 10000, "price": 3.60},
            {"minQty": 50000, "price": 3.20}
          ]
        },
        "alternativeParts": [
          {
            "partNumber": "GC4053",
            "brand": "Gcoreinc",
            "link": "/gcoreinc/products/security-image-sensors/gc4053.html",
            "reason": "Higher resolution 4MP version for applications requiring more detail",
            "useCase": "Large area surveillance requiring higher pixel density",
            "specifications": {
              "Resolution": "4MP",
              "Pixel Size": "2.0µm",
              "WDR": "120dB"
            },
            "comparison": {
              "Resolution": "4MP > 2MP (+100% more pixels)",
              "Pixel Size": "2.0µm < 3.0µm (smaller)",
              "Low-light": "Good performance but slightly less than 2MP",
              "Price": "Approximately 25% higher => Equivalent"
            }
          },
          {
            "partNumber": "GC2083-ALT",
            "brand": "Gcoreinc",
            "link": "/gcoreinc/products/security-image-sensors/gc2083-alt.html",
            "reason": "Alternative configuration for different application requirements",
            "useCase": "Compatible replacement with similar electrical characteristics",
            "specifications": {
              "Resolution": "2MP (1920 x 1080)",
              "Pixel Size": "3.0µm"
            },
            "comparison": {
              "performance": "Equivalent => Equivalent (similar)",
              "compatibility": "Pin-compatible => Pin-compatible (direct replacement)"
            }
          }
        ],
        "companionParts": [
          {"partNumber": "IR-Cut-Filter", "link": "#", "description": "Motorized IR cut filter for day/night switching", "category": "Optics"},
          {"partNumber": "Security-PMIC", "link": "#", "description": "Power management for security camera modules", "category": "Power Management"},
          {"partNumber": "Lens-28-Security", "link": "#", "description": "1/2.8 inch lens for security applications", "category": "Optics"}
        ],
        "faeReview": {
          "rating": 4.7,
          "author": "Jennifer Zhang",
          "title": "Senior FAE - Security Systems",
          "content": "GC2083 is our go-to sensor for professional security applications. The 120dB WDR handles challenging lighting better than most competitors - we've tested it in building entrances with bright backlighting and it captures facial details clearly. The starlight performance is impressive, providing usable color images in conditions where other cameras switch to black and white. The 60fps capability is valuable for motion analysis and capturing fast-moving objects. I've implemented this sensor in numerous IP camera projects and customers consistently praise the image quality. The noise reduction is effective without creating the artificial look some sensors produce. Highly recommended for professional surveillance applications.",
          "highlight": "Excellent WDR and starlight performance for professional security applications"
        },
        "faqs": [
          {
            "question": "How to optimize WDR settings for different lighting conditions?",
            "answer": "GC2083 WDR optimization depends on your specific lighting challenges. For strong backlight scenarios (entrances, windows), use maximum WDR mode with multi-frame capture. For mixed lighting with moderate contrast, standard WDR mode provides good balance. Consider the trade-off between WDR strength and motion artifacts - stronger WDR may show ghosting with fast movement. For low-light WDR, balance exposure times to minimize noise. Some scenes may benefit from custom tone mapping curves. Test with your actual lighting conditions and typical scene content. Our ISP tuning guides provide recommended settings for common scenarios.",
            "decisionGuide": "Test WDR settings with your actual lighting conditions and adjust based on scene content.",
            "keywords": ["WDR settings", "dynamic range optimization", "backlight compensation"]
          },
          {
            "question": "What lens recommendations for starlight performance?",
            "answer": "For optimal starlight performance, lens selection is critical. Use large aperture lenses (f/1.6 or faster) to maximize light gathering. Glass lenses maintain better performance in low light than plastic alternatives. Match the lens optical format to the sensor (1/2.8 inch for GC2083). Minimize lens distortion which can reduce effective light capture. IR-corrected lenses maintain focus during day/night transitions if using IR illumination. Consider lens transmission specifications - some coatings reduce light transmission. Work with lens vendors to select options optimized for low-light performance. Our reference designs include tested lens recommendations.",
            "decisionGuide": "Select fast aperture (f/1.6+) glass lenses matched to sensor optical format.",
            "keywords": ["starlight lens", "low-light lens", "security lens selection"]
          },
          {
            "question": "How to implement reliable day/night switching?",
            "answer": "Reliable day/night switching requires coordination between sensor, lens, and IR illumination. Use motorized IR cut filters with proven reliability (100K+ cycle rating). Implement hysteresis in the switching threshold to prevent rapid toggling near the threshold. Consider ambient light levels rather than just image brightness. Sync IR illumination activation with filter switching. Some sensors support automatic day/night detection algorithms. Test switching across temperature range as thresholds may shift. Implement status monitoring to detect filter mechanism failures. Our security reference designs include proven day/night switching implementations.",
            "decisionGuide": "Use reliable motorized IR cut filters with hysteresis and temperature compensation.",
            "keywords": ["day/night switching", "IR cut filter", "security camera"]
          },
          {
            "question": "What storage and bandwidth requirements for high-resolution security cameras?",
            "answer": "Storage and bandwidth scale with resolution, frame rate, and compression. 2MP at 30fps with H.265 typically requires 2-4 Mbps bandwidth and 1-2GB per day storage. WDR mode may increase bitrate due to increased detail. Consider smart codec features that reduce bandwidth for static scenes. Edge storage (SD card) provides backup during network outages. Cloud storage costs scale significantly with resolution - optimize for your retention requirements. For AI analytics, consider local processing to reduce bandwidth for metadata-only transmission. Calculate total cost of ownership including storage, bandwidth, and infrastructure.",
            "decisionGuide": "Calculate bandwidth and storage requirements based on resolution, frame rate, and retention period.",
            "keywords": ["storage requirements", "bandwidth", "security camera system"]
          },
          {
            "question": "How to integrate GC2083 with AI analytics platforms?",
            "answer": "GC2083 integrates well with AI analytics platforms through standard interfaces. The sensor's MIPI CSI-2 output connects to AI SoCs and edge processors. High resolution and WDR provide quality input for detection algorithms. 60fps output supports motion-based analytics. Consider ROI readout to focus processing on specific areas. Some AI platforms benefit from specific image tuning - our FAE team can advise. For cloud analytics, ensure sufficient bandwidth for video upload. Edge AI processing reduces bandwidth requirements and latency. Test detection accuracy with your specific AI platform and tuning.",
            "decisionGuide": "Connect via MIPI CSI-2 to AI processors and optimize image tuning for your analytics platform.",
            "keywords": ["AI integration", "video analytics", "smart security"]
          }
        ],
        "resources": {
          "datasheet": "/resources/datasheets/gcoreinc/GC2083.pdf",
          "applicationNote": "/resources/app-notes/gcoreinc/Security-Camera-Design-Guide.pdf"
        }
      }
    ]
  }
];

// Add new categories
products.categories.push(...newCategories);

console.log(`✓ Added ${newCategories.length} new categories`);
console.log(`✓ Total categories: ${products.categories.length}`);

// Write the updated products.json
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('\n✓ products.json has been updated successfully!');
