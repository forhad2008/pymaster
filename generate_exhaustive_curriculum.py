# -*- coding: utf-8 -*-
"""
Exhaustive PyMastery Generator - Covers EVERY single bullet point in complete detail.
"""
import json
import os

topics = []

# =============================================================================
# TOPIC 1: 🟢 Python Fundamentals — Beginner
# =============================================================================
topic_1_subtopics = [
    # 1.1 Getting Started
    {
        "name": "1.1 Python কী?",
        "desc": "পাইথন একটি উচ্চ-স্তরের (High-Level), ইন্টারপ্রেটেড (Interpreted) এবং জেনারেল-পারপাস (General-Purpose) প্রোগ্রামিং ভাষা। ১৯৯১ সালে ডাচ প্রোগ্রামার গুইডো ভ্যান রসাম এটি তৈরি করেন। এটি মানুষের মুখের ভাষার মতো সহজ ও সাবলীল।",
        "code": "# Python is clean and readable\nprint('Hello, Python!')"
    },
    {
        "name": "1.1 Python কেন ব্যবহার করা হয়?",
        "desc": "১. অত্যন্ত সহজ সিনট্যাক্স। ২. বিশাল লাইব্রেরি ও ফ্রেমওয়ার্ক সাপোর্ট। ৩. ওয়েব ডেভেলপমেন্ট (Django, FastAPI), ডেটা সায়েন্স ও এআই (NumPy, Pandas, PyTorch), অটোমেশন এবং সাইবার সিকিউরিটিতে শীর্ষ ব্যবহৃত ভাষা।",
        "code": "# Versatility in one line\nimport math\nprint('Square Root of 144:', math.isqrt(144))"
    },
    {
        "name": "1.1 Python Installation & Version Check",
        "desc": "অফিশিয়াল ওয়েবসাইট python.org থেকে পাইথন ডাউনলোড করা হয়। ইনস্টল করার সময় অবশ্যই 'Add Python to PATH' টিক দিতে হবে। টার্মিনালে 'python --version' লিখে ভার্সন চেক করা হয়।",
        "code": "import sys\nprint('Installed Python Version:', sys.version.split()[0])"
    },
    {
        "name": "1.1 Python Interpreter & CPython",
        "desc": "ইন্টারপ্রেটার পাইথন সোর্স কোড (.py) কে লাইন-বাই-লাইন পড়ে বাইটকোডে (.pyc) কনভার্ট করে এবং Python Virtual Machine (PVM)-এ এক্সিকিউট করে। এর অফিসিয়াল স্ট্যান্ডার্ড ইন্টারপ্রেটার হলো CPython।",
        "code": "import platform\nprint('Interpreter Implementation:', platform.python_implementation())"
    },
    {
        "name": "1.1 IDLE, VS Code & PyCharm",
        "desc": "IDLE হলো পাইথনের সাথে আসা ডিফল্ট বেসিক এডিটর। VS Code হলো মাইক্রোসফটের হালকা ও সেরা কোড এডিটর এবং PyCharm হলো জেটব্রেইন্সের একটি শক্তিশালী পূর্ণাঙ্গ Python IDE।",
        "code": "# Choose your IDE based on project scale\nprint('Recommended Editor: VS Code with Python/Pylance extension')"
    },
    {
        "name": "1.1 Terminal / Command Prompt & .py files",
        "desc": "যেকোনো টেক্সট এডিটরে কোড লিখে .py এক্সটেনশনে সেভ করতে হয়। টার্মিনাল বা কমান্ড প্রম্পটে গিয়ে 'python filename.py' কম্যান্ড দিয়ে ফাইলটি রান করতে হয়।",
        "code": "# In Terminal: python main.py"
    },
    {
        "name": "1.1 REPL (Read-Eval-Print Loop)",
        "desc": "টার্মিনালে শুধু 'python' লিখলে ইন্টারঅ্যাক্টিভ REPL মোড অন হয়। এখানে প্রতি লাইনের কোড সাথে সাথে ইভ্যালুয়েট হয় এবং রেজাল্ট প্রিন্ট করে দেখায়। exit() লিখে বের হতে হয়।",
        "code": ">>> 10 + 20\n30"
    },
    {
        "name": "1.1 Comments (কমেন্টস)",
        "desc": "কোড ব্যাখ্যার জন্য কমেন্ট লেখা হয় যা ইন্টারপ্রেটার রান করে না। সিঙ্গেল লাইন কমেন্টের জন্য '#' এবং মাল্টি-লাইন ডকস্ট্রিং এর জন্য ট্রিপল কোটেশন (''' ... ''') ব্যবহার করা হয়।",
        "code": "# This is a single-line comment\n'''\nThis is a multi-line docstring\nused for documentation.\n'''\nprint('Comments are ignored by the interpreter')"
    },
    {
        "name": "1.1 Code Indentation (ইনডেন্টেশন)",
        "desc": "অন্যান্য ভাষার মতো সেকেন্ড ব্র্যাকেট {} এর বদলে পাইথনে ৪টি স্পেস ইনডেন্টেশন দিয়ে ফাংশন, লুপ বা কন্ডিশনের কোড ব্লক নির্ধারণ করা হয়। ভুল ইনডেন্টেশনে IndentationError হয়।",
        "code": "if True:\n    print('Indented with 4 spaces')\n    print('Inside the block')"
    },
    {
        "name": "1.1 Python Keywords & Syntax",
        "desc": "পাইথনে ৩৫টি সংরক্ষিত শব্দ (যেমন: if, else, for, while, def, class, import, True, False, None) রয়েছে যা ভ্যারিয়েবল নাম হিসেবে ব্যবহার করা যায় না। পাইথনের সিনট্যাক্স অত্যন্ত পরিষ্কার এবং লাইনের শেষে কোনো সেমিকোলন লাগে না।",
        "code": "import keyword\nprint('Total Python Keywords:', len(keyword.kwlist))\nprint('Sample Keywords:', keyword.kwlist[:8])"
    },

    # 1.2 First Programs
    {
        "name": "1.2 print() & Multiple print()",
        "desc": "print() আউটপুট প্রদর্শনের মূল ফাংশন। একাধিক আর্গুমেন্ট কমা দিয়ে লিখলে স্বয়ংক্রিয়ভাবে একটি স্পেস দিয়ে প্রিন্ট হয়। একাধিক print() স্টেটমেন্ট ডিফল্টভাবে প্রতিবার নতুন লাইনে প্রিন্ট করে।",
        "code": "print('Hello', 'World')\nprint('First Line')\nprint('Second Line')"
    },
    {
        "name": "1.2 Escape Characters (\\n, \\t, \\\\, \\', \\\")",
        "desc": "\\n দিয়ে নতুন লাইন (New Line) তৈরি হয়, \\t দিয়ে ট্যাব স্পেস তৈরি হয়, \\\\ দিয়ে ব্যাকস্ল্যাশ প্রিন্ট হয় এবং \\' বা \\\" দিয়ে কোটেশন প্রিন্ট করা যায়।",
        "code": "print('Line 1\\nLine 2\\t(Tabbed)\\nQuote: \\'Python is awesome!\\'')"
    },
    {
        "name": "1.2 Quotes & String formatting basics",
        "desc": "স্ট্রিং তৈরিতে সিঙ্গেল কোট '...' বা ডাবল কোট \"...\" ব্যবহৃত হয়। কমা, .format() অথবা আধুনিক f-strings (f'...') দিয়ে ভ্যারিয়েবল ফরম্যাট করে প্রিন্ট করা হয়।",
        "code": "name = 'Adnan'\nage = 25\nprint(f'User: {name}, Age: {age} years old')"
    },
    {
        "name": "1.2 Basic Program Structure",
        "desc": "একটি আদর্শ পাইথন স্ক্রিপ্টের শুরুতে ইমপোর্টস, এরপর গ্লোবাল কনস্ট্যান্ট, ফাংশন ও ক্লাস ডেফিনিশন এবং শেষে if __name__ == '__main__': ব্লক থাকে।",
        "code": "def main():\n    print('Application started successfully!')\n\nif __name__ == '__main__':\n    main()"
    },

    # 1.3 Variables
    {
        "name": "1.3 Variable কী & Variable Declaration",
        "desc": "ভ্যারিয়েবল হলো মেমোরিতে থাকা ডেটার লেবেল বা পয়েন্টার। পাইথনে ভ্যারিয়েবলের টাইপ উল্লেখ করতে হয় না, শুধু নাম লিখে '=' দিয়ে মান নির্ধারণ করলেই ভ্যারিয়েবল ডিক্লেয়ার হয়ে যায়।",
        "code": "x = 100\nusername = 'adnan_99'\nprint(x, username)"
    },
    {
        "name": "1.3 Variable Naming & Naming Conventions",
        "desc": "ভ্যারিয়েবল নাম অক্ষর বা আন্ডারস্কোর (_) দিয়ে শুরু হতে হবে, সংখ্যা দিয়ে শুরু হতে পারবে না। PEP 8 অনুযায়ী ভ্যারিয়েবল ও ফাংশনের নামে snake_case (user_total_score) ব্যবহার করতে হয়।",
        "code": "valid_var_name = 'Correct'\n_private_var = 'Allowed'\n# 2nd_var = 'INVALID: Cannot start with number'"
    },
    {
        "name": "1.3 Assignment & Multiple Assignment",
        "desc": "এক লাইনেই একাধিক ভ্যারিয়েবলে মান অ্যাসাইন করা যায় (Multiple Assignment) অথবা একাধিক ভ্যারিয়েবলে একই মান সেট করা যায়।",
        "code": "a, b, c = 10, 20, 30  # Multiple assignment\nx = y = z = 0         # Chained assignment\na, b = b, a           # Swap variables without temp\nprint(f'{a=}, {b=}')"
    },
    {
        "name": "1.3 Constant Convention",
        "desc": "পাইথনে কোনো বিল্ট-ইন 'const' কি-ওয়ার্ড নেই। কনভেনশন অনুযায়ী যা কখনো পরিবর্তন করা উচিত নয় এমন মানকে ALL_CAPS বা বড় হাতের অক্ষরে লেখা হয়।",
        "code": "DATABASE_PORT = 5432\nMAX_LOGIN_ATTEMPTS = 5\nPI = 3.1415926535"
    },
    {
        "name": "1.3 Dynamic Typing & Reassigning Variables",
        "desc": "পাইথনে একই ভ্যারিয়েবলে প্রথমে পূর্ণসংখ্যা এবং পরবর্তীতে স্ট্রিং বা অন্য যেকোনো ডেটা টাইপ রাখা যায়। টাইপ নির্ধারণ হয় রানটাইমে অবজেক্টের ওপর ভিত্তি করে।",
        "code": "data = 42\nprint('Initial:', type(data))\ndata = 'Now I am a string!'\nprint('Reassigned:', type(data))"
    },

    # 1.4 Data Types
    {
        "name": "1.4 int (Integer)",
        "desc": "পূর্ণসংখ্যা (ধনাত্মক, ঋণাত্মক বা শূন্য)। পাইথনের int টাইপের কোনো মেমোরি ফিক্সড লিমিট নেই, এটি আনলিমিটেড প্রিসিশন সমর্থন করে যতক্ষণ সিস্টেমে র‍্যাম রয়েছে।",
        "code": "big_num = 10 ** 50\nprint('50 digit integer:', big_num)"
    },
    {
        "name": "1.4 float (Floating Point)",
        "desc": "দশমিক যুক্ত বাস্তব সংখ্যা। এটি IEEE 754 ডাবল-প্রিসিশন (৬৪-বিট) ফরম্যাট অনুসরণ করে। সাইন্টিফিক নোটেশন (1.5e3 = 1500.0) সমর্থন করে।",
        "code": "pi = 3.14159\nscientific = 2.5e4\nprint(pi, scientific)"
    },
    {
        "name": "1.4 complex (Complex Numbers)",
        "desc": "জটিল সংখ্যা যা বাস্তব ও কাল্পনিক অংশের সমন্বয়ে গঠিত: a + bj (যেখানে j হলো কাল্পনিক একক $\\sqrt{-1}$)।",
        "code": "z = 3 + 4j\nprint(f'Real: {z.real}, Imag: {z.imag}, Absolute Magnitude: {abs(z)}')"
    },
    {
        "name": "1.4 str (Strings)",
        "desc": "ইউনিকোড অক্ষরের অপরিবর্তনীয় (Immutable) সিকোয়েন্স। টেক্সট ডেটা রিপ্রেজেন্ট করতে ব্যবহৃত হয়।",
        "code": "greeting = 'Hello, Python 🐍'\nprint(greeting, len(greeting))"
    },
    {
        "name": "1.4 bool (Boolean)",
        "desc": "লজিক্যাল সত্য বা মিথ্যা প্রকাশের টাইপ। এর দুটি মাত্র মান রয়েছে: True অথবা False। এটি মূলত int এর একটি সাবক্লাস (True == 1, False == 0)।",
        "code": "is_active = True\nis_admin = False\nprint('Boolean sum (True + True):', True + True)  # 2"
    },
    {
        "name": "1.4 None (NoneType)",
        "desc": "পাইথনের একটি বিশেষ সিঙ্গেলটন অবজেক্ট যা কোনো মান না থাকা (null value) বা অনুপস্থিতি প্রকাশ করে। যেসব ফাংশনে কোনো explicit return থাকে না তারা None রিটার্ন করে।",
        "code": "result = None\nif result is None:\n    print('No data returned yet')"
    },
    {
        "name": "1.4 list, tuple, set, dict Overview",
        "desc": "list: [1, 2] (মিউটেবল ক্রম), tuple: (1, 2) (ইমিউটেবল ক্রম), set: {1, 2} (ইউনিক আনঅর্ডারড সেট), dict: {'k': 'v'} (কী-ভ্যালু হ্যাশম্যাপ)।",
        "code": "my_list = [1, 2, 3]\nmy_tuple = (1, 2, 3)\nmy_set = {1, 2, 3}\nmy_dict = {'a': 1, 'b': 2}\nprint(type(my_list), type(my_tuple), type(my_set), type(my_dict))"
    },
    {
        "name": "1.4 Mutable vs Immutable Concepts",
        "desc": "Mutable অবজেক্টের মান মেমোরিতে সরাসরি পরিবর্তন করা যায় (যেমন: list, set, dict)। Immutable অবজেক্টের মান পরিবর্তন করা যায় না, নতুন অবজেক্ট তৈরি হয় (যেমন: int, float, str, tuple, frozenset)।",
        "code": "lst = [1, 2]\nlst.append(3) # Mutated in-place\nprint('Mutated list:', lst)"
    },
    {
        "name": "1.4 type() vs isinstance()",
        "desc": "type(obj) সরাসরি অবজেক্টের ক্লাস টাইপ রিটার্ন করে। isinstance(obj, Class) অবজেক্টটি নির্দিষ্ট ক্লাসের বা তার চাইল্ড ক্লাসের ইনস্ট্যান্স কিনা (ইনহেরিটেন্স সহ) সত্য/মিথ্যা রিটার্ন করে।",
        "code": "class Animal: pass\nclass Dog(Animal): pass\nd = Dog()\nprint('isinstance check:', isinstance(d, Animal))  # True\nprint('type check:', type(d) is Animal)            # False"
    },

    # 1.5 Operators
    {
        "name": "1.5 Arithmetic Operators (+, -, *, /, //, %, **)",
        "desc": "+ (যোগ), - (বিয়োগ), * (গুণ), / (প্রকৃত ভাগ - float), // (ফ্লোর বা পূর্ণসংখ্যা ভাগ), % (মডুলাস বা ভাগশেষ), ** (পাওয়ার বা সূচক)।",
        "code": "print('10 / 3  =', 10 / 3)   # 3.3333...\nprint('10 // 3 =', 10 // 3)  # 3\nprint('10 % 3  =', 10 % 3)   # 1\nprint('2 ** 4  =', 2 ** 4)   # 16"
    },
    {
        "name": "1.5 Assignment Operators (=, +=, -=, *=, /=, //=, %=, **=)",
        "desc": "ভ্যারিয়েবলে মান নির্ধারণ ও ক্যালকুলেশন সংক্ষিপ্ত করতে ব্যবহৃত হয়। x += 5 মানে x = x + 5।",
        "code": "count = 10\ncount += 5\ncount *= 2\nprint('Final Count:', count)"
    },
    {
        "name": "1.5 Comparison Operators (==, !=, <, >, <=, >=)",
        "desc": "দুটি মানের তুলনা করে True অথবা False রিটার্ন করে। == (সমান), != (অসমান), < (ছোট), > (বড়), <= (ছোট বা সমান), >= (বড় বা সমান)।",
        "code": "print(10 == 10)  # True\nprint(10 != 5)   # True\nprint(20 >= 15)  # True"
    },
    {
        "name": "1.5 Logical Operators (and, or, not)",
        "desc": "একাধিক কন্ডিশন একত্র করতে ব্যবহৃত হয়। 'and' সব শর্ত সত্য হলে True, 'or' যেকোনো একটি শর্ত সত্য হলে True, 'not' বুলিয়ান মান উল্টে দেয়। এটি শর্ট-সার্কিট ইভ্যালুয়েশন করে।",
        "code": "age = 22\nhas_license = True\ncan_drive = (age >= 18) and has_license\nprint('Can Drive:', can_drive)"
    },
    {
        "name": "1.5 Identity Operators (is, is not)",
        "desc": "দুটি ভ্যারিয়েবল মেমোরিতে একই অবজেক্টকে রেফারেন্স করছে কিনা (মেমোরি অ্যাড্রেস বা id() মিলছে কিনা) তা পরীক্ষা করে। '==' মানের সমতা দেখে, আর 'is' মেমোরি আইডেন্টিটি দেখে।",
        "code": "list_a = [1, 2, 3]\nlist_b = [1, 2, 3]\nprint('Values equal (==):', list_a == list_b)  # True\nprint('Identity match (is):', list_a is list_b) # False"
    },
    {
        "name": "1.5 Membership Operators (in, not in)",
        "desc": "কোনো উপাদান সিকোয়েন্সের (String, List, Tuple, Set, Dictionary) মধ্যে উপস্থিত আছে কিনা তা দ্রুত যাচাই করে।",
        "code": "skills = ['Python', 'FastAPI', 'Docker']\nprint('Python' in skills)     # True\nprint('Ruby' not in skills)    # True"
    },
    {
        "name": "1.5 Bitwise Operators (&, |, ^, ~, <<, >>)",
        "desc": "বাইনারি বিট লেভেলে কাজ করে: & (AND), | (OR), ^ (XOR), ~ (NOT), << (Left Shift), >> (Right Shift)।",
        "code": "a = 0b1010  # 10\nb = 0b0100  # 4\nprint('Bitwise a & b:', bin(a & b))  # 0b0\nprint('Bitwise a | b:', bin(a | b))  # 0b1110 (14)"
    },
    {
        "name": "1.5 Operator Precedence (অগ্রাধিকার ক্রম)",
        "desc": "PEMDAS নিয়ম: Parentheses () > Exponents ** > Multiplication/Division/Modulus (*, /, //, %) > Addition/Subtraction (+, -) > Bitwise > Comparison > Logical (not > and > or)।",
        "code": "calc = 10 + 2 * 3 ** 2  # 10 + (2 * 9) = 28\nprint('Precedence Result:', calc)"
    }
]

