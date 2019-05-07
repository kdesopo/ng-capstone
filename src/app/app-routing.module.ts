import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { PurchaseRequestListComponent } from './feature/pr/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestCreateComponent } from './feature/pr/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestEditComponent } from './feature/pr/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestDetailComponent } from './feature/pr/purchase-request-detail/purchase-request-detail.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { PurchaseRequestLinesComponent } from './feature/pr/purchase-request-lines/purchase-request-lines.component';
import { PurchaseRequestLineItemCreateComponent } from './feature/prli/purchase-request-line-item-create/purchase-request-line-item-create.component';
import { PurchaseRequestLineItemEditComponent } from './feature/prli/purchase-request-line-item-edit/purchase-request-line-item-edit.component';
import { PurchaseRequestReviewComponent } from './feature/pr/purchase-request-review/purchase-request-review.component';
import { PurchaseRequestApproveComponent } from './feature/pr/purchase-request-approve/purchase-request-approve.component';
import { AboutComponent } from './core/about/about.component';

const routes: Routes = [
  {path:'', redirectTo: '/users/list', pathMatch: 'full'},
  {path:'users/list', component:UserListComponent},
  {path:'users/create', component:UserCreateComponent},
  {path:'users/edit', component:UserEditComponent},
  {path:'users/detail/:id', component:UserDetailComponent},
  {path:'users/remove/:id', component:UserDetailComponent},
  {path:'users/edit/:id', component:UserEditComponent},  
  {path:'users/login', component:UserLoginComponent},

  {path:'vendors/list', component:VendorListComponent},
  {path:'vendors/create', component:VendorCreateComponent},
  {path:'vendors/edit', component:VendorEditComponent},
  {path:'vendors/detail/:id', component:VendorDetailComponent},
  {path:'vendors/remove/:id', component:VendorDetailComponent},
  {path:'vendors/edit/:id', component:VendorEditComponent}, 

  {path:'products/list', component:ProductListComponent},
  {path:'products/create', component:ProductCreateComponent},
  {path:'products/edit', component:ProductEditComponent},
  {path:'products/detail/:id', component:ProductDetailComponent},
  {path:'products/remove/:id', component:ProductDetailComponent},
  {path:'products/edit/:id', component:ProductEditComponent},

  {path:'purchase-requests/list', component:PurchaseRequestListComponent},
  {path:'purchase-requests/create', component:PurchaseRequestCreateComponent},
  {path:'purchase-requests/edit', component:PurchaseRequestEditComponent},
  {path:'purchase-requests/detail/:id', component:PurchaseRequestDetailComponent},
  {path:'purchase-requests/remove/:id', component:PurchaseRequestDetailComponent},
  {path:'purchase-requests/edit/:id', component:PurchaseRequestEditComponent},
  {path:'purchase-requests/review', component:PurchaseRequestReviewComponent},  
  {path:'purchase-requests/approve/:id', component:PurchaseRequestApproveComponent},
  
  {path:'purchase-requests/lines/:id', component:PurchaseRequestLinesComponent},
  {path:'purchase-request-line-items/create/:id', component:PurchaseRequestLineItemCreateComponent},
  {path:'purchase-request-line-items/edit/:id', component:PurchaseRequestLineItemEditComponent},

  {path:'about', component:AboutComponent},

  {path:'**', component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
