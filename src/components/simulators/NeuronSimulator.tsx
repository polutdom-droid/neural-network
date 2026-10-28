import React, { useState } from 'react';
import { Cpu, Zap } from 'lucide-react';

export const NeuronSimulator: React.FC = () => {
  const [x1] = useState<number>(1.2);
  const [x2] = useState<number>(-0.8);
  const [x3] = useState<number>(0.5);

  const [w1, setW1] = useState<number>(0.8);
  const [w2, setW2] = useState<number>(-1.4);
  const [w3, setW3] = useState<number>(1.2);
  const [b, setB] = useState<number>(-0.2);
  const [animatePulse, setAnimatePulse] = useState<boolean>(true);

  // Compute linear combination z
  const z = w1 * x1 + w2 * x2 + w3 * x3 + b;
  // Compute activation a = sigmoid(z)
  const a = 1 / (1 + Math.exp(-z));

  const inputs = [
    { label: '1', sub: 'Bias Unit', weightLabel: `b = ${b.toFixed(1)}`, val: b, y: 38, color: '#c084fc' },
    { label: 'x₁', sub: `${x1.toFixed(1)}`, weightLabel: `w₁ = ${w1.toFixed(1)}`, val: x1 * w1, y: 92, color: '#38bdf8' },
    { label: 'x₂', sub: `${x2.toFixed(1)}`, weightLabel: `w₂ = ${w2.toFixed(1)}`, val: x2 * w2, y: 146, color: '#38bdf8' },
    { label: 'x₃', sub: `${x3.toFixed(1)}`, weightLabel: `w₃ = ${w3.toFixed(1)}`, val: x3 * w3, y: 200, color: '#38bdf8' }
  ];

  return (
    <div className="bg-slate-900/90 rounded-xl border border-slate-700/80 p-5 shadow-xl flex flex-col gap-4 text-slate-100">
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 animate-glow-pulse">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-blue-300">
              Animated Logistic Neuron Signal Flow: z = Wx + b & a = σ(z)
            </h4>
            <p className="text-xs text-slate-400 font-khmer">
              ចលនាបញ្ជូនសញ្ញាណឺរ៉ូនឡូជីស្ទីក៖ ផលគុណម៉ាទ្រីស និងអនុគមន៍សកម្មភាព Sigmoid
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAnimatePulse(!animatePulse)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              animatePulse ? 'bg-sky-600 text-white shadow' : 'bg-slate-800 text-slate-400'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{animatePulse ? 'Signal Flow: ON' : 'Signal Flow: OFF'}</span>
          </button>
          <div className="text-xs font-mono px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40">
            z = {z.toFixed(2)} → a = {a.toFixed(3)}
          </div>
        </div>
      </div>

      {/* Animated SVG Neuron Figure (Matching Slide 5 Schematic) */}
      <div className="bg-slate-950/90 rounded-xl p-3 border border-slate-800">
        <svg viewBox="0 0 540 235" className="w-full h-56 select-none">
          <defs>
            <filter id="glowNode">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Synaptic Wires from Inputs to Summation Node z (cx=235, cy=120) */}
          {inputs.map((inp, idx) => (
            <g key={idx}>
              {/* Base wire */}
              <line
                x1="75"
                y1={inp.y}
                x2="213"
                y2="120"
                stroke="#1e293b"
                strokeWidth="3"
              />
              {/* Animated flowing signal wire */}
              <line
                x1="75"
                y1={inp.y}
                x2="213"
                y2="120"
                stroke={inp.val >= 0 ? '#38bdf8' : '#f43f5e'}
                strokeWidth="2.2"
                className={animatePulse ? 'animate-synapse-forward' : ''}
              />
              {/* Traveling glowing signal orb */}
              {animatePulse && (
                <circle r="3.5" fill={inp.val >= 0 ? '#38bdf8' : '#f43f5e'} filter="url(#glowNode)">
                  <animateMotion
                    dur={`${1.1 + idx * 0.18}s`}
                    repeatCount="indefinite"
                    path={`M 75 ${inp.y} L 213 120`}
                  />
                </circle>
              )}
              {/* Weight label along wire */}
              <text
                x="138"
                y={(inp.y + 120) / 2 - 6}
                fill={inp.val >= 0 ? '#bae6fd' : '#fda4af'}
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
              >
                {inp.weightLabel}
              </text>
            </g>
          ))}

          {/* Wire from z (cx=235) to Sigmoid Activation Box (x=315) */}
          <line x1="257" y1="120" x2="315" y2="120" stroke="#f59e0b" strokeWidth="2.5" className={animatePulse ? 'animate-synapse-forward' : ''} />
          {animatePulse && (
            <circle r="4" fill="#f59e0b" filter="url(#glowNode)">
              <animateMotion dur="0.9s" repeatCount="indefinite" path="M 257 120 L 315 120" />
            </circle>
          )}

          {/* Wire from Sigmoid Box (x=405) to Output h(x) (x=475) */}
          <line x1="405" y1="120" x2="465" y2="120" stroke="#10b981" strokeWidth="3" className={animatePulse ? 'animate-synapse-forward' : ''} />
          {animatePulse && (
            <circle r="4.5" fill="#10b981" filter="url(#glowNode)">
              <animateMotion dur="0.9s" repeatCount="indefinite" path="M 405 120 L 465 120" />
            </circle>
          )}

          {/* Input Circles */}
          {inputs.map((inp, idx) => (
            <g key={`node-${idx}`}>
              <circle cx="55" cy={inp.y} r="19" fill="#0f172a" stroke={inp.color} strokeWidth="2.2" />
              <text x="55" y={inp.y + 4} textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold">
                {inp.label}
              </text>
              <text x="20" y={inp.y + 4} textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">
                {inp.sub}
              </text>
            </g>
          ))}

          {/* Summation Node z */}
          <g>
            <circle cx="235" cy="120" r="26" fill="#ef4444" opacity="0.15" className="animate-ping" />
            <circle cx="235" cy="120" r="23" fill="#0f172a" stroke="#ef4444" strokeWidth="2.8" filter="url(#glowNode)" />
            <text x="235" y="116" textAnchor="middle" fill="#fca5a5" fontSize="13" fontWeight="bold" fontFamily="serif">
              z = Σ
            </text>
            <text x="235" y="131" textAnchor="middle" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold">
              {z.toFixed(2)}
            </text>
          </g>

          {/* Sigmoid Activation Function Box */}
          <g>
            <rect x="315" y="85" width="90" height="70" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.2" />
            <text x="360" y="76" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
              Activation g(z)
            </text>
            {/* Mini Sigmoid S-curve inside box */}
            <path d="M 328 138 Q 360 138 360 118 Q 360 98 392 98" fill="none" stroke="#38bdf8" strokeWidth="2.2" />
            <text x="360" y="148" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
              sigmoid
            </text>
          </g>

          {/* Output Node h(x) */}
          <g>
            <circle
              cx="490"
              cy="120"
              r="26"
              fill={a >= 0.5 ? '#064e3b' : '#1e293b'}
              stroke={a >= 0.5 ? '#10b981' : '#64748b'}
              strokeWidth="2.8"
              filter="url(#glowNode)"
            />
            <text x="490" y="115" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontWeight="bold">
              h(x)
            </text>
            <text x="490" y="130" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
              {a.toFixed(3)}
            </text>
            <text x="490" y="162" textAnchor="middle" fill={a >= 0.5 ? '#34d399' : '#94a3b8'} fontSize="10" fontWeight="bold">
              {a >= 0.5 ? 'FIRED (1)' : 'QUIET (0)'}
            </text>
          </g>
        </svg>
      </div>

      {/* Weight & Bias Interactive Sliders */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400 font-mono">Weight w₁:</span>
            <span className="text-sky-400 font-mono font-bold">{w1.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.1"
            value={w1}
            onChange={(e) => setW1(parseFloat(e.target.value))}
            className="w-full accent-sky-400 h-1.5 bg-slate-700 rounded cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400 font-mono">Weight w₂:</span>
            <span className="text-sky-400 font-mono font-bold">{w2.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.1"
            value={w2}
            onChange={(e) => setW2(parseFloat(e.target.value))}
            className="w-full accent-sky-400 h-1.5 bg-slate-700 rounded cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400 font-mono">Weight w₃:</span>
            <span className="text-sky-400 font-mono font-bold">{w3.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.1"
            value={w3}
            onChange={(e) => setW3(parseFloat(e.target.value))}
            className="w-full accent-sky-400 h-1.5 bg-slate-700 rounded cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-purple-300 font-mono">Bias (b):</span>
            <span className="text-purple-400 font-mono font-bold">{b.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.1"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
            className="w-full accent-purple-400 h-1.5 bg-slate-700 rounded cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
