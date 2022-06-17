import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {
  myform!:FormGroup
  elementId:any
  constructor(private helperservice:HelperService,private router:Router,private formbuilder:FormBuilder,private activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.elementId=this.activatedRoute.snapshot.paramMap.get('id')
    this.myform=this.formbuilder.group({
      Email:'',
      Password:'',
      FirstName:'',
      LastName:''
    })
    console.log(this.elementId)
    this.helperservice.getById(this.elementId).subscribe((data:any)=>{
      console.log(data)
      this.myform.setValue({
        Email:data[0]?.Email,Password:data[0]?.Password,FirstName:data[0]?.FirstName,LastName:data[0]?.LastName
      })
    })
  }
  update(){
    this.helperservice.UpdateUserData(this.elementId,this.myform.value).subscribe(data=>{
      console.log(data)
      alert('Update Successfully')
      this.router.navigate(['userData'])
    })
  }
  delete(){
    this.helperservice.deleteUserData(this.elementId).subscribe(data=>{
      console.log(data)
      alert('Delete Successfully')
      this.router.navigate(['userData'])
    })
  }

}
