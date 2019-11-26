import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmpleadosService } from 'src/app/servicios/empleados/empleados.service';

@Component({
  selector: 'app-pedidos-pendientes',
  templateUrl: './pedidos-pendientes.component.html',
  styleUrls: ['./pedidos-pendientes.component.css']
})
export class PedidosPendientesComponent implements OnInit {

  @Output() enviarSeTomoPedido = new EventEmitter<any>();
  @Input() pedidos;
  tiempoEstimado;

  constructor(private empleadosService: EmpleadosService) { }

  actualizarPedidosPendientes(){
    this.empleadosService.VerPedidosPendientes(1).subscribe(respuesta => {
      if(respuesta.Estado == "Ok"){
        this.pedidos = respuesta.Pedidos;
      }
      else if(respuesta.Estado == "SinPedidos") {
        this.pedidos = new Array<any>();
      }
    })
  }

  recibeSeTomoPedido(event) {
    if(event) {
      this.enviarSeTomoPedido.emit(true);
    }
  }

  ngOnInit() {
  }

}
