import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  http = inject(HttpClient);
  getPendingRepairs() {
    const urlAdminPendingRepairs = "http://localhost:8080/TechnikonWeb/resources/Admin/dayRepairs";
    return this.http.get(urlAdminPendingRepairs);
  }

}
