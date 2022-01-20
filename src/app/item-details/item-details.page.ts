import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { AnnounceDetailService } from '../service/announce-detail.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  selectedSize: number;
  selectedColor: number;
  activeVariation: string;

    
  public client:any;
  public driver:any;
  public announceDetail = [];
  public id: any;

  constructor(
    private animatioCntrl: AnimationController,
    private announceDetailService: AnnounceDetailService
  ) { }

  

  ngOnInit() {
    this.activeVariation = 'size';
    this.id = localStorage.getItem('id');

    if (localStorage.getItem('type') == 'client') {
      this.announceDetailService.getAnnounceDetailDriver(this.id).subscribe(
        (response) => {
          this.announceDetail = response;
        },
        (error) => {
          console.log(error);
        }
      );
    }   
    else {
      this.announceDetailService.getAnnounceDetailClient(this.id).subscribe(
        (response) => {
          this.announceDetail = response;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  segmentChanged(e: any) {
    this.activeVariation = e.detail.value;

    if (this.activeVariation == 'color') {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
      .fromTo('opacity', '1', '0.2')
      .play();

      this.animatioCntrl.create()
      .addElement(document.querySelector('.colors'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();
    } else {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();

      this.animatioCntrl.create()
      .addElement(document.querySelector('.colors'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
      .fromTo('opacity', '1', '0.2')
      .play();
    }
  }

  changeSize(size: number) {
    this.selectedSize = size;
  }

  changeColor(color: number) {
    this.selectedColor = color;
  }

  

}
