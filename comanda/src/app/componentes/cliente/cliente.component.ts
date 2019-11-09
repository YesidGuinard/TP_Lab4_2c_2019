import { Component, OnInit } from '@angular/core';
import { ClientePedidosService } from '../../servicios/clientePedidos/cliente-pedidos.service';
import { Pedido } from '../../clases/pedido';
import { Codigo } from '../../clases/codigo';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClientePedidosService]
})
export class ClienteComponent implements OnInit {
 
  nombreCliente: string; 
  codigosDePedido: Array<Codigo>;

  constructor(private clienteService: ClientePedidosService) {
    this.codigosDePedido = new Array<any>();
   }

  ngOnInit() {
    this.nombreCliente = localStorage.getItem('usuario');
  }
}
