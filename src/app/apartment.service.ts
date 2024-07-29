import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private apiUrl = 'http://localhost:3001/apartments';

  constructor(private http: HttpClient) { }

  getApartments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getApartment(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addApartment(apartment: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, apartment);
  }
}

