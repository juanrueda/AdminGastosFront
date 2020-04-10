import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ListadoGastosComponent } from '../listado-gastos/listado-gastos.component';
import { NuevoGastoComponent } from '../nuevo-gasto/nuevo-gasto.component';

const routes: Routes = [
  { path: '' , redirectTo: '/gastos', pathMatch: 'full' },
  { path: 'gastos', component: ListadoGastosComponent },
  { path: 'nuevoGasto', component: NuevoGastoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
