import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Motivos } from '../models/motivos';

@Injectable({
  providedIn: 'root'
})
export class MotivosService {

  constructor(private http: HttpClient) { }

  getMotivo(id) {
      return this.http.get(environment.apiBaseUrl + '/motivos/get-motivo/' + [id]);
  }

  getMotivos() {
    return this.http.get(environment.apiBaseUrl + '/motivos/get-motivos');
}


saveMotivo( motivo: Motivos) {
  return this.http.post(environment.apiBaseUrl + '/users/add-user', motivo);
}
}
