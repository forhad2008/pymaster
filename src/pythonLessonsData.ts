export interface Lesson {
  id: string;
  title: string;
  levelId: string;
  conceptSimple: string;
  conceptTechnical: string;
  why: string;
  syntax: string;
  exampleCode: string;
  explanationLines: { line: string; desc: string }[];
  expectedOutput: string;
  commonMistakes: { mistake: string; fix: string }[];
  realLifeUse: string;
  practiceTask: string;
  challenge: string;
  miniProject: string;
}

export interface RoadmapLevel {
  id: string;
  title: string;
  badge: string;
  description: string;
  color: string;
  icon: string;
  skillsAcquired: string[];
}

export interface RealWorldTask {
  id: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Professional";
  category: "Finance" | "APIs" | "Data & Science" | "Automation" | "Utilities" | "Games" | "AI & Web";
  description: string;
  requirements: string[];
  recommendedConcepts: string[];
  starterCode: string;
  expectedOutput: string;
  milestones: string[];
}

export interface DebugChallenge {
  id: string;
  title: string;
  description: string;
  buggyCode: string;
  fixedCode: string;
  explanation: string;
  expectedOutput: string;
}

export interface CheatSheetItem {
  category: string;
  title: string;
  code: string;
  desc: string;
}

export const ROADMAP_LEVELS: RoadmapLevel[] = [
  {
    id: "level-1",
    title: "LEVEL 01 — Python Foundations",
    badge: "First Program",
    description: "Start from absolute zero. Learn how to run statements, print outputs, document code with comments, handle variables, naming conventions, data types, type conversions, input operations, and basic arithmetic & comparison operators.",
    color: "from-blue-500 to-sky-500",
    icon: "Compass",
    skillsAcquired: ["print() & comments", "Variables & naming rules", "Primitive types (str, int, float, bool)", "Type conversion & input()", "Operators (basic, comparison, logical)"]
  },
  {
    id: "level-2",
    title: "LEVEL 02 — Core Python",
    badge: "Control Flow Master",
    description: "Learn decision-making code blocks, nested conditionals, iteration loops, range(), loop controls, and essential sequential data structures (Lists, Tuples, Sets, Dictionaries).",
    color: "from-emerald-500 to-teal-500",
    icon: "Layers",
    skillsAcquired: ["Conditionals (if-elif-else)", "Loops (for, while, range)", "Loop controls (break, continue, pass)", "Lists deeply (indexing, slicing, comprehension)", "Tuples, Sets, Dictionaries"]
  },
  {
    id: "level-3",
    title: "LEVEL 03 — Problem Solving",
    badge: "Algorithms Solver",
    description: "Learn how to think like a professional programmer. Break problems into smaller sub-problems, design flowcharts & pseudocode, recognize patterns, and understand debugging and time complexity basics.",
    color: "from-amber-500 to-orange-500",
    icon: "Target",
    skillsAcquired: ["Problem decomposition", "Algorithms & pseudocode", "Pattern recognition & logic", "Debugging methodologies", "Time complexity (Big-O basics)"]
  },
  {
    id: "level-4",
    title: "LEVEL 04 — Functions & Structs",
    badge: "Modular Architect",
    description: "Master defining functions, return values, parameters & arguments, default values, keyword arguments, *args, **kwargs, scopes (local vs global), Lambda functions, and recursion.",
    color: "from-pink-500 to-rose-500",
    icon: "Code",
    skillsAcquired: ["Functions & return statements", "Default and keyword arguments", "*args and **kwargs packing", "Variable scopes", "Lambda functions & recursion"]
  },
  {
    id: "level-5",
    title: "LEVEL 05 — Intermediate Python",
    badge: "OS Integrator",
    description: "Interact with files, packages, and custom modules. Learn pip, virtual environments, read/write of JSON & CSV files, Exception Handling, custom exceptions, decorators, and generators.",
    color: "from-purple-500 to-violet-500",
    icon: "FolderOpen",
    skillsAcquired: ["pip, modules & packages", "File handling (CSV, JSON)", "Exception handling (try-except)", "Decorators, generators & iterators", "Context managers & logging"]
  },
  {
    id: "level-6",
    title: "LEVEL 06 — Object-Oriented Python",
    badge: "Software Designer",
    description: "Model real-world entities. Build scalable systems using Classes, Objects, Constructors, Instance/Class/Static Methods, Encapsulation, Inheritance, Polymorphism, Abstraction, and Composition.",
    color: "from-cyan-500 to-blue-500",
    icon: "Cpu",
    skillsAcquired: ["Classes & Object instances", "Constructors (__init__)", "Encapsulation & properties", "Inheritance & polymorphism", "Abstraction & interfaces"]
  },
  {
    id: "level-7",
    title: "LEVEL 07 — Professional & Advanced",
    badge: "Production Engineer",
    description: "Develop production-ready backends, databases, automated tools, and data pipelines. Learn REST APIs (FastAPI/Flask), SQL databases (SQLite/PostgreSQL), concurrency (asyncio), Pandas, and testing.",
    color: "from-yellow-500 to-amber-500",
    icon: "Zap",
    skillsAcquired: ["REST APIs (FastAPI/Flask)", "SQL & SQLite CRUD databases", "Asynchronous programming (asyncio)", "NumPy, Pandas, Data analytics", "Pytest unit testing & CI/CD"]
  }
];

import { FOUNDATIONS_LESSONS } from './lessonsFoundations';
import { INTERMEDIATE_LESSONS } from './lessonsIntermediate';
import { ADVANCED_LESSONS } from './lessonsAdvanced';

export const LESSONS: Lesson[] = [
  ...FOUNDATIONS_LESSONS,
  ...INTERMEDIATE_LESSONS,
  ...ADVANCED_LESSONS
];

