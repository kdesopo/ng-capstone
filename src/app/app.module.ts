import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { MenuComponent } from './core/menu/menu.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorService } from './service/vendor.service';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductService } from './service/product.service';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { SortPipe } from './pipe/sort.pipe';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { SystemService } from './service/system.service';
import { PurchaseRequestListComponent } from './feature/pr/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestCreateComponent } from './feature/pr/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestDetailComponent } from './feature/pr/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestEditComponent } from './feature/pr/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestService } from './service/purchase-request.service';
import { PurchaseRequestLineItemCreateComponent } from './feature/prli/purchase-request-line-item-create/purchase-request-line-item-create.component';
import { PurchaseRequestLineItemEditComponent } from './feature/prli/purchase-request-line-item-edit/purchase-request-line-item-edit.component';
import { PurchaseRequestLineItemService } from './service/purchase-request-line-item.service';
import { PurchaseRequestLinesComponent } from './feature/pr/purchase-request-lines/purchase-request-lines.component';
import { PurchaseRequestReviewComponent } from './feature/pr/purchase-request-review/purchase-request-review.component';
import { PurchaseRequestApproveComponent } from './feature/pr/purchase-request-approve/purchase-request-approve.component';
import { AboutComponent } from './core/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    UserCreateComponent,
    VendorListComponent,
    VendorCreateComponent,
    ProductListComponent,
    ProductCreateComponent,
    UserEditComponent,
    UserDetailComponent,
    VendorDetailComponent,
    VendorEditComponent,
    ProductEditComponent,
    ProductDetailComponent,
    SortPipe,
    PurchaseRequestListComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestCreateComponent,
    UserLoginComponent,
    PurchaseRequestListComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestLineItemCreateComponent,
    PurchaseRequestLineItemEditComponent,
    PurchaseRequestLinesComponent,
    PurchaseRequestReviewComponent,
    PurchaseRequestApproveComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, VendorService, ProductService, 
    PurchaseRequestService, PurchaseRequestLineItemService, SystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
