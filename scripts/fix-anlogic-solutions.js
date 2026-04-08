const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'anlogic');

// Create correct FPGA solutions.json
const solutionsData = {
  "seoTitle": "Anlogic安路科技FPGA解决方案 - 工业控制/通信/视频处理 | 力通代理",
  "seoDescription": "安路科技FPGA解决方案：工业控制、通信设备、视频处理、AI加速等应用方案。完整的FPGA设计支持和FAE技术服务。",
  "seoKeywords": [
    "安路FPGA方案",
    "工业控制FPGA",
    "通信FPGA方案",
    "视频处理FPGA",
    "AI加速方案",
    "Anlogic distributor"
  ],
  "faqs": [
    {
      "question": "安路科技提供哪些FPGA解决方案？",
      "answer": "安路科技提供多种FPGA解决方案：1) 工业控制方案：基于ELF2系列的PLC控制器、多轴运动控制、工业通信网关等，具有实时性强、可靠性高、成本低的特点；2) 通信设备方案：基于EAGLE系列的5G小基站、光纤收发器、协议转换器等，支持高速SerDes和多种通信协议；3) 视频处理方案：LED显示控制、图像缩放、视频叠加等，支持多种视频接口；4) AI边缘计算方案：神经网络推理加速、图像识别等，利用FPGA并行计算能力；5) 汽车电子方案：ADAS、车载娱乐、充电桩等，符合车规级要求。所有方案均提供参考设计、IP核和技术支持。",
      "decisionGuide": "根据应用场景选择对应方案，联系力通FAE获取详细方案资料。",
      "keywords": [
        "FPGA解决方案",
        "工业控制",
        "通信设备",
        "视频处理"
      ]
    },
    {
      "question": "安路FPGA方案的技术支持包括哪些内容？",
      "answer": "安路FPGA方案提供全面的技术支持：1) 方案咨询：FAE团队根据客户需求推荐合适方案，提供器件选型建议；2) 参考设计：提供完整的参考设计，包括原理图、PCB布局、示例代码；3) IP核支持：提供常用IP核如PCIe、DDR、以太网MAC、FFT等；4) 开发工具：免费提供Tang Dynasty开发软件，包含综合、布局布线、调试功能；5) 培训服务：提供FPGA设计培训、工具使用培训、调试技巧培训；6) 现场支持：重要项目提供现场技术支持，协助解决设计问题；7) 文档资料：提供数据手册、应用笔记、设计指南等技术文档。力通作为授权代理商，提供本地化技术支持服务。",
      "decisionGuide": "充分利用安路和力通的技术支持资源，加速产品开发。",
      "keywords": [
        "技术支持",
        "FAE服务",
        "参考设计",
        "IP核"
      ]
    },
    {
      "question": "安路FPGA方案的成本优势如何？",
      "answer": "安路FPGA方案具有显著的成本优势：1) 器件成本：相比Xilinx/Intel同等性能FPGA，价格低30%-50%，大幅降低BOM成本；2) 开发成本：Tang Dynasty软件完全免费，无需昂贵的授权费用；3) 配置成本：ELF系列集成Flash，无需外部配置芯片，节省BOM和PCB成本；4) 维护成本：低功耗设计降低散热成本，高可靠性减少维护费用；5) 总拥有成本：国产化器件供应链稳定，避免断供风险。以一个典型的工业控制器为例，采用安路ELF2L45B替代Xilinx XC7S25，单台设备可节省FPGA成本约50%，且无需外部Flash，进一步降低BOM成本。",
      "decisionGuide": "成本敏感项目优先考虑安路FPGA方案，可大幅降低总体成本。",
      "keywords": [
        "成本优势",
        "性价比",
        "BOM成本",
        "国产化"
      ]
    },
    {
      "question": "如何从Xilinx/Intel FPGA迁移到安路FPGA？",
      "answer": "从Xilinx/Intel FPGA迁移到安路FPGA的步骤：1) 器件选型：根据原设计资源使用情况，选择容量相当的安路器件，安路提供替代对照表；2) 设计移植：将Verilog/VHDL代码导入Tang Dynasty软件，大部分代码可直接编译；3) 约束转换：将UCF/XDC约束转换为TD软件约束格式；4) IP替换：将原厂商IP替换为安路提供的等效IP核；5) 时序优化：根据时序报告优化关键路径；6) 硬件调试：使用开发板验证功能，必要时调整设计。安路提供详细的迁移指南和FAE支持，大部分设计可在2-4周内完成迁移。部分型号支持pin-to-pin兼容，硬件改动最小。",
      "decisionGuide": "联系力通FAE获取迁移支持和替代方案。",
      "keywords": [
        "FPGA迁移",
        "Xilinx替代",
        "设计移植",
        "pin兼容"
      ]
    },
    {
      "question": "安路FPGA方案的交付周期是多久？",
      "answer": "安路FPGA方案的交付周期：1) 标准器件：常用型号有现货，1-2周交付；2) 开发套件：现货供应，下单后3-5个工作日发货；3) 样品申请：标准产品样品1-3个工作日提供；4) 批量交付：标准产品现货或2-4周交付。力通作为授权代理商，保持常用型号库存，可满足紧急需求。对于特殊要求（如车规级、特定温度等级），交期可能延长，建议提前沟通。安路FPGA为国产器件，供应链稳定，不受国际贸易影响，长期供货有保障。",
      "decisionGuide": "标准产品交付快，特殊要求需提前沟通确认交期。",
      "keywords": [
        "交付周期",
        "样品",
        "批量交付",
        "供应链"
      ]
    }
  ],
  "solutions": [
    {
      "id": "industrial-control-fpga",
      "title": "工业控制FPGA解决方案",
      "slug": "industrial-control-fpga",
      "description": "基于安路ELF2系列FPGA的工业控制解决方案，适用于PLC、运动控制、工业网关等应用，具有实时性强、可靠性高、成本低的优势",
      "shortDescription": "工业控制FPGA方案，实时控制、多协议支持、高可靠性",
      "longDescription": "工业控制FPGA解决方案基于安路ELF2系列低功耗FPGA，为工业自动化应用提供高性能、低成本的控制平台。该方案支持多轴运动控制、实时逻辑控制、工业通信协议处理等功能。方案特点：1) 实时性强：FPGA硬件并行处理，响应时间微秒级；2) 多协议支持：支持EtherCAT、Profinet、Modbus、CAN等工业协议；3) 高可靠性：工业级温度范围（-40~85℃），符合工业EMC标准；4) 低成本：相比传统MCU+FPGA方案，成本降低30%以上；5) 灵活可扩展：可根据应用需求定制功能。方案包含完整的硬件设计、示例代码、技术文档，帮助客户快速开发工业控制产品。",
      "icon": "industrial",
      "industry": "工业自动化",
      "applications": [
        "PLC控制器",
        "多轴运动控制",
        "工业通信网关",
        "机器视觉控制",
        "工业机器人"
      ],
      "features": [
        "微秒级实时响应",
        "多协议并发处理",
        "工业级可靠性",
        "低功耗设计",
        "灵活可扩展"
      ],
      "coreAdvantages": [
        "FPGA硬件并行处理，实时性远超MCU",
        "单芯片实现控制+通信，降低系统复杂度",
        "工业级温度范围，适应恶劣环境",
        "国产化方案，供应链安全可控",
        "成本优势明显，性价比高"
      ],
      "components": [
        {
          "type": "主控FPGA",
          "productId": "ELF2L45B",
          "description": "ELF2L45B作为主控制器，实现逻辑控制和协议处理"
        },
        {
          "type": "辅助CPLD",
          "productId": "AL3A10B",
          "description": "CPLD用于系统配置和胶合逻辑"
        }
      ],
      "bomList": [
        {
          "item": "ELF2L45B",
          "quantity": 1,
          "description": "主控FPGA，实现控制和通信功能"
        },
        {
          "item": "AL3A10B",
          "quantity": 1,
          "description": "配置管理CPLD"
        },
        {
          "item": "ELF2-DK",
          "quantity": 1,
          "description": "开发套件用于原型开发"
        }
      ],
      "benefits": [
        "缩短产品开发周期",
        "降低系统成本",
        "提高系统可靠性",
        "简化供应链管理",
        "本地化技术支持"
      ],
      "specifications": {
        "控制轴数": "最多16轴",
        "通信协议": "EtherCAT/Profinet/Modbus/CAN",
        "响应时间": "<10us",
        "工作温度": "-40℃~+85℃",
        "I/O数量": "最多276路"
      },
      "technicalSpecs": {
        "主频": "100MHz",
        "逻辑容量": "4.5K-9K LUTs",
        "DSP资源": "18-36个乘法器",
        "功耗": "<200mW"
      },
      "customerCases": [
        {
          "customer": "某工业自动化公司",
          "challenge": "需要开发高性价比的多轴运动控制器，要求实时性强、成本低",
          "solution": "采用ELF2L45B作为主控，实现8轴运动控制和EtherCAT通信",
          "result": "成本降低40%，实时性满足要求，产品已成功量产"
        }
      ],
      "faqs": [
        {
          "question": "工业控制方案支持多少轴运动控制？",
          "answer": "基于ELF2L45B的方案支持最多8轴运动控制，基于ELF2L90B的方案支持最多16轴。支持点位控制、速度控制、力矩控制等多种模式。",
          "decisionGuide": "根据控制轴数选择合适FPGA型号，8轴以下选ELF2L45B，8-16轴选ELF2L90B。",
          "keywords": ["运动控制", "多轴控制", "控制轴数"]
        },
        {
          "question": "支持哪些工业通信协议？",
          "answer": "方案支持主流工业通信协议：EtherCAT主站/从站、Profinet、EtherNet/IP、Modbus TCP/RTU、CANopen、DeviceNet等。协议通过软核实现，可根据需求灵活配置。",
          "decisionGuide": "支持多种工业协议，满足不同应用需求。",
          "keywords": ["工业协议", "EtherCAT", "Profinet", "Modbus"]
        },
        {
          "question": "方案的实时性如何？",
          "answer": "FPGA硬件并行处理，控制循环周期可达50us以下，响应时间<10us，远优于传统MCU方案。适合对实时性要求高的运动控制和过程控制应用。",
          "decisionGuide": "FPGA方案实时性优异，满足高精度控制需求。",
          "keywords": ["实时性", "响应时间", "控制周期"]
        },
        {
          "question": "开发周期需要多长时间？",
          "answer": "基于参考设计开发，典型项目周期3-6个月。安路提供完整的参考设计和技术支持，可大幅缩短开发时间。复杂项目建议分阶段开发，先实现基本功能再扩展。",
          "decisionGuide": "利用参考设计和FAE支持，缩短开发周期。",
          "keywords": ["开发周期", "参考设计", "开发时间"]
        },
        {
          "question": "方案的可靠性如何保证？",
          "answer": "方案采用工业级器件（-40~85℃），经过严格的EMC测试和可靠性验证。提供看门狗、电源监控、故障保护等机制。符合工业控制设备的可靠性要求。",
          "decisionGuide": "工业级器件和完整保护机制确保高可靠性。",
          "keywords": ["可靠性", "工业级", "EMC测试"]
        }
      ],
      "faeInsights": {
        "author": "LiTong FAE Team",
        "content": "工业控制是安路FPGA最成功的应用领域之一。我们已帮助多家客户成功开发PLC、运动控制器、工业网关等产品。关键成功因素：1) 充分利用FPGA并行处理能力实现实时控制；2) 合理规划资源，避免过度设计；3) 重视时序约束和信号完整性；4) 充分测试各种边界条件。建议客户先用开发套件验证方案可行性，再进行产品设计。",
        "keyTakeaways": [
          "FPGA并行处理实现高性能控制",
          "合理规划资源避免过度设计",
          "重视时序约束和信号完整性",
          "充分测试确保可靠性"
        ],
        "decisionFramework": {
          "steps": [
            "明确控制需求（轴数、协议、实时性）",
            "选择合适FPGA型号",
            "基于参考设计开发",
            "验证测试和优化",
            "量产支持"
          ]
        }
      },
      "seoTitle": "工业控制FPGA解决方案 - 安路科技 | 力通代理",
      "seoDescription": "基于安路FPGA的工业控制方案，支持多轴运动控制、工业通信协议。实时性强、成本低、可靠性高。",
      "seoKeywords": [
        "工业控制FPGA",
        "运动控制方案",
        "PLC控制器",
        "工业网关"
      ]
    },
    {
      "id": "communication-fpga",
      "title": "通信设备FPGA解决方案",
      "slug": "communication-fpga",
      "description": "基于安路EAGLE系列FPGA的通信设备解决方案，适用于5G小基站、光纤收发器、协议转换器等应用，支持高速SerDes和多种通信协议",
      "shortDescription": "通信设备FPGA方案，高速SerDes、多协议支持、5G应用",
      "longDescription": "通信设备FPGA解决方案基于安路EAGLE系列高性能FPGA，为通信基础设施提供灵活、高性能的处理平台。该方案支持5G小基站、光纤收发器、协议转换器、网络加速器等应用。方案特点：1) 高速接口：集成SerDes收发器，支持10Gbps+数据速率；2) 协议灵活：支持PCIe、DDR3/4、10G以太网等高速协议；3) 低延迟：硬件加速处理，延迟低至微秒级；4) 可编程：协议和功能可现场升级，适应标准演进；5) 成本优势：相比ASSP方案，灵活性更高，成本更低。方案提供参考设计、IP核、测试向量，加速通信产品开发。",
      "icon": "communication",
      "industry": "通信设备",
      "applications": [
        "5G小基站",
        "光纤收发器",
        "协议转换器",
        "网络加速器",
        "边缘计算网关"
      ],
      "features": [
        "高速SerDes接口",
        "10Gbps+数据速率",
        "PCIe Gen3支持",
        "硬件协议处理",
        "低延迟设计"
      ],
      "coreAdvantages": [
        "高速SerDes支持10Gbps+速率",
        "协议可编程，适应标准演进",
        "硬件加速，延迟低至微秒级",
        "集成PCIe硬核，简化设计",
        "成本低于ASSP方案"
      ],
      "components": [
        {
          "type": "主控FPGA",
          "productId": "EG4S20BG256",
          "description": "EAGLE系列FPGA，集成高速SerDes和PCIe硬核"
        },
        {
          "type": "配置CPLD",
          "productId": "AL3A05B",
          "description": "CPLD用于系统初始化和配置管理"
        }
      ],
      "bomList": [
        {
          "item": "EG4S20BG256",
          "quantity": 1,
          "description": "主控FPGA，集成SerDes和PCIe"
        },
        {
          "item": "AL3A05B",
          "quantity": 1,
          "description": "配置管理CPLD"
        },
        {
          "item": "EAGLE-DK",
          "quantity": 1,
          "description": "EAGLE系列开发套件"
        }
      ],
      "benefits": [
        "灵活支持多种通信协议",
        "硬件加速提高处理性能",
        "可编程适应标准演进",
        "降低系统成本和功耗",
        "缩短产品开发周期"
      ],
      "specifications": {
        "SerDes速率": "最高10.3125Gbps",
        "PCIe接口": "Gen3 x4",
        "以太网": "10GbE",
        "DDR接口": "DDR3/4",
        "逻辑容量": "20K+ LUTs"
      },
      "technicalSpecs": {
        "SerDes速率": "10.3125Gbps",
        "PCIe": "Gen3 x4",
        "延迟": "<1us",
        "功耗": "<3W"
      },
      "customerCases": [
        {
          "customer": "某通信设备公司",
          "challenge": "开发5G小基站基带处理单元，要求高速数据处理、低延迟、协议灵活",
          "solution": "采用EG4S20作为主控，实现基带处理和前传接口",
          "result": "成功通过运营商测试，进入批量生产"
        }
      ],
      "faqs": [
        {
          "question": "方案支持哪些高速接口？",
          "answer": "方案支持多种高速接口：SerDes（最高10.3125Gbps）、PCIe Gen3 x4、10G以太网、DDR3/4、SATA等。满足通信设备对高速数据传输的需求。",
          "decisionGuide": "EAGLE系列支持主流高速接口，满足通信应用需求。",
          "keywords": ["高速接口", "SerDes", "PCIe", "10G以太网"]
        },
        {
          "question": "5G小基站方案的性能如何？",
          "answer": "基于EG4S20的5G小基站方案支持1T1R/2T2R配置，支持Sub-6GHz频段，吞吐量满足5G NR要求。支持O-RAN前传接口，可接入主流基站软件平台。",
          "decisionGuide": "EAGLE系列FPGA满足5G小基站基带处理需求。",
          "keywords": ["5G小基站", "基带处理", "O-RAN"]
        },
        {
          "question": "协议转换器支持哪些协议？",
          "answer": "协议转换器支持：以太网（10M/100M/1G/10G）、光纤通道、CPRI、eCPRI、Interlaken等。协议栈通过FPGA实现，可灵活配置和升级。",
          "decisionGuide": "支持主流通信协议，可定制特殊协议。",
          "keywords": ["协议转换", "CPRI", "eCPRI", "Interlaken"]
        },
        {
          "question": "方案的功耗如何？",
          "answer": "EAGLE系列采用28nm工艺，功耗控制良好。典型5G小基站方案功耗约2-3W，远低于传统FPGA方案。支持动态功耗管理，空闲时自动降低功耗。",
          "decisionGuide": "EAGLE系列功耗控制良好，满足通信设备散热要求。",
          "keywords": ["功耗", "28nm工艺", "动态功耗管理"]
        },
        {
          "question": "开发周期和成本如何？",
          "answer": "基于参考设计开发，典型项目周期6-12个月。相比采用高端Xilinx/Intel FPGA，器件成本降低50%以上。安路提供免费开发工具，无授权费用。",
          "decisionGuide": "安路方案在成本和开发工具方面具有显著优势。",
          "keywords": ["开发周期", "成本优势", "免费工具"]
        }
      ],
      "faeInsights": {
        "author": "LiTong FAE Team",
        "content": "通信设备是安路EAGLE系列的主要应用方向。我们支持客户开发了5G小基站、光纤收发器、协议转换器等产品。关键经验：1) 高速SerDes设计需要特别注意信号完整性；2) 时序约束对高速设计至关重要；3) 充分利用硬核IP（如PCIe）简化设计；4) 与软件团队密切配合确保软硬件协同。建议客户在设计初期就与FAE团队沟通，避免走弯路。",
        "keyTakeaways": [
          "重视高速信号完整性设计",
          "时序约束对高速设计至关重要",
          "充分利用硬核IP简化设计",
          "软硬件协同开发提高效率"
        ],
        "decisionFramework": {
          "steps": [
            "明确接口和协议需求",
            "选择合适FPGA型号",
            "设计高速PCB",
            "开发FPGA逻辑",
            "系统联调和测试"
          ]
        }
      },
      "seoTitle": "通信设备FPGA解决方案 - 安路科技 | 力通代理",
      "seoDescription": "基于安路EAGLE系列FPGA的通信方案，支持5G小基站、光纤收发器、协议转换器。高速SerDes、低延迟、协议灵活。",
      "seoKeywords": [
        "通信FPGA方案",
        "5G小基站",
        "光纤收发器",
        "协议转换器"
      ]
    }
  ]
};

// Write the file
fs.writeFileSync(path.join(dataDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('Created anlogic solutions.json with FPGA solutions');
