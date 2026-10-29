/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  Layers,
  FileText,
  Download,
  Loader2,
  Smartphone,
  Monitor,
  Globe,
  LayoutTemplate,
  Wifi,
  BatteryCharging
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
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>(() =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 'mobile' : 'desktop'
  );
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );
  const [exportModalOpen, setExportModalOpen] = useState<boolean>(false);
  const [pdfPageDataUrl, setPdfPageDataUrl] = useState<string>('');
  const [isLoadingPdfPage, setIsLoadingPdfPage] = useState<boolean>(false);
  const mainScrollRef = useRef<HTMLElement | null>(null);

  const currentSlide = slides.find((s) => s.slideNumber === currentSlideNum) || slides[0];
  const isMobileView = deviceMode === 'mobile';

  // Reset right lesson pane scroll position to top when switching slides
  useEffect(() => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSlideNum]);

  const handleToggleDeviceMode = () => {
    setDeviceMode((prev) => {
      const next = prev === 'desktop' ? 'mobile' : 'desktop';
      if (next === 'mobile') {
        setSidebarOpen(false);
        if (viewMode === 'split') setViewMode('canvas');
      } else if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      }
      return next;
    });
  };

  const handleCycleLangMode = () => {
    setLangMode((prev) =>
      prev === 'bilingual' ? 'khmer' : prev === 'khmer' ? 'english' : 'bilingual'
    );
  };

  const handleCycleViewMode = () => {
    setViewMode((prev) =>
      prev === 'canvas' ? 'blueprint' : prev === 'blueprint' ? 'pdf_compare' : 'canvas'
    );
  };

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

  const renderMainContent = () => (
    <>
      {viewMode === 'canvas' && (
        <LookerStudioCanvas
          slide={currentSlide}
          totalSlides={slides.length}
          onPrevSlide={handlePrev}
          onNextSlide={handleNext}
          langMode={langMode}
          onSelectSlide={(num) => setCurrentSlideNum(num)}
          onUpdateSlide={handleUpdateSlide}
          isMobileView={isMobileView}
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
        <div className={`grid grid-cols-1 ${isMobileView ? 'gap-4' : 'xl:grid-cols-2 gap-6'} items-start`}>
          <LookerStudioCanvas
            slide={currentSlide}
            totalSlides={slides.length}
            onPrevSlide={handlePrev}
            onNextSlide={handleNext}
            langMode={langMode}
            onSelectSlide={(num) => setCurrentSlideNum(num)}
            onUpdateSlide={handleUpdateSlide}
            isMobileView={isMobileView}
          />
          <BlueprintInspector
            slide={currentSlide}
            allSlides={slides}
            langMode={langMode}
          />
        </div>
      )}

      {viewMode === 'pdf_compare' && (
        <div className={`grid grid-cols-1 ${isMobileView ? 'gap-4' : 'xl:grid-cols-2 gap-6'} items-start`}>
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col">
            <div className="px-3.5 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-white">
                  Original PDF Slide #{currentSlideNum}
                </span>
              </div>
              <button
                onClick={() => downloadOriginalPdfFile()}
                className="px-2.5 py-1 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .PDF</span>
              </button>
            </div>
            <div className="p-3 sm:p-4 bg-slate-950 flex items-center justify-center min-h-[260px] sm:min-h-[420px]">
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
            isMobileView={isMobileView}
          />
        </div>
      )}
    </>
  );

  // Mobile Bottom Bar shared between real mobile screens and the interactive Mobile Phone Simulator
  const renderMobileBottomBar = (forceShow: boolean = false) => (
    <nav
      className={`${
        forceShow ? 'flex' : 'flex md:hidden'
      } sticky bottom-0 z-30 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-2 py-2 items-center justify-around gap-1 shadow-[0_-8px_20px_rgba(0,0,0,0.5)]`}
    >
      <button
        onClick={handlePrev}
        disabled={currentSlideNum <= 1}
        className="flex flex-col items-center justify-center min-w-[56px] py-1.5 px-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 disabled:opacity-35 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 text-sky-400" />
        <span className="text-[10px] font-khmer mt-0.5">មុន (Prev)</span>
      </button>

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`flex flex-col items-center justify-center min-w-[64px] py-1.5 px-2 rounded-xl border transition-colors ${
          sidebarOpen
            ? 'bg-sky-600 text-white border-sky-400'
            : 'bg-slate-800/90 text-sky-300 border-slate-700'
        }`}
      >
        <Layers className="w-4 h-4" />
        <span className="text-[10px] font-khmer mt-0.5">
          ស្លាយ {currentSlideNum}/26
        </span>
      </button>

      <button
        onClick={handleCycleViewMode}
        className="flex flex-col items-center justify-center min-w-[60px] py-1.5 px-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-amber-300 border border-slate-700 transition-colors"
      >
        <LayoutTemplate className="w-4 h-4" />
        <span className="text-[10px] font-khmer mt-0.5">
          {viewMode === 'canvas' ? 'Canvas' : viewMode === 'blueprint' ? 'Specs' : 'PDF'}
        </span>
      </button>

      <button
        onClick={handleCycleLangMode}
        className="flex flex-col items-center justify-center min-w-[56px] py-1.5 px-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-emerald-300 border border-slate-700 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="text-[10px] font-khmer mt-0.5">
          {langMode === 'bilingual' ? 'ទ្វេភាសា' : langMode === 'khmer' ? 'ខ្មែរ' : 'EN'}
        </span>
      </button>

      <button
        onClick={handleNext}
        disabled={currentSlideNum >= slides.length}
        className="flex flex-col items-center justify-center min-w-[56px] py-1.5 px-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white disabled:opacity-35 transition-colors shadow"
      >
        <ChevronRight className="w-4 h-4" />
        <span className="text-[10px] font-khmer mt-0.5">បន្ទាប់ (Next)</span>
      </button>
    </nav>
  );

  return (
    <div className="h-screen overflow-hidden bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
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
        deviceMode={deviceMode}
        onToggleDeviceMode={handleToggleDeviceMode}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Interactive Mobile Phone Simulator Frame (when Mobile View is toggled ON) */}
      {isMobileView ? (
        <div className="flex-1 bg-radial from-slate-900 via-slate-950 to-black flex flex-col items-center justify-start sm:justify-center p-0 sm:p-4 overflow-y-auto">
          {/* Top Helper Banner on Desktop when previewing Mobile View */}
          <div className="hidden sm:flex items-center justify-between gap-4 w-full max-w-[430px] mb-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-sky-500/30 text-xs">
            <div className="flex items-center gap-2 text-sky-300 font-khmer">
              <Smartphone className="w-4 h-4 text-sky-400 shrink-0" />
              <span>ទម្រង់ទូរស័ព្ទដៃ (Mobile App View • 430px)</span>
            </div>
            <button
              onClick={handleToggleDeviceMode}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-khmer flex items-center gap-1 text-[11px] border border-slate-700"
            >
              <Monitor className="w-3 h-3 text-amber-400" />
              <span>ពង្រីកពេញអេក្រង់កុំព្យូទ័រ</span>
            </button>
          </div>

          {/* Phone Bezel Frame */}
          <div className="w-full sm:max-w-[430px] bg-slate-950 sm:border-[8px] sm:border-slate-800 sm:rounded-[2.75rem] shadow-[0_25px_80px_rgba(0,0,0,0.85)] flex flex-col h-[calc(100vh-58px)] sm:h-[840px] sm:max-h-[86vh] overflow-hidden relative">
            {/* Smartphone Status Bar & Dynamic Island Notch */}
            <div className="hidden sm:flex items-center justify-between px-6 pt-2 pb-1.5 bg-slate-950 text-[11px] font-semibold text-slate-300 border-b border-slate-900 select-none shrink-0">
              <span>9:41</span>
              <div className="w-24 h-4 rounded-full bg-black border border-slate-800/80 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800 mr-2" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Wifi className="w-3.5 h-3.5" />
                <BatteryCharging className="w-4 h-4 text-emerald-400" />
              </div>
            </div>

            {/* Mobile App Compact Sub-Header */}
            <div className="bg-slate-900/95 px-3.5 py-2.5 border-b border-slate-800 flex items-center justify-between gap-2 shrink-0">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 flex items-center gap-1.5 text-xs font-khmer border border-slate-700"
              >
                <Menu className="w-4 h-4" />
                <span>បញ្ជីស្លាយ</span>
              </button>

              <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-white">
                  Slide {currentSlideNum} of {slides.length}
                </span>
                <span className="text-[10px] text-amber-300 font-khmer line-clamp-1 max-w-[160px]">
                  {currentSlide.khmerTitle}
                </span>
              </div>

              <button
                onClick={() => setExportModalOpen(true)}
                className="px-2.5 py-1.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export</span>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-slate-900 shrink-0">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-amber-500 transition-all duration-300"
                style={{ width: `${(currentSlideNum / slides.length) * 100}%` }}
              />
            </div>

            {/* Slide-Over Mobile Drawer & Scrollable Content Area */}
            <div className="flex-1 min-h-0 flex overflow-hidden relative">
              <Sidebar
                slides={slides}
                currentSlideNum={currentSlideNum}
                onSelectSlide={(num) => setCurrentSlideNum(num)}
                langMode={langMode}
                isOpen={sidebarOpen}
                onToggleOpen={() => setSidebarOpen(!sidebarOpen)}
                isMobileView={true}
              />

              <main
                ref={mainScrollRef}
                className="flex-1 h-full min-h-0 overflow-y-auto overscroll-y-contain scroll-smooth p-2.5"
              >
                <div className="flex flex-col gap-3 pb-6">
                  {renderMainContent()}
                </div>
              </main>
            </div>

            {/* Sticky Mobile Bottom Navigation Bar */}
            {renderMobileBottomBar(true)}
          </div>
        </div>
      ) : (
        /* Standard Responsive Desktop / Tablet / Phone Workspace */
        <div className="flex-1 min-h-0 flex overflow-hidden relative">
          {/* Collapsible 26-Slide Navigation Sidebar */}
          <Sidebar
            slides={slides}
            currentSlideNum={currentSlideNum}
            onSelectSlide={(num) => setCurrentSlideNum(num)}
            langMode={langMode}
            isOpen={sidebarOpen}
            onToggleOpen={() => setSidebarOpen(!sidebarOpen)}
            isMobileView={false}
          />

          {/* Content View Container (Independent Right-Side Scroll Area) */}
          <main
            ref={mainScrollRef}
            className="flex-1 h-full min-h-0 overflow-y-auto overscroll-y-contain scroll-smooth p-2.5 sm:p-5"
          >
            <div className="flex flex-col gap-4 pb-20 md:pb-10">
              {/* Top Quick Breadcrumb & Pagination Bar */}
              <div className="shrink-0 flex flex-wrap items-center justify-between gap-2.5 bg-slate-900/80 px-3 sm:px-4 py-2.5 rounded-xl border border-slate-800 text-xs shadow">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title={sidebarOpen ? 'Collapse Slide Navigator' : 'Open Slide Navigator'}
                  >
                    <Menu className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span className="hidden sm:inline">Lecture 02</span>
                    <span className="hidden sm:inline">/</span>
                    <span className="font-semibold text-slate-200">Slide {currentSlideNum} of 26</span>
                    <span>/</span>
                    <span className="text-sky-400 font-mono truncate max-w-[140px] sm:max-w-none">
                      {currentSlide.category}
                    </span>
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
                  <div className="hidden lg:flex items-center gap-1 max-w-xs overflow-x-auto py-1 px-1">
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

              {renderMainContent()}
            </div>
          </main>
        </div>
      )}

      {/* Sticky Bottom Bar on Real Mobile Screens even in default mode */}
      {!isMobileView && renderMobileBottomBar(false)}

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
