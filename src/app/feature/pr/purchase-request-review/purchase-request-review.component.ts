import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from 'src/app/service/purchase-request.service';
import { PurchaseRequest } from 'src/app/model/purchaserequest.class';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-purchase-request-review',
  templateUrl: './purchase-request-review.component.html',
  styleUrls: ['./purchase-request-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {
  
  title:string = 'Purchase Request Review';
  requests: PurchaseRequest[];
  user:User;

  constructor(private prSvc: PurchaseRequestService,
              private sysSvc: SystemService) { }

  ngOnInit() {
    this.prSvc.list()
    .subscribe(jresp =>
      {
        this.requests = jresp.data as PurchaseRequest[];
      });

    this.user = this.sysSvc.data.user.instance;
  }

}
