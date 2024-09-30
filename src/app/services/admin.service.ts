import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  http = inject(HttpClient);
  urlAdminPendingRepairs = "http://localhost:8080/TechnikonWeb/resources/Admin/dayRepairs"
  getPendingRepairs() {
    return this.http.get(this.urlAdminPendingRepairs);
  }

}
