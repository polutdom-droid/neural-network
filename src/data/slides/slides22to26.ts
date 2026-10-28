import { SlideBlueprint } from '../../types';

export const slides22to26: SlideBlueprint[] = [
  // SLIDE 22
  {
    id: 22,
    slideNumber: 22,
    category: 'Regularization',
    englishTitle: 'Regularization: L2 Regularization (Ridge / Weight Decay) & L1 Regularization (Lasso)',
    khmerTitle: 'បច្ចេកទេស Regularization៖ L2 (Weight Decay / Ridge) និង L1 (Lasso Sparsity)',
    pageIdentity: {
      bilingualPageTitle: 'Slide 22: Regularization — L2 & L1 / បច្ចេកទេស L2 និង L1 Regularization',
      bilingualPageTitleKh: 'ការផាកពិន័យទម្ងន់ធំៗតាម L2 Regularization និង L1 Regularization',
      canvasSetup: 'Indigo Precision & Golden Lambda Penalty Theme (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ស្វាយ Indigo និងពណ៌មាសនៃមេគុណផាកពិន័យ Lambda (16:9)',
      hexPrimary: '#4F46E5', // Indigo
      hexSecondary: '#D97706', // Amber/Gold
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#10B981', // Emerald
      themeRationaleEn: 'Indigo represents rigorous mathematical modeling while gold highlights the regularization penalty parameter lambda.',
      themeRationaleKh: 'ពណ៌ស្វាយតំណាងឱ្យភាពម៉ត់ចត់នៃគណិតវិទ្យា រីឯពណ៌មាសបង្ហាញពីមេគុណផាកពិន័យទម្ងន់ Lambda។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and penalty equation formulas for L2 (Loss + λ Σ θ_j²) and L1 (Loss + λ Σ |θ_j|).',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងរូបមន្តផាកពិន័យ L2 (Loss + λ Σ θ_j²) និង L1 (Loss + λ Σ |θ_j|)។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Hypothesis comparison: h1(x) quadratic vs h2(x) 4th-degree polynomial. Mathematical proof that adding 1000θ3² + 1000θ4² forces θ3 and θ4 close to zero, simplifying the hypothesis. Right 55%: Interactive Lambda (λ) Regularization Playground where adjusting λ smooths the polynomial curve and shrinks weights.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ ការប្រៀបធៀបសម្មតិកម្ម៖ h1(x) ដឺក្រេទីពីរ ទល់នឹង h2(x) ដឺក្រេទីបួន។ ការបញ្ជាក់គណិតវិទ្យាថាការបន្ថែម 1000θ3² + 1000θ4² បង្ខំឱ្យ θ3 និង θ4 រួមតូចជិត ០ ធ្វើឱ្យសម្មតិកម្មសាមញ្ញឡើងវិញ។ ផ្នែកខាងស្តាំ ៥៥%៖ ឧបករណ៍ពិសោធន៍ Lambda (λ) អន្តរកម្ម ដែលការកែប្រែ λ ជួយពន្លូនខ្សែកោង និងបង្រួមទំហំទម្ងន់។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_22', nameEn: 'Header & Penalty Formulas', nameKh: 'ក្បាលទំព័រ និងរូបមន្តផាកពិន័យ', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_22', nameEn: 'Regularization Metrics Row', nameKh: 'ជួរ KPI បច្ចេកទេស Regularization', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'exp_22', nameEn: 'Hypothesis Shrinkage Theory Card', nameKh: 'កាតទ្រឹស្តីបង្រួមសម្មតិកម្មតាមគណិតវិទ្យា', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'plt_22', nameEn: 'Interactive Weight Decay Playground', nameKh: 'ក្រាហ្វអន្តរកម្មកែប្រែ Lambda និង Weight Decay', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'L2 Norm Effect (Weight Decay)', labelKh: 'ប្រសិទ្ធភាព L2 (Weight Decay)', value: 'Shrinks Weights Smoothly', tooltipEn: 'Pushes all weights toward small values near zero', tooltipKh: 'បង្រួមទម្ងន់ទាំងអស់ឱ្យនៅតូចរលូនជិត ០' },
        { labelEn: 'L1 Norm Effect (Lasso Sparsity)', labelKh: 'ប្រសិទ្ធភាព L1 (Lasso Sparsity)', value: 'Forces Weights to Exact 0', tooltipEn: 'Acts as built-in automatic feature selection', tooltipKh: 'បង្ខំទម្ងន់ដែលមិនសំខាន់ឱ្យស្មើ ០ ដាច់តែម្តង (Feature Selection)' },
        { labelEn: 'Occam\'s Razor Compliance', labelKh: 'គោលការណ៍ Occam\'s Razor', value: 'Simpler Hypothesis / គំរូសាមញ្ញ', tooltipEn: 'Guarantees lower model variance and high test generalization', tooltipKh: 'ធានានូវភាពទូទៅកម្មខ្ពស់លើទិន្នន័យជាក់ស្តែង' }
      ],
      chartSetup: {
        chartType: 'Dual Bar Chart & Regularization Path Curve',
        chartTypeKh: 'ក្រាហ្វរបារគូ និងខ្សែកោងផ្លូវដើរនៃ Regularization',
        dimensions: ['Weight_Index (ទម្ងន់ w1 ដល់ w10)'],
        metrics: ['Unregularized_Weight_Magnitude', 'L2_Regularized_Magnitude', 'L1_Regularized_Magnitude'],
        sortOrder: 'Weight_Index ASCENDING',
        filterDefault: 'Lambda = 0.1',
        chartDescriptionEn: 'Contrasts unconstrained wild weights against smooth L2 decay and sparse L1 zero-collapsed coefficients.',
        chartDescriptionKh: 'ប្រៀបធៀបទម្ងន់ដែលគ្មានកំហិត ធៀបនឹងទម្ងន់ដែលត្រូវបង្រួមដោយ L2 និងទម្ងន់ដែលត្រូវកាត់ចោលស្មើ ០ ដោយ L1។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'L2 and L1 Regularized Cost Functions',
          formulaNameKh: 'អនុគមន៍ចំណាយ Regularization L2 និង L1',
          latex: 'J_{\\text{L2}}(\\Theta) = \\text{Loss} + \\lambda \\sum_{j=1}^{n} \\theta_j^2, \\quad J_{\\text{L1}}(\\Theta) = \\text{Loss} + \\lambda \\sum_{j=1}^{n} |\\theta_j|',
          explanationEn: 'The objective function balances empirical loss against parameter magnitude. The hyperparameter λ controls the trade-off: large λ heavily penalizes complex models, enforcing small parameters.',
          explanationKh: 'អនុគមន៍ចំណាយបង្កើតតុល្យភាពរវាងកំហុសជាក់ស្តែង និងទំហំប៉ារ៉ាម៉ែត្រ។ ប៉ារ៉ាម៉ែត្រកំពូល λ កំណត់កម្រិតផាកពិន័យ៖ λ កាន់តែធំ ផាកពិន័យទម្ងន់កាន់តែខ្លាំង ធ្វើឱ្យគំរូកាន់តែសាមញ្ញ។',
          variables: [
            { symbol: '\\text{Loss}', meaningEn: 'Original cross-entropy or mean squared error', meaningKh: 'កំហុសដើម (Cross-entropy ឬ MSE)', role: 'Base Objective' },
            { symbol: '\\lambda', meaningEn: 'Regularization strength hyperparameter (lambda)', meaningKh: 'ប៉ារ៉ាម៉ែត្រកំពូលកំណត់កម្លាំង Regularization (Lambda)', role: 'Penalty Multiplier' },
            { symbol: '\\sum \\theta_j^2', meaningEn: 'L2 norm penalty (squared Euclidean norm)', meaningKh: 'ផលបូកការេនៃទម្ងន់ (L2 Norm)', role: 'Smooth Shrinkage' },
            { symbol: '\\sum |\\theta_j|', meaningEn: 'L1 norm penalty (Manhattan norm enforcing exact zeros)', meaningKh: 'ផលបូកតម្លៃដាច់ខាតនៃទម្ងន់ (L1 Norm)', role: 'Sparse Selection' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Metric Slider',
        fieldName: 'Lambda_Strength_Slider',
        controlLabelEn: 'Adjust Regularization Strength (λ)',
        controlLabelKh: 'កែសម្រួលកម្លាំង Regularization (λ)',
        defaultValue: '0.10',
        min: 0.0,
        max: 2.0,
        step: 0.05,
        purposeEn: 'Watch how increasing λ smooths out wild polynomial curves into well-behaved generalizing functions.',
        purposeKh: 'មើលពីរបៀបដែលការបង្កើន λ ជួយពន្លូនខ្សែកោងរង្គោះរង្គើ ឱ្យក្លាយជាអនុគមន៍រលូនត្រឹមត្រូវ។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Regularization (L2 & L1):',
          'Compare two hypotheses:',
          'h1(x) = θ0 + θ1*x + θ2*x²',
          'h2(x) = θ0 + θ1*x + θ2*x² + θ3*x³ + θ4*x⁴',
          'We can penalize and make θ3 and θ4 really small by augmenting the loss:',
          'Loss ⇒ Loss + 1000*θ3² + 1000*θ4²',
          'Small parameter values lead to simpler hypotheses, making the model far less prone to overfitting.',
          'General Cost Function:',
          'Loss + λ Σ(j=1..n) θ_j² (L2 Regularization / Weight Decay)',
          'Loss + λ Σ(j=1..n) |θ_j| (L1 Regularization / Lasso)'
        ],
        kh: [
          'បច្ចេកទេស Regularization (L2 និង L1)៖',
          'ប្រៀបធៀបសម្មតិកម្មពីរ៖',
          'h1(x) = θ0 + θ1*x + θ2*x²',
          'h2(x) = θ0 + θ1*x + θ2*x² + θ3*x³ + θ4*x⁴',
          'យើងអាចផាកពិន័យ និងធ្វើឱ្យ θ3 និង θ4 ក្លាយជាតូចបំផុត ដោយបន្ថែមលើ Loss៖',
          'Loss ⇒ Loss + 1000*θ3² + 1000*θ4²',
          'តម្លៃប៉ារ៉ាម៉ែត្រតូចៗ នាំឱ្យសម្មតិកម្មកាន់តែសាមញ្ញ និងកាត់បន្ថយបញ្ហា Overfitting បានយ៉ាងច្រើន។',
          'អនុគមន៍ចំណាយទូទៅ៖',
          'Loss + λ Σ(j=1..n) θ_j² (L2 Regularization / Weight Decay)',
          'Loss + λ Σ(j=1..n) |θ_j| (L1 Regularization / Lasso)'
        ]
      },
      deepDiveExplanation: {
        en: 'Occam\'s Razor dictates that given two explanations that account for the data equally well, the simpler one is usually preferred. High-degree polynomials require enormous coefficients (e.g., θ = +8,500 and -8,450) that balance precariously to fit individual noise points. L2 regularization acts as a heavy spring attached to every parameter, dragging it toward zero during every gradient descent step: θ := θ(1 - αλ/m) - α(grad). This mathematical weight decay ensures that only features with overwhelming statistical evidence retain non-zero influence.',
        kh: 'គោលការណ៍ Occam\'s Razor ចែងថា ប្រសិនបើមានការពន្យល់ពីរដែលអាចបកស្រាយទិន្នន័យបានល្អដូចគ្នា នោះការពន្យល់ដែលសាមញ្ញជាងគេ គឺជាជម្រើសដ៏ត្រឹមត្រូវបំផុត។ ពហុធាដឺក្រេខ្ពស់ទាមទារមេគុណដ៏ធំសម្បើម (ដូចជា θ = +៨,៥០០ និង -៨,៤៥០) ដើម្បីកាត់តាមសំឡេងរំខាននៃទិន្នន័យ។ L2 Regularization ដើរតួដូចជាខ្សែរឺស័រដ៏រឹងមាំដែលទាញទម្ងន់ទាំងអស់ឱ្យខិតទៅជិត ០ ក្នុងគ្រប់ជំហាន Gradient Descent៖ θ := θ(1 - αλ/m) - α(grad)។ ដំណើរការ Weight Decay នេះធានាថាមានតែលក្ខណៈណាដែលមានភស្តុតាងរឹងមាំប៉ុណ្ណោះ ទើបអាចរក្សាឥទ្ធិពលបាន។'
      },
      practicalApplication: {
        titleEn: 'Genomic Disease Marker Association (GWAS)',
        titleKh: 'ការវិភាគហ្សែនស្វែងរកសញ្ញាសម្គាល់ជំងឺក្នុងវិស័យវេជ្ជសាស្ត្រ (GWAS)',
        scenarioEn: 'A bioinformatics team analyzes 500,000 Single Nucleotide Polymorphisms (SNPs) across 2,000 patients using L1 Lasso regularization.',
        scenarioKh: 'ក្រុមស្រាវជ្រាវជីវព័ត៌មានវិទ្យាវិភាគបំរែបំរួលហ្សែន ៥០០,០០០ លើអ្នកជំងឺ ២,០០០ នាក់ ដោយប្រើ L1 Lasso Regularization។',
        businessImpactEn: 'Shrinks 499,980 irrelevant genetic variations to absolute zero, isolating the 20 causal biomarkers responsible for diabetes.',
        businessImpactKh: 'កាត់ចោលហ្សែនដែលមិនពាក់ព័ន្ធចំនួន ៤៩៩,៩៨០ ឱ្យស្មើ ០ ដោយឡែកនៅសល់ហ្សែនគោលដៅចំនួន ២០ ដែលបង្កជំងឺទឹកនោមផ្អែមពិតប្រាកដ។'
      }
    },
    interactiveType: 'l1_l2_regularization'
  },

  // SLIDE 23
  {
    id: 23,
    slideNumber: 23,
    category: 'Regularization',
    englishTitle: 'Regularization: Dropout Technique & Ensemble Representation',
    khmerTitle: 'បច្ចេកទេស Regularization៖ Dropout (ការកាត់ផ្តាច់ណឺរ៉ូន និងការប្រមូលផ្តុំគំរូ Ensemble)',
    pageIdentity: {
      bilingualPageTitle: 'Slide 23: Regularization — Dropout / បច្ចេកទេស Dropout',
      bilingualPageTitleKh: 'បច្ចេកទេស Dropout៖ ការកាត់ផ្តាច់ណឺរ៉ូនចៃដន្យ និងការទប់ស្កាត់ Co-Adaptation',
      canvasSetup: 'Cyan Glow & Deactivated Red Crosses (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ខៀវពន្លឺ និងសញ្ញាខ្វែងក្រហមកាត់ផ្តាច់ណឺរ៉ូន (16:9)',
      hexPrimary: '#06B6D4', // Cyan
      hexSecondary: '#EF4444', // Red (Dropped Neurons)
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#10B981',
      themeRationaleEn: 'Cyan nodes represent active neurons while sharp red crosses illustrate stochastic dropout deactivation during the forward pass.',
      themeRationaleKh: 'ថ្នាំងពណ៌ខៀវតំណាងឱ្យណឺរ៉ូនដែលនៅដំណើរការ រីឯសញ្ញាខ្វែងក្រហមបង្ហាញពីណឺរ៉ូនដែលត្រូវបានកាត់ផ្តាច់ដោយចៃដន្យ។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and dropout probability pill p = 0.5.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងស្លាកអត្រាប្រូបាប៊ីលីតេកាត់ផ្តាច់ p = 0.5។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Analysis of how Dropout breaks co-adaptation, forces distributed redundant representations, and implicitly trains an ensemble of 2^N sub-networks. Right 55%: Interactive Live Dropout Simulator with probability slider p (0.0 to 0.8) and animated random deactivation pulses.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ ការវិភាគពីរបៀបដែល Dropout បំបែកការពឹងផ្អែកគ្នា (Co-adaptation) បង្ខំឱ្យបណ្តាញបង្កើតតំណាងទិន្នន័យចម្រុះ និងហ្វឹកហាត់គំរូ Ensemble ចំនួន 2^N ដោយស្វ័យប្រវត្តិ។ ផ្នែកខាងស្តាំ ៥៥%៖ ឧបករណ៍ពិសោធន៍ Dropout អន្តរកម្ម ជាមួយរបារកែប្រែ p (0.0 ដល់ 0.8) និងចលនាកាត់ផ្តាច់ណឺរ៉ូនតាមពេលវេលាជាក់ស្តែង។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_23', nameEn: 'Header & Dropout Probability Pill', nameKh: 'ក្បាលទំព័រ និងស្លាកប្រូបាប៊ីលីតេ Dropout', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_23', nameEn: 'Dropout Architecture Metrics', nameKh: 'ផ្ទាំងពិន្ទុស្ថាបត្យកម្ម Dropout', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'ens_23', nameEn: 'Ensemble & Co-Adaptation Theory', nameKh: 'ទ្រឹស្តី Ensemble និងការទប់ស្កាត់ Co-Adaptation', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'sim_23', nameEn: 'Interactive Live Dropout Network Graph', nameKh: 'ដ្យាក្រាមបណ្តាញកាត់ផ្តាច់ណឺរ៉ូន Dropout អន្តរកម្ម', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Standard Dropout Rate (p)', labelKh: 'អត្រា Dropout ស្តង់ដារ (p)', value: 'p = 0.5 (Hidden Layers)', tooltipEn: '50% probability of dropping any hidden neuron', tooltipKh: 'ប្រូបាប៊ីលីតេ ៥០% ក្នុងការកាត់ផ្តាច់ណឺរ៉ូនលាក់នីមួយៗ' },
        { labelEn: 'Virtual Ensemble Size', labelKh: 'ចំនួនគំរូ Ensemble សិប្បនិម្មិត', value: '2ᴺ Thinned Sub-Networks', tooltipEn: 'Network acts as geometric average of 2^N sub-models', tooltipKh: 'បណ្តាញដើរតួជាមធ្យមភាគធរណីមាត្រនៃអនុគំរូចំនួន 2^N' },
        { labelEn: 'Inverted Dropout Scaling', labelKh: 'កត្តាពង្រីកទំហំ Inverted Dropout', value: 'Scale Factor = 1 / (1 - p)', tooltipEn: 'Maintains identical expected sum during inference without scaling', tooltipKh: 'រក្សាតុល្យភាពថាមពលសញ្ញាក្នុងពេលដំណើរការជាក់ស្តែង' }
      ],
      chartSetup: {
        chartType: 'Side-by-Side Network Topology & Active Neuron Histogram',
        chartTypeKh: 'ដ្យាក្រាមបណ្តាញក្បែរគ្នា និងអ៊ីស្តូក្រាមណឺរ៉ូនសកម្ម',
        dimensions: ['Training_Step (ជំហានហ្វឹកហាត់)', 'Layer_Index (លេខស្រទាប់)'],
        metrics: ['Active_Neuron_Count', 'Dropped_Neuron_Count', 'Ensemble_Agreement_Pct'],
        sortOrder: 'Training_Step ASCENDING',
        filterDefault: 'p = 0.5 Configured',
        chartDescriptionEn: 'Contrasts a standard densely connected network against a randomly thinned network where active sub-paths change every mini-batch.',
        chartDescriptionKh: 'ប្រៀបធៀបបណ្តាញដែលតភ្ជាប់ពេញលេញ ធៀបនឹងបណ្តាញដែលកាត់ផ្តាច់ដោយចៃដន្យ ដែលផ្លូវដើរសកម្មផ្លាស់ប្តូរគ្រប់បាច់។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Inverted Dropout Formulation',
          formulaNameKh: 'រូបមន្តគណិតវិទ្យា Inverted Dropout',
          latex: 'r_j^{(l)} \\sim \\text{Bernoulli}(1 - p), \\quad \\tilde{a}^{(l)} = \\frac{r^{(l)} \\odot a^{(l)}}{1 - p}',
          explanationEn: 'During training, each hidden neuron is multiplied by a binary Bernoulli mask r (0 with probability p, 1 with probability 1-p) and divided by (1-p) so that test-time inference requires zero modification.',
          explanationKh: 'ក្នុងអំឡុងពេលហ្វឹកហាត់ ណឺរ៉ូនលាក់នីមួយៗត្រូវបានគុណនឹងរបាំង Bernoulli r (ស្មើ ០ ដោយប្រូបាប៊ីលីតេ p, ស្មើ ១ ដោយប្រូបាប៊ីលីតេ 1-p) និងចែកនឹង (1-p) ដើម្បីកុំឱ្យពិបាកកែសម្រួលនៅពេលយកទៅប្រើជាក់ស្តែង។',
          variables: [
            { symbol: 'p', meaningEn: 'Dropout probability (probability of a unit being zeroed)', meaningKh: 'ប្រូបាប៊ីលីតេកាត់ផ្តាច់ (ឱកាសដែលណឺរ៉ូនត្រូវទម្លាក់ស្មើ ០)', role: 'Dropout Rate' },
            { symbol: 'r_j^{(l)}', meaningEn: 'Binary vector sampled from Bernoulli distribution', meaningKh: 'វ៉ិចទ័រប៊ីតដែលទាញចេញពីការបែងចែក Bernoulli', role: 'Dropout Mask' },
            { symbol: '\\odot', meaningEn: 'Hadamard (element-wise) vector multiplication', meaningKh: 'ផលគុណធាតុមួយទល់នឹងមួយ (Hadamard product)', role: 'Element-wise Product' },
            { symbol: '\\frac{1}{1 - p}', meaningEn: 'Inverted dropout scaling factor preserving activation expectation', meaningKh: 'មេគុណពង្រីកដើម្បីរក្សាតម្លៃមធ្យមនៃសញ្ញា', role: 'Inverted Scale' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Metric Slider',
        fieldName: 'Dropout_Rate_Slider',
        controlLabelEn: 'Set Dropout Probability (p)',
        controlLabelKh: 'កំណត់អត្រា Dropout (p)',
        defaultValue: '0.50',
        min: 0.0,
        max: 0.80,
        step: 0.05,
        purposeEn: 'Simulates the random deactivation pattern of neurons across the hidden layers.',
        purposeKh: 'បង្ហាញទម្រង់នៃការកាត់ផ្តាច់ណឺរ៉ូនដោយចៃដន្យនៅគ្រប់ស្រទាប់លាក់។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Regularization — Dropout Technique:',
          'Dropout: Randomly set some neurons to zero during each forward pass of training.',
          '1. Prevents Co-Adaptation: A neuron cannot rely on the presence of a specific neighboring neuron; it must learn robust, useful features independently.',
          '2. Forces Redundant Representation: Forces the network to distribute important knowledge across multiple redundant pathways.',
          '3. Large Ensemble of Models: Simulates training an ensemble of 2ᴺ exponentially thinned models with shared weights.',
          'Typical setting: Dropout of p = 0.5 (probability of a unit being zeroed/dropped).'
        ],
        kh: [
          'បច្ចេកទេស Regularization — បច្ចេកទេស Dropout៖',
          'Dropout៖ កាត់ផ្តាច់ណឺរ៉ូនមួយចំនួនឱ្យស្មើ ០ ដោយចៃដន្យ ក្នុងរាល់ការបញ្ជូនទៅមុខនៃការហ្វឹកហាត់។',
          '១. ទប់ស្កាត់ Co-Adaptation៖ ណឺរ៉ូនមួយមិនអាចពឹងផ្អែកលើវត្តមានរបស់ណឺរ៉ូនជិតខាងជាក់លាក់ណាមួយបានឡើយ វាត្រូវតែរៀនសូត្រលក្ខណៈមានប្រយោជន៍ដោយឯករាជ្យ។',
          '២. បង្ខំឱ្យមានតំណាងទិន្នន័យចម្រុះ (Redundant Representation)៖ បង្ខំឱ្យបណ្តាញចែកចាយចំណេះដឹងសំខាន់ៗកាត់តាមផ្លូវតំណភ្ជាប់ជាច្រើន។',
          '៣. ប្រមូលផ្តុំគំរូជាច្រើន (Ensemble of Models)៖ ធ្វើត្រាប់ដូចជាការហ្វឹកហាត់គំរូតូចៗរហូតដល់ 2ᴺ គំរូដំណាលគ្នា ដោយប្រើប្រាស់ទម្ងន់រួមគ្នា។',
          'ការកំណត់ទូទៅ៖ អត្រា Dropout p = 0.5 (ប្រូបាប៊ីលីតេ ៥០% ដែលថ្នាំងត្រូវកាត់ផ្តាច់)។'
        ]
      },
      deepDiveExplanation: {
        en: 'Nitish Srivastava and Geoffrey Hinton introduced Dropout in 2014, inspired by sex in biological evolution: if genes rely on a fragile co-adapted combination of other genes, mutations cause collapse. By continually scrambling which neurons are active, Dropout prevents "co-adaptation" where one neuron corrects for the mistakes of another. At test time, dropout is disabled, effectively averaging all 2^N sub-networks into a single super-robust predictor.',
        kh: 'Nitish Srivastava និង Geoffrey Hinton បានបង្កើត Dropout នៅឆ្នាំ ២០១៤ ដោយបានការបំផុសគំនិតពីការវិវត្តន៍ជីវសាស្ត្រនៃការបន្តពូជ៖ ប្រសិនបើហ្សែនពឹងផ្អែកខ្លាំងលើការរួមផ្សំដែលផុយស្រួយនៃហ្សែនដទៃ នោះការផ្លាស់ប្តូរហ្សែនបន្តិចបន្តួចនឹងបង្កឱ្យដួលរលំ។ តាមរយៈការផ្លាស់ប្តូរណឺរ៉ូនសកម្មឥតឈប់ឈរ Dropout ទប់ស្កាត់ "Co-adaptation" ដែលណឺរ៉ូនមួយចាំតែជួយកែកំហុសរបស់ណឺរ៉ូនមួយទៀត។ នៅពេលយកទៅប្រើប្រាស់ជាក់ស្តែង Dropout ត្រូវបានបិទ ដែលស្មើនឹងការគិតជាមធ្យមនៃអនុគំរូទាំងអស់ចំនួន 2^N បញ្ចូលគ្នា។'
      },
      practicalApplication: {
        titleEn: 'Natural Language Sentiment & Intent Classification',
        titleKh: 'ប្រព័ន្ធវិភាគអារម្មណ៍ និងបំណងប្រាថ្នាក្នុងអត្ថបទភាសាខ្មែរ (NLP)',
        scenarioEn: 'A customer support classification transformer applies Dropout (p=0.3) after attention blocks to classify user support chats.',
        scenarioKh: 'ប្រព័ន្ធស្វ័យប្រវត្តិចាត់ថ្នាក់សារបម្រើអតិថិជនប្រើប្រាស់ Dropout (p=0.3) លើស្រទាប់ Transformer ដើម្បីចាត់ថ្នាក់សារអតិថិជន។',
        businessImpactEn: 'Prevents overfitting on slang phrases, boosting customer intent classification accuracy from 84.1% to 93.6%.',
        businessImpactKh: 'ទប់ស្កាត់ការរៀនចាំមាត់លើពាក្យស្លោកមិនផ្លូវការ បង្កើនភាពត្រឹមត្រូវនៃការយល់ដឹងពីបំណងអតិថិជនពី ៨៤.១% ទៅ ៩៣.៦%។'
      }
    },
    interactiveType: 'dropout'
  },

  // SLIDE 24
  {
    id: 24,
    slideNumber: 24,
    category: 'Regularization',
    englishTitle: 'Batch Normalization: Internal Covariate Shift & Gradient Flow Stability',
    khmerTitle: 'ការធ្វើស្តង់ដារូបនីយកម្មជាបាច់ (Batch Normalization)៖ ស្ថិរភាពលំហូរក្រាដ្យង់',
    pageIdentity: {
      bilingualPageTitle: 'Slide 24: Batch Normalization / ការធ្វើស្តង់ដារូបនីយកម្មជាបាច់',
      bilingualPageTitleKh: 'Batch Normalization៖ ការគ្រប់គ្រង Covariate Shift និងការបង្កើនល្បឿនរៀន',
      canvasSetup: 'Gaussian Blue & Trainable Amber Gamma/Beta Theme (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ខៀវហ្គូស៊ាន (Gaussian) និងពណ៌មាសនៃប៉ារ៉ាម៉ែត្រ Gamma/Beta (16:9)',
      hexPrimary: '#2563EB',
      hexSecondary: '#D97706',
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#10B981',
      themeRationaleEn: 'Gaussian blue reflects standard unit normal distributions N(0, 1), while amber highlights the trainable scale (γ) and shift (β) parameters.',
      themeRationaleKh: 'ពណ៌ខៀវតំណាងឱ្យការចែកចាយធម្មតាស្តង់ដារ N(0, 1) រីឯពណ៌មាសបង្ហាញពីប៉ារ៉ាម៉ែត្រពង្រីក (γ) និងរំកិល (β)។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and twin normalization equations z_hat = (z - μ)/s and y = γ*z_hat + β.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងរូបមន្តស្តង់ដារូបនីយកម្ម z_hat = (z - μ)/s និង y = γ*z_hat + β។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Analysis of the four transformative benefits of Batch Norm: 1. Improves gradient flow, 2. Enables 10x higher learning rates, 3. Reduces strong dependence on weight initialization, 4. Acts as a slight regularizer. Right 55%: Interactive Activation Distribution Simulator displaying raw shifting distributions vs normalized zero-mean unit-variance Bell curves.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ ការវិភាគគុណសម្បត្តិធំៗទាំង ៤ នៃ Batch Norm៖ ១. ធ្វើឱ្យលំហូរក្រាដ្យង់រលូន ២. អនុញ្ញាតឱ្យប្រើ Learning Rate ធំជាងមុន ១០ ដង ៣. កាត់បន្ថយការពឹងផ្អែកលើការកំណត់ទម្ងន់ដំបូង ៤. ដើរតួជា Regularization ស្រាលៗ។ ផ្នែកខាងស្តាំ ៥៥%៖ ឧបករណ៍ពិសោធន៍អន្តរកម្មបង្ហាញការចែកចាយមុន និងក្រោយពេលធ្វើ Normalization។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_24', nameEn: 'Header & BatchNorm Formulas', nameKh: 'ក្បាលទំព័រ និងរូបមន្ត BatchNorm', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_24', nameEn: 'Batch Norm Benefits KPI Grid', nameKh: 'ផ្ទាំងពិន្ទុគុណសម្បត្តិ Batch Norm', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'ben_24', nameEn: 'Internal Covariate Shift Analysis', nameKh: 'ការវិភាគបាតុភូត Covariate Shift ខាងក្នុង', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'dst_24', nameEn: 'Interactive Bell Curve Distribution Visualizer', nameKh: 'ក្រាហ្វកណ្តឹងបែងចែកទិន្នន័យអន្តរកម្ម Gaussian', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Learning Rate Multiplier', labelKh: 'កម្រិតបង្កើនអត្រារៀនសូត្រ', value: '5x - 10x Higher α', tooltipEn: 'Allows aggressive learning rates without loss explosion', tooltipKh: 'អនុញ្ញាតឱ្យប្រើប្រាស់ Learning Rate ធំដោយមិនបារម្ភរឿង Loss ផ្ទុះ' },
        { labelEn: 'Normalized Distribution Target', labelKh: 'គោលដៅចែកចាយស្តង់ដារ', value: 'Mean μ=0, Variance σ²=1', tooltipEn: 'Unit Gaussian zero-mean centering', tooltipKh: 'ទម្រង់កណ្តឹងស្តង់ដារ មានមធ្យម ០ និងវ៉ារ្យង់ ១' },
        { labelEn: 'Trainable Scale & Shift', labelKh: 'ប៉ារ៉ាម៉ែត្រដែលអាចរៀនបាន', value: 'γ (Scale) & β (Shift)', tooltipEn: 'Allows network to recover identity mapping if optimal', tooltipKh: 'អនុញ្ញាតឱ្យបណ្តាញអាចស្តារតម្លៃដើមវិញបើចាំបាច់' }
      ],
      chartSetup: {
        chartType: 'Before-and-After Gaussian Bell Curve Density Plot',
        chartTypeKh: 'ក្រាហ្វខ្សែកោងដង់ស៊ីតេកណ្តឹងមុន និងក្រោយ Normalization',
        dimensions: ['Activation_Value_z (-6 to +6)'],
        metrics: ['Raw_Pre_Activation_Density (មុន Norm)', 'Batch_Normalized_Density (ក្រោយ Norm)'],
        sortOrder: 'Activation_Value_z ASCENDING',
        filterDefault: 'Full Bell Curve View',
        chartDescriptionEn: 'Contrasts unstable, skewed pre-activations against perfectly stabilized, centered unit Gaussian distributions across layers.',
        chartDescriptionKh: 'ប្រៀបធៀបសកម្មភាពដែលរង្គោះរង្គើ និងលម្អៀង ធៀបនឹងការចែកចាយធម្មតាដែលមានលំនឹងល្អឥតខ្ចោះនៅគ្រប់ស្រទាប់។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Batch Normalization & Learnable Affine Transform',
          formulaNameKh: 'ការធ្វើស្តង់ដារូបនីយកម្មជាបាច់ និងការបំប្លែង Affine',
          latex: '\\hat{z} = \\frac{z - \\mu_B}{\\sqrt{\\sigma_B^2 + \\epsilon}}, \\quad y = \\gamma \\hat{z} + \\beta',
          explanationEn: 'For each mini-batch, activations are centered to zero mean and unit variance. Then trainable parameters γ and β scale and shift the result, giving the network full expressive power to preserve non-linearities.',
          explanationKh: 'សម្រាប់បាច់នីមួយៗ តម្លៃសកម្មភាពត្រូវបានកែឱ្យមានមធ្យមស្មើ ០ និងវ៉ារ្យង់ស្មើ ១។ បន្ទាប់មក ប៉ារ៉ាម៉ែត្រដែលអាចរៀនបាន γ និង β ធ្វើការពង្រីក និងរំកិលលទ្ធផល ដើម្បីរក្សាសមត្ថភាពមិនលីនេអ៊ែររបស់បណ្តាញ។',
          variables: [
            { symbol: '\\mu_B', meaningEn: 'Mini-batch mean: (1/B) Σ z_i', meaningKh: 'តម្លៃមធ្យមនៃបាច់៖ (1/B) Σ z_i', role: 'Batch Mean' },
            { symbol: '\\sigma_B^2', meaningEn: 'Mini-batch variance: (1/B) Σ (z_i - μ_B)²', meaningKh: 'វ៉ារ្យង់នៃបាច់៖ (1/B) Σ (z_i - μ_B)²', role: 'Batch Variance' },
            { symbol: '\\hat{z}', meaningEn: 'Unit Gaussian normalized intermediate tensor', meaningKh: 'តង់ស័រស្តង់ដារូបនីយកម្ម N(0, 1)', role: 'Normalized Logit' },
            { symbol: '\\gamma', meaningEn: 'Trainable scale parameter initialized to 1', meaningKh: 'ប៉ារ៉ាម៉ែត្រពង្រីកដែលអាចរៀនបាន (ចាប់ផ្តើមស្មើ ១)', role: 'Learnable Scale' },
            { symbol: '\\beta', meaningEn: 'Trainable shift parameter initialized to 0', meaningKh: 'ប៉ារ៉ាម៉ែត្ររំកិលដែលអាចរៀនបាន (ចាប់ផ្តើមស្មើ ០)', role: 'Learnable Shift' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Metric Slider',
        fieldName: 'Gamma_Scale_Probe',
        controlLabelEn: 'Adjust Trainable Gamma Scale (γ)',
        controlLabelKh: 'កែសម្រួលប៉ារ៉ាម៉ែត្រពង្រីក Gamma (γ)',
        defaultValue: '1.0',
        min: 0.2,
        max: 3.0,
        step: 0.1,
        purposeEn: 'Shows how the network learns to dynamically stretch the normalized Gaussian distribution.',
        purposeKh: 'បង្ហាញពីរបៀបដែលបណ្តាញរៀនសូត្រពង្រីកទទឹងនៃការចែកចាយទិន្នន័យ។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Batch Normalization:',
          '1. Consider a batch of activations at some layer. To make each dimension unit Gaussian, apply:',
          '   z_hat = (z - μ) / s',
          '2. Problem: Do we necessarily want a rigid unit Gaussian input to the activation function?',
          '   Solution: Apply y = γ * z_hat + β, where γ and β are trainable parameters.',
          '3. Transformative Benefits of Batch Norm:',
          '   - Improves gradient flow throughout deep layers.',
          '   - Allows significantly higher learning rates (accelerating training by 14x).',
          '   - Reduces strong dependence on fragile weight initialization.',
          '   - Acts as a mild form of regularization (injects small batch noise).'
        ],
        kh: [
          'ការធ្វើស្តង់ដារូបនីយកម្មជាបាច់ (Batch Normalization)៖',
          '១. ពិនិត្យមើលបាច់នៃសកម្មភាពនៅស្រទាប់ណាមួយ។ ដើម្បីធ្វើឱ្យវិមាត្រនីមួយៗក្លាយជា Gaussian ស្តង់ដារ យើងអនុវត្ត៖',
          '   z_hat = (z - μ) / s',
          '២. សំណួរគន្លឹះ៖ តើយើងពិតជាចង់ឱ្យធាតុបញ្ចូលទៅកាន់អនុគមន៍សកម្មភាពជា Gaussian ស្តង់ដាររឹងស្តូកជានិច្ចឬទេ?',
          '   ដំណោះស្រាយ៖ អនុវត្ត y = γ * z_hat + β ដែល γ និង β ជាប៉ារ៉ាម៉ែត្ររៀនសូត្របាន។',
          '៣. អត្ថប្រយោជន៍ដ៏អស្ចារ្យទាំង ៤ នៃ Batch Norm៖',
          '   - ជួយឱ្យលំហូរក្រាដ្យង់ហូរឆ្លងកាត់ស្រទាប់ជ្រៅៗបានយ៉ាងរលូន។',
          '   - អនុញ្ញាតឱ្យប្រើប្រាស់ Learning Rate ធំជាងមុនច្រើនដង (ពន្លឿនការរៀនបានរហូតដល់ ១៤ ដង)។',
          '   - កាត់បន្ថយការពឹងផ្អែកខ្លាំងលើការកំណត់តម្លៃទម្ងន់ដំបូងដ៏ផុយស្រួយ។',
          '   - ដើរតួជាទម្រង់ Regularization ស្រាលៗ (ដោយសារសំឡេងរំខានបន្តិចបន្តួចនៃបាច់)។'
        ]
      },
      deepDiveExplanation: {
        en: 'Sergey Ioffe and Christian Szegedy introduced Batch Normalization at Google in 2015, solving "Internal Covariate Shift"—the chronic problem where the distribution of each layer\'s inputs constantly changes as earlier layers update. By explicitly standardizing layer activations to mean 0 and variance 1, Batch Normalization stabilizes the inputs of all subsequent layers. The learnable affine parameters γ and β give the network the mathematical freedom to undo the normalization if a saturated state is truly optimal.',
        kh: 'Sergey Ioffe និង Christian Szegedy បានបង្កើត Batch Normalization នៅ Google ក្នុងឆ្នាំ ២០១៥ ដើម្បីដោះស្រាយបញ្ហា "Internal Covariate Shift" ដែលការចែកចាយនៃធាតុបញ្ចូលក្នុងស្រទាប់នីមួយៗប្រែប្រួលឥតឈប់ឈរនៅពេលស្រទាប់ខាងដើមផ្លាស់ប្តូរទម្ងន់។ តាមរយៈការធ្វើស្តង់ដារូបនីយកម្មឱ្យមានមធ្យម ០ និងវ៉ារ្យង់ ១ Batch Normalization ធានាស្ថិរភាពនៃធាតុបញ្ចូលសម្រាប់ស្រទាប់បន្ទាប់ទាំងអស់។ ប៉ារ៉ាម៉ែត្ររៀនសូត្រ γ និង β ផ្តល់សេរីភាពគណិតវិទ្យាដល់បណ្តាញក្នុងការបត់បែន ឬត្រឡប់ទៅសភាពដើមវិញ ប្រសិនបើចាំបាច់។'
      },
      practicalApplication: {
        titleEn: 'Autonomous Robot Sensor Normalization & Control',
        titleKh: 'ប្រព័ន្ធស្តង់ដារូបនីយកម្មសេនស័រ និងបញ្ជាមនុស្សយន្តស្វ័យប្រវត្តិ',
        scenarioEn: 'Industrial robots normalize multi-axis motor currents and camera frames via Batch Normalization before computing joint trajectory torque.',
        scenarioKh: 'មនុស្សយន្តក្នុងរោងចក្រឧស្សាហកម្មធ្វើស្តង់ដារូបនីយកម្មចរន្តម៉ូទ័រ និងរូបភាពកាមេរ៉ាតាម Batch Normalization មុននឹងគណនាកម្លាំងបង្វិលសន្លាក់ដៃ។',
        businessImpactEn: 'Eliminates sensor drift recalibration downtime, accelerating factory production line speed by 35%.',
        businessImpactKh: 'លុបបំបាត់ពេលវេលាឈប់សម្រាកដើម្បីកែតម្រូវសេនស័រឡើងវិញ បង្កើនល្បឿនខ្សែច្រវាក់ផលិតកម្មរោងចក្របាន ៣៥%។'
      }
    },
    interactiveType: 'batch_norm'
  },

  // SLIDE 25
  {
    id: 25,
    slideNumber: 25,
    category: 'Practical Lab',
    englishTitle: 'Applied Capstone Exercise: Khmer Character Dataset (kh_char.zip) Classification',
    khmerTitle: 'លំហាត់អនុវត្តជាក់ស្តែង៖ ចំណាត់ថ្នាក់តួអក្សរខ្មែរ (kh_char.zip) និងការកាត់បន្ថយកំហុសតេស្ត',
    pageIdentity: {
      bilingualPageTitle: 'Slide 25: Exercise — Khmer Character Classification / លំហាត់ចំណាត់ថ្នាក់តួអក្សរខ្មែរ',
      bilingualPageTitleKh: 'លំហាត់អនុវត្តកសាងបណ្តាញណឺរ៉ូនចំណាត់ថ្នាក់តួអក្សរខ្មែរ (kh_char.zip)',
      canvasSetup: 'Angkor Heritage Gold & High-Tech Cobalt Lab Canvas (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌មាសអង្គរប្រណិត និងពណ៌ខៀវបច្ចេកវិទ្យាខ្ពស់ (16:9)',
      hexPrimary: '#D97706', // Angkor Amber/Gold
      hexSecondary: '#2563EB', // Cobalt Blue
      hexBackground: '#0B1120',
      hexSurface: '#162235',
      hexAccent: '#10B981', // Emerald Success
      themeRationaleEn: 'Combines traditional Cambodian cultural identity (Angkor gold) with bleeding-edge artificial neural network engineering visual cues.',
      themeRationaleKh: 'រួមបញ្ចូលគ្នារវាងអត្តសញ្ញាណវប្បធម៌ខ្មែរ (ពណ៌មាសអង្គរ) ជាមួយបច្ចេកវិទ្យាវិស្វកម្ម AI និងបណ្តាញណឺរ៉ូនទំនើប។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and exercise brief badge: kh_char.zip dataset, objective: minimize test error rate.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងបដាសង្ខេបលំហាត់៖ សំណុំទិន្នន័យ kh_char.zip គោលដៅ៖ កាត់បន្ថយអត្រាកំហុសលើ Test Set។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Complete engineering implementation checklist: Data loading & preprocessing, train/val/test splits, architecture design, regularization stack (Dropout + L2 + BatchNorm), and metric tracking. Right 55%: Interactive Khmer Character Recognition Lab (kh_char sandbox) where users draw or select characters (ក, ខ, គ, ឃ, ង) and observe real-time model confidence scorecards, error rates, and confusion matrix.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ បញ្ជីត្រួតពិនិត្យការអនុវត្តវិស្វកម្ម៖ ការទាញយកទិន្នន័យ ការបែងចែក train/val/test ការរចនាស្ថាបត្យកម្ម បច្ចេកទេស Regularization (Dropout + L2 + BatchNorm) និងការតាមដានសូចនាករ។ ផ្នែកខាងស្តាំ ៥៥%៖ មន្ទីរពិសោធន៍អន្តរកម្មចំណាត់ថ្នាក់តួអក្សរខ្មែរ អាចជ្រើសរើសអក្សរ (ក, ខ, គ, ឃ, ង) និងមើលពិន្ទុទំនុកចិត្ត អត្រាកំហុស និងម៉ាទ្រីសច្រឡំ (Confusion Matrix) ភ្លាមៗ។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_25', nameEn: 'Header & Lab Objective Banner', nameKh: 'ក្បាលទំព័រ និងគោលបំណងមន្ទីរពិសោធន៍', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_25', nameEn: 'Evaluation Metrics KPI Bar', nameKh: 'របារ KPI សូចនាករវាយតម្លៃ', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'chk_25', nameEn: 'Engineering Checklist Card', nameKh: 'បញ្ជីត្រួតពិនិត្យជំហានអនុវត្តវិស្វកម្ម', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'lab_25', nameEn: 'Interactive Khmer Character OCR Sandbox', nameKh: 'បន្ទប់ពិសោធន៍ស្គាល់តួអក្សរខ្មែរ OCR អន្តរកម្ម', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Target Test Error Rate', labelKh: 'កម្រិតកំហុសគោលដៅលើ Test Set', value: '< 2.5% Error Rate', tooltipEn: 'Benchmarked on independent unseen test split', tooltipKh: 'វាស់ស្ទង់លើសំណុំទិន្នន័យតេស្តឯករាជ្យ' },
        { labelEn: 'Target Overall Accuracy', labelKh: 'ភាពត្រឹមត្រូវសរុបគោលដៅ', value: '≥ 97.5% Accuracy', tooltipEn: 'Required for commercial-grade OCR deployment', tooltipKh: 'កម្រិតស្តង់ដារសម្រាប់ប្រើប្រាស់ក្នុងប្រព័ន្ធ OCR ពាណិជ្ជកម្ម' },
        { labelEn: 'Regularization Stack Required', labelKh: 'បច្ចេកទេស Regularization ដែលត្រូវប្រើ', value: 'Dropout + L2 + BatchNorm', tooltipEn: 'Mandatory triad to prevent high-variance overfitting', tooltipKh: 'បច្ចេកទេសទាំង ៣ ចាំបាច់ដើម្បីទប់ស្កាត់ Overfitting' }
      ],
      chartSetup: {
        chartType: 'Heatmap Confusion Matrix & Learning Curve Dual Plot',
        chartTypeKh: 'ម៉ាទ្រីសច្រឡំកម្តៅ (Heatmap Confusion Matrix) និងក្រាហ្វរៀនសូត្រ',
        dimensions: ['True_Khmer_Consonant (អក្សរពិត ក, ខ, គ, ឃ, ង)', 'Predicted_Khmer_Consonant (អក្សរទស្សន៍ទាយ)'],
        metrics: ['Classification_Accuracy_Pct (ភាពត្រឹមត្រូវ %)', 'Misclassification_Count (ចំនួនច្រឡំ)'],
        sortOrder: 'True_Khmer_Consonant ASCENDING',
        filterDefault: 'Full 33 Khmer Consonants Sub-sample',
        chartDescriptionEn: 'A high-definition confusion matrix displaying misclassification hotspots between visually similar Khmer consonants (such as គ vs ឃ or ដ vs ត).',
        chartDescriptionKh: 'ម៉ាទ្រីសច្រឡំកម្រិតច្បាស់ បង្ហាញពីចំណុចច្រឡំរវាងតួអក្សរខ្មែរដែលមានរាងស្រដៀងគ្នា (ដូចជា គ និង ឃ ឬ ដ និង ត)។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Test Set Error Rate Formulation',
          formulaNameKh: 'រូបមន្តគណនាអត្រាកំហុសលើ Test Set',
          latex: '\\text{Test Error Rate} = \\frac{1}{m_{\\text{test}}} \\sum_{i=1}^{m_{\\text{test}}} \\mathbb{I}\\left( \\operatorname{argmax}_k h(x^{(i)})_k \\ne y^{(i)} \\right) \\times 100\\%',
          explanationEn: 'The percentage of test examples where the model\'s highest-probability predicted class does not match the true ground-truth character label.',
          explanationKh: 'ភាគរយនៃទិន្នន័យតេស្ត ដែលថ្នាក់ទស្សន៍ទាយមានប្រូបាប៊ីលីតេខ្ពស់បំផុតមិនត្រូវគ្នាជាមួយនឹងស្លាកតួអក្សរពិតប្រាកដ។',
          variables: [
            { symbol: 'm_{\\text{test}}', meaningEn: 'Number of examples in the held-out test split', meaningKh: 'ចំនួនទិន្នន័យគំរូក្នុងសំណុំតេស្តឯករាជ្យ', role: 'Test Size' },
            { symbol: '\\mathbb{I}(\\cdot)', meaningEn: 'Indicator function evaluating to 1 if condition is true, 0 otherwise', meaningKh: 'អនុគមន៍ចង្អុលបង្ហាញ (ស្មើ ១ បើទស្សន៍ទាយខុស, ស្មើ ០ បើត្រូវ)', role: 'Indicator' },
            { symbol: '\\operatorname{argmax}_k', meaningEn: 'Index of output neuron with the highest confidence', meaningKh: 'លេខកូដណឺរ៉ូនបញ្ចេញដែលមានទំនុកចិត្តខ្ពស់បំផុត', role: 'Predicted Class' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Dropdown',
        fieldName: 'Khmer_Character_Picker',
        controlLabelEn: 'Test Sample Khmer Consonant',
        controlLabelKh: 'ជ្រើសរើសតួអក្សរខ្មែរដើម្បីធ្វើតេស្ត',
        defaultValue: 'ក (Ka)',
        options: ['ក (Ka)', 'ខ (Kha)', 'គ (Ko)', 'ឃ (Kho)', 'ង (Ngo)'],
        purposeEn: 'Loads candidate character image into the neural network inference model.',
        purposeKh: 'បញ្ចូលរូបភាពតួអក្សរគំរូទៅក្នុងម៉ូដែលបណ្តាញណឺរ៉ូនដើម្បីទស្សន៍ទាយ។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Exercise: Khmer Character Recognition (kh_char.zip):',
          'Using the Khmer character dataset provided (kh_char.zip):',
          '1. Construct a multi-layer deep neural network.',
          '2. Evaluate performance rigorously by calculating the error rate on the held-out test set.',
          '3. Hyperparameter Fine-Tuning: Systematically tune learning rate α, mini-batch size B, and hidden layer dimensions.',
          '4. Regularization: Implement Dropout, L2 Regularization, and Batch Normalization to maximize test generalization and eliminate overfitting.'
        ],
        kh: [
          'លំហាត់អនុវត្ត៖ ចំណាត់ថ្នាក់តួអក្សរខ្មែរ (kh_char.zip)៖',
          'ដោយប្រើប្រាស់សំណុំទិន្នន័យតួអក្សរខ្មែរដែលបានផ្តល់ជូន (kh_char.zip)៖',
          '១. កសាងបណ្តាញណឺរ៉ូនជម្រៅជ្រៅពហុស្រទាប់។',
          '២. វាយតម្លៃសមត្ថភាពគំរូឱ្យបានម៉ត់ចត់ ដោយគណនាអត្រាកំហុស (Error Rate) លើសំណុំទិន្នន័យតេស្ត (Test Set)។',
          '៣. ការលៃតម្រូវប៉ារ៉ាម៉ែត្រកំពូល (Fine-Tuning)៖ កែសម្រួលអត្រារៀនសូត្រ α ទំហំបាច់ B និងចំនួនណឺរ៉ូនក្នុងស្រទាប់លាក់ជាប្រព័ន្ធ។',
          '៤. ការអនុវត្ត Regularization៖ ប្រើប្រាស់ Dropout, L2 Regularization និង Batch Normalization ដើម្បីបង្កើនភាពត្រឹមត្រូវខ្ពស់បំផុតលើទិន្នន័យតេស្ត និងលុបបំបាត់ Overfitting។'
        ]
      },
      deepDiveExplanation: {
        en: 'This capstone exercise synthesizes every single theoretical concept taught across the preceding 24 slides. Khmer script presents unique visual challenges: it contains 33 consonants, 23 vowels, subscripts (cheung), and diacritics with subtle loop curvatures and high visual similarity (e.g., distinguishing គ from ឃ). Without Batch Normalization, training oscillates; without Dropout and L2, the network memorizes specific handwriting idiosyncrasies. Combining them delivers industrial-strength Khmer character recognition.',
        kh: 'លំហាត់បញ្ចប់នេះធ្វើសំយោគនូវរាល់ទ្រឹស្តី និងរូបមន្តទាំងអស់ដែលបានសិក្សាក្នុង ២៤ ស្លាយកន្លងមក។ អក្សរសាស្ត្រខ្មែរមានលក្ខណៈស្មុគស្មាញពិសេសខាងចក្ខុវិញ្ញាណ៖ មានព្យញ្ជនៈ ៣៣ តួ ស្រៈ ២៣ តួ ជើងអក្សរ និងវណ្ណយុត្តិជាច្រើន ដែលមានរាងកោងនិងក្បាលស្រដៀងគ្នាខ្លាំង (ឧទាហរណ៍៖ ការបែងចែករវាង គ និង ឃ)។ បើគ្មាន Batch Normalization ការហ្វឹកហាត់នឹងរង្គោះរង្គើ បើគ្មាន Dropout និង L2 បណ្តាញនឹងរៀនចាំមាត់តាមស្នាមដៃសរសេរចាស់។ ការរួមបញ្ចូលគ្នានូវបច្ចេកទេសទាំងអស់ នឹងបង្កើតបាននូវប្រព័ន្ធ OCR អក្សរខ្មែរកម្រិតឧស្សាហកម្មពិតប្រាកដ។'
      },
      practicalApplication: {
        titleEn: 'National Archives & Historic Palm-Leaf Manuscript Digitization',
        titleKh: 'ប្រព័ន្ធស្កេន និងរក្សាទុកឯកសារប្រវត្តិសាស្ត្រ និងសាស្រ្តាស្លឹករឹតខ្មែរ',
        scenarioEn: 'The Ministry of Culture deploys this tuned neural network to automatically transcribe centuries-old Khmer palm-leaf manuscripts into digital Unicode text.',
        scenarioKh: 'ក្រសួងវប្បធម៌ និងវិចិត្រសិល្បៈប្រើប្រាស់បណ្តាញណឺរ៉ូននេះ ដើម្បីបំប្លែងសាស្រ្តាស្លឹករឹតបុរាណរាប់ពាន់សន្លឹក ទៅជាអត្ថបទឌីជីថលយូនីកូដស្វ័យប្រវត្តិ។',
        businessImpactEn: 'Digitizes 100,000 historical palm leaves in 3 months with 98.1% transcription fidelity, preserving cultural heritage for posterity.',
        businessImpactKh: 'បំប្លែងឯកសារស្លឹករឹតបុរាណ ១០០,០០០ សន្លឹកក្នុងរយៈពេលត្រឹម ៣ ខែ ជាមួយភាពត្រឹមត្រូវ ៩៨.១% រក្សាកេរដំណែលវប្បធម៌ជាតិជារៀងរហូត។'
      }
    },
    interactiveType: 'khmer_exercise'
  },

  // SLIDE 26
  {
    id: 26,
    slideNumber: 26,
    category: 'Practical Lab',
    englishTitle: 'Academic Literature, Foundations & Recommended References',
    khmerTitle: 'ឯកសារយោង និងប្រភពស្រាវជ្រាវទ្រឹស្តីបណ្តាញណឺរ៉ូនកម្រិតអន្តរជាតិ',
    pageIdentity: {
      bilingualPageTitle: 'Slide 26: References & Scholarly Citations / ឯកសារយោង និងប្រភពសិក្សា',
      bilingualPageTitleKh: 'ឯកសារយោង និងប្រភពសិក្សាស្រាវជ្រាវកម្រិតពិភពលោក (Dr. Valy Dona)',
      canvasSetup: 'Scholarly Slate & Emerald Knowledge Vault (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ប្រផេះបណ្ឌិតសភា និងត្បូងមរកត តំណាងឱ្យឃ្លាំងចំណេះដឹង (16:9)',
      hexPrimary: '#059669', // Scholarly Emerald
      hexSecondary: '#2563EB', // Academic Blue
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#38BDF8',
      themeRationaleEn: 'Scholarly emerald and academic blue convey intellectual credibility, structured archiving, and foundational literature authority.',
      themeRationaleKh: 'ពណ៌បៃតង និងខៀវបណ្ឌិតសភា បង្ហាញពីភាពជឿជាក់ខាងបញ្ញា ការរក្សាទុកឯកសារជាប្រព័ន្ធ និងប្រភពស្រាវជ្រាវកម្រិតស្តង់ដារអន្តរជាតិ។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and foundational literature recognition badge.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងស្លាកកិត្តិយសឯកសារស្រាវជ្រាវគ្រឹះ។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Structured citations directory (Andrew Ng Coursera, Stanford CS229, Andrej Karpathy Stanford CS231n) mapped to specific lecture themes. Right 55%: Interactive Scholarly Knowledge Graph exploring citation networks, breakthrough publications, and active external hyperlinks.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ បញ្ជីឯកសារយោងផ្លូវការ (Andrew Ng Coursera, Stanford CS229, Andrej Karpathy CS231n) ភ្ជាប់ទៅកាន់ប្រធានបទមេរៀននីមួយៗ។ ផ្នែកខាងស្តាំ ៥៥%៖ ក្រាហ្វបណ្តាញចំណេះដឹងអន្តរកម្ម ស្វែងរកការតភ្ជាប់នៃ مقាឡាស្រាវជ្រាវ និងតំណភ្ជាប់ផ្ទាល់។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_26', nameEn: 'Header & Scholarly Badge', nameKh: 'ក្បាលទំព័រ និងស្លាកឯកសារយោង', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_26', nameEn: 'Academic Impact KPI Row', nameKh: 'ជួរ KPI ឥទ្ធិពលនៃការស្រាវជ្រាវ', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'ref_26', nameEn: 'Formal Citations Directory Table', nameKh: 'តារាងបញ្ជីគន្ថនិទ្ទេសផ្លូវការ', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Chart' },
        { id: 'kng_26', nameEn: 'Interactive Knowledge Citation Graph', nameKh: 'ដ្យាក្រាមបណ្តាញចំណេះដឹង និងតំណភ្ជាប់អន្តរកម្ម', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Primary Academic Foundations', labelKh: 'ប្រភពគ្រឹះសិក្សាស្រាវជ្រាវចម្បង', value: 'Stanford & Coursera AI', tooltipEn: 'Curriculum curated by Dr. Valy Dona', tooltipKh: 'រៀបចំដោយ សាស្ត្រាចារ្យ បណ្ឌិត វ៉ាលី ដូណា' },
        { labelEn: 'Combined Scholarly Citations', labelKh: 'ចំនួនដកស្រង់ស្រាវជ្រាវរួមគ្នា', value: '350,000+ Citations', tooltipEn: 'Global citations of foundational papers cited', tooltipKh: 'ចំនួននៃការដកស្រង់ស្រាវជ្រាវទូទាំងពិភពលោក' },
        { labelEn: 'Continuous Learning Path', labelKh: 'មាគ៌ាសិក្សាបន្តបន្ទាប់', value: 'CS229 → CS231n → LLMs', tooltipEn: 'Direct pipeline to modern Generative AI mastery', tooltipKh: 'ជំហានឆ្ពោះទៅកាន់ជំនាញ Generative AI ទំនើប' }
      ],
      chartSetup: {
        chartType: 'Cross-tab Scholarly Repository & External Link Table',
        chartTypeKh: 'តារាងឃ្លាំងឯកសារយោង Cross-tab និងតំណភ្ជាប់ខាងក្រៅ',
        dimensions: ['Author_Scholar (អ្នកនិពន្ធ)', 'Institution_Platform (ស្ថាប័ន / វេទិកា)', 'Course_Title (ចំណងជើងវគ្គសិក្សា)'],
        metrics: ['Direct_Lecture_Relevance (កម្រិតពាក់ព័ន្ធ)', 'Open_Access_Flag (សិទ្ធិចូលមើលដោយសេរី)'],
        sortOrder: 'Author_Scholar ASCENDING',
        filterDefault: 'All 3 Core Citations',
        chartDescriptionEn: 'Structured Looker Studio repository table with verified URLs and curriculum mapping.',
        chartDescriptionKh: 'តារាងឃ្លាំងឯកសារ Looker Studio ដែលមានតំណភ្ជាប់ URL ត្រឹមត្រូវ និងការភ្ជាប់ទៅមាតិកាមេរៀន។'
      }
    },
    pageControls: [
      {
        controlType: 'Dropdown',
        fieldName: 'Citation_Focus_Selector',
        controlLabelEn: 'Filter Reference Domain',
        controlLabelKh: 'ចម្រាញ់តាមប្រភពឯកសារយោង',
        defaultValue: 'All References',
        options: ['All References (ឯកសារយោងទាំងអស់)', 'Prof. Andrew Ng (Coursera Machine Learning)', 'Prof. Andrew Ng (Stanford CS229)', 'Dr. Andrej Karpathy (Stanford CS231n)'],
        purposeEn: 'Filters the literature list to inspect specific course syllabi and reading assignments.',
        purposeKh: 'ចម្រាញ់បញ្ជីឯកសារដើម្បីពិនិត្យមើលលម្អិតលើមាតិកាវគ្គសិក្សានីមួយៗ។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Academic References and Theoretical Foundations:',
          '1. Prof. Andrew Ng — Coursera Machine Learning Course (coursera.org/learn/machine-learning).',
          '2. Prof. Andrew Ng (2018) — Stanford CS229: Machine Learning Course Notes & Lecture Series.',
          '3. Dr. Andrej Karpathy (2016) — Stanford Winter Class CS231n: Convolutional Neural Networks for Visual Recognition (cs231n.stanford.edu).'
        ],
        kh: [
          'ឯកសារយោង និងប្រភពសិក្សាស្រាវជ្រាវទ្រឹស្តី (References)៖',
          '១. សាស្ត្រាចារ្យ Andrew Ng — វគ្គសិក្សា Coursera Machine Learning (coursera.org/learn/machine-learning)។',
          '២. សាស្ត្រាចារ្យ Andrew Ng (ឆ្នាំ ២០១៨) — Stanford CS229៖ សៀវភៅកំណត់ត្រា និងមេរៀន Machine Learning នៅសាកលវិទ្យាល័យ Stanford។',
          '៣. បណ្ឌិត Andrej Karpathy (ឆ្នាំ ២០១៦) — ថ្នាក់រដូវរងា Stanford CS231n៖ Convolutional Neural Networks for Visual Recognition (cs231n.stanford.edu)។'
        ]
      },
      deepDiveExplanation: {
        en: 'The pedagogical structure of this lecture series was synthesized by Dr. Valy Dona by drawing from the gold standard institutions of modern AI education. Andrew Ng\'s Stanford CS229 provides the rigorous mathematical bedrock for logistic loss, vectorization, and backpropagation derivations. Andrej Karpathy\'s celebrated Stanford CS231n provides deep computational intuition regarding activation function dynamics, Dying ReLU, Batch Normalization, and practical optimization (Adam/RMSprop).',
        kh: 'រចនាសម្ព័ន្ធគរុកោសល្យនៃមេរៀននេះ ត្រូវបានចងក្រង និងធ្វើសំយោគឡើងដោយ សាស្ត្រាចារ្យ បណ្ឌិត វ៉ាលី ដូណា ដោយដកស្រង់ចេញពីស្ថាប័នអប់រំ AI កំពូលៗលើពិភពលោក។ មេរៀន Stanford CS229 របស់សាស្ត្រាចារ្យ Andrew Ng ផ្តល់នូវគ្រឹះគណិតវិទ្យាដ៏ម៉ត់ចត់បំផុតសម្រាប់ Logistic Loss ការធ្វើវ៉ិចទ័រ និងរូបមន្ត Backpropagation។ ចំណែកឯមេរៀន Stanford CS231n ដ៏ល្បីល្បាញរបស់បណ្ឌិត Andrej Karpathy ផ្តល់នូវការយល់ដឹងស៊ីជម្រៅអំពីសកម្មភាពនៃអនុគមន៍ Activation, បញ្ហា Dying ReLU, Batch Normalization និងអុបទិមៃស័រ Adam/RMSprop។'
      },
      practicalApplication: {
        titleEn: 'National University AI Curriculum Accreditation',
        titleKh: 'ការទទួលស្គាល់កម្មវិធីសិក្សាវិស្វកម្ម AI នៅកម្រិតសាកលវិទ្យាល័យជាតិ',
        scenarioEn: 'Universities and institutes in Cambodia benchmark their Deep Learning degree programs against these exact Stanford and Coursera standards.',
        scenarioKh: 'សាកលវិទ្យាល័យ និងវិទ្យាស្ថានបច្ចេកវិទ្យានៅកម្ពុជា រៀបចំកម្មវិធីសិក្សាថ្នាក់បរិញ្ញាបត្រ Deep Learning ស្របតាមស្តង់ដារអន្តរជាតិនៃសាកលវិទ្យាល័យ Stanford និង Coursera នេះ។',
        businessImpactEn: 'Produces engineers fluent in international AI best practices, accelerating Cambodia\'s digital technology transformation.',
        businessImpactKh: 'បណ្តុះបណ្តាលវិស្វករខ្មែរឱ្យមានសមត្ថភាពស្មើមុខស្មើមាត់លើឆាកអន្តរជាតិ ជួយជំរុញការអភិវឌ្ឍសេដ្ឋកិច្ចឌីជីថលនៅកម្ពុជា។'
      }
    },
    interactiveType: 'references'
  }
];
