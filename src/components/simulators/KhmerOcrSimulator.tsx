import React, { useState, useEffect } from 'react';
import { Award, Play, Pause } from 'lucide-react';

interface CharacterResult {
  char: string;
  nameEn: string;
  nameKh: string;
  confidence: number;
  testErrorRate: number;
}

const KHMER_CHARS: CharacterResult[] = [
  { char: 'ក', nameEn: 'Ka', nameKh: 'ក (ព្យញ្ជនៈ ទីមួយ)', confidence: 0.984, testErrorRate: 1.6 },
  { char: 'ខ', nameEn: 'Kha', nameKh: 'ខ (ព្យញ្ជនៈ ទីពីរ)', confidence: 0.978, testErrorRate: 2.2 },
  { char: 'គ', nameEn: 'Ko', nameKh: 'គ (ព្យញ្ជនៈ ទីបី)', confidence: 0.962, testErrorRate: 3.8 },
  { char: 'ឃ', nameEn: 'Kho', nameKh: 'ឃ (ព្យញ្ជនៈ ទីបួន)', confidence: 0.959, testErrorRate: 4.1 },
  { char: 'ង', nameEn: 'Ngo', nameKh: 'ង (ព្យញ្ជនៈ ទីប្រាំ)', confidence: 0.991, testErrorRate: 0.9 }
];

