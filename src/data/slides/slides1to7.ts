import { SlideBlueprint } from '../../types';

export const slides1to7: SlideBlueprint[] = [
  // SLIDE 1
  {
    id: 1,
    slideNumber: 1,
    category: 'Foundation',
    englishTitle: 'Basics of Neural Networks (Course Overview & Executive Summary)',
    khmerTitle: 'មូលដ្ឋានគ្រឹះនៃបណ្តាញណឺរ៉ូនសិប្បនិម្មិត (សេចក្តីផ្តើម និងទិដ្ឋភាពទូទៅនៃមេរៀន)',
    pageIdentity: {
      bilingualPageTitle: 'Module 02: Basics of Neural Networks / វគ្គសិក្សាទី ០២៖ មូលដ្ឋានគ្រឹះនៃបណ្តាញណឺរ៉ូនសិប្បនិម្មិត',
      bilingualPageTitleKh: 'វគ្គសិក្សាទី ០២៖ មូលដ្ឋានគ្រឹះនៃបណ្តាញណឺរ៉ូនសិប្បនិម្មិត (ដឹកនាំដោយ សាស្ត្រាចារ្យ បណ្ឌិត វ៉ាលី ដូណា)',
      canvasSetup: 'Executive Slate & Navy High-Contrast Theme (16:9 Ratio - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ខៀវក្រម៉ៅ និងប្រផេះប្រណិត បែបវិជ្ជាជីវៈ (សមាមាត្រ 16:9 - 1920x1080 ភិចសែល)',
      hexPrimary: '#1E40AF', // Royal Deep Blue
      hexSecondary: '#EA580C', // Coral Accent
      hexBackground: '#0F172A', // Slate 900
      hexSurface: '#1E293B', // Slate 800
      hexAccent: '#38BDF8', // Cyan Highlight
      themeRationaleEn: 'Utilizes high-contrast deep slate and corporate royal blue to establish an authoritative academic executive dashboard tone suitable for engineering and data science leadership.',
      themeRationaleKh: 'ប្រើប្រាស់ពណ៌ខៀវចាស់ និងផ្ទៃពណ៌ Slate ងងឹត ដើម្បីបង្កើតនូវសោភ័ណភាពបែបវិជ្ជាជីវៈជាន់ខ្ពស់ ស័ក្តិសមសម្រាប់អ្នកដឹកនាំផ្នែកវិទ្យាសាស្ត្រទិន្នន័យ និងវិស្វកម្ម AI។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 12% of canvas: Left-aligned course metadata badge, centered dual-language title block, right-aligned instructor avatar and institutional brand logo.',
        kh: 'ផ្នែកខាងលើ ១២%៖ ស្លាកព័ត៌មានវគ្គសិក្សាខាងឆ្វេង ចំណងជើងទ្វេភាសានៅចំកណ្តាល រូបតំណាងសាស្ត្រាចារ្យ និងនិមិត្តសញ្ញាស្ថាប័ននៅខាងស្តាំដៃ។'
      },
      mainWorkspaceCanvas: {
        en: 'Split-view 16:9 layout: Left 45% houses course syllabus matrix, learning competencies, and prerequisite checklist; Right 55% presents an interactive module readiness scorecard grid and neural architecture interactive roadmap.',
        kh: 'ប្លង់ចែកជាពីរលើផ្ទៃ 16:9៖ ផ្នែកខាងឆ្វេង ៤៥% ផ្ទុកមាតិកាសង្ខេប បញ្ជីសមត្ថភាពសិក្សា និងចំណេះដឹងជាមូលដ្ឋាន។ ផ្នែកខាងស្តាំ ៥៥% បង្ហាញផ្ទាំងពិន្ទុត្រៀមខ្លួន និងផែនទីបង្ហាញផ្លូវស្ថាបត្យកម្មបណ្តាញណឺរ៉ូន។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_1', nameEn: 'Header & Instructor Banner', nameKh: 'បដាក្បាលទំព័រ និងព័ត៌មានគ្រូឧទ្ទេស', coordinates: 'X: 40, Y: 30, W: 1840, H: 100', type: 'Header' },
        { id: 'kpi_1', nameEn: 'Curriculum KPI Scorecards', nameKh: 'ផ្ទាំងពិន្ទុគន្លឹះកម្មវិធីសិក្សា', coordinates: 'X: 40, Y: 150, W: 1840, H: 120', type: 'Scorecard' },
        { id: 'txt_1', nameEn: 'Course Objectives & Syllabus', nameKh: 'គោលបំណង និងមាតិកាមេរៀន', coordinates: 'X: 40, Y: 290, W: 820, H: 720', type: 'Text' },
        { id: 'mod_1', nameEn: 'Interactive Roadmap Diagram', nameKh: 'ដ្យាក្រាមផែនទីបង្ហាញផ្លូវអន្តរកម្ម', coordinates: 'X: 880, Y: 290, W: 1000, H: 720', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Core Modules Covered', labelKh: 'ចំនួនផ្នែកមេរៀនស្នូល', value: '7 Sections', tooltipEn: 'From Non-linear Hypotheses to Optimizers and Khmer OCR Lab', tooltipKh: 'ចាប់ពីសម្មតិកម្មមិនលីនេអ៊ែរ រហូតដល់អុបទិមៃស័រ និងលំហាត់ OCR អក្សរខ្មែរ' },
        { labelEn: 'Fundamental Math Theorems', labelKh: 'រូបមន្តគណិតវិទ្យាមូលដ្ឋាន', value: '14 Equations', tooltipEn: 'Vectorized forward pass, backpropagation, and cross-entropy loss', tooltipKh: 'រូបមន្តដំណើរការទៅមុខ ដំណើរការបញ្ច្រាស និងអនុគមន៍បាត់បង់' },
        { labelEn: 'Target Proficiency Level', labelKh: 'កម្រិតសមត្ថភាពគោលដៅ', value: 'Advanced / ជាន់ខ្ពស់', tooltipEn: 'Production-ready Deep Learning fundamentals', tooltipKh: 'មូលដ្ឋានគ្រឹះ Deep Learning សម្រាប់អនុវត្តជាក់ស្តែង' }
      ],
      chartSetup: {
        chartType: 'Cross-tab Table & Topic Treemap',
        chartTypeKh: 'តារាង Cross-tab និងក្រាហ្វផ្ទៃប្រៀបធៀបប្រធានបទ (Treemap)',
        dimensions: ['Module_Category (ប្រភេទផ្នែក)', 'Slide_ID (លេខស្លាយ)', 'Topic_Name (ឈ្មោះប្រធានបទ)'],
        metrics: ['Estimated_Study_Minutes (នាទីសិក្សា)', 'Mathematical_Complexity_Score (កម្រិតគណិតវិទ្យា 1-10)'],
        sortOrder: 'Slide_ID ASCENDING',
        filterDefault: 'All Modules Active',
        chartDescriptionEn: 'Structured table mapping each slide to learning objectives, mathematical intensity, and practical application domains.',
        chartDescriptionKh: 'តារាងរចនាសម្ព័ន្ធដែលភ្ជាប់ស្លាយនីមួយៗទៅនឹងគោលបំណងសិក្សា កម្រិតស្មុគស្មាញនៃរូបមន្ត និងដែនអនុវត្តជាក់ស្តែង។'
      }
    },
    pageControls: [
      {
        controlType: 'Dropdown',
        fieldName: 'Module_Category_Filter',
        controlLabelEn: 'Filter by Knowledge Domain',
        controlLabelKh: 'ចម្រាញ់តាមផ្នែកចំណេះដឹង',
        defaultValue: 'All Domains',
        options: ['All Domains', 'Foundations & Non-linearity', 'Activation Functions', 'Network Architecture', 'Loss & Optimization', 'Regularization & Tuning', 'Applied OCR Lab'],
        purposeEn: 'Allows students to isolate specific parts of the presentation.',
        purposeKh: 'អនុញ្ញាតឱ្យសិស្ស ឬអ្នកទស្សនាជ្រើសរើសមើលផ្នែកជាក់លាក់ណាមួយនៃមេរៀន។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Neural Networks and Deep Learning — Lecture 02',
          'Course Title: Basics of Neural Networks',
          'Instructor: Dr. Valy Dona',
          'Core Focus: Bridging the gap from biological neural inspiration to mathematically rigorous vectorized machine learning architectures.'
        ],
        kh: [
          'បណ្តាញណឺរ៉ូន និងការរៀនជម្រៅជ្រៅ (Neural Networks and Deep Learning) — មេរៀនទី ២',
          'ចំណងជើងមេរៀន៖ មូលដ្ឋានគ្រឹះនៃបណ្តាញណឺរ៉ូនសិប្បនិម្មិត (Basics of Neural Networks)',
          'សាស្ត្រាចារ្យបង្រៀន៖ បណ្ឌិត វ៉ាលី ដូណា (Dr. Valy Dona)',
          'ទិសដៅស្នូល៖ ការផ្សារភ្ជាប់ពីគំនិតបំផុសបែបជីវសាស្ត្រនៃខួរក្បាលមនុស្ស ទៅជាស្ថាបត្យកម្មគណិតវិទ្យាវ៉ិចទ័រដែលកុំព្យូទ័រអាចរៀនសូត្របានយ៉ាងមានប្រសិទ្ធភាព។'
        ]
      },
      deepDiveExplanation: {
        en: 'This slide initiates the core foundation of Modern Deep Learning. It transitions students from simple linear models (like Linear or Logistic Regression) into deep neural structures capable of learning complex non-linear representations. Under the guidance of Dr. Valy Dona, this module establishes both theoretical intuition and implementation-ready mathematical formulations needed for real-world artificial intelligence applications.',
        kh: 'ស្លាយនេះបើកទំព័រដំបូងនៃវិស័យសិក្សា Deep Learning ទំនើប ដោយដឹកនាំអ្នកសិក្សាផ្លាស់ប្តូរពីគំរូលីនេអ៊ែរសាមញ្ញ (ដូចជា Linear Regression ឬ Logistic Regression) ទៅកាន់រចនាសម្ព័ន្ធបណ្តាញណឺរ៉ូនជម្រៅជ្រៅ ដែលមានលទ្ធភាពរៀនសូត្រលក្ខណៈស្មុគស្មាញមិនលីនេអ៊ែរ។ ក្រោមការដឹកនាំរបស់បណ្ឌិត វ៉ាលី ដូណា វគ្គសិក្សានេះពន្យល់ទាំងការយល់ដឹងពីទ្រឹស្តី និងរូបមន្តគណិតវិទ្យាវ៉ិចទ័រយ៉ាងម៉ត់ចត់ ដើម្បីយកទៅអនុវត្តផ្ទាល់ក្នុងប្រព័ន្ធ AI ជាក់ស្តែង។'
      },
      practicalApplication: {
        titleEn: 'Academic & Industry AI Onboarding',
        titleKh: 'ការតម្រង់ទិសផ្នែក AI ក្នុងវិស័យអប់រំ និងឧស្សាហកម្មបច្ចេកវិទ្យា',
        scenarioEn: 'A university data science lab or enterprise engineering team adopts this dashboard to track curriculum mastery before training large-scale deep learning models.',
        scenarioKh: 'មន្ទីរពិសោធន៍ទិន្នន័យនៅសាកលវិទ្យាល័យ ឬក្រុមវិស្វករផ្នែកបច្ចេកវិទ្យា ប្រើប្រាស់ផ្ទាំង BI នេះដើម្បីវាយតម្លៃការយល់ដឹងជាប្រព័ន្ធ មុនពេលឈានទៅបង្កើតគំរូ AI ខ្នាតធំ។',
        businessImpactEn: 'Reduces onboarding time by 40% and guarantees zero conceptual gaps in backpropagation and mathematical gradient descent.',
        businessImpactKh: 'កាត់បន្ថយពេលវេលាបណ្តុះបណ្តាលបុគ្គលិកថ្មីបាន ៤០% និងធានាថាមិនមានការយល់ច្រឡំលើដំណើរការគណិតវិទ្យា Backpropagation និង Gradient Descent ឡើយ។'
      }
    },
    interactiveType: 'title'
  },

  // SLIDE 2
  {
    id: 2,
    slideNumber: 2,
    category: 'Foundation',
    englishTitle: 'Non-Linear Hypotheses & Complex Decision Boundaries',
    khmerTitle: 'សម្មតិកម្មមិនលីនេអ៊ែរ និងដែនព្រំដែនសេចក្តីសម្រេចដ៏ស្មុគស្មាញ',
    pageIdentity: {
      bilingualPageTitle: 'Slide 02: Non-Linear Hypotheses / ស្លាយទី ០២៖ សម្មតិកម្មមិនលីនេអ៊ែរ',
      bilingualPageTitleKh: 'ហេតុអ្វីបានជាយើងត្រូវការសម្មតិកម្មមិនលីនេអ៊ែរ? (Non-Linear Hypotheses)',
      canvasSetup: 'Light Academic Analytics Grid with Coral/Indigo Accents (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ស្រាលបែបវិភាគទិន្នន័យ លាយពណ៌ស្វាយ និងពណ៌ទឹកក្រូច (16:9)',
      hexPrimary: '#4338CA', // Indigo
      hexSecondary: '#EF4444', // Red-Orange
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#38BDF8',
      themeRationaleEn: 'Contrasting colors emphasize the separation between two distinct data classes (Class 0: Blue, Class 1: Red) and the non-linear polynomial boundary.',
      themeRationaleKh: 'ពណ៌ផ្ទុយគ្នាយ៉ាងច្បាស់ ដើម្បីបង្ហាញពីភាពខុសគ្នារវាងទិន្នន័យពីរក្រុម (ក្រុម ០៖ ពណ៌ខៀវ, ក្រុម ១៖ ពណ៌ក្រហម) និងខ្សែព្រំដែនកោងមិនលីនេអ៊ែរ។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and hypothesis equation highlight card.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងកាតបង្ហាញរូបមន្តសម្មតិកម្មទូទៅ។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 40%: Mathematical formulation of polynomial expansion, variable dictionary, and feature combinatorial explosion table. Right 60%: Interactive 2D Scatter Plot with dynamic polynomial boundary simulation.',
        kh: 'ផ្នែកឆ្វេង ៤០%៖ រូបមន្តគណិតវិទ្យានៃពហុធា វចនានុក្រមអថេរ និងតារាងបង្ហាញពីការកើនឡើងហួសប្រមាណនៃចំនួនលក្ខណៈ (Combinatorial Explosion)។ ផ្នែកស្តាំ ៦០%៖ ក្រាហ្វចំណុចខ្ចាត់ខ្ចាយ (Scatter Plot) អន្តរកម្មជាមួយខ្សែខណ្ឌចែកកោង។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '760 px',
        rightPanelWidth: '1080 px'
      },
      componentPositions: [
        { id: 'hdr_2', nameEn: 'Page Header & Breadcrumbs', nameKh: 'ក្បាលទំព័រ និងផ្លូវរុករក', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_2', nameEn: 'Polynomial Feature Count KPI', nameKh: 'ពិន្ទុចំនួនលក្ខណៈពហុធា', coordinates: 'X: 40, Y: 110, W: 760, H: 100', type: 'Scorecard' },
        { id: 'eqn_2', nameEn: 'Equation Card & Variable Map', nameKh: 'កាតរូបមន្ត និងតារាងពន្យល់អថេរ', coordinates: 'X: 40, Y: 220, W: 760, H: 780', type: 'Formula' },
        { id: 'plt_2', nameEn: '2D Non-linear Scatter Plot', nameKh: 'ក្រាហ្វប្លង់ 2D បង្ហាញព្រំដែនមិនលីនេអ៊ែរ', coordinates: 'X: 820, Y: 110, W: 1060, H: 890', type: 'Chart' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Input Features (d)', labelKh: 'ចំនួនលក្ខណៈបញ្ចូលដើម (d)', value: '2 Features (x1, x2)', tooltipEn: 'Original two-dimensional continuous input space', tooltipKh: 'លំហធាតុបញ្ចូលពីរវិមាត្រដើម (x1, x2)' },
        { labelEn: 'Polynomial Degree Needed', labelKh: 'ដឺក្រេពហុធាដែលត្រូវការ', value: 'Degree ≥ 3', tooltipEn: 'Required to separate intertwined classes with high accuracy', tooltipKh: 'កម្រិតដឺក្រេអប្បបរមាដើម្បីខណ្ឌចែកទិន្នន័យរមួលចូលគ្នា' },
        { labelEn: 'Combinatorial Feature Explosion', labelKh: 'ការកើនឡើងចំនួនលក្ខណៈ', value: 'O(n^d) Parameters', tooltipEn: 'Exponential growth makes high-degree polynomial regression infeasible', tooltipKh: 'ការកើនឡើងជាអនុគមន៍ស្វ័យគុណ ធ្វើឱ្យការប្រើពហុធាមិនអាចអនុវត្តបានក្នុងទំហំធំ' }
      ],
      chartSetup: {
        chartType: 'Scatter Plot with Polynomial Curve Overlay',
        chartTypeKh: 'ក្រាហ្វចំណុចខ្ចាត់ខ្ចាយ (Scatter Plot) ជាមួយខ្សែបន្ទាត់កោងពហុធា',
        dimensions: ['Feature_x1 (អ័ក្សដេក x1)', 'Feature_x2 (អ័ក្សឈរ x2)'],
        metrics: ['Class_Label (ស្លាកសម្គាល់ 0 ឬ 1)', 'Decision_Threshold (កម្រិតព្រំដែនសម្រេច)'],
        sortOrder: 'Feature_x1 ASCENDING',
        filterDefault: 'All Data Points',
        chartDescriptionEn: 'Demonstrates a binary classification scenario where a straight line fails, requiring a complex wavy decision boundary.',
        chartDescriptionKh: 'បង្ហាញករណីចំណាត់ថ្នាក់ពីរជម្រើស ដែលបន្ទាត់ត្រង់មិនអាចខណ្ឌចែកបាន តម្រូវឱ្យមានខ្សែព្រំដែនកោងបត់បែនស្មុគស្មាញ។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'High-Degree Non-Linear Hypothesis',
          formulaNameKh: 'សម្មតិកម្មមិនលីនេអ៊ែរដឺក្រេខ្ពស់',
          latex: 'h(x) = g(\\theta_0 + \\theta_1 x_1 + \\theta_2 x_2 + \\theta_3 x_1 x_2 + \\theta_4 x_1^2 x_2 + \\theta_5 x_1 x_2^2 + \\dots)',
          explanationEn: 'The hypothesis applies an activation function g(z) over an infinite or high-order polynomial expansion of input features.',
          explanationKh: 'សម្មតិកម្មនេះប្រើប្រាស់អនុគមន៍សកម្មភាព g(z) ទៅលើផលបូកពហុធាដឺក្រេខ្ពស់នៃធាតុបញ្ចូល ដើម្បីបង្កើតព្រំដែនកោង។',
          variables: [
            { symbol: 'h(x)', meaningEn: 'Predicted probability output between 0 and 1', meaningKh: 'តម្លៃប្រូបាប៊ីលីតេនៃការទស្សន៍ទាយ (ចន្លោះ ០ និង ១)', role: 'Model Output' },
            { symbol: 'g(\\cdot)', meaningEn: 'Non-linear activation function (e.g., Sigmoid)', meaningKh: 'អនុគមន៍សកម្មភាពមិនលីនេអ៊ែរ (ដូចជា Sigmoid)', role: 'Squashing Function' },
            { symbol: '\\theta_0', meaningEn: 'Bias parameter (intercept)', meaningKh: 'ប៉ារ៉ាម៉ែត្រលម្អៀង (Bias)', role: 'Offset' },
            { symbol: '\\theta_i', meaningEn: 'Weight associated with linear and cross-product terms', meaningKh: 'មេគុណទម្ងន់សម្រាប់តួអថេរលីនេអ៊ែរ និងតួគុណចម្រុះ', role: 'Trainable Weights' },
            { symbol: 'x_1, x_2', meaningEn: 'Original raw feature inputs', meaningKh: 'លក្ខណៈធាតុបញ្ចូលដើម', role: 'Input Features' },
            { symbol: 'x_1^2 x_2, \\dots', meaningEn: 'High-order interaction terms capturing curvature', meaningKh: 'តួអថេរដឺក្រេខ្ពស់ដែលបង្កើតរាងកោងនៃព្រំដែន', role: 'Polynomial Basis' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Metric Slider',
        fieldName: 'Polynomial_Degree_Slider',
        controlLabelEn: 'Adjust Polynomial Boundary Degree (1 - 5)',
        controlLabelKh: 'កែសម្រួលដឺក្រេនៃខ្សែបន្ទាត់ព្រំដែន (១ ដល់ ៥)',
        defaultValue: '3',
        min: 1,
        max: 5,
        step: 1,
        purposeEn: 'Visualize how increasing polynomial terms transforms a linear boundary into a flexible non-linear curve.',
        purposeKh: 'បង្ហាញពីរបៀបដែលការបន្ថែមដឺក្រេពហុធា បំប្លែងបន្ទាត់ត្រង់ទៅជាខ្សែបន្ទាត់កោងបត់បែន។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Non-Linear Hypotheses Challenge:',
          'Simple linear logistic regression (h(x) = g(θᵀx)) can only separate data with a straight hyperplane.',
          'Real-world problems require intricate, curvy decision boundaries.',
          'Manually engineering polynomial features (x₁x₂, x₁², x₂², ...) suffers from the curse of dimensionality as features grow.'
        ],
        kh: [
          'បញ្ហាប្រឈមនៃសម្មតិកម្មមិនលីនេអ៊ែរ៖',
          'គំរូ Logistic Regression លីនេអ៊ែរសាមញ្ញ (h(x) = g(θᵀx)) អាចខណ្ឌចែកទិន្នន័យបានត្រឹមតែបន្ទាត់ត្រង់ប៉ុណ្ណោះ។',
          'ទិន្នន័យជាក់ស្តែងក្នុងពិភពពិតទាមទារនូវព្រំដែនសម្រេចកោងបត់បែនយ៉ាងស្មុគស្មាញ។',
          'ការបង្កើតតួពហុធាដោយដៃ (x₁x₂, x₁², x₂², ...) បង្កឱ្យមានបញ្ហាកើនឡើងហួសប្រមាណនៃទំហំវិមាត្រ (Curse of Dimensionality)។'
        ]
      },
      deepDiveExplanation: {
        en: 'While polynomial logistic regression can theoretically fit non-linear boundaries by introducing higher-order interaction terms, it scales horribly. For a dataset with 100 features, quadratic features (~n²/2) already yield ~5,000 features, and cubic features yield ~170,000 features! This creates severe computational bottlenecks and extreme overfitting. Artificial Neural Networks solve this by automatically learning hierarchical non-linear feature representations without manual combinatorial expansion.',
        kh: 'ទោះបីជាវិធីសាស្ត្រ Polynomial Logistic Regression អាចបង្កើតព្រំដែនកោងបានដោយការបន្ថែមតួគុណចម្រុះក៏ដោយ ក៏វាមិនអាចពង្រីកទំហំបានឡើយ។ ឧបមាថាទិន្នន័យមាន ១០០ លក្ខណៈ តួដឺក្រេទីពីរ (~n²/2) នឹងបង្កើតបានប្រហែល ៥,០០០ លក្ខណៈ ហើយតួដឺក្រេទីបីនឹងបង្កើតបានរហូតដល់ ១៧០,០០០ លក្ខណៈ! នេះបង្កឱ្យមានបញ្ហាស្ទះការគណនា និង Overfitting ធ្ងន់ធ្ងរ។ បណ្តាញណឺរ៉ូនសិប្បនិម្មិតដោះស្រាយបញ្ហានេះបានយ៉ាងល្អឥតខ្ចោះ ដោយសារវាអាចទាញយកលក្ខណៈមិនលីនេអ៊ែរដោយស្វ័យប្រវត្តិតាមស្រទាប់ ដោយមិនចាំបាច់បង្កើតតួពហុធាដោយដៃឡើយ។'
      },
      practicalApplication: {
        titleEn: 'Autonomous Vehicle Obstacle Segmentation',
        titleKh: 'ការកំណត់តំបន់ឧបសគ្គសម្រាប់រថយន្តបើកបរស្វ័យប្រវត្តិ',
        scenarioEn: 'Self-driving vehicles must classify navigable road versus irregularly shaped sidewalks and obstacles in real-time LIDAR/camera feeds.',
        scenarioKh: 'រថយន្តស្វ័យប្រវត្តិតម្រូវឱ្យធ្វើចំណាត់ថ្នាក់ផ្លូវដែលអាចបើកបរបាន ធៀបនឹងចិញ្ចើមផ្លូវដែលមានរាងកោង និងឧបសគ្គមិនទៀងទាត់តាមរយៈកាមេរ៉ា និងសេនស័រ LIDAR។',
        businessImpactEn: 'Linear classifiers would fail completely, causing catastrophic collisions; non-linear models guarantee 99.4% navigable zone segmentation precision.',
        businessImpactKh: 'គំរូលីនេអ៊ែរនឹងបរាជ័យទាំងស្រុងដែលបង្កឱ្យមានគ្រោះថ្នាក់ចរាចរណ៍ ខណៈគំរូមិនលីនេអ៊ែរធានាបាននូវភាពជាក់លាក់រហូតដល់ ៩៩.៤%។'
      }
    },
    interactiveType: 'nonlinear'
  },

  // SLIDE 3
  {
    id: 3,
    slideNumber: 3,
    category: 'Foundation',
    englishTitle: 'Image Classification as High-Dimensional Non-Linear Data',
    khmerTitle: 'ចំណាត់ថ្នាក់រូបភាពជាទិន្នន័យមិនលីនេអ៊ែរក្នុងលំហវិមាត្រខ្ពស់',
    pageIdentity: {
      bilingualPageTitle: 'Slide 03: Non-Linear Hypotheses — Image Classification / ចំណាត់ថ្នាក់រូបភាព',
      bilingualPageTitleKh: 'ចំណាត់ថ្នាក់រូបភាព និងការផ្ទុះឡើងនៃចំនួនលក្ខណៈភិចសែល (Image Classification)',
      canvasSetup: 'Monochrome Matrix & Cyan Accent Theme (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃ Matrix ខ្មៅស លាយពណ៌ខៀវភ្លឺបែបឌីជីថល (16:9)',
      hexPrimary: '#0EA5E9',
      hexSecondary: '#F59E0B',
      hexBackground: '#090D16',
      hexSurface: '#131D31',
      hexAccent: '#10B981',
      themeRationaleEn: 'Pixel-level binary contrast visually reinforces the concept of raw image grid inputs converting into numeric feature vectors.',
      themeRationaleKh: 'ភាពផ្ទុយគ្នានៃភិចសែលសខ្មៅ បង្ហាញយ៉ាងច្បាស់អំពីការបំប្លែងក្រឡារូបភាពទៅជាវ៉ិចទ័រលេខឌីជីថល។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and image feature dimension KPI indicators.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងកាតសូចនាករវិមាត្រនៃលក្ខណៈរូបភាព។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 48%: Interactive 8x8 pixel grid (binary 0/1 clickable matrix) showing dynamic vector flattening x ∈ R^64. Right 52%: Looker Studio dimension table demonstrating feature space explosion for 50x50 and 1000x1000 images.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៨%៖ ក្រឡាភិចសែល 8x8 អន្តរកម្ម (ម៉ាទ្រីស 0 និង 1 អាចចុចបាន) បង្ហាញការបំប្លែងទៅជាវ៉ិចទ័របន្ទាត់ x ∈ R^64។ ផ្នែកខាងស្តាំ ៥២%៖ តារាង Looker Studio បង្ហាញការកើនឡើងទំហំភិចសែលសម្រាប់រូបភាពធំៗ (50x50 និង 1000x1000)។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '880 px',
        rightPanelWidth: '960 px'
      },
      componentPositions: [
        { id: 'hdr_3', nameEn: 'Header & Feature Counter', nameKh: 'ក្បាលទំព័រ និងការរាប់ចំនួនលក្ខណៈ', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_3', nameEn: 'Pixel KPI Summary Block', nameKh: 'ប្លុក KPI សង្ខេបភិចសែល', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'mat_3', nameEn: '8x8 Pixel Grid Matrix & Vector', nameKh: 'ម៉ាទ្រីសភិចសែល 8x8 និងវ៉ិចទ័រ x', coordinates: 'X: 40, Y: 220, W: 880, H: 790', type: 'Interactive' },
        { id: 'tbl_3', nameEn: 'Looker Studio Dimension Scaling Table', nameKh: 'តារាងប្រៀបធៀបការពង្រីកវិមាត្ររូបភាព', coordinates: 'X: 940, Y: 220, W: 940, H: 790', type: 'Chart' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Toy Grid Resolution', labelKh: 'ទំហំរូបភាពគំរូ', value: '8 x 8 Pixels', tooltipEn: 'Low-resolution binary toy example', tooltipKh: 'រូបភាពគំរូតូចទំហំ ៨ គុណ ៨ ភិចសែល' },
        { labelEn: 'Feature Vector Size (n)', labelKh: 'ទំហំវ៉ិចទ័រលក្ខណៈ (n)', value: '64 Features', tooltipEn: 'Total flattened input features from 8x8 matrix', tooltipKh: 'ចំនួនលក្ខណៈសរុបបន្ទាប់ពីលាតម៉ាទ្រីស 8x8' },
        { labelEn: 'Quadratic Features for 50x50', labelKh: 'ចំនួនតួដឺក្រេពីរលើរូបភាព 50x50', value: '≈ 3.125 Million Terms', tooltipEn: 'Demonstrates why logistic regression cannot handle raw computer vision', tooltipKh: 'បង្ហាញមូលហេតុដែល Logistic Regression មិនអាចប្រើក្នុងវិស័យ Computer Vision បាន' }
      ],
      chartSetup: {
        chartType: 'Cross-tab Matrix & Dimension Escalation Bar Chart',
        chartTypeKh: 'តារាងម៉ាទ្រីស Cross-tab និងក្រាហ្វរបារបង្ហាញការកើនឡើងនៃវិមាត្រ',
        dimensions: ['Image_Resolution (ទំហំរូបភាព)', 'Color_Channels (ចំនួនពណ៌ RGB)'],
        metrics: ['Total_Raw_Pixels (ភិចសែលសរុប)', 'Quadratic_Terms_Count (ចំនួនតួគុណដឺក្រេពីរ n^2/2)'],
        sortOrder: 'Total_Raw_Pixels ASCENDING',
        filterDefault: 'Grayscale & RGB Included',
        chartDescriptionEn: 'Quantifies the explosion of feature space as image resolution increases from 8x8 to 1080p.',
        chartDescriptionKh: 'គណនាបរិមាណនៃការកើនឡើងទំហំលក្ខណៈ នៅពេលដែលកម្រិតភាពច្បាស់នៃរូបភាពកើនឡើងពី 8x8 ដល់ 1080p។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Flattened Feature Vector Representation',
          formulaNameKh: 'ទម្រង់វ៉ិចទ័រលក្ខណៈបន្ទាត់',
          latex: 'x = \\begin{bmatrix} \\text{pixel}_1 \\\\ \\text{pixel}_2 \\\\ \\vdots \\\\ \\text{pixel}_n \\end{bmatrix} \\in \\mathbb{R}^{n}, \\quad n = H \\times W \\times C',
          explanationEn: 'A 2D or 3D pixel tensor is unrolled into a 1D column vector x where each entry represents an intensity value between 0 and 1 (or 0 and 255).',
          explanationKh: 'តង់ស័ររូបភាព 2D ឬ 3D ត្រូវបានពន្លាតទៅជាវ៉ិចទ័របញ្ឈរ 1D ដែលធាតុនីមួយៗតំណាងឱ្យកម្រិតពន្លឺភិចសែលចន្លោះ ០ និង ១ (ឬ ០ និង ២៥៥)។',
          variables: [
            { symbol: 'x', meaningEn: 'Input feature vector representing the entire image', meaningKh: 'វ៉ិចទ័រធាតុបញ្ចូលតំណាងឱ្យរូបភាពទាំងមូល', role: 'Input Vector' },
            { symbol: 'n', meaningEn: 'Total dimensionality of the input space', meaningKh: 'វិមាត្រសរុបនៃលំហធាតុបញ្ចូល', role: 'Feature Dimension' },
            { symbol: 'H, W', meaningEn: 'Height and Width of the image in pixels', meaningKh: 'កម្ពស់ និងទទឹងនៃរូបភាពគិតជាភិចសែល', role: 'Spatial Dimensions' },
            { symbol: 'C', meaningEn: 'Color channels (1 for grayscale, 3 for RGB)', meaningKh: 'ចំនួនប៉ុស្តិ៍ពណ៌ (១ សម្រាប់សខ្មៅ, ៣ សម្រាប់ពណ៌ RGB)', role: 'Color Channels' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Dropdown',
        fieldName: 'Sample_Digit_Preset',
        controlLabelEn: 'Load Preset 8x8 Pixel Character',
        controlLabelKh: 'ជ្រើសរើសតួអក្សរគំរូ 8x8',
        defaultValue: 'Digit 0',
        options: ['Digit 0 (លេខ ០)', 'Digit 1 (លេខ ១)', 'Letter X (អក្សរ X)', 'Khmer Ka ក (តួអក្សរ ក)', 'Custom Drawing (គូរផ្ទាល់)'],
        purposeEn: 'Allows users to instantly test how different shapes map to numeric 64-element vectors.',
        purposeKh: 'អនុញ្ញាតឱ្យអ្នកសិក្សាសាកល្បងមើលថាតើរូបរាងខុសៗគ្នាបំប្លែងទៅជាវ៉ិចទ័រ ៦៤ លេខយ៉ាងដូចម្តេច។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Image as Numerical Features:',
          'An 8x8 pixel image produces 64 numeric inputs (n = 64).',
          'Each pixel contains intensity values (e.g., 0 for white/background, 1 for black/foreground).',
          'For a modest 50x50 pixel RGB photo: n = 50 × 50 × 3 = 7,500 features. Second-order features would exceed 28 million variables!'
        ],
        kh: [
          'រូបភាពជាទម្រង់លក្ខណៈលេខឌីជីថល៖',
          'រូបភាពទំហំ 8x8 ភិចសែល បង្កើតបានធាតុបញ្ចូលចំនួន ៦៤ លេខ (n = 64)។',
          'ភិចសែលនីមួយៗផ្ទុកតម្លៃកម្រិតពណ៌ (ឧទាហរណ៍៖ ០ សម្រាប់ផ្ទៃស, ១ សម្រាប់ផ្ទៃខ្មៅ)។',
          'សម្រាប់រូបភាពពណ៌ RGB ទំហំត្រឹមតែ 50x50 ភិចសែល៖ n = 50 × 50 × 3 = 7,500 លក្ខណៈ។ ប្រសិនបើប្រើតួដឺក្រេទីពីរ វានឹងបង្កើតអថេរលើសពី ២៨ លានតួ!'
        ]
      },
      deepDiveExplanation: {
        en: 'This slide provides the classic justification for why neural networks are indispensable for Computer Vision. Traditional machine learning relied heavily on handcrafted feature engineering (such as SIFT, HOG, or Haar cascades). When dealing with raw pixels, tiny spatial shifts, lighting variations, or rotations completely scramble the feature vector while the semantic meaning remains identical. Deep neural networks automatically learn translation-invariant spatial hierarchies, making raw pixel classification possible.',
        kh: 'ស្លាយនេះផ្តល់នូវមូលដ្ឋានគ្រឹះពន្យល់ថា ហេតុអ្វីបានជាបណ្តាញណឺរ៉ូនគឺជារឿងមិនអាចខ្វះបានក្នុងបច្ចេកវិទ្យា Computer Vision។ ម៉ាស៊ីនរៀនសូត្រពីមុនពឹងផ្អែកខ្លាំងលើការច្នៃលក្ខណៈដោយដៃ (ដូចជា SIFT ឬ HOG)។ នៅពេលដែលយើងប្រើភិចសែលផ្ទាល់ ការរំកិលរូបភាពបន្តិចបន្តួច ឬការប្រែប្រួលពន្លឺ នឹងផ្លាស់ប្តូរតម្លៃវ៉ិចទ័រទាំងស្រុង ទោះបីជាអត្ថន័យរូបភាពនៅដដែលក៏ដោយ។ បណ្តាញណឺរ៉ូនជម្រៅជ្រៅរៀនសូត្រលក្ខណៈរូបភាពតាមលំដាប់លំដោយដោយស្វ័យប្រវត្តិ ដែលធ្វើឱ្យការស្គាល់រូបភាពមានភាពជាក់លាក់ខ្ពស់បំផុត។'
      },
      practicalApplication: {
        titleEn: 'National ID Card Khmer OCR Processing',
        titleKh: 'ប្រព័ន្ធស្កេនអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរស្វ័យប្រវត្តិតាម OCR',
        scenarioEn: 'Banking mobile apps extract national ID numbers and names by passing cropped character pixel patches into a neural network classifier.',
        scenarioKh: 'កម្មវិធីធនាគារចល័តស្រង់លេខអត្តសញ្ញាណប័ណ្ណ និងឈ្មោះ ដោយកាត់បំណែកភិចសែលនៃតួអក្សរនីមួយៗ បញ្ជូនទៅកាន់បណ្តាញណឺរ៉ូនដើម្បីធ្វើចំណាត់ថ្នាក់។',
        businessImpactEn: 'Eliminates manual document entry, slashing loan application processing from 48 hours to 30 seconds with 99.2% OCR accuracy.',
        businessImpactKh: 'លុបបំបាត់ការវាយបញ្ចូលឯកសារដោយដៃ កាត់បន្ថយពេលវេលាស្នើសុំកម្ចីពី ៤៨ ម៉ោងមកត្រឹម ៣០ វិនាទី ជាមួយភាពត្រឹមត្រូវ ៩៩.២%។'
      }
    },
    interactiveType: 'pixel_grid'
  },

  // SLIDE 4
  {
    id: 4,
    slideNumber: 4,
    category: 'Foundation',
    englishTitle: 'Artificial Neural Networks (ANN): Biological Inspiration & Architecture',
    khmerTitle: 'បណ្តាញណឺរ៉ូនសិប្បនិម្មិត (ANN)៖ ការបំផុសគំនិតពីជីវសាស្ត្រ និងស្ថាបត្យកម្ម',
    pageIdentity: {
      bilingualPageTitle: 'Slide 04: Artificial Neural Networks (ANN) / បណ្តាញណឺរ៉ូនសិប្បនិម្មិត',
      bilingualPageTitleKh: 'ពីខួរក្បាលមនុស្សទៅកាន់បណ្តាញណឺរ៉ូនសិប្បនិម្មិត (Biological Inspiration)',
      canvasSetup: 'Neuro-Teal & Bioluminescent Theme (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ខៀវបៃតងវេជ្ជសាស្ត្រ និងពណ៌ពន្លឺណឺរ៉ូន (16:9)',
      hexPrimary: '#0D9488', // Teal
      hexSecondary: '#8B5CF6', // Purple
      hexBackground: '#0B1320',
      hexSurface: '#162235',
      hexAccent: '#34D399',
      themeRationaleEn: 'Teal and bioluminescent purple bridge biological brain anatomy with artificial computational nodes.',
      themeRationaleKh: 'ពណ៌ខៀវបៃតង និងពណ៌ស្វាយពន្លឺ ផ្សារភ្ជាប់រចនាសម្ព័ន្ធខួរក្បាលជីវសាស្ត្រ ទៅនឹងថ្នាំងគណនាសិប្បនិម្មិត។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title banner with biological vs artificial analogy tags.',
        kh: 'ផ្នែកខាងលើ ១០%៖ បដាចំណងជើងទ្វេភាសាជាមួយស្លាកប្រៀបធៀបជីវសាស្ត្រ និងប្រព័ន្ធសិប្បនិម្មិត។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Human brain anatomy diagram (dendrites, soma, axon, synapses) mapped to artificial counterparts. Right 55%: Interactive 3-layer Feedforward Neural Network (Input Layer, Hidden Layer, Output Layer) with animated forward pulse.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ ដ្យាក្រាមខួរក្បាលមនុស្ស (Dendrite, Soma, Axon, Synapse) ភ្ជាប់ទៅសមាសភាគសិប្បនិម្មិត។ ផ្នែកខាងស្តាំ ៥៥%៖ បណ្តាញណឺរ៉ូនសិប្បនិម្មិត ៣ ស្រទាប់ (ស្រទាប់បញ្ចូល ស្រទាប់លាក់ ស្រទាប់បញ្ចេញ) ជាមួយចលនាបញ្ជូនសញ្ញាអគ្គិសនី។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_4', nameEn: 'Header & Analogy Badges', nameKh: 'ក្បាលទំព័រ និងផ្លាកប្រៀបធៀប', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_4', nameEn: 'Brain vs Computer Scorecard', nameKh: 'ផ្ទាំងពិន្ទុប្រៀបធៀបខួរក្បាល និងកុំព្យូទ័រ', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'bio_4', nameEn: 'Biological Brain Anatomy Panel', nameKh: 'ផ្ទាំងកាយវិភាគវិទ្យាខួរក្បាលជីវសាស្ត្រ', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Interactive' },
        { id: 'ann_4', nameEn: '3-Layer Neural Network Graph', nameKh: 'បណ្តាញណឺរ៉ូនសិប្បនិម្មិត ៣ ស្រទាប់', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Chart' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Human Brain Neurons', labelKh: 'ចំនួនណឺរ៉ូនក្នុងខួរក្បាលមនុស្ស', value: '≈ 86 Billion Neurons', tooltipEn: 'Biological cognitive processing units', tooltipKh: 'អង្គភាពដំណើរការគិតក្នុងខួរក្បាលមនុស្ស' },
        { labelEn: 'Synaptic Connections', labelKh: 'ចំនួនតំណភ្ជាប់ Synapse ក្នុងខួរក្បាល', value: '≈ 100 Trillion Synapses', tooltipEn: 'Massive parallel interconnected communication', tooltipKh: 'បណ្តាញទំនាក់ទំនងស្របគ្នាដ៏ធំសម្បើម' },
        { labelEn: 'Artificial Parallelism', labelKh: 'ស្រទាប់ដំណើរការសិប្បនិម្មិត', value: 'Input → Hidden → Output', tooltipEn: 'Standard feedforward architectural pipeline', tooltipKh: 'ដំណើរការបញ្ជូនសញ្ញាទៅមុខតាមលំដាប់ស្រទាប់' }
      ],
      chartSetup: {
        chartType: 'Network Relationship Graph & Comparison Table',
        chartTypeKh: 'ដ្យាក្រាមបណ្តាញទំនាក់ទំនងថ្នាំង និងតារាងប្រៀបធៀបលក្ខណៈ',
        dimensions: ['Biological_Structure (រចនាសម្ព័ន្ធជីវសាស្ត្រ)', 'Artificial_Equivalent (សមមូលសិប្បនិម្មិត)'],
        metrics: ['Signal_Type (ប្រភេទសញ្ញា)', 'Mathematical_Role (តួនាទីគណិតវិទ្យា)'],
        sortOrder: 'Biological_Structure ASCENDING',
        filterDefault: 'Full Comparison View',
        chartDescriptionEn: 'A direct Looker Studio mapping between biological neuron structures and their artificial mathematical implementations.',
        chartDescriptionKh: 'ការភ្ជាប់ទំនាក់ទំនងផ្ទាល់ក្នុង Looker Studio រវាងរចនាសម្ព័ន្ធណឺរ៉ូនជីវសាស្ត្រ និងការអនុវត្តតាមរូបមន្តគណិតវិទ្យាសិប្បនិម្មិត។'
      }
    },
    pageControls: [
      {
        controlType: 'Dropdown',
        fieldName: 'Network_Layer_Focus',
        controlLabelEn: 'Highlight Network Layer',
        controlLabelKh: 'ជ្រើសរើសស្រទាប់ដើម្បីពិនិត្យលម្អិត',
        defaultValue: 'All Layers',
        options: ['All Layers (ស្រទាប់ទាំងអស់)', 'Input Layer (ស្រទាប់បញ្ចូល)', 'Hidden Layer (ស្រទាប់លាក់)', 'Output Layer (ស្រទាប់បញ្ចេញ)'],
        purposeEn: 'Filters the diagram to inspect signal flow through a designated layer.',
        purposeKh: 'ត្រងដ្យាក្រាមដើម្បីពិនិត្យមើលលំហូរសញ្ញាតាមស្រទាប់នីមួយៗ។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Biological Inspiration for Artificial Intelligence:',
          'Idea: To make the machine more robust, intelligent, and able to learn, let us model it after the human brain.',
          'Dendrites receive inputs from other neurons.',
          'Cell body (Soma) sums incoming signals.',
          'Axon fires an action potential (electrical spike) when the accumulated input exceeds a chemical threshold.'
        ],
        kh: [
          'ការបំផុសគំនិតបែបជីវសាស្ត្រសម្រាប់បញ្ញាសិប្បនិម្មិត (AI)៖',
          'គំនិតស្នូល៖ ដើម្បីធ្វើឱ្យម៉ាស៊ីនកាន់តែឆ្លាតវៃ រឹងមាំ និងមានសមត្ថភាពរៀនសូត្រ យើងយកគំរូតាមខួរក្បាលរបស់មនុស្ស។',
          'Dendrite (ទងណឺរ៉ូន) ទទួលសញ្ញាធាតុបញ្ចូលពីណឺរ៉ូនដទៃទៀត។',
          'Soma (តួណឺរ៉ូន) ធ្វើការបូកសរុបសញ្ញាដែលទទួលបានទាំងអស់។',
          'Axon (អ័ក្សណឺរ៉ូន) បញ្ជូនបន្ទុកអគ្គិសនី (Action Potential) ទៅកាន់ណឺរ៉ូនបន្ទាប់ នៅពេលកម្រិតសញ្ញាកើនឡើងលើសកម្រិតកំណត់ (Threshold)។'
        ]
      },
      deepDiveExplanation: {
        en: 'Warren McCulloch and Walter Pitts (1943) first mathematically abstracted the biological neuron. In artificial neural networks, dendrites become input features (x) multiplied by synaptic weights (w), the soma becomes the weighted sum plus bias (z = Σ wx + b), and the axon hillock threshold becomes the non-linear activation function g(z). This enables massive parallel computation capable of universal function approximation.',
        kh: 'Warren McCulloch និង Walter Pitts (ឆ្នាំ ១៩៤៣) បានបង្កើតរូបមន្តគណិតវិទ្យាដំបូងគេបង្អស់ដែលដកស្រង់ចេញពីណឺរ៉ូនជីវសាស្ត្រ។ នៅក្នុងបណ្តាញណឺរ៉ូនសិប្បនិម្មិត Dendrite ក្លាយជាធាតុបញ្ចូល (x) គុណនឹងទម្ងន់ (w), តួ Soma ក្លាយជាផលបូកទម្ងន់បូក bias (z = Σ wx + b), ហើយកម្រិតសញ្ញា Axon ក្លាយជាអនុគមន៍សកម្មភាពមិនលីនេអ៊ែរ g(z)។ រចនាសម្ព័ន្ធនេះអនុញ្ញាតឱ្យកុំព្យូទ័រគណនាស្របគ្នាដ៏ធំសម្បើម និងអាចប៉ាន់ស្មានអនុគមន៍ស្មុគស្មាញគ្រប់ប្រភេទ។'
      },
      practicalApplication: {
        titleEn: 'Biomedical Brain-Computer Interface (BCI)',
        titleKh: 'ប្រព័ន្ធទំនាក់ទំនងខួរក្បាល និងកុំព្យូទ័រផ្នែកវេជ្ជសាស្ត្រ (BCI)',
        scenarioEn: 'Paralyzed patients control robotic prosthetics through EEG electrodes decoded in real-time by an artificial neural network.',
        scenarioKh: 'អ្នកជំងឺពិការដៃជើងអាចបញ្ជាដៃសិប្បនិម្មិតតាមរយៈរលកខួរក្បាល EEG ដែលត្រូវបានបកស្រាយភ្លាមៗដោយបណ្តាញណឺរ៉ូនសិប្បនិម្មិត។',
        businessImpactEn: 'Restores motor mobility with 94.6% intent recognition accuracy, directly emulating natural neuromuscular pathways.',
        businessImpactKh: 'ស្តារឡើងវិញនូវសមត្ថភាពចលនាដៃជើងជាមួយភាពត្រឹមត្រូវ ៩៤.៦% ដោយធ្វើត្រាប់តាមប្រព័ន្ធសរសៃប្រសាទធម្មជាតិទាំងស្រុង។'
      }
    },
    interactiveType: 'biological'
  },

  // SLIDE 5
  {
    id: 5,
    slideNumber: 5,
    category: 'Architecture',
    englishTitle: 'The Neuron Model: The Logistic Unit & Mathematical Forward Signal',
    khmerTitle: 'គំរូណឺរ៉ូនសិប្បនិម្មិត៖ អង្គភាពឡូជីស្ទីក និងរូបមន្តគណិតវិទ្យានៃសញ្ញាទៅមុខ',
    pageIdentity: {
      bilingualPageTitle: 'Slide 05: Neuron Model (Logistic Unit) / គំរូណឺរ៉ូនសិប្បនិម្មិត',
      bilingualPageTitleKh: 'រូបមន្តគណិតវិទ្យា និងដំណើរការនៃអង្គភាពឡូជីស្ទីក (Neuron Model)',
      canvasSetup: 'Engineering Blueprint & Amber Accent (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ខៀវប្លង់វិស្វកម្ម លាយពណ៌លឿងទុំ (16:9)',
      hexPrimary: '#2563EB',
      hexSecondary: '#F59E0B',
      hexBackground: '#0B1120',
      hexSurface: '#172033',
      hexAccent: '#E11D48',
      themeRationaleEn: 'Structured blue and amber highlight the forward mathematical data transformation from scalar dot products to activation probabilities.',
      themeRationaleKh: 'ពណ៌ខៀវ និងពណ៌លឿងទុំ បង្ហាញយ៉ាងច្បាស់អំពីការបំប្លែងគណិតវិទ្យាពីផលគុណស្កាលែ ទៅជាប្រូបាប៊ីលីតេនៃអនុគមន៍សកម្មភាព។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and linear dot product equation banner.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងបដារូបមន្តផលគុណស្កាលែ។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 50%: Detailed biological-to-artificial schematic with annotated weights w, inputs x, bias b, intermediate sum z, and activation g(z) leading to h(x). Right 50%: Interactive Matrix Dot Product Simulator where users manipulate x and w to observe output a.',
        kh: 'ផ្នែកខាងឆ្វេង ៥០%៖ ដ្យាក្រាមលម្អិតនៃណឺរ៉ូនសិប្បនិម្មិត បង្ហាញទម្ងន់ w ធាតុបញ្ចូល x តម្លៃលម្អៀង b ផលបូក z និងអនុគមន៍ g(z) ឆ្ពោះទៅ h(x)។ ផ្នែកខាងស្តាំ ៥០%៖ ម៉ាស៊ីនគិតលេខម៉ាទ្រីសអន្តរកម្ម ដែលអ្នកប្រើអាចកែប្រែ x និង w ដើម្បីមើលលទ្ធផល a ភ្លាមៗ។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '920 px',
        rightPanelWidth: '920 px'
      },
      componentPositions: [
        { id: 'hdr_5', nameEn: 'Header & Equation Banner', nameKh: 'ក្បាលទំព័រ និងបដារូបមន្ត', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_5', nameEn: 'Vector Dimension KPIs', nameKh: 'ផ្ទាំងពិន្ទុវិមាត្រវ៉ិចទ័រ', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'dgm_5', nameEn: 'Neuron Schematic Diagram', nameKh: 'ដ្យាក្រាមរចនាសម្ព័ន្ធណឺរ៉ូន', coordinates: 'X: 40, Y: 220, W: 900, H: 790', type: 'Chart' },
        { id: 'sim_5', nameEn: 'Interactive Dot Product Calculator', nameKh: 'ម៉ាស៊ីនគណនាផលគុណម៉ាទ្រីសអន្តរកម្ម', coordinates: 'X: 960, Y: 220, W: 880, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Weight Matrix Dimension', labelKh: 'វិមាត្រម៉ាទ្រីសទម្ងន់ W', value: '1 × 3 Matrix', tooltipEn: 'Row vector [w1, w2, w3]', tooltipKh: 'វ៉ិចទ័រដេក [w1, w2, w3]' },
        { labelEn: 'Input Vector Dimension', labelKh: 'វិមាត្រវ៉ិចទ័រធាតុបញ្ចូល x', value: '3 × 1 Matrix', tooltipEn: 'Column vector [x1, x2, x3]^T', tooltipKh: 'វ៉ិចទ័របញ្ឈរ [x1, x2, x3]^T' },
        { labelEn: 'Scalar Pre-activation (z)', labelKh: 'តម្លៃផលបូកមុនដំណាក់កាលសកម្ម (z)', value: 'z = Wx + b', tooltipEn: 'Inner dot product plus scalar bias offset', tooltipKh: 'ផលគុណស្កាលែបូកនឹងតម្លៃលម្អៀង bias' }
      ],
      chartSetup: {
        chartType: 'Cross-tab Matrix Scorecard & Vector Flow Diagram',
        chartTypeKh: 'តារាងម៉ាទ្រីស Cross-tab និងដ្យាក្រាមលំហូរវ៉ិចទ័រ',
        dimensions: ['Input_Feature (ធាតុបញ្ចូល)', 'Synaptic_Weight (ទម្ងន់តំណភ្ជាប់)'],
        metrics: ['Weighted_Contribution (តម្លៃរួមចំណែក w * x)', 'Activation_Impact (ឥទ្ធិពលលើលទ្ធផល)'],
        sortOrder: 'Input_Feature ASCENDING',
        filterDefault: 'All 3 Inputs Visible',
        chartDescriptionEn: 'Decomposes the scalar contribution of each input feature into the total net logit z.',
        chartDescriptionKh: 'បំបែកតម្លៃរួមចំណែកនៃធាតុបញ្ចូលនីមួយៗ ទៅក្នុងការបង្កើតតម្លៃផលបូក z ចុងក្រោយ។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Linear Combination & Activation Output',
          formulaNameKh: 'ការបន្សំលីនេអ៊ែរ និងលទ្ធផលនៃអនុគមន៍សកម្មភាព',
          latex: 'z = w_1 x_1 + w_2 x_2 + w_3 x_3 + b = Wx + b',
          latexSecondary: 'h(x) = a = g(z) = \\frac{1}{1 + e^{-z}}',
          explanationEn: 'The pre-activation scalar z is calculated via matrix dot product between row vector W and column vector x plus bias b, then passed into activation function g(z).',
          explanationKh: 'តម្លៃមុនសកម្ម z ត្រូវបានគណនាតាមរយៈផលគុណម៉ាទ្រីសរវាងវ៉ិចទ័រដេក W និងវ៉ិចទ័របញ្ឈរ x បូកតម្លៃលម្អៀង b រួចបញ្ជូនទៅក្នុងអនុគមន៍សកម្ម g(z)។',
          variables: [
            { symbol: 'z', meaningEn: 'Net input or pre-activation logit', meaningKh: 'តម្លៃផលបូកសរុបមុនពេលឆ្លងកាត់អនុគមន៍សកម្ម (Logit)', role: 'Intermediate Scalar' },
            { symbol: 'W', meaningEn: '1 × 3 Weight row vector [w1, w2, w3]', meaningKh: 'វ៉ិចទ័រដេកនៃទម្ងន់ទំហំ 1 × 3', role: 'Learnable Parameters' },
            { symbol: 'x', meaningEn: '3 × 1 Input column vector [x1, x2, x3]^T', meaningKh: 'វ៉ិចទ័របញ្ឈរនៃធាតុបញ្ចូលទំហំ 3 × 1', role: 'Input Vector' },
            { symbol: 'b', meaningEn: 'Scalar bias offsetting the threshold', meaningKh: 'តម្លៃលម្អៀង (Bias) រំកិលកម្រិតព្រំដែនសម្រេច', role: 'Trainable Bias' },
            { symbol: 'g(z)', meaningEn: 'Activation function mapping R to [0, 1]', meaningKh: 'អនុគមន៍សកម្មភាពបំប្លែងលេខពី R មកចន្លោះ [0, 1]', role: 'Non-linear Activation' },
            { symbol: 'h(x) = a', meaningEn: 'Final activation output / prediction probability', meaningKh: 'លទ្ធផលសកម្មភាពចុងក្រោយ ឬប្រូបាប៊ីលីតេទស្សន៍ទាយ', role: 'Neuron Activation' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Metric Slider',
        fieldName: 'Bias_b_Slider',
        controlLabelEn: 'Adjust Neuron Bias (b)',
        controlLabelKh: 'កែសម្រួលតម្លៃ Bias (b)',
        defaultValue: '0.0',
        min: -5.0,
        max: 5.0,
        step: 0.1,
        purposeEn: 'Observe how the bias term shifts the activation curve horizontally without altering input weights.',
        purposeKh: 'សង្កេតមើលថាតើតម្លៃ bias រំកិលខ្សែបន្ទាត់សកម្មភាពទៅឆ្វេង ឬស្តាំយ៉ាងដូចម្តេច ដោយមិនប្តូរទម្ងន់ធាតុបញ្ចូល។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Neuron Model (Logistic Unit):',
          'Inputs: x1, x2, x3 alongside bias input (+1 with weight b).',
          'Linear accumulation: z = w1*x1 + w2*x2 + w3*x3 + b.',
          'Vector notation: z = Wx + b, where W is (1x3) and x is (3x1).',
          'Non-linear activation: h(x) = a = g(z).'
        ],
        kh: [
          'គំរូណឺរ៉ូនសិប្បនិម្មិត (អង្គភាពឡូជីស្ទីក)៖',
          'ធាតុបញ្ចូល៖ x1, x2, x3 ព្រមជាមួយធាតុបញ្ចូលលម្អៀង (+1 ជាមួយទម្ងន់ b)។',
          'ការបូកសរុបលីនេអ៊ែរ៖ z = w1*x1 + w2*x2 + w3*x3 + b។',
          'ទម្រង់វ៉ិចទ័រ៖ z = Wx + b ដែល W មានទំហំ (1x3) ហើយ x មានទំហំ (3x1)។',
          'អនុគមន៍សកម្មភាពមិនលីនេអ៊ែរ៖ h(x) = a = g(z)។'
        ]
      },
      deepDiveExplanation: {
        en: 'The logistic unit represents the atomic computational building block of neural networks. The dot product Wx computes how strongly the input pattern aligns with the learned weight filters. The bias b functions exactly like the intercept in linear algebra or the biological threshold in neuroscience: without b, the decision plane would always be forced to pass strictly through the origin (0,0,0), severely crippling its flexibility.',
        kh: 'អង្គភាពឡូជីស្ទីក គឺជាសមាសភាគអាតូមិកគណនាមូលដ្ឋានបំផុតនៃបណ្តាញណឺរ៉ូន។ ផលគុណស្កាលែ Wx គណនាពីកម្រិតស្របគ្នារវាងទម្រង់ធាតុបញ្ចូល និងទម្ងន់ដែលបានរៀន។ ចំណែកតម្លៃលម្អៀង b ដើរតួដូចជាចំនុចកាត់អ័ក្ស (Intercept) ឬកម្រិតកំណត់គីមីក្នុងជីវសាស្ត្រ។ ប្រសិនបើគ្មាន b ទេ ប្លង់កាត់សេចក្តីសម្រេចនឹងត្រូវបង្ខំឱ្យកាត់តាមចំនុចគល់ (0,0,0) ជានិច្ច ដែលធ្វើឱ្យបាត់បង់ភាពបត់បែនយ៉ាងខ្លាំង។'
      },
      practicalApplication: {
        titleEn: 'Credit Risk Scoring Engine',
        titleKh: 'ប្រព័ន្ធវាយតម្លៃពិន្ទុហានិភ័យឥណទានធនាគារ',
        scenarioEn: 'A retail bank computes credit default probability by feeding income (x1), debt ratio (x2), and payment history (x3) into a single logistic neuron.',
        scenarioKh: 'ធនាគារពាណិជ្ជគណនាប្រូបាប៊ីលីតេនៃការមិនសងប្រាក់ ដោយបញ្ចូលប្រាក់ចំណូល (x1) សមាមាត្របំណុល (x2) និងប្រវត្តិសងប្រាក់ (x3) ទៅកាន់ណឺរ៉ូនឡូជីស្ទីកមួយ។',
        businessImpactEn: 'Delivers instantaneous, fully explainable loan underwriting approvals while maintaining under 1.2% default rates.',
        businessImpactKh: 'ផ្តល់នូវការអនុម័តកម្ចីភ្លាមៗ ប្រកបដោយតម្លាភាព និងរក្សាអត្រាហានិភ័យបាត់បង់ប្រាក់ក្រោម ១.២%។'
      }
    },
    interactiveType: 'logistic_neuron'
  },

  // SLIDE 6
  {
    id: 6,
    slideNumber: 6,
    category: 'Activations',
    englishTitle: 'Activation Functions: Sigmoid (Properties, Saturation & Vanishing Gradients)',
    khmerTitle: 'អនុគមន៍សកម្មភាព៖ ស៊ីកម៉ូអ៊ីដ (លក្ខណៈ ភាពឆ្អែត និងបញ្ហាបាត់បង់ក្រាដ្យង់)',
    pageIdentity: {
      bilingualPageTitle: 'Slide 06: Activation Functions — Sigmoid / អនុគមន៍ Sigmoid',
      bilingualPageTitleKh: 'អនុគមន៍សកម្មភាព Sigmoid៖ គុណសម្បត្តិ និងបញ្ហា Vanishing Gradient',
      canvasSetup: 'Medical Cobalt & Alert Amber Warning Theme (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ខៀវក្រម៉ៅ Cobalt ជាមួយស្លាកព្រមានពណ៌ទឹកក្រូច (16:9)',
      hexPrimary: '#2563EB',
      hexSecondary: '#F97316',
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#EF4444',
      themeRationaleEn: 'Cobalt represents standard mathematical curves while alert red and amber emphasize the vanishing gradient pathology in saturated zones.',
      themeRationaleKh: 'ពណ៌ខៀវតំណាងឱ្យខ្សែកោងគណិតវិទ្យាធម្មតា រីឯពណ៌ក្រហម និងលឿងទុំបញ្ជាក់ពីបញ្ហាបាត់បង់ក្រាដ្យង់ក្នុងតំបន់ឆ្អែត។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title, mathematical formula σ(x), and output range pill ]0, 1[.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា រូបមន្ត σ(x) និងស្លាកបង្ហាញដែនតម្លៃ ]0, 1[។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Mathematical breakdown of σ(x), first derivative curve σ\'(x) = σ(x)(1 - σ(x)), and the three fatal architectural limitations. Right 55%: Interactive Sigmoid Curve Visualizer with dynamic tangent gradient calculator at any point x.',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ ការវិភាគរូបមន្ត σ(x) ខ្សែកោងដេរីវេទីមួយ σ\'(x) = σ(x)(1 - σ(x)) និងគុណវិបត្តិធំៗទាំងបី។ ផ្នែកខាងស្តាំ ៥៥%៖ ក្រាហ្វអន្តរកម្ម Sigmoid បង្ហាញបន្ទាត់ប៉ះ និងតម្លៃក្រាដ្យង់នៅគ្រប់ចំនុច x ទាំងអស់។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_6', nameEn: 'Header & Formula Pill', nameKh: 'ក្បាលទំព័រ និងស្លាករូបមន្ត', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_6', nameEn: 'Sigmoid Properties KPI Row', nameKh: 'ជួរ KPI លក្ខណៈ Sigmoid', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'txt_6', nameEn: 'Deep Dive & Limitations Card', nameKh: 'កាតពន្យល់លម្អិត និងគុណវិបត្តិ', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'plt_6', nameEn: 'Interactive Sigmoid Curve & Gradient', nameKh: 'ក្រាហ្វ Sigmoid និងបន្ទាត់ប៉ះក្រាដ្យង់អន្តរកម្ម', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Output Range', labelKh: 'ដែនតម្លៃលទ្ធផល', value: ']0, 1[ Interval', tooltipEn: 'Strictly bounded between 0 and 1, ideal for probability', tooltipKh: 'ស្ថិតនៅចន្លោះ ០ និង ១ ស័ក្តិសមសម្រាប់តម្លៃប្រូបាប៊ីលីតេ' },
        { labelEn: 'Max Derivative σ\'(0)', labelKh: 'ដេរីវេអតិបរមា σ\'(0)', value: '0.25 (At x = 0)', tooltipEn: 'Maximum gradient is only 0.25, shrinking gradients exponentially', tooltipKh: 'ក្រាដ្យង់អតិបរមាត្រឹមតែ ០.២៥ ដែលធ្វើឱ្យក្រាដ្យង់រួមតូចយ៉ាងលឿន' },
        { labelEn: 'Zero-Centered?', labelKh: 'តើមានចំណុចកណ្តាលស្មើ ០ ដែរឬទេ?', value: 'NO (Always Positive)', tooltipEn: 'Leads to inefficient zig-zag gradient dynamics during optimization', tooltipKh: 'ទេ! លទ្ធផលវិជ្ជមានជានិច្ច ធ្វើឱ្យក្រាដ្យង់រត់ zigzag' }
      ],
      chartSetup: {
        chartType: 'Dual-Axis Line Chart (Sigmoid vs Derivative)',
        chartTypeKh: 'ក្រាហ្វខ្សែបន្ទាត់អ័ក្សពីរ (Sigmoid ទល់នឹង ដេរីវេរបស់វា)',
        dimensions: ['Input_x (-10 to +10)'],
        metrics: ['Sigmoid_Value_sigma (តម្លៃ Sigmoid)', 'Gradient_Value_dSigma (តម្លៃក្រាដ្យង់)'],
        sortOrder: 'Input_x ASCENDING',
        filterDefault: 'Full Range -10 to +10',
        chartDescriptionEn: 'Contrasts the S-shaped sigmoid output with its derivative to visually demonstrate vanishing gradients at tails (|x| > 3).',
        chartDescriptionKh: 'ប្រៀបធៀបខ្សែកោងរាងអក្សរ S នៃ Sigmoid ជាមួយដេរីវេរបស់វា ដើម្បីបង្ហាញពីបញ្ហាបាត់បង់ក្រាដ្យង់នៅពេលដែល |x| > 3។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Sigmoid Function and its First Derivative',
          formulaNameKh: 'អនុគមន៍ Sigmoid និងដេរីវេទីមួយ',
          latex: '\\sigma(x) = \\frac{1}{1 + e^{-x}}',
          latexSecondary: '\\frac{d\\sigma(x)}{dx} = \\sigma(x)(1 - \\sigma(x))',
          explanationEn: 'The derivative reaches a tiny peak of 0.25 at x=0 and asymptotically approaches 0 as x moves past +4 or -4, causing backpropagated gradients to vanish completely.',
          explanationKh: 'ដេរីវេឡើងដល់កម្រិតខ្ពស់បំផុតត្រឹម ០.២៥ នៅត្រង់ x=0 ហើយធ្លាក់ចុះស្ទើរតែស្មើ ០ នៅពេល x លើសពី +4 ឬ -4 ដែលបណ្តាលឱ្យក្រាដ្យង់រលាយបាត់ទាំងស្រុង។',
          variables: [
            { symbol: 'x', meaningEn: 'Input scalar value or activation logit', meaningKh: 'ធាតុបញ្ចូលស្កាលែ ឬតម្លៃ Logit', role: 'Input Domain' },
            { symbol: 'e', meaningEn: 'Euler\'s mathematical constant (~2.71828)', meaningKh: 'ចំនួនថេរអយល័រ (~២.៧១៨២៨)', role: 'Constant' },
            { symbol: '\\sigma(x)', meaningEn: 'Output squashed into continuous interval (0, 1)', meaningKh: 'តម្លៃលទ្ធផលរុញខ្ទប់ចន្លោះ (០, ១)', role: 'Activation Output' },
            { symbol: '\\sigma\'(x)', meaningEn: 'Local gradient for backpropagation', meaningKh: 'ក្រាដ្យង់មូលដ្ឋានសម្រាប់បញ្ជូនថយក្រោយ', role: 'Gradient' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Metric Slider',
        fieldName: 'Sigmoid_Input_x_Slider',
        controlLabelEn: 'Probe Input Value (x)',
        controlLabelKh: 'សាកល្បងបញ្ចូលតម្លៃ (x)',
        defaultValue: '0.0',
        min: -8.0,
        max: 8.0,
        step: 0.2,
        purposeEn: 'Tests the instantaneous output and derivative to witness gradient saturation firsthand.',
        purposeKh: 'សាកល្បងមើលលទ្ធផល និងដេរីវេភ្លាមៗ ដើម្បីយល់ច្បាស់ពីភាពឆ្អែតនៃក្រាដ្យង់។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Sigmoid Activation: σ(x) = 1 / (1 + e⁻ˣ)',
          '1. Squashes numbers into range ]0, 1[ (convenient as probabilities).',
          '2. Fatal Problem 1: Saturated neurons "kill" the gradients (Vanishing Gradient Problem). When |x| is large, derivative is ≈ 0.',
          '3. Fatal Problem 2: Sigmoid outputs are NOT zero-centered (mean > 0), causing inefficient zig-zag gradient descent updates.',
          '4. Fatal Problem 3: Computationally expensive due to the exp() power calculation.'
        ],
        kh: [
          'អនុគមន៍សកម្មភាព Sigmoid៖ σ(x) = 1 / (1 + e⁻ˣ)',
          '១. រុញខ្ទប់តម្លៃឱ្យនៅក្នុងចន្លោះ ]0, 1[ (ងាយស្រួលប្រើជាប្រូបាប៊ីលីតេ)។',
          '២. គុណវិបត្តិធ្ងន់ធ្ងរទី ១៖ ណឺរ៉ូនដែលឆ្អែត នឹងសម្លាប់ក្រាដ្យង់ (Vanishing Gradient)។ កាលណា |x| ធំ ដេរីវេស្ទើរតែស្មើ ០។',
          '៣. គុណវិបត្តិធ្ងន់ធ្ងរទី ២៖ លទ្ធផលមិនមានចំណុចកណ្តាលស្មើ ០ (Not zero-centered) នាំឱ្យការធ្វើបច្ចុប្បន្នភាពទម្ងន់រត់ zig-zag យឺតយ៉ាវ។',
          '៤. គុណវិបត្តិធ្ងន់ធ្ងរទី ៣៖ ស៊ីកម្លាំងកុំព្យូទ័រក្នុងការគណនាដោយសារតែមានអនុគមន៍អិចស្ប៉ូណង់ស្យែល exp()។'
        ]
      },
      deepDiveExplanation: {
        en: 'Historically, the Sigmoid function was the most popular activation function because its smooth derivative mimics biological firing rates. However, in deep architectures (more than 3 layers), the chain rule multiplies derivatives: (0.25)³ = 0.015, and by layer 10, gradients shrink to 10⁻⁷! As a result, the earliest layers stop updating completely. Today, Sigmoid is almost exclusively reserved for the final output layer of binary classification tasks.',
        kh: 'ជាប្រវត្តិសាស្ត្រ អនុគមន៍ Sigmoid ធ្លាប់ជាជម្រើសដ៏ពេញនិយមបំផុត ពីព្រោះខ្សែកោងរលូនរបស់វាស្រដៀងទៅនឹងការបញ្ចេញសញ្ញារបស់ណឺរ៉ូនជីវសាស្ត្រ។ ប៉ុន្តែនៅក្នុងបណ្តាញជម្រៅជ្រៅ (លើសពី ៣ ស្រទាប់) វិធានសង្វាក់ (Chain Rule) ត្រូវគុណដេរីវេបញ្ចូលគ្នា៖ (0.25)³ = 0.015 ហើយនៅស្រទាប់ទី ១០ ក្រាដ្យង់ធ្លាក់ចុះសល់ត្រឹម 10⁻⁷! ជាលទ្ធផល ស្រទាប់ខាងដើមឈប់ធ្វើបច្ចុប្បន្នភាពទម្ងន់ទាំងស្រុង។ បច្ចុប្បន្ននេះ Sigmoid ត្រូវបានប្រើប្រាស់ស្ទើរតែទាំងស្រុងត្រឹមតែនៅស្រទាប់បញ្ចេញចុងក្រោយនៃបញ្ហាចំណាត់ថ្នាក់ពីរជម្រើស (Binary Classification) ប៉ុណ្ណោះ។'
      },
      practicalApplication: {
        titleEn: 'Spam Detection Classifier (Output Layer)',
        titleKh: 'ប្រព័ន្ធចម្រាញ់អ៊ីមែលសារឥតបានការ (ស្រទាប់បញ្ចេញចុងក្រោយ)',
        scenarioEn: 'An email gateway uses a sigmoid output neuron to output the probability that an incoming message is malicious phishing.',
        scenarioKh: 'ប្រព័ន្ធសុវត្ថិភាពអ៊ីមែលប្រើប្រាស់ណឺរ៉ូន Sigmoid នៅស្រទាប់ចុងក្រោយ ដើម្បីគណនាប្រូបាប៊ីលីតេថាតើសារដែលផ្ញើមកគឺជាសារបោកប្រាស់ (Phishing) ឬអត់។',
        businessImpactEn: 'Converts unconstrained linear logits into a calibrated 0-100% confidence score that directly drives quarantine thresholds.',
        businessImpactKh: 'បំប្លែងតម្លៃលីនេអ៊ែរឱ្យទៅជាពិន្ទុទំនុកចិត្ត ០-១០០% ដើម្បីកំណត់ការទប់ស្កាត់អ៊ីមែលគ្រោះថ្នាក់បានយ៉ាងច្បាស់លាស់។'
      }
    },
    interactiveType: 'sigmoid'
  },

  // SLIDE 7
  {
    id: 7,
    slideNumber: 7,
    category: 'Activations',
    englishTitle: 'Activation Functions: Hyperbolic Tangent (Tanh) — Zero-Centered Optimization',
    khmerTitle: 'អនុគមន៍សកម្មភាព៖ Tanh (លក្ខណៈ Zero-Centered និងបញ្ហាបាត់បង់ក្រាដ្យង់ដែលនៅសេសសល់)',
    pageIdentity: {
      bilingualPageTitle: 'Slide 07: Activation Functions — Tanh / អនុគមន៍ Tanh',
      bilingualPageTitleKh: 'អនុគមន៍ Hyperbolic Tangent (Tanh)៖ ដំណោះស្រាយ Zero-Centered',
      canvasSetup: 'Cyan & Violet Modern Scientific Theme (16:9 - 1920x1080 px)',
      canvasSetupKh: 'ទម្រង់ផ្ទៃពណ៌ខៀវខ្ចី និងពណ៌ស្វាយបែបវិទ្យាសាស្ត្រទំនើប (16:9)',
      hexPrimary: '#06B6D4',
      hexSecondary: '#8B5CF6',
      hexBackground: '#0F172A',
      hexSurface: '#1E293B',
      hexAccent: '#F43F5E',
      themeRationaleEn: 'Symmetrical color balance reflects the mathematically zero-centered [-1, +1] nature of the hyperbolic tangent function.',
      themeRationaleKh: 'តុល្យភាពពណ៌ស៊ីមេទ្រី បង្ហាញពីលក្ខណៈស៊ីមេទ្រីជុំវិញចំណុចសូន្យ [-1, +1] នៃអនុគមន៍ Tanh។'
    },
    visualWireframe: {
      headerSection: {
        en: 'Top 10%: Bilingual title and Tanh formula notation banner.',
        kh: 'ផ្នែកខាងលើ ១០%៖ ចំណងជើងទ្វេភាសា និងបដារូបមន្ត Tanh(x)។'
      },
      mainWorkspaceCanvas: {
        en: 'Left 45%: Comparison matrix between Sigmoid and Tanh (Zero-centered benefits vs lingering saturation flaw). Right 55%: Interactive Tanh vs Sigmoid Dual Curve visualizer with gradient peak comparison (1.0 vs 0.25).',
        kh: 'ផ្នែកខាងឆ្វេង ៤៥%៖ តារាងប្រៀបធៀបរវាង Sigmoid និង Tanh (អត្ថប្រយោជន៍ Zero-centered ទល់នឹងបញ្ហាឆ្អែតក្រាដ្យង់)។ ផ្នែកខាងស្តាំ ៥៥%៖ ក្រាហ្វអន្តរកម្មប្រៀបធៀប Tanh និង Sigmoid ព្រមទាំងកំពូលដេរីវេ (1.0 ទល់នឹង 0.25)។'
      },
      gridSpecs: {
        aspectRatio: '16:9',
        resolution: '1920 x 1080 px',
        leftPanelWidth: '820 px',
        rightPanelWidth: '1020 px'
      },
      componentPositions: [
        { id: 'hdr_7', nameEn: 'Header & Zero-Centered Badge', nameKh: 'ក្បាលទំព័រ និងស្លាក Zero-Centered', coordinates: 'X: 40, Y: 20, W: 1840, H: 80', type: 'Header' },
        { id: 'kpi_7', nameEn: 'Tanh Core Metrics Row', nameKh: 'ជួរ KPI លក្ខណៈស្នូល Tanh', coordinates: 'X: 40, Y: 110, W: 1840, H: 100', type: 'Scorecard' },
        { id: 'cmp_7', nameEn: 'Sigmoid vs Tanh Benchmark Card', nameKh: 'កាតប្រៀបធៀប Sigmoid និង Tanh', coordinates: 'X: 40, Y: 220, W: 820, H: 790', type: 'Text' },
        { id: 'plt_7', nameEn: 'Interactive Tanh Curve Visualizer', nameKh: 'ក្រាហ្វ Tanh អន្តរកម្ម និងការប្រៀបធៀបដេរីវេ', coordinates: 'X: 880, Y: 220, W: 1000, H: 790', type: 'Interactive' }
      ]
    },
    chartMetricsMath: {
      scorecards: [
        { labelEn: 'Output Range', labelKh: 'ដែនតម្លៃលទ្ធផល', value: ']-1, 1[ Interval', tooltipEn: 'Zero-mean output prevents systematic gradient bias', tooltipKh: 'តម្លៃមធ្យមស្មើ ០ ការពារកុំឱ្យក្រាដ្យង់លម្អៀងទៅទិសតែមួយ' },
        { labelEn: 'Max Derivative tanh\'(0)', labelKh: 'ដេរីវេអតិបរមា tanh\'(0)', value: '1.0 (4x Stronger than Sigmoid)', tooltipEn: 'Provides significantly stronger gradient updates around zero', tooltipKh: 'ផ្តល់ក្រាដ្យង់ខ្លាំងជាង Sigmoid ដល់ទៅ ៤ ដងនៅជុំវិញចំនុចសូន្យ' },
        { labelEn: 'Saturation Status', labelKh: 'ស្ថានភាពភាពឆ្អែត', value: 'STILL KILLS Gradients', tooltipEn: 'For |x| > 3, gradient vanishes just like Sigmoid', tooltipKh: 'នៅពេល |x| > 3 ក្រាដ្យង់នៅតែបាត់បង់ដូច Sigmoid ដដែល' }
      ],
      chartSetup: {
        chartType: 'Side-by-Side Area & Line Comparison Chart',
        chartTypeKh: 'ក្រាហ្វផ្ទៃ និងខ្សែបន្ទាត់ប្រៀបធៀបក្បែរគ្នា',
        dimensions: ['Input_z_Value (-5 to +5)'],
        metrics: ['Tanh_Output (លទ្ធផល Tanh)', 'Tanh_Derivative (ដេរីវេ Tanh)', 'Sigmoid_Output (លទ្ធផល Sigmoid)'],
        sortOrder: 'Input_z_Value ASCENDING',
        filterDefault: 'Full Comparison',
        chartDescriptionEn: 'Demonstrates how Tanh rescales Sigmoid: tanh(x) = 2*sigma(2x) - 1, producing a symmetric zero-centered profile.',
        chartDescriptionKh: 'បង្ហាញពីរបៀបដែល Tanh កែសម្រួលទំហំ Sigmoid៖ tanh(x) = 2*sigma(2x) - 1 ដោយបង្កើតបានទម្រង់ស៊ីមេទ្រីជុំវិញ ០។'
      },
      mathematicalFormulas: [
        {
          formulaNameEn: 'Hyperbolic Tangent & Gradient Formulation',
          formulaNameKh: 'អនុគមន៍ Hyperbolic Tangent និងដេរីវេ',
          latex: '\\tanh(x) = \\frac{e^x - e^{-x}}{e^x + e^{-x}} = 2\\sigma(2x) - 1',
          latexSecondary: '\\frac{d\\tanh(x)}{dx} = 1 - \\tanh^2(x)',
          explanationEn: 'Tanh squashes real values into ]-1, 1[. Its derivative peaks at 1.0 when x = 0, but rapidly approaches 0 as |x| increases.',
          explanationKh: 'Tanh រុញខ្ទប់តម្លៃពិតឱ្យនៅចន្លោះ ]-1, 1[។ ដេរីវេរបស់វាឡើងដល់ ១.០ នៅពេល x = 0 ប៉ុន្តែធ្លាក់ចុះជិត ០ យ៉ាងលឿននៅពេល |x| កើនឡើង។',
          variables: [
            { symbol: 'x', meaningEn: 'Input logit signal', meaningKh: 'សញ្ញាធាតុបញ្ចូល Logit', role: 'Input' },
            { symbol: '\\tanh(x)', meaningEn: 'Zero-centered symmetric output in (-1, 1)', meaningKh: 'លទ្ធផលស៊ីមេទ្រីជុំវិញសូន្យក្នុងចន្លោះ (-១, ១)', role: 'Activation Output' },
            { symbol: '1 - \\tanh^2(x)', meaningEn: 'Derivative computed cleanly from the forward pass', meaningKh: 'រូបមន្តដេរីវេគណនាចេញពីលទ្ធផលសកម្មភាពផ្ទាល់', role: 'Derivative' }
          ]
        }
      ]
    },
    pageControls: [
      {
        controlType: 'Button Group',
        fieldName: 'Activation_Compare_Toggle',
        controlLabelEn: 'Compare Activation Curve',
        controlLabelKh: 'ជ្រើសរើសខ្សែកោងដើម្បីប្រៀបធៀប',
        defaultValue: 'Tanh Only',
        options: ['Tanh Only (Tanh សុទ្ធ)', 'Overlay with Sigmoid (ប្រៀបធៀបជាមួយ Sigmoid)'],
        purposeEn: 'Toggles between single function analysis and side-by-side comparative overlay.',
        purposeKh: 'បិទបើករវាងការវិភាគអនុគមន៍តែមួយ ឬការប្រៀបធៀបត្រួតស៊ីគ្នាជាមួយ Sigmoid។'
      }
    ],
    expandedBilingualContent: {
      onScreenText: {
        en: [
          'Tanh Activation: tanh(x) = (eˣ - e⁻ˣ) / (eˣ + e⁻ˣ)',
          '1. Squashes numbers into range ]-1, 1[.',
          '2. Major advantage: Output is zero-centered! The mean of activations is close to 0, which stabilizes gradient descent dynamics.',
          '3. Persistent limitation: It STILL kills gradients! When neurons become saturated at large positive or negative inputs, tanh\'(x) approaches 0.'
        ],
        kh: [
          'អនុគមន៍សកម្មភាព Tanh៖ tanh(x) = (eˣ - e⁻ˣ) / (eˣ + e⁻ˣ)',
          '១. រុញខ្ទប់តម្លៃឱ្យនៅក្នុងចន្លោះ ]-1, 1[។',
          '២. គុណសម្បត្តិធំបំផុត៖ លទ្ធផលមានចំណុចកណ្តាលស្មើ ០ (Zero-centered)! តម្លៃមធ្យមនៃសកម្មភាពនៅជិត ០ ជួយឱ្យ Gradient Descent រត់មានស្ថិរភាព។',
          '៣. គុណវិបត្តិដែលនៅសេសសល់៖ វានៅតែសម្លាប់ក្រាដ្យង់ដដែល (Still kills gradients)! នៅពេលដែលណឺរ៉ូនឆ្អែតដោយសារធាតុបញ្ចូលធំពេក ឬតូចពេក ដេរីវេ tanh\'(x) នៅតែធ្លាក់ជិត ០។'
        ]
      },
      deepDiveExplanation: {
        en: 'Tanh is mathematically superior to Sigmoid for hidden layers because its zero-centered outputs ensure that weights receive both positive and negative gradient signals simultaneously. This avoids the undesirable "all-positive" or "all-negative" zigzag updates seen in Sigmoid networks. However, because both ends of the Tanh curve flatline at +1 and -1, deep multi-layer networks still suffer catastrophic vanishing gradients.',
        kh: 'Tanh មានលក្ខណៈប្រសើរជាង Sigmoid ផ្នែកគណិតវិទ្យាសម្រាប់ស្រទាប់លាក់ (Hidden Layers) ពីព្រោះលទ្ធផល Zero-centered ធានាថាទម្ងន់ទទួលបានសញ្ញាក្រាដ្យង់ទាំងវិជ្ជមាន និងអវិជ្ជមានដំណាលគ្នា។ ការណ៍នេះជួយបញ្ចៀសការរត់ zig-zag ទៅទិសតែមួយ។ ទោះជាយ៉ាងណាក៏ដោយ ដោយសារចុងសងខាងនៃខ្សែកោង Tanh នៅតែរាបស្មើត្រង់ +1 និង -1 បណ្តាញជម្រៅជ្រៅជាច្រើនស្រទាប់នៅតែជួបប្រទះបញ្ហាបាត់បង់ក្រាដ្យង់ (Vanishing Gradient) ដូចគ្នា។'
      },
      practicalApplication: {
        titleEn: 'Recurrent Neural Network (LSTM / GRU) State Cell',
        titleKh: 'កោសិកាអង្គចងចាំនៃបណ្តាញ RNN (LSTM និង GRU)',
        scenarioEn: 'LSTM memory cells use Tanh to regulate candidate hidden states between -1 and +1, preventing internal memory values from blowing up exponentially.',
        scenarioKh: 'កោសិកាអង្គចងចាំ LSTM ប្រើប្រាស់ Tanh ដើម្បីគ្រប់គ្រងតម្លៃស្ថានភាពលាក់ (Hidden State) ចន្លោះ -១ និង +១ ការពារកុំឱ្យតម្លៃចងចាំផ្ទុះឡើងធំជ្រុល។',
        businessImpactEn: 'Maintains numeric stability in sequence models for real-time Khmer-to-English speech translation systems.',
        businessImpactKh: 'រក្សាស្ថិរភាពលេខគណនាក្នុងម៉ូដែលបកប្រែសំឡេងភាសាខ្មែរទៅអង់គ្លេសតាមពេលវេលាជាក់ស្តែង។'
      }
    },
    interactiveType: 'tanh'
  }
];
