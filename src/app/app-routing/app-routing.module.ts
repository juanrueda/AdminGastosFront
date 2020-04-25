import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoGastosComponent } from '../listado-gastos/listado-gastos.component';
import { NuevoGastoComponent } from '../nuevo-gasto/nuevo-gasto.component';

import { AuthGuardService } from '../guards/auth-guard.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { EditarGastoComponent } from '../editar-gasto/editar-gasto.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'gastos', component: ListadoGastosComponent, canActivate: [AuthGuardService] },
  { path: 'nuevoGasto', component: NuevoGastoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'editarGasto/:id', component: EditarGastoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