topics.append({
    "id": "topic-1",
    "num": 1,
    "title": "🟢 Python Fundamentals — Beginner",
    "category": "beginner",
    "categoryLabel": "Fundamentals",
    "icon": "fa-play-circle",
    "summary": "1.1 Getting Started, 1.2 First Programs, 1.3 Variables, 1.4 Data Types, 1.5 Operators",
    "conceptSimple": """পাইথন একটি বহুমুখী, অত্যন্ত সহজবোধ্য এবং আধুনিক হাই-লেভেল প্রোগ্রামিং ভাষা। ১৯৯১ সালে ডাচ প্রোগ্রামার গুইডো ভ্যান রসাম এটি উদ্ভাবন করেন। পাইথনের কোড দেখতে সাধারণ ইংরেজি বাক্যের মতো হওয়ায় এটি সহজে শেখা যায়। 

এই মডিউলে পাইথনের পরিবেশ তৈরি, প্রথম প্রোগ্রামিং, ভ্যারিয়েবল ও মেমোরি পয়েন্টার, সমস্ত প্রিমিটিভ ডেটা টাইপসমূহ (int, float, complex, str, bool, None, list, tuple, set, dict) এবং সকল অপারেটর (Arithmetic, Assignment, Comparison, Logical, Identity, Membership, Bitwise) অত্যন্ত নিখুঁত ও বিস্তারিতভাবে ব্যাখ্যা করা হয়েছে।""",
    "conceptTechnical": """Python is an interpreted, high-level, dynamically typed, garbage-collected multi-paradigm language. In CPython, source code is parsed into an AST and compiled to bytecode (.pyc) executed on the Python Virtual Machine (PVM).

Fundamental architecture:
1. Dynamic Typing: Types belong to objects in memory; variables are symbolic pointer references.
2. PyObject Core: All Python objects inherit the standard PyObject header containing ob_refcnt (reference count) and ob_type (type pointer).
3. Memory Management: PyMalloc provides fast small-block allocations, assisted by cyclic generational garbage collection.
4. Comprehensive Operator System: Operators map directly to special dunder methods (e.g. + -> __add__, == -> __eq__, in -> __contains__).""",
    "exampleCode": """# ==============================================================================
# MODULE 01: PYTHON FUNDAMENTALS COMPLETE EXHAUSTIVE SUITE
# ==============================================================================
import sys
import keyword

# --- 1.1 Interpreter & System Inspection ---
print("--- 1.1 Python Architecture Telemetry ---")
print(f"CPython Version  : {sys.version.split()[0]} ({sys.platform})")
print(f"Total Keywords   : {len(keyword.kwlist)} keywords")

# --- 1.2 First Programs & Formatting ---
print("\\n--- 1.2 Output Engineering ---")
user = "Adnan"
balance = 12500.758
print(f"User: {user:<10} | Balance: ৳{balance:,.2f} | Status: Active \\u2713")

# --- 1.3 Variables & Dynamic Identity ---
print("\\n--- 1.3 Memory Pointers & Multiple Assignment ---")
x = 256
y = 256
print(f"Small Integer Caching Match (x is y): {x is y}")
a, b, *rest = [10, 20, 30, 40, 50]
print(f"Unpacked Variables: a={a}, b={b}, rest={rest}")

# --- 1.4 Primitive Types ---
print("\\n--- 1.4 Primitive Types & Inspection ---")
i_val, f_val, c_val = 100, 3.14159, 3 + 4j
print(f"Types: int={type(i_val).__name__}, float={type(f_val).__name__}, complex={type(c_val).__name__}")
print(f"Complex Magnitude: {abs(c_val):.2f}")

# --- 1.5 Complete Operators Spectrum ---
print("\\n--- 1.5 Precision Arithmetic & Bitwise Logic ---")
base_price = 100
discount = 0.15
final_bill = (base_price * (1 - discount)) * 1.05  # Precedence
print(f"Final Bill: ৳{final_bill:.2f}")

# Bitwise Logic
FLAG_READ, FLAG_WRITE = 0b0001, 0b0010
perms = FLAG_READ | FLAG_WRITE
print(f"Permissions Binary: {bin(perms)} | Can Write: {bool(perms & FLAG_WRITE)}")""",
    "expectedOutput": """--- 1.1 Python Architecture Telemetry ---
CPython Version  : 3.12.0 (win32/linux)
Total Keywords   : 35 keywords

--- 1.2 Output Engineering ---
User: Adnan      | Balance: ৳12,500.76 | Status: Active ✓

--- 1.3 Memory Pointers & Multiple Assignment ---
Small Integer Caching Match (x is y): True
Unpacked Variables: a=10, b=20, rest=[30, 40, 50]

--- 1.4 Primitive Types & Inspection ---
Types: int=int, float=float, complex=complex
Complex Magnitude: 5.00

--- 1.5 Precision Arithmetic & Bitwise Logic ---
Final Bill: ৳89.25
Permissions Binary: 0b11 | Can Write: True""",
    "practiceTask": "ইউজারের বয়স, আয় এবং ৩টি পরীক্ষার নম্বর ইনপুট নিন। Arithmetic, Comparison ও Logical অপারেটর দিয়ে গ্রেড এবং ট্যাক্স হিসাব করে f-string দিয়ে ইনভয়েস প্রিন্ট করুন।",
    "subtopics": topic_1_subtopics
})

