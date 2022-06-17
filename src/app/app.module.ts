import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IphoneComponent } from './iphone/iphone.component';
import { HomeComponent } from './home/home.component';
import { AirpodsComponent } from './airpods/airpods.component';
import { WatchComponent } from './watch/watch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductInfoComponent } from './product-info/product-info.component';
import { BillComponent } from './bill/bill.component';
import { UserdataComponent } from './userdata/userdata.component';
import { ShowComponent } from './show/show.component';
import {MatTableModule} from '@angular/material/table';
import { UpdateComponent } from './update/update.component';
import { CartComponent } from './cart/cart.component';
import { ModifyComponent } from './modify/modify.component';
import { HpComponent } from './hp/hp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IphoneComponent,
    HomeComponent,
    AirpodsComponent,
    WatchComponent,
    LoginComponent,
    SignupComponent,
    ProductInfoComponent,
    BillComponent,
    UserdataComponent,
    ShowComponent,
    UpdateComponent,
    CartComponent,
    ModifyComponent,
    HpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
