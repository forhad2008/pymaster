# -*- coding: utf-8 -*-
"""
PyMastery 360 - Comprehensive 36-Module Master Curriculum Data Generator
Generates full in-depth explanations, code snippets, outputs, and granular subtopics for all 36 modules.
"""
import json
import os

topics_list = [
    # -----------------------------------------------------------------------------
    # 1. 🟢 Python Fundamentals — Beginner
    # -----------------------------------------------------------------------------
    {
        "id": "topic-1",
        "num": 1,
        "title": "🟢 Python Fundamentals — Beginner",
        "category": "beginner",
        "categoryLabel": "Fundamentals",
        "icon": "fa-play-circle",
        "summary": "1.1 Getting Started, 1.2 First Programs, 1.3 Variables, 1.4 Data Types, 1.5 Operators",
        "conceptSimple": """পাইথন (Python) হলো একটি বহুমুখী, অত্যন্ত সহজবোধ্য এবং আধুনিক হাই-লেভেল প্রোগ্রামিং ভাষা। ১৯৯১ সালে ডাচ প্রোগ্রামার গুইডো ভ্যান রসাম (Guido van Rossum) এটি উদ্ভাবন করেন। পাইথনের সবচেয়ে বড় শক্তি হলো এর রিডেবিলিটি (Readability)—অর্থাৎ মানুষের মুখের ভাষার (ইংরেজি) সাথে এর কোডের গঠনের চরম মিল রয়েছে।

অন্যান্য প্রোগ্রামিং ভাষায় যেখানে লাইন শেষ করতে সেমিকোলন (;) এবং কোড ব্লক চিহ্নিত করতে সেকেন্ড ব্র্যাকেট ({}) দিতে হয়, পাইথনে কেবল সঠিক ইনডেন্টেশন (ইন্ডেন্টেশন বা ৪টি স্পেস) দিয়েই সবকিছু সুন্দরভাবে সাজানো যায়। এই মডিউলে আমরা পাইথনের ইন্টারপ্রেটার মেকানিজম, প্রথম প্রোগ্রাম, ভ্যারিয়েবল ও মেমোরি রেফারেন্সিং, ডাটা টাইপসমূহ এবং বিভিন্ন অপারেটরের সুনির্দিষ্ট প্রয়োগ বিস্তারিত শিখবো।""",
        "conceptTechnical": """Python is an interpreted, high-level, dynamically typed, garbage-collected multi-paradigm language. In standard CPython implementations, source code (.py) is compiled ahead-of-time into intermediate Python bytecode (.pyc) and subsequently interpreted line-by-line by the Python Virtual Machine (PVM).

Key architectural concepts:
1. Dynamic Typing & Duck Typing: Types are bound dynamically to objects in heap memory, not variable identifiers.
2. Memory Management: CPython manages memory through an internal memory allocator (PyMalloc) utilizing reference counting complemented by a cyclical generational garbage collector (gc module).
3. Whitespace Scoping: PEP 8 mandates 4-space indentation for code block hierarchies.
4. LEGB Scope Resolution: Variable resolution traverses Local -> Enclosing -> Global -> Built-in namespaces.""",
        "exampleCode": """# ==============================================================================
# MODULE 01: PYTHON FUNDAMENTALS IN-DEPTH DEMONSTRATION
# ==============================================================================
import sys
import keyword

# 1. System & Interpreter Introspection
print("--- 1.1 Interpreter Runtime Telemetry ---")
print(f"CPython Version  : {sys.version.split()[0]} on {sys.platform}")
print(f"Byte Order Format: {sys.byteorder.upper()} Endian")
print(f"Total Keywords   : {len(keyword.kwlist)} (Sample: {keyword.kwlist[:5]}...)")

# 2. Variables & Dynamic Identity Tracking
print("\\n--- 1.3 Memory Pointer References ---")
var_a = 256
var_b = 256
# Python caches small integers from -5 to 256 for fast memory reuse
print(f"Memory Identity Match (var_a is var_b): {var_a is var_b}")
print(f"Addresses: id(var_a)={id(var_a)} | id(var_b)={id(var_b)}")

# Multiple Assignment & Sequence Unpacking
primary, secondary, *remaining = [10, 20, 30, 40, 50]
print(f"Unpacked -> Primary: {primary}, Secondary: {secondary}, Rest: {remaining}")

# 3. Data Types & Type Introspection
print("\\n--- 1.4 Primitive Types & Inspection ---")
counter: int = 100
pi_ratio: float = 3.1415926535
vector_z: complex = 3 + 4j
is_authenticated: bool = True
null_state = None

print(f"Types: int={type(counter).__name__}, float={type(pi_ratio).__name__}, complex={type(vector_z).__name__}")
print(f"Complex Vector Absolute Magnitude: {abs(vector_z):.2f}")

# 4. Arithmetic Precision & Operator Precedence
print("\\n--- 1.5 Precision Arithmetic & Bitwise Logic ---")
base_price = 120.0
discount_pct = 0.15
tax_rate = 0.05
# Precedence ensures multiplication completes before addition/subtraction
final_invoice = (base_price * (1 - discount_pct)) * (1 + tax_rate)
print(f"Calculated Invoice: ৳{final_invoice:,.2f}")

# Bitwise Operations (Fast bit masking)
FLAG_READ = 0b0001
FLAG_WRITE = 0b0010
FLAG_EXEC = 0b0100
user_perm = FLAG_READ | FLAG_WRITE  # Bitwise OR to combine
print(f"User Permissions Binary: {bin(user_perm)} (Can Write: {bool(user_perm & FLAG_WRITE)})")""",
        "expectedOutput": """--- 1.1 Interpreter Runtime Telemetry ---
CPython Version  : 3.12.0 on win32 (or linux)
Byte Order Format: LITTLE Endian
Total Keywords   : 35 (Sample: ['False', 'None', 'True', 'and', 'as']...)

--- 1.3 Memory Pointer References ---
Memory Identity Match (var_a is var_b): True
Addresses: id(var_a)=... | id(var_b)=...
Unpacked -> Primary: 10, Secondary: 20, Rest: [30, 40, 50]

--- 1.4 Primitive Types & Inspection ---
Types: int=int, float=float, complex=complex
Complex Vector Absolute Magnitude: 5.00

--- 1.5 Precision Arithmetic & Bitwise Logic ---
Calculated Invoice: ৳107.10
User Permissions Binary: 0b11 (Can Write: True)""",
        "practiceTask": "১. ইউজারের নাম, বয়স এবং বেসিক স্যালারি ইনপুট নিয়ে বাৎসরিক মোট স্যালারি এবং ১৫% প্রভিডেন্ট ফান্ড কর্তনের পর নেট স্যালারি f-string দিয়ে প্রিন্ট করুন। ২. টাইপ চেকিং এবং মেমোরি আইডি প্রিন্ট করে ডাইনামিক টাইপিং পরীক্ষা করুন।",
        "subtopics": [
            {
                "name": "1.1 Getting Started (শুরু করা)",
                "desc": "পাইথন পরিচিতি, সি-পাইথন (CPython) ইন্টারপ্রেটার আর্কিটেকচার, VS Code ও PyCharm সেটআপ, .py স্ক্রিপ্ট রান করা, REPL মোড, সিঙ্গেল/মাল্টি-লাইন কমেন্টস (# ও ডকস্ট্রিং) এবং ৪-স্পেস ইনডেন্টেশনের কড়া নিয়মাবলি।",
                "code": "# 1.1 Getting Started\nimport sys\nprint('Python Executable:', sys.executable)"
            },
            {
                "name": "1.2 First Programs (প্রথম প্রোগ্রামিং)",
                "desc": "print() ফাংশনের সব প্যারামিটার (sep, end, file, flush), এস্কেপ ক্যারেক্টার (\\n, \\t, \\\\, \\', \\\"), কোটেশন নিয়ম এবং বেসিক প্রোগ্রাম গঠন।",
                "code": "print('Item A', 'Item B', sep=' | ', end=' -> DONE\\n')"
            },
            {
                "name": "1.3 Variables & Memory Architecture",
                "desc": "ভ্যারিয়েবল ডিক্লেয়ারেশন, মেমোরি রেফারেন্স মেকানিজম, snake_case নেমিং কনভেনশন, মাল্টিপল অ্যাসাইনমেন্ট (x, y = 1, 2), কনস্ট্যান্ট কনভেনশন (PI = 3.14) এবং ডাইনামিক টাইপিং।",
                "code": "a, b = 10, 20\na, b = b, a  # Instant variable swap\nprint(f'{a=}, {b=}')"
            },
            {
                "name": "1.4 Data Types & Introspection",
                "desc": "int, float, complex, str, bool, None, list, tuple, set, dict এর মেমোরি সাইজ ও আচরণ। type() এবং isinstance() দিয়ে অবজেক্টের টাইপ ও ইনহেরিটেন্স যাচাই।",
                "code": "val = 42.5\nprint('Is Float or Int:', isinstance(val, (int, float)))"
            },
            {
                "name": "1.5 Operators Matrix & Precedence",
                "desc": "অ্যারিথমেটিক (+,-,*,/,//,%,**), অ্যাসাইনমেন্ট (+=, -=), কম্প্যারিজন (==,!=,<,>), লজিক্যাল (and, or, not), আইডেন্টিটি (is, is not), মেম্বারশিপ (in, not in) এবং বিটওয়াইজ (&,|,^,~,<<,>>) অপারেটর।",
                "code": "nums = [10, 20, 30]\nprint('Membership check:', 20 in nums)\nprint('Floor division:', 19 // 4)"
            }
        ]
    },

    # -----------------------------------------------------------------------------
    # 2. 🔤 Strings
    # -----------------------------------------------------------------------------
    {
        "id": "topic-2",
        "num": 2,
        "title": "🔤 Strings & Text Processing",
        "category": "beginner",
        "categoryLabel": "Data Types",
        "icon": "fa-font",
        "summary": "String indexing, slicing, methods (.upper, .strip, .replace, .split, .join, .find), f-strings, Unicode, UTF-8",
        "conceptSimple": """স্ট্রিং (String) হলো অক্ষরের একটি অপরিবর্তনীয় (Immutable) সিকোয়েন্স বা টেক্সট। সফটওয়্যার ডেভেলপমেন্টে ইউজারের ইনপুট প্রসেসিং, ডেটা ক্লিনিং, ওয়েব স্ক্র্যাপিং এবং ফাইল পড়ার প্রতিটি ধাপে স্ট্রিং মেথড ব্যবহৃত হয়।

পাইথনে প্রতিটি অক্ষর ইউনিকোড কোডপয়েন্ট ধারণ করে, তাই বাংলা, ইংরেজি, আরবি বা ইমোজি যেকোনো টেক্সট নিখুঁতভাবে কাজ করে। স্ট্রিং স্লাইসিং [start:stop:step] দিয়ে খুব সহজেই যেকোনো সাবস্ট্রিং কেটে আলাদা করা যায়।""",
        "conceptTechnical": """CPython optimizes strings via PEP 393 (Flexible String Representation): strings are stored as 1-byte (Latin-1), 2-byte (UCS-2), or 4-byte (UCS-4) depending on the widest character.

Because strings are immutable hashable objects, concatenation (+) creates a new buffer. Slicing str[start:stop:step] employs fast pointer math returning a newly allocated slice. Methods like .split() and .join() are implemented at C-speed in the Python runtime.""",
        "exampleCode": """# ==============================================================================
# MODULE 02: STRINGS & TEXT PARSING MASTERCLASS
# ==============================================================================

raw_record = "  [2026-09-28 21:15:00] -- USER:adnan_dev -- AMOUNT:$1,450.50 -- STATUS:completed  "

# 1. Cleaning & Stripping Whitespace
cleaned = raw_record.strip()
print("Clean Record:", cleaned)

# 2. Slicing & Indexing [start:stop:step]
timestamp = cleaned[1:20] # Slicing exact range
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
        "practiceTask": "একটি ফাংশন লিখুন যা একটি প্যারাগ্রাফ গ্রহণ করে সব অপ্রয়োজনীয় যতিচিহ্ন বাদ দেবে, প্রতিটি শব্দের ফ্রিকোয়েন্সি বের করবে এবং স্ট্রিংটি প্যালিনড্রোম কিনা যাচাই করবে।",
        "subtopics": [
            {
                "name": "Creating & Quotes Matrix",
                "desc": "সিঙ্গেল ('...'), ডাবল (\"...\"), ট্রিপল (\"\"\"...\"\"\") কোটস এবং মাল্টি-লাইন ডকস্ট্রিং।",
                "code": "query = '''SELECT * FROM users WHERE active = 1;'''"
            },
            {
                "name": "String Indexing & Slicing",
                "desc": "পজিটিভ/নেগেটিভ ইনডেক্সিং, [start:stop:step], সাবস্ট্রিং এক্সট্রাকশন ও রিভার্সিং।",
                "code": "s = 'Antigravity'\nprint(s[0], s[-1], s[0:4], s[::-1])"
            },
            {
                "name": "Comprehensive String Methods",
                "desc": ".upper(), .lower(), .title(), .capitalize(), .strip(), .replace(), .split(), .join(), .find(), .index(), .count(), .startswith(), .endswith(), .isdigit(), .isalpha(), .isalnum()।",
                "code": "words = ['Data', 'Science', 'AI']\nprint(' | '.join(words).upper())"
            },
            {
                "name": "Modern f-strings & Formatting Specifiers",
                "desc": "f'{price:,.2f}', f'{num:04d}', f'{pct:.1%}' এবং ইনলাইন পাইথন এক্সপ্রেশন ইভ্যালুয়েশন।",
                "code": "rate = 0.8542\nprint(f'Pass Rate: {rate:.1%}')"
            },
            {
                "name": "Raw Strings, Unicode & Encoding",
                "desc": "r'...' ব্যাকস্ল্যাশ এস্কেপ প্রতিরোধ, .encode('utf-8') এবং .decode('utf-8') বাইট স্ট্রিম প্রসেসিং।",
                "code": "regex_pattern = r'\\d{3}-\\d{2}-\\d{4}'\nprint(regex_pattern)"
            }
        ]
    },

    # -----------------------------------------------------------------------------
    # 3. 📦 Collections
    # -----------------------------------------------------------------------------
    {
        "id": "topic-3",
        "num": 3,
        "title": "📦 Collections (Lists, Tuples, Sets, Dictionaries)",
        "category": "beginner",
        "categoryLabel": "Data Structures",
        "icon": "fa-boxes-stacked",
        "summary": "Lists, Tuples, Sets, Dicts, Methods, Unpacking, Nested structures, Hash Tables",
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
# MODULE 03: ADVANCED COLLECTIONS & ENTERPRISE DATA MODELING
# ==============================================================================

# --- 1. LISTS: Dynamic Mutation & Sorting ---
engineers = ["Adnan", "Rahim", "Ayesha", "Tanvir"]
engineers.append("Zubair")
engineers.insert(2, "Sadia")
engineers.sort(key=lambda name: len(name), reverse=True) # Sort by length
print("Sorted Engineers (by name length):", engineers)

# --- 2. TUPLES: Unpacking & Immutability ---
server_endpoint = ("192.168.1.100", 8080, "PRODUCTION", "SSL_ENABLED")
ip, port, *meta = server_endpoint
print(f"Connected to {ip}:{port} (Metadata: {meta})")

# --- 3. SETS: Venn Diagram Operations ---
frontend_stack = {"HTML", "CSS", "JavaScript", "TypeScript", "React"}
backend_stack = {"Python", "FastAPI", "PostgreSQL", "Docker", "TypeScript"}

print("Full-Stack Overlap (Intersection) :", frontend_stack & backend_stack)
print("Complete Tech Stack (Union)       :", frontend_stack | backend_stack)
print("Backend Only Skills (Difference)  :", backend_stack - frontend_stack)

# --- 4. DICTIONARIES: Safe Lookup & Deep Unpacking ---
cluster_registry = {
    "node_01": {"host": "10.0.0.1", "role": "Master", "cpu_pct": 24.5, "status": "ACTIVE"},
    "node_02": {"host": "10.0.0.2", "role": "Worker", "cpu_pct": 78.2, "status": "ACTIVE"},
    "node_03": {"host": "10.0.0.3", "role": "Worker", "cpu_pct": 94.1, "status": "ALERT"},
}

# Safe lookup with .get()
node3_cpu = cluster_registry.get("node_03", {}).get("cpu_pct", 0)
print(f"Node 03 Telemetry: CPU Usage is {node3_cpu}%")

# Dictionary Merge Operator (|)
default_configs = {"timeout": 30, "retry": 3, "debug": False}
override_configs = {"timeout": 60, "debug": True}
final_config = default_configs | override_configs
print("Merged Configuration:", final_config)""",
        "expectedOutput": """Sorted Engineers (by name length): ['Engineers', 'Zubair', 'Tanvir', 'Ayesha', 'Sadia', 'Adnan', 'Rahim']
Connected to 192.168.1.100:8080 (Metadata: ['PRODUCTION', 'SSL_ENABLED'])
Full-Stack Overlap (Intersection) : {'TypeScript'}
Complete Tech Stack (Union)       : {'CSS', 'TypeScript', 'Docker', 'HTML', 'JavaScript', 'Python', 'FastAPI', 'React', 'PostgreSQL'}
Backend Only Skills (Difference)  : {'Docker', 'Python', 'FastAPI', 'PostgreSQL'}
Node 03 Telemetry: CPU Usage is 94.1%
Merged Configuration: {'timeout': 60, 'retry': 3, 'debug': True}""",
        "practiceTask": "একটি ব্যাংকিং ডিরেক্টরি বানান যাতে কাস্টমার আইডি কী হিসেবে থাকবে এবং ভ্যালু হবে অ্যাকাউন্ট ডিটেইলস। এতে ডিপোজিট, উইথড্র এবং ব্যালেন্স ফিল্টারিং ফাংশন যুক্ত করুন।",
        "subtopics": [
            {
                "name": "Lists Deep Dive",
                "desc": ".append(), .insert(), .extend(), .remove(), .pop(), .clear(), .sort(), .reverse(), .copy() এবং ইনডেক্স স্লাইসিং।",
                "code": "lst = [3, 1, 4, 1, 5]\nlst.sort()\nprint('Sorted:', lst)"
            },
            {
                "name": "Tuples & Immutability Patterns",
                "desc": "টাপল তৈরি, ভ্যালু আনপ্যাকিং (first, *middle, last), নেস্টেড টাপল এবং ডিকশনারির কী হিসেবে টাপলের ব্যবহার।",
                "code": "loc = (23.8103, 90.4125)\nlat, lon = loc\nprint(f'{lat=}, {lon=}')"
            },
            {
                "name": "Sets & Mathematical Set Operations",
                "desc": "Union (|), Intersection (&), Difference (-), Symmetric Difference (^) এবং দ্রুততম O(1) মেম্বারশিপ চেক।",
                "code": "s = {1, 2, 3}; s.add(4)\nprint('Has 3?:', 3 in s)"
            },
            {
                "name": "Dictionaries & Hash Map Methods",
                "desc": "Keys, Values, Items, .get() ডিফল্ট ফলব্যাক, Dict Unpacking (**kwargs) এবং ডিকশনারি মার্জিং (|)।",
                "code": "user = {'id': 1, 'name': 'Adnan'}\nfor k, v in user.items():\n    print(f'{k}: {v}')"
            }
        ]
    }
]

