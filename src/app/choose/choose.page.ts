import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.page.html',
  styleUrls: ['./choose.page.scss'],
})
export class ChoosePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  storage (){
    localStorage.setItem('type', 'client');
  }
  storageDriver (){
    localStorage.setItem('type', 'driver');
  }
}
