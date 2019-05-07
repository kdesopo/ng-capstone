import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { HttpClient } from '@angular/common/http';
import { PurchaseRequestLineItem } from '../model/purchaserequestlineitem.class';

const url:string='http://localhost:8080/purchase-request-line-items/';
@Injectable({
  providedIn: 'root'
})

export class PurchaseRequestLineItemService {
  get(id:string): Observable<JsonResponse> {
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  delete(id:number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  edit(prli:PurchaseRequestLineItem): Observable<any> {
    return this.http.put(url, prli) as Observable<any>;
  }

  create(prli:PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url, prli) as Observable<any>
  }

  list(): Observable<JsonResponse> {
    return this.http.get(url+"list") as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
