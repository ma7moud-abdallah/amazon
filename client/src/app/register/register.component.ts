import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user :any = {}  
userProfile 

  constructor(private auth:AuthService,private router:Router , private data:DataService) { }

  ngOnInit() {
   
  }

  validate(){
    if(this.user.email){
      if(this.user.name){
        if(this.user.password){
          if(this.user.password1===this.user.password){
            return true
          }else{
            this.data.warning('password doesn\'t match')
          }
       }else{
         this.data.warning('please enter your password')
       }
      }else{
        this.data.warning('please enter your username')
      }
     
    }else{
      this.data.warning('please enter your email')
    }
  }

  register(){
      if(this.validate()){
      this.auth.register(this.user)
      .subscribe(res =>{
        this.userProfile = res
        this.router.navigate(['/login'])
        
      } )
   }
  }  


}
