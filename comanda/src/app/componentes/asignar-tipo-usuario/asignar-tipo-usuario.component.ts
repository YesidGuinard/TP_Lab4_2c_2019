import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignar-tipo-usuario',
  templateUrl: './asignar-tipo-usuario.component.html',
  styleUrls: ['./asignar-tipo-usuario.component.css']
})
export class AsignarTipoUsuarioComponent implements OnInit {

  tituloBuscarUsuario = 'Asignar tipo de usuario';
  tipoUsuarioABuscar = 'usuario';
  idUsuario;
  listaTipoUsuarios; 
  idTipoSeleccionado;
  mostrarTipos = false; 

  constructor(private loginService: LoginService) { }

  recibeIdUsuario(idUsuario){
    this.idUsuario = idUsuario;
    this.mostrarTipos = true; 
  }

  asignar(){
    this.loginService.AsignarTipoUsuario(this.idUsuario, this.idTipoSeleccionado).subscribe(respuesta => {
      Swal.fire({
        title: 'Usuario',
        text: respuesta.Mensaje,
        confirmButtonColor: '#3085d6',
      })
    })
    this.mostrarTipos = false; 
  }

  ngOnInit() {
    this.loginService.ObtenerTiposDeEmpleados().subscribe(respuesta => {
      this.listaTipoUsuarios = respuesta; 
    })
  }

}
