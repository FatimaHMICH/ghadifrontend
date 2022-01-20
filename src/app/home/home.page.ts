import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];

  public client: any;
  public driver: any;

  constructor(
    private data: DataService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();
    if (localStorage.getItem('type') == 'client') {
      this.client = 'client';
     
    }
    else {
      this.driver = 'driver';
    }
  }

  displayAnnounces(category:any){
    localStorage.setItem('cat', category);
    this.navCtrl.navigateRoot('/announces', {
      animated: true,
      animationDirection: 'forward',
    });
  }

}
