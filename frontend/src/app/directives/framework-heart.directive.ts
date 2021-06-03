import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFrameworkHeart]'
})
export class FrameworkHeartDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color= '#7531eb';
   }

}
