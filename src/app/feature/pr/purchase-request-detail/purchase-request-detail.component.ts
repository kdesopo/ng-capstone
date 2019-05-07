import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { PurchaseRequest } from 'src/app/model/purchaserequest.class';
import { PurchaseRequestService } from 'src/app/service/purchase-request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {
  title:string = 'Purchase Request Detail';

  jr:JsonResponse;
  id:string;
  resp: any;

  request: PurchaseRequest;

  constructor(private requestSvc: PurchaseRequestService,
              private router: Router,
              private route: ActivatedRoute) { }

              ngOnInit() {
                this.route.params
                .subscribe(params => {
                  let id = params["id"];
                  this.getRequestById(id);
                });
              }
            
              getRequestById(id: string) {
                this.requestSvc.get(id)
                .subscribe(jsresp => {
                  this.jr = jsresp;
                  this.request = this.jr.data as PurchaseRequest;
                });
              }
            
              remove() {
                this.requestSvc.delete(this.request.id)
                .subscribe(res => {
                  this.router.navigateByUrl("/purchase-requests/list");
                });
              }
            
                edit() {
                  this.requestSvc.edit(this.request)
                  .subscribe(resp => {
                    this.resp = resp;
                    this.router.navigate(['/purchase-requests/list']);
                  });
                }
            }