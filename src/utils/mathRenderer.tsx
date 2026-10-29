import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  math: string;
  displayMode?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({ math, displayMode = false, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode,
        throwOnError: false,
        strict: false
      });
    } catch {
      return `<span class="text-rose-400 font-mono">${math}</span>`;
    }
  }, [math, displayMode]);

  return (
    <span
      className={`inline-block select-text ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

/**
 * Automatically converts plain-text / Unicode pseudo-math expressions
 * across all 26 slides into crisp LaTeX ($...$ or $$...$$) notation.
 */
export function upgradePlainMathToLatex(input: string): string {
  if (!input) return '';

  let s = input;

  // 1. Exact full-line or major equation replacements (rendered as prominent formulas)
  const exactFormulaReplacements: Array<[RegExp, string]> = [
    // Slide 22: Regularization hypotheses & loss equations (from user screenshot)
    [
      /h1\(x\)\s*=\s*θ0\s*\+\s*θ1\*x\s*\+\s*θ2\*x²/g,
      '$$h_1(x) = \\theta_0 + \\theta_1 x + \\theta_2 x^2$$'
    ],
    [
      /h2\(x\)\s*=\s*θ0\s*\+\s*θ1\*x\s*\+\s*θ2\*x²\s*\+\s*θ3\*x³\s*\+\s*θ4\*x⁴/g,
      '$$h_2(x) = \\theta_0 + \\theta_1 x + \\theta_2 x^2 + \\theta_3 x^3 + \\theta_4 x^4$$'
    ],
    [
      /Loss\s*⇒\s*Loss\s*\+\s*1000\*θ3²\s*\+\s*1000\*θ4²/g,
      '$$\\text{Loss} \\implies \\text{Loss} + 1000\\theta_3^2 + 1000\\theta_4^2$$'
    ],
    [
      /Loss\s*\+\s*λ\s*Σ\(j=1\.\.n\)\s*θ_j²/g,
      '$$J_{\\text{L2}}(\\theta) = \\text{Loss} + \\lambda \\sum_{j=1}^{n} \\theta_j^2$$'
    ],
    [
      /Loss\s*\+\s*λ\s*Σ\(j=1\.\.n\)\s*\|θ_j\|/g,
      '$$J_{\\text{L1}}(\\theta) = \\text{Loss} + \\lambda \\sum_{j=1}^{n} |\\theta_j|$$'
    ],
    [
      /Loss\s*\+\s*λ\s*Σ\s*θ_j²/g,
      '$\\text{Loss} + \\lambda \\sum_{j=1}^{n} \\theta_j^2$'
    ],
    [
      /Loss\s*\+\s*λ\s*Σ\s*\|θ_j\|/g,
      '$\\text{Loss} + \\lambda \\sum_{j=1}^{n} |\\theta_j|$'
    ],
    [
      /1000θ3²\s*\+\s*1000θ4²/g,
      '$1000\\theta_3^2 + 1000\\theta_4^2$'
    ],
    [
      /θ\s*:=\s*θ\(1\s*-\s*αλ\/m\)\s*-\s*α\(grad\)/g,
      '$\\theta := \\theta\\left(1 - \\frac{\\alpha\\lambda}{m}\\right) - \\alpha \\nabla J(\\theta)$'
    ],

    // Slide 14: Multiclass Cross-Entropy Cost
    [
      /J\(Θ\)\s*=\s*-1\/m\s*Σ\(i=1\.\.m\)\s*Σ\(k=1\.\.K\)\s*\[\s*yk\^\(i\)\s*log\(h\(x\^\(i\)\)k\)\s*\+\s*\(1\s*-\s*yk\^\(i\)\)\s*log\(1\s*-\s*h\(x\^\(i\)\)k\)\s*\]/g,
      '$$J(\\Theta) = -\\frac{1}{m} \\sum_{i=1}^{m} \\sum_{k=1}^{K} \\left[ y_k^{(i)} \\log\\left(h(x^{(i)})_k\\right) + (1 - y_k^{(i)}) \\log\\left(1 - h(x^{(i)})_k\\right) \\right]$$'
    ],
    [
      /y\^\(i\)\s*=\s*\[y1\^\(i\),\s*y2\^\(i\),\s*\.\.\.,\s*yK\^\(i\)\]ᵀ/g,
      '$y^{(i)} = \\begin{bmatrix} y_1^{(i)}, y_2^{(i)}, \\dots, y_K^{(i)} \\end{bmatrix}^T$'
    ],
    [
      /h\(x\^\(i\)\)\s*=\s*\[h\(x\^\(i\)\)1,\s*\.\.\.,\s*h\(x\^\(i\)\)K\]ᵀ/g,
      '$h(x^{(i)}) = \\begin{bmatrix} h(x^{(i)})_1, \\dots, h(x^{(i)})_K \\end{bmatrix}^T$'
    ],
    [
      /0\s*≤\s*h\(x\^\(i\)\)k\s*≤\s*1/g,
      '$0 \\le h(x^{(i)})_k \\le 1$'
    ],
    [
      /0\s*≤\s*h\(x\)_k\s*≤\s*1/g,
      '$0 \\le h(x)_k \\le 1$'
    ],
    [
      /yk\^\(i\)\s*∈\s*\{0,\s*1\}/g,
      '$y_k^{(i)} \\in \\{0, 1\\}$'
    ],

    // Slide 24: Batch Normalization
    [
      /z_hat\s*=\s*\(z\s*-\s*μ\)\s*\/\s*s/g,
      '$$\\hat{z} = \\frac{z - \\mu}{\\sqrt{\\sigma^2 + \\epsilon}}$$'
    ],
    [
      /y\s*=\s*γ\s*\*\s*z_hat\s*\+\s*β/g,
      '$$y = \\gamma \\hat{z} + \\beta$$'
    ],
    [
      /y\s*=\s*γ\*z_hat\s*\+\s*β/g,
      '$y = \\gamma \\hat{z} + \\beta$'
    ],

    // Slide 18 & 19: Momentum, RMSprop, Adam
    [
      /v_θ\s*=\s*β\s*\*\s*v_θ\s*\+\s*\(1\s*-\s*β\)\s*\*\s*grad_θ/g,
      '$$v_\\theta = \\beta v_\\theta + (1 - \\beta) \\nabla_\\theta J(\\theta)$$'
    ],
    [
      /S_θ\s*=\s*β\s*\*\s*S_θ\s*\+\s*\(1\s*-\s*β\)\s*\*\s*grad_θ²/g,
      '$$S_\\theta = \\beta S_\\theta + (1 - \\beta) (\\nabla_\\theta J(\\theta))^2$$'
    ],
    [
      /θ\s*=\s*θ\s*-\s*α\s*\*\s*grad_θ\s*\/\s*\(√S_θ\s*\+\s*ε\)/g,
      '$$\\theta := \\theta - \\frac{\\alpha}{\\sqrt{S_\\theta} + \\epsilon} \\nabla_\\theta J(\\theta)$$'
    ],
    [
      /θ\s*=\s*θ\s*-\s*α\s*\*\s*v_θ/g,
      '$$\\theta := \\theta - \\alpha v_\\theta$$'
    ],
    [
      /θ\s*=\s*θ\s*-\s*α\s*\*\s*grad_θ/g,
      '$\\theta := \\theta - \\alpha \\nabla_\\theta J(\\theta)$'
    ],
    [
      /Θ\s*:=\s*Θ\s*-\s*α\s*\*\s*∂J\/∂Θ/g,
      '$$\\Theta := \\Theta - \\alpha \\frac{\\partial J}{\\partial \\Theta}$$'
    ],

    // Slide 5, 6, 7, 8, 9, 10, 11, 12, 15: Activations & Forward Propagation
    [
      /z\s*=\s*w1\*x1\s*\+\s*w2\*x2\s*\+\s*w3\*x3\s*\+\s*b/g,
      '$z = w_1 x_1 + w_2 x_2 + w_3 x_3 + b$'
    ],
    [
      /σ\(x\)\s*=\s*1\s*\/\s*\(1\s*\+\s*e⁻ˣ\)/g,
      '$\\sigma(x) = \\frac{1}{1 + e^{-x}}$'
    ],
    [
      /σ'\(x\)\s*=\s*σ\(x\)\(1\s*-\s*σ\(x\)\)/g,
      "$\\sigma'(x) = \\sigma(x)(1 - \\sigma(x))$"
    ],
    [
      /tanh\(x\)\s*=\s*\(eˣ\s*-\s*e⁻ˣ\)\s*\/\s*\(eˣ\s*\+\s*e⁻ˣ\)/g,
      '$\\tanh(x) = \\frac{e^x - e^{-x}}{e^x + e^{-x}}$'
    ],
    [
      /tanh\(x\)\s*=\s*2\*sigma\(2x\)\s*-\s*1/g,
      '$\\tanh(x) = 2\\sigma(2x) - 1$'
    ],
    [
      /f\(x\)\s*=\s*max\(0,\s*x\)/g,
      '$f(x) = \\max(0, x)$'
    ],
    [
      /max\(0\.1x,\s*x\)/g,
      '$\\max(0.1x, x)$'
    ],
    [
      /max\(0\.01x,\s*x\)/g,
      '$\\max(0.01x, x)$'
    ],
    [
      /max\(αx,\s*x\)/g,
      '$\\max(\\alpha x, x)$'
    ],
    [
      /α\(eˣ\s*-\s*1\)/g,
      '$\\alpha(e^x - 1)$'
    ],
    [
      /a\^\(2\)\s*=\s*g\(W\^\(1\)x\s*\+\s*B\^\(1\)\)/g,
      '$a^{(2)} = g\\left(W^{(1)}x + B^{(1)}\\right)$'
    ],
    [
      /\[3x1\]\s*=\s*g\(\[3x3\]\s*\*\s*\[3x1\]\s*\+\s*\[3x1\]\)/g,
      '$[3 \\times 1] = g([3 \\times 3] \\cdot [3 \\times 1] + [3 \\times 1])$'
    ],
    [
      /a1\^\(2\)\s*=\s*a2\^\(2\)\s*=\s*a3\^\(2\)/g,
      '$a_1^{(2)} = a_2^{(2)} = a_3^{(2)}$'
    ],
    [
      /a1\^\(2\),\s*a2\^\(2\),\s*a3\^\(2\)/g,
      '$a_1^{(2)}, a_2^{(2)}, a_3^{(2)}$'
    ],
    [
      /a1\^\(3\),\s*a2\^\(3\)/g,
      '$a_1^{(3)}, a_2^{(3)}$'
    ],
    [
      /h\(x\)\s*=\s*a1\^\(4\)/g,
      '$h(x) = a_1^{(4)}$'
    ],
    [
      /ε\s*=\s*√\(6\s*\/\s*\(n_in\s*\+\s*n_out\)\)/g,
      '$\\epsilon = \\sqrt{\\frac{6}{n_{\\text{in}} + n_{\\text{out}}}}$'
    ],
    [
      /h\(x\)\s*=\s*g\(θᵀx\)/g,
      '$h(x) = g(\\theta^T x)$'
    ],
    [
      /\(x₁x₂,\s*x₁²,\s*x₂²,\s*\.\.\.\)/g,
      '$(x_1 x_2, x_1^2, x_2^2, \\dots)$'
    ],
    [
      /n\s*=\s*50\s*×\s*50\s*×\s*3\s*=\s*7,500/g,
      '$n = 50 \\times 50 \\times 3 = 7{,}500$'
    ],
    [
      /h\(x\)\s*=\s*a\s*=\s*g\(z\)/g,
      '$h(x) = a = g(z)$'
    ],
    [
      /z\s*=\s*Wx\s*\+\s*b/g,
      '$z = Wx + b$'
    ],
    [
      /z\s*=\s*Σ\s*wx\s*\+\s*b/g,
      '$z = \\sum w_i x_i + b$'
    ],
    [
      /\[1,\s*0,\s*0\]ᵀ/g,
      '$\\begin{bmatrix} 1, 0, 0 \\end{bmatrix}^T$'
    ],
    [
      /\[0,\s*1,\s*0\]ᵀ/g,
      '$\\begin{bmatrix} 0, 1, 0 \\end{bmatrix}^T$'
    ],
    [
      /\[0,\s*0,\s*1\]ᵀ/g,
      '$\\begin{bmatrix} 0, 0, 1 \\end{bmatrix}^T$'
    ],
    [
      /y\s*∈\s*\{1,\s*2,\s*3\}/g,
      '$y \\in \\{1, 2, 3\\}$'
    ],
    [
      /y_a\s*·\s*y_b\s*=\s*0/g,
      '$y_a \\cdot y_b = 0$'
    ],
    [
      /∂J\/∂Θ_ij/g,
      '$\\frac{\\partial J}{\\partial \\Theta_{ij}}$'
    ],
    [
      /∂J\/∂Θ/g,
      '$\\frac{\\partial J}{\\partial \\Theta}$'
    ],
    [
      /a_i\^\(j\)/g,
      '$a_i^{(j)}$'
    ],
    [
      /W\^\(j\)/g,
      '$W^{(j)}$'
    ],
    [
      /W\^\(1\)/g,
      '$W^{(1)}$'
    ],
    [
      /W\^\(2\)/g,
      '$W^{(2)}$'
    ],
    [
      /W\^\(3\)/g,
      '$W^{(3)}$'
    ],
    [
      /J\(Θ\)/g,
      '$J(\\Theta)$'
    ],
    [
      /Θ_ij/g,
      '$\\Theta_{ij}$'
    ],
    [
      /\[-ε,\s*\+?ε\]/g,
      '$[-\\epsilon, +\\epsilon]$'
    ],
    [
      /x1,\s*x2,\s*x3/g,
      '$x_1, x_2, x_3$'
    ],
    [
      /\(x1,\s*x2\)/g,
      '$(x_1, x_2)$'
    ],
    [
      /O\(n\^d\)/g,
      '$\\mathcal{O}(n^d)$'
    ],
    [
      /x\s*∈\s*R\^64/g,
      '$x \\in \\mathbb{R}^{64}$'
    ],
    [
      /x\s*∈\s*R³/g,
      '$x \\in \\mathbb{R}^3$'
    ],
    [
      /h\(x\)\s*∈\s*Rᴷ/g,
      '$h(x) \\in \\mathbb{R}^K$'
    ],
    [
      /2ᴺ/g,
      '$2^N$'
    ],
    [
      /2\^N/g,
      '$2^N$'
    ],
    [
      /1\s*\/\s*\(1\s*-\s*p\)/g,
      '$\\frac{1}{1 - p}$'
    ],
    [
      /μ=0/g,
      '$\\mu = 0$'
    ],
    [
      /σ²=1/g,
      '$\\sigma^2 = 1$'
    ],
    [
      /\(0\.25\)³\s*=\s*0\.015/g,
      '$(0.25)^3 = 0.015$'
    ],
    [
      /10⁻⁷/g,
      '$10^{-7}$'
    ],
    [
      /10⁻⁸/g,
      '$10^{-8}$'
    ],
    [
      /√S_θ/g,
      '$\\sqrt{S_\\theta}$'
    ],
    [
      /S_θ/g,
      '$S_\\theta$'
    ],
    [
      /v_θ/g,
      '$v_\\theta$'
    ],
    [
      /θ3/g,
      '$\\theta_3$'
    ],
    [
      /θ4/g,
      '$\\theta_4$'
    ],
    [
      /θ0/g,
      '$\\theta_0$'
    ],
    [
      /θ1/g,
      '$\\theta_1$'
    ],
    [
      /θ2/g,
      '$\\theta_2$'
    ],
    [
      /h1\(x\)/g,
      '$h_1(x)$'
    ],
    [
      /h2\(x\)/g,
      '$h_2(x)$'
    ],
    [
      /β1\s*=\s*0\.9/g,
      '$\\beta_1 = 0.9$'
    ],
    [
      /β2\s*=\s*0\.999/g,
      '$\\beta_2 = 0.999$'
    ],
    [
      /β\s*=\s*0\.9/g,
      '$\\beta = 0.9$'
    ],
    [
      /p\s*=\s*0\.5/g,
      '$p = 0.5$'
    ],
    [
      /p\s*=\s*0\.3/g,
      '$p = 0.3$'
    ],
    [
      /α\s*=\s*0\.01/g,
      '$\\alpha = 0.01$'
    ],
    [
      /α\s*=\s*1\.0/g,
      '$\\alpha = 1.0$'
    ],
    [
      /λ\s*=\s*0\.1/g,
      '$\\lambda = 0.1$'
    ],
    [
      /tanh'\(x\)/g,
      "$\\tanh'(x)$"
    ],
    [
      /tanh'\(0\)/g,
      "$\\tanh'(0)$"
    ],
    [
      /σ'\(0\)/g,
      "$\\sigma'(0)$"
    ],
    [
      /\|x\|\s*>\s*3/g,
      '$|x| > 3$'
    ],
    [
      /x\s*≥\s*0/g,
      '$x \\ge 0$'
    ],
    [
      /x\s*>\s*0/g,
      '$x > 0$'
    ],
    [
      /x\s*<\s*0/g,
      '$x < 0$'
    ],
    [
      /\]0,\s*1\[/g,
      '$]0, 1[$'
    ],
    [
      /\]-1,\s*1\[/g,
      '$]-1, 1[$'
    ]
  ];

  for (const [pattern, replacement] of exactFormulaReplacements) {
    s = s.replace(pattern, replacement);
  }

  return s;
}

interface RichMathTextProps {
  text: string;
  className?: string;
}

/**
 * Renders mixed English/Khmer text containing inline ($...$) or block ($$...$$)
 * mathematical expressions using KaTeX.
 */
export const RichMathText: React.FC<RichMathTextProps> = ({ text, className = '' }) => {
  const segments = useMemo(() => {
    const upgraded = upgradePlainMathToLatex(text);
    // Split by $$...$$ or $...$
    const regex = /(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g;
    const parts = upgraded.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const latex = part.slice(2, -2).trim();
        return { type: 'block' as const, content: latex, key: index };
      }
      if (part.startsWith('$') && part.endsWith('$')) {
        const latex = part.slice(1, -1).trim();
        return { type: 'inline' as const, content: latex, key: index };
      }
      return { type: 'text' as const, content: part, key: index };
    });
  }, [text]);

  return (
    <span className={className}>
      {segments.map((seg) => {
        if (seg.type === 'block') {
          return (
            <span
              key={seg.key}
              className="my-1.5 px-3 py-1.5 rounded-lg bg-slate-950/90 border border-sky-500/30 text-sky-300 inline-flex items-center shadow-inner overflow-x-auto max-w-full align-middle"
            >
              <MathView math={seg.content} displayMode={false} className="text-sm sm:text-base" />
            </span>
          );
        }
        if (seg.type === 'inline') {
          return (
            <span
              key={seg.key}
              className="px-1 py-0.2 rounded bg-sky-500/10 text-sky-300 font-medium inline-flex items-center align-baseline mx-0.5"
            >
              <MathView math={seg.content} displayMode={false} />
            </span>
          );
        }
        return <React.Fragment key={seg.key}>{seg.content}</React.Fragment>;
      })}
    </span>
  );
};

