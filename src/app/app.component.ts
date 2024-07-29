import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isuserLoggedin=new BehaviorSubject<boolean>(false)
  title = 'rent';
 
  // ngOnInit():void{
  //   this.checklocalstorage();
  // }
  constructor(private route:Router){};

 

}
