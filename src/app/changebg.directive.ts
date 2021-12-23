import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangebg]'
})
export class ChangebgDirective {
   @Input() isCorrect : Boolean = false;
   constructor(private el : ElementRef, private render :Renderer2) {}
   @HostListener('click') answer(){
    if(this.isCorrect){
      this.render.setStyle(this.el.nativeElement,'background','green');
      this.render.setStyle(this.el.nativeElement,'boarder','grey');
      this.render.setStyle(this.el.nativeElement,'color','#fff');
    }else{
      this.render.setStyle(this.el.nativeElement,'background','red');
      this.render.setStyle(this.el.nativeElement,'boarder','grey');
      this.render.setStyle(this.el.nativeElement,'color','#fff');
    }
   }

}
