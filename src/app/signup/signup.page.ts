import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
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
