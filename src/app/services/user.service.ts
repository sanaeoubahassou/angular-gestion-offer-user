import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  public host:string="http://localhost:8070/user/all?size=10&page=0";
 
  constructor(private http: HttpClient) { }

  public getUsers(size: number, page: number): Observable<any>{ 
    const params = new HttpParams()
      .set('size', size.toString())
      .set('page', page.toString());

    return this.http.get<any>(this.host,{params});
    //    return this.http.get<User[]>(`${this.baseUrl}/users`, { params } );

  }

  public deleteUserByIgg(igg: string) {
    return this.http.delete(`${baseUrl}user/`+`${igg}`, {responseType:'text'})
   }

   public createUser(data:any):Observable<any>{
    return this.http.post(`${baseUrl}user/create`,data);
  }

  public getUserByIgg(igg:any){
    return this.http.get(`${baseUrl}user/`+`${igg}`);
  }
  public updateUserByIgg(data:any,igg:any):Observable<any>{
    return this.http.put(`${baseUrl}user/`+`${igg}`,data);
  }



}
