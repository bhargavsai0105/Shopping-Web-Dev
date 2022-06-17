import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
username:any;
  constructor(private router:Router,private helperservice:HelperService) { }
  

  ngOnInit(): void {
    this.username=this.helperservice.name
  }
  
}
