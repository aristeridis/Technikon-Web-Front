import { Component, inject } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  service=inject(AdminService);
  admin:any;
  ngOnInit(): void {
    this.service.getPendingRepairs().subscribe({
      next: response => this.admin = response,
      error: err => console.error("Error getting pending repairs")
    });
  }
}
