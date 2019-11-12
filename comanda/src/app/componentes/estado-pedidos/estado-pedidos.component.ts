import { Component, OnInit } from '@angular/core';
import { ClientePedidosService } from '../../servicios/clientePedidos/cliente-pedidos.service';

@Component({
  selector: 'app-estado-pedidos',
  templateUrl: './estado-pedidos.component.html',
  styleUrls: ['./estado-pedidos.component.css'],
  providers: [ClientePedidosService]
})
export class EstadoPedidosComponent implements OnInit {

  codigoMesa: string; 
  codigoPedido: string; 
  tiempoRestante: string; 
  estado: string; 

  constructor(private pedidosService: ClientePedidosService) { }

  verTiempoRestante(){
    return this.pedidosService.verTiempoRestante(this.codigoMesa, this.codigoPedido).subscribe(respuesta => {
      this.tiempoRestante = respuesta.TiempoRestante;      
      this.estado = respuesta.Estado; 
    })
  }

  ngOnInit() {
  }

}
