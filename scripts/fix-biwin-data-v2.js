const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'biwin');

// Fix products.json - add alternativeParts and companionParts to IX200-512GB
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const industrialCat = products.categories.find(c => c.id === 'industrial-ssds');
const ix512Product = industrialCat.products.find(p => p.partNumber === 'IX200-512GB');

if (ix512Product) {
  ix512Product.alternativeParts = [
    {
      partNumber: "IX200-256GB",
      brand: "Biwin",
      specifications: {
        Capacity: "256GB",
        "Temperature Range": "-40°C to +85°C",
        TBW: "1000TB"
      },
      comparison: {
        Capacity: "256GB < 512GB (less)",
        "Temperature Range": "-40°C to +85°C = -40°C to +85°C (same)",
        TBW: "1000TB < 2000TB (less)",
        "Price per GB": "Higher = Lower (512GB better value)"
      },
      reason: "Lower capacity option for boot drive or lighter usage applications",
      useCase: "Applications with lower storage requirements",
      link: "/biwin/products/industrial-ssds/ix200-256gb.html"
    }
  ];
  
  ix512Product.companionParts = [
    {
      partNumber: "IX200-256GB",
      link: "/biwin/products/industrial-ssds/ix200-256gb.html",
      description: "Lower capacity version for boot drive applications",
      category: "Industrial SSDs"
    },
    {
      partNumber: "IX-NVMe-512GB",
      link: "/biwin/products/industrial-ssds/ix-nvme-512gb.html",
      description: "NVMe version for high-performance industrial systems",
      category: "Industrial SSDs"
    },
    {
      partNumber: "Industrial DDR4-3200-8GB",
      link: "/biwin/products/memory-modules/industrial-ddr4-3200-8gb.html",
      description: "Industrial-grade memory for complete system",
      category: "Memory Modules"
    }
  ];
  
  // Fix descriptionParagraphs length
  ix512Product.descriptionParagraphs = [
    "The Biwin IX200 512GB industrial SATA SSD provides high-capacity storage for demanding industrial applications.",
    "With the same rugged design as the 256GB model, it offers double the capacity while maintaining reliability.",
    "The 2000TBW endurance rating makes it ideal for data logging and storage-intensive applications."
  ];
}

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Fixed products.json');

// Fix news.json - rewrite to remove control characters
const newsPath = path.join(dataDir, 'news.json');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

// Clean up any control characters in all string fields
function cleanString(obj) {
  if (typeof obj === 'string') {
    return obj.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '');
  }
  if (Array.isArray(obj)) {
    return obj.map(cleanString);
  }
  if (typeof obj === 'object' && obj !== null) {
    const cleaned = {};
    for (const key in obj) {
      cleaned[key] = cleanString(obj[key]);
    }
    return cleaned;
  }
  return obj;
}

const cleanedNews = cleanString(news);
fs.writeFileSync(newsPath, JSON.stringify(cleanedNews, null, 2));
console.log('✅ Fixed news.json');

console.log('\n✅ All Biwin data files fixed!');
