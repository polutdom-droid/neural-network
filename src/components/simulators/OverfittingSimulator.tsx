import React, { useState, useEffect } from 'react';
import { Sliders, ShieldCheck, AlertCircle, Play, Pause } from 'lucide-react';

export const OverfittingSimulator: React.FC = () => {
  const [degree, setDegree] = useState<number>(6);
  const [lambda, setLambda] = useState<number>(0.0);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [animPhase, setAnimPhase] = useState<number>(0);

  // Smoothly animate lambda from 0 (wild overfitting) to 0.6 (smooth regularized curve)
  useEffect(() => {
    if (!isAnimating) return;
    const timer = setInterval(() => {
      setAnimPhase((prev) => {
        const next = (prev + 0.08) % (Math.PI * 2);
        const oscLambda = ((1 - Math.cos(next)) / 2) * 0.45;
        setLambda(parseFloat(oscLambda.toFixed(2)));
        return next;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [isAnimating]);

  // Ground truth data points (Land Area in m² vs Price in $1000)
  const dataPoints = [
    { x: 430, y: 2.2 },
    { x: 470, y: 4.8 },
    { x: 510, y: 6.9 },
    { x: 540, y: 7.2 },
    { x: 580, y: 8.8 },
    { x: 620, y: 9.3 },
    { x: 660, y: 10.4 },
    { x: 700, y: 11.8 }
  ];

  const minX = 400;
  const maxX = 750;
  const minY = 0;
  const maxY = 14;

  const toSvgX = (x: number) => 40 + ((x - minX) / (maxX - minX)) * 420;
  const toSvgY = (y: number) => 215 - ((y - minY) / (maxY - minY)) * 185;

  const evalCurve = (rawX: number) => {
    const xNorm = ((rawX - minX) / (maxX - minX)) * 2 - 1;
    const naturalBase = 1.2 + 1.8 * (xNorm + 1) + 0.3 * Math.pow(xNorm, 2);
    const wiggle =
      (Math.sin(degree * Math.PI * xNorm) * 2.1 * Math.max(0, degree - 2)) /
      (1 + lambda * 16);
    return Math.max(0.6, Math.min(13.5, naturalBase * 2.2 + wiggle));
  };

  const curvePoints: { x: number; y: number }[] = [];
  const optimalPoints: { x: number; y: number }[] = [];
  const sampleSteps = 90;
  for (let i = 0; i <= sampleSteps; i++) {
    const rawX = minX + (i / sampleSteps) * (maxX - minX);
    const xNorm = ((rawX - minX) / (maxX - minX)) * 2 - 1;
    const yVal = evalCurve(rawX);
    const optVal = (1.2 + 1.8 * (xNorm + 1) + 0.3 * Math.pow(xNorm, 2)) * 2.2;
    curvePoints.push({ x: toSvgX(rawX), y: toSvgY(yVal) });
    optimalPoints.push({ x: toSvgX(rawX), y: toSvgY(optVal) });
  }

  const pathD = curvePoints.reduce((acc, p, idx) => (idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`), '');
  const optPathD = optimalPoints.reduce((acc, p, idx) => (idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`), '');

  const trainError = Math.max(0.05, 1.8 / Math.pow(degree, 1.2) + lambda * 0.25);
  const testError = Math.max(0.38, (Math.pow(degree, 1.8) * 0.35) / (1 + lambda * 10));

  return (
    <div className="bg-slate-900/90 rounded-xl border border-slate-700/80 p-5 shadow-xl flex flex-col gap-4 text-slate-100">
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 animate-glow-pulse">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-amber-300">
              Animated Polynomial Overfitting vs. L2 Regularization (Weight Decay)
            </h4>
            <p className="text-xs text-slate-400 font-khmer">
              ចលនាពន្លូនខ្សែកោង Overfitting តាមរយៈការកែប្រែមេគុណផាកពិន័យ Lambda (λ)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow ${
              isAnimating ? 'bg-amber-600 text-white' : 'bg-sky-600 text-white'
            }`}
          >
            {isAnimating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isAnimating ? 'Pause Morphing' : 'Animate Regularization'}</span>
          </button>

          {degree >= 5 && lambda < 0.12 ? (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-medium border border-rose-500/40 animate-pulse">
              <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
              <span>Overfitting (High Variance)</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/40">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Smooth Generalization</span>
            </div>
          )}
        </div>
      </div>

      {/* 2D Animated Curve Plot */}
      <div className="relative bg-slate-950 rounded-lg p-2 border border-slate-800">
        <svg viewBox="0 0 500 235" className="w-full h-52 select-none">
          {/* Axes */}
          <line x1="40" y1="215" x2="480" y2="215" stroke="#475569" strokeWidth="1.5" />
          <line x1="40" y1="15" x2="40" y2="215" stroke="#475569" strokeWidth="1.5" />

          {/* Grid lines */}
          <line x1="40" y1="115" x2="480" y2="115" stroke="#1e293b" strokeDasharray="3,3" />
          <line x1="260" y1="15" x2="260" y2="215" stroke="#1e293b" strokeDasharray="3,3" />

          <text x="435" y="230" fill="#64748b" fontSize="10">Land Area (m²)</text>
          <text x="46" y="28" fill="#64748b" fontSize="10">Price ($1000)</text>

          {/* True Optimal Reference Curve (Dashed Sky) */}
          <path d={optPathD} fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="5,4" opacity="0.55" />

          {/* Active Polynomial Fit Curve */}
          <path
            d={pathD}
            fill="none"
            stroke={lambda > 0.14 ? '#10b981' : '#f43f5e'}
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Data Points & Animated Residual Error Lines */}
          {dataPoints.map((pt, i) => {
            const sx = toSvgX(pt.x);
            const sy = toSvgY(pt.y);
            const predY = toSvgY(evalCurve(pt.x));
            return (
              <g key={i}>
                {/* Vertical residual line */}
                <line
                  x1={sx}
                  y1={sy}
                  x2={sx}
                  y2={predY}
                  stroke="#f59e0b"
                  strokeWidth="1.5"
                  strokeDasharray="2,2"
                />
                {/* Training data cross */}
                <circle cx={sx} cy={sy} r="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.2" />
              </g>
            );
          })}
        </svg>

        <div className="flex flex-wrap items-center justify-between text-xs px-2 pt-1 text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-sky-400 inline-block"></span>
              <span>Training Data (ដីឡូតិ៍ពិត)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className={`w-3 h-1 rounded ${lambda > 0.14 ? 'bg-emerald-400' : 'bg-rose-500'} inline-block`}></span>
              <span>Active Hypothesis h(x)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 border-t border-dashed border-sky-400 inline-block"></span>
              <span>True Target Trend</span>
            </span>
          </div>
          <span className="font-mono text-[11px] text-amber-300">Degree: {degree} | λ: {lambda.toFixed(2)}</span>
        </div>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
        <div>
          <div className="flex justify-between text-xs mb-1.5 font-medium">
            <span className="text-slate-300">Polynomial Degree (ដឺក្រេពហុធា):</span>
            <span className="font-mono text-rose-400 font-semibold">Degree {degree}</span>
          </div>
          <input
            type="range"
            min="1"
            max="8"
            step="1"
            value={degree}
            onChange={(e) => {
              setIsAnimating(false);
              setDegree(parseInt(e.target.value));
            }}
            className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1.5 font-medium">
            <span className="text-slate-300">Regularization Lambda (λ) / មេគុណ λ:</span>
            <span className="font-mono text-emerald-400 font-semibold">{lambda.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.02"
            value={lambda}
            onChange={(e) => {
              setIsAnimating(false);
              setLambda(parseFloat(e.target.value));
            }}
            className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
          />
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400 uppercase">Training Loss</div>
          <div className="text-base font-bold font-mono text-sky-400 mt-0.5">{trainError.toFixed(3)}</div>
        </div>
        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400 uppercase">Test Generalization Error</div>
          <div className={`text-base font-bold font-mono mt-0.5 ${testError > 1.2 ? 'text-rose-400' : 'text-emerald-400'}`}>
            {testError.toFixed(3)}
          </div>
        </div>
        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400 uppercase">Weight Norm ||W||²</div>
          <div className="text-base font-bold font-mono text-amber-300 mt-0.5">
            {((degree * 24) / (1 + lambda * 14)).toFixed(1)}
          </div>
        </div>
        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400 uppercase">Regularization Status</div>
          <div className="text-xs font-semibold mt-1 text-slate-200">
            {lambda < 0.08 ? 'Unregularized (Wiggly)' : 'L2 Smoothed (Optimal)'}
          </div>
        </div>
      </div>
    </div>
  );
};
