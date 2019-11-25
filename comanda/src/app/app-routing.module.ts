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
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'principal/:idAdmin', component: PrincipalComponent, canActivate:[AuthGuard] },
  { path: 'cliente/:idCliente', component: ClienteComponent, canActivate:[AuthGuard] },
  { path: 'mozo/:idMozo', component: MozoComponent, canActivate:[AuthGuard] },
  { path: 'cocinero/:idCocinero', component: CocineroComponent, canActivate:[AuthGuard] },
  { path: 'bartender/:idBartender', component: BartenderComponent, canActivate:[AuthGuard] },
  { path: 'cervecero/:idCervecero', component: CerveceroComponent, canActivate:[AuthGuard] },
  { path: 'pastelero/:idPastelero', component: PasteleroComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
