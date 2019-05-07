import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.class';

const url:string='http://localhost:8080/products/';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  get(id: string): Observable<JsonResponse> {
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  edit(product: Product): Observable<any> {
    return this.http.put(url, product) as Observable<any>;
  }
  
  create(vendor:Product): Observable<any> {
    return this.http.post(url, vendor) as Observable<any>;
  }    
  list(): Observable<JsonResponse> {
    return this.http.get(url+"list") as Observable<JsonResponse>
  }
  constructor(private http:HttpClient) { }
}
