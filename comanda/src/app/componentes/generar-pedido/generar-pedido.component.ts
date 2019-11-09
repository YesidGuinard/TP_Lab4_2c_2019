import { Component, OnInit } from '@angular/core';
import { ClientePedidosService } from '../../servicios/clientePedidos/cliente-pedidos.service';
import { Pedido } from '../../clases/pedido';
import { Codigo } from '../../clases/codigo';

@Component({
  selector: 'app-generar-pedido',
  templateUrl: './generar-pedido.component.html',
  styleUrls: ['./generar-pedido.component.css'],
  providers: [ClientePedidosService]
})
export class GenerarPedidoComponent implements OnInit {

  pedido: Pedido; 
  idMesa: number; 
  nombreCliente: string; 
  productosCocina: Array<any>; 
  productoCocinaSeleccionado: any;
  cantidadProductoCocina: number;
  vinos: Array<any>;
  vinoSeleccionado: any; 
  cantidadVino: number; 
  cervezas: Array<any>;
  cervezaSeleccionada: any;
  cantidadCerveza: number;  
  postres: Array<any>;
  postreSeleccionado: any; 
  cantidadPostre: number; 
  codigosDePedido: Array<Codigo>;
  habilitarAgregarPlatoPrincipal: boolean;
  habilitarAgregarVino: boolean; 
  habilitarAgregarCerveza: boolean; 
  habilitarAgregarPostre: boolean; 

  constructor(private clienteService: ClientePedidosService) {
    this.codigosDePedido = new Array<any>();
    this.nombreCliente = localStorage.getItem('usuario');
    this.habilitarAgregarPlatoPrincipal = false; 
    this.habilitarAgregarVino = false; 
    this.habilitarAgregarCerveza = false; 
    this.habilitarAgregarPostre = false; 
   }

  enviarPlatoPrincipal() {debugger
    this.pedido = new Pedido();  
    this.pedido.idMesa = 1;
    this.pedido.idProducto = this.productoCocinaSeleccionado;
    this.pedido.cantidad = this.cantidadProductoCocina;
    this.pedido.nombreCliente = this.nombreCliente;

    this.clienteService.generarPedido(this.pedido).subscribe(res => {
      var codigo = new Codigo();
      codigo.tipoPedido = 'Plato principal';
      codigo.codigo = res.CodigoPedido;
      this.codigosDePedido.push(codigo);  
      console.log(this.codigosDePedido);
      localStorage.setItem('codigos', JSON.stringify(this.codigosDePedido));
    });

    this.habilitarAgregarPlatoPrincipal = true; 
    this.productoCocinaSeleccionado = null; 
    this.cantidadProductoCocina = null; 
    document.getElementById('selectCocina').setAttribute('disabled', 'disabled');
    document.getElementById('cantidadCocina').setAttribute('disabled', 'disabled');
  }

  habilitarBotonGuardarCocina(){
    this.habilitarAgregarPlatoPrincipal = false; 
    document.getElementById('selectCocina').removeAttribute('disabled');
    document.getElementById('cantidadCocina').removeAttribute('disabled');
  }

  enviarVino() {
    this.pedido = new Pedido();  
    this.pedido.idMesa = 1;
    this.pedido.idProducto = this.vinoSeleccionado;
    this.pedido.cantidad = this.cantidadVino;
    this.pedido.nombreCliente = this.nombreCliente;

    this.clienteService.generarPedido(this.pedido).subscribe(res => {
      var codigo = new Codigo();
      codigo.tipoPedido = 'Vino';
      codigo.codigo = res.CodigoPedido;
      this.codigosDePedido.push(codigo);
      console.log(this.codigosDePedido);
      localStorage.setItem('codigos', JSON.stringify(this.codigosDePedido));
    });

    this.habilitarAgregarVino = true; 
    this.vinoSeleccionado = null; 
    this.cantidadVino = null; 
    document.getElementById('selectVino').setAttribute('disabled', 'disabled');
    document.getElementById('cantidadVino').setAttribute('disabled', 'disabled');
  }

  habilitarBotonGuardarVino(){
    this.habilitarAgregarVino = false; 
    document.getElementById('selectVino').removeAttribute('disabled');
    document.getElementById('cantidadVino').removeAttribute('disabled');
  }

  enviarCerveza() {
    this.pedido = new Pedido();  
    this.pedido.idMesa = 1;
    this.pedido.idProducto = this.cervezaSeleccionada;
    this.pedido.cantidad = this.cantidadCerveza;
    this.pedido.nombreCliente = this.nombreCliente;

    this.clienteService.generarPedido(this.pedido).subscribe(res => {
      var codigo = new Codigo();
      codigo.tipoPedido = 'Cerveza';
      codigo.codigo = res.CodigoPedido;
      this.codigosDePedido.push(codigo);
      console.log(this.codigosDePedido);
      localStorage.setItem('codigos', JSON.stringify(this.codigosDePedido));
    });

    this.habilitarAgregarCerveza = true; 
    this.cervezaSeleccionada = null; 
    this.cantidadCerveza = null; 
    document.getElementById('selectCerveza').setAttribute('disabled', 'disabled');
    document.getElementById('cantidadCerveza').setAttribute('disabled', 'disabled');
  }

  habilitarBotonGuardarCerveza(){
    this.habilitarAgregarVino = false; 
    document.getElementById('selectCerveza').removeAttribute('disabled');
    document.getElementById('cantidadCerveza').removeAttribute('disabled');
  }

  enviarPostre() {
    this.pedido = new Pedido();  
    this.pedido.idMesa = 1;
    this.pedido.idProducto = this.postreSeleccionado;
    this.pedido.cantidad = this.cantidadPostre;
    this.pedido.nombreCliente = this.nombreCliente;

    this.clienteService.generarPedido(this.pedido).subscribe(res => {
      var codigo = new Codigo();
      codigo.tipoPedido = 'Postre';
      codigo.codigo = res.CodigoPedido;
      this.codigosDePedido.push(codigo);
      console.log(this.codigosDePedido);
      localStorage.setItem('codigos', JSON.stringify(this.codigosDePedido));
    });
    
    this.habilitarAgregarPostre = true; 
    this.postreSeleccionado = null; 
    this.cantidadPostre = null; 
    document.getElementById('selectPostre').setAttribute('disabled', 'disabled');
    document.getElementById('cantidadPostre').setAttribute('disabled', 'disabled');
  }

  habilitarBotonGuardarPostre(){
    this.habilitarAgregarPostre = false; 
    document.getElementById('selectPostre').removeAttribute('disabled');
    document.getElementById('cantidadPostre').removeAttribute('disabled');
  }

  ngOnInit() {
    this.clienteService.getProductosCocina().subscribe(res => this.productosCocina = res);
    this.clienteService.getVinos().subscribe(res => this.vinos = res);      
    this.clienteService.getCervezas().subscribe(res => this.cervezas = res);    
    this.clienteService.getPostres().subscribe(res => this.postres = res);
  }
}
