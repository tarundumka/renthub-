import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  apartment: any;
  amenities: string[] = [
    'gym',
    'swimming pool',
    'car park',
    'visitors parking',
    'power backup',
    'garbage disposal',
    'private lawn',
    'water heater',
    'plant security system',
    'laundry service',
    'elevator',
    'club house'
  ];

  constructor(
    private route: ActivatedRoute,
    private apartmentService: ApartmentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apartmentService.getApartment(id).subscribe({
        next: data => {
          this.apartment = data;
        },
        error: error => {
          console.error('Failed to fetch apartment', error);
        }
      });
    }
  }

  apartmentAmenities(): string[] {
    return this.amenities.filter(amenity => this.apartment && this.apartment[amenity]);
  }
}
