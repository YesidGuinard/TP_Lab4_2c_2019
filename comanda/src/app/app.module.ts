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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent
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
