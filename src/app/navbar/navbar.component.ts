import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { stringify } from 'querystring';
import { decode } from 'punycode';

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
  ) {
  }

  username = '';
  isOpen = false;
  userMenuOpen = false;

  ngOnInit(): void {
    let token = this.authService.getToken();
    let decodedToken = this.jwtHelper.decodeToken(token);
    this.username = decodedToken === null ? '' : decodedToken.unique_name;
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(["/login"]);
  }

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  openUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
  }
}
