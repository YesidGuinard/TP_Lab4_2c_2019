import { Injectable } from '@angular/core';
import { MiHttpService } from '../http/mi-http.service';
import { Pedido } from '../../clases/pedido';

@Injectable({
  providedIn: 'root'
})
export class ClientePedidosService {

  constructor(private miHttpService: MiHttpService) { }

  getProductosCocina(){
    return this.miHttpService.httpGet0('pedido/cocina/');
  }

  getVinos(){
    return this.miHttpService.httpGet0('pedido/vino/');
  }

  getCervezas(){
    return this.miHttpService.httpGet0('pedido/cerveza/');
  }

  getPostres(){
    return this.miHttpService.httpGet0('pedido/postre/');
  }

  generarPedido(pedido: Pedido) {
    return this.miHttpService.httpPost0('pedido/cargar/', pedido);
  }

  verTiempoRestante(codigoDeMesa: string, codigoPedido: string) {
    return this.miHttpService.httpGet0('pedido/tiempoRestante/' + codigoDeMesa + '/' + codigoPedido + '/');
  }

  recuperarDatosCliente(idCliente){
    return this.miHttpService.httpGet0('cliente/estado/' + idCliente);
  }

  BuscarCliente(usuario, tipoUsuario){
    return this.miHttpService.httpPost0('cliente/buscar/', {'usuario':usuario, 'tipoUsuario': tipoUsuario});
  }

  MozoRecuperaDatosCliente(idCliente){
    return this.miHttpService.httpGet0('cliente/estado/mozo/' + idCliente);
  }
}
