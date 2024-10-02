import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OwnerService } from '../services/owner.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  ownerId: number | null = null;
  propertyId: number | null = null;
  properties: any[] = [];
  ownerService=inject(OwnerService);
  constructor(private router: Router) { }

  getProperties(): void {
    if (this.ownerId !== null) {
      this.ownerService.getPropertiesByOwnerId(this.ownerId).subscribe({
        next: (data: any[]) => {
          this.properties = data;
          alert('Properties fetched successfully');
        },
        error: (err: any) => {
          console.error('Error getting properties:', err);
          alert('Failed to get properties. Please try again.');
        },
      });
    } else {
      alert('Please enter a valid Owner ID');
    }
  }

  deleteProperty(): void {
    if (this.propertyId !== null) {
      this.ownerService.deleteProperty(this.propertyId).subscribe({
        next: (data: any[]) => {
          this.properties = data;
          alert('Property deleted successfully');
        },
        error: (err: any) => {
          console.error('Error deleting property:', err);
          alert('Failed to delete property. Please try again.');
        },
      });
    } else {
      alert('Please enter a valid Property ID');
    }
  }
  goToCreate():void{
    this.router.navigate(['create-property']);
  }
  goToUpdate(): void {
    this.router.navigate(['update-property']);
  }

goToHome() {
  this.router.navigate(['/']);
}
}
