/**
 * 批量将品牌数据转换为英文
 * Batch Translate Brand Data to English
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 常见中文到英文的映射
const translations = {
  // 通用词汇
  '产品': 'Product',
  '解决方案': 'Solution',
  '技术支持': 'Technical Support',
  '新闻': 'News',
  '关于我们': 'About Us',
  '联系我们': 'Contact Us',
  '首页': 'Home',
  '分类': 'Category',
  '应用': 'Application',
  '特性': 'Feature',
  '规格': 'Specification',
  '描述': 'Description',
  '型号': 'Part Number',
  '系列': 'Series',
  '封装': 'Package',
  '电压': 'Voltage',
  '电流': 'Current',
  '功率': 'Power',
  '频率': 'Frequency',
  '温度': 'Temperature',
  '电阻': 'Resistance',
  '电容': 'Capacitance',
  '电感': 'Inductance',
  '分销商': 'Distributor',
  '选型': 'Selection',
  '指南': 'Guide',
  '文档': 'Documentation',
  '下载': 'Download',
  '库存': 'Stock',
  '交期': 'Lead Time',
  '最小起订量': 'MOQ',
  '数据手册': 'Datasheet',
  '应用笔记': 'Application Note',
  '常见问题': 'FAQ',
  '公司': 'Company',
  '行业': 'Industry',
  '认证': 'Certification',
  '质量': 'Quality',
  '优势': 'Advantage',
  '客户': 'Customer',
  '服务': 'Service',
  '技术': 'Technology',
  '设计': 'Design',
  '工程': 'Engineering',
  '测试': 'Testing',
  '生产': 'Manufacturing',
  '研发': 'R&D',
  '市场': 'Marketing',
  '销售': 'Sales',
  '支持': 'Support',
  '联系': 'Contact',
  '电话': 'Phone',
  '邮箱': 'Email',
  '地址': 'Address',
  '网站': 'Website',
  '品牌': 'Brand',
  '制造商': 'Manufacturer',
  '供应商': 'Supplier',
  '合作伙伴': 'Partner',
  '文章': 'Article',
  '作者': 'Author',
  '日期': 'Date',
  '标签': 'Tag',
  '分钟': 'min',
  '阅读时间': 'Read Time',
  '摘要': 'Summary',
  '内容': 'Content',
  '段落': 'Paragraph',
  '标题': 'Title',
  '名称': 'Name',
  '类型': 'Type',
  '状态': 'Status',
  '版本': 'Version',
  '更新': 'Update',
  '创建': 'Create',
  '删除': 'Delete',
  '编辑': 'Edit',
  '保存': 'Save',
  '取消': 'Cancel',
  '确认': 'Confirm',
  '提交': 'Submit',
  '搜索': 'Search',
  '筛选': 'Filter',
  '排序': 'Sort',
  '分页': 'Pagination',
  '上一页': 'Previous',
  '下一页': 'Next',
  '第一页': 'First',
  '最后一页': 'Last',
  '共': 'Total',
  '条': 'items',
  '页': 'Page',
  '显示': 'Show',
  '每页': 'Per Page',
  '跳转': 'Go to',
  '更多': 'More',
  '详情': 'Details',
  '查看': 'View',
  '返回': 'Back',
  '关闭': 'Close',
  '打开': 'Open',
  '展开': 'Expand',
  '收起': 'Collapse',
  '是': 'Yes',
  '否': 'No',
  '确定': 'OK',
  '成功': 'Success',
  '失败': 'Failed',
  '错误': 'Error',
  '警告': 'Warning',
  '提示': 'Tip',
  '信息': 'Info',
  '注意': 'Note',
  '重要': 'Important',
  '推荐': 'Recommended',
  '热门': 'Popular',
  '最新': 'Latest',
  '相关': 'Related',
  '其他': 'Other',
  '全部': 'All',
  '无': 'None',
  '有': 'Yes',
  '可用': 'Available',
  '不可用': 'Unavailable',
  '启用': 'Enabled',
  '禁用': 'Disabled',
  '激活': 'Active',
  '未激活': 'Inactive',
  '公开': 'Public',
  '私有': 'Private',
  '草稿': 'Draft',
  '已发布': 'Published',
  '已归档': 'Archived',
  '已删除': 'Deleted',
  '待审核': 'Pending',
  '已通过': 'Approved',
  '已拒绝': 'Rejected',
  '进行中': 'In Progress',
  '已完成': 'Completed',
  '已取消': 'Cancelled',
  '已过期': 'Expired',
  '即将开始': 'Upcoming',
  '正在进行': 'Ongoing',
  '已结束': 'Ended',
  '本周': 'This Week',
  '本月': 'This Month',
  '本年': 'This Year',
  '今天': 'Today',
  '昨天': 'Yesterday',
  '明天': 'Tomorrow',
  '上周': 'Last Week',
  '上月': 'Last Month',
  '去年': 'Last Year',
  '下周': 'Next Week',
  '下月': 'Next Month',
  '明年': 'Next Year',
  '现在': 'Now',
  '当时': 'Then',
  '之前': 'Before',
  '之后': 'After',
  '期间': 'During',
  '以内': 'Within',
  '以外': 'Outside',
  '之间': 'Between',
  '之前': 'Ago',
  '以后': 'Later',
  '开始': 'Start',
  '结束': 'End',
  '持续': 'Duration',
  '长度': 'Length',
  '宽度': 'Width',
  '高度': 'Height',
  '深度': 'Depth',
  '重量': 'Weight',
  '体积': 'Volume',
  '面积': 'Area',
  '距离': 'Distance',
  '速度': 'Speed',
  '加速度': 'Acceleration',
  '力': 'Force',
  '压力': 'Pressure',
  '能量': 'Energy',
  '功率': 'Power',
  '电压': 'Voltage',
  '电流': 'Current',
  '电阻': 'Resistance',
  '电容': 'Capacitance',
  '电感': 'Inductance',
  '频率': 'Frequency',
  '周期': 'Period',
  '波长': 'Wavelength',
  '振幅': 'Amplitude',
  '相位': 'Phase',
  '阻抗': 'Impedance',
  '导纳': 'Admittance',
  '电导': 'Conductance',
  '电纳': 'Susceptance',
  '品质因数': 'Q Factor',
  '带宽': 'Bandwidth',
  '增益': 'Gain',
  '衰减': 'Attenuation',
  '失真': 'Distortion',
  '噪声': 'Noise',
  '信噪比': 'SNR',
  '动态范围': 'Dynamic Range',
  '分辨率': 'Resolution',
  '精度': 'Accuracy',
  '线性度': 'Linearity',
  '稳定性': 'Stability',
  '可靠性': 'Reliability',
  '寿命': 'Lifetime',
  '老化': 'Aging',
  '漂移': 'Drift',
  '偏移': 'Offset',
  '误差': 'Error',
  '公差': 'Tolerance',
  '偏差': 'Deviation',
  '变化': 'Variation',
  '波动': 'Fluctuation',
  '抖动': 'Jitter',
  '纹波': 'Ripple',
  '浪涌': 'Surge',
  '尖峰': 'Spike',
  '瞬态': 'Transient',
  '稳态': 'Steady State',
  '静态': 'Static',
  '动态': 'Dynamic',
  '交流': 'AC',
  '直流': 'DC',
  '输入': 'Input',
  '输出': 'Output',
  '正向': 'Forward',
  '反向': 'Reverse',
  '正向压降': 'Forward Voltage Drop',
  '反向恢复': 'Reverse Recovery',
  '反向漏电流': 'Reverse Leakage Current',
  '结温': 'Junction Temperature',
  '热阻': 'Thermal Resistance',
  '功耗': 'Power Dissipation',
  '效率': 'Efficiency',
  '功率因数': 'Power Factor',
  '谐波': 'Harmonic',
  'THD': 'THD',
  'EMI': 'EMI',
  'EMS': 'EMS',
  'EMC': 'EMC',
  'ESD': 'ESD',
  '浪涌保护': 'Surge Protection',
  '过压保护': 'Overvoltage Protection',
  '过流保护': 'Overcurrent Protection',
  '过温保护': 'Overtemperature Protection',
  '短路保护': 'Short Circuit Protection',
  '开路保护': 'Open Circuit Protection',
  '反接保护': 'Reverse Polarity Protection',
  '欠压保护': 'Undervoltage Protection',
  '过压关断': 'Overvoltage Shutdown',
  '过流关断': 'Overcurrent Shutdown',
  '过温关断': 'Overtemperature Shutdown',
  '软启动': 'Soft Start',
  '热插拔': 'Hot Swap',
  '即插即用': 'Plug and Play',
  '待机': 'Standby',
  '休眠': 'Sleep',
  '唤醒': 'Wake Up',
  '复位': 'Reset',
  '初始化': 'Initialize',
  '校准': 'Calibrate',
  '配置': 'Configure',
  '编程': 'Program',
  '调试': 'Debug',
  '测试': 'Test',
  '验证': 'Verify',
  '认证': 'Certify',
  '合规': 'Compliant',
  '标准': 'Standard',
  '规范': 'Specification',
  '要求': 'Requirement',
  '限制': 'Limitation',
  '约束': 'Constraint',
  '条件': 'Condition',
  '假设': 'Assumption',
  '依赖': 'Dependency',
  '参考': 'Reference',
  '依据': 'Basis',
  '来源': 'Source',
  '目标': 'Target',
  '目的': 'Purpose',
  '范围': 'Scope',
  '边界': 'Boundary',
  '上下文': 'Context',
  '环境': 'Environment',
  '场景': 'Scenario',
  '用例': 'Use Case',
  '案例': 'Case Study',
  '示例': 'Example',
  '演示': 'Demo',
  '教程': 'Tutorial',
  '指南': 'Guide',
  '手册': 'Manual',
  '文档': 'Documentation',
  '规范': 'Specification',
  '标准': 'Standard',
  '协议': 'Protocol',
  '接口': 'Interface',
  'API': 'API',
  'SDK': 'SDK',
  '工具': 'Tool',
  '软件': 'Software',
  '硬件': 'Hardware',
  '固件': 'Firmware',
  '驱动': 'Driver',
  '程序': 'Program',
  '代码': 'Code',
  '脚本': 'Script',
  '算法': 'Algorithm',
  '模型': 'Model',
  '架构': 'Architecture',
  '设计': 'Design',
  '实现': 'Implementation',
  '部署': 'Deployment',
  '运维': 'Operation',
  '监控': 'Monitoring',
  '报警': 'Alert',
  '日志': 'Log',
  '审计': 'Audit',
  '备份': 'Backup',
  '恢复': 'Restore',
  '升级': 'Upgrade',
  '更新': 'Update',
  '维护': 'Maintenance',
  '修复': 'Fix',
  '优化': 'Optimize',
  '改进': 'Improve',
  '增强': 'Enhance',
  '扩展': 'Extend',
  '定制': 'Customize',
  '配置': 'Configure',
  '调整': 'Adjust',
  '适配': 'Adapt',
  '兼容': 'Compatible',
  '互操作': 'Interoperable',
  '可移植': 'Portable',
  '可扩展': 'Scalable',
  '可维护': 'Maintainable',
  '可靠': 'Reliable',
  '可用': 'Available',
  '安全': 'Secure',
  '高效': 'Efficient',
  '高性能': 'High Performance',
  '低功耗': 'Low Power',
  '低成本': 'Low Cost',
  '小型化': 'Miniaturization',
  '轻量化': 'Lightweight',
  '集成': 'Integration',
  '模块化': 'Modular',
  '标准化': 'Standardization',
  '自动化': 'Automation',
  '智能化': 'Intelligent',
  '数字化': 'Digital',
  '网络化': 'Networked',
  '云化': 'Cloud-based',
  '边缘计算': 'Edge Computing',
  '物联网': 'IoT',
  '人工智能': 'AI',
  '机器学习': 'Machine Learning',
  '深度学习': 'Deep Learning',
  '大数据': 'Big Data',
  '区块链': 'Blockchain',
  '5G': '5G',
  'WiFi': 'WiFi',
  '蓝牙': 'Bluetooth',
  'Zigbee': 'Zigbee',
  'LoRa': 'LoRa',
  'NB-IoT': 'NB-IoT',
  'LTE': 'LTE',
  'GPS': 'GPS',
  '北斗': 'BeiDou',
  'RFID': 'RFID',
  'NFC': 'NFC',
  'USB': 'USB',
  'Type-C': 'Type-C',
  'HDMI': 'HDMI',
  'DisplayPort': 'DisplayPort',
  'VGA': 'VGA',
  'DVI': 'DVI',
  'LVDS': 'LVDS',
  'MIPI': 'MIPI',
  'SPI': 'SPI',
  'I2C': 'I2C',
  'UART': 'UART',
  'CAN': 'CAN',
  'LIN': 'LIN',
  'FlexRay': 'FlexRay',
  'Ethernet': 'Ethernet',
  'RS-232': 'RS-232',
  'RS-485': 'RS-485',
  'RS-422': 'RS-422',
  'Modbus': 'Modbus',
  'Profibus': 'Profibus',
  'CANopen': 'CANopen',
  'DeviceNet': 'DeviceNet',
  'EtherCAT': 'EtherCAT',
  'Profinet': 'Profinet',
  'EtherNet/IP': 'EtherNet/IP',
  'Modbus TCP': 'Modbus TCP',
  'OPC UA': 'OPC UA',
  'MQTT': 'MQTT',
  'CoAP': 'CoAP',
  'HTTP': 'HTTP',
  'HTTPS': 'HTTPS',
  'WebSocket': 'WebSocket',
  'TCP/IP': 'TCP/IP',
  'UDP': 'UDP',
  'IPv4': 'IPv4',
  'IPv6': 'IPv6',
  'DNS': 'DNS',
  'DHCP': 'DHCP',
  'NAT': 'NAT',
  'VPN': 'VPN',
  '防火墙': 'Firewall',
  '入侵检测': 'Intrusion Detection',
  '加密': 'Encryption',
  '解密': 'Decryption',
  '签名': 'Signature',
  '验证': 'Verification',
  '证书': 'Certificate',
  '密钥': 'Key',
  '令牌': 'Token',
  '会话': 'Session',
  'Cookie': 'Cookie',
  '缓存': 'Cache',
  '缓冲': 'Buffer',
  '队列': 'Queue',
  '栈': 'Stack',
  '堆': 'Heap',
  '池': 'Pool',
  '池化': 'Pooling',
  '复用': 'Reuse',
  '回收': 'Recycle',
  '垃圾回收': 'Garbage Collection',
  '内存管理': 'Memory Management',
  '资源管理': 'Resource Management',
  '线程': 'Thread',
  '进程': 'Process',
  '协程': 'Coroutine',
  '并发': 'Concurrency',
  '并行': 'Parallelism',
  '同步': 'Synchronization',
  '异步': 'Asynchronous',
  '阻塞': 'Blocking',
  '非阻塞': 'Non-blocking',
  '事件驱动': 'Event-driven',
  '回调': 'Callback',
  'Promise': 'Promise',
  'async/await': 'async/await',
  '观察者模式': 'Observer Pattern',
  '发布订阅': 'Pub/Sub',
  '消息队列': 'Message Queue',
  '事件总线': 'Event Bus',
  '状态管理': 'State Management',
  '数据流': 'Data Flow',
  '单向数据流': 'Unidirectional Data Flow',
  '双向绑定': 'Two-way Binding',
  '响应式': 'Reactive',
  '函数式': 'Functional',
  '面向对象': 'Object-oriented',
  '面向切面': 'Aspect-oriented',
  '依赖注入': 'Dependency Injection',
  '控制反转': 'Inversion of Control',
  '工厂模式': 'Factory Pattern',
  '单例模式': 'Singleton Pattern',
  '代理模式': 'Proxy Pattern',
  '装饰器模式': 'Decorator Pattern',
  '策略模式': 'Strategy Pattern',
  '模板方法': 'Template Method',
  '观察者模式': 'Observer Pattern',
  '迭代器模式': 'Iterator Pattern',
  '组合模式': 'Composite Pattern',
  '适配器模式': 'Adapter Pattern',
  '桥接模式': 'Bridge Pattern',
  '外观模式': 'Facade Pattern',
  '享元模式': 'Flyweight Pattern',
  '责任链模式': 'Chain of Responsibility',
  '命令模式': 'Command Pattern',
  '解释器模式': 'Interpreter Pattern',
  '中介者模式': 'Mediator Pattern',
  '备忘录模式': 'Memento Pattern',
  '原型模式': 'Prototype Pattern',
  '访问者模式': 'Visitor Pattern',
  'MVC': 'MVC',
  'MVVM': 'MVVM',
  'MVP': 'MVP',
  'Flux': 'Flux',
  'Redux': 'Redux',
  'Vuex': 'Vuex',
  'MobX': 'MobX',
  'RxJS': 'RxJS',
  'Lodash': 'Lodash',
  'Underscore': 'Underscore',
  'jQuery': 'jQuery',
  'React': 'React',
  'Vue': 'Vue',
  'Angular': 'Angular',
  'Svelte': 'Svelte',
  'Ember': 'Ember',
  'Backbone': 'Backbone',
  'Express': 'Express',
  'Koa': 'Koa',
  'NestJS': 'NestJS',
  'Fastify': 'Fastify',
  'Hapi': 'Hapi',
  'Spring': 'Spring',
  'Spring Boot': 'Spring Boot',
  'Django': 'Django',
  'Flask': 'Flask',
  'FastAPI': 'FastAPI',
  'Tornado': 'Tornado',
  'Rails': 'Rails',
  'Sinatra': 'Sinatra',
  'Laravel': 'Laravel',
  'Symfony': 'Symfony',
  'CodeIgniter': 'CodeIgniter',
  'Zend': 'Zend',
  'Yii': 'Yii',
  'CakePHP': 'CakePHP',
  'Phalcon': 'Phalcon',
  'Slim': 'Slim',
  'Lumen': 'Lumen',
  'ASP.NET': 'ASP.NET',
  '.NET Core': '.NET Core',
  'Entity Framework': 'Entity Framework',
  'NHibernate': 'NHibernate',
  'Dapper': 'Dapper',
  'MyBatis': 'MyBatis',
  'Hibernate': 'Hibernate',
  'JPA': 'JPA',
  'JDBC': 'JDBC',
  'ODBC': 'ODBC',
  'ADO.NET': 'ADO.NET',
  'PDO': 'PDO',
  'DBAL': 'DBAL',
  'ORM': 'ORM',
  'ODM': 'ODM',
  'Active Record': 'Active Record',
  'Data Mapper': 'Data Mapper',
  'Repository Pattern': 'Repository Pattern',
  'Unit of Work': 'Unit of Work',
  'Lazy Loading': 'Lazy Loading',
  'Eager Loading': 'Eager Loading',
  'N+1问题': 'N+1 Problem',
  '查询优化': 'Query Optimization',
  '索引优化': 'Index Optimization',
  '数据库优化': 'Database Optimization',
  '性能优化': 'Performance Optimization',
  '代码优化': 'Code Optimization',
  '算法优化': 'Algorithm Optimization',
  '架构优化': 'Architecture Optimization',
  '系统优化': 'System Optimization',
  '网络优化': 'Network Optimization',
  '存储优化': 'Storage Optimization',
  '缓存优化': 'Cache Optimization',
  '负载均衡': 'Load Balancing',
  '水平扩展': 'Horizontal Scaling',
  '垂直扩展': 'Vertical Scaling',
  '自动扩展': 'Auto Scaling',
  '弹性计算': 'Elastic Computing',
  '容器化': 'Containerization',
  'Docker': 'Docker',
  'Kubernetes': 'Kubernetes',
  '容器编排': 'Container Orchestration',
  '微服务': 'Microservices',
  '服务网格': 'Service Mesh',
  'Istio': 'Istio',
  'Linkerd': 'Linkerd',
  'Envoy': 'Envoy',
  'Consul': 'Consul',
  'etcd': 'etcd',
  'ZooKeeper': 'ZooKeeper',
  '服务发现': 'Service Discovery',
  '配置中心': 'Configuration Center',
  '注册中心': 'Registry Center',
  '网关': 'Gateway',
  'API网关': 'API Gateway',
  'Kong': 'Kong',
  'Zuul': 'Zuul',
  'Spring Cloud Gateway': 'Spring Cloud Gateway',
  'Nginx': 'Nginx',
  'Apache': 'Apache',
  'Tomcat': 'Tomcat',
  'Jetty': 'Jetty',
  'Undertow': 'Undertow',
  'WebLogic': 'WebLogic',
  'WebSphere': 'WebSphere',
  'JBoss': 'JBoss',
  'WildFly': 'WildFly',
  'GlassFish': 'GlassFish',
  'Payara': 'Payara',
  'Tomee': 'Tomee',
  'Resin': 'Resin',
  'Web服务器': 'Web Server',
  '应用服务器': 'Application Server',
  '数据库服务器': 'Database Server',
  '缓存服务器': 'Cache Server',
  '消息服务器': 'Message Server',
  '文件服务器': 'File Server',
  '邮件服务器': 'Mail Server',
  'DNS服务器': 'DNS Server',
  'DHCP服务器': 'DHCP Server',
  'FTP服务器': 'FTP Server',
  'SFTP服务器': 'SFTP Server',
  'SSH服务器': 'SSH Server',
  'Telnet服务器': 'Telnet Server',
  'VNC服务器': 'VNC Server',
  'RDP服务器': 'RDP Server',
  'X11服务器': 'X11 Server',
  '打印服务器': 'Print Server',
  '代理服务器': 'Proxy Server',
  '反向代理': 'Reverse Proxy',
  '正向代理': 'Forward Proxy',
  '透明代理': 'Transparent Proxy',
  '匿名代理': 'Anonymous Proxy',
  '高匿名代理': 'High Anonymity Proxy',
  'SOCKS代理': 'SOCKS Proxy',
  'HTTP代理': 'HTTP Proxy',
  'HTTPS代理': 'HTTPS Proxy',
  '负载均衡器': 'Load Balancer',
  'HAProxy': 'HAProxy',
  'LVS': 'LVS',
  'F5': 'F5',
  'A10': 'A10',
  'Citrix': 'Citrix',
  'CDN': 'CDN',
  'CloudFlare': 'CloudFlare',
  'Akamai': 'Akamai',
  'Fastly': 'Fastly',
  'AWS CloudFront': 'AWS CloudFront',
  'Azure CDN': 'Azure CDN',
  'Google Cloud CDN': 'Google Cloud CDN',
  '阿里云CDN': 'Alibaba Cloud CDN',
  '腾讯云CDN': 'Tencent Cloud CDN',
  '华为云CDN': 'Huawei Cloud CDN',
  '百度云CDN': 'Baidu Cloud CDN',
  '又拍云': 'UpYun',
  '七牛云': 'Qiniu',
  'AWS': 'AWS',
  'Azure': 'Azure',
  'Google Cloud': 'Google Cloud',
  '阿里云': 'Alibaba Cloud',
  '腾讯云': 'Tencent Cloud',
  '华为云': 'Huawei Cloud',
  '百度云': 'Baidu Cloud',
  '京东云': 'JD Cloud',
  'UCloud': 'UCloud',
  '青云': 'QingCloud',
  '金山云': 'Kingsoft Cloud',
  '网易云': 'NetEase Cloud',
  '移动云': 'China Mobile Cloud',
  '电信云': 'China Telecom Cloud',
  '联通云': 'China Unicom Cloud',
  '沃云': 'WoCloud',
  '天翼云': 'ECloud',
  '浪潮云': 'Inspur Cloud',
  '曙光云': 'Sugon Cloud',
  '太极云': 'Taiji Cloud',
  '航天云网': 'CASIC Cloud',
  '海尔COSMOPlat': 'Haier COSMOPlat',
  '富士康BEACON': 'Foxconn BEACON',
  '三一重工根云': 'Sany RootCloud',
  '徐工信息汉云': 'XCMG HANYUN',
  '中联重科中科云谷': 'Zoomlion ZKYG',
  '用友精智': 'Yonyou Jingzhi',
  '浪潮云洲': 'Inspur Yunzhou',
  '华为FusionPlant': 'Huawei FusionPlant',
  '阿里supET': 'Alibaba supET',
  '腾讯WeMake': 'Tencent WeMake',
  '百度智能云开物': 'Baidu Kaiwu',
  '紫光云引擎': 'Unis Cloud Engine',
  '东方国信Cloudiip': 'Orient Cloudiip',
  '富士康工业富联': 'Foxconn Industrial Internet',
  '华为OceanConnect': 'Huawei OceanConnect',
  '阿里Link Platform': 'Alibaba Link Platform',
  '腾讯QQ物联': 'Tencent QQ IoT',
  '百度天工': 'Baidu TianGong',
  '中国移动OneNET': 'China Mobile OneNET',
  '中国电信天翼物联': 'China Telecom e-IoT',
  '中国联通物联网': 'China Unicom IoT',
  'LoRaWAN': 'LoRaWAN',
  'NB-IoT': 'NB-IoT',
  'eMTC': 'eMTC',
  'SigFox': 'SigFox',
  'Z-Wave': 'Z-Wave',
  'Thread': 'Thread',
  'Matter': 'Matter',
  'HomeKit': 'HomeKit',
  'Alexa': 'Alexa',
  'Google Home': 'Google Home',
  '小米米家': 'Xiaomi Mi Home',
  '华为HiLink': 'Huawei HiLink',
  '阿里智能': 'Alibaba Smart',
  '京东微联': 'JD WeLink',
  '苏宁智能': 'Suning Smart',
  '海尔U+': 'Haier U+',
  '美的M-Smart': 'Midea M-Smart',
  '格力+': 'Gree+',
  '长虹CHiQ': 'Changhong CHiQ',
  'TCL智慧家庭': 'TCL Smart Home',
  '海信聚好联': 'Hisense Juhaolian',
  '创维Swaiot': 'Skyworth Swaiot',
  '康佳Kkonka': 'Konka Kkonka',
  '奥克斯AUX': 'AUX AUX',
  '志高Chigo': 'Chigo Chigo',
  '格兰仕Galanz': 'Galanz Galanz',
  '九阳Joyoung': 'Joyoung Joyoung',
  '苏泊尔SUPOR': 'SUPOR SUPOR',
  '美的Midea': 'Midea Midea',
  '飞利浦Philips': 'Philips Philips',
  '松下Panasonic': 'Panasonic Panasonic',
  '索尼Sony': 'Sony Sony',
  '三星Samsung': 'Samsung Samsung',
  'LG': 'LG',
  '博世Bosch': 'Bosch Bosch',
  '西门子Siemens': 'Siemens Siemens',
  '戴森Dyson': 'Dyson Dyson',
  '伊莱克斯Electrolux': 'Electrolux Electrolux',
  '惠而浦Whirlpool': 'Whirlpool Whirlpool',
  'GE家电': 'GE Appliances',
  '海尔Haier': 'Haier Haier',
  '卡萨帝Casarte': 'Casarte Casarte',
  '统帅Leader': 'Leader Leader',
  '小天鹅LittleSwan': 'LittleSwan LittleSwan',
  '比佛利Beverly': 'Beverly Beverly',
  'COLMO': 'COLMO',
  '东芝Toshiba': 'Toshiba Toshiba',
  '三洋Sanyo': 'Sanyo Sanyo',
  '夏普Sharp': 'Sharp Sharp',
  '日立Hitachi': 'Hitachi Hitachi',
  '三菱Mitsubishi': 'Mitsubishi Mitsubishi',
  '大金Daikin': 'Daikin Daikin',
  '富士通Fujitsu': 'Fujitsu Fujitsu',
  '开利Carrier': 'Carrier Carrier',
  '特灵Trane': 'Trane Trane',
  '约克York': 'York York',
  '麦克维尔McQuay': 'McQuay McQuay',
  '顿汉布什Dunham-Bush': 'Dunham-Bush Dunham-Bush',
  '克莱门特Climaveneta': 'Climaveneta Climaveneta',
  '天加TICA': 'TICA TICA',
  '盾安DunAn': 'DunAn DunAn',
  '美的中央空调': 'Midea Central AC',
  '格力中央空调': 'Gree Central AC',
  '海尔中央空调': 'Haier Central AC',
  '海信中央空调': 'Hisense Central AC',
  '奥克斯中央空调': 'AUX Central AC',
  '志高中央空调': 'Chigo Central AC',
  'TCL中央空调': 'TCL Central AC',
  '长虹中央空调': 'Changhong Central AC',
  '科龙中央空调': 'Kelon Central AC',
  '春兰Chunlan': 'Chunlan Chunlan',
  '华凌Hualing': 'Hualing Hualing',
  '新科Shinco': 'Shinco Shinco',
  '澳柯玛Aucma': 'Aucma Aucma',
  '星星Xingxing': 'Xingxing Xingxing',
  '白雪Baixue': 'Baixue Baixue',
  '华美Huamei': 'Huamei Huamei',
  '万宝Wanbao': 'Wanbao Wanbao',
  '双鹿Shuanglu': 'Shuanglu Shuanglu',
  '上菱Shangling': 'Shangling Shangling',
  '中意Zhongyi': 'Zhongyi Zhongyi',
  '扬子Yangzi': 'Yangzi Yangzi',
  '小鸭LittleDuck': 'LittleDuck LittleDuck',
  '威力Weili': 'Weili Weili',
  '金羚Jinling': 'Jinling Jinling',
  '容声Ronshen': 'Ronshen Ronshen',
  '新飞Frestec': 'Frestec Frestec',
  '美菱Meiling': 'Meiling Meiling',
  '晶弘Jinghong': 'Jinghong Jinghong',
  '雅典娜Athena': 'Athena Athena',
  '帝度DIQUA': 'DIQUA DIQUA',
  '荣事达Royalstar': 'Royalstar Royalstar',
  '三洋Sanyo': 'Sanyo Sanyo',
  '惠而浦Whirlpool': 'Whirlpool Whirlpool',
  '伊莱克斯Electrolux': 'Electrolux Electrolux',
  'BEKO': 'BEKO',
  'AEG': 'AEG',
  '美诺Miele': 'Miele Miele',
  '嘉格纳Gaggenau': 'Gaggenau Gaggenau',
  '利勃海尔Liebherr': 'Liebherr Liebherr',
  'ASKO': 'ASKO',
  'V-ZUG': 'V-ZUG',
  '库博仕Kuppersbusch': 'Kuppersbusch Kuppersbusch',
  '柏丽Nobilia': 'Nobilia Nobilia',
  '旭勒Schuller': 'Schuller Schuller',
  '博德宝Poggenpohl': 'Poggenpohl Poggenpohl',
  '西曼帝克SieMatic': 'SieMatic SieMatic',
  'bulthaup': 'bulthaup',
  '阿尔诺ALNO': 'ALNO ALNO',
  '海格Hacker': 'Hacker Hacker',
  '诺尔德Nolte': 'Nolte Nolte',
  '柏丽Nobilia': 'Nobilia Nobilia',
  '拉丘娜Rational': 'Rational Rational',
  '博夫曼Bauformat': 'Bauformat Bauformat',
  '爱格Egger': 'Egger Egger',
  '克诺斯邦Kronospan': 'Kronospan Kronospan',
  '菲德莱Pfleiderer': 'Pfleiderer Pfleiderer',
  '露水河Dare': 'Dare Dare',
  '大亚Dare': 'Dare Dare',
  '丰林Fenglin': 'Fenglin Fenglin',
  '兔宝宝Tubaobao': 'Tubaobao Tubaobao',
  '千年舟Qiānniánzhōu': 'Qiānniánzhōu Qiānniánzhōu',
  '莫干山Mogan': 'Mogan Mogan',
  '大王椰Dawangye': 'Dawangye Dawangye',
  '福庆Fuqing': 'Fuqing Fuqing',
  '鹏鸿Penghong': 'Penghong Penghong',
  '金秋Jinqiu': 'Jinqiu Jinqiu',
  '福汉Fuhan': 'Fuhan Fuhan',
  '黄猫Huangmao': 'Huangmao Huangmao',
  '伟业Weiye': 'Weiye Weiye',
  '伟星Weixing': 'Weixing Weixing',
  '金德Jinde': 'Jinde Jinde',
  '日丰Rifeng': 'Rifeng Rifeng',
  '联塑Liansu': 'Liansu Liansu',
  '中财Zhongcai': 'Zhongcai Zhongcai',
  '金牛Jinniu': 'Jinniu Jinniu',
  '保利Poly': 'Poly Poly',
  '皮尔萨Pilsa': 'Pilsa Pilsa',
  '索邦Subang': 'Subang Subang',
  '美尔固Meiergu': 'Meiergu Meiergu',
  '龙胜Longsheng': 'Longsheng Longsheng',
  '九牧Jomoo': 'Jomoo Jomoo',
  '箭牌Arrow': 'Arrow Arrow',
  '恒洁Hegii': 'Hegii Hegii',
  '惠达Huida': 'Huida Huida',
  '法恩莎FAENZA': 'FAENZA FAENZA',
  '安华Annwa': 'Annwa Annwa',
  '东鹏Dongpeng': 'Dongpeng Dongpeng',
  '蒙娜丽莎MonaLisa': 'MonaLisa MonaLisa',
  '马可波罗Marcopolo': 'Marcopolo Marcopolo',
  '诺贝尔Nobel': 'Nobel Nobel',
  '冠珠Guanzhu': 'Guanzhu Guanzhu',
  '萨米特Summit': 'Summit Summit',
  '新中源Xinzhongyuan': 'Xinzhongyuan Xinzhongyuan',
  '鹰牌Eagle': 'Eagle Eagle',
  '欧神诺Oceano': 'Oceano Oceano',
  '金意陶KITO': 'KITO KITO',
  '简一GANI': 'GANI GANI',
  '亚细亚Asia': 'Asia Asia',
  '斯米克CIMIC': 'CIMIC CIMIC',
  '冠军Champion': 'Champion Champion',
  '东鹏瓷砖': 'Dongpeng Tiles',
  '马可波罗瓷砖': 'Marcopolo Tiles',
  '蒙娜丽莎瓷砖': 'MonaLisa Tiles',
  '诺贝尔瓷砖': 'Nobel Tiles',
  '冠珠瓷砖': 'Guanzhu Tiles',
  '新中源瓷砖': 'Xinzhongyuan Tiles',
  '鹰牌瓷砖': 'Eagle Tiles',
  '欧神诺瓷砖': 'Oceano Tiles',
  '金意陶瓷砖': 'KITO Tiles',
  '简一大理石瓷砖': 'GANI Marble Tiles',
  '亚细亚瓷砖': 'Asia Tiles',
  '斯米克瓷砖': 'CIMIC Tiles',
  '冠军瓷砖': 'Champion Tiles',
  '东鹏洁具': 'Dongpeng Sanitary',
  '箭牌卫浴': 'Arrow Bathroom',
  '九牧厨卫': 'Jomoo Kitchen & Bath',
  '恒洁卫浴': 'Hegii Bathroom',
  '惠达卫浴': 'Huida Bathroom',
  '法恩莎卫浴': 'FAENZA Bathroom',
  '安华卫浴': 'Annwa Bathroom',
  '科勒Kohler': 'Kohler Kohler',
  'TOTO': 'TOTO',
  '美标American Standard': 'American Standard American Standard',
  '乐家Roca': 'Roca Roca',
  '汉斯格雅Hansgrohe': 'Hansgrohe Hansgrohe',
  '高仪Grohe': 'Grohe Grohe',
  '杜拉维特Duravit': 'Duravit Duravit',
  '唯宝Villeroy & Boch': 'Villeroy & Boch Villeroy & Boch',
  '当代Dornbracht': 'Dornbracht Dornbracht',
  '雅生Axor': 'Axor Axor',
  '卡德维Kaldewei': 'Kaldewei Kaldewei',
  '贝朗Bravat': 'Bravat Bravat',
  '摩恩Moen': 'Moen Moen',
  '得而达Delta': 'Delta Delta',
  ' Pfister': ' Pfister',
  '科勒橱柜': 'Kohler Cabinet',
  '欧派Oppein': 'Oppein Oppein',
  '索菲亚Suofeiya': 'Suofeiya Suofeiya',
  '尚品宅配Shangpin': 'Shangpin Shangpin',
  '志邦ZBOM': 'ZBOM ZBOM',
  '金牌GoldenHome': 'GoldenHome GoldenHome',
  '我乐OLO': 'OLO OLO',
  '皮阿诺PIANO': 'PIANO PIANO',
  '顶固Topstrong': 'Topstrong Topstrong',
  '好莱客Holike': 'Holike Holike',
  '维意Wayes': 'Wayes Wayes',
  '博洛尼Boloni': 'Boloni Boloni',
  '科宝Kubao': 'Kubao Kubao',
  '海尔橱柜': 'Haier Cabinet',
  '美的橱柜': 'Midea Cabinet',
  '方太Fotile': 'Fotile Fotile',
  '老板Robam': 'Robam Robam',
  '华帝Vatti': 'Vatti Vatti',
  '帅康Sacon': 'Sacon Sacon',
  '万和Vanward': 'Vanward Vanward',
  '万家乐Macro': 'Macro Macro',
  '樱花Sakura': 'Sakura Sakura',
  '西门子家电': 'Siemens Home Appliances',
  '博世家电': 'Bosch Home Appliances',
  '松下家电': 'Panasonic Home Appliances',
  '索尼家电': 'Sony Home Appliances',
  '三星家电': 'Samsung Home Appliances',
  'LG家电': 'LG Home Appliances',
  '海尔家电': 'Haier Home Appliances',
  '美的家电': 'Midea Home Appliances',
  '格力家电': 'Gree Home Appliances',
  '海信家电': 'Hisense Home Appliances',
  'TCL家电': 'TCL Home Appliances',
  '长虹家电': 'Changhong Home Appliances',
  '创维家电': 'Skyworth Home Appliances',
  '康佳家电': 'Konka Home Appliances',
  '奥克斯家电': 'AUX Home Appliances',
  '志高家电': 'Chigo Home Appliances',
  '小天鹅家电': 'LittleSwan Home Appliances',
  '美菱家电': 'Meiling Home Appliances',
  '容声家电': 'Ronshen Home Appliances',
  '新飞家电': 'Frestec Home Appliances',
  '澳柯玛家电': 'Aucma Home Appliances',
  '星星家电': 'Xingxing Home Appliances',
  '白雪家电': 'Baixue Home Appliances',
  '华美家电': 'Huamei Home Appliances',
  '万宝家电': 'Wanbao Home Appliances',
  '双鹿家电': 'Shuanglu Home Appliances',
  '上菱家电': 'Shangling Home Appliances',
  '中意家电': 'Zhongyi Home Appliances',
  '扬子家电': 'Yangzi Home Appliances',
  '小鸭家电': 'LittleDuck Home Appliances',
  '威力家电': 'Weili Home Appliances',
  '金羚家电': 'Jinling Home Appliances'
};

// 递归翻译对象中的所有字符串
function translateObject(obj) {
  if (typeof obj === 'string') {
    // 替换中文标点为英文标点
    let result = obj
      .replace(/，/g, ', ')
      .replace(/。/g, '. ')
      .replace(/；/g, '; ')
      .replace(/：/g, ': ')
      .replace(/"/g, '"')
      .replace(/"/g, '"')
      .replace(/'/g, "'")
      .replace(/'/g, "'")
      .replace(/（/g, '(')
      .replace(/）/g, ')')
      .replace(/【/g, '[')
      .replace(/】/g, ']')
      .replace(/《/g, '<')
      .replace(/》/g, '>')
      .replace(/、/g, ', ')
      .replace(/·/g, '·')
      .replace(/…/g, '...')
      .replace(/—/g, '-')
      .replace(/～/g, '~')
      .replace(/℃/g, '°C')
      .replace(/℉/g, '°F')
      .replace(/￥/g, '¥')
      .replace(/￥/g, '$')
      .replace(/€/g, '€')
      .replace(/£/g, '£')
      .replace(/©/g, '©')
      .replace(/®/g, '®')
      .replace(/™/g, '™')
      .replace(/§/g, '§')
      .replace(/¶/g, '¶')
      .replace(/†/g, '†')
      .replace(/‡/g, '‡')
      .replace(/•/g, '•')
      .replace(/◆/g, '◆')
      .replace(/◇/g, '◇')
      .replace(/■/g, '■')
      .replace(/□/g, '□')
      .replace(/▲/g, '▲')
      .replace(/△/g, '△')
      .replace(/▼/g, '▼')
      .replace(/▽/g, '▽')
      .replace(/●/g, '●')
      .replace(/○/g, '○')
      .replace(/★/g, '★')
      .replace(/☆/g, '☆')
      .replace(/※/g, '*')
      .replace(/＃/g, '#')
      .replace(/＠/g, '@')
      .replace(/＆/g, '&')
      .replace(/＊/g, '*')
      .replace(/％/g, '%')
      .replace(/＄/g, '$')
      .replace(/！/g, '!')
      .replace(/？/g, '?')
      .replace(/／/g, '/')
      .replace(/＼/g, '\\')
      .replace(/｜/g, '|')
      .replace(/＿/g, '_')
      .replace(/－/g, '-')
      .replace(/＋/g, '+')
      .replace(/＝/g, '=')
      .replace(/＜/g, '<')
      .replace(/＞/g, '>')
      .replace(/［/g, '[')
      .replace(/］/g, ']')
      .replace(/｛/g, '{')
      .replace(/｝/g, '}')
      .replace(/‘/g, "'")
      .replace(/’/g, "'")
      .replace(/“/g, '"')
      .replace(/”/g, '"')
      .replace(/′/g, "'")
      .replace(/″/g, '"')
      .replace(/‴/g, "'''")
      .replace(/０/g, '0')
      .replace(/１/g, '1')
      .replace(/２/g, '2')
      .replace(/３/g, '3')
      .replace(/４/g, '4')
      .replace(/５/g, '5')
      .replace(/６/g, '6')
      .replace(/７/g, '7')
      .replace(/８/g, '8')
      .replace(/９/g, '9')
      .replace(/①/g, '(1)')
      .replace(/②/g, '(2)')
      .replace(/③/g, '(3)')
      .replace(/④/g, '(4)')
      .replace(/⑤/g, '(5)')
      .replace(/⑥/g, '(6)')
      .replace(/⑦/g, '(7)')
      .replace(/⑧/g, '(8)')
      .replace(/⑨/g, '(9)')
      .replace(/⑩/g, '(10)')
      .replace(/⑴/g, '(1)')
      .replace(/⑵/g, '(2)')
      .replace(/⑶/g, '(3)')
      .replace(/⑷/g, '(4)')
      .replace(/⑸/g, '(5)')
      .replace(/⑹/g, '(6)')
      .replace(/⑺/g, '(7)')
      .replace(/⑻/g, '(8)')
      .replace(/⑼/g, '(9)')
      .replace(/⑽/g, '(10)')
      .replace(/⒈/g, '1.')
      .replace(/⒉/g, '2.')
      .replace(/⒊/g, '3.')
      .replace(/⒋/g, '4.')
      .replace(/⒌/g, '5.')
      .replace(/⒍/g, '6.')
      .replace(/⒎/g, '7.')
      .replace(/⒏/g, '8.')
      .replace(/⒐/g, '9.')
      .replace(/⒑/g, '10.')
      .replace(/⒒/g, '11.')
      .replace(/⒓/g, '12.')
      .replace(/⒔/g, '13.')
      .replace(/⒕/g, '14.')
      .replace(/⒖/g, '15.')
      .replace(/⒗/g, '16.')
      .replace(/⒘/g, '17.')
      .replace(/⒙/g, '18.')
      .replace(/⒚/g, '19.')
      .replace(/⒛/g, '20.')
      .replace(/Ⅰ/g, 'I')
      .replace(/Ⅱ/g, 'II')
      .replace(/Ⅲ/g, 'III')
      .replace(/Ⅳ/g, 'IV')
      .replace(/Ⅴ/g, 'V')
      .replace(/Ⅵ/g, 'VI')
      .replace(/Ⅶ/g, 'VII')
      .replace(/Ⅷ/g, 'VIII')
      .replace(/Ⅸ/g, 'IX')
      .replace(/Ⅹ/g, 'X')
      .replace(/Ⅺ/g, 'XI')
      .replace(/Ⅻ/g, 'XII')
      .replace(/ⅰ/g, 'i')
      .replace(/ⅱ/g, 'ii')
      .replace(/ⅲ/g, 'iii')
      .replace(/ⅳ/g, 'iv')
      .replace(/ⅴ/g, 'v')
      .replace(/ⅵ/g, 'vi')
      .replace(/ⅵ/g, 'vii')
      .replace(/ⅷ/g, 'viii')
      .replace(/ⅸ/g, 'ix')
      .replace(/ⅹ/g, 'x')
      .replace(/ⅺ/g, 'xi')
      .replace(/ⅻ/g, 'xii')
      .replace(/㎜/g, 'mm')
      .replace(/㎝/g, 'cm')
      .replace(/㎞/g, 'km')
      .replace(/㎎/g, 'mg')
      .replace(/㎏/g, 'kg')
      .replace(/㎡/g, 'm²')
      .replace(/㎥/g, 'm³')
      .replace(/㎧/g, 'm/s')
      .replace(/㎨/g, 'm/s²')
      .replace(/㎩/g, 'Pa')
      .replace(/㎪/g, 'kPa')
      .replace(/㎫/g, 'MPa')
      .replace(/㎬/g, 'GPa')
      .replace(/㎭/g, 'rad')
      .replace(/㎮/g, 'rad/s')
      .replace(/㎯/g, 'rad/s²')
      .replace(/㎰/g, 'ps')
      .replace(/㎱/g, 'ns')
      .replace(/㎲/g, 'μs')
      .replace(/㎳/g, 'ms')
      .replace(/㎴/g, 'pV')
      .replace(/㎵/g, 'nV')
      .replace(/㎶/g, 'μV')
      .replace(/㎷/g, 'mV')
      .replace(/㎸/g, 'kV')
      .replace(/㎹/g, 'MV')
      .replace(/㎺/g, 'pW')
      .replace(/㎻/g, 'nW')
      .replace(/㎼/g, 'μW')
      .replace(/㎽/g, 'mW')
      .replace(/㎾/g, 'kW')
      .replace(/㎿/g, 'MW')
      .replace(/㏀/g, 'kΩ')
      .replace(/㏁/g, 'MΩ')
      .replace(/㏂/g, 'am')
      .replace(/㏃/g, 'Bq')
      .replace(/㏄/g, 'cc')
      .replace(/㏅/g, 'cd')
      .replace(/㏆/g, 'C/kg')
      .replace(/㏇/g, 'Co.')
      .replace(/㏈/g, 'dB')
      .replace(/㏉/g, 'Gy')
      .replace(/㏊/g, 'ha')
      .replace(/㏋/g, 'HP')
      .replace(/㏌/g, 'in')
      .replace(/㏍/g, 'KK')
      .replace(/㏎/g, 'KM')
      .replace(/㏏/g, 'kt')
      .replace(/㏐/g, 'lm')
      .replace(/㏑/g, 'ln')
      .replace(/㏒/g, 'log')
      .replace(/㏓/g, 'lx')
      .replace(/㏔/g, 'mb')
      .replace(/㏕/g, 'mil')
      .replace(/㏖/g, 'mol')
      .replace(/㏗/g, 'pH')
      .replace(/㏘/g, 'pm')
      .replace(/㏙/g, 'PPM')
      .replace(/㏚/g, 'PR')
      .replace(/㏛/g, 'sr')
      .replace(/㏜/g, 'Sv')
      .replace(/㏝/g, 'Wb')
      .replace(/㏞/g, 'V/m')
      .replace(/㏟/g, 'A/m')
      .replace(/㏠/g, '1')
      .replace(/㏡/g, '2')
      .replace(/㏢/g, '3')
      .replace(/㏣/g, '4')
      .replace(/㏤/g, '5')
      .replace(/㏥/g, '6')
      .replace(/㏦/g, '7')
      .replace(/㏧/g, '8')
      .replace(/㏨/g, '9')
      .replace(/㏩/g, '10')
      .replace(/㏪/g, '11')
      .replace(/㏫/g, '12')
      .replace(/㏬/g, '13')
      .replace(/㏭/g, '14')
      .replace(/㏮/g, '15')
      .replace(/㏯/g, '16')
      .replace(/㏰/g, '17')
      .replace(/㏱/g, '18')
      .replace(/㏲/g, '19')
      .replace(/㏳/g, '20')
      .replace(/㏴/g, '21')
      .replace(/㏵/g, '22')
      .replace(/㏶/g, '23')
      .replace(/㏷/g, '24')
      .replace(/㏸/g, '25')
      .replace(/㏹/g, '26')
      .replace(/㏺/g, '27')
      .replace(/㏻/g, '28')
      .replace(/㏼/g, '29')
      .replace(/㏽/g, '30')
      .replace(/㏾/g, '31')
      .replace(/㏿/g, 'gal');
    
    // 应用词汇翻译
    for (const [cn, en] of Object.entries(translations)) {
      result = result.split(cn).join(en);
    }
    
    return result;
  } else if (Array.isArray(obj)) {
    return obj.map(translateObject);
  } else if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = translateObject(value);
    }
    return result;
  }
  return obj;
}

// 处理单个品牌
function processBrand(brandName) {
  const brandDir = path.join(dataDir, brandName);
  
  if (!fs.existsSync(brandDir)) {
    console.log(`⚠️ Brand directory not found: ${brandName}`);
    return;
  }
  
  const files = ['brand.json', 'products.json', 'solutions.json', 'support.json', 'news.json'];
  
  files.forEach(file => {
    const filePath = path.join(brandDir, file);
    if (fs.existsSync(filePath)) {
      try {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const translated = translateObject(data);
        fs.writeFileSync(filePath, JSON.stringify(translated, null, 2));
        console.log(`  ✅ Translated: ${brandName}/${file}`);
      } catch (error) {
        console.error(`  ❌ Error translating ${brandName}/${file}:`, error.message);
      }
    }
  });
}

// 主函数
function main() {
  console.log('🚀 Starting batch translation to English...\n');
  
  const brands = fs.readdirSync(dataDir).filter(name => {
    return fs.statSync(path.join(dataDir, name)).isDirectory();
  });
  
  console.log(`📦 Found ${brands.length} brands to translate\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  brands.forEach((brand, index) => {
    console.log(`[${index + 1}/${brands.length}] Processing ${brand}...`);
    try {
      processBrand(brand);
      successCount++;
    } catch (error) {
      console.error(`  ❌ Failed to process ${brand}:`, error.message);
      failCount++;
    }
  });
  
  console.log(`\n📊 Translation Summary:`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`   📦 Total: ${brands.length}`);
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = { translateObject, processBrand };
