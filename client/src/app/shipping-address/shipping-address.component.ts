import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {
user:any = {}
  constructor(private auth:AuthService,private data:DataService) { }

  ngOnInit() {
    this.auth.getAdderss().subscribe(res => {
      this.user = res;
      console.log(this.user)
    })
  }

  validate(){
    if(this.user.address.addr1){
      if(this.user.address.addr2){
        if(this.user.address.city){
          if(this.user.address.state){
            if(this.user.address.postalCode){
               return true
            }else{
              this.data.warning('postal code is required')
            }
          }else{
            this.data.warning('state is required')
          }
        }else{
          this.data.warning('city is required')
        }
      }else{
        this.data.warning('ddr2 is required')
      }
    }else{
     this.data.warning('ddr1 is required')
    }
  }

 edit(){
   if(this.validate()){
     this.auth.editAddress(this.user.address)
     .subscribe(res => console.log(res))
   }

 }
}
