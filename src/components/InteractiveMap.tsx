import { useState } from 'react';
import { mockComplaints, Language } from '../data/mockComplaints';
import { Complaint } from '../types';
import { MapPin, Search, Filter, ShieldAlert, Navigation, Layers, Satellite, Flame } from 'lucide-react';

interface InteractiveMapProps {
  language: Language;
}

export function InteractiveMap({ language }: InteractiveMapProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(mockComplaints[0]);
  const [mapMode, setMapMode] = useState<'standard' | 'satellite' | 'heatmap'>('standard');
  const [showEmergencyPins, setShowEmergencyPins] = useState<boolean>(true);

  const categories = ['All', 'Pothole', 'Garbage', 'Water Leakage', 'Flooding', 'Broken Streetlights'];

  const filteredComplaints = mockComplaints.filter((c) => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.address.toLowerCase().includes(searchQuery.toLowerCase()) || c.description.toLowerCase().includes(searchQuery.toLowerCase()) || c.ward.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Header & Controls */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Google Maps SDK & FusedLocation API</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Mumbai Live Civic & Emergency Map</h2>
            <p className="text-slate-400 text-sm mt-1">Real-time geospatial tracking of civic grievances, police stations, hospitals, and flood zones across Mumbai.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setMapMode('standard')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                mapMode === 'standard' ? 'bg-amber-500 text-slate-950 shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Standard</span>
            </button>
            <button
              onClick={() => setMapMode('satellite')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                mapMode === 'satellite' ? 'bg-amber-500 text-slate-950 shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Satellite className="w-3.5 h-3.5" />
              <span>Satellite</span>
            </button>
            <button
              onClick={() => setMapMode('heatmap')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                mapMode === 'heatmap' ? 'bg-rose-500 text-white shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Complaint Heatmap</span>
            </button>
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative md:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search Mumbai location, ward, or complaint issue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-amber-400 shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Map Simulator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Simulated Google Maps Canvas */}
          <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl h-[520px] relative overflow-hidden flex flex-col justify-between p-6 shadow-inner">
            {/* Background Grid simulating Map Tiles */}
            <div className={`absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] ${mapMode === 'satellite' ? 'bg-slate-900' : 'bg-slate-950'}`} />

            {/* Simulated Heatmap Overlay */}
            {mapMode === 'heatmap' && (
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 via-amber-500/20 to-transparent pointer-events-none animate-pulse" />
            )}

            {/* Map Header Controls */}
            <div className="relative z-10 flex justify-between items-center bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-800">
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>GPS Active: Mumbai Metropolitan Region (19.0760° N, 72.8777° E)</span>
              </div>
              <button
                onClick={() => setShowEmergencyPins(!showEmergencyPins)}
                className="text-xs bg-slate-800 text-amber-400 px-3 py-1 rounded-xl border border-slate-700 font-semibold"
              >
                {showEmergencyPins ? 'Hide Emergency Infrastructure' : 'Show Emergency Infrastructure'}
              </button>
            </div>

            {/* Map Markers Overlay */}
            <div className="relative z-10 my-auto flex flex-wrap justify-center gap-6 p-6">
              {filteredComplaints.map((c) => {
                const isSelected = selectedComplaint?.id === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedComplaint(c)}
                    className={`group relative flex flex-col items-center transition-transform hover:scale-110 ${
                      isSelected ? 'scale-125 z-20' : 'z-10'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-xl border-2 ${
                      c.severity === 'Critical' ? 'bg-rose-600 border-rose-300 text-white animate-bounce' :
                      c.severity === 'High' ? 'bg-amber-500 border-amber-200 text-slate-950' : 'bg-cyan-600 border-cyan-200 text-white'
                    }`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="bg-slate-900/90 text-white text-[10px] px-2 py-0.5 rounded-lg border border-slate-700 mt-1 shadow-md whitespace-nowrap">
                      {c.category}
                    </span>
                  </button>
                );
              })}

              {showEmergencyPins && (
                <>
                  <div className="absolute top-12 left-16 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 border border-blue-300 text-white flex items-center justify-center shadow-lg">
                      🛡️
                    </div>
                    <span className="text-[10px] bg-slate-900 text-blue-300 px-1.5 py-0.5 rounded mt-0.5">Bandra Police Stn</span>
                  </div>
                  <div className="absolute bottom-16 right-20 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-rose-600 border border-rose-300 text-white flex items-center justify-center shadow-lg">
                      🏥
                    </div>
                    <span className="text-[10px] bg-slate-900 text-rose-300 px-1.5 py-0.5 rounded mt-0.5">Lilavati Hospital</span>
                  </div>
                </>
              )}
            </div>

            {/* Map Footer Legend */}
            <div className="relative z-10 flex flex-wrap justify-between items-center bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-800 text-[11px] text-slate-400">
              <div className="flex items-center space-x-3">
                <span className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded-full bg-rose-600" /><span>Critical</span></span>
                <span className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span>High</span></span>
                <span className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded-full bg-cyan-600" /><span>Normal</span></span>
              </div>
              <span className="text-amber-400 font-mono">Google Maps SDK v19.2</span>
            </div>
          </div>

          {/* Selected Complaint Inspector Panel */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-md">
            {selectedComplaint ? (
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs px-3 py-1 rounded-full font-mono font-bold">
                    {selectedComplaint.id}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    selectedComplaint.severity === 'Critical' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {selectedComplaint.severity}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{selectedComplaint.category}: {selectedComplaint.subCategory}</h3>
                  <p className="text-xs text-slate-400 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>{selectedComplaint.address}</span>
                  </p>
                </div>

                {selectedComplaint.imageUrl && (
                  <div className="rounded-2xl overflow-hidden border border-slate-800 h-40">
                    <img src={selectedComplaint.imageUrl} alt={selectedComplaint.category} className="w-full h-full object-cover" />
                  </div>
                )}

                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  {selectedComplaint.description}
                </p>

                <div className="bg-amber-500/10 border border-amber-500/30 p-3.5 rounded-xl text-xs text-amber-300">
                  <span className="font-semibold block mb-1">🤖 Gemini AI Analysis:</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">{selectedComplaint.aiSummary}</p>
                </div>
              </div>
            ) : (
              <div className="my-auto text-center text-slate-400 text-sm py-12">
                Click any complaint marker on the map to inspect complete AI triage details.
              </div>
            )}

            <button
              onClick={() => alert(`Navigating via Google Maps Directions to ${selectedComplaint?.address}`)}
              className="mt-6 w-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-transform"
            >
              <Navigation className="w-4 h-4" />
              <span>Start Google Maps Navigation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
