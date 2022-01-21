import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: any;
  id:any;

  constructor(
    private profileService: ProfileService, 
    private navCtrl: NavController, 
 
    ) { }

  ngOnInit() {

    this.id=localStorage.getItem("idUser");
    
  if(localStorage.getItem('type')=="client"){
      this.profile = this.profileService.getClientProfile(this.id).subscribe(
        (response) => {
          this.profile = response;
        },
        (error) => {
          console.log(error);
        }
      );
    console.log(this.profile);

  }else{
      this.profile = this.profileService.getDriverProfile(this.id).subscribe(
        (response) => {
          this.profile = response;
        },
        (error) => {
          console.log(error);
        }
      );
    console.log(this.profile);
  }

  }

  disconnect(){
    localStorage.clear();
    this.navCtrl.navigateRoot('/choose', {
      animated: true,
      animationDirection: 'forward',
    });
  }
}
