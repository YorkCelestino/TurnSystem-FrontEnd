import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URI = 'http://localhost:3000/api';
  constructor( private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get(`${this.API_URI}/users`);
  }

  getNameDeparment() {
    return this.http.get(`${this.API_URI}/users/listdepartment`);
  }

  seveUser( user: User) {
    return this.http.post(`${this.API_URI}/users`, user);
  }

  deleteUser(id: any) {
    return this.http.delete(`${this.API_URI}/users/${id}`);
  }

  updateUser(id: any , updatedUser: User): Observable<User> {
    return this.http.put(`${this.API_URI}/users/${id}`, updatedUser);

  }
}
