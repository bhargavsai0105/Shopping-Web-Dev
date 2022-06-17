import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';


@Component({
  selector: 'app-airpods',
  templateUrl: './airpods.component.html',
  styleUrls: ['./airpods.component.scss']
})
export class AirpodsComponent implements OnInit {
  datasource:any;
  name:any

  constructor(private helperservice:HelperService) { }

  ngOnInit(): void {
    this.name='airpods'
    this.helperservice.getDataByProduct(this.name).subscribe(data=>{
      console.log(data)
      this.datasource=data
    })
  }
  goto(){
    alert("Successfully Purchased")
  }

}
