import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductCartComponent } from './product-cart/product-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    ProductCartComponent
  ],
  imports: [FormsModule,CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
