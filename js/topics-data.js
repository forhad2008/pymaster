// Comprehensive 36 Modules Data for PyMastery
const TOPICS_DATA = [
  {
    "id": "topic-1",
    "num": 1,
    "title": "🟢 Python Fundamentals — Beginner",
    "category": "beginner",
    "categoryLabel": "Fundamentals",
    "icon": "fa-play-circle",
    "summary": "1.1 Getting Started, 1.2 First Programs, 1.3 Variables, 1.4 Data Types, 1.5 Operators",
    "conceptSimple": "পাইথন একটি বহুমুখী, অত্যন্ত সহজবোধ্য এবং আধুনিক হাই-লেভেল প্রোগ্রামিং ভাষা। ১৯৯১ সালে ডাচ প্রোগ্রামার গুইডো ভ্যান রসাম এটি উদ্ভাবন করেন। পাইথনের কোড দেখতে সাধারণ ইংরেজি বাক্যের মতো হওয়ায় এটি সহজে শেখা যায়। \n\nএই মডিউলে পাইথনের পরিবেশ তৈরি, প্রথম প্রোগ্রামিং, ভ্যারিয়েবল ও মেমোরি পয়েন্টার, সমস্ত প্রিমিটিভ ডেটা টাইপসমূহ (int, float, complex, str, bool, None, list, tuple, set, dict) এবং সকল অপারেটর (Arithmetic, Assignment, Comparison, Logical, Identity, Membership, Bitwise) অত্যন্ত নিখুঁত ও বিস্তারিতভাবে ব্যাখ্যা করা হয়েছে।",
    "conceptTechnical": "Python is an interpreted, high-level, dynamically typed, garbage-collected multi-paradigm language. In CPython, source code is parsed into an AST and compiled to bytecode (.pyc) executed on the Python Virtual Machine (PVM).\n\nFundamental architecture:\n1. Dynamic Typing: Types belong to objects in memory; variables are symbolic pointer references.\n2. PyObject Core: All Python objects inherit the standard PyObject header containing ob_refcnt (reference count) and ob_type (type pointer).\n3. Memory Management: PyMalloc provides fast small-block allocations, assisted by cyclic generational garbage collection.\n4. Comprehensive Operator System: Operators map directly to special dunder methods (e.g. + -> __add__, == -> __eq__, in -> __contains__).",
    "exampleCode": "# ==============================================================================\n# MODULE 01: PYTHON FUNDAMENTALS COMPLETE EXHAUSTIVE SUITE\n# ==============================================================================\nimport sys\nimport keyword\n\n# --- 1.1 Interpreter & System Inspection ---\nprint(\"--- 1.1 Python Architecture Telemetry ---\")\nprint(f\"CPython Version  : {sys.version.split()[0]} ({sys.platform})\")\nprint(f\"Total Keywords   : {len(keyword.kwlist)} keywords\")\n\n# --- 1.2 First Programs & Formatting ---\nprint(\"\\n--- 1.2 Output Engineering ---\")\nuser = \"Adnan\"\nbalance = 12500.758\nprint(f\"User: {user:<10} | Balance: ৳{balance:,.2f} | Status: Active \\u2713\")\n\n# --- 1.3 Variables & Dynamic Identity ---\nprint(\"\\n--- 1.3 Memory Pointers & Multiple Assignment ---\")\nx = 256\ny = 256\nprint(f\"Small Integer Caching Match (x is y): {x is y}\")\na, b, *rest = [10, 20, 30, 40, 50]\nprint(f\"Unpacked Variables: a={a}, b={b}, rest={rest}\")\n\n# --- 1.4 Primitive Types ---\nprint(\"\\n--- 1.4 Primitive Types & Inspection ---\")\ni_val, f_val, c_val = 100, 3.14159, 3 + 4j\nprint(f\"Types: int={type(i_val).__name__}, float={type(f_val).__name__}, complex={type(c_val).__name__}\")\nprint(f\"Complex Magnitude: {abs(c_val):.2f}\")\n\n# --- 1.5 Complete Operators Spectrum ---\nprint(\"\\n--- 1.5 Precision Arithmetic & Bitwise Logic ---\")\nbase_price = 100\ndiscount = 0.15\nfinal_bill = (base_price * (1 - discount)) * 1.05  # Precedence\nprint(f\"Final Bill: ৳{final_bill:.2f}\")\n\n# Bitwise Logic\nFLAG_READ, FLAG_WRITE = 0b0001, 0b0010\nperms = FLAG_READ | FLAG_WRITE\nprint(f\"Permissions Binary: {bin(perms)} | Can Write: {bool(perms & FLAG_WRITE)}\")",
    "expectedOutput": "--- 1.1 Python Architecture Telemetry ---\nCPython Version  : 3.12.0 (win32/linux)\nTotal Keywords   : 35 keywords\n\n--- 1.2 Output Engineering ---\nUser: Adnan      | Balance: ৳12,500.76 | Status: Active ✓\n\n--- 1.3 Memory Pointers & Multiple Assignment ---\nSmall Integer Caching Match (x is y): True\nUnpacked Variables: a=10, b=20, rest=[30, 40, 50]\n\n--- 1.4 Primitive Types & Inspection ---\nTypes: int=int, float=float, complex=complex\nComplex Magnitude: 5.00\n\n--- 1.5 Precision Arithmetic & Bitwise Logic ---\nFinal Bill: ৳89.25\nPermissions Binary: 0b11 | Can Write: True",
    "practiceTask": "ইউজারের বয়স, আয় এবং ৩টি পরীক্ষার নম্বর ইনপুট নিন। Arithmetic, Comparison ও Logical অপারেটর দিয়ে গ্রেড এবং ট্যাক্স হিসাব করে f-string দিয়ে ইনভয়েস প্রিন্ট করুন।",
    "subtopics": [
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
  },
  {
    "id": "topic-2",
    "num": 2,
    "title": "🔤 Strings Deep Dive & Text Processing",
    "category": "beginner",
    "categoryLabel": "Data Types",
    "icon": "fa-font",
    "summary": "Quotes, Indexing, Slicing, Concatenation, 15+ Methods (.upper, .strip, .split, .join), f-strings, Regex, Unicode, UTF-8",
    "conceptSimple": "স্ট্রিং হলো অক্ষরের একটি অপরিবর্তনীয় (Immutable) সিকোয়েন্স। এই মডিউলে স্ট্রিং ইনডেক্সিং, স্লাইসিং, কনক্যাটিনেশন, এবং প্রতিটি বিল্ট-ইন মেথড (.upper, .lower, .title, .capitalize, .strip, .replace, .split, .join, .find, .index, .count, .startswith, .endswith, .isdigit, .isalpha, .isalnum) সহ f-strings, Raw strings, ইউনিকোড ও UTF-8 বাইট এনকোডিং সম্পূর্ণ বিস্তারিতভাবে কভার করা হয়েছে।",
    "conceptTechnical": "Python strings adhere to PEP 393 Flexible String Representation: internally choosing 1-byte (Latin-1), 2-byte (UCS-2), or 4-byte (UCS-4) storage per code-point depending on the max ordinal value. \n\nBecause strings are immutable hashable objects, slicing str[start:stop:step] generates a new view buffer allocated in memory. Built-in string algorithms (.split, .join, .replace) are written directly in C for O(N) performance.",
    "exampleCode": "# ==============================================================================\n# MODULE 02: STRINGS COMPLETE EXHAUSTIVE SUITE\n# ==============================================================================\n\nraw_log = \"  [2026-09-28 21:15:00] -- USER:adnan_dev -- AMOUNT:$1,450.50 -- STATUS:completed  \"\n\n# 1. Cleaning & Stripping Whitespace\ncleaned = raw_log.strip()\nprint(\"Clean Record:\", cleaned)\n\n# 2. Slicing & Indexing [start:stop:step]\ntimestamp = cleaned[1:20]\nprint(\"Extracted Timestamp:\", timestamp)\n\n# Reversing strings with step = -1\ncode_str = \"BACKEND\"\nprint(f\"Reversed '{code_str}': {code_str[::-1]}\")\n\n# 3. Splitting & Dictionary Construction\nparts = cleaned.split(\" -- \")\nparsed_data = {}\nfor p in parts[1:]:\n    key, val = p.split(\":\")\n    parsed_data[key.lower()] = val\n\nprint(\"Parsed Dictionary:\", parsed_data)\n\n# 4. Advanced f-strings (Alignment, Padding & Numbers)\nuser = parsed_data[\"user\"].upper()\nraw_amount = float(parsed_data[\"amount\"].replace(\"$\", \"\").replace(\",\", \"\"))\ntax = raw_amount * 0.05\ngrand_total = raw_amount + tax\n\ninvoice_view = f\"\"\"\n====================================================\nTRANSACTION RECEIPT\nUser Account  : {user:<20}\nBase Amount   : ${raw_amount:>10,.2f}\nTax Rate (5%) : ${tax:>10,.2f}\nTotal Billed  : ${grand_total:>10,.2f}\nStatus Code   : {parsed_data['status'].title()} \\u2705\n====================================================\"\"\"\nprint(invoice_view)\n\n# 5. Unicode & Byte Encodings\nbangla_text = \"বাংলা ও Python প্রোগ্রামিং 🚀\"\nencoded_bytes = bangla_text.encode(\"utf-8\")\nprint(f\"UTF-8 Bytes Length: {len(encoded_bytes)} | Decoded: {encoded_bytes.decode('utf-8')}\")",
    "expectedOutput": "Clean Record: [2026-09-28 21:15:00] -- USER:adnan_dev -- AMOUNT:$1,450.50 -- STATUS:completed\nExtracted Timestamp: 2026-09-28 21:15:00\nReversed 'BACKEND': DNEKCAB\nParsed Dictionary: {'user': 'adnan_dev', 'amount': '$1,450.50', 'status': 'completed'}\n\n====================================================\nTRANSACTION RECEIPT\nUser Account  : ADNAN_DEV           \nBase Amount   : $  1,450.50\nTax Rate (5%) : $     72.52\nTotal Billed  : $  1,523.02\nStatus Code   : Completed ✅\n====================================================\nUTF-8 Bytes Length: 41 | Decoded: বাংলা ও Python প্রোগ্রামিং 🚀",
    "practiceTask": "একটি প্যারাগ্রাফ ক্লিন করে সব স্ট্রিং মেথড (.strip, .title, .replace, .split, .count) প্রয়োগ করুন এবং প্যালিনড্রোম চেক করুন।",
    "subtopics": [
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
  },
  {
    "id": "topic-3",
    "num": 3,
    "title": "📦 Collections (Lists, Tuples, Sets, Dictionaries)",
    "category": "beginner",
    "categoryLabel": "Data Structures",
    "icon": "fa-boxes-stacked",
    "summary": "Lists, Tuples, Sets, Dictionaries, Methods, Unpacking, Nested structures, Hash Tables",
    "conceptSimple": "পাইথনের ৪টি মূল বিল্ট-ইন কালেকশন ডাটা স্ট্রাকচার:\n১. List (লিস্ট): ক্রমভিত্তিক (Ordered), মিউটেবল (পরিবর্তনযোগ্য), ডুপ্লিকেট আইটেম অনুমোদন করে।\n২. Tuple (টাপল): ক্রমভিত্তিক, ইমিউটেবল (অপরিবর্তনীয়), দ্রুতগতি এবং ডাটার নিরাপত্তা নিশ্চিত করে।\n৩. Set (সেট): ক্রমহীন, ডুপ্লিকেটহীন ইউনিক উপাদান এবং সেট থিওরি অপারেশন (Union, Intersection) করতে পারে।\n৪. Dictionary (ডিকশনারি): অতি দ্রুততম O(1) কী-ভ্যালু পেয়ার ম্যাপিং ডাটা স্ট্রাকচার।",
    "conceptTechnical": "CPython data structure architectures:\n- Lists: Dynamically resized array of object pointer references (PyListObject) with amortized O(1) appends and O(N) arbitrary index operations.\n- Tuples: Fixed-size contiguous pointer array (PyTupleObject) allocated in a single memory block, immutable and hashable (if all elements are hashable).\n- Sets & Dictionaries: Implemented as open-addressing Hash Tables (PyDictObject) using SipHash algorithms for fast average O(1) key lookups, insertions, and deletions.",
    "exampleCode": "# ==============================================================================\n# MODULE 03: COLLECTIONS COMPLETE EXHAUSTIVE SUITE\n# ==============================================================================\nengineers = [\"Adnan\", \"Rahim\", \"Ayesha\", \"Tanvir\"]\nengineers.append(\"Zubair\")\nengineers.sort()\nprint(\"Sorted Engineers:\", engineers)\n\nserver_tuple = (\"192.168.1.1\", 8080, \"PROD\")\nip, port, env = server_tuple\nprint(f\"Connected to {ip}:{port} ({env})\")\n\nfrontend = {\"HTML\", \"CSS\", \"JS\", \"React\"}\nbackend = {\"Python\", \"FastAPI\", \"Postgres\", \"JS\"}\nprint(\"Shared skill:\", frontend & backend)\n\nuser_data = {\"id\": 101, \"name\": \"Adnan\", \"role\": \"Architect\"}\nprint(f\"User Name: {user_data.get('name')}\")",
    "expectedOutput": "Sorted Engineers: ['Adnan', 'Ayesha', 'Rahim', 'Tanvir', 'Zubair']\nConnected to 192.168.1.1:8080 (PROD)\nShared skill: {'JS'}\nUser Name: Adnan",
    "practiceTask": "একটি ব্যাংকিং ডিরেক্টরি বানান যাতে কাস্টমার আইডি কী হিসেবে থাকবে এবং ভ্যালু হবে অ্যাকাউন্ট ডিটেইলস।",
    "subtopics": [
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
  },
  {
    "id": "topic-4",
    "num": 4,
    "title": "🔀 Control Flow & Iteration Logic",
    "category": "beginner",
    "categoryLabel": "Logic & Flow",
    "icon": "fa-code-branch",
    "summary": "if/elif/else, for, while, nested loops, range(), enumerate(), zip(), break, continue, pass",
    "conceptSimple": "কন্ট্রোল ফ্লো প্রোগ্রামের সিদ্ধান্ত গ্রহণ এবং কাজের পুনরাবৃত্তি নিয়ন্ত্রণ করে। if-elif-else দিয়ে শর্ত যাচাই এবং for/while লুপ দিয়ে ডেটা প্রসেসিং করা হয়।",
    "conceptTechnical": "Python control flow uses Truthy/Falsy evaluations. for loops utilize the Iterator Protocol (__iter__ and __next__) under the hood.",
    "exampleCode": "# Control Flow Masterclass\nscores = [78, 92, 45, 88, 60, 95]\npassed_students = []\n\nfor idx, score in enumerate(scores, start=1):\n    if score < 50:\n        continue # Skip failed\n    status = \"Distinction\" if score >= 90 else \"Passed\"\n    passed_students.append((idx, score, status))\n\nprint(\"Passed Students:\")\nfor s_id, score, status in passed_students:\n    print(f\"Student #{s_id}: Score {score} -> {status}\")",
    "expectedOutput": "Passed Students:\nStudent #1: Score 78 -> Passed\nStudent #2: Score 92 -> Distinction\nStudent #4: Score 88 -> Passed\nStudent #5: Score 60 -> Passed\nStudent #6: Score 95 -> Distinction",
    "practiceTask": "FizzBuzz প্রবলেম সলভ করুন ১ থেকে ১০০ পর্যন্ত।",
    "subtopics": [
      {
        "name": "Conditionals (if, elif, else)",
        "desc": "শর্ত সাপেক্ষ এক্সিকিউশন ও টার্নারি অপারেটর।",
        "code": "val = 'Positive' if 10 > 0 else 'Negative'"
      },
      {
        "name": "for & while Loops",
        "desc": "নির্দিষ্ট সিকোয়েন্স এবং শর্ত ভিত্তিক লুপ।",
        "code": "for i in range(3): print(i)"
      },
      {
        "name": "enumerate() & zip()",
        "desc": "ইনডেক্স সহ আইটারেশন এবং প্যারালাল লিস্ট প্রসেসিং।",
        "code": "for i, char in enumerate('ABC'): print(i, char)"
      },
      {
        "name": "Loop Controls",
        "desc": "break, continue, pass এবং for-else লজিক।",
        "code": "for n in range(5):\n    if n == 3: break"
      }
    ]
  },
  {
    "id": "topic-5",
    "num": 5,
    "title": "⌨️ User Input & Interactive CLI",
    "category": "beginner",
    "categoryLabel": "I/O Interaction",
    "icon": "fa-keyboard",
    "summary": "input(), int(input()), float(input()), Validation loops, Multi-input parsing, CLI menus",
    "conceptSimple": "input() ফাংশন দিয়ে কনসোল থেকে ইউজারের ইনপুট স্ট্রিং আকারে নেওয়া হয় এবং টাইপ কাস্টিং ও ভ্যালিডেশন লুপ দিয়ে নিরাপদ রাখা হয়।",
    "conceptTechnical": "input() reads lines from sys.stdin, strips trailing newlines, and returns strings. Robust CLI apps wrap this in retry loops with exception guards.",
    "exampleCode": "def validate_age_input(raw_input):\n    try:\n        age = int(raw_input)\n        if 0 <= age <= 120:\n            return f\"Valid Age: {age}\"\n        return \"Age out of range (0-120)\"\n    except ValueError:\n        return \"Invalid numeric input\"\n\nprint(validate_age_input(\"25\"))\nprint(validate_age_input(\"-5\"))",
    "expectedOutput": "Valid Age: 25\nAge out of range (0-120)",
    "practiceTask": "একটি ইন্টারঅ্যাক্টিভ CLI ক্যালকুলেটর বানান যা ইউজার ইনপুট নিয়ে হিসাব করবে।",
    "subtopics": [
      {
        "name": "input() & Type Conversion",
        "desc": "int(input()), float(input()) রূপান্তর।",
        "code": "val = int('50')"
      },
      {
        "name": "Input Validation Loops",
        "desc": "সঠিক ইনপুট না পাওয়া পর্যন্ত প্রম্পট করা।",
        "code": "while True:\n    if '123'.isdigit(): break"
      },
      {
        "name": "CLI Menu Systems",
        "desc": "কমান্ড লাইন ইন্টারফেস মেনু।",
        "code": "print('1. Add\\n2. Exit')"
      }
    ]
  },
  {
    "id": "topic-6",
    "num": 6,
    "title": "🔧 Functions, Arguments & Scope",
    "category": "beginner",
    "categoryLabel": "Modularity",
    "icon": "fa-gears",
    "summary": "def, parameters, return, *args, **kwargs, Local/Global/Nonlocal scope, Lambda, Docstrings",
    "conceptSimple": "ফাংশন কোডকে রিইউজেবল এবং মডুলার করে। *args ও **kwargs দিয়ে অনির্দিষ্ট সংখ্যক আর্গুমেন্ট পাঠানো যায়।",
    "conceptTechnical": "Functions are first-class objects in Python. Variable scope lookup follows the LEGB (Local, Enclosing, Global, Built-in) rule.",
    "exampleCode": "def calculate_invoice(customer: str, *items: str, discount: float = 0.0, **meta) -> dict:\n    \"\"\"Generates structured invoice payload.\"\"\"\n    return {\n        \"customer\": customer,\n        \"items_count\": len(items),\n        \"items\": list(items),\n        \"discount_applied\": f\"{discount * 100}%\",\n        \"metadata\": meta\n    }\n\norder = calculate_invoice(\"Tanvir\", \"Laptop\", \"Mouse\", discount=0.10, priority=\"HIGH\")\nprint(order)",
    "expectedOutput": "{'customer': 'Tanvir', 'items_count': 2, 'items': ['Laptop', 'Mouse'], 'discount_applied': '10.0%', 'metadata': {'priority': 'HIGH'}}",
    "practiceTask": "একটি রিকার্সিভ ফাংশন লিখুন যা কোনো সংখ্যার ফ্যাক্টরিয়াল ও ফিবোনাচ্চি সিরিজ গণনা করে।",
    "subtopics": [
      {
        "name": "Function Definition & Return",
        "desc": "def ও return স্টেটমেন্ট।",
        "code": "def add(a, b): return a + b"
      },
      {
        "name": "*args and **kwargs",
        "desc": "ফ্লেক্সিবল পজিশনাল ও কী-ওয়ার্ড আর্গুমেন্ট।",
        "code": "def f(*a, **k): print(a, k)"
      },
      {
        "name": "LEGB Scope & global/nonlocal",
        "desc": "স্কোপ রেজোলিউশন ও মডিফিকেশন।",
        "code": "c = 0\ndef inc(): global c; c += 1"
      },
      {
        "name": "Lambda & Higher-Order Functions",
        "desc": "অ্যানোনিমাস ফাংশন ও map/filter।",
        "code": "sq = list(map(lambda x: x**2, [1, 2, 3]))"
      }
    ]
  },
  {
    "id": "topic-7",
    "num": 7,
    "title": "🧠 Comprehensions & Generator Expressions",
    "category": "intermediate",
    "categoryLabel": "Core Python",
    "icon": "fa-brain",
    "summary": "List comprehension, Dict comprehension, Set comprehension, Generator expressions, Conditionals",
    "conceptSimple": "কম্প্রিহেনশন হলো এক লাইনে লিস্ট, ডিকশনারি বা সেট তৈরি করার দ্রুত ও মার্জিত উপায়।",
    "conceptTechnical": "Comprehensions are optimized in CPython bytecode, avoiding repeated attribute lookups of .append() in standard for-loops.",
    "exampleCode": "# List & Dict Comprehensions\nnums = range(1, 11)\neven_squares = [x**2 for x in nums if x % 2 == 0]\nsquare_map = {x: x**2 for x in range(1, 6)}\ngen_sum = sum(x**3 for x in range(100))\n\nprint(\"Even Squares:\", even_squares)\nprint(\"Square Map   :\", square_map)\nprint(\"Gen Cubes Sum:\", gen_sum)",
    "expectedOutput": "Even Squares: [4, 16, 36, 64, 100]\nSquare Map   : {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\nGen Cubes Sum: 24502500",
    "practiceTask": "১ থেকে ৫০ পর্যন্ত সংখ্যার মধ্যে শুধু প্রাইম সংখ্যাগুলোকে লিস্ট কম্প্রিহেনশন দিয়ে ফিল্টার করুন।",
    "subtopics": [
      {
        "name": "List Comprehension",
        "desc": "[x for x in data if cond]",
        "code": "evens = [x for x in range(10) if x % 2 == 0]"
      },
      {
        "name": "Dict Comprehension",
        "desc": "{k: v for k, v in data}",
        "code": "d = {i: i*2 for i in range(3)}"
      },
      {
        "name": "Set & Gen Expressions",
        "desc": "{x for x in ...} ও (x for x in ...)",
        "code": "s = {x % 3 for x in range(10)}"
      }
    ]
  },
  {
    "id": "topic-8",
    "num": 8,
    "title": "⚠️ Error Handling & Custom Exceptions",
    "category": "intermediate",
    "categoryLabel": "Robustness",
    "icon": "fa-triangle-exclamation",
    "summary": "try, except, else, finally, raise, Custom Exceptions, Exception hierarchy",
    "conceptSimple": "প্রোগ্রাম ক্র্যাশ হওয়া প্রতিরোধে try-except ব্লক এবং রিসোর্স ক্লিনআপে finally ব্যবহার করা হয়।",
    "conceptTechnical": "Python exceptions derive from BaseException. Unhandled exceptions bubble up the frame stack producing traceback logs.",
    "exampleCode": "class PaymentError(Exception):\n    pass\n\ndef process_transaction(balance, amount):\n    try:\n        if amount > balance:\n            raise PaymentError(f\"Insufficient funds: Need {amount}, have {balance}\")\n        return balance - amount\n    except PaymentError as e:\n        print(f\"[REJECTED]: {e}\")\n        return balance\n    finally:\n        print(\"[AUDIT]: Operation logged.\")\n\nprint(\"New Balance:\", process_transaction(500, 700))",
    "expectedOutput": "[REJECTED]: Insufficient funds: Need 700, have 500\n[AUDIT]: Operation logged.\nNew Balance: 500",
    "practiceTask": "একটি কাস্টম ভ্যালিডেশন এক্সেপশন ক্লাস তৈরি করে ইমেইল ভ্যালিডেশন টেস্ট করুন।",
    "subtopics": [
      {
        "name": "try / except / else / finally",
        "desc": "এক্সেপশন হ্যান্ডলিং লাইফসাইকেল।",
        "code": "try: 1/1\nexcept: pass\nelse: print('OK')"
      },
      {
        "name": "Custom Exceptions (raise)",
        "desc": "নিজস্ব এরর ক্লাস তৈরি।",
        "code": "class MyErr(Exception): pass"
      }
    ]
  },
  {
    "id": "topic-9",
    "num": 9,
    "title": "📁 File Handling & OS Operations",
    "category": "intermediate",
    "categoryLabel": "File Systems",
    "icon": "fa-folder-open",
    "summary": "open modes, with open(), Text, CSV, JSON, pathlib.Path, os, shutil",
    "conceptSimple": "with open() কনটেক্সট ম্যানেজার স্বয়ংক্রিয়ভাবে ফাইল ক্লোজ করে ফাইল হ্যান্ডলিং নিরাপদ করে।",
    "conceptTechnical": "pathlib.Path provides an OOP interface over OS filesystem calls for cross-platform file manipulation.",
    "exampleCode": "import json\n\ndata = {\"system\": \"PyMaster\", \"version\": 3.12, \"modules\": 36}\njson_str = json.dumps(data, indent=2)\nparsed = json.loads(json_str)\n\nprint(f\"Loaded {parsed['system']} v{parsed['version']} with {parsed['modules']} modules.\")",
    "expectedOutput": "Loaded PyMaster v3.12 with 36 modules.",
    "practiceTask": "pathlib দিয়ে একটি ফোল্ডারের সব .log ফাইল অন্য একটি ফোল্ডারে মুভ করার স্ক্রিপ্ট লিখুন।",
    "subtopics": [
      {
        "name": "with open() & File Modes",
        "desc": "'r', 'w', 'a', 'b' ফাইল মোডস।",
        "code": "# with open('f.txt', 'w') as f: f.write('hi')"
      },
      {
        "name": "JSON & CSV Processing",
        "desc": "json.loads(), json.dumps(), csv.reader()",
        "code": "import json; d = json.loads('{\"a\": 1}')"
      },
      {
        "name": "pathlib.Path & OS",
        "desc": "ডিরেক্টরি ও পাথ ম্যানিপুলেশন।",
        "code": "from pathlib import Path; p = Path('.')"
      }
    ]
  },
  {
    "id": "topic-10",
    "num": 10,
    "title": "📦 Modules & Packages Architecture",
    "category": "intermediate",
    "categoryLabel": "Code Organization",
    "icon": "fa-cube",
    "summary": "import, from...import, Aliases, __init__.py, __name__ == '__main__', Package hierarchy",
    "conceptSimple": "মডিউল হলো একটি .py ফাইল এবং প্যাকেজ হলো মডিউলের ফোল্ডার। __name__ == '__main__' দিয়ে স্ক্রিপ্ট এন্ট্রি পয়েন্ট নির্ধারণ করা হয়।",
    "conceptTechnical": "Python resolves imports by searching sys.path and caches loaded modules in sys.modules.",
    "exampleCode": "import math as m\nfrom datetime import datetime, timezone\n\nif __name__ == \"__main__\":\n    now = datetime.now(timezone.utc).strftime(\"%Y-%m-%d %H:%M:%S\")\n    print(f\"Module Executed Directly at {now} UTC | Pi: {m.pi:.4f}\")",
    "expectedOutput": "Module Executed Directly at 2026-09-28 21:15:00 UTC | Pi: 3.1416",
    "practiceTask": "একটি নিজস্ব প্যাকেজ স্ট্রাকচার বানিয়ে __init__.py এর মাধ্যমে ফাংশন এক্সপোর্ট করুন।",
    "subtopics": [
      {
        "name": "import & Aliases",
        "desc": "import math as m, from sys import path",
        "code": "import sys; print(len(sys.path))"
      },
      {
        "name": "__name__ == '__main__'",
        "desc": "ডিরেক্ট এক্সিকিউশন গার্ড।",
        "code": "if __name__ == '__main__': print('Run')"
      },
      {
        "name": "Package Structure",
        "desc": "__init__.py ও মডিউল অর্গানাইজেশন।",
        "code": "# mypkg/__init__.py"
      }
    ]
  },
  {
    "id": "topic-11",
    "num": 11,
    "title": "🧰 Python Standard Library Power Tools",
    "category": "intermediate",
    "categoryLabel": "Standard Tools",
    "icon": "fa-toolbox",
    "summary": "collections (Counter, defaultdict), itertools, functools, re, logging, datetime, random",
    "conceptSimple": "পাইথনে প্রচুর পাওয়ারফুল বিল্ট-ইন লাইব্রেরি রয়েছে যেগুলোকে 'Batteries Included' বলা হয়।",
    "conceptTechnical": "Standard Library tools are implemented in optimized C providing high-performance data structures and algorithms.",
    "exampleCode": "from collections import Counter\nimport itertools\nimport re\n\nwords = [\"python\", \"ai\", \"fastapi\", \"python\", \"ai\", \"python\"]\ncounts = Counter(words)\nprint(\"Top Word:\", counts.most_common(1))\n\ncombos = list(itertools.combinations([\"FastAPI\", \"Postgres\", \"Redis\"], 2))\nprint(\"Architecture Pairs:\", combos)",
    "expectedOutput": "Top Word: [('python', 3)]\nArchitecture Pairs: [('FastAPI', 'Postgres'), ('FastAPI', 'Redis'), ('Postgres', 'Redis')]",
    "practiceTask": "re মডিউল দিয়ে ইমেইল ও ফোন নম্বর এক্সট্র্যাক্ট করার রেজেক্স লিখুন।",
    "subtopics": [
      {
        "name": "collections Module",
        "desc": "Counter, defaultdict, deque",
        "code": "from collections import Counter; c = Counter('abc')"
      },
      {
        "name": "itertools & functools",
        "desc": "permutations, combinations, lru_cache",
        "code": "import functools; @functools.lru_cache()\ndef f(): pass"
      },
      {
        "name": "re (Regular Expressions)",
        "desc": "প্যাটার্ন ম্যাচিং ও এক্সট্রাকশন।",
        "code": "import re; m = re.findall(r'\\d+', '100 and 200')"
      }
    ]
  },
  {
    "id": "topic-12",
    "num": 12,
    "title": "🏗️ Object-Oriented Programming (OOP)",
    "category": "intermediate",
    "categoryLabel": "Object Oriented",
    "icon": "fa-cubes",
    "summary": "Classes, Objects, self, __init__, Encapsulation, Inheritance, Polymorphism, Abstraction, Magic methods, MRO",
    "conceptSimple": "অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP) কোডকে অবজেক্ট ও ক্লাসে সাজায়। এর ৪টি মূল স্তম্ভ: Encapsulation, Inheritance, Polymorphism, Abstraction।",
    "conceptTechnical": "Python uses class-based OOP with dynamic dispatch. Method Resolution Order (MRO) resolves multiple inheritance using the C3 Linearization algorithm.",
    "exampleCode": "from abc import ABC, abstractmethod\n\nclass PaymentGateway(ABC):\n    @abstractmethod\n    def pay(self, amount: float):\n        pass\n\nclass SSLCommerz(PaymentGateway):\n    def __init__(self, merchant_id: str):\n        self._merchant_id = merchant_id  # Encapsulation\n\n    def pay(self, amount: float):\n        print(f\"[SSLCommerz]: Charged ৳{amount:,.2f}\")\n\ngw = SSLCommerz(\"MERCHANT_99\")\ngw.pay(5000)",
    "expectedOutput": "[SSLCommerz]: Charged ৳5,000.00",
    "practiceTask": "একটি BankAccount বেস ক্লাস এবং Savings ও Current চাইল্ড ক্লাস তৈরি করুন।",
    "subtopics": [
      {
        "name": "Classes & __init__",
        "desc": "ব্লুপ্রিন্ট ও কনস্ট্রাক্টর মেথড।",
        "code": "class User:\n    def __init__(self, n): self.name = n"
      },
      {
        "name": "4 OOP Pillars",
        "desc": "Encapsulation, Inheritance, Polymorphism, Abstraction",
        "code": "class Animal: pass\nclass Dog(Animal): pass"
      },
      {
        "name": "Magic Methods & Properties",
        "desc": "__str__, __repr__, __len__, @property",
        "code": "class Box:\n    def __len__(self): return 10"
      }
    ]
  },
  {
    "id": "topic-13",
    "num": 13,
    "title": "🧩 Advanced Python (Generators, Decorators, Dataclasses)",
    "category": "advanced",
    "categoryLabel": "Advanced Language",
    "icon": "fa-puzzle-piece",
    "summary": "Iterators, Generators (yield), Decorators, Closures, Context Managers, dataclasses, Pattern Matching",
    "conceptSimple": "yield দিয়ে তৈরি জেনারেটর মেমোরি বাঁচায়, ডেকোরেটর ফাংশন আচরণ মডিফাই করে এবং dataclasses বয়লারপ্লেট কমায়।",
    "conceptTechnical": "Generators implement the iterator protocol lazily. Structural pattern matching (match/case) enables declarative dispatching.",
    "exampleCode": "import time\nfrom dataclasses import dataclass\n\ndef timing_decorator(fn):\n    def wrapper(*args, **kwargs):\n        t0 = time.perf_counter()\n        res = fn(*args, **kwargs)\n        print(f\"{fn.__name__} took {(time.perf_counter()-t0)*1000:.4f}ms\")\n        return res\n    return wrapper\n\n@dataclass\nclass Service:\n    name: str\n    port: int\n\n@timing_decorator\ndef start_node():\n    s = Service(\"AuthAPI\", 8000)\n    print(f\"Service {s.name} running on port {s.port}\")\n\nstart_node()",
    "expectedOutput": "Service AuthAPI running on port 8000\nstart_node took 0.0500ms",
    "practiceTask": "একটি কাস্টম কনটেক্সট ম্যানেজার তৈরি করুন যা কোডের মেমোরি ব্যবহার মাপবে।",
    "subtopics": [
      {
        "name": "Generators & yield",
        "desc": "মেমোরি সাশ্রয়ী লেজি ইভ্যালুয়েশন।",
        "code": "def gen(): yield 1; yield 2"
      },
      {
        "name": "Decorators & Closures",
        "desc": "ফাংশন র‍্যাপার ও মেটাপ্রোগ্রামিং।",
        "code": "def dec(fn): return lambda: fn()"
      },
      {
        "name": "dataclasses & Pattern Matching",
        "desc": "@dataclass ও match-case স্টেটমেন্ট।",
        "code": "from dataclasses import dataclass\n@dataclass\nclass P: x: int"
      }
    ]
  },
  {
    "id": "topic-14",
    "num": 14,
    "title": "🧵 Concurrency & Asynchronous Programming",
    "category": "advanced",
    "categoryLabel": "Concurrency",
    "icon": "fa-network-wired",
    "summary": "Threading (I/O bound), Multiprocessing (CPU bound), Asyncio, async/await, Tasks, Event Loops",
    "conceptSimple": "নেটওয়ার্ক ও I/O কাজের জন্য Asyncio/Threading এবং ভারী CPU কাজের জন্য Multiprocessing ব্যবহার করা হয়।",
    "conceptTechnical": "CPython has a GIL. Asyncio uses a single-threaded cooperative event loop using epoll/kqueue multiplexing.",
    "exampleCode": "import asyncio\n\nasync def fetch_api(endpoint):\n    print(f\"📡 Fetching {endpoint}...\")\n    await asyncio.sleep(0.05)\n    return {\"endpoint\": endpoint, \"status\": 200}\n\nasync def main():\n    results = await asyncio.gather(\n        fetch_api(\"/users\"),\n        fetch_api(\"/orders\")\n    )\n    print(\"Fetched APIs:\", results)\n\n# asyncio.run(main()) in standalone\nprint(\"Async pipeline blueprint verified.\")",
    "expectedOutput": "Async pipeline blueprint verified.",
    "practiceTask": "asyncio দিয়ে একসাথে ১০টি ওয়েবসাইটের স্ট্যাটাস চেক করার স্ক্রিপ্ট লিখুন।",
    "subtopics": [
      {
        "name": "Threading & Locks",
        "desc": "I/O বাউন্ড টাস্ক ও রেস কন্ডিশন প্রতিরোধ।",
        "code": "import threading\nlock = threading.Lock()"
      },
      {
        "name": "Multiprocessing",
        "desc": "মাল্টি-কোর CPU প্রসেসিং (GIL বাইপাস)।",
        "code": "from multiprocessing import Pool"
      },
      {
        "name": "Asyncio (async/await)",
        "desc": "নন-ব্লকিং ইভেন্ট লুপ।",
        "code": "async def f(): await asyncio.sleep(1)"
      }
    ]
  },
  {
    "id": "topic-15",
    "num": 15,
    "title": "🧮 Algorithms & Data Structures",
    "category": "advanced",
    "categoryLabel": "Computer Science",
    "icon": "fa-diagram-project",
    "summary": "Arrays, Stack, Queue, Trees, BST, Graphs, Sorting, Binary Search, Big O Complexity",
    "conceptSimple": "ডেটা সাজানো ও এফিশিয়েন্টলি সার্চ/সর্ট করার জন্য ডেটা স্ট্রাকচার ও অ্যালগরিদম অপরিহার্য।",
    "conceptTechnical": "Asymptotic Big-O analysis evaluates algorithm scaling. Binary Search runs in O(log N) and QuickSort in O(N log N).",
    "exampleCode": "def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\nnums = [10, 25, 34, 48, 59, 72, 85, 96]\nidx = binary_search(nums, 59)\nprint(f\"Binary Search: Found 59 at index {idx}\")",
    "expectedOutput": "Binary Search: Found 59 at index 4",
    "practiceTask": "একটি Binary Search Tree (BST) তে insert এবং search মেথড লিখুন।",
    "subtopics": [
      {
        "name": "Big O Complexity",
        "desc": "O(1), O(log N), O(N), O(N log N), O(N^2)",
        "code": "# Dict lookup: O(1) vs List: O(N)"
      },
      {
        "name": "Searching & Sorting",
        "desc": "Binary Search, Quick Sort, Merge Sort",
        "code": "def bs(): pass"
      },
      {
        "name": "Trees & Graphs (BFS/DFS)",
        "desc": "ট্রি এবং গ্রাফ ট্রাভার্সাল অ্যালগরিদম।",
        "code": "graph = {'A': ['B']}"
      }
    ]
  },
  {
    "id": "topic-16",
    "num": 16,
    "title": "🗄️ Databases (SQL & SQLAlchemy ORM)",
    "category": "applied",
    "categoryLabel": "Databases & Backend",
    "icon": "fa-database",
    "summary": "SQL CRUD, JOIN, Indexes, SQLite, PostgreSQL, Transactions, SQLAlchemy ORM",
    "conceptSimple": "ডেটাবেসে ডেটা সংরক্ষণ করতে SQL এবং পাইথনের অবজেক্ট দিয়ে ডেটাবেস হ্যান্ডেল করতে ORM ব্যবহৃত হয়।",
    "conceptTechnical": "Relational databases enforce ACID guarantees. ORMs map relational schema tuples to Python classes.",
    "exampleCode": "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE users (id INT, name TEXT, balance REAL)\")\ncur.execute(\"INSERT INTO users VALUES (1, 'Adnan', 1500.0), (2, 'Sadia', 3200.0)\")\nconn.commit()\n\ncur.execute(\"SELECT name, balance FROM users WHERE balance > 2000\")\nprint(\"High Balance Users:\", cur.fetchall())\nconn.close()",
    "expectedOutput": "High Balance Users: [('Sadia', 3200.0)]",
    "practiceTask": "SQLAlchemy দিয়ে User এবং Post মডেলের One-to-Many রিলেশনশিপ তৈরি করুন।",
    "subtopics": [
      {
        "name": "SQL CRUD & Queries",
        "desc": "SELECT, INSERT, UPDATE, DELETE, JOIN",
        "code": "SELECT * FROM users JOIN orders ON users.id=orders.uid"
      },
      {
        "name": "Parameterized Queries",
        "desc": "SQL Injection প্রতিরোধ।",
        "code": "cur.execute('SELECT * FROM u WHERE id = ?', (1,))"
      },
      {
        "name": "SQLAlchemy ORM",
        "desc": "মডেল ও সেশন ম্যানেজমেন্ট।",
        "code": "class User(Base): __tablename__ = 'users'"
      }
    ]
  },
  {
    "id": "topic-17",
    "num": 17,
    "title": "🌐 APIs & Web Requests (requests / httpx)",
    "category": "applied",
    "categoryLabel": "Web & Networking",
    "icon": "fa-globe",
    "summary": "HTTP/HTTPS, GET, POST, PUT, DELETE, Status codes, JSON, requests, httpx, REST APIs",
    "conceptSimple": "API এর মাধ্যমে ভিন্ন সফটওয়্যার ডেটা আদান-প্রদান করে। requests ও httpx দিয়ে ওয়েব কল করা হয়।",
    "conceptTechnical": "REST APIs operate over HTTP exchanging JSON payloads with standardized status codes (2xx, 4xx, 5xx).",
    "exampleCode": "import json\n\n# Simulated REST API Response\nmock_response = {\n    \"status_code\": 200,\n    \"payload\": {\"city\": \"Dhaka\", \"temp_c\": 28.5, \"condition\": \"Sunny\"}\n}\n\nprint(f\"API Response (HTTP {mock_response['status_code']}):\")\nprint(json.dumps(mock_response[\"payload\"], indent=2))",
    "expectedOutput": "API Response (HTTP 200):\n{\n  \"city\": \"Dhaka\",\n  \"temp_c\": 28.5,\n  \"condition\": \"Sunny\"\n}",
    "practiceTask": "GitHub API কল করে ইউজারের রিপোজিটরি তালিকা প্রিন্ট করার স্ক্রিপ্ট লিখুন।",
    "subtopics": [
      {
        "name": "HTTP Methods & Status Codes",
        "desc": "GET, POST, PUT, DELETE, 200 OK, 404 Not Found",
        "code": "# requests.get('https://api.github.com')"
      },
      {
        "name": "requests & httpx Client",
        "desc": "JSON পার্সিং ও হেডার হ্যান্ডলিং।",
        "code": "# res = requests.post(url, json=data)"
      },
      {
        "name": "Authentication & OAuth",
        "desc": "Bearer Tokens ও API Keys।",
        "code": "headers = {'Authorization': 'Bearer TOKEN'}"
      }
    ]
  },
  {
    "id": "topic-18",
    "num": 18,
    "title": "🕸️ Web Development (FastAPI, Flask, Django)",
    "category": "applied",
    "categoryLabel": "Backend Engineering",
    "icon": "fa-server",
    "summary": "FastAPI, Flask, Django comparison, Routing, Pydantic validation, Async, Swagger /docs",
    "conceptSimple": "FastAPI উচ্চগতির আধুনিক API, Flask হালকা ফ্রেমওয়ার্ক এবং Django পূর্ণাঙ্গ অল-ইন-ওয়ান ফ্রেমওয়ার্ক।",
    "conceptTechnical": "FastAPI combines Starlette async routing with Pydantic type validation and automatic OpenAPI generation.",
    "exampleCode": "# FastAPI Architecture Blueprint\n\"\"\"\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI(title=\"PyMaster API\")\n\nclass Item(BaseModel):\n    name: str\n    price: float\n\n@app.post(\"/items/\")\nasync def create_item(item: Item):\n    return {\"status\": \"created\", \"item\": item}\n\"\"\"\nprint(\"FastAPI + Pydantic Type-safe routing blueprint ready.\")",
    "expectedOutput": "FastAPI + Pydantic Type-safe routing blueprint ready.",
    "practiceTask": "FastAPI দিয়ে একটি To-Do REST API বানান যা ইন-মেমোরি ডেটাবেসে কাজ করবে।",
    "subtopics": [
      {
        "name": "FastAPI vs Flask vs Django",
        "desc": "আধুনিক ব্যাকএন্ড ফ্রেমওয়ার্ক নির্বাচন।",
        "code": "# @app.get('/') async def root():"
      },
      {
        "name": "Pydantic Schemas",
        "desc": "ডাটা ভ্যালিডেশন ও টাইপ সেফটি।",
        "code": "class User(BaseModel): name: str"
      },
      {
        "name": "OpenAPI Documentation",
        "desc": "স্বয়ংক্রিয় /docs সোয়্যাগার ইন্টারফেস।",
        "code": "# /docs route"
      }
    ]
  },
  {
    "id": "topic-19",
    "num": 19,
    "title": "🖥️ GUI Development (Tkinter & PyQt)",
    "category": "applied",
    "categoryLabel": "Desktop Apps",
    "icon": "fa-window-maximize",
    "summary": "Tkinter, PyQt6, PySide6, CustomTkinter, Event driven UI, Desktop Calculator, Desktop Apps",
    "conceptSimple": "পাইথন দিয়ে উইন্ডোজ/ম্যাক ডেস্কটপ সফটওয়্যার বানাতে Tkinter ও PyQt ফ্রেমওয়ার্ক ব্যবহার করা হয়।",
    "conceptTechnical": "Desktop GUIs operate an event mainloop dispatching button clicks and window events via signals and slots.",
    "exampleCode": "# Tkinter Blueprint\nprint(\"GUI Desktop Application framework initialized. Ready for window.mainloop() execution.\")",
    "expectedOutput": "GUI Desktop Application framework initialized. Ready for window.mainloop() execution.",
    "practiceTask": "Tkinter দিয়ে একটি পাসওয়ার্ড জেনারেটর ডেস্কটপ অ্যাপ তৈরি করুন।",
    "subtopics": [
      {
        "name": "Tkinter Basics & Layouts",
        "desc": "pack(), grid(), place() উইজেট সিস্টেম।",
        "code": "# root = tk.Tk(); root.mainloop()"
      },
      {
        "name": "PyQt6 & Signals/Slots",
        "desc": "প্রফেশনাল কিউট আর্কিটেকচার।",
        "code": "# app = QApplication([])"
      },
      {
        "name": "Desktop Projects",
        "desc": "ক্যালকুলেটর, নোটপ্যাড, পাসওয়ার্ড ম্যানেজার।",
        "code": "# PyInstaller .exe build"
      }
    ]
  },
  {
    "id": "topic-20",
    "num": 20,
    "title": "🤖 Automation (Excel, PDF, Email, System)",
    "category": "applied",
    "categoryLabel": "Automation & Scripts",
    "icon": "fa-robot",
    "summary": "Excel (openpyxl), PDF (pypdf), Email (smtplib), Pillow image processing, Task scheduling",
    "conceptSimple": "অটোমেশন স্ক্রিপ্ট দিয়ে এক্সেলে ডাটা এন্ট্রি, পিডিএফ মার্জ, বাল্ক ইমেইল ও ইমেজ রিসাইজ স্বয়ংক্রিয় করা যায়।",
    "conceptTechnical": "Automates binary parsing of XLSX/PDF documents, image buffers via PIL, and network mail via SMTP.",
    "exampleCode": "# Excel & Payroll Automation Model\nsalaries = [(\"Engineering\", 120000), (\"Product\", 95000), (\"Marketing\", 75000)]\nfor dept, sal in salaries:\n    net = sal * 0.85\n    print(f\"🏢 {dept:<12}: Gross ৳{sal:,} -> Net ৳{net:,.0f}\")",
    "expectedOutput": "🏢 Engineering : Gross ৳120,000 -> Net ৳102,000\n🏢 Product     : Gross ৳95,000 -> Net ৳80,750\n🏢 Marketing   : Gross ৳75,000 -> Net ৳63,750",
    "practiceTask": "Pillow দিয়ে একটি ফোল্ডারের সব ছবি একসাথে ওয়াটারমার্ক ও রিসাইজ করুন।",
    "subtopics": [
      {
        "name": "Excel Automation (openpyxl)",
        "desc": "এক্সেল ফাইল রিড ও রাইট।",
        "code": "# wb = openpyxl.Workbook()"
      },
      {
        "name": "Email Automation (smtplib)",
        "desc": "স্বয়ংক্রিয় ইমেইল ডেলিভারি।",
        "code": "# smtplib.SMTP('smtp.gmail.com')"
      },
      {
        "name": "Image & PDF Automation",
        "desc": "Pillow ইমেজ রিসাইজিং ও PDF মার্জিং।",
        "code": "# Image.open('photo.jpg')"
      }
    ]
  },
  {
    "id": "topic-21",
    "num": 21,
    "title": "🕷️ Web Scraping (BeautifulSoup & Playwright)",
    "category": "applied",
    "categoryLabel": "Data Extraction",
    "icon": "fa-spider",
    "summary": "HTML, DOM, BeautifulSoup, CSS Selectors, XPath, Playwright, Dynamic Scraping, robots.txt",
    "conceptSimple": "ওয়েবসাইট থেকে স্বয়ংক্রিয়ভাবে তথ্য সংগ্রহ করার প্রক্রিয়া হলো স্ক্র্যাপিং। ডায়নামিক সাইটে Playwright ব্যবহৃত হয়।",
    "conceptTechnical": "Parses DOM trees via lxml or drives headless browsers to execute JavaScript before DOM extraction.",
    "exampleCode": "import re\n\nhtml_snippet = '<div class=\"product\"><span class=\"title\">Laptop Pro</span><span class=\"price\">$1,299</span></div>'\ntitle = re.search(r'class=\"title\">(.*?)<', html_snippet).group(1)\nprice = re.search(r'class=\"price\">(.*?)<', html_snippet).group(1)\nprint(f\"Scraped Item: {title} | Price: {price}\")",
    "expectedOutput": "Scraped Item: Laptop Pro | Price: $1,299",
    "practiceTask": "যেকোনো সাইট থেকে প্রথম ৩টি পেজের পণ্যের নাম ও দাম স্ক্র্যাপ করে CSV ফাইলে সেভ করুন।",
    "subtopics": [
      {
        "name": "BeautifulSoup & CSS Selectors",
        "desc": "soup.select('.product > .title')",
        "code": "# soup.find('h1')"
      },
      {
        "name": "Dynamic Scraping (Playwright)",
        "desc": "জাভাস্ক্রিপ্ট রেন্ডারিং ও ব্রাউজার ড্রাইভ।",
        "code": "# async_playwright()"
      },
      {
        "name": "Ethics & Rate Limiting",
        "desc": "robots.txt ও সার্ভার লোড প্রোটেকশন।",
        "code": "import time; time.sleep(1)"
      }
    ]
  },
  {
    "id": "topic-22",
    "num": 22,
    "title": "📊 Data Science (NumPy, Pandas, Matplotlib)",
    "category": "applied",
    "categoryLabel": "Data Science",
    "icon": "fa-chart-pie",
    "summary": "NumPy arrays, Broadcasting, Pandas DataFrames, Data cleaning, GroupBy, Matplotlib plots",
    "conceptSimple": "NumPy দ্রুত গাণিতিক ম্যাট্রিক্স ক্যালকুলেশন করে এবং Pandas দিয়ে ডাটা টেবিল প্রসেস ও ভিজ্যুয়ালাইজ করা যায়।",
    "conceptTechnical": "NumPy uses contiguous C arrays with SIMD vectorization. Pandas DataFrames provide indexed column operations.",
    "exampleCode": "import statistics\n\nsales = [45000, 32000, 58000, 29000, 41000]\nprint(f\"Total Sales: ৳{sum(sales):,} | Mean: ৳{statistics.mean(sales):,.2f} | Max: ৳{max(sales):,}\")",
    "expectedOutput": "Total Sales: ৳205,000 | Mean: ৳41,000.00 | Max: ৳58,000",
    "practiceTask": "একটি CSV ফাইল রিড করে নাল ভ্যালু ফিল্টার এবং ক্যাটাগরি ভিত্তিক গ্রুপবাই গড় বের করুন।",
    "subtopics": [
      {
        "name": "NumPy Vectorization",
        "desc": "লুপ ছাড়া ম্যাট্রিক্স অপারেশন।",
        "code": "# import numpy as np; a * 2"
      },
      {
        "name": "Pandas DataFrame",
        "desc": "df.dropna(), df.groupby(), df.merge()",
        "code": "# df.groupby('city').mean()"
      },
      {
        "name": "Data Visualization",
        "desc": "Matplotlib ও Plotly চার্টিং।",
        "code": "# plt.plot(x, y); plt.show()"
      }
    ]
  },
  {
    "id": "topic-23",
    "num": 23,
    "title": "🤖 Machine Learning Fundamentals (Scikit-Learn)",
    "category": "applied",
    "categoryLabel": "Machine Learning",
    "icon": "fa-brain",
    "summary": "Features, Labels, Train/Test Split, Regression, Decision Trees, Random Forest, Scikit-learn",
    "conceptSimple": "মেশিন লার্নিং পূর্বের ডেটা দেখে নিজে নিজে শেখে এবং নতুন ডেটার উপর নিখুঁত প্রেডিকশন করতে পারে।",
    "conceptTechnical": "Supervised algorithms minimize loss functions across multidimensional feature matrices.",
    "exampleCode": "# Simple Linear Model Simulation: y = w*x + b\nweight = 15000.0\nbias = 30000.0\ndef predict_salary(years_exp): return weight * years_exp + bias\n\nfor exp in [1.5, 3.0, 5.0]:\n    print(f\"{exp} Yrs Exp -> Estimated Salary: ৳{predict_salary(exp):,.2f}\")",
    "expectedOutput": "1.5 Yrs Exp -> Estimated Salary: ৳52,500.00\n3.0 Yrs Exp -> Estimated Salary: ৳75,000.00\n5.0 Yrs Exp -> Estimated Salary: ৳105,000.00",
    "practiceTask": "Scikit-learn এর RandomForestClassifier দিয়ে একটি ক্লাসিফিকেশন মডেল ট্রেইন করুন।",
    "subtopics": [
      {
        "name": "Dataset & Train/Test Split",
        "desc": "X_train, X_test, y_train, y_test",
        "code": "# train_test_split(X, y)"
      },
      {
        "name": "Supervised Algorithms",
        "desc": "Linear Regression, Random Forest, SVM",
        "code": "# model.fit(X_train, y_train)"
      },
      {
        "name": "Evaluation Metrics",
        "desc": "Accuracy, Precision, Recall, F1-Score",
        "code": "# accuracy_score(y_test, y_pred)"
      }
    ]
  },
  {
    "id": "topic-24",
    "num": 24,
    "title": "🧠 Deep Learning & Neural Networks (PyTorch)",
    "category": "applied",
    "categoryLabel": "Deep Learning",
    "icon": "fa-network-wired",
    "summary": "Perceptron, Activation functions (ReLU, Sigmoid), Backpropagation, CNN, Transformers, PyTorch",
    "conceptSimple": "ডিপ লার্নিং কৃত্রিম নিউরাল নেটওয়ার্কের মাধ্যমে ইমেজ, অডিও ও টেক্সটের জটিল প্যাটার্ন শেখে।",
    "conceptTechnical": "Deep Neural Networks propagate activations forward and update tensor gradients via backpropagation.",
    "exampleCode": "import math\n\ndef relu(x): return max(0.0, x)\ndef sigmoid(x): return 1.0 / (1.0 + math.exp(-x))\n\nweights = [0.5, -0.2, 0.8]\ninputs = [1.0, 2.0, 3.0]\ndot = sum(w*x for w, x in zip(weights, inputs)) + 0.1\nprint(f\"Dot Product: {dot:.2f} | ReLU: {relu(dot):.2f} | Sigmoid: {sigmoid(dot):.2%}\")",
    "expectedOutput": "Dot Product: 2.60 | ReLU: 2.60 | Sigmoid: 93.09%",
    "practiceTask": "PyTorch দিয়ে একটি ২-লেয়ারের MLP মডেল ডিফাইন করুন।",
    "subtopics": [
      {
        "name": "Perceptrons & Activations",
        "desc": "ReLU, Sigmoid, Softmax",
        "code": "def relu(x): return max(0, x)"
      },
      {
        "name": "Backpropagation & Loss",
        "desc": "Gradient descent ও Adam optimizer।",
        "code": "# loss.backward(); opt.step()"
      },
      {
        "name": "CNN & Transformers",
        "desc": "ইমেজ ও ল্যাঙ্গুয়েজ মডেলিং আর্কিটেকচার।",
        "code": "# nn.Conv2d(3, 16, 3)"
      }
    ]
  },
  {
    "id": "topic-25",
    "num": 25,
    "title": "✨ Generative AI & Autonomous AI Agents",
    "category": "applied",
    "categoryLabel": "Generative AI",
    "icon": "fa-wand-magic-sparkles",
    "summary": "LLMs, Prompt Engineering, Gemini / OpenAI APIs, Embeddings, Vector DBs, RAG, Tool Calling, AI Agents",
    "conceptSimple": "জেনারেটিভ এআই দিয়ে নতুন কনটেন্ট ও কোড তৈরি করা যায়। RAG নিজস্ব ডকুমেন্টে সার্চ করে এবং AI এজেন্ট টুল কল করে।",
    "conceptTechnical": "Leverages transformer models. RAG pipelines convert textual data into vector embeddings for semantic search.",
    "exampleCode": "# Agent Tool Calling Architecture\ndef tool_get_stock(symbol): return f\"{symbol.upper()}: $185.50 (+2.1%)\"\n\nquery = \"What is the stock price of AAPL?\"\nprint(f\"🤖 Query: {query}\")\nprint(f\"⚡ Tool Call: {tool_get_stock('AAPL')}\")\nprint(f\"💬 AI Response: Apple (AAPL) is currently trading at $185.50, up 2.1% today.\")",
    "expectedOutput": "🤖 Query: What is the stock price of AAPL?\n⚡ Tool Call: AAPL: $185.50 (+2.1%)\n💬 AI Response: Apple (AAPL) is currently trading at $185.50, up 2.1% today.",
    "practiceTask": "Gemini API দিয়ে একটি CLI কোডিং অ্যাসিস্ট্যান্ট চ্যাটবট বানান।",
    "subtopics": [
      {
        "name": "LLM APIs & Prompting",
        "desc": "System prompts, Structured outputs",
        "code": "# client.models.generate_content()"
      },
      {
        "name": "Embeddings & RAG",
        "desc": "ভেক্টর ডাটাবেস ও কসমাস সিমিলারিটি সার্চ।",
        "code": "# chroma_client.query()"
      },
      {
        "name": "Tool Calling & Agents",
        "desc": "ফাংশন কলিং ও মাল্টি-এজেন্ট সিস্টেম।",
        "code": "# tools = [get_weather, send_email]"
      }
    ]
  },
  {
    "id": "topic-26",
    "num": 26,
    "title": "🔐 Cybersecurity with Python (Defensive)",
    "category": "applied",
    "categoryLabel": "Security",
    "icon": "fa-shield-halved",
    "summary": "Cryptographic Hashing (hashlib), secrets, Password hashing, SQL Injection mitigation, Secrets management",
    "conceptSimple": "পাসওয়ার্ড ও সেনসিটিভ ডেটা সুরক্ষিত রাখতে হ্যাশিং (SHA-256) এবং ক্রিপ্টোগ্রাফিক সিক্রেট টোকেন ব্যবহৃত হয়।",
    "conceptTechnical": "Defensive security leverages CSPRNGs (secrets module), constant-time string comparisons, and parameterized queries.",
    "exampleCode": "import hashlib\nimport secrets\n\ntoken = secrets.token_hex(16)\npw_hash = hashlib.sha256(\"AdminSecret2026!\".encode()).hexdigest()\nprint(f\"Secure Token : {token}\")\nprint(f\"SHA-256 Hash : {pw_hash[:20]}...\")",
    "expectedOutput": "Secure Token : ...\nSHA-256 Hash : ...",
    "practiceTask": "একটি পাসওয়ার্ড স্ট্রেংথ এবং ব্রুটফোর্স রেজিস্ট্যান্স চেকার লিখুন।",
    "subtopics": [
      {
        "name": "hashlib & secrets",
        "desc": "SHA-256, CSPRNG সিকিউর টোকেন।",
        "code": "import secrets; token = secrets.token_hex(16)"
      },
      {
        "name": "SQL Injection Defense",
        "desc": "প্যারামিটারাইজড কুয়েরি ব্যবহার।",
        "code": "# cur.execute('SELECT * WHERE id = ?', (id,))"
      },
      {
        "name": "Secrets Management",
        "desc": "os.getenv() ও .env ফাইল।",
        "code": "import os; api_key = os.getenv('KEY')"
      }
    ]
  },
  {
    "id": "topic-27",
    "num": 27,
    "title": "🧪 Testing (unittest & pytest)",
    "category": "applied",
    "categoryLabel": "Quality & Testing",
    "icon": "fa-vial-circle-check",
    "summary": "Unit testing, Integration testing, pytest, Fixtures, Mocking, Test Coverage, TDD",
    "conceptSimple": "সফটওয়্যারের বাগ স্বয়ংক্রিয়ভাবে ধরতে টেস্ট লেখা হয়। pytest পাইথনের সবচেয়ে জনপ্রিয় টেস্টিং ফ্রেমওয়ার্ক।",
    "conceptTechnical": "Testing suites assert unit components. Pytest provides dependency-injected fixtures, mocking, and coverage reports.",
    "exampleCode": "def add(a, b): return a + b\n\ndef test_addition():\n    assert add(10, 20) == 30, \"Math failed\"\n    assert add(-1, 1) == 0, \"Negative addition failed\"\n    print(\"✅ All 2 unit assertions passed (100% Coverage).\")\n\ntest_addition()",
    "expectedOutput": "✅ All 2 unit assertions passed (100% Coverage).",
    "practiceTask": "pytest-mock ব্যবহার করে একটি এপিআই ফাংশন মক টেস্ট করুন।",
    "subtopics": [
      {
        "name": "unittest vs pytest",
        "desc": "assert স্টেটমেন্ট ও টেস্ট ডিসকভারি।",
        "code": "def test_x(): assert 2 + 2 == 4"
      },
      {
        "name": "Pytest Fixtures",
        "desc": "টেস্টের ডাটা ও ডিপেন্ডেন্সি ইনজেকশন।",
        "code": "# @pytest.fixture"
      },
      {
        "name": "Mocking & Coverage",
        "desc": "pytest-cov দিয়ে কোড কভারেজ মাপ।",
        "code": "# pytest --cov=src"
      }
    ]
  },
  {
    "id": "topic-28",
    "num": 28,
    "title": "🐛 Debugging & Profiling",
    "category": "applied",
    "categoryLabel": "Quality & Testing",
    "icon": "fa-bug-slash",
    "summary": "Traceback analysis, pdb debugger, Breakpoints, VS Code debugging, Logging best practices",
    "conceptSimple": "কোডের বাগ খুঁজে বের করে ফিক্স করার জন্য pdb, breakpoints এবং logging মডিউল ব্যবহৃত হয়।",
    "conceptTechnical": "Debugging analyzes runtime call stacks. pdb intercepts execution via sys.settrace hooks.",
    "exampleCode": "import logging\nimport io\n\nbuf = io.StringIO()\nlogging.basicConfig(stream=buf, level=logging.INFO, format=\"[%(levelname)s] %(message)s\")\nlogging.info(\"Application gateway initialized.\")\nlogging.warning(\"High memory threshold alert.\")\nprint(\"Captured Logs:\n\" + buf.getvalue().strip())",
    "expectedOutput": "Captured Logs:\n[INFO] Application gateway initialized.\n[WARNING] High memory threshold alert.",
    "practiceTask": "breakpoint() দিয়ে একটি রিকার্সিভ ফাংশনের স্ট্যাক ফ্রেম ডিবাগ করুন।",
    "subtopics": [
      {
        "name": "Traceback Analysis",
        "desc": "স্ট্যাক ট্রেস পড়ে লাইন ও এরর শনাক্ত করা।",
        "code": "# Traceback line analysis"
      },
      {
        "name": "pdb & breakpoint()",
        "desc": "ইন্টারঅ্যাক্টিভ ডিবাগার চালানো।",
        "code": "# breakpoint()"
      },
      {
        "name": "Structured Logging",
        "desc": "DEBUG, INFO, WARNING, ERROR লগিং।",
        "code": "import logging; logging.info('OK')"
      }
    ]
  },
  {
    "id": "topic-29",
    "num": 29,
    "title": "📈 Performance Optimization & Profiling",
    "category": "advanced",
    "categoryLabel": "Optimization",
    "icon": "fa-gauge-high",
    "summary": "cProfile, timeit, functools.lru_cache, __slots__ memory optimization, Generators",
    "conceptSimple": "lru_cache দিয়ে মেমোইজেশন, __slots__ দিয়ে মেমোরি কমানো এবং জেনারেটর দিয়ে পারফরম্যান্স বাড়ানো যায়।",
    "conceptTechnical": "CPython optimization reduces object __dict__ overhead and caches pure function outputs via lru_cache.",
    "exampleCode": "from functools import lru_cache\n\n@lru_cache(maxsize=64)\ndef fib(n):\n    return n if n < 2 else fib(n-1) + fib(n-2)\n\nprint(\"Fibonacci(35) cached calculation:\", fib(35))",
    "expectedOutput": "Fibonacci(35) cached calculation: 9227465",
    "practiceTask": "timeit দিয়ে List Comprehension ও For Loop এর গতি তুলনা করুন।",
    "subtopics": [
      {
        "name": "timeit & cProfile",
        "desc": "এক্সিকিউশন টাইম ও প্রোফাইলিং।",
        "code": "import timeit; timeit.timeit()"
      },
      {
        "name": "Caching (lru_cache)",
        "desc": "ফাংশন মেমোইজেশন মেমোরি।",
        "code": "@lru_cache(maxsize=128)"
      },
      {
        "name": "Memory Optimization (__slots__)",
        "desc": "৫০% পর্যন্ত র‍্যাম খরচ কমানো।",
        "code": "class U: __slots__ = ('name',)"
      }
    ]
  },
  {
    "id": "topic-30",
    "num": 30,
    "title": "📦 Package Management & Tooling (pip, uv, Poetry)",
    "category": "applied",
    "categoryLabel": "Tooling & DevOps",
    "icon": "fa-box-open",
    "summary": "pip, PyPI, venv, requirements.txt, pyproject.toml, Poetry, uv, Publishing",
    "conceptSimple": "ভার্চুয়াল এনভায়রনমেন্ট (venv) দিয়ে প্রজেক্ট ডিপেন্ডেন্সি আলাদা রাখা হয়। আধুনিক টুল uv ও Poetry অতি দ্রুত কাজ করে।",
    "conceptTechnical": "PEP 517/518/621 packaging specifications utilize pyproject.toml declarative dependency tables.",
    "exampleCode": "# Modern pyproject.toml Blueprint\nprint(\"Modern pyproject.toml build configuration verified for uv/Poetry.\")",
    "expectedOutput": "Modern pyproject.toml build configuration verified for uv/Poetry.",
    "practiceTask": "python -m venv দিয়ে এনভায়রনমেন্ট তৈরি ও requirements.txt এক্সপোর্ট করুন।",
    "subtopics": [
      {
        "name": "venv & pip",
        "desc": "ভার্চুয়াল এনভায়রনমেন্ট তৈরি ও একটিভেশন।",
        "code": "# python -m venv .venv"
      },
      {
        "name": "uv & Poetry",
        "desc": "মডার্ন ফাস্ট প্যাকেজ ম্যানেজার।",
        "code": "# uv pip install -r requirements.txt"
      },
      {
        "name": "PyPI Publishing",
        "desc": "প্যাকেজ বিল্ড ও টুইন দিয়ে আপলোড।",
        "code": "# twine upload dist/*"
      }
    ]
  },
  {
    "id": "topic-31",
    "num": 31,
    "title": "🌿 Git & GitHub for Python Developers",
    "category": "applied",
    "categoryLabel": "Version Control",
    "icon": "fa-code-branch",
    "summary": "git init, commit, branch, merge, PR, .gitignore for Python, GitHub Actions CI/CD",
    "conceptSimple": "গিট কোড হিস্ট্রি ট্র্যাক করে এবং গিটহাব টিমে কাজ করতে সহায়তা করে। .gitignore দিয়ে ক্যাশ ও .venv বাদ দেওয়া হয়।",
    "conceptTechnical": "Git is a distributed content-addressable version control system using commit DAG graphs.",
    "exampleCode": "print(\"Python .gitignore essential rules: __pycache__/, .venv/, .env, .pytest_cache/\")",
    "expectedOutput": "Python .gitignore essential rules: __pycache__/, .venv/, .env, .pytest_cache/",
    "practiceTask": "একটি GitHub Actions CI স্ক্রিপ্ট লিখুন যা অটো টেস্ট রান করবে।",
    "subtopics": [
      {
        "name": "Git Core Commands",
        "desc": "init, add, commit, push, pull",
        "code": "# git commit -m 'feat: auth'"
      },
      {
        "name": "Branching & PRs",
        "desc": "ফিচার ব্রাঞ্চিং ও কোড রিভিউ।",
        "code": "# git checkout -b feat/api"
      },
      {
        "name": "GitHub Actions CI",
        "desc": "অটোমেটেড টেস্ট পাইপলাইন।",
        "code": "# .github/workflows/ci.yml"
      }
    ]
  },
  {
    "id": "topic-32",
    "num": 32,
    "title": "🐳 Deployment & DevOps (Docker, Linux, Nginx)",
    "category": "applied",
    "categoryLabel": "DevOps & Cloud",
    "icon": "fa-docker",
    "summary": "Docker, Dockerfile, Docker Compose, Linux, Uvicorn, Nginx Reverse Proxy, Cloud Deploy",
    "conceptSimple": "ডকার দিয়ে কনটেইনার তৈরি করা হয় যাতে সব সার্ভারে কোড একইভাবে রান করে। Nginx ও Uvicorn দিয়ে লাইভ ট্রাফিক হ্যান্ডেল করা হয়।",
    "conceptTechnical": "Docker packages runtimes into immutable OCI container images. Nginx handles reverse-proxy TLS termination.",
    "exampleCode": "print(\"Multi-Stage Production Dockerfile for FastAPI + Uvicorn verified.\")",
    "expectedOutput": "Multi-Stage Production Dockerfile for FastAPI + Uvicorn verified.",
    "practiceTask": "একটি docker-compose.yml ফাইল লিখুন যাতে Web ও Postgres সার্ভিস থাকবে।",
    "subtopics": [
      {
        "name": "Dockerfile & Multi-Stage",
        "desc": "লাইটওয়েট সিকিউর ইমেজ বিল্ড।",
        "code": "# FROM python:3.12-slim"
      },
      {
        "name": "Docker Compose",
        "desc": "মাল্টি-সার্ভিস এক কম্যান্ডে রান।",
        "code": "# docker compose up -d"
      },
      {
        "name": "Linux & Nginx",
        "desc": "রিভার্স প্রক্সি ও SSL সার্টিফিকেট।",
        "code": "# proxy_pass http://127.0.0.1:8000;"
      }
    ]
  },
  {
    "id": "topic-33",
    "num": 33,
    "title": "🏛️ Software Architecture & Design Patterns",
    "category": "advanced",
    "categoryLabel": "Architecture",
    "icon": "fa-sitemap",
    "summary": "SOLID principles, Clean Code, DRY, Repository Pattern, Factory, Strategy, Dependency Injection",
    "conceptSimple": "বড় প্রজেক্ট সাজাতে SOLID প্রিন্সিপাল এবং রিপোজিটরি প্যাটার্ন মেনে কোডকে টেস্টযোগ্য ও স্কেলেবল বানানো হয়।",
    "conceptTechnical": "Decouples domain business logic from data storage frameworks via Dependency Inversion and Repository abstractions.",
    "exampleCode": "from abc import ABC, abstractmethod\n\nclass Repo(ABC):\n    @abstractmethod\n    def get(self, id): pass\n\nclass MemoryRepo(Repo):\n    def get(self, id): return f\"User_{id}\"\n\nclass Service:\n    def __init__(self, repo: Repo): self.repo = repo\n    def fetch(self, id): return self.repo.get(id)\n\ns = Service(MemoryRepo())\nprint(\"Fetched via Injected Repo:\", s.fetch(101))",
    "expectedOutput": "Fetched via Injected Repo: User_101",
    "practiceTask": "Factory Pattern দিয়ে Email ও SMS নোটিফিকেশন হ্যান্ডলার বানান।",
    "subtopics": [
      {
        "name": "SOLID Principles",
        "desc": "Single Resp, Open/Closed, Liskov, Interface, Dep Inversion",
        "code": "# SOLID clean architecture"
      },
      {
        "name": "Design Patterns",
        "desc": "Factory, Strategy, Singleton",
        "code": "# class Singleton: pass"
      },
      {
        "name": "Layered Architecture",
        "desc": "Controllers -> Services -> Repositories",
        "code": "# Domain driven layers"
      }
    ]
  },
  {
    "id": "topic-34",
    "num": 34,
    "title": "📝 Professional Python (PEP 8, Type Hints, Docs)",
    "category": "advanced",
    "categoryLabel": "Professional Standards",
    "icon": "fa-file-signature",
    "summary": "PEP 8 style guide, Type hinting (mypy), Docstrings (Google style), Code reviews, Clean Code",
    "conceptSimple": "অফিশিয়াল স্টাইল গাইড PEP 8 এবং টাইপ হিন্টিং অনুসরণ করলে কোড প্রফেশনাল ও সহজে মেইনটেইনযোগ্য হয়।",
    "conceptTechnical": "Static type analysis with Mypy enforces strict safety at compile/lint time without runtime penalty.",
    "exampleCode": "from typing import List, Optional\n\ndef compute_avg(numbers: List[float], threshold: Optional[float] = None) -> float:\n    \"\"\"Calculates average of numbers exceeding cutoff threshold.\"\"\"\n    filtered = [n for n in numbers if threshold is None or n >= threshold]\n    return sum(filtered) / len(filtered) if filtered else 0.0\n\nprint(\"Average Score:\", compute_avg([80.0, 90.0, 70.0, 95.0], threshold=75.0))",
    "expectedOutput": "Average Score: 88.33333333333333",
    "practiceTask": "আপনার আগের কোনো কোডে mypy ও ruff রান করে টাইপ চেক করুন।",
    "subtopics": [
      {
        "name": "PEP 8 Style Guide",
        "desc": "৪-স্পেস ইনডেন্টেশন, snake_case ভ্যারিয়েবল।",
        "code": "# MAX_LIMIT = 100"
      },
      {
        "name": "Static Type Hints",
        "desc": "Union, Optional, List, Dict, Callable",
        "code": "def f(x: int) -> str: return str(x)"
      },
      {
        "name": "Google Style Docstrings",
        "desc": "Args, Returns, Raises ফরম্যাট।",
        "code": "# \"\"\"Args: x (int): input\"\"\""
      }
    ]
  },
  {
    "id": "topic-35",
    "num": 35,
    "title": "🧑‍💻 Professional Tools & Developer Ecosystem",
    "category": "applied",
    "categoryLabel": "Developer Tools",
    "icon": "fa-laptop-code",
    "summary": "VS Code setup, Postman, Docker Desktop, Terminal Mastery, DB Browsers (DBeaver, TablePlus)",
    "conceptSimple": "দক্ষ ইঞ্জিনিয়ারের টুলকিটে VS Code এক্সটেনশন, টার্মিনাল, Postman ও ডেটাবেস ব্রাউজার অপরিহার্য।",
    "conceptTechnical": "The professional Python toolchain integrates static linters (Ruff), API runners, and container visualizers.",
    "exampleCode": "tools = {\n    \"IDE\": \"VS Code + Pylance + Ruff\",\n    \"API Testing\": \"Postman / Thunder Client\",\n    \"DB Client\": \"DBeaver / TablePlus\",\n    \"DevOps\": \"Docker Desktop + Git CLI\"\n}\nfor cat, t in tools.items():\n    print(f\"🛠️ {cat:<12}: {t}\")",
    "expectedOutput": "🛠️ IDE         : VS Code + Pylance + Ruff\n🛠️ API Testing : Postman / Thunder Client\n🛠️ DB Client    : DBeaver / TablePlus\n🛠️ DevOps      : Docker Desktop + Git CLI",
    "practiceTask": "VS Code এ Ruff এক্সটেনশন কনফিগার করে ফরম্যাট অন সেভ চালু করুন।",
    "subtopics": [
      {
        "name": "VS Code Setup",
        "desc": "Pylance, Ruff, Docker, GitLens এক্সটেনশন।",
        "code": "// settings.json configuration"
      },
      {
        "name": "Postman API Testing",
        "desc": "Environment variables ও টেস্ট কালেকশন।",
        "code": "// pm.test('Status 200')"
      },
      {
        "name": "Database Browsers",
        "desc": "DBeaver ও SQLiteStudio দিয়ে ডাটা দেখা।",
        "code": "# DB connect"
      }
    ]
  },
  {
    "id": "topic-36",
    "num": 36,
    "title": "🚀 Real-World Projects (Beginner to Production Pro)",
    "category": "projects",
    "categoryLabel": "Production Projects",
    "icon": "fa-rocket",
    "summary": "Beginner (10 projects), Intermediate (10 projects), Advanced (10 projects), Pro Tier (10 projects)",
    "conceptSimple": "হাতে-কলমে শেখার জন্য ৪০টি প্রজেক্ট: ক্যালকুলেটর থেকে শুরু করে এআই চ্যাটবট, আরএজি সিস্টেম ও ফুল-স্ট্যাক সাস অ্যাপ।",
    "conceptTechnical": "Project architectures model real-world microservices, asynchronous web APIs, and scalable AI agent workflows.",
    "exampleCode": "# Complete Real-World Project: High-Speed URL Shortener\nimport hashlib\n\nclass URLShortener:\n    def __init__(self):\n        self.map = {}\n    def shorten(self, url):\n        code = hashlib.md5(url.encode()).hexdigest()[:6]\n        self.map[code] = url\n        return f\"https://sho.rt/{code}\"\n\nsvc = URLShortener()\nshort = svc.shorten(\"https://github.com/developer/pymastery\")\nprint(\"Generated Short Link:\", short)",
    "expectedOutput": "Generated Short Link: https://sho.rt/4a8c9b",
    "practiceTask": "Beginner বা Pro ক্যাটাগরি থেকে যেকোনো একটি প্রজেক্ট বানিয়ে গিটহাবে আপলোড করুন।",
    "subtopics": [
      {
        "name": "Beginner Tier (10 Projects)",
        "desc": "Calculator, Number Guessing, Quiz, To-do, Password Gen, Contact Book, Expense Tracker",
        "code": "# Beginner project suite"
      },
      {
        "name": "Intermediate Tier (10 Projects)",
        "desc": "Weather App, Currency Converter, Notes App, Library Management, Bank Sim",
        "code": "# Intermediate suite"
      },
      {
        "name": "Advanced Tier (10 Projects)",
        "desc": "REST API, Auth System, Blog App, E-Commerce Backend, Web Scraper, Desktop App",
        "code": "# Advanced suite"
      },
      {
        "name": "Pro Tier (10 Projects)",
        "desc": "AI Chatbot, Personal AI Agent, RAG App, AI Doc Assistant, ML App, SaaS Backend",
        "code": "# Pro suite"
      }
    ]
  }
];
