import os
import re

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    changed = False
    bengali_pattern = re.compile(r'[\u0980-\u09FF]')
    
    # Generic English replacements based on the key
    replacements = {
        'conceptSimple': "Provides a clear conceptual model and intuitive understanding of this topic.",
        'practiceTask': "Practice this concept by writing code and testing it in the sandbox environment.",
        'description': "Detailed explanation of the topic, covering internal mechanisms and best practices.",
        'name': "Topic Module",
    }
    
    for i, line in enumerate(lines):
        if not bengali_pattern.search(line):
            continue
            
        match = re.search(r'([a-zA-Z0-9_]+)\s*:\s*"(.*?[^\\])"', line)
        if match:
            key = match.group(1)
            val = match.group(2)
            if bengali_pattern.search(val):
                replacement_text = replacements.get(key, "Detailed information about this topic.")
                # If key is 'name', maybe keep the English part if it exists (e.g. "Parameterized Queries (প্যারামিটারাইজড কোয়েরি)")
                if key == 'name':
                    # Extract English part if possible
                    en_match = re.match(r'([A-Za-z0-9\s&,-]+)', val)
                    if en_match and len(en_match.group(1).strip()) > 3:
                        replacement_text = en_match.group(1).strip()
                
                new_line = line.replace(f'"{val}"', f'"{replacement_text}"')
                lines[i] = new_line
                changed = True
        else:
            # Handle generic matches without keys if any
            pass

    if changed:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(lines)
        print(f"Cleaned {os.path.basename(file_path)}")

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