# =============================================================================
# TOPIC 2: 🔤 Strings
# =============================================================================
topic_2_subtopics = [
    {
        "name": "Creating Strings & Single/Double/Triple Quotes",
        "desc": "সিঙ্গেল কোট ('...'), ডাবল কোট (\"...\") এবং মাল্টি-লাইন ট্রিপল কোট (\"\"\"...\"\"\") দিয়ে স্ট্রিং তৈরি করা যায়।",
        "code": "s1 = 'Single'\ns2 = \"Double\"\ns3 = '''Multi\nLine'''\nprint(s1, s2, len(s3))"
    },
    {
        "name": "String Indexing (পজিটিভ ও নেগেটিভ)",
        "desc": "০ থেকে শুরু করে পজিটিভ ইনডেক্স এবং -১ থেকে শুরু করে শেষ দিক থেকে নেগেটিভ ইনডেক্স দিয়ে নির্দিষ্ট অক্ষর অ্যাক্সেস করা যায়।",
        "code": "text = 'Python'\nprint('First:', text[0], '| Last:', text[-1])"
    },
    {
        "name": "String Slicing [start:stop:step]",
        "desc": "স্ট্রিংয়ের অংশ কেটে নেওয়া। start ইনক্লুসিভ, stop এক্সক্লুসিভ। step = -1 দিলে স্ট্রিং রিভার্স হয়ে যায়।",
        "code": "s = 'Antigravity'\nprint('Slice [0:4]:', s[0:4])\nprint('Reversed:', s[::-1])"
    },
    {
        "name": "String Concatenation & Repetition",
        "desc": "+ অপারেটর দিয়ে দুটি স্ট্রিং জোড়া লাগানো (Concatenation) এবং * অপারেটর দিয়ে পুনরাবৃত্তি (Repetition) করা যায়।",
        "code": "greeting = 'Hello ' + 'World!'\nline = '-' * 30\nprint(greeting)\nprint(line)"
    },
    {
        "name": "String Length (len)",
        "desc": "len() ফাংশন স্ট্রিংয়ে মোট কতটি অক্ষর বা ইউনিকোড ক্যারেক্টার আছে তার সংখ্যা রিটার্ন করে।",
        "code": "msg = 'Data Science 🚀'\nprint('Length:', len(msg))"
    },
    {
        "name": ".upper(), .lower(), .title(), .capitalize()",
        "desc": ".upper() সব বড়হাতের, .lower() সব ছোটহাতের, .title() প্রতিটি শব্দের প্রথম অক্ষর বড় এবং .capitalize() শুধুমাত্র প্রথম অক্ষর বড় করে।",
        "code": "t = 'python program'\nprint(t.upper())\nprint(t.title())\nprint(t.capitalize())"
    },
    {
        "name": ".strip(), .lstrip(), .rstrip()",
        "desc": "স্ট্রিংয়ের শুরু এবং শেষ থেকে অপ্রয়োজনীয় স্পেস, ট্যাব বা নিউলাইন মুছে ফেলে ক্লিন করে।",
        "code": "raw = '   clean me!   \\n'\nprint(f\"'{raw.strip()}'\")"
    },
    {
        "name": ".replace(old, new, count)",
        "desc": "স্ট্রিংয়ের কোনো নির্দিষ্ট সাবস্ট্রিং খুঁজে নতুন মান দিয়ে প্রতিস্থাপন করে।",
        "code": "txt = 'I love Java. Java is fast.'\nprint(txt.replace('Java', 'Python'))"
    },
    {
        "name": ".split(sep) & .join(iterable)",
        "desc": ".split() স্ট্রিংকে ভেঙে লিস্ট তৈরি করে এবং .join() লিস্টের আইটেমগুলোকে জোড়া লাগিয়ে একক স্ট্রিং বানায়।",
        "code": "csv = 'apple,banana,orange'\nfruits = csv.split(',')\njoined = ' -> '.join(fruits)\nprint('Split:', fruits)\nprint('Joined:', joined)"
    },
    {
        "name": ".find() vs .index()",
        "desc": "উভয়েই সাবস্ট্রিংয়ের প্রথম ইনডেক্স রিটার্ন করে। পার্থক্য হলো: .find() খুঁজে না পেলে -১ রিটার্ন করে, কিন্তু .index() খুঁজে না পেলে ValueError ক্র্যাশ করে।",
        "code": "s = 'FastAPI Framework'\nprint(s.find('API'))    # 4\nprint(s.find('Django')) # -1 (Safe)"
    },
    {
        "name": ".count(sub)",
        "desc": "নির্দিষ্ট সাবস্ট্রিং বা অক্ষর কতবার উপস্থিত রয়েছে তার মোট সংখ্যা গুনে দেয়।",
        "code": "code = 'banana'\nprint('Count of a:', code.count('a'))  # 3"
    },
    {
        "name": ".startswith(prefix) & .endswith(suffix)",
        "desc": "স্ট্রিংটি নির্দিষ্ট শব্দ দিয়ে শুরু বা শেষ হয়েছে কিনা তা বুলিয়ান (True/False) রিটার্ন করে। ফাইল এক্সটেনশন ও ইউআরএল ভ্যালিডেশনে বহুল ব্যবহৃত।",
        "code": "file = 'report.pdf'\nprint(file.endswith('.pdf'))  # True\nprint(file.startswith('rep')) # True"
    },
    {
        "name": ".isdigit(), .isalpha(), .isalnum()",
        "desc": ".isdigit() (সব সংখ্যা?), .isalpha() (সব অক্ষর?), .isalnum() (অক্ষর ও সংখ্যা মিশ্রিত?) ভ্যালিডেশন মেথডস।",
        "code": "print('12345'.isdigit())   # True\nprint('Python'.isalpha())  # True\nprint('User101'.isalnum()) # True"
    },
    {
        "name": "f-strings & Advanced Formatting",
        "desc": "f'{var}' এক্সপ্রেশন, f'{price:,.2f}' ডেসিমেল ফরম্যাটিং, f'{num:04d}' জিরো প্যাডিং এবং f'{name:>10}' রাইট অ্যালাইনমেন্ট।",
        "code": "p = 1450.5\nprint(f'Billed: ৳{p:>10,.2f}')"
    },
    {
        "name": "Raw Strings (r'...'), Unicode & Encoding basics",
        "desc": "r'...' ব্যাকস্ল্যাশ এস্কেপ উপেক্ষা করে (রেজেক্স ও পাথে ব্যবহৃত)। .encode('utf-8') স্ট্রিংকে বাইটে এবং .decode('utf-8') বাইটকে স্ট্রিংয়ে রূপান্তর করে।",
        "code": "raw_p = r'C:\\new_folder\\test.txt'\nb = 'বাংলা 🇧🇩'.encode('utf-8')\nprint(raw_p)\nprint('Decoded:', b.decode('utf-8'))"
    }
]

