import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  datasource:any;
  name:any;
  constructor(private helperservice:HelperService) { }

  ngOnInit(): void {
    this.name="iwatch"
    this.helperservice.getDataByProduct(this.name).subscribe(data=>{
      console.log(data)
      this.datasource=data
    })
  
}
goto(){
  alert("Successfully Purchased")
}
}