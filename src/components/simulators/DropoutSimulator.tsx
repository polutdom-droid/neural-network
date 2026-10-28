import React, { useState, useEffect } from 'react';
import { Shuffle, Cpu, Play, Pause } from 'lucide-react';

export const DropoutSimulator: React.FC = () => {
  const [dropoutRate, setDropoutRate] = useState<number>(0.5);
  const [droppedMaskL2, setDroppedMaskL2] = useState<boolean[]>([false, true, false, true]);
  const [droppedMaskL3, setDroppedMaskL3] = useState<boolean[]>([true, false, true, false]);
  const [autoTrain, setAutoTrain] = useState<boolean>(true);
  const [batchCounter, setBatchCounter] = useState<number>(1);

  const resampleDropout = () => {
    setDroppedMaskL2([
      Math.random() < dropoutRate,
      Math.random() < dropoutRate,
      Math.random() < dropoutRate,
      Math.random() < dropoutRate
    ]);
    setDroppedMaskL3([
      Math.random() < dropoutRate,
      Math.random() < dropoutRate,
      Math.random() < dropoutRate,
      Math.random() < dropoutRate
    ]);
    setBatchCounter((b) => b + 1);
  };

  useEffect(() => {
    if (!autoTrain) return;
    const timer = setInterval(resampleDropout, 1250);
    return () => clearInterval(timer);
  }, [autoTrain, dropoutRate]);

  const l2Active = droppedMaskL2.filter((d) => !d).length;
  const l3Active = droppedMaskL3.filter((d) => !d).length;

  return (
    <div className="bg-slate-900/90 rounded-xl border border-slate-700/80 p-5 shadow-xl flex flex-col gap-4 text-slate-100">
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 animate-glow-pulse">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-cyan-300">
              Animated Live Dropout Sub-Network Ensemble: p = {dropoutRate.toFixed(2)}
            </h4>
            <p className="text-xs text-slate-400 font-khmer">
              ចលនាកាត់ផ្តាច់ណឺរ៉ូនចៃដន្យតាមបាច់នីមួយៗ និងលំហូរសញ្ញាតាមផ្លូវដែលនៅសល់
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoTrain(!autoTrain)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow ${
              autoTrain ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white'
            }`}
          >
            {autoTrain ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{autoTrain ? 'Pause Loop' : 'Auto-Train Loop'}</span>
          </button>
          <button
            onClick={resampleDropout}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Step Pass #{batchCounter}</span>
          </button>
        </div>
      </div>

      {/* Visual Network Topology with Animated Signal Flow & Dropped Neurons */}
      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex justify-center">
        <svg viewBox="0 0 460 225" className="w-full max-w-lg select-none">
          {/* Active Synapse Connections (Layer 1 -> Layer 2) */}
          {[50, 110, 170].map((y1, i) =>
            [35, 85, 135, 185].map((y2, j) => {
              const inactive = droppedMaskL2[j];
              return (
                <line
                  key={`l12-${i}-${j}`}
                  x1="74"
                  y1={y1}
                  x2="166"
                  y2={y2}
                  stroke={inactive ? '#1e293b' : '#38bdf8'}
                  strokeWidth={inactive ? '0.6' : '1.5'}
                  strokeOpacity={inactive ? '0.2' : '0.65'}
                  className={!inactive ? 'animate-synapse-forward' : ''}
                />
              );
            })
          )}

          {/* Active Synapse Connections (Layer 2 -> Layer 3) */}
          {[35, 85, 135, 185].map((y2, i) =>
            [35, 85, 135, 185].map((y3, j) => {
              const inactive = droppedMaskL2[i] || droppedMaskL3[j];
              return (
                <line
                  key={`l23-${i}-${j}`}
                  x1="194"
                  y1={y2}
                  x2="286"
                  y2={y3}
                  stroke={inactive ? '#1e293b' : '#06b6d4'}
                  strokeWidth={inactive ? '0.6' : '1.6'}
                  strokeOpacity={inactive ? '0.2' : '0.75'}
                  className={!inactive ? 'animate-synapse-forward' : ''}
                />
              );
            })
          )}

          {/* Active Synapse Connections (Layer 3 -> Layer 4 Output) */}
          {[35, 85, 135, 185].map((y3, i) => {
            const inactive = droppedMaskL3[i];
            return (
              <line
                key={`l34-${i}`}
                x1="314"
                y1={y3}
                x2="396"
                y2="110"
                stroke={inactive ? '#1e293b' : '#10b981'}
                strokeWidth={inactive ? '0.6' : '1.8'}
                strokeOpacity={inactive ? '0.2' : '0.8'}
                className={!inactive ? 'animate-synapse-forward' : ''}
              />
            );
          })}

          {/* Layer 1 (Input: 3 units) */}
          <g>
            {[50, 110, 170].map((y, i) => (
              <g key={i}>
                <circle cx="60" cy={y} r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.2" />
                <text x="60" y={y + 4} textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="bold">
                  x{i + 1}
                </text>
              </g>
            ))}
            <text x="60" y="212" textAnchor="middle" fill="#94a3b8" fontSize="10">Input Layer</text>
          </g>

          {/* Layer 2 (Hidden: 4 units) */}
          <g>
            {[35, 85, 135, 185].map((y, i) => {
              const isDropped = droppedMaskL2[i];
              return (
                <g key={i}>
                  <circle
                    cx="180"
                    cy={y}
                    r="14"
                    fill={isDropped ? '#450a0a' : '#0f2942'}
                    stroke={isDropped ? '#ef4444' : '#06b6d4'}
                    strokeWidth="2.2"
                    strokeDasharray={isDropped ? '3,3' : 'none'}
                  />
                  {isDropped ? (
                    <text x="180" y={y + 5} textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="bold">✕</text>
                  ) : (
                    <text x="180" y={y + 4} textAnchor="middle" fill="#bae6fd" fontSize="9" fontWeight="bold">a{i + 1}</text>
                  )}
                </g>
              );
            })}
            <text x="180" y="212" textAnchor="middle" fill="#94a3b8" fontSize="10">Hidden 1</text>
          </g>

          {/* Layer 3 (Hidden: 4 units) */}
          <g>
            {[35, 85, 135, 185].map((y, i) => {
              const isDropped = droppedMaskL3[i];
              return (
                <g key={i}>
                  <circle
                    cx="300"
                    cy={y}
                    r="14"
                    fill={isDropped ? '#450a0a' : '#0f2942'}
                    stroke={isDropped ? '#ef4444' : '#06b6d4'}
                    strokeWidth="2.2"
                    strokeDasharray={isDropped ? '3,3' : 'none'}
                  />
                  {isDropped ? (
                    <text x="300" y={y + 5} textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="bold">✕</text>
                  ) : (
                    <text x="300" y={y + 4} textAnchor="middle" fill="#bae6fd" fontSize="9" fontWeight="bold">a{i + 1}</text>
                  )}
                </g>
              );
            })}
            <text x="300" y="212" textAnchor="middle" fill="#94a3b8" fontSize="10">Hidden 2</text>
          </g>

          {/* Layer 4 (Output: 1 unit) */}
          <g>
            <circle cx="410" cy="110" r="18" fill="#10b981" opacity="0.2" className="animate-ping" />
            <circle cx="410" cy="110" r="15" fill="#064e3b" stroke="#10b981" strokeWidth="2.5" />
            <text x="410" y="114" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontWeight="bold">h(x)</text>
            <text x="410" y="212" textAnchor="middle" fill="#94a3b8" fontSize="10">Output</text>
          </g>
        </svg>
      </div>

      {/* Dropout Probability Slider */}
      <div className="bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
        <div className="flex justify-between text-xs mb-1.5 font-medium">
          <span className="text-slate-300">Dropout Probability (p) / អត្រាកាត់ផ្តាច់:</span>
          <span className="font-mono text-cyan-400 font-semibold">{dropoutRate.toFixed(2)} ({Math.round(dropoutRate * 100)}%)</span>
        </div>
        <input
          type="range"
          min="0.0"
          max="0.8"
          step="0.05"
          value={dropoutRate}
          onChange={(e) => {
            const val = parseFloat(e.target.value);
            setDropoutRate(val);
            resampleDropout();
          }}
          className="w-full accent-cyan-400 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
        />
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400 uppercase">Layer 2 Active</div>
          <div className="text-base font-bold font-mono text-cyan-400 mt-0.5">{l2Active} / 4 Nodes</div>
        </div>
        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400 uppercase">Layer 3 Active</div>
          <div className="text-base font-bold font-mono text-cyan-400 mt-0.5">{l3Active} / 4 Nodes</div>
        </div>
        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400 uppercase">Inverted Scale</div>
          <div className="text-base font-bold font-mono text-amber-300 mt-0.5">
            {(1 / Math.max(0.1, 1 - dropoutRate)).toFixed(2)}x
          </div>
        </div>
        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400 uppercase">Mini-Batch Pass</div>
          <div className="text-base font-bold font-mono text-emerald-400 mt-0.5">#{batchCounter}</div>
        </div>
      </div>
    </div>
  );
};
