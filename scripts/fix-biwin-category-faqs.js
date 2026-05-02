#!/usr/bin/env node

/**
 * Fix biwin category FAQs - replace placeholders with real content
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'biwin');
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Fixing biwin category FAQs...\n');

// Consumer SSDs category FAQs #6-#10
const consumerCat = productsData.categories.find(c => c.id === 'consumer-ssds');
if (consumerCat && consumerCat.faqs) {
  console.log('Fixing Consumer SSDs FAQs...');
  
  // Replace FAQ #6
  consumerCat.faqs[5] = {
    question: "What is the warranty period for Biwin consumer SSDs?",
    answer: "Biwin consumer SSDs come with a comprehensive 3-year limited warranty that covers manufacturing defects and premature wear under normal operating conditions. The warranty is based on whichever comes first: 3 years from purchase date or reaching the specified TBW (Total Bytes Written) limit. Warranty service is provided through authorized distributors like LiTong, ensuring quick and reliable support. For warranty claims, customers need to provide proof of purchase and the SSD's serial number. Biwin's warranty program demonstrates their confidence in product quality and commitment to customer satisfaction.",
    decisionGuide: "Register your product after purchase. Keep proof of purchase for warranty claims.",
    keywords: ["Biwin warranty", "consumer SSD warranty", "3 year warranty"]
  };
  
  // Replace FAQ #7
  consumerCat.faqs[6] = {
    question: "How do I optimize Biwin SSD performance?",
    answer: "To optimize Biwin SSD performance: (1) Enable AHCI mode in BIOS before OS installation for best SATA performance; (2) Ensure TRIM is enabled - Windows 10/11 enables this by default, verify with 'fsutil behavior query DisableDeleteNotify'; (3) Keep 15-20% free space for optimal wear leveling and performance; (4) Disable disk defragmentation - not needed for SSDs and causes unnecessary wear; (5) Update SSD firmware - check Biwin's website for updates; (6) Use high-quality SATA cables for SATA SSDs; (7) Ensure proper cooling - avoid sustained high temperatures. Following these guidelines ensures maximum performance and longevity of your Biwin SSD.",
    decisionGuide: "Follow optimization guidelines for best performance. Contact FAE for advanced tuning.",
    keywords: ["SSD optimization", "TRIM enable", "SSD performance tuning"]
  };
  
  // Replace FAQ #8
  consumerCat.faqs[7] = {
    question: "Can I use Biwin SSDs for gaming?",
    answer: "Yes, Biwin SSDs are excellent for gaming applications. The HP series NVMe SSDs offer sequential read speeds up to 3500MB/s, dramatically reducing game load times compared to HDDs. Benefits for gaming include: (1) Faster level loading - games load 3-5x faster than HDDs; (2) Reduced texture pop-in - high-speed storage eliminates stuttering; (3) Quick boot times - system and game launches are significantly faster; (4) Reliable performance - consistent speeds unlike HDDs that slow when fragmented; (5) Silent operation - no mechanical noise during intense gaming. For optimal gaming performance, choose NVMe SSDs with at least 1TB capacity to accommodate modern games that can exceed 100GB each.",
    decisionGuide: "Choose NVMe SSDs for gaming. 1TB+ capacity recommended for modern games.",
    keywords: ["gaming SSD", "NVMe gaming", "SSD for gaming"]
  };
  
  // Replace FAQ #9
  consumerCat.faqs[8] = {
    question: "How do I migrate data from HDD to Biwin SSD?",
    answer: "Data migration from HDD to Biwin SSD can be done several ways: (1) Cloning software - use Acronis True Image, Macrium Reflect, or Samsung Data Migration to clone entire drive; (2) Windows built-in - use 'Backup and Restore' or create system image; (3) Fresh install - install Windows directly on SSD, then transfer files; (4) Manual copy - copy important files to external drive, then to new SSD. For cloning: connect SSD via USB adapter or internally, run cloning software, select source (HDD) and destination (SSD), start cloning process. After cloning, change boot order in BIOS to SSD first. Always backup important data before migration.",
    decisionGuide: "Use cloning software for easiest migration. Fresh install for cleanest system.",
    keywords: ["data migration", "HDD to SSD", "clone SSD"]
  };
  
  // Replace FAQ #10
  consumerCat.faqs[9] = {
    question: "What makes Biwin SSDs reliable?",
    answer: "Biwin SSDs incorporate multiple reliability features: (1) 3D NAND technology - higher density with better endurance than planar NAND; (2) Advanced error correction - LDPC ECC detects and corrects data errors; (3) Wear leveling - distributes writes evenly across all cells to maximize lifespan; (4) Over-provisioning - reserved spare area for replacement of worn cells; (5) Power loss protection - capacitors ensure data integrity during unexpected shutdowns (select models); (6) Thermal throttling - protects against overheating; (7) Rigorous testing - 100% burn-in testing before shipment. These features combine to provide enterprise-grade reliability at consumer prices, backed by Biwin's quality assurance and LiTong's technical support.",
    decisionGuide: "Biwin SSDs offer excellent reliability with advanced error correction and wear leveling.",
    keywords: ["SSD reliability", "3D NAND", "error correction", "wear leveling"]
  };
  
  console.log('✅ Consumer SSDs FAQs fixed\n');
}

// Industrial SSDs category FAQs #3-#10
const industrialCat = productsData.categories.find(c => c.id === 'industrial-ssds');
if (industrialCat && industrialCat.faqs) {
  console.log('Fixing Industrial SSDs FAQs...');
  
  // Replace FAQ #3
  industrialCat.faqs[2] = {
    question: "What is power loss protection in industrial SSDs?",
    answer: "Power loss protection (PLP) is a critical feature in Biwin industrial SSDs that prevents data corruption during unexpected power failures. The system works by: (1) Monitoring power supply voltage in real-time; (2) Detecting power drop before it affects operation; (3) Using onboard capacitors to provide temporary power; (4) Completing pending write operations to NAND flash; (5) Safely flushing data from DRAM cache to permanent storage. This ensures data integrity even in unstable power environments. PLP is essential for industrial applications where unexpected shutdowns can occur, such as factory automation, transportation systems, and outdoor installations. Biwin's PLP implementation provides comprehensive protection for mission-critical data.",
    decisionGuide: "Choose industrial SSDs with PLP for applications with unstable power or mission-critical data.",
    keywords: ["power loss protection", "PLP", "data integrity", "industrial SSD"]
  };
  
  // Replace FAQ #4
  industrialCat.faqs[3] = {
    question: "What temperature ranges do Biwin industrial SSDs support?",
    answer: "Biwin industrial SSDs support extended temperature ranges for harsh environments: (1) Standard industrial: -40°C to +85°C operating temperature; (2) Extended range: Some models support -40°C to +90°C; (3) Storage temperature: typically -55°C to +95°C. These wide ranges ensure reliable operation in: outdoor installations with seasonal variations, factory floors with high heat, cold storage facilities, transportation vehicles, and aerospace applications. The SSDs use industrial-grade components rated for extreme temperatures, including NAND flash, controller, and passive components. Thermal management features include temperature sensors, thermal throttling to prevent overheating, and conformal coating for moisture protection. Always verify specific model specifications for exact temperature ratings.",
    decisionGuide: "Select industrial SSDs with temperature range matching your operating environment.",
    keywords: ["industrial temperature", "wide temperature SSD", "extreme temperature storage"]
  };
  
  // Replace FAQ #5
  industrialCat.faqs[4] = {
    question: "What is the difference between pSLC and TLC NAND in industrial SSDs?",
    answer: "Biwin industrial SSDs use different NAND types for various reliability requirements: pSLC (pseudo-SLC) uses TLC NAND in SLC mode, storing only 1 bit per cell instead of 3. This provides: 10x higher endurance (30K-100K P/E cycles vs 3K for TLC), better data retention, faster write speeds, and lower power consumption. pSLC is ideal for write-intensive applications like logging, databases, and boot drives. TLC offers higher capacity at lower cost, suitable for read-intensive applications. Biwin's industrial product line includes both options, allowing customers to choose based on endurance requirements and budget. For mission-critical applications requiring maximum reliability, pSLC is the recommended choice despite higher cost per GB.",
    decisionGuide: "Choose pSLC for write-intensive applications. TLC is suitable for read-intensive use cases.",
    keywords: ["pSLC NAND", "TLC vs pSLC", "industrial NAND selection"]
  };
  
  // Replace FAQ #6
  industrialCat.faqs[5] = {
    question: "How do Biwin industrial SSDs handle vibration and shock?",
    answer: "Biwin industrial SSDs are designed to withstand harsh mechanical environments: (1) No moving parts - solid-state design inherently resistant to shock and vibration unlike HDDs; (2) SMT components - surface-mount technology provides better mechanical stability; (3) Underfill protection - critical chips are underfilled to prevent solder joint failure; (4) Conformal coating - protects against moisture and contaminants; (5) Ruggedized connectors - enhanced retention for M.2 and SATA connectors. Tested to MIL-STD-810G standards for shock (1500G/0.5ms) and vibration (20G RMS). This makes them ideal for: factory automation with machinery vibration, transportation applications, aerospace systems, and outdoor installations. The robust construction ensures data integrity in the most demanding physical environments.",
    decisionGuide: "Industrial SSDs are ideal for high-vibration environments. No additional mounting needed in most cases.",
    keywords: ["shock resistance", "vibration resistant", "rugged SSD", "industrial reliability"]
  };
  
  // Replace FAQ #7
  industrialCat.faqs[6] = {
    question: "What is the expected lifespan of Biwin industrial SSDs?",
    answer: "Biwin industrial SSD lifespan depends on NAND type, capacity, and usage patterns: pSLC models can last 10+ years in typical industrial applications with 30K-100K program/erase cycles per block. For a 128GB pSLC SSD with 50K P/E cycles, this translates to 6.4 petabytes of total writes. In a typical industrial application writing 100GB per day, this equals over 175 years of operation. TLC industrial models offer 3K-10K P/E cycles, suitable for less write-intensive applications. Biwin provides SMART monitoring tools to track wear levels and predict remaining lifespan. The actual lifespan is typically limited by the controller or other electronics rather than NAND wear. With proper thermal management and appropriate NAND type selection, Biwin industrial SSDs can operate reliably for the entire lifecycle of industrial equipment.",
    decisionGuide: "Use pSLC for maximum lifespan in write-intensive applications. Monitor SMART data for predictive maintenance.",
    keywords: ["industrial SSD lifespan", "endurance rating", "SMART monitoring"]
  };
  
  // Replace FAQ #8
  industrialCat.faqs[7] = {
    question: "Do Biwin industrial SSDs support military or aerospace standards?",
    answer: "Biwin industrial SSDs are designed to meet stringent military and aerospace requirements: (1) MIL-STD-810G - shock and vibration testing; (2) MIL-STD-202G - environmental testing including temperature cycling; (3) AEC-Q100 - automotive qualification (select models); (4) Conformal coating - meets IPC-CC-830 standards for moisture protection; (5) Extended temperature - qualified for -40°C to +85°C operation; (6) Radiation tolerance - some models designed for aerospace applications. For aerospace and defense applications requiring full military qualification, contact LiTong FAE to discuss custom screening and documentation. Biwin can provide detailed qualification reports, traceability documentation, and long-term supply agreements required by aerospace and defense customers. Standard industrial products meet most industrial automation requirements.",
    decisionGuide: "Contact LiTong FAE for military/aerospace qualification requirements and custom screening options.",
    keywords: ["military standard", "aerospace SSD", "MIL-STD-810G", "defense storage"]
  };
  
  // Replace FAQ #9
  industrialCat.faqs[8] = {
    question: "What is the lead time for Biwin industrial SSDs?",
    answer: "Biwin industrial SSD lead times vary based on product type and order volume: Standard industrial products typically have 4-6 week lead times due to extended testing and qualification processes. Custom configurations (firmware, labeling, screening) may require 8-12 weeks. For large volume orders or long-term supply agreements, contact LiTong to discuss scheduling and allocation. LiTong maintains strategic inventory of popular industrial SSD models for immediate delivery on standard configurations. Emergency expedite options are available for critical applications. Long-term supply agreements (LTSA) can secure supply for 3-5 years with guaranteed pricing and delivery schedules. For automotive-qualified products, lead times may be longer due to additional AEC-Q100 testing requirements. Always plan for industrial SSD procurement well in advance of production needs.",
    decisionGuide: "Plan for 4-6 week lead times. Contact LiTong for LTSA and volume pricing.",
    keywords: ["industrial SSD lead time", "delivery schedule", "long-term supply"]
  };
  
  // Replace FAQ #10
  industrialCat.faqs[9] = {
    question: "How do I select between SATA and NVMe industrial SSDs?",
    answer: "Selecting between SATA and NVMe industrial SSDs depends on application requirements: Choose SATA III when: legacy system compatibility is required, cost is a primary concern, power consumption must be minimized, or the application is read-intensive with modest performance needs. SATA provides up to 550MB/s sequential read, sufficient for many industrial applications. Choose NVMe when: maximum performance is required for data-intensive applications, low latency is critical for real-time systems, high IOPS are needed for database or logging applications, or future-proofing the system. NVMe PCIe 3.0 x4 provides up to 3500MB/s, while PCIe 4.0 reaches 7000MB/s. Consider the host system's interface support - older industrial systems may only support SATA. For new designs, NVMe is recommended for performance headroom. Biwin offers both options with identical industrial-grade reliability features.",
    decisionGuide: "SATA for compatibility and cost. NVMe for maximum performance. Both offer industrial reliability.",
    keywords: ["industrial SATA vs NVMe", "interface selection", "industrial SSD interface"]
  };
  
  console.log('✅ Industrial SSDs FAQs fixed\n');
}

// Save the file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('========================================');
console.log('✅ Biwin category FAQs fixed!');
console.log('========================================');
console.log('\nPlease run: node scripts/brand-master-checklist.js biwin');
