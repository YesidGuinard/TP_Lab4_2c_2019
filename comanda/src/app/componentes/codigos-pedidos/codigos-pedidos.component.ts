import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-codigos-pedidos',
  templateUrl: './codigos-pedidos.component.html',
  styleUrls: ['./codigos-pedidos.component.css']
})
export class CodigosPedidosComponent implements OnInit {

  @Input() listadoDeCodigos: Array<any>;

  constructor() { 
    this.listadoDeCodigos = new Array<any>();
  }

  ngOnInit() {
  }

}
