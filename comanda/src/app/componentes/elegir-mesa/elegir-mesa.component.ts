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
  mesas: Array<Mesa>;
  clientesEnEspera: number; 
  estadoCliente: string = null;
  constructor(private mesasService: MesasService) { }  

  habilitarSeleccionDeMesa(){debugger;
    this.mesasService.ObtenerMesasDisponibles().subscribe(respuesta => {
      switch(respuesta.Estado)
      {
        case "Espera":
          this.estadoCliente = "E";
          this.clientesEnEspera = respuesta.Clientes.length;
        break;         
        case "Seleccion":
          this.estadoCliente = "S";
          this.mesas = respuesta.Mesas;
        break;         
        case "Proximo":
          this.estadoCliente = "P";
        break;      
      }
    });
  }

  seleccionarMesa(idMesa, codigoMesa) {
    this.mesaSeleccionada.emit(idMesa);
    this.idMesaElegida = idMesa;
    this.codigoMesaElegida = codigoMesa;
    this.estadoCliente = null; 
  }

  ngOnInit() {    
  }
}
