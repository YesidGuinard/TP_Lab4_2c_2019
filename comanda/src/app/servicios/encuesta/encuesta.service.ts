import { Injectable } from '@angular/core';
import { MiHttpService } from '../http/mi-http.service';
import { Encuesta } from '../../clases/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private miHttpService: MiHttpService) { }

  registrarEncuesta(encuesta: Encuesta) {
    return this.miHttpService.httpPost0('encuesta/', encuesta);
  }
}
