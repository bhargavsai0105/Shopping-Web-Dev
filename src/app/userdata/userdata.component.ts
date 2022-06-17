import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit {
  dataSource:any
  displayedColumns:string[]=['_id','Email','Password','FirstName','LastName']
  constructor(private helperservice:HelperService) {}



  ngOnInit(): void {
    this.helperservice.getData().subscribe(data=>{
      console.log(data)
      this.dataSource=data
    })
  }

  

}
