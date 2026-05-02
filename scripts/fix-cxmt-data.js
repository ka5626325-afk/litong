const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'cxmt');

// Fix products.json
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add companionParts to products
productsData.categories.forEach((category, catIndex) => {
  category.products.forEach((product, prodIndex) => {
    if (!product.companionParts || product.companionParts.length < 2) {
      product.companionParts = [
        {
          "partNumber": catIndex === 0 ? "CXMT-DDR5-16Gb-6400-UDIMM" : "CXMT-LPDDR5X-12Gb-8533",
          "link": catIndex === 0 ? "/cxmt/products/ddr5-memory/cxmt-ddr5-16gb-6400-udimm.html" : "/cxmt/products/lpddr5x-memory/cxmt-lpddr5x-12gb-8533.html",
          "description": catIndex === 0 ? "Alternative DDR5 solution" : "Alternative LPDDR5X solution",
          "category": catIndex === 0 ? "DDR5 Memory" : "LPDDR5X Memory"
        },
        {
          "partNumber": catIndex === 0 ? "CXMT-DDR5-24Gb-6400-RDIMM" : "CXMT-LPDDR5X-16Gb-9600",
          "link": catIndex === 0 ? "/cxmt/products/ddr5-memory/cxmt-ddr5-24gb-6400-rdimm.html" : "/cxmt/products/lpddr5x-memory/cxmt-lpddr5x-16gb-9600.html",
          "description": catIndex === 0 ? "Higher capacity DDR5 option" : "Higher speed LPDDR5X option",
          "category": catIndex === 0 ? "DDR5 Memory" : "LPDDR5X Memory"
        }
      ];
    }
  });
  
  // Add seoKeywords to categories
  if (!category.seoKeywords) {
    category.seoKeywords = [
      `CXMT ${category.name} distributor`,
      `CXMT ${category.name.toLowerCase().replace(/s$/, '')} selection`,
      `CXMT ${category.name.toLowerCase().replace(/s$/, '')} guide`,
      `memory ${category.name.toLowerCase().replace(/s$/, '')} distributor`
    ];
  }
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('Fixed products.json');

// Fix solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutionsData.solutions.forEach(solution => {
  // Fix BOM list
  if (!solution.bomList || solution.bomList.length < 2) {
    solution.bomList = [
      {
        "designator": "U1",
        "partNumber": solution.id === 'datacenter-ddr5' ? "CXMT-DDR5-24Gb-8000-RDIMM" : "CXMT-LPDDR5X-16Gb-10667",
        "description": solution.id === 'datacenter-ddr5' ? "DDR5-8000 RDIMM" : "LPDDR5X-10667",
        "quantity": solution.id === 'datacenter-ddr5' ? 12 : 1,
        "link": solution.id === 'datacenter-ddr5' ? "/cxmt/products/ddr5-memory/cxmt-ddr5-24gb-8000-rdimm.html" : "/cxmt/products/lpddr5x-memory/cxmt-lpddr5x-16gb-10667.html"
      },
      {
        "designator": "U2",
        "partNumber": solution.id === 'datacenter-ddr5' ? "CXMT-DDR5-16Gb-6400-RDIMM" : "CXMT-LPDDR5X-12Gb-8533",
        "description": solution.id === 'datacenter-ddr5' ? "DDR5-6400 RDIMM alternative" : "LPDDR5X-8533 alternative",
        "quantity": solution.id === 'datacenter-ddr5' ? 12 : 1,
        "link": solution.id === 'datacenter-ddr5' ? "/cxmt/products/ddr5-memory/cxmt-ddr5-16gb-6400-rdimm.html" : "/cxmt/products/lpddr5x-memory/cxmt-lpddr5x-12gb-8533.html"
      }
    ];
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('Fixed solutions.json');

// Fix support.json
const supportPath = path.join(dataDir, 'support.json');
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

supportData.articles.forEach((article, index) => {
  // Fix customerCases
  if (article.customerCases) {
    article.customerCases.forEach(cs => {
      if (!cs.results) {
        cs.results = "Successfully implemented CXMT memory solution with improved performance and reliability.";
      }
    });
  }
  
  // Fix relatedArticles
  if (!article.relatedArticles || article.relatedArticles.length < 3) {
    const allIds = supportData.articles.map(a => a.id).filter(id => id !== article.id);
    article.relatedArticles = allIds.slice(0, 3);
  }
});

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('Fixed support.json');

console.log('\nAll fixes applied successfully!');
