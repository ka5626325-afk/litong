const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'dapu', 'support.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Additional FAQs for each article
const additionalFaqs = {
  'oscillator-selection-guide': [
    {
      "question": "What is the typical lead time for Dapu oscillators?",
      "answer": "Standard Dapu oscillators typically have 4-6 weeks lead time for production quantities. Popular frequencies (8MHz, 12MHz, 16MHz, 24MHz, 25MHz) are often available from stock or with shorter lead times of 2-3 weeks. For high-volume orders (10K+ pieces), contact us to discuss scheduling and potential buffer stock arrangements. Custom frequencies require 8-12 weeks lead time. We maintain safety stock for strategic customers with forecast commitments. Contact our sales team for current lead times and availability.",
      "decisionGuide": "Standard parts: 4-6 weeks. Popular frequencies: 2-3 weeks. Contact us for current availability.",
      "keywords": ["Dapu lead time", "oscillator delivery", "Dapu availability"]
    },
    {
      "question": "Can I get samples of Dapu oscillators for evaluation?",
      "answer": "Yes, samples are available for evaluation through our distribution channel. Sample quantities typically range from 2-5 pieces per part number. Samples are usually shipped within 1-2 business days from stock. For specialized or custom frequency samples, lead time may be 1-2 weeks. Sample orders can be placed through our website or by contacting our sales team. We also offer evaluation kits for some product families that include multiple frequencies and package options. For high-volume production qualification, we recommend ordering a small production lot to validate manufacturing processes.",
      "decisionGuide": "Contact us for sample requests. Evaluation kits available for some product families.",
      "keywords": ["Dapu samples", "oscillator evaluation", "Dapu samples request"]
    },
    {
      "question": "What is the minimum order quantity for Dapu oscillators?",
      "answer": "Standard minimum order quantity (MOQ) for Dapu oscillators is 1,000 pieces for production orders. For standard frequencies in stock, we can accept smaller quantities with a small order surcharge. For prototype and evaluation purposes, sample quantities (2-5 pieces) are available. Volume pricing tiers typically start at 1K, 5K, 10K, 25K, and 100K pieces. Contact our sales team for specific MOQ and pricing information for your required frequencies. For very high volumes (100K+), we can discuss special pricing and scheduling arrangements.",
      "decisionGuide": "Standard MOQ is 1K pieces. Samples available for evaluation. Contact us for volume pricing.",
      "keywords": ["Dapu MOQ", "minimum order quantity", "oscillator pricing"]
    },
    {
      "question": "Are Dapu oscillators RoHS compliant?",
      "answer": "Yes, all Dapu oscillators are fully RoHS compliant and lead-free (Pb-free). They meet the requirements of EU RoHS Directive 2011/65/EU and subsequent amendments. The packages use tin-based plating and are compatible with standard Pb-free reflow soldering processes. Halogen-free options are available upon request. Full material declarations and RoHS certificates are available from our quality team. Dapu also complies with other environmental regulations including REACH and WEEE. For specific environmental compliance documentation, contact our quality assurance team.",
      "decisionGuide": "All Dapu oscillators are RoHS compliant. Contact us for compliance documentation.",
      "keywords": ["Dapu RoHS", "lead-free oscillator", "environmental compliance"]
    },
    {
      "question": "What packaging options are available for Dapu oscillators?",
      "answer": "Dapu oscillators are available in various packaging options. Standard packaging is tape and reel (T&R) with 1,000 or 3,000 pieces per reel depending on package size. Reel diameter is typically 7 inches (180mm) or 13 inches (330mm) for high-volume orders. Trays are available for some larger packages. Moisture sensitivity level (MSL) is typically MSL1 or MSL3 depending on the package. Dry pack packaging with desiccant and humidity indicator cards is provided for MSL3 parts. Custom labeling and packaging options are available for high-volume customers. Contact us for specific packaging requirements.",
      "decisionGuide": "Standard: tape and reel 1K or 3K per reel. Contact us for custom packaging requirements.",
      "keywords": ["Dapu packaging", "tape and reel", "oscillator packaging"]
    },
    {
      "question": "How do I store unused Dapu oscillators?",
      "answer": "Unused Dapu oscillators should be stored in their original packaging in a controlled environment. Recommended storage conditions are temperature 5°C to 35°C and humidity 30% to 70% RH. Avoid exposure to corrosive gases, direct sunlight, and extreme temperature fluctuations. For MSL3 parts, follow the moisture sensitivity precautions - use within the floor life specified on the label after opening, or bake before use if exceeded. When stored properly, Dapu oscillators have a shelf life of 2 years minimum. For long-term storage (>1 year), consider nitrogen-purged containers for additional protection.",
      "decisionGuide": "Store at 5-35°C, 30-70% RH. Follow MSL precautions for moisture-sensitive parts.",
      "keywords": ["oscillator storage", "component handling", "MSL storage"]
    }
  ],
  'tcxo-selection-guide': [
    {
      "question": "What is the warm-up time for Dapu TCXOs?",
      "answer": "Dapu TCXOs typically have warm-up times of 1-5 seconds to reach specified stability. The warm-up time is measured from power-on to when the frequency stabilizes within the specified tolerance. During warm-up, the TCXO may exceed the specified stability limits. For applications requiring immediate stability, consider the warm-up time in your system design. Some TCXOs have faster warm-up times than others - check the datasheet for specific values. For critical applications, we can provide warm-up characterization data. The warm-up time may be longer at cold temperatures.",
      "decisionGuide": "Typical warm-up: 1-5 seconds. Check datasheet for specific values. Factor into system design.",
      "keywords": ["TCXO warm-up", "oscillator startup", "TCXO settling time"]
    },
    {
      "question": "Can TCXOs be used for holdover applications?",
      "answer": "Yes, TCXOs are commonly used for holdover applications in telecom and synchronization systems. Holdover is the ability to maintain timing when the reference signal is lost. TCXO stability during holdover depends on the stability grade (±0.5ppm TCXOs provide better holdover than ±2.5ppm), temperature stability, and aging characteristics. Typical holdover performance is ±1-4μs over 24 hours depending on the TCXO grade. For better holdover, consider OCXOs which can achieve ±0.1-0.5μs over 24 hours. The holdover algorithm in your system also affects performance - proper calibration and temperature compensation improve holdover.",
      "decisionGuide": "TCXOs suitable for holdover. ±0.5ppm provides best holdover. OCXO for premium performance.",
      "keywords": ["TCXO holdover", "timing holdover", "telecom holdover"]
    },
    {
      "question": "What is the g-sensitivity of Dapu TCXOs?",
      "answer": "G-sensitivity measures the frequency shift caused by vibration or acceleration. Dapu TCXOs typically have g-sensitivity of 0.5-2.0 ppb/g depending on the package and mounting. This means a 1g acceleration can cause 0.5-2.0 parts per billion frequency shift. For most applications, this is negligible. However, for high-vibration environments (automotive, aerospace, industrial), g-sensitivity can be important. Dapu offers low-g-sensitivity options for these applications. For extreme vibration environments, consider using vibration isolation or selecting TCXOs specifically designed for high-g applications. Contact us for g-sensitivity data for specific part numbers.",
      "decisionGuide": "Typical g-sensitivity: 0.5-2.0 ppb/g. Contact us for high-vibration application recommendations.",
      "keywords": ["TCXO g-sensitivity", "vibration sensitivity", "acceleration sensitivity"]
    },
    {
      "question": "How do I power a TCXO for best performance?",
      "answer": "Proper power supply design is critical for TCXO performance. Use a clean, stable power supply with low noise. Recommended practices include: Use a dedicated LDO regulator for the TCXO if possible, add 10μF and 0.1μF decoupling capacitors close to the TCXO power pins, use a ferrite bead in series with the power supply for high-frequency isolation, keep power traces short and wide to minimize inductance, and avoid sharing power rails with noisy digital circuits. Power supply noise directly impacts phase noise performance. For ultra-low phase noise applications, consider using a low-noise linear regulator specifically for the TCXO.",
      "decisionGuide": "Use clean LDO, add decoupling caps, isolate from digital noise. Contact us for power design guidance.",
      "keywords": ["TCXO power supply", "oscillator power design", "low noise power"]
    },
    {
      "question": "What is the Allan deviation of Dapu TCXOs?",
      "answer": "Allan deviation (ADEV) is a measure of frequency stability over short time intervals. Dapu TCXOs typically achieve Allan deviation of 0.1-1.0 ppb (parts per billion) at 1-second averaging time, depending on the grade. Better grades (±0.5ppm) have lower Allan deviation than standard grades (±2.5ppm). Allan deviation is important for applications requiring short-term stability, such as precision timing and frequency references. The value improves with longer averaging times (typically following τ^-1/2 dependence). For specific Allan deviation data, contact our technical team. We can provide measurement data for qualification purposes.",
      "decisionGuide": "Typical ADEV: 0.1-1.0 ppb at 1s. Contact us for specific measurement data.",
      "keywords": ["Allan deviation", "ADEV", "short-term stability"]
    },
    {
      "question": "Can I use a TCXO as a reference for a PLL?",
      "answer": "Yes, TCXOs are commonly used as reference oscillators for PLLs. The TCXO provides a stable reference frequency that the PLL multiplies or divides to generate the desired output frequency. When using a TCXO as a PLL reference, consider the TCXO stability, phase noise, and frequency. The TCXO stability determines the output frequency accuracy. The TCXO phase noise affects the PLL output phase noise (particularly close-in noise). Choose a TCXO frequency that is compatible with your PLL's input requirements and divide ratios. For best PLL performance, use a TCXO with good phase noise characteristics and adequate stability for your application.",
      "decisionGuide": "TCXOs excellent for PLL references. Consider stability and phase noise for your application.",
      "keywords": ["TCXO PLL reference", "PLL reference oscillator", "TCXO for PLL"]
    }
  ],
  'pll-design-guide': [
    {
      "question": "What is the difference between integer-N and fractional-N PLLs?",
      "answer": "Integer-N PLLs use integer divide ratios, resulting in output frequencies that are integer multiples of the reference frequency. They're simpler, have better spurious performance, but limited frequency resolution. Fractional-N PLLs use fractional divide ratios, enabling fine frequency resolution and arbitrary output frequencies. However, fractional-N PLLs can produce fractional spurs that may require compensation. For applications requiring precise frequency resolution (e.g., frequency synthesis, clock generation), fractional-N is preferred. For applications with fixed, integer-related frequencies, integer-N may be simpler. Dapu VCXOs work with both types of PLLs.",
      "decisionGuide": "Use integer-N for simplicity and spurious performance. Use fractional-N for fine frequency resolution.",
      "keywords": ["integer-N PLL", "fractional-N PLL", "PLL architecture"]
    },
    {
      "question": "How do I measure PLL phase noise?",
      "answer": "PLL phase noise is measured using a phase noise analyzer or spectrum analyzer with phase noise measurement capability. The measurement setup includes: a clean reference source with better phase noise than the DUT, a phase detector or mixer to compare DUT with reference, and analysis software to calculate phase noise density vs. offset frequency. For accurate measurements, ensure the reference source has significantly better phase noise than the DUT. Measure at various offset frequencies (typically 1Hz to 10MHz). For integrated phase jitter, specify the integration bandwidth (e.g., 12kHz-20MHz for Ethernet). Dapu can provide phase noise measurement data for VCXO products.",
      "decisionGuide": "Use phase noise analyzer with clean reference. Contact us for measurement data.",
      "keywords": ["PLL phase noise measurement", "phase noise testing", "jitter measurement"]
    },
    {
      "question": "What causes PLL unlock and how do I prevent it?",
      "answer": "PLL unlock can be caused by several factors: reference signal loss or degradation, VCXO pull range insufficient for frequency variation, loop instability (insufficient phase margin), power supply noise or transients, temperature extremes affecting VCXO or PLL, and interference or noise coupling. To prevent unlock: ensure robust reference signal with adequate amplitude, select VCXO with sufficient pull range margin, design loop filter with adequate phase margin (>45°), use clean power supply with proper decoupling, verify operation over temperature range, and implement proper shielding and layout. Monitor lock detect signal in your system and implement relock procedures if needed.",
      "decisionGuide": "Ensure adequate pull range, phase margin, and clean power. Monitor lock detect signal.",
      "keywords": ["PLL unlock", "PLL lock loss", "PLL stability"]
    },
    {
      "question": "How do I optimize PLL lock time?",
      "answer": "PLL lock time can be optimized through several techniques: increase loop bandwidth (trade-off with jitter), use adaptive bandwidth (wide bandwidth during acquisition, narrow when locked), implement fast-lock circuits in the PLL chip, use frequency preset to get close to target frequency quickly, and optimize charge pump current. The lock time is inversely proportional to loop bandwidth - wider bandwidth gives faster lock but more jitter. For applications requiring both fast lock and low jitter, consider adaptive bandwidth techniques. Some PLLs have dedicated fast-lock modes. The VCXO characteristics (Kvco, pull range) also affect lock behavior. Simulate your design to optimize for your specific requirements.",
      "decisionGuide": "Increase bandwidth for faster lock. Use adaptive bandwidth for jitter/lock time trade-off.",
      "keywords": ["PLL lock time", "fast lock PLL", "PLL acquisition"]
    },
    {
      "question": "What is reference spur and how do I reduce it?",
      "answer": "Reference spurs are unwanted spectral components at the reference frequency and its harmonics that appear in the PLL output. They're caused by imperfections in the phase detector and charge pump. To reduce reference spurs: use a higher reference frequency (spurs are farther from carrier), increase loop filter attenuation at reference frequency, use a higher-order loop filter for better attenuation, ensure good power supply isolation, use balanced charge pump designs if available, and implement spur compensation techniques in the PLL chip. The loop filter is the primary tool for spur reduction - ensure it provides adequate attenuation at the reference frequency while maintaining desired bandwidth.",
      "decisionGuide": "Use higher reference frequency, increase loop filter attenuation. Contact us for filter design guidance.",
      "keywords": ["reference spur", "PLL spurs", "spur reduction"]
    },
    {
      "question": "Can I use the same VCXO for multiple PLLs?",
      "answer": "Using the same VCXO for multiple PLLs is possible but requires careful consideration. The VCXO output must have sufficient drive capability for multiple loads. Use a clock buffer if necessary to distribute the reference. Each PLL will load the VCXO control line if they're sharing the same VCXO - this is usually not practical. Typically, you would use a fixed oscillator as a common reference and distribute it to multiple PLLs, each with their own VCXO or using the PLL's internal VCO. If you need synchronized outputs from multiple PLLs, use a common reference and ensure the PLLs are designed for synchronization. Contact us for multi-PLL system design guidance.",
      "decisionGuide": "Use fixed reference with distribution. Each PLL typically needs its own VCXO.",
      "keywords": ["multiple PLLs", "PLL synchronization", "clock distribution"]
    }
  ],
  'rf-filter-application': [
    {
      "question": "What is group delay and why does it matter?",
      "answer": "Group delay is the frequency-dependent delay through a filter, measured in time (nanoseconds or microseconds). Variation in group delay across the passband can cause signal distortion, particularly for wideband digital signals. Constant group delay (linear phase response) is desired for minimal distortion. SAW filters have good group delay characteristics within the passband but may have variation at band edges. For digital communication systems (WiFi, LTE), group delay variation should be minimized. Check the filter datasheet for group delay specifications. For applications sensitive to group delay (high-order modulation like 256-QAM), select filters with good phase linearity.",
      "decisionGuide": "Minimize group delay variation for wideband digital signals. Check datasheet specifications.",
      "keywords": ["group delay", "filter phase response", "signal distortion"]
    },
    {
      "question": "How do I cascade multiple RF filters?",
      "answer": "Cascading multiple filters can increase rejection but requires careful design. When cascading: ensure proper impedance matching between stages (typically 50Ω), consider insertion loss accumulation (losses add in dB), watch for interaction between filter responses, allow adequate spacing between filters to prevent coupling, and consider using amplifiers between stages to compensate for loss. For example, cascading two filters each with 2dB insertion loss and 30dB rejection gives 4dB total loss and 60dB rejection (ideally). In practice, interaction may reduce the effective rejection. Use S-parameter simulation to analyze cascaded performance. For multi-band rejection, consider using filters for different bands in series.",
      "decisionGuide": "Match impedance between stages. Account for accumulated insertion loss. Simulate cascaded response.",
      "keywords": ["cascade filters", "filter chain", "multi-stage filtering"]
    },
    {
      "question": "What is temperature drift in SAW filters?",
      "answer": "Temperature drift is the change in center frequency with temperature. SAW filters have a temperature coefficient of frequency (TCF) typically around -20 to -50 ppm/°C depending on the substrate material. This means the center frequency decreases as temperature increases. For narrowband applications, this drift can shift the filter response relative to the signal frequency. Dapu SAW filters use temperature-compensated designs to minimize drift. For applications operating over wide temperature ranges, consider the frequency shift in your system design. The drift is repeatable and can be compensated in some applications. For critical applications, request temperature characterization data.",
      "decisionGuide": "SAW filters have -20 to -50 ppm/°C TCF. Consider drift in wide-temperature applications.",
      "keywords": ["SAW temperature drift", "TCF", "filter frequency stability"]
    },
    {
      "question": "How do I test RF filter performance?",
      "answer": "RF filter testing requires a network analyzer or spectrum analyzer with tracking generator. Key measurements include: insertion loss (S21) at center frequency, return loss (S11) for impedance matching, bandwidth at specified attenuation levels (1dB, 3dB), rejection at specific frequencies, and group delay across the passband. For production testing, simpler setups with signal generator and power meter can verify insertion loss and basic functionality. For detailed characterization, use a calibrated network analyzer. Test in a controlled environment (temperature, humidity) for repeatable results. Follow proper calibration procedures including cable and fixture compensation. Dapu provides S-parameter files for simulation and can provide test data for qualification.",
      "decisionGuide": "Use network analyzer for full characterization. Contact us for S-parameters and test data.",
      "keywords": ["RF filter testing", "filter measurement", "network analyzer"]
    },
    {
      "question": "What is power handling in RF filters?",
      "answer": "Power handling is the maximum RF power a filter can handle without damage or performance degradation. For SAW filters, power handling is typically limited by thermal effects and acoustic power density. Dapu SAW filters typically handle up to +10 to +20dBm (10-100mW) continuous power, depending on the package and frequency. Higher power can cause: frequency shift due to heating, increased insertion loss, permanent damage to the SAW transducers, and reduced lifetime. For transmit applications, ensure the filter power rating exceeds your maximum output power with margin. For high-power applications, consider using high-power rated filters or placing the filter before the power amplifier.",
      "decisionGuide": "Typical SAW filter: +10 to +20dBm. Verify rating for transmit applications.",
      "keywords": ["filter power handling", "SAW power rating", "RF filter power"]
    },
    {
      "question": "Can SAW filters be used for both transmit and receive?",
      "answer": "Yes, SAW filters can be used in both transmit and receive paths, but considerations differ. In receive paths, the filter provides selectivity to reject interference before the LNA. Low insertion loss is critical to maintain sensitivity. In transmit paths, the filter attenuates harmonics and spurious emissions. Power handling must be adequate for the transmit power. The same filter can be used for both directions in TDD (Time Division Duplex) systems like WiFi. For FDD (Frequency Division Duplex) systems like cellular, different filters are typically used for transmit and receive bands (duplexer function). Dapu offers filters optimized for both receive and transmit applications.",
      "decisionGuide": "Same filter can be used for TDD. Separate filters for FDD. Verify power handling for TX.",
      "keywords": ["SAW filter TX RX", "duplexer", "TDD FDD filtering"]
    }
  ]
};

// Add FAQs to each article
data.articles.forEach(article => {
  const articleFaqs = additionalFaqs[article.id];
  if (articleFaqs && article.faqs) {
    article.faqs.push(...articleFaqs);
    console.log(`Added ${articleFaqs.length} FAQs to ${article.id}`);
  }
});

// Write back
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('\nFixed dapu/support.json:');
console.log('- Added FAQs to all articles (minimum 5-8 each)');
