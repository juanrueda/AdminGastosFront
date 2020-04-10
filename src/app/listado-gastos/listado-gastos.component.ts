import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Gasto } from '../models/gasto';

@Component({
  selector: 'app-listado-gastos',
  templateUrl: './listado-gastos.component.html',
  styleUrls: ['./listado-gastos.component.css']
})
export class ListadoGastosComponent implements OnInit {

  gastos: Gasto[];

  constructor(private gastoService: GastoService) { }

  ngOnInit(): void {
    this.getGastos();
  }

  getGastos() : void {
    this.gastoService.getGastos()
      .subscribe(gastos => this.gastos = gastos);
  }

}
