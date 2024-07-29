import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLandlordLoggedIn: boolean = false;
  
  constructor(private route: Router) { }

  ngOnInit(): void {
    // Check if landlord is logged in
    this.isLandlordLoggedIn = !!localStorage.getItem('landlordToken');
  }

  login() {
    this.route.navigate(['/login']);
    console.log('Login button clicked');
  }

  register() {
    this.route.navigate(['/register']);
    console.log('Register button clicked');
  }

  Add() {
    this.route.navigate(['/apartment-form']);
    console.log('Add form');
  }

  Landlords() {
    this.route.navigate(['/landlords']);
  }
  
}
