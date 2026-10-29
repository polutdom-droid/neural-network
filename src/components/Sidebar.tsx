import React, { useState, useMemo } from 'react';
import { Search, ChevronRight, Layers, X } from 'lucide-react';
import { SlideBlueprint, BilingualMode } from '../types';
import { categories } from '../data/slidesData';

interface SidebarProps {
  slides: SlideBlueprint[];
  currentSlideNum: number;
  onSelectSlide: (num: number) => void;
  langMode: BilingualMode;
  isOpen: boolean;
  onToggleOpen: () => void;
  isMobileView?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  slides,
  currentSlideNum,
  onSelectSlide,
  langMode,
  isOpen,
  onToggleOpen,
  isMobileView = false
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter slides based on category and search query
  const filteredSlides = useMemo(() => {
    return slides.filter((s) => {
      const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const inEnTitle = s.englishTitle.toLowerCase().includes(q);
      const inKhTitle = s.khmerTitle.toLowerCase().includes(q);
      const inCategory = s.category.toLowerCase().includes(q);
      const inSlideNum = s.slideNumber.toString() === q;
      const inFormulas = s.chartMetricsMath.mathematicalFormulas?.some(
        (f) => f.latex.toLowerCase().includes(q) || f.formulaNameEn.toLowerCase().includes(q)
      );

      return matchesCategory && (inEnTitle || inKhTitle || inCategory || inSlideNum || inFormulas);
    });
  }, [slides, selectedCategory, searchQuery]);

  const handleSlideClick = (slideNumber: number) => {
    onSelectSlide(slideNumber);
    if (isMobileView || window.innerWidth < 768) {
      onToggleOpen();
    }
  };

  return (
    <>
      {/* Backdrop overlay on mobile screens or inside Mobile Phone Frame */}
      {isOpen && (
        <div
          onClick={onToggleOpen}
          className={`${
            isMobileView ? 'absolute inset-0' : 'fixed inset-0 md:hidden'
          } bg-slate-950/75 backdrop-blur-xs z-40 transition-opacity`}
        />
      )}

      <aside
        className={`bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 h-full max-h-full overflow-hidden transition-all duration-300 ${
          isMobileView
            ? `absolute inset-y-0 left-0 z-50 shadow-2xl ${
                isOpen ? 'w-[86%] max-w-[320px] translate-x-0' : 'w-0 -translate-x-full overflow-hidden border-none'
              }`
            : `fixed md:static inset-y-0 left-0 z-50 md:z-30 shadow-2xl md:shadow-none ${
                isOpen ? 'w-[85vw] max-w-[320px] md:w-80 lg:w-96 translate-x-0' : 'w-0 -translate-x-full md:translate-x-0 overflow-hidden border-none'
              }`
        }`}
      >
        {/* Sidebar Header & Search */}
        <div className="p-4 border-b border-slate-800 flex flex-col gap-3 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
              <Layers className="w-4 h-4 text-sky-400" />
              <span className="font-khmer">បញ្ជីស្លាយទាំង ២៦ (Slides)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/30">
                {filteredSlides.length} / {slides.length}
              </span>
              <button
                onClick={onToggleOpen}
                className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 md:hidden"
                title="បិទបញ្ជីស្លាយ (Close)"
              >
                <X className="w-4 h-4" />
              </button>
              {isMobileView && (
                <button
                  onClick={onToggleOpen}
                  className="hidden md:flex p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                  title="បិទបញ្ជីស្លាយ (Close)"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Search Input Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              placeholder="ស្វែងរកស្លាយ, រូបមន្ត, ប្រធានបទ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors font-khmer"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2 py-1 rounded-md text-[10px] font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-sky-600 text-white font-semibold'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {langMode === 'khmer' ? cat.nameKh : cat.nameEn}
              </button>
            ))}
          </div>
        </div>

        {/* Slide List */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-2 space-y-1.5">
          {filteredSlides.map((s) => {
            const isSelected = s.slideNumber === currentSlideNum;
            return (
              <button
                key={s.id}
                onClick={() => handleSlideClick(s.slideNumber)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 border ${
                  isSelected
                    ? 'bg-sky-950/60 border-sky-500/60 shadow-[0_0_15px_rgba(56,189,248,0.15)] ring-1 ring-sky-500/30'
                    : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                }`}
              >
                {/* Slide Number Badge */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-sky-500 text-slate-950 shadow'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {s.slideNumber}
                </div>

                {/* Title & Category Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {s.category}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono text-sky-400 font-bold">ACTIVE</span>
                    )}
                  </div>

                  {langMode !== 'khmer' && (
                    <p className="text-xs font-semibold text-slate-200 leading-snug line-clamp-1">
                      {s.englishTitle}
                    </p>
                  )}
                  {langMode !== 'english' && (
                    <p className="text-xs font-medium text-amber-200/90 font-khmer leading-snug line-clamp-1 mt-0.5">
                      {s.khmerTitle}
                    </p>
                  )}
                </div>

                <ChevronRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-sky-400 translate-x-0.5' : 'text-slate-600'
                  }`}
                />
              </button>
            );
          })}

          {filteredSlides.length === 0 && (
            <div className="text-center py-10 text-slate-500 text-xs">
              No slides found matching "{searchQuery}"
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/60 text-[11px] text-slate-400 flex items-center justify-between shrink-0">
          <span>Course: Dr. Valy Dona</span>
          <span className="font-mono text-sky-400">100% Bilingual</span>
        </div>
      </aside>
    </>
  );
};
