#!/usr/bin/env python3
"""
修复JSON文件错误
"""
import json
import os
import re

data_dir = os.path.join(os.path.dirname(__file__), '..', 'data')

# 有JSON错误的品牌
brands_with_errors = [
    'gejian-semi',
    'hangshun', 
    'mean-well',
    'silergy',
    'songle',
    'songle-relay'
]

def fix_json_file(filepath):
    """尝试修复JSON文件"""
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
            print(f"  [ERROR] JSON error: {e}")
            
            # 尝试修复常见问题
            # 1. 移除多余的逗号
            content = re.sub(r',(\s*[}\]])', r'\1', content)
            
            # 2. 尝试重新解析
            try:
                data = json.loads(content)
                # 保存修复后的文件
                with open(filepath, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                print(f"  [FIXED] Fixed and saved")
                return True
            except json.JSONDecodeError as e2:
                print(f"  [ERROR] Still has error after basic fix: {e2}")
                return False
                
    except Exception as e:
        print(f"  [ERROR] Error reading file: {e}")
        return False

def main():
    print("=" * 60)
    print("Fix JSON Errors")
    print("=" * 60)
    
    for brand in brands_with_errors:
        print(f"\n{'='*60}")
        print(f"Processing: {brand}")
        print("=" * 60)
        
        brand_dir = os.path.join(data_dir, brand)
        
        # 检查 brand.json
        print("\n  Checking brand.json...")
        brand_path = os.path.join(brand_dir, 'brand.json')
        fix_json_file(brand_path)
        
        # 检查 products.json
        print("\n  Checking products.json...")
        products_path = os.path.join(brand_dir, 'products.json')
        fix_json_file(products_path)
        
        # 检查 solutions.json
        print("\n  Checking solutions.json...")
        solutions_path = os.path.join(brand_dir, 'solutions.json')
        if os.path.exists(solutions_path):
            fix_json_file(solutions_path)
        else:
            print("  (file not found)")
        
        # 检查 support.json
        print("\n  Checking support.json...")
        support_path = os.path.join(brand_dir, 'support.json')
        if os.path.exists(support_path):
            fix_json_file(support_path)
        else:
            print("  (file not found)")

if __name__ == '__main__':
    main()
