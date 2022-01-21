import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailsPage } from '../item-details/item-details.page';

import { AnnouncesPage } from './announces.page';

const routes: Routes = [
  {
    path: '',
    component: AnnouncesPage
  }
  ,
  {
    path: '/item-details',
    component: ItemDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnouncesPageRoutingModule {}
