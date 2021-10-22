import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgbroken]'
})
export class ImgbrokenDirective {
  @HostListener('error') manejadordeerror():void{
    const img = this.host.nativeElement;
    img.src = 'http://4.bp.blogspot.com/-tX9brzE8OUU/UWxcqN4Is9I/AAAAAAAAAN0/3uhaRHRMFzE/s1600/Gioconda.jpg'
  }

  constructor( private host: ElementRef) {

   }


}
