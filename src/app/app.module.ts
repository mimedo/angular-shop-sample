import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "@components/top-bar/top-bar.component";
import { ProductListComponent } from "@components/product/product-list/product-list.component";
import { ProductAlertsComponent } from "@components/product/product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "@components/product/product-details/product-details.component";
import { CartComponent } from "@components/cart/cart.component";
import { ShippingComponent } from "@components/shipping/shipping.component";
import { LoginComponent } from "@components/login/login.component";
import { RegisterComponent } from "@components/register/register.component";
import { UserListComponent } from "@components/user-list/user-list.component";

import { CartService } from "@services/cart.service";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material";
import { UserDetailComponent } from "@components/user-detail/user-detail.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: ProductListComponent},
      {path: "products/:productId", component: ProductDetailsComponent},
      {path: "cart", component: CartComponent},
      {path: "shipping", component: ShippingComponent},
      {path: "login", component: LoginComponent},
      {path: "register", component: RegisterComponent},
      {path: "users", component: UserListComponent},
      {path: "users/:userId", component: UserDetailComponent}
    ]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    UserDetailComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
