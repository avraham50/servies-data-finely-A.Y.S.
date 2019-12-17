import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {

  private el: HTMLImageElement

  constructor(element: ElementRef) {
    this.el = element.nativeElement;
  }


  @HostListener('mouseenter') onenter() {
    // let w = this.el.style.width
    // console.log('w',w);
    this.el.style.width = '250%'
    this.el.src = 'data:image/jpeg;base64,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'
  }
  @HostListener('click') onClick() {
    // let w = this.el.style.width
    // console.log('w',w);
    this.el.style.width = '280%'
    this.el.style.height = 'larger'
    this.el.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2ZqeOBTrrvMQ_YzTn1G5DuS0hJZUip3jqlBZrRwB2VnpxWJ9&s'
  }


  @HostListener('mouseleave') onleave() {
    // let w = this.el.style.width
    // console.log('w',w);
    this.el.style.width = '100%'
    this.el.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5l0PedcpWRZtBneon9CK_OYWSCHmFQKZ2ipSycJtFFgx2yezbhQ&s'

  }
}
