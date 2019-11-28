import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn:
   'root'
})
export class PasteleroGuard implements CanActivate {
  jwtDecoder = new JwtHelperService();

  constructor(private router: Router) {}

  canActivate(): boolean {
    var token = localStorage.getItem('token');
    var decodeToken = this.jwtDecoder.decodeToken(token);

    if(this.jwtDecoder.isTokenExpired(token)) {
      this.router.navigate(['']);
      return false;
    }    

    if(decodeToken.data.tipoEmpleado == "pastelero") { 
      return true;
    }
    else {
        this.router.navigate(['']);
        return false; 
    }
  }  
}
