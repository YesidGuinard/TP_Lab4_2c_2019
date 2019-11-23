import { Component, OnInit } from '@angular/core';
import { ClientePedidosService } from '../../servicios/clientePedidos/cliente-pedidos.service';
import { Pedido } from '../../clases/pedido';
import { Codigo } from '../../clases/codigo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClientePedidosService]
})
export class ClienteComponent implements OnInit {
 
  nombreCliente: string; 
  codigosDePedido: Array<Codigo>;
  idMesaSeleccionada;
  codigoMesaSeleccionada;
  clienteId;
  pedidos; 

  constructor(private clienteService: ClientePedidosService, private rutaActiva: ActivatedRoute) {
    this.codigosDePedido = new Array<any>();
   }

   habilitarGenerarPedido(idMesa) {
     this.idMesaSeleccionada = idMesa;
   }

   recibirCodigoMesaSeleccionada(codigo){
    this.codigoMesaSeleccionada = codigo; 
   }

   recibePedidos(pedidos) { 
     this.pedidos = pedidos; 
   }

  ngOnInit() {
    this.nombreCliente = localStorage.getItem('usuario');
    this.clienteId = this.rutaActiva.snapshot.params.idCliente;
  }
}
