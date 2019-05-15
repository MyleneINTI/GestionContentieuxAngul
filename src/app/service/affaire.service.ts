import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Affaire } from '../model/affaire';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {

  constructor(private http: HttpClient) {}

  public getAllAffaires(): Observable<any> {
    return this.http.get('http://localhost:8080/GestionDeptContentieuxDynamic/affaires').map(response => response);
  }

  public getAffaire(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/GestionDeptContentieuxDynamic/affaires/'+id);
  }

  public saveAffaire(affaire: Affaire): Observable<any> {
    return this.http.post('http://localhost:8080/GestionDeptContentieuxDynamic/affaires', affaire);
  }

  public deleteAffaire(id: number): Observable<any> {
    return this.http.delete('http://localhost:8080/GestionDeptContentieuxDynamic/affaires/'+id);
  }
}