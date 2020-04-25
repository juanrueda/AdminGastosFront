import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  user: User;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  registerUser(form: NgForm) {
    this.user = new User();
    this.user.username = form.controls['username'].value;
    this.user.password = form.controls['password'].value;

    this.authService.register(JSON.stringify(this.user))
      .subscribe((res) => {
        if (res.success) {
          form.reset();
          this.router.navigate(['login']);
        }
      })
  }

}
