import { phase1Personas, phase1UserStories } from '../data/phase1Data';
import { UserCheck, BookOpen, AlertCircle } from 'lucide-react';

export function UserPersonasAndStories() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* User Personas */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center space-x-2">
          <UserCheck className="w-6 h-6 text-amber-400" />
          <span>User Personas</span>
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          Representative user profiles guiding UX/UI design decisions and feature prioritizations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phase1Personas.map((persona) => (
            <div key={persona.id} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{persona.name}</h3>
                    <p className="text-xs text-amber-400 font-medium">{persona.role}</p>
                  </div>
                  <span className="bg-slate-900 text-slate-300 text-xs px-2.5 py-1 rounded-full border border-slate-700">
                    Age {persona.age}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-4 flex items-center space-x-1">
                  <span>📍 {persona.location}</span>
                </p>
                <p className="text-sm text-slate-300 mb-4 italic">"{persona.bio}"</p>

                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Goals</span>
                    <ul className="list-disc list-inside text-xs text-slate-300 mt-1 space-y-1">
                      {persona.goals.map((g, i) => <li key={i}>{g}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Pain Points</span>
                    <ul className="list-disc list-inside text-xs text-slate-300 mt-1 space-y-1">
                      {persona.painPoints.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/50 flex justify-between items-center text-xs">
                <span className="text-slate-400">Tech Savviness:</span>
                <span className="font-semibold text-cyan-400">{persona.techSavviness}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Stories */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center space-x-2">
          <BookOpen className="w-6 h-6 text-cyan-400" />
          <span>Agile User Stories & Acceptance Criteria</span>
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          Detailed functional requirements structured for Android sprint execution.
        </p>

        <div className="space-y-4">
          {phase1UserStories.map((story) => (
            <div key={story.id} className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center space-x-3">
                  <span className="bg-slate-900 text-amber-400 border border-slate-700 text-xs px-3 py-1 rounded-xl font-mono font-bold">
                    {story.id}
                  </span>
                  <span className="text-xs bg-slate-700/50 text-slate-300 px-3 py-1 rounded-xl font-medium">
                    Epic: {story.epic}
                  </span>
                </div>
                <span className={`text-xs px-3 py-1 rounded-xl font-semibold ${
                  story.priority === 'High' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                }`}>
                  Priority: {story.priority}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2">{story.title}</h3>
              <p className="text-sm text-slate-300 mb-4 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                <span className="font-semibold text-amber-400">As a</span> {story.asA}, <span className="font-semibold text-amber-400">I want</span> {story.iWant}, <span className="font-semibold text-amber-400">So that</span> {story.soThat}.
              </p>

              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Acceptance Criteria</span>
                <ul className="space-y-1.5">
                  {story.acceptanceCriteria.map((ac, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                      <AlertCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{ac}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
