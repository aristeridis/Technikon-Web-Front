import { Component, inject, OnInit } from '@angular/core';
import { OwnerService } from '../services/owner.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent implements OnInit{
service=inject(OwnerService);
owners:any;

// ngOnInit(): void {
//     this.service.getUsersFromPublicUrl().subscribe({
//       next: response => this.owners =response,
//       error:err=> console.error("something wrong ${err}")
//     });
// }
ngOnInit(): void {
    this.service.getPropertiesByOwnerId().subscribe({
      next:response=>this.owners.response,
      error:err=>console.error("Error getting property by owners id ${err}")
    });
}

}
