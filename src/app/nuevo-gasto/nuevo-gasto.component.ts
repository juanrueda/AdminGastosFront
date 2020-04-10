import { Component, OnInit } from '@angular/core';
import { Gasto } from '../models/gasto';
import { GastoService } from '../gasto.service';

@Component({
  selector: 'app-nuevo-gasto',
  templateUrl: './nuevo-gasto.component.html',
  styleUrls: ['./nuevo-gasto.component.css']
})
export class NuevoGastoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gasto: Gasto;

  submitted = false

  onSubmit (){
    this.submitted = true;
  }

}
