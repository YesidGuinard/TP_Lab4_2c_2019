import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientePedidosService } from 'src/app/servicios/clientePedidos/cliente-pedidos.service';
import  Swal  from 'sweetalert2';
import { MesasService } from 'src/app/servicios/mesas/mesas.service';

@Component({
  selector: 'app-elegir-mesa-mozo',
  templateUrl: './elegir-mesa-mozo.component.html',
  styleUrls: ['./elegir-mesa-mozo.component.css']
})
export class ElegirMesaMozoComponent implements OnInit {
  
  @Input() numeroCliente;
  @Output() enviarIdMesaAsignada = new EventEmitter<any>(); 
  iniciarPedido:boolean = false; 
  idMesaAsignada;
  codigoMesaAsignada;
  estadoCliente; 
  mesasDisponibles; 

  constructor(private clienteService: ClientePedidosService, private mesasService: MesasService) { }

  recuperarDatosCliente(){
    this.clienteService.MozoRecuperaDatosCliente(this.numeroCliente).subscribe(respuesta => {
      if(respuesta.Estado == "Espera" || respuesta.Estado == "Ocupadas")
      {
        Swal.fire({
          title: 'Alerta',
          text: respuesta.Mensaje,
          confirmButtonColor: '#3085d6',
        })
      }
      else if(respuesta.Estado == "Mesa")
      {
        this.idMesaAsignada = respuesta.Datos.idMesa;
        this.codigoMesaAsignada = respuesta.Datos.codigo;
        this.estadoCliente = 'M';
        this.enviarIdMesaAsignada.emit(this.idMesaAsignada);
      }
      else if(respuesta.Estado == "Seleccion")
      {
        this.mesasDisponibles = respuesta.Mesas;
        this.estadoCliente = 'S';
      }
    })
  }

  seleccionarMesa(idMesa, codigoMesa) {
    this.enviarIdMesaAsignada.emit(idMesa);
    this.idMesaAsignada = idMesa;
    this.codigoMesaAsignada = codigoMesa;
    this.estadoCliente = 'M'; 
    this.mesasService.CambiarEstadoMesaAsignada(codigoMesa, this.numeroCliente).subscribe();
  }

  ngOnInit() {
  }

}
