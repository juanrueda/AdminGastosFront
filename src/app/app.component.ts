import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adminstrador de gastos';
  router: string;

  constructor (private authService: AuthService) {}

  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }


}

