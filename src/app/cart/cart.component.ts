import { Component, OnInit } from '@angular/core';
// import { Injectable } from '@angular/core';
import { IphoneComponent } from '../iphone/iphone.component';
// @Injectable({
//   providedIn: 'root'
// })
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  array2: any;
  constructor(private iphone:IphoneComponent) { }

  ngOnInit(): void {
   
    this.array2=this.iphone.send()
    console.log(this.array2)
  }

}
