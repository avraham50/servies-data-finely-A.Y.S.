import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeMat]'
})
export class ChangeMatDirective {

  private el:HTMLElement

  constructor(element:ElementRef) {
    this.el=element.nativeElement;
   }


  @HostListener('click')onClick(){
    this.el.style.backgroundColor = 'rgb(155, 230, 146)';
  }
  @HostListener('mouseenter') onmouseenter() {
    this.el.style.backgroundColor = 'blue';
    this.el.style.borderRadius = '35px'
    // this.el.style.fontSize = '4.5vw'
    this.el.style.textShadow = '-1px 1px white'
    this.el.style.color = 'red'
    this.el.style.boxShadow = '-6px 4px lightblue'

    this.el.style.transition = 'all 2s'
  }
  @HostListener('mouseleave') onMouSeleave() {
    this.el.style.backgroundColor = 'rgb(188, 231, 246)';
  }
// .panel-list > div: hover{

//   padding: 1vw;
//   margin: 3vw;
//   background - color: rgb(155, 230, 146);
//   border: solid rgb(7, 206, 24);
//   border - radius: 50 %;
// }
}
