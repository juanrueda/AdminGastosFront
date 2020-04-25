import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { ListadoGastosComponent } from './listado-gastos/listado-gastos.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NuevoGastoComponent } from './nuevo-gasto/nuevo-gasto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { NavbarComponent } from './navbar/navbar.component';
import { EditarGastoComponent } from './editar-gasto/editar-gasto.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    ListadoGastosComponent,
    NuevoGastoComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    EditarGastoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
