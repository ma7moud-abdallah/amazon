import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories = []
  catName 

  constructor(private auth: AuthService, private data:DataService) { }

  ngOnInit() {
    this.auth.gitcats()
    .then(res => {
      this.categories = res['categories']
      console.log(" this.categories", this.categories,"res",res)
    })
  }


  sendCats(){
    if(this.catName){
      
      this.auth.sendcats({name:this.catName})
      .then(res => {
        this.data.success('Category Added Successfully')
      })
      .catch(err => {
        console.log('some thing went wrong')
      })
    }
  }
}
