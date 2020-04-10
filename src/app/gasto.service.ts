import { Injectable } from '@angular/core';
import { GASTOS } from './models/mock-gastos';
import { Observable, of } from 'rxjs';
import { Gasto } from './models/gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor() { }

  // TODO: agregar http

  getGastos(): Observable<Gasto[]> {
    return of(GASTOS);
  }
}
