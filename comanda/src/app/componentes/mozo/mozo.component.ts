import { Component, OnInit } from '@angular/core';
import { MesasService } from '../../servicios/mesas/mesas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mozo',
  templateUrl: './mozo.component.html',
  styleUrls: ['./mozo.component.css']
})
export class MozoComponent implements OnInit {

  clientesEnEspera = new Array<any>();
  idMozo;
  nombreMozo;
  foto;
  clienteId;
  idMesaSeleccionada;
  clienteEstado;
  codigoMesaSeleccionada;
  pedidos = new Array<any>();
  listadoMesasAsignadas = new Array<any>();
  tituloBuscarCliente = "Buscar cliente";
  tipoUsuarioABuscar = "cliente";


  constructor(private mesasService: MesasService, private rutaActiva: ActivatedRoute, private loginService: LoginService,
              private router:Router ) { }

  recibeIdCliente(idCliente) {
    this.clienteId = idCliente;
  }

  recibeClientesEnEspera(clientes) {
    this.clientesEnEspera = clientes;
  }

  recibeMesasAsignadas(event) {
    if (event) {
      this.mesasService.ObtenerMesasConEstado(5).subscribe(respuesta => {
        if (respuesta.Estado == "Ok") {
          this.listadoMesasAsignadas = respuesta.Mesas;
        }
      })
    }
  }

  recibePedidos(pedidos) {}

  habilitarGenerarPedido(param) {
    this.idMesaSeleccionada = param;
  }

  cerrarSesion(){
    Swal.fire({
      title: 'Cerrar sesion',
      text: "¿Seguro queres cerrar sesión?",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        this.router.navigate(['']);
      }
    })
  }

  ngOnInit() {
    this.idMozo = this.rutaActiva.snapshot.params.idMozo;
    this.loginService.BuscarUsuario(this.idMozo).subscribe(respuesta => {
      if (respuesta.Estado == "Ok") {
        this.nombreMozo = respuesta.Usuario.usuario;
        this.foto = respuesta.Usuario.foto;
      }
    })
    this.mesasService.ObtenerClientesEnEspera().subscribe(respuesta => {
      if (respuesta.Estado == "Clientes")
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
