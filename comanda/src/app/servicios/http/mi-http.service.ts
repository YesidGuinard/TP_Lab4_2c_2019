import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Empleado } from '../../clases/empleado';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiHttpService {

  constructor(private http: HttpClient) { }

  private url = environment.apiUrl;
  
  public httpPost0( metodo: string, empleado: Empleado): Observable<any> {
    return this.http.post(this.url + metodo, JSON.stringify(empleado), {responseType: 'json'})
    .pipe(respuesta => respuesta)
  }

  public httpGet0( metodo: string): Observable<any> {
    return this.http.get(this.url + metodo)
    .pipe(respuesta => respuesta)
  }
}
