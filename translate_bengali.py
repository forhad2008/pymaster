import os
import re
import json
import time
from deep_translator import GoogleTranslator

def translate_match(match):
    original_text = match.group(1)
    # Check if there are Bengali characters
    if not re.search(r'[\u0980-\u09FF]', original_text):
        return match.group(0) # Unchanged

    try:
        translated = GoogleTranslator(source='bn', target='en').translate(original_text)
        time.sleep(0.1) # Respect rate limits
        print(f"Translating: {original_text[:30]}... -> {translated[:30]}...")
        
        # Replace the original string inside the quotes, but keep the quotes
        # We must escape any unescaped quotes in the translation that match the surrounding quote type
        quote_char = match.group(0)[0]
        if quote_char == '"':
            translated = translated.replace('"', '\\"')
        elif quote_char == "'":
            translated = translated.replace("'", "\\'")
            
        return f"{quote_char}{translated}{quote_char}"
    except Exception as e:
        print(f"Error translating: {e}")
        return match.group(0)

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if not re.search(r'[\u0980-\u09FF]', content):
        return # Skip

    print(f"Processing {file_path}")
    
    # We will use regex to find strings. Double quotes and single quotes strings.
    # A bit naive but usually works for ts data files.
    # regex for strings (handles escaped quotes)
    pattern = re.compile(r'"([^"\\]*(?:\\.[^"\\]*)*)"|\'([^\'\\]*(?:\\.[^\'\\]*)*)\'')
    
    def replacer(match):
        # match.group(1) is double quoted content, match.group(2) is single quoted
        content_group = match.group(1) if match.group(1) is not None else match.group(2)
        quote = '"' if match.group(1) is not None else "'"
        
        if not re.search(r'[\u0980-\u09FF]', content_group):
            return match.group(0)
            
        # Clean up escapes before sending to translator
        clean_text = content_group.replace('\\"', '"').replace("\\'", "'").replace('\\n', '\n')
        
        try:
            translated = GoogleTranslator(source='bn', target='en').translate(clean_text)
            print(f"[{file_path}] translated a string.")
            
            # Repackage the translated string safely
            # Replace newlines with \n
            translated = translated.replace('\n', '\\n')
            if quote == '"':
                translated = translated.replace('"', '\\"')
            else:
                translated = translated.replace("'", "\\'")
                
            return f"{quote}{translated}{quote}"
        except Exception as e:
            print(f"Error on translation: {e}")
            return match.group(0)

    new_content = pattern.sub(replacer, content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

def main():
    src_dir = os.path.join("c:\\", "Users", "user", "Downloads", "pymaster", "src")
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith(('.ts', '.tsx')):
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
