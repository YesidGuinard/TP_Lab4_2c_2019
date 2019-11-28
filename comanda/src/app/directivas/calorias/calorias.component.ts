import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: '[app-calorias]',
  templateUrl: './calorias.component.html',
  styleUrls: ['./calorias.component.css']
})
export class CaloriasComponent implements OnInit {

  @Input() calorias;

  constructor(private el: ElementRef) { }

  indicarCalorias() {
    if(this.calorias <= 200){
      this.el.nativeElement.textContent = 'BAJO';
    }
    else if(this.calorias <= 400) {
      this.el.nativeElement.textContent = 'MEDIO';
    }
    else{
      this.el.nativeElement.textContent = 'ALTO';
    }
  }

  ngOnInit() {
    this.indicarCalorias(); 
  }

}
