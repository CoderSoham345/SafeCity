import { phase1FolderStructure } from '../data/phase1Data';
import { FolderTree, Folder, FileCode } from 'lucide-react';

export function FolderStructureViewer() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center space-x-2">
          <FolderTree className="w-6 h-6 text-amber-400" />
          <span>Android Clean Architecture Folder Structure</span>
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          Scalable multi-module Clean Architecture layout adhering to Google's official Android development guidelines.
        </p>

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 font-mono text-xs">
          <div className="flex items-center space-x-2 text-amber-400 font-bold mb-4 pb-3 border-b border-slate-800">
            <Folder className="w-4 h-4" />
            <span>app/src/main/java/com/safecity/mumbai/</span>
          </div>

          <div className="space-y-4 pl-4 text-slate-300">
            {phase1FolderStructure.children?.map((node, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center space-x-2 text-cyan-300 font-semibold">
                  <Folder className="w-4 h-4 text-amber-500" />
                  <span>{node.name}/</span>
                  <span className="text-[11px] text-slate-500 font-sans font-normal">— {node.description}</span>
                </div>
                {node.children && (
                  <div className="pl-6 space-y-1.5 border-l border-slate-800">
                    {node.children.map((sub, j) => (
                      <div key={j} className="flex items-center space-x-2 text-slate-400">
                        <FileCode className="w-3.5 h-3.5 text-slate-500" />
                        <span>{sub.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
