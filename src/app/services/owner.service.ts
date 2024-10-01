import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  http = inject(HttpClient);

  urlOwner = "http://localhost:8080/TechnikonWeb/resources/Owner"

  getPropertiesByOwnerId(ownerId: number): Observable<any> {
    const url = `${this.urlOwner}/${ownerId}`;
    return this.http.get(url);
  }

  deleteProperty(propertyId: number): Observable<any> {
    const url = `${this.urlOwner}/${propertyId}`;
    return this.http.delete(url);

  }

}
