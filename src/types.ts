export type BilingualMode = 'bilingual' | 'english' | 'khmer';

export interface VariableExplanation {
  symbol: string;
  meaningEn: string;
  meaningKh: string;
  role: string;
}

export interface MetricScorecard {
  labelEn: string;
  labelKh: string;
  value: string;
  unit?: string;
  comparison?: string;
  comparisonDirection?: 'up' | 'down' | 'neutral';
  tooltipEn: string;
  tooltipKh: string;
}

export interface ChartConfig {
  chartType: string;
  chartTypeKh: string;
  dimensions: string[];
  metrics: string[];
  breakdownDimension?: string;
  sortOrder: string;
  filterDefault: string;
  chartDescriptionEn: string;
  chartDescriptionKh: string;
}

export interface FormulaConfig {
  latex: string;
  latexSecondary?: string;
  variables: VariableExplanation[];
  formulaNameEn: string;
  formulaNameKh: string;
  explanationEn: string;
  explanationKh: string;
}

export interface PageControl {
  controlType: 'Dropdown' | 'Metric Slider' | 'Input Box' | 'Date Range' | 'Button Group';
  fieldName: string;
  controlLabelEn: string;
  controlLabelKh: string;
  defaultValue: string;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  purposeEn: string;
  purposeKh: string;
}

export interface PracticalScenario {
  titleEn: string;
  titleKh: string;
  scenarioEn: string;
  scenarioKh: string;
  businessImpactEn: string;
  businessImpactKh: string;
}

export interface SlideBlueprint {
  id: number;
  slideNumber: number;
  category: 'Foundation' | 'Activations' | 'Architecture' | 'Training & Loss' | 'Optimization' | 'Regularization' | 'Practical Lab';
  englishTitle: string;
  khmerTitle: string;
  
  // 1. Page Identity & Theme
  pageIdentity: {
    bilingualPageTitle: string;
    bilingualPageTitleKh: string;
    canvasSetup: string;
    canvasSetupKh: string;
    hexPrimary: string;
    hexSecondary: string;
    hexBackground: string;
    hexSurface: string;
    hexAccent: string;
    themeRationaleEn: string;
    themeRationaleKh: string;
  };

  // 2. Visual Wireframe & Layout Grid
  visualWireframe: {
    headerSection: {
      en: string;
      kh: string;
    };
    mainWorkspaceCanvas: {
      en: string;
      kh: string;
    };
    gridSpecs: {
      aspectRatio: string;
      resolution: string;
      leftPanelWidth: string;
      rightPanelWidth: string;
      bottomPanelHeight?: string;
    };
    componentPositions: Array<{
      id: string;
      nameEn: string;
      nameKh: string;
      coordinates: string;
      type: 'Header' | 'Scorecard' | 'Chart' | 'Formula' | 'Text' | 'Filter' | 'Interactive';
    }>;
  };

  // 3. Chart, Metrics & Math Mapping
  chartMetricsMath: {
    scorecards: MetricScorecard[];
    chartSetup: ChartConfig;
    mathematicalFormulas?: FormulaConfig[];
  };

  // 4. Page Controls & Interactive Filters
  pageControls: PageControl[];

  // 5. Expanded Bilingual Content & In-Depth Explanation
  expandedBilingualContent: {
    onScreenText: {
      en: string[];
      kh: string[];
    };
    deepDiveExplanation: {
      en: string;
      kh: string;
    };
    practicalApplication: PracticalScenario;
  };

  // Interactive component type for the live simulator
  interactiveType: 'title' | 'nonlinear' | 'pixel_grid' | 'biological' | 'logistic_neuron' | 'sigmoid' | 'tanh' | 'relu' | 'leaky_relu' | 'elu' | 'layer_matrix' | 'deep_network' | 'multiclass_onehot' | 'cross_entropy' | 'weight_init' | 'training_pipeline' | 'minibatch' | 'momentum' | 'rmsprop_adam' | 'hyperparameter_tuning' | 'overfitting_curve' | 'l1_l2_regularization' | 'dropout' | 'batch_norm' | 'khmer_exercise' | 'references';
}
