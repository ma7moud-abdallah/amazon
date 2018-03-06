import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  user:any={}

  userProfile
  constructor(private auth:AuthService, private route:Router ,private data:DataService) { }

  ngOnInit() {
   
  }

  ngOnDestroy(){
    this.data.message =''
  }
  validate(){
    if(this.user.email){
      if(this.user.password){
         return true
      }else{
        this.data.warning('please enter your password')
      }
    }else{
      this.data.warning('please enter your email')
    }
  }

  login(){
      if(this.validate()) {
        this.auth.login(this.user)
        .subscribe(res => {
          this.userProfile = res
          if(this.userProfile.success){
            localStorage.setItem('token',this.userProfile.token)
            this.route.navigate(['/profile'])
          }else{
            this.data.warning(this.userProfile.message)
          }

        })
        
   }
 }

}
