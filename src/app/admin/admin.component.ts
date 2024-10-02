import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [JsonPipe, CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  service = inject(AdminService);
  repairs: any[] = [];

  constructor(private router: Router) { }

  getRepairs(): void {
    if (this.repairs !== null) {
      this.service.getPendingRepairs().subscribe({
        next: (data: any[]) => {
          this.repairs = data;
          alert('Repairs fetched successfully');
        },
        error: (err: any) => {
          console.error('Error getting repairs:', err);
          alert('Failed to get repairs. Please try again.');
        },
      });
    } else {
      alert('There are no repairs to show');
    }
  }
  goToHome() {
    this.router.navigate(['/']);
  }
}
