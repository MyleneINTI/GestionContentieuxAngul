import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Tache } from '../model/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http: HttpClient) { }

  public getAllTaches() : Observable<any> {
    return this.http.get('http://localhost:8080/GestionDeptContentieuxDynamic/taches').map(response => response);
  }

  public getTache(id : number): Observable<any> {
    return this.http.get('http://localhost:8080/GestionDeptContentieuxDynamic/taches/'+id);
  }

  public saveTache(tache : Tache): Observable<any> {
    return this.http.post('http://localhost:8080/GestionDeptContentieuxDynamic/taches', tache);
  }

  public deleteTache(id : number): Observable<any> {
    return this.http.delete('http://localhost:8080/GestionDeptContentieuxDynamic/taches/'+id);
  }
  
}
