import json
import os

# 确保目录存在
os.makedirs('data/walsin', exist_ok=True)

products_data = {
    "seoTitle": "Walsin华新科技被动元件产品 - MLCC/电阻/电感 | 力通代理",
    "seoDescription": "华新科技被动元件产品：MLCC多层陶瓷电容、芯片电阻、射频元件、电感。高品质被动元件解决方案。",
    "seoKeywords": ["华新被动元件", "Walsin MLCC", "芯片电阻", "射频元件", "电感", "Walsin distributor", "Walsin选型"],
    "faqs": [
        {
            "question": "华新MLCC电容的介质材料有哪些？",
            "answer": "华新MLCC电容主要使用C0G/NP0、X7R、X5R等介质材料。C0G温度特性最好，X7R容值范围大，X5R成本较低。",
            "decisionGuide": "精密高频选C0G/NP0，一般应用选X7R。",
            "keywords": ["MLCC介质", "C0G", "X7R"]
        },
        {
            "question": "华新芯片电阻的尺寸代码是什么意思？",
            "answer": "尺寸代码采用四位数字表示，前两位表示长度，后两位表示宽度。0603表示1.6x0.8mm，0805表示2.0x1.25mm。",
            "decisionGuide": "一般应用选0603/0805，功率应用选1206及以上。",
            "keywords": ["芯片电阻尺寸", "0603", "0805"]
        },
        {
            "question": "华新MLCC电容的电压降额如何计算？",
            "answer": "直流工作电压应不超过额定电压的80%。例如额定电压50V的电容，最大工作电压应为40V。",
            "decisionGuide": "工作电压不超过额定电压的80%。",
            "keywords": ["电压降额", "额定电压"]
        },
        {
            "question": "华新射频元件有哪些应用？",
            "answer": "华新射频元件主要应用于天线、滤波器、耦合器、巴伦等，广泛应用于5G通信、物联网等领域。",
            "decisionGuide": "根据射频频率和应用场景选择合适的射频元件。",
            "keywords": ["射频元件", "天线", "5G"]
        },
        {
            "question": "华新电感的主要参数有哪些？",
            "answer": "主要参数包括电感值、额定电流、直流电阻DCR、饱和电流、自谐振频率SRF等。",
            "decisionGuide": "根据电感值、额定电流、DCR等参数选择。",
            "keywords": ["电感参数", "电感值", "额定电流"]
        }
    ],
    "categories": []
}

# Category 1: MLCC Capacitors
category1 = {
    "id": "mlcc-capacitors",
    "name": "MLCC多层陶瓷电容",
    "slug": "mlcc-capacitors",
    "description": "华新MLCC多层陶瓷电容，尺寸从0201到1210，容值范围0.1pF到100μF",
    "shortDescription": "MLCC多层陶瓷电容，尺寸0201-1210",
    "icon": "capacitor",
    "parameters": ["尺寸", "容值", "额定电压", "介质材料", "精度"],
    "selectionGuideLink": {
        "url": "/walsin/support/mlcc-selection-guide.html",
        "text": "MLCC选型指南"
    },
    "series": [
        {"name": "通用型MLCC", "description": "标准MLCC电容", "features": ["尺寸0201-1210", "容值0.1pF-100μF"]},
        {"name": "高容型MLCC", "description": "大容量MLCC", "features": ["容值10μF-100μF", "低ESR"]},
        {"name": "车规级MLCC", "description": "汽车级MLCC", "features": ["AEC-Q200认证", "高可靠性"]}
    ],
    "selectionGuide": {
        "title": "MLCC选型指南",
        "description": "如何选择合适的华新MLCC电容",
        "articleId": "mlcc-selection",
        "articleLink": "/walsin/support/mlcc-selection-guide.html"
    },
    "faqs": [
        {"question": "如何选择MLCC尺寸？", "answer": "根据PCB空间和容值需求选择。", "decisionGuide": "空间受限选0603，大容值选0805及以上。", "keywords": ["MLCC尺寸"]},
        {"question": "C0G和X7R有什么区别？", "answer": "C0G温度特性好，X7R容值范围大。", "decisionGuide": "高频精密选C0G，一般应用选X7R。", "keywords": ["C0G", "X7R"]},
        {"question": "什么是DC Bias效应？", "answer": "直流电压下容值下降的现象。", "decisionGuide": "选择高额定电压或大尺寸。", "keywords": ["DC Bias"]},
        {"question": "车规级MLCC要求？", "answer": "需要AEC-Q200认证，工作温度-55~150°C。", "decisionGuide": "汽车电子必须选车规级。", "keywords": ["车规级", "AEC-Q200"]},
        {"question": "MLCC的ESR和ESL？", "answer": "ESR影响损耗，ESL影响高频性能。", "decisionGuide": "电源滤波选低ESR。", "keywords": ["ESR", "ESL"]}
    ],
    "products": [
        {
            "partNumber": "0603B104K500NT",
            "name": "0603 X7R 100nF 50V MLCC",
            "description": "0603尺寸X7R介质100nF容值50V额定电压多层陶瓷电容",
            "shortDescription": "0603 X7R 100nF 50V通用型MLCC",
            "features": ["0603尺寸", "X7R介质", "100nF容值", "50V额定电压"],
            "specifications": {"尺寸": "0603", "容值": "100nF", "额定电压": "50V", "介质": "X7R", "精度": "±10%"},
            "applications": ["去耦电容", "旁路电容", "滤波电容"],
            "faqs": [
                {"question": "容值和电压是多少？", "answer": "100nF容值，50V额定电压。", "decisionGuide": "一般去耦应用足够。", "keywords": ["100nF", "50V"]},
                {"question": "适合什么应用？", "answer": "适合去耦、旁路、滤波应用。", "decisionGuide": "通用去耦应用首选。", "keywords": ["去耦", "旁路"]},
                {"question": "温度特性如何？", "answer": "X7R介质，-55~125°C，±15%变化。", "decisionGuide": "一般应用足够。", "keywords": ["X7R", "温度特性"]},
                {"question": "0603尺寸优势？", "answer": "平衡空间和焊接便利性。", "decisionGuide": "大多数应用首选。", "keywords": ["0603尺寸"]},
                {"question": "寿命如何？", "answer": "设计寿命超过1000小时，降额使用更长。", "decisionGuide": "降额使用延长寿命。", "keywords": ["寿命", "降额"]}
            ],
            "faeReview": {"author": "LiTong FAE Team", "content": "非常可靠的通用型MLCC，适用于各种去耦应用。", "highlight": "通用性强、性价比高"},
            "alternativeParts": [
                {"partNumber": "0805B104K500NT", "comparison": "尺寸更大，ESR更低", "reason": "更低ESR", "useCase": "需要更低ESR的应用"}
            ],
            "companionParts": [
                {"partNumber": "RC0603JR-0710KL", "relationship": "配套使用",