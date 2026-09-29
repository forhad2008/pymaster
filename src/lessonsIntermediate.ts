import { Lesson } from './pythonLessonsData';

export const INTERMEDIATE_LESSONS: Lesson[] = [
  {
    id: "exceptions",
    title: "15. Error Handling & Exceptions",
    levelId: "level-5",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Exceptions disrupt the normal flow of program instruction streams. Python's runtime environment raises exceptions which are caught using try-except-else-finally control structures. Raising custom exceptions involves subclassing the built-in 'Exception' class. Caught exceptions contain full stack traces (tracebacks) detailing the call stack frame state at the point of origin.",
    why: "Error handling prevents system-wide service outages on web backends when database queries or connection routes timeout.",
    syntax: "class MyError(Exception):\n    pass\ntry:\n    raise MyError('Description')\nexcept MyError as e:\n    print(e)\nfinally:\n    print('Completed')",
    exampleCode: "# Lesson 15: Deep try-except-else-finally handles and custom exception structures\nclass InsufficientCreditError(Exception):\n    \"\"\"Custom business validation exception for checkout balances\"\"\"\n    def __init__(self, amount, required):\n        super().__init__(f'Credit failure: Have ${amount}, need ${required}')\n        self.amount = amount\n        self.required = required\n\ndef execute_payment(balance, cost):\n    if balance < cost:\n        raise InsufficientCreditError(balance, cost)\n    return balance - cost\n\ntry:\n    # Attempt transaction\n    remaining_credit = execute_payment(45.0, 100.0)\nexcept InsufficientCreditError as err:\n    print('Business Error Trapped:')\n    print(err)\nexcept ValueError as err:\n    print('Data validation error:')\n    print(err)\nelse:\n    print('Success! Remaining Balance is:')\n    print(remaining_credit)\nfinally:\n    print('Audit transaction check completed.')",
    explanationLines: [
      { line: "class InsufficientCreditError(Exception):", desc: "Constructs a user-defined custom exception subclassing the built-in Exception base class." },
      { line: "        raise InsufficientCreditError(balance, cost)", desc: "Triggers and throws the custom error class manually when safety criteria fail." },
      { line: "except InsufficientCreditError as err:", desc: "Intercepts only InsufficientCreditError instances, accessing nested properties in 'err'." },
      { line: "else:", desc: "Runs code block only if no exceptions were thrown in the try block, ensuring safe execution flows." },
      { line: "finally:", desc: "Executes always, regardless of exceptions, ideal for closing file handles or database pools." }
    ],
    expectedOutput: "Business Error Trapped:\nCredit failure: Have $45.0, need $100.0\nAudit transaction check completed.",
    commonMistakes: [
      { mistake: "except: pass", fix: "Using bare 'except' without error types suppresses all bugs, including typos! Fix: Always specify targets: except ValueError as e:" }
    ],
    realLifeUse: "API authentication middle layers trap TokenExpiredError exceptions, outputting structured JSON messages rather than raw Python tracebacks.",
    practiceTask: "Write a program that takes numeric user inputs and catches ValueError when characters are entered, printing a helpful guide.",
    challenge: "Build a nested exception structure where an exception is caught and chained to another custom exception using the 'raise ... from' statement, explaining the traceback outputs.",
    miniProject: "Design a secure payment terminal simulator validating accounts limit thresholds, trapping network timeouts and insufficient funds."
  },
  {
    id: "file-handling",
    title: "16. Robust File Handling",
    levelId: "level-5",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "File handling leverages file descriptors managed by the OS kernel. Context managers ('with') enforce automatic cleanup by executing the file object's __exit__() method, safely closing resource descriptors. Serialization is handled via built-in 'json' and 'csv' modules converting Python objects to text stream sequences.",
    why: "Without file handling, applications cannot save user log records, backup catalog databases, or load server properties.",
    syntax: "with open('config.json', 'r') as file:\n    data = file.read()",
    exampleCode: "# Lesson 16: Reading, writing, and parsing JSON and CSV structures dynamically\nimport json\nimport os\n\npersistent_file = 'storage.json'\nseed_data = {'admin': 'True', 'latency': 45}\n\n# Writing structured JSON to local file\nwith open(persistent_file, 'w') as file:\n    json.dump(seed_data, file, indent=2)\n\n# Reading and de-serializing the JSON back\nif os.path.exists(persistent_file):\n    with open(persistent_file, 'r') as file:\n        loaded_config = json.load(file)\n    # Cleanup resource file\n    os.remove(persistent_file)\nelse:\n    loaded_config = {}\n\nprint('Loaded config status from deleted JSON file:')\nprint(loaded_config.get('admin'))\nprint('Complete parsed content mapping:')\nprint(loaded_config)",
    explanationLines: [
      { line: "with open(persistent_file, 'w') as file:", desc: "Opens file in write mode using the context manager to guarantee automatic descriptor closure." },
      { line: "    json.dump(seed_data, file, indent=2)", desc: "Serializes the Python dictionary into formatted JSON text stream saved on disk." },
      { line: "    loaded_config = json.load(file)", desc: "De-serializes JSON text back into a mutable Python dictionary structure." },
      { line: "    os.remove(persistent_file)", desc: "Deletes the physical file from the disk directory to clean up runtime assets." }
    ],
    expectedOutput: "Loaded config status from deleted JSON file:\nTrue\nComplete parsed content mapping:\n{'admin': 'True', 'latency': 45}",
    commonMistakes: [
      { mistake: "file = open('data.txt') # doing tasks without close()", fix: "This creates resource leaks and system locks! Fix: Use context manager: with open('data.txt') as file:" }
    ],
    realLifeUse: "E-commerce cron jobs generate nightly financial spreadsheets by parsing sales tables and writing them into CSV records.",
    practiceTask: "Write a program that writes a list of user settings to a text file, reads it back line-by-line, and displays each line numbered.",
    challenge: "Write a program that recursively scans a directory structure using the pathlib module, sorting and archiving files into folders based on their extensions.",
    miniProject: "Build an automated Notes taking application that reads, appends, and deletes files dynamically."
  },
  {
    id: "modules",
    title: "17. Modules & Main Entry",
    levelId: "level-5",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "A Python module is a file containing executable code and definitions. Importing compiles the module to bytecode inside the '__pycache__' directory and registers it in the 'sys.modules' dictionary. The runtime binds the '__name__' global namespace variable to '__main__' if the script is run directly, and to its module name if imported.",
    why: "Splitting massive programs across modules makes your codebase structured, readable, and easy for multiple developers to maintain.",
    syntax: "import my_module\nif __name__ == '__main__':\n    my_module.run()",
    exampleCode: "# Lesson 17: Simulating dynamic module namespaces and __name__ checking logic\nclass MockModuleNamespace:\n    \"\"\"Simulates the private namespace boundary of an imported module\"\"\"\n    def __init__(self, name):\n        self.__name__ = name\n        \n    def run_process(self):\n        if self.__name__ == '__main__':\n            return 'Running directly as primary execution engine'\n        return f'Running as imported module helper under namespace: {self.__name__}'\n\n# Simulation runs\ndirect_execution = MockModuleNamespace('__main__')\nimported_execution = MockModuleNamespace('inventory_auth')\n\nprint('Direct execution output:')\nprint(direct_execution.run_process())\nprint('Imported module output:')\nprint(imported_execution.run_process())",
    explanationLines: [
      { line: "class MockModuleNamespace:", desc: "Constructs a simulated sandbox namespace to illustrate interpreter namespace variables." },
      { line: "        if self.__name__ == '__main__':", desc: "Enforces execution boundaries, running core scripts only if active context is primary execution." }
    ],
    expectedOutput: "Direct execution output:\nRunning directly as primary execution engine\nImported module output:\nRunning as imported module helper under namespace: inventory_auth",
    commonMistakes: [
      { mistake: "Naming a local file 'math.py' and importing 'math'", fix: "This shadows Python's standard library math module! Fix: Avoid naming local scripts after standard modules." }
    ],
    realLifeUse: "Python backend entrypoints use `if __name__ == '__main__':` to trigger the server launch only when executed directly, preventing launch loops on imports.",
    practiceTask: "Create a custom calculation file (e.g. 'calc_helper.py') containing a multiply function, import it into another script, and run it.",
    challenge: "Investigate and document how Python resolves imports by printing the 'sys.path' array, explaining the directory lookup priorities.",
    miniProject: "Build a modular calculator system separating core arithmetic algorithms from the CLI visual presenter layer."
  },
  {
    id: "packages",
    title: "18. Creating Packages",
    levelId: "level-5",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Packages are directories containing files and a specialized '__init__.py' script. '__init__.py' initializes the package namespace upon import, allowing relative imports and mapping API exports. Modern Python 3.3+ supports namespace packages without '__init__.py', but it remains industry best practice to include them for structuring.",
    why: "Packages are the standard method to compile modular enterprise-grade libraries (like Django, Pandas, or PyTest) cleanly.",
    syntax: "from ecommerce.billing.payment import process_card",
    exampleCode: "# Lesson 18: Simulating package structuring and API entry mappings\nclass MockPackageRegistry:\n    \"\"\"Simulates package import mapping through __init__.py rules\"\"\"\n    def __init__(self):\n        # Exposing core modules from subfolders inside __init__.py\n        self.exports = {\n            'auth': 'package.sub_auth.user_signin',\n            'billing': 'package.billing_cycle.invoice'\n        }\n    def resolve_import(self, path):\n        return self.exports.get(path, 'ModuleNotFound')\n\npkg = MockPackageRegistry()\nauth_route = pkg.resolve_import('auth')\n\nprint('Resolving sub-module path via mock __init__.py structure:')\nprint(auth_route)",
    explanationLines: [
      { line: "class MockPackageRegistry:", desc: "Simulates package layout structures to illustrate module lookup boundaries." },
      { line: "        self.exports = {", desc: "Illustrates exposed submodules mapped within the package initialization namespace (__init__.py)." }
    ],
    expectedOutput: "Resolving sub-module path via mock __init__.py structure:\npackage.sub_auth.user_signin",
    commonMistakes: [
      { mistake: "Empty __init__.py prevents package from compiling in old environments", fix: "Always include an empty '__init__.py' file to guarantee absolute package namespace initialization." }
    ],
    realLifeUse: "Large Django applications partition complex logic into modules like 'users', 'posts', and 'comments', exposing entry structures in '__init__.py'.",
    practiceTask: "Draft a folder directory layout representing a mock e-commerce shopping cart package containing auth and billing directories.",
    challenge: "Explain and demonstrate the difference between absolute imports ('import pkg.sub') and relative imports ('from . import sub') inside package structures.",
    miniProject: "Design a modular inventory backend layout managing product items packages and suppliers structures."
  },
  {
    id: "standard-lib",
    title: "19. Python Standard Library",
    levelId: "level-5",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "The Python Standard Library is a rich ecosystem of modules written in C and Python, shipped directly with the CPython distribution. Advanced features include collections.Counter (O(N) frequency mapper), functools.lru_cache (memoization decorator caching recursive functions), and logging (thread-safe, hierarchical telemetry pipelines).",
    why: "Saves developers from re-coding advanced algorithms, improving development speed while running highly optimized code.",
    syntax: "from collections import Counter, deque\nfrom functools import lru_cache",
    exampleCode: "# Lesson 19: High performance collections and functional caching optimizations\nfrom collections import Counter\nfrom functools import lru_cache\n\n# Count frequencies of array items in O(N) linear time\nvisitations = ['Dhaka', 'Chittagong', 'Dhaka', 'Sylhet', 'Dhaka']\nvisitation_frequencies = Counter(visitations)\n\n# Dynamic caching of expensive calculations\n@lru_cache(maxsize=32)\ndef compute_recursive_power(base, exponent):\n    if exponent == 0: return 1\n    return base * compute_recursive_power(base, exponent - 1)\n\n# Check cache info status\nval_1 = compute_recursive_power(2, 8)\nval_2 = compute_recursive_power(2, 8) # Fetched instantly from memory cache\ncache_metrics = compute_recursive_power.cache_info()\n\nprint('Frequencies of visited cities:')\nprint(visitation_frequencies.most_common(1))\nprint('Computed value and cache hits statistics:')\nprint(val_1)\nprint(cache_metrics)",
    explanationLines: [
      { line: "from collections import Counter", desc: "Imports performance-optimized container datatypes from the standard library." },
      { line: "visitation_frequencies = Counter(visitations)", desc: "Builds a frequency map in O(N) time complexity using internal C-optimized loops." },
      { line: "@lru_cache(maxsize=32)", desc: "Enforces Least Recently Used caching policy directly on recursive execution paths to optimize speed." },
      { line: "cache_metrics = compute_recursive_power.cache_info()", desc: "Inspects execution performance, verifying cache hits, misses, and current sizes." }
    ],
    expectedOutput: "Frequencies of visited cities:\n[('Dhaka', 3)]\nComputed value and cache hits statistics:\n256\nCacheInfo(hits=1, misses=1, maxsize=32, currsize=1)",
    commonMistakes: [
      { mistake: "pip install math", fix: "Attempting to install standard libraries! Math and random are already pre-loaded in the standard sandbox." }
    ],
    realLifeUse: "API servers utilize functools.lru_cache to cache expensive geocoding coordinate calculations, skipping repeat database lookups.",
    practiceTask: "Use 'random' to choose a random winner from a list of contestants, and use 'datetime' to print the exact date 7 days from today.",
    challenge: "Compare performance times of computing 35th Fibonacci numbers with and without using the @lru_cache optimizer decorator.",
    miniProject: "Design an automated server log statistics analyzer grouping system errors using Counter modules."
  },
  {
    id: "oop",
    title: "20. Object-Oriented Python",
    levelId: "level-6",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "OOP structures represent domains as Class scopes managing internal states (Instance/Class attributes) and routines (Methods). Encapsulation leverages double underscore prefixes (__) to trigger name mangling (_ClassName__attribute) in Python's namespace. Polymorphism is resolved dynamically via duck typing or explicit interfaces subclassing 'abc.ABC' for formal abstract specifications.",
    why: "OOP allows developers to build massive modular codebases that scale cleanly, minimizing code duplication through inheritance pipelines.",
    syntax: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        pass",
    exampleCode: "# Lesson 20: Encapsulated banking entities, inheritance, and polymorphic classes\nclass Account:\n    def __init__(self, owner, balance):\n        self.owner = owner\n        self.__balance = balance # Private attribute (Encapsulation)\n\n    # Getter method\n    def get_balance(self):\n        return self.__balance\n\n    def apply_interest(self):\n        raise NotImplementedError('Subclass must implement polymorphic method')\n\nclass PremiumAccount(Account):\n    \"\"\"Inherits from Account and overrides interests polymorphically\"\"\"\n    def apply_interest(self):\n        interest = self.get_balance() * 0.05\n        self._Account__balance += interest # Modify mangled private attribute\n        return f'Premium Interest applied: ${interest:.2f}'\n\nacc = PremiumAccount('Kamal', 1000.0)\nmsg = acc.apply_interest()\n\nprint('Account Owner Name:')\nprint(acc.owner)\nprint('Account polymorphic interest status:')\nprint(msg)\nprint('Secure Encapsulated updated balance:')\nprint(acc.get_balance())",
    explanationLines: [
      { line: "        self.__balance = balance", desc: "Protects attribute from direct modifications outside the class using double underscores (Encapsulation)." },
      { line: "class PremiumAccount(Account):", desc: "Establishes an inheritance pipeline, granting PremiumAccount access to Account attributes." },
      { line: "    def apply_interest(self):", desc: "Polymorphically overrides base methods with dynamic custom logic." },
      { line: "        self._Account__balance += interest", desc: "Accesses private attribute utilizing Python name mangling mechanics." }
    ],
    expectedOutput: "Account Owner Name:\nKamal\nAccount polymorphic interest status:\nPremium Interest applied: $50.00\nSecure Encapsulated updated balance:\n1050.0",
    commonMistakes: [
      { mistake: "def walk(): # without self inside class", fix: "Instance methods must accept self as the first parameter! Fix: def walk(self):" }
    ],
    realLifeUse: "Game engines model game characters, weapons, stats, and leveling rules using robust OOP classes and hierarchies.",
    practiceTask: "Create a Vehicle base class and a Car subclass. Add brand and year attributes, and override a start_engine() method.",
    challenge: "Implement abstraction by creating an abstract base class using the abc module with abstract methods that must be implemented by subclasses.",
    miniProject: "Design a simulated RPG game character management system tracking levels, stats, and spells using clean OOP classes."
  },
  {
    id: "iterators",
    title: "21. Iterators Protocol",
    levelId: "level-6",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Iterators enforce stateful traversal of sequences. Calling iter(obj) executes '__iter__()' returning an iterator instance. Calling next(it) executes '__next__()' updating the internal offset pointer and returning elements, throwing a 'StopIteration' exception to gracefully terminate traversal cycles.",
    why: "Enables memory-safe sequential processing of infinite streams or massive database tables without loading everything into memory.",
    syntax: "class MyIter:\n    def __iter__(self):\n        return self\n    def __next__(self):\n        raise StopIteration",
    exampleCode: "# Lesson 21: Custom stateful iterator sequence generators\nclass SequenceCounter:\n    \"\"\"Custom iterator class generating increment steps\"\"\"\n    def __init__(self, limit):\n        self.limit = limit\n        self.current = 1\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if self.current > self.limit:\n            raise StopIteration\n        val = self.current\n        self.current += 1\n        return val\n\n# Dynamic iteration usage\ncounter_stream = SequenceCounter(3)\nprinted_results = []\nfor item in counter_stream:\n    printed_results.append(item)\n\nprint('Simulated iteration values:')\nprint(printed_results)",
    explanationLines: [
      { line: "    def __iter__(self):", desc: "Must return the iterator object itself (usually self)." },
      { line: "    def __next__(self):", desc: "Retrieves the next element, maintaining state in self.current." },
      { line: "            raise StopIteration", desc: "Interrupts the loop execution when state index exceeds preset boundaries." }
    ],
    expectedOutput: "Simulated iteration values:\n[1, 2, 3]",
    commonMistakes: [
      { mistake: "Infinite loop inside __next__", fix: "Always ensure limits are checked and StopIteration is raised once conditions are met." }
    ],
    realLifeUse: "Data loaders in deep learning frameworks load and stream image data sequentially using the Iterator protocol to save system RAM.",
    practiceTask: "Create an iterator class that returns even numbers from a given start number up to a limit.",
    challenge: "Design a cycle iterator class that infinitely cycles through a list of items (like ['red', 'green', 'blue']) until a manual limit is reached.",
    miniProject: "Build an automated logs reader that yields server error entries sequentially using the Iterator protocol."
  },
  {
    id: "generators",
    title: "22. Generators & yield",
    levelId: "level-6",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Generators compile into generator objects whose execution frame state is preserved across pause states. The 'yield' keyword releases execution flow control back to the caller while preserving local variables and state pointers. Subsequent 'next()' calls restore the frame stack and resume execution immediately after the yield statement.",
    why: "Enables processing gigabytes of log files or continuous API streaming feeds with near-zero memory footprint.",
    syntax: "def simple_generator():\n    yield 'Item 1'\n    yield 'Item 2'",
    exampleCode: "# Lesson 22: High performance dynamic generators and stream pipelines\ndef stream_fibonacci(limit):\n    \"\"\"Generates fibonacci sequence items up to a limit with O(1) memory\"\"\"\n    a, b = 0, 1\n    count = 0\n    while count < limit:\n        yield a\n        a, b = b, a + b\n        count += 1\n\n# Instantiate generator\nfib_gen = stream_fibonacci(5)\nsequence_list = list(fib_gen)\n\nprint('Fibonacci stream output list:')\nprint(sequence_list)",
    explanationLines: [
      { line: "def stream_fibonacci(limit):", desc: "Declares a generator function containing a yield loop." },
      { line: "        yield a", desc: "Yields value of a, freezes execution state, and returns value back to caller stack." },
      { line: "sequence_list = list(fib_gen)", desc: "Exhausts the generator, compiling the yielded values into a list." }
    ],
    expectedOutput: "Fibonacci stream output list:\n[0, 1, 1, 2, 3]",
    commonMistakes: [
      { mistake: "Using return instead of yield in generators", fix: "Return statement completely terminates execution! Fix: Use 'yield' to sustain states across pauses." }
    ],
    realLifeUse: "Web servers stream high-definition movie files or large data exports chunk-by-chunk using generator streams to prevent server RAM overflows.",
    practiceTask: "Create a generator yielding squares of numbers from 1 to 5. Test it using a for loop.",
    challenge: "Write a generator pipeline where one generator filters even numbers from a stream and another generator squares them sequentially.",
    miniProject: "Design a simulated telemetry data stream generator producing active sensor ticks infinitely."
  },
  {
    id: "decorators",
    title: "23. Custom Decorators",
    levelId: "level-6",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Decorators leverage closures. High-order wrapper functions accept target functions as callable parameters, inject logic around them, and return the modified wrapper instance. Using standard 'functools.wraps' keeps the original function name and docstring metadata intact.",
    why: "Decorators allow cleanly applying user authentication checks, logging, API timing metrics, or caching layers without duplicate code.",
    syntax: "def my_dec(func):\n    def wrapper(*args):\n        return func(*args)\n    return wrapper",
    exampleCode: "# Lesson 23: Metadata-safe timers and authentication checking decorators\nimport time\nfrom functools import wraps\n\ndef log_performance(func):\n    \"\"\"Decorator logging function execution times and retaining metadata\"\"\"\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start_time = time.perf_counter()\n        result = func(*args, **kwargs)\n        duration = time.perf_counter() - start_time\n        print(f'Execution duration logged: {duration:.4f}s')\n        return result\n    return wrapper\n\n@log_performance\ndef process_database_query(query_id):\n    \"\"\"Simulates database select queries\"\"\"\n    print(f'Fetching query: {query_id}')\n    return 'Rows fetched'\n\nprint('Executing decorated routine:')\nprint(process_database_query('#3012'))",
    explanationLines: [
      { line: "def log_performance(func):", desc: "High-order decorator function taking targeted callable as input." },
      { line: "    @wraps(func)", desc: "Enforces preservation of decorated function's original name and docstring metrics." },
      { line: "        result = func(*args, **kwargs)", desc: "Executes the original function with arbitrary arguments inside wrapper." }
    ],
    expectedOutput: "Executing decorated routine:\nFetching query: #3012\nExecution duration logged: 0.0000s\nRows fetched",
    commonMistakes: [
      { mistake: "Forgetting 'return wrapper' inside decorator", fix: "This causes the decorated function to return None! Fix: Always return the wrapper function." }
    ],
    realLifeUse: "SaaS API backends lock premium endpoints using a `@login_required` decorator to verify token validity before returning route pages.",
    practiceTask: "Write a decorator that prints 'Task Initiating' and 'Task Completed' around any function execution.",
    challenge: "Design a retry decorator that automatically re-executes a function up to N times if it throws a specific exception, inserting a delay between retries.",
    miniProject: "Build an API timing logger monitor tracking latency times and recording them in lists."
  },
  {
    id: "context-managers",
    title: "24. Context Managers",
    levelId: "level-6",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Context managers implement context boundaries. The 'with' statement evaluates contexts, triggering the '__enter__()' method to bind the target resource and executing '__exit__()' upon block termination. '__exit__()' captures exceptions, returning True to suppress them or False to bubble tracebacks.",
    why: "Ensures system lock prevention and avoids resource leakage by guaranteeing database connections are released.",
    syntax: "class Context:\n    def __enter__(self):\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        pass",
    exampleCode: "# Lesson 24: Secure isolated database connection simulation with context wrappers\nclass MockDatabaseChannel:\n    \"\"\"Custom context manager automating channel opens and commits\"\"\"\n    def __enter__(self):\n        print('Database Channel: Opened connections pool')\n        return 'Connected_Active_Session'\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if exc_type:\n            print(f'Database Channel: Rolled back changes due to {exc_type.__name__}')\n        else:\n            print('Database Channel: Committed all transactions successfully')\n        print('Database Channel: Closed connections pool cleanly')\n        return True # Suppress inner errors\n\n# Usage\nwith MockDatabaseChannel() as session:\n    print(f'Working inside active context state: {session}')\n    # Simulate actions...",
    explanationLines: [
      { line: "    def __enter__(self):", desc: "Executes at start of with statement, returning resource instance bound to 'as' target variable." },
      { line: "    def __exit__(self, exc_type, exc_val, exc_tb):", desc: "Runs always at block exit, catching potential errors, rolling back or committing state changes safely." },
      { line: "        return True", desc: "Suppresses exceptions raised in the block from bubbling up to crash the application thread." }
    ],
    expectedOutput: "Database Channel: Opened connections pool\nWorking inside active context state: Connected_Active_Session\nDatabase Channel: Committed all transactions successfully\nDatabase Channel: Closed connections pool cleanly",
    commonMistakes: [
      { mistake: "Custom manager missing __exit__", fix: "Both __enter__ and __exit__ must exist to satisfy context manager specifications." }
    ],
    realLifeUse: "Database drivers wrap transaction SQL blocks inside context managers to rollback database edits if queries crash midway.",
    practiceTask: "Write a custom context manager that prints 'Initializing Transaction' and 'Releasing lock' around an operation.",
    challenge: "Implement a context manager using the 'contextlib.contextmanager' generator-decorator pattern with 'try-yield-finally' blocks, explaining its bytecode advantages.",
    miniProject: "Design an automated server deployment sandbox manager that locks directories during installation and releases them on termination."
  },
  {
    id: "type-hints",
    title: "25. Static Type Hints",
    levelId: "level-6",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Type hints are dynamic runtime metadata stored in the '__annotations__' dictionary of modules, classes, and functions. They do not alter program execution speed or trigger runtime validation. Instead, they enable static type checkers like mypy or IDE environments to trace types and locate bugs prior to execution.",
    why: "Improves developer code intelligence, autocompletion, readability, and isolates datatype mismatches in large teams.",
    syntax: "def format_gpa(score: float) -> str:\n    return f'GPA: {score:.1f}'",
    exampleCode: "# Lesson 25: Static type hinting, type checking and annotations\nfrom typing import List, Dict, Union\n\ndef calculate_aggregate(scores: List[float], weight: float) -> Dict[str, Union[float, str]]:\n    \"\"\"Processes weighted scores returning annotated mapping dictionary\"\"\"\n    weighted_sum = sum(scores) * weight\n    return {\n        'score': weighted_sum,\n        'status': 'Approved' if weighted_sum > 50.0 else 'Under Review'\n    }\n\n# Run calculation\nfinal_report = calculate_aggregate([12.5, 45.0, 30.0], 0.8)\nprint('Annotated aggregate report:')\nprint(final_report)",
    explanationLines: [
      { line: "from typing import List, Dict, Union", desc: "Imports standard typing annotation helper constructs from the built-in library." },
      { line: "def calculate_aggregate(scores: List[float], weight: float) -> Dict[str, Union[float, str]]:", desc: "Specifies lists parameters containing floats, and output dictionary returning string keys paired with either floats or strings." }
    ],
    expectedOutput: "Annotated aggregate report:\n{'score': 70.0, 'status': 'Approved'}",
    commonMistakes: [
      { mistake: "x: int = 'text' causing runtime crash", fix: "Annotations do not block dynamic execution! Keep your values matching the types manually." }
    ],
    realLifeUse: "API models use FastAPI with type hints to automatically validate payloads, generate documentation, and output clear errors.",
    practiceTask: "Add type hints to a function averaging float inputs, returning a formatted float output.",
    challenge: "Design a custom protocol type using typing.Protocol to enforce structural typing (duck typing) on dynamic classes during static audits.",
    miniProject: "Build an API parameters validator routing payload dictionaries with strict type checks."
  },
  {
    id: "dataclasses",
    title: "26. High-Speed Dataclasses",
    levelId: "level-6",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Dataclasses use python's class decorator system to auto-generate standard magic protocols (__init__(), __repr__(), __eq__(), __lt__()). Properties are parsed from type annotations inside '__annotations__'. Using 'frozen=True' generates hashable instances while throwing a frozen instance exception during attribute mutation attempts.",
    why: "Saves programmers from manually coding hundreds of repetitive lines of constructor assignment blocks.",
    syntax: "from dataclasses import dataclass\n@dataclass\nclass Product:\n    id: int\n    price: float",
    exampleCode: "# Lesson 26: Dataclass generation with frozen variables and defaults\nfrom dataclasses import dataclass, field\n\n@dataclass(frozen=True)\nclass AccessToken:\n    \"\"\"Immutable credentials container representing API keys\"\"\"\n    token: str\n    expiry_sec: int = 3600\n    scopes: list = field(default_factory=list)\n\n# Instantiate dataclass\nkey_a = AccessToken('secret_10a', scopes=['read', 'write'])\nprint('Autogenerated representations:')\nprint(key_a)\nprint('Token verification is expired?')\nprint(key_a.expiry_sec == 0)",
    explanationLines: [
      { line: "@dataclass(frozen=True)", desc: "Enforces class read-only immutability and generates autocompiled __init__ and __repr__ magic protocols." },
      { line: "    scopes: list = field(default_factory=list)", desc: "Uses default_factory to safely initialize mutable lists fields, avoiding shared pointer leaks across instances." }
    ],
    expectedOutput: "Autogenerated representations:\nAccessToken(token='secret_10a', expiry_sec=3600, scopes=['read', 'write'])\nToken verification is expired?\nFalse",
    commonMistakes: [
      { mistake: "scopes: list = [] inside dataclass", fix: "Using empty arrays as default values for dataclass fields causes sharing issues! Fix: Use default_factory=list" }
    ],
    realLifeUse: "API systems wrap incoming raw client JSON database records inside dataclasses to enforce boundaries and streamline mapping.",
    practiceTask: "Create a dataclass representing a book containing title, author, and price, with a default for in_stock to True.",
    challenge: "Design a dataclass that automatically sorts compared items using the order=True configuration, sorting elements by custom criteria.",
    miniProject: "Build an items checkout shopping catalog utilizing robust dataclass models."
  },
  {
    id: "algorithms",
    title: "27. Essential Algorithms",
    levelId: "level-3",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Algorithms are step-by-step logic models. Complexity is measured asymptotically using Big O notation to evaluate scale limits under worst cases. Binary search divides sorted collections in logarithmic time complexity O(log N). Merge sort divides collections recursively in O(N log N) time using a divide-and-conquer strategy.",
    why: "Choosing the optimal algorithm determines whether your app loads instantly or times out when parsing millions of records.",
    syntax: "# Asymptotic measurements\n# O(1) < O(log N) < O(N) < O(N log N) < O(N^2)",
    exampleCode: "# Lesson 27: High performance binary searches on sorted indexes\ndef run_binary_search(sorted_arr, target):\n    \"\"\"Logarithmic binary search dividing sorted collections recursively\"\"\"\n    low, high = 0, len(sorted_arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if sorted_arr[mid] == target:\n            return mid\n        elif sorted_arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n\n# Sorted lists index run\ndb_index = [12, 45, 67, 89, 101, 150]\nfound_idx = run_binary_search(db_index, 89)\n\nprint('Sorted Index positions found at binary search:')\nprint(found_idx)",
    explanationLines: [
      { line: "    low, high = 0, len(sorted_arr) - 1", desc: "Initializes lookup boundaries to frame the sorted list." },
      { line: "        mid = (low + high) // 2", desc: "Splits target range size in half on every calculation cycle to find target in O(log N) time." }
    ],
    expectedOutput: "Sorted Index positions found at binary search:\n3",
    commonMistakes: [
      { mistake: "Running binary search on unsorted arrays", fix: "Binary search fails on unsorted lists! Fix: Always sort arrays using .sort() beforehand." }
    ],
    realLifeUse: "Mapping apps use shortest-path algorithms to optimize driver routing directions, finding paths in fractions of a second.",
    practiceTask: "Write a standard linear search algorithm that loops through a list of items and returns the index of the target.",
    challenge: "Implement a complete recursive Merge Sort algorithm, printing the state of the list on every division and merge operation.",
    miniProject: "Build an automated database address lookup catalog using binary search models."
  },
  {
    id: "data-structures",
    title: "28. Advanced Data Structures",
    levelId: "level-3",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Data Structures manage computational layouts in memory. Stacks operate on LIFO (Last In First Out) structures. Queues operate on FIFO (First In First Out). The built-in list data type is a dynamic array; popping the first element is slow O(N) because elements must shift. collections.deque implements doubly-linked lists optimizing ends insertions and pops to O(1) time complexity.",
    why: "Selecting optimum data structures allows your software pipelines to run with absolute minimum computing resources.",
    syntax: "from collections import deque\nstack = []\nqueue = deque()",
    exampleCode: "# Lesson 28: High speed FIFO stacks, queues, and tree node structures\nfrom collections import deque\n\n# Stacks (LIFO - Last In First Out)\nundo_stack = ['Home_Page', 'Product_Page']\nundo_stack.append('Cart_Page')\nlast_visited = undo_stack.pop()\n\n# Queues (FIFO - First In First Out) using double-ended deque\ncustomer_queue = deque(['User_Amin', 'User_Bina'])\ncustomer_queue.append('User_Chirag')\nprocessed_client = customer_queue.popleft() # Dhaka operations node FIFO\n\nprint('Last visited site popped from undo stack:')\nprint(last_visited)\nprint('Remaining undo history stack:')\nprint(undo_stack)\nprint('Processed queue client element:')\nprint(processed_client)\nprint('Remaining customer queue line:')\nprint(list(customer_queue))",
    explanationLines: [
      { line: "undo_stack.append('Cart_Page')", desc: "Pushes item onto stack head (O(1) dynamic array allocation)." },
      { line: "last_visited = undo_stack.pop()", desc: "Pops top element from stack head, illustrating LIFO execution logic." },
      { line: "processed_client = customer_queue.popleft()", desc: "Efficiently removes element from queue front in O(1) time using collections.deque (FIFO)." }
    ],
    expectedOutput: "Last visited site popped from undo stack:\nCart_Page\nRemaining undo history stack:\n['Home_Page', 'Product_Page']\nProcessed queue client element:\nUser_Amin\nRemaining customer queue line:\n['User_Bina', 'User_Chirag']",
    commonMistakes: [
      { mistake: "list.pop(0) used for heavy FIFO queue queues", fix: "Popping from list index 0 shifts all elements in memory, running in slow O(N) time! Fix: Use collections.deque and popleft() instead." }
    ],
    realLifeUse: "Networking routers maintain packets queues inside thread-safe Deque structures, processing packets in exact arrival sequence.",
    practiceTask: "Create a custom Stack class holding item lists with methods for push, pop, peek, and check size.",
    challenge: "Design a complete Binary Search Tree Node class, writing insert and depth-first search in-order traversal methods.",
    miniProject: "Design a dynamic client tickets dispatch system utilizing priority queue architectures."
  }
];
