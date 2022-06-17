import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  base='http://localhost:3000'
  arr2=[]
  name:any
  constructor(private _http:HttpClient) { }


  postData(data:any){
    console.log(data)
  }
  postUserData(data:any){
    return this._http.post(this.base+'/api/postInfo',data)
    
  }
  getData(){
    return this._http.get(this.base+'/api/getUserInfo')
  }
  postContentData(data:any){
    return this._http.post(this.base+'/api/postProductInfo',data)
  }
  getContentData(){
    return this._http.get(this.base+'/api/getProductInfo')
  }
  UpdateData(id:any,data:any){
    return this._http.put(this.base+'/api/updateDataById/'+id,data);
  }
  deleteData(id:any){
    return this._http.delete(this.base+'/api/deleteDataById/'+id);
  }
  getUserById(id:any){
    return this._http.get(this.base+'/api/getById/'+id);
  }
  getDataByProduct(name:any){
    return this._http.get(this.base+'/api/getDataByProduct/'+name);

  }
  UpdateUserData(id:any,data:any){
    return this._http.put(this.base+'/api/updateUserById/'+id,data);
  }
  deleteUserData(id:any){
    return this._http.delete(this.base+'/api/deleteUserById/'+id);
  }
  getById(id:any){
    return this._http.get(this.base+'/api/getUserById/'+id);
  }
  check(mail:any){
    return this._http.get(this.base+'/api/userData/'+mail);

  }
  }

