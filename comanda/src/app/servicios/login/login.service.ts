import { Injectable } from '@angular/core';
import { MiHttpService } from '../http/mi-http.service';
import { Empleado } from '../../clases/empleado';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private miHttpService: MiHttpService) { }

  jwtDecoder = new JwtHelperService();

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

  GuardarFoto(foto){
    return this.miHttpService.httpPostGuardarFoto('/usuario/foto/', foto);
  }

  AsignarTipoUsuario(idUsuario, idTipoUsuario){
    return this.miHttpService.httpPost0('usuario/asignarTipo/', {'idUsuario':idUsuario, 'idTipoUsuario':idTipoUsuario});
  }

  loggedIn(){
    var token = localStorage.getItem('token');
    if(this.jwtDecoder.isTokenExpired(token))
      return false

    return true;  
  }

}

