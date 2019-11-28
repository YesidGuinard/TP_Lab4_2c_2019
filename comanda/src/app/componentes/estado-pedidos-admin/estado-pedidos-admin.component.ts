import { Component, OnInit } from '@angular/core';
import { ClientePedidosService } from 'src/app/servicios/clientePedidos/cliente-pedidos.service';

@Component({
  selector: 'app-estado-pedidos-admin',
  templateUrl: './estado-pedidos-admin.component.html',
  styleUrls: ['./estado-pedidos-admin.component.css']
})
export class EstadoPedidosAdminComponent implements OnInit {

  verLista = false;
  filtroEstado = "";
  listaPedidos = new Array<any>();

  constructor(private pedidosService: ClientePedidosService) { }

  verListaPedidos(){
    this.verLista = true; 
  }
  ocultarLista(){
    this.verLista = false; 
  }

  cargarPedidos(){
    this.pedidosService.getTodosLosPedidosConEstado().subscribe(respuesta => {
      this.listaPedidos = respuesta; 
    })
  }

  ngOnInit() {
    this.cargarPedidos();
  }

}
