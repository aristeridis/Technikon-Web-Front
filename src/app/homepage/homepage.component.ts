import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerComponent } from "../owner/owner.component";

@Component({
  selector: 'app-homepage',
  standalone: true, // Standalone component
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  imports: [OwnerComponent]
})
export class HomepageComponent {

  constructor(private router: Router) { }

  goToOwner(): void {
    this.router.navigate(['owner']);
  }

  goToAdmin(): void {
    this.router.navigate(['admin']);  }
}
