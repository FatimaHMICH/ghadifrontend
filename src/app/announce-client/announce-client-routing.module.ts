import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';

import { AnnounceClientPage } from './announce-client.page';

const routes: Routes = [
  {
    path: '',
    component: AnnounceClientPage,
  },
  {
    path: '/home',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnounceClientPageRoutingModule {}
