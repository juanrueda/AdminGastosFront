import { Injectable } from '@angular/core';
import { GASTOS } from './models/mock-gastos';
import { Observable, of } from 'rxjs';
import { Gasto } from './models/gasto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  private baseUrl = 'http://localhost:5000';

  getGastos(): Observable<any> {

    return this.http.get<any>(this.baseUrl + '/gasto/todos', this.httpOptions)
      .pipe(
        catchError(this.handleError<Gasto[]>('getGastos', [])) //Revisar manejo de errores
      );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }
}
