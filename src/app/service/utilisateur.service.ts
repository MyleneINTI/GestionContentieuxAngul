import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) {}

  public getAllUtilisateurs(): Observable<any> {
    return this.http.get('http://localhost:8080/GestionDeptContentieuxDynamic/utilisateurs').map(response => response);
  }

  public getUtilisateur(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/GestionDeptContentieuxDynamic/utilisateurs/'+id);
  }

  public saveUtilisateur(utilisateur: Utilisateur): Observable<any> {
    return this.http.post('http://localhost:8080/GestionDeptContentieuxDynamic/utilisateurs', utilisateur);
  }

  public deleteUtilisateur(id: number): Observable<any> {
    return this.http.delete('http://localhost:8080/GestionDeptContentieuxDynamic/utilisateurs/'+id);
  }

  public updateUtiliasteur(utilisateur: any): Observable<any> {
    var userParse = JSON.parse(utilisateur); //Parsing pour passer de JSON à User
    return this.http.put('http://localhost:8080/GestionDeptContentieuxDynamic/utilisateurs/'+userParse.idUtilisateur, userParse).map(response => response);
  }
}