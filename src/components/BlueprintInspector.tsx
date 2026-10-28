import React, { useState } from 'react';
import { Copy, Check, FileCode, Layers, BookOpen, Share2, Download } from 'lucide-react';
import { SlideBlueprint, BilingualMode } from '../types';
import { MathView } from '../utils/mathRenderer';

interface BlueprintInspectorProps {
  slide: SlideBlueprint;
  allSlides: SlideBlueprint[];
  langMode: BilingualMode;
}

export const BlueprintInspector: React.FC<BlueprintInspectorProps> = ({ slide, allSlides, langMode }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  // Generate exact Markdown for the current slide matching user's prompt structure
  const generateSlideMarkdown = (s: SlideBlueprint) => {
    return `### [LOOKER STUDIO PAGE ${s.slideNumber}: CORRESPONDING TO SLIDE ${s.slideNumber}]

#### 1. Page Identity & Theme (អត្តសញ្ញាណទំព័រ និងពណ៌)
- **Bilingual Page Title:** ${s.pageIdentity.bilingualPageTitle}
- **Canvas Setup:** ${s.pageIdentity.canvasSetup}
  - Primary Element: \`${s.pageIdentity.hexPrimary}\`
  - Secondary Element: \`${s.pageIdentity.hexSecondary}\`
  - Background Canvas: \`${s.pageIdentity.hexBackground}\`
  - Surface Card: \`${s.pageIdentity.hexSurface}\`
  - Accent / Action: \`${s.pageIdentity.hexAccent}\`
  - Design Rationale (EN): ${s.pageIdentity.themeRationaleEn}
  - Design Rationale (KH): ${s.pageIdentity.themeRationaleKh}

#### 2. Visual Wireframe & Layout Grid (ប្លង់រៀបចំសមាសភាគលើទំព័រ)
- **Header Section:**
  - EN: ${s.visualWireframe.headerSection.en}
  - KH: ${s.visualWireframe.headerSection.kh}
- **Main Workspace Canvas:**
  - EN: ${s.visualWireframe.mainWorkspaceCanvas.en}
  - KH: ${s.visualWireframe.mainWorkspaceCanvas.kh}
- **Grid Specifications (16:9):**
  - Aspect Ratio: ${s.visualWireframe.gridSpecs.aspectRatio} (${s.visualWireframe.gridSpecs.resolution})
  - Left Panel Width: ${s.visualWireframe.gridSpecs.leftPanelWidth} | Right Panel Width: ${s.visualWireframe.gridSpecs.rightPanelWidth}
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
  - Setup Guide (EN): ${s.chartMetricsMath.chartSetup.chartDescriptionEn}
  - Setup Guide (KH): ${s.chartMetricsMath.chartSetup.chartDescriptionKh}
${s.chartMetricsMath.mathematicalFormulas && s.chartMetricsMath.mathematicalFormulas.length > 0 ? `
- **Mathematical Formulas (រូបមន្តគណិតវិទ្យា):**
  - Primary Equation: \`\`\`latex
    ${s.chartMetricsMath.mathematicalFormulas[0].latex}
    \`\`\`
  ${s.chartMetricsMath.mathematicalFormulas[0].latexSecondary ? `- Secondary Equation: \`\`\`latex\n    ${s.chartMetricsMath.mathematicalFormulas[0].latexSecondary}\n    \`\`\`` : ''}
  - Formula Explanation (EN): ${s.chartMetricsMath.mathematicalFormulas[0].explanationEn}
  - Formula Explanation (KH): ${s.chartMetricsMath.mathematicalFormulas[0].explanationKh}
  - Variable & Symbol Dictionary:
${s.chartMetricsMath.mathematicalFormulas[0].variables.map((v) => `    * **\`${v.symbol}\`** [${v.role}]: ${v.meaningEn} — ${v.meaningKh}`).join('\n')}
` : ''}

#### 4. Page Controls & Interactive Filters (ប៊ូតុងបញ្ជា និងតម្រងទិន្នន័យ)
${s.pageControls.map((c, i) => `  ${i + 1}. **[${c.controlType}] ${c.controlLabelEn} / ${c.controlLabelKh}:** Field: \`${c.fieldName}\`, Default: \`${c.defaultValue}\`${c.options ? `, Options: [${c.options.join(', ')}]` : ''}\n     - Purpose: ${c.purposeEn} (${c.purposeKh})`).join('\n')}

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
  - Case Study Title: ${s.expandedBilingualContent.practicalApplication.titleEn} / ${s.expandedBilingualContent.practicalApplication.titleKh}
  - Real-World Scenario (EN): ${s.expandedBilingualContent.practicalApplication.scenarioEn}
  - Real-World Scenario (KH): ${s.expandedBilingualContent.practicalApplication.scenarioKh}
  - Business/Tech Impact (EN): ${s.expandedBilingualContent.practicalApplication.businessImpactEn}
  - Business/Tech Impact (KH): ${s.expandedBilingualContent.practicalApplication.businessImpactKh}
