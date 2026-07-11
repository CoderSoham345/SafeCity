import { useState, useEffect } from 'react';
import { bmcServicesList } from '../data/mockComplaints';
import { Language, translations } from '../data/mockComplaints';
import { Building2, PhoneCall, Navigation, Sparkles, AlertTriangle, Construction, Trash2, Droplets, Wrench, Lightbulb, TreePine, CloudRain, Dog, Bug, Truck, VolumeX, ExternalLink, ShieldAlert } from 'lucide-react';

interface BmcServicesScreenProps {
  language: Language;
  onOpenReportForm: (category: string) => void;
}

export function BmcServicesScreen({ language, onOpenReportForm }: BmcServicesScreenProps) {
  const t = translations[language];
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);

  const banners = [
    { title: "🚧 Report Civic Issues Easily", subtitle: "Directly dispatch grievances to respective BMC Ward officers with AI triage." },
    { title: "🛣 Help Improve Mumbai", subtitle: "Track potholes, water leaks, and broken streetlights in real time." },
    { title: "🚨 Emergency Services Available", subtitle: "One-touch direct calling for Police (112), Fire (101), and Disaster Cell (1916)." },
    { title: "📢 Report Problems in Seconds", subtitle: "Snap a photo and let Gemini AI auto-classify department and severity." },
    { title: "🏛 Smart Citizen Platform", subtitle: "Empowering 12.5M+ Mumbai residents with transparent municipal accountability." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Construction': return <Construction className="w-6 h-6 text-amber-400" />;
      case 'Trash2': return <Trash2 className="w-6 h-6 text-emerald-400" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-cyan-400" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-blue-400" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-yellow-400" />;
      case 'TreePine': return <TreePine className="w-6 h-6 text-emerald-500" />;
      case 'CloudRain': return <CloudRain className="w-6 h-6 text-indigo-400" />;
      case 'AlertTriangle': return <AlertTriangle className="w-6 h-6 text-rose-400" />;
      case 'Dog': return <Dog className="w-6 h-6 text-orange-400" />;
      case 'Bug': return <Bug className="w-6 h-6 text-purple-400" />;
      case 'Truck': return <Truck className="w-6 h-6 text-amber-500" />;
      case 'VolumeX': return <VolumeX className="w-6 h-6 text-rose-500" />;
      default: return <Building2 className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      {/* Official Government Portals & Helplines Guide Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>Official Government Guidance & Portals</span>
          </div>
          <h3 className="text-lg font-bold text-white">Direct Access to BMC & Mumbai Police Official Portals</h3>
          <p className="text-xs text-slate-300 mt-1">For direct official filings, tenders, police NOCs, and disaster updates, please visit official government portals below.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="https://portal.mcgm.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 text-slate-950 px-4 py-3 rounded-2xl text-xs font-bold flex items-center space-x-2 shadow-lg hover:bg-amber-400 transition-colors"
          >
            <Building2 className="w-4 h-4" />
            <span>Official BMC Portal (mcgm.gov.in)</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
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
        </div>
      </div>

      {/* Animated Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>🏛️ BMC Citizen Services Portal</span>
          </div>

          <div className="transition-all duration-500 min-h-[90px]">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              {banners[activeBannerIndex].title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-medium">
              {banners[activeBannerIndex].subtitle}
            </p>
          </div>

          {/* Indicator dots */}
          <div className="flex space-x-2 mt-6">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveBannerIndex(idx)}
                className={`h-2 rounded-full transition-all ${idx === activeBannerIndex ? 'w-8 bg-amber-500' : 'w-2 bg-slate-700'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">{t.ward_services || 'Municipal Department Services & Grievances'}</h3>
            <p className="text-slate-400 text-xs mt-1">Select any civic category below to instantly report issues, place helpline calls, or locate ward offices.</p>
          </div>
          <span className="bg-slate-800 text-amber-400 text-xs px-3 py-1 rounded-xl font-mono border border-slate-700">
            17 Departments Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bmcServicesList.map((service) => (
            <div key={service.id} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all hover:shadow-xl group">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{service.defaultTitle}</h4>
                    <span className="text-[11px] text-amber-400 font-medium">{service.department}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-700/60">
                <button
                  onClick={() => onOpenReportForm(service.defaultTitle)}
                  className="bg-amber-500 text-slate-950 py-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 shadow-md hover:bg-amber-400 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Report</span>
                </button>
                <button
                  onClick={() => alert(`Calling BMC Helpline for ${service.defaultTitle}: Dialing 155300`)}
                  className="bg-slate-900 text-slate-200 py-2 rounded-xl text-xs font-medium border border-slate-700 flex items-center justify-center space-x-1 hover:bg-slate-800 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call</span>
                </button>
                <button
                  onClick={() => window.open("https://portal.mcgm.gov.in", "_blank")}
                  className="bg-slate-900 text-slate-200 py-2 rounded-xl text-xs font-medium border border-slate-700 flex items-center justify-center space-x-1 hover:bg-slate-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Portal</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
