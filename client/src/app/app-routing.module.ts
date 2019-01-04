import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthgaurdService } from './services/authgaurd.service';
import { ProfSittingsComponent } from './prof-sittings/prof-sittings.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PosProductComponent } from './components/pos-product/pos-product.component';
import { MyProductsComponent } from './components/my-products/my-products.component';
const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'categories' , component:CategoriesComponent},
  {path:'profile/sittings' , component:ProfSittingsComponent ,canActivate:[AuthgaurdService]},
  {path:'profile/address' , component:ShippingAddressComponent ,canActivate:[AuthgaurdService]},
  {path:'profile' , component:ProfileComponent ,canActivate:[AuthgaurdService]},
  {path:'postProduct' , component:PosProductComponent ,canActivate:[AuthgaurdService]},
  {path:'myProduct' , component:MyProductsComponent ,canActivate:[AuthgaurdService]},


  

  {path:'**' , redirectTo:''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
