import { SlideBlueprint } from '../types';
import { slides1to7 } from './slides/slides1to7';
import { slides8to14 } from './slides/slides8to14';
import { slides15to21 } from './slides/slides15to21';
import { slides22to26 } from './slides/slides22to26';

export const allSlides: SlideBlueprint[] = [
  ...slides1to7,
  ...slides8to14,
  ...slides15to21,
  ...slides22to26
];

export const categories = [
  { id: 'All', nameEn: 'All Slides (1-26)', nameKh: 'ស្លាយទាំងអស់ (១-២៦)' },
  { id: 'Foundation', nameEn: 'Foundations & Hypotheses', nameKh: 'គ្រឹះសម្មតិកម្មមិនលីនេអ៊ែរ' },
  { id: 'Activations', nameEn: 'Activation Functions', nameKh: 'អនុគមន៍សកម្មភាព (Activations)' },
  { id: 'Architecture', nameEn: 'Network Architecture', nameKh: 'ស្ថាបត្យកម្មបណ្តាញណឺរ៉ូន' },
  { id: 'Training & Loss', nameEn: 'Cost & Training Loop', nameKh: 'អនុគមន៍ចំណាយ និងរង្វិលជុំហ្វឹកហាត់' },
  { id: 'Optimization', nameEn: 'Optimizers & Tuning', nameKh: 'អុបទិមៃស័រ និងការលៃតម្រូវ' },
  { id: 'Regularization', nameEn: 'Regularization & Norm', nameKh: 'Regularization និង Batch Norm' },
  { id: 'Practical Lab', nameEn: 'Khmer OCR Lab & Ref', nameKh: 'លំហាត់ OCR អក្សរខ្មែរ និងឯកសារយោង' },
];

export function getSlideByNumber(num: number): SlideBlueprint | undefined {
  return allSlides.find((s) => s.slideNumber === num);
}

export function getAdjacentSlides(currentSlide: number): { prev: SlideBlueprint | null; next: SlideBlueprint | null } {
  const currentIndex = allSlides.findIndex((s) => s.slideNumber === currentSlide);
  return {
    prev: currentIndex > 0 ? allSlides[currentIndex - 1] : null,
    next: currentIndex < allSlides.length - 1 ? allSlides[currentIndex + 1] : null
  };
}
