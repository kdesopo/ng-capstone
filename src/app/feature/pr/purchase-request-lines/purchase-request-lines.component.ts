import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from 'src/app/service/purchase-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequest } from 'src/app/model/purchaserequest.class';
import { JsonResponse } from 'src/app/model/json-response.class';
import { PurchaseRequestLineItem } from 'src/app/model/purchaserequestlineitem.class';
import { PurchaseRequestLineItemService } from 'src/app/service/purchase-request-line-item.service';

@Component({
  selector: 'app-purchase-request-lines',
  templateUrl: './purchase-request-lines.component.html',
  styleUrls: ['./purchase-request-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {
  title:string='Purchase Request Line Items';
  subTitle:string='Lines';

  prId:string;
  request:PurchaseRequest;
  jr:JsonResponse;
  prlis:PurchaseRequestLineItem[];
  sortCriteria:string="";
  sortOrder:string="asc";

  constructor(private requestSvc: PurchaseRequestService,
              private prliSvc: PurchaseRequestLineItemService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.prId = params['id']);

    this.requestSvc.get(this.prId).subscribe(jrresp =>
      {
        this.jr = jrresp;
        this.request = this.jr.data as PurchaseRequest;       
      }
      );

    this.requestSvc.linesByPr(this.prId).subscribe(resp => 
      {
        this.jr = resp;
        this.prlis = resp.data as PurchaseRequestLineItem[];
      }
    );
  }

  submit() {
    if (this.request.status === 'New') {
      this.requestSvc.submit(this.request)
      .subscribe(jresp => {
        this.router.navigateByUrl('/purchase-requests/list');
      });

    } else if(this.request.status === 'Rejected') {
      this.requestSvc.resubmit(this.request)
      .subscribe(jresp => {
        this.router.navigateByUrl('/purchase-requests/list');
      });
    }
  }

  remove(prli:PurchaseRequestLineItem, index:number) {
    this.request.total -= (prli.quantity * prli.product.price);
    this.prliSvc.delete(prli.id).subscribe(); 
    this.prlis.splice(index,1);
    this.prlis; 
  }

  sortBy(column: string): void {
    if(this.sortCriteria == column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }

}
