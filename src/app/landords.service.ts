import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LLSignup } from 'src/data-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandlordsService {
  private apiUrl = 'http://localhost:3001/landlords';

  constructor(private http: HttpClient) { }

  LLSignup(data: LLSignup): Observable<any> {
    console.warn("Signup service call");
    return this.http.post(this.apiUrl, data);
  }

  LLLogin(data: { email: string; password: string }): Observable<any> {
    console.warn("Login service call");
    return this.http.get<LLSignup[]>(this.apiUrl);
  }
}
