import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Auth.Service';
import { login } from 'src/data-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
     private authService: AuthService,
      private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     const { email, password } = this.loginForm.value;
  //     this.authService.login(email, password).subscribe({
  //       next: (user) => {
  //         if (user) {
  //           this.router.navigate(['/home']);
  //         } else {
  //           // Handle login error
  //           console.error('Login failed');
  //         }
  //       },
  //       error: (error) => {
  //         console.error('Login failed', error);
  //       }
  //     });
  login(data:login){
    // console.warn(data);
    this.authService.login(data);
  }

    }
  

