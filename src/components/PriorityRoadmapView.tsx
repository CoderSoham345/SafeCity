import { priorityRoadmapData } from '../data/auditData';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface PriorityRoadmapViewProps {
  onSelectFeature?: (featureId: string) => void;
}

export function PriorityRoadmapView({}: PriorityRoadmapViewProps) {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Priority Roadmap (P1 to P5)</h2>
            <p className="text-slate-400 text-sm">Structured implementation roadmap based on Google Staff Android engineering review.</p>
          </div>
        </div>

        <div className="space-y-6 mt-6">
          {priorityRoadmapData.map((phase) => {
            const isP1 = phase.priority === 1;
            const isP2 = phase.priority === 2;
            return (
              <div key={phase.priority} className={`border rounded-2xl p-6 transition-all ${
                isP1 ? 'bg-rose-500/10 border-rose-500/30 shadow-lg shadow-rose-500/5' :
                isP2 ? 'bg-amber-500/10 border-amber-500/30 shadow-lg shadow-amber-500/5' :
                'bg-slate-800/60 border-slate-700/60'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-3">
                    <span className={`w-8 h-8 rounded-xl font-bold text-sm flex items-center justify-center ${
                      isP1 ? 'bg-rose-500 text-white' :
                      isP2 ? 'bg-amber-500 text-slate-950' :
                      'bg-slate-700 text-slate-200'
                    }`}>
                      P{phase.priority}
                    </span>
                    <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                  </div>
                  <span className="text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-xl border border-slate-700 font-medium">
                    {phase.focus}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {phase.items.map((item, i) => (
                    <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action banner */}
        <div className="mt-8 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 rounded-3xl p-6 sm:p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Ready to Implement Priority 1 Features?</h3>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-6">
            We can now proceed to improve and write production-grade Kotlin & Jetpack Compose code for Priority 1 (Foreground SOS Service & Server-Side Gemini API Proxy).
          </p>
          <button
            onClick={() => alert("Initiating Priority 1 implementation: Foreground SOS Service & Gemini Proxy integration.")}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 px-8 py-3.5 rounded-2xl font-bold shadow-xl shadow-amber-500/20 hover:scale-105 transition-transform"
          >
            <span>Start Priority 1 Implementation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
