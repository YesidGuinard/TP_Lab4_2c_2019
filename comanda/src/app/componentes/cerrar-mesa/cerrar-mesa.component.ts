import { Component, OnInit } from '@angular/core';
import { MesasService } from 'src/app/servicios/mesas/mesas.service';

@Component({
  selector: 'app-cerrar-mesa',
  templateUrl: './cerrar-mesa.component.html',
  styleUrls: ['./cerrar-mesa.component.css']
})
export class CerrarMesaComponent implements OnInit {

  mesasParaCerrar;

  constructor(private mesasService: MesasService) { }

  cerrarMesa(codigo){
    this.mesasService.CambiarEstadoCerrarMesa(codigo).subscribe(respuesta =>{
      if(respuesta.Estado = "Ok"){
        this.actualizarMesasParaCerrar();
      }
    })
  }

  actualizarMesasParaCerrar(){
    this.mesasService.ObtenerMesasConEstado(3).subscribe(respuesta => {
      if (respuesta.Estado == "Ok") {
        this.mesasParaCerrar = respuesta.Mesas;
      }
      else {
        this.mesasParaCerrar = new Array<any>();
      }
    })
  }

  ngOnInit() {
    this.actualizarMesasParaCerrar();
  }

}
