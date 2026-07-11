import { useState, FormEvent } from 'react';
import { Language, translations } from '../data/mockComplaints';
import { Camera, Image as ImageIcon, Mic, Sparkles, MapPin, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

interface AiReporterScreenProps {
  language: Language;
  initialCategory?: string;
}

export function AiReporterScreen({ language, initialCategory }: AiReporterScreenProps) {
  const t = translations[language];
  const [category, setCategory] = useState(initialCategory || 'Pothole');
  const [subCategory, setSubCategory] = useState('Deep Crater');
  const [ward, setWard] = useState('K-West (Andheri West)');
  const [address, setAddress] = useState('Linking Road, Near Khar Subway, Mumbai');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>('https://images.unsplash.com/photo-1515162816999-a0c47dc192f8?auto=format&fit=crop&w=600&q=80');
  const [isRecording, setIsRecording] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [analyzingAi, setAnalyzingAi] = useState(false);
  const [aiResult, setAiResult] = useState<{ severity: string; department: string; summary: string; urgency: number } | null>(null);

  const handleSimulateAiAnalysis = () => {
    setAnalyzingAi(true);
    setTimeout(() => {
      setAnalyzingAi(false);
      setAiResult({
        severity: 'Critical',
        department: 'BMC Roads & Traffic Dept',
        summary: `Gemini 2.5 Flash: Validated high-risk civic hazard at ${address}. Detected 3 duplicate reports within 50m radius. Assigned automated priority level 92/100.`,
        urgency: 92
      });
    }, 1500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{t.report_issue_title || 'AI Civic Complaint System'}</h2>
            <p className="text-slate-400 text-sm">{t.report_issue_subtitle || 'Upload photo, record voice or type grievance for instant Gemini AI triage.'}</p>
          </div>
        </div>

        {submitted ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Complaint Successfully Submitted!</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Your grievance has been packaged with GPS coordinates and routed instantly to <span className="text-amber-400 font-semibold">BMC Roads Dept</span>. Complaint ID: <span className="font-mono text-cyan-300">COMP-9941</span>.
            </p>
            <button
              onClick={() => { setSubmitted(false); setAiResult(null); setDescription(''); }}
              className="bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform"
            >
              Submit Another Report
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Photo Capture / Upload Section */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">Photo Evidence (CameraX & ML Kit)</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedImage('https://images.unsplash.com/photo-1515162816999-a0c47dc192f8?auto=format&fit=crop&w=600&q=80')}
                  className="bg-slate-950 border border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center space-y-2 hover:border-amber-500 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Camera className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white">{t.take_photo || 'Capture from Camera'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedImage('https://images.unsplash.com/photo-1541888946425-d0fbb18f86f8?auto=format&fit=crop&w=600&q=80')}
                  className="bg-slate-950 border border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center space-y-2 hover:border-amber-500 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white">{t.upload_gallery || 'Upload from Gallery'}</span>
                </button>
              </div>

              {selectedImage && (
                <div className="relative mt-4 rounded-2xl overflow-hidden border border-slate-700 h-48">
                  <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs text-white flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>EXIF GPS Tagged: 19.1320° N, 72.8340° E</span>
                  </div>
                </div>
              )}
            </div>

            {/* AI Analysis Trigger */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Gemini 2.5 Flash Smart Triage</h4>
                    <p className="text-xs text-slate-400">Auto-classify issue, severity, and responsible department.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleSimulateAiAnalysis}
                  disabled={analyzingAi}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs shadow-lg hover:scale-105 transition-transform disabled:opacity-50"
                >
                  {analyzingAi ? 'Analyzing with Gemini...' : 'Run Gemini AI Analysis'}
                </button>
              </div>

              {aiResult && (
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 space-y-2 animate-fadeIn">
                  <div className="flex justify-between items-center text-xs font-bold text-amber-300">
                    <span>Severity: {aiResult.severity}</span>
                    <span>Urgency Score: {aiResult.urgency}/100</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{aiResult.summary}</p>
                  <div className="text-[11px] text-cyan-300 font-mono">Suggested Department: {aiResult.department}</div>
                </div>
              )}
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 block">Issue Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="Pothole">Pothole / Road Damage</option>
                  <option value="Garbage">Garbage / Solid Waste</option>
                  <option value="Water Leakage">Water Leakage / Pipe Burst</option>
                  <option value="Flooding">Monsoon Flooding / Waterlogging</option>
                  <option value="Broken Streetlights">Broken Streetlights</option>
                  <option value="Tree Fallen">Fallen Tree / Branches</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 block">BMC Ward</label>
                <input
                  type="text"
                  value={ward}
                  onChange={(e) => setWard(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 mb-1 block">GPS Location & Address</label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-rose-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-slate-300">Description & Voice Note</label>
                <button
                  type="button"
                  onClick={() => { setIsRecording(!isRecording); setDescription(prev => prev + " [Voice recorded note: severe road hazard causing vehicle damage]"); }}
                  className={`text-xs px-3 py-1 rounded-xl flex items-center space-x-1.5 transition-colors ${
                    isRecording ? 'bg-rose-500 text-white animate-pulse' : 'bg-slate-800 text-amber-400 border border-slate-700'
                  }`}
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>{isRecording ? 'Recording (Tap to Stop)' : 'Record Voice (Marathi/Hindi/English)'}</span>
                </button>
              </div>
              <textarea
                rows={3}
                placeholder="Describe the civic grievance or speak using voice recorder..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex items-center space-x-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <input
                type="checkbox"
                id="anonymous"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
                className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-amber-500 focus:ring-0"
              />
              <label htmlFor="anonymous" className="text-xs text-slate-300 font-medium">
                Submit Anonymously (Hide my citizen profile from public leaderboards)
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 py-4 rounded-2xl font-extrabold text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.01] transition-transform"
            >
              {t.submit_report || 'Submit Complaint to BMC & Police'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
