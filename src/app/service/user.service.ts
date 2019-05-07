import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { User } from '../model/user.class';

const url:string= 'http://localhost:8080/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get(id: string): Observable<JsonResponse> {
    console.log("usersvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  edit(user: User): Observable<any> {
    return this.http.put(url, user) as Observable<any>;
  }
  
  create(user:User): Observable<any> {
    return this.http.post(url, user) as Observable<any>;
  }
  
  list(): Observable<JsonResponse> {
    return this.http.get(url+"list") as Observable<JsonResponse>;
  }

  login(user:User): Observable<JsonResponse> {
    return this.http.post(url+"authenticate", user) as Observable<JsonResponse>;
  }
  constructor(private http: HttpClient) { }
}
