import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { AuthGuard } from './auth.guard';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { GenerarPedidoComponent } from './componentes/generar-pedido/generar-pedido.component';
import { ElegirMesaComponent } from './componentes/elegir-mesa/elegir-mesa.component';
import { CodigosPedidosComponent } from './componentes/codigos-pedidos/codigos-pedidos.component';
import { EstadoPedidosComponent } from './componentes/estado-pedidos/estado-pedidos.component';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { MozoComponent } from './componentes/mozo/mozo.component';
import { AsignarMesaComponent } from './componentes/asignar-mesa/asignar-mesa.component';
import { BuscarClienteComponent } from './componentes/buscar-cliente/buscar-cliente.component';
import { PonerClienteEnEsperaComponent } from './componentes/poner-cliente-en-espera/poner-cliente-en-espera.component';
import { ElegirMesaMozoComponent } from './componentes/elegir-mesa-mozo/elegir-mesa-mozo.component';
import { CambiarEstadoMesasComponent } from './componentes/cambiar-estado-mesas/cambiar-estado-mesas.component';
import { CocineroComponent } from './componentes/cocinero/cocinero.component';
import { BartenderComponent } from './componentes/bartender/bartender.component';
import { CerveceroComponent } from './componentes/cervecero/cervecero.component';
import { PasteleroComponent } from './componentes/pastelero/pastelero.component';
import { PedidosPendientesComponent } from './componentes/pedidos-pendientes/pedidos-pendientes.component';
import { PedidosEnPreparacionComponent } from './componentes/pedidos-en-preparacion/pedidos-en-preparacion.component';
import { TomarPedidoComponent } from './directivas/tomar-pedido/tomar-pedido.component';
import { AsignarTipoUsuarioComponent } from './componentes/asignar-tipo-usuario/asignar-tipo-usuario.component';
import { CerrarMesaComponent } from './componentes/cerrar-mesa/cerrar-mesa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    ClienteComponent,
    GenerarPedidoComponent,
    ElegirMesaComponent,
    CodigosPedidosComponent,
    EstadoPedidosComponent,
    EncuestaComponent,
    MozoComponent,
    AsignarMesaComponent,
    BuscarClienteComponent,
    PonerClienteEnEsperaComponent,
    ElegirMesaMozoComponent,
    CambiarEstadoMesasComponent,
    CocineroComponent,
    BartenderComponent,
    CerveceroComponent,
    PasteleroComponent,
    PedidosPendientesComponent,
    PedidosEnPreparacionComponent,
    TomarPedidoComponent,
    AsignarTipoUsuarioComponent,
    CerrarMesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
