import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OwnerService } from '../services/owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  ownerId: number | null = null;
  propertyId: number | null = null;
  ownerService=inject(OwnerService);
  constructor(private router: Router) { }
  getProperties(): void {
    if (this.ownerId !== null) {
      alert('Properties found');
      window.location.href = `http://localhost:8080/TechnikonWeb/resources/Owner/${this.ownerId}`;
    } else {
      alert('Please enter a valid id');
    }
  }
  deleteProperty(): void {
    if (this.propertyId !== null) {
      this.ownerService.deleteProperty(this.propertyId).subscribe({
        next: () => {
          alert('Property deleted successfully');
          window.location.href = `http://localhost:8080/TechnikonWeb/resources/Owner/property/${this.propertyId}`;
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
}
