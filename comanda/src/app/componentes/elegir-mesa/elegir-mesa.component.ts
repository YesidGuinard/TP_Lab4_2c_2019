import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MesasService } from '../../servicios/mesas/mesas.service';
import { Mesa } from '../../clases/mesa';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-elegir-mesa',
  templateUrl: './elegir-mesa.component.html',
  styleUrls: ['./elegir-mesa.component.css'],
  providers: [MesasService]
})

export class ElegirMesaComponent implements OnInit {
  
  @Input() idCliente; 
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

  agregarEnListaDeEspera(){
    this.mesasService.AgregarAListaDeEspera(this.idCliente).subscribe(respuesta => {
      this.alertaClienteEspera(respuesta.Mensaje);
      this.estadoCliente = "A";
    });
  }

  actualizar(){
    this.mesasService.ActualizarClienteEspera(this.idCliente).subscribe(respuesta => {
      if(respuesta.Estado == 'Ok'){
        this.alertaClienteEspera("Ya podes realizar tu pedido");
        this.idMesaElegida = respuesta.idMesa;
        this.codigoMesaElegida = respuesta.Codigo;
        this.estadoCliente = null; 
        this.mesaSeleccionada.emit(this.idMesaElegida);
      }
      else if(respuesta.Estado == "Alerta") {
        this.alertaClienteEspera(respuesta.Mensaje);
      }
    })
  }

  alertaClienteEspera(mensaje) {
    Swal.fire({ 
      title: "Cliente en espera",
      text: mensaje,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    })
  }

  ngOnInit() {    
  }
}
