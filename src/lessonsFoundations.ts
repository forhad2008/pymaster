import { Lesson } from './pythonLessonsData';

export const FOUNDATIONS_LESSONS: Lesson[] = [
  {
    id: "what-is-python",
    title: "1. Getting Started",
    levelId: "level-1",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Python is an interpreted, high-level, general-purpose, dynamically-typed programming language. Program execution is managed by the CPython interpreter which compiles source code (.py) into platform-independent bytecode (.pyc), and executes it inside the Python Virtual Machine (PVM). It uses automatic garbage collection via reference counting and cyclic garbage collection, enforces logical scopes through strict whitespace indentation (PEP 8 standard), and relies on a rich set of keywords retrieved via the 'keyword' standard library module.",
    why: "Developers choose Python because of its rapid development cycle, clean readable syntax, and massive ecosystem of over 400,000 libraries powering enterprise giants like Netflix, Instagram, Google, and NASA.",
    syntax: "# Initializing the python interpreter path\nimport sys\nprint(sys.version)",
    exampleCode: "# Lesson 1: Python environment check and keywords check\nimport sys\nimport keyword\n\npython_ver = sys.version.split()[0]\nis_v3 = sys.version_info.major == 3\nall_keywords = len(keyword.kwlist)\n\nprint('Python Version Active:')\nprint(python_ver)\nprint('Is Python 3.x Installed?')\nprint(is_v3)\nprint('Total Reserved Keywords in Python:')\nprint(all_keywords)",
    explanationLines: [
      { line: "import sys", desc: "Imports the system-specific parameters and functions module." },
      { line: "import keyword", desc: "Imports the reserved keyword list module to check language syntax definitions." },
      { line: "python_ver = sys.version.split()[0]", desc: "Extracts the exact version string of the active Python interpreter." },
      { line: "is_v3 = sys.version_info.major == 3", desc: "Evaluates if the active environment runs Python 3 (returns Boolean True or False)." },
      { line: "all_keywords = len(keyword.kwlist)", desc: "Calculates the total number of reserved keywords recognized by this interpreter." }
    ],
    expectedOutput: "Python Version Active:\n3.10.12\nIs Python 3.x Installed?\nTrue\nTotal Reserved Keywords in Python:\n35",
    commonMistakes: [
      { mistake: "class = 'Science'", fix: "Using a reserved keyword like 'class' or 'def' as a variable! Fix: class_name = 'Science'" }
    ],
    realLifeUse: "DevOps teams use Python scripts executed directly from the Terminal to audit server resources and check interpreter version compatibility during deployment.",
    practiceTask: "Write a program that prints your name, favorite editor (e.g., VS Code), and the total number of keywords in Python.",
    challenge: "Use Python comments to document a multi-line paragraph explaining the difference between compiler and interpreter execution, and print the active python version.",
    miniProject: "Build an automated developer workspace checker script that validates system python versions."
  },
  {
    id: "syntax",
    title: "2. Syntax & First Programs",
    levelId: "level-1",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "The print() function writes the formatted representation of objects to the standard output stream (sys.stdout) separated by 'sep' and terminated by 'end'. Python syntax uses the backslash '\\' as an escape character for inserting special sequences (like line feeds \\n and horizontal tabs \\t) and supports literal quotes enclosing string primitives.",
    why: "Mastering basic program structures, print variations, and escape sequences ensures your program's outputs are clean, well-formatted, and completely error-free.",
    syntax: "print('Line 1', 'Line 2', sep='\\n', end='\\n---\\n')",
    exampleCode: "# Lesson 2: Formatting output logs and escape character alignment\nprint('Developer Registration Form:')\nprint('Name:\\tKamal Uddin\\nRole:\\tPython Backend Engineer')\nprint(\"Project Status: \\\"Success\\\"\")\nprint('Compiled', 'Deployed', sep=' >>> ', end=' (OK)\\n')",
    explanationLines: [
      { line: "print('Developer Registration Form:')", desc: "Prints a static string header to stdout." },
      { line: "print('Name:\\tKamal Uddin\\nRole:\\tPython Backend Engineer')", desc: "Uses horizontal tabs (\\t) for alignment and a line feed (\\n) to split the output across two lines." },
      { line: "print(\"Project Status: \\\"Success\\\"\")", desc: "Uses backslash escape characters to print literal double quotes within a double-quoted string." },
      { line: "print('Compiled', 'Deployed', sep=' >>> ', end=' (OK)\\n')", desc: "Prints multiple arguments joined by ' >>> ' as a separator and ends the print with ' (OK)' followed by a newline." }
    ],
    expectedOutput: "Developer Registration Form:\nName:\tKamal Uddin\nRole:\tPython Backend Engineer\nProject Status: \"Success\"\nCompiled >>> Deployed (OK)",
    commonMistakes: [
      { mistake: "print('Hello world\")", fix: "Mixing single quotes with double quotes! Fix: Use matching quotes: print('Hello world') or print(\"Hello world\")" }
    ],
    realLifeUse: "API Gateways use formatted strings and tabs to print structural system diagnostics and requests paths in terminal logging terminals.",
    practiceTask: "Write a program using a single print() statement to display a shopping invoice containing Item, Qty, and Price, aligned using tabs.",
    challenge: "Print a decorative ASCII art house using a combination of backslashes, forward slashes, and print parameters.",
    miniProject: "Design a terminal command-line dashboard interface layout for a server performance monitor."
  },
  {
    id: "variables",
    title: "3. Variables & Assignment",
    levelId: "level-1",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Python variables are dynamic references (pointers) to objects in memory. It uses dynamic typing, meaning variable names are bound to objects of arbitrary types during runtime; type checking is performed at runtime rather than compile time. Constants are declared in uppercase by convention (PEP 8) but are not enforced by the runtime compiler.",
    why: "Variables allow programs to dynamically store, update, and manage game scores, transaction values, and session data during execution.",
    syntax: "variable_name = object_value\nconst_name = const_value # PEP 8 uppercase convention",
    exampleCode: "# Lesson 3: Variable allocation, reassignment, and dynamic typing\nAPP_NAME = 'PyMaster'\nversion = 1.0\n\n# Multiple assignment\nstatus, build_num = 'Active', 256\n\n# Reassignment and dynamic typing\nactive_connections = 5\nactive_connections = 'Disconnected' # Type changed dynamically\n\nprint('Application Name:')\nprint(APP_NAME)\nprint('Build Details:')\nprint(status)\nprint(build_num)\nprint('Current Network Connections:')\nprint(active_connections)",
    explanationLines: [
      { line: "APP_NAME = 'PyMaster'", desc: "Declares a constant variable according to PEP 8 uppercase standards." },
      { line: "status, build_num = 'Active', 256", desc: "Unpacks values simultaneously into two distinct variables in one line." },
      { line: "active_connections = 5", desc: "Initially binds an integer object to active_connections." },
      { line: "active_connections = 'Disconnected'", desc: "Rebinds the same variable reference to a string object, demonstrating dynamic typing." }
    ],
    expectedOutput: "Application Name:\nPyMaster\nBuild Details:\nActive\n256\nCurrent Network Connections:\nDisconnected",
    commonMistakes: [
      { mistake: "user-name = 'Amin'", fix: "Using hyphens in variable names! Hyphens are arithmetic minus signs. Fix: user_name = 'Amin'" }
    ],
    realLifeUse: "Ride-sharing apps use multiple assignment variables to track driver GPS coordinates (lat, lon = 23.81, 90.41) in real-time.",
    practiceTask: "Declare variables for a product title, discount price, and inventory status, and print them out.",
    challenge: "Write a program that swaps the values of two variables 'a' and 'b' in a single line without using a third temporary variable.",
    miniProject: "Design a profile registration state manager initializing constants and dynamic user credentials."
  },
  {
    id: "data-types",
    title: "4. Data Types Deep Dive",
    levelId: "level-1",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "All data types in Python are objects subclasses of the 'object' root class. Int supports arbitrary precision, float is implemented using C double-precision floating-point format (IEEE 754), complex holds real and imaginary parts as floats, and bool is a subclass of int. Mutability dictates whether an object's internal memory buffer (id()) can be modified without generating a new object instance in the memory heap.",
    why: "Knowing datatypes prevents logical computation bugs, avoids type errors, and allows choosing optimal structures (like sets for uniqueness or tuples for safety).",
    syntax: "print(type(5))\nprint(isinstance('A', str))",
    exampleCode: "# Lesson 4: Data types exploration, mutability, and assertions\nrating = 4.8\nis_recommended = True\ncustom_complex = 3 + 4j\nempty_val = None\n\n# Verifying types\nrating_type = type(rating)\nis_float = isinstance(rating, float)\nis_none = empty_val is None\n\nprint('Rating is float?')\nprint(is_float)\nprint('Rating raw type object:')\nprint(rating_type)\nprint('Complex value output:')\nprint(custom_complex)\nprint('Is the value empty None?')\nprint(is_none)",
    explanationLines: [
      { line: "rating = 4.8", desc: "Creates a floating-point decimal object." },
      { line: "custom_complex = 3 + 4j", desc: "Creates a complex numbers instance containing real (3) and imaginary (4) coefficients." },
      { line: "rating_type = type(rating)", desc: "Retrieves the exact type object, which is <class 'float'>." },
      { line: "is_float = isinstance(rating, float)", desc: "Safely checks if variable belongs to float class (highly recommended over type() comparison)." }
    ],
    expectedOutput: "Rating is float?\nTrue\nRating raw type object:\n<class 'float'>\nComplex value output:\n(3+4j)\nIs the value empty None?\nTrue",
    commonMistakes: [
      { mistake: "isinstance(val, Int)", fix: "Typing lowercase 'int' with a capital 'I'! Fix: isinstance(val, int)" }
    ],
    realLifeUse: "E-commerce transactional platforms use isinstance() to verify whether a discount voucher rate is a float/int before recalculating checkout values.",
    practiceTask: "Declare 5 variables of different datatypes, then use type() to print each one's class name.",
    challenge: "Prove that strings are immutable in Python by attempting to modify a character, catching the TypeError, and showing the memory address id() has not changed.",
    miniProject: "Build an automated client payload parser validating primitive types before database injection."
  },
  {
    id: "operators",
    title: "5. Operators & Precedence",
    levelId: "level-1",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Operators map to magic dunder methods (e.g., '+' resolves to __add__(), 'in' resolves to __contains__()). Identity operator 'is' compares the memory address of two pointers (id(a) == id(b)), while '==' compares equality of values. Bitwise operators perform low-level operations directly on the binary representations of integer primitives.",
    why: "Operators enable calculating shopping tax calculations, checking password match boundaries, or verifying if an email address is inside a blacklisted database set.",
    syntax: "is_valid = (val >= 0) and (val <= 100)\nis_identical = a is b",
    exampleCode: "# Lesson 5: Operators, Identity comparisons, and PEMDAS rules\na = 10\nb = 3\n\n# Arithmetic operations\nfloor_div = a // b\nmodulo = a % b\npower = a ** b\n\n# Identity & Membership comparisons\nlst_1 = [1, 2]\nlst_2 = [1, 2]\nis_same_ref = lst_1 is lst_2\nis_same_val = lst_1 == lst_2\nis_member = 1 in lst_1\n\n# Precedence check: 10 + 3 * 2 equals 16, not 26\nmath_precedence = a + b * 2\n\nprint('Floor Division & Remainder:')\nprint(floor_div)\nprint(modulo)\nprint('Are lists identical in memory? And are values equal?')\nprint(is_same_ref)\nprint(is_same_val)\nprint('Does 1 exist in list?')\nprint(is_member)\nprint('PEMDAS Result of 10 + 3 * 2:')\nprint(math_precedence)",
    explanationLines: [
      { line: "floor_div = a // b", desc: "Divides 10 by 3, discarding decimals to yield integer 3." },
      { line: "is_same_ref = lst_1 is lst_2", desc: "Returns False because lst_1 and lst_2 point to different list instances in memory." },
      { line: "is_same_val = lst_1 == lst_2", desc: "Returns True because both lists hold identical internal values." },
      { line: "math_precedence = a + b * 2", desc: "Evaluates multiplication (3 * 2 = 6) before addition (10 + 6 = 16) according to PEMDAS rules." }
    ],
    expectedOutput: "Floor Division & Remainder:\n3\n1\nAre lists identical in memory? And are values equal?\nFalse\nTrue\nDoes 1 exist in list?\nTrue\nPEMDAS Result of 10 + 3 * 2:\n16",
    commonMistakes: [
      { mistake: "if total = 10:", fix: "Using single assignment (=) inside conditions! Fix: Use comparison double equals: if total == 10:" }
    ],
    realLifeUse: "Game engines use distance operators and membership sets to identify whether an enemy character is inside the player's detection radar radius.",
    practiceTask: "Calculate the exponential value of 2 power 10, and check if the number 5 is inside a list of prime numbers.",
    challenge: "Write a mathematical formula combining arithmetic operators and brackets to verify operator precedence, and prove that 'is' comparison is False for twin lists but True for twin integers due to integer caching (0 to 256).",
    miniProject: "Build an automated temperature converter evaluating multi-criteria security clearance parameters."
  },
  {
    id: "strings",
    title: "6. Strings Deep Dive",
    levelId: "level-1",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Strings (str) in Python are immutable sequences of Unicode code points. Indexing operates in O(1) time complexity, whereas slicing generates a copy of the substring in O(k) time where k is slice length. The join() method is O(N) optimized in memory allocation compared to repeatedly adding strings (+) which creates O(N^2) allocations. Raw strings (prefixed with r) treat backslashes as literal characters.",
    why: "Strings are primary representations for user logins, email databases, API response contents, and file path manipulation.",
    syntax: "path = r'C:\\new_folder'\nformatted = f'Values: {val:.2f}'",
    exampleCode: "# Lesson 6: String slices, formatting, clean sanitizers, and joins\nraw_path = r'C:\\next_step\\run.py'\nuser_input = '   *pyMaster_Developer*   '\n\n# Advanced slicing: Reversing strings\nreversed_word = 'Python'[::-1]\n\n# Methods chaining\ncleaned_user = user_input.strip().replace('*', '').lower()\n\n# Join & split mechanics\ntechnologies = ['Python', 'Django', 'FastAPI']\njoined_stack = ', '.join(technologies)\nsplit_stack = joined_stack.split(', ')\n\n# Format float inside f-string\npi_val = 3.14159\npi_formatted = f'Pi formatted is {pi_val:.2f}'\n\nprint('Raw Path & Reversed Word:')\nprint(raw_path)\nprint(reversed_word)\nprint('Sanitized Username:')\nprint(cleaned_user)\nprint('Joined & Re-split stack:')\nprint(joined_stack)\nprint(split_stack[0])\nprint(pi_formatted)",
    explanationLines: [
      { line: "reversed_word = 'Python'[::-1]", desc: "Slices the string with step size -1, efficiently reversing the string sequence in memory." },
      { line: "cleaned_user = user_input.strip().replace('*', '').lower()", desc: "Chains string methods: trims blanks, removes asterisks, and lowercases the output." },
      { line: "joined_stack = ', '.join(technologies)", desc: "Joins elements of the list using a comma separator, which is memory-optimized in Python." },
      { line: "pi_formatted = f'Pi formatted is {pi_val:.2f}'", desc: "Embeds and formats float value to exactly 2 decimal decimal places using f-string specification." }
    ],
    expectedOutput: "Raw Path & Reversed Word:\nC:\\next_step\\run.py\nnohtyP\nSanitized Username:\npymaster_developer\nJoined & Re-split stack:\nPython, Django, FastAPI\nPython\nPi formatted is 3.14",
    commonMistakes: [
      { mistake: "text = 'Admin'; text[0] = 'a'", fix: "Strings are immutable! You cannot assign characters directly. Fix: text = 'a' + text[1:]" }
    ],
    realLifeUse: "API Gateways sanitize authorization headers by removing spaces using .strip() and validating prefix strings using .startswith('Bearer ').",
    practiceTask: "Write a program that takes a website URL (e.g., '  https://PyMaster.com  '), strips the spaces, replaces 'https://' with nothing, and checks if it ends with '.com'.",
    challenge: "Write a single line expression that takes an email address, extracts the domain name part after the '@' symbol, and converts it to completely lowercase.",
    miniProject: "Design an automated registration parser sanitizing names, formatting prices, and creating alphanumeric order IDs."
  },
  {
    id: "lists",
    title: "7. ListsDeep Dive",
    levelId: "level-2",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "A Python List is a contiguous, dynamic array holding pointers to heterogeneous objects. It has an over-allocation strategy to optimize append() operations to amortized O(1) time complexity. Slicing lists creates shallow copies. The sort() method uses Timsort—a hybrid stable sorting algorithm with O(N log N) worst-case time complexity.",
    why: "Lists are fundamental to manage dynamic datasets, such as active shopping baskets, logs lists, and queue nodes.",
    syntax: "items = ['A', 'B']\nitems.append('C')\nitems.sort()",
    exampleCode: "# Lesson 7: Advanced list mutation, copies, and slicing\noriginal_servers = ['Server-A', 'Server-C']\n\n# Append, Insert, and Extend mechanics\noriginal_servers.append('Server-D')\noriginal_servers.insert(1, 'Server-B')\noriginal_servers.extend(['Backup-1', 'Backup-2'])\n\n# Create shallow copy safely to prevent reference linking\nactive_fleet = original_servers.copy()\n\n# Pop and remove items\nactive_fleet.remove('Backup-2')\nremoved_node = active_fleet.pop(4) # Pops Backup-1\n\n# Sorting\nactive_fleet.sort(reverse=True)\n\nprint('Original Fleet:')\nprint(original_servers)\nprint('Pops node item:')\nprint(removed_node)\nprint('Sorted active fleet:')\nprint(active_fleet)",
    explanationLines: [
      { line: "original_servers.insert(1, 'Server-B')", desc: "Inserts 'Server-B' at index 1, shifting rightward elements." },
      { line: "active_fleet = original_servers.copy()", desc: "Creates a shallow copy, ensuring changes to active_fleet do not corrupt original_servers." },
      { line: "removed_node = active_fleet.pop(4)", desc: "Pops and returns the element at index 4 (O(N) time complexity)." },
      { line: "active_fleet.sort(reverse=True)", desc: "Sorts the list in-place alphabetically descending using Timsort." }
    ],
    expectedOutput: "Original Fleet:\n['Server-A', 'Server-B', 'Server-C', 'Server-D', 'Backup-1', 'Backup-2']\nPops node item:\nBackup-1\nSorted active fleet:\n['Server-D', 'Server-C', 'Server-B', 'Server-A']",
    commonMistakes: [
      { mistake: "list_a = [1, 2]; list_b = list_a", fix: "Assigning list copies directly just links pointers! Changing list_b will alter list_a. Fix: list_b = list_a.copy()" }
    ],
    realLifeUse: "Task managers and messaging queues maintain task sequences inside lists, sorting them dynamically by category levels.",
    practiceTask: "Create a list of 5 colors, append a new color, insert a color at index 2, sort them alphabetically, and print the resulting list.",
    challenge: "Write a program that cleans a list of numeric codes by removing duplicates while preserving their original order without using sets directly.",
    miniProject: "Design an interactive inventory system allowing append, insert, remove, and pop operations."
  },
  {
    id: "tuples",
    title: "8. Tuples Deep Dive",
    levelId: "level-2",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Tuples (tuple) are immutable, fixed-size sequences. Because of immutability, Python allocates them in a single contiguous block of memory, which makes them faster to instantiate and optimize compared to lists (tuple recycling/caching optimization). They can be hashed and used as dictionary keys, whereas lists cannot.",
    why: "Tuples safeguard crucial system configurations, coordinates, and constant arrays from accidental updates during programmatic cycles.",
    syntax: "point = (10, 20)\nlat, lon = point\n# point[0] = 5  # Throws TypeError",
    exampleCode: "# Lesson 8: Tuple creation, unpacking with splats, and coordinates mapping\ncoordinate_record = (23.8103, 90.4125, 'Dhaka', 'BD')\n\n# Unpacking values with asterisk (splat) operator\nlatitude, longitude, *metadata = coordinate_record\n\n# Single-element tuple declaration requirement\nsingle_tup = ('Locked_State',)\n\nprint('Unpacked coordinates:')\nprint(latitude)\nprint(longitude)\nprint('Asterisk Unpacked Metadata List:')\nprint(metadata)\nprint('Single Element Tuple:')\nprint(single_tup)",
    explanationLines: [
      { line: "coordinate_record = (23.8103, 90.4125, 'Dhaka', 'BD')", desc: "Instantiates a 4-element tuple holding floats and strings." },
      { line: "latitude, longitude, *metadata = coordinate_record", desc: "Unpacks latitude and longitude, collecting the remaining values into metadata list." },
      { line: "single_tup = ('Locked_State',)", desc: "Declares a single-element tuple. The trailing comma is mandatory, otherwise Python interprets it as a standard bracketed string." }
    ],
    expectedOutput: "Unpacked coordinates:\n23.8103\n90.4125\nAsterisk Unpacked Metadata List:\n['Dhaka', 'BD']\nSingle Element Tuple:\n('Locked_State',)",
    commonMistakes: [
      { mistake: "single_val = ('State')", fix: "Forgetting the trailing comma for single-value tuples! It evaluates as str. Fix: single_val = ('State',)" }
    ],
    realLifeUse: "Database engines return query rows as immutable Tuples to protect data records from accidental corruption during data mapping.",
    practiceTask: "Create a tuple representing your birthdate (year, month, day). Unpack the tuple and print the values separately.",
    challenge: "Demonstrate that tuples are immutable, but if a tuple contains a mutable object (like a list), that list can still be modified, explaining this memory pointer reference behavior.",
    miniProject: "Build an automated config manager that loads immutable system environment coordinates."
  },
  {
    id: "sets",
    title: "9. Sets Deep Dive",
    levelId: "level-2",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Sets (set) are unordered collections of unique, hashable objects. Set implementation relies on hash tables, which allows membership testing ('in') and insertion/deletion operations to run in O(1) constant time complexity, far outperforming lists which run in O(N) linear time.",
    why: "Sets are perfect to isolate unique user logs, filter search tags, detect mutual contacts, or remove array duplicates instantly.",
    syntax: "set_a = {1, 2, 3}\nset_b = {3, 4, 5}\noverlap = set_a & set_b",
    exampleCode: "# Lesson 9: High performance set operations and deduplication\nsigned_up_newsletter = {'alex@gmail.com', 'bob@gmail.com', 'clara@gmail.com'}\nsigned_up_promo = {'bob@gmail.com', 'david@gmail.com'}\n\n# Set operations\nboth_lists = signed_up_newsletter | signed_up_promo      # Union\nactive_subscribers = signed_up_newsletter & signed_up_promo  # Intersection\nnewsletter_only = signed_up_newsletter - signed_up_promo     # Difference\nunique_exclusive = signed_up_newsletter ^ signed_up_promo    # Symmetric Difference\n\n# Remove duplicate list entries efficiently using set conversions\nraw_visitor_ips = ['1.1.1.1', '2.2.2.2', '1.1.1.1']\nunique_ips = list(set(raw_visitor_ips))\n\nprint('Total Union emails:')\nprint(sorted(list(both_lists)))\nprint('Common active subscribers:')\nprint(sorted(list(active_subscribers)))\nprint('Newsletter only:')\nprint(sorted(list(newsletter_only)))\nprint('Unique non-overlapping list of IPs:')\nprint(sorted(unique_ips))",
    explanationLines: [
      { line: "both_lists = signed_up_newsletter | signed_up_promo", desc: "Combines unique emails from both databases (Union)." },
      { line: "active_subscribers = signed_up_newsletter & signed_up_promo", desc: "Finds email addresses existing in both sets (Intersection)." },
      { line: "unique_ips = list(set(raw_visitor_ips))", desc: "Converts list to set to instantly wipe duplicates, then casts back to list." }
    ],
    expectedOutput: "Total Union emails:\n['alex@gmail.com', 'bob@gmail.com', 'clara@gmail.com', 'david@gmail.com']\nCommon active subscribers:\n['bob@gmail.com']\nNewsletter only:\n['alex@gmail.com', 'clara@gmail.com']\nUnique non-overlapping list of IPs:\n['1.1.1.1', '2.2.2.2']",
    commonMistakes: [
      { mistake: "empty_set = {}", fix: "Using empty curly braces to declare a set creates an empty dictionary instead! Fix: empty_set = set()" }
    ],
    realLifeUse: "Social network microservices use set intersections (&) to instantly calculate mutual friends list between two profiles.",
    practiceTask: "Create two sets of program languages, find the union, intersection, and symmetric difference.",
    challenge: "Write a high-performance script comparing membership lookup times ('in') between a list of 10,000 numbers and a set of 10,000 numbers.",
    miniProject: "Design an automated unique visitors logger tracking active session identifiers."
  },
  {
    id: "dictionaries",
    title: "10. Dictionaries Deep Dive",
    levelId: "level-2",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Dictionaries (dict) are hash table mappings. Python 3.7+ guarantees insertion order preservation. Key lookups operate in O(1) average time complexity using hashing functions. Keys must be immutable and hashable (objects implementing __hash__()). Dictionary unpacking using standard splat operators (`**dict_obj`) allows fast dynamic merges.",
    why: "Dictionaries are the foundation of modern web technologies, matching API payload formats, JSON transfers, and server user sessions.",
    syntax: "profile = {'id': 101, 'role': 'Admin'}\nval = profile.get('missing_key', 'Default')",
    exampleCode: "# Lesson 10: Dictionary operations, nested JSON models, and safe gets\nuser_registry = {\n    'usr_301': {\n        'name': 'Abdullah',\n        'tier': 'Premium',\n        'features': ['API_access', 'Cloud_sync']\n    },\n    'usr_302': {\n        'name': 'Bina',\n        'tier': 'Free',\n        'features': []\n    }\n}\n\n# Retrieve and Safe Get defaults\nactive_user = user_registry.get('usr_301')\nmissing_features = user_registry['usr_302'].get('billing_cycles', 'Monthly')\n\n# Adding and Updating\nuser_registry['usr_302']['tier'] = 'Premium'\nuser_registry['usr_302']['features'].append('Cloud_sync')\n\n# Dynamic dict merge using unpacking\ndefaults = {'theme': 'dark', 'notifications': True}\nuser_prefs = {'theme': 'light'}\nmerged_config = {**defaults, **user_prefs}\n\nprint('Registered Premium User Feature:')\nprint(active_user['features'][0])\nprint('Safe Get default value:')\nprint(missing_features)\nprint('Merged Preferences Configuration:')\nprint(merged_config)",
    explanationLines: [
      { line: "active_user = user_registry.get('usr_301')", desc: "Safely accesses key usr_301, preventing KeyError exceptions if absent." },
      { line: "user_registry['usr_302']['tier'] = 'Premium'", desc: "Mutates value for nested key 'tier' inside 'usr_302'." },
      { line: "merged_config = {**defaults, **user_prefs}", desc: "Merges two dictionaries using splat unpacking; matching keys inside user_prefs overwrite defaults." }
    ],
    expectedOutput: "Registered Premium User Feature:\nAPI_access\nSafe Get default value:\nMonthly\nMerged Preferences Configuration:\n{'theme': 'light', 'notifications': True}",
    commonMistakes: [
      { mistake: "print(profile['missing_key'])", fix: "Accessing missing keys directly throws exceptions! Fix: Use safe method: profile.get('key', 'default_val')" }
    ],
    realLifeUse: "API Gateways store dynamic customer access keys and quota limits in nested dictionaries for rapid authentication lookups.",
    practiceTask: "Create a dictionary representing a book catalog containing title, author, and price. Add a new key for 'publisher' and use .items() to print each key-value pair.",
    challenge: "Write a program that takes a string of words and constructs a dictionary representing word occurrence frequencies using a loop.",
    miniProject: "Design an automated database record simulator enabling profile updates, lookups, and deletions."
  },
  {
    id: "conditions",
    title: "11. Conditions & Logical Flow",
    levelId: "level-2",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Conditionals evaluate statements to Boolean primitives (True/False). Control flows are branched via jumps at bytecode level (POP_JUMP_IF_FALSE). Python executes short-circuit evaluation: in 'A and B', if A is False, B is never evaluated; in 'A or B', if A is True, B is bypassed.",
    why: "Conditionals enable access level gating, routing endpoints, error trapping, and calculating dynamic discount codes.",
    syntax: "if condition_a:\n    # path 1\nelif condition_b:\n    # path 2\nelse:\n    # default path",
    exampleCode: "# Lesson 11: Complex conditional branches and short-circuit evaluations\naccount_balance = 500\nwithdrawal_amount = 600\nis_vip_member = True\noverride_limit = False\n\n# Nested gating conditions with logical operators\nif withdrawal_amount <= account_balance:\n    account_balance -= withdrawal_amount\n    msg = 'Transaction Approved'\nelif is_vip_member and (withdrawal_amount - account_balance <= 200):\n    account_balance -= withdrawal_amount\n    msg = 'Transaction Approved via VIP Overdraft Guard'\nelse:\n    msg = 'Transaction Denied: Insufficient Funds'\n\n# Truthy and Falsy evaluations\nactive_logs = []\nis_logs_empty = not active_logs  # Since empty list is Falsy, 'not Falsy' evaluates to True\n\nprint('Banking Transaction Status:')\nprint(msg)\nprint('New Account Balance:')\nprint(account_balance)\nprint('Are logs flagged as empty?')\nprint(is_logs_empty)",
    explanationLines: [
      { line: "elif is_vip_member and (withdrawal_amount - account_balance <= 200):", desc: "Checks VIP status and overdraft limit. Executes short-circuit and arithmetic checks in sequence." },
      { line: "is_logs_empty = not active_logs", desc: "Uses truthiness rules. An empty list [] is evaluated as Falsy, so 'not Falsy' returns True." }
    ],
    expectedOutput: "Banking Transaction Status:\nTransaction Approved via VIP Overdraft Guard\nNew Account Balance:\n-100\nAre logs flagged as empty?\nTrue",
    commonMistakes: [
      { mistake: "if x == 5 or 6:", fix: "This condition evaluates '6' as a Truthy value, making it always True! Fix: if x == 5 or x == 6:" }
    ],
    realLifeUse: "API Gateways use conditional branches to instantly rate-limit user requests if requests counts exceed plan thresholds.",
    practiceTask: "Write a program that takes a variable score (0-100) and prints 'Grade A' for score >= 90, 'Grade B' for score >= 75, 'Pass' for score >= 50, and 'Fail' otherwise.",
    challenge: "Write a single line conditional ternary expression that assigns a membership status of 'Premium' to a user if their account balance exceeds 1000, otherwise assigns 'Free'.",
    miniProject: "Build an automated secure gating system checking passwords, credit levels, and lock status."
  },
  {
    id: "loops",
    title: "12. Loops & Flow Controls",
    levelId: "level-2",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "For loops evaluate iterables using the iterator protocol (__iter__() and __next__()). The range() generator creates integers on-demand without memory inflation. Loop 'break' jumps compilation flow past loop blocks; 'continue' jumps directly to the next loop evaluation condition cycle.",
    why: "Loops automate massive computational tasks such as parsing system directories, emailing thousands of clients, and processing active game engines.",
    syntax: "for index, item in enumerate(items):\n    if item == target:\n        break",
    exampleCode: "# Lesson 12: Advanced loops, enumeration, zip aggregates, and controls\ncandidate_names = ['Amin', 'Bina', 'Chirag', 'Dora']\ncandidate_scores = [88, 92, 45, 79]\n\n# Accumulator and filter loop using Zip\npassed_candidates = []\ntotal_passed_score = 0\n\nfor name, score in zip(candidate_names, candidate_scores):\n    if score < 50:\n        continue # Skip failed candidate\n    passed_candidates.append(name)\n    total_passed_score += score\n\n# Enumerate example with index finding\ntarget_index = -1\nfor idx, val in enumerate(candidate_names):\n    if val == 'Chirag':\n        target_index = idx\n        break # Stop search instantly\n\nprint('Passed Candidates:')\nprint(passed_candidates)\nprint('Accumulated passing score sum:')\nprint(total_passed_score)\nprint('Index of Chirag in list:')\nprint(target_index)",
    explanationLines: [
      { line: "for name, score in zip(candidate_names, candidate_scores):", desc: "Zips and loops over both lists synchronously element-by-element." },
      { line: "    if score < 50:", desc: "Evaluates score boundary; skips loop code execution if under threshold." },
      { line: "        continue", desc: "Jumps directly to next element processing cycle, skipping append and accumulator instructions." },
      { line: "        break", desc: "Interrupts loop operations immediately once search candidate is identified." }
    ],
    expectedOutput: "Passed Candidates:\n['Amin', 'Bina', 'Dora']\nAccumulated passing score sum:\n259\nIndex of Chirag in list:\n2",
    commonMistakes: [
      { mistake: "while loop with no counter increments", fix: "This creates dynamic infinite loops! Always include increment states (like count += 1) before block exits." }
    ],
    realLifeUse: "Automated billing daemons use loops to scan tables of subscriber subscriptions and charge debit cards if payment date is due today.",
    practiceTask: "Write a program that loops through a list of numbers from 1 to 15, prints 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, and the number itself otherwise.",
    challenge: "Write a prime number finder loop for numbers up to 50 using a nested loop and a loop 'else' clause (which runs only if the loop finishes without hitting break).",
    miniProject: "Design a terminal command CLI interactive menu-driven student manager allowing profile inputs."
  },
  {
    id: "functions",
    title: "13. Reusable Functions",
    levelId: "level-4",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Functions in Python are first-class objects, meaning they can be bound to names, passed as arguments, and returned from other functions. Local scopes are managed within stack frames; calling nested scopes triggers scope resolutions searching Local, Enclosing, Global, and Built-in namespaces (LEGB rule). Lambda functions compile inline to small executable lambda bytecodes.",
    why: "Functions keep the code DRY (Don't Repeat Yourself), structured, organized, and scalable for massive application development frameworks.",
    syntax: "def function_name(*args, **kwargs) -> return_type:\n    \"\"\"Docstring description here\"\"\"\n    return value",
    exampleCode: "# Lesson 13: Functional architectures, Lambda maps, scopes, and recursion\nglobal_counter = 100\n\ndef calculate_invoice(price, discount_pct=0.10, *extra_fees, **metadata) -> float:\n    \"\"\"Calculates dynamic customer billing records including positional splats\"\"\"\n    global global_counter\n    global_counter += 1 # Mutate global state\n    \n    net_price = price * (1 - discount_pct)\n    fees_total = sum(extra_fees)\n    total_bill = net_price + fees_total\n    return total_bill\n\n# Advanced Lambda mapping\nsquarer = lambda x: x * x\n\n# Recursion for factorial calculations\ndef run_factorial(n):\n    if n <= 1:\n        return 1\n    return n * run_factorial(n - 1)\n\nprint('Factorial Recursive of 5:')\nprint(run_factorial(5))\nprint('Calculated billing statement:')\nprint(calculate_invoice(1000.0, 0.20, 15.0, 5.0, user='Alex'))\nprint('Global Counter modified count:')\nprint(global_counter)\nprint('Inline Lambda Squaring value of 9:')\nprint(squarer(9))",
    explanationLines: [
      { line: "def calculate_invoice(price, discount_pct=0.10, *extra_fees, **metadata) -> float:", desc: "Declares functional inputs, default parameter bounds, extra positional tuples (*args), and keyword dictionary arguments (**kwargs)." },
      { line: "    global global_counter", desc: "Imports global scope identifier to permit direct value mutations inside functions local frame." },
      { line: "    if n <= 1: return 1; return n * run_factorial(n - 1)", desc: "Recursively chains evaluations, multiplying active counts down to the base termination case." }
    ],
    expectedOutput: "Factorial Recursive of 5:\n120\nCalculated billing statement:\n820.0\nGlobal Counter modified count:\n101\nInline Lambda Squaring value of 9:\n81",
    commonMistakes: [
      { mistake: "def append_to(val, lst=[]): lst.append(val)", fix: "Using mutable objects (like empty lists) as default arguments! The default list is shared across calls. Fix: Use def append_to(val, lst=None): if lst is None: lst = []" }
    ],
    realLifeUse: "Web routers wrap security authorization headers verification within decorators, calling higher-order checking functions for every route hit.",
    practiceTask: "Write a function that calculates total pricing, accepting price, a tax percentage (default 5%), and an arbitrary number of discounts.",
    challenge: "Write a recursive function that calculates Fibonacci numbers sequence indices, explaining the recursion depth and optimization benefits of caching.",
    miniProject: "Design a modular payroll system engine with dynamic functional adjustments for taxes, bonuses, and basic rates."
  },
  {
    id: "comprehensions",
    title: "14. Comprehensions & Generators",
    levelId: "level-4",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Comprehensions are executed inside optimized bytecode environments inside the Python virtual machine, rendering lists up to 2x faster than traditional append loops. Generator expressions generate a 'generator' object which utilizes lazy evaluation, producing elements on-demand (O(1) memory complexity) rather than allocating entire datasets into RAM (O(N) memory complexity).",
    why: "Comprehensions clean up verbose loops into single readable lines, boosting performance and optimizing memory handling during heavy computations.",
    syntax: "evens = [x for x in range(10) if x % 2 == 0]\nkv_squares = {x: x*x for x in range(3)}",
    exampleCode: "# Lesson 14: List, Dict, Set Comprehensions and Lazy Generators\nraw_prices = [12.50, 45.00, 100.00, 150.00, 9.99]\n\n# List comprehension with filtering and currency tax adjustments\ntarget_prices = [p * 1.05 for p in raw_prices if p > 40.0]\n\n# Dictionary comprehension mapping items to their status category\nitems_db = ['Mouse', 'Keyboard', 'Webcam']\nstock_levels = [5, 0, 12]\ninventory_map = {item: ('In Stock' if qty > 0 else 'Out of Stock') for item, qty in zip(items_db, stock_levels)}\n\n# Generator expression yielding values dynamically (saves memory)\nlazy_numbers = (x * x for x in range(1000))\nfirst_three = [next(lazy_numbers), next(lazy_numbers), next(lazy_numbers)]\n\nprint('Processed prices with tax adjustments:')\nprint(target_prices)\nprint('Inventory Status Map database:')\nprint(inventory_map)\nprint('First three elements of Lazy Generator:')\nprint(first_three)",
    explanationLines: [
      { line: "target_prices = [p * 1.05 for p in raw_prices if p > 40.0]", desc: "Filters elements > 40.0, multiplies by 1.05, returning a list in one transaction." },
      { line: "inventory_map = {item: ('In Stock' if qty > 0 else 'Out of Stock') for item, qty in zip(items_db, stock_levels)}", desc: "Maps item name to status string conditional value based on associated quantity variables." },
      { line: "lazy_numbers = (x * x for x in range(1000))", desc: "Constructs generator using parenthesis, delaying execution calculations until requested." }
    ],
    expectedOutput: "Processed prices with tax adjustments:\n[47.25, 105.0, 157.5]\nInventory Status Map database:\n{'Mouse': 'In Stock', 'Keyboard': 'Out of Stock', 'Webcam': 'In Stock'}\nFirst three elements of Lazy Generator:\n[0, 1, 4]",
    commonMistakes: [
      { mistake: "lazy = [x * 2 for x in range(10000000)]", fix: "Using list comprehension for massive numeric loops! This inflates RAM instantly. Fix: Use lazy generators with parenthesis () instead." }
    ],
    realLifeUse: "Data engineers use lazy generator expressions to process and stream gigabytes of raw CSV logs row-by-row without crashing processing servers.",
    practiceTask: "Create a list comprehension that filters only odd numbers from 1 to 20 and squares them.",
    challenge: "Write a nested list comprehension that flattens a 2D matrix list [[1, 2], [3, 4]] into a single flat list [1, 2, 3, 4] in one line.",
    miniProject: "Build an automated catalog filter converting raw product items database lists into cleaned, tax-adjusted profiles maps."
  }
];
