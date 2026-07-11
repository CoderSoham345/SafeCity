import { phase1Roadmap } from '../data/phase1Data';
import { Milestone, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

interface RoadmapViewerProps {
  onApprovePhase2: () => void;
}

export function RoadmapViewer({ onApprovePhase2 }: RoadmapViewerProps) {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center space-x-2">
          <Milestone className="w-6 h-6 text-amber-400" />
          <span>Development Roadmap & Phase 2 Transition</span>
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          12-week comprehensive implementation timeline from architectural design to Google Play Store production release and BMC pilot.
        </p>

        <div className="space-y-6">
          {phase1Roadmap.map((phase) => {
            const isCompleted = phase.status === 'Completed';
            return (
              <div key={phase.phase} className={`border rounded-2xl p-6 transition-all ${
                isCompleted ? 'bg-slate-800/40 border-emerald-500/30' : 'bg-slate-800/80 border-amber-500/40 shadow-lg'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${
                      isCompleted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {phase.phase}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Phase {phase.phase}: {phase.title}</h3>
                      <span className="text-xs text-slate-400 font-medium">Duration: {phase.duration}</span>
                    </div>
                  </div>
                  <span className={`inline-flex items-center space-x-1.5 text-xs px-3 py-1 rounded-full font-semibold ${
                    isCompleted ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-pulse'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                    <span>{phase.status}</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {phase.deliverables.map((del, i) => (
                    <div key={i} className="bg-slate-900 border border-slate-700/60 rounded-xl p-3 text-xs text-slate-200 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Phase 2 Approval CTA */}
        <div className="mt-8 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 rounded-3xl p-6 sm:p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Ready to Proceed to Phase 2?</h3>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-6">
            Phase 1 (PRD, Feature List, Personas, Stories, Screen Flow, Database Design, API Architecture, Folder Structure, Roadmap) is complete. Click below to approve and initiate Phase 2 development.
          </p>
          <button
            onClick={onApprovePhase2}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 px-8 py-3.5 rounded-2xl font-bold shadow-xl shadow-amber-500/20 hover:scale-105 transition-transform"
          >
            <span>Approve & Start Phase 2 Implementation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
