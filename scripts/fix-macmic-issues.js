#!/usr/bin/env node

/**
 * 修复 MacMic 数据问题
 */

const fs = require('fs');

// 读取 products.json
let productsContent = fs.readFileSync('data/macmic/products.json', 'utf8');

// 修复 shortDescription 长度问题
const shortDescFixes = [
  {
    old: 'MacMic MMG200HB120T1A 1200V 200A IGBT module with T1A package. Cost-effective 6TC series optimized for motor drives and EV applications.',
    new: 'MacMic MMG200HB120T1A 1200V 200A IGBT module. 6TC series optimized for motor drives and EV applications with low Vce(sat).'
  },
  {
    old: 'MacMic MMF100J060D1 600V 100A FRED module with fast recovery. Ideal for rectification in motor drives and power supplies.',
    new: 'MacMic MMF100J060D1 600V 100A FRED module. Fast 35ns recovery for motor drive rectification and PFC applications.'
  },
  {
    old: 'MacMic MMF200J120D1 1200V 200A FRED module with soft recovery. Perfect for high-power rectification in industrial applications.',
    new: 'MacMic MMF200J120D1 1200V 200A FRED module. Soft recovery for high-power industrial rectification applications.'
  },
  {
    old: 'MacMic MMO100N060Y1 60V 100A MOSFET module with ultra-low 2.5mΩ RDS(on). Ideal for synchronous rectification in high-current power supplies.',
    new: 'MacMic MMO100N060Y1 60V 100A MOSFET module. Ultra-low 2.5mΩ RDS(on) for synchronous rectification applications.'
  },
  {
    old: 'MacMic MMO200N040Y1 40V 200A MOSFET module with ultra-low 1.2mΩ RDS(on). Designed for ultra-high current synchronous rectification applications.',
    new: 'MacMic MMO200N040Y1 40V 200A MOSFET module. Ultra-low 1.2mΩ RDS(on) for high-current synchronous rectification.'
  }
];

shortDescFixes.forEach(fix => {
  productsContent = productsContent.replace(fix.old, fix.new);
});

// 为 Power Discrete 添加 selectionGuideLink
productsContent = productsContent.replace(
  `"longDescription": "MacMic's power discrete device portfolio includes IGBT and FRED chips in industry-standard through-hole packages including TO-220, TO-3P, and TO-247. These discrete devices offer flexibility for applications where module packaging is not suitable, such as low-power designs, custom configurations, or replacement parts. The IGBT discrete devices feature the same Trench Field-Stop technology as the module products, providing consistent performance characteristics. FRED discrete devices offer fast recovery times and soft recovery characteristics for rectification applications. These devices are ideal for auxiliary power supplies, PFC stages, brake choppers, and low-power inverter applications. As your trusted MacMic power discrete distributor, we can help you choose the right package and ratings. Need MacMic discrete 选型 guidance? Contact our FAE team or check our technical resources.",`,
  `"longDescription": "MacMic's power discrete device portfolio includes IGBT and FRED chips in industry-standard through-hole packages including TO-220, TO-3P, and TO-247. These discrete devices offer flexibility for applications where module packaging is not suitable, such as low-power designs, custom configurations, or replacement parts. The IGBT discrete devices feature the same Trench Field-Stop technology as the module products, providing consistent performance characteristics. FRED discrete devices offer fast recovery times and soft recovery characteristics for rectification applications. These devices are ideal for auxiliary power supplies, PFC stages, brake choppers, and low-power inverter applications. As your trusted MacMic power discrete distributor, we can help you choose the right package and ratings. Need MacMic discrete 选型 guidance? Contact our FAE team or check our technical resources.",
      "selectionGuideLink": {
        "text": "如何选择最适合您项目的MacMic分立器件？",
        "url": "/macmic/support/how-to-select-macmic-discrete.html",
        "description": "联系我们的FAE团队获取分立器件选型指导，包括封装选择、电压电流等级确定等。"
      },`
);

// 为 MOSFET 添加 selectionGuideLink
productsContent = productsContent.replace(
  `"longDescription": "MacMic's MOSFET module portfolio features low on-resistance devices designed for high-power synchronous rectification and switching applications. These modules offer excellent switching performance with low gate charge and fast switching times, making them ideal for high-frequency applications where IGBT switching losses would be prohibitive. The low RDS(on) minimizes conduction losses, improving overall system efficiency. Available in various voltage and current ratings, these MOSFET modules are well-suited for synchronous rectifiers in power supplies, DC-DC converters, and high-frequency inverters. The module packaging provides excellent thermal performance and reliable mounting for industrial applications. As your trusted MacMic MOSFET distributor, we provide technical support for selecting the optimal MOSFET for your synchronous rectification needs. Need MacMic MOSFET 选型 guidance? Contact our FAE team.",`,
  `"longDescription": "MacMic's MOSFET module portfolio features low on-resistance devices designed for high-power synchronous rectification and switching applications. These modules offer excellent switching performance with low gate charge and fast switching times, making them ideal for high-frequency applications where IGBT switching losses would be prohibitive. The low RDS(on) minimizes conduction losses, improving overall system efficiency. Available in various voltage and current ratings, these MOSFET modules are well-suited for synchronous rectifiers in power supplies, DC-DC converters, and high-frequency inverters. The module packaging provides excellent thermal performance and reliable mounting for industrial applications. As your trusted MacMic MOSFET distributor, we provide technical support for selecting the optimal MOSFET for your synchronous rectification needs. Need MacMic MOSFET 选型 guidance? Contact our FAE team.",
      "selectionGuideLink": {
        "text": "如何选择最适合您项目的MacMic MOSFET模块？",
        "url": "/macmic/support/how-to-select-macmic-mosfet.html",
        "description": "联系我们的FAE团队获取MOSFET选型指导，包括电压等级、RDS(on)选择等。"
      },`
);

// 修复 companionParts 数量不足问题 - 为每个产品添加第3个 companionPart
// MMG30J060U1
productsContent = productsContent.replace(
  `"companionParts": [
            {
              "partNumber": "MMF30J060U1",
              "category": "FRED Discrete",
              "function": "Anti-parallel Diode",
              "keyFeatures": ["600V rating", "30A current", "TO-247 package"],
              "description": "Matching FRED for anti-parallel connection in IGBT applications",
              "link": "/macmic/products/power-discrete/mmf30j060u1.html"
            },
            {
              "partNumber": "MMG75HB060H1A",
              "category": "IGBT Module",
              "function": "Main Inverter",
              "keyFeatures": ["600V rating", "75A current", "High-speed"],
              "description": "Higher power IGBT module from same family",
              "link": "/macmic/products/igbt-modules/mmg75hb060h1a.html"
            }
          ],`,
  `"companionParts": [
            {
              "partNumber": "MMF30J060U1",
              "category": "FRED Discrete",
              "function": "Anti-parallel Diode",
              "keyFeatures": ["600V rating", "30A current", "TO-247 package"],
              "description": "Matching FRED for anti-parallel connection in IGBT applications",
              "link": "/macmic/products/power-discrete/mmf30j060u1.html"
            },
            {
              "partNumber": "MMG75HB060H1A",
              "category": "IGBT Module",
              "function": "Main Inverter",
              "keyFeatures": ["600V rating", "75A current", "High-speed"],
              "description": "Higher power IGBT module from same family",
              "link": "/macmic/products/igbt-modules/mmg75hb060h1a.html"
            },
            {
              "partNumber": "MMF100J060D1",
              "category": "FRED Module",
              "function": "Rectifier",
