import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    Outer1Component,
    Outer2Component,
    Outer3Component,
    Outer4Component,
    Tops1Component,
    Tops2Component,
    Tops3Component,
    Tops4Component,
    Bottoms1Component,
    Bottoms2Component,
    Bottoms3Component,
    Footwear1Component,
    Footwear2Component,
    Footwear3Component,
    Accessories1Component,
    Accessories2Component,
    Accessories3Component,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
