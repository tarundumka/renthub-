import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApartmentService } from '../apartment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartment-form',
  templateUrl: './apartment-form.component.html',
  styleUrls: ['./apartment-form.component.css']
})
export class ApartmentFormComponent implements OnInit {
  apartmentForm: FormGroup;
  buildingNames: string[] = ['Building A', 'Building B', 'Building C', 'Building D', 'Building E'];
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
    private fb: FormBuilder,
    private apartmentService: ApartmentService,
    private router: Router
  ) {
    this.apartmentForm = this.fb.group({
      building: ['', Validators.required],
      shared: ['', Validators.required],
      location: ['', Validators.required],
      details: ['', Validators.required],
      leaseType: ['', Validators.required],
      rent: ['', Validators.required],
      furnished: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.amenities.forEach(amenity => {
      this.apartmentForm.addControl(amenity, this.fb.control(false));
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.apartmentForm.valid) {
      this.apartmentService.addApartment(this.apartmentForm.value).subscribe({
        next: response => {
          console.log('Apartment posted successfully', response);
          this.router.navigate(['/home']);
        },
        error: error => {
          console.error('Failed to post apartment', error);
        }
      });
    }
  }
}
