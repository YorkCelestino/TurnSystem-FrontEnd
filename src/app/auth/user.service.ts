import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceLogin {
  selectedUser: User = {
    nombre: '',
    usuarios: '',
    password: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  // HttpMethods

  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/users/register', user, this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/users/authenticate', authCredentials, this.noAuthHeader);
  }


  // Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    const token = this.getToken();
    if (token) {
      // tslint:disable-next-line:prefer-const
      let userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);

    } else {
      return null;
    }
  }

  isLoggedIn() {
    // tslint:disable-next-line:prefer-const
    let userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
}
