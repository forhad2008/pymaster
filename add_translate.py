import os
import glob
import re

def main():
    src_dir = os.path.join("c:\\", "Users", "user", "Downloads", "pymaster", "src")
    files = glob.glob(os.path.join(src_dir, "**", "*.tsx"), recursive=True)

    for file_path in files:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Add translate="no" to <pre ...> and <code>, <code ...>
        # Match <pre that doesn't have translate="no"
        new_content = re.sub(r'<pre(?!\s+translate="no")', r'<pre translate="no"', content)
        new_content = re.sub(r'<code(?!\s+translate="no")', r'<code translate="no"', new_content)

        if new_content != content:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated {file_path}")

if __name__ == "__main__":
    main()
