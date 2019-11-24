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
    return this.miHttpService.httpPost0('mesa/asignada/', {
                                                            'codigo':codigoMesa,
                                                            'idCliente': idCliente
                                                          });
  }
}
