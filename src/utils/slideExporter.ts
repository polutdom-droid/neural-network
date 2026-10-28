import PptxGenJS from 'pptxgenjs';
import JSZip from 'jszip';
import * as pdfjsLib from 'pdfjs-dist';
// @ts-ignore - Vite URL import for PDF.js worker
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
// @ts-ignore - Vite URL import for the original 26-page lecture PDF
import originalPdfAssetUrl from '../assets/02_Basics_of_Neural_Networks_Original.pdf?url';
import { SlideBlueprint } from '../types';
const PROJECT_RAW_FILES = import.meta.glob(['/package.json', '/vercel.json', '/index.html', '/vite.config.ts', '/tsconfig.json', '/metadata.json', '/src/**/*.ts', '/src/**/*.tsx', '/src/**/*.css'], { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

// Configure PDF.js worker
if (typeof window !== 'undefined' && pdfjsLib.GlobalWorkerOptions) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;
}

export type PptxExportMode = 'editable_pptx' | 'font_locked_pptx' | 'paired_slides';

const FONT_UI = "'Inter', 'Kantumruy Pro', sans-serif";
const FONT_KHMER = "'Kantumruy Pro', 'Inter', sans-serif";
const FONT_MONO = "'Fira Code', 'Inter', monospace";

let cachedPdfBuffer: ArrayBuffer | null = null;
const cachedSinglePageDataUrls = new Map<number, string>();

/**
 * Safely triggers a file download in sandboxed iframes and modern browsers
 * by appending the anchor to document.body and delaying URL.revokeObjectURL
 * so the browser's download manager finishes reading the Blob without error.
 */
export function triggerSafeBlobDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
    URL.revokeObjectURL(url);
  }, 15000);
}

/**
 * Fetches and verifies the binary ArrayBuffer of the original 26-slide PDF.
 * Checks multiple asset paths and verifies the '%PDF' magic header so it never fails.
 */
export async function getOriginalPdfArrayBuffer(): Promise<ArrayBuffer> {
  if (cachedPdfBuffer && cachedPdfBuffer.byteLength > 1000) {
    return cachedPdfBuffer;
  }

  const candidateUrls = [
    originalPdfAssetUrl,
    '/02_Basics_of_Neural_Networks_Original.pdf',
    '/assets/aistudio/02_Basics_of_Neural_Networks_09caaf4e.pdf'
  ];

  for (const url of candidateUrls) {
    if (!url) continue;
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const buf = await res.arrayBuffer();
      if (buf.byteLength > 1000) {
        const header = new Uint8Array(buf, 0, 4);
        // Check '%PDF' (0x25, 0x50, 0x44, 0x46)
        if (
          header[0] === 0x25 &&
          header[1] === 0x50 &&
          header[2] === 0x44 &&
          header[3] === 0x46
        ) {
          cachedPdfBuffer = buf;
          return buf;
        }
      }
    } catch (_) {
      // Try next URL candidate
    }
  }

  throw new Error('Could not load original PDF binary from any asset path.');
}

/**
 * Downloads the exact original 26-page PDF file ('02_Basics_of_Neural_Networks_Original_Slides.pdf')
 * using a verified Blob and safe download trigger so it never errors in sandboxed iframes.
 */
export async function downloadOriginalPdfFile(): Promise<void> {
  const buf = await getOriginalPdfArrayBuffer();
  const blob = new Blob([buf.slice(0)], { type: 'application/pdf' });
  triggerSafeBlobDownload(blob, '02_Basics_of_Neural_Networks_Original_Slides.pdf');
}

/**
 * Ensures Google Fonts (Inter, Kantumruy Pro, Fira Code) are 100% loaded in the browser.
 */
async function ensureWebFontsLoaded(): Promise<void> {
  if (typeof document === 'undefined' || !('fonts' in document)) return;
  try {
    await Promise.all([
      document.fonts.load("400 24px 'Inter'"),
      document.fonts.load("600 24px 'Inter'"),
      document.fonts.load("700 24px 'Inter'"),
      document.fonts.load("800 24px 'Inter'"),
      document.fonts.load("400 24px 'Kantumruy Pro'"),
      document.fonts.load("600 24px 'Kantumruy Pro'"),
      document.fonts.load("700 24px 'Kantumruy Pro'"),
      document.fonts.load("500 20px 'Fira Code'"),
      document.fonts.load("700 20px 'Fira Code'")
    ]);
    await document.fonts.ready;
  } catch (_) {
    // Ignore if font loading API partially fails
  }
}

/**
 * Downloads a ZIP archive containing the exact TrueType (.ttf) font files
 * ('Kantumruy Pro' and 'Inter') so users can install them in 1 click on macOS / Windows
 * for Microsoft PowerPoint or Keynote.
 */
export async function downloadOriginalFontsZip(): Promise<void> {
  const zip = new JSZip();
  const fontUrls = [
    {
      name: 'KantumruyPro-Regular.ttf',
      url: 'https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/kantumruypro/KantumruyPro%5Bwght%5D.ttf'
    },
    {
      name: 'Inter-VariableFont.ttf',
      url: 'https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/inter/Inter%5Bopsz,wght%5D.ttf'
    },
    {
      name: 'FiraCode-VariableFont.ttf',
      url: 'https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/firacode/FiraCode%5Bwght%5D.ttf'
    }
  ];

  await Promise.all(
    fontUrls.map(async (f) => {
      try {
        const res = await fetch(f.url);
        if (res.ok) {
          const buf = await res.arrayBuffer();
          zip.file(f.name, buf);
        }
      } catch (_) {
        // Ignore network error
      }
    })
  );

  zip.file(
    'HOW_TO_INSTALL_FONTS_របៀបដំឡើងពុម្ពអក្សរ.txt',
    [
      'របៀបដំឡើងពុម្ពអក្សរដើម (Kantumruy Pro, Inter, Fira Code) សម្រាប់ Microsoft PowerPoint / Keynote៖',
      '1. បើកឯកសារ .ttf ទាំង 3 នៅក្នុង Folder នេះ (KantumruyPro, Inter, FiraCode)',
      '2. ចុចប៊ូតុង "Install Font" (នៅលើ Mac) ឬ "Install" (នៅលើ Windows)',
      '3. បិទ រួចបើកកម្មវិធី Microsoft PowerPoint ឡើងវិញ — អក្សរក្នុងស្លាយទាំងអស់នឹងបង្ហាញដូច Font ដើមក្នុង Web App 100% និងអាចកែប្រែបានគ្រប់កន្លែង!'
    ].join('\n')
  );

  const blob = await zip.generateAsync({ type: 'blob' });
  triggerSafeBlobDownload(blob, 'Original_Fonts_KantumruyPro_Inter_FiraCode.zip');
}

/**
 * Prepares standalone content of src/utils/slideExporter.ts so it does not require
 * projectSourceFiles.ts when uploaded directly to GitHub.
 */
function getStandaloneSlideExporterSource(): string {
  const raw = PROJECT_RAW_FILES['/src/utils/slideExporter.ts'] || '';
  return raw.replace(
    "import { PROJECT_RAW_FILES } from './projectSourceFiles';",
    `const PROJECT_RAW_FILES = import.meta.glob(['/package.json', '/vercel.json', '/index.html', '/vite.config.ts', '/tsconfig.json', '/metadata.json', '/src/**/*.ts', '/src/**/*.tsx', '/src/**/*.css'], { query: '?raw', import: 'default', eager: true }) as Record<string, string>;`
  );
}

