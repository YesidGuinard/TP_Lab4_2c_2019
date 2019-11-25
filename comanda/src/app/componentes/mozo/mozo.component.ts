import { Component, OnInit } from '@angular/core';
import { MesasService } from '../../servicios/mesas/mesas.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-mozo',
  templateUrl: './mozo.component.html',
  styleUrls: ['./mozo.component.css']
})
export class MozoComponent implements OnInit {

  clientesEnEspera = new Array<any>(); 
  idMozo;
  nombreMozo;
  clienteId;
  idMesaSeleccionada;
  clienteEstado;
  codigoMesaSeleccionada;
  pedidos = new Array<any>();
  listadoMesasAsignadas = new Array<any>();


  constructor(private mesasService: MesasService, private rutaActiva: ActivatedRoute) { }

  recibeIdCliente(idCliente){
    this.clienteId = idCliente; 
  }

  recibeClientesEnEspera(clientes){
    this.clientesEnEspera = clientes; 
  }

  recibeMesasAsignadas(event){
    if(event) {
      this.mesasService.ObtenerMesasConEstado(5).subscribe(respuesta => {
        if (respuesta.Estado == "Ok") {
          this.listadoMesasAsignadas = respuesta.Mesas;
        }
      })
    }    
  }

  recibePedidos(pedidos){

  }

  habilitarGenerarPedido(param){
    this.idMesaSeleccionada = param; 
  }

  ngOnInit() {debugger
    this.nombreMozo = localStorage.getItem('usuario');
    this.idMozo = this.rutaActiva.snapshot.params.idMozo;
    this.mesasService.ObtenerClientesEnEspera().subscribe(respuesta => {
      if(respuesta.Estado == "Clientes")
        this.clientesEnEspera = respuesta.Clientes; 
    })
    this.mesasService.ObtenerMesasConEstado(5).subscribe(respuesta => {
      if (respuesta.Estado == "Ok") {
        this.listadoMesasAsignadas = respuesta.Mesas;
      }
    })
  }

  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

}
