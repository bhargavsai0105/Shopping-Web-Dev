import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  dataSource:any
  displayedColumns:string[]=['_id','Img','Pname','Price','Features','Product']
  constructor(private helperService:HelperService) {

   }

  ngOnInit(): void {
    this.helperService.getContentData().subscribe(data=>{
      console.log(data)
      this.dataSource=data
    })
  }

}
