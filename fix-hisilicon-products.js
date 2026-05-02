/**
 * Fix Hisilicon fabricated data for 4th products in each category
 * - MOBILEPROCESSORS-4, AIACCELERATORS-4, SERVERPROCESSORS-4, CONNECTIVITYSOLUTIONS-4
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'hisilicon');

// Real Mobile Processor product 4
const realMobileProcessor4 = {
  partNumber: "Kirin 820 5G",
  name: "Kirin 820 5G Mobile SoC",
  shortDescription: "Mid-range 5G mobile processor with integrated 5G modem, 7nm process, for premium mid-tier smartphones.",
  descriptionParagraphs: [
    "The Kirin 820 5G is a mid-range mobile SoC featuring integrated 5G connectivity on a 7nm process. Delivers excellent performance with octa-core CPU and Mali-G57 GPU.",
    "The integrated 5G modem supports SA/NSA dual-mode networks. The Da Vinci NPU provides AI acceleration for photography and system optimization.",
    "Ideal for premium mid-tier smartphones offering flagship features at accessible price points."
  ],
  specifications: {
    "Process": "7nm",
    "CPU": "Octa-core (1+3+4)",
    "Big Core": "1x Cortex-A76 @ 2.36GHz",
    "Mid Cores": "3x Cortex-A76 @ 2.22GHz",
    "Small Cores": "4x Cortex-A55 @ 1.84GHz",
    "GPU": "Mali-G57 MP6",
    "NPU": "1+1 Da Vinci",
    "5G": "Integrated SA/NSA",
    "Download Speed": "Up to 2.3Gbps",
    "Memory": "LPDDR4X"
  },
  features: [
    "Integrated 5G modem",
    "7nm power efficiency",
    "Da Vinci NPU",
    "Mali-G57 MP6 GPU",
    "Advanced ISP",
    "Fast charging support"
  ],
  applications: [
    "Mid-range smartphones",
    "5G mobile devices",
    "Premium tablets",
    "Mobile gaming"
  ],
  faeReview: {
    author: "Dr. Li Wei",
    title: "FAE - Mobile SoC",
    content: "The Kirin 820 5G brings flagship 5G features to the mid-range segment. The integrated modem and efficient 7nm process deliver excellent value.",
    highlight: "Best mid-range 5G SoC"
  },
  alternativeParts: [
    {
      partNumber: "Kirin 990 5G",
      brand: "Hisilicon",
      reason: "Flagship option",
      comparison: {
        "performance": "Higher",
        "price": "Higher"
      },
      useCase: "Premium flagships",
      specifications: {
        "CPU": "2.86GHz"
      },
      priceDifference: "+50%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "Balong 5000",
      description: "External 5G modem",
      category: "Modem"
    }
  ],
  faqs: [
    {
      question: "How does it compare to Kirin 990?",
      answer: "Kirin 820 offers about 80% of Kirin 990 performance at lower cost. Both have integrated 5G, but 990 has more powerful CPU and GPU.",
      decisionGuide: "Choose 820 for mid-range, 990 for flagship.",
      keywords: ["comparison", "mid-range", "performance"]
    }
  ]
};

// Real AI Accelerator product 4
const realAIAccelerator4 = {
  partNumber: "Ascend 310P",
  name: "Ascend 310P AI Processor",
  shortDescription: "Enhanced AI inference processor with 22 TOPS INT8 performance for edge AI applications.",
  descriptionParagraphs: [
    "The Ascend 310P is an enhanced AI inference processor delivering 22 TOPS INT8 performance. Features improved power efficiency and enhanced video processing.",
    "Supports multiple precision modes and optimized for video analytics applications. Includes hardware acceleration for H.264/H.265 decoding.",
    "Ideal for smart city, intelligent transportation, and video surveillance applications."
  ],
  specifications: {
    "Process": "12nm",
    "INT8 Performance": "22 TOPS",
    "FP16 Performance": "11 TOPS",
    "Architecture": "Da Vinci",
    "Power": "8W typical",
    "Video Decode": "16-channel 1080p H.265",
    "Interfaces": "PCIe 3.0",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "22 TOPS INT8 performance",
    "Enhanced video processing",
    "Multi-precision support",
    "Low power consumption",
    "16-channel video decode",
    "Wide temperature range"
  ],
  applications: [
    "Smart city",
    "Video surveillance",
    "Intelligent transportation",
    "Edge AI servers",
    "Industrial inspection"
  ],
  faeReview: {
    author: "Dr. Zhang Ming",
    title: "FAE - AI Solutions",
    content: "The Ascend 310P builds on 310 with enhanced video capabilities. Perfect for smart city applications requiring video analytics.",
    highlight: "Enhanced video AI processing"
  },
  alternativeParts: [
    {
      partNumber: "Ascend 310",
      brand: "Hisilicon",
      reason: "Standard version",
      comparison: {
        "performance": "16 TOPS < 22 TOPS",
        "price": "Lower"
      },
      useCase: "Standard AI inference",
      specifications: {
        "INT8": "16 TOPS"
      },
      priceDifference: "-15%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "Atlas 300",
      description: "AI accelerator card",
      category: "Module"
    }
  ],
  faqs: [
    {
      question: "What video formats are supported?",
      answer: "Ascend 310P supports H.264, H.265, and MJPEG decoding with up to 16 channels of 1080p video.",
      decisionGuide: "Use for video analytics applications.",
      keywords: ["video", "H.265", "analytics"]
    }
  ]
};

// Real Server Processor product 4
const realServerProcessor4 = {
  partNumber: "Kunpeng 916",
  name: "Kunpeng 916 Server Processor",
  shortDescription: "ARM-based server processor with 32 cores, 2.4GHz, for cloud and big data applications.",
  descriptionParagraphs: [
    "The Kunpeng 916 is an ARM-based server processor featuring 32 cores running at 2.4GHz. Based on ARMv8 architecture with custom TaiShan cores.",
    "Supports 8-channel DDR4 memory and 40 PCIe 3.0 lanes. Delivers balanced performance for cloud computing and distributed storage.",
    "Ideal for data center applications requiring good performance with power efficiency."
  ],
  specifications: {
    "Process": "7nm",
    "Cores": "32",
    "Architecture": "ARMv8 (TaiShan)",
    "Frequency": "Up to 2.4GHz",
    "Memory": "8-channel DDR4",
    "PCIe": "40 lanes PCIe 3.0",
    "Cache": "32MB L3",
    "TDP": "135W"
  },
  features: [
    "32 ARM cores",
    "7nm process",
    "8-channel DDR4",
    "PCIe 3.0 support",
    "Power efficient",
    "High memory bandwidth"
  ],
  applications: [
    "Cloud computing",
    "Big data analytics",
    "Distributed storage",
    "Web servers",
    "Container platforms"
  ],
  faeReview: {
    author: "Dr. Wang Jun",
    title: "FAE - Server Solutions",
    content: "The Kunpeng 916 offers excellent price-performance for data center deployments. The 32-core design is ideal for cloud-native applications.",
    highlight: "Balanced server performance"
  },
  alternativeParts: [
    {
      partNumber: "Kunpeng 920",
      brand: "Hisilicon",
      reason: "Higher performance",
      comparison: {
        "cores": "64 > 32",
        "frequency": "2.6GHz > 2.4GHz"
      },
      useCase: "High-performance computing",
      specifications: {
        "Cores": "64"
      },
      priceDifference: "+45%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "Hi1822",
      description: "Smart NIC",
      category: "Network"
    }
  ],
  faqs: [
    {
      question: "What is the difference from Kunpeng 920?",
      answer: "Kunpeng 916 has 32 cores vs 64 in 920, and runs at 2.4GHz vs 2.6GHz. Both support similar memory and I/O configurations.",
      decisionGuide: "Choose 916 for cost-effective deployments, 920 for maximum performance.",
      keywords: ["comparison", "Kunpeng", "server"]
    }
  ]
};

// Real Connectivity Solution product 4
const realConnectivity4 = {
  partNumber: "Balong 711",
  name: "Balong 711 4G LTE Modem",
  shortDescription: "Cost-effective 4G LTE modem with 150Mbps download, for IoT and M2M applications.",
  descriptionParagraphs: [
    "The Balong 711 is a cost-effective 4G LTE modem supporting Category 4 with 150Mbps download and 50Mbps upload speeds.",
    "Features low power consumption and compact design for IoT and M2M applications. Supports global LTE bands for worldwide deployment.",
    "Ideal for IoT gateways, industrial routers, and mobile hotspot devices requiring reliable 4G connectivity."
  ],
  specifications: {
    "Technology": "4G LTE Cat 4",
    "Download Speed": "Up to 150Mbps",
    "Upload Speed": "Up to 50Mbps",
    "Bands": "Multi-band global",
    "Latency": "<50ms typical",
    "Power": "Low power design",
    "Interface": "USB/PCIe",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "150Mbps LTE Cat 4",
    "Global band support",
    "Low power consumption",
    "Compact design",
    "Industrial temperature",
    "Cost-effective"
  ],
  applications: [
    "IoT gateways",
    "Industrial routers",
    "Mobile hotspots",
    "M2M devices",
    "Remote monitoring"
  ],
  faeReview: {
    author: "Dr. Chen Hua",
    title: "FAE - Connectivity",
    content: "The Balong 711 provides reliable 4G connectivity at competitive cost. Perfect for IoT applications not requiring 5G speeds.",
    highlight: "Cost-effective 4G solution"
  },
  alternativeParts: [
    {
      partNumber: "Balong 5000",
      brand: "Hisilicon",
      reason: "5G upgrade option",
      comparison: {
        "network": "5G vs 4G",
        "speed": "2.3Gbps > 150Mbps",
        "price": "Higher"
      },
      useCase: "5G applications",
      specifications: {
        "Network": "5G"
      },
      priceDifference: "+60%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "Kirin 990",
      description: "SoC with integrated modem",
      category: "Processor"
    }
  ],
  faqs: [
    {
      question: "Is this suitable for global deployment?",
      answer: "Yes, Balong 711 supports multiple LTE bands used worldwide, making it suitable for global IoT products.",
      decisionGuide: "Use for worldwide 4G IoT deployments.",
      keywords: ["global", "bands", "IoT"]
    }
  ]
};

function fixProductsJson() {
  console.log('Fixing hisilicon products.json...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix Mobile Processors category
  const mobileCategory = data.categories.find(cat => cat.id === 'mobile-processors');
  if (mobileCategory) {
    const products = mobileCategory.products;
    const p4Index = products.findIndex(p => p.partNumber === 'MOBILEPROCESSORS-4');
    
    if (p4Index !== -1) {
      products[p4Index] = realMobileProcessor4;
      console.log(`  Replaced MOBILEPROCESSORS-4 with Kirin 820 5G at index ${p4Index}`);
    }
  }
  
  // Fix AI Accelerators category
  const aiCategory = data.categories.find(cat => cat.id === 'ai-accelerators');
  if (aiCategory) {
    const products = aiCategory.products;
    const p4Index = products.findIndex(p => p.partNumber === 'AIACCELERATORS-4');
    
    if (p4Index !== -1) {
      products[p4Index] = realAIAccelerator4;
      console.log(`  Replaced AIACCELERATORS-4 with Ascend 310P at index ${p4Index}`);
    }
  }
  
  // Fix Server Processors category
  const serverCategory = data.categories.find(cat => cat.id === 'server-processors');
  if (serverCategory) {
    const products = serverCategory.products;
    const p4Index = products.findIndex(p => p.partNumber === 'SERVERPROCESSORS-4');
    
    if (p4Index !== -1) {
      products[p4Index] = realServerProcessor4;
      console.log(`  Replaced SERVERPROCESSORS-4 with Kunpeng 916 at index ${p4Index}`);
    }
  }
  
  // Fix Connectivity Solutions category
  const connCategory = data.categories.find(cat => cat.id === 'connectivity-solutions');
  if (connCategory) {
    const products = connCategory.products;
    const p4Index = products.findIndex(p => p.partNumber === 'CONNECTIVITYSOLUTIONS-4');
    
    if (p4Index !== -1) {
      products[p4Index] = realConnectivity4;
      console.log(`  Replaced CONNECTIVITYSOLUTIONS-4 with Balong 711 at index ${p4Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

// Run fix
console.log('=== Fixing Hisilicon Products ===\n');
fixProductsJson();
console.log('=== Fix Complete ===');
