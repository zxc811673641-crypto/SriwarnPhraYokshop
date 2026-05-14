import { useLanguage } from '../LanguageContext';
import { cn } from '../lib/utils';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white border border-stone-300 p-1 rounded-full shadow-sm">
      <button
        onClick={() => setLanguage('th')}
        className={cn(
          "px-3 py-1 rounded-full text-xs font-bold transition-all duration-300",
          language === 'th' 
            ? "text-gold" 
            : "text-stone-900 opacity-50 hover:opacity-100"
        )}
      >
        TH
      </button>
      <span className="text-stone-300">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          "px-3 py-1 rounded-full text-xs font-bold transition-all duration-300",
          language === 'en' 
            ? "text-gold" 
            : "text-stone-900 opacity-50 hover:opacity-100"
        )}
      >
        EN
      </button>
    </div>
  );
}
