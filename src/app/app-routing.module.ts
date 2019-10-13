import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './address/edit-address/edit-address.component';
import { PaytmComponent } from './paytm/paytm.component';
import { PaytmOrderComponent } from './paytm-order/paytm-order.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


const routes: Routes = [
  { path: '', component: CartComponent },
  {
    path: 'address', component: AddressComponent
  },
  { path: 'address/:id', component: EditAddressComponent },
  { path: 'new-address', component: EditAddressComponent },
  { path: 'pay-now', component: PaytmComponent },
  { path: 'order-id', component: PaytmOrderComponent },
  { path: 'confirm-order', component: ConfirmOrderComponent },
  { path: 'thank-you', component: ThankYouComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
