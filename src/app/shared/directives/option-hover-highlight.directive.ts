import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOptionHoverHighlight]',
  standalone: false
})
export class OptionHoverHighlightDirective {

  @HostBinding('style.textDecoration') textDecoration?: string;
  @HostBinding('style.user-select') textChoose?: string;
  @HostBinding('style.transition') transition = 'background-color 0.1 ease-in-out';
  @HostBinding('style.cursor') cursor = 'pointer'

  constructor() { }

  @HostListener('mouseenter') onMouseEnter(){
    this.textDecoration = 'underline';
    this.textChoose = 'none';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.textChoose = 'none';
    this.textDecoration = 'none';
  }

}
