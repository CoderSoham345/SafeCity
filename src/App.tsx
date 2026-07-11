import { useState } from 'react';
import { Header } from './components/Header';
import { TabNavigation } from './components/TabNavigation';
import { BottomNavigation } from './components/BottomNavigation';
import { LanguageSelectorModal } from './components/LanguageSelectorModal';
import { DashboardScreen } from './components/DashboardScreen';
import { InteractiveMap } from './components/InteractiveMap';
import { AiReporterScreen } from './components/AiReporterScreen';
import { EmergencyScreen } from './components/EmergencyScreen';
import { BmcServicesScreen } from './components/BmcServicesScreen';
import { AdminDashboardScreen } from './components/AdminDashboardScreen';
import { PrdOverview } from './components/PrdOverview';
import { AuditReportView } from './components/AuditReportView';
import { PriorityRoadmapView } from './components/PriorityRoadmapView';
import { FeatureList } from './components/FeatureList';
import { UserPersonasAndStories } from './components/UserPersonasAndStories';
import { ScreenFlowViewer } from './components/ScreenFlowViewer';
import { DatabaseSchemaViewer } from './components/DatabaseSchemaViewer';
import { ApiArchitectureViewer } from './components/ApiArchitectureViewer';
import { FolderStructureViewer } from './components/FolderStructureViewer';
import { Language } from './data/mockComplaints';
import { Shield } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('safecity_language');
    return (saved === 'hi' || saved === 'mr' || saved === 'en') ? saved : 'en';
  });
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [reportCategory, setReportCategory] = useState<string>('Pothole');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('safecity_language', lang);
  };

  const handleOpenReportForm = (category: string) => {
    setReportCategory(category);
    setActiveTab('report');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col justify-between">
      <div>
        <Header language={language} onOpenLanguageModal={() => setIsLanguageModalOpen(true)} />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} language={language} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'dashboard' && <DashboardScreen language={language} setActiveTab={setActiveTab} />}
          {activeTab === 'map' && <InteractiveMap language={language} />}
          {activeTab === 'report' && <AiReporterScreen language={language} initialCategory={reportCategory} />}
          {activeTab === 'emergency' && <EmergencyScreen language={language} />}
          {activeTab === 'bmc' && <BmcServicesScreen language={language} onOpenReportForm={handleOpenReportForm} />}
          {activeTab === 'admin' && <AdminDashboardScreen />}
          {activeTab === 'prd' && <PrdOverview />}
          {activeTab === 'audit' && <AuditReportView />}
          {activeTab === 'roadmap' && <PriorityRoadmapView />}
          {activeTab === 'features' && <FeatureList />}
          {activeTab === 'personas' && <UserPersonasAndStories />}
          {activeTab === 'screenflow' && <ScreenFlowViewer />}
          {activeTab === 'database' && <DatabaseSchemaViewer />}
          {activeTab === 'api' && <ApiArchitectureViewer />}
          {activeTab === 'folder' && <FolderStructureViewer />}
        </main>
      </div>

      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} language={language} />

      <LanguageSelectorModal
        currentLanguage={language}
        setLanguage={setLanguage}
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-amber-500" />
            <span className="text-slate-400 font-medium">SafeCity Mumbai AI — Smart Civic Platform & Engineering Audit Hub</span>
          </div>
          <p>© 2026 Municipal Corporation of Greater Mumbai & Maharashtra Police Tech Initiative.</p>
        </div>
      </footer>
    </div>
  );
}

