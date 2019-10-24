import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../clases/empleado';
import { LoginService } from '../../servicios/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  empleado: Empleado;
  respuesta: any;

  constructor(private loginService: LoginService) {
    this.empleado = new Empleado(); 
    this.empleado.usuario = "";
    this.empleado.clave = "";
  }

  ingresar(){
    console.log(this.respuesta);
    if(this.empleado.usuario != "" && this.empleado.clave != "")
    {
      this.loginService.LoginEmpleado(this.empleado).subscribe(respuesta => {debugger
        this.respuesta = JSON.parse(respuesta);
        localStorage.setItem('token', this.respuesta.Token);
      });
    }
  }

  ngOnInit() {
  }

}
