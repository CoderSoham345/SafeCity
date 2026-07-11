import { LayoutDashboard, MapPin, Sparkles, ShieldAlert, Building2, UserCheck } from 'lucide-react';
import { Language, translations } from '../data/mockComplaints';

interface BottomNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
}

export function BottomNavigation({ activeTab, setActiveTab, language }: BottomNavigationProps) {
  const t = translations[language];

  const navItems = [
    { id: 'dashboard', label: t.tab_dashboard || 'Dashboard', icon: LayoutDashboard },
    { id: 'map', label: t.tab_map || 'Map', icon: MapPin },
    { id: 'report', label: t.tab_report || 'Report', icon: Sparkles },
    { id: 'emergency', label: t.tab_emergency || 'Emergency', icon: ShieldAlert },
    { id: 'bmc', label: t.tab_bmc || 'BMC', icon: Building2 },
    { id: 'admin', label: t.tab_admin || 'Admin', icon: UserCheck },
  ];

  return (
    <div className="bg-slate-900/95 backdrop-blur-md border-t border-slate-800 sticky bottom-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center py-2.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center py-1.5 px-3 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                <span className="text-[11px] mt-1 tracking-tight">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
