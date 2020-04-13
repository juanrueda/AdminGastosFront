import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    let cred = JSON.stringify(form.value);
    this.authService.login(cred)
      .subscribe(response => {
        let token = response.data;
        localStorage.setItem("jwt", token);
        this.router.navigate(["/gastos"]);
      });
  }

}
