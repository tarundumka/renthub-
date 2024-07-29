import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './Auth.Service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate()
   {
    // if (this.authService.isLoggedIn()) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    console.warn("canactive m hu abhi ")
     return this.authService.isuserLoggedin;
   
  }
}
