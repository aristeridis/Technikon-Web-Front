import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatePropertyService {
  http = inject(HttpClient);

  constructor() { }
  postData(data: any) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      
    const url = 'http://localhost:8080/TechnikonWeb/resources/Owner/property/7';
    return this.http.post(url, JSON.stringify(data), { headers: headers })
      .pipe(retry(1),
        catchError(error => throwError(() => 'Couldn\'t post data n service'))
  );

  }
}
