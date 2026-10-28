import React, { useState, useEffect } from 'react';
import { Grid, RotateCcw, Play, Pause } from 'lucide-react';

const PRESETS: Record<string, number[]> = {
  zero: [
    0,0,1,1,1,1,0,0,
    0,1,0,0,0,0,1,0,
    1,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,1,
    0,1,0,0,0,0,1,0,
    0,0,1,1,1,1,0,0
  ],
  one: [
    0,0,0,1,1,0,0,0,
    0,0,1,1,1,0,0,0,
    0,1,0,1,1,0,0,0,
    0,0,0,1,1,0,0,0,
    0,0,0,1,1,0,0,0,
    0,0,0,1,1,0,0,0,
    0,0,0,1,1,0,0,0,
    0,1,1,1,1,1,1,0
  ],
  slideSample: [
    0,0,1,1,1,1,0,0,
    0,1,0,0,0,0,1,0,
    1,0,1,0,1,0,0,1,
    1,0,1,0,1,0,0,1,
    1,0,0,0,0,1,0,1,
    1,0,1,1,1,0,0,1,
    0,1,0,0,0,0,1,0,
    0,0,1,1,1,1,0,0
  ],
  khmerKa: [
    0,1,1,1,1,1,0,0,
    0,0,0,1,0,0,0,0,
    0,0,1,1,1,0,0,0,
    0,1,0,1,0,1,0,0,
    1,0,0,1,0,0,1,0,
    1,0,0,1,0,0,1,0,
    1,0,0,1,0,0,1,0,
    1,0,0,0,0,0,1,0
  ]
};

export const PixelGridSimulator: React.FC = () => {
  const [grid, setGrid] = useState<number[]>(PRESETS.slideSample);
  const [activePreset, setActivePreset] = useState<string>('slideSample');
  const [isScanning, setIsScanning] = useState<boolean>(true);
  const [scanIndex, setScanIndex] = useState<number>(0);

  // Animated raster scan across 0..63
  useEffect(() => {
    if (!isScanning) return;
    const timer = setInterval(() => {
      setScanIndex((prev) => (prev + 1) % 64);
    }, 110);
    return () => clearInterval(timer);
  }, [isScanning]);

  const togglePixel = (index: number) => {
    const next = [...grid];
    next[index] = next[index] === 1 ? 0 : 1;
    setGrid(next);
    setActivePreset('custom');
  };

  const loadPreset = (key: string) => {
    setGrid(PRESETS[key]);
    setActivePreset(key);
    setScanIndex(0);
  };

  const activeCount = grid.filter((v) => v === 1).length;

  return (
    <div className="bg-slate-900/90 rounded-xl border border-slate-700/80 p-5 shadow-xl flex flex-col gap-4 text-slate-100">
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 animate-glow-pulse">
            <Grid className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-sky-300">
              Animated 8×8 Pixel Raster Scanner & Vector Unrolling x ∈ ℝ⁶⁴
            </h4>
            <p className="text-xs text-slate-400 font-khmer">
              ចលនាស្កេនក្រឡាភិចសែល 8×8 ទៅជាវ៉ិចទ័រលក្ខណៈបញ្ឈរចំនួន ៦៤ ធាតុ
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsScanning(!isScanning)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isScanning ? 'bg-amber-600 text-white shadow' : 'bg-sky-600 text-white shadow'
            }`}
          >
            {isScanning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isScanning ? 'Pause Scanner' : 'Animate Scan'}</span>
          </button>
          <div className="text-xs font-mono px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40">
            Scanning x_{scanIndex + 1} = {grid[scanIndex]}
          </div>
        </div>
      </div>

      {/* Preset Toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-400">Presets:</span>
        <button
          onClick={() => loadPreset('slideSample')}
          className={`px-2.5 py-1 text-xs rounded transition-colors ${
            activePreset === 'slideSample' ? 'bg-sky-600 text-white font-medium' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Slide 3 Sample (រូបគំរូស្លាយ)
        </button>
        <button
          onClick={() => loadPreset('zero')}
          className={`px-2.5 py-1 text-xs rounded transition-colors ${
            activePreset === 'zero' ? 'bg-sky-600 text-white font-medium' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Digit 0 (លេខ ០)
        </button>
        <button
          onClick={() => loadPreset('one')}
          className={`px-2.5 py-1 text-xs rounded transition-colors ${
            activePreset === 'one' ? 'bg-sky-600 text-white font-medium' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Digit 1 (លេខ ១)
        </button>
        <button
          onClick={() => loadPreset('khmerKa')}
          className={`px-2.5 py-1 text-xs rounded transition-colors font-khmer ${
            activePreset === 'khmerKa' ? 'bg-amber-600 text-white font-medium' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Khmer Ka ក
        </button>
        <button
          onClick={() => {
            setGrid(new Array(64).fill(0));
            setActivePreset('custom');
          }}
          className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-400 hover:text-rose-300 hover:bg-rose-900/30 flex items-center gap-1 ml-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear Grid</span>
        </button>
      </div>

      {/* Interactive Grid & Vector Representation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Clickable 8x8 Canvas with Animated Raster Highlight */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col items-center">
          <div className="text-xs text-slate-400 mb-2 font-medium">
            Click cells to toggle • Cyan ring = Active Raster Scan (x_{scanIndex + 1}):
          </div>
          <div className="grid grid-cols-8 gap-1 p-2 bg-slate-900 rounded-lg border border-slate-700">
            {grid.map((val, idx) => {
              const isScanned = isScanning && idx === scanIndex;
              return (
                <button
                  key={idx}
                  onClick={() => togglePixel(idx)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded text-xs font-mono font-bold transition-all flex items-center justify-center ${
                    isScanned
                      ? 'ring-2 ring-cyan-400 scale-110 z-10 bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.9)]'
                      : val === 1
                      ? 'bg-rose-500 text-white shadow-[0_0_8px_rgba(244,63,94,0.5)]'
                      : 'bg-slate-950 text-slate-600 hover:bg-slate-800'
                  }`}
                  title={`Pixel ${idx + 1}: value = ${val}`}
                >
                  {val}
                </button>
              );
            })}
          </div>
          <div className="text-[11px] text-slate-500 mt-2 font-mono">
            Active Pixels: {activeCount}/64 | Row {Math.floor(scanIndex / 8) + 1}, Col {(scanIndex % 8) + 1}
          </div>
        </div>

        {/* Flattened Vector Box */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
              <span>Flattened Feature Column Vector x ∈ ℝ⁶⁴:</span>
              <span className="font-mono text-sky-400">n = 64 features</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded font-mono text-xs text-slate-300 max-h-48 overflow-y-auto leading-relaxed border border-slate-800">
              <div className="text-slate-500 mb-1">// x = [pixel_1, pixel_2, ..., pixel_64]ᵀ</div>
              <div className="flex flex-wrap gap-1">
                {grid.map((v, i) => {
                  const isScanned = isScanning && i === scanIndex;
                  return (
                    <span
                      key={i}
                      className={`px-1.5 py-0.5 rounded text-[11px] transition-all ${
                        isScanned
                          ? 'bg-cyan-400 text-slate-950 font-extrabold scale-105 shadow'
                          : v === 1
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                          : 'text-slate-500'
                      }`}
                    >
                      x_{i + 1}:{v}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 leading-normal">
            <span className="font-semibold text-amber-300">Feature Explosion Insight:</span> An 8×8 image creates 64
            features. A 100×100 RGB image creates 30,000 features, where quadratic combinations exceed{' '}
            <strong className="text-white">450 Million parameters</strong>!
          </div>
        </div>
      </div>
    </div>
  );
};