/**
 * Downloads just the standalone `slideExporter.ts` file so a user who already uploaded
 * the rest of `src/` to GitHub can upload `slideExporter.ts` into `src/utils/` in 1 click.
 */
export function downloadMissingSlideExporterFile(): void {
  const content = getStandaloneSlideExporterSource();
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  triggerSafeBlobDownload(blob, 'slideExporter.ts');
}

/**
 * Bundles the entire application source code (including package.json, vercel.json,
 * index.html, src/* including slideExporter.ts, and the original 26-page PDF) into a clean .zip archive
 * ready to upload directly to GitHub and deploy on Vercel.
 */
export async function downloadGitHubVercelSourceZip(): Promise<void> {
  const zip = new JSZip();

  // 1. Add all raw source files (including src/utils/slideExporter.ts)
  for (const [fullPath, rawContent] of Object.entries(PROJECT_RAW_FILES)) {
    const cleanPath = fullPath.startsWith('/') ? fullPath.slice(1) : fullPath;
    if (cleanPath === 'src/utils/projectSourceFiles.ts') continue;
    if (cleanPath === 'src/utils/slideExporter.ts') {
      zip.file(cleanPath, getStandaloneSlideExporterSource());
    } else if (cleanPath === 'package.json' && typeof rawContent === 'string') {
      // Ensure "build" automatically installs dependencies on Vercel even if Install Command was skipped
      const patchedPkg = rawContent.replace(
        '"build": "vite build"',
        '"build": "npm install --legacy-peer-deps && vite build"'
      );
      zip.file(cleanPath, patchedPkg);
    } else if (typeof rawContent === 'string') {
      zip.file(cleanPath, rawContent);
    }
  }

  // 2. Add .gitignore and .npmrc (prevents npm ERESOLVE peer dependency errors on Vercel)
  zip.file(
    '.gitignore',
    ['node_modules', 'dist', '.env', '.env.local', '.DS_Store', '*.log'].join('\n')
  );
  zip.file('.npmrc', 'legacy-peer-deps=true\n');

  // 3. Add README.md with step-by-step Khmer & English instructions for GitHub & Vercel
  zip.file(
    'README.md',
    [
      '# Basics of Neural Networks — Looker Studio BI Blueprints (26 Slides)',
      '',
      'Interactive Bilingual (English & Khmer / ភាសាខ្មែរ) Educational Dashboard & Slide Exporter.',
      '',
      '## របៀបបង្ហោះចូល GitHub និង Deploy លើ Vercel (Step-by-Step Guide)',
      '',
      '### ជំហានទី ១៖ អាប់ឡូតកូដចូល GitHub',
      '1. ពន្លា (Extract / Unzip) ឯកសារ `.zip` នេះនៅលើកុំព្យូទ័ររបស់អ្នក។',
      '2. ចូលទៅកាន់ [https://github.com/new](https://github.com/new) ហើយដាក់ឈ្មោះ Repository (ឧទាហរណ៍៖ `neural-networks-slides`) រួចចុច **Create repository**។',
      '3. ចុចលើអក្សរពណ៌ខៀវ **"uploading an existing file"**។',
      '4. ទាញឯកសារទាំងអស់ក្នុង Folder ដែលបានពន្លា (`package.json`, `vercel.json`, `index.html`, `src`, `public`, ...) ដាក់ចូល រួចចុចប៊ូតុងពណ៌បៃតង **"Commit changes"**។',
      '',
      '### ជំហានទី ២៖ Deploy លើ Vercel',
      '1. ចូលទៅកាន់ [https://vercel.com/new](https://vercel.com/new) (Login ជាមួយគណនី GitHub)។',
      '2. ចុចប៊ូតុង **"Import"** នៅក្បែរឈ្មោះ `neural-networks-slides`។',
      '3. ចុចប៊ូតុង **"Deploy"** ជាការស្រេច!'
    ].join('\n')
  );

  // 4. Include the original 26-page PDF binary in both public/ and src/assets/
  try {
    const pdfBuf = await getOriginalPdfArrayBuffer();
    zip.file('public/02_Basics_of_Neural_Networks_Original.pdf', pdfBuf.slice(0));
    zip.file('public/assets/aistudio/02_Basics_of_Neural_Networks_09caaf4e.pdf', pdfBuf.slice(0));
    zip.file('src/assets/02_Basics_of_Neural_Networks_Original.pdf', pdfBuf.slice(0));
  } catch (_) {
    // Ignore if PDF binary not available
  }

  const blob = await zip.generateAsync({ type: 'blob' });
  triggerSafeBlobDownload(blob, 'neural-networks-github-vercel-source.zip');
}

/**
 * Patches the generated .pptx ZIP archive so that every <a:latin typeface="..."/> tag
 * in ppt/slides/slide*.xml and ppt/theme/theme*.xml ALSO includes:
 *   <a:ea typeface="..."/>
 *   <a:cs typeface="..."/>
 * Without <a:cs typeface="Kantumruy Pro"/>, Microsoft PowerPoint ignores the font for Khmer Unicode!
 */
async function patchPptxKhmerComplexScriptFonts(pptxArrayBuffer: ArrayBuffer): Promise<Blob> {
  const zip = await JSZip.loadAsync(pptxArrayBuffer);
  const fileNames = Object.keys(zip.files);

  for (const fileName of fileNames) {
    if (
      (fileName.startsWith('ppt/slides/slide') && fileName.endsWith('.xml')) ||
      (fileName.startsWith('ppt/theme/theme') && fileName.endsWith('.xml')) ||
      (fileName.startsWith('ppt/slideMasters/slideMaster') && fileName.endsWith('.xml'))
    ) {
      const fileObj = zip.file(fileName);
      if (!fileObj) continue;
      let xml = await fileObj.async('string');

      // Ensure every <a:latin typeface="X"/> is accompanied by <a:ea typeface="X"/><a:cs typeface="X"/>
      xml = xml.replace(
        /<a:latin typeface="([^"]+)"([^>]*)\/>(?!<a:ea)(?!<a:cs)/g,
        '<a:latin typeface="$1"$2/><a:ea typeface="$1"/><a:cs typeface="$1"/>'
      );

      // Also replace empty or default theme complex script fonts with Kantumruy Pro
      xml = xml.replace(/<a:cs typeface=""\/>/g, '<a:cs typeface="Kantumruy Pro"/>');

      zip.file(fileName, xml);
    }
  }

  return await zip.generateAsync({
    type: 'blob',
    mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  });
}

/**
 * Draws a rounded rectangle on a Canvas 2D context.
 */
function drawRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
  fillColor?: string,
  strokeColor?: string,
  lineWidth = 2
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  if (fillColor) {
    ctx.fillStyle = fillColor;
    ctx.fill();
  }
  if (strokeColor) {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
}

/**
 * Wraps and draws multi-line English & Khmer text onto a Canvas 2D context
 * using the browser's exact loaded web fonts ('Kantumruy Pro' & 'Inter').
 */
function drawWrappedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines = 10
): number {
  if (!text) return y;
  const words = text.split(/\s+/);
  let line = '';
  let currY = y;
  let linesDrawn = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const testLine = line ? `${line} ${word}` : word;
    const metrics = ctx.measureText(testLine);

    if (metrics.width > maxWidth && line) {
      linesDrawn++;
      if (linesDrawn >= maxLines) {
        ctx.fillText(line + '…', x, currY);
        return currY + lineHeight;
      }
      ctx.fillText(line, x, currY);
      line = word;
      currY += lineHeight;
    } else {
      line = testLine;
    }
  }

  if (line && linesDrawn < maxLines) {
    ctx.fillText(line, x, currY);
    currY += lineHeight;
  }

  return currY;
}

/**
 * Renders a single page of the original PDF into a high-resolution PNG data URL.
 */
export async function renderSingleOriginalPdfPage(pageNum: number): Promise<string> {
  if (cachedSinglePageDataUrls.has(pageNum)) {
    return cachedSinglePageDataUrls.get(pageNum)!;
  }
  const pdfBuffer = await getOriginalPdfArrayBuffer();
  const loadingTask = pdfjsLib.getDocument({
    data: new Uint8Array(pdfBuffer.slice(0))
  });
  const pdf = await loadingTask.promise;
  const clampedPage = Math.max(1, Math.min(pageNum, pdf.numPages));
  const page = await pdf.getPage(clampedPage);
  const viewport = page.getViewport({ scale: 2.2 });

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  if (ctx) {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    await page.render({
      canvasContext: ctx,
      viewport,
      canvas
    } as any).promise;
    const dataUrl = canvas.toDataURL('image/png', 0.95);
    cachedSinglePageDataUrls.set(pageNum, dataUrl);
    return dataUrl;
  }
  return '';
}

/**
 * Renders all pages of the original PDF (/assets/aistudio/02_Basics_of_Neural_Networks_09caaf4e.pdf)
 * into high-resolution PNG data URLs.
 */
export async function renderOriginalPdfPages(
  onProgress?: (current: number, total: number) => void
): Promise<
  Map<number, { canvas: HTMLCanvasElement; dataUrl: string; width: number; height: number }>
> {
  const pageMap = new Map<
    number,
    { canvas: HTMLCanvasElement; dataUrl: string; width: number; height: number }
  >();

  try {
    const pdfBuffer = await getOriginalPdfArrayBuffer();
    const loadingTask = pdfjsLib.getDocument({
      data: new Uint8Array(pdfBuffer.slice(0))
    });
    const pdf = await loadingTask.promise;
    const numPages = pdf.numPages;

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      if (onProgress) onProgress(pageNum, numPages);
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 2.2 });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        await page.render({
          canvasContext: ctx,
          viewport,
          canvas
        } as any).promise;

        const dataUrl = canvas.toDataURL('image/png', 0.95);
        cachedSinglePageDataUrls.set(pageNum, dataUrl);

        pageMap.set(pageNum, {
          canvas,
          dataUrl,
          width: viewport.width,
          height: viewport.height
        });
      }
    }
  } catch (err) {
    console.warn('Fallback: Could not render PDF pages via pdfjs:', err);
  }

  return pageMap;
}

/**
 * Renders a high-resolution visual diagram card (PNG) for a slide's interactive graph/figure.
 */
