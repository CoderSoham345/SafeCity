import { phase1Features } from '../data/phase1Data';
import { ShieldAlert, Sparkles, Radio, HeartPulse, CloudRain, Users, LayoutDashboard, CheckCircle2 } from 'lucide-react';

export function FeatureList() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-rose-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Radio': return <Radio className="w-6 h-6 text-cyan-400" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-pink-400" />;
      case 'CloudRain': return <CloudRain className="w-6 h-6 text-blue-400" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-400" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-6 h-6 text-purple-400" />;
      default: return <ShieldAlert className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-2">Feature Specification Matrix</h2>
        <p className="text-slate-400 text-sm mb-6">
          Comprehensive breakdown of all 7 core modules requested for SafeCity Mumbai AI, engineered for high reliability and sub-second response times.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phase1Features.map((feat) => (
            <div key={feat.id} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-600 transition-all">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-inner">
                    {getIcon(feat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                    <span className="text-xs text-amber-400 font-medium">Module ID: {feat.id}</span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{feat.description}</p>
                
                <div className="space-y-2 mb-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Capabilities</span>
                  <ul className="space-y-1.5">
                    {feat.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/50 flex flex-wrap gap-1.5">
                {feat.techStack.map((tech, i) => (
                  <span key={i} className="bg-slate-900 text-slate-300 text-[11px] px-2.5 py-1 rounded-lg border border-slate-700 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
