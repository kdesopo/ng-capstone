import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonResponse } from 'src/app/model/json-response.class';
import { PurchaseRequest } from 'src/app/model/purchaserequest.class';
import { PurchaseRequestService } from 'src/app/service/purchase-request.service';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {
  title: string = "Purchase Request Create";
  jr: JsonResponse;
  request: PurchaseRequest = new PurchaseRequest();
  
  create() {
    this.requestSvc.create(this.request)
    .subscribe(resp => {
      this.jr = resp;
      this.router.navigate(['purchase-requests/list']);
    });
  }
  constructor(private requestSvc: PurchaseRequestService,
              private sysSvc: SystemService,
              private router: Router) { }

  ngOnInit() {
    if (this.sysSvc.data.user.loggedIn) {
      this.request.user = this.sysSvc.data.user.instance;
    } else {
      console.error("User not logged in.");
    }

  }

}
