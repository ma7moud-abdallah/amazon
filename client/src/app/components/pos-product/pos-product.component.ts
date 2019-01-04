import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-pos-product',
  templateUrl: './pos-product.component.html',
  styleUrls: ['./pos-product.component.scss']
})
export class PosProductComponent implements OnInit {
 product:any = {
   name:'',
   price:'',
   image:'',
   description:'',
   category:''
 }
 categories
 pForm:FormGroup
  constructor(private auth: AuthService,private data:DataService,private fb:FormBuilder) { 
   this.PF()
  }

  PF(){
    this.pForm = this.fb.group({
      name:['',Validators.required],
      price:['',Validators.required],
      cat:['',Validators.required],
      desc:['',Validators.required],
      image:['',Validators.required],
    })
  }
  ngOnInit() {
    
    this.auth.gitcats()
    .then(res => {
      this.categories = res['categories']
    })
    .catch(err => {
      this.data.warning('failed to load categories')
    })
  }

  postProduct(){
    if(!this.pForm.valid)  return  this.data.success('all failds requiered')
    this.auth.postProduct(this.product)
    .then(res => {
      this.data.success('product added successfully')
    })
    .catch(err => {
      this.data.warning('failed to add product')
    })
  }



}