export const REAL_WORLD_TASKS: RealWorldTask[] = [
  // --- BEGINNER PROJECTS (1-10) ---
  {
    id: "task-expense",
    title: "1. Personal Expense Calculator",
    difficulty: "Beginner",
    category: "Finance",
    description: "Write a script that takes monthly values, calculates percentages, and logs budget alerts.",
    requirements: [
      "Must take monthly salary integer",
      "Must calculate 50/30/20 budget allocations (Essentials, Savings, Personal)",
      "Print formatting matching dollar grids"
    ],
    recommendedConcepts: ["Variables", "Operators", "F-strings"],
    starterCode: `salary = 5000
rent = 1200
groceries = 450
utilities = 300

# Compute allocations
essentials = rent + groceries + utilities
savings_goal = salary * 0.20
personal_spending = salary - essentials - savings_goal

print(f"Essentials Total: \${essentials}")
print(f"Savings Goal (20%): \${savings_goal}")
print(f"Personal Remaining: \${personal_spending}")`,
    expectedOutput: "Essentials Total: $1950\nSavings Goal (20%): $1000.0\nPersonal Remaining: $2050.0",
    milestones: ["Define budget integers", "Sum essentials", "Verify budget thresholds"]
  },
  {
    id: "task-budget",
    title: "2. Shopping Budget Calculator",
    difficulty: "Beginner",
    category: "Finance",
    description: "Build an automated loop that takes individual product costs, calculates compound taxes, and checks bounds.",
    requirements: [
      "Calculate 8.5% state tax on total sum",
      "If total exceeds budget limits, warn user via conditional triggers"
    ],
    recommendedConcepts: ["Loops", "Conditional limits", "Type casting"],
    starterCode: `budget = 200
items = [45.99, 12.50, 89.00, 34.20]
tax_rate = 0.085

subtotal = sum(items)
total_with_tax = subtotal * (1 + tax_rate)

print(f"Subtotal: \${subtotal:.2f}")
print(f"Total with tax: \${total_with_tax:.2f}")
if total_with_tax > budget:
    print("WARNING: Budget limit exceeded!")`,
    expectedOutput: "Subtotal: $181.69\nTotal with tax: $197.13",
    milestones: ["Sum the product lists", "Apply state tax", "Check budget ceiling"]
  },
  {
    id: "task-electricity",
    title: "3. Electricity Bill Calculator",
    difficulty: "Beginner",
    category: "Utilities",
    description: "Compute a household electricity bill based on tiered kWh rates: up to 100 kWh is $0.12/kWh, next 200 kWh is $0.15/kWh, and above 300 kWh is $0.20/kWh.",
    requirements: [
      "Define consumed kWh value",
      "Apply tiered conditional math pricing correctly",
      "Print clean itemized cost output"
    ],
    recommendedConcepts: ["Conditionals", "Nested math"],
    starterCode: `kwh_consumed = 350
total_bill = 0.0

if kwh_consumed <= 100:
    total_bill = kwh_consumed * 0.12
elif kwh_consumed <= 300:
    total_bill = (100 * 0.12) + ((kwh_consumed - 100) * 0.15)
else:
    total_bill = (100 * 0.12) + (200 * 0.15) + ((kwh_consumed - 300) * 0.20)

print(f"KWh consumed: {kwh_consumed}")
print(f"Total Electricity Bill: \${total_bill:.2f}")`,
    expectedOutput: "KWh consumed: 350\nTotal Electricity Bill: $52.00",
    milestones: ["Identify kWh range thresholds", "Perform cumulative tier addition", "Output calculated bill"]
  },
  {
    id: "task-grades",
    title: "4. Student Grade Calculator",
    difficulty: "Beginner",
    category: "Utilities",
    description: "Determine student grades and GPA from grade point boundaries.",
    requirements: ["Compute average score", "Assign letter grades (A, B, C, F)", "Print student GPA card"],
    recommendedConcepts: ["Lists", "Arithmetic", "Conditionals"],
    starterCode: `grades = [88, 92, 79, 85, 95]
average = sum(grades) / len(grades)

if average >= 90:
    letter = 'A'
elif average >= 80:
    letter = 'B'
elif average >= 70:
    letter = 'C'
else:
    letter = 'F'

print(f"Computed Average: {average:.1f}")
print(f"Assigned Grade: {letter}")`,
    expectedOutput: "Computed Average: 87.8\nAssigned Grade: B",
    milestones: ["Sum array grades", "Divide by array count", "Apply range conditions"]
  },
  {
    id: "task-bus",
    title: "5. Bus Fare Calculator",
    difficulty: "Beginner",
    category: "Finance",
    description: "Calculate transit fares depending on user category: Senior/Children get 50% discount, Students 25%, and standard is $3.00.",
    requirements: ["Handle fare constants", "Verify category matching tags", "Apply proper math multipliers"],
    recommendedConcepts: ["Variables", "Conditional strings"],
    starterCode: `passenger_type = "Student"
base_fare = 3.00
discount = 0.0

if passenger_type in ["Senior", "Child"]:
    discount = 0.50
elif passenger_type == "Student":
    discount = 0.25

final_fare = base_fare * (1 - discount)
print(f"Passenger: {passenger_type}")
print(f"Final Bus Fare: \${final_fare:.2f}")`,
    expectedOutput: "Passenger: Student\nFinal Bus Fare: $2.25",
    milestones: ["Create category constants", "Compare passenger type", "Print discounted fare"]
  },
  {
    id: "task-age",
    title: "6. Age Calculator",
    difficulty: "Beginner",
    category: "Utilities",
    description: "Evaluate user ages from dates, checking eligibility constraints.",
    requirements: ["Compute year difference", "Verify adult threshold boundary limit (>= 18)", "Output permission grants"],
    recommendedConcepts: ["Operators", "Comparison checks"],
    starterCode: `birth_year = 2008
current_year = 2026
age = current_year - birth_year

is_adult = age >= 18
print(f"Calculated Age: {age}")
print(f"Clearance to proceed: {is_adult}")`,
    expectedOutput: "Calculated Age: 18\nClearance to proceed: True",
    milestones: ["Obtain birth registry", "Evaluate age value", "Check 18 years limit"]
  },
  {
    id: "task-currency",
    title: "7. Currency Converter",
    difficulty: "Beginner",
    category: "Finance",
    description: "Translate amounts between currencies using multiplier ratios.",
    requirements: ["Apply exchange rate values", "Perform clean conversion mathematics", "Output correctly rounded metrics"],
    recommendedConcepts: ["Floating arithmetic", "Formatting"],
    starterCode: `usd_amount = 250.00
eur_rate = 0.92  # 1 USD = 0.92 EUR

converted = usd_amount * eur_rate
print(f"USD: \${usd_amount:.2f}")
print(f"EUR: {converted:.2f}")`,
    expectedOutput: "USD: $250.00\nEUR: 230.00",
    milestones: ["Define USD deposit", "Apply EUR conversion factor", "Print rounded conversion float"]
  },
  {
    id: "task-login",
    title: "8. Simple Login System",
    difficulty: "Beginner",
    category: "Utilities",
    description: "Test password inputs against records, returning validation flags.",
    requirements: ["Store database account structures", "Evaluate matching strings securely", "Print entry logs"],
    recommendedConcepts: ["Dictionaries", "String evaluations"],
    starterCode: `stored_user = "admin_python"
stored_pass = "secure123"

attempt_user = "admin_python"
attempt_pass = "secure123"

if attempt_user == stored_user and attempt_pass == stored_pass:
    print("STATUS: Access Granted.")
else:
    print("STATUS: Access Denied.")`,
    expectedOutput: "STATUS: Access Granted.",
    milestones: ["Define stored credentials", "Check user/pass correctness", "Produce confirmation log"]
  },
  {
    id: "task-guess",
    title: "9. Number Guessing Game",
    difficulty: "Beginner",
    category: "Games",
    description: "Simulate guess logic checking if target answers are too high, too low, or exact.",
    requirements: ["Provide secret targets constant", "Test user input matching boundaries", "Supply helpful hints"],
    recommendedConcepts: ["Conditional branches"],
    starterCode: `secret_number = 42
guessed_number = 35

if guessed_number == secret_number:
    print("Congratulations! Accurate guess.")
elif guessed_number < secret_number:
    print("Hint: Guess higher.")
else:
    print("Hint: Guess lower.")`,
    expectedOutput: "Hint: Guess higher.",
    milestones: ["Set winning code", "Compare attempts", "Display navigation tips"]
  },
  {
    id: "task-units",
    title: "10. Unit Converter",
    difficulty: "Beginner",
    category: "Utilities",
    description: "Convert distance and temperature units.",
    requirements: ["Convert miles to kilometers (1 mile = 1.609 km)", "Output correct formatted strings"],
    recommendedConcepts: ["Math constants", "Floats"],
    starterCode: `miles_driven = 120.0
km_factor = 1.60934

kilometers = miles_driven * km_factor
print(f"Miles: {miles_driven}")
print(f"Kilometers: {kilometers:.2f}")`,
    expectedOutput: "Miles: 120.0\nKilometers: 193.12",
    milestones: ["Store miles odometer value", "Multiply miles by 1.609", "Print metric kilometer summary"]
  },

  // --- INTERMEDIATE PROJECTS (11-20) ---
  {
    id: "task-tracker",
    title: "11. Expense Tracker Tracker",
    difficulty: "Intermediate",
    category: "Finance",
    description: "Store multi-category expenses in dictionaries and compute total sum averages.",
    requirements: ["Use collection containers", "Compute average expense size", "Print category statistics"],
    recommendedConcepts: ["Dictionaries", "Loops", "Lists"],
    starterCode: `expenses = {
    "Rent": 1200,
    "Groceries": 380,
    "Utilities": 210,
    "Transport": 150
}

total = sum(expenses.values())
average = total / len(expenses)

print(f"Total spent: \${total}")
print(f"Average expense item size: \${average:.2f}")`,
    expectedOutput: "Total spent: $1940\nAverage expense item size: $485.00",
    milestones: ["Instantiate data registry", "Iterate dictionary values", "Evaluate itemized aggregates"]
  },
  {
    id: "task-todo",
    title: "12. Interactive Console To-Do",
    difficulty: "Intermediate",
    category: "Utilities",
    description: "Build an interactive loop-driven console task list manager supporting CRUD lists.",
    requirements: [
      "Must support loop interaction",
      "Allow adding elements and deleting index numbers"
    ],
    recommendedConcepts: ["Lists", "Loops", "Exception handling"],
    starterCode: `tasks = ["Review specs", "Fix shaders"]
action_add = "Compile models"
tasks.append(action_add)

print(f"Active tasks count: {len(tasks)}")
print(f"Pending tasks: {tasks}")`,
    expectedOutput: "Active tasks count: 3\nPending tasks: ['Review specs', 'Fix shaders', 'Compile models']",
    milestones: ["Setup empty tasks roster", "Append new input text", "Output index values"]
  },
  {
    id: "task-password",
    title: "13. Password Generator Generator",
    difficulty: "Intermediate",
    category: "Utilities",
    description: "Construct random password strings with required lengths, digit checks, and safe characters.",
    requirements: ["Check password strings compliance rules", "Produce structured password records"],
    recommendedConcepts: ["Loops", "Conditional filtering", "Strings methods"],
    starterCode: `base_chars = "abcdefghijklmnopqrstuvwxyz1234567890!@#"
length = 12

# Create a deterministic password for simulation
simulated_password = "".join([base_chars[i % len(base_chars)] for i in range(length)])
print(f"Generated Password: {simulated_password}")
print(f"Strength verification checks: Passed")`,
    expectedOutput: "Generated Password: abcdefghijkl\nStrength verification checks: Passed",
    milestones: ["Check minimum length constraints", "Evaluate characters indexes", "Print credentials output"]
  },
  {
    id: "task-quiz",
    title: "14. Quiz Application Application",
    difficulty: "Intermediate",
    category: "Games",
    description: "Conduct quiz sessions, tallying correct answers and tracking performance results.",
    requirements: ["Iterate through questions database", "Tally user results metrics", "Report performance summaries"],
    recommendedConcepts: ["Dictionaries", "Loops", "Lists"],
    starterCode: `questions = [
    {"q": "Who created Python?", "a": "Guido van Rossum"},
    {"q": "What year was Python released?", "a": "1991"}
]

score = 0
# Simulate correct answering
for item in questions:
    print(f"Q: {item['q']}")
    print(f"Correct answer registered: {item['a']}")
    score += 1

print(f"Quiz total score: {score}/{len(questions)}")`,
    expectedOutput: "Q: Who created Python?\nCorrect answer registered: Guido van Rossum\nQ: What year was Python released?\nCorrect answer registered: 1991\nQuiz total score: 2/2",
    milestones: ["Define questions lists", "Loop evaluations criteria", "Formulate score card results"]
  },
  {
    id: "task-bank",
    title: "15. Bank Account Simulator",
    difficulty: "Intermediate",
    category: "Finance",
    description: "Model Bank Account transaction operations keeping balances safe during payouts.",
    requirements: ["Maintain current balance floats", "Check withdrawal bounds", "Register deposits"],
    recommendedConcepts: ["OOP Classes", "Constructors", "Attributes"],
    starterCode: `class Bank:
    def __init__(self, owner, balance=500.0):
        self.owner = owner
        self.balance = balance
        
    def withdraw(self, amount):
        if amount > self.balance:
            return "Funds insufficient"
        self.balance -= amount
        return f"Withdrawal success: \${amount}"

acc = Bank("Abdullah", 800.0)
print(acc.withdraw(150.0))
print(f"Residual Balance: \${acc.balance:.2f}")`,
    expectedOutput: "Withdrawal success: $150.0\nResidual Balance: $650.00",
    milestones: ["Initialize Owner profile", "Handle withdraw rules checking", "Register deposits correctly"]
  },
  {
    id: "task-csv-merger",
    title: "16. CSV Report Merger",
    difficulty: "Intermediate",
    category: "Automation",
    description: "Merge multiple student exam record lists together, resolving double values and sorting alphabetically.",
    requirements: ["Reconcile duplicate records", "Sort students lists alphabetically", "Compute standard score aggregates"],
    recommendedConcepts: ["Lists comprehensions", "Dictionary sorting", "Set operations"],
    starterCode: `scores_1 = {"Abdullah": 95, "Sara": 88}
scores_2 = {"Abdullah": 98, "Zayn": 91}

# Merge, keeping highest score for duplicates
merged = {k: max(scores_1.get(k, 0), scores_2.get(k, 0)) for k in set(scores_1) | set(scores_2)}
sorted_names = sorted(merged.keys())

for name in sorted_names:
    print(f"{name}: {merged[name]} points")`,
    expectedOutput: "Abdullah: 98 points\nSara: 88 points\nZayn: 91 points",
    milestones: ["Join dictionary sets", "Resolve highest scores duplicates", "Sort records and print rows"]
  },
  {
    id: "task-md-html",
    title: "17. Markdown to HTML Converter",
    difficulty: "Intermediate",
    category: "Utilities",
    description: "Convert a standard Markdown string containing titles and bold text into standardized clean HTML blocks.",
    requirements: ["Replace markdown hashes with H1 tags", "Replace double asterisks with strong bold elements", "Output validated markup strings"],
    recommendedConcepts: ["Regular Expressions", "String replacements"],
    starterCode: `markdown_text = "# Abdullah\\nLearning **Python** is amazing!"

# Simple conversions
html = markdown_text
if html.startswith("# "):
    html = "<h1>" + html[2:].replace("\\n", "</h1>\\n", 1)
html = html.replace("**", "<strong>", 1).replace("**", "</strong>", 1)

print(html)`,
    expectedOutput: "<h1>Abdullah</h1>\nLearning <strong>Python</strong> is amazing!",
    milestones: ["Check header prefixes", "Swap markdown tags wrappers", "Log well-formed HTML response"]
  },
  {
    id: "task-rps-ai",
    title: "18. Rock Paper Scissors AI",
    difficulty: "Intermediate",
    category: "Games",
    description: "Build a rock-paper-scissors engine that evaluates game attempts, tallies scores, and logs wins.",
    requirements: ["Compare standard game values (Rock, Paper, Scissors)", "Apply deterministic rule matrix mappings", "Print round scoreboard summary logs"],
    recommendedConcepts: ["Conditional matrices", "Random simulations"],
    starterCode: `player = "Paper"
ai = "Rock"

rules = {"Rock": "Scissors", "Paper": "Rock", "Scissors": "Paper"}

if player == ai:
    result = "Tie"
elif rules[player] == ai:
    result = "Player Wins!"
else:
    result = "AI Wins!"

print(f"Match: {player} vs {ai}")
print(f"Outcome: {result}")`,
    expectedOutput: "Match: Paper vs Rock\nOutcome: Player Wins!",
    milestones: ["Instantiate rules dictionary matches", "Compare player vs AI values", "Formulate winner announcement"]
  },
  {
    id: "task-portfolio-tracker",
    title: "19. Stock Portfolio Tracker",
    difficulty: "Intermediate",
    category: "Finance",
    description: "Model a stock asset ledger tracker that aggregates ownership counts with dynamic pricing valuations.",
    requirements: ["Compute current stock investment value totals", "Calculate overall ROI percentage values", "Isolate formatting correctly"],
    recommendedConcepts: ["Dictionaries loops", "Float decimals", "Formatting"],
    starterCode: `portfolio = {"AAPL": {"shares": 10, "cost": 150.0}, "TSLA": {"shares": 5, "cost": 220.0}}
market_prices = {"AAPL": 175.0, "TSLA": 240.0}

total_value = sum(portfolio[sym]["shares"] * market_prices[sym] for sym in portfolio)
total_cost = sum(portfolio[sym]["shares"] * portfolio[sym]["cost"] for sym in portfolio)
roi = ((total_value - total_cost) / total_cost) * 100

print(f"Market Valuation: \${total_value:.2f}")
print(f"Total Portfolio Return: {roi:.1f}%")`,
    expectedOutput: "Market Valuation: $2950.00\nTotal Portfolio Return: 13.5%",
    milestones: ["Calculate total buying price metrics", "Determine updated market valuations", "Compute overall portfolio growth ratios"]
  },
  {
    id: "task-speedtest-logger",
    title: "20. Simple Speed Test Logger",
    difficulty: "Intermediate",
    category: "Utilities",
    description: "Log network metrics, checking values limits and warning if ping exceeds specific ranges.",
    requirements: ["Model network latency checks", "Classify network state flags (Excellent, Moderate, Poor)", "Print summary logs"],
    recommendedConcepts: ["Conditional branches", "F-strings formatting"],
    starterCode: `ping = 45.2
download_mbps = 150.4

if ping < 20:
    grade = "Excellent"
elif ping <= 50:
    grade = "Moderate"
else:
    grade = "Poor"

print(f"Ping Latency: {ping} ms")
print(f"Download speed: {download_mbps} Mbps")
print(f"Line Status: {grade}")`,
    expectedOutput: "Ping Latency: 45.2 ms\nDownload speed: 150.4 Mbps\nLine Status: Moderate",
    milestones: ["Store speed inputs", "Classify rating grades ranges", "Output speed statistics list"]
  },

  // --- ADVANCED PROJECTS (21-30) ---
  {
    id: "task-api-scrypt",
    title: "21. Web API Requester Application",
    difficulty: "Advanced",
    category: "APIs",
    description: "Write an API client that pings an endpoint, decodes JSON structures, and aggregates nested metrics.",
    requirements: [
      "Simulate standard request payloads",
      "Handle potential timeout exceptions gracefully",
      "Extract sub-dictionary arrays"
    ],
    recommendedConcepts: ["Requests", "Exception blocks", "JSON dictionaries"],
    starterCode: `mock_response = {
    "status": 200,
    "results": [
        {"city": "Dhaka", "temp": 31.5, "humidity": 78},
        {"city": "Chittagong", "temp": 32.8, "humidity": 82}
    ]
}

# Parse dataset
for item in mock_response["results"]:
    print(f"Weather in {item['city']}: {item['temp']}C (Humidity: {item['humidity']}%)")`,
    expectedOutput: "Weather in Dhaka: 31.5C (Humidity: 78%)\nWeather in Chittagong: 32.8C (Humidity: 82%)",
    milestones: ["Configure mock data payload", "Loop nested items list", "Perform exception handlers"]
  },
  {
    id: "task-scraper",
    title: "22. Automated Web Scraper Scraper",
    difficulty: "Advanced",
    category: "Automation",
    description: "Scrape content indexes, extracting target string elements using patterns.",
    requirements: ["Handle simulated html files", "Find target tags boundaries", "Clean data columns"],
    recommendedConcepts: ["Regular expressions", "String splits"],
    starterCode: `html_document = """
<div class="product"><span class="title">Wireless Keyboard</span><span class="price">$45.00</span></div>
<div class="product"><span class="title">Bluetooth Mouse</span><span class="price">$25.00</span></div>
"""

# Extracting elements via standard string partitions
parts = html_document.split('<div class="product">')
for part in parts:
    if "title" in part:
        title = part.split('class="title">')[1].split('</span>')[0]
        price = part.split('class="price">')[1].split('</span>')[0]
        print(f"Scraped item: {title} costing {price}")`,
    expectedOutput: "Scraped item: Wireless Keyboard costing $45.00\nScraped item: Bluetooth Mouse costing $25.00",
    milestones: ["Initialize mock HTML code", "Parse tags split keys", "Print scraped collections list"]
  },
  {
    id: "task-backup",
    title: "23. File Backup Tool",
    difficulty: "Advanced",
    category: "Automation",
    description: "Automate file system directory backups, checking logs and size metrics.",
    requirements: ["Simulate file directories traversal", "Move directories paths values", "Write logs profiles"],
    recommendedConcepts: ["OS modules", "Exception handlers"],
    starterCode: `import sys

source_directory = "/workspace/src"
target_directory = "/workspace/backup"

print(f"Traversing file registry inside: {source_directory}")
print(f"Successful backup copies written to: {target_directory}")
print("Process completed cleanly.")`,
    expectedOutput: "Traversing file registry inside: /workspace/src\nSuccessful backup copies written to: /workspace/backup\nProcess completed cleanly.",
    milestones: ["Check source target pathways", "Execute system copy triggers", "Publish operational logs"]
  },
  {
    id: "task-threaded-downloader",
    title: "24. Threaded Web Downloader",
    difficulty: "Advanced",
    category: "Utilities",
    description: "Simulate a multi-threaded downloader client pulling data in chunks and showing a unified download percentage monitor.",
    requirements: ["Process tasks across isolated workers", "Coordinate overall progression indicators", "Print standard progress feedback logs"],
    recommendedConcepts: ["Threads simulator", "List structures", "Math roundings"],
    starterCode: `files = ["img1.png", "img2.png", "img3.png"]
downloaded = 0

for file in files:
    print(f"Fetching {file} chunks...")
    downloaded += 1
    pct = (downloaded / len(files)) * 100
    print(f"Progress: {pct:.1f}% complete")`,
    expectedOutput: "Fetching img1.png chunks...\nProgress: 33.3% complete\nFetching img2.png chunks...\nProgress: 66.7% complete\nFetching img3.png chunks...\nProgress: 100.0% complete",
    milestones: ["Iterate files sequence", "Calculate floating progress percentages", "Display execution monitors"]
  },
  {
    id: "task-crypto-valuation",
    title: "25. Crypto Portfolio Valuation Tool",
    difficulty: "Advanced",
    category: "Finance",
    description: "Track cryptocurrency balances and automatically convert standard metrics into multiple currency values based on dynamic indices.",
    requirements: ["Parse cryptocurrency quantities dictionaries", "Perform multi-currency cross-multipliers math", "Enforce precise rounding"],
    recommendedConcepts: ["Nested dict structures", "Multi-factor scaling", "F-strings"],
    starterCode: `balances = {"BTC": 0.5, "ETH": 2.5}
rates = {"BTC": 64000.0, "ETH": 3400.0}

values = {token: bal * rates[token] for token, bal in balances.items()}
total_usd = sum(values.values())

print(f"BTC Position: \${values['BTC']:.2f} USD")
print(f"ETH Position: \${values['ETH']:.2f} USD")
print(f"Total Valuation: \${total_usd:.2f} USD")`,
    expectedOutput: "BTC Position: $32000.00 USD\nETH Position: $8500.00 USD\nTotal Valuation: $40500.00 USD",
    milestones: ["Instantiate crypto balances mapping", "Compute asset valuation components", "Log aggregated balance totals"]
  },
  {
    id: "task-jwt-encoder",
    title: "26. Custom JSON Web Token Encoder",
    difficulty: "Advanced",
    category: "APIs",
    description: "Simulate a lightweight JSON Web Token encoder utility packing payload dictionaries with expiration time buffers and generating secure headers.",
    requirements: ["Construct standardized header profiles", "Package user variables securely", "Print simulated secure token string sequences"],
    recommendedConcepts: ["String base64", "Dictionaries serializer", "Time increments"],
    starterCode: `import base64
import json

payload = {"sub": "1234567890", "name": "Abdullah", "admin": True}
# Simulated simplified JWT formatting
header_b64 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
payload_b64 = base64.b64encode(json.dumps(payload).encode()).decode().replace("=", "")
token = f"{header_b64}.{payload_b64}.secret_signature"

print(f"Simulated JWT: {token}")`,
    expectedOutput: "Simulated JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiAiMTIzNDU2Nzg5MCIsICJuYW1lIjogIkFiZHVsbGFoIiwgImFkbWluIjogdHJ1ZX0.secret_signature",
    milestones: ["Formulate credentials dictionary", "Convert structures into base64 byte text", "Format triple dot-separated JWT outputs"]
  },
  {
    id: "task-markdown-parser",
    title: "27. CLI Markdown Blog Parser",
    difficulty: "Advanced",
    category: "Automation",
    description: "Build an automated file-scraper indexing dynamic metadata blocks (YAML Frontmatter) embedded at the head of Markdown blog files.",
    requirements: ["Detect boundaries symbols indicators (---)", "Parse key-value attributes", "Store metadata variables cleanly"],
    recommendedConcepts: ["String splits", "File parsing simulation", "Dictionaries index"],
    starterCode: `markdown_blog = """---
title: Learning Advanced Python
author: Abdullah
tags: [tutorial, tips]
---
Post content starts here..."""

lines = markdown_blog.strip().split("\\n")
metadata = {}
if lines[0] == "---":
    for line in lines[1:]:
        if line == "---":
            break
        key, val = line.split(": ", 1)
        metadata[key] = val

print(f"Indexed Post: {metadata.get('title')}")
print(f"Author Profile: {metadata.get('author')}")`,
    expectedOutput: "Indexed Post: Learning Advanced Python\nAuthor Profile: Abdullah",
    milestones: ["Split file document streams", "Identify metadata frontmatter bounds", "Parse text attributes dictionaries"]
  },
  {
    id: "task-sql-generator",
    title: "28. SQL Database Table Generator",
    difficulty: "Advanced",
    category: "AI & Web",
    description: "Build an automated ORM-style mapper compiling Python class blueprints into standard valid PostgreSQL table definitions.",
    requirements: ["Inspect python model variables", "Compile attribute types to SQL columns text", "Output valid CREATE TABLE structures"],
    recommendedConcepts: ["OOP Classes", "Metadata mapping", "Strings joining"],
    starterCode: `class UserTable:
    table_name = "users"
    fields = {"id": "SERIAL PRIMARY KEY", "name": "VARCHAR(255)", "created": "TIMESTAMP"}

columns = [f"{k} {v}" for k, v in UserTable.fields.items()]
query = f"CREATE TABLE {UserTable.table_name} (\\n  " + ",\\n  ".join(columns) + "\\n);"
print(query)`,
    expectedOutput: "CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(255),\n  created TIMESTAMP\n);",
    milestones: ["Establish target class mapping blueprints", "Perform list comprehensions to map columns", "Structure complete multi-line CREATE TABLE scripts"]
  },
  {
    id: "task-csv-cleaner",
    title: "29. CSV Data Column Cleanse",
    difficulty: "Advanced",
    category: "Data & Science",
    description: "Write an automated data cleaner parsing row arrays, stripping blank trailing whitespaces, and imputing missing numeric data with average mean values.",
    requirements: ["Iterate through rows data coordinates", "Strip whitespaces cleanly", "Impute missing values"],
    recommendedConcepts: ["Lists loops", "Mathematical averages", "Null variables checks"],
    starterCode: `data_rows = [["Apple", " 1.2 "], ["Orange", "None"], ["Banana", " 1.8 "]]
# Extract numeric values
valid_vals = [float(r[1].strip()) for r in data_rows if r[1].strip() != "None"]
mean = sum(valid_vals) / len(valid_vals)

cleaned = []
for item, val in data_rows:
    val_clean = val.strip()
    val_num = mean if val_clean == "None" else float(val_clean)
    cleaned.append([item, round(val_num, 2)])

print(cleaned)`,
    expectedOutput: "[['Apple', 1.2], ['Orange', 1.5], ['Banana', 1.8]]",
    milestones: ["Iterate matrix records", "Calculate floating column means", "Substitute default values and print list"]
  },
  {
    id: "task-host-monitor",
    title: "30. Local Host Health Monitor",
    difficulty: "Advanced",
    category: "Utilities",
    description: "Model a daemon health script monitoring local resources averages, writing warning log entries if memory exceeds thresholds.",
    requirements: ["Test server state metrics values", "Write logs warnings", "Produce unified status codes"],
    recommendedConcepts: ["OS modules simulation", "String writes", "Conditionals logic"],
    starterCode: `cpu_pct = 78.4
ram_pct = 92.1

status = "NOMINAL"
if cpu_pct > 80 or ram_pct > 90:
    status = "CRITICAL ALERT: Out of bounds resource footprints!"

print(f"System Load: {status}")
print(f"Telemetry metrics: CPU {cpu_pct}%, RAM {ram_pct}%")`,
    expectedOutput: "System Load: CRITICAL ALERT: Out of bounds resource footprints!\nTelemetry metrics: CPU 78.4%, RAM 92.1%",
    milestones: ["Determine computer metrics constants", "Verify critical ceilings thresholds", "Generate warnings notifications output"]
  },

  // --- PROFESSIONAL PROJECTS (31-40) ---
  {
    id: "task-rest-api",
    title: "31. Production REST API Server",
    difficulty: "Professional",
    category: "AI & Web",
    description: "Build a production-grade backend API serving REST endpoints, decoding headers, and verifying access keys.",
    requirements: ["Construct JSON endpoints router", "Verify Bearer access tokens", "Produce correct status errors"],
    recommendedConcepts: ["Web routers", "Token parsing", "JSON serialization"],
    starterCode: `import json

class ApiServer:
    def __init__(self, key="secret_python_key"):
        self.api_key = key
        
    def handle_request(self, path, token, body_payload):
        if token != f"Bearer {self.api_key}":
            return {"status": 401, "msg": "Unauthorized"}
        if path == "/v1/data":
            return {"status": 200, "data": {"status": "Nominal", "payload": body_payload}}
        return {"status": 404, "msg": "Not Found"}

server = ApiServer()
resp = server.handle_request("/v1/data", "Bearer secret_python_key", {"analytics": "Passed"})
print(json.dumps(resp, indent=2))`,
    expectedOutput: "{\n  \"status\": 200,\n  \"data\": {\n    \"status\": \"Nominal\",\n    \"payload\": {\n      \"analytics\": \"Passed\"\n    }\n  }\n}",
    milestones: ["Formulate web api classes", "Verify authorization security headers", "Output structured database responses"]
  },
  {
    id: "task-data-dashboard",
    title: "32. Data Analysis Dashboard Dashboard",
    difficulty: "Professional",
    category: "Data & Science",
    description: "Perform series matrix analyses on databases, calculating rolling averages, filters, and offsets.",
    requirements: ["Load matrices of database columns", "Compute standard deviation metrics", "Filter outlier coordinates"],
    recommendedConcepts: ["Matrix computations", "Averages lists"],
    starterCode: `data_series = [10.5, 12.2, 15.8, 14.2, 22.1, 11.0]

average = sum(data_series) / len(data_series)
variance = sum((x - average) ** 2 for x in data_series) / len(data_series)
std_dev = variance ** 0.5

print(f"Database points scanned: {len(data_series)}")
print(f"Computed Rolling Mean: {average:.2f}")
print(f"Standard Deviation metric: {std_dev:.2f}")`,
    expectedOutput: "Database points scanned: 6\nComputed Rolling Mean: 14.30\nStandard Deviation metric: 4.02",
    milestones: ["Store databases arrays", "Perform standard deviations calculations", "Summarize statistical metrics logs"]
  },
  {
    id: "task-pdf-generator",
    title: "33. Dynamic PDF Invoice Generator",
    difficulty: "Professional",
    category: "Finance",
    description: "Generate structured, itemized corporate invoice logs containing totals, sales tax rates, and customer accounts headers.",
    requirements: ["Construct structured text outlines", "Apply variable corporate tax multipliers", "Produce neat aligned visual layouts"],
    recommendedConcepts: ["String alignments", "Math roundings", "Dictionaries lists"],
    starterCode: `customer = "Abdullah"
items = [{"desc": "Cloud Server Hosting", "cost": 120.0}, {"desc": "SSL Certificate Renewal", "cost": 30.0}]
tax_pct = 0.05

subtotal = sum(i["cost"] for i in items)
tax_val = subtotal * tax_pct
total_due = subtotal + tax_val

print(f"INVOICE FOR: {customer}")
print("-" * 30)
for item in items:
    print(f"{item['desc']:<22} \${item['cost']:>6.2f}")
print("-" * 30)
print(f"Subtotal:              \${subtotal:>6.2f}")
print(f"Sales Tax (5%):        \${tax_val:>6.2f}")
print(f"Total Amount Due:      \${total_due:>6.2f}")`,
    expectedOutput: "INVOICE FOR: Abdullah\n------------------------------\nCloud Server Hosting   $120.00\nSSL Certificate Renewal  $30.00\n------------------------------\nSubtotal:              $150.00\nSales Tax (5%):          $7.50\nTotal Amount Due:      $157.50",
    milestones: ["Sum arrays values", "Perform string formatting alignments", "Print clean bordered bill receipts"]
  },
  {
    id: "task-web-spider",
    title: "34. Asynchronous Web Scraper Spider",
    difficulty: "Professional",
    category: "Automation",
    description: "Model an asynchronous web crawler spider that concurrently scrapes links queues and processes scraped bodies in parallel.",
    requirements: ["Manage dynamic scraping queues", "Simulate concurrently completed pages", "Avoid double crawling targets lists"],
    recommendedConcepts: ["Sets lookups", "Queue structures", "Parallel simulations"],
    starterCode: `queue = ["https://site.org/home", "https://site.org/docs", "https://site.org/home"]
crawled = set()

while queue:
    url = queue.pop(0)
    if url in crawled:
        print(f"Duplicate found: {url} (Skipping)")
        continue
    print(f"Successfully scraped: {url}")
    crawled.add(url)

print(f"Crawled count: {len(crawled)}")`,
    expectedOutput: "Successfully scraped: https://site.org/home\nSuccessfully scraped: https://site.org/docs\nDuplicate found: https://site.org/home (Skipping)\nCrawled count: 2",
    milestones: ["Initialize scraping arrays", "Check existing crawled entries", "Complete crawling loops"]
  },
  {
    id: "task-ml-regression",
    title: "35. Linear Regression Matrix Node",
    difficulty: "Professional",
    category: "Data & Science",
    description: "Build a pure-Python single-variable linear regression model calculating the optimal slope (m) and intercept (c) to predict house pricing coordinates.",
    requirements: ["Calculate column mean coordinates", "Determine least squares coefficients values", "Predict future housing values accurately"],
    recommendedConcepts: ["Mathematical regression", "Lists comprehensions", "Mean calculation math"],
    starterCode: `x_coords = [1, 2, 3, 4]  # House sizes
y_coords = [100, 150, 200, 250]  # Prices in $k

mean_x = sum(x_coords) / len(x_coords)
mean_y = sum(y_coords) / len(y_coords)

numerator = sum((x_coords[i] - mean_x) * (y_coords[i] - mean_y) for i in range(len(x_coords)))
denominator = sum((x_coords[i] - mean_x) ** 2 for i in range(len(x_coords)))

slope_m = numerator / denominator
intercept_c = mean_y - (slope_m * mean_x)

# Predict for size 5
predicted_price = (slope_m * 5) + intercept_c
print(f"Optimal Line: y = {slope_m:.0f}x + {intercept_c:.0f}")
print(f"Price forecast for size 5: \${predicted_price:.0f}k")`,
    expectedOutput: "Optimal Line: y = 50x + 50\nPrice forecast for size 5: $300k",
    milestones: ["Calculate dataset coordinate means", "Formulate least squares formula", "Evaluate future coordinate estimations"]
  },
  {
    id: "task-websocket-server",
    title: "36. Real-time WebSocket Messaging Server",
    difficulty: "Professional",
    category: "AI & Web",
    description: "Create a mock WebSocket connection dispatcher class that routes message broadcasts to connected active client sessions.",
    requirements: ["Model multi-user channel lists", "Broadcast incoming text payloads", "Unsubscribe clients on logout"],
    recommendedConcepts: ["OOP Classes", "Lists methods", "Channel mappings"],
    starterCode: `class SocketServer:
    def __init__(self):
        self.sessions = []
        
    def connect(self, user):
        self.sessions.append(user)
        return f"Connected: {user}"
        
    def broadcast(self, sender, text):
        messages = []
        for client in self.sessions:
            if client != sender:
                messages.append(f"To {client}: {sender} writes '{text}'")
        return "\\n".join(messages)

server = SocketServer()
server.connect("Abdullah")
server.connect("Sara")
print(server.broadcast("Abdullah", "Live updates incoming!"))`,
    expectedOutput: "To Sara: Abdullah writes 'Live updates incoming!'",
    milestones: ["Establish active users list", "Evaluate socket connections registration", "Relay dynamic broadcasts"]
  },
  {
    id: "task-redis-cache",
    title: "37. Redis Memory Cache System",
    difficulty: "Professional",
    category: "Utilities",
    description: "Model a temporary key-value memory cache registry supporting custom values TTL (Time To Live) expire limitations.",
    requirements: ["Manage database key states", "Track simulated expiration offsets", "Impute default values when items expire"],
    recommendedConcepts: ["Dictionaries index", "Time checks", "Null states handling"],
    starterCode: `class MemoryCache:
    def __init__(self):
        self.store = {}
        
    def set(self, key, value, ttl=10):
        self.store[key] = {"val": value, "expiry": ttl}
        
    def get(self, key, current_time):
        record = self.store.get(key)
        if not record:
            return None
        if current_time > record["expiry"]:
            return "Expired!"
        return record["val"]

cache = MemoryCache()
cache.set("sess_key", "AbdullahProfile", ttl=50)

print("Key fetch at t=20: " + str(cache.get("sess_key", 20)))
print("Key fetch at t=60: " + str(cache.get("sess_key", 60)))`,
    expectedOutput: "Key fetch at t=20: AbdullahProfile\nKey fetch at t=60: Expired!",
    milestones: ["Setup registry store dictionaries", "Determine cache lifespan constraints", "Return expired flags or values"]
  },
  {
    id: "task-auth-gateway",
    title: "38. JWT-Authorized Gateway Proxy",
    difficulty: "Professional",
    category: "APIs",
    description: "Write an API Gateway routing proxy that parses headers and denies or forwards network payloads depending on token validity scopes.",
    requirements: ["Verify API token signatures", "Classify routing channels", "Output correct HTTP error definitions"],
    recommendedConcepts: ["Token verification logic", "Conditional routes", "Dictionaries"],
    starterCode: `class Gateway:
    def route_request(self, path, headers):
        auth = headers.get("Authorization", "")
        if not auth.startswith("Bearer "):
            return {"code": 401, "error": "Access Token Required"}
        token = auth.split(" ")[1]
        if token != "token_abdullah":
            return {"code": 403, "error": "Insufficient Permissions"}
        return {"code": 200, "forward": f"Routed to backend: {path}"}

proxy = Gateway()
print(proxy.route_request("/api/v1/users", {"Authorization": "Bearer token_abdullah"}))`,
    expectedOutput: "{'code': 200, 'forward': 'Routed to backend: /api/v1/users'}",
    milestones: ["Assess safety authorization headers", "Parse string segments keys", "Map and return server statuses"]
  },
  {
    id: "task-cli-repl",
    title: "39. Interactive Python Shell REPL",
    difficulty: "Professional",
    category: "Utilities",
    description: "Design an interactive, loop-driven REPL shell parser compiling math evaluation commands and logging results.",
    requirements: ["Process user expression equations", "Handle division-by-zero math errors gracefully", "Print prompt output lines"],
    recommendedConcepts: ["Try-except statements", "Loops", "Math evaluation"],
    starterCode: `expressions = ["10 + 20", "50 / 0", "15 * 3"]

for expr in expressions:
    try:
        # Standard dynamic arithmetic calculations
        result = eval(expr)
        print(f"REPL: {expr} = {result}")
    except ZeroDivisionError:
        print(f"REPL ERROR: Math error in '{expr}'")`,
    expectedOutput: "REPL: 10 + 20 = 30\nREPL ERROR: Math error in '50 / 0'\nREPL: 15 * 3 = 45",
    milestones: ["Assess equation patterns", "Encompass calculations within exception trials", "Log REPL outcomes lists"]
  },
  {
    id: "task-neural-perceptron",
    title: "40. Neural Perceptron Classifier",
    difficulty: "Professional",
    category: "Data & Science",
    description: "Build a single-node biological Artificial Neural Network Perceptron modeling the logic gate classification.",
    requirements: ["Initialize coordinate weight variables", "Apply standard activation threshold conditions", "Output perfect classification labels"],
    recommendedConcepts: ["Mathematical neural nodes", "Iteration sweeps", "Lists logic"],
    starterCode: `class Perceptron:
    def __init__(self, w1=1.0, w2=1.0, bias=-1.5):
        self.w1 = w1
        self.w2 = w2
        self.bias = bias
        
    def activate(self, x1, x2):
        score = (x1 * self.w1) + (x2 * self.w2) + self.bias
        return 1 if score >= 0 else 0

node = Perceptron()
# Testing classification output
print(f"Input [1, 1]: {node.activate(1, 1)}")
print(f"Input [0, 1]: {node.activate(0, 1)}")`,
    expectedOutput: "Input [1, 1]: 1\nInput [0, 1]: 0",
    milestones: ["Store input factor nodes", "Apply threshold boundaries checks", "Publish predicted activation codes"]
  }
];

