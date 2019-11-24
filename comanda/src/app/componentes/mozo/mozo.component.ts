import { Component, OnInit } from '@angular/core';
import { MesasService } from '../../servicios/mesas/mesas.service';
 
@Component({
  selector: 'app-mozo',
  templateUrl: './mozo.component.html',
  styleUrls: ['./mozo.component.css']
})
export class MozoComponent implements OnInit {

  clientesEnEspera = new Array<any>(); 

  constructor(private mesasService: MesasService) { }

  ngOnInit() {debugger
    this.mesasService.ObtenerClientesEnEspera().subscribe(respuesta => {
      if(respuesta.Estado == "Clientes")
        this.clientesEnEspera = respuesta.Clientes; 
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
