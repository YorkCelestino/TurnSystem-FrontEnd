import { Injectable } from '@angular/core';
import { User, UserSave } from '../models/users';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor( private http: HttpClient) { }

  // getting one user
  getUser() {
    return this.http.get(environment.apiBaseUrl + '/users/user-info');
  }

  // getting all Users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiBaseUrl + '/users/get-user-list');
  }

  // getting all name of departments
  getNameDeparment() {
    return this.http.get(environment.apiBaseUrl + '/users/get-list-department');
  }

 // seve User
  saveUser( user: User) {
    return this.http.post(environment.apiBaseUrl + '/users/add-user', user);
  }

  // change Status of one User
  changeStatusUser(id: number, status: string) {
    console.log(id);
    return this.http.post(environment.apiBaseUrl + '/users/delete-user/', {
      id,
      status: (status === 'A') ? 'I' : 'A'
    });
  }

  // Updating User
  updateUser(id: any , updatedUser: UserSave): Observable<UserSave> {
    return this.http.post(environment.apiBaseUrl + '/users/update-user/', updatedUser);

  }
}