export const KhmerOcrSimulator: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [useBatchNorm, setUseBatchNorm] = useState<boolean>(true);
  const [useDropout, setUseDropout] = useState<boolean>(true);
  const [useL2, setUseL2] = useState<boolean>(true);
  const [autoCycle, setAutoCycle] = useState<boolean>(true);

  useEffect(() => {
    if (!autoCycle) return;
    const timer = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % KHMER_CHARS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [autoCycle]);

  const selected = KHMER_CHARS[selectedIdx];

  // Dynamic penalty if regularizers are turned off
  let penalty = 0;
  if (!useBatchNorm) penalty += 4.5;
  if (!useDropout) penalty += 5.2;
  if (!useL2) penalty += 3.8;

  const effectiveError = Math.min(25, selected.testErrorRate + penalty);
  const effectiveAccuracy = (100 - effectiveError).toFixed(1);

  return (
    <div className="bg-slate-900/90 rounded-xl border border-slate-700/80 p-5 shadow-xl flex flex-col gap-4 text-slate-100">
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 animate-glow-pulse">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-amber-300">
              Animated Khmer Character OCR Inference Lab (kh_char.zip)
            </h4>
            <p className="text-xs text-slate-400 font-khmer">
              ចលនាស្កេនស្គាល់តួអក្សរខ្មែរស្វ័យប្រវត្តិ និងម៉ាទ្រីសច្រឡំ Confusion Matrix
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoCycle(!autoCycle)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow ${
              autoCycle ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300'
            }`}
          >
            {autoCycle ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{autoCycle ? 'Pause Auto-OCR' : 'Auto-Cycle OCR'}</span>
          </button>
          <div className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
            Test Error: {effectiveError.toFixed(1)}%
          </div>
        </div>
      </div>

      {/* Character Selector Row */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-400 font-khmer">ជ្រើសរើសតួអក្សរតេស្ត៖</span>
        {KHMER_CHARS.map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              setAutoCycle(false);
              setSelectedIdx(idx);
            }}
            className={`w-11 h-11 rounded-lg text-lg font-khmer font-bold transition-all flex items-center justify-center ${
              selectedIdx === idx
                ? 'bg-amber-600 text-white shadow-[0_0_14px_rgba(217,119,6,0.7)] scale-105 ring-2 ring-amber-300'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {item.char}
          </button>
        ))}
        <span className="text-xs text-amber-300 ml-2 font-khmer font-semibold">
          Active: {selected.nameKh} ({selected.nameEn})
        </span>
      </div>

      {/* Main Interactive OCR Sandbox Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Character Visualizer Box with Animated Optical Laser Beam */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col items-center justify-center text-center">
          <div className="text-xs text-slate-400 mb-2 font-khmer">ប្រព័ន្ធស្កេនភិចសែលអក្សរខ្មែរ (32×32)</div>
          <div className="w-32 h-32 rounded-xl bg-slate-900 border-2 border-amber-500/50 flex items-center justify-center shadow-inner relative overflow-hidden">
            <span className="text-7xl font-khmer font-bold text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]">
              {selected.char}
            </span>
            {/* Animated Optical Laser Scan Line */}
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee] animate-laser-scan pointer-events-none" />
            <div className="absolute inset-0 bg-sky-500/5 rounded-xl pointer-events-none border border-dashed border-sky-400/30" />
          </div>
          <div className="text-[11px] text-cyan-400 mt-2 font-mono">
            ● Neural Feature Extraction Active
          </div>
        </div>

        {/* Regularization Stack Controller */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col justify-between">
          <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Regularization & Tuning Stack
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="flex items-center justify-between text-xs cursor-pointer p-2 rounded bg-slate-900 border border-slate-800 hover:bg-slate-850">
              <span className="flex items-center gap-1.5 text-slate-200">
                <input
                  type="checkbox"
                  checked={useBatchNorm}
                  onChange={(e) => setUseBatchNorm(e.target.checked)}
                  className="accent-amber-500"
                />
                <span>Batch Normalization</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">-4.5% Err</span>
            </label>

            <label className="flex items-center justify-between text-xs cursor-pointer p-2 rounded bg-slate-900 border border-slate-800 hover:bg-slate-850">
              <span className="flex items-center gap-1.5 text-slate-200">
                <input
                  type="checkbox"
                  checked={useDropout}
                  onChange={(e) => setUseDropout(e.target.checked)}
                  className="accent-amber-500"
                />
                <span>Dropout (p = 0.5)</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">-5.2% Err</span>
            </label>

            <label className="flex items-center justify-between text-xs cursor-pointer p-2 rounded bg-slate-900 border border-slate-800 hover:bg-slate-850">
              <span className="flex items-center gap-1.5 text-slate-200">
                <input
                  type="checkbox"
                  checked={useL2}
                  onChange={(e) => setUseL2(e.target.checked)}
                  className="accent-amber-500"
                />
                <span>L2 Weight Decay (λ=0.01)</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">-3.8% Err</span>
            </label>
          </div>

          <div className="text-[11px] text-slate-500 mt-2 font-khmer">
            បើបិទ Regularization គំរូនឹង Overfit ហើយកំហុសតេស្តនឹងកើនឡើង។
          </div>
        </div>

        {/* Animated Prediction Confidence Gauge */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col justify-between">
          <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
            Softmax Class Distribution
          </div>
          <div className="space-y-1.5">
            {KHMER_CHARS.map((item, idx) => {
              const isSelected = idx === selectedIdx;
              const prob = isSelected ? Math.max(0.5, 0.98 - penalty * 0.03) : (penalty * 0.03 + 0.02) / 4;
              return (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <span className="w-5 font-khmer font-bold text-slate-300">{item.char}</span>
                  <div className="flex-1 h-3.5 bg-slate-800 rounded overflow-hidden">
                    <div
                      className={`h-full rounded transition-all duration-500 ${
                        isSelected ? 'bg-gradient-to-r from-amber-500 to-emerald-400' : 'bg-slate-700'
                      }`}
                      style={{ width: `${Math.round(prob * 100)}%` }}
                    />
                  </div>
                  <span className="w-10 text-right font-mono text-[11px] text-slate-400">
                    {(prob * 100).toFixed(0)}%
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">Test Accuracy:</span>
            <span className={`font-bold font-mono ${effectiveError <= 2.5 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {effectiveAccuracy}%
            </span>
          </div>
        </div>
      </div>

      {/* Confusion Matrix Mini-Heatmap with Active Row/Col Highlight */}
      <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
        <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
          <span>Animated Khmer Confusion Matrix Subset (ក, ខ, គ, ឃ, ង)</span>
          <span className="text-[11px] text-slate-500 font-khmer">ចំណុចប្រឈម៖ គ vs ឃ (រាងស្រដៀងគ្នា)</span>
        </div>
        <div className="grid grid-cols-6 gap-1 text-center font-mono text-xs">
          <div className="p-1 text-slate-500 text-[10px]">True\Pred</div>
          {KHMER_CHARS.map((c, i) => (
            <div
              key={i}
              className={`p-1 font-khmer font-bold rounded transition-colors ${
                selectedIdx === i ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' : 'bg-slate-900 text-slate-300'
              }`}
            >
              {c.char}
            </div>
          ))}

          {KHMER_CHARS.map((r, rowIdx) => (
            <React.Fragment key={rowIdx}>
              <div
                className={`p-1 font-khmer font-bold rounded flex items-center justify-center transition-colors ${
                  selectedIdx === rowIdx ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' : 'bg-slate-900 text-slate-300'
                }`}
              >
                {r.char}
              </div>
              {KHMER_CHARS.map((col, colIdx) => {
                const match = rowIdx === colIdx;
                const isActiveTarget = match && rowIdx === selectedIdx;
                const count = match ? (98 - (rowIdx === 2 || rowIdx === 3 ? 4 : 1)) : rowIdx === 2 && colIdx === 3 ? 3 : 0;
                return (
                  <div
                    key={colIdx}
                    className={`p-1.5 rounded font-bold text-[11px] transition-all duration-300 ${
                      isActiveTarget
                        ? 'bg-emerald-500 text-slate-950 scale-105 shadow-[0_0_12px_rgba(16,185,129,0.7)]'
                        : match
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                        : count > 0
                        ? 'bg-rose-950/50 text-rose-300 border border-rose-500/30'
                        : 'bg-slate-900/50 text-slate-600'
                    }`}
                  >
                    {count}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
