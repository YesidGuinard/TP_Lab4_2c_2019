import { Component, OnInit } from '@angular/core';
import { ClientePedidosService } from 'src/app/servicios/clientePedidos/cliente-pedidos.service';

@Component({
  selector: 'app-listado-precios',
  templateUrl: './listado-precios.component.html',
  styleUrls: ['./listado-precios.component.css']
})
export class ListadoPreciosComponent implements OnInit {

  productosCocina = new Array<any>();
  vinos = new Array<any>();
  cervezas = new Array<any>();
  postres = new Array<any>();
  verLista = false; 

  constructor(private clienteService: ClientePedidosService) { }

  verListaPrecios(){
    this.verLista = true; 
  }

  ocultar(){
    this.verLista = false; 
  }

  ngOnInit() {
    this.clienteService.getProductosCocina().subscribe(res => this.productosCocina = res);
    this.clienteService.getVinos().subscribe(res => this.vinos = res);      
    this.clienteService.getCervezas().subscribe(res => this.cervezas = res);    
    this.clienteService.getPostres().subscribe(res => this.postres = res);
  }

}
