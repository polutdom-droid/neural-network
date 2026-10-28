import React, { useState, useEffect } from 'react';
import { Layers, Compass, Activity, Sparkles, Play, Pause, RefreshCw } from 'lucide-react';
import { SlideBlueprint } from '../../types';

interface ArchitectureVisualsSimulatorProps {
  type: SlideBlueprint['interactiveType'];
  onSelectSlide?: (num: number) => void;
}

export const ArchitectureVisualsSimulator: React.FC<ArchitectureVisualsSimulatorProps> = ({
  type,
  onSelectSlide
}) => {
  const [probPrediction, setProbPrediction] = useState<number>(0.85);
  const [autoSweepLoss, setAutoSweepLoss] = useState<boolean>(true);
  const [lossSweepDir, setLossSweepDir] = useState<1 | -1>(-1);

  const [selectedClass, setSelectedClass] = useState<number>(0);
  const [initMode, setInitMode] = useState<'zero' | 'random'>('random');
  const [activeBatchIdx, setActiveBatchIdx] = useState<number>(0);
  const [activeTrialIdx, setActiveTrialIdx] = useState<number>(0);
  const [propDirection, setPropDirection] = useState<'forward' | 'backward'>('forward');

  // Auto-sweep for Cross-Entropy (Slide 14)
  useEffect(() => {
    if (type !== 'cross_entropy' || !autoSweepLoss) return;
    const timer = setInterval(() => {
      setProbPrediction((prev) => {
        const next = prev + lossSweepDir * 0.02;
        if (next <= 0.06) {
          setLossSweepDir(1);
          return 0.06;
        }
        if (next >= 0.96) {
          setLossSweepDir(-1);
          return 0.96;
        }
        return parseFloat(next.toFixed(2));
      });
    }, 65);
    return () => clearInterval(timer);
  }, [type, autoSweepLoss, lossSweepDir]);

  // Auto-cycle for Multiclass One-Hot (Slide 13), Mini-batch (Slide 17), Hyperparameter trials (Slide 20), and Training Loop (Slide 16)
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedClass((c) => (c + 1) % 3);
      setActiveBatchIdx((b) => (b + 1) % 4);
      setActiveTrialIdx((t) => (t + 1) % 9);
      setPropDirection((d) => (d === 'forward' ? 'backward' : 'forward'));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  // 1. Course Roadmap + Animated Hero Neural Network & Loss Figure (Slide 1)
  if (type === 'title') {
    const modules = [
      { title: '1. Non-Linear Hypotheses', kh: 'សម្មតិកម្មមិនលីនេអ៊ែរ', slides: 'Slides 2–3', target: 2, color: 'border-sky-500/50 bg-sky-500/10 text-sky-300' },
      { title: '2. Biological & Logistic Unit', kh: 'គំរូណឺរ៉ូនជីវសាស្ត្រ និងឡូជីស្ទីក', slides: 'Slides 4–5', target: 4, color: 'border-teal-500/50 bg-teal-500/10 text-teal-300' },
      { title: '3. Activation Functions', kh: 'អនុគមន៍សកម្មភាព (Activations)', slides: 'Slides 6–10', target: 6, color: 'border-amber-500/50 bg-amber-500/10 text-amber-300' },
      { title: '4. Multi-Layer & Multiclass', kh: 'ស្ថាបត្យកម្មពហុស្រទាប់ និងពហុថ្នាក់', slides: 'Slides 11–14', target: 11, color: 'border-indigo-500/50 bg-indigo-500/10 text-indigo-300' },
      { title: '5. Initialization & Pipeline', kh: 'ការកំណត់តម្លៃដំបូង និងរង្វិលជុំ', slides: 'Slides 15–16', target: 15, color: 'border-purple-500/50 bg-purple-500/10 text-purple-300' },
      { title: '6. Optimizers & Tuning', kh: 'អុបទិមៃស័រ និងការលៃតម្រូវ', slides: 'Slides 17–20', target: 17, color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300' },
      { title: '7. Regularization & Khmer OCR', kh: 'Regularization និងលំហាត់អក្សរខ្មែរ', slides: 'Slides 21–26', target: 21, color: 'border-rose-500/50 bg-rose-500/10 text-rose-300' }
    ];

    const isBack = propDirection === 'backward';

    return (
      <div className="bg-slate-900/90 rounded-xl border border-slate-700/80 p-5 shadow-xl flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-sky-400 animate-spin" style={{ animationDuration: '10s' }} />
            <div>
              <h4 className="font-semibold text-sm text-sky-300">
                Live Animated Neural Network & Course Architecture Overview
              </h4>
              <p className="text-xs text-slate-400 font-khmer">
                ចលនាបណ្តាញណឺរ៉ូនសិប្បនិម្មិតផ្ទាល់ និងផែនទីបង្ហាញផ្លូវមេរៀនទាំង ៧ ផ្នែក (ចុចលើផ្នែកណាមួយដើម្បីចូលមើលផ្ទាល់)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPropDirection(isBack ? 'forward' : 'backward')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                isBack ? 'bg-rose-600 text-white' : 'bg-sky-600 text-white'
              }`}
            >
              {isBack ? '← Backprop Gradients ∂J/∂Θ' : '→ Forward Signal h(x)'}
            </button>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30">
              ● 26 Animated Pages
            </span>
          </div>
        </div>

        {/* Dual Animated Hero Figure: Left = Multi-Layer Neural Net, Right = Live Loss & Sigmoid/ReLU Curve */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Animated Figure: Deep Neural Network Signal Propagation */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-bold text-indigo-300">
                Figure 1A: Multi-Layer Signal Flow ({isBack ? 'Backward Pass ←' : 'Forward Pass →'})
              </span>
              <span className="font-mono text-[11px] text-slate-400">
                a⁽ˡ⁺¹⁾ = g(Θ⁽ˡ⁾ a⁽ˡ⁾)
              </span>
            </div>
            <svg viewBox="0 0 440 185" className="w-full h-44 select-none">
              {/* L1 -> L2 Synapses */}
              {[35, 90, 145].map((y1, i) =>
                [25, 68, 112, 155].map((y2, j) => (
                  <line
                    key={`h1-${i}-${j}`}
                    x1="65"
                    y1={y1}
                    x2="180"
                    y2={y2}
                    stroke={isBack ? '#f43f5e' : '#38bdf8'}
                    strokeWidth="1.3"
                    strokeOpacity="0.6"
                    className={isBack ? 'animate-synapse-backward' : 'animate-synapse-forward'}
                  />
                ))
              )}
              {/* L2 -> L3 Synapses */}
              {[25, 68, 112, 155].map((y2, i) =>
                [40, 90, 140].map((y3, j) => (
                  <line
                    key={`h2-${i}-${j}`}
                    x1="180"
                    y1={y2}
                    x2="295"
                    y2={y3}
                    stroke={isBack ? '#fb7185' : '#818cf8'}
                    strokeWidth="1.4"
                    strokeOpacity="0.65"
                    className={isBack ? 'animate-synapse-backward' : 'animate-synapse-forward'}
                  />
                ))
              )}
              {/* L3 -> Output Synapses */}
              {[40, 90, 140].map((y3, i) =>
                [55, 125].map((y4, j) => (
                  <line
                    key={`h3-${i}-${j}`}
                    x1="295"
                    y1={y3}
                    x2="390"
                    y2={y4}
                    stroke={isBack ? '#f43f5e' : '#10b981'}
                    strokeWidth="1.7"
                    strokeOpacity="0.75"
                    className={isBack ? 'animate-synapse-backward' : 'animate-synapse-forward'}
                  />
                ))
              )}

              {/* Moving Signal Orbs */}
              <circle r="4.5" fill={isBack ? '#f43f5e' : '#38bdf8'}>
                <animateMotion
                  dur="1.3s"
                  repeatCount="indefinite"
                  path={isBack ? 'M 390 55 L 295 40 L 180 68 L 65 35' : 'M 65 35 L 180 68 L 295 40 L 390 55'}
                />
              </circle>
              <circle r="4.5" fill={isBack ? '#fbbf24' : '#10b981'}>
                <animateMotion
                  dur="1.6s"
                  repeatCount="indefinite"
                  path={isBack ? 'M 390 125 L 295 140 L 180 112 L 65 145' : 'M 65 145 L 180 112 L 295 140 L 390 125'}
                />
              </circle>

              {/* Nodes */}
              {[35, 90, 145].map((y, i) => (
                <g key={`in-${i}`}>
                  <circle cx="65" cy={y} r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                  <text x="65" y={y + 3} textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="bold">x{i + 1}</text>
                </g>
              ))}
              {[25, 68, 112, 155].map((y, i) => (
                <g key={`hid1-${i}`}>
                  <circle cx="180" cy={y} r="12" fill="#0f172a" stroke="#818cf8" strokeWidth="2" />
                  <text x="180" y={y + 3} textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="bold">a{i + 1}⁽²⁾</text>
                </g>
              ))}
              {[40, 90, 140].map((y, i) => (
                <g key={`hid2-${i}`}>
                  <circle cx="295" cy={y} r="12" fill="#0f172a" stroke="#c084fc" strokeWidth="2" />
                  <text x="295" y={y + 3} textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="bold">a{i + 1}⁽³⁾</text>
                </g>
              ))}
              {[55, 125].map((y, i) => (
                <g key={`out-${i}`}>
                  <circle cx="390" cy={y} r="17" fill="#10b981" opacity="0.2" className="animate-ping" />
                  <circle cx="390" cy={y} r="13" fill="#064e3b" stroke="#10b981" strokeWidth="2.2" />
                  <text x="390" y={y + 3} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">ŷ{i + 1}</text>
                </g>
              ))}

              <text x="65" y="177" textAnchor="middle" fill="#64748b" fontSize="9">Input x</text>
              <text x="180" y="177" textAnchor="middle" fill="#64748b" fontSize="9">Hidden L1</text>
              <text x="295" y="177" textAnchor="middle" fill="#64748b" fontSize="9">Hidden L2</text>
              <text x="390" y="177" textAnchor="middle" fill="#64748b" fontSize="9">Softmax ŷ</text>
            </svg>
          </div>

          {/* Right Animated Figure: Non-Linear Activation & Gradient Descent Convergence Graph */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-bold text-amber-300">
                Figure 1B: Animated Loss Convergence & Sigmoid / ReLU Curves
              </span>
              <span className="font-mono text-[11px] text-emerald-400">
                Trial #{activeTrialIdx + 1} • J(Θ) ↓
              </span>
            </div>
            <svg viewBox="0 0 440 185" className="w-full h-44 select-none">
              {/* Grid lines */}
              <line x1="40" y1="155" x2="415" y2="155" stroke="#334155" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2="155" stroke="#334155" strokeWidth="1.5" />

              {/* Animated Loss Decay Curve (Adam Optimizer) */}
              <path
                d="M 45 30 Q 110 120 190 135 T 405 148"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                className="animate-curve-draw"
              />
              {/* Animated Sigmoid Curve Overlay */}
              <path
                d="M 45 145 C 150 145, 220 35, 405 35"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.2"
                strokeDasharray="5,4"
              />
              {/* Animated ReLU Curve Overlay */}
              <path
                d="M 45 145 L 220 145 L 390 25"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeOpacity="0.8"
              />

              {/* Moving Optimizer Orb along the Loss Curve */}
              <circle r="6" fill="#10b981" stroke="#fff" strokeWidth="1.5">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  path="M 45 30 Q 110 120 190 135 T 405 148"
                />
              </circle>

              {/* Moving Activation Probe along Sigmoid */}
              <circle r="5" fill="#38bdf8" stroke="#fff" strokeWidth="1.5">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  path="M 45 145 C 150 145, 220 35, 405 35"
                />
              </circle>

              {/* Legend labels */}
              <text x="330" y="138" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="bold">Loss J(Θ) → 0</text>
              <text x="330" y="50" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">σ(z) Sigmoid</text>
              <text x="315" y="26" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold">ReLU max(0,z)</text>
              <text x="225" y="175" textAnchor="middle" fill="#64748b" fontSize="9">Training Epochs / Pre-activation z</text>
            </svg>
          </div>
        </div>

        {/* 7-Module Interactive Course Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {modules.map((m, i) => (
            <button
              key={i}
              onClick={() => onSelectSlide && onSelectSlide(m.target)}
              className={`p-3.5 rounded-xl border text-left transition-all hover:scale-[1.03] flex flex-col justify-between ${m.color}`}
            >
              <div>
                <div className="text-[10px] font-mono uppercase opacity-80 mb-1">{m.slides}</div>
                <div className="font-bold text-xs text-white">{m.title}</div>
                <div className="text-xs font-khmer mt-1 opacity-90">{m.kh}</div>
              </div>
              <div className="text-[10px] font-mono mt-3 underline opacity-75">Explore {m.slides} →</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 2. Cross-Entropy Log-Loss Interactive Simulator (Slide 14)
  if (type === 'cross_entropy') {
    const lossWhenY1 = -Math.log(Math.max(0.005, probPrediction));
    const lossWhenY0 = -Math.log(Math.max(0.005, 1 - probPrediction));

    const ptsY1: string[] = [];
    const ptsY0: string[] = [];
    for (let i = 1; i <= 99; i++) {
      const p = i / 100;
      const sx = 40 + p * 380;
      const sy1 = 200 - Math.min(4.8, -Math.log(p)) * 35;
      const sy0 = 200 - Math.min(4.8, -Math.log(1 - p)) * 35;
      ptsY1.push(`${i === 1 ? 'M' : 'L'} ${sx} ${sy1}`);
      ptsY0.push(`${i === 1 ? 'M' : 'L'} ${sx} ${sy0}`);
    }

    const probeX = 40 + probPrediction * 380;
    const probeY1 = 200 - Math.min(4.8, lossWhenY1) * 35;

    return (
      <div className="bg-slate-900/90 rounded-xl border border-slate-700/80 p-5 shadow-xl flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-rose-400 animate-glow-pulse" />
            <div>
              <h4 className="font-semibold text-sm text-rose-300">
                Animated Cross-Entropy Penalty Curve: -log(h(x))
              </h4>
              <p className="text-xs text-slate-400 font-khmer">
                ចលនាបង្ហាញការផាកពិន័យកើនឡើងជាលោការីតនៅពេលគំរូទស្សន៍ទាយខុសពីតម្លៃពិត
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoSweepLoss(!autoSweepLoss)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
                autoSweepLoss ? 'bg-amber-600 text-white' : 'bg-rose-600 text-white'
              }`}
            >
              {autoSweepLoss ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{autoSweepLoss ? 'Pause Sweep' : 'Animate Sweep'}</span>
            </button>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">
              Loss (y=1): {lossWhenY1.toFixed(3)}
            </span>
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <svg viewBox="0 0 450 220" className="w-full h-48 select-none">
            <line x1="40" y1="200" x2="420" y2="200" stroke="#475569" strokeWidth="1.5" />
            <line x1="40" y1="20" x2="40" y2="200" stroke="#475569" strokeWidth="1.5" />
            <text x="230" y="216" textAnchor="middle" fill="#94a3b8" fontSize="10">Predicted Probability h(x) ∈ [0, 1]</text>
            <text x="48" y="30" fill="#94a3b8" fontSize="10">Cost Penalty J(Θ)</text>

            <path d={ptsY1.join(' ')} fill="none" stroke="#f43f5e" strokeWidth="3.2" />
            <path d={ptsY0.join(' ')} fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,3" />

            <line x1={probeX} y1={probeY1} x2={probeX} y2="200" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3,3" />
            <circle cx={probeX} cy={probeY1} r="9" fill="#f43f5e" opacity="0.3" className="animate-ping" />
            <circle cx={probeX} cy={probeY1} r="6" fill="#f43f5e" stroke="#fff" strokeWidth="2" />
            <text x={Math.min(380, Math.max(60, probeX))} y={Math.max(28, probeY1 - 12)} textAnchor="middle" fill="#fda4af" fontSize="10" fontFamily="monospace" fontWeight="bold">
              -log({probPrediction.toFixed(2)}) = {lossWhenY1.toFixed(2)}
            </text>
          </svg>
        </div>

        <div className="bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-slate-300">Predicted Probability h(x) for True Class (y=1):</span>
            <span className="font-mono text-rose-400 font-bold">
              h(x) = {probPrediction.toFixed(2)} | Loss if y=0: {lossWhenY0.toFixed(2)}
            </span>
          </div>
          <input
            type="range"
            min="0.01"
            max="0.99"
            step="0.01"
            value={probPrediction}
            onChange={(e) => {
              setAutoSweepLoss(false);
              setProbPrediction(parseFloat(e.target.value));
            }}
            className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
          />
        </div>
      </div>
    );
  }

  // 3. Mini-batch Gradient Descent Sliding Window (Slide 17)
  if (type === 'minibatch') {
    return (
      <div className="bg-slate-900/90 rounded-xl border border-slate-700/80 p-5 shadow-xl flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '5s' }} />
            <div>
              <h4 className="font-semibold text-sm text-amber-300">
                Animated Mini-Batch Sliding Window: Epoch Partitioning
              </h4>
              <p className="text-xs text-slate-400 font-khmer">
                ចលនាបែងចែកទិន្នន័យហ្វឹកហាត់ជាបាច់តូចៗ (Mini-Batch 1 → 4) ដើម្បីកែទម្ងន់ភ្លាមៗ
              </p>
            </div>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
            Active: Mini-Batch #{activeBatchIdx + 1} / 4
          </span>
        </div>

        {/* 16 Training Samples partitioned into 4 Mini-batches */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-3">
          <div className="grid grid-cols-4 gap-2">
            {[0, 1, 2, 3].map((bIdx) => {
              const isCurr = bIdx === activeBatchIdx;
              return (
                <button
                  key={bIdx}
                  onClick={() => setActiveBatchIdx(bIdx)}
                  className={`p-2.5 rounded-xl border transition-all duration-300 ${
                    isCurr
                      ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-[1.03]'
                      : 'bg-slate-900 border-slate-800 opacity-60'
                  }`}
                >
                  <div className="text-[11px] font-bold font-mono text-amber-300 mb-1.5">
                    Mini-batch {bIdx + 1} {isCurr && '● Updating Θ'}
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    {[1, 2, 3, 4].map((offset) => {
                      const sampleNum = bIdx * 4 + offset;
                      return (
                        <div
                          key={sampleNum}
                          className={`py-1.5 rounded text-[10px] font-mono text-center font-bold ${
                            isCurr ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 text-slate-400'
                          }`}
                        >
                          x⁽{sampleNum}⁾
                        </div>
                      );
                    })}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-slate-400 flex items-center justify-between pt-1">
            <span>Batch GD: Waits for all 16 samples (Slow)</span>
            <span className="text-amber-300 font-semibold">Mini-batch GD: Updates 4 times per Epoch (Optimal GPU Parallelism)</span>
          </div>
        </div>
      </div>
    );
  }

  // 4. Hyperparameter Tuning Grid vs Random Layout (Slide 20)
  if (type === 'hyperparameter_tuning') {
    const gridPts = [
      [0.2, 0.2], [0.5, 0.2], [0.8, 0.2],
      [0.2, 0.5], [0.5, 0.5], [0.8, 0.5],
      [0.2, 0.8], [0.5, 0.8], [0.8, 0.8]
    ];
    const randPts = [
      [0.12, 0.75], [0.24, 0.32], [0.35, 0.88],
      [0.42, 0.18], [0.51, 0.62], [0.64, 0.45],
      [0.73, 0.81], [0.84, 0.29], [0.93, 0.54]
    ];

    return (
      <div className="bg-slate-900/90 rounded-xl border border-slate-700/80 p-5 shadow-xl flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-400 animate-glow-pulse" />
            <div>
              <h4 className="font-semibold text-sm text-emerald-300">
                Animated Hyperparameter Trial Scanner: Grid (3 Values) vs. Random (9 Values)
              </h4>
              <p className="text-xs text-slate-400 font-khmer">
                ចលនាសាកល្បងប៉ារ៉ាម៉ែត្រទាំង ៩ លើក៖ Random Search រកឃើញចំណុចកំពូលល្អបំផុត
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400">
            Scanning Trial #{activeTrialIdx + 1} / 9
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Grid Search Box */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
            <div className="text-xs font-bold text-rose-400 mb-2">Grid Layout (Misses True Peak!)</div>
            <svg viewBox="0 0 220 180" className="w-full max-w-[240px]">
              <path d="M 30 35 Q 75 35 97 8 Q 120 35 190 35" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" strokeWidth="2" />
              <rect x="30" y="40" width="160" height="120" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
              {gridPts.map(([px, py], idx) => {
                const isAct = idx === activeTrialIdx;
                return (
                  <g key={idx}>
                    <line x1={30 + px * 160} y1={40 + py * 120} x2={30 + px * 160} y2="35" stroke="#f43f5e" strokeWidth={isAct ? '1.5' : '0.5'} strokeDasharray="2,2" />
                    <circle cx={30 + px * 160} cy={40 + py * 120} r={isAct ? '7' : '4.5'} fill="#f43f5e" stroke="#fff" strokeWidth={isAct ? '2' : '0'} />
                    <circle cx={30 + px * 160} cy="35" r="3.5" fill="none" stroke="#f43f5e" strokeWidth="1.5" />
                  </g>
                );
              })}
              <text x="110" y="175" textAnchor="middle" fill="#94a3b8" fontSize="9">Important Parameter (α)</text>
            </svg>
          </div>

          {/* Random Search Box */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
            <div className="text-xs font-bold text-emerald-400 mb-2">Random Layout (Hits True Peak on Trial #4!)</div>
            <svg viewBox="0 0 220 180" className="w-full max-w-[240px]">
              <path d="M 30 35 Q 75 35 97 8 Q 120 35 190 35" fill="rgba(16, 185, 129, 0.22)" stroke="#10b981" strokeWidth="2" />
              <rect x="30" y="40" width="160" height="120" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
              {randPts.map(([px, py], idx) => {
                const isAct = idx === activeTrialIdx;
                return (
                  <g key={idx}>
                    <line x1={30 + px * 160} y1={40 + py * 120} x2={30 + px * 160} y2="35" stroke="#10b981" strokeWidth={isAct ? '1.5' : '0.5'} strokeDasharray="2,2" />
                    <circle cx={30 + px * 160} cy={40 + py * 120} r={isAct ? '7' : '4.5'} fill="#10b981" stroke="#fff" strokeWidth={isAct ? '2' : '0'} />
                    <circle cx={30 + px * 160} cy={idx === 3 ? '10' : '32'} r="3.5" fill="#10b981" />
                  </g>
                );
              })}
              <text x="110" y="175" textAnchor="middle" fill="#94a3b8" fontSize="9">Important Parameter (α)</text>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // 5. Animated Multi-Layer Neural Network (Slides 4, 11, 12, 13, 15, 16, 26)
  const isBackward = type === 'training_pipeline' && propDirection === 'backward';

  return (
    <div className="bg-slate-900/90 rounded-xl border border-slate-700/80 p-5 shadow-xl flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-400 animate-glow-pulse" />
          <div>
            <h4 className="font-semibold text-sm text-indigo-300">
              {type === 'training_pipeline'
                ? `Animated Training Loop: ${isBackward ? 'Backpropagation ∂J/∂Θ (←)' : 'Forward Propagation h(x) (→)'}`
                : 'Animated Neural Network Layer & Synaptic Pulse Flow'}
            </h4>
            <p className="text-xs text-slate-400 font-khmer">
              ចលនាបញ្ជូនសញ្ញាអគ្គិសនីតាមស្រទាប់ណឺរ៉ូន (Input → Hidden Layers → Output)
            </p>
          </div>
        </div>

        {type === 'training_pipeline' && (
          <button
            onClick={() => setPropDirection(isBackward ? 'forward' : 'backward')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold shadow ${
              isBackward ? 'bg-rose-600 text-white' : 'bg-sky-600 text-white'
            }`}
          >
            {isBackward ? '← Backpropagation Gradients' : '→ Forward Pass Activations'}
          </button>
        )}

        {type === 'weight_init' && (
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setInitMode('zero')}
              className={`px-2.5 py-1 rounded text-xs font-semibold ${
                initMode === 'zero' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Zero Init (a₁=a₂=a₃)
            </button>
            <button
              onClick={() => setInitMode('random')}
              className={`px-2.5 py-1 rounded text-xs font-semibold ${
                initMode === 'random' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Random Init (Symmetry Broken)
            </button>
          </div>
        )}

        {type === 'multiclass_onehot' && (
          <div className="flex items-center gap-1.5">
            {['Class 1 [1,0,0]ᵀ', 'Class 2 [0,1,0]ᵀ', 'Class 3 [0,0,1]ᵀ'].map((lbl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedClass(idx)}
                className={`px-2.5 py-1 rounded text-xs font-mono font-semibold ${
                  selectedClass === idx ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-center">
        <svg viewBox="0 0 500 205" className="w-full max-w-xl select-none">
          {/* Connections L1 -> L2 */}
          {[40, 100, 160].map((y1, i) =>
            [35, 80, 125, 170].map((y2, j) => (
              <line
                key={`l1-${i}-${j}`}
                x1="80"
                y1={y1}
                x2="210"
                y2={y2}
                stroke={
                  isBackward
                    ? '#f43f5e'
                    : initMode === 'zero' && type === 'weight_init'
                    ? '#f43f5e'
                    : '#38bdf8'
                }
                strokeWidth="1.4"
                strokeOpacity="0.6"
                className={isBackward ? 'animate-synapse-backward' : 'animate-synapse-forward'}
              />
            ))
          )}
          {/* Connections L2 -> L3 */}
          {[35, 80, 125, 170].map((y2, i) =>
            [50, 100, 150].map((y3, j) => (
              <line
                key={`l2-${i}-${j}`}
                x1="210"
                y1={y2}
                x2="340"
                y2={y3}
                stroke={isBackward ? '#fb7185' : '#818cf8'}
                strokeWidth="1.4"
                strokeOpacity="0.65"
                className={isBackward ? 'animate-synapse-backward' : 'animate-synapse-forward'}
              />
            ))
          )}
          {/* Connections L3 -> Output */}
          {[50, 100, 150].map((y3, i) =>
            (type === 'multiclass_onehot' ? [50, 100, 150] : [100]).map((y4, j) => (
              <line
                key={`l3-${i}-${j}`}
                x1="340"
                y1={y3}
                x2="440"
                y2={y4}
                stroke={isBackward ? '#f43f5e' : '#10b981'}
                strokeWidth="1.8"
                strokeOpacity="0.75"
                className={isBackward ? 'animate-synapse-backward' : 'animate-synapse-forward'}
              />
            ))
          )}

          {/* Animated Signal Orbs Traveling Across the Network */}
          <circle r="4" fill={isBackward ? '#f43f5e' : '#38bdf8'}>
            <animateMotion
              dur="1.4s"
              repeatCount="indefinite"
              path={isBackward ? 'M 440 100 L 340 50 L 210 80 L 80 40' : 'M 80 40 L 210 80 L 340 50 L 440 100'}
            />
          </circle>
          <circle r="4" fill={isBackward ? '#fb7185' : '#10b981'}>
            <animateMotion
              dur="1.7s"
              repeatCount="indefinite"
              path={isBackward ? 'M 440 100 L 340 150 L 210 125 L 80 160' : 'M 80 160 L 210 125 L 340 150 L 440 100'}
            />
          </circle>

          {/* Layer 1 Nodes */}
          {[40, 100, 160].map((y, i) => (
            <g key={`n1-${i}`}>
              <circle cx="80" cy={y} r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.2" />
              <text x="80" y={y + 4} textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="bold">
                x{i + 1}
              </text>
            </g>
          ))}
          <text x="80" y="195" textAnchor="middle" fill="#64748b" fontSize="9">Input Layer</text>

          {/* Layer 2 Nodes */}
          {[35, 80, 125, 170].map((y, i) => (
            <g key={`n2-${i}`}>
              <circle cx="210" cy={y} r="14" fill="#0f172a" stroke="#818cf8" strokeWidth="2.2" />
              <text x="210" y={y + 4} textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="bold">
                a{i + 1}⁽²⁾
              </text>
            </g>
          ))}
          <text x="210" y="195" textAnchor="middle" fill="#64748b" fontSize="9">Hidden Layer 1</text>

          {/* Layer 3 Nodes */}
          {[50, 100, 150].map((y, i) => (
            <g key={`n3-${i}`}>
              <circle cx="340" cy={y} r="14" fill="#0f172a" stroke="#c084fc" strokeWidth="2.2" />
              <text x="340" y={y + 4} textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="bold">
                a{i + 1}⁽³⁾
              </text>
            </g>
          ))}
          <text x="340" y="195" textAnchor="middle" fill="#64748b" fontSize="9">Hidden Layer 2</text>

          {/* Output Layer Nodes */}
          {(type === 'multiclass_onehot' ? [50, 100, 150] : [100]).map((y, i) => {
            const isHot = type === 'multiclass_onehot' ? selectedClass === i : true;
            return (
              <g key={`n4-${i}`}>
                {isHot && <circle cx="440" cy={y} r="19" fill="#10b981" opacity="0.25" className="animate-ping" />}
                <circle
                  cx="440"
                  cy={y}
                  r="15"
                  fill={isHot ? '#064e3b' : '#0f172a'}
                  stroke={isHot ? '#10b981' : '#475569'}
                  strokeWidth="2.5"
                />
                <text x="440" y={y + 4} textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">
                  {type === 'multiclass_onehot' ? (isHot ? '1' : '0') : 'h(x)'}
                </text>
              </g>
            );
          })}
          <text x="440" y="195" textAnchor="middle" fill="#64748b" fontSize="9">Output Layer</text>
        </svg>
      </div>
    </div>
  );
};
