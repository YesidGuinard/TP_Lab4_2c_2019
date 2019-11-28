import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiHttpService {

  constructor(private http: HttpClient) { }

  private url = environment.apiUrl;

  public httpPost( metodo: string, objeto: any): Observable<any> {
    return this.http.post(this.url + metodo, objeto, {responseType: 'json'})
    .pipe(respuesta => respuesta)
  }
  
  public httpPost0( metodo: string, objeto: any): Observable<any> {
    return this.http.post(this.url + metodo, JSON.stringify(objeto), {responseType: 'json'})
    .pipe(respuesta => respuesta)
  }

  public httpPost1( metodo: string, objeto: any): Observable<any> {
    var token = localStorage.getItem('token');
    return this.http.post(this.url + metodo, objeto, { headers: new HttpHeaders({'Content-Type':  'application/json', 'Authorization': token }) })
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

  public httpGet1( metodo: string): Observable<any> {
    var token = localStorage.getItem('token');
    return this.http.get(this.url + metodo, { headers: new HttpHeaders({'Content-Type':  'application/json', 'Authorization': token }) })
    .pipe(respuesta => respuesta)
  }
}
