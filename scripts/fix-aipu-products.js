const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'aipu', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add parameters and series to each category
productsData.categories.forEach(cat => {
  // Add parameters field
  if (!cat.parameters) {
    cat.parameters = ["输入电压", "输出电压", "输出功率", "隔离电压", "效率", "封装"];
  }
  
  // Add series field
  if (!cat.series) {
    if (cat.id === 'dc-dc-fixed-input') {
      cat.series = [
        {
          "name": "A05系列",
          "description": "5V输入定压DC-DC电源模块，功率0.25W-3W",
          "features": ["5V输入", "多种输出电压", "SIP/DIP/SMD封装", "工业级温度"]
        },
        {
          "name": "A12系列",
          "description": "12V输入定压DC-DC电源模块，功率0.25W-3W",
          "features": ["12V输入", "多种输出电压", "SIP/DIP/SMD封装", "工业级温度"]
        },
        {
          "name": "A24系列",
          "description": "24V输入定压DC-DC电源模块，功率0.25W-3W",
          "features": ["24V输入", "多种输出电压", "SIP/DIP/SMD封装", "工业级温度"]
        }
      ];
    } else if (cat.id === 'dc-dc-wide-input') {
      cat.series = [
        {
          "name": "B05系列",
          "description": "4:1宽压输入DC-DC电源模块，输入9-36V，功率1W-60W",
          "features": ["9-36V宽压输入", "适合12V/24V电池", "高效率", "工业级温度"]
        },
        {
          "name": "B12系列",
          "description": "4:1宽压输入DC-DC电源模块，输入9-36V，功率1W-60W",
          "features": ["9-36V宽压输入", "适合12V/24V系统", "高效率", "工业级温度"]
        },
        {
          "name": "B24系列",
          "description": "4:1宽压输入DC-DC电源模块，输入18-75V，功率1W-60W",
          "features": ["18-75V宽压输入", "适合24V/48V系统", "高效率", "工业级温度"]
        }
      ];
    } else if (cat.id === 'ac-dc-modules') {
      cat.series = [
        {
          "name": "Zero系列",
          "description": "超小型AC-DC电源模块，待机功耗<0.1W",
          "features": ["超小体积", "零待机功耗", "裸板设计", "5W-10W功率"]
        },
        {
          "name": "标准系列",
          "description": "标准AC-DC电源模块，带外壳设计",
          "features": ["带外壳", "高效率", "完善保护", "5W-150W功率"]
        }
      ];
    } else if (cat.id === 'isolated-transceivers') {
      cat.series = [
        {
          "name": "CTM系列",
          "description": "CAN总线隔离收发器，2500VDC隔离",
          "features": ["CAN2.0A/B", "1Mbps波特率", "2500VDC隔离", "ESD保护"]
        },
        {
          "name": "RSM系列",
          "description": "RS-485隔离收发器，2500VDC隔离",
          "features": ["RS-485协议", "500Kbps波特率", "2500VDC隔离", "自动流控"]
        },
        {
          "name": "RSM232系列",
          "description": "RS-232隔离收发器，2500VDC隔离",
          "features": ["RS-232协议", "115.2Kbps波特率", "2500VDC隔离", "集成电源"]
        }
      ];
    }
  }
  
  // Add selectionGuide if not exists
  if (!cat.selectionGuide) {
    cat.selectionGuide = {
      "title": `${cat.name}选型指南`,
      "description": `如何选择合适的爱浦${cat.name}`,
      "articleId": `${cat.slug}-selection`,
      "articleLink": `/aipu/support/${cat.slug}-selection-guide.html`
    };
  }
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('Fixed products.json - added parameters, series, and selectionGuide to all categories');
