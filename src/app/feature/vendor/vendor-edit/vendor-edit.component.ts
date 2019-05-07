import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  title: string = 'Vendor Edit';

  jr: JsonResponse
  id: string;
  resp: any;

  vendor: Vendor;
  
  constructor(private vendorSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    console.log("vendor edit ngOnInit", "vendor = "+ this.id);
    this.vendorSvc.get(this.id)
    .subscribe(jrresp => {
      this.jr = jrresp;
      this.vendor = this.jr.data as Vendor;
    });
  }

  edit () {
    this.vendorSvc.edit(this.vendor)
    .subscribe(resp => {
      this.resp = resp;
      this.router.navigate(['/vendors/list']);
    });
  }

  remove() {
    this.vendorSvc.delete(this.vendor.id)
    .subscribe(res => {
      this.router.navigateByUrl("vendors/list");
    });
  }
}
