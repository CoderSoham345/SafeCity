import { ShieldCheck, Sparkles, Building2, MapPin, Globe } from 'lucide-react';
import { Language } from '../data/mockComplaints';

interface HeaderProps {
  language: Language;
  onOpenLanguageModal: () => void;
}

export function Header({ language, onOpenLanguageModal }: HeaderProps) {
  const languageLabels: Record<Language, string> = {
    en: 'English',
    hi: 'हिन्दी',
    mr: 'मराठी'
  };

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold tracking-tight text-white">SafeCity Mumbai AI</h1>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2 py-0.5 rounded-full font-medium">
                  Kotlin & Compose App Hub
                </span>
              </div>
              <p className="text-xs text-slate-400">AI-Powered Smart Civic Reporting & Emergency Response Platform</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href="https://portal.mcgm.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors"
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>BMC Portal</span>
              </a>
              <a
                href="https://mumbaipolice.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Police Portal</span>
              </a>
            </div>

            <button
              onClick={onOpenLanguageModal}
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-3.5 py-2 rounded-xl border border-slate-700 text-xs font-semibold transition-colors"
            >
              <Globe className="w-4 h-4 text-amber-400" />
              <span>{languageLabels[language]}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

