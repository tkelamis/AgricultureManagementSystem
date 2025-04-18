import { trigger, transition, style, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(10px)' }),
    animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
//   transition(':leave', [
//     animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' })),
//   ]),
]);