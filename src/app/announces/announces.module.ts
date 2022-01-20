import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnouncesPageRoutingModule } from './announces-routing.module';

import { AnnouncesPage } from './announces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnouncesPageRoutingModule
  ],
  declarations: [AnnouncesPage]
})
export class AnnouncesPageModule {}
