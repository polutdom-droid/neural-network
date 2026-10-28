import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Share2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Layers,
  Sparkles,
  BarChart3,
  Filter,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  Sliders,
  ExternalLink
} from 'lucide-react';
import { SlideBlueprint, BilingualMode } from '../types';
import { MathView } from '../utils/mathRenderer';
import { ActivationSimulator } from './simulators/ActivationSimulator';
import { NeuronSimulator } from './simulators/NeuronSimulator';
import { PixelGridSimulator } from './simulators/PixelGridSimulator';
import { OptimizerRacer } from './simulators/OptimizerRacer';
import { OverfittingSimulator } from './simulators/OverfittingSimulator';
import { DropoutSimulator } from './simulators/DropoutSimulator';
import { BatchNormSimulator } from './simulators/BatchNormSimulator';
import { KhmerOcrSimulator } from './simulators/KhmerOcrSimulator';
import { ArchitectureVisualsSimulator } from './simulators/ArchitectureVisualsSimulator';

interface LookerStudioCanvasProps {
  slide: SlideBlueprint;
  totalSlides: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  langMode: BilingualMode;
  onSelectSlide: (num: number) => void;
  onUpdateSlide?: (updated: SlideBlueprint) => void;
}

export const LookerStudioCanvas: React.FC<LookerStudioCanvasProps> = ({
  slide,
  totalSlides,
  onPrevSlide,
  onNextSlide,
  langMode,
  onSelectSlide,
  onUpdateSlide
}) => {
  const [activeControlValues, setActiveControlValues] = useState<Record<string, string>>({});
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [showFormulaDetails, setShowFormulaDetails] = useState<boolean>(true);

  const handleControlChange = (field: string, val: string) => {
    setActiveControlValues((prev) => ({ ...prev, [field]: val }));
  };

  // Render appropriate interactive component based on slide.interactiveType
  const renderInteractiveComponent = () => {
    switch (slide.interactiveType) {
      case 'sigmoid':
        return <ActivationSimulator type="sigmoid" langMode={langMode} />;
      case 'tanh':
        return <ActivationSimulator type="tanh" langMode={langMode} />;
      case 'relu':
        return <ActivationSimulator type="relu" langMode={langMode} />;
      case 'leaky_relu':
        return <ActivationSimulator type="leaky_relu" langMode={langMode} />;
      case 'elu':
        return <ActivationSimulator type="elu" langMode={langMode} />;
      case 'logistic_neuron':
        return <NeuronSimulator />;
      case 'pixel_grid':
        return <PixelGridSimulator />;
      case 'momentum':
      case 'rmsprop_adam':
        return <OptimizerRacer />;
      case 'overfitting_curve':
      case 'l1_l2_regularization':
      case 'nonlinear':
        return <OverfittingSimulator />;
      case 'dropout':
        return <DropoutSimulator />;
      case 'batch_norm':
        return <BatchNormSimulator />;
      case 'khmer_exercise':
        return <KhmerOcrSimulator />;
      case 'deep_network':
      case 'layer_matrix':
      case 'biological':
      case 'multiclass_onehot':
      case 'cross_entropy':
      case 'weight_init':
      case 'training_pipeline':
      case 'minibatch':
      case 'hyperparameter_tuning':
      case 'references':
      case 'title':
      default:
        return (
          <ArchitectureVisualsSimulator
            type={slide.interactiveType}
            onSelectSlide={onSelectSlide}
          />
        );
    }
  };

  return (
    <div className="flex flex-col w-full bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
      {/* 1. Google Looker Studio Top Chrome Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Left: Looker Studio branding & Document Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold tracking-tight shadow">
            <BarChart3 className="w-4 h-4" />
            <span>Looker Studio</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-semibold text-slate-200">
              02_Basics_of_Neural_Networks_Dr_Valy_Dona.looker
            </span>
            <span className="text-[10px] text-slate-500 font-khmer">
              របាយការណ៍បទបង្ហាញអន្តរកម្ម BI • មូលដ្ឋានគ្រឹះនៃបណ្តាញណឺរ៉ូន
            </span>
          </div>
        </div>

        {/* Center: Page Navigation Controls */}
        <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
          <button
            onClick={onPrevSlide}
            disabled={slide.slideNumber <= 1}
            className="p-1 rounded hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:hover:bg-transparent"
            title="Previous Page (ទំព័រមុន)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <select
            value={slide.slideNumber}
            onChange={(e) => onSelectSlide(parseInt(e.target.value))}
            className="bg-transparent text-sky-400 font-semibold font-mono text-xs focus:outline-none cursor-pointer py-0.5"
          >
            {Array.from({ length: totalSlides }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num} className="bg-slate-900 text-slate-200">
                Page {num} of {totalSlides}: Slide {num}
              </option>
            ))}
          </select>

          <button
            onClick={onNextSlide}
            disabled={slide.slideNumber >= totalSlides}
            className="p-1 rounded hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:hover:bg-transparent"
            title="Next Page (ទំព័របន្ទាប់)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Looker Studio Modes & Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Live Looker Canvas (16:9)</span>
          </div>

          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
              isEditMode
                ? 'bg-amber-600 text-white shadow'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {isEditMode ? 'Design Mode (កែប្រែ)' : 'View Mode (មើល)'}
          </button>
        </div>
      </div>

      {/* 2. Interactive Looker Studio Page Canvas (16:9 Aspect Ratio) */}
      <motion.div
        key={slide.slideNumber}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative p-6 bg-slate-950 flex flex-col gap-6 text-slate-100 min-h-[720px]"
      >
        {/* Page Identity Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-800/80 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                LOOKER STUDIO PAGE {slide.slideNumber} • SLIDE {slide.slideNumber}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-300">
                {slide.category}
              </span>
            </div>

            {/* Bilingual Title */}
            {langMode !== 'khmer' && (
              <h1
                contentEditable={isEditMode}
                suppressContentEditableWarning
                onBlur={(e) => {
                  const text = e.currentTarget.textContent?.trim();
                  if (text && onUpdateSlide) {
                    onUpdateSlide({ ...slide, englishTitle: text });
                  }
                }}
                className={`text-xl md:text-2xl font-extrabold text-white tracking-tight ${
                  isEditMode ? 'outline-1 outline-dashed outline-amber-400/60 rounded px-1.5 py-0.5 bg-amber-500/5' : ''
                }`}
              >
                {slide.englishTitle}
              </h1>
            )}
            {langMode !== 'english' && (
              <h2
                contentEditable={isEditMode}
                suppressContentEditableWarning
                onBlur={(e) => {
                  const text = e.currentTarget.textContent?.trim();
                  if (text && onUpdateSlide) {
                    onUpdateSlide({ ...slide, khmerTitle: text });
                  }
                }}
                className={`text-lg md:text-xl font-bold text-amber-300 font-khmer mt-0.5 ${
                  isEditMode ? 'outline-1 outline-dashed outline-amber-400/60 rounded px-1.5 py-0.5 bg-amber-500/5' : ''
                }`}
              >
                {slide.khmerTitle}
              </h2>
            )}
          </div>

          {/* Theme & Canvas Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="text-right hidden sm:block">
              <div className="text-[11px] font-medium text-slate-400 font-mono">
                Canvas Theme: {slide.pageIdentity.canvasSetup.split('(')[0]}
              </div>
              <div className="text-[10px] text-slate-500 font-khmer">
                {slide.pageIdentity.canvasSetupKh}
              </div>
            </div>
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
              <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: slide.pageIdentity.hexPrimary }} title={`Primary: ${slide.pageIdentity.hexPrimary}`} />
              <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: slide.pageIdentity.hexSecondary }} title={`Secondary: ${slide.pageIdentity.hexSecondary}`} />
              <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: slide.pageIdentity.hexAccent }} title={`Accent: ${slide.pageIdentity.hexAccent}`} />
            </div>
          </div>
        </div>

        {/* 3. Looker Studio Dynamic Page Controls & Interactive Filters */}
        {slide.pageControls && slide.pageControls.length > 0 && (
          <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
              <Filter className="w-4 h-4 text-sky-400" />
              <span>Looker Studio Interactive Page Filters (តម្រងទិន្នន័យលើទំព័រ)</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {slide.pageControls.map((ctrl, i) => (
                <div key={i} className="flex items-center gap-2 text-xs bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                  <span className="text-slate-400">
                    {langMode === 'khmer' ? ctrl.controlLabelKh : ctrl.controlLabelEn}:
                  </span>
                  {ctrl.options ? (
                    <select
                      value={activeControlValues[ctrl.fieldName] || ctrl.defaultValue}
                      onChange={(e) => handleControlChange(ctrl.fieldName, e.target.value)}
                      className="bg-slate-900 text-sky-300 font-medium rounded px-2 py-0.5 border border-slate-700 focus:outline-none"
                    >
                      {ctrl.options.map((opt, oIdx) => (
                        <option key={oIdx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span className="font-mono text-sky-400 font-bold">{ctrl.defaultValue}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Metric Scorecards (Large Bold KPI Blocks with Animated Sparklines) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {slide.chartMetricsMath.scorecards.map((kpi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-slate-900/90 rounded-xl border border-slate-800/90 p-4 shadow-lg hover:border-sky-500/40 transition-all relative group flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span contentEditable={isEditMode} suppressContentEditableWarning>
                    {langMode === 'khmer'
                      ? kpi.labelKh
                      : langMode === 'english'
                      ? kpi.labelEn
                      : `${kpi.labelEn} / ${kpi.labelKh}`}
                  </span>
                  <HelpCircle className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                </div>
                <div
                  contentEditable={isEditMode}
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    const val = e.currentTarget.textContent?.trim();
                    if (val && onUpdateSlide) {
                      const nextScorecards = slide.chartMetricsMath.scorecards.map((sc, sIdx) =>
                        sIdx === idx ? { ...sc, value: val } : sc
                      );
                      onUpdateSlide({
                        ...slide,
                        chartMetricsMath: {
                          ...slide.chartMetricsMath,
                          scorecards: nextScorecards
                        }
                      });
                    }
                  }}
                  className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-1 font-mono"
                >
                  {kpi.value}
                </div>
              </div>

              {/* Animated SVG Sparkline Wave */}
              <svg viewBox="0 0 120 22" className="w-full h-5 mt-2 opacity-65">
                <path
                  d={
                    idx === 0
                      ? 'M 2 18 Q 25 6 45 14 T 90 8 T 118 4'
                      : idx === 1
                      ? 'M 2 15 Q 30 18 55 9 T 95 12 T 118 5'
                      : 'M 2 19 Q 28 10 60 13 T 92 6 T 118 3'
                  }
                  fill="none"
                  stroke={idx === 0 ? '#38bdf8' : idx === 1 ? '#f59e0b' : '#10b981'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="animate-curve-draw"
                />
              </svg>

              {/* Tooltip & Guidance */}
              <div className="mt-2 pt-2 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
                <span>
                  {langMode === 'khmer' ? kpi.tooltipKh : kpi.tooltipEn}
                </span>
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 5. Central Dynamic Workspace: Interactive Simulator OR Chart Specification */}
        <div className="flex flex-col gap-6">
          {/* If there is a dedicated live interactive simulator, render it here! */}
          {renderInteractiveComponent()}

          {/* Mathematical Formulas Card */}
          {slide.chartMetricsMath.mathematicalFormulas && slide.chartMetricsMath.mathematicalFormulas.length > 0 && (
            <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-5 shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 font-serif font-bold text-base">
                    ∑
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {langMode === 'khmer'
                        ? slide.chartMetricsMath.mathematicalFormulas[0].formulaNameKh
                        : langMode === 'english'
                        ? slide.chartMetricsMath.mathematicalFormulas[0].formulaNameEn
                        : `${slide.chartMetricsMath.mathematicalFormulas[0].formulaNameEn} / ${slide.chartMetricsMath.mathematicalFormulas[0].formulaNameKh}`}
                    </h3>
                    <p className="text-xs text-slate-400 font-khmer">
                      រូបមន្តគណិតវិទ្យា និងវចនានុក្រមអថេរលម្អិត
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowFormulaDetails(!showFormulaDetails)}
                  className="text-xs text-sky-400 hover:text-sky-300 font-medium"
                >
                  {showFormulaDetails ? 'Hide Variable Table' : 'Show Variable Table'}
                </button>
              </div>

              {/* Display Math Equation */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex flex-col items-center justify-center text-center overflow-x-auto my-2">
                <div className="text-lg md:text-xl text-sky-300 py-1">
                  <MathView math={slide.chartMetricsMath.mathematicalFormulas[0].latex} displayMode={true} />
                </div>
                {slide.chartMetricsMath.mathematicalFormulas[0].latexSecondary && (
                  <div className="text-base md:text-lg text-amber-300 py-1 border-t border-slate-800/60 mt-2 pt-2 w-full">
                    <MathView math={slide.chartMetricsMath.mathematicalFormulas[0].latexSecondary} displayMode={true} />
                  </div>
                )}
              </div>

              {/* Variable Dictionary Table */}
              {showFormulaDetails && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/40">
                        <th className="py-2 px-3">Symbol / និមិត្តសញ្ញា</th>
                        <th className="py-2 px-3">English Definition</th>
                        <th className="py-2 px-3 font-khmer">អត្ថន័យជាភាសាខ្មែរ</th>
                        <th className="py-2 px-3">Mathematical Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300 font-mono">
                      {slide.chartMetricsMath.mathematicalFormulas[0].variables.map((v, vIdx) => (
                        <tr key={vIdx} className="hover:bg-slate-850/40 transition-colors">
                          <td className="py-2 px-3 text-sky-300 font-bold">
                            <MathView math={v.symbol} />
                          </td>
                          <td className="py-2 px-3 font-sans text-slate-200">{v.meaningEn}</td>
                          <td className="py-2 px-3 font-khmer text-amber-200">{v.meaningKh}</td>
                          <td className="py-2 px-3 text-[11px] text-slate-400">
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                              {v.role}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Looker Studio Chart Setup Mapping Card */}
          <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-5 shadow-lg">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  Looker Studio Chart Configuration: {slide.chartMetricsMath.chartSetup.chartType}
                </h3>
                <p className="text-xs text-slate-400 font-khmer">
                  {slide.chartMetricsMath.chartSetup.chartTypeKh}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                  Dimensions (វិមាត្រ)
                </div>
                <div className="space-y-1">
                  {slide.chartMetricsMath.chartSetup.dimensions.map((d, dIdx) => (
                    <div key={dIdx} className="px-2 py-1 rounded bg-slate-900 text-sky-300 font-mono font-medium">
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                  Metrics (សូចនាករ)
                </div>
                <div className="space-y-1">
                  {slide.chartMetricsMath.chartSetup.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="px-2 py-1 rounded bg-slate-900 text-emerald-300 font-mono font-medium">
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Sort & Default Filters
                  </div>
                  <div className="text-slate-300 font-mono text-[11px] space-y-1">
                    <div>Sort: {slide.chartMetricsMath.chartSetup.sortOrder}</div>
                    <div>Default: {slide.chartMetricsMath.chartSetup.filterDefault}</div>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 mt-2 font-khmer">
                  {langMode === 'khmer'
                    ? slide.chartMetricsMath.chartSetup.chartDescriptionKh
                    : slide.chartMetricsMath.chartSetup.chartDescriptionEn}
                </div>
              </div>
            </div>
          </div>

          {/* On-Screen Presentation Text Boxes (Looker Studio Text Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {langMode !== 'khmer' && (
              <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4 shadow-lg">
                <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>On-Screen Slide Text (English)</span>
                </div>
                <ul
                  contentEditable={isEditMode}
                  suppressContentEditableWarning
                  className="space-y-2 text-xs text-slate-200 leading-relaxed list-disc list-inside"
                >
                  {slide.expandedBilingualContent.onScreenText.en.map((t, idx) => (
                    <li key={idx} className="text-slate-300">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {langMode !== 'english' && (
              <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4 shadow-lg">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-khmer">
                  <FileText className="w-3.5 h-3.5" />
                  <span>អត្ថបទបង្ហាញលើស្លាយ (ភាសាខ្មែរ)</span>
                </div>
                <ul
                  contentEditable={isEditMode}
                  suppressContentEditableWarning
                  className="space-y-2 text-xs text-amber-100/90 leading-relaxed list-disc list-inside font-khmer"
                >
                  {slide.expandedBilingualContent.onScreenText.kh.map((t, idx) => (
                    <li key={idx}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Deep-Dive Pedagogical Explanation & Real-World Application */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border border-slate-800/90 p-5 shadow-xl flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider">
                  Pedagogical Deep-Dive (ការពន្យល់ពង្រីកសេចក្តីលម្អិត)
                </span>
              </div>
              <div className="space-y-2 text-xs md:text-sm leading-relaxed text-slate-300">
                {langMode !== 'khmer' && (
                  <p
                    contentEditable={isEditMode}
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const text = e.currentTarget.textContent?.trim();
                      if (text && onUpdateSlide) {
                        onUpdateSlide({
                          ...slide,
                          expandedBilingualContent: {
                            ...slide.expandedBilingualContent,
                            deepDiveExplanation: {
                              ...slide.expandedBilingualContent.deepDiveExplanation,
                              en: text
                            }
                          }
                        });
                      }
                    }}
                    className="text-slate-200"
                  >
                    {slide.expandedBilingualContent.deepDiveExplanation.en}
                  </p>
                )}
                {langMode !== 'english' && (
                  <p
                    contentEditable={isEditMode}
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const text = e.currentTarget.textContent?.trim();
                      if (text && onUpdateSlide) {
                        onUpdateSlide({
                          ...slide,
                          expandedBilingualContent: {
                            ...slide.expandedBilingualContent,
                            deepDiveExplanation: {
                              ...slide.expandedBilingualContent.deepDiveExplanation,
                              kh: text
                            }
                          }
                        });
                      }
                    }}
                    className="text-amber-200/90 font-khmer mt-2"
                  >
                    {slide.expandedBilingualContent.deepDiveExplanation.kh}
                  </p>
                )}
              </div>
            </div>

            {/* Practical Application Banner */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Real-World Case Study: {slide.expandedBilingualContent.practicalApplication.titleEn}</span>
                </span>
                <span className="text-[11px] text-slate-400 font-khmer">
                  {slide.expandedBilingualContent.practicalApplication.titleKh}
                </span>
              </div>

              <div className="text-xs text-slate-300 space-y-1">
                {langMode !== 'khmer' && (
                  <p>{slide.expandedBilingualContent.practicalApplication.scenarioEn}</p>
                )}
                {langMode !== 'english' && (
                  <p className="font-khmer text-amber-200/90">{slide.expandedBilingualContent.practicalApplication.scenarioKh}</p>
                )}
              </div>

              <div className="mt-2 pt-2 border-t border-slate-800/80 text-[11px] text-emerald-300 flex items-center justify-between">
                <span>
                  Business / Engineering Impact: {slide.expandedBilingualContent.practicalApplication.businessImpactEn}
                </span>
                <span className="font-khmer text-[11px] text-slate-400 hidden lg:inline">
                  {slide.expandedBilingualContent.practicalApplication.businessImpactKh}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
