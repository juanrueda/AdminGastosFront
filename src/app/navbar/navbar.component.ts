import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
    private authService: AuthService
  ) { }

  username = '';

  ngOnInit(): void {
    let token = this.authService.getToken();
    this.username = this.jwtHelper.decodeToken(token).unique_name;
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(["/login"]);
  }



}