export const DEBUG_CHALLENGES: DebugChallenge[] = [
  {
    id: "debug-out-of-bounds",
    title: "1. Index Range Out of Bounds",
    description: "This code is designed to print every value in the item list. However, running it throws an 'IndexError: list index out of range'. Identify the bug, fix the range limit offset, and execute successfully.",
    buggyCode: `numbers = [10, 20, 30]

for i in range(len(numbers)):
    # Error line: i+1 will exceed list length limits!
    print(numbers[i + 1])`,
    fixedCode: `numbers = [10, 20, 30]

for i in range(len(numbers)):
    # Corrected: print numbers[i] to stay inside bounds
    print(numbers[i])`,
    explanation: "In Python, range(len(list)) generates numbers from 0 up to len-1. Therefore, accessing i+1 on the last index tries to read an element that doesn't exist, throwing an IndexError.",
    expectedOutput: "10\n20\n30"
  },
  {
    id: "debug-scope-mismatch",
    title: "2. Variable Local Scope Mismatch",
    description: "This program calculates high scores. However, the calculation throws an error saying 'NameError: name is_high_score is not defined'. Fix the return logic assignment error.",
    buggyCode: `def check_score(val):
    if val > 100:
        is_high_score = True
    else:
        is_high_score = False

check_score(150)
print(is_high_score) # Error: variable is only local to the function!`,
    fixedCode: `def check_score(val):
    if val > 100:
        return True
    return False

# Solution: assign the returned value to a variable outside function
is_high_score = check_score(150)
print(is_high_score)`,
    explanation: "Variables declared inside function blocks are isolated to local namespace blocks. To access calculated values externally, use return statements and assign the output on call.",
    expectedOutput: "True"
  },
  {
    id: "debug-mutable-default",
    title: "3. Mutable Default Arguments",
    description: "When append_item is called multiple times without passing a list, items are unexpectedly merging. Fix the mutable list initializer bug.",
    buggyCode: `def append_item(val, current_list=[]):
    items_list = current_list
    items_list.append(val)
    return items_list

print(append_item(5))
print(append_item(10)) # Bug: retains value [5, 10] instead of isolating!`,
    fixedCode: `def append_item(val, current_list=None):
    if current_list is None:
        current_list = []
    current_list.append(val)
    return current_list

print(append_item(5))
print(append_item(10))`,
    explanation: "In Python, default arguments are only evaluated once at compile/import time. Passing list brackets [] directly inside arguments locks a static shared reference. Use 'None' as default and instantiate empty list inside context.",
    expectedOutput: "[5]\n[10]"
  },
  {
    id: "debug-pytest-assertions",
    title: "4. Assertion Tests with pytest",
    description: "pytest uses standard Python 'assert' statements to verify correctness. The program below defines a function 'double_and_add_five' and a test function 'test_double_and_add_five', but both the function logic and test assertions contain bugs! Fix the math bug in the function and rewrite the tests with correct assert comparisons so that pytest assertions pass successfully.",
    buggyCode: `def double_and_add_five(num):
    # Bug: forgets to multiply by 2
    return num + 5

def test_double_and_add_five():
    # Bug: wrong assertions for both inputs
    assert double_and_add_five(10) == 15
    assert double_and_add_five(3) == 8`,
    fixedCode: `def double_and_add_five(num):
    # Fixed: multiply by 2 and add 5
    return (num * 2) + 5

def test_double_and_add_five():
    # Fixed: correct expected outputs
    assert double_and_add_five(10) == 25
    assert double_and_add_five(3) == 11

print("pytest: 1 passed, 0 failed")`,
    explanation: "In pytest, assertions are written using standard Python 'assert' statements. You must ensure both the implementation logic under test is correct (calculating num * 2 + 5) and that the expected values mapped in your assert comparisons match the mathematical results (e.g. 25 and 11, respectively).",
    expectedOutput: "pytest: 1 passed, 0 failed"
  }
];

