#!/usr/bin/env node

/**
 * Fix awinic customerCases field names and LED Driver Selection Guide FAQs
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'awinic');

const solutionsPath = path.join(dataDir, 'solutions.json');
const supportPath = path.join(dataDir, 'support.json');

const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

console.log('🔧 Fixing awinic customerCases field names...\n');

// Fix customerCases field names in all solutions
solutionsData.solutions.forEach(solution => {
  if (solution.customerCases) {
    solution.customerCases.forEach(cs => {
      // Fix customerName -> customer
      if (cs.customerName && !cs.customer) {
        cs.customer = cs.customerName;
        delete cs.customerName;
      }
      // Fix results -> result
      if (cs.results && !cs.result) {
        cs.result = cs.results;
        delete cs.results;
      }
    });
    console.log(`✅ Fixed customerCases for ${solution.id}`);
  }
});

// Fix Awinic LED Driver Selection Guide - ensure it has 5 FAQs
const ledArticle = supportData.articles.find(a => a.id === 'awinic-led-driver-selection-guide');
if (ledArticle) {
  console.log('\nFixing Awinic LED Driver Selection Guide FAQs...');
  console.log(`Current FAQ count: ${ledArticle.faqs.length}`);
  
  // Ensure exactly 5 complete FAQs
  ledArticle.faqs = [
    {
      "question": "What is LED current matching and why is it important?",
      "answer": "LED current matching refers to the variation in current between different LED channels in a multi-channel driver. Good matching (<2%) ensures uniform brightness across the display backlight. Poor matching results in visible brightness variations between different areas of the display, which is unacceptable for high-quality displays. Awinic backlight drivers specify current matching performance, with premium devices achieving <1.5% matching for excellent uniformity.",
      "decisionGuide": "Select drivers with <2% current matching for good backlight uniformity. Premium devices offer <1.5% matching.",
      "keywords": ["current matching", "backlight uniformity", "LED current"]
    },
    {
      "question": "How do I calculate power dissipation in LED drivers?",
      "answer": "LED driver power dissipation depends on topology and operating conditions. For linear drivers, dissipation is P = (Vsupply - Vled) × Iled. For switching drivers, dissipation includes conduction losses, switching losses, and quiescent current. Calculate total dissipation and ensure adequate thermal design to keep junction temperature below maximum ratings. Awinic datasheets provide thermal resistance and efficiency curves to aid in thermal design calculations.",
      "decisionGuide": "Calculate worst-case power dissipation and design adequate thermal management with proper copper area.",
      "keywords": ["power dissipation", "thermal design", "LED driver efficiency"]
    },
    {
      "question": "What is the difference between backlight and flash LED drivers?",
      "answer": "Backlight LED drivers are designed for LCD display illumination, providing constant current to multiple LED strings with excellent current matching. They typically include boost converters to drive multiple LEDs in series from a single-cell battery. Flash LED drivers deliver high pulsed current for camera flash applications, with precise current control and fast response times. Flash drivers must handle high peak currents while protecting the LED from thermal damage.",
      "decisionGuide": "Use backlight drivers for display illumination, flash drivers for camera applications.",
      "keywords": ["backlight driver", "flash driver", "LED application"]
    },
    {
      "question": "How many LED channels do I need?",
      "answer": "The number of LED channels depends on your application. Backlight applications typically need 2-6 channels for display edge lighting. RGB indicator applications may need 24+ channels for complex lighting effects. Single-color indicators may only need 1-2 channels. Consider both current requirements and control complexity when selecting channel count. More channels provide more flexibility but increase cost and complexity.",
      "decisionGuide": "Select channel count based on number of LEDs and control requirements.",
      "keywords": ["LED channels", "backlight channels", "RGB channels"]
    },
    {
      "question": "What dimming frequency should I use?",
      "answer": "LED dimming frequency should be high enough to avoid visible flicker (>200Hz) but not so high that switching losses reduce efficiency. Typical dimming frequencies range from 200Hz to 20kHz. Lower frequencies (200-1000Hz) are suitable for general backlight applications. Higher frequencies (>20kHz) may be needed for camera applications to avoid beat frequencies with camera frame rates.",
      "decisionGuide": "Use 200-1000Hz for general applications, higher frequencies for camera-sensitive applications.",
      "keywords": ["dimming frequency", "PWM frequency", "LED flicker"]
    }
  ];
  console.log(`New FAQ count: ${ledArticle.faqs.length}`);
  console.log('✅ Awinic LED Driver Selection Guide FAQs fixed\n');
}

// Save updated files
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));

console.log('========================================');
console.log('✅ Awinic customerCases and FAQs fixed!');
console.log('========================================');
console.log('\nFixed items:');
console.log('- Solutions: Fixed customerCases field names (customerName->customer, results->result)');
console.log('- Awinic LED Driver Selection Guide: Set exactly 5 complete FAQs');
console.log('\nPlease run: node scripts/brand-master-checklist.js awinic');
console.log('Then regenerate: npm run generate:brand awinic');
