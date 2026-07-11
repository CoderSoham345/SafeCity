import { LayoutDashboard, Users, TrendingUp, CheckCircle2, Clock, Sparkles, Building2 } from 'lucide-react';

export function AdminDashboardScreen() {
  const wardStats = [
    { ward: 'K-West (Andheri West)', complaints: 342, resolved: 310, sla: '90.6%', officer: 'Rajesh Kadam' },
    { ward: 'H-West (Bandra West)', complaints: 289, resolved: 270, sla: '93.4%', officer: 'Sunita Shinde' },
    { ward: 'A-Ward (Colaba / Fort)', complaints: 198, resolved: 185, sla: '93.9%', officer: 'Vikram Sawant' },
    { ward: 'G-North (Dadar / Mahim)', complaints: 412, resolved: 350, sla: '84.9%', officer: 'Prakash Parab' },
    { ward: 'L-Ward (Kurla)', complaints: 524, resolved: 440, sla: '83.9%', officer: 'Anil Shirsat' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-semibold mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>BMC & Police Authority Command Center</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Ward Analytics & Resolution Command</h2>
            <p className="text-slate-400 text-sm mt-1">Real-time municipal performance metrics, department SLA tracking, and AI triage insights.</p>
          </div>

          <div className="bg-slate-800 px-4 py-2.5 rounded-2xl border border-slate-700 text-xs text-slate-300 flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Server Sync: Active (Firestore Realtime)</span>
          </div>
        </div>

        {/* Stats Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total Complaints (30 Days)</span>
            <div className="text-3xl font-black text-white mt-2 font-mono">12,480</div>
            <span className="text-xs text-emerald-400 mt-1 inline-block">↑ 14% resolved faster than last month</span>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Average Resolution SLA</span>
            <div className="text-3xl font-black text-cyan-400 mt-2 font-mono">38 Hours</div>
            <span className="text-xs text-slate-400 mt-1 inline-block">Target SLA: 48 Hours</span>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Gemini AI Triage Accuracy</span>
            <div className="text-3xl font-black text-amber-400 mt-2 font-mono">98.4%</div>
            <span className="text-xs text-emerald-400 mt-1 inline-block">Zero spam filtering rate</span>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Active Field Crews</span>
            <div className="text-3xl font-black text-purple-400 mt-2 font-mono">142 Teams</div>
            <span className="text-xs text-slate-400 mt-1 inline-block">Deployed across 24 wards</span>
          </div>
        </div>

        {/* Ward Performance Table */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Ward-wise Grievance Resolution & SLA Performance</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="pb-3 font-semibold">BMC Ward</th>
                  <th className="pb-3 font-semibold">Ward Officer</th>
                  <th className="pb-3 font-semibold">Total Complaints</th>
                  <th className="pb-3 font-semibold">Resolved</th>
                  <th className="pb-3 font-semibold">SLA Compliance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900 text-slate-300">
                {wardStats.map((w, i) => (
                  <tr key={i} className="hover:bg-slate-900/40">
                    <td className="py-3 font-bold text-white">{w.ward}</td>
                    <td className="py-3 text-slate-300">{w.officer}</td>
                    <td className="py-3 font-mono text-cyan-300">{w.complaints}</td>
                    <td className="py-3 font-mono text-emerald-300">{w.resolved}</td>
                    <td className="py-3 font-mono font-bold text-amber-400">{w.sla}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
