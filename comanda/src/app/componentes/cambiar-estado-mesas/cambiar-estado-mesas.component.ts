import { Component, OnInit } from '@angular/core';
import { MesasService } from 'src/app/servicios/mesas/mesas.service';
import { ReplaySubject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-estado-mesas',
  templateUrl: './cambiar-estado-mesas.component.html',
  styleUrls: ['./cambiar-estado-mesas.component.css']
})
export class CambiarEstadoMesasComponent implements OnInit {

  mesasAsignadas = new Array<any>();
  mesasClienteEsperandoPedido = new Array<any>();
  mesasClienteComiendo = new Array<any>();

  constructor(private mesasService: MesasService) { }

  clienteEsperandoPedido(codigoMesa) {
    this.mesasService.CambiarEstadoClienteEsperandoPedido(codigoMesa).subscribe(respuesta => {
      if (respuesta.Estado == "Ok") {
        this.mesasService.ObtenerMesasConEstado(1).subscribe(respuesta => {
          if (respuesta.Estado == "Ok") {
            this.mesasClienteEsperandoPedido = respuesta.Mesas;
          }
        })
        this.mesasService.ObtenerMesasConEstado(5).subscribe(respuesta => {
          if (respuesta.Estado == "Ok") {
            this.mesasAsignadas = respuesta.Mesas;
          }
          else {
            this.mesasAsignadas = new Array<any>();
          }
        })
      }
      else {
        this.alertaMesa(respuesta.Mensaje);
      }
    })
  }
  
  clienteComiendo(codigoMesa){
    this.mesasService.CambiarEstadoClienteComiendo(codigoMesa).subscribe(respuesta => {
      if (respuesta.Estado == "Ok") {
        this.mesasService.ObtenerMesasConEstado(1).subscribe(respuesta => {
          if (respuesta.Estado == "Ok") {
            this.mesasClienteEsperandoPedido = respuesta.Mesas;
          }
          else {
            this.mesasClienteEsperandoPedido = new Array<any>();
          }
        })
        this.mesasService.ObtenerMesasConEstado(2).subscribe(respuesta => {
          if (respuesta.Estado == "Ok") {
            this.mesasClienteComiendo = respuesta.Mesas;
          }
        })
      }
      else {
        this.alertaMesa(respuesta.Mensaje);
      }
    })
  }

  clientePagando(codigoMesa) {
    this.mesasService.CambiarEstadoClientePagando(codigoMesa).subscribe(respuesta => {
      if (respuesta.Estado == "Ok") {
        this.mesasService.ObtenerMesasConEstado(2).subscribe(respuesta => {
          if (respuesta.Estado == "Ok") {
            this.mesasClienteComiendo = respuesta.Mesas;
          }
          else {
            this.mesasClienteComiendo = new Array<any>();
          }
        })
      }
      else {
        this.alertaMesa(respuesta.Mensaje);
      }
    })
  }

  alertaMesa(mensaje) {
    Swal.fire({
      title: 'Alerta',
      text: mensaje,
      confirmButtonColor: '#3085d6',
    })
  }

  ngOnInit() {
    this.mesasService.ObtenerMesasConEstado(5).subscribe(respuesta => {
      if (respuesta.Estado == "Ok") {
        this.mesasAsignadas = respuesta.Mesas;
      }
    })
    this.mesasService.ObtenerMesasConEstado(1).subscribe(respuesta => {
      if (respuesta.Estado == "Ok") {
        this.mesasClienteEsperandoPedido = respuesta.Mesas;
      }
    })
    this.mesasService.ObtenerMesasConEstado(2).subscribe(respuesta => {
      if (respuesta.Estado == "Ok") {
        this.mesasClienteComiendo = respuesta.Mesas;
      }
    })

  }

}
