import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';



@Injectable()
export class AuthgaurdService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(){
    if(localStorage.getItem('token')) return true
    this.router.navigate(['/login'])
    return false
  }

}