topics.append({
    "id": "topic-2",
    "num": 2,
    "title": "🔤 Strings Deep Dive & Text Processing",
    "category": "beginner",
    "categoryLabel": "Data Types",
    "icon": "fa-font",
    "summary": "Quotes, Indexing, Slicing, Concatenation, 15+ Methods (.upper, .strip, .split, .join), f-strings, Regex, Unicode, UTF-8",
    "conceptSimple": """স্ট্রিং হলো অক্ষরের একটি অপরিবর্তনীয় (Immutable) সিকোয়েন্স। এই মডিউলে স্ট্রিং ইনডেক্সিং, স্লাইসিং, কনক্যাটিনেশন, এবং প্রতিটি বিল্ট-ইন মেথড (.upper, .lower, .title, .capitalize, .strip, .replace, .split, .join, .find, .index, .count, .startswith, .endswith, .isdigit, .isalpha, .isalnum) সহ f-strings, Raw strings, ইউনিকোড ও UTF-8 বাইট এনকোডিং সম্পূর্ণ বিস্তারিতভাবে কভার করা হয়েছে।""",
    "conceptTechnical": """Python strings adhere to PEP 393 Flexible String Representation: internally choosing 1-byte (Latin-1), 2-byte (UCS-2), or 4-byte (UCS-4) storage per code-point depending on the max ordinal value. 

Because strings are immutable hashable objects, slicing str[start:stop:step] generates a new view buffer allocated in memory. Built-in string algorithms (.split, .join, .replace) are written directly in C for O(N) performance.""",
    "exampleCode": """# ==============================================================================
# MODULE 02: STRINGS COMPLETE EXHAUSTIVE SUITE
# ==============================================================================

raw_log = "  [2026-09-28 21:15:00] -- USER:adnan_dev -- AMOUNT:$1,450.50 -- STATUS:completed  "

# 1. Cleaning & Stripping Whitespace
cleaned = raw_log.strip()
print("Clean Record:", cleaned)

# 2. Slicing & Indexing [start:stop:step]
timestamp = cleaned[1:20]
print("Extracted Timestamp:", timestamp)

# Reversing strings with step = -1
code_str = "BACKEND"
print(f"Reversed '{code_str}': {code_str[::-1]}")

# 3. Splitting & Dictionary Construction
parts = cleaned.split(" -- ")
parsed_data = {}
for p in parts[1:]:
    key, val = p.split(":")
    parsed_data[key.lower()] = val

print("Parsed Dictionary:", parsed_data)

# 4. Advanced f-strings (Alignment, Padding & Numbers)
user = parsed_data["user"].upper()
raw_amount = float(parsed_data["amount"].replace("$", "").replace(",", ""))
tax = raw_amount * 0.05
grand_total = raw_amount + tax

invoice_view = f\"\"\"
====================================================
TRANSACTION RECEIPT
User Account  : {user:<20}
Base Amount   : ${raw_amount:>10,.2f}
Tax Rate (5%) : ${tax:>10,.2f}
Total Billed  : ${grand_total:>10,.2f}
Status Code   : {parsed_data['status'].title()} \\u2705
====================================================\"\"\"
print(invoice_view)

# 5. Unicode & Byte Encodings
bangla_text = "বাংলা ও Python প্রোগ্রামিং 🚀"
encoded_bytes = bangla_text.encode("utf-8")
print(f"UTF-8 Bytes Length: {len(encoded_bytes)} | Decoded: {encoded_bytes.decode('utf-8')}")""",
    "expectedOutput": """Clean Record: [2026-09-28 21:15:00] -- USER:adnan_dev -- AMOUNT:$1,450.50 -- STATUS:completed
Extracted Timestamp: 2026-09-28 21:15:00
Reversed 'BACKEND': DNEKCAB
Parsed Dictionary: {'user': 'adnan_dev', 'amount': '$1,450.50', 'status': 'completed'}

====================================================
TRANSACTION RECEIPT
User Account  : ADNAN_DEV           
Base Amount   : $  1,450.50
Tax Rate (5%) : $     72.52
Total Billed  : $  1,523.02
Status Code   : Completed ✅
====================================================
UTF-8 Bytes Length: 41 | Decoded: বাংলা ও Python প্রোগ্রামিং 🚀""",
    "practiceTask": "একটি প্যারাগ্রাফ ক্লিন করে সব স্ট্রিং মেথড (.strip, .title, .replace, .split, .count) প্রয়োগ করুন এবং প্যালিনড্রোম চেক করুন।",
    "subtopics": topic_2_subtopics
})

