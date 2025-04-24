import { trigger, transition, style, animate } from '@angular/animations';

export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-20px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ])
]);