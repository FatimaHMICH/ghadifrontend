import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';

import { ChoosePage } from './choose.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosePage
  },
  {
  path: '/home',
  component: HomePage
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosePageRoutingModule {}
