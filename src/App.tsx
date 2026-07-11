import { useState } from 'react';
import { Header } from './components/Header';
import { TabNavigation } from './components/TabNavigation';
import { PrdOverview } from './components/PrdOverview';
import { FeatureList } from './components/FeatureList';
import { UserPersonasAndStories } from './components/UserPersonasAndStories';
import { ScreenFlowViewer } from './components/ScreenFlowViewer';
import { DatabaseSchemaViewer } from './components/DatabaseSchemaViewer';
import { ApiArchitectureViewer } from './components/ApiArchitectureViewer';
import { FolderStructureViewer } from './components/FolderStructureViewer';
import { RoadmapViewer } from './components/RoadmapViewer';
import { CheckCircle2, Sparkles, ArrowRight, Shield } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('prd');
  const [phase2Approved, setPhase2Approved] = useState(false);

  const handleApprovePhase2 = () => {
    setPhase2Approved(true);
    setActiveTab('features');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <Header />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {phase2Approved && (
          <div className="mb-8 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between text-emerald-300">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold">Phase 2 Approved!</span>
                <span className="text-xs text-slate-300 ml-2">Core Android app structure, emergency calling intents, and Room local database schemas are ready for execution.</span>
              </div>
            </div>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full font-semibold">Active Development</span>
          </div>
        )}

        {activeTab === 'prd' && <PrdOverview />}
        {activeTab === 'features' && <FeatureList />}
        {activeTab === 'personas' && <UserPersonasAndStories />}
        {activeTab === 'screenflow' && <ScreenFlowViewer />}
        {activeTab === 'database' && <DatabaseSchemaViewer />}
        {activeTab === 'api' && <ApiArchitectureViewer />}
        {activeTab === 'folder' && <FolderStructureViewer />}
        {activeTab === 'roadmap' && <RoadmapViewer onApprovePhase2={handleApprovePhase2} />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-amber-500" />
            <span className="text-slate-400 font-medium">SafeCity Mumbai AI — Smart Civic Platform</span>
          </div>
          <p>© 2026 Municipal Corporation of Greater Mumbai & Maharashtra Police Tech Initiative.</p>
        </div>
      </footer>
    </div>
  );
}
