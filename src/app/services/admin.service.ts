import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  http = inject(HttpClient);

  constructor() { }

  getPendingRepairs(): Observable<any[]> {
    const url = 'http://localhost:8080/TechnikonWeb/resources/admin/pendingRepairs';  // Make sure URL is correct
    return this.http.get<any[]>(url);
  }
}
