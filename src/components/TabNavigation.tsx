import { Language, translations } from '../data/mockComplaints';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
}

export function TabNavigation({ activeTab, setActiveTab, language }: TabNavigationProps) {
  const t = translations[language] || translations.en;

  const tabs = [
    { id: 'dashboard', label: `📊 ${t.tab_dashboard || 'Dashboard'}` },
    { id: 'map', label: `🗺️ ${t.tab_map || 'Live Map'}` },
    { id: 'report', label: `✨ ${t.tab_report || 'AI Report'}` },
    { id: 'emergency', label: `🚨 ${t.tab_emergency || 'Emergency'}` },
    { id: 'bmc', label: `🏛️ ${t.tab_bmc || 'BMC Services'}` },
    { id: 'admin', label: `🛡️ ${t.tab_admin || 'Admin & Analytics'}` },
    { id: 'prd', label: '1. PRD & Overview' },
    { id: 'audit', label: '2. 20-Point Audit' },
    { id: 'roadmap', label: '3. Priority Roadmap' },
    { id: 'features', label: '4. Feature List' },
    { id: 'personas', label: '5. Personas' },
    { id: 'screenflow', label: '6. Screen Flow' },
    { id: 'database', label: '7. Database' },
    { id: 'api', label: '8. API & Architecture' },
    { id: 'folder', label: '9. Folder Structure' },
  ];

  return (
    <div className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-[73px] z-40 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-1.5 py-3 min-w-max">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

