import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title: string = "Product Detail";

  jr: JsonResponse;
  id:string;
  resp: any;

  product: Product;

  constructor(private productSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      let id = params["id"];
      this.getProductById(id);
    });
  }

  getProductById(id: string) {
    this.productSvc.get(id)
    .subscribe(jsresp => {
      this.jr = jsresp;
      this.product = this.jr.data as Product;
    });
  }

  remove() {
    this.productSvc.delete(this.product.id)
    .subscribe(res => {
      this.router.navigateByUrl("/products/list");
    });
  }

    edit() {
      this.productSvc.edit(this.product)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/products/list']);
      });
    }
}