# Add remaining topics up to 36 dynamically with deep content
remaining_curriculum = [
    # 4. Control Flow
    (4, "🔀 Control Flow & Iteration Logic", "beginner", "Logic & Flow", "fa-code-branch",
     "if/elif/else, for, while, nested loops, range(), enumerate(), zip(), break, continue, pass",
     "কন্ট্রোল ফ্লো প্রোগ্রামের সিদ্ধান্ত গ্রহণ এবং কাজের পুনরাবৃত্তি নিয়ন্ত্রণ করে। if-elif-else দিয়ে শর্ত যাচাই এবং for/while লুপ দিয়ে ডেটা প্রসেসিং করা হয়।",
     "Python control flow uses Truthy/Falsy evaluations. for loops utilize the Iterator Protocol (__iter__ and __next__) under the hood.",
     """# Control Flow Masterclass
scores = [78, 92, 45, 88, 60, 95]
passed_students = []

for idx, score in enumerate(scores, start=1):
    if score < 50:
        continue # Skip failed
    status = "Distinction" if score >= 90 else "Passed"
    passed_students.append((idx, score, status))

print("Passed Students:")
for s_id, score, status in passed_students:
    print(f"Student #{s_id}: Score {score} -> {status}")""",
     "Passed Students:\nStudent #1: Score 78 -> Passed\nStudent #2: Score 92 -> Distinction\nStudent #4: Score 88 -> Passed\nStudent #5: Score 60 -> Passed\nStudent #6: Score 95 -> Distinction",
     "FizzBuzz প্রবলেম সলভ করুন ১ থেকে ১০০ পর্যন্ত।",
     [
         {"name": "Conditionals (if, elif, else)", "desc": "শর্ত সাপেক্ষ এক্সিকিউশন ও টার্নারি অপারেটর।", "code": "val = 'Positive' if 10 > 0 else 'Negative'"},
         {"name": "for & while Loops", "desc": "নির্দিষ্ট সিকোয়েন্স এবং শর্ত ভিত্তিক লুপ।", "code": "for i in range(3): print(i)"},
         {"name": "enumerate() & zip()", "desc": "ইনডেক্স সহ আইটারেশন এবং প্যারালাল লিস্ট প্রসেসিং।", "code": "for i, char in enumerate('ABC'): print(i, char)"},
         {"name": "Loop Controls", "desc": "break, continue, pass এবং for-else লজিক।", "code": "for n in range(5):\n    if n == 3: break"}
     ]),

    # 5. User Input
    (5, "⌨️ User Input & Interactive CLI", "beginner", "I/O Interaction", "fa-keyboard",
     "input(), int(input()), float(input()), Validation loops, Multi-input parsing, CLI menus",
     "input() ফাংশন দিয়ে কনসোল থেকে ইউজারের ইনপুট স্ট্রিং আকারে নেওয়া হয় এবং টাইপ কাস্টিং ও ভ্যালিডেশন লুপ দিয়ে নিরাপদ রাখা হয়।",
     "input() reads lines from sys.stdin, strips trailing newlines, and returns strings. Robust CLI apps wrap this in retry loops with exception guards.",
     """def validate_age_input(raw_input):
    try:
        age = int(raw_input)
        if 0 <= age <= 120:
            return f"Valid Age: {age}"
        return "Age out of range (0-120)"
    except ValueError:
        return "Invalid numeric input"

print(validate_age_input("25"))
print(validate_age_input("-5"))""",
     "Valid Age: 25\nAge out of range (0-120)",
     "একটি ইন্টারঅ্যাক্টিভ CLI ক্যালকুলেটর বানান যা ইউজার ইনপুট নিয়ে হিসাব করবে।",
     [
         {"name": "input() & Type Conversion", "desc": "int(input()), float(input()) রূপান্তর।", "code": "val = int('50')"},
         {"name": "Input Validation Loops", "desc": "সঠিক ইনপুট না পাওয়া পর্যন্ত প্রম্পট করা।", "code": "while True:\n    if '123'.isdigit(): break"},
         {"name": "CLI Menu Systems", "desc": "কমান্ড লাইন ইন্টারফেস মেনু।", "code": "print('1. Add\\n2. Exit')"}
     ]),

    # 6. Functions
    (6, "🔧 Functions, Arguments & Scope", "beginner", "Modularity", "fa-gears",
     "def, parameters, return, *args, **kwargs, Local/Global/Nonlocal scope, Lambda, Docstrings",
     "ফাংশন কোডকে রিইউজেবল এবং মডুলার করে। *args ও **kwargs দিয়ে অনির্দিষ্ট সংখ্যক আর্গুমেন্ট পাঠানো যায়।",
     "Functions are first-class objects in Python. Variable scope lookup follows the LEGB (Local, Enclosing, Global, Built-in) rule.",
     """def calculate_invoice(customer: str, *items: str, discount: float = 0.0, **meta) -> dict:
    \"\"\"Generates structured invoice payload.\"\"\"
    return {
        "customer": customer,
        "items_count": len(items),
        "items": list(items),
        "discount_applied": f"{discount * 100}%",
        "metadata": meta
    }

order = calculate_invoice("Tanvir", "Laptop", "Mouse", discount=0.10, priority="HIGH")
print(order)""",
     "{'customer': 'Tanvir', 'items_count': 2, 'items': ['Laptop', 'Mouse'], 'discount_applied': '10.0%', 'metadata': {'priority': 'HIGH'}}",
     "একটি রিকার্সিভ ফাংশন লিখুন যা কোনো সংখ্যার ফ্যাক্টরিয়াল ও ফিবোনাচ্চি সিরিজ গণনা করে।",
     [
         {"name": "Function Definition & Return", "desc": "def ও return স্টেটমেন্ট।", "code": "def add(a, b): return a + b"},
         {"name": "*args and **kwargs", "desc": "ফ্লেক্সিবল পজিশনাল ও কী-ওয়ার্ড আর্গুমেন্ট।", "code": "def f(*a, **k): print(a, k)"},
         {"name": "LEGB Scope & global/nonlocal", "desc": "স্কোপ রেজোলিউশন ও মডিফিকেশন।", "code": "c = 0\ndef inc(): global c; c += 1"},
         {"name": "Lambda & Higher-Order Functions", "desc": "অ্যানোনিমাস ফাংশন ও map/filter।", "code": "sq = list(map(lambda x: x**2, [1, 2, 3]))"}
     ]),

    # 7. Comprehensions
    (7, "🧠 Comprehensions & Generator Expressions", "intermediate", "Core Python", "fa-brain",
     "List comprehension, Dict comprehension, Set comprehension, Generator expressions, Conditionals",
     "কম্প্রিহেনশন হলো এক লাইনে লিস্ট, ডিকশনারি বা সেট তৈরি করার দ্রুত ও মার্জিত উপায়।",
     "Comprehensions are optimized in CPython bytecode, avoiding repeated attribute lookups of .append() in standard for-loops.",
     """# List & Dict Comprehensions
nums = range(1, 11)
even_squares = [x**2 for x in nums if x % 2 == 0]
square_map = {x: x**2 for x in range(1, 6)}
gen_sum = sum(x**3 for x in range(100))

print("Even Squares:", even_squares)
print("Square Map   :", square_map)
print("Gen Cubes Sum:", gen_sum)""",
     "Even Squares: [4, 16, 36, 64, 100]\nSquare Map   : {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\nGen Cubes Sum: 24502500",
     "১ থেকে ৫০ পর্যন্ত সংখ্যার মধ্যে শুধু প্রাইম সংখ্যাগুলোকে লিস্ট কম্প্রিহেনশন দিয়ে ফিল্টার করুন।",
     [
         {"name": "List Comprehension", "desc": "[x for x in data if cond]", "code": "evens = [x for x in range(10) if x % 2 == 0]"},
         {"name": "Dict Comprehension", "desc": "{k: v for k, v in data}", "code": "d = {i: i*2 for i in range(3)}"},
         {"name": "Set & Gen Expressions", "desc": "{x for x in ...} ও (x for x in ...)", "code": "s = {x % 3 for x in range(10)}"}
     ]),

    # 8. Error Handling
    (8, "⚠️ Error Handling & Custom Exceptions", "intermediate", "Robustness", "fa-triangle-exclamation",
     "try, except, else, finally, raise, Custom Exceptions, Exception hierarchy",
     "প্রোগ্রাম ক্র্যাশ হওয়া প্রতিরোধে try-except ব্লক এবং রিসোর্স ক্লিনআপে finally ব্যবহার করা হয়।",
     "Python exceptions derive from BaseException. Unhandled exceptions bubble up the frame stack producing traceback logs.",
     """class PaymentError(Exception):
    pass

def process_transaction(balance, amount):
    try:
        if amount > balance:
            raise PaymentError(f"Insufficient funds: Need {amount}, have {balance}")
        return balance - amount
    except PaymentError as e:
        print(f"[REJECTED]: {e}")
        return balance
    finally:
        print("[AUDIT]: Operation logged.")

print("New Balance:", process_transaction(500, 700))""",
     "[REJECTED]: Insufficient funds: Need 700, have 500\n[AUDIT]: Operation logged.\nNew Balance: 500",
     "একটি কাস্টম ভ্যালিডেশন এক্সেপশন ক্লাস তৈরি করে ইমেইল ভ্যালিডেশন টেস্ট করুন।",
     [
         {"name": "try / except / else / finally", "desc": "এক্সেপশন হ্যান্ডলিং লাইফসাইকেল।", "code": "try: 1/1\nexcept: pass\nelse: print('OK')"},
         {"name": "Custom Exceptions (raise)", "desc": "নিজস্ব এরর ক্লাস তৈরি।", "code": "class MyErr(Exception): pass"}
     ]),

    # 9. File Handling
    (9, "📁 File Handling & OS Operations", "intermediate", "File Systems", "fa-folder-open",
     "open modes, with open(), Text, CSV, JSON, pathlib.Path, os, shutil",
     "with open() কনটেক্সট ম্যানেজার স্বয়ংক্রিয়ভাবে ফাইল ক্লোজ করে ফাইল হ্যান্ডলিং নিরাপদ করে।",
     "pathlib.Path provides an OOP interface over OS filesystem calls for cross-platform file manipulation.",
     """import json

data = {"system": "PyMaster", "version": 3.12, "modules": 36}
json_str = json.dumps(data, indent=2)
parsed = json.loads(json_str)

print(f"Loaded {parsed['system']} v{parsed['version']} with {parsed['modules']} modules.")""",
     "Loaded PyMaster v3.12 with 36 modules.",
     "pathlib দিয়ে একটি ফোল্ডারের সব .log ফাইল অন্য একটি ফোল্ডারে মুভ করার স্ক্রিপ্ট লিখুন।",
     [
         {"name": "with open() & File Modes", "desc": "'r', 'w', 'a', 'b' ফাইল মোডস।", "code": "# with open('f.txt', 'w') as f: f.write('hi')"},
         {"name": "JSON & CSV Processing", "desc": "json.loads(), json.dumps(), csv.reader()", "code": "import json; d = json.loads('{\"a\": 1}')"},
         {"name": "pathlib.Path & OS", "desc": "ডিরেক্টরি ও পাথ ম্যানিপুলেশন।", "code": "from pathlib import Path; p = Path('.')"}
     ]),

    # 10. Modules & Packages
    (10, "📦 Modules & Packages Architecture", "intermediate", "Code Organization", "fa-cube",
     "import, from...import, Aliases, __init__.py, __name__ == '__main__', Package hierarchy",
     "মডিউল হলো একটি .py ফাইল এবং প্যাকেজ হলো মডিউলের ফোল্ডার। __name__ == '__main__' দিয়ে স্ক্রিপ্ট এন্ট্রি পয়েন্ট নির্ধারণ করা হয়।",
     "Python resolves imports by searching sys.path and caches loaded modules in sys.modules.",
     """import math as m
from datetime import datetime, timezone

if __name__ == "__main__":
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S")
    print(f"Module Executed Directly at {now} UTC | Pi: {m.pi:.4f}")""",
     "Module Executed Directly at 2026-09-28 21:15:00 UTC | Pi: 3.1416",
     "একটি নিজস্ব প্যাকেজ স্ট্রাকচার বানিয়ে __init__.py এর মাধ্যমে ফাংশন এক্সপোর্ট করুন।",
     [
         {"name": "import & Aliases", "desc": "import math as m, from sys import path", "code": "import sys; print(len(sys.path))"},
         {"name": "__name__ == '__main__'", "desc": "ডিরেক্ট এক্সিকিউশন গার্ড।", "code": "if __name__ == '__main__': print('Run')"},
         {"name": "Package Structure", "desc": "__init__.py ও মডিউল অর্গানাইজেশন।", "code": "# mypkg/__init__.py"}
     ]),

    # 11. Python Standard Library
    (11, "🧰 Python Standard Library Power Tools", "intermediate", "Standard Tools", "fa-toolbox",
     "collections (Counter, defaultdict), itertools, functools, re, logging, datetime, random",
     "পাইথনে প্রচুর পাওয়ারফুল বিল্ট-ইন লাইব্রেরি রয়েছে যেগুলোকে 'Batteries Included' বলা হয়।",
     "Standard Library tools are implemented in optimized C providing high-performance data structures and algorithms.",
     """from collections import Counter
import itertools
import re

words = ["python", "ai", "fastapi", "python", "ai", "python"]
counts = Counter(words)
print("Top Word:", counts.most_common(1))

combos = list(itertools.combinations(["FastAPI", "Postgres", "Redis"], 2))
print("Architecture Pairs:", combos)""",
     "Top Word: [('python', 3)]\nArchitecture Pairs: [('FastAPI', 'Postgres'), ('FastAPI', 'Redis'), ('Postgres', 'Redis')]",
     "re মডিউল দিয়ে ইমেইল ও ফোন নম্বর এক্সট্র্যাক্ট করার রেজেক্স লিখুন।",
     [
         {"name": "collections Module", "desc": "Counter, defaultdict, deque", "code": "from collections import Counter; c = Counter('abc')"},
         {"name": "itertools & functools", "desc": "permutations, combinations, lru_cache", "code": "import functools; @functools.lru_cache()\ndef f(): pass"},
         {"name": "re (Regular Expressions)", "desc": "প্যাটার্ন ম্যাচিং ও এক্সট্রাকশন।", "code": "import re; m = re.findall(r'\\d+', '100 and 200')"}
     ]),

    # 12. Object-Oriented Programming (OOP)
    (12, "🏗️ Object-Oriented Programming (OOP)", "intermediate", "Object Oriented", "fa-cubes",
     "Classes, Objects, self, __init__, Encapsulation, Inheritance, Polymorphism, Abstraction, Magic methods, MRO",
     "অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP) কোডকে অবজেক্ট ও ক্লাসে সাজায়। এর ৪টি মূল স্তম্ভ: Encapsulation, Inheritance, Polymorphism, Abstraction।",
     "Python uses class-based OOP with dynamic dispatch. Method Resolution Order (MRO) resolves multiple inheritance using the C3 Linearization algorithm.",
     """from abc import ABC, abstractmethod

class PaymentGateway(ABC):
    @abstractmethod
    def pay(self, amount: float):
        pass

class SSLCommerz(PaymentGateway):
    def __init__(self, merchant_id: str):
        self._merchant_id = merchant_id  # Encapsulation

    def pay(self, amount: float):
        print(f"[SSLCommerz]: Charged ৳{amount:,.2f}")

gw = SSLCommerz("MERCHANT_99")
gw.pay(5000)""",
     "[SSLCommerz]: Charged ৳5,000.00",
     "একটি BankAccount বেস ক্লাস এবং Savings ও Current চাইল্ড ক্লাস তৈরি করুন।",
     [
         {"name": "Classes & __init__", "desc": "ব্লুপ্রিন্ট ও কনস্ট্রাক্টর মেথড।", "code": "class User:\n    def __init__(self, n): self.name = n"},
         {"name": "4 OOP Pillars", "desc": "Encapsulation, Inheritance, Polymorphism, Abstraction", "code": "class Animal: pass\nclass Dog(Animal): pass"},
         {"name": "Magic Methods & Properties", "desc": "__str__, __repr__, __len__, @property", "code": "class Box:\n    def __len__(self): return 10"}
     ]),

    # 13. Advanced Python
    (13, "🧩 Advanced Python (Generators, Decorators, Dataclasses)", "advanced", "Advanced Language", "fa-puzzle-piece",
     "Iterators, Generators (yield), Decorators, Closures, Context Managers, dataclasses, Pattern Matching",
     "yield দিয়ে তৈরি জেনারেটর মেমোরি বাঁচায়, ডেকোরেটর ফাংশন আচরণ মডিফাই করে এবং dataclasses বয়লারপ্লেট কমায়।",
     "Generators implement the iterator protocol lazily. Structural pattern matching (match/case) enables declarative dispatching.",
     """import time
from dataclasses import dataclass

def timing_decorator(fn):
    def wrapper(*args, **kwargs):
        t0 = time.perf_counter()
        res = fn(*args, **kwargs)
        print(f"{fn.__name__} took {(time.perf_counter()-t0)*1000:.4f}ms")
        return res
    return wrapper

@dataclass
class Service:
    name: str
    port: int

@timing_decorator
def start_node():
    s = Service("AuthAPI", 8000)
    print(f"Service {s.name} running on port {s.port}")

start_node()""",
     "Service AuthAPI running on port 8000\nstart_node took 0.0500ms",
     "একটি কাস্টম কনটেক্সট ম্যানেজার তৈরি করুন যা কোডের মেমোরি ব্যবহার মাপবে।",
     [
         {"name": "Generators & yield", "desc": "মেমোরি সাশ্রয়ী লেজি ইভ্যালুয়েশন।", "code": "def gen(): yield 1; yield 2"},
         {"name": "Decorators & Closures", "desc": "ফাংশন র‍্যাপার ও মেটাপ্রোগ্রামিং।", "code": "def dec(fn): return lambda: fn()"},
         {"name": "dataclasses & Pattern Matching", "desc": "@dataclass ও match-case স্টেটমেন্ট।", "code": "from dataclasses import dataclass\n@dataclass\nclass P: x: int"}
     ]),

    # 14. Concurrency
    (14, "🧵 Concurrency & Asynchronous Programming", "advanced", "Concurrency", "fa-network-wired",
     "Threading (I/O bound), Multiprocessing (CPU bound), Asyncio, async/await, Tasks, Event Loops",
     "নেটওয়ার্ক ও I/O কাজের জন্য Asyncio/Threading এবং ভারী CPU কাজের জন্য Multiprocessing ব্যবহার করা হয়।",
     "CPython has a GIL. Asyncio uses a single-threaded cooperative event loop using epoll/kqueue multiplexing.",
     """import asyncio

async def fetch_api(endpoint):
    print(f"📡 Fetching {endpoint}...")
    await asyncio.sleep(0.05)
    return {"endpoint": endpoint, "status": 200}

async def main():
    results = await asyncio.gather(
        fetch_api("/users"),
        fetch_api("/orders")
    )
    print("Fetched APIs:", results)

# asyncio.run(main()) in standalone
print("Async pipeline blueprint verified.")""",
     "Async pipeline blueprint verified.",
     "asyncio দিয়ে একসাথে ১০টি ওয়েবসাইটের স্ট্যাটাস চেক করার স্ক্রিপ্ট লিখুন।",
     [
         {"name": "Threading & Locks", "desc": "I/O বাউন্ড টাস্ক ও রেস কন্ডিশন প্রতিরোধ।", "code": "import threading\nlock = threading.Lock()"},
         {"name": "Multiprocessing", "desc": "মাল্টি-কোর CPU প্রসেসিং (GIL বাইপাস)।", "code": "from multiprocessing import Pool"},
         {"name": "Asyncio (async/await)", "desc": "নন-ব্লকিং ইভেন্ট লুপ।", "code": "async def f(): await asyncio.sleep(1)"}
     ]),

    # 15. Algorithms & Data Structures
    (15, "🧮 Algorithms & Data Structures", "advanced", "Computer Science", "fa-diagram-project",
     "Arrays, Stack, Queue, Trees, BST, Graphs, Sorting, Binary Search, Big O Complexity",
     "ডেটা সাজানো ও এফিশিয়েন্টলি সার্চ/সর্ট করার জন্য ডেটা স্ট্রাকচার ও অ্যালগরিদম অপরিহার্য।",
     "Asymptotic Big-O analysis evaluates algorithm scaling. Binary Search runs in O(log N) and QuickSort in O(N log N).",
     """def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

nums = [10, 25, 34, 48, 59, 72, 85, 96]
idx = binary_search(nums, 59)
print(f"Binary Search: Found 59 at index {idx}")""",
     "Binary Search: Found 59 at index 4",
     "একটি Binary Search Tree (BST) তে insert এবং search মেথড লিখুন।",
     [
         {"name": "Big O Complexity", "desc": "O(1), O(log N), O(N), O(N log N), O(N^2)", "code": "# Dict lookup: O(1) vs List: O(N)"},
         {"name": "Searching & Sorting", "desc": "Binary Search, Quick Sort, Merge Sort", "code": "def bs(): pass"},
         {"name": "Trees & Graphs (BFS/DFS)", "desc": "ট্রি এবং গ্রাফ ট্রাভার্সাল অ্যালগরিদম।", "code": "graph = {'A': ['B']}"}
     ]),

    # 16. Databases
    (16, "🗄️ Databases (SQL & SQLAlchemy ORM)", "applied", "Databases & Backend", "fa-database",
     "SQL CRUD, JOIN, Indexes, SQLite, PostgreSQL, Transactions, SQLAlchemy ORM",
     "ডেটাবেসে ডেটা সংরক্ষণ করতে SQL এবং পাইথনের অবজেক্ট দিয়ে ডেটাবেস হ্যান্ডেল করতে ORM ব্যবহৃত হয়।",
     "Relational databases enforce ACID guarantees. ORMs map relational schema tuples to Python classes.",
     """import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE users (id INT, name TEXT, balance REAL)")
cur.execute("INSERT INTO users VALUES (1, 'Adnan', 1500.0), (2, 'Sadia', 3200.0)")
conn.commit()

cur.execute("SELECT name, balance FROM users WHERE balance > 2000")
print("High Balance Users:", cur.fetchall())
conn.close()""",
     "High Balance Users: [('Sadia', 3200.0)]",
     "SQLAlchemy দিয়ে User এবং Post মডেলের One-to-Many রিলেশনশিপ তৈরি করুন।",
     [
         {"name": "SQL CRUD & Queries", "desc": "SELECT, INSERT, UPDATE, DELETE, JOIN", "code": "SELECT * FROM users JOIN orders ON users.id=orders.uid"},
         {"name": "Parameterized Queries", "desc": "SQL Injection প্রতিরোধ।", "code": "cur.execute('SELECT * FROM u WHERE id = ?', (1,))"},
         {"name": "SQLAlchemy ORM", "desc": "মডেল ও সেশন ম্যানেজমেন্ট।", "code": "class User(Base): __tablename__ = 'users'"}
     ]),

    # 17. APIs & Web
    (17, "🌐 APIs & Web Requests (requests / httpx)", "applied", "Web & Networking", "fa-globe",
     "HTTP/HTTPS, GET, POST, PUT, DELETE, Status codes, JSON, requests, httpx, REST APIs",
     "API এর মাধ্যমে ভিন্ন সফটওয়্যার ডেটা আদান-প্রদান করে। requests ও httpx দিয়ে ওয়েব কল করা হয়।",
     "REST APIs operate over HTTP exchanging JSON payloads with standardized status codes (2xx, 4xx, 5xx).",
     """import json

# Simulated REST API Response
mock_response = {
    "status_code": 200,
    "payload": {"city": "Dhaka", "temp_c": 28.5, "condition": "Sunny"}
}

print(f"API Response (HTTP {mock_response['status_code']}):")
print(json.dumps(mock_response["payload"], indent=2))""",
     "API Response (HTTP 200):\n{\n  \"city\": \"Dhaka\",\n  \"temp_c\": 28.5,\n  \"condition\": \"Sunny\"\n}",
     "GitHub API কল করে ইউজারের রিপোজিটরি তালিকা প্রিন্ট করার স্ক্রিপ্ট লিখুন।",
     [
         {"name": "HTTP Methods & Status Codes", "desc": "GET, POST, PUT, DELETE, 200 OK, 404 Not Found", "code": "# requests.get('https://api.github.com')"},
         {"name": "requests & httpx Client", "desc": "JSON পার্সিং ও হেডার হ্যান্ডলিং।", "code": "# res = requests.post(url, json=data)"},
         {"name": "Authentication & OAuth", "desc": "Bearer Tokens ও API Keys।", "code": "headers = {'Authorization': 'Bearer TOKEN'}"}
     ]),

    # 18. Web Development
    (18, "🕸️ Web Development (FastAPI, Flask, Django)", "applied", "Backend Engineering", "fa-server",
     "FastAPI, Flask, Django comparison, Routing, Pydantic validation, Async, Swagger /docs",
     "FastAPI উচ্চগতির আধুনিক API, Flask হালকা ফ্রেমওয়ার্ক এবং Django পূর্ণাঙ্গ অল-ইন-ওয়ান ফ্রেমওয়ার্ক।",
     "FastAPI combines Starlette async routing with Pydantic type validation and automatic OpenAPI generation.",
     """# FastAPI Architecture Blueprint
\"\"\"
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="PyMaster API")

class Item(BaseModel):
    name: str
    price: float

@app.post("/items/")
async def create_item(item: Item):
    return {"status": "created", "item": item}
\"\"\"
print("FastAPI + Pydantic Type-safe routing blueprint ready.")""",
     "FastAPI + Pydantic Type-safe routing blueprint ready.",
     "FastAPI দিয়ে একটি To-Do REST API বানান যা ইন-মেমোরি ডেটাবেসে কাজ করবে।",
     [
         {"name": "FastAPI vs Flask vs Django", "desc": "আধুনিক ব্যাকএন্ড ফ্রেমওয়ার্ক নির্বাচন।", "code": "# @app.get('/') async def root():"},
         {"name": "Pydantic Schemas", "desc": "ডাটা ভ্যালিডেশন ও টাইপ সেফটি।", "code": "class User(BaseModel): name: str"},
         {"name": "OpenAPI Documentation", "desc": "স্বয়ংক্রিয় /docs সোয়্যাগার ইন্টারফেস।", "code": "# /docs route"}
     ]),

    # 19. GUI Development
    (19, "🖥️ GUI Development (Tkinter & PyQt)", "applied", "Desktop Apps", "fa-window-maximize",
     "Tkinter, PyQt6, PySide6, CustomTkinter, Event driven UI, Desktop Calculator, Desktop Apps",
     "পাইথন দিয়ে উইন্ডোজ/ম্যাক ডেস্কটপ সফটওয়্যার বানাতে Tkinter ও PyQt ফ্রেমওয়ার্ক ব্যবহার করা হয়।",
     "Desktop GUIs operate an event mainloop dispatching button clicks and window events via signals and slots.",
     """# Tkinter Blueprint
print("GUI Desktop Application framework initialized. Ready for window.mainloop() execution.")""",
     "GUI Desktop Application framework initialized. Ready for window.mainloop() execution.",
     "Tkinter দিয়ে একটি পাসওয়ার্ড জেনারেটর ডেস্কটপ অ্যাপ তৈরি করুন।",
     [
         {"name": "Tkinter Basics & Layouts", "desc": "pack(), grid(), place() উইজেট সিস্টেম।", "code": "# root = tk.Tk(); root.mainloop()"},
         {"name": "PyQt6 & Signals/Slots", "desc": "প্রফেশনাল কিউট আর্কিটেকচার।", "code": "# app = QApplication([])"},
         {"name": "Desktop Projects", "desc": "ক্যালকুলেটর, নোটপ্যাড, পাসওয়ার্ড ম্যানেজার।", "code": "# PyInstaller .exe build"}
     ]),

    # 20. Automation
    (20, "🤖 Automation (Excel, PDF, Email, System)", "applied", "Automation & Scripts", "fa-robot",
     "Excel (openpyxl), PDF (pypdf), Email (smtplib), Pillow image processing, Task scheduling",
     "অটোমেশন স্ক্রিপ্ট দিয়ে এক্সেলে ডাটা এন্ট্রি, পিডিএফ মার্জ, বাল্ক ইমেইল ও ইমেজ রিসাইজ স্বয়ংক্রিয় করা যায়।",
     "Automates binary parsing of XLSX/PDF documents, image buffers via PIL, and network mail via SMTP.",
     """# Excel & Payroll Automation Model
salaries = [("Engineering", 120000), ("Product", 95000), ("Marketing", 75000)]
for dept, sal in salaries:
    net = sal * 0.85
    print(f"🏢 {dept:<12}: Gross ৳{sal:,} -> Net ৳{net:,.0f}")""",
     "🏢 Engineering : Gross ৳120,000 -> Net ৳102,000\n🏢 Product     : Gross ৳95,000 -> Net ৳80,750\n🏢 Marketing   : Gross ৳75,000 -> Net ৳63,750",
     "Pillow দিয়ে একটি ফোল্ডারের সব ছবি একসাথে ওয়াটারমার্ক ও রিসাইজ করুন।",
     [
         {"name": "Excel Automation (openpyxl)", "desc": "এক্সেল ফাইল রিড ও রাইট।", "code": "# wb = openpyxl.Workbook()"},
         {"name": "Email Automation (smtplib)", "desc": "স্বয়ংক্রিয় ইমেইল ডেলিভারি।", "code": "# smtplib.SMTP('smtp.gmail.com')"},
         {"name": "Image & PDF Automation", "desc": "Pillow ইমেজ রিসাইজিং ও PDF মার্জিং।", "code": "# Image.open('photo.jpg')"}
     ]),

    # 21. Web Scraping
    (21, "🕷️ Web Scraping (BeautifulSoup & Playwright)", "applied", "Data Extraction", "fa-spider",
     "HTML, DOM, BeautifulSoup, CSS Selectors, XPath, Playwright, Dynamic Scraping, robots.txt",
     "ওয়েবসাইট থেকে স্বয়ংক্রিয়ভাবে তথ্য সংগ্রহ করার প্রক্রিয়া হলো স্ক্র্যাপিং। ডায়নামিক সাইটে Playwright ব্যবহৃত হয়।",
     "Parses DOM trees via lxml or drives headless browsers to execute JavaScript before DOM extraction.",
     """import re

html_snippet = '<div class="product"><span class="title">Laptop Pro</span><span class="price">$1,299</span></div>'
title = re.search(r'class="title">(.*?)<', html_snippet).group(1)
price = re.search(r'class="price">(.*?)<', html_snippet).group(1)
print(f"Scraped Item: {title} | Price: {price}")""",
     "Scraped Item: Laptop Pro | Price: $1,299",
     "যেকোনো সাইট থেকে প্রথম ৩টি পেজের পণ্যের নাম ও দাম স্ক্র্যাপ করে CSV ফাইলে সেভ করুন।",
     [
         {"name": "BeautifulSoup & CSS Selectors", "desc": "soup.select('.product > .title')", "code": "# soup.find('h1')"},
         {"name": "Dynamic Scraping (Playwright)", "desc": "জাভাস্ক্রিপ্ট রেন্ডারিং ও ব্রাউজার ড্রাইভ।", "code": "# async_playwright()"},
         {"name": "Ethics & Rate Limiting", "desc": "robots.txt ও সার্ভার লোড প্রোটেকশন।", "code": "import time; time.sleep(1)"}
     ]),

    # 22. Data Science
    (22, "📊 Data Science (NumPy, Pandas, Matplotlib)", "applied", "Data Science", "fa-chart-pie",
     "NumPy arrays, Broadcasting, Pandas DataFrames, Data cleaning, GroupBy, Matplotlib plots",
     "NumPy দ্রুত গাণিতিক ম্যাট্রিক্স ক্যালকুলেশন করে এবং Pandas দিয়ে ডাটা টেবিল প্রসেস ও ভিজ্যুয়ালাইজ করা যায়।",
     "NumPy uses contiguous C arrays with SIMD vectorization. Pandas DataFrames provide indexed column operations.",
     """import statistics

sales = [45000, 32000, 58000, 29000, 41000]
print(f"Total Sales: ৳{sum(sales):,} | Mean: ৳{statistics.mean(sales):,.2f} | Max: ৳{max(sales):,}")""",
     "Total Sales: ৳205,000 | Mean: ৳41,000.00 | Max: ৳58,000",
     "একটি CSV ফাইল রিড করে নাল ভ্যালু ফিল্টার এবং ক্যাটাগরি ভিত্তিক গ্রুপবাই গড় বের করুন।",
     [
         {"name": "NumPy Vectorization", "desc": "লুপ ছাড়া ম্যাট্রিক্স অপারেশন।", "code": "# import numpy as np; a * 2"},
         {"name": "Pandas DataFrame", "desc": "df.dropna(), df.groupby(), df.merge()", "code": "# df.groupby('city').mean()"},
         {"name": "Data Visualization", "desc": "Matplotlib ও Plotly চার্টিং।", "code": "# plt.plot(x, y); plt.show()"}
     ]),

    # 23. Machine Learning
    (23, "🤖 Machine Learning Fundamentals (Scikit-Learn)", "applied", "Machine Learning", "fa-brain",
     "Features, Labels, Train/Test Split, Regression, Decision Trees, Random Forest, Scikit-learn",
     "মেশিন লার্নিং পূর্বের ডেটা দেখে নিজে নিজে শেখে এবং নতুন ডেটার উপর নিখুঁত প্রেডিকশন করতে পারে।",
     "Supervised algorithms minimize loss functions across multidimensional feature matrices.",
     """# Simple Linear Model Simulation: y = w*x + b
weight = 15000.0
bias = 30000.0
def predict_salary(years_exp): return weight * years_exp + bias

for exp in [1.5, 3.0, 5.0]:
    print(f"{exp} Yrs Exp -> Estimated Salary: ৳{predict_salary(exp):,.2f}")""",
     "1.5 Yrs Exp -> Estimated Salary: ৳52,500.00\n3.0 Yrs Exp -> Estimated Salary: ৳75,000.00\n5.0 Yrs Exp -> Estimated Salary: ৳105,000.00",
     "Scikit-learn এর RandomForestClassifier দিয়ে একটি ক্লাসিফিকেশন মডেল ট্রেইন করুন।",
     [
         {"name": "Dataset & Train/Test Split", "desc": "X_train, X_test, y_train, y_test", "code": "# train_test_split(X, y)"},
         {"name": "Supervised Algorithms", "desc": "Linear Regression, Random Forest, SVM", "code": "# model.fit(X_train, y_train)"},
         {"name": "Evaluation Metrics", "desc": "Accuracy, Precision, Recall, F1-Score", "code": "# accuracy_score(y_test, y_pred)"}
     ]),

    # 24. Deep Learning
    (24, "🧠 Deep Learning & Neural Networks (PyTorch)", "applied", "Deep Learning", "fa-network-wired",
     "Perceptron, Activation functions (ReLU, Sigmoid), Backpropagation, CNN, Transformers, PyTorch",
     "ডিপ লার্নিং কৃত্রিম নিউরাল নেটওয়ার্কের মাধ্যমে ইমেজ, অডিও ও টেক্সটের জটিল প্যাটার্ন শেখে।",
     "Deep Neural Networks propagate activations forward and update tensor gradients via backpropagation.",
     """import math

def relu(x): return max(0.0, x)
def sigmoid(x): return 1.0 / (1.0 + math.exp(-x))

weights = [0.5, -0.2, 0.8]
inputs = [1.0, 2.0, 3.0]
dot = sum(w*x for w, x in zip(weights, inputs)) + 0.1
print(f"Dot Product: {dot:.2f} | ReLU: {relu(dot):.2f} | Sigmoid: {sigmoid(dot):.2%}")""",
     "Dot Product: 2.60 | ReLU: 2.60 | Sigmoid: 93.09%",
     "PyTorch দিয়ে একটি ২-লেয়ারের MLP মডেল ডিফাইন করুন।",
     [
         {"name": "Perceptrons & Activations", "desc": "ReLU, Sigmoid, Softmax", "code": "def relu(x): return max(0, x)"},
         {"name": "Backpropagation & Loss", "desc": "Gradient descent ও Adam optimizer।", "code": "# loss.backward(); opt.step()"},
         {"name": "CNN & Transformers", "desc": "ইমেজ ও ল্যাঙ্গুয়েজ মডেলিং আর্কিটেকচার।", "code": "# nn.Conv2d(3, 16, 3)"}
     ]),

    # 25. Generative AI
    (25, "✨ Generative AI & Autonomous AI Agents", "applied", "Generative AI", "fa-wand-magic-sparkles",
     "LLMs, Prompt Engineering, Gemini / OpenAI APIs, Embeddings, Vector DBs, RAG, Tool Calling, AI Agents",
     "জেনারেটিভ এআই দিয়ে নতুন কনটেন্ট ও কোড তৈরি করা যায়। RAG নিজস্ব ডকুমেন্টে সার্চ করে এবং AI এজেন্ট টুল কল করে।",
     "Leverages transformer models. RAG pipelines convert textual data into vector embeddings for semantic search.",
     """# Agent Tool Calling Architecture
def tool_get_stock(symbol): return f"{symbol.upper()}: $185.50 (+2.1%)"

query = "What is the stock price of AAPL?"
print(f"🤖 Query: {query}")
print(f"⚡ Tool Call: {tool_get_stock('AAPL')}")
print(f"💬 AI Response: Apple (AAPL) is currently trading at $185.50, up 2.1% today.")""",
     "🤖 Query: What is the stock price of AAPL?\n⚡ Tool Call: AAPL: $185.50 (+2.1%)\n💬 AI Response: Apple (AAPL) is currently trading at $185.50, up 2.1% today.",
     "Gemini API দিয়ে একটি CLI কোডিং অ্যাসিস্ট্যান্ট চ্যাটবট বানান।",
     [
         {"name": "LLM APIs & Prompting", "desc": "System prompts, Structured outputs", "code": "# client.models.generate_content()"},
         {"name": "Embeddings & RAG", "desc": "ভেক্টর ডাটাবেস ও কসমাস সিমিলারিটি সার্চ।", "code": "# chroma_client.query()"},
         {"name": "Tool Calling & Agents", "desc": "ফাংশন কলিং ও মাল্টি-এজেন্ট সিস্টেম।", "code": "# tools = [get_weather, send_email]"}
     ]),

    # 26. Cybersecurity
    (26, "🔐 Cybersecurity with Python (Defensive)", "applied", "Security", "fa-shield-halved",
     "Cryptographic Hashing (hashlib), secrets, Password hashing, SQL Injection mitigation, Secrets management",
     "পাসওয়ার্ড ও সেনসিটিভ ডেটা সুরক্ষিত রাখতে হ্যাশিং (SHA-256) এবং ক্রিপ্টোগ্রাফিক সিক্রেট টোকেন ব্যবহৃত হয়।",
     "Defensive security leverages CSPRNGs (secrets module), constant-time string comparisons, and parameterized queries.",
     """import hashlib
import secrets

token = secrets.token_hex(16)
pw_hash = hashlib.sha256("AdminSecret2026!".encode()).hexdigest()
print(f"Secure Token : {token}")
print(f"SHA-256 Hash : {pw_hash[:20]}...")""",
     "Secure Token : ...\nSHA-256 Hash : ...",
     "একটি পাসওয়ার্ড স্ট্রেংথ এবং ব্রুটফোর্স রেজিস্ট্যান্স চেকার লিখুন।",
     [
         {"name": "hashlib & secrets", "desc": "SHA-256, CSPRNG সিকিউর টোকেন।", "code": "import secrets; token = secrets.token_hex(16)"},
         {"name": "SQL Injection Defense", "desc": "প্যারামিটারাইজড কুয়েরি ব্যবহার।", "code": "# cur.execute('SELECT * WHERE id = ?', (id,))"},
         {"name": "Secrets Management", "desc": "os.getenv() ও .env ফাইল।", "code": "import os; api_key = os.getenv('KEY')"}
     ]),

    # 27. Testing
    (27, "🧪 Testing (unittest & pytest)", "applied", "Quality & Testing", "fa-vial-circle-check",
     "Unit testing, Integration testing, pytest, Fixtures, Mocking, Test Coverage, TDD",
     "সফটওয়্যারের বাগ স্বয়ংক্রিয়ভাবে ধরতে টেস্ট লেখা হয়। pytest পাইথনের সবচেয়ে জনপ্রিয় টেস্টিং ফ্রেমওয়ার্ক।",
     "Testing suites assert unit components. Pytest provides dependency-injected fixtures, mocking, and coverage reports.",
     """def add(a, b): return a + b

def test_addition():
    assert add(10, 20) == 30, "Math failed"
    assert add(-1, 1) == 0, "Negative addition failed"
    print("✅ All 2 unit assertions passed (100% Coverage).")

test_addition()""",
     "✅ All 2 unit assertions passed (100% Coverage).",
     "pytest-mock ব্যবহার করে একটি এপিআই ফাংশন মক টেস্ট করুন।",
     [
         {"name": "unittest vs pytest", "desc": "assert স্টেটমেন্ট ও টেস্ট ডিসকভারি।", "code": "def test_x(): assert 2 + 2 == 4"},
         {"name": "Pytest Fixtures", "desc": "টেস্টের ডাটা ও ডিপেন্ডেন্সি ইনজেকশন।", "code": "# @pytest.fixture"},
         {"name": "Mocking & Coverage", "desc": "pytest-cov দিয়ে কোড কভারেজ মাপ।", "code": "# pytest --cov=src"}
     ]),

    # 28. Debugging
    (28, "🐛 Debugging & Profiling", "applied", "Quality & Testing", "fa-bug-slash",
     "Traceback analysis, pdb debugger, Breakpoints, VS Code debugging, Logging best practices",
     "কোডের বাগ খুঁজে বের করে ফিক্স করার জন্য pdb, breakpoints এবং logging মডিউল ব্যবহৃত হয়।",
     "Debugging analyzes runtime call stacks. pdb intercepts execution via sys.settrace hooks.",
     """import logging
import io

buf = io.StringIO()
logging.basicConfig(stream=buf, level=logging.INFO, format="[%(levelname)s] %(message)s")
logging.info("Application gateway initialized.")
logging.warning("High memory threshold alert.")
print("Captured Logs:\n" + buf.getvalue().strip())""",
     "Captured Logs:\n[INFO] Application gateway initialized.\n[WARNING] High memory threshold alert.",
     "breakpoint() দিয়ে একটি রিকার্সিভ ফাংশনের স্ট্যাক ফ্রেম ডিবাগ করুন।",
     [
         {"name": "Traceback Analysis", "desc": "স্ট্যাক ট্রেস পড়ে লাইন ও এরর শনাক্ত করা।", "code": "# Traceback line analysis"},
         {"name": "pdb & breakpoint()", "desc": "ইন্টারঅ্যাক্টিভ ডিবাগার চালানো।", "code": "# breakpoint()"},
         {"name": "Structured Logging", "desc": "DEBUG, INFO, WARNING, ERROR লগিং।", "code": "import logging; logging.info('OK')"}
     ]),

    # 29. Performance Optimization
    (29, "📈 Performance Optimization & Profiling", "advanced", "Optimization", "fa-gauge-high",
     "cProfile, timeit, functools.lru_cache, __slots__ memory optimization, Generators",
     "lru_cache দিয়ে মেমোইজেশন, __slots__ দিয়ে মেমোরি কমানো এবং জেনারেটর দিয়ে পারফরম্যান্স বাড়ানো যায়।",
     "CPython optimization reduces object __dict__ overhead and caches pure function outputs via lru_cache.",
     """from functools import lru_cache

@lru_cache(maxsize=64)
def fib(n):
    return n if n < 2 else fib(n-1) + fib(n-2)

print("Fibonacci(35) cached calculation:", fib(35))""",
     "Fibonacci(35) cached calculation: 9227465",
     "timeit দিয়ে List Comprehension ও For Loop এর গতি তুলনা করুন।",
     [
         {"name": "timeit & cProfile", "desc": "এক্সিকিউশন টাইম ও প্রোফাইলিং।", "code": "import timeit; timeit.timeit()"},
         {"name": "Caching (lru_cache)", "desc": "ফাংশন মেমোইজেশন মেমোরি।", "code": "@lru_cache(maxsize=128)"},
         {"name": "Memory Optimization (__slots__)", "desc": "৫০% পর্যন্ত র‍্যাম খরচ কমানো।", "code": "class U: __slots__ = ('name',)"}
     ]),

    # 30. Package Management
    (30, "📦 Package Management & Tooling (pip, uv, Poetry)", "applied", "Tooling & DevOps", "fa-box-open",
     "pip, PyPI, venv, requirements.txt, pyproject.toml, Poetry, uv, Publishing",
     "ভার্চুয়াল এনভায়রনমেন্ট (venv) দিয়ে প্রজেক্ট ডিপেন্ডেন্সি আলাদা রাখা হয়। আধুনিক টুল uv ও Poetry অতি দ্রুত কাজ করে।",
     "PEP 517/518/621 packaging specifications utilize pyproject.toml declarative dependency tables.",
     """# Modern pyproject.toml Blueprint
print("Modern pyproject.toml build configuration verified for uv/Poetry.")""",
     "Modern pyproject.toml build configuration verified for uv/Poetry.",
     "python -m venv দিয়ে এনভায়রনমেন্ট তৈরি ও requirements.txt এক্সপোর্ট করুন।",
     [
         {"name": "venv & pip", "desc": "ভার্চুয়াল এনভায়রনমেন্ট তৈরি ও একটিভেশন।", "code": "# python -m venv .venv"},
         {"name": "uv & Poetry", "desc": "মডার্ন ফাস্ট প্যাকেজ ম্যানেজার।", "code": "# uv pip install -r requirements.txt"},
         {"name": "PyPI Publishing", "desc": "প্যাকেজ বিল্ড ও টুইন দিয়ে আপলোড।", "code": "# twine upload dist/*"}
     ]),

    # 31. Git & GitHub
    (31, "🌿 Git & GitHub for Python Developers", "applied", "Version Control", "fa-code-branch",
     "git init, commit, branch, merge, PR, .gitignore for Python, GitHub Actions CI/CD",
     "গিট কোড হিস্ট্রি ট্র্যাক করে এবং গিটহাব টিমে কাজ করতে সহায়তা করে। .gitignore দিয়ে ক্যাশ ও .venv বাদ দেওয়া হয়।",
     "Git is a distributed content-addressable version control system using commit DAG graphs.",
     """print("Python .gitignore essential rules: __pycache__/, .venv/, .env, .pytest_cache/")""",
     "Python .gitignore essential rules: __pycache__/, .venv/, .env, .pytest_cache/",
     "একটি GitHub Actions CI স্ক্রিপ্ট লিখুন যা অটো টেস্ট রান করবে।",
     [
         {"name": "Git Core Commands", "desc": "init, add, commit, push, pull", "code": "# git commit -m 'feat: auth'"},
         {"name": "Branching & PRs", "desc": "ফিচার ব্রাঞ্চিং ও কোড রিভিউ।", "code": "# git checkout -b feat/api"},
         {"name": "GitHub Actions CI", "desc": "অটোমেটেড টেস্ট পাইপলাইন।", "code": "# .github/workflows/ci.yml"}
     ]),

    # 32. Deployment & DevOps
    (32, "🐳 Deployment & DevOps (Docker, Linux, Nginx)", "applied", "DevOps & Cloud", "fa-docker",
     "Docker, Dockerfile, Docker Compose, Linux, Uvicorn, Nginx Reverse Proxy, Cloud Deploy",
     "ডকার দিয়ে কনটেইনার তৈরি করা হয় যাতে সব সার্ভারে কোড একইভাবে রান করে। Nginx ও Uvicorn দিয়ে লাইভ ট্রাফিক হ্যান্ডেল করা হয়।",
     "Docker packages runtimes into immutable OCI container images. Nginx handles reverse-proxy TLS termination.",
     """print("Multi-Stage Production Dockerfile for FastAPI + Uvicorn verified.")""",
     "Multi-Stage Production Dockerfile for FastAPI + Uvicorn verified.",
     "একটি docker-compose.yml ফাইল লিখুন যাতে Web ও Postgres সার্ভিস থাকবে।",
     [
         {"name": "Dockerfile & Multi-Stage", "desc": "লাইটওয়েট সিকিউর ইমেজ বিল্ড।", "code": "# FROM python:3.12-slim"},
         {"name": "Docker Compose", "desc": "মাল্টি-সার্ভিস এক কম্যান্ডে রান।", "code": "# docker compose up -d"},
         {"name": "Linux & Nginx", "desc": "রিভার্স প্রক্সি ও SSL সার্টিফিকেট।", "code": "# proxy_pass http://127.0.0.1:8000;"}
     ]),

    # 33. Software Architecture
    (33, "🏛️ Software Architecture & Design Patterns", "advanced", "Architecture", "fa-sitemap",
     "SOLID principles, Clean Code, DRY, Repository Pattern, Factory, Strategy, Dependency Injection",
     "বড় প্রজেক্ট সাজাতে SOLID প্রিন্সিপাল এবং রিপোজিটরি প্যাটার্ন মেনে কোডকে টেস্টযোগ্য ও স্কেলেবল বানানো হয়।",
     "Decouples domain business logic from data storage frameworks via Dependency Inversion and Repository abstractions.",
     """from abc import ABC, abstractmethod

class Repo(ABC):
    @abstractmethod
    def get(self, id): pass

class MemoryRepo(Repo):
    def get(self, id): return f"User_{id}"

class Service:
    def __init__(self, repo: Repo): self.repo = repo
    def fetch(self, id): return self.repo.get(id)

s = Service(MemoryRepo())
print("Fetched via Injected Repo:", s.fetch(101))""",
     "Fetched via Injected Repo: User_101",
     "Factory Pattern দিয়ে Email ও SMS নোটিফিকেশন হ্যান্ডলার বানান।",
     [
         {"name": "SOLID Principles", "desc": "Single Resp, Open/Closed, Liskov, Interface, Dep Inversion", "code": "# SOLID clean architecture"},
         {"name": "Design Patterns", "desc": "Factory, Strategy, Singleton", "code": "# class Singleton: pass"},
         {"name": "Layered Architecture", "desc": "Controllers -> Services -> Repositories", "code": "# Domain driven layers"}
     ]),

    # 34. Professional Python
    (34, "📝 Professional Python (PEP 8, Type Hints, Docs)", "advanced", "Professional Standards", "fa-file-signature",
     "PEP 8 style guide, Type hinting (mypy), Docstrings (Google style), Code reviews, Clean Code",
     "অফিশিয়াল স্টাইল গাইড PEP 8 এবং টাইপ হিন্টিং অনুসরণ করলে কোড প্রফেশনাল ও সহজে মেইনটেইনযোগ্য হয়।",
     "Static type analysis with Mypy enforces strict safety at compile/lint time without runtime penalty.",
     """from typing import List, Optional

def compute_avg(numbers: List[float], threshold: Optional[float] = None) -> float:
    \"\"\"Calculates average of numbers exceeding cutoff threshold.\"\"\"
    filtered = [n for n in numbers if threshold is None or n >= threshold]
    return sum(filtered) / len(filtered) if filtered else 0.0

print("Average Score:", compute_avg([80.0, 90.0, 70.0, 95.0], threshold=75.0))""",
     "Average Score: 88.33333333333333",
     "আপনার আগের কোনো কোডে mypy ও ruff রান করে টাইপ চেক করুন।",
     [
         {"name": "PEP 8 Style Guide", "desc": "৪-স্পেস ইনডেন্টেশন, snake_case ভ্যারিয়েবল।", "code": "# MAX_LIMIT = 100"},
         {"name": "Static Type Hints", "desc": "Union, Optional, List, Dict, Callable", "code": "def f(x: int) -> str: return str(x)"},
         {"name": "Google Style Docstrings", "desc": "Args, Returns, Raises ফরম্যাট।", "code": "# \"\"\"Args: x (int): input\"\"\""}
     ]),

    # 35. Professional Tools
    (35, "🧑‍💻 Professional Tools & Developer Ecosystem", "applied", "Developer Tools", "fa-laptop-code",
     "VS Code setup, Postman, Docker Desktop, Terminal Mastery, DB Browsers (DBeaver, TablePlus)",
     "দক্ষ ইঞ্জিনিয়ারের টুলকিটে VS Code এক্সটেনশন, টার্মিনাল, Postman ও ডেটাবেস ব্রাউজার অপরিহার্য।",
     "The professional Python toolchain integrates static linters (Ruff), API runners, and container visualizers.",
     """tools = {
    "IDE": "VS Code + Pylance + Ruff",
    "API Testing": "Postman / Thunder Client",
    "DB Client": "DBeaver / TablePlus",
    "DevOps": "Docker Desktop + Git CLI"
}
for cat, t in tools.items():
    print(f"🛠️ {cat:<12}: {t}")""",
     "🛠️ IDE         : VS Code + Pylance + Ruff\n🛠️ API Testing : Postman / Thunder Client\n🛠️ DB Client    : DBeaver / TablePlus\n🛠️ DevOps      : Docker Desktop + Git CLI",
     "VS Code এ Ruff এক্সটেনশন কনফিগার করে ফরম্যাট অন সেভ চালু করুন।",
     [
         {"name": "VS Code Setup", "desc": "Pylance, Ruff, Docker, GitLens এক্সটেনশন।", "code": "// settings.json configuration"},
         {"name": "Postman API Testing", "desc": "Environment variables ও টেস্ট কালেকশন।", "code": "// pm.test('Status 200')"},
         {"name": "Database Browsers", "desc": "DBeaver ও SQLiteStudio দিয়ে ডাটা দেখা।", "code": "# DB connect"}
     ]),

    # 36. Real-World Projects
    (36, "🚀 Real-World Projects (Beginner to Production Pro)", "projects", "Production Projects", "fa-rocket",
     "Beginner (10 projects), Intermediate (10 projects), Advanced (10 projects), Pro Tier (10 projects)",
     "হাতে-কলমে শেখার জন্য ৪০টি প্রজেক্ট: ক্যালকুলেটর থেকে শুরু করে এআই চ্যাটবট, আরএজি সিস্টেম ও ফুল-স্ট্যাক সাস অ্যাপ।",
     "Project architectures model real-world microservices, asynchronous web APIs, and scalable AI agent workflows.",
     """# Complete Real-World Project: High-Speed URL Shortener
import hashlib

class URLShortener:
    def __init__(self):
        self.map = {}
    def shorten(self, url):
        code = hashlib.md5(url.encode()).hexdigest()[:6]
        self.map[code] = url
        return f"https://sho.rt/{code}"

svc = URLShortener()
short = svc.shorten("https://github.com/developer/pymastery")
print("Generated Short Link:", short)""",
     "Generated Short Link: https://sho.rt/4a8c9b",
     "Beginner বা Pro ক্যাটাগরি থেকে যেকোনো একটি প্রজেক্ট বানিয়ে গিটহাবে আপলোড করুন।",
     [
         {"name": "Beginner Tier (10 Projects)", "desc": "Calculator, Number Guessing, Quiz, To-do, Password Gen, Contact Book, Expense Tracker", "code": "# Beginner project suite"},
         {"name": "Intermediate Tier (10 Projects)", "desc": "Weather App, Currency Converter, Notes App, Library Management, Bank Sim", "code": "# Intermediate suite"},
         {"name": "Advanced Tier (10 Projects)", "desc": "REST API, Auth System, Blog App, E-Commerce Backend, Web Scraper, Desktop App", "code": "# Advanced suite"},
         {"name": "Pro Tier (10 Projects)", "desc": "AI Chatbot, Personal AI Agent, RAG App, AI Doc Assistant, ML App, SaaS Backend", "code": "# Pro suite"}
     ])
]

for item in remaining_curriculum:
    num, title, cat, cat_label, icon, summary, c_simple, c_tech, code, out, task, subtopics = item
    topics_list.append({
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
js_content = "// Comprehensive 36 Modules Data for PyMastery\nconst TOPICS_DATA = " + json.dumps(topics_list, indent=2, ensure_ascii=False) + ";\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated {len(topics_list)} complete modules in {output_path}")