---`;
  };

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const copyAllPagesMarkdown = () => {
    const fullDoc = allSlides.map((s) => generateSlideMarkdown(s)).join('\n\n');
    copyToClipboard(fullDoc, 'all_pages');
  };

  return (
    <div className="flex flex-col gap-6 text-slate-100">
      {/* Top Action Bar for Looker Studio Developers */}
      <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 flex flex-wrap items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
            <FileCode className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">
              Looker Studio Page Blueprint Specification (Page {slide.slideNumber})
            </h3>
            <p className="text-xs text-slate-400 font-khmer">
              ប្លង់រចនា Looker Studio ស្តង់ដារពេញលេញទាំង ៥ ផ្នែកសម្រាប់ស្លាយទី {slide.slideNumber}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => copyToClipboard(generateSlideMarkdown(slide), 'current_page')}
            className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow transition-colors"
          >
            {copiedSection === 'current_page' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'current_page' ? 'Copied Page Markdown!' : 'Copy Page Markdown'}</span>
          </button>

          <button
            onClick={copyAllPagesMarkdown}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
          >
            {copiedSection === 'all_pages' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Layers className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'all_pages' ? 'Copied All 26 Slides!' : 'Copy All 26 Slides Markdown'}</span>
          </button>
        </div>
      </div>

      {/* Structured 5-Section Blueprint Inspector View */}
      <div className="flex flex-col gap-6">
        {/* SECTION 1 */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-sm mb-3">
            <span className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center text-xs">1</span>
            <h4>Page Identity & Theme (អត្តសញ្ញាណទំព័រ និងពណ៌)</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2">
              <div>
                <span className="text-slate-400 font-medium">Bilingual Page Title:</span>
                <div className="text-slate-200 font-bold text-sm mt-0.5">{slide.pageIdentity.bilingualPageTitle}</div>
                <div className="text-amber-300 font-khmer mt-0.5">{slide.pageIdentity.bilingualPageTitleKh}</div>
              </div>
              <div>
                <span className="text-slate-400 font-medium">Canvas Setup & Resolution:</span>
                <div className="text-slate-200 font-mono mt-0.5">{slide.pageIdentity.canvasSetup}</div>
                <div className="text-slate-400 font-khmer text-[11px]">{slide.pageIdentity.canvasSetupKh}</div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-slate-400 font-medium">Palette Hex Codes:</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center gap-2">
                  <span className="w-4 h-4 rounded" style={{ backgroundColor: slide.pageIdentity.hexPrimary }}></span>
                  <div>
                    <div className="text-[10px] text-slate-500">Primary</div>
                    <div className="font-mono font-bold text-slate-200">{slide.pageIdentity.hexPrimary}</div>
                  </div>
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center gap-2">
                  <span className="w-4 h-4 rounded" style={{ backgroundColor: slide.pageIdentity.hexSecondary }}></span>
                  <div>
                    <div className="text-[10px] text-slate-500">Secondary</div>
                    <div className="font-mono font-bold text-slate-200">{slide.pageIdentity.hexSecondary}</div>
                  </div>
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center gap-2">
                  <span className="w-4 h-4 rounded" style={{ backgroundColor: slide.pageIdentity.hexAccent }}></span>
                  <div>
                    <div className="text-[10px] text-slate-500">Accent</div>
                    <div className="font-mono font-bold text-slate-200">{slide.pageIdentity.hexAccent}</div>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                {slide.pageIdentity.themeRationaleEn}
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-sm mb-3">
            <span className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center text-xs">2</span>
            <h4>Visual Wireframe & Layout Grid (ប្លង់រៀបចំសមាសភាគលើទំព័រ)</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 font-semibold uppercase text-[10px]">Header Section:</span>
                <p className="text-slate-200 mt-1">{slide.visualWireframe.headerSection.en}</p>
                <p className="text-amber-200 font-khmer text-[11px] mt-1">{slide.visualWireframe.headerSection.kh}</p>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 font-semibold uppercase text-[10px]">Main Workspace Canvas (16:9 Grid):</span>
                <p className="text-slate-200 mt-1">{slide.visualWireframe.mainWorkspaceCanvas.en}</p>
                <p className="text-amber-200 font-khmer text-[11px] mt-1">{slide.visualWireframe.mainWorkspaceCanvas.kh}</p>
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 font-semibold uppercase text-[10px]">Component Placement Coordinates:</span>
              <div className="space-y-1.5 mt-2">
                {slide.visualWireframe.componentPositions.map((c) => (
                  <div key={c.id} className="p-2 rounded bg-slate-900 border border-slate-800/80 flex items-center justify-between text-[11px]">
                    <div>
                      <span className="font-bold text-sky-300">[{c.type}]</span> {c.nameEn}
                      <span className="text-slate-500 font-khmer ml-1">({c.nameKh})</span>
                    </div>
                    <code className="text-[10px] text-amber-300 font-mono bg-slate-950 px-1.5 py-0.5 rounded">
                      {c.coordinates}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-sm mb-3">
            <span className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center text-xs">3</span>
            <h4>Chart, Metrics & Math Mapping (ការរៀបចំក្រាហ្វ ទិន្នន័យ និងរូបមន្ត)</h4>
          </div>

          <div className="space-y-4 text-xs">
            {/* Scorecards list */}
            <div>
              <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                Metric Scorecards (សូចនាករគន្លឹះ):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                {slide.chartMetricsMath.scorecards.map((sc, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-slate-400 text-[11px] font-medium">{sc.labelEn}</div>
                    <div className="text-amber-300 text-[11px] font-khmer">{sc.labelKh}</div>
                    <div className="text-lg font-extrabold text-white font-mono mt-1">{sc.value}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{sc.tooltipEn}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Setup */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                Looker Studio Chart Configuration:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                <div>
                  <div className="text-slate-400 text-[11px]">Recommended Chart Type:</div>
                  <div className="text-sky-300 font-bold font-mono">{slide.chartMetricsMath.chartSetup.chartType}</div>
                  <div className="text-amber-200 font-khmer text-[11px]">{slide.chartMetricsMath.chartSetup.chartTypeKh}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[11px]">Dimensions:</div>
                  <div className="text-slate-200 font-mono text-[11px]">{slide.chartMetricsMath.chartSetup.dimensions.join(', ')}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[11px]">Metrics:</div>
                  <div className="text-emerald-400 font-mono text-[11px]">{slide.chartMetricsMath.chartSetup.metrics.join(', ')}</div>
                </div>
              </div>
            </div>

            {/* Math Formula if present */}
            {slide.chartMetricsMath.mathematicalFormulas && slide.chartMetricsMath.mathematicalFormulas.length > 0 && (
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                  Mathematical Formulas & Variables (រូបមន្តគណិតវិទ្យា):
                </span>
                <div className="my-2 p-2 bg-slate-900 rounded-lg text-center text-sm md:text-base text-sky-300">
                  <MathView math={slide.chartMetricsMath.mathematicalFormulas[0].latex} displayMode={true} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                  {slide.chartMetricsMath.mathematicalFormulas[0].variables.map((v, i) => (
                    <div key={i} className="p-2 rounded bg-slate-900/60 border border-slate-800 text-[11px] flex items-start gap-2">
                      <span className="text-sky-300 font-bold font-mono shrink-0">
                        <MathView math={v.symbol} />:
                      </span>
                      <div>
                        <div className="text-slate-200">{v.meaningEn}</div>
                        <div className="text-amber-300 font-khmer text-[10px]">{v.meaningKh}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SECTION 4 */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-sm mb-3">
            <span className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center text-xs">4</span>
            <h4>Page Controls & Interactive Filters (ប៊ូតុងបញ្ជា និងតម្រងទិន្នន័យ)</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {slide.pageControls.map((c, i) => (
              <div key={i} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono font-bold text-[11px]">
                    {c.controlType}
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">Field: {c.fieldName}</span>
                </div>
                <div className="font-bold text-white text-xs mt-1">{c.controlLabelEn}</div>
                <div className="font-khmer text-amber-300 text-xs mt-0.5">{c.controlLabelKh}</div>
                <div className="text-[11px] text-slate-400 mt-2">
                  <span className="font-semibold text-slate-300">Default Value:</span> {c.defaultValue}
                </div>
                <p className="text-[11px] text-slate-500 mt-1 font-khmer">
                  {c.purposeEn} ({c.purposeKh})
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5 */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-sm mb-3">
            <span className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center text-xs">5</span>
            <h4>Expanded Bilingual Content & In-Depth Explanation (អត្ថបទពន្យល់លម្អិតបន្ថែមជាពីរភាសា)</h4>
          </div>

          <div className="space-y-4 text-xs">
            {/* On Screen Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                  On-Screen Text (English):
                </span>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-slate-300">
                  {slide.expandedBilingualContent.onScreenText.en.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                <span className="text-amber-400 font-semibold uppercase text-[10px] tracking-wider font-khmer">
                  អត្ថបទបង្ហាញលើអេក្រង់ (ភាសាខ្មែរ)៖
                </span>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-amber-100 font-khmer">
                  {slide.expandedBilingualContent.onScreenText.kh.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Deep-dive Explanation */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                Deep-Dive Lesson Explanation (ការពន្យល់ពង្រីកសេចក្តីលម្អិត):
              </span>
              <p className="text-slate-200 leading-relaxed">
                {slide.expandedBilingualContent.deepDiveExplanation.en}
              </p>
              <p className="text-amber-200 font-khmer leading-relaxed border-t border-slate-800/80 pt-2">
                {slide.expandedBilingualContent.deepDiveExplanation.kh}
              </p>
            </div>

            {/* Practical Application */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-emerald-400 font-semibold uppercase text-[10px] tracking-wider">
                Practical Application / Real-World Scenario (ឧទាហរណ៍ជាក់ស្តែង):
              </span>
              <div className="font-bold text-white text-xs">
                {slide.expandedBilingualContent.practicalApplication.titleEn} / {slide.expandedBilingualContent.practicalApplication.titleKh}
              </div>
              <p className="text-slate-300 leading-relaxed">
                {slide.expandedBilingualContent.practicalApplication.scenarioEn}
              </p>
              <p className="text-amber-200 font-khmer leading-relaxed">
                {slide.expandedBilingualContent.practicalApplication.scenarioKh}
              </p>
              <div className="text-[11px] text-emerald-300 border-t border-slate-800/80 pt-1.5 font-medium">
                Impact: {slide.expandedBilingualContent.practicalApplication.businessImpactEn}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
