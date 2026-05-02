#!/usr/bin/env python3
"""
修复JSON文件中的额外数据问题
"""
import json
import os
import re

data_dir = os.path.join(os.path.dirname(__file__), '..', 'data')

# 有额外数据问题的品牌
brands_to_fix = [
    'gejian-semi',
    'hangshun',
    'mean-well'
]

def fix_extra_data(filepath):
    """修复JSON文件中的额外数据"""
    if not os.path.exists(filepath):
        print(f"  File not found: {filepath}")
        return False
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 尝试解析
        try:
            data = json.loads(content)
            print(f"  [OK] JSON is valid, no fix needed")
            return True
        except json.JSONDecodeError as e:
            error_msg = str(e)
            print(f"  [ERROR] {error_msg}")
            
            if 'Extra data' in error_msg:
                # 找到第一个有效的JSON对象结束位置
                # 尝试找到最外层的闭合括号
                brace_count = 0
                in_string = False
                escape_next = False
                end_pos = 0
                
                for i, char in enumerate(content):
                    if escape_next:
                        escape_next = False
                        continue
                    
                    if char == '\\':
                        escape_next = True
                        continue
                    
                    if char == '"' and not escape_next:
                        in_string = not in_string
                        continue
                    
                    if not in_string:
                        if char == '{':
                            brace_count += 1
                        elif char == '}':
                            brace_count -= 1
                            if brace_count == 0:
                                end_pos = i + 1
                                break
                
                if end_pos > 0:
                    # 提取有效的JSON部分
                    valid_content = content[:end_pos]
                    
                    try:
                        data = json.loads(valid_content)
                        # 保存修复后的文件
                        with open(filepath, 'w', encoding='utf-8') as f:
                            json.dump(data, f, indent=2, ensure_ascii=False)
                        print(f"  [FIXED] Removed extra data, saved valid JSON")
                        return True
                    except json.JSONDecodeError as e2:
                        print(f"  [ERROR] Still invalid after removing extra data: {e2}")
                        return False
                else:
                    print(f"  [ERROR] Could not find valid JSON boundary")
                    return False
            else:
                print(f"  [ERROR] Not an extra data error, cannot fix automatically")
                return False
                
    except Exception as e:
        print(f"  [ERROR] Error reading file: {e}")
        return False

def main():
    print("=" * 60)
    print("Fix Extra Data in JSON Files")
    print("=" * 60)
    
    for brand in brands_to_fix:
        print(f"\n{'='*60}")
        print(f"Processing: {brand}")
        print("=" * 60)
        
        brand_dir = os.path.join(data_dir, brand)
        
        # 检查 products.json
        print("\n  Checking products.json...")
        products_path = os.path.join(brand_dir, 'products.json')
        fix_extra_data(products_path)

if __name__ == '__main__':
    main()
