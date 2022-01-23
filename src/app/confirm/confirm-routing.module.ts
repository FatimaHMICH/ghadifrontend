import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';

import { ConfirmPage } from './confirm.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmPage
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
export class ConfirmPageRoutingModule {}
