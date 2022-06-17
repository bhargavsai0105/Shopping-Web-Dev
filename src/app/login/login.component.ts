import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myform!:FormGroup
  data1:any
  
  constructor(private _router:Router,private formbuilder:FormBuilder,private helperservice:HelperService) { }

  ngOnInit(): void {
    this.myform=this.formbuilder.group({
      Email:'',
      Password:''
    })

  }
  goto(){
    this._router.navigate(['Signup'])
  }
  submit(data:any){
    if(data[0].Email== this.myform.value.Email && data[0].Password== this.myform.value.Password ){
      this.helperservice.name=data[0].FirstName
      this._router.navigate(['Home'])
    }else{
      alert('Invalid Details')
    }
    
    }
  signin(){
    this.helperservice.check(this.myform.value.Email).subscribe(data=>{
      
      this.data1=data
      this.submit(this.data1)
    })
  }
}
