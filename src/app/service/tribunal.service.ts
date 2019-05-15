import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Tribunal } from '../model/tribunal';

@Injectable({
  providedIn: 'root'
})
export class TribunalService {

  constructor(private http: HttpClient) { }

  public getAllTribunaux() : Observable<any> {
    return this.http.get('http://localhost:8080/GestionDeptContentieuxDynamic/tribunaux').map(response => response);
  }
}
