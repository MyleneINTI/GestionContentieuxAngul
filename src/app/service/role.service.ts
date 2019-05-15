import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  public getAllRoles() : Observable<any> {
    return this.http.get('http://localhost:8080/GestionDeptContentieuxDynamic/roles').map(response => response);
  }

  public getRole(id : number): Observable<any> {
    return this.http.get('http://localhost:8080/GestionDeptContentieuxDynamic/roles/'+id);
  }

  public saveRole(role : Role): Observable<any> {
    return this.http.post('http://localhost:8080/GestionDeptContentieuxDynamic/roles', role);
  }

  public deleteRole(id : number): Observable<any> {
    return this.http.delete('http://localhost:8080/GestionDeptContentieuxDynamic/roles/'+id);
  }

  public updateRole(role : any): Observable<any>{
    var roleParse=JSON.parse(role);
    return this.http.put('http://localhost:8080/GestionDeptContentieuxDynamic/roles/'+roleParse.idRole, roleParse).map(response => response);
  }
}
