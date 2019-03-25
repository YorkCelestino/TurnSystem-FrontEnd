import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
   // seve User
   saveUser( person: any) {
    return this.http.post(environment.apiBaseUrl + '/person/add-person', person);
  }
}
