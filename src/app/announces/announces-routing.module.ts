import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnouncesPage } from './announces.page';

const routes: Routes = [
  {
    path: '',
    component: AnnouncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnouncesPageRoutingModule {}
