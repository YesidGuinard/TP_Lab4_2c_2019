import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmpleadosService } from 'src/app/servicios/empleados/empleados.service';
import Swal from 'sweetalert2';

@Component({
  selector: '[app-tomar-pedido]',
  templateUrl: './tomar-pedido.component.html',
  styleUrls: ['./tomar-pedido.component.css']
})
export class TomarPedidoComponent implements OnInit {

  @Input() pedido;
  @Output() enviarSeTomoUnPedido = new EventEmitter<any>();
  tiempoEstimado;

  constructor(private empleadosService: EmpleadosService) { }

  tomarPedido(codigo){
    if(this.tiempoEstimado != undefined){
      this.empleadosService.TomarPedido(codigo, this.tiempoEstimado).subscribe(respuesta => {
        if(respuesta.Estado == "Ok"){
          this.enviarSeTomoUnPedido.emit(true);
        }
      })
    }
    else {
      Swal.fire({
        title: 'Alerta',
        text: "Debe introducir un tiempo estimado",
        confirmButtonColor: '#3085d6',
      })
    }
  }

  ngOnInit() {
  }

}
