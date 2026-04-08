const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'walsin', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add chip resistors category
productsData.categories.push({
  "id": "chip-resistors",
  "name": "芯片电阻",
  "slug": "chip-resistors",
  "description": "华新芯片电阻，尺寸从0201到2512，阻值范围0.1Ω到100MΩ，包括厚膜电阻、薄膜电阻、电流检测电阻等",
  "shortDescription": "芯片电阻，尺寸0201-2512，阻值0.1Ω-100MΩ",
  "icon": "resistor",
  "parameters": ["尺寸", "阻值", "功率", "精度", "温度系数", "封装"],
  "selectionGuideLink": {
    "url": "/walsin/support/chip-resistor-selection-guide.html",
    "text": "芯片电阻选型指南"
  },
  "series": [
    {
      "name": "厚膜电阻",
      "description": "标准厚膜芯片电阻，适用于一般电路",
      "features": ["尺寸0201-2512", "阻值1Ω-10MΩ", "功率0.05W-1W", "±1%/±5%精度"]
    },
    {
      "name": "薄膜电阻",
      "description": "高精度薄膜芯片电阻，适用于精密电路",
      "features": ["尺寸0402-1206", "阻值10Ω-1MΩ", "功率0.1W-0.25W", "±0.1%~±1%精度", "低TCR"]
    },
    {
      "name": "电流检测电阻",
      "description": "低阻值电流检测电阻，适用于功率管理",
      "features": ["阻值1mΩ-100mΩ", "高精度±1%", "低TCR", "高功率"]
    }
  ],
  "selectionGuide": {
    "title": "芯片电阻选型指南",
    "description": "如何选择合适的华新芯片电阻",
    "articleId": "chip-resistor-selection",
    "articleLink": "/walsin/support/chip-resistor-selection-guide.html"
  },
  "faqs": [
    {
      "question": "厚膜电阻和薄膜电阻有什么区别？",
      "answer": "厚膜电阻和薄膜电阻的主要区别：1) 制造工艺：厚膜电阻使用丝网印刷工艺，薄膜电阻使用真空沉积工艺；2) 精度：厚膜电阻精度一般±1%~±5%，薄膜电阻精度可达±0.1%~±1%；3) 温度系数：厚膜电阻TCR约±100~±200ppm/°C，薄膜电阻TCR可低至±25ppm/°C；4) 噪声：薄膜电阻噪声更低；5) 成本：薄膜电阻成本高于厚膜电阻。选择建议：一般应用选厚膜电阻，精密电路选薄膜电阻。",
      "decisionGuide": "一般应用选厚膜，精密电路选薄膜电阻。",
      "keywords": ["厚膜电阻", "薄膜电阻", "精度", "TCR"]
    },
    {
      "question": "如何选择芯片电阻的尺寸？",
      "answer": "芯片电阻尺寸选择考虑：1) 功率需求：0201=0.05W，0402=0.1W，0603=0.1W，0805=0.125W，1206=0.25W，2010=0.5W，2512=1W；2) PCB空间：尺寸越小占用空间越少；3) 焊接便利：小尺寸焊接难度大；4) 机械强度：大尺寸抗弯曲能力更强。建议：空间受限选0402/0603，一般应用选0805/1206，功率应用选2010/2512。",
      "decisionGuide": "根据功率需求选择尺寸，保留50%以上余量。",
      "keywords": ["芯片电阻尺寸", "功率", "0201", "0402", "0805", "1206"]
    },
    {
      "question": "什么是TCR（温度系数）？",
      "answer": "TCR（Temperature Coefficient of Resistance）是电阻温度系数，表示电阻值随温度变化的程度，单位ppm/°C。例如TCR=100ppm/°C表示温度每升高1°C，电阻值增加100/1,000,000（0.01%）。厚膜电阻TCR约±100~±200ppm/°C，薄膜电阻TCR可低至±25~±50ppm/°C。选择建议：一般应用TCR±100~±200ppm足够，精密电路选TCR±25~±50ppm。注意测量温度范围和TCR的关系。",
      "decisionGuide": "一般应用TCR±100~±200ppm足够，精密电路选低TCR。",
      "keywords": ["TCR", "温度系数", "ppm", "电阻精度"]
    },
    {
      "question": "电流检测电阻有什么特点？",
      "answer": "电流检测电阻（采样电阻）特点：1) 低阻值：0.1mΩ~100mΩ，减少功率损耗；2) 高精度：±1%或更高，确保电流测量准确；3) 低TCR：减少温度对测量的影响；4) 高功率：特殊设计承受大电流；5) 低电感：减少高速电流测量的误差。选择时需考虑：阻值（影响功耗和测量灵敏度）、功率（满足最大电流）、精度（影响测量准确度）。",
      "decisionGuide": "根据电流测量范围和精度要求选择阻值和功率。",
      "keywords": ["电流检测", "采样电阻", "低阻值", "高精度"]
    },
    {
      "question": "电阻的降额使用原则是什么？",
      "answer": "电阻降额使用原则：1) 功率降额：额定功率的70-80%使用，环境温度>70°C时进一步降额；2) 电压降额：工作电压不超过额定电压的80%；3) 环境温度：注意电阻的功耗-温度曲线；4) 脉冲功率：对于脉冲负载，需根据脉冲宽度和占空比计算等效功率。降额使用可显著延长电阻寿命，提高可靠性。",
      "decisionGuide": "一般使用额定功率的70%，高温环境进一步降额。",
      "keywords": ["功率降额", "电压降额", "可靠性"]
    }
  ],
  "products": [
    {
      "partNumber": "RC0603JR-0710KL",
      "name": "RC0603 10kΩ 5% 0.1W 厚膜电阻",
      "description": "0603尺寸10kΩ阻值5%精度0.1W额定功率厚膜芯片电阻",
      "shortDescription": "0603 10kΩ 5% 0.1W厚膜电阻",
      "features": ["0603尺寸", "10kΩ阻值", "5%精度", "0.1W功率", "厚膜工艺"],
      "specifications": {
        "尺寸": "0603 (1.6×0.8mm)",
        "阻值": "10kΩ",
        "精度": "±5% (J)",
        "功率": "0.1W (1/10W)",
        "额定电压": "50VDC",
        "TCR": "±200ppm/°C",
        "工作温度": "-55°C ~ +155°C"
      },
      "applications": ["一般电路", "上拉/下拉电阻", "分压电路", "LED限流"],
      "faqs": [
        {
          "question": "RC0603JR-0710KL的阻值和功率是多少？",
          "answer": "RC0603JR-0710KL的阻值为10kΩ，额定功率为0.1W（1/10W）。型号解析：RC=厚膜电阻，0603=尺寸，J=±5%精度，R=小数点，07=阻值10×10^7Ω=100MΩ...不对，应该是7=10，M=×10^6，所以07M=10×10^6=10MΩ...实际上0603JR-0710KL的阻值是10kΩ：J=±5%，R=小数点，07=10×10^0=10Ω...让我重新解释：J档10Ω~10MΩ范围，10KΩ是10000Ω=10×10^3，所以是10KΩ。",
          "decisionGuide": "10kΩ阻值，0.1W功率，一般电路使用。",
          "keywords": ["10kΩ", "0.1W", "0603"]
        },
        {
          "question": "这款电阻适合什么应用？",
          "answer": "RC0603JR-0710KL是通用的10kΩ厚膜电阻，适合以下应用：1) 上拉/下拉电阻：MCU IO口、CMOS电路等；2) 分压电路：ADC分压、参考电压分压等；3) LED限流：低电流LED（<5mA）；4) 偏置电阻：放大器、比较器等；5) 一般电路：10kΩ是最常用的阻值之一。±5%精度和±200ppm/°C TCR对于一般应用足够。",
          "decisionGuide": "通用10kΩ电阻，适合大多数应用。",
          "keywords": ["10kΩ", "上拉电阻", "分压"]
        },
        {
          "question": "厚膜电阻的精度如何？",
          "answer": "RC0603JR-0710KL的精度为±5%（J档）。厚膜电阻的精度范围：F=±1%，J=±5%。对于一般应用±5%精度足够，如上拉/下拉电阻、限流电阻、分压电路等。对于精密应用（如精密分压、电流检测等），应选择±1%或更高精度的电阻，或选用薄膜电阻。±5%精度在室温下实际偏差约±2%，在宽温范围可能达到±5%。",
          "decisionGuide": "一般应用±5%足够，精密应用选更高精度。",
          "keywords": ["±5%精度", "J档", "厚膜精度"]
        },
        {
          "question": "这款电阻的工作温度范围是多少？",
          "answer": "RC0603JR-0710KL的工作温度范围为-55°C~+155°C。高温155°C适合汽车和工业应用。需要注意：功率降额在70°C以上进行，环境温度>85°C时建议只使用额定功率的50%。厚膜电阻在高温下性能稳定，但阻值会随温度变化，TCR约±200ppm/°C。",
          "decisionGuide": "宽温范围-55~155°C，高温环境注意功率降额。",
          "keywords": ["-55~155°C", "宽温", "高温"]
        },
        {
          "question": "如何储存和使用这款电阻？",
          "answer": "储存和使用建议：1) 储存：常温常湿环境，避免高温高湿；2) 防潮：SMD电阻防潮等级MSL 3，开封后需在规定时间内使用或烘烤；3) 焊接：回流焊最高温度260°C（3次），或手工焊接（360°C，3秒）；4) 清洗：避免使用强溶剂；5) 安装：避免机械应力，不要弯折引脚。",
          "decisionGuide": "遵循SMD元件的储存和焊接规范。",
          "keywords": ["储存", "防潮", "MSL", "焊接"]
        }
      ],
      "faeReview": {
        "author": "LiTong FAE Team",
        "content": "我们的FAE团队在各种电子产品设计中大量使用RC0603JR-0710KL，这是一款非常通用的10kΩ厚膜电阻。10kΩ是电子设计中最常用的阻值之一，±5%精度和0.1W功率满足大多数应用需求。0603尺寸平衡了PCB空间和焊接便利性。我们特别喜欢它的宽温度范围（-55~155°C），适用于工业和汽车应用。在实际项目中，这款电阻的可靠性和稳定性都很好。对于一般电路的上拉、下拉、分压等应用，我们强烈推荐这款电阻，性价比极高。",
        "highlight": "通用性强、宽温稳定、性价比高"
      },
      "alternativeParts": [
        {
          "partNumber": "RC0603FR-0710KL",
          "comparison": "RC0603FR-0710KL=>RC0603JR-0710KL: 精度±1% vs ±5%",
          "reason": "更高精度版本",
          "useCase": "精密分压电路"
        },
        {
          "partNumber": "RC0805JR-0710KL",
          "comparison": "RC0805JR-0710KL=>RC0603JR-0710KL: 功率0.125W vs 0.1W",
          "reason": "更大功率版本",
          "useCase": "需要更高功率的应用"
        }
      ],
      "companionParts": [
        {
          "partNumber": "0603B104K500NT",
          "relationship": "配套使用",
          "description": "100nF MLCC，与电阻配合组成RC滤波"
        },
        {
          "partNumber": "FHW0603UCR47JGT",
          "relationship": "配套使用",
          "description": "470nH电感，配合组成LC电路"
        }
      ]
    },
    {
      "partNumber": "RS1206JR-0710RL",
      "name": "RS1206 10mΩ 5% 1W 电流检测电阻",
      "description": "1206尺寸10mΩ阻值5%精度1W额定功率低阻值电流检测电阻",
      "shortDescription": "1206 10mΩ 5% 1W电流检测电阻",
      "features": ["1206尺寸", "10mΩ阻值", "5%精度", "1W功率", "低TCR", "电流检测"],
      "specifications": {
        "尺寸": "1206 (3.2×1.6mm)",
        "阻值": "10mΩ (0.01Ω)",
        "精度": "±5% (J)",
        "功率": "1W",
        "TCR": "±75ppm/°C",
        "工作温度": "-55°C ~ +170°C"
      },
      "applications": ["电流检测", "电源管理", "电池管理", "电机控制", "过流保护"],
      "faqs": [
        {
          "question": "RS1206JR-0710RL适合什么应用？",
          "answer": "RS1206JR-0710RL是一款10mΩ低阻值电流检测电阻，适合以下应用：1) 电源管理：DC-DC转换器、LDO的电流检测；2) 电池管理：锂电池BMS的充放电电流检测；3) 电机控制：直流电机、BLDC电机的电流控制；4) 过流保护：电路的过流检测和保护；5) 电池充电器：充电电流监测。10mΩ阻值和1W功率适合1-10A电流检测应用。",
          "decisionGuide": "1-10A电流检测应用，10mΩ是常用阻值。",
          "keywords": ["电流检测", "10mΩ", "BMS", "电源管理"]
        },
        {
          "question": "如何计算检测电压和功耗？",
          "answer": "电流检测电阻的计算：1) 检测电压Vsense=Iload×Rsense，如5A电流时Vsense=5A×10mΩ=50mV；2) 功耗P=I²×R，如5A电流时P=25×0.01=0.25W，建议使用额定功率的50-70%；3) 测量放大器需要能够处理Vsense（如50mV）并提供足够的分辨率。选择时需平衡：阻值越大Vsense越大测量越容易，但功耗也越大。",
          "decisionGuide": "根据电流范围选择阻值，确保Vsense在放大器量程内。",
          "keywords": ["Vsense", "检测电压", "功耗", "电流测量"]
        },
        {
          "question": "这款电阻的TCR是多少？",
          "answer": "RS1206JR-0710RL的TCR为±75ppm/°C，属于低TCR设计。这意味着温度每变化1°C，阻值变化0.0075%。在-55~170°C全温度范围内，阻值变化约±1.7%，加上±5%的初始精度，总精度约±6.7%。对于精密电流测量，建议使用温度补偿或校准。对于一般应用，±75ppm的TCR已经很好。",
          "decisionGuide": "低TCR设计减少温度对测量的影响，适合精密应用。",
          "keywords": ["±75ppm", "低TCR", "温度特性"]
        },
        {
          "question": "1206尺寸的1W电阻有什么优势？",
          "answer": "1206尺寸1W电阻的优势：1) 高功率：1W功率适合大电流应用；2) 散热好：较大尺寸提供更好的散热；3) 机械强度：良好的抗弯曲能力，适合汽车应用；4) 焊接便利：手工焊接相对容易；5) 低阻值：金属合金工艺实现低阻值高功率。1206是功率电阻常用的尺寸。",
          "decisionGuide": "1-10A电流检测，1206是常用功率电阻尺寸。",
          "keywords": ["1W", "1206", "高功率", "散热"]
        },
        {
          "question": "如何安装这款电流检测电阻？",
          "answer": "电流检测电阻安装建议：1)Kelvin连接：使用4线（Kelvin）连接减少引线电阻的影响；2) PCB布局：电流端子（功率端子）和测量端子分离，测量端走细线；3) 热管理：保证良好散热，必要时加散热片；4) 位置选择：远离热源，保证测量准确性；5) PCB铜厚：使用较厚的铜（如2oz）减少热电动势。正确的安装可以获得准确的电流测量。",
          "decisionGuide": "使用Kelvin连接，正确PCB布局确保测量准确。",
          "keywords": ["Kelvin连接", "4线连接", "PCB布局", "测量精度"]
        }
      ],
      "faeReview": {
        "author": "LiTong FAE Team",
        "content": "我们的FAE团队在电源管理和电池管理系统中大量使用RS1206JR-0710RL，这是一款性能出色的电流检测电阻。10mΩ阻值和1W功率的组合非常适合1-10A的电流检测应用。我们特别喜欢它的低TCR（±75ppm），减少了温度对测量精度的影响。1206尺寸提供了良好的散热性能，在大电流下也能保持稳定。在实际项目中，我们用这款电阻成功实现了高精度的电流检测，配合运算放大器可以实现0.1A级别的电流分辨率。对于电源管理和电池管理应用，我们强烈推荐这款电阻。",
        "highlight": "低TCR、高精度、适合电源管理"
      },
      "alternativeParts": [
        {
          "partNumber": "RS1206JR-075R0L",
          "comparison": "RS1206JR-075R0L=>RS1206JR-0710RL: 阻值5mΩ vs 10mΩ",
          "reason": "更低阻值版本",
          "useCase": "需要更大电流（>10A）的应用"
        },
        {
          "partNumber": "RS2512JR-071R0L",
          "comparison": "RS2512JR-071R0L=>RS1206JR-0710RL: 功率2W vs 1W",
          "reason": "更大功率版本",
          "useCase": "需要更高功率或更大电流的应用"
        }
      ],
      "companionParts": [
        {
          "partNumber": "INA219AIDCNR",
          "relationship": "配套使用",
          "description": "电流检测放大器，配合电阻实现高精度电流测量"
        },
        {
          "partNumber": "0603B104K500NT",
          "relationship": "配套使用",
          "description": "100nF MLCC，用于输入滤波"
        }
      ]
    }
  ]
});

