import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  
  public client:any;
  public driver:any;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('type')== 'client' ){
      this.client='client';
    }
    else {
      this.driver='driver';
    }
  }

}
