import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatePropertyService {
  http = inject(HttpClient);

  constructor() { }
  putData(data: any) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    const url = `http://localhost:8080/TechnikonWeb/resources/Owner/property`;
    console.log('PUT Request URL:', url);
    console.log('Data to send:', data);
    return this.http.put(url, JSON.stringify(data), { headers: headers })
      .pipe(retry(1),
        catchError(error => throwError(() => 'Couldn\'t put data on service'))
      );

  }
}