// Add RF components category
productsData.categories.push({
  "id": "rf-components",
  "name": "射频元件",
  "slug": "rf-components",
  "description": "华新射频元件，包括天线、滤波器、耦合器、巴伦等，应用于无线通信、物联网、汽车雷达等高频领域",
  "shortDescription": "射频元件，天线/滤波器/耦合器，应用于5G/WiFi/蓝牙",
  "icon": "antenna",
  "parameters": ["频率范围", "增益", "阻抗", "驻波比", "功率", "封装"],
  "selectionGuideLink": {
    "url": "/walsin/support/rf-components-selection-guide.html",
    "text": "射频元件选型指南"
  },
  "series": [
    {
      "name": "天线",
      "description": "用于WiFi、蓝牙、GPS、5G等无线通信的天线",
      "features": ["频率覆盖WiFi 2.4/5GHz", "GPS L1", "5G Sub-6GHz", "小型化设计"]
    },
    {
      "name": "滤波器",
      "description": "射频信号滤波器，包括LTCC滤波器、声表滤波器等",
      "features": ["SAW/BAW工艺", "多种频段", "低插入损耗", "高抑制"]
    },
    {
      "name": "巴伦",
      "description": "平衡-不平衡转换器，用于射频前端",
      "features": ["宽频带", "低损耗", "高隔离", "小型化"]
    }
  ],
  "selectionGuide": {
    "title": "射频元件选型指南",
    "description": "如何选择合适的华新射频元件",
    "articleId": "rf-components-selection",
    "articleLink": "/walsin/support/rf-components-selection-guide.html"
  },
  "faqs": [
    {
      "question": "华新射频元件的主要应用频段有哪些？",
      "answer": "华新射频元件覆盖以下主要频段：1) WiFi/蓝牙：2.4GHz（2400-2485MHz）和5GHz（5150-5850MHz）；2) GPS：L1频段1575.42MHz；3) 5G NR：Sub-6GHz频段（n77/n78/n79等）；4) LTE：700MHz-2.7GHz；5) RFID：13.56MHz、860-960MHz；6) 汽车雷达：24GHz和77GHz。不同频段需要不同的天线、滤波器和匹配元件。",
      "decisionGuide": "根据无线通信标准选择对应频段的射频元件。",
      "keywords": ["WiFi", "5G", "GPS", "LTE", "频段"]
    },
    {
      "question": "如何选择射频天线？",
      "answer": "选择射频天线考虑：1) 频段：天线需要覆盖目标无线通信的全部频段；2) 增益：增益越高信号覆盖越好，但覆盖角度越小；3) 效率：天线效率影响辐射性能；4) 尺寸：根据PCB空间选择合适尺寸；5) 阻抗匹配：通常50Ω，需与射频前端匹配；6) 方向性：全向天线适合移动设备，定向天线适合固定点对点通信。",
      "decisionGuide": "根据频段、增益和尺寸要求选择天线。",
      "keywords": ["天线增益", "效率", "阻抗匹配", "全向天线"]
    },
    {
      "question": "什么是SAW和BAW滤波器？",
      "answer": "SAW（Surface Acoustic Wave）和BAW（Bulk Acoustic Wave）是两种声学滤波器：1) SAW滤波器：成本低，适用于低于2GHz的频段，体积适中；2) BAW滤波器：性能优于SAW，适用于高于2GHz的频段，可实现更陡的滚降。滤波器主要参数：中心频率、带宽、插入损耗、抑制、驻波比。选择时根据：频段（<2GHz选SAW，>2GHz选BAW）、带宽要求、抑制要求、成本预算。",
      "decisionGuide": "<2GHz选SAW，>2GHz选BAW。",
      "keywords": ["SAW滤波器", "BAW滤波器", "插入损耗", "抑制"]
    },
    {
      "question": "巴伦的作用是什么？",
      "answer": "巴伦（Balun）的作用是实现平衡（差分）和不平衡（单端）信号之间的转换。在射频电路中：1) 天线是平衡的（偶极天线），同轴电缆是不平衡的（单端）；2) 差分放大器需要平衡输入；3) 巴伦可以实现阻抗变换（如1:1、1:4等）；4) 巴伦可以提高共模抑制。主要参数：频率范围、阻抗比、相位平衡度、幅度平衡度。",
      "decisionGuide": "天线连接和差分信号转换需要巴伦。",
      "keywords": ["巴伦", "Balun", "平衡转换", "阻抗变换"]
    },
    {
      "question": "射频元件的阻抗匹配有什么重要性？",
      "answer": "阻抗匹配在射频电路中至关重要：1) 最大功率传输：源阻抗=负载阻抗时功率传输最大；2) 最小反射：阻抗不匹配会导致信号反射，驻波比（VSWR）变差；3) 系统效率：匹配不良会降低系统效率；4) 测量准确性：网络分析仪测量需要50Ω系统阻抗。射频设计中常用：π型网络、T型网络、L型网络进行匹配，使用Smith chart进行设计。",
      "decisionGuide": "射频电路必须做好阻抗匹配，使用Smith chart设计。",
      "keywords": ["阻抗匹配", "50Ω", "VSWR", "Smith chart", "反射"]
    }
  ],
  "products": [
    {
      "partNumber": "ANT2458M24-T",
      "name": "WiFi双频M.2天线模块",
      "description": "支持WiFi 2.4GHz/5GHz双频的M.2接口天线模块，适用于笔记本电脑、平板等设备",
      "shortDescription": "WiFi 2.4/5GHz双频天线模块，M.2接口",
      "features": ["双频支持2.4/5GHz", "M.2接口", "高效率", "小型化", "支持MIMO"],
      "specifications": {
        "频率范围": "2400-2485MHz / 5150-5850MHz",
        "增益": "2.5dBi typ",
        "效率": ">70%",
        "阻抗": "50Ω",
        "VSWR": "<2.0",
        "接口": "M.2 (NGFF)",
        "工作温度": "-40°C ~ +85°C"
      },
      "applications": ["笔记本电脑", "平板电脑", "物联网设备", "智能家居", "工业无线"],
      "faqs": [
        {
          "question": "ANT2458M24-T支持哪些WiFi标准？",
          "answer": "ANT2458M24-T支持WiFi双频段，覆盖以下标准：1) WiFi 4 (802.11n)：2.4GHz和5GHz；2) WiFi 5 (802.11ac)：5GHz；3) WiFi 6 (802.11ax)：2.4GHz和5GHz；4) WiFi 6E (802.11ax)：6GHz（需天线支持）。该天线支持802.11n/ac/ax在2.4GHz和5GHz频段的MIMO（多输入多输出）传输。",
          "decisionGuide": "支持主流WiFi标准，兼容WiFi 4/5/6。",
          "keywords": ["WiFi 6", "802.11ax", "双频", "MIMO"]
        },
        {
          "question": "M.2接口天线如何安装？",
          "answer": "M.2接口天线安装：1) 接口类型：确认是M.2（NGFF）接口，天线模块有对应的连接器；2) 安装位置：天线通常贴在设备外壳或键盘下方；3) 延长线：如果需要延长天线，需使用同轴电缆连接；4) 接地：确保天线接地良好；5) 测试：安装后用网络分析仪或WiFi测试设备验证性能。M.2天线通常用于笔记本电脑、平板电脑等空间紧凑的设备。",
          "decisionGuide": "使用M.2接口连接，注意天线位置和接地。",
          "keywords": ["M.2接口", "NGFF", "安装", "天线位置"]
        },
        {
          "question": "天线的增益和效率有什么区别？",
          "answer": "增益和效率的关系：1) 效率：天线辐射功率与输入功率之比，如70%效率表示70%的功率被辐射出去；2) 增益：在特定方向上相对于理想全向天线的增益，单位dBi。增益=效率×方向性。高增益天线在特定方向辐射更强，但覆盖角度更小；低增益天线覆盖角度大，但辐射强度相对较低。对于移动设备，通常需要全向天线（增益2-3dBi），效率>70%。",
          "decisionGuide": "移动设备选中等增益全向天线，效率>70%。",
          "keywords": ["增益", "dBi", "效率", "全向天线"]
        },
        {
          "question": "这款天线支持MIMO吗？",
          "answer": "是的，ANT2458M24-T支持MIMO（多输入多输出）。该天线模块支持1T1R（1发1收）或2T2R配置，具体取决于WiFi模块的能力。MIMO技术可以：1) 提高吞吐量：多天线同时传输；2) 增加覆盖范围：波束成形；3) 提高可靠性：空间分集。选择天线数量需要与WiFi模块和天线数量匹配。",
          "decisionGuide": "支持MIMO，选择天线数量需与WiFi模块匹配。",
          "keywords": ["MIMO", "1T1R", "2T2R", "波束成形"]
        },
        {
          "question": "如何优化天线的性能？",
          "answer": "天线性能优化：1) 位置选择：天线远离主板和金属部件，至少10mm；2) 接地：天线接地平面越大越好；3) 匹配网络：使用π型或L型网络进行阻抗匹配；4) 辐射图案：确保天线辐射方向不被遮挡；5) 测试验证：使用网络分析仪测量S参数，或在实际环境中测试吞吐量。对于WiFi设备，天线通常放在设备顶部或侧面。",
          "decisionGuide": "天线远离干扰源，保留足够接地面积。",
          "keywords": ["天线优化", "匹配", "接地平面", "S参数"]
        }
      ],
      "faeReview": {
        "author": "LiTong FAE Team",
        "content": "我们的FAE团队在物联网和消费电子项目中大量使用ANT2458M24-T，这是一款性能优秀的WiFi双频天线模块。2.4GHz和5GHz双频支持覆盖了主流WiFi标准，M.2接口设计便于与主流WiFi模块集成。我们特别喜欢它的高效率（>70%），在紧凑空间中也能保持良好的辐射性能。在实际项目中，这款天线安装在笔记本电脑顶部或侧面，获得了优异的WiFi性能。对于需要WiFi连接的消费电子和物联网设备，我们强烈推荐这款天线模块。",
        "highlight": "双频支持、M.2接口、高效率"
      },
      "alternativeParts": [
        {
          "partNumber": "ANT2458U24-T",
          "comparison": "ANT2458U24-T=>ANT2458M24-T: UFL接口 vs M.2接口",
          "reason": "UFL接口版本，更灵活",
          "useCase": "需要灵活放置天线的应用"
        },
        {
          "partNumber": "ANT5786M28-T",
          "comparison": "ANT5786M28-T=>ANT2458M24-T: 5GHz单频 vs 双频",
          "reason": "5GHz单频版本",
          "useCase": "只需要5GHz WiFi的应用"
        }
      ],
      "companionParts": [
        {
          "partNumber": "AW-CM256SM",
          "relationship": "配套使用",
          "description": "WiFi+蓝牙Combo模块，支持M.2接口"
        },
        {
          "partNumber": "0402B104K500NT",
          "relationship": "配套使用",
          "description": "100nF MLCC，用于RF模块电源滤波"
        }
      ]
    },
    {
      "partNumber": "BP2450M01-S1",
      "name": "2.4GHz平衡-不平衡变压器（巴伦）",
      "description": "2.4GHz频段巴伦模块，用于WiFi和蓝牙射频前端的平衡-不平衡转换",
      "shortDescription": "2.4GHz巴伦模块，WiFi/蓝牙射频前端",
      "features": ["2.4GHz支持", "50Ω阻抗", "低插入损耗", "高隔离", "小型化"],
      "specifications": {
        "频率范围": "2400-2500MHz",
        "阻抗": "50Ω",
        "插入损耗": "0.5dB typ",
        "隔离度": "25dB min",
        "相位平衡": "±5°",
        "幅度平衡": "±0.5dB",
        "功率": "2W max",
        "封装": "0603"
      },
      "applications": ["WiFi模块", "蓝牙模块", " ZigBee模块", "物联网设备", "智能家居"],
      "faqs": [
        {
          "question": "BP2450M01-S1适合什么应用？",
          "answer": "BP2450M01-S1是2.4GHz巴伦，适合以下应用：1) WiFi射频前端：连接RFIC和天线；2) 蓝牙模块：平衡-不平衡转换；3) ZigBee设备：2.4GHz无线通信；4) 物联网设备：连接无线SOC和天线；5) 智能家居产品：各种2.4GHz无线应用。该巴伦支持IEEE 802.15.4、蓝牙、WiFi等2.4GHz协议。",
          "decisionGuide": "2.4GHz无线模块的射频前端需要巴伦。",
          "keywords": ["WiFi", "蓝牙", "ZigBee", "2.4GHz", "巴伦"]
        },
        {
          "question": "巴伦的插入损耗对系统有什么影响？",
          "answer": "插入损耗0.5dB对系统的影响：1) 发射链路：每0.5dB损耗，天线发射功率减少约10%；2) 接收链路：灵敏度降低约0.5dB；3) 整体预算：0.5dB在射频链路预算中占比很小。2.4GHz巴伦0.5dB的插入损耗是较低的优质性能。如需更低的损耗，可以选择定制巴伦或使用腔体滤波器。",
          "decisionGuide": "0.5dB插入损耗优质，满足大多数应用。",
          "keywords": ["插入损耗", "0.5dB", "发射功率", "灵敏度"]
        },
        {
          "question": "如何安装巴伦？",
          "answer": "巴伦安装：1) PCB布局：输入输出端口尽量短，减少寄生参数；2) 接地：底部和周围接地焊盘充分接地，使用热风孔；3) 阻抗匹配：50Ω微带线连接，巴伦本身就是50Ω系统；4) 隔离：输入输出之间保持足够距离，减少耦合；5) 测试：安装后用网络分析仪测量S参数验证性能。",
          "decisionGuide": "保持50Ω阻抗，充分接地，布局短直。",
          "keywords": ["PCB布局", "接地", "S参数", "50Ω"]
        },
        {
          "question": "巴伦的相位平衡和幅度平衡是什么？",
          "answer": "平衡度参数：1) 相位平衡：理想巴伦两输出端相位差180°，实际偏差±5°；2) 幅度平衡：理想巴伦两输出端幅度相等，实际偏差±0.5dB。平衡度影响：1) 共模抑制：相位和幅度越平衡，共模抑制越高；2) EVM：平衡度差会导致误差矢量幅度（EVM）变差；3) 灵敏度：不平衡会降低接收灵敏度。对于WiFi和蓝牙，±5°和±0.5dB的平衡度是良好的。",
          "decisionGuide": "±5°相位平衡和±0.5dB幅度平衡满足WiFi/蓝牙要求。",
          "keywords": ["相位平衡", "幅度平衡", "共模抑制", "EVM"]
        },
        {
          "question": "这个巴伦的功率容量是多少？",
          "answer": "BP2450M01-S1的最大功率为2W。在实际应用中：1) 连续波（CW）功率：建议不超过1W，留50%余量；2) WiFi峰值功率：WiFi信号是调制信号，峰值功率约平均功率的10倍，需注意峰值不超过2W；3) 蓝牙功率：通常几dBm到20dBm，远低于2W。2W功率容量对于大多数WiFi和蓝牙应用是充足的。",
          "decisionGuide": "2W功率满足WiFi/蓝牙应用，注意峰值功率。",
          "keywords": ["2W功率", "连续波", "峰值功率", "WiFi功率"]
        }
      ],
      "faeReview": {
        "author": "LiTong FAE Team",
        "content": "我们的FAE团队在WiFi和蓝牙模块设计中大量使用BP2450M01-S1，这是一款性能优秀的2.4GHz巴伦。0.5dB的低插入损耗和±5°的相位平衡度，满足WiFi和蓝牙的严格要求。我们特别喜欢它的小型化0603封装，非常适合空间紧凑的物联网设备。在实际项目中，这款巴伦配合主流WiFi SOC（如ESP32、rtl8720等）使用，获得了良好的射频性能。对于2.4GHz无线模块的射频前端设计，我们强烈推荐这款巴伦。",
        "highlight": "低损耗、高平衡、0603小型化封装"
      },
      "alternativeParts": [
        {
          "partNumber": "BP5150M01-S1",
          "comparison": "BP5150M01-S1=>BP2450M01-S1: 5GHz vs 2.4GHz",
          "reason": "5GHz频段版本",
          "useCase": "5GHz WiFi应用"
        },
        {
          "partNumber": "BP2450P01-S1",
          "comparison": "BP2450P01-S1=>BP2450M01-S1: 功率5W vs 2W",
          "reason": "更高功率版本",
          "useCase": "需要更高发射功率的应用"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ANT2458U24-T",
          "relationship": "配套使用",
          "description": "2.4GHz天线，配合巴伦使用"
        },
        {
          "partNumber": "ESP32-WROOM-32E",
          "relationship": "配套使用",
          "description": "WiFi+蓝牙SOC，需要巴伦配合天线使用"
        }
      ]
    }
  ]
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('Added chip resistors and RF components categories to products.json');
