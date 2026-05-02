#!/usr/bin/env node
/**
 * 批量翻译products.json中的中文内容
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'anlogic', 'products.json');
let content = fs.readFileSync(filePath, 'utf8');

// 定义替换规则
const replacements = [
  // 产品名称中的系列名称
  { from: /"name": "ELF2系列/g, to: '"name": "ELF2 Series' },
  { from: /"name": "ELF3系列/g, to: '"name": "ELF3 Series' },
  { from: /"name": "EAGLE系列/g, to: '"name": "EAGLE Series' },
  { from: /"name": "AL3A系列/g, to: '"name": "AL3A Series' },
  
  // 产品类型
  { from: /低功耗FPGA/g, to: 'Low-Power FPGA' },
  { from: /大容量低功耗FPGA/g, to: 'High-Capacity Low-Power FPGA' },
  { from: /入门级低功耗FPGA/g, to: 'Entry-Level Low-Power FPGA' },
  { from: /增强型低功耗FPGA/g, to: 'Enhanced Low-Power FPGA' },
  { from: /高性能FPGA/g, to: 'High-Performance FPGA' },
  { from: /中端高性能FPGA/g, to: 'Mid-Range High-Performance FPGA' },
  { from: /高端FPGA/g, to: 'High-End FPGA' },
  { from: /旗舰级FPGA/g, to: 'Flagship FPGA' },
  { from: /CPLD/g, to: 'CPLD' },
  { from: /开发套件/g, to: 'Development Kit' },
  
  // 容量描述
  { from: /(\d+\.?\d*)K LUTs/g, to: '$1K LUTs' },
  { from: /(\d+)宏单元/g, to: '$1 Macro Cells' },
  
  // features中的常见中文
  { from: /LUTs逻辑容量/g, to: 'LUTs Logic Capacity' },
  { from: /个Flip-Flops/g, to: ' Flip-Flops' },
  { from: /个18x18 DSP乘法器/g, to: ' 18x18 DSP Multipliers' },
  { from: /个用户I\/O/g, to: ' User I/Os' },
  { from: /集成嵌入式Flash/g, to: 'Integrated Embedded Flash' },
  { from: /封装/g, to: 'Package' },
  { from: /增强的I\/O性能/g, to: 'Enhanced I/O Performance' },
  { from: /支持DDR3/g, to: 'DDR3 Support' },
  { from: /支持PCIe/g, to: 'PCIe Support' },
  
  // 应用领域的常见翻译
  { from: /工业控制/g, to: 'Industrial Control' },
  { from: /通信设备/g, to: 'Communication Equipment' },
  { from: /通信接口/g, to: 'Communication Interfaces' },
  { from: /消费电子/g, to: 'Consumer Electronics' },
  { from: /视频处理/g, to: 'Video Processing' },
  { from: /电机控制/g, to: 'Motor Control' },
  { from: /LED显示/g, to: 'LED Display' },
  { from: /机器视觉/g, to: 'Machine Vision' },
  { from: /边缘计算/g, to: 'Edge Computing' },
  { from: /AI加速/g, to: 'AI Acceleration' },
  { from: /数据中心/g, to: 'Data Center' },
  { from: /5G基站/g, to: '5G Base Stations' },
  { from: /智能网卡/g, to: 'Smart NICs' },
  { from: /网络加速/g, to: 'Network Acceleration' },
  { from: /胶合逻辑/g, to: 'Glue Logic' },
  { from: /电平转换/g, to: 'Level Translation' },
  { from: /配置管理/g, to: 'Configuration Management' },
  { from: /电源管理/g, to: 'Power Management' },
  { from: /复位控制/g, to: 'Reset Control' },
  { from: /接口扩展/g, to: 'Interface Expansion' },
  { from: /逻辑整合/g, to: 'Logic Integration' },
  { from: /传感器接口/g, to: 'Sensor Interfaces' },
  { from: /LED驱动/g, to: 'LED Drivers' },
  { from: /简单控制/g, to: 'Simple Control' },
  { from: /接口转换/g, to: 'Interface Conversion' },
  { from: /多轴运动控制/g, to: 'Multi-axis Motion Control' },
  { from: /工业通信网关/g, to: 'Industrial Communication Gateways' },
  { from: /复杂算法加速/g, to: 'Complex Algorithm Acceleration' },
  { from: /工业控制器/g, to: 'Industrial Controllers' },
  { from: /通信接口转换/g, to: 'Communication Interface Conversion' },
  { from: /LED显示控制/g, to: 'LED Display Control' },
  { from: /简单控制器/g, to: 'Simple Controllers' },
  { from: /复杂工业控制/g, to: 'Complex Industrial Control' },
  { from: /超复杂胶合逻辑/g, to: 'Ultra-Complex Glue Logic' },
  { from: /大规模电平转换/g, to: 'Large-Scale Level Translation' },
  { from: /复杂接口扩展/g, to: 'Complex Interface Expansion' },
  { from: /多路控制/g, to: 'Multi-channel Control' },
  { from: /系统管理/g, to: 'System Management' },
  { from: /FPGA评估/g, to: 'FPGA Evaluation' },
  { from: /FPGA学习/g, to: 'FPGA Learning' },
  { from: /原型开发/g, to: 'Prototype Development' },
  { from: /教学实验/g, to: 'Teaching Experiments' },
  { from: /CPLD评估/g, to: 'CPLD Evaluation' },
  { from: /CPLD学习/g, to: 'CPLD Learning' },
  { from: /高速通信/g, to: 'High-Speed Communication' },
  { from: /EAGLE评估/g, to: 'EAGLE Evaluation' },
  
  // 其他常见词汇
  { from: /安路科技/g, to: 'Anlogic' },
  { from: /安路/g, to: 'Anlogic' },
  { from: /力通FAE/g, to: 'BeiLuo FAE' },
  { from: /联系.*获取专业选型建议和技术支持/g, to: 'Contact BeiLuo FAE for professional selection advice and technical support.' },
  { from: /适合/g, to: 'Suitable for' },
  { from: /等应用/g, to: 'and other applications' },
  { from: /提供/g, to: 'Provides' },
  { from: /无需外部配置芯片/g, to: 'No external configuration chip required' },
  { from: /是.*的/g, to: 'is a' },
];

let count = 0;
replacements.forEach(({ from, to }) => {
  const matches = content.match(new RegExp(from, 'g'));
  if (matches) {
    count += matches.length;
    content = content.replace(new RegExp(from, 'g'), to);
  }
});

fs.writeFileSync(filePath, content, 'utf8');
console.log(`翻译完成，共替换 ${count} 处中文内容`);
