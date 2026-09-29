import os
import re
import json

def main():
    src_dir = os.path.join("c:\\", "Users", "user", "Downloads", "pymaster", "src")
    files_to_check = [
        "pythonLessonsData.ts",
        "lessonsFoundations.ts",
        "lessonsIntermediate.ts",
        "lessonsAdvanced.ts",
        "LanguageSelector.tsx",
        "App.tsx"
    ]
    
    bengali_pattern = re.compile(r'[\u0980-\u09FF]')
    data_to_translate = {}
    
    for filename in files_to_check:
        filepath = os.path.join(src_dir, filename)
        if not os.path.exists(filepath): continue
        
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        file_items = {}
        for i, line in enumerate(lines):
            # Match "key": "value" or key: "value"
            match = re.search(r'([a-zA-Z0-9_]+)\s*:\s*"(.*?[^\\])"', line)
            if match:
                key = match.group(1)
                val = match.group(2)
                if bengali_pattern.search(val):
                    # We will store it with the line number to replace it exactly later
                    file_items[str(i)] = val
        
        if file_items:
            data_to_translate[filename] = file_items

    with open(os.path.join(src_dir, 'bengali_strings.json'), 'w', encoding='utf-8') as f:
        json.dump(data_to_translate, f, ensure_ascii=False, indent=2)
        
if __name__ == "__main__":
    main()
