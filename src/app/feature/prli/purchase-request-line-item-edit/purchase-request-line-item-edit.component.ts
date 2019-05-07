import { Component, OnInit } from '@angular/core';
import { PurchaseRequestLineItemService } from 'src/app/service/purchase-request-line-item.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product.class';
import { PurchaseRequestLineItem } from 'src/app/model/purchaserequestlineitem.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchase-request-line-item-edit',
  templateUrl: './purchase-request-line-item-edit.component.html',
  styleUrls: ['./purchase-request-line-item-edit.component.css']
})
export class PurchaseRequestLineItemEditComponent implements OnInit {

  title = 'Purchase Request Line Item Edit';
  products:Product[];
  prli: PurchaseRequestLineItem;
  id:string;
  prId:number;

  constructor(private prliSvc: PurchaseRequestLineItemService,
              private productSvc: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.prliSvc.get(this.id)
    .subscribe(jresp =>
      {
        this.prli = jresp.data as PurchaseRequestLineItem;
      }); 

    this.productSvc.list()
    .subscribe(jresp =>
      {
        this.products = jresp.data as Product[];
      });
  }

  edit() {
    this.prId = this.prli.purchaseRequest.id;
    this.prliSvc.edit(this.prli)
    .subscribe(jresp =>
      {
        this.router.navigateByUrl('purchase-requests/lines/'+ this.prId);
      })
  }

}
