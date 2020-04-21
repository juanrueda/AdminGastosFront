import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.registerForm = this.fb.group({
      username: [''],
      password: ['']
    })
   }

  ngOnInit(): void {
  }

  registerUser() {
    this.authService.register(this.registerForm.value)
      .subscribe((res) => {
        if(res.result) {
          this.registerForm.reset();
          this.router.navigate(['login']);
        }
      })
  }

}