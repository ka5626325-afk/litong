const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'walsin', 'products.json');

const productsData = {
  "seoTitle": "Walsin华新科技被动元件产品 - MLCC/电阻/电感 | 力通代理",
  "seoDescription": "华新科技被动元件产品：MLCC多层陶瓷电容、芯片电阻、射频元件、电感。高品质被动元件解决方案。",
  "seoKeywords": ["华新被动元件", "Walsin MLCC", "芯片电阻", "射频元件", "电感", "Walsin distributor", "Walsin选型"],
  "faqs": [
    {
      "question": "华新MLCC电容的介质材料有哪些？",
      "answer": "华新MLCC电容主要使用以下介质材料：1) C0G/NP0（Class I）：温度特性最好，温度系数0±30ppm/°C，容值稳定性高，适用于高频、精密电路，但容值范围较小；2) X7R（Class II）：温度特性较好，容量变化±15%，容值范围大，适用于一般电路；3) X5R（Class II）：温度特性一般，容量变化±15%，工作温度-55~85°C，成本较低。",
      "decisionGuide": "精密高频选C0G/NP0，一般应用选X7R，成本敏感选X5R。",
      "keywords": ["MLCC介质", "C0G", "NP0", "X7R", "X5R"]
    },
    {
      "question": "华新芯片电阻的尺寸代码是什么意思？",
      "answer": "华新芯片电阻的尺寸代码采用四位数字表示，前两位表示长度（单位：0.01英寸），后两位表示宽度。例如：0201表示0.6×0.3mm，0402表示1.0×0.5mm，0603表示1.6×0.8mm，0805表示2.0×1.25mm，1206表示3.2×1.6mm。",
      "decisionGuide": "空间受限选0402，一般应用选0603/0805，功率应用选1206及以上。",
      "keywords": ["芯片电阻尺寸", "0402", "0603", "0805", "1206"]
    },
    {
      "question": "华新MLCC电容的电压降额如何计算？",
      "answer": "华新MLCC电容的电压降额原则：直流工作电压应不超过额定电压的80%。例如额定电压50V的电容，最大工作电压应为40V。关键应用建议保留更多余量，如使用50%额定电压。",
      "decisionGuide": "工作电压不超过额定电压的80%，关键应用建议50%。",
      "keywords": ["电压降额", "额定电压", "工作电压"]
    },
    {
      "question": "华新射频元件有哪些应用？",
      "answer": "华新射频元件主要应用于：1) 天线：WiFi、蓝牙、GPS、5G天线；2) 滤波器：信号滤波，抑制干扰；3) 耦合器：信号分配和合成；4) 巴伦：平衡-不平衡转换。广泛应用于5G通信、物联网、汽车雷达等领域。",
      "decisionGuide": "根据射频频率和应用场景选择合适的射频元件。",
      "keywords": ["射频元件", "天线", "滤波器", "5G"]
    },
    {
      "question": "华新电感的主要参数有哪些？",
      "answer": "华新电感的主要参数包括：1) 电感值（L）：单位μH和nH；2) 额定电流（Irated）：能承受的最大电流；3) 直流电阻（DCR）：影响效率和发热；4) 饱和电流（Isat）：电感值下降到一定比例时的电流；5) 自谐振频率（SRF）。",
      "decisionGuide": "根据电感值、额定电流、DCR等参数选择。",
      "keywords": ["电感参数", "电感值", "额定电流", "DCR"]
    }
  ],
  "categories": [
    {
      "id": "mlcc-capacitors",
      "name": "MLCC多层陶瓷电容",
      "slug": "mlcc-capacitors",
      "description": "华新MLCC多层陶瓷电容，尺寸从0201到1210，容值范围0.1pF到100μF，包括通用型、高容型、高压型、车规级等系列",
      "shortDescription": "MLCC多层陶瓷电容，尺寸0201-1210，容值0.1pF-100μF",
      "icon": "capacitor",
      "parameters": ["尺寸", "容值", "额定电压", "介质材料", "精度", "温度特性"],
      "selectionGuideLink": {
        "url": "/walsin/support/mlcc-selection-guide.html",
        "text": "MLCC选型指南"
      },
      "series": [
        {
          "name": "通用型MLCC",
          "description": "标准MLCC电容，适用于一般电子电路",
          "features": ["尺寸0201-1210", "容值0.1pF-100μF", "电压6.3V-50V", "X7R/X5R介质"]
        },
        {
          "name": "高容型MLCC",
          "description": "大容量MLCC，适用于电源滤波",
          "features": ["容值10μF-100μF", "X5R/X7R介质", "低ESR", "高纹波电流"]
        },
        {
          "name": "车规级MLCC",
          "description": "通过AEC-Q200认证，适用于汽车电子",
          "features": ["AEC-Q200认证", "温度-55~150°C", "高可靠性", "长寿命"]
        }
      ],
      "selectionGuide": {
        "title": "MLCC选型指南",
        "description": "如何选择合适的华新MLCC电容",
        "articleId": "mlcc-selection",
        "articleLink": "/walsin/support/mlcc-selection-guide.html"
      },
      "faqs": [
        {
          "question": "如何选择MLCC的尺寸？",
          "answer": "选择MLCC尺寸需考虑：1) PCB空间：小尺寸适合紧凑设计；2) 容值需求：尺寸越大容值越大；3) 额定电压：高压需要较大尺寸；4) 机械强度：大尺寸抗弯曲能力更强。一般建议：消费电子产品选0402/0603，工业设备选0805/1206。",
          "decisionGuide": "空间受限选0402/0603，大容值选1210，汽车电子选1206及以上。",
          "keywords": ["MLCC尺寸", "0402", "0603", "0805", "1206"]
        },
        {
          "question": "C0G和X7R介质有什么区别？",
          "answer": "C0G（NP0）和X7R的主要区别：1) 温度特性：C0G温度系数0±30ppm/°C，X7R容量变化±15%；2) 容值范围：C0G容值较小，X7R容值大；3) 精度：C0G精度高，X7R精度一般；4) 成本：C0G成本高于X7R。",
          "decisionGuide": "高频精密选C0G，一般应用选X7R。",
          "keywords": ["C0G", "NP0", "X7R", "温度特性"]
        },
        {
          "question": "MLCC的DC Bias效应是什么？",
          "answer": "DC Bias效应是指MLCC在直流电压下容值下降的现象。Class II介质存在明显的DC Bias效应，施加直流电压后容值会随电压升高而下降。解决方法：选择高额定电压、大一号尺寸，或选用C0G/NP0。",
          "decisionGuide": "对容值稳定性要求高的应用，选择高额定电压或大尺寸。",
          "keywords": ["DC Bias", "容值下降", "Class II"]
        },
        {
          "question": "车规级MLCC有什么特殊要求？",
          "answer": "车规级MLCC需要满足：1) AEC-Q200认证；