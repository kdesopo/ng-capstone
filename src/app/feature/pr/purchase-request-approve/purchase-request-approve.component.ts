import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from 'src/app/model/purchaserequest.class';
import { PurchaseRequestService } from 'src/app/service/purchase-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestLineItem } from 'src/app/model/purchaserequestlineitem.class';

@Component({
  selector: 'app-purchase-request-approve',
  templateUrl: './purchase-request-approve.component.html',
  styleUrls: ['./purchase-request-approve.component.css']
})
export class PurchaseRequestApproveComponent implements OnInit {

  title:string = 'Purchase Request Approve/Reject';
  subTitle:string = 'Lines';
  prId:string;
  request:PurchaseRequest;
  prlis:PurchaseRequestLineItem[];
  vis:string='hidden';

  constructor(private prSvc: PurchaseRequestService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.prId = params['id']);

    this.prSvc.get(this.prId)
    .subscribe(jresp =>
      {
        this.request = jresp.data as PurchaseRequest;
      });
    
     this.prSvc.linesByPr(this.prId)
     .subscribe(jresp =>
      {
        this.prlis = jresp.data as PurchaseRequestLineItem[];
      }) 
  }

  approve() {
    this.request.status = 'Approved';
    this.request.reasonForRejection = "";
    this.prSvc.edit(this.request)
    .subscribe(jresp =>
      {
        this.router.navigateByUrl('/purchase-requests/review');
      });
    
  }

  reject() {
    this.request.status = 'Rejected';
    this.prSvc.edit(this.request)
    .subscribe(jresp =>
      {
        this.router.navigateByUrl('/purchase-requests/review');
      });
  } 
  
  onKey(value:string) {
    if(value === "") {
      this.vis = 'hidden';
    } else {
      this.vis = 'visible';
      this.request.reasonForRejection = value;
    }
  }

}
