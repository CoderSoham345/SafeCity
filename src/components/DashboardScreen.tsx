import { mockComplaints } from '../data/mockComplaints';
import { Language, translations } from '../data/mockComplaints';
import { LayoutDashboard, CloudRain, AlertTriangle, ShieldAlert, Award, Star, TrendingUp, CheckCircle2, Clock } from 'lucide-react';

interface DashboardScreenProps {
  language: Language;
  setActiveTab: (tab: string) => void;
}

export function DashboardScreen({ language, setActiveTab }: DashboardScreenProps) {
  const t = translations[language];

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      {/* Top Welcome & Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Civic Score</span>
            <Award className="w-5 h-5 text-amber-400" />
          </div>
          <div className="my-4">
            <div className="text-3xl font-black text-white font-mono">1,450 Pt</div>
            <p className="text-xs text-slate-300 mt-1">Badge: <span className="text-amber-400 font-bold">Ward Guardian</span></p>
          </div>
          <span className="text-[10px] text-slate-400">Ranked #14 in K-West Ward</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">My Reports</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="my-4">
            <div className="text-3xl font-black text-white font-mono">8 Submitted</div>
            <p className="text-xs text-emerald-400 mt-1">6 Resolved by BMC</p>
          </div>
          <span className="text-[10px] text-slate-400">Avg Resolution: 3.2 Days</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Monsoon Status</span>
            <CloudRain className="w-5 h-5 text-blue-400" />
          </div>
          <div className="my-4">
            <div className="text-xl font-bold text-amber-400">Orange Alert</div>
            <p className="text-xs text-slate-300 mt-1">High Tide expected at 2:45 PM</p>
          </div>
          <span className="text-[10px] text-slate-400">Hindmata Pump Station Active</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Emergency SOS</span>
            <ShieldAlert className="w-5 h-5 text-rose-400" />
          </div>
          <div className="my-4">
            <div className="text-xl font-bold text-emerald-400">System Ready</div>
            <p className="text-xs text-slate-300 mt-1">3 Contacts Linked</p>
          </div>
          <button
            onClick={() => setActiveTab('emergency')}
            className="text-[11px] bg-rose-500/20 text-rose-300 py-1.5 px-3 rounded-xl border border-rose-500/30 font-bold hover:bg-rose-500/30 transition-colors"
          >
            Open Emergency Hub
          </button>
        </div>
      </div>

      {/* Active Disaster & Weather Advisories */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/30 rounded-3xl p-6 sm:p-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Active Mumbai Monsoon & Traffic Advisories</h3>
            <span className="text-xs text-blue-300">Updated 5 minutes ago by BMC Disaster Management Cell</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <span className="text-xs font-bold text-amber-400 block mb-1">⚠️ Waterlogging Warning</span>
            <p className="text-xs text-slate-300">Hindmata Junction and Milan Subway reporting minor water accumulation. Avoid low-lying underpasses.</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <span className="text-xs font-bold text-rose-400 block mb-1">🌊 High Tide Alert</span>
            <p className="text-xs text-slate-300">Arabian Sea high tide of 4.51 meters expected at 2:45 PM. Marine Drive promenade restricted.</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <span className="text-xs font-bold text-emerald-400 block mb-1">🚇 Local Train Status</span>
            <p className="text-xs text-slate-300">Western, Central, and Harbour lines running with minor 5-10 minute delays due to drizzle.</p>
          </div>
        </div>
      </div>

      {/* Nearby Community Complaints Feed */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Nearby Ward Complaints & Community Feed</h3>
          <button
            onClick={() => setActiveTab('map')}
            className="text-xs bg-amber-500 text-slate-950 px-4 py-2 rounded-xl font-bold shadow-md hover:bg-amber-400"
          >
            View Live Map
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockComplaints.map((c) => (
            <div key={c.id} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-slate-900 text-amber-400 border border-slate-700 text-xs px-2.5 py-1 rounded-xl font-mono font-bold">
                    {c.id}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    c.severity === 'Critical' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {c.severity}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1">{c.category}: {c.subCategory}</h4>
                <p className="text-xs text-slate-400 mb-3">📍 {c.address}</p>

                {c.imageUrl && (
                  <div className="rounded-xl overflow-hidden h-36 mb-3 border border-slate-700">
                    <img src={c.imageUrl} alt={c.category} className="w-full h-full object-cover" />
                  </div>
                )}

                <p className="text-xs text-slate-300 leading-relaxed mb-4">{c.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex justify-between items-center text-xs">
                <span className="text-slate-400">Upvotes: <strong className="text-amber-400">{c.upvotes}</strong></span>
                <span className="bg-slate-900 text-cyan-300 px-2.5 py-1 rounded-lg border border-slate-700 font-mono text-[11px]">
                  {c.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
