import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  staticAlertClosed:boolean = false
  constructor(private data:DataService) { }

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 10000);
  }

}
