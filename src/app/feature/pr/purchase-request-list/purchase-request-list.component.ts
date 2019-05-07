import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from 'src/app/model/purchaserequest.class';
import { JsonResponse } from 'src/app/model/json-response.class';
import { PurchaseRequestService } from 'src/app/service/purchase-request.service';
import { SystemService } from 'src/app/service/system.service';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {
  title:string = "Purchase Request List";
    
  requests:PurchaseRequest[];
  jr:JsonResponse;
  sortCriteria:string="status";
  sortOrder:string="asc";
  user: User;

  constructor(private requestSvc:PurchaseRequestService,
              private sysSvc: SystemService) { }

  ngOnInit() {
    this.requestSvc.list().subscribe(jresp =>
      {
        this.jr = jresp;
        this.requests = this.jr.data as PurchaseRequest[];
      }
      );

      this.user = this.sysSvc.data.user.instance;
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
