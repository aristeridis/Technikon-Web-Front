import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdatePropertyService } from '../services/update-property.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-property',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './update-property.component.html',
  styleUrl: './update-property.component.css'
})
export class UpdatePropertyComponent {
  property = {
    propertyId: null,
    propertyCode: null,
    address: '',
    yearOfConstruction: null,
    propertyType: '',
    deletedProperty: false,
    e9: null
  };
  constructor(private router: Router) { }

  service = inject(UpdatePropertyService);

  putData() {
    if (this.property.propertyId) {
      this.service.putData(this.property).subscribe({
        next: response => {
          console.log(response);
          alert('Property updated');
        },
        error: err => {
          console.error('Error updating property:', err);
          alert('Couldn\'t update property');
        }
      });
    } else {
      alert('Please fill all the necessary fields.');
    }
  }
  goToHome() {
    this.router.navigate(['/']);
  }
}

