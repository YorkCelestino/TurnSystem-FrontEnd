import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurnsService {

  constructor(private http: HttpClient) { }

  saveTurn( turn: any) {
    return this.http.post(environment.apiBaseUrl + '/turns/add-turn', turn);
  }
  getTurns () {
    return this.http.get(environment.apiBaseUrl + '/turns/get-turn');
  }

}
