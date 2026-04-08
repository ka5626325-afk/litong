/**
 * 彻底清理所有中文内容
 * Thoroughly clean all Chinese content
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 检测是否包含中文字符
function containsChinese(str) {
  return /[\u4e00-\u9fa5]/.test(str);
}

// 清理字符串中的中文
function cleanString(str) {
  if (typeof str !== 'string') return str;
  
  // 如果整个字符串都是中文，返回英文占位符
  if (containsChinese(str) && str.length > 0) {
    // 尝试提取英文部分
    const englishParts = str.match(/[a-zA-Z0-9\s\-\_\.\,\(\)\[\]\{\}\/\\@\#\$\%\^\&\*\+\=\<\>\?\!\;\:\"\'\`\~]+/g);
    if (englishParts && englishParts.join('').length > str.length * 0.3) {
      return englishParts.join(' ').trim();
    }
    
    // 如果是特定字段，返回标准英文
    if (str.includes('产品') || str.includes('Product')) return 'Product';
    if (str.includes('解决方案') || str.includes('Solution')) return 'Solution';
    if (str.includes('技术支持') || str.includes('Support')) return 'Technical Support';
    if (str.includes('新闻')) return 'News';
    if (str.includes('关于')) return 'About';
    if (str.includes('联系')) return 'Contact';
    if (str.includes('应用')) return 'Application';
    if (str.includes('特性')) return 'Feature';
    if (str.includes('规格')) return 'Specification';
    if (str.includes('描述')) return 'Description';
    if (str.includes('型号')) return 'Part Number';
    if (str.includes('系列')) return 'Series';
    if (str.includes('封装')) return 'Package';
    if (str.includes('电压')) return 'Voltage';
    if (str.includes('电流')) return 'Current';
    if (str.includes('功率')) return 'Power';
    if (str.includes('频率')) return 'Frequency';
    if (str.includes('温度')) return 'Temperature';
    if (str.includes('电阻')) return 'Resistance';
    if (str.includes('电容')) return 'Capacitance';
    if (str.includes('电感')) return 'Inductance';
    if (str.includes('分销商')) return 'Distributor';
    if (str.includes('选型')) return 'Selection';
    if (str.includes('指南')) return 'Guide';
    if (str.includes('文档')) return 'Documentation';
    if (str.includes('下载')) return 'Download';
    if (str.includes('库存')) return 'Stock';
    if (str.includes('交期') || str.includes('Lead Time')) return 'Lead Time';
    if (str.includes('最小起订量') || str.includes('MOQ')) return 'MOQ';
    if (str.includes('数据手册')) return 'Datasheet';
    if (str.includes('应用笔记')) return 'Application Note';
    if (str.includes('常见问题')) return 'FAQ';
    if (str.includes('公司')) return 'Company';
    if (str.includes('行业')) return 'Industry';
    if (str.includes('认证')) return 'Certification';
    if (str.includes('质量')) return 'Quality';
    if (str.includes('优势')) return 'Advantage';
    if (str.includes('客户')) return 'Customer';
    if (str.includes('服务')) return 'Service';
    if (str.includes('技术')) return 'Technology';
    if (str.includes('设计')) return 'Design';
    if (str.includes('工程')) return 'Engineering';
    if (str.includes('测试')) return 'Testing';
    if (str.includes('生产')) return 'Manufacturing';
    if (str.includes('研发')) return 'R&D';
    if (str.includes('市场')) return 'Marketing';
    if (str.includes('销售')) return 'Sales';
    if (str.includes('支持')) return 'Support';
    if (str.includes('联系')) return 'Contact';
    if (str.includes('电话')) return 'Phone';
    if (str.includes('邮箱')) return 'Email';
    if (str.includes('地址')) return 'Address';
    if (str.includes('网站')) return 'Website';
    if (str.includes('品牌')) return 'Brand';
    if (str.includes('制造商')) return 'Manufacturer';
    if (str.includes('供应商')) return 'Supplier';
    if (str.includes('合作伙伴')) return 'Partner';
    if (str.includes('文章')) return 'Article';
    if (str.includes('作者')) return 'Author';
    if (str.includes('日期')) return 'Date';
    if (str.includes('标签')) return 'Tag';
    if (str.includes('分钟')) return 'min';
    if (str.includes('阅读时间')) return 'Read Time';
    if (str.includes('摘要')) return 'Summary';
    if (str.includes('内容')) return 'Content';
    if (str.includes('段落')) return 'Paragraph';
    if (str.includes('标题')) return 'Title';
    if (str.includes('名称')) return 'Name';
    if (str.includes('类型')) return 'Type';
    if (str.includes('状态')) return 'Status';
    if (str.includes('版本')) return 'Version';
    if (str.includes('更新')) return 'Update';
    if (str.includes('创建')) return 'Create';
    if (str.includes('删除')) return 'Delete';
    if (str.includes('编辑')) return 'Edit';
    if (str.includes('保存')) return 'Save';
    if (str.includes('取消')) return 'Cancel';
    if (str.includes('确认')) return 'Confirm';
    if (str.includes('提交')) return 'Submit';
    if (str.includes('搜索')) return 'Search';
    if (str.includes('筛选')) return 'Filter';
    if (str.includes('排序')) return 'Sort';
    if (str.includes('分页')) return 'Pagination';
    if (str.includes('上一页')) return 'Previous';
    if (str.includes('下一页')) return 'Next';
    if (str.includes('第一页')) return 'First';
    if (str.includes('最后一页')) return 'Last';
    if (str.includes('共')) return 'Total';
    if (str.includes('条')) return 'items';
    if (str.includes('页')) return 'Page';
    if (str.includes('显示')) return 'Show';
    if (str.includes('每页')) return 'Per Page';
    if (str.includes('跳转')) return 'Go to';
    if (str.includes('更多')) return 'More';
    if (str.includes('详情')) return 'Details';
    if (str.includes('查看')) return 'View';
    if (str.includes('返回')) return 'Back';
    if (str.includes('关闭')) return 'Close';
    if (str.includes('打开')) return 'Open';
    if (str.includes('展开')) return 'Expand';
    if (str.includes('收起')) return 'Collapse';
    if (str.includes('是')) return 'Yes';
    if (str.includes('否')) return 'No';
    if (str.includes('确定')) return 'OK';
    if (str.includes('成功')) return 'Success';
    if (str.includes('失败')) return 'Failed';
    if (str.includes('错误')) return 'Error';
    if (str.includes('警告')) return 'Warning';
    if (str.includes('提示')) return 'Tip';
    if (str.includes('信息')) return 'Info';
    if (str.includes('注意')) return 'Note';
    if (str.includes('重要')) return 'Important';
    if (str.includes('推荐')) return 'Recommended';
    if (str.includes('热门')) return 'Popular';
    if (str.includes('最新')) return 'Latest';
    if (str.includes('相关')) return 'Related';
    if (str.includes('其他')) return 'Other';
    if (str.includes('全部')) return 'All';
    if (str.includes('无')) return 'None';
    if (str.includes('有')) return 'Yes';
    if (str.includes('可用')) return 'Available';
    if (str.includes('不可用')) return 'Unavailable';
    if (str.includes('启用')) return 'Enabled';
    if (str.includes('禁用')) return 'Disabled';
    if (str.includes('激活')) return 'Active';
    if (str.includes('未激活')) return 'Inactive';
    if (str.includes('公开')) return 'Public';
    if (str.includes('私有')) return 'Private';
    if (str.includes('草稿')) return 'Draft';
    if (str.includes('已发布')) return 'Published';
    if (str.includes('已归档')) return 'Archived';
    if (str.includes('已删除')) return 'Deleted';
    if (str.includes('待审核')) return 'Pending';
    if (str.includes('已通过')) return 'Approved';
    if (str.includes('已拒绝')) return 'Rejected';
    if (str.includes('进行中')) return 'In Progress';
    if (str.includes('已完成')) return 'Completed';
    if (str.includes('已取消')) return 'Cancelled';
    if (str.includes('已过期')) return 'Expired';
    if (str.includes('即将开始')) return 'Upcoming';
    if (str.includes('正在进行')) return 'Ongoing';
    if (str.includes('已结束')) return 'Ended';
    if (str.includes('本周')) return 'This Week';
    if (str.includes('本月')) return 'This Month';
    if (str.includes('本年')) return 'This Year';
    if (str.includes('今天')) return 'Today';
    if (str.includes('昨天')) return 'Yesterday';
    if (str.includes('明天')) return 'Tomorrow';
    if (str.includes('上周')) return 'Last Week';
    if (str.includes('上月')) return 'Last Month';
    if (str.includes('去年')) return 'Last Year';
    if (str.includes('下周')) return 'Next Week';
    if (str.includes('下月')) return 'Next Month';
    if (str.includes('明年')) return 'Next Year';
    if (str.includes('现在')) return 'Now';
    if (str.includes('当时')) return 'Then';
    if (str.includes('之前')) return 'Before';
    if (str.includes('之后')) return 'After';
    if (str.includes('期间')) return 'During';
    if (str.includes('以内')) return 'Within';
    if (str.includes('以外')) return 'Outside';
    if (str.includes('之间')) return 'Between';
    if (str.includes('开始')) return 'Start';
    if (str.includes('结束')) return 'End';
    if (str.includes('持续')) return 'Duration';
    if (str.includes('长度')) return 'Length';
    if (str.includes('宽度')) return 'Width';
    if (str.includes('高度')) return 'Height';
    if (str.includes('深度')) return 'Depth';
    if (str.includes('重量')) return 'Weight';
    if (str.includes('体积')) return 'Volume';
    if (str.includes('面积')) return 'Area';
    if (str.includes('距离')) return 'Distance';
    if (str.includes('速度')) return 'Speed';
    if (str.includes('加速度')) return 'Acceleration';
    if (str.includes('力')) return 'Force';
    if (str.includes('压力')) return 'Pressure';
    if (str.includes('能量')) return 'Energy';
    if (str.includes('效率')) return 'Efficiency';
    if (str.includes('功率因数')) return 'Power Factor';
    if (str.includes('谐波')) return 'Harmonic';
    if (str.includes('EMI')) return 'EMI';
    if (str.includes('EMS')) return 'EMS';
    if (str.includes('EMC')) return 'EMC';
    if (str.includes('ESD')) return 'ESD';
    if (str.includes('浪涌保护')) return 'Surge Protection';
    if (str.includes('过压保护')) return 'Overvoltage Protection';
    if (str.includes('过流保护')) return 'Overcurrent Protection';
    if (str.includes('过温保护')) return 'Overtemperature Protection';
    if (str.includes('短路保护')) return 'Short Circuit Protection';
    if (str.includes('开路保护')) return 'Open Circuit Protection';
    if (str.includes('反接保护')) return 'Reverse Polarity Protection';
    if (str.includes('欠压保护')) return 'Undervoltage Protection';
    if (str.includes('过压关断')) return 'Overvoltage Shutdown';
    if (str.includes('过流关断')) return 'Overcurrent Shutdown';
    if (str.includes('过温关断')) return 'Overtemperature Shutdown';
    if (str.includes('软启动')) return 'Soft Start';
    if (str.includes('热插拔')) return 'Hot Swap';
    if (str.includes('即插即用')) return 'Plug and Play';
    if (str.includes('待机')) return 'Standby';
    if (str.includes('休眠')) return 'Sleep';
    if (str.includes('唤醒')) return 'Wake Up';
    if (str.includes('复位')) return 'Reset';
    if (str.includes('初始化')) return 'Initialize';
    if (str.includes('校准')) return 'Calibrate';
    if (str.includes('配置')) return 'Configure';
    if (str.includes('编程')) return 'Program';
    if (str.includes('调试')) return 'Debug';
    if (str.includes('验证')) return 'Verify';
    if (str.includes('认证')) return 'Certify';
    if (str.includes('合规')) return 'Compliant';
    if (str.includes('标准')) return 'Standard';
    if (str.includes('规范')) return 'Specification';
    if (str.includes('要求')) return 'Requirement';
    if (str.includes('限制')) return 'Limitation';
    if (str.includes('约束')) return 'Constraint';
    if (str.includes('条件')) return 'Condition';
    if (str.includes('假设')) return 'Assumption';
    if (str.includes('依赖')) return 'Dependency';
    if (str.includes('参考')) return 'Reference';
    if (str.includes('依据')) return 'Basis';
    if (str.includes('来源')) return 'Source';
    if (str.includes('目标')) return 'Target';
    if (str.includes('目的')) return 'Purpose';
    if (str.includes('范围')) return 'Scope';
    if (str.includes('边界')) return 'Boundary';
    if (str.includes('上下文')) return 'Context';
    if (str.includes('环境')) return 'Environment';
    if (str.includes('场景')) return 'Scenario';
    if (str.includes('用例')) return 'Use Case';
    if (str.includes('案例')) return 'Case Study';
    if (str.includes('示例')) return 'Example';
    if (str.includes('演示')) return 'Demo';
    if (str.includes('教程')) return 'Tutorial';
    if (str.includes('手册')) return 'Manual';
    if (str.includes('协议')) return 'Protocol';
    if (str.includes('接口')) return 'Interface';
    if (str.includes('工具')) return 'Tool';
    if (str.includes('软件')) return 'Software';
    if (str.includes('硬件')) return 'Hardware';
    if (str.includes('固件')) return 'Firmware';
    if (str.includes('驱动')) return 'Driver';
    if (str.includes('程序')) return 'Program';
    if (str.includes('代码')) return 'Code';
    if (str.includes('脚本')) return 'Script';
    if (str.includes('算法')) return 'Algorithm';
    if (str.includes('模型')) return 'Model';
    if (str.includes('架构')) return 'Architecture';
    if (str.includes('实现')) return 'Implementation';
    if (str.includes('部署')) return 'Deployment';
    if (str.includes('运维')) return 'Operation';
    if (str.includes('监控')) return 'Monitoring';
    if (str.includes('报警')) return 'Alert';
    if (str.includes('日志')) return 'Log';
    if (str.includes('审计')) return 'Audit';
    if (str.includes('备份')) return 'Backup';
    if (str.includes('恢复')) return 'Restore';
    if (str.includes('升级')) return 'Upgrade';
    if (str.includes('维护')) return 'Maintenance';
    if (str.includes('修复')) return 'Fix';
    if (str.includes('优化')) return 'Optimize';
    if (str.includes('改进')) return 'Improve';
    if (str.includes('增强')) return 'Enhance';
    if (str.includes('扩展')) return 'Extend';
    if (str.includes('定制')) return 'Customize';
    if (str.includes('调整')) return 'Adjust';
    if (str.includes('适配')) return 'Adapt';
    if (str.includes('兼容')) return 'Compatible';
    if (str.includes('互操作')) return 'Interoperable';
    if (str.includes('可移植')) return 'Portable';
    if (str.includes('可扩展')) return 'Scalable';
    if (str.includes('可维护')) return 'Maintainable';
    if (str.includes('可靠')) return 'Reliable';
    if (str.includes('安全')) return 'Secure';
    if (str.includes('高效')) return 'Efficient';
    if (str.includes('高性能')) return 'High Performance';
    if (str.includes('低功耗')) return 'Low Power';
    if (str.includes('低成本')) return 'Low Cost';
    if (str.includes('小型化')) return 'Miniaturization';
    if (str.includes('轻量化')) return 'Lightweight';
    if (str.includes('集成')) return 'Integration';
    if (str.includes('模块化')) return 'Modular';
    if (str.includes('标准化')) return 'Standardization';
    if (str.includes('自动化')) return 'Automation';
    if (str.includes('智能化')) return 'Intelligent';
    if (str.includes('数字化')) return 'Digital';
    if (str.includes('网络化')) return 'Networked';
    if (str.includes('云化')) return 'Cloud-based';
    if (str.includes('边缘计算')) return 'Edge Computing';
    if (str.includes('物联网')) return 'IoT';
    if (str.includes('人工智能')) return 'AI';
    if (str.includes('机器学习')) return 'Machine Learning';
    if (str.includes('深度学习')) return 'Deep Learning';
    if (str.includes('大数据')) return 'Big Data';
    if (str.includes('区块链')) return 'Blockchain';
    
    // 默认返回原始字符串
    return str;
  }
  
  return str;
}

// 递归清理对象中的所有字符串
function cleanObject(obj) {
  if (typeof obj === 'string') {
    return cleanString(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(cleanObject);
  } else if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = cleanObject(value);
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
        const content = fs.readFileSync(filePath, 'utf8');
        
        // 检查是否包含中文
        if (!containsChinese(content)) {
          console.log(`  ✓ ${brandName}/${file} - No Chinese content`);
          return;
        }
        
        const data = JSON.parse(content);
        const cleaned = cleanObject(data);
        fs.writeFileSync(filePath, JSON.stringify(cleaned, null, 2));
        console.log(`  ✅ Cleaned: ${brandName}/${file}`);
      } catch (error) {
        console.error(`  ❌ Error cleaning ${brandName}/${file}:`, error.message);
      }
    }
  });
}

// 主函数
function main() {
  console.log('🚀 Starting thorough Chinese content cleanup...\n');
  
  const brands = fs.readdirSync(dataDir).filter(name => {
    return fs.statSync(path.join(dataDir, name)).isDirectory();
  });
  
  console.log(`📦 Found ${brands.length} brands to process\n`);
  
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
  
  console.log(`\n📊 Cleanup Summary:`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`   📦 Total: ${brands.length}`);
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = { cleanObject, processBrand, containsChinese };
