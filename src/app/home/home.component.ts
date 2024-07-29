
import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../apartment.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  apartments: any[] = [];
  // amenities: string[] = [
  //   'gym',
  //   'swimming pool',
  //   'car park',
  //   'visitors parking',
  //   'power backup',
  //   'garbage disposal',
  //   'private lawn',
  //   'water heater',
  //   'plant security system',
  //   'laundry service',
  //   'elevator',
  //   'club house'
  // ];

  constructor(private apartmentService: ApartmentService,private router: Router) {}

  ngOnInit(): void {
    this.apartmentService.getApartments().subscribe({
      next: data => {
        this.apartments = data;
      },
      error: error => {
        console.error('Failed to fetch apartments', error);
      }
    });
  }
// ViewDetail(){
//   this.router.navigate(['/view-detail'])
//   console.warn("view detail has clicked");
// }
  // apartmentAmenities(apartment: any): string[] {
  //   return this.amenities.filter(amenity => apartment[amenity]);
  // }
}


