import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  http = inject(HttpClient);

  urlForPropertyByOwnerId ="http://localhost:8080/TechnikonWeb/resources/Owner/1"
    // url = 'https://reqres.in/api/users/2';
  // getUsersFromPublicUrl(){
  //   return this.http.get(this.url);
  // }
  getPropertiesByOwnerId(){
    return this.http.get(this.urlForPropertyByOwnerId);
  }

}
