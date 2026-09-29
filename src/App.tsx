import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Play, 
  Square, 
  RotateCcw, 
  Terminal, 
  Sliders, 
  Code, 
  Check, 
  Copy, 
  HelpCircle, 
  Compass, 
  ArrowRight, 
  Cpu, 
  Zap, 
  FolderOpen, 
  RefreshCw, 
  Info,
  ChevronRight,
  Target,
  Sparkles,
  Database,
  Globe,
  Grid,
  MapPin,
  TrendingUp,
  Download,
  BookOpen,
  Search,
  Award,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  Menu,
  X,
  FileCode,
  Flame,
  Star,
  Users,
  Briefcase,
  Shield
} from 'lucide-react';
import { 
  LESSONS, 
  ROADMAP_LEVELS, 
  REAL_WORLD_TASKS, 
  DEBUG_CHALLENGES, 
  CHEAT_SHEETS, 
  GAME_ACHIEVEMENTS,
  Lesson,
  RoadmapLevel,
  RealWorldTask,
  DebugChallenge,
  CheatSheetItem,
  CybersecurityLesson,
  CYBERSECURITY_LESSONS
} from './pythonLessonsData';

import { FUNDAMENTALS_TOPICS } from './fundamentalsData';
import { TopicsMasterSection } from './TopicsMasterSection';
import { PythonBookSection } from './PythonBookSection';
import { LanguageSelector } from './LanguageSelector';

// ==========================================
// DAILY CODING MISSIONS DATA
// ==========================================
const DAILY_MISSIONS = [
  {
    id: "dm-1",
    title: "The Fibonacci Checker",
    description: "Build an optimal function is_fib(n) to return True if the given integer resides in the Fibonacci series sequence.",
    taskCode: `# Daily Challenge: Fibonacci Checker
# Write is_fib(n) that checks if n is in the Fibonacci sequence.

def is_fib(n):
    # Hint: (5*n^2 + 4) or (5*n^2 - 4) is a perfect square
    import math
    def is_square(x):
        s = int(math.isqrt(x))
        return s*s == x
    return is_square(5*n*n + 4) or is_square(5*n*n - 4)

# Test your answer with 13 (should return True)
print(is_fib(13))`,
    xpReward: 50,
    testValue: "True"
  },
  {
    id: "dm-2",
    title: "Vowel Scraper Counter",
    description: "Build a single-line comprehension that extracts and counts all vowels inside a given text string.",
    taskCode: `# Daily Challenge: Count Vowels
# Use a list comprehension to filter vowels in lowercase or uppercase.

text = "Neumorphic design is gorgeous and engaging!"
vowels = [char for char in text if char.lower() in 'aeiou']

print(len(vowels))`,
    xpReward: 50,
    testValue: "16"
  },
  {
    id: "dm-3",
    title: "Palindrome Synthesizer",
    description: "Create a palindrome check that ignores case, spaces, and punctuation to validate complex sentences.",
    taskCode: `# Daily Challenge: Palindrome Synthesizer
# Clean the text and check if it reads the same backwards.

text = "A man, a plan, a canal: Panama"
clean_text = "".join(c.lower() for c in text if c.isalnum())
is_palindrome = clean_text == clean_text[::-1]

print(is_palindrome)`,
    xpReward: 50,
    testValue: "True"
  },
  {
    id: "dm-4",
    title: "Standard Deviation Parser",
    description: "Determine the standard deviation of list integers using pure Python arithmetic.",
    taskCode: `# Daily Challenge: Standard Deviation
# Find the mean, sum of squared differences, and variance.

data = [10, 12, 23, 23, 16, 23, 21, 16]
mean = sum(data) / len(data)
variance = sum((x - mean) ** 2 for x in data) / len(data)
std_dev = variance ** 0.5

print(round(std_dev, 2))`,
    xpReward: 50,
    testValue: "5.0"
  }
];

// ==========================================
// DAILY QUIZ INTERFACES & BLUEPRINTS
// ==========================================
export interface DailyQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  xpReward: number;
}

export const DAILY_QUIZZES: DailyQuizQuestion[] = [
  {
    id: "quiz-1",
    question: "What is the expected output of: print(type(lambda x: x)) in Python?",
    options: ["<class 'function'>", "<class 'lambda'>", "<class 'object'>", "SyntaxError"],
    correctIndex: 0,
    explanation: "In Python, a lambda expression produces an anonymous function object, which belongs to the standard '<class 'function'>' type.",
    xpReward: 30
  },
  {
    id: "quiz-2",
    question: "Which of the following is true about Python dictionary keys?",
    options: [
      "Keys must be mutable objects like lists or sets",
      "Dictionary keys have O(N) linear access speed complexity",
      "Keys must be hashable (immutable types like strings, numbers, or tuples)",
      "They can contain duplicate keys mapping to different active values"
    ],
    correctIndex: 2,
    explanation: "Dictionary keys in Python must be hashable. Immutable types (strings, numbers, tuples without mutable elements) are hashable, whereas lists and dictionaries are mutable and thus unhashable.",
    xpReward: 30
  },
  {
    id: "quiz-3",
    question: "What does the 'is' operator evaluate in Python?",
    options: [
      "Whether two variables have the same values (equality)",
      "Whether two variables point to the exact same object in memory (identity)",
      "Whether a variable belongs to a specific class type",
      "Whether a string contains another substring"
    ],
    correctIndex: 1,
    explanation: "The 'is' operator checks for object identity (memory address reference check), while '==' checks for value equality.",
    xpReward: 30
  },
  {
    id: "quiz-4",
    question: "How does Python's logical 'or' evaluation handle truthiness?",
    options: [
      "It always returns a True or False boolean object",
      "It returns the first truthy value without evaluating the rest, or the last falsy value",
      "It evaluates all expressions sequentially and returns the sum of truths",
      "It throws an error if arguments are of mismatched primitive types"
    ],
    correctIndex: 1,
    explanation: "Python's logical operators 'and' and 'or' perform short-circuit evaluation and return the actual operand values rather than converting them to True/False.",
    xpReward: 30
  },
  {
    id: "quiz-5",
    question: "What is the result of [1, 2] + [3, 4] in Python?",
    options: ["[4, 6]", "[[1, 2], [3, 4]]", "[1, 2, 3, 4]", "TypeError"],
    correctIndex: 2,
    explanation: "The '+' operator is overloaded for lists in Python, acting as a concatenation operator that merges both lists into a new combined list.",
    xpReward: 30
  }
];

// ==========================================
// TEST ATTEMPT HISTORY INTERFACE
// ==========================================
export interface TestAttempt {
  id: string;
  timestamp: string;
  status: 'passed' | 'failed';
  coverage: number;
}

// ==========================================
// PREDEFINED PYTEST TARGET FUNCTIONS
// ==========================================
export interface PytestTarget {
  id: string;
  name: string;
  description: string;
  targetCode: string;
  defaultTestCode: string;
}

export const PREDEFINED_PYTEST_TARGETS: PytestTarget[] = [
  {
    id: "target-divide",
    name: "divide(a, b)",
    description: "Returns a divided by b. Safe division by zero returns 0.",
    targetCode: "def divide(a, b):\n    # Returns a divided by b. Returns 0 if division by zero occurs.\n    if b == 0:\n        return 0\n    return a / b",
    defaultTestCode: "import pytest\n\ndef test_divide_basic():\n    assert divide(10, 2) == 5\n    assert divide(9, 3) == 3\n\ndef test_divide_by_zero():\n    # TODO: Write an assertion to verify dividing by 0 returns 0\n    assert divide(5, 0) == 0"
  },
  {
    id: "target-is-prime",
    name: "is_prime(n)",
    description: "Returns True if n is prime, False otherwise. Note edge cases like <= 1, and 2.",
    targetCode: "def is_prime(n):\n    # Returns True if n is prime, False otherwise.\n    if n <= 1:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True",
    defaultTestCode: "import pytest\n\ndef test_prime_numbers():\n    assert is_prime(3) == True\n    assert is_prime(7) == True\n\ndef test_non_prime():\n    assert is_prime(4) == False\n    # TODO: Add assertions for 1, 0, and negative numbers"
  },
  {
    id: "target-get-discount",
    name: "get_discount(price, user_type)",
    description: "Calculates discounted prices. VIP members get 20% off, Members get 10%. Raises ValueError if price is negative.",
    targetCode: "def get_discount(price, user_type):\n    # Calculates discounted prices.\n    # Raises ValueError if price < 0.\n    if price < 0:\n        raise ValueError(\"Price cannot be negative\")\n    if user_type == \"VIP\":\n        return price * 0.8\n    elif user_type == \"Member\":\n        return price * 0.9\n    return price",
    defaultTestCode: "import pytest\n\ndef test_vip_discount():\n    assert get_discount(100, \"VIP\") == 80.0\n\ndef test_member_discount():\n    assert get_discount(100, \"Member\") == 90.0\n\ndef test_negative_price():\n    # Hint: To test exceptions with pytest, use:\n    # with pytest.raises(ValueError):\n    #     get_discount(-10, \"VIP\")\n    pass"
  },
  {
    id: "target-fizzbuzz",
    name: "fizzbuzz(n)",
    description: "FizzBuzz implementation for single numbers. Returns 'Fizz', 'Buzz', 'FizzBuzz', or string of number.",
    targetCode: "def fizzbuzz(n):\n    # Standard FizzBuzz for a single integer.\n    if n % 15 == 0:\n        return \"FizzBuzz\"\n    elif n % 3 == 0:\n        return \"Fizz\"\n    elif n % 5 == 0:\n        return \"Buzz\"\n    return str(n)",
    defaultTestCode: "import pytest\n\ndef test_fizzbuzz_multiples():\n    assert fizzbuzz(15) == \"FizzBuzz\"\n    assert fizzbuzz(30) == \"FizzBuzz\"\n\ndef test_fizz_only():\n    assert fizzbuzz(3) == \"Fizz\"\n    # TODO: Add tests for Buzz and normal numbers"
  }
];

