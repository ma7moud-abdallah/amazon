import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-prof-sittings',
  templateUrl: './prof-sittings.component.html',
  styleUrls: ['./prof-sittings.component.scss']
})
export class ProfSittingsComponent implements OnInit {
  user:any={}
  constructor(
    private auth:AuthService,
    private data:DataService
  ) { }

  ngOnInit() {
    this.auth.getProfile().subscribe(user =>{
      this.user = user
    }) 
  }
  
  validate(){
    if(this.user.user.name){
      if(this.user.user.name){
        if(this.user.password===this.user.password1){
           return true
        }else{
          this.data.warning('passwords are not identical')
        }

      }else{
        this.data.warning('email can\'t be empty')
      }
    }else{
    this.data.warning('name can\'t be empty')
    }
  }
  edit(){
    if(this.validate()){
      let token = localStorage.getItem('token')
      if(!token) return console.log('there is no token')
       this.auth.editProfile(this.user.user)
       .subscribe((res) =>console.log(res))
       
     }
  }

}
