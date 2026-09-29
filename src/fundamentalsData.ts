export interface FundamentalTopic {
  id: string;
  title: string;
  section: string;
  icon: string;
  conceptSimple: string;
  conceptTechnical: string;
  exampleCode: string;
  expectedOutput: string;
  practiceTask: string;
  subtopics: {
    name: string;
    description: string;
    codeExample?: string;
  }[];
}

export const FUNDAMENTALS_TOPICS: FundamentalTopic[] = [
  {
    id: "getting-started",
    title: "1.1 Getting Started: Foundations & Ecosystem",
    section: "Python Fundamentals — Beginner",
    icon: "Compass",
    conceptSimple: "Python is a clean, readable, and powerful programming language. It reads almost like natural English, making it the ideal starting point for anyone learning to code. In this section, we explore Python setup, runtime execution, and writing your first scripts.",
    conceptTechnical: "Python is an interpreted, high-level, general-purpose, dynamically-typed language. Code execution is managed by the Python Interpreter (CPython), which compiles .py source code into bytecode (.pyc) and executes it on the Python Virtual Machine (PVM). It uses significant 4-space indentation for code block structure.",
    exampleCode: `# Lesson 1.1: Environment exploration and version check
import sys
import keyword

print("--- Python Environment Info ---")
print(f"Python Version: {sys.version.split()[0]}")
print(f"Total Keywords: {len(keyword.kwlist)}")
print(f"Keywords list: {keyword.kwlist[:5]}...")
`,
    expectedOutput: `--- Python Environment Info ---
Python Version: 3.11.8
Total Keywords: 35
Keywords list: ['False', 'None', 'True', 'and', 'as']...`,
    practiceTask: "Open your terminal or command prompt, type 'python' to launch the interactive REPL, and execute three different print statements with comments.",
    subtopics: [
      {
        name: "What is Python?",
        description: "Python is a high-level, interpreted programming language created by Guido van Rossum in 1991. It is celebrated for its clean syntax, rapid prototyping capabilities, and vast ecosystem.",
        codeExample: "# Python code is clean and human-readable\nprint('Hello World!')"
      },
      {
        name: "Why Use Python?",
        description: "Widely used across Web Development (Django, FastAPI), Data Science & AI (Pandas, PyTorch), Cloud Automation, Cybersecurity, and Enterprise System Scripting."
      },
      {
        name: "Python Installation & PATH Setup",
        description: "Download Python from python.org. Ensure the 'Add Python to PATH' checkbox is enabled during installation to run Python directly from any terminal."
      },
      {
        name: "Python Version Verification",
        description: "Verify your active Python installation by running 'python --version' or 'python3 --version' in your command terminal."
      },
      {
        name: "The Python Interpreter & CPython",
        description: "The interpreter parses source code into bytecode and executes instructions in memory. CPython is the standard reference implementation written in C."
      },
      {
        name: "IDLE, VS Code & PyCharm",
        description: "IDLE is the built-in default editor. VS Code provides lightweight, modern development tooling, while PyCharm is a full-featured dedicated Python IDE."
      },
      {
        name: "Terminal / Command Prompt & .py Files",
        description: "Python code is saved in text files with the .py extension and executed from the command line using 'python filename.py'."
      },
      {
        name: "Interactive REPL (Read-Eval-Print Loop)",
        description: "Typing 'python' without arguments opens an interactive session that evaluates code line-by-line in real time. Exit using exit() or quit()."
      },
      {
        name: "Comments (# and docstrings)",
        description: "Single-line comments start with #. Multiline docstrings (''' or \"\"\") provide structured documentation for modules, classes, and functions."
      },
      {
        name: "Code Indentation Rules",
        description: "Python replaces curly braces with 4-space indentation to define functions, loops, and conditional blocks. Consistent indentation is mandatory."
      },
      {
        name: "Python Reserved Keywords",
        description: "Python has 35 reserved keywords (like if, def, class, import, return) that cannot be used as variable identifiers or function names."
      },
      {
        name: "Python Clean Syntax",
        description: "Python eliminates unnecessary semicolons and complex boilerplate, following PEP 8 design standards for maximum code clarity."
      }
    ]
  },
  {
    id: "first-programs",
    title: "1.2 First Programs: Standard Output & Formatting",
    section: "Python Fundamentals — Beginner",
    icon: "Terminal",
    conceptSimple: "The print() function is how your code communicates with you. It displays numbers, text, and variables in the terminal. You can customize how items are separated and formatted on screen.",
    conceptTechnical: "print(*objects, sep=' ', end='\\n', file=sys.stdout, flush=False) formats arguments via str() and writes bytes to standard output. Custom separators and escape sequences allow precise control over stream formatting.",
    exampleCode: `# Lesson 1.2: Formatting and Output
print("Hello", "Python", "Master", sep=" -> ")
print("First Line\\nSecond Line\\n\\tIndented Line")

# Modern f-string formatting
name = "Alex"
score = 98.5
print(f"Developer: {name} | Score: {score:.1f}%")
`,
    expectedOutput: `Hello -> Python -> Master
First Line
Second Line
	Indented Line
Developer: Alex | Score: 98.5%`,
    practiceTask: "Write a script that prints a formatted 3-line receipt with column alignment using escape characters and custom separators.",
    subtopics: [
      {
        name: "The Built-in print() Function",
        description: "Outputs string representations of objects to standard output with automatic spacing and trailing newlines.",
        codeExample: "print('Welcome to Python Programming!')"
      },
      {
        name: "Multiple print() Arguments & sep Parameter",
        description: "Passing multiple positional arguments to print() automatically inserts the delimiter specified by sep=' '."
      },
      {
        name: "Escape Sequences (\\n, \\t, \\\\, \\', \\\")",
        description: "Special characters: \\n creates a new line, \\t inserts a horizontal tab, and \\\\ escapes literal backslashes."
      },
      {
        name: "Single, Double & Triple Quotes",
        description: "Single and double quotes are interchangeable for single-line strings. Triple quotes preserve exact line breaks and formatting across paragraphs."
      },
      {
        name: "Modern String Formatting (f-strings)",
        description: "f-strings (PEP 498) evaluate expressions inside {} at runtime with formatting specifiers for precision and alignment."
      },
      {
        name: "Basic Program Structure",
        description: "Standard script layout: header docstrings, module imports, global constants, helper functions, and the entry-point execution guard."
      }
    ]
  },
  {
    id: "variables-memory",
    title: "1.3 Variables, Memory Addressing & Dynamic Typing",
    section: "Python Fundamentals — Beginner",
    icon: "Database",
    conceptSimple: "Variables in Python are symbolic labels attached to values in memory. Assigning x = 10 attaches the label 'x' to the number 10. You do not need to specify data types in advance.",
    conceptTechnical: "Variables are C-level pointers to PyObject structures allocated on the heap. Small integers (-5 to 256) are interned in a singleton pool. Reassignment updates the reference pointer without mutating underlying immutable memory.",
    exampleCode: `# Lesson 1.3: Variables & Memory Inspection
user_id = 9042
balance = 1250.75
is_active = True

# In-place variable swap
a, b = 10, 20
a, b = b, a
print(f"Swapped: a={a}, b={b}")
print(f"Memory Address id(user_id): {id(user_id)}")
`,
    expectedOutput: `Swapped: a=20, b=10
Memory Address id(user_id): 140722153285536`,
    practiceTask: "Declare three variables holding your name, current year, and target salary, and swap two values in a single line.",
    subtopics: [
      {
        name: "What is a Variable?",
        description: "A symbolic reference name bound to an object stored in computer memory."
      },
      {
        name: "Variable Declaration & PEP 8 Naming",
        description: "Must start with a letter or underscore, cannot contain spaces or start with numbers, and should use snake_case."
      },
      {
        name: "Constants by Convention (UPPERCASE)",
        description: "Constants in Python are represented in ALL_CAPS (e.g. MAX_CONNECTIONS = 100) to signal to developers that values should remain unchanged."
      },
      {
        name: "Multiple Assignment & Tuple Unpacking",
        description: "Assign multiple variables in a single statement (e.g. x, y, z = 1, 2, 3) and perform in-place swapping with zero temporary variables."
      },
      {
        name: "Dynamic Typing & Rebinding",
        description: "Variables can reference different data types over their lifecycle as types are checked at runtime rather than compile time."
      }
    ]
  },
  {
    id: "data-types",
    title: "1.4 Data Types, Mutability & Type Checking",
    section: "Python Fundamentals — Beginner",
    icon: "Cpu",
    conceptSimple: "Data types define the nature of data you work with. Numbers allow math, strings handle text, booleans handle decisions, and lists group items together. Immutable types cannot be changed once created, while mutable types can be edited in place.",
    conceptTechnical: "CPython distinguishes between immutable types (int, float, complex, str, tuple, frozenset, bytes) and mutable types (list, dict, set, bytearray). The isinstance() function supports inheritance hierarchy checks and union tuples.",
    exampleCode: `# Lesson 1.4: Data Types and Type Checking
x_int = 42
x_float = 3.14159
x_str = "Python"
x_bool = True
x_none = None

print(f"int type: {type(x_int)}")
print(f"isinstance check: {isinstance(x_float, (int, float))}")
print(f"Truthy check on empty list []: {bool([])}")
`,
    expectedOutput: `int type: <class 'int'>
isinstance check: True
Truthy check on empty list []: False`,
    practiceTask: "Create a list containing an integer, float, string, and boolean, and print the type of each element in a loop.",
    subtopics: [
      {
        name: "Primitive Numbers (int, float, complex)",
        description: "Arbitrary precision integers, 64-bit IEEE 754 floats, and complex numbers with real and imaginary parts."
      },
      {
        name: "Text, Boolean & NoneType (str, bool, None)",
        description: "Unicode string characters, True/False booleans, and the None singleton representing null values."
      },
      {
        name: "Sequence & Collection Types",
        description: "Ordered sequences (list, tuple, range), key-value mappings (dict), and unique value collections (set, frozenset)."
      },
      {
        name: "Mutable vs Immutable Objects",
        description: "Immutable objects cannot be altered in place; mutable objects allow in-place modification, insertions, and deletions."
      },
      {
        name: "Type Inspection: type() vs isinstance()",
        description: "type() checks exact class matches, while isinstance() supports subclassing and multiple type tuples."
      }
    ]
  },
  {
    id: "operators-precedence",
    title: "1.5 Operators, Expressions & Evaluation Rules",
    section: "Python Fundamentals — Beginner",
    icon: "Sparkles",
    conceptSimple: "Operators allow you to calculate values, compare items, and make logical decisions. Python provides standard math symbols (+, -, *, /) and comparison checks (==, !=, >).",
    conceptTechnical: "Logical operators (and, or) use short-circuit evaluation and return the actual operand value. Identity operators (is, is not) verify memory address equivalence, while comparison operators invoke __eq__.",
    exampleCode: `# Lesson 1.5: Operators and Walrus Operator
a, b = 15, 4
print(f"Floor Division: {a} // {b} = {a // b}")
print(f"Modulo Remainder: {a} % {b} = {a % b}")
print(f"Exponentiation: 2 ** 8 = {2 ** 8}")

# Walrus assignment expression (:=)
if (n := len("PyMaster")) > 5:
    print(f"String length {n} is greater than 5")
`,
    expectedOutput: `Floor Division: 15 // 4 = 3
Modulo Remainder: 15 % 4 = 3
Exponentiation: 2 ** 8 = 256
String length 8 is greater than 5`,
    practiceTask: "Write an expression using modulo (%) and floor division (//) that extracts the hours, minutes, and seconds from 3665 total seconds.",
    subtopics: [
      {
        name: "Arithmetic Operators (+, -, *, /, //, %, **)",
        description: "Standard mathematical operations, true division, floor division, modulo, and exponentiation."
      },
      {
        name: "Comparison Operators (==, !=, >, <, >=, <=)",
        description: "Evaluating values and supporting chained comparisons like 10 <= x <= 50."
      },
      {
        name: "Logical Operators & Short-Circuiting (and, or, not)",
        description: "Boolean logic operators that short-circuit evaluation for optimal execution speed."
      },
      {
        name: "Identity (is) vs Equality (==)",
        description: "'==' checks value equivalence; 'is' checks identical memory addresses (used for None checks)."
      },
      {
        name: "Membership Operators (in, not in)",
        description: "Checking whether an item exists inside sequences, sets, or dictionaries (O(1) in hash tables)."
      },
      {
        name: "The Walrus Operator (:=)",
        description: "Assignment expressions allowing variable assignment and evaluation within a single statement."
      },
      {
        name: "Operator Precedence (PEMDAS / BODMAS)",
        description: "Order of evaluation: parentheses, exponents, multiplication/division, addition/subtraction, comparisons, logical."
      }
    ]
  }
];
