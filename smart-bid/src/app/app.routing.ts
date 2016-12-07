import {RouterModule} from '@angular/router';

import { HomeComponent } from './public_user/home/home.compenent';
import { SigninComponent } from './public_user/signin/signin.component';

export const routing = RouterModule.forRoot([
  { path: 'home', component: HomeComponent },
  { path: 'signIn', component: SigninComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]);
