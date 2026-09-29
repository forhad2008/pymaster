import os

def main():
    app_ts_path = os.path.join("c:\\", "Users", "user", "Downloads", "pymaster", "src", "App.tsx")
    with open(app_ts_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    replacements = {
        " (২৪ ঘণ্টার কুইজ)": "",
        " (গত ৫টি প্রচেষ্টা)": "",
        " (রিয়েল-টাইম টেস্ট কাভারেজ)": "",
        " (শনাক্তকৃত ফাংশন ও লজিক সমূহ):": ":",
        " (টেস্ট কভারেজ প্রগতি ট্র্যাকার)": "",
        " (রিফ্যাক্টরিং স্ট্র্যাটেজি নির্বাচন করুন):": ":",
        " (৪০টি প্রজেক্ট সোর্স)": "",
    }
    
    for k, v in replacements.items():
        content = content.replace(k, v)
        
    with open(app_ts_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    lang_sel_path = os.path.join("c:\\", "Users", "user", "Downloads", "pymaster", "src", "LanguageSelector.tsx")
    with open(lang_sel_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    replacements_ls = {
        " / ভাষা পরিবর্তন করুন": "",
        " / ভাষা": ""
    }
    
    for k, v in replacements_ls.items():
        content = content.replace(k, v)
        
    with open(lang_sel_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Fixed App.tsx and LanguageSelector.tsx")

if __name__ == "__main__":
    main()
