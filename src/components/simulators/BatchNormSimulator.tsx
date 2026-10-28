import React, { useState, useEffect } from 'react';
import { Activity, Play, Pause } from 'lucide-react';

export const BatchNormSimulator: React.FC = () => {
  const [gamma, setGamma] = useState<number>(1.1);
  const [beta, setBeta] = useState<number>(0.0);
  const [isNormalized, setIsNormalized] = useState<boolean>(true);
  const [animateShift, setAnimateShift] = useState<boolean>(true);
  const [phase, setPhase] = useState<number>(0);

  // Animate internal covariate shift on the raw distribution
  useEffect(() => {
    if (!animateShift) return;
    const timer = setInterval(() => {
      setPhase((p) => (p + 0.14) % (Math.PI * 2));
    }, 60);
    return () => clearInterval(timer);
  }, [animateShift]);

  const pointsBefore: { x: number; y: number }[] = [];
  const pointsAfter: { x: number; y: number }[] = [];

  const minX = -6;
  const maxX = 6;
  const steps = 75;

  // Dynamic drifting unnormalized distribution (Internal Covariate Shift!)
  const rawMu = 2.0 + Math.sin(phase) * 1.4;
  const rawSigma = 1.65 + Math.cos(phase * 0.8) * 0.45;

  // Stabilized BatchNorm distribution
  const normMu = beta;
  const normSigma = Math.max(0.25, gamma);

  const toSvgX = (x: number) => 30 + ((x - minX) / (maxX - minX)) * 340;
  const toSvgY = (dens: number) => 182 - dens * 310;

  for (let i = 0; i <= steps; i++) {
    const x = minX + (i / steps) * (maxX - minX);
    const dRaw =
      (1 / (rawSigma * Math.sqrt(2 * Math.PI))) *
      Math.exp(-Math.pow(x - rawMu, 2) / (2 * rawSigma * rawSigma));
    pointsBefore.push({ x: toSvgX(x), y: toSvgY(dRaw) });

    const dNorm =
      (1 / (normSigma * Math.sqrt(2 * Math.PI))) *
      Math.exp(-Math.pow(x - normMu, 2) / (2 * normSigma * normSigma));
    pointsAfter.push({ x: toSvgX(x), y: toSvgY(dNorm) });
  }

  const rawPath = pointsBefore.reduce((acc, p, idx) => (idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`), '');
  const normPath = pointsAfter.reduce((acc, p, idx) => (idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`), '');
  const normArea = `${normPath} L 370 182 L 30 182 Z`;

  return (
    <div className="bg-slate-900/90 rounded-xl border border-slate-700/80 p-5 shadow-xl flex flex-col gap-4 text-slate-100">
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 animate-glow-pulse">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-blue-300">
              Animated Internal Covariate Shift vs. Batch Normalization
            </h4>
            <p className="text-xs text-slate-400 font-khmer">
              ចលនាប្រៀបធៀបការរង្គោះរង្គើនៃទិន្នន័យដើម (Covariate Shift) និងស្ថិរភាពក្រោយ Batch Norm
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAnimateShift(!animateShift)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
              animateShift ? 'bg-amber-600 text-white shadow' : 'bg-slate-800 text-slate-300'
            }`}
          >
            {animateShift ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{animateShift ? 'Pause Shift' : 'Animate Covariate Shift'}</span>
          </button>
          <button
            onClick={() => setIsNormalized(!isNormalized)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
              isNormalized
                ? 'bg-blue-600 text-white border-blue-400 shadow'
                : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            {isNormalized ? 'Batch Norm: ON' : 'Batch Norm: OFF'}
          </button>
        </div>
      </div>

      {/* Animated Bell Curve Plot */}
      <div className="relative bg-slate-950 rounded-lg p-2 border border-slate-800">
        <svg viewBox="0 0 400 210" className="w-full h-52 select-none">
          <defs>
            <linearGradient id="bnFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Axis */}
          <line x1="30" y1="182" x2="370" y2="182" stroke="#334155" strokeWidth="1.5" />
          <line x1="200" y1="18" x2="200" y2="182" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />
          <text x="200" y="198" textAnchor="middle" fill="#64748b" fontSize="10">0.0 (Zero-Mean Target)</text>

          {/* Drifting Raw Distribution (Red Dashed) */}
          <path
            d={rawPath}
            fill="rgba(244,63,94,0.08)"
            stroke="#f43f5e"
            strokeWidth="2.2"
            strokeDasharray="4,3"
          />
          <circle cx={toSvgX(rawMu)} cy="182" r="4" fill="#f43f5e" />
          <text x={toSvgX(rawMu)} y="172" textAnchor="middle" fill="#fda4af" fontSize="9" fontFamily="monospace">
            μ_raw={rawMu.toFixed(1)}
          </text>

          {/* Stabilized Batch Normalized Distribution */}
          {isNormalized && (
            <>
              <path d={normArea} fill="url(#bnFill)" />
              <path d={normPath} fill="none" stroke="#38bdf8" strokeWidth="3.2" />
              <circle cx={toSvgX(normMu)} cy="182" r="4.5" fill="#38bdf8" stroke="#fff" strokeWidth="1.5" />
            </>
          )}
        </svg>

        <div className="flex flex-wrap items-center justify-between text-xs px-2 pt-1 text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 border-t-2 border-dashed border-rose-500 inline-block"></span>
              <span>Drifting Raw Layer Input (μ={rawMu.toFixed(1)}, σ={rawSigma.toFixed(1)})</span>
            </span>
            {isNormalized && (
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-1 bg-sky-400 inline-block rounded"></span>
                <span>Stabilized BatchNorm (γ={gamma.toFixed(1)}, β={beta.toFixed(1)})</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Trainable Parameters γ and β Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
        <div>
          <div className="flex justify-between text-xs mb-1.5 font-medium">
            <span className="text-slate-300">Trainable Scale Factor (γ) / មេគុណពង្រីក:</span>
            <span className="font-mono text-sky-400 font-semibold">{gamma.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.4"
            max="2.2"
            step="0.05"
            value={gamma}
            onChange={(e) => setGamma(parseFloat(e.target.value))}
            className="w-full accent-sky-400 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1.5 font-medium">
            <span className="text-slate-300">Trainable Shift Offset (β) / តម្លៃរំកិល:</span>
            <span className="font-mono text-amber-400 font-semibold">{beta.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="-2.0"
            max="2.0"
            step="0.1"
            value={beta}
            onChange={(e) => setBeta(parseFloat(e.target.value))}
            className="w-full accent-amber-400 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
