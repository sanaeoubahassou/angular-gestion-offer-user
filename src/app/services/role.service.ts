import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  public host:string="http://localhost:8070/role/all";
  constructor(private http: HttpClient) { }

  public getAllRoles(){ 
    return this.http.get<any>(this.host);
  }
}
