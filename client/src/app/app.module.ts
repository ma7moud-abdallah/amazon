import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { DataService } from './services/data.service';
import { AuthgaurdService } from './services/authgaurd.service';
import { ProfSittingsComponent } from './prof-sittings/prof-sittings.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PosProductComponent } from './components/pos-product/pos-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyProductsComponent } from './components/my-products/my-products.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    MessagesComponent,
    ProfSittingsComponent,
    ShippingAddressComponent,
    CategoriesComponent,
    PosProductComponent,
    MyProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService,DataService,AuthgaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
