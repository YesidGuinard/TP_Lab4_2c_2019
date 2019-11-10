import { Component, OnInit, Input } from '@angular/core';
import { Codigo } from '../../clases/codigo';

@Component({
  selector: 'app-codigos-pedidos',
  templateUrl: './codigos-pedidos.component.html',
  styleUrls: ['./codigos-pedidos.component.css']
})
export class CodigosPedidosComponent implements OnInit {

  @Input() listadoDeCodigos: Array<any>;
  codigo: Codigo = new Codigo();

  constructor() { 
    this.listadoDeCodigos = new Array<any>();
  }

  ngOnInit() {
  }

}
