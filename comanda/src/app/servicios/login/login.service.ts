import { Injectable } from '@angular/core';
import { MiHttpService } from '../http/mi-http.service';
import { Empleado } from '../../clases/empleado';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private miHttpService: MiHttpService) { }

  LoginEmpleado(empleado: Empleado) {
    return this.miHttpService.httpPost0('empleado/login/', empleado);
  }

  RegistrarEmpleado(empleado: Empleado) {
    return this.miHttpService.httpPost0('empleado/alta/', empleado);
  }

  BuscarUsuario(idUsuario){
    return this.miHttpService.httpGet0('usuario/buscar/' + idUsuario);
  }

  ObtenerTiposDeEmpleados() {
    return this.miHttpService.httpGet0('tiposDeEmpleado/');
  }

  ObtenerListaDeUsuarios(){
    return this.miHttpService.httpGet0('usuarios/');
  }

  GuardarFoto(foto){
    return this.miHttpService.httpPostGuardarFoto('/usuario/foto/', foto);
  }

  AsignarTipoUsuario(idUsuario, idTipoUsuario){
    return this.miHttpService.httpGet0('usuario/asignar/tipo/' + idUsuario + '/' + idTipoUsuario);
  }
}

