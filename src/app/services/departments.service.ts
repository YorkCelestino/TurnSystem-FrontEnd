import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departments } from '../models/departments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getdepartments(): Observable<Departments> {
    return this.http.get(`${this.API_URI}/departments`);
  }

  seveDepartment(department): Observable<Departments> {
    return this.http.post(`${this.API_URI}/departments`, department);
  }

  deleteDepartment(id: any) {
    console.log(id);
    return this.http.delete(`${this.API_URI}/departments/${id}`);
  }

  updateDepartment(id: any,  updateDepartment: Departments): Observable<Departments> {
    return this.http.put(`${this.API_URI}/departments/${id}`, updateDepartment);
  }
}
