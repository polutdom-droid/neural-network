import { SlideBlueprint } from '../../types';

export const slides15to21: SlideBlueprint[] = [
  // SLIDE 15
  {
    id: 15,
    slideNumber: 15,
    category: 'Training & Loss',
    englishTitle: 'Parameter Initialization: Zero Initialization Flaw & Symmetry Breaking',
    khmerTitle: 'ការកំណត់តម្លៃដំបូងនៃប៉ារ៉ាម៉ែត្រ៖ បញ្ហា Zero Initialization និងការបំបែកភាពស៊ីមេទ្រី',
    pageIdentity: {
      bilingualPageTitle: 'Slide 15: Parameter Initialization / ការកំណត់តម្លៃដំបូងនៃប៉ារ៉ាម៉ែត្រ',
      bilingualPageTitleKh: 'ហេតុអ្វីមិនអាចកំណត់ទម្ងន់ស្មើ ០? ការបំបែកភាពស៊ីមេទ្រី (Symmetry Breaking)',
      canvasSetup: 'Prism Gold & Amber Academic Theme (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌មាស និងលឿងទុំ បែបស្រាវជ្រាវសិក្សា (16:9)',
      hexPrimary: '#D97706', // Amber/Gold
      hexSecondary: '#2563EB', // Blue
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#EF4444',
      themeRationaleEn: 'Gold and amber emphasize the critical importance of seed variance, while contrasting colored lines illustrate symmetry breaking.',
      themeRationaleKh: 'ពណ៌មាស និងលឿងទុំ បញ្ជាក់ពីសារៈសំខាន់នៃការបង្កើតភាពខុសគ្នានៃទម្ងន់ដំបូង ដើម្បីបំបែកភាពស៊ីមេទ្រីរវាងណឺរ៉ូន។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and symmetry collapse consequence badge a1^(2) = a2^(2) = a3^(2).',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងស្លាកបង្ហាញផលវិបាកនៃការដួលរលំនៃភាពស៊ីមេទ្រី a1^(2) = a2^(2) = a3^(2)។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Theoretical proof of the Zero Initialization trap (identical gradients causing identical parameter updates) and the Random Initialization solution Θ_ij ~ [-ε, +ε]. Right 55%: Interactive Neural Node Symmetry Simulator comparing Zero Init (clone neurons) vs Random Init (diverse feature extraction).',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ ការបកស្រាយទ្រឹស្តីនៃអន្ទាក់ Zero Initialization (ក្រាដ្យង់ស្មើគ្នា នាំឱ្យធ្វើបច្ចុប្បន្នភាពទម្ងន់ដូចគ្នាទាំងស្រុង) និងដំណោះស្រាយ Random Init Θ_ij ~ [-ε, +ε]។ ផ្នែកខាងស្តាំ ៥៥%៖ ឧបករណ៍ពិសោធន៍អន្តរកម្មប្រៀបធៀប Zero Init (ណឺរ៉ូនចម្លងគ្នាដូចបេះបិទ) ធៀបនឹង Random Init (រៀនលក្ខណៈផ្សេងៗគ្នា)។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_15', nameEn: 'Header & Symmetry Equation', nameKh: 'ក្បាលទំព័រ និងរូបមន្តស៊ីមេទ្រី', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_15', nameEn: 'Initialization Parameters KPI', nameKh: 'ផ្ទាំងពិន្ទុប៉ារ៉ាម៉ែត្រកំណត់ដំបូង', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'prf_15', nameEn: 'Mathematical Proof & Failure Mode', nameKh: 'ការបញ្ជាក់គណិតវិទ្យា និងទម្រង់បរាជ័យ', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'sim_15', nameEn: 'Interactive Symmetry Breaking Sandbox', nameKh: 'ប្រអប់ពិសោធន៍បំបែកភាពស៊ីមេទ្រីអន្តរកម្ម', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Hidden Unit Redundancy under Zero Init', labelKh: 'កម្រិតស្ទួននៃណឺរ៉ូនក្រោម Zero Init', value: '100% Redundant (Clone Neurons)', tooltipEn: 'All hidden units compute the exact same feature', tooltipKh: 'ណឺរ៉ូនលាក់ទាំងអស់គណនាលក្ខណៈដូចគ្នាទាំងស្រុង' },
        { labelEn: 'Effective Hidden Capacity', labelKh: 'សមត្ថភាពលាក់ពិតប្រាកដ', value: 'Capacity = 1 Neuron', tooltipEn: 'Network acts as if it has only one single hidden neuron', tooltipKh: 'បណ្តាញដំណើរការដូចជាមានណឺរ៉ូនលាក់តែមួយគត់' },
        { labelEn: 'Recommended Random Epsilon (ε)', labelKh: 'ដែនកំណត់តម្លៃចៃដន្យ Epsilon (ε)', value: 'ε = √(6 / (n_in + n_out))', tooltipEn: 'Glorot / Xavier initialization variance formula', tooltipKh: 'រូបមន្ត Xavier Initialization រក្សាតុល្យភាពវ៉ារ្យង់' }
      ],
      chartSetup: {
        chartType: 'Parallel Coordinates Plot & Weight Distribution Histogram',
        chartTypeKh: 'ក្រាហ្វកូអរដោណេស្របគ្នា និងអ៊ីស្តូក្រាមចែកចាយទម្ងន់',
        dimensions: ['Weight_Identifier (អត្តសញ្ញាណទម្ងន់ W_ij)'],
        metrics: ['Zero_Init_Gradient (ក្រាដ្យង់ក្រោម Zero Init)', 'Random_Init_Gradient (ក្រាដ្យង់ក្រោម Random Init)'],
        sortOrder: 'Weight_Identifier ASCENDING',
        filterDefault: 'Layer 1 to Layer 2 Weights',
        chartDescriptionEn: 'Contrasts uniform identical gradients across all connections against the diverse, decorrelated gradients produced by random symmetry breaking.',
        chartDescriptionKh: 'ប្រៀបធៀបក្រាដ្យង់ស្មើៗគ្នាដែលគ្មានប្រយោជន៍ ធៀបនឹងក្រាដ្យង់ចម្រុះឯករាជ្យដែលបានមកពីការចាប់ផ្តើមដោយចៃដន្យ។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Symmetry Collapse & Random Symmetry Breaking',
          formulaNameKh: 'ការដួលរលំនៃភាពស៊ីមេទ្រី និងដំណោះស្រាយបំបែកភាពស៊ីមេទ្រី',
          latex: '\\text{If } W_{ij}^{(l)} = 0 \\implies a_1^{(2)} = a_2^{(2)} = a_3^{(2)} \\quad \\text{and} \\quad \\frac{\\partial J}{\\partial W_{1j}^{(1)}} = \\frac{\\partial J}{\\partial W_{2j}^{(1)}} = \\frac{\\partial J}{\\partial W_{3j}^{(1)}}',
          latexSecondary: '\\text{Solution: Initialize } \\Theta_{ij} \\sim \\mathcal{U}(-\\epsilon, \\epsilon) \\quad \\text{or} \\quad \\mathcal{N}\\left(0, \\frac{2}{n_{\\text{in}}}\\right)',
          explanationEn: 'If weights are initialized to zero, every hidden neuron receives identical inputs, computes identical activations, and receives identical backpropagated gradients, permanently locking them in lockstep synchronization.',
          explanationKh: 'ប្រសិនបើទម្ងន់ចាប់ផ្តើមស្មើ ០ ណឺរ៉ូនលាក់ទាំងអស់នឹងទទួលបានធាតុបញ្ចូលដូចគ្នា គណនាសកម្មភាពដូចគ្នា និងទទួលក្រាដ្យង់ដូចគ្នាទាំងស្រុង ដែលធ្វើឱ្យពួកវាមិនអាចរៀនលក្ខណៈផ្សេងគ្នាបានឡើយ។',
          variables: [
            { symbol: 'W_{ij}^{(l)} = 0', meaningEn: 'Zero initial weight assignment', meaningKh: 'ការកំណត់ទម្ងន់ដំបូងស្មើ ០', role: 'Flawed Initialization' },
            { symbol: 'a_1^{(2)} = a_2^{(2)}', meaningEn: 'Identical hidden activations collapsing model expressive capacity', meaningKh: 'តម្លៃសកម្មភាពស្មើគ្នាដែលបំផ្លាញសមត្ថភាពបណ្តាញ', role: 'Symmetry Pathology' },
            { symbol: '\\epsilon', meaningEn: 'Small random perturbation radius', meaningKh: 'ដែនកំណត់តម្លៃចៃដន្យតូចមួយដើម្បីបំបែកស៊ីមេទ្រី', role: 'Symmetry Breaker' },
            { symbol: 'n_{\\text{in}}', meaningEn: 'Fan-in: number of incoming connections to the layer', meaningKh: 'ចំនួនតំណភ្ជាប់ធាតុបញ្ចូលមកកាន់ស្រទាប់', role: 'He / Xavier Scaler' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Button Group',
        fieldName: 'Init_Method_Selector',
        controlLabelEn: 'Select Initialization Scheme',
        controlLabelKh: 'ជ្រើសរើសវិធីសាស្ត្រកំណត់តម្លៃទម្ងន់ដំបូង',
        defaultValue: 'Zero Initialization (Flawed)',
        options: ['Zero Initialization (Flawed / មានកំហុស)', 'Random Uniform [-ε, +ε]', 'He / Xavier Normal Distribution'],
        purposeEn: 'Toggles between identical cloned weight paths and divergent symmetry-broken features.',
        purposeKh: 'បិទបើករវាងទម្ងន់ដែលចម្លងគ្នាដូចបេះបិទ និងទម្ងន់ចៃដន្យដែលបំបែកភាពស៊ីមេទ្រី។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Parameter Initialization:',
          'Zero Initialization Problem: If all weights start at zero, every hidden unit calculates the exact same activation a1^(2) = a2^(2) = a3^(2).',
          'After each update, parameters corresponding to inputs going into each of the hidden units remain identical.',
          'SOLUTION: Random Initialization (Symmetry Breaking).',
          'Initialize each Θ_ij to a small random value in [-ε, ε], allowing different neurons to specialize in distinct features.'
        ],
        kh: [
          'ការកំណត់តម្លៃដំបូងនៃប៉ារ៉ាម៉ែត្រ (Parameter Initialization)៖',
          'បញ្ហានៃការកំណត់ទម្ងន់ស្មើ ០ (Zero Initialization)៖ ប្រសិនបើទម្ងន់ទាំងអស់ស្មើ ០ នោះណឺរ៉ូនលាក់ទាំងអស់នឹងគណនាលទ្ធផលដូចគ្នាទាំងស្រុង a1^(2) = a2^(2) = a3^(2)។',
          'បន្ទាប់ពីការធ្វើបច្ចុប្បន្នភាពនីមួយៗ ប៉ារ៉ាម៉ែត្រទាំងអស់នៅតែមានតម្លៃស្មើគ្នាជានិច្ច គ្មានការផ្លាស់ប្តូរឡើយ។',
          'ដំណោះស្រាយ៖ ការកំណត់តម្លៃចៃដន្យ (Symmetry Breaking)។',
          'កំណត់តម្លៃ Θ_ij នីមួយៗជាតម្លៃចៃដន្យតូចៗក្នុងចន្លោះ [-ε, ε] ដើម្បីឱ្យណឺរ៉ូននីមួយៗអាចរៀនសូត្រលក្ខណៈពិសេសដាច់ដោយឡែកពីគ្នា។'
        ]
      },
      deepDiveExplanation: {
        en: 'In linear models like Logistic Regression, initializing weights to zero is perfectly fine because the cost function is convex and has a single global minimum. However, in neural networks with hidden layers, zero weights create a catastrophic permutation symmetry. Since each hidden unit computes identical forward values and receives identical backpropagated gradients, they will forever update identically. Random initialization "breaks" this symmetry, allowing gradient descent to explore distinct dimensions in feature space.',
        kh: 'នៅក្នុងគំរូលីនេអ៊ែរដូចជា Logistic Regression ការកំណត់ទម្ងន់ស្មើ ០ មិនមានបញ្ហាឡើយ ពីព្រោះអនុគមន៍ចំណាយជារាងប៉ោង (Convex) ដែលមានចំណុចអប្បបរមាតែមួយ។ ប៉ុន្តែនៅក្នុងបណ្តាញណឺរ៉ូនដែលមានស្រទាប់លាក់ ទម្ងន់សូន្យបង្កឱ្យមានបញ្ហាស៊ីមេទ្រីធ្ងន់ធ្ងរ។ ដោយសារណឺរ៉ូនលាក់នីមួយៗគណនាលទ្ធផលទៅមុខដូចគ្នា និងទទួលក្រាដ្យង់ថយក្រោយដូចគ្នា ពួកវានឹងធ្វើបច្ចុប្បន្នភាពទម្ងន់ដូចគ្នារហូត។ ការចាប់ផ្តើមដោយតម្លៃចៃដន្យជួយ "បំបែកភាពស៊ីមេទ្រី" នេះ ដែលអនុញ្ញាតឱ្យ Gradient Descent ស្វែងរកលក្ខណៈប្លែកៗគ្នា។'
      },
      practicalApplication: {
        titleEn: 'Large Multimodal Vision Model Pretraining',
        titleKh: 'ការហ្វឹកហាត់គំរូ AI ពហុទម្រង់ចក្ខុវិញ្ញាណខ្នាតធំ',
        scenarioEn: 'Training vision backbones with He/Kaiming initialization to ensure stable activation variance across 50+ residual blocks.',
        scenarioKh: 'ការហ្វឹកហាត់បណ្តាញចក្ខុវិញ្ញាណជាមួយ He Initialization ដើម្បីរក្សាស្ថិរភាពវ៉ារ្យង់នៃសកម្មភាពកាត់តាមជាង ៥០ ស្រទាប់។',
        businessImpactEn: 'Eliminates model training divergence on day 1 of a multi-million-dollar cluster compute run.',
        businessImpactKh: 'ការពារការខូចខាត និងការគាំងបណ្តាញនៅថ្ងៃដំបូងនៃការហ្វឹកហាត់លើម៉ាស៊ីន Supercomputer តម្លៃរាប់លានដុល្លារ។'
      }
    },
    interactiveType: 'weight_init'
  },

  // SLIDE 16
  {
    id: 16,
    slideNumber: 16,
    category: 'Training & Loss',
    englishTitle: 'Summary: The End-to-End Deep Learning Training Pipeline',
    khmerTitle: 'សង្ខេប៖ ដំណើរការពេញលេញនៃការកសាង និងហ្វឹកហាត់បណ្តាញណឺរ៉ូន',
    pageIdentity: {
      bilingualPageTitle: 'Slide 16: Summary — Building a Neural Network / សង្ខេបដំណើរការ',
      bilingualPageTitleKh: 'ជំហានទាំង ៥ និងរង្វិលជុំហ្វឹកហាត់ (Complete Training Loop Pipeline)',
      canvasSetup: 'Cyan Flow & Slate Engineering Architecture (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ខៀវភ្លឺ និងប្រផេះវិស្វកម្មស្ថាបត្យកម្ម (16:9)',
      hexPrimary: '#0284C7',
      hexSecondary: '#10B981',
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#F59E0B',
      themeRationaleEn: 'Stepwise progression flow visualizes the cyclical nature of forward pass, cost calculation, backpropagation, and parameter updating.',
      themeRationaleKh: 'លំហូរជំហានជាលំដាប់ បង្ហាញពីវដ្តនៃការបញ្ជូនទៅមុខ ការគណនាចំណាយ ការបញ្ជូនថយក្រោយ និងការកែប្រែទម្ងន់។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and 5-step master pipeline overview cards.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងកាតសង្ខេបជំហានមេទាំង ៥។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Step-by-step algorithmic breakdown: 1. Architecture, 2. Random Init, 3. Forward Pass, 4. Cost J(Θ), 5. Training Loop with Backprop ∂J/∂Θ_ij and SGD update. Right 55%: Interactive Animated Pipeline Flowchart tracing tensor movements through each stage in real time.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ ការបំបែកក្បួនដោះស្រាយតាមជំហាន៖ ១. ជ្រើសរើសស្ថាបត្យកម្ម ២. កំណត់ទម្ងន់ចៃដន្យ ៣. បញ្ជូនទៅមុខ ៤. អនុគមន៍ចំណាយ ៥. រង្វិលជុំហ្វឹកហាត់ជាមួយ Backpropagation ∂J/∂Θ_ij។ ផ្នែកខាងស្តាំ ៥៥%៖ គំនូរបំព្រួញលំហូរចលនាអន្តរកម្មតាមដានលំហូរតង់ស័រ។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_16', nameEn: 'Header & Pipeline Overview', nameKh: 'ក្បាលទំព័រ និងទិដ្ឋភាពទូទៅនៃដំណើរការ', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_16', nameEn: 'Pipeline Step Progress KPI', nameKh: 'ផ្ទាំងពិន្ទុវឌ្ឍនភាពជំហានទាំង ៥', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'stp_16', nameEn: '5-Stage Algorithmic Breakdown', nameKh: 'ការបំបែកជំហានក្បួនដោះស្រាយលម្អិត', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'flw_16', nameEn: 'Interactive Animated Training Loop Canvas', nameKh: 'ផ្ទាំងគំនូរជីវចលនៃរង្វិលជុំហ្វឹកហាត់អន្តរកម្ម', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Pipeline Phase 1: Setup', labelKh: 'ដំណាក់កាលទី ១៖ រៀបចំស្ថាបត្យកម្ម', value: 'Architecture & Random Init', tooltipEn: 'Define input, hidden, output units and break symmetry', tooltipKh: 'កំណត់ចំនួនថ្នាំង និងបំបែកភាពស៊ីមេទ្រី' },
        { labelEn: 'Pipeline Phase 2: Forward Pass', labelKh: 'ដំណាក់កាលទី ២៖ បញ្ជូនសញ្ញាទៅមុខ', value: 'h(x) & Cost J(Θ)', tooltipEn: 'Compute predictions and quantify error against ground truth', tooltipKh: 'គណនាការទស្សន៍ទាយ និងវាស់ស្ទង់កម្រិតកំហុស' },
        { labelEn: 'Pipeline Phase 3: Backward Loop', labelKh: 'ដំណាក់កាលទី ៣៖ រង្វិលជុំថយក្រោយ', value: 'Backprop ∂J/∂Θ & Update', tooltipEn: 'Calculate partial derivatives via chain rule and descend gradient', tooltipKh: 'គណនាដេរីវេដោយវិធានសង្វាក់ និងធ្វើបច្ចុប្បន្នភាពទម្ងន់' }
      ],
      chartSetup: {
        chartType: 'Process Funnel / Cyclical Sankey Diagram',
        chartTypeKh: 'ដ្យាក្រាមលំហូរដំណើរការជាវដ្ត (Cyclical Sankey)',
        dimensions: ['Pipeline_Stage (ដំណាក់កាល)', 'Operation_Type (ប្រភេទប្រតិបត្តិការ)'],
        metrics: ['Computational_FLOPs (ចំនួនប្រមាណវិធី FLOPs)', 'Memory_Footprint (ទំហំអង្គចងចាំ Memory)'],
        sortOrder: 'Pipeline_Stage ASCENDING',
        filterDefault: 'Full Cycle Active',
        chartDescriptionEn: 'Depicts the recurring loop of training: Forward Pass consumes 1x FLOPs, while Backpropagation consumes 2x FLOPs.',
        chartDescriptionKh: 'បង្ហាញវដ្តនៃការហ្វឹកហាត់៖ ការបញ្ជូនទៅមុខស៊ីកម្លាំង 1x FLOPs រីឯការបញ្ជូនថយក្រោយស៊ីកម្លាំង 2x FLOPs។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Gradient Descent Parameter Update Rule',
          formulaNameKh: 'វិធានធ្វើបច្ចុប្បន្នភាពប៉ារ៉ាម៉ែត្រតាម Gradient Descent',
          latex: '\\Theta_{ij}^{(l)} := \\Theta_{ij}^{(l)} - \\alpha \\frac{\\partial}{\\partial \\Theta_{ij}^{(l)}} J(\\Theta)',
          explanationEn: 'Every weight parameter is updated by stepping in the opposite direction of the partial derivative of cost J(Θ), scaled by the learning rate α.',
          explanationKh: 'ប៉ារ៉ាម៉ែត្រទម្ងន់នីមួយៗត្រូវបានកែប្រែដោយការបោះជំហានក្នុងទិសដៅផ្ទុយពីដេរីវេដោយផ្នែកនៃចំណាយ J(Θ) គុណនឹងអត្រារៀនសូត្រ α។',
          variables: [
            { symbol: '\\Theta_{ij}^{(l)}', meaningEn: 'Weight connecting node j in layer l to node i in layer l+1', meaningKh: 'ទម្ងន់តភ្ជាប់ពីថ្នាំង j ក្នុងស្រទាប់ l ទៅកាន់ថ្នាំង i ក្នុងស្រទាប់ l+1', role: 'Parameter' },
            { symbol: ':=', meaningEn: 'Assignment operator updating the weight value', meaningKh: 'សញ្ញាកំណត់តម្លៃបច្ចុប្បន្នភាពថ្មី', role: 'Update' },
            { symbol: '\\alpha', meaningEn: 'Learning rate hyperparameter controlling step size', meaningKh: 'អត្រារៀនសូត្រ (Learning Rate) កំណត់ទំហំជំហាន', role: 'Step Size' },
            { symbol: '\\frac{\\partial J}{\\partial \\Theta}', meaningEn: 'Partial derivative calculated efficiently via backpropagation', meaningKh: 'ដេរីវេដោយផ្នែកដែលគណនាតាមរយៈ Backpropagation', role: 'Gradient Vector' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Dropdown',
        fieldName: 'Active_Pipeline_Phase',
        controlLabelEn: 'Step Through Training Pipeline',
        controlLabelKh: 'ពិនិត្យជំហាននីមួយៗនៃការហ្វឹកហាត់',
        defaultValue: 'All 5 Steps',
        options: ['All 5 Steps (ជំហានទាំង ៥)', 'Step 1: Architecture Selection', 'Step 2: Random Initialization', 'Step 3: Forward Pass & Cost J(Θ)', 'Step 4: Backpropagation', 'Step 5: Parameter Update'],
        purposeEn: 'Walks students through the exact sequence of engineering execution.',
        purposeKh: 'បង្ហាញសិស្សនូវលំដាប់លំដោយជាក់ស្តែងនៃការអនុវត្តកូដ។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Summary: Building a Neural Network:',
          '1. Pick a network architecture (choose number of input, hidden, and output units).',
          '2. Randomly initialize parameters (break symmetry using [-ε, ε]).',
          '3. Implement forward propagation to compute hypothesis h(x).',
          '4. Implement cost function J(Θ).',
          '5. Minimize J(Θ) via the TRAINING LOOP:',
          '   - Perform forward propagation.',
          '   - Compute scalar cost J(Θ).',
          '   - Use backpropagation to compute partial derivatives ∂J/∂Θ_ij.',
          '   - Update parameters: Θ := Θ - α * ∂J/∂Θ.'
        ],
        kh: [
          'សង្ខេប៖ ដំណើរការកសាងបណ្តាញណឺរ៉ូន (Building a Neural Network)៖',
          '១. ជ្រើសរើសស្ថាបត្យកម្មបណ្តាញ (កំណត់ចំនួនថ្នាំងបញ្ចូល ថ្នាំងលាក់ និងថ្នាំងបញ្ចេញ)។',
          '២. កំណត់តម្លៃប៉ារ៉ាម៉ែត្រដំបូងដោយចៃដន្យ (បំបែកភាពស៊ីមេទ្រីដោយប្រើចន្លោះ [-ε, ε])។',
          '៣. អនុវត្តការបញ្ជូនទៅមុខ (Forward Propagation) ដើម្បីគណនាសម្មតិកម្ម h(x)។',
          '៤. អនុវត្តអនុគមន៍ចំណាយ J(Θ)។',
          '៥. បង្រួម J(Θ) ឱ្យតូចបំផុតតាមរយៈរង្វិលជុំហ្វឹកហាត់ (TRAINING LOOP)៖',
          '   - ដំណើរការ Forward Propagation។',
          '   - គណនាតម្លៃចំណាយ J(Θ)។',
          '   - ប្រើ Backpropagation ដើម្បីគណនាដេរីវេដោយផ្នែក ∂J/∂Θ_ij។',
          '   - ធ្វើបច្ចុប្បន្នភាពប៉ារ៉ាម៉ែត្រ៖ Θ := Θ - α * ∂J/∂Θ។'
        ]
      },
      deepDiveExplanation: {
        en: 'This slide functions as the definitive conceptual blueprint for deep learning practitioners. Every machine learning framework—from simple NumPy scripts to enterprise PyTorch and TensorFlow systems—implements this exact 5-step blueprint. Understanding the separation between structural initialization (executed once) and iterative gradient optimization (executed millions of times in the training loop) provides the foundation for building production-grade AI pipelines.',
        kh: 'ស្លាយនេះដើរតួជាប្លង់មេគំនិតដ៏ច្បាស់លាស់បំផុតសម្រាប់អ្នកអនុវត្ត AI ទាំងអស់។ គ្រប់កម្មវិធី Machine Learning—ចាប់ពីកូដ NumPy សាមញ្ញ រហូតដល់ប្រព័ន្ធ PyTorch និង TensorFlow ក្នុងក្រុមហ៊ុនធំៗ—សុទ្ធតែអនុវត្តតាមជំហានទាំង ៥ នេះដូចគ្នាទាំងអស់។ ការយល់ដឹងច្បាស់ពីការបែងចែករវាងការរៀបចំស្ថាបត្យកម្មដំបូង (ធ្វើតែម្តងគត់) និងរង្វិលជុំហ្វឹកហាត់ស្វែងរកអប្បបរមា (ដំណើរការរាប់លានដង) គឺជាគ្រឹះដ៏រឹងមាំសម្រាប់បង្កើតប្រព័ន្ធ AI កម្រិតឧស្សាហកម្ម។'
      },
      practicalApplication: {
        titleEn: 'Enterprise MLOps Automated Training Pipeline',
        titleKh: 'ប្រព័ន្ធស្វ័យប្រវត្តិកម្ម MLOps សម្រាប់ការហ្វឹកហាត់គំរូ AI ក្នុងសហគ្រាស',
        scenarioEn: 'A retail recommendation engine executes this exact pipeline nightly on 50 million user clicks to retrain product rankings.',
        scenarioKh: 'ប្រព័ន្ធណែនាំផលិតផលពាណិជ្ជកម្មអេឡិចត្រូនិច ដំណើរការតាមជំហានទាំង ៥ នេះជារៀងរាល់យប់លើទិន្នន័យចុច ៥០ លានដង ដើម្បីរៀបចំចំណាត់ថ្នាក់ផលិតផលឡើងវិញ។',
        businessImpactEn: 'Drives a 16.8% increase in average order value through continuous automated model synchronization.',
        businessImpactKh: 'បង្កើនតម្លៃទិញជាមធ្យមរបស់អតិថិជនបាន ១៦.៨% តាមរយៈការធ្វើបច្ចុប្បន្នភាពគំរូ AI ដោយស្វ័យប្រវត្តិជាប្រចាំ។'
      }
    },
    interactiveType: 'training_pipeline'
  },

  // SLIDE 17
  {
    id: 17,
    slideNumber: 17,
    category: 'Optimization',
    englishTitle: 'Mini-Batch Gradient Descent vs Batch GD & Stochastic GD (SGD)',
    khmerTitle: 'វិធីសាស្ត្រ Gradient Descent បែប Mini-Batch, Batch និង Stochastic (SGD)',
    pageIdentity: {
      bilingualPageTitle: 'Slide 17: Mini-Batch Gradient Descent / Mini-Batch GD',
      bilingualPageTitleKh: 'ជម្រើសទាំង ៣ នៃ Gradient Descent៖ Batch vs Stochastic vs Mini-Batch',
      canvasSetup: 'Performance Indigo & Neon Amber Batch Partitions (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ស្វាយ Indigo និងពណ៌លឿងទុំបង្ហាញបំណែកបាច់ (16:9)',
      hexPrimary: '#6366F1',
      hexSecondary: '#F59E0B',
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#10B981',
      themeRationaleEn: 'Visual partitioning bars clearly illustrate dividing the total m training examples into manageable mini-batches of size B.',
      themeRationaleKh: 'របារបែងចែកយ៉ាងច្បាស់ បង្ហាញពីការកាត់ទិន្នន័យសរុប m ទៅជាបំណែកបាច់តូចៗទំហំ B ដើម្បីងាយស្រួលគណនា។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and 3 variants comparison badge (Batch vs Stochastic vs Mini-batch).',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងស្លាកប្រៀបធៀបជម្រើសទាំង ៣ នៃ Gradient Descent។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Comparative analysis table comparing convergence trajectory, memory bottleneck, GPU vectorization efficiency, and noise robustness. Right 55%: Interactive Gradient Descent Path Visualizer contrasting smooth slow Batch GD vs noisy erratic SGD vs optimal balanced Mini-batch GD.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ តារាងប្រៀបធៀបលម្អិតអំពីល្បឿននៃការប្រមូលផ្តុំ តម្រូវការអង្គចងចាំ ប្រសិទ្ធភាព GPU និងភាពធន់នឹងសំឡេងរំខាន។ ផ្នែកខាងស្តាំ ៥៥%៖ ក្រាហ្វអន្តរកម្មបង្ហាញផ្លូវដើរនៃ Batch GD (រលូនតែយឺត) SGD (រង្គោះរង្គើ) និង Mini-batch GD (តុល្យភាពល្អឥតខ្ចោះ)។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_17', nameEn: 'Header & 3-Variant Pill', nameKh: 'ក្បាលទំព័រ និងស្លាកជម្រើសទាំង ៣', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_17', nameEn: 'Batch Tradeoff Metric Grid', nameKh: 'ផ្ទាំងពិន្ទុគុណសម្បត្តិ និងគុណវិបត្តិនៃបាច់', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'tbl_17', nameEn: 'Batch Comparison Matrix Table', nameKh: 'តារាងប្រៀបធៀបលក្ខណៈបច្ចេកទេសបាច់', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Chart' },
        { id: 'sim_17', nameEn: 'Interactive Trajectory Contour Visualizer', nameKh: 'ក្រាហ្វកម្រិតខ្សែស្របអន្តរកម្មបង្ហាញផ្លូវដើរ GD', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Batch GD (Entire Dataset)', labelKh: 'Batch GD (ទិន្នន័យទាំងមូល m)', value: '1 Update per Epoch', tooltipEn: 'Smooth convergence but out-of-memory on large data', tooltipKh: 'ផ្លូវដើររលូន ប៉ុន្តែស្ទះអង្គចងចាំពេលទិន្នន័យធំ' },
        { labelEn: 'Stochastic GD (Single Sample)', labelKh: 'Stochastic GD (ទិន្នន័យម្តងមួយៗ)', value: 'm Updates per Epoch', tooltipEn: 'Fast updates but excessively noisy oscillations', tooltipKh: 'កែទម្ងន់ញឹកញាប់ ប៉ុន្តែរង្គោះរង្គើខ្លាំងពេក' },
        { labelEn: 'Mini-Batch GD (Golden Balance)', labelKh: 'Mini-Batch GD (តុល្យភាពល្អបំផុត)', value: 'Batch Size = 32 - 512', tooltipEn: 'Combines vector GPU parallelization with noise escape', tooltipKh: 'ទាញយកប្រយោជន៍ GPU ពេញលេញ និងជួយឱ្យរត់ផុតពី Local Minima' }
      ],
      chartSetup: {
        chartType: 'Loss vs Training Steps Contour & Step Bar Chart',
        chartTypeKh: 'ក្រាហ្វខ្សែស្រប Loss ធៀបនឹងជំហានហ្វឹកហាត់',
        dimensions: ['Batch_Method (វិធីសាស្ត្រ GD)', 'Epoch_Step (ជំហាន Epoch)'],
        metrics: ['Memory_Usage_GB (ការប្រើប្រាស់អង្គចងចាំ)', 'Time_Per_Epoch_Sec (ពេលវេលាក្នុងមួយ Epoch)', 'Final_Loss_Value (តម្លៃ Loss ចុងក្រោយ)'],
        sortOrder: 'Time_Per_Epoch_Sec ASCENDING',
        filterDefault: 'All 3 Variants',
        chartDescriptionEn: 'Contrasts the three gradient descent trajectories on a 2D loss surface to highlight why Mini-batch GD is universally preferred.',
        chartDescriptionKh: 'ប្រៀបធៀបផ្លូវដើរទាំងបីនៃ Gradient Descent លើផ្ទៃ Loss 2D ដើម្បីបង្ហាញពីមូលហេតុដែល Mini-batch GD ត្រូវបានគេពេញនិយមទូទាំងពិភពលោក។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Mini-Batch Gradient Estimate',
          formulaNameKh: 'ការប៉ាន់ស្មានក្រាដ្យង់តាម Mini-Batch',
          latex: 'g_t = \\frac{1}{B} \\sum_{i \\in \\mathcal{B}_t} \\nabla_\\theta \\mathcal{L}_i(\\theta), \\quad \\theta_{t+1} = \\theta_t - \\alpha g_t',
          explanationEn: 'Instead of summing over all m samples or just 1 sample, we average gradients over a compact subset B_t of size B (e.g., 32, 64, 128, 256).',
          explanationKh: 'ជំនួសឱ្យការបូកសរុបលើទិន្នន័យទាំងអស់ m ឬទិន្នន័យតែមួយ យើងគិតជាមធ្យមលើបណ្តុំទិន្នន័យតូច B_t ដែលមានទំហំ B (ដូចជា ៣២, ៦៤, ១២៨, ២៥៦)។',
          variables: [
            { symbol: '\\mathcal{B}_t', meaningEn: 'Mini-batch subset of indices sampled at step t', meaningKh: 'បណ្តុំទិន្នន័យតូចដែលជ្រើសរើសនៅជំហាន t', role: 'Subset' },
            { symbol: 'B', meaningEn: 'Batch size hyperparameter (powers of 2: 32, 64, 128)', meaningKh: 'ទំហំបាច់ (ជាទូទៅជ្រើសរើសស្វ័យគុណនៃ ២៖ ៣២, ៦៤, ១២៨)', role: 'Batch Size' },
            { symbol: 'g_t', meaningEn: 'Unbiased stochastic estimate of true population gradient', meaningKh: 'តម្លៃប៉ាន់ស្មានមិនលម្អៀងនៃក្រាដ្យង់ពិត', role: 'Gradient Estimate' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Dropdown',
        fieldName: 'Batch_Size_Selector',
        controlLabelEn: 'Select Batch Size (B)',
        controlLabelKh: 'ជ្រើសរើសទំហំបាច់ (B)',
        defaultValue: 'Mini-batch (B = 64)',
        options: ['Batch GD (B = m = 10,000)', 'Stochastic GD (B = 1)', 'Mini-batch (B = 32)', 'Mini-batch (B = 64)', 'Mini-batch (B = 256)'],
        purposeEn: 'Simulates the path smoothness and compute speed trade-offs across different batch sizes.',
        purposeKh: 'បង្ហាញតុល្យភាពរវាងភាពរលូននៃផ្លូវដើរ និងល្បឿនគណនាតាមទំហំបាច់ផ្សេងៗគ្នា។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Mini-batch Gradient Descent:',
          '3 variants of gradient descent:',
          '1. Batch GD: Updates parameters after traversing all training examples (1 full epoch per update). Very slow on big data.',
          '2. Stochastic GD (SGD): Updates parameters after each individual training example. Fast updates, but extremely noisy path.',
          '3. Mini-batch GD: Updates parameters after a small batch of training examples (e.g., 32, 64). One epoch contains multiple mini-batches.'
        ],
        kh: [
          'វិធីសាស្ត្រ Mini-batch Gradient Descent៖',
          'ជម្រើសទាំង ៣ នៃ Gradient Descent៖',
          '១. Batch GD៖ ធ្វើបច្ចុប្បន្នភាពប៉ារ៉ាម៉ែត្របន្ទាប់ពីគណនាទិន្នន័យទាំងអស់ចប់ (១ epoch កែទម្ងន់ម្តង)។ យឺតខ្លាំងពេលទិន្នន័យធំ។',
          '២. Stochastic GD (SGD)៖ ធ្វើបច្ចុប្បន្នភាពប៉ារ៉ាម៉ែត្របន្ទាប់ពីទិន្នន័យមួយៗ។ កែប្រែទម្ងន់ញឹកញាប់ ប៉ុន្តែផ្លូវដើររង្គោះរង្គើខ្លាំង។',
          '៣. Mini-batch GD៖ ធ្វើបច្ចុប្បន្នភាពប៉ារ៉ាម៉ែត្របន្ទាប់ពីទិន្នន័យមួយបាច់តូច (ដូចជា ៣២, ៦៤)។ ក្នុង ១ epoch មាន mini-batches ជាច្រើន។'
        ]
      },
      deepDiveExplanation: {
        en: 'Mini-batch Gradient Descent is the undisputed industry standard for deep learning. Batch GD cannot fit modern datasets (like ImageNet with millions of photos) into GPU memory (VRAM). On the other hand, pure SGD cannot leverage GPU parallel tensor cores (SIMD parallelism) because processing 1 sample leaves 99% of compute cores idle. Mini-batch sizes tuned to powers of 2 (32, 64, 128, 256) saturate GPU hardware while injecting just enough gradient noise to escape shallow local minima and saddle points.',
        kh: 'Mini-batch Gradient Descent គឺជាស្តង់ដារឧស្សាហកម្មដែលមិនអាចប្រកែកបានសម្រាប់ Deep Learning។ Batch GD មិនអាចផ្ទុកទិន្នន័យរាប់លានក្នុងអង្គចងចាំ GPU (VRAM) បានឡើយ។ ម្យ៉ាងវិញទៀត SGD សុទ្ធ (B=1) មិនអាចទាញយកផលប្រយោជន៍ពីស្នូលស្របគ្នារបស់ GPU បានទេ ពីព្រោះការគណនាទិន្នន័យម្តងមួយៗទុកឱ្យស្នូល GPU ៩៩% នៅទំនេរ។ ការជ្រើសរើសទំហំ Mini-batch ជាស្វ័យគុណនៃ ២ (៣២, ៦៤, ១២៨, ២៥៦) ដំណើរការស្នូល GPU ពេញសមត្ថភាព ព្រមទាំងផ្តល់សំឡេងរំខានបន្តិចបន្តួចដែលជួយរុញទម្ងន់ឱ្យរត់ផុតពីចំណុចអប្បបរមាក្នុងតំបន់ (Local Minima)។'
      },
      practicalApplication: {
        titleEn: 'Distributed GPU Cluster Training (DDP)',
        titleKh: 'ការហ្វឹកហាត់បណ្តាញ AI លើប្រព័ន្ធកុំព្យូទ័រ GPU ចែកចាយ (DDP)',
        scenarioEn: 'Training an autonomous driving perception network across 8 NVIDIA A100 GPUs using a global mini-batch size of 512 (64 per GPU).',
        scenarioKh: 'ការហ្វឹកហាត់ប្រព័ន្ធចាប់រូបភាពរថយន្តស្វ័យប្រវត្តលើ GPU NVIDIA A100 ចំនួន ៨ គ្រាប់ ដោយប្រើទំហំ Mini-batch សរុប ៥១២ (៦៤ ក្នុងមួយ GPU)។',
        businessImpactEn: 'Compresses multi-week model training runs into under 14 hours with 98.4% linear scaling efficiency.',
        businessImpactKh: 'បង្រួមពេលវេលាហ្វឹកហាត់ពីច្រើនសប្តាហ៍មកត្រឹមក្រោម ១៤ ម៉ោង ជាមួយប្រសិទ្ធភាពពង្រីក ៩៨.៤%។'
      }
    },
    interactiveType: 'minibatch'
  },

  // SLIDE 18
  {
    id: 18,
    slideNumber: 18,
    category: 'Optimization',
    englishTitle: 'Advanced Optimizers: Gradient Descent Oscillations & Momentum',
    khmerTitle: 'អុបទិមៃស័រជាន់ខ្ពស់៖ បញ្ហារង្គោះរង្គើនៃ GD និងដំណោះស្រាយ Momentum',
    pageIdentity: {
      bilingualPageTitle: 'Slide 18: Optimizer — Momentum / អុបទិមៃស័រ Momentum',
      bilingualPageTitleKh: 'បញ្ហារង្គោះរង្គើនៃ Gradient Descent និងអុបទិមៃស័រ Momentum (β = 0.9)',
      canvasSetup: 'Kinetic Cyan & Tangerine Acceleration Theme (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ខៀវចលនការ និងពណ៌ទឹកក្រូចរំកិលល្បឿន (16:9)',
      hexPrimary: '#0284C7',
      hexSecondary: '#F97316',
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#10B981',
      themeRationaleEn: 'Kinetic cyan tracks physical velocity accumulation down ravines while contrasting orange plots wasteful standard GD oscillations.',
      themeRationaleKh: 'ពណ៌ខៀវតំណាងឱ្យការប្រមូលផ្តុំល្បឿនចុះតាមជ្រលងភ្នំ រីឯពណ៌ទឹកក្រូចបង្ហាញការរង្គោះរង្គើឥតប្រយោជន៍នៃ GD ធម្មតា។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and Momentum update equations with hyperparameter badge β = 0.9.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា រូបមន្ត Momentum និងស្លាកប៉ារ៉ាម៉ែត្រកំពូល β = 0.9។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Physical heavy-ball analogy (accumulating momentum down steep ravines while cancelling orthogonal oscillations), equation dictionary, and hyperparameter β tuning guide. Right 55%: Interactive 2D Ravine Contour Simulator demonstrating standard GD zigzagging vs Momentum sailing smoothly straight to the minimum.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ ការប្រៀបធៀបរូបវិទ្យាដូចបាល់ធ្លាក់ពីលើភ្នំ (បង្កើនល្បឿនតាមជ្រលង និងលុបបំបាត់ការរង្គោះរង្គើទទឹង) វចនានុក្រមរូបមន្ត និងការកំណត់ β។ ផ្នែកខាងស្តាំ ៥៥%៖ ក្រាហ្វអន្តរកម្មជ្រលងភ្នំ 2D បង្ហាញ GD ធម្មតារត់ zigzag ខាតពេល ខណៈ Momentum រត់សំដៅទៅចំណុចកណ្តាលយ៉ាងរលូន។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_18', nameEn: 'Header & Momentum Formula', nameKh: 'ក្បាលទំព័រ និងរូបមន្ត Momentum', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_18', nameEn: 'Momentum Efficiency KPIs', nameKh: 'ផ្ទាំងពិន្ទុប្រសិទ្ធភាព Momentum', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'phy_18', nameEn: 'Heavy Ball Physics Breakdown', nameKh: 'ការវិភាគទ្រឹស្តីរូបវិទ្យាបាល់ធ្លាក់តាមជម្រាល', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'cnt_18', nameEn: 'Interactive Ravine Contour Simulator', nameKh: 'ក្រាហ្វជ្រលងភ្នំអន្តរកម្មប្រៀបធៀប GD និង Momentum', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Momentum Constant (β)', labelKh: 'ប៉ារ៉ាម៉ែត្រ Momentum (β)', value: 'β = 0.9 (Standard)', tooltipEn: 'Weights velocity: averages over last 1/(1-β) = 10 steps', tooltipKh: 'គិតជាមធ្យមនៃជំហានចំនួន ១០ កន្លងមក' },
        { labelEn: 'Oscillation Damping', labelKh: 'ការទប់ស្កាត់ការរង្គោះរង្គើ', value: 'Up to 80% Reduction', tooltipEn: 'Cancels contradictory gradient fluctuations along steep ravines', tooltipKh: 'លុបបំបាត់ការប្រែប្រួលទិសដៅផ្ទុយគ្នាតាមជ្រលងចោត' },
        { labelEn: 'Ravine Speedup Factor', labelKh: 'កម្រិតបង្កើនល្បឿនតាមជ្រលង', value: '3x - 5x Faster Convergence', tooltipEn: 'Maintains velocity along consistent downward descent directions', tooltipKh: 'រក្សាល្បឿនលឿនឆ្ពោះទៅកាន់គោលដៅអប្បបរមា' }
      ],
      chartSetup: {
        chartType: 'Elliptical Contour Plot & Optimization Trajectory',
        chartTypeKh: 'ក្រាហ្វកម្រិតខ្សែស្របរាងអេលីប និងគន្លងផ្លូវអុបទិមៃស័រ',
        dimensions: ['Parameter_Theta_1 (ប៉ារ៉ាម៉ែត្រ 1)', 'Parameter_Theta_2 (ប៉ារ៉ាម៉ែត្រ 2)'],
        metrics: ['Standard_GD_Cost_Path', 'Momentum_GD_Cost_Path'],
        sortOrder: 'Parameter_Theta_1 ASCENDING',
        filterDefault: 'Ravine Ratio 10:1',
        chartDescriptionEn: 'Demonstrates how standard GD wastefully oscillates across steep ravine walls, while Momentum dampens oscillations and speeds down the flat floor.',
        chartDescriptionKh: 'បង្ហាញពីរបៀបដែល GD ធម្មតារង្គោះរង្គើខាតពេលលើជញ្ជាំងជ្រលងចោត ខណៈ Momentum ទប់រំញ័រ និងរត់យ៉ាងលឿនតាមបាតជ្រលង។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Momentum Optimizer Formulation',
          formulaNameKh: 'រូបមន្តគណិតវិទ្យានៃអុបទិមៃស័រ Momentum',
          latex: 'v_\\theta = \\beta v_\\theta + (1 - \\beta) \\nabla_\\theta J(\\theta)',
          latexSecondary: '\\theta := \\theta - \\alpha v_\\theta',
          explanationEn: 'Instead of directly stepping along the raw instantaneous gradient, Momentum computes an exponentially decaying moving average of past gradients (velocity v_θ), accelerating progress in constant directions.',
          explanationKh: 'ជំនួសឱ្យការបោះជំហានតាមក្រាដ្យង់បច្ចុប្បន្នផ្ទាល់ Momentum គណនាមធ្យមភាគផ្លាស់ប្តូរអិចស្ប៉ូណង់ស្យែលនៃក្រាដ្យង់កន្លងមក (ល្បឿន v_θ) ដើម្បីបង្កើនល្បឿនឆ្ពោះទៅមុខ។',
          variables: [
            { symbol: 'v_\\theta', meaningEn: 'Velocity vector accumulating past gradient momentum', meaningKh: 'វ៉ិចទ័រល្បឿនដែលប្រមូលផ្តុំកម្លាំងក្រាដ្យង់កន្លងមក', role: 'Velocity State' },
            { symbol: '\\beta', meaningEn: 'Momentum decay hyperparameter (typically 0.9)', meaningKh: 'ប៉ារ៉ាម៉ែត្រពន្លត់ល្បឿន Momentum (ជាទូទៅ 0.9)', role: 'Friction Coefficient' },
            { symbol: '1 - \\beta', meaningEn: 'Weight given to the newly observed gradient', meaningKh: 'ទម្ងន់ដែលផ្តល់ឱ្យក្រាដ្យង់ដែលទើបតែទទួលបានថ្មី', role: 'Gradient Weight' },
            { symbol: '\\alpha', meaningEn: 'Learning rate scaling velocity step size', meaningKh: 'អត្រារៀនសូត្រកំណត់ទំហំជំហាននៃល្បឿន', role: 'Learning Rate' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Metric Slider',
        fieldName: 'Beta_Momentum_Slider',
        controlLabelEn: 'Tune Beta Parameter (β)',
        controlLabelKh: 'កែសម្រួលប៉ារ៉ាម៉ែត្រ Beta (β)',
        defaultValue: '0.90',
        min: 0.0,
        max: 0.99,
        step: 0.05,
        purposeEn: 'Setting β=0 reduces to standard GD; setting β=0.99 creates ultra-heavy ball dynamics.',
        purposeKh: 'កំណត់ β=0 ក្លាយជា GD ធម្មតា; កំណត់ β=0.99 បង្កើតកម្លាំងរំកិលដ៏ខ្លាំងក្លា។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Optimizer — The Problem with Standard Gradient Descent:',
          '1. Standard GD: θ = θ - α * grad_θ.',
          'In ravine-shaped loss surfaces (very common in neural networks), standard GD violently oscillates back and forth across the steep dimension while making painfully slow progress along the flat optimum direction.',
          '2. Momentum Formulation:',
          'v_θ = β * v_θ + (1 - β) * grad_θ',
          'θ = θ - α * v_θ',
          '3. Hyperparameter: Introduces one new hyperparameter β (β = 0.9 in practice, representing a moving average over ~10 past gradients).'
        ],
        kh: [
          'អុបទិមៃស័រ — បញ្ហារបស់ Gradient Descent ធម្មតា៖',
          '១. GD ធម្មតា៖ θ = θ - α * grad_θ។',
          'នៅលើផ្ទៃ Loss ដែលមានរាងដូចជ្រលងភ្នំ (កើតមានញឹកញាប់បំផុតក្នុងបណ្តាញណឺរ៉ូន) GD ធម្មតារង្គោះរង្គើរត់ចុះឡើងៗកាត់ទទឹងជ្រលងចោត ខណៈពេលដែលរំកិលទៅមុខយឺតយ៉ាវបំផុតតាមបាតជ្រលង។',
          '២. រូបមន្ត Momentum៖',
          'v_θ = β * v_θ + (1 - β) * grad_θ',
          'θ = θ - α * v_θ',
          '៣. ប៉ារ៉ាម៉ែត្រកំពូល៖ បន្ថែមប៉ារ៉ាម៉ែត្រកំពូលថ្មីមួយគឺ β (ក្នុងការអនុវត្តជាក់ស្តែង β = 0.9 តំណាងឱ្យមធ្យមភាគផ្លាស់ប្តូរនៃក្រាដ្យង់ប្រហែល ១០ ជំហានកន្លងមក)។'
        ]
      },
      deepDiveExplanation: {
        en: 'Think of Momentum as rolling a heavy physical ball down a ravine. When standard GD updates weights, it has zero memory: every single step blindly follows the local slope, causing it to bounce wildly between opposing canyon walls. Momentum gives the ball physical mass. Fluctuating horizontal gradients point in opposite directions and cancel each other out to near zero, while vertical gradients pointing consistently toward the minimum accumulate momentum, propelling the ball forward at high velocity.',
        kh: 'សូមស្រមៃគិតថា Momentum ដូចជាការរមៀលបាល់ដែកធ្ងន់មួយទម្លាក់ចុះតាមជ្រលងភ្នំ។ នៅពេលដែល GD ធម្មតាកែប្រែទម្ងន់ វាមិនមានអង្គចងចាំទាល់តែសោះ៖ ជំហាននីមួយៗដើរតាមជម្រាលភ្លាមៗដោយងងឹតងងល់ ធ្វើឱ្យវាលោតបោកចុះឡើងៗរវាងច្រាំងថ្មសងខាង។ Momentum ផ្តល់ម៉ាស់រូបវិទ្យាដល់បាល់។ ក្រាដ្យង់ដែលលោតចុះឡើងក្នុងទិសផ្ទុយគ្នានឹងលុបបំបាត់គ្នាទៅវិញទៅមកសល់ជិត ០ ខណៈក្រាដ្យង់ដែលចង្អុលទៅមុខក្នុងទិសតែមួយនឹងប្រមូលផ្តុំកម្លាំង រុញបាល់ឱ្យរត់ទៅមុខយ៉ាងលឿនបំផុត។'
      },
      practicalApplication: {
        titleEn: 'Computer Vision ResNet Model Convergence',
        titleKh: 'ការពន្លឿនការហ្វឹកហាត់គំរូ ResNet ក្នុងវិស័យ Computer Vision',
        scenarioEn: 'Training a 50-layer Residual Network (ResNet-50) using SGD with Momentum (β=0.9) to navigate complex narrow loss ravines.',
        scenarioKh: 'ការហ្វឹកហាត់បណ្តាញ ResNet-50 ដោយប្រើ SGD ជាមួយ Momentum (β=0.9) ដើម្បីរុករកកាត់តាមជ្រលង Loss ដ៏ចង្អៀត។',
        businessImpactEn: 'Cuts training epochs by 65%, reaching 76.5% top-1 ImageNet validation accuracy in 4 days instead of 11 days.',
        businessImpactKh: 'កាត់បន្ថយចំនួន Epoch បាន ៦៥% ដោយសម្រេចបានភាពត្រឹមត្រូវ ៧៦.៥% ក្នុងរយៈពេលត្រឹម ៤ ថ្ងៃ ជំនួសឱ្យ ១១ ថ្ងៃ។'
      }
    },
    interactiveType: 'momentum'
  },

  // SLIDE 19
  {
    id: 19,
    slideNumber: 19,
    category: 'Optimization',
    englishTitle: 'Advanced Optimizers: RMSprop & Adam (Adaptive Moment Estimation)',
    khmerTitle: 'អុបទិមៃស័រជាន់ខ្ពស់៖ RMSprop និង Adam (ការរួមបញ្ចូលគ្នារវាង Momentum និង RMSprop)',
    pageIdentity: {
      bilingualPageTitle: 'Slide 19: Optimizer — RMSprop & Adam / RMSprop និង Adam',
      bilingualPageTitleKh: 'អុបទិមៃស័រទំនើប៖ RMSprop និងស្តេចអុបទិមៃស័រ Adam (Adaptive Moments)',
      canvasSetup: 'Electric Emerald & Royal Violet Theme (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌បៃតងអគ្គិសនី និងពណ៌ស្វាយរាជវង្ស (16:9)',
      hexPrimary: '#10B981',
      hexSecondary: '#8B5CF6',
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#38BDF8',
      themeRationaleEn: 'Emerald denotes adaptive learning rate dampening (RMSprop), while Violet represents the unified synergy of Adam.',
      themeRationaleKh: 'ពណ៌បៃតងតំណាងឱ្យការកែតម្រូវអត្រារៀនតាមទំហំក្រាដ្យង់ (RMSprop) រីឯពណ៌ស្វាយតំណាងឱ្យការរួមបញ្ចូលគ្នានៃ Adam។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and twin formulas for RMSprop S_θ and Adam unified update rule.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងរូបមន្តភ្លោះ RMSprop S_θ ព្រមទាំងរូបមន្តរួម Adam។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Algorithmic derivation showing how RMSprop divides by √S_θ to dampen steep gradients, and how Adam seamlessly integrates first moments (momentum) with second moments (RMSprop variance). Right 55%: Interactive 4-Way Optimizer Showdown Simulator (SGD vs Momentum vs RMSprop vs Adam) racing across a non-convex loss surface.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ ការពន្យល់ក្បួនដោះស្រាយបង្ហាញពីរបៀបដែល RMSprop ចែកនឹង √S_θ ដើម្បីបន្ថយក្រាដ្យង់ចោត និងរបៀបដែល Adam រួមបញ្ចូលគ្នាទាំង Momentum និង RMSprop។ ផ្នែកខាងស្តាំ ៥៥%៖ ការប្រកួតប្រជែងអន្តរកម្មរវាងអុបទិមៃស័រទាំង ៤ (SGD, Momentum, RMSprop, Adam) រត់ប្រណាំងលើផ្ទៃ Loss មិនប៉ោង។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_19', nameEn: 'Header & Adam Formula', nameKh: 'ក្បាលទំព័រ និងរូបមន្ត Adam', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_19', nameEn: 'Adam Hyperparameters KPI Row', nameKh: 'ជួរ KPI ប៉ារ៉ាម៉ែត្រ Adam', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'der_19', nameEn: 'RMSprop & Adam Theoretical Synthesis', nameKh: 'ការវិភាគទ្រឹស្តី RMSprop និង Adam', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'shw_19', nameEn: 'Interactive 4-Way Optimizer Race Simulator', nameKh: 'ម៉ាស៊ីនប្រណាំងអុបទិមៃស័រទាំង ៤ អន្តរកម្ម', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Adam Momentum Decay (β1)', labelKh: 'ប៉ារ៉ាម៉ែត្រ Momentum Adam (β1)', value: 'β1 = 0.9 (First Moment)', tooltipEn: 'Exponential decay rate for first moment estimates', tooltipKh: 'អត្រាពន្លត់សម្រាប់មធ្យមភាគទីមួយ (ទិសដៅ)' },
        { labelEn: 'Adam Variance Decay (β2)', labelKh: 'ប៉ារ៉ាម៉ែត្រ Variance Adam (β2)', value: 'β2 = 0.999 (Second Moment)', tooltipEn: 'Exponential decay rate for uncentered second moment', tooltipKh: 'អត្រាពន្លត់សម្រាប់មធ្យមភាគទីពីរ (ទំហំក្រាដ្យង់)' },
        { labelEn: 'Numeric Stability Factor (ε)', labelKh: 'កម្រិតរក្សាស្ថិរភាពលេខ (ε)', value: '10⁻⁸ (Prevents Division by 0)', tooltipEn: 'Ensures denominator never collapses to absolute zero', tooltipKh: 'ការពារកុំឱ្យភាគបែងស្មើ ០' }
      ],
      chartSetup: {
        chartType: 'Multi-Line Loss Convergence & Racing Scoreboard',
        chartTypeKh: 'ក្រាហ្វខ្សែបន្ទាត់ប្រៀបធៀបការធ្លាក់ចុះនៃ Loss របស់អុបទិមៃស័រ',
        dimensions: ['Training_Iteration (ជំហានហ្វឹកហាត់ 0 ដល់ 1000)'],
        metrics: ['SGD_Loss', 'Momentum_Loss', 'RMSprop_Loss', 'Adam_Loss'],
        sortOrder: 'Training_Iteration ASCENDING',
        filterDefault: 'All 4 Optimizers Racing',
        chartDescriptionEn: 'Demonstrates Adam outperforming predecessors by adapting learning rates per parameter while maintaining directional momentum.',
        chartDescriptionKh: 'បង្ហាញថា Adam យកឈ្នះលើអុបទិមៃស័រចាស់ៗទាំងអស់ ដោយសារវាអាចកែសម្រួលអត្រារៀនតាមប៉ារ៉ាម៉ែត្រនីមួយៗ ព្រមទាំងរក្សាល្បឿនទៅមុខ។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'RMSprop & Adam Unified Formulations',
          formulaNameKh: 'រូបមន្តគណិតវិទ្យា RMSprop និង Adam',
          latex: 'S_\\theta = \\beta_2 S_\\theta + (1 - \\beta_2) \\left(\\nabla_\\theta J\\right)^2, \\quad \\theta := \\theta - \\alpha \\frac{\\nabla_\\theta J}{\\sqrt{S_\\theta} + \\epsilon}',
          latexSecondary: '\\text{Adam: } \\theta := \\theta - \\alpha \\frac{\\hat{v}_\\theta}{\\sqrt{\\hat{S}_\\theta} + \\epsilon}, \\quad \\hat{v}_\\theta = \\frac{v_\\theta}{1 - \\beta_1^t}, \\quad \\hat{S}_\\theta = \\frac{S_\\theta}{1 - \\beta_2^t}',
          explanationEn: 'RMSprop scales the gradient down along steep dimensions by dividing by √S_θ. Adam combines this adaptive scaling with Momentum and applies bias corrections (1-β^t) for initial steps.',
          explanationKh: 'RMSprop បន្ថយល្បឿនក្នុងទិសដៅចោតខ្លាំងដោយចែកនឹង √S_θ។ Adam រួមបញ្ចូលគ្នានូវការកែសម្រួលនេះជាមួយ Momentum និងបន្ថែមការកែតម្រូវ Bias (1-β^t) សម្រាប់ជំហានដំបូង។',
          variables: [
            { symbol: 'S_\\theta', meaningEn: 'Accumulated squared gradients tracking variance', meaningKh: 'ផលបូកការេនៃក្រាដ្យង់កន្លងមកសម្រាប់វាស់ស្ទង់ទំហំវ៉ារ្យង់', role: 'Second Moment' },
            { symbol: 'v_\\theta', meaningEn: 'Accumulated exponentially weighted velocity vector', meaningKh: 'វ៉ិចទ័រល្បឿនប្រមូលផ្តុំទិសដៅក្រាដ្យង់', role: 'First Moment' },
            { symbol: '\\hat{v}_\\theta, \\hat{S}_\\theta', meaningEn: 'Bias-corrected moment estimates counteracting zero initialization', meaningKh: 'តម្លៃប៉ាន់ស្មានដែលបានកែតម្រូវ Bias ពេលចាប់ផ្តើមដំបូង', role: 'Bias Correction' },
            { symbol: '\\sqrt{S_\\theta} + \\epsilon', meaningEn: 'Per-parameter adaptive denominator smoothing updates', meaningKh: 'ភាគបែងកែតម្រូវអត្រារៀនសូត្រតាមប៉ារ៉ាម៉ែត្រនីមួយៗ', role: 'Adaptive Scale' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Dropdown',
        fieldName: 'Loss_Surface_Terrain',
        controlLabelEn: 'Choose Benchmark Loss Surface',
        controlLabelKh: 'ជ្រើសរើសទម្រង់ផ្ទៃ Loss សម្រាប់សាកល្បង',
        defaultValue: 'Beale Ravine & Saddle Point',
        options: ['Beale Ravine & Saddle Point', 'Rosenbrock Banana Valley', 'Convex Bowl (Simple)'],
        purposeEn: 'Tests how each optimizer handles plateaus, ravines, and deceptive local saddle points.',
        purposeKh: 'សាកល្បងមើលថាតើអុបទិមៃស័រនីមួយៗឆ្លងកាត់ចំណុចរាបស្មើ និងជ្រលងភ្នំយ៉ាងដូចម្តេច។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Advanced Optimizers — RMSprop and Adam:',
          '1. RMSprop (Root Mean Square Propagation):',
          'S_θ = β * S_θ + (1 - β) * grad_θ²',
          'θ = θ - α * grad_θ / (√S_θ + ε)',
          'Divides by square root of moving average of squared gradients, automatically damping steep dimensions and boosting flat ones.',
          '2. Adam (Adaptive Moment Estimation):',
          'Combines Momentum (first moment, tracking direction) and RMSprop (second moment, tracking scale).',
          'Industry standard: Default optimizer for 90%+ of modern deep learning models.'
        ],
        kh: [
          'អុបទិមៃស័រជាន់ខ្ពស់ — RMSprop និង Adam៖',
          '១. RMSprop (Root Mean Square Propagation)៖',
          'S_θ = β * S_θ + (1 - β) * grad_θ²',
          'θ = θ - α * grad_θ / (√S_θ + ε)',
          'ចែកនឹងឬសការេនៃមធ្យមភាគការេក្រាដ្យង់ ដើម្បីបន្ថយល្បឿនក្នុងទិសចោតខ្លាំង និងបង្កើនល្បឿនក្នុងទិសរាបស្មើដោយស្វ័យប្រវត្តិ។',
          '២. Adam (Adaptive Moment Estimation)៖',
          'រួមបញ្ចូលគ្នារវាង Momentum (មធ្យមភាគទីមួយ កំណត់ទិសដៅ) និង RMSprop (មធ្យមភាគទីពីរ កំណត់ទំហំជំហាន)។',
          'ស្តង់ដារឧស្សាហកម្ម៖ ជាអុបទិមៃស័រលំនាំដើមសម្រាប់គំរូ Deep Learning ជាង ៩០% លើពិភពលោក។'
        ]
      },
      deepDiveExplanation: {
        en: 'Kingma & Ba published Adam in 2014, and it instantly revolutionized neural network optimization. Previous algorithms used a single global learning rate for all parameters: if one weight required tiny adjustments while another required massive updates, gradient descent struggled. RMSprop solves this by giving each parameter its own custom learning rate inversely proportional to recent gradient magnitudes. Adam perfects this by marrying adaptive per-parameter step sizes with momentum smoothing, making it exceptionally robust across diverse architectures.',
        kh: 'Kingma និង Ba បានបោះពុម្ពផ្សាយ Adam នៅឆ្នាំ ២០១៤ ហើយវាបានបង្កើតបដិវត្តន៍លើការហ្វឹកហាត់បណ្តាញណឺរ៉ូនភ្លាមៗ។ ក្បួនដោះស្រាយពីមុនប្រើប្រាស់អត្រារៀនសូត្រតែមួយសម្រាប់ប៉ារ៉ាម៉ែត្រទាំងអស់៖ ប្រសិនបើទម្ងន់មួយត្រូវការកែប្រែបន្តិចបន្តួច រីឯទម្ងន់មួយទៀតត្រូវការកែប្រែច្រើន នោះ Gradient Descent នឹងពិបាកដំណើរការខ្លាំង។ RMSprop ដោះស្រាយបញ្ហានេះដោយផ្តល់អត្រារៀនសូត្រផ្ទាល់ខ្លួនសម្រាប់ប៉ារ៉ាម៉ែត្រនីមួយៗ។ ចំណែក Adam ធ្វើឱ្យកាន់តែល្អឥតខ្ចោះដោយរួមបញ្ចូលអត្រារៀនបត់បែននេះជាមួយ Momentum ដែលធ្វើឱ្យវាដំណើរការយ៉ាងរឹងមាំលើគ្រប់ស្ថាបត្យកម្ម។'
      },
      practicalApplication: {
        titleEn: 'Large Language Model (LLM) Transformer Pretraining',
        titleKh: 'ការហ្វឹកហាត់គំរូភាសាធំៗ (LLM) និងស្ថាបត្យកម្ម Transformer',
        scenarioEn: 'Training foundation models (e.g., LLaMA, GPT) with AdamW (Adam with decoupled weight decay) across 10,000 GPUs.',
        scenarioKh: 'ការហ្វឹកហាត់គំរូភាសាធំៗ (ដូចជា LLaMA ឬ GPT) ដោយប្រើ AdamW នៅលើប្រព័ន្ធ GPU ចំនួន ១០,០០០ គ្រាប់។',
        businessImpactEn: 'Ensures absolute numerical stability across billions of parameters, preventing catastrophic loss spikes during multi-month training.',
        businessImpactKh: 'ធានាបាននូវស្ថិរភាពលេខគណនាល្អឥតខ្ចោះលើប៉ារ៉ាម៉ែត្ររាប់ពាន់លាន ការពារកុំឱ្យមានការកើនឡើង Loss ភ្លាមៗខូចការហ្វឹកហាត់។'
      }
    },
    interactiveType: 'rmsprop_adam'
  },

  // SLIDE 20
  {
    id: 20,
    slideNumber: 20,
    category: 'Optimization',
    englishTitle: 'Hyperparameter Tuning: Grid Search vs Random Search (Bergstra & Bengio)',
    khmerTitle: 'ការលៃតម្រូវប៉ារ៉ាម៉ែត្រកំពូល៖ Grid Search ទល់នឹង Random Search (ការបែងចែកកន្លែងសាកល្បង)',
    pageIdentity: {
      bilingualPageTitle: 'Slide 20: Hyperparameter Tuning / ការលៃតម្រូវប៉ារ៉ាម៉ែត្រកំពូល',
      bilingualPageTitleKh: 'យុទ្ធសាស្ត្រលៃតម្រូវប៉ារ៉ាម៉ែត្រកំពូល៖ Grid Layout ទល់នឹង Random Layout',
      canvasSetup: 'Emerald Efficiency & Forest Minimalist (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌បៃតងត្បូងមរកត និងព្រៃប្រណិត បែបវិភាគទិន្នន័យ (16:9)',
      hexPrimary: '#059669', // Emerald
      hexSecondary: '#2563EB', // Blue
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#F59E0B',
      themeRationaleEn: 'Emerald green signifies high search efficiency, contrasting the rigid wasted trials of Grid Search against the diverse coverage of Random Search.',
      themeRationaleKh: 'ពណ៌បៃតងបញ្ជាក់ពីប្រសិទ្ធភាពស្វែងរកខ្ពស់ ប្រៀបធៀបភាពខ្ជះខ្ជាយនៃ Grid Search ធៀបនឹងភាពគ្របដណ្តប់ទូលំទូលាយនៃ Random Search។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and validation protocol tag: Training / Validation / Test.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងស្លាកកំណត់វិធីសាស្ត្របែងចែកទិន្នន័យ៖ Training / Validation / Test។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 48%: The famous Bergstra & Bengio (2012) theorem: When only a subset of hyperparameters truly impact performance, Grid Search redundantly samples the same important values while Random Search evaluates distinct values across the entire distribution. Right 52%: Interactive 9-Point Grid Layout vs 9-Point Random Layout comparator with projected marginal bell curve peaks.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៨%៖ ទ្រឹស្តីបទដ៏ល្បីល្បាញរបស់ Bergstra & Bengio (២០១២)៖ នៅពេលដែលប៉ារ៉ាម៉ែត្រសំខាន់មានតែមួយចំនួន Grid Search ខ្ជះខ្ជាយសាកល្បងតម្លៃដដែលៗ ខណៈ Random Search សាកល្បងតម្លៃប្លែកៗគ្នារហូតដល់ ៩ តម្លៃផ្សេងគ្នា។ ផ្នែកខាងស្តាំ ៥២%៖ ក្រាហ្វអន្តរកម្មប្រៀបធៀបចំណុចសាកល្បង Grid ៩ ចំណុច ធៀបនឹង Random ៩ ចំណុច។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '880 px',
        rightPanelWidth: '960 px'
      },
      componentPositions: [
        { id: 'hdr_20', nameEn: 'Header & Split Protocol', nameKh: 'ក្បាលទំព័រ និងការបែងចែកទិន្នន័យ', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_20', nameEn: 'Search Efficiency KPIs', nameKh: 'ផ្ទាំងពិន្ទុប្រសិទ្ធភាពស្វែងរក', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'thm_20', nameEn: 'Bergstra & Bengio Theory Card', nameKh: 'កាតទ្រឹស្តីបទ Bergstra & Bengio', coordinates: 'X: 40, Y: 220, W: 880, H: 790', type: 'Text' },
        { id: 'lay_20', nameEn: 'Interactive Grid vs Random Layout Visualizer', nameKh: 'ក្រាហ្វអន្តរកម្មប្រៀបធៀបប្លង់ Grid និង Random', coordinates: 'X: 940, Y: 220, W: 940, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Grid Layout Distinct Values (9 trials)', labelKh: 'តម្លៃប្លែកគ្នាក្នុង Grid (៩ ដង)', value: 'Only 3 Distinct Values Tested', tooltipEn: 'Tests each important parameter value 3 redundant times', tooltipKh: 'សាកល្បងតម្លៃសំខាន់ដដែលៗស្ទួន ៣ ដង' },
        { labelEn: 'Random Layout Distinct Values (9 trials)', labelKh: 'តម្លៃប្លែកគ្នាក្នុង Random (៩ ដង)', value: '9 Distinct Values Tested (3x More)', tooltipEn: 'Every single trial tests a completely novel parameter value', tooltipKh: 'ការសាកល្បងនីមួយៗរុករកតម្លៃថ្មីស្រឡាងជានិច្ច' },
        { labelEn: 'Search Space Speedup', labelKh: 'កម្រិតពន្លឿនការស្វែងរក', value: 'Finds Optimum in 1/4 the Trials', tooltipEn: 'Proven mathematically by Bergstra & Bengio (JMLR 2012)', tooltipKh: 'ស្វែងរកឃើញចំណុចល្អបំផុតលឿនជាង ៤ ដង' }
      ],
      chartSetup: {
        chartType: 'Side-by-Side 2D Scatter Matrix with Marginal Projection Density',
        chartTypeKh: 'ក្រាហ្វចំណុច Scatter គូ និងខ្សែកោងដង់ស៊ីតេគែម',
        dimensions: ['Important_Parameter_x (អ័ក្សសំខាន់ ឧ. Learning Rate)', 'Unimportant_Parameter_y (អ័ក្សមិនសូវសំខាន់)'],
        metrics: ['Trial_Number (លេខលើកសាកល្បង)', 'Validation_Accuracy (ភាពត្រឹមត្រូវលើ Validation)'],
        sortOrder: 'Trial_Number ASCENDING',
        filterDefault: 'Equal Budget: 9 Trials Each',
        chartDescriptionEn: 'Contrasts the 3x3 rigid grid against the dispersed 9-sample random distribution across an important vs unimportant parameter landscape.',
        chartDescriptionKh: 'ប្រៀបធៀបក្រឡាចត្រង្គ 3x3 ដ៏រឹងស្តូក ធៀបនឹងការរាយចំណុចចៃដន្យ ៩ ចំណុច ដើម្បីបង្ហាញពីភាពខុសគ្នានៃការស្វែងរកចំណុចកំពូល។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Random Hyperparameter Probability Formulation',
          formulaNameKh: 'រូបមន្តប្រូបាប៊ីលីតេនៃការស្វែងរកតាម Random Search',
          latex: 'P(\\text{finding top } 5\\% \\text{ optimum}) = 1 - (1 - 0.05)^N \\ge 0.95 \\implies N \\ge \\frac{\\log(0.05)}{\\log(0.95)} \\approx 59 \\text{ trials}',
          explanationEn: 'Regardless of the dimensionality of the hyperparameter space, exactly 59 random trials provide a 95% mathematical probability of discovering a hyperparameter configuration within the top 5% true optimum.',
          explanationKh: 'មិនថាចំនួនប៉ារ៉ាម៉ែត្រកំពូលមានប៉ុន្មានវិមាត្រក៏ដោយ ការសាកល្បងចៃដន្យត្រឹមតែ ៥៩ ដង ផ្តល់ប្រូបាប៊ីលីតេគណិតវិទ្យា ៩៥% ក្នុងការស្វែងរកឃើញប៉ារ៉ាម៉ែត្រដែលស្ថិតក្នុងកំពូល ៥% ល្អបំផុត។',
          variables: [
            { symbol: 'N', meaningEn: 'Number of independent random trials', meaningKh: 'ចំនួនដងនៃការសាកល្បងចៃដន្យឯករាជ្យ', role: 'Compute Budget' },
            { symbol: '1 - 0.05', meaningEn: 'Probability of missing the top 5% performance region', meaningKh: 'ប្រូបាប៊ីលីតេនៃការសាកល្បងមិនចំតំបន់កំពូល ៥%', role: 'Failure Rate' },
            { symbol: '0.95', meaningEn: 'Desired confidence threshold of success', meaningKh: 'កម្រិតទំនុកចិត្តជោគជ័យដែលចង់បាន', role: 'Confidence Level' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Button Group',
        fieldName: 'Search_Strategy_Toggle',
        controlLabelEn: 'Compare Search Layout',
        controlLabelKh: 'ជ្រើសរើសទម្រង់ស្វែងរក',
        defaultValue: 'Side-by-Side Comparison',
        options: ['Side-by-Side Comparison (ប្រៀបធៀបក្បែរគ្នា)', 'Grid Layout Only', 'Random Layout Only'],
        purposeEn: 'Inspects how random exploration covers the continuous range of the critical parameter.',
        purposeKh: 'ពិនិត្យមើលថាតើការរុករកចៃដន្យគ្របដណ្តប់ដែនតម្លៃនៃប៉ារ៉ាម៉ែត្រសំខាន់បានល្អកម្រិតណា។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Hyperparameter Tuning Strategy:',
          'Dataset Split: Training Set (60-80%), Validation Set (10-20%), Test Set (10-20%).',
          'Grid Layout vs Random Layout:',
          'In deep learning, some hyperparameters (e.g., learning rate α) are drastically more important than others (e.g., small momentum tweaks).',
          'In a 3x3 Grid Layout (9 experiments): Only 3 distinct values of the important parameter are evaluated.',
          'In a Random Layout (9 experiments): All 9 experiments test distinct values of the important parameter, dramatically increasing the odds of finding the optimal peak!'
        ],
        kh: [
          'យុទ្ធសាស្ត្រលៃតម្រូវប៉ារ៉ាម៉ែត្រកំពូល (Hyperparameter Tuning)៖',
          'ការបែងចែកទិន្នន័យ៖ សំណុំហ្វឹកហាត់ Training (៦០-៨០%), សំណុំផ្ទៀងផ្ទាត់ Validation (១០-២០%), សំណុំសាកល្បង Test (១០-២០%)។',
          'Grid Layout ទល់នឹង Random Layout៖',
          'នៅក្នុង Deep Learning ប៉ារ៉ាម៉ែត្រមួយចំនួន (ដូចជា អត្រារៀនសូត្រ α) មានសារៈសំខាន់ខ្លាំងជាងប៉ារ៉ាម៉ែត្រដទៃទៀត។',
          'នៅក្នុងប្លង់ Grid Layout (សាកល្បង ៩ លើក)៖ មានតម្លៃប្លែកគ្នានៃប៉ារ៉ាម៉ែត្រសំខាន់ត្រឹមតែ ៣ តម្លៃប៉ុណ្ណោះ។',
          'នៅក្នុងប្លង់ Random Layout (សាកល្បង ៩ លើក)៖ ការសាកល្បងទាំង ៩ លើក សុទ្ធតែបានសាកល្បងតម្លៃប្លែកៗគ្នាទាំងអស់នៃប៉ារ៉ាម៉ែត្រសំខាន់ ដែលបង្កើនឱកាសស្វែងរកឃើញចំណុចកំពូលល្អបំផុត!'
        ]
      },
      deepDiveExplanation: {
        en: 'James Bergstra and Yoshua Bengio proved in their landmark 2012 JMLR paper that Random Search is fundamentally superior to Grid Search for hyperparameter optimization in high dimensions. In almost all deep networks, the low effective dimensionality means only 2 or 3 hyperparameters dominate performance. Grid Search wastes 75% of precious GPU compute re-evaluating identical settings of the critical parameter. Random Search explores the entire continuous space uniformly.',
        kh: 'James Bergstra និង Yoshua Bengio បានបញ្ជាក់ក្នុង مقាឡាស្រាវជ្រាវដ៏ល្បីឆ្នាំ ២០១២ ថា Random Search មានប្រសិទ្ធភាពលើសលប់ជាង Grid Search សម្រាប់ការលៃតម្រូវប៉ារ៉ាម៉ែត្រកំពូល។ នៅក្នុងបណ្តាញណឺរ៉ូនស្ទើរតែទាំងអស់ មានប៉ារ៉ាម៉ែត្រត្រឹមតែ ២ ឬ ៣ ប៉ុណ្ណោះដែលមានឥទ្ធិពលចម្បងលើលទ្ធផល។ Grid Search ខ្ជះខ្ជាយកម្លាំង GPU រហូតដល់ ៧៥% ក្នុងការសាកល្បងតម្លៃដដែលៗនៃប៉ារ៉ាម៉ែត្រសំខាន់។ រីឯ Random Search រុករកពេញផ្ទៃលំហតម្លៃទាំងមូលប្រកបដោយប្រសិទ្ធភាពខ្ពស់។'
      },
      practicalApplication: {
        titleEn: 'Cloud AutoML Hyperparameter Optimization Sweep',
        titleKh: 'ប្រព័ន្ធស្វ័យប្រវត្តិកម្មស្វែងរកប៉ារ៉ាម៉ែត្រ Cloud AutoML',
        scenarioEn: 'An automated machine learning pipeline searches for the optimal learning rate and dropout rate across 100 cloud GPU runs.',
        scenarioKh: 'ប្រព័ន្ធ AutoML ដំណើរការស្វែងរកអត្រារៀនសូត្រ និងអត្រា Dropout ល្អបំផុតតាមរយៈការរត់លើ GPU ចំនួន ១០០ លើក។',
        businessImpactEn: 'Discovers hyperparameter combinations that boost model accuracy by 4.3% in 6 hours instead of 3 days of manual grid searches.',
        businessImpactKh: 'ស្វែងរកឃើញប៉ារ៉ាម៉ែត្រដែលបង្កើនភាពត្រឹមត្រូវ ៤.៣% ក្នុងរយៈពេលត្រឹម ៦ ម៉ោង ជំនួសឱ្យការចំណាយពេល ៣ ថ្ងៃតាមបែប Grid Search។'
      }
    },
    interactiveType: 'hyperparameter_tuning'
  },

  // SLIDE 21
  {
    id: 21,
    slideNumber: 21,
    category: 'Regularization',
    englishTitle: 'The Regularization Imperative: The Overfitting Problem in High Dimensions',
    khmerTitle: 'តម្រូវការចាំបាច់នៃ Regularization៖ បញ្ហា Overfitting និងការចុះខ្សោយនៃការទូទៅកម្ម',
    pageIdentity: {
      bilingualPageTitle: 'Slide 21: Regularization — Overfitting / បញ្ហា Overfitting',
      bilingualPageTitleKh: 'បញ្ហា Overfitting និងភាពបរាជ័យក្នុងការធ្វើទូទៅកម្ម (The Overfitting Problem)',
      canvasSetup: 'Amber Warning & Navy Housing Valuation Theme (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌លឿងទុំព្រមាន និងពណ៌ខៀវវាយតម្លៃអចលនទ្រព្យ (16:9)',
      hexPrimary: '#EA580C', // Alert Orange
      hexSecondary: '#2563EB', // Blue
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#EF4444',
      themeRationaleEn: 'Contrasting smooth realistic curves against wild oscillating polynomial curves visually demonstrates the danger of fitting training noise.',
      themeRationaleKh: 'ភាពផ្ទុយគ្នារវាងខ្សែកោងធម្មជាតិ និងខ្សែកោងពហុធារង្គោះរង្គើខ្លាំង បង្ហាញយ៉ាងច្បាស់ពីគ្រោះថ្នាក់នៃការរៀនតាមសំឡេងរំខាន (Noise) នៃទិន្នន័យ។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and definition pill: High Training Accuracy vs Low Generalization.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងស្លាកនិយមន័យ៖ ភាពត្រឹមត្រូវខ្ពស់លើ Training ទល់នឹង ការបរាជ័យលើទិន្នន័យជាក់ស្តែង។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Housing Price vs Land Area (m²) case study analysis, explaining why overly complex models fail to generalize to new unseen examples, especially in datasets with many input features. Right 55%: Interactive Housing Polynomial Curve Simulator where users toggle polynomial degrees (1 to 10) to see training loss drop to zero while validation error explodes.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ ករណីសិក្សាតម្លៃដីធៀបនឹងទំហំដី (m²) ពន្យល់ពីមូលហេតុដែលគំរូស្មុគស្មាញពេកបរាជ័យក្នុងការទស្សន៍ទាយលើទិន្នន័យថ្មី ជាពិសេសពេលមានលក្ខណៈធាតុបញ្ចូលច្រើន។ ផ្នែកខាងស្តាំ ៥៥%៖ ក្រាហ្វអន្តរកម្មកែប្រែដឺក្រេពហុធាពី ១ ដល់ ១០ ដើម្បីមើលឃើញ Training Loss ធ្លាក់ដល់សូន្យ ប៉ុន្តែ Validation Error ផ្ទុះឡើងខ្ពស់កប់ពពក។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_21', nameEn: 'Header & Overfitting Pill', nameKh: 'ក្បាលទំព័រ និងស្លាក Overfitting', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_21', nameEn: 'Overfitting Metrics Row', nameKh: 'ជួរ KPI វាស់ស្ទង់ Overfitting', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'cst_21', nameEn: 'Land Area Real Estate Case Study', nameKh: 'ករណីសិក្សាតម្លៃដី និងទំហំផ្ទៃក្រឡា', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'plt_21', nameEn: 'Interactive Housing Curve Playground', nameKh: 'ក្រាហ្វតម្លៃដីអន្តរកម្ម និងដឺក្រេពហុធា', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Training Error (Overfitted)', labelKh: 'កំហុសលើ Training (Overfitted)', value: '0.0% (Zero Error / រៀនចាំមាត់)', tooltipEn: 'Model memorizes every noise point in training set', tooltipKh: 'គំរូរៀនចាំមាត់គ្រប់ចំណុចសូម្បីតែសំឡេងរំខាន' },
        { labelEn: 'Generalization Test Error', labelKh: 'កំហុសលើការទស្សន៍ទាយជាក់ស្តែង', value: 'Catastrophic (+410% Error)', tooltipEn: 'Fails disastrously when presented with new land plots', tooltipKh: 'បរាជ័យធ្ងន់ធ្ងរពេលយកទៅទស្សន៍ទាយលើដីឡូតិ៍ថ្មី' },
        { labelEn: 'Model Diagnosis', labelKh: 'ការធ្វើរោគវិនិច្ឆ័យលើគំរូ', value: 'High Variance (Overfitting)', tooltipEn: 'Excessive parameter degrees of freedom', tooltipKh: 'មានបំរែបំរួលខ្ពស់ (High Variance) ដោយសារប៉ារ៉ាម៉ែត្រច្រើនពេក' }
      ],
      chartSetup: {
        chartType: 'Scatter Plot with Competing Model Regression Curves',
        chartTypeKh: 'ក្រាហ្វចំណុច Scatter ជាមួយខ្សែរត់ប្រៀបធៀបគំរូ',
        dimensions: ['Land_Area_m2 (ទំហំដី 400 ដល់ 800 m²)'],
        metrics: ['Actual_Price_1000_USD (តម្លៃជាក់ស្តែង)', 'Optimal_Fit_Curve (ខ្សែកោងសមស្រប)', 'Overfitted_Degree_8_Wiggle (ខ្សែកោងរមួលជ្រុល)'],
        sortOrder: 'Land_Area_m2 ASCENDING',
        filterDefault: 'Full Dataset Range',
        chartDescriptionEn: 'Contrasts a smooth generalizing curve against an excessively wiggly polynomial curve that weaves through all training points but swings wildly between them.',
        chartDescriptionKh: 'ប្រៀបធៀបខ្សែកោងរលូនត្រឹមត្រូវ ធៀបនឹងខ្សែកោងពហុធារមួលចុះឡើងដែលកាត់តាមគ្រប់ចំណុចចាស់ ប៉ុន្តែប៉ោងឡើងប៉ោងចុះខុសទិសដៅ។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Generalization Gap Metric',
          formulaNameKh: 'គម្លាតនៃការធ្វើទូទៅកម្ម (Generalization Gap)',
          latex: '\\text{Generalization Gap} = \\mathcal{L}_{\\text{Test}}(\\theta) - \\mathcal{L}_{\\text{Train}}(\\theta) \\gg 0',
          explanationEn: 'Overfitting occurs when the gap between test risk and empirical training risk becomes excessively large, driven by high parameter variance.',
          explanationKh: 'បញ្ហា Overfitting កើតឡើងនៅពេលដែលគម្លាតរវាងកំហុសលើទិន្នន័យតេស្ត និងកំហុសលើទិន្នន័យហ្វឹកហាត់កើនឡើងធំខុសប្រក្រតី។',
          variables: [
            { symbol: '\\mathcal{L}_{\\text{Test}}', meaningEn: 'Expected loss on completely unseen real-world test data', meaningKh: 'កំហុសដែលរំពឹងទុកលើទិន្នន័យតេស្តដែលមិនធ្លាប់ឃើញ', role: 'Real-World Risk' },
            { symbol: '\\mathcal{L}_{\\text{Train}}', meaningEn: 'Empirical loss achieved on the training set', meaningKh: 'កំហុសដែលគណនាបានជាក់ស្តែងលើទិន្នន័យហ្វឹកហាត់', role: 'Empirical Risk' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Metric Slider',
        fieldName: 'Polynomial_Degree_Overfit',
        controlLabelEn: 'Set Polynomial Complexity Degree',
        controlLabelKh: 'កំណត់ដឺក្រេភាពស្មុគស្មាញនៃពហុធា',
        defaultValue: '7',
        min: 1,
        max: 9,
        step: 1,
        purposeEn: 'Drag from Degree 2 (optimal) to Degree 8 (extreme overfitting) to witness the polynomial wiggle pathology.',
        purposeKh: 'រំកិលពីដឺក្រេទី ២ (ល្អបំផុត) ទៅដឺក្រេទី ៨ (Overfitting ធ្ងន់ធ្ងរ) ដើម្បីមើលឃើញការរមួលខុសទំនងនៃខ្សែកោង។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Regularization — The Overfitting Problem:',
          'Case Study: Housing Price (1,000 USD) vs Land Area (m²).',
          'A model with too many parameters fits the training points perfectly, but oscillates wildly between them.',
          'Consequence: It fails to generalize to new examples not in the training set.',
          'Critical Question: What happens when our dataset contains hundreds or thousands of input features? Overfitting becomes virtually guaranteed unless regularization is enforced!'
        ],
        kh: [
          'បច្ចេកទេស Regularization — បញ្ហា Overfitting៖',
          'ករណីសិក្សា៖ តម្លៃដី (គិតជាពាន់ដុល្លារ) ធៀបនឹងទំហំផ្ទៃក្រឡាដី (m²)។',
          'គំរូដែលមានប៉ារ៉ាម៉ែត្រច្រើនហួសហេតុ អាចកាត់តាមចំណុចហ្វឹកហាត់បានល្អឥតខ្ចោះ ប៉ុន្តែរង្គោះរង្គើរមួលខ្លាំងនៅចន្លោះចំណុចទាំងនោះ។',
          'ផលវិបាក៖ វាបរាជ័យទាំងស្រុងក្នុងការទស្សន៍ទាយលើទិន្នន័យគំរូថ្មីៗដែលមិនមានក្នុងសំណុំហ្វឹកហាត់។',
          'សំណួរគន្លឹះ៖ តើនឹងមានរឿងអ្វីកើតឡើងប្រសិនបើទិន្នន័យមានលក្ខណៈធាតុបញ្ចូលរាប់រយ ឬរាប់ពាន់? បញ្ហា Overfitting នឹងកើតឡើង ១០០% បើគ្មាន Regularization!'
        ]
      },
      deepDiveExplanation: {
        en: 'The core objective of Machine Learning is not to memorize the training data, but to generalize accurately to unseen future data. In high-dimensional spaces, a model with unconstrained parameter capacity easily finds spuriously correlated patterns that fit training noise. When applied to real-world scenarios (such as property valuation, loan credit scoring, or medical diagnostics), an overfitted model makes wild, nonsensical predictions. Regularization is the mathematical constraint that prevents this pathology.',
        kh: 'គោលបំណងចម្បងនៃ Machine Learning មិនមែនដើម្បីទន្ទេញចាំទិន្នន័យហ្វឹកហាត់នោះទេ ប៉ុន្តែគឺដើម្បីទស្សន៍ទាយឱ្យបានត្រឹមត្រូវលើទិន្នន័យអនាគតដែលមិនធ្លាប់ស្គាល់។ ក្នុងលំហវិមាត្រខ្ពស់ គំរូដែលមានប៉ារ៉ាម៉ែត្រច្រើនពេកនឹងឆ្លៀតរៀនតាមសំឡេងរំខានចៃដន្យនៃទិន្នន័យ។ នៅពេលយកទៅអនុវត្តជាក់ស្តែង (ដូចជាការវាយតម្លៃអចលនទ្រព្យ ឬការវិនិច្ឆ័យវេជ្ជសាស្ត្រ) គំរូដែល Overfit នឹងធ្វើការទស្សន៍ទាយខុសឆ្គងយ៉ាងធ្ងន់ធ្ងរ។ Regularization គឺជាកំហិតគណិតវិទ្យាដែលត្រូវបានបង្កើតឡើងដើម្បីទប់ស្កាត់បញ្ហានេះ។'
      },
      practicalApplication: {
        titleEn: 'Real Estate Automated Valuation Model (AVM)',
        titleKh: 'ប្រព័ន្ធស្វ័យប្រវត្តិកម្មវាយតម្លៃអចលនទ្រព្យ (AVM)',
        scenarioEn: 'Property portals use regularized regression to predict home values based on square footage, bedrooms, and location coordinates.',
        scenarioKh: 'គេហទំព័រអចលនទ្រព្យប្រើប្រាស់ Regularized Regression ដើម្បីទស្សន៍ទាយតម្លៃផ្ទះដោយផ្អែកលើទំហំផ្ទៃក្រឡា ចំនួនបន្ទប់ និងទីតាំងភូមិសាស្ត្រ។',
        businessImpactEn: 'Eliminates wild price swings on luxury estates, providing reliable bank appraisal valuations within ±3.2% error.',
        businessImpactKh: 'លុបបំបាត់ការវាយតម្លៃខុសឆ្គងលើផ្ទះវីឡាប្រណិត ដោយផ្តល់នូវតម្លៃវាយតម្លៃកម្ចីធនាគារដែលមានកម្រិតលម្អៀងត្រឹម ±៣.២%។'
      }
    },
    interactiveType: 'overfitting_curve'
  }
];
