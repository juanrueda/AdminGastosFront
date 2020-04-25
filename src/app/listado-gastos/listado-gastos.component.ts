import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Gasto } from '../models/gasto';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-gastos',
  templateUrl: './listado-gastos.component.html',
  styleUrls: ['./listado-gastos.component.css']
})
export class ListadoGastosComponent implements OnInit {

  gasto: Gasto;
  gastos: Gasto[];
  gastoSeleccionado: Gasto;

  constructor(
    private gastoService: GastoService, 
    private authService: AuthService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getGastos();
  }

  getGastos() : void {
    this.gastoService.getGastos()
      .subscribe(response => this.gastos = response.data);
  }

  editarGasto(event: any, gasto: Gasto){
    gasto.pagado = event;
    this.gastoService.editarGasto(gasto)
    .subscribe(res => {
      console.log(res.message)
    });
  }

  eliminarGasto(gastoSeleccionado: Gasto){
    this.gastos = this.gastos.filter(g => g != gastoSeleccionado)
    this.gastoService.eliminarGasto(gastoSeleccionado.id)
      .subscribe(res => {
        console.log(res.message);
      });
  }

  seleccionarGasto(gasto: Gasto){
    this.gastoSeleccionado = gasto;
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(["/login"]);
  }

}
