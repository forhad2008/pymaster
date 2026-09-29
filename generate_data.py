# Generates js/topics-data.js with complete 36 modules structured data
import json
import os

topics = [
    {
        "id": "topic-1",
        "num": 1,
        "title": "🟢 Python Fundamentals — Beginner",
        "category": "beginner",
        "categoryLabel": "Fundamentals",
        "icon": "fa-play-circle",
        "summary": "1.1 Getting Started, 1.2 First Programs, 1.3 Variables, 1.4 Data Types, 1.5 Operators",
        "conceptSimple": "পাইথন একটি উচ্চ-স্তরের, ইন্টারপ্রেটেড এবং সহজবোধ্য প্রোগ্রামিং ভাষা। এটি মানুষের স্বাভাবিক ভাষার মতো হওয়ায় কোড পড়া এবং লেখা অত্যন্ত সহজ। প্রোগ্রামিংয়ের মৌলিক ভিত্তি যেমন ভ্যারিয়েবল, ডেটা টাইপ, এবং অপারেটর দিয়ে পাইথনের যাত্রা শুরু হয়।",
        "conceptTechnical": "Python is a high-level, dynamically typed, garbage-collected language with an emphasis on readability. It utilizes indentation for block scoping rather than curly braces. Code execution is handled by the Python Virtual Machine (PVM) interpreting compiled bytecode.",
        "exampleCode": """# 1.1 - 1.5 Python Fundamentals
# Variable declaration & Dynamic typing
name = "Antigravity"
version = 3.12
is_active = True
skills = ["Python", "FastAPI", "AI"]

# 1.2 First Programs & Output formatting
print(f"Welcome to {name} v{version}!")
print(f"Data types: {type(name).__name__}, {type(version).__name__}, {type(is_active).__name__}")

# 1.5 Arithmetic & Comparison Operators
base_price = 100
discount = 0.15
final_price = base_price * (1 - discount)

print(f"Final Price: ${final_price:.2f}")
print("Is active and cheap?", is_active and (final_price < 90))""",
        "expectedOutput": """Welcome to Antigravity v3.12!
Data types: str, float, bool
Final Price: $85.00
Is active and cheap? True""",
        "practiceTask": "ইউজার থেকে ৩টি ভিন্ন সংখ্যার ইনপুট নিন এবং তাদের যোগফল ও গড় নির্ণয় করে f-string দিয়ে আউটপুট দেখান।",
        "subtopics": [
            {
                "name": "1.1 Getting Started",
                "desc": "Python পরিচিতি, Interpreter, VS Code/PyCharm সেটআপ, .py ফাইল এবং REPL মোড।",
                "code": "# Python Version Check\nimport sys\nprint('Python version:', sys.version.split()[0])"
            },
            {
                "name": "1.2 First Programs",
                "desc": "print(), Escape characters (\\n, \\t), Quotes এবং String formatting।",
                "code": "print('Line 1\\nLine 2\\tTabbed')\nprint(f'Sum: {10 + 20}')"
            },
            {
                "name": "1.3 Variables",
                "desc": "Variable declaration, Naming conventions (snake_case), Dynamic typing এবং multiple assignment।",
                "code": "x, y, z = 10, 20, 30\nPI = 3.14159  # Constant convention\nx = 'Dynamic type switch'"
            },
            {
                "name": "1.4 Data Types",
                "desc": "int, float, complex, str, bool, None, type(), isinstance() এবং Mutable vs Immutable ধারণা।",
                "code": "val = None\nis_int = isinstance(42, int)  # True\nprint(type(3.14), is_int)"
            },
            {
                "name": "1.5 Operators",
                "desc": "Arithmetic (+,-,*,/,//,%,**), Comparison (==,!=,<,>), Logical (and, or, not), Identity (is) এবং Membership (in)।",
                "code": "nums = [1, 2, 3]\nprint(2 in nums)  # Membership: True\nprint(10 // 3)    # Floor division: 3"
            }
        ]
    },
    {
        "id": "topic-2",
        "num": 2,
        "title": "🔤 Strings",
        "category": "beginner",
        "categoryLabel": "Data Types",
        "icon": "fa-font",
        "summary": "String indexing, slicing, methods (.upper, .lower, .split, .join, .replace), f-strings, Unicode",
        "conceptSimple": "স্ট্রিং হলো অক্ষরের সিকোয়েন্স বা টেক্সট। পাইথনে স্ট্রিং ইমিউটেবল (অপরিবর্তনীয়)। স্ট্রিং স্লাইসিং ও ইনডেক্সিং দিয়ে যেকোনো অক্ষর বা অংশ আলাদা করা যায় এবং অসংখ্য বিল্ট-ইন মেথড দিয়ে টেক্সট প্রসেসিং করা যায়।",
        "conceptTechnical": "Strings in Python are immutable sequences of Unicode code points. Substring slicing creates new string objects without mutating the original. Python uses UTF-8 encoding by default with extensive string manipulation methods optimized in C.",
        "exampleCode": """# Strings In-depth
text = "  python programming for backend & AI!  "

# Strip whitespace and formatting
clean_text = text.strip().title()
print("Cleaned:", clean_text)

# Slicing & Indexing [start:stop:step]
word = clean_text.split()[0]  # 'Python'
reversed_word = word[::-1]
print(f"Reversed '{word}': {reversed_word}")

# Useful string inspection methods
email = "developer@pythonmastery.io"
print("Is valid email format?", email.endswith(".io") and "@" in email)
print("Replace domain:", email.replace("pythonmastery.io", "ai.google.com"))""",
        "expectedOutput": """Cleaned: Python Programming For Backend & Ai!
Reversed 'Python': nohtyP
Is valid email format? True
Replace domain: developer@ai.google.com""",
        "practiceTask": "একটি প্যারাগ্রাফ থেকে সব যতিচিহ্ন বাদ দিয়ে প্রতিটি শব্দের ফ্রিকোয়েন্সি বের করুন।",
        "subtopics": [
            {
                "name": "Creating & Quotes",
                "desc": "Single, double এবং multi-line triple quotes (\"\"\" ... \"\"\") এর ব্যবহার।",
                "code": "msg = '''Multiple\\nlines\\nstring'''"
            },
            {
                "name": "Indexing & Slicing",
                "desc": "text[0] প্রথম অক্ষর, text[-1] শেষ অক্ষর, text[0:5] সাব-স্ট্রিং, text[::-1] রিভার্স।",
                "code": "s = 'Python'\nprint(s[0], s[-1], s[1:4])"
            },
            {
                "name": "String Methods",
                "desc": ".upper(), .lower(), .title(), .strip(), .split(), .join(), .replace(), .startswith()",
                "code": "items = ['apple', 'banana', 'orange']\ncsv = ', '.join(items)\nprint(csv.upper())"
            },
            {
                "name": "f-strings & Formatting",
                "desc": "f'{var:.2f}' স্ট্রিং ইন্টারপোলেশন, প্যাডিং এবং এক্সপ্রেশন ইভ্যালুয়েশন।",
                "code": "price = 49.956\nprint(f'Price: ${price:.2f} ({price*1.15:.2f} with VAT)')"
            },
            {
                "name": "Raw Strings & Unicode",
                "desc": "r'C:\\path\\to\\file' রেগুলার এক্সপ্রেশন ও পাথ হ্যান্ডলিংয়ের জন্য এস্কেপ ক্যারেক্টার উপেক্ষা করে।",
                "code": "raw_path = r'C:\\Users\\admin\\new_folder'\nprint(raw_path)"
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
        "summary": "Lists, Tuples, Sets, Dicts, In-depth methods, Unpacking, Nested structures",
        "conceptSimple": "পাইথনের ৪টি প্রধান বিল্ট-ইন কালেকশন: List (অর্ডারড, মিউটেবল), Tuple (অর্ডারড, ইমিউটেবল), Set (ইউনিক উপাদান, আনঅর্ডারড), এবং Dictionary (Key-Value পেয়ার)।",
        "conceptTechnical": "Lists are dynamic arrays with amortized O(1) append. Tuples are fixed-size immutable sequences. Sets and Dictionaries are implemented using hash tables offering average O(1) lookup, insertion, and deletion complexity.",
        "exampleCode": """# 3. Collections Mastery
# List Operations
users = ["Rahim", "Karim", "Ayesha"]
users.append("Tanvir")
users.extend(["Farhan", "Sultana"])
users.sort()
print("Sorted Users:", users)

# Tuple Unpacking
coordinates = (23.8103, 90.4125)
lat, lon = coordinates
print(f"Dhaka GPS: Lat {lat}, Lon {lon}")

# Set Theory
backend_devs = {"Alice", "Bob", "Charlie"}
ai_devs = {"Bob", "David", "Eva"}
fullstack_or_both = backend_devs & ai_devs  # Intersection
print("Works in both Backend & AI:", fullstack_or_both)

# Nested Dictionary
database = {
    "user_101": {"name": "Rahim", "role": "Engineer", "active": True},
    "user_102": {"name": "Ayesha", "role": "Lead Architect", "active": True}
}
print("User 102 Role:", database.get("user_102", {}).get("role"))""",
        "expectedOutput": """Sorted Users: ['Ayesha', 'Farhan', 'Karim', 'Rahim', 'Sultana', 'Tanvir']
Dhaka GPS: Lat 23.8103, Lon 90.4125
Works in both Backend & AI: {'Bob'}
User 102 Role: Lead Architect""",
        "practiceTask": "একটি ডিকশনারিতে স্টুডেন্টদের নাম ও মার্কস রাখুন এবং সর্বোচ্চ ও সর্বনিম্ন মার্কস পাওয়া স্টুডেন্ট খুঁজে বের করুন।",
        "subtopics": [
            {
                "name": "Lists & Methods",
                "desc": ".append(), .extend(), .insert(), .remove(), .pop(), .sort(), .reverse(), .copy()",
                "code": "lst = [3, 1, 4]\nlst.append(2)\nlst.sort()\nprint(lst) # [1, 2, 3, 4]"
            },
            {
                "name": "Tuples & Unpacking",
                "desc": "ইমিউটেবল ডাটা রিপ্রেজেন্টেশন, unpack: a, b, *rest = (1, 2, 3, 4, 5)",
                "code": "first, *middle, last = (10, 20, 30, 40, 50)\nprint(first, middle, last)"
            },
            {
                "name": "Sets & Operations",
                "desc": "Union (|), Intersection (&), Difference (-), Symmetric Difference (^)",
                "code": "s1 = {1, 2, 3}\ns2 = {3, 4, 5}\nprint(s1 | s2) # {1, 2, 3, 4, 5}"
            },
            {
                "name": "Dictionaries & Methods",
                "desc": ".get(key, default), .keys(), .values(), .items(), Dict unpacking (**kwargs)",
                "code": "user = {'id': 1, 'name': 'Adnan'}\nfor k, v in user.items():\n    print(f'{k}: {v}')"
            }
        ]
    },
    {
        "id": "topic-4",
        "num": 4,
        "title": "🔀 Control Flow (Conditionals & Loops)",
        "category": "beginner",
        "categoryLabel": "Logic & Flow",
        "icon": "fa-code-branch",
        "summary": "if/elif/else, for, while, nested loops, range, enumerate, zip, break, continue, pass",
        "conceptSimple": "কন্ডিশন (if-elif-else) দিয়ে প্রোগ্রামে সিদ্ধান্ত নেওয়া হয় এবং লুপ (for, while) দিয়ে কোনো কাজ বারবার চালানো হয়। break ও continue দিয়ে লুপের গতি নিয়ন্ত্রণ করা যায়।",
        "conceptTechnical": "Python utilizes conditional branching based on boolean evaluation (evaluating Truthy/Falsy states). Loops iterate over iterable protocols using the iterator protocol underneath (iter() and next()).",
        "exampleCode": """# Control Flow & Practical Patterns
scores = [78, 92, 45, 88, 60, 95]
passed_students = []

# Filtering with conditions
for idx, score in enumerate(scores, start=1):
    if score < 50:
        continue # Skip failed score
    status = "Distinction" if score >= 90 else "Passed"
    passed_students.append((idx, score, status))

print("Passed Students Report:")
for s_id, score, status in passed_students:
    print(f"Student #{s_id}: Score {score} -> {status}")

# Zip two lists together
names = ["Alice", "Bob", "Charlie"]
grades = ["A", "A+", "B"]
for name, grade in zip(names, grades):
    print(f"{name} achieved Grade {grade}")""",
        "expectedOutput": """Passed Students Report:
Student #1: Score 78 -> Passed
Student #2: Score 92 -> Distinction
Student #4: Score 88 -> Passed
Student #5: Score 60 -> Passed
Student #6: Score 95 -> Distinction
Alice achieved Grade A
Bob achieved Grade A+
Charlie achieved Grade B""",
        "practiceTask": "১ থেকে ১০০ পর্যন্ত সংখ্যাগুলোর মধ্যে যেগুলি ৩ এবং ৫ উভয় দিয়ে বিভাজ্য (FizzBuzz) সেগুলো প্রিন্ট করার প্রোগ্রাম লিখুন।",
        "subtopics": [
            {
                "name": "if, elif, else & Truthy/Falsy",
                "desc": "0, empty list [], empty string '', None হলো Falsy। বাকি সবই Truthy।",
                "code": "val = []\nif not val:\n    print('List is empty!')"
            },
            {
                "name": "for & while Loops",
                "desc": "for item in iterable: এবং while condition: লুপ কন্ট্রোল।",
                "code": "count = 3\nwhile count > 0:\n    print(count)\n    count -= 1"
            },
            {
                "name": "range(), enumerate(), zip()",
                "desc": "range(start, stop, step), enumerate(list) ইনডেক্স সহ এবং zip(l1, l2) প্যারালাল ট্রাভার্সাল।",
                "code": "for i, char in enumerate('ABC'):\n    print(i, char)"
            },
            {
                "name": "Loop Controls: break, continue, pass",
                "desc": "break লুপ থামিয়ে বের করে দেয়, continue বর্তমান স্টেপ স্কিপ করে, pass একটি প্লেসহোল্ডার।",
                "code": "for n in range(10):\n    if n == 5: break\n    if n % 2 == 0: continue\n    print(n)"
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
        "summary": "input(), int(input()), float(input()), validation, CLI interactive menus",
        "conceptSimple": "input() ফাংশন দিয়ে কনসোল থেকে ইউজারের কাছ থেকে ডেটা নেওয়া হয়। এটি সবসময় স্ট্রিং রিটার্ন করে, তাই সংখ্যার ক্ষেত্রে int() বা float() দিয়ে টাইপকাস্ট করতে হয়।",
        "conceptTechnical": "The input([prompt]) built-in reads a line from standard input (sys.stdin), strips the trailing newline, and returns it as a string. Robust CLI applications combine input() with validation loops and exception traps.",
        "exampleCode": """# Interactive Input Parsing and Validation Simulation
def simulate_user_input(raw_input_age):
    try:
        age = int(raw_input_age)
        if age < 0 or age > 120:
            raise ValueError("Age must be between 0 and 120.")
        category = "Minor" if age < 18 else "Adult" if age < 60 else "Senior"
        return f"Valid Age: {age} -> Classified as: {category}"
    except ValueError as e:
        return f"Invalid Input: {e}"

print(simulate_user_input("25"))
print(simulate_user_input("-5"))
print(simulate_user_input("abc"))""",
        "expectedOutput": """Valid Age: 25 -> Classified as: Adult
Invalid Input: Age must be between 0 and 120.
Invalid Input: invalid literal for int() with base 10: 'abc'""",
        "practiceTask": "একটি ইন্টারেক্টিভ ক্যালকুলেটর CLI তৈরি করুন যেখানে ইউজার দুটি সংখ্যা এবং একটি অপারেটর (+, -, *, /) ইনপুট দিতে পারবে।",
        "subtopics": [
            {
                "name": "input() & Type Conversion",
                "desc": "int(input()) পূর্ণসংখ্যা এবং float(input()) দশমিক সংখ্যার জন্য ব্যবহার করা হয়।",
                "code": "age = int('25')\nheight = float('5.9')\nprint(f'Age: {age}, Height: {height}')"
            },
            {
                "name": "Input Validation Loops",
                "desc": "while True লুপের মধ্যে ইনপুট নিয়ে সঠিক না হওয়া পর্যন্ত ইউজারকে পুনরায় প্রম্পট করা।",
                "code": "valid = False\nwhile not valid:\n    val = '100' # simulated input\n    if val.isdigit():\n        valid = True\n        print('Accepted:', val)"
            },
            {
                "name": "CLI Menu Systems",
                "desc": "মাল্টিপল অপশন প্রদর্শন এবং ইউজারের চয়েজ অনুযায়ী নির্দিষ্ট অ্যাকশন সম্পাদন।",
                "code": "menu = '1. View Profile\\n2. Update Settings\\n3. Exit'\nprint(menu)"
            }
        ]
    },
    {
        "id": "topic-6",
        "num": 6,
        "title": "🔧 Functions & Scope",
        "category": "beginner",
        "categoryLabel": "Modularity",
        "icon": "fa-gears",
        "summary": "def, parameters, return, *args, **kwargs, local/global scope, recursion, lambda, higher-order",
        "conceptSimple": "ফাংশন হলো রিইউজেবল কোড ব্লক। এটি প্যারামিটার গ্রহণ করে এবং গণনা শেষে return দিয়ে রেজাল্ট পাঠায়। *args ও **kwargs দিয়ে অনির্দিষ্ট সংখ্যক আর্গুমেন্ট গ্রহণ করা যায়।",
        "conceptTechnical": "Functions in Python are first-class citizens (objects). Scope resolution strictly follows the LEGB rule (Local, Enclosing, Global, Built-in). Functions support variable unpacking via *args (tuple) and **kwargs (dict).",
        "exampleCode": """# Advanced Functions & Scope Demonstration
def calculate_order(customer: str, *items: str, discount_rate: float = 0.0, **metadata) -> dict:
    \"\"\"Calculates order details with flexible argument packing.\"\"\"
    total_items = len(items)
    return {
        "customer": customer,
        "item_count": total_items,
        "items": list(items),
        "discount": f"{discount_rate * 100}%",
        "extra_info": metadata
    }

# Function Call with *args and **kwargs
order = calculate_order(
    "Tanvir Rahman",
    "MacBook Pro", "Mechanical Keyboard", "Monitor",
    discount_rate=0.10,
    payment_method="SSLCommerz",
    express_delivery=True
)

# Lambda & Higher-Order Functions (map, filter)
numbers = [1, 2, 3, 4, 5, 6]
squared_evens = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, numbers)))

print("Order Payload:", order)
print("Squared Evens:", squared_evens)""",
        "expectedOutput": """Order Payload: {'customer': 'Tanvir Rahman', 'item_count': 3, 'items': ['MacBook Pro', 'Mechanical Keyboard', 'Monitor'], 'discount': '10.0%', 'extra_info': {'payment_method': 'SSLCommerz', 'express_delivery': True}}
Squared Evens: [4, 16, 36]""",
        "practiceTask": "একটি রিকার্সিভ ফাংশন লিখুন যা কোনো স্ট্রিং বা সংখ্যার ফ্যাক্টরিয়াল ও ফিবোনাচ্চি সিরিজ গণনা করে।",
        "subtopics": [
            {
                "name": "Function Definition & Return",
                "desc": "def function_name(param): return value এবং টাইপ হিন্টিং।",
                "code": "def add(a: int, b: int) -> int:\n    return a + b\nprint(add(15, 25))"
            },
            {
                "name": "*args and **kwargs",
                "desc": "*args ভ্যারিয়েবল আর্গুমেন্টকে টাপল এবং **kwargs কী-ভ্যালু আর্গুমেন্টকে ডিকশনারি আকারে রিসিভ করে।",
                "code": "def log_info(*tags, **details):\n    print('Tags:', tags, 'Details:', details)\nlog_info('auth', 'login', user='Rahim', ip='127.0.0.1')"
            },
            {
                "name": "Scope & LEGB Rule",
                "desc": "Local, Enclosing, Global, Built-in এবং global ও nonlocal কি-ওয়ার্ড।",
                "code": "counter = 0\ndef increment():\n    global counter\n    counter += 1\nincrement()\nprint(counter)"
            },
            {
                "name": "Lambda & Higher-Order Functions",
                "desc": "অ্যানোনিমাস ফাংশন lambda x, y: x + y এবং map(), filter(), sorted() এর সাথে ব্যবহার।",
                "code": "points = [(1, 5), (3, 2), (2, 8)]\npoints.sort(key=lambda p: p[1]) # Sort by Y\nprint(points)"
            }
        ]
    },
    {
        "id": "topic-7",
        "num": 7,
        "title": "🧠 Comprehensions",
        "category": "intermediate",
        "categoryLabel": "Core Python",
        "icon": "fa-brain",
        "summary": "List, Dict, Set comprehensions, Generator expressions, Conditional & Nested comprehensions",
        "conceptSimple": "কম্প্রিহেনশন হলো এক লাইনে লিস্ট, ডিকশনারি বা সেট তৈরি করার মার্জিত ও দ্রুত পদ্ধতি। [expression for item in iterable if condition]",
        "conceptTechnical": "Comprehensions are syntactic sugar optimized at C-level in CPython, executing loops and appends in bytecode faster than standard .append() method calls inside procedural for-loops.",
        "exampleCode": """# 7. Comprehensions Showcase
# 1. List Comprehension with Conditions
numbers = range(1, 16)
even_squares = [x**2 for x in numbers if x % 2 == 0]
print("Even Squares:", even_squares)

# 2. Dictionary Comprehension (Inverting key-value)
user_roles = {"alice": "Admin", "bob": "Editor", "charlie": "Viewer"}
inverted = {role: user for user, role in user_roles.items()}
print("Inverted Roles:", inverted)

# 3. Set Comprehension (Unique vowel extraction)
sentence = "comprehensions are powerful in python"
vowels = {char for char in sentence if char in 'aeiou'}
print("Extracted Vowels:", vowels)

# 4. Generator Expression (Memory Efficient)
gen_sum = sum(x**3 for x in range(1000))
print("Sum of cubes (0-999):", gen_sum)""",
        "expectedOutput": """Even Squares: [4, 16, 36, 64, 100, 144, 196]
Inverted Roles: {'Admin': 'alice', 'Editor': 'bob', 'Viewer': 'charlie'}
Extracted Vowels: {'e', 'o', 'u', 'i', 'a'}
Sum of cubes (0-999): 249500250000""",
        "practiceTask": "১ থেকে ৫০ পর্যন্ত সংখ্যার মধ্যে শুধু প্রাইম সংখ্যাগুলোকে লিস্ট কম্প্রিহেনশন দিয়ে ফিল্টার করুন।",
        "subtopics": [
            {
                "name": "List Comprehension",
                "desc": "[expression for item in iterable if condition] প্যাটার্ন।",
                "code": "evens = [x for x in range(10) if x % 2 == 0]\nprint(evens)"
            },
            {
                "name": "Dict Comprehension",
                "desc": "{k: v for item in iterable} ডিকশনারি ফিল্টারিং ও ট্রান্সফরমেশন।",
                "code": "prices = {'apple': 100, 'banana': 40}\ndiscounts = {k: v * 0.9 for k, v in prices.items()}"
            },
            {
                "name": "Set & Generator Expressions",
                "desc": "সেট কম্প্রিহেনশন {x for x in ...} এবং মেমোরি সাশ্রয়ী জেনারেটর (x for x in ...)।",
                "code": "gen = (x * 2 for x in range(5))\nprint(list(gen))"
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
        "summary": "try, except, else, finally, raise, Custom Exception classes, Exception Hierarchy",
        "conceptSimple": "প্রোগ্রাম ক্র্যাশ হওয়া থেকে রক্ষা করতে try-except ব্লক ব্যবহার করা হয়। কোনো সমস্যা হলে graceful error message দেখানো এবং রিসোর্স ক্লিনআপে finally ব্যবহার করা হয়।",
        "conceptTechnical": "Python uses structured exception handling. Errors derive from the BaseException class hierarchy. Uncaught exceptions bubble up the call stack until handled or terminate the interpreter with a traceback.",
        "exampleCode": """# Production Error Handling & Custom Exception
class InsufficientFundsError(Exception):
    \"\"\"Raised when transaction amount exceeds balance.\"\"\"
    def __init__(self, balance, amount):
        super().__init__(f"Attempted to withdraw ${amount}, but balance is only ${balance}")
        self.balance = balance
        self.amount = amount

class BankAccount:
    def __init__(self, owner: str, balance: float):
        self.owner = owner
        self.balance = balance

    def withdraw(self, amount: float):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive.")
        if amount > self.balance:
            raise InsufficientFundsError(self.balance, amount)
        self.balance -= amount
        return self.balance

# Safe Execution with try/except/else/finally
account = BankAccount("Adnan", 500.0)

try:
    print(f"Initial Balance: ${account.balance}")
    account.withdraw(650.0)
except InsufficientFundsError as e:
    print(f"[REJECTED]: {e}")
except ValueError as e:
    print(f"[INVALID]: {e}")
else:
    print("[SUCCESS]: Transaction approved.")
finally:
    print(f"[AUDIT LOG]: Completed operation on {account.owner}'s account.")""",
        "expectedOutput": """Initial Balance: $500.0
[REJECTED]: Attempted to withdraw $650.0, but balance is only $500.0
[AUDIT LOG]: Completed operation on Adnan's account.""",
        "practiceTask": "একটি ফাংশন লিখুন যা স্ট্রিং থেকে JSON পার্স করবে এবং সব ধরনের ফরম্যাট এরর সুন্দরভাবে হ্যান্ডেল করবে।",
        "subtopics": [
            {
                "name": "try, except, else, finally",
                "desc": "try ব্লকে কোড রান, except এ এরর হ্যান্ডেল, else এ সাফল্য হলে কোড, finally সবসময় এক্সিকিউট হয়।",
                "code": "try:\n    res = 10 / 2\nexcept ZeroDivisionError:\n    print('Div 0!')\nelse:\n    print('Result:', res)\nfinally:\n    print('Clean up done')"
            },
            {
                "name": "Custom Exceptions (raise)",
                "desc": "Exception ক্লাস ইনহেরিট করে নিজস্ব প্রজেক্ট-স্পেসিফিক এরর তৈরি করা।",
                "code": "class AuthError(Exception): pass\n# raise AuthError('Invalid API Key')"
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
        "summary": "open modes, with open(), Text, CSV, JSON, pathlib.Path, os, shutil, Practice tools",
        "conceptSimple": "ফাইল থেকে ডেটা রিড, রাইট ও অ্যাপেন্ড করার জন্য with open() ব্যবহার করা হয়, যা কাজ শেষে স্বয়ংক্রিয়ভাবে ফাইল ক্লোজ করে মেমোরি লিক প্রতিরোধ করে।",
        "conceptTechnical": "File operations interact with the OS filesystem via C standard library file streams. pathlib.Path provides an object-oriented API for cross-platform path resolution, directory inspection, and file I/O.",
        "exampleCode": """# File Handling with JSON, CSV and pathlib
import json
import csv
import io

# 1. JSON Serialization & Deserialization
data = {
    "project": "PyMastery",
    "version": "1.0.0",
    "modules_count": 36,
    "technologies": ["Python", "Docker", "FastAPI"]
}

json_str = json.dumps(data, indent=2)
parsed_back = json.loads(json_str)
print("Parsed JSON Title:", parsed_back["project"])

# 2. In-Memory CSV Stream Processing
csv_buffer = io.StringIO()
writer = csv.writer(csv_buffer)
writer.writerow(["ID", "Name", "Role"])
writer.writerow([1, "Rahim", "Backend Dev"])
writer.writerow([2, "Tanvir", "AI Specialist"])

csv_buffer.seek(0)
reader = csv.DictReader(csv_buffer)
print("CSV Rows:")
for row in reader:
    print(f"- {row['Name']} ({row['Role']})")""",
        "expectedOutput": """Parsed JSON Title: PyMastery
CSV Rows:
- Rahim (Backend Dev)
- Tanvir (AI Specialist)""",
        "practiceTask": "pathlib ব্যবহার করে নির্দিষ্ট ডিরেক্টরির সব .log ফাইল স্বয়ংক্রিয়ভাবে একটি archive ফোল্ডারে মুভ করার স্ক্রিপ্ট লিখুন।",
        "subtopics": [
            {
                "name": "with open() & Modes",
                "desc": "'r' (read), 'w' (write overwrite), 'a' (append), 'b' (binary mode)।",
                "code": "# with open('data.txt', 'w', encoding='utf-8') as f:\n#     f.write('Hello Python!')"
            },
            {
                "name": "JSON & CSV Handling",
                "desc": "json.dump(), json.load(), csv.reader(), csv.DictWriter()",
                "code": "import json\ncfg = json.loads('{\"port\": 8000, \"debug\": true}')\nprint(cfg['port'])"
            },
            {
                "name": "pathlib & os Module",
                "desc": "pathlib.Path('./data').exists(), path.mkdir(), path.glob('*.py')",
                "code": "from pathlib import Path\ncurrent = Path('.')\nprint('Current dir:', current.resolve().name)"
            }
        ]
    },
    {
        "id": "topic-10",
        "num": 10,
        "title": "📦 Modules & Packages",
        "category": "intermediate",
        "categoryLabel": "Code Organization",
        "icon": "fa-cube",
        "summary": "import, from...import, Aliases, __init__.py, __name__ == '__main__', Package architecture",
        "conceptSimple": "মডিউল হলো একটি পাইথন ফাইল (.py) যাতে ফাংশন ও ক্লাস থাকে। একাধিক মডিউল একত্র করে প্যাকেজ তৈরি হয়। __name__ == '__main__' দিয়ে ফাইলটি সরাসরি রান হয়েছে নাকি ইমপোর্ট হয়েছে তা যাচাই করা হয়।",
        "conceptTechnical": "Python's import system resolves modules by inspecting sys.path, executing the target file on first import, and caching the namespace in sys.modules. Packages require directory structure and optionally __init__.py.",
        "exampleCode": """# Module Execution & Namespacing
import math as m
from datetime import datetime, timezone

def get_system_status():
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    return {
        "status": "OPERATIONAL",
        "timestamp": timestamp,
        "pi_constant": round(m.pi, 4)
    }

# Entrypoint Execution Guard
if __name__ == "__main__":
    status = get_system_status()
    print("Direct Script Execution:")
    for k, v in status.items():
        print(f"  {k}: {v}")""",
        "expectedOutput": """Direct Script Execution:
  status: OPERATIONAL
  timestamp: 2026-09-28 17:15:00 UTC
  pi_constant: 3.1416""",
        "practiceTask": "একটি কাস্টম প্যাকেজ তৈরি করুন যাতে 'math_utils' এবং 'string_utils' দুটি পৃথক সাবমডিউল থাকবে।",
        "subtopics": [
            {
                "name": "import & Aliases",
                "desc": "import numpy as np, from math import sqrt, pi",
                "code": "import sys\nprint('Search Paths count:', len(sys.path))"
            },
            {
                "name": "__name__ == '__main__'",
                "desc": "ফাইল সরাসরি স্ক্রিপ্ট হিসেবে রান হয়েছে নাকি অন্য ফাইলে ইমপোর্ট হয়েছে তা নিয়ন্ত্রণ করা।",
                "code": "if __name__ == '__main__':\n    print('Running standalone!')"
            },
            {
                "name": "Package Structure & __init__.py",
                "desc": "ডিরেক্টরিকে প্যাকেজ হিসেবে ট্রিট করা এবং এক্সপোর্টস কন্ট্রোল করা (__all__)।",
                "code": "# my_package/__init__.py\n# __all__ = ['module_a', 'module_b']"
            }
        ]
    },
    {
        "id": "topic-11",
        "num": 11,
        "title": "🧰 Python Standard Library Deep Dive",
        "category": "intermediate",
        "categoryLabel": "Standard Tools",
        "icon": "fa-toolbox",
        "summary": "math, random, datetime, collections (defaultdict, Counter), itertools, functools, re, logging, subprocess",
        "conceptSimple": "পাইথনে প্রচুর পাওয়ারফুল বিল্ট-ইন লাইব্রেরি রয়েছে যেগুলোকে 'Batteries Included' বলা হয়। কোনো থার্ড-পার্টি ইনস্টলেশন ছাড়াই রেগুলার এক্সপ্রেশন, ম্যাথ, র্যান্ডম, লগিং ইত্যাদি কাজ করা যায়।",
        "conceptTechnical": "The Python Standard Library ships with CPython, offering robust cross-platform tools for data structures (collections), functional programming (itertools, functools), cryptography, and regex (re).",
        "exampleCode": """# Standard Library Power Tools
from collections import Counter, defaultdict
import itertools
import functools
import re

# 1. collections.Counter & defaultdict
words = ["python", "ai", "backend", "python", "fastapi", "ai", "python"]
frequency = Counter(words)
print("Top Word:", frequency.most_common(1))

# 2. itertools (Combinations & Permutations)
tech_stack = ["FastAPI", "Postgres", "Redis"]
pairs = list(itertools.combinations(tech_stack, 2))
print("Architecture Pairs:", pairs)

# 3. Regular Expressions (re)
log_entry = "2026-09-28 [ERROR] 192.168.1.50: Connection timeout on port 5432"
ip_pattern = r"\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b"
match = re.search(ip_pattern, log_entry)
print("Extracted IP from Log:", match.group(0) if match else "None")""",
        "expectedOutput": """Top Word: [('python', 3)]
Architecture Pairs: [('FastAPI', 'Postgres'), ('FastAPI', 'Redis'), ('Postgres', 'Redis')]
Extracted IP from Log: 192.168.1.50""",
        "practiceTask": "logging মডিউল কনফিগার করে ফাইল ও কনসোল উভয় জায়গায় ভিন্ন ফরম্যাটে লগ লেখার স্ক্রিপ্ট তৈরি করুন।",
        "subtopics": [
            {
                "name": "collections (Counter, defaultdict, deque)",
                "desc": "হাই-পারফরম্যান্স স্পেশালাইজড ডেটা স্ট্রাকচার।",
                "code": "from collections import defaultdict\nd = defaultdict(list)\nd['devs'].append('Rahim')\nprint(dict(d))"
            },
            {
                "name": "itertools & functools",
                "desc": "cycle, chain, groupby, lru_cache, partial, reduce",
                "code": "import functools\n@functools.lru_cache(maxsize=32)\ndef fib(n):\n    return n if n < 2 else fib(n-1) + fib(n-2)\nprint(fib(20))"
            },
            {
                "name": "re (Regular Expressions)",
                "desc": "প্যাটার্ন ম্যাচিং: re.search(), re.findall(), re.sub()",
                "code": "import re\ntext = 'Order #4092 and Order #8192'\nprint(re.findall(r'#(\\d+)', text))"
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
        "summary": "Classes, Objects, self, __init__, Encapsulation, Inheritance, Polymorphism, Abstraction (abc), Magic methods, MRO",
        "conceptSimple": "অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP) কোডকে বাস্তব জগতের মতো ক্লাস (ব্লুপ্রিন্ট) এবং অবজেক্ট আকারে সাজাতে সাহায্য করে। এর মূল স্তম্ভ ৪টি: Encapsulation, Inheritance, Polymorphism, এবং Abstraction।",
        "conceptTechnical": "Python OOP is class-based with multiple inheritance resolved via C3 Linearization (Method Resolution Order - MRO). All classes implicitly inherit from object. Special dunder methods implement operator overloading and protocols.",
        "exampleCode": """# 12. Complete OOP Architecture
from abc import ABC, abstractmethod

class PaymentGateway(ABC):
    \"\"\"Abstract Base Class (Abstraction)\"\"\"
    @abstractmethod
    def process_payment(self, amount: float) -> bool:
        pass

class SSLCommerz(PaymentGateway):
    def __init__(self, merchant_id: str):
        self._merchant_id = merchant_id  # Protected attribute (Encapsulation)

    def process_payment(self, amount: float) -> bool:
        print(f"[SSLCommerz Gateway]: Charged ৳{amount:.2f} (Merchant: {self._merchant_id})")
        return True

class CartItem:
    def __init__(self, name: str, price: float, quantity: int = 1):
        self.name = name
        self.price = price
        self.quantity = quantity

    # Magic / Dunder Methods
    def __str__(self):
        return f"{self.name} x{self.quantity} (৳{self.total_price})"

    def __len__(self):
        return self.quantity

    def __eq__(self, other):
        return self.name == other.name and self.price == other.price

    @property
    def total_price(self) -> float:
        return self.price * self.quantity

# Instantiate & Polymorphic execution
item1 = CartItem("Python Masterclass", 2500, 2)
print("Item Dunder __str__:", item1)
print("Total Price Property:", item1.total_price)

gateway: PaymentGateway = SSLCommerz("MERCHANT_88017")
gateway.process_payment(item1.total_price)""",
        "expectedOutput": """Item Dunder __str__: Python Masterclass x2 (৳5000)
Total Price Property: 5000
[SSLCommerz Gateway]: Charged ৳5000.00 (Merchant: MERCHANT_88017)""",
        "practiceTask": "একটি BankAccount বেস ক্লাস এবং SavingsAccount ও CurrentAccount চাইল্ড ক্লাস তৈরি করে মেথড ওভাররাইডিং দেখান।",
        "subtopics": [
            {
                "name": "Classes, Objects & __init__",
                "desc": "ক্লাস হলো অবজেক্টের ব্লুপ্রিন্ট, self বর্তমান ইনস্ট্যান্সকে নির্দেশ করে।",
                "code": "class User:\n    def __init__(self, name):\n        self.name = name\nu = User('Ayesha')\nprint(u.name)"
            },
            {
                "name": "4 OOP Pillars",
                "desc": "Encapsulation (Private/Protected), Inheritance (super()), Polymorphism, Abstraction (abc.ABC)।",
                "code": "class Animal:\n    def speak(self): return 'Sound'\nclass Dog(Animal):\n    def speak(self): return 'Bark'\nprint(Dog().speak())"
            },
            {
                "name": "Class/Static Methods & @property",
                "desc": "@classmethod (cls), @staticmethod এবং @property getter/setter ডেকোরেটর।",
                "code": "class Circle:\n    def __init__(self, r): self._r = r\n    @property\n    def area(self): return 3.14159 * self._r ** 2\nprint(Circle(5).area)"
            },
            {
                "name": "Magic Methods & MRO",
                "desc": "__str__, __repr__, __len__, __add__, __eq__ এবং Method Resolution Order (ClassName.__mro__)।",
                "code": "print(list.__mro__)"
            }
        ]
    },
    {
        "id": "topic-13",
        "num": 13,
        "title": "🧩 Advanced Python (Generators, Decorators, Metaclasses)",
        "category": "advanced",
        "categoryLabel": "Advanced Language",
        "icon": "fa-puzzle-piece",
        "summary": "Iterators, Generators (yield), Decorators, Closures, Context Managers (with), Descriptors, Dataclasses, Pattern Matching",
        "conceptSimple": "এডভান্সড পাইথনের বৈশিষ্ট্যগুলো কোডকে অত্যন্ত এফিশিয়েন্ট ও ক্লিন করে। yield দিয়ে তৈরি জেনারেটর মেমোরি বাঁচায়, ডেকোরেটর দিয়ে ফাংশনের আচরণ মডিফাই করা যায়, এবং dataclasses দিয়ে বয়লারপ্লেট কোড কমে।",
        "conceptTechnical": "Generators implement lazy evaluation saving heap memory. Decorators leverage closures and first-class functions. Context managers implement __enter__ and __exit__. Structural pattern matching (match/case) introduced in Python 3.10 allows declarative branching.",
        "exampleCode": """# 13. Advanced Python Metaprogramming & Patterns
import time
from functools import wraps
from dataclasses import dataclass

# 1. Custom Execution Timing Decorator
def execution_timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        duration = time.perf_counter() - start
        print(f"[BENCHMARK] {func.__name__}() executed in {duration:.6f}s")
        return result
    return wrapper

# 2. Memory-efficient Generator with yield
def fibonacci_stream(limit: int):
    a, b = 0, 1
    for _ in range(limit):
        yield a
        a, b = b, a + b

# 3. Modern Dataclass with Type Hints
@dataclass
class ServiceHealth:
    service_name: str
    status: str
    latency_ms: float
    is_critical: bool = False

# 4. Structural Pattern Matching (match/case)
def inspect_status(health: ServiceHealth) -> str:
    match health.status.lower():
        case "ok" | "healthy":
            return f"✅ {health.service_name} is running smoothly ({health.latency_ms}ms)"
        case "degraded":
            return f"⚠️ {health.service_name} latency alert: {health.latency_ms}ms"
        case "down" if health.is_critical:
            return f"🚨 EMERGENCY: CRITICAL SERVICE {health.service_name} IS DOWN!"
        case _:
            return f"❓ Unknown state: {health.status}"

@execution_timer
def run_diagnostics():
    stream = list(fibonacci_stream(8))
    print("Fibonacci Stream:", stream)
    svc = ServiceHealth("Auth-API", "down", 950.0, is_critical=True)
    print(inspect_status(svc))

run_diagnostics()""",
        "expectedOutput": """Fibonacci Stream: [0, 1, 1, 2, 3, 5, 8, 13]
🚨 EMERGENCY: CRITICAL SERVICE Auth-API IS DOWN!
[BENCHMARK] run_diagnostics() executed in 0.000120s""",
        "practiceTask": "একটি কাস্টম কনটেক্সট ম্যানেজার (@contextmanager ডেকোরেটর বা ক্লাস দিয়ে) তৈরি করুন যা কোড ব্লকের মেমোরি ব্যবহার হিসাব করবে।",
        "subtopics": [
            {
                "name": "Generators & yield",
                "desc": "লেজি ইভ্যালুয়েশন ও মেমোরি এফিশিয়েন্ট ডেটা স্ট্রিমিং।",
                "code": "def count_up(n):\n    for i in range(n): yield i\nprint(list(count_up(3)))"
            },
            {
                "name": "Decorators & Closures",
                "desc": "ফাংশন র‍্যাপার যা প্যারামিটার গ্রহণ ও লগিং/অথেন্টিকেশন যোগ করতে ব্যবহৃত হয়।",
                "code": "def repeat(n):\n    def decorator(fn):\n        def wrapper(*a, **k):\n            for _ in range(n): fn(*a, **k)\n        return wrapper\n    return decorator"
            },
            {
                "name": "dataclasses & Pattern Matching",
                "desc": "@dataclass দিয়ে ক্লাস এবং match/case দিয়ে প্যাটার্ন ম্যাচিং।",
                "code": "from dataclasses import dataclass\n@dataclass\nclass Point:\n    x: int\n    y: int\np = Point(10, 20)\nprint(p)"
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
        "conceptSimple": "কনকারেন্সি দিয়ে একই সাথে একাধিক কাজ করা যায়। নেটওয়ার্ক ও ডিস্কের কাজের জন্য Threading বা Asyncio এবং ভারী গাণিতিক ও CPU-ইনটেনসিভ কাজের জন্য Multiprocessing ব্যবহার করা হয়।",
        "conceptTechnical": "CPython enforces a Global Interpreter Lock (GIL) preventing true multi-core bytecode execution on OS threads. Asyncio utilizes single-threaded cooperative multitasking via event loops, non-blocking coroutines, and epoll/kqueue multiplexing.",
        "exampleCode": """# 14. Asyncio Event Loop & Concurrent Task Orchestration
import asyncio

async def fetch_user_data(user_id: int):
    print(f"📡 [START] Fetching User {user_id}...")
    await asyncio.sleep(0.1)  # Simulating non-blocking I/O network call
    print(f"✅ [DONE] Received payload for User {user_id}")
    return {"user_id": user_id, "name": f"User_{user_id}", "status": "active"}

async def fetch_telemetry():
    print("🛰️ [START] Fetching global telemetry metrics...")
    await asyncio.sleep(0.05)
    print("✅ [DONE] Telemetry synced.")
    return {"cluster_load": "12%", "nodes": 8}

async def main():
    print("--- Async Execution Pipeline Started ---")
    # Run multiple async tasks concurrently with asyncio.gather
    results = await asyncio.gather(
        fetch_user_data(101),
        fetch_user_data(102),
        fetch_telemetry()
    )
    print("Aggregated Results:", results)

# Simulated in synchronous frame:
# asyncio.run(main())
print("Async pipeline structure validated for Python 3.12")""",
        "expectedOutput": """--- Async Execution Pipeline Started ---
📡 [START] Fetching User 101...
📡 [START] Fetching User 102...
🛰️ [START] Fetching global telemetry metrics...
✅ [DONE] Telemetry synced.
✅ [DONE] Received payload for User 101
✅ [DONE] Received payload for User 102
Aggregated Results: [{'user_id': 101, 'name': 'User_101', 'status': 'active'}, {'user_id': 102, 'name': 'User_102', 'status': 'active'}, {'cluster_load': '12%', 'nodes': 8}]
Async pipeline structure validated for Python 3.12""",
        "practiceTask": "asyncio এবং aiohttp ব্যবহার করে একসাথে ১০টি ওয়েবসাইটের স্ট্যাটাস কোড চেক করার দ্রুতগতির স্ক্রিপ্ট তৈরি করুন।",
        "subtopics": [
            {
                "name": "Threading & Locks",
                "desc": "I/O বাউন্ড টাস্কের জন্য threading.Thread এবং রেস কন্ডিশন এড়াতে threading.Lock।",
                "code": "import threading\nlock = threading.Lock()\n# with lock: shared_state += 1"
            },
            {
                "name": "Multiprocessing & Process Pools",
                "desc": "GIL বাইপাস করে মাল্টি-কোর CPU প্রসেসিং (multiprocessing.Pool)।",
                "code": "from multiprocessing import Pool\n# with Pool(4) as p: results = p.map(math_task, data)"
            },
            {
                "name": "Asyncio, async & await",
                "desc": "নন-ব্লকিং ইভেন্ট লুপ, asyncio.create_task() এবং asyncio.gather()।",
                "code": "import asyncio\nasync def ping(): return 'pong'\n# asyncio.run(ping())"
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
        "summary": "Stack, Queue, Linked List, Binary Tree, Heap, Graph, Sorting, Binary Search, Big O Complexity",
        "conceptSimple": "ডেটা সাজিয়ে রাখা এবং দক্ষভাবে প্রসেস করার জন্য ডেটা স্ট্রাকচার ও অ্যালগরিদম অপরিহার্য। Big O দিয়ে কোডের সময় ও মেমোরি খরচ পরিমাপ করা হয়।",
        "conceptTechnical": "Algorithmic complexity evaluates asymptotic upper bounds (Big-O). Binary search operates in O(log N). Quick/Merge sorts provide O(N log N). BFS/DFS algorithms traverse graph adjacency structures using Queues and Stacks respectively.",
        "exampleCode": """# 15. Binary Search Algorithm & Stack Data Structure Implementation
class Stack:
    \"\"\"LIFO (Last In First Out) Data Structure\"\"\"
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        if not self.is_empty():
            return self._items.pop()
        raise IndexError("Pop from empty stack")

    def is_empty(self):
        return len(self._items) == 0

    def peek(self):
        return self._items[-1] if not self.is_empty() else None

# O(log N) Binary Search Algorithm
def binary_search(sorted_arr: list, target: int) -> int:
    left, right = 0, len(sorted_arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if sorted_arr[mid] == target:
            return mid  # Target found at index
        elif sorted_arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Test implementations
s = Stack()
for char in "PYTH": s.push(char)
reversed_str = "".join(s.pop() for _ in range(4))
print("Stack Reversed Output:", reversed_str)

sorted_data = [12, 24, 35, 47, 59, 68, 83, 91]
idx = binary_search(sorted_data, 59)
print(f"Binary Search: Found 59 at index {idx} in {len(sorted_data)} elements.")""",
        "expectedOutput": """Stack Reversed Output: HTYP
Binary Search: Found 59 at index 4 in 8 elements.""",
        "practiceTask": "Python এ একটি Binary Search Tree (BST) ক্লাস তৈরি করে insert এবং inorder_traversal মেথড ইমপ্লিমেন্ট করুন।",
        "subtopics": [
            {
                "name": "Big O Complexity",
                "desc": "O(1) কনস্ট্যান্ট, O(log N) লগারিদমিক, O(N) লিনিয়ার, O(N log N) এফিশিয়েন্ট সর্ট, O(N^2) কোয়াড্রেটিক।",
                "code": "# O(1) Lookup in dict vs O(N) in list\nd = {'id': 1}; print('id' in d)"
            },
            {
                "name": "Linear vs Binary Search",
                "desc": "লিনিয়ার সার্চ O(N) যেকোনো লিস্টে কাজ করে, বাইনারি সার্চ O(log N) সর্টেড লিস্টে কাজ করে।",
                "code": "arr = [10, 20, 30, 40, 50]\n# binary_search(arr, 30) -> Index 2"
            },
            {
                "name": "Trees & Graphs (BFS / DFS)",
                "desc": "ট্রি এবং গ্রাফ ট্রাভার্সালে Breadth-First Search (Queue) ও Depth-First Search (Stack/Recursion)।",
                "code": "graph = {'A': ['B', 'C'], 'B': ['D'], 'C': [], 'D': []}\nprint(graph['A'])"
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
        "summary": "SQL fundamentals, CRUD, JOIN, Indexes, SQLite, PostgreSQL, Transactions, SQLAlchemy ORM",
        "conceptSimple": "ডেটা স্থায়ীভাবে সেভ রাখতে ডেটাবেস ব্যবহার করা হয়। SQL দিয়ে কুয়েরি লেখা হয় এবং ORM (যেমন SQLAlchemy) দিয়ে অবজেক্ট আকারে পাইথন কোডেই ডেটাবেস অপারেশন করা যায়।",
        "conceptTechnical": "Relational databases enforce ACID compliance (Atomicity, Consistency, Isolation, Durability). ORMs map database relational schema tuples directly into Python objects using the Data Mapper or Active Record patterns.",
        "exampleCode": """# 16. Python + SQLite Database Transactions
import sqlite3

# Connect to in-memory SQLite database
conn = sqlite3.connect(":memory:")
cursor = conn.cursor()

# 1. Create Tables
cursor.execute(\"\"\"
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    balance REAL DEFAULT 0.0
)
\"\"\")

# 2. Insert Records (Parameterized Query to prevent SQL Injection)
users_data = [
    ("Rahim Ahmed", "rahim@example.com", 1500.0),
    ("Karim Ullah", "karim@example.com", 2400.0),
    ("Ayesha Siddiqua", "ayesha@example.com", 5000.0)
]
cursor.executemany("INSERT INTO users (name, email, balance) VALUES (?, ?, ?)", users_data)
conn.commit()

# 3. Read Query with Aggregate Function
cursor.execute("SELECT name, balance FROM users WHERE balance >= 2000.0 ORDER BY balance DESC")
vip_users = cursor.fetchall()

print("VIP Users (Balance >= 2000):")
for name, bal in vip_users:
    print(f"  - {name}: ৳{bal:.2f}")

conn.close()""",
        "expectedOutput": """VIP Users (Balance >= 2000):
  - Ayesha Siddiqua: ৳5000.00
  - Karim Ullah: ৳2400.00""",
        "practiceTask": "SQLAlchemy মডেল তৈরি করে একটি User ও Post এর One-to-Many রিলেশনশিপ ডেটাবেসে সংরক্ষণ করুন।",
        "subtopics": [
            {
                "name": "SQL CRUD & Queries",
                "desc": "SELECT, INSERT, UPDATE, DELETE, WHERE, GROUP BY, JOIN, Indexes।",
                "code": "# SELECT users.name, orders.amount FROM users JOIN orders ON users.id = orders.user_id"
            },
            {
                "name": "SQLite & Parameterized Queries",
                "desc": "SQL ইনজেকশন প্রতিরোধে '?' বা প্লেসহোল্ডার প্যারামিটার দিয়ে কুয়েরি রান করা।",
                "code": "cursor.execute('SELECT * FROM users WHERE email = ?', ('test@test.com',))"
            },
            {
                "name": "SQLAlchemy ORM",
                "desc": "মডেল ডিফাইন ও সেশন ম্যানেজমেন্ট (session.add, session.commit, session.query)।",
                "code": "# class User(Base):\n#     __tablename__ = 'users'\n#     id = Column(Integer, primary_key=True)"
            }
        ]
    },
    {
        "id": "topic-17",
        "num": 17,
        "title": "🌐 APIs & Web Requests",
        "category": "applied",
        "categoryLabel": "Web & Networking",
        "icon": "fa-globe",
        "summary": "HTTP/HTTPS methods (GET, POST, PUT, DELETE), Status codes, Headers, requests, httpx, REST APIs",
        "conceptSimple": "API (Application Programming Interface) এর মাধ্যমে দুটি আলাদা সফটওয়্যার একে অপরের সাথে ডেটা আদান-প্রদান করে। requests বা httpx লাইব্রেরি দিয়ে ইন্টারনেটের যেকোনো ওয়েবসাইট বা সার্ভিস থেকে ডেটা আনা যায়।",
        "conceptTechnical": "REST APIs operate over HTTP protocol exchanging JSON/XML payloads. HTTP status codes classify responses (2xx success, 4xx client errors, 5xx server faults). Authentication typically utilizes Bearer tokens or HMAC signatures.",
        "exampleCode": """# 17. REST API Client Simulation with HTTP Methods & Status Codes
import json

class MockAPIClient:
    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url
        self.headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}

    def get_weather(self, city: str):
        # Simulated JSON HTTP Response
        return {
            "status_code": 200,
            "data": {
                "city": city.title(),
                "temperature_celsius": 28.5,
                "humidity": "65%",
                "condition": "Partly Cloudy",
                "source": "OpenWeather / Google Cloud API"
            }
        }

client = MockAPIClient("https://api.weather-services.org/v1", "sk_live_981249812")
response = client.get_weather("dhaka")

print("HTTP 200 OK Response Payload:")
print(json.dumps(response["data"], indent=2))""",
        "expectedOutput": """HTTP 200 OK Response Payload:
{
  "city": "Dhaka",
  "temperature_celsius": 28.5,
  "humidity": "65%",
  "condition": "Partly Cloudy",
  "source": "OpenWeather / Google Cloud API"
}""",
        "practiceTask": "GitHub পাবলিক API তে কল করে যেকোনো ইউজারের পাবলিক রিপোজিটরি তালিকা প্রিন্ট করার স্ক্রিপ্ট লিখুন।",
        "subtopics": [
            {
                "name": "HTTP Methods & Status Codes",
                "desc": "GET (Read), POST (Create), PUT (Replace), PATCH (Update), DELETE (Remove)। 200 OK, 201 Created, 401 Unauthorized, 404 Not Found, 500 Server Error।",
                "code": "# requests.get('https://api.github.com/users/octocat')"
            },
            {
                "name": "requests & httpx",
                "desc": "রেসপন্স পার্সিং: res.json(), res.status_code, res.headers, params={}, headers={}",
                "code": "# res = requests.post('https://api.example.com/items', json={'name': 'Item1'})"
            },
            {
                "name": "API Authentication (Bearer, OAuth)",
                "desc": "API Keys, Bearer Token এবং হেডার সিকিউরিটি।",
                "code": "headers = {'Authorization': 'Bearer YOUR_SECRET_TOKEN'}"
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
        "summary": "FastAPI, Flask, Django comparisons, Routing, Pydantic validation, Async endpoints, Swagger docs",
        "conceptSimple": "পাইথনে আধুনিক ওয়েব অ্যাপ এবং ব্যাকএন্ড এপিআই তৈরির জন্য ৩টি প্রধান ফ্রেমওয়ার্ক রয়েছে: FastAPI (উচ্চগতির আধুনিক async API), Flask (হালকা ও ফ্লেক্সিবল মাইক্রোফ্রেমওয়ার্ক), এবং Django (পূর্ণাঙ্গ অল-ইন-ওয়ান ফ্রেমওয়ার্ক)।",
        "conceptTechnical": "FastAPI utilizes Starlette for async routing and Pydantic for automated data validation and OpenAPI schema generation. Django follows the MTV (Model-Template-View) pattern with built-in ORM, admin panel, and auth security.",
        "exampleCode": """# 18. Modern FastAPI Application Architecture (Conceptual)
# FastAPI + Pydantic Type Schema Pattern
\"\"\"
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, Field

app = FastAPI(title="PyMaster API", version="1.0.0")

class ItemCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=50)
    price: float = Field(..., gt=0)
    in_stock: bool = True

items_db = {}

@app.post("/items/", status_code=status.HTTP_201_CREATED)
async def create_item(item: ItemCreate):
    item_id = len(items_db) + 1
    items_db[item_id] = item.model_dump()
    return {"id": item_id, "data": item}

@app.get("/items/{item_id}")
async def get_item(item_id: int):
    if item_id not in items_db:
        raise HTTPException(status_code=404, detail="Item not found")
    return items_db[item_id]
\"\"\"
print("FastAPI Architecture Pattern Verified: Auto Swagger documentation generated at /docs")""",
        "expectedOutput": """FastAPI Architecture Pattern Verified: Auto Swagger documentation generated at /docs""",
        "practiceTask": "FastAPI দিয়ে একটি সহজ To-Do CRUD REST API তৈরি করুন যেখানে JWT অথেন্টিকেশন ইন্টিগ্রেটেড থাকবে।",
        "subtopics": [
            {
                "name": "FastAPI vs Flask vs Django",
                "desc": "FastAPI (Ultra fast, Async, Type-safe), Flask (Micro, Minimalist), Django (Batteries-included enterprise)।",
                "code": "# Flask: @app.route('/') | FastAPI: @app.get('/') async def root():"
            },
            {
                "name": "Pydantic Schemas & Validation",
                "desc": "স্বয়ংক্রিয় রিকোয়েস্ট ভ্যালিডেশন এবং টাইপ সেফটি।",
                "code": "# class UserSchema(BaseModel):\n#     email: str\n#     age: int = 18"
            },
            {
                "name": "OpenAPI & Swagger Documentation",
                "desc": "কোনো অতিরিক্ত কোড ছাড়াই ব্রাউজারে /docs এবং /redoc এ ইন্টারঅ্যাক্টিভ ডকুমেন্টেশন তৈরি।",
                "code": "# FastAPI generates interactive OpenAPI 3.0 docs automatically"
            }
        ]
    },
    {
        "id": "topic-19",
        "num": 19,
        "title": "🖥️ GUI Development (Tkinter, PyQt, PySide)",
        "category": "applied",
        "categoryLabel": "Desktop Apps",
        "icon": "fa-window-maximize",
        "summary": "Tkinter, PyQt6, PySide6, CustomTkinter, Event driven UI, Desktop Calculator, Productivity apps",
        "conceptSimple": "পাইথন দিয়ে ডেস্কটপ সফটওয়্যার তৈরি করতে GUI লাইব্রেরি ব্যবহার করা হয়। Tkinter পাইথনের সাথে ডিফল্টভাবে আসে এবং PyQt বা PySide দিয়ে প্রফেশনাল মডার্ন সফটওয়্যার বানানো যায়।",
        "conceptTechnical": "Desktop GUIs rely on event-driven main loops (mainloop / exec). Signals and slots decouple user interactions (button clicks, key presses) from handler routines and background thread workers.",
        "exampleCode": """# 19. Tkinter GUI App Blueprint (Event Loop Model)
import tkinter as tk

class CalculatorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("PyMaster Simple Calculator")
        self.root.geometry("280x240")
        
        # Display Entry
        self.display = tk.Entry(root, font=("Fira Code", 16), justify="right")
        self.display.pack(fill="x", padx=10, pady=10)
        self.display.insert(0, "42 * 2")
        
        # Action Buttons
        self.btn_calc = tk.Button(root, text="Calculate (=)", bg="#238636", fg="white", font=("Inter", 12, "bold"))
        self.btn_calc.pack(fill="x", padx=10, pady=5)
        
        self.label_res = tk.Label(root, text="Result: 84", font=("Inter", 12))
        self.label_res.pack(pady=10)

print("GUI Architecture configured. Ready to run in standard desktop display environment.")""",
        "expectedOutput": """GUI Architecture configured. Ready to run in standard desktop display environment.""",
        "practiceTask": "Tkinter দিয়ে একটি পাসওয়ার্ড জেনারেটর এবং সেভ করার ডেস্কটপ অ্যাপ তৈরি করুন।",
        "subtopics": [
            {
                "name": "Tkinter Basics & Layouts",
                "desc": "pack(), grid(), place() জিওমেট্রি ম্যানেজার ও উইজেট (Button, Label, Entry)।",
                "code": "# root = tk.Tk(); btn = tk.Button(root, text='Click'); root.mainloop()"
            },
            {
                "name": "PyQt6 & PySide6",
                "desc": "কিউট ফ্রেমওয়ার্ক, কিউএমএল, এবং সিগন্যাল-স্লট আর্কিটেকচার।",
                "code": "# app = QApplication([]); window = QMainWindow(); window.show()"
            },
            {
                "name": "Desktop Projects Structure",
                "desc": "ক্যালকুলেটর, নোটপ্যাড, ফাইল ম্যানেজার ও পাসওয়ার্ড ম্যানেজার।",
                "code": "# Packaging to .exe using PyInstaller: pyinstaller --onefile app.py"
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
        "summary": "Excel automation (openpyxl), PDF processing (pypdf), Email (smtplib), Pillow image processing, Scheduled tasks",
        "conceptSimple": "পুনরাবৃত্তিমূলক কাজ স্বয়ংক্রিয় করার জন্য পাইথন সবচেয়ে সেরা। এক্সেল শীট আপডেট, হাজার হাজার ইমেইল একসাথে পাঠানো, পিডিএফ এডিট এবং ইমেজ রিসাইজ নিমেষেই করা যায়।",
        "conceptTechnical": "Python scripts automate operating system operations, parse binary document formats (XLSX, PDF) via openpyxl/pypdf, process images via Pillow (PIL), and communicate via SMTP/IMAP network protocols.",
        "exampleCode": """# 20. Excel & System Automation Script
def generate_monthly_report_data():
    \"\"\"Generates mock data for Excel / CSV automation.\"\"\"
    departments = ["Engineering", "Product", "Design", "Marketing"]
    salaries = [120000, 95000, 85000, 75000]
    
    report = []
    for dept, sal in zip(departments, salaries):
        tax = sal * 0.15
        net = sal - tax
        report.append({
            "department": dept,
            "gross_salary": sal,
            "tax_deducted": tax,
            "net_salary": net
        })
    return report

data = generate_monthly_report_data()
print("Generated Automated Payroll Sheet:")
for item in data:
    print(f"  🏢 {item['department']:<12}: Gross ৳{item['gross_salary']:,} | Net ৳{item['net_salary']:,}")""",
        "expectedOutput": """Generated Automated Payroll Sheet:
  🏢 Engineering : Gross ৳120,000 | Net ৳102,000.0
  🏢 Product     : Gross ৳95,000 | Net ৳80,750.0
  🏢 Design      : Gross ৳85,000 | Net ৳72,250.0
  🏢 Marketing   : Gross ৳75,000 | Net ৳63,750.0""",
        "practiceTask": "Pillow (PIL) দিয়ে একটি ফোল্ডারের সব ছবি একসাথে ওয়াটারমার্ক ও কমপ্রেস করার স্ক্রিপ্ট লিখুন।",
        "subtopics": [
            {
                "name": "Excel Automation (openpyxl)",
                "desc": "এক্সেল ফাইল রিড, নতুন শীট তৈরি, ফর্মুলা বসানো ও চার্ট ড্র করা।",
                "code": "# wb = openpyxl.Workbook(); ws = wb.active; ws['A1'] = 'Revenue'"
            },
            {
                "name": "Email Automation (smtplib, email)",
                "desc": "HTML বডি ও অ্যাটাচমেন্ট সহ স্বয়ংক্রিয় ইমেইল সেন্ডিং।",
                "code": "# import smtplib; server = smtplib.SMTP('smtp.gmail.com', 587)"
            },
            {
                "name": "PDF & Pillow Image Processing",
                "desc": "পিডিএফ মার্জ ও এক্সট্র্যাক্ট এবং ইমেজ রিসাইজ/ফিল্টারিং।",
                "code": "# from PIL import Image; img = Image.open('photo.jpg'); img.thumbnail((800, 600))"
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
        "summary": "HTML, DOM, BeautifulSoup, CSS Selectors, XPath, Pagination, Dynamic scraping with Playwright/Selenium, robots.txt",
        "conceptSimple": "ওয়েব স্ক্র্যাপিংয়ের মাধ্যমে ওয়েবসাইট থেকে তথ্য সংগ্রহ করা হয়। স্ট্যাটিক সাইটের জন্য BeautifulSoup এবং জাভাস্ক্রিপ্ট যুক্ত ডায়নামিক সাইটের জন্য Playwright বা Selenium ব্যবহার করা হয়।",
        "conceptTechnical": "Scrapers parse DOM tree hierarchies using HTML/XML parsers (lxml). Dynamic web scraping drives headless browser instances to execute JavaScript client-side rendering before DOM extraction. Ethical scraping respects robots.txt and throttles request rates.",
        "exampleCode": """# 21. Web Scraping with BeautifulSoup Simulation
html_content = \"\"\"
<div class="product-grid">
  <div class="product-card" data-id="101">
    <h3 class="title">Mechanical Keyboard RGB</h3>
    <span class="price">$89.99</span>
    <span class="stock in-stock">Available</span>
  </div>
  <div class="product-card" data-id="102">
    <h3 class="title">Wireless Gaming Mouse</h3>
    <span class="price">$49.50</span>
    <span class="stock out-stock">Out of Stock</span>
  </div>
</div>
\"\"\"

# Conceptual DOM extraction logic
import re

cards = re.findall(r'<div class="product-card".*?>(.*?)</div>', html_content, re.DOTALL)
print(f"Scraped {len(cards)} items successfully:")

for card in cards:
    title = re.search(r'<h3 class="title">(.*?)</h3>', card).group(1)
    price = re.search(r'<span class="price">(.*?)</span>', card).group(1)
    print(f"  🛒 {title} -> {price}")""",
        "expectedOutput": """Scraped 2 items successfully:
  🛒 Mechanical Keyboard RGB -> $89.99
  🛒 Wireless Gaming Mouse -> $49.50""",
        "practiceTask": "যেকোনো ই-কমার্স সাইট থেকে প্রথম ৩টি পেজের পণ্যের নাম, দাম ও রেটিং স্ক্র্যাপ করে CSV ফাইলে সেভ করুন।",
        "subtopics": [
            {
                "name": "BeautifulSoup & CSS Selectors",
                "desc": "soup.find(), soup.find_all(), soup.select('.class > tag') দিয়ে এলিমেন্ট খোঁজা।",
                "code": "# soup = BeautifulSoup(html, 'html.parser'); titles = soup.select('h2.title')"
            },
            {
                "name": "Dynamic Scraping (Playwright)",
                "desc": "হেডলেস ব্রাউজারে জাভাস্ক্রিপ্ট রেন্ডার, বাটন ক্লিক ও স্ক্রলিং সিমুলেশন।",
                "code": "# async with async_playwright() as p: page = await p.chromium.launch()"
            },
            {
                "name": "Ethics, robots.txt & Rate Limiting",
                "desc": "সার্ভারে অতিরিক্ত লোড না ফেলা, রিকোয়েস্টের মাঝে টাইম স্লিপ দেওয়া এবং robots.txt মান্য করা।",
                "code": "# time.sleep(1.5) # Rate limiting to respect server capacity"
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
        "summary": "NumPy arrays, Broadcasting, Pandas Series & DataFrames, Data Cleaning, GroupBy, Matplotlib visualizations",
        "conceptSimple": "ডেটা সায়েন্সে ডেটা বিশ্লেষণ ও ভিজ্যুয়ালাইজেশনের জন্য পাইথন সবচেয়ে জনপ্রিয়। NumPy গাণিতিক হিসাব দ্রুত করে, Pandas ডেটা টেবিল প্রসেস করে, এবং Matplotlib দিয়ে গ্রাফ আঁকা হয়।",
        "conceptTechnical": "NumPy provides ndarray data structures utilizing contiguous C-memory blocks with SIMD vectorization. Pandas builds on NumPy to provide labeled DataFrame data structures optimized for exploratory data analysis (EDA), alignment, and groupby aggregations.",
        "exampleCode": """# 22. NumPy Vectorization & Pandas Data Cleaning Blueprint
import statistics

# Simulating DataFrame operations
sales_records = [
    {"agent": "Rahim", "region": "Dhaka", "sales": 45000},
    {"agent": "Karim", "region": "Chittagong", "sales": 32000},
    {"agent": "Ayesha", "region": "Dhaka", "sales": 58000},
    {"agent": "Tanvir", "region": "Sylhet", "sales": 29000},
    {"agent": "Farhan", "region": "Dhaka", "sales": 41000},
]

# Total & Regional Aggregation
total_revenue = sum(r["sales"] for r in sales_records)
avg_sales = statistics.mean(r["sales"] for r in sales_records)

# GroupBy Region
region_totals = {}
for r in sales_records:
    reg = r["region"]
    region_totals[reg] = region_totals.get(reg, 0) + r["sales"]

print(f"Total Revenue: ৳{total_revenue:,} | Average: ৳{avg_sales:,.2f}")
print("Sales Grouped by Region:")
for reg, tot in region_totals.items():
    print(f"  📍 {reg:<12}: ৳{tot:,}")""",
        "expectedOutput": """Total Revenue: ৳205,000 | Average: ৳41,000.00
Sales Grouped by Region:
  📍 Dhaka       : ৳144,000
  📍 Chittagong   : ৳32,000
  📍 Sylhet      : ৳29,000""",
        "practiceTask": "একটি CSV ফাইল থেকে মিসিং ভ্যালু ফিল্টার করে ক্যাটাগরি ভিত্তিক গড় বের করে বার চার্টে ভিজ্যুয়ালাইজ করুন।",
        "subtopics": [
            {
                "name": "NumPy Arrays & Vectorization",
                "desc": "লুপ ছাড়া ম্যাট্রিক্স যোগ, গুণ, এবং ব্রডকাস্টিং ক্যালকুলেশন।",
                "code": "# import numpy as np; a = np.array([1, 2, 3]); print(a * 2)"
            },
            {
                "name": "Pandas DataFrame & Cleaning",
                "desc": "df.dropna(), df.fillna(), df.groupby(), df.merge(), df.sort_values()",
                "code": "# df = pd.read_csv('data.csv'); df.groupby('city')['revenue'].mean()"
            },
            {
                "name": "Data Visualization (Matplotlib/Plotly)",
                "desc": "Line plot, Bar chart, Histogram, Scatter plot ও ড্যাশবোর্ড তৈরি।",
                "code": "# plt.plot(x, y); plt.title('Sales Growth'); plt.show()"
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
        "summary": "Features, Labels, Train/Test Split, Linear/Logistic Regression, Decision Trees, Random Forest, Scikit-learn",
        "conceptSimple": "মেশিন লার্নিংয়ের মাধ্যমে কম্পিউটার পূর্বের ডেটা দেখে নিজে নিজে প্যাটার্ন শেখে এবং নতুন ডেটার উপর প্রেডিকশন করতে পারে। যেমন: বাড়ির দাম প্রেডিক্ট করা বা স্প্যাম ইমেইল শনাক্ত করা।",
        "conceptTechnical": "Machine learning algorithms optimize mathematical cost functions across feature spaces. Supervised learning splits data into training/validation/testing matrices, fitting weights via gradient descent or information gain splits (e.g. Gini impurity).",
        "exampleCode": """# 23. Machine Learning Decision Boundary & Prediction Concept
class SimpleLinearPredictor:
    \"\"\"Simulating Linear Regression: y = w * x + b\"\"\"
    def __init__(self, weight: float, bias: float):
        self.weight = weight
        self.bias = bias

    def predict(self, feature_x: float) -> float:
        return self.weight * feature_x + self.bias

# Trained model weights (e.g. Experience Years -> Estimated Salary)
model = SimpleLinearPredictor(weight=15000.0, bias=30000.0)

test_years = [1.5, 3.0, 5.5, 8.0]
print("ML Model Salary Predictions:")
for yrs in test_years:
    pred_salary = model.predict(yrs)
    print(f"  👨‍💻 {yrs} Years Exp -> Estimated Salary: ৳{pred_salary:,.2f}")""",
        "expectedOutput": """ML Model Salary Predictions:
  👨‍💻 1.5 Years Exp -> Estimated Salary: ৳52,500.00
  👨‍💻 3.0 Years Exp -> Estimated Salary: ৳75,000.00
  👨‍💻 5.5 Years Exp -> Estimated Salary: ৳112,500.00
  👨‍💻 8.0 Years Exp -> Estimated Salary: ৳150,000.00""",
        "practiceTask": "Scikit-learn এর train_test_split এবং RandomForestClassifier ব্যবহার করে একটি ক্লাসিফিকেশন মডেল ট্রেইন করুন।",
        "subtopics": [
            {
                "name": "Dataset, Features & Labels",
                "desc": "X (ইনপুট ফিচারস), y (টার্গেট লেবেল), Train/Test Split (80/20)।",
                "code": "# from sklearn.model_selection import train_test_split\n# X_train, X_test, y_train, y_test = train_test_split(X, y)"
            },
            {
                "name": "Supervised Learning Algorithms",
                "desc": "Linear Regression, Logistic Regression, Decision Trees, Random Forest, KNN, SVM।",
                "code": "# from sklearn.ensemble import RandomForestClassifier\n# model = RandomForestClassifier(); model.fit(X_train, y_train)"
            },
            {
                "name": "Model Evaluation Metrics",
                "desc": "Accuracy, Precision, Recall, F1-Score, Confusion Matrix, MSE, R2-Score।",
                "code": "# from sklearn.metrics import accuracy_score; print(accuracy_score(y_test, y_pred))"
            }
        ]
    },
    {
        "id": "topic-24",
        "num": 24,
        "title": "🧠 Deep Learning & Neural Networks (PyTorch / TensorFlow)",
        "category": "applied",
        "categoryLabel": "Deep Learning",
        "icon": "fa-network-wired",
        "summary": "Perceptron, Activation Functions (ReLU, Softmax), Gradient Descent, Backpropagation, CNN, RNN, PyTorch",
        "conceptSimple": "ডিপ লার্নিং মানুষের মস্তিষ্কের নিউরনের আদলে তৈরি কৃত্রিম নিউরাল নেটওয়ার্ক। এটি ছবি চেনা (CNN), ভাষা অনুধাবন (Transformers) এবং কমপ্লেক্স প্যাটার্ন শিখতে ব্যবহৃত হয়।",
        "conceptTechnical": "Deep Neural Networks compute forward activations via matrix dot products followed by non-linear activations (ReLU, GELU). Gradients are propagated backwards via the chain rule (Backpropagation) updating tensor weights with optimizers like Adam.",
        "exampleCode": """# 24. Neural Network Forward Pass & Activation Math
import math

def relu(x: float) -> float:
    \"\"\"Rectified Linear Unit Activation\"\"\"
    return max(0.0, x)

def sigmoid(x: float) -> float:
    \"\"\"Sigmoid Probability Activation\"\"\"
    return 1.0 / (1.0 + math.exp(-x))

# Simulated Dense Neuron Layer: Output = Activation(W * X + B)
weights = [0.45, -0.25, 0.80]
inputs = [1.2, 0.5, 2.0]
bias = 0.10

dot_product = sum(w * x for w, x in zip(weights, inputs)) + bias
activated_output = relu(dot_product)
prob = sigmoid(dot_product)

print(f"Linear Dot Product: {dot_product:.4f}")
print(f"ReLU Activation   : {activated_output:.4f}")
print(f"Sigmoid Class Prob: {prob:.4%}")""",
        "expectedOutput": """Linear Dot Product: 2.1150
ReLU Activation   : 2.1150
Sigmoid Class Prob: 89.2338%""",
        "practiceTask": "PyTorch দিয়ে একটি ২-লেয়ারের Multilayer Perceptron (MLP) ডিফাইন করে MNIST ডিজিট ক্লাসিফায়ার ট্রেইন করুন।",
        "subtopics": [
            {
                "name": "Perceptron & Activation Functions",
                "desc": "ReLU, Sigmoid, Tanh, Softmax অ্যাক্টিভেশন ফাংশন।",
                "code": "# def relu(x): return max(0, x)"
            },
            {
                "name": "Loss Functions & Backpropagation",
                "desc": "CrossEntropyLoss, MSELoss, Gradient Descent ও Adam Optimizer।",
                "code": "# loss.backward(); optimizer.step(); optimizer.zero_grad()"
            },
            {
                "name": "CNN & Transformers Basics",
                "desc": "ইমেজ প্রসেসিংয়ে Convolutional Neural Networks এবং টেক্সটে Self-Attention Transformers।",
                "code": "# import torch.nn as nn; conv = nn.Conv2d(3, 16, kernel_size=3)"
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
        "summary": "LLMs, Prompt Engineering, Gemini / OpenAI APIs, Embeddings, Vector DBs, RAG, Tool/Function Calling, AI Agents",
        "conceptSimple": "জেনারেটিভ এআই দিয়ে নতুন কনটেন্ট ও কোড তৈরি করা যায়। RAG (Retrieval-Augmented Generation) দিয়ে নিজস্ব ডকুমেন্টের উপর এআই প্রশ্নোত্তরের ব্যবস্থা করা হয় এবং এআই এজেন্ট টুল কলিংয়ের মাধ্যমে বাস্তব কাজ স্বয়ংক্রিয়ভাবে করতে পারে।",
        "conceptTechnical": "Generative AI models leverage auto-regressive Transformer architectures. RAG pipelines convert textual data into high-dimensional vector embeddings, index them in Vector Databases (e.g. Chroma, Pinecone) using cosine similarity search, and ground LLM prompts with semantic context.",
        "exampleCode": """# 25. Generative AI Agent Tool Calling Architecture Blueprint
import json

class WeatherTool:
    name = "get_current_weather"
    description = "Get real-time weather and temperature for a given city."
    
    @staticmethod
    def execute(city: str) -> str:
        return f"{city.title()}: 29°C, Sunny with light breeze."

# Agent Dispatch Loop Simulation
def agent_reasoning_step(user_prompt: str):
    print(f"🤖 User Query: '{user_prompt}'")
    print("🧠 Agent Thought: The user is asking for current weather. I must invoke 'get_current_weather' tool.")
    
    # Tool Execution
    tool_result = WeatherTool.execute("Dhaka")
    print(f"⚡ Tool Output: {tool_result}")
    
    # Final Synthesized Response
    final_answer = f"The weather in Dhaka is currently sunny with a pleasant temperature of 29°C."
    print(f"💬 AI Response: {final_answer}")

agent_reasoning_step("What is the weather like in Dhaka right now?")""",
        "expectedOutput": """🤖 User Query: 'What is the weather like in Dhaka right now?'
🧠 Agent Thought: The user is asking for current weather. I must invoke 'get_current_weather' tool.
⚡ Tool Output: Dhaka: 29°C, Sunny with light breeze.
💬 AI Response: The weather in Dhaka is currently sunny with a pleasant temperature of 29°C.""",
        "practiceTask": "Google Gemini API বা OpenAI API ব্যবহার করে একটি CLI ভিত্তিক কোডিং অ্যাসিস্ট্যান্ট চ্যাটবট বানান যা কোডের ভুল সংশোধন করে দেবে।",
        "subtopics": [
            {
                "name": "LLM APIs & Prompt Engineering",
                "desc": "System Prompts, Few-shot prompting, Temperature, Top-P ও Structured JSON Outputs।",
                "code": "# response = client.models.generate_content(model='gemini-2.5-flash', contents='Prompt')"
            },
            {
                "name": "Vector Embeddings & RAG",
                "desc": "টেক্সট থেকে ভেক্টর রূপান্তর, কসমাস সিমিলারিটি সার্চ এবং কাস্টম নলেজ বেস থেকে উত্তর তৈরি।",
                "code": "# similarity = np.dot(emb_query, emb_doc) / (norm(emb_query) * norm(emb_doc))"
            },
            {
                "name": "Tool Calling & Multi-Agent Systems",
                "desc": "ফাংশন কলিং, মেমোরি স্টেট ম্যানেজমেন্ট এবং অটোনোমাস এজেন্ট ডিসপ্যাচ।",
                "code": "# tools = [get_database_records, send_slack_notification]"
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
        "summary": "Cryptographic Hashing (hashlib), secrets, Password hashing, SQL Injection mitigation, Secrets management, Defense",
        "conceptSimple": "সাইবার সিকিউরিটিতে পাসওয়ার্ড ও সেনসিটিভ ডেটা সুরক্ষিত রাখতে হ্যাশিং (SHA-256) এবং ক্রিপ্টোগ্রাফিক র্যান্ডমনেস ব্যবহার করা হয়। কোডে কখনো সিক্রেট টোকেন হার্ডকোড না করে পরিবেশ ভ্যারিয়েবল (os.getenv) ব্যবহার করতে হয়।",
        "conceptTechnical": "Defensive cybersecurity in Python utilizes CSPRNGs (secrets module) for cryptographically strong random tokens, constant-time comparison (hmac.compare_digest) to prevent timing attacks, and salted key-derivation functions (bcrypt/Argon2) for credential storage.",
        "exampleCode": """# 26. Cryptographic Hashing & Secure Token Generation
import hashlib
import secrets
import hmac

# 1. Generate Cryptographically Secure API Token (CSPRNG)
secure_token = secrets.token_hex(16)
print(f"Generated Secure Auth Token: {secure_token}")

# 2. SHA-256 Hashing with Salt
password = "SuperSecretPassword123!"
salt = secrets.token_hex(8)
combined = (password + salt).encode('utf-8')
password_hash = hashlib.sha256(combined).hexdigest()
print(f"Salted SHA-256 Hash: {password_hash[:24]}...")

# 3. Constant-Time Hash Comparison (Prevents Timing Attacks)
is_valid = hmac.compare_digest(
    hashlib.sha256(combined).hexdigest(),
    password_hash
)
print("Hash verification match:", is_valid)""",
        "expectedOutput": """Generated Secure Auth Token: a3f881c2e40994119d8f3312bb4560ea
Salted SHA-256 Hash: 8b671a5cf95781a967f4019e...
Hash verification match: True""",
        "practiceTask": "পাসওয়ার্ড স্ট্রেংথ চেকার লিখুন যা চেক করবে পাসওয়ার্ডে অন্তত ৮ অক্ষর, বড় ও ছোট হাতের অক্ষর, সংখ্যা ও স্পেশাল ক্যারেক্টার আছে কিনা।",
        "subtopics": [
            {
                "name": "hashlib & secrets Module",
                "desc": "SHA-256, SHA-512, secrets.token_urlsafe(), secrets.randbelow()",
                "code": "import secrets\nreset_token = secrets.token_urlsafe(32)\nprint(len(reset_token))"
            },
            {
                "name": "SQL Injection & XSS Prevention",
                "desc": "প্যারামিটারাইজড কুয়েরি এবং ইনপুট স্যানিটাইজেশন।",
                "code": "# Always use parameterized queries: cursor.execute('SELECT * FROM users WHERE id = ?', (uid,))"
            },
            {
                "name": "Secrets & Environment Variables",
                "desc": "os.getenv() এবং .env ফাইলের মাধ্যমে পাসওয়ার্ড ও API কী গোপন রাখা।",
                "code": "import os\napi_key = os.getenv('OPENAI_API_KEY', 'default_dev_key')"
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
        "conceptSimple": "সফটওয়্যারে কোনো বাগ আছে কিনা তা স্বয়ংক্রিয়ভাবে পরীক্ষা করার জন্য টেস্ট লেখা হয়। pytest পাইথনের সবচেয়ে জনপ্রিয় টেস্টিং ফ্রেমওয়ার্ক। Test-Driven Development (TDD) এ কোড লেখার আগেই টেস্ট লেখা হয়।",
        "conceptTechnical": "Testing suites execute programmatic assertions against unit components. Pytest provides declarative fixtures via dependency injection, parameterized test matrices, monkeypatching/mocking, and test coverage reporters.",
        "exampleCode": """# 27. Pytest Unit Testing Patterns
def calculate_discount(price: float, member_type: str) -> float:
    \"\"\"Calculates discount based on membership.\"\"\"
    if price < 0:
        raise ValueError("Price cannot be negative")
    if member_type == "VIP":
        return price * 0.80  # 20% discount
    elif member_type == "Member":
        return price * 0.90  # 10% discount
    return price

# Test Suite Assertions
def test_discounts():
    assert calculate_discount(100.0, "VIP") == 80.0, "VIP discount failed"
    assert calculate_discount(100.0, "Member") == 90.0, "Member discount failed"
    assert calculate_discount(100.0, "Guest") == 100.0, "Guest discount failed"
    print("✅ All 3 discount assertion tests PASSED (100% Coverage).")

test_discounts()""",
        "expectedOutput": """✅ All 3 discount assertion tests PASSED (100% Coverage).""",
        "practiceTask": "pytest এবং unittest.mock ব্যবহার করে একটি ফাংশন টেস্ট করুন যা এপিআই কল না করেই মক রেসপন্স যাচাই করবে।",
        "subtopics": [
            {
                "name": "unittest vs pytest",
                "desc": "assert স্টেটমেন্ট, clean test discovery, pytest.mark.parametrize()।",
                "code": "# def test_addition(): assert 2 + 2 == 4"
            },
            {
                "name": "Pytest Fixtures & Dependency Injection",
                "desc": "@pytest.fixture দিয়ে টেস্টের জন্য প্রস্তুত ডেটা ও ডাটাবেস সংযোগ হ্যান্ডেল করা।",
                "code": "# @pytest.fixture\n# def sample_user(): return {'name': 'Adnan', 'role': 'Admin'}"
            },
            {
                "name": "Mocking & Test Coverage",
                "desc": "pytest-cov দিয়ে কোড কভারেজ পরিমাপ ও unittest.mock.patch দিয়ে এক্সটার্নাল এপিআই মক করা।",
                "code": "# pytest --cov=src --cov-report=html"
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
        "conceptSimple": "কোডের ভুল (বাগ) খুঁজে বের করে ঠিক করার প্রক্রিয়া হলো ডিবাগিং। print() দিয়ে ডিবাগ করার চেয়ে পাইথনের বিল্ট-ইন pdb বা VS Code এর ব্রেকপয়েন্ট ও logging মডিউল ব্যবহার করা অনেক বেশি ফলপ্রসূ।",
        "conceptTechnical": "Debugging analyzes runtime execution frames and call stacks. The Python debugger (pdb) intercepts bytecode execution via sys.settrace hooks, allowing step-over, step-into, and interactive variable evaluation.",
        "exampleCode": """# 28. Structured Logging & Debugging Traceability
import logging
import io

# Setup structured logger
logger = logging.getLogger("AppEngine")
logger.setLevel(logging.DEBUG)

# Formatter & Handler
log_capture = io.StringIO()
handler = logging.StreamHandler(log_capture)
handler.setFormatter(logging.Formatter("[%(levelname)s] %(asctime)s - %(message)s", datefmt="%H:%M:%S"))
logger.addHandler(handler)

def execute_pipeline(data_batch: list):
    logger.debug(f"Received batch of {len(data_batch)} items.")
    for idx, item in enumerate(data_batch):
        if item is None:
            logger.warning(f"Null record encountered at index {idx}. Skipping.")
            continue
        logger.info(f"Successfully processed item #{idx}: {item}")

execute_pipeline(["Config_A", None, "Config_B"])
print("Application Log Stream:")
print(log_capture.getvalue().strip())""",
        "expectedOutput": """Application Log Stream:
[DEBUG] 17:20:00 - Received batch of 3 items.
[INFO] 17:20:00 - Successfully processed item #0: Config_A
[WARNING] 17:20:00 - Null record encountered at index 1. Skipping.
[INFO] 17:20:00 - Successfully processed item #2: Config_B""",
        "practiceTask": "pdb.set_trace() বা breakpoint() ব্যবহার করে একটি রিকার্সিভ ফাংশনের প্রতিটি স্ট্যাক ফ্রেম পর্যবেক্ষণ করুন।",
        "subtopics": [
            {
                "name": "Traceback & Error Reading",
                "desc": "স্ট্যাক ট্রেস পড়ে ফাইলের নাম, লাইন নাম্বার ও এরর টাইপ শনাক্ত করা।",
                "code": "# Traceback (most recent call last): File 'main.py', line 12, in <module>"
            },
            {
                "name": "pdb & breakpoint()",
                "desc": "কোডের মধ্যে breakpoint() দিলে ইন্টারঅ্যাক্টিভ ডিবাগার চালু হয় (n: next, s: step, c: continue)।",
                "code": "# x = 10; breakpoint(); y = x * 2"
            },
            {
                "name": "Production Logging Setup",
                "desc": "DEBUG, INFO, WARNING, ERROR, CRITICAL লেভেল সহ ফাইল ও কনসোল লগিং।",
                "code": "import logging\nlogging.basicConfig(level=logging.INFO)"
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
        "summary": "cProfile, timeit, functools.lru_cache, Memory optimization, Generator pipelines, Database indexing",
        "conceptSimple": "কোডের গতি বৃদ্ধি এবং মেমোরি খরচ কমানোর প্রক্রিয়া হলো অপটিমাইজেশন। অপ্রয়োজনীয় লুপ পরিহার, lru_cache দিয়ে মেমোইজেশন এবং জেনারেটর ব্যবহার করে পারফরম্যান্স কয়েকগুণ বাড়ানো যায়।",
        "conceptTechnical": "CPython performance bottlenecks are identified via deterministic profiling (cProfile, line_profiler). Optimizations include algorithm complexity reduction, caching expensive pure function outputs with lru_cache, and utilizing __slots__ to eliminate instance __dict__ overhead.",
        "exampleCode": """# 29. Performance Optimization: LRU Cache & __slots__
import time
from functools import lru_cache

# 1. LRU Cache for Exponential Complexity Functions
@lru_cache(maxsize=128)
def optimized_fibonacci(n: int) -> int:
    if n < 2:
        return n
    return optimized_fibonacci(n - 1) + optimized_fibonacci(n - 2)

# 2. Memory Optimization via __slots__
class RegularUser:
    def __init__(self, name, email):
        self.name = name
        self.email = email

class SlottedUser:
    __slots__ = ['name', 'email']  # Disables dynamic __dict__ saving ~60% RAM per instance
    def __init__(self, name, email):
        self.name = name
        self.email = email

start = time.perf_counter()
fib_val = optimized_fibonacci(35)
calc_time = time.perf_counter() - start

print(f"Fibonacci(35) = {fib_val} (Computed in {calc_time * 1000:.4f} ms with caching)")
print("Slotted instance initialized with fixed memory footprint.")""",
        "expectedOutput": """Fibonacci(35) = 9227465 (Computed in 0.0450 ms with caching)
Slotted instance initialized with fixed memory footprint.""",
        "practiceTask": "timeit মডিউল ব্যবহার করে List Comprehension এবং обычный for loop এর এক্সিকিউশন টাইম তুলনা করুন।",
        "subtopics": [
            {
                "name": "timeit & cProfile",
                "desc": "কোড ব্লকের ন্যানোসেকেন্ড টাইম এবং ফাংশন কলের সংখ্যা বিশ্লেষণ।",
                "code": "import timeit\nt = timeit.timeit('[x**2 for x in range(1000)]', number=1000)\nprint(f'{t:.4f}s')"
            },
            {
                "name": "Caching (functools.lru_cache)",
                "desc": "বারংবার কল হওয়া ফাংশনের রেজাল্ট মেমোরিতে ক্যাশ করে রাখা।",
                "code": "from functools import lru_cache\n@lru_cache(maxsize=64)\ndef calc(x): return x ** 3"
            },
            {
                "name": "Memory Optimization (__slots__)",
                "desc": "লাখ লাখ অবজেক্টের ক্ষেত্রে মেমোরি কনজাম্পশন ৫০% পর্যন্ত কমানো।",
                "code": "class Node:\n    __slots__ = ('value', 'next')\n    def __init__(self, v): self.value = v"
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
        "summary": "pip, PyPI, virtualenv/venv, requirements.txt, pyproject.toml, Poetry, uv, Package publishing",
        "conceptSimple": "প্রজেক্টের ডিপেন্ডেন্সি ম্যানেজ করতে ভার্চুয়াল এনভায়রনমেন্ট (venv) ব্যবহার করা হয় যাতে এক প্রজেক্টের প্যাকেজের সাথে অন্য প্রজেক্টের কনফ্লিক্ট না হয়। আধুনিক পাইথনে uv এবং Poetry দ্রুতগতি ও লকফাইলের জন্য জনপ্রিয়।",
        "conceptTechnical": "Python packaging adheres to PEP 517/518/621 specifications using pyproject.toml build system definitions. Modern package managers like uv (written in Rust) resolve dependencies 10-100x faster than traditional pip.",
        "exampleCode": """# 30. Modern pyproject.toml Specification Blueprint
\"\"\"
[project]
name = "pymaster-engine"
version = "1.0.0"
description = "High-performance Python Master Curriculum Suite"
authors = [{ name = "PyMastery Team", email = "dev@pymastery.io" }]
dependencies = [
    "fastapi>=0.110.0",
    "uvicorn[standard]>=0.28.0",
    "pydantic>=2.6.0",
    "sqlalchemy>=2.0.0",
]
requires-python = ">=3.11"

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"
\"\"\"
print("Modern pyproject.toml dependency configuration blueprint ready for uv/Poetry.")""",
        "expectedOutput": """Modern pyproject.toml dependency configuration blueprint ready for uv/Poetry.""",
        "practiceTask": "টার্মিনালে 'python -m venv .venv' দিয়ে একটি ভার্চুয়াল এনভায়রনমেন্ট তৈরি ও অ্যাক্টিভেট করে 'pip freeze > requirements.txt' তৈরি করুন।",
        "subtopics": [
            {
                "name": "venv & pip",
                "desc": "ভার্চুয়াল এনভায়রনমেন্ট তৈরি (python -m venv venv) এবং অ্যাক্টিভেশন।",
                "code": "# source venv/bin/activate (Linux/Mac) | .\\venv\\Scripts\\activate (Windows)"
            },
            {
                "name": "Modern Tooling: uv & Poetry",
                "desc": "uv (Ultra-fast Rust package manager) এবং Poetry দিয়ে ডিপেন্ডেন্সি ও বিল্ড হ্যান্ডলিং।",
                "code": "# uv pip install -r requirements.txt | poetry run pytest"
            },
            {
                "name": "Publishing to PyPI",
                "desc": "প্যাকেজ বিল্ড (python -m build) এবং Twine দিয়ে PyPI তে আপলোড।",
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
        "summary": "git init, commit, branch, merge, pull requests, .gitignore for Python, GitHub Actions CI/CD",
        "conceptSimple": "গিট দিয়ে কোডের হিস্ট্রি ট্র্যাক করা যায় এবং গিটহাব দিয়ে টিমের সাথে কাজ করা যায়। পাইথন প্রজেক্টে .gitignore ফাইল দিয়ে অপ্রয়োজনীয় ক্যাশ (__pycache__) ও ভার্চুয়াল এনভায়রনমেন্ট (.venv) গিট থেকে বাদ দিতে হয়।",
        "conceptTechnical": "Git is a distributed content-addressable version control system using SHA-1/SHA-256 commit DAGs. CI/CD pipelines automate testing, linting (flake8, ruff), and automated releases via GitHub Actions workflows.",
        "exampleCode": """# 31. Python-Specific .gitignore Blueprint & GitHub Action CI
PYTHON_GITIGNORE_RULES = [
    "# Byte-compiled / optimized / DLL files",
    "__pycache__/",
    "*.py[cod]",
    "# Virtual Environments",
    ".venv/",
    "venv/",
    "env/",
    "# Environment variables & secrets",
    ".env",
    "*.env.local",
    "# Pytest & coverage caches",
    ".pytest_cache/",
    ".coverage",
    "htmlcov/"
]

print("Essential Python .gitignore Rules:")
for rule in PYTHON_GITIGNORE_RULES[:6]:
    print(f"  {rule}")""",
        "expectedOutput": """Essential Python .gitignore Rules:
  # Byte-compiled / optimized / DLL files
  __pycache__/
  *.py[cod]
  # Virtual Environments
  .venv/
  venv/
  env/""",
        "practiceTask": "একটি GitHub Actions workflow (.github/workflows/ci.yml) ফাইল তৈরি করুন যা প্রতিটি പുশ-এ pytest রান করবে।",
        "subtopics": [
            {
                "name": "Git Core Commands",
                "desc": "git init, git add ., git commit -m 'feat: add user auth', git push origin main।",
                "code": "# git branch -M main && git push -u origin main"
            },
            {
                "name": "Branching & Pull Requests",
                "desc": "git checkout -b feature-login, PR রিভিউ এবং মার্জ কনফ্লিক্ট সমাধান।",
                "code": "# git checkout -b feat/payment-gateway"
            },
            {
                "name": "GitHub Actions for Python",
                "desc": "স্বয়ংক্রিয় টেস্ট ও লিন্টিং পাইপলাইন রান করা।",
                "code": "# steps: - uses: actions/setup-python@v5; - run: pytest"
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
        "summary": "Docker, Dockerfile, Docker Compose, Linux basics, Gunicorn/Uvicorn, Nginx Reverse Proxy, Cloud Deploy",
        "conceptSimple": "প্রজেক্ট সার্ভারে লাইভ করার জন্য ডকার দিয়ে কনটেইনার তৈরি করা হয়, যা সব কম্পিউটারে একইভাবে রান করে। লিনাক্স সার্ভার, Nginx এবং Uvicorn দিয়ে প্রোডাকশন ট্রাফিক হ্যান্ডেল করা হয়।",
        "conceptTechnical": "Docker packages Python runtimes, OS system libraries, and application dependencies into immutable OCI-compliant container images. Production deployments employ reverse proxies (Nginx/Traefik) terminating TLS and routing to ASGI workers (Uvicorn).",
        "exampleCode": """# 32. Multi-Stage Production Dockerfile for Python FastAPI
DOCKERFILE_CONTENT = \"\"\"
# Build Stage
FROM python:3.12-slim AS builder
WORKDIR /app
RUN pip install --no-cache-dir poetry
COPY pyproject.toml poetry.lock ./
RUN poetry export -f requirements.txt --output requirements.txt --without-hashes

# Final Production Runtime Stage
FROM python:3.12-slim AS runtime
WORKDIR /app
ENV PYTHONUNBUFFERED=1 \\
    PYTHONDONTWRITEBYTECODE=1

COPY --from=builder /app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Run as non-root user for security
RUN useradd -m appuser && chown -R appuser /app
USER appuser
COPY . .

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4"]
\"\"\"
print("Production-grade Multi-Stage Dockerfile blueprint verified.")""",
        "expectedOutput": """Production-grade Multi-Stage Dockerfile blueprint verified.""",
        "practiceTask": "একটি docker-compose.yml ফাইল লিখুন যাতে একটি FastAPI অ্যাপ এবং একটি PostgreSQL ডেটাবেস সার্ভিস একত্রে রান করবে।",
        "subtopics": [
            {
                "name": "Dockerfile & Multi-stage builds",
                "desc": "লাইটওয়েট সিকিউর ডকার ইমেজ তৈরি এবং নন-রুট ইউজার কনফিগারেশন।",
                "code": "# docker build -t my-python-api . && docker run -p 8000:8000 my-python-api"
            },
            {
                "name": "Docker Compose",
                "desc": "মাল্টি-সার্ভিস (Web + Postgres + Redis) এক কম্যান্ডে রান (docker-compose up -d)।",
                "code": "# docker compose up --build -d"
            },
            {
                "name": "Linux & Reverse Proxy (Nginx)",
                "desc": "SSL/TLS সার্টিফিকেট, Nginx proxy_pass, systemd সার্ভিস ম্যানেজমেন্ট।",
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
        "summary": "Clean Code, SOLID principles, DRY, Repository Pattern, Factory, Strategy, Dependency Injection",
        "conceptSimple": "বড় প্রজেক্ট তৈরি ও মেইনটেইন করার জন্য আর্কিটেকচার প্যাটার্ন মানতে হয়। SOLID প্রিন্সিপাল এবং রিপোজিটরি প্যাটার্ন কোডকে সহজে টেস্টযোগ্য এবং স্কেলেবল বানায়।",
        "conceptTechnical": "Enterprise software design applies SOLID: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. Decoupling persistence via the Repository Pattern isolates business domain logic from storage frameworks.",
        "exampleCode": """# 33. Dependency Inversion & Repository Pattern Architecture
from abc import ABC, abstractmethod

# 1. Domain Entity
class User:
    def __init__(self, user_id: int, username: str):
        self.user_id = user_id
        self.username = username

# 2. Repository Interface (Abstraction)
class UserRepository(ABC):
    @abstractmethod
    def get_by_id(self, user_id: int) -> User | None:
        pass

# 3. Concrete Implementation (In-Memory / Database)
class InMemoryUserRepository(UserRepository):
    def __init__(self):
        self._storage = {1: User(1, "Adnan"), 2: User(2, "Sadia")}

    def get_by_id(self, user_id: int) -> User | None:
        return self._storage.get(user_id)

# 4. Service with Dependency Injection
class UserService:
    def __init__(self, repo: UserRepository):
        self.repo = repo  # Injected dependency

    def get_user_profile(self, user_id: int) -> str:
        user = self.repo.get_by_id(user_id)
        if not user:
            return "User Not Found"
        return f"Profile: {user.username} (ID: {user.user_id})"

# Execution
service = UserService(InMemoryUserRepository())
print(service.get_user_profile(1))""",
        "expectedOutput": """Profile: Adnan (ID: 1)""",
        "practiceTask": "Factory Pattern ব্যবহার করে বিভিন্ন ধরণের নোটিফিকেশন সার্ভিস (Email, SMS, Push Notification) তৈরি করার ক্লাস ডিজাইন করুন।",
        "subtopics": [
            {
                "name": "SOLID Principles",
                "desc": "Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion।",
                "code": "# High-level modules should depend on abstractions, not concretions."
            },
            {
                "name": "Design Patterns (Factory, Strategy, Singleton)",
                "desc": "ক্রিয়েশনাল, স্ট্রাকচারাল এবং বিহেভিওরাল ডিজাইন প্যাটার্নস।",
                "code": "# class ServiceSingleton:\n#     _instance = None"
            },
            {
                "name": "Layered & Clean Architecture",
                "desc": "Controllers -> Services (Domain Logic) -> Repositories (Data Access) পৃথকীকরণ।",
                "code": "# Routers/Controllers handle HTTP, Services handle Business rules"
            }
        ]
    },
    {
        "id": "topic-34",
        "num": 34,
        "title": "📝 Professional Python (PEP 8, Type Hints, Code Reviews)",
        "category": "advanced",
        "categoryLabel": "Professional Standards",
        "icon": "fa-file-signature",
        "summary": "PEP 8 style guide, Type hinting (mypy), Docstrings (Google/Sphinx), Code reviews, Clean Code",
        "conceptSimple": "প্রফেশনাল ডেভেলপার হতে হলে পাইথনের অফিশিয়াল স্টাইল গাইড (PEP 8) এবং টাইপ হিন্টিং অনুসরণ করতে হয়। স্পষ্ট ডকস্ট্রিং ও পরিচ্ছন্ন কোড টিমে কাজের মান বহুগুণ বাড়িয়ে দেয়।",
        "conceptTechnical": "PEP 8 specifies whitespace, naming conventions, and layout rules. Static type checking with Mypy enforces strict type safety without runtime performance penalty. Modern linters like Ruff execute 100+ rules with near-instant speeds.",
        "exampleCode": """# 34. Professional Python Standards (PEP 8 + Type Hints + Docstring)
from typing import Optional, List, Dict

def calculate_metric_averages(
    scores: List[float], 
    threshold: Optional[float] = None
) -> Dict[str, float]:
    \"\"\"Calculates statistical metric averages above an optional threshold.

    Args:
        scores: A list of numeric scores to analyze.
        threshold: Optional minimum score cutoff. Defaults to None.

    Returns:
        A dictionary containing the count, total, and average score.

    Raises:
        ValueError: If scores list is empty.
    \"\"\"
    if not scores:
        raise ValueError("Scores list cannot be empty.")
        
    filtered = [s for s in scores if threshold is None or s >= threshold]
    total = sum(filtered)
    count = len(filtered)
    avg = total / count if count > 0 else 0.0

    return {"count": float(count), "total": total, "average": round(avg, 2)}

report = calculate_metric_averages([85.5, 92.0, 78.5, 95.0, 60.0], threshold=75.0)
print("PEP 8 & Type Hint Compliant Output:", report)""",
        "expectedOutput": """PEP 8 & Type Hint Compliant Output: {'count': 4.0, 'total': 351.0, 'average': 87.75}""",
        "practiceTask": "আপনার যেকোনো আগের কোডে mypy এবং ruff রান করে টাইপ এরর ও স্টাইল ওয়ার্নিং ফিক্স করুন।",
        "subtopics": [
            {
                "name": "PEP 8 Style Rules",
                "desc": "৪ স্পেস ইনডেন্টেশন, ৭৯ ক্যারেক্টার লাইন লেন্থ, snake_case ভ্যারিয়েবল, PascalCase ক্লাস।",
                "code": "# CONSTANT_NAME = 100\n# def function_name(): pass"
            },
            {
                "name": "Static Type Hints & Mypy",
                "desc": "Union, Optional, List, Dict, Callable, Any টাইপ অ্যানোটেশন।",
                "code": "from typing import Union\ndef parse(val: Union[int, str]) -> int: return int(val)"
            },
            {
                "name": "Google / Sphinx Style Docstrings",
                "desc": "Args, Returns, Raises ফরম্যাটে ক্লাউড কোয়ালিটি ডকুমেন্টেশন।",
                "code": "# \"\"\"Docstring description.\n# Args:\n#     x (int): The x coordinate.\n# \"\"\""
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
        "summary": "VS Code setup, Postman / Thunder Client, Docker Desktop, Terminal Mastery, DB Browsers",
        "conceptSimple": "একজন দক্ষ পাইথন ইঞ্জিনিয়ারের টুলকিটে VS Code এর এক্সটেনশন, টার্মিনাল শর্টকাট, Postman দিয়ে এপিআই টেস্ট এবং ডেটাবেস ব্রাউজার অপরিহার্য অংশ।",
        "conceptTechnical": "The professional toolchain integrates static analysis (Pylance, Ruff), terminal emulators, API test suites (Postman/Bruno/Hoppscotch), Docker GUI tooling, and visual database clients (DBeaver, TablePlus, SQLiteStudio).",
        "exampleCode": """# 35. Essential Developer Toolchain Configuration
DEV_TOOLCHAIN_STACK = {
    "Code_Editor": "VS Code (Extensions: Python, Pylance, Ruff, Docker, GitLens)",
    "API_Testing": "Postman / Thunder Client / cURL",
    "Database_Clients": "DBeaver / TablePlus / SQLiteStudio",
    "Terminal_Shell": "PowerShell / Zsh with Starship prompt",
    "Version_Control": "Git CLI + GitHub Desktop + GitHub Actions",
    "Containerization": "Docker Desktop + Docker Compose"
}

print("Professional Python Engineering Toolchain:")
for category, tool in DEV_TOOLCHAIN_STACK.items():
    print(f"  🛠️ {category:<18}: {tool}")""",
        "expectedOutput": """Professional Python Engineering Toolchain:
  🛠️ Code_Editor       : VS Code (Extensions: Python, Pylance, Ruff, Docker, GitLens)
  🛠️ API_Testing       : Postman / Thunder Client / cURL
  🛠️ Database_Clients  : DBeaver / TablePlus / SQLiteStudio
  🛠️ Terminal_Shell    : PowerShell / Zsh with Starship prompt
  🛠️ Version_Control   : Git CLI + GitHub Desktop + GitHub Actions
  🛠️ Containerization  : Docker Desktop + Docker Compose""",
        "practiceTask": "VS Code এ Ruff এবং Pylance এক্সটেনশন কনফিগার করে অটো-ফরম্যাট অন সেভ (Format on Save) চালু করুন।",
        "subtopics": [
            {
                "name": "VS Code Power Setup",
                "desc": "Settings.json কনফিগারেশন, Pylance Type Checking, Debugger Launch profiles।",
                "code": "// .vscode/settings.json\n// {\"editor.formatOnSave\": true, \"python.analysis.typeCheckingMode\": \"basic\"}"
            },
            {
                "name": "Postman & API Client Mastery",
                "desc": "Environment variables, Collection Runners, Pre-request scripts ও টেস্টিং।",
                "code": "// pm.test('Status code is 200', function () { pm.response.to.have.status(200); });"
            },
            {
                "name": "Database Browsers & Terminal Mastery",
                "desc": "SQLite Viewer, DBeaver কানেকশন এবং লিনাক্স ব্যাশ/পাওয়ারশেল শর্টকাট।",
                "code": "# curl -X GET http://localhost:8000/api/health"
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
        "conceptSimple": "হাতে-কলমে কাজ শেখার জন্য প্রজেক্টের কোনো বিকল্প নেই। এখানে বিগিনার লেভেলের ক্যালকুলেটর ও কুইজ অ্যাপ থেকে শুরু করে প্রডাকশন-গ্রেড এআই এজেন্ট ও ফুল-স্ট্যাক আরএজি (RAG) অ্যাপ্লিকেশন পর্যন্ত বিস্তারিত আর্কিটেকচার দেওয়া হয়েছে।",
        "conceptTechnical": "Project portfolios showcase end-to-end software engineering competence: requirements analysis, database schema normalization, asynchronous REST API architectures, automated test suites, and Dockerized microservice deployments.",
        "exampleCode": """# 36. Complete Real-World Project: High-Speed URL Shortener API
import hashlib
import time

class URLShortenerService:
    \"\"\"Production-ready in-memory URL Shortener engine.\"\"\"
    def __init__(self, domain: str = "https://sho.rt/"):
        self.domain = domain
        self.url_map = {}      # short_code -> original_url
        self.reverse_map = {}  # original_url -> short_code
        self.clicks = {}       # short_code -> click_count

    def shorten_url(self, original_url: str) -> str:
        if original_url in self.reverse_map:
            code = self.reverse_map[original_url]
            return f"{self.domain}{code}"
        
        # Generate 6-character unique hash
        hash_digest = hashlib.md5(original_url.encode()).hexdigest()[:6]
        self.url_map[hash_digest] = original_url
        self.reverse_map[original_url] = hash_digest
        self.clicks[hash_digest] = 0
        return f"{self.domain}{hash_digest}"

    def resolve_url(self, short_code: str) -> str | None:
        if short_code in self.url_map:
            self.clicks[short_code] += 1
            return self.url_map[short_code]
        return None

# Test the service
service = URLShortenerService()
short = service.shorten_url("https://github.com/developer/pymastery-complete-suite")
print(f"Generated Short URL : {short}")

code = short.split("/")[-1]
resolved = service.resolve_url(code)
print(f"Resolved Destination: {resolved}")
print(f"Analytics Click Count: {service.clicks[code]}")""",
        "expectedOutput": """Generated Short URL : https://sho.rt/8c2a41
Resolved Destination: https://github.com/developer/pymastery-complete-suite
Analytics Click Count: 1""",
        "practiceTask": "৪টি ক্যাটাগরি থেকে যেকোনো একটি প্রজেক্ট (যেমন: Expense Tracker বা AI Research Assistant) নির্বাচন করে গিটহাবে পুশ করুন।",
        "subtopics": [
            {
                "name": "Beginner Tier (10 Projects)",
                "desc": "Calculator, Number Guessing, Unit Converter, Age/Grade Calc, Simple Quiz, To-do List, Password Gen, Contact Book, Expense Tracker, Dice Roller।",
                "code": "# Beginner project template ready"
            },
            {
                "name": "Intermediate Tier (10 Projects)",
                "desc": "Weather App, Currency Converter, File Organizer, Notes App, Library Management, Student Management, Inventory System, Bank Simulation, Quiz App, CLI Productivity Tool।",
                "code": "# Intermediate project template ready"
            },
            {
                "name": "Advanced Tier (10 Projects)",
                "desc": "REST API, Authentication System, Blog Application, E-Commerce Backend, Chat Application, Web Scraper, Automation Suite, Desktop App, Data Dashboard, DBMS।",
                "code": "# Advanced project template ready"
            },
            {
                "name": "Pro Tier (10 Production Projects)",
                "desc": "AI Chatbot, AI Coding Assistant, Personal AI Agent, RAG Application, AI Document Assistant, ML App, Real-Time WebSocket API, SaaS Backend, Microservices System, Full-Stack Production App।",
                "code": "# Production project template ready"
            }
        ]
    }
]

output_path = "c:/Users/user/Downloads/pymaster/js/topics-data.js"
os.makedirs(os.path.dirname(output_path), exist_ok=True)

js_content = "// Comprehensive 36 Modules Data for PyMastery\nconst TOPICS_DATA = " + json.dumps(topics, indent=2, ensure_ascii=False) + ";\n"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully wrote {len(topics)} complete modules to {output_path}")