# =============================================================================
# TOPIC 3: 📦 Collections (Lists, Tuples, Sets, Dictionaries)
# =============================================================================
topic_3_subtopics = [
    {
        "name": "Lists (লিস্ট) & Creating Lists",
        "desc": "লিস্ট হলো অর্ডারড এবং মিউটেবল (পরিবর্তনযোগ্য) সিকোয়েন্স যা থার্ড ব্র্যাকেট [...] দিয়ে তৈরি করা হয়।",
        "code": "nums = [10, 20, 30, 40]\nprint('List:', nums)"
    },
    {
        "name": "List Indexing, Slicing & Updating",
        "desc": "ইনডেক্স দিয়ে উপাদান এক্সেস ও পরিবর্তন: list[0] = new_val, স্লাইসিং: list[1:3]",
        "code": "items = ['a', 'b', 'c']\nitems[0] = 'alpha'\nprint('Updated:', items)"
    },
    {
        "name": "Adding & Removing Elements",
        "desc": ".append(), .insert(), .extend(), .remove(), .pop(), .clear(), .sort(), .reverse(), .copy()",
        "code": "lst = [3, 1, 4]\nlst.append(2)\nlst.sort()\nprint('Sorted:', lst)"
    },
    {
        "name": "Tuples (টাপল) & Immutability",
        "desc": "ফার্স্ট ব্র্যাকেট (...) দিয়ে তৈরি ইমিউটেবল (অপরিবর্তনীয়) ফাস্ট ডাটা স্ট্রাকচার।",
        "code": "point = (10, 20)\nprint('Tuple:', point)"
    },
    {
        "name": "Tuple Unpacking & Nested Tuples",
        "desc": "x, y = (1, 2) অথবা first, *middle, last = (1, 2, 3, 4, 5) আনপ্যাকিং।",
        "code": "a, *b, c = (10, 20, 30, 40, 50)\nprint(a, b, c)"
    },
    {
        "name": "Sets (সেট) & Set Theory Operations",
        "desc": "ইউনিক উপাদান ধারণকারী আনঅর্ডারড সেট। Union (|), Intersection (&), Difference (-), Symmetric Diff (^)।",
        "code": "s1 = {1, 2, 3}; s2 = {3, 4, 5}\nprint('Intersection:', s1 & s2)\nprint('Union:', s1 | s2)"
    },
    {
        "name": "Dictionaries (ডিকশনারি) & Hash Maps",
        "desc": "কী-ভ্যালু জোড়া: {'key': 'value'}। .get(), .keys(), .values(), .items(), Dict Unpacking (**kwargs)।",
        "code": "user = {'id': 1, 'name': 'Adnan'}\nprint(user.get('name'))\nfor k, v in user.items():\n    print(f'{k}: {v}')"
    }
]

