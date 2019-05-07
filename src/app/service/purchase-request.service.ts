import { Injectable } from '@angular/core';
import { JsonResponse } from '../model/json-response.class';
import { Observable } from 'rxjs/internal/Observable';
import { PurchaseRequest } from '../model/purchaserequest.class';
import { HttpClient } from '@angular/common/http';

const url:string='http://localhost:8080/purchase-requests/';
@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestService {
  get(id: string): Observable<JsonResponse> {
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  edit(request: PurchaseRequest): Observable<any> {
    return this.http.put(url, request) as Observable<any>;
  }
  
  create(request: PurchaseRequest): Observable<any> {
    return this.http.post(url+"submit-new", request) as Observable<any>;
  }
  
  submit(request: PurchaseRequest): Observable<any> {
    return this.http.put(url+"submit-review", request) as Observable<any>;
  }

  resubmit(request: PurchaseRequest): Observable<any> {
    return this.http.put(url+"resubmit-review", request);
  }
  
  list(): Observable<JsonResponse> {
    return this.http.get(url+"list") as Observable<JsonResponse>;
  }

  linesByPr(prId:string): Observable<JsonResponse> {
    return this.http.get(url+"/lines-for-pr/"+prId) as Observable<JsonResponse>;
  }
  constructor(private http:HttpClient) { }
}
