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

}
