import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { HelperService } from '../helper.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.scss']
})
export class IphoneComponent implements OnInit {
  datasource:any;
  name:any;
  array:String[]=[];
  constructor(private helperservice:HelperService,private router:Router) {
    
   }

  ngOnInit(): void {
    this.name="iphone"
    this.helperservice.getDataByProduct(this.name).subscribe(data=>{
      console.log(data)
      this.datasource=data
      
    })
  }
  goto(data:any){
    alert(data+' Successfully Purchased!!!')
  }
  send(){
    return this.array
  }
}