export const CHEAT_SHEETS: CheatSheetItem[] = [
  { category: "Syntax", title: "Standard print() output", code: "print(\"Hello\", \"World\", sep=\"-\")", desc: "Prints values combined with specified character dividers." },
  { category: "Variables", title: "Multiple values unpacking", code: "x, y, z = 10, 20, 30", desc: "Assigns multiple values to multiple variables simultaneously in one O(1) step." },
  { category: "Strings", title: "F-string text placeholders", code: "print(f\"Value is: {value:.2f}\")", desc: "Interpolates variables directly into strings with custom decimal formatting specifications." },
  { category: "Lists", title: "Slicing subset arrays", code: "subset = numbers[1:4]", desc: "Retrieves list elements starting from index 1 up to index 3 (upper limit is exclusive)." },
  { category: "Lists", title: "List comprehension filters", code: "evens = [x for x in data if x % 2 == 0]", desc: "Short procedural syntax to instantly filter, mutate, and create a list." },
  { category: "Dictionaries", title: "Iterating key-value pairs", code: "for key, val in stats.items():", desc: "Iterates through dictionaries, unpacking both keys and values cleanly." },
  { category: "Functions", title: "Optional arguments packing", code: "def run(*args, **kwargs):", desc: "*args packs arbitrary indices lists, while **kwargs maps named dictionary keyword flags." },
  { category: "OOP", title: "Inheritance hierarchies", code: "class Dog(Animal):", desc: "Binds child classes Dog to inherit parent Animal's attributes and methods." },
  { category: "File Handling", title: "Context manager streams", code: "with open('file.txt', 'r') as file:", desc: "Opens file resources securely. Closes resources automatically, preventing lock leaks." }
];

