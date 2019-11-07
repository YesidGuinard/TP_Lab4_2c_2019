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
  nuevoUsuario: Empleado; 
  respuesta: any;
  listaTiposDeEmpleado: Array<any>;
  habilitarBotonRegistro: boolean = false; 

  constructor(private loginService: LoginService, private router: Router) {
    this.empleado = new Empleado(); 
    this.empleado.usuario = "";
    this.empleado.clave = "";
    this.nuevoUsuario = new Empleado();
    this.nuevoUsuario.usuario = "";
    this.nuevoUsuario.clave = "";
  }

  cargarUsuario(usuario){
    switch(usuario){
      case 'socio':
        this.empleado.usuario = "socio";
        this.empleado.clave = "socio";
      break;
      case 'mozo':
        this.empleado.usuario = "mozo";
        this.empleado.clave = "mozo";
      break;
      case 'cocinero':
          this.empleado.usuario = "cocinero";
          this.empleado.clave = "cocinero";
      break;
      case 'bartender':
          this.empleado.usuario = "bartender";
          this.empleado.clave = "bartender";
      break;
      case 'cervecero':
          this.empleado.usuario = "cervecero";
          this.empleado.clave = "cervecero";
      break;
      case 'pastelero':
          this.empleado.usuario = "pastelero";
          this.empleado.clave = "pastelero";
      break;
      case 'cliente':
        this.empleado.usuario = "cliente";
        this.empleado.clave = "cliente";
    break;
    }
  }

  ingresar(){
    
    if(this.empleado.usuario != "" && this.empleado.clave != "")
    {
      this.loginService.LoginEmpleado(this.empleado).subscribe(respuesta => {
        this.respuesta = respuesta;
        console.log(respuesta);
        if(this.respuesta.Estado == "Ok") {
          localStorage.setItem('token', this.respuesta.Token);
          
          if(respuesta.TipoEmpleado == "socio")
            this.router.navigate(['/principal']);
          else if (respuesta.TipoEmpleado == "mozo")     
            this.router.navigate(['/mozo']);
          else if (respuesta.TipoEmpleado == "cocinero")
            this.router.navigate(['/cocinero']);
          else if (respuesta.TipoEmpleado == "bartender")
            this.router.navigate(['/bartender']);
          else if (respuesta.TipoEmpleado == "cervecero")
            this.router.navigate(['/cervecero'])
          else if (respuesta.TipoEmpleado == "pastelero")
            this.router.navigate(['/pastelero'])
          else if (respuesta.TipoEmpleado == "cliente")
            this.router.navigate(['/cliente'])    
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

  alertaUsuarioRegistrado() {
    Swal.fire({ 
      title: 'Registro de usuario',
      text: "Usuario registrado correctamente",
      type: 'success',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    })
  }

  registrarse() {
    console.log(this.respuesta);
    if(this.nuevoUsuario.usuario != "" && this.nuevoUsuario.clave != "")
    {
      this.loginService.RegistrarEmpleado(this.nuevoUsuario).subscribe(respuesta => {
        this.respuesta = JSON.parse(respuesta);
        if(this.respuesta.Estado == "Ok") {
          this.alertaUsuarioRegistrado();
        }
        else
          this.alertaUsuarioInvalido();
      });
    }
  }x

  resolved(captchaResponse: string) {
    // console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(captchaResponse)
      this.habilitarBotonRegistro = true; 
  }

  mostrarVentana() {
    console.log(this.listaTiposDeEmpleado);
    var ventana = document.getElementById('miVentana');
    ventana.style.marginTop = '100px';
    ventana.style.left = ((document.body.clientWidth-350) / 2) +  'px';
    ventana.style.display = 'block';
  }

  ocultarVentana() {
    var ventana = document.getElementById('miVentana');
    ventana.style.display = 'none';
  }

  ngOnInit() {
    this.loginService.ObtenerTiposDeEmpleados().subscribe(respuesta => 
      this.listaTiposDeEmpleado = respuesta );
  }
}