topics.append({
    "id": "topic-3",
    "num": 3,
    "title": "📦 Collections (Lists, Tuples, Sets, Dictionaries)",
    "category": "beginner",
    "categoryLabel": "Data Structures",
    "icon": "fa-boxes-stacked",
    "summary": "Lists, Tuples, Sets, Dictionaries, Methods, Unpacking, Nested structures, Hash Tables",
    "conceptSimple": """পাইথনের ৪টি মূল বিল্ট-ইন কালেকশন ডাটা স্ট্রাকচার:
১. List (লিস্ট): ক্রমভিত্তিক (Ordered), মিউটেবল (পরিবর্তনযোগ্য), ডুপ্লিকেট আইটেম অনুমোদন করে।
২. Tuple (টাপল): ক্রমভিত্তিক, ইমিউটেবল (অপরিবর্তনীয়), দ্রুতগতি এবং ডাটার নিরাপত্তা নিশ্চিত করে।
৩. Set (সেট): ক্রমহীন, ডুপ্লিকেটহীন ইউনিক উপাদান এবং সেট থিওরি অপারেশন (Union, Intersection) করতে পারে।
৪. Dictionary (ডিকশনারি): অতি দ্রুততম O(1) কী-ভ্যালু পেয়ার ম্যাপিং ডাটা স্ট্রাকচার।""",
    "conceptTechnical": """CPython data structure architectures:
- Lists: Dynamically resized array of object pointer references (PyListObject) with amortized O(1) appends and O(N) arbitrary index operations.
- Tuples: Fixed-size contiguous pointer array (PyTupleObject) allocated in a single memory block, immutable and hashable (if all elements are hashable).
- Sets & Dictionaries: Implemented as open-addressing Hash Tables (PyDictObject) using SipHash algorithms for fast average O(1) key lookups, insertions, and deletions.""",
    "exampleCode": """# ==============================================================================
# MODULE 03: COLLECTIONS COMPLETE EXHAUSTIVE SUITE
# ==============================================================================
engineers = ["Adnan", "Rahim", "Ayesha", "Tanvir"]
engineers.append("Zubair")
engineers.sort()
print("Sorted Engineers:", engineers)

server_tuple = ("192.168.1.1", 8080, "PROD")
ip, port, env = server_tuple
print(f"Connected to {ip}:{port} ({env})")

frontend = {"HTML", "CSS", "JS", "React"}
backend = {"Python", "FastAPI", "Postgres", "JS"}
print("Shared skill:", frontend & backend)

user_data = {"id": 101, "name": "Adnan", "role": "Architect"}
print(f"User Name: {user_data.get('name')}")""",
    "expectedOutput": """Sorted Engineers: ['Adnan', 'Ayesha', 'Rahim', 'Tanvir', 'Zubair']
Connected to 192.168.1.1:8080 (PROD)
Shared skill: {'JS'}
User Name: Adnan""",
    "practiceTask": "একটি ব্যাংকিং ডিরেক্টরি বানান যাতে কাস্টমার আইডি কী হিসেবে থাকবে এবং ভ্যালু হবে অ্যাকাউন্ট ডিটেইলস।",
    "subtopics": topic_3_subtopics
})

# Load the remaining 34 topics from existing structure
from generate_full_curriculum import remaining_curriculum

for item in remaining_curriculum:
    num, title, cat, cat_label, icon, summary, c_simple, c_tech, code, out, task, subtopics = item
    topics.append({
        "id": f"topic-{num}",
        "num": num,
        "title": title,
        "category": cat,
        "categoryLabel": cat_label,
        "icon": icon,
        "summary": summary,
        "conceptSimple": c_simple,
        "conceptTechnical": c_tech,
        "exampleCode": code,
        "expectedOutput": out,
        "practiceTask": task,
        "subtopics": subtopics
    })

# Write to js/topics-data.js
output_path = "c:/Users/user/Downloads/pymaster/js/topics-data.js"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
js_content = "// Comprehensive 36 Modules Data for PyMastery\nconst TOPICS_DATA = " + json.dumps(topics, indent=2, ensure_ascii=False) + ";\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated {len(topics)} exhaustive modules in {output_path}")
