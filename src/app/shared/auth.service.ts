import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint = 'http://localhost:5000/auth';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  //Register
  register(user: User): Observable<any> {
    let api = `${this.endpoint}/register`;
    return this.http.post<any>(api, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  login(cred: string): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/login`, cred, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  logOut() {
    localStorage.removeItem("jwt");
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    let authToken = this.getToken();
    return (authToken !== null) ? true : false;
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      //client side error
      msg = error.error.message;
    } else {
      //server side error
      msg = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
