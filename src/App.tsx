/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  BookOpen,
  LayoutTemplate,
  Code2,
  Columns,
  Layers,
  Sparkles,
  HelpCircle,
  FileText,
  Download,
  Loader2
} from 'lucide-react';
import { allSlides } from './data/slidesData';
import { BilingualMode, SlideBlueprint } from './types';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { LookerStudioCanvas } from './components/LookerStudioCanvas';
import { BlueprintInspector } from './components/BlueprintInspector';
import { ExportModal } from './components/ExportModal';
import {
  renderSingleOriginalPdfPage,
  downloadOriginalPdfFile
} from './utils/slideExporter';

export default function App() {
  const [slides, setSlides] = useState<SlideBlueprint[]>(allSlides);
  const [currentSlideNum, setCurrentSlideNum] = useState<number>(1);
  const [langMode, setLangMode] = useState<BilingualMode>('bilingual');
  const [viewMode, setViewMode] = useState<'canvas' | 'blueprint' | 'split' | 'pdf_compare'>('canvas');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [exportModalOpen, setExportModalOpen] = useState<boolean>(false);
  const [pdfPageDataUrl, setPdfPageDataUrl] = useState<string>('');
  const [isLoadingPdfPage, setIsLoadingPdfPage] = useState<boolean>(false);

  const currentSlide = slides.find((s) => s.slideNumber === currentSlideNum) || slides[0];

  const handleUpdateSlide = (updated: SlideBlueprint) => {
    setSlides((prev) =>
      prev.map((s) => (s.slideNumber === updated.slideNumber ? updated : s))
    );
  };

  useEffect(() => {
    if (viewMode !== 'pdf_compare') return;
    let cancelled = false;
    setIsLoadingPdfPage(true);
    renderSingleOriginalPdfPage(currentSlideNum)
      .then((url) => {
        if (!cancelled) setPdfPageDataUrl(url);
      })
      .finally(() => {
        if (!cancelled) setIsLoadingPdfPage(false);
      });
    return () => {
      cancelled = true;
    };
  }, [currentSlideNum, viewMode]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      // Don't trigger if user is typing in input, textarea, select, or contentEditable
      if (
        target &&
        (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.isContentEditable)
      ) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (currentSlideNum < slides.length) {
          setCurrentSlideNum((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentSlideNum > 1) {
          setCurrentSlideNum((prev) => prev - 1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideNum, slides.length]);

  const handlePrev = () => {
    if (currentSlideNum > 1) setCurrentSlideNum(currentSlideNum - 1);
  };

  const handleNext = () => {
    if (currentSlideNum < slides.length) setCurrentSlideNum(currentSlideNum + 1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Application Bar */}
      <Navbar
        currentSlideNum={currentSlideNum}
        totalSlides={slides.length}
        langMode={langMode}
        onSelectLangMode={setLangMode}
        viewMode={viewMode}
        onSelectViewMode={setViewMode}
        onOpenExportModal={() => setExportModalOpen(true)}
        onOpenQuickTour={() => {}}
      />

      {/* Main Workspace Frame */}
      <div className="flex-1 flex overflow-hidden">
        {/* Collapsible 26-Slide Navigation Sidebar */}
        <Sidebar
          slides={slides}
          currentSlideNum={currentSlideNum}
          onSelectSlide={(num) => setCurrentSlideNum(num)}
          langMode={langMode}
          isOpen={sidebarOpen}
          onToggleOpen={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Content View Container */}
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col gap-4">
          {/* Top Quick Breadcrumb & Pagination Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 px-4 py-2.5 rounded-xl border border-slate-800 text-xs shadow">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title={sidebarOpen ? 'Collapse Slide Navigator' : 'Open Slide Navigator'}
              >
                <Menu className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5 text-slate-400">
                <span>Lecture 02</span>
                <span>/</span>
                <span className="font-semibold text-slate-200">Slide {currentSlideNum} of 26</span>
                <span>/</span>
                <span className="text-sky-400 font-mono hidden sm:inline">{currentSlide.category}</span>
              </div>
            </div>

            {/* Quick Slide Navigation Carousel */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentSlideNum <= 1}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium disabled:opacity-30 disabled:hover:bg-slate-800 flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Prev Slide</span>
              </button>

              {/* Mini Slide Dots Picker (scrollable) */}
              <div className="hidden md:flex items-center gap-1 max-w-xs overflow-x-auto py-1 px-1">
                {slides.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlideNum(s.slideNumber)}
                    className={`w-6 h-6 rounded text-[11px] font-mono font-bold transition-all shrink-0 flex items-center justify-center ${
                      s.slideNumber === currentSlideNum
                        ? 'bg-sky-500 text-slate-950 scale-110 shadow'
                        : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                    }`}
                    title={`Slide ${s.slideNumber}: ${s.englishTitle}`}
                  >
                    {s.slideNumber}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentSlideNum >= slides.length}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium disabled:opacity-30 disabled:hover:bg-slate-800 flex items-center gap-1"
              >
                <span className="hidden sm:inline">Next Slide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Dynamic View Modes: Canvas Only, Blueprint Only, Split View, or Original PDF Compare */}
          {viewMode === 'canvas' && (
            <LookerStudioCanvas
              slide={currentSlide}
              totalSlides={slides.length}
              onPrevSlide={handlePrev}
              onNextSlide={handleNext}
              langMode={langMode}
              onSelectSlide={(num) => setCurrentSlideNum(num)}
              onUpdateSlide={handleUpdateSlide}
            />
          )}

          {viewMode === 'blueprint' && (
            <BlueprintInspector
              slide={currentSlide}
              allSlides={slides}
              langMode={langMode}
            />
          )}

          {viewMode === 'split' && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
              <LookerStudioCanvas
                slide={currentSlide}
                totalSlides={slides.length}
                onPrevSlide={handlePrev}
                onNextSlide={handleNext}
                langMode={langMode}
                onSelectSlide={(num) => setCurrentSlideNum(num)}
                onUpdateSlide={handleUpdateSlide}
              />
              <BlueprintInspector
                slide={currentSlide}
                allSlides={slides}
                langMode={langMode}
              />
            </div>
          )}

          {viewMode === 'pdf_compare' && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col">
                <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold text-white">
                      Original Source Slide #{currentSlideNum} (02_Basics_of_Neural_Networks.pdf)
                    </span>
                  </div>
                  <button
                    onClick={() => downloadOriginalPdfFile()}
                    className="px-2.5 py-1 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Original .PDF (Page {currentSlideNum}/26)</span>
                  </button>
                </div>
                <div className="p-4 bg-slate-950 flex items-center justify-center min-h-[420px]">
                  {isLoadingPdfPage ? (
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                      <span>Rendering Original PDF Slide {currentSlideNum} / 26...</span>
                    </div>
                  ) : pdfPageDataUrl ? (
                    <img
                      src={pdfPageDataUrl}
                      alt={`Original Lecture PDF Slide ${currentSlideNum}`}
                      className="w-full h-auto rounded-lg border border-slate-800 shadow-lg bg-white"
                    />
                  ) : (
                    <div className="text-xs text-slate-400">Slide {currentSlideNum} Preview</div>
                  )}
                </div>
              </div>

              <LookerStudioCanvas
                slide={currentSlide}
                totalSlides={slides.length}
                onPrevSlide={handlePrev}
                onNextSlide={handleNext}
                langMode={langMode}
                onSelectSlide={(num) => setCurrentSlideNum(num)}
                onUpdateSlide={handleUpdateSlide}
              />
            </div>
          )}
        </main>
      </div>

      {/* Export Report & SQL Formulas Modal */}
      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        slides={slides}
        langMode={langMode}
      />
    </div>
  );
}