export function renderVisualDiagramPng(s: SlideBlueprint): string {
  const canvas = document.createElement('canvas');
  canvas.width = 960;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  drawRoundRect(ctx, 0, 0, 960, 540, 18, '#0B1120', '#1E293B', 4);

  ctx.fillStyle = '#38BDF8';
  ctx.font = `700 20px ${FONT_UI}`;
  ctx.fillText(`LOOKER STUDIO VISUAL FIGURE • SLIDE ${s.slideNumber}`, 36, 44);

  ctx.fillStyle = '#94A3B8';
  ctx.font = `500 16px ${FONT_KHMER}`;
  ctx.fillText(
    `${s.chartMetricsMath.chartSetup.chartType} (${s.chartMetricsMath.chartSetup.chartTypeKh})`,
    36,
    72
  );

  const t = s.interactiveType;
  if (t === 'sigmoid' || t === 'tanh' || t === 'relu' || t === 'leaky_relu' || t === 'elu') {
    const ox = 480;
    const oy = 310;
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(80, oy);
    ctx.lineTo(880, oy);
    ctx.moveTo(ox, 110);
    ctx.lineTo(ox, 480);
    ctx.stroke();

    ctx.strokeStyle = '#38BDF8';
    ctx.lineWidth = 5;
    ctx.beginPath();
    for (let px = -5; px <= 5; px += 0.1) {
      let py = 0;
      if (t === 'sigmoid') py = 1 / (1 + Math.exp(-px));
      else if (t === 'tanh') py = Math.tanh(px);
      else if (t === 'relu') py = Math.max(0, px) / 5;
      else if (t === 'leaky_relu') py = (px >= 0 ? px : 0.15 * px) / 5;
      else py = (px >= 0 ? px : Math.exp(px) - 1) / 5;

      const sx = ox + px * 70;
      const sy = oy - py * 150;
      if (px === -5) ctx.moveTo(sx, sy);
      else ctx.lineTo(sx, sy);
    }
    ctx.stroke();

    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 3.5;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    for (let px = -5; px <= 5; px += 0.1) {
      const sig = 1 / (1 + Math.exp(-px));
      let dy = sig * (1 - sig);
      if (t === 'tanh') dy = (1 - Math.pow(Math.tanh(px), 2)) * 0.8;
      else if (t === 'relu') dy = px > 0 ? 0.6 : 0;
      else if (t === 'leaky_relu') dy = px > 0 ? 0.6 : 0.1;
      else if (t === 'elu') dy = px > 0 ? 0.6 : 0.6 * Math.exp(px);

      const sx = ox + px * 70;
      const sy = oy - dy * 150;
      if (px === -5) ctx.moveTo(sx, sy);
      else ctx.lineTo(sx, sy);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#38BDF8';
    ctx.font = `700 17px ${FONT_MONO}`;
    ctx.fillText('─── Activation g(z)', 640, 140);
    ctx.fillStyle = '#F59E0B';
    ctx.fillText("--- Derivative g'(z)", 640, 170);
  } else {
    const layers = [
      { x: 160, nodes: [170, 290, 410], color: '#38BDF8', label: 'Input Layer x' },
      { x: 390, nodes: [130, 235, 345, 450], color: '#818CF8', label: 'Hidden Layer 1' },
      { x: 610, nodes: [170, 290, 410], color: '#C084FC', label: 'Hidden Layer 2' },
      { x: 810, nodes: [230, 350], color: '#10B981', label: 'Output h(x)' }
    ];

    for (let l = 0; l < layers.length - 1; l++) {
      const curr = layers[l];
      const next = layers[l + 1];
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.lineWidth = 2;
      curr.nodes.forEach((y1) => {
        next.nodes.forEach((y2) => {
          ctx.beginPath();
          ctx.moveTo(curr.x, y1);
          ctx.lineTo(next.x, y2);
          ctx.stroke();
        });
      });
    }

    layers.forEach((layer) => {
      layer.nodes.forEach((y, idx) => {
        ctx.fillStyle = '#0F172A';
        ctx.strokeStyle = layer.color;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(layer.x, y, 26, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = `700 15px ${FONT_MONO}`;
        ctx.textAlign = 'center';
        ctx.fillText(`a${idx + 1}`, layer.x, y + 5);
      });
      ctx.fillStyle = '#94A3B8';
      ctx.font = `600 15px ${FONT_UI}`;
      ctx.textAlign = 'center';
      ctx.fillText(layer.label, layer.x, 505);
    });
    ctx.textAlign = 'left';
  }

  return canvas.toDataURL('image/png', 0.94);
}

/**
 * Renders the Looker Studio Card Frames, Rounded Borders, Pill Badges, and Sparklines
 * WITHOUT baking in the text, so that native editable PowerPoint text boxes sit cleanly on top.
 */
function renderSlideFrameBackdrop1080p(variant: 'side_by_side' | 'full_original'): string {
  const W = 1920;
  const H = 1080;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, W, H);

  drawRoundRect(ctx, 28, 20, W - 56, 134, 20, '#0F172A', '#1E293B', 2);
  drawRoundRect(ctx, 56, 34, 420, 32, 8, 'rgba(56, 189, 248, 0.15)', 'rgba(56, 189, 248, 0.4)', 1.5);
  drawRoundRect(ctx, W - 260, 34, 200, 34, 17, 'rgba(245, 158, 11, 0.18)', 'rgba(245, 158, 11, 0.45)', 1.5);

  if (variant === 'full_original') {
    drawRoundRect(ctx, 28, 172, W - 56, H - 200, 20, '#FFFFFF', '#38BDF8', 3);
    return canvas.toDataURL('image/png', 0.92);
  }

  [0, 1, 2].forEach((idx) => {
    const cardW = 604;
    const cardX = 28 + idx * 630;
    const cardY = 890;
    const cardH = 165;

    drawRoundRect(
      ctx,
      cardX,
      cardY,
      cardW,
      cardH,
      18,
      '#0F172A',
      idx === 0 ? '#38BDF8' : idx === 1 ? '#F59E0B' : '#10B981',
      2
    );

    ctx.strokeStyle = idx === 0 ? '#38BDF8' : idx === 1 ? '#F59E0B' : '#10B981';
    ctx.lineWidth = 2.5;
    ctx.globalAlpha = 0.55;
    ctx.beginPath();
    ctx.moveTo(cardX + 24, cardY + 116);
    ctx.quadraticCurveTo(cardX + 180, cardY + 98, cardX + 320, cardY + 112);
    ctx.quadraticCurveTo(cardX + 460, cardY + 124, cardX + cardW - 28, cardY + 100);
    ctx.stroke();
    ctx.globalAlpha = 1.0;
  });

  drawRoundRect(ctx, 28, 172, 915, 700, 20, '#0F172A', '#1E293B', 2);
  drawRoundRect(ctx, 48, 222, 875, 628, 14, '#FFFFFF', '#38BDF8', 2);

  drawRoundRect(ctx, 965, 172, 927, 700, 20, '#0F172A', '#1E293B', 2);
  drawRoundRect(ctx, 990, 196, 877, 325, 14, '#020617', 'rgba(245, 158, 11, 0.35)', 1.5);
  drawRoundRect(ctx, 990, 538, 877, 310, 14, '#020617', 'rgba(56, 189, 248, 0.35)', 1.5);
  drawRoundRect(ctx, 1014, 782, 829, 52, 10, 'rgba(16, 185, 129, 0.14)', 'rgba(16, 185, 129, 0.4)', 1.5);

  return canvas.toDataURL('image/png', 0.92);
}

/**
 * Renders the Right-Hand Bilingual Card + Bottom KPI Cards with 100% browser-rendered
 * 'Kantumruy Pro', 'Inter', and 'Fira Code' fonts for the Font-Locked mode.
 */
function renderFontLockedSlide1080p(
  s: SlideBlueprint,
  totalSlides: number,
  origPage: { canvas: HTMLCanvasElement; width: number; height: number } | undefined
): string {
  const W = 1920;
  const H = 1080;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, W, H);

  drawRoundRect(ctx, 28, 20, W - 56, 134, 20, '#0F172A', '#1E293B', 2);
  drawRoundRect(ctx, 56, 38, 360, 32, 8, 'rgba(56, 189, 248, 0.15)', 'rgba(56, 189, 248, 0.4)', 1.5);
  ctx.fillStyle = '#38BDF8';
  ctx.font = `700 14px ${FONT_MONO}`;
  ctx.fillText(`LOOKER STUDIO PAGE ${s.slideNumber} OF ${totalSlides} • ${s.category.toUpperCase()}`, 70, 59);

  drawRoundRect(ctx, W - 260, 36, 200, 34, 17, 'rgba(245, 158, 11, 0.18)', 'rgba(245, 158, 11, 0.45)', 1.5);
  ctx.fillStyle = '#FCD34D';
  ctx.font = `700 15px ${FONT_UI}`;
  ctx.textAlign = 'center';
  ctx.fillText('Dr. Valy Dona', W - 160, 58);
  ctx.textAlign = 'left';

  ctx.fillStyle = '#94A3B8';
  ctx.font = `500 14px ${FONT_UI}`;
  ctx.textAlign = 'right';
  ctx.fillText('Course: Dr. Valy Dona • 16:9 BI Blueprint', W - 60, 94);
  ctx.textAlign = 'left';

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `800 28px ${FONT_UI}`;
  ctx.fillText(s.englishTitle, 56, 102);

  ctx.fillStyle = '#FCD34D';
  ctx.font = `700 23px ${FONT_KHMER}`;
  ctx.fillText(s.khmerTitle, 56, 138);

  s.chartMetricsMath.scorecards.slice(0, 3).forEach((kpi, idx) => {
    const cardW = 604;
    const cardX = 28 + idx * 630;
    const cardY = 890;
    const cardH = 165;

    drawRoundRect(
      ctx,
      cardX,
      cardY,
      cardW,
      cardH,
      18,
      '#0F172A',
      idx === 0 ? '#38BDF8' : idx === 1 ? '#F59E0B' : '#10B981',
      2
    );

    ctx.fillStyle = '#94A3B8';
    ctx.font = `600 16px ${FONT_KHMER}`;
    ctx.fillText(`${kpi.labelEn} / ${kpi.labelKh}`, cardX + 24, cardY + 36);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `800 32px ${FONT_MONO}`;
    ctx.fillText(kpi.value, cardX + 24, cardY + 84);

    ctx.strokeStyle = idx === 0 ? '#38BDF8' : idx === 1 ? '#F59E0B' : '#10B981';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cardX + 24, cardY + 114);
    ctx.quadraticCurveTo(cardX + 180, cardY + 95, cardX + 320, cardY + 110);
    ctx.quadraticCurveTo(cardX + 460, cardY + 122, cardX + cardW - 28, cardY + 98);
    ctx.stroke();

    ctx.fillStyle = '#CBD5E1';
    ctx.font = `500 14.5px ${FONT_KHMER}`;
    ctx.fillText(kpi.tooltipKh || kpi.tooltipEn, cardX + 24, cardY + 146);
  });

  drawRoundRect(ctx, 28, 172, 915, 700, 20, '#0F172A', '#1E293B', 2);
  ctx.fillStyle = '#38BDF8';
  ctx.font = `700 17px ${FONT_KHMER}`;
  ctx.fillText(`ទម្រង់ស្លាយដើម (ORIGINAL SLIDE #${s.slideNumber})`, 52, 206);
  drawRoundRect(ctx, 48, 222, 875, 628, 14, '#FFFFFF', '#334155', 1.5);

  if (origPage) {
    const maxW = 855;
    const maxH = 608;
    const imgRatio = origPage.width / origPage.height;
    const boxRatio = maxW / maxH;
    let drawW = maxW;
    let drawH = maxH;
    if (imgRatio > boxRatio) {
      drawH = maxW / imgRatio;
    } else {
      drawW = maxH * imgRatio;
    }
    const dx = 48 + (875 - drawW) / 2;
    const dy = 222 + (628 - drawH) / 2;
    ctx.drawImage(origPage.canvas, dx, dy, drawW, drawH);
  }

  drawRoundRect(ctx, 965, 172, 927, 700, 20, '#0F172A', '#1E293B', 2);
  drawRoundRect(ctx, 990, 196, 877, 325, 14, '#020617', 'rgba(245, 158, 11, 0.35)', 1.5);

  ctx.fillStyle = '#FCD34D';
  ctx.font = `700 18px ${FONT_KHMER}`;
  ctx.fillText('ការពន្យល់លម្អិតជាភាសាខ្មែរ (KHMER EXPLANATION • KANTUMRUY PRO)', 1014, 230);

  ctx.fillStyle = '#FEF3C7';
  ctx.font = `400 19.5px ${FONT_KHMER}`;
  drawWrappedText(ctx, s.expandedBilingualContent.deepDiveExplanation.kh, 1014, 268, 830, 33, 7);

  drawRoundRect(ctx, 990, 538, 877, 310, 14, '#020617', 'rgba(56, 189, 248, 0.35)', 1.5);

  ctx.fillStyle = '#38BDF8';
  ctx.font = `700 17px ${FONT_UI}`;
  ctx.fillText('ENGLISH DEEP-DIVE & REAL-WORLD APPLICATION (INTER FONT)', 1014, 570);

  ctx.fillStyle = '#E2E8F0';
  ctx.font = `400 18px ${FONT_UI}`;
  drawWrappedText(ctx, s.expandedBilingualContent.deepDiveExplanation.en, 1014, 604, 830, 29, 6);

  drawRoundRect(ctx, 1014, 782, 829, 52, 10, 'rgba(16, 185, 129, 0.14)', 'rgba(16, 185, 129, 0.4)', 1.5);
  ctx.fillStyle = '#34D399';
  ctx.font = `700 15.5px ${FONT_KHMER}`;
  drawWrappedText(
    ctx,
    `ឧទាហរណ៍ជាក់ស្តែង៖ ${s.expandedBilingualContent.practicalApplication.titleKh} (${s.expandedBilingualContent.practicalApplication.titleEn})`,
    1030,
    814,
    795,
    24,
    1
  );

  return canvas.toDataURL('image/png', 0.95);
}

