import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OwnerComponent } from "./owner/owner.component";
import { AdminComponent } from "./admin/admin.component";
import { HomepageComponent } from './homepage/homepage.component';
import { routes } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OwnerComponent, AdminComponent, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'technikon-web-front';
}
