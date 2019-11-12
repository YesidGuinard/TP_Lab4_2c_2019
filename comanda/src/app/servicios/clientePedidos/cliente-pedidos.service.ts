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
    return this.miHttpService.httpPost1('pedido/cargar/', pedido);
  }

  verTiempoRestante(codigoDeMesa: string, codigoPedido: string) {
    return this.miHttpService.httpGet0('pedido/tiempoRestante/' + codigoDeMesa + '/' + codigoPedido + '/');
  }
}