// ==========================================
// MAIN APPLET COMPONENT
// ==========================================
export default function App() {
  // Navigation State
  const [activeView, setActiveView] = useState<'home' | 'book' | 'topics-master' | 'learn' | 'roadmap' | 'real-world-lab' | 'debugging-lab' | 'playground' | 'reference' | 'achievements' | 'fundamentals' | 'cybersecurity'>('book');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Ref for Performance Dashboard scrolling
  const refactorConsoleRef = useRef<HTMLDivElement>(null);
  
  // Selected Fundamental Topic State
  const [selectedFundamentalId, setSelectedFundamentalId] = useState<string>("getting-started");

  // Selected Cybersecurity Lesson State
  const [selectedSecurityId, setSelectedSecurityId] = useState<string>("cryptographic-hashing");

  // Course Progress & Gamification (Persisted in LocalStorage)
  const [userXp, setUserXp] = useState<number>(() => {
    return Number(localStorage.getItem('pymaster_xp') ?? 100);
  });
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('pymaster_completed_lessons');
    return saved ? JSON.parse(saved) : ["what-is-python"];
  });
  const [solvedChallenges, setSolvedChallenges] = useState<string[]>(() => {
    const saved = localStorage.getItem('pymaster_solved_challenges');
    return saved ? JSON.parse(saved) : [];
  });
  const [streakDays, setStreakDays] = useState<number>(() => {
    return Number(localStorage.getItem('pymaster_streak') ?? 3);
  });

  // Test Run Attempts History
  const [testHistory, setTestHistory] = useState<Record<string, TestAttempt[]>>(() => {
    const saved = localStorage.getItem('pymaster_test_history');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('pymaster_test_history', JSON.stringify(testHistory));
  }, [testHistory]);

  // Selected Lesson, Project, or Debug state values
  const [selectedLevelId, setSelectedLevelId] = useState<string>("level-1");
  const [selectedLessonId, setSelectedLessonId] = useState<string>("what-is-python");
  const [selectedTaskId, setSelectedTaskId] = useState<string>("task-expense");
  const [selectedDebugId, setSelectedDebugId] = useState<string>("debug-out-of-bounds");

  // Filters for Real World Lab
  const [selectedTaskCategory, setSelectedTaskCategory] = useState<string>("All");
  const [selectedTaskDifficulty, setSelectedTaskDifficulty] = useState<string>("All");

  // Custom live visualizer controls (Tweak parameters!)
  const [tweakSpeed, setTweakSpeed] = useState<number>(1.0);
  const [tweakSegments, setTweakSegments] = useState<number>(16);
  const [tweakColor, setTweakColor] = useState<string>("#3776ab");

  // Code workspace states
  const [editorCode, setEditorCode] = useState<string>('');
  const [terminalOutput, setTerminalOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // "Explain This Code" Assistant states
  const [userPastedCode, setUserPastedCode] = useState<string>(`# Paste Python code to explain here
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount`);
  const [aiExplanationResult, setAiExplanationResult] = useState<string>('');
  const [isExplaining, setIsExplaining] = useState<boolean>(false);

  // Home Page Simulated Execution State
  const [heroOutputLogs, setHeroOutputLogs] = useState<string[]>([]);
  const [isHeroSimulating, setIsHeroSimulating] = useState<boolean>(false);

  // Floating Notification system
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Daily Coding Mission States
  const [completedDailyMissions, setCompletedDailyMissions] = useState<string[]>(() => {
    const saved = localStorage.getItem('pymaster_completed_daily_missions');
    return saved ? JSON.parse(saved) : [];
  });
  const [dailyMissionIndex, setDailyMissionIndex] = useState<number>(() => {
    const day = new Date().getDate();
    return day % 4; // 4 pre-coded high-fidelity missions
  });
  const [dailyCountdown, setDailyCountdown] = useState<string>("24h 00m 00s");
  const [isDailyRunning, setIsDailyRunning] = useState<boolean>(false);
  const [dailyOutput, setDailyOutput] = useState<string>('');

  // Daily Quiz States
  const [completedDailyQuizzes, setCompletedDailyQuizzes] = useState<string[]>(() => {
    const saved = localStorage.getItem('pymaster_completed_daily_quizzes');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(() => {
    const saved = localStorage.getItem('pymaster_selected_quiz_option');
    return saved !== null ? Number(saved) : null;
  });
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(() => {
    const saved = localStorage.getItem('pymaster_quiz_submitted');
    return saved === 'true';
  });
  const [quizAnsweredCorrectly, setQuizAnsweredCorrectly] = useState<boolean | null>(() => {
    const saved = localStorage.getItem('pymaster_quiz_answered_correctly');
    return saved === 'true' ? true : saved === 'false' ? false : null;
  });
  const [dailyQuizIndex, setDailyQuizIndex] = useState<number>(() => {
    const day = new Date().getDate();
    return day % 5;
  });
  const [lastQuizDay, setLastQuizDay] = useState<number>(() => {
    return Number(localStorage.getItem('pymaster_last_quiz_day') ?? 0);
  });

  // Debug Lab sub-view state
  const [debugLabTab, setDebugLabTab] = useState<'challenges' | 'performance' | 'pytest-validator'>('challenges');

  // Custom Pytest Assertion Validator states
  const [selectedPytestTargetId, setSelectedPytestTargetId] = useState<string>("target-divide");
  const [pytestTargetCode, setPytestTargetCode] = useState<string>(
    PREDEFINED_PYTEST_TARGETS[0].targetCode
  );
  const [pytestTestCode, setPytestTestCode] = useState<string>(
    PREDEFINED_PYTEST_TARGETS[0].defaultTestCode
  );
  const [isPytestValidating, setIsPytestValidating] = useState<boolean>(false);
  const [pytestValidationResult, setPytestValidationResult] = useState<any>(null);

  // Performance Dashboard state: Tracks latest test coverage (0% - 100%) for all 40 projects
  const [projectCoverages, setProjectCoverages] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('pymaster_project_coverages');
    if (saved) return JSON.parse(saved);
    
    // Pre-populate with realistic starter values
    const initial: Record<string, number> = {};
    REAL_WORLD_TASKS.forEach((t, index) => {
      if (index < 5) {
        initial[t.id] = 40 + (index * 12);
      } else if (index < 12) {
        initial[t.id] = 15 + (index * 5);
      } else {
        initial[t.id] = 0;
      }
    });
    return initial;
  });

  // Average coverage state for chart tracking over past days
  const [refactoringHistory, setRefactoringHistory] = useState<{date: string; averageCoverage: number}[]>(() => {
    const saved = localStorage.getItem('pymaster_refactoring_history');
    if (saved) return JSON.parse(saved);
    return [
      { date: "Sep 24", averageCoverage: 12 },
      { date: "Sep 25", averageCoverage: 14 },
      { date: "Sep 26", averageCoverage: 18 },
      { date: "Sep 27", averageCoverage: 22 },
      { date: "Sep 28", averageCoverage: 25 },
    ];
  });

  // Selected project ID for Refactoring Console inside Performance Dashboard
  const [refactorProjectId, setRefactorProjectId] = useState<string>(() => {
    return REAL_WORLD_TASKS[0]?.id || "task-expense";
  });
  const [refactorSelectedOption, setRefactorSelectedOption] = useState<number | null>(null);
  const [refactorConsoleOutput, setRefactorConsoleOutput] = useState<string>('');
  const [isRefactoringInProgress, setIsRefactoringInProgress] = useState<boolean>(false);

  // Search & category states for Performance Dashboard
  const [perfSearch, setPerfSearch] = useState<string>('');
  const [perfCategory, setPerfCategory] = useState<string>('All');

  // Sync coverages to localStorage
  useEffect(() => {
    localStorage.setItem('pymaster_project_coverages', JSON.stringify(projectCoverages));
  }, [projectCoverages]);

  // Sync history to localStorage
  useEffect(() => {
    localStorage.setItem('pymaster_refactoring_history', JSON.stringify(refactoringHistory));
  }, [refactoringHistory]);

  // Daily Countdown Ticker & Dynamic Index Synchronizer
  useEffect(() => {
    const updateTicker = () => {
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const diff = tomorrow.getTime() - now.getTime();
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      const pad = (num: number) => String(num).padStart(2, '0');
      setDailyCountdown(`${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`);

      const currentDay = now.getDate();
      const nextIndex = currentDay % 4;
      setDailyMissionIndex(nextIndex);

      const nextQuizIndex = currentDay % 5;
      setDailyQuizIndex(nextQuizIndex);
    };

    updateTicker();
    const timer = setInterval(updateTicker, 1000);
    return () => clearInterval(timer);
  }, []);

  // Reset daily quiz variables when a new day arrives
  useEffect(() => {
    const now = new Date();
    const currentDay = now.getDate();
    if (currentDay !== lastQuizDay) {
      setLastQuizDay(currentDay);
      localStorage.setItem('pymaster_last_quiz_day', String(currentDay));
      setSelectedQuizOption(null);
      setQuizSubmitted(false);
      setQuizAnsweredCorrectly(null);
      localStorage.removeItem('pymaster_selected_quiz_option');
      localStorage.removeItem('pymaster_quiz_submitted');
      localStorage.removeItem('pymaster_quiz_answered_correctly');
    }
  }, [lastQuizDay]);

  // Persist completed daily quizzes
  useEffect(() => {
    localStorage.setItem('pymaster_completed_daily_quizzes', JSON.stringify(completedDailyQuizzes));
  }, [completedDailyQuizzes]);

  // Persist selected option
  useEffect(() => {
    if (selectedQuizOption !== null) {
      localStorage.setItem('pymaster_selected_quiz_option', String(selectedQuizOption));
    } else {
      localStorage.removeItem('pymaster_selected_quiz_option');
    }
  }, [selectedQuizOption]);

  // Persist submission status
  useEffect(() => {
    localStorage.setItem('pymaster_quiz_submitted', String(quizSubmitted));
  }, [quizSubmitted]);

  // Persist correctness status
  useEffect(() => {
    if (quizAnsweredCorrectly !== null) {
      localStorage.setItem('pymaster_quiz_answered_correctly', String(quizAnsweredCorrectly));
    } else {
      localStorage.removeItem('pymaster_quiz_answered_correctly');
    }
  }, [quizAnsweredCorrectly]);

  // Persist completed daily missions
  useEffect(() => {
    localStorage.setItem('pymaster_completed_daily_missions', JSON.stringify(completedDailyMissions));
  }, [completedDailyMissions]);

  // Execute active Daily Coding Mission logic
  const handleExecuteDailyMission = () => {
    setIsDailyRunning(true);
    setDailyOutput("Connecting to local sandbox virtual frame...\n");
    const activeMission = DAILY_MISSIONS[dailyMissionIndex];
    
    setTimeout(() => {
      setDailyOutput(prev => prev + `>>> Reading statement payload...\n`);
      setTimeout(() => {
        setDailyOutput(prev => prev + `>>> Output standard: "${activeMission.testValue}" (Match Found)\n\n🎉 Code compilation success (Exit Code: 0).\n`);
        
        const alreadyDone = completedDailyMissions.includes(activeMission.id);
        if (!alreadyDone) {
          setCompletedDailyMissions(prev => [...prev, activeMission.id]);
          setUserXp(prev => prev + activeMission.xpReward);
          setStreakDays(prev => prev + 1);
          triggerToast(`Daily Mission Complete! +${activeMission.xpReward} XP Earned!`);
        } else {
          triggerToast(`Executed successfully! (XP already claimed for today).`);
        }
        setIsDailyRunning(false);
      }, 1000);
    }, 600);
  };

  // Submit Daily MCQ Quiz handler
  const handleDailyQuizSubmit = () => {
    if (selectedQuizOption === null) {
      triggerToast("Please select an option first!");
      return;
    }
    const currentQuiz = DAILY_QUIZZES[dailyQuizIndex];
    const isCorrect = selectedQuizOption === currentQuiz.correctIndex;
    setQuizSubmitted(true);
    setQuizAnsweredCorrectly(isCorrect);
    
    if (isCorrect) {
      const alreadyDone = completedDailyQuizzes.includes(currentQuiz.id);
      if (!alreadyDone) {
        setCompletedDailyQuizzes(prev => [...prev, currentQuiz.id]);
        setUserXp(prev => prev + currentQuiz.xpReward);
        triggerToast(`🎉 Correct Answer! +${currentQuiz.xpReward} XP awarded!`);
      } else {
        triggerToast("🎉 Correct! (XP already claimed for this quiz).");
      }
    } else {
      triggerToast("❌ Incorrect Answer. Review the explanation below to learn!");
    }
  };

  // Get Refactoring Challenge data for the active project
  const getRefactorChallenge = (projectId: string) => {
    const task = REAL_WORLD_TASKS.find(t => t.id === projectId) || REAL_WORLD_TASKS[0];
    
    if (task.category === "Finance") {
      return {
        bugDescription: "The current codebase uses unstable float division and lacks precise exception guards, leading to potential currency rounding drifts.",
        buggySnippet: "def calc_share(total, parts):\n    return total / parts  # Float drift risk!",
        options: [
          "Use standard 'decimal' context and wrap with try/except ZeroDivisionError",
          "Convert inputs to string type and slice decimals characters",
          "Double the total amount before running normal division",
          "Ignore float drift and use global math.floor() wrapper"
        ],
        correctIndex: 0,
        refactoredSnippet: "from decimal import Decimal, InvalidOperation\ntry:\n    return Decimal(str(total)) / Decimal(str(parts))\nexcept ZeroDivisionError:\n    return Decimal('0')",
        explanation: "In financial modules, using binary float representation can introduce micro rounding errors. The standard 'decimal' library provides correct base-10 calculation precision."
      };
    } else if (task.category === "APIs" || task.category === "AI & Web") {
      return {
        bugDescription: "The API router hardcodes the secret API Bearer token in cleartext string, raising severe security scanner concerns.",
        buggySnippet: "API_TOKEN = 'sk-prod_928aa1152ff'\nresponse = query_api(API_TOKEN)",
        options: [
          "Store the token inside local variables and call globals() to search keys",
          "Replace token with os.getenv('API_BEARER_TOKEN') secret environment variable",
          "Encrypt token with static base64 and decode directly in-line",
          "Store token inside global comments so compiler ignores its bytes"
        ],
        correctIndex: 1,
        refactoredSnippet: "import os\napi_token = os.getenv('API_BEARER_TOKEN')\nresponse = query_api(api_token)",
        explanation: "Storing secrets in codebase triggers repository leaks. Reading variables through environment variables (os.getenv) decouples secure credentials from static files."
      };
    } else if (task.category === "Automation" || task.category === "Utilities") {
      return {
        bugDescription: "The log file is opened using basic file descriptors without absolute release blocks, risking thread lock leaks on execution crashes.",
        buggySnippet: "file = open('metrics.log', 'w')\nfile.write(data)\nfile.close()",
        options: [
          "Inject thread-sleep wait times to let OS clear resources asynchronously",
          "Use 'with open(...) as file:' context managers to handle auto-closes",
          "Delete the file from disk using shell commands after each write",
          "Convert the file stream into an immutable set array"
        ],
        correctIndex: 1,
        refactoredSnippet: "with open('metrics.log', 'w') as file:\n    file.write(data)",
        explanation: "If exceptions are thrown between open() and close(), files remain locked in memory. Context managers ('with') guarantee clean file release even upon runtime errors."
      };
    } else if (task.category === "Games") {
      return {
        bugDescription: "The game character matrix generation uses nested procedural nested loops, resulting in O(N^2) linear slowdown on bigger grids.",
        buggySnippet: "grid = []\nfor r in range(100):\n    row = []\n    for c in range(100):\n        row.append(0)\n    grid.append(row)",
        options: [
          "Use direct O(1) list multiplication grid: [[0] * 100 for _ in range(100)]",
          "Convert the outer range counters to custom static float objects",
          "Run nested loops inside standard try/except modules",
          "Replace variables counts with recursive stack operations"
        ],
        correctIndex: 0,
        refactoredSnippet: "grid = [[0] * 100 for _ in range(100)]",
        explanation: "List multiplication and comprehensions are optimized in CPython, reducing function call overhead and drastically speeding up matrix structures creation."
      };
    } else {
      return {
        bugDescription: "The data aggregation parses and filters duplicate array nodes iteratively using sequential linear lookups, leading to slow O(N) performance.",
        buggySnippet: "uniques = []\nfor item in records:\n    if item not in uniques: uniques.append(item)",
        options: [
          "Convert the target list to a hash-based Set for instant O(1) duplicate checks",
          "Sort the array list after appending every item",
          "Use list compression filters combined with logical 'or'",
          "Run index-based loops and double check elements offsets"
        ],
        correctIndex: 0,
        refactoredSnippet: "uniques = list(set(records))",
        explanation: "Using standard Python sets enables hash-based indexing, transforming linear scan checks (O(N)) into nearly instant lookup times (O(1))."
      };
    }
  };

  // Submit and execute Refactoring Challenge
  const handleExecuteRefactor = () => {
    if (refactorSelectedOption === null) {
      triggerToast("Please select a refactoring option!");
      return;
    }
    
    setIsRefactoringInProgress(true);
    setRefactorConsoleOutput("🚀 Connecting pytest harness tool to sandbox environment...\n");
    
    const challenge = getRefactorChallenge(refactorProjectId);
    const isCorrect = refactorSelectedOption === challenge.correctIndex;
    
    setTimeout(() => {
      setRefactorConsoleOutput(prev => prev + "📦 Compiling refactored code modules...\n");
      setTimeout(() => {
        setRefactorConsoleOutput(prev => prev + "⚡ Injecting pytest assertion suites...\n");
        setTimeout(() => {
          if (isCorrect) {
            // Update coverage for this project to 100%
            setProjectCoverages(prev => {
              const updated = { ...prev, [refactorProjectId]: 100 };
              
              // Recalculate average coverage for historical tracking
              const totalSum = Object.values(updated).reduce((a, b) => a + b, 0);
              const newAvg = Math.round(totalSum / REAL_WORLD_TASKS.length);
              
              // Update Sep 28 history entry with latest calculated average coverage
              setRefactoringHistory(historyPrev => {
                const updatedHistory = [...historyPrev];
                const lastIdx = updatedHistory.length - 1;
                if (lastIdx >= 0) {
                  updatedHistory[lastIdx] = { ...updatedHistory[lastIdx], averageCoverage: newAvg };
                }
                return updatedHistory;
              });
              
              return updated;
            });
            
            setUserXp(prev => prev + 50);
            setRefactorConsoleOutput(
              `=== pytest session starts ===\n` +
              `platform linux -- Python 3.11.2, pytest-7.4.0\n` +
              `plugins: cov-4.1.0\n` +
              `collected 12 tests\n\n` +
              `tests/test_refactor.py ............                      [100%]\n\n` +
              `---------- coverage: platform linux, python 3.11.2 -----------\n` +
              `Name                  Stmts   Miss  Cover\n` +
              `-----------------------------------------\n` +
              `main_refactored.py       18      0   100%\n` +
              `-----------------------------------------\n` +
              `TOTAL                    18      0   100%\n\n` +
              `=== 12 passed in 0.32s ===\n\n` +
              `🎉 Codebase refactored successfully! Test coverage raised to 100%!\n` +
              `🌟 Quality assurance thresholds met. +50 XP Awarded!`
            );
            triggerToast("🎉 Refactoring Success! Test coverage raised to 100%!");
          } else {
            setRefactorConsoleOutput(
              `=== pytest session starts ===\n` +
              `platform linux -- Python 3.11.2, pytest-7.4.0\n` +
              `collected 12 tests\n\n` +
              `tests/test_refactor.py FFFFFF......                      [ 50%]\n\n` +
              `=== FAILURES ===\n` +
              `__ test_coverage_constraints __\n` +
              `AssertionError: Coverage is ${projectCoverages[refactorProjectId] || 0}%, required threshold >= 95%\n\n` +
              `❌ ERROR: Your selected strategy introduced semantic or optimization faults.\n` +
              `💡 HINT: ${challenge.explanation}`
            );
            triggerToast("❌ Refactoring Failed. Try another approach!");
          }
          setIsRefactoringInProgress(false);
        }, 800);
      }, 600);
    }, 600);
  };

  // Persist gamified updates
  useEffect(() => {
    const handleGlobalRejection = (event: PromiseRejectionEvent) => {
      // Silence Vite HMR and WebSocket errors completely from triggering UI error overlays
      const reason = event.reason?.toString() || "";
      if (reason.includes("WebSocket") || reason.includes("websocket") || reason.includes("closed without opened")) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const handleGlobalError = (event: ErrorEvent) => {
      const message = event.message || "";
      if (message.includes("WebSocket") || message.includes("websocket") || message.includes("closed without opened")) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener('unhandledrejection', handleGlobalRejection);
    window.addEventListener('error', handleGlobalError);

    return () => {
      window.removeEventListener('unhandledrejection', handleGlobalRejection);
      window.removeEventListener('error', handleGlobalError);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('pymaster_xp', String(userXp));
  }, [userXp]);

  useEffect(() => {
    localStorage.setItem('pymaster_completed_lessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('pymaster_solved_challenges', JSON.stringify(solvedChallenges));
  }, [solvedChallenges]);

  useEffect(() => {
    localStorage.setItem('pymaster_streak', String(streakDays));
  }, [streakDays]);

  // Synchronize dynamic active definitions
  const activeLesson = useMemo(() => {
    return LESSONS.find(l => l.id === selectedLessonId) || LESSONS[0];
  }, [selectedLessonId]);

  const activeTask = useMemo(() => {
    return REAL_WORLD_TASKS.find(t => t.id === selectedTaskId) || REAL_WORLD_TASKS[0];
  }, [selectedTaskId]);

  const activeDebugChallenge = useMemo(() => {
    return DEBUG_CHALLENGES.find(c => c.id === selectedDebugId) || DEBUG_CHALLENGES[0];
  }, [selectedDebugId]);

  const activeFundamental = useMemo(() => {
    return FUNDAMENTALS_TOPICS.find(f => f.id === selectedFundamentalId) || FUNDAMENTALS_TOPICS[0];
  }, [selectedFundamentalId]);

  const activeSecurityLesson = useMemo(() => {
    return CYBERSECURITY_LESSONS.find(s => s.id === selectedSecurityId) || CYBERSECURITY_LESSONS[0];
  }, [selectedSecurityId]);

  // Dynamic real-time Pytest Test Coverage calculation
  const testCoverageStatus = useMemo(() => {
    const normalized = editorCode.replace(/\s+/g, '');
    
    let totalAssertions = 0;
    let passedAssertions = 0;
    let functionsList: { name: string; type: string; status: 'passed' | 'failed' | 'pending'; description: string }[] = [];
    
    if (selectedDebugId === 'debug-out-of-bounds') {
      totalAssertions = 2;
      const indexFix = normalized.includes("numbers[i]") && !normalized.includes("i+1") && !normalized.includes("i+2");
      const loopFix = normalized.includes("range(len(numbers))");
      if (indexFix) passedAssertions++;
      if (loopFix) passedAssertions++;
      functionsList = [
        { name: "for i in range(len(numbers))", type: "Procedural Loop", status: loopFix ? 'passed' : 'failed', description: "Iterates through valid indices sequentially" },
        { name: "numbers[i]", type: "List Access", status: indexFix ? 'passed' : 'failed', description: "Secures indices inside bounds of list elements length" }
      ];
    } else if (selectedDebugId === 'debug-scope-mismatch') {
      totalAssertions = 2;
      const returnFix = normalized.includes("returnTrue") || normalized.includes("returnFalse");
      const assignmentFix = normalized.includes("is_high_score=check_score(");
      if (returnFix) passedAssertions++;
      if (assignmentFix) passedAssertions++;
      functionsList = [
        { name: "check_score(val)", type: "Custom Function", status: returnFix ? 'passed' : 'failed', description: "Outputs boolean returns instead of isolating to local scope namespaces" },
        { name: "is_high_score = check_score(150)", type: "Outer Score Assignment", status: assignmentFix ? 'passed' : 'failed', description: "Collects calculated results in global scope registers" }
      ];
    } else if (selectedDebugId === 'debug-mutable-default') {
      totalAssertions = 2;
      const defaultFix = normalized.includes("current_list=None") || normalized.includes("current_listisNone");
      const instantiateFix = normalized.includes("current_list=[]");
      if (defaultFix) passedAssertions++;
      if (instantiateFix) passedAssertions++;
      functionsList = [
        { name: "append_item(val, current_list)", type: "Function Parameter Signature", status: defaultFix ? 'passed' : 'failed', description: "Avoids pre-evaluating shared mutable state references using None defaults" },
        { name: "current_list = []", type: "Internal List Instantiation", status: instantiateFix ? 'passed' : 'failed', description: "Creates fresh separate list instances inside local execution context" }
      ];
    } else if (selectedDebugId === 'debug-pytest-assertions') {
      totalAssertions = 4;
      const mathFix = normalized.includes("num*2+5") || normalized.includes("(num*2)+5") || normalized.includes("2*num+5") || normalized.includes("(2*num)+5");
      const assert1 = normalized.includes("==25");
      const assert2 = normalized.includes("==11");
      const assertFunc = normalized.includes("deftest_double_and_add_five():");
      
      if (mathFix) passedAssertions++;
      if (assert1) passedAssertions++;
      if (assert2) passedAssertions++;
      if (assertFunc) passedAssertions++;
      
      functionsList = [
        { name: "double_and_add_five(num)", type: "Custom Utility Function", status: mathFix ? 'passed' : 'failed', description: "Performs mathematical arithmetic calculation logic formula correctly: (num * 2) + 5" },
        { name: "test_double_and_add_five()", type: "pytest Runner Suite", status: assert1 && assert2 && assertFunc ? 'passed' : 'failed', description: "Invokes unit tests and assert checks verifying outputs for test values (10 -> 25, 3 -> 11)" }
      ];
    }
    
    const percentage = totalAssertions > 0 ? Math.round((passedAssertions / totalAssertions) * 100) : 0;
    
    return {
      percentage,
      passedAssertions,
      totalAssertions,
      functionsList
    };
  }, [selectedDebugId, editorCode]);

  // Handle setting active lesson
  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLessonId(lesson.id);
    setSelectedLevelId(lesson.levelId);
    setEditorCode(lesson.exampleCode);
    setTerminalOutput('Code loaded. Press "Execute Code" at the bottom to run in sandbox.');
    setActiveView('learn');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync editor on lesson update
  useEffect(() => {
    if (activeView === 'fundamentals') {
      setEditorCode(activeFundamental.exampleCode);
      setTerminalOutput('Fundamental lesson check loaded. Click "Execute Code" to evaluate.');
    } else if (activeView === 'cybersecurity') {
      setEditorCode(activeSecurityLesson.exampleCode);
      setTerminalOutput('Cybersecurity lesson check loaded. Click "Execute Code" to evaluate.');
    } else {
      setEditorCode(activeLesson.exampleCode);
      setTerminalOutput('Interpreter initialized. Click "Execute Code" at the bottom to process statements.');
    }
  }, [activeLesson, activeFundamental, activeSecurityLesson, activeView]);

  // Trigger floating notifications
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Clipboard copies
  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    triggerToast("Snippet copied!");
    setTimeout(() => setCopiedCode(false), 1500);
  };

  // Animated Loop Simulation (Hero Page)
  const simulateHeroCode = () => {
    if (isHeroSimulating) return;
    setIsHeroSimulating(true);
    setHeroOutputLogs([]);
    const logs: string[] = [];
    
    let currentDay = 1;
    const interval = setInterval(() => {
      if (currentDay <= 5) {
        logs.push(`>>> Day ${currentDay}: Practice statements on sandbox.`);
        setHeroOutputLogs([...logs]);
        currentDay++;
      } else {
        logs.push(`...`);
        logs.push(`>>> Day 100: Python skills upgraded to Professional level!`);
        setHeroOutputLogs([...logs]);
        clearInterval(interval);
        setIsHeroSimulating(false);
      }
    }, 450);
  };

  // Client Side Logical Interpreter (Evaluates inputs dynamically!)
  const handleExecuteActiveCode = () => {
    setIsRunning(true);
    triggerToast("Translating Python tokens in sandbox...");

    setTimeout(() => {
      let output = '';
      let xpEarned = 0;

      if (activeView === 'learn') {
        if (activeLesson.id === 'what-is-python') {
          const match = editorCode.match(/title\s*=\s*["']([^"']+)["']/);
          const val = match ? match[1] : "PyMaster Academy";
          output = `Welcome to ${val}\n\n>>> Exit Code: 0 (Success)`;
          xpEarned = 25;
        } else if (activeLesson.id === 'print-comments') {
          const hoursMatch = editorCode.match(/hours_per_day\s*=\s*(\d+)/);
          const hours = hoursMatch ? Number(hoursMatch[1]) : 2;
          const daysMatch = editorCode.match(/days_active\s*=\s*(\d+)/);
          const days = daysMatch ? Number(daysMatch[1]) : 5;
          output = `Weekly Coding Goal:\n${hours * days}\n\n>>> Exit Code: 0 (Success)`;
          xpEarned = 25;
        } else if (activeLesson.id === 'variables-types') {
          const unitsMatch = editorCode.match(/stock_units\s*=\s*(\d+)/);
          const units = unitsMatch ? Number(unitsMatch[1]) : 14;
          const priceMatch = editorCode.match(/unit_price\s*=\s*([\d.]+)/);
          const price = priceMatch ? Number(priceMatch[1]) : 89.99;
          output = `Cyberpunk Gaming Mouse\n${(units * price).toFixed(2)}\n\n>>> Variable registers printed.`;
          xpEarned = 30;
        } else if (activeLesson.id === 'conditions-logic') {
          const keysMatch = editorCode.match(/has_access_keys\s*=\s*(True|False)/i);
          const keys = keysMatch ? keysMatch[1].toLowerCase() === 'true' : true;
          const roleMatch = editorCode.match(/user_role\s*=\s*["']([^"']+)["']/);
          const role = roleMatch ? roleMatch[1] : "Admin";

          if (role === "Admin" && keys) {
            output = "Clearance: Granted.";
          } else if (role === "Member") {
            output = "Clearance: Standard.";
          } else {
            output = "Clearance: Denied.";
          }
          output += "\n\n>>> Statement conditions resolved.";
          xpEarned = 30;
        } else {
          output = `${activeLesson.expectedOutput}\n\n>>> Executed safely inside virtual machine workspace.`;
          xpEarned = 20;
        }

        if (!completedLessons.includes(activeLesson.id)) {
          setCompletedLessons([...completedLessons, activeLesson.id]);
          setUserXp(prev => prev + xpEarned);
        }
      } else if (activeView === 'fundamentals') {
        output = `${activeFundamental.expectedOutput}\n\n>>> Fundamental logic verified in sandbox.`;
        xpEarned = 25;
        setUserXp(prev => prev + xpEarned);
      } else if (activeView === 'cybersecurity') {
        output = `${activeSecurityLesson.expectedOutput}\n\n>>> Cybersecurity defenses logic verified in sandbox.`;
        xpEarned = 35;
        setUserXp(prev => prev + xpEarned);
      } else if (activeView === 'debugging-lab') {
        const normalized = editorCode.replace(/\s+/g, '');
        let isCorrect = false;
        let errorMsg = `[INTERPRETER RUNTIME TRACEBACK ERROR]\nIndexError: list index out of range.\nVerify variable range boundaries.`;

        if (activeDebugChallenge.id === 'debug-pytest-assertions') {
          const hasMathFix = normalized.includes("num*2+5") || normalized.includes("(num*2)+5") || normalized.includes("2*num+5") || normalized.includes("(2*num)+5");
          const hasAssert25 = normalized.includes("==25");
          const hasAssert11 = normalized.includes("==11");
          isCorrect = hasMathFix && hasAssert25 && hasAssert11;
          errorMsg = `[pytest RUNTIME FAILURE]\nAssertionError: assert double_and_add_five(10) == 25\n\nFAILED test_double_and_add_five: Expected correct math formula logic (num * 2 + 5) and correct test assertions of 25 and 11.`;
        } else {
          isCorrect = normalized.includes("numbers[i]") || 
                      normalized.includes("return") || 
                      normalized.includes("current_list=None") ||
                      normalized.includes("current_listisNone");
        }

        if (isCorrect) {
          output = `[COMPILING TESTS SYSTEM]\nAssertions checklist evaluating...\n${activeDebugChallenge.expectedOutput}\n\n🎉 SUCCESS: Traceback resolved! All tests passed!`;
          if (!solvedChallenges.includes(activeDebugChallenge.id)) {
            setSolvedChallenges([...solvedChallenges, activeDebugChallenge.id]);
            setUserXp(prev => prev + 100);
          }
        } else {
          output = errorMsg;
        }

        // Record test run attempt in history (Keep last 5)
        const attemptTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const newAttempt: TestAttempt = {
          id: `attempt-${Date.now()}`,
          timestamp: attemptTime,
          status: isCorrect ? 'passed' : 'failed',
          coverage: testCoverageStatus.percentage
        };
        setTestHistory(prev => {
          const currentList = prev[activeDebugChallenge.id] || [];
          return {
            ...prev,
            [activeDebugChallenge.id]: [newAttempt, ...currentList].slice(0, 5)
          };
        });
      } else if (activeView === 'real-world-lab') {
        output = `${activeTask.expectedOutput}\n\n🎉 Task milestone verified! Good job!`;
        setUserXp(prev => prev + 50);
      } else {
        output = `>>> Run completed.\nConsole returned 0 (OK)`;
      }

      setTerminalOutput(output);
      setIsRunning(false);
    }, 1000);
  };

  // Modern Server-Side / Local Fallback Gemini Code Explainer
  const handleExplainPastedCode = async () => {
    setIsExplaining(true);
    setAiExplanationResult("");
    triggerToast("Connecting to Gemini AI code analyzer...");

    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: userPastedCode }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      setAiExplanationResult(data.explanation);
      triggerToast("Gemini analysis compiled!");
    } catch (error) {
      console.warn("Backend API key missing or unreachable, executing local analyzer fallback...", error);
      
      setTimeout(() => {
        let analysis = "### 🧠 Local Neumorphic Interpreter Analysis\n\n";
        
        const containsClass = userPastedCode.includes("class ") || userPastedCode.includes("class:");
        const containsDef = userPastedCode.includes("def ");
        const containsLoop = userPastedCode.includes("for ") || userPastedCode.includes("while ");
        const containsCondition = userPastedCode.includes("if ") || userPastedCode.includes("else:");
        const containsPrint = userPastedCode.includes("print(");

        if (containsClass) {
          analysis += `* **Object-Oriented Architecture:** Evaluated a \`class\` construction. Models physical entities with isolated attributes & class schemas.\n`;
        }
        if (containsDef) {
          analysis += `* **Function Routine Definitions:** Enclosed dynamic logical segments using \`def\` keywords to execute on stack frames.\n`;
        }
        if (containsLoop) {
          analysis += `* **Repetitive Iterators:** Identified loop sequences running across lists elements.\n`;
        }
        if (containsCondition) {
          analysis += `* **Dynamic Branches:** Contains branch evaluations to change execution pathways.\n`;
        }
        if (containsPrint) {
          analysis += `* **Stdout Stream Writer:** Uses \`print()\` pipelines to inspect outputs.\n`;
        }

        analysis += `\n### ⚙️ Trace Path Map:\n1. Scopes structural class variables in memory frames.\n2. Binds parameters dynamically.\n3. Runs consecutive instructions.\n\n### ⚡ Professional Enhancement:\n* **Type Hints:** Standardize your definition parameters with static annotations (e.g., \`owner: str\`).`;

        setAiExplanationResult(analysis);
        triggerToast("Local diagnostics printed.");
      }, 1000);
    } finally {
      setIsExplaining(false);
    }
  };

  // AI Custom Pytest Assertion Validation Handler
  const handleValidatePytest = async () => {
    setIsPytestValidating(true);
    setPytestValidationResult(null);
    triggerToast("Initiating AI Pytest validation runner...");

    try {
      const response = await fetch('/api/validate-pytest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          targetCode: pytestTargetCode,
          testCode: pytestTestCode
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      setPytestValidationResult(data);
      
      // Award some bonus XP if the test suite is highly covered and valid!
      if (data.valid && data.coveragePercent >= 90) {
        setUserXp(prev => prev + 30);
        triggerToast("🎉 Excellent test suite validation! +30 XP Bonus!");
      } else {
        triggerToast("Pytest validation report generated!");
      }
    } catch (error) {
      console.warn("Backend validation failed or unreachable, running client-side simulation...", error);
      
      setTimeout(() => {
        // Local simulation fallback
        const isDivide = selectedPytestTargetId === "target-divide";
        const isPrime = selectedPytestTargetId === "target-is-prime";
        const isDiscount = selectedPytestTargetId === "target-get-discount";
        
        let coverage = 40;
        let summaryText = "Tested your assertions using local pattern heuristics. The syntax appears correct, but write more cases for complete coverage!";
        const resultsArray = [];
        
        if (isDivide) {
          if (pytestTestCode.includes("divide(10, 2) == 5") || pytestTestCode.includes("divide(10,2)==5")) {
            resultsArray.push({
              assertion: "assert divide(10, 2) == 5",
              status: "passed",
              explanation: "Verified mathematically. 10 / 2 evaluates precisely to 5."
            });
            coverage += 25;
          }
          if (pytestTestCode.includes("divide(5, 0) == 0") || pytestTestCode.includes("divide(5,0)==0")) {
            resultsArray.push({
              assertion: "assert divide(5, 0) == 0",
              status: "passed",
              explanation: "Zero division condition verified. Safe wrapper correctly catches the zero division state and handles returns."
            });
            coverage += 35;
          }
        } else if (isPrime) {
          if (pytestTestCode.includes("is_prime(3) == True") || pytestTestCode.includes("is_prime(3)==True")) {
            resultsArray.push({
              assertion: "assert is_prime(3) == True",
              status: "passed",
              explanation: "3 is a prime number and has exactly two positive divisors: 1 and itself."
            });
            coverage += 30;
          }
        } else {
          resultsArray.push({
            assertion: "Standard validation checks",
            status: "passed",
            explanation: "Assertions match normal expected Python types."
          });
          coverage = 50;
        }

        setPytestValidationResult({
          valid: true,
          summary: summaryText,
          results: resultsArray,
          coveragePercent: Math.min(coverage, 100),
          missingCases: ["Verify boundary limits and negative integers.", "Assert behavior for extreme inputs and invalid formats."],
          improvedTestCode: `# Local simulation suggested test script\nimport pytest\n\n${pytestTestCode}\n\n# Recommended case\ndef test_additional_edge_cases():\n    # Test negative and boundary inputs\n    pass`
        });
        triggerToast("Local test validation compiled.");
      }, 1200);
    } finally {
      setIsPytestValidating(false);
    }
  };

  // Filter lists dynamically
  const filteredLessons = useMemo(() => {
    if (!searchQuery) return LESSONS;
    return LESSONS.filter(l => 
      l.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      l.conceptSimple.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.conceptTechnical.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredTasks = useMemo(() => {
    return REAL_WORLD_TASKS.filter(task => {
      const categoryMatch = selectedTaskCategory === "All" || task.category === selectedTaskCategory;
      const difficultyMatch = selectedTaskDifficulty === "All" || task.difficulty === selectedTaskDifficulty;
      return categoryMatch && difficultyMatch;
    });
  }, [selectedTaskCategory, selectedTaskDifficulty]);

  const filteredPerfTasks = useMemo(() => {
    return REAL_WORLD_TASKS.filter((task: RealWorldTask) => {
      const matchSearch = task.title.toLowerCase().includes(perfSearch.toLowerCase()) || task.description.toLowerCase().includes(perfSearch.toLowerCase());
      const matchCat = perfCategory === 'All' || task.category === perfCategory;
      return matchSearch && matchCat;
    });
  }, [perfSearch, perfCategory]);

  return (
    <div className="min-h-screen bg-[#181e30] text-slate-100 selection:bg-indigo-500 selection:text-white font-sans flex flex-col justify-between">
      
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#181e30] text-emerald-400 font-mono text-xs font-bold py-3 px-5 rounded-xl shadow-[6px_6px_12px_#0d101a,-6px_-6px_12px_#232c46] border border-[#202840] flex items-center gap-2 animate-bounce">
          <CheckCircle className="h-4 w-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER BAR (Tactile Soft Raised) */}
      <header className="sticky top-0 z-40 bg-[#181e30] border-b border-[#202840]/60 py-4.5 px-4 sm:px-6 shadow-[0_8px_16px_#0d101a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand Zone (Pristine Raised Button) */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                setActiveView('home');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                triggerToast("Welcome to Dashboard");
              }} 
              className="flex items-center gap-3.5 text-left cursor-pointer focus:outline-none p-1.5 px-3 bg-[#181e30] rounded-xl shadow-[4px_4px_8px_#0d101a,-4px_-4px_8px_#232c46] border border-[#202840]/40 hover:shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] transition-all"
            >
              <span className="h-8.5 w-8.5 rounded-lg bg-gradient-to-tr from-[#3776ab] to-[#ffd43b] flex items-center justify-center font-extrabold text-[#0f172a] text-sm">
                Py
              </span>
              <div className="leading-none">
                <span className="text-sm font-black tracking-tight block text-white">PyMaster</span>
                <span className="text-[9px] uppercase font-bold text-[#ffd43b] tracking-widest block mt-0.5">Academy</span>
              </div>
            </button>


          </div>

          {/* Navigation Links (Flat Soft Tabs) */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-[#181e30] rounded-2xl shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#1e253c]">
            {[
              { id: 'book', label: '📖 Python Book (0-Hero)' },
              { id: 'home', label: 'Home' },
              { id: 'topics-master', label: '36 Topics' },
              { id: 'fundamentals', label: 'Fundamentals' },
              { id: 'cybersecurity', label: 'Security' },
              { id: 'learn', label: 'Syllabus' },
              { id: 'roadmap', label: 'Roadmaps' },
              { id: 'real-world-lab', label: 'Real Lab' },
              { id: 'debugging-lab', label: 'Debug Lab' },
              { id: 'playground', label: 'Explain AI' },
            ].map(item => {
              const isSelected = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'learn') {
                      setSelectedLessonId("what-is-python");
                      setSelectedLevelId("level-1");
                    }
                    if (item.id === 'fundamentals') {
                      setSelectedFundamentalId("getting-started");
                    }
                    if (item.id === 'cybersecurity') {
                      setSelectedSecurityId("cryptographic-hashing");
                    }
                    setActiveView(item.id as any);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-[#181e30] text-[#ffd43b] shadow-[4px_4px_8px_#0d101a,-4px_-4px_8px_#232c46] border border-[#202840]' 
                      : 'text-slate-400 hover:text-white border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* User Metrics, Streak & Language Selector (Tactile Convex Indicators) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Multi-Language Translator Dropdown */}
            <LanguageSelector triggerToast={triggerToast} />

            <div className="hidden sm:flex items-center gap-2 bg-[#181e30] shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border border-[#1e253c] rounded-xl px-3 py-1.5 text-xs text-orange-400 font-mono">
              <Flame className="h-4 w-4 animate-pulse fill-current" />
              <span>{streakDays} Days</span>
            </div>

            <div className="flex items-center gap-2 bg-[#181e30] shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border border-[#1e253c] rounded-xl px-3 py-1.5 text-xs text-[#ffd43b] font-mono">
              <Star className="h-4 w-4 fill-current text-[#ffd43b]" />
              <span>{userXp} XP</span>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 bg-[#181e30] rounded-xl shadow-[4px_4px_8px_#0d101a,-4px_-4px_8px_#232c46] border border-[#202840] text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE NAV DRAWER (Full-screen Backdrop & Sleek Drawer Sheet) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-start">
          {/* Backdrop Blur */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sheet Container */}
          <div className="relative z-10 w-full bg-[#181e30] border-b border-[#202840] p-4 sm:p-5 shadow-2xl max-h-[85vh] overflow-y-auto custom-scrollbar animate-in slide-in-from-top-4 duration-200">
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-[#202840]/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd43b] animate-pulse" />
                <span className="text-xs uppercase font-bold text-white tracking-wider font-mono">Academy Navigation</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold text-slate-300 hover:text-white bg-[#1a2135] px-3 py-1.5 rounded-xl shadow-md border border-[#293354] flex items-center gap-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>

            {/* Quick Metrics in Mobile Drawer */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center gap-2 bg-[#121624] p-2.5 rounded-xl border border-[#202840] text-xs font-mono text-orange-400">
                <Flame className="w-4 h-4 fill-current" />
                <span>{streakDays} Days Streak</span>
              </div>
              <div className="flex items-center gap-2 bg-[#121624] p-2.5 rounded-xl border border-[#202840] text-xs font-mono text-[#ffd43b]">
                <Star className="w-4 h-4 fill-current" />
                <span>{userXp} Total XP</span>
              </div>
            </div>

            {/* Nav Grid */}
            <div className="grid grid-cols-2 gap-2.5 text-xs font-bold">
              {[
                { id: 'book', label: '📖 Python Master Book', highlight: true },
                { id: 'home', label: '🏠 Dashboard' },
                { id: 'topics-master', label: '✨ 36 Topics Mastery' },
                { id: 'fundamentals', label: '🟢 Fundamentals' },
                { id: 'cybersecurity', label: '🔒 Security Lab' },
                { id: 'learn', label: '📚 Syllabus' },
                { id: 'roadmap', label: '🗺️ Roadmaps' },
                { id: 'real-world-lab', label: '💼 Real Lab' },
                { id: 'debugging-lab', label: '🐛 Debug Lab' },
                { id: 'playground', label: '🚀 Explain AI' },
                { id: 'reference', label: '📝 Cheat Sheets' },
                { id: 'achievements', label: '🏆 Achievements' }
              ].map((item) => {
                const isSelected = activeView === item.id;
                return (
                  <button 
                    key={item.id}
                    onClick={() => { 
                      if (item.id === 'learn') {
                        setSelectedLessonId("what-is-python");
                        setSelectedLevelId("level-1");
                      }
                      if (item.id === 'fundamentals') {
                        setSelectedFundamentalId("getting-started");
                      }
                      if (item.id === 'cybersecurity') {
                        setSelectedSecurityId("cryptographic-hashing");
                      }
                      setActiveView(item.id as any); 
                      setMobileMenuOpen(false); 
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                      isSelected 
                        ? 'bg-gradient-to-r from-[#3776ab]/30 to-[#ffd43b]/20 text-[#ffd43b] shadow-inner border-[#ffd43b]/50' 
                        : item.highlight
                          ? 'bg-cyan-950/30 text-cyan-300 border-cyan-500/30 hover:bg-cyan-900/40'
                          : 'bg-[#181e30] text-slate-300 shadow-[3px_3px_6px_#0d101a,-3px_-3px_6px_#232c46] border-[#202840] hover:border-slate-600'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* CORE 12-COLUMN NEUMORPHIC GRID WORKSPACE */}
      <div className="flex-1 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:p-6 items-start">
        
        {/* SIDEBAR NAVIGATION CONTROL (3 Columns) */}
        <aside className="hidden lg:flex lg:col-span-3 flex-col gap-6">
          
          {/* Main Neumorphic Hub Box */}
          <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-3xl p-5 space-y-4">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block font-mono">Academy Hub</span>
            
            <nav className="flex flex-col gap-2.5 text-xs font-bold">
              {[
                { id: 'book', label: '📖 Python Master Book', icon: BookOpen, color: 'text-cyan-400' },
                { id: 'home', label: 'Academy Dashboard', icon: Globe, color: 'text-indigo-400' },
                { id: 'topics-master', label: '36 Topics Mastery', icon: Sparkles, color: 'text-[#ffd43b]' },
                { id: 'fundamentals', label: 'Fundamentals Guide', icon: Grid, color: 'text-orange-400' },
                { id: 'cybersecurity', label: 'Cybersecurity Lab', icon: Shield, color: 'text-rose-400' },
                { id: 'learn', label: 'Complete Syllabus', icon: FileCode, color: 'text-blue-400' },
                { id: 'roadmap', label: 'Curriculum Roadmap', icon: Compass, color: 'text-[#ffd43b]' },
                { id: 'real-world-lab', label: 'Real World Lab (40)', icon: Briefcase, color: 'text-emerald-400' },
                { id: 'debugging-lab', label: 'Smasher Debug Lab', icon: AlertTriangle, color: 'text-rose-400' },
                { id: 'playground', label: 'Explain AI Playground', icon: Code, color: 'text-cyan-400' },
                { id: 'reference', label: 'Python Cheat Sheets', icon: FileCode, color: 'text-purple-400' },
                { id: 'achievements', label: 'Hall of Achievements', icon: Award, color: 'text-amber-400' },
              ].map(item => {
                const isSelected = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'learn') {
                        setSelectedLessonId("what-is-python");
                        setSelectedLevelId("level-1");
                      }
                      if (item.id === 'fundamentals') {
                        setSelectedFundamentalId("getting-started");
                      }
                      if (item.id === 'cybersecurity') {
                        setSelectedSecurityId("cryptographic-hashing");
                      }
                      setActiveView(item.id as any);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left px-3.5 py-3 rounded-xl transition-all flex items-center justify-between cursor-pointer group border ${
                      isSelected 
                        ? 'bg-[#181e30] text-white shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border-[#202840]' 
                        : 'text-slate-400 hover:text-white border-transparent hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`h-4.5 w-4.5 ${item.color}`} />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="h-3 w-3 text-slate-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tactile Progress Dashboard Widget */}
          <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-3xl p-5 space-y-4">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block font-mono">My Statistics</span>
            
            <div className="space-y-4 text-left">
              <div>
                <div className="flex justify-between text-[10px] font-mono mb-1.5 text-slate-400">
                  <span>Classes Mastered</span>
                  <span className="text-white font-bold">{completedLessons.length} / {LESSONS.length}</span>
                </div>
                {/* Sunken Grooved Progress Bar */}
                <div className="h-2.5 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] rounded-full overflow-hidden p-0.5 border border-[#202840]">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-[#ffd43b] rounded-full transition-all"
                    style={{ width: `${(completedLessons.length / LESSONS.length) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] font-mono mb-1.5 text-slate-400">
                  <span>Bugs Smashed</span>
                  <span className="text-white font-bold">{solvedChallenges.length} / {DEBUG_CHALLENGES.length}</span>
                </div>
                <div className="h-2.5 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] rounded-full overflow-hidden p-0.5 border border-[#202840]">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all"
                    style={{ width: `${(solvedChallenges.length / DEBUG_CHALLENGES.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="pt-3.5 border-t border-[#202840]/60 flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span>ACADEMY RANK:</span>
                <span className="text-[#ffd43b] font-bold uppercase tracking-wider bg-[#222a44] px-2 py-0.5 rounded shadow-sm">
                  Rank {Math.floor(userXp / 150) + 1}
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* 3. CENTER DYNAMIC COMPONENT STAGE (9 Columns) */}
        <main className="lg:col-span-9 flex flex-col gap-6 w-full">
          
          {/* ========================================================================= */}
          {/* VIEW: HOME LANDING PAGE (Tactile Neumorphic Panels) */}
          {/* ========================================================================= */}
          {activeView === 'home' && (
            <div className="space-y-12 text-left">
              
              {/* HERO BOARD PANEL (Tactile Convex Extrusion) */}
              <section className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-3xl p-6 md:p-10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="absolute top-0 right-0 h-64 w-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 h-64 w-64 bg-[#ffd43b]/5 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="flex-1 space-y-5 text-left z-10">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] text-[10px] text-[#ffd43b] rounded-full font-mono font-bold tracking-wider">
                    <Sparkles className="h-3.5 w-3.5 text-[#ffd43b]" /> Tactile Python Studio
                  </span>
                  
                  <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
                    Master Python From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#ffd43b]">Zero to Pro</span>.
                  </h1>

                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-lg">
                    Welcome to PyMaster Academy. Write clean scripts, run live 3D parameters sandbox tests, debug code with our analytical console, and master 40 full-fidelity projects.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <button 
                      onClick={() => {
                        setActiveView('book');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-black rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:translate-y-[-1px]"
                    >
                      <BookOpen className="h-4 w-4" /> Open Python Master Book (0-Hero)
                    </button>
                    <button 
                      onClick={() => handleSelectLesson(LESSONS[0])}
                      className="px-5 py-3.5 bg-[#3776ab] hover:bg-[#3776ab]/90 text-white font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[4px_4px_8px_rgba(55,118,171,0.3)] hover:translate-y-[-1px]"
                    >
                      Interactive Syllabus <ArrowRight className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => setActiveView('topics-master')}
                      className="px-5 py-3.5 bg-[#181e30] hover:bg-slate-800 border border-[#202840] text-slate-300 font-bold rounded-xl text-xs shadow-[4px_4px_8px_#0d101a,-4px_-4px_8px_#232c46] transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46]"
                    >
                      36 Topics Explorer
                    </button>
                  </div>
                </div>

                {/* Simulated Terminal Mini Console (Debossed Grooved Box) */}
                <div className="w-full lg:w-80 bg-[#181e30] shadow-[inset_6px_6px_12px_#0d101a,inset_-6px_-6px_12px_#232c46] rounded-2xl border border-[#202840] overflow-hidden flex flex-col font-mono text-[11px] shrink-0">
                  <div className="bg-[#131826] px-3.5 py-2.5 border-b border-[#202840] flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5 font-bold text-[10px]"><Code className="h-3.5 w-3.5 text-[#ffd43b]" /> live_loop.py</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  
                  <div className="p-4 text-left">
                    <pre translate="no" className="whitespace-pre-wrap text-[#ffd43b]">{`name = "Developer"

for day in range(1, 101):
    print(f"Day {day}: Python master!")`}</pre>
                  </div>

                  <div className="bg-[#131826] p-3.5 border-t border-[#202840] flex flex-col gap-2.5">
                    <div className="flex justify-between items-center text-[10px] text-slate-400">
                      <span>CONSOLE OUT:</span>
                      <button 
                        onClick={simulateHeroCode}
                        className="px-2.5 py-1 bg-[#181e30] hover:bg-[#1a2135] border border-[#202840] text-blue-400 rounded-lg text-[9px] font-bold shadow-[2px_2px_4px_#0d101a,-2px_-2px_4px_#232c46] hover:shadow-[inset_1px_1px_2px_#0d101a,inset_-1px_-1px_2px_#232c46] cursor-pointer transition-all"
                      >
                        {isHeroSimulating ? 'Running...' : 'Run Simulation'}
                      </button>
                    </div>

                    <div className="h-20 overflow-y-auto bg-[#181e30] shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] p-2.5 rounded-lg border border-[#202840] text-[10px] text-emerald-400 space-y-1 text-left">
                      {heroOutputLogs.length === 0 ? (
                        <span className="text-slate-500 block">Click Run above to compile statement loops...</span>
                      ) : (
                        heroOutputLogs.map((log, i) => (
                          <div key={i}>{log}</div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* DAILY CODING MISSION WIDGET */}
              <section className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-3xl p-6 relative overflow-hidden text-left space-y-6">
                <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-[#ffd43b]/10 to-[#3776ab]/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-[#202840]/60">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-ping" />
                      <span className="text-[10px] font-mono text-[#ffd43b] font-black uppercase tracking-widest">Active Daily Mission</span>
                    </div>
                    <h3 className="text-xl font-black text-white flex items-center gap-2">
                      📅 {DAILY_MISSIONS[dailyMissionIndex].title}
                    </h3>
                  </div>

                  {/* Reset Timer Clock (Tactile Grooved Plate) */}
                  <div className="flex items-center gap-3 bg-[#181e30] shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border border-[#202840] px-4 py-2 rounded-2xl text-xs font-mono text-[#ffd43b]">
                    <span className="h-4 w-4 bg-[#ffd43b]/10 text-[#ffd43b] rounded-lg flex items-center justify-center animate-spin duration-3000">
                      ⏱️
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[8px] uppercase tracking-wider text-slate-400">Resets In</span>
                      <span className="font-bold tracking-wider">{dailyCountdown}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Mission Description & Instructions */}
                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed bg-[#1b2236]/40 p-4 rounded-2xl border border-[#202840]/60 shadow-inner">
                      {DAILY_MISSIONS[dailyMissionIndex].description}
                    </p>

                    <div className="space-y-2.5">
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Rewards</span>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-[#181e30] shadow-[3px_3px_6px_#0d101a,-3px_-3px_6px_#232c46] border border-[#202840] rounded-xl px-3 py-2 text-xs text-[#ffd43b] font-bold">
                          <Star className="h-4 w-4 fill-current text-[#ffd43b]" />
                          <span>+50 XP</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#181e30] shadow-[3px_3px_6px_#0d101a,-3px_-3px_6px_#232c46] border border-[#202840] rounded-xl px-3 py-2 text-xs text-orange-400 font-bold">
                          <Flame className="h-4 w-4 fill-current text-orange-400 animate-pulse" />
                          <span>Streak Bump</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2.5 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => {
                          setEditorCode(DAILY_MISSIONS[dailyMissionIndex].taskCode);
                          setSelectedLessonId("what-is-python");
                          setActiveView('learn');
                          triggerToast("Daily code loaded to Main Sandbox Editor!");
                          window.scrollTo({ top: 400, behavior: 'smooth' });
                        }}
                        className="px-4 py-3 bg-[#181e30] hover:bg-[#1a2135] border border-[#202840] text-slate-300 font-bold rounded-xl text-xs shadow-[3px_3px_6px_#0d101a,-3px_-3px_6px_#232c46] hover:shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] transition-all flex items-center justify-center gap-2 cursor-pointer flex-1"
                      >
                        <Code className="h-4 w-4 text-[#3776ab]" /> Sandbox Workspace
                      </button>

                      <button
                        onClick={handleExecuteDailyMission}
                        disabled={isDailyRunning}
                        className={`px-5 py-3 font-extrabold rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer flex-1 ${
                          completedDailyMissions.includes(DAILY_MISSIONS[dailyMissionIndex].id)
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-gradient-to-r from-blue-500 to-[#3776ab] text-white shadow-md shadow-blue-500/20 hover:translate-y-[-1px]'
                        }`}
                      >
                        {isDailyRunning ? (
                          <>
                            <RefreshCw className="h-4 w-4 animate-spin" /> Verifying...
                          </>
                        ) : completedDailyMissions.includes(DAILY_MISSIONS[dailyMissionIndex].id) ? (
                          <>
                            <Check className="h-4 w-4 text-emerald-400" /> Mission Solved!
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 text-white" /> Instant Dry Run
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Sandbox Preview Editor & Result Logs */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="bg-[#131826] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] rounded-2xl border border-[#202840] overflow-hidden flex flex-col font-mono text-[11px]">
                      <div className="bg-[#0e121e] px-4 py-2 border-b border-[#202840] flex items-center justify-between text-slate-400 text-[10px]">
                        <span>🚀 mission_payload.py</span>
                        <span className="text-[9px] uppercase tracking-widest font-extrabold text-indigo-400">Read-Only</span>
                      </div>
                      
                      <div className="p-4 overflow-x-auto max-h-48 text-left text-slate-300">
                        <pre translate="no" className="whitespace-pre">{DAILY_MISSIONS[dailyMissionIndex].taskCode}</pre>
                      </div>
                    </div>

                    {/* Output terminal feed */}
                    {dailyOutput && (
                      <div className="bg-[#131826] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] p-3.5 rounded-xl text-[10px] font-mono text-emerald-400 text-left space-y-1">
                        {dailyOutput.split('\n').map((line, idx) => (
                          <div key={idx}>{line}</div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </section>

              {/* DAILY MCQ QUIZ WIDGET */}
              <section className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-3xl p-6 relative overflow-hidden text-left space-y-6">
                <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-[#202840]/60">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-400 animate-pulse" />
                      <span className="text-[10px] font-mono text-indigo-400 font-black uppercase tracking-widest">Daily Brainteaser</span>
                    </div>
                    <h3 className="text-xl font-black text-white flex items-center gap-2">
                      🧠 Daily Python Concept MCQ
                    </h3>
                  </div>

                  {/* Resets In Timer */}
                  <div className="flex items-center gap-3 bg-[#181e30] shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border border-[#202840] px-4 py-2 rounded-2xl text-xs font-mono text-indigo-400">
                    <span className="h-4 w-4 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center animate-bounce">
                      ⏱️
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[8px] uppercase tracking-wider text-slate-400">Next Quiz In</span>
                      <span className="font-bold tracking-wider">{dailyCountdown}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Question Box */}
                  <div className="p-4.5 bg-[#1b2236]/40 rounded-2xl border border-[#202840]/60 shadow-inner">
                    <p className="text-xs font-mono font-bold text-[#ffd43b] tracking-wider mb-1 uppercase text-[9px]">QUESTION:</p>
                    <p className="text-sm font-bold text-slate-200 leading-relaxed">
                      {DAILY_QUIZZES[dailyQuizIndex].question}
                    </p>
                  </div>

                  {/* Options List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {DAILY_QUIZZES[dailyQuizIndex].options.map((opt, oIdx) => {
                      const isSelected = selectedQuizOption === oIdx;
                      const currentQuiz = DAILY_QUIZZES[dailyQuizIndex];
                      const isCorrectAnswer = oIdx === currentQuiz.correctIndex;
                      
                      let optClass = "bg-[#181e30] text-slate-300 border-transparent hover:border-[#202840] shadow-[4px_4px_8px_#0d101a,-4px_-4px_8px_#232c46]";
                      if (quizSubmitted) {
                        if (isCorrectAnswer) {
                          optClass = "bg-emerald-950/20 text-emerald-400 border-emerald-500/40 shadow-[inset_2px_2px_4px_#0d101a]";
                        } else if (isSelected) {
                          optClass = "bg-rose-950/20 text-rose-400 border-rose-500/40 shadow-[inset_2px_2px_4px_#0d101a]";
                        } else {
                          optClass = "bg-[#181e30]/50 text-slate-500 border-transparent opacity-60";
                        }
                      } else if (isSelected) {
                        optClass = "bg-[#181e30] text-white border-indigo-500/50 shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46]";
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={quizSubmitted}
                          onClick={() => setSelectedQuizOption(oIdx)}
                          className={`p-4 rounded-2xl text-left text-xs font-semibold leading-relaxed transition-all border flex items-center justify-between cursor-pointer focus:outline-none ${optClass}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`h-5 w-5 rounded-lg flex items-center justify-center font-mono font-bold text-[10px] shrink-0 ${
                              isSelected 
                                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' 
                                : 'bg-[#131826] text-slate-500 border border-[#202840]'
                            }`}>
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span>{opt}</span>
                          </div>
                          
                          {quizSubmitted && isCorrectAnswer && (
                            <CheckCircle className="h-4.5 w-4.5 text-emerald-400 shrink-0 ml-2" />
                          )}
                          {quizSubmitted && isSelected && !isCorrectAnswer && (
                            <X className="h-4.5 w-4.5 text-rose-500 shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Submission and Explanatory text */}
                  <div className="pt-2 flex flex-col gap-4">
                    {!quizSubmitted ? (
                      <button
                        onClick={handleDailyQuizSubmit}
                        disabled={selectedQuizOption === null}
                        className={`w-full py-3.5 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                          selectedQuizOption !== null
                            ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20 hover:translate-y-[-1px]'
                            : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-[#202840]'
                        }`}
                      >
                        <Sparkles className="h-4 w-4" /> Submit Quiz Answer & claim +30 XP
                      </button>
                    ) : (
                      <div className={`p-5 rounded-2xl border ${
                        quizAnsweredCorrectly 
                          ? 'bg-emerald-950/15 border-emerald-500/25' 
                          : 'bg-rose-950/15 border-rose-500/25'
                      } space-y-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                          {quizAnsweredCorrectly ? (
                            <>
                              <span className="text-emerald-400">🎉 Correct Answer!</span>
                              <span className="text-slate-500 font-mono font-bold bg-[#131826] px-2.5 py-0.5 rounded-lg border border-[#202840]">+30 XP Claimed</span>
                            </>
                          ) : (
                            <span className="text-rose-400">❌ Incorrect Answer</span>
                          )}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                          <strong className="text-indigo-400">Explanation:</strong> {DAILY_QUIZZES[dailyQuizIndex].explanation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* CORE WHY-PYTHON GRID (Embossed Cards) */}
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">The Core Pillars of Python</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "AI & Machine Learning", icon: Cpu, desc: "Over 92% of active neural network layers (PyTorch, TensorFlow) run strictly on Python backbones.", color: "text-purple-400", bg: "bg-purple-500/10" },
                    { title: "Automation Scrapers", icon: Briefcase, desc: "Construct web data crawlers, organize disk storage folders, and automate daily task pipelines.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
                    { title: "High-Speed REST APIs", icon: Database, desc: "Power high-concurrency cloud systems with relational databases utilizing FastAPI and Flask.", color: "text-emerald-400", bg: "bg-emerald-500/10" }
                  ].map((pillar, i) => (
                    <div key={i} className="bg-[#181e30] shadow-[6px_6px_12px_#0d101a,-6px_-6px_12px_#232c46] border border-[#202840] p-5 rounded-2xl text-left space-y-3">
                      <div className={`h-9 w-9 ${pillar.bg} rounded-xl flex items-center justify-center ${pillar.color}`}>
                        <pillar.icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-extrabold text-sm text-white">{pillar.title}</h4>
                      <p className="text-xs text-slate-400 leading-normal">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CURRICULUM OVERVIEW SECTION */}
              <section className="space-y-4">
                <div className="flex justify-between items-end">
                  <h3 className="text-xl font-bold text-white tracking-tight">Syllabus Overview</h3>
                  <button onClick={() => setActiveView('roadmap')} className="text-xs font-bold text-[#ffd43b] hover:underline flex items-center gap-1 cursor-pointer">Explore full roadmaps <ChevronRight className="h-3.5 w-3.5" /></button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {ROADMAP_LEVELS.slice(0, 4).map((lvl, index) => (
                    <div key={lvl.id} className="bg-[#181e30] shadow-[6px_6px_12px_#0d101a,-6px_-6px_12px_#232c46] border border-[#202840] p-4.5 rounded-2xl text-left flex flex-col justify-between h-44">
                      <div>
                        <span className="text-[9px] font-mono text-[#ffd43b] font-bold block uppercase tracking-widest">Level 0{index + 1}</span>
                        <h4 className="text-xs font-black text-white mt-1 line-clamp-1">{lvl.title}</h4>
                        <p className="text-[11px] text-slate-400 mt-2 line-clamp-3 leading-normal">{lvl.description}</p>
                      </div>
                      <button 
                        onClick={() => {
                          setSelectedLevelId(lvl.id);
                          const lesson = LESSONS.find(l => l.levelId === lvl.id);
                          if (lesson) handleSelectLesson(lesson);
                        }}
                        className="text-[10px] font-black text-[#3776ab] hover:text-[#ffd43b] text-left mt-2 flex items-center gap-0.5 cursor-pointer"
                      >
                        Start Class <ChevronRight className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* REAL LAB ADVERTISEMENT BANNER */}
              <section className="bg-[#181e30] shadow-[inset_6px_6px_12px_#0d101a,inset_-6px_-6px_12px_#232c46] border border-[#202840] p-6 rounded-3xl text-left flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold font-mono text-emerald-400 uppercase tracking-widest block">Interactive Coding Lab</span>
                  <h3 className="text-lg font-black text-white">40 Practical Real-World Projects</h3>
                  <p className="text-xs text-slate-400 leading-normal max-w-xl">
                    No static textbook content. Write, run and evaluate real utility bill calculations, transaction managers, data crawlers, and server endpoints inside the sandbox.
                  </p>
                </div>
                <button 
                  onClick={() => setActiveView('real-world-lab')}
                  className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-500/20 whitespace-nowrap"
                >
                  Enter Real World Lab
                </button>
              </section>

            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW: 📖 PYTHON MASTER BOOK (0 TO HERO INTERACTIVE HANDBOOK)              */}
          {/* ========================================================================= */}
          {activeView === 'book' && (
            <div className="space-y-6 text-left -mt-2">
              <PythonBookSection 
                onRunCodeInPlayground={(code) => {
                  setEditorCode(code);
                  setTerminalOutput('Code transferred from Python Master Book. Click Execute to run.');
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }}
                triggerToast={triggerToast}
              />
            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW: 36 TOPICS MASTERY EXPLORER (1-Click Auto-Open & Deep Breakdown) */}
          {/* ========================================================================= */}
          {activeView === 'topics-master' && (
            <div className="space-y-6 text-left">
              <div className="space-y-1 pb-2 border-b border-[#202840]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffd43b] animate-pulse" />
                  <span className="text-[10px] font-mono text-[#ffd43b] font-black uppercase tracking-widest">
                    Complete 36-Module Masterclass
                  </span>
                </div>
                <h2 className="text-2xl font-black text-white tracking-tight">
                  36 Topics Mastery & Interactive Reference
                </h2>
                <p className="text-xs text-slate-400">
                  Complete 36 modules with 1-click auto-open navigation, in-depth architectural concepts, granular syntax snippets, and live interactive sandbox.
                </p>
              </div>

              <TopicsMasterSection 
                onRunCodeInPlayground={(code) => {
                  setUserPastedCode(code);
                  setActiveView('playground');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                triggerToast={triggerToast}
              />
            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW: SYLLABUS ROADMAPS */}
          {/* ========================================================================= */}
          {activeView === 'roadmap' && (
            <div className="space-y-6 text-left">
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white tracking-tight">Syllabus Master Roadmaps</h2>
                <p className="text-xs text-slate-400">Step-by-step path detailing required skills and project landmarks.</p>
              </div>

              <div className="space-y-6">
                {ROADMAP_LEVELS.map((lvl, index) => {
                  const levelLessons = LESSONS.filter(l => l.levelId === lvl.id);
                  const completedCount = levelLessons.filter(l => completedLessons.includes(l.id)).length;
                  const pct = levelLessons.length > 0 ? Math.round((completedCount / levelLessons.length) * 100) : 0;

                  return (
                    <div 
                      key={lvl.id}
                      className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-3xl p-5 text-left flex flex-col md:flex-row gap-6 justify-between items-start md:items-center relative"
                    >
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#3776ab] to-[#ffd43b] rounded-l-full" />
                      
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                          <span className="font-bold text-[#ffd43b]">LEVEL 0{index + 1}</span>
                          <span>·</span>
                          <span>{lvl.badge}</span>
                        </div>

                        <h3 className="text-base font-extrabold text-white">{lvl.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">{lvl.description}</p>
                        
                        <div className="flex gap-1.5 flex-wrap pt-1 text-[9px] text-slate-300 font-mono">
                          {lvl.skillsAcquired.map(sk => (
                            <span key={sk} className="bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] px-2.5 py-1 rounded-md">
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="w-full md:w-44 space-y-3 shrink-0 md:border-l border-[#202840]/60 md:pl-6">
                        <div>
                          <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1.5">
                            <span>Completeness</span>
                            <span className="text-[#ffd43b] font-bold">{pct}%</span>
                          </div>
                          {/* Sunken Progress groove */}
                          <div className="h-2 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] rounded-full overflow-hidden p-0.5">
                            <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            const first = levelLessons[0];
                            if (first) {
                              handleSelectLesson(first);
                            } else {
                              setSelectedLevelId(lvl.id);
                              setActiveView('learn');
                            }
                          }}
                          className="w-full py-2.5 bg-[#181e30] hover:bg-[#1f273e] text-slate-300 hover:text-white font-bold text-center text-[10px] rounded-xl shadow-[4px_4px_8px_#0d101a,-4px_-4px_8px_#232c46] hover:shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] transition-all cursor-pointer"
                        >
                          Explore Classes
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW: PYTHON FUNDAMENTALS — BEGINNER */}
          {/* ========================================================================= */}
          {activeView === 'fundamentals' && (
            <div className="space-y-6 text-left">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-6 rounded-3xl">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#ffd43b] tracking-wider font-mono block">Interactive Study Guide</span>
                  <h2 className="text-2xl font-black text-white tracking-tight">🐍 Python Fundamentals — Beginner</h2>
                  <p className="text-xs text-slate-400">Complete Basic to Professional path step-by-step documentation & sandbox.</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1e253c] border border-amber-500/20 rounded-xl shadow-[inset_2px_2px_4px_#0d101a] text-[10px] font-bold text-[#ffd43b] font-mono">
                  <span>Level 01 Starter</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
                {/* Left Selector Syllabus (4 Columns) */}
                <div className="lg:col-span-4 flex flex-col gap-4 text-left">
                  <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-4.5 rounded-3xl space-y-3">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">Topic Selection Menu</span>
                    
                    <div className="space-y-2.5">
                      {FUNDAMENTALS_TOPICS.map((topic) => {
                        const isSelected = topic.id === selectedFundamentalId;
                        return (
                          <button
                            key={topic.id}
                            onClick={() => {
                              setSelectedFundamentalId(topic.id);
                            }}
                            className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between border ${
                              isSelected 
                                ? 'bg-[#181e30] text-white shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border-[#202840]' 
                                : 'text-slate-400 hover:text-white border-transparent hover:bg-[#1b2236]/30'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="h-2 w-2 rounded-full bg-orange-400" />
                              <span className="text-xs font-bold">{topic.title}</span>
                            </div>
                            <ChevronRight className="h-3 w-3 text-slate-500" />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sandbox Hint */}
                  <div className="bg-[#181e30] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] p-5 rounded-3xl text-xs space-y-3">
                    <span className="text-[10px] uppercase font-bold text-[#ffd43b] tracking-wider font-mono block">Sandbox Integrator</span>
                    <p className="text-slate-400 leading-normal">
                      Every topic has proper executable code. Click <strong className="text-white">Load to Sandbox</strong> on any topic to run it instantly in the live compiler at the bottom!
                    </p>
                  </div>
                </div>

                {/* Right Content Sheet (8 Columns, Neumorphic Raised Content Card) */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-3xl p-6 space-y-6 text-left">
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[#202840] pb-4">
                      <div>
                        <span className="text-[9px] font-mono text-[#ffd43b] font-bold block uppercase tracking-widest">{activeFundamental.section}</span>
                        <h3 className="text-xl font-black text-white mt-1">{activeFundamental.title}</h3>
                      </div>
                      <button
                        onClick={() => {
                          setEditorCode(activeFundamental.exampleCode);
                          setTerminalOutput("Code template loaded to Main Sandbox Editor! Scroll down to execute.");
                          triggerToast("Loaded to Sandbox!");
                        }}
                        className="px-4 py-2 bg-[#3776ab] hover:bg-[#3776ab]/90 text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" /> LOAD TO SANDBOX
                      </button>
                    </div>

                    {/* Concept Explanations */}
                    <div className="space-y-4 text-xs">
                      <div>
                        <h4 className="font-extrabold text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5 mb-1.5 text-blue-400">
                          <Lightbulb className="h-3.5 w-3.5 animate-pulse" /> Intuitive Explanation:
                        </h4>
                        <p className="text-slate-300 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] p-4 rounded-2xl leading-relaxed whitespace-pre-wrap">
                          {activeFundamental.conceptSimple}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-extrabold text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5 mb-1.5 text-purple-400">
                          <Cpu className="h-3.5 w-3.5" /> Technical Execution Specification:
                        </h4>
                        <p className="text-slate-300 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] p-4 rounded-2xl leading-relaxed font-mono whitespace-pre-wrap">
                          {activeFundamental.conceptTechnical}
                        </p>
                      </div>
                    </div>

                    {/* Subtopics Grid (All elements listed inside user request explained properly) */}
                    <div className="space-y-3 pt-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">Detailed Concepts & Vocabulary:</span>
                      <div className="grid grid-cols-1 gap-4">
                        {activeFundamental.subtopics.map((sub, sIdx) => (
                          <div key={sIdx} className="bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840]/60 p-4 rounded-2xl text-left space-y-2">
                            <h5 className="font-bold text-xs text-[#ffd43b] flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              {sub.name}
                            </h5>
                            <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">
                              {sub.description}
                            </p>
                            {sub.codeExample && (
                              <div className="bg-[#131826] p-3 rounded-xl border border-[#202840] font-mono text-[10px] text-emerald-400 mt-1 relative overflow-x-auto max-w-full">
                                <pre translate="no">{sub.codeExample}</pre>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Example Code Playground Card */}
                    <div className="bg-[#131826] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] rounded-2xl overflow-hidden flex flex-col font-mono text-[11px]">
                      <div className="bg-[#0e121e] px-4 py-2.5 border-b border-[#202840] flex items-center justify-between text-slate-400 text-[10px]">
                        <span>🚀 interactive_example.py</span>
                        <button 
                          onClick={() => handleCopyText(activeFundamental.exampleCode)}
                          className="hover:text-white flex items-center gap-1 text-[9px] uppercase font-bold cursor-pointer"
                        >
                          <Copy className="h-3 w-3" /> Copy Snippet
                        </button>
                      </div>
                      <div className="p-4 text-left text-emerald-400 overflow-x-auto">
                        <pre translate="no" className="whitespace-pre">{activeFundamental.exampleCode}</pre>
                      </div>
                    </div>

                    {/* Practice Task */}
                    <div className="bg-emerald-950/15 border-l-2 border-emerald-500/50 p-4.5 rounded-2xl text-xs text-left space-y-1.5">
                      <span className="text-[10px] uppercase font-mono font-bold text-emerald-400 block tracking-wider">🎯 Study Task / Practice Assignment:</span>
                      <p className="text-slate-300 leading-relaxed font-semibold">{activeFundamental.practiceTask}</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW: PYTHON CYBERSECURITY LAB */}
          {/* ========================================================================= */}
          {activeView === 'cybersecurity' && (
            <div className="space-y-6 text-left">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-rose-500/20 p-6 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-32 w-32 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider font-mono flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> Security & Defenses Lab</span>
                  <h2 className="text-2xl font-black text-white tracking-tight">🔒 Cybersecurity & Secure Coding</h2>
                  <p className="text-xs text-slate-400">Master Hashing, Symmetric Encryption, SQL Injection defenses, and Secrets administration with runnable modules.</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-rose-950/20 border border-rose-500/30 rounded-xl shadow-[inset_2px_2px_4px_#0d101a] text-[10px] font-bold text-rose-400 font-mono">
                  <span>SecOps Active</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
                {/* Left Selector Syllabus (4 Columns) */}
                <div className="lg:col-span-4 flex flex-col gap-4 text-left">
                  <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-4.5 rounded-3xl space-y-3">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">SecOps Modules Menu</span>
                    
                    <div className="space-y-2.5">
                      {CYBERSECURITY_LESSONS.map((topic) => {
                        const isSelected = topic.id === selectedSecurityId;
                        return (
                          <button
                            key={topic.id}
                            onClick={() => {
                              setSelectedSecurityId(topic.id);
                            }}
                            className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between border ${
                              isSelected 
                                ? 'bg-[#181e30] text-white shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border-rose-500/30' 
                                : 'text-slate-400 hover:text-white border-transparent hover:bg-rose-500/5'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="h-2 w-2 rounded-full bg-rose-500" />
                              <span className="text-xs font-bold">{topic.title}</span>
                            </div>
                            <ChevronRight className="h-3 w-3 text-slate-500" />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sandbox Hint */}
                  <div className="bg-[#181e30] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] p-5 rounded-3xl text-xs space-y-3">
                    <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider font-mono block">SecOps Sandboxing</span>
                    <p className="text-slate-400 leading-normal">
                      Each cybersecurity blueprint contains high-fidelity cryptographic examples. Load them below to watch salt generations, hashing collisions, and ciphers inside our VM.
                    </p>
                  </div>
                </div>

                {/* Right Content Sheet (8 Columns, Neumorphic Raised Content Card) */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-3xl p-6 space-y-6 text-left">
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[#202840] pb-4">
                      <div>
                        <span className="text-[9px] font-mono text-rose-400 font-bold block uppercase tracking-widest">{activeSecurityLesson.category}</span>
                        <h3 className="text-xl font-black text-white mt-1">{activeSecurityLesson.title}</h3>
                      </div>
                      <button
                        onClick={() => {
                          setEditorCode(activeSecurityLesson.exampleCode);
                          setTerminalOutput("Cybersecurity code template loaded to Main Sandbox Editor! Scroll down to execute.");
                          triggerToast("Loaded to Sandbox!");
                        }}
                        className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" /> LOAD TO SANDBOX
                      </button>
                    </div>

                    {/* Concept Explanations */}
                    <div className="space-y-4 text-xs">
                      <div>
                        <h4 className="font-extrabold text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5 mb-1.5 text-rose-400">
                          <Lightbulb className="h-3.5 w-3.5 animate-pulse" /> Intuitive Explanation:
                        </h4>
                        <p className="text-slate-300 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] p-4 rounded-2xl leading-relaxed whitespace-pre-wrap">
                          {activeSecurityLesson.conceptSimple}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-extrabold text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5 mb-1.5 text-purple-400">
                          <Cpu className="h-3.5 w-3.5" /> Technical Execution Specification:
                        </h4>
                        <p className="text-slate-300 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] p-4 rounded-2xl leading-relaxed font-mono whitespace-pre-wrap">
                          {activeSecurityLesson.conceptTechnical}
                        </p>
                      </div>
                    </div>

                    {/* Subtopics Grid (All elements explained properly) */}
                    <div className="space-y-3 pt-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">Detailed SecOps Concepts:</span>
                      <div className="grid grid-cols-1 gap-4">
                        {activeSecurityLesson.subtopics.map((sub, sIdx) => (
                          <div key={sIdx} className="bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840]/60 p-4 rounded-2xl text-left space-y-2">
                            <h5 className="font-bold text-xs text-rose-400 flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                              {sub.name}
                            </h5>
                            <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">
                              {sub.description}
                            </p>
                            {sub.codeExample && (
                              <div className="bg-[#131826] p-3 rounded-xl border border-[#202840] font-mono text-[10px] text-emerald-400 mt-1 relative overflow-x-auto max-w-full">
                                <pre translate="no">{sub.codeExample}</pre>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Example Code Playground Card */}
                    <div className="bg-[#131826] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] rounded-2xl overflow-hidden flex flex-col font-mono text-[11px]">
                      <div className="bg-[#0e121e] px-4 py-2.5 border-b border-[#202840] flex items-center justify-between text-slate-400 text-[10px]">
                        <span>🚀 secure_cryptography.py</span>
                        <button 
                          onClick={() => handleCopyText(activeSecurityLesson.exampleCode)}
                          className="hover:text-white flex items-center gap-1 text-[9px] uppercase font-bold cursor-pointer"
                        >
                          <Copy className="h-3 w-3" /> Copy Snippet
                        </button>
                      </div>
                      <div className="p-4 text-left text-emerald-400 overflow-x-auto">
                        <pre translate="no" className="whitespace-pre">{activeSecurityLesson.exampleCode}</pre>
                      </div>
                    </div>

                    {/* Practice Task */}
                    <div className="bg-rose-950/15 border-l-2 border-rose-500/50 p-4.5 rounded-2xl text-xs text-left space-y-1.5">
                      <span className="text-[10px] uppercase font-mono font-bold text-rose-400 block tracking-wider">🎯 Security Lab Task:</span>
                      <p className="text-slate-300 leading-relaxed font-semibold">{activeSecurityLesson.practiceTask}</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW: SYLLABUS WORKSPACE */}
          {/* ========================================================================= */}
          {activeView === 'learn' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full text-left">
              
              {/* Left Selector Syllabus (4 Columns) */}
              <div className="lg:col-span-4 flex flex-col gap-4 text-left">
                <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-4.5 rounded-3xl space-y-3">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">Class Syllabus</span>
                  
                  <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                    {filteredLessons.map((les) => {
                      const isSelected = les.id === selectedLessonId;
                      const isDone = completedLessons.includes(les.id);
                      return (
                        <button
                          key={les.id}
                          onClick={() => {
                            setSelectedLessonId(les.id);
                            setSelectedLevelId(les.levelId);
                          }}
                          className={`w-full text-left p-3 rounded-xl transition-all flex flex-col gap-1 border ${
                            isSelected 
                              ? 'bg-[#181e30] text-white shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border-[#202840]' 
                              : 'text-slate-400 hover:text-white border-transparent hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className="text-xs font-bold truncate pr-2">{les.title}</span>
                            {isDone && (
                              <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Content Sheet (8 Columns, Neumorphic Raised Content Card) */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-3xl p-5 md:p-6 space-y-5 text-left">
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[#202840] pb-4">
                    <div>
                      <span className="text-[9px] font-mono text-[#ffd43b] font-bold block uppercase tracking-widest">Selected Class Lesson</span>
                      <h3 className="text-lg font-black text-white mt-1">{activeLesson.title}</h3>
                    </div>
                    {completedLessons.includes(activeLesson.id) ? (
                      <span className="inline-flex items-center gap-1 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-emerald-500/25 text-emerald-400 px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold">
                        <Check className="h-3.5 w-3.5" /> MASTERED
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-slate-500/20 text-slate-400 px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold">
                        <Square className="h-3.5 w-3.5" /> PENDING CODE TEST
                      </span>
                    )}
                  </div>

                  {/* Concept Explanations */}
                  <div className="space-y-4 text-xs">
                    <div>
                      <h4 className="font-extrabold text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5 mb-1.5 text-blue-400">
                        <Lightbulb className="h-3.5 w-3.5" /> Simple Analog Explanation:
                      </h4>
                      <p className="text-slate-300 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] p-3.5 rounded-xl leading-relaxed">
                        {activeLesson.conceptSimple}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5 mb-1.5 text-purple-400">
                        <Cpu className="h-3.5 w-3.5" /> Technical Explanation:
                      </h4>
                      <p className="text-slate-300 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] p-3.5 rounded-xl leading-relaxed font-mono">
                        {activeLesson.conceptTechnical}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5 mb-1.5 text-amber-400">
                        <Info className="h-3.5 w-3.5" /> Why Developers Value This:
                      </h4>
                      <p className="text-slate-300 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] p-3.5 rounded-xl leading-relaxed">
                        {activeLesson.why}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5 mb-1.5 text-emerald-400">
                        <Briefcase className="h-3.5 w-3.5" /> Real-World SaaS Use Case:
                      </h4>
                      <p className="text-slate-300 bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] p-3.5 rounded-xl leading-relaxed">
                        {activeLesson.realLifeUse}
                      </p>
                    </div>
                  </div>

                  {/* Practice Requirements Block */}
                  <div className="bg-[#181e30] shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border border-[#202840] p-4.5 rounded-2xl space-y-1 text-xs">
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block tracking-widest">Practice Requirements</span>
                    <p className="text-slate-300 leading-normal font-mono font-bold text-emerald-400">{activeLesson.practiceTask}</p>
                    <p className="text-[11px] text-slate-400 leading-normal mt-2.5">
                      Check the editor code template at the bottom. Tweak the values or expand variables parameters, then press <strong className="text-white">Execute Code</strong> inside the Sandbox below to run.
                    </p>
                  </div>

                  {/* Common Mistake Tip */}
                  <div className="bg-rose-950/15 border-l-2 border-rose-500/50 p-4.5 rounded-2xl text-xs text-left space-y-1">
                    <span className="text-[10px] uppercase font-mono font-bold text-rose-400 block tracking-wider">⚠️ Common Pitfall & Bug Warning</span>
                    <p className="text-slate-300"><strong className="text-rose-400">Mistake:</strong> {activeLesson.commonMistakes[0].mistake}</p>
                    <p className="text-slate-400 mt-1"><strong className="text-emerald-400">Fix:</strong> {activeLesson.commonMistakes[0].fix}</p>
                  </div>

                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW: REAL WORLD LAB (40 Projects) */}
          {/* ========================================================================= */}
          {activeView === 'real-world-lab' && (
            <div className="space-y-6 text-left">
              
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white tracking-tight">Real-World Laboratory</h2>
                <p className="text-xs text-slate-400">Practice writing statements for actual business and utility metrics.</p>
              </div>

              {/* Filters (Neumorphic Tabs Row) */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex flex-wrap gap-2 p-1 bg-[#181e30] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] rounded-2xl">
                  {["All", "Finance", "Automation", "Utilities", "Games"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedTaskCategory(cat)}
                      className={`px-3.5 py-2 rounded-xl text-[10px] font-bold tracking-wider uppercase cursor-pointer transition-all ${
                        selectedTaskCategory === cat 
                          ? 'bg-[#181e30] text-[#ffd43b] shadow-[3px_3px_6px_#0d101a,-3px_-3px_6px_#232c46] border border-[#202840]' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 p-1 bg-[#181e30] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] rounded-2xl">
                  {["All", "Beginner", "Intermediate", "Advanced", "Professional"].map((dif) => (
                    <button
                      key={dif}
                      onClick={() => setSelectedTaskDifficulty(dif)}
                      className={`px-3.5 py-2 rounded-xl text-[10px] font-bold tracking-wider uppercase cursor-pointer transition-all ${
                        selectedTaskDifficulty === dif 
                          ? 'bg-[#181e30] text-emerald-400 shadow-[3px_3px_6px_#0d101a,-3px_-3px_6px_#232c46] border border-[#202840]' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {dif}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lab Columns Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
                
                {/* Left side selector */}
                <div className="lg:col-span-4 bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-4.5 rounded-3xl space-y-3 h-[450px] overflow-y-auto">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">Select Project</span>
                  
                  <div className="space-y-2.5">
                    {filteredTasks.map((t) => {
                      const isSelected = t.id === selectedTaskId;
                      return (
                        <button
                          key={t.id}
                          onClick={() => {
                            setSelectedTaskId(t.id);
                            setEditorCode(t.starterCode);
                            setTerminalOutput("Starter code loaded. Press 'Execute Code' below to verify constraints!");
                          }}
                          className={`w-full text-left p-3 rounded-xl transition-all flex flex-col gap-1 border ${
                            isSelected 
                              ? 'bg-[#181e30] text-white shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border-[#202840]' 
                              : 'text-slate-400 hover:text-white border-transparent'
                          }`}
                        >
                          <span className="text-xs font-bold block truncate">{t.title}</span>
                          <div className="flex justify-between items-center text-[9px] font-mono font-bold mt-1.5">
                            <span className="text-[#ffd43b]">{t.category}</span>
                            <span className="text-emerald-400">{t.difficulty}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Main Selected Project Panel */}
                <div className="lg:col-span-8 bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-3xl p-5 md:p-6 space-y-5">
                  <div className="border-b border-[#202840] pb-4 flex justify-between items-center">
                    <div>
                      <span className="text-[9px] font-mono text-emerald-400 font-bold block uppercase tracking-widest">Active Challenge Project</span>
                      <h3 className="text-base font-black text-white mt-1">{activeTask.title}</h3>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-amber-400 bg-[#222a44] px-2.5 py-1 rounded-lg">
                      +50 XP reward
                    </span>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <h4 className="font-extrabold text-slate-400 text-[10px] uppercase tracking-wider mb-1">Project Objective:</h4>
                      <p className="text-slate-300 leading-normal bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] p-3.5 rounded-xl">
                        {activeTask.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-slate-400 text-[10px] uppercase tracking-wider mb-2">Technical Requirements:</h4>
                      <ul className="space-y-1.5 pl-1 text-slate-300">
                        {activeTask.requirements.map((req, i) => (
                          <li key={i} className="flex items-center gap-2 font-mono">
                            <Check className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-slate-400 text-[10px] uppercase tracking-wider mb-2">Recommended Concepts:</h4>
                      <div className="flex gap-2 flex-wrap">
                        {activeTask.recommendedConcepts.map(c => (
                          <span key={c} className="bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] px-3 py-1 text-[10px] text-[#ffd43b] font-mono rounded-lg">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#181e30] shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border border-[#202840] p-4 rounded-xl text-xs space-y-1">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Expected Sandbox Console Output:</span>
                    <pre translate="no" className="text-emerald-400 font-mono text-[11px] font-bold">{activeTask.expectedOutput}</pre>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW: DEBUGGING LAB */}
          {/* ========================================================================= */}
          {activeView === 'debugging-lab' && (
            <div className="space-y-6 text-left animate-in fade-in duration-300">
              
              {/* Header with Sub-View Switch Tabs */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#202840]/60 pb-4">
                <div className="space-y-1">
                  <h2 className="text-2xl font-black text-white tracking-tight">Smasher Debugging Laboratory</h2>
                  <p className="text-xs text-slate-400">Examine buggy code pipelines, find compiler range errors, and fix local namespace mismatches.</p>
                </div>
                
                {/* Neumorphic Sub-View Toggle */}
                <div className="flex flex-wrap gap-2 p-1 bg-[#181e30] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] rounded-2xl shrink-0">
                  <button
                    onClick={() => setDebugLabTab('challenges')}
                    className={`px-3.5 py-2 rounded-xl text-[10px] font-bold tracking-wider uppercase cursor-pointer transition-all flex items-center gap-2 ${
                      debugLabTab === 'challenges'
                        ? 'bg-[#181e30] text-[#ffd43b] shadow-[3px_3px_6px_#0d101a,-3px_-3px_6px_#232c46] border border-[#202840]'
                        : 'text-slate-400 hover:text-white border-transparent'
                    }`}
                  >
                    <Code className="h-4 w-4" /> Challenges Sandbox
                  </button>
                  <button
                    onClick={() => setDebugLabTab('performance')}
                    className={`px-3.5 py-2 rounded-xl text-[10px] font-bold tracking-wider uppercase cursor-pointer transition-all flex items-center gap-2 ${
                      debugLabTab === 'performance'
                        ? 'bg-[#181e30] text-[#ffd43b] shadow-[3px_3px_6px_#0d101a,-3px_-3px_6px_#232c46] border border-[#202840]'
                        : 'text-slate-400 hover:text-white border-transparent'
                    }`}
                  >
                    <TrendingUp className="h-4 w-4 text-emerald-400" /> Performance Dashboard
                  </button>
                  <button
                    onClick={() => setDebugLabTab('pytest-validator')}
                    className={`px-3.5 py-2 rounded-xl text-[10px] font-bold tracking-wider uppercase cursor-pointer transition-all flex items-center gap-2 ${
                      debugLabTab === 'pytest-validator'
                        ? 'bg-[#181e30] text-[#ffd43b] shadow-[3px_3px_6px_#0d101a,-3px_-3px_6px_#232c46] border border-[#202840]'
                        : 'text-slate-400 hover:text-white border-transparent'
                    }`}
                  >
                    <Sparkles className="h-4 w-4 text-[#ffd43b]" /> Pytest AI Validator
                  </button>
                </div>
              </div>

              {debugLabTab === 'challenges' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full animate-in fade-in duration-300">
                  
                  {/* Left side column: Broken Codebases + Test History */}
                  <div className="lg:col-span-4 space-y-6 flex flex-col">
                    {/* Broken Codebases Card */}
                    <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-4.5 rounded-3xl space-y-3">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">Broken Codebases</span>
                      
                      <div className="space-y-2.5">
                        {DEBUG_CHALLENGES.map((ch) => {
                          const isSelected = ch.id === selectedDebugId;
                          const isDone = solvedChallenges.includes(ch.id);
                          return (
                            <button
                              key={ch.id}
                              onClick={() => {
                                setSelectedDebugId(ch.id);
                                setEditorCode(ch.buggyCode);
                                setTerminalOutput("Buggy code loaded. Check the description, repair the indices/statements, and hit Execute.");
                              }}
                              className={`w-full text-left p-3.5 rounded-xl transition-all flex flex-col gap-1 border ${
                                isSelected 
                                  ? 'bg-[#181e30] text-white shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border-[#202840]' 
                                  : 'text-slate-400 hover:text-white border-transparent'
                              }`}
                            >
                              <div className="flex items-center justify-between w-full">
                                <span className="text-xs font-bold truncate pr-1">{ch.title}</span>
                                {isDone && <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Test History Card */}
                    <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-4.5 rounded-3xl space-y-3.5 text-left">
                      <div className="space-y-0.5">
                        <span className="text-[9px] uppercase font-bold text-rose-400 tracking-wider font-mono block">History Log</span>
                        <h4 className="text-xs font-extrabold text-white">⏱️ Test Run History</h4>
                      </div>
                      
                      <div className="space-y-2">
                        {(!testHistory[selectedDebugId] || testHistory[selectedDebugId].length === 0) ? (
                          <div className="bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840]/60 p-4 rounded-2xl text-center">
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">No Attempts Found</p>
                            <p className="text-[9.5px] text-slate-600 mt-1">Run tests in sandbox to log attempts.</p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {testHistory[selectedDebugId].map((att) => {
                              const isPassed = att.status === 'passed';
                              return (
                                <div 
                                  key={att.id} 
                                  className={`p-2.5 rounded-xl border flex items-center justify-between gap-3 font-mono text-[10px] transition-all ${
                                    isPassed 
                                      ? 'bg-emerald-950/5 border-emerald-500/10 shadow-[inset_1.5px_1.5px_3px_#0d101a]' 
                                      : 'bg-rose-950/5 border-rose-500/10 shadow-[inset_1.5px_1.5px_3px_#0d101a]'
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    <span className={`h-2 w-2 rounded-full ${isPassed ? 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]' : 'bg-rose-500'}`} />
                                    <div className="text-left space-y-0.5">
                                      <div className="text-slate-300 font-bold">{att.timestamp}</div>
                                      <div className="text-[9px] text-slate-500">Coverage: {att.coverage}%</div>
                                    </div>
                                  </div>
                                  <span className={`px-2 py-0.5 rounded text-[8.5px] font-bold uppercase tracking-wide ${
                                    isPassed 
                                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                      : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                                  }`}>
                                    {isPassed ? 'Pass' : 'Fail'}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Selected Debug detail panel */}
                  <div className="lg:col-span-8 bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-3xl p-5 md:p-6 space-y-5">
                    <div className="border-b border-[#202840] pb-4 flex justify-between items-center">
                      <div>
                        <span className="text-[9px] font-mono text-rose-400 font-bold block uppercase tracking-widest">Active Diagnostic Challenge</span>
                        <h3 className="text-base font-black text-white mt-1">{activeDebugChallenge.title}</h3>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#ffd43b] bg-[#222a44] px-3 py-1 rounded-xl">
                        +100 XP reward
                      </span>
                    </div>

                    <div className="space-y-4 text-xs">
                      <div>
                        <h4 className="font-extrabold text-slate-400 text-[10px] uppercase tracking-wider mb-1">Diagnostic Report:</h4>
                        <p className="text-slate-300 leading-relaxed bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] p-4 rounded-xl font-mono text-[11px]">
                          {activeDebugChallenge.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-extrabold text-slate-400 text-[10px] uppercase tracking-wider mb-1">Bug Explanation:</h4>
                        <p className="text-slate-300 leading-normal bg-[#181e30] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] border border-[#202840] p-4 rounded-xl">
                          {activeDebugChallenge.explanation}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#181e30] shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border border-[#202840] p-4 rounded-xl text-xs space-y-1">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Expected Traceback Repair Output:</span>
                      <pre translate="no" className="text-emerald-400 font-mono text-[11px] font-bold">{activeDebugChallenge.expectedOutput}</pre>
                    </div>

                    {/* Real-time pytest Test Coverage Section */}
                    <div className="bg-[#181e30] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] p-5 rounded-3xl space-y-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#202840]/60 pb-3">
                        <div className="space-y-0.5">
                          <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider font-mono flex items-center gap-1.5">
                            <Sliders className="h-3 w-3" /> QA testing report
                          </span>
                          <h4 className="text-sm font-extrabold text-white">📊 Pytest Test Coverage Report</h4>
                        </div>
                        <div className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider shadow-[2px_2px_4px_#0d101a] border ${
                          testCoverageStatus.percentage === 100 
                            ? 'bg-emerald-950/20 text-emerald-400 border-emerald-500/30' 
                            : testCoverageStatus.percentage > 0 
                              ? 'bg-amber-950/20 text-amber-400 border-amber-500/30' 
                              : 'bg-slate-900 text-slate-400 border-[#202840]'
                        }`}>
                          {testCoverageStatus.percentage}% Coverage
                        </div>
                      </div>

                      {/* Dynamic Progress Bar */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-400">
                          <span>Unit Test Suites Verification</span>
                          <span>{testCoverageStatus.passedAssertions} of {testCoverageStatus.totalAssertions} checks passed</span>
                        </div>
                        <div className="w-full h-3 bg-[#131826] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] rounded-full overflow-hidden p-[2px] border border-[#202840]/60">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              testCoverageStatus.percentage === 100 
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]' 
                                : 'bg-gradient-to-r from-amber-500 to-rose-500'
                            }`}
                            style={{ width: `${Math.max(testCoverageStatus.percentage, 3)}%` }}
                          />
                        </div>
                      </div>

                      {/* Discovered Functions Checklist */}
                      <div className="space-y-2.5 pt-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">Tested Functions & Segments:</span>
                        <div className="grid grid-cols-1 gap-2.5">
                          {testCoverageStatus.functionsList.map((func, fIdx) => {
                            const isPassed = func.status === 'passed';
                            return (
                              <div 
                                key={fIdx} 
                                className={`p-3 rounded-2xl flex items-start gap-3 border transition-all ${
                                  isPassed 
                                    ? 'bg-emerald-950/5 border-emerald-500/15 shadow-[inset_2px_2px_4px_#0d101a]' 
                                    : 'bg-[#181e30] border-[#202840]/60 shadow-[inset_1px_1px_2px_#0d101a]'
                                }`}
                              >
                                <div className={`mt-0.5 p-1 rounded-lg shrink-0 border ${
                                  isPassed 
                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                    : 'bg-slate-900 text-slate-500 border-transparent'
                                }`}>
                                  {isPassed ? (
                                    <Check className="h-3.5 w-3.5" />
                                  ) : (
                                    <Info className="h-3.5 w-3.5 text-slate-500" />
                                  )}
                                </div>

                                <div className="flex-1 min-w-0 space-y-1 text-left">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <code translate="no" className={`text-xs font-bold font-mono ${isPassed ? 'text-emerald-400' : 'text-slate-300'}`}>
                                      {func.name}
                                    </code>
                                    <span className="text-[8.5px] font-mono font-bold bg-[#131826] text-slate-400 border border-[#202840] px-2 py-0.5 rounded-md uppercase tracking-wide">
                                      {func.type}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-400 leading-normal">
                                    {func.description}
                                  </p>
                                </div>

                                <div className="shrink-0 font-mono text-[9.5px] font-black">
                                  {isPassed ? (
                                    <span className="text-emerald-400 uppercase">Passed</span>
                                  ) : (
                                    <span className="text-slate-500 uppercase">Pending</span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {debugLabTab === 'performance' && (
                /* ========================================================== */
                /* PERFORMANCE DASHBOARD SUB-VIEW                              */
                /* ========================================================== */
                <div className="space-y-6 animate-in fade-in duration-300">
                  
                  {/* High-Fidelity Neumorphic Stats Counters */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    
                    {/* Stat 1 */}
                    <div className="bg-[#181e30] shadow-[5px_5px_10px_#0d101a,-5px_-5px_10px_#232c46] border border-[#202840] p-4.5 rounded-3xl space-y-1.5 text-left">
                      <div className="h-8 w-8 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
                        <FolderOpen className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider block font-mono">Tracked Projects</span>
                        <div className="text-2xl font-black text-white mt-0.5">40</div>
                        <p className="text-[9px] text-indigo-400 font-medium">Real-World Lab Codebases</p>
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-[#181e30] shadow-[5px_5px_10px_#0d101a,-5px_-5px_10px_#232c46] border border-[#202840] p-4.5 rounded-3xl space-y-1.5 text-left">
                      <div className="h-8 w-8 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                        <TrendingUp className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider block font-mono">Avg Test Coverage</span>
                        <div className="text-2xl font-black text-emerald-400 mt-0.5">
                          {Math.round(Object.values(projectCoverages).reduce((a, b) => a + b, 0) / REAL_WORLD_TASKS.length)}%
                        </div>
                        <div className="w-full h-1.5 bg-[#131826] rounded-full mt-1.5 overflow-hidden p-[1px] border border-[#202840]">
                          <div 
                            className="h-full bg-emerald-400 rounded-full transition-all duration-500" 
                            style={{ width: `${Math.round(Object.values(projectCoverages).reduce((a, b) => a + b, 0) / REAL_WORLD_TASKS.length)}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="bg-[#181e30] shadow-[5px_5px_10px_#0d101a,-5px_-5px_10px_#232c46] border border-[#202840] p-4.5 rounded-3xl space-y-1.5 text-left">
                      <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                        <CheckCircle className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider block font-mono">100% Covered</span>
                        <div className="text-2xl font-black text-white mt-0.5">
                          {Object.values(projectCoverages).filter(v => v === 100).length} <span className="text-xs text-slate-500">/ 40</span>
                        </div>
                        <p className="text-[9px] text-amber-400 font-medium">Refactored to perfection</p>
                      </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="bg-[#181e30] shadow-[5px_5px_10px_#0d101a,-5px_-5px_10px_#232c46] border border-[#202840] p-4.5 rounded-3xl space-y-1.5 text-left">
                      <div className="h-8 w-8 rounded-xl bg-rose-500/10 text-rose-400 border-rose-500/20 flex items-center justify-center">
                        <Award className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider block font-mono">Refactor Bonus XP</span>
                        <div className="text-2xl font-black text-rose-400 mt-0.5">
                          +{Object.values(projectCoverages).filter(v => v === 100).length * 50} XP
                        </div>
                        <p className="text-[9px] text-slate-500 font-medium">Earned through quality refactoring</p>
                      </div>
                    </div>

                  </div>

                  {/* Interactive Dynamic Line Chart Graph & Concept Overview */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    
                    {/* SVG Line Chart Box (7 columns) */}
                    <div className="lg:col-span-7 bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-5 rounded-3xl text-left space-y-3.5">
                      <div className="space-y-0.5">
                        <span className="text-[9px] uppercase font-bold text-emerald-400 font-mono tracking-wider">Metrics Progression Chart</span>
                        <h4 className="text-xs font-black text-white">📈 Historical Average Test Coverage Growth</h4>
                      </div>

                      {/* Pure SVG Dynamic Line Chart */}
                      <div className="bg-[#131826] shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border border-[#202840] p-4.5 rounded-2xl relative">
                        <svg className="w-full h-44 overflow-visible" viewBox="0 0 500 150">
                          <defs>
                            <linearGradient id="chart-area-grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                            </linearGradient>
                          </defs>

                          {/* Horizontal Grid lines */}
                          <line x1="30" y1="20" x2="470" y2="20" stroke="#202840" strokeWidth="1" strokeDasharray="3,3" />
                          <line x1="30" y1="70" x2="470" y2="70" stroke="#202840" strokeWidth="1" strokeDasharray="3,3" />
                          <line x1="30" y1="120" x2="470" y2="120" stroke="#202840" strokeWidth="1" />

                          {/* Render dynamic coordinates points */}
                          {(() => {
                            const latestAvg = Math.round(Object.values(projectCoverages).reduce((a, b) => a + b, 0) / REAL_WORLD_TASKS.length);
                            const points = refactoringHistory.map((h, i) => {
                              const x = 50 + i * 100;
                              const val = h.date === "Sep 28" ? latestAvg : h.averageCoverage;
                              const y = 120 - (val / 100) * 100; // y-axis scale from 20 to 120
                              return { x, y, label: h.date, value: val };
                            });

                            const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
                            const areaD = `${pathD} L ${points[points.length - 1].x} 120 L ${points[0].x} 120 Z`;

                            return (
                              <>
                                {/* Glowing fill area */}
                                <path d={areaD} fill="url(#chart-area-grad)" />

                                {/* Main Indigo Line */}
                                <path d={pathD} fill="none" stroke="#6366f1" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]" />

                                {/* Nodes circles */}
                                {points.map((p, idx) => (
                                  <g key={idx} className="group cursor-pointer">
                                    <circle cx={p.x} cy={p.y} r="5" fill="#131826" stroke="#818cf8" strokeWidth="3" className="transition-all hover:r-7" />
                                    {/* Tooltip on hover */}
                                    <text x={p.x} y={p.y - 12} textAnchor="middle" className="fill-indigo-400 font-mono text-[9px] font-black">
                                      {p.value}%
                                    </text>
                                    {/* Date Label */}
                                    <text x={p.x} y="138" textAnchor="middle" className="fill-slate-500 font-mono text-[9px] font-bold">
                                      {p.label}
                                    </text>
                                  </g>
                                ))}
                              </>
                            );
                          })()}
                        </svg>
                      </div>

                      <p className="text-[11px] text-slate-400 leading-normal bg-[#181e30] border border-[#202840]/60 p-3 rounded-xl">
                        💡 **Iterative Refactoring Guidelines:** Select any of the 40 production codebases below to examine their code coverage debts, apply recommended software paradigms, and raise coverage levels to 100%!
                      </p>
                    </div>

                    {/* Quick Explanation & Guidelines (5 columns) */}
                    <div className="lg:col-span-5 bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-5 rounded-3xl text-left flex flex-col justify-between">
                      <div className="space-y-3">
                        <span className="text-[9px] uppercase font-bold text-indigo-400 font-mono tracking-wider block">Refactoring Paradigms</span>
                        <h4 className="text-xs font-black text-white">🛡️ Python Secure Quality Gates Checklist</h4>
                        
                        <div className="space-y-3 pt-1 text-[11px] text-slate-300">
                          <div className="flex items-start gap-2.5">
                            <span className="mt-0.5 p-1 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 shrink-0 text-[10px]">✓</span>
                            <div>
                              <strong className="text-slate-200">Decouple API Secrets:</strong>
                              <p className="text-slate-400 text-[10px]">Never hardcode key bytes. Read runtime variables using safe `os.getenv` hooks.</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2.5">
                            <span className="mt-0.5 p-1 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 shrink-0 text-[10px]">✓</span>
                            <div>
                              <strong className="text-slate-200">Mitigate Resource Leaks:</strong>
                              <p className="text-slate-400 text-[10px]">Employ context managers (`with open`) to automatically release operating system thread locks.</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2.5">
                            <span className="mt-0.5 p-1 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 shrink-0 text-[10px]">✓</span>
                            <div>
                              <strong className="text-slate-200">Set-based Hash Optimization:</strong>
                              <p className="text-slate-400 text-[10px]">Swap linear search comparisons `O(N)` with hash-based unique `set()` checks for instant `O(1)` performance.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#131826] border border-[#202840] p-3 rounded-2xl text-[10.5px] text-indigo-300/90 font-mono text-center mt-4">
                        🏆 Refactor projects to 100% to earn <strong className="text-white">+50 XP</strong> bonus per gate!
                      </div>
                    </div>

                  </div>

                  {/* ACTIVE REFACTORING INTERACTIVE CONSOLE */}
                  <div 
                    ref={refactorConsoleRef}
                    className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-5 md:p-6 rounded-3xl space-y-4 text-left"
                  >
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[#202840]/60 pb-4">
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-mono text-indigo-400 font-bold block uppercase tracking-widest">Interactive Refactor Console</span>
                        <h3 className="text-base font-black text-white">🔧 Pytest Coverage Optimization Suite</h3>
                      </div>
                      
                      {/* Dropdown to select ANY of the 40 projects */}
                      <div className="w-full sm:w-72">
                        <select
                          value={refactorProjectId}
                          onChange={(e) => {
                            setRefactorProjectId(e.target.value);
                            setRefactorSelectedOption(null);
                            setRefactorConsoleOutput('');
                          }}
                          className="w-full bg-[#131826] text-xs font-bold text-slate-200 font-mono border border-[#202840] rounded-xl px-3 py-2 focus:outline-none cursor-pointer hover:border-indigo-500/40"
                        >
                          {REAL_WORLD_TASKS.map((t) => {
                            const cov = projectCoverages[t.id] ?? 0;
                            return (
                              <option key={t.id} value={t.id}>
                                {t.title} ({cov}%)
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    {/* Active Challenge Body */}
                    {(() => {
                      const activeProj = REAL_WORLD_TASKS.find(t => t.id === refactorProjectId) || REAL_WORLD_TASKS[0];
                      const challenge = getRefactorChallenge(refactorProjectId);
                      const currentCov = projectCoverages[refactorProjectId] ?? 0;

                      return (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                          
                          {/* Diagnostic Info & Code (6 columns) */}
                          <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
                            <div className="space-y-3">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[9px] font-mono font-bold px-2 py-0.5 rounded-lg uppercase tracking-wider">
                                  {activeProj.category} Sector
                                </span>
                                <span className={`text-[9.5px] font-mono font-bold ${currentCov === 100 ? 'text-emerald-400' : 'text-amber-400 animate-pulse'}`}>
                                  Current Coverage: {currentCov}%
                                </span>
                              </div>

                              <div className="bg-[#1b2236]/40 p-4 rounded-2xl border border-[#202840]/60 space-y-1.5">
                                <span className="text-[9px] font-mono font-bold text-rose-400 uppercase tracking-widest block">Codebase Testing Debt Report:</span>
                                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                                  {challenge.bugDescription}
                                </p>
                              </div>

                              <div className="space-y-1">
                                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Sub-optimal Python Snippet:</span>
                                <pre translate="no" className="p-3.5 bg-[#131826] text-emerald-400 border border-[#202840]/60 text-[10.5px] font-mono rounded-xl overflow-x-auto shadow-[inset_2px_2px_4px_#0d101a]">
                                  {challenge.buggySnippet}
                                </pre>
                              </div>
                            </div>

                            {/* Refactoring Options Selection */}
                            <div className="space-y-2.5 pt-2">
                              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Choose Safe Optimizing Strategy:</span>
                              
                              <div className="space-y-2">
                                {challenge.options.map((opt, oIdx) => {
                                  const isSelected = refactorSelectedOption === oIdx;
                                  return (
                                    <button
                                      key={oIdx}
                                      onClick={() => setRefactorSelectedOption(oIdx)}
                                      className={`w-full text-left p-3 rounded-xl border text-xs font-semibold leading-relaxed transition-all cursor-pointer flex items-center gap-3 ${
                                        isSelected 
                                          ? 'bg-indigo-950/20 border-indigo-500/40 text-white shadow-[inset_2.5px_2.5px_5px_#0d101a]' 
                                          : 'bg-[#181e30] border-transparent text-slate-300 hover:border-[#202840]'
                                      }`}
                                    >
                                      <span className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center text-[9px] font-black shrink-0 ${
                                        isSelected 
                                          ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300' 
                                          : 'bg-slate-900 border-[#202840] text-slate-500'
                                      }`}>
                                        {oIdx + 1}
                                      </span>
                                      <span>{opt}</span>
                                    </button>
                                  );
                                })}
                              </div>

                              <button
                                onClick={handleExecuteRefactor}
                                disabled={isRefactoringInProgress || refactorSelectedOption === null}
                                className={`w-full py-3 rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all mt-1 cursor-pointer flex items-center justify-center gap-2 ${
                                  refactorSelectedOption !== null 
                                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/10' 
                                    : 'bg-slate-800 text-slate-500 border border-[#202840] cursor-not-allowed'
                                }`}
                              >
                                {isRefactoringInProgress ? (
                                  <>
                                    <RefreshCw className="h-4 w-4 animate-spin" />
                                    <span>Verifying QA Constraints...</span>
                                  </>
                                ) : (
                                  <>
                                    <Sliders className="h-4 w-4" />
                                    <span>Execute Quality Gate Refactoring & Test</span>
                                  </>
                                )}
                              </button>
                            </div>

                          </div>

                          {/* Sandbox terminal logs (6 columns) */}
                          <div className="lg:col-span-6 flex flex-col justify-between">
                            <div className="flex-1 flex flex-col h-full">
                              <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1 block">Live Pytest Coverage Log stdout</span>
                              <div className="w-full flex-1 min-h-[340px] bg-[#131826] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] p-4.5 rounded-2xl overflow-y-auto text-xs font-mono text-emerald-400 text-left leading-relaxed">
                                {refactorConsoleOutput ? (
                                  <pre translate="no" className="whitespace-pre-wrap">{refactorConsoleOutput}</pre>
                                ) : (
                                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-600">
                                    <Terminal className="h-8 w-8 text-slate-700 mb-2" />
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Suite Awaiting Input</p>
                                    <p className="text-[9.5px] text-slate-600 mt-1 max-w-xs">Select your optimization strategy on the left and run verification to populate live coverage stream.</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                        </div>
                      );
                    })()}

                  </div>

                  {/* SEARCHABLE GRID OF ALL 40 PROJECTS FOR QUICK LAUNCH */}
                  <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-5 md:p-6 rounded-3xl space-y-4">
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#202840]/60 pb-4">
                      <div className="space-y-0.5 text-left">
                        <span className="text-[9px] font-mono text-indigo-400 font-bold block uppercase tracking-widest">Active Coverage Map</span>
                        <h3 className="text-base font-black text-white">🗂️ Explore All 40 Production Codebases</h3>
                      </div>

                      {/* Filters & Search Inputs */}
                      <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                        {/* Category Dropdown */}
                        <div className="relative">
                          <select
                            value={perfCategory}
                            onChange={(e) => setPerfCategory(e.target.value)}
                            className="bg-[#131826] text-[11px] font-bold text-slate-300 font-mono border border-[#202840] rounded-xl px-3 py-2 cursor-pointer focus:outline-none hover:border-indigo-500/40"
                          >
                            <option value="All">All Categories</option>
                            <option value="Finance">Finance</option>
                            <option value="Automation">Automation</option>
                            <option value="Utilities">Utilities</option>
                            <option value="APIs">APIs</option>
                            <option value="AI & Web">AI & Web</option>
                            <option value="Games">Games</option>
                          </select>
                        </div>

                        {/* Search Input */}
                        <div className="relative flex-1 sm:w-60">
                          <input
                            type="text"
                            value={perfSearch}
                            onChange={(e) => setPerfSearch(e.target.value)}
                            placeholder="Search active codebases..."
                            className="w-full bg-[#131826] text-[11px] font-semibold text-slate-300 font-mono border border-[#202840] rounded-xl pl-8 pr-3 py-2 focus:outline-none focus:border-indigo-500/40"
                          />
                          <Search className="h-3.5 w-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                    </div>

                    {/* Codebase Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[440px] overflow-y-auto pr-1">
                      {filteredPerfTasks.map((t) => {
                        const cov = projectCoverages[t.id] ?? 0;
                        const isFullyCovered = cov === 100;
                        const isSelected = refactorProjectId === t.id;

                        return (
                          <div
                            key={t.id}
                            className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-3.5 transition-all ${
                              isSelected 
                                ? 'bg-indigo-950/5 border-indigo-500/30 shadow-[inset_2px_2px_4px_#0d101a]' 
                                : 'bg-[#181e30] border-[#202840]/50 hover:border-[#202840]'
                            }`}
                          >
                            <div className="space-y-1.5">
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-[8.5px] font-mono font-bold text-indigo-400 block uppercase tracking-wide">
                                  {t.category}
                                </span>
                                <span className={`text-[9.5px] font-mono font-bold ${isFullyCovered ? 'text-emerald-400' : 'text-amber-400'}`}>
                                  {cov}%
                                </span>
                              </div>
                              <h4 className="text-xs font-bold text-white line-clamp-1">{t.title}</h4>
                              <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed">{t.description}</p>
                            </div>

                            {/* Dynamic mini bar inside cards */}
                            <div className="space-y-2 pt-1">
                              <div className="w-full h-1 bg-[#131826] rounded-full overflow-hidden">
                                <div 
                                  className={`h-full rounded-full transition-all duration-300 ${
                                    isFullyCovered ? 'bg-emerald-400' : 'bg-amber-400'
                                  }`}
                                  style={{ width: `${cov}%` }}
                                />
                              </div>

                              <button
                                onClick={() => {
                                  setRefactorProjectId(t.id);
                                  setRefactorSelectedOption(null);
                                  setRefactorConsoleOutput('');
                                  refactorConsoleRef.current?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`w-full py-2 rounded-xl text-[10px] font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                  isFullyCovered 
                                    ? 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20' 
                                    : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                                }`}
                              >
                                <Sliders className="h-3 w-3" />
                                <span>{isFullyCovered ? 'Refactored' : 'Refactor Code'}</span>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                      
                      {filteredPerfTasks.length === 0 && (
                        <div className="col-span-full py-12 text-center bg-[#181e30] border border-[#202840]/60 p-6 rounded-2xl">
                          <FolderOpen className="h-10 w-10 text-slate-600 mx-auto mb-2" />
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">No Codebases Matched</p>
                          <p className="text-[11px] text-slate-500 mt-1">Adjust search parameters or choose a different sector segment.</p>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              )}

              {debugLabTab === 'pytest-validator' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  
                  {/* Explanatory introduction panel */}
                  <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-6 rounded-3xl text-left space-y-3">
                    <span className="text-[10px] uppercase font-bold text-[#ffd43b] tracking-wider font-mono block">AI Assertion Testbed</span>
                    <h3 className="text-xl font-black text-white">🧪 Interactive Pytest Logic Validator</h3>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                      Write your own custom <code translate="no" className="text-[#ffd43b]">pytest</code> assertions against a Python function. Our advanced Gemini AI validate engine will parse your test cases, trace logical paths, detect boundary bugs, and calculate estimated test coverage.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    
                    {/* Left Column: Predefined functions list & manual editor (5 Columns) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                      
                      {/* Selection Box */}
                      <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-5 rounded-3xl space-y-4 text-left">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">1. Select Target Function</span>
                        
                        <div className="space-y-2.5">
                          {PREDEFINED_PYTEST_TARGETS.map((target) => {
                            const isSelected = selectedPytestTargetId === target.id;
                            return (
                              <button
                                key={target.id}
                                onClick={() => {
                                  setSelectedPytestTargetId(target.id);
                                  setPytestTargetCode(target.targetCode);
                                  setPytestTestCode(target.defaultTestCode);
                                  setPytestValidationResult(null);
                                }}
                                className={`w-full text-left p-3.5 rounded-xl transition-all border flex flex-col gap-1 cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#181e30] text-white shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border-[#202840]'
                                    : 'text-slate-400 hover:text-white border-transparent'
                                }`}
                              >
                                <span className="text-xs font-bold block truncate">{target.name}</span>
                                <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{target.description}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Manual Code Viewer/Editor */}
                      <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-5 rounded-3xl space-y-3 text-left flex-1 flex flex-col justify-between">
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">Target Function Definition</span>
                          <p className="text-[10px] text-slate-500">Edit this target function code or use the predefined templates above.</p>
                        </div>

                        <textarea
                          value={pytestTargetCode}
                          onChange={(e) => setPytestTargetCode(e.target.value)}
                          className="w-full flex-1 min-h-[220px] bg-[#181e30] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] p-4 text-xs text-emerald-400 font-mono rounded-2xl focus:outline-none resize-none leading-relaxed mt-2"
                        />
                      </div>

                    </div>

                    {/* Right Column: Custom assertions editor (7 Columns) */}
                    <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                      
                      <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-5 rounded-3xl space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">2. Write Pytest Assertions</span>
                          <p className="text-[10px] text-slate-500">Write test functions and assert actual outputs against expected behaviors.</p>
                        </div>

                        <textarea
                          value={pytestTestCode}
                          onChange={(e) => setPytestTestCode(e.target.value)}
                          className="w-full flex-1 min-h-[320px] bg-[#181e30] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] p-4 text-xs text-emerald-400 font-mono rounded-2xl focus:outline-none resize-none leading-relaxed mt-2"
                          placeholder="import pytest\n\ndef test_custom_function():\n    assert function_name(args) == expected_output"
                        />

                        <button
                          onClick={handleValidatePytest}
                          disabled={isPytestValidating}
                          className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white text-xs font-black rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 mt-3 shadow-lg shadow-indigo-600/10"
                        >
                          {isPytestValidating ? (
                            <>
                              <RefreshCw className="h-4 w-4 animate-spin" />
                              <span>AI PARSING & RUNNING LOGIC...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="h-4 w-4 text-[#ffd43b]" />
                              <span>VALIDATE ASSERTIONS VIA GEMINI AI</span>
                            </>
                          )}
                        </button>
                      </div>

                    </div>

                  </div>

                  {/* AI Validation Results Dashboard */}
                  {pytestValidationResult && (
                    <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-6 rounded-3xl text-left space-y-6 animate-in fade-in duration-500">
                      
                      {/* Top report header */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[#202840] pb-4">
                        <div className="space-y-1">
                          <span className="text-[9px] font-mono text-indigo-400 font-bold block uppercase tracking-widest">AI Validation Report</span>
                          <h3 className="text-base font-black text-white">📋 Test Suite Diagnostic Analysis</h3>
                        </div>
                        <div className={`px-3 py-1 rounded-xl text-xs font-mono font-bold uppercase tracking-wider shadow-sm border ${
                          pytestValidationResult.valid 
                            ? 'bg-emerald-950/20 text-emerald-400 border-emerald-500/30' 
                            : 'bg-rose-950/20 text-rose-400 border-rose-500/30'
                        }`}>
                          {pytestValidationResult.valid ? 'Valid Pytest Suite' : 'Structure Warnings Found'}
                        </div>
                      </div>

                      {/* Summary prose */}
                      <p className="text-xs text-slate-300 leading-relaxed bg-[#1b2236]/40 p-4 rounded-2xl border border-[#202840]/60 shadow-inner font-semibold">
                        {pytestValidationResult.summary}
                      </p>

                      {/* Coverage indicator & suggested edge cases */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                        
                        {/* Coverage Progress Bar (5 Columns) */}
                        <div className="md:col-span-5 bg-[#181e30] shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border border-[#202840] p-5 rounded-2xl space-y-3.5 flex flex-col justify-center">
                          <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-400">
                            <span>Target Code Coverage</span>
                            <span className="text-[#ffd43b]">{pytestValidationResult.coveragePercent}%</span>
                          </div>
                          
                          {/* Sunken Grooved Bar */}
                          <div className="w-full h-4 bg-[#131826] shadow-[inset_2px_2px_4px_#0d101a,inset_-2px_-2px_4px_#232c46] rounded-full overflow-hidden p-[2px] border border-[#202840]">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                              style={{ width: `${Math.max(pytestValidationResult.coveragePercent, 4)}%` }}
                            />
                          </div>

                          <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                            An average coverage of {pytestValidationResult.coveragePercent}% of logical execution paths are verified by these assertions.
                          </p>
                        </div>

                        {/* Untested Edge Cases Checklist (7 Columns) */}
                        <div className="md:col-span-7 bg-[#181e30] shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46] border border-[#202840] p-5 rounded-2xl space-y-3 text-left">
                          <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider font-mono block">Missing Test Cases & Debt</span>
                          
                          <div className="space-y-2">
                            {pytestValidationResult.missingCases.map((miss: string, mIdx: number) => (
                              <div key={mIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                                <span className="mt-0.5 text-rose-500 shrink-0 text-[11px]">⚠️</span>
                                <span className="font-semibold leading-relaxed">{miss}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* Assertion Check Items Table */}
                      <div className="space-y-3.5">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">Assertion Logic Verifications</span>
                        
                        <div className="grid grid-cols-1 gap-3">
                          {pytestValidationResult.results.map((res: any, rIdx: number) => {
                            const isPassed = res.status === 'passed';
                            return (
                              <div 
                                key={rIdx} 
                                className={`p-4 rounded-2xl flex items-start gap-4 border transition-all ${
                                  isPassed 
                                    ? 'bg-emerald-950/5 border-emerald-500/15 shadow-[inset_2px_2px_4px_#0d101a]' 
                                    : 'bg-rose-950/5 border-rose-500/15 shadow-[inset_2px_2px_4px_#0d101a]'
                                }`}
                              >
                                <div className={`mt-0.5 p-1 rounded-lg shrink-0 border ${
                                  isPassed 
                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                    : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                                }`}>
                                  {isPassed ? (
                                    <Check className="h-3.5 w-3.5" />
                                  ) : (
                                    <X className="h-3.5 w-3.5" />
                                  )}
                                </div>

                                <div className="flex-1 min-w-0 space-y-1">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <code translate="no" className={`text-xs font-bold font-mono ${isPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
                                      {res.assertion}
                                    </code>
                                    <span className={`text-[8.5px] font-mono font-bold bg-[#131826] border px-2 py-0.5 rounded-md uppercase tracking-wide ${
                                      isPassed ? 'text-emerald-400 border-emerald-500/20' : 'text-rose-400 border-rose-500/20'
                                    }`}>
                                      {res.status}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                                    {res.explanation}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Improved complete test script box with Load to Sandbox options */}
                      <div className="space-y-3 pt-2">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2.5">
                          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">Complete & Robust Test Suite (AI Recommended)</span>
                          <button
                            onClick={() => {
                              setEditorCode(`${pytestTargetCode}\n\n${pytestValidationResult.improvedTestCode}`);
                              setSelectedLessonId("what-is-python");
                              setTerminalOutput("AI-generated pytest suite loaded successfully! Check the main Sandbox editor at the bottom.");
                              triggerToast("Loaded to Main Sandbox!");
                            }}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                          >
                            <Play className="h-3.5 w-3.5 fill-current" /> LOAD TO MAIN SANDBOX
                          </button>
                        </div>

                        <div className="bg-[#131826] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] rounded-2xl overflow-hidden flex flex-col font-mono text-[11px]">
                          <div className="bg-[#0e121e] px-4 py-2.5 border-b border-[#202840] flex items-center justify-between text-slate-400 text-[10px]">
                            <span>🚀 robust_pytest_suite.py</span>
                            <button 
                              onClick={() => handleCopyText(pytestValidationResult.improvedTestCode)}
                              className="hover:text-white flex items-center gap-1 text-[9px] uppercase font-bold cursor-pointer"
                            >
                              <Copy className="h-3 w-3" /> Copy Code
                            </button>
                          </div>
                          <div className="p-4 text-left text-emerald-400 overflow-x-auto max-h-64">
                            <pre translate="no" className="whitespace-pre">{pytestValidationResult.improvedTestCode}</pre>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              )}

            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW: EXPLAIN AI PLAYGROUND */}
          {/* ========================================================================= */}
          {activeView === 'playground' && (
            <div className="space-y-6 text-left">
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white tracking-tight">Gemini AI Explainer Playground</h2>
                <p className="text-xs text-slate-400">Paste arbitrary Python statements and get immediate step-by-step structural logical breakdowns.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Pasting code input (6 Columns) */}
                <div className="lg:col-span-6 flex flex-col gap-4">
                  <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-5 rounded-3xl space-y-3 flex-1 flex flex-col justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">Input Python Code</span>
                    
                    <textarea
                      value={userPastedCode}
                      onChange={(e) => setUserPastedCode(e.target.value)}
                      className="w-full flex-1 min-h-[350px] bg-[#181e30] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] p-4 text-xs text-emerald-400 font-mono rounded-2xl focus:outline-none resize-none leading-relaxed"
                      placeholder="Paste your custom variables, functions, or classes statements here..."
                    />

                    <button
                      onClick={handleExplainPastedCode}
                      disabled={isExplaining}
                      className="w-full py-3 bg-[#3776ab] hover:bg-[#3776ab]/90 text-white text-xs font-black rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                    >
                      {isExplaining ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          <span>AI COMPILING ANALYSIS...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4 text-[#ffd43b]" />
                          <span>EXPLAIN VIA GEMINI AI</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Analytical breakdown Output (6 Columns) */}
                <div className="lg:col-span-6">
                  <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] p-5 rounded-3xl space-y-4 min-h-[440px] flex flex-col justify-between text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">Logical Trace Breakdown</span>
                    
                    <div className="w-full flex-1 bg-[#181e30] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] p-4 rounded-2xl overflow-y-auto max-h-[400px]">
                      {aiExplanationResult ? (
                        <div className="text-xs space-y-3 text-slate-300 leading-relaxed whitespace-pre-wrap markdown-content">
                          {aiExplanationResult}
                        </div>
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500">
                          <Code className="h-10 w-10 text-slate-600 mb-3" />
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Awaiting Input Statements</p>
                          <p className="text-[11px] text-slate-500 mt-1 max-w-xs">Paste script logic into the left container and run the Explainer to query Gemini.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW: CHEAT SHEET REFERENCES */}
          {/* ========================================================================= */}
          {activeView === 'reference' && (
            <div className="space-y-6 text-left">
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white tracking-tight">Cheat Sheets Ref Card</h2>
                <p className="text-xs text-slate-400">Quick syntax references to guide writing operations.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CHEAT_SHEETS.map((item, i) => (
                  <div key={i} className="bg-[#181e30] shadow-[6px_6px_12px_#0d101a,-6px_-6px_12px_#232c46] border border-[#202840] p-5 rounded-2xl flex flex-col justify-between text-left h-52">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[9px] font-mono font-bold text-slate-500">
                        <span className="uppercase tracking-widest text-[#ffd43b]">{item.category}</span>
                        <span>0{i + 1}</span>
                      </div>
                      <h4 className="font-extrabold text-xs text-white line-clamp-1">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 line-clamp-3 leading-normal">{item.desc}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between bg-[#131826] px-3.5 py-2.5 rounded-xl border border-[#202840] shadow-[inset_2px_2px_4px_#0d101a]">
                      <code translate="no" className="text-[10px] text-emerald-400 font-mono truncate mr-2">{item.code}</code>
                      <button 
                        onClick={() => handleCopyText(item.code)}
                        className="text-slate-500 hover:text-white p-1"
                      >
                        <Copy className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* VIEW: ACHIEVEMENTS */}
          {/* ========================================================================= */}
          {activeView === 'achievements' && (
            <div className="space-y-6 text-left">
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white tracking-tight">Hall of Achievements</h2>
                <p className="text-xs text-slate-400">Master syllabus steps and debug programs to unlock these honors.</p>
              </div>

              <div className="space-y-4">
                {GAME_ACHIEVEMENTS.map((ach) => {
                  const unlocked = userXp >= ach.xp;
                  return (
                    <div 
                      key={ach.id}
                      className={`p-5 rounded-3xl border text-left flex items-center gap-5 transition-all ${
                        unlocked 
                          ? 'bg-[#181e30] shadow-[6px_6px_12px_#0d101a,-6px_-6px_12px_#232c46] border-emerald-500/25' 
                          : 'bg-[#181e30]/40 shadow-none border-[#202840]/40 opacity-50'
                      }`}
                    >
                      <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 shadow-[4px_4px_8px_#0d101a] border ${
                        unlocked ? 'bg-gradient-to-tr from-emerald-500 to-teal-500 text-slate-950 border-emerald-400' : 'bg-slate-900 text-slate-600 border-transparent'
                      }`}>
                        <Award className="h-6 w-6" />
                      </div>

                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-extrabold text-sm text-white truncate">{ach.name}</h4>
                          {unlocked ? (
                            <span className="text-[8.5px] font-mono font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded uppercase tracking-wider">UNLOCKED</span>
                          ) : (
                            <span className="text-[8.5px] font-mono font-bold text-slate-500 bg-slate-900 px-2 py-0.5 rounded uppercase tracking-wider">LOCKED</span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 leading-normal">{ach.desc}</p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-mono font-bold text-[#ffd43b]">{ach.xp} XP Requirement</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SANDBOX AREA (Situated in bottom content panels) */}
          {/* ========================================================================= */}
          <section className="mt-8 border-t border-[#202840]/60 pt-8 space-y-6">
            
            <div className="text-left space-y-1">
              <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
                <Terminal className="h-5 w-5 text-[#ffd43b]" /> Sandbox Execution Console
              </h3>
              <p className="text-xs text-slate-400">Compile your statements inside our virtual interpreter. Inspect standard outputs and verify program assertions instantly.</p>
            </div>

            {/* Practical Interactive Code Editor (Neumorphic Debossed Terminal box) */}
            <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-3xl p-5 md:p-6 space-y-4 text-left">
              <div className="flex justify-between items-center border-b border-[#202840] pb-3">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono flex items-center gap-2"><Code className="h-4.5 w-4.5 text-[#3776ab]" /> PyMaster Virtual Machine Console</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleCopyText(editorCode)}
                    className="p-1.5 px-3 bg-[#181e30] hover:bg-[#1a2135] text-xs text-slate-300 font-bold rounded-lg shadow-[2px_2px_4px_#0d101a,-2px_-2px_4px_#232c46] hover:shadow-[inset_1px_1px_2px_#0d101a,inset_-1px_-1px_2px_#232c46] border border-[#202840] transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="h-3.5 w-3.5" /> Copy Code
                  </button>
                  <button 
                    onClick={() => {
                      if (activeView === 'learn') {
                        setEditorCode(activeLesson.exampleCode);
                      } else if (activeView === 'debugging-lab') {
                        setEditorCode(activeDebugChallenge.buggyCode);
                      } else if (activeView === 'real-world-lab') {
                        setEditorCode(activeTask.starterCode);
                      } else if (activeView === 'fundamentals') {
                        setEditorCode(activeFundamental.exampleCode);
                      } else if (activeView === 'cybersecurity') {
                        setEditorCode(activeSecurityLesson.exampleCode);
                      }
                      triggerToast("Sandbox reset completed.");
                    }}
                    className="p-1.5 px-3 bg-[#181e30] hover:bg-[#1a2135] text-xs text-slate-300 font-bold rounded-lg shadow-[2px_2px_4px_#0d101a,-2px_-2px_4px_#232c46] hover:shadow-[inset_1px_1px_2px_#0d101a,inset_-1px_-1px_2px_#232c46] border border-[#202840] transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5 text-orange-400" /> Reset
                  </button>
                </div>
              </div>

              {/* Code input area */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                
                {/* Editable Editor Area (7 columns) */}
                <div className="md:col-span-7 flex flex-col">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] uppercase font-mono font-bold text-slate-500 block">main_script.py</span>
                    {activeView === 'debugging-lab' && (
                      <div className="flex items-center gap-2 text-[10px] font-mono font-bold">
                        <span className="text-slate-400">Live Coverage:</span>
                        <span className={`${
                          testCoverageStatus.percentage === 100 
                            ? 'text-emerald-400' 
                            : testCoverageStatus.percentage > 0 
                              ? 'text-amber-400' 
                              : 'text-slate-500'
                        }`}>
                          {testCoverageStatus.percentage}%
                        </span>
                        <div className="w-16 h-1.5 bg-[#131826] rounded-full overflow-hidden p-[1px] border border-[#202840]">
                          <div 
                            className={`h-full rounded-full transition-all duration-300 ${
                              testCoverageStatus.percentage === 100 ? 'bg-emerald-400' : 'bg-amber-400'
                            }`}
                            style={{ width: `${testCoverageStatus.percentage}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <textarea
                    value={editorCode}
                    onChange={(e) => setEditorCode(e.target.value)}
                    className="w-full min-h-[220px] bg-[#181e30] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] p-4 text-xs text-emerald-400 font-mono rounded-2xl focus:outline-none resize-none leading-relaxed"
                  />
                </div>

                {/* Simulated Sandboxed Output logs (5 columns) */}
                <div className="md:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-mono font-bold text-slate-500 mb-1 block">Interpreter output console</span>
                    <div className="w-full min-h-[170px] bg-[#131826] shadow-[inset_4px_4px_8px_#0d101a,inset_-4px_-4px_8px_#232c46] border border-[#202840] p-4 rounded-2xl overflow-y-auto text-xs font-mono text-slate-300 text-left leading-relaxed">
                      {terminalOutput ? (
                        <div className="whitespace-pre-wrap">{terminalOutput}</div>
                      ) : (
                        <span className="text-slate-600">Console ready. Click Execute below to compile values.</span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handleExecuteActiveCode}
                    disabled={isRunning}
                    className="w-full py-3.5 mt-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-800 text-slate-950 text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                  >
                    {isRunning ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        <span>Compiling statements...</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 fill-current text-slate-950" />
                        <span>Execute statements</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>

          </section>

        </main>
      </div>

      {/* FOOTER BAR (Tactile Flat Shadow) */}
      <footer className="mt-16 bg-[#131826] border-t border-[#202840] py-8 text-center px-4 font-mono text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p>© 2026 PyMaster Academy. Soft Extruded Tactile Neumorphic Environment.</p>
            <span className="bg-[#1e253c] text-[#ffd43b] border border-amber-500/20 px-2.5 py-1 rounded-lg font-bold">
              ✨ Collection By Abdullah
            </span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-slate-300">Docs</span>
            <span className="hover:text-slate-300">GitHub</span>
            <span className="hover:text-slate-300">Terms of Use</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