const pxX = (x: number) => Number(((x / 1920) * 10).toFixed(3));
const pxY = (y: number) => Number(((y / 1080) * 5.625).toFixed(3));
const pxW = (w: number) => Number(((w / 1920) * 10).toFixed(3));
const pxH = (h: number) => Number(((h / 1080) * 5.625).toFixed(3));

/**
 * Adds a 16:9 Side-by-Side Looker Studio slide with 100% EDITABLE text boxes
 * and separate English ('Inter') and Khmer ('Kantumruy Pro') text runs so PowerPoint
 * applies the exact font to both scripts!
 */
function buildEditableSideBySideSlide(
  pptx: PptxGenJS,
  s: SlideBlueprint,
  totalSlides: number,
  backdropDataUrl: string,
  origPage: { dataUrl: string; width: number; height: number } | undefined,
  fallbackDiagramPng: string
) {
  const slide = pptx.addSlide();
  slide.background = { color: '020617' };

  if (backdropDataUrl) {
    slide.addImage({
      data: backdropDataUrl,
      x: 0,
      y: 0,
      w: 10,
      h: 5.625
    });
  }

  slide.addText(
    `LOOKER STUDIO PAGE ${s.slideNumber} OF ${totalSlides} • ${s.category.toUpperCase()}`,
    {
      x: pxX(64),
      y: pxY(36),
      w: pxW(405),
      h: pxH(28),
      fontSize: 8.5,
      bold: true,
      color: '38BDF8',
      fontFace: 'Fira Code',
      valign: 'middle',
      margin: 0
    }
  );

  slide.addText('Dr. Valy Dona', {
    x: pxX(1660),
    y: pxY(34),
    w: pxW(200),
    h: pxH(34),
    fontSize: 9.5,
    bold: true,
    color: 'FCD34D',
    fontFace: 'Inter',
    align: 'center',
    valign: 'middle',
    margin: 0
  });

  slide.addText('Course: Dr. Valy Dona • 16:9 BI Blueprint', {
    x: pxX(1480),
    y: pxY(74),
    w: pxW(380),
    h: pxH(24),
    fontSize: 8.5,
    color: '94A3B8',
    fontFace: 'Inter',
    align: 'right',
    valign: 'middle',
    margin: 0
  });

  slide.addText(s.englishTitle, {
    x: pxX(56),
    y: pxY(72),
    w: pxW(1420),
    h: pxH(38),
    fontSize: 15,
    bold: true,
    color: 'FFFFFF',
    fontFace: 'Inter',
    valign: 'middle',
    margin: 0
  });

  slide.addText(s.khmerTitle, {
    x: pxX(56),
    y: pxY(112),
    w: pxW(1420),
    h: pxH(36),
    fontSize: 12.5,
    bold: true,
    color: 'FCD34D',
    fontFace: 'Kantumruy Pro',
    valign: 'middle',
    margin: 0
  });

  slide.addText(
    [
      { text: 'ទម្រង់ស្លាយដើម ', options: { fontFace: 'Kantumruy Pro', bold: true, color: '38BDF8' } },
      { text: `(ORIGINAL SLIDE #${s.slideNumber})`, options: { fontFace: 'Inter', bold: true, color: '38BDF8' } }
    ],
    {
      x: pxX(52),
      y: pxY(182),
      w: pxW(860),
      h: pxH(32),
      fontSize: 10.5,
      valign: 'middle',
      margin: 0
    }
  );

  if (origPage) {
    const maxW = 855;
    const maxH = 608;
    const imgRatio = origPage.width / origPage.height;
    const boxRatio = maxW / maxH;
    let drawW = maxW;
    let drawH = maxH;
    if (imgRatio > boxRatio) {
      drawH = maxW / imgRatio;
    } else {
      drawW = maxH * imgRatio;
    }
    const dx = 48 + (875 - drawW) / 2;
    const dy = 222 + (628 - drawH) / 2;
    slide.addImage({
      data: origPage.dataUrl,
      x: pxX(dx),
      y: pxY(dy),
      w: pxW(drawW),
      h: pxH(drawH)
    });
  } else if (fallbackDiagramPng) {
    slide.addImage({
      data: fallbackDiagramPng,
      x: pxX(58),
      y: pxY(232),
      w: pxW(855),
      h: pxH(608)
    });
  }

  slide.addText(
    [
      { text: 'ការពន្យល់លម្អិតជាភាសាខ្មែរ ', options: { fontFace: 'Kantumruy Pro', bold: true, color: 'FCD34D' } },
      { text: '(KHMER EXPLANATION)', options: { fontFace: 'Inter', bold: true, color: 'FCD34D' } }
    ],
    {
      x: pxX(1014),
      y: pxY(206),
      w: pxW(830),
      h: pxH(30),
      fontSize: 10.5,
      valign: 'middle',
      margin: 0
    }
  );

  slide.addText(s.expandedBilingualContent.deepDiveExplanation.kh, {
    x: pxX(1014),
    y: pxY(242),
    w: pxW(830),
    h: pxH(265),
    fontSize: 10.5,
    color: 'FEF3C7',
    fontFace: 'Kantumruy Pro',
    valign: 'top',
    lineSpacingMultiple: 1.2,
    margin: 0
  });

  slide.addText('ENGLISH DEEP-DIVE & REAL-WORLD APPLICATION', {
    x: pxX(1014),
    y: pxY(548),
    w: pxW(830),
    h: pxH(28),
    fontSize: 10,
    bold: true,
    color: '38BDF8',
    fontFace: 'Inter',
    valign: 'middle',
    margin: 0
  });

  slide.addText(s.expandedBilingualContent.deepDiveExplanation.en, {
    x: pxX(1014),
    y: pxY(582),
    w: pxW(830),
    h: pxH(190),
    fontSize: 10,
    color: 'E2E8F0',
    fontFace: 'Inter',
    valign: 'top',
    lineSpacingMultiple: 1.18,
    margin: 0
  });

  slide.addText(
    [
      {
        text: `ឧទាហរណ៍ជាក់ស្តែង៖ ${s.expandedBilingualContent.practicalApplication.titleKh} `,
        options: { fontFace: 'Kantumruy Pro', bold: true, color: '34D399' }
      },
      {
        text: `(${s.expandedBilingualContent.practicalApplication.titleEn})`,
        options: { fontFace: 'Inter', bold: true, color: '34D399' }
      }
    ],
    {
      x: pxX(1028),
      y: pxY(786),
      w: pxW(800),
      h: pxH(44),
      fontSize: 9.5,
      valign: 'middle',
      margin: 0
    }
  );

  s.chartMetricsMath.scorecards.slice(0, 3).forEach((kpi, idx) => {
    const cardX = 28 + idx * 630;
    const cardY = 890;

    slide.addText(
      [
        { text: `${kpi.labelEn} / `, options: { fontFace: 'Inter', bold: true, color: '94A3B8' } },
        { text: kpi.labelKh, options: { fontFace: 'Kantumruy Pro', bold: true, color: '94A3B8' } }
      ],
      {
        x: pxX(cardX + 24),
        y: pxY(cardY + 12),
        w: pxW(556),
        h: pxH(28),
        fontSize: 9.5,
        valign: 'middle',
        margin: 0
      }
    );

    slide.addText(kpi.value, {
      x: pxX(cardX + 24),
      y: pxY(cardY + 44),
      w: pxW(556),
      h: pxH(46),
      fontSize: 16,
      bold: true,
      color: 'FFFFFF',
      fontFace: 'Fira Code',
      valign: 'middle',
      margin: 0
    });

    slide.addText(kpi.tooltipKh || kpi.tooltipEn, {
      x: pxX(cardX + 24),
      y: pxY(cardY + 122),
      w: pxW(556),
      h: pxH(32),
      fontSize: 8.5,
      color: 'CBD5E1',
      fontFace: 'Kantumruy Pro',
      valign: 'middle',
      margin: 0
    });
  });

  slide.addNotes(
    [
      `SLIDE ${s.slideNumber}: ${s.englishTitle} / ${s.khmerTitle}`,
      '',
      '--- ON-SCREEN TEXT (EN) ---',
      ...s.expandedBilingualContent.onScreenText.en,
      '',
      '--- ON-SCREEN TEXT (KH) ---',
      ...s.expandedBilingualContent.onScreenText.kh,
      '',
      '--- DEEP-DIVE EXPLANATION (KH) ---',
      s.expandedBilingualContent.deepDiveExplanation.kh,
      '',
      '--- DEEP-DIVE EXPLANATION (EN) ---',
      s.expandedBilingualContent.deepDiveExplanation.en
    ].join('\n')
  );
}

