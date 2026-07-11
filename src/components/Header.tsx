import { ShieldCheck, Sparkles, Building2, MapPin } from 'lucide-react';

export function Header() {
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
                  Phase 1 Approved / Specification Hub
                </span>
              </div>
              <p className="text-xs text-slate-400">AI-Powered Smart Civic Reporting & Emergency Response Platform</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs text-slate-300 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700/50">
            <div className="flex items-center space-x-1.5">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>BMC & Mumbai Police</span>
            </div>
            <div className="w-px h-4 bg-slate-700" />
            <div className="flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Gemini 2.5 Flash AI</span>
            </div>
            <div className="w-px h-4 bg-slate-700" />
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>Mumbai Metropolitan Region</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
