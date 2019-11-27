import { Injectable } from '@angular/core';
import { MiHttpService } from '../http/mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private miHttpService: MiHttpService) { }

  VerPedidosPendientes(estadoPedido, idSector){
    return this.miHttpService.httpPost0('pedido/pendientes/', {'estadoPedido':estadoPedido, 'idSector':idSector});
  }

  TomarPedido(codigo, tiempoEstimado){
    return this.miHttpService.httpPost1('pedido/tomar/', {'codigo': codigo, 'tiempoEstimado':tiempoEstimado});
  }

  ServirPedido() {
    return this.miHttpService.httpPost2('pedido/servir/');
  }
}
