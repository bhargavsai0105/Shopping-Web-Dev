import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirpodsComponent } from './airpods/airpods.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { IphoneComponent } from './iphone/iphone.component';
import { LoginComponent } from './login/login.component';
import { ModifyComponent } from './modify/modify.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ShowComponent } from './show/show.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
import { UserdataComponent } from './userdata/userdata.component';
import { WatchComponent } from './watch/watch.component';

const routes: Routes = [
  {path:'',redirectTo:'Login',pathMatch:'full'},
  {path:'Iphone',component:IphoneComponent},
  {path:'Apple-icon',component:HomeComponent},
  {path:'Airpods',component:AirpodsComponent},
  {path:'Watch',component:WatchComponent},
  {path:'Home',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Signup',component:SignupComponent},
  {path:'ProductInfo',component:ProductInfoComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'show',component:ShowComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'cart',component:CartComponent},
  {path:'userData',component:UserdataComponent},
  {path:'modify/:id',component:ModifyComponent},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
