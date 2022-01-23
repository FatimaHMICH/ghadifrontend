import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public categories = [];
  public todaysAnnounces = [];
  public allAnnounces = [];

  constructor(
    private data: DataService,
    private navCtrl: NavController,
    private homeService: HomeService
  ) { }

  ngOnInit() {

    if (localStorage.getItem('type') == 'client') {
      this.categories = this.data.getDriverCategories();
      this.homeService.getDateDriver().subscribe(
        (response) => {
          this.todaysAnnounces = response;
        },
        (error) => {
          console.log(error);
        }
      );
      this.homeService.getAllDrivers().subscribe(
        (response) => {
          this.allAnnounces = response;
        },
        (error) => {
          console.log(error);
        }
      );
    }
    else {
      this.categories = this.data.getClientCategories();
      this.homeService.getDateClient().subscribe(
        (response) => {
          this.todaysAnnounces = response;
        },
        (error) => {
          console.log(error);
        }
      );
      this.homeService.getAllClients().subscribe(
        (response) => {
          this.allAnnounces = response;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  displayAnnounces(category:any){
    localStorage.setItem('cat', category);
    this.navCtrl.navigateRoot('/announces', {
      animated: true,
      animationDirection: 'forward',
    });
  }

  displayDetail(id:any){
    localStorage.setItem('id', id);
    this.navCtrl.navigateRoot('/item-details', {
      animated: true,
      animationDirection: 'forward',
    });
  }

}