/**
 * Exports all 26 slides into a high-resolution 16:9 PowerPoint (.pptx) file with:
 * - XML <a:cs typeface="Kantumruy Pro"/> Complex Script patching for Khmer Unicode in PowerPoint!
 */
export async function exportToPptx(
  slides: SlideBlueprint[],
  mode: PptxExportMode = 'editable_pptx',
  onProgress?: (current: number, total: number) => void
): Promise<void> {
  await ensureWebFontsLoaded();

  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9'; // 10.0 x 5.625 inches
  pptx.author = 'Dr. Valy Dona';
  pptx.company = 'Looker Studio BI Blueprints';
  pptx.subject = '02_Basics_of_Neural_Networks (Bilingual English & Khmer)';
  pptx.title = 'Basics of Neural Networks — 26 Bilingual Slides';

  const pdfImages = await renderOriginalPdfPages(onProgress);
  const sideBySideBackdrop = renderSlideFrameBackdrop1080p('side_by_side');
  const fullOrigBackdrop = renderSlideFrameBackdrop1080p('full_original');

  for (const s of slides) {
    const origPage = pdfImages.get(s.slideNumber);
    const fallbackDiagramPng = renderVisualDiagramPng(s);

    if (mode === 'font_locked_pptx') {
      const slide = pptx.addSlide();
      slide.background = { color: '020617' };
      const lockedImg = renderFontLockedSlide1080p(s, slides.length, origPage);
      slide.addImage({
        data: lockedImg,
        x: 0,
        y: 0,
        w: 10,
        h: 5.625
      });
    } else if (mode === 'paired_slides') {
      const slideOrig = pptx.addSlide();
      slideOrig.background = { color: '020617' };

      if (fullOrigBackdrop) {
        slideOrig.addImage({
          data: fullOrigBackdrop,
          x: 0,
          y: 0,
          w: 10,
          h: 5.625
        });
      }

      slideOrig.addText(
        `LOOKER STUDIO PAGE ${s.slideNumber} OF ${slides.length} • ORIGINAL LECTURE SLIDE`,
        {
          x: pxX(64),
          y: pxY(36),
          w: pxW(405),
          h: pxH(28),
          fontSize: 8.5,
          bold: true,
          color: '38BDF8',
          fontFace: 'Fira Code',
          valign: 'middle',
          margin: 0
        }
      );

      slideOrig.addText('Dr. Valy Dona', {
        x: pxX(1660),
        y: pxY(34),
        w: pxW(200),
        h: pxH(34),
        fontSize: 9.5,
        bold: true,
        color: 'FCD34D',
        fontFace: 'Inter',
        align: 'center',
        valign: 'middle',
        margin: 0
      });

      slideOrig.addText(s.englishTitle, {
        x: pxX(56),
        y: pxY(72),
        w: pxW(1420),
        h: pxH(38),
        fontSize: 15,
        bold: true,
        color: 'FFFFFF',
        fontFace: 'Inter',
        valign: 'middle',
        margin: 0
      });

      slideOrig.addText(s.khmerTitle, {
        x: pxX(56),
        y: pxY(112),
        w: pxW(1420),
        h: pxH(36),
        fontSize: 12.5,
        bold: true,
        color: 'FCD34D',
        fontFace: 'Kantumruy Pro',
        valign: 'middle',
        margin: 0
      });

      if (origPage) {
        const maxW = 1820;
        const maxH = 850;
        const imgRatio = origPage.width / origPage.height;
        const boxRatio = maxW / maxH;
        let drawW = maxW;
        let drawH = maxH;
        if (imgRatio > boxRatio) {
          drawH = maxW / imgRatio;
        } else {
          drawW = maxH * imgRatio;
        }
        const dx = 28 + (1864 - drawW) / 2;
        const dy = 172 + (880 - drawH) / 2;
        slideOrig.addImage({
          data: origPage.dataUrl,
          x: pxX(dx),
          y: pxY(dy),
          w: pxW(drawW),
          h: pxH(drawH)
        });
      }

      buildEditableSideBySideSlide(
        pptx,
        s,
        slides.length,
        sideBySideBackdrop,
        origPage,
        fallbackDiagramPng
      );
    } else {
      buildEditableSideBySideSlide(
        pptx,
        s,
        slides.length,
        sideBySideBackdrop,
        origPage,
        fallbackDiagramPng
      );
    }
  }

  // Generate PPTX ArrayBuffer and patch <a:cs typeface="Kantumruy Pro"/> for Khmer Unicode!
  const rawBuffer = (await pptx.write({ outputType: 'arraybuffer' })) as ArrayBuffer;
  const patchedBlob = await patchPptxKhmerComplexScriptFonts(rawBuffer);

  const fileName =
    mode === 'font_locked_pptx'
      ? 'Basics_of_Neural_Networks_Exact_Font_Locked.pptx'
      : mode === 'paired_slides'
      ? 'Basics_of_Neural_Networks_Full_Editable_52_Slides.pptx'
      : 'Basics_of_Neural_Networks_Editable_26_Slides.pptx';

  triggerSafeBlobDownload(patchedBlob, fileName);
}

