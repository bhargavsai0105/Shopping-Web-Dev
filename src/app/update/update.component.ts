import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  elementId:any;
  myform!:FormGroup
  constructor(private helperService:HelperService,private router:Router,private activatedRoute:ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.elementId=this.activatedRoute.snapshot.paramMap.get('id')
    this.myform=this.fb.group({
      Img:'',
      Pname:'',
      Price:'',
      Features:'',
      Product:''
    })
    console.log(this.elementId)
    this.helperService.getUserById(this.elementId).subscribe((data:any)=>{
      console.log(data)
      this.myform.setValue({
        Img:data[0]?.Img,Pname:data[0]?.Pname,Price:data[0]?.Price,Features:data[0]?.Features,Product:data[0]?.Product
      })
    })
  }


  update(){
    this.helperService.UpdateData(this.elementId,this.myform.value).subscribe(data=>{
      console.log(data)
      alert('Update Successfully')
      this.router.navigate(['show'])
    })
  }
  delete(){
    this.helperService.deleteData(this.elementId).subscribe(data=>{
      console.log(data)
      alert('Delete Successfully')
      this.router.navigate(['show'])
    })
  }

}
