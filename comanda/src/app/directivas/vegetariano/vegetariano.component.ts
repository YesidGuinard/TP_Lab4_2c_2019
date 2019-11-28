import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: '[app-vegetariano]',
  templateUrl: './vegetariano.component.html',
  styleUrls: ['./vegetariano.component.css']
})
export class VegetarianoComponent implements OnInit {

  @Input() productoVeg;

  constructor(private el: ElementRef) { }

  resaltarProductoVegetariano(){
    if(this.productoVeg.vegetariano == 1) {
      this.el.nativeElement.style.backgroundColor = 'lightgreen';
    }
  }

  ngOnInit() {
    this.resaltarProductoVegetariano();
  }

}
