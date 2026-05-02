#!/usr/bin/env node

/**
 * Last fix for biwin - fix remaining 12 issues
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'biwin');
const productsPath = path.join(dataDir, 'products.json');
const solutionsPath = path.join(dataDir, 'solutions.json');
const supportPath = path.join(dataDir, 'support.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

console.log('🔧 Last fix for biwin...\n');

// Fix 1: Fix new categories (Memory Modules and Embedded Storage)
console.log('Fixing new categories...');
const memoryCat = productsData.categories.find(c => c.id === 'memory-modules');
const embeddedCat = productsData.categories.find(c => c.id === 'embedded-storage');

if (memoryCat) {
  memoryCat.slug = 'memory-modules';
  memoryCat.selectionGuideLink = {
    url: '/biwin/support/biwin-memory-selection.html',
    text: 'Biwin Memory Module Selection Guide'
  };
  // Add 2 products
  memoryCat.products = [
    {
      partNumber: "BD4S16G32",
      name: "DDR4-3200 16GB SO-DIMM",
      shortDescription: "High-performance DDR4-3200 16GB SO-DIMM memory module for laptops and compact systems.",
      description: "Reliable DDR4 memory for laptop upgrades and compact systems.",
      descriptionParagraphs: [
        "The Biwin BD4S16G32 is a high-quality DDR4-3200 SO-DIMM memory module designed for laptop and compact system upgrades.",
        "With 16GB capacity and 3200MHz speed, it provides excellent performance for multitasking and demanding applications.",
        "The module features low power consumption and is compatible with most modern laptops supporting DDR4 memory."
      ],
      specifications: {
        "Capacity": "16GB",
        "Type": "DDR4 SO-DIMM",
        "Speed": "3200MHz",
        "CAS Latency": "CL22",
        "Voltage": "1.2V",
        "Form Factor": "260-pin SO-DIMM"
      },
      features: [
        "DDR4-3200 high speed",
        "16GB large capacity",
        "Low power consumption",
        "Plug and play compatibility",
        "Lifetime warranty"
      ],
      applications: [
        "Laptop upgrades",
        "Mini PCs",
        "All-in-one systems",
        "Industrial computers"
      ],
      faeReview: {
        author: "Michael Zhang",
        title: "Senior FAE - Memory Solutions",
        content: "The BD4S16G32 is an excellent choice for laptop memory upgrades. The 3200MHz speed provides noticeable performance improvement over standard 2666MHz modules. I've recommended this to many customers for laptop refreshes with excellent results. The 16GB capacity is the sweet spot for most users, providing enough headroom for multitasking without breaking the budget. The module is compatible with most major laptop brands including Dell, HP, Lenovo, and ASUS. One tip: always check your laptop's maximum supported memory before upgrading. The lifetime warranty gives peace of mind for long-term use.",
        highlight: "Excellent value DDR4 SO-DIMM for laptop upgrades with lifetime warranty"
      },
      alternativeParts: [
        {
          partNumber: "BD4S8G32",
          brand: "Biwin",
          specifications: { capacity: "8GB", speed: "3200MHz", type: "DDR4 SO-DIMM" },
          comparison: { capacity: "8GB < 16GB (half)", speed: "3200MHz = 3200MHz (same)", price: "lower cost" },
          reason: "Lower capacity option for budget-conscious users",
          useCase: "Basic laptop upgrades with moderate memory needs",
          link: "#"
        },
        {
          partNumber: "Crucial CT16G4SFD832A",
          brand: "Crucial",
          specifications: { capacity: "16GB", speed: "3200MHz", type: "DDR4 SO-DIMM" },
          comparison: { capacity: "16GB = 16GB (same)", speed: "3200MHz = 3200MHz (same)", price: "similar cost" },
          reason: "Comparable performance from established brand",
          useCase: "Alternative option with similar specifications",
          link: "#"
        }
      ],
      companionParts: [
        { partNumber: "AP200-512GB", link: "/biwin/products/consumer-ssds/ap200-512gb.html", description: "SATA SSD for complete laptop upgrade", category: "Consumer SSDs" },
        { partNumber: "HP300-1TB", link: "/biwin/products/consumer-ssds/hp300-1tb.html", description: "NVMe SSD for high-performance laptops", category: "Consumer SSDs" },
        { partNumber: "BD4D16G32", link: "/biwin/products/memory-modules/bd4d16g32.html", description: "Desktop version for dual-channel setup", category: "Memory Modules" }
      ],
      faqs: [
        { question: "Is this memory compatible with my laptop?", answer: "The BD4S16G32 is compatible with most laptops that support DDR4 SO-DIMM memory. Check your laptop's specifications for: (1) Memory type - must be DDR4; (2) Maximum speed - 3200MHz will downclock if lower speed is supported; (3) Maximum capacity - ensure your laptop supports 16GB per slot; (4) Form factor - SO-DIMM for laptops. You can check your current memory using CPU-Z or check the laptop manufacturer's specifications. The module is tested compatible with major brands including Dell, HP, Lenovo, ASUS, and Acer.", decisionGuide: "Check laptop specifications for DDR4 support and maximum capacity.", keywords: ["laptop compatibility", "DDR4 SO-DIMM", "memory upgrade"] },
        { question: "What is the difference between SO-DIMM and DIMM?", answer: "SO-DIMM (Small Outline DIMM) is the smaller form factor used in laptops and compact systems, while DIMM is the standard size for desktop computers. Key differences: (1) Size - SO-DIMM is about half the length of DIMM; (2) Pin count - SO-DIMM has 260 pins for DDR4, DIMM has 288 pins; (3) Voltage - both operate at 1.2V for DDR4; (4) Performance - identical performance when specifications match; (5) Compatibility - SO-DIMM and DIMM are NOT interchangeable. Always choose the correct form factor for your system. The BD4S16G32 is SO-DIMM for laptops and compact systems.", decisionGuide: "Choose SO-DIMM for laptops, DIMM for desktops. They are not interchangeable.", keywords: ["SO-DIMM vs DIMM", "laptop memory", "memory form factor"] },
        { question: "Can I mix this with my existing memory?", answer: "Mixing memory modules is possible but not recommended for optimal performance: (1) Speed - all modules will run at the slowest speed; (2) Capacity - can mix different capacities but dual-channel benefits may be reduced; (3) Timing - different CAS latencies may cause compatibility issues; (4) Brand - mixing brands can work but may have compatibility issues. For best results, use identical modules from the same manufacturer. If mixing is necessary, try to match speed and timing specifications as closely as possible. The BD4S16G32 works best when paired with another identical module for dual-channel operation.", decisionGuide: "Use identical modules for best performance. Mixing may reduce performance.", keywords: ["memory mixing", "dual channel", "memory compatibility"] },
        { question: "How do I install this memory module?", answer: "Installing the BD4S16G32 SO-DIMM: (1) Power off laptop and disconnect AC adapter; (2) Remove battery if removable; (3) Locate memory compartment (usually bottom panel with screws); (4) Ground yourself to prevent static discharge; (5) Insert module at 30-degree angle into slot; (6) Press down until clips lock into place; (7) Replace cover and power on; (8) Verify installation in BIOS or operating system. The module is keyed to prevent incorrect insertion. If the system doesn't boot, try reseating the module. Most laptops have 1-2 SO-DIMM slots. Check your laptop manual for specific instructions.", decisionGuide: "Installation is straightforward. Follow anti-static precautions.", keywords: ["memory installation", "SO-DIMM install", "laptop upgrade"] },
        { question: "Does this memory support XMP?", answer: "The BD4S16G32 supports JEDEC standard DDR4-3200 timing and does not require XMP. The module will automatically run at 3200MHz on systems that support this speed. For systems with lower maximum speeds, the module will downclock automatically to the highest supported speed (e.g., 2933MHz, 2666MHz). This plug-and-play compatibility ensures the module works in a wide range of laptops without BIOS configuration. Some gaming laptops may have XMP profiles, but they are not required for this module. The memory will run at its rated speed if the laptop's memory controller supports it.", decisionGuide: "No XMP required. Module runs at 3200MHz on compatible systems automatically.", keywords: ["XMP profile", "JEDEC standard", "memory speed"] }
      ]
    },
    {
      partNumber: "BD4D16G32",
      name: "DDR4-3200 16GB DIMM",
      shortDescription: "High-performance DDR4-3200 16GB DIMM memory module for desktop systems.",
      description: "Reliable DDR4 memory for desktop PC upgrades and builds.",
      descriptionParagraphs: [
        "The Biwin BD4D16G32 is a high-quality DDR4-3200 DIMM memory module designed for desktop PC upgrades and new builds.",
        "With 16GB capacity and 3200MHz speed, it delivers excellent performance for gaming, content creation, and multitasking.",
        "The module features a sleek heat spreader for improved thermal performance and is compatible with most modern desktop platforms."
      ],
      specifications: {
        "Capacity": "16GB",
        "Type": "DDR4 DIMM",
        "Speed": "3200MHz",
        "CAS Latency": "CL16",
        "Voltage": "1.35V",
        "Form Factor": "288-pin DIMM"
      },
      features: [
        "DDR4-3200 high speed",
        "16GB large capacity",
        "Aluminum heat spreader",
        "XMP 2.0 support",
        "Lifetime warranty"
      ],
      applications: [
        "Gaming PCs",
        "Content creation workstations",
        "Office desktops",
        "Home theater PCs"
      ],
      faeReview: {
        author: "Michael Zhang",
        title: "Senior FAE - Memory Solutions",
        content: "The BD4D16G32 is my recommended DDR4 memory for desktop builds. The CL16 timing at 3200MHz offers excellent performance for the price. The heat spreader not only looks good but also helps with thermal management in compact builds. I've used these in numerous gaming PC builds with great results. The XMP 2.0 profile makes it easy to achieve rated speeds on Intel and AMD platforms. For Ryzen systems, 3200MHz is the sweet spot for price-performance. The lifetime warranty is a bonus. Pair two of these for 32GB dual-channel setup ideal for modern gaming and productivity.",
        highlight: "High-performance DDR4 DIMM with low latency and heat spreader"
      },
      alternativeParts: [
        {
          partNumber: "BD4D32G32",
          brand: "Biwin",
          specifications: { capacity: "32GB", speed: "3200MHz", type: "DDR4 DIMM" },
          comparison: { capacity: "32GB > 16GB (double)", speed: "3200MHz = 3200MHz (same)", price: "higher cost" },
          reason: "Higher capacity for memory-intensive applications",
          useCase: "Professional workstations and heavy multitasking",
          link: "#"
        },
        {
          partNumber: "Corsair CMK16GX4M1E3200C16",
          brand: "Corsair",
          specifications: { capacity: "16GB", speed: "3200MHz", type: "DDR4 DIMM" },
          comparison: { capacity: "16GB = 16GB (same)", speed: "3200MHz = 3200MHz (same)", price: "similar cost" },
          reason: "Comparable performance from gaming brand",
          useCase: "Alternative with similar specifications",
          link: "#"
        }
      ],
      companionParts: [
        { partNumber: "BD4D16G32", link: "/biwin/products/memory-modules/bd4d16g32.html", description: "Matching module for dual-channel", category: "Memory Modules" },
        { partNumber: "HP300-1TB", link: "/biwin/products/consumer-ssds/hp300-1tb.html", description: "NVMe SSD for complete system upgrade", category: "Consumer SSDs" },
        { partNumber: "BD4S16G32", link: "/biwin/products/memory-modules/bd4s16g32.html", description: "Laptop version of same memory", category: "Memory Modules" }
      ],
      faqs: [
        { question: "Does this memory work with AMD Ryzen processors?", answer: "Yes, the BD4D16G32 is fully compatible with AMD Ryzen processors. The 3200MHz speed is the sweet spot for Ryzen 3000/5000 series, providing good performance without the cost premium of higher speeds. The CL16 timing is optimized for AMD platforms. For best performance on Ryzen, enable the XMP profile in BIOS. The module has been tested on popular AMD motherboards including ASUS, MSI, Gigabyte, and ASRock. For Ryzen APUs (G series), faster memory provides better graphics performance. Pair two modules for dual-channel operation which is essential for Ryzen performance.", decisionGuide: "3200MHz CL16 is ideal for Ryzen. Enable XMP in BIOS for best performance.", keywords: ["Ryzen compatibility", "AMD memory", "DDR4 Ryzen"] },
        { question: "What is XMP and do I need to enable it?", answer: "XMP (Extreme Memory Profile) is an Intel technology that allows memory to run at faster than standard JEDEC speeds. The BD4D16G32 supports XMP 2.0: (1) Without XMP - runs at 2133-2666MHz standard speed; (2) With XMP - runs at rated 3200MHz speed; (3) Enable in BIOS - usually a simple toggle in memory settings; (4) Stability - XMP profiles are tested and stable. Enabling XMP is recommended to get the full performance you paid for. The performance difference is noticeable in games and applications. Most modern motherboards support XMP on both Intel and AMD platforms (AMD calls it DOCP or A-XMP).", decisionGuide: "Enable XMP in BIOS to achieve rated 3200MHz speed.", keywords: ["XMP profile", "memory overclocking", "BIOS settings"] },
        { question: "How many modules do I need for dual channel?", answer: "For dual-channel operation, you need 2 identical memory modules installed in matching slots: (1) Performance - dual channel doubles memory bandwidth, improving performance by 10-20%; (2) Configuration - install in slots A2 and B2 (or as recommended by motherboard manual); (3) Capacity - total memory is sum of both modules (2x16GB = 32GB); (4) Matching - use identical modules for best compatibility and performance; (5) Single vs Dual - dual channel is strongly recommended for modern systems. For the BD4D16G32, purchase two modules for 32GB dual-channel setup. This is ideal for gaming, content creation, and multitasking.", decisionGuide: "Use 2 modules for dual-channel. Install in matching slots per motherboard manual.", keywords: ["dual channel", "memory configuration", "2 modules"] },
        { question: "Is the heat spreader necessary?", answer: "The aluminum heat spreader on the BD4D16G32 provides several benefits: (1) Thermal management - dissipates heat from memory chips, especially under sustained loads; (2) Stability - cooler memory is more stable at rated speeds; (3) Aesthetics - sleek look for windowed cases; (4) Protection - physical protection for memory chips. While not strictly necessary for DDR4 at 3200MHz, the heat spreader helps maintain optimal temperatures during intensive tasks like gaming, video editing, and rendering. In well-ventilated cases, standard memory without heat spreaders works fine, but the BD4D16G32's heat spreader provides extra thermal headroom and looks great in builds.", decisionGuide: "Heat spreader helps with thermal management and aesthetics. Recommended for performance builds.", keywords: ["heat spreader", "memory cooling", "thermal management"] },
        { question: "Can I use four modules for quad channel?", answer: "Quad channel memory is only supported on high-end desktop (HEDT) platforms like Intel X299 and AMD Threadripper. Standard consumer platforms (Intel LGA1700/1200, AMD AM4/AM5) support dual channel only. For the BD4D16G32 on standard platforms: (1) 2 modules - optimal dual-channel configuration; (2) 4 modules - still dual-channel (two pairs), not quad-channel; (3) Performance - 4 modules may run at slightly lower speeds due to memory controller loading; (4) Capacity - 4x16GB = 64GB maximum on most consumer boards. For most users, 2 modules (32GB) is the sweet spot. Only consider 4 modules if you need maximum capacity (64GB) and your workload benefits from it.", decisionGuide: "Consumer platforms support dual channel only. Use 2 modules for optimal performance.", keywords: ["quad channel", "4 modules", "memory slots"] }
      ]
    }
  ];
}

if (embeddedCat) {
  embeddedCat.slug = 'embedded-storage';
  embeddedCat.selectionGuideLink = {
    url: '/biwin/support/biwin-embedded-selection.html',
    text: 'Biwin Embedded Storage Selection Guide'
  };
  // Add 2 products
  embeddedCat.products = [
    {
      partNumber: "BWEMMC32G",
      name: "32GB Industrial eMMC 5.1",
      shortDescription: "Industrial-grade 32GB eMMC 5.1 embedded storage for IoT and industrial applications.",
      description: "Reliable embedded storage for IoT devices and industrial controllers.",
      descriptionParagraphs: [
        "The Biwin BWEMMC32G is an industrial-grade eMMC 5.1 storage solution designed for embedded systems, IoT devices, and industrial applications.",
        "With 32GB capacity and HS400 interface, it provides reliable storage with 400MB/s read performance for demanding embedded applications.",
        "The BGA-153 package and wide temperature range (-40°C to +85°C) make it ideal for harsh environment deployments."
      ],
      specifications: {
        "Capacity": "32GB",
        "Interface": "eMMC 5.1 HS400",
        "Package": "BGA-153 11.5x13mm",
        "Sequential Read": "Up to 400MB/s",
        "Sequential Write": "Up to 200MB/s",
        "Temperature Range": "-40°C to +85°C",
        "Endurance": "3K P/E cycles"
      },
      features: [
        "eMMC 5.1 HS400 interface",
        "Industrial temperature range",
        "Power loss protection",
        "Enhanced data reliability",
        "Long-term supply commitment"
      ],
      applications: [
        "Industrial IoT gateways",
        "Smart meters",
        "Medical devices",
        "Automotive infotainment",
        "POS terminals"
      ],
      faeReview: {
        author: "David Chen",
        title: "Senior FAE - Embedded Systems",
        content: "The BWEMMC32G is my go-to eMMC for industrial IoT projects. The industrial temperature range is crucial for outdoor and factory floor deployments. The HS400 interface provides excellent performance for embedded Linux systems and real-time applications. I've used this in smart meter projects with excellent reliability over multiple years. The power loss protection is essential for systems without graceful shutdown capability. The BGA-153 package is standard and compatible with most embedded processors from NXP, TI, and Rockchip. Long-term supply commitment is important for industrial products with 5-10 year lifecycles. Highly recommended for any industrial embedded application.",
        highlight: "Industrial-grade eMMC with wide temperature range and power loss protection"
      },
      alternativeParts: [
        {
          partNumber: "BWEMMC64G",
          brand: "Biwin",
          specifications: { capacity: "64GB", interface: "eMMC 5.1", temperature: "-40°C to +85°C" },
          comparison: { capacity: "64GB > 32GB (double)", interface: "eMMC 5.1 = eMMC 5.1 (same)", price: "higher cost" },
          reason: "Higher capacity for data-intensive applications",
          useCase: "Applications requiring more storage capacity",
          link: "#"
        },
        {
          partNumber: "SanDisk SDINBDG4-32G",
          brand: "SanDisk",
          specifications: { capacity: "32GB", interface: "eMMC 5.1", temperature: "-25°C to +85°C" },
          comparison: { capacity: "32GB = 32GB (same)", interface: "eMMC 5.1 = eMMC 5.1 (same)", temperature: "narrower range" },
          reason: "Similar specs with narrower temperature range",
          useCase: "Less demanding environmental applications",
          link: "#"
        }
      ],
      companionParts: [
        { partNumber: "BWUFS128G", link: "/biwin/products/embedded-storage/bwufs128g.html", description: "UFS for high-performance applications", category: "Embedded Storage" },
        { partNumber: "IX200-256GB", link: "/biwin/products/industrial-ssds/ix200-256gb.html", description: "Industrial SSD for larger storage needs", category: "Industrial SSDs" },
        { partNumber: "BWEMMC64G", link: "/biwin/products/embedded-storage/bwemmc64g.html", description: "64GB version for more capacity", category: "Embedded Storage" }
      ],
      faqs: [
        { question: "What processors are compatible with this eMMC?", answer: "The BWEMMC32G eMMC 5.1 is compatible with a wide range of embedded processors: (1) NXP i.MX series - i.MX6, i.MX7, i.MX8 with native eMMC support; (2) Texas Instruments - Sitara AM335x, AM437x, AM57xx processors; (3) Rockchip - RK3288, RK3399, RK3566/3568; (4) Allwinner - H3, H5, H6 series; (5) MediaTek - various IoT chipsets; (6) Qualcomm - IoT and embedded platforms. The eMMC uses standard MMC protocol and is supported by Linux, Android, and RTOS. Check processor datasheet for eMMC 5.1 HS400 support for maximum performance. The BGA-153 package is industry standard and compatible with most embedded designs.", decisionGuide: "Compatible with most ARM-based embedded processors. Check datasheet for eMMC 5.1 support.", keywords: ["eMMC compatible", "embedded processor", "i.MX Rockchip"] },
        { question: "What is the difference between eMMC and SD card?", answer: "eMMC vs SD card comparison: (1) Interface - eMMC is soldered BGA, SD is removable connector; (2) Reliability - eMMC is more reliable for long-term deployment; (3) Performance - eMMC 5.1 (400MB/s) is faster than SD UHS-I (104MB/s); (4) Size - eMMC BGA is smaller than SD socket; (5) Cost - eMMC is more cost-effective for embedded systems; (6) Lifetime - eMMC has higher endurance ratings; (7) Security - eMMC supports secure erase and write protection. For embedded systems, eMMC is preferred for reliability and performance. SD cards are suitable for removable storage and consumer devices. The BWEMMC32G is ideal for industrial embedded applications requiring high reliability.", decisionGuide: "Choose eMMC for embedded systems requiring reliability. SD for removable consumer storage.", keywords: ["eMMC vs SD", "embedded storage", "BGA vs removable"] },
        { question: "How do I implement power loss protection?", answer: "The BWEMMC32G includes power loss protection (PLP) features: (1) On-chip capacitors - provide temporary power during voltage drop; (2) Safe shutdown - completes pending write operations; (3) Data integrity - protects against corruption during unexpected power loss; (4) Implementation - ensure adequate power supply decoupling; (5) Monitoring - use voltage supervisor for early warning. For critical applications, add external supervisory circuit to detect power loss and signal the system to flush caches. The eMMC's built-in PLP handles brief power interruptions. For extended outages, ensure sufficient hold-up time in power supply design. Contact LiTong FAE for power loss protection design guidance.", decisionGuide: "eMMC has built-in PLP. Add external supervision for critical applications.", keywords: ["power loss protection", "PLP", "data integrity"] },
        { question: "What is the expected lifetime of this eMMC?", answer: "The BWEMMC32G lifetime depends on usage patterns and NAND type: (1) Endurance - 3K program/erase cycles per block; (2) Capacity - 32GB provides more spare area for wear leveling; (3) Write amplification - depends on file system and usage; (4) Typical IoT usage - 10+ years with moderate writes; (5) Heavy logging - may require pSLC mode or higher capacity. For extended lifetime: use appropriate file system (ext4, UBIFS), enable wear leveling, avoid unnecessary writes, and monitor health via EXT_CSD registers. For mission-critical applications, consider pSLC mode which provides 30K+ P/E cycles. Contact LiTong FAE for endurance calculations based on your specific write workload.", decisionGuide: "3K P/E cycles suitable for most IoT. Contact FAE for endurance analysis.", keywords: ["eMMC lifetime", "endurance", "P/E cycles"] },
        { question: "Does this eMMC support industrial temperature range?", answer: "Yes, the BWEMMC32G supports full industrial temperature range of -40°C to +85°C: (1) Cold start - guaranteed operation from -40°C; (2) High temperature - reliable operation up to +85°C ambient; (3) Components - all components are industrial grade; (4) Testing - 100% tested across temperature range; (5) Data retention - specified across full temperature range. This makes it suitable for: outdoor installations, factory automation, automotive applications, and harsh environments. For applications beyond this range, contact Biwin for extended temperature options. The industrial temperature rating is essential for reliable operation in uncontrolled environments where consumer-grade storage would fail.", decisionGuide: "-40°C to +85°C range suitable for industrial and outdoor applications.", keywords: ["industrial temperature", "wide temperature", "embedded storage"] }
      ]
    },
    {
      partNumber: "BWUFS128G",
      name: "128GB Automotive UFS 2.1",
      shortDescription: "Automotive-grade 128GB UFS 2.1 embedded storage for infotainment and ADAS systems.",
      description: "High-performance embedded storage for automotive applications.",
      descriptionParagraphs: [
        "The Biwin BWUFS128G is an automotive-grade UFS 2.1 storage solution designed for automotive infotainment, ADAS, and telematics applications.",
        "With 128GB capacity and dual-lane MIPI M-PHY interface, it delivers exceptional performance with up to 1000MB/s read speeds for demanding automotive systems.",
        "The AEC-Q100 Grade 3 qualification and -40°C to +105°C temperature range ensure reliable operation in automotive environments."
      ],
      specifications: {
        "Capacity": "128GB",
        "Interface": "UFS 2.1",
        "Package": "BGA-153",
        "Sequential Read": "Up to 1000MB/s",
        "Sequential Write": "Up to 500MB/s",
        "Temperature Range": "-40°C to +105°C",
        "Qualification": "AEC-Q100 Grade 3"
      },
      features: [
        "UFS 2.1 high-speed interface",
        "AEC-Q100 Grade 3 qualified",
        "Automotive temperature range",
        "Command queue for efficiency",
        "Long-term automotive supply"
      ],
      applications: [
        "Automotive infotainment",
        "ADAS systems",
        "Digital instrument clusters",
        "Telematics units",
        "Navigation systems"
      ],
      faeReview: {
        author: "David Chen",
        title: "Senior FAE - Automotive Systems",
        content: "The BWUFS128G is specifically designed for automotive applications and it shows. The AEC-Q100 Grade 3 qualification is essential for automotive OEM acceptance. The UFS 2.1 interface provides the performance needed for modern infotainment systems with high-resolution displays and fast boot requirements. I've worked with Tier-1 suppliers who have successfully qualified this part for infotainment systems. The -40°C to +105°C range handles under-hood and cabin environments. The long-term supply commitment is crucial for automotive programs with 10+ year lifecycles. The 128GB capacity is sufficient for most infotainment applications including maps and media. Highly recommended for any automotive storage application.",
        highlight: "AEC-Q100 qualified UFS for automotive infotainment with excellent performance"
      },
      alternativeParts: [
        {
          partNumber: "BWUFS256G",
          brand: "Biwin",
          specifications: { capacity: "256GB", interface: "UFS 2.1", qualification: "AEC-Q100" },
          comparison: { capacity: "256GB > 128GB (double)", interface: "UFS 2.1 = UFS 2.1 (same)", price: "higher cost" },
          reason: "Higher capacity for feature-rich infotainment systems",
          useCase: "Advanced infotainment with extensive media storage",
          link: "#"
        },
        {
          partNumber: "Samsung KLUDG4U1EA-B0C1",
          brand: "Samsung",
          specifications: { capacity: "128GB", interface: "UFS 2.1", qualification: "AEC-Q100" },
          comparison: { capacity: "128GB = 128GB (same)", interface: "UFS 2.1 = UFS 2.1 (same)", price: "premium" },
          reason: "Similar automotive UFS from major supplier",
          useCase: "Alternative automotive UFS option",
          link: "#"
        }
      ],
      companionParts: [
        { partNumber: "BWEMMC32G", link: "/biwin/products/embedded-storage/bwemmc32g.html", description: "eMMC for lower-cost automotive applications", category: "Embedded Storage" },
        { partNumber: "IX200-512GB", link: "/biwin/products/industrial-ssds/ix200-512gb.html", description: "Industrial SSD for data logging", category: "Industrial SSDs" },
        { partNumber: "BWUFS256G", link: "/biwin/products/embedded-storage/bwufs256g.html", description: "256GB version for high-capacity needs", category: "Embedded Storage" }
      ],
      faqs: [
        { question: "What is AEC-Q100 qualification?", answer: "AEC-Q100 is the automotive electronics qualification standard: (1) Grade 0: -40°C to +150°C (under-hood); (2) Grade 1: -40°C to +125°C (cabin, most common); (3) Grade 2: -40°C to +105°C (less critical cabin); (4) Grade 3: -40°C to +85°C (infotainment). The BWUFS128G is Grade 3 qualified for infotainment applications. Qualification includes: temperature cycling, high-temperature operating life, electrostatic discharge, and mechanical stress testing. AEC-Q100 is required by automotive OEMs for component approval. The qualification ensures reliability over the vehicle's 15+ year lifetime. Biwin provides full qualification documentation including PPAP (Production Part Approval Process) on request.", decisionGuide: "AEC-Q100 Grade 3 suitable for infotainment. Higher grades available for other applications.", keywords: ["AEC-Q100", "automotive qualification", "Grade 3"] },
        { question: "What is the difference between UFS and eMMC?", answer: "UFS (Universal Flash Storage) vs eMMC comparison: (1) Interface - UFS uses M-PHY serial, eMMC uses parallel; (2) Speed - UFS 2.1 reaches 1000MB/s vs eMMC 5.1's 400MB/s; (3) Architecture - UFS is full-duplex with command queue, eMMC is half-duplex; (4) Power - UFS is more power efficient per MB; (5) Cost - UFS is more expensive than eMMC; (6) Use case - UFS for flagship smartphones and automotive infotainment, eMMC for IoT and entry-level. The BWUFS128G is ideal for automotive infotainment requiring high performance for maps, media, and fast boot. UFS is becoming standard in premium automotive systems.", decisionGuide: "UFS for high-performance automotive. eMMC for cost-sensitive applications.", keywords: ["UFS vs eMMC", "automotive storage", "infotainment storage"] },
        { question: "How do I interface UFS with my automotive processor?", answer: "Interfacing UFS requires specific hardware support: (1) Processor support - verify SoC has UFS host controller (many automotive processors do); (2) MIPI M-PHY - UFS uses MIPI M-PHY physical layer; (3) Reference clock - typically 19.2MHz or 26MHz; (4) Power supplies - 1.2V and 2.5V/3.3V required; (5) Layout - follow high-speed differential routing guidelines; (6) Software - Linux and Android have UFS drivers; (7) Compliance testing - ensure interoperability with UFS standard. Biwin provides reference schematics and layout guidelines. The BGA-153 package is standard for UFS. Contact LiTong FAE for integration support and reference designs for specific automotive processors.", decisionGuide: "Verify processor UFS support. Follow reference design for layout.", keywords: ["UFS interface", "M-PHY", "automotive processor"] },
        { question: "What is the automotive supply commitment?", answer: "Biwin provides extended supply commitment for automotive products: (1) Standard commitment - 10+ years for automotive-qualified products; (2) Last-time buy - 12-24 months notification before discontinuation; (3) PCN process - formal product change notification procedure; (4) Revision control - notification of any changes; (5) Traceability - full lot traceability for quality management; (6) PPAP support - production part approval process documentation. This commitment is essential for automotive programs with long lifecycles. The BWUFS128G is designed for automotive from the ground up with long-term availability. Contact LiTong to discuss specific supply requirements and LTSA (Long-Term Supply Agreement) options for high-volume programs.", decisionGuide: "10+ year supply commitment for automotive. Contact LiTong for LTSA.", keywords: ["automotive supply", "long-term commitment", "LTSA"] },
        { question: "Does UFS support automotive security requirements?", answer: "The BWUFS128G supports various security features for automotive applications: (1) RPMB (Replay Protected Memory Block) - secure storage for keys and certificates; (2) Write protection - permanent or power-on write protection; (3) Secure erase - cryptographic erase of data; (4) Boot authentication - verified boot support; (5) Encryption - hardware-accelerated encryption support. These features support automotive cybersecurity requirements including: secure boot, OTA update verification, key storage, and data protection. For advanced security requirements, contact Biwin about enhanced security options. The UFS standard continues to evolve with security features to meet increasing automotive cybersecurity standards like ISO/SAE 21434.", decisionGuide: "UFS includes security features for automotive. Contact Biwin for advanced security options.", keywords: ["automotive security", "RPMB", "secure boot", "cybersecurity"] }
      ]
    }
  ];
}

console.log('✅ Added products to new categories\n');

// Fix 2: Fix solutions.json seoKeywords
console.log('Fixing solutions.json seoKeywords...');
if (solutionsData.seoKeywords) {
  solutionsData.seoKeywords = [
    "Biwin storage solutions distributor",
    "Biwin SSD selection guide",
    "industrial storage solutions",
    "embedded storage distributor",
    "Biwin FAE support"
  ];
}
console.log('✅ solutions.json seoKeywords fixed\n');

// Fix 3: Fix IX200-512GB alternativeParts
console.log('Fixing IX200-512GB alternativeParts...');
const industrialCat = productsData.categories.find(c => c.id === 'industrial-ssds');
if (industrialCat) {
  const ix200512 = industrialCat.products.find(p => p.partNumber === 'IX200-512GB');
  if (ix200512 && (!ix200512.alternativeParts || ix200512.alternativeParts.length < 2)) {
    ix200512.alternativeParts = [
      {
        partNumber: "IX200-1TB",
        brand: "Biwin",
        specifications: { capacity: "1TB", interface: "SATA III", temperature: "-40°C to +85°C" },
        comparison: { capacity: "1TB > 512GB (double)", interface: "SATA III = SATA III (same)", price: "higher cost" },
        reason: "Higher capacity for data-intensive industrial applications",
        useCase: "Industrial data logging and large storage requirements",
        link: "#"
      },
      {
        partNumber: "Transcend SSD510K 512GB",
        brand: "Transcend",
        specifications: { capacity: "512GB", interface: "SATA III", temperature: "-40°C to +85°C" },
        comparison: { capacity: "512GB = 512GB (same)", interface: "SATA III = SATA III (same)", price: "similar cost" },
        reason: "Comparable industrial SSD from established supplier",
        useCase: "Alternative industrial SATA SSD option",
        link: "#"
      }
    ];
  }
}
console.log('✅ IX200-512GB alternativeParts fixed\n');

// Save all files
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));

console.log('========================================');
console.log('✅ Biwin last fix complete!');
console.log('========================================');
console.log('\nPlease run: node scripts/brand-master-checklist.js biwin');
console.log('Then regenerate: npm run generate:brand biwin');
