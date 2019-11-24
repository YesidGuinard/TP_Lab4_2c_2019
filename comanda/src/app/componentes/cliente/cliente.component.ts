import { Component, OnInit } from '@angular/core';
import { ClientePedidosService } from '../../servicios/clientePedidos/cliente-pedidos.service';
import { Pedido } from '../../clases/pedido';
import { Codigo } from '../../clases/codigo';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClientePedidosService]
})
export class ClienteComponent implements OnInit {
 
  nombreCliente: string; 
  idMesaSeleccionada;
  codigoMesaSeleccionada;
  clienteId;
  pedidos: Array<Codigo> = new Array<Codigo>();
  clienteEstado;

  constructor(private clientePedidoService: ClientePedidosService, private rutaActiva: ActivatedRoute, private router: Router) {}

   habilitarGenerarPedido(idMesa) {
     this.idMesaSeleccionada = idMesa;
   }

   recibirCodigoMesaSeleccionada(codigo){
    this.codigoMesaSeleccionada = codigo; 
   }

   recibePedidos(pedidos) { 
    var esta = false; 

    for (let index = 0; index < pedidos.length; index++) {
      for (let i = 0; i < this.pedidos.length; i++) {
        if(pedidos[index].codigo == this.pedidos[i].codigo) {
          esta = true;
          return; 
        }        
      }
      if(!esta) {
        this.pedidos.push(pedidos[index]);
      }
      esta = false; 
    }
   }

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
    this.nombreCliente = localStorage.getItem('usuario');
    this.clienteId = this.rutaActiva.snapshot.params.idCliente;
    this.clientePedidoService.recuperarDatosCliente(this.clienteId).subscribe(respuesta=>{
      if(respuesta.Estado == "Espera")
      {
        this.clienteEstado = respuesta.EstadoCliente;
      }
      if(respuesta.Estado == "Mesa")
      {
        this.idMesaSeleccionada = respuesta.IdMesa;
        this.codigoMesaSeleccionada = respuesta.CodigoMesa;
      }
      if(respuesta.Estado == "Pedidos")
      {
        this.idMesaSeleccionada = respuesta.Datos[0].id_mesa;
        this.codigoMesaSeleccionada = respuesta.Datos[0].codigoMesa;
        respuesta.Datos.forEach(pedido => {
          var codigo = new Codigo(); 
          codigo.producto = pedido.nombre;
          codigo.codigo = pedido.codigoPedido;
          this.pedidos.push(codigo);        
        });
      }
    })
  }
}
