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
}
