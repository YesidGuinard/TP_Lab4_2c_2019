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
    return this.miHttpService.httpPost0('pedido/tomar/', {'codigo': codigo, 'tiempoEstimado':tiempoEstimado});
  }

  ServirPedido(codigo) {
    return this.miHttpService.httpPost0('pedido/servir/', {'codigo':codigo});
  }
}
