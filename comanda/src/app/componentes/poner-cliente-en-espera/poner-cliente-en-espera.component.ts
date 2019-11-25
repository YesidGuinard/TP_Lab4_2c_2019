import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MesasService } from 'src/app/servicios/mesas/mesas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-poner-cliente-en-espera',
  templateUrl: './poner-cliente-en-espera.component.html',
  styleUrls: ['./poner-cliente-en-espera.component.css']
})
export class PonerClienteEnEsperaComponent implements OnInit {

  @Output() enviarClientesEnEspera = new EventEmitter<any>();
  @Input() idCliente;

  constructor(private mesaService: MesasService) { }

  agregarAListaDeEspera() {
    this.mesaService.AgregarAListaDeEspera(this.idCliente).subscribe(respuesta => {
      if (respuesta.Estado == "Ok") {
        Swal.fire({
          title: 'Cliente en Espera',
          text: "El cliente ha sido agregado a la lista de espera",
          confirmButtonColor: '#3085d6',
        })
        this.mesaService.ObtenerClientesEnEspera().subscribe(respuesta => {
          if (respuesta.Estado == "Clientes")
            this.enviarClientesEnEspera.emit(respuesta.Clientes);
        })
      }
    })
  }

ngOnInit() {
}

}
