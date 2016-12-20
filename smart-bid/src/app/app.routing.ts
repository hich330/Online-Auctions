import {RouterModule} from '@angular/router';

import { HomeComponent } from './public_user/home/home.compenent';
import { SigninComponent } from './public_user/signin/signin.component';
import { SignupComponent } from './public_user/signup/signup.component';
import { AuctionComponent } from './public_user/auction/auction.component';

export const routing = RouterModule.forRoot([
  { path: 'home', component: HomeComponent, data: {name: 'Home'} },
  { path: 'signIn', component: SigninComponent, data: {name: 'SignIn'} },
  { path: 'signUp', component: SignupComponent, data: {name: 'SignUp'} },
  { path: 'auction', component: AuctionComponent, data: {name: 'Auction'} },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]);
