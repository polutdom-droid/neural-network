import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Download,
  FileText,
  CheckCircle2,
  BookOpen,
  Presentation,
  Globe,
  FileDown,
  Loader2,
  Layers,
  Type,
  Sparkles,
  FolderGit2
} from 'lucide-react';
import { SlideBlueprint, BilingualMode } from '../types';
import {
  exportToPptx,
  generateInteractiveHtmlSlides,
  downloadOriginalFontsZip,
  downloadOriginalPdfFile,
  downloadGitHubVercelSourceZip,
  triggerSafeBlobDownload,
  PptxExportMode
} from '../utils/slideExporter';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideBlueprint[];
  langMode: BilingualMode;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, slides }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isGeneratingPptx, setIsGeneratingPptx] = useState<boolean>(false);
  const [isGeneratingHtml, setIsGeneratingHtml] = useState<boolean>(false);
  const [isDownloadingFonts, setIsDownloadingFonts] = useState<boolean>(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState<boolean>(false);
  const [isDownloadingSource, setIsDownloadingSource] = useState<boolean>(false);
  const [renderProgress, setRenderProgress] = useState<string>('');
  const [pptxSuccess, setPptxSuccess] = useState<boolean>(false);
  const [pdfSuccess, setPdfSuccess] = useState<boolean>(false);
  const [pptxMode, setPptxMode] = useState<PptxExportMode>('editable_pptx');
  const [format, setFormat] = useState<'markdown' | 'calculated_fields' | 'csv_dataset'>('markdown');

  if (!isOpen) return null;

  const handleDownloadSourceZip = async () => {
    try {
      setIsDownloadingSource(true);
      setRenderProgress('Packaging full source code for GitHub & Vercel...');
      await downloadGitHubVercelSourceZip();
    } finally {
      setIsDownloadingSource(false);
      setRenderProgress('');
    }
  };

  const handleDownloadPptx = async (selectedMode: PptxExportMode) => {
    try {
      setPptxMode(selectedMode);
      setIsGeneratingPptx(true);
      setPptxSuccess(false);
      setRenderProgress('Rendering slide 1 / 26...');
      await exportToPptx(slides, selectedMode, (curr, total) => {
        setRenderProgress(
          selectedMode === 'editable_pptx'
            ? `Building Editable + Khmer Font XML Slide ${curr} / ${total}...`
            : `Rendering Exact-Font Slide ${curr} / ${total} (Full HD)...`
        );
      });
      setPptxSuccess(true);
      setRenderProgress('');
      setTimeout(() => setPptxSuccess(false), 4000);
    } finally {
      setIsGeneratingPptx(false);
      setRenderProgress('');
    }
  };

  const handleDownloadFontsZip = async () => {
    try {
      setIsDownloadingFonts(true);
      setRenderProgress('Preparing Kantumruy Pro & Inter font files...');
      await downloadOriginalFontsZip();
    } finally {
      setIsDownloadingFonts(false);
      setRenderProgress('');
    }
  };

  const handleDownloadHtmlSlides = async () => {
    try {
      setIsGeneratingHtml(true);
      setRenderProgress('Embedding original slides 1 / 26...');
      const htmlContent = await generateInteractiveHtmlSlides(slides, (curr, total) => {
        setRenderProgress(`Embedding original slide ${curr} / ${total}...`);
      });
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
      triggerSafeBlobDownload(blob, 'Basics_of_Neural_Networks_26_Editable_ExactFont_Slides.html');
    } finally {
      setIsGeneratingHtml(false);
      setRenderProgress('');
    }
  };

  const handleDownloadOriginalPdf = async () => {
    try {
      setIsDownloadingPdf(true);
      setPdfSuccess(false);
      setRenderProgress('Downloading original 26-page PDF...');
      await downloadOriginalPdfFile();
      setPdfSuccess(true);
      setTimeout(() => setPdfSuccess(false), 4000);
    } finally {
      setIsDownloadingPdf(false);
      setRenderProgress('');
    }
  };

  const generateFullMarkdown = () => {
    const header = `# Google Looker Studio Interactive Presentation Blueprint
## Course: 02_Basics_of_Neural_Networks
### Instructor: Dr. Valy Dona
### Language: Fully Bilingual (English & Khmer / ភាសាខ្មែរ)
### Total Pages: ${slides.length} Isolated Looker Studio Pages (Strictly Non-Merged)

================================================================================
`;

    const body = slides
      .map((s) => {
        return `### [LOOKER STUDIO PAGE ${s.slideNumber}: CORRESPONDING TO SLIDE ${s.slideNumber}]

#### 1. Page Identity & Theme (អត្តសញ្ញាណទំព័រ និងពណ៌)
- **Bilingual Page Title:** ${s.pageIdentity.bilingualPageTitle}
- **Canvas Setup:** ${s.pageIdentity.canvasSetup}
  - Primary Element: \`${s.pageIdentity.hexPrimary}\`
  - Secondary Element: \`${s.pageIdentity.hexSecondary}\`
  - Background Canvas: \`${s.pageIdentity.hexBackground}\`
  - Surface Card: \`${s.pageIdentity.hexSurface}\`
  - Accent / Action: \`${s.pageIdentity.hexAccent}\`
  - Theme Rationale (EN): ${s.pageIdentity.themeRationaleEn}
  - Theme Rationale (KH): ${s.pageIdentity.themeRationaleKh}

#### 2. Visual Wireframe & Layout Grid (ប្លង់រៀបចំសមាសភាគលើទំព័រ)
- **Header Section:**
  - EN: ${s.visualWireframe.headerSection.en}
  - KH: ${s.visualWireframe.headerSection.kh}
- **Main Workspace Canvas:**
  - EN: ${s.visualWireframe.mainWorkspaceCanvas.en}
  - KH: ${s.visualWireframe.mainWorkspaceCanvas.kh}
- **Grid Specifications (16:9 Grid):**
  - Aspect Ratio: ${s.visualWireframe.gridSpecs.aspectRatio} (${s.visualWireframe.gridSpecs.resolution})
  - Left Panel: ${s.visualWireframe.gridSpecs.leftPanelWidth} | Right Panel: ${s.visualWireframe.gridSpecs.rightPanelWidth}
- **Component Placement Coordinates:**
${s.visualWireframe.componentPositions.map((c) => `  - [${c.type}] ${c.nameEn} / ${c.nameKh} → \`${c.coordinates}\``).join('\n')}

#### 3. Chart, Metrics & Math Mapping (ការរៀបចំក្រាហ្វ ទិន្នន័យ និងរូបមន្ត)
- **Metric Scorecards (សូចនាករគន្លឹះ):**
${s.chartMetricsMath.scorecards.map((k, i) => `  ${i + 1}. **${k.labelEn} / ${k.labelKh}:** Value = \`${k.value}\` | Tooltip: ${k.tooltipEn} (${k.tooltipKh})`).join('\n')}
- **Interactive Chart Setup (ការកំណត់ទម្រង់ក្រាហ្វ):**
  - Chart Type: ${s.chartMetricsMath.chartSetup.chartType} (${s.chartMetricsMath.chartSetup.chartTypeKh})
  - Dimensions: ${s.chartMetricsMath.chartSetup.dimensions.map((d) => `\`${d}\``).join(', ')}
  - Metrics: ${s.chartMetricsMath.chartSetup.metrics.map((m) => `\`${m}\``).join(', ')}
  - Sort Order: ${s.chartMetricsMath.chartSetup.sortOrder}
  - Default Filter: ${s.chartMetricsMath.chartSetup.filterDefault}
  - Configuration Instructions: ${s.chartMetricsMath.chartSetup.chartDescriptionEn}
${
  s.chartMetricsMath.mathematicalFormulas && s.chartMetricsMath.mathematicalFormulas.length > 0
    ? `
- **Mathematical Formulas (រូបមន្តគណិតវិទ្យា):**
  - Primary Formulation: \`\`\`latex
    ${s.chartMetricsMath.mathematicalFormulas[0].latex}
    \`\`\`
  ${
    s.chartMetricsMath.mathematicalFormulas[0].latexSecondary
      ? `- Secondary Formulation: \`\`\`latex\n    ${s.chartMetricsMath.mathematicalFormulas[0].latexSecondary}\n    \`\`\``
      : ''
  }
  - Formula Explanation (EN): ${s.chartMetricsMath.mathematicalFormulas[0].explanationEn}
  - Formula Explanation (KH): ${s.chartMetricsMath.mathematicalFormulas[0].explanationKh}
  - Variable & Symbol Dictionary:
${s.chartMetricsMath.mathematicalFormulas[0].variables
  .map((v) => `    * **\`${v.symbol}\`** [${v.role}]: ${v.meaningEn} — ${v.meaningKh}`)
  .join('\n')}
`
    : ''
}

#### 4. Page Controls & Interactive Filters (ប៊ូតុងបញ្ជា និងតម្រងទិន្នន័យ)
${s.pageControls
  .map(
    (c, i) =>
      `  ${i + 1}. **[${c.controlType}] ${c.controlLabelEn} / ${c.controlLabelKh}:** Field: \`${
        c.fieldName
      }\`, Default: \`${c.defaultValue}\`${
        c.options ? `, Options: [${c.options.join(', ')}]` : ''
      }\n     - Purpose: ${c.purposeEn} (${c.purposeKh})`
  )
  .join('\n')}

