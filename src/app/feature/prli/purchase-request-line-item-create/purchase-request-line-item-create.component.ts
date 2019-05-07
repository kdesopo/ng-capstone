import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { PurchaseRequestLineItem } from 'src/app/model/purchaserequestlineitem.class';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { PurchaseRequestLineItemService } from 'src/app/service/purchase-request-line-item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestService } from 'src/app/service/purchase-request.service';
import { PurchaseRequest } from 'src/app/model/purchaserequest.class';

@Component({
  selector: 'app-purchase-request-line-item-create',
  templateUrl: './purchase-request-line-item-create.component.html',
  styleUrls: ['./purchase-request-line-item-create.component.css']
})
export class PurchaseRequestLineItemCreateComponent implements OnInit {

  title:string = "Purchase Request Line Item Create";

  prId:string;
  jr:JsonResponse;
  prli: PurchaseRequestLineItem = new PurchaseRequestLineItem();
  request:PurchaseRequest;
  products: Product[];

  create() {
    this.prli.purchaseRequest = this.request;
    this.prliSvc.create(this.prli)
    .subscribe(jresp => 
      {
        this.jr = jresp;
        this.router.navigateByUrl('purchase-requests/lines/'+this.prId);
      }
      );
  }

  constructor(private prliSvc: PurchaseRequestLineItemService,
              private productSvc: ProductService,
              private prSvc: PurchaseRequestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.prId = params['id']);
    this.productSvc.list().subscribe(jresp =>
      {
        this.jr = jresp;
        this.products = this.jr.data as Product[]
      }
      );

      this.prSvc.get(this.prId)
      .subscribe(jresp =>
        {
          this.request = jresp.data as PurchaseRequest;
        }
        );
  }

}
