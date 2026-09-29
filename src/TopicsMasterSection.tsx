import React, { useState, useMemo } from 'react';
import { 
  CheckCircle, 
  Circle, 
  ChevronDown, 
  ChevronRight, 
  Copy, 
  Check, 
  Play, 
  Search, 
  Sparkles, 
  FolderOpen, 
  Lightbulb, 
  Cpu, 
  Terminal, 
  Dumbbell, 
  ListFilter,
  Maximize2,
  Minimize2,
  Code
} from 'lucide-react';
import { MASTER_TOPICS, MasterTopic } from './topicsMasterData';

interface TopicsMasterSectionProps {
  onRunCodeInPlayground?: (code: string) => void;
  triggerToast: (msg: string) => void;
}

export const TopicsMasterSection: React.FC<TopicsMasterSectionProps> = ({ 
  onRunCodeInPlayground, 
  triggerToast 
}) => {
  const [activeTopicId, setActiveTopicId] = useState<string>("topic-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openCardIds, setOpenCardIds] = useState<Set<string>>(new Set(["topic-1"]));
  const [completedTopicIds, setCompletedTopicIds] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('pymaster_master_completed');
    return saved ? new Set(JSON.parse(saved)) : new Set(["topic-1"]);
  });
  const [copiedCodeKey, setCopiedCodeKey] = useState<string | null>(null);

  // Filter topics
  const filteredTopics = useMemo(() => {
    return MASTER_TOPICS.filter(topic => {
      const matchesCat = selectedCategory === "all" || topic.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;
      
      const matchesQuery = 
        topic.title.toLowerCase().includes(q) ||
        topic.summary.toLowerCase().includes(q) ||
        topic.conceptSimple.toLowerCase().includes(q) ||
        topic.conceptTechnical.toLowerCase().includes(q) ||
        topic.subtopics.some(s => s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q));

      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Active topic object for breadcrumbs
  const activeTopic = useMemo(() => {
    return MASTER_TOPICS.find(t => t.id === activeTopicId) || MASTER_TOPICS[0];
  }, [activeTopicId]);

  // 1-Click Topic Jump & Auto-Open Handler
  const handleSelectTopic = (topicId: string, shouldScroll = true) => {
    setActiveTopicId(topicId);
    
    // Auto-open this card
    setOpenCardIds(prev => {
      const updated = new Set(prev);
      updated.add(topicId);
      return updated;
    });

    if (shouldScroll) {
      setTimeout(() => {
        const el = document.getElementById(`card-${topicId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  const toggleCardOpen = (topicId: string) => {
    setOpenCardIds(prev => {
      const updated = new Set(prev);
      if (updated.has(topicId)) {
        updated.delete(topicId);
      } else {
        updated.add(topicId);
        setActiveTopicId(topicId);
      }
      return updated;
    });
  };

  const toggleTopicCompleted = (topicId: string) => {
    setCompletedTopicIds(prev => {
      const updated = new Set(prev);
      if (updated.has(topicId)) {
        updated.delete(topicId);
      } else {
        updated.add(topicId);
        triggerToast("🎉 Module marked as completed!");
      }
      localStorage.setItem('pymaster_master_completed', JSON.stringify(Array.from(updated)));
      return updated;
    });
  };

  const handleCopy = (code: string, key: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeKey(key);
    triggerToast("✅ Code copied to clipboard!");
    setTimeout(() => setCopiedCodeKey(null), 2000);
  };

  const expandAll = () => {
    setOpenCardIds(new Set(MASTER_TOPICS.map(t => t.id)));
  };

  const collapseAll = () => {
    setOpenCardIds(new Set());
  };

  const completedCount = completedTopicIds.size;
  const progressPercent = Math.round((completedCount / MASTER_TOPICS.length) * 100);

  return (
    <div className="space-y-6">
      {/* TOP STICKY BREADCRUMB & PROGRESS TOOLBAR */}
      <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-2xl p-3 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 sticky top-16 sm:top-20 z-30 backdrop-blur-md">
        {/* Topic Path / Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-slate-400 font-mono min-w-0 max-w-full">
          <span className="text-[#ffd43b] font-bold shrink-0">Curriculum Path</span>
          <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-500 shrink-0" />
          <span className="text-indigo-400 font-semibold shrink-0">{activeTopic.categoryLabel}</span>
          <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-500 shrink-0" />
          <span className="text-white font-bold bg-[#121624] px-2 py-0.5 rounded-lg border border-[#202840] truncate max-w-[180px] sm:max-w-xs md:max-w-md inline-block">
            #{activeTopic.num} {activeTopic.title.replace(/^Topic \d+:\s*/, '')}
          </span>
        </div>

        {/* Global Progress & Quick Actions */}
        <div className="flex items-center justify-between md:justify-end gap-2 sm:gap-3 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-[#202840]/60">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#121624] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-[#202840] text-[11px] sm:text-xs font-mono">
            <span className="text-slate-400">Mastery:</span>
            <span className="text-emerald-400 font-bold">{completedCount}/{MASTER_TOPICS.length} ({progressPercent}%)</span>
            <div className="w-12 sm:w-16 h-2 bg-[#1c2438] rounded-full overflow-hidden ml-1">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={expandAll}
              title="Expand All Topics"
              className="p-1.5 sm:p-2 rounded-lg bg-[#181e30] text-slate-400 hover:text-white border border-[#202840] hover:border-slate-500 text-xs flex items-center gap-1 cursor-pointer transition-all"
            >
              <Maximize2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Expand</span>
            </button>
            <button
              onClick={collapseAll}
              title="Collapse All Topics"
              className="p-1.5 sm:p-2 rounded-lg bg-[#181e30] text-slate-400 hover:text-white border border-[#202840] hover:border-slate-500 text-xs flex items-center gap-1 cursor-pointer transition-all"
            >
              <Minimize2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Collapse</span>
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH & CATEGORY PILLS FILTER BAR */}
      <div className="bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-2xl p-4 space-y-3">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          {/* Quick Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 36 topics, syntax, keywords (e.g. FastAPI, OOP, yield)..."
              className="w-full bg-[#121624] border border-[#202840] rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ffd43b] transition-all font-mono"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-slate-500 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'All Topics (36)' },
              { id: 'beginner', label: 'Beginner' },
              { id: 'intermediate', label: 'Intermediate' },
              { id: 'advanced', label: 'Advanced' },
              { id: 'applied', label: 'Applied & AI' },
              { id: 'projects', label: 'Projects (40+)' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#ffd43b] text-slate-900 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]'
                    : 'bg-[#121624] text-slate-400 hover:text-white border border-[#202840]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TWO COLUMN MASTER EXPLORER LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SIDEBAR: 1-CLICK TOPIC DIRECTORY (4 COLUMNS) */}
        <div className="lg:col-span-4 bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border border-[#202840] rounded-3xl p-4 max-h-[800px] flex flex-col">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#202840]">
            <span className="text-xs uppercase font-bold text-slate-400 font-mono tracking-wider flex items-center gap-2">
              <ListFilter className="h-4 w-4 text-[#ffd43b]" />
              1-Click Topic Directory
            </span>
            <span className="text-[11px] font-mono text-slate-500">{filteredTopics.length} Loaded</span>
          </div>

          <div className="space-y-1.5 overflow-y-auto pr-1 flex-1 custom-scrollbar">
            {filteredTopics.map(topic => {
              const isActive = activeTopicId === topic.id;
              const isCompleted = completedTopicIds.has(topic.id);
              const isOpen = openCardIds.has(topic.id);

              return (
                <button
                  key={topic.id}
                  onClick={() => handleSelectTopic(topic.id, true)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between gap-3 cursor-pointer border group ${
                    isActive
                      ? 'bg-[#1f2842] text-white border-[#ffd43b]/40 shadow-[inset_3px_3px_6px_#0d101a,inset_-3px_-3px_6px_#232c46]'
                      : 'bg-[#121624]/60 text-slate-400 border-transparent hover:border-[#202840] hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <span className={`text-[11px] font-mono font-bold w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isActive ? 'bg-[#ffd43b] text-slate-900' : 'bg-[#1a2135] text-slate-400'
                    }`}>
                      {topic.num}
                    </span>
                    <div className="truncate">
                      <div className="text-xs font-bold truncate group-hover:text-white">{topic.title}</div>
                      <div className="text-[10px] text-slate-500 truncate">{topic.categoryLabel}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTopicCompleted(topic.id);
                      }}
                      title={isCompleted ? "Completed" : "Mark as Completed"}
                      className="cursor-pointer p-0.5 hover:scale-110 transition-transform"
                    >
                      {isCompleted ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400 fill-emerald-400/20" />
                      ) : (
                        <Circle className="h-4 w-4 text-slate-600 hover:text-slate-400" />
                      )}
                    </span>
                    <ChevronRight className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-90 text-[#ffd43b]' : 'text-slate-600'}`} />
                  </div>
                </button>
              );
            })}

            {filteredTopics.length === 0 && (
              <div className="text-center py-10 text-slate-500 text-xs">
                No matching topics found for "{searchQuery}"
              </div>
            )}
          </div>
        </div>

        {/* MAIN CONTENT: EXPANDED TOPIC CARDS & DEEP BREAKDOWN (8 COLUMNS) */}
        <div className="lg:col-span-8 space-y-6">
          {filteredTopics.map(topic => {
            const isOpen = openCardIds.has(topic.id);
            const isCompleted = completedTopicIds.has(topic.id);
            const isActive = activeTopicId === topic.id;

            return (
              <div 
                key={topic.id}
                id={`card-${topic.id}`}
                className={`bg-[#181e30] shadow-[8px_8px_16px_#0d101a,-8px_-8px_16px_#232c46] border rounded-3xl overflow-hidden transition-all duration-300 scroll-mt-28 ${
                  isActive 
                    ? 'border-[#ffd43b]/60 ring-1 ring-[#ffd43b]/20' 
                    : 'border-[#202840]'
                }`}
              >
                {/* CARD HEADER (Click to toggle / Auto open) */}
                <div 
                  onClick={() => toggleCardOpen(topic.id)}
                  className="p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors border-b border-[#202840]/60"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-[#ffd43b] font-mono font-bold text-sm flex items-center justify-center shadow-inner">
                      #{topic.num}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold text-indigo-400 font-mono tracking-wider">{topic.categoryLabel}</span>
                        {isCompleted && (
                          <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full font-bold border border-emerald-500/30 flex items-center gap-1">
                            <Check className="h-3 w-3" /> Done
                          </span>
                        )}
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white mt-0.5">{topic.title}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTopicCompleted(topic.id);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                        isCompleted
                          ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                          : 'bg-[#121624] border-[#202840] text-slate-400 hover:text-white'
                      }`}
                    >
                      {isCompleted ? <CheckCircle className="h-3.5 w-3.5" /> : <Circle className="h-3.5 w-3.5" />}
                      <span>{isCompleted ? 'Completed' : 'Mark Done'}</span>
                    </button>

                    <div className={`p-2 rounded-xl bg-[#121624] border border-[#202840] text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#ffd43b]' : ''}`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* EXPANDABLE BODY */}
                {isOpen && (
                  <div className="p-5 md:p-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-200">
                    
                    {/* DUAL CONCEPTUAL BLUEPRINT (Simple Bangla vs Technical English) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Simple Concept */}
                      <div className="bg-[#121624] p-4 rounded-2xl border-l-4 border-indigo-500 border border-[#202840] shadow-inner space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase font-mono tracking-wider">
                          <Lightbulb className="h-4 w-4 text-indigo-400" />
                          Core Conceptual Intuition & Real-World Analogy
                        </div>
                        <p className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-line font-sans">
                          {topic.conceptSimple}
                        </p>
                      </div>

                      {/* Technical Deep Dive */}
                      <div className="bg-[#121624] p-4 rounded-2xl border-l-4 border-purple-500 border border-[#202840] shadow-inner space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase font-mono tracking-wider">
                          <Cpu className="h-4 w-4 text-purple-400" />
                          Technical Deep-Dive (Engineering View)
                        </div>
                        <p className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-line font-mono">
                          {topic.conceptTechnical}
                        </p>
                      </div>
                    </div>

                    {/* FULL CODE EXAMPLE BOX */}
                    <div className="bg-[#10131f] rounded-2xl border border-[#202840] overflow-hidden shadow-2xl">
                      <div className="bg-[#161c2d] px-4 py-2.5 border-b border-[#202840] flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-300 font-bold flex items-center gap-2">
                          <Terminal className="h-3.5 w-3.5 text-[#ffd43b]" />
                          Python Code Master Demonstration — Module #{topic.num}
                        </span>

                        <div className="flex items-center gap-2">
                          {onRunCodeInPlayground && (
                            <button
                              onClick={() => {
                                onRunCodeInPlayground(topic.exampleCode);
                                triggerToast("🚀 Code loaded into Explain AI Sandbox!");
                              }}
                              className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-all"
                            >
                              <Play className="h-3 w-3 fill-current" /> Run in Sandbox
                            </button>
                          )}
                          <button
                            onClick={() => handleCopy(topic.exampleCode, `main-${topic.id}`)}
                            className="px-2.5 py-1 rounded-lg bg-[#121624] text-slate-400 hover:text-white border border-[#202840] text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-all"
                          >
                            {copiedCodeKey === `main-${topic.id}` ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-400" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" /> Copy
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <pre translate="no" className="p-4 text-xs font-mono text-emerald-400/90 overflow-x-auto leading-relaxed bg-[#0c0e17]">
                        <code translate="no">{topic.exampleCode}</code>
                      </pre>
                    </div>

                    {/* EXPECTED OUTPUT TERMINAL */}
                    <div className="bg-[#0b0e17] rounded-xl border border-[#202840] p-4 font-mono text-xs space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                        <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                        Expected Execution Output:
                      </div>
                      <pre translate="no" className="text-cyan-300 font-mono whitespace-pre-wrap leading-relaxed">
                        {topic.expectedOutput}
                      </pre>
                    </div>

                    {/* GRANULAR SUBTOPICS ENCYCLOPEDIA */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-400 flex items-center gap-2">
                        <FolderOpen className="h-4 w-4 text-[#ffd43b]" />
                        Granular Topics & Syntax Reference
                      </h4>

                      <div className="grid grid-cols-1 gap-3">
                        {topic.subtopics.map((sub, sIdx) => (
                          <div key={sIdx} className="bg-[#121624] border border-[#202840] rounded-xl p-3.5 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd43b]" />
                                {sub.name}
                              </span>
                              {sub.code && (
                                <button
                                  onClick={() => handleCopy(sub.code!, `sub-${topic.id}-${sIdx}`)}
                                  className="text-[10px] text-slate-500 hover:text-slate-300 flex items-center gap-1 font-mono cursor-pointer"
                                >
                                  {copiedCodeKey === `sub-${topic.id}-${sIdx}` ? (
                                    <span className="text-emerald-400">Copied ✓</span>
                                  ) : (
                                    <>
                                      <Copy className="h-2.5 w-2.5" /> Copy Snippet
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed">
                              {sub.desc}
                            </p>
                            {sub.code && (
                              <pre translate="no" className="bg-[#090b12] p-2.5 rounded-lg border border-[#1b2236] text-[11px] font-mono text-emerald-400/90 overflow-x-auto">
                                <code translate="no">{sub.code}</code>
                              </pre>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* HANDS-ON PRACTICE TASK */}
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-start gap-3">
                      <Dumbbell className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-amber-400 uppercase font-mono tracking-wider">
                          🎯 Hands-On Mastery Challenge
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {topic.practiceTask}
                        </p>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
