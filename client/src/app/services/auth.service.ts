import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators'


@Injectable()
export class AuthService {
  
  constructor( private http:HttpClient) { }
   headers(){
    let token = localStorage.getItem('token')
    return token ? new HttpHeaders().set("authorization",token):null
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
    return this.http.post('http://localhost:3000/profile',{headers:this.headers()},user)
  }
 

  getAdderss(){
    return this.http.get('http://localhost:3000/profile/address',{headers:this.headers()})
  }

  editAddress(user){
    return this.http.post('http://localhost:3000/profile/address',{headers:this.headers()},user)
  }
}
