import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class DataService {
    
   message=''
   messageType="danger"
   
  constructor(private router:Router) { }

  success(message){
    this.message=message
    this.messageType = "success"
  }


  warning(message){
    this.message=message
    this.messageType = "warning"
  }


}
