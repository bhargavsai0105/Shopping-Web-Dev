import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  myform!:FormGroup
  constructor(private _fb:FormBuilder,private _helperService:HelperService,private router:Router) {}
   

  ngOnInit(): void {
    this._helperService.getContentData().subscribe(data=>{
      console.log(data)
    })
    this.myform=this._fb.group({
      Img:['',Validators.required],
      Pname:['',Validators.required],
      Price:['',Validators.required],
      Features:['',Validators.required],
      Product:['',Validators.required]
    })
  }
  submit() {
    console.log(this.myform.value)
    this._helperService.postContentData(this.myform.value).subscribe(data=>{
      console.log(data)
    })}
  goto(){
    this.router.navigate(['show'])
  }
}
