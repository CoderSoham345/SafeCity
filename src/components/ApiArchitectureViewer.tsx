import { Network, Server, Cpu, Bell } from 'lucide-react';

export function ApiArchitectureViewer() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center space-x-2">
          <Network className="w-6 h-6 text-amber-400" />
          <span>API Architecture & Gemini AI Integration</span>
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          Architectural blueprint governing Retrofit REST services, Firebase Cloud Messaging, and Gemini 2.5 Flash multimodal AI triage pipelines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gemini AI Integration */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Gemini 2.5 Flash Multimodal Pipeline</h3>
                <span className="text-xs text-slate-400">Client/Server AI Triage</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              When a citizen submits a civic complaint photo and voice description, SafeCity Mumbai AI packages the payload into a structured prompt sent securely via server-side API proxy to Gemini API.
            </p>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-700/80 font-mono text-[11px] text-cyan-300 space-y-1">
              <p className="text-slate-500">// AI Triage Response Schema</p>
              <p>{"{"}</p>
              <p className="pl-4">"category": "Pothole",</p>
              <p className="pl-4">"severity": "Critical",</p>
              <p className="pl-4">"department": "BMC Roads & Traffic Dept",</p>
              <p className="pl-4">"urgencyScore": 92,</p>
              <p className="pl-4">"summary": "Large crater near Andheri West junction posing vehicle hazard."</p>
              <p>{"}"}</p>
            </div>
          </div>

          {/* FCM & Push Notifications */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                <Bell className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Firebase Cloud Messaging (FCM)</h3>
                <span className="text-xs text-slate-400">Real-time Citizen & Authority Alerts</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              FCM topics and targeted device tokens manage real-time push notifications for complaint status transitions (Submitted → Assigned → Resolved) and emergency flood advisories.
            </p>
            <div className="space-y-2">
              {[
                "Topic: 'ward_k_west' for localized BMC announcements",
                "Topic: 'disaster_mumbai' for Red Alert heavy rain warnings",
                "Direct Token: Individual status updates for citizen reporters"
              ].map((item, i) => (
                <div key={i} className="bg-slate-900 border border-slate-700/60 rounded-xl px-3 py-2 text-xs text-slate-200 flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Retrofit & Location Services */}
        <div className="mt-6 bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
              <Server className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Retrofit REST & Google Location Services API</h3>
              <span className="text-xs text-slate-400">Geospatial & Municipal Integration Layer</span>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            FusedLocationProviderClient continuously samples high-accuracy GPS coordinates during emergency SOS sessions and complaint geotagging. Retrofit interfaces handle secure communication with BMC municipal servers and Firebase REST endpoints.
          </p>
        </div>
      </div>
    </div>
  );
}
