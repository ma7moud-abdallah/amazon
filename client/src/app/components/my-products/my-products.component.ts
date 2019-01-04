import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {
  products = []
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.getProducts()
    .then(res => {
      this.products = res['products']
    })
    .catch(err => {
      console.log(err)
    })
  }

}
