import React, { useState, useEffect, useRef } from 'react';
import { Globe, Check, Search, RotateCcw, ChevronDown, Sparkles } from 'lucide-react';

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir?: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English (US)', flag: '🇺🇸' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '简体中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', dir: 'rtl' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' }
];

interface LanguageSelectorProps {
  onLanguageChange?: (lang: LanguageOption) => void;
  triggerToast: (msg: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  onLanguageChange,
  triggerToast 
}) => {
  // First load default: English ('en')
  const [selectedLangCode, setSelectedLangCode] = useState<string>(() => {
    return localStorage.getItem('pymaster_user_language') || 'en';
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Active language object
  const currentLanguage = SUPPORTED_LANGUAGES.find(l => l.code === selectedLangCode) || SUPPORTED_LANGUAGES[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Set Google Translate cookie helper
  const setTranslateCookie = (langCode: string) => {
    const host = window.location.hostname;
    if (langCode === 'en') {
      // Clear cookie to revert to original English
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host}`;
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + host;
    } else {
      const date = new Date();
      date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); // 1 year
      const expires = `; expires=${date.toUTCString()}`;
      
      const cookieVal = `/en/${langCode}`;
      document.cookie = `googtrans=${cookieVal}; path=/${expires}`;
      document.cookie = `googtrans=${cookieVal}; path=/; domain=${host}${expires}`;
      document.cookie = `googtrans=${cookieVal}; path=/; domain=.${host}${expires}`;
    }
  };

  // Trigger Google Translate engine
  const triggerGoogleTranslateCombo = (langCode: string): boolean => {
    const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event('change', { bubbles: true }));
      selectEl.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    }
    return false;
  };

  // Main language switch handler
  const handleSelectLanguage = (lang: LanguageOption) => {
    setIsOpen(false);
    
    // Save to user's device (localStorage)
    localStorage.setItem('pymaster_user_language', lang.code);
    setSelectedLangCode(lang.code);
    setTranslateCookie(lang.code);

    triggerToast(`🌐 Language changed to ${lang.nativeName} (${lang.name}). Saved to device!`);

    if (onLanguageChange) {
      onLanguageChange(lang);
    }

    // Attempt live DOM translation via widget combo
    const triggered = triggerGoogleTranslateCombo(lang.code);
    
    if (!triggered) {
      // If the Google translate element isn't ready in DOM, reload to apply cookie
      setTimeout(() => {
        const retry = triggerGoogleTranslateCombo(lang.code);
        if (!retry) {
          window.location.reload();
        }
      }, 300);
    }
  };

  // Reset back to English default
  const handleResetToEnglish = () => {
    setIsOpen(false);
    localStorage.setItem('pymaster_user_language', 'en');
    setSelectedLangCode('en');
    setTranslateCookie('en');

    triggerToast("🇺🇸 Reverted to Default Language (English).");

    const triggered = triggerGoogleTranslateCombo('en');
    if (!triggered) {
      window.location.reload();
    } else {
      setTimeout(() => window.location.reload(), 150);
    }
  };

  const filteredLanguages = SUPPORTED_LANGUAGES.filter(l => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      l.name.toLowerCase().includes(q) ||
      l.nativeName.toLowerCase().includes(q) ||
      l.code.toLowerCase().includes(q)
    );
  });

  return (
    <div className="relative inline-block text-left notranslate" ref={dropdownRef}>
      {/* Main Trigger Button (Neumorphic Soft Raised) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-[#181e30] rounded-xl shadow-[3px_3px_6px_#0d101a,-3px_-3px_6px_#232c46] border border-[#202840] hover:border-cyan-500/40 text-xs font-semibold text-slate-200 transition cursor-pointer"
        title="Change Language"
      >
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="font-mono text-cyan-400 font-bold hidden sm:inline">{currentLanguage.nativeName}</span>
        <span className="font-mono text-cyan-400 font-bold sm:hidden uppercase">{currentLanguage.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-[#131826]/95 backdrop-blur-xl border border-[#202840] rounded-2xl shadow-[8px_8px_24px_#070a12] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#202840]/60">
            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 font-mono">
              <Globe className="w-3.5 h-3.5" />
              <span>Select Language</span>
            </div>
            {selectedLangCode !== 'en' && (
              <button
                onClick={handleResetToEnglish}
                className="text-[10px] font-mono text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition cursor-pointer"
                title="Reset to English default"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Search Filter */}
          <div className="relative mb-2">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search language..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-[#181e30] border border-[#202840] rounded-xl pl-8 pr-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
              autoFocus
            />
          </div>

          {/* Languages Scroll List */}
          <div className="max-h-60 overflow-y-auto space-y-1 custom-scrollbar pr-1">
            {filteredLanguages.map(lang => {
              const isSelected = lang.code === selectedLangCode;

              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelectLanguage(lang)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-inner'
                      : 'text-slate-300 hover:bg-[#1a2238] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{lang.flag}</span>
                    <div>
                      <div className="font-semibold">{lang.nativeName}</div>
                      <div className="text-[10px] text-slate-400">{lang.name}</div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
              );
            })}

            {filteredLanguages.length === 0 && (
              <div className="p-3 text-center text-xs text-slate-500 font-mono">
                No language matching "{searchQuery}"
              </div>
            )}
          </div>

          {/* Device Persistence Note */}
          <div className="mt-2 pt-2 border-t border-[#202840]/60 text-[10px] text-slate-400 text-center font-mono">
            💾 Selected language is automatically saved to your device.
          </div>
        </div>
      )}
    </div>
  );
};
