import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Empleado } from '../../clases/empleado';
import { Encuesta } from '../../clases/encuesta';
import { Pedido } from '../../clases/pedido';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiHttpService {

  constructor(private http: HttpClient) { }

  private url = environment.apiUrl;
  
  public httpPost0( metodo: string, objeto: any): Observable<any> {
    return this.http.post(this.url + metodo, JSON.stringify(objeto), {responseType: 'json'})
    .pipe(respuesta => respuesta)
  }

  public httpPostGuardarFoto( metodo: string, objeto: any): Observable<any> {
    return this.http.post(this.url + metodo, objeto)
    .pipe(respuesta => respuesta)
  } 

  public httpGet0( metodo: string): Observable<any> {
    return this.http.get(this.url + metodo)
    .pipe(respuesta => respuesta)
  }
}
