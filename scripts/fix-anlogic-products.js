const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'anlogic');

// Create correct FPGA products.json
const productsData = {
  "seoTitle": "Anlogic安路科技FPGA产品 - ELF/EAGLE/CPLD系列 | 力通代理",
  "seoDescription": "安路科技FPGA产品：ELF系列低功耗FPGA、EAGLE系列高性能FPGA、CPLD可编程逻辑器件。国产FPGA解决方案首选。",
  "seoKeywords": [
    "安路FPGA",
    "Anlogic ELF",
    "Anlogic EAGLE",
    "国产FPGA",
    "CPLD",
    "可编程逻辑器件",
    "Anlogic distributor",
    "Anlogic选型"
  ],
  "faqs": [
    {
      "question": "安路科技FPGA有哪些主要系列？",
      "answer": "安路科技FPGA主要分为两大系列：1) ELF系列（低功耗FPGA）：采用55nm工艺，逻辑容量1K-10K LUTs，集成嵌入式Flash，无需外部配置芯片，功耗低至竞争产品的1/3，适合工业控制、消费电子、通信接口等应用；2) EAGLE系列（高性能FPGA）：采用28nm工艺，逻辑容量10K-100K+ LUTs，集成高速SerDes收发器，支持PCIe Gen3、DDR3/4、10G以太网等高速接口，适合通信基础设施、视频处理、AI加速等高性能应用。此外还有AL系列CPLD产品，适合简单逻辑和胶合逻辑应用。",
      "decisionGuide": "根据应用复杂度选择：简单控制选ELF系列，高性能计算选EAGLE系列，胶合逻辑选CPLD。",
      "keywords": [
        "FPGA系列",
        "ELF系列",
        "EAGLE系列",
        "CPLD"
      ]
    },
    {
      "question": "安路FPGA与Xilinx、Intel FPGA相比有什么优势？",
      "answer": "安路FPGA相比Xilinx和Intel FPGA具有以下优势：1) 成本优势：同等性能产品价格低30%-50%，大幅降低BOM成本；2) 功耗优势：采用低功耗架构设计，静态功耗和动态功耗均低于国际竞品；3) 集成度高：ELF系列集成嵌入式Flash，无需外部配置芯片，减少PCB面积和BOM成本；4) 供货保障：国产芯片，供应链安全可控，交期稳定；5) 本地化支持：原厂FAE团队位于国内，技术支持响应快速；6) 软件免费：Tang Dynasty开发软件完全免费，无需授权费用；7)  pin-to-pin兼容：部分型号与Xilinx/Intel主流器件pin兼容，便于替代。适合对成本敏感、有国产化需求、供应链安全要求高的应用。",
      "decisionGuide": "成本敏感、国产化替代、供应链安全需求高的项目优先考虑安路FPGA。",
      "keywords": [
        "国产FPGA",
        "Xilinx替代",
        "成本优势",
        "低功耗"
      ]
    },
    {
      "question": "安路FPGA的开发工具是什么？",
      "answer": "安路FPGA的开发工具是Tang Dynasty（TD）软件，是一款完全自主开发的EDA工具，具有以下特点：1) 完全免费：无需授权费用，无功能限制，可无限期使用；2) 功能完整：支持Verilog/VHDL设计输入、综合、布局布线、时序分析、bitstream生成全流程；3) 界面友好：类似Xilinx ISE/Vivado的操作界面，FPGA工程师可快速上手；4) 调试功能：集成逻辑分析仪（Logic Analyzer），支持在线调试；5) IP库丰富：提供常用IP核如PCIe、DDR、以太网MAC、FFT等；6) 多平台支持：支持Windows和Linux操作系统；7) 持续更新：定期发布新版本，增加新器件支持和功能优化。软件可从安路官网免费下载，提供详细的使用教程和示例工程。",
      "decisionGuide": "从安路官网免费下载Tang Dynasty软件，配合开发套件快速上手。",
      "keywords": [
        "Tang Dynasty",
        "TD软件",
        "FPGA开发工具",
        "EDA"
      ]
    },
    {
      "question": "安路FPGA适合哪些应用场景？",
      "answer": "安路FPGA广泛应用于以下场景：1) 工业控制：PLC、运动控制器、工业网关、机器视觉，利用FPGA的并行处理能力和实时性；2) 通信设备：5G小基站、光纤收发器、协议转换器、网络加速器，利用高速SerDes和协议处理IP；3) 消费电子：LED显示屏控制、投影仪、安防摄像头、智能家居中控，利用视频处理能力和接口扩展；4) 汽车电子：ADAS、车载娱乐、T-Box、充电桩，利用车规级器件的可靠性；5) AI边缘计算：神经网络推理加速、图像识别、语音处理，利用DSP和并行计算能力；6) 医疗设备：超声成像、监护仪、内窥镜，利用低功耗和实时信号处理能力。安路提供丰富的参考设计和IP核，加速产品开发。",
      "decisionGuide": "根据应用需求选择合适系列：工业控制选ELF系列，通信和AI选EAGLE系列。",
      "keywords": [
        "FPGA应用",
        "工业控制",
        "通信设备",
        "AI加速"
      ]
    },
    {
      "question": "如何选择合适的安路FPGA器件？",
      "answer": "选择安路FPGA器件需要考虑以下因素：1) 逻辑容量：根据设计规模估算所需LUT数量，简单控制选1K-5K LUTs（ELF2L15/ELF2L45），复杂设计选5K-20K LUTs（ELF2L90/EG4S20），高性能计算选20K+ LUTs（EG4S50/EG4S100）；2) I/O需求：计算所需I/O数量，考虑电平标准（LVCMOS/LVDS/MIPI等），确认封装形式（QFN/BGA）；3) 接口需求：需要高速SerDes选EAGLE系列，需要PCIe/DDR选带硬核的型号；4) 功耗要求：电池供电选ELF系列，有散热条件可选EAGLE系列；5) 温度等级：室内环境选商业级（0~70℃），工业环境选工业级（-40~85℃）；6) 成本预算：在满足性能前提下选择性价比最高的型号。建议先用开发套件验证设计，确认资源使用后再选型。",
      "decisionGuide": "联系力通FAE团队，提供设计需求获取专业选型建议。",
      "keywords": [
        "FPGA选型",
        "LUT容量",
        "I/O需求",
        "器件选择"
      ]
    }
  ],
  "categories": [
    {
      "id": "elf-series-fpga",
      "name": "ELF系列低功耗FPGA",
      "slug": "elf-series-fpga",
      "description": "ELF系列是安路科技推出的低功耗、低成本FPGA，采用55nm工艺，集成嵌入式Flash，无需外部配置芯片，适合工业控制、消费电子、通信接口等应用",
      "shortDescription": "ELF系列低功耗FPGA，1K-10K LUTs，集成嵌入式Flash",
      "icon": "fpga",
      "parameters": ["逻辑容量", "I/O数量", "DSP", "封装", "工作温度"],
      "selectionGuideLink": {
        "url": "/anlogic/support/elf-fpga-selection-guide.html",
        "text": "ELF系列选型指南"
      },
      "series": [
        {
          "name": "ELF2系列",
          "description": "入门级低功耗FPGA，1K-10K LUTs",
          "features": ["1K-10K LUTs", "集成Flash", "低功耗", "工业级温度"]
        },
        {
          "name": "ELF3系列",
          "description": "增强型低功耗FPGA，更大容量",
          "features": ["更大容量", "更多I/O", "增强DSP", "丰富接口"]
        }
      ],
      "selectionGuide": {
        "title": "ELF系列FPGA选型指南",
        "description": "如何选择合适的ELF系列FPGA器件",
        "articleId": "elf-fpga-selection",
        "articleLink": "/anlogic/support/elf-fpga-selection-guide.html"
      },
      "faqs": [
        {
          "question": "ELF系列FPGA的功耗如何？",
          "answer": "ELF系列FPGA采用低功耗架构设计，静态功耗极低，典型值在几毫安到十几毫安之间，动态功耗取决于设计复杂度和工作频率。相比国际竞品，ELF系列功耗低30%-50%，特别适合电池供电和便携设备。具体功耗数据可参考数据手册中的功耗曲线。",
          "decisionGuide": "对功耗敏感的应用优先考虑ELF系列，特别是电池供电设备。",
          "keywords": ["ELF功耗", "低功耗FPGA", "静态功耗"]
        },
        {
          "question": "ELF系列需要外部配置芯片吗？",
          "answer": "不需要。ELF系列FPGA集成嵌入式Flash存储配置数据，上电后自动从内部Flash加载配置，无需外部配置芯片（如SPI Flash）。这减少了BOM成本、PCB面积和设计复杂度，同时提高了系统可靠性。配置数据可以通过JTAG接口或专用配置接口进行更新。",
          "decisionGuide": "ELF系列无需外部配置芯片，简化设计，降低成本。",
          "keywords": ["嵌入式Flash", "配置芯片", "无需外部Flash"]
        },
        {
          "question": "ELF系列支持哪些I/O标准？",
          "answer": "ELF系列支持丰富的I/O标准，包括：LVCMOS 3.3V/2.5V/1.8V/1.5V/1.2V、LVTTL、LVDS、MIPI D-PHY、SSTL、HSTL等。支持多种电平标准混合使用，方便连接不同电压域的器件。高速I/O支持DDR接口，可用于连接外部存储器。",
          "decisionGuide": "根据系统接口需求确认所需I/O标准，ELF系列支持主流标准。",
          "keywords": ["I/O标准", "LVCMOS", "LVDS", "MIPI"]
        },
        {
          "question": "ELF系列的开发环境是什么？",
          "answer": "ELF系列使用Tang Dynasty（TD）软件进行开发，TD是安路科技自主开发的免费EDA工具，支持Verilog/VHDL设计输入、综合、布局布线、时序分析、bitstream生成全流程。软件界面类似Xilinx ISE，FPGA工程师可快速上手。提供丰富的IP核和示例工程。",
          "decisionGuide": "从安路官网免费下载Tang Dynasty软件，开始ELF系列开发。",
          "keywords": ["Tang Dynasty", "TD软件", "开发环境"]
        },
        {
          "question": "ELF系列适合替代哪些Xilinx器件？",
          "answer": "ELF系列可以替代Xilinx Spartan-6/7系列和Cyclone IV/V系列的部分型号。例如：ELF2L45可替代XC6SLX9/XC7S25，ELF2L90可替代XC6SLX25/XC7S50。安路提供详细的替代指南和迁移方案，大部分设计可直接移植或稍作修改即可运行。",
          "decisionGuide": "联系力通FAE获取详细的替代方案和迁移支持。",
          "keywords": ["Xilinx替代", "Spartan替代", "器件迁移"]
        }
      ],
      "products": [
        {
          "partNumber": "ELF2L45B",
          "name": "ELF2系列4.5K LUTs FPGA",
          "description": "ELF2L45B是安路科技ELF2系列低功耗FPGA，提供4,480个LUTs，8,960个Flip-Flops，18个DSP乘法器，276个用户I/O，集成嵌入式Flash，无需外部配置芯片，BGA-256封装，适合工业控制、通信接口、消费电子等应用。",
          "shortDescription": "ELF2L45B低功耗FPGA，4.5K LUTs，集成Flash，BGA-256封装，适合工业控制和通信应用",
          "features": [
            "4,480 LUTs逻辑容量",
            "8,960个Flip-Flops",
            "18个18x18 DSP乘法器",
            "276个用户I/O",
            "集成嵌入式Flash",
            "BGA-256封装"
          ],
          "specifications": {
            "逻辑容量": "4,480 LUTs",
            "Flip-Flops": "8,960",
            "DSP": "18个18x18",
            "用户I/O": "276",
            "配置方式": "内部Flash",
            "封装": "BGA-256",
            "工作温度": "-40℃~+85℃"
          },
          "applications": [
            "工业控制器",
            "通信接口转换",
            "电机控制",
            "LED显示控制",
            "消费电子"
          ],
          "faqs": [
            {
              "question": "ELF2L45B的逻辑容量能做多复杂的设计？",
              "answer": "ELF2L45B提供4,480个LUTs，可以容纳中等复杂度的设计。典型应用包括：多轴电机控制器（支持4-6轴）、工业通信网关（支持多种协议转换）、LED显示控制器（支持全彩大屏）、图像预处理模块等。对于更复杂的设计，可以考虑ELF2L90B或EAGLE系列。",
              "decisionGuide": "4.5K LUTs适合中等复杂度设计，复杂设计建议选更大容量器件。",
              "keywords": ["4.5K LUTs", "逻辑容量", "设计规模"]
            },
            {
              "question": "ELF2L45B的功耗是多少？",
              "answer": "ELF2L45B采用低功耗设计，静态功耗约5-10mA（取决于温度和电压），动态功耗与设计复杂度和工作频率相关。在100MHz典型工作频率下，总功耗约100-200mW。相比同等级Xilinx器件，功耗低30%-50%，非常适合对功耗敏感的应用。",
              "decisionGuide": "ELF2L45B低功耗特性适合电池供电和散热受限的应用。",
              "keywords": ["功耗", "静态功耗", "动态功耗"]
            },
            {
              "question": "ELF2L45B如何配置和编程？",
              "answer": "ELF2L45B集成嵌入式Flash，配置数据存储在内部Flash中，上电自动加载。编程方式：1) JTAG接口：通过USB下载器连接JTAG接口进行编程和调试；2) 专用配置接口：支持SPI、并行等多种配置模式。Tang Dynasty软件提供一键编程功能，支持在线调试和逻辑分析仪功能。",
              "decisionGuide": "使用Tang Dynasty软件和USB下载器进行编程调试。",
              "keywords": ["配置方式", "JTAG", "编程"]
            },
            {
              "question": "ELF2L45B可以替代哪些Xilinx器件？",
              "answer": "ELF2L45B可以替代Xilinx Spartan-6 XC6SLX9、Spartan-7 XC7S25等器件。安路提供详细的替代指南，包括pin兼容性分析、设计移植建议、性能对比等。大部分基于Spartan-6/7的设计可以相对容易地迁移到ELF2L45B。",
              "decisionGuide": "联系力通FAE获取详细的替代方案和迁移支持。",
              "keywords": ["Xilinx替代", "Spartan替代", "器件迁移"]
            },
            {
              "question": "ELF2L45B的开发套件有哪些？",
              "answer": "安路提供ELF2L45B开发套件（ELF2-DK），包含：ELF2L45B开发板（带常用外设）、USB下载器、电源适配器、示例工程（LED控制、串口通信、DDR接口等）、用户手册和技术文档。开发板引出所有I/O，方便用户评估和原型开发。",
              "decisionGuide": "购买ELF2-DK开发套件开始评估和开发。",
              "keywords": ["开发套件", "开发板", "ELF2-DK"]
            }
          ],
          "faeReview": {
            "author": "LiTong FAE Team",
            "content": "ELF2L45B是我们推荐最多的入门级FPGA型号。在多个工业控制项目中成功应用，包括PLC控制器、电机驱动、工业网关等。客户反馈功耗确实比Xilinx低很多，集成Flash设计非常方便，省去了外部配置芯片。Tang Dynasty软件学习曲线平缓，有Xilinx经验的工程师1-2天就能上手。性价比极高，是国产化替代的首选。",
            "highlight": "低功耗、集成Flash、性价比高、国产化首选"
          },
          "alternativeParts": [
            {
              "partNumber": "ELF2L15B",
              "comparison": "ELF2L15B提供1.5K LUTs，适合简单设计，价格更低",
              "reason": "简单设计降低成本",
              "useCase": "简单控制逻辑、接口转换等低容量需求"
            },
            {
              "partNumber": "ELF2L90B",
              "comparison": "ELF2L90B提供9K LUTs，容量翻倍，适合复杂设计",
              "reason": "复杂设计需要更大容量",
              "useCase": "多轴控制、复杂算法、大规模接口"
            }
          ],
          "companionParts": [
            {
              "partNumber": "ELF2-DK",
              "relationship": "开发套件",
              "description": "ELF2系列开发套件，含开发板和下载器"
            },
            {
              "partNumber": "AL3A10B",
              "relationship": "配套CPLD",
              "description": "CPLD用于系统配置管理和胶合逻辑"
            },
            {
              "partNumber": "MT41K128M16",
              "relationship": "配套DDR3",
              "description": "DDR3存储器用于数据缓存"
            }
          ]
        },
        {
          "partNumber": "ELF2L90B",
          "name": "ELF2系列9K LUTs FPGA",
          "description": "ELF2L90B是安路科技ELF2系列大容量低功耗FPGA，提供9,000个LUTs，18,000个Flip-Flops，36个DSP乘法器，376个用户I/O，集成嵌入式Flash，BGA-400封装，适合复杂工业控制、多轴运动控制、通信设备等应用。",
          "shortDescription": "ELF2L90B大容量低功耗FPGA，9K LUTs，376 I/O，适合复杂工业控制和通信设备",
          "features": [
            "9,000 LUTs逻辑容量",
            "18,000个Flip-Flops",
            "36个18x18 DSP乘法器",
            "376个用户I/O",
            "集成嵌入式Flash",
            "BGA-400封装"
          ],
          "specifications": {
            "逻辑容量": "9,000 LUTs",
            "Flip-Flops": "18,000",
            "DSP": "36个18x18",
            "用户I/O": "376",
            "配置方式": "内部Flash",
            "封装": "BGA-400",
            "工作温度": "-40℃~+85℃"
          },
          "applications": [
            "多轴运动控制器",
            "工业通信网关",
            "视频处理",
            "机器视觉",
            "复杂算法加速"
          ],
          "faqs": [
            {
              "question": "ELF2L90B相比ELF2L45B有什么优势？",
              "answer": "ELF2L90B逻辑容量是ELF2L45B的两倍（9K vs 4.5K LUTs），I/O数量增加36%（376 vs 276），DSP数量翻倍（36 vs 18）。适合更复杂的设计，如8轴以上运动控制、多通道通信网关、复杂图像处理算法等。封装升级为BGA-400，提供更多I/O和更好的散热。",
              "decisionGuide": "复杂设计选ELF2L90B，简单设计选ELF2L45B节省成本。",
              "keywords": ["ELF2L90B", "大容量", "对比"]
            },
            {
              "question": "ELF2L90B能做视频处理吗？",
              "answer": "ELF2L90B可以处理标清和720p视频，支持视频格式转换、缩放、叠加等功能。对于1080p或4K视频处理，建议使用EAGLE系列，因为ELF2L90B没有高速SerDes，且逻辑容量对于高清视频处理相对有限。",
              "decisionGuide": "标清/720p视频选ELF2L90B，高清视频选EAGLE系列。",
              "keywords": ["视频处理", "图像处理", "720p"]
            },
            {
              "question": "ELF2L90B支持哪些通信协议？",
              "answer": "ELF2L90B可以实现多种通信协议：工业以太网（EtherCAT、Profinet、EtherNet/IP）、现场总线（CAN、RS-485、Modbus）、高速串行（SPI、I2C、UART）等。通过软核实现协议栈，丰富的I/O和DSP资源支持多协议并发处理。",
              "decisionGuide": "通信协议通过软核实现，ELF2L90B资源充足支持多协议。",
              "keywords": ["通信协议", "工业以太网", "现场总线"]
            },
            {
              "question": "ELF2L90B的功耗会不会很高？",
              "answer": "虽然ELF2L90B容量是ELF2L45B的两倍，但采用相同的低功耗架构，静态功耗仅略高（约8-15mA），动态功耗取决于设计。在相同设计复杂度下，ELF2L90B的能效比（性能/功耗）优于ELF2L45B。",
              "decisionGuide": "ELF2L90B功耗控制良好，不必担心容量增加导致功耗大幅上升。",
              "keywords": ["功耗", "能效比", "低功耗"]
            },
            {
              "question": "ELF2L90B的开发套件有哪些？",
              "answer": "安路提供ELF2L90B开发套件（ELF2-DK-ADV），包含：ELF2L90B开发板（带DDR3、以太网、HDMI等接口）、USB下载器、电源适配器、丰富的示例工程、完整的技术文档。开发板设计用于复杂应用评估，接口丰富。",
              "decisionGuide": "购买ELF2-DK-ADV开发套件评估复杂应用。",
              "keywords": ["开发套件", "ELF2-DK-ADV", "开发板"]
            }
          ],
          "faeReview": {
            "author": "LiTong FAE Team",
            "content": "ELF2L90B是ELF系列的旗舰型号，容量和I/O都很充足。我们用它做过8轴运动控制器、工业通信网关、机器视觉预处理等复杂项目，表现稳定。客户反馈与Xilinx Spartan-6 LX25相比，功耗更低，价格更优，而且集成Flash设计很方便。对于不需要高速SerDes的复杂应用，ELF2L90B是性价比极高的选择。",
            "highlight": "大容量、丰富I/O、复杂应用首选"
          },
          "alternativeParts": [
            {
              "partNumber": "ELF2L45B",
              "comparison": "ELF2L45B容量减半，适合中等复杂度设计，价格更低",
              "reason": "降低成本",
              "useCase": "中等复杂度设计，节省成本"
            },
            {
              "partNumber": "EG4S20BG256",
              "comparison": "EG4S20提供20K LUTs和高速SerDes，适合高性能应用",
              "reason": "需要高速接口",
              "useCase": "需要SerDes、PCIe等高速接口的应用"
            }
          ],
          "companionParts": [
            {
              "partNumber": "ELF2-DK-ADV",
              "relationship": "开发套件",
              "description": "ELF2L90B高级开发套件"
            },
            {
              "partNumber": "MT41K256M16",
              "relationship": "配套DDR3",
              "description": "大容量DDR3用于数据缓存"
            },
            {
              "partNumber": "KSZ9031",
              "relationship": "配套以太网PHY",
              "description": "千兆以太网PHY芯片"
            }
          ]
        }
      ]
    }
  ]
};

// Write the file
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('Created anlogic products.json with FPGA data');
