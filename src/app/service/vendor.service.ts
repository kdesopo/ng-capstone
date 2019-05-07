import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { Vendor } from '../model/vendor.class';

const url:string='http://localhost:8080/vendors/';
@Injectable({
  providedIn: 'root'
})
export class VendorService {
  get(id: string): Observable<JsonResponse> {
    console.log("vendorsvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  edit(vendor: Vendor): Observable<any> {
    return this.http.put(url, vendor) as Observable<any>;
  }
  
  create(vendor: Vendor): Observable<any> {
    return this.http.post(url, vendor) as Observable<any>;
  }  
  
  list(): Observable<JsonResponse> {
    return this.http.get(url+"list") as Observable<JsonResponse>;
  }
  constructor(private http:HttpClient) { }
}
