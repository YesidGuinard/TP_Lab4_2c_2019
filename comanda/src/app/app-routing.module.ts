import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { MozoComponent } from './componentes/mozo/mozo.component';
import { CocineroComponent } from './componentes/cocinero/cocinero.component';
import { BartenderComponent } from './componentes/bartender/bartender.component';
import { CerveceroComponent } from './componentes/cervecero/cervecero.component';
import { PasteleroComponent } from './componentes/pastelero/pastelero.component';
import { AuthGuard } from './guards/socio/auth.guard';
import { MozoGuard } from './guards/mozo/mozo.guard';
import { CocineroGuard } from './guards/cocinero/cocinero.guard';
import { BartenderGuard } from './guards/bartender/bartender.guard';
import { CerveceroGuard } from './guards/cervecero/cervecero.guard';
import { PasteleroGuard } from './guards/pastelero/pastelero.guard';
import { ClienteGuard } from './guards/cliente/cliente.guard';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'principal/:idAdmin', component: PrincipalComponent, canActivate:[AuthGuard] },
  { path: 'cliente/:idCliente', component: ClienteComponent, canActivate:[ClienteGuard] },
  { path: 'mozo/:idMozo', component: MozoComponent, canActivate:[MozoGuard] },
  { path: 'cocinero/:idCocinero', component: CocineroComponent, canActivate:[CocineroGuard] },
  { path: 'bartender/:idBartender', component: BartenderComponent, canActivate:[BartenderGuard] },
  { path: 'cervecero/:idCervecero', component: CerveceroComponent, canActivate:[CerveceroGuard] },
  { path: 'pastelero/:idPastelero', component: PasteleroComponent, canActivate:[PasteleroGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
