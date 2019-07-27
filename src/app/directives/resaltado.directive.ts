import { Directive, ElementRef, HostListener, Input } from '@angular/core'; // para trabajar con la referencia del elemento html
// en la cual esta puesta esta directiva se necesita ElementRef. tambien se necesita inyectar esto en le constructor
// para poderlo utilizar

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {// el es todo el objeto y todo el parrafo
    console.log( 'directiva llamada' );
  }
  @Input('appResaltado') nuwvoColor: string;
  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuwvoColor || 'yellow');
  }
  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
  }
  private resaltar( color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
