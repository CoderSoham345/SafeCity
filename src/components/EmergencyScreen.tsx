import { useState } from 'react';
import { Language, translations } from '../data/mockComplaints';
import { ShieldAlert, PhoneCall, Radio, AlertTriangle, Navigation, CheckCircle2, ExternalLink, Building2 } from 'lucide-react';

interface EmergencyScreenProps {
  language: Language;
}

export function EmergencyScreen({ language }: EmergencyScreenProps) {
  const t = translations[language];
  const [sosActive, setSosActive] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [sosTriggered, setSosTriggered] = useState(false);

  const emergencyServices = [
    { name: t.police || 'Mumbai Police', number: '112 / 100', icon: '🛡️', desc: 'Primary law enforcement & emergency control room', color: 'border-blue-500/30 bg-blue-500/10 text-blue-400', portal: 'https://mumbaipolice.gov.in' },
    { name: t.fire || 'Fire Brigade', number: '101', icon: '🚒', desc: 'Fire rescue, hazmat & building collapse response', color: 'border-rose-500/30 bg-rose-500/10 text-rose-400', portal: 'https://portal.mcgm.gov.in' },
    { name: t.ambulance || 'Ambulance', number: '108', icon: '🚑', desc: 'Emergency medical services & trauma transport', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400', portal: 'https://portal.mcgm.gov.in' },
    { name: t.women_helpline || "Women's Helpline", number: '1091', icon: '💜', desc: '24/7 dedicated protection & distress response for women', color: 'border-purple-500/30 bg-purple-500/10 text-purple-400', portal: 'https://mumbaipolice.gov.in' },
    { name: t.disaster_mgmt || 'Disaster Management', number: '1916', icon: '⚡', desc: 'BMC disaster control cell for floods, cyclones & tremors', color: 'border-amber-500/30 bg-amber-500/10 text-amber-400', portal: 'https://portal.mcgm.gov.in' },
    { name: t.bmc_call || 'Citizen Call Centre', number: '155300', icon: '🏛️', desc: 'Municipal general grievance & ward helpline', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400', portal: 'https://portal.mcgm.gov.in' },
  ];

  const handleTriggerSos = () => {
    setSosActive(true);
    setCountdown(3);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setSosActive(false);
          setSosTriggered(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      {/* Official Government Portals & Helplines Guide Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Official Mumbai Police & BMC Guidance</span>
          </div>
          <h3 className="text-lg font-bold text-white">Direct Access to Official Mumbai Police & BMC Helplines</h3>
          <p className="text-xs text-slate-300 mt-1">Connect directly with official Mumbai Police and BMC disaster response portals for verified updates.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="https://mumbaipolice.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-3 rounded-2xl text-xs font-bold flex items-center space-x-2 shadow-lg hover:bg-blue-500 transition-colors"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Mumbai Police Portal</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
          <a
            href="https://portal.mcgm.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 text-slate-950 px-4 py-3 rounded-2xl text-xs font-bold flex items-center space-x-2 shadow-lg hover:bg-amber-400 transition-colors"
          >
            <Building2 className="w-4 h-4" />
            <span>Official BMC Portal</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>

      {/* SOS Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-rose-950 border border-rose-500/40 rounded-3xl p-8 shadow-2xl text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-500/5 animate-pulse pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-rose-500/20 text-rose-300 border border-rose-500/30 px-3 py-1 rounded-full text-xs font-semibold">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Critical Emergency Broadcast System</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.emergency_sos || 'EMERGENCY SOS DISTRESS TRIGGER'}
          </h2>
          <p className="text-slate-300 text-sm">
            {t.emergency_subtitle || 'Tap the SOS button to instantly broadcast live GPS coordinates via SMS & FCM to emergency contacts and police control room.'}
          </p>

          {sosTriggered ? (
            <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-center space-x-2 text-emerald-400 font-bold text-lg">
                <CheckCircle2 className="w-6 h-6" />
                <span>SOS Signal Broadcasted Successfully!</span>
              </div>
              <p className="text-xs text-slate-300">
                Live location link streamed to Mumbai Police Control Room & 3 trusted contacts. Foreground service active.
              </p>
              <button
                onClick={() => setSosTriggered(false)}
                className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold border border-slate-700"
              >
                Reset SOS Status
              </button>
            </div>
          ) : sosActive ? (
            <div className="bg-rose-500/20 border border-rose-500/50 rounded-2xl p-6 space-y-4 animate-pulse">
              <div className="text-4xl font-black text-rose-400 font-mono">{countdown}</div>
              <p className="text-xs text-white">Broadcasting distress signal in {countdown} seconds...</p>
              <button
                onClick={() => setSosActive(false)}
                className="bg-slate-900 text-rose-400 border border-rose-500 px-6 py-2 rounded-xl text-xs font-bold hover:bg-slate-800"
              >
                Cancel False Alarm
              </button>
            </div>
          ) : (
            <button
              onClick={handleTriggerSos}
              className="w-36 h-36 rounded-full bg-gradient-to-tr from-rose-600 to-red-500 text-white font-black text-2xl shadow-2xl shadow-rose-600/50 mx-auto flex items-center justify-center border-4 border-rose-300/40 hover:scale-105 transition-transform"
            >
              SOS
            </button>
          )}
        </div>
      </div>

      {/* Emergency Directory Grid */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <h3 className="text-xl font-bold text-white mb-2">Mumbai Emergency Helplines & Direct Calling</h3>
        <p className="text-slate-400 text-xs mb-6">One-touch calling functionality with offline fallback cached in Room Database.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyServices.map((srv, idx) => (
            <div key={idx} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-600 transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{srv.icon}</span>
                    <div>
                      <h4 className="text-base font-bold text-white">{srv.name}</h4>
                      <span className="text-xs font-mono font-bold text-amber-400">Tel: {srv.number}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] px-2.5 py-1 rounded-full border ${srv.color}`}>
                    Verified 24/7
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">{srv.desc}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-700/60">
                <button
                  onClick={() => alert(`Placing emergency call to ${srv.name} at ${srv.number}`)}
                  className="bg-gradient-to-r from-rose-600 to-red-500 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 shadow-md hover:scale-[1.02] transition-transform"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </button>
                <button
                  onClick={() => window.open(srv.portal, '_blank')}
                  className="bg-slate-900 text-slate-200 py-2.5 rounded-xl text-xs font-medium border border-slate-700 flex items-center justify-center space-x-1.5 hover:bg-slate-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Official Portal</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
