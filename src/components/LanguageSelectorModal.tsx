import { Language } from '../data/mockComplaints';
import { Globe, Check } from 'lucide-react';

interface LanguageSelectorModalProps {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function LanguageSelectorModal({ currentLanguage, setLanguage, isOpen, onClose }: LanguageSelectorModalProps) {
  if (!isOpen) return null;

  const languages: { id: Language; label: string; native: string }[] = [
    { id: 'en', label: 'English', native: 'English' },
    { id: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { id: 'mr', label: 'Marathi', native: 'मराठी' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-fadeIn">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Select Application Language</h3>
            <p className="text-xs text-slate-400">Values updated instantly across all screens via DataStore.</p>
          </div>
        </div>

        <div className="space-y-3">
          {languages.map((l) => {
            const isSelected = currentLanguage === l.id;
            return (
              <button
                key={l.id}
                onClick={() => { setLanguage(l.id); onClose(); }}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-amber-500/20 border-amber-500 text-white font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-semibold">{l.label}</span>
                  <span className="text-xs text-amber-400 font-medium">({l.native})</span>
                </div>
                {isSelected && <Check className="w-5 h-5 text-amber-400" />}
              </button>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="w-full bg-slate-800 text-white py-3 rounded-xl text-xs font-semibold hover:bg-slate-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
