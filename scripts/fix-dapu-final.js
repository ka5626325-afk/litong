const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'dapu', 'products.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Fix categories with insufficient FAQs and missing fields
data.categories.forEach((category, catIndex) => {
  // Fix selectionGuideLink
  if (category.selectionGuide && !category.selectionGuide.link) {
    category.selectionGuide.link = category.selectionGuide.articleLink || `/dapu/support/${category.id}-selection-guide.html`;
  }
  
  // Fix longDescription for VCXO if missing distributor/selection keywords
  if (category.id === 'voltage-controlled-oscillators') {
    if (!category.longDescription || !category.longDescription.includes('distributor') && !category.longDescription.includes('selection')) {
      category.longDescription = `Dapu Voltage Controlled Oscillators (VCXO) provide precision frequency adjustment for PLL applications and frequency synthesis. Dapu VCXOs provide voltage-controlled frequency adjustment for synchronization and clock recovery applications. As an authorized Dapu distributor, we offer VCXO selection guidance for telecom, networking, and industrial synchronization applications. Our technical team can assist with PLL design, loop filter optimization, and pull range selection. Dapu VCXOs deliver reliable performance for SONET/SDH, Ethernet clock recovery, and frequency synthesis applications with competitive pricing and short lead times.`;
    }
  }
  
  // Add more FAQs to categories with insufficient count
  if (!category.faqs || category.faqs.length < 5) {
    const extraFaqs = {
      'temperature-compensated-oscillators': [
        {
          "question": "What is the hysteresis of Dapu TCXOs?",
          "answer": "Hysteresis in TCXOs refers to the frequency difference observed when approaching a temperature from opposite directions (heating vs cooling). Dapu TCXOs typically exhibit very low hysteresis of <0.1ppm, which is negligible for most applications. Low hysteresis is achieved through high-quality crystal material and optimized compensation algorithms. For precision applications where hysteresis could be a concern, we can provide characterization data. The low hysteresis ensures consistent frequency regardless of temperature history, which is important for applications with cyclic temperature variations.",
          "decisionGuide": "Low hysteresis <0.1ppm suitable for all applications. Contact us for characterization data if needed.",
          "keywords": ["TCXO hysteresis", "temperature hysteresis", "frequency hysteresis"]
        },
        {
          "question": "Can TCXOs be used in vacuum or space applications?",
          "answer": "Dapu TCXOs can be used in vacuum and space applications with proper consideration. In vacuum, heat transfer is different (no convection), which affects thermal characteristics. The TCXO may run slightly warmer in vacuum, but the temperature compensation still functions correctly. For space applications, radiation tolerance must be considered. Standard commercial TCXOs are not radiation-hardened. For space applications, we recommend using hermetically sealed packages and considering radiation effects. Contact our technical team for guidance on vacuum and space applications. Custom screening and testing can be arranged for high-reliability applications.",
          "decisionGuide": "Suitable for vacuum with thermal considerations. Contact us for space application guidance.",
          "keywords": ["TCXO vacuum", "space oscillator", "radiation tolerance"]
        },
        {
          "question": "What is the retrace specification of Dapu TCXOs?",
          "answer": "Retrace (or warm-up repeatability) is the frequency deviation observed when power is cycled. Dapu TCXOs typically have excellent retrace of <0.1ppm after the initial warm-up period. This means if you power off and then power on again after the oscillator has stabilized, it will return to nearly the same frequency. Good retrace is important for applications with frequent power cycling. The retrace specification assumes the TCXO has completed its initial warm-up before power-off. For applications requiring the absolute best retrace, allow the TCXO to stabilize for several minutes before relying on the frequency accuracy.",
          "decisionGuide": "Excellent retrace <0.1ppm. Allow full warm-up for best repeatability.",
          "keywords": ["TCXO retrace", "warm-up repeatability", "frequency retrace"]
        }
      ],
      'voltage-controlled-oscillators': [
        {
          "question": "What is the control voltage input impedance of Dapu VCXOs?",
          "answer": "Dapu VCXOs typically have high control voltage input impedance of >100kΩ, sometimes up to 1MΩ depending on the specific model. This high impedance minimizes loading on the control circuit (typically a DAC or op-amp output). The high input impedance means the VCXO control pin draws very little current, typically <1μA. This allows the use of high-impedance loop filters without significant voltage drop. The input is usually DC-coupled and may have internal protection diodes. Check the specific datasheet for exact input impedance values. The high impedance is maintained across the full control voltage range and temperature range.",
          "decisionGuide": "High input impedance >100kΩ. Compatible with high-impedance control circuits.",
          "keywords": ["VCXO input impedance", "control voltage impedance", "VCXO loading"]
        }
      ],
      'rf-filters': [
        {
          "question": "What is the ESD rating of Dapu RF filters?",
          "answer": "Dapu RF filters typically have ESD ratings of 1-2kV HBM (Human Body Model) and 250-500V CDM (Charged Device Model). While this provides reasonable protection, standard ESD precautions should always be followed during handling and assembly. The SAW filter structure is sensitive to ESD damage which can degrade performance or cause failure. Use grounded workstations, ESD-safe tools, and proper personnel grounding when handling RF filters. Store components in ESD-safe packaging until ready for use. For high-ESD environments, consider adding external ESD protection devices. Contact us for specific ESD ratings for your filter part numbers.",
          "decisionGuide": "Standard ESD precautions required. 1-2kV HBM typical rating.",
          "keywords": ["RF filter ESD", "SAW filter ESD rating", "ESD protection"]
        }
      ]
    };
    
    const catKey = category.id;
    if (extraFaqs[catKey]) {
      category.faqs = category.faqs || [];
      // Add FAQs until we have at least 5
      for (const faq of extraFaqs[catKey]) {
        if (category.faqs.length < 5) {
          category.faqs.push(faq);
        }
      }
    }
  }
});

// Write back
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('Final fixes applied to dapu/products.json');
