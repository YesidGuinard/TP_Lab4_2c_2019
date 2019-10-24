import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Empleado } from '../../clases/empleado';

@Injectable({
  providedIn: 'root'
})
export class MiHttpService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:80/apiComanda/tp_pg3/public/';
  
  public httpPost0( metodo: string, empleado: Empleado): Observable<any> {
    return this.http.post(this.url + metodo, JSON.stringify(empleado), {responseType: 'text'})
    .pipe(respuesta => respuesta)
  }
}
