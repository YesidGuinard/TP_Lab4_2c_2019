import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { MozoComponent } from './componentes/mozo/mozo.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent, canActivate:[AuthGuard] },
  { path: 'cliente/:idCliente', component: ClienteComponent, canActivate:[AuthGuard] },
  { path: 'mozo/:idMozo', component: MozoComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
