import os
import re
import time
from deep_translator import GoogleTranslator

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    changed = False
    
    bengali_pattern = re.compile(r'[\u0980-\u09FF]')
    
    for i, line in enumerate(lines):
        if not bengali_pattern.search(line):
            continue
            
        # Very simple replacement for known keys with double quotes:
        # e.g., conceptSimple: "ক্রিপ্টোগ্রাফিক হ্যাশিং হলো..."
        match = re.search(r'([a-zA-Z0-9_]+)\s*:\s*"(.*)"(,?)', line)
        if match:
            key, val, comma = match.groups()
            
            # Avoid sending non-bengali strings to API
            if not bengali_pattern.search(val):
                continue
                
            try:
                translated = GoogleTranslator(source='bn', target='en').translate(val)
                print(f"[{os.path.basename(file_path)}] {key}: Translated.")
                # Put back the escapes
                translated = translated.replace('"', '\\"').replace('\n', ' ')
                
                # Replace the exact match
                new_line = line.replace(f'"{val}"', f'"{translated}"')
                lines[i] = new_line
                changed = True
                time.sleep(0.1)
            except Exception as e:
                print(f"Error: {e}")
        else:
            # Also check for single quotes?
            match2 = re.search(r"([a-zA-Z0-9_]+)\s*:\s*'(.*)'(,?)", line)
            if match2:
                key, val, comma = match2.groups()
                if bengali_pattern.search(val):
                    try:
                        translated = GoogleTranslator(source='bn', target='en').translate(val)
                        print(f"[{os.path.basename(file_path)}] {key}: Translated.")
                        translated = translated.replace("'", "\\'").replace('\n', ' ')
                        new_line = line.replace(f"'{val}'", f"'{translated}'")
                        lines[i] = new_line
                        changed = True
                        time.sleep(0.1)
                    except Exception as e:
                        print(f"Error: {e}")
            else:
                # Might be a simple string element in an array? or a comment?
                if "/*" in line or "//" in line:
                    continue
                # just find the quoted part
                q_match = re.search(r'"([^"]*[\u0980-\u09FF][^"]*)"', line)
                if q_match:
                    val = q_match.group(1)
                    try:
                        translated = GoogleTranslator(source='bn', target='en').translate(val)
                        print(f"[{os.path.basename(file_path)}] generic quote: Translated.")
                        translated = translated.replace('"', '\\"').replace('\n', ' ')
                        new_line = line.replace(f'"{val}"', f'"{translated}"')
                        lines[i] = new_line
                        changed = True
                        time.sleep(0.1)
                    except Exception as e:
                        print(f"Error: {e}")

    if changed:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(lines)
        print(f"Saved {file_path}")

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
    for file in files_to_check:
        full_path = os.path.join(src_dir, file)
        if os.path.exists(full_path):
            process_file(full_path)

if __name__ == "__main__":
    main()
