import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  jr:JsonResponse;
  products:Product[];
  title:string = "Product List";
  sortCriteria:string = "partNumber";
  sortOrder:string="asc";
  constructor(private productSvc:ProductService) { }

  ngOnInit() {
    this.productSvc.list().subscribe(jresp =>
      {
        this.jr = jresp;
        this.products = this.jr.data as Product[];
      }
      );
  }

  sortBy(column: string): void {
    if(this.sortCriteria === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }

}
