import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListadoGastosComponent } from './listado-gastos/listado-gastos.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NuevoGastoComponent } from './nuevo-gasto/nuevo-gasto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoGastosComponent,
    NuevoGastoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