/**
 * Generates a rich, visual Interactive HTML5 Slide Deck (.html) that preserves:
 * 1. Exact Web Fonts ('Inter', 'Kantumruy Pro', 'Fira Code') automatically via Google Fonts
 * 2. Live Click-to-Edit Text Mode (contenteditable)
 * 3. Original Slide Visuals (embedded high-res images) + Looker Studio Visual Diagrams
 */
export async function generateInteractiveHtmlSlides(
  slides: SlideBlueprint[],
  onProgress?: (current: number, total: number) => void
): Promise<string> {
  await ensureWebFontsLoaded();
  const pdfImages = await renderOriginalPdfPages(onProgress);

  const enrichedSlides = slides.map((s) => ({
    ...s,
    originalSlideImg: pdfImages.get(s.slideNumber)?.dataUrl || '',
    diagramImg: renderVisualDiagramPng(s)
  }));

  const slidesJson = JSON.stringify(enrichedSlides);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Basics of Neural Networks — 26 Editable Bilingual Slides</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&family=Kantumruy+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #020617;
      color: #f8fafc;
      font-family: 'Inter', 'Kantumruy Pro', -apple-system, BlinkMacSystemFont, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .font-khmer { font-family: 'Kantumruy Pro', 'Inter', sans-serif !important; }
    .font-mono { font-family: 'Fira Code', monospace !important; }
    [contenteditable="true"] {
      outline: 1px dashed rgba(245, 158, 11, 0.6);
      border-radius: 6px;
      padding: 2px 6px;
      transition: background 0.2s;
    }
    [contenteditable="true"]:focus {
      outline: 2px solid #f59e0b;
      background: rgba(245, 158, 11, 0.1);
    }
    .topbar {
      background: #0f172a;
      border-bottom: 1px solid #1e293b;
      padding: 12px 24px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      position: sticky;
      top: 0;
      z-index: 50;
    }
    .brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 15px; }
    .badge {
      background: rgba(245, 158, 11, 0.2);
      color: #fcd34d;
      border: 1px solid rgba(245, 158, 11, 0.4);
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 11px;
    }
    .controls { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
    button, select {
      background: #1e293b;
      color: #f8fafc;
      border: 1px solid #334155;
      padding: 8px 14px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      font-family: 'Inter', 'Kantumruy Pro', sans-serif;
      cursor: pointer;
    }
    button:hover { background: #334155; }
    .slide-page {
      max-width: 1440px;
      width: 96%;
      margin: 20px auto;
      padding: 28px;
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 20px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.65);
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid #1e293b;
      padding-bottom: 14px;
      gap: 16px;
    }
    .slide-tag { color: #38bdf8; font-family: 'Fira Code', monospace; font-size: 12px; font-weight: 700; }
    .title-en { font-size: 24px; font-weight: 800; margin-top: 4px; color: #fff; font-family: 'Inter', sans-serif; }
    .title-kh { font-size: 19px; font-weight: 700; color: #fcd34d; margin-top: 4px; font-family: 'Kantumruy Pro', sans-serif; }
    .hero-visual-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      align-items: stretch;
    }
    .orig-slide-box {
      background: #ffffff;
      border: 2px solid #38bdf8;
      border-radius: 14px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .orig-slide-box img {
      width: 100%;
      max-height: 400px;
      object-fit: contain;
      border-radius: 8px;
    }
    .diagram-box {
      background: #020617;
      border: 1px solid #1e293b;
      border-radius: 14px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .diagram-box img {
      width: 100%;
      max-height: 360px;
      object-fit: contain;
      border-radius: 8px;
    }
    .kpi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
    .kpi-card {
      background: #020617;
      border: 1px solid #1e293b;
      border-left: 4px solid #38bdf8;
      border-radius: 12px;
      padding: 14px 16px;
    }
    .kpi-label { font-size: 12.5px; color: #94a3b8; font-family: 'Kantumruy Pro', 'Inter', sans-serif; }
    .kpi-val { font-size: 22px; font-weight: 800; color: #fff; margin: 6px 0; font-family: 'Fira Code', monospace; }
    .kpi-tip { font-size: 11.5px; color: #38bdf8; font-family: 'Kantumruy Pro', 'Inter', sans-serif; }
    .content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
    .card {
      background: #020617;
      border: 1px solid #1e293b;
      border-radius: 14px;
      padding: 20px;
    }
    .card h3 { font-size: 13.5px; text-transform: uppercase; color: #38bdf8; margin-bottom: 12px; letter-spacing: 0.04em; font-family: 'Kantumruy Pro', 'Inter', sans-serif; }
    ul { padding-left: 20px; line-height: 1.8; font-size: 14.5px; color: #e2e8f0; }
    .kh-text { color: #fde68a; font-family: 'Kantumruy Pro', sans-serif; line-height: 1.9; font-size: 14.5px; }
    .formula-box {
      background: #090d16;
      border: 1px solid #1e293b;
      padding: 16px;
      border-radius: 10px;
      text-align: center;
      margin-bottom: 12px;
      color: #7dd3fc;
      font-size: 20px;
    }
    @media (max-width: 960px) {
      .hero-visual-grid, .kpi-grid, .content-grid { grid-template-columns: 1fr; }
    }
    @media print {
      .topbar { display: none !important; }
      body { background: #0f172a !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .slide-page { page-break-after: always; width: 100%; max-width: none; margin: 0; border: none; box-shadow: none; }
      @page { size: 16in 9in; margin: 0.25in; }
    }
  </style>
</head>
<body>
  <div class="topbar">
    <div class="brand">
      <span>Looker Studio BI Blueprints</span>
      <span class="badge" contenteditable="true">Mr. POL Utdom</span>
      <span style="color:#94a3b8;font-size:12px;font-weight:400;" contenteditable="true">Course: Dr. Valy Dona</span>
    </div>
    <div class="controls">
      <button onclick="prevSlide()">← ទំព័រមុន (Prev)</button>
      <select id="slideSelect" onchange="goToSlide(Number(this.value))"></select>
      <button onclick="nextSlide()">ទំព័របន្ទាប់ (Next) →</button>
      <button id="btnEdit" onclick="toggleEdit()" style="background:#d97706;border-color:#f59e0b;">✎ Edit Text Mode: ON (កែអក្សរបាន)</button>
      <button id="btnAll" onclick="togglePrintAll()" style="background:#4f46e5;border-color:#6366f1;">Show All 26 Slides / Print PDF</button>
    </div>
  </div>

  <div id="slidesRoot"></div>

  <script>
    const slides = ${slidesJson};
    let idx = 0;
    let showAll = false;
    let isEditable = true;

    const sel = document.getElementById('slideSelect');
    slides.forEach((s, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = 'Slide ' + s.slideNumber + ' of ' + slides.length + ': ' + s.englishTitle;
      sel.appendChild(opt);
    });

    function buildSlideHtml(s) {
      const f = s.chartMetricsMath.mathematicalFormulas && s.chartMetricsMath.mathematicalFormulas[0];
      const ce = isEditable ? 'contenteditable="true"' : '';
      return \`
        <div class="slide-page">
          <div class="slide-header">
            <div style="flex:1;">
              <div class="slide-tag" \${ce}>LOOKER STUDIO PAGE \${s.slideNumber} OF \${slides.length} • \${s.category.toUpperCase()}</div>
              <div class="title-en" \${ce}>\${s.englishTitle}</div>
              <div class="title-kh" \${ce}>\${s.khmerTitle}</div>
            </div>
            <div style="text-align:right;font-size:12px;color:#94a3b8;">
              <div>Click any text to edit</div>
              <div class="font-mono" style="color:#38bdf8;">Inter & Kantumruy Pro</div>
            </div>
          </div>

          <div class="hero-visual-grid">
            <div class="orig-slide-box">
              <div class="font-khmer" style="width:100%;display:flex;justify-content:space-between;font-size:11px;font-weight:700;color:#0f172a;margin-bottom:6px;padding:0 4px;">
                <span \${ce}>ORIGINAL LECTURE SLIDE #\${s.slideNumber} (ទម្រង់ស្លាយដើម)</span>
                <span \${ce}>Dr. Valy Dona</span>
              </div>
              \${s.originalSlideImg ? '<img src="' + s.originalSlideImg + '" alt="Original Slide ' + s.slideNumber + '" />' : '<img src="' + s.diagramImg + '" alt="Slide Diagram" />'}
            </div>

            <div class="diagram-box">
              <div style="font-size:12px;font-weight:700;color:#38bdf8;margin-bottom:8px;" \${ce}>
                LOOKER STUDIO VISUAL GRAPH & MATHEMATICAL MODEL
              </div>
              <img src="\${s.diagramImg}" alt="Looker Visual Graph" />
              \${f ? '<div class="formula-box math-target" data-latex="' + f.latex.replace(/"/g, '&quot;') + '" style="margin-top:10px;margin-bottom:0;"></div>' : ''}
            </div>
          </div>

          <div class="kpi-grid">
            \${s.chartMetricsMath.scorecards.map(k => \`
              <div class="kpi-card">
                <div class="kpi-label" \${ce}>\${k.labelEn} / \${k.labelKh}</div>
                <div class="kpi-val" \${ce}>\${k.value}</div>
                <div class="kpi-tip" \${ce}>\${k.tooltipEn} • \${k.tooltipKh}</div>
              </div>
            \`).join('')}
          </div>

          <div class="content-grid">
            <div class="card">
              <h3 \${ce}>On-Screen Slide Text (English)</h3>
              <ul \${ce}>\${s.expandedBilingualContent.onScreenText.en.map(t => '<li>' + t + '</li>').join('')}</ul>
            </div>
            <div class="card">
              <h3 \${ce}>អត្ថបទបង្ហាញលើស្លាយ (ភាសាខ្មែរ)</h3>
              <ul class="kh-text" \${ce}>\${s.expandedBilingualContent.onScreenText.kh.map(t => '<li>' + t + '</li>').join('')}</ul>
            </div>
          </div>

          <div class="card">
            <h3 \${ce}>ការពន្យល់ពង្រីកសេចក្តីលម្អិត (Deep-Dive Bilingual Explanation & Practical Case Study)</h3>
            <p class="kh-text" style="margin-bottom:10px;" \${ce}>\${s.expandedBilingualContent.deepDiveExplanation.kh}</p>
            <p style="font-size:14px;line-height:1.7;color:#e2e8f0;margin-bottom:12px;" \${ce}>\${s.expandedBilingualContent.deepDiveExplanation.en}</p>
            <div class="font-khmer" style="border-top:1px solid #1e293b;padding-top:10px;font-size:13px;color:#34d399;" \${ce}>
              <strong>ឧទាហរណ៍ជាក់ស្តែង (\${s.expandedBilingualContent.practicalApplication.titleEn} / \${s.expandedBilingualContent.practicalApplication.titleKh}):</strong>
              \${s.expandedBilingualContent.practicalApplication.scenarioKh} — <em>\${s.expandedBilingualContent.practicalApplication.businessImpactKh}</em>
            </div>
          </div>
        </div>
      \`;
    }

    function render() {
      sel.value = idx;
      const root = document.getElementById('slidesRoot');
      if (showAll) {
        root.innerHTML = slides.map(s => buildSlideHtml(s)).join('');
      } else {
        root.innerHTML = buildSlideHtml(slides[idx]);
      }

      if (window.katex) {
        document.querySelectorAll('.math-target').forEach(el => {
          const tex = el.getAttribute('data-latex');
          try {
            window.katex.render(tex, el, { displayMode: true, throwOnError: false });
          } catch (e) {
            el.textContent = tex;
          }
        });
      }
    }

    function toggleEdit() {
      isEditable = !isEditable;
      const btn = document.getElementById('btnEdit');
      btn.textContent = isEditable ? '✎ Edit Text Mode: ON (កែអក្សរបាន)' : '✎ Edit Text Mode: OFF';
      btn.style.background = isEditable ? '#d97706' : '#1e293b';
      render();
    }

    function prevSlide() { showAll = false; if (idx > 0) { idx--; render(); } }
    function nextSlide() { showAll = false; if (idx < slides.length - 1) { idx++; render(); } }
    function goToSlide(n) { showAll = false; idx = n; render(); }
    function togglePrintAll() {
      showAll = !showAll;
      render();
      if (showAll) {
        setTimeout(() => window.print(), 350);
      }
    }

    window.addEventListener('keydown', (e) => {
      if (document.activeElement && document.activeElement.getAttribute('contenteditable') === 'true') return;
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    });
    window.addEventListener('load', render);
    render();
  </script>
</body>
</html>`;
}
