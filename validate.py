"""每次新增資料後執行：python3 validate.py"""
import re, glob

files = sorted(glob.glob('data-*.js'))
all_ok = True

for fname in files:
    txt = open(fname, encoding='utf-8').read()
    errors = []

    # 1. 陣列物件之間缺逗號：}\n  { 沒有逗號
    missing_commas = re.findall(r'\}(\s*\n\s+\{)', txt)
    if missing_commas:
        errors.append(f'{len(missing_commas)} 個陣列物件之間缺逗號')

    # 2. 括號平衡
    if txt.count('{') != txt.count('}'):
        errors.append(f'大括號不平衡 {{ {txt.count("{")} }} {txt.count("}")}')

    # 3. const DATA_ 宣告存在
    if not re.search(r'const DATA_\d{6}', txt):
        errors.append('找不到 const DATA_XXXXXX 宣告')

    if errors:
        print(f'❌ {fname}:')
        for e in errors:
            print(f'   - {e}')
        all_ok = False
    else:
        print(f'✅ {fname}: OK')

print()
if all_ok:
    print('全部通過！可以重新整理瀏覽器（Ctrl+Shift+R）查看結果。')
else:
    print('有錯誤！請修正後再重新整理瀏覽器。')
