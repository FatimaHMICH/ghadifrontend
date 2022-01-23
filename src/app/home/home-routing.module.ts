import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncesPage } from '../announces/announces.page';
import { ItemDetailsPage } from '../item-details/item-details.page';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: '/announces',
    component: AnnouncesPage
  },
  {
    path: '/item-details',
    component: ItemDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
