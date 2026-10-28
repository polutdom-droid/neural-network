import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Award } from 'lucide-react';

interface Point {
  x: number;
  y: number;
}

export const OptimizerRacer: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [step, setStep] = useState<number>(0);
  const [lr] = useState<number>(0.12);

  // Initial starting position in a steep ravine
  const startPos: Point = { x: -3.8, y: 3.2 };

  // Trajectories
  const [gdPath, setGdPath] = useState<Point[]>([startPos]);
  const [momentumPath, setMomentumPath] = useState<Point[]>([startPos]);
  const [rmspropPath, setRmspropPath] = useState<Point[]>([startPos]);
  const [adamPath, setAdamPath] = useState<Point[]>([startPos]);

  // Optimizer velocity and variance states
  const [vMom, setVMom] = useState<Point>({ x: 0, y: 0 });
  const [sRms, setSRms] = useState<Point>({ x: 0, y: 0 });
  const [vAdam, setVAdam] = useState<Point>({ x: 0, y: 0 });
  const [sAdam, setSAdam] = useState<Point>({ x: 0, y: 0 });

  // Ravine Loss Function: L(x, y) = 0.1*x^2 + 2.0*y^2 (steep in y, flat in x)
  const computeGrad = (p: Point): Point => {
    return {
      x: 0.2 * p.x,
      y: 4.0 * p.y
    };
  };

  const resetSimulation = (autoStart = false) => {
    setIsRunning(autoStart);
    setStep(0);
    setGdPath([startPos]);
    setMomentumPath([startPos]);
    setRmspropPath([startPos]);
    setAdamPath([startPos]);
    setVMom({ x: 0, y: 0 });
    setSRms({ x: 0, y: 0 });
    setVAdam({ x: 0, y: 0 });
    setSAdam({ x: 0, y: 0 });
  };

  const advanceStep = () => {
    // 1. Standard GD
    const currGd = gdPath[gdPath.length - 1];
    const gradGd = computeGrad(currGd);
    const nextGd: Point = {
      x: currGd.x - lr * gradGd.x,
      y: currGd.y - lr * gradGd.y
    };

    // 2. Momentum (beta = 0.9)
    const currMom = momentumPath[momentumPath.length - 1];
    const gradMom = computeGrad(currMom);
    const betaMom = 0.9;
    const nextVMom: Point = {
      x: betaMom * vMom.x + (1 - betaMom) * gradMom.x,
      y: betaMom * vMom.y + (1 - betaMom) * gradMom.y
    };
    const nextMom: Point = {
      x: currMom.x - lr * 2.2 * nextVMom.x,
      y: currMom.y - lr * 2.2 * nextVMom.y
    };
    setVMom(nextVMom);

    // 3. RMSprop
    const currRms = rmspropPath[rmspropPath.length - 1];
    const gradRms = computeGrad(currRms);
    const betaRms = 0.9;
    const nextSRms: Point = {
      x: betaRms * sRms.x + (1 - betaRms) * (gradRms.x * gradRms.x),
      y: betaRms * sRms.y + (1 - betaRms) * (gradRms.y * gradRms.y)
    };
    const nextRms: Point = {
      x: currRms.x - (lr * 0.4 * gradRms.x) / (Math.sqrt(nextSRms.x) + 1e-6),
      y: currRms.y - (lr * 0.4 * gradRms.y) / (Math.sqrt(nextSRms.y) + 1e-6)
    };
    setSRms(nextSRms);

    // 4. Adam
    const currAdam = adamPath[adamPath.length - 1];
    const gradAdam = computeGrad(currAdam);
    const beta1 = 0.9;
    const beta2 = 0.99;
    const nextVAdam: Point = {
      x: beta1 * vAdam.x + (1 - beta1) * gradAdam.x,
      y: beta1 * vAdam.y + (1 - beta1) * gradAdam.y
    };
    const nextSAdam: Point = {
      x: beta2 * sAdam.x + (1 - beta2) * (gradAdam.x * gradAdam.x),
      y: beta2 * sAdam.y + (1 - beta2) * (gradAdam.y * gradAdam.y)
    };
    const t = step + 1;
    const vHatX = nextVAdam.x / (1 - Math.pow(beta1, t));
    const vHatY = nextVAdam.y / (1 - Math.pow(beta1, t));
    const sHatX = nextSAdam.x / (1 - Math.pow(beta2, t));
    const sHatY = nextSAdam.y / (1 - Math.pow(beta2, t));

    const nextAdam: Point = {
      x: currAdam.x - (lr * 0.8 * vHatX) / (Math.sqrt(sHatX) + 1e-6),
      y: currAdam.y - (lr * 0.8 * vHatY) / (Math.sqrt(sHatY) + 1e-6)
    };
    setVAdam(nextVAdam);
    setSAdam(nextSAdam);

    setGdPath((p) => [...p, nextGd]);
    setMomentumPath((p) => [...p, nextMom]);
    setRmspropPath((p) => [...p, nextRms]);
    setAdamPath((p) => [...p, nextAdam]);
    setStep((s) => s + 1);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && step < 45) {
      timer = setTimeout(advanceStep, 120);
    } else if (isRunning && step >= 45) {
      timer = setTimeout(() => resetSimulation(true), 1800);
    }
    return () => clearTimeout(timer);
  }, [isRunning, step]);

  // Convert math coords x: [-5, 5], y: [-4, 4] to SVG (w=500, h=260)
  const toSvgX = (x: number) => 250 + x * 46;
  const toSvgY = (y: number) => 130 - y * 28;

  const makeSvgPath = (points: Point[]) => {
    return points.reduce((acc, p, idx) => (idx === 0 ? `M ${toSvgX(p.x)} ${toSvgY(p.y)}` : `${acc} L ${toSvgX(p.x)} ${toSvgY(p.y)}`), '');
  };

  const computeLoss = (p: Point) => 0.1 * p.x * p.x + 2.0 * p.y * p.y;
  const lastGd = gdPath[gdPath.length - 1];
  const lastMom = momentumPath[momentumPath.length - 1];
  const lastRms = rmspropPath[rmspropPath.length - 1];
  const lastAdam = adamPath[adamPath.length - 1];

  return (
    <div className="bg-slate-900/90 rounded-xl border border-slate-700/80 p-5 shadow-xl flex flex-col gap-4 text-slate-100">
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 animate-glow-pulse">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-emerald-300">
              Animated 4-Way Optimizer Race: GD vs Momentum vs RMSprop vs Adam
            </h4>
            <p className="text-xs text-slate-400 font-khmer">
              ចលនាប្រណាំងអុបទិមៃស័រទាំង ៤ លើផ្ទៃជ្រលងភ្នំ Ravine Contour Surface
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow ${
              isRunning ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-emerald-600 hover:bg-emerald-500 text-white'
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isRunning ? 'Pause Race' : 'Resume Race'}</span>
          </button>
          <button
            onClick={() => resetSimulation(true)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1"
            title="Restart Race"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* SVG 2D Ravine Contour Canvas */}
      <div className="relative bg-slate-950 rounded-lg p-2 border border-slate-800">
        <svg viewBox="0 0 500 260" className="w-full h-56 select-none">
          {/* Ravine Contour Ellipses */}
          <ellipse cx="250" cy="130" rx="40" ry="12" fill="rgba(16,185,129,0.06)" stroke="#1e293b" strokeWidth="1.5" />
          <ellipse cx="250" cy="130" rx="90" ry="26" fill="none" stroke="#1e293b" strokeWidth="1.5" />
          <ellipse cx="250" cy="130" rx="150" ry="46" fill="none" stroke="#1e293b" strokeWidth="1.5" />
          <ellipse cx="250" cy="130" rx="210" ry="70" fill="none" stroke="#1e293b" strokeWidth="1.5" />
          <ellipse cx="250" cy="130" rx="270" ry="96" fill="none" stroke="#1e293b" strokeWidth="1.5" />

          {/* Coordinate Axes */}
          <line x1="20" y1="130" x2="480" y2="130" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="250" y1="20" x2="250" y2="240" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />

          {/* Optimum Target Bullseye */}
          <circle cx="250" cy="130" r="10" fill="#10b981" opacity="0.25" className="animate-ping" />
          <circle cx="250" cy="130" r="5" fill="#10b981" stroke="#fff" strokeWidth="1.5" />
          <text x="260" y="126" fill="#34d399" fontSize="10" fontWeight="bold">Global Optimum (0, 0)</text>

          {/* Start Marker */}
          <circle cx={toSvgX(startPos.x)} cy={toSvgY(startPos.y)} r="4" fill="#94a3b8" />
          <text x={toSvgX(startPos.x) + 8} y={toSvgY(startPos.y) - 6} fill="#94a3b8" fontSize="9">Start</text>

          {/* Trajectory 1: Standard GD (Red) */}
          <path d={makeSvgPath(gdPath)} fill="none" stroke="#ef4444" strokeWidth="1.8" strokeDasharray="3,2" opacity="0.85" />
          <circle cx={toSvgX(lastGd.x)} cy={toSvgY(lastGd.y)} r="4.5" fill="#ef4444" stroke="#fff" strokeWidth="1" />

          {/* Trajectory 2: Momentum (Amber) */}
          <path d={makeSvgPath(momentumPath)} fill="none" stroke="#f59e0b" strokeWidth="2.4" />
          <circle cx={toSvgX(lastMom.x)} cy={toSvgY(lastMom.y)} r="4.5" fill="#f59e0b" stroke="#fff" strokeWidth="1" />

          {/* Trajectory 3: RMSprop (Cyan) */}
          <path d={makeSvgPath(rmspropPath)} fill="none" stroke="#06b6d4" strokeWidth="2.2" />
          <circle cx={toSvgX(lastRms.x)} cy={toSvgY(lastRms.y)} r="4.5" fill="#06b6d4" stroke="#fff" strokeWidth="1" />

          {/* Trajectory 4: Adam (Emerald / Winner) */}
          <path d={makeSvgPath(adamPath)} fill="none" stroke="#10b981" strokeWidth="3.2" />
          <circle cx={toSvgX(lastAdam.x)} cy={toSvgY(lastAdam.y)} r="6" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
        </svg>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-between text-xs px-2 pt-2 text-slate-300 gap-2 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 border-t border-dashed border-red-500 inline-block"></span>
              <span className="text-red-400 font-medium">Standard GD (Zig-Zag)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-amber-400 inline-block"></span>
              <span className="text-amber-400 font-medium">Momentum (Velocity)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-cyan-400 inline-block"></span>
              <span className="text-cyan-400 font-medium">RMSprop (Scaled)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-1 bg-emerald-400 inline-block rounded"></span>
              <span className="text-emerald-400 font-bold">Adam (Winner)</span>
            </span>
          </div>
          <span className="font-mono text-emerald-400 text-[11px]">Iteration: {step} / 45</span>
        </div>
      </div>

      {/* Live Racing Scoreboard */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <div className="bg-slate-950/80 p-2.5 rounded-lg border border-red-500/30">
          <div className="text-[11px] text-red-400 uppercase font-semibold">Standard GD Loss</div>
          <div className="text-base font-bold font-mono text-slate-100 mt-0.5">{computeLoss(lastGd).toFixed(3)}</div>
          <div className="text-[10px] text-slate-500 mt-0.5">Violent Oscillation</div>
        </div>
        <div className="bg-slate-950/80 p-2.5 rounded-lg border border-amber-500/30">
          <div className="text-[11px] text-amber-400 uppercase font-semibold">Momentum Loss</div>
          <div className="text-base font-bold font-mono text-slate-100 mt-0.5">{computeLoss(lastMom).toFixed(3)}</div>
          <div className="text-[10px] text-slate-500 mt-0.5">Smooth Momentum</div>
        </div>
        <div className="bg-slate-950/80 p-2.5 rounded-lg border border-cyan-500/30">
          <div className="text-[11px] text-cyan-400 uppercase font-semibold">RMSprop Loss</div>
          <div className="text-base font-bold font-mono text-slate-100 mt-0.5">{computeLoss(lastRms).toFixed(3)}</div>
          <div className="text-[10px] text-slate-500 mt-0.5">Dampened Step</div>
        </div>
        <div className="bg-slate-950/80 p-2.5 rounded-lg border border-emerald-500/40 bg-emerald-950/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <div className="text-[11px] text-emerald-400 uppercase font-bold flex items-center justify-center gap-1">
            <span>Adam Loss</span>
            <span className="px-1 py-0.2 rounded bg-emerald-500/20 text-[9px]">1st</span>
          </div>
          <div className="text-base font-bold font-mono text-emerald-300 mt-0.5">{computeLoss(lastAdam).toFixed(3)}</div>
          <div className="text-[10px] text-emerald-500 mt-0.5">Direct Convergence</div>
        </div>
      </div>
    </div>
  );
};
