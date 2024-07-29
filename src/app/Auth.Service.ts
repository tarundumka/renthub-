import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { login } from 'src/data-type';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:3001/users'; //Updated
  isuserLoggedin=new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient,private route:Router) {
    this.checklocalstorage();
   }

   private checklocalstorage():void{
    const storeddata=localStorage.getItem('users');
    if(storeddata){
     this.isuserLoggedin.next(true);
     this.route.navigate(['/home']);
     console.warn("in the app.component.ts",storeddata);
    }
    else {
     this.isuserLoggedin.next(false);
   }
 }

  register(user: any){
    this.http.post<any>(this.apiUrl, 
      user,
      // {observe:'response'}
    ).subscribe((result)=>{
      this.isuserLoggedin.next(true);
      // console.warn("i am result ",result);
      localStorage.setItem('users',JSON.stringify(result.body))
      this.route.navigate(['/home']);
      console.warn("result",result.body);
    });

    }
    
   

   

  // login(email: string, password: string): Observable<any> {
  //   return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`) 
      // .pipe(
      //   map(users => {
      //     if (users.length) {
            // console.warn("i m in login user")
            // const user = users[0];
            // this.setToken(user.token); // Assuming user object contains a token
            // return user;
          // }
          // return null;
        // })
      // );
     
  login(data: login) {
    console.warn("in authservice", data);
    this.http.get(`${this.apiUrl}?email=${data.email}&password=${data.password}`
      , { observe: 'response' }
    ).subscribe((result: any) => {
      console.warn(result);
      if (result && result.body && result.body.length) {
        console.warn("user logged in")
      }
      else {
        console.warn("login failed")
      }

    });
  }
}

        
    
    
  
        
        

      
  

 

