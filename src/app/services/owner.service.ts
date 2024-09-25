import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  http=inject(HttpClient);
  url="https://reqres.in/api/users/2"
  getUsersFromPublicUrl(){
    return this.http.get(this.url);
  }
 
}
