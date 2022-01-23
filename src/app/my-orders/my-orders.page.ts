import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MyAnnouncesService } from '../service/my-announces.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

  public myAnnounces = [];

  public id_user;

  constructor(private myAnnouncesService: MyAnnouncesService, private navCtrl: NavController) { }

  ngOnInit() {
    this.id_user = localStorage.getItem('idUser');

    if (localStorage.getItem('type')== 'client' ){
      this.myAnnouncesService.getMyClientAnnounces(this.id_user).subscribe(
        (response) => {
          this.myAnnounces = response;
        },
        (error) => {
          console.log(error);
        }
      );
    }
    else {
      this.myAnnouncesService.getMyDriverAnnounces(this.id_user).subscribe(
        (response) => {
          this.myAnnounces = response;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  delete(id:any){
    if (localStorage.getItem('type')== 'client' ){
      this.myAnnouncesService.deleteClientAnnounce(id).subscribe(response => {

        let myNewAnnounces = this.myAnnounces.filter(item => item.id !== id);  
        this.myAnnounces= myNewAnnounces;

      },
      error => {
        console.log(error);
      });
    }else{
      this.myAnnouncesService.deleteDriverAnnounce(id).subscribe(response => {

        let myNewAnnounces = this.myAnnounces.filter(item => item.id !== id);  
        this.myAnnounces= myNewAnnounces;

      },
      error => {
        console.log(error);
      });
    }
  }

}
