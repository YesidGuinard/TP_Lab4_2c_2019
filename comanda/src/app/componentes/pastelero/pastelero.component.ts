import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pastelero',
  templateUrl: './pastelero.component.html',
  styleUrls: ['./pastelero.component.css']
})
export class PasteleroComponent implements OnInit {

  idPastelero;
  nombrePastelero;
  foto;

  constructor( private loginService: LoginService,  private rutaActiva: ActivatedRoute,  private router: Router) { }

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
    this.idPastelero = this.rutaActiva.snapshot.params.idPastelero;
    this.loginService.BuscarUsuario(this.idPastelero).subscribe(respuesta => {
      if (respuesta.Estado == "Ok") {
        this.nombrePastelero = respuesta.Usuario.usuario;
        this.foto = respuesta.Usuario.foto;
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
