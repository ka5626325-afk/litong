/**
 * 模板选择器 - 根据品牌选择合适的数据模板
 * Template Selector - Select appropriate data template based on brand
 */

const fs = require('fs');
const path = require('path');

class TemplateSelector {
  constructor() {
    this.configDir = path.join(__dirname, '..', 'config');
    this.templateTypesPath = path.join(this.configDir, 'template-types.json');
    this.brandTemplatesPath = path.join(this.configDir, 'brand-templates.json');
    
    this.templateTypes = null;
    this.brandTemplates = null;
    
    this.loadConfigs();
  }

  loadConfigs() {
    try {
      this.templateTypes = JSON.parse(fs.readFileSync(this.templateTypesPath, 'utf8'));
      this.brandTemplates = JSON.parse(fs.readFileSync(this.brandTemplatesPath, 'utf8'));
    } catch (error) {
      console.error('❌ 加载模板配置失败:', error.message);
      throw error;
    }
  }

  getBrandTemplate(brandName) {
    const brandConfig = this.brandTemplates.brands[brandName.toLowerCase()];
    
    if (!brandConfig) {
      return this.getDefaultTemplate();
    }

    const templateType = this.templateTypes.templateTypes[brandConfig.templateType];
    
    if (!templateType) {
      return this.getDefaultTemplate();
    }

    return {
      brandName: brandName,
      displayName: brandConfig.displayName,
      templateType: brandConfig.templateType,
      templateName: templateType.name,
      templateNameEn: templateType.nameEn,
      description: templateType.description,
      layout: brandConfig.layout || templateType.defaultLayout,
      layoutVariants: templateType.layoutVariants,
      fieldGroups: this.mergeFieldGroups(templateType.fieldGroups, brandConfig.customFields),
      templateFile: templateType.templateFile,
      applicableProducts: templateType.applicableProducts,
      overrides: brandConfig.overrides || {}
    };
  }

  getDefaultTemplate() {
    return {
      brandName: 'unknown',
      displayName: 'Unknown Brand',
      templateType: 'generic',
      templateName: '通用模板',
      templateNameEn: 'Generic Template',
      description: '通用产品模板',
      layout: 'standard',
      layoutVariants: ['standard'],
      fieldGroups: {
        basic: {
          label: '基本信息',
          fields: [
            { name: 'partNumber', type: 'string', required: true, label: '型号' },
            { name: 'description', type: 'string', label: '描述' }
          ]
        }
      },
      templateFile: 'product-detail-generic.html',
      applicableProducts: [],
      overrides: {}
    };
  }

  mergeFieldGroups(baseFieldGroups, customFields) {
    if (!customFields || customFields.length === 0) {
      return baseFieldGroups;
    }

    const merged = JSON.parse(JSON.stringify(baseFieldGroups));
    
    customFields.forEach(field => {
      const group = field.group || 'custom';
      if (!merged[group]) {
        merged[group] = { label: '自定义字段', fields: [] };
      }
      merged[group].fields.push(field);
    });

    return merged;
  }

  getAllTemplateTypes() {
    return Object.keys(this.templateTypes.templateTypes).map(key => ({
      id: key,
      ...this.templateTypes.templateTypes[key]
    }));
  }

  getTemplateTypeStats() {
    const stats = {};
    
    Object.entries(this.brandTemplates.templateTypeGroups).forEach(([type, data]) => {
      stats[type] = {
        templateName: this.templateTypes.templateTypes[type]?.name || type,
        brandCount: data.count,
        brands: data.brands
      };
    });

    return stats;
  }

  listConfiguredBrands() {
    return Object.entries(this.brandTemplates.brands).map(([key, config]) => ({
      name: key,
      displayName: config.displayName,
      templateType: config.templateType,
      templateName: this.templateTypes.templateTypes[config.templateType]?.name || 'Unknown'
    }));
  }
}

// CLI 支持
if (require.main === module) {
  const selector = new TemplateSelector();
  const command = process.argv[2];
  const arg = process.argv[3];

  switch (command) {
    case 'get':
      if (!arg) {
        console.log('用法: node template-selector.js get <brand-name>');
        process.exit(1);
      }
      const template = selector.getBrandTemplate(arg);
      console.log(JSON.stringify(template, null, 2));
      break;

    case 'list':
      const brands = selector.listConfiguredBrands();
      console.log('\n📋 已配置的品牌列表:');
      console.log('=' .repeat(60));
      brands.forEach(brand => {
        console.log(`${brand.displayName.padEnd(25)} | ${brand.templateType.padEnd(20)} | ${brand.templateName}`);
      });
      console.log(`\n总计: ${brands.length} 个品牌`);
      break;

    case 'stats':
      const stats = selector.getTemplateTypeStats();
      console.log('\n📊 模板类型统计:');
      console.log('=' .repeat(60));
      Object.entries(stats).forEach(([type, data]) => {
        console.log(`\n${data.templateName} (${type})`);
        console.log(`  品牌数量: ${data.brandCount}`);
        console.log(`  品牌列表: ${data.brands.join(', ')}`);
      });
      break;

    case 'types':
      const types = selector.getAllTemplateTypes();
      console.log('\n🎨 可用模板类型:');
      console.log('=' .repeat(60));
      types.forEach(type => {
        console.log(`\n${type.name} (${type.nameEn})`);
        console.log(`  ID: ${type.id || 'N/A'}`);
        console.log(`  描述: ${type.description}`);
        console.log(`  适用产品: ${type.applicableProducts?.join(', ')}`);
        console.log(`  布局变体: ${type.layoutVariants?.join(', ')}`);
      });
      break;

    default:
      console.log(`
🚀 模板选择器 CLI

用法:
  node template-selector.js <command> [args]

命令:
  get <brand-name>     获取品牌模板配置
  list                 列出所有已配置品牌
  stats                显示模板类型统计
  types                显示可用模板类型

示例:
  node template-selector.js get cree
  node template-selector.js list
  node template-selector.js stats
`);
  }
}

module.exports = TemplateSelector;
