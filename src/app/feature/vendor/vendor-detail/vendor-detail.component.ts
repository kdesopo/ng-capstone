import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  title: string = "Vendor Detail";
  jr: JsonResponse;
  vendor: Vendor;

  constructor(private vendorSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      let id = params["id"];
      this.getVendorById(id);
    });
  }

  getVendorById(id: string) {
    this.vendorSvc.get(id)
    .subscribe(jsresp => {
      this.jr = jsresp;
      this.vendor = this.jr.data as Vendor;
    });
    
  }

    remove():void {
      this.vendorSvc.delete(this.vendor.id)
      .subscribe(res => {
        this.router.navigateByUrl("/vendors/list");
      });
    }
    
}
