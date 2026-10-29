import React, { useState } from 'react';
import {
  BarChart3,
  Globe,
  Download,
  BookOpen,
  LayoutTemplate,
  Code2,
  Columns,
  FolderGit2,
  Loader2,
  Smartphone,
  Monitor,
  Menu
} from 'lucide-react';
import { BilingualMode } from '../types';
import {
  downloadGitHubVercelSourceZip,
  downloadMissingSlideExporterFile
} from '../utils/slideExporter';

interface NavbarProps {
  currentSlideNum: number;
  totalSlides: number;
  langMode: BilingualMode;
  onSelectLangMode: (mode: BilingualMode) => void;
  viewMode: 'canvas' | 'blueprint' | 'split' | 'pdf_compare';
  onSelectViewMode: (mode: 'canvas' | 'blueprint' | 'split' | 'pdf_compare') => void;
  onOpenExportModal: () => void;
  onOpenQuickTour: () => void;
  deviceMode: 'desktop' | 'mobile';
  onToggleDeviceMode: () => void;
  onToggleSidebar?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  langMode,
  onSelectLangMode,
  viewMode,
  onSelectViewMode,
  onOpenExportModal,
  deviceMode,
  onToggleDeviceMode,
  onToggleSidebar
}) => {
  const [isDownloadingSource, setIsDownloadingSource] = useState(false);

  const handleDownloadSourceZip = async () => {
    try {
      setIsDownloadingSource(true);
      await downloadGitHubVercelSourceZip();
    } finally {
      setIsDownloadingSource(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full shrink-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-3 sm:px-4 py-2.5 flex flex-wrap items-center justify-between gap-2.5 shadow-md">
      {/* Brand Identity + Mobile Drawer Button */}
      <div className="flex items-center gap-2.5">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="md:hidden p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700 transition-colors"
            title="បើកបញ្ជីស្លាយ (Open Slide List)"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-amber-500 p-0.5 shadow-lg flex items-center justify-center shrink-0">
          <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-sky-400">
            <BarChart3 className="w-5 h-5" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-extrabold text-xs sm:text-sm tracking-tight text-white">
              Looker Studio BI Blueprints
            </span>
            <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Mr. POL Utdom
            </span>
          </div>
          <div className="text-[11px] text-slate-400 font-khmer flex items-center gap-1.5">
            <span className="truncate max-w-[180px] sm:max-w-none">មូលដ្ឋានគ្រឹះនៃបណ្តាញណឺរ៉ូនសិប្បនិម្មិត</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline">២៦ ស្លាយឯករាជ្យ</span>
          </div>
        </div>
      </div>

      {/* Center: View Mode Switcher */}
      <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs overflow-x-auto max-w-full">
        <button
          onClick={() => onSelectViewMode('canvas')}
          className={`px-2.5 sm:px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all shrink-0 ${
            viewMode === 'canvas'
              ? 'bg-sky-600 text-white shadow'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="Looker Studio Canvas Live Presentation"
        >
          <LayoutTemplate className="w-3.5 h-3.5" />
          <span>Canvas</span>
        </button>

        <button
          onClick={() => onSelectViewMode('split')}
          className={`hidden sm:flex px-3 py-1.5 rounded-lg font-medium items-center gap-1.5 transition-all shrink-0 ${
            viewMode === 'split'
              ? 'bg-indigo-600 text-white shadow'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="Side-by-side Canvas & Blueprint Specification"
        >
          <Columns className="w-3.5 h-3.5" />
          <span>Split View</span>
        </button>

        <button
          onClick={() => onSelectViewMode('blueprint')}
          className={`px-2.5 sm:px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all shrink-0 ${
            viewMode === 'blueprint'
              ? 'bg-amber-600 text-white shadow'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="Looker Studio 5-Section Markdown Blueprint"
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Specs</span>
        </button>

        <button
          onClick={() => onSelectViewMode('pdf_compare')}
          className={`px-2.5 sm:px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all shrink-0 ${
            viewMode === 'pdf_compare'
              ? 'bg-emerald-600 text-white shadow'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="Compare with Original Lecture PDF Slide"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>PDF</span>
        </button>
      </div>

      {/* Right Controls: Mobile Phone View Switcher, Language Switcher & Export */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        {/* Mobile Phone View / Desktop View Toggle Button */}
        <button
          onClick={onToggleDeviceMode}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow transition-all font-khmer border ${
            deviceMode === 'mobile'
              ? 'bg-sky-500 text-slate-950 border-sky-400 ring-2 ring-sky-400/40 font-bold'
              : 'bg-slate-800 hover:bg-slate-700 text-sky-300 border-sky-500/40'
          }`}
          title="ប្តូរទម្រង់មើលរវាងទូរស័ព្ទ និងកុំព្យូទ័រ (Switch between Mobile Phone View and Desktop View)"
        >
          {deviceMode === 'mobile' ? (
            <>
              <Monitor className="w-3.5 h-3.5" />
              <span>ទម្រង់កុំព្យូទ័រ (Desktop)</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3.5 h-3.5" />
              <span>ទម្រង់ទូរស័ព្ទ (Mobile)</span>
            </>
          )}
        </button>

        {/* Language Mode Toggle */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-medium">
          <Globe className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-0.5 hidden sm:block" />
          <button
            onClick={() => onSelectLangMode('bilingual')}
            className={`px-2 py-1 rounded transition-colors ${
              langMode === 'bilingual'
                ? 'bg-sky-600/90 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="English & Khmer Side-by-Side"
          >
            Dual
          </button>
          <button
            onClick={() => onSelectLangMode('english')}
            className={`px-2 py-1 rounded transition-colors ${
              langMode === 'english'
                ? 'bg-sky-600/90 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="English Only"
          >
            EN
          </button>
          <button
            onClick={() => onSelectLangMode('khmer')}
            className={`px-2 py-1 rounded transition-colors font-khmer ${
              langMode === 'khmer'
                ? 'bg-amber-600/90 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="ភាសាខ្មែរ សុទ្ធ"
          >
            ខ្មែរ
          </button>
        </div>

        {/* Direct 1-Click Download of missing slideExporter.ts for GitHub src/utils/ */}
        <button
          onClick={downloadMissingSlideExporterFile}
          className="hidden lg:flex px-2.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold items-center gap-1.5 shadow transition-colors font-khmer"
          title="Download slideExporter.ts to upload into src/utils/ on GitHub"
        >
          <Download className="w-3.5 h-3.5" />
          <span>ទាញយក slideExporter.ts</span>
        </button>

        {/* Direct 1-Click Download Source Code (.zip) for GitHub & Vercel */}
        <button
          onClick={handleDownloadSourceZip}
          disabled={isDownloadingSource}
          className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow transition-colors disabled:opacity-50 font-khmer"
          title="Download Full Source Code (.zip) for GitHub & Vercel"
        >
          {isDownloadingSource ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <FolderGit2 className="w-3.5 h-3.5" />
          )}
          <span className="hidden sm:inline">ដោនឡូតកូដ GitHub (.zip)</span>
          <span className="sm:hidden">ZIP</span>
        </button>

        {/* Export Modal Button */}
        <button
          onClick={onOpenExportModal}
          className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow transition-colors"
          title="Export Full 26-Page Looker Studio Blueprint Report"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Export Report</span>
          <span className="sm:hidden">Export</span>
        </button>
      </div>
    </header>
  );
};

