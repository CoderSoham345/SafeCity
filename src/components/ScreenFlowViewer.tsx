import { useState } from 'react';
import { Smartphone, Layout, ArrowRight, Shield, Sparkles, Bell, User } from 'lucide-react';

export function ScreenFlowViewer() {
  const [activeScreen, setActiveScreen] = useState('home');

  const screens = [
    {
      id: 'home',
      name: '1. Home Dashboard',
      description: 'Main landing screen with quick action buttons, live disaster warnings banner, nearby report radar, and bottom navigation bar.',
      uiElements: ['Top App Bar with Ward Info', 'Emergency SOS Big Red Floating Button', 'AI Civic Report Quick Launcher', 'Active Disaster Banner', 'Bottom Navigation (Home, Map, Report, Community, Profile)']
    },
    {
      id: 'emergency',
      name: '2. Emergency Services',
      description: 'One-touch emergency calling tiles for Mumbai Police, Fire Brigade, Ambulance, Disaster Management, and Women Helplines.',
      uiElements: ['Emergency Service Grid', 'Direct Call Intent Trigger', 'Nearby Police & Hospital Map Pins', 'Offline Mode Cached Directory']
    },
    {
      id: 'ai_reporter',
      name: '3. AI Civic Reporter',
      description: 'CameraX capture interface with voice recording and Gemini AI real-time analysis card.',
      uiElements: ['CameraX Live Preview & Shutter', 'Voice Note Audio Waveform', 'Gemini AI Triage Badge (Category & Severity)', 'Auto-detected GPS Location & Address', 'Submit Complaint Button']
    },
    {
      id: 'sos_active',
      name: '4. Emergency SOS Active',
      description: 'Active distress broadcast screen sharing live coordinates and countdown timer.',
      uiElements: ['3-Second False Alarm Cancel Button', 'Live GPS Tracking Map', 'SMS Broadcast Status Log', 'Audio & Photo Evidence Recorder']
    },
    {
      id: 'authority',
      name: '5. Authority Dashboard',
      description: 'Administrative command center for BMC Ward Officers and Police dispatchers.',
      uiElements: ['Ward-wise Complaint Heatmap', 'Status Kanban Board (Submitted -> Assigned -> Resolved)', 'Team Assignment Dropdown', 'SLA Response Time Analytics']
    }
  ];

  const currentScreenData = screens.find(s => s.id === activeScreen) || screens[0];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center space-x-2">
          <Smartphone className="w-6 h-6 text-amber-400" />
          <span>Screen Flow & Jetpack Compose UI Architecture</span>
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          Interactive screen flow hierarchy demonstrating the Jetpack Compose navigation graph and Material 3 design system layout.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Screen List Selector */}
          <div className="lg:col-span-5 space-y-3">
            {screens.map((screen) => {
              const isSelected = activeScreen === screen.id;
              return (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(screen.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg'
                      : 'bg-slate-800/50 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div>
                    <h3 className={`font-bold text-sm ${isSelected ? 'text-amber-400' : 'text-white'}`}>{screen.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">{screen.description}</p>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          {/* Android Device Mockup Preview */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-sm bg-slate-950 border-[8px] border-slate-800 rounded-[40px] p-4 shadow-2xl relative">
              {/* Speaker Notch */}
              <div className="w-32 h-4 bg-slate-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* Screen Content */}
              <div className="bg-slate-900 rounded-3xl p-5 border border-slate-800 min-h-[480px] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-amber-400 flex items-center space-x-1">
                      <Shield className="w-3.5 h-3.5" />
                      <span>SafeCity Mumbai</span>
                    </span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                      10:41 AM
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{currentScreenData.name}</h3>
                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">{currentScreenData.description}</p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">UI Components</span>
                    {currentScreenData.uiElements.map((el, i) => (
                      <div key={i} className="bg-slate-800/80 border border-slate-700/60 rounded-xl px-3 py-2 text-xs text-slate-200 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{el}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Bottom Navigation */}
                <div className="pt-4 border-t border-slate-800 flex justify-around text-slate-400">
                  <div className="flex flex-col items-center text-amber-400">
                    <Layout className="w-4 h-4" />
                    <span className="text-[10px] mt-1">Home</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-[10px] mt-1">Report</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bell className="w-4 h-4" />
                    <span className="text-[10px] mt-1">Alerts</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <User className="w-4 h-4" />
                    <span className="text-[10px] mt-1">Profile</span>
                  </div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
