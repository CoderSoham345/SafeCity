import { phase1Prd } from '../data/phase1Data';
import { FileText, Target, Users, Cpu, Layers } from 'lucide-react';

export function PrdOverview() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Product Requirement Document (PRD) — Phase 1</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white mb-4">
            {phase1Prd.appName}
          </h2>
          <p className="text-lg text-slate-300 font-medium mb-6">
            {phase1Prd.tagline}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-700/80">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Target Audience</span>
              <p className="text-sm text-slate-200 mt-1 font-medium">{phase1Prd.targetAudience}</p>
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Architecture Standard</span>
              <p className="text-sm text-slate-200 mt-1 font-medium">Clean Architecture + MVVM + Hilt + Jetpack Compose</p>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-md">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
          <Target className="w-5 h-5 text-amber-400" />
          <span>Executive Summary</span>
        </h3>
        <p className="text-slate-300 leading-relaxed text-base">
          {phase1Prd.executiveSummary}
        </p>
      </div>

      {/* Core Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-md">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span>Core Objectives & AI Integration</span>
          </h3>
          <ul className="space-y-3">
            {phase1Prd.coreObjectives.map((obj, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-slate-300 text-sm">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  {idx + 1}
                </span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-md">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <Layers className="w-5 h-5 text-rose-400" />
            <span>Technology Stack Specification</span>
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              "Kotlin 2.0+", "Jetpack Compose", "Material Design 3", "MVVM & Clean Arch",
              "Hilt (DI)", "Firebase Auth & Firestore", "FCM Push Notifications", "Room Database",
              "Google Maps SDK", "CameraX & ML Kit", "Gemini 2.5 Flash API", "Coroutines & StateFlow"
            ].map((tech, i) => (
              <div key={i} className="bg-slate-800/80 border border-slate-700/60 rounded-xl px-3 py-2 text-slate-200 font-medium text-xs flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