#### 5. Expanded Bilingual Content & In-Depth Explanation (អត្ថបទពន្យល់លម្អិតបន្ថែមជាពីរភាសា)
- **On-Screen Text (អត្ថបទបង្ហាញលើអេក្រង់):**
  - English:
${s.expandedBilingualContent.onScreenText.en.map((t) => `    * ${t}`).join('\n')}
  - ភាសាខ្មែរ:
${s.expandedBilingualContent.onScreenText.kh.map((t) => `    * ${t}`).join('\n')}
- **Deep-Dive Lesson Explanation (ការពន្យល់ពង្រីកសេចក្តីលម្អិត):**
  - English: ${s.expandedBilingualContent.deepDiveExplanation.en}
  - ភាសាខ្មែរ: ${s.expandedBilingualContent.deepDiveExplanation.kh}
- **Practical Application/Example (ឧទាហរណ៍ជាក់ស្តែង):**
  - Case Study: ${s.expandedBilingualContent.practicalApplication.titleEn} / ${
          s.expandedBilingualContent.practicalApplication.titleKh
        }
  - Scenario (EN): ${s.expandedBilingualContent.practicalApplication.scenarioEn}
  - Scenario (KH): ${s.expandedBilingualContent.practicalApplication.scenarioKh}
  - Impact (EN): ${s.expandedBilingualContent.practicalApplication.businessImpactEn}
  - Impact (KH): ${s.expandedBilingualContent.practicalApplication.businessImpactKh}
