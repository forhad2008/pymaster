import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle, 
  Circle, 
  Copy, 
  Check, 
  Play, 
  Search, 
  Sparkles, 
  Cpu, 
  Terminal, 
  Bookmark, 
  BookmarkCheck,
  Compass, 
  Database, 
  Zap, 
  Globe, 
  Award, 
  AlertTriangle, 
  Lightbulb, 
  Code, 
  ArrowLeft, 
  ArrowRight,
  ListOrdered,
  Maximize2,
  Minimize2,
  Share2,
  HelpCircle,
  Eye,
  Sliders,
  Flame,
  Layers,
  FileCode,
  X,
  Menu
} from 'lucide-react';
import { 
  BOOK_VOLUMES, 
  BOOK_CHAPTERS, 
  BookChapter, 
  BookVolume 
} from './pythonBookData';
import { LanguageSelector } from './LanguageSelector';

interface PythonBookSectionProps {
  onRunCodeInPlayground?: (code: string) => void;
  triggerToast: (msg: string) => void;
  initialChapterId?: string;
}

export const PythonBookSection: React.FC<PythonBookSectionProps> = ({
  onRunCodeInPlayground,
  triggerToast,
  initialChapterId = "ch-1"
}) => {
  // Current active chapter
  const [activeChapterId, setActiveChapterId] = useState<string>(initialChapterId);
  const [selectedVolumeFilter, setSelectedVolumeFilter] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Reader preferences
  const [readerTheme, setReaderTheme] = useState<'dark' | 'sepia' | 'cyber'>(() => {
    return (localStorage.getItem('pymaster_book_theme') as any) || 'dark';
  });
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);
  
  // Saved reading progress & bookmarks
  const [completedChapters, setCompletedChapters] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('pymaster_book_completed_chapters');
    return saved ? new Set(JSON.parse(saved)) : new Set(['ch-1']);
  });
  const [bookmarkedChapters, setBookmarkedChapters] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('pymaster_book_bookmarks');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  // Interactive Quiz state for active chapter
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState<boolean>(false);
  const [showChallengeSolution, setShowChallengeSolution] = useState<boolean>(false);
  const [showChallengeHint, setShowChallengeHint] = useState<boolean>(false);
  
  // Copied code feedback
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Reference for scrolling chapter to top
  const chapterTopRef = useRef<HTMLDivElement>(null);

  // Sync theme to localStorage
  useEffect(() => {
    localStorage.setItem('pymaster_book_theme', readerTheme);
  }, [readerTheme]);

  // Sync completion to localStorage
  useEffect(() => {
    localStorage.setItem('pymaster_book_completed_chapters', JSON.stringify(Array.from(completedChapters)));
  }, [completedChapters]);

  // Sync bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('pymaster_book_bookmarks', JSON.stringify(Array.from(bookmarkedChapters)));
  }, [bookmarkedChapters]);

  // Reset quiz state when active chapter changes
  useEffect(() => {
    setSelectedQuizAnswer(null);
    setShowQuizResult(false);
    setShowChallengeSolution(false);
    setShowChallengeHint(false);
    
    // Scroll to top of reading pane
    if (chapterTopRef.current) {
      chapterTopRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeChapterId]);

  // Active Chapter Object
  const currentChapter: BookChapter = useMemo(() => {
    return BOOK_CHAPTERS.find(c => c.id === activeChapterId) || BOOK_CHAPTERS[0];
  }, [activeChapterId]);

  // Current Chapter Index & Adjacent Chapters for Book Page Turning
  const currentIndex = useMemo(() => {
    return BOOK_CHAPTERS.findIndex(c => c.id === activeChapterId);
  }, [activeChapterId]);

  const prevChapter = currentIndex > 0 ? BOOK_CHAPTERS[currentIndex - 1] : null;
  const nextChapter = currentIndex < BOOK_CHAPTERS.length - 1 ? BOOK_CHAPTERS[currentIndex + 1] : null;

  // Filtered Chapters based on search and volume
  const filteredChapters = useMemo(() => {
    return BOOK_CHAPTERS.filter(ch => {
      const matchesVol = selectedVolumeFilter === 'all' || ch.volumeId === selectedVolumeFilter;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesVol;
      
      const matchesSearch = 
        ch.title.toLowerCase().includes(q) ||
        ch.subtitle.toLowerCase().includes(q) ||
        ch.bengaliIntuition.toLowerCase().includes(q) ||
        ch.technicalDeepDive.toLowerCase().includes(q) ||
        ch.subtopics.some(s => s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q));

      return matchesVol && matchesSearch;
    });
  }, [selectedVolumeFilter, searchQuery]);

  // Calculate overall reading completion percentage
  const readingProgressPercentage = Math.round((completedChapters.size / BOOK_CHAPTERS.length) * 100);

  // Handlers
  const handleSelectChapter = (chapterId: string) => {
    setActiveChapterId(chapterId);
    setIsMobileTocOpen(false);
  };

  const handleToggleComplete = (chapterId: string) => {
    setCompletedChapters(prev => {
      const updated = new Set(prev);
      if (updated.has(chapterId)) {
        updated.delete(chapterId);
        triggerToast("Chapter marked as unread");
      } else {
        updated.add(chapterId);
        triggerToast("🎉 Chapter completed! +50 XP Earned");
      }
      return updated;
    });
  };

  const handleToggleBookmark = (chapterId: string) => {
    setBookmarkedChapters(prev => {
      const updated = new Set(prev);
      if (updated.has(chapterId)) {
        updated.delete(chapterId);
        triggerToast("Bookmark removed");
      } else {
        updated.add(chapterId);
        triggerToast("🔖 Chapter bookmarked for quick reference");
      }
      return updated;
    });
  };

  const handleCopyCode = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    triggerToast("Code copied to clipboard!");
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleRunInSandbox = (code: string) => {
    if (onRunCodeInPlayground) {
      onRunCodeInPlayground(code);
      triggerToast("🚀 Sent to Live Interactive Sandbox!");
    }
  };

  // Icon mapper helper
  const getVolumeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-4 h-4 text-emerald-400" />;
      case 'Database': return <Database className="w-4 h-4 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Terminal': return <Terminal className="w-4 h-4 text-purple-400" />;
      case 'Zap': return <Zap className="w-4 h-4 text-yellow-400" />;
      case 'Globe': return <Globe className="w-4 h-4 text-rose-400" />;
      default: return <BookOpen className="w-4 h-4 text-cyan-400" />;
    }
  };

  // Font size classes
  const fontClass = fontSize === 'sm' ? 'text-xs sm:text-sm leading-relaxed' : fontSize === 'lg' ? 'text-base sm:text-lg leading-loose' : 'text-sm sm:text-base leading-relaxed';
  const headingClass = fontSize === 'sm' ? 'text-lg sm:text-xl' : fontSize === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl';

  // Theme styling
  const themeClasses = {
    dark: 'bg-[#0f172a] text-slate-100',
    sepia: 'bg-[#fbf0d9] text-[#2c221e]',
    cyber: 'bg-[#050b14] text-cyan-50'
  }[readerTheme];

  const cardBgClasses = {
    dark: 'bg-slate-900/90 border-slate-800 text-slate-200',
    sepia: 'bg-[#f4e4c1] border-[#deb887] text-[#3d2b1f]',
    cyber: 'bg-[#081326]/90 border-cyan-950/80 text-cyan-100'
  }[readerTheme];

  const codeBgClasses = {
    dark: 'bg-slate-950 border-slate-800 text-emerald-400',
    sepia: 'bg-[#2b241e] border-[#4a3b32] text-[#e2b714]',
    cyber: 'bg-[#030914] border-cyan-900/50 text-cyan-300'
  }[readerTheme];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      <div ref={chapterTopRef} />

      {/* ========================================================================= */}
      {/* TOP BOOK NAVIGATION & PROGRESS BAR                                        */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-opacity-95 border-b border-slate-800/80 px-3 sm:px-4 py-2.5 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
          
          {/* Left: Book Title & TOC Trigger */}
          <div className="flex items-center space-x-2">
            {/* Desktop TOC Toggle */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hidden lg:flex p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-cyan-400 border border-slate-700 transition"
              title="Toggle Table of Contents"
            >
              <ListOrdered className="w-4 h-4" />
            </button>

            {/* Mobile TOC Drawer Trigger Button */}
            <button
              onClick={() => setIsMobileTocOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold shadow-sm"
              title="Open Chapter Index"
            >
              <ListOrdered className="w-4 h-4 text-cyan-400" />
              <span>Ch {currentChapter.chapterNumber}/36</span>
            </button>

            {/* Breadcrumb path */}
            <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-slate-400">
              <span className="flex items-center text-cyan-400 font-semibold truncate max-w-[150px] md:max-w-none">
                <BookOpen className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                Python Master Book
              </span>
              <span>/</span>
              <span className="text-emerald-400 font-medium">Ch {currentChapter.chapterNumber}</span>
            </div>
          </div>

          {/* Center: Overall Progress Indicator (Desktop & Tablet) */}
          <div className="hidden md:flex items-center space-x-3 bg-slate-800/60 px-3.5 py-1.5 rounded-full border border-slate-700/60 text-xs">
            <span className="text-slate-300 font-medium">
              Chapter {currentChapter.chapterNumber} of {BOOK_CHAPTERS.length}
            </span>
            <div className="w-20 lg:w-28 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${readingProgressPercentage}%` }}
              />
            </div>
            <span className="text-emerald-400 font-mono font-bold">{readingProgressPercentage}%</span>
          </div>

          {/* Right: Reader Controls (Language Selector, Themes, Fonts, Bookmark, Actions) */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            
            {/* Multi-Language Translator */}
            <LanguageSelector triggerToast={triggerToast} />

            {/* Bookmark Chapter */}
            <button
              onClick={() => handleToggleBookmark(currentChapter.id)}
              className={`p-2 rounded-xl border transition ${
                bookmarkedChapters.has(currentChapter.id)
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-amber-400'
              }`}
              title="Bookmark Chapter"
            >
              {bookmarkedChapters.has(currentChapter.id) ? (
                <BookmarkCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              ) : (
                <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              )}
            </button>

            {/* Font Size Adjuster (Hidden on extra small screens) */}
            <div className="hidden sm:flex items-center bg-slate-800/80 rounded-xl p-0.5 border border-slate-700 text-xs">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 rounded-lg ${fontSize === 'sm' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`px-2 py-1 rounded-lg ${fontSize === 'md' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 rounded-lg ${fontSize === 'lg' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                A+
              </button>
            </div>

            {/* Theme Selector */}
            <div className="flex items-center bg-slate-800/80 rounded-xl p-0.5 border border-slate-700 text-xs">
              <button
                onClick={() => setReaderTheme('dark')}
                className={`px-2 sm:px-2.5 py-1 rounded-lg transition ${readerTheme === 'dark' ? 'bg-slate-700 text-cyan-300 font-bold' : 'text-slate-400'}`}
                title="Dark IDE Theme"
              >
                🌙
              </button>
              <button
                onClick={() => setReaderTheme('sepia')}
                className={`px-2 sm:px-2.5 py-1 rounded-lg transition ${readerTheme === 'sepia' ? 'bg-[#e2b714] text-slate-950 font-bold' : 'text-slate-400'}`}
                title="Sepia Book Theme"
              >
                📜
              </button>
              <button
                onClick={() => setReaderTheme('cyber')}
                className={`px-2 sm:px-2.5 py-1 rounded-lg transition ${readerTheme === 'cyber' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
                title="Cyber Slate Theme"
              >
                🌌
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MOBILE SLIDE-OVER TABLE OF CONTENTS DRAWER                                */}
      {/* ========================================================================= */}
      {isMobileTocOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop Blur */}
          <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileTocOpen(false)}
          />

          {/* Slide-out Drawer Pane */}
          <div className="relative w-5/6 max-w-sm bg-[#131826] border-r border-[#202840] h-full flex flex-col p-4 shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#202840]">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h3 className="font-bold text-sm text-slate-100">Table of Contents</h3>
              </div>
              <button
                onClick={() => setIsMobileTocOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Instant Search Bar */}
            <div className="relative mb-3">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search 36 chapters..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 font-sans"
              />
            </div>

            {/* Volume Filter Pills */}
            <div className="flex flex-wrap gap-1 mb-3">
              <button
                onClick={() => setSelectedVolumeFilter('all')}
                className={`px-2 py-1 text-[10px] rounded-lg font-semibold ${
                  selectedVolumeFilter === 'all'
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                All (36)
              </button>
              {BOOK_VOLUMES.map(vol => (
                <button
                  key={vol.id}
                  onClick={() => setSelectedVolumeFilter(vol.id)}
                  className={`px-2 py-1 text-[10px] rounded-lg font-semibold ${
                    selectedVolumeFilter === vol.id
                      ? 'bg-cyan-500 text-slate-950'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  Vol {vol.id}
                </button>
              ))}
            </div>

            {/* Chapters Scroll Area */}
            <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-1">
              {BOOK_VOLUMES.filter(v => selectedVolumeFilter === 'all' || selectedVolumeFilter === v.id).map(vol => {
                const volChapters = filteredChapters.filter(c => c.volumeId === vol.id);
                if (volChapters.length === 0) return null;

                return (
                  <div key={vol.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-2.5">
                    <div className="flex items-center space-x-2 px-1.5 py-1 border-b border-slate-800/60 mb-1.5 text-xs font-bold text-slate-300">
                      {getVolumeIcon(vol.icon)}
                      <span className="truncate">{vol.title}</span>
                    </div>

                    <div className="space-y-1">
                      {volChapters.map(ch => {
                        const isActive = ch.id === activeChapterId;
                        const isDone = completedChapters.has(ch.id);

                        return (
                          <button
                            key={ch.id}
                            onClick={() => handleSelectChapter(ch.id)}
                            className={`w-full text-left px-2.5 py-2 rounded-xl text-xs flex items-center justify-between transition ${
                              isActive
                                ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                            }`}
                          >
                            <div className="flex items-center space-x-2 truncate">
                              <span className={`w-5 h-5 flex-shrink-0 rounded-full text-[10px] font-mono flex items-center justify-center font-bold ${
                                isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                              }`}>
                                {ch.chapterNumber}
                              </span>
                              <span className="truncate">{ch.title}</span>
                            </div>

                            {isDone && <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1.5" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MAIN LAYOUT: SIDEBAR (TABLE OF CONTENTS) + CHAPTER CONTENT                */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6 flex gap-6">
        
        {/* ======================================================================= */}
        {/* LEFT SIDEBAR: DESKTOP TABLE OF CONTENTS (0 TO HERO)                     */}
        {/* ======================================================================= */}
        {isSidebarOpen && (
          <aside className="w-80 flex-shrink-0 hidden lg:block sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto pr-2 custom-scrollbar">
            <div className={`p-4 rounded-2xl border ${cardBgClasses} shadow-xl mb-4`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm tracking-wide uppercase flex items-center text-cyan-400">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Table of Contents
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono">
                  36 Chapters
                </span>
              </div>

              {/* Instant Search Bar */}
              <div className="relative mb-3">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search chapters or topics..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Volume Filter Pills */}
              <div className="flex flex-wrap gap-1 mb-4">
                <button
                  onClick={() => setSelectedVolumeFilter('all')}
                  className={`px-2 py-1 text-[11px] rounded-lg transition font-medium ${
                    selectedVolumeFilter === 'all'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  All (36)
                </button>
                {BOOK_VOLUMES.map(vol => (
                  <button
                    key={vol.id}
                    onClick={() => setSelectedVolumeFilter(vol.id)}
                    className={`px-2 py-1 text-[11px] rounded-lg transition font-medium ${
                      selectedVolumeFilter === vol.id
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Vol {vol.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Chapters Grouped by Volume */}
            <div className="space-y-4">
              {BOOK_VOLUMES.filter(v => selectedVolumeFilter === 'all' || selectedVolumeFilter === v.id).map(vol => {
                const volChapters = filteredChapters.filter(c => c.volumeId === vol.id);
                if (volChapters.length === 0) return null;

                return (
                  <div key={vol.id} className={`rounded-2xl border ${cardBgClasses} p-3 shadow-md`}>
                    <div className="flex items-center space-x-2 px-2 py-1.5 border-b border-slate-800/60 mb-2">
                      {getVolumeIcon(vol.icon)}
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold truncate text-slate-200">{vol.title}</div>
                        <div className="text-[10px] text-cyan-400/80 font-mono">{vol.badge} • {vol.chapterRange}</div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      {volChapters.map(ch => {
                        const isActive = ch.id === activeChapterId;
                        const isDone = completedChapters.has(ch.id);
                        const isBookmarked = bookmarkedChapters.has(ch.id);

                        return (
                          <button
                            key={ch.id}
                            onClick={() => handleSelectChapter(ch.id)}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition group ${
                              isActive
                                ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40 shadow-inner'
                                : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                            }`}
                          >
                            <div className="flex items-center space-x-2 truncate">
                              <span className={`w-5 h-5 flex-shrink-0 rounded-full text-[10px] font-mono flex items-center justify-center font-bold ${
                                isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                              }`}>
                                {ch.chapterNumber}
                              </span>
                              <span className="truncate">{ch.title.replace(/^Chapter \d+:\s*/, '')}</span>
                            </div>

                            <div className="flex items-center space-x-1.5 flex-shrink-0 ml-2">
                              {isBookmarked && (
                                <Bookmark className="w-3 h-3 text-amber-400 fill-amber-400" />
                              )}
                              {isDone ? (
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Circle className="w-3 h-3 text-slate-600 group-hover:text-slate-400" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        )}

        {/* ======================================================================= */}
        {/* RIGHT MAIN: CHAPTER READING WORKSPACE                                   */}
        {/* ======================================================================= */}
        <main className="flex-1 min-w-0">
          
          {/* Chapter Header Banner */}
          <div className={`p-4 sm:p-8 rounded-3xl border ${cardBgClasses} shadow-2xl mb-6 sm:mb-8 relative overflow-hidden`}>
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10">
              {/* Top Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {currentChapter.volumeTitle.split(':')[0]}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                    {currentChapter.difficulty}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-mono flex items-center">
                    ⏱️ {currentChapter.readTime}
                  </span>
                </div>

                {/* Mark Completed Button */}
                <button
                  onClick={() => handleToggleComplete(currentChapter.id)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 sm:space-x-2 transition shadow-lg ${
                    completedChapters.has(currentChapter.id)
                      ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                  }`}
                >
                  {completedChapters.has(currentChapter.id) ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-slate-950" />
                      <span>Completed (+50 XP)</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Mark Done</span>
                    </>
                  )}
                </button>
              </div>

              {/* Title & Subtitle */}
              <h1 className={`${headingClass} font-extrabold tracking-tight text-slate-100 mb-2 sm:mb-3`}>
                Chapter {currentChapter.chapterNumber}: {currentChapter.title}
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed mb-5 font-medium">
                {currentChapter.subtitle}
              </p>

              {/* Learning Objectives Box */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-950/60 border border-cyan-500/20 shadow-inner">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center mb-2.5">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  In This Chapter, You Will Master:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                  {currentChapter.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* SECTION 1: DUAL CONCEPTUAL INTUITION & TECHNICAL BLUEPRINT           */}
          {/* ===================================================================== */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            
            {/* Conceptual Intuition & Real-Life Analogy */}
            <div className={`p-4 sm:p-6 rounded-3xl border ${cardBgClasses} shadow-xl relative`}>
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                  💡
                </div>
                <div>
                  <h3 className="font-bold text-emerald-400 text-xs sm:text-sm">Conceptual Intuition & Real-World Analogy</h3>
                  <span className="text-[10px] sm:text-[11px] text-slate-400">Zero to Hero Mental Model</span>
                </div>
              </div>
              <p className={`text-slate-300 ${fontClass} leading-relaxed`}>
                {currentChapter.bengaliIntuition}
              </p>
            </div>

            {/* Technical Engineering Deep Dive */}
            <div className={`p-4 sm:p-6 rounded-3xl border ${cardBgClasses} shadow-xl relative`}>
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
                  ⚡
                </div>
                <div>
                  <h3 className="font-bold text-cyan-400 text-xs sm:text-sm">Technical Deep Dive & Architecture</h3>
                  <span className="text-[10px] sm:text-[11px] text-slate-400">Memory Allocation, CPython & Complexity</span>
                </div>
              </div>
              <p className={`text-slate-300 ${fontClass} leading-relaxed`}>
                {currentChapter.technicalDeepDive}
              </p>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* SECTION 2: GRANULAR SUBTOPIC BREAKDOWN WITH RUNNABLE CODE BLOCKS      */}
          {/* ===================================================================== */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100 flex items-center">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mr-2" />
                Comprehensive Subtopic Deep Dive
              </h2>
              <span className="text-[10px] sm:text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
                {currentChapter.subtopics.length} Subtopics
              </span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {currentChapter.subtopics.map((sub, sIdx) => {
                const codeKey = `code-${currentChapter.id}-${sIdx}`;
                const isCopied = copiedKey === codeKey;

                return (
                  <div key={sIdx} className={`p-4 sm:p-6 rounded-3xl border ${cardBgClasses} shadow-xl`}>
                    {/* Subtopic Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] sm:text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-lg border border-cyan-800/60 mr-2">
                          #{sIdx + 1}
                        </span>
                        <h3 className="inline text-sm sm:text-base md:text-lg font-bold text-slate-100">
                          {sub.title}
                        </h3>
                      </div>
                      
                      <button
                        onClick={() => handleCopyCode(sub.code, codeKey)}
                        className="p-1.5 sm:p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs flex items-center space-x-1.5 transition flex-shrink-0"
                        title="Copy Code"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 text-[10px] sm:text-xs">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="text-[10px] sm:text-xs">Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Subtopic Description */}
                    <p className={`text-slate-300 ${fontClass} mb-4`}>
                      {sub.desc}
                    </p>

                    {/* Code Demonstration Block */}
                    {sub.code && (
                      <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-3">
                        <div className="bg-slate-950 px-3 sm:px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                          <div className="flex items-center space-x-1.5 sm:space-x-2 truncate">
                            <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                            <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                            <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                            <span className="ml-1 text-[10px] sm:text-xs text-slate-400 font-semibold truncate">demo_ch{currentChapter.chapterNumber}_sub{sIdx + 1}.py</span>
                          </div>

                          <button
                            onClick={() => handleRunInSandbox(sub.code)}
                            className="flex items-center space-x-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-2.5 py-1 rounded-lg font-bold transition shadow-md text-[10px] sm:text-xs shrink-0"
                          >
                            <Play className="w-3 h-3 fill-slate-950" />
                            <span>Run</span>
                          </button>
                        </div>

                        <pre translate="no" className={`p-3.5 sm:p-4 text-[11px] sm:text-sm font-mono overflow-x-auto leading-relaxed ${codeBgClasses}`}>
                          <code translate="no">{sub.code}</code>
                        </pre>

                        {/* Terminal Output Preview */}
                        <div className="bg-slate-950/90 p-3 sm:p-3.5 border-t border-slate-900 font-mono text-[10px] sm:text-xs text-slate-400 flex items-start space-x-2">
                          <Terminal className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1 overflow-x-auto">
                            <span className="text-emerald-400 font-bold block mb-0.5">Terminal Output:</span>
                            <pre translate="no" className="text-slate-300 whitespace-pre-wrap">{sub.output}</pre>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Key Takeaway Badge */}
                    <div className="flex items-center space-x-2 text-[11px] sm:text-xs text-cyan-300/90 font-mono bg-cyan-950/40 p-2.5 rounded-xl border border-cyan-900/40">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span><strong>Key Rule:</strong> {sub.keyTakeaway}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===================================================================== */}
          {/* SECTION 3: PITFALLS & ANTI-PATTERNS ("WATCH OUT!")                   */}
          {/* ===================================================================== */}
          {currentChapter.pitfalls && currentChapter.pitfalls.length > 0 && (
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100">
                  Common Beginner Pitfalls & Senior Best Practices
                </h2>
              </div>

              <div className="space-y-4">
                {currentChapter.pitfalls.map((pit, pIdx) => (
                  <div key={pIdx} className={`p-4 sm:p-6 rounded-3xl border border-amber-500/30 ${cardBgClasses} shadow-xl`}>
                    <h4 className="font-bold text-amber-400 text-sm sm:text-base mb-3 flex items-center">
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-[10px] mr-2 font-mono">⚠️</span>
                      {pit.title}
                    </h4>

                    <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mb-3">
                      {/* Bad Code */}
                      <div className="rounded-2xl bg-rose-950/30 border border-rose-900/50 p-3 sm:p-4">
                        <div className="text-[10px] sm:text-xs font-bold text-rose-400 mb-1.5">
                          ❌ Anti-Pattern (Avoid)
                        </div>
                        <pre translate="no" className="text-[11px] sm:text-xs font-mono text-rose-300 overflow-x-auto whitespace-pre-wrap">
                          <code translate="no">{pit.badCode}</code>
                        </pre>
                      </div>

                      {/* Good Code */}
                      <div className="rounded-2xl bg-emerald-950/30 border border-emerald-900/50 p-3 sm:p-4">
                        <div className="text-[10px] sm:text-xs font-bold text-emerald-400 mb-1.5">
                          ✅ Senior Pythonic Solution
                        </div>
                        <pre translate="no" className="text-[11px] sm:text-xs font-mono text-emerald-300 overflow-x-auto whitespace-pre-wrap">
                          <code translate="no">{pit.goodCode}</code>
                        </pre>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      💡 <strong>Why:</strong> {pit.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===================================================================== */}
          {/* SECTION 4: REAL-LIFE INDUSTRY PROJECT FOR THIS CHAPTER               */}
          {/* ===================================================================== */}
          <div className="mb-8 sm:mb-10">
            <div className={`p-4 sm:p-8 rounded-3xl border-2 border-cyan-500/40 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 shadow-2xl relative overflow-hidden`}>
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center font-bold text-sm">
                    🚀
                  </span>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono block">
                      Chapter Real-Life Project
                    </span>
                    <h3 className="text-base sm:text-xl md:text-2xl font-black text-slate-100">
                      {currentChapter.realLifeProject.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => handleRunInSandbox(currentChapter.realLifeProject.fullCode)}
                  className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 transition shadow-lg shrink-0"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Run Project in Sandbox</span>
                </button>
              </div>

              {/* Scenario & Industry Application */}
              <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <h5 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    🏢 Real-World Scenario
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentChapter.realLifeProject.scenario}
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <h5 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    💼 Industry Application
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentChapter.realLifeProject.industryApplication}
                  </p>
                </div>
              </div>

              {/* Full Project Code Box */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-4">
                <div className="bg-slate-950 px-3 sm:px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-slate-300 font-bold flex items-center text-[11px] sm:text-xs truncate">
                    <FileCode className="w-3.5 h-3.5 text-cyan-400 mr-1.5 shrink-0" />
                    production_ch{currentChapter.chapterNumber}_system.py
                  </span>
                  
                  <button
                    onClick={() => handleCopyCode(currentChapter.realLifeProject.fullCode, `project-${currentChapter.id}`)}
                    className="flex items-center space-x-1 text-[10px] sm:text-xs text-slate-400 hover:text-slate-200 transition shrink-0 ml-2"
                  >
                    {copiedKey === `project-${currentChapter.id}` ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Script</span>
                      </>
                    )}
                  </button>
                </div>

                <pre translate="no" className={`p-4 sm:p-5 text-[11px] sm:text-sm font-mono overflow-x-auto leading-relaxed max-h-96 ${codeBgClasses}`}>
                  <code translate="no">{currentChapter.realLifeProject.fullCode}</code>
                </pre>

                {/* Expected Output */}
                <div className="bg-slate-950 p-3 sm:p-4 border-t border-slate-900 font-mono text-[10px] sm:text-xs">
                  <div className="flex items-center space-x-1.5 text-emerald-400 font-bold mb-1">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Expected Production Output:</span>
                  </div>
                  <pre translate="no" className="text-slate-300 whitespace-pre-wrap overflow-x-auto">{currentChapter.realLifeProject.expectedOutput}</pre>
                </div>
              </div>

              {/* How It Works Bullet Points */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-cyan-950/30 border border-cyan-900/40">
                <h5 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1.5">
                  🔍 Architectural Breakdown:
                </h5>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-300">
                  {currentChapter.realLifeProject.howItWorks.map((step, s) => (
                    <li key={s} className="flex items-start space-x-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* SECTION 5: KNOWLEDGE CHECK (INTERACTIVE QUIZ & CODE CHALLENGE)       */}
          {/* ===================================================================== */}
          <div className="mb-8 sm:mb-10">
            <div className={`p-4 sm:p-8 rounded-3xl border ${cardBgClasses} shadow-xl`}>
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100">
                  Chapter Knowledge Check & Coding Challenge
                </h2>
              </div>

              {/* Multiple Choice Quiz */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800 mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono block mb-1.5">
                  🧠 Conceptual Quiz Question
                </span>
                <p className="text-xs sm:text-sm md:text-base font-bold text-slate-100 mb-3.5">
                  {currentChapter.knowledgeCheck.quizQuestion}
                </p>

                <div className="space-y-2 mb-4">
                  {currentChapter.knowledgeCheck.options.map((opt, oIdx) => {
                    const isSelected = selectedQuizAnswer === oIdx;
                    const isCorrect = oIdx === currentChapter.knowledgeCheck.correctIndex;
                    
                    let btnStyle = 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800';
                    if (showQuizResult) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                      } else if (isSelected && !isCorrect) {
                        btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-300';
                      }
                    } else if (isSelected) {
                      btnStyle = 'bg-cyan-950 border-cyan-500 text-cyan-300 font-bold';
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={showQuizResult}
                        onClick={() => setSelectedQuizAnswer(oIdx)}
                        className={`w-full text-left p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition ${btnStyle}`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-slate-800 flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold shrink-0">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {showQuizResult && isCorrect && (
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Submit Quiz Button & Explanation */}
                {!showQuizResult ? (
                  <button
                    disabled={selectedQuizAnswer === null}
                    onClick={() => setShowQuizResult(true)}
                    className="w-full sm:w-auto px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm">
                    <p className={`font-bold mb-1 ${selectedQuizAnswer === currentChapter.knowledgeCheck.correctIndex ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {selectedQuizAnswer === currentChapter.knowledgeCheck.correctIndex ? '🎉 Correct Answer!' : '❌ Incorrect'}
                    </p>
                    <p className="text-slate-300">{currentChapter.knowledgeCheck.explanation}</p>
                  </div>
                )}
              </div>

              {/* Practice Code Challenge */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 font-mono block mb-1.5">
                  ⚡ Mini Practice Challenge
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-200 mb-3.5">
                  {currentChapter.knowledgeCheck.codeChallenge}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setShowChallengeHint(!showChallengeHint)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center space-x-1.5 transition"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                    <span>{showChallengeHint ? 'Hide Hint' : 'View Hint'}</span>
                  </button>

                  <button
                    onClick={() => setShowChallengeSolution(!showChallengeSolution)}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs flex items-center space-x-1.5 transition"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{showChallengeSolution ? 'Hide Solution' : 'Reveal Solution'}</span>
                  </button>
                </div>

                {showChallengeHint && (
                  <div className="mt-3 p-3 rounded-xl bg-amber-950/30 border border-amber-900/40 text-xs text-amber-200">
                    💡 <strong>Hint:</strong> {currentChapter.knowledgeCheck.challengeHint}
                  </div>
                )}

                {showChallengeSolution && (
                  <div className="mt-3 rounded-xl overflow-hidden border border-slate-800">
                    <pre translate="no" className="p-3.5 sm:p-4 bg-slate-950 text-emerald-400 text-xs font-mono overflow-x-auto">
                      <code translate="no">{currentChapter.knowledgeCheck.challengeSolution}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* SECTION 6: PREVIOUS / NEXT CHAPTER PAGE TURNING NAVIGATION          */}
          {/* ===================================================================== */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 rounded-3xl border border-slate-800 bg-slate-900/60 shadow-xl mb-12">
            
            {/* Previous Chapter */}
            {prevChapter ? (
              <button
                onClick={() => handleSelectChapter(prevChapter.id)}
                className="w-full sm:w-auto text-left p-3.5 sm:p-4 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 transition flex items-center space-x-3 group"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:-translate-x-1 transition shrink-0" />
                <div className="min-w-0">
                  <span className="text-[9px] sm:text-[10px] uppercase font-mono text-slate-500 block">Previous Chapter</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-200 truncate max-w-xs block">
                    Ch {prevChapter.chapterNumber}: {prevChapter.title.replace(/^Chapter \d+:\s*/, '')}
                  </span>
                </div>
              </button>
            ) : (
              <div />
            )}

            {/* Next Chapter */}
            {nextChapter ? (
              <button
                onClick={() => handleSelectChapter(nextChapter.id)}
                className="w-full sm:w-auto text-right p-3.5 sm:p-4 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition flex items-center justify-end space-x-3 group"
              >
                <div className="min-w-0 text-right">
                  <span className="text-[9px] sm:text-[10px] uppercase font-mono text-cyan-400 block">Next Chapter</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-100 truncate max-w-xs block">
                    Ch {nextChapter.chapterNumber}: {nextChapter.title.replace(/^Chapter \d+:\s*/, '')}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:translate-x-1 transition shrink-0" />
              </button>
            ) : (
              <div className="text-xs font-mono text-emerald-400 font-bold p-3 rounded-xl bg-emerald-950/40 border border-emerald-900">
                🏆 You've reached the final chapter of Python Master Book!
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
