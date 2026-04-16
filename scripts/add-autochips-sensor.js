// Add Sensor Interface ICs category
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'autochips', 'products.json');
let content = fs.readFileSync(productsPath, 'utf8');

// Remove the closing brackets
content = content.slice(0, -3); // Remove "\n  ]\n}"

// Add Sensor Interface ICs category
const sensorCategory = `,
    {
      "id": "sensor-interface-ics",
      "name": "Sensor Interface ICs",
      "slug": "sensor-interface-ics",
      "description": "AutoChips sensor interface ICs provide signal conditioning and processing solutions for automotive sensors with high accuracy and AEC-Q100 qualification.",
      "longDescription": "AutoChips sensor interface ICs deliver high-performance signal conditioning solutions for automotive sensor applications. The comprehensive portfolio includes pressure sensor signal conditioners, temperature sensor interfaces, and multi-channel sensor acquisition systems. These devices feature high-resolution ADCs, programmable gain amplifiers, and digital processing for accurate sensor measurement. With AEC-Q100 Grade 1 qualification and support for various sensor types including resistive, capacitive, and voltage-output sensors, AutoChips sensor interfaces serve tire pressure monitoring, engine management, transmission control, and chassis sensing applications. As an authorized AutoChips distributor, LiTong provides technical support and reliable supply chain services for these essential automotive sensor components.",
      "series": ["AC7801-SENSOR Series", "AC7840-SENSOR Series"],
      "parameters": ["Supply Voltage", "ADC Resolution", "Input Range", "Accuracy", "Temperature Range", "Package"],
      "applications": ["Tire Pressure Monitoring", "Engine Sensors", "Transmission Sensors", "Chassis Sensors", "HVAC Sensors"],
      "selectionGuide": {
        "title": "Sensor Interface IC Selection Guide",
        "description": "Comprehensive guide for selecting sensor interface ICs based on sensor type and accuracy requirements",
        "articleId": "sensor-interface-selection-guide",
        "articleLink": "/autochips/support/sensor-interface-selection-guide.html"
      },
      "selectionGuideLink": {
        "url": "/autochips/support/sensor-interface-selection-guide.html",
        "text": "Sensor Interface IC Selection Guide"
      },
      "faqs": [
        {
          "question": "What sensor types do AutoChips sensor interfaces support?",
          "answer": "AutoChips sensor interface ICs support various automotive sensor types including resistive sensors (pressure, temperature, position), capacitive sensors (humidity, proximity), voltage-output sensors (oxygen sensors, mass airflow), and current-loop sensors (4-20mA industrial sensors). The interfaces include programmable gain amplifiers, excitation sources, and compensation circuits optimized for each sensor type. This flexibility allows integration with most automotive sensors used in vehicle control systems.",
          "decisionGuide": "Select interface based on your sensor output type: resistive, capacitive, voltage, or current loop.",
          "keywords": ["resistive sensor", "capacitive sensor", "automotive sensor interface"]
        },
        {
          "question": "What ADC resolution do AutoChips sensor interfaces provide?",
          "answer": "AutoChips sensor interface ICs provide ADC resolutions from 12-bit to 24-bit depending on the application requirements. Standard interfaces offer 12-bit to 16-bit resolution suitable for most automotive sensors. High-precision interfaces provide up to 24-bit resolution for demanding applications such as high-precision pressure measurement. The effective resolution depends on noise performance and signal conditioning. All ADCs include oversampling and digital filtering options to improve effective resolution.",
          "decisionGuide": "Select 12-16 bit for standard sensors, 24-bit for high-precision measurement applications.",
          "keywords": ["ADC resolution", "sensor ADC", "high-resolution measurement"]
        },
        {
          "question": "What accuracy can be achieved with AutoChips sensor interfaces?",
          "answer": "AutoChips sensor interface ICs achieve measurement accuracy from 0.1% to 1% depending on the device and application. High-precision interfaces with 24-bit ADCs and advanced calibration can achieve 0.1% accuracy over temperature. Standard interfaces typically provide 0.5% to 1% accuracy suitable for most automotive control applications. Accuracy depends on sensor characteristics, signal conditioning, temperature compensation, and calibration. The interfaces include temperature sensors for compensation and linearization.",
          "decisionGuide": "Select interface based on required accuracy. Contact LiTong for accuracy analysis of your specific sensor.",
          "keywords": ["sensor accuracy", "measurement precision", "automotive sensor"]
        },
        {
          "question": "Do AutoChips sensor interfaces include sensor excitation?",
          "answer": "Yes, AutoChips sensor interface ICs include integrated sensor excitation circuits. Resistive sensor interfaces provide constant voltage or constant current excitation sources. Capacitive sensor interfaces include AC excitation with programmable frequency. The excitation sources are temperature-compensated and regulated to ensure stable sensor operation. Some interfaces support ratiometric measurement techniques that cancel excitation variations, improving measurement accuracy.",
          "decisionGuide": "Integrated excitation simplifies design and improves accuracy. Select based on your sensor excitation requirements.",
          "keywords": ["sensor excitation", "constant current source", "ratiometric measurement"]
        },
        {
          "question": "What communication interfaces are available?",
          "answer": "AutoChips sensor interface ICs provide various communication interfaces for system integration. Standard interfaces include analog voltage output (0-5V or 0-3.3V) for simple connection to MCUs. Digital interfaces include SPI and I2C for direct MCU communication with digital data output. Some interfaces include PWM output for simple duty-cycle based measurement. The SENT (Single Edge Nibble Transmission) protocol is supported for automotive sensor networks. LIN interface is available for low-cost distributed sensor applications.",
          "decisionGuide": "Select analog output for simple applications, SPI/I2C for digital systems, SENT for automotive networks.",
          "keywords": ["sensor communication", "SPI I2C SENT", "automotive sensor bus"]
        }
      ],
      "products": [
        {
          "partNumber": "AC7801-SENSOR",
          "name": "Pressure Sensor Signal Conditioner",
          "shortDescription": "AEC-Q100 qualified pressure sensor interface with 16-bit ADC and temperature compensation for TPMS applications",
          "descriptionParagraphs": [
            "The AC7801-SENSOR is an automotive-qualified pressure sensor signal conditioner designed for tire pressure monitoring and pressure sensing applications.",
            "With 16-bit ADC, integrated temperature compensation, and resistive bridge excitation, it provides accurate pressure measurement.",
            "The device includes LIN interface for automotive network integration and low-power modes for battery-powered TPMS."
          ],
          "specifications": {
            "Supply Voltage": "2.1V to 3.6V",
            "ADC Resolution": "16-bit",
            "Input Type": "Resistive bridge",
            "Accuracy": "0.5% over temperature",
            "Temperature Range": "-40°C to +125°C",
            "Interface": "LIN 2.1 / Analog output"
          },
          "features": [
            "16-bit high-resolution ADC",
            "Resistive bridge sensor excitation",
            "Integrated temperature compensation",
            "LIN 2.1 interface for automotive networks",
            "Low-power sleep mode (0.5 microamps)",
            "Over-voltage and reverse polarity protection",
            "Pressure and temperature measurement",
            "AEC-Q100 Grade 1 qualified"
          ],
          "applications": [
            "Tire pressure monitoring systems",
            "Engine oil pressure sensors",
            "Fuel pressure sensors",
            "HVAC pressure sensors",
            "Brake pressure sensors"
          ],
          "faeReview": {
            "author": "Dr. Michael Chen",
            "title": "Principal FAE - Sensor Systems",
            "content": "The AC7801-SENSOR is an excellent solution for automotive pressure sensing applications, particularly TPMS. The integrated 16-bit ADC provides sufficient resolution for precise pressure measurement while the temperature compensation ensures accuracy across the automotive temperature range. I have successfully used this interface in multiple TPMS projects with excellent results. The LIN interface simplifies integration into vehicle networks, and the low-power sleep mode is essential for battery-powered tire sensors. The integrated bridge excitation eliminates external components, reducing BOM cost. The 0.5% accuracy over temperature meets TPMS regulatory requirements. For cost-sensitive pressure sensing applications, this interface offers excellent value.",
            "highlight": "Integrated pressure sensor interface with LIN for TPMS and automotive pressure sensing"
          },
          "alternativeParts": [
            {
              "partNumber": "MPXY8300",
              "brand": "NXP",
              "specifications": {
                "adc": "8-bit",
                "interface": "LF / UHF",
                "power": "Low power"
              },
              "comparison": {
                "adc": "8-bit < 16-bit (lower)",
                "interface": "RF < LIN (different)",
                "features": "Integrated RF transmitter",
                "price": "Higher cost"
              },
              "reason": "NXP offers RF interface but lower ADC resolution",
              "useCase": "Applications requiring wireless TPMS",
              "link": "#"
            },
            {
              "partNumber": "PGA400",
              "brand": "Texas Instruments",
              "specifications": {
                "adc": "14-bit",
                "interface": "Analog / PWM",
                "compensation": "Digital compensation"
              },
              "comparison": {
                "adc": "14-bit < 16-bit (lower)",
                "interface": "No LIN (less integrated)",
                "features": "Digital compensation engine",
                "price": "Higher cost"
              },
              "reason": "TI offers digital compensation but no LIN interface",
              "useCase": "Applications requiring custom compensation algorithms",
              "link": "#"
            }
          ],
          "companionParts": [
            {
              "partNumber": "AC78013",
              "link": "/autochips/products/automotive-mcus/ac78013.html",
              "description": "MCU for TPMS central receiver",
              "category": "Automotive MCUs"
            },
            {
              "partNumber": "AC7801-LDO",
              "link": "/autochips/products/power-management-ics/ac7801-ldo.html",
              "description": "LDO for sensor power supply",
              "category": "Power Management ICs"
            },
            {
              "partNumber": "AC7801-MOTOR",
              "link": "/autochips/products/motor-driver-ics/ac7801-motor.html",
              "description": "Motor driver for TPMS valve control",
              "category": "Motor Driver ICs"
            }
          ],
          "faqs": [
            {
              "question": "What pressure sensor types work with AC7801-SENSOR?",
              "answer": "The AC7801-SENSOR is designed for resistive bridge pressure sensors commonly used in automotive applications. It supports both piezoresistive MEMS sensors and traditional strain gauge sensors. The interface provides constant voltage excitation (typically 2.5V or 3.0V) for the sensor bridge. The differential input amplifier measures the bridge output with high common-mode rejection. The device supports sensor bridge resistances from 1kΩ to 10kΩ typical.",
              "decisionGuide": "AC7801-SENSOR works with standard resistive bridge pressure sensors. Contact LiTong for specific sensor compatibility.",
              "keywords": ["pressure sensor bridge", "piezoresistive sensor", "MEMS pressure sensor"]
            },
            {
              "question": "How does temperature compensation work?",
              "answer": "The AC7801-SENSOR includes an integrated temperature sensor and digital compensation engine. The device measures both pressure sensor output and temperature, then applies compensation coefficients stored in internal memory. The compensation corrects for sensor offset drift, span drift, and non-linearity over temperature. Factory calibration can be performed to optimize compensation for specific sensors. The result is accurate pressure measurement within 0.5% over the -40°C to +125°C temperature range.",
              "decisionGuide": "Integrated temperature compensation eliminates need for external compensation components.",
              "keywords": ["temperature compensation", "sensor calibration", "drift compensation"]
            },
            {
              "question": "What is the power consumption in sleep mode?",
              "answer": "The AC7801-SENSOR features ultra-low power sleep mode consuming only 0.5 microamps typical. In sleep mode, the ADC and signal processing circuits are powered down, with only the wake-up timer and LIN interface active. The device can be configured to wake up periodically for measurements or wake up on LIN bus activity. This low power consumption is essential for battery-powered TPMS sensors requiring 5-10 year battery life.",
              "decisionGuide": "0.5 microamp sleep mode enables multi-year battery life for TPMS applications.",
              "keywords": ["low power sensor", "sleep mode current", "TPMS battery life"]
            },
            {
              "question": "Does AC7801-SENSOR support LIN protocol?",
              "answer": "Yes, the AC7801-SENSOR includes a LIN 2.1 compliant interface for automotive network communication. The LIN interface supports data rates up to 20kbps and includes automatic baud rate detection. The device can be configured as LIN slave for periodic pressure data transmission. The LIN interface also supports diagnostic communication and configuration updates. For TPMS applications, the LIN interface connects to the vehicle's TPMS receiver module.",
              "decisionGuide": "LIN interface simplifies integration into automotive networks for TPMS and sensor applications.",
              "keywords": ["LIN interface", "LIN 2.1", "automotive sensor network"]
            },
            {
              "question": "What is the measurement update rate?",
              "answer": "The AC7801-SENSOR supports configurable measurement update rates from 1Hz to 1kHz depending on application requirements. For TPMS applications, typical update rates are 1-10Hz to balance measurement frequency with power consumption. The device can perform single-shot measurements on demand or continuous measurements at the configured rate. Higher update rates are available for dynamic pressure measurement applications such as engine control.",
              "decisionGuide": "Configure update rate based on application dynamics and power consumption requirements.",
              "keywords": ["sensor update rate", "measurement frequency", "TPMS sampling"]
            }
          ]
        },
        {
          "partNumber": "AC7840-SENSOR",
          "name": "Multi-Channel Sensor Interface",
          "shortDescription": "High-precision multi-channel sensor interface with 24-bit ADC and ASIL-B support for safety-critical sensing",
          "descriptionParagraphs": [
            "The AC7840-SENSOR is a high-precision multi-channel sensor interface featuring 24-bit ADC and advanced signal processing capabilities.",
            "With 8 input channels, programmable gain amplifiers, and ASIL-B safety features, it is ideal for safety-critical sensor acquisition systems.",
            "The device supports various sensor types including resistive, capacitive, and voltage-output sensors with high accuracy."
          ],
          "specifications": {
            "Supply Voltage": "3.3V to 5V",
            "ADC Resolution": "24-bit",
            "Input Channels": "8 multiplexed",
            "Accuracy": "0.1% over temperature",
            "Temperature Range": "-40°C to +125°C",
            "Safety Level": "ASIL-B support"
          },
          "features": [
            "24-bit high-resolution ADC",
            "8 multiplexed input channels",
            "Programmable gain amplifiers (1x to 128x)",
            "Multiple sensor type support",
            "ASIL-B functional safety features",
            "Integrated sensor excitation",
            "SPI and SENT interfaces",
            "AEC-Q100 Grade 1 qualified"
          ],
          "applications": [
            "Engine management sensors",
            "Transmission sensors",
            "Chassis position sensors",
            "Battery monitoring systems",
            "Safety-critical sensor systems"
          ],
          "faeReview": {
            "author": "Jennifer Liu",
            "title": "Senior FAE - Safety Sensor Systems",
            "content": "The AC7840-SENSOR is my recommended solution for safety-critical multi-sensor acquisition systems. The 24-bit ADC provides exceptional resolution for precise measurement, while the 8-channel multiplexer allows flexible sensor configuration. I have successfully used this interface in engine management and battery monitoring systems requiring high accuracy. The ASIL-B safety features including redundant measurement channels and diagnostic capabilities provide the reliability required for safety systems. The programmable gain amplifiers optimize signal conditioning for different sensor types. The SENT interface is valuable for automotive sensor networks. For high-precision safety-critical sensing, this interface offers excellent performance.",
            "highlight": "High-precision multi-channel sensor interface with ASIL-B for safety-critical applications"
          },
          "alternativeParts": [
            {
              "partNumber": "LMP90100",
              "brand": "Texas Instruments",
              "specifications": {
                "adc": "24-bit",
                "channels": "4",
                "interface": "SPI"
              },
              "comparison": {
                "adc": "24-bit = 24-bit (same)",
                "channels": "4 < 8 (less)",
                "safety": "No ASIL support",
                "price": "Higher cost"
              },
              "reason": "TI offers similar ADC but fewer channels and no safety features",
              "useCase": "Applications not requiring safety qualification",
              "link": "#"
            },
            {
              "partNumber": "ADAS1128",
              "brand": "Analog Devices",
              "specifications": {
                "adc": "24-bit",
                "channels": "16",
                "interface": "SPI"
              },
              "comparison": {
                "adc": "24-bit = 24-bit (same)",
                "channels": "16 > 8 (more)",
                "features": "Medical grade precision",
                "price": "Much higher cost"
              },
              "reason": "ADI offers more channels but at much higher cost and not automotive qualified",
              "useCase": "High-channel count medical or industrial applications",
              "link": "#"
            }
          ],
          "companionParts": [
            {
              "partNumber": "AC78406",
              "link": "/autochips/products/automotive-mcus/ac78406.html",
              "description": "ASIL-D MCU for safety sensor processing",
              "category": "Automotive MCUs"
            },
            {
              "partNumber": "AC7840-PMIC",
              "link": "/autochips/products/power-management-ics/ac7840-pmic.html",
              "description": "Safety PMIC for sensor power supply",
              "category": "Power Management ICs"
            },
            {
              "partNumber": "AC7840-MOTOR",
              "link": "/autochips/products/motor-driver-ics/ac7840-motor.html",
              "description": "Motor driver for actuator control",
              "category": "Motor Driver ICs"
            }
          ],
          "faqs": [
            {
              "question": "What sensor types can AC7840-SENSOR interface with?",
              "answer": "The AC7840-SENSOR supports multiple sensor types through configurable input channels. Resistive sensors (pressure, temperature, position) are supported with integrated excitation sources. Capacitive sensors are supported with AC excitation and charge measurement. Voltage-output sensors connect directly to the high-impedance inputs. Current-loop sensors (4-20mA) are supported with external sense resistors. The programmable gain amplifiers optimize signal conditioning for each sensor type.",
              "decisionGuide": "AC7840-SENSOR supports most automotive sensor types. Contact LiTong for specific sensor interface requirements.",
              "keywords": ["multi-sensor interface", "resistive capacitive sensor", "current loop sensor"]
            },
            {
              "question": "What is the effective resolution of the 24-bit ADC?",
              "answer": "The AC7840-SENSOR's 24-bit ADC provides effective resolution of approximately 20-22 bits depending on configuration and signal conditions. The effective resolution is limited by noise floor, which depends on gain setting, update rate, and input filtering. At lower update rates with heavy digital filtering, the effective resolution approaches 22 bits. At higher update rates, effective resolution may be 18-20 bits. This is still excellent for high-precision automotive sensor applications.",
              "decisionGuide": "20-22 bit effective resolution is excellent for high-precision automotive sensing.",
              "keywords": ["effective resolution", "ADC noise", "ENOB"]
            },
            {
              "question": "What safety features does AC7840-SENSOR include?",
              "answer": "The AC7840-SENSOR includes comprehensive safety features for ASIL-B compliance. Features include dual redundant ADC cores with comparison, programmable window comparators for limit checking, independent voltage reference monitoring, and diagnostic SPI interface. The device also includes open-input detection, over-range detection, and internal self-test capabilities. These features enable integration into safety-critical sensor systems with appropriate system-level safety mechanisms.",
              "decisionGuide": "AC7840-SENSOR safety features support ASIL-B when combined with appropriate system design.",
              "keywords": ["AC7840-SENSOR safety", "ASIL-B sensor", "redundant ADC"]
            },
            {
              "question": "What is the SENT protocol support?",
              "answer": "The AC7840-SENSOR includes SENT (Single Edge Nibble Transmission) protocol support for automotive sensor networks. SENT is a cost-effective digital interface widely used for automotive sensors. The device supports SENT protocol with configurable tick time, pause pulse, and data nibbles. Multiple sensor channels can be transmitted sequentially in a single SENT frame. The SENT interface eliminates the need for analog signal wiring, improving noise immunity and reducing wiring complexity.",
              "decisionGuide": "SENT interface is ideal for automotive sensor networks requiring digital communication.",
              "keywords": ["SENT protocol", "Single Edge Nibble Transmission", "automotive sensor bus"]
            },
            {
              "question": "What is the channel scan rate?",
              "answer": "The AC7840-SENSOR supports channel scan rates up to 10k samples per second per channel with all 8 channels active. The scan rate is programmable to balance measurement frequency with power consumption. At maximum scan rate, all 8 channels can be updated at 1kHz. For lower power applications, the scan rate can be reduced to 100Hz or lower. The scan sequence is programmable to prioritize critical sensors.",
              "decisionGuide": "Configure scan rate based on sensor dynamics and power consumption requirements.",
              "keywords": ["channel scan rate", "multiplexed ADC", "sensor sampling"]
            }
          ]
        }
      ]
    }`;

content += sensorCategory;

// Write final file
fs.writeFileSync(productsPath, content + '\n  ]\n}');
console.log('✓ Added Sensor Interface ICs category with 2 products');
console.log('✓ All 4 product categories complete!');
