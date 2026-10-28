import { SlideBlueprint } from '../../types';

export const slides8to14: SlideBlueprint[] = [
  // SLIDE 8
  {
    id: 8,
    slideNumber: 8,
    category: 'Activations',
    englishTitle: 'Activation Functions: Rectified Linear Unit (ReLU) & The Dying ReLU Problem',
    khmerTitle: 'អនុគមន៍សកម្មភាព៖ ReLU (លក្ខណៈ គុណសម្បត្តិ និងបញ្ហាណឺរ៉ូនស្លាប់ Dying ReLU)',
    pageIdentity: {
      bilingualPageTitle: 'Slide 08: Activation Functions — ReLU / អនុគមន៍ ReLU',
      bilingualPageTitleKh: 'អនុគមន៍សកម្មភាព Rectified Linear Unit (ReLU) និងបញ្ហា Dying ReLU',
      canvasSetup: 'Emerald Speed & Amber Alert Warning Canvas (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌បៃតងត្បូងមរកត តំណាងឱ្យល្បឿន និងពណ៌លឿងទុំព្រមាន (16:9)',
      hexPrimary: '#10B981', // Emerald Green (Speed)
      hexSecondary: '#F59E0B', // Amber
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#EF4444', // Red (Dying ReLU)
      themeRationaleEn: 'Emerald represents blazing computational speed and non-saturation, while sharp crimson warns against dead zero-gradient neurons.',
      themeRationaleKh: 'ពណ៌បៃតងតំណាងឱ្យល្បឿនគណនាដ៏លឿន និងគ្មានភាពឆ្អែត រីឯពណ៌ក្រហមព្រមានអំពីបញ្ហាណឺរ៉ូនស្លាប់ដោយសារក្រាដ្យង់ស្មើ ០។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and formula badge max(0, x).',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងស្លាករូបមន្ត max(0, x)។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Analysis of ReLU benefits (no saturation for x > 0, 6x faster convergence) vs drawbacks (not zero-centered, dead neuron trap for x < 0). Right 55%: Interactive ReLU Threshold & Gradient Playground with live dead-neuron status detector.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ ការវិភាគគុណសម្បត្តិ ReLU (គ្មានភាពឆ្អែតពេល x > 0, រៀនលឿនជាង ៦ ដង) និងគុណវិបត្តិ (មិន zero-centered, ណឺរ៉ូនស្លាប់ពេល x < 0)។ ផ្នែកខាងស្តាំ ៥៥%៖ ក្រាហ្វអន្តរកម្ម ReLU ជាមួយប្រព័ន្ធរាវរកស្ថានភាពណឺរ៉ូនស្លាប់ភ្លាមៗ។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_8', nameEn: 'Header & ReLU Formula', nameKh: 'ក្បាលទំព័រ និងរូបមន្ត ReLU', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_8', nameEn: 'ReLU Performance Metrics', nameKh: 'ផ្ទាំងពិន្ទុដំណើរការ ReLU', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'exp_8', nameEn: 'Benefits & Pitfalls Detailed Card', nameKh: 'កាតពន្យល់គុណសម្បត្តិ និងគុណវិបត្តិ', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'sim_8', nameEn: 'Interactive ReLU Dead Neuron Detector', nameKh: 'ប្រព័ន្ធពិសោធន៍ ReLU និងការស្លាប់របស់ណឺរ៉ូន', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Positive Region Gradient', labelKh: 'ក្រាដ្យង់ក្នុងតំបន់វិជ្ជមាន (x > 0)', value: 'Constant 1.0 (No Saturation)', tooltipEn: 'Zero vanishing gradient in active zone', tooltipKh: 'គ្មានការបាត់បង់ក្រាដ្យង់ក្នុងតំបន់សកម្មឡើយ' },
        { labelEn: 'Training Convergence Speed', labelKh: 'ល្បឿននៃការប្រមូលផ្តុំ (Convergence)', value: '≈ 6x Faster than Tanh', tooltipEn: 'Krizhevsky et al. (AlexNet, 2012) benchmark', tooltipKh: 'លឿនជាង Tanh ប្រហែល ៦ ដង តាមការពិសោធន៍ AlexNet 2012' },
        { labelEn: 'Dead Zone Gradient (x < 0)', labelKh: 'ក្រាដ្យង់ក្នុងតំបន់ស្លាប់ (x < 0)', value: '0.0 (Weights Never Update)', tooltipEn: 'Permanent deactivation if bias becomes too negative', tooltipKh: 'ស្មើ ០ ទម្ងន់លែងធ្វើបច្ចុប្បន្នភាពរហូត ប្រសិនបើ bias អវិជ្ជមានខ្លាំង' }
      ],
      chartSetup: {
        chartType: 'Segmented Step Line & Gradient Heatmap',
        chartTypeKh: 'ក្រាហ្វខ្សែបន្ទាត់ជាដំណាក់កាល និងកម្រិតកម្តៅក្រាដ្យង់',
        dimensions: ['Input_x (-10 to +10)'],
        metrics: ['ReLU_Output (f(x) = max(0,x))', 'ReLU_Derivative (df/dx = 0 or 1)'],
        sortOrder: 'Input_x ASCENDING',
        filterDefault: 'Full Range View',
        chartDescriptionEn: 'Demonstrates the sharp elbow transition at x=0 where the derivative steps abruptly from 0 to 1.',
        chartDescriptionKh: 'បង្ហាញចំណុចបត់បែនស្រួចត្រង់ x=0 ដែលដេរីវេផ្លាស់ប្តូរភ្លាមៗពី ០ ទៅ ១។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Rectified Linear Unit (ReLU)',
          formulaNameKh: 'អនុគមន៍ Rectified Linear Unit (ReLU)',
          latex: 'f(x) = \\max(0, x) = \\begin{cases} x & \\text{if } x \\ge 0 \\\\ 0 & \\text{if } x < 0 \\end{cases}',
          latexSecondary: '\\frac{df(x)}{dx} = \\begin{cases} 1 & \\text{if } x > 0 \\\\ 0 & \\text{if } x < 0 \\end{cases}',
          explanationEn: 'ReLU passes positive values unchanged while zeroing out negative inputs. The derivative is 1 for positive numbers and 0 for negative numbers.',
          explanationKh: 'ReLU បញ្ជូនតម្លៃវិជ្ជមានទៅមុខដោយមិនផ្លាស់ប្តូរ និងកាត់តម្លៃអវិជ្ជមានចោលឱ្យស្មើ ០។ ដេរីវេស្មើ ១ ចំពោះ x វិជ្ជមាន និងស្មើ ០ ចំពោះ x អវិជ្ជមាន។',
          variables: [
            { symbol: 'x', meaningEn: 'Input logit (z = Wx + b)', meaningKh: 'ធាតុបញ្ចូល Logit (z = Wx + b)', role: 'Input' },
            { symbol: '\\max(0, x)', meaningEn: 'Thresholding operation at zero', meaningKh: 'ប្រមាណវិធីកាត់ត្រឹមកម្រិតសូន្យ', role: 'Activation Operation' },
            { symbol: 'df/dx = 0', meaningEn: 'Dead gradient region where backprop stops', meaningKh: 'តំបន់ក្រាដ្យង់ស្លាប់ ដែលការគណនាថយក្រោយត្រូវកាត់ផ្តាច់', role: 'Dying Neuron' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Metric Slider',
        fieldName: 'Neuron_Input_Probe',
        controlLabelEn: 'Input Signal (x)',
        controlLabelKh: 'សញ្ញាធាតុបញ្ចូល (x)',
        defaultValue: '2.5',
        min: -6.0,
        max: 6.0,
        step: 0.5,
        purposeEn: 'Demonstrates how shifting into negative territory instantly flags the neuron as Dead/Dying.',
        purposeKh: 'បង្ហាញពីរបៀបដែលការរំកិលទៅកាន់តំបន់អវិជ្ជមាន ធ្វើឱ្យណឺរ៉ូនស្លាប់ភ្លាមៗ។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Rectified Linear Unit (ReLU): f(x) = max(0, x)',
          '1. Non-saturating: Gradient does not diminish for positive activations (x > 0).',
          '2. Computational efficiency: Extremely cheap to compute (just thresholding at 0; no exp() operations).',
          '3. Convergence: Converges roughly 6 times faster than sigmoid/tanh in deep networks.',
          '4. Major Problem: Dying ReLU! When x < 0, gradient is 0. If a large gradient knocks weights into a state where neuron never activates, it stays permanently dead.'
        ],
        kh: [
          'អនុគមន៍ Rectified Linear Unit (ReLU)៖ f(x) = max(0, x)',
          '១. គ្មានភាពឆ្អែត (Non-saturating)៖ ក្រាដ្យង់មិនថយចុះឡើយសម្រាប់តម្លៃវិជ្ជមាន (x > 0)។',
          '២. ប្រសិទ្ធភាពគណនាខ្ពស់៖ សន្សំសំចៃធនធានកុំព្យូទ័រខ្លាំង (គ្រាន់តែប្រៀបធៀបជាមួយ ០ មិនប្រើអនុគមន៍ exp() ឡើយ)។',
          '៣. ល្បឿនរៀនសូត្រ៖ ប្រមូលផ្តុំលឿនជាង Sigmoid និង Tanh រហូតដល់ ៦ ដងក្នុងបណ្តាញជម្រៅជ្រៅ។',
          '៤. គុណវិបត្តិធ្ងន់ធ្ងរ៖ បញ្ហាណឺរ៉ូនស្លាប់ (Dying ReLU)! នៅពេល x < 0 ក្រាដ្យង់ស្មើ ០។ ប្រសិនបើទម្ងន់ធ្លាក់ចូលទៅក្នុងតំបន់អវិជ្ជមានខ្លាំង ណឺរ៉ូននោះនឹងលែងដំណើរការរហូត។'
        ]
      },
      deepDiveExplanation: {
        en: 'The introduction of ReLU by Nair & Hinton (2010) and Alex Krizhevsky (AlexNet, 2012) triggered the modern Deep Learning revolution. By replacing sigmoid with ReLU, 100-layer networks suddenly became trainable because backpropagated gradients flow freely without diminishing. However, the "Dying ReLU" phenomenon can cause up to 40% of neurons in a network to go permanently dormant if the learning rate is too aggressive or weights receive large negative updates.',
        kh: 'ការបង្កើតអនុគមន៍ ReLU ដោយ Nair & Hinton (២០១០) និង Alex Krizhevsky (AlexNet, ២០១២) បានបង្កើតនូវបដិវត្តន៍ Deep Learning ទំនើប។ តាមរយៈការជំនួស Sigmoid ដោយ ReLU បណ្តាញដែលមានរហូតដល់ ១០០ ស្រទាប់ ស្រាប់តែអាចហ្វឹកហាត់បានយ៉ាងរលូន ដោយសារក្រាដ្យង់ហូរឆ្លងកាត់ដោយមិនបាត់បង់កម្លាំង។ ប៉ុន្តែ បាតុភូត "Dying ReLU" អាចធ្វើឱ្យណឺរ៉ូនរហូតដល់ ៤០% ក្នុងបណ្តាញស្លាប់ជាអចិន្ត្រៃយ៍ ប្រសិនបើ Learning Rate ធំជ្រុល ឬទម្ងន់ទទួលបានការផ្លាស់ប្តូរអវិជ្ជមានខ្លាំងពេក។'
      },
      practicalApplication: {
        titleEn: 'Real-Time Edge Computer Vision (YOLO Object Detection)',
        titleKh: 'ប្រព័ន្ធចាប់រូបភាពវត្ថុតាមពេលវេលាជាក់ស្តែងលើឧបករណ៍ Edge (YOLO)',
        scenarioEn: 'An embedded security camera runs real-time vehicle and pedestrian detection using ReLU-based convolutional layers.',
        scenarioKh: 'កាមេរ៉ាសុវត្ថិភាពស្វ័យប្រវត្តិដំណើរការការរាវរកយានយន្ត និងអ្នកថ្មើរជើងតាមពេលវេលាជាក់ស្តែង ដោយប្រើប្រាស់ស្រទាប់ Convolution ផ្អែកលើ ReLU។',
        businessImpactEn: 'Achieves 60 frames per second on low-power mobile chips with zero numerical latency.',
        businessImpactKh: 'សម្រេចបានល្បឿន ៦០ ប្លង់ក្នុងមួយវិនាទី (60 FPS) លើបន្ទះឈីបចល័តកម្លាំងទាប ដោយគ្មានបញ្ហាពន្យារពេលឡើយ។'
      }
    },
    interactiveType: 'relu'
  },

  // SLIDE 9
  {
    id: 9,
    slideNumber: 9,
    category: 'Activations',
    englishTitle: 'Activation Functions: Leaky ReLU & Parametric ReLU (PReLU)',
    khmerTitle: 'អនុគមន៍សកម្មភាព៖ Leaky ReLU និង PReLU (ដំណោះស្រាយបញ្ហាណឺរ៉ូនស្លាប់)',
    pageIdentity: {
      bilingualPageTitle: 'Slide 09: Leaky ReLU & Parametric ReLU / Leaky ReLU និង PReLU',
      bilingualPageTitleKh: 'ដំណោះស្រាយចំពោះបញ្ហា Dying ReLU៖ Leaky ReLU និង PReLU',
      canvasSetup: 'Cyan Flow & Neon Indigo Theme (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ខៀវភ្លឺ និងពណ៌ស្វាយអគ្គិសនី (16:9)',
      hexPrimary: '#06B6D4',
      hexSecondary: '#6366F1',
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#10B981',
      themeRationaleEn: 'Cyan and Indigo denote dynamic adaptability and the elimination of dead saturation zones in neural networks.',
      themeRationaleKh: 'ពណ៌ខៀវខ្ចី និងស្វាយ បង្ហាញពីភាពបត់បែន និងការលុបបំបាត់តំបន់ស្លាប់នៃណឺរ៉ូនក្នុងបណ្តាញ។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and twin formulas for Leaky ReLU max(0.1x, x) and PReLU max(αx, x).',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងរូបមន្តភ្លោះ Leaky ReLU max(0.1x, x) និង PReLU max(αx, x)។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Mathematical contrast of constant slope 0.01/0.1 vs learnable parameter α, explaining why neurons "will not die". Right 55%: Interactive Slope Visualizer allowing real-time adjustment of α from 0.00 to 0.50.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ ការប្រៀបធៀបគណិតវិទ្យារវាងជម្រាលថេរ 0.01/0.1 និងប៉ារ៉ាម៉ែត្ររៀនសូត្រ α ពន្យល់ពីមូលហេតុដែលណឺរ៉ូនមិនស្លាប់។ ផ្នែកខាងស្តាំ ៥៥%៖ ក្រាហ្វអន្តរកម្មកែប្រែជម្រាល α ពី 0.00 ដល់ 0.50 តាមពេលវេលាជាក់ស្តែង។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_9', nameEn: 'Header & Twin Formula Pill', nameKh: 'ក្បាលទំព័រ និងរូបមន្តភ្លោះ', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_9', nameEn: 'Slope Parameters KPI Banner', nameKh: 'ផ្ទាំងពិន្ទុប៉ារ៉ាម៉ែត្រជម្រាល α', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'txt_9', nameEn: 'Leaky vs PReLU Architectural Analysis', nameKh: 'ការវិភាគស្ថាបត្យកម្ម Leaky និង PReLU', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'plt_9', nameEn: 'Interactive Alpha Slope Controller', nameKh: 'ផ្ទាំងបញ្ជាជម្រាល Alpha និងខ្សែកោងអន្តរកម្ម', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Standard Leaky Slope', labelKh: 'ជម្រាល Leaky ស្តង់ដារ', value: 'α = 0.01 or 0.1', tooltipEn: 'Small fixed non-zero gradient in negative regime', tooltipKh: 'តម្លៃជម្រាលថេរមិនសូន្យក្នុងតំបន់អវិជ្ជមាន' },
        { labelEn: 'PReLU Parameter Type', labelKh: 'ប្រភេទប៉ារ៉ាម៉ែត្រ PReLU', value: 'Learnable (Backprop)', tooltipEn: 'Alpha is dynamically optimized via gradient descent', tooltipKh: 'តម្លៃ Alpha ត្រូវបានរៀនសូត្រតាមរយៈ Backpropagation' },
        { labelEn: 'Neuron Mortality Status', labelKh: 'ស្ថានភាពរស់រាននៃណឺរ៉ូន', value: 'WILL NOT DIE / មិនស្លាប់', tooltipEn: 'Negative gradients never collapse to absolute zero', tooltipKh: 'ក្រាដ្យង់អវិជ្ជមានមិនដែលធ្លាក់ដល់សូន្យដាច់ខាត' }
      ],
      chartSetup: {
        chartType: 'Multi-Line Angle Comparison Chart',
        chartTypeKh: 'ក្រាហ្វខ្សែបន្ទាត់ប្រៀបធៀបមុំជម្រាល',
        dimensions: ['Input_x (-8 to +8)'],
        metrics: ['Standard_ReLU', 'Leaky_ReLU_0_1', 'PReLU_Dynamic_Alpha'],
        sortOrder: 'Input_x ASCENDING',
        filterDefault: 'Full Slope Overlay',
        chartDescriptionEn: 'Contrasts flat standard ReLU against tilted Leaky ReLU and adaptable PReLU trajectories in the negative realm.',
        chartDescriptionKh: 'ប្រៀបធៀប ReLU ធម្មតាដែលរាបស្មើ ធៀបនឹង Leaky ReLU និង PReLU ដែលមានជម្រាលបន្តិចក្នុងតំបន់អវិជ្ជមាន។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Leaky ReLU & Parametric ReLU Formulations',
          formulaNameKh: 'រូបមន្ត Leaky ReLU និង Parametric ReLU (PReLU)',
          latex: 'f_{\\text{Leaky}}(x) = \\max(0.1x, x) = \\begin{cases} x & \\text{if } x \\ge 0 \\\\ 0.1x & \\text{if } x < 0 \\end{cases}',
          latexSecondary: 'f_{\\text{PReLU}}(x) = \\max(\\alpha x, x), \\quad \\frac{\\partial f}{\\partial \\alpha} = \\begin{cases} 0 & \\text{if } x \\ge 0 \\\\ x & \\text{if } x < 0 \\end{cases}',
          explanationEn: 'Instead of clamping negative values to zero, Leaky ReLU grants a small positive slope (e.g., 0.1 or 0.01). PReLU turns α into a trainable parameter learned during gradient descent.',
          explanationKh: 'ជំនួសឱ្យការកាត់តម្លៃអវិជ្ជមានចោលស្មើ ០ Leaky ReLU ផ្តល់ជម្រាលតូចមួយ (ដូចជា 0.1 ឬ 0.01)។ ចំណែក PReLU កំណត់ α ជាប៉ារ៉ាម៉ែត្ររៀនសូត្រផ្ទាល់តាមរយៈ Gradient Descent។',
          variables: [
            { symbol: 'x', meaningEn: 'Incoming neuron activation logit', meaningKh: 'តម្លៃ Logit ចូលណឺរ៉ូន', role: 'Input' },
            { symbol: '0.1x', meaningEn: 'Fixed leak slope preventing gradient starvation', meaningKh: 'ជម្រាលថេរការពារកុំឱ្យដាច់ក្រាដ្យង់', role: 'Fixed Leak' },
            { symbol: '\\alpha', meaningEn: 'Trainable slope parameter in PReLU', meaningKh: 'ប៉ារ៉ាម៉ែត្រជម្រាលដែលអាចរៀនបានក្នុង PReLU', role: 'Learnable Parameter' },
            { symbol: '\\partial f / \\partial \\alpha', meaningEn: 'Gradient of activation with respect to slope', meaningKh: 'ក្រាដ្យង់នៃអនុគមន៍ធៀបនឹងមេគុណជម្រាល', role: 'Backprop Gradient' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Metric Slider',
        fieldName: 'Alpha_Slope_Slider',
        controlLabelEn: 'Set Negative Slope Alpha (α)',
        controlLabelKh: 'កំណត់តម្លៃមេគុណជម្រាល Alpha (α)',
        defaultValue: '0.10',
        min: 0.01,
        max: 0.50,
        step: 0.01,
        purposeEn: 'Simulates the dynamic tuning of the leak parameter in real time.',
        purposeKh: 'បង្ហាញការកែសម្រួលប៉ារ៉ាម៉ែត្រជម្រាលតាមពេលវេលាជាក់ស្តែង។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Leaky ReLU: max(0.1x, x) [or max(0.01x, x)]',
          'Parametric ReLU (PReLU): max(αx, x)',
          '1. Retains all core benefits of ReLU: computationally ultra-fast and non-saturating for positive activations.',
          '2. Primary Breakthrough: Will not "die"! Because the slope is non-zero (0.1 or α) when x < 0, neurons receive gradient updates even when inactive.'
        ],
        kh: [
          'Leaky ReLU៖ max(0.1x, x) [ឬ max(0.01x, x)]',
          'Parametric ReLU (PReLU)៖ max(αx, x)',
          '១. រក្សាគុណសម្បត្តិស្នូលទាំងអស់របស់ ReLU៖ គណនាលឿនបំផុត និងគ្មានភាពឆ្អែតសម្រាប់តម្លៃវិជ្ជមាន។',
          '២. របកគំហើញធំបំផុត៖ ណឺរ៉ូននឹងមិនស្លាប់ឡើយ (Will not die)! ដោយសារជម្រាលមិនស្មើ ០ (០.១ ឬ α) នៅពេល x < 0 ណឺរ៉ូននៅតែទទួលបានក្រាដ្យង់ដើម្បីធ្វើបច្ចុប្បន្នភាពទម្ងន់។'
        ]
      },
      deepDiveExplanation: {
        en: 'By introducing a slight leak in the negative regime, Leaky ReLU guarantees that the derivative is always at least 0.01 or 0.1, ensuring gradients never dry up during backpropagation. He et al. (2015) took this further with Parametric ReLU (PReLU), allowing each convolutional channel to learn its own personalized slope α. On ImageNet, PReLU outperformed human-level image classification benchmarks for the first time in history.',
        kh: 'តាមរយៈការបើកឱ្យមានជម្រាលបន្តិចក្នុងតំបន់អវិជ្ជមាន Leaky ReLU ធានាថាដេរីវេយ៉ាងហោចណាស់ក៏ស្មើ 0.01 ឬ 0.1 ដែលជួយឱ្យក្រាដ្យង់នៅតែបន្តហូរជានិច្ចក្នុងអំឡុងពេល Backpropagation។ ក្រុមស្រាវជ្រាវរបស់លោក Kaiming He (ឆ្នាំ ២០១៥) បានអភិវឌ្ឍបន្ថែមទៅជា Parametric ReLU (PReLU) ដែលអនុញ្ញាតឱ្យប៉ុស្តិ៍នីមួយៗរៀនសូត្រជម្រាល α ដោយខ្លួនឯង។ លើទិន្នន័យ ImageNet គំរូ PReLU បានយកឈ្នះលើសមត្ថភាពភ្នែកមនុស្សជាលើកដំបូងក្នុងប្រវត្តិសាស្ត្រ។'
      },
      practicalApplication: {
        titleEn: 'Generative Adversarial Networks (GAN) Discriminator',
        titleKh: 'បណ្តាញបែងចែក (Discriminator) ក្នុងគំរូបង្កើតរូបភាព GAN',
        scenarioEn: 'Deep Convolutional GANs (DCGAN) utilize Leaky ReLU throughout the Discriminator network to prevent sparse zero gradients from stalling generator competition.',
        scenarioKh: 'ប្រព័ន្ធបង្កើតរូបភាពសិប្បនិម្មិត DCGAN ប្រើប្រាស់ Leaky ReLU នៅគ្រប់ស្រទាប់នៃ Discriminator ដើម្បីការពារកុំឱ្យក្រាដ្យង់ស្មើ ០ ធ្វើឱ្យគាំងការប្រកួតប្រជែងបង្កើតរូបភាព។',
        businessImpactEn: 'Eliminates mode collapse, producing photo-realistic high-resolution image synthesis with stable adversarial convergence.',
        businessImpactKh: 'លុបបំបាត់បញ្ហាគាំង Mode Collapse និងបង្កើតរូបភាពកម្រិតច្បាស់ដូចរូបថតពិតៗប្រកបដោយស្ថិរភាព។'
      }
    },
    interactiveType: 'leaky_relu'
  },

  // SLIDE 10
  {
    id: 10,
    slideNumber: 10,
    category: 'Activations',
    englishTitle: 'Activation Functions: Exponential Linear Unit (ELU)',
    khmerTitle: 'អនុគមន៍សកម្មភាព៖ ELU (Exponential Linear Unit - ភាពរលូន និង Zero-Mean)',
    pageIdentity: {
      bilingualPageTitle: 'Slide 10: Activation Functions — ELU / អនុគមន៍ ELU',
      bilingualPageTitleKh: 'អនុគមន៍ Exponential Linear Unit (ELU)៖ លក្ខណៈរលូន និង Zero-Mean',
      canvasSetup: 'Royal Violet & Electric Rose Theme (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ស្វាយរាជវង្ស និងពណ៌ផ្កាឈូកអគ្គិសនី (16:9)',
      hexPrimary: '#8B5CF6',
      hexSecondary: '#EC4899',
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#38BDF8',
      themeRationaleEn: 'Smooth gradient violet and rose signify the smooth asymptotic exponential curve of ELU compared to jagged piecewise-linear ReLUs.',
      themeRationaleKh: 'ពណ៌ស្វាយ និងផ្កាឈូករលូន បង្ហាញពីខ្សែកោងអិចស្ប៉ូណង់ស្យែលដ៏រលូននៃ ELU បើធៀបនឹងរាងបាក់កែងនៃ ReLU។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and piecewise exponential formula box.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងប្រអប់រូបមន្តអិចស្ប៉ូណង់ស្យែលជាពីរវគ្គ។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Mathematical properties of ELU (smooth transition at 0, pushes mean activation closer to zero) vs the computational cost of exp(). Right 55%: Interactive ELU Curve Explorer with variable α slider and smooth derivative plot.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ លក្ខណៈគណិតវិទ្យានៃ ELU (ខ្សែកោងរលូនត្រង់ ០, រុញតម្លៃមធ្យមឱ្យជិតសូន្យ) ធៀបនឹងបន្ទុកគណនានៃ exp()។ ផ្នែកខាងស្តាំ ៥៥%៖ ក្រាហ្វអន្តរកម្ម ELU ជាមួយរបារកែប្រែ α និងខ្សែកោងដេរីវេដ៏រលូន។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_10', nameEn: 'Header & Piecewise Equation', nameKh: 'ក្បាលទំព័រ និងរូបមន្តជាវគ្គ', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_10', nameEn: 'ELU Property KPI Row', nameKh: 'ជួរ KPI លក្ខណៈពិសេស ELU', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'exp_10', nameEn: 'Zero-Mean & Exp Cost Analysis', nameKh: 'ការវិភាគ Zero-Mean និងថ្លៃដើម exp()', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'plt_10', nameEn: 'Interactive ELU Curve & Smooth Derivative', nameKh: 'ក្រាហ្វ ELU អន្តរកម្ម និងដេរីវេរលូន', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Mean Activation', labelKh: 'តម្លៃមធ្យមនៃសកម្មភាព', value: 'Closer to 0.0 (Zero-Mean)', tooltipEn: 'Pushes overall batch distribution toward zero center', tooltipKh: 'រុញទិន្នន័យឱ្យមានតម្លៃមធ្យមជិត ០ បង្កើនល្បឿនរៀន' },
        { labelEn: 'Noise Robustness', labelKh: 'ភាពធន់នឹងសំឡេងរំខាន', value: 'High (Smooth Saturation)', tooltipEn: 'Asymptotically bounded by -alpha in negative tail', tooltipKh: 'កម្រិតព្រំដែន -alpha ការពារការប្រែប្រួលរំខានខ្លាំង' },
        { labelEn: 'Computational Burden', labelKh: 'បន្ទុកគណនាកុំព្យូទ័រ', value: 'Requires exp() Power', tooltipEn: 'Slightly slower inference compared to pure ReLU', tooltipKh: 'យឺតជាង ReLU បន្តិចដោយសារការគណនាស្វ័យគុណ exp()' }
      ],
      chartSetup: {
        chartType: 'Spline Smooth Curve & Asymptotic Limit Line',
        chartTypeKh: 'ក្រាហ្វខ្សែកោងរលូន Spline និងបន្ទាត់ព្រំដែន Asymptotic',
        dimensions: ['Input_x (-8 to +8)'],
        metrics: ['ELU_Output (f(x))', 'ELU_Derivative (df/dx)', 'Asymptotic_Floor (-alpha)'],
        sortOrder: 'Input_x ASCENDING',
        filterDefault: 'Alpha = 1.0',
        chartDescriptionEn: 'Depicts how ELU transitions smoothly at x=0 into an exponential saturation curve bounded by -alpha.',
        chartDescriptionKh: 'បង្ហាញពីរបៀបដែល ELU ផ្លាស់ប្តូរយ៉ាងរលូនត្រង់ x=0 ទៅជាខ្សែកោងអិចស្ប៉ូណង់ស្យែលដែលទប់ដោយ -alpha។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Exponential Linear Unit (ELU)',
          formulaNameKh: 'អនុគមន៍ Exponential Linear Unit (ELU)',
          latex: 'f(x) = \\begin{cases} x & \\text{if } x \\ge 0 \\\\ \\alpha(e^x - 1) & \\text{if } x < 0 \\end{cases}',
          latexSecondary: '\\frac{df(x)}{dx} = \\begin{cases} 1 & \\text{if } x \\ge 0 \\\\ f(x) + \\alpha & \\text{if } x < 0 \\end{cases}',
          explanationEn: 'ELU combines linear behavior for positive inputs with a smooth exponential saturation floor bounded by -α for negative inputs.',
          explanationKh: 'ELU រួមបញ្ចូលលក្ខណៈលីនេអ៊ែរសម្រាប់ធាតុវិជ្ជមាន ជាមួយខ្សែកោងអិចស្ប៉ូណង់ស្យែលរលូនដែលទប់ដោយ -α សម្រាប់ធាតុអវិជ្ជមាន។',
          variables: [
            { symbol: 'x', meaningEn: 'Input logit signal', meaningKh: 'សញ្ញាធាតុបញ្ចូល Logit', role: 'Input' },
            { symbol: '\\alpha', meaningEn: 'Hyperparameter scaling the negative saturation (usually α = 1.0)', meaningKh: 'ប៉ារ៉ាម៉ែត្រកំណត់ទំហំឆ្អែតអវិជ្ជមាន (ជាទូទៅ α = 1.0)', role: 'Scale Factor' },
            { symbol: 'e^x - 1', meaningEn: 'Exponential decay curve passing smoothly through 0 at x=0', meaningKh: 'ខ្សែកោងអិចស្ប៉ូណង់ស្យែលកាត់តាមចំណុច ០ យ៉ាងរលូន', role: 'Smooth Negative' },
            { symbol: 'f(x) + \\alpha', meaningEn: 'Efficient derivative computation directly reusing the output', meaningKh: 'រូបមន្តដេរីវេដ៏ឆ្លាតវៃដែលប្រើប្រាស់លទ្ធផល f(x) ផ្ទាល់', role: 'Gradient' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Metric Slider',
        fieldName: 'ELU_Alpha_Scale',
        controlLabelEn: 'Adjust ELU Alpha (α)',
        controlLabelKh: 'កែសម្រួលប៉ារ៉ាម៉ែត្រ ELU Alpha (α)',
        defaultValue: '1.0',
        min: 0.1,
        max: 3.0,
        step: 0.1,
        purposeEn: 'Modulates the negative asymptotic limit to observe shifts in the mean distribution.',
        purposeKh: 'កែសម្រួលកម្រិតព្រំដែនអវិជ្ជមាន ដើម្បីសង្កេតមើលការផ្លាស់ប្តូរនៃតម្លៃមធ្យម។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Exponential Linear Unit (ELU):',
          'f(x) = x if x ≥ 0, and α(eˣ - 1) if x < 0.',
          '1. Retains all advantages of ReLU and Leaky ReLU (no vanishing gradient for x > 0).',
          '2. Closer to zero mean output: The negative saturation naturally pulls batch activations toward zero mean, speeding up gradient descent.',
          '3. Problem: Computation requires exp(), making forward/backward passes slightly heavier than pure ReLU.'
        ],
        kh: [
          'អនុគមន៍ Exponential Linear Unit (ELU)៖',
          'f(x) = x ប្រសិនបើ x ≥ 0 និង α(eˣ - 1) ប្រសិនបើ x < 0។',
          '១. រក្សាគុណសម្បត្តិទាំងអស់របស់ ReLU និង Leaky ReLU (គ្មានការបាត់បង់ក្រាដ្យង់ពេល x > 0)។',
          '២. តម្លៃមធ្យមខិតជិតសូន្យ (Closer to zero mean)៖ តំបន់អវិជ្ជមានរុញតម្លៃសកម្មភាពជាមធ្យមឱ្យទៅជិត ០ ជួយពន្លឿនការរៀនសូត្ររបស់ Gradient Descent។',
          '៣. គុណវិបត្តិ៖ ទាមទារការគណនាស្វ័យគុណ exp() ដែលធ្វើឱ្យដំណើរការទៅមុខ និងថយក្រោយស៊ីកម្លាំងជាង ReLU បន្តិច។'
        ]
      },
      deepDiveExplanation: {
        en: 'Clevert et al. (ICLR 2016) proposed ELU to solve the "bias shift" problem present in ReLU networks. Because ReLU is non-negative, the mean activation of each layer is strictly positive, creating a systemic bias in subsequent layers. ELU allows activations to be negative while smoothly saturating, bringing the mean activation close to zero without the sharp discontinuity of Leaky ReLU. This makes the gradient landscape significantly smoother.',
        kh: 'Clevert និងសហការី (សន្និសីទ ICLR ឆ្នាំ ២០១៦) បានបង្កើត ELU ដើម្បីដោះស្រាយបញ្ហា "Bias Shift" នៅក្នុងបណ្តាញ ReLU។ ដោយសារ ReLU គ្មានតម្លៃអវិជ្ជមាន តម្លៃមធ្យមនៃស្រទាប់នីមួយៗគឺវិជ្ជមានជានិច្ច ដែលនាំឱ្យមានភាពលម្អៀងជាប្រព័ន្ធដល់ស្រទាប់បន្ទាប់។ ELU អនុញ្ញាតឱ្យមានតម្លៃអវិជ្ជមានដោយរលូន នាំឱ្យតម្លៃមធ្យមខិតជិតសូន្យ ដោយគ្មានចំណុចបាក់កែងស្រួចដូច Leaky ReLU ឡើយ។ ការណ៍នេះធ្វើឱ្យលំហូរក្រាដ្យង់មានភាពរលូនបំផុត។'
      },
      practicalApplication: {
        titleEn: 'Autonomous Drone Flight Control & Telemetry',
        titleKh: 'ប្រព័ន្ធបញ្ជាការហោះហើរ និងវាស់ស្ទង់ទិន្នន័យដ្រូនស្វ័យប្រវត្ត',
        scenarioEn: 'Flight controllers use ELU activations in their inertial navigation network to smoothly absorb sensor vibrations and turbulence without abrupt control jitter.',
        scenarioKh: 'ប្រព័ន្ធបញ្ជាដ្រូនប្រើប្រាស់អនុគមន៍ ELU ក្នុងបណ្តាញរុករក ដើម្បីស្រូបយករំញ័រ និងខ្យល់កន្ត្រាក់ដោយរលូន ដោយមិនបង្កឱ្យមានការកន្ត្រាក់ដៃចង្កូតភ្លាមៗ។',
        businessImpactEn: 'Reduces attitude stabilization error by 22% compared to standard ReLU under extreme storm turbulence.',
        businessImpactKh: 'កាត់បន្ថយកំហុសលំនឹងការហោះហើរបាន ២២% បើធៀបនឹង ReLU ធម្មតា ក្នុងស្ថានភាពខ្យល់ព្យុះខ្លាំង។'
      }
    },
    interactiveType: 'elu'
  },

  // SLIDE 11
  {
    id: 11,
    slideNumber: 11,
    category: 'Architecture',
    englishTitle: 'Neural Network Model: Notation, Layer Matrix Mathematics & Vectorization',
    khmerTitle: 'គំរូបណ្តាញណឺរ៉ូន៖ និមិត្តសញ្ញា ប្រមាណវិធីម៉ាទ្រីស និងការធ្វើវ៉ិចទ័រស្រទាប់',
    pageIdentity: {
      bilingualPageTitle: 'Slide 11: Neural Network Model (Layers & Notation) / គំរូបណ្តាញណឺរ៉ូន',
      bilingualPageTitleKh: 'និមិត្តសញ្ញា និងប្រមាណវិធីម៉ាទ្រីសក្នុងបណ្តាញណឺរ៉ូន (Layer Mathematics)',
      canvasSetup: 'Academic Blueprint & Navy Precision (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ខៀវប្លង់វិស្វកម្ម និងប្រផេះប្រណិត (16:9)',
      hexPrimary: '#1E40AF',
      hexSecondary: '#10B981',
      hexBackground: '#0B1120',
      hexSurface: '#172033',
      hexAccent: '#F59E0B',
      themeRationaleEn: 'Deep blueprint navy mirrors clean linear algebra textbook conventions, ensuring absolute clarity in matrix dimensions.',
      themeRationaleKh: 'ពណ៌ខៀវចាស់ដូចសៀវភៅពិជគណិតលីនេអ៊ែរ ធានានូវភាពច្បាស់លាស់ក្នុងការយល់ដឹងអំពីវិមាត្រនៃម៉ាទ្រីស។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and vectorized layer forward propagation formula a^(2) = g(W^(1)x + B^(1)).',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងរូបមន្តវ៉ិចទ័រ a^(2) = g(W^(1)x + B^(1))។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 48%: Comprehensive notation breakdown: a_i^(j) (activation of unit i in layer j) and W^(j) mapping layer j to j+1. Right 52%: Interactive 3x3 Weight Matrix × 3x1 Feature Vector multiplication visualizer with live dimension tracker.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៨%៖ តារាងពន្យល់និមិត្តសញ្ញាពេញលេញ៖ a_i^(j) (សកម្មភាពថ្នាំង i ក្នុងស្រទាប់ j) និង W^(j) ម៉ាទ្រីសទម្ងន់ពីស្រទាប់ j ទៅ j+1។ ផ្នែកខាងស្តាំ ៥២%៖ ផ្ទាំងអន្តរកម្មគុណម៉ាទ្រីសទម្ងន់ 3x3 ជាមួយវ៉ិចទ័រ 3x1 បង្ហាញវិមាត្រច្បាស់ៗ។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '880 px',
        rightPanelWidth: '960 px'
      },
      componentPositions: [
        { id: 'hdr_11', nameEn: 'Header & Layer Formula', nameKh: 'ក្បាលទំព័រ និងរូបមន្តស្រទាប់', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_11', nameEn: 'Matrix Dimension Consistency Row', nameKh: 'ជួរ KPI វិមាត្រម៉ាទ្រីស', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'not_11', nameEn: 'Formal Notation & Symbol Dictionary', nameKh: 'វចនានុក្រមនិមិត្តសញ្ញា និងអត្ថន័យស្រទាប់', coordinates: 'X: 40, Y: 220, W: 880, H: 790', type: 'Text' },
        { id: 'mat_11', nameEn: 'Vectorized Layer Matrix Calculator', nameKh: 'ម៉ាស៊ីនគណនាប្រមាណវិធីម៉ាទ្រីសស្រទាប់', coordinates: 'X: 940, Y: 220, W: 940, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Layer 1 (Input Dimension)', labelKh: 'ស្រទាប់ទី ១ (វិមាត្រធាតុបញ្ចូល)', value: '3 Units + Bias (x ∈ R³)', tooltipEn: 'Three physical features plus constant bias unit +1', tooltipKh: 'លក្ខណៈធាតុបញ្ចូល ៣ បូកនឹងថ្នាំង Bias +1' },
        { labelEn: 'Layer 2 (Hidden Matrix W¹)', labelKh: 'ស្រទាប់ទី ២ (ម៉ាទ្រីសទម្ងន់ W¹)', value: '3 × 3 Matrix (9 Weights)', tooltipEn: 'Maps 3 inputs to 3 hidden neurons', tooltipKh: 'ភ្ជាប់ធាតុបញ្ចូល ៣ ទៅកាន់ណឺរ៉ូនលាក់ ៣' },
        { labelEn: 'Layer 3 (Output Layer)', labelKh: 'ស្រទាប់ទី ៣ (ស្រទាប់បញ្ចេញចុងក្រោយ)', value: '1 Unit (h(x) Scalar)', tooltipEn: 'Final binary or scalar prediction output', tooltipKh: 'លទ្ធផលទស្សន៍ទាយស្កាលែចុងក្រោយ' }
      ],
      chartSetup: {
        chartType: 'Cross-tab Dimension Matrix & Neural Graph Flow',
        chartTypeKh: 'តារាងម៉ាទ្រីស Cross-tab និងដ្យាក្រាមលំហូរបណ្តាញណឺរ៉ូន',
        dimensions: ['Source_Layer_j (ស្រទាប់ដើម)', 'Target_Layer_j_plus_1 (ស្រទាប់បន្ទាប់)'],
        metrics: ['Matrix_Rows (ចំនួនជួរដេក = ថ្នាំងគោលដៅ)', 'Matrix_Cols (ចំនួនជួរឈរ = ថ្នាំងដើម)'],
        sortOrder: 'Source_Layer_j ASCENDING',
        filterDefault: 'Layer 1 to Layer 2 Mapping',
        chartDescriptionEn: 'Formally maps the linear algebra rule: If layer j has s_j units and layer j+1 has s_{j+1} units, then W^(j) has dimension s_{j+1} × s_j.',
        chartDescriptionKh: 'បង្ហាញច្បាប់ពិជគណិតលីនេអ៊ែរ៖ ប្រសិនបើស្រទាប់ j មាន s_j ថ្នាំង ហើយស្រទាប់ j+1 មាន s_{j+1} ថ្នាំង នោះម៉ាទ្រីស W^(j) ត្រូវតែមានវិមាត្រ s_{j+1} × s_j។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Vectorized Forward Propagation for Layer 2',
          formulaNameKh: 'ការបញ្ជូនសញ្ញាទៅមុខជាវ៉ិចទ័រសម្រាប់ស្រទាប់ទី ២',
          latex: 'a^{(2)} = g\\left( W^{(1)} x + B^{(1)} \\right)',
          latexSecondary: '\\begin{bmatrix} a_1^{(2)} \\\\ a_2^{(2)} \\\\ a_3^{(2)} \\end{bmatrix} = g\\left( \\begin{bmatrix} w_{11}^{(1)} & w_{12}^{(1)} & w_{13}^{(1)} \\\\ w_{21}^{(1)} & w_{22}^{(1)} & w_{23}^{(1)} \\\\ w_{31}^{(1)} & w_{32}^{(1)} & w_{33}^{(1)} \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{bmatrix} + \\begin{bmatrix} b_1^{(1)} \\\\ b_2^{(1)} \\\\ b_3^{(1)} \\end{bmatrix} \\right)',
          explanationEn: 'The entire hidden layer activation vector a^(2) (3x1) is computed in a single vectorized matrix multiplication: (3x3) * (3x1) + (3x1), followed by element-wise activation function g(z).',
          explanationKh: 'វ៉ិចទ័រសកម្មភាពនៃស្រទាប់លាក់ a^(2) (3x1) ត្រូវបានគណនាក្នុងប្រមាណវិធីម៉ាទ្រីសតែមួយជុំ៖ (3x3) * (3x1) + (3x1) រួចឆ្លងកាត់អនុគមន៍សកម្ម g(z) លើធាតុនីមួយៗ។',
          variables: [
            { symbol: 'a_i^{(j)}', meaningEn: 'Activation of unit i in layer j', meaningKh: 'តម្លៃសកម្មភាពនៃថ្នាំង i នៅក្នុងស្រទាប់ j', role: 'Neuron State' },
            { symbol: 'W^{(j)}', meaningEn: 'Weight matrix mapping layer j to layer j+1', meaningKh: 'ម៉ាទ្រីសទម្ងន់តភ្ជាប់ពីស្រទាប់ j ទៅកាន់ស្រទាប់ j+1', role: 'Connection Matrix' },
            { symbol: 'x', meaningEn: 'Input vector (layer 1 activations a^(1))', meaningKh: 'វ៉ិចទ័រធាតុបញ្ចូល (សកម្មភាពស្រទាប់ទី ១ a^(1))', role: 'Input Vector' },
            { symbol: 'B^{(1)}', meaningEn: 'Bias column vector for layer 2', meaningKh: 'វ៉ិចទ័របញ្ឈរនៃតម្លៃលម្អៀង (Bias) សម្រាប់ស្រទាប់ទី ២', role: 'Bias Vector' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Dropdown',
        fieldName: 'Matrix_Dimension_Inspector',
        controlLabelEn: 'Inspect Layer Matrix Multiplication',
        controlLabelKh: 'ពិនិត្យប្រមាណវិធីគុណម៉ាទ្រីសស្រទាប់',
        defaultValue: 'W(1)x (3x3 * 3x1)',
        options: ['W(1)x (3x3 * 3x1) -> Layer 2', 'W(2)a(2) (1x3 * 3x1) -> Layer 3'],
        purposeEn: 'Selects which layer transition to simulate and verify dimension consistency.',
        purposeKh: 'ជ្រើសរើសដំណាក់កាលស្រទាប់ដើម្បីផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវនៃវិមាត្រម៉ាទ្រីស។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Neural Network Model Notation:',
          'a_i^(j) = activation of unit i in layer j.',
          'W^(j) = weight matrix mapping from layer j to layer j + 1.',
          'Vectorized Forward Step: a^(2) = g(W^(1)x + B^(1)).',
          'Dimension Rule: [3x1] = g([3x3] * [3x1] + [3x1]).'
        ],
        kh: [
          'និមិត្តសញ្ញាគំរូបណ្តាញណឺរ៉ូន៖',
          'a_i^(j) = តម្លៃសកម្មភាព (Activation) នៃថ្នាំង i នៅក្នុងស្រទាប់ j។',
          'W^(j) = ម៉ាទ្រីសទម្ងន់ដែលតភ្ជាប់ពីស្រទាប់ j ទៅកាន់ស្រទាប់ j + 1។',
          'ជំហានបញ្ជូនទៅមុខជាវ៉ិចទ័រ៖ a^(2) = g(W^(1)x + B^(1))។',
          'ច្បាប់វិមាត្រ៖ [3x1] = g([3x3] * [3x1] + [3x1])។'
        ]
      },
      deepDiveExplanation: {
        en: 'Vectorization is the computational backbone of modern AI. Instead of using nested "for-loops" to iterate over thousands of neurons, linear algebra allows all activations in a layer to be computed simultaneously using hardware-accelerated Basic Linear Algebra Subprograms (BLAS) on GPUs. Understanding that the row count of W matches the next layer units and the column count matches current layer units prevents 95% of neural network coding errors.',
        kh: 'ការធ្វើវ៉ិចទ័រ (Vectorization) គឺជាឆ្អឹងខ្នងគណនានៃប្រព័ន្ធ AI ទំនើប។ ជំនួសឱ្យការប្រើរង្វិលជុំ (for-loops) ត្រួតគ្នាដើម្បីគណនាណឺរ៉ូនរាប់ពាន់ ពិជគណិតលីនេអ៊ែរអនុញ្ញាតឱ្យយើងគណនាណឺរ៉ូនទាំងអស់ក្នុងស្រទាប់តែមួយដំណាលគ្នា តាមរយៈបន្ទះឈីប GPU (BLAS)។ ការយល់ដឹងថាចំនួនជួរដេកនៃម៉ាទ្រីស W ត្រូវតែស្មើចំនួនណឺរ៉ូនស្រទាប់បន្ទាប់ ហើយចំនួនជួរឈរស្មើចំនួនណឺរ៉ូនស្រទាប់បច្ចុប្បន្ន ជួយការពារកំហុសសរសេរកូដរហូតដល់ ៩៥%។'
      },
      practicalApplication: {
        titleEn: 'GPU Parallel Tensor Acceleration (PyTorch / CUDA)',
        titleKh: 'ការបង្កើនល្បឿនគណនាតង់ស័រលើ GPU (PyTorch និង CUDA)',
        scenarioEn: 'A deep learning framework executes the layer matrix multiplication Wx + b across a batch of 256 images simultaneously in parallel CUDA cores.',
        scenarioKh: 'កម្មវិធី Deep Learning ដំណើរការប្រមាណវិធីគុណម៉ាទ្រីស Wx + b ទៅលើរូបភាព ២៥៦ សន្លឹកក្នុងពេលតែមួយលើស្នូល CUDA នៃ GPU។',
        businessImpactEn: 'Achieves a 120x throughput speedup compared to scalar CPU loops, enabling training on millions of records.',
        businessImpactKh: 'សម្រេចបានល្បឿនលឿនជាងការគណនាលើ CPU ដល់ទៅ ១២០ ដង ដែលអាចឱ្យយើងហ្វឹកហាត់លើទិន្នន័យរាប់លានជួរបាន។'
      }
    },
    interactiveType: 'layer_matrix'
  },

  // SLIDE 12
  {
    id: 12,
    slideNumber: 12,
    category: 'Architecture',
    englishTitle: 'Deep Neural Network Architecture: Multi-Layer Hierarchical Networks',
    khmerTitle: 'ស្ថាបត្យកម្មបណ្តាញណឺរ៉ូនជម្រៅជ្រៅ៖ បណ្តាញពហុស្រទាប់ និងឋានានុក្រមតំណាង',
    pageIdentity: {
      bilingualPageTitle: 'Slide 12: Deep Neural Network Architecture / ស្ថាបត្យកម្មបណ្តាញណឺរ៉ូនជម្រៅជ្រៅ',
      bilingualPageTitleKh: 'បណ្តាញណឺរ៉ូនពហុស្រទាប់ (Layer 1 → Layer 2 → Layer 3 → Layer 4)',
      canvasSetup: 'Deep Indigo & Cyan Network Hierarchy (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ស្វាយចាស់ និងខៀវភ្លឺ បង្ហាញរចនាសម្ព័ន្ធឋានានុក្រម (16:9)',
      hexPrimary: '#4F46E5',
      hexSecondary: '#06B6D4',
      hexBackground: '#0B1120',
      hexSurface: '#162235',
      hexAccent: '#F59E0B',
      themeRationaleEn: 'Multiple distinct layer color tones illustrate hierarchical feature abstraction: low-level edges (Layer 2) to complex semantic parts (Layer 3) to final classification (Layer 4).',
      themeRationaleKh: 'ពណ៌ខុសៗគ្នាតាមស្រទាប់ បង្ហាញពីការទាញយកលក្ខណៈតាមលំដាប់លំដោយ៖ ពីគែមសាមញ្ញ (ស្រទាប់ ២) ទៅជាផ្នែករូបភាពស្មុគស្មាញ (ស្រទាប់ ៣) និងការសម្រេចចុងក្រោយ (ស្រទាប់ ៤)។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title, 4-layer composition badge, and layer count scorecard.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា ស្លាកសមាសភាព ៤ ស្រទាប់ និងចំនួនថ្នាំងសរុប។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Architectural composition table displaying Layer 1 (Input, 3 units + bias), Layer 2 (Hidden, 3 units + bias), Layer 3 (Hidden, 2 units + bias), and Layer 4 (Output, 1 unit). Right 55%: Interactive 4-Layer Dynamic Neural Flow diagram with animated node hover states.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ តារាងរចនាសម្ព័ន្ធស្ថាបត្យកម្ម៖ ស្រទាប់ ១ (បញ្ចូល ៣ ថ្នាំង + bias), ស្រទាប់ ២ (លាក់ ៣ ថ្នាំង + bias), ស្រទាប់ ៣ (លាក់ ២ ថ្នាំង + bias), ស្រទាប់ ៤ (បញ្ចេញ ១ ថ្នាំង)។ ផ្នែកខាងស្តាំ ៥៥%៖ ដ្យាក្រាមបណ្តាញ ៤ ស្រទាប់អន្តរកម្ម អាចដាក់ mouse មើលតំណភ្ជាប់បាន។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_12', nameEn: 'Header & Layer Summary', nameKh: 'ក្បាលទំព័រ និងសេចក្តីសង្ខេបស្រទាប់', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_12', nameEn: 'Multi-layer Parameter Count KPI', nameKh: 'ផ្ទាំងពិន្ទុចំនួនប៉ារ៉ាម៉ែត្រក្នុងបណ្តាញ', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'tbl_12', nameEn: 'Hierarchical Layer Specification Table', nameKh: 'តារាងកំណត់លក្ខណៈបច្ចេកទេសស្រទាប់', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Chart' },
        { id: 'net_12', nameEn: 'Interactive 4-Layer Network Topology', nameKh: 'ដ្យាក្រាមអន្តរកម្មស្ថាបត្យកម្មបណ្តាញ ៤ ស្រទាប់', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Total Network Layers (L)', labelKh: 'ចំនួនស្រទាប់សរុប (L)', value: 'L = 4 Layers', tooltipEn: 'Input (1) + 2 Hidden Layers (2, 3) + Output (4)', tooltipKh: 'ស្រទាប់បញ្ចូល (១) + ស្រទាប់លាក់ពីរ (២, ៣) + ស្រទាប់បញ្ចេញ (៤)' },
        { labelEn: 'Trainable Weight Matrices', labelKh: 'ចំនួនម៉ាទ្រីសទម្ងន់ដែលត្រូវរៀន', value: '3 Weight Matrices', tooltipEn: 'W^(1): 3x3, W^(2): 2x3, W^(3): 1x2', tooltipKh: 'W^(1): 3x3, W^(2): 2x3, W^(3): 1x2' },
        { labelEn: 'Total Trainable Parameters', labelKh: 'ចំនួនប៉ារ៉ាម៉ែត្រសរុប (Weights + Biases)', value: '23 Parameters', tooltipEn: '(3x3 + 3) + (2x3 + 2) + (1x2 + 1) = 12 + 8 + 3 = 23', tooltipKh: 'ទម្ងន់ ១៧ + Bias ៦ = ២៣ ប៉ារ៉ាម៉ែត្រសរុប' }
      ],
      chartSetup: {
        chartType: 'Sankey / Network Layer Flow Diagram',
        chartTypeKh: 'ដ្យាក្រាមលំហូរសញ្ញាតាមស្រទាប់ (Sankey Network Flow)',
        dimensions: ['Layer_Number (លេខស្រទាប់ 1 ដល់ 4)', 'Node_Identity (ឈ្មោះថ្នាំង)'],
        metrics: ['Forward_Activation_Value (តម្លៃសកម្មភាព)', 'Parameter_Weight_Count (ចំនួនទម្ងន់)'],
        sortOrder: 'Layer_Number ASCENDING',
        filterDefault: 'Full Forward Pass',
        chartDescriptionEn: 'Visualizes the cascade of information from Layer 1 through two distinct hidden processing stages to the scalar hypothesis h(x).',
        chartDescriptionKh: 'បង្ហាញការបញ្ជូនព័ត៌មានជាបន្តបន្ទាប់ពីស្រទាប់ទី ១ ឆ្លងកាត់ស្រទាប់លាក់ទាំងពីរ រហូតដល់សម្មតិកម្ម h(x) ចុងក្រោយ។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Chained Forward Propagation Pipeline',
          formulaNameKh: 'ដំណើរការបញ្ជូនសញ្ញាទៅមុខជាសង្វាក់ពហុស្រទាប់',
          latex: '\\begin{aligned} a^{(1)} &= x \\\\ a^{(2)} &= g(W^{(1)} a^{(1)} + B^{(1)}) \\\\ a^{(3)} &= g(W^{(2)} a^{(2)} + B^{(2)}) \\\\ h(x) = a^{(4)} &= g(W^{(3)} a^{(3)} + B^{(3)}) \\end{aligned}',
          explanationEn: 'The output of each intermediate layer becomes the exact input for the subsequent layer, forming a composition of functions: h(x) = g(W³ g(W² g(W¹ x + B¹) + B²) + B³).',
          explanationKh: 'លទ្ធផលនៃស្រទាប់នីមួយៗក្លាយជាធាតុបញ្ចូលផ្ទាល់សម្រាប់ស្រទាប់បន្ទាប់ ដែលបង្កើតបានជាសមាសភាពនៃអនុគមន៍បន្តបន្ទាប់គ្នា។',
          variables: [
            { symbol: 'a^{(1)}', meaningEn: 'Input layer features x (3x1)', meaningKh: 'លក្ខណៈស្រទាប់បញ្ចូល x (3x1)', role: 'Inputs' },
            { symbol: 'W^{(1)}, B^{(1)}', meaningEn: 'Weights (3x3) and biases (3x1) for first hidden layer', meaningKh: 'ទម្ងន់ (3x3) និង Bias (3x1) សម្រាប់ស្រទាប់លាក់ទីមួយ', role: 'Layer 1 Params' },
            { symbol: 'W^{(2)}, B^{(2)}', meaningEn: 'Weights (2x3) and biases (2x1) compressing 3 units to 2', meaningKh: 'ទម្ងន់ (2x3) និង Bias (2x1) បង្ហាប់ពី ៣ ថ្នាំងមកសល់ ២', role: 'Layer 2 Params' },
            { symbol: 'W^{(3)}, B^{(3)}', meaningEn: 'Weights (1x2) and bias (1x1) projecting to final output', meaningKh: 'ទម្ងន់ (1x2) និង Bias (1x1) បង្កើតលទ្ធផលចុងក្រោយ', role: 'Output Params' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Dropdown',
        fieldName: 'Active_Layer_Path_Viewer',
        controlLabelEn: 'Isolate Layer Information Flow',
        controlLabelKh: 'ជ្រើសរើសដំណាក់កាលលំហូរព័ត៌មាន',
        defaultValue: 'All Layers (1 -> 4)',
        options: ['All Layers (1 -> 4)', 'Layer 1 to Layer 2 (3 -> 3 units)', 'Layer 2 to Layer 3 (3 -> 2 units)', 'Layer 3 to Layer 4 (2 -> 1 unit)'],
        purposeEn: 'Allows students to isolate individual weight matrices and trace signal transformations.',
        purposeKh: 'អនុញ្ញាតឱ្យសិស្សមើលលម្អិតលើម៉ាទ្រីសទម្ងន់នីមួយៗ និងតាមដានការបំប្លែងសញ្ញា។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Deep Neural Network Model (4 Layers):',
          'Layer 1 (Input Layer): x1, x2, x3 + bias node 1.',
          'Layer 2 (Hidden Layer 1): a1^(2), a2^(2), a3^(2) + bias node 1.',
          'Layer 3 (Hidden Layer 2): a1^(3), a2^(3) + bias node 1.',
          'Layer 4 (Output Layer): h(x) = a1^(4).',
          'Hierarchical Representation: Each successive layer learns increasingly abstract features from raw inputs.'
        ],
        kh: [
          'ស្ថាបត្យកម្មបណ្តាញណឺរ៉ូនជម្រៅជ្រៅ (៤ ស្រទាប់)៖',
          'ស្រទាប់ទី ១ (ស្រទាប់បញ្ចូល)៖ x1, x2, x3 + ថ្នាំង bias 1។',
          'ស្រទាប់ទី ២ (ស្រទាប់លាក់ទី ១)៖ a1^(2), a2^(2), a3^(2) + ថ្នាំង bias 1។',
          'ស្រទាប់ទី ៣ (ស្រទាប់លាក់ទី ២)៖ a1^(3), a2^(3) + ថ្នាំង bias 1។',
          'ស្រទាប់ទី ៤ (ស្រទាប់បញ្ចេញ)៖ h(x) = a1^(4)។',
          'ការរៀនសូត្រជាឋានានុក្រម៖ ស្រទាប់នីមួយៗរៀនសូត្រលក្ខណៈអរូបីកាន់តែស៊ីជម្រៅពីធាតុបញ្ចូលដើម។'
        ]
      },
      deepDiveExplanation: {
        en: 'The breakthrough of Deep Learning lies in depth over width. While the Universal Approximation Theorem proves that a single wide hidden layer can approximate any continuous function, it may require exponentially many neurons! Adding depth (multiple hidden layers) creates an exponential hierarchy where Layer 2 detects edges and textures, Layer 3 combines them into object parts (wheels, windows, eyes), and Layer 4 identifies the full semantic category.',
        kh: 'របកគំហើញពិតប្រាកដនៃ Deep Learning គឺស្ថិតលើជម្រៅ (Depth) មិនមែនលើទទឹង (Width) ឡើយ។ ទោះបីជាទ្រឹស្តីបទ Universal Approximation បញ្ជាក់ថា ស្រទាប់លាក់តែមួយដែលមានទទឹងធំខ្លាំងអាចប៉ាន់ស្មានអនុគមន៍ណាក៏បានក៏ដោយ ក៏វាទាមទារចំនួនណឺរ៉ូនច្រើនលើសលប់ជាស្វ័យគុណ! ការបន្ថែមជម្រៅ (ស្រទាប់លាក់ច្រើន) បង្កើតបាននូវឋានានុក្រមរៀនសូត្រដ៏មានឥទ្ធិពល ដោយស្រទាប់ទី ២ រកឃើញគែមនិងផ្ទៃ ស្រទាប់ទី ៣ បង្កើតជាបំណែកវត្ថុ (កង់ រថយន្ត ភ្នែក) ហើយស្រទាប់ទី ៤ សម្រេចលើឈ្មោះវត្ថុទាំងមូល។'
      },
      practicalApplication: {
        titleEn: 'Facial Biometric Recognition System',
        titleKh: 'ប្រព័ន្ធសម្គាល់ផ្ទៃមុខជីវមាត្រស្វ័យប្រវត្តិ',
        scenarioEn: 'Airport security gates process traveler faces through a 4-stage convolutional backbone to verify identity against passport chips.',
        scenarioKh: 'ច្រកទ្វារសុវត្ថិភាពព្រលានយន្តហោះដំណើរការផ្ទៀងផ្ទាត់ផ្ទៃមុខអ្នកដំណើរតាមរយៈបណ្តាញ ៤ ដំណាក់កាល ដើម្បីផ្ទៀងផ្ទាត់ជាមួយបន្ទះឈីបលិខិតឆ្លងដែន។',
        businessImpactEn: 'Reduces passenger verification time to 0.4 seconds while maintaining a 1 in 1,000,000 false acceptance rate.',
        businessImpactKh: 'កាត់បន្ថយពេលផ្ទៀងផ្ទាត់អ្នកដំណើរមកត្រឹម ០.៤ វិនាទី និងកម្រិតកំហុសច្រឡំត្រឹម ១ ក្នុង ១ លាននាក់។'
      }
    },
    interactiveType: 'deep_network'
  },

  // SLIDE 13
  {
    id: 13,
    slideNumber: 13,
    category: 'Architecture',
    englishTitle: 'Neural Network for Multiclass Classification: One-Hot Encoding',
    khmerTitle: 'បណ្តាញណឺរ៉ូនសម្រាប់ចំណាត់ថ្នាក់ពហុថ្នាក់ និងការបំលែង One-Hot Encoding',
    pageIdentity: {
      bilingualPageTitle: 'Slide 13: Multiclass Classification (One-Hot Encoding) / ការបែងចែកពហុថ្នាក់',
      bilingualPageTitleKh: 'បណ្តាញណឺរ៉ូនសម្រាប់ចំណាត់ថ្នាក់ពហុថ្នាក់ និង One-Hot Encoding',
      canvasSetup: 'Prism Multi-Color & Emerald Analytics Theme (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ចម្រុះ Prism និងបៃតងត្បូងមរកត (16:9)',
      hexPrimary: '#6366F1', // Indigo
      hexSecondary: '#10B981', // Emerald
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#F59E0B',
      themeRationaleEn: 'Multiple distinct bright accent colors represent distinct classification categories (Class 1, Class 2, Class 3) in the output layer vector.',
      themeRationaleKh: 'ពណ៌ភ្លឺច្បាស់ខុសៗគ្នាតំណាងឱ្យថ្នាក់ចំណាត់ថ្នាក់នីមួយៗ (ថ្នាក់ទី ១, ថ្នាក់ទី ២, ថ្នាក់ទី ៣) ក្នុងវ៉ិចទ័រស្រទាប់បញ្ចេញ។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and One-Hot vector showcase block [1,0,0]^T, [0,1,0]^T, [0,0,1]^T.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងប្លុកបង្ហាញវ៉ិចទ័រ One-Hot [1,0,0]^T, [0,1,0]^T, [0,0,1]^T។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Explanation of why scalar labels (1, 2, 3) inject false ordinal bias and how One-Hot Encoding creates orthogonal label vectors. Right 55%: Interactive 3-Class Output Node Visualizer simulating real-time Softmax/Sigmoid probability outputs across 3 classes.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ ការពន្យល់ពីមូលហេតុដែលស្លាកលេខស្កាលែ (1, 2, 3) បង្កឱ្យមានភាពលម្អៀងលំដាប់ខុសឆ្គង និងរបៀបដែល One-Hot Encoding បង្កើតវ៉ិចទ័រកាត់កែងគ្នា។ ផ្នែកខាងស្តាំ ៥៥%៖ ក្រាហ្វអន្តរកម្មថ្នាំងបញ្ចេញ ៣ ថ្នាក់ បង្ហាញប្រូបាប៊ីលីតេតាមពេលវេលាជាក់ស្តែង។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_13', nameEn: 'Header & One-Hot Vector Pill', nameKh: 'ក្បាលទំព័រ និងស្លាកវ៉ិចទ័រ One-Hot', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_13', nameEn: 'Multiclass KPI Matrix', nameKh: 'ផ្ទាំងពិន្ទុ KPI ពហុថ្នាក់', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'exp_13', nameEn: 'One-Hot Orthogonality Analysis', nameKh: 'ការវិភាគភាពកាត់កែងនៃ One-Hot Encoding', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'viz_13', nameEn: 'Interactive 3-Class Output Probability Grid', nameKh: 'ក្រឡាប្រូបាប៊ីលីតេអន្តរកម្មនៃថ្នាំងបញ្ចេញ ៣ ថ្នាក់', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Number of Classes (K)', labelKh: 'ចំនួនថ្នាក់ចំណាត់ថ្នាក់ (K)', value: 'K = 3 Distinct Classes', tooltipEn: 'Pedestrian, Car, Motorcycle or similar classes', tooltipKh: 'ឧទាហរណ៍៖ អ្នកថ្មើរជើង រថយន្ត ម៉ូតូ' },
        { labelEn: 'Output Layer Nodes', labelKh: 'ចំនួនថ្នាំងនៅស្រទាប់បញ្ចេញ', value: 'K Neurons (h(x) ∈ Rᴷ)', tooltipEn: 'One dedicated output neuron per target class', tooltipKh: 'ណឺរ៉ូនបញ្ចេញមួយដាច់ដោយឡែកសម្រាប់ថ្នាក់នីមួយៗ' },
        { labelEn: 'Vector Orthogonality', labelKh: 'ភាពកាត់កែងនៃវ៉ិចទ័រស្លាក', value: 'Dot Product y_a · y_b = 0', tooltipEn: 'Classes are equidistant and mutually exclusive', tooltipKh: 'ផលគុណស្កាលែស្មើ ០ បញ្ជាក់ថាថ្នាក់នីមួយៗឯករាជ្យដាច់ពីគ្នា' }
      ],
      chartSetup: {
        chartType: 'Horizontal Stacked Probability Bar & One-Hot Matrix',
        chartTypeKh: 'ក្រាហ្វរបារប្រូបាប៊ីលីតេផ្ដេក និងម៉ាទ្រីស One-Hot',
        dimensions: ['Sample_Instance (គំរូទិន្នន័យ)', 'Target_Class (ថ្នាក់គោលដៅ)'],
        metrics: ['Predicted_Probability (ប្រូបាប៊ីលីតេទស្សន៍ទាយ)', 'Ground_Truth_Bit (តម្លៃពិត 0 ឬ 1)'],
        sortOrder: 'Sample_Instance ASCENDING',
        filterDefault: 'All 3 Classes Active',
        chartDescriptionEn: 'Contrasts ground-truth one-hot vectors against continuous model predicted probabilities across all K classes.',
        chartDescriptionKh: 'ប្រៀបធៀបវ៉ិចទ័រពិត One-Hot ធៀបនឹងតម្លៃប្រូបាប៊ីលីតេបន្តដែលគំរូ AI បានទស្សន៍ទាយលើគ្រប់ K ថ្នាក់។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'One-Hot Vector Encoding',
          formulaNameKh: 'ការបំប្លែងទម្រង់វ៉ិចទ័រ One-Hot',
          latex: 'y \\in \\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix} \\right\\}, \\quad h(x) = \\begin{bmatrix} P(y=1|x) \\\\ P(y=2|x) \\\\ P(y=3|x) \\end{bmatrix}',
          explanationEn: 'Instead of assigning integer classes y ∈ {1, 2, 3}, we convert y into a K-dimensional vector where only the true class index has a 1 and all other positions are 0.',
          explanationKh: 'ជំនួសឱ្យការប្រើលេខរៀងស្កាលែ y ∈ {1, 2, 3} យើងបំលែង y ទៅជាវ៉ិចទ័រ K វិមាត្រ ដែលមានលេខ ១ តែត្រង់ទីតាំងថ្នាក់ត្រឹមត្រូវ ហើយទីតាំងផ្សេងទៀតស្មើ ០ ទាំងអស់។',
          variables: [
            { symbol: 'y', meaningEn: 'Ground truth label vector in {0, 1}^K', meaningKh: 'វ៉ិចទ័រស្លាកពិតប្រាកដក្នុង {0, 1}^K', role: 'Target Vector' },
            { symbol: 'h(x)', meaningEn: 'Predicted probability vector from K output neurons', meaningKh: 'វ៉ិចទ័រប្រូបាប៊ីលីតេទស្សន៍ទាយពីណឺរ៉ូនបញ្ចេញទាំង K', role: 'Prediction Vector' },
            { symbol: 'K', meaningEn: 'Total number of target classes', meaningKh: 'ចំនួនថ្នាក់ចំណាត់ថ្នាក់សរុប', role: 'Class Count' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Dropdown',
        fieldName: 'Active_Sample_Class',
        controlLabelEn: 'Select Target Ground-Truth Class',
        controlLabelKh: 'ជ្រើសរើសថ្នាក់ពិតនៃទិន្នន័យគំរូ',
        defaultValue: 'Class 1 (Pedestrian)',
        options: ['Class 1: [1, 0, 0]^T (Pedestrian)', 'Class 2: [0, 1, 0]^T (Car)', 'Class 3: [0, 0, 1]^T (Motorcycle)'],
        purposeEn: 'Dynamically updates the target vector and highlights corresponding output node activation.',
        purposeKh: 'ធ្វើបច្ចុប្បន្នភាពវ៉ិចទ័រគោលដៅ និងបង្ហាញណឺរ៉ូនបញ្ចេញដែលត្រូវធ្វើសកម្មភាព។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Neural Network for Multiclass Classification:',
          'Output vector: Instead of scalar y ∈ {1, 2, 3}, y becomes a one-hot encoded vector.',
          'Class 1: [1, 0, 0]ᵀ',
          'Class 2: [0, 1, 0]ᵀ',
          'Class 3: [0, 0, 1]ᵀ',
          'Layer 4 contains 3 distinct neurons, each outputting the independent probability of that class.'
        ],
        kh: [
          'បណ្តាញណឺរ៉ូនសម្រាប់ចំណាត់ថ្នាក់ពហុថ្នាក់ (Multiclass Classification)៖',
          'វ៉ិចទ័រលទ្ធផល៖ ជំនួសឱ្យការប្រើលេខស្កាលែ y ∈ {1, 2, 3} តម្លៃ y ក្លាយជាវ៉ិចទ័រ One-Hot Encoding។',
          'ថ្នាក់ទី ១៖ [1, 0, 0]ᵀ',
          'ថ្នាក់ទី ២៖ [0, 1, 0]ᵀ',
          'ថ្នាក់ទី ៣៖ [0, 0, 1]ᵀ',
          'ស្រទាប់ទី ៤ មានណឺរ៉ូនដាច់ដោយឡែកចំនួន ៣ ដែលណឺរ៉ូននីមួយៗបញ្ចេញប្រូបាប៊ីលីតេឯករាជ្យនៃថ្នាក់នោះ។'
        ]
      },
      deepDiveExplanation: {
        en: 'Using numeric integers like y = 1, 2, 3 for unordered categories (e.g., Cat, Dog, Bird) forces an unintended geometric relationship: the model incorrectly assumes that a Bird (3) is closer to a Dog (2) than a Cat (1), and that Dog is the mathematical average of Cat and Bird! One-hot encoding creates orthogonal vectors where the Euclidean distance between any two distinct classes is always strictly √2, treating all categories with geometric fairness.',
        kh: 'ការប្រើប្រាស់លេខរៀងចំនួនគត់ដូចជា y = 1, 2, 3 សម្រាប់ប្រភេទដែលគ្មានលំដាប់ (ដូចជា ឆ្មា ឆ្កែ សត្វស្លាប) នឹងបង្ខំឱ្យម៉ូដែលយល់ច្រឡំថា សត្វស្លាប (3) នៅជិតឆ្កែ (2) ជាងឆ្មា (1) ហើយឆ្កែជាមធ្យមភាគរវាងឆ្មានិងសត្វស្លាប! ការបំលែង One-Hot Encoding បង្កើតវ៉ិចទ័រកាត់កែងគ្នា ដែលចម្ងាយរវាងថ្នាក់ពីរផ្សេងគ្នាគឺស្មើ √2 ជានិច្ច ធានាបាននូវសមធម៌ធរណីមាត្ររវាងប្រភេទទាំងអស់។'
      },
      practicalApplication: {
        titleEn: 'Multi-Disease Chest X-Ray Diagnosis',
        titleKh: 'ប្រព័ន្ធវិភាគរោគវិនិច្ឆ័យជំងឺសួតពហុប្រភេទតាមកាំរស្មីអ៊ិច',
        scenarioEn: 'Hospital radiologists use a multi-head neural network to classify X-rays into Normal [1,0,0], Pneumonia [0,1,0], or COVID-19 [0,0,1].',
        scenarioKh: 'គ្រូពេទ្យជំនាញប្រើប្រាស់បណ្តាញណឺរ៉ូនពហុថ្នាំង ដើម្បីវិភាគរូបភាពសួតជា ៣ ប្រភេទ៖ សួតធម្មតា [1,0,0], រលាកសួត [0,1,0], ឬ កូវីដ-១៩ [0,0,1]។',
        businessImpactEn: 'Achieves 98.7% multi-class diagnostic sensitivity, triaging critical emergencies within 5 seconds.',
        businessImpactKh: 'សម្រេចបានភាពត្រឹមត្រូវ ៩៨.៧% ក្នុងការវិភាគពហុជំងឺ និងជួយសង្គ្រោះបន្ទាន់អ្នកជំងឺធ្ងន់ធ្ងរក្នុងរយៈពេលត្រឹម ៥ វិនាទី។'
      }
    },
    interactiveType: 'multiclass_onehot'
  },

  // SLIDE 14
  {
    id: 14,
    slideNumber: 14,
    category: 'Training & Loss',
    englishTitle: 'Multiclass Classification: Cross-Entropy Cost Function Formulation',
    khmerTitle: 'ចំណាត់ថ្នាក់ពហុថ្នាក់៖ អនុគមន៍ចំណាយ Cross-Entropy Cost Function',
    pageIdentity: {
      bilingualPageTitle: 'Slide 14: Multiclass Cost Function / អនុគមន៍ចំណាយពហុថ្នាក់',
      bilingualPageTitleKh: 'រូបមន្តអនុគមន៍ចំណាយ Cross-Entropy សម្រាប់ចំណាត់ថ្នាក់ពហុថ្នាក់ J(Θ)',
      canvasSetup: 'Dark Analytical Crimson & Golden Metric Accents (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ក្រហមចាស់បែបវិភាគ និងពណ៌មាសនៃសូចនាករ (16:9)',
      hexPrimary: '#DC2626', // Crimson (Cost/Loss)
      hexSecondary: '#F59E0B', // Amber
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#38BDF8',
      themeRationaleEn: 'Crimson symbolizes penalty and cost minimization, while clear math cards deconstruct the double summation across m samples and K classes.',
      themeRationaleKh: 'ពណ៌ក្រហមតំណាងឱ្យការផាកពិន័យ និងការបង្រួមអនុគមន៍ចំណាយ ស្របពេលកាតរូបមន្តពន្យល់លម្អិតផលបូកពីរជាន់ m គំរូ និង K ថ្នាក់។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and complete multiclass cross-entropy cost equation J(Θ).',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងរូបមន្តពេញលេញនៃអនុគមន៍ចំណាយ Cross-Entropy J(Θ)។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 48%: Mathematical dissection of the double summation (1/m Σ_i Σ_k), logarithmic penalty behavior when prediction diverges from ground truth, and the probability bounds 0 ≤ h(x) ≤ 1. Right 52%: Interactive Logarithmic Loss Penalty curve simulator where dragging prediction h(x) closer to 0 when y=1 causes penalty to skyrocket to infinity.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៨%៖ ការវិភាគរូបមន្តផលបូកពីរជាន់ (1/m Σ_i Σ_k) ការផាកពិន័យតាមលោការីត និងដែនប្រូបាប៊ីលីតេ 0 ≤ h(x) ≤ 1។ ផ្នែកខាងស្តាំ ៥២%៖ ក្រាហ្វអន្តរកម្មបង្ហាញការផាកពិន័យកើនឡើងគ្មានដែនកំណត់ នៅពេលដែលគំរូទស្សន៍ទាយខុសឆ្ងាយពីតម្លៃពិត y=1។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '880 px',
        rightPanelWidth: '960 px'
      },
      componentPositions: [
        { id: 'hdr_14', nameEn: 'Header & Master Cost Equation', nameKh: 'ក្បាលទំព័រ និងរូបមន្តអនុគមន៍ចំណាយមេ', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_14', nameEn: 'Loss Penalty KPI Row', nameKh: 'ជួរ KPI ការផាកពិន័យការបាត់បង់', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'eqn_14', nameEn: 'Double Summation & Variable Map', nameKh: 'ការវិភាគផលបូកពីរជាន់ និងតារាងអថេរ', coordinates: 'X: 40, Y: 220, W: 880, H: 790', type: 'Formula' },
        { id: 'plt_14', nameEn: 'Interactive Log-Loss Penalty Curve', nameKh: 'ក្រាហ្វអន្តរកម្មបង្ហាញការផាកពិន័យ Log-Loss', coordinates: 'X: 940, Y: 220, W: 940, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Training Dataset Size (m)', labelKh: 'ទំហំទិន្នន័យហ្វឹកហាត់ (m)', value: 'm Samples (1 to m)', tooltipEn: 'Outer summation aggregates error over all training examples', tooltipKh: 'ផលបូកខាងក្រៅបូកសរុបកំហុសលើគ្រប់គំរូទាំងអស់' },
        { labelEn: 'Number of Output Classes (K)', labelKh: 'ចំនួនថ្នាក់បញ្ចេញ (K)', value: 'K Classes (1 to K)', tooltipEn: 'Inner summation computes cross-entropy over all K output neurons', tooltipKh: 'ផលបូកខាងក្នុងគណនា Cross-Entropy លើគ្រប់ណឺរ៉ូនទាំង K' },
        { labelEn: 'Confidence Bounds', labelKh: 'កម្រិតព្រំដែនទំនុកចិត្ត', value: '0 ≤ h(x)_k ≤ 1', tooltipEn: 'Ensures stable log evaluation without domain errors', tooltipKh: 'ធានាថាតម្លៃក្នុងលោការីតមិនបង្កកំហុសគណិតវិទ្យា' }
      ],
      chartSetup: {
        chartType: 'Logarithmic Penalty Curve & Cost vs Epoch Plot',
        chartTypeKh: 'ក្រាហ្វខ្សែកោងផាកពិន័យលោការីត និងក្រាហ្វចំណាយធៀបនឹង Epoch',
        dimensions: ['Predicted_Probability_h_k (0.01 to 0.99)'],
        metrics: ['Loss_Penalty_When_y_is_1 (-log(h))', 'Loss_Penalty_When_y_is_0 (-log(1-h))'],
        sortOrder: 'Predicted_Probability_h_k ASCENDING',
        filterDefault: 'Full Range View',
        chartDescriptionEn: 'Plots -log(h) to demonstrate how confident wrong predictions produce an astronomical cost penalty approaching infinity.',
        chartDescriptionKh: 'គូរក្រាហ្វ -log(h) ដើម្បីបង្ហាញថាការទស្សន៍ទាយខុសទាំងមានទំនុកចិត្តខ្ពស់ នឹងត្រូវផាកពិន័យធំមហិមាខិតជិតអនន្ត។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Multiclass Cross-Entropy Cost Function',
          formulaNameKh: 'អនុគមន៍ចំណាយ Cross-Entropy ពហុថ្នាក់',
          latex: 'J(\\Theta) = -\\frac{1}{m} \\sum_{i=1}^{m} \\sum_{k=1}^{K} \\left[ y_k^{(i)} \\log\\left( h(x^{(i)})_k \\right) + (1 - y_k^{(i)}) \\log\\left( 1 - h(x^{(i)})_k \\right) \\right]',
          explanationEn: 'The overall cost J(Θ) is the average cross-entropy loss over m training examples across all K output classes. When y_k = 1, only the first term survives; when y_k = 0, only the second term survives.',
          explanationKh: 'ចំណាយសរុប J(Θ) គឺជាមធ្យមភាគនៃការបាត់បង់ Cross-Entropy លើ m គំរូ និងគ្រប់ K ថ្នាក់។ នៅពេល y_k = 1 សល់តែតួទីមួយប៉ុណ្ណោះ ហើយនៅពេល y_k = 0 សល់តែតួទីពីរ។',
          variables: [
            { symbol: 'J(\\Theta)', meaningEn: 'Overall scalar cost or objective function to minimize', meaningKh: 'តម្លៃចំណាយសរុបដែលត្រូវបង្រួមឱ្យតូចបំផុត', role: 'Objective Function' },
            { symbol: 'm', meaningEn: 'Total number of training examples', meaningKh: 'ចំនួនទិន្នន័យគំរូហ្វឹកហាត់សរុប', role: 'Batch Size' },
            { symbol: 'K', meaningEn: 'Total number of output classes', meaningKh: 'ចំនួនថ្នាក់ចំណាត់ថ្នាក់សរុប', role: 'Classes' },
            { symbol: 'y_k^{(i)}', meaningEn: 'Binary indicator (0 or 1) whether class k is correct for example i', meaningKh: 'តម្លៃប៊ីត (០ ឬ ១) បញ្ជាក់ថាថ្នាក់ k ត្រឹមត្រូវសម្រាប់គំរូ i', role: 'Target Indicator' },
            { symbol: 'h(x^{(i)})_k', meaningEn: 'Predicted probability that example i belongs to class k', meaningKh: 'ប្រូបាប៊ីលីតេទស្សន៍ទាយថាគំរូ i ជាកម្មសិទ្ធិនៃថ្នាក់ k', role: 'Prediction Probability' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Metric Slider',
        fieldName: 'Predicted_Prob_Probe',
        controlLabelEn: 'Simulate Predicted Probability h(x) for True Class (y=1)',
        controlLabelKh: 'សាកល្បងប្រូបាប៊ីលីតេទស្សន៍ទាយ h(x) សម្រាប់ថ្នាក់ពិត (y=1)',
        defaultValue: '0.90',
        min: 0.01,
        max: 0.99,
        step: 0.02,
        purposeEn: 'Watch how dropping confidence from 0.99 to 0.01 explodes individual sample loss from 0.01 to 4.60+.',
        purposeKh: 'មើលពីរបៀបដែលការធ្លាក់ចុះទំនុកចិត្តពី ០.៩៩ មក ០.០១ ធ្វើឱ្យតម្លៃចំណាយកើនឡើងពី ០.០១ ទៅជាង ៤.៦០។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Multiclass Classification Cost Function:',
          'y^(i) = [y1^(i), y2^(i), ..., yK^(i)]ᵀ, where yk^(i) ∈ {0, 1}.',
          'h(x^(i)) = [h(x^(i))1, ..., h(x^(i))K]ᵀ.',
          'Cost: J(Θ) = -1/m Σ(i=1..m) Σ(k=1..K) [ yk^(i) log(h(x^(i))k) + (1 - yk^(i)) log(1 - h(x^(i))k) ].',
          'Note: Probability constraint ensures 0 ≤ h(x^(i))k ≤ 1.'
        ],
        kh: [
          'អនុគមន៍ចំណាយសម្រាប់ចំណាត់ថ្នាក់ពហុថ្នាក់ (Cost Function)៖',
          'y^(i) = [y1^(i), y2^(i), ..., yK^(i)]ᵀ ដែល yk^(i) ∈ {0, 1}។',
          'h(x^(i)) = [h(x^(i))1, ..., h(x^(i))K]ᵀ។',
          'អនុគមន៍ចំណាយ៖ J(Θ) = -1/m Σ(i=1..m) Σ(k=1..K) [ yk^(i) log(h(x^(i))k) + (1 - yk^(i)) log(1 - h(x^(i))k) ]។',
          'ចំណាំសំខាន់៖ លក្ខខណ្ឌប្រូបាប៊ីលីតេត្រូវធានាថា 0 ≤ h(x^(i))k ≤ 1 ជានិច្ច។'
        ]
      },
      deepDiveExplanation: {
        en: 'The cross-entropy cost function is mathematically rooted in Information Theory and Maximum Likelihood Estimation (MLE). If the model predicts h(x) = 0.99 when y = 1, -log(0.99) is virtually 0 (negligible penalty). But if the model is arrogant and wrong—predicting h(x) = 0.001 when y = 1—then -log(0.001) = 6.9, sending massive gradient correction signals backwards. This steep gradient prevents training stalls and guarantees rapid parameter convergence.',
        kh: 'អនុគមន៍ចំណាយ Cross-Entropy មានប្រភពចេញពីទ្រឹស្តីព័ត៌មានវិទ្យា (Information Theory) និងការប៉ាន់ស្មានលទ្ធភាពអតិបរមា (MLE)។ ប្រសិនបើគំរូទស្សន៍ទាយ h(x) = 0.99 នៅពេល y = 1 នោះ -log(0.99) គឺស្ទើរតែស្មើ ០ (មិនសូវរងការពិន័យឡើយ)។ ប៉ុន្តែប្រសិនបើគំរូទស្សន៍ទាយខុសទាំងស្រុង ដោយទស្សន៍ទាយត្រឹមតែ h(x) = 0.001 នៅពេលដែល y = 1 នោះ -log(0.001) = 6.9 ដែលបញ្ជូនក្រាដ្យង់ដ៏ធំសម្បើមត្រឡប់ថយក្រោយដើម្បីកែតម្រូវទម្ងន់។ ជម្រាលដ៏ចោតនេះការពារកុំឱ្យការហ្វឹកហាត់គាំង និងធានានូវល្បឿននៃការប្រមូលផ្តុំទម្ងន់យ៉ាងរហ័ស។'
      },
      practicalApplication: {
        titleEn: 'Multi-Asset Financial Fraud Transaction Surveillance',
        titleKh: 'ប្រព័ន្ធតាមដានប្រតិបត្តិការក្លែងបន្លំហិរញ្ញវត្ថុពហុប្រភេទ',
        scenarioEn: 'Fintech payment gateways run multiclass cross-entropy loss to flag transactions as Legitimate, Identity Theft, or Money Laundering.',
        scenarioKh: 'ប្រព័ន្ធទូទាត់ Fintech ប្រើប្រាស់ Cross-Entropy Loss ដើម្បីចាត់ថ្នាក់ប្រតិបត្តិការជា៖ ស្របច្បាប់, លួចអត្តសញ្ញាណ, ឬ លាងលុយកខ្វក់។',
        businessImpactEn: 'Drastically penalizes misclassified money laundering attempts, reducing fraudulent losses by $4.2M annually.',
        businessImpactKh: 'ផាកពិន័យធ្ងន់ធ្ងរលើការចាត់ថ្នាក់ខុសនៃបទល្មើសលាងលុយ កាត់បន្ថយការបាត់បង់ប្រាក់បាន ៤.២ លានដុល្លារក្នុងមួយឆ្នាំ។'
      }
    },
    interactiveType: 'cross_entropy'
  }
];
