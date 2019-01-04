import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators'


@Injectable()
export class AuthService {
  
  constructor( private http:HttpClient) { }
   headers(){
    let token = localStorage.getItem('token')
    let header = new HttpHeaders()
    if(token)
     header = header.set("authorization",token)
    return header
 }
   
  register(user){
    return this.http.post('http://localhost:3000/accounts/signup',user)
 }
  login(user){
    return this.http.post('http://localhost:3000/accounts/login',user)
  }

 getProfile(){
    return this.http.get('http://localhost:3000/profile',{headers:this.headers()}) 
  }

  editProfile(user){
    return this.http.put('http://localhost:3000/profile',user,{headers:this.headers()})
  }
 

  getAdderss(){
    return this.http.get('http://localhost:3000/profile/address',{headers:this.headers()})
  }

  editAddress(user){
    return this.http.post('http://localhost:3000/profile/address',user,{headers:this.headers()})
  }
  gitcats(){
    return this.http.get('http://localhost:3000/addCategory').toPromise()
  }
  getProducts(){
    return this.http.get('http://localhost:3000/products',{headers:this.headers()}).toPromise()
  }
  sendcats(body){
    return this.http.post('http://localhost:3000/addCategory',body).toPromise()
  }
  postProduct(body){
    return this.http.post('http://localhost:3000/products',body,{headers:this.headers()}).toPromise()
  }

}
