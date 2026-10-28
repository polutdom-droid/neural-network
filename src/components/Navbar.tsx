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
  Loader2
} from 'lucide-react';
import { BilingualMode } from '../types';
import { downloadGitHubVercelSourceZip } from '../utils/slideExporter';

interface NavbarProps {
  currentSlideNum: number;
  totalSlides: number;
  langMode: BilingualMode;
  onSelectLangMode: (mode: BilingualMode) => void;
  viewMode: 'canvas' | 'blueprint' | 'split' | 'pdf_compare';
  onSelectViewMode: (mode: 'canvas' | 'blueprint' | 'split' | 'pdf_compare') => void;
  onOpenExportModal: () => void;
  onOpenQuickTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  langMode,
  onSelectLangMode,
  viewMode,
  onSelectViewMode,
  onOpenExportModal
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
    <header className="sticky top-0 z-40 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-md">
      {/* Brand Identity */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-amber-500 p-0.5 shadow-lg flex items-center justify-center">
          <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-sky-400">
            <BarChart3 className="w-5 h-5" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sm tracking-tight text-white">
              Looker Studio BI Blueprints
            </span>
            <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Mr. POL Utdom
            </span>
          </div>
          <div className="text-[11px] text-slate-400 font-khmer flex items-center gap-1.5">
            <span>មូលដ្ឋានគ្រឹះនៃបណ្តាញណឺរ៉ូនសិប្បនិម្មិត</span>
            <span className="text-slate-600">•</span>
            <span>២៦ ស្លាយឯករាជ្យ</span>
          </div>
        </div>
      </div>

      {/* Center: View Mode Switcher */}
      <div className="flex flex-wrap items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
        <button
          onClick={() => onSelectViewMode('canvas')}
          className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
            viewMode === 'canvas'
              ? 'bg-sky-600 text-white shadow'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="Looker Studio Canvas Live Presentation"
        >
          <LayoutTemplate className="w-3.5 h-3.5" />
          <span>Looker Studio Canvas</span>
        </button>

        <button
          onClick={() => onSelectViewMode('split')}
          className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
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
          className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
            viewMode === 'blueprint'
              ? 'bg-amber-600 text-white shadow'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="Looker Studio 5-Section Markdown Blueprint"
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Blueprint Specs</span>
        </button>

        <button
          onClick={() => onSelectViewMode('pdf_compare')}
          className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all ${
            viewMode === 'pdf_compare'
              ? 'bg-emerald-600 text-white shadow'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="Compare with Original Lecture PDF Slide"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Original PDF Slide</span>
        </button>
      </div>

      {/* Right Controls: Language Switcher & Export */}
      <div className="flex flex-wrap items-center gap-2">
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
            Dual / ទ្វេភាសា
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

        {/* Direct 1-Click Download Source Code (.zip) for GitHub & Vercel */}
        <button
          onClick={handleDownloadSourceZip}
          disabled={isDownloadingSource}
          className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow transition-colors disabled:opacity-50 font-khmer"
          title="Download Full Source Code (.zip) for GitHub & Vercel"
        >
          {isDownloadingSource ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <FolderGit2 className="w-3.5 h-3.5" />
          )}
          <span>ដោនឡូតកូដ GitHub (.zip)</span>
        </button>

        {/* Export Modal Button */}
        <button
          onClick={onOpenExportModal}
          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow transition-colors"
          title="Export Full 26-Page Looker Studio Blueprint Report"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export Report</span>
        </button>
      </div>
    </header>
  );
};

