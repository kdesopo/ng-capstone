import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { PurchaseRequest } from 'src/app/model/purchaserequest.class';
import { User } from 'src/app/model/user.class';
import { PurchaseRequestService } from 'src/app/service/purchase-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-purchase-request-edit',
  templateUrl: './purchase-request-edit.component.html',
  styleUrls: ['./purchase-request-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {
  title: string = 'Purchase Request Edit';

  jr:JsonResponse;
  id: string;
  resp: any;

  request: PurchaseRequest;
  users: User[];
  
  constructor(private requestSvc: PurchaseRequestService,
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.params.subscribe(params => this.id = params['id']);
      this.userSvc.list().subscribe(users => 
        this.users = users.data as User[]);
        
      this.requestSvc.get(this.id)
      .subscribe(jrresp => {
        this.jr = jrresp;
        this.request = this.jr.data as PurchaseRequest;
      });
    }
  
    edit() {
      this.requestSvc.edit(this.request)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchase-requests/list']);
      });
    }
  
    compareFn(v1: number, v2:number):boolean {
      return v1 === v2;
    }
}
