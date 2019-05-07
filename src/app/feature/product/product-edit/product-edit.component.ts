import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from 'src/app/service/vendor.service';
import { Vendor } from '../../../model/vendor.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title: string = 'Product Edit';

  jr: JsonResponse;
  id: string;
  resp: any;

  product: Product;
  vendors: Vendor[];

  constructor(private productSvc: ProductService,
              private vendorSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.vendorSvc.list().subscribe(vendors => 
      this.vendors = vendors.data as Vendor[]);
      
    this.productSvc.get(this.id)
    .subscribe(jrresp => {
      this.jr = jrresp;
      this.product = this.jr.data as Product;
    });
  }

  edit() {
    this.productSvc.edit(this.product)
    .subscribe(resp => {
      this.resp = resp;
      this.router.navigate(['/products/list']);
    });
  }

  compareFn(v1: number, v2:number):boolean {
    return v1 === v2;
  }
}
