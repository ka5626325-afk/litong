const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'anlogic');

// Create correct FPGA support.json
const supportData = {
  "seoTitle": "Anlogic安路科技技术支持 - FPGA设计资源与开发指南 | 力通代理",
  "seoDescription": "安路科技技术支持：FPGA选型指南、Tang Dynasty使用教程、设计最佳实践、参考设计。专业FAE团队提供FPGA设计支持。",
  "seoKeywords": [
    "安路技术支持",
    "Anlogic应用笔记",
    "FPGA设计指南",
    "Tang Dynasty教程",
    "Anlogic distributor",
    "Anlogic选型"
  ],
  "faqs": [
    {
      "question": "如何获取安路FPGA的技术文档和开发工具？",
      "answer": "获取安路FPGA技术文档和开发工具的官方渠道包括：1) 安路科技官网（www.anlogic.com）提供所有产品的数据手册、用户指南、应用笔记等完整技术文档的免费下载；2) Tang Dynasty开发软件可从官网免费下载，无需授权费用，支持Windows和Linux系统；3) 参考设计和示例工程包含在开发套件中，也可单独下载；4) IP核库和接口文档提供给注册用户；5) 视频教程和在线培训资源帮助快速上手。力通作为授权代理商，也提供本地化的技术资料分发和FAE支持服务，确保客户能够快速获取所需资源。",
      "decisionGuide": "访问安路官网免费下载开发工具和技术文档，或联系力通FAE获取本地化支持。",
      "keywords": [
        "技术文档",
        "Tang Dynasty下载",
        "开发工具",
        "参考设计"
      ]
    },
    {
      "question": "安路提供哪些技术支持服务？",
      "answer": "安路科技通过力通提供全面的FPGA技术支持服务：1) 器件选型咨询：根据客户应用需求推荐最合适的FPGA型号，提供替代方案分析；2) 设计审核服务：审核客户原理图和PCB设计，提供优化建议；3) 代码优化支持：协助优化Verilog/VHDL代码，提高性能和资源利用率；4) 时序分析指导：帮助解决时序收敛问题，优化关键路径；5) 调试支持：提供在线调试指导，协助定位问题；6) 培训服务：定期举办FPGA设计培训和Tang Dynasty工具使用培训；7) 现场支持：重要项目提供驻场FAE支持。所有技术支持服务均由经验丰富的FAE工程师提供，确保客户设计成功。",
      "decisionGuide": "充分利用安路和力通的技术支持服务，加速FPGA产品开发和量产进程。",
      "keywords": [
        "技术支持",
        "FAE服务",
        "设计审核",
        "培训服务"
      ]
    },
    {
      "question": "从Xilinx/Intel FPGA迁移到安路FPGA需要哪些步骤？",
      "answer": "从Xilinx/Intel FPGA迁移到安路FPGA的标准流程包括：1) 器件选型对照：根据原设计资源使用情况，选择容量相当的安路器件，安路提供详细的替代对照表；2) 设计导入：将原有Verilog/VHDL代码导入Tang Dynasty软件，大部分标准RTL代码可直接编译通过；3) 约束转换：将原有的UCF/XDC约束文件转换为Tang Dynasty支持的约束格式；4) IP替换：将原厂商的IP核替换为安路提供的等效IP核，如PCIe、DDR控制器等；5) 时序优化：根据时序报告优化关键路径，必要时调整代码结构；6) 硬件验证：使用安路开发板验证功能正确性；7) 量产导入：完成设计定型后导入量产。安路FAE团队提供全程迁移支持，典型设计可在2-4周内完成迁移。",
      "decisionGuide": "联系力通FAE获取详细的迁移指南和一对一技术支持服务。",
      "keywords": [
        "FPGA迁移",
        "Xilinx替代",
        "设计移植",
        "代码转换"
      ]
    },
    {
      "question": "安路FPGA开发需要哪些工具和硬件？",
      "answer": "安路FPGA开发所需的基本工具和硬件包括：1) 开发软件：Tang Dynasty（TD）软件是安路自主开发的免费EDA工具，支持从设计输入到bitstream生成的完整流程，可从官网免费下载；2) 下载器：USB下载器用于连接PC和FPGA开发板进行编程和调试；3) 开发板：根据目标器件选择对应的开发套件，如ELF2-DK、EAGLE-DK等，开发板包含FPGA器件、常用外设和扩展接口；4) 电源：开发板通常需要5V或12V直流电源；5) PC配置：建议配置为Windows 10/11系统，8GB以上内存，100GB以上硬盘空间。安路提供完整的开发套件，包含软件、下载器、开发板和文档，一站式满足开发需求。",
      "decisionGuide": "购买安路开发套件获取完整的开发工具链，或单独下载免费TD软件开始设计。",
      "keywords": [
        "开发工具",
        "Tang Dynasty",
        "开发板",
        "下载器"
      ]
    },
    {
      "question": "安路FPGA的IP核有哪些？如何使用？",
      "answer": "安路科技提供丰富的IP核库，主要包括：1) 接口IP：PCIe Gen3、DDR3/4控制器、以太网MAC（10M/100M/1G/10G）、USB 2.0/3.0、SATA、SPI、I2C、UART等；2) 数字信号处理IP：FFT/IFFT、FIR滤波器、CORDIC、乘法器、除法器等；3) 视频处理IP：图像缩放、色彩空间转换、视频叠加、去隔行等；4) 通信协议IP：CPRI、eCPRI、Interlaken、Aurora等；5) 安全IP：AES、SHA、RSA加密解密等。使用方式：在Tang Dynasty软件中通过IP Catalog选择需要的IP核，配置参数后自动生成接口代码，集成到用户设计中。大部分IP核免费提供，部分高端IP需要授权。安路提供详细的IP使用文档和示例工程。",
      "decisionGuide": "在Tang Dynasty软件中浏览IP Catalog，选择适合应用的IP核并参考文档集成。",
      "keywords": [
        "IP核",
        "PCIe IP",
        "DDR控制器",
        "以太网MAC",
        "DSP IP"
      ]
    },
    {
      "question": "如何解决安路FPGA设计中的时序问题？",
      "answer": "解决安路FPGA设计时序问题的常用方法：1) 约束设置：确保所有时钟和I/O都正确约束，使用时序分析工具检查约束完整性；2) 代码优化：避免组合逻辑过长，插入流水线寄存器打断长路径，优化状态机编码；3) 资源优化：合理使用DSP和RAM资源，避免资源过度使用导致布线拥塞；4) 布局优化：对关键模块使用布局约束，减少信号传输延迟；5) 时钟优化：使用时钟使能代替门控时钟，合理规划时钟域，减少跨时钟域信号；6) 迭代优化：根据时序报告分析关键路径，针对性优化，多次迭代直至满足时序要求。安路Tang Dynasty软件提供详细的时序分析报告，帮助定位问题。FAE团队可提供时序优化指导服务。",
      "decisionGuide": "遵循FPGA设计最佳实践，使用TD软件时序分析工具，必要时寻求FAE支持。",
      "keywords": [
        "时序收敛",
        "时序优化",
        "关键路径",
        "设计约束"
      ]
    },
    {
      "question": "安路FPGA的功耗如何估算和优化？",
      "answer": "安路FPGA功耗估算和优化方法：1) 功耗估算：使用Tang Dynasty软件的功耗分析工具，输入设计资源使用情况和时钟频率，软件会估算静态功耗和动态功耗；2) 静态功耗优化：选择低功耗器件型号，降低工作电压，使用低功耗模式；3) 动态功耗优化：降低时钟频率，使用时钟门控关闭空闲模块，优化信号翻转率；4) 资源优化：合理使用DSP和RAM，避免资源浪费；5) I/O优化：使用低电压I/O标准，减少I/O翻转，合理配置驱动强度。ELF系列本身采用低功耗架构，静态功耗和动态功耗均低于竞品。对于电池供电应用，建议在设计初期就进行功耗预算，并在实现过程中持续优化。",
      "decisionGuide": "使用TD软件功耗分析工具估算功耗，遵循低功耗设计原则优化设计。",
      "keywords": [
        "功耗优化",
        "低功耗设计",
        "功耗估算",
        "时钟门控"
      ]
    },
    {
      "question": "安路FPGA的可靠性如何保证？",
      "answer": "安路FPGA可靠性保证措施：1) 器件等级：提供商业级（0~70℃）和工业级（-40~85℃）两种温度等级，工业级器件经过严格筛选；2) 质量认证：通过ISO 9001质量管理体系认证，产品符合JEDEC标准；3) 测试覆盖：100%功能测试、高温老化测试、温度循环测试；4) 供货保障：国产器件，供应链安全可控，长期供货承诺；5) 设计支持：提供可靠性设计指南，包括去耦电容设计、复位电路设计、ESD防护等；6) 失效分析：提供失效分析服务，帮助客户解决质量问题。安路FPGA已在工业控制、通信设备、汽车电子等领域大规模应用，可靠性得到市场验证。",
      "decisionGuide": "根据应用环境选择合适温度等级，遵循可靠性设计指南，确保产品长期稳定运行。",
      "keywords": [
        "可靠性",
        "工业级",
        "质量认证",
        "供货保障"
      ]
    }
  ],
  "articles": [
    {
      "id": "fpga-selection-guide",
      "title": "安路FPGA选型指南",
      "slug": "fpga-selection-guide",
      "category": "设计指南",
      "description": "详细介绍如何根据应用需求选择合适的安路FPGA器件，包括ELF系列和EAGLE系列的选择依据",
      "shortDescription": "安路FPGA选型指南，帮助工程师快速选择合适的器件型号",
      "contentSections": [
        {
          "heading": "了解安路FPGA产品系列",
          "content": "安路科技提供两大FPGA产品系列：ELF系列和EAGLE系列。ELF系列是低功耗、低成本FPGA，采用55nm工艺，逻辑容量1K-10K LUTs，集成嵌入式Flash，无需外部配置芯片，适合工业控制、消费电子、通信接口等应用。EAGLE系列是高性能FPGA，采用28nm工艺，逻辑容量10K-100K+ LUTs，集成高速SerDes收发器，支持PCIe Gen3、DDR3/4、10G以太网等高速接口，适合通信基础设施、视频处理、AI加速等高性能应用。此外，安路还提供AL系列CPLD，适合简单逻辑和胶合逻辑应用。"
        },
        {
          "heading": "评估逻辑容量需求",
          "content": "选择FPGA的首要因素是逻辑容量。评估方法：1) 统计设计中的寄存器数量、组合逻辑复杂度、状态机规模；2) 考虑IP核占用的资源，如PCIe硬核、DDR控制器等；3) 预留20-30%的余量用于后续功能扩展；4) 参考类似设计的资源使用情况。一般指导：简单控制应用选1K-5K LUTs（ELF2L15/ELF2L45），中等复杂度设计选5K-20K LUTs（ELF2L90/EG4S20），高性能计算选20K+ LUTs（EG4S50/EG4S100）。不确定时，建议先用开发套件验证设计规模。"
        },
        {
          "heading": "确定I/O需求",
          "content": "I/O需求评估包括：1) 数量：统计所有外部接口所需的I/O引脚，包括数据、地址、控制、时钟、调试信号；2) 电平标准：确定系统使用的电平标准，如3.3V LVCMOS、2.5V、1.8V、LVDS、MIPI等；3) 速度：高速接口（如DDR、SerDes）需要特殊的I/O支持；4) 封装：根据I/O数量和PCB空间选择QFN、BGA等封装。注意：不同封装的I/O数量和分布不同，需查阅器件pinout图。建议：在原理图设计前，先制作I/O分配表，确保所有信号都有合适的引脚。"
        },
        {
          "heading": "考虑特殊功能需求",
          "content": "根据应用确定特殊功能需求：1) 高速接口：需要SerDes选EAGLE系列，支持10Gbps+速率；2) 存储器接口：DDR3/4控制需要足够的I/O和时钟资源；3) PCIe接口：EAGLE系列集成PCIe硬核，简化设计；4) DSP功能：统计乘法器需求，选择有足够DSP slice的型号；5) 温度范围：工业环境选工业级（-40~85℃），室内环境选商业级（0~70℃）。制作需求清单，对照器件规格表逐项确认，确保选型满足所有关键需求。"
        }
      ],
      "faqs": [
        {
          "question": "ELF系列和EAGLE系列如何选择？",
          "answer": "ELF系列适合低功耗、低成本应用，如工业控制、消费电子，无需外部配置芯片；EAGLE系列适合高性能应用，如通信、视频处理，支持高速SerDes和PCIe。不需要高速接口选ELF，需要10Gbps+接口选EAGLE。",
          "decisionGuide": "根据是否需要高速SerDes和PCIe接口选择系列，ELF系列适合大多数中低速应用。",
          "keywords": ["ELF系列", "EAGLE系列", "系列选择"]
        },
        {
          "question": "如何估算设计所需的LUT数量？",
          "answer": "估算LUT数量的方法：统计Verilog代码中的always块数量、组合逻辑复杂度、状态机状态数。一般经验：简单控制器1-2K LUTs，通信协议处理3-5K LUTs，视频处理5-10K LUTs，复杂算法10K+ LUTs。建议先用小容量器件验证，再确定最终型号。",
          "decisionGuide": "参考类似设计资源使用情况，预留20-30%余量，不确定时先用开发套件验证。",
          "keywords": ["LUT估算", "资源评估", "设计规模"]
        },
        {
          "question": "安路FPGA可以替代哪些Xilinx器件？",
          "answer": "ELF2L45可替代Spartan-6 XC6SLX9、Spartan-7 XC7S25；ELF2L90可替代XC6SLX25、XC7S50；EG4S20可替代Artix-7 XC7A35T。安路提供详细的替代对照表和迁移指南，大部分设计可平滑迁移。",
          "decisionGuide": "联系力通FAE获取替代对照表和迁移支持，评估pin兼容性和设计移植工作量。",
          "keywords": ["Xilinx替代", "器件对照", "迁移指南"]
        }
      ],
      "author": "LiTong FAE Team",
      "publishDate": "2024-01-15",
      "readTime": "15 min",
      "relatedArticles": ["tang-dynasty-tutorial", "fpga-design-best-practices"],
      "faeInsights": {
        "author": "LiTong FAE Team",
        "content": "选型是FPGA设计成功的关键第一步。常见错误：1) 过度设计，选择过大容量器件浪费成本；2) I/O不足，后期发现引脚不够需要改板；3) 忽略温度等级，商业级器件用在工业环境导致故障。建议：先用开发套件验证设计，确认资源使用后再选型；预留20-30%余量但不过度；仔细核对I/O需求和封装pinout。",
        "keyTakeaways": [
          "准确评估逻辑资源需求",
          "仔细核对I/O数量和封装",
          "预留适当余量但不过度设计",
          "先用开发套件验证再定型"
        ],
        "relatedProducts": ["ELF2L45B", "ELF2L90B", "EG4S20BG256"]
      },
      "customerCases": [
        {
          "customer": "某工业自动化公司",
          "challenge": "需要为新的PLC产品线选择合适的FPGA，要求成本低、供货稳定",
          "solution": "根据I/O需求和逻辑复杂度，推荐ELF2L45B，提供替代Xilinx的方案分析",
          "result": "成功替代原有Xilinx方案，成本降低40%，供货稳定"
        }
      ],
      "seoTitle": "安路FPGA选型指南 - 器件选择与应用匹配 | 力通代理",
      "seoDescription": "安路FPGA选型指南：ELF系列和EAGLE系列选择依据，逻辑容量评估，I/O需求分析，封装选择建议。",
      "seoKeywords": ["安路FPGA选型", "ELF系列选择", "EAGLE系列选择", "器件选型"]
    },
    {
      "id": "tang-dynasty-tutorial",
      "title": "Tang Dynasty软件使用教程",
      "slug": "tang-dynasty-tutorial",
      "category": "工具教程",
      "description": "详细介绍安路Tang Dynasty开发软件的安装、配置和使用方法，帮助工程师快速上手FPGA开发",
      "shortDescription": "Tang Dynasty软件完整教程，从安装到调试的详细指导",
      "contentSections": [
        {
          "heading": "软件安装与配置",
          "content": "Tang Dynasty（TD）软件安装步骤：1) 从安路官网下载最新版安装包，支持Windows和Linux系统；2) 运行安装程序，按向导完成安装，建议安装路径不含中文和空格；3) 安装USB下载器驱动，连接下载器后系统会自动识别；4) 启动软件，首次使用需要选择工作目录；5) 安装器件支持包，根据目标FPGA型号安装对应的数据库；6) 配置软件偏好设置，如编辑器字体、颜色主题等。软件完全免费，无需授权码，安装后即可使用全部功能。建议定期访问官网检查更新，获取最新版本和新器件支持。"
        },
        {
          "heading": "创建和管理工程",
          "content": "TD软件工程管理：1) 创建新工程：File -> New Project，输入工程名称和路径，选择目标器件型号；2) 添加源文件：右键工程 -> Add Files，支持Verilog (.v)、VHDL (.vhd)、约束文件 (.adc) 等格式；3) 工程设置：右键工程 -> Properties，配置综合选项、优化策略、时序约束等；4) 文件组织：建议将源文件、约束文件、IP核文件分类存放；5) 版本控制：工程文件（.prj）和源文件都需要版本控制，生成的bitstream和中间文件不需要。提示：可以导入示例工程作为模板，在此基础上修改，加快开发速度。"
        },
        {
          "heading": "设计输入与综合",
          "content": "设计输入和综合流程：1) 代码编辑：TD内置代码编辑器，支持语法高亮、代码折叠、自动补全，也可使用外部编辑器如VS Code；2) 编写RTL代码：使用Verilog或VHDL描述设计，遵循可综合编码规范；3) 添加约束：创建约束文件，定义时钟、I/O位置、电平标准等；4) 运行综合：点击综合按钮或按F7，软件将RTL代码转换为门级网表；5) 查看报告：综合完成后查看资源使用报告、时序报告，确认无警告错误。常见问题和解决方法：语法错误会显示在消息窗口，双击可跳转到错误位置； latch警告通常由不完整的if/case语句引起；多驱动警告检查信号是否被多个always块赋值。"
        },
        {
          "heading": "实现、调试与下载",
          "content": "实现、调试和下载步骤：1) 布局布线：点击实现按钮，软件进行布局布线，生成bitstream文件；2) 时序分析：查看时序报告，确认setup和hold时间满足要求，如不满足需优化设计或约束；3) 下载配置：连接USB下载器，点击下载按钮，选择bitstream文件下载到FPGA；4) 在线调试：使用内置逻辑分析仪（Logic Analyzer）捕获内部信号，设置触发条件，实时观察波形；5) 固化配置：将bitstream写入FPGA内部Flash，上电自动加载。调试技巧：使用ILA（Integrated Logic Analyzer）观测关键信号；分段调试，先验证基本功能再添加复杂逻辑；使用LED或串口输出调试信息。"
        }
      ],
      "faqs": [
        {
          "question": "Tang Dynasty软件是免费的吗？",
          "answer": "是的，Tang Dynasty软件完全免费，无需授权费用，无功能限制，可无限期使用。支持Windows和Linux系统，可从安路官网免费下载。",
          "decisionGuide": "免费下载使用，无需担心授权问题，适合企业和个人开发者。",
          "keywords": ["免费软件", "Tang Dynasty下载", "授权"]
        },
        {
          "question": "TD软件与Xilinx Vivado/ISE有什么区别？",
          "answer": "TD软件界面类似ISE，操作逻辑与主流FPGA工具相似，有Xilinx/Intel经验的工程师可快速上手。主要区别：TD完全免费，针对安路器件优化，启动和编译速度更快。",
          "decisionGuide": "有FPGA开发经验的工程师1-2天即可上手TD软件，学习成本低。",
          "keywords": ["TD vs Vivado", "软件对比", "学习曲线"]
        },
        {
          "question": "如何进行在线调试？",
          "answer": "TD软件集成Logic Analyzer功能，可在设计中插入ILA核，设置触发条件和观测信号，下载后实时捕获波形。无需额外逻辑分析仪硬件，降低调试成本。",
          "decisionGuide": "使用内置Logic Analyzer进行在线调试，设置合适的触发条件捕获关键信号。",
          "keywords": ["在线调试", "Logic Analyzer", "ILA"]
        }
      ],
      "author": "LiTong FAE Team",
      "publishDate": "2024-02-01",
      "readTime": "20 min",
      "relatedArticles": ["fpga-selection-guide", "fpga-design-best-practices"],
      "faeInsights": {
        "author": "LiTong FAE Team",
        "content": "Tang Dynasty软件是安路FPGA开发的核心工具，虽然功能不如Vivado全面，但对于大多数应用已经足够。使用建议：1) 熟悉快捷键提高开发效率；2) 充分利用模板工程快速开始；3) 重视综合和实现报告中的警告信息；4) 学会使用Logic Analyzer进行调试。遇到问题可查看帮助文档或联系FAE支持。",
        "keyTakeaways": [
          "熟悉快捷键提高开发效率",
          "利用模板工程快速开始",
          "重视报告中的警告信息",
          "学会使用Logic Analyzer调试"
        ],
        "relatedProducts": ["ELF2-DK", "EAGLE-DK", "USB下载器"]
      },
      "customerCases": [
        {
          "customer": "某高校实验室",
          "challenge": "学生学习FPGA开发，需要免费的开发工具",
          "solution": "推荐安路FPGA和Tang Dynasty软件，完全免费，适合教学使用",
          "result": "学生成功完成FPGA课程设计，掌握可编程逻辑设计技能"
        }
      ],
      "seoTitle": "Tang Dynasty软件教程 - FPGA开发工具使用指南 | 力通代理",
      "seoDescription": "Tang Dynasty软件完整教程：安装配置、工程管理、设计输入、综合实现、调试下载。免费FPGA开发工具使用指南。",
      "seoKeywords": ["Tang Dynasty教程", "TD软件使用", "FPGA开发工具", "安路软件"]
    }
  ]
};

// Write the file
fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('Created anlogic support.json with FPGA technical articles');
