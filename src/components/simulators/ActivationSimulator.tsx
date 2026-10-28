import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle2, Zap, Play, Pause, RotateCcw } from 'lucide-react';

interface ActivationSimulatorProps {
  type: 'sigmoid' | 'tanh' | 'relu' | 'leaky_relu' | 'elu';
  langMode?: 'bilingual' | 'english' | 'khmer';
}

export const ActivationSimulator: React.FC<ActivationSimulatorProps> = ({ type }) => {
  const [xVal, setXVal] = useState<number>(-4.5);
  const [alpha, setAlpha] = useState<number>(type === 'leaky_relu' ? 0.15 : 1.0);
  const [isAutoSweeping, setIsAutoSweeping] = useState<boolean>(true);
  const [sweepDirection, setSweepDirection] = useState<1 | -1>(1);

  // Reset probe when activation function type changes
  useEffect(() => {
    setAlpha(type === 'leaky_relu' ? 0.15 : 1.0);
    setXVal(-4.0);
    setIsAutoSweeping(true);
  }, [type]);

  // Smooth continuous auto-sweep animation
  useEffect(() => {
    if (!isAutoSweeping) return;
    const interval = setInterval(() => {
      setXVal((prev) => {
        const next = prev + sweepDirection * 0.12;
        if (next >= 5.5) {
          setSweepDirection(-1);
          return 5.5;
        }
        if (next <= -5.5) {
          setSweepDirection(1);
          return -5.5;
        }
        return parseFloat(next.toFixed(2));
      });
    }, 45);
    return () => clearInterval(interval);
  }, [isAutoSweeping, sweepDirection]);

  // Compute activation output f(x) and derivative df/dx
  const computeValues = (x: number) => {
    switch (type) {
      case 'sigmoid': {
        const s = 1 / (1 + Math.exp(-x));
        const ds = s * (1 - s);
        return { fx: s, dfx: ds, saturated: Math.abs(x) > 3.0 };
      }
      case 'tanh': {
        const t = Math.tanh(x);
        const dt = 1 - t * t;
        return { fx: t, dfx: dt, saturated: Math.abs(x) > 2.5 };
      }
      case 'relu': {
        const r = Math.max(0, x);
        const dr = x > 0 ? 1 : 0;
        return { fx: r, dfx: dr, dead: x < 0 };
      }
      case 'leaky_relu': {
        const lr = x >= 0 ? x : alpha * x;
        const dlr = x >= 0 ? 1 : alpha;
        return { fx: lr, dfx: dlr, dead: false };
      }
      case 'elu': {
        const e = x >= 0 ? x : alpha * (Math.exp(x) - 1);
        const de = x >= 0 ? 1 : alpha * Math.exp(x);
        return { fx: e, dfx: de, saturated: x < -3.0 };
      }
    }
  };

  const current = computeValues(xVal);

  // Generate SVG path points
  const points: { x: number; y: number }[] = [];
  const derivPoints: { x: number; y: number }[] = [];
  const minX = -6;
  const maxX = 6;
  const steps = 80;

  let scaleY = 60;
  let offsetY = 120;
  if (type === 'relu' || type === 'leaky_relu' || type === 'elu') {
    scaleY = 22;
    offsetY = 170;
  }

  for (let i = 0; i <= steps; i++) {
    const x = minX + (i / steps) * (maxX - minX);
    const { fx, dfx } = computeValues(x);
    const svgX = 30 + ((x - minX) / (maxX - minX)) * 340;
    const svgY = offsetY - fx * scaleY;
    const svgDerivY = offsetY - dfx * scaleY;
    points.push({ x: svgX, y: svgY });
    derivPoints.push({ x: svgX, y: svgDerivY });
  }

  const pathD = points.reduce((acc, p, idx) => (idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`), '');
  const derivPathD = derivPoints.reduce((acc, p, idx) => (idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`), '');
  const derivAreaD = `${derivPathD} L 370 ${offsetY} L 30 ${offsetY} Z`;

  // Current probe position & animated tangent line
  const probeSvgX = 30 + ((xVal - minX) / (maxX - minX)) * 340;
  const probeSvgY = offsetY - current.fx * scaleY;
  const probeDerivSvgY = offsetY - current.dfx * scaleY;

  // Tangent line segment in math coordinates: dx = ±1.1
  const dx = 1.1;
  const tanX1 = 30 + ((xVal - dx - minX) / (maxX - minX)) * 340;
  const tanY1 = offsetY - (current.fx - current.dfx * dx) * scaleY;
  const tanX2 = 30 + ((xVal + dx - minX) / (maxX - minX)) * 340;
  const tanY2 = offsetY - (current.fx + current.dfx * dx) * scaleY;

  return (
    <div className="bg-slate-900/90 rounded-xl border border-slate-700/80 p-5 shadow-xl flex flex-col gap-4 text-slate-100">
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 animate-glow-pulse">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-sky-300">
              {type.toUpperCase()} Animated Curve, Tangent Slope & Gradient Probe
            </h4>
            <p className="text-xs text-slate-400 font-khmer">
              ចលនាខ្សែកោងសកម្មភាព បន្ទាត់ប៉ះ និងការវាស់ស្ទង់ក្រាដ្យង់ដេរីវេតាមពេលវេលាជាក់ស្តែង
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoSweeping(!isAutoSweeping)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow ${
              isAutoSweeping
                ? 'bg-amber-600 hover:bg-amber-500 text-white'
                : 'bg-sky-600 hover:bg-sky-500 text-white'
            }`}
          >
            {isAutoSweeping ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isAutoSweeping ? 'Pause Animation' : 'Animate Sweep'}</span>
          </button>

          {/* Status Badge */}
          {'saturated' in current && current.saturated && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-medium border border-rose-500/40 animate-pulse">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>Vanishing Gradient / ក្រាដ្យង់សូន្យ</span>
            </div>
          )}
          {'dead' in current && current.dead && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-medium border border-rose-500/40 animate-pulse">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>Dying ReLU / ណឺរ៉ូនស្លាប់</span>
            </div>
          )}
          {!('saturated' in current && current.saturated) && !('dead' in current && current.dead) && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/40">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Active Gradient Flow</span>
            </div>
          )}
        </div>
      </div>

      {/* Animated SVG Canvas Plot */}
      <div className="relative bg-slate-950/90 rounded-lg p-2 border border-slate-800/80 overflow-hidden">
        <svg viewBox="0 0 400 220" className="w-full h-52 select-none">
          <defs>
            <linearGradient id="derivGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
            </linearGradient>
            <filter id="glowSky">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Subtle Background Grid */}
          {[70, 135, 200, 265, 330].map((gx) => (
            <line key={gx} x1={gx} y1="15" x2={gx} y2="205" stroke="#1e293b" strokeWidth="1" />
          ))}
          {[45, 95, 145, 195].map((gy) => (
            <line key={gy} x1="30" y1={gy} x2="370" y2={gy} stroke="#1e293b" strokeWidth="1" />
          ))}

          {/* Main Axes */}
          <line x1="30" y1={offsetY} x2="370" y2={offsetY} stroke="#475569" strokeWidth="1.5" />
          <line x1="200" y1="15" x2="200" y2="205" stroke="#475569" strokeWidth="1.5" />

          {/* Axis Labels */}
          <text x="375" y={offsetY + 4} fill="#94a3b8" fontSize="10" fontWeight="bold">x</text>
          <text x="205" y="24" fill="#94a3b8" fontSize="10" fontWeight="bold">f(x)</text>

          {/* Shaded Derivative Area */}
          <path d={derivAreaD} fill="url(#derivGrad)" />

          {/* Derivative Curve */}
          <path d={derivPathD} fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,4" />

          {/* Main Activation Curve with Glow */}
          <path
            key={type}
            d={pathD}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3.2"
            strokeLinecap="round"
            filter="url(#glowSky)"
            className="animate-curve-draw"
          />

          {/* Vertical Probe Guide Line */}
          <line
            x1={probeSvgX}
            y1="15"
            x2={probeSvgX}
            y2="205"
            stroke="#38bdf8"
            strokeWidth="1"
            strokeOpacity="0.4"
            strokeDasharray="3,3"
          />

          {/* Animated Geometric Tangent Line at (x, f(x)) */}
          <line
            x1={tanX1}
            y1={tanY1}
            x2={tanX2}
            y2={tanY2}
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Derivative Point on Derivative Curve */}
          <circle cx={probeSvgX} cy={probeDerivSvgY} r="4" fill="#f59e0b" stroke="#0f172a" strokeWidth="1.5" />

          {/* Active Probe Point on Activation Curve */}
          <circle cx={probeSvgX} cy={probeSvgY} r="9" fill="#38bdf8" opacity="0.25" className="animate-ping" />
          <circle cx={probeSvgX} cy={probeSvgY} r="5.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />

          {/* Live Floating Coordinate Tag */}
          <g transform={`translate(${Math.min(295, Math.max(35, probeSvgX - 38))}, ${Math.max(18, probeSvgY - 32)})`}>
            <rect width="84" height="20" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" opacity="0.9" />
            <text x="42" y="13" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontFamily="monospace">
              f({xVal.toFixed(1)})={current.fx.toFixed(2)}
            </text>
          </g>
        </svg>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-between text-xs px-2 pt-1 text-slate-400 gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-1 bg-sky-400 inline-block rounded"></span>
              <span>Activation f(x)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 border-t-2 border-dashed border-amber-400 inline-block"></span>
              <span>Derivative f'(x)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-1 bg-emerald-400 inline-block rounded"></span>
              <span>Tangent Slope (បន្ទាត់ប៉ះ)</span>
            </span>
          </div>
          <span className="text-[11px] font-mono text-sky-400">
            {isAutoSweeping ? '● Live Auto-Sweep Active' : 'Manual Slider Mode'}
          </span>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
        <div>
          <div className="flex justify-between text-xs mb-1.5 font-medium">
            <span className="text-slate-300">Probe Input Value (x) / តម្លៃធាតុបញ្ចូល x:</span>
            <span className="font-mono text-sky-400 font-semibold">{xVal.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="-6"
            max="6"
            step="0.1"
            value={xVal}
            onChange={(e) => {
              setIsAutoSweeping(false);
              setXVal(parseFloat(e.target.value));
            }}
            className="w-full accent-sky-400 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>-6.0 (Left Tail)</span>
            <span>0.0 (Center)</span>
            <span>+6.0 (Right Tail)</span>
          </div>
        </div>

        {(type === 'leaky_relu' || type === 'elu') && (
          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-slate-300">Negative Slope Alpha (α) / មេគុណ α:</span>
              <span className="font-mono text-amber-400 font-semibold">{alpha.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.02"
              max="0.5"
              step="0.02"
              value={alpha}
              onChange={(e) => setAlpha(parseFloat(e.target.value))}
              className="w-full accent-amber-400 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
              <span>0.02 (Subtle)</span>
              <span>0.15 (Visible Slope)</span>
              <span>0.50 (Steep)</span>
            </div>
          </div>
        )}
      </div>

      {/* Animated Readout Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400 uppercase tracking-wider">Input Logit x</div>
          <div className="text-base font-bold font-mono text-slate-100 mt-0.5">{xVal.toFixed(2)}</div>
        </div>
        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400 uppercase tracking-wider">Output f(x)</div>
          <div className="text-base font-bold font-mono text-sky-400 mt-0.5">{current.fx.toFixed(4)}</div>
        </div>
        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400 uppercase tracking-wider">Gradient df/dx</div>
          <div className={`text-base font-bold font-mono mt-0.5 ${current.dfx < 0.05 ? 'text-rose-400' : 'text-emerald-400'}`}>
            {current.dfx.toFixed(4)}
          </div>
          <div className="w-full h-1 bg-slate-800 rounded mt-1 overflow-hidden">
            <div
              className={`h-full transition-all duration-150 ${current.dfx < 0.05 ? 'bg-rose-500' : 'bg-emerald-400'}`}
              style={{ width: `${Math.min(100, current.dfx * 100)}%` }}
            />
          </div>
        </div>
        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400 uppercase tracking-wider">Signal Health</div>
          <div className="text-xs font-semibold mt-1">
            {current.dfx === 0 ? (
              <span className="text-rose-400">Zero (Dead / ស្លាប់)</span>
            ) : current.dfx < 0.05 ? (
              <span className="text-amber-400">Vanishing (ខ្សោយ)</span>
            ) : (
              <span className="text-emerald-400">Strong Flow (ល្អ)</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
