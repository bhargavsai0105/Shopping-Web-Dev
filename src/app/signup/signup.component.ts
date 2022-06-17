import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from '../helper.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  myform!:FormGroup
  array3=[]
  constructor(private fb:FormBuilder,private _helperService:HelperService,private router:Router) { }

  ngOnInit(): void {
    this._helperService.getData().subscribe(data=>{
      console.log(data)
    })
    this.myform=this.fb.group({
      Email:['',Validators.compose([Validators.required,Validators.email])],
      Password:['',Validators.compose([Validators.required,Validators.minLength(5)])],
      FirstName:['',Validators.required],
      LastName:['',Validators.required]
    })
    
  }
  submit(){
    this._helperService.check(this.myform.value.Email).subscribe(data=>{
    this.user(data)  
    })
  }
  user(data:any){
    if(data.length==0){
      this._helperService.postUserData(this.myform.value).subscribe(data=>{
        console.log(data)
      })
    
    }else{
      alert("account already exists")
    }
    
  }

  move(
  ){
    this.router.navigate(['Login'])
  }

  // submit(){
  //   this._helperService.postUserData(this.myform.value).subscribe(data=>{
  //     console.log(data)
  //   })
  // }
}
