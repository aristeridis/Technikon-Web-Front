import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { OwnerComponent } from '../owner/owner.component';
import { OwnerService } from './owner.service';

@Injectable({
  providedIn: 'root'
})
export class CreatePropertyService {
  http = inject(HttpClient);

  constructor() { }
  postData(ownerId: number, data: any){    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      
    const url = `http://localhost:8080/TechnikonWeb/resources/Owner/property/${ownerId}`;
    return this.http.post(url, JSON.stringify(data), { headers: headers })
      .pipe(retry(1),
        catchError(error => throwError(() => 'Couldn\'t post data on service'))
  );

  }
}
