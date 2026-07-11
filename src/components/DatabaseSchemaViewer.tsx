import { phase1DatabaseDesign } from '../data/phase1Data';
import { Database, Table, Key } from 'lucide-react';

export function DatabaseSchemaViewer() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center space-x-2">
          <Database className="w-6 h-6 text-amber-400" />
          <span>Firestore & Room Database Schema Design</span>
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          Complete production-ready NoSQL collection architecture for Firestore paired with offline Room caching entities.
        </p>

        <div className="space-y-6">
          {phase1DatabaseDesign.map((col, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                    <Table className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">collection('{col.name}')</h3>
                    <p className="text-xs text-slate-400">{col.description}</p>
                  </div>
                </div>
                <span className="bg-slate-900 text-amber-400 border border-slate-700 text-xs px-3 py-1 rounded-xl font-medium">
                  Security: {col.securityRulesSummary}
                </span>
              </div>

              <div className="overflow-x-auto mt-4">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-700 text-slate-400">
                      <th className="pb-2 font-semibold">Field Name</th>
                      <th className="pb-2 font-semibold">Data Type</th>
                      <th className="pb-2 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {col.fields.map((field, fIdx) => (
                      <tr key={fIdx} className="hover:bg-slate-800/40">
                        <td className="py-2.5 font-mono text-amber-300 flex items-center space-x-1.5">
                          {field.type.includes('PK') || field.type.includes('FK') ? (
                            <Key className="w-3 h-3 text-amber-400 shrink-0" />
                          ) : null}
                          <span>{field.name}</span>
                        </td>
                        <td className="py-2.5 font-mono text-cyan-300">{field.type}</td>
                        <td className="py-2.5 text-slate-300">{field.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
