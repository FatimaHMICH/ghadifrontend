import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnnouncesService } from '../service/announces.service';

@Component({
  selector: 'app-announces',
  templateUrl: './announces.page.html',
  styleUrls: ['./announces.page.scss'],
})
export class AnnouncesPage implements OnInit {

  public announces = [];
  public cat: any;

  constructor(private announcesService: AnnouncesService, private navCtrl: NavController,) {}

  ngOnInit() {

    this.cat = localStorage.getItem('cat');

    if (localStorage.getItem('type') == 'client') {
      this.announcesService.getAnnouncesDriver(this.cat).subscribe(
        (response) => {
          this.announces = response;
          console.log(this.announces);
        },
        (error) => {
          console.log(error);
        }
      );
    }   
    else {
      this.announcesService.getAnnouncesClient(this.cat).subscribe(
        (response) => {
          this.announces = response;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
   
  displayDetail(id:any){
    localStorage.setItem('id', id);
    this.navCtrl.navigateRoot('/item-details', {
      animated: true,
      animationDirection: 'forward',
    });
  }

}
