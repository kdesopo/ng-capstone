import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = "Product Create";
  jr: JsonResponse;
  product: Product = new Product();
  vendors: Vendor[];
  
  create() {
    this.productSvc.create(this.product)
    .subscribe(resp => {
      this.jr = resp;
      this.router.navigate(['products/list']);
    });
  }
  constructor(private productSvc: ProductService,
              private vendorSvc: VendorService,
              private router: Router) { }

  ngOnInit() {
    this.vendorSvc.list()
      .subscribe(jresp => {
        this.jr = jresp as JsonResponse;
        this.vendors = this.jr.data as Vendor[];
      });
  }

}
