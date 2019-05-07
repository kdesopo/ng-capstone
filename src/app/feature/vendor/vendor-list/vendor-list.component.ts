import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor.class';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors:Vendor[];
  title:string = "Vendor List";
  jr:JsonResponse;
  sortCriteria:string="name";
  sortOrder:string="asc";
  
  constructor(private vendorSvc:VendorService) { }

  ngOnInit() {
    this.vendorSvc.list().subscribe(jresp =>
      {
        this.jr = jresp;
        this.vendors = this.jr.data as Vendor[];
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
