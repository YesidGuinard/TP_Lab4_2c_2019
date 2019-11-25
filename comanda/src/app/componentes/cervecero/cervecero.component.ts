import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cervecero',
  templateUrl: './cervecero.component.html',
  styleUrls: ['./cervecero.component.css']
})
export class CerveceroComponent implements OnInit {

  idCervecero;
  nombreCervecero;
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
    this.idCervecero = this.rutaActiva.snapshot.params.idCervecero;
    this.loginService.BuscarUsuario(this.idCervecero).subscribe(respuesta => {
      if (respuesta.Estado == "Ok") {
        this.nombreCervecero = respuesta.Usuario.usuario;
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
