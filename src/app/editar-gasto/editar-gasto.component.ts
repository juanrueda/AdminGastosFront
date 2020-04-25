import { Component, OnInit } from '@angular/core';
import { Gasto } from '../models/gasto';
import { ActivatedRoute, Router } from '@angular/router';
import { GastoService } from '../gasto.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-editar-gasto',
  templateUrl: './editar-gasto.component.html',
  styleUrls: ['./editar-gasto.component.css']
})
export class EditarGastoComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private gastoService: GastoService,
    private router: Router,
    private location: Location
  ) { }

  gasto: Gasto;

  ngOnInit(): void {
    this.getGasto();
  }

  getGasto(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.gastoService.getGasto(id)
      .subscribe(res => this.gasto = res.data)
  }

  editarGasto(){
    this.gastoService.editarGasto(this.gasto)
      .subscribe(res => {
        console.log(res.message)
        this.router.navigate(['/gastos']);
      })
  }

  goBack() : void {
    this.location.back();
  }

}