---`;
      })
      .join('\n\n');

    return `${header}\n\n${body}`;
  };

  const generateCalculatedFields = () => {
    return `-- Google Looker Studio Custom Calculated Fields Snippets
-- 02_Basics_of_Neural_Networks_Dr_Valy_Dona

-- 1. Sigmoid Output Probability
CASE 
  WHEN logit_z IS NOT NULL THEN 1.0 / (1.0 + EXP(-1.0 * logit_z))
  ELSE 0.5 
END

-- 2. ReLU Activation
CASE 
  WHEN logit_z >= 0 THEN logit_z 
  ELSE 0.0 
END

-- 3. Leaky ReLU (alpha = 0.1)
CASE 
  WHEN logit_z >= 0 THEN logit_z 
  ELSE 0.1 * logit_z 
END

-- 4. Cross-Entropy Loss per Sample (when y is binary ground truth)
CASE 
  WHEN ground_truth_y = 1 THEN -1.0 * LN(MAX(0.000001, predicted_h))
  ELSE -1.0 * LN(MAX(0.000001, 1.0 - predicted_h))
END

-- 5. Test Set Error Rate (%)
(SUM(CASE WHEN predicted_class != actual_class THEN 1 ELSE 0 END) / COUNT(record_id)) * 100.0

-- 6. L2 Weight Decay Penalty Term
lambda_param * SUM(POWER(weight_val, 2))
`;
  };

  const generateCsvDataset = () => {
    const csvHeader = [
      'Slide_ID',
      'Module_Category',
      'English_Title',
      'Khmer_Title',
      'Recommended_Chart_Type',
      'KPI_1_Label',
      'KPI_1_Value',
      'KPI_2_Label',
      'KPI_2_Value',
      'KPI_3_Label',
      'KPI_3_Value',
      'logit_z',
      'sigmoid_g_z',
      'tanh_g_z',
      'relu_g_z',
      'training_loss',
      'validation_loss',
      'test_accuracy_pct'
    ].join(',');

    const rows = slides.map((s, idx) => {
      const z = parseFloat((-5 + idx * 0.4).toFixed(2));
      const sig = parseFloat((1 / (1 + Math.exp(-z))).toFixed(4));
      const tnh = parseFloat(Math.tanh(z).toFixed(4));
      const rel = parseFloat(Math.max(0, z).toFixed(4));
      const trLoss = parseFloat((1.2 * Math.exp(-idx * 0.12) + 0.04).toFixed(4));
      const valLoss = parseFloat((1.25 * Math.exp(-idx * 0.1) + 0.07).toFixed(4));
      const acc = parseFloat((72 + (1 - Math.exp(-idx * 0.14)) * 26.2).toFixed(2));

      const esc = (str: string) => `"${(str || '').replace(/"/g, '""')}"`;

      return [
        s.slideNumber,
        esc(s.category),
        esc(s.englishTitle),
        esc(s.khmerTitle),
        esc(s.chartMetricsMath.chartSetup.chartType),
        esc(s.chartMetricsMath.scorecards[0]?.labelEn || ''),
        esc(s.chartMetricsMath.scorecards[0]?.value || ''),
        esc(s.chartMetricsMath.scorecards[1]?.labelEn || ''),
        esc(s.chartMetricsMath.scorecards[1]?.value || ''),
        esc(s.chartMetricsMath.scorecards[2]?.labelEn || ''),
        esc(s.chartMetricsMath.scorecards[2]?.value || ''),
        z,
        sig,
        tnh,
        rel,
        trLoss,
        valLoss,
        acc
      ].join(',');
    });

    return [csvHeader, ...rows].join('\n');
  };

  const getActiveContent = () => {
    if (format === 'markdown') return generateFullMarkdown();
    if (format === 'calculated_fields') return generateCalculatedFields();
    return generateCsvDataset();
  };

  const handleCopy = () => {
    const text = getActiveContent();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const text = getActiveContent();
    const filename =
      format === 'markdown'
        ? 'Looker_Studio_Neural_Networks_All_26_Slides_Blueprint.md'
        : format === 'calculated_fields'
        ? 'Looker_Studio_Calculated_Fields.sql'
        : 'Looker_Studio_Neural_Networks_Dataset.csv';
    const mime =
      format === 'csv_dataset' ? 'text/csv;charset=utf-8;' : 'text/markdown;charset=utf-8;';
    const blob = new Blob([text], { type: mime });
    triggerSafeBlobDownload(blob, filename);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden text-slate-100">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                Export Editable Slides with Exact Original Fonts (Kantumruy Pro & Inter)
              </h3>
              <p className="text-xs text-slate-400 font-khmer">
                ទាញយកស្លាយដែលរក្សាទម្រង់ដើម + អាចកែអក្សរបាន + រក្សា Font ដើម (Kantumruy Pro & Inter) ១០០%
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex flex-col gap-4 overflow-y-auto">
          {/* 1-Click GitHub & Vercel Full Source Code (.zip) Download Bar */}
          <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-emerald-950/60 border border-indigo-500/50 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300 shrink-0 mt-0.5">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>ដោនឡូតកូដទាំងអស់សម្រាប់ផុសចូល GitHub &amp; Vercel (Full Project Source Code)</span>
                  <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono">
                    READY FOR GITHUB &amp; VERCEL
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 font-khmer mt-1 leading-relaxed">
                  ចុចប៊ូតុងខាងស្តាំដើម្បីទាញយកកូដ App ទាំងអស់ជាឯកសារ <code className="text-indigo-300">.zip</code> រួចពន្លា (Extract) ហើយអាប់ឡូតចូលទៅក្នុង{' '}
                  <strong className="text-emerald-300">github.com/new</strong> និងភ្ជាប់ទៅ <strong className="text-sky-300">vercel.com/new</strong> បានភ្លាមៗ!
                </p>
              </div>
            </div>
            <button
              onClick={handleDownloadSourceZip}
              disabled={isDownloadingSource || isGeneratingPptx || isGeneratingHtml}
              className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-lg transition-all disabled:opacity-50"
            >
              {isDownloadingSource ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <FolderGit2 className="w-4 h-4" />
              )}
              <span className="font-khmer">ដោនឡូតកូដ GitHub (.zip)</span>
            </button>
          </div>

          {/* Font Installer Bar for Microsoft PowerPoint Desktop */}
          <div className="bg-gradient-to-r from-indigo-950/90 via-slate-900 to-amber-950/60 border border-indigo-500/40 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">
                <Type className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>ហេតុអ្វី PowerPoint ដូរ Font ពេលកែអក្សរ? (Why PowerPoint Changes Fonts)</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                    FIXED XML + FONT PACK
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 font-khmer mt-1 leading-relaxed">
                  ១. ឥឡូវនេះឯកសារ <code className="text-amber-300">.pptx</code> ត្រូវបានបញ្ចូលកូដ{' '}
                  <code className="text-sky-300">&lt;a:cs typeface=&quot;Kantumruy Pro&quot;/&gt;</code> សម្រាប់អក្សរខ្មែររួចរាល់។ ២. ប្រសិនបើកុំព្យូទ័រ (Mac/Windows) របស់អ្នកមិនទាន់មាន Font{' '}
                  <strong className="text-amber-300">Kantumruy Pro</strong> ឬ <strong className="text-sky-300">Inter</strong> ក្នុងម៉ាស៊ីនទេ សូមចុចទាញយក Font ដើមខាងស្តាំដៃទៅដំឡើង (Install) នោះ PowerPoint នឹងបង្ហាញ Font ដើម ១០០% ពេលកែអក្សរ!
                </p>
              </div>
            </div>
            <button
              onClick={handleDownloadFontsZip}
              disabled={isDownloadingFonts || isGeneratingPptx || isGeneratingHtml}
              className="px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-lg transition-all disabled:opacity-50"
            >
              {isDownloadingFonts ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Sparkles className="w-4 h-4" />
              )}
              <span className="font-khmer">ទាញយក Font ដើម (.zip)</span>
            </button>
          </div>

          {/* Direct Slide Deck Download Cards */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                <Presentation className="w-4 h-4 text-amber-400" />
                <span>
                  Choose Your Slide Format (ជ្រើសរើសទម្រង់ស្លាយ៖ អាចកែអក្សរបាន ឬ ចាក់សោ Font ១០០%)
                </span>
              </div>
              {renderProgress && (
                <span className="text-xs text-sky-400 font-mono flex items-center gap-1.5">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  {renderProgress}
                </span>
              )}
              {(pptxSuccess || pdfSuccess) && !renderProgress && (
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {pdfSuccess ? 'Original PDF (.pdf) Downloaded!' : 'PowerPoint (.pptx) Downloaded!'}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* 1. Editable PowerPoint (.pptx) with Khmer Complex Script XML Patch */}
              <button
                onClick={() => handleDownloadPptx('editable_pptx')}
                disabled={isGeneratingPptx || isGeneratingHtml || isDownloadingFonts}
                className="p-3.5 rounded-xl bg-gradient-to-br from-amber-600/25 to-orange-600/15 hover:from-amber-600/35 hover:to-orange-600/25 border border-amber-500/40 text-left transition-all flex flex-col justify-between group disabled:opacity-50"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-mono font-bold text-[10px]">
                      EDITABLE .PPTX
                    </span>
                    {isGeneratingPptx && pptxMode === 'editable_pptx' ? (
                      <Loader2 className="w-4 h-4 text-amber-300 animate-spin" />
                    ) : (
                      <Presentation className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  <div className="font-bold text-xs text-white">
                    1. Editable PowerPoint + Khmer Font XML (.pptx)
                  </div>
                  <div className="text-[11px] text-amber-200/90 font-khmer mt-1 leading-relaxed">
                    អាចចុចកែអក្សរខ្មែរ/អង់គ្លេសបានគ្រប់ប្រអប់ក្នុង PowerPoint + កំណត់ Font ដើម (Kantumruy Pro & Inter) ក្នុងកូដ XML
                  </div>
                </div>
                <div className="mt-3 text-[11px] font-semibold text-amber-300 flex items-center gap-1">
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Editable .pptx</span>
                </div>
              </button>

              {/* 2. 100% Font-Locked PowerPoint (.pptx) */}
              <button
                onClick={() => handleDownloadPptx('font_locked_pptx')}
                disabled={isGeneratingPptx || isGeneratingHtml || isDownloadingFonts}
                className="p-3.5 rounded-xl bg-gradient-to-br from-purple-600/25 to-indigo-600/15 hover:from-purple-600/35 hover:to-indigo-600/25 border border-purple-500/40 text-left transition-all flex flex-col justify-between group disabled:opacity-50"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-purple-400 text-slate-950 font-mono font-bold text-[10px]">
                      EXACT FONT .PPTX
                    </span>
                    {isGeneratingPptx && pptxMode === 'font_locked_pptx' ? (
                      <Loader2 className="w-4 h-4 text-purple-300 animate-spin" />
                    ) : (
                      <Layers className="w-4 h-4 text-purple-300 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  <div className="font-bold text-xs text-white">
                    2. 100% Exact-Font Locked Slides (.pptx)
                  </div>
                  <div className="text-[11px] text-purple-200/90 font-khmer mt-1 leading-relaxed">
                    រក្សា Font ដើម (Kantumruy Pro & Inter) ១០០% ដូចក្នុងកម្មវិធីបេះបិទ ទោះកុំព្យូទ័រមិនទាន់ដំឡើង Font ក៏ដោយ
                  </div>
                </div>
                <div className="mt-3 text-[11px] font-semibold text-purple-300 flex items-center gap-1">
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Exact-Font .pptx</span>
                </div>
              </button>

              {/* 3. Editable + Exact Font Web Slide Deck (.html) */}
              <button
                onClick={handleDownloadHtmlSlides}
                disabled={isGeneratingPptx || isGeneratingHtml || isDownloadingFonts}
                className="p-3.5 rounded-xl bg-gradient-to-br from-sky-600/25 to-indigo-600/15 hover:from-sky-600/35 hover:to-indigo-600/25 border border-sky-500/40 text-left transition-all flex flex-col justify-between group disabled:opacity-50"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-sky-400 text-slate-950 font-mono font-bold text-[10px]">
                      EDITABLE + EXACT FONT
                    </span>
                    {isGeneratingHtml ? (
                      <Loader2 className="w-4 h-4 text-sky-300 animate-spin" />
                    ) : (
                      <Globe className="w-4 h-4 text-sky-300 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  <div className="font-bold text-xs text-white">
                    3. Editable + Exact Font Web Slides (.html)
                  </div>
                  <div className="text-[11px] text-sky-200/90 font-khmer mt-1 leading-relaxed">
                    ទាំងអាចចុចកែអក្សរបានផ្ទាល់ + ទាំងរក្សា Font ដើម Kantumruy Pro, Inter និងរូបមន្ត KaTeX ១០០% ដោយមិនបាច់ដំឡើង Font!
                  </div>
                </div>
                <div className="mt-3 text-[11px] font-semibold text-sky-300 flex items-center gap-1">
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Editable .html</span>
                </div>
              </button>

              {/* 4. Original PDF Slide Deck (.pdf) */}
              <button
                onClick={handleDownloadOriginalPdf}
                disabled={isDownloadingPdf || isGeneratingPptx || isGeneratingHtml || isDownloadingFonts}
                className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-600/25 to-teal-600/15 hover:from-emerald-600/35 hover:to-teal-600/25 border border-emerald-500/40 text-left transition-all flex flex-col justify-between group disabled:opacity-50"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-emerald-400 text-slate-950 font-mono font-bold text-[10px]">
                      ORIGINAL .PDF
                    </span>
                    {isDownloadingPdf ? (
                      <Loader2 className="w-4 h-4 text-emerald-300 animate-spin" />
                    ) : (
                      <FileDown className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  <div className="font-bold text-xs text-white">
                    4. Original Lecture Slides (.pdf)
                  </div>
                  <div className="text-[11px] text-emerald-200/90 font-khmer mt-1 leading-relaxed">
                    ទាញយកឯកសារស្លាយដើម PDF ១០០% ទាំង ២៦ ទំព័រ (02_Basics_of_Neural_Networks.pdf)
                  </div>
                </div>
                <div className="mt-3 text-[11px] font-semibold text-emerald-300 flex items-center gap-1">
                  <Download className="w-3.5 h-3.5" />
                  <span>{isDownloadingPdf ? 'Downloading .pdf...' : 'Download Original .pdf'}</span>
                </div>
              </button>
            </div>
          </div>

          {/* Looker Studio Blueprint & Data Source Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFormat('markdown')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                format === 'markdown'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>1. Full 26-Page Markdown Blueprint (.md)</span>
            </button>
            <button
              onClick={() => setFormat('csv_dataset')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                format === 'csv_dataset'
                  ? 'bg-sky-600 text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>2. Looker Studio CSV Data Source (.csv)</span>
            </button>
            <button
              onClick={() => setFormat('calculated_fields')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                format === 'calculated_fields'
                  ? 'bg-amber-600 text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>3. Calculated Fields SQL (.sql)</span>
            </button>
          </div>

          {/* Preview Box */}
          <div className="relative bg-slate-950 p-4 rounded-xl border border-slate-800">
            <pre className="text-xs font-mono text-slate-300 max-h-56 overflow-y-auto whitespace-pre-wrap leading-relaxed select-all">
              {getActiveContent()}
            </pre>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              High-resolution PDF slide rendering ensures every original diagram, formula, and layout from the source lecture is 100% preserved inside your exported PowerPoint (.pptx) and HTML slides.
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/60 flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs text-slate-400 font-mono">
            {slides.length} Pages • Original Slide Format Preserved 100%
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Preview Text'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>
                Download {format === 'markdown' ? '.md' : format === 'csv_dataset' ? '.csv' : '.sql'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
