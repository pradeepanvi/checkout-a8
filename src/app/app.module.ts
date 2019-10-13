import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './address/edit-address/edit-address.component';
import { PaytmComponent } from './paytm/paytm.component';
import { PaytmOrderComponent } from './paytm-order/paytm-order.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CartComponent,
    AddressComponent,
    EditAddressComponent,
    PaytmComponent,
    PaytmOrderComponent,
    ConfirmOrderComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
