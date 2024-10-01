import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatePropertyService {
  http = inject(HttpClient);
  url = 'http://localhost:8080/TechnikonWeb/resources/Owner/property/${property.propertyId}';

  constructor() { }
  putData(data: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    const url = `${this.url}`;
    return this.http.put(url, JSON.stringify(data), { headers: headers })
      .pipe(retry(1),
        catchError(error => throwError(() => 'Couldn\'t put data on service'))
      );

  }
}
