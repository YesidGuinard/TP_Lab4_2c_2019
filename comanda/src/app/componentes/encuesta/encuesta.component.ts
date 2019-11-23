import { Component, OnInit, Input } from '@angular/core';
import { Encuesta } from '../../clases/encuesta';
import { EncuestaService } from '../../servicios/encuesta/encuesta.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
  providers: [EncuestaService]
})
export class EncuestaComponent implements OnInit {

  @Input() codigoMesa;
  encuesta: Encuesta; 
  mensaje: string; 
  mostrarFormulario: boolean = false; 

  constructor(private encuestaService: EncuestaService) {
    this.encuesta = new Encuesta;
   }

   realizarEncuesta(){
     this.mostrarFormulario = true;
   }

   enviarEncuesta(){
     this.encuesta.codigoMesa = this.codigoMesa;
     return this.encuestaService.registrarEncuesta(this.encuesta).subscribe(respuesta => {
      this.mensaje = respuesta.mensaje;
      this.mensajeEncuesta();
      this.mostrarFormulario = false;
     });
   }

   cancelarEncuesta(){

   }

   mensajeEncuesta() {
    Swal.fire({ 
      title: 'Encuesta',
      text: this.mensaje,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok'
    })
  }

  ngOnInit() {
  }

}
