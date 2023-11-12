import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Outer1Component } from './outer1/outer1.component';
import { Outer2Component } from './outer2/outer2.component';
import { Outer3Component } from './outer3/outer3.component';
import { Outer4Component } from './outer4/outer4.component';
import { Tops1Component } from './tops1/tops1.component';
import { Tops2Component } from './tops2/tops2.component';
import { Tops3Component } from './tops3/tops3.component';
import { Tops4Component } from './tops4/tops4.component';
import { Bottoms1Component } from './bottoms1/bottoms1.component';
import { Bottoms2Component } from './bottoms2/bottoms2.component';
import { Bottoms3Component } from './bottoms3/bottoms3.component';
import { Footwear1Component } from './footwear1/footwear1.component';
import { Footwear2Component } from './footwear2/footwear2.component';
import { Footwear3Component } from './footwear3/footwear3.component';
import { Accessories1Component } from './accessories1/accessories1.component';
import { Accessories2Component } from './accessories2/accessories2.component';
import { Accessories3Component } from './accessories3/accessories3.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  { path: 'outer1', component: Outer1Component },
  { path: 'outer2', component: Outer2Component },
  { path: 'outer3', component: Outer3Component },
  { path: 'outer4', component: Outer4Component },
  { path: 'tops1', component: Tops1Component },
  { path: 'tops2', component: Tops2Component },
  { path: 'tops3', component: Tops3Component },
  { path: 'tops4', component: Tops4Component },
  { path: 'bottoms1', component: Bottoms1Component },
  { path: 'bottoms2', component: Bottoms2Component },
  { path: 'bottoms3', component: Bottoms3Component },
  { path: 'footwear1', component: Footwear1Component },
  { path: 'footwear2', component: Footwear2Component },
  { path: 'footwear3', component: Footwear3Component },
  { path: 'accessories1', component: Accessories1Component },
  { path: 'accessories2', component: Accessories2Component },
  { path: 'accessories3', component: Accessories3Component },
  { path: 'cart-page', component: CartComponent },
  { path: 'login', component: LoginComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'error', component: ErrorComponent },
  {path: 'user-card', component: UserCardComponent },
  {path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
