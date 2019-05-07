import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  title: string = "Vendor Create";
  resp: any;
  vendor: Vendor = new Vendor();

  create() {
    this.vendorSvc.create(this.vendor)
    .subscribe(resp => {
      this.resp = resp;
      this.router.navigate(['/vendors/list']);
    });
  }
  constructor(private vendorSvc: VendorService,
              private router: Router) { }

  ngOnInit() {
  }

}
