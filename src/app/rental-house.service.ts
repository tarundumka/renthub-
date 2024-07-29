import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalHouseService {
  private houses = [
    {
      id: 1,
      name: 'Modern Apartment',
      image: 'https://via.placeholder.com/150',
      description: 'A modern apartment in the city center.'
    },
    {
      id: 2,
      name: 'Cozy Cottage',
      image: 'https://via.placeholder.com/150',
      description: 'A cozy cottage in the countryside.'
    }
  ];

  constructor() { }

  getHouses(): Observable<any[]> {
    return of(this.houses);
  }
}