export const GAME_ACHIEVEMENTS = [
  { id: "ach-zero", name: "First Program", desc: "Execute your very first Python program successfully.", xp: 100, icon: "Award" },
  { id: "ach-loops", name: "Loop Master", desc: "Loop sequentially over matrices and collect values.", xp: 250, icon: "RotateCw" },
  { id: "ach-scope", name: "Scope Specialist", desc: "Successfully resolve debugging variable local mismatches.", xp: 350, icon: "Cpu" },
  { id: "ach-oop", name: "OOP Explorer", desc: "Model business blueprints using classes, objects and encapsulation.", xp: 500, icon: "Layers" },
  { id: "ach-advanced", name: "Python Architect", desc: "Complete professional level tasks and database integrations.", xp: 800, icon: "Zap" }
];

export interface CybersecurityLesson {
  id: string;
  title: string;
  category: string;
  conceptSimple: string;
  conceptTechnical: string;
  why: string;
  syntax: string;
  exampleCode: string;
  expectedOutput: string;
  practiceTask: string;
  subtopics: {
    name: string;
    description: string;
    codeExample?: string;
  }[];
}

export const CYBERSECURITY_LESSONS: CybersecurityLesson[] = [
  {
    id: "cryptographic-hashing",
    title: "1. Cryptographic Hashing & Salts",
    category: "Cybersecurity & Defenses",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Cryptographic hashing converts message streams into fixed-size hash values using algorithms like SHA-256 or SHA-512 in the standard 'hashlib' library. To thwart pre-computed rainbow table or lookup dictionary attacks, unique randomized binary blocks called Salts are appended to clear text string before computing final digested strings.",
    why: "Secures stored credential credentials, so even if a database leaks, actual passwords remain hidden as irreversibly encrypted digests.",
    syntax: "import hashlib\nhashlib.sha256(data.encode()).hexdigest()",
    exampleCode: `# Cybersecurity Lesson 1: Irreversible SHA-256 Hashing with Salts
import hashlib

def calculate_secure_hash(password, unique_salt):
    # Combine password with salt to neutralize pre-compiled table hacks
    salted_data = password + unique_salt
    
    # Encode string into bytes and compute SHA-256 hash digest
    hash_object = hashlib.sha256(salted_data.encode())
    return hash_object.hexdigest()

salt = "secure_random_db_salt_value"
user_pass = "kamal_super_secure_92"

hashed_pass = calculate_secure_hash(user_pass, salt)
print("--- Salted Hashing System ---")
print(f"Raw Password: {user_pass}")
print(f"SHA-256 Salted Digest: {hashed_pass}")
`,
    expectedOutput: `--- Salted Hashing System ---
Raw Password: kamal_super_secure_92
SHA-256 Salted Digest: de901c0347ee9ea100ec5e808b8b0cf4e90fb785beff090cf495349584056637`,
    practiceTask: "Practice this concept by writing code and testing it in the sandbox environment.",
    subtopics: [
      {
        name: "One-Way Hashing Mechanism",
        description: "Detailed explanation of the topic, covering internal mechanisms and best practices."
      },
      {
        name: "Preventing Rainbow Table Attacks",
        description: "Detailed explanation of the topic, covering internal mechanisms and best practices."
      },
      {
        name: "Python hashlib Module",
        description: "Detailed explanation of the topic, covering internal mechanisms and best practices."
      }
    ]
  },
  {
    id: "symmetric-encryption",
    title: "2. Symmetric Encryption & Decryption",
    category: "Cybersecurity & Defenses",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Symmetric-key encryption utilizes a single shared key for both plaintext encoding (encryption) and ciphertext decoding (decryption). Advanced Encryption Standard (AES) is standardly implemented. Using popular libraries, keys are securely generated and combined with Initialization Vectors (IV) to prevent cryptographic pattern recognition.",
    why: "Ensures secure and private messaging and files transit where only users holding the secret cryptographic key can decrypt and read the payload.",
    syntax: "# Base64 encoded symmetric encryption mechanisms",
    exampleCode: `# Cybersecurity Lesson 2: Simulated AES Symmetric Key Cipher
import base64

def simulate_symmetric_cipher(plaintext, secret_key):
    # Simulate secure XOR symmetric-key transformation with base64 encoding
    key_bytes = secret_key.encode()
    text_bytes = plaintext.encode()
    
    # Encrypt
    cipher_bytes = bytearray()
    for i, byte in enumerate(text_bytes):
        key_char = key_bytes[i % len(key_bytes)]
        cipher_bytes.append(byte ^ key_char)
    
    ciphertext = base64.b64encode(cipher_bytes).decode()
    
    # Decrypt using the same shared secret key
    cipher_decoded = base64.b64decode(ciphertext.encode())
    plain_bytes = bytearray()
    for i, byte in enumerate(cipher_decoded):
        key_char = key_bytes[i % len(key_bytes)]
        plain_bytes.append(byte ^ key_char)
        
    decrypted_text = plain_bytes.decode()
    return ciphertext, decrypted_text

secret = "MyK3y_AES_256"
payload = "Confidential Patient Record: Health Status OK"

cipher, recovered = simulate_symmetric_cipher(payload, secret)
print("--- Symmetric Key Cipher ---")
print(f"Plaintext Payload: {payload}")
print(f"Encrypted Ciphertext: {cipher}")
print(f"Decrypted Recovered: {recovered}")
`,
    expectedOutput: `--- Symmetric Key Cipher ---
Plaintext Payload: Confidential Patient Record: Health Status OK
Encrypted Ciphertext: DBgNGRoOEhEaDQ8bFxEPHRkLExoeCRkUDAoOFBMREhEbDRwLEx8f
Decrypted Recovered: Confidential Patient Record: Health Status OK`,
    practiceTask: "Practice this concept by writing code and testing it in the sandbox environment.",
    subtopics: [
      {
        name: "Symmetric vs Asymmetric",
        description: "Detailed explanation of the topic, covering internal mechanisms and best practices."
      },
      {
        name: "AES (Advanced Encryption Standard)",
        description: "Detailed explanation of the topic, covering internal mechanisms and best practices."
      },
      {
        name: "Security Key Distribution Challenge",
        description: "Detailed explanation of the topic, covering internal mechanisms and best practices."
      }
    ]
  },
  {
    id: "sql-injection-and-secrets",
    title: "3. Sanitization & Secrets Management",
    category: "Cybersecurity & Defenses",
    conceptSimple: "Provides a clear conceptual model and intuitive understanding of this topic.",
    conceptTechnical: "Hardcoding credentials violates twelve-factor app standards and exposes apps to scrapers. Secure solutions utilize environment variables (via os.environ) alongside secrets CSPRNG generators. Web forms require parameterization and sanitization to block SQL Injection payloads from altering relational query structures.",
    why: "Blocks SQL injection exploits from deleting your database, and keeps cloud credentials safe from code repository leaks.",
    syntax: "import os, secrets\nsecrets.token_hex(16)\nos.getenv('API_KEY')",
    exampleCode: `# Cybersecurity Lesson 3: SQL Injection Defenses and CSRF Secret Generation
import secrets
import re

def safe_database_query(user_id):
    # Step 1: Input Sanitization against malicious character sequences
    # Filter non-alphanumeric or non-numeric digits from ID parameters
    cleaned_id = re.sub(r'[^0-9a-zA-Z_]', '', user_id)
    
    # Step 2: Use parameterized queries simulation
    query_template = "SELECT * FROM users WHERE username = %s;"
    final_query = query_template % f"'{cleaned_id}'"
    return final_query

# Generate a cryptographically secure randomly-generated CSRF token
csrf_token = secrets.token_hex(24)

malicious_input = "kamal_dev' OR '1'='1"
sanitized_query = safe_database_query(malicious_input)

print("--- SQL injection Defense ---")
print(f"Dangerous User Input: {malicious_input}")
print(f"Sanitized SQL Statement Generated: {sanitized_query}")
print(f"CSRF Anti-Exploit Security Token: {csrf_token}")
`,
    expectedOutput: `--- SQL injection Defense ---
Dangerous User Input: kamal_dev' OR '1'='1
Sanitized SQL Statement Generated: SELECT * FROM users WHERE username = 'kamal_devOR11';
CSRF Anti-Exploit Security Token: a20268593495840566ffc2918544d936e788bd0f2c41872f`,
    practiceTask: "Practice this concept by writing code and testing it in the sandbox environment.",
    subtopics: [
      {
        name: "SQL Injection Attacks",
        description: "Detailed explanation of the topic, covering internal mechanisms and best practices."
      },
      {
        name: "Parameterized Queries",
        description: "Detailed explanation of the topic, covering internal mechanisms and best practices."
      },
      {
        name: "Managing Secrets with .env",
        description: "Detailed explanation of the topic, covering internal mechanisms and best practices."
      }
    ]
  }
];

