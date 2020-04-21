import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Gasto } from '../models/gasto';

@Component({
  selector: 'app-nuevo-gasto',
  templateUrl: './nuevo-gasto.component.html',
  styleUrls: ['./nuevo-gasto.component.css']
})
export class NuevoGastoComponent implements OnInit {

  constructor(private gastoService: GastoService, private router: Router, private jwtHelper: JwtHelperService) { }

  gasto: Gasto;
  
  ngOnInit(): void {
  }

  agregarGasto(form: NgForm){
    let token = localStorage.getItem("jwt");
    let userId = this.jwtHelper.decodeToken(token).nameid;

    this.gasto = new Gasto();

    this.gasto.nombre = form.controls['nombre'].value;
    this.gasto.importe = form.controls['importe'].value;
    this.gasto.fechaVencimiento = form.controls['fechaVencimiento'].value;
    if(form.controls['pagado'].value){
      this.gasto.pagado = true;
    } else {
      this.gasto.pagado = false;
    }
    this.gasto.userId = +userId;

    let gastoJson = JSON.stringify(this.gasto);

    this.gastoService.agregarGasto(gastoJson)
      .subscribe(res => {
          alert(res.message)
          this.router.navigate(['/gastos']);
        });
  }

}
