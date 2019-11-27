import { Injectable } from '@angular/core';
import { MiHttpService } from '../http/mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  constructor(private miHttpService: MiHttpService) { }

  ObtenerMesasDisponibles(){
    return this.miHttpService.httpGet0('mesa/disponibles/');
  }

  AgregarAListaDeEspera(idCliente){
    return this.miHttpService.httpPost0('mesa/listaEspera/', {'idCliente': idCliente});
  }

  ActualizarClienteEspera(idCliente){
    return this.miHttpService.httpGet0('mesa/actualizar/' + idCliente);
  }

  CambiarEstadoMesaAsignada(codigoMesa, idCliente){
    return this.miHttpService.httpPost0('mesa/asignada/', { 'codigo':codigoMesa, 'idCliente': idCliente });
  }

  CambiarEstadoClienteEsperandoPedido(codigoMesa){
    return this.miHttpService.httpPost0('mesa/estado/esperando/', { 'codigo': codigoMesa });
  }

  CambiarEstadoClienteComiendo(codigoMesa){
    return this.miHttpService.httpPost0('mesa/estado/comiendo/', { 'codigo': codigoMesa });
  }

  CambiarEstadoClientePagando(codigoMesa){
    return this.miHttpService.httpPost0('mesa/estado/pagando/', { 'codigo' : codigoMesa});
  }

  CambiarEstadoCerrarMesa(codigoMesa){
    return this.miHttpService.httpPost1('/mesa/estado/cerrada/', {'codigo': codigoMesa});
  }

  ObtenerClientesEnEspera(){
    return this.miHttpService.httpGet0('clientes/espera/');
  }

  ObtenerMesasDisponiblesMozo(){
    return this.miHttpService.httpGet0('mesa/disponibles/mozo/');
  }

  ObtenerMesasConEstado(idEstado){
    return this.miHttpService.httpGet0('mesa/estado/' + idEstado);
  }
}
