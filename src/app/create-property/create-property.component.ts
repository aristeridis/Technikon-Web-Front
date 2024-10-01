import { Component, inject } from '@angular/core';
import { CreatePropertyService } from '../services/create-property.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-property',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './create-property.component.html',
  styleUrl: './create-property.component.css'
})
export class CreatePropertyComponent {
  ownerId: number | null = null;
  property = {
    propertyId: null,
    propertyCode: null,
    address: '',
    yearOfConstruction: null,
    propertyType: '',
    deletedProperty: false,
    e9: null
  };

  service = inject(CreatePropertyService);

  postData() {
    if (this.ownerId) {
      this.service.postData(this.ownerId, this.property).subscribe({
        next: response => {
          console.log('Property created successfully', response);
          alert('Property created successfully!');
        },
        error: err => {
          console.error('Error creating property:', err);
          alert('Couldn\'t update property');
        }
      });
    } else {
      alert('Please enter a valid Owner ID');
    }
  }
}