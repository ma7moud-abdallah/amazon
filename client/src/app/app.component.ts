import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 searchTerm =''
 isCollapsed = true
 user = {}
 
 constructor(private router:Router,private auth:AuthService){
    this.auth.getProfile().subscribe(user => this.user= user)
 }

 getToken(){
   return localStorage.getItem('token')
 }

 collapse(){
  this.isCollapsed= true
 }

 closeDropdown(dropdown){
   dropdown.close()
 }

 logout(){
   this.user = {}
   localStorage.clear()
   this.router.navigate([''])
 
 }

 search(){

 }
}
