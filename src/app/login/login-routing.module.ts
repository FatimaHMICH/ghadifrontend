import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';
import { SignupPage } from '../signup/signup.page';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: '/signup',
    component: SignupPage
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
export class LoginPageRoutingModule {}
