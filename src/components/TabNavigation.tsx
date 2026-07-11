interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  const tabs = [
    { id: 'prd', label: '1. PRD & Overview' },
    { id: 'features', label: '2. Feature List' },
    { id: 'personas', label: '3. Personas & Stories' },
    { id: 'screenflow', label: '4. Screen Flow & UI' },
    { id: 'database', label: '5. Database Design' },
    { id: 'api', label: '6. API & Architecture' },
    { id: 'folder', label: '7. Folder Structure' },
    { id: 'roadmap', label: '8. Roadmap & Phase 2' },
  ];

  return (
    <div className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-[73px] z-40 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-1 py-3 min-w-max">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20'
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
