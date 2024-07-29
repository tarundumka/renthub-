import { Component, OnInit } from '@angular/core';
import { LandlordsService } from '../landords.service';
import { Router } from '@angular/router';
import { LLSignup } from 'src/data-type';

@Component({
  selector: 'app-landlords',
  templateUrl: './landlords.component.html',
  styleUrls: ['./landlords.component.css']
})
export class LandlordsComponent implements OnInit {
  isSignup: boolean = true;

  constructor(private landlordsService: LandlordsService, private router: Router) { }

  ngOnInit(): void { }

  signUp(data: LLSignup): void {
    this.landlordsService.LLSignup(data).subscribe(result => {
      console.warn(result);
      this.router.navigate(['/home']);
    });
  }

  login(data: { email: string; password: string }): void {
    this.landlordsService.LLLogin(data).subscribe((users: any[]) => {
      const user = users.find((u: { email: string; password: string; }) => u.email === data.email && u.password === data.password);
      if (user) {
        console.warn("Login successful");
        localStorage.setItem('landlordToken', 'token'); // Set a token to indicate the landlord is logged in
        this.router.navigate(['/home']);
      } else {
        console.error("Login failed");
        alert('Invalid credentials');
      }
    });
  }

  toggleForm(): void {
    this.isSignup = !this.isSignup;
  }
}
