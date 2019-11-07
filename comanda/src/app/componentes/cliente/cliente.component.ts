import { Component, OnInit } from '@angular/core';
import { ClientePedidosService } from '../../servicios/clientePedidos/cliente-pedidos.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClientePedidosService]
})
export class ClienteComponent implements OnInit {

  productosCocina: Array<any>; 
  productoCocinaSeleccionado: any;

  vinos: Array<any>;
  vinoSeleccionado: any; 

  cervezas: Array<any>;
  cervezaSeleccionada: any; 

  postres: Array<any>;
  postreSeleccionado: any; 

  constructor(private clienteService: ClientePedidosService) { }

  enviarPlatoPrincipal() {
    console.log(this.productoCocinaSeleccionado);
  }

  enviarVino() {
    console.log(this.vinoSeleccionado);
  }

  enviarCerveza() {
    console.log(this.cervezaSeleccionada);
  }

  enviarPostre() {
    console.log(this.postreSeleccionado);
  }

  ngOnInit() {

    this.clienteService.getProductosCocina().subscribe(res => this.productosCocina = res);
    this.clienteService.getVinos().subscribe(res => this.vinos = res);      
    this.clienteService.getCervezas().subscribe(res => this.cervezas = res);    
    this.clienteService.getPostres().subscribe(res => this.postres = res);
  }
}
