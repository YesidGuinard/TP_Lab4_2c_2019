import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../clases/empleado';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  empleado: Empleado;
  respuesta: any;

  constructor(private loginService: LoginService, private router: Router) {
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
        if(this.respuesta.Estado == "Ok") {
          localStorage.setItem('token', this.respuesta.Token);
          this.router.navigate(['/principal']); 
        }
        else
          this.alertaUsuarioInvalido();
      });
    }
  }

  alertaUsuarioInvalido() {
    Swal.fire({ 
      title: 'Usuario no registrado',
      text: "El nombre de usuario y/o clave no son correctos",
      type: 'error',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    })
  }

  ngOnInit() {
  }

}
