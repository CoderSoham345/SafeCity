import { useState } from 'react';
import { auditReportData, AuditItem } from '../data/auditData';
import { AlertTriangle, ShieldAlert, CheckCircle2, Search, Code, Wrench } from 'lucide-react';

export function AuditReportView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Missing Features', 'Missing Screens', 'Missing Navigation', 'Missing Database Collections', 'Missing API Integrations', 'Missing Firebase Features', 'Missing AI Features', 'Missing Permissions', 'Missing Error Handling', 'Missing Loading States', 'Missing Empty States', 'Missing Accessibility', 'Missing Security', 'Missing Performance', 'Missing Offline Support', 'Missing Notifications', 'Missing Animations', 'Missing Testing', 'Missing Documentation', 'Missing Play Store Requirements'];
  const severities = ['All', 'Critical', 'High', 'Medium', 'Low'];

  const filteredItems = auditReportData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSeverity = selectedSeverity === 'All' || item.severity === selectedSeverity;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.auditFinding.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSeverity && matchesSearch;
  });

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'Critical': return <span className="bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs px-2.5 py-1 rounded-full font-bold">Critical</span>;
      case 'High': return <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs px-2.5 py-1 rounded-full font-semibold">High</span>;
      case 'Medium': return <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs px-2.5 py-1 rounded-full font-medium">Medium</span>;
      case 'Low': return <span className="bg-slate-700/60 text-slate-300 border border-slate-600 text-xs px-2.5 py-1 rounded-full">Low</span>;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold mb-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Google Staff Android Engineer 20-Point Audit Report</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Project Architecture & Gap Analysis</h2>
            <p className="text-slate-400 text-sm mt-1">Rigorous inspection covering architecture, security, AI pipelines, offline sync, and Play Store readiness.</p>
          </div>

          <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2.5 rounded-2xl border border-slate-700 text-xs text-slate-300">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>20 Audited Areas Analyzed</span>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search audit items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
            >
              <option value="All">All Severities</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Audit Items List */}
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 transition-all hover:border-slate-600">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center space-x-3">
                  <span className="bg-slate-900 text-amber-400 border border-slate-700 text-xs px-2.5 py-1 rounded-xl font-mono font-bold">
                    #{item.id}
                  </span>
                  <span className="text-xs bg-slate-700/60 text-slate-300 px-3 py-1 rounded-xl font-medium">
                    {item.category}
                  </span>
                </div>
                {getSeverityBadge(item.severity)}
              </div>

              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-rose-500/20">
                  <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider block mb-1">Audit Finding</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.auditFinding}</p>
                </div>
                <div className="bg-slate-900/80 p-4 rounded-xl border border-emerald-500/20">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Engineering Remediation</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.engineeringRemediation}</p>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-[11px] text-cyan-300 overflow-x-auto">
                <div className="flex items-center space-x-1.5 text-slate-500 mb-2">
                  <Code className="w-3.5 h-3.5" />
                  <span>Kotlin / Gradle Architecture Snippet</span>
                </div>
                <pre className="whitespace-pre-wrap">{item.codeSnippet}</pre>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              No audit items found matching your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
