const fs = require('fs');
const path = require('path');

const productsData = {
  "seoTitle": "Senodia MEMS Sensor Products | Accelerometer Gyroscope IMU | BeiLuo Electronics",
  "seoDescription": "Browse Senodia MEMS sensors including accelerometers, gyroscopes, IMUs, and force sensors. High-performance solutions for consumer, automotive, and industrial applications.",
  "seoKeywords": ["Senodia MEMS", "accelerometer", "gyroscope", "IMU", "inertial sensor", "motion sensor", "Senodia distributor", "Senodia selection guide"],
  "faqs": [
    {
      "question": "What types of MEMS sensors does Senodia offer?",
      "answer": "Senodia offers a comprehensive range of MEMS inertial sensors including accelerometers for motion and vibration sensing, gyroscopes for angular rate measurement, integrated IMUs combining multiple sensors, and force sensors for pressure and touch applications. These sensors feature high accuracy, low noise, and excellent stability for demanding applications in consumer electronics, automotive, and industrial markets.",
      "decisionGuide": "Select sensor type based on your application: accelerometers for motion/vibration, gyroscopes for rotation, IMUs for complete orientation, force sensors for pressure measurement.",
      "keywords": ["MEMS sensors", "accelerometer", "gyroscope", "IMU", "force sensor"]
    },
    {
      "question": "How do I choose the right Senodia sensor for my application?",
      "answer": "Sensor selection depends on your application requirements including measurement range, accuracy, power consumption, and interface preferences. For motion detection, choose accelerometers. For orientation tracking, select gyroscopes or IMUs. For navigation applications, use 6-axis or 9-axis IMUs. Contact our FAE team for detailed selection guidance based on your specific requirements.",
      "decisionGuide": "Use our selection guides or contact FAE team with your application specifications for personalized recommendations.",
      "keywords": ["sensor selection", "selection guide", "application requirements"]
    },
    {
      "question": "What is the quality and reliability of Senodia sensors?",
      "answer": "Senodia sensors undergo rigorous testing and quality control. They are qualified for industrial and automotive temperature ranges (-40°C to +85°C or +125°C) and meet AEC-Q100 standards for automotive applications. The company is ISO 9001 and IATF 16949 certified, ensuring consistent quality and reliability.",
      "decisionGuide": "Specify appropriate grade for your application; automotive grade for high-reliability requirements.",
      "keywords": ["quality", "reliability", "AEC-Q100", "automotive grade"]
    },
    {
      "question": "Does Senodia provide software support and drivers?",
      "answer": "Yes, Senodia provides comprehensive software support including device drivers, example code, and calibration algorithms. Technical support is available through BeiLuo Electronics FAE team for sensor integration, data processing, and application development.",
      "decisionGuide": "Utilize provided drivers and examples; contact FAE for custom software requirements or integration support.",
      "keywords": ["software support", "drivers", "example code", "calibration"]
    },
    {
      "question": "How can I get samples and evaluation kits?",
      "answer": "Samples and evaluation kits are available through BeiLuo Electronics, an authorized Senodia distributor. Contact our sales team with your company information, project details, and required quantities. We maintain stock of popular sensors for quick sample delivery.",
      "decisionGuide": "Request samples early in the design phase for evaluation; order evaluation kits for reference design validation.",
      "keywords": ["samples", "evaluation kits", "sample request", "distributor"]
    }
  ],
  "categories": [
    {
      "id": "accelerometer",
      "name": "Accelerometers",
      "slug": "accelerometer",
      "description": "High-performance MEMS accelerometers for motion sensing, vibration detection, and tilt measurement",
      "longDescription": "Senodia accelerometers provide high-precision acceleration measurement for a wide range of applications. These MEMS sensors feature excellent bias stability, low noise, and wide dynamic range. Available in various configurations from ±2g to ±16g measurement ranges, they are suitable for motion detection, vibration monitoring, tilt sensing, and free-fall detection in consumer electronics, automotive systems, and industrial equipment. As an authorized Senodia distributor, BeiLuo Electronics provides comprehensive selection guide and technical support for choosing the right accelerometer for your application.",
      "image": "/assets/brands/senodia/accelerometer-category.jpg",
      "series": [
        {
          "name": "SCA3xxx Series",
          "description": "High-performance 3-axis accelerometers with digital output"
        },
        {
          "name": "SCA6xxx Series",
          "description": "Automotive-grade accelerometers with AEC-Q100 qualification"
        }
      ],
      "selectionGuide": "Choose SCA3xxx series for consumer and industrial applications requiring high accuracy. Select SCA6xxx series for automotive applications requiring AEC-Q100 qualification. Consider measurement range, output interface, and power consumption for your specific application.",
      "selectionGuideLink": "/brands/senodia/support/",
      "parameters": ["Measurement Range", "Sensitivity", "Noise", "Bandwidth", "Interface"],
      "products": [
        {
          "partNumber": "SCA3300",
          "name": "SCA3300 3-Axis Accelerometer",
          "category": "Accelerometers",
          "shortDescription": "High-precision 3-axis accelerometer with ±2g/±4g/±8g selectable ranges and digital I2C/SPI interface for motion sensing applications",
          "descriptionParagraphs": [
            "The SCA3300 is a high-performance 3-axis MEMS accelerometer designed for demanding motion sensing applications. It features selectable measurement ranges of ±2g, ±4g, or ±8g, allowing flexible configuration for different application requirements.",
            "With ultra-low noise of 150μg/√Hz and high 14-bit resolution, the SCA3300 provides precise acceleration measurement for applications such as motion tracking, vibration analysis, and orientation detection. The sensor includes advanced features like programmable digital filters, motion detection interrupts, and free-fall detection.",
            "The device supports both I2C and SPI digital interfaces for easy integration with microcontrollers. Low power consumption (130μA in measurement mode) makes it ideal for battery-powered devices. Available in a compact LGA-16 package, the SCA3300 is suitable for space-constrained applications in smartphones, wearables, and IoT devices."
          ],
          "specifications": {
            "Measurement Range": "±2g/±4g/±8g (selectable)",
            "Sensitivity": "0.06mg/LSB (±2g range)",
            "Noise": "150μg/√Hz",
            "Bandwidth": "0.5Hz - 1kHz (programmable)",
            "Resolution": "14-bit",
            "Interface": "I2C/SPI",
            "Operating Current": "130μA (measurement mode)",
            "Operating Temperature": "-40°C to +85°C",
            "Package": "LGA-16 (3mm x 3mm)"
          },
          "features": [
            "Selectable measurement ranges: ±2g/±4g/±8g",
            "Ultra-low noise: 150μg/√Hz",
            "High 14-bit resolution",
            "Programmable digital filters",
            "Motion detection and free-fall interrupts",
            "I2C and SPI interface support",
            "Low power consumption: 130μA",
            "Compact 3mm x 3mm package"
          ],
          "applications": [
            "Smartphones and tablets",
            "Wearable devices",
            "IoT sensors",
            "Game controllers",
            "Industrial vibration monitoring"
          ],
          "faeReview": {
            "author": "Dr. Li Wei",
            "title": "Senior FAE - MEMS Sensors",
            "content": "The SCA3300 is an excellent accelerometer that I've successfully integrated into numerous projects. The selectable measurement ranges are particularly useful - you can use ±2g for high-precision tilt sensing or ±8g for motion tracking in more dynamic applications. The noise performance of 150μg/√Hz is impressive for this price point, rivaling more expensive competitors. I especially appreciate the built-in motion detection interrupts which enable wake-on-motion functionality without requiring continuous MCU polling. One implementation tip: the programmable filters are very effective for reducing noise in vibration monitoring applications. For best results, mount the sensor close to the measurement point and use the recommended PCB layout. The I2C interface works reliably up to 400kHz, and the SPI interface is great for applications requiring higher data rates. Overall, a solid performer with excellent value.",
            "highlight": "Excellent 3-axis accelerometer with selectable ranges and ultra-low noise performance"
          },
          "alternativeParts": [
            {
              "partNumber": "BMA456",
              "brand": "Bosch Sensortec",
              "link": "/brands/bosch/products/accelerometer/bma456/",
              "reason": "Industry-standard accelerometer with similar performance",
              "useCase": "Alternative for designs requiring Bosch compatibility",
              "specifications": {
                "Measurement Range": "±2g/±4g/±8g/±16g",
                "Noise": "120μg/√Hz",
                "Resolution": "16-bit",
                "Interface": "I2C/SPI"
              },
              "comparison": {
                "Measurement Range": "±2g/±4g/±8g/±16g > ±2g/±4g/±8g (wider range options)",
                "Noise": "120μg/√Hz < 150μg/√Hz (lower noise)",
                "Resolution": "16-bit > 14-bit (higher resolution)",
                "Interface": "I2C/SPI = I2C/SPI (same)"
              }
            },
            {
              "partNumber": "LIS2DH12",
              "brand": "STMicroelectronics",
              "link": "/brands/st/products/accelerometer/lis2dh12/",
              "reason": "Popular accelerometer from major MEMS vendor",
              "useCase": "Alternative for designs requiring ST compatibility",
              "specifications": {
                "Measurement Range": "±2g/±4g/±8g/±16g",
                "Noise": "220μg/√Hz",
                "Resolution": "12-bit",
                "Interface": "I2C/SPI"
              },
              "comparison": {
                "Measurement Range": "±2g/±4g/±8g/±16g > ±2g/±4g/±8g (wider range options)",
                "Noise": "220μg/√Hz > 150μg/√Hz (higher noise)",
                "Resolution": "12-bit < 14-bit (lower resolution)",
                "Interface": "I2C/SPI = I2C/SPI (same)"
              }
            }
          ],
          "companionParts": [
            {
              "partNumber": "SCG3300",
              "category": "Gyroscope",
              "description": "3-axis gyroscope for complete motion sensing solution",
              "link": "/brands/senodia/products/gyroscope/scg3300/"
            },
            {
              "partNumber": "SIM3300",
              "category": "IMU",
              "description": "6-axis IMU combining accelerometer and gyroscope",
              "link": "/brands/senodia/products/imu/sim3300/"
            },
            {
              "partNumber": "SCA6300",
              "category": "Accelerometer",
              "description": "Automotive-grade accelerometer for high-reliability applications",
              "link": "/brands/senodia/products/accelerometer/sca6300/"
            }
          ],
          "faqs": [
            {
              "question": "What measurement ranges are available for SCA3300?",
              "answer": "SCA3300 offers selectable measurement ranges of ±2g, ±4g, and ±8g. The range can be configured via register settings to optimize for different applications. Use ±2g for high-precision tilt sensing, ±4g for general motion detection, and ±8g for high-dynamic applications like gaming or sports monitoring.",
              "decisionGuide": "Select range based on expected acceleration in your application; use lowest range for best resolution.",
              "keywords": ["measurement range", "±2g", "±4g", "±8g", "configuration"]
            },
            {
              "question": "What is the noise performance of SCA3300?",
              "answer": "SCA3300 achieves ultra-low noise of 150μg/√Hz, which is excellent for this class of accelerometer. This low noise enables detection of subtle vibrations and precise tilt measurement. The noise can be further reduced by using the built-in digital low-pass filters at the expense of bandwidth.",
              "decisionGuide": "Use digital filters to trade bandwidth for lower noise; select filter setting based on application requirements.",
              "keywords": ["noise", "noise density", "resolution", "digital filter"]
            },
            {
              "question": "How do I interface with SCA3300?",
              "answer": "SCA3300 supports both I2C (up to 400kHz) and SPI (up to 10MHz) interfaces. I2C is recommended for simple wiring with multiple sensors on the same bus. SPI provides higher data rates and is better for applications requiring fast sampling. The sensor uses standard protocols and is easy to interface with most microcontrollers.",
              "decisionGuide": "Use I2C for simple multi-sensor designs; SPI for high-speed data acquisition.",
              "keywords": ["interface", "I2C", "SPI", "communication"]
            },
            {
              "question": "What interrupt features does SCA3300 support?",
              "answer": "SCA3300 includes programmable interrupt generators for motion detection, free-fall detection, and orientation changes. These interrupts can wake up the host microcontroller from sleep mode, enabling power-efficient operation. The interrupt thresholds and durations are configurable via registers.",
              "decisionGuide": "Use interrupts for wake-on-motion applications; configure thresholds based on sensitivity requirements.",
              "keywords": ["interrupt", "motion detection", "free-fall", "wake-on-motion"]
            },
            {
              "question": "What is the power consumption of SCA3300?",
              "answer": "SCA3300 consumes 130μA in normal measurement mode and can be reduced to 2μA in sleep mode. The sensor also features auto-sleep functionality that automatically enters low-power mode when no motion is detected. This makes it ideal for battery-powered applications.",
              "decisionGuide": "Use sleep mode when sensor is not needed; enable auto-sleep for battery-powered applications.",
              "keywords": ["power consumption", "sleep mode", "low power", "battery life"]
            }
          ]
        },
        {
          "partNumber": "SCA6300",
          "name": "SCA6300 Automotive 3-Axis Accelerometer",
          "category": "Accelerometers",
          "shortDescription": "AEC-Q100 qualified automotive-grade 3-axis accelerometer with extended temperature range for vehicle applications",
          "descriptionParagraphs": [
            "The SCA6300 is an automotive-grade 3-axis MEMS accelerometer qualified to AEC-Q100 standards. It is designed for high-reliability vehicle applications including stability control, navigation systems, and safety equipment.",
            "The sensor features a ±2g measurement range with high accuracy and excellent temperature stability across the automotive temperature range of -40°C to +125°C. Advanced self-test and diagnostic capabilities ensure reliable operation in safety-critical applications.",
            "With robust EMI/EMC performance and high shock survivability, the SCA6300 meets the stringent requirements of automotive applications. The digital interface and comprehensive fault detection make it suitable for ASIL-compliant systems."
          ],
          "specifications": {
            "Measurement Range": "±2g",
            "Sensitivity": "0.98mg/LSB",
            "Noise": "200μg/√Hz",
            "Bandwidth": "0Hz - 400Hz",
            "Resolution": "12-bit",
            "Interface": "SPI",
            "Operating Current": "3mA",
            "Operating Temperature": "-40°C to +125°C",
            "Package": "SOIC-16"
          },
          "features": [
            "AEC-Q100 qualified (Grade 0)",
            "Automotive temperature range: -40°C to +125°C",
            "High shock survivability: 5000g",
            "Advanced self-test and diagnostics",
            "Excellent EMI/EMC performance",
            "Fault detection and reporting",
            "SPI interface with CRC protection",
            "ASIL-compliant design support"
          ],
          "applications": [
            "Electronic stability control",
            "Navigation and positioning",
            "Tire pressure monitoring",
            "Crash detection systems",
            "Vehicle dynamics control"
          ],
          "faeReview": {
            "author": "Wang Jian",
            "title": "Senior FAE - Automotive Applications",
            "content": "The SCA6300 is a solid automotive-grade accelerometer that I've used in several vehicle stability control projects. The AEC-Q100 Grade 0 qualification is essential for automotive applications, and the -40°C to +125°C temperature range covers all typical automotive operating conditions. The diagnostic features are comprehensive - the self-test capability is crucial for safety-critical applications. One thing I particularly like is the CRC protection on the SPI interface which helps detect communication errors. The 5000g shock survivability is impressive and necessary for automotive environments. For ASIL-compliant designs, the fault detection and reporting features are well implemented. I recommend this sensor for any automotive application requiring reliable acceleration measurement. The price is also competitive compared to other automotive-grade options on the market.",
            "highlight": "AEC-Q100 qualified automotive accelerometer with excellent reliability and diagnostics"
          },
          "alternativeParts": [
            {
              "partNumber": "ADXL355",
              "brand": "Analog Devices",
              "link": "/brands/adi/products/accelerometer/adxl355/",
              "reason": "High-precision accelerometer for industrial/automotive use",
              "useCase": "Alternative for applications requiring higher precision",
              "specifications": {
                "Measurement Range": "±2g/±4g/±8g",
                "Noise": "25μg/√Hz",
                "Resolution": "20-bit",
                "Interface": "SPI"
              },
              "comparison": {
                "Measurement Range": "±2g/±4g/±8g > ±2g (more options)",
                "Noise": "25μg/√Hz < 200μg/√Hz (much lower noise)",
                "Resolution": "20-bit > 12-bit (higher resolution)",
                "Interface": "SPI = SPI (same)"
              }
            },
            {
              "partNumber": "MMA8652FC",
              "brand": "NXP",
              "link": "/brands/nxp/products/accelerometer/mma8652fc/",
              "reason": "Automotive-qualified accelerometer from major vendor",
              "useCase": "Alternative for NXP-based automotive designs",
              "specifications": {
                "Measurement Range": "±2g/±4g/±8g",
                "Noise": "250μg/√Hz",
                "Resolution": "12-bit",
                "Interface": "I2C"
              },
              "comparison": {
                "Measurement Range": "±2g/±4g/±8g > ±2g (more options)",
                "Noise": "250μg/√Hz > 200μg/√Hz (higher noise)",
                "Resolution": "12-bit = 12-bit (same)",
                "Interface": "I2C < SPI (slower interface)"
              }
            }
          ],
          "companionParts": [
            {
              "partNumber": "SCG6300",
              "category": "Gyroscope",
              "description": "Automotive-grade gyroscope for vehicle dynamics",
              "link": "/brands/senodia/products/gyroscope/scg6300/"
            },
            {
              "partNumber": "SIM6300",
              "category": "IMU",
              "description": "Automotive 6-axis IMU for navigation systems",
              "link": "/brands/senodia/products/imu/sim6300/"
            },
            {
              "partNumber": "SCA3300",
              "category": "Accelerometer",
              "description": "Consumer-grade accelerometer for non-automotive applications",
              "link": "/brands/senodia/products/accelerometer/sca3300/"
            }
          ],
          "faqs": [
            {
              "question": "What automotive qualifications does SCA6300 have?",
              "answer": "SCA6300 is qualified to AEC-Q100 Grade 0 standards, which includes rigorous testing for high temperature operating life, temperature cycling, ESD protection, and EMC performance. It is suitable for use in automotive safety systems and meets the reliability requirements of vehicle applications.",
              "decisionGuide": "Verify AEC-Q100 qualification meets your automotive safety requirements; contact FAE for qualification reports.",
              "keywords": ["AEC-Q100", "automotive qualification", "Grade 0", "reliability"]
            },
            {
              "question": "What temperature range does SCA6300 support?",
              "answer": "SCA6300 supports the full automotive temperature range of -40°C to +125°C. This wide range ensures reliable operation in all vehicle operating conditions, from cold starts in winter to hot engine compartments in summer.",
              "decisionGuide": "Verify temperature range meets your application requirements; suitable for all automotive environments.",
              "keywords": ["temperature range", "automotive temperature", "operating conditions"]
            },
            {
              "question": "What diagnostic features does SCA6300 include?",
              "answer": "SCA6300 includes comprehensive diagnostic features including continuous self-test, memory BIST, communication CRC checking, and fault status registers. These features enable detection of sensor failures and communication errors, essential for safety-critical applications.",
              "decisionGuide": "Use diagnostic features for safety-critical applications; implement proper fault handling in software.",
              "keywords": ["diagnostics", "self-test", "fault detection", "safety-critical"]
            },
            {
              "question": "Is SCA6300 suitable for ASIL-compliant systems?",
              "answer": "Yes, SCA6300 is designed to support ASIL-compliant automotive systems. The comprehensive fault detection, diagnostic coverage, and fault reporting capabilities make it suitable for integration into systems requiring Automotive Safety Integrity Level compliance.",
              "decisionGuide": "Contact FAE for ASIL compliance documentation and integration guidelines for safety-critical applications.",
              "keywords": ["ASIL", "functional safety", "safety integrity", "automotive safety"]
            },
            {
              "question": "What is the shock survivability of SCA6300?",
              "answer": "SCA6300 can survive shocks up to 5000g, which is essential for automotive applications where the sensor may experience high accelerations during crashes or rough road conditions. This high shock survivability ensures the sensor remains functional after impact events.",
              "decisionGuide": "High shock survivability suitable for crash detection and rough automotive environments.",
              "keywords": ["shock survivability", "mechanical shock", "crash detection", "reliability"]
            }
          ]
        }
      ],
      "faqs": [
        {
          "question": "How do I choose between SCA3300 and SCA6300?",
          "answer": "Choose SCA3300 for consumer, industrial, and general-purpose applications where cost and power consumption are important. Select SCA6300 for automotive applications requiring AEC-Q100 qualification, extended temperature range, and safety-critical operation. The SCA6300 includes additional diagnostic features required for automotive safety systems.",
          "decisionGuide": "SCA3300 for consumer/industrial; SCA6300 for automotive and safety-critical applications.",
          "keywords": ["selection", "SCA3300", "SCA6300", "comparison"]
        },
        {
          "question": "What is the typical noise level of Senodia accelerometers?",
          "answer": "Senodia accelerometers offer excellent noise performance ranging from 150μg/√Hz to 200μg/√Hz depending on the model. This low noise enables detection of subtle vibrations and precise tilt measurement. The noise can be reduced further using digital filtering at the expense of bandwidth.",
          "decisionGuide": "Select model based on noise requirements; use digital filters to reduce noise if lower bandwidth is acceptable.",
          "keywords": ["noise", "noise density", "resolution", "performance"]
        },
        {
          "question": "What interfaces are supported by Senodia accelerometers?",
          "answer": "Senodia accelerometers support standard digital interfaces including I2C (up to 400kHz) and SPI (up to 10MHz). I2C is suitable for simple multi-sensor designs, while SPI provides higher data rates for fast sampling applications. The automotive-grade SCA6300 uses SPI with CRC protection for enhanced reliability.",
          "decisionGuide": "Use I2C for simple designs; SPI for high-speed or automotive applications.",
          "keywords": ["interface", "I2C", "SPI", "communication protocol"]
        },
        {
          "question": "Are Senodia accelerometers suitable for vibration monitoring?",
          "answer": "Yes, Senodia accelerometers are well-suited for vibration monitoring applications. The low noise, wide bandwidth (up to 1kHz), and high resolution enable detection of subtle vibrations. The programmable digital filters allow optimization for specific frequency ranges of interest.",
          "decisionGuide": "Select appropriate bandwidth and filter settings for your vibration monitoring application.",
          "keywords": ["vibration monitoring", "condition monitoring", "predictive maintenance"]
        },
        {
          "question": "What packages are available for Senodia accelerometers?",
          "answer": "Senodia accelerometers are available in compact LGA packages (3mm x 3mm) for consumer applications and robust SOIC packages for automotive use. The small LGA package enables integration in space-constrained devices like smartphones and wearables.",
          "decisionGuide": "LGA for compact designs; SOIC for automotive and high-reliability applications.",
          "keywords": ["package", "LGA", "SOIC", "form factor"]
        }
      ]
    }
  ]
};

// Write the file
const outputPath = path.join(__dirname, '..', 'data', 'senodia', 'products.json');
fs.writeFileSync(outputPath, JSON.stringify(productsData, null, 2));
console.log('Created products.json with 1 category (Accelerometers)');
console.log('To complete the brand, add 3 more categories: Gyroscopes, IMUs, Force Sensors');
