import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MesasService } from '../../servicios/mesas/mesas.service';
import { Mesa } from '../../clases/mesa';

@Component({
  selector: 'app-elegir-mesa',
  templateUrl: './elegir-mesa.component.html',
  styleUrls: ['./elegir-mesa.component.css'],
  providers: [MesasService]
})

export class ElegirMesaComponent implements OnInit {
  
@Output() mesaSeleccionada: EventEmitter<any> = new EventEmitter<any>();
idMesaElegida: number = 0; 
codigoMesaElegida: string;
seleccionDeMesa: boolean = false; 

  constructor(private mesasService: MesasService) { }

  mesas: Array<Mesa>;

  habilitarSeleccionDeMesa(){
    this.seleccionDeMesa = true;
  }

  seleccionarMesa(idMesa, codigoMesa) {
    this.mesaSeleccionada.emit(idMesa);
    this.idMesaElegida = idMesa;
    this.codigoMesaElegida = codigoMesa;
    this.seleccionDeMesa = false; 
  }

  ngOnInit() {
    this.mesasService.ObtenerMesasDisponibles().subscribe(respuesta => {
       this.mesas = respuesta; 
       console.log(this.mesas); 
      });
  }

}
