import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

// comment
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user={}
  constructor(private auth:AuthService) { }

  ngOnInit() {
     this.auth.getProfile().subscribe(user =>{
      this.user = user
      console.log(this.user)
      }) 
  }

}
