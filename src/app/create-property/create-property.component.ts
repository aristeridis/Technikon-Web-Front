import { Component, inject } from '@angular/core';
import { CreatePropertyService } from '../services/create-property.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-property',
  standalone: true,
  imports: [JsonPipe,FormsModule],
  templateUrl: './create-property.component.html',
  styleUrl: './create-property.component.css'
})
export class CreatePropertyComponent {
  property = {
    propertyId: null,
    propertyCode: null,
    address: '',
    yearOfConstruction: null,
    propertyType: '',
    deletedProperty: false,
    e9: null
  };
  answer:any;
service=inject(CreatePropertyService);
  postData() {
    if (this.property.propertyId && this.property.address && this.property.yearOfConstruction) {
      this.service.postData(this.property).subscribe({
        next: response => {
          console.log(response);
          alert('Property created');
        },
        error: err => {
          console.error('Error creating property:', err);
          alert('Couldn\'t create new property');
        }
      });
    } else {
      alert('Please fill all fields.');
    }
  }
}