import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ClientePedidosService } from '../../servicios/clientePedidos/cliente-pedidos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css'],
  providers: [ClientePedidosService]
})
export class BuscarClienteComponent implements OnInit {

  @Output() enviarIdCliente = new EventEmitter<any>();
  @Input() titulo;
  @Input() tipoUsuario;
  nombreCliente: string; 
  idCliente; 

  constructor(private clienteService: ClientePedidosService) { }

  buscarCliente(){
    this.nombreCliente.trim().toLowerCase();
    this.clienteService.BuscarCliente(this.nombreCliente, this.tipoUsuario).subscribe(respuesta => {
      if(respuesta.Estado == 'Ok'){
        this.idCliente = respuesta.Cliente.id;
        this.enviarIdCliente.emit(this.idCliente);
      }        
      else{
        Swal.fire({
          title: 'Alerta',
          text: "Usuario no encontrado",
          confirmButtonColor: '#3085d6',
        })
      }
    })
  }

  ngOnInit() {
  }

}